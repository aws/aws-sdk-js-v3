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
 * @public
 * <p>The retention settings that determine how long to retain chat-room messages for an Amazon Chime Enterprise account.</p>
 */
export interface RoomRetentionSettings {
  /**
   * @public
   * <p>The number of days for which to retain chat-room messages.</p>
   */
  RetentionDays?: number;
}

/**
 * @public
 * <p>The retention settings for an Amazon Chime Enterprise account that determine how long to retain items such as chat-room messages and chat-conversation messages.</p>
 */
export interface RetentionSettings {
  /**
   * @public
   * <p>The chat room retention settings.</p>
   */
  RoomRetentionSettings?: RoomRetentionSettings;

  /**
   * @public
   * <p>The chat conversation retention settings.</p>
   */
  ConversationRetentionSettings?: ConversationRetentionSettings;
}

/**
 * @public
 */
export interface GetRetentionSettingsResponse {
  /**
   * @public
   * <p>The retention settings.</p>
   */
  RetentionSettings?: RetentionSettings;

  /**
   * @public
   * <p>The timestamp representing the time at which the specified items are permanently deleted, in ISO 8601 format.</p>
   */
  InitiateDeletionTimestamp?: Date;
}

/**
 * @public
 */
export interface GetRoomRequest {
  /**
   * @public
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * @public
   * <p>The room ID.</p>
   */
  RoomId: string | undefined;
}

/**
 * @public
 */
export interface GetRoomResponse {
  /**
   * @public
   * <p>The room details.</p>
   */
  Room?: Room;
}

/**
 * @public
 */
export interface GetSipMediaApplicationRequest {
  /**
   * @public
   * <p>The SIP media application ID.</p>
   */
  SipMediaApplicationId: string | undefined;
}

/**
 * @public
 */
export interface GetSipMediaApplicationResponse {
  /**
   * @public
   * <p>The SIP media application details.</p>
   */
  SipMediaApplication?: SipMediaApplication;
}

/**
 * @public
 */
export interface GetSipMediaApplicationLoggingConfigurationRequest {
  /**
   * @public
   * <p>The SIP media application ID.</p>
   */
  SipMediaApplicationId: string | undefined;
}

/**
 * @public
 * <p>Logging configuration of the SIP media application.</p>
 */
export interface SipMediaApplicationLoggingConfiguration {
  /**
   * @public
   * <p>Enables application message logs for the SIP media application.</p>
   */
  EnableSipMediaApplicationMessageLogs?: boolean;
}

/**
 * @public
 */
export interface GetSipMediaApplicationLoggingConfigurationResponse {
  /**
   * @public
   * <p>The actual logging configuration.</p>
   */
  SipMediaApplicationLoggingConfiguration?: SipMediaApplicationLoggingConfiguration;
}

/**
 * @public
 */
export interface GetSipRuleRequest {
  /**
   * @public
   * <p>The SIP rule ID.</p>
   */
  SipRuleId: string | undefined;
}

/**
 * @public
 */
export interface GetSipRuleResponse {
  /**
   * @public
   * <p>The SIP rule details.</p>
   */
  SipRule?: SipRule;
}

/**
 * @public
 */
export interface GetUserRequest {
  /**
   * @public
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * @public
   * <p>The user ID.</p>
   */
  UserId: string | undefined;
}

/**
 * @public
 */
export interface GetUserResponse {
  /**
   * @public
   * <p>The user details.</p>
   */
  User?: User;
}

/**
 * @public
 */
export interface GetUserSettingsRequest {
  /**
   * @public
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * @public
   * <p>The user ID.</p>
   */
  UserId: string | undefined;
}

/**
 * @public
 * <p>Settings that allow management of telephony permissions for an Amazon Chime user, such as
 *             inbound and outbound calling and text messaging.</p>
 */
export interface TelephonySettings {
  /**
   * @public
   * <p>Allows or denies inbound calling.</p>
   */
  InboundCalling: boolean | undefined;

  /**
   * @public
   * <p>Allows or denies outbound calling.</p>
   */
  OutboundCalling: boolean | undefined;

  /**
   * @public
   * <p>Allows or denies SMS messaging.</p>
   */
  SMS: boolean | undefined;
}

/**
 * @public
 * <p>Settings associated with an Amazon Chime user, including inbound and outbound calling and text
 *             messaging.</p>
 */
export interface UserSettings {
  /**
   * @public
   * <p>The telephony settings associated with the user.</p>
   */
  Telephony: TelephonySettings | undefined;
}

/**
 * @public
 */
export interface GetUserSettingsResponse {
  /**
   * @public
   * <p>The user settings.</p>
   */
  UserSettings?: UserSettings;
}

/**
 * @public
 */
export interface GetVoiceConnectorRequest {
  /**
   * @public
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

/**
 * @public
 */
export interface GetVoiceConnectorResponse {
  /**
   * @public
   * <p>The Amazon Chime Voice Connector details.</p>
   */
  VoiceConnector?: VoiceConnector;
}

/**
 * @public
 */
export interface GetVoiceConnectorEmergencyCallingConfigurationRequest {
  /**
   * @public
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

/**
 * @public
 */
export interface GetVoiceConnectorEmergencyCallingConfigurationResponse {
  /**
   * @public
   * <p>The emergency calling configuration details.</p>
   */
  EmergencyCallingConfiguration?: EmergencyCallingConfiguration;
}

/**
 * @public
 */
export interface GetVoiceConnectorGroupRequest {
  /**
   * @public
   * <p>The Amazon Chime Voice Connector group ID.</p>
   */
  VoiceConnectorGroupId: string | undefined;
}

/**
 * @public
 */
export interface GetVoiceConnectorGroupResponse {
  /**
   * @public
   * <p>The Amazon Chime Voice Connector group details.</p>
   */
  VoiceConnectorGroup?: VoiceConnectorGroup;
}

/**
 * @public
 */
export interface GetVoiceConnectorLoggingConfigurationRequest {
  /**
   * @public
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

/**
 * @public
 * <p>The logging configuration associated with an Amazon Chime Voice Connector. Specifies whether SIP message logs are enabled for sending to Amazon CloudWatch Logs.</p>
 */
export interface LoggingConfiguration {
  /**
   * @public
   * <p>Boolean that enables SIP message logs to Amazon CloudWatch logs.</p>
   */
  EnableSIPLogs?: boolean;

  /**
   * @public
   * <p>Boolean that enables logging of detailed media metrics for Voice Connectors to Amazon CloudWatch logs.</p>
   */
  EnableMediaMetricLogs?: boolean;
}

/**
 * @public
 */
export interface GetVoiceConnectorLoggingConfigurationResponse {
  /**
   * @public
   * <p>The logging configuration details.</p>
   */
  LoggingConfiguration?: LoggingConfiguration;
}

/**
 * @public
 */
export interface GetVoiceConnectorOriginationRequest {
  /**
   * @public
   * <p>The Amazon Chime Voice Connector ID.</p>
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
 * @public
 * <p>Origination routes define call distribution properties for your SIP hosts to receive inbound
 *             calls using your Amazon Chime Voice Connector. Limit: Ten origination routes for each
 *             Amazon Chime Voice Connector.</p>
 *          <note>
 *             <p>The parameters listed below are not required, but you must use at least one. </p>
 *          </note>
 */
export interface OriginationRoute {
  /**
   * @public
   * <p>The FQDN or IP address to contact for origination traffic.</p>
   */
  Host?: string;

  /**
   * @public
   * <p>The designated origination route port. Defaults to 5060.</p>
   */
  Port?: number;

  /**
   * @public
   * <p>The protocol to use for the origination route. Encryption-enabled Amazon Chime Voice Connectors use TCP protocol by default.</p>
   */
  Protocol?: OriginationRouteProtocol;

  /**
   * @public
   * <p>The priority associated with the host, with 1 being the highest priority. Higher priority
   *             hosts are attempted first.</p>
   */
  Priority?: number;

  /**
   * @public
   * <p>The weight associated with the host. If hosts are equal in priority, calls are redistributed among
   *             them based on their relative weight.</p>
   */
  Weight?: number;
}

/**
 * @public
 * <p>Origination settings enable your SIP hosts to receive inbound calls using your Amazon Chime
 *             Voice Connector.</p>
 *          <note>
 *             <p>The parameters listed below are not required, but you must use at least one. </p>
 *          </note>
 */
export interface Origination {
  /**
   * @public
   * <p>The call distribution properties defined for your SIP hosts. Valid range: Minimum value of 1.
   *     Maximum value of 20. This parameter is not required, but you must specify this parameter or <code>Disabled</code>.</p>
   */
  Routes?: OriginationRoute[];

  /**
   * @public
   * <p>When origination settings are disabled, inbound calls are not enabled for your Amazon Chime
   *             Voice Connector. This parameter is not required, but you must specify this parameter or <code>Routes</code>.</p>
   */
  Disabled?: boolean;
}

/**
 * @public
 */
export interface GetVoiceConnectorOriginationResponse {
  /**
   * @public
   * <p>The origination setting details.</p>
   */
  Origination?: Origination;
}

/**
 * @public
 */
export interface GetVoiceConnectorProxyRequest {
  /**
   * @public
   * <p>The Amazon Chime voice connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

/**
 * @public
 * <p>The proxy configuration for an Amazon Chime Voice Connector.</p>
 */
export interface Proxy {
  /**
   * @public
   * <p>The default number of minutes allowed for proxy sessions.</p>
   */
  DefaultSessionExpiryMinutes?: number;

  /**
   * @public
   * <p>When true, stops proxy sessions from being created on the specified Amazon Chime Voice Connector.</p>
   */
  Disabled?: boolean;

  /**
   * @public
   * <p>The phone number to route calls to after a proxy session expires.</p>
   */
  FallBackPhoneNumber?: string;

  /**
   * @public
   * <p>The countries for proxy phone numbers to be selected from.</p>
   */
  PhoneNumberCountries?: string[];
}

/**
 * @public
 */
export interface GetVoiceConnectorProxyResponse {
  /**
   * @public
   * <p>The proxy configuration details.</p>
   */
  Proxy?: Proxy;
}

/**
 * @public
 */
export interface GetVoiceConnectorStreamingConfigurationRequest {
  /**
   * @public
   * <p>The Amazon Chime Voice Connector ID.</p>
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
 * @public
 * <p>The targeted recipient for a streaming configuration notification.</p>
 */
export interface StreamingNotificationTarget {
  /**
   * @public
   * <p>The streaming notification target.</p>
   */
  NotificationTarget: NotificationTarget | undefined;
}

/**
 * @public
 * <p>The streaming configuration associated with an Amazon Chime Voice Connector. Specifies whether
 *             media streaming is enabled for sending to Amazon Kinesis, and shows the retention period
 *             for the Amazon Kinesis data, in hours.</p>
 */
export interface StreamingConfiguration {
  /**
   * @public
   * <p>The retention period, in hours, for the Amazon Kinesis data.</p>
   */
  DataRetentionInHours: number | undefined;

  /**
   * @public
   * <p>When true, media streaming to Amazon Kinesis is turned off.</p>
   */
  Disabled?: boolean;

  /**
   * @public
   * <p>The streaming notification targets.</p>
   */
  StreamingNotificationTargets?: StreamingNotificationTarget[];
}

/**
 * @public
 */
export interface GetVoiceConnectorStreamingConfigurationResponse {
  /**
   * @public
   * <p>The streaming configuration details.</p>
   */
  StreamingConfiguration?: StreamingConfiguration;
}

/**
 * @public
 */
export interface GetVoiceConnectorTerminationRequest {
  /**
   * @public
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

/**
 * @public
 * <p>Termination settings enable your SIP hosts to make outbound calls using your Amazon Chime
 *             Voice Connector.</p>
 */
export interface Termination {
  /**
   * @public
   * <p>The limit on calls per second. Max value based on account service quota. Default value of
   *             1.</p>
   */
  CpsLimit?: number;

  /**
   * @public
   * <p>The default caller ID phone number.</p>
   */
  DefaultPhoneNumber?: string;

  /**
   * @public
   * <p>The countries to which calls are allowed, in ISO 3166-1 alpha-2 format. Required.</p>
   */
  CallingRegions?: string[];

  /**
   * @public
   * <p>The IP addresses allowed to make calls, in CIDR format. Required.</p>
   */
  CidrAllowedList?: string[];

  /**
   * @public
   * <p>When termination settings are disabled, outbound calls can not be made.</p>
   */
  Disabled?: boolean;
}

/**
 * @public
 */
export interface GetVoiceConnectorTerminationResponse {
  /**
   * @public
   * <p>The termination setting details.</p>
   */
  Termination?: Termination;
}

/**
 * @public
 */
export interface GetVoiceConnectorTerminationHealthRequest {
  /**
   * @public
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

/**
 * @public
 * <p>The termination health details, including the source IP address and timestamp of the last
 *             successful SIP <code>OPTIONS</code> message from your SIP infrastructure.</p>
 */
export interface TerminationHealth {
  /**
   * @public
   * <p>The timestamp, in ISO 8601 format.</p>
   */
  Timestamp?: Date;

  /**
   * @public
   * <p>The source IP address.</p>
   */
  Source?: string;
}

/**
 * @public
 */
export interface GetVoiceConnectorTerminationHealthResponse {
  /**
   * @public
   * <p>The termination health details.</p>
   */
  TerminationHealth?: TerminationHealth;
}

/**
 * @public
 * <p>Invitation object returned after emailing users to invite them to join the Amazon Chime
 *                 <code>Team</code> account.</p>
 */
export interface Invite {
  /**
   * @public
   * <p>The invite ID.</p>
   */
  InviteId?: string;

  /**
   * @public
   * <p>The status of the invite.</p>
   */
  Status?: InviteStatus;

  /**
   * @public
   * <p>The email address to which the invite is sent.</p>
   */
  EmailAddress?: string;

  /**
   * @public
   * <p>The status of the invite email.</p>
   */
  EmailStatus?: EmailStatus;
}

/**
 * @public
 */
export interface InviteUsersRequest {
  /**
   * @public
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * @public
   * <p>The user email addresses to which to send the email invitation.</p>
   */
  UserEmailList: string[] | undefined;

  /**
   * @public
   * <p>The user type.</p>
   */
  UserType?: UserType;
}

/**
 * @public
 */
export interface InviteUsersResponse {
  /**
   * @public
   * <p>The email invitation details.</p>
   */
  Invites?: Invite[];
}

/**
 * @public
 */
export interface ListAccountsRequest {
  /**
   * @public
   * <p>Amazon Chime account name prefix with which to filter results.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>User email address with which to filter results.</p>
   */
  UserEmail?: string;

  /**
   * @public
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return in a single call. Defaults to 100.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListAccountsResponse {
  /**
   * @public
   * <p>List of Amazon Chime accounts and account details.</p>
   */
  Accounts?: Account[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListAppInstanceAdminsRequest {
  /**
   * @public
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn: string | undefined;

  /**
   * @public
   * <p>The maximum number of administrators that you want to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token returned from previous API requests until the number of administrators is reached.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListAppInstanceAdminsResponse {
  /**
   * @public
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn?: string;

  /**
   * @public
   * <p>The information for each administrator.</p>
   */
  AppInstanceAdmins?: AppInstanceAdminSummary[];

  /**
   * @public
   * <p>The token returned from previous API requests until the number of administrators is reached.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListAppInstancesRequest {
  /**
   * @public
   * <p>The maximum number of <code>AppInstance</code>s that you want to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token passed by previous API requests until you reach the maximum number of <code>AppInstance</code>s.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListAppInstancesResponse {
  /**
   * @public
   * <p>The information for each <code>AppInstance</code>.</p>
   */
  AppInstances?: AppInstanceSummary[];

  /**
   * @public
   * <p>The token passed by previous API requests until the maximum number of <code>AppInstance</code>s is reached.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListAppInstanceUsersRequest {
  /**
   * @public
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn: string | undefined;

  /**
   * @public
   * <p>The maximum number of requests that you want returned.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token passed by previous API calls until all requested users are returned.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListAppInstanceUsersResponse {
  /**
   * @public
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn?: string;

  /**
   * @public
   * <p>The information for each requested <code>AppInstanceUser</code>.</p>
   */
  AppInstanceUsers?: AppInstanceUserSummary[];

  /**
   * @public
   * <p>The token passed by previous API calls until all requested users are returned.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListAttendeesRequest {
  /**
   * @public
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;

  /**
   * @public
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListAttendeesResponse {
  /**
   * @public
   * <p>The Amazon Chime SDK attendee information.</p>
   */
  Attendees?: Attendee[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListAttendeeTagsRequest {
  /**
   * @public
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;

  /**
   * @public
   * <p>The Amazon Chime SDK attendee ID.</p>
   */
  AttendeeId: string | undefined;
}

/**
 * @public
 */
export interface ListAttendeeTagsResponse {
  /**
   * @public
   * <p>A list of tag key-value pairs.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface ListBotsRequest {
  /**
   * @public
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * @public
   * <p>The maximum number of results to return in a single call. The default is 10.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListBotsResponse {
  /**
   * @public
   * <p>List of bots and bot details.</p>
   */
  Bots?: Bot[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListChannelBansRequest {
  /**
   * @public
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;

  /**
   * @public
   * <p>The maximum number of bans that you want returned.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token passed by previous API calls until all requested bans are returned.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

/**
 * @public
 */
export interface ListChannelBansResponse {
  /**
   * @public
   * <p>The ARN of the channel.</p>
   */
  ChannelArn?: string;

  /**
   * @public
   * <p>The token passed by previous API calls until all requested bans are returned.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The information for each requested ban.</p>
   */
  ChannelBans?: ChannelBanSummary[];
}

/**
 * @public
 */
export interface ListChannelMembershipsRequest {
  /**
   * @public
   * <p>The maximum number of channel memberships that you want returned.</p>
   */
  ChannelArn: string | undefined;

  /**
   * @public
   * <p>The membership type of a user, <code>DEFAULT</code> or <code>HIDDEN</code>. Default
   *          members are always returned as part of <code>ListChannelMemberships</code>. Hidden members
   *          are only returned if the type filter in <code>ListChannelMemberships</code> equals
   *             <code>HIDDEN</code>. Otherwise hidden members are not returned.</p>
   */
  Type?: ChannelMembershipType;

  /**
   * @public
   * <p>The maximum number of channel memberships that you want returned.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token passed by previous API calls until all requested channel memberships are
   *          returned.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

/**
 * @public
 */
export interface ListChannelMembershipsResponse {
  /**
   * @public
   * <p>The ARN of the channel.</p>
   */
  ChannelArn?: string;

  /**
   * @public
   * <p>The information for the requested channel memberships.</p>
   */
  ChannelMemberships?: ChannelMembershipSummary[];

  /**
   * @public
   * <p>The token passed by previous API calls until all requested channel memberships are
   *          returned.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListChannelMembershipsForAppInstanceUserRequest {
  /**
   * @public
   * <p>The ARN of the <code>AppInstanceUser</code>s</p>
   */
  AppInstanceUserArn?: string;

  /**
   * @public
   * <p>The maximum number of users that you want returned.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token returned from previous API requests until the number of channel memberships is reached.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

/**
 * @public
 */
export interface ListChannelMembershipsForAppInstanceUserResponse {
  /**
   * @public
   * <p>The information for the requested channel memberships.</p>
   */
  ChannelMemberships?: ChannelMembershipForAppInstanceUserSummary[];

  /**
   * @public
   * <p>The token passed by previous API calls until all requested users are returned.</p>
   */
  NextToken?: string;
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
   * @public
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;

  /**
   * @public
   * <p>The order in which you want messages sorted. Default is Descending, based on time
   *          created.</p>
   */
  SortOrder?: SortOrder;

  /**
   * @public
   * <p>The initial or starting time stamp for your requested messages.</p>
   */
  NotBefore?: Date;

  /**
   * @public
   * <p>The final or ending time stamp for your requested messages.</p>
   */
  NotAfter?: Date;

  /**
   * @public
   * <p>The maximum number of messages that you want returned.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token passed by previous API calls until all requested messages are returned.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

/**
 * @public
 */
export interface ListChannelMessagesResponse {
  /**
   * @public
   * <p>The ARN of the channel containing the requested messages.</p>
   */
  ChannelArn?: string;

  /**
   * @public
   * <p>The token passed by previous API calls until all requested messages are returned.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The information about, and content of, each requested message.</p>
   */
  ChannelMessages?: ChannelMessageSummary[];
}

/**
 * @public
 */
export interface ListChannelModeratorsRequest {
  /**
   * @public
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;

  /**
   * @public
   * <p>The maximum number of moderators that you want returned.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token passed by previous API calls until all requested moderators are
   *          returned.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

/**
 * @public
 */
export interface ListChannelModeratorsResponse {
  /**
   * @public
   * <p>The ARN of the channel.</p>
   */
  ChannelArn?: string;

  /**
   * @public
   * <p>The token passed by previous API calls until all requested moderators are
   *          returned.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The information about and names of each moderator.</p>
   */
  ChannelModerators?: ChannelModeratorSummary[];
}

/**
 * @public
 */
export interface ListChannelsRequest {
  /**
   * @public
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn: string | undefined;

  /**
   * @public
   * <p>The privacy setting. <code>PUBLIC</code> retrieves all the public channels.
   *             <code>PRIVATE</code> retrieves private channels. Only an <code>AppInstanceAdmin</code>
   *          can retrieve private channels. </p>
   */
  Privacy?: ChannelPrivacy;

  /**
   * @public
   * <p>The maximum number of channels that you want to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token passed by previous API calls until all requested channels are returned.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

/**
 * @public
 */
export interface ListChannelsResponse {
  /**
   * @public
   * <p>The information about each channel.</p>
   */
  Channels?: ChannelSummary[];

  /**
   * @public
   * <p>The token returned from previous API requests until the number of channels is
   *          reached.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListChannelsModeratedByAppInstanceUserRequest {
  /**
   * @public
   * <p>The ARN of the user in the moderated channel.</p>
   */
  AppInstanceUserArn?: string;

  /**
   * @public
   * <p>The maximum number of channels in the request.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token returned from previous API requests until the number of channels moderated by
   *          the user is reached.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

/**
 * @public
 */
export interface ListChannelsModeratedByAppInstanceUserResponse {
  /**
   * @public
   * <p>The moderated channels in the request.</p>
   */
  Channels?: ChannelModeratedByAppInstanceUserSummary[];

  /**
   * @public
   * <p>The token returned from previous API requests until the number of channels moderated by
   *          the user is reached.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListMediaCapturePipelinesRequest {
  /**
   * @public
   * <p>The token used to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return in a single call. Valid Range: 1 - 99.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListMediaCapturePipelinesResponse {
  /**
   * @public
   * <p>The media capture pipeline objects in the list.</p>
   */
  MediaCapturePipelines?: MediaCapturePipeline[];

  /**
   * @public
   * <p>The token used to retrieve the next page of results. </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListMeetingsRequest {
  /**
   * @public
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListMeetingsResponse {
  /**
   * @public
   * <p>The Amazon Chime SDK meeting information.</p>
   */
  Meetings?: Meeting[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListMeetingTagsRequest {
  /**
   * @public
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;
}

/**
 * @public
 */
export interface ListMeetingTagsResponse {
  /**
   * @public
   * <p>A list of tag key-value pairs.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface ListPhoneNumberOrdersRequest {
  /**
   * @public
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListPhoneNumberOrdersResponse {
  /**
   * @public
   * <p>The phone number order details.</p>
   */
  PhoneNumberOrders?: PhoneNumberOrder[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListPhoneNumbersRequest {
  /**
   * @public
   * <p>The phone number status.</p>
   */
  Status?: PhoneNumberStatus;

  /**
   * @public
   * <p>The phone number product type.</p>
   */
  ProductType?: PhoneNumberProductType;

  /**
   * @public
   * <p>The filter to use to limit the number of results.</p>
   */
  FilterName?: PhoneNumberAssociationName;

  /**
   * @public
   * <p>The value to use for the filter.</p>
   */
  FilterValue?: string;

  /**
   * @public
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListPhoneNumbersResponse {
  /**
   * @public
   * <p>The phone number details.</p>
   */
  PhoneNumbers?: PhoneNumber[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListProxySessionsRequest {
  /**
   * @public
   * <p>The Amazon Chime voice connector ID.</p>
   */
  VoiceConnectorId: string | undefined;

  /**
   * @public
   * <p>The proxy session status.</p>
   */
  Status?: ProxySessionStatus;

  /**
   * @public
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListProxySessionsResponse {
  /**
   * @public
   * <p>The proxy session details.</p>
   */
  ProxySessions?: ProxySession[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListRoomMembershipsRequest {
  /**
   * @public
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * @public
   * <p>The room ID.</p>
   */
  RoomId: string | undefined;

  /**
   * @public
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListRoomMembershipsResponse {
  /**
   * @public
   * <p>The room membership details.</p>
   */
  RoomMemberships?: RoomMembership[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListRoomsRequest {
  /**
   * @public
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * @public
   * <p>The member ID (user ID or bot ID).</p>
   */
  MemberId?: string;

  /**
   * @public
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListRoomsResponse {
  /**
   * @public
   * <p>The room details.</p>
   */
  Rooms?: Room[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListSipMediaApplicationsRequest {
  /**
   * @public
   * <p>The maximum number of results to return in a single call. Defaults to 100.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListSipMediaApplicationsResponse {
  /**
   * @public
   * <p>List of SIP media applications and application details.</p>
   */
  SipMediaApplications?: SipMediaApplication[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListSipRulesRequest {
  /**
   * @public
   * <p>The SIP media application ID.</p>
   */
  SipMediaApplicationId?: string;

  /**
   * @public
   * <p>The maximum number of results to return in a single call. Defaults to 100.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListSipRulesResponse {
  /**
   * @public
   * <p>List of SIP rules and rule details.</p>
   */
  SipRules?: SipRule[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListSupportedPhoneNumberCountriesRequest {
  /**
   * @public
   * <p>The phone number product type.</p>
   */
  ProductType: PhoneNumberProductType | undefined;
}

/**
 * @public
 * <p>The phone number country.</p>
 */
export interface PhoneNumberCountry {
  /**
   * @public
   * <p>The phone number country code. Format: ISO 3166-1 alpha-2.</p>
   */
  CountryCode?: string;

  /**
   * @public
   * <p>The supported phone number types. </p>
   */
  SupportedPhoneNumberTypes?: PhoneNumberType[];
}

/**
 * @public
 */
export interface ListSupportedPhoneNumberCountriesResponse {
  /**
   * @public
   * <p>The supported phone number countries.</p>
   */
  PhoneNumberCountries?: PhoneNumberCountry[];
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The resource ARN.</p>
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>A list of tag-key value pairs.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface ListUsersRequest {
  /**
   * @public
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * @public
   * <p>Optional. The user email address used to filter results. Maximum 1.</p>
   */
  UserEmail?: string;

  /**
   * @public
   * <p>The user type.</p>
   */
  UserType?: UserType;

  /**
   * @public
   * <p>The maximum number of results to return in a single call. Defaults to 100.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListUsersResponse {
  /**
   * @public
   * <p>List of users and user details.</p>
   */
  Users?: User[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListVoiceConnectorGroupsRequest {
  /**
   * @public
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListVoiceConnectorGroupsResponse {
  /**
   * @public
   * <p>The details of the Amazon Chime Voice Connector groups.</p>
   */
  VoiceConnectorGroups?: VoiceConnectorGroup[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListVoiceConnectorsRequest {
  /**
   * @public
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListVoiceConnectorsResponse {
  /**
   * @public
   * <p>The details of the Amazon Chime Voice Connectors.</p>
   */
  VoiceConnectors?: VoiceConnector[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListVoiceConnectorTerminationCredentialsRequest {
  /**
   * @public
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

/**
 * @public
 */
export interface ListVoiceConnectorTerminationCredentialsResponse {
  /**
   * @public
   * <p>A list of user names.</p>
   */
  Usernames?: string[];
}

/**
 * @public
 */
export interface LogoutUserRequest {
  /**
   * @public
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * @public
   * <p>The user ID.</p>
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
   * @public
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn: string | undefined;

  /**
   * @public
   * <p>The time in days to retain data. Data type: number.</p>
   */
  AppInstanceRetentionSettings: AppInstanceRetentionSettings | undefined;
}

/**
 * @public
 */
export interface PutAppInstanceRetentionSettingsResponse {
  /**
   * @public
   * <p>The time in days to retain data. Data type: number.</p>
   */
  AppInstanceRetentionSettings?: AppInstanceRetentionSettings;

  /**
   * @public
   * <p>The time at which the API deletes data.</p>
   */
  InitiateDeletionTimestamp?: Date;
}

/**
 * @public
 */
export interface PutAppInstanceStreamingConfigurationsRequest {
  /**
   * @public
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn: string | undefined;

  /**
   * @public
   * <p>The streaming configurations set for an <code>AppInstance</code>.</p>
   */
  AppInstanceStreamingConfigurations: AppInstanceStreamingConfiguration[] | undefined;
}

/**
 * @public
 */
export interface PutAppInstanceStreamingConfigurationsResponse {
  /**
   * @public
   * <p>The streaming configurations of an <code>AppInstance</code>.</p>
   */
  AppInstanceStreamingConfigurations?: AppInstanceStreamingConfiguration[];
}

/**
 * @public
 */
export interface PutEventsConfigurationRequest {
  /**
   * @public
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * @public
   * <p>The bot ID.</p>
   */
  BotId: string | undefined;

  /**
   * @public
   * <p>HTTPS endpoint that allows the bot to receive outgoing events.</p>
   */
  OutboundEventsHTTPSEndpoint?: string;

  /**
   * @public
   * <p>Lambda function ARN that allows the bot to receive outgoing events.</p>
   */
  LambdaFunctionArn?: string;
}

/**
 * @public
 */
export interface PutEventsConfigurationResponse {
  /**
   * @public
   * <p>The configuration that allows a bot to receive outgoing events. Can be an HTTPS endpoint or an
   *             AWS Lambda function ARN.</p>
   */
  EventsConfiguration?: EventsConfiguration;
}

/**
 * @public
 */
export interface PutRetentionSettingsRequest {
  /**
   * @public
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * @public
   * <p>The retention settings.</p>
   */
  RetentionSettings: RetentionSettings | undefined;
}

/**
 * @public
 */
export interface PutRetentionSettingsResponse {
  /**
   * @public
   * <p>The retention settings.</p>
   */
  RetentionSettings?: RetentionSettings;

  /**
   * @public
   * <p>The timestamp representing the time at which the specified items are permanently deleted, in ISO 8601 format.</p>
   */
  InitiateDeletionTimestamp?: Date;
}

/**
 * @public
 */
export interface PutSipMediaApplicationLoggingConfigurationRequest {
  /**
   * @public
   * <p>The SIP media application ID.</p>
   */
  SipMediaApplicationId: string | undefined;

  /**
   * @public
   * <p>The actual logging configuration.</p>
   */
  SipMediaApplicationLoggingConfiguration?: SipMediaApplicationLoggingConfiguration;
}

/**
 * @public
 */
export interface PutSipMediaApplicationLoggingConfigurationResponse {
  /**
   * @public
   * <p>The logging configuration of the SIP media application.</p>
   */
  SipMediaApplicationLoggingConfiguration?: SipMediaApplicationLoggingConfiguration;
}

/**
 * @public
 */
export interface PutVoiceConnectorEmergencyCallingConfigurationRequest {
  /**
   * @public
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;

  /**
   * @public
   * <p>The emergency calling configuration details.</p>
   */
  EmergencyCallingConfiguration: EmergencyCallingConfiguration | undefined;
}

/**
 * @public
 */
export interface PutVoiceConnectorEmergencyCallingConfigurationResponse {
  /**
   * @public
   * <p>The emergency calling configuration details.</p>
   */
  EmergencyCallingConfiguration?: EmergencyCallingConfiguration;
}

/**
 * @public
 */
export interface PutVoiceConnectorLoggingConfigurationRequest {
  /**
   * @public
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;

  /**
   * @public
   * <p>The logging configuration details to add.</p>
   */
  LoggingConfiguration: LoggingConfiguration | undefined;
}

/**
 * @public
 */
export interface PutVoiceConnectorLoggingConfigurationResponse {
  /**
   * @public
   * <p>The updated logging configuration details.</p>
   */
  LoggingConfiguration?: LoggingConfiguration;
}

/**
 * @public
 */
export interface PutVoiceConnectorOriginationRequest {
  /**
   * @public
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;

  /**
   * @public
   * <p>The origination setting details to add.</p>
   */
  Origination: Origination | undefined;
}

/**
 * @public
 */
export interface PutVoiceConnectorOriginationResponse {
  /**
   * @public
   * <p>The updated origination setting details.</p>
   */
  Origination?: Origination;
}

/**
 * @public
 */
export interface PutVoiceConnectorProxyRequest {
  /**
   * @public
   * <p>The Amazon Chime voice connector ID.</p>
   */
  VoiceConnectorId: string | undefined;

  /**
   * @public
   * <p>The default number of minutes allowed for proxy sessions.</p>
   */
  DefaultSessionExpiryMinutes: number | undefined;

  /**
   * @public
   * <p>The countries for proxy phone numbers to be selected from.</p>
   */
  PhoneNumberPoolCountries: string[] | undefined;

  /**
   * @public
   * <p>The phone number to route calls to after a proxy session expires.</p>
   */
  FallBackPhoneNumber?: string;

  /**
   * @public
   * <p>When true, stops proxy sessions from being created on the specified Amazon Chime Voice Connector.</p>
   */
  Disabled?: boolean;
}

/**
 * @public
 */
export interface PutVoiceConnectorProxyResponse {
  /**
   * @public
   * <p>The proxy configuration details.</p>
   */
  Proxy?: Proxy;
}

/**
 * @public
 */
export interface PutVoiceConnectorStreamingConfigurationRequest {
  /**
   * @public
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;

  /**
   * @public
   * <p>The streaming configuration details to add.</p>
   */
  StreamingConfiguration: StreamingConfiguration | undefined;
}

/**
 * @public
 */
export interface PutVoiceConnectorStreamingConfigurationResponse {
  /**
   * @public
   * <p>The updated streaming configuration details.</p>
   */
  StreamingConfiguration?: StreamingConfiguration;
}

/**
 * @public
 */
export interface PutVoiceConnectorTerminationRequest {
  /**
   * @public
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;

  /**
   * @public
   * <p>The termination setting details to add.</p>
   */
  Termination: Termination | undefined;
}

/**
 * @public
 */
export interface PutVoiceConnectorTerminationResponse {
  /**
   * @public
   * <p>The updated termination setting details.</p>
   */
  Termination?: Termination;
}

/**
 * @public
 */
export interface PutVoiceConnectorTerminationCredentialsRequest {
  /**
   * @public
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;

  /**
   * @public
   * <p>The termination SIP credentials.</p>
   */
  Credentials?: Credential[];
}

/**
 * @public
 */
export interface RedactChannelMessageRequest {
  /**
   * @public
   * <p>The ARN of the channel containing the messages that you want to redact.</p>
   */
  ChannelArn: string | undefined;

  /**
   * @public
   * <p>The ID of the message being redacted.</p>
   */
  MessageId: string | undefined;

  /**
   * @public
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

/**
 * @public
 */
export interface RedactChannelMessageResponse {
  /**
   * @public
   * <p>The ARN of the channel containing the messages that you want to redact.</p>
   */
  ChannelArn?: string;

  /**
   * @public
   * <p>The ID of the message being redacted.</p>
   */
  MessageId?: string;
}

/**
 * @public
 */
export interface RedactConversationMessageRequest {
  /**
   * @public
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * @public
   * <p>The conversation ID.</p>
   */
  ConversationId: string | undefined;

  /**
   * @public
   * <p>The message ID.</p>
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
   * @public
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * @public
   * <p>The room ID.</p>
   */
  RoomId: string | undefined;

  /**
   * @public
   * <p>The message ID.</p>
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
   * @public
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * @public
   * <p>The bot ID.</p>
   */
  BotId: string | undefined;
}

/**
 * @public
 */
export interface RegenerateSecurityTokenResponse {
  /**
   * @public
   * <p>A resource that allows Enterprise account administrators to configure an interface that receives events from Amazon Chime.</p>
   */
  Bot?: Bot;
}

/**
 * @public
 */
export interface ResetPersonalPINRequest {
  /**
   * @public
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * @public
   * <p>The user ID.</p>
   */
  UserId: string | undefined;
}

/**
 * @public
 */
export interface ResetPersonalPINResponse {
  /**
   * @public
   * <p>The user details and new personal meeting PIN.</p>
   */
  User?: User;
}

/**
 * @public
 */
export interface RestorePhoneNumberRequest {
  /**
   * @public
   * <p>The phone number.</p>
   */
  PhoneNumberId: string | undefined;
}

/**
 * @public
 */
export interface RestorePhoneNumberResponse {
  /**
   * @public
   * <p>The phone number details.</p>
   */
  PhoneNumber?: PhoneNumber;
}

/**
 * @public
 */
export interface SearchAvailablePhoneNumbersRequest {
  /**
   * @public
   * <p>The area code used to filter results. Only applies to the US.</p>
   */
  AreaCode?: string;

  /**
   * @public
   * <p>The city used to filter results. Only applies to the US.</p>
   */
  City?: string;

  /**
   * @public
   * <p>The country used to filter results. Defaults to the US Format: ISO 3166-1 alpha-2.</p>
   */
  Country?: string;

  /**
   * @public
   * <p>The state used to filter results. Required only if you provide <code>City</code>. Only applies to the US.</p>
   */
  State?: string;

  /**
   * @public
   * <p>The toll-free prefix that you use to filter results. Only applies to the US.</p>
   */
  TollFreePrefix?: string;

  /**
   * @public
   * <p>The phone number type used to filter results. Required for non-US numbers.</p>
   */
  PhoneNumberType?: PhoneNumberType;

  /**
   * @public
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token used to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface SearchAvailablePhoneNumbersResponse {
  /**
   * @public
   * <p>List of phone numbers, in E.164 format.</p>
   */
  E164PhoneNumbers?: string[];

  /**
   * @public
   * <p>The token used to retrieve the next page of search results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface SendChannelMessageRequest {
  /**
   * @public
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;

  /**
   * @public
   * <p>The content of the message.</p>
   */
  Content: string | undefined;

  /**
   * @public
   * <p>The type of message, <code>STANDARD</code> or <code>CONTROL</code>.</p>
   */
  Type: ChannelMessageType | undefined;

  /**
   * @public
   * <p>Boolean that controls whether the message is persisted on the back end. Required.</p>
   */
  Persistence: ChannelMessagePersistenceType | undefined;

  /**
   * @public
   * <p>The optional metadata for each message.</p>
   */
  Metadata?: string;

  /**
   * @public
   * <p>The <code>Idempotency</code> token for each client request.</p>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

/**
 * @public
 */
export interface SendChannelMessageResponse {
  /**
   * @public
   * <p>The ARN of the channel.</p>
   */
  ChannelArn?: string;

  /**
   * @public
   * <p>The ID string assigned to each message.</p>
   */
  MessageId?: string;
}

/**
 * @public
 * <p>The configuration for the current transcription operation. Must contain <code>EngineTranscribeSettings</code> or <code>EngineTranscribeMedicalSettings</code>.</p>
 */
export interface TranscriptionConfiguration {
  /**
   * @public
   * <p>The transcription configuration settings passed to Amazon Transcribe.</p>
   */
  EngineTranscribeSettings?: EngineTranscribeSettings;

  /**
   * @public
   * <p>The transcription configuration settings passed to Amazon Transcribe Medical.</p>
   */
  EngineTranscribeMedicalSettings?: EngineTranscribeMedicalSettings;
}

/**
 * @public
 */
export interface StartMeetingTranscriptionRequest {
  /**
   * @public
   * <p>The unique ID of the meeting being transcribed.</p>
   */
  MeetingId: string | undefined;

  /**
   * @public
   * <p>The configuration for the current transcription operation. Must contain <code>EngineTranscribeSettings</code> or <code>EngineTranscribeMedicalSettings</code>.</p>
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
   * @public
   * <p>The unique ID of the meeting for which you stop transcription.</p>
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
   * @public
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;

  /**
   * @public
   * <p>The Amazon Chime SDK attendee ID.</p>
   */
  AttendeeId: string | undefined;

  /**
   * @public
   * <p>The tag key-value pairs.</p>
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagMeetingRequest {
  /**
   * @public
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;

  /**
   * @public
   * <p>The tag key-value pairs.</p>
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The resource ARN.</p>
   */
  ResourceARN: string | undefined;

  /**
   * @public
   * <p>The tag key-value pairs.</p>
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface UntagAttendeeRequest {
  /**
   * @public
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;

  /**
   * @public
   * <p>The Amazon Chime SDK attendee ID.</p>
   */
  AttendeeId: string | undefined;

  /**
   * @public
   * <p>The tag keys.</p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagMeetingRequest {
  /**
   * @public
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;

  /**
   * @public
   * <p>The tag keys.</p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * @public
   * <p>The resource ARN.</p>
   */
  ResourceARN: string | undefined;

  /**
   * @public
   * <p>The tag keys.</p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateAccountRequest {
  /**
   * @public
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * @public
   * <p>The new name for the specified Amazon Chime account.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The default license applied when you add users to an Amazon Chime account.</p>
   */
  DefaultLicense?: License;
}

/**
 * @public
 */
export interface UpdateAccountResponse {
  /**
   * @public
   * <p>The updated Amazon Chime account details.</p>
   */
  Account?: Account;
}

/**
 * @public
 */
export interface UpdateAccountSettingsRequest {
  /**
   * @public
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * @public
   * <p>The Amazon Chime account settings to update.</p>
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
   * @public
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn: string | undefined;

  /**
   * @public
   * <p>The name that you want to change.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The metadata that you want to change.</p>
   */
  Metadata?: string;
}

/**
 * @public
 */
export interface UpdateAppInstanceResponse {
  /**
   * @public
   * <p>The ARN of the <code>AppInstance</code>. </p>
   */
  AppInstanceArn?: string;
}

/**
 * @public
 */
export interface UpdateAppInstanceUserRequest {
  /**
   * @public
   * <p>The ARN of the <code>AppInstanceUser</code>.</p>
   */
  AppInstanceUserArn: string | undefined;

  /**
   * @public
   * <p>The name of the <code>AppInstanceUser</code>.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The metadata of the <code>AppInstanceUser</code>.</p>
   */
  Metadata?: string;
}

/**
 * @public
 */
export interface UpdateAppInstanceUserResponse {
  /**
   * @public
   * <p>The ARN of the <code>AppInstanceUser</code>.</p>
   */
  AppInstanceUserArn?: string;
}

/**
 * @public
 */
export interface UpdateBotRequest {
  /**
   * @public
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * @public
   * <p>The bot ID.</p>
   */
  BotId: string | undefined;

  /**
   * @public
   * <p>When true, stops the specified bot from running in your account.</p>
   */
  Disabled?: boolean;
}

/**
 * @public
 */
export interface UpdateBotResponse {
  /**
   * @public
   * <p>The updated bot details.</p>
   */
  Bot?: Bot;
}

/**
 * @public
 */
export interface UpdateChannelRequest {
  /**
   * @public
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;

  /**
   * @public
   * <p>The name of the channel.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The mode of the update request.</p>
   */
  Mode: ChannelMode | undefined;

  /**
   * @public
   * <p>The metadata for the update request.</p>
   */
  Metadata?: string;

  /**
   * @public
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

/**
 * @public
 */
export interface UpdateChannelResponse {
  /**
   * @public
   * <p>The ARN of the channel.</p>
   */
  ChannelArn?: string;
}

/**
 * @public
 */
export interface UpdateChannelMessageRequest {
  /**
   * @public
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;

  /**
   * @public
   * <p>The ID string of the message being updated.</p>
   */
  MessageId: string | undefined;

  /**
   * @public
   * <p>The content of the message being updated.</p>
   */
  Content?: string;

  /**
   * @public
   * <p>The metadata of the message being updated.</p>
   */
  Metadata?: string;

  /**
   * @public
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

/**
 * @public
 */
export interface UpdateChannelMessageResponse {
  /**
   * @public
   * <p>The ARN of the channel.</p>
   */
  ChannelArn?: string;

  /**
   * @public
   * <p>The ID string of the message being updated.</p>
   */
  MessageId?: string;
}

/**
 * @public
 */
export interface UpdateChannelReadMarkerRequest {
  /**
   * @public
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;

  /**
   * @public
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

/**
 * @public
 */
export interface UpdateChannelReadMarkerResponse {
  /**
   * @public
   * <p>The ARN of the channel.</p>
   */
  ChannelArn?: string;
}

/**
 * @public
 */
export interface UpdateGlobalSettingsRequest {
  /**
   * @public
   * <p>The Amazon Chime Business Calling settings.</p>
   */
  BusinessCalling?: BusinessCallingSettings;

  /**
   * @public
   * <p>The Amazon Chime Voice Connector settings.</p>
   */
  VoiceConnector?: VoiceConnectorSettings;
}

/**
 * @public
 */
export interface UpdatePhoneNumberRequest {
  /**
   * @public
   * <p>The phone number ID.</p>
   */
  PhoneNumberId: string | undefined;

  /**
   * @public
   * <p>The product type.</p>
   */
  ProductType?: PhoneNumberProductType;

  /**
   * @public
   * <p>The outbound calling name associated with the phone number.</p>
   */
  CallingName?: string;
}

/**
 * @public
 */
export interface UpdatePhoneNumberResponse {
  /**
   * @public
   * <p>The updated phone number details.</p>
   */
  PhoneNumber?: PhoneNumber;
}

/**
 * @public
 */
export interface UpdatePhoneNumberSettingsRequest {
  /**
   * @public
   * <p>The default outbound calling name for the account.</p>
   */
  CallingName: string | undefined;
}

/**
 * @public
 */
export interface UpdateProxySessionRequest {
  /**
   * @public
   * <p>The Amazon Chime voice connector ID.</p>
   */
  VoiceConnectorId: string | undefined;

  /**
   * @public
   * <p>The proxy session ID.</p>
   */
  ProxySessionId: string | undefined;

  /**
   * @public
   * <p>The proxy session capabilities.</p>
   */
  Capabilities: Capability[] | undefined;

  /**
   * @public
   * <p>The number of minutes allowed for the proxy session.</p>
   */
  ExpiryMinutes?: number;
}

/**
 * @public
 */
export interface UpdateProxySessionResponse {
  /**
   * @public
   * <p>The proxy session details.</p>
   */
  ProxySession?: ProxySession;
}

/**
 * @public
 */
export interface UpdateRoomRequest {
  /**
   * @public
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * @public
   * <p>The room ID.</p>
   */
  RoomId: string | undefined;

  /**
   * @public
   * <p>The room name.</p>
   */
  Name?: string;
}

/**
 * @public
 */
export interface UpdateRoomResponse {
  /**
   * @public
   * <p>The room details.</p>
   */
  Room?: Room;
}

/**
 * @public
 */
export interface UpdateRoomMembershipRequest {
  /**
   * @public
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * @public
   * <p>The room ID.</p>
   */
  RoomId: string | undefined;

  /**
   * @public
   * <p>The member ID.</p>
   */
  MemberId: string | undefined;

  /**
   * @public
   * <p>The role of the member.</p>
   */
  Role?: RoomMembershipRole;
}

/**
 * @public
 */
export interface UpdateRoomMembershipResponse {
  /**
   * @public
   * <p>The room membership details.</p>
   */
  RoomMembership?: RoomMembership;
}

/**
 * @public
 */
export interface UpdateSipMediaApplicationRequest {
  /**
   * @public
   * <p>The SIP media application ID.</p>
   */
  SipMediaApplicationId: string | undefined;

  /**
   * @public
   * <p>The new name for the specified SIP media application.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The new set of endpoints for the specified SIP media application.</p>
   */
  Endpoints?: SipMediaApplicationEndpoint[];
}

/**
 * @public
 */
export interface UpdateSipMediaApplicationResponse {
  /**
   * @public
   * <p>The updated SIP media application details.</p>
   */
  SipMediaApplication?: SipMediaApplication;
}

/**
 * @public
 */
export interface UpdateSipMediaApplicationCallRequest {
  /**
   * @public
   * <p>The ID of the SIP media application handling the call.</p>
   */
  SipMediaApplicationId: string | undefined;

  /**
   * @public
   * <p>The ID of the call transaction.</p>
   */
  TransactionId: string | undefined;

  /**
   * @public
   * <p>Arguments made available to the Lambda function as part of the <code>CALL_UPDATE_REQUESTED</code> event. Can contain 0-20 key-value pairs.</p>
   */
  Arguments: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UpdateSipMediaApplicationCallResponse {
  /**
   * @public
   * <p>A <code>Call</code> instance for a SIP media application.</p>
   */
  SipMediaApplicationCall?: SipMediaApplicationCall;
}

/**
 * @public
 */
export interface UpdateSipRuleRequest {
  /**
   * @public
   * <p>The SIP rule ID.</p>
   */
  SipRuleId: string | undefined;

  /**
   * @public
   * <p>The new name for the specified SIP rule.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The new value specified to indicate whether the rule is disabled.</p>
   */
  Disabled?: boolean;

  /**
   * @public
   * <p>The new value of the list of target applications.</p>
   */
  TargetApplications?: SipRuleTargetApplication[];
}

/**
 * @public
 */
export interface UpdateSipRuleResponse {
  /**
   * @public
   * <p>Updated SIP rule details.</p>
   */
  SipRule?: SipRule;
}

/**
 * @public
 */
export interface UpdateUserRequest {
  /**
   * @public
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * @public
   * <p>The user ID.</p>
   */
  UserId: string | undefined;

  /**
   * @public
   * <p>The user license type to update. This must be a supported license type for the Amazon Chime
   *             account that the user belongs to.</p>
   */
  LicenseType?: License;

  /**
   * @public
   * <p>The user type.</p>
   */
  UserType?: UserType;

  /**
   * @public
   * <p>The Alexa for Business metadata.</p>
   */
  AlexaForBusinessMetadata?: AlexaForBusinessMetadata;
}

/**
 * @public
 */
export interface UpdateUserResponse {
  /**
   * @public
   * <p>The updated user details.</p>
   */
  User?: User;
}

/**
 * @public
 */
export interface UpdateUserSettingsRequest {
  /**
   * @public
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * @public
   * <p>The user ID.</p>
   */
  UserId: string | undefined;

  /**
   * @public
   * <p>The user settings to update.</p>
   */
  UserSettings: UserSettings | undefined;
}

/**
 * @public
 */
export interface UpdateVoiceConnectorRequest {
  /**
   * @public
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;

  /**
   * @public
   * <p>The name of the Amazon Chime Voice Connector.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>When enabled, requires encryption for the Amazon Chime Voice Connector.</p>
   */
  RequireEncryption: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateVoiceConnectorResponse {
  /**
   * @public
   * <p>The updated Amazon Chime Voice Connector details.</p>
   */
  VoiceConnector?: VoiceConnector;
}

/**
 * @public
 */
export interface UpdateVoiceConnectorGroupRequest {
  /**
   * @public
   * <p>The Amazon Chime Voice Connector group ID.</p>
   */
  VoiceConnectorGroupId: string | undefined;

  /**
   * @public
   * <p>The name of the Amazon Chime Voice Connector group.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The <code>VoiceConnectorItems</code> to associate with the group.</p>
   */
  VoiceConnectorItems: VoiceConnectorItem[] | undefined;
}

/**
 * @public
 */
export interface UpdateVoiceConnectorGroupResponse {
  /**
   * @public
   * <p>The updated Amazon Chime Voice Connector group details.</p>
   */
  VoiceConnectorGroup?: VoiceConnectorGroup;
}

/**
 * @public
 */
export interface ValidateE911AddressRequest {
  /**
   * @public
   * <p>The AWS account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The address street number, such as <code>200</code> or <code>2121</code>.</p>
   */
  StreetNumber: string | undefined;

  /**
   * @public
   * <p>The address street information, such as <code>8th Avenue</code>.</p>
   */
  StreetInfo: string | undefined;

  /**
   * @public
   * <p>The address city, such as <code>Portland</code>.</p>
   */
  City: string | undefined;

  /**
   * @public
   * <p>The address state, such as <code>ME</code>.</p>
   */
  State: string | undefined;

  /**
   * @public
   * <p>The address country, such as <code>US</code>. </p>
   */
  Country: string | undefined;

  /**
   * @public
   * <p>The address postal code, such as <code>04352</code>.</p>
   */
  PostalCode: string | undefined;
}

/**
 * @public
 */
export interface ValidateE911AddressResponse {
  /**
   * @public
   * <p>Number indicating the result of address validation.
   *             <code>0</code> means the address was perfect as is and successfully validated.
   *             <code>1</code> means the address was corrected. <code>2</code> means the address sent was
   *             not close enough and was not validated.</p>
   */
  ValidationResult?: number;

  /**
   * @public
   * <p>The ID that represents the address.</p>
   */
  AddressExternalId?: string;

  /**
   * @public
   * <p>The validated address.</p>
   */
  Address?: Address;

  /**
   * @public
   * <p>The list of address suggestions.</p>
   */
  CandidateAddressList?: CandidateAddress[];
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
