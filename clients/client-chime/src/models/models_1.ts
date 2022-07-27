// smithy-typescript generated code
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";

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
 */
export interface RoomRetentionSettings {
  /**
   * <p>The number of days for which to retain chat-room messages.</p>
   */
  RetentionDays?: number;
}

/**
 * <p>The retention settings for an Amazon Chime Enterprise account that determine how long to retain items such as chat-room messages and chat-conversation messages.</p>
 */
export interface RetentionSettings {
  /**
   * <p>The chat room retention settings.</p>
   */
  RoomRetentionSettings?: RoomRetentionSettings;

  /**
   * <p>The chat conversation retention settings.</p>
   */
  ConversationRetentionSettings?: ConversationRetentionSettings;
}

export interface GetRetentionSettingsResponse {
  /**
   * <p>The retention settings.</p>
   */
  RetentionSettings?: RetentionSettings;

  /**
   * <p>The timestamp representing the time at which the specified items are permanently deleted, in ISO 8601 format.</p>
   */
  InitiateDeletionTimestamp?: Date;
}

export interface GetRoomRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The room ID.</p>
   */
  RoomId: string | undefined;
}

export interface GetRoomResponse {
  /**
   * <p>The room details.</p>
   */
  Room?: Room;
}

export interface GetSipMediaApplicationRequest {
  /**
   * <p>The SIP media application ID.</p>
   */
  SipMediaApplicationId: string | undefined;
}

export interface GetSipMediaApplicationResponse {
  /**
   * <p>The SIP media application details.</p>
   */
  SipMediaApplication?: SipMediaApplication;
}

export interface GetSipMediaApplicationLoggingConfigurationRequest {
  /**
   * <p>The SIP media application ID.</p>
   */
  SipMediaApplicationId: string | undefined;
}

/**
 * <p>Logging configuration of the SIP media application.</p>
 */
export interface SipMediaApplicationLoggingConfiguration {
  /**
   * <p>Enables application message logs for the SIP media application.</p>
   */
  EnableSipMediaApplicationMessageLogs?: boolean;
}

export interface GetSipMediaApplicationLoggingConfigurationResponse {
  /**
   * <p>The actual logging configuration.</p>
   */
  SipMediaApplicationLoggingConfiguration?: SipMediaApplicationLoggingConfiguration;
}

export interface GetSipRuleRequest {
  /**
   * <p>The SIP rule ID.</p>
   */
  SipRuleId: string | undefined;
}

export interface GetSipRuleResponse {
  /**
   * <p>The SIP rule details.</p>
   */
  SipRule?: SipRule;
}

export interface GetUserRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The user ID.</p>
   */
  UserId: string | undefined;
}

export interface GetUserResponse {
  /**
   * <p>The user details.</p>
   */
  User?: User;
}

export interface GetUserSettingsRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The user ID.</p>
   */
  UserId: string | undefined;
}

/**
 * <p>Settings that allow management of telephony permissions for an Amazon Chime user, such as
 *             inbound and outbound calling and text messaging.</p>
 */
export interface TelephonySettings {
  /**
   * <p>Allows or denies inbound calling.</p>
   */
  InboundCalling: boolean | undefined;

  /**
   * <p>Allows or denies outbound calling.</p>
   */
  OutboundCalling: boolean | undefined;

  /**
   * <p>Allows or denies SMS messaging.</p>
   */
  SMS: boolean | undefined;
}

/**
 * <p>Settings associated with an Amazon Chime user, including inbound and outbound calling and text
 *             messaging.</p>
 */
export interface UserSettings {
  /**
   * <p>The telephony settings associated with the user.</p>
   */
  Telephony: TelephonySettings | undefined;
}

export interface GetUserSettingsResponse {
  /**
   * <p>The user settings.</p>
   */
  UserSettings?: UserSettings;
}

export interface GetVoiceConnectorRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

export interface GetVoiceConnectorResponse {
  /**
   * <p>The Amazon Chime Voice Connector details.</p>
   */
  VoiceConnector?: VoiceConnector;
}

export interface GetVoiceConnectorEmergencyCallingConfigurationRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

export interface GetVoiceConnectorEmergencyCallingConfigurationResponse {
  /**
   * <p>The emergency calling configuration details.</p>
   */
  EmergencyCallingConfiguration?: EmergencyCallingConfiguration;
}

export interface GetVoiceConnectorGroupRequest {
  /**
   * <p>The Amazon Chime Voice Connector group ID.</p>
   */
  VoiceConnectorGroupId: string | undefined;
}

export interface GetVoiceConnectorGroupResponse {
  /**
   * <p>The Amazon Chime Voice Connector group details.</p>
   */
  VoiceConnectorGroup?: VoiceConnectorGroup;
}

export interface GetVoiceConnectorLoggingConfigurationRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

/**
 * <p>The logging configuration associated with an Amazon Chime Voice Connector. Specifies whether SIP message logs are enabled for sending to Amazon CloudWatch Logs.</p>
 */
export interface LoggingConfiguration {
  /**
   * <p>When true, enables SIP message logs for sending to Amazon CloudWatch Logs.</p>
   */
  EnableSIPLogs?: boolean;

  /**
   * <p>Boolean that enables the logging of Voice Connector metrics to Cloudwatch.</p>
   */
  EnableMediaMetricLogs?: boolean;
}

export interface GetVoiceConnectorLoggingConfigurationResponse {
  /**
   * <p>The logging configuration details.</p>
   */
  LoggingConfiguration?: LoggingConfiguration;
}

export interface GetVoiceConnectorOriginationRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

export enum OriginationRouteProtocol {
  TCP = "TCP",
  UDP = "UDP",
}

/**
 * <p>Origination routes define call distribution properties for your SIP hosts to receive inbound
 *             calls using your Amazon Chime Voice Connector. Limit: Ten origination routes for each
 *             Amazon Chime Voice Connector.</p>
 *          <note>
 *             <p>The parameters listed below are not required, but you must use at least one. </p>
 *          </note>
 */
export interface OriginationRoute {
  /**
   * <p>The FQDN or IP address to contact for origination traffic.</p>
   */
  Host?: string;

  /**
   * <p>The designated origination route port. Defaults to 5060.</p>
   */
  Port?: number;

  /**
   * <p>The protocol to use for the origination route. Encryption-enabled Amazon Chime Voice Connectors use TCP protocol by default.</p>
   */
  Protocol?: OriginationRouteProtocol | string;

  /**
   * <p>The priority associated with the host, with 1 being the highest priority. Higher priority
   *             hosts are attempted first.</p>
   */
  Priority?: number;

  /**
   * <p>The weight associated with the host. If hosts are equal in priority, calls are redistributed among
   *             them based on their relative weight.</p>
   */
  Weight?: number;
}

/**
 * <p>Origination settings enable your SIP hosts to receive inbound calls using your Amazon Chime
 *             Voice Connector.</p>
 *          <note>
 *             <p>The parameters listed below are not required, but you must use at least one. </p>
 *          </note>
 */
export interface Origination {
  /**
   * <p>The call distribution properties defined for your SIP hosts. Valid range: Minimum value of 1.
   *     Maximum value of 20. This parameter is not required, but you must specify this parameter or <code>Disabled</code>.</p>
   */
  Routes?: OriginationRoute[];

  /**
   * <p>When origination settings are disabled, inbound calls are not enabled for your Amazon Chime
   *             Voice Connector. This parameter is not required, but you must specify this parameter or <code>Routes</code>.</p>
   */
  Disabled?: boolean;
}

export interface GetVoiceConnectorOriginationResponse {
  /**
   * <p>The origination setting details.</p>
   */
  Origination?: Origination;
}

export interface GetVoiceConnectorProxyRequest {
  /**
   * <p>The Amazon Chime voice connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

/**
 * <p>The proxy configuration for an Amazon Chime Voice Connector.</p>
 */
export interface Proxy {
  /**
   * <p>The default number of minutes allowed for proxy sessions.</p>
   */
  DefaultSessionExpiryMinutes?: number;

  /**
   * <p>When true, stops proxy sessions from being created on the specified Amazon Chime Voice Connector.</p>
   */
  Disabled?: boolean;

  /**
   * <p>The phone number to route calls to after a proxy session expires.</p>
   */
  FallBackPhoneNumber?: string;

  /**
   * <p>The countries for proxy phone numbers to be selected from.</p>
   */
  PhoneNumberCountries?: string[];
}

export interface GetVoiceConnectorProxyResponse {
  /**
   * <p>The proxy configuration details.</p>
   */
  Proxy?: Proxy;
}

export interface GetVoiceConnectorStreamingConfigurationRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

export enum NotificationTarget {
  EventBridge = "EventBridge",
  SNS = "SNS",
  SQS = "SQS",
}

/**
 * <p>The targeted recipient for a streaming configuration notification.</p>
 */
export interface StreamingNotificationTarget {
  /**
   * <p>The streaming notification target.</p>
   */
  NotificationTarget: NotificationTarget | string | undefined;
}

/**
 * <p>The streaming configuration associated with an Amazon Chime Voice Connector. Specifies whether
 *             media streaming is enabled for sending to Amazon Kinesis, and shows the retention period
 *             for the Amazon Kinesis data, in hours.</p>
 */
export interface StreamingConfiguration {
  /**
   * <p>The retention period, in hours, for the Amazon Kinesis data.</p>
   */
  DataRetentionInHours: number | undefined;

  /**
   * <p>When true, media streaming to Amazon Kinesis is turned off.</p>
   */
  Disabled?: boolean;

  /**
   * <p>The streaming notification targets.</p>
   */
  StreamingNotificationTargets?: StreamingNotificationTarget[];
}

export interface GetVoiceConnectorStreamingConfigurationResponse {
  /**
   * <p>The streaming configuration details.</p>
   */
  StreamingConfiguration?: StreamingConfiguration;
}

export interface GetVoiceConnectorTerminationRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

/**
 * <p>Termination settings enable your SIP hosts to make outbound calls using your Amazon Chime
 *             Voice Connector.</p>
 */
export interface Termination {
  /**
   * <p>The limit on calls per second. Max value based on account service quota. Default value of
   *             1.</p>
   */
  CpsLimit?: number;

  /**
   * <p>The default caller ID phone number.</p>
   */
  DefaultPhoneNumber?: string;

  /**
   * <p>The countries to which calls are allowed, in ISO 3166-1 alpha-2 format. Required.</p>
   */
  CallingRegions?: string[];

  /**
   * <p>The IP addresses allowed to make calls, in CIDR format. Required.</p>
   */
  CidrAllowedList?: string[];

  /**
   * <p>When termination settings are disabled, outbound calls can not be made.</p>
   */
  Disabled?: boolean;
}

export interface GetVoiceConnectorTerminationResponse {
  /**
   * <p>The termination setting details.</p>
   */
  Termination?: Termination;
}

export interface GetVoiceConnectorTerminationHealthRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

/**
 * <p>The termination health details, including the source IP address and timestamp of the last
 *             successful SIP <code>OPTIONS</code> message from your SIP infrastructure.</p>
 */
export interface TerminationHealth {
  /**
   * <p>The timestamp, in ISO 8601 format.</p>
   */
  Timestamp?: Date;

  /**
   * <p>The source IP address.</p>
   */
  Source?: string;
}

export interface GetVoiceConnectorTerminationHealthResponse {
  /**
   * <p>The termination health details.</p>
   */
  TerminationHealth?: TerminationHealth;
}

/**
 * <p>Invitation object returned after emailing users to invite them to join the Amazon Chime
 *                 <code>Team</code> account.</p>
 */
export interface Invite {
  /**
   * <p>The invite ID.</p>
   */
  InviteId?: string;

  /**
   * <p>The status of the invite.</p>
   */
  Status?: InviteStatus | string;

  /**
   * <p>The email address to which the invite is sent.</p>
   */
  EmailAddress?: string;

  /**
   * <p>The status of the invite email.</p>
   */
  EmailStatus?: EmailStatus | string;
}

export interface InviteUsersRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The user email addresses to which to send the email invitation.</p>
   */
  UserEmailList: string[] | undefined;

  /**
   * <p>The user type.</p>
   */
  UserType?: UserType | string;
}

export interface InviteUsersResponse {
  /**
   * <p>The email invitation details.</p>
   */
  Invites?: Invite[];
}

export interface ListAccountsRequest {
  /**
   * <p>Amazon Chime account name prefix with which to filter results.</p>
   */
  Name?: string;

  /**
   * <p>User email address with which to filter results.</p>
   */
  UserEmail?: string;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in a single call. Defaults to 100.</p>
   */
  MaxResults?: number;
}

export interface ListAccountsResponse {
  /**
   * <p>List of Amazon Chime accounts and account details.</p>
   */
  Accounts?: Account[];

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

export interface ListAppInstanceAdminsRequest {
  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn: string | undefined;

  /**
   * <p>The maximum number of administrators that you want to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token returned from previous API requests until the number of administrators is reached.</p>
   */
  NextToken?: string;
}

export interface ListAppInstanceAdminsResponse {
  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn?: string;

  /**
   * <p>The information for each administrator.</p>
   */
  AppInstanceAdmins?: AppInstanceAdminSummary[];

  /**
   * <p>The token returned from previous API requests until the number of administrators is reached.</p>
   */
  NextToken?: string;
}

export interface ListAppInstancesRequest {
  /**
   * <p>The maximum number of <code>AppInstance</code>s that you want to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token passed by previous API requests until you reach the maximum number of <code>AppInstance</code>s.</p>
   */
  NextToken?: string;
}

export interface ListAppInstancesResponse {
  /**
   * <p>The information for each <code>AppInstance</code>.</p>
   */
  AppInstances?: AppInstanceSummary[];

  /**
   * <p>The token passed by previous API requests until the maximum number of <code>AppInstance</code>s is reached.</p>
   */
  NextToken?: string;
}

export interface ListAppInstanceUsersRequest {
  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn: string | undefined;

  /**
   * <p>The maximum number of requests that you want returned.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token passed by previous API calls until all requested users are returned.</p>
   */
  NextToken?: string;
}

export interface ListAppInstanceUsersResponse {
  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn?: string;

  /**
   * <p>The information for each requested <code>AppInstanceUser</code>.</p>
   */
  AppInstanceUsers?: AppInstanceUserSummary[];

  /**
   * <p>The token passed by previous API calls until all requested users are returned.</p>
   */
  NextToken?: string;
}

export interface ListAttendeesRequest {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;
}

export interface ListAttendeesResponse {
  /**
   * <p>The Amazon Chime SDK attendee information.</p>
   */
  Attendees?: Attendee[];

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

export interface ListAttendeeTagsRequest {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;

  /**
   * <p>The Amazon Chime SDK attendee ID.</p>
   */
  AttendeeId: string | undefined;
}

export interface ListAttendeeTagsResponse {
  /**
   * <p>A list of tag key-value pairs.</p>
   */
  Tags?: Tag[];
}

export interface ListBotsRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call. The default is 10.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

export interface ListBotsResponse {
  /**
   * <p>List of bots and bot details.</p>
   */
  Bots?: Bot[];

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

export interface ListChannelBansRequest {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;

  /**
   * <p>The maximum number of bans that you want returned.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token passed by previous API calls until all requested bans are returned.</p>
   */
  NextToken?: string;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

export interface ListChannelBansResponse {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn?: string;

  /**
   * <p>The token passed by previous API calls until all requested bans are returned.</p>
   */
  NextToken?: string;

  /**
   * <p>The information for each requested ban.</p>
   */
  ChannelBans?: ChannelBanSummary[];
}

export interface ListChannelMembershipsRequest {
  /**
   * <p>The maximum number of channel memberships that you want returned.</p>
   */
  ChannelArn: string | undefined;

  /**
   * <p>The membership type of a user, <code>DEFAULT</code> or <code>HIDDEN</code>. Default
   *          members are always returned as part of <code>ListChannelMemberships</code>. Hidden members
   *          are only returned if the type filter in <code>ListChannelMemberships</code> equals
   *             <code>HIDDEN</code>. Otherwise hidden members are not returned.</p>
   */
  Type?: ChannelMembershipType | string;

  /**
   * <p>The maximum number of channel memberships that you want returned.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token passed by previous API calls until all requested channel memberships are
   *          returned.</p>
   */
  NextToken?: string;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

export interface ListChannelMembershipsResponse {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn?: string;

  /**
   * <p>The information for the requested channel memberships.</p>
   */
  ChannelMemberships?: ChannelMembershipSummary[];

  /**
   * <p>The token passed by previous API calls until all requested channel memberships are
   *          returned.</p>
   */
  NextToken?: string;
}

export interface ListChannelMembershipsForAppInstanceUserRequest {
  /**
   * <p>The ARN of the <code>AppInstanceUser</code>s</p>
   */
  AppInstanceUserArn?: string;

  /**
   * <p>The maximum number of users that you want returned.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token returned from previous API requests until the number of channel memberships is reached.</p>
   */
  NextToken?: string;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

export interface ListChannelMembershipsForAppInstanceUserResponse {
  /**
   * <p>The token passed by previous API calls until all requested users are returned.</p>
   */
  ChannelMemberships?: ChannelMembershipForAppInstanceUserSummary[];

  /**
   * <p>The token passed by previous API calls until all requested users are returned.</p>
   */
  NextToken?: string;
}

export enum SortOrder {
  ASCENDING = "ASCENDING",
  DESCENDING = "DESCENDING",
}

export interface ListChannelMessagesRequest {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;

  /**
   * <p>The order in which you want messages sorted. Default is Descending, based on time
   *          created.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>The initial or starting time stamp for your requested messages.</p>
   */
  NotBefore?: Date;

  /**
   * <p>The final or ending time stamp for your requested messages.</p>
   */
  NotAfter?: Date;

  /**
   * <p>The maximum number of messages that you want returned.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token passed by previous API calls until all requested messages are returned.</p>
   */
  NextToken?: string;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

export interface ListChannelMessagesResponse {
  /**
   * <p>The ARN of the channel containing the requested messages.</p>
   */
  ChannelArn?: string;

  /**
   * <p>The token passed by previous API calls until all requested messages are returned.</p>
   */
  NextToken?: string;

  /**
   * <p>The information about, and content of, each requested message.</p>
   */
  ChannelMessages?: ChannelMessageSummary[];
}

export interface ListChannelModeratorsRequest {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;

  /**
   * <p>The maximum number of moderators that you want returned.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token passed by previous API calls until all requested moderators are
   *          returned.</p>
   */
  NextToken?: string;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

export interface ListChannelModeratorsResponse {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn?: string;

  /**
   * <p>The token passed by previous API calls until all requested moderators are
   *          returned.</p>
   */
  NextToken?: string;

  /**
   * <p>The information about and names of each moderator.</p>
   */
  ChannelModerators?: ChannelModeratorSummary[];
}

export interface ListChannelsRequest {
  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn: string | undefined;

  /**
   * <p>The privacy setting. <code>PUBLIC</code> retrieves all the public channels.
   *             <code>PRIVATE</code> retrieves private channels. Only an <code>AppInstanceAdmin</code>
   *          can retrieve private channels. </p>
   */
  Privacy?: ChannelPrivacy | string;

  /**
   * <p>The maximum number of channels that you want to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token passed by previous API calls until all requested channels are returned.</p>
   */
  NextToken?: string;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

export interface ListChannelsResponse {
  /**
   * <p>The information about each channel.</p>
   */
  Channels?: ChannelSummary[];

  /**
   * <p>The token returned from previous API requests until the number of channels is
   *          reached.</p>
   */
  NextToken?: string;
}

export interface ListChannelsModeratedByAppInstanceUserRequest {
  /**
   * <p>The ARN of the user in the moderated channel.</p>
   */
  AppInstanceUserArn?: string;

  /**
   * <p>The maximum number of channels in the request.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token returned from previous API requests until the number of channels moderated by
   *          the user is reached.</p>
   */
  NextToken?: string;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

export interface ListChannelsModeratedByAppInstanceUserResponse {
  /**
   * <p>The moderated channels in the request.</p>
   */
  Channels?: ChannelModeratedByAppInstanceUserSummary[];

  /**
   * <p>The token returned from previous API requests until the number of channels moderated by
   *          the user is reached.</p>
   */
  NextToken?: string;
}

export interface ListMediaCapturePipelinesRequest {
  /**
   * <p>The token used to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in a single call. Valid Range: 1 - 99.</p>
   */
  MaxResults?: number;
}

export interface ListMediaCapturePipelinesResponse {
  /**
   * <p>The media capture pipeline objects in the list.</p>
   */
  MediaCapturePipelines?: MediaCapturePipeline[];

  /**
   * <p>The token used to retrieve the next page of results. </p>
   */
  NextToken?: string;
}

export interface ListMeetingsRequest {
  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;
}

export interface ListMeetingsResponse {
  /**
   * <p>The Amazon Chime SDK meeting information.</p>
   */
  Meetings?: Meeting[];

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

export interface ListMeetingTagsRequest {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;
}

export interface ListMeetingTagsResponse {
  /**
   * <p>A list of tag key-value pairs.</p>
   */
  Tags?: Tag[];
}

export interface ListPhoneNumberOrdersRequest {
  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;
}

export interface ListPhoneNumberOrdersResponse {
  /**
   * <p>The phone number order details.</p>
   */
  PhoneNumberOrders?: PhoneNumberOrder[];

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

export interface ListPhoneNumbersRequest {
  /**
   * <p>The phone number status.</p>
   */
  Status?: PhoneNumberStatus | string;

  /**
   * <p>The phone number product type.</p>
   */
  ProductType?: PhoneNumberProductType | string;

  /**
   * <p>The filter to use to limit the number of results.</p>
   */
  FilterName?: PhoneNumberAssociationName | string;

  /**
   * <p>The value to use for the filter.</p>
   */
  FilterValue?: string;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

export interface ListPhoneNumbersResponse {
  /**
   * <p>The phone number details.</p>
   */
  PhoneNumbers?: PhoneNumber[];

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

export interface ListProxySessionsRequest {
  /**
   * <p>The Amazon Chime voice connector ID.</p>
   */
  VoiceConnectorId: string | undefined;

  /**
   * <p>The proxy session status.</p>
   */
  Status?: ProxySessionStatus | string;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;
}

export interface ListProxySessionsResponse {
  /**
   * <p>The proxy session details.</p>
   */
  ProxySessions?: ProxySession[];

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

export interface ListRoomMembershipsRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The room ID.</p>
   */
  RoomId: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

export interface ListRoomMembershipsResponse {
  /**
   * <p>The room membership details.</p>
   */
  RoomMemberships?: RoomMembership[];

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

export interface ListRoomsRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The member ID (user ID or bot ID).</p>
   */
  MemberId?: string;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

export interface ListRoomsResponse {
  /**
   * <p>The room details.</p>
   */
  Rooms?: Room[];

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

export interface ListSipMediaApplicationsRequest {
  /**
   * <p>The maximum number of results to return in a single call. Defaults to 100.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

export interface ListSipMediaApplicationsResponse {
  /**
   * <p>List of SIP media applications and application details.</p>
   */
  SipMediaApplications?: SipMediaApplication[];

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

export interface ListSipRulesRequest {
  /**
   * <p>The SIP media application ID.</p>
   */
  SipMediaApplicationId?: string;

  /**
   * <p>The maximum number of results to return in a single call. Defaults to 100.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

export interface ListSipRulesResponse {
  /**
   * <p>List of SIP rules and rule details.</p>
   */
  SipRules?: SipRule[];

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

export interface ListSupportedPhoneNumberCountriesRequest {
  /**
   * <p>The phone number product type.</p>
   */
  ProductType: PhoneNumberProductType | string | undefined;
}

/**
 * <p>The phone number country.</p>
 */
export interface PhoneNumberCountry {
  /**
   * <p>The phone number country code. Format: ISO 3166-1 alpha-2.</p>
   */
  CountryCode?: string;

  /**
   * <p>The supported phone number types. </p>
   */
  SupportedPhoneNumberTypes?: (PhoneNumberType | string)[];
}

export interface ListSupportedPhoneNumberCountriesResponse {
  /**
   * <p>The supported phone number countries.</p>
   */
  PhoneNumberCountries?: PhoneNumberCountry[];
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The resource ARN.</p>
   */
  ResourceARN: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>A list of tag-key value pairs.</p>
   */
  Tags?: Tag[];
}

export interface ListUsersRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>Optional. The user email address used to filter results. Maximum 1.</p>
   */
  UserEmail?: string;

  /**
   * <p>The user type.</p>
   */
  UserType?: UserType | string;

  /**
   * <p>The maximum number of results to return in a single call. Defaults to 100.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

export interface ListUsersResponse {
  /**
   * <p>List of users and user details.</p>
   */
  Users?: User[];

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

export interface ListVoiceConnectorGroupsRequest {
  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;
}

export interface ListVoiceConnectorGroupsResponse {
  /**
   * <p>The details of the Amazon Chime Voice Connector groups.</p>
   */
  VoiceConnectorGroups?: VoiceConnectorGroup[];

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

export interface ListVoiceConnectorsRequest {
  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;
}

export interface ListVoiceConnectorsResponse {
  /**
   * <p>The details of the Amazon Chime Voice Connectors.</p>
   */
  VoiceConnectors?: VoiceConnector[];

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

export interface ListVoiceConnectorTerminationCredentialsRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

export interface ListVoiceConnectorTerminationCredentialsResponse {
  /**
   * <p>A list of user names.</p>
   */
  Usernames?: string[];
}

export interface LogoutUserRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The user ID.</p>
   */
  UserId: string | undefined;
}

export interface LogoutUserResponse {}

export interface PutAppInstanceRetentionSettingsRequest {
  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn: string | undefined;

  /**
   * <p>The time in days to retain data. Data type: number.</p>
   */
  AppInstanceRetentionSettings: AppInstanceRetentionSettings | undefined;
}

export interface PutAppInstanceRetentionSettingsResponse {
  /**
   * <p>The time in days to retain data. Data type: number.</p>
   */
  AppInstanceRetentionSettings?: AppInstanceRetentionSettings;

  /**
   * <p>The time at which the API deletes data.</p>
   */
  InitiateDeletionTimestamp?: Date;
}

export interface PutAppInstanceStreamingConfigurationsRequest {
  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn: string | undefined;

  /**
   * <p>The streaming configurations set for an <code>AppInstance</code>.</p>
   */
  AppInstanceStreamingConfigurations: AppInstanceStreamingConfiguration[] | undefined;
}

export interface PutAppInstanceStreamingConfigurationsResponse {
  /**
   * <p>The streaming configurations of an <code>AppInstance</code>.</p>
   */
  AppInstanceStreamingConfigurations?: AppInstanceStreamingConfiguration[];
}

export interface PutEventsConfigurationRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The bot ID.</p>
   */
  BotId: string | undefined;

  /**
   * <p>HTTPS endpoint that allows the bot to receive outgoing events.</p>
   */
  OutboundEventsHTTPSEndpoint?: string;

  /**
   * <p>Lambda function ARN that allows the bot to receive outgoing events.</p>
   */
  LambdaFunctionArn?: string;
}

export interface PutEventsConfigurationResponse {
  /**
   * <p>The configuration that allows a bot to receive outgoing events. Can be either an HTTPS endpoint or a Lambda function ARN.</p>
   */
  EventsConfiguration?: EventsConfiguration;
}

export interface PutRetentionSettingsRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The retention settings.</p>
   */
  RetentionSettings: RetentionSettings | undefined;
}

export interface PutRetentionSettingsResponse {
  /**
   * <p>The retention settings.</p>
   */
  RetentionSettings?: RetentionSettings;

  /**
   * <p>The timestamp representing the time at which the specified items are permanently deleted, in ISO 8601 format.</p>
   */
  InitiateDeletionTimestamp?: Date;
}

export interface PutSipMediaApplicationLoggingConfigurationRequest {
  /**
   * <p>The SIP media application ID.</p>
   */
  SipMediaApplicationId: string | undefined;

  /**
   * <p>The actual logging configuration.</p>
   */
  SipMediaApplicationLoggingConfiguration?: SipMediaApplicationLoggingConfiguration;
}

export interface PutSipMediaApplicationLoggingConfigurationResponse {
  /**
   * <p>Logging configuration of the SIP media application.</p>
   */
  SipMediaApplicationLoggingConfiguration?: SipMediaApplicationLoggingConfiguration;
}

export interface PutVoiceConnectorEmergencyCallingConfigurationRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;

  /**
   * <p>The emergency calling configuration details.</p>
   */
  EmergencyCallingConfiguration: EmergencyCallingConfiguration | undefined;
}

export interface PutVoiceConnectorEmergencyCallingConfigurationResponse {
  /**
   * <p>The emergency calling configuration details.</p>
   */
  EmergencyCallingConfiguration?: EmergencyCallingConfiguration;
}

export interface PutVoiceConnectorLoggingConfigurationRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;

  /**
   * <p>The logging configuration details to add.</p>
   */
  LoggingConfiguration: LoggingConfiguration | undefined;
}

export interface PutVoiceConnectorLoggingConfigurationResponse {
  /**
   * <p>The updated logging configuration details.</p>
   */
  LoggingConfiguration?: LoggingConfiguration;
}

export interface PutVoiceConnectorOriginationRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;

  /**
   * <p>The origination setting details to add.</p>
   */
  Origination: Origination | undefined;
}

export interface PutVoiceConnectorOriginationResponse {
  /**
   * <p>The updated origination setting details.</p>
   */
  Origination?: Origination;
}

export interface PutVoiceConnectorProxyRequest {
  /**
   * <p>The Amazon Chime voice connector ID.</p>
   */
  VoiceConnectorId: string | undefined;

  /**
   * <p>The default number of minutes allowed for proxy sessions.</p>
   */
  DefaultSessionExpiryMinutes: number | undefined;

  /**
   * <p>The countries for proxy phone numbers to be selected from.</p>
   */
  PhoneNumberPoolCountries: string[] | undefined;

  /**
   * <p>The phone number to route calls to after a proxy session expires.</p>
   */
  FallBackPhoneNumber?: string;

  /**
   * <p>When true, stops proxy sessions from being created on the specified Amazon Chime Voice Connector.</p>
   */
  Disabled?: boolean;
}

export interface PutVoiceConnectorProxyResponse {
  /**
   * <p>The proxy configuration details.</p>
   */
  Proxy?: Proxy;
}

export interface PutVoiceConnectorStreamingConfigurationRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;

  /**
   * <p>The streaming configuration details to add.</p>
   */
  StreamingConfiguration: StreamingConfiguration | undefined;
}

export interface PutVoiceConnectorStreamingConfigurationResponse {
  /**
   * <p>The updated streaming configuration details.</p>
   */
  StreamingConfiguration?: StreamingConfiguration;
}

export interface PutVoiceConnectorTerminationRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;

  /**
   * <p>The termination setting details to add.</p>
   */
  Termination: Termination | undefined;
}

export interface PutVoiceConnectorTerminationResponse {
  /**
   * <p>The updated termination setting details.</p>
   */
  Termination?: Termination;
}

export interface PutVoiceConnectorTerminationCredentialsRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;

  /**
   * <p>The termination SIP credentials.</p>
   */
  Credentials?: Credential[];
}

export interface RedactChannelMessageRequest {
  /**
   * <p>The ARN of the channel containing the messages that you want to redact.</p>
   */
  ChannelArn: string | undefined;

  /**
   * <p>The ID of the message being redacted.</p>
   */
  MessageId: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

export interface RedactChannelMessageResponse {
  /**
   * <p>The ARN of the channel containing the messages that you want to redact.</p>
   */
  ChannelArn?: string;

  /**
   * <p>The ID of the message being redacted.</p>
   */
  MessageId?: string;
}

export interface RedactConversationMessageRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The conversation ID.</p>
   */
  ConversationId: string | undefined;

  /**
   * <p>The message ID.</p>
   */
  MessageId: string | undefined;
}

export interface RedactConversationMessageResponse {}

export interface RedactRoomMessageRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The room ID.</p>
   */
  RoomId: string | undefined;

  /**
   * <p>The message ID.</p>
   */
  MessageId: string | undefined;
}

export interface RedactRoomMessageResponse {}

export interface RegenerateSecurityTokenRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The bot ID.</p>
   */
  BotId: string | undefined;
}

export interface RegenerateSecurityTokenResponse {
  /**
   * <p>A resource that allows Enterprise account administrators to configure an interface to receive events from Amazon Chime.</p>
   */
  Bot?: Bot;
}

export interface ResetPersonalPINRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The user ID.</p>
   */
  UserId: string | undefined;
}

export interface ResetPersonalPINResponse {
  /**
   * <p>The user details and new personal meeting PIN.</p>
   */
  User?: User;
}

export interface RestorePhoneNumberRequest {
  /**
   * <p>The phone number.</p>
   */
  PhoneNumberId: string | undefined;
}

export interface RestorePhoneNumberResponse {
  /**
   * <p>The phone number details.</p>
   */
  PhoneNumber?: PhoneNumber;
}

export interface SearchAvailablePhoneNumbersRequest {
  /**
   * <p>The area code used to filter results. Only applies to the US.</p>
   */
  AreaCode?: string;

  /**
   * <p>The city used to filter results. Only applies to the US.</p>
   */
  City?: string;

  /**
   * <p>The country used to filter results. Defaults to the US Format: ISO 3166-1 alpha-2.</p>
   */
  Country?: string;

  /**
   * <p>The state used to filter results. Required only if you provide <code>City</code>. Only applies to the US.</p>
   */
  State?: string;

  /**
   * <p>The toll-free prefix that you use to filter results. Only applies to the US.</p>
   */
  TollFreePrefix?: string;

  /**
   * <p>The phone number type used to filter results. Required for non-US numbers.</p>
   */
  PhoneNumberType?: PhoneNumberType | string;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token used to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

export interface SearchAvailablePhoneNumbersResponse {
  /**
   * <p>List of phone numbers, in E.164 format.</p>
   */
  E164PhoneNumbers?: string[];

  /**
   * <p>The token used to retrieve the next page of search results.</p>
   */
  NextToken?: string;
}

export interface SendChannelMessageRequest {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;

  /**
   * <p>The content of the message.</p>
   */
  Content: string | undefined;

  /**
   * <p>The type of message, <code>STANDARD</code> or <code>CONTROL</code>.</p>
   */
  Type: ChannelMessageType | string | undefined;

  /**
   * <p>Boolean that controls whether the message is persisted on the back end. Required.</p>
   */
  Persistence: ChannelMessagePersistenceType | string | undefined;

  /**
   * <p>The optional metadata for each message.</p>
   */
  Metadata?: string;

  /**
   * <p>The <code>Idempotency</code> token for each client request.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

export interface SendChannelMessageResponse {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn?: string;

  /**
   * <p>The ID string assigned to each message.</p>
   */
  MessageId?: string;
}

/**
 * <p>The configuration for the current transcription operation. Must contain <code>EngineTranscribeSettings</code> or <code>EngineTranscribeMedicalSettings</code>.</p>
 */
export interface TranscriptionConfiguration {
  /**
   * <p>The transcription configuration settings passed to Amazon Transcribe.</p>
   */
  EngineTranscribeSettings?: EngineTranscribeSettings;

  /**
   * <p>The transcription configuration settings passed to Amazon Transcribe Medical.</p>
   */
  EngineTranscribeMedicalSettings?: EngineTranscribeMedicalSettings;
}

export interface StartMeetingTranscriptionRequest {
  /**
   * <p>The unique ID of the meeting being transcribed.</p>
   */
  MeetingId: string | undefined;

  /**
   * <p>The configuration for the current transcription operation. Must contain <code>EngineTranscribeSettings</code> or <code>EngineTranscribeMedicalSettings</code>.</p>
   */
  TranscriptionConfiguration: TranscriptionConfiguration | undefined;
}

export interface StartMeetingTranscriptionResponse {}

export interface StopMeetingTranscriptionRequest {
  /**
   * <p>The unique ID of the meeting for which you stop transcription.</p>
   */
  MeetingId: string | undefined;
}

export interface StopMeetingTranscriptionResponse {}

export interface TagAttendeeRequest {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;

  /**
   * <p>The Amazon Chime SDK attendee ID.</p>
   */
  AttendeeId: string | undefined;

  /**
   * <p>The tag key-value pairs.</p>
   */
  Tags: Tag[] | undefined;
}

export interface TagMeetingRequest {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;

  /**
   * <p>The tag key-value pairs.</p>
   */
  Tags: Tag[] | undefined;
}

export interface TagResourceRequest {
  /**
   * <p>The resource ARN.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>The tag key-value pairs.</p>
   */
  Tags: Tag[] | undefined;
}

export interface UntagAttendeeRequest {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;

  /**
   * <p>The Amazon Chime SDK attendee ID.</p>
   */
  AttendeeId: string | undefined;

  /**
   * <p>The tag keys.</p>
   */
  TagKeys: string[] | undefined;
}

export interface UntagMeetingRequest {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;

  /**
   * <p>The tag keys.</p>
   */
  TagKeys: string[] | undefined;
}

export interface UntagResourceRequest {
  /**
   * <p>The resource ARN.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>The tag keys.</p>
   */
  TagKeys: string[] | undefined;
}

export interface UpdateAccountRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The new name for the specified Amazon Chime account.</p>
   */
  Name?: string;

  /**
   * <p>The default license applied when you add users to an Amazon Chime account.</p>
   */
  DefaultLicense?: License | string;
}

export interface UpdateAccountResponse {
  /**
   * <p>The updated Amazon Chime account details.</p>
   */
  Account?: Account;
}

export interface UpdateAccountSettingsRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The Amazon Chime account settings to update.</p>
   */
  AccountSettings: AccountSettings | undefined;
}

export interface UpdateAccountSettingsResponse {}

export interface UpdateAppInstanceRequest {
  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn: string | undefined;

  /**
   * <p>The name that you want to change.</p>
   */
  Name: string | undefined;

  /**
   * <p>The metadata that you want to change.</p>
   */
  Metadata?: string;
}

export interface UpdateAppInstanceResponse {
  /**
   * <p>The ARN of the <code>AppInstance</code>. </p>
   */
  AppInstanceArn?: string;
}

export interface UpdateAppInstanceUserRequest {
  /**
   * <p>The ARN of the <code>AppInstanceUser</code>.</p>
   */
  AppInstanceUserArn: string | undefined;

  /**
   * <p>The name of the <code>AppInstanceUser</code>.</p>
   */
  Name: string | undefined;

  /**
   * <p>The metadata of the <code>AppInstanceUser</code>.</p>
   */
  Metadata?: string;
}

export interface UpdateAppInstanceUserResponse {
  /**
   * <p>The ARN of the <code>AppInstanceUser</code>.</p>
   */
  AppInstanceUserArn?: string;
}

export interface UpdateBotRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The bot ID.</p>
   */
  BotId: string | undefined;

  /**
   * <p>When true, stops the specified bot from running in your account.</p>
   */
  Disabled?: boolean;
}

export interface UpdateBotResponse {
  /**
   * <p>The updated bot details.</p>
   */
  Bot?: Bot;
}

export interface UpdateChannelRequest {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;

  /**
   * <p>The name of the channel.</p>
   */
  Name: string | undefined;

  /**
   * <p>The mode of the update request.</p>
   */
  Mode: ChannelMode | string | undefined;

  /**
   * <p>The metadata for the update request.</p>
   */
  Metadata?: string;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

export interface UpdateChannelResponse {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn?: string;
}

export interface UpdateChannelMessageRequest {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;

  /**
   * <p>The ID string of the message being updated.</p>
   */
  MessageId: string | undefined;

  /**
   * <p>The content of the message being updated.</p>
   */
  Content?: string;

  /**
   * <p>The metadata of the message being updated.</p>
   */
  Metadata?: string;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

export interface UpdateChannelMessageResponse {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn?: string;

  /**
   * <p>The ID string of the message being updated.</p>
   */
  MessageId?: string;
}

export interface UpdateChannelReadMarkerRequest {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

export interface UpdateChannelReadMarkerResponse {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn?: string;
}

export interface UpdateGlobalSettingsRequest {
  /**
   * <p>The Amazon Chime Business Calling settings.</p>
   */
  BusinessCalling?: BusinessCallingSettings;

  /**
   * <p>The Amazon Chime Voice Connector settings.</p>
   */
  VoiceConnector?: VoiceConnectorSettings;
}

export interface UpdatePhoneNumberRequest {
  /**
   * <p>The phone number ID.</p>
   */
  PhoneNumberId: string | undefined;

  /**
   * <p>The product type.</p>
   */
  ProductType?: PhoneNumberProductType | string;

  /**
   * <p>The outbound calling name associated with the phone number.</p>
   */
  CallingName?: string;
}

export interface UpdatePhoneNumberResponse {
  /**
   * <p>The updated phone number details.</p>
   */
  PhoneNumber?: PhoneNumber;
}

export interface UpdatePhoneNumberSettingsRequest {
  /**
   * <p>The default outbound calling name for the account.</p>
   */
  CallingName: string | undefined;
}

export interface UpdateProxySessionRequest {
  /**
   * <p>The Amazon Chime voice connector ID.</p>
   */
  VoiceConnectorId: string | undefined;

  /**
   * <p>The proxy session ID.</p>
   */
  ProxySessionId: string | undefined;

  /**
   * <p>The proxy session capabilities.</p>
   */
  Capabilities: (Capability | string)[] | undefined;

  /**
   * <p>The number of minutes allowed for the proxy session.</p>
   */
  ExpiryMinutes?: number;
}

export interface UpdateProxySessionResponse {
  /**
   * <p>The proxy session details.</p>
   */
  ProxySession?: ProxySession;
}

export interface UpdateRoomRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The room ID.</p>
   */
  RoomId: string | undefined;

  /**
   * <p>The room name.</p>
   */
  Name?: string;
}

export interface UpdateRoomResponse {
  /**
   * <p>The room details.</p>
   */
  Room?: Room;
}

export interface UpdateRoomMembershipRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The room ID.</p>
   */
  RoomId: string | undefined;

  /**
   * <p>The member ID.</p>
   */
  MemberId: string | undefined;

  /**
   * <p>The role of the member.</p>
   */
  Role?: RoomMembershipRole | string;
}

export interface UpdateRoomMembershipResponse {
  /**
   * <p>The room membership details.</p>
   */
  RoomMembership?: RoomMembership;
}

export interface UpdateSipMediaApplicationRequest {
  /**
   * <p>The SIP media application ID.</p>
   */
  SipMediaApplicationId: string | undefined;

  /**
   * <p>The new name for the specified SIP media application.</p>
   */
  Name?: string;

  /**
   * <p>The new set of endpoints for the specified SIP media application.</p>
   */
  Endpoints?: SipMediaApplicationEndpoint[];
}

export interface UpdateSipMediaApplicationResponse {
  /**
   * <p>The updated SIP media application details.</p>
   */
  SipMediaApplication?: SipMediaApplication;
}

export interface UpdateSipMediaApplicationCallRequest {
  /**
   * <p>The ID of the SIP media application handling the call.</p>
   */
  SipMediaApplicationId: string | undefined;

  /**
   * <p>The ID of the call transaction.</p>
   */
  TransactionId: string | undefined;

  /**
   * <p>Arguments made available to the Lambda function as part of the <code>CALL_UPDATE_REQUESTED</code> event. Can contain 0-20 key-value pairs.</p>
   */
  Arguments: Record<string, string> | undefined;
}

export interface UpdateSipMediaApplicationCallResponse {
  /**
   * <p>A <code>Call</code> instance for a SIP media application.</p>
   */
  SipMediaApplicationCall?: SipMediaApplicationCall;
}

export interface UpdateSipRuleRequest {
  /**
   * <p>The SIP rule ID.</p>
   */
  SipRuleId: string | undefined;

  /**
   * <p>The new name for the specified SIP rule.</p>
   */
  Name: string | undefined;

  /**
   * <p>The new value specified to indicate whether the rule is disabled.</p>
   */
  Disabled?: boolean;

  /**
   * <p>The new value of the list of target applications.</p>
   */
  TargetApplications?: SipRuleTargetApplication[];
}

export interface UpdateSipRuleResponse {
  /**
   * <p>Updated SIP rule details.</p>
   */
  SipRule?: SipRule;
}

export interface UpdateUserRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The user ID.</p>
   */
  UserId: string | undefined;

  /**
   * <p>The user license type to update. This must be a supported license type for the Amazon Chime
   *             account that the user belongs to.</p>
   */
  LicenseType?: License | string;

  /**
   * <p>The user type.</p>
   */
  UserType?: UserType | string;

  /**
   * <p>The Alexa for Business metadata.</p>
   */
  AlexaForBusinessMetadata?: AlexaForBusinessMetadata;
}

export interface UpdateUserResponse {
  /**
   * <p>The updated user details.</p>
   */
  User?: User;
}

export interface UpdateUserSettingsRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The user ID.</p>
   */
  UserId: string | undefined;

  /**
   * <p>The user settings to update.</p>
   */
  UserSettings: UserSettings | undefined;
}

export interface UpdateVoiceConnectorRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;

  /**
   * <p>The name of the Amazon Chime Voice Connector.</p>
   */
  Name: string | undefined;

  /**
   * <p>When enabled, requires encryption for the Amazon Chime Voice Connector.</p>
   */
  RequireEncryption: boolean | undefined;
}

export interface UpdateVoiceConnectorResponse {
  /**
   * <p>The updated Amazon Chime Voice Connector details.</p>
   */
  VoiceConnector?: VoiceConnector;
}

export interface UpdateVoiceConnectorGroupRequest {
  /**
   * <p>The Amazon Chime Voice Connector group ID.</p>
   */
  VoiceConnectorGroupId: string | undefined;

  /**
   * <p>The name of the Amazon Chime Voice Connector group.</p>
   */
  Name: string | undefined;

  /**
   * <p>The <code>VoiceConnectorItems</code> to associate with the group.</p>
   */
  VoiceConnectorItems: VoiceConnectorItem[] | undefined;
}

export interface UpdateVoiceConnectorGroupResponse {
  /**
   * <p>The updated Amazon Chime Voice Connector group details.</p>
   */
  VoiceConnectorGroup?: VoiceConnectorGroup;
}

export interface ValidateE911AddressRequest {
  /**
   * <p>The AWS account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The address street number, such as <code>200</code> or <code>2121</code>.</p>
   */
  StreetNumber: string | undefined;

  /**
   * <p>The address street information, such as <code>8th Avenue</code>.</p>
   */
  StreetInfo: string | undefined;

  /**
   * <p>The address city, such as <code>Portland</code>.</p>
   */
  City: string | undefined;

  /**
   * <p>The address state, such as <code>ME</code>.</p>
   */
  State: string | undefined;

  /**
   * <p>The address country, such as <code>US</code>. </p>
   */
  Country: string | undefined;

  /**
   * <p>The address postal code, such as <code>04352</code>.</p>
   */
  PostalCode: string | undefined;
}

export interface ValidateE911AddressResponse {
  /**
   * <p>Number indicating the result of address validation.
   *             <code>0</code> means the address was perfect as is and successfully validated.
   *             <code>1</code> means the address was corrected. <code>2</code> means the address sent was
   *             not close enough and was not validated.</p>
   */
  ValidationResult?: number;

  /**
   * <p>The ID that represents the address.</p>
   */
  AddressExternalId?: string;

  /**
   * <p>The validated address.</p>
   */
  Address?: Address;

  /**
   * <p>The list of address suggestions.</p>
   */
  CandidateAddressList?: CandidateAddress[];
}

/**
 * @internal
 */
export const RoomRetentionSettingsFilterSensitiveLog = (obj: RoomRetentionSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RetentionSettingsFilterSensitiveLog = (obj: RetentionSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetRetentionSettingsResponseFilterSensitiveLog = (obj: GetRetentionSettingsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetRoomRequestFilterSensitiveLog = (obj: GetRoomRequest): any => ({
  ...obj,
});

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
export const GetSipMediaApplicationRequestFilterSensitiveLog = (obj: GetSipMediaApplicationRequest): any => ({
  ...obj,
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
export const GetSipMediaApplicationLoggingConfigurationRequestFilterSensitiveLog = (
  obj: GetSipMediaApplicationLoggingConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SipMediaApplicationLoggingConfigurationFilterSensitiveLog = (
  obj: SipMediaApplicationLoggingConfiguration
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSipMediaApplicationLoggingConfigurationResponseFilterSensitiveLog = (
  obj: GetSipMediaApplicationLoggingConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSipRuleRequestFilterSensitiveLog = (obj: GetSipRuleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSipRuleResponseFilterSensitiveLog = (obj: GetSipRuleResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetUserRequestFilterSensitiveLog = (obj: GetUserRequest): any => ({
  ...obj,
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
export const GetUserSettingsRequestFilterSensitiveLog = (obj: GetUserSettingsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TelephonySettingsFilterSensitiveLog = (obj: TelephonySettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UserSettingsFilterSensitiveLog = (obj: UserSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetUserSettingsResponseFilterSensitiveLog = (obj: GetUserSettingsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetVoiceConnectorRequestFilterSensitiveLog = (obj: GetVoiceConnectorRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetVoiceConnectorResponseFilterSensitiveLog = (obj: GetVoiceConnectorResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetVoiceConnectorEmergencyCallingConfigurationRequestFilterSensitiveLog = (
  obj: GetVoiceConnectorEmergencyCallingConfigurationRequest
): any => ({
  ...obj,
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
export const GetVoiceConnectorGroupRequestFilterSensitiveLog = (obj: GetVoiceConnectorGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetVoiceConnectorGroupResponseFilterSensitiveLog = (obj: GetVoiceConnectorGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetVoiceConnectorLoggingConfigurationRequestFilterSensitiveLog = (
  obj: GetVoiceConnectorLoggingConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LoggingConfigurationFilterSensitiveLog = (obj: LoggingConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetVoiceConnectorLoggingConfigurationResponseFilterSensitiveLog = (
  obj: GetVoiceConnectorLoggingConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetVoiceConnectorOriginationRequestFilterSensitiveLog = (
  obj: GetVoiceConnectorOriginationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OriginationRouteFilterSensitiveLog = (obj: OriginationRoute): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OriginationFilterSensitiveLog = (obj: Origination): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetVoiceConnectorOriginationResponseFilterSensitiveLog = (
  obj: GetVoiceConnectorOriginationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetVoiceConnectorProxyRequestFilterSensitiveLog = (obj: GetVoiceConnectorProxyRequest): any => ({
  ...obj,
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
export const GetVoiceConnectorStreamingConfigurationRequestFilterSensitiveLog = (
  obj: GetVoiceConnectorStreamingConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StreamingNotificationTargetFilterSensitiveLog = (obj: StreamingNotificationTarget): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StreamingConfigurationFilterSensitiveLog = (obj: StreamingConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetVoiceConnectorStreamingConfigurationResponseFilterSensitiveLog = (
  obj: GetVoiceConnectorStreamingConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetVoiceConnectorTerminationRequestFilterSensitiveLog = (
  obj: GetVoiceConnectorTerminationRequest
): any => ({
  ...obj,
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
export const GetVoiceConnectorTerminationHealthRequestFilterSensitiveLog = (
  obj: GetVoiceConnectorTerminationHealthRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TerminationHealthFilterSensitiveLog = (obj: TerminationHealth): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetVoiceConnectorTerminationHealthResponseFilterSensitiveLog = (
  obj: GetVoiceConnectorTerminationHealthResponse
): any => ({
  ...obj,
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
export const ListAccountsResponseFilterSensitiveLog = (obj: ListAccountsResponse): any => ({
  ...obj,
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
export const ListAttendeesRequestFilterSensitiveLog = (obj: ListAttendeesRequest): any => ({
  ...obj,
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
export const ListAttendeeTagsRequestFilterSensitiveLog = (obj: ListAttendeeTagsRequest): any => ({
  ...obj,
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
export const ListBotsRequestFilterSensitiveLog = (obj: ListBotsRequest): any => ({
  ...obj,
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
export const ListMediaCapturePipelinesRequestFilterSensitiveLog = (obj: ListMediaCapturePipelinesRequest): any => ({
  ...obj,
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
export const ListMeetingsRequestFilterSensitiveLog = (obj: ListMeetingsRequest): any => ({
  ...obj,
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
export const ListMeetingTagsRequestFilterSensitiveLog = (obj: ListMeetingTagsRequest): any => ({
  ...obj,
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
export const ListPhoneNumberOrdersRequestFilterSensitiveLog = (obj: ListPhoneNumberOrdersRequest): any => ({
  ...obj,
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
export const ListPhoneNumbersRequestFilterSensitiveLog = (obj: ListPhoneNumbersRequest): any => ({
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
export const ListProxySessionsRequestFilterSensitiveLog = (obj: ListProxySessionsRequest): any => ({
  ...obj,
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
export const ListRoomMembershipsRequestFilterSensitiveLog = (obj: ListRoomMembershipsRequest): any => ({
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
export const ListRoomsRequestFilterSensitiveLog = (obj: ListRoomsRequest): any => ({
  ...obj,
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
export const ListSipMediaApplicationsRequestFilterSensitiveLog = (obj: ListSipMediaApplicationsRequest): any => ({
  ...obj,
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
export const ListSipRulesRequestFilterSensitiveLog = (obj: ListSipRulesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSipRulesResponseFilterSensitiveLog = (obj: ListSipRulesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSupportedPhoneNumberCountriesRequestFilterSensitiveLog = (
  obj: ListSupportedPhoneNumberCountriesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PhoneNumberCountryFilterSensitiveLog = (obj: PhoneNumberCountry): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSupportedPhoneNumberCountriesResponseFilterSensitiveLog = (
  obj: ListSupportedPhoneNumberCountriesResponse
): any => ({
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
export const ListVoiceConnectorGroupsRequestFilterSensitiveLog = (obj: ListVoiceConnectorGroupsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListVoiceConnectorGroupsResponseFilterSensitiveLog = (obj: ListVoiceConnectorGroupsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListVoiceConnectorsRequestFilterSensitiveLog = (obj: ListVoiceConnectorsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListVoiceConnectorsResponseFilterSensitiveLog = (obj: ListVoiceConnectorsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListVoiceConnectorTerminationCredentialsRequestFilterSensitiveLog = (
  obj: ListVoiceConnectorTerminationCredentialsRequest
): any => ({
  ...obj,
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
export const LogoutUserRequestFilterSensitiveLog = (obj: LogoutUserRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LogoutUserResponseFilterSensitiveLog = (obj: LogoutUserResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutAppInstanceRetentionSettingsRequestFilterSensitiveLog = (
  obj: PutAppInstanceRetentionSettingsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutAppInstanceRetentionSettingsResponseFilterSensitiveLog = (
  obj: PutAppInstanceRetentionSettingsResponse
): any => ({
  ...obj,
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
export const PutRetentionSettingsRequestFilterSensitiveLog = (obj: PutRetentionSettingsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutRetentionSettingsResponseFilterSensitiveLog = (obj: PutRetentionSettingsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutSipMediaApplicationLoggingConfigurationRequestFilterSensitiveLog = (
  obj: PutSipMediaApplicationLoggingConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutSipMediaApplicationLoggingConfigurationResponseFilterSensitiveLog = (
  obj: PutSipMediaApplicationLoggingConfigurationResponse
): any => ({
  ...obj,
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
export const PutVoiceConnectorLoggingConfigurationRequestFilterSensitiveLog = (
  obj: PutVoiceConnectorLoggingConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutVoiceConnectorLoggingConfigurationResponseFilterSensitiveLog = (
  obj: PutVoiceConnectorLoggingConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutVoiceConnectorOriginationRequestFilterSensitiveLog = (
  obj: PutVoiceConnectorOriginationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutVoiceConnectorOriginationResponseFilterSensitiveLog = (
  obj: PutVoiceConnectorOriginationResponse
): any => ({
  ...obj,
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
export const PutVoiceConnectorStreamingConfigurationRequestFilterSensitiveLog = (
  obj: PutVoiceConnectorStreamingConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutVoiceConnectorStreamingConfigurationResponseFilterSensitiveLog = (
  obj: PutVoiceConnectorStreamingConfigurationResponse
): any => ({
  ...obj,
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
export const RedactChannelMessageRequestFilterSensitiveLog = (obj: RedactChannelMessageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RedactChannelMessageResponseFilterSensitiveLog = (obj: RedactChannelMessageResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RedactConversationMessageRequestFilterSensitiveLog = (obj: RedactConversationMessageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RedactConversationMessageResponseFilterSensitiveLog = (obj: RedactConversationMessageResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RedactRoomMessageRequestFilterSensitiveLog = (obj: RedactRoomMessageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RedactRoomMessageResponseFilterSensitiveLog = (obj: RedactRoomMessageResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegenerateSecurityTokenRequestFilterSensitiveLog = (obj: RegenerateSecurityTokenRequest): any => ({
  ...obj,
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
export const ResetPersonalPINRequestFilterSensitiveLog = (obj: ResetPersonalPINRequest): any => ({
  ...obj,
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
export const RestorePhoneNumberRequestFilterSensitiveLog = (obj: RestorePhoneNumberRequest): any => ({
  ...obj,
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
export const SearchAvailablePhoneNumbersRequestFilterSensitiveLog = (obj: SearchAvailablePhoneNumbersRequest): any => ({
  ...obj,
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
export const SendChannelMessageResponseFilterSensitiveLog = (obj: SendChannelMessageResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TranscriptionConfigurationFilterSensitiveLog = (obj: TranscriptionConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartMeetingTranscriptionRequestFilterSensitiveLog = (obj: StartMeetingTranscriptionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartMeetingTranscriptionResponseFilterSensitiveLog = (obj: StartMeetingTranscriptionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopMeetingTranscriptionRequestFilterSensitiveLog = (obj: StopMeetingTranscriptionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopMeetingTranscriptionResponseFilterSensitiveLog = (obj: StopMeetingTranscriptionResponse): any => ({
  ...obj,
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
export const UpdateAccountRequestFilterSensitiveLog = (obj: UpdateAccountRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAccountResponseFilterSensitiveLog = (obj: UpdateAccountResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAccountSettingsRequestFilterSensitiveLog = (obj: UpdateAccountSettingsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAccountSettingsResponseFilterSensitiveLog = (obj: UpdateAccountSettingsResponse): any => ({
  ...obj,
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
export const UpdateAppInstanceResponseFilterSensitiveLog = (obj: UpdateAppInstanceResponse): any => ({
  ...obj,
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
export const UpdateAppInstanceUserResponseFilterSensitiveLog = (obj: UpdateAppInstanceUserResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateBotRequestFilterSensitiveLog = (obj: UpdateBotRequest): any => ({
  ...obj,
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
export const UpdateChannelResponseFilterSensitiveLog = (obj: UpdateChannelResponse): any => ({
  ...obj,
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
export const UpdateChannelMessageResponseFilterSensitiveLog = (obj: UpdateChannelMessageResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateChannelReadMarkerRequestFilterSensitiveLog = (obj: UpdateChannelReadMarkerRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateChannelReadMarkerResponseFilterSensitiveLog = (obj: UpdateChannelReadMarkerResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateGlobalSettingsRequestFilterSensitiveLog = (obj: UpdateGlobalSettingsRequest): any => ({
  ...obj,
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
export const UpdateProxySessionRequestFilterSensitiveLog = (obj: UpdateProxySessionRequest): any => ({
  ...obj,
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
export const UpdateRoomMembershipRequestFilterSensitiveLog = (obj: UpdateRoomMembershipRequest): any => ({
  ...obj,
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
export const UpdateSipMediaApplicationCallResponseFilterSensitiveLog = (
  obj: UpdateSipMediaApplicationCallResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateSipRuleRequestFilterSensitiveLog = (obj: UpdateSipRuleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateSipRuleResponseFilterSensitiveLog = (obj: UpdateSipRuleResponse): any => ({
  ...obj,
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
export const UpdateUserSettingsRequestFilterSensitiveLog = (obj: UpdateUserSettingsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateVoiceConnectorRequestFilterSensitiveLog = (obj: UpdateVoiceConnectorRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateVoiceConnectorResponseFilterSensitiveLog = (obj: UpdateVoiceConnectorResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateVoiceConnectorGroupRequestFilterSensitiveLog = (obj: UpdateVoiceConnectorGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateVoiceConnectorGroupResponseFilterSensitiveLog = (obj: UpdateVoiceConnectorGroupResponse): any => ({
  ...obj,
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
