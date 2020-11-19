import {
  Account,
  AccountSettings,
  AlexaForBusinessMetadata,
  Bot,
  BusinessCallingSettings,
  Capability,
  License,
  PhoneNumber,
  PhoneNumberProductType,
  ProxySession,
  Room,
  RoomMembership,
  RoomMembershipRole,
  SipMediaApplication,
  SipMediaApplicationEndpoint,
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
}

export namespace UpdateAccountRequest {
  export const filterSensitiveLog = (obj: UpdateAccountRequest): any => ({
    ...obj,
  });
}

export interface UpdateAccountResponse {
  /**
   * <p>The Amazon Chime account details. An AWS account can have multiple Amazon Chime accounts.</p>
   */
  Account?: Account;
}

export namespace UpdateAccountResponse {
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
  export const filterSensitiveLog = (obj: UpdateAccountSettingsRequest): any => ({
    ...obj,
  });
}

export interface UpdateAccountSettingsResponse {}

export namespace UpdateAccountSettingsResponse {
  export const filterSensitiveLog = (obj: UpdateAccountSettingsResponse): any => ({
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
  export const filterSensitiveLog = (obj: UpdateBotResponse): any => ({
    ...obj,
    ...(obj.Bot && { Bot: Bot.filterSensitiveLog(obj.Bot) }),
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
  export const filterSensitiveLog = (obj: UpdateProxySessionResponse): any => ({
    ...obj,
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
  export const filterSensitiveLog = (obj: UpdateSipMediaApplicationResponse): any => ({
    ...obj,
    ...(obj.SipMediaApplication && {
      SipMediaApplication: SipMediaApplication.filterSensitiveLog(obj.SipMediaApplication),
    }),
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
   * <p>The user license type to update. This must be a supported license type for the Amazon
   *        Chime account that the user belongs to.</p>
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
  export const filterSensitiveLog = (obj: UpdateVoiceConnectorGroupResponse): any => ({
    ...obj,
  });
}
