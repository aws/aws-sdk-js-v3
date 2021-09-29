import {
  Account,
  AccountSettings,
  AlexaForBusinessMetadata,
  AppInstanceAdminSummary,
  AppInstanceRetentionSettings,
  AppInstanceStreamingConfiguration,
  AppInstanceSummary,
  AppInstanceUserSummary,
  Attendee,
  Bot,
  BusinessCallingSettings,
  Capability,
  ChannelBanSummary,
  ChannelMembershipForAppInstanceUserSummary,
  ChannelMembershipSummary,
  ChannelMembershipType,
  ChannelMessagePersistenceType,
  ChannelMessageSummary,
  ChannelMessageType,
  ChannelMode,
  ChannelModeratedByAppInstanceUserSummary,
  ChannelModeratorSummary,
  ChannelPrivacy,
  ChannelSummary,
  Credential,
  EmailStatus,
  EmergencyCallingConfiguration,
  EngineTranscribeMedicalSettings,
  EngineTranscribeSettings,
  EventsConfiguration,
  InviteStatus,
  License,
  MediaCapturePipeline,
  Meeting,
  PhoneNumber,
  PhoneNumberAssociationName,
  PhoneNumberOrder,
  PhoneNumberProductType,
  PhoneNumberStatus,
  PhoneNumberType,
  ProxySession,
  ProxySessionStatus,
  RetentionSettings,
  Room,
  RoomMembership,
  RoomMembershipRole,
  SipMediaApplication,
  SipMediaApplicationCall,
  SipMediaApplicationEndpoint,
  SipMediaApplicationLoggingConfiguration,
  SipRule,
  SipRuleTargetApplication,
  Tag,
  User,
  UserSettings,
  UserType,
  VoiceConnector,
  VoiceConnectorGroup,
  VoiceConnectorItem,
  VoiceConnectorSettings,
} from "./models_0";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";

export interface GetUserSettingsResponse {
  /**
   * <p>The user settings.</p>
   */
  UserSettings?: UserSettings;
}

export namespace GetUserSettingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetUserSettingsResponse): any => ({
    ...obj,
  });
}

export interface GetVoiceConnectorRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

export namespace GetVoiceConnectorRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetVoiceConnectorRequest): any => ({
    ...obj,
  });
}

export interface GetVoiceConnectorResponse {
  /**
   * <p>The Amazon Chime Voice Connector details.</p>
   */
  VoiceConnector?: VoiceConnector;
}

export namespace GetVoiceConnectorResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetVoiceConnectorResponse): any => ({
    ...obj,
  });
}

export interface GetVoiceConnectorEmergencyCallingConfigurationRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

export namespace GetVoiceConnectorEmergencyCallingConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetVoiceConnectorEmergencyCallingConfigurationRequest): any => ({
    ...obj,
  });
}

export interface GetVoiceConnectorEmergencyCallingConfigurationResponse {
  /**
   * <p>The emergency calling configuration details.</p>
   */
  EmergencyCallingConfiguration?: EmergencyCallingConfiguration;
}

export namespace GetVoiceConnectorEmergencyCallingConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetVoiceConnectorEmergencyCallingConfigurationResponse): any => ({
    ...obj,
    ...(obj.EmergencyCallingConfiguration && {
      EmergencyCallingConfiguration: EmergencyCallingConfiguration.filterSensitiveLog(
        obj.EmergencyCallingConfiguration
      ),
    }),
  });
}

export interface GetVoiceConnectorGroupRequest {
  /**
   * <p>The Amazon Chime Voice Connector group ID.</p>
   */
  VoiceConnectorGroupId: string | undefined;
}

export namespace GetVoiceConnectorGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetVoiceConnectorGroupRequest): any => ({
    ...obj,
  });
}

export interface GetVoiceConnectorGroupResponse {
  /**
   * <p>The Amazon Chime Voice Connector group details.</p>
   */
  VoiceConnectorGroup?: VoiceConnectorGroup;
}

export namespace GetVoiceConnectorGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetVoiceConnectorGroupResponse): any => ({
    ...obj,
  });
}

export interface GetVoiceConnectorLoggingConfigurationRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

export namespace GetVoiceConnectorLoggingConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetVoiceConnectorLoggingConfigurationRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The logging configuration associated with an Amazon Chime Voice Connector. Specifies whether SIP message logs are enabled for sending to Amazon CloudWatch Logs.</p>
 */
export interface LoggingConfiguration {
  /**
   * <p>When true, enables SIP message logs for sending to Amazon CloudWatch Logs.</p>
   */
  EnableSIPLogs?: boolean;
}

export namespace LoggingConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LoggingConfiguration): any => ({
    ...obj,
  });
}

export interface GetVoiceConnectorLoggingConfigurationResponse {
  /**
   * <p>The logging configuration details.</p>
   */
  LoggingConfiguration?: LoggingConfiguration;
}

export namespace GetVoiceConnectorLoggingConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetVoiceConnectorLoggingConfigurationResponse): any => ({
    ...obj,
  });
}

export interface GetVoiceConnectorOriginationRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

export namespace GetVoiceConnectorOriginationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetVoiceConnectorOriginationRequest): any => ({
    ...obj,
  });
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

export namespace OriginationRoute {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OriginationRoute): any => ({
    ...obj,
  });
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

export namespace Origination {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Origination): any => ({
    ...obj,
  });
}

export interface GetVoiceConnectorOriginationResponse {
  /**
   * <p>The origination setting details.</p>
   */
  Origination?: Origination;
}

export namespace GetVoiceConnectorOriginationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetVoiceConnectorOriginationResponse): any => ({
    ...obj,
  });
}

export interface GetVoiceConnectorProxyRequest {
  /**
   * <p>The Amazon Chime voice connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

export namespace GetVoiceConnectorProxyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetVoiceConnectorProxyRequest): any => ({
    ...obj,
  });
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

export namespace Proxy {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Proxy): any => ({
    ...obj,
    ...(obj.FallBackPhoneNumber && { FallBackPhoneNumber: SENSITIVE_STRING }),
  });
}

export interface GetVoiceConnectorProxyResponse {
  /**
   * <p>The proxy configuration details.</p>
   */
  Proxy?: Proxy;
}

export namespace GetVoiceConnectorProxyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetVoiceConnectorProxyResponse): any => ({
    ...obj,
    ...(obj.Proxy && { Proxy: Proxy.filterSensitiveLog(obj.Proxy) }),
  });
}

export interface GetVoiceConnectorStreamingConfigurationRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

export namespace GetVoiceConnectorStreamingConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetVoiceConnectorStreamingConfigurationRequest): any => ({
    ...obj,
  });
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

export namespace StreamingNotificationTarget {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StreamingNotificationTarget): any => ({
    ...obj,
  });
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

export namespace StreamingConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StreamingConfiguration): any => ({
    ...obj,
  });
}

export interface GetVoiceConnectorStreamingConfigurationResponse {
  /**
   * <p>The streaming configuration details.</p>
   */
  StreamingConfiguration?: StreamingConfiguration;
}

export namespace GetVoiceConnectorStreamingConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetVoiceConnectorStreamingConfigurationResponse): any => ({
    ...obj,
  });
}

export interface GetVoiceConnectorTerminationRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

export namespace GetVoiceConnectorTerminationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetVoiceConnectorTerminationRequest): any => ({
    ...obj,
  });
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

export namespace Termination {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Termination): any => ({
    ...obj,
    ...(obj.DefaultPhoneNumber && { DefaultPhoneNumber: SENSITIVE_STRING }),
  });
}

export interface GetVoiceConnectorTerminationResponse {
  /**
   * <p>The termination setting details.</p>
   */
  Termination?: Termination;
}

export namespace GetVoiceConnectorTerminationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetVoiceConnectorTerminationResponse): any => ({
    ...obj,
    ...(obj.Termination && { Termination: Termination.filterSensitiveLog(obj.Termination) }),
  });
}

export interface GetVoiceConnectorTerminationHealthRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

export namespace GetVoiceConnectorTerminationHealthRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetVoiceConnectorTerminationHealthRequest): any => ({
    ...obj,
  });
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

export namespace TerminationHealth {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TerminationHealth): any => ({
    ...obj,
  });
}

export interface GetVoiceConnectorTerminationHealthResponse {
  /**
   * <p>The termination health details.</p>
   */
  TerminationHealth?: TerminationHealth;
}

export namespace GetVoiceConnectorTerminationHealthResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetVoiceConnectorTerminationHealthResponse): any => ({
    ...obj,
  });
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

export namespace Invite {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Invite): any => ({
    ...obj,
    ...(obj.EmailAddress && { EmailAddress: SENSITIVE_STRING }),
  });
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

export namespace InviteUsersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InviteUsersRequest): any => ({
    ...obj,
    ...(obj.UserEmailList && { UserEmailList: SENSITIVE_STRING }),
  });
}

export interface InviteUsersResponse {
  /**
   * <p>The email invitation details.</p>
   */
  Invites?: Invite[];
}

export namespace InviteUsersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InviteUsersResponse): any => ({
    ...obj,
    ...(obj.Invites && { Invites: obj.Invites.map((item) => Invite.filterSensitiveLog(item)) }),
  });
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

export namespace ListAccountsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAccountsRequest): any => ({
    ...obj,
    ...(obj.UserEmail && { UserEmail: SENSITIVE_STRING }),
  });
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

export namespace ListAccountsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAccountsResponse): any => ({
    ...obj,
  });
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

export namespace ListAppInstanceAdminsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAppInstanceAdminsRequest): any => ({
    ...obj,
    ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
  });
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

export namespace ListAppInstanceAdminsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAppInstanceAdminsResponse): any => ({
    ...obj,
    ...(obj.AppInstanceAdmins && {
      AppInstanceAdmins: obj.AppInstanceAdmins.map((item) => AppInstanceAdminSummary.filterSensitiveLog(item)),
    }),
    ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
  });
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

export namespace ListAppInstancesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAppInstancesRequest): any => ({
    ...obj,
    ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
  });
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

export namespace ListAppInstancesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAppInstancesResponse): any => ({
    ...obj,
    ...(obj.AppInstances && {
      AppInstances: obj.AppInstances.map((item) => AppInstanceSummary.filterSensitiveLog(item)),
    }),
    ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
  });
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

export namespace ListAppInstanceUsersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAppInstanceUsersRequest): any => ({
    ...obj,
    ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
  });
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

export namespace ListAppInstanceUsersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAppInstanceUsersResponse): any => ({
    ...obj,
    ...(obj.AppInstanceUsers && {
      AppInstanceUsers: obj.AppInstanceUsers.map((item) => AppInstanceUserSummary.filterSensitiveLog(item)),
    }),
    ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
  });
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

export namespace ListAttendeesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAttendeesRequest): any => ({
    ...obj,
  });
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

export namespace ListAttendeesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAttendeesResponse): any => ({
    ...obj,
    ...(obj.Attendees && { Attendees: obj.Attendees.map((item) => Attendee.filterSensitiveLog(item)) }),
  });
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

export namespace ListAttendeeTagsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAttendeeTagsRequest): any => ({
    ...obj,
  });
}

export interface ListAttendeeTagsResponse {
  /**
   * <p>A list of tag key-value pairs.</p>
   */
  Tags?: Tag[];
}

export namespace ListAttendeeTagsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAttendeeTagsResponse): any => ({
    ...obj,
    ...(obj.Tags && { Tags: obj.Tags.map((item) => Tag.filterSensitiveLog(item)) }),
  });
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

export namespace ListBotsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListBotsRequest): any => ({
    ...obj,
  });
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

export namespace ListBotsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListBotsResponse): any => ({
    ...obj,
    ...(obj.Bots && { Bots: obj.Bots.map((item) => Bot.filterSensitiveLog(item)) }),
  });
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

export namespace ListChannelBansRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListChannelBansRequest): any => ({
    ...obj,
    ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
  });
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

export namespace ListChannelBansResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListChannelBansResponse): any => ({
    ...obj,
    ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
    ...(obj.ChannelBans && { ChannelBans: obj.ChannelBans.map((item) => ChannelBanSummary.filterSensitiveLog(item)) }),
  });
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

export namespace ListChannelMembershipsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListChannelMembershipsRequest): any => ({
    ...obj,
    ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
  });
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

export namespace ListChannelMembershipsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListChannelMembershipsResponse): any => ({
    ...obj,
    ...(obj.ChannelMemberships && {
      ChannelMemberships: obj.ChannelMemberships.map((item) => ChannelMembershipSummary.filterSensitiveLog(item)),
    }),
    ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
  });
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

export namespace ListChannelMembershipsForAppInstanceUserRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListChannelMembershipsForAppInstanceUserRequest): any => ({
    ...obj,
    ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
  });
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

export namespace ListChannelMembershipsForAppInstanceUserResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListChannelMembershipsForAppInstanceUserResponse): any => ({
    ...obj,
    ...(obj.ChannelMemberships && {
      ChannelMemberships: obj.ChannelMemberships.map((item) =>
        ChannelMembershipForAppInstanceUserSummary.filterSensitiveLog(item)
      ),
    }),
    ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
  });
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

export namespace ListChannelMessagesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListChannelMessagesRequest): any => ({
    ...obj,
    ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
  });
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

export namespace ListChannelMessagesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListChannelMessagesResponse): any => ({
    ...obj,
    ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
    ...(obj.ChannelMessages && {
      ChannelMessages: obj.ChannelMessages.map((item) => ChannelMessageSummary.filterSensitiveLog(item)),
    }),
  });
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

export namespace ListChannelModeratorsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListChannelModeratorsRequest): any => ({
    ...obj,
    ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
  });
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

export namespace ListChannelModeratorsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListChannelModeratorsResponse): any => ({
    ...obj,
    ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
    ...(obj.ChannelModerators && {
      ChannelModerators: obj.ChannelModerators.map((item) => ChannelModeratorSummary.filterSensitiveLog(item)),
    }),
  });
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

export namespace ListChannelsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListChannelsRequest): any => ({
    ...obj,
    ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
  });
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

export namespace ListChannelsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListChannelsResponse): any => ({
    ...obj,
    ...(obj.Channels && { Channels: obj.Channels.map((item) => ChannelSummary.filterSensitiveLog(item)) }),
    ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
  });
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

export namespace ListChannelsModeratedByAppInstanceUserRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListChannelsModeratedByAppInstanceUserRequest): any => ({
    ...obj,
    ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
  });
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

export namespace ListChannelsModeratedByAppInstanceUserResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListChannelsModeratedByAppInstanceUserResponse): any => ({
    ...obj,
    ...(obj.Channels && {
      Channels: obj.Channels.map((item) => ChannelModeratedByAppInstanceUserSummary.filterSensitiveLog(item)),
    }),
    ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
  });
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

export namespace ListMediaCapturePipelinesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListMediaCapturePipelinesRequest): any => ({
    ...obj,
  });
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

export namespace ListMediaCapturePipelinesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListMediaCapturePipelinesResponse): any => ({
    ...obj,
    ...(obj.MediaCapturePipelines && {
      MediaCapturePipelines: obj.MediaCapturePipelines.map((item) => MediaCapturePipeline.filterSensitiveLog(item)),
    }),
  });
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

export namespace ListMeetingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListMeetingsRequest): any => ({
    ...obj,
  });
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

export namespace ListMeetingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListMeetingsResponse): any => ({
    ...obj,
    ...(obj.Meetings && { Meetings: obj.Meetings.map((item) => Meeting.filterSensitiveLog(item)) }),
  });
}

export interface ListMeetingTagsRequest {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;
}

export namespace ListMeetingTagsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListMeetingTagsRequest): any => ({
    ...obj,
  });
}

export interface ListMeetingTagsResponse {
  /**
   * <p>A list of tag key-value pairs.</p>
   */
  Tags?: Tag[];
}

export namespace ListMeetingTagsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListMeetingTagsResponse): any => ({
    ...obj,
    ...(obj.Tags && { Tags: obj.Tags.map((item) => Tag.filterSensitiveLog(item)) }),
  });
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

export namespace ListPhoneNumberOrdersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPhoneNumberOrdersRequest): any => ({
    ...obj,
  });
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

export namespace ListPhoneNumberOrdersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPhoneNumberOrdersResponse): any => ({
    ...obj,
  });
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

export namespace ListPhoneNumbersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPhoneNumbersRequest): any => ({
    ...obj,
  });
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

export namespace ListPhoneNumbersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPhoneNumbersResponse): any => ({
    ...obj,
    ...(obj.PhoneNumbers && { PhoneNumbers: obj.PhoneNumbers.map((item) => PhoneNumber.filterSensitiveLog(item)) }),
  });
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

export namespace ListProxySessionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListProxySessionsRequest): any => ({
    ...obj,
  });
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

export namespace ListProxySessionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListProxySessionsResponse): any => ({
    ...obj,
  });
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

export namespace ListRoomMembershipsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListRoomMembershipsRequest): any => ({
    ...obj,
  });
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

export namespace ListRoomMembershipsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListRoomMembershipsResponse): any => ({
    ...obj,
    ...(obj.RoomMemberships && {
      RoomMemberships: obj.RoomMemberships.map((item) => RoomMembership.filterSensitiveLog(item)),
    }),
  });
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

export namespace ListRoomsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListRoomsRequest): any => ({
    ...obj,
  });
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

export namespace ListRoomsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListRoomsResponse): any => ({
    ...obj,
    ...(obj.Rooms && { Rooms: obj.Rooms.map((item) => Room.filterSensitiveLog(item)) }),
  });
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

export namespace ListSipMediaApplicationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSipMediaApplicationsRequest): any => ({
    ...obj,
  });
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

export namespace ListSipMediaApplicationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSipMediaApplicationsResponse): any => ({
    ...obj,
  });
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

export namespace ListSipRulesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSipRulesRequest): any => ({
    ...obj,
  });
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

export namespace ListSipRulesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSipRulesResponse): any => ({
    ...obj,
  });
}

export interface ListSupportedPhoneNumberCountriesRequest {
  /**
   * <p>The phone number product type.</p>
   */
  ProductType: PhoneNumberProductType | string | undefined;
}

export namespace ListSupportedPhoneNumberCountriesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSupportedPhoneNumberCountriesRequest): any => ({
    ...obj,
  });
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

export namespace PhoneNumberCountry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PhoneNumberCountry): any => ({
    ...obj,
  });
}

export interface ListSupportedPhoneNumberCountriesResponse {
  /**
   * <p>The supported phone number countries.</p>
   */
  PhoneNumberCountries?: PhoneNumberCountry[];
}

export namespace ListSupportedPhoneNumberCountriesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSupportedPhoneNumberCountriesResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The resource ARN.</p>
   */
  ResourceARN: string | undefined;
}

export namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
    ...(obj.ResourceARN && { ResourceARN: SENSITIVE_STRING }),
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>A list of tag-key value pairs.</p>
   */
  Tags?: Tag[];
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
    ...(obj.Tags && { Tags: obj.Tags.map((item) => Tag.filterSensitiveLog(item)) }),
  });
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

export namespace ListUsersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListUsersRequest): any => ({
    ...obj,
    ...(obj.UserEmail && { UserEmail: SENSITIVE_STRING }),
  });
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

export namespace ListUsersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListUsersResponse): any => ({
    ...obj,
    ...(obj.Users && { Users: obj.Users.map((item) => User.filterSensitiveLog(item)) }),
  });
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

export namespace ListVoiceConnectorGroupsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListVoiceConnectorGroupsRequest): any => ({
    ...obj,
  });
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

export namespace ListVoiceConnectorGroupsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListVoiceConnectorGroupsResponse): any => ({
    ...obj,
  });
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

export namespace ListVoiceConnectorsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListVoiceConnectorsRequest): any => ({
    ...obj,
  });
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

export namespace ListVoiceConnectorsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListVoiceConnectorsResponse): any => ({
    ...obj,
  });
}

export interface ListVoiceConnectorTerminationCredentialsRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

export namespace ListVoiceConnectorTerminationCredentialsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListVoiceConnectorTerminationCredentialsRequest): any => ({
    ...obj,
  });
}

export interface ListVoiceConnectorTerminationCredentialsResponse {
  /**
   * <p>A list of user names.</p>
   */
  Usernames?: string[];
}

export namespace ListVoiceConnectorTerminationCredentialsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListVoiceConnectorTerminationCredentialsResponse): any => ({
    ...obj,
    ...(obj.Usernames && { Usernames: SENSITIVE_STRING }),
  });
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

export namespace LogoutUserRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LogoutUserRequest): any => ({
    ...obj,
  });
}

export interface LogoutUserResponse {}

export namespace LogoutUserResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LogoutUserResponse): any => ({
    ...obj,
  });
}

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

export namespace PutAppInstanceRetentionSettingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutAppInstanceRetentionSettingsRequest): any => ({
    ...obj,
  });
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

export namespace PutAppInstanceRetentionSettingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutAppInstanceRetentionSettingsResponse): any => ({
    ...obj,
  });
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

export namespace PutAppInstanceStreamingConfigurationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutAppInstanceStreamingConfigurationsRequest): any => ({
    ...obj,
    ...(obj.AppInstanceStreamingConfigurations && {
      AppInstanceStreamingConfigurations: obj.AppInstanceStreamingConfigurations.map((item) =>
        AppInstanceStreamingConfiguration.filterSensitiveLog(item)
      ),
    }),
  });
}

export interface PutAppInstanceStreamingConfigurationsResponse {
  /**
   * <p>The streaming configurations of an <code>AppInstance</code>.</p>
   */
  AppInstanceStreamingConfigurations?: AppInstanceStreamingConfiguration[];
}

export namespace PutAppInstanceStreamingConfigurationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutAppInstanceStreamingConfigurationsResponse): any => ({
    ...obj,
    ...(obj.AppInstanceStreamingConfigurations && {
      AppInstanceStreamingConfigurations: obj.AppInstanceStreamingConfigurations.map((item) =>
        AppInstanceStreamingConfiguration.filterSensitiveLog(item)
      ),
    }),
  });
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

export namespace PutEventsConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutEventsConfigurationRequest): any => ({
    ...obj,
    ...(obj.OutboundEventsHTTPSEndpoint && { OutboundEventsHTTPSEndpoint: SENSITIVE_STRING }),
    ...(obj.LambdaFunctionArn && { LambdaFunctionArn: SENSITIVE_STRING }),
  });
}

export interface PutEventsConfigurationResponse {
  /**
   * <p>The configuration that allows a bot to receive outgoing events. Can be either an HTTPS endpoint or a Lambda function ARN.</p>
   */
  EventsConfiguration?: EventsConfiguration;
}

export namespace PutEventsConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutEventsConfigurationResponse): any => ({
    ...obj,
    ...(obj.EventsConfiguration && {
      EventsConfiguration: EventsConfiguration.filterSensitiveLog(obj.EventsConfiguration),
    }),
  });
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

export namespace PutRetentionSettingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutRetentionSettingsRequest): any => ({
    ...obj,
  });
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

export namespace PutRetentionSettingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutRetentionSettingsResponse): any => ({
    ...obj,
  });
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

export namespace PutSipMediaApplicationLoggingConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutSipMediaApplicationLoggingConfigurationRequest): any => ({
    ...obj,
  });
}

export interface PutSipMediaApplicationLoggingConfigurationResponse {
  /**
   * <p>Logging configuration of the SIP media application.</p>
   */
  SipMediaApplicationLoggingConfiguration?: SipMediaApplicationLoggingConfiguration;
}

export namespace PutSipMediaApplicationLoggingConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutSipMediaApplicationLoggingConfigurationResponse): any => ({
    ...obj,
  });
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

export namespace PutVoiceConnectorEmergencyCallingConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutVoiceConnectorEmergencyCallingConfigurationRequest): any => ({
    ...obj,
    ...(obj.EmergencyCallingConfiguration && {
      EmergencyCallingConfiguration: EmergencyCallingConfiguration.filterSensitiveLog(
        obj.EmergencyCallingConfiguration
      ),
    }),
  });
}

export interface PutVoiceConnectorEmergencyCallingConfigurationResponse {
  /**
   * <p>The emergency calling configuration details.</p>
   */
  EmergencyCallingConfiguration?: EmergencyCallingConfiguration;
}

export namespace PutVoiceConnectorEmergencyCallingConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutVoiceConnectorEmergencyCallingConfigurationResponse): any => ({
    ...obj,
    ...(obj.EmergencyCallingConfiguration && {
      EmergencyCallingConfiguration: EmergencyCallingConfiguration.filterSensitiveLog(
        obj.EmergencyCallingConfiguration
      ),
    }),
  });
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

export namespace PutVoiceConnectorLoggingConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutVoiceConnectorLoggingConfigurationRequest): any => ({
    ...obj,
  });
}

export interface PutVoiceConnectorLoggingConfigurationResponse {
  /**
   * <p>The updated logging configuration details.</p>
   */
  LoggingConfiguration?: LoggingConfiguration;
}

export namespace PutVoiceConnectorLoggingConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutVoiceConnectorLoggingConfigurationResponse): any => ({
    ...obj,
  });
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

export namespace PutVoiceConnectorOriginationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutVoiceConnectorOriginationRequest): any => ({
    ...obj,
  });
}

export interface PutVoiceConnectorOriginationResponse {
  /**
   * <p>The updated origination setting details.</p>
   */
  Origination?: Origination;
}

export namespace PutVoiceConnectorOriginationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutVoiceConnectorOriginationResponse): any => ({
    ...obj,
  });
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

export namespace PutVoiceConnectorProxyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutVoiceConnectorProxyRequest): any => ({
    ...obj,
    ...(obj.FallBackPhoneNumber && { FallBackPhoneNumber: SENSITIVE_STRING }),
  });
}

export interface PutVoiceConnectorProxyResponse {
  /**
   * <p>The proxy configuration details.</p>
   */
  Proxy?: Proxy;
}

export namespace PutVoiceConnectorProxyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutVoiceConnectorProxyResponse): any => ({
    ...obj,
    ...(obj.Proxy && { Proxy: Proxy.filterSensitiveLog(obj.Proxy) }),
  });
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

export namespace PutVoiceConnectorStreamingConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutVoiceConnectorStreamingConfigurationRequest): any => ({
    ...obj,
  });
}

export interface PutVoiceConnectorStreamingConfigurationResponse {
  /**
   * <p>The updated streaming configuration details.</p>
   */
  StreamingConfiguration?: StreamingConfiguration;
}

export namespace PutVoiceConnectorStreamingConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutVoiceConnectorStreamingConfigurationResponse): any => ({
    ...obj,
  });
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

export namespace PutVoiceConnectorTerminationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutVoiceConnectorTerminationRequest): any => ({
    ...obj,
    ...(obj.Termination && { Termination: Termination.filterSensitiveLog(obj.Termination) }),
  });
}

export interface PutVoiceConnectorTerminationResponse {
  /**
   * <p>The updated termination setting details.</p>
   */
  Termination?: Termination;
}

export namespace PutVoiceConnectorTerminationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutVoiceConnectorTerminationResponse): any => ({
    ...obj,
    ...(obj.Termination && { Termination: Termination.filterSensitiveLog(obj.Termination) }),
  });
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

export namespace PutVoiceConnectorTerminationCredentialsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutVoiceConnectorTerminationCredentialsRequest): any => ({
    ...obj,
    ...(obj.Credentials && { Credentials: obj.Credentials.map((item) => Credential.filterSensitiveLog(item)) }),
  });
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

export namespace RedactChannelMessageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RedactChannelMessageRequest): any => ({
    ...obj,
  });
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

export namespace RedactChannelMessageResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RedactChannelMessageResponse): any => ({
    ...obj,
  });
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

export namespace RedactConversationMessageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RedactConversationMessageRequest): any => ({
    ...obj,
  });
}

export interface RedactConversationMessageResponse {}

export namespace RedactConversationMessageResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RedactConversationMessageResponse): any => ({
    ...obj,
  });
}

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

export namespace RedactRoomMessageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RedactRoomMessageRequest): any => ({
    ...obj,
  });
}

export interface RedactRoomMessageResponse {}

export namespace RedactRoomMessageResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RedactRoomMessageResponse): any => ({
    ...obj,
  });
}

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

export namespace RegenerateSecurityTokenRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegenerateSecurityTokenRequest): any => ({
    ...obj,
  });
}

export interface RegenerateSecurityTokenResponse {
  /**
   * <p>A resource that allows Enterprise account administrators to configure an interface to receive events from Amazon Chime.</p>
   */
  Bot?: Bot;
}

export namespace RegenerateSecurityTokenResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegenerateSecurityTokenResponse): any => ({
    ...obj,
    ...(obj.Bot && { Bot: Bot.filterSensitiveLog(obj.Bot) }),
  });
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

export namespace ResetPersonalPINRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResetPersonalPINRequest): any => ({
    ...obj,
  });
}

export interface ResetPersonalPINResponse {
  /**
   * <p>The user details and new personal meeting PIN.</p>
   */
  User?: User;
}

export namespace ResetPersonalPINResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResetPersonalPINResponse): any => ({
    ...obj,
    ...(obj.User && { User: User.filterSensitiveLog(obj.User) }),
  });
}

export interface RestorePhoneNumberRequest {
  /**
   * <p>The phone number.</p>
   */
  PhoneNumberId: string | undefined;
}

export namespace RestorePhoneNumberRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RestorePhoneNumberRequest): any => ({
    ...obj,
  });
}

export interface RestorePhoneNumberResponse {
  /**
   * <p>The phone number details.</p>
   */
  PhoneNumber?: PhoneNumber;
}

export namespace RestorePhoneNumberResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RestorePhoneNumberResponse): any => ({
    ...obj,
    ...(obj.PhoneNumber && { PhoneNumber: PhoneNumber.filterSensitiveLog(obj.PhoneNumber) }),
  });
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

export namespace SearchAvailablePhoneNumbersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchAvailablePhoneNumbersRequest): any => ({
    ...obj,
  });
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

export namespace SearchAvailablePhoneNumbersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchAvailablePhoneNumbersResponse): any => ({
    ...obj,
    ...(obj.E164PhoneNumbers && { E164PhoneNumbers: SENSITIVE_STRING }),
  });
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

export namespace SendChannelMessageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SendChannelMessageRequest): any => ({
    ...obj,
    ...(obj.Content && { Content: SENSITIVE_STRING }),
    ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
    ...(obj.ClientRequestToken && { ClientRequestToken: SENSITIVE_STRING }),
  });
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

export namespace SendChannelMessageResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SendChannelMessageResponse): any => ({
    ...obj,
  });
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

export namespace TranscriptionConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TranscriptionConfiguration): any => ({
    ...obj,
  });
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

export namespace StartMeetingTranscriptionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartMeetingTranscriptionRequest): any => ({
    ...obj,
  });
}

export interface StartMeetingTranscriptionResponse {}

export namespace StartMeetingTranscriptionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartMeetingTranscriptionResponse): any => ({
    ...obj,
  });
}

export interface StopMeetingTranscriptionRequest {
  /**
   * <p>The unique ID of the meeting for which you stop transcription.</p>
   */
  MeetingId: string | undefined;
}

export namespace StopMeetingTranscriptionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopMeetingTranscriptionRequest): any => ({
    ...obj,
  });
}

export interface StopMeetingTranscriptionResponse {}

export namespace StopMeetingTranscriptionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopMeetingTranscriptionResponse): any => ({
    ...obj,
  });
}

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

export namespace TagAttendeeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagAttendeeRequest): any => ({
    ...obj,
    ...(obj.Tags && { Tags: obj.Tags.map((item) => Tag.filterSensitiveLog(item)) }),
  });
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

export namespace TagMeetingRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagMeetingRequest): any => ({
    ...obj,
    ...(obj.Tags && { Tags: obj.Tags.map((item) => Tag.filterSensitiveLog(item)) }),
  });
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

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
    ...(obj.ResourceARN && { ResourceARN: SENSITIVE_STRING }),
    ...(obj.Tags && { Tags: obj.Tags.map((item) => Tag.filterSensitiveLog(item)) }),
  });
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

export namespace UntagAttendeeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagAttendeeRequest): any => ({
    ...obj,
    ...(obj.TagKeys && { TagKeys: SENSITIVE_STRING }),
  });
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

export namespace UntagMeetingRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagMeetingRequest): any => ({
    ...obj,
    ...(obj.TagKeys && { TagKeys: SENSITIVE_STRING }),
  });
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

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
    ...(obj.ResourceARN && { ResourceARN: SENSITIVE_STRING }),
    ...(obj.TagKeys && { TagKeys: SENSITIVE_STRING }),
  });
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

export namespace UpdateAccountRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAccountRequest): any => ({
    ...obj,
  });
}

export interface UpdateAccountResponse {
  /**
   * <p>The updated Amazon Chime account details.</p>
   */
  Account?: Account;
}

export namespace UpdateAccountResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAccountResponse): any => ({
    ...obj,
  });
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

export namespace UpdateAccountSettingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAccountSettingsRequest): any => ({
    ...obj,
  });
}

export interface UpdateAccountSettingsResponse {}

export namespace UpdateAccountSettingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAccountSettingsResponse): any => ({
    ...obj,
  });
}

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

export namespace UpdateAppInstanceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAppInstanceRequest): any => ({
    ...obj,
    ...(obj.Name && { Name: SENSITIVE_STRING }),
    ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
  });
}

export interface UpdateAppInstanceResponse {
  /**
   * <p>The ARN of the <code>AppInstance</code>. </p>
   */
  AppInstanceArn?: string;
}

export namespace UpdateAppInstanceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAppInstanceResponse): any => ({
    ...obj,
  });
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

export namespace UpdateAppInstanceUserRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAppInstanceUserRequest): any => ({
    ...obj,
    ...(obj.Name && { Name: SENSITIVE_STRING }),
    ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
  });
}

export interface UpdateAppInstanceUserResponse {
  /**
   * <p>The ARN of the <code>AppInstanceUser</code>.</p>
   */
  AppInstanceUserArn?: string;
}

export namespace UpdateAppInstanceUserResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAppInstanceUserResponse): any => ({
    ...obj,
  });
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

export namespace UpdateBotRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateBotRequest): any => ({
    ...obj,
  });
}

export interface UpdateBotResponse {
  /**
   * <p>The updated bot details.</p>
   */
  Bot?: Bot;
}

export namespace UpdateBotResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateBotResponse): any => ({
    ...obj,
    ...(obj.Bot && { Bot: Bot.filterSensitiveLog(obj.Bot) }),
  });
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

export namespace UpdateChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateChannelRequest): any => ({
    ...obj,
    ...(obj.Name && { Name: SENSITIVE_STRING }),
    ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
  });
}

export interface UpdateChannelResponse {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn?: string;
}

export namespace UpdateChannelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateChannelResponse): any => ({
    ...obj,
  });
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

export namespace UpdateChannelMessageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateChannelMessageRequest): any => ({
    ...obj,
    ...(obj.Content && { Content: SENSITIVE_STRING }),
    ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
  });
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

export namespace UpdateChannelMessageResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateChannelMessageResponse): any => ({
    ...obj,
  });
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

export namespace UpdateChannelReadMarkerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateChannelReadMarkerRequest): any => ({
    ...obj,
  });
}

export interface UpdateChannelReadMarkerResponse {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn?: string;
}

export namespace UpdateChannelReadMarkerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateChannelReadMarkerResponse): any => ({
    ...obj,
  });
}

export interface UpdateGlobalSettingsRequest {
  /**
   * <p>The Amazon Chime Business Calling settings.</p>
   */
  BusinessCalling: BusinessCallingSettings | undefined;

  /**
   * <p>The Amazon Chime Voice Connector settings.</p>
   */
  VoiceConnector: VoiceConnectorSettings | undefined;
}

export namespace UpdateGlobalSettingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateGlobalSettingsRequest): any => ({
    ...obj,
  });
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

export namespace UpdatePhoneNumberRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdatePhoneNumberRequest): any => ({
    ...obj,
    ...(obj.CallingName && { CallingName: SENSITIVE_STRING }),
  });
}

export interface UpdatePhoneNumberResponse {
  /**
   * <p>The updated phone number details.</p>
   */
  PhoneNumber?: PhoneNumber;
}

export namespace UpdatePhoneNumberResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdatePhoneNumberResponse): any => ({
    ...obj,
    ...(obj.PhoneNumber && { PhoneNumber: PhoneNumber.filterSensitiveLog(obj.PhoneNumber) }),
  });
}

export interface UpdatePhoneNumberSettingsRequest {
  /**
   * <p>The default outbound calling name for the account.</p>
   */
  CallingName: string | undefined;
}

export namespace UpdatePhoneNumberSettingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdatePhoneNumberSettingsRequest): any => ({
    ...obj,
    ...(obj.CallingName && { CallingName: SENSITIVE_STRING }),
  });
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

export namespace UpdateProxySessionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateProxySessionRequest): any => ({
    ...obj,
  });
}

export interface UpdateProxySessionResponse {
  /**
   * <p>The proxy session details.</p>
   */
  ProxySession?: ProxySession;
}

export namespace UpdateProxySessionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateProxySessionResponse): any => ({
    ...obj,
    ...(obj.ProxySession && { ProxySession: ProxySession.filterSensitiveLog(obj.ProxySession) }),
  });
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

export namespace UpdateRoomRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRoomRequest): any => ({
    ...obj,
    ...(obj.Name && { Name: SENSITIVE_STRING }),
  });
}

export interface UpdateRoomResponse {
  /**
   * <p>The room details.</p>
   */
  Room?: Room;
}

export namespace UpdateRoomResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRoomResponse): any => ({
    ...obj,
    ...(obj.Room && { Room: Room.filterSensitiveLog(obj.Room) }),
  });
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

export namespace UpdateRoomMembershipRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRoomMembershipRequest): any => ({
    ...obj,
  });
}

export interface UpdateRoomMembershipResponse {
  /**
   * <p>The room membership details.</p>
   */
  RoomMembership?: RoomMembership;
}

export namespace UpdateRoomMembershipResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRoomMembershipResponse): any => ({
    ...obj,
    ...(obj.RoomMembership && { RoomMembership: RoomMembership.filterSensitiveLog(obj.RoomMembership) }),
  });
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

export namespace UpdateSipMediaApplicationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSipMediaApplicationRequest): any => ({
    ...obj,
    ...(obj.Endpoints && {
      Endpoints: obj.Endpoints.map((item) => SipMediaApplicationEndpoint.filterSensitiveLog(item)),
    }),
  });
}

export interface UpdateSipMediaApplicationResponse {
  /**
   * <p>The updated SIP media application details.</p>
   */
  SipMediaApplication?: SipMediaApplication;
}

export namespace UpdateSipMediaApplicationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSipMediaApplicationResponse): any => ({
    ...obj,
    ...(obj.SipMediaApplication && {
      SipMediaApplication: SipMediaApplication.filterSensitiveLog(obj.SipMediaApplication),
    }),
  });
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
  Arguments: { [key: string]: string } | undefined;
}

export namespace UpdateSipMediaApplicationCallRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSipMediaApplicationCallRequest): any => ({
    ...obj,
    ...(obj.Arguments && { Arguments: SENSITIVE_STRING }),
  });
}

export interface UpdateSipMediaApplicationCallResponse {
  /**
   * <p>A <code>Call</code> instance for a SIP media application.</p>
   */
  SipMediaApplicationCall?: SipMediaApplicationCall;
}

export namespace UpdateSipMediaApplicationCallResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSipMediaApplicationCallResponse): any => ({
    ...obj,
  });
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

export namespace UpdateSipRuleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSipRuleRequest): any => ({
    ...obj,
  });
}

export interface UpdateSipRuleResponse {
  /**
   * <p>Updated SIP rule details.</p>
   */
  SipRule?: SipRule;
}

export namespace UpdateSipRuleResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSipRuleResponse): any => ({
    ...obj,
  });
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

export namespace UpdateUserRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateUserRequest): any => ({
    ...obj,
    ...(obj.AlexaForBusinessMetadata && {
      AlexaForBusinessMetadata: AlexaForBusinessMetadata.filterSensitiveLog(obj.AlexaForBusinessMetadata),
    }),
  });
}

export interface UpdateUserResponse {
  /**
   * <p>The updated user details.</p>
   */
  User?: User;
}

export namespace UpdateUserResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateUserResponse): any => ({
    ...obj,
    ...(obj.User && { User: User.filterSensitiveLog(obj.User) }),
  });
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

export namespace UpdateUserSettingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateUserSettingsRequest): any => ({
    ...obj,
  });
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

export namespace UpdateVoiceConnectorRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateVoiceConnectorRequest): any => ({
    ...obj,
  });
}

export interface UpdateVoiceConnectorResponse {
  /**
   * <p>The updated Amazon Chime Voice Connector details.</p>
   */
  VoiceConnector?: VoiceConnector;
}

export namespace UpdateVoiceConnectorResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateVoiceConnectorResponse): any => ({
    ...obj,
  });
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

export namespace UpdateVoiceConnectorGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateVoiceConnectorGroupRequest): any => ({
    ...obj,
  });
}

export interface UpdateVoiceConnectorGroupResponse {
  /**
   * <p>The updated Amazon Chime Voice Connector group details.</p>
   */
  VoiceConnectorGroup?: VoiceConnectorGroup;
}

export namespace UpdateVoiceConnectorGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateVoiceConnectorGroupResponse): any => ({
    ...obj,
  });
}
