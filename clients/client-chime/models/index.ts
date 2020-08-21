import { SENSITIVE_STRING, SmithyException as __SmithyException, isa as __isa } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>You don't have permissions to perform the requested operation.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  Code?: ErrorCode | string;
  Message?: string;
}

export namespace AccessDeniedException {
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AccessDeniedException => __isa(o, "AccessDeniedException");
}

/**
 * <p>The Amazon Chime account details. An AWS account can have multiple Amazon Chime accounts.</p>
 */
export interface Account {
  __type?: "Account";
  /**
   * <p>The default license for the Amazon Chime account.</p>
   */
  DefaultLicense?: License | string;

  /**
   * <p>The AWS account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The Amazon Chime account type. For more information
   *        about different account types, see <a href="https://docs.aws.amazon.com/chime/latest/ag/manage-chime-account.html">Managing Your Amazon Chime Accounts</a> in the
   *        <i>Amazon
   *          Chime Administration Guide</i>.</p>
   */
  AccountType?: AccountType | string;

  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The Amazon Chime account name.</p>
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Chime account creation timestamp, in ISO 8601 format.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>Supported licenses for the Amazon Chime account.</p>
   */
  SupportedLicenses?: (License | string)[];

  /**
   * <p>The sign-in delegate groups associated with the account.</p>
   */
  SigninDelegateGroups?: SigninDelegateGroup[];
}

export namespace Account {
  export const filterSensitiveLog = (obj: Account): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Account => __isa(o, "Account");
}

/**
 * <p>Settings related to the Amazon Chime account. This includes settings that start or
 *       stop remote control of shared screens, or start or stop the dial-out option in the Amazon
 *       Chime web application. For more information about these settings, see <a href="https://docs.aws.amazon.com/chime/latest/ag/policies.html">Use the Policies Page</a> in
 *       the <i>Amazon Chime Administration Guide</i>.</p>
 */
export interface AccountSettings {
  __type?: "AccountSettings";
  /**
   * <p>Setting that stops or starts remote control of shared screens during meetings.</p>
   */
  DisableRemoteControl?: boolean;

  /**
   * <p>Setting that allows meeting participants to choose the <b>Call me at a phone
   *         number</b> option. For more information, see <a href="https://docs.aws.amazon.com/chime/latest/ug/chime-join-meeting.html">Join a Meeting without the Amazon Chime App</a>.</p>
   */
  EnableDialOut?: boolean;
}

export namespace AccountSettings {
  export const filterSensitiveLog = (obj: AccountSettings): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AccountSettings => __isa(o, "AccountSettings");
}

export enum AccountType {
  EnterpriseDirectory = "EnterpriseDirectory",
  EnterpriseLWA = "EnterpriseLWA",
  EnterpriseOIDC = "EnterpriseOIDC",
  Team = "Team",
}

/**
 * <p>The Alexa for Business metadata associated with an Amazon Chime user, used to integrate Alexa for Business with a device.</p>
 */
export interface AlexaForBusinessMetadata {
  __type?: "AlexaForBusinessMetadata";
  /**
   * <p>Starts or stops Alexa for Business.</p>
   */
  IsAlexaForBusinessEnabled?: boolean;

  /**
   * <p>The ARN of the room resource.</p>
   */
  AlexaForBusinessRoomArn?: string;
}

export namespace AlexaForBusinessMetadata {
  export const filterSensitiveLog = (obj: AlexaForBusinessMetadata): any => ({
    ...obj,
    ...(obj.AlexaForBusinessRoomArn && { AlexaForBusinessRoomArn: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is AlexaForBusinessMetadata => __isa(o, "AlexaForBusinessMetadata");
}

export interface AssociatePhoneNumbersWithVoiceConnectorGroupRequest {
  __type?: "AssociatePhoneNumbersWithVoiceConnectorGroupRequest";
  /**
   * <p>The Amazon Chime Voice Connector group ID.</p>
   */
  VoiceConnectorGroupId: string | undefined;

  /**
   * <p>If true, associates the provided phone numbers with the provided Amazon Chime Voice Connector Group and removes any previously existing associations. If false, does not associate any phone numbers that have previously existing associations.</p>
   */
  ForceAssociate?: boolean;

  /**
   * <p>List of phone numbers, in E.164 format.</p>
   */
  E164PhoneNumbers: string[] | undefined;
}

export namespace AssociatePhoneNumbersWithVoiceConnectorGroupRequest {
  export const filterSensitiveLog = (obj: AssociatePhoneNumbersWithVoiceConnectorGroupRequest): any => ({
    ...obj,
    ...(obj.E164PhoneNumbers && { E164PhoneNumbers: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is AssociatePhoneNumbersWithVoiceConnectorGroupRequest =>
    __isa(o, "AssociatePhoneNumbersWithVoiceConnectorGroupRequest");
}

export interface AssociatePhoneNumbersWithVoiceConnectorGroupResponse {
  __type?: "AssociatePhoneNumbersWithVoiceConnectorGroupResponse";
  /**
   * <p>If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages.</p>
   */
  PhoneNumberErrors?: PhoneNumberError[];
}

export namespace AssociatePhoneNumbersWithVoiceConnectorGroupResponse {
  export const filterSensitiveLog = (obj: AssociatePhoneNumbersWithVoiceConnectorGroupResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AssociatePhoneNumbersWithVoiceConnectorGroupResponse =>
    __isa(o, "AssociatePhoneNumbersWithVoiceConnectorGroupResponse");
}

export interface AssociatePhoneNumbersWithVoiceConnectorRequest {
  __type?: "AssociatePhoneNumbersWithVoiceConnectorRequest";
  /**
   * <p>If true, associates the provided phone numbers with the provided Amazon Chime Voice Connector and removes any previously existing associations. If false, does not associate any phone numbers that have previously existing associations.</p>
   */
  ForceAssociate?: boolean;

  /**
   * <p>List of phone numbers, in E.164 format.</p>
   */
  E164PhoneNumbers: string[] | undefined;

  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

export namespace AssociatePhoneNumbersWithVoiceConnectorRequest {
  export const filterSensitiveLog = (obj: AssociatePhoneNumbersWithVoiceConnectorRequest): any => ({
    ...obj,
    ...(obj.E164PhoneNumbers && { E164PhoneNumbers: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is AssociatePhoneNumbersWithVoiceConnectorRequest =>
    __isa(o, "AssociatePhoneNumbersWithVoiceConnectorRequest");
}

export interface AssociatePhoneNumbersWithVoiceConnectorResponse {
  __type?: "AssociatePhoneNumbersWithVoiceConnectorResponse";
  /**
   * <p>If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages.</p>
   */
  PhoneNumberErrors?: PhoneNumberError[];
}

export namespace AssociatePhoneNumbersWithVoiceConnectorResponse {
  export const filterSensitiveLog = (obj: AssociatePhoneNumbersWithVoiceConnectorResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AssociatePhoneNumbersWithVoiceConnectorResponse =>
    __isa(o, "AssociatePhoneNumbersWithVoiceConnectorResponse");
}

export interface AssociatePhoneNumberWithUserRequest {
  __type?: "AssociatePhoneNumberWithUserRequest";
  /**
   * <p>The phone number, in E.164 format.</p>
   */
  E164PhoneNumber: string | undefined;

  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The user ID.</p>
   */
  UserId: string | undefined;
}

export namespace AssociatePhoneNumberWithUserRequest {
  export const filterSensitiveLog = (obj: AssociatePhoneNumberWithUserRequest): any => ({
    ...obj,
    ...(obj.E164PhoneNumber && { E164PhoneNumber: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is AssociatePhoneNumberWithUserRequest =>
    __isa(o, "AssociatePhoneNumberWithUserRequest");
}

export interface AssociatePhoneNumberWithUserResponse {
  __type?: "AssociatePhoneNumberWithUserResponse";
}

export namespace AssociatePhoneNumberWithUserResponse {
  export const filterSensitiveLog = (obj: AssociatePhoneNumberWithUserResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AssociatePhoneNumberWithUserResponse =>
    __isa(o, "AssociatePhoneNumberWithUserResponse");
}

export interface AssociateSigninDelegateGroupsWithAccountRequest {
  __type?: "AssociateSigninDelegateGroupsWithAccountRequest";
  /**
   * <p>The sign-in delegate groups.</p>
   */
  SigninDelegateGroups: SigninDelegateGroup[] | undefined;

  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
}

export namespace AssociateSigninDelegateGroupsWithAccountRequest {
  export const filterSensitiveLog = (obj: AssociateSigninDelegateGroupsWithAccountRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AssociateSigninDelegateGroupsWithAccountRequest =>
    __isa(o, "AssociateSigninDelegateGroupsWithAccountRequest");
}

export interface AssociateSigninDelegateGroupsWithAccountResponse {
  __type?: "AssociateSigninDelegateGroupsWithAccountResponse";
}

export namespace AssociateSigninDelegateGroupsWithAccountResponse {
  export const filterSensitiveLog = (obj: AssociateSigninDelegateGroupsWithAccountResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AssociateSigninDelegateGroupsWithAccountResponse =>
    __isa(o, "AssociateSigninDelegateGroupsWithAccountResponse");
}

/**
 * <p>An Amazon Chime SDK meeting attendee. Includes a unique <code>AttendeeId</code>
 *       and <code>JoinToken</code>. The <code>JoinToken</code> allows a client to authenticate and join as the specified attendee. The <code>JoinToken</code> expires when the meeting ends or when <a>DeleteAttendee</a> is called. After that, the attendee is unable to join the meeting.</p>
 *          <p>We recommend securely transferring each <code>JoinToken</code> from your server
 *       application to the client so that no other client has access to the token except for the one authorized to represent the attendee.</p>
 */
export interface Attendee {
  __type?: "Attendee";
  /**
   * <p>The Amazon Chime SDK attendee ID.</p>
   */
  AttendeeId?: string;

  /**
   * <p>The join token used by the Amazon Chime SDK attendee.</p>
   */
  JoinToken?: string;

  /**
   * <p>The Amazon Chime SDK external user ID. Links the attendee to an identity managed by a builder application.</p>
   */
  ExternalUserId?: string;
}

export namespace Attendee {
  export const filterSensitiveLog = (obj: Attendee): any => ({
    ...obj,
    ...(obj.JoinToken && { JoinToken: SENSITIVE_STRING }),
    ...(obj.ExternalUserId && { ExternalUserId: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is Attendee => __isa(o, "Attendee");
}

/**
 * <p>The input parameters don't match the service's restrictions.</p>
 */
export interface BadRequestException extends __SmithyException, $MetadataBearer {
  name: "BadRequestException";
  $fault: "client";
  Code?: ErrorCode | string;
  Message?: string;
}

export namespace BadRequestException {
  export const filterSensitiveLog = (obj: BadRequestException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BadRequestException => __isa(o, "BadRequestException");
}

export interface BatchCreateAttendeeRequest {
  __type?: "BatchCreateAttendeeRequest";
  /**
   * <p>The request containing the attendees to create.</p>
   */
  Attendees: CreateAttendeeRequestItem[] | undefined;

  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;
}

export namespace BatchCreateAttendeeRequest {
  export const filterSensitiveLog = (obj: BatchCreateAttendeeRequest): any => ({
    ...obj,
    ...(obj.Attendees && {
      Attendees: obj.Attendees.map((item) => CreateAttendeeRequestItem.filterSensitiveLog(item)),
    }),
  });
  export const isa = (o: any): o is BatchCreateAttendeeRequest => __isa(o, "BatchCreateAttendeeRequest");
}

export interface BatchCreateAttendeeResponse {
  __type?: "BatchCreateAttendeeResponse";
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
  export const filterSensitiveLog = (obj: BatchCreateAttendeeResponse): any => ({
    ...obj,
    ...(obj.Attendees && { Attendees: obj.Attendees.map((item) => Attendee.filterSensitiveLog(item)) }),
    ...(obj.Errors && { Errors: obj.Errors.map((item) => CreateAttendeeError.filterSensitiveLog(item)) }),
  });
  export const isa = (o: any): o is BatchCreateAttendeeResponse => __isa(o, "BatchCreateAttendeeResponse");
}

export interface BatchCreateRoomMembershipRequest {
  __type?: "BatchCreateRoomMembershipRequest";
  /**
   * <p>The list of membership items.</p>
   */
  MembershipItemList: MembershipItem[] | undefined;

  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The room ID.</p>
   */
  RoomId: string | undefined;
}

export namespace BatchCreateRoomMembershipRequest {
  export const filterSensitiveLog = (obj: BatchCreateRoomMembershipRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BatchCreateRoomMembershipRequest => __isa(o, "BatchCreateRoomMembershipRequest");
}

export interface BatchCreateRoomMembershipResponse {
  __type?: "BatchCreateRoomMembershipResponse";
  /**
   * <p>If the action fails for one or more of the member IDs in the request, a list of the member IDs is returned, along with error codes and error messages.</p>
   */
  Errors?: MemberError[];
}

export namespace BatchCreateRoomMembershipResponse {
  export const filterSensitiveLog = (obj: BatchCreateRoomMembershipResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BatchCreateRoomMembershipResponse => __isa(o, "BatchCreateRoomMembershipResponse");
}

export interface BatchDeletePhoneNumberRequest {
  __type?: "BatchDeletePhoneNumberRequest";
  /**
   * <p>List of phone number IDs.</p>
   */
  PhoneNumberIds: string[] | undefined;
}

export namespace BatchDeletePhoneNumberRequest {
  export const filterSensitiveLog = (obj: BatchDeletePhoneNumberRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BatchDeletePhoneNumberRequest => __isa(o, "BatchDeletePhoneNumberRequest");
}

export interface BatchDeletePhoneNumberResponse {
  __type?: "BatchDeletePhoneNumberResponse";
  /**
   * <p>If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages.</p>
   */
  PhoneNumberErrors?: PhoneNumberError[];
}

export namespace BatchDeletePhoneNumberResponse {
  export const filterSensitiveLog = (obj: BatchDeletePhoneNumberResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BatchDeletePhoneNumberResponse => __isa(o, "BatchDeletePhoneNumberResponse");
}

export interface BatchSuspendUserRequest {
  __type?: "BatchSuspendUserRequest";
  /**
   * <p>The request containing the user IDs to suspend.</p>
   */
  UserIdList: string[] | undefined;

  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
}

export namespace BatchSuspendUserRequest {
  export const filterSensitiveLog = (obj: BatchSuspendUserRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BatchSuspendUserRequest => __isa(o, "BatchSuspendUserRequest");
}

export interface BatchSuspendUserResponse {
  __type?: "BatchSuspendUserResponse";
  /**
   * <p>If the <a>BatchSuspendUser</a> action fails for one
   *       or more of the user IDs in the request, a list of the user IDs is returned, along with error
   *       codes and error messages.</p>
   */
  UserErrors?: UserError[];
}

export namespace BatchSuspendUserResponse {
  export const filterSensitiveLog = (obj: BatchSuspendUserResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BatchSuspendUserResponse => __isa(o, "BatchSuspendUserResponse");
}

export interface BatchUnsuspendUserRequest {
  __type?: "BatchUnsuspendUserRequest";
  /**
   * <p>The request containing the user IDs to unsuspend.</p>
   */
  UserIdList: string[] | undefined;

  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
}

export namespace BatchUnsuspendUserRequest {
  export const filterSensitiveLog = (obj: BatchUnsuspendUserRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BatchUnsuspendUserRequest => __isa(o, "BatchUnsuspendUserRequest");
}

export interface BatchUnsuspendUserResponse {
  __type?: "BatchUnsuspendUserResponse";
  /**
   * <p>If the <a>BatchUnsuspendUser</a> action fails for one
   *       or more of the user IDs in the request, a list of the user IDs is returned, along with error
   *       codes and error messages.</p>
   */
  UserErrors?: UserError[];
}

export namespace BatchUnsuspendUserResponse {
  export const filterSensitiveLog = (obj: BatchUnsuspendUserResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BatchUnsuspendUserResponse => __isa(o, "BatchUnsuspendUserResponse");
}

export interface BatchUpdatePhoneNumberRequest {
  __type?: "BatchUpdatePhoneNumberRequest";
  /**
   * <p>The request containing the phone number IDs and product types or calling names to update.</p>
   */
  UpdatePhoneNumberRequestItems: UpdatePhoneNumberRequestItem[] | undefined;
}

export namespace BatchUpdatePhoneNumberRequest {
  export const filterSensitiveLog = (obj: BatchUpdatePhoneNumberRequest): any => ({
    ...obj,
    ...(obj.UpdatePhoneNumberRequestItems && {
      UpdatePhoneNumberRequestItems: obj.UpdatePhoneNumberRequestItems.map((item) =>
        UpdatePhoneNumberRequestItem.filterSensitiveLog(item)
      ),
    }),
  });
  export const isa = (o: any): o is BatchUpdatePhoneNumberRequest => __isa(o, "BatchUpdatePhoneNumberRequest");
}

export interface BatchUpdatePhoneNumberResponse {
  __type?: "BatchUpdatePhoneNumberResponse";
  /**
   * <p>If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages.</p>
   */
  PhoneNumberErrors?: PhoneNumberError[];
}

export namespace BatchUpdatePhoneNumberResponse {
  export const filterSensitiveLog = (obj: BatchUpdatePhoneNumberResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BatchUpdatePhoneNumberResponse => __isa(o, "BatchUpdatePhoneNumberResponse");
}

export interface BatchUpdateUserRequest {
  __type?: "BatchUpdateUserRequest";
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
  export const filterSensitiveLog = (obj: BatchUpdateUserRequest): any => ({
    ...obj,
    ...(obj.UpdateUserRequestItems && {
      UpdateUserRequestItems: obj.UpdateUserRequestItems.map((item) => UpdateUserRequestItem.filterSensitiveLog(item)),
    }),
  });
  export const isa = (o: any): o is BatchUpdateUserRequest => __isa(o, "BatchUpdateUserRequest");
}

export interface BatchUpdateUserResponse {
  __type?: "BatchUpdateUserResponse";
  /**
   * <p>If the <a>BatchUpdateUser</a> action fails for one
   *       or more of the user IDs in the request, a list of the user IDs is returned, along with error
   *       codes and error messages.</p>
   */
  UserErrors?: UserError[];
}

export namespace BatchUpdateUserResponse {
  export const filterSensitiveLog = (obj: BatchUpdateUserResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BatchUpdateUserResponse => __isa(o, "BatchUpdateUserResponse");
}

/**
 * <p>A resource that allows Enterprise account administrators to configure an interface to receive events from Amazon Chime.</p>
 */
export interface Bot {
  __type?: "Bot";
  /**
   * <p>When true, the bot is stopped from running in your account.</p>
   */
  Disabled?: boolean;

  /**
   * <p>The security token used to authenticate Amazon Chime with the outgoing event endpoint.</p>
   */
  SecurityToken?: string;

  /**
   * <p>The bot creation timestamp, in ISO 8601 format.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The bot type.</p>
   */
  BotType?: BotType | string;

  /**
   * <p>The unique ID for the bot user.</p>
   */
  UserId?: string;

  /**
   * <p>The bot display name.</p>
   */
  DisplayName?: string;

  /**
   * <p>The updated bot timestamp, in ISO 8601 format.</p>
   */
  UpdatedTimestamp?: Date;

  /**
   * <p>The bot ID.</p>
   */
  BotId?: string;

  /**
   * <p>The bot email address.</p>
   */
  BotEmail?: string;
}

export namespace Bot {
  export const filterSensitiveLog = (obj: Bot): any => ({
    ...obj,
    ...(obj.SecurityToken && { SecurityToken: SENSITIVE_STRING }),
    ...(obj.DisplayName && { DisplayName: SENSITIVE_STRING }),
    ...(obj.BotEmail && { BotEmail: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is Bot => __isa(o, "Bot");
}

export enum BotType {
  ChatBot = "ChatBot",
}

/**
 * <p>The Amazon Chime Business Calling settings for the administrator's AWS account.
 *       Includes any Amazon S3 buckets designated for storing call detail records.</p>
 */
export interface BusinessCallingSettings {
  __type?: "BusinessCallingSettings";
  /**
   * <p>The Amazon S3 bucket designated for call detail record storage.</p>
   */
  CdrBucket?: string;
}

export namespace BusinessCallingSettings {
  export const filterSensitiveLog = (obj: BusinessCallingSettings): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BusinessCallingSettings => __isa(o, "BusinessCallingSettings");
}

export enum CallingNameStatus {
  Unassigned = "Unassigned",
  UpdateFailed = "UpdateFailed",
  UpdateInProgress = "UpdateInProgress",
  UpdateSucceeded = "UpdateSucceeded",
}

export enum Capability {
  SMS = "SMS",
  Voice = "Voice",
}

/**
 * <p>The request could not be processed because of conflict in the current state of the
 *        resource.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  Message?: string;
  Code?: ErrorCode | string;
}

export namespace ConflictException {
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ConflictException => __isa(o, "ConflictException");
}

/**
 * <p>The retention settings that determine how long to retain chat conversation messages for an Amazon Chime Enterprise account.</p>
 */
export interface ConversationRetentionSettings {
  __type?: "ConversationRetentionSettings";
  /**
   * <p>The number of days for which to retain chat conversation messages.</p>
   */
  RetentionDays?: number;
}

export namespace ConversationRetentionSettings {
  export const filterSensitiveLog = (obj: ConversationRetentionSettings): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ConversationRetentionSettings => __isa(o, "ConversationRetentionSettings");
}

export interface CreateAccountRequest {
  __type?: "CreateAccountRequest";
  /**
   * <p>The name of the Amazon Chime account.</p>
   */
  Name: string | undefined;
}

export namespace CreateAccountRequest {
  export const filterSensitiveLog = (obj: CreateAccountRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateAccountRequest => __isa(o, "CreateAccountRequest");
}

export interface CreateAccountResponse {
  __type?: "CreateAccountResponse";
  /**
   * <p>The Amazon Chime account details.</p>
   */
  Account?: Account;
}

export namespace CreateAccountResponse {
  export const filterSensitiveLog = (obj: CreateAccountResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateAccountResponse => __isa(o, "CreateAccountResponse");
}

/**
 * <p>The list of errors returned when errors are encountered during the BatchCreateAttendee and CreateAttendee actions. This includes external user IDs, error codes, and error messages.</p>
 */
export interface CreateAttendeeError {
  __type?: "CreateAttendeeError";
  /**
   * <p>The error code.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The Amazon Chime SDK external user ID. Links the attendee to an identity managed by a builder application.</p>
   */
  ExternalUserId?: string;

  /**
   * <p>The error message.</p>
   */
  ErrorMessage?: string;
}

export namespace CreateAttendeeError {
  export const filterSensitiveLog = (obj: CreateAttendeeError): any => ({
    ...obj,
    ...(obj.ExternalUserId && { ExternalUserId: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is CreateAttendeeError => __isa(o, "CreateAttendeeError");
}

export interface CreateAttendeeRequest {
  __type?: "CreateAttendeeRequest";
  /**
   * <p>The Amazon Chime SDK external user ID. Links the attendee to an identity managed by a builder application.</p>
   */
  ExternalUserId: string | undefined;

  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;

  /**
   * <p>The tag key-value pairs.</p>
   */
  Tags?: Tag[];
}

export namespace CreateAttendeeRequest {
  export const filterSensitiveLog = (obj: CreateAttendeeRequest): any => ({
    ...obj,
    ...(obj.ExternalUserId && { ExternalUserId: SENSITIVE_STRING }),
    ...(obj.Tags && { Tags: obj.Tags.map((item) => Tag.filterSensitiveLog(item)) }),
  });
  export const isa = (o: any): o is CreateAttendeeRequest => __isa(o, "CreateAttendeeRequest");
}

/**
 * <p>The Amazon Chime SDK attendee fields to create, used with the BatchCreateAttendee action.</p>
 */
export interface CreateAttendeeRequestItem {
  __type?: "CreateAttendeeRequestItem";
  /**
   * <p>The Amazon Chime SDK external user ID. Links the attendee to an identity managed by a builder application.</p>
   */
  ExternalUserId: string | undefined;

  /**
   * <p>The tag key-value pairs.</p>
   */
  Tags?: Tag[];
}

export namespace CreateAttendeeRequestItem {
  export const filterSensitiveLog = (obj: CreateAttendeeRequestItem): any => ({
    ...obj,
    ...(obj.ExternalUserId && { ExternalUserId: SENSITIVE_STRING }),
    ...(obj.Tags && { Tags: obj.Tags.map((item) => Tag.filterSensitiveLog(item)) }),
  });
  export const isa = (o: any): o is CreateAttendeeRequestItem => __isa(o, "CreateAttendeeRequestItem");
}

export interface CreateAttendeeResponse {
  __type?: "CreateAttendeeResponse";
  /**
   * <p>The attendee information, including attendee ID and join token.</p>
   */
  Attendee?: Attendee;
}

export namespace CreateAttendeeResponse {
  export const filterSensitiveLog = (obj: CreateAttendeeResponse): any => ({
    ...obj,
    ...(obj.Attendee && { Attendee: Attendee.filterSensitiveLog(obj.Attendee) }),
  });
  export const isa = (o: any): o is CreateAttendeeResponse => __isa(o, "CreateAttendeeResponse");
}

export interface CreateBotRequest {
  __type?: "CreateBotRequest";
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The domain of the Amazon Chime Enterprise account.</p>
   */
  Domain?: string;

  /**
   * <p>The bot display name.</p>
   */
  DisplayName: string | undefined;
}

export namespace CreateBotRequest {
  export const filterSensitiveLog = (obj: CreateBotRequest): any => ({
    ...obj,
    ...(obj.DisplayName && { DisplayName: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is CreateBotRequest => __isa(o, "CreateBotRequest");
}

export interface CreateBotResponse {
  __type?: "CreateBotResponse";
  /**
   * <p>The bot details.</p>
   */
  Bot?: Bot;
}

export namespace CreateBotResponse {
  export const filterSensitiveLog = (obj: CreateBotResponse): any => ({
    ...obj,
    ...(obj.Bot && { Bot: Bot.filterSensitiveLog(obj.Bot) }),
  });
  export const isa = (o: any): o is CreateBotResponse => __isa(o, "CreateBotResponse");
}

export interface CreateMeetingRequest {
  __type?: "CreateMeetingRequest";
  /**
   * <p>The tag key-value pairs.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The Region in which to create the meeting. Default: <code>us-east-1</code>.</p>
   *          <p>Available values: <code>ap-northeast-1</code>, <code>ap-southeast-1</code>, <code>ap-southeast-2</code>, <code>ca-central-1</code>, <code>eu-central-1</code>, <code>eu-north-1</code>, <code>eu-west-1</code>, <code>eu-west-2</code>, <code>eu-west-3</code>, <code>sa-east-1</code>, <code>us-east-1</code>, <code>us-east-2</code>, <code>us-west-1</code>, <code>us-west-2</code>.</p>
   */
  MediaRegion?: string;

  /**
   * <p>The unique identifier for the client request. Use a different token for different meetings.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>Reserved.</p>
   */
  MeetingHostId?: string;

  /**
   * <p>The configuration for resource targets to receive notifications when meeting and attendee events occur.</p>
   */
  NotificationsConfiguration?: MeetingNotificationConfiguration;

  /**
   * <p>The external meeting ID.</p>
   */
  ExternalMeetingId?: string;
}

export namespace CreateMeetingRequest {
  export const filterSensitiveLog = (obj: CreateMeetingRequest): any => ({
    ...obj,
    ...(obj.Tags && { Tags: obj.Tags.map((item) => Tag.filterSensitiveLog(item)) }),
    ...(obj.ClientRequestToken && { ClientRequestToken: SENSITIVE_STRING }),
    ...(obj.MeetingHostId && { MeetingHostId: SENSITIVE_STRING }),
    ...(obj.NotificationsConfiguration && {
      NotificationsConfiguration: MeetingNotificationConfiguration.filterSensitiveLog(obj.NotificationsConfiguration),
    }),
    ...(obj.ExternalMeetingId && { ExternalMeetingId: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is CreateMeetingRequest => __isa(o, "CreateMeetingRequest");
}

export interface CreateMeetingResponse {
  __type?: "CreateMeetingResponse";
  /**
   * <p>The meeting information, including the meeting ID and <code>MediaPlacement</code>.</p>
   */
  Meeting?: Meeting;
}

export namespace CreateMeetingResponse {
  export const filterSensitiveLog = (obj: CreateMeetingResponse): any => ({
    ...obj,
    ...(obj.Meeting && { Meeting: Meeting.filterSensitiveLog(obj.Meeting) }),
  });
  export const isa = (o: any): o is CreateMeetingResponse => __isa(o, "CreateMeetingResponse");
}

export interface CreateMeetingWithAttendeesRequest {
  __type?: "CreateMeetingWithAttendeesRequest";
  /**
   * <p>The configuration for resource targets to receive notifications when Amazon Chime SDK meeting and attendee events occur. The Amazon Chime SDK supports resource targets located in the US East (N. Virginia) AWS Region (<code>us-east-1</code>).</p>
   */
  NotificationsConfiguration?: MeetingNotificationConfiguration;

  /**
   * <p>The unique identifier for the client request. Use a different token for different meetings.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The external meeting ID.</p>
   */
  ExternalMeetingId?: string;

  /**
   * <p>The request containing the attendees to create.</p>
   */
  Attendees?: CreateAttendeeRequestItem[];

  /**
   * <p>The Region in which to create the meeting. Default: <code>us-east-1</code>.</p>
   *          <p>Available values: <code>ap-northeast-1</code>, <code>ap-southeast-1</code>, <code>ap-southeast-2</code>, <code>ca-central-1</code>, <code>eu-central-1</code>, <code>eu-north-1</code>, <code>eu-west-1</code>, <code>eu-west-2</code>, <code>eu-west-3</code>, <code>sa-east-1</code>, <code>us-east-1</code>, <code>us-east-2</code>, <code>us-west-1</code>, <code>us-west-2</code>.</p>
   */
  MediaRegion?: string;

  /**
   * <p>Reserved.</p>
   */
  MeetingHostId?: string;

  /**
   * <p>The tag key-value pairs.</p>
   */
  Tags?: Tag[];
}

export namespace CreateMeetingWithAttendeesRequest {
  export const filterSensitiveLog = (obj: CreateMeetingWithAttendeesRequest): any => ({
    ...obj,
    ...(obj.NotificationsConfiguration && {
      NotificationsConfiguration: MeetingNotificationConfiguration.filterSensitiveLog(obj.NotificationsConfiguration),
    }),
    ...(obj.ClientRequestToken && { ClientRequestToken: SENSITIVE_STRING }),
    ...(obj.ExternalMeetingId && { ExternalMeetingId: SENSITIVE_STRING }),
    ...(obj.Attendees && {
      Attendees: obj.Attendees.map((item) => CreateAttendeeRequestItem.filterSensitiveLog(item)),
    }),
    ...(obj.MeetingHostId && { MeetingHostId: SENSITIVE_STRING }),
    ...(obj.Tags && { Tags: obj.Tags.map((item) => Tag.filterSensitiveLog(item)) }),
  });
  export const isa = (o: any): o is CreateMeetingWithAttendeesRequest => __isa(o, "CreateMeetingWithAttendeesRequest");
}

export interface CreateMeetingWithAttendeesResponse {
  __type?: "CreateMeetingWithAttendeesResponse";
  /**
   * <p>If the action fails for one or more of the attendees in the request, a list of the attendees is returned, along with error codes and error messages.</p>
   */
  Errors?: CreateAttendeeError[];

  /**
   * <p>The attendee information, including attendees IDs and join tokens.</p>
   */
  Attendees?: Attendee[];

  /**
   * <p>A meeting created using the Amazon Chime SDK.</p>
   */
  Meeting?: Meeting;
}

export namespace CreateMeetingWithAttendeesResponse {
  export const filterSensitiveLog = (obj: CreateMeetingWithAttendeesResponse): any => ({
    ...obj,
    ...(obj.Errors && { Errors: obj.Errors.map((item) => CreateAttendeeError.filterSensitiveLog(item)) }),
    ...(obj.Attendees && { Attendees: obj.Attendees.map((item) => Attendee.filterSensitiveLog(item)) }),
    ...(obj.Meeting && { Meeting: Meeting.filterSensitiveLog(obj.Meeting) }),
  });
  export const isa = (o: any): o is CreateMeetingWithAttendeesResponse =>
    __isa(o, "CreateMeetingWithAttendeesResponse");
}

export interface CreatePhoneNumberOrderRequest {
  __type?: "CreatePhoneNumberOrderRequest";
  /**
   * <p>List of phone numbers, in E.164 format.</p>
   */
  E164PhoneNumbers: string[] | undefined;

  /**
   * <p>The phone number product type.</p>
   */
  ProductType: PhoneNumberProductType | string | undefined;
}

export namespace CreatePhoneNumberOrderRequest {
  export const filterSensitiveLog = (obj: CreatePhoneNumberOrderRequest): any => ({
    ...obj,
    ...(obj.E164PhoneNumbers && { E164PhoneNumbers: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is CreatePhoneNumberOrderRequest => __isa(o, "CreatePhoneNumberOrderRequest");
}

export interface CreatePhoneNumberOrderResponse {
  __type?: "CreatePhoneNumberOrderResponse";
  /**
   * <p>The phone number order details.</p>
   */
  PhoneNumberOrder?: PhoneNumberOrder;
}

export namespace CreatePhoneNumberOrderResponse {
  export const filterSensitiveLog = (obj: CreatePhoneNumberOrderResponse): any => ({
    ...obj,
    ...(obj.PhoneNumberOrder && { PhoneNumberOrder: PhoneNumberOrder.filterSensitiveLog(obj.PhoneNumberOrder) }),
  });
  export const isa = (o: any): o is CreatePhoneNumberOrderResponse => __isa(o, "CreatePhoneNumberOrderResponse");
}

export interface CreateProxySessionRequest {
  __type?: "CreateProxySessionRequest";
  /**
   * <p>The proxy session capabilities.</p>
   */
  Capabilities: (Capability | string)[] | undefined;

  /**
   * <p>The preference for proxy phone number reuse, or stickiness, between the same participants across sessions.</p>
   */
  NumberSelectionBehavior?: NumberSelectionBehavior | string;

  /**
   * <p>The name of the proxy session.</p>
   */
  Name?: string;

  /**
   * <p>The country and area code for the proxy phone number.</p>
   */
  GeoMatchParams?: GeoMatchParams;

  /**
   * <p>The preference for matching the country or area code of the proxy phone number with that of the first participant.</p>
   */
  GeoMatchLevel?: GeoMatchLevel | string;

  /**
   * <p>The participant phone numbers.</p>
   */
  ParticipantPhoneNumbers: string[] | undefined;

  /**
   * <p>The Amazon Chime voice connector ID.</p>
   */
  VoiceConnectorId: string | undefined;

  /**
   * <p>The number of minutes allowed for the proxy session.</p>
   */
  ExpiryMinutes?: number;
}

export namespace CreateProxySessionRequest {
  export const filterSensitiveLog = (obj: CreateProxySessionRequest): any => ({
    ...obj,
    ...(obj.Name && { Name: SENSITIVE_STRING }),
    ...(obj.ParticipantPhoneNumbers && { ParticipantPhoneNumbers: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is CreateProxySessionRequest => __isa(o, "CreateProxySessionRequest");
}

export interface CreateProxySessionResponse {
  __type?: "CreateProxySessionResponse";
  /**
   * <p>The proxy session details.</p>
   */
  ProxySession?: ProxySession;
}

export namespace CreateProxySessionResponse {
  export const filterSensitiveLog = (obj: CreateProxySessionResponse): any => ({
    ...obj,
    ...(obj.ProxySession && { ProxySession: ProxySession.filterSensitiveLog(obj.ProxySession) }),
  });
  export const isa = (o: any): o is CreateProxySessionResponse => __isa(o, "CreateProxySessionResponse");
}

export interface CreateRoomMembershipRequest {
  __type?: "CreateRoomMembershipRequest";
  /**
   * <p>The role of the member.</p>
   */
  Role?: RoomMembershipRole | string;

  /**
   * <p>The Amazon Chime member ID (user ID or bot ID).</p>
   */
  MemberId: string | undefined;

  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The room ID.</p>
   */
  RoomId: string | undefined;
}

export namespace CreateRoomMembershipRequest {
  export const filterSensitiveLog = (obj: CreateRoomMembershipRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateRoomMembershipRequest => __isa(o, "CreateRoomMembershipRequest");
}

export interface CreateRoomMembershipResponse {
  __type?: "CreateRoomMembershipResponse";
  /**
   * <p>The room membership details.</p>
   */
  RoomMembership?: RoomMembership;
}

export namespace CreateRoomMembershipResponse {
  export const filterSensitiveLog = (obj: CreateRoomMembershipResponse): any => ({
    ...obj,
    ...(obj.RoomMembership && { RoomMembership: RoomMembership.filterSensitiveLog(obj.RoomMembership) }),
  });
  export const isa = (o: any): o is CreateRoomMembershipResponse => __isa(o, "CreateRoomMembershipResponse");
}

export interface CreateRoomRequest {
  __type?: "CreateRoomRequest";
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
  export const filterSensitiveLog = (obj: CreateRoomRequest): any => ({
    ...obj,
    ...(obj.Name && { Name: SENSITIVE_STRING }),
    ...(obj.ClientRequestToken && { ClientRequestToken: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is CreateRoomRequest => __isa(o, "CreateRoomRequest");
}

export interface CreateRoomResponse {
  __type?: "CreateRoomResponse";
  /**
   * <p>The room details.</p>
   */
  Room?: Room;
}

export namespace CreateRoomResponse {
  export const filterSensitiveLog = (obj: CreateRoomResponse): any => ({
    ...obj,
    ...(obj.Room && { Room: Room.filterSensitiveLog(obj.Room) }),
  });
  export const isa = (o: any): o is CreateRoomResponse => __isa(o, "CreateRoomResponse");
}

export interface CreateUserRequest {
  __type?: "CreateUserRequest";
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The user's email address.</p>
   */
  Email?: string;

  /**
   * <p>The user type.</p>
   */
  UserType?: UserType | string;

  /**
   * <p>The user name.</p>
   */
  Username?: string;
}

export namespace CreateUserRequest {
  export const filterSensitiveLog = (obj: CreateUserRequest): any => ({
    ...obj,
    ...(obj.Email && { Email: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is CreateUserRequest => __isa(o, "CreateUserRequest");
}

export interface CreateUserResponse {
  __type?: "CreateUserResponse";
  /**
   * <p>The user on the Amazon Chime account.</p>
   */
  User?: User;
}

export namespace CreateUserResponse {
  export const filterSensitiveLog = (obj: CreateUserResponse): any => ({
    ...obj,
    ...(obj.User && { User: User.filterSensitiveLog(obj.User) }),
  });
  export const isa = (o: any): o is CreateUserResponse => __isa(o, "CreateUserResponse");
}

export interface CreateVoiceConnectorGroupRequest {
  __type?: "CreateVoiceConnectorGroupRequest";
  /**
   * <p>The Amazon Chime Voice Connectors to route inbound calls to.</p>
   */
  VoiceConnectorItems?: VoiceConnectorItem[];

  /**
   * <p>The name of the Amazon Chime Voice Connector group.</p>
   */
  Name: string | undefined;
}

export namespace CreateVoiceConnectorGroupRequest {
  export const filterSensitiveLog = (obj: CreateVoiceConnectorGroupRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateVoiceConnectorGroupRequest => __isa(o, "CreateVoiceConnectorGroupRequest");
}

export interface CreateVoiceConnectorGroupResponse {
  __type?: "CreateVoiceConnectorGroupResponse";
  /**
   * <p>The Amazon Chime Voice Connector group details.</p>
   */
  VoiceConnectorGroup?: VoiceConnectorGroup;
}

export namespace CreateVoiceConnectorGroupResponse {
  export const filterSensitiveLog = (obj: CreateVoiceConnectorGroupResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateVoiceConnectorGroupResponse => __isa(o, "CreateVoiceConnectorGroupResponse");
}

export interface CreateVoiceConnectorRequest {
  __type?: "CreateVoiceConnectorRequest";
  /**
   * <p>The AWS Region in which the Amazon Chime Voice Connector is created. Default value: <code>us-east-1</code>.</p>
   */
  AwsRegion?: VoiceConnectorAwsRegion | string;

  /**
   * <p>When enabled, requires encryption for the Amazon Chime Voice Connector.</p>
   */
  RequireEncryption: boolean | undefined;

  /**
   * <p>The name of the Amazon Chime Voice Connector.</p>
   */
  Name: string | undefined;
}

export namespace CreateVoiceConnectorRequest {
  export const filterSensitiveLog = (obj: CreateVoiceConnectorRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateVoiceConnectorRequest => __isa(o, "CreateVoiceConnectorRequest");
}

export interface CreateVoiceConnectorResponse {
  __type?: "CreateVoiceConnectorResponse";
  /**
   * <p>The Amazon Chime Voice Connector details.</p>
   */
  VoiceConnector?: VoiceConnector;
}

export namespace CreateVoiceConnectorResponse {
  export const filterSensitiveLog = (obj: CreateVoiceConnectorResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateVoiceConnectorResponse => __isa(o, "CreateVoiceConnectorResponse");
}

/**
 * <p>The SIP credentials used to authenticate requests to your Amazon Chime Voice Connector.</p>
 */
export interface Credential {
  __type?: "Credential";
  /**
   * <p>The RFC2617 compliant password associated with the SIP credentials, in US-ASCII format.</p>
   */
  Password?: string;

  /**
   * <p>The RFC2617 compliant user name associated with the SIP credentials, in US-ASCII
   *       format.</p>
   */
  Username?: string;
}

export namespace Credential {
  export const filterSensitiveLog = (obj: Credential): any => ({
    ...obj,
    ...(obj.Password && { Password: SENSITIVE_STRING }),
    ...(obj.Username && { Username: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is Credential => __isa(o, "Credential");
}

export interface DeleteAccountRequest {
  __type?: "DeleteAccountRequest";
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
}

export namespace DeleteAccountRequest {
  export const filterSensitiveLog = (obj: DeleteAccountRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteAccountRequest => __isa(o, "DeleteAccountRequest");
}

export interface DeleteAccountResponse {
  __type?: "DeleteAccountResponse";
}

export namespace DeleteAccountResponse {
  export const filterSensitiveLog = (obj: DeleteAccountResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteAccountResponse => __isa(o, "DeleteAccountResponse");
}

export interface DeleteAttendeeRequest {
  __type?: "DeleteAttendeeRequest";
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
  export const filterSensitiveLog = (obj: DeleteAttendeeRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteAttendeeRequest => __isa(o, "DeleteAttendeeRequest");
}

export interface DeleteEventsConfigurationRequest {
  __type?: "DeleteEventsConfigurationRequest";
  /**
   * <p>The bot ID.</p>
   */
  BotId: string | undefined;

  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
}

export namespace DeleteEventsConfigurationRequest {
  export const filterSensitiveLog = (obj: DeleteEventsConfigurationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteEventsConfigurationRequest => __isa(o, "DeleteEventsConfigurationRequest");
}

export interface DeleteMeetingRequest {
  __type?: "DeleteMeetingRequest";
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;
}

export namespace DeleteMeetingRequest {
  export const filterSensitiveLog = (obj: DeleteMeetingRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteMeetingRequest => __isa(o, "DeleteMeetingRequest");
}

export interface DeletePhoneNumberRequest {
  __type?: "DeletePhoneNumberRequest";
  /**
   * <p>The phone number ID.</p>
   */
  PhoneNumberId: string | undefined;
}

export namespace DeletePhoneNumberRequest {
  export const filterSensitiveLog = (obj: DeletePhoneNumberRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeletePhoneNumberRequest => __isa(o, "DeletePhoneNumberRequest");
}

export interface DeleteProxySessionRequest {
  __type?: "DeleteProxySessionRequest";
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
  export const filterSensitiveLog = (obj: DeleteProxySessionRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteProxySessionRequest => __isa(o, "DeleteProxySessionRequest");
}

export interface DeleteRoomMembershipRequest {
  __type?: "DeleteRoomMembershipRequest";
  /**
   * <p>The member ID (user ID or bot ID).</p>
   */
  MemberId: string | undefined;

  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The room ID.</p>
   */
  RoomId: string | undefined;
}

export namespace DeleteRoomMembershipRequest {
  export const filterSensitiveLog = (obj: DeleteRoomMembershipRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteRoomMembershipRequest => __isa(o, "DeleteRoomMembershipRequest");
}

export interface DeleteRoomRequest {
  __type?: "DeleteRoomRequest";
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
  export const filterSensitiveLog = (obj: DeleteRoomRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteRoomRequest => __isa(o, "DeleteRoomRequest");
}

export interface DeleteVoiceConnectorEmergencyCallingConfigurationRequest {
  __type?: "DeleteVoiceConnectorEmergencyCallingConfigurationRequest";
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

export namespace DeleteVoiceConnectorEmergencyCallingConfigurationRequest {
  export const filterSensitiveLog = (obj: DeleteVoiceConnectorEmergencyCallingConfigurationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteVoiceConnectorEmergencyCallingConfigurationRequest =>
    __isa(o, "DeleteVoiceConnectorEmergencyCallingConfigurationRequest");
}

export interface DeleteVoiceConnectorGroupRequest {
  __type?: "DeleteVoiceConnectorGroupRequest";
  /**
   * <p>The Amazon Chime Voice Connector group ID.</p>
   */
  VoiceConnectorGroupId: string | undefined;
}

export namespace DeleteVoiceConnectorGroupRequest {
  export const filterSensitiveLog = (obj: DeleteVoiceConnectorGroupRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteVoiceConnectorGroupRequest => __isa(o, "DeleteVoiceConnectorGroupRequest");
}

export interface DeleteVoiceConnectorOriginationRequest {
  __type?: "DeleteVoiceConnectorOriginationRequest";
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

export namespace DeleteVoiceConnectorOriginationRequest {
  export const filterSensitiveLog = (obj: DeleteVoiceConnectorOriginationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteVoiceConnectorOriginationRequest =>
    __isa(o, "DeleteVoiceConnectorOriginationRequest");
}

export interface DeleteVoiceConnectorProxyRequest {
  __type?: "DeleteVoiceConnectorProxyRequest";
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

export namespace DeleteVoiceConnectorProxyRequest {
  export const filterSensitiveLog = (obj: DeleteVoiceConnectorProxyRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteVoiceConnectorProxyRequest => __isa(o, "DeleteVoiceConnectorProxyRequest");
}

export interface DeleteVoiceConnectorRequest {
  __type?: "DeleteVoiceConnectorRequest";
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

export namespace DeleteVoiceConnectorRequest {
  export const filterSensitiveLog = (obj: DeleteVoiceConnectorRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteVoiceConnectorRequest => __isa(o, "DeleteVoiceConnectorRequest");
}

export interface DeleteVoiceConnectorStreamingConfigurationRequest {
  __type?: "DeleteVoiceConnectorStreamingConfigurationRequest";
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

export namespace DeleteVoiceConnectorStreamingConfigurationRequest {
  export const filterSensitiveLog = (obj: DeleteVoiceConnectorStreamingConfigurationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteVoiceConnectorStreamingConfigurationRequest =>
    __isa(o, "DeleteVoiceConnectorStreamingConfigurationRequest");
}

export interface DeleteVoiceConnectorTerminationCredentialsRequest {
  __type?: "DeleteVoiceConnectorTerminationCredentialsRequest";
  /**
   * <p>The RFC2617 compliant username associated with the SIP credentials, in US-ASCII format.</p>
   */
  Usernames: string[] | undefined;

  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

export namespace DeleteVoiceConnectorTerminationCredentialsRequest {
  export const filterSensitiveLog = (obj: DeleteVoiceConnectorTerminationCredentialsRequest): any => ({
    ...obj,
    ...(obj.Usernames && { Usernames: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is DeleteVoiceConnectorTerminationCredentialsRequest =>
    __isa(o, "DeleteVoiceConnectorTerminationCredentialsRequest");
}

export interface DeleteVoiceConnectorTerminationRequest {
  __type?: "DeleteVoiceConnectorTerminationRequest";
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

export namespace DeleteVoiceConnectorTerminationRequest {
  export const filterSensitiveLog = (obj: DeleteVoiceConnectorTerminationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteVoiceConnectorTerminationRequest =>
    __isa(o, "DeleteVoiceConnectorTerminationRequest");
}

export interface DisassociatePhoneNumberFromUserRequest {
  __type?: "DisassociatePhoneNumberFromUserRequest";
  /**
   * <p>The user ID.</p>
   */
  UserId: string | undefined;

  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
}

export namespace DisassociatePhoneNumberFromUserRequest {
  export const filterSensitiveLog = (obj: DisassociatePhoneNumberFromUserRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DisassociatePhoneNumberFromUserRequest =>
    __isa(o, "DisassociatePhoneNumberFromUserRequest");
}

export interface DisassociatePhoneNumberFromUserResponse {
  __type?: "DisassociatePhoneNumberFromUserResponse";
}

export namespace DisassociatePhoneNumberFromUserResponse {
  export const filterSensitiveLog = (obj: DisassociatePhoneNumberFromUserResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DisassociatePhoneNumberFromUserResponse =>
    __isa(o, "DisassociatePhoneNumberFromUserResponse");
}

export interface DisassociatePhoneNumbersFromVoiceConnectorGroupRequest {
  __type?: "DisassociatePhoneNumbersFromVoiceConnectorGroupRequest";
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
  export const filterSensitiveLog = (obj: DisassociatePhoneNumbersFromVoiceConnectorGroupRequest): any => ({
    ...obj,
    ...(obj.E164PhoneNumbers && { E164PhoneNumbers: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is DisassociatePhoneNumbersFromVoiceConnectorGroupRequest =>
    __isa(o, "DisassociatePhoneNumbersFromVoiceConnectorGroupRequest");
}

export interface DisassociatePhoneNumbersFromVoiceConnectorGroupResponse {
  __type?: "DisassociatePhoneNumbersFromVoiceConnectorGroupResponse";
  /**
   * <p>If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages.</p>
   */
  PhoneNumberErrors?: PhoneNumberError[];
}

export namespace DisassociatePhoneNumbersFromVoiceConnectorGroupResponse {
  export const filterSensitiveLog = (obj: DisassociatePhoneNumbersFromVoiceConnectorGroupResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DisassociatePhoneNumbersFromVoiceConnectorGroupResponse =>
    __isa(o, "DisassociatePhoneNumbersFromVoiceConnectorGroupResponse");
}

export interface DisassociatePhoneNumbersFromVoiceConnectorRequest {
  __type?: "DisassociatePhoneNumbersFromVoiceConnectorRequest";
  /**
   * <p>List of phone numbers, in E.164 format.</p>
   */
  E164PhoneNumbers: string[] | undefined;

  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

export namespace DisassociatePhoneNumbersFromVoiceConnectorRequest {
  export const filterSensitiveLog = (obj: DisassociatePhoneNumbersFromVoiceConnectorRequest): any => ({
    ...obj,
    ...(obj.E164PhoneNumbers && { E164PhoneNumbers: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is DisassociatePhoneNumbersFromVoiceConnectorRequest =>
    __isa(o, "DisassociatePhoneNumbersFromVoiceConnectorRequest");
}

export interface DisassociatePhoneNumbersFromVoiceConnectorResponse {
  __type?: "DisassociatePhoneNumbersFromVoiceConnectorResponse";
  /**
   * <p>If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages.</p>
   */
  PhoneNumberErrors?: PhoneNumberError[];
}

export namespace DisassociatePhoneNumbersFromVoiceConnectorResponse {
  export const filterSensitiveLog = (obj: DisassociatePhoneNumbersFromVoiceConnectorResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DisassociatePhoneNumbersFromVoiceConnectorResponse =>
    __isa(o, "DisassociatePhoneNumbersFromVoiceConnectorResponse");
}

export interface DisassociateSigninDelegateGroupsFromAccountRequest {
  __type?: "DisassociateSigninDelegateGroupsFromAccountRequest";
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
  export const filterSensitiveLog = (obj: DisassociateSigninDelegateGroupsFromAccountRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DisassociateSigninDelegateGroupsFromAccountRequest =>
    __isa(o, "DisassociateSigninDelegateGroupsFromAccountRequest");
}

export interface DisassociateSigninDelegateGroupsFromAccountResponse {
  __type?: "DisassociateSigninDelegateGroupsFromAccountResponse";
}

export namespace DisassociateSigninDelegateGroupsFromAccountResponse {
  export const filterSensitiveLog = (obj: DisassociateSigninDelegateGroupsFromAccountResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DisassociateSigninDelegateGroupsFromAccountResponse =>
    __isa(o, "DisassociateSigninDelegateGroupsFromAccountResponse");
}

/**
 * <p>The Dialed Number Identification Service (DNIS) emergency calling configuration details associated with an Amazon Chime Voice Connector's emergency calling configuration.</p>
 */
export interface DNISEmergencyCallingConfiguration {
  __type?: "DNISEmergencyCallingConfiguration";
  /**
   * <p>The country from which emergency calls are allowed, in ISO 3166-1 alpha-2 format.</p>
   */
  CallingCountry: string | undefined;

  /**
   * <p>The DNIS phone number to route test emergency calls to, in E.164 format.</p>
   */
  TestPhoneNumber?: string;

  /**
   * <p>The DNIS phone number to route emergency calls to, in E.164 format.</p>
   */
  EmergencyPhoneNumber: string | undefined;
}

export namespace DNISEmergencyCallingConfiguration {
  export const filterSensitiveLog = (obj: DNISEmergencyCallingConfiguration): any => ({
    ...obj,
    ...(obj.TestPhoneNumber && { TestPhoneNumber: SENSITIVE_STRING }),
    ...(obj.EmergencyPhoneNumber && { EmergencyPhoneNumber: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is DNISEmergencyCallingConfiguration => __isa(o, "DNISEmergencyCallingConfiguration");
}

export enum EmailStatus {
  Failed = "Failed",
  NotSent = "NotSent",
  Sent = "Sent",
}

/**
 * <p>The emergency calling configuration details associated with an Amazon Chime Voice Connector.</p>
 */
export interface EmergencyCallingConfiguration {
  __type?: "EmergencyCallingConfiguration";
  /**
   * <p>The Dialed Number Identification Service (DNIS) emergency calling configuration details.</p>
   */
  DNIS?: DNISEmergencyCallingConfiguration[];
}

export namespace EmergencyCallingConfiguration {
  export const filterSensitiveLog = (obj: EmergencyCallingConfiguration): any => ({
    ...obj,
    ...(obj.DNIS && { DNIS: obj.DNIS.map((item) => DNISEmergencyCallingConfiguration.filterSensitiveLog(item)) }),
  });
  export const isa = (o: any): o is EmergencyCallingConfiguration => __isa(o, "EmergencyCallingConfiguration");
}

export enum ErrorCode {
  AccessDenied = "AccessDenied",
  BadRequest = "BadRequest",
  Conflict = "Conflict",
  Forbidden = "Forbidden",
  NotFound = "NotFound",
  PhoneNumberAssociationsExist = "PhoneNumberAssociationsExist",
  PreconditionFailed = "PreconditionFailed",
  ResourceLimitExceeded = "ResourceLimitExceeded",
  ServiceFailure = "ServiceFailure",
  ServiceUnavailable = "ServiceUnavailable",
  Throttled = "Throttled",
  Unauthorized = "Unauthorized",
  Unprocessable = "Unprocessable",
  VoiceConnectorGroupAssociationsExist = "VoiceConnectorGroupAssociationsExist",
}

/**
 * <p>The configuration that allows a bot to receive outgoing events. Can be either an HTTPS endpoint or a Lambda function ARN.</p>
 */
export interface EventsConfiguration {
  __type?: "EventsConfiguration";
  /**
   * <p>Lambda function ARN that allows a bot to receive outgoing events.</p>
   */
  LambdaFunctionArn?: string;

  /**
   * <p>HTTPS endpoint that allows a bot to receive outgoing events.</p>
   */
  OutboundEventsHTTPSEndpoint?: string;

  /**
   * <p>The bot ID.</p>
   */
  BotId?: string;
}

export namespace EventsConfiguration {
  export const filterSensitiveLog = (obj: EventsConfiguration): any => ({
    ...obj,
    ...(obj.LambdaFunctionArn && { LambdaFunctionArn: SENSITIVE_STRING }),
    ...(obj.OutboundEventsHTTPSEndpoint && { OutboundEventsHTTPSEndpoint: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is EventsConfiguration => __isa(o, "EventsConfiguration");
}

/**
 * <p>The client is permanently forbidden from making the request. For example, when a user
 *         tries to create an account from an unsupported Region.</p>
 */
export interface ForbiddenException extends __SmithyException, $MetadataBearer {
  name: "ForbiddenException";
  $fault: "client";
  Message?: string;
  Code?: ErrorCode | string;
}

export namespace ForbiddenException {
  export const filterSensitiveLog = (obj: ForbiddenException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ForbiddenException => __isa(o, "ForbiddenException");
}

export enum GeoMatchLevel {
  AreaCode = "AreaCode",
  Country = "Country",
}

/**
 * <p>The country and area code for a proxy phone number in a proxy phone session.</p>
 */
export interface GeoMatchParams {
  __type?: "GeoMatchParams";
  /**
   * <p>The area code.</p>
   */
  AreaCode: string | undefined;

  /**
   * <p>The country.</p>
   */
  Country: string | undefined;
}

export namespace GeoMatchParams {
  export const filterSensitiveLog = (obj: GeoMatchParams): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GeoMatchParams => __isa(o, "GeoMatchParams");
}

export interface GetAccountRequest {
  __type?: "GetAccountRequest";
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
}

export namespace GetAccountRequest {
  export const filterSensitiveLog = (obj: GetAccountRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetAccountRequest => __isa(o, "GetAccountRequest");
}

export interface GetAccountResponse {
  __type?: "GetAccountResponse";
  /**
   * <p>The Amazon Chime account details.</p>
   */
  Account?: Account;
}

export namespace GetAccountResponse {
  export const filterSensitiveLog = (obj: GetAccountResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetAccountResponse => __isa(o, "GetAccountResponse");
}

export interface GetAccountSettingsRequest {
  __type?: "GetAccountSettingsRequest";
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
}

export namespace GetAccountSettingsRequest {
  export const filterSensitiveLog = (obj: GetAccountSettingsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetAccountSettingsRequest => __isa(o, "GetAccountSettingsRequest");
}

export interface GetAccountSettingsResponse {
  __type?: "GetAccountSettingsResponse";
  /**
   * <p>The Amazon Chime account settings.</p>
   */
  AccountSettings?: AccountSettings;
}

export namespace GetAccountSettingsResponse {
  export const filterSensitiveLog = (obj: GetAccountSettingsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetAccountSettingsResponse => __isa(o, "GetAccountSettingsResponse");
}

export interface GetAttendeeRequest {
  __type?: "GetAttendeeRequest";
  /**
   * <p>The Amazon Chime SDK attendee ID.</p>
   */
  AttendeeId: string | undefined;

  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;
}

export namespace GetAttendeeRequest {
  export const filterSensitiveLog = (obj: GetAttendeeRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetAttendeeRequest => __isa(o, "GetAttendeeRequest");
}

export interface GetAttendeeResponse {
  __type?: "GetAttendeeResponse";
  /**
   * <p>The Amazon Chime SDK attendee information.</p>
   */
  Attendee?: Attendee;
}

export namespace GetAttendeeResponse {
  export const filterSensitiveLog = (obj: GetAttendeeResponse): any => ({
    ...obj,
    ...(obj.Attendee && { Attendee: Attendee.filterSensitiveLog(obj.Attendee) }),
  });
  export const isa = (o: any): o is GetAttendeeResponse => __isa(o, "GetAttendeeResponse");
}

export interface GetBotRequest {
  __type?: "GetBotRequest";
  /**
   * <p>The bot ID.</p>
   */
  BotId: string | undefined;

  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
}

export namespace GetBotRequest {
  export const filterSensitiveLog = (obj: GetBotRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetBotRequest => __isa(o, "GetBotRequest");
}

export interface GetBotResponse {
  __type?: "GetBotResponse";
  /**
   * <p>The chat bot details.</p>
   */
  Bot?: Bot;
}

export namespace GetBotResponse {
  export const filterSensitiveLog = (obj: GetBotResponse): any => ({
    ...obj,
    ...(obj.Bot && { Bot: Bot.filterSensitiveLog(obj.Bot) }),
  });
  export const isa = (o: any): o is GetBotResponse => __isa(o, "GetBotResponse");
}

export interface GetEventsConfigurationRequest {
  __type?: "GetEventsConfigurationRequest";
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
  export const filterSensitiveLog = (obj: GetEventsConfigurationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetEventsConfigurationRequest => __isa(o, "GetEventsConfigurationRequest");
}

export interface GetEventsConfigurationResponse {
  __type?: "GetEventsConfigurationResponse";
  /**
   * <p>The events configuration details.</p>
   */
  EventsConfiguration?: EventsConfiguration;
}

export namespace GetEventsConfigurationResponse {
  export const filterSensitiveLog = (obj: GetEventsConfigurationResponse): any => ({
    ...obj,
    ...(obj.EventsConfiguration && {
      EventsConfiguration: EventsConfiguration.filterSensitiveLog(obj.EventsConfiguration),
    }),
  });
  export const isa = (o: any): o is GetEventsConfigurationResponse => __isa(o, "GetEventsConfigurationResponse");
}

export interface GetGlobalSettingsResponse {
  __type?: "GetGlobalSettingsResponse";
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
  export const filterSensitiveLog = (obj: GetGlobalSettingsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetGlobalSettingsResponse => __isa(o, "GetGlobalSettingsResponse");
}

export interface GetMeetingRequest {
  __type?: "GetMeetingRequest";
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;
}

export namespace GetMeetingRequest {
  export const filterSensitiveLog = (obj: GetMeetingRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetMeetingRequest => __isa(o, "GetMeetingRequest");
}

export interface GetMeetingResponse {
  __type?: "GetMeetingResponse";
  /**
   * <p>The Amazon Chime SDK meeting information.</p>
   */
  Meeting?: Meeting;
}

export namespace GetMeetingResponse {
  export const filterSensitiveLog = (obj: GetMeetingResponse): any => ({
    ...obj,
    ...(obj.Meeting && { Meeting: Meeting.filterSensitiveLog(obj.Meeting) }),
  });
  export const isa = (o: any): o is GetMeetingResponse => __isa(o, "GetMeetingResponse");
}

export interface GetPhoneNumberOrderRequest {
  __type?: "GetPhoneNumberOrderRequest";
  /**
   * <p>The ID for the phone number order.</p>
   */
  PhoneNumberOrderId: string | undefined;
}

export namespace GetPhoneNumberOrderRequest {
  export const filterSensitiveLog = (obj: GetPhoneNumberOrderRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetPhoneNumberOrderRequest => __isa(o, "GetPhoneNumberOrderRequest");
}

export interface GetPhoneNumberOrderResponse {
  __type?: "GetPhoneNumberOrderResponse";
  /**
   * <p>The phone number order details.</p>
   */
  PhoneNumberOrder?: PhoneNumberOrder;
}

export namespace GetPhoneNumberOrderResponse {
  export const filterSensitiveLog = (obj: GetPhoneNumberOrderResponse): any => ({
    ...obj,
    ...(obj.PhoneNumberOrder && { PhoneNumberOrder: PhoneNumberOrder.filterSensitiveLog(obj.PhoneNumberOrder) }),
  });
  export const isa = (o: any): o is GetPhoneNumberOrderResponse => __isa(o, "GetPhoneNumberOrderResponse");
}

export interface GetPhoneNumberRequest {
  __type?: "GetPhoneNumberRequest";
  /**
   * <p>The phone number ID.</p>
   */
  PhoneNumberId: string | undefined;
}

export namespace GetPhoneNumberRequest {
  export const filterSensitiveLog = (obj: GetPhoneNumberRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetPhoneNumberRequest => __isa(o, "GetPhoneNumberRequest");
}

export interface GetPhoneNumberResponse {
  __type?: "GetPhoneNumberResponse";
  /**
   * <p>The phone number details.</p>
   */
  PhoneNumber?: PhoneNumber;
}

export namespace GetPhoneNumberResponse {
  export const filterSensitiveLog = (obj: GetPhoneNumberResponse): any => ({
    ...obj,
    ...(obj.PhoneNumber && { PhoneNumber: PhoneNumber.filterSensitiveLog(obj.PhoneNumber) }),
  });
  export const isa = (o: any): o is GetPhoneNumberResponse => __isa(o, "GetPhoneNumberResponse");
}

export interface GetPhoneNumberSettingsResponse {
  __type?: "GetPhoneNumberSettingsResponse";
  /**
   * <p>The updated outbound calling name timestamp, in ISO 8601 format.</p>
   */
  CallingNameUpdatedTimestamp?: Date;

  /**
   * <p>The default outbound calling name for the account.</p>
   */
  CallingName?: string;
}

export namespace GetPhoneNumberSettingsResponse {
  export const filterSensitiveLog = (obj: GetPhoneNumberSettingsResponse): any => ({
    ...obj,
    ...(obj.CallingName && { CallingName: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is GetPhoneNumberSettingsResponse => __isa(o, "GetPhoneNumberSettingsResponse");
}

export interface GetProxySessionRequest {
  __type?: "GetProxySessionRequest";
  /**
   * <p>The proxy session ID.</p>
   */
  ProxySessionId: string | undefined;

  /**
   * <p>The Amazon Chime voice connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

export namespace GetProxySessionRequest {
  export const filterSensitiveLog = (obj: GetProxySessionRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetProxySessionRequest => __isa(o, "GetProxySessionRequest");
}

export interface GetProxySessionResponse {
  __type?: "GetProxySessionResponse";
  /**
   * <p>The proxy session details.</p>
   */
  ProxySession?: ProxySession;
}

export namespace GetProxySessionResponse {
  export const filterSensitiveLog = (obj: GetProxySessionResponse): any => ({
    ...obj,
    ...(obj.ProxySession && { ProxySession: ProxySession.filterSensitiveLog(obj.ProxySession) }),
  });
  export const isa = (o: any): o is GetProxySessionResponse => __isa(o, "GetProxySessionResponse");
}

export interface GetRetentionSettingsRequest {
  __type?: "GetRetentionSettingsRequest";
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
}

export namespace GetRetentionSettingsRequest {
  export const filterSensitiveLog = (obj: GetRetentionSettingsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetRetentionSettingsRequest => __isa(o, "GetRetentionSettingsRequest");
}

export interface GetRetentionSettingsResponse {
  __type?: "GetRetentionSettingsResponse";
  /**
   * <p>The timestamp representing the time at which the specified items are permanently deleted, in ISO 8601 format.</p>
   */
  InitiateDeletionTimestamp?: Date;

  /**
   * <p>The retention settings.</p>
   */
  RetentionSettings?: RetentionSettings;
}

export namespace GetRetentionSettingsResponse {
  export const filterSensitiveLog = (obj: GetRetentionSettingsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetRetentionSettingsResponse => __isa(o, "GetRetentionSettingsResponse");
}

export interface GetRoomRequest {
  __type?: "GetRoomRequest";
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
  export const filterSensitiveLog = (obj: GetRoomRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetRoomRequest => __isa(o, "GetRoomRequest");
}

export interface GetRoomResponse {
  __type?: "GetRoomResponse";
  /**
   * <p>The room details.</p>
   */
  Room?: Room;
}

export namespace GetRoomResponse {
  export const filterSensitiveLog = (obj: GetRoomResponse): any => ({
    ...obj,
    ...(obj.Room && { Room: Room.filterSensitiveLog(obj.Room) }),
  });
  export const isa = (o: any): o is GetRoomResponse => __isa(o, "GetRoomResponse");
}

export interface GetUserRequest {
  __type?: "GetUserRequest";
  /**
   * <p>The user ID.</p>
   */
  UserId: string | undefined;

  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
}

export namespace GetUserRequest {
  export const filterSensitiveLog = (obj: GetUserRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetUserRequest => __isa(o, "GetUserRequest");
}

export interface GetUserResponse {
  __type?: "GetUserResponse";
  /**
   * <p>The user details.</p>
   */
  User?: User;
}

export namespace GetUserResponse {
  export const filterSensitiveLog = (obj: GetUserResponse): any => ({
    ...obj,
    ...(obj.User && { User: User.filterSensitiveLog(obj.User) }),
  });
  export const isa = (o: any): o is GetUserResponse => __isa(o, "GetUserResponse");
}

export interface GetUserSettingsRequest {
  __type?: "GetUserSettingsRequest";
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
  export const filterSensitiveLog = (obj: GetUserSettingsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetUserSettingsRequest => __isa(o, "GetUserSettingsRequest");
}

export interface GetUserSettingsResponse {
  __type?: "GetUserSettingsResponse";
  /**
   * <p>The user settings.</p>
   */
  UserSettings?: UserSettings;
}

export namespace GetUserSettingsResponse {
  export const filterSensitiveLog = (obj: GetUserSettingsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetUserSettingsResponse => __isa(o, "GetUserSettingsResponse");
}

export interface GetVoiceConnectorEmergencyCallingConfigurationRequest {
  __type?: "GetVoiceConnectorEmergencyCallingConfigurationRequest";
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

export namespace GetVoiceConnectorEmergencyCallingConfigurationRequest {
  export const filterSensitiveLog = (obj: GetVoiceConnectorEmergencyCallingConfigurationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetVoiceConnectorEmergencyCallingConfigurationRequest =>
    __isa(o, "GetVoiceConnectorEmergencyCallingConfigurationRequest");
}

export interface GetVoiceConnectorEmergencyCallingConfigurationResponse {
  __type?: "GetVoiceConnectorEmergencyCallingConfigurationResponse";
  /**
   * <p>The emergency calling configuration details.</p>
   */
  EmergencyCallingConfiguration?: EmergencyCallingConfiguration;
}

export namespace GetVoiceConnectorEmergencyCallingConfigurationResponse {
  export const filterSensitiveLog = (obj: GetVoiceConnectorEmergencyCallingConfigurationResponse): any => ({
    ...obj,
    ...(obj.EmergencyCallingConfiguration && {
      EmergencyCallingConfiguration: EmergencyCallingConfiguration.filterSensitiveLog(
        obj.EmergencyCallingConfiguration
      ),
    }),
  });
  export const isa = (o: any): o is GetVoiceConnectorEmergencyCallingConfigurationResponse =>
    __isa(o, "GetVoiceConnectorEmergencyCallingConfigurationResponse");
}

export interface GetVoiceConnectorGroupRequest {
  __type?: "GetVoiceConnectorGroupRequest";
  /**
   * <p>The Amazon Chime Voice Connector group ID.</p>
   */
  VoiceConnectorGroupId: string | undefined;
}

export namespace GetVoiceConnectorGroupRequest {
  export const filterSensitiveLog = (obj: GetVoiceConnectorGroupRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetVoiceConnectorGroupRequest => __isa(o, "GetVoiceConnectorGroupRequest");
}

export interface GetVoiceConnectorGroupResponse {
  __type?: "GetVoiceConnectorGroupResponse";
  /**
   * <p>The Amazon Chime Voice Connector group details.</p>
   */
  VoiceConnectorGroup?: VoiceConnectorGroup;
}

export namespace GetVoiceConnectorGroupResponse {
  export const filterSensitiveLog = (obj: GetVoiceConnectorGroupResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetVoiceConnectorGroupResponse => __isa(o, "GetVoiceConnectorGroupResponse");
}

export interface GetVoiceConnectorLoggingConfigurationRequest {
  __type?: "GetVoiceConnectorLoggingConfigurationRequest";
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

export namespace GetVoiceConnectorLoggingConfigurationRequest {
  export const filterSensitiveLog = (obj: GetVoiceConnectorLoggingConfigurationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetVoiceConnectorLoggingConfigurationRequest =>
    __isa(o, "GetVoiceConnectorLoggingConfigurationRequest");
}

export interface GetVoiceConnectorLoggingConfigurationResponse {
  __type?: "GetVoiceConnectorLoggingConfigurationResponse";
  /**
   * <p>The logging configuration details.</p>
   */
  LoggingConfiguration?: LoggingConfiguration;
}

export namespace GetVoiceConnectorLoggingConfigurationResponse {
  export const filterSensitiveLog = (obj: GetVoiceConnectorLoggingConfigurationResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetVoiceConnectorLoggingConfigurationResponse =>
    __isa(o, "GetVoiceConnectorLoggingConfigurationResponse");
}

export interface GetVoiceConnectorOriginationRequest {
  __type?: "GetVoiceConnectorOriginationRequest";
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

export namespace GetVoiceConnectorOriginationRequest {
  export const filterSensitiveLog = (obj: GetVoiceConnectorOriginationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetVoiceConnectorOriginationRequest =>
    __isa(o, "GetVoiceConnectorOriginationRequest");
}

export interface GetVoiceConnectorOriginationResponse {
  __type?: "GetVoiceConnectorOriginationResponse";
  /**
   * <p>The origination setting details.</p>
   */
  Origination?: Origination;
}

export namespace GetVoiceConnectorOriginationResponse {
  export const filterSensitiveLog = (obj: GetVoiceConnectorOriginationResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetVoiceConnectorOriginationResponse =>
    __isa(o, "GetVoiceConnectorOriginationResponse");
}

export interface GetVoiceConnectorProxyRequest {
  __type?: "GetVoiceConnectorProxyRequest";
  /**
   * <p>The Amazon Chime voice connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

export namespace GetVoiceConnectorProxyRequest {
  export const filterSensitiveLog = (obj: GetVoiceConnectorProxyRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetVoiceConnectorProxyRequest => __isa(o, "GetVoiceConnectorProxyRequest");
}

export interface GetVoiceConnectorProxyResponse {
  __type?: "GetVoiceConnectorProxyResponse";
  /**
   * <p>The proxy configuration details.</p>
   */
  Proxy?: Proxy;
}

export namespace GetVoiceConnectorProxyResponse {
  export const filterSensitiveLog = (obj: GetVoiceConnectorProxyResponse): any => ({
    ...obj,
    ...(obj.Proxy && { Proxy: Proxy.filterSensitiveLog(obj.Proxy) }),
  });
  export const isa = (o: any): o is GetVoiceConnectorProxyResponse => __isa(o, "GetVoiceConnectorProxyResponse");
}

export interface GetVoiceConnectorRequest {
  __type?: "GetVoiceConnectorRequest";
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

export namespace GetVoiceConnectorRequest {
  export const filterSensitiveLog = (obj: GetVoiceConnectorRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetVoiceConnectorRequest => __isa(o, "GetVoiceConnectorRequest");
}

export interface GetVoiceConnectorResponse {
  __type?: "GetVoiceConnectorResponse";
  /**
   * <p>The Amazon Chime Voice Connector details.</p>
   */
  VoiceConnector?: VoiceConnector;
}

export namespace GetVoiceConnectorResponse {
  export const filterSensitiveLog = (obj: GetVoiceConnectorResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetVoiceConnectorResponse => __isa(o, "GetVoiceConnectorResponse");
}

export interface GetVoiceConnectorStreamingConfigurationRequest {
  __type?: "GetVoiceConnectorStreamingConfigurationRequest";
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

export namespace GetVoiceConnectorStreamingConfigurationRequest {
  export const filterSensitiveLog = (obj: GetVoiceConnectorStreamingConfigurationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetVoiceConnectorStreamingConfigurationRequest =>
    __isa(o, "GetVoiceConnectorStreamingConfigurationRequest");
}

export interface GetVoiceConnectorStreamingConfigurationResponse {
  __type?: "GetVoiceConnectorStreamingConfigurationResponse";
  /**
   * <p>The streaming configuration details.</p>
   */
  StreamingConfiguration?: StreamingConfiguration;
}

export namespace GetVoiceConnectorStreamingConfigurationResponse {
  export const filterSensitiveLog = (obj: GetVoiceConnectorStreamingConfigurationResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetVoiceConnectorStreamingConfigurationResponse =>
    __isa(o, "GetVoiceConnectorStreamingConfigurationResponse");
}

export interface GetVoiceConnectorTerminationHealthRequest {
  __type?: "GetVoiceConnectorTerminationHealthRequest";
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

export namespace GetVoiceConnectorTerminationHealthRequest {
  export const filterSensitiveLog = (obj: GetVoiceConnectorTerminationHealthRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetVoiceConnectorTerminationHealthRequest =>
    __isa(o, "GetVoiceConnectorTerminationHealthRequest");
}

export interface GetVoiceConnectorTerminationHealthResponse {
  __type?: "GetVoiceConnectorTerminationHealthResponse";
  /**
   * <p>The termination health details.</p>
   */
  TerminationHealth?: TerminationHealth;
}

export namespace GetVoiceConnectorTerminationHealthResponse {
  export const filterSensitiveLog = (obj: GetVoiceConnectorTerminationHealthResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetVoiceConnectorTerminationHealthResponse =>
    __isa(o, "GetVoiceConnectorTerminationHealthResponse");
}

export interface GetVoiceConnectorTerminationRequest {
  __type?: "GetVoiceConnectorTerminationRequest";
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

export namespace GetVoiceConnectorTerminationRequest {
  export const filterSensitiveLog = (obj: GetVoiceConnectorTerminationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetVoiceConnectorTerminationRequest =>
    __isa(o, "GetVoiceConnectorTerminationRequest");
}

export interface GetVoiceConnectorTerminationResponse {
  __type?: "GetVoiceConnectorTerminationResponse";
  /**
   * <p>The termination setting details.</p>
   */
  Termination?: Termination;
}

export namespace GetVoiceConnectorTerminationResponse {
  export const filterSensitiveLog = (obj: GetVoiceConnectorTerminationResponse): any => ({
    ...obj,
    ...(obj.Termination && { Termination: Termination.filterSensitiveLog(obj.Termination) }),
  });
  export const isa = (o: any): o is GetVoiceConnectorTerminationResponse =>
    __isa(o, "GetVoiceConnectorTerminationResponse");
}

/**
 * <p>Invitation object returned after emailing users to invite them to join the
 *         Amazon Chime <code>Team</code> account.</p>
 */
export interface Invite {
  __type?: "Invite";
  /**
   * <p>The status of the invite email.</p>
   */
  EmailStatus?: EmailStatus | string;

  /**
   * <p>The status of the invite.</p>
   */
  Status?: InviteStatus | string;

  /**
   * <p>The invite ID.</p>
   */
  InviteId?: string;

  /**
   * <p>The email address to which the invite is sent.</p>
   */
  EmailAddress?: string;
}

export namespace Invite {
  export const filterSensitiveLog = (obj: Invite): any => ({
    ...obj,
    ...(obj.EmailAddress && { EmailAddress: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is Invite => __isa(o, "Invite");
}

export enum InviteStatus {
  Accepted = "Accepted",
  Failed = "Failed",
  Pending = "Pending",
}

export interface InviteUsersRequest {
  __type?: "InviteUsersRequest";
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The user type.</p>
   */
  UserType?: UserType | string;

  /**
   * <p>The user email addresses to which to send the email invitation.</p>
   */
  UserEmailList: string[] | undefined;
}

export namespace InviteUsersRequest {
  export const filterSensitiveLog = (obj: InviteUsersRequest): any => ({
    ...obj,
    ...(obj.UserEmailList && { UserEmailList: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is InviteUsersRequest => __isa(o, "InviteUsersRequest");
}

export interface InviteUsersResponse {
  __type?: "InviteUsersResponse";
  /**
   * <p>The email invitation details.</p>
   */
  Invites?: Invite[];
}

export namespace InviteUsersResponse {
  export const filterSensitiveLog = (obj: InviteUsersResponse): any => ({
    ...obj,
    ...(obj.Invites && { Invites: obj.Invites.map((item) => Invite.filterSensitiveLog(item)) }),
  });
  export const isa = (o: any): o is InviteUsersResponse => __isa(o, "InviteUsersResponse");
}

export enum License {
  Basic = "Basic",
  Plus = "Plus",
  Pro = "Pro",
  ProTrial = "ProTrial",
}

export interface ListAccountsRequest {
  __type?: "ListAccountsRequest";
  /**
   * <p>User email address with which to filter results.</p>
   */
  UserEmail?: string;

  /**
   * <p>Amazon Chime account name prefix with which to filter results.</p>
   */
  Name?: string;

  /**
   * <p>The maximum number of results to return in a single call. Defaults to 100.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

export namespace ListAccountsRequest {
  export const filterSensitiveLog = (obj: ListAccountsRequest): any => ({
    ...obj,
    ...(obj.UserEmail && { UserEmail: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is ListAccountsRequest => __isa(o, "ListAccountsRequest");
}

export interface ListAccountsResponse {
  __type?: "ListAccountsResponse";
  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>List of Amazon Chime accounts and account details.</p>
   */
  Accounts?: Account[];
}

export namespace ListAccountsResponse {
  export const filterSensitiveLog = (obj: ListAccountsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListAccountsResponse => __isa(o, "ListAccountsResponse");
}

export interface ListAttendeesRequest {
  __type?: "ListAttendeesRequest";
  /**
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

export namespace ListAttendeesRequest {
  export const filterSensitiveLog = (obj: ListAttendeesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListAttendeesRequest => __isa(o, "ListAttendeesRequest");
}

export interface ListAttendeesResponse {
  __type?: "ListAttendeesResponse";
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
  export const filterSensitiveLog = (obj: ListAttendeesResponse): any => ({
    ...obj,
    ...(obj.Attendees && { Attendees: obj.Attendees.map((item) => Attendee.filterSensitiveLog(item)) }),
  });
  export const isa = (o: any): o is ListAttendeesResponse => __isa(o, "ListAttendeesResponse");
}

export interface ListAttendeeTagsRequest {
  __type?: "ListAttendeeTagsRequest";
  /**
   * <p>The Amazon Chime SDK attendee ID.</p>
   */
  AttendeeId: string | undefined;

  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;
}

export namespace ListAttendeeTagsRequest {
  export const filterSensitiveLog = (obj: ListAttendeeTagsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListAttendeeTagsRequest => __isa(o, "ListAttendeeTagsRequest");
}

export interface ListAttendeeTagsResponse {
  __type?: "ListAttendeeTagsResponse";
  /**
   * <p>A list of tag key-value pairs.</p>
   */
  Tags?: Tag[];
}

export namespace ListAttendeeTagsResponse {
  export const filterSensitiveLog = (obj: ListAttendeeTagsResponse): any => ({
    ...obj,
    ...(obj.Tags && { Tags: obj.Tags.map((item) => Tag.filterSensitiveLog(item)) }),
  });
  export const isa = (o: any): o is ListAttendeeTagsResponse => __isa(o, "ListAttendeeTagsResponse");
}

export interface ListBotsRequest {
  __type?: "ListBotsRequest";
  /**
   * <p>The maximum number of results to return in a single call. The default is 10.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
}

export namespace ListBotsRequest {
  export const filterSensitiveLog = (obj: ListBotsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListBotsRequest => __isa(o, "ListBotsRequest");
}

export interface ListBotsResponse {
  __type?: "ListBotsResponse";
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
  export const filterSensitiveLog = (obj: ListBotsResponse): any => ({
    ...obj,
    ...(obj.Bots && { Bots: obj.Bots.map((item) => Bot.filterSensitiveLog(item)) }),
  });
  export const isa = (o: any): o is ListBotsResponse => __isa(o, "ListBotsResponse");
}

export interface ListMeetingsRequest {
  __type?: "ListMeetingsRequest";
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
  export const filterSensitiveLog = (obj: ListMeetingsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListMeetingsRequest => __isa(o, "ListMeetingsRequest");
}

export interface ListMeetingsResponse {
  __type?: "ListMeetingsResponse";
  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The Amazon Chime SDK meeting information.</p>
   */
  Meetings?: Meeting[];
}

export namespace ListMeetingsResponse {
  export const filterSensitiveLog = (obj: ListMeetingsResponse): any => ({
    ...obj,
    ...(obj.Meetings && { Meetings: obj.Meetings.map((item) => Meeting.filterSensitiveLog(item)) }),
  });
  export const isa = (o: any): o is ListMeetingsResponse => __isa(o, "ListMeetingsResponse");
}

export interface ListMeetingTagsRequest {
  __type?: "ListMeetingTagsRequest";
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;
}

export namespace ListMeetingTagsRequest {
  export const filterSensitiveLog = (obj: ListMeetingTagsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListMeetingTagsRequest => __isa(o, "ListMeetingTagsRequest");
}

export interface ListMeetingTagsResponse {
  __type?: "ListMeetingTagsResponse";
  /**
   * <p>A list of tag key-value pairs.</p>
   */
  Tags?: Tag[];
}

export namespace ListMeetingTagsResponse {
  export const filterSensitiveLog = (obj: ListMeetingTagsResponse): any => ({
    ...obj,
    ...(obj.Tags && { Tags: obj.Tags.map((item) => Tag.filterSensitiveLog(item)) }),
  });
  export const isa = (o: any): o is ListMeetingTagsResponse => __isa(o, "ListMeetingTagsResponse");
}

export interface ListPhoneNumberOrdersRequest {
  __type?: "ListPhoneNumberOrdersRequest";
  /**
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

export namespace ListPhoneNumberOrdersRequest {
  export const filterSensitiveLog = (obj: ListPhoneNumberOrdersRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListPhoneNumberOrdersRequest => __isa(o, "ListPhoneNumberOrdersRequest");
}

export interface ListPhoneNumberOrdersResponse {
  __type?: "ListPhoneNumberOrdersResponse";
  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The phone number order details.</p>
   */
  PhoneNumberOrders?: PhoneNumberOrder[];
}

export namespace ListPhoneNumberOrdersResponse {
  export const filterSensitiveLog = (obj: ListPhoneNumberOrdersResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListPhoneNumberOrdersResponse => __isa(o, "ListPhoneNumberOrdersResponse");
}

export interface ListPhoneNumbersRequest {
  __type?: "ListPhoneNumbersRequest";
  /**
   * <p>The value to use for the filter.</p>
   */
  FilterValue?: string;

  /**
   * <p>The filter to use to limit the number of results.</p>
   */
  FilterName?: PhoneNumberAssociationName | string;

  /**
   * <p>The phone number product type.</p>
   */
  ProductType?: PhoneNumberProductType | string;

  /**
   * <p>The phone number status.</p>
   */
  Status?: PhoneNumberStatus | string;

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
  export const filterSensitiveLog = (obj: ListPhoneNumbersRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListPhoneNumbersRequest => __isa(o, "ListPhoneNumbersRequest");
}

export interface ListPhoneNumbersResponse {
  __type?: "ListPhoneNumbersResponse";
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
  export const filterSensitiveLog = (obj: ListPhoneNumbersResponse): any => ({
    ...obj,
    ...(obj.PhoneNumbers && { PhoneNumbers: obj.PhoneNumbers.map((item) => PhoneNumber.filterSensitiveLog(item)) }),
  });
  export const isa = (o: any): o is ListPhoneNumbersResponse => __isa(o, "ListPhoneNumbersResponse");
}

export interface ListProxySessionsRequest {
  __type?: "ListProxySessionsRequest";
  /**
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The proxy session status.</p>
   */
  Status?: ProxySessionStatus | string;

  /**
   * <p>The Amazon Chime voice connector ID.</p>
   */
  VoiceConnectorId: string | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

export namespace ListProxySessionsRequest {
  export const filterSensitiveLog = (obj: ListProxySessionsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListProxySessionsRequest => __isa(o, "ListProxySessionsRequest");
}

export interface ListProxySessionsResponse {
  __type?: "ListProxySessionsResponse";
  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The proxy session details.</p>
   */
  ProxySessions?: ProxySession[];
}

export namespace ListProxySessionsResponse {
  export const filterSensitiveLog = (obj: ListProxySessionsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListProxySessionsResponse => __isa(o, "ListProxySessionsResponse");
}

export interface ListRoomMembershipsRequest {
  __type?: "ListRoomMembershipsRequest";
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The room ID.</p>
   */
  RoomId: string | undefined;
}

export namespace ListRoomMembershipsRequest {
  export const filterSensitiveLog = (obj: ListRoomMembershipsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListRoomMembershipsRequest => __isa(o, "ListRoomMembershipsRequest");
}

export interface ListRoomMembershipsResponse {
  __type?: "ListRoomMembershipsResponse";
  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The room membership details.</p>
   */
  RoomMemberships?: RoomMembership[];
}

export namespace ListRoomMembershipsResponse {
  export const filterSensitiveLog = (obj: ListRoomMembershipsResponse): any => ({
    ...obj,
    ...(obj.RoomMemberships && {
      RoomMemberships: obj.RoomMemberships.map((item) => RoomMembership.filterSensitiveLog(item)),
    }),
  });
  export const isa = (o: any): o is ListRoomMembershipsResponse => __isa(o, "ListRoomMembershipsResponse");
}

export interface ListRoomsRequest {
  __type?: "ListRoomsRequest";
  /**
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The member ID (user ID or bot ID).</p>
   */
  MemberId?: string;
}

export namespace ListRoomsRequest {
  export const filterSensitiveLog = (obj: ListRoomsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListRoomsRequest => __isa(o, "ListRoomsRequest");
}

export interface ListRoomsResponse {
  __type?: "ListRoomsResponse";
  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The room details.</p>
   */
  Rooms?: Room[];
}

export namespace ListRoomsResponse {
  export const filterSensitiveLog = (obj: ListRoomsResponse): any => ({
    ...obj,
    ...(obj.Rooms && { Rooms: obj.Rooms.map((item) => Room.filterSensitiveLog(item)) }),
  });
  export const isa = (o: any): o is ListRoomsResponse => __isa(o, "ListRoomsResponse");
}

export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  /**
   * <p>The resource ARN.</p>
   */
  ResourceARN: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
    ...(obj.ResourceARN && { ResourceARN: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is ListTagsForResourceRequest => __isa(o, "ListTagsForResourceRequest");
}

export interface ListTagsForResourceResponse {
  __type?: "ListTagsForResourceResponse";
  /**
   * <p>A list of tag-key value pairs.</p>
   */
  Tags?: Tag[];
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
    ...(obj.Tags && { Tags: obj.Tags.map((item) => Tag.filterSensitiveLog(item)) }),
  });
  export const isa = (o: any): o is ListTagsForResourceResponse => __isa(o, "ListTagsForResourceResponse");
}

export interface ListUsersRequest {
  __type?: "ListUsersRequest";
  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Optional. The user email address used to filter results. Maximum 1.</p>
   */
  UserEmail?: string;

  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The user type.</p>
   */
  UserType?: UserType | string;

  /**
   * <p>The maximum number of results to return in a single call. Defaults to 100.</p>
   */
  MaxResults?: number;
}

export namespace ListUsersRequest {
  export const filterSensitiveLog = (obj: ListUsersRequest): any => ({
    ...obj,
    ...(obj.UserEmail && { UserEmail: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is ListUsersRequest => __isa(o, "ListUsersRequest");
}

export interface ListUsersResponse {
  __type?: "ListUsersResponse";
  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>List of users and user details.</p>
   */
  Users?: User[];
}

export namespace ListUsersResponse {
  export const filterSensitiveLog = (obj: ListUsersResponse): any => ({
    ...obj,
    ...(obj.Users && { Users: obj.Users.map((item) => User.filterSensitiveLog(item)) }),
  });
  export const isa = (o: any): o is ListUsersResponse => __isa(o, "ListUsersResponse");
}

export interface ListVoiceConnectorGroupsRequest {
  __type?: "ListVoiceConnectorGroupsRequest";
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
  export const filterSensitiveLog = (obj: ListVoiceConnectorGroupsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListVoiceConnectorGroupsRequest => __isa(o, "ListVoiceConnectorGroupsRequest");
}

export interface ListVoiceConnectorGroupsResponse {
  __type?: "ListVoiceConnectorGroupsResponse";
  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The details of the Amazon Chime Voice Connector groups.</p>
   */
  VoiceConnectorGroups?: VoiceConnectorGroup[];
}

export namespace ListVoiceConnectorGroupsResponse {
  export const filterSensitiveLog = (obj: ListVoiceConnectorGroupsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListVoiceConnectorGroupsResponse => __isa(o, "ListVoiceConnectorGroupsResponse");
}

export interface ListVoiceConnectorsRequest {
  __type?: "ListVoiceConnectorsRequest";
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
  export const filterSensitiveLog = (obj: ListVoiceConnectorsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListVoiceConnectorsRequest => __isa(o, "ListVoiceConnectorsRequest");
}

export interface ListVoiceConnectorsResponse {
  __type?: "ListVoiceConnectorsResponse";
  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The details of the Amazon Chime Voice Connectors.</p>
   */
  VoiceConnectors?: VoiceConnector[];
}

export namespace ListVoiceConnectorsResponse {
  export const filterSensitiveLog = (obj: ListVoiceConnectorsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListVoiceConnectorsResponse => __isa(o, "ListVoiceConnectorsResponse");
}

export interface ListVoiceConnectorTerminationCredentialsRequest {
  __type?: "ListVoiceConnectorTerminationCredentialsRequest";
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

export namespace ListVoiceConnectorTerminationCredentialsRequest {
  export const filterSensitiveLog = (obj: ListVoiceConnectorTerminationCredentialsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListVoiceConnectorTerminationCredentialsRequest =>
    __isa(o, "ListVoiceConnectorTerminationCredentialsRequest");
}

export interface ListVoiceConnectorTerminationCredentialsResponse {
  __type?: "ListVoiceConnectorTerminationCredentialsResponse";
  /**
   * <p>A list of user names.</p>
   */
  Usernames?: string[];
}

export namespace ListVoiceConnectorTerminationCredentialsResponse {
  export const filterSensitiveLog = (obj: ListVoiceConnectorTerminationCredentialsResponse): any => ({
    ...obj,
    ...(obj.Usernames && { Usernames: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is ListVoiceConnectorTerminationCredentialsResponse =>
    __isa(o, "ListVoiceConnectorTerminationCredentialsResponse");
}

/**
 * <p>The logging configuration associated with an Amazon Chime Voice Connector. Specifies whether SIP message logs are enabled for sending to Amazon CloudWatch Logs.</p>
 */
export interface LoggingConfiguration {
  __type?: "LoggingConfiguration";
  /**
   * <p>When true, enables SIP message logs for sending to Amazon CloudWatch Logs.</p>
   */
  EnableSIPLogs?: boolean;
}

export namespace LoggingConfiguration {
  export const filterSensitiveLog = (obj: LoggingConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is LoggingConfiguration => __isa(o, "LoggingConfiguration");
}

export interface LogoutUserRequest {
  __type?: "LogoutUserRequest";
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
  export const filterSensitiveLog = (obj: LogoutUserRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is LogoutUserRequest => __isa(o, "LogoutUserRequest");
}

export interface LogoutUserResponse {
  __type?: "LogoutUserResponse";
}

export namespace LogoutUserResponse {
  export const filterSensitiveLog = (obj: LogoutUserResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is LogoutUserResponse => __isa(o, "LogoutUserResponse");
}

/**
 * <p>A set of endpoints used by clients to connect to the media service group for a Amazon Chime SDK meeting.</p>
 */
export interface MediaPlacement {
  __type?: "MediaPlacement";
  /**
   * <p>The screen viewing URL.</p>
   */
  ScreenViewingUrl?: string;

  /**
   * <p>The audio fallback URL.</p>
   */
  AudioFallbackUrl?: string;

  /**
   * <p>The turn control URL.</p>
   */
  TurnControlUrl?: string;

  /**
   * <p>The screen data URL.</p>
   */
  ScreenDataUrl?: string;

  /**
   * <p>The screen sharing URL.</p>
   */
  ScreenSharingUrl?: string;

  /**
   * <p>The audio host URL.</p>
   */
  AudioHostUrl?: string;

  /**
   * <p>The signaling URL.</p>
   */
  SignalingUrl?: string;
}

export namespace MediaPlacement {
  export const filterSensitiveLog = (obj: MediaPlacement): any => ({
    ...obj,
  });
  export const isa = (o: any): o is MediaPlacement => __isa(o, "MediaPlacement");
}

/**
 * <p>A meeting created using the Amazon Chime SDK.</p>
 */
export interface Meeting {
  __type?: "Meeting";
  /**
   * <p>The external meeting ID.</p>
   */
  ExternalMeetingId?: string;

  /**
   * <p>The media placement for the meeting.</p>
   */
  MediaPlacement?: MediaPlacement;

  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId?: string;

  /**
   * <p>The Region in which to create the meeting. Available values: <code>ap-northeast-1</code>, <code>ap-southeast-1</code>, <code>ap-southeast-2</code>, <code>ca-central-1</code>, <code>eu-central-1</code>, <code>eu-north-1</code>, <code>eu-west-1</code>, <code>eu-west-2</code>, <code>eu-west-3</code>, <code>sa-east-1</code>, <code>us-east-1</code>, <code>us-east-2</code>, <code>us-west-1</code>, <code>us-west-2</code>.</p>
   */
  MediaRegion?: string;
}

export namespace Meeting {
  export const filterSensitiveLog = (obj: Meeting): any => ({
    ...obj,
    ...(obj.ExternalMeetingId && { ExternalMeetingId: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is Meeting => __isa(o, "Meeting");
}

/**
 * <p>The configuration for resource targets to receive notifications when Amazon Chime SDK meeting and attendee events occur. The Amazon Chime SDK supports resource targets located in the US East (N. Virginia) AWS Region (<code>us-east-1</code>).</p>
 */
export interface MeetingNotificationConfiguration {
  __type?: "MeetingNotificationConfiguration";
  /**
   * <p>The SQS queue ARN.</p>
   */
  SqsQueueArn?: string;

  /**
   * <p>The SNS topic ARN.</p>
   */
  SnsTopicArn?: string;
}

export namespace MeetingNotificationConfiguration {
  export const filterSensitiveLog = (obj: MeetingNotificationConfiguration): any => ({
    ...obj,
    ...(obj.SqsQueueArn && { SqsQueueArn: SENSITIVE_STRING }),
    ...(obj.SnsTopicArn && { SnsTopicArn: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is MeetingNotificationConfiguration => __isa(o, "MeetingNotificationConfiguration");
}

/**
 * <p>The member details, such as email address, name, member ID, and member type.</p>
 */
export interface Member {
  __type?: "Member";
  /**
   * <p>The member email address.</p>
   */
  Email?: string;

  /**
   * <p>The member ID (user ID or bot ID).</p>
   */
  MemberId?: string;

  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId?: string;

  /**
   * <p>The member name.</p>
   */
  FullName?: string;

  /**
   * <p>The member type.</p>
   */
  MemberType?: MemberType | string;
}

export namespace Member {
  export const filterSensitiveLog = (obj: Member): any => ({
    ...obj,
    ...(obj.Email && { Email: SENSITIVE_STRING }),
    ...(obj.FullName && { FullName: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is Member => __isa(o, "Member");
}

/**
 * <p>The list of errors returned when a member action results in an error.</p>
 */
export interface MemberError {
  __type?: "MemberError";
  /**
   * <p>The error code.</p>
   */
  ErrorCode?: ErrorCode | string;

  /**
   * <p>The member ID.</p>
   */
  MemberId?: string;

  /**
   * <p>The error message.</p>
   */
  ErrorMessage?: string;
}

export namespace MemberError {
  export const filterSensitiveLog = (obj: MemberError): any => ({
    ...obj,
  });
  export const isa = (o: any): o is MemberError => __isa(o, "MemberError");
}

/**
 * <p>Membership details, such as member ID and member role.</p>
 */
export interface MembershipItem {
  __type?: "MembershipItem";
  /**
   * <p>The member ID.</p>
   */
  MemberId?: string;

  /**
   * <p>The member role.</p>
   */
  Role?: RoomMembershipRole | string;
}

export namespace MembershipItem {
  export const filterSensitiveLog = (obj: MembershipItem): any => ({
    ...obj,
  });
  export const isa = (o: any): o is MembershipItem => __isa(o, "MembershipItem");
}

export enum MemberType {
  Bot = "Bot",
  User = "User",
  Webhook = "Webhook",
}

/**
 * <p>One or more of the resources in the request does not exist in the system.</p>
 */
export interface NotFoundException extends __SmithyException, $MetadataBearer {
  name: "NotFoundException";
  $fault: "client";
  Message?: string;
  Code?: ErrorCode | string;
}

export namespace NotFoundException {
  export const filterSensitiveLog = (obj: NotFoundException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is NotFoundException => __isa(o, "NotFoundException");
}

export enum NotificationTarget {
  EventBridge = "EventBridge",
  SNS = "SNS",
  SQS = "SQS",
}

export enum NumberSelectionBehavior {
  AvoidSticky = "AvoidSticky",
  PreferSticky = "PreferSticky",
}

/**
 * <p>A phone number for which an order has been placed.</p>
 */
export interface OrderedPhoneNumber {
  __type?: "OrderedPhoneNumber";
  /**
   * <p>The phone number status.</p>
   */
  Status?: OrderedPhoneNumberStatus | string;

  /**
   * <p>The phone number, in E.164 format.</p>
   */
  E164PhoneNumber?: string;
}

export namespace OrderedPhoneNumber {
  export const filterSensitiveLog = (obj: OrderedPhoneNumber): any => ({
    ...obj,
    ...(obj.E164PhoneNumber && { E164PhoneNumber: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is OrderedPhoneNumber => __isa(o, "OrderedPhoneNumber");
}

export enum OrderedPhoneNumberStatus {
  Acquired = "Acquired",
  Failed = "Failed",
  Processing = "Processing",
}

/**
 * <p>Origination settings enable your SIP hosts to receive inbound calls using your Amazon
 *       Chime Voice Connector.</p>
 */
export interface Origination {
  __type?: "Origination";
  /**
   * <p>The call distribution properties defined for your SIP hosts. Valid range: Minimum value
   *     of 1. Maximum value of 20.</p>
   */
  Routes?: OriginationRoute[];

  /**
   * <p>When origination settings are disabled, inbound calls are not enabled for your Amazon
   *       Chime Voice Connector.</p>
   */
  Disabled?: boolean;
}

export namespace Origination {
  export const filterSensitiveLog = (obj: Origination): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Origination => __isa(o, "Origination");
}

/**
 * <p>Origination routes define call distribution properties for your SIP hosts to receive
 *       inbound calls using your Amazon Chime Voice Connector. Limit: Ten origination routes for each
 *       Amazon Chime Voice Connector.</p>
 */
export interface OriginationRoute {
  __type?: "OriginationRoute";
  /**
   * <p>The weight associated with the host. If hosts are equal in priority, calls are
   *       distributed among them based on their relative weight.</p>
   */
  Weight?: number;

  /**
   * <p>The priority associated with the host, with 1 being the highest priority. Higher
   *       priority hosts are attempted first.</p>
   */
  Priority?: number;

  /**
   * <p>The designated origination route port. Defaults to 5060.</p>
   */
  Port?: number;

  /**
   * <p>The FQDN or IP address to contact for origination traffic.</p>
   */
  Host?: string;

  /**
   * <p>The protocol to use for the origination route. Encryption-enabled Amazon Chime Voice Connectors use TCP protocol by default.</p>
   */
  Protocol?: OriginationRouteProtocol | string;
}

export namespace OriginationRoute {
  export const filterSensitiveLog = (obj: OriginationRoute): any => ({
    ...obj,
  });
  export const isa = (o: any): o is OriginationRoute => __isa(o, "OriginationRoute");
}

export enum OriginationRouteProtocol {
  TCP = "TCP",
  UDP = "UDP",
}

/**
 * <p>The phone number and proxy phone number for a participant in an Amazon Chime Voice Connector proxy session.</p>
 */
export interface Participant {
  __type?: "Participant";
  /**
   * <p>The participant's proxy phone number.</p>
   */
  ProxyPhoneNumber?: string;

  /**
   * <p>The participant's phone number.</p>
   */
  PhoneNumber?: string;
}

export namespace Participant {
  export const filterSensitiveLog = (obj: Participant): any => ({
    ...obj,
    ...(obj.ProxyPhoneNumber && { ProxyPhoneNumber: SENSITIVE_STRING }),
    ...(obj.PhoneNumber && { PhoneNumber: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is Participant => __isa(o, "Participant");
}

/**
 * <p>A phone number used for Amazon Chime Business Calling or an Amazon Chime Voice
 *       Connector.</p>
 */
export interface PhoneNumber {
  __type?: "PhoneNumber";
  /**
   * <p>The phone number creation timestamp, in ISO 8601 format.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The updated phone number timestamp, in ISO 8601 format.</p>
   */
  UpdatedTimestamp?: Date;

  /**
   * <p>The phone number type.</p>
   */
  Type?: PhoneNumberType | string;

  /**
   * <p>The outbound calling name associated with the phone number.</p>
   */
  CallingName?: string;

  /**
   * <p>The phone number ID.</p>
   */
  PhoneNumberId?: string;

  /**
   * <p>The phone number associations.</p>
   */
  Associations?: PhoneNumberAssociation[];

  /**
   * <p>The phone number, in E.164 format.</p>
   */
  E164PhoneNumber?: string;

  /**
   * <p>The phone number product type.</p>
   */
  ProductType?: PhoneNumberProductType | string;

  /**
   * <p>The outbound calling name status.</p>
   */
  CallingNameStatus?: CallingNameStatus | string;

  /**
   * <p>The phone number capabilities.</p>
   */
  Capabilities?: PhoneNumberCapabilities;

  /**
   * <p>The phone number status.</p>
   */
  Status?: PhoneNumberStatus | string;

  /**
   * <p>The deleted phone number timestamp, in ISO 8601 format.</p>
   */
  DeletionTimestamp?: Date;
}

export namespace PhoneNumber {
  export const filterSensitiveLog = (obj: PhoneNumber): any => ({
    ...obj,
    ...(obj.CallingName && { CallingName: SENSITIVE_STRING }),
    ...(obj.E164PhoneNumber && { E164PhoneNumber: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is PhoneNumber => __isa(o, "PhoneNumber");
}

/**
 * <p>The phone number associations, such as Amazon Chime account ID, Amazon Chime user ID, Amazon Chime Voice
 *       Connector ID, or Amazon Chime Voice Connector group ID.</p>
 */
export interface PhoneNumberAssociation {
  __type?: "PhoneNumberAssociation";
  /**
   * <p>The timestamp of the phone number association, in ISO 8601 format.</p>
   */
  AssociatedTimestamp?: Date;

  /**
   * <p>Contains the ID for the entity specified in Name.</p>
   */
  Value?: string;

  /**
   * <p>Defines the association with an Amazon Chime account ID, user ID, Amazon Chime Voice
   *       Connector ID, or Amazon Chime Voice Connector group ID.</p>
   */
  Name?: PhoneNumberAssociationName | string;
}

export namespace PhoneNumberAssociation {
  export const filterSensitiveLog = (obj: PhoneNumberAssociation): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PhoneNumberAssociation => __isa(o, "PhoneNumberAssociation");
}

export enum PhoneNumberAssociationName {
  AccountId = "AccountId",
  UserId = "UserId",
  VoiceConnectorGroupId = "VoiceConnectorGroupId",
  VoiceConnectorId = "VoiceConnectorId",
}

/**
 * <p>The phone number capabilities for Amazon Chime Business Calling phone numbers, such as enabled inbound and outbound calling and text
 *       messaging.</p>
 */
export interface PhoneNumberCapabilities {
  __type?: "PhoneNumberCapabilities";
  /**
   * <p>Allows or denies outbound calling for the specified phone number.</p>
   */
  OutboundCall?: boolean;

  /**
   * <p>Allows or denies inbound SMS messaging for the specified phone number.</p>
   */
  InboundSMS?: boolean;

  /**
   * <p>Allows or denies inbound calling for the specified phone number.</p>
   */
  InboundCall?: boolean;

  /**
   * <p>Allows or denies outbound SMS messaging for the specified phone number.</p>
   */
  OutboundSMS?: boolean;

  /**
   * <p>Allows or denies outbound MMS messaging for the specified phone number.</p>
   */
  OutboundMMS?: boolean;

  /**
   * <p>Allows or denies inbound MMS messaging for the specified phone number.</p>
   */
  InboundMMS?: boolean;
}

export namespace PhoneNumberCapabilities {
  export const filterSensitiveLog = (obj: PhoneNumberCapabilities): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PhoneNumberCapabilities => __isa(o, "PhoneNumberCapabilities");
}

/**
 * <p>If the phone number action fails for one or more of the phone numbers in the request, a
 *     list of the phone numbers is returned, along with error codes and error messages.</p>
 */
export interface PhoneNumberError {
  __type?: "PhoneNumberError";
  /**
   * <p>The phone number ID for which the action failed.</p>
   */
  PhoneNumberId?: string;

  /**
   * <p>The error code.</p>
   */
  ErrorCode?: ErrorCode | string;

  /**
   * <p>The error message.</p>
   */
  ErrorMessage?: string;
}

export namespace PhoneNumberError {
  export const filterSensitiveLog = (obj: PhoneNumberError): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PhoneNumberError => __isa(o, "PhoneNumberError");
}

/**
 * <p>The details of a phone number order created for Amazon Chime.</p>
 */
export interface PhoneNumberOrder {
  __type?: "PhoneNumberOrder";
  /**
   * <p>The ordered phone number details, such as the phone number in E.164 format and the
   *      phone number status.</p>
   */
  OrderedPhoneNumbers?: OrderedPhoneNumber[];

  /**
   * <p>The updated phone number order timestamp, in ISO 8601 format.</p>
   */
  UpdatedTimestamp?: Date;

  /**
   * <p>The phone number order creation timestamp, in ISO 8601 format.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The phone number order product type.</p>
   */
  ProductType?: PhoneNumberProductType | string;

  /**
   * <p>The phone number order ID.</p>
   */
  PhoneNumberOrderId?: string;

  /**
   * <p>The status of the phone number order.</p>
   */
  Status?: PhoneNumberOrderStatus | string;
}

export namespace PhoneNumberOrder {
  export const filterSensitiveLog = (obj: PhoneNumberOrder): any => ({
    ...obj,
    ...(obj.OrderedPhoneNumbers && {
      OrderedPhoneNumbers: obj.OrderedPhoneNumbers.map((item) => OrderedPhoneNumber.filterSensitiveLog(item)),
    }),
  });
  export const isa = (o: any): o is PhoneNumberOrder => __isa(o, "PhoneNumberOrder");
}

export enum PhoneNumberOrderStatus {
  Failed = "Failed",
  Partial = "Partial",
  Processing = "Processing",
  Successful = "Successful",
}

export enum PhoneNumberProductType {
  BusinessCalling = "BusinessCalling",
  VoiceConnector = "VoiceConnector",
}

export enum PhoneNumberStatus {
  AcquireFailed = "AcquireFailed",
  AcquireInProgress = "AcquireInProgress",
  Assigned = "Assigned",
  DeleteFailed = "DeleteFailed",
  DeleteInProgress = "DeleteInProgress",
  ReleaseFailed = "ReleaseFailed",
  ReleaseInProgress = "ReleaseInProgress",
  Unassigned = "Unassigned",
}

export enum PhoneNumberType {
  Local = "Local",
  TollFree = "TollFree",
}

/**
 * <p>The proxy configuration for an Amazon Chime Voice Connector.</p>
 */
export interface Proxy {
  __type?: "Proxy";
  /**
   * <p>The phone number to route calls to after a proxy session expires.</p>
   */
  FallBackPhoneNumber?: string;

  /**
   * <p>When true, stops proxy sessions from being created on the specified Amazon Chime Voice Connector.</p>
   */
  Disabled?: boolean;

  /**
   * <p>The default number of minutes allowed for proxy sessions.</p>
   */
  DefaultSessionExpiryMinutes?: number;

  /**
   * <p>The countries for proxy phone numbers to be selected from.</p>
   */
  PhoneNumberCountries?: string[];
}

export namespace Proxy {
  export const filterSensitiveLog = (obj: Proxy): any => ({
    ...obj,
    ...(obj.FallBackPhoneNumber && { FallBackPhoneNumber: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is Proxy => __isa(o, "Proxy");
}

/**
 * <p>The proxy session for an Amazon Chime Voice Connector.</p>
 */
export interface ProxySession {
  __type?: "ProxySession";
  /**
   * <p>The preference for proxy phone number reuse, or stickiness, between the same participants across sessions.</p>
   */
  NumberSelectionBehavior?: NumberSelectionBehavior | string;

  /**
   * <p>The name of the proxy session.</p>
   */
  Name?: string;

  /**
   * <p>The updated timestamp, in ISO 8601 format.</p>
   */
  UpdatedTimestamp?: Date;

  /**
   * <p>The status of the proxy session.</p>
   */
  Status?: ProxySessionStatus | string;

  /**
   * <p>The preference for matching the country or area code of the proxy phone number with that of the first participant.</p>
   */
  GeoMatchLevel?: GeoMatchLevel | string;

  /**
   * <p>The proxy session ID.</p>
   */
  ProxySessionId?: string;

  /**
   * <p>The number of minutes allowed for the proxy session.</p>
   */
  ExpiryMinutes?: number;

  /**
   * <p>The Amazon Chime voice connector ID.</p>
   */
  VoiceConnectorId?: string;

  /**
   * <p>The proxy session participants.</p>
   */
  Participants?: Participant[];

  /**
   * <p>The country and area code for the proxy phone number.</p>
   */
  GeoMatchParams?: GeoMatchParams;

  /**
   * <p>The proxy session capabilities.</p>
   */
  Capabilities?: (Capability | string)[];

  /**
   * <p>The ended timestamp, in ISO 8601 format.</p>
   */
  EndedTimestamp?: Date;

  /**
   * <p>The created timestamp, in ISO 8601 format.</p>
   */
  CreatedTimestamp?: Date;
}

export namespace ProxySession {
  export const filterSensitiveLog = (obj: ProxySession): any => ({
    ...obj,
    ...(obj.Participants && { Participants: obj.Participants.map((item) => Participant.filterSensitiveLog(item)) }),
  });
  export const isa = (o: any): o is ProxySession => __isa(o, "ProxySession");
}

export enum ProxySessionStatus {
  Closed = "Closed",
  InProgress = "InProgress",
  Open = "Open",
}

export interface PutEventsConfigurationRequest {
  __type?: "PutEventsConfigurationRequest";
  /**
   * <p>Lambda function ARN that allows the bot to receive outgoing events.</p>
   */
  LambdaFunctionArn?: string;

  /**
   * <p>HTTPS endpoint that allows the bot to receive outgoing events.</p>
   */
  OutboundEventsHTTPSEndpoint?: string;

  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The bot ID.</p>
   */
  BotId: string | undefined;
}

export namespace PutEventsConfigurationRequest {
  export const filterSensitiveLog = (obj: PutEventsConfigurationRequest): any => ({
    ...obj,
    ...(obj.LambdaFunctionArn && { LambdaFunctionArn: SENSITIVE_STRING }),
    ...(obj.OutboundEventsHTTPSEndpoint && { OutboundEventsHTTPSEndpoint: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is PutEventsConfigurationRequest => __isa(o, "PutEventsConfigurationRequest");
}

export interface PutEventsConfigurationResponse {
  __type?: "PutEventsConfigurationResponse";
  /**
   * <p>The configuration that allows a bot to receive outgoing events. Can be either an HTTPS endpoint or a Lambda function ARN.</p>
   */
  EventsConfiguration?: EventsConfiguration;
}

export namespace PutEventsConfigurationResponse {
  export const filterSensitiveLog = (obj: PutEventsConfigurationResponse): any => ({
    ...obj,
    ...(obj.EventsConfiguration && {
      EventsConfiguration: EventsConfiguration.filterSensitiveLog(obj.EventsConfiguration),
    }),
  });
  export const isa = (o: any): o is PutEventsConfigurationResponse => __isa(o, "PutEventsConfigurationResponse");
}

export interface PutRetentionSettingsRequest {
  __type?: "PutRetentionSettingsRequest";
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
  export const filterSensitiveLog = (obj: PutRetentionSettingsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutRetentionSettingsRequest => __isa(o, "PutRetentionSettingsRequest");
}

export interface PutRetentionSettingsResponse {
  __type?: "PutRetentionSettingsResponse";
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
  export const filterSensitiveLog = (obj: PutRetentionSettingsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutRetentionSettingsResponse => __isa(o, "PutRetentionSettingsResponse");
}

export interface PutVoiceConnectorEmergencyCallingConfigurationRequest {
  __type?: "PutVoiceConnectorEmergencyCallingConfigurationRequest";
  /**
   * <p>The emergency calling configuration details.</p>
   */
  EmergencyCallingConfiguration: EmergencyCallingConfiguration | undefined;

  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

export namespace PutVoiceConnectorEmergencyCallingConfigurationRequest {
  export const filterSensitiveLog = (obj: PutVoiceConnectorEmergencyCallingConfigurationRequest): any => ({
    ...obj,
    ...(obj.EmergencyCallingConfiguration && {
      EmergencyCallingConfiguration: EmergencyCallingConfiguration.filterSensitiveLog(
        obj.EmergencyCallingConfiguration
      ),
    }),
  });
  export const isa = (o: any): o is PutVoiceConnectorEmergencyCallingConfigurationRequest =>
    __isa(o, "PutVoiceConnectorEmergencyCallingConfigurationRequest");
}

export interface PutVoiceConnectorEmergencyCallingConfigurationResponse {
  __type?: "PutVoiceConnectorEmergencyCallingConfigurationResponse";
  /**
   * <p>The emergency calling configuration details.</p>
   */
  EmergencyCallingConfiguration?: EmergencyCallingConfiguration;
}

export namespace PutVoiceConnectorEmergencyCallingConfigurationResponse {
  export const filterSensitiveLog = (obj: PutVoiceConnectorEmergencyCallingConfigurationResponse): any => ({
    ...obj,
    ...(obj.EmergencyCallingConfiguration && {
      EmergencyCallingConfiguration: EmergencyCallingConfiguration.filterSensitiveLog(
        obj.EmergencyCallingConfiguration
      ),
    }),
  });
  export const isa = (o: any): o is PutVoiceConnectorEmergencyCallingConfigurationResponse =>
    __isa(o, "PutVoiceConnectorEmergencyCallingConfigurationResponse");
}

export interface PutVoiceConnectorLoggingConfigurationRequest {
  __type?: "PutVoiceConnectorLoggingConfigurationRequest";
  /**
   * <p>The logging configuration details to add.</p>
   */
  LoggingConfiguration: LoggingConfiguration | undefined;

  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

export namespace PutVoiceConnectorLoggingConfigurationRequest {
  export const filterSensitiveLog = (obj: PutVoiceConnectorLoggingConfigurationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutVoiceConnectorLoggingConfigurationRequest =>
    __isa(o, "PutVoiceConnectorLoggingConfigurationRequest");
}

export interface PutVoiceConnectorLoggingConfigurationResponse {
  __type?: "PutVoiceConnectorLoggingConfigurationResponse";
  /**
   * <p>The updated logging configuration details.</p>
   */
  LoggingConfiguration?: LoggingConfiguration;
}

export namespace PutVoiceConnectorLoggingConfigurationResponse {
  export const filterSensitiveLog = (obj: PutVoiceConnectorLoggingConfigurationResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutVoiceConnectorLoggingConfigurationResponse =>
    __isa(o, "PutVoiceConnectorLoggingConfigurationResponse");
}

export interface PutVoiceConnectorOriginationRequest {
  __type?: "PutVoiceConnectorOriginationRequest";
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
  export const filterSensitiveLog = (obj: PutVoiceConnectorOriginationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutVoiceConnectorOriginationRequest =>
    __isa(o, "PutVoiceConnectorOriginationRequest");
}

export interface PutVoiceConnectorOriginationResponse {
  __type?: "PutVoiceConnectorOriginationResponse";
  /**
   * <p>The updated origination setting details.</p>
   */
  Origination?: Origination;
}

export namespace PutVoiceConnectorOriginationResponse {
  export const filterSensitiveLog = (obj: PutVoiceConnectorOriginationResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutVoiceConnectorOriginationResponse =>
    __isa(o, "PutVoiceConnectorOriginationResponse");
}

export interface PutVoiceConnectorProxyRequest {
  __type?: "PutVoiceConnectorProxyRequest";
  /**
   * <p>When true, stops proxy sessions from being created on the specified Amazon Chime Voice Connector.</p>
   */
  Disabled?: boolean;

  /**
   * <p>The Amazon Chime voice connector ID.</p>
   */
  VoiceConnectorId: string | undefined;

  /**
   * <p>The default number of minutes allowed for proxy sessions.</p>
   */
  DefaultSessionExpiryMinutes: number | undefined;

  /**
   * <p>The phone number to route calls to after a proxy session expires.</p>
   */
  FallBackPhoneNumber?: string;

  /**
   * <p>The countries for proxy phone numbers to be selected from.</p>
   */
  PhoneNumberPoolCountries: string[] | undefined;
}

export namespace PutVoiceConnectorProxyRequest {
  export const filterSensitiveLog = (obj: PutVoiceConnectorProxyRequest): any => ({
    ...obj,
    ...(obj.FallBackPhoneNumber && { FallBackPhoneNumber: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is PutVoiceConnectorProxyRequest => __isa(o, "PutVoiceConnectorProxyRequest");
}

export interface PutVoiceConnectorProxyResponse {
  __type?: "PutVoiceConnectorProxyResponse";
  /**
   * <p>The proxy configuration details.</p>
   */
  Proxy?: Proxy;
}

export namespace PutVoiceConnectorProxyResponse {
  export const filterSensitiveLog = (obj: PutVoiceConnectorProxyResponse): any => ({
    ...obj,
    ...(obj.Proxy && { Proxy: Proxy.filterSensitiveLog(obj.Proxy) }),
  });
  export const isa = (o: any): o is PutVoiceConnectorProxyResponse => __isa(o, "PutVoiceConnectorProxyResponse");
}

export interface PutVoiceConnectorStreamingConfigurationRequest {
  __type?: "PutVoiceConnectorStreamingConfigurationRequest";
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
  export const filterSensitiveLog = (obj: PutVoiceConnectorStreamingConfigurationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutVoiceConnectorStreamingConfigurationRequest =>
    __isa(o, "PutVoiceConnectorStreamingConfigurationRequest");
}

export interface PutVoiceConnectorStreamingConfigurationResponse {
  __type?: "PutVoiceConnectorStreamingConfigurationResponse";
  /**
   * <p>The updated streaming configuration details.</p>
   */
  StreamingConfiguration?: StreamingConfiguration;
}

export namespace PutVoiceConnectorStreamingConfigurationResponse {
  export const filterSensitiveLog = (obj: PutVoiceConnectorStreamingConfigurationResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutVoiceConnectorStreamingConfigurationResponse =>
    __isa(o, "PutVoiceConnectorStreamingConfigurationResponse");
}

export interface PutVoiceConnectorTerminationCredentialsRequest {
  __type?: "PutVoiceConnectorTerminationCredentialsRequest";
  /**
   * <p>The termination SIP credentials.</p>
   */
  Credentials?: Credential[];

  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

export namespace PutVoiceConnectorTerminationCredentialsRequest {
  export const filterSensitiveLog = (obj: PutVoiceConnectorTerminationCredentialsRequest): any => ({
    ...obj,
    ...(obj.Credentials && { Credentials: obj.Credentials.map((item) => Credential.filterSensitiveLog(item)) }),
  });
  export const isa = (o: any): o is PutVoiceConnectorTerminationCredentialsRequest =>
    __isa(o, "PutVoiceConnectorTerminationCredentialsRequest");
}

export interface PutVoiceConnectorTerminationRequest {
  __type?: "PutVoiceConnectorTerminationRequest";
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
  export const filterSensitiveLog = (obj: PutVoiceConnectorTerminationRequest): any => ({
    ...obj,
    ...(obj.Termination && { Termination: Termination.filterSensitiveLog(obj.Termination) }),
  });
  export const isa = (o: any): o is PutVoiceConnectorTerminationRequest =>
    __isa(o, "PutVoiceConnectorTerminationRequest");
}

export interface PutVoiceConnectorTerminationResponse {
  __type?: "PutVoiceConnectorTerminationResponse";
  /**
   * <p>The updated termination setting details.</p>
   */
  Termination?: Termination;
}

export namespace PutVoiceConnectorTerminationResponse {
  export const filterSensitiveLog = (obj: PutVoiceConnectorTerminationResponse): any => ({
    ...obj,
    ...(obj.Termination && { Termination: Termination.filterSensitiveLog(obj.Termination) }),
  });
  export const isa = (o: any): o is PutVoiceConnectorTerminationResponse =>
    __isa(o, "PutVoiceConnectorTerminationResponse");
}

export interface RedactConversationMessageRequest {
  __type?: "RedactConversationMessageRequest";
  /**
   * <p>The conversation ID.</p>
   */
  ConversationId: string | undefined;

  /**
   * <p>The message ID.</p>
   */
  MessageId: string | undefined;

  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
}

export namespace RedactConversationMessageRequest {
  export const filterSensitiveLog = (obj: RedactConversationMessageRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RedactConversationMessageRequest => __isa(o, "RedactConversationMessageRequest");
}

export interface RedactConversationMessageResponse {
  __type?: "RedactConversationMessageResponse";
}

export namespace RedactConversationMessageResponse {
  export const filterSensitiveLog = (obj: RedactConversationMessageResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RedactConversationMessageResponse => __isa(o, "RedactConversationMessageResponse");
}

export interface RedactRoomMessageRequest {
  __type?: "RedactRoomMessageRequest";
  /**
   * <p>The message ID.</p>
   */
  MessageId: string | undefined;

  /**
   * <p>The room ID.</p>
   */
  RoomId: string | undefined;

  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
}

export namespace RedactRoomMessageRequest {
  export const filterSensitiveLog = (obj: RedactRoomMessageRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RedactRoomMessageRequest => __isa(o, "RedactRoomMessageRequest");
}

export interface RedactRoomMessageResponse {
  __type?: "RedactRoomMessageResponse";
}

export namespace RedactRoomMessageResponse {
  export const filterSensitiveLog = (obj: RedactRoomMessageResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RedactRoomMessageResponse => __isa(o, "RedactRoomMessageResponse");
}

export interface RegenerateSecurityTokenRequest {
  __type?: "RegenerateSecurityTokenRequest";
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
  export const filterSensitiveLog = (obj: RegenerateSecurityTokenRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RegenerateSecurityTokenRequest => __isa(o, "RegenerateSecurityTokenRequest");
}

export interface RegenerateSecurityTokenResponse {
  __type?: "RegenerateSecurityTokenResponse";
  /**
   * <p>A resource that allows Enterprise account administrators to configure an interface to receive events from Amazon Chime.</p>
   */
  Bot?: Bot;
}

export namespace RegenerateSecurityTokenResponse {
  export const filterSensitiveLog = (obj: RegenerateSecurityTokenResponse): any => ({
    ...obj,
    ...(obj.Bot && { Bot: Bot.filterSensitiveLog(obj.Bot) }),
  });
  export const isa = (o: any): o is RegenerateSecurityTokenResponse => __isa(o, "RegenerateSecurityTokenResponse");
}

export enum RegistrationStatus {
  Registered = "Registered",
  Suspended = "Suspended",
  Unregistered = "Unregistered",
}

export interface ResetPersonalPINRequest {
  __type?: "ResetPersonalPINRequest";
  /**
   * <p>The user ID.</p>
   */
  UserId: string | undefined;

  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
}

export namespace ResetPersonalPINRequest {
  export const filterSensitiveLog = (obj: ResetPersonalPINRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ResetPersonalPINRequest => __isa(o, "ResetPersonalPINRequest");
}

export interface ResetPersonalPINResponse {
  __type?: "ResetPersonalPINResponse";
  /**
   * <p>The user details and new personal meeting PIN.</p>
   */
  User?: User;
}

export namespace ResetPersonalPINResponse {
  export const filterSensitiveLog = (obj: ResetPersonalPINResponse): any => ({
    ...obj,
    ...(obj.User && { User: User.filterSensitiveLog(obj.User) }),
  });
  export const isa = (o: any): o is ResetPersonalPINResponse => __isa(o, "ResetPersonalPINResponse");
}

/**
 * <p>The request exceeds the resource limit.</p>
 */
export interface ResourceLimitExceededException extends __SmithyException, $MetadataBearer {
  name: "ResourceLimitExceededException";
  $fault: "client";
  Message?: string;
  Code?: ErrorCode | string;
}

export namespace ResourceLimitExceededException {
  export const filterSensitiveLog = (obj: ResourceLimitExceededException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ResourceLimitExceededException => __isa(o, "ResourceLimitExceededException");
}

export interface RestorePhoneNumberRequest {
  __type?: "RestorePhoneNumberRequest";
  /**
   * <p>The phone number.</p>
   */
  PhoneNumberId: string | undefined;
}

export namespace RestorePhoneNumberRequest {
  export const filterSensitiveLog = (obj: RestorePhoneNumberRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RestorePhoneNumberRequest => __isa(o, "RestorePhoneNumberRequest");
}

export interface RestorePhoneNumberResponse {
  __type?: "RestorePhoneNumberResponse";
  /**
   * <p>The phone number details.</p>
   */
  PhoneNumber?: PhoneNumber;
}

export namespace RestorePhoneNumberResponse {
  export const filterSensitiveLog = (obj: RestorePhoneNumberResponse): any => ({
    ...obj,
    ...(obj.PhoneNumber && { PhoneNumber: PhoneNumber.filterSensitiveLog(obj.PhoneNumber) }),
  });
  export const isa = (o: any): o is RestorePhoneNumberResponse => __isa(o, "RestorePhoneNumberResponse");
}

/**
 * <p>The retention settings for an Amazon Chime Enterprise account that determine how long to retain items such as chat room messages and chat conversation messages.</p>
 */
export interface RetentionSettings {
  __type?: "RetentionSettings";
  /**
   * <p>The chat room retention settings.</p>
   */
  RoomRetentionSettings?: RoomRetentionSettings;

  /**
   * <p>The chat conversation retention settings.</p>
   */
  ConversationRetentionSettings?: ConversationRetentionSettings;
}

export namespace RetentionSettings {
  export const filterSensitiveLog = (obj: RetentionSettings): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RetentionSettings => __isa(o, "RetentionSettings");
}

/**
 * <p>The Amazon Chime chat room details.</p>
 */
export interface Room {
  __type?: "Room";
  /**
   * <p>The room creation timestamp, in ISO 8601 format.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId?: string;

  /**
   * <p>The room update timestamp, in ISO 8601 format.</p>
   */
  UpdatedTimestamp?: Date;

  /**
   * <p>The room name.</p>
   */
  Name?: string;

  /**
   * <p>The room ID.</p>
   */
  RoomId?: string;

  /**
   * <p>The identifier of the room creator.</p>
   */
  CreatedBy?: string;
}

export namespace Room {
  export const filterSensitiveLog = (obj: Room): any => ({
    ...obj,
    ...(obj.Name && { Name: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is Room => __isa(o, "Room");
}

/**
 * <p>The room membership details.</p>
 */
export interface RoomMembership {
  __type?: "RoomMembership";
  /**
   * <p>The membership role.</p>
   */
  Role?: RoomMembershipRole | string;

  /**
   * <p>The member details, such as email address, name, member ID, and member type.</p>
   */
  Member?: Member;

  /**
   * <p>The room ID.</p>
   */
  RoomId?: string;

  /**
   * <p>The room membership update timestamp, in ISO 8601 format.</p>
   */
  UpdatedTimestamp?: Date;

  /**
   * <p>The identifier of the user that invited the room member.</p>
   */
  InvitedBy?: string;
}

export namespace RoomMembership {
  export const filterSensitiveLog = (obj: RoomMembership): any => ({
    ...obj,
    ...(obj.Member && { Member: Member.filterSensitiveLog(obj.Member) }),
  });
  export const isa = (o: any): o is RoomMembership => __isa(o, "RoomMembership");
}

export enum RoomMembershipRole {
  Administrator = "Administrator",
  Member = "Member",
}

/**
 * <p>The retention settings that determine how long to retain chat room messages for an Amazon Chime Enterprise account.</p>
 */
export interface RoomRetentionSettings {
  __type?: "RoomRetentionSettings";
  /**
   * <p>The number of days for which to retain chat room messages.</p>
   */
  RetentionDays?: number;
}

export namespace RoomRetentionSettings {
  export const filterSensitiveLog = (obj: RoomRetentionSettings): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RoomRetentionSettings => __isa(o, "RoomRetentionSettings");
}

export interface SearchAvailablePhoneNumbersRequest {
  __type?: "SearchAvailablePhoneNumbersRequest";
  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The toll-free prefix that you use to filter results.</p>
   */
  TollFreePrefix?: string;

  /**
   * <p>The country used to filter results.</p>
   */
  Country?: string;

  /**
   * <p>The city used to filter results.</p>
   */
  City?: string;

  /**
   * <p>The state used to filter results.</p>
   */
  State?: string;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The area code used to filter results.</p>
   */
  AreaCode?: string;
}

export namespace SearchAvailablePhoneNumbersRequest {
  export const filterSensitiveLog = (obj: SearchAvailablePhoneNumbersRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SearchAvailablePhoneNumbersRequest =>
    __isa(o, "SearchAvailablePhoneNumbersRequest");
}

export interface SearchAvailablePhoneNumbersResponse {
  __type?: "SearchAvailablePhoneNumbersResponse";
  /**
   * <p>List of phone numbers, in E.164 format.</p>
   */
  E164PhoneNumbers?: string[];
}

export namespace SearchAvailablePhoneNumbersResponse {
  export const filterSensitiveLog = (obj: SearchAvailablePhoneNumbersResponse): any => ({
    ...obj,
    ...(obj.E164PhoneNumbers && { E164PhoneNumbers: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is SearchAvailablePhoneNumbersResponse =>
    __isa(o, "SearchAvailablePhoneNumbersResponse");
}

/**
 * <p>The service encountered an unexpected error.</p>
 */
export interface ServiceFailureException extends __SmithyException, $MetadataBearer {
  name: "ServiceFailureException";
  $fault: "server";
  Code?: ErrorCode | string;
  Message?: string;
}

export namespace ServiceFailureException {
  export const filterSensitiveLog = (obj: ServiceFailureException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ServiceFailureException => __isa(o, "ServiceFailureException");
}

/**
 * <p>The service is currently unavailable.</p>
 */
export interface ServiceUnavailableException extends __SmithyException, $MetadataBearer {
  name: "ServiceUnavailableException";
  $fault: "server";
  Message?: string;
  Code?: ErrorCode | string;
}

export namespace ServiceUnavailableException {
  export const filterSensitiveLog = (obj: ServiceUnavailableException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ServiceUnavailableException => __isa(o, "ServiceUnavailableException");
}

/**
 * <p>An Active Directory (AD) group whose members are granted permission to act as delegates.</p>
 */
export interface SigninDelegateGroup {
  __type?: "SigninDelegateGroup";
  /**
   * <p>The group name.</p>
   */
  GroupName?: string;
}

export namespace SigninDelegateGroup {
  export const filterSensitiveLog = (obj: SigninDelegateGroup): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SigninDelegateGroup => __isa(o, "SigninDelegateGroup");
}

/**
 * <p>The streaming configuration associated with an Amazon Chime Voice Connector. Specifies whether media streaming is enabled for sending to Amazon Kinesis, and shows the retention period for the Amazon Kinesis data, in hours.</p>
 */
export interface StreamingConfiguration {
  __type?: "StreamingConfiguration";
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
  export const filterSensitiveLog = (obj: StreamingConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StreamingConfiguration => __isa(o, "StreamingConfiguration");
}

/**
 * <p>The targeted recipient for a streaming configuration notification.</p>
 */
export interface StreamingNotificationTarget {
  __type?: "StreamingNotificationTarget";
  /**
   * <p>The streaming notification target.</p>
   */
  NotificationTarget: NotificationTarget | string | undefined;
}

export namespace StreamingNotificationTarget {
  export const filterSensitiveLog = (obj: StreamingNotificationTarget): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StreamingNotificationTarget => __isa(o, "StreamingNotificationTarget");
}

/**
 * <p>Describes a tag applied to a resource.</p>
 */
export interface Tag {
  __type?: "Tag";
  /**
   * <p>The value of the tag.</p>
   */
  Value: string | undefined;

  /**
   * <p>The key of the tag.</p>
   */
  Key: string | undefined;
}

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
    ...(obj.Value && { Value: SENSITIVE_STRING }),
    ...(obj.Key && { Key: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is Tag => __isa(o, "Tag");
}

export interface TagAttendeeRequest {
  __type?: "TagAttendeeRequest";
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
  export const filterSensitiveLog = (obj: TagAttendeeRequest): any => ({
    ...obj,
    ...(obj.Tags && { Tags: obj.Tags.map((item) => Tag.filterSensitiveLog(item)) }),
  });
  export const isa = (o: any): o is TagAttendeeRequest => __isa(o, "TagAttendeeRequest");
}

export interface TagMeetingRequest {
  __type?: "TagMeetingRequest";
  /**
   * <p>The tag key-value pairs.</p>
   */
  Tags: Tag[] | undefined;

  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;
}

export namespace TagMeetingRequest {
  export const filterSensitiveLog = (obj: TagMeetingRequest): any => ({
    ...obj,
    ...(obj.Tags && { Tags: obj.Tags.map((item) => Tag.filterSensitiveLog(item)) }),
  });
  export const isa = (o: any): o is TagMeetingRequest => __isa(o, "TagMeetingRequest");
}

export interface TagResourceRequest {
  __type?: "TagResourceRequest";
  /**
   * <p>The tag key-value pairs.</p>
   */
  Tags: Tag[] | undefined;

  /**
   * <p>The resource ARN.</p>
   */
  ResourceARN: string | undefined;
}

export namespace TagResourceRequest {
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
    ...(obj.Tags && { Tags: obj.Tags.map((item) => Tag.filterSensitiveLog(item)) }),
    ...(obj.ResourceARN && { ResourceARN: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is TagResourceRequest => __isa(o, "TagResourceRequest");
}

/**
 * <p>Settings that allow management of telephony permissions for an Amazon Chime user, such
 *       as inbound and outbound calling and text messaging.</p>
 */
export interface TelephonySettings {
  __type?: "TelephonySettings";
  /**
   * <p>Allows or denies SMS messaging.</p>
   */
  SMS: boolean | undefined;

  /**
   * <p>Allows or denies inbound calling.</p>
   */
  InboundCalling: boolean | undefined;

  /**
   * <p>Allows or denies outbound calling.</p>
   */
  OutboundCalling: boolean | undefined;
}

export namespace TelephonySettings {
  export const filterSensitiveLog = (obj: TelephonySettings): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TelephonySettings => __isa(o, "TelephonySettings");
}

/**
 * <p>Termination settings enable your SIP hosts to make outbound calls using your Amazon
 *       Chime Voice Connector.</p>
 */
export interface Termination {
  __type?: "Termination";
  /**
   * <p>The countries to which calls are allowed, in ISO 3166-1 alpha-2 format. Required.</p>
   */
  CallingRegions?: string[];

  /**
   * <p>The default caller ID phone number.</p>
   */
  DefaultPhoneNumber?: string;

  /**
   * <p>When termination settings are disabled, outbound calls can not be made.</p>
   */
  Disabled?: boolean;

  /**
   * <p>The limit on calls per second. Max value based on account service quota. Default value
   *       of 1.</p>
   */
  CpsLimit?: number;

  /**
   * <p>The IP addresses allowed to make calls, in CIDR format. Required.</p>
   */
  CidrAllowedList?: string[];
}

export namespace Termination {
  export const filterSensitiveLog = (obj: Termination): any => ({
    ...obj,
    ...(obj.DefaultPhoneNumber && { DefaultPhoneNumber: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is Termination => __isa(o, "Termination");
}

/**
 * <p>The termination health details, including the source IP address and timestamp of the
 *       last successful SIP <code>OPTIONS</code> message from your SIP infrastructure.</p>
 */
export interface TerminationHealth {
  __type?: "TerminationHealth";
  /**
   * <p>The source IP address.</p>
   */
  Source?: string;

  /**
   * <p>The timestamp, in ISO 8601 format.</p>
   */
  Timestamp?: Date;
}

export namespace TerminationHealth {
  export const filterSensitiveLog = (obj: TerminationHealth): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TerminationHealth => __isa(o, "TerminationHealth");
}

/**
 * <p>The client exceeded its request rate limit.</p>
 */
export interface ThrottledClientException extends __SmithyException, $MetadataBearer {
  name: "ThrottledClientException";
  $fault: "client";
  Code?: ErrorCode | string;
  Message?: string;
}

export namespace ThrottledClientException {
  export const filterSensitiveLog = (obj: ThrottledClientException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ThrottledClientException => __isa(o, "ThrottledClientException");
}

/**
 * <p>The client is not currently authorized to make the request.</p>
 */
export interface UnauthorizedClientException extends __SmithyException, $MetadataBearer {
  name: "UnauthorizedClientException";
  $fault: "client";
  Code?: ErrorCode | string;
  Message?: string;
}

export namespace UnauthorizedClientException {
  export const filterSensitiveLog = (obj: UnauthorizedClientException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UnauthorizedClientException => __isa(o, "UnauthorizedClientException");
}

/**
 * <p>The request was well-formed but was unable to be followed due to semantic errors.</p>
 */
export interface UnprocessableEntityException extends __SmithyException, $MetadataBearer {
  name: "UnprocessableEntityException";
  $fault: "client";
  Message?: string;
  Code?: ErrorCode | string;
}

export namespace UnprocessableEntityException {
  export const filterSensitiveLog = (obj: UnprocessableEntityException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UnprocessableEntityException => __isa(o, "UnprocessableEntityException");
}

export interface UntagAttendeeRequest {
  __type?: "UntagAttendeeRequest";
  /**
   * <p>The tag keys.</p>
   */
  TagKeys: string[] | undefined;

  /**
   * <p>The Amazon Chime SDK attendee ID.</p>
   */
  AttendeeId: string | undefined;

  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;
}

export namespace UntagAttendeeRequest {
  export const filterSensitiveLog = (obj: UntagAttendeeRequest): any => ({
    ...obj,
    ...(obj.TagKeys && { TagKeys: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is UntagAttendeeRequest => __isa(o, "UntagAttendeeRequest");
}

export interface UntagMeetingRequest {
  __type?: "UntagMeetingRequest";
  /**
   * <p>The tag keys.</p>
   */
  TagKeys: string[] | undefined;

  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;
}

export namespace UntagMeetingRequest {
  export const filterSensitiveLog = (obj: UntagMeetingRequest): any => ({
    ...obj,
    ...(obj.TagKeys && { TagKeys: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is UntagMeetingRequest => __isa(o, "UntagMeetingRequest");
}

export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
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
  export const isa = (o: any): o is UntagResourceRequest => __isa(o, "UntagResourceRequest");
}

export interface UpdateAccountRequest {
  __type?: "UpdateAccountRequest";
  /**
   * <p>The new name for the specified Amazon Chime account.</p>
   */
  Name?: string;

  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
}

export namespace UpdateAccountRequest {
  export const filterSensitiveLog = (obj: UpdateAccountRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateAccountRequest => __isa(o, "UpdateAccountRequest");
}

export interface UpdateAccountResponse {
  __type?: "UpdateAccountResponse";
  /**
   * <p>The updated Amazon Chime account details.</p>
   */
  Account?: Account;
}

export namespace UpdateAccountResponse {
  export const filterSensitiveLog = (obj: UpdateAccountResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateAccountResponse => __isa(o, "UpdateAccountResponse");
}

export interface UpdateAccountSettingsRequest {
  __type?: "UpdateAccountSettingsRequest";
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
  export const isa = (o: any): o is UpdateAccountSettingsRequest => __isa(o, "UpdateAccountSettingsRequest");
}

export interface UpdateAccountSettingsResponse {
  __type?: "UpdateAccountSettingsResponse";
}

export namespace UpdateAccountSettingsResponse {
  export const filterSensitiveLog = (obj: UpdateAccountSettingsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateAccountSettingsResponse => __isa(o, "UpdateAccountSettingsResponse");
}

export interface UpdateBotRequest {
  __type?: "UpdateBotRequest";
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
  export const isa = (o: any): o is UpdateBotRequest => __isa(o, "UpdateBotRequest");
}

export interface UpdateBotResponse {
  __type?: "UpdateBotResponse";
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
  export const isa = (o: any): o is UpdateBotResponse => __isa(o, "UpdateBotResponse");
}

export interface UpdateGlobalSettingsRequest {
  __type?: "UpdateGlobalSettingsRequest";
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
  export const isa = (o: any): o is UpdateGlobalSettingsRequest => __isa(o, "UpdateGlobalSettingsRequest");
}

export interface UpdatePhoneNumberRequest {
  __type?: "UpdatePhoneNumberRequest";
  /**
   * <p>The product type.</p>
   */
  ProductType?: PhoneNumberProductType | string;

  /**
   * <p>The outbound calling name associated with the phone number.</p>
   */
  CallingName?: string;

  /**
   * <p>The phone number ID.</p>
   */
  PhoneNumberId: string | undefined;
}

export namespace UpdatePhoneNumberRequest {
  export const filterSensitiveLog = (obj: UpdatePhoneNumberRequest): any => ({
    ...obj,
    ...(obj.CallingName && { CallingName: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is UpdatePhoneNumberRequest => __isa(o, "UpdatePhoneNumberRequest");
}

/**
 * <p>The phone number ID, product type, or calling name fields to update, used with the <a>BatchUpdatePhoneNumber</a> and <a>UpdatePhoneNumber</a> actions.</p>
 */
export interface UpdatePhoneNumberRequestItem {
  __type?: "UpdatePhoneNumberRequestItem";
  /**
   * <p>The product type to update.</p>
   */
  ProductType?: PhoneNumberProductType | string;

  /**
   * <p>The phone number ID to update.</p>
   */
  PhoneNumberId: string | undefined;

  /**
   * <p>The outbound calling name to update.</p>
   */
  CallingName?: string;
}

export namespace UpdatePhoneNumberRequestItem {
  export const filterSensitiveLog = (obj: UpdatePhoneNumberRequestItem): any => ({
    ...obj,
    ...(obj.CallingName && { CallingName: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is UpdatePhoneNumberRequestItem => __isa(o, "UpdatePhoneNumberRequestItem");
}

export interface UpdatePhoneNumberResponse {
  __type?: "UpdatePhoneNumberResponse";
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
  export const isa = (o: any): o is UpdatePhoneNumberResponse => __isa(o, "UpdatePhoneNumberResponse");
}

export interface UpdatePhoneNumberSettingsRequest {
  __type?: "UpdatePhoneNumberSettingsRequest";
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
  export const isa = (o: any): o is UpdatePhoneNumberSettingsRequest => __isa(o, "UpdatePhoneNumberSettingsRequest");
}

export interface UpdateProxySessionRequest {
  __type?: "UpdateProxySessionRequest";
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

  /**
   * <p>The Amazon Chime voice connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

export namespace UpdateProxySessionRequest {
  export const filterSensitiveLog = (obj: UpdateProxySessionRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateProxySessionRequest => __isa(o, "UpdateProxySessionRequest");
}

export interface UpdateProxySessionResponse {
  __type?: "UpdateProxySessionResponse";
  /**
   * <p>The proxy session details.</p>
   */
  ProxySession?: ProxySession;
}

export namespace UpdateProxySessionResponse {
  export const filterSensitiveLog = (obj: UpdateProxySessionResponse): any => ({
    ...obj,
    ...(obj.ProxySession && { ProxySession: ProxySession.filterSensitiveLog(obj.ProxySession) }),
  });
  export const isa = (o: any): o is UpdateProxySessionResponse => __isa(o, "UpdateProxySessionResponse");
}

export interface UpdateRoomMembershipRequest {
  __type?: "UpdateRoomMembershipRequest";
  /**
   * <p>The member ID.</p>
   */
  MemberId: string | undefined;

  /**
   * <p>The role of the member.</p>
   */
  Role?: RoomMembershipRole | string;

  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The room ID.</p>
   */
  RoomId: string | undefined;
}

export namespace UpdateRoomMembershipRequest {
  export const filterSensitiveLog = (obj: UpdateRoomMembershipRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateRoomMembershipRequest => __isa(o, "UpdateRoomMembershipRequest");
}

export interface UpdateRoomMembershipResponse {
  __type?: "UpdateRoomMembershipResponse";
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
  export const isa = (o: any): o is UpdateRoomMembershipResponse => __isa(o, "UpdateRoomMembershipResponse");
}

export interface UpdateRoomRequest {
  __type?: "UpdateRoomRequest";
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
  export const isa = (o: any): o is UpdateRoomRequest => __isa(o, "UpdateRoomRequest");
}

export interface UpdateRoomResponse {
  __type?: "UpdateRoomResponse";
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
  export const isa = (o: any): o is UpdateRoomResponse => __isa(o, "UpdateRoomResponse");
}

export interface UpdateUserRequest {
  __type?: "UpdateUserRequest";
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
   * <p>The Alexa for Business metadata.</p>
   */
  AlexaForBusinessMetadata?: AlexaForBusinessMetadata;

  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The user type.</p>
   */
  UserType?: UserType | string;
}

export namespace UpdateUserRequest {
  export const filterSensitiveLog = (obj: UpdateUserRequest): any => ({
    ...obj,
    ...(obj.AlexaForBusinessMetadata && {
      AlexaForBusinessMetadata: AlexaForBusinessMetadata.filterSensitiveLog(obj.AlexaForBusinessMetadata),
    }),
  });
  export const isa = (o: any): o is UpdateUserRequest => __isa(o, "UpdateUserRequest");
}

/**
 * <p>The user ID and user fields to update, used with the <a>BatchUpdateUser</a> action.</p>
 */
export interface UpdateUserRequestItem {
  __type?: "UpdateUserRequestItem";
  /**
   * <p>The user license type.</p>
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

  /**
   * <p>The user ID.</p>
   */
  UserId: string | undefined;
}

export namespace UpdateUserRequestItem {
  export const filterSensitiveLog = (obj: UpdateUserRequestItem): any => ({
    ...obj,
    ...(obj.AlexaForBusinessMetadata && {
      AlexaForBusinessMetadata: AlexaForBusinessMetadata.filterSensitiveLog(obj.AlexaForBusinessMetadata),
    }),
  });
  export const isa = (o: any): o is UpdateUserRequestItem => __isa(o, "UpdateUserRequestItem");
}

export interface UpdateUserResponse {
  __type?: "UpdateUserResponse";
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
  export const isa = (o: any): o is UpdateUserResponse => __isa(o, "UpdateUserResponse");
}

export interface UpdateUserSettingsRequest {
  __type?: "UpdateUserSettingsRequest";
  /**
   * <p>The user ID.</p>
   */
  UserId: string | undefined;

  /**
   * <p>The user settings to update.</p>
   */
  UserSettings: UserSettings | undefined;

  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
}

export namespace UpdateUserSettingsRequest {
  export const filterSensitiveLog = (obj: UpdateUserSettingsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateUserSettingsRequest => __isa(o, "UpdateUserSettingsRequest");
}

export interface UpdateVoiceConnectorGroupRequest {
  __type?: "UpdateVoiceConnectorGroupRequest";
  /**
   * <p>The <code>VoiceConnectorItems</code> to associate with the group.</p>
   */
  VoiceConnectorItems: VoiceConnectorItem[] | undefined;

  /**
   * <p>The Amazon Chime Voice Connector group ID.</p>
   */
  VoiceConnectorGroupId: string | undefined;

  /**
   * <p>The name of the Amazon Chime Voice Connector group.</p>
   */
  Name: string | undefined;
}

export namespace UpdateVoiceConnectorGroupRequest {
  export const filterSensitiveLog = (obj: UpdateVoiceConnectorGroupRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateVoiceConnectorGroupRequest => __isa(o, "UpdateVoiceConnectorGroupRequest");
}

export interface UpdateVoiceConnectorGroupResponse {
  __type?: "UpdateVoiceConnectorGroupResponse";
  /**
   * <p>The updated Amazon Chime Voice Connector group details.</p>
   */
  VoiceConnectorGroup?: VoiceConnectorGroup;
}

export namespace UpdateVoiceConnectorGroupResponse {
  export const filterSensitiveLog = (obj: UpdateVoiceConnectorGroupResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateVoiceConnectorGroupResponse => __isa(o, "UpdateVoiceConnectorGroupResponse");
}

export interface UpdateVoiceConnectorRequest {
  __type?: "UpdateVoiceConnectorRequest";
  /**
   * <p>The name of the Amazon Chime Voice Connector.</p>
   */
  Name: string | undefined;

  /**
   * <p>When enabled, requires encryption for the Amazon Chime Voice Connector.</p>
   */
  RequireEncryption: boolean | undefined;

  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

export namespace UpdateVoiceConnectorRequest {
  export const filterSensitiveLog = (obj: UpdateVoiceConnectorRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateVoiceConnectorRequest => __isa(o, "UpdateVoiceConnectorRequest");
}

export interface UpdateVoiceConnectorResponse {
  __type?: "UpdateVoiceConnectorResponse";
  /**
   * <p>The updated Amazon Chime Voice Connector details.</p>
   */
  VoiceConnector?: VoiceConnector;
}

export namespace UpdateVoiceConnectorResponse {
  export const filterSensitiveLog = (obj: UpdateVoiceConnectorResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateVoiceConnectorResponse => __isa(o, "UpdateVoiceConnectorResponse");
}

/**
 * <p>The user on the Amazon Chime account.</p>
 */
export interface User {
  __type?: "User";
  /**
   * <p>Date and time when the user is invited to the Amazon Chime account, in ISO 8601
   *       format.</p>
   */
  InvitedOn?: Date;

  /**
   * <p>The display name of the user.</p>
   */
  DisplayName?: string;

  /**
   * <p>Date and time when the user is registered, in ISO 8601 format.</p>
   */
  RegisteredOn?: Date;

  /**
   * <p>The user's personal meeting PIN.</p>
   */
  PersonalPIN?: string;

  /**
   * <p>The user registration status.</p>
   */
  UserRegistrationStatus?: RegistrationStatus | string;

  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId?: string;

  /**
   * <p>The user ID.</p>
   */
  UserId: string | undefined;

  /**
   * <p>The license type for the user.</p>
   */
  LicenseType?: License | string;

  /**
   * <p>The primary phone number associated with the user.</p>
   */
  PrimaryProvisionedNumber?: string;

  /**
   * <p>The primary email address of the user.</p>
   */
  PrimaryEmail?: string;

  /**
   * <p>The Alexa for Business metadata.</p>
   */
  AlexaForBusinessMetadata?: AlexaForBusinessMetadata;

  /**
   * <p>The user type.</p>
   */
  UserType?: UserType | string;

  /**
   * <p>The user invite status.</p>
   */
  UserInvitationStatus?: InviteStatus | string;
}

export namespace User {
  export const filterSensitiveLog = (obj: User): any => ({
    ...obj,
    ...(obj.DisplayName && { DisplayName: SENSITIVE_STRING }),
    ...(obj.PrimaryProvisionedNumber && { PrimaryProvisionedNumber: SENSITIVE_STRING }),
    ...(obj.PrimaryEmail && { PrimaryEmail: SENSITIVE_STRING }),
    ...(obj.AlexaForBusinessMetadata && {
      AlexaForBusinessMetadata: AlexaForBusinessMetadata.filterSensitiveLog(obj.AlexaForBusinessMetadata),
    }),
  });
  export const isa = (o: any): o is User => __isa(o, "User");
}

/**
 * <p>The list of errors returned when errors are encountered during the <a>BatchSuspendUser</a>, <a>BatchUnsuspendUser</a>, or <a>BatchUpdateUser</a> actions. This includes user IDs, error codes, and error
 *       messages.</p>
 */
export interface UserError {
  __type?: "UserError";
  /**
   * <p>The error message.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The error code.</p>
   */
  ErrorCode?: ErrorCode | string;

  /**
   * <p>The user ID for which the action failed.</p>
   */
  UserId?: string;
}

export namespace UserError {
  export const filterSensitiveLog = (obj: UserError): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UserError => __isa(o, "UserError");
}

/**
 * <p>Settings associated with an Amazon Chime user, including inbound and outbound calling and
 *       text messaging.</p>
 */
export interface UserSettings {
  __type?: "UserSettings";
  /**
   * <p>The telephony settings associated with the user.</p>
   */
  Telephony: TelephonySettings | undefined;
}

export namespace UserSettings {
  export const filterSensitiveLog = (obj: UserSettings): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UserSettings => __isa(o, "UserSettings");
}

export enum UserType {
  PrivateUser = "PrivateUser",
  SharedDevice = "SharedDevice",
}

/**
 * <p>The Amazon Chime Voice Connector configuration, including outbound host name and
 *       encryption settings.</p>
 */
export interface VoiceConnector {
  __type?: "VoiceConnector";
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId?: string;

  /**
   * <p>The Amazon Chime Voice Connector creation timestamp, in ISO 8601 format.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The updated Amazon Chime Voice Connector timestamp, in ISO 8601 format.</p>
   */
  UpdatedTimestamp?: Date;

  /**
   * <p>Designates whether encryption is required for the Amazon Chime Voice Connector.</p>
   */
  RequireEncryption?: boolean;

  /**
   * <p>The AWS Region in which the Amazon Chime Voice Connector is created. Default: <code>us-east-1</code>.</p>
   */
  AwsRegion?: VoiceConnectorAwsRegion | string;

  /**
   * <p>The name of the Amazon Chime Voice Connector.</p>
   */
  Name?: string;

  /**
   * <p>The outbound host name for the Amazon Chime Voice Connector.</p>
   */
  OutboundHostName?: string;
}

export namespace VoiceConnector {
  export const filterSensitiveLog = (obj: VoiceConnector): any => ({
    ...obj,
  });
  export const isa = (o: any): o is VoiceConnector => __isa(o, "VoiceConnector");
}

export enum VoiceConnectorAwsRegion {
  US_EAST_1 = "us-east-1",
  US_WEST_2 = "us-west-2",
}

/**
 * <p>The Amazon Chime Voice Connector group configuration, including associated Amazon Chime
 *       Voice Connectors. You can include Amazon Chime Voice Connectors from different AWS Regions in
 *       your group. This creates a fault tolerant mechanism for fallback in case of availability
 *       events.</p>
 */
export interface VoiceConnectorGroup {
  __type?: "VoiceConnectorGroup";
  /**
   * <p>The Amazon Chime Voice Connector group ID.</p>
   */
  VoiceConnectorGroupId?: string;

  /**
   * <p>The updated Amazon Chime Voice Connector group timestamp, in ISO 8601 format.</p>
   */
  UpdatedTimestamp?: Date;

  /**
   * <p>The name of the Amazon Chime Voice Connector group.</p>
   */
  Name?: string;

  /**
   * <p>The Amazon Chime Voice Connectors to which to route inbound calls.</p>
   */
  VoiceConnectorItems?: VoiceConnectorItem[];

  /**
   * <p>The Amazon Chime Voice Connector group creation timestamp, in ISO 8601 format.</p>
   */
  CreatedTimestamp?: Date;
}

export namespace VoiceConnectorGroup {
  export const filterSensitiveLog = (obj: VoiceConnectorGroup): any => ({
    ...obj,
  });
  export const isa = (o: any): o is VoiceConnectorGroup => __isa(o, "VoiceConnectorGroup");
}

/**
 * <p>For Amazon Chime Voice Connector groups, the Amazon Chime Voice Connectors to which to route inbound calls. Includes priority configuration settings. Limit: 3 <code>VoiceConnectorItems</code> per Amazon Chime Voice Connector group.</p>
 */
export interface VoiceConnectorItem {
  __type?: "VoiceConnectorItem";
  /**
   * <p>The priority associated with the Amazon Chime Voice Connector, with 1 being the highest priority. Higher priority Amazon Chime Voice Connectors are attempted first. </p>
   */
  Priority: number | undefined;

  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

export namespace VoiceConnectorItem {
  export const filterSensitiveLog = (obj: VoiceConnectorItem): any => ({
    ...obj,
  });
  export const isa = (o: any): o is VoiceConnectorItem => __isa(o, "VoiceConnectorItem");
}

/**
 * <p>The Amazon Chime Voice Connector settings.
 *       Includes any Amazon S3 buckets designated for storing call detail records.</p>
 */
export interface VoiceConnectorSettings {
  __type?: "VoiceConnectorSettings";
  /**
   * <p>The Amazon S3 bucket designated for call detail record storage.</p>
   */
  CdrBucket?: string;
}

export namespace VoiceConnectorSettings {
  export const filterSensitiveLog = (obj: VoiceConnectorSettings): any => ({
    ...obj,
  });
  export const isa = (o: any): o is VoiceConnectorSettings => __isa(o, "VoiceConnectorSettings");
}
