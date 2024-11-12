// smithy-typescript generated code
import { SENSITIVE_STRING } from "@smithy/smithy-client";

import {
  Account,
  AccountSettings,
  Address,
  AddressFilterSensitiveLog,
  AlexaForBusinessMetadata,
  AlexaForBusinessMetadataFilterSensitiveLog,
  AppInstanceAdminSummary,
  AppInstanceAdminSummaryFilterSensitiveLog,
  AppInstanceRetentionSettings,
  AppInstanceStreamingConfiguration,
  AppInstanceStreamingConfigurationFilterSensitiveLog,
  AppInstanceSummary,
  AppInstanceSummaryFilterSensitiveLog,
  AppInstanceUserSummary,
  AppInstanceUserSummaryFilterSensitiveLog,
  Attendee,
  AttendeeFilterSensitiveLog,
  Bot,
  BotFilterSensitiveLog,
  BusinessCallingSettings,
  CandidateAddress,
  CandidateAddressFilterSensitiveLog,
  Capability,
  ChannelBanSummary,
  ChannelBanSummaryFilterSensitiveLog,
  ChannelMembershipForAppInstanceUserSummary,
  ChannelMembershipForAppInstanceUserSummaryFilterSensitiveLog,
  ChannelMembershipSummary,
  ChannelMembershipSummaryFilterSensitiveLog,
  ChannelMembershipType,
  ChannelMessagePersistenceType,
  ChannelMessageSummary,
  ChannelMessageSummaryFilterSensitiveLog,
  ChannelMessageType,
  ChannelMode,
  ChannelModeratedByAppInstanceUserSummary,
  ChannelModeratedByAppInstanceUserSummaryFilterSensitiveLog,
  ChannelModeratorSummary,
  ChannelModeratorSummaryFilterSensitiveLog,
  ChannelPrivacy,
  ChannelSummary,
  ChannelSummaryFilterSensitiveLog,
  ConversationRetentionSettings,
  Credential,
  CredentialFilterSensitiveLog,
  EmailStatus,
  EmergencyCallingConfiguration,
  EmergencyCallingConfigurationFilterSensitiveLog,
  EngineTranscribeMedicalSettings,
  EngineTranscribeSettings,
  EventsConfiguration,
  EventsConfigurationFilterSensitiveLog,
  InviteStatus,
  License,
  MediaCapturePipeline,
  MediaCapturePipelineFilterSensitiveLog,
  Meeting,
  MeetingFilterSensitiveLog,
  PhoneNumber,
  PhoneNumberAssociationName,
  PhoneNumberFilterSensitiveLog,
  PhoneNumberOrder,
  PhoneNumberProductType,
  PhoneNumberStatus,
  PhoneNumberType,
  ProxySession,
  ProxySessionFilterSensitiveLog,
  ProxySessionStatus,
  Room,
  RoomFilterSensitiveLog,
  RoomMembership,
  RoomMembershipFilterSensitiveLog,
  RoomMembershipRole,
  SipMediaApplication,
  SipMediaApplicationCall,
  SipMediaApplicationEndpoint,
  SipMediaApplicationEndpointFilterSensitiveLog,
  SipMediaApplicationFilterSensitiveLog,
  SipRule,
  SipRuleTargetApplication,
  Tag,
  TagFilterSensitiveLog,
  User,
  UserFilterSensitiveLog,
  UserType,
  VoiceConnector,
  VoiceConnectorGroup,
  VoiceConnectorItem,
  VoiceConnectorSettings,
} from "./models_0";

/**
 * <p>The retention settings that determine how long to retain chat-room messages for an Amazon Chime Enterprise account.</p>
 * @public
 */
export interface RoomRetentionSettings {
  /**
   * <p>The number of days for which to retain chat-room messages.</p>
   * @public
   */
  RetentionDays?: number | undefined;
}

/**
 * <p>The retention settings for an Amazon Chime Enterprise account that determine how long to retain items such as chat-room messages and chat-conversation messages.</p>
 * @public
 */
export interface RetentionSettings {
  /**
   * <p>The chat room retention settings.</p>
   * @public
   */
  RoomRetentionSettings?: RoomRetentionSettings | undefined;

  /**
   * <p>The chat conversation retention settings.</p>
   * @public
   */
  ConversationRetentionSettings?: ConversationRetentionSettings | undefined;
}

/**
 * @public
 */
export interface GetRetentionSettingsResponse {
  /**
   * <p>The retention settings.</p>
   * @public
   */
  RetentionSettings?: RetentionSettings | undefined;

  /**
   * <p>The timestamp representing the time at which the specified items are permanently deleted, in ISO 8601 format.</p>
   * @public
   */
  InitiateDeletionTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface GetRoomRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The room ID.</p>
   * @public
   */
  RoomId: string | undefined;
}

/**
 * @public
 */
export interface GetRoomResponse {
  /**
   * <p>The room details.</p>
   * @public
   */
  Room?: Room | undefined;
}

/**
 * @public
 */
export interface GetSipMediaApplicationRequest {
  /**
   * <p>The SIP media application ID.</p>
   * @public
   */
  SipMediaApplicationId: string | undefined;
}

/**
 * @public
 */
export interface GetSipMediaApplicationResponse {
  /**
   * <p>The SIP media application details.</p>
   * @public
   */
  SipMediaApplication?: SipMediaApplication | undefined;
}

/**
 * @public
 */
export interface GetSipMediaApplicationLoggingConfigurationRequest {
  /**
   * <p>The SIP media application ID.</p>
   * @public
   */
  SipMediaApplicationId: string | undefined;
}

/**
 * <p>Logging configuration of the SIP media application.</p>
 * @public
 */
export interface SipMediaApplicationLoggingConfiguration {
  /**
   * <p>Enables application message logs for the SIP media application.</p>
   * @public
   */
  EnableSipMediaApplicationMessageLogs?: boolean | undefined;
}

/**
 * @public
 */
export interface GetSipMediaApplicationLoggingConfigurationResponse {
  /**
   * <p>The actual logging configuration.</p>
   * @public
   */
  SipMediaApplicationLoggingConfiguration?: SipMediaApplicationLoggingConfiguration | undefined;
}

/**
 * @public
 */
export interface GetSipRuleRequest {
  /**
   * <p>The SIP rule ID.</p>
   * @public
   */
  SipRuleId: string | undefined;
}

/**
 * @public
 */
export interface GetSipRuleResponse {
  /**
   * <p>The SIP rule details.</p>
   * @public
   */
  SipRule?: SipRule | undefined;
}

/**
 * @public
 */
export interface GetUserRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The user ID.</p>
   * @public
   */
  UserId: string | undefined;
}

/**
 * @public
 */
export interface GetUserResponse {
  /**
   * <p>The user details.</p>
   * @public
   */
  User?: User | undefined;
}

/**
 * @public
 */
export interface GetUserSettingsRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The user ID.</p>
   * @public
   */
  UserId: string | undefined;
}

/**
 * <p>Settings that allow management of telephony permissions for an Amazon Chime user, such as
 *             inbound and outbound calling and text messaging.</p>
 * @public
 */
export interface TelephonySettings {
  /**
   * <p>Allows or denies inbound calling.</p>
   * @public
   */
  InboundCalling: boolean | undefined;

  /**
   * <p>Allows or denies outbound calling.</p>
   * @public
   */
  OutboundCalling: boolean | undefined;

  /**
   * <p>Allows or denies SMS messaging.</p>
   * @public
   */
  SMS: boolean | undefined;
}

/**
 * <p>Settings associated with an Amazon Chime user, including inbound and outbound calling and text
 *             messaging.</p>
 * @public
 */
export interface UserSettings {
  /**
   * <p>The telephony settings associated with the user.</p>
   * @public
   */
  Telephony: TelephonySettings | undefined;
}

/**
 * @public
 */
export interface GetUserSettingsResponse {
  /**
   * <p>The user settings.</p>
   * @public
   */
  UserSettings?: UserSettings | undefined;
}

/**
 * @public
 */
export interface GetVoiceConnectorRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   * @public
   */
  VoiceConnectorId: string | undefined;
}

/**
 * @public
 */
export interface GetVoiceConnectorResponse {
  /**
   * <p>The Amazon Chime Voice Connector details.</p>
   * @public
   */
  VoiceConnector?: VoiceConnector | undefined;
}

/**
 * @public
 */
export interface GetVoiceConnectorEmergencyCallingConfigurationRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   * @public
   */
  VoiceConnectorId: string | undefined;
}

/**
 * @public
 */
export interface GetVoiceConnectorEmergencyCallingConfigurationResponse {
  /**
   * <p>The emergency calling configuration details.</p>
   * @public
   */
  EmergencyCallingConfiguration?: EmergencyCallingConfiguration | undefined;
}

/**
 * @public
 */
export interface GetVoiceConnectorGroupRequest {
  /**
   * <p>The Amazon Chime Voice Connector group ID.</p>
   * @public
   */
  VoiceConnectorGroupId: string | undefined;
}

/**
 * @public
 */
export interface GetVoiceConnectorGroupResponse {
  /**
   * <p>The Amazon Chime Voice Connector group details.</p>
   * @public
   */
  VoiceConnectorGroup?: VoiceConnectorGroup | undefined;
}

/**
 * @public
 */
export interface GetVoiceConnectorLoggingConfigurationRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   * @public
   */
  VoiceConnectorId: string | undefined;
}

/**
 * <p>The logging configuration associated with an Amazon Chime Voice Connector. Specifies whether SIP message logs are enabled for sending to Amazon CloudWatch Logs.</p>
 * @public
 */
export interface LoggingConfiguration {
  /**
   * <p>Boolean that enables SIP message logs to Amazon CloudWatch logs.</p>
   * @public
   */
  EnableSIPLogs?: boolean | undefined;

  /**
   * <p>Boolean that enables logging of detailed media metrics for Voice Connectors to Amazon CloudWatch logs.</p>
   * @public
   */
  EnableMediaMetricLogs?: boolean | undefined;
}

/**
 * @public
 */
export interface GetVoiceConnectorLoggingConfigurationResponse {
  /**
   * <p>The logging configuration details.</p>
   * @public
   */
  LoggingConfiguration?: LoggingConfiguration | undefined;
}

/**
 * @public
 */
export interface GetVoiceConnectorOriginationRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   * @public
   */
  VoiceConnectorId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const OriginationRouteProtocol = {
  TCP: "TCP",
  UDP: "UDP",
} as const;

/**
 * @public
 */
export type OriginationRouteProtocol = (typeof OriginationRouteProtocol)[keyof typeof OriginationRouteProtocol];

/**
 * <p>Origination routes define call distribution properties for your SIP hosts to receive inbound
 *             calls using your Amazon Chime Voice Connector. Limit: Ten origination routes for each
 *             Amazon Chime Voice Connector.</p>
 *          <note>
 *             <p>The parameters listed below are not required, but you must use at least one. </p>
 *          </note>
 * @public
 */
export interface OriginationRoute {
  /**
   * <p>The FQDN or IP address to contact for origination traffic.</p>
   * @public
   */
  Host?: string | undefined;

  /**
   * <p>The designated origination route port. Defaults to 5060.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>The protocol to use for the origination route. Encryption-enabled Amazon Chime Voice Connectors use TCP protocol by default.</p>
   * @public
   */
  Protocol?: OriginationRouteProtocol | undefined;

  /**
   * <p>The priority associated with the host, with 1 being the highest priority. Higher priority
   *             hosts are attempted first.</p>
   * @public
   */
  Priority?: number | undefined;

  /**
   * <p>The weight associated with the host. If hosts are equal in priority, calls are redistributed among
   *             them based on their relative weight.</p>
   * @public
   */
  Weight?: number | undefined;
}

/**
 * <p>Origination settings enable your SIP hosts to receive inbound calls using your Amazon Chime
 *             Voice Connector.</p>
 *          <note>
 *             <p>The parameters listed below are not required, but you must use at least one. </p>
 *          </note>
 * @public
 */
export interface Origination {
  /**
   * <p>The call distribution properties defined for your SIP hosts. Valid range: Minimum value of 1.
   *     Maximum value of 20. This parameter is not required, but you must specify this parameter or <code>Disabled</code>.</p>
   * @public
   */
  Routes?: OriginationRoute[] | undefined;

  /**
   * <p>When origination settings are disabled, inbound calls are not enabled for your Amazon Chime
   *             Voice Connector. This parameter is not required, but you must specify this parameter or <code>Routes</code>.</p>
   * @public
   */
  Disabled?: boolean | undefined;
}

/**
 * @public
 */
export interface GetVoiceConnectorOriginationResponse {
  /**
   * <p>The origination setting details.</p>
   * @public
   */
  Origination?: Origination | undefined;
}

/**
 * @public
 */
export interface GetVoiceConnectorProxyRequest {
  /**
   * <p>The Amazon Chime voice connector ID.</p>
   * @public
   */
  VoiceConnectorId: string | undefined;
}

/**
 * <p>The proxy configuration for an Amazon Chime Voice Connector.</p>
 * @public
 */
export interface Proxy {
  /**
   * <p>The default number of minutes allowed for proxy sessions.</p>
   * @public
   */
  DefaultSessionExpiryMinutes?: number | undefined;

  /**
   * <p>When true, stops proxy sessions from being created on the specified Amazon Chime Voice Connector.</p>
   * @public
   */
  Disabled?: boolean | undefined;

  /**
   * <p>The phone number to route calls to after a proxy session expires.</p>
   * @public
   */
  FallBackPhoneNumber?: string | undefined;

  /**
   * <p>The countries for proxy phone numbers to be selected from.</p>
   * @public
   */
  PhoneNumberCountries?: string[] | undefined;
}

/**
 * @public
 */
export interface GetVoiceConnectorProxyResponse {
  /**
   * <p>The proxy configuration details.</p>
   * @public
   */
  Proxy?: Proxy | undefined;
}

/**
 * @public
 */
export interface GetVoiceConnectorStreamingConfigurationRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   * @public
   */
  VoiceConnectorId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const NotificationTarget = {
  EventBridge: "EventBridge",
  SNS: "SNS",
  SQS: "SQS",
} as const;

/**
 * @public
 */
export type NotificationTarget = (typeof NotificationTarget)[keyof typeof NotificationTarget];

/**
 * <p>The targeted recipient for a streaming configuration notification.</p>
 * @public
 */
export interface StreamingNotificationTarget {
  /**
   * <p>The streaming notification target.</p>
   * @public
   */
  NotificationTarget: NotificationTarget | undefined;
}

/**
 * <p>The streaming configuration associated with an Amazon Chime Voice Connector. Specifies whether
 *             media streaming is enabled for sending to Amazon Kinesis, and shows the retention period
 *             for the Amazon Kinesis data, in hours.</p>
 * @public
 */
export interface StreamingConfiguration {
  /**
   * <p>The retention period, in hours, for the Amazon Kinesis data.</p>
   * @public
   */
  DataRetentionInHours: number | undefined;

  /**
   * <p>When true, media streaming to Amazon Kinesis is turned off.</p>
   * @public
   */
  Disabled?: boolean | undefined;

  /**
   * <p>The streaming notification targets.</p>
   * @public
   */
  StreamingNotificationTargets?: StreamingNotificationTarget[] | undefined;
}

/**
 * @public
 */
export interface GetVoiceConnectorStreamingConfigurationResponse {
  /**
   * <p>The streaming configuration details.</p>
   * @public
   */
  StreamingConfiguration?: StreamingConfiguration | undefined;
}

/**
 * @public
 */
export interface GetVoiceConnectorTerminationRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   * @public
   */
  VoiceConnectorId: string | undefined;
}

/**
 * <p>Termination settings enable your SIP hosts to make outbound calls using your Amazon Chime
 *             Voice Connector.</p>
 * @public
 */
export interface Termination {
  /**
   * <p>The limit on calls per second. Max value based on account service quota. Default value of
   *             1.</p>
   * @public
   */
  CpsLimit?: number | undefined;

  /**
   * <p>The default caller ID phone number.</p>
   * @public
   */
  DefaultPhoneNumber?: string | undefined;

  /**
   * <p>The countries to which calls are allowed, in ISO 3166-1 alpha-2 format. Required.</p>
   * @public
   */
  CallingRegions?: string[] | undefined;

  /**
   * <p>The IP addresses allowed to make calls, in CIDR format. Required.</p>
   * @public
   */
  CidrAllowedList?: string[] | undefined;

  /**
   * <p>When termination settings are disabled, outbound calls can not be made.</p>
   * @public
   */
  Disabled?: boolean | undefined;
}

/**
 * @public
 */
export interface GetVoiceConnectorTerminationResponse {
  /**
   * <p>The termination setting details.</p>
   * @public
   */
  Termination?: Termination | undefined;
}

/**
 * @public
 */
export interface GetVoiceConnectorTerminationHealthRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   * @public
   */
  VoiceConnectorId: string | undefined;
}

/**
 * <p>The termination health details, including the source IP address and timestamp of the last
 *             successful SIP <code>OPTIONS</code> message from your SIP infrastructure.</p>
 * @public
 */
export interface TerminationHealth {
  /**
   * <p>The timestamp, in ISO 8601 format.</p>
   * @public
   */
  Timestamp?: Date | undefined;

  /**
   * <p>The source IP address.</p>
   * @public
   */
  Source?: string | undefined;
}

/**
 * @public
 */
export interface GetVoiceConnectorTerminationHealthResponse {
  /**
   * <p>The termination health details.</p>
   * @public
   */
  TerminationHealth?: TerminationHealth | undefined;
}

/**
 * <p>Invitation object returned after emailing users to invite them to join the Amazon Chime
 *                 <code>Team</code> account.</p>
 * @public
 */
export interface Invite {
  /**
   * <p>The invite ID.</p>
   * @public
   */
  InviteId?: string | undefined;

  /**
   * <p>The status of the invite.</p>
   * @public
   */
  Status?: InviteStatus | undefined;

  /**
   * <p>The email address to which the invite is sent.</p>
   * @public
   */
  EmailAddress?: string | undefined;

  /**
   * <p>The status of the invite email.</p>
   * @public
   */
  EmailStatus?: EmailStatus | undefined;
}

/**
 * @public
 */
export interface InviteUsersRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The user email addresses to which to send the email invitation.</p>
   * @public
   */
  UserEmailList: string[] | undefined;

  /**
   * <p>The user type.</p>
   * @public
   */
  UserType?: UserType | undefined;
}

/**
 * @public
 */
export interface InviteUsersResponse {
  /**
   * <p>The email invitation details.</p>
   * @public
   */
  Invites?: Invite[] | undefined;
}

/**
 * @public
 */
export interface ListAccountsRequest {
  /**
   * <p>Amazon Chime account name prefix with which to filter results.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>User email address with which to filter results.</p>
   * @public
   */
  UserEmail?: string | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call. Defaults to 100.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAccountsResponse {
  /**
   * <p>List of Amazon Chime accounts and account details.</p>
   * @public
   */
  Accounts?: Account[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAppInstanceAdminsRequest {
  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   * @public
   */
  AppInstanceArn: string | undefined;

  /**
   * <p>The maximum number of administrators that you want to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token returned from previous API requests until the number of administrators is reached.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAppInstanceAdminsResponse {
  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   * @public
   */
  AppInstanceArn?: string | undefined;

  /**
   * <p>The information for each administrator.</p>
   * @public
   */
  AppInstanceAdmins?: AppInstanceAdminSummary[] | undefined;

  /**
   * <p>The token returned from previous API requests until the number of administrators is reached.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAppInstancesRequest {
  /**
   * <p>The maximum number of <code>AppInstance</code>s that you want to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token passed by previous API requests until you reach the maximum number of <code>AppInstance</code>s.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAppInstancesResponse {
  /**
   * <p>The information for each <code>AppInstance</code>.</p>
   * @public
   */
  AppInstances?: AppInstanceSummary[] | undefined;

  /**
   * <p>The token passed by previous API requests until the maximum number of <code>AppInstance</code>s is reached.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAppInstanceUsersRequest {
  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   * @public
   */
  AppInstanceArn: string | undefined;

  /**
   * <p>The maximum number of requests that you want returned.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token passed by previous API calls until all requested users are returned.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAppInstanceUsersResponse {
  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   * @public
   */
  AppInstanceArn?: string | undefined;

  /**
   * <p>The information for each requested <code>AppInstanceUser</code>.</p>
   * @public
   */
  AppInstanceUsers?: AppInstanceUserSummary[] | undefined;

  /**
   * <p>The token passed by previous API calls until all requested users are returned.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAttendeesRequest {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   * @public
   */
  MeetingId: string | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAttendeesResponse {
  /**
   * <p>The Amazon Chime SDK attendee information.</p>
   * @public
   */
  Attendees?: Attendee[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAttendeeTagsRequest {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   * @public
   */
  MeetingId: string | undefined;

  /**
   * <p>The Amazon Chime SDK attendee ID.</p>
   * @public
   */
  AttendeeId: string | undefined;
}

/**
 * @public
 */
export interface ListAttendeeTagsResponse {
  /**
   * <p>A list of tag key-value pairs.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ListBotsRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call. The default is 10.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBotsResponse {
  /**
   * <p>List of bots and bot details.</p>
   * @public
   */
  Bots?: Bot[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListChannelBansRequest {
  /**
   * <p>The ARN of the channel.</p>
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * <p>The maximum number of bans that you want returned.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token passed by previous API calls until all requested bans are returned.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   * @public
   */
  ChimeBearer?: string | undefined;
}

/**
 * @public
 */
export interface ListChannelBansResponse {
  /**
   * <p>The ARN of the channel.</p>
   * @public
   */
  ChannelArn?: string | undefined;

  /**
   * <p>The token passed by previous API calls until all requested bans are returned.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The information for each requested ban.</p>
   * @public
   */
  ChannelBans?: ChannelBanSummary[] | undefined;
}

/**
 * @public
 */
export interface ListChannelMembershipsRequest {
  /**
   * <p>The maximum number of channel memberships that you want returned.</p>
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * <p>The membership type of a user, <code>DEFAULT</code> or <code>HIDDEN</code>. Default
   *          members are always returned as part of <code>ListChannelMemberships</code>. Hidden members
   *          are only returned if the type filter in <code>ListChannelMemberships</code> equals
   *             <code>HIDDEN</code>. Otherwise hidden members are not returned.</p>
   * @public
   */
  Type?: ChannelMembershipType | undefined;

  /**
   * <p>The maximum number of channel memberships that you want returned.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token passed by previous API calls until all requested channel memberships are
   *          returned.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   * @public
   */
  ChimeBearer?: string | undefined;
}

/**
 * @public
 */
export interface ListChannelMembershipsResponse {
  /**
   * <p>The ARN of the channel.</p>
   * @public
   */
  ChannelArn?: string | undefined;

  /**
   * <p>The information for the requested channel memberships.</p>
   * @public
   */
  ChannelMemberships?: ChannelMembershipSummary[] | undefined;

  /**
   * <p>The token passed by previous API calls until all requested channel memberships are
   *          returned.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListChannelMembershipsForAppInstanceUserRequest {
  /**
   * <p>The ARN of the <code>AppInstanceUser</code>s</p>
   * @public
   */
  AppInstanceUserArn?: string | undefined;

  /**
   * <p>The maximum number of users that you want returned.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token returned from previous API requests until the number of channel memberships is reached.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   * @public
   */
  ChimeBearer?: string | undefined;
}

/**
 * @public
 */
export interface ListChannelMembershipsForAppInstanceUserResponse {
  /**
   * <p>The information for the requested channel memberships.</p>
   * @public
   */
  ChannelMemberships?: ChannelMembershipForAppInstanceUserSummary[] | undefined;

  /**
   * <p>The token passed by previous API calls until all requested users are returned.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SortOrder = {
  ASCENDING: "ASCENDING",
  DESCENDING: "DESCENDING",
} as const;

/**
 * @public
 */
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

/**
 * @public
 */
export interface ListChannelMessagesRequest {
  /**
   * <p>The ARN of the channel.</p>
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * <p>The order in which you want messages sorted. Default is Descending, based on time
   *          created.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * <p>The initial or starting time stamp for your requested messages.</p>
   * @public
   */
  NotBefore?: Date | undefined;

  /**
   * <p>The final or ending time stamp for your requested messages.</p>
   * @public
   */
  NotAfter?: Date | undefined;

  /**
   * <p>The maximum number of messages that you want returned.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token passed by previous API calls until all requested messages are returned.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   * @public
   */
  ChimeBearer?: string | undefined;
}

/**
 * @public
 */
export interface ListChannelMessagesResponse {
  /**
   * <p>The ARN of the channel containing the requested messages.</p>
   * @public
   */
  ChannelArn?: string | undefined;

  /**
   * <p>The token passed by previous API calls until all requested messages are returned.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The information about, and content of, each requested message.</p>
   * @public
   */
  ChannelMessages?: ChannelMessageSummary[] | undefined;
}

/**
 * @public
 */
export interface ListChannelModeratorsRequest {
  /**
   * <p>The ARN of the channel.</p>
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * <p>The maximum number of moderators that you want returned.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token passed by previous API calls until all requested moderators are
   *          returned.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   * @public
   */
  ChimeBearer?: string | undefined;
}

/**
 * @public
 */
export interface ListChannelModeratorsResponse {
  /**
   * <p>The ARN of the channel.</p>
   * @public
   */
  ChannelArn?: string | undefined;

  /**
   * <p>The token passed by previous API calls until all requested moderators are
   *          returned.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The information about and names of each moderator.</p>
   * @public
   */
  ChannelModerators?: ChannelModeratorSummary[] | undefined;
}

/**
 * @public
 */
export interface ListChannelsRequest {
  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   * @public
   */
  AppInstanceArn: string | undefined;

  /**
   * <p>The privacy setting. <code>PUBLIC</code> retrieves all the public channels.
   *             <code>PRIVATE</code> retrieves private channels. Only an <code>AppInstanceAdmin</code>
   *          can retrieve private channels. </p>
   * @public
   */
  Privacy?: ChannelPrivacy | undefined;

  /**
   * <p>The maximum number of channels that you want to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token passed by previous API calls until all requested channels are returned.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   * @public
   */
  ChimeBearer?: string | undefined;
}

/**
 * @public
 */
export interface ListChannelsResponse {
  /**
   * <p>The information about each channel.</p>
   * @public
   */
  Channels?: ChannelSummary[] | undefined;

  /**
   * <p>The token returned from previous API requests until the number of channels is
   *          reached.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListChannelsModeratedByAppInstanceUserRequest {
  /**
   * <p>The ARN of the user in the moderated channel.</p>
   * @public
   */
  AppInstanceUserArn?: string | undefined;

  /**
   * <p>The maximum number of channels in the request.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token returned from previous API requests until the number of channels moderated by
   *          the user is reached.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   * @public
   */
  ChimeBearer?: string | undefined;
}

/**
 * @public
 */
export interface ListChannelsModeratedByAppInstanceUserResponse {
  /**
   * <p>The moderated channels in the request.</p>
   * @public
   */
  Channels?: ChannelModeratedByAppInstanceUserSummary[] | undefined;

  /**
   * <p>The token returned from previous API requests until the number of channels moderated by
   *          the user is reached.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMediaCapturePipelinesRequest {
  /**
   * <p>The token used to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call. Valid Range: 1 - 99.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListMediaCapturePipelinesResponse {
  /**
   * <p>The media capture pipeline objects in the list.</p>
   * @public
   */
  MediaCapturePipelines?: MediaCapturePipeline[] | undefined;

  /**
   * <p>The token used to retrieve the next page of results. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMeetingsRequest {
  /**
   * <p>The token to use to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListMeetingsResponse {
  /**
   * <p>The Amazon Chime SDK meeting information.</p>
   * @public
   */
  Meetings?: Meeting[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMeetingTagsRequest {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   * @public
   */
  MeetingId: string | undefined;
}

/**
 * @public
 */
export interface ListMeetingTagsResponse {
  /**
   * <p>A list of tag key-value pairs.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ListPhoneNumberOrdersRequest {
  /**
   * <p>The token to use to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListPhoneNumberOrdersResponse {
  /**
   * <p>The phone number order details.</p>
   * @public
   */
  PhoneNumberOrders?: PhoneNumberOrder[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPhoneNumbersRequest {
  /**
   * <p>The phone number status.</p>
   * @public
   */
  Status?: PhoneNumberStatus | undefined;

  /**
   * <p>The phone number product type.</p>
   * @public
   */
  ProductType?: PhoneNumberProductType | undefined;

  /**
   * <p>The filter to use to limit the number of results.</p>
   * @public
   */
  FilterName?: PhoneNumberAssociationName | undefined;

  /**
   * <p>The value to use for the filter.</p>
   * @public
   */
  FilterValue?: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPhoneNumbersResponse {
  /**
   * <p>The phone number details.</p>
   * @public
   */
  PhoneNumbers?: PhoneNumber[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListProxySessionsRequest {
  /**
   * <p>The Amazon Chime voice connector ID.</p>
   * @public
   */
  VoiceConnectorId: string | undefined;

  /**
   * <p>The proxy session status.</p>
   * @public
   */
  Status?: ProxySessionStatus | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListProxySessionsResponse {
  /**
   * <p>The proxy session details.</p>
   * @public
   */
  ProxySessions?: ProxySession[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRoomMembershipsRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The room ID.</p>
   * @public
   */
  RoomId: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRoomMembershipsResponse {
  /**
   * <p>The room membership details.</p>
   * @public
   */
  RoomMemberships?: RoomMembership[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRoomsRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The member ID (user ID or bot ID).</p>
   * @public
   */
  MemberId?: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRoomsResponse {
  /**
   * <p>The room details.</p>
   * @public
   */
  Rooms?: Room[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSipMediaApplicationsRequest {
  /**
   * <p>The maximum number of results to return in a single call. Defaults to 100.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSipMediaApplicationsResponse {
  /**
   * <p>List of SIP media applications and application details.</p>
   * @public
   */
  SipMediaApplications?: SipMediaApplication[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSipRulesRequest {
  /**
   * <p>The SIP media application ID.</p>
   * @public
   */
  SipMediaApplicationId?: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call. Defaults to 100.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSipRulesResponse {
  /**
   * <p>List of SIP rules and rule details.</p>
   * @public
   */
  SipRules?: SipRule[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSupportedPhoneNumberCountriesRequest {
  /**
   * <p>The phone number product type.</p>
   * @public
   */
  ProductType: PhoneNumberProductType | undefined;
}

/**
 * <p>The phone number country.</p>
 * @public
 */
export interface PhoneNumberCountry {
  /**
   * <p>The phone number country code. Format: ISO 3166-1 alpha-2.</p>
   * @public
   */
  CountryCode?: string | undefined;

  /**
   * <p>The supported phone number types. </p>
   * @public
   */
  SupportedPhoneNumberTypes?: PhoneNumberType[] | undefined;
}

/**
 * @public
 */
export interface ListSupportedPhoneNumberCountriesResponse {
  /**
   * <p>The supported phone number countries.</p>
   * @public
   */
  PhoneNumberCountries?: PhoneNumberCountry[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The resource ARN.</p>
   * @public
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>A list of tag-key value pairs.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ListUsersRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>Optional. The user email address used to filter results. Maximum 1.</p>
   * @public
   */
  UserEmail?: string | undefined;

  /**
   * <p>The user type.</p>
   * @public
   */
  UserType?: UserType | undefined;

  /**
   * <p>The maximum number of results to return in a single call. Defaults to 100.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListUsersResponse {
  /**
   * <p>List of users and user details.</p>
   * @public
   */
  Users?: User[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListVoiceConnectorGroupsRequest {
  /**
   * <p>The token to use to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListVoiceConnectorGroupsResponse {
  /**
   * <p>The details of the Amazon Chime Voice Connector groups.</p>
   * @public
   */
  VoiceConnectorGroups?: VoiceConnectorGroup[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListVoiceConnectorsRequest {
  /**
   * <p>The token to use to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListVoiceConnectorsResponse {
  /**
   * <p>The details of the Amazon Chime Voice Connectors.</p>
   * @public
   */
  VoiceConnectors?: VoiceConnector[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListVoiceConnectorTerminationCredentialsRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   * @public
   */
  VoiceConnectorId: string | undefined;
}

/**
 * @public
 */
export interface ListVoiceConnectorTerminationCredentialsResponse {
  /**
   * <p>A list of user names.</p>
   * @public
   */
  Usernames?: string[] | undefined;
}

/**
 * @public
 */
export interface LogoutUserRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The user ID.</p>
   * @public
   */
  UserId: string | undefined;
}

/**
 * @public
 */
export interface LogoutUserResponse {}

/**
 * @public
 */
export interface PutAppInstanceRetentionSettingsRequest {
  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   * @public
   */
  AppInstanceArn: string | undefined;

  /**
   * <p>The time in days to retain data. Data type: number.</p>
   * @public
   */
  AppInstanceRetentionSettings: AppInstanceRetentionSettings | undefined;
}

/**
 * @public
 */
export interface PutAppInstanceRetentionSettingsResponse {
  /**
   * <p>The time in days to retain data. Data type: number.</p>
   * @public
   */
  AppInstanceRetentionSettings?: AppInstanceRetentionSettings | undefined;

  /**
   * <p>The time at which the API deletes data.</p>
   * @public
   */
  InitiateDeletionTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface PutAppInstanceStreamingConfigurationsRequest {
  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   * @public
   */
  AppInstanceArn: string | undefined;

  /**
   * <p>The streaming configurations set for an <code>AppInstance</code>.</p>
   * @public
   */
  AppInstanceStreamingConfigurations: AppInstanceStreamingConfiguration[] | undefined;
}

/**
 * @public
 */
export interface PutAppInstanceStreamingConfigurationsResponse {
  /**
   * <p>The streaming configurations of an <code>AppInstance</code>.</p>
   * @public
   */
  AppInstanceStreamingConfigurations?: AppInstanceStreamingConfiguration[] | undefined;
}

/**
 * @public
 */
export interface PutEventsConfigurationRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The bot ID.</p>
   * @public
   */
  BotId: string | undefined;

  /**
   * <p>HTTPS endpoint that allows the bot to receive outgoing events.</p>
   * @public
   */
  OutboundEventsHTTPSEndpoint?: string | undefined;

  /**
   * <p>Lambda function ARN that allows the bot to receive outgoing events.</p>
   * @public
   */
  LambdaFunctionArn?: string | undefined;
}

/**
 * @public
 */
export interface PutEventsConfigurationResponse {
  /**
   * <p>The configuration that allows a bot to receive outgoing events. Can be an HTTPS endpoint or an
   *             AWS Lambda function ARN.</p>
   * @public
   */
  EventsConfiguration?: EventsConfiguration | undefined;
}

/**
 * @public
 */
export interface PutRetentionSettingsRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The retention settings.</p>
   * @public
   */
  RetentionSettings: RetentionSettings | undefined;
}

/**
 * @public
 */
export interface PutRetentionSettingsResponse {
  /**
   * <p>The retention settings.</p>
   * @public
   */
  RetentionSettings?: RetentionSettings | undefined;

  /**
   * <p>The timestamp representing the time at which the specified items are permanently deleted, in ISO 8601 format.</p>
   * @public
   */
  InitiateDeletionTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface PutSipMediaApplicationLoggingConfigurationRequest {
  /**
   * <p>The SIP media application ID.</p>
   * @public
   */
  SipMediaApplicationId: string | undefined;

  /**
   * <p>The actual logging configuration.</p>
   * @public
   */
  SipMediaApplicationLoggingConfiguration?: SipMediaApplicationLoggingConfiguration | undefined;
}

/**
 * @public
 */
export interface PutSipMediaApplicationLoggingConfigurationResponse {
  /**
   * <p>The logging configuration of the SIP media application.</p>
   * @public
   */
  SipMediaApplicationLoggingConfiguration?: SipMediaApplicationLoggingConfiguration | undefined;
}

/**
 * @public
 */
export interface PutVoiceConnectorEmergencyCallingConfigurationRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   * @public
   */
  VoiceConnectorId: string | undefined;

  /**
   * <p>The emergency calling configuration details.</p>
   * @public
   */
  EmergencyCallingConfiguration: EmergencyCallingConfiguration | undefined;
}

/**
 * @public
 */
export interface PutVoiceConnectorEmergencyCallingConfigurationResponse {
  /**
   * <p>The emergency calling configuration details.</p>
   * @public
   */
  EmergencyCallingConfiguration?: EmergencyCallingConfiguration | undefined;
}

/**
 * @public
 */
export interface PutVoiceConnectorLoggingConfigurationRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   * @public
   */
  VoiceConnectorId: string | undefined;

  /**
   * <p>The logging configuration details to add.</p>
   * @public
   */
  LoggingConfiguration: LoggingConfiguration | undefined;
}

/**
 * @public
 */
export interface PutVoiceConnectorLoggingConfigurationResponse {
  /**
   * <p>The updated logging configuration details.</p>
   * @public
   */
  LoggingConfiguration?: LoggingConfiguration | undefined;
}

/**
 * @public
 */
export interface PutVoiceConnectorOriginationRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   * @public
   */
  VoiceConnectorId: string | undefined;

  /**
   * <p>The origination setting details to add.</p>
   * @public
   */
  Origination: Origination | undefined;
}

/**
 * @public
 */
export interface PutVoiceConnectorOriginationResponse {
  /**
   * <p>The updated origination setting details.</p>
   * @public
   */
  Origination?: Origination | undefined;
}

/**
 * @public
 */
export interface PutVoiceConnectorProxyRequest {
  /**
   * <p>The Amazon Chime voice connector ID.</p>
   * @public
   */
  VoiceConnectorId: string | undefined;

  /**
   * <p>The default number of minutes allowed for proxy sessions.</p>
   * @public
   */
  DefaultSessionExpiryMinutes: number | undefined;

  /**
   * <p>The countries for proxy phone numbers to be selected from.</p>
   * @public
   */
  PhoneNumberPoolCountries: string[] | undefined;

  /**
   * <p>The phone number to route calls to after a proxy session expires.</p>
   * @public
   */
  FallBackPhoneNumber?: string | undefined;

  /**
   * <p>When true, stops proxy sessions from being created on the specified Amazon Chime Voice Connector.</p>
   * @public
   */
  Disabled?: boolean | undefined;
}

/**
 * @public
 */
export interface PutVoiceConnectorProxyResponse {
  /**
   * <p>The proxy configuration details.</p>
   * @public
   */
  Proxy?: Proxy | undefined;
}

/**
 * @public
 */
export interface PutVoiceConnectorStreamingConfigurationRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   * @public
   */
  VoiceConnectorId: string | undefined;

  /**
   * <p>The streaming configuration details to add.</p>
   * @public
   */
  StreamingConfiguration: StreamingConfiguration | undefined;
}

/**
 * @public
 */
export interface PutVoiceConnectorStreamingConfigurationResponse {
  /**
   * <p>The updated streaming configuration details.</p>
   * @public
   */
  StreamingConfiguration?: StreamingConfiguration | undefined;
}

/**
 * @public
 */
export interface PutVoiceConnectorTerminationRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   * @public
   */
  VoiceConnectorId: string | undefined;

  /**
   * <p>The termination setting details to add.</p>
   * @public
   */
  Termination: Termination | undefined;
}

/**
 * @public
 */
export interface PutVoiceConnectorTerminationResponse {
  /**
   * <p>The updated termination setting details.</p>
   * @public
   */
  Termination?: Termination | undefined;
}

/**
 * @public
 */
export interface PutVoiceConnectorTerminationCredentialsRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   * @public
   */
  VoiceConnectorId: string | undefined;

  /**
   * <p>The termination SIP credentials.</p>
   * @public
   */
  Credentials?: Credential[] | undefined;
}

/**
 * @public
 */
export interface RedactChannelMessageRequest {
  /**
   * <p>The ARN of the channel containing the messages that you want to redact.</p>
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * <p>The ID of the message being redacted.</p>
   * @public
   */
  MessageId: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   * @public
   */
  ChimeBearer?: string | undefined;
}

/**
 * @public
 */
export interface RedactChannelMessageResponse {
  /**
   * <p>The ARN of the channel containing the messages that you want to redact.</p>
   * @public
   */
  ChannelArn?: string | undefined;

  /**
   * <p>The ID of the message being redacted.</p>
   * @public
   */
  MessageId?: string | undefined;
}

/**
 * @public
 */
export interface RedactConversationMessageRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The conversation ID.</p>
   * @public
   */
  ConversationId: string | undefined;

  /**
   * <p>The message ID.</p>
   * @public
   */
  MessageId: string | undefined;
}

/**
 * @public
 */
export interface RedactConversationMessageResponse {}

/**
 * @public
 */
export interface RedactRoomMessageRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The room ID.</p>
   * @public
   */
  RoomId: string | undefined;

  /**
   * <p>The message ID.</p>
   * @public
   */
  MessageId: string | undefined;
}

/**
 * @public
 */
export interface RedactRoomMessageResponse {}

/**
 * @public
 */
export interface RegenerateSecurityTokenRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The bot ID.</p>
   * @public
   */
  BotId: string | undefined;
}

/**
 * @public
 */
export interface RegenerateSecurityTokenResponse {
  /**
   * <p>A resource that allows Enterprise account administrators to configure an interface that receives events from Amazon Chime.</p>
   * @public
   */
  Bot?: Bot | undefined;
}

/**
 * @public
 */
export interface ResetPersonalPINRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The user ID.</p>
   * @public
   */
  UserId: string | undefined;
}

/**
 * @public
 */
export interface ResetPersonalPINResponse {
  /**
   * <p>The user details and new personal meeting PIN.</p>
   * @public
   */
  User?: User | undefined;
}

/**
 * @public
 */
export interface RestorePhoneNumberRequest {
  /**
   * <p>The phone number.</p>
   * @public
   */
  PhoneNumberId: string | undefined;
}

/**
 * @public
 */
export interface RestorePhoneNumberResponse {
  /**
   * <p>The phone number details.</p>
   * @public
   */
  PhoneNumber?: PhoneNumber | undefined;
}

/**
 * @public
 */
export interface SearchAvailablePhoneNumbersRequest {
  /**
   * <p>The area code used to filter results. Only applies to the US.</p>
   * @public
   */
  AreaCode?: string | undefined;

  /**
   * <p>The city used to filter results. Only applies to the US.</p>
   * @public
   */
  City?: string | undefined;

  /**
   * <p>The country used to filter results. Defaults to the US Format: ISO 3166-1 alpha-2.</p>
   * @public
   */
  Country?: string | undefined;

  /**
   * <p>The state used to filter results. Required only if you provide <code>City</code>. Only applies to the US.</p>
   * @public
   */
  State?: string | undefined;

  /**
   * <p>The toll-free prefix that you use to filter results. Only applies to the US.</p>
   * @public
   */
  TollFreePrefix?: string | undefined;

  /**
   * <p>The phone number type used to filter results. Required for non-US numbers.</p>
   * @public
   */
  PhoneNumberType?: PhoneNumberType | undefined;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token used to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface SearchAvailablePhoneNumbersResponse {
  /**
   * <p>List of phone numbers, in E.164 format.</p>
   * @public
   */
  E164PhoneNumbers?: string[] | undefined;

  /**
   * <p>The token used to retrieve the next page of search results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface SendChannelMessageRequest {
  /**
   * <p>The ARN of the channel.</p>
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * <p>The content of the message.</p>
   * @public
   */
  Content: string | undefined;

  /**
   * <p>The type of message, <code>STANDARD</code> or <code>CONTROL</code>.</p>
   * @public
   */
  Type: ChannelMessageType | undefined;

  /**
   * <p>Boolean that controls whether the message is persisted on the back end. Required.</p>
   * @public
   */
  Persistence: ChannelMessagePersistenceType | undefined;

  /**
   * <p>The optional metadata for each message.</p>
   * @public
   */
  Metadata?: string | undefined;

  /**
   * <p>The <code>Idempotency</code> token for each client request.</p>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   * @public
   */
  ChimeBearer?: string | undefined;
}

/**
 * @public
 */
export interface SendChannelMessageResponse {
  /**
   * <p>The ARN of the channel.</p>
   * @public
   */
  ChannelArn?: string | undefined;

  /**
   * <p>The ID string assigned to each message.</p>
   * @public
   */
  MessageId?: string | undefined;
}

/**
 * <p>The configuration for the current transcription operation. Must contain <code>EngineTranscribeSettings</code> or <code>EngineTranscribeMedicalSettings</code>.</p>
 * @public
 */
export interface TranscriptionConfiguration {
  /**
   * <p>The transcription configuration settings passed to Amazon Transcribe.</p>
   * @public
   */
  EngineTranscribeSettings?: EngineTranscribeSettings | undefined;

  /**
   * <p>The transcription configuration settings passed to Amazon Transcribe Medical.</p>
   * @public
   */
  EngineTranscribeMedicalSettings?: EngineTranscribeMedicalSettings | undefined;
}

/**
 * @public
 */
export interface StartMeetingTranscriptionRequest {
  /**
   * <p>The unique ID of the meeting being transcribed.</p>
   * @public
   */
  MeetingId: string | undefined;

  /**
   * <p>The configuration for the current transcription operation. Must contain <code>EngineTranscribeSettings</code> or <code>EngineTranscribeMedicalSettings</code>.</p>
   * @public
   */
  TranscriptionConfiguration: TranscriptionConfiguration | undefined;
}

/**
 * @public
 */
export interface StartMeetingTranscriptionResponse {}

/**
 * @public
 */
export interface StopMeetingTranscriptionRequest {
  /**
   * <p>The unique ID of the meeting for which you stop transcription.</p>
   * @public
   */
  MeetingId: string | undefined;
}

/**
 * @public
 */
export interface StopMeetingTranscriptionResponse {}

/**
 * @public
 */
export interface TagAttendeeRequest {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   * @public
   */
  MeetingId: string | undefined;

  /**
   * <p>The Amazon Chime SDK attendee ID.</p>
   * @public
   */
  AttendeeId: string | undefined;

  /**
   * <p>The tag key-value pairs.</p>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagMeetingRequest {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   * @public
   */
  MeetingId: string | undefined;

  /**
   * <p>The tag key-value pairs.</p>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The resource ARN.</p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>The tag key-value pairs.</p>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface UntagAttendeeRequest {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   * @public
   */
  MeetingId: string | undefined;

  /**
   * <p>The Amazon Chime SDK attendee ID.</p>
   * @public
   */
  AttendeeId: string | undefined;

  /**
   * <p>The tag keys.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagMeetingRequest {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   * @public
   */
  MeetingId: string | undefined;

  /**
   * <p>The tag keys.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The resource ARN.</p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>The tag keys.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateAccountRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The new name for the specified Amazon Chime account.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The default license applied when you add users to an Amazon Chime account.</p>
   * @public
   */
  DefaultLicense?: License | undefined;
}

/**
 * @public
 */
export interface UpdateAccountResponse {
  /**
   * <p>The updated Amazon Chime account details.</p>
   * @public
   */
  Account?: Account | undefined;
}

/**
 * @public
 */
export interface UpdateAccountSettingsRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The Amazon Chime account settings to update.</p>
   * @public
   */
  AccountSettings: AccountSettings | undefined;
}

/**
 * @public
 */
export interface UpdateAccountSettingsResponse {}

/**
 * @public
 */
export interface UpdateAppInstanceRequest {
  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   * @public
   */
  AppInstanceArn: string | undefined;

  /**
   * <p>The name that you want to change.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The metadata that you want to change.</p>
   * @public
   */
  Metadata?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAppInstanceResponse {
  /**
   * <p>The ARN of the <code>AppInstance</code>. </p>
   * @public
   */
  AppInstanceArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAppInstanceUserRequest {
  /**
   * <p>The ARN of the <code>AppInstanceUser</code>.</p>
   * @public
   */
  AppInstanceUserArn: string | undefined;

  /**
   * <p>The name of the <code>AppInstanceUser</code>.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The metadata of the <code>AppInstanceUser</code>.</p>
   * @public
   */
  Metadata?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAppInstanceUserResponse {
  /**
   * <p>The ARN of the <code>AppInstanceUser</code>.</p>
   * @public
   */
  AppInstanceUserArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateBotRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The bot ID.</p>
   * @public
   */
  BotId: string | undefined;

  /**
   * <p>When true, stops the specified bot from running in your account.</p>
   * @public
   */
  Disabled?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateBotResponse {
  /**
   * <p>The updated bot details.</p>
   * @public
   */
  Bot?: Bot | undefined;
}

/**
 * @public
 */
export interface UpdateChannelRequest {
  /**
   * <p>The ARN of the channel.</p>
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * <p>The name of the channel.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The mode of the update request.</p>
   * @public
   */
  Mode: ChannelMode | undefined;

  /**
   * <p>The metadata for the update request.</p>
   * @public
   */
  Metadata?: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   * @public
   */
  ChimeBearer?: string | undefined;
}

/**
 * @public
 */
export interface UpdateChannelResponse {
  /**
   * <p>The ARN of the channel.</p>
   * @public
   */
  ChannelArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateChannelMessageRequest {
  /**
   * <p>The ARN of the channel.</p>
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * <p>The ID string of the message being updated.</p>
   * @public
   */
  MessageId: string | undefined;

  /**
   * <p>The content of the message being updated.</p>
   * @public
   */
  Content?: string | undefined;

  /**
   * <p>The metadata of the message being updated.</p>
   * @public
   */
  Metadata?: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   * @public
   */
  ChimeBearer?: string | undefined;
}

/**
 * @public
 */
export interface UpdateChannelMessageResponse {
  /**
   * <p>The ARN of the channel.</p>
   * @public
   */
  ChannelArn?: string | undefined;

  /**
   * <p>The ID string of the message being updated.</p>
   * @public
   */
  MessageId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateChannelReadMarkerRequest {
  /**
   * <p>The ARN of the channel.</p>
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   * @public
   */
  ChimeBearer?: string | undefined;
}

/**
 * @public
 */
export interface UpdateChannelReadMarkerResponse {
  /**
   * <p>The ARN of the channel.</p>
   * @public
   */
  ChannelArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateGlobalSettingsRequest {
  /**
   * <p>The Amazon Chime Business Calling settings.</p>
   * @public
   */
  BusinessCalling?: BusinessCallingSettings | undefined;

  /**
   * <p>The Amazon Chime Voice Connector settings.</p>
   * @public
   */
  VoiceConnector?: VoiceConnectorSettings | undefined;
}

/**
 * @public
 */
export interface UpdatePhoneNumberRequest {
  /**
   * <p>The phone number ID.</p>
   * @public
   */
  PhoneNumberId: string | undefined;

  /**
   * <p>The product type.</p>
   * @public
   */
  ProductType?: PhoneNumberProductType | undefined;

  /**
   * <p>The outbound calling name associated with the phone number.</p>
   * @public
   */
  CallingName?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePhoneNumberResponse {
  /**
   * <p>The updated phone number details.</p>
   * @public
   */
  PhoneNumber?: PhoneNumber | undefined;
}

/**
 * @public
 */
export interface UpdatePhoneNumberSettingsRequest {
  /**
   * <p>The default outbound calling name for the account.</p>
   * @public
   */
  CallingName: string | undefined;
}

/**
 * @public
 */
export interface UpdateProxySessionRequest {
  /**
   * <p>The Amazon Chime voice connector ID.</p>
   * @public
   */
  VoiceConnectorId: string | undefined;

  /**
   * <p>The proxy session ID.</p>
   * @public
   */
  ProxySessionId: string | undefined;

  /**
   * <p>The proxy session capabilities.</p>
   * @public
   */
  Capabilities: Capability[] | undefined;

  /**
   * <p>The number of minutes allowed for the proxy session.</p>
   * @public
   */
  ExpiryMinutes?: number | undefined;
}

/**
 * @public
 */
export interface UpdateProxySessionResponse {
  /**
   * <p>The proxy session details.</p>
   * @public
   */
  ProxySession?: ProxySession | undefined;
}

/**
 * @public
 */
export interface UpdateRoomRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The room ID.</p>
   * @public
   */
  RoomId: string | undefined;

  /**
   * <p>The room name.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface UpdateRoomResponse {
  /**
   * <p>The room details.</p>
   * @public
   */
  Room?: Room | undefined;
}

/**
 * @public
 */
export interface UpdateRoomMembershipRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The room ID.</p>
   * @public
   */
  RoomId: string | undefined;

  /**
   * <p>The member ID.</p>
   * @public
   */
  MemberId: string | undefined;

  /**
   * <p>The role of the member.</p>
   * @public
   */
  Role?: RoomMembershipRole | undefined;
}

/**
 * @public
 */
export interface UpdateRoomMembershipResponse {
  /**
   * <p>The room membership details.</p>
   * @public
   */
  RoomMembership?: RoomMembership | undefined;
}

/**
 * @public
 */
export interface UpdateSipMediaApplicationRequest {
  /**
   * <p>The SIP media application ID.</p>
   * @public
   */
  SipMediaApplicationId: string | undefined;

  /**
   * <p>The new name for the specified SIP media application.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The new set of endpoints for the specified SIP media application.</p>
   * @public
   */
  Endpoints?: SipMediaApplicationEndpoint[] | undefined;
}

/**
 * @public
 */
export interface UpdateSipMediaApplicationResponse {
  /**
   * <p>The updated SIP media application details.</p>
   * @public
   */
  SipMediaApplication?: SipMediaApplication | undefined;
}

/**
 * @public
 */
export interface UpdateSipMediaApplicationCallRequest {
  /**
   * <p>The ID of the SIP media application handling the call.</p>
   * @public
   */
  SipMediaApplicationId: string | undefined;

  /**
   * <p>The ID of the call transaction.</p>
   * @public
   */
  TransactionId: string | undefined;

  /**
   * <p>Arguments made available to the Lambda function as part of the <code>CALL_UPDATE_REQUESTED</code> event. Can contain 0-20 key-value pairs.</p>
   * @public
   */
  Arguments: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UpdateSipMediaApplicationCallResponse {
  /**
   * <p>A <code>Call</code> instance for a SIP media application.</p>
   * @public
   */
  SipMediaApplicationCall?: SipMediaApplicationCall | undefined;
}

/**
 * @public
 */
export interface UpdateSipRuleRequest {
  /**
   * <p>The SIP rule ID.</p>
   * @public
   */
  SipRuleId: string | undefined;

  /**
   * <p>The new name for the specified SIP rule.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The new value specified to indicate whether the rule is disabled.</p>
   * @public
   */
  Disabled?: boolean | undefined;

  /**
   * <p>The new value of the list of target applications.</p>
   * @public
   */
  TargetApplications?: SipRuleTargetApplication[] | undefined;
}

/**
 * @public
 */
export interface UpdateSipRuleResponse {
  /**
   * <p>Updated SIP rule details.</p>
   * @public
   */
  SipRule?: SipRule | undefined;
}

/**
 * @public
 */
export interface UpdateUserRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The user ID.</p>
   * @public
   */
  UserId: string | undefined;

  /**
   * <p>The user license type to update. This must be a supported license type for the Amazon Chime
   *             account that the user belongs to.</p>
   * @public
   */
  LicenseType?: License | undefined;

  /**
   * <p>The user type.</p>
   * @public
   */
  UserType?: UserType | undefined;

  /**
   * <p>The Alexa for Business metadata.</p>
   * @public
   */
  AlexaForBusinessMetadata?: AlexaForBusinessMetadata | undefined;
}

/**
 * @public
 */
export interface UpdateUserResponse {
  /**
   * <p>The updated user details.</p>
   * @public
   */
  User?: User | undefined;
}

/**
 * @public
 */
export interface UpdateUserSettingsRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The user ID.</p>
   * @public
   */
  UserId: string | undefined;

  /**
   * <p>The user settings to update.</p>
   * @public
   */
  UserSettings: UserSettings | undefined;
}

/**
 * @public
 */
export interface UpdateVoiceConnectorRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   * @public
   */
  VoiceConnectorId: string | undefined;

  /**
   * <p>The name of the Amazon Chime Voice Connector.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>When enabled, requires encryption for the Amazon Chime Voice Connector.</p>
   * @public
   */
  RequireEncryption: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateVoiceConnectorResponse {
  /**
   * <p>The updated Amazon Chime Voice Connector details.</p>
   * @public
   */
  VoiceConnector?: VoiceConnector | undefined;
}

/**
 * @public
 */
export interface UpdateVoiceConnectorGroupRequest {
  /**
   * <p>The Amazon Chime Voice Connector group ID.</p>
   * @public
   */
  VoiceConnectorGroupId: string | undefined;

  /**
   * <p>The name of the Amazon Chime Voice Connector group.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The <code>VoiceConnectorItems</code> to associate with the group.</p>
   * @public
   */
  VoiceConnectorItems: VoiceConnectorItem[] | undefined;
}

/**
 * @public
 */
export interface UpdateVoiceConnectorGroupResponse {
  /**
   * <p>The updated Amazon Chime Voice Connector group details.</p>
   * @public
   */
  VoiceConnectorGroup?: VoiceConnectorGroup | undefined;
}

/**
 * @public
 */
export interface ValidateE911AddressRequest {
  /**
   * <p>The AWS account ID.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The address street number, such as <code>200</code> or <code>2121</code>.</p>
   * @public
   */
  StreetNumber: string | undefined;

  /**
   * <p>The address street information, such as <code>8th Avenue</code>.</p>
   * @public
   */
  StreetInfo: string | undefined;

  /**
   * <p>The address city, such as <code>Portland</code>.</p>
   * @public
   */
  City: string | undefined;

  /**
   * <p>The address state, such as <code>ME</code>.</p>
   * @public
   */
  State: string | undefined;

  /**
   * <p>The address country, such as <code>US</code>. </p>
   * @public
   */
  Country: string | undefined;

  /**
   * <p>The address postal code, such as <code>04352</code>.</p>
   * @public
   */
  PostalCode: string | undefined;
}

/**
 * @public
 */
export interface ValidateE911AddressResponse {
  /**
   * <p>Number indicating the result of address validation.
   *             <code>0</code> means the address was perfect as is and successfully validated.
   *             <code>1</code> means the address was corrected. <code>2</code> means the address sent was
   *             not close enough and was not validated.</p>
   * @public
   */
  ValidationResult?: number | undefined;

  /**
   * <p>The ID that represents the address.</p>
   * @public
   */
  AddressExternalId?: string | undefined;

  /**
   * <p>The validated address.</p>
   * @public
   */
  Address?: Address | undefined;

  /**
   * <p>The list of address suggestions.</p>
   * @public
   */
  CandidateAddressList?: CandidateAddress[] | undefined;
}

/**
 * @internal
 */
export const GetRoomResponseFilterSensitiveLog = (obj: GetRoomResponse): any => ({
  ...obj,
  ...(obj.Room && { Room: RoomFilterSensitiveLog(obj.Room) }),
});

/**
 * @internal
 */
export const GetSipMediaApplicationResponseFilterSensitiveLog = (obj: GetSipMediaApplicationResponse): any => ({
  ...obj,
  ...(obj.SipMediaApplication && {
    SipMediaApplication: SipMediaApplicationFilterSensitiveLog(obj.SipMediaApplication),
  }),
});

/**
 * @internal
 */
export const GetUserResponseFilterSensitiveLog = (obj: GetUserResponse): any => ({
  ...obj,
  ...(obj.User && { User: UserFilterSensitiveLog(obj.User) }),
});

/**
 * @internal
 */
export const GetVoiceConnectorEmergencyCallingConfigurationResponseFilterSensitiveLog = (
  obj: GetVoiceConnectorEmergencyCallingConfigurationResponse
): any => ({
  ...obj,
  ...(obj.EmergencyCallingConfiguration && {
    EmergencyCallingConfiguration: EmergencyCallingConfigurationFilterSensitiveLog(obj.EmergencyCallingConfiguration),
  }),
});

/**
 * @internal
 */
export const ProxyFilterSensitiveLog = (obj: Proxy): any => ({
  ...obj,
  ...(obj.FallBackPhoneNumber && { FallBackPhoneNumber: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetVoiceConnectorProxyResponseFilterSensitiveLog = (obj: GetVoiceConnectorProxyResponse): any => ({
  ...obj,
  ...(obj.Proxy && { Proxy: ProxyFilterSensitiveLog(obj.Proxy) }),
});

/**
 * @internal
 */
export const TerminationFilterSensitiveLog = (obj: Termination): any => ({
  ...obj,
  ...(obj.DefaultPhoneNumber && { DefaultPhoneNumber: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetVoiceConnectorTerminationResponseFilterSensitiveLog = (
  obj: GetVoiceConnectorTerminationResponse
): any => ({
  ...obj,
  ...(obj.Termination && { Termination: TerminationFilterSensitiveLog(obj.Termination) }),
});

/**
 * @internal
 */
export const InviteFilterSensitiveLog = (obj: Invite): any => ({
  ...obj,
  ...(obj.EmailAddress && { EmailAddress: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const InviteUsersRequestFilterSensitiveLog = (obj: InviteUsersRequest): any => ({
  ...obj,
  ...(obj.UserEmailList && { UserEmailList: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const InviteUsersResponseFilterSensitiveLog = (obj: InviteUsersResponse): any => ({
  ...obj,
  ...(obj.Invites && { Invites: obj.Invites.map((item) => InviteFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ListAccountsRequestFilterSensitiveLog = (obj: ListAccountsRequest): any => ({
  ...obj,
  ...(obj.UserEmail && { UserEmail: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListAppInstanceAdminsRequestFilterSensitiveLog = (obj: ListAppInstanceAdminsRequest): any => ({
  ...obj,
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListAppInstanceAdminsResponseFilterSensitiveLog = (obj: ListAppInstanceAdminsResponse): any => ({
  ...obj,
  ...(obj.AppInstanceAdmins && {
    AppInstanceAdmins: obj.AppInstanceAdmins.map((item) => AppInstanceAdminSummaryFilterSensitiveLog(item)),
  }),
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListAppInstancesRequestFilterSensitiveLog = (obj: ListAppInstancesRequest): any => ({
  ...obj,
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListAppInstancesResponseFilterSensitiveLog = (obj: ListAppInstancesResponse): any => ({
  ...obj,
  ...(obj.AppInstances && { AppInstances: obj.AppInstances.map((item) => AppInstanceSummaryFilterSensitiveLog(item)) }),
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListAppInstanceUsersRequestFilterSensitiveLog = (obj: ListAppInstanceUsersRequest): any => ({
  ...obj,
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListAppInstanceUsersResponseFilterSensitiveLog = (obj: ListAppInstanceUsersResponse): any => ({
  ...obj,
  ...(obj.AppInstanceUsers && {
    AppInstanceUsers: obj.AppInstanceUsers.map((item) => AppInstanceUserSummaryFilterSensitiveLog(item)),
  }),
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListAttendeesResponseFilterSensitiveLog = (obj: ListAttendeesResponse): any => ({
  ...obj,
  ...(obj.Attendees && { Attendees: obj.Attendees.map((item) => AttendeeFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ListAttendeeTagsResponseFilterSensitiveLog = (obj: ListAttendeeTagsResponse): any => ({
  ...obj,
  ...(obj.Tags && { Tags: obj.Tags.map((item) => TagFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ListBotsResponseFilterSensitiveLog = (obj: ListBotsResponse): any => ({
  ...obj,
  ...(obj.Bots && { Bots: obj.Bots.map((item) => BotFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ListChannelBansRequestFilterSensitiveLog = (obj: ListChannelBansRequest): any => ({
  ...obj,
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListChannelBansResponseFilterSensitiveLog = (obj: ListChannelBansResponse): any => ({
  ...obj,
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
  ...(obj.ChannelBans && { ChannelBans: obj.ChannelBans.map((item) => ChannelBanSummaryFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ListChannelMembershipsRequestFilterSensitiveLog = (obj: ListChannelMembershipsRequest): any => ({
  ...obj,
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListChannelMembershipsResponseFilterSensitiveLog = (obj: ListChannelMembershipsResponse): any => ({
  ...obj,
  ...(obj.ChannelMemberships && {
    ChannelMemberships: obj.ChannelMemberships.map((item) => ChannelMembershipSummaryFilterSensitiveLog(item)),
  }),
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListChannelMembershipsForAppInstanceUserRequestFilterSensitiveLog = (
  obj: ListChannelMembershipsForAppInstanceUserRequest
): any => ({
  ...obj,
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListChannelMembershipsForAppInstanceUserResponseFilterSensitiveLog = (
  obj: ListChannelMembershipsForAppInstanceUserResponse
): any => ({
  ...obj,
  ...(obj.ChannelMemberships && {
    ChannelMemberships: obj.ChannelMemberships.map((item) =>
      ChannelMembershipForAppInstanceUserSummaryFilterSensitiveLog(item)
    ),
  }),
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListChannelMessagesRequestFilterSensitiveLog = (obj: ListChannelMessagesRequest): any => ({
  ...obj,
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListChannelMessagesResponseFilterSensitiveLog = (obj: ListChannelMessagesResponse): any => ({
  ...obj,
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
  ...(obj.ChannelMessages && {
    ChannelMessages: obj.ChannelMessages.map((item) => ChannelMessageSummaryFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const ListChannelModeratorsRequestFilterSensitiveLog = (obj: ListChannelModeratorsRequest): any => ({
  ...obj,
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListChannelModeratorsResponseFilterSensitiveLog = (obj: ListChannelModeratorsResponse): any => ({
  ...obj,
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
  ...(obj.ChannelModerators && {
    ChannelModerators: obj.ChannelModerators.map((item) => ChannelModeratorSummaryFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const ListChannelsRequestFilterSensitiveLog = (obj: ListChannelsRequest): any => ({
  ...obj,
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListChannelsResponseFilterSensitiveLog = (obj: ListChannelsResponse): any => ({
  ...obj,
  ...(obj.Channels && { Channels: obj.Channels.map((item) => ChannelSummaryFilterSensitiveLog(item)) }),
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListChannelsModeratedByAppInstanceUserRequestFilterSensitiveLog = (
  obj: ListChannelsModeratedByAppInstanceUserRequest
): any => ({
  ...obj,
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListChannelsModeratedByAppInstanceUserResponseFilterSensitiveLog = (
  obj: ListChannelsModeratedByAppInstanceUserResponse
): any => ({
  ...obj,
  ...(obj.Channels && {
    Channels: obj.Channels.map((item) => ChannelModeratedByAppInstanceUserSummaryFilterSensitiveLog(item)),
  }),
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListMediaCapturePipelinesResponseFilterSensitiveLog = (obj: ListMediaCapturePipelinesResponse): any => ({
  ...obj,
  ...(obj.MediaCapturePipelines && {
    MediaCapturePipelines: obj.MediaCapturePipelines.map((item) => MediaCapturePipelineFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const ListMeetingsResponseFilterSensitiveLog = (obj: ListMeetingsResponse): any => ({
  ...obj,
  ...(obj.Meetings && { Meetings: obj.Meetings.map((item) => MeetingFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ListMeetingTagsResponseFilterSensitiveLog = (obj: ListMeetingTagsResponse): any => ({
  ...obj,
  ...(obj.Tags && { Tags: obj.Tags.map((item) => TagFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ListPhoneNumberOrdersResponseFilterSensitiveLog = (obj: ListPhoneNumberOrdersResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPhoneNumbersResponseFilterSensitiveLog = (obj: ListPhoneNumbersResponse): any => ({
  ...obj,
  ...(obj.PhoneNumbers && { PhoneNumbers: obj.PhoneNumbers.map((item) => PhoneNumberFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ListProxySessionsResponseFilterSensitiveLog = (obj: ListProxySessionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRoomMembershipsResponseFilterSensitiveLog = (obj: ListRoomMembershipsResponse): any => ({
  ...obj,
  ...(obj.RoomMemberships && {
    RoomMemberships: obj.RoomMemberships.map((item) => RoomMembershipFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const ListRoomsResponseFilterSensitiveLog = (obj: ListRoomsResponse): any => ({
  ...obj,
  ...(obj.Rooms && { Rooms: obj.Rooms.map((item) => RoomFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ListSipMediaApplicationsResponseFilterSensitiveLog = (obj: ListSipMediaApplicationsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
  ...(obj.ResourceARN && { ResourceARN: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
  ...(obj.Tags && { Tags: obj.Tags.map((item) => TagFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ListUsersRequestFilterSensitiveLog = (obj: ListUsersRequest): any => ({
  ...obj,
  ...(obj.UserEmail && { UserEmail: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListUsersResponseFilterSensitiveLog = (obj: ListUsersResponse): any => ({
  ...obj,
  ...(obj.Users && { Users: obj.Users.map((item) => UserFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ListVoiceConnectorTerminationCredentialsResponseFilterSensitiveLog = (
  obj: ListVoiceConnectorTerminationCredentialsResponse
): any => ({
  ...obj,
  ...(obj.Usernames && { Usernames: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PutAppInstanceStreamingConfigurationsRequestFilterSensitiveLog = (
  obj: PutAppInstanceStreamingConfigurationsRequest
): any => ({
  ...obj,
  ...(obj.AppInstanceStreamingConfigurations && {
    AppInstanceStreamingConfigurations: obj.AppInstanceStreamingConfigurations.map((item) =>
      AppInstanceStreamingConfigurationFilterSensitiveLog(item)
    ),
  }),
});

/**
 * @internal
 */
export const PutAppInstanceStreamingConfigurationsResponseFilterSensitiveLog = (
  obj: PutAppInstanceStreamingConfigurationsResponse
): any => ({
  ...obj,
  ...(obj.AppInstanceStreamingConfigurations && {
    AppInstanceStreamingConfigurations: obj.AppInstanceStreamingConfigurations.map((item) =>
      AppInstanceStreamingConfigurationFilterSensitiveLog(item)
    ),
  }),
});

/**
 * @internal
 */
export const PutEventsConfigurationRequestFilterSensitiveLog = (obj: PutEventsConfigurationRequest): any => ({
  ...obj,
  ...(obj.OutboundEventsHTTPSEndpoint && { OutboundEventsHTTPSEndpoint: SENSITIVE_STRING }),
  ...(obj.LambdaFunctionArn && { LambdaFunctionArn: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PutEventsConfigurationResponseFilterSensitiveLog = (obj: PutEventsConfigurationResponse): any => ({
  ...obj,
  ...(obj.EventsConfiguration && {
    EventsConfiguration: EventsConfigurationFilterSensitiveLog(obj.EventsConfiguration),
  }),
});

/**
 * @internal
 */
export const PutVoiceConnectorEmergencyCallingConfigurationRequestFilterSensitiveLog = (
  obj: PutVoiceConnectorEmergencyCallingConfigurationRequest
): any => ({
  ...obj,
  ...(obj.EmergencyCallingConfiguration && {
    EmergencyCallingConfiguration: EmergencyCallingConfigurationFilterSensitiveLog(obj.EmergencyCallingConfiguration),
  }),
});

/**
 * @internal
 */
export const PutVoiceConnectorEmergencyCallingConfigurationResponseFilterSensitiveLog = (
  obj: PutVoiceConnectorEmergencyCallingConfigurationResponse
): any => ({
  ...obj,
  ...(obj.EmergencyCallingConfiguration && {
    EmergencyCallingConfiguration: EmergencyCallingConfigurationFilterSensitiveLog(obj.EmergencyCallingConfiguration),
  }),
});

/**
 * @internal
 */
export const PutVoiceConnectorProxyRequestFilterSensitiveLog = (obj: PutVoiceConnectorProxyRequest): any => ({
  ...obj,
  ...(obj.FallBackPhoneNumber && { FallBackPhoneNumber: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PutVoiceConnectorProxyResponseFilterSensitiveLog = (obj: PutVoiceConnectorProxyResponse): any => ({
  ...obj,
  ...(obj.Proxy && { Proxy: ProxyFilterSensitiveLog(obj.Proxy) }),
});

/**
 * @internal
 */
export const PutVoiceConnectorTerminationRequestFilterSensitiveLog = (
  obj: PutVoiceConnectorTerminationRequest
): any => ({
  ...obj,
  ...(obj.Termination && { Termination: TerminationFilterSensitiveLog(obj.Termination) }),
});

/**
 * @internal
 */
export const PutVoiceConnectorTerminationResponseFilterSensitiveLog = (
  obj: PutVoiceConnectorTerminationResponse
): any => ({
  ...obj,
  ...(obj.Termination && { Termination: TerminationFilterSensitiveLog(obj.Termination) }),
});

/**
 * @internal
 */
export const PutVoiceConnectorTerminationCredentialsRequestFilterSensitiveLog = (
  obj: PutVoiceConnectorTerminationCredentialsRequest
): any => ({
  ...obj,
  ...(obj.Credentials && { Credentials: obj.Credentials.map((item) => CredentialFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const RegenerateSecurityTokenResponseFilterSensitiveLog = (obj: RegenerateSecurityTokenResponse): any => ({
  ...obj,
  ...(obj.Bot && { Bot: BotFilterSensitiveLog(obj.Bot) }),
});

/**
 * @internal
 */
export const ResetPersonalPINResponseFilterSensitiveLog = (obj: ResetPersonalPINResponse): any => ({
  ...obj,
  ...(obj.User && { User: UserFilterSensitiveLog(obj.User) }),
});

/**
 * @internal
 */
export const RestorePhoneNumberResponseFilterSensitiveLog = (obj: RestorePhoneNumberResponse): any => ({
  ...obj,
  ...(obj.PhoneNumber && { PhoneNumber: PhoneNumberFilterSensitiveLog(obj.PhoneNumber) }),
});

/**
 * @internal
 */
export const SearchAvailablePhoneNumbersResponseFilterSensitiveLog = (
  obj: SearchAvailablePhoneNumbersResponse
): any => ({
  ...obj,
  ...(obj.E164PhoneNumbers && { E164PhoneNumbers: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SendChannelMessageRequestFilterSensitiveLog = (obj: SendChannelMessageRequest): any => ({
  ...obj,
  ...(obj.Content && { Content: SENSITIVE_STRING }),
  ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
  ...(obj.ClientRequestToken && { ClientRequestToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TagAttendeeRequestFilterSensitiveLog = (obj: TagAttendeeRequest): any => ({
  ...obj,
  ...(obj.Tags && { Tags: obj.Tags.map((item) => TagFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const TagMeetingRequestFilterSensitiveLog = (obj: TagMeetingRequest): any => ({
  ...obj,
  ...(obj.Tags && { Tags: obj.Tags.map((item) => TagFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
  ...(obj.ResourceARN && { ResourceARN: SENSITIVE_STRING }),
  ...(obj.Tags && { Tags: obj.Tags.map((item) => TagFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const UntagAttendeeRequestFilterSensitiveLog = (obj: UntagAttendeeRequest): any => ({
  ...obj,
  ...(obj.TagKeys && { TagKeys: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UntagMeetingRequestFilterSensitiveLog = (obj: UntagMeetingRequest): any => ({
  ...obj,
  ...(obj.TagKeys && { TagKeys: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
  ...(obj.ResourceARN && { ResourceARN: SENSITIVE_STRING }),
  ...(obj.TagKeys && { TagKeys: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateAppInstanceRequestFilterSensitiveLog = (obj: UpdateAppInstanceRequest): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateAppInstanceUserRequestFilterSensitiveLog = (obj: UpdateAppInstanceUserRequest): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateBotResponseFilterSensitiveLog = (obj: UpdateBotResponse): any => ({
  ...obj,
  ...(obj.Bot && { Bot: BotFilterSensitiveLog(obj.Bot) }),
});

/**
 * @internal
 */
export const UpdateChannelRequestFilterSensitiveLog = (obj: UpdateChannelRequest): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateChannelMessageRequestFilterSensitiveLog = (obj: UpdateChannelMessageRequest): any => ({
  ...obj,
  ...(obj.Content && { Content: SENSITIVE_STRING }),
  ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdatePhoneNumberRequestFilterSensitiveLog = (obj: UpdatePhoneNumberRequest): any => ({
  ...obj,
  ...(obj.CallingName && { CallingName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdatePhoneNumberResponseFilterSensitiveLog = (obj: UpdatePhoneNumberResponse): any => ({
  ...obj,
  ...(obj.PhoneNumber && { PhoneNumber: PhoneNumberFilterSensitiveLog(obj.PhoneNumber) }),
});

/**
 * @internal
 */
export const UpdatePhoneNumberSettingsRequestFilterSensitiveLog = (obj: UpdatePhoneNumberSettingsRequest): any => ({
  ...obj,
  ...(obj.CallingName && { CallingName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateProxySessionResponseFilterSensitiveLog = (obj: UpdateProxySessionResponse): any => ({
  ...obj,
  ...(obj.ProxySession && { ProxySession: ProxySessionFilterSensitiveLog(obj.ProxySession) }),
});

/**
 * @internal
 */
export const UpdateRoomRequestFilterSensitiveLog = (obj: UpdateRoomRequest): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateRoomResponseFilterSensitiveLog = (obj: UpdateRoomResponse): any => ({
  ...obj,
  ...(obj.Room && { Room: RoomFilterSensitiveLog(obj.Room) }),
});

/**
 * @internal
 */
export const UpdateRoomMembershipResponseFilterSensitiveLog = (obj: UpdateRoomMembershipResponse): any => ({
  ...obj,
  ...(obj.RoomMembership && { RoomMembership: RoomMembershipFilterSensitiveLog(obj.RoomMembership) }),
});

/**
 * @internal
 */
export const UpdateSipMediaApplicationRequestFilterSensitiveLog = (obj: UpdateSipMediaApplicationRequest): any => ({
  ...obj,
  ...(obj.Endpoints && { Endpoints: obj.Endpoints.map((item) => SipMediaApplicationEndpointFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const UpdateSipMediaApplicationResponseFilterSensitiveLog = (obj: UpdateSipMediaApplicationResponse): any => ({
  ...obj,
  ...(obj.SipMediaApplication && {
    SipMediaApplication: SipMediaApplicationFilterSensitiveLog(obj.SipMediaApplication),
  }),
});

/**
 * @internal
 */
export const UpdateSipMediaApplicationCallRequestFilterSensitiveLog = (
  obj: UpdateSipMediaApplicationCallRequest
): any => ({
  ...obj,
  ...(obj.Arguments && { Arguments: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateUserRequestFilterSensitiveLog = (obj: UpdateUserRequest): any => ({
  ...obj,
  ...(obj.AlexaForBusinessMetadata && {
    AlexaForBusinessMetadata: AlexaForBusinessMetadataFilterSensitiveLog(obj.AlexaForBusinessMetadata),
  }),
});

/**
 * @internal
 */
export const UpdateUserResponseFilterSensitiveLog = (obj: UpdateUserResponse): any => ({
  ...obj,
  ...(obj.User && { User: UserFilterSensitiveLog(obj.User) }),
});

/**
 * @internal
 */
export const ValidateE911AddressRequestFilterSensitiveLog = (obj: ValidateE911AddressRequest): any => ({
  ...obj,
  ...(obj.StreetNumber && { StreetNumber: SENSITIVE_STRING }),
  ...(obj.StreetInfo && { StreetInfo: SENSITIVE_STRING }),
  ...(obj.City && { City: SENSITIVE_STRING }),
  ...(obj.State && { State: SENSITIVE_STRING }),
  ...(obj.Country && { Country: SENSITIVE_STRING }),
  ...(obj.PostalCode && { PostalCode: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ValidateE911AddressResponseFilterSensitiveLog = (obj: ValidateE911AddressResponse): any => ({
  ...obj,
  ...(obj.Address && { Address: AddressFilterSensitiveLog(obj.Address) }),
  ...(obj.CandidateAddressList && {
    CandidateAddressList: obj.CandidateAddressList.map((item) => CandidateAddressFilterSensitiveLog(item)),
  }),
});
