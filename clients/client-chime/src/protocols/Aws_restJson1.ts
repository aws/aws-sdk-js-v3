// smithy-typescript generated code
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
  isValidHostname as __isValidHostname,
} from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map as __map,
  parseEpochTimestamp as __parseEpochTimestamp,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
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
  Address,
  AlexaForBusinessMetadata,
  AppInstance,
  AppInstanceAdmin,
  AppInstanceAdminSummary,
  AppInstanceRetentionSettings,
  AppInstanceStreamingConfiguration,
  AppInstanceSummary,
  AppInstanceUser,
  AppInstanceUserMembershipSummary,
  AppInstanceUserSummary,
  ArtifactsConfiguration,
  Attendee,
  AudioArtifactsConfiguration,
  BadRequestException,
  BatchChannelMemberships,
  BatchCreateChannelMembershipError,
  Bot,
  BusinessCallingSettings,
  CandidateAddress,
  Capability,
  Channel,
  ChannelBan,
  ChannelBanSummary,
  ChannelMembership,
  ChannelMembershipForAppInstanceUserSummary,
  ChannelMembershipSummary,
  ChannelMessage,
  ChannelMessageSummary,
  ChannelModeratedByAppInstanceUserSummary,
  ChannelModerator,
  ChannelModeratorSummary,
  ChannelRetentionSettings,
  ChannelSummary,
  ChimeSdkMeetingConfiguration,
  ConflictException,
  ContentArtifactsConfiguration,
  ConversationRetentionSettings,
  CreateAttendeeError,
  CreateAttendeeRequestItem,
  Credential,
  DNISEmergencyCallingConfiguration,
  EmergencyCallingConfiguration,
  EngineTranscribeMedicalSettings,
  EngineTranscribeSettings,
  EventsConfiguration,
  ForbiddenException,
  GeoMatchParams,
  Identity,
  License,
  MediaCapturePipeline,
  MediaPlacement,
  Meeting,
  MeetingNotificationConfiguration,
  Member,
  MemberError,
  MembershipItem,
  MessagingSessionEndpoint,
  NotFoundException,
  OrderedPhoneNumber,
  Participant,
  PhoneNumber,
  PhoneNumberAssociation,
  PhoneNumberCapabilities,
  PhoneNumberError,
  PhoneNumberOrder,
  PhoneNumberType,
  ProxySession,
  ResourceLimitExceededException,
  Room,
  RoomMembership,
  SelectedVideoStreams,
  ServiceFailureException,
  ServiceUnavailableException,
  SigninDelegateGroup,
  SipMediaApplication,
  SipMediaApplicationCall,
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
  UserError,
  VideoArtifactsConfiguration,
  VoiceConnector,
  VoiceConnectorGroup,
  VoiceConnectorItem,
  VoiceConnectorSettings,
} from "../models/models_0";
import {
  Invite,
  LoggingConfiguration,
  Origination,
  OriginationRoute,
  PhoneNumberCountry,
  Proxy,
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

export const serializeAws_restJson1AssociatePhoneNumbersWithVoiceConnectorCommand = async (
  input: AssociatePhoneNumbersWithVoiceConnectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/voice-connectors/{VoiceConnectorId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "VoiceConnectorId",
    () => input.VoiceConnectorId!,
    "{VoiceConnectorId}",
    false
  );
  const query: any = map({
    operation: [, "associate-phone-numbers"],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.E164PhoneNumbers != null && {
      E164PhoneNumbers: serializeAws_restJson1E164PhoneNumberList(input.E164PhoneNumbers, context),
    }),
    ...(input.ForceAssociate != null && { ForceAssociate: input.ForceAssociate }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1AssociatePhoneNumbersWithVoiceConnectorGroupCommand = async (
  input: AssociatePhoneNumbersWithVoiceConnectorGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/voice-connector-groups/{VoiceConnectorGroupId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "VoiceConnectorGroupId",
    () => input.VoiceConnectorGroupId!,
    "{VoiceConnectorGroupId}",
    false
  );
  const query: any = map({
    operation: [, "associate-phone-numbers"],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.E164PhoneNumbers != null && {
      E164PhoneNumbers: serializeAws_restJson1E164PhoneNumberList(input.E164PhoneNumbers, context),
    }),
    ...(input.ForceAssociate != null && { ForceAssociate: input.ForceAssociate }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1AssociatePhoneNumberWithUserCommand = async (
  input: AssociatePhoneNumberWithUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accounts/{AccountId}/users/{UserId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "AccountId", () => input.AccountId!, "{AccountId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "UserId", () => input.UserId!, "{UserId}", false);
  const query: any = map({
    operation: [, "associate-phone-number"],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.E164PhoneNumber != null && { E164PhoneNumber: input.E164PhoneNumber }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1AssociateSigninDelegateGroupsWithAccountCommand = async (
  input: AssociateSigninDelegateGroupsWithAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accounts/{AccountId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "AccountId", () => input.AccountId!, "{AccountId}", false);
  const query: any = map({
    operation: [, "associate-signin-delegate-groups"],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.SigninDelegateGroups != null && {
      SigninDelegateGroups: serializeAws_restJson1SigninDelegateGroupList(input.SigninDelegateGroups, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1BatchCreateAttendeeCommand = async (
  input: BatchCreateAttendeeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/meetings/{MeetingId}/attendees";
  resolvedPath = __resolvedPath(resolvedPath, input, "MeetingId", () => input.MeetingId!, "{MeetingId}", false);
  const query: any = map({
    operation: [, "batch-create"],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.Attendees != null && {
      Attendees: serializeAws_restJson1CreateAttendeeRequestItemList(input.Attendees, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1BatchCreateChannelMembershipCommand = async (
  input: BatchCreateChannelMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-chime-bearer": input.ChimeBearer!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels/{ChannelArn}/memberships";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  const query: any = map({
    operation: [, "batch-create"],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.MemberArns != null && { MemberArns: serializeAws_restJson1MemberArns(input.MemberArns, context) }),
    ...(input.Type != null && { Type: input.Type }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "messaging-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1BatchCreateRoomMembershipCommand = async (
  input: BatchCreateRoomMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AccountId}/rooms/{RoomId}/memberships";
  resolvedPath = __resolvedPath(resolvedPath, input, "AccountId", () => input.AccountId!, "{AccountId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "RoomId", () => input.RoomId!, "{RoomId}", false);
  const query: any = map({
    operation: [, "batch-create"],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.MembershipItemList != null && {
      MembershipItemList: serializeAws_restJson1MembershipItemList(input.MembershipItemList, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1BatchDeletePhoneNumberCommand = async (
  input: BatchDeletePhoneNumberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/phone-numbers";
  const query: any = map({
    operation: [, "batch-delete"],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.PhoneNumberIds != null && {
      PhoneNumberIds: serializeAws_restJson1NonEmptyStringList(input.PhoneNumberIds, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1BatchSuspendUserCommand = async (
  input: BatchSuspendUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accounts/{AccountId}/users";
  resolvedPath = __resolvedPath(resolvedPath, input, "AccountId", () => input.AccountId!, "{AccountId}", false);
  const query: any = map({
    operation: [, "suspend"],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.UserIdList != null && { UserIdList: serializeAws_restJson1UserIdList(input.UserIdList, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1BatchUnsuspendUserCommand = async (
  input: BatchUnsuspendUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accounts/{AccountId}/users";
  resolvedPath = __resolvedPath(resolvedPath, input, "AccountId", () => input.AccountId!, "{AccountId}", false);
  const query: any = map({
    operation: [, "unsuspend"],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.UserIdList != null && { UserIdList: serializeAws_restJson1UserIdList(input.UserIdList, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1BatchUpdatePhoneNumberCommand = async (
  input: BatchUpdatePhoneNumberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/phone-numbers";
  const query: any = map({
    operation: [, "batch-update"],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.UpdatePhoneNumberRequestItems != null && {
      UpdatePhoneNumberRequestItems: serializeAws_restJson1UpdatePhoneNumberRequestItemList(
        input.UpdatePhoneNumberRequestItems,
        context
      ),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1BatchUpdateUserCommand = async (
  input: BatchUpdateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accounts/{AccountId}/users";
  resolvedPath = __resolvedPath(resolvedPath, input, "AccountId", () => input.AccountId!, "{AccountId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.UpdateUserRequestItems != null && {
      UpdateUserRequestItems: serializeAws_restJson1UpdateUserRequestItemList(input.UpdateUserRequestItems, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateAccountCommand = async (
  input: CreateAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accounts";
  let body: any;
  body = JSON.stringify({
    ...(input.Name != null && { Name: input.Name }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateAppInstanceCommand = async (
  input: CreateAppInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/app-instances";
  let body: any;
  body = JSON.stringify({
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.Metadata != null && { Metadata: input.Metadata }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "identity-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateAppInstanceAdminCommand = async (
  input: CreateAppInstanceAdminCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/app-instances/{AppInstanceArn}/admins";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AppInstanceArn",
    () => input.AppInstanceArn!,
    "{AppInstanceArn}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.AppInstanceAdminArn != null && { AppInstanceAdminArn: input.AppInstanceAdminArn }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "identity-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateAppInstanceUserCommand = async (
  input: CreateAppInstanceUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/app-instance-users";
  let body: any;
  body = JSON.stringify({
    ...(input.AppInstanceArn != null && { AppInstanceArn: input.AppInstanceArn }),
    ...(input.AppInstanceUserId != null && { AppInstanceUserId: input.AppInstanceUserId }),
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.Metadata != null && { Metadata: input.Metadata }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "identity-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateAttendeeCommand = async (
  input: CreateAttendeeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/meetings/{MeetingId}/attendees";
  resolvedPath = __resolvedPath(resolvedPath, input, "MeetingId", () => input.MeetingId!, "{MeetingId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.ExternalUserId != null && { ExternalUserId: input.ExternalUserId }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1AttendeeTagList(input.Tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateBotCommand = async (
  input: CreateBotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accounts/{AccountId}/bots";
  resolvedPath = __resolvedPath(resolvedPath, input, "AccountId", () => input.AccountId!, "{AccountId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.DisplayName != null && { DisplayName: input.DisplayName }),
    ...(input.Domain != null && { Domain: input.Domain }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateChannelCommand = async (
  input: CreateChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-chime-bearer": input.ChimeBearer!,
  });
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels";
  let body: any;
  body = JSON.stringify({
    ...(input.AppInstanceArn != null && { AppInstanceArn: input.AppInstanceArn }),
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.Metadata != null && { Metadata: input.Metadata }),
    ...(input.Mode != null && { Mode: input.Mode }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Privacy != null && { Privacy: input.Privacy }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "messaging-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateChannelBanCommand = async (
  input: CreateChannelBanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-chime-bearer": input.ChimeBearer!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels/{ChannelArn}/bans";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.MemberArn != null && { MemberArn: input.MemberArn }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "messaging-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateChannelMembershipCommand = async (
  input: CreateChannelMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-chime-bearer": input.ChimeBearer!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels/{ChannelArn}/memberships";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.MemberArn != null && { MemberArn: input.MemberArn }),
    ...(input.Type != null && { Type: input.Type }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "messaging-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateChannelModeratorCommand = async (
  input: CreateChannelModeratorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-chime-bearer": input.ChimeBearer!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels/{ChannelArn}/moderators";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.ChannelModeratorArn != null && { ChannelModeratorArn: input.ChannelModeratorArn }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "messaging-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateMediaCapturePipelineCommand = async (
  input: CreateMediaCapturePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/media-capture-pipelines";
  let body: any;
  body = JSON.stringify({
    ...(input.ChimeSdkMeetingConfiguration != null && {
      ChimeSdkMeetingConfiguration: serializeAws_restJson1ChimeSdkMeetingConfiguration(
        input.ChimeSdkMeetingConfiguration,
        context
      ),
    }),
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.SinkArn != null && { SinkArn: input.SinkArn }),
    ...(input.SinkType != null && { SinkType: input.SinkType }),
    ...(input.SourceArn != null && { SourceArn: input.SourceArn }),
    ...(input.SourceType != null && { SourceType: input.SourceType }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateMeetingCommand = async (
  input: CreateMeetingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/meetings";
  let body: any;
  body = JSON.stringify({
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.ExternalMeetingId != null && { ExternalMeetingId: input.ExternalMeetingId }),
    ...(input.MediaRegion != null && { MediaRegion: input.MediaRegion }),
    ...(input.MeetingHostId != null && { MeetingHostId: input.MeetingHostId }),
    ...(input.NotificationsConfiguration != null && {
      NotificationsConfiguration: serializeAws_restJson1MeetingNotificationConfiguration(
        input.NotificationsConfiguration,
        context
      ),
    }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1MeetingTagList(input.Tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateMeetingDialOutCommand = async (
  input: CreateMeetingDialOutCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/meetings/{MeetingId}/dial-outs";
  resolvedPath = __resolvedPath(resolvedPath, input, "MeetingId", () => input.MeetingId!, "{MeetingId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.FromPhoneNumber != null && { FromPhoneNumber: input.FromPhoneNumber }),
    ...(input.JoinToken != null && { JoinToken: input.JoinToken }),
    ...(input.ToPhoneNumber != null && { ToPhoneNumber: input.ToPhoneNumber }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateMeetingWithAttendeesCommand = async (
  input: CreateMeetingWithAttendeesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/meetings";
  const query: any = map({
    operation: [, "create-attendees"],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.Attendees != null && {
      Attendees: serializeAws_restJson1CreateMeetingWithAttendeesRequestItemList(input.Attendees, context),
    }),
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.ExternalMeetingId != null && { ExternalMeetingId: input.ExternalMeetingId }),
    ...(input.MediaRegion != null && { MediaRegion: input.MediaRegion }),
    ...(input.MeetingHostId != null && { MeetingHostId: input.MeetingHostId }),
    ...(input.NotificationsConfiguration != null && {
      NotificationsConfiguration: serializeAws_restJson1MeetingNotificationConfiguration(
        input.NotificationsConfiguration,
        context
      ),
    }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1MeetingTagList(input.Tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1CreatePhoneNumberOrderCommand = async (
  input: CreatePhoneNumberOrderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/phone-number-orders";
  let body: any;
  body = JSON.stringify({
    ...(input.E164PhoneNumbers != null && {
      E164PhoneNumbers: serializeAws_restJson1E164PhoneNumberList(input.E164PhoneNumbers, context),
    }),
    ...(input.ProductType != null && { ProductType: input.ProductType }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateProxySessionCommand = async (
  input: CreateProxySessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/voice-connectors/{VoiceConnectorId}/proxy-sessions";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "VoiceConnectorId",
    () => input.VoiceConnectorId!,
    "{VoiceConnectorId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Capabilities != null && {
      Capabilities: serializeAws_restJson1CapabilityList(input.Capabilities, context),
    }),
    ...(input.ExpiryMinutes != null && { ExpiryMinutes: input.ExpiryMinutes }),
    ...(input.GeoMatchLevel != null && { GeoMatchLevel: input.GeoMatchLevel }),
    ...(input.GeoMatchParams != null && {
      GeoMatchParams: serializeAws_restJson1GeoMatchParams(input.GeoMatchParams, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.NumberSelectionBehavior != null && { NumberSelectionBehavior: input.NumberSelectionBehavior }),
    ...(input.ParticipantPhoneNumbers != null && {
      ParticipantPhoneNumbers: serializeAws_restJson1ParticipantPhoneNumberList(input.ParticipantPhoneNumbers, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateRoomCommand = async (
  input: CreateRoomCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accounts/{AccountId}/rooms";
  resolvedPath = __resolvedPath(resolvedPath, input, "AccountId", () => input.AccountId!, "{AccountId}", false);
  let body: any;
  body = JSON.stringify({
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.Name != null && { Name: input.Name }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateRoomMembershipCommand = async (
  input: CreateRoomMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AccountId}/rooms/{RoomId}/memberships";
  resolvedPath = __resolvedPath(resolvedPath, input, "AccountId", () => input.AccountId!, "{AccountId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "RoomId", () => input.RoomId!, "{RoomId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.MemberId != null && { MemberId: input.MemberId }),
    ...(input.Role != null && { Role: input.Role }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateSipMediaApplicationCommand = async (
  input: CreateSipMediaApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/sip-media-applications";
  let body: any;
  body = JSON.stringify({
    ...(input.AwsRegion != null && { AwsRegion: input.AwsRegion }),
    ...(input.Endpoints != null && {
      Endpoints: serializeAws_restJson1SipMediaApplicationEndpointList(input.Endpoints, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateSipMediaApplicationCallCommand = async (
  input: CreateSipMediaApplicationCallCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/sip-media-applications/{SipMediaApplicationId}/calls";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "SipMediaApplicationId",
    () => input.SipMediaApplicationId!,
    "{SipMediaApplicationId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.FromPhoneNumber != null && { FromPhoneNumber: input.FromPhoneNumber }),
    ...(input.SipHeaders != null && { SipHeaders: serializeAws_restJson1SipHeadersMap(input.SipHeaders, context) }),
    ...(input.ToPhoneNumber != null && { ToPhoneNumber: input.ToPhoneNumber }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateSipRuleCommand = async (
  input: CreateSipRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/sip-rules";
  let body: any;
  body = JSON.stringify({
    ...(input.Disabled != null && { Disabled: input.Disabled }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.TargetApplications != null && {
      TargetApplications: serializeAws_restJson1SipRuleTargetApplicationList(input.TargetApplications, context),
    }),
    ...(input.TriggerType != null && { TriggerType: input.TriggerType }),
    ...(input.TriggerValue != null && { TriggerValue: input.TriggerValue }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateUserCommand = async (
  input: CreateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accounts/{AccountId}/users";
  resolvedPath = __resolvedPath(resolvedPath, input, "AccountId", () => input.AccountId!, "{AccountId}", false);
  const query: any = map({
    operation: [, "create"],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.Email != null && { Email: input.Email }),
    ...(input.UserType != null && { UserType: input.UserType }),
    ...(input.Username != null && { Username: input.Username }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1CreateVoiceConnectorCommand = async (
  input: CreateVoiceConnectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/voice-connectors";
  let body: any;
  body = JSON.stringify({
    ...(input.AwsRegion != null && { AwsRegion: input.AwsRegion }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RequireEncryption != null && { RequireEncryption: input.RequireEncryption }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateVoiceConnectorGroupCommand = async (
  input: CreateVoiceConnectorGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/voice-connector-groups";
  let body: any;
  body = JSON.stringify({
    ...(input.Name != null && { Name: input.Name }),
    ...(input.VoiceConnectorItems != null && {
      VoiceConnectorItems: serializeAws_restJson1VoiceConnectorItemList(input.VoiceConnectorItems, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteAccountCommand = async (
  input: DeleteAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accounts/{AccountId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "AccountId", () => input.AccountId!, "{AccountId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteAppInstanceCommand = async (
  input: DeleteAppInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/app-instances/{AppInstanceArn}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AppInstanceArn",
    () => input.AppInstanceArn!,
    "{AppInstanceArn}",
    false
  );
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "identity-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteAppInstanceAdminCommand = async (
  input: DeleteAppInstanceAdminCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/app-instances/{AppInstanceArn}/admins/{AppInstanceAdminArn}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AppInstanceAdminArn",
    () => input.AppInstanceAdminArn!,
    "{AppInstanceAdminArn}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AppInstanceArn",
    () => input.AppInstanceArn!,
    "{AppInstanceArn}",
    false
  );
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "identity-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteAppInstanceStreamingConfigurationsCommand = async (
  input: DeleteAppInstanceStreamingConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/app-instances/{AppInstanceArn}/streaming-configurations";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AppInstanceArn",
    () => input.AppInstanceArn!,
    "{AppInstanceArn}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteAppInstanceUserCommand = async (
  input: DeleteAppInstanceUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/app-instance-users/{AppInstanceUserArn}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AppInstanceUserArn",
    () => input.AppInstanceUserArn!,
    "{AppInstanceUserArn}",
    false
  );
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "identity-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteAttendeeCommand = async (
  input: DeleteAttendeeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/meetings/{MeetingId}/attendees/{AttendeeId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "MeetingId", () => input.MeetingId!, "{MeetingId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "AttendeeId", () => input.AttendeeId!, "{AttendeeId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteChannelCommand = async (
  input: DeleteChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-chime-bearer": input.ChimeBearer!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels/{ChannelArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "messaging-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteChannelBanCommand = async (
  input: DeleteChannelBanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-chime-bearer": input.ChimeBearer!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels/{ChannelArn}/bans/{MemberArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "MemberArn", () => input.MemberArn!, "{MemberArn}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "messaging-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteChannelMembershipCommand = async (
  input: DeleteChannelMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-chime-bearer": input.ChimeBearer!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/channels/{ChannelArn}/memberships/{MemberArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "MemberArn", () => input.MemberArn!, "{MemberArn}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "messaging-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteChannelMessageCommand = async (
  input: DeleteChannelMessageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-chime-bearer": input.ChimeBearer!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/channels/{ChannelArn}/messages/{MessageId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "MessageId", () => input.MessageId!, "{MessageId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "messaging-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteChannelModeratorCommand = async (
  input: DeleteChannelModeratorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-chime-bearer": input.ChimeBearer!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/channels/{ChannelArn}/moderators/{ChannelModeratorArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ChannelModeratorArn",
    () => input.ChannelModeratorArn!,
    "{ChannelModeratorArn}",
    false
  );
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "messaging-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteEventsConfigurationCommand = async (
  input: DeleteEventsConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AccountId}/bots/{BotId}/events-configuration";
  resolvedPath = __resolvedPath(resolvedPath, input, "AccountId", () => input.AccountId!, "{AccountId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "BotId", () => input.BotId!, "{BotId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteMediaCapturePipelineCommand = async (
  input: DeleteMediaCapturePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/media-capture-pipelines/{MediaPipelineId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "MediaPipelineId",
    () => input.MediaPipelineId!,
    "{MediaPipelineId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteMeetingCommand = async (
  input: DeleteMeetingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/meetings/{MeetingId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "MeetingId", () => input.MeetingId!, "{MeetingId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeletePhoneNumberCommand = async (
  input: DeletePhoneNumberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/phone-numbers/{PhoneNumberId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "PhoneNumberId",
    () => input.PhoneNumberId!,
    "{PhoneNumberId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteProxySessionCommand = async (
  input: DeleteProxySessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/voice-connectors/{VoiceConnectorId}/proxy-sessions/{ProxySessionId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "VoiceConnectorId",
    () => input.VoiceConnectorId!,
    "{VoiceConnectorId}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ProxySessionId",
    () => input.ProxySessionId!,
    "{ProxySessionId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteRoomCommand = async (
  input: DeleteRoomCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accounts/{AccountId}/rooms/{RoomId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "AccountId", () => input.AccountId!, "{AccountId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "RoomId", () => input.RoomId!, "{RoomId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteRoomMembershipCommand = async (
  input: DeleteRoomMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AccountId}/rooms/{RoomId}/memberships/{MemberId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "AccountId", () => input.AccountId!, "{AccountId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "RoomId", () => input.RoomId!, "{RoomId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "MemberId", () => input.MemberId!, "{MemberId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteSipMediaApplicationCommand = async (
  input: DeleteSipMediaApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/sip-media-applications/{SipMediaApplicationId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "SipMediaApplicationId",
    () => input.SipMediaApplicationId!,
    "{SipMediaApplicationId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteSipRuleCommand = async (
  input: DeleteSipRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/sip-rules/{SipRuleId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "SipRuleId", () => input.SipRuleId!, "{SipRuleId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteVoiceConnectorCommand = async (
  input: DeleteVoiceConnectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/voice-connectors/{VoiceConnectorId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "VoiceConnectorId",
    () => input.VoiceConnectorId!,
    "{VoiceConnectorId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteVoiceConnectorEmergencyCallingConfigurationCommand = async (
  input: DeleteVoiceConnectorEmergencyCallingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/voice-connectors/{VoiceConnectorId}/emergency-calling-configuration";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "VoiceConnectorId",
    () => input.VoiceConnectorId!,
    "{VoiceConnectorId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteVoiceConnectorGroupCommand = async (
  input: DeleteVoiceConnectorGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/voice-connector-groups/{VoiceConnectorGroupId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "VoiceConnectorGroupId",
    () => input.VoiceConnectorGroupId!,
    "{VoiceConnectorGroupId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteVoiceConnectorOriginationCommand = async (
  input: DeleteVoiceConnectorOriginationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/voice-connectors/{VoiceConnectorId}/origination";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "VoiceConnectorId",
    () => input.VoiceConnectorId!,
    "{VoiceConnectorId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteVoiceConnectorProxyCommand = async (
  input: DeleteVoiceConnectorProxyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/voice-connectors/{VoiceConnectorId}/programmable-numbers/proxy";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "VoiceConnectorId",
    () => input.VoiceConnectorId!,
    "{VoiceConnectorId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteVoiceConnectorStreamingConfigurationCommand = async (
  input: DeleteVoiceConnectorStreamingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/voice-connectors/{VoiceConnectorId}/streaming-configuration";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "VoiceConnectorId",
    () => input.VoiceConnectorId!,
    "{VoiceConnectorId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteVoiceConnectorTerminationCommand = async (
  input: DeleteVoiceConnectorTerminationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/voice-connectors/{VoiceConnectorId}/termination";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "VoiceConnectorId",
    () => input.VoiceConnectorId!,
    "{VoiceConnectorId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteVoiceConnectorTerminationCredentialsCommand = async (
  input: DeleteVoiceConnectorTerminationCredentialsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/voice-connectors/{VoiceConnectorId}/termination/credentials";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "VoiceConnectorId",
    () => input.VoiceConnectorId!,
    "{VoiceConnectorId}",
    false
  );
  const query: any = map({
    operation: [, "delete"],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.Usernames != null && { Usernames: serializeAws_restJson1SensitiveStringList(input.Usernames, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1DescribeAppInstanceCommand = async (
  input: DescribeAppInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/app-instances/{AppInstanceArn}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AppInstanceArn",
    () => input.AppInstanceArn!,
    "{AppInstanceArn}",
    false
  );
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "identity-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeAppInstanceAdminCommand = async (
  input: DescribeAppInstanceAdminCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/app-instances/{AppInstanceArn}/admins/{AppInstanceAdminArn}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AppInstanceAdminArn",
    () => input.AppInstanceAdminArn!,
    "{AppInstanceAdminArn}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AppInstanceArn",
    () => input.AppInstanceArn!,
    "{AppInstanceArn}",
    false
  );
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "identity-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeAppInstanceUserCommand = async (
  input: DescribeAppInstanceUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/app-instance-users/{AppInstanceUserArn}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AppInstanceUserArn",
    () => input.AppInstanceUserArn!,
    "{AppInstanceUserArn}",
    false
  );
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "identity-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeChannelCommand = async (
  input: DescribeChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-chime-bearer": input.ChimeBearer!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels/{ChannelArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "messaging-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeChannelBanCommand = async (
  input: DescribeChannelBanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-chime-bearer": input.ChimeBearer!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels/{ChannelArn}/bans/{MemberArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "MemberArn", () => input.MemberArn!, "{MemberArn}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "messaging-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeChannelMembershipCommand = async (
  input: DescribeChannelMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-chime-bearer": input.ChimeBearer!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/channels/{ChannelArn}/memberships/{MemberArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "MemberArn", () => input.MemberArn!, "{MemberArn}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "messaging-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeChannelMembershipForAppInstanceUserCommand = async (
  input: DescribeChannelMembershipForAppInstanceUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-chime-bearer": input.ChimeBearer!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels/{ChannelArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  const query: any = map({
    scope: [, "app-instance-user-membership"],
    "app-instance-user-arn": [, __expectNonNull(input.AppInstanceUserArn!, `AppInstanceUserArn`)],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "messaging-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1DescribeChannelModeratedByAppInstanceUserCommand = async (
  input: DescribeChannelModeratedByAppInstanceUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-chime-bearer": input.ChimeBearer!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels/{ChannelArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  const query: any = map({
    scope: [, "app-instance-user-moderated-channel"],
    "app-instance-user-arn": [, __expectNonNull(input.AppInstanceUserArn!, `AppInstanceUserArn`)],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "messaging-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1DescribeChannelModeratorCommand = async (
  input: DescribeChannelModeratorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-chime-bearer": input.ChimeBearer!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/channels/{ChannelArn}/moderators/{ChannelModeratorArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ChannelModeratorArn",
    () => input.ChannelModeratorArn!,
    "{ChannelModeratorArn}",
    false
  );
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "messaging-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DisassociatePhoneNumberFromUserCommand = async (
  input: DisassociatePhoneNumberFromUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accounts/{AccountId}/users/{UserId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "AccountId", () => input.AccountId!, "{AccountId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "UserId", () => input.UserId!, "{UserId}", false);
  const query: any = map({
    operation: [, "disassociate-phone-number"],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1DisassociatePhoneNumbersFromVoiceConnectorCommand = async (
  input: DisassociatePhoneNumbersFromVoiceConnectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/voice-connectors/{VoiceConnectorId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "VoiceConnectorId",
    () => input.VoiceConnectorId!,
    "{VoiceConnectorId}",
    false
  );
  const query: any = map({
    operation: [, "disassociate-phone-numbers"],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.E164PhoneNumbers != null && {
      E164PhoneNumbers: serializeAws_restJson1E164PhoneNumberList(input.E164PhoneNumbers, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1DisassociatePhoneNumbersFromVoiceConnectorGroupCommand = async (
  input: DisassociatePhoneNumbersFromVoiceConnectorGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/voice-connector-groups/{VoiceConnectorGroupId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "VoiceConnectorGroupId",
    () => input.VoiceConnectorGroupId!,
    "{VoiceConnectorGroupId}",
    false
  );
  const query: any = map({
    operation: [, "disassociate-phone-numbers"],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.E164PhoneNumbers != null && {
      E164PhoneNumbers: serializeAws_restJson1E164PhoneNumberList(input.E164PhoneNumbers, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1DisassociateSigninDelegateGroupsFromAccountCommand = async (
  input: DisassociateSigninDelegateGroupsFromAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accounts/{AccountId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "AccountId", () => input.AccountId!, "{AccountId}", false);
  const query: any = map({
    operation: [, "disassociate-signin-delegate-groups"],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.GroupNames != null && {
      GroupNames: serializeAws_restJson1NonEmptyStringList(input.GroupNames, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetAccountCommand = async (
  input: GetAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accounts/{AccountId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "AccountId", () => input.AccountId!, "{AccountId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetAccountSettingsCommand = async (
  input: GetAccountSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accounts/{AccountId}/settings";
  resolvedPath = __resolvedPath(resolvedPath, input, "AccountId", () => input.AccountId!, "{AccountId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetAppInstanceRetentionSettingsCommand = async (
  input: GetAppInstanceRetentionSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/app-instances/{AppInstanceArn}/retention-settings";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AppInstanceArn",
    () => input.AppInstanceArn!,
    "{AppInstanceArn}",
    false
  );
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "identity-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetAppInstanceStreamingConfigurationsCommand = async (
  input: GetAppInstanceStreamingConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/app-instances/{AppInstanceArn}/streaming-configurations";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AppInstanceArn",
    () => input.AppInstanceArn!,
    "{AppInstanceArn}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetAttendeeCommand = async (
  input: GetAttendeeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/meetings/{MeetingId}/attendees/{AttendeeId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "MeetingId", () => input.MeetingId!, "{MeetingId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "AttendeeId", () => input.AttendeeId!, "{AttendeeId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetBotCommand = async (
  input: GetBotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accounts/{AccountId}/bots/{BotId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "AccountId", () => input.AccountId!, "{AccountId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "BotId", () => input.BotId!, "{BotId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetChannelMessageCommand = async (
  input: GetChannelMessageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-chime-bearer": input.ChimeBearer!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/channels/{ChannelArn}/messages/{MessageId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "MessageId", () => input.MessageId!, "{MessageId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "messaging-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetEventsConfigurationCommand = async (
  input: GetEventsConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AccountId}/bots/{BotId}/events-configuration";
  resolvedPath = __resolvedPath(resolvedPath, input, "AccountId", () => input.AccountId!, "{AccountId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "BotId", () => input.BotId!, "{BotId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetGlobalSettingsCommand = async (
  input: GetGlobalSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/settings";
  let body: any;
  body = "";
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetMediaCapturePipelineCommand = async (
  input: GetMediaCapturePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/media-capture-pipelines/{MediaPipelineId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "MediaPipelineId",
    () => input.MediaPipelineId!,
    "{MediaPipelineId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetMeetingCommand = async (
  input: GetMeetingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/meetings/{MeetingId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "MeetingId", () => input.MeetingId!, "{MeetingId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetMessagingSessionEndpointCommand = async (
  input: GetMessagingSessionEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/endpoints/messaging-session";
  let body: any;
  body = "";
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "messaging-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetPhoneNumberCommand = async (
  input: GetPhoneNumberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/phone-numbers/{PhoneNumberId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "PhoneNumberId",
    () => input.PhoneNumberId!,
    "{PhoneNumberId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetPhoneNumberOrderCommand = async (
  input: GetPhoneNumberOrderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/phone-number-orders/{PhoneNumberOrderId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "PhoneNumberOrderId",
    () => input.PhoneNumberOrderId!,
    "{PhoneNumberOrderId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetPhoneNumberSettingsCommand = async (
  input: GetPhoneNumberSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/settings/phone-number";
  let body: any;
  body = "";
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetProxySessionCommand = async (
  input: GetProxySessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/voice-connectors/{VoiceConnectorId}/proxy-sessions/{ProxySessionId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "VoiceConnectorId",
    () => input.VoiceConnectorId!,
    "{VoiceConnectorId}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ProxySessionId",
    () => input.ProxySessionId!,
    "{ProxySessionId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetRetentionSettingsCommand = async (
  input: GetRetentionSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accounts/{AccountId}/retention-settings";
  resolvedPath = __resolvedPath(resolvedPath, input, "AccountId", () => input.AccountId!, "{AccountId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetRoomCommand = async (
  input: GetRoomCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accounts/{AccountId}/rooms/{RoomId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "AccountId", () => input.AccountId!, "{AccountId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "RoomId", () => input.RoomId!, "{RoomId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetSipMediaApplicationCommand = async (
  input: GetSipMediaApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/sip-media-applications/{SipMediaApplicationId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "SipMediaApplicationId",
    () => input.SipMediaApplicationId!,
    "{SipMediaApplicationId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetSipMediaApplicationLoggingConfigurationCommand = async (
  input: GetSipMediaApplicationLoggingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/sip-media-applications/{SipMediaApplicationId}/logging-configuration";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "SipMediaApplicationId",
    () => input.SipMediaApplicationId!,
    "{SipMediaApplicationId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetSipRuleCommand = async (
  input: GetSipRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/sip-rules/{SipRuleId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "SipRuleId", () => input.SipRuleId!, "{SipRuleId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetUserCommand = async (
  input: GetUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accounts/{AccountId}/users/{UserId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "AccountId", () => input.AccountId!, "{AccountId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "UserId", () => input.UserId!, "{UserId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetUserSettingsCommand = async (
  input: GetUserSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AccountId}/users/{UserId}/settings";
  resolvedPath = __resolvedPath(resolvedPath, input, "AccountId", () => input.AccountId!, "{AccountId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "UserId", () => input.UserId!, "{UserId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetVoiceConnectorCommand = async (
  input: GetVoiceConnectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/voice-connectors/{VoiceConnectorId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "VoiceConnectorId",
    () => input.VoiceConnectorId!,
    "{VoiceConnectorId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetVoiceConnectorEmergencyCallingConfigurationCommand = async (
  input: GetVoiceConnectorEmergencyCallingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/voice-connectors/{VoiceConnectorId}/emergency-calling-configuration";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "VoiceConnectorId",
    () => input.VoiceConnectorId!,
    "{VoiceConnectorId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetVoiceConnectorGroupCommand = async (
  input: GetVoiceConnectorGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/voice-connector-groups/{VoiceConnectorGroupId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "VoiceConnectorGroupId",
    () => input.VoiceConnectorGroupId!,
    "{VoiceConnectorGroupId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetVoiceConnectorLoggingConfigurationCommand = async (
  input: GetVoiceConnectorLoggingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/voice-connectors/{VoiceConnectorId}/logging-configuration";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "VoiceConnectorId",
    () => input.VoiceConnectorId!,
    "{VoiceConnectorId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetVoiceConnectorOriginationCommand = async (
  input: GetVoiceConnectorOriginationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/voice-connectors/{VoiceConnectorId}/origination";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "VoiceConnectorId",
    () => input.VoiceConnectorId!,
    "{VoiceConnectorId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetVoiceConnectorProxyCommand = async (
  input: GetVoiceConnectorProxyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/voice-connectors/{VoiceConnectorId}/programmable-numbers/proxy";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "VoiceConnectorId",
    () => input.VoiceConnectorId!,
    "{VoiceConnectorId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetVoiceConnectorStreamingConfigurationCommand = async (
  input: GetVoiceConnectorStreamingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/voice-connectors/{VoiceConnectorId}/streaming-configuration";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "VoiceConnectorId",
    () => input.VoiceConnectorId!,
    "{VoiceConnectorId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetVoiceConnectorTerminationCommand = async (
  input: GetVoiceConnectorTerminationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/voice-connectors/{VoiceConnectorId}/termination";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "VoiceConnectorId",
    () => input.VoiceConnectorId!,
    "{VoiceConnectorId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetVoiceConnectorTerminationHealthCommand = async (
  input: GetVoiceConnectorTerminationHealthCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/voice-connectors/{VoiceConnectorId}/termination/health";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "VoiceConnectorId",
    () => input.VoiceConnectorId!,
    "{VoiceConnectorId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1InviteUsersCommand = async (
  input: InviteUsersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accounts/{AccountId}/users";
  resolvedPath = __resolvedPath(resolvedPath, input, "AccountId", () => input.AccountId!, "{AccountId}", false);
  const query: any = map({
    operation: [, "add"],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.UserEmailList != null && {
      UserEmailList: serializeAws_restJson1UserEmailList(input.UserEmailList, context),
    }),
    ...(input.UserType != null && { UserType: input.UserType }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListAccountsCommand = async (
  input: ListAccountsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accounts";
  const query: any = map({
    name: [, input.Name!],
    "user-email": [, input.UserEmail!],
    "next-token": [, input.NextToken!],
    "max-results": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListAppInstanceAdminsCommand = async (
  input: ListAppInstanceAdminsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/app-instances/{AppInstanceArn}/admins";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AppInstanceArn",
    () => input.AppInstanceArn!,
    "{AppInstanceArn}",
    false
  );
  const query: any = map({
    "max-results": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    "next-token": [, input.NextToken!],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "identity-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListAppInstancesCommand = async (
  input: ListAppInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/app-instances";
  const query: any = map({
    "max-results": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    "next-token": [, input.NextToken!],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "identity-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListAppInstanceUsersCommand = async (
  input: ListAppInstanceUsersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/app-instance-users";
  const query: any = map({
    "app-instance-arn": [, __expectNonNull(input.AppInstanceArn!, `AppInstanceArn`)],
    "max-results": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    "next-token": [, input.NextToken!],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "identity-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListAttendeesCommand = async (
  input: ListAttendeesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/meetings/{MeetingId}/attendees";
  resolvedPath = __resolvedPath(resolvedPath, input, "MeetingId", () => input.MeetingId!, "{MeetingId}", false);
  const query: any = map({
    "next-token": [, input.NextToken!],
    "max-results": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListAttendeeTagsCommand = async (
  input: ListAttendeeTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/meetings/{MeetingId}/attendees/{AttendeeId}/tags";
  resolvedPath = __resolvedPath(resolvedPath, input, "MeetingId", () => input.MeetingId!, "{MeetingId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "AttendeeId", () => input.AttendeeId!, "{AttendeeId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1ListBotsCommand = async (
  input: ListBotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accounts/{AccountId}/bots";
  resolvedPath = __resolvedPath(resolvedPath, input, "AccountId", () => input.AccountId!, "{AccountId}", false);
  const query: any = map({
    "max-results": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    "next-token": [, input.NextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListChannelBansCommand = async (
  input: ListChannelBansCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-chime-bearer": input.ChimeBearer!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels/{ChannelArn}/bans";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  const query: any = map({
    "max-results": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    "next-token": [, input.NextToken!],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "messaging-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListChannelMembershipsCommand = async (
  input: ListChannelMembershipsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-chime-bearer": input.ChimeBearer!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels/{ChannelArn}/memberships";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  const query: any = map({
    type: [, input.Type!],
    "max-results": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    "next-token": [, input.NextToken!],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "messaging-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListChannelMembershipsForAppInstanceUserCommand = async (
  input: ListChannelMembershipsForAppInstanceUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-chime-bearer": input.ChimeBearer!,
  });
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels";
  const query: any = map({
    scope: [, "app-instance-user-memberships"],
    "app-instance-user-arn": [, input.AppInstanceUserArn!],
    "max-results": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    "next-token": [, input.NextToken!],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "messaging-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListChannelMessagesCommand = async (
  input: ListChannelMessagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-chime-bearer": input.ChimeBearer!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels/{ChannelArn}/messages";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  const query: any = map({
    "sort-order": [, input.SortOrder!],
    "not-before": [
      () => input.NotBefore !== void 0,
      () => (input.NotBefore!.toISOString().split(".")[0] + "Z").toString(),
    ],
    "not-after": [
      () => input.NotAfter !== void 0,
      () => (input.NotAfter!.toISOString().split(".")[0] + "Z").toString(),
    ],
    "max-results": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    "next-token": [, input.NextToken!],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "messaging-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListChannelModeratorsCommand = async (
  input: ListChannelModeratorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-chime-bearer": input.ChimeBearer!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels/{ChannelArn}/moderators";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  const query: any = map({
    "max-results": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    "next-token": [, input.NextToken!],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "messaging-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListChannelsCommand = async (
  input: ListChannelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-chime-bearer": input.ChimeBearer!,
  });
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels";
  const query: any = map({
    "app-instance-arn": [, __expectNonNull(input.AppInstanceArn!, `AppInstanceArn`)],
    privacy: [, input.Privacy!],
    "max-results": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    "next-token": [, input.NextToken!],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "messaging-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListChannelsModeratedByAppInstanceUserCommand = async (
  input: ListChannelsModeratedByAppInstanceUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-chime-bearer": input.ChimeBearer!,
  });
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels";
  const query: any = map({
    scope: [, "app-instance-user-moderated-channels"],
    "app-instance-user-arn": [, input.AppInstanceUserArn!],
    "max-results": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    "next-token": [, input.NextToken!],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "messaging-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListMediaCapturePipelinesCommand = async (
  input: ListMediaCapturePipelinesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/media-capture-pipelines";
  const query: any = map({
    "next-token": [, input.NextToken!],
    "max-results": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListMeetingsCommand = async (
  input: ListMeetingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/meetings";
  const query: any = map({
    "next-token": [, input.NextToken!],
    "max-results": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListMeetingTagsCommand = async (
  input: ListMeetingTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/meetings/{MeetingId}/tags";
  resolvedPath = __resolvedPath(resolvedPath, input, "MeetingId", () => input.MeetingId!, "{MeetingId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1ListPhoneNumberOrdersCommand = async (
  input: ListPhoneNumberOrdersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/phone-number-orders";
  const query: any = map({
    "next-token": [, input.NextToken!],
    "max-results": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListPhoneNumbersCommand = async (
  input: ListPhoneNumbersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/phone-numbers";
  const query: any = map({
    status: [, input.Status!],
    "product-type": [, input.ProductType!],
    "filter-name": [, input.FilterName!],
    "filter-value": [, input.FilterValue!],
    "max-results": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    "next-token": [, input.NextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListProxySessionsCommand = async (
  input: ListProxySessionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/voice-connectors/{VoiceConnectorId}/proxy-sessions";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "VoiceConnectorId",
    () => input.VoiceConnectorId!,
    "{VoiceConnectorId}",
    false
  );
  const query: any = map({
    status: [, input.Status!],
    "next-token": [, input.NextToken!],
    "max-results": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListRoomMembershipsCommand = async (
  input: ListRoomMembershipsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AccountId}/rooms/{RoomId}/memberships";
  resolvedPath = __resolvedPath(resolvedPath, input, "AccountId", () => input.AccountId!, "{AccountId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "RoomId", () => input.RoomId!, "{RoomId}", false);
  const query: any = map({
    "max-results": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    "next-token": [, input.NextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListRoomsCommand = async (
  input: ListRoomsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accounts/{AccountId}/rooms";
  resolvedPath = __resolvedPath(resolvedPath, input, "AccountId", () => input.AccountId!, "{AccountId}", false);
  const query: any = map({
    "member-id": [, input.MemberId!],
    "max-results": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    "next-token": [, input.NextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListSipMediaApplicationsCommand = async (
  input: ListSipMediaApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/sip-media-applications";
  const query: any = map({
    "max-results": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    "next-token": [, input.NextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListSipRulesCommand = async (
  input: ListSipRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/sip-rules";
  const query: any = map({
    "sip-media-application": [, input.SipMediaApplicationId!],
    "max-results": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    "next-token": [, input.NextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListSupportedPhoneNumberCountriesCommand = async (
  input: ListSupportedPhoneNumberCountriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/phone-number-countries";
  const query: any = map({
    "product-type": [, __expectNonNull(input.ProductType!, `ProductType`)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags";
  const query: any = map({
    arn: [, __expectNonNull(input.ResourceARN!, `ResourceARN`)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListUsersCommand = async (
  input: ListUsersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accounts/{AccountId}/users";
  resolvedPath = __resolvedPath(resolvedPath, input, "AccountId", () => input.AccountId!, "{AccountId}", false);
  const query: any = map({
    "user-email": [, input.UserEmail!],
    "user-type": [, input.UserType!],
    "max-results": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    "next-token": [, input.NextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListVoiceConnectorGroupsCommand = async (
  input: ListVoiceConnectorGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/voice-connector-groups";
  const query: any = map({
    "next-token": [, input.NextToken!],
    "max-results": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListVoiceConnectorsCommand = async (
  input: ListVoiceConnectorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/voice-connectors";
  const query: any = map({
    "next-token": [, input.NextToken!],
    "max-results": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListVoiceConnectorTerminationCredentialsCommand = async (
  input: ListVoiceConnectorTerminationCredentialsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/voice-connectors/{VoiceConnectorId}/termination/credentials";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "VoiceConnectorId",
    () => input.VoiceConnectorId!,
    "{VoiceConnectorId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1LogoutUserCommand = async (
  input: LogoutUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accounts/{AccountId}/users/{UserId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "AccountId", () => input.AccountId!, "{AccountId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "UserId", () => input.UserId!, "{UserId}", false);
  const query: any = map({
    operation: [, "logout"],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1PutAppInstanceRetentionSettingsCommand = async (
  input: PutAppInstanceRetentionSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/app-instances/{AppInstanceArn}/retention-settings";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AppInstanceArn",
    () => input.AppInstanceArn!,
    "{AppInstanceArn}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.AppInstanceRetentionSettings != null && {
      AppInstanceRetentionSettings: serializeAws_restJson1AppInstanceRetentionSettings(
        input.AppInstanceRetentionSettings,
        context
      ),
    }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "identity-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1PutAppInstanceStreamingConfigurationsCommand = async (
  input: PutAppInstanceStreamingConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/app-instances/{AppInstanceArn}/streaming-configurations";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AppInstanceArn",
    () => input.AppInstanceArn!,
    "{AppInstanceArn}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.AppInstanceStreamingConfigurations != null && {
      AppInstanceStreamingConfigurations: serializeAws_restJson1AppInstanceStreamingConfigurationList(
        input.AppInstanceStreamingConfigurations,
        context
      ),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1PutEventsConfigurationCommand = async (
  input: PutEventsConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AccountId}/bots/{BotId}/events-configuration";
  resolvedPath = __resolvedPath(resolvedPath, input, "AccountId", () => input.AccountId!, "{AccountId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "BotId", () => input.BotId!, "{BotId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.LambdaFunctionArn != null && { LambdaFunctionArn: input.LambdaFunctionArn }),
    ...(input.OutboundEventsHTTPSEndpoint != null && {
      OutboundEventsHTTPSEndpoint: input.OutboundEventsHTTPSEndpoint,
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1PutRetentionSettingsCommand = async (
  input: PutRetentionSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accounts/{AccountId}/retention-settings";
  resolvedPath = __resolvedPath(resolvedPath, input, "AccountId", () => input.AccountId!, "{AccountId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.RetentionSettings != null && {
      RetentionSettings: serializeAws_restJson1RetentionSettings(input.RetentionSettings, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1PutSipMediaApplicationLoggingConfigurationCommand = async (
  input: PutSipMediaApplicationLoggingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/sip-media-applications/{SipMediaApplicationId}/logging-configuration";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "SipMediaApplicationId",
    () => input.SipMediaApplicationId!,
    "{SipMediaApplicationId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.SipMediaApplicationLoggingConfiguration != null && {
      SipMediaApplicationLoggingConfiguration: serializeAws_restJson1SipMediaApplicationLoggingConfiguration(
        input.SipMediaApplicationLoggingConfiguration,
        context
      ),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1PutVoiceConnectorEmergencyCallingConfigurationCommand = async (
  input: PutVoiceConnectorEmergencyCallingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/voice-connectors/{VoiceConnectorId}/emergency-calling-configuration";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "VoiceConnectorId",
    () => input.VoiceConnectorId!,
    "{VoiceConnectorId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.EmergencyCallingConfiguration != null && {
      EmergencyCallingConfiguration: serializeAws_restJson1EmergencyCallingConfiguration(
        input.EmergencyCallingConfiguration,
        context
      ),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1PutVoiceConnectorLoggingConfigurationCommand = async (
  input: PutVoiceConnectorLoggingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/voice-connectors/{VoiceConnectorId}/logging-configuration";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "VoiceConnectorId",
    () => input.VoiceConnectorId!,
    "{VoiceConnectorId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.LoggingConfiguration != null && {
      LoggingConfiguration: serializeAws_restJson1LoggingConfiguration(input.LoggingConfiguration, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1PutVoiceConnectorOriginationCommand = async (
  input: PutVoiceConnectorOriginationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/voice-connectors/{VoiceConnectorId}/origination";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "VoiceConnectorId",
    () => input.VoiceConnectorId!,
    "{VoiceConnectorId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Origination != null && { Origination: serializeAws_restJson1Origination(input.Origination, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1PutVoiceConnectorProxyCommand = async (
  input: PutVoiceConnectorProxyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/voice-connectors/{VoiceConnectorId}/programmable-numbers/proxy";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "VoiceConnectorId",
    () => input.VoiceConnectorId!,
    "{VoiceConnectorId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.DefaultSessionExpiryMinutes != null && {
      DefaultSessionExpiryMinutes: input.DefaultSessionExpiryMinutes,
    }),
    ...(input.Disabled != null && { Disabled: input.Disabled }),
    ...(input.FallBackPhoneNumber != null && { FallBackPhoneNumber: input.FallBackPhoneNumber }),
    ...(input.PhoneNumberPoolCountries != null && {
      PhoneNumberPoolCountries: serializeAws_restJson1CountryList(input.PhoneNumberPoolCountries, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1PutVoiceConnectorStreamingConfigurationCommand = async (
  input: PutVoiceConnectorStreamingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/voice-connectors/{VoiceConnectorId}/streaming-configuration";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "VoiceConnectorId",
    () => input.VoiceConnectorId!,
    "{VoiceConnectorId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.StreamingConfiguration != null && {
      StreamingConfiguration: serializeAws_restJson1StreamingConfiguration(input.StreamingConfiguration, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1PutVoiceConnectorTerminationCommand = async (
  input: PutVoiceConnectorTerminationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/voice-connectors/{VoiceConnectorId}/termination";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "VoiceConnectorId",
    () => input.VoiceConnectorId!,
    "{VoiceConnectorId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Termination != null && { Termination: serializeAws_restJson1Termination(input.Termination, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1PutVoiceConnectorTerminationCredentialsCommand = async (
  input: PutVoiceConnectorTerminationCredentialsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/voice-connectors/{VoiceConnectorId}/termination/credentials";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "VoiceConnectorId",
    () => input.VoiceConnectorId!,
    "{VoiceConnectorId}",
    false
  );
  const query: any = map({
    operation: [, "put"],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.Credentials != null && { Credentials: serializeAws_restJson1CredentialList(input.Credentials, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1RedactChannelMessageCommand = async (
  input: RedactChannelMessageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-chime-bearer": input.ChimeBearer!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/channels/{ChannelArn}/messages/{MessageId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "MessageId", () => input.MessageId!, "{MessageId}", false);
  const query: any = map({
    operation: [, "redact"],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "messaging-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1RedactConversationMessageCommand = async (
  input: RedactConversationMessageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AccountId}/conversations/{ConversationId}/messages/{MessageId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "AccountId", () => input.AccountId!, "{AccountId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ConversationId",
    () => input.ConversationId!,
    "{ConversationId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "MessageId", () => input.MessageId!, "{MessageId}", false);
  const query: any = map({
    operation: [, "redact"],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1RedactRoomMessageCommand = async (
  input: RedactRoomMessageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AccountId}/rooms/{RoomId}/messages/{MessageId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "AccountId", () => input.AccountId!, "{AccountId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "RoomId", () => input.RoomId!, "{RoomId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "MessageId", () => input.MessageId!, "{MessageId}", false);
  const query: any = map({
    operation: [, "redact"],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1RegenerateSecurityTokenCommand = async (
  input: RegenerateSecurityTokenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accounts/{AccountId}/bots/{BotId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "AccountId", () => input.AccountId!, "{AccountId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "BotId", () => input.BotId!, "{BotId}", false);
  const query: any = map({
    operation: [, "regenerate-security-token"],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ResetPersonalPINCommand = async (
  input: ResetPersonalPINCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accounts/{AccountId}/users/{UserId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "AccountId", () => input.AccountId!, "{AccountId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "UserId", () => input.UserId!, "{UserId}", false);
  const query: any = map({
    operation: [, "reset-personal-pin"],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1RestorePhoneNumberCommand = async (
  input: RestorePhoneNumberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/phone-numbers/{PhoneNumberId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "PhoneNumberId",
    () => input.PhoneNumberId!,
    "{PhoneNumberId}",
    false
  );
  const query: any = map({
    operation: [, "restore"],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1SearchAvailablePhoneNumbersCommand = async (
  input: SearchAvailablePhoneNumbersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/search";
  const query: any = map({
    type: [, "phone-numbers"],
    "area-code": [, input.AreaCode!],
    city: [, input.City!],
    country: [, input.Country!],
    state: [, input.State!],
    "toll-free-prefix": [, input.TollFreePrefix!],
    "phone-number-type": [, input.PhoneNumberType!],
    "max-results": [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    "next-token": [, input.NextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1SendChannelMessageCommand = async (
  input: SendChannelMessageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-chime-bearer": input.ChimeBearer!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels/{ChannelArn}/messages";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  let body: any;
  body = JSON.stringify({
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.Content != null && { Content: input.Content }),
    ...(input.Metadata != null && { Metadata: input.Metadata }),
    ...(input.Persistence != null && { Persistence: input.Persistence }),
    ...(input.Type != null && { Type: input.Type }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "messaging-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1StartMeetingTranscriptionCommand = async (
  input: StartMeetingTranscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/meetings/{MeetingId}/transcription";
  resolvedPath = __resolvedPath(resolvedPath, input, "MeetingId", () => input.MeetingId!, "{MeetingId}", false);
  const query: any = map({
    operation: [, "start"],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.TranscriptionConfiguration != null && {
      TranscriptionConfiguration: serializeAws_restJson1TranscriptionConfiguration(
        input.TranscriptionConfiguration,
        context
      ),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1StopMeetingTranscriptionCommand = async (
  input: StopMeetingTranscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/meetings/{MeetingId}/transcription";
  resolvedPath = __resolvedPath(resolvedPath, input, "MeetingId", () => input.MeetingId!, "{MeetingId}", false);
  const query: any = map({
    operation: [, "stop"],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1TagAttendeeCommand = async (
  input: TagAttendeeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/meetings/{MeetingId}/attendees/{AttendeeId}/tags";
  resolvedPath = __resolvedPath(resolvedPath, input, "MeetingId", () => input.MeetingId!, "{MeetingId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "AttendeeId", () => input.AttendeeId!, "{AttendeeId}", false);
  const query: any = map({
    operation: [, "add"],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.Tags != null && { Tags: serializeAws_restJson1AttendeeTagList(input.Tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1TagMeetingCommand = async (
  input: TagMeetingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/meetings/{MeetingId}/tags";
  resolvedPath = __resolvedPath(resolvedPath, input, "MeetingId", () => input.MeetingId!, "{MeetingId}", false);
  const query: any = map({
    operation: [, "add"],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.Tags != null && { Tags: serializeAws_restJson1MeetingTagList(input.Tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags";
  const query: any = map({
    operation: [, "tag-resource"],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1UntagAttendeeCommand = async (
  input: UntagAttendeeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/meetings/{MeetingId}/attendees/{AttendeeId}/tags";
  resolvedPath = __resolvedPath(resolvedPath, input, "MeetingId", () => input.MeetingId!, "{MeetingId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "AttendeeId", () => input.AttendeeId!, "{AttendeeId}", false);
  const query: any = map({
    operation: [, "delete"],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.TagKeys != null && { TagKeys: serializeAws_restJson1AttendeeTagKeyList(input.TagKeys, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1UntagMeetingCommand = async (
  input: UntagMeetingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/meetings/{MeetingId}/tags";
  resolvedPath = __resolvedPath(resolvedPath, input, "MeetingId", () => input.MeetingId!, "{MeetingId}", false);
  const query: any = map({
    operation: [, "delete"],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.TagKeys != null && { TagKeys: serializeAws_restJson1MeetingTagKeyList(input.TagKeys, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags";
  const query: any = map({
    operation: [, "untag-resource"],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.TagKeys != null && { TagKeys: serializeAws_restJson1TagKeyList(input.TagKeys, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1UpdateAccountCommand = async (
  input: UpdateAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accounts/{AccountId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "AccountId", () => input.AccountId!, "{AccountId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.DefaultLicense != null && { DefaultLicense: input.DefaultLicense }),
    ...(input.Name != null && { Name: input.Name }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateAccountSettingsCommand = async (
  input: UpdateAccountSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accounts/{AccountId}/settings";
  resolvedPath = __resolvedPath(resolvedPath, input, "AccountId", () => input.AccountId!, "{AccountId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.AccountSettings != null && {
      AccountSettings: serializeAws_restJson1AccountSettings(input.AccountSettings, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateAppInstanceCommand = async (
  input: UpdateAppInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/app-instances/{AppInstanceArn}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AppInstanceArn",
    () => input.AppInstanceArn!,
    "{AppInstanceArn}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Metadata != null && { Metadata: input.Metadata }),
    ...(input.Name != null && { Name: input.Name }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "identity-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateAppInstanceUserCommand = async (
  input: UpdateAppInstanceUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/app-instance-users/{AppInstanceUserArn}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AppInstanceUserArn",
    () => input.AppInstanceUserArn!,
    "{AppInstanceUserArn}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Metadata != null && { Metadata: input.Metadata }),
    ...(input.Name != null && { Name: input.Name }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "identity-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateBotCommand = async (
  input: UpdateBotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accounts/{AccountId}/bots/{BotId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "AccountId", () => input.AccountId!, "{AccountId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "BotId", () => input.BotId!, "{BotId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Disabled != null && { Disabled: input.Disabled }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateChannelCommand = async (
  input: UpdateChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-chime-bearer": input.ChimeBearer!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels/{ChannelArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Metadata != null && { Metadata: input.Metadata }),
    ...(input.Mode != null && { Mode: input.Mode }),
    ...(input.Name != null && { Name: input.Name }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "messaging-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateChannelMessageCommand = async (
  input: UpdateChannelMessageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-chime-bearer": input.ChimeBearer!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/channels/{ChannelArn}/messages/{MessageId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "MessageId", () => input.MessageId!, "{MessageId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Content != null && { Content: input.Content }),
    ...(input.Metadata != null && { Metadata: input.Metadata }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "messaging-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateChannelReadMarkerCommand = async (
  input: UpdateChannelReadMarkerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-chime-bearer": input.ChimeBearer!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels/{ChannelArn}/readMarker";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelArn", () => input.ChannelArn!, "{ChannelArn}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "messaging-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateGlobalSettingsCommand = async (
  input: UpdateGlobalSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/settings";
  let body: any;
  body = JSON.stringify({
    ...(input.BusinessCalling != null && {
      BusinessCalling: serializeAws_restJson1BusinessCallingSettings(input.BusinessCalling, context),
    }),
    ...(input.VoiceConnector != null && {
      VoiceConnector: serializeAws_restJson1VoiceConnectorSettings(input.VoiceConnector, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdatePhoneNumberCommand = async (
  input: UpdatePhoneNumberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/phone-numbers/{PhoneNumberId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "PhoneNumberId",
    () => input.PhoneNumberId!,
    "{PhoneNumberId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.CallingName != null && { CallingName: input.CallingName }),
    ...(input.ProductType != null && { ProductType: input.ProductType }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdatePhoneNumberSettingsCommand = async (
  input: UpdatePhoneNumberSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/settings/phone-number";
  let body: any;
  body = JSON.stringify({
    ...(input.CallingName != null && { CallingName: input.CallingName }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateProxySessionCommand = async (
  input: UpdateProxySessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/voice-connectors/{VoiceConnectorId}/proxy-sessions/{ProxySessionId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "VoiceConnectorId",
    () => input.VoiceConnectorId!,
    "{VoiceConnectorId}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ProxySessionId",
    () => input.ProxySessionId!,
    "{ProxySessionId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Capabilities != null && {
      Capabilities: serializeAws_restJson1CapabilityList(input.Capabilities, context),
    }),
    ...(input.ExpiryMinutes != null && { ExpiryMinutes: input.ExpiryMinutes }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateRoomCommand = async (
  input: UpdateRoomCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accounts/{AccountId}/rooms/{RoomId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "AccountId", () => input.AccountId!, "{AccountId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "RoomId", () => input.RoomId!, "{RoomId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Name != null && { Name: input.Name }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateRoomMembershipCommand = async (
  input: UpdateRoomMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AccountId}/rooms/{RoomId}/memberships/{MemberId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "AccountId", () => input.AccountId!, "{AccountId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "RoomId", () => input.RoomId!, "{RoomId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "MemberId", () => input.MemberId!, "{MemberId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Role != null && { Role: input.Role }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateSipMediaApplicationCommand = async (
  input: UpdateSipMediaApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/sip-media-applications/{SipMediaApplicationId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "SipMediaApplicationId",
    () => input.SipMediaApplicationId!,
    "{SipMediaApplicationId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Endpoints != null && {
      Endpoints: serializeAws_restJson1SipMediaApplicationEndpointList(input.Endpoints, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateSipMediaApplicationCallCommand = async (
  input: UpdateSipMediaApplicationCallCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/sip-media-applications/{SipMediaApplicationId}/calls/{TransactionId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "SipMediaApplicationId",
    () => input.SipMediaApplicationId!,
    "{SipMediaApplicationId}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "TransactionId",
    () => input.TransactionId!,
    "{TransactionId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Arguments != null && {
      Arguments: serializeAws_restJson1SMAUpdateCallArgumentsMap(input.Arguments, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateSipRuleCommand = async (
  input: UpdateSipRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/sip-rules/{SipRuleId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "SipRuleId", () => input.SipRuleId!, "{SipRuleId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Disabled != null && { Disabled: input.Disabled }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.TargetApplications != null && {
      TargetApplications: serializeAws_restJson1SipRuleTargetApplicationList(input.TargetApplications, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateUserCommand = async (
  input: UpdateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accounts/{AccountId}/users/{UserId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "AccountId", () => input.AccountId!, "{AccountId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "UserId", () => input.UserId!, "{UserId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.AlexaForBusinessMetadata != null && {
      AlexaForBusinessMetadata: serializeAws_restJson1AlexaForBusinessMetadata(input.AlexaForBusinessMetadata, context),
    }),
    ...(input.LicenseType != null && { LicenseType: input.LicenseType }),
    ...(input.UserType != null && { UserType: input.UserType }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateUserSettingsCommand = async (
  input: UpdateUserSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/accounts/{AccountId}/users/{UserId}/settings";
  resolvedPath = __resolvedPath(resolvedPath, input, "AccountId", () => input.AccountId!, "{AccountId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "UserId", () => input.UserId!, "{UserId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.UserSettings != null && {
      UserSettings: serializeAws_restJson1UserSettings(input.UserSettings, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateVoiceConnectorCommand = async (
  input: UpdateVoiceConnectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/voice-connectors/{VoiceConnectorId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "VoiceConnectorId",
    () => input.VoiceConnectorId!,
    "{VoiceConnectorId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RequireEncryption != null && { RequireEncryption: input.RequireEncryption }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateVoiceConnectorGroupCommand = async (
  input: UpdateVoiceConnectorGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/voice-connector-groups/{VoiceConnectorGroupId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "VoiceConnectorGroupId",
    () => input.VoiceConnectorGroupId!,
    "{VoiceConnectorGroupId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Name != null && { Name: input.Name }),
    ...(input.VoiceConnectorItems != null && {
      VoiceConnectorItems: serializeAws_restJson1VoiceConnectorItemList(input.VoiceConnectorItems, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1ValidateE911AddressCommand = async (
  input: ValidateE911AddressCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/emergency-calling/address";
  let body: any;
  body = JSON.stringify({
    ...(input.AwsAccountId != null && { AwsAccountId: input.AwsAccountId }),
    ...(input.City != null && { City: input.City }),
    ...(input.Country != null && { Country: input.Country }),
    ...(input.PostalCode != null && { PostalCode: input.PostalCode }),
    ...(input.State != null && { State: input.State }),
    ...(input.StreetInfo != null && { StreetInfo: input.StreetInfo }),
    ...(input.StreetNumber != null && { StreetNumber: input.StreetNumber }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const deserializeAws_restJson1AssociatePhoneNumbersWithVoiceConnectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociatePhoneNumbersWithVoiceConnectorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AssociatePhoneNumbersWithVoiceConnectorCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.PhoneNumberErrors != null) {
    contents.PhoneNumberErrors = deserializeAws_restJson1PhoneNumberErrorList(data.PhoneNumberErrors, context);
  }
  return contents;
};

const deserializeAws_restJson1AssociatePhoneNumbersWithVoiceConnectorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociatePhoneNumbersWithVoiceConnectorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.chime#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1AssociatePhoneNumbersWithVoiceConnectorGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociatePhoneNumbersWithVoiceConnectorGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AssociatePhoneNumbersWithVoiceConnectorGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.PhoneNumberErrors != null) {
    contents.PhoneNumberErrors = deserializeAws_restJson1PhoneNumberErrorList(data.PhoneNumberErrors, context);
  }
  return contents;
};

const deserializeAws_restJson1AssociatePhoneNumbersWithVoiceConnectorGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociatePhoneNumbersWithVoiceConnectorGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.chime#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1AssociatePhoneNumberWithUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociatePhoneNumberWithUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AssociatePhoneNumberWithUserCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1AssociatePhoneNumberWithUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociatePhoneNumberWithUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.chime#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1AssociateSigninDelegateGroupsWithAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateSigninDelegateGroupsWithAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AssociateSigninDelegateGroupsWithAccountCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1AssociateSigninDelegateGroupsWithAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateSigninDelegateGroupsWithAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1BatchCreateAttendeeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchCreateAttendeeCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchCreateAttendeeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Attendees != null) {
    contents.Attendees = deserializeAws_restJson1AttendeeList(data.Attendees, context);
  }
  if (data.Errors != null) {
    contents.Errors = deserializeAws_restJson1BatchCreateAttendeeErrorList(data.Errors, context);
  }
  return contents;
};

const deserializeAws_restJson1BatchCreateAttendeeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchCreateAttendeeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chime#ResourceLimitExceededException":
      throw await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1BatchCreateChannelMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchCreateChannelMembershipCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchCreateChannelMembershipCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.BatchChannelMemberships != null) {
    contents.BatchChannelMemberships = deserializeAws_restJson1BatchChannelMemberships(
      data.BatchChannelMemberships,
      context
    );
  }
  if (data.Errors != null) {
    contents.Errors = deserializeAws_restJson1BatchCreateChannelMembershipErrors(data.Errors, context);
  }
  return contents;
};

const deserializeAws_restJson1BatchCreateChannelMembershipCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchCreateChannelMembershipCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1BatchCreateRoomMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchCreateRoomMembershipCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchCreateRoomMembershipCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Errors != null) {
    contents.Errors = deserializeAws_restJson1MemberErrorList(data.Errors, context);
  }
  return contents;
};

const deserializeAws_restJson1BatchCreateRoomMembershipCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchCreateRoomMembershipCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1BatchDeletePhoneNumberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeletePhoneNumberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchDeletePhoneNumberCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.PhoneNumberErrors != null) {
    contents.PhoneNumberErrors = deserializeAws_restJson1PhoneNumberErrorList(data.PhoneNumberErrors, context);
  }
  return contents;
};

const deserializeAws_restJson1BatchDeletePhoneNumberCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeletePhoneNumberCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1BatchSuspendUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchSuspendUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchSuspendUserCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.UserErrors != null) {
    contents.UserErrors = deserializeAws_restJson1UserErrorList(data.UserErrors, context);
  }
  return contents;
};

const deserializeAws_restJson1BatchSuspendUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchSuspendUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1BatchUnsuspendUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUnsuspendUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchUnsuspendUserCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.UserErrors != null) {
    contents.UserErrors = deserializeAws_restJson1UserErrorList(data.UserErrors, context);
  }
  return contents;
};

const deserializeAws_restJson1BatchUnsuspendUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUnsuspendUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1BatchUpdatePhoneNumberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpdatePhoneNumberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchUpdatePhoneNumberCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.PhoneNumberErrors != null) {
    contents.PhoneNumberErrors = deserializeAws_restJson1PhoneNumberErrorList(data.PhoneNumberErrors, context);
  }
  return contents;
};

const deserializeAws_restJson1BatchUpdatePhoneNumberCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpdatePhoneNumberCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1BatchUpdateUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpdateUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchUpdateUserCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.UserErrors != null) {
    contents.UserErrors = deserializeAws_restJson1UserErrorList(data.UserErrors, context);
  }
  return contents;
};

const deserializeAws_restJson1BatchUpdateUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpdateUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccountCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateAccountCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Account != null) {
    contents.Account = deserializeAws_restJson1Account(data.Account, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateAppInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppInstanceCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateAppInstanceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AppInstanceArn != null) {
    contents.AppInstanceArn = __expectString(data.AppInstanceArn);
  }
  return contents;
};

const deserializeAws_restJson1CreateAppInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chime#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chime#ResourceLimitExceededException":
      throw await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateAppInstanceAdminCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppInstanceAdminCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateAppInstanceAdminCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AppInstanceAdmin != null) {
    contents.AppInstanceAdmin = deserializeAws_restJson1Identity(data.AppInstanceAdmin, context);
  }
  if (data.AppInstanceArn != null) {
    contents.AppInstanceArn = __expectString(data.AppInstanceArn);
  }
  return contents;
};

const deserializeAws_restJson1CreateAppInstanceAdminCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppInstanceAdminCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chime#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chime#ResourceLimitExceededException":
      throw await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateAppInstanceUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppInstanceUserCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateAppInstanceUserCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AppInstanceUserArn != null) {
    contents.AppInstanceUserArn = __expectString(data.AppInstanceUserArn);
  }
  return contents;
};

const deserializeAws_restJson1CreateAppInstanceUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppInstanceUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chime#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chime#ResourceLimitExceededException":
      throw await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateAttendeeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAttendeeCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateAttendeeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Attendee != null) {
    contents.Attendee = deserializeAws_restJson1Attendee(data.Attendee, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateAttendeeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAttendeeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chime#ResourceLimitExceededException":
      throw await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateBotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBotCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateBotCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Bot != null) {
    contents.Bot = deserializeAws_restJson1Bot(data.Bot, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateBotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chime#ResourceLimitExceededException":
      throw await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChannelCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelArn != null) {
    contents.ChannelArn = __expectString(data.ChannelArn);
  }
  return contents;
};

const deserializeAws_restJson1CreateChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chime#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chime#ResourceLimitExceededException":
      throw await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateChannelBanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChannelBanCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateChannelBanCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelArn != null) {
    contents.ChannelArn = __expectString(data.ChannelArn);
  }
  if (data.Member != null) {
    contents.Member = deserializeAws_restJson1Identity(data.Member, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateChannelBanCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChannelBanCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chime#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chime#ResourceLimitExceededException":
      throw await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateChannelMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChannelMembershipCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateChannelMembershipCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelArn != null) {
    contents.ChannelArn = __expectString(data.ChannelArn);
  }
  if (data.Member != null) {
    contents.Member = deserializeAws_restJson1Identity(data.Member, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateChannelMembershipCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChannelMembershipCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chime#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chime#ResourceLimitExceededException":
      throw await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateChannelModeratorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChannelModeratorCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateChannelModeratorCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelArn != null) {
    contents.ChannelArn = __expectString(data.ChannelArn);
  }
  if (data.ChannelModerator != null) {
    contents.ChannelModerator = deserializeAws_restJson1Identity(data.ChannelModerator, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateChannelModeratorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChannelModeratorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chime#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chime#ResourceLimitExceededException":
      throw await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateMediaCapturePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMediaCapturePipelineCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateMediaCapturePipelineCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.MediaCapturePipeline != null) {
    contents.MediaCapturePipeline = deserializeAws_restJson1MediaCapturePipeline(data.MediaCapturePipeline, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateMediaCapturePipelineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMediaCapturePipelineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chime#ResourceLimitExceededException":
      throw await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateMeetingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMeetingCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateMeetingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Meeting != null) {
    contents.Meeting = deserializeAws_restJson1Meeting(data.Meeting, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateMeetingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMeetingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chime#ResourceLimitExceededException":
      throw await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateMeetingDialOutCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMeetingDialOutCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateMeetingDialOutCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.TransactionId != null) {
    contents.TransactionId = __expectString(data.TransactionId);
  }
  return contents;
};

const deserializeAws_restJson1CreateMeetingDialOutCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMeetingDialOutCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.chime#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chime#ResourceLimitExceededException":
      throw await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateMeetingWithAttendeesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMeetingWithAttendeesCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateMeetingWithAttendeesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Attendees != null) {
    contents.Attendees = deserializeAws_restJson1AttendeeList(data.Attendees, context);
  }
  if (data.Errors != null) {
    contents.Errors = deserializeAws_restJson1BatchCreateAttendeeErrorList(data.Errors, context);
  }
  if (data.Meeting != null) {
    contents.Meeting = deserializeAws_restJson1Meeting(data.Meeting, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateMeetingWithAttendeesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMeetingWithAttendeesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chime#ResourceLimitExceededException":
      throw await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreatePhoneNumberOrderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePhoneNumberOrderCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreatePhoneNumberOrderCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.PhoneNumberOrder != null) {
    contents.PhoneNumberOrder = deserializeAws_restJson1PhoneNumberOrder(data.PhoneNumberOrder, context);
  }
  return contents;
};

const deserializeAws_restJson1CreatePhoneNumberOrderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePhoneNumberOrderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.chime#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chime#ResourceLimitExceededException":
      throw await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateProxySessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProxySessionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateProxySessionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ProxySession != null) {
    contents.ProxySession = deserializeAws_restJson1ProxySession(data.ProxySession, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateProxySessionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProxySessionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateRoomCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRoomCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateRoomCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Room != null) {
    contents.Room = deserializeAws_restJson1Room(data.Room, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateRoomCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRoomCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chime#ResourceLimitExceededException":
      throw await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateRoomMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRoomMembershipCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateRoomMembershipCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.RoomMembership != null) {
    contents.RoomMembership = deserializeAws_restJson1RoomMembership(data.RoomMembership, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateRoomMembershipCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRoomMembershipCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chime#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chime#ResourceLimitExceededException":
      throw await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateSipMediaApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSipMediaApplicationCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateSipMediaApplicationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.SipMediaApplication != null) {
    contents.SipMediaApplication = deserializeAws_restJson1SipMediaApplication(data.SipMediaApplication, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateSipMediaApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSipMediaApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.chime#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chime#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chime#ResourceLimitExceededException":
      throw await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateSipMediaApplicationCallCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSipMediaApplicationCallCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateSipMediaApplicationCallCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.SipMediaApplicationCall != null) {
    contents.SipMediaApplicationCall = deserializeAws_restJson1SipMediaApplicationCall(
      data.SipMediaApplicationCall,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1CreateSipMediaApplicationCallCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSipMediaApplicationCallCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.chime#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chime#ResourceLimitExceededException":
      throw await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateSipRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSipRuleCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateSipRuleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.SipRule != null) {
    contents.SipRule = deserializeAws_restJson1SipRule(data.SipRule, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateSipRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSipRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.chime#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chime#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chime#ResourceLimitExceededException":
      throw await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateUserCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.User != null) {
    contents.User = deserializeAws_restJson1User(data.User, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chime#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateVoiceConnectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVoiceConnectorCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateVoiceConnectorCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.VoiceConnector != null) {
    contents.VoiceConnector = deserializeAws_restJson1VoiceConnector(data.VoiceConnector, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateVoiceConnectorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVoiceConnectorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.chime#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chime#ResourceLimitExceededException":
      throw await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateVoiceConnectorGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVoiceConnectorGroupCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateVoiceConnectorGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.VoiceConnectorGroup != null) {
    contents.VoiceConnectorGroup = deserializeAws_restJson1VoiceConnectorGroup(data.VoiceConnectorGroup, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateVoiceConnectorGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVoiceConnectorGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.chime#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chime#ResourceLimitExceededException":
      throw await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccountCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteAccountCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.chime#UnprocessableEntityException":
      throw await deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteAppInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppInstanceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteAppInstanceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteAppInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteAppInstanceAdminCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppInstanceAdminCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteAppInstanceAdminCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteAppInstanceAdminCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppInstanceAdminCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chime#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteAppInstanceStreamingConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppInstanceStreamingConfigurationsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteAppInstanceStreamingConfigurationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteAppInstanceStreamingConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppInstanceStreamingConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteAppInstanceUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppInstanceUserCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteAppInstanceUserCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteAppInstanceUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppInstanceUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteAttendeeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAttendeeCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteAttendeeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteAttendeeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAttendeeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteChannelBanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelBanCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteChannelBanCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteChannelBanCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelBanCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteChannelMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelMembershipCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteChannelMembershipCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteChannelMembershipCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelMembershipCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chime#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteChannelMessageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelMessageCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteChannelMessageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteChannelMessageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelMessageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteChannelModeratorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelModeratorCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteChannelModeratorCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteChannelModeratorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelModeratorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteEventsConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventsConfigurationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteEventsConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteEventsConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventsConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chime#ResourceLimitExceededException":
      throw await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteMediaCapturePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMediaCapturePipelineCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteMediaCapturePipelineCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteMediaCapturePipelineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMediaCapturePipelineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteMeetingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMeetingCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteMeetingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteMeetingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMeetingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeletePhoneNumberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePhoneNumberCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeletePhoneNumberCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeletePhoneNumberCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePhoneNumberCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteProxySessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProxySessionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteProxySessionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteProxySessionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProxySessionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteRoomCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRoomCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteRoomCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteRoomCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRoomCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteRoomMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRoomMembershipCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteRoomMembershipCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteRoomMembershipCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRoomMembershipCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteSipMediaApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSipMediaApplicationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteSipMediaApplicationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteSipMediaApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSipMediaApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chime#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteSipRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSipRuleCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteSipRuleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteSipRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSipRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chime#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteVoiceConnectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVoiceConnectorCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteVoiceConnectorCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteVoiceConnectorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVoiceConnectorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chime#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteVoiceConnectorEmergencyCallingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVoiceConnectorEmergencyCallingConfigurationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteVoiceConnectorEmergencyCallingConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteVoiceConnectorEmergencyCallingConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVoiceConnectorEmergencyCallingConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteVoiceConnectorGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVoiceConnectorGroupCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteVoiceConnectorGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteVoiceConnectorGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVoiceConnectorGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chime#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteVoiceConnectorOriginationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVoiceConnectorOriginationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteVoiceConnectorOriginationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteVoiceConnectorOriginationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVoiceConnectorOriginationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteVoiceConnectorProxyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVoiceConnectorProxyCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteVoiceConnectorProxyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteVoiceConnectorProxyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVoiceConnectorProxyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteVoiceConnectorStreamingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVoiceConnectorStreamingConfigurationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteVoiceConnectorStreamingConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteVoiceConnectorStreamingConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVoiceConnectorStreamingConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteVoiceConnectorTerminationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVoiceConnectorTerminationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteVoiceConnectorTerminationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteVoiceConnectorTerminationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVoiceConnectorTerminationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteVoiceConnectorTerminationCredentialsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVoiceConnectorTerminationCredentialsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteVoiceConnectorTerminationCredentialsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteVoiceConnectorTerminationCredentialsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVoiceConnectorTerminationCredentialsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeAppInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAppInstanceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeAppInstanceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AppInstance != null) {
    contents.AppInstance = deserializeAws_restJson1AppInstance(data.AppInstance, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeAppInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAppInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeAppInstanceAdminCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAppInstanceAdminCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeAppInstanceAdminCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AppInstanceAdmin != null) {
    contents.AppInstanceAdmin = deserializeAws_restJson1AppInstanceAdmin(data.AppInstanceAdmin, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeAppInstanceAdminCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAppInstanceAdminCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeAppInstanceUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAppInstanceUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeAppInstanceUserCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AppInstanceUser != null) {
    contents.AppInstanceUser = deserializeAws_restJson1AppInstanceUser(data.AppInstanceUser, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeAppInstanceUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAppInstanceUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Channel != null) {
    contents.Channel = deserializeAws_restJson1Channel(data.Channel, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeChannelBanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelBanCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeChannelBanCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelBan != null) {
    contents.ChannelBan = deserializeAws_restJson1ChannelBan(data.ChannelBan, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeChannelBanCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelBanCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeChannelMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelMembershipCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeChannelMembershipCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelMembership != null) {
    contents.ChannelMembership = deserializeAws_restJson1ChannelMembership(data.ChannelMembership, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeChannelMembershipCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelMembershipCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeChannelMembershipForAppInstanceUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelMembershipForAppInstanceUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeChannelMembershipForAppInstanceUserCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelMembership != null) {
    contents.ChannelMembership = deserializeAws_restJson1ChannelMembershipForAppInstanceUserSummary(
      data.ChannelMembership,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1DescribeChannelMembershipForAppInstanceUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelMembershipForAppInstanceUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeChannelModeratedByAppInstanceUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelModeratedByAppInstanceUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeChannelModeratedByAppInstanceUserCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Channel != null) {
    contents.Channel = deserializeAws_restJson1ChannelModeratedByAppInstanceUserSummary(data.Channel, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeChannelModeratedByAppInstanceUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelModeratedByAppInstanceUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeChannelModeratorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelModeratorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeChannelModeratorCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelModerator != null) {
    contents.ChannelModerator = deserializeAws_restJson1ChannelModerator(data.ChannelModerator, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeChannelModeratorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelModeratorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DisassociatePhoneNumberFromUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociatePhoneNumberFromUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisassociatePhoneNumberFromUserCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DisassociatePhoneNumberFromUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociatePhoneNumberFromUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DisassociatePhoneNumbersFromVoiceConnectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociatePhoneNumbersFromVoiceConnectorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisassociatePhoneNumbersFromVoiceConnectorCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.PhoneNumberErrors != null) {
    contents.PhoneNumberErrors = deserializeAws_restJson1PhoneNumberErrorList(data.PhoneNumberErrors, context);
  }
  return contents;
};

const deserializeAws_restJson1DisassociatePhoneNumbersFromVoiceConnectorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociatePhoneNumbersFromVoiceConnectorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DisassociatePhoneNumbersFromVoiceConnectorGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociatePhoneNumbersFromVoiceConnectorGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisassociatePhoneNumbersFromVoiceConnectorGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.PhoneNumberErrors != null) {
    contents.PhoneNumberErrors = deserializeAws_restJson1PhoneNumberErrorList(data.PhoneNumberErrors, context);
  }
  return contents;
};

const deserializeAws_restJson1DisassociatePhoneNumbersFromVoiceConnectorGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociatePhoneNumbersFromVoiceConnectorGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DisassociateSigninDelegateGroupsFromAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateSigninDelegateGroupsFromAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisassociateSigninDelegateGroupsFromAccountCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DisassociateSigninDelegateGroupsFromAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateSigninDelegateGroupsFromAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetAccountCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Account != null) {
    contents.Account = deserializeAws_restJson1Account(data.Account, context);
  }
  return contents;
};

const deserializeAws_restJson1GetAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetAccountSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetAccountSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AccountSettings != null) {
    contents.AccountSettings = deserializeAws_restJson1AccountSettings(data.AccountSettings, context);
  }
  return contents;
};

const deserializeAws_restJson1GetAccountSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetAppInstanceRetentionSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppInstanceRetentionSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetAppInstanceRetentionSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AppInstanceRetentionSettings != null) {
    contents.AppInstanceRetentionSettings = deserializeAws_restJson1AppInstanceRetentionSettings(
      data.AppInstanceRetentionSettings,
      context
    );
  }
  if (data.InitiateDeletionTimestamp != null) {
    contents.InitiateDeletionTimestamp = __expectNonNull(
      __parseEpochTimestamp(__expectNumber(data.InitiateDeletionTimestamp))
    );
  }
  return contents;
};

const deserializeAws_restJson1GetAppInstanceRetentionSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppInstanceRetentionSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetAppInstanceStreamingConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppInstanceStreamingConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetAppInstanceStreamingConfigurationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AppInstanceStreamingConfigurations != null) {
    contents.AppInstanceStreamingConfigurations = deserializeAws_restJson1AppInstanceStreamingConfigurationList(
      data.AppInstanceStreamingConfigurations,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1GetAppInstanceStreamingConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppInstanceStreamingConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetAttendeeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAttendeeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetAttendeeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Attendee != null) {
    contents.Attendee = deserializeAws_restJson1Attendee(data.Attendee, context);
  }
  return contents;
};

const deserializeAws_restJson1GetAttendeeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAttendeeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetBotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBotCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetBotCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Bot != null) {
    contents.Bot = deserializeAws_restJson1Bot(data.Bot, context);
  }
  return contents;
};

const deserializeAws_restJson1GetBotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetChannelMessageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetChannelMessageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetChannelMessageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelMessage != null) {
    contents.ChannelMessage = deserializeAws_restJson1ChannelMessage(data.ChannelMessage, context);
  }
  return contents;
};

const deserializeAws_restJson1GetChannelMessageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetChannelMessageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetEventsConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEventsConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetEventsConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.EventsConfiguration != null) {
    contents.EventsConfiguration = deserializeAws_restJson1EventsConfiguration(data.EventsConfiguration, context);
  }
  return contents;
};

const deserializeAws_restJson1GetEventsConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEventsConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chime#ResourceLimitExceededException":
      throw await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetGlobalSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGlobalSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetGlobalSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.BusinessCalling != null) {
    contents.BusinessCalling = deserializeAws_restJson1BusinessCallingSettings(data.BusinessCalling, context);
  }
  if (data.VoiceConnector != null) {
    contents.VoiceConnector = deserializeAws_restJson1VoiceConnectorSettings(data.VoiceConnector, context);
  }
  return contents;
};

const deserializeAws_restJson1GetGlobalSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGlobalSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetMediaCapturePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMediaCapturePipelineCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetMediaCapturePipelineCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.MediaCapturePipeline != null) {
    contents.MediaCapturePipeline = deserializeAws_restJson1MediaCapturePipeline(data.MediaCapturePipeline, context);
  }
  return contents;
};

const deserializeAws_restJson1GetMediaCapturePipelineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMediaCapturePipelineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetMeetingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMeetingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetMeetingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Meeting != null) {
    contents.Meeting = deserializeAws_restJson1Meeting(data.Meeting, context);
  }
  return contents;
};

const deserializeAws_restJson1GetMeetingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMeetingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetMessagingSessionEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMessagingSessionEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetMessagingSessionEndpointCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Endpoint != null) {
    contents.Endpoint = deserializeAws_restJson1MessagingSessionEndpoint(data.Endpoint, context);
  }
  return contents;
};

const deserializeAws_restJson1GetMessagingSessionEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMessagingSessionEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetPhoneNumberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPhoneNumberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetPhoneNumberCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.PhoneNumber != null) {
    contents.PhoneNumber = deserializeAws_restJson1PhoneNumber(data.PhoneNumber, context);
  }
  return contents;
};

const deserializeAws_restJson1GetPhoneNumberCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPhoneNumberCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetPhoneNumberOrderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPhoneNumberOrderCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetPhoneNumberOrderCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.PhoneNumberOrder != null) {
    contents.PhoneNumberOrder = deserializeAws_restJson1PhoneNumberOrder(data.PhoneNumberOrder, context);
  }
  return contents;
};

const deserializeAws_restJson1GetPhoneNumberOrderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPhoneNumberOrderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetPhoneNumberSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPhoneNumberSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetPhoneNumberSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CallingName != null) {
    contents.CallingName = __expectString(data.CallingName);
  }
  if (data.CallingNameUpdatedTimestamp != null) {
    contents.CallingNameUpdatedTimestamp = __expectNonNull(
      __parseRfc3339DateTimeWithOffset(data.CallingNameUpdatedTimestamp)
    );
  }
  return contents;
};

const deserializeAws_restJson1GetPhoneNumberSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPhoneNumberSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetProxySessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProxySessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetProxySessionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ProxySession != null) {
    contents.ProxySession = deserializeAws_restJson1ProxySession(data.ProxySession, context);
  }
  return contents;
};

const deserializeAws_restJson1GetProxySessionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProxySessionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetRetentionSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRetentionSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetRetentionSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.InitiateDeletionTimestamp != null) {
    contents.InitiateDeletionTimestamp = __expectNonNull(
      __parseRfc3339DateTimeWithOffset(data.InitiateDeletionTimestamp)
    );
  }
  if (data.RetentionSettings != null) {
    contents.RetentionSettings = deserializeAws_restJson1RetentionSettings(data.RetentionSettings, context);
  }
  return contents;
};

const deserializeAws_restJson1GetRetentionSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRetentionSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetRoomCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRoomCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetRoomCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Room != null) {
    contents.Room = deserializeAws_restJson1Room(data.Room, context);
  }
  return contents;
};

const deserializeAws_restJson1GetRoomCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRoomCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetSipMediaApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSipMediaApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSipMediaApplicationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.SipMediaApplication != null) {
    contents.SipMediaApplication = deserializeAws_restJson1SipMediaApplication(data.SipMediaApplication, context);
  }
  return contents;
};

const deserializeAws_restJson1GetSipMediaApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSipMediaApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetSipMediaApplicationLoggingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSipMediaApplicationLoggingConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSipMediaApplicationLoggingConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.SipMediaApplicationLoggingConfiguration != null) {
    contents.SipMediaApplicationLoggingConfiguration = deserializeAws_restJson1SipMediaApplicationLoggingConfiguration(
      data.SipMediaApplicationLoggingConfiguration,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1GetSipMediaApplicationLoggingConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSipMediaApplicationLoggingConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetSipRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSipRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSipRuleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.SipRule != null) {
    contents.SipRule = deserializeAws_restJson1SipRule(data.SipRule, context);
  }
  return contents;
};

const deserializeAws_restJson1GetSipRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSipRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetUserCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.User != null) {
    contents.User = deserializeAws_restJson1User(data.User, context);
  }
  return contents;
};

const deserializeAws_restJson1GetUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetUserSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUserSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetUserSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.UserSettings != null) {
    contents.UserSettings = deserializeAws_restJson1UserSettings(data.UserSettings, context);
  }
  return contents;
};

const deserializeAws_restJson1GetUserSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUserSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetVoiceConnectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVoiceConnectorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetVoiceConnectorCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.VoiceConnector != null) {
    contents.VoiceConnector = deserializeAws_restJson1VoiceConnector(data.VoiceConnector, context);
  }
  return contents;
};

const deserializeAws_restJson1GetVoiceConnectorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVoiceConnectorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetVoiceConnectorEmergencyCallingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVoiceConnectorEmergencyCallingConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetVoiceConnectorEmergencyCallingConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.EmergencyCallingConfiguration != null) {
    contents.EmergencyCallingConfiguration = deserializeAws_restJson1EmergencyCallingConfiguration(
      data.EmergencyCallingConfiguration,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1GetVoiceConnectorEmergencyCallingConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVoiceConnectorEmergencyCallingConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetVoiceConnectorGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVoiceConnectorGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetVoiceConnectorGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.VoiceConnectorGroup != null) {
    contents.VoiceConnectorGroup = deserializeAws_restJson1VoiceConnectorGroup(data.VoiceConnectorGroup, context);
  }
  return contents;
};

const deserializeAws_restJson1GetVoiceConnectorGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVoiceConnectorGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetVoiceConnectorLoggingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVoiceConnectorLoggingConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetVoiceConnectorLoggingConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.LoggingConfiguration != null) {
    contents.LoggingConfiguration = deserializeAws_restJson1LoggingConfiguration(data.LoggingConfiguration, context);
  }
  return contents;
};

const deserializeAws_restJson1GetVoiceConnectorLoggingConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVoiceConnectorLoggingConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetVoiceConnectorOriginationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVoiceConnectorOriginationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetVoiceConnectorOriginationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Origination != null) {
    contents.Origination = deserializeAws_restJson1Origination(data.Origination, context);
  }
  return contents;
};

const deserializeAws_restJson1GetVoiceConnectorOriginationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVoiceConnectorOriginationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetVoiceConnectorProxyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVoiceConnectorProxyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetVoiceConnectorProxyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Proxy != null) {
    contents.Proxy = deserializeAws_restJson1Proxy(data.Proxy, context);
  }
  return contents;
};

const deserializeAws_restJson1GetVoiceConnectorProxyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVoiceConnectorProxyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetVoiceConnectorStreamingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVoiceConnectorStreamingConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetVoiceConnectorStreamingConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.StreamingConfiguration != null) {
    contents.StreamingConfiguration = deserializeAws_restJson1StreamingConfiguration(
      data.StreamingConfiguration,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1GetVoiceConnectorStreamingConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVoiceConnectorStreamingConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetVoiceConnectorTerminationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVoiceConnectorTerminationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetVoiceConnectorTerminationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Termination != null) {
    contents.Termination = deserializeAws_restJson1Termination(data.Termination, context);
  }
  return contents;
};

const deserializeAws_restJson1GetVoiceConnectorTerminationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVoiceConnectorTerminationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetVoiceConnectorTerminationHealthCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVoiceConnectorTerminationHealthCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetVoiceConnectorTerminationHealthCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.TerminationHealth != null) {
    contents.TerminationHealth = deserializeAws_restJson1TerminationHealth(data.TerminationHealth, context);
  }
  return contents;
};

const deserializeAws_restJson1GetVoiceConnectorTerminationHealthCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVoiceConnectorTerminationHealthCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1InviteUsersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InviteUsersCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1InviteUsersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Invites != null) {
    contents.Invites = deserializeAws_restJson1InviteList(data.Invites, context);
  }
  return contents;
};

const deserializeAws_restJson1InviteUsersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InviteUsersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListAccountsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccountsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAccountsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Accounts != null) {
    contents.Accounts = deserializeAws_restJson1AccountList(data.Accounts, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListAccountsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccountsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListAppInstanceAdminsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppInstanceAdminsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAppInstanceAdminsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AppInstanceAdmins != null) {
    contents.AppInstanceAdmins = deserializeAws_restJson1AppInstanceAdminList(data.AppInstanceAdmins, context);
  }
  if (data.AppInstanceArn != null) {
    contents.AppInstanceArn = __expectString(data.AppInstanceArn);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListAppInstanceAdminsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppInstanceAdminsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListAppInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppInstancesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAppInstancesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AppInstances != null) {
    contents.AppInstances = deserializeAws_restJson1AppInstanceList(data.AppInstances, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListAppInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListAppInstanceUsersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppInstanceUsersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAppInstanceUsersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AppInstanceArn != null) {
    contents.AppInstanceArn = __expectString(data.AppInstanceArn);
  }
  if (data.AppInstanceUsers != null) {
    contents.AppInstanceUsers = deserializeAws_restJson1AppInstanceUserList(data.AppInstanceUsers, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListAppInstanceUsersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppInstanceUsersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListAttendeesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAttendeesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAttendeesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Attendees != null) {
    contents.Attendees = deserializeAws_restJson1AttendeeList(data.Attendees, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListAttendeesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAttendeesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListAttendeeTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAttendeeTagsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAttendeeTagsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Tags != null) {
    contents.Tags = deserializeAws_restJson1TagList(data.Tags, context);
  }
  return contents;
};

const deserializeAws_restJson1ListAttendeeTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAttendeeTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListBotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBotsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListBotsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Bots != null) {
    contents.Bots = deserializeAws_restJson1BotList(data.Bots, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListBotsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBotsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListChannelBansCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelBansCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListChannelBansCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelArn != null) {
    contents.ChannelArn = __expectString(data.ChannelArn);
  }
  if (data.ChannelBans != null) {
    contents.ChannelBans = deserializeAws_restJson1ChannelBanSummaryList(data.ChannelBans, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListChannelBansCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelBansCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListChannelMembershipsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelMembershipsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListChannelMembershipsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelArn != null) {
    contents.ChannelArn = __expectString(data.ChannelArn);
  }
  if (data.ChannelMemberships != null) {
    contents.ChannelMemberships = deserializeAws_restJson1ChannelMembershipSummaryList(
      data.ChannelMemberships,
      context
    );
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListChannelMembershipsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelMembershipsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListChannelMembershipsForAppInstanceUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelMembershipsForAppInstanceUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListChannelMembershipsForAppInstanceUserCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelMemberships != null) {
    contents.ChannelMemberships = deserializeAws_restJson1ChannelMembershipForAppInstanceUserSummaryList(
      data.ChannelMemberships,
      context
    );
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListChannelMembershipsForAppInstanceUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelMembershipsForAppInstanceUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListChannelMessagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelMessagesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListChannelMessagesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelArn != null) {
    contents.ChannelArn = __expectString(data.ChannelArn);
  }
  if (data.ChannelMessages != null) {
    contents.ChannelMessages = deserializeAws_restJson1ChannelMessageSummaryList(data.ChannelMessages, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListChannelMessagesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelMessagesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListChannelModeratorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelModeratorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListChannelModeratorsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelArn != null) {
    contents.ChannelArn = __expectString(data.ChannelArn);
  }
  if (data.ChannelModerators != null) {
    contents.ChannelModerators = deserializeAws_restJson1ChannelModeratorSummaryList(data.ChannelModerators, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListChannelModeratorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelModeratorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListChannelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListChannelsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Channels != null) {
    contents.Channels = deserializeAws_restJson1ChannelSummaryList(data.Channels, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListChannelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListChannelsModeratedByAppInstanceUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelsModeratedByAppInstanceUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListChannelsModeratedByAppInstanceUserCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Channels != null) {
    contents.Channels = deserializeAws_restJson1ChannelModeratedByAppInstanceUserSummaryList(data.Channels, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListChannelsModeratedByAppInstanceUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelsModeratedByAppInstanceUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListMediaCapturePipelinesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMediaCapturePipelinesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListMediaCapturePipelinesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.MediaCapturePipelines != null) {
    contents.MediaCapturePipelines = deserializeAws_restJson1MediaCapturePipelineList(
      data.MediaCapturePipelines,
      context
    );
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListMediaCapturePipelinesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMediaCapturePipelinesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListMeetingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMeetingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListMeetingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Meetings != null) {
    contents.Meetings = deserializeAws_restJson1MeetingList(data.Meetings, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListMeetingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMeetingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListMeetingTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMeetingTagsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListMeetingTagsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Tags != null) {
    contents.Tags = deserializeAws_restJson1TagList(data.Tags, context);
  }
  return contents;
};

const deserializeAws_restJson1ListMeetingTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMeetingTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListPhoneNumberOrdersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPhoneNumberOrdersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListPhoneNumberOrdersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.PhoneNumberOrders != null) {
    contents.PhoneNumberOrders = deserializeAws_restJson1PhoneNumberOrderList(data.PhoneNumberOrders, context);
  }
  return contents;
};

const deserializeAws_restJson1ListPhoneNumberOrdersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPhoneNumberOrdersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListPhoneNumbersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPhoneNumbersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListPhoneNumbersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.PhoneNumbers != null) {
    contents.PhoneNumbers = deserializeAws_restJson1PhoneNumberList(data.PhoneNumbers, context);
  }
  return contents;
};

const deserializeAws_restJson1ListPhoneNumbersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPhoneNumbersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListProxySessionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProxySessionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListProxySessionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.ProxySessions != null) {
    contents.ProxySessions = deserializeAws_restJson1ProxySessions(data.ProxySessions, context);
  }
  return contents;
};

const deserializeAws_restJson1ListProxySessionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProxySessionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListRoomMembershipsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRoomMembershipsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListRoomMembershipsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.RoomMemberships != null) {
    contents.RoomMemberships = deserializeAws_restJson1RoomMembershipList(data.RoomMemberships, context);
  }
  return contents;
};

const deserializeAws_restJson1ListRoomMembershipsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRoomMembershipsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListRoomsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRoomsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListRoomsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Rooms != null) {
    contents.Rooms = deserializeAws_restJson1RoomList(data.Rooms, context);
  }
  return contents;
};

const deserializeAws_restJson1ListRoomsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRoomsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListSipMediaApplicationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSipMediaApplicationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListSipMediaApplicationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.SipMediaApplications != null) {
    contents.SipMediaApplications = deserializeAws_restJson1SipMediaApplicationList(data.SipMediaApplications, context);
  }
  return contents;
};

const deserializeAws_restJson1ListSipMediaApplicationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSipMediaApplicationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListSipRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSipRulesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListSipRulesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.SipRules != null) {
    contents.SipRules = deserializeAws_restJson1SipRuleList(data.SipRules, context);
  }
  return contents;
};

const deserializeAws_restJson1ListSipRulesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSipRulesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListSupportedPhoneNumberCountriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSupportedPhoneNumberCountriesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListSupportedPhoneNumberCountriesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.PhoneNumberCountries != null) {
    contents.PhoneNumberCountries = deserializeAws_restJson1PhoneNumberCountriesList(
      data.PhoneNumberCountries,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1ListSupportedPhoneNumberCountriesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSupportedPhoneNumberCountriesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.chime#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Tags != null) {
    contents.Tags = deserializeAws_restJson1TagList(data.Tags, context);
  }
  return contents;
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListUsersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUsersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListUsersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Users != null) {
    contents.Users = deserializeAws_restJson1UserList(data.Users, context);
  }
  return contents;
};

const deserializeAws_restJson1ListUsersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUsersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListVoiceConnectorGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVoiceConnectorGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListVoiceConnectorGroupsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.VoiceConnectorGroups != null) {
    contents.VoiceConnectorGroups = deserializeAws_restJson1VoiceConnectorGroupList(data.VoiceConnectorGroups, context);
  }
  return contents;
};

const deserializeAws_restJson1ListVoiceConnectorGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVoiceConnectorGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListVoiceConnectorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVoiceConnectorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListVoiceConnectorsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.VoiceConnectors != null) {
    contents.VoiceConnectors = deserializeAws_restJson1VoiceConnectorList(data.VoiceConnectors, context);
  }
  return contents;
};

const deserializeAws_restJson1ListVoiceConnectorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVoiceConnectorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListVoiceConnectorTerminationCredentialsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVoiceConnectorTerminationCredentialsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListVoiceConnectorTerminationCredentialsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Usernames != null) {
    contents.Usernames = deserializeAws_restJson1SensitiveStringList(data.Usernames, context);
  }
  return contents;
};

const deserializeAws_restJson1ListVoiceConnectorTerminationCredentialsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVoiceConnectorTerminationCredentialsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1LogoutUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<LogoutUserCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1LogoutUserCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1LogoutUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<LogoutUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1PutAppInstanceRetentionSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAppInstanceRetentionSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutAppInstanceRetentionSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AppInstanceRetentionSettings != null) {
    contents.AppInstanceRetentionSettings = deserializeAws_restJson1AppInstanceRetentionSettings(
      data.AppInstanceRetentionSettings,
      context
    );
  }
  if (data.InitiateDeletionTimestamp != null) {
    contents.InitiateDeletionTimestamp = __expectNonNull(
      __parseEpochTimestamp(__expectNumber(data.InitiateDeletionTimestamp))
    );
  }
  return contents;
};

const deserializeAws_restJson1PutAppInstanceRetentionSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAppInstanceRetentionSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chime#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1PutAppInstanceStreamingConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAppInstanceStreamingConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutAppInstanceStreamingConfigurationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AppInstanceStreamingConfigurations != null) {
    contents.AppInstanceStreamingConfigurations = deserializeAws_restJson1AppInstanceStreamingConfigurationList(
      data.AppInstanceStreamingConfigurations,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1PutAppInstanceStreamingConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAppInstanceStreamingConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1PutEventsConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEventsConfigurationCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutEventsConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.EventsConfiguration != null) {
    contents.EventsConfiguration = deserializeAws_restJson1EventsConfiguration(data.EventsConfiguration, context);
  }
  return contents;
};

const deserializeAws_restJson1PutEventsConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEventsConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chime#ResourceLimitExceededException":
      throw await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1PutRetentionSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRetentionSettingsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutRetentionSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.InitiateDeletionTimestamp != null) {
    contents.InitiateDeletionTimestamp = __expectNonNull(
      __parseRfc3339DateTimeWithOffset(data.InitiateDeletionTimestamp)
    );
  }
  if (data.RetentionSettings != null) {
    contents.RetentionSettings = deserializeAws_restJson1RetentionSettings(data.RetentionSettings, context);
  }
  return contents;
};

const deserializeAws_restJson1PutRetentionSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRetentionSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chime#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1PutSipMediaApplicationLoggingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSipMediaApplicationLoggingConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutSipMediaApplicationLoggingConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.SipMediaApplicationLoggingConfiguration != null) {
    contents.SipMediaApplicationLoggingConfiguration = deserializeAws_restJson1SipMediaApplicationLoggingConfiguration(
      data.SipMediaApplicationLoggingConfiguration,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1PutSipMediaApplicationLoggingConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSipMediaApplicationLoggingConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1PutVoiceConnectorEmergencyCallingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutVoiceConnectorEmergencyCallingConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutVoiceConnectorEmergencyCallingConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.EmergencyCallingConfiguration != null) {
    contents.EmergencyCallingConfiguration = deserializeAws_restJson1EmergencyCallingConfiguration(
      data.EmergencyCallingConfiguration,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1PutVoiceConnectorEmergencyCallingConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutVoiceConnectorEmergencyCallingConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1PutVoiceConnectorLoggingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutVoiceConnectorLoggingConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutVoiceConnectorLoggingConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.LoggingConfiguration != null) {
    contents.LoggingConfiguration = deserializeAws_restJson1LoggingConfiguration(data.LoggingConfiguration, context);
  }
  return contents;
};

const deserializeAws_restJson1PutVoiceConnectorLoggingConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutVoiceConnectorLoggingConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1PutVoiceConnectorOriginationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutVoiceConnectorOriginationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutVoiceConnectorOriginationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Origination != null) {
    contents.Origination = deserializeAws_restJson1Origination(data.Origination, context);
  }
  return contents;
};

const deserializeAws_restJson1PutVoiceConnectorOriginationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutVoiceConnectorOriginationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1PutVoiceConnectorProxyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutVoiceConnectorProxyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutVoiceConnectorProxyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Proxy != null) {
    contents.Proxy = deserializeAws_restJson1Proxy(data.Proxy, context);
  }
  return contents;
};

const deserializeAws_restJson1PutVoiceConnectorProxyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutVoiceConnectorProxyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.chime#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1PutVoiceConnectorStreamingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutVoiceConnectorStreamingConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutVoiceConnectorStreamingConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.StreamingConfiguration != null) {
    contents.StreamingConfiguration = deserializeAws_restJson1StreamingConfiguration(
      data.StreamingConfiguration,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1PutVoiceConnectorStreamingConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutVoiceConnectorStreamingConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1PutVoiceConnectorTerminationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutVoiceConnectorTerminationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutVoiceConnectorTerminationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Termination != null) {
    contents.Termination = deserializeAws_restJson1Termination(data.Termination, context);
  }
  return contents;
};

const deserializeAws_restJson1PutVoiceConnectorTerminationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutVoiceConnectorTerminationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.chime#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1PutVoiceConnectorTerminationCredentialsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutVoiceConnectorTerminationCredentialsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutVoiceConnectorTerminationCredentialsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1PutVoiceConnectorTerminationCredentialsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutVoiceConnectorTerminationCredentialsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1RedactChannelMessageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RedactChannelMessageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RedactChannelMessageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelArn != null) {
    contents.ChannelArn = __expectString(data.ChannelArn);
  }
  if (data.MessageId != null) {
    contents.MessageId = __expectString(data.MessageId);
  }
  return contents;
};

const deserializeAws_restJson1RedactChannelMessageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RedactChannelMessageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1RedactConversationMessageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RedactConversationMessageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RedactConversationMessageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1RedactConversationMessageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RedactConversationMessageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1RedactRoomMessageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RedactRoomMessageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RedactRoomMessageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1RedactRoomMessageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RedactRoomMessageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1RegenerateSecurityTokenCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegenerateSecurityTokenCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RegenerateSecurityTokenCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Bot != null) {
    contents.Bot = deserializeAws_restJson1Bot(data.Bot, context);
  }
  return contents;
};

const deserializeAws_restJson1RegenerateSecurityTokenCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegenerateSecurityTokenCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ResetPersonalPINCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetPersonalPINCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ResetPersonalPINCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.User != null) {
    contents.User = deserializeAws_restJson1User(data.User, context);
  }
  return contents;
};

const deserializeAws_restJson1ResetPersonalPINCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetPersonalPINCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1RestorePhoneNumberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestorePhoneNumberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RestorePhoneNumberCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.PhoneNumber != null) {
    contents.PhoneNumber = deserializeAws_restJson1PhoneNumber(data.PhoneNumber, context);
  }
  return contents;
};

const deserializeAws_restJson1RestorePhoneNumberCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestorePhoneNumberCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chime#ResourceLimitExceededException":
      throw await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1SearchAvailablePhoneNumbersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchAvailablePhoneNumbersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1SearchAvailablePhoneNumbersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.E164PhoneNumbers != null) {
    contents.E164PhoneNumbers = deserializeAws_restJson1E164PhoneNumberList(data.E164PhoneNumbers, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1SearchAvailablePhoneNumbersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchAvailablePhoneNumbersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.chime#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1SendChannelMessageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendChannelMessageCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1SendChannelMessageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelArn != null) {
    contents.ChannelArn = __expectString(data.ChannelArn);
  }
  if (data.MessageId != null) {
    contents.MessageId = __expectString(data.MessageId);
  }
  return contents;
};

const deserializeAws_restJson1SendChannelMessageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendChannelMessageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chime#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1StartMeetingTranscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMeetingTranscriptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartMeetingTranscriptionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1StartMeetingTranscriptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMeetingTranscriptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chime#ResourceLimitExceededException":
      throw await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.chime#UnprocessableEntityException":
      throw await deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1StopMeetingTranscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopMeetingTranscriptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StopMeetingTranscriptionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1StopMeetingTranscriptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopMeetingTranscriptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.chime#UnprocessableEntityException":
      throw await deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1TagAttendeeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagAttendeeCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagAttendeeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1TagAttendeeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagAttendeeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chime#ResourceLimitExceededException":
      throw await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1TagMeetingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagMeetingCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagMeetingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1TagMeetingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagMeetingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chime#ResourceLimitExceededException":
      throw await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UntagAttendeeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagAttendeeCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagAttendeeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UntagAttendeeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagAttendeeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UntagMeetingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagMeetingCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagMeetingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UntagMeetingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagMeetingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateAccountCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Account != null) {
    contents.Account = deserializeAws_restJson1Account(data.Account, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateAccountSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAccountSettingsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateAccountSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateAccountSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAccountSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chime#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateAppInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAppInstanceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateAppInstanceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AppInstanceArn != null) {
    contents.AppInstanceArn = __expectString(data.AppInstanceArn);
  }
  return contents;
};

const deserializeAws_restJson1UpdateAppInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAppInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chime#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateAppInstanceUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAppInstanceUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateAppInstanceUserCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AppInstanceUserArn != null) {
    contents.AppInstanceUserArn = __expectString(data.AppInstanceUserArn);
  }
  return contents;
};

const deserializeAws_restJson1UpdateAppInstanceUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAppInstanceUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chime#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateBotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBotCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateBotCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Bot != null) {
    contents.Bot = deserializeAws_restJson1Bot(data.Bot, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateBotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelArn != null) {
    contents.ChannelArn = __expectString(data.ChannelArn);
  }
  return contents;
};

const deserializeAws_restJson1UpdateChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chime#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateChannelMessageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChannelMessageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateChannelMessageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelArn != null) {
    contents.ChannelArn = __expectString(data.ChannelArn);
  }
  if (data.MessageId != null) {
    contents.MessageId = __expectString(data.MessageId);
  }
  return contents;
};

const deserializeAws_restJson1UpdateChannelMessageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChannelMessageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chime#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateChannelReadMarkerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChannelReadMarkerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateChannelReadMarkerCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelArn != null) {
    contents.ChannelArn = __expectString(data.ChannelArn);
  }
  return contents;
};

const deserializeAws_restJson1UpdateChannelReadMarkerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChannelReadMarkerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chime#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateGlobalSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGlobalSettingsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateGlobalSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateGlobalSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGlobalSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdatePhoneNumberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePhoneNumberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdatePhoneNumberCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.PhoneNumber != null) {
    contents.PhoneNumber = deserializeAws_restJson1PhoneNumber(data.PhoneNumber, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdatePhoneNumberCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePhoneNumberCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chime#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdatePhoneNumberSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePhoneNumberSettingsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdatePhoneNumberSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdatePhoneNumberSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePhoneNumberSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateProxySessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProxySessionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateProxySessionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ProxySession != null) {
    contents.ProxySession = deserializeAws_restJson1ProxySession(data.ProxySession, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateProxySessionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProxySessionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateRoomCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRoomCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateRoomCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Room != null) {
    contents.Room = deserializeAws_restJson1Room(data.Room, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateRoomCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRoomCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateRoomMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRoomMembershipCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateRoomMembershipCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.RoomMembership != null) {
    contents.RoomMembership = deserializeAws_restJson1RoomMembership(data.RoomMembership, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateRoomMembershipCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRoomMembershipCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateSipMediaApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSipMediaApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateSipMediaApplicationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.SipMediaApplication != null) {
    contents.SipMediaApplication = deserializeAws_restJson1SipMediaApplication(data.SipMediaApplication, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateSipMediaApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSipMediaApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chime#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateSipMediaApplicationCallCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSipMediaApplicationCallCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateSipMediaApplicationCallCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.SipMediaApplicationCall != null) {
    contents.SipMediaApplicationCall = deserializeAws_restJson1SipMediaApplicationCall(
      data.SipMediaApplicationCall,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1UpdateSipMediaApplicationCallCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSipMediaApplicationCallCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chime#ResourceLimitExceededException":
      throw await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateSipRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSipRuleCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateSipRuleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.SipRule != null) {
    contents.SipRule = deserializeAws_restJson1SipRule(data.SipRule, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateSipRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSipRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chime#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chime#ResourceLimitExceededException":
      throw await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateUserCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.User != null) {
    contents.User = deserializeAws_restJson1User(data.User, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateUserSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserSettingsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateUserSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateUserSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateVoiceConnectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVoiceConnectorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateVoiceConnectorCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.VoiceConnector != null) {
    contents.VoiceConnector = deserializeAws_restJson1VoiceConnector(data.VoiceConnector, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateVoiceConnectorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVoiceConnectorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateVoiceConnectorGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVoiceConnectorGroupCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateVoiceConnectorGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.VoiceConnectorGroup != null) {
    contents.VoiceConnectorGroup = deserializeAws_restJson1VoiceConnectorGroup(data.VoiceConnectorGroup, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateVoiceConnectorGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVoiceConnectorGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chime#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ValidateE911AddressCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ValidateE911AddressCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1ValidateE911AddressCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Address != null) {
    contents.Address = deserializeAws_restJson1Address(data.Address, context);
  }
  if (data.AddressExternalId != null) {
    contents.AddressExternalId = __expectString(data.AddressExternalId);
  }
  if (data.CandidateAddressList != null) {
    contents.CandidateAddressList = deserializeAws_restJson1CandidateAddressList(data.CandidateAddressList, context);
  }
  if (data.ValidationResult != null) {
    contents.ValidationResult = __expectInt32(data.ValidationResult);
  }
  return contents;
};

const deserializeAws_restJson1ValidateE911AddressCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ValidateE911AddressCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

const map = __map;
const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Code != null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1BadRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Code != null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new BadRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Code != null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ForbiddenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ForbiddenException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Code != null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ForbiddenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1NotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Code != null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new NotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ResourceLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceLimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Code != null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ResourceLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ServiceFailureExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceFailureException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Code != null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ServiceFailureException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ServiceUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Code != null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ServiceUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ThrottledClientExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottledClientException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Code != null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ThrottledClientException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1UnauthorizedClientExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnauthorizedClientException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Code != null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new UnauthorizedClientException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1UnprocessableEntityExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnprocessableEntityException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Code != null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new UnprocessableEntityException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const serializeAws_restJson1AccountSettings = (input: AccountSettings, context: __SerdeContext): any => {
  return {
    ...(input.DisableRemoteControl != null && { DisableRemoteControl: input.DisableRemoteControl }),
    ...(input.EnableDialOut != null && { EnableDialOut: input.EnableDialOut }),
  };
};

const serializeAws_restJson1AlexaForBusinessMetadata = (
  input: AlexaForBusinessMetadata,
  context: __SerdeContext
): any => {
  return {
    ...(input.AlexaForBusinessRoomArn != null && { AlexaForBusinessRoomArn: input.AlexaForBusinessRoomArn }),
    ...(input.IsAlexaForBusinessEnabled != null && { IsAlexaForBusinessEnabled: input.IsAlexaForBusinessEnabled }),
  };
};

const serializeAws_restJson1AppInstanceRetentionSettings = (
  input: AppInstanceRetentionSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.ChannelRetentionSettings != null && {
      ChannelRetentionSettings: serializeAws_restJson1ChannelRetentionSettings(input.ChannelRetentionSettings, context),
    }),
  };
};

const serializeAws_restJson1AppInstanceStreamingConfiguration = (
  input: AppInstanceStreamingConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.AppInstanceDataType != null && { AppInstanceDataType: input.AppInstanceDataType }),
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_restJson1AppInstanceStreamingConfigurationList = (
  input: AppInstanceStreamingConfiguration[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AppInstanceStreamingConfiguration(entry, context);
    });
};

const serializeAws_restJson1ArtifactsConfiguration = (input: ArtifactsConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Audio != null && { Audio: serializeAws_restJson1AudioArtifactsConfiguration(input.Audio, context) }),
    ...(input.Content != null && {
      Content: serializeAws_restJson1ContentArtifactsConfiguration(input.Content, context),
    }),
    ...(input.Video != null && { Video: serializeAws_restJson1VideoArtifactsConfiguration(input.Video, context) }),
  };
};

const serializeAws_restJson1AttendeeIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1AttendeeTagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1AttendeeTagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Tag(entry, context);
    });
};

const serializeAws_restJson1AudioArtifactsConfiguration = (
  input: AudioArtifactsConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.MuxType != null && { MuxType: input.MuxType }),
  };
};

const serializeAws_restJson1BusinessCallingSettings = (
  input: BusinessCallingSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.CdrBucket != null && { CdrBucket: input.CdrBucket }),
  };
};

const serializeAws_restJson1CallingRegionList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1CapabilityList = (input: (Capability | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1ChannelRetentionSettings = (
  input: ChannelRetentionSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.RetentionDays != null && { RetentionDays: input.RetentionDays }),
  };
};

const serializeAws_restJson1ChimeSdkMeetingConfiguration = (
  input: ChimeSdkMeetingConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.ArtifactsConfiguration != null && {
      ArtifactsConfiguration: serializeAws_restJson1ArtifactsConfiguration(input.ArtifactsConfiguration, context),
    }),
    ...(input.SourceConfiguration != null && {
      SourceConfiguration: serializeAws_restJson1SourceConfiguration(input.SourceConfiguration, context),
    }),
  };
};

const serializeAws_restJson1ContentArtifactsConfiguration = (
  input: ContentArtifactsConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.MuxType != null && { MuxType: input.MuxType }),
    ...(input.State != null && { State: input.State }),
  };
};

const serializeAws_restJson1ConversationRetentionSettings = (
  input: ConversationRetentionSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.RetentionDays != null && { RetentionDays: input.RetentionDays }),
  };
};

const serializeAws_restJson1CountryList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1CreateAttendeeRequestItem = (
  input: CreateAttendeeRequestItem,
  context: __SerdeContext
): any => {
  return {
    ...(input.ExternalUserId != null && { ExternalUserId: input.ExternalUserId }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1AttendeeTagList(input.Tags, context) }),
  };
};

const serializeAws_restJson1CreateAttendeeRequestItemList = (
  input: CreateAttendeeRequestItem[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1CreateAttendeeRequestItem(entry, context);
    });
};

const serializeAws_restJson1CreateMeetingWithAttendeesRequestItemList = (
  input: CreateAttendeeRequestItem[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1CreateAttendeeRequestItem(entry, context);
    });
};

const serializeAws_restJson1Credential = (input: Credential, context: __SerdeContext): any => {
  return {
    ...(input.Password != null && { Password: input.Password }),
    ...(input.Username != null && { Username: input.Username }),
  };
};

const serializeAws_restJson1CredentialList = (input: Credential[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Credential(entry, context);
    });
};

const serializeAws_restJson1DNISEmergencyCallingConfiguration = (
  input: DNISEmergencyCallingConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.CallingCountry != null && { CallingCountry: input.CallingCountry }),
    ...(input.EmergencyPhoneNumber != null && { EmergencyPhoneNumber: input.EmergencyPhoneNumber }),
    ...(input.TestPhoneNumber != null && { TestPhoneNumber: input.TestPhoneNumber }),
  };
};

const serializeAws_restJson1DNISEmergencyCallingConfigurationList = (
  input: DNISEmergencyCallingConfiguration[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1DNISEmergencyCallingConfiguration(entry, context);
    });
};

const serializeAws_restJson1E164PhoneNumberList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1EmergencyCallingConfiguration = (
  input: EmergencyCallingConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.DNIS != null && {
      DNIS: serializeAws_restJson1DNISEmergencyCallingConfigurationList(input.DNIS, context),
    }),
  };
};

const serializeAws_restJson1EngineTranscribeMedicalSettings = (
  input: EngineTranscribeMedicalSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.ContentIdentificationType != null && { ContentIdentificationType: input.ContentIdentificationType }),
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
    ...(input.Region != null && { Region: input.Region }),
    ...(input.Specialty != null && { Specialty: input.Specialty }),
    ...(input.Type != null && { Type: input.Type }),
    ...(input.VocabularyName != null && { VocabularyName: input.VocabularyName }),
  };
};

const serializeAws_restJson1EngineTranscribeSettings = (
  input: EngineTranscribeSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.ContentIdentificationType != null && { ContentIdentificationType: input.ContentIdentificationType }),
    ...(input.ContentRedactionType != null && { ContentRedactionType: input.ContentRedactionType }),
    ...(input.EnablePartialResultsStabilization != null && {
      EnablePartialResultsStabilization: input.EnablePartialResultsStabilization,
    }),
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
    ...(input.LanguageModelName != null && { LanguageModelName: input.LanguageModelName }),
    ...(input.PartialResultsStability != null && { PartialResultsStability: input.PartialResultsStability }),
    ...(input.PiiEntityTypes != null && { PiiEntityTypes: input.PiiEntityTypes }),
    ...(input.Region != null && { Region: input.Region }),
    ...(input.VocabularyFilterMethod != null && { VocabularyFilterMethod: input.VocabularyFilterMethod }),
    ...(input.VocabularyFilterName != null && { VocabularyFilterName: input.VocabularyFilterName }),
    ...(input.VocabularyName != null && { VocabularyName: input.VocabularyName }),
  };
};

const serializeAws_restJson1ExternalUserIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1GeoMatchParams = (input: GeoMatchParams, context: __SerdeContext): any => {
  return {
    ...(input.AreaCode != null && { AreaCode: input.AreaCode }),
    ...(input.Country != null && { Country: input.Country }),
  };
};

const serializeAws_restJson1LoggingConfiguration = (input: LoggingConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.EnableMediaMetricLogs != null && { EnableMediaMetricLogs: input.EnableMediaMetricLogs }),
    ...(input.EnableSIPLogs != null && { EnableSIPLogs: input.EnableSIPLogs }),
  };
};

const serializeAws_restJson1MeetingNotificationConfiguration = (
  input: MeetingNotificationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.SnsTopicArn != null && { SnsTopicArn: input.SnsTopicArn }),
    ...(input.SqsQueueArn != null && { SqsQueueArn: input.SqsQueueArn }),
  };
};

const serializeAws_restJson1MeetingTagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1MeetingTagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Tag(entry, context);
    });
};

const serializeAws_restJson1MemberArns = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1MembershipItem = (input: MembershipItem, context: __SerdeContext): any => {
  return {
    ...(input.MemberId != null && { MemberId: input.MemberId }),
    ...(input.Role != null && { Role: input.Role }),
  };
};

const serializeAws_restJson1MembershipItemList = (input: MembershipItem[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1MembershipItem(entry, context);
    });
};

const serializeAws_restJson1NonEmptyStringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1Origination = (input: Origination, context: __SerdeContext): any => {
  return {
    ...(input.Disabled != null && { Disabled: input.Disabled }),
    ...(input.Routes != null && { Routes: serializeAws_restJson1OriginationRouteList(input.Routes, context) }),
  };
};

const serializeAws_restJson1OriginationRoute = (input: OriginationRoute, context: __SerdeContext): any => {
  return {
    ...(input.Host != null && { Host: input.Host }),
    ...(input.Port != null && { Port: input.Port }),
    ...(input.Priority != null && { Priority: input.Priority }),
    ...(input.Protocol != null && { Protocol: input.Protocol }),
    ...(input.Weight != null && { Weight: input.Weight }),
  };
};

const serializeAws_restJson1OriginationRouteList = (input: OriginationRoute[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1OriginationRoute(entry, context);
    });
};

const serializeAws_restJson1ParticipantPhoneNumberList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1RetentionSettings = (input: RetentionSettings, context: __SerdeContext): any => {
  return {
    ...(input.ConversationRetentionSettings != null && {
      ConversationRetentionSettings: serializeAws_restJson1ConversationRetentionSettings(
        input.ConversationRetentionSettings,
        context
      ),
    }),
    ...(input.RoomRetentionSettings != null && {
      RoomRetentionSettings: serializeAws_restJson1RoomRetentionSettings(input.RoomRetentionSettings, context),
    }),
  };
};

const serializeAws_restJson1RoomRetentionSettings = (input: RoomRetentionSettings, context: __SerdeContext): any => {
  return {
    ...(input.RetentionDays != null && { RetentionDays: input.RetentionDays }),
  };
};

const serializeAws_restJson1SelectedVideoStreams = (input: SelectedVideoStreams, context: __SerdeContext): any => {
  return {
    ...(input.AttendeeIds != null && { AttendeeIds: serializeAws_restJson1AttendeeIdList(input.AttendeeIds, context) }),
    ...(input.ExternalUserIds != null && {
      ExternalUserIds: serializeAws_restJson1ExternalUserIdList(input.ExternalUserIds, context),
    }),
  };
};

const serializeAws_restJson1SensitiveStringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1SigninDelegateGroup = (input: SigninDelegateGroup, context: __SerdeContext): any => {
  return {
    ...(input.GroupName != null && { GroupName: input.GroupName }),
  };
};

const serializeAws_restJson1SigninDelegateGroupList = (input: SigninDelegateGroup[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1SigninDelegateGroup(entry, context);
    });
};

const serializeAws_restJson1SipHeadersMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1SipMediaApplicationEndpoint = (
  input: SipMediaApplicationEndpoint,
  context: __SerdeContext
): any => {
  return {
    ...(input.LambdaArn != null && { LambdaArn: input.LambdaArn }),
  };
};

const serializeAws_restJson1SipMediaApplicationEndpointList = (
  input: SipMediaApplicationEndpoint[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1SipMediaApplicationEndpoint(entry, context);
    });
};

const serializeAws_restJson1SipMediaApplicationLoggingConfiguration = (
  input: SipMediaApplicationLoggingConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.EnableSipMediaApplicationMessageLogs != null && {
      EnableSipMediaApplicationMessageLogs: input.EnableSipMediaApplicationMessageLogs,
    }),
  };
};

const serializeAws_restJson1SipRuleTargetApplication = (
  input: SipRuleTargetApplication,
  context: __SerdeContext
): any => {
  return {
    ...(input.AwsRegion != null && { AwsRegion: input.AwsRegion }),
    ...(input.Priority != null && { Priority: input.Priority }),
    ...(input.SipMediaApplicationId != null && { SipMediaApplicationId: input.SipMediaApplicationId }),
  };
};

const serializeAws_restJson1SipRuleTargetApplicationList = (
  input: SipRuleTargetApplication[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1SipRuleTargetApplication(entry, context);
    });
};

const serializeAws_restJson1SMAUpdateCallArgumentsMap = (
  input: Record<string, string>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1SourceConfiguration = (input: SourceConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.SelectedVideoStreams != null && {
      SelectedVideoStreams: serializeAws_restJson1SelectedVideoStreams(input.SelectedVideoStreams, context),
    }),
  };
};

const serializeAws_restJson1StreamingConfiguration = (input: StreamingConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.DataRetentionInHours != null && { DataRetentionInHours: input.DataRetentionInHours }),
    ...(input.Disabled != null && { Disabled: input.Disabled }),
    ...(input.StreamingNotificationTargets != null && {
      StreamingNotificationTargets: serializeAws_restJson1StreamingNotificationTargetList(
        input.StreamingNotificationTargets,
        context
      ),
    }),
  };
};

const serializeAws_restJson1StreamingNotificationTarget = (
  input: StreamingNotificationTarget,
  context: __SerdeContext
): any => {
  return {
    ...(input.NotificationTarget != null && { NotificationTarget: input.NotificationTarget }),
  };
};

const serializeAws_restJson1StreamingNotificationTargetList = (
  input: StreamingNotificationTarget[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1StreamingNotificationTarget(entry, context);
    });
};

const serializeAws_restJson1StringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_restJson1TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Tag(entry, context);
    });
};

const serializeAws_restJson1TelephonySettings = (input: TelephonySettings, context: __SerdeContext): any => {
  return {
    ...(input.InboundCalling != null && { InboundCalling: input.InboundCalling }),
    ...(input.OutboundCalling != null && { OutboundCalling: input.OutboundCalling }),
    ...(input.SMS != null && { SMS: input.SMS }),
  };
};

const serializeAws_restJson1Termination = (input: Termination, context: __SerdeContext): any => {
  return {
    ...(input.CallingRegions != null && {
      CallingRegions: serializeAws_restJson1CallingRegionList(input.CallingRegions, context),
    }),
    ...(input.CidrAllowedList != null && {
      CidrAllowedList: serializeAws_restJson1StringList(input.CidrAllowedList, context),
    }),
    ...(input.CpsLimit != null && { CpsLimit: input.CpsLimit }),
    ...(input.DefaultPhoneNumber != null && { DefaultPhoneNumber: input.DefaultPhoneNumber }),
    ...(input.Disabled != null && { Disabled: input.Disabled }),
  };
};

const serializeAws_restJson1TranscriptionConfiguration = (
  input: TranscriptionConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.EngineTranscribeMedicalSettings != null && {
      EngineTranscribeMedicalSettings: serializeAws_restJson1EngineTranscribeMedicalSettings(
        input.EngineTranscribeMedicalSettings,
        context
      ),
    }),
    ...(input.EngineTranscribeSettings != null && {
      EngineTranscribeSettings: serializeAws_restJson1EngineTranscribeSettings(input.EngineTranscribeSettings, context),
    }),
  };
};

const serializeAws_restJson1UpdatePhoneNumberRequestItem = (
  input: UpdatePhoneNumberRequestItem,
  context: __SerdeContext
): any => {
  return {
    ...(input.CallingName != null && { CallingName: input.CallingName }),
    ...(input.PhoneNumberId != null && { PhoneNumberId: input.PhoneNumberId }),
    ...(input.ProductType != null && { ProductType: input.ProductType }),
  };
};

const serializeAws_restJson1UpdatePhoneNumberRequestItemList = (
  input: UpdatePhoneNumberRequestItem[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1UpdatePhoneNumberRequestItem(entry, context);
    });
};

const serializeAws_restJson1UpdateUserRequestItem = (input: UpdateUserRequestItem, context: __SerdeContext): any => {
  return {
    ...(input.AlexaForBusinessMetadata != null && {
      AlexaForBusinessMetadata: serializeAws_restJson1AlexaForBusinessMetadata(input.AlexaForBusinessMetadata, context),
    }),
    ...(input.LicenseType != null && { LicenseType: input.LicenseType }),
    ...(input.UserId != null && { UserId: input.UserId }),
    ...(input.UserType != null && { UserType: input.UserType }),
  };
};

const serializeAws_restJson1UpdateUserRequestItemList = (
  input: UpdateUserRequestItem[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1UpdateUserRequestItem(entry, context);
    });
};

const serializeAws_restJson1UserEmailList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1UserIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1UserSettings = (input: UserSettings, context: __SerdeContext): any => {
  return {
    ...(input.Telephony != null && { Telephony: serializeAws_restJson1TelephonySettings(input.Telephony, context) }),
  };
};

const serializeAws_restJson1VideoArtifactsConfiguration = (
  input: VideoArtifactsConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.MuxType != null && { MuxType: input.MuxType }),
    ...(input.State != null && { State: input.State }),
  };
};

const serializeAws_restJson1VoiceConnectorItem = (input: VoiceConnectorItem, context: __SerdeContext): any => {
  return {
    ...(input.Priority != null && { Priority: input.Priority }),
    ...(input.VoiceConnectorId != null && { VoiceConnectorId: input.VoiceConnectorId }),
  };
};

const serializeAws_restJson1VoiceConnectorItemList = (input: VoiceConnectorItem[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1VoiceConnectorItem(entry, context);
    });
};

const serializeAws_restJson1VoiceConnectorSettings = (input: VoiceConnectorSettings, context: __SerdeContext): any => {
  return {
    ...(input.CdrBucket != null && { CdrBucket: input.CdrBucket }),
  };
};

const deserializeAws_restJson1Account = (output: any, context: __SerdeContext): Account => {
  return {
    AccountId: __expectString(output.AccountId),
    AccountStatus: __expectString(output.AccountStatus),
    AccountType: __expectString(output.AccountType),
    AwsAccountId: __expectString(output.AwsAccountId),
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.CreatedTimestamp))
        : undefined,
    DefaultLicense: __expectString(output.DefaultLicense),
    Name: __expectString(output.Name),
    SigninDelegateGroups:
      output.SigninDelegateGroups != null
        ? deserializeAws_restJson1SigninDelegateGroupList(output.SigninDelegateGroups, context)
        : undefined,
    SupportedLicenses:
      output.SupportedLicenses != null
        ? deserializeAws_restJson1LicenseList(output.SupportedLicenses, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AccountList = (output: any, context: __SerdeContext): Account[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Account(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AccountSettings = (output: any, context: __SerdeContext): AccountSettings => {
  return {
    DisableRemoteControl: __expectBoolean(output.DisableRemoteControl),
    EnableDialOut: __expectBoolean(output.EnableDialOut),
  } as any;
};

const deserializeAws_restJson1Address = (output: any, context: __SerdeContext): Address => {
  return {
    city: __expectString(output.city),
    country: __expectString(output.country),
    postDirectional: __expectString(output.postDirectional),
    postalCode: __expectString(output.postalCode),
    postalCodePlus4: __expectString(output.postalCodePlus4),
    preDirectional: __expectString(output.preDirectional),
    state: __expectString(output.state),
    streetName: __expectString(output.streetName),
    streetNumber: __expectString(output.streetNumber),
    streetSuffix: __expectString(output.streetSuffix),
  } as any;
};

const deserializeAws_restJson1AlexaForBusinessMetadata = (
  output: any,
  context: __SerdeContext
): AlexaForBusinessMetadata => {
  return {
    AlexaForBusinessRoomArn: __expectString(output.AlexaForBusinessRoomArn),
    IsAlexaForBusinessEnabled: __expectBoolean(output.IsAlexaForBusinessEnabled),
  } as any;
};

const deserializeAws_restJson1AppInstance = (output: any, context: __SerdeContext): AppInstance => {
  return {
    AppInstanceArn: __expectString(output.AppInstanceArn),
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
    LastUpdatedTimestamp:
      output.LastUpdatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTimestamp)))
        : undefined,
    Metadata: __expectString(output.Metadata),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_restJson1AppInstanceAdmin = (output: any, context: __SerdeContext): AppInstanceAdmin => {
  return {
    Admin: output.Admin != null ? deserializeAws_restJson1Identity(output.Admin, context) : undefined,
    AppInstanceArn: __expectString(output.AppInstanceArn),
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
  } as any;
};

const deserializeAws_restJson1AppInstanceAdminList = (
  output: any,
  context: __SerdeContext
): AppInstanceAdminSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AppInstanceAdminSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AppInstanceAdminSummary = (
  output: any,
  context: __SerdeContext
): AppInstanceAdminSummary => {
  return {
    Admin: output.Admin != null ? deserializeAws_restJson1Identity(output.Admin, context) : undefined,
  } as any;
};

const deserializeAws_restJson1AppInstanceList = (output: any, context: __SerdeContext): AppInstanceSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AppInstanceSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AppInstanceRetentionSettings = (
  output: any,
  context: __SerdeContext
): AppInstanceRetentionSettings => {
  return {
    ChannelRetentionSettings:
      output.ChannelRetentionSettings != null
        ? deserializeAws_restJson1ChannelRetentionSettings(output.ChannelRetentionSettings, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AppInstanceStreamingConfiguration = (
  output: any,
  context: __SerdeContext
): AppInstanceStreamingConfiguration => {
  return {
    AppInstanceDataType: __expectString(output.AppInstanceDataType),
    ResourceArn: __expectString(output.ResourceArn),
  } as any;
};

const deserializeAws_restJson1AppInstanceStreamingConfigurationList = (
  output: any,
  context: __SerdeContext
): AppInstanceStreamingConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AppInstanceStreamingConfiguration(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AppInstanceSummary = (output: any, context: __SerdeContext): AppInstanceSummary => {
  return {
    AppInstanceArn: __expectString(output.AppInstanceArn),
    Metadata: __expectString(output.Metadata),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_restJson1AppInstanceUser = (output: any, context: __SerdeContext): AppInstanceUser => {
  return {
    AppInstanceUserArn: __expectString(output.AppInstanceUserArn),
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
    LastUpdatedTimestamp:
      output.LastUpdatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTimestamp)))
        : undefined,
    Metadata: __expectString(output.Metadata),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_restJson1AppInstanceUserList = (
  output: any,
  context: __SerdeContext
): AppInstanceUserSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AppInstanceUserSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AppInstanceUserMembershipSummary = (
  output: any,
  context: __SerdeContext
): AppInstanceUserMembershipSummary => {
  return {
    ReadMarkerTimestamp:
      output.ReadMarkerTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ReadMarkerTimestamp)))
        : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1AppInstanceUserSummary = (
  output: any,
  context: __SerdeContext
): AppInstanceUserSummary => {
  return {
    AppInstanceUserArn: __expectString(output.AppInstanceUserArn),
    Metadata: __expectString(output.Metadata),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_restJson1ArtifactsConfiguration = (
  output: any,
  context: __SerdeContext
): ArtifactsConfiguration => {
  return {
    Audio:
      output.Audio != null ? deserializeAws_restJson1AudioArtifactsConfiguration(output.Audio, context) : undefined,
    Content:
      output.Content != null
        ? deserializeAws_restJson1ContentArtifactsConfiguration(output.Content, context)
        : undefined,
    Video:
      output.Video != null ? deserializeAws_restJson1VideoArtifactsConfiguration(output.Video, context) : undefined,
  } as any;
};

const deserializeAws_restJson1Attendee = (output: any, context: __SerdeContext): Attendee => {
  return {
    AttendeeId: __expectString(output.AttendeeId),
    ExternalUserId: __expectString(output.ExternalUserId),
    JoinToken: __expectString(output.JoinToken),
  } as any;
};

const deserializeAws_restJson1AttendeeIdList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1AttendeeList = (output: any, context: __SerdeContext): Attendee[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Attendee(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AudioArtifactsConfiguration = (
  output: any,
  context: __SerdeContext
): AudioArtifactsConfiguration => {
  return {
    MuxType: __expectString(output.MuxType),
  } as any;
};

const deserializeAws_restJson1BatchChannelMemberships = (
  output: any,
  context: __SerdeContext
): BatchChannelMemberships => {
  return {
    ChannelArn: __expectString(output.ChannelArn),
    InvitedBy: output.InvitedBy != null ? deserializeAws_restJson1Identity(output.InvitedBy, context) : undefined,
    Members: output.Members != null ? deserializeAws_restJson1Members(output.Members, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1BatchCreateAttendeeErrorList = (
  output: any,
  context: __SerdeContext
): CreateAttendeeError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CreateAttendeeError(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1BatchCreateChannelMembershipError = (
  output: any,
  context: __SerdeContext
): BatchCreateChannelMembershipError => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
    MemberArn: __expectString(output.MemberArn),
  } as any;
};

const deserializeAws_restJson1BatchCreateChannelMembershipErrors = (
  output: any,
  context: __SerdeContext
): BatchCreateChannelMembershipError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BatchCreateChannelMembershipError(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Bot = (output: any, context: __SerdeContext): Bot => {
  return {
    BotEmail: __expectString(output.BotEmail),
    BotId: __expectString(output.BotId),
    BotType: __expectString(output.BotType),
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.CreatedTimestamp))
        : undefined,
    Disabled: __expectBoolean(output.Disabled),
    DisplayName: __expectString(output.DisplayName),
    SecurityToken: __expectString(output.SecurityToken),
    UpdatedTimestamp:
      output.UpdatedTimestamp != null
        ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.UpdatedTimestamp))
        : undefined,
    UserId: __expectString(output.UserId),
  } as any;
};

const deserializeAws_restJson1BotList = (output: any, context: __SerdeContext): Bot[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Bot(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1BusinessCallingSettings = (
  output: any,
  context: __SerdeContext
): BusinessCallingSettings => {
  return {
    CdrBucket: __expectString(output.CdrBucket),
  } as any;
};

const deserializeAws_restJson1CallingRegionList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1CandidateAddress = (output: any, context: __SerdeContext): CandidateAddress => {
  return {
    city: __expectString(output.city),
    country: __expectString(output.country),
    postalCode: __expectString(output.postalCode),
    postalCodePlus4: __expectString(output.postalCodePlus4),
    state: __expectString(output.state),
    streetInfo: __expectString(output.streetInfo),
    streetNumber: __expectString(output.streetNumber),
  } as any;
};

const deserializeAws_restJson1CandidateAddressList = (output: any, context: __SerdeContext): CandidateAddress[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CandidateAddress(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1CapabilityList = (output: any, context: __SerdeContext): (Capability | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1Channel = (output: any, context: __SerdeContext): Channel => {
  return {
    ChannelArn: __expectString(output.ChannelArn),
    CreatedBy: output.CreatedBy != null ? deserializeAws_restJson1Identity(output.CreatedBy, context) : undefined,
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
    LastMessageTimestamp:
      output.LastMessageTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastMessageTimestamp)))
        : undefined,
    LastUpdatedTimestamp:
      output.LastUpdatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTimestamp)))
        : undefined,
    Metadata: __expectString(output.Metadata),
    Mode: __expectString(output.Mode),
    Name: __expectString(output.Name),
    Privacy: __expectString(output.Privacy),
  } as any;
};

const deserializeAws_restJson1ChannelBan = (output: any, context: __SerdeContext): ChannelBan => {
  return {
    ChannelArn: __expectString(output.ChannelArn),
    CreatedBy: output.CreatedBy != null ? deserializeAws_restJson1Identity(output.CreatedBy, context) : undefined,
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
    Member: output.Member != null ? deserializeAws_restJson1Identity(output.Member, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ChannelBanSummary = (output: any, context: __SerdeContext): ChannelBanSummary => {
  return {
    Member: output.Member != null ? deserializeAws_restJson1Identity(output.Member, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ChannelBanSummaryList = (output: any, context: __SerdeContext): ChannelBanSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ChannelBanSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ChannelMembership = (output: any, context: __SerdeContext): ChannelMembership => {
  return {
    ChannelArn: __expectString(output.ChannelArn),
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
    InvitedBy: output.InvitedBy != null ? deserializeAws_restJson1Identity(output.InvitedBy, context) : undefined,
    LastUpdatedTimestamp:
      output.LastUpdatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTimestamp)))
        : undefined,
    Member: output.Member != null ? deserializeAws_restJson1Identity(output.Member, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1ChannelMembershipForAppInstanceUserSummary = (
  output: any,
  context: __SerdeContext
): ChannelMembershipForAppInstanceUserSummary => {
  return {
    AppInstanceUserMembershipSummary:
      output.AppInstanceUserMembershipSummary != null
        ? deserializeAws_restJson1AppInstanceUserMembershipSummary(output.AppInstanceUserMembershipSummary, context)
        : undefined,
    ChannelSummary:
      output.ChannelSummary != null
        ? deserializeAws_restJson1ChannelSummary(output.ChannelSummary, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ChannelMembershipForAppInstanceUserSummaryList = (
  output: any,
  context: __SerdeContext
): ChannelMembershipForAppInstanceUserSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ChannelMembershipForAppInstanceUserSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ChannelMembershipSummary = (
  output: any,
  context: __SerdeContext
): ChannelMembershipSummary => {
  return {
    Member: output.Member != null ? deserializeAws_restJson1Identity(output.Member, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ChannelMembershipSummaryList = (
  output: any,
  context: __SerdeContext
): ChannelMembershipSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ChannelMembershipSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ChannelMessage = (output: any, context: __SerdeContext): ChannelMessage => {
  return {
    ChannelArn: __expectString(output.ChannelArn),
    Content: __expectString(output.Content),
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
    LastEditedTimestamp:
      output.LastEditedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastEditedTimestamp)))
        : undefined,
    LastUpdatedTimestamp:
      output.LastUpdatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTimestamp)))
        : undefined,
    MessageId: __expectString(output.MessageId),
    Metadata: __expectString(output.Metadata),
    Persistence: __expectString(output.Persistence),
    Redacted: __expectBoolean(output.Redacted),
    Sender: output.Sender != null ? deserializeAws_restJson1Identity(output.Sender, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1ChannelMessageSummary = (output: any, context: __SerdeContext): ChannelMessageSummary => {
  return {
    Content: __expectString(output.Content),
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
    LastEditedTimestamp:
      output.LastEditedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastEditedTimestamp)))
        : undefined,
    LastUpdatedTimestamp:
      output.LastUpdatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTimestamp)))
        : undefined,
    MessageId: __expectString(output.MessageId),
    Metadata: __expectString(output.Metadata),
    Redacted: __expectBoolean(output.Redacted),
    Sender: output.Sender != null ? deserializeAws_restJson1Identity(output.Sender, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1ChannelMessageSummaryList = (
  output: any,
  context: __SerdeContext
): ChannelMessageSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ChannelMessageSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ChannelModeratedByAppInstanceUserSummary = (
  output: any,
  context: __SerdeContext
): ChannelModeratedByAppInstanceUserSummary => {
  return {
    ChannelSummary:
      output.ChannelSummary != null
        ? deserializeAws_restJson1ChannelSummary(output.ChannelSummary, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ChannelModeratedByAppInstanceUserSummaryList = (
  output: any,
  context: __SerdeContext
): ChannelModeratedByAppInstanceUserSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ChannelModeratedByAppInstanceUserSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ChannelModerator = (output: any, context: __SerdeContext): ChannelModerator => {
  return {
    ChannelArn: __expectString(output.ChannelArn),
    CreatedBy: output.CreatedBy != null ? deserializeAws_restJson1Identity(output.CreatedBy, context) : undefined,
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
    Moderator: output.Moderator != null ? deserializeAws_restJson1Identity(output.Moderator, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ChannelModeratorSummary = (
  output: any,
  context: __SerdeContext
): ChannelModeratorSummary => {
  return {
    Moderator: output.Moderator != null ? deserializeAws_restJson1Identity(output.Moderator, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ChannelModeratorSummaryList = (
  output: any,
  context: __SerdeContext
): ChannelModeratorSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ChannelModeratorSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ChannelRetentionSettings = (
  output: any,
  context: __SerdeContext
): ChannelRetentionSettings => {
  return {
    RetentionDays: __expectInt32(output.RetentionDays),
  } as any;
};

const deserializeAws_restJson1ChannelSummary = (output: any, context: __SerdeContext): ChannelSummary => {
  return {
    ChannelArn: __expectString(output.ChannelArn),
    LastMessageTimestamp:
      output.LastMessageTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastMessageTimestamp)))
        : undefined,
    Metadata: __expectString(output.Metadata),
    Mode: __expectString(output.Mode),
    Name: __expectString(output.Name),
    Privacy: __expectString(output.Privacy),
  } as any;
};

const deserializeAws_restJson1ChannelSummaryList = (output: any, context: __SerdeContext): ChannelSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ChannelSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ChimeSdkMeetingConfiguration = (
  output: any,
  context: __SerdeContext
): ChimeSdkMeetingConfiguration => {
  return {
    ArtifactsConfiguration:
      output.ArtifactsConfiguration != null
        ? deserializeAws_restJson1ArtifactsConfiguration(output.ArtifactsConfiguration, context)
        : undefined,
    SourceConfiguration:
      output.SourceConfiguration != null
        ? deserializeAws_restJson1SourceConfiguration(output.SourceConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ContentArtifactsConfiguration = (
  output: any,
  context: __SerdeContext
): ContentArtifactsConfiguration => {
  return {
    MuxType: __expectString(output.MuxType),
    State: __expectString(output.State),
  } as any;
};

const deserializeAws_restJson1ConversationRetentionSettings = (
  output: any,
  context: __SerdeContext
): ConversationRetentionSettings => {
  return {
    RetentionDays: __expectInt32(output.RetentionDays),
  } as any;
};

const deserializeAws_restJson1CreateAttendeeError = (output: any, context: __SerdeContext): CreateAttendeeError => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
    ExternalUserId: __expectString(output.ExternalUserId),
  } as any;
};

const deserializeAws_restJson1DNISEmergencyCallingConfiguration = (
  output: any,
  context: __SerdeContext
): DNISEmergencyCallingConfiguration => {
  return {
    CallingCountry: __expectString(output.CallingCountry),
    EmergencyPhoneNumber: __expectString(output.EmergencyPhoneNumber),
    TestPhoneNumber: __expectString(output.TestPhoneNumber),
  } as any;
};

const deserializeAws_restJson1DNISEmergencyCallingConfigurationList = (
  output: any,
  context: __SerdeContext
): DNISEmergencyCallingConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DNISEmergencyCallingConfiguration(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1E164PhoneNumberList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1EmergencyCallingConfiguration = (
  output: any,
  context: __SerdeContext
): EmergencyCallingConfiguration => {
  return {
    DNIS:
      output.DNIS != null
        ? deserializeAws_restJson1DNISEmergencyCallingConfigurationList(output.DNIS, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1EventsConfiguration = (output: any, context: __SerdeContext): EventsConfiguration => {
  return {
    BotId: __expectString(output.BotId),
    LambdaFunctionArn: __expectString(output.LambdaFunctionArn),
    OutboundEventsHTTPSEndpoint: __expectString(output.OutboundEventsHTTPSEndpoint),
  } as any;
};

const deserializeAws_restJson1ExternalUserIdList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1GeoMatchParams = (output: any, context: __SerdeContext): GeoMatchParams => {
  return {
    AreaCode: __expectString(output.AreaCode),
    Country: __expectString(output.Country),
  } as any;
};

const deserializeAws_restJson1Identity = (output: any, context: __SerdeContext): Identity => {
  return {
    Arn: __expectString(output.Arn),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_restJson1Invite = (output: any, context: __SerdeContext): Invite => {
  return {
    EmailAddress: __expectString(output.EmailAddress),
    EmailStatus: __expectString(output.EmailStatus),
    InviteId: __expectString(output.InviteId),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1InviteList = (output: any, context: __SerdeContext): Invite[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Invite(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1LicenseList = (output: any, context: __SerdeContext): (License | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1LoggingConfiguration = (output: any, context: __SerdeContext): LoggingConfiguration => {
  return {
    EnableMediaMetricLogs: __expectBoolean(output.EnableMediaMetricLogs),
    EnableSIPLogs: __expectBoolean(output.EnableSIPLogs),
  } as any;
};

const deserializeAws_restJson1MediaCapturePipeline = (output: any, context: __SerdeContext): MediaCapturePipeline => {
  return {
    ChimeSdkMeetingConfiguration:
      output.ChimeSdkMeetingConfiguration != null
        ? deserializeAws_restJson1ChimeSdkMeetingConfiguration(output.ChimeSdkMeetingConfiguration, context)
        : undefined,
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.CreatedTimestamp))
        : undefined,
    MediaPipelineId: __expectString(output.MediaPipelineId),
    SinkArn: __expectString(output.SinkArn),
    SinkType: __expectString(output.SinkType),
    SourceArn: __expectString(output.SourceArn),
    SourceType: __expectString(output.SourceType),
    Status: __expectString(output.Status),
    UpdatedTimestamp:
      output.UpdatedTimestamp != null
        ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.UpdatedTimestamp))
        : undefined,
  } as any;
};

const deserializeAws_restJson1MediaCapturePipelineList = (
  output: any,
  context: __SerdeContext
): MediaCapturePipeline[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1MediaCapturePipeline(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1MediaPlacement = (output: any, context: __SerdeContext): MediaPlacement => {
  return {
    AudioFallbackUrl: __expectString(output.AudioFallbackUrl),
    AudioHostUrl: __expectString(output.AudioHostUrl),
    EventIngestionUrl: __expectString(output.EventIngestionUrl),
    ScreenDataUrl: __expectString(output.ScreenDataUrl),
    ScreenSharingUrl: __expectString(output.ScreenSharingUrl),
    ScreenViewingUrl: __expectString(output.ScreenViewingUrl),
    SignalingUrl: __expectString(output.SignalingUrl),
    TurnControlUrl: __expectString(output.TurnControlUrl),
  } as any;
};

const deserializeAws_restJson1Meeting = (output: any, context: __SerdeContext): Meeting => {
  return {
    ExternalMeetingId: __expectString(output.ExternalMeetingId),
    MediaPlacement:
      output.MediaPlacement != null
        ? deserializeAws_restJson1MediaPlacement(output.MediaPlacement, context)
        : undefined,
    MediaRegion: __expectString(output.MediaRegion),
    MeetingId: __expectString(output.MeetingId),
  } as any;
};

const deserializeAws_restJson1MeetingList = (output: any, context: __SerdeContext): Meeting[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Meeting(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Member = (output: any, context: __SerdeContext): Member => {
  return {
    AccountId: __expectString(output.AccountId),
    Email: __expectString(output.Email),
    FullName: __expectString(output.FullName),
    MemberId: __expectString(output.MemberId),
    MemberType: __expectString(output.MemberType),
  } as any;
};

const deserializeAws_restJson1MemberError = (output: any, context: __SerdeContext): MemberError => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
    MemberId: __expectString(output.MemberId),
  } as any;
};

const deserializeAws_restJson1MemberErrorList = (output: any, context: __SerdeContext): MemberError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1MemberError(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Members = (output: any, context: __SerdeContext): Identity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Identity(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1MessagingSessionEndpoint = (
  output: any,
  context: __SerdeContext
): MessagingSessionEndpoint => {
  return {
    Url: __expectString(output.Url),
  } as any;
};

const deserializeAws_restJson1OrderedPhoneNumber = (output: any, context: __SerdeContext): OrderedPhoneNumber => {
  return {
    E164PhoneNumber: __expectString(output.E164PhoneNumber),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1OrderedPhoneNumberList = (output: any, context: __SerdeContext): OrderedPhoneNumber[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1OrderedPhoneNumber(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Origination = (output: any, context: __SerdeContext): Origination => {
  return {
    Disabled: __expectBoolean(output.Disabled),
    Routes: output.Routes != null ? deserializeAws_restJson1OriginationRouteList(output.Routes, context) : undefined,
  } as any;
};

const deserializeAws_restJson1OriginationRoute = (output: any, context: __SerdeContext): OriginationRoute => {
  return {
    Host: __expectString(output.Host),
    Port: __expectInt32(output.Port),
    Priority: __expectInt32(output.Priority),
    Protocol: __expectString(output.Protocol),
    Weight: __expectInt32(output.Weight),
  } as any;
};

const deserializeAws_restJson1OriginationRouteList = (output: any, context: __SerdeContext): OriginationRoute[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1OriginationRoute(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Participant = (output: any, context: __SerdeContext): Participant => {
  return {
    PhoneNumber: __expectString(output.PhoneNumber),
    ProxyPhoneNumber: __expectString(output.ProxyPhoneNumber),
  } as any;
};

const deserializeAws_restJson1Participants = (output: any, context: __SerdeContext): Participant[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Participant(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1PhoneNumber = (output: any, context: __SerdeContext): PhoneNumber => {
  return {
    Associations:
      output.Associations != null
        ? deserializeAws_restJson1PhoneNumberAssociationList(output.Associations, context)
        : undefined,
    CallingName: __expectString(output.CallingName),
    CallingNameStatus: __expectString(output.CallingNameStatus),
    Capabilities:
      output.Capabilities != null
        ? deserializeAws_restJson1PhoneNumberCapabilities(output.Capabilities, context)
        : undefined,
    Country: __expectString(output.Country),
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.CreatedTimestamp))
        : undefined,
    DeletionTimestamp:
      output.DeletionTimestamp != null
        ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.DeletionTimestamp))
        : undefined,
    E164PhoneNumber: __expectString(output.E164PhoneNumber),
    PhoneNumberId: __expectString(output.PhoneNumberId),
    ProductType: __expectString(output.ProductType),
    Status: __expectString(output.Status),
    Type: __expectString(output.Type),
    UpdatedTimestamp:
      output.UpdatedTimestamp != null
        ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.UpdatedTimestamp))
        : undefined,
  } as any;
};

const deserializeAws_restJson1PhoneNumberAssociation = (
  output: any,
  context: __SerdeContext
): PhoneNumberAssociation => {
  return {
    AssociatedTimestamp:
      output.AssociatedTimestamp != null
        ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.AssociatedTimestamp))
        : undefined,
    Name: __expectString(output.Name),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1PhoneNumberAssociationList = (
  output: any,
  context: __SerdeContext
): PhoneNumberAssociation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PhoneNumberAssociation(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1PhoneNumberCapabilities = (
  output: any,
  context: __SerdeContext
): PhoneNumberCapabilities => {
  return {
    InboundCall: __expectBoolean(output.InboundCall),
    InboundMMS: __expectBoolean(output.InboundMMS),
    InboundSMS: __expectBoolean(output.InboundSMS),
    OutboundCall: __expectBoolean(output.OutboundCall),
    OutboundMMS: __expectBoolean(output.OutboundMMS),
    OutboundSMS: __expectBoolean(output.OutboundSMS),
  } as any;
};

const deserializeAws_restJson1PhoneNumberCountriesList = (
  output: any,
  context: __SerdeContext
): PhoneNumberCountry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PhoneNumberCountry(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1PhoneNumberCountry = (output: any, context: __SerdeContext): PhoneNumberCountry => {
  return {
    CountryCode: __expectString(output.CountryCode),
    SupportedPhoneNumberTypes:
      output.SupportedPhoneNumberTypes != null
        ? deserializeAws_restJson1PhoneNumberTypeList(output.SupportedPhoneNumberTypes, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1PhoneNumberError = (output: any, context: __SerdeContext): PhoneNumberError => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
    PhoneNumberId: __expectString(output.PhoneNumberId),
  } as any;
};

const deserializeAws_restJson1PhoneNumberErrorList = (output: any, context: __SerdeContext): PhoneNumberError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PhoneNumberError(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1PhoneNumberList = (output: any, context: __SerdeContext): PhoneNumber[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PhoneNumber(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1PhoneNumberOrder = (output: any, context: __SerdeContext): PhoneNumberOrder => {
  return {
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.CreatedTimestamp))
        : undefined,
    OrderedPhoneNumbers:
      output.OrderedPhoneNumbers != null
        ? deserializeAws_restJson1OrderedPhoneNumberList(output.OrderedPhoneNumbers, context)
        : undefined,
    PhoneNumberOrderId: __expectString(output.PhoneNumberOrderId),
    ProductType: __expectString(output.ProductType),
    Status: __expectString(output.Status),
    UpdatedTimestamp:
      output.UpdatedTimestamp != null
        ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.UpdatedTimestamp))
        : undefined,
  } as any;
};

const deserializeAws_restJson1PhoneNumberOrderList = (output: any, context: __SerdeContext): PhoneNumberOrder[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PhoneNumberOrder(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1PhoneNumberTypeList = (
  output: any,
  context: __SerdeContext
): (PhoneNumberType | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1Proxy = (output: any, context: __SerdeContext): Proxy => {
  return {
    DefaultSessionExpiryMinutes: __expectInt32(output.DefaultSessionExpiryMinutes),
    Disabled: __expectBoolean(output.Disabled),
    FallBackPhoneNumber: __expectString(output.FallBackPhoneNumber),
    PhoneNumberCountries:
      output.PhoneNumberCountries != null
        ? deserializeAws_restJson1StringList(output.PhoneNumberCountries, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ProxySession = (output: any, context: __SerdeContext): ProxySession => {
  return {
    Capabilities:
      output.Capabilities != null ? deserializeAws_restJson1CapabilityList(output.Capabilities, context) : undefined,
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.CreatedTimestamp))
        : undefined,
    EndedTimestamp:
      output.EndedTimestamp != null
        ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.EndedTimestamp))
        : undefined,
    ExpiryMinutes: __expectInt32(output.ExpiryMinutes),
    GeoMatchLevel: __expectString(output.GeoMatchLevel),
    GeoMatchParams:
      output.GeoMatchParams != null
        ? deserializeAws_restJson1GeoMatchParams(output.GeoMatchParams, context)
        : undefined,
    Name: __expectString(output.Name),
    NumberSelectionBehavior: __expectString(output.NumberSelectionBehavior),
    Participants:
      output.Participants != null ? deserializeAws_restJson1Participants(output.Participants, context) : undefined,
    ProxySessionId: __expectString(output.ProxySessionId),
    Status: __expectString(output.Status),
    UpdatedTimestamp:
      output.UpdatedTimestamp != null
        ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.UpdatedTimestamp))
        : undefined,
    VoiceConnectorId: __expectString(output.VoiceConnectorId),
  } as any;
};

const deserializeAws_restJson1ProxySessions = (output: any, context: __SerdeContext): ProxySession[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ProxySession(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1RetentionSettings = (output: any, context: __SerdeContext): RetentionSettings => {
  return {
    ConversationRetentionSettings:
      output.ConversationRetentionSettings != null
        ? deserializeAws_restJson1ConversationRetentionSettings(output.ConversationRetentionSettings, context)
        : undefined,
    RoomRetentionSettings:
      output.RoomRetentionSettings != null
        ? deserializeAws_restJson1RoomRetentionSettings(output.RoomRetentionSettings, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Room = (output: any, context: __SerdeContext): Room => {
  return {
    AccountId: __expectString(output.AccountId),
    CreatedBy: __expectString(output.CreatedBy),
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.CreatedTimestamp))
        : undefined,
    Name: __expectString(output.Name),
    RoomId: __expectString(output.RoomId),
    UpdatedTimestamp:
      output.UpdatedTimestamp != null
        ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.UpdatedTimestamp))
        : undefined,
  } as any;
};

const deserializeAws_restJson1RoomList = (output: any, context: __SerdeContext): Room[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Room(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1RoomMembership = (output: any, context: __SerdeContext): RoomMembership => {
  return {
    InvitedBy: __expectString(output.InvitedBy),
    Member: output.Member != null ? deserializeAws_restJson1Member(output.Member, context) : undefined,
    Role: __expectString(output.Role),
    RoomId: __expectString(output.RoomId),
    UpdatedTimestamp:
      output.UpdatedTimestamp != null
        ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.UpdatedTimestamp))
        : undefined,
  } as any;
};

const deserializeAws_restJson1RoomMembershipList = (output: any, context: __SerdeContext): RoomMembership[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RoomMembership(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1RoomRetentionSettings = (output: any, context: __SerdeContext): RoomRetentionSettings => {
  return {
    RetentionDays: __expectInt32(output.RetentionDays),
  } as any;
};

const deserializeAws_restJson1SelectedVideoStreams = (output: any, context: __SerdeContext): SelectedVideoStreams => {
  return {
    AttendeeIds:
      output.AttendeeIds != null ? deserializeAws_restJson1AttendeeIdList(output.AttendeeIds, context) : undefined,
    ExternalUserIds:
      output.ExternalUserIds != null
        ? deserializeAws_restJson1ExternalUserIdList(output.ExternalUserIds, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SensitiveStringList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1SigninDelegateGroup = (output: any, context: __SerdeContext): SigninDelegateGroup => {
  return {
    GroupName: __expectString(output.GroupName),
  } as any;
};

const deserializeAws_restJson1SigninDelegateGroupList = (
  output: any,
  context: __SerdeContext
): SigninDelegateGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SigninDelegateGroup(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1SipMediaApplication = (output: any, context: __SerdeContext): SipMediaApplication => {
  return {
    AwsRegion: __expectString(output.AwsRegion),
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.CreatedTimestamp))
        : undefined,
    Endpoints:
      output.Endpoints != null
        ? deserializeAws_restJson1SipMediaApplicationEndpointList(output.Endpoints, context)
        : undefined,
    Name: __expectString(output.Name),
    SipMediaApplicationId: __expectString(output.SipMediaApplicationId),
    UpdatedTimestamp:
      output.UpdatedTimestamp != null
        ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.UpdatedTimestamp))
        : undefined,
  } as any;
};

const deserializeAws_restJson1SipMediaApplicationCall = (
  output: any,
  context: __SerdeContext
): SipMediaApplicationCall => {
  return {
    TransactionId: __expectString(output.TransactionId),
  } as any;
};

const deserializeAws_restJson1SipMediaApplicationEndpoint = (
  output: any,
  context: __SerdeContext
): SipMediaApplicationEndpoint => {
  return {
    LambdaArn: __expectString(output.LambdaArn),
  } as any;
};

const deserializeAws_restJson1SipMediaApplicationEndpointList = (
  output: any,
  context: __SerdeContext
): SipMediaApplicationEndpoint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SipMediaApplicationEndpoint(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1SipMediaApplicationList = (
  output: any,
  context: __SerdeContext
): SipMediaApplication[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SipMediaApplication(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1SipMediaApplicationLoggingConfiguration = (
  output: any,
  context: __SerdeContext
): SipMediaApplicationLoggingConfiguration => {
  return {
    EnableSipMediaApplicationMessageLogs: __expectBoolean(output.EnableSipMediaApplicationMessageLogs),
  } as any;
};

const deserializeAws_restJson1SipRule = (output: any, context: __SerdeContext): SipRule => {
  return {
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.CreatedTimestamp))
        : undefined,
    Disabled: __expectBoolean(output.Disabled),
    Name: __expectString(output.Name),
    SipRuleId: __expectString(output.SipRuleId),
    TargetApplications:
      output.TargetApplications != null
        ? deserializeAws_restJson1SipRuleTargetApplicationList(output.TargetApplications, context)
        : undefined,
    TriggerType: __expectString(output.TriggerType),
    TriggerValue: __expectString(output.TriggerValue),
    UpdatedTimestamp:
      output.UpdatedTimestamp != null
        ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.UpdatedTimestamp))
        : undefined,
  } as any;
};

const deserializeAws_restJson1SipRuleList = (output: any, context: __SerdeContext): SipRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SipRule(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1SipRuleTargetApplication = (
  output: any,
  context: __SerdeContext
): SipRuleTargetApplication => {
  return {
    AwsRegion: __expectString(output.AwsRegion),
    Priority: __expectInt32(output.Priority),
    SipMediaApplicationId: __expectString(output.SipMediaApplicationId),
  } as any;
};

const deserializeAws_restJson1SipRuleTargetApplicationList = (
  output: any,
  context: __SerdeContext
): SipRuleTargetApplication[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SipRuleTargetApplication(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1SourceConfiguration = (output: any, context: __SerdeContext): SourceConfiguration => {
  return {
    SelectedVideoStreams:
      output.SelectedVideoStreams != null
        ? deserializeAws_restJson1SelectedVideoStreams(output.SelectedVideoStreams, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1StreamingConfiguration = (
  output: any,
  context: __SerdeContext
): StreamingConfiguration => {
  return {
    DataRetentionInHours: __expectInt32(output.DataRetentionInHours),
    Disabled: __expectBoolean(output.Disabled),
    StreamingNotificationTargets:
      output.StreamingNotificationTargets != null
        ? deserializeAws_restJson1StreamingNotificationTargetList(output.StreamingNotificationTargets, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1StreamingNotificationTarget = (
  output: any,
  context: __SerdeContext
): StreamingNotificationTarget => {
  return {
    NotificationTarget: __expectString(output.NotificationTarget),
  } as any;
};

const deserializeAws_restJson1StreamingNotificationTargetList = (
  output: any,
  context: __SerdeContext
): StreamingNotificationTarget[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1StreamingNotificationTarget(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1StringList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Tag(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1TelephonySettings = (output: any, context: __SerdeContext): TelephonySettings => {
  return {
    InboundCalling: __expectBoolean(output.InboundCalling),
    OutboundCalling: __expectBoolean(output.OutboundCalling),
    SMS: __expectBoolean(output.SMS),
  } as any;
};

const deserializeAws_restJson1Termination = (output: any, context: __SerdeContext): Termination => {
  return {
    CallingRegions:
      output.CallingRegions != null
        ? deserializeAws_restJson1CallingRegionList(output.CallingRegions, context)
        : undefined,
    CidrAllowedList:
      output.CidrAllowedList != null ? deserializeAws_restJson1StringList(output.CidrAllowedList, context) : undefined,
    CpsLimit: __expectInt32(output.CpsLimit),
    DefaultPhoneNumber: __expectString(output.DefaultPhoneNumber),
    Disabled: __expectBoolean(output.Disabled),
  } as any;
};

const deserializeAws_restJson1TerminationHealth = (output: any, context: __SerdeContext): TerminationHealth => {
  return {
    Source: __expectString(output.Source),
    Timestamp:
      output.Timestamp != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.Timestamp)) : undefined,
  } as any;
};

const deserializeAws_restJson1User = (output: any, context: __SerdeContext): User => {
  return {
    AccountId: __expectString(output.AccountId),
    AlexaForBusinessMetadata:
      output.AlexaForBusinessMetadata != null
        ? deserializeAws_restJson1AlexaForBusinessMetadata(output.AlexaForBusinessMetadata, context)
        : undefined,
    DisplayName: __expectString(output.DisplayName),
    InvitedOn:
      output.InvitedOn != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.InvitedOn)) : undefined,
    LicenseType: __expectString(output.LicenseType),
    PersonalPIN: __expectString(output.PersonalPIN),
    PrimaryEmail: __expectString(output.PrimaryEmail),
    PrimaryProvisionedNumber: __expectString(output.PrimaryProvisionedNumber),
    RegisteredOn:
      output.RegisteredOn != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.RegisteredOn)) : undefined,
    UserId: __expectString(output.UserId),
    UserInvitationStatus: __expectString(output.UserInvitationStatus),
    UserRegistrationStatus: __expectString(output.UserRegistrationStatus),
    UserType: __expectString(output.UserType),
  } as any;
};

const deserializeAws_restJson1UserError = (output: any, context: __SerdeContext): UserError => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
    UserId: __expectString(output.UserId),
  } as any;
};

const deserializeAws_restJson1UserErrorList = (output: any, context: __SerdeContext): UserError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1UserError(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1UserList = (output: any, context: __SerdeContext): User[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1User(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1UserSettings = (output: any, context: __SerdeContext): UserSettings => {
  return {
    Telephony:
      output.Telephony != null ? deserializeAws_restJson1TelephonySettings(output.Telephony, context) : undefined,
  } as any;
};

const deserializeAws_restJson1VideoArtifactsConfiguration = (
  output: any,
  context: __SerdeContext
): VideoArtifactsConfiguration => {
  return {
    MuxType: __expectString(output.MuxType),
    State: __expectString(output.State),
  } as any;
};

const deserializeAws_restJson1VoiceConnector = (output: any, context: __SerdeContext): VoiceConnector => {
  return {
    AwsRegion: __expectString(output.AwsRegion),
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.CreatedTimestamp))
        : undefined,
    Name: __expectString(output.Name),
    OutboundHostName: __expectString(output.OutboundHostName),
    RequireEncryption: __expectBoolean(output.RequireEncryption),
    UpdatedTimestamp:
      output.UpdatedTimestamp != null
        ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.UpdatedTimestamp))
        : undefined,
    VoiceConnectorArn: __expectString(output.VoiceConnectorArn),
    VoiceConnectorId: __expectString(output.VoiceConnectorId),
  } as any;
};

const deserializeAws_restJson1VoiceConnectorGroup = (output: any, context: __SerdeContext): VoiceConnectorGroup => {
  return {
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.CreatedTimestamp))
        : undefined,
    Name: __expectString(output.Name),
    UpdatedTimestamp:
      output.UpdatedTimestamp != null
        ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.UpdatedTimestamp))
        : undefined,
    VoiceConnectorGroupArn: __expectString(output.VoiceConnectorGroupArn),
    VoiceConnectorGroupId: __expectString(output.VoiceConnectorGroupId),
    VoiceConnectorItems:
      output.VoiceConnectorItems != null
        ? deserializeAws_restJson1VoiceConnectorItemList(output.VoiceConnectorItems, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1VoiceConnectorGroupList = (
  output: any,
  context: __SerdeContext
): VoiceConnectorGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1VoiceConnectorGroup(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1VoiceConnectorItem = (output: any, context: __SerdeContext): VoiceConnectorItem => {
  return {
    Priority: __expectInt32(output.Priority),
    VoiceConnectorId: __expectString(output.VoiceConnectorId),
  } as any;
};

const deserializeAws_restJson1VoiceConnectorItemList = (output: any, context: __SerdeContext): VoiceConnectorItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1VoiceConnectorItem(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1VoiceConnectorList = (output: any, context: __SerdeContext): VoiceConnector[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1VoiceConnector(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1VoiceConnectorSettings = (
  output: any,
  context: __SerdeContext
): VoiceConnectorSettings => {
  return {
    CdrBucket: __expectString(output.CdrBucket),
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
};

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string | number): string => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }
};
