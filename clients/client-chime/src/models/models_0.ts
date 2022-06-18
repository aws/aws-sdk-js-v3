// smithy-typescript generated code
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import {
  Account,
  AccountSettings,
  AppInstance,
  AppInstanceAdmin,
  AppInstanceAdminSummary,
  AppInstanceRetentionSettings,
  AppInstanceStreamingConfiguration,
  AppInstanceSummary,
  AppInstanceUser,
  AppInstanceUserSummary,
  Attendee,
  BatchChannelMemberships,
  BatchCreateChannelMembershipError,
  Bot,
  BusinessCallingSettings,
  Capability,
  Channel,
  ChannelBan,
  ChannelBanSummary,
  ChannelMembership,
  ChannelMembershipForAppInstanceUserSummary,
  ChannelMembershipSummary,
  ChannelMembershipType,
  ChannelMessage,
  ChannelMessagePersistenceType,
  ChannelMessageSummary,
  ChannelMessageType,
  ChannelMode,
  ChannelModeratedByAppInstanceUserSummary,
  ChannelModerator,
  ChannelModeratorSummary,
  ChannelPrivacy,
  ChannelSummary,
  ChimeSdkMeetingConfiguration,
  CreateAttendeeError,
  CreateAttendeeRequestItem,
  Credential,
  EmergencyCallingConfiguration,
  EventsConfiguration,
  GeoMatchLevel,
  GeoMatchParams,
  Identity,
  Invite,
  LoggingConfiguration,
  MediaCapturePipeline,
  MediaPipelineSinkType,
  MediaPipelineSourceType,
  Meeting,
  MeetingNotificationConfiguration,
  MemberError,
  MembershipItem,
  MessagingSessionEndpoint,
  NumberSelectionBehavior,
  Origination,
  PhoneNumber,
  PhoneNumberAssociationName,
  PhoneNumberCountry,
  PhoneNumberError,
  PhoneNumberOrder,
  PhoneNumberProductType,
  PhoneNumberStatus,
  PhoneNumberType,
  Proxy,
  ProxySession,
  ProxySessionStatus,
  RetentionSettings,
  Room,
  RoomMembership,
  RoomMembershipRole,
  SigninDelegateGroup,
  SipMediaApplication,
  SipMediaApplicationCall,
  SipMediaApplicationEndpoint,
  SipMediaApplicationLoggingConfiguration,
  SipRule,
  SipRuleTargetApplication,
  SipRuleTriggerType,
  SortOrder,
  StreamingConfiguration,
  Tag,
  Termination,
  TerminationHealth,
  TranscriptionConfiguration,
  UpdatePhoneNumberRequestItem,
  UpdateUserRequestItem,
  User,
  UserError,
  UserSettings,
  UserType,
  VoiceConnector,
  VoiceConnectorAwsRegion,
  VoiceConnectorGroup,
  VoiceConnectorItem,
  VoiceConnectorSettings,
} from "./models_1";

export interface AssociatePhoneNumbersWithVoiceConnectorRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;

  /**
   * <p>List of phone numbers, in E.164 format.</p>
   */
  E164PhoneNumbers: string[] | undefined;

  /**
   * <p>If true, associates the provided phone numbers with the provided Amazon Chime Voice Connector and removes any previously existing associations. If false, does not associate any phone numbers that have previously existing associations.</p>
   */
  ForceAssociate?: boolean;
}

export namespace AssociatePhoneNumbersWithVoiceConnectorRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociatePhoneNumbersWithVoiceConnectorRequest): any => ({
    ...obj,
    ...(obj.E164PhoneNumbers && { E164PhoneNumbers: SENSITIVE_STRING }),
  });
}

export interface AssociatePhoneNumbersWithVoiceConnectorResponse {
  /**
   * <p>If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and
   *     error messages.</p>
   */
  PhoneNumberErrors?: PhoneNumberError[];
}

export namespace AssociatePhoneNumbersWithVoiceConnectorResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociatePhoneNumbersWithVoiceConnectorResponse): any => ({
    ...obj,
  });
}

export interface AssociatePhoneNumbersWithVoiceConnectorGroupRequest {
  /**
   * <p>The Amazon Chime Voice Connector group ID.</p>
   */
  VoiceConnectorGroupId: string | undefined;

  /**
   * <p>List of phone numbers, in E.164 format.</p>
   */
  E164PhoneNumbers: string[] | undefined;

  /**
   * <p>If true, associates the provided phone numbers with the provided Amazon Chime Voice Connector Group and removes any previously existing associations. If false, does not associate any phone numbers that have previously existing associations.</p>
   */
  ForceAssociate?: boolean;
}

export namespace AssociatePhoneNumbersWithVoiceConnectorGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociatePhoneNumbersWithVoiceConnectorGroupRequest): any => ({
    ...obj,
    ...(obj.E164PhoneNumbers && { E164PhoneNumbers: SENSITIVE_STRING }),
  });
}

export interface AssociatePhoneNumbersWithVoiceConnectorGroupResponse {
  /**
   * <p>If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages.</p>
   */
  PhoneNumberErrors?: PhoneNumberError[];
}

export namespace AssociatePhoneNumbersWithVoiceConnectorGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociatePhoneNumbersWithVoiceConnectorGroupResponse): any => ({
    ...obj,
  });
}

export interface AssociatePhoneNumberWithUserRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The user ID.</p>
   */
  UserId: string | undefined;

  /**
   * <p>The phone number, in E.164 format.</p>
   */
  E164PhoneNumber: string | undefined;
}

export namespace AssociatePhoneNumberWithUserRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociatePhoneNumberWithUserRequest): any => ({
    ...obj,
    ...(obj.E164PhoneNumber && { E164PhoneNumber: SENSITIVE_STRING }),
  });
}

export interface AssociatePhoneNumberWithUserResponse {}

export namespace AssociatePhoneNumberWithUserResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociatePhoneNumberWithUserResponse): any => ({
    ...obj,
  });
}

export interface AssociateSigninDelegateGroupsWithAccountRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The sign-in delegate groups.</p>
   */
  SigninDelegateGroups: SigninDelegateGroup[] | undefined;
}

export namespace AssociateSigninDelegateGroupsWithAccountRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateSigninDelegateGroupsWithAccountRequest): any => ({
    ...obj,
  });
}

export interface AssociateSigninDelegateGroupsWithAccountResponse {}

export namespace AssociateSigninDelegateGroupsWithAccountResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateSigninDelegateGroupsWithAccountResponse): any => ({
    ...obj,
  });
}

export interface BatchCreateAttendeeRequest {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;

  /**
   * <p>The request containing the attendees to create.</p>
   */
  Attendees: CreateAttendeeRequestItem[] | undefined;
}

export namespace BatchCreateAttendeeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchCreateAttendeeRequest): any => ({
    ...obj,
    ...(obj.Attendees && {
      Attendees: obj.Attendees.map((item) => CreateAttendeeRequestItem.filterSensitiveLog(item)),
    }),
  });
}

export interface BatchCreateAttendeeResponse {
  /**
   * <p>The attendee information, including attendees IDs and join tokens.</p>
   */
  Attendees?: Attendee[];

  /**
   * <p>If the action fails for one or more of the attendees in the request, a list of the attendees is returned, along with error codes and error messages.</p>
   */
  Errors?: CreateAttendeeError[];
}

export namespace BatchCreateAttendeeResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchCreateAttendeeResponse): any => ({
    ...obj,
    ...(obj.Attendees && { Attendees: obj.Attendees.map((item) => Attendee.filterSensitiveLog(item)) }),
    ...(obj.Errors && { Errors: obj.Errors.map((item) => CreateAttendeeError.filterSensitiveLog(item)) }),
  });
}

export interface BatchCreateChannelMembershipRequest {
  /**
   * <p>The ARN of the channel to which you're adding users.</p>
   */
  ChannelArn: string | undefined;

  /**
   * <p>The membership type of a user, <code>DEFAULT</code> or <code>HIDDEN</code>. Default
   *          members are always returned as part of <code>ListChannelMemberships</code>. Hidden members
   *          are only returned if the type filter in <code>ListChannelMemberships</code> equals
   *             <code>HIDDEN</code>. Otherwise hidden members are not returned. This is only supported
   *          by moderators.</p>
   */
  Type?: ChannelMembershipType | string;

  /**
   * <p>The ARNs of the members you want to add to the channel.</p>
   */
  MemberArns: string[] | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

export namespace BatchCreateChannelMembershipRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchCreateChannelMembershipRequest): any => ({
    ...obj,
  });
}

export interface BatchCreateChannelMembershipResponse {
  /**
   * <p>The list of channel memberships in the response.</p>
   */
  BatchChannelMemberships?: BatchChannelMemberships;

  /**
   * <p>If the action fails for one or more of the memberships in the request, a list of the
   *          memberships is returned, along with error codes and error messages.</p>
   */
  Errors?: BatchCreateChannelMembershipError[];
}

export namespace BatchCreateChannelMembershipResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchCreateChannelMembershipResponse): any => ({
    ...obj,
    ...(obj.BatchChannelMemberships && {
      BatchChannelMemberships: BatchChannelMemberships.filterSensitiveLog(obj.BatchChannelMemberships),
    }),
  });
}

export interface BatchCreateRoomMembershipRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The room ID.</p>
   */
  RoomId: string | undefined;

  /**
   * <p>The list of membership items.</p>
   */
  MembershipItemList: MembershipItem[] | undefined;
}

export namespace BatchCreateRoomMembershipRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchCreateRoomMembershipRequest): any => ({
    ...obj,
  });
}

export interface BatchCreateRoomMembershipResponse {
  /**
   * <p>If the action fails for one or more of the member IDs in the request, a list of the member IDs is returned, along with error codes and error messages.</p>
   */
  Errors?: MemberError[];
}

export namespace BatchCreateRoomMembershipResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchCreateRoomMembershipResponse): any => ({
    ...obj,
  });
}

export interface BatchDeletePhoneNumberRequest {
  /**
   * <p>List of phone number IDs.</p>
   */
  PhoneNumberIds: string[] | undefined;
}

export namespace BatchDeletePhoneNumberRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchDeletePhoneNumberRequest): any => ({
    ...obj,
  });
}

export interface BatchDeletePhoneNumberResponse {
  /**
   * <p>If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages.</p>
   */
  PhoneNumberErrors?: PhoneNumberError[];
}

export namespace BatchDeletePhoneNumberResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchDeletePhoneNumberResponse): any => ({
    ...obj,
  });
}

export interface BatchSuspendUserRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The request containing the user IDs to suspend.</p>
   */
  UserIdList: string[] | undefined;
}

export namespace BatchSuspendUserRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchSuspendUserRequest): any => ({
    ...obj,
  });
}

export interface BatchSuspendUserResponse {
  /**
   * <p>If the <a>BatchSuspendUser</a> action fails for one or more of the user IDs in the
   *             request, a list of the user IDs is returned, along with error codes and error messages.</p>
   */
  UserErrors?: UserError[];
}

export namespace BatchSuspendUserResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchSuspendUserResponse): any => ({
    ...obj,
  });
}

export interface BatchUnsuspendUserRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The request containing the user IDs to unsuspend.</p>
   */
  UserIdList: string[] | undefined;
}

export namespace BatchUnsuspendUserRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchUnsuspendUserRequest): any => ({
    ...obj,
  });
}

export interface BatchUnsuspendUserResponse {
  /**
   * <p>If the <a>BatchUnsuspendUser</a> action fails for one or more of the user IDs in the
   *             request, a list of the user IDs is returned, along with error codes and error messages.</p>
   */
  UserErrors?: UserError[];
}

export namespace BatchUnsuspendUserResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchUnsuspendUserResponse): any => ({
    ...obj,
  });
}

export interface BatchUpdatePhoneNumberRequest {
  /**
   * <p>The request containing the phone number IDs and product types or calling names to update.</p>
   */
  UpdatePhoneNumberRequestItems: UpdatePhoneNumberRequestItem[] | undefined;
}

export namespace BatchUpdatePhoneNumberRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchUpdatePhoneNumberRequest): any => ({
    ...obj,
    ...(obj.UpdatePhoneNumberRequestItems && {
      UpdatePhoneNumberRequestItems: obj.UpdatePhoneNumberRequestItems.map((item) =>
        UpdatePhoneNumberRequestItem.filterSensitiveLog(item)
      ),
    }),
  });
}

export interface BatchUpdatePhoneNumberResponse {
  /**
   * <p>If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages.</p>
   */
  PhoneNumberErrors?: PhoneNumberError[];
}

export namespace BatchUpdatePhoneNumberResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchUpdatePhoneNumberResponse): any => ({
    ...obj,
  });
}

export interface BatchUpdateUserRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The request containing the user IDs and details to update.</p>
   */
  UpdateUserRequestItems: UpdateUserRequestItem[] | undefined;
}

export namespace BatchUpdateUserRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchUpdateUserRequest): any => ({
    ...obj,
    ...(obj.UpdateUserRequestItems && {
      UpdateUserRequestItems: obj.UpdateUserRequestItems.map((item) => UpdateUserRequestItem.filterSensitiveLog(item)),
    }),
  });
}

export interface BatchUpdateUserResponse {
  /**
   * <p>If the <a>BatchUpdateUser</a> action fails for one or more of the user IDs in the
   *             request, a list of the user IDs is returned, along with error codes and error messages.</p>
   */
  UserErrors?: UserError[];
}

export namespace BatchUpdateUserResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchUpdateUserResponse): any => ({
    ...obj,
  });
}

export interface CreateAccountRequest {
  /**
   * <p>The name of the Amazon Chime account.</p>
   */
  Name: string | undefined;
}

export namespace CreateAccountRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAccountRequest): any => ({
    ...obj,
  });
}

export interface CreateAccountResponse {
  /**
   * <p>The Amazon Chime account details.</p>
   */
  Account?: Account;
}

export namespace CreateAccountResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAccountResponse): any => ({
    ...obj,
  });
}

export interface CreateAppInstanceRequest {
  /**
   * <p>The name of the <code>AppInstance</code>.</p>
   */
  Name: string | undefined;

  /**
   * <p>The metadata of the <code>AppInstance</code>. Limited to a 1KB string in UTF-8.</p>
   */
  Metadata?: string;

  /**
   * <p>The <code>ClientRequestToken</code> of the <code>AppInstance</code>.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>Tags assigned to the <code>AppInstance</code>.</p>
   */
  Tags?: Tag[];
}

export namespace CreateAppInstanceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAppInstanceRequest): any => ({
    ...obj,
    ...(obj.Name && { Name: SENSITIVE_STRING }),
    ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
    ...(obj.ClientRequestToken && { ClientRequestToken: SENSITIVE_STRING }),
    ...(obj.Tags && { Tags: obj.Tags.map((item) => Tag.filterSensitiveLog(item)) }),
  });
}

export interface CreateAppInstanceResponse {
  /**
   * <p>The Amazon Resource Number (ARN) of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn?: string;
}

export namespace CreateAppInstanceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAppInstanceResponse): any => ({
    ...obj,
  });
}

export interface CreateAppInstanceAdminRequest {
  /**
   * <p>The ARN of the administrator of the current <code>AppInstance</code>.</p>
   */
  AppInstanceAdminArn: string | undefined;

  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn: string | undefined;
}

export namespace CreateAppInstanceAdminRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAppInstanceAdminRequest): any => ({
    ...obj,
  });
}

export interface CreateAppInstanceAdminResponse {
  /**
   * <p>The name and ARN of the admin for the <code>AppInstance</code>.</p>
   */
  AppInstanceAdmin?: Identity;

  /**
   * <p>The ARN of the of the admin for the <code>AppInstance</code>.</p>
   */
  AppInstanceArn?: string;
}

export namespace CreateAppInstanceAdminResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAppInstanceAdminResponse): any => ({
    ...obj,
    ...(obj.AppInstanceAdmin && { AppInstanceAdmin: Identity.filterSensitiveLog(obj.AppInstanceAdmin) }),
  });
}

export interface CreateAppInstanceUserRequest {
  /**
   * <p>The ARN of the <code>AppInstance</code> request.</p>
   */
  AppInstanceArn: string | undefined;

  /**
   * <p>The user ID of the <code>AppInstance</code>.</p>
   */
  AppInstanceUserId: string | undefined;

  /**
   * <p>The user's name.</p>
   */
  Name: string | undefined;

  /**
   * <p>The request's metadata. Limited to a 1KB string in UTF-8.</p>
   */
  Metadata?: string;

  /**
   * <p>The token assigned to the user requesting an <code>AppInstance</code>.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>Tags assigned to the <code>AppInstanceUser</code>.</p>
   */
  Tags?: Tag[];
}

export namespace CreateAppInstanceUserRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAppInstanceUserRequest): any => ({
    ...obj,
    ...(obj.AppInstanceUserId && { AppInstanceUserId: SENSITIVE_STRING }),
    ...(obj.Name && { Name: SENSITIVE_STRING }),
    ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
    ...(obj.ClientRequestToken && { ClientRequestToken: SENSITIVE_STRING }),
    ...(obj.Tags && { Tags: obj.Tags.map((item) => Tag.filterSensitiveLog(item)) }),
  });
}

export interface CreateAppInstanceUserResponse {
  /**
   * <p>The user's ARN.</p>
   */
  AppInstanceUserArn?: string;
}

export namespace CreateAppInstanceUserResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAppInstanceUserResponse): any => ({
    ...obj,
  });
}

export interface CreateAttendeeRequest {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;

  /**
   * <p>The Amazon Chime SDK external user ID. An idempotency token. Links the attendee to an identity managed by a builder application.</p>
   */
  ExternalUserId: string | undefined;

  /**
   * <p>The tag key-value pairs.</p>
   */
  Tags?: Tag[];
}

export namespace CreateAttendeeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAttendeeRequest): any => ({
    ...obj,
    ...(obj.ExternalUserId && { ExternalUserId: SENSITIVE_STRING }),
    ...(obj.Tags && { Tags: obj.Tags.map((item) => Tag.filterSensitiveLog(item)) }),
  });
}

export interface CreateAttendeeResponse {
  /**
   * <p>The attendee information, including attendee ID and join token.</p>
   */
  Attendee?: Attendee;
}

export namespace CreateAttendeeResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAttendeeResponse): any => ({
    ...obj,
    ...(obj.Attendee && { Attendee: Attendee.filterSensitiveLog(obj.Attendee) }),
  });
}

export interface CreateBotRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The bot display name.</p>
   */
  DisplayName: string | undefined;

  /**
   * <p>The domain of the Amazon Chime Enterprise account.</p>
   */
  Domain?: string;
}

export namespace CreateBotRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateBotRequest): any => ({
    ...obj,
    ...(obj.DisplayName && { DisplayName: SENSITIVE_STRING }),
  });
}

export interface CreateBotResponse {
  /**
   * <p>The bot details.</p>
   */
  Bot?: Bot;
}

export namespace CreateBotResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateBotResponse): any => ({
    ...obj,
    ...(obj.Bot && { Bot: Bot.filterSensitiveLog(obj.Bot) }),
  });
}

export interface CreateChannelRequest {
  /**
   * <p>The ARN of the channel request.</p>
   */
  AppInstanceArn: string | undefined;

  /**
   * <p>The name of the channel.</p>
   */
  Name: string | undefined;

  /**
   * <p>The channel mode: <code>UNRESTRICTED</code> or <code>RESTRICTED</code>. Administrators,
   *          moderators, and channel members can add themselves and other members to unrestricted
   *          channels. Only administrators and moderators can add members to restricted channels.</p>
   */
  Mode?: ChannelMode | string;

  /**
   * <p>The channel's privacy level: <code>PUBLIC</code> or <code>PRIVATE</code>. Private
   *          channels aren't discoverable by users outside the channel. Public channels are discoverable
   *          by anyone in the <code>AppInstance</code>.</p>
   */
  Privacy?: ChannelPrivacy | string;

  /**
   * <p>The metadata of the creation request. Limited to 1KB and UTF-8.</p>
   */
  Metadata?: string;

  /**
   * <p>The client token for the request. An <code>Idempotency</code> token.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The tags for the creation request.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

export namespace CreateChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateChannelRequest): any => ({
    ...obj,
    ...(obj.Name && { Name: SENSITIVE_STRING }),
    ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
    ...(obj.ClientRequestToken && { ClientRequestToken: SENSITIVE_STRING }),
    ...(obj.Tags && { Tags: obj.Tags.map((item) => Tag.filterSensitiveLog(item)) }),
  });
}

export interface CreateChannelResponse {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn?: string;
}

export namespace CreateChannelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateChannelResponse): any => ({
    ...obj,
  });
}

export interface CreateChannelBanRequest {
  /**
   * <p>The ARN of the ban request.</p>
   */
  ChannelArn: string | undefined;

  /**
   * <p>The ARN of the member being banned.</p>
   */
  MemberArn: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

export namespace CreateChannelBanRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateChannelBanRequest): any => ({
    ...obj,
  });
}

export interface CreateChannelBanResponse {
  /**
   * <p>The ARN of the response to the ban request.</p>
   */
  ChannelArn?: string;

  /**
   * <p>The <code>ChannelArn</code> and <code>BannedIdentity</code> of the member in the ban
   *          response.</p>
   */
  Member?: Identity;
}

export namespace CreateChannelBanResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateChannelBanResponse): any => ({
    ...obj,
    ...(obj.Member && { Member: Identity.filterSensitiveLog(obj.Member) }),
  });
}

export interface CreateChannelMembershipRequest {
  /**
   * <p>The ARN of the channel to which you're adding users.</p>
   */
  ChannelArn: string | undefined;

  /**
   * <p>The ARN of the member you want to add to the channel.</p>
   */
  MemberArn: string | undefined;

  /**
   * <p>The membership type of a user, <code>DEFAULT</code> or <code>HIDDEN</code>. Default
   *          members are always returned as part of <code>ListChannelMemberships</code>. Hidden members
   *          are only returned if the type filter in <code>ListChannelMemberships</code> equals
   *             <code>HIDDEN</code>. Otherwise hidden members are not returned. This is only supported
   *          by moderators.</p>
   */
  Type: ChannelMembershipType | string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

export namespace CreateChannelMembershipRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateChannelMembershipRequest): any => ({
    ...obj,
  });
}

export interface CreateChannelMembershipResponse {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn?: string;

  /**
   * <p>The ARN and metadata of the member being added.</p>
   */
  Member?: Identity;
}

export namespace CreateChannelMembershipResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateChannelMembershipResponse): any => ({
    ...obj,
    ...(obj.Member && { Member: Identity.filterSensitiveLog(obj.Member) }),
  });
}

export interface CreateChannelModeratorRequest {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;

  /**
   * <p>The ARN of the moderator.</p>
   */
  ChannelModeratorArn: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

export namespace CreateChannelModeratorRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateChannelModeratorRequest): any => ({
    ...obj,
  });
}

export interface CreateChannelModeratorResponse {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn?: string;

  /**
   * <p>The ARNs of the channel and the moderator.</p>
   */
  ChannelModerator?: Identity;
}

export namespace CreateChannelModeratorResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateChannelModeratorResponse): any => ({
    ...obj,
    ...(obj.ChannelModerator && { ChannelModerator: Identity.filterSensitiveLog(obj.ChannelModerator) }),
  });
}

export interface CreateMediaCapturePipelineRequest {
  /**
   * <p>Source type from which the media artifacts will be captured. A Chime SDK Meeting
   *             is the only supported source.</p>
   */
  SourceType: MediaPipelineSourceType | string | undefined;

  /**
   * <p>ARN of the source from which the media artifacts are captured.</p>
   */
  SourceArn: string | undefined;

  /**
   * <p>Destination type to which the media artifacts are saved. You must use an S3 bucket. </p>
   */
  SinkType: MediaPipelineSinkType | string | undefined;

  /**
   * <p>The ARN of the sink type.</p>
   */
  SinkArn: string | undefined;

  /**
   * <p>The token assigned to the client making the pipeline request.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The configuration for a specified media capture pipeline. <code>SourceType</code> must be <code>ChimeSdkMeeting</code>.</p>
   */
  ChimeSdkMeetingConfiguration?: ChimeSdkMeetingConfiguration;
}

export namespace CreateMediaCapturePipelineRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateMediaCapturePipelineRequest): any => ({
    ...obj,
    ...(obj.SourceArn && { SourceArn: SENSITIVE_STRING }),
    ...(obj.SinkArn && { SinkArn: SENSITIVE_STRING }),
    ...(obj.ClientRequestToken && { ClientRequestToken: SENSITIVE_STRING }),
    ...(obj.ChimeSdkMeetingConfiguration && {
      ChimeSdkMeetingConfiguration: ChimeSdkMeetingConfiguration.filterSensitiveLog(obj.ChimeSdkMeetingConfiguration),
    }),
  });
}

export interface CreateMediaCapturePipelineResponse {
  /**
   * <p>A media capture pipeline object, the ID, source type, source ARN, sink type, and  sink ARN of a media capture pipeline object.</p>
   */
  MediaCapturePipeline?: MediaCapturePipeline;
}

export namespace CreateMediaCapturePipelineResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateMediaCapturePipelineResponse): any => ({
    ...obj,
    ...(obj.MediaCapturePipeline && {
      MediaCapturePipeline: MediaCapturePipeline.filterSensitiveLog(obj.MediaCapturePipeline),
    }),
  });
}

export interface CreateMeetingRequest {
  /**
   * <p>The unique identifier for the client request. Use a different token for different meetings.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The external meeting ID.</p>
   */
  ExternalMeetingId?: string;

  /**
   * <p>Reserved.</p>
   */
  MeetingHostId?: string;

  /**
   * <p>
   * The Region in which to create the meeting. Default: <code>us-east-1</code>.
   * </p>
   *
   *          <p>
   * Available values:
   * <code>af-south-1</code>
   * ,
   * <code>ap-northeast-1</code>
   * ,
   * <code>ap-northeast-2</code>
   * ,
   * <code>ap-south-1</code>
   * ,
   * <code>ap-southeast-1</code>
   * ,
   * <code>ap-southeast-2</code>
   * ,
   * <code>ca-central-1</code>
   * ,
   * <code>eu-central-1</code>
   * ,
   * <code>eu-north-1</code>
   * ,
   * <code>eu-south-1</code>
   * ,
   * <code>eu-west-1</code>
   * ,
   * <code>eu-west-2</code>
   * ,
   * <code>eu-west-3</code>
   * ,
   * <code>sa-east-1</code>
   * ,
   * <code>us-east-1</code>
   * ,
   * <code>us-east-2</code>
   * ,
   * <code>us-west-1</code>
   * ,
   * <code>us-west-2</code>
   * .
   * </p>
   */
  MediaRegion?: string;

  /**
   * <p>The tag key-value pairs.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The configuration for resource targets to receive notifications when meeting and attendee events occur.</p>
   */
  NotificationsConfiguration?: MeetingNotificationConfiguration;
}

export namespace CreateMeetingRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateMeetingRequest): any => ({
    ...obj,
    ...(obj.ClientRequestToken && { ClientRequestToken: SENSITIVE_STRING }),
    ...(obj.ExternalMeetingId && { ExternalMeetingId: SENSITIVE_STRING }),
    ...(obj.MeetingHostId && { MeetingHostId: SENSITIVE_STRING }),
    ...(obj.Tags && { Tags: obj.Tags.map((item) => Tag.filterSensitiveLog(item)) }),
    ...(obj.NotificationsConfiguration && {
      NotificationsConfiguration: MeetingNotificationConfiguration.filterSensitiveLog(obj.NotificationsConfiguration),
    }),
  });
}

export interface CreateMeetingResponse {
  /**
   * <p>
   * The meeting information, including the meeting ID and
   * <code>MediaPlacement</code>
   * .
   * </p>
   */
  Meeting?: Meeting;
}

export namespace CreateMeetingResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateMeetingResponse): any => ({
    ...obj,
    ...(obj.Meeting && { Meeting: Meeting.filterSensitiveLog(obj.Meeting) }),
  });
}

export interface CreateMeetingDialOutRequest {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;

  /**
   * <p>Phone number used as the caller ID when the remote party receives a call.</p>
   */
  FromPhoneNumber: string | undefined;

  /**
   * <p>Phone number called when inviting someone to a meeting.</p>
   */
  ToPhoneNumber: string | undefined;

  /**
   * <p>Token used by the Amazon Chime SDK attendee. Call the <a href="https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateAttendee.html">CreateAttendee</a> action to get a join token.</p>
   */
  JoinToken: string | undefined;
}

export namespace CreateMeetingDialOutRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateMeetingDialOutRequest): any => ({
    ...obj,
    ...(obj.FromPhoneNumber && { FromPhoneNumber: SENSITIVE_STRING }),
    ...(obj.ToPhoneNumber && { ToPhoneNumber: SENSITIVE_STRING }),
    ...(obj.JoinToken && { JoinToken: SENSITIVE_STRING }),
  });
}

export interface CreateMeetingDialOutResponse {
  /**
   * <p>Unique ID that tracks API calls.</p>
   */
  TransactionId?: string;
}

export namespace CreateMeetingDialOutResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateMeetingDialOutResponse): any => ({
    ...obj,
  });
}

export interface CreateMeetingWithAttendeesRequest {
  /**
   * <p>The unique identifier for the client request. Use a different token for different meetings.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The external meeting ID.</p>
   */
  ExternalMeetingId?: string;

  /**
   * <p>Reserved.</p>
   */
  MeetingHostId?: string;

  /**
   * <p>
   * The Region in which to create the meeting. Default: <code>us-east-1</code>
   * .
   * </p>
   *
   *          <p>
   * Available values:
   * <code>af-south-1</code>
   * ,
   * <code>ap-northeast-1</code>
   * ,
   * <code>ap-northeast-2</code>
   * ,
   * <code>ap-south-1</code>
   * ,
   * <code>ap-southeast-1</code>
   * ,
   * <code>ap-southeast-2</code>
   * ,
   * <code>ca-central-1</code>
   * ,
   * <code>eu-central-1</code>
   * ,
   * <code>eu-north-1</code>
   * ,
   * <code>eu-south-1</code>
   * ,
   * <code>eu-west-1</code>
   * ,
   * <code>eu-west-2</code>
   * ,
   * <code>eu-west-3</code>
   * ,
   * <code>sa-east-1</code>
   * ,
   * <code>us-east-1</code>
   * ,
   * <code>us-east-2</code>
   * ,
   * <code>us-west-1</code>
   * ,
   * <code>us-west-2</code>
   * .
   * </p>
   */
  MediaRegion?: string;

  /**
   * <p>The tag key-value pairs.</p>
   */
  Tags?: Tag[];

  /**
   * <p> The resource target configurations for receiving Amazon Chime SDK meeting and attendee event
   *             notifications. The Amazon Chime SDK supports resource targets located in the US East (N.
   *             Virginia) AWS Region (<code>us-east-1</code>). </p>
   */
  NotificationsConfiguration?: MeetingNotificationConfiguration;

  /**
   * <p>The request containing the attendees to create.</p>
   */
  Attendees?: CreateAttendeeRequestItem[];
}

export namespace CreateMeetingWithAttendeesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateMeetingWithAttendeesRequest): any => ({
    ...obj,
    ...(obj.ClientRequestToken && { ClientRequestToken: SENSITIVE_STRING }),
    ...(obj.ExternalMeetingId && { ExternalMeetingId: SENSITIVE_STRING }),
    ...(obj.MeetingHostId && { MeetingHostId: SENSITIVE_STRING }),
    ...(obj.Tags && { Tags: obj.Tags.map((item) => Tag.filterSensitiveLog(item)) }),
    ...(obj.NotificationsConfiguration && {
      NotificationsConfiguration: MeetingNotificationConfiguration.filterSensitiveLog(obj.NotificationsConfiguration),
    }),
    ...(obj.Attendees && {
      Attendees: obj.Attendees.map((item) => CreateAttendeeRequestItem.filterSensitiveLog(item)),
    }),
  });
}

export interface CreateMeetingWithAttendeesResponse {
  /**
   * <p>A meeting created using the Amazon Chime SDK.</p>
   */
  Meeting?: Meeting;

  /**
   * <p>The attendee information, including attendees IDs and join tokens.</p>
   */
  Attendees?: Attendee[];

  /**
   * <p>If the action fails for one or more of the attendees in the request, a list of the attendees is returned, along with error codes and error messages.</p>
   */
  Errors?: CreateAttendeeError[];
}

export namespace CreateMeetingWithAttendeesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateMeetingWithAttendeesResponse): any => ({
    ...obj,
    ...(obj.Meeting && { Meeting: Meeting.filterSensitiveLog(obj.Meeting) }),
    ...(obj.Attendees && { Attendees: obj.Attendees.map((item) => Attendee.filterSensitiveLog(item)) }),
    ...(obj.Errors && { Errors: obj.Errors.map((item) => CreateAttendeeError.filterSensitiveLog(item)) }),
  });
}

export interface CreatePhoneNumberOrderRequest {
  /**
   * <p>The phone number product type.</p>
   */
  ProductType: PhoneNumberProductType | string | undefined;

  /**
   * <p>List of phone numbers, in E.164 format.</p>
   */
  E164PhoneNumbers: string[] | undefined;
}

export namespace CreatePhoneNumberOrderRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreatePhoneNumberOrderRequest): any => ({
    ...obj,
    ...(obj.E164PhoneNumbers && { E164PhoneNumbers: SENSITIVE_STRING }),
  });
}

export interface CreatePhoneNumberOrderResponse {
  /**
   * <p>The phone number order details.</p>
   */
  PhoneNumberOrder?: PhoneNumberOrder;
}

export namespace CreatePhoneNumberOrderResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreatePhoneNumberOrderResponse): any => ({
    ...obj,
    ...(obj.PhoneNumberOrder && { PhoneNumberOrder: PhoneNumberOrder.filterSensitiveLog(obj.PhoneNumberOrder) }),
  });
}

export interface CreateProxySessionRequest {
  /**
   * <p>The Amazon Chime voice connector ID.</p>
   */
  VoiceConnectorId: string | undefined;

  /**
   * <p>The participant phone numbers.</p>
   */
  ParticipantPhoneNumbers: string[] | undefined;

  /**
   * <p>The name of the proxy session.</p>
   */
  Name?: string;

  /**
   * <p>The number of minutes allowed for the proxy session.</p>
   */
  ExpiryMinutes?: number;

  /**
   * <p>The proxy session capabilities.</p>
   */
  Capabilities: (Capability | string)[] | undefined;

  /**
   * <p>The preference for proxy phone number reuse, or stickiness, between the same participants across sessions.</p>
   */
  NumberSelectionBehavior?: NumberSelectionBehavior | string;

  /**
   * <p>The preference for matching the country or area code of the proxy phone number with that of the first participant.</p>
   */
  GeoMatchLevel?: GeoMatchLevel | string;

  /**
   * <p>The country and area code for the proxy phone number.</p>
   */
  GeoMatchParams?: GeoMatchParams;
}

export namespace CreateProxySessionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateProxySessionRequest): any => ({
    ...obj,
    ...(obj.ParticipantPhoneNumbers && { ParticipantPhoneNumbers: SENSITIVE_STRING }),
    ...(obj.Name && { Name: SENSITIVE_STRING }),
  });
}

export interface CreateProxySessionResponse {
  /**
   * <p>The proxy session details.</p>
   */
  ProxySession?: ProxySession;
}

export namespace CreateProxySessionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateProxySessionResponse): any => ({
    ...obj,
    ...(obj.ProxySession && { ProxySession: ProxySession.filterSensitiveLog(obj.ProxySession) }),
  });
}

export interface CreateRoomRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The room name.</p>
   */
  Name: string | undefined;

  /**
   * <p>The idempotency token for the request.</p>
   */
  ClientRequestToken?: string;
}

export namespace CreateRoomRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRoomRequest): any => ({
    ...obj,
    ...(obj.Name && { Name: SENSITIVE_STRING }),
    ...(obj.ClientRequestToken && { ClientRequestToken: SENSITIVE_STRING }),
  });
}

export interface CreateRoomResponse {
  /**
   * <p>The room details.</p>
   */
  Room?: Room;
}

export namespace CreateRoomResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRoomResponse): any => ({
    ...obj,
    ...(obj.Room && { Room: Room.filterSensitiveLog(obj.Room) }),
  });
}

export interface CreateRoomMembershipRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The room ID.</p>
   */
  RoomId: string | undefined;

  /**
   * <p>The Amazon Chime member ID (user ID or bot ID).</p>
   */
  MemberId: string | undefined;

  /**
   * <p>The role of the member.</p>
   */
  Role?: RoomMembershipRole | string;
}

export namespace CreateRoomMembershipRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRoomMembershipRequest): any => ({
    ...obj,
  });
}

export interface CreateRoomMembershipResponse {
  /**
   * <p>The room membership details.</p>
   */
  RoomMembership?: RoomMembership;
}

export namespace CreateRoomMembershipResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRoomMembershipResponse): any => ({
    ...obj,
    ...(obj.RoomMembership && { RoomMembership: RoomMembership.filterSensitiveLog(obj.RoomMembership) }),
  });
}

export interface CreateSipMediaApplicationRequest {
  /**
   * <p>The AWS Region assigned to the SIP media application.</p>
   */
  AwsRegion: string | undefined;

  /**
   * <p>The SIP media application name.</p>
   */
  Name: string | undefined;

  /**
   * <p>List of endpoints (Lambda Amazon Resource Names) specified for the SIP media application. Currently, only one endpoint is supported.</p>
   */
  Endpoints: SipMediaApplicationEndpoint[] | undefined;
}

export namespace CreateSipMediaApplicationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSipMediaApplicationRequest): any => ({
    ...obj,
    ...(obj.Endpoints && {
      Endpoints: obj.Endpoints.map((item) => SipMediaApplicationEndpoint.filterSensitiveLog(item)),
    }),
  });
}

export interface CreateSipMediaApplicationResponse {
  /**
   * <p>The SIP media application details.</p>
   */
  SipMediaApplication?: SipMediaApplication;
}

export namespace CreateSipMediaApplicationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSipMediaApplicationResponse): any => ({
    ...obj,
    ...(obj.SipMediaApplication && {
      SipMediaApplication: SipMediaApplication.filterSensitiveLog(obj.SipMediaApplication),
    }),
  });
}

export interface CreateSipMediaApplicationCallRequest {
  /**
   * <p>The phone number that a user calls from. This is a phone number in your Amazon Chime phone number inventory.</p>
   */
  FromPhoneNumber: string | undefined;

  /**
   * <p>The phone number that the service should call.</p>
   */
  ToPhoneNumber: string | undefined;

  /**
   * <p>The ID of the SIP media application.</p>
   */
  SipMediaApplicationId: string | undefined;

  /**
   * <p>The SIP headers added to an outbound call leg.</p>
   */
  SipHeaders?: Record<string, string>;
}

export namespace CreateSipMediaApplicationCallRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSipMediaApplicationCallRequest): any => ({
    ...obj,
    ...(obj.FromPhoneNumber && { FromPhoneNumber: SENSITIVE_STRING }),
    ...(obj.ToPhoneNumber && { ToPhoneNumber: SENSITIVE_STRING }),
    ...(obj.SipHeaders && { SipHeaders: SENSITIVE_STRING }),
  });
}

export interface CreateSipMediaApplicationCallResponse {
  /**
   * <p>The actual call.</p>
   */
  SipMediaApplicationCall?: SipMediaApplicationCall;
}

export namespace CreateSipMediaApplicationCallResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSipMediaApplicationCallResponse): any => ({
    ...obj,
  });
}

export interface CreateSipRuleRequest {
  /**
   * <p>The name of the SIP rule.</p>
   */
  Name: string | undefined;

  /**
   * <p>The type of trigger assigned to the SIP rule in <code>TriggerValue</code>, currently <code>RequestUriHostname</code> or <code>ToPhoneNumber</code>.</p>
   */
  TriggerType: SipRuleTriggerType | string | undefined;

  /**
   * <p>If <code>TriggerType</code> is <code>RequestUriHostname</code>, the value can be the outbound
   *             host name of an Amazon Chime Voice Connector. If <code>TriggerType</code> is
   *                 <code>ToPhoneNumber</code>, the value can be a customer-owned phone number in the
   *     E164 format. The <code>SipMediaApplication</code> specified in the <code>SipRule</code> is triggered if the request URI in an incoming SIP
   *     request matches the <code>RequestUriHostname</code>, or if the <code>To</code> header in the incoming SIP request matches the
   *     <code>ToPhoneNumber</code> value.</p>
   */
  TriggerValue: string | undefined;

  /**
   * <p>Enables or disables a rule. You must disable rules before you can delete them.</p>
   */
  Disabled?: boolean;

  /**
   * <p>List of SIP media applications with priority and AWS Region. Only one SIP application per AWS Region can be used.</p>
   */
  TargetApplications: SipRuleTargetApplication[] | undefined;
}

export namespace CreateSipRuleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSipRuleRequest): any => ({
    ...obj,
  });
}

export interface CreateSipRuleResponse {
  /**
   * <p>Returns the SIP rule information, including the rule ID, triggers, and target applications.</p>
   */
  SipRule?: SipRule;
}

export namespace CreateSipRuleResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSipRuleResponse): any => ({
    ...obj,
  });
}

export interface CreateUserRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The user name.</p>
   */
  Username?: string;

  /**
   * <p>The user's email address.</p>
   */
  Email?: string;

  /**
   * <p>The user type.</p>
   */
  UserType?: UserType | string;
}

export namespace CreateUserRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateUserRequest): any => ({
    ...obj,
    ...(obj.Email && { Email: SENSITIVE_STRING }),
  });
}

export interface CreateUserResponse {
  /**
   * <p>The user on the Amazon Chime account.</p>
   */
  User?: User;
}

export namespace CreateUserResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateUserResponse): any => ({
    ...obj,
    ...(obj.User && { User: User.filterSensitiveLog(obj.User) }),
  });
}

export interface CreateVoiceConnectorRequest {
  /**
   * <p>The name of the Amazon Chime Voice Connector.</p>
   */
  Name: string | undefined;

  /**
   * <p>
   * The AWS Region in which the Amazon Chime Voice Connector is created. Default value:
   * <code>us-east-1</code>
   * .
   * </p>
   */
  AwsRegion?: VoiceConnectorAwsRegion | string;

  /**
   * <p>When enabled, requires encryption for the Amazon Chime Voice Connector.</p>
   */
  RequireEncryption: boolean | undefined;
}

export namespace CreateVoiceConnectorRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateVoiceConnectorRequest): any => ({
    ...obj,
  });
}

export interface CreateVoiceConnectorResponse {
  /**
   * <p>The Amazon Chime Voice Connector details.</p>
   */
  VoiceConnector?: VoiceConnector;
}

export namespace CreateVoiceConnectorResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateVoiceConnectorResponse): any => ({
    ...obj,
  });
}

export interface CreateVoiceConnectorGroupRequest {
  /**
   * <p>The name of the Amazon Chime Voice Connector group.</p>
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Chime Voice Connectors to route inbound calls to.</p>
   */
  VoiceConnectorItems?: VoiceConnectorItem[];
}

export namespace CreateVoiceConnectorGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateVoiceConnectorGroupRequest): any => ({
    ...obj,
  });
}

export interface CreateVoiceConnectorGroupResponse {
  /**
   * <p>The Amazon Chime Voice Connector group details.</p>
   */
  VoiceConnectorGroup?: VoiceConnectorGroup;
}

export namespace CreateVoiceConnectorGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateVoiceConnectorGroupResponse): any => ({
    ...obj,
  });
}

export interface DeleteAccountRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
}

export namespace DeleteAccountRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAccountRequest): any => ({
    ...obj,
  });
}

export interface DeleteAccountResponse {}

export namespace DeleteAccountResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAccountResponse): any => ({
    ...obj,
  });
}

export interface DeleteAppInstanceRequest {
  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn: string | undefined;
}

export namespace DeleteAppInstanceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAppInstanceRequest): any => ({
    ...obj,
  });
}

export interface DeleteAppInstanceAdminRequest {
  /**
   * <p>The ARN of the <code>AppInstance</code>'s administrator.</p>
   */
  AppInstanceAdminArn: string | undefined;

  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn: string | undefined;
}

export namespace DeleteAppInstanceAdminRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAppInstanceAdminRequest): any => ({
    ...obj,
  });
}

export interface DeleteAppInstanceStreamingConfigurationsRequest {
  /**
   * <p>The ARN of the streaming configurations being deleted.</p>
   */
  AppInstanceArn: string | undefined;
}

export namespace DeleteAppInstanceStreamingConfigurationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAppInstanceStreamingConfigurationsRequest): any => ({
    ...obj,
  });
}

export interface DeleteAppInstanceUserRequest {
  /**
   * <p>The ARN of the user request being deleted.</p>
   */
  AppInstanceUserArn: string | undefined;
}

export namespace DeleteAppInstanceUserRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAppInstanceUserRequest): any => ({
    ...obj,
  });
}

export interface DeleteAttendeeRequest {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;

  /**
   * <p>The Amazon Chime SDK attendee ID.</p>
   */
  AttendeeId: string | undefined;
}

export namespace DeleteAttendeeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAttendeeRequest): any => ({
    ...obj,
  });
}

export interface DeleteChannelRequest {
  /**
   * <p>The ARN of the channel being deleted.</p>
   */
  ChannelArn: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

export namespace DeleteChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteChannelRequest): any => ({
    ...obj,
  });
}

export interface DeleteChannelBanRequest {
  /**
   * <p>The ARN of the channel from which the <code>AppInstanceUser</code> was banned.</p>
   */
  ChannelArn: string | undefined;

  /**
   * <p>The ARN of the <code>AppInstanceUser</code> that you want to reinstate.</p>
   */
  MemberArn: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

export namespace DeleteChannelBanRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteChannelBanRequest): any => ({
    ...obj,
  });
}

export interface DeleteChannelMembershipRequest {
  /**
   * <p>The ARN of the channel from which you want to remove the user.</p>
   */
  ChannelArn: string | undefined;

  /**
   * <p>The ARN of the member that you're removing from the channel.</p>
   */
  MemberArn: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

export namespace DeleteChannelMembershipRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteChannelMembershipRequest): any => ({
    ...obj,
  });
}

export interface DeleteChannelMessageRequest {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;

  /**
   * <p>The ID of the message being deleted.</p>
   */
  MessageId: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

export namespace DeleteChannelMessageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteChannelMessageRequest): any => ({
    ...obj,
  });
}

export interface DeleteChannelModeratorRequest {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;

  /**
   * <p>The ARN of the moderator being deleted.</p>
   */
  ChannelModeratorArn: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

export namespace DeleteChannelModeratorRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteChannelModeratorRequest): any => ({
    ...obj,
  });
}

export interface DeleteEventsConfigurationRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The bot ID.</p>
   */
  BotId: string | undefined;
}

export namespace DeleteEventsConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteEventsConfigurationRequest): any => ({
    ...obj,
  });
}

export interface DeleteMediaCapturePipelineRequest {
  /**
   * <p>The ID of the media capture pipeline being deleted. </p>
   */
  MediaPipelineId: string | undefined;
}

export namespace DeleteMediaCapturePipelineRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteMediaCapturePipelineRequest): any => ({
    ...obj,
  });
}

export interface DeleteMeetingRequest {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;
}

export namespace DeleteMeetingRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteMeetingRequest): any => ({
    ...obj,
  });
}

export interface DeletePhoneNumberRequest {
  /**
   * <p>The phone number ID.</p>
   */
  PhoneNumberId: string | undefined;
}

export namespace DeletePhoneNumberRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeletePhoneNumberRequest): any => ({
    ...obj,
  });
}

export interface DeleteProxySessionRequest {
  /**
   * <p>The Amazon Chime voice connector ID.</p>
   */
  VoiceConnectorId: string | undefined;

  /**
   * <p>The proxy session ID.</p>
   */
  ProxySessionId: string | undefined;
}

export namespace DeleteProxySessionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteProxySessionRequest): any => ({
    ...obj,
  });
}

export interface DeleteRoomRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The chat room ID.</p>
   */
  RoomId: string | undefined;
}

export namespace DeleteRoomRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRoomRequest): any => ({
    ...obj,
  });
}

export interface DeleteRoomMembershipRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The room ID.</p>
   */
  RoomId: string | undefined;

  /**
   * <p>The member ID (user ID or bot ID).</p>
   */
  MemberId: string | undefined;
}

export namespace DeleteRoomMembershipRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRoomMembershipRequest): any => ({
    ...obj,
  });
}

export interface DeleteSipMediaApplicationRequest {
  /**
   * <p>The SIP media application ID.</p>
   */
  SipMediaApplicationId: string | undefined;
}

export namespace DeleteSipMediaApplicationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSipMediaApplicationRequest): any => ({
    ...obj,
  });
}

export interface DeleteSipRuleRequest {
  /**
   * <p>The SIP rule ID.</p>
   */
  SipRuleId: string | undefined;
}

export namespace DeleteSipRuleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSipRuleRequest): any => ({
    ...obj,
  });
}

export interface DeleteVoiceConnectorRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

export namespace DeleteVoiceConnectorRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteVoiceConnectorRequest): any => ({
    ...obj,
  });
}

export interface DeleteVoiceConnectorEmergencyCallingConfigurationRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

export namespace DeleteVoiceConnectorEmergencyCallingConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteVoiceConnectorEmergencyCallingConfigurationRequest): any => ({
    ...obj,
  });
}

export interface DeleteVoiceConnectorGroupRequest {
  /**
   * <p>The Amazon Chime Voice Connector group ID.</p>
   */
  VoiceConnectorGroupId: string | undefined;
}

export namespace DeleteVoiceConnectorGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteVoiceConnectorGroupRequest): any => ({
    ...obj,
  });
}

export interface DeleteVoiceConnectorOriginationRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

export namespace DeleteVoiceConnectorOriginationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteVoiceConnectorOriginationRequest): any => ({
    ...obj,
  });
}

export interface DeleteVoiceConnectorProxyRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

export namespace DeleteVoiceConnectorProxyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteVoiceConnectorProxyRequest): any => ({
    ...obj,
  });
}

export interface DeleteVoiceConnectorStreamingConfigurationRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

export namespace DeleteVoiceConnectorStreamingConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteVoiceConnectorStreamingConfigurationRequest): any => ({
    ...obj,
  });
}

export interface DeleteVoiceConnectorTerminationRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

export namespace DeleteVoiceConnectorTerminationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteVoiceConnectorTerminationRequest): any => ({
    ...obj,
  });
}

export interface DeleteVoiceConnectorTerminationCredentialsRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;

  /**
   * <p>The RFC2617 compliant username associated with the SIP credentials, in US-ASCII format.</p>
   */
  Usernames: string[] | undefined;
}

export namespace DeleteVoiceConnectorTerminationCredentialsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteVoiceConnectorTerminationCredentialsRequest): any => ({
    ...obj,
    ...(obj.Usernames && { Usernames: SENSITIVE_STRING }),
  });
}

export interface DescribeAppInstanceRequest {
  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn: string | undefined;
}

export namespace DescribeAppInstanceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAppInstanceRequest): any => ({
    ...obj,
  });
}

export interface DescribeAppInstanceResponse {
  /**
   * <p>The ARN, metadata, created and last-updated timestamps, and the name of the <code>AppInstance</code>. All
   *             timestamps use epoch milliseconds.</p>
   */
  AppInstance?: AppInstance;
}

export namespace DescribeAppInstanceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAppInstanceResponse): any => ({
    ...obj,
    ...(obj.AppInstance && { AppInstance: AppInstance.filterSensitiveLog(obj.AppInstance) }),
  });
}

export interface DescribeAppInstanceAdminRequest {
  /**
   * <p>The ARN of the <code>AppInstanceAdmin</code>.</p>
   */
  AppInstanceAdminArn: string | undefined;

  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn: string | undefined;
}

export namespace DescribeAppInstanceAdminRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAppInstanceAdminRequest): any => ({
    ...obj,
  });
}

export interface DescribeAppInstanceAdminResponse {
  /**
   * <p>The ARN and name of the <code>AppInstanceUser</code>, the ARN of the <code>AppInstance</code>, and the created and
   *             last-updated timestamps. All timestamps use epoch milliseconds.</p>
   */
  AppInstanceAdmin?: AppInstanceAdmin;
}

export namespace DescribeAppInstanceAdminResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAppInstanceAdminResponse): any => ({
    ...obj,
    ...(obj.AppInstanceAdmin && { AppInstanceAdmin: AppInstanceAdmin.filterSensitiveLog(obj.AppInstanceAdmin) }),
  });
}

export interface DescribeAppInstanceUserRequest {
  /**
   * <p>The ARN of the <code>AppInstanceUser</code>.</p>
   */
  AppInstanceUserArn: string | undefined;
}

export namespace DescribeAppInstanceUserRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAppInstanceUserRequest): any => ({
    ...obj,
  });
}

export interface DescribeAppInstanceUserResponse {
  /**
   * <p>The name of the <code>AppInstanceUser</code>.</p>
   */
  AppInstanceUser?: AppInstanceUser;
}

export namespace DescribeAppInstanceUserResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAppInstanceUserResponse): any => ({
    ...obj,
    ...(obj.AppInstanceUser && { AppInstanceUser: AppInstanceUser.filterSensitiveLog(obj.AppInstanceUser) }),
  });
}

export interface DescribeChannelRequest {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

export namespace DescribeChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeChannelRequest): any => ({
    ...obj,
  });
}

export interface DescribeChannelResponse {
  /**
   * <p>The channel details.</p>
   */
  Channel?: Channel;
}

export namespace DescribeChannelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeChannelResponse): any => ({
    ...obj,
    ...(obj.Channel && { Channel: Channel.filterSensitiveLog(obj.Channel) }),
  });
}

export interface DescribeChannelBanRequest {
  /**
   * <p>The ARN of the channel from which the user is banned.</p>
   */
  ChannelArn: string | undefined;

  /**
   * <p>The ARN of the member being banned.</p>
   */
  MemberArn: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

export namespace DescribeChannelBanRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeChannelBanRequest): any => ({
    ...obj,
  });
}

export interface DescribeChannelBanResponse {
  /**
   * <p>The details of the ban.</p>
   */
  ChannelBan?: ChannelBan;
}

export namespace DescribeChannelBanResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeChannelBanResponse): any => ({
    ...obj,
    ...(obj.ChannelBan && { ChannelBan: ChannelBan.filterSensitiveLog(obj.ChannelBan) }),
  });
}

export interface DescribeChannelMembershipRequest {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;

  /**
   * <p>The ARN of the member.</p>
   */
  MemberArn: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

export namespace DescribeChannelMembershipRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeChannelMembershipRequest): any => ({
    ...obj,
  });
}

export interface DescribeChannelMembershipResponse {
  /**
   * <p>The details of the membership.</p>
   */
  ChannelMembership?: ChannelMembership;
}

export namespace DescribeChannelMembershipResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeChannelMembershipResponse): any => ({
    ...obj,
    ...(obj.ChannelMembership && { ChannelMembership: ChannelMembership.filterSensitiveLog(obj.ChannelMembership) }),
  });
}

export interface DescribeChannelMembershipForAppInstanceUserRequest {
  /**
   * <p>The ARN of the channel to which the user belongs.</p>
   */
  ChannelArn: string | undefined;

  /**
   * <p>The ARN of the user in a channel.</p>
   */
  AppInstanceUserArn: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

export namespace DescribeChannelMembershipForAppInstanceUserRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeChannelMembershipForAppInstanceUserRequest): any => ({
    ...obj,
  });
}

export interface DescribeChannelMembershipForAppInstanceUserResponse {
  /**
   * <p>The channel to which a user belongs.</p>
   */
  ChannelMembership?: ChannelMembershipForAppInstanceUserSummary;
}

export namespace DescribeChannelMembershipForAppInstanceUserResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeChannelMembershipForAppInstanceUserResponse): any => ({
    ...obj,
    ...(obj.ChannelMembership && {
      ChannelMembership: ChannelMembershipForAppInstanceUserSummary.filterSensitiveLog(obj.ChannelMembership),
    }),
  });
}

export interface DescribeChannelModeratedByAppInstanceUserRequest {
  /**
   * <p>The ARN of the moderated channel.</p>
   */
  ChannelArn: string | undefined;

  /**
   * <p>The ARN of the <code>AppInstanceUser</code> in the moderated channel.</p>
   */
  AppInstanceUserArn: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

export namespace DescribeChannelModeratedByAppInstanceUserRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeChannelModeratedByAppInstanceUserRequest): any => ({
    ...obj,
  });
}

export interface DescribeChannelModeratedByAppInstanceUserResponse {
  /**
   * <p>The moderated channel.</p>
   */
  Channel?: ChannelModeratedByAppInstanceUserSummary;
}

export namespace DescribeChannelModeratedByAppInstanceUserResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeChannelModeratedByAppInstanceUserResponse): any => ({
    ...obj,
    ...(obj.Channel && { Channel: ChannelModeratedByAppInstanceUserSummary.filterSensitiveLog(obj.Channel) }),
  });
}

export interface DescribeChannelModeratorRequest {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;

  /**
   * <p>The ARN of the channel moderator.</p>
   */
  ChannelModeratorArn: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

export namespace DescribeChannelModeratorRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeChannelModeratorRequest): any => ({
    ...obj,
  });
}

export interface DescribeChannelModeratorResponse {
  /**
   * <p>The details of the channel moderator.</p>
   */
  ChannelModerator?: ChannelModerator;
}

export namespace DescribeChannelModeratorResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeChannelModeratorResponse): any => ({
    ...obj,
    ...(obj.ChannelModerator && { ChannelModerator: ChannelModerator.filterSensitiveLog(obj.ChannelModerator) }),
  });
}

export interface DisassociatePhoneNumberFromUserRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The user ID.</p>
   */
  UserId: string | undefined;
}

export namespace DisassociatePhoneNumberFromUserRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociatePhoneNumberFromUserRequest): any => ({
    ...obj,
  });
}

export interface DisassociatePhoneNumberFromUserResponse {}

export namespace DisassociatePhoneNumberFromUserResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociatePhoneNumberFromUserResponse): any => ({
    ...obj,
  });
}

export interface DisassociatePhoneNumbersFromVoiceConnectorRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;

  /**
   * <p>List of phone numbers, in E.164 format.</p>
   */
  E164PhoneNumbers: string[] | undefined;
}

export namespace DisassociatePhoneNumbersFromVoiceConnectorRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociatePhoneNumbersFromVoiceConnectorRequest): any => ({
    ...obj,
    ...(obj.E164PhoneNumbers && { E164PhoneNumbers: SENSITIVE_STRING }),
  });
}

export interface DisassociatePhoneNumbersFromVoiceConnectorResponse {
  /**
   * <p>If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages.</p>
   */
  PhoneNumberErrors?: PhoneNumberError[];
}

export namespace DisassociatePhoneNumbersFromVoiceConnectorResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociatePhoneNumbersFromVoiceConnectorResponse): any => ({
    ...obj,
  });
}

export interface DisassociatePhoneNumbersFromVoiceConnectorGroupRequest {
  /**
   * <p>The Amazon Chime Voice Connector group ID.</p>
   */
  VoiceConnectorGroupId: string | undefined;

  /**
   * <p>List of phone numbers, in E.164 format.</p>
   */
  E164PhoneNumbers: string[] | undefined;
}

export namespace DisassociatePhoneNumbersFromVoiceConnectorGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociatePhoneNumbersFromVoiceConnectorGroupRequest): any => ({
    ...obj,
    ...(obj.E164PhoneNumbers && { E164PhoneNumbers: SENSITIVE_STRING }),
  });
}

export interface DisassociatePhoneNumbersFromVoiceConnectorGroupResponse {
  /**
   * <p>If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages.</p>
   */
  PhoneNumberErrors?: PhoneNumberError[];
}

export namespace DisassociatePhoneNumbersFromVoiceConnectorGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociatePhoneNumbersFromVoiceConnectorGroupResponse): any => ({
    ...obj,
  });
}

export interface DisassociateSigninDelegateGroupsFromAccountRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The sign-in delegate group names.</p>
   */
  GroupNames: string[] | undefined;
}

export namespace DisassociateSigninDelegateGroupsFromAccountRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateSigninDelegateGroupsFromAccountRequest): any => ({
    ...obj,
  });
}

export interface DisassociateSigninDelegateGroupsFromAccountResponse {}

export namespace DisassociateSigninDelegateGroupsFromAccountResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateSigninDelegateGroupsFromAccountResponse): any => ({
    ...obj,
  });
}

export interface GetAccountRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
}

export namespace GetAccountRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAccountRequest): any => ({
    ...obj,
  });
}

export interface GetAccountResponse {
  /**
   * <p>The Amazon Chime account details.</p>
   */
  Account?: Account;
}

export namespace GetAccountResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAccountResponse): any => ({
    ...obj,
  });
}

export interface GetAccountSettingsRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
}

export namespace GetAccountSettingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAccountSettingsRequest): any => ({
    ...obj,
  });
}

export interface GetAccountSettingsResponse {
  /**
   * <p>The Amazon Chime account settings.</p>
   */
  AccountSettings?: AccountSettings;
}

export namespace GetAccountSettingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAccountSettingsResponse): any => ({
    ...obj,
  });
}

export interface GetAppInstanceRetentionSettingsRequest {
  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn: string | undefined;
}

export namespace GetAppInstanceRetentionSettingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAppInstanceRetentionSettingsRequest): any => ({
    ...obj,
  });
}

export interface GetAppInstanceRetentionSettingsResponse {
  /**
   * <p>The retention settings for the <code>AppInstance</code>.</p>
   */
  AppInstanceRetentionSettings?: AppInstanceRetentionSettings;

  /**
   * <p>The timestamp representing the time at which the specified items are retained, in Epoch Seconds.</p>
   */
  InitiateDeletionTimestamp?: Date;
}

export namespace GetAppInstanceRetentionSettingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAppInstanceRetentionSettingsResponse): any => ({
    ...obj,
  });
}

export interface GetAppInstanceStreamingConfigurationsRequest {
  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn: string | undefined;
}

export namespace GetAppInstanceStreamingConfigurationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAppInstanceStreamingConfigurationsRequest): any => ({
    ...obj,
  });
}

export interface GetAppInstanceStreamingConfigurationsResponse {
  /**
   * <p>The streaming settings.</p>
   */
  AppInstanceStreamingConfigurations?: AppInstanceStreamingConfiguration[];
}

export namespace GetAppInstanceStreamingConfigurationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAppInstanceStreamingConfigurationsResponse): any => ({
    ...obj,
    ...(obj.AppInstanceStreamingConfigurations && {
      AppInstanceStreamingConfigurations: obj.AppInstanceStreamingConfigurations.map((item) =>
        AppInstanceStreamingConfiguration.filterSensitiveLog(item)
      ),
    }),
  });
}

export interface GetAttendeeRequest {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;

  /**
   * <p>The Amazon Chime SDK attendee ID.</p>
   */
  AttendeeId: string | undefined;
}

export namespace GetAttendeeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAttendeeRequest): any => ({
    ...obj,
  });
}

export interface GetAttendeeResponse {
  /**
   * <p>The Amazon Chime SDK attendee information.</p>
   */
  Attendee?: Attendee;
}

export namespace GetAttendeeResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAttendeeResponse): any => ({
    ...obj,
    ...(obj.Attendee && { Attendee: Attendee.filterSensitiveLog(obj.Attendee) }),
  });
}

export interface GetBotRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The bot ID.</p>
   */
  BotId: string | undefined;
}

export namespace GetBotRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetBotRequest): any => ({
    ...obj,
  });
}

export interface GetBotResponse {
  /**
   * <p>The chat bot details.</p>
   */
  Bot?: Bot;
}

export namespace GetBotResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetBotResponse): any => ({
    ...obj,
    ...(obj.Bot && { Bot: Bot.filterSensitiveLog(obj.Bot) }),
  });
}

export interface GetChannelMessageRequest {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;

  /**
   * <p>The ID of the message.</p>
   */
  MessageId: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

export namespace GetChannelMessageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetChannelMessageRequest): any => ({
    ...obj,
  });
}

export interface GetChannelMessageResponse {
  /**
   * <p>The details of and content in the message.</p>
   */
  ChannelMessage?: ChannelMessage;
}

export namespace GetChannelMessageResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetChannelMessageResponse): any => ({
    ...obj,
    ...(obj.ChannelMessage && { ChannelMessage: ChannelMessage.filterSensitiveLog(obj.ChannelMessage) }),
  });
}

export interface GetEventsConfigurationRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The bot ID.</p>
   */
  BotId: string | undefined;
}

export namespace GetEventsConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEventsConfigurationRequest): any => ({
    ...obj,
  });
}

export interface GetEventsConfigurationResponse {
  /**
   * <p>The events configuration details.</p>
   */
  EventsConfiguration?: EventsConfiguration;
}

export namespace GetEventsConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEventsConfigurationResponse): any => ({
    ...obj,
    ...(obj.EventsConfiguration && {
      EventsConfiguration: EventsConfiguration.filterSensitiveLog(obj.EventsConfiguration),
    }),
  });
}

export interface GetGlobalSettingsResponse {
  /**
   * <p>The Amazon Chime Business Calling settings.</p>
   */
  BusinessCalling?: BusinessCallingSettings;

  /**
   * <p>The Amazon Chime Voice Connector settings.</p>
   */
  VoiceConnector?: VoiceConnectorSettings;
}

export namespace GetGlobalSettingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetGlobalSettingsResponse): any => ({
    ...obj,
  });
}

export interface GetMediaCapturePipelineRequest {
  /**
   * <p>The ID of the pipeline that you want to get.</p>
   */
  MediaPipelineId: string | undefined;
}

export namespace GetMediaCapturePipelineRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMediaCapturePipelineRequest): any => ({
    ...obj,
  });
}

export interface GetMediaCapturePipelineResponse {
  /**
   * <p>The media capture pipeline object.</p>
   */
  MediaCapturePipeline?: MediaCapturePipeline;
}

export namespace GetMediaCapturePipelineResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMediaCapturePipelineResponse): any => ({
    ...obj,
    ...(obj.MediaCapturePipeline && {
      MediaCapturePipeline: MediaCapturePipeline.filterSensitiveLog(obj.MediaCapturePipeline),
    }),
  });
}

export interface GetMeetingRequest {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;
}

export namespace GetMeetingRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMeetingRequest): any => ({
    ...obj,
  });
}

export interface GetMeetingResponse {
  /**
   * <p>The Amazon Chime SDK meeting information.</p>
   */
  Meeting?: Meeting;
}

export namespace GetMeetingResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMeetingResponse): any => ({
    ...obj,
    ...(obj.Meeting && { Meeting: Meeting.filterSensitiveLog(obj.Meeting) }),
  });
}

export interface GetMessagingSessionEndpointRequest {}

export namespace GetMessagingSessionEndpointRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMessagingSessionEndpointRequest): any => ({
    ...obj,
  });
}

export interface GetMessagingSessionEndpointResponse {
  /**
   * <p>The endpoint returned in the response.</p>
   */
  Endpoint?: MessagingSessionEndpoint;
}

export namespace GetMessagingSessionEndpointResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMessagingSessionEndpointResponse): any => ({
    ...obj,
  });
}

export interface GetPhoneNumberRequest {
  /**
   * <p>The phone number ID.</p>
   */
  PhoneNumberId: string | undefined;
}

export namespace GetPhoneNumberRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPhoneNumberRequest): any => ({
    ...obj,
  });
}

export interface GetPhoneNumberResponse {
  /**
   * <p>The phone number details.</p>
   */
  PhoneNumber?: PhoneNumber;
}

export namespace GetPhoneNumberResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPhoneNumberResponse): any => ({
    ...obj,
    ...(obj.PhoneNumber && { PhoneNumber: PhoneNumber.filterSensitiveLog(obj.PhoneNumber) }),
  });
}

export interface GetPhoneNumberOrderRequest {
  /**
   * <p>The ID for the phone number order.</p>
   */
  PhoneNumberOrderId: string | undefined;
}

export namespace GetPhoneNumberOrderRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPhoneNumberOrderRequest): any => ({
    ...obj,
  });
}

export interface GetPhoneNumberOrderResponse {
  /**
   * <p>The phone number order details.</p>
   */
  PhoneNumberOrder?: PhoneNumberOrder;
}

export namespace GetPhoneNumberOrderResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPhoneNumberOrderResponse): any => ({
    ...obj,
    ...(obj.PhoneNumberOrder && { PhoneNumberOrder: PhoneNumberOrder.filterSensitiveLog(obj.PhoneNumberOrder) }),
  });
}

export interface GetPhoneNumberSettingsResponse {
  /**
   * <p>The default outbound calling name for the account.</p>
   */
  CallingName?: string;

  /**
   * <p>The updated outbound calling name timestamp, in ISO 8601 format.</p>
   */
  CallingNameUpdatedTimestamp?: Date;
}

export namespace GetPhoneNumberSettingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPhoneNumberSettingsResponse): any => ({
    ...obj,
    ...(obj.CallingName && { CallingName: SENSITIVE_STRING }),
  });
}

export interface GetProxySessionRequest {
  /**
   * <p>The Amazon Chime voice connector ID.</p>
   */
  VoiceConnectorId: string | undefined;

  /**
   * <p>The proxy session ID.</p>
   */
  ProxySessionId: string | undefined;
}

export namespace GetProxySessionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetProxySessionRequest): any => ({
    ...obj,
  });
}

export interface GetProxySessionResponse {
  /**
   * <p>The proxy session details.</p>
   */
  ProxySession?: ProxySession;
}

export namespace GetProxySessionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetProxySessionResponse): any => ({
    ...obj,
    ...(obj.ProxySession && { ProxySession: ProxySession.filterSensitiveLog(obj.ProxySession) }),
  });
}

export interface GetRetentionSettingsRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
}

export namespace GetRetentionSettingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRetentionSettingsRequest): any => ({
    ...obj,
  });
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

export namespace GetRetentionSettingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRetentionSettingsResponse): any => ({
    ...obj,
  });
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

export namespace GetRoomRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRoomRequest): any => ({
    ...obj,
  });
}

export interface GetRoomResponse {
  /**
   * <p>The room details.</p>
   */
  Room?: Room;
}

export namespace GetRoomResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRoomResponse): any => ({
    ...obj,
    ...(obj.Room && { Room: Room.filterSensitiveLog(obj.Room) }),
  });
}

export interface GetSipMediaApplicationRequest {
  /**
   * <p>The SIP media application ID.</p>
   */
  SipMediaApplicationId: string | undefined;
}

export namespace GetSipMediaApplicationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSipMediaApplicationRequest): any => ({
    ...obj,
  });
}

export interface GetSipMediaApplicationResponse {
  /**
   * <p>The SIP media application details.</p>
   */
  SipMediaApplication?: SipMediaApplication;
}

export namespace GetSipMediaApplicationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSipMediaApplicationResponse): any => ({
    ...obj,
    ...(obj.SipMediaApplication && {
      SipMediaApplication: SipMediaApplication.filterSensitiveLog(obj.SipMediaApplication),
    }),
  });
}

export interface GetSipMediaApplicationLoggingConfigurationRequest {
  /**
   * <p>The SIP media application ID.</p>
   */
  SipMediaApplicationId: string | undefined;
}

export namespace GetSipMediaApplicationLoggingConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSipMediaApplicationLoggingConfigurationRequest): any => ({
    ...obj,
  });
}

export interface GetSipMediaApplicationLoggingConfigurationResponse {
  /**
   * <p>The actual logging configuration.</p>
   */
  SipMediaApplicationLoggingConfiguration?: SipMediaApplicationLoggingConfiguration;
}

export namespace GetSipMediaApplicationLoggingConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSipMediaApplicationLoggingConfigurationResponse): any => ({
    ...obj,
  });
}

export interface GetSipRuleRequest {
  /**
   * <p>The SIP rule ID.</p>
   */
  SipRuleId: string | undefined;
}

export namespace GetSipRuleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSipRuleRequest): any => ({
    ...obj,
  });
}

export interface GetSipRuleResponse {
  /**
   * <p>The SIP rule details.</p>
   */
  SipRule?: SipRule;
}

export namespace GetSipRuleResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSipRuleResponse): any => ({
    ...obj,
  });
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

export namespace GetUserRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetUserRequest): any => ({
    ...obj,
  });
}

export interface GetUserResponse {
  /**
   * <p>The user details.</p>
   */
  User?: User;
}

export namespace GetUserResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetUserResponse): any => ({
    ...obj,
    ...(obj.User && { User: User.filterSensitiveLog(obj.User) }),
  });
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

export namespace GetUserSettingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetUserSettingsRequest): any => ({
    ...obj,
  });
}

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
