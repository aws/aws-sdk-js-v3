import {
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>You don't have permissions to perform the requested operation.</p>
 */
export interface AccessDeniedException
  extends __SmithyException,
    $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  Code?: ErrorCode | string;
  Message?: string;
}

export namespace AccessDeniedException {
  export function isa(o: any): o is AccessDeniedException {
    return __isa(o, "AccessDeniedException");
  }
}

/**
 * <p>The Amazon Chime account details. An AWS account can have multiple Amazon Chime accounts.</p>
 */
export interface Account {
  __type?: "Account";
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The Amazon Chime account type. For more information
   *        about different account types, see <a href="https://docs.aws.amazon.com/chime/latest/ag/manage-chime-account.html">Managing Your Amazon Chime Accounts</a> in the
   *        <i>Amazon
   *          Chime Administration Guide</i>.</p>
   */
  AccountType?: AccountType | string;

  /**
   * <p>The AWS account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The Amazon Chime account creation timestamp, in ISO 8601 format.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The default license for the Amazon Chime account.</p>
   */
  DefaultLicense?: License | string;

  /**
   * <p>The Amazon Chime account name.</p>
   */
  Name: string | undefined;

  /**
   * <p>The sign-in delegate groups associated with the account.</p>
   */
  SigninDelegateGroups?: Array<SigninDelegateGroup>;

  /**
   * <p>Supported licenses for the Amazon Chime account.</p>
   */
  SupportedLicenses?: Array<License | string>;
}

export namespace Account {
  export function isa(o: any): o is Account {
    return __isa(o, "Account");
  }
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
  export function isa(o: any): o is AccountSettings {
    return __isa(o, "AccountSettings");
  }
}

export enum AccountType {
  EnterpriseDirectory = "EnterpriseDirectory",
  EnterpriseLWA = "EnterpriseLWA",
  EnterpriseOIDC = "EnterpriseOIDC",
  Team = "Team"
}

/**
 * <p>The Alexa for Business metadata associated with an Amazon Chime user, used to integrate Alexa for Business with a device.</p>
 */
export interface AlexaForBusinessMetadata {
  __type?: "AlexaForBusinessMetadata";
  /**
   * <p>The ARN of the room resource.</p>
   */
  AlexaForBusinessRoomArn?: string;

  /**
   * <p>Starts or stops Alexa for Business.</p>
   */
  IsAlexaForBusinessEnabled?: boolean;
}

export namespace AlexaForBusinessMetadata {
  export function isa(o: any): o is AlexaForBusinessMetadata {
    return __isa(o, "AlexaForBusinessMetadata");
  }
}

export interface AssociatePhoneNumberWithUserRequest {
  __type?: "AssociatePhoneNumberWithUserRequest";
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The phone number, in E.164 format.</p>
   */
  E164PhoneNumber: string | undefined;

  /**
   * <p>The user ID.</p>
   */
  UserId: string | undefined;
}

export namespace AssociatePhoneNumberWithUserRequest {
  export function isa(o: any): o is AssociatePhoneNumberWithUserRequest {
    return __isa(o, "AssociatePhoneNumberWithUserRequest");
  }
}

export interface AssociatePhoneNumberWithUserResponse {
  __type?: "AssociatePhoneNumberWithUserResponse";
}

export namespace AssociatePhoneNumberWithUserResponse {
  export function isa(o: any): o is AssociatePhoneNumberWithUserResponse {
    return __isa(o, "AssociatePhoneNumberWithUserResponse");
  }
}

export interface AssociatePhoneNumbersWithVoiceConnectorGroupRequest {
  __type?: "AssociatePhoneNumbersWithVoiceConnectorGroupRequest";
  /**
   * <p>List of phone numbers, in E.164 format.</p>
   */
  E164PhoneNumbers?: Array<string>;

  /**
   * <p>If true, associates the provided phone numbers with the provided Amazon Chime Voice Connector Group and removes any previously existing associations. If false, does not associate any phone numbers that have previously existing associations.</p>
   */
  ForceAssociate?: boolean;

  /**
   * <p>The Amazon Chime Voice Connector group ID.</p>
   */
  VoiceConnectorGroupId: string | undefined;
}

export namespace AssociatePhoneNumbersWithVoiceConnectorGroupRequest {
  export function isa(
    o: any
  ): o is AssociatePhoneNumbersWithVoiceConnectorGroupRequest {
    return __isa(o, "AssociatePhoneNumbersWithVoiceConnectorGroupRequest");
  }
}

export interface AssociatePhoneNumbersWithVoiceConnectorGroupResponse {
  __type?: "AssociatePhoneNumbersWithVoiceConnectorGroupResponse";
  /**
   * <p>If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages.</p>
   */
  PhoneNumberErrors?: Array<PhoneNumberError>;
}

export namespace AssociatePhoneNumbersWithVoiceConnectorGroupResponse {
  export function isa(
    o: any
  ): o is AssociatePhoneNumbersWithVoiceConnectorGroupResponse {
    return __isa(o, "AssociatePhoneNumbersWithVoiceConnectorGroupResponse");
  }
}

export interface AssociatePhoneNumbersWithVoiceConnectorRequest {
  __type?: "AssociatePhoneNumbersWithVoiceConnectorRequest";
  /**
   * <p>List of phone numbers, in E.164 format.</p>
   */
  E164PhoneNumbers?: Array<string>;

  /**
   * <p>If true, associates the provided phone numbers with the provided Amazon Chime Voice Connector and removes any previously existing associations. If false, does not associate any phone numbers that have previously existing associations.</p>
   */
  ForceAssociate?: boolean;

  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

export namespace AssociatePhoneNumbersWithVoiceConnectorRequest {
  export function isa(
    o: any
  ): o is AssociatePhoneNumbersWithVoiceConnectorRequest {
    return __isa(o, "AssociatePhoneNumbersWithVoiceConnectorRequest");
  }
}

export interface AssociatePhoneNumbersWithVoiceConnectorResponse {
  __type?: "AssociatePhoneNumbersWithVoiceConnectorResponse";
  /**
   * <p>If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages.</p>
   */
  PhoneNumberErrors?: Array<PhoneNumberError>;
}

export namespace AssociatePhoneNumbersWithVoiceConnectorResponse {
  export function isa(
    o: any
  ): o is AssociatePhoneNumbersWithVoiceConnectorResponse {
    return __isa(o, "AssociatePhoneNumbersWithVoiceConnectorResponse");
  }
}

export interface AssociateSigninDelegateGroupsWithAccountRequest {
  __type?: "AssociateSigninDelegateGroupsWithAccountRequest";
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The sign-in delegate groups.</p>
   */
  SigninDelegateGroups: Array<SigninDelegateGroup> | undefined;
}

export namespace AssociateSigninDelegateGroupsWithAccountRequest {
  export function isa(
    o: any
  ): o is AssociateSigninDelegateGroupsWithAccountRequest {
    return __isa(o, "AssociateSigninDelegateGroupsWithAccountRequest");
  }
}

export interface AssociateSigninDelegateGroupsWithAccountResponse {
  __type?: "AssociateSigninDelegateGroupsWithAccountResponse";
}

export namespace AssociateSigninDelegateGroupsWithAccountResponse {
  export function isa(
    o: any
  ): o is AssociateSigninDelegateGroupsWithAccountResponse {
    return __isa(o, "AssociateSigninDelegateGroupsWithAccountResponse");
  }
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
   * <p>The Amazon Chime SDK external user ID. Links the attendee to an identity managed by a builder application.</p>
   */
  ExternalUserId?: string;

  /**
   * <p>The join token used by the Amazon Chime SDK attendee.</p>
   */
  JoinToken?: string;
}

export namespace Attendee {
  export function isa(o: any): o is Attendee {
    return __isa(o, "Attendee");
  }
}

/**
 * <p>The input parameters don't match the service's restrictions.</p>
 */
export interface BadRequestException
  extends __SmithyException,
    $MetadataBearer {
  name: "BadRequestException";
  $fault: "client";
  Code?: ErrorCode | string;
  Message?: string;
}

export namespace BadRequestException {
  export function isa(o: any): o is BadRequestException {
    return __isa(o, "BadRequestException");
  }
}

export interface BatchCreateAttendeeRequest {
  __type?: "BatchCreateAttendeeRequest";
  /**
   * <p>The request containing the attendees to create.</p>
   */
  Attendees: Array<CreateAttendeeRequestItem> | undefined;

  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;
}

export namespace BatchCreateAttendeeRequest {
  export function isa(o: any): o is BatchCreateAttendeeRequest {
    return __isa(o, "BatchCreateAttendeeRequest");
  }
}

export interface BatchCreateAttendeeResponse {
  __type?: "BatchCreateAttendeeResponse";
  /**
   * <p>The attendee information, including attendees IDs and join tokens.</p>
   */
  Attendees?: Array<Attendee>;

  /**
   * <p>If the action fails for one or more of the attendees in the request, a list of the attendees is returned, along with error codes and error messages.</p>
   */
  Errors?: Array<CreateAttendeeError>;
}

export namespace BatchCreateAttendeeResponse {
  export function isa(o: any): o is BatchCreateAttendeeResponse {
    return __isa(o, "BatchCreateAttendeeResponse");
  }
}

export interface BatchCreateRoomMembershipRequest {
  __type?: "BatchCreateRoomMembershipRequest";
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The list of membership items.</p>
   */
  MembershipItemList: Array<MembershipItem> | undefined;

  /**
   * <p>The room ID.</p>
   */
  RoomId: string | undefined;
}

export namespace BatchCreateRoomMembershipRequest {
  export function isa(o: any): o is BatchCreateRoomMembershipRequest {
    return __isa(o, "BatchCreateRoomMembershipRequest");
  }
}

export interface BatchCreateRoomMembershipResponse {
  __type?: "BatchCreateRoomMembershipResponse";
  /**
   * <p>If the action fails for one or more of the member IDs in the request, a list of the member IDs is returned, along with error codes and error messages.</p>
   */
  Errors?: Array<MemberError>;
}

export namespace BatchCreateRoomMembershipResponse {
  export function isa(o: any): o is BatchCreateRoomMembershipResponse {
    return __isa(o, "BatchCreateRoomMembershipResponse");
  }
}

export interface BatchDeletePhoneNumberRequest {
  __type?: "BatchDeletePhoneNumberRequest";
  /**
   * <p>List of phone number IDs.</p>
   */
  PhoneNumberIds: Array<string> | undefined;
}

export namespace BatchDeletePhoneNumberRequest {
  export function isa(o: any): o is BatchDeletePhoneNumberRequest {
    return __isa(o, "BatchDeletePhoneNumberRequest");
  }
}

export interface BatchDeletePhoneNumberResponse {
  __type?: "BatchDeletePhoneNumberResponse";
  /**
   * <p>If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages.</p>
   */
  PhoneNumberErrors?: Array<PhoneNumberError>;
}

export namespace BatchDeletePhoneNumberResponse {
  export function isa(o: any): o is BatchDeletePhoneNumberResponse {
    return __isa(o, "BatchDeletePhoneNumberResponse");
  }
}

export interface BatchSuspendUserRequest {
  __type?: "BatchSuspendUserRequest";
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The request containing the user IDs to suspend.</p>
   */
  UserIdList: Array<string> | undefined;
}

export namespace BatchSuspendUserRequest {
  export function isa(o: any): o is BatchSuspendUserRequest {
    return __isa(o, "BatchSuspendUserRequest");
  }
}

export interface BatchSuspendUserResponse {
  __type?: "BatchSuspendUserResponse";
  /**
   * <p>If the <a>BatchSuspendUser</a> action fails for one
   *       or more of the user IDs in the request, a list of the user IDs is returned, along with error
   *       codes and error messages.</p>
   */
  UserErrors?: Array<UserError>;
}

export namespace BatchSuspendUserResponse {
  export function isa(o: any): o is BatchSuspendUserResponse {
    return __isa(o, "BatchSuspendUserResponse");
  }
}

export interface BatchUnsuspendUserRequest {
  __type?: "BatchUnsuspendUserRequest";
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The request containing the user IDs to unsuspend.</p>
   */
  UserIdList: Array<string> | undefined;
}

export namespace BatchUnsuspendUserRequest {
  export function isa(o: any): o is BatchUnsuspendUserRequest {
    return __isa(o, "BatchUnsuspendUserRequest");
  }
}

export interface BatchUnsuspendUserResponse {
  __type?: "BatchUnsuspendUserResponse";
  /**
   * <p>If the <a>BatchUnsuspendUser</a> action fails for one
   *       or more of the user IDs in the request, a list of the user IDs is returned, along with error
   *       codes and error messages.</p>
   */
  UserErrors?: Array<UserError>;
}

export namespace BatchUnsuspendUserResponse {
  export function isa(o: any): o is BatchUnsuspendUserResponse {
    return __isa(o, "BatchUnsuspendUserResponse");
  }
}

export interface BatchUpdatePhoneNumberRequest {
  __type?: "BatchUpdatePhoneNumberRequest";
  /**
   * <p>The request containing the phone number IDs and product types or calling names to update.</p>
   */
  UpdatePhoneNumberRequestItems:
    | Array<UpdatePhoneNumberRequestItem>
    | undefined;
}

export namespace BatchUpdatePhoneNumberRequest {
  export function isa(o: any): o is BatchUpdatePhoneNumberRequest {
    return __isa(o, "BatchUpdatePhoneNumberRequest");
  }
}

export interface BatchUpdatePhoneNumberResponse {
  __type?: "BatchUpdatePhoneNumberResponse";
  /**
   * <p>If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages.</p>
   */
  PhoneNumberErrors?: Array<PhoneNumberError>;
}

export namespace BatchUpdatePhoneNumberResponse {
  export function isa(o: any): o is BatchUpdatePhoneNumberResponse {
    return __isa(o, "BatchUpdatePhoneNumberResponse");
  }
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
  UpdateUserRequestItems: Array<UpdateUserRequestItem> | undefined;
}

export namespace BatchUpdateUserRequest {
  export function isa(o: any): o is BatchUpdateUserRequest {
    return __isa(o, "BatchUpdateUserRequest");
  }
}

export interface BatchUpdateUserResponse {
  __type?: "BatchUpdateUserResponse";
  /**
   * <p>If the <a>BatchUpdateUser</a> action fails for one
   *       or more of the user IDs in the request, a list of the user IDs is returned, along with error
   *       codes and error messages.</p>
   */
  UserErrors?: Array<UserError>;
}

export namespace BatchUpdateUserResponse {
  export function isa(o: any): o is BatchUpdateUserResponse {
    return __isa(o, "BatchUpdateUserResponse");
  }
}

/**
 * <p>A resource that allows Enterprise account administrators to configure an interface to receive events from Amazon Chime.</p>
 */
export interface Bot {
  __type?: "Bot";
  /**
   * <p>The bot email address.</p>
   */
  BotEmail?: string;

  /**
   * <p>The bot ID.</p>
   */
  BotId?: string;

  /**
   * <p>The bot type.</p>
   */
  BotType?: BotType | string;

  /**
   * <p>The bot creation timestamp, in ISO 8601 format.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>When true, the bot is stopped from running in your account.</p>
   */
  Disabled?: boolean;

  /**
   * <p>The bot display name.</p>
   */
  DisplayName?: string;

  /**
   * <p>The security token used to authenticate Amazon Chime with the outgoing event endpoint.</p>
   */
  SecurityToken?: string;

  /**
   * <p>The updated bot timestamp, in ISO 8601 format.</p>
   */
  UpdatedTimestamp?: Date;

  /**
   * <p>The unique ID for the bot user.</p>
   */
  UserId?: string;
}

export namespace Bot {
  export function isa(o: any): o is Bot {
    return __isa(o, "Bot");
  }
}

export enum BotType {
  ChatBot = "ChatBot"
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
  export function isa(o: any): o is BusinessCallingSettings {
    return __isa(o, "BusinessCallingSettings");
  }
}

export enum CallingNameStatus {
  Unassigned = "Unassigned",
  UpdateFailed = "UpdateFailed",
  UpdateInProgress = "UpdateInProgress",
  UpdateSucceeded = "UpdateSucceeded"
}

/**
 * <p>The request could not be processed because of conflict in the current state of the
 *        resource.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  Code?: ErrorCode | string;
  Message?: string;
}

export namespace ConflictException {
  export function isa(o: any): o is ConflictException {
    return __isa(o, "ConflictException");
  }
}

export interface CreateAccountRequest {
  __type?: "CreateAccountRequest";
  /**
   * <p>The name of the Amazon Chime account.</p>
   */
  Name: string | undefined;
}

export namespace CreateAccountRequest {
  export function isa(o: any): o is CreateAccountRequest {
    return __isa(o, "CreateAccountRequest");
  }
}

export interface CreateAccountResponse {
  __type?: "CreateAccountResponse";
  /**
   * <p>The Amazon Chime account details.</p>
   */
  Account?: Account;
}

export namespace CreateAccountResponse {
  export function isa(o: any): o is CreateAccountResponse {
    return __isa(o, "CreateAccountResponse");
  }
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
   * <p>The error message.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The Amazon Chime SDK external user ID. Links the attendee to an identity managed by a builder application.</p>
   */
  ExternalUserId?: string;
}

export namespace CreateAttendeeError {
  export function isa(o: any): o is CreateAttendeeError {
    return __isa(o, "CreateAttendeeError");
  }
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
}

export namespace CreateAttendeeRequest {
  export function isa(o: any): o is CreateAttendeeRequest {
    return __isa(o, "CreateAttendeeRequest");
  }
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
}

export namespace CreateAttendeeRequestItem {
  export function isa(o: any): o is CreateAttendeeRequestItem {
    return __isa(o, "CreateAttendeeRequestItem");
  }
}

export interface CreateAttendeeResponse {
  __type?: "CreateAttendeeResponse";
  /**
   * <p>The attendee information, including attendee ID and join token.</p>
   */
  Attendee?: Attendee;
}

export namespace CreateAttendeeResponse {
  export function isa(o: any): o is CreateAttendeeResponse {
    return __isa(o, "CreateAttendeeResponse");
  }
}

export interface CreateBotRequest {
  __type?: "CreateBotRequest";
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
  export function isa(o: any): o is CreateBotRequest {
    return __isa(o, "CreateBotRequest");
  }
}

export interface CreateBotResponse {
  __type?: "CreateBotResponse";
  /**
   * <p>The bot details.</p>
   */
  Bot?: Bot;
}

export namespace CreateBotResponse {
  export function isa(o: any): o is CreateBotResponse {
    return __isa(o, "CreateBotResponse");
  }
}

export interface CreateMeetingRequest {
  __type?: "CreateMeetingRequest";
  /**
   * <p>The unique identifier for the client request. Use a different token for different meetings.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The Region in which to create the meeting. Available values: <code>ap-northeast-1</code>, <code>ap-southeast-1</code>, <code>ap-southeast-2</code>, <code>ca-central-1</code>, <code>eu-central-1</code>, <code>eu-north-1</code>, <code>eu-west-1</code>, <code>eu-west-2</code>, <code>eu-west-3</code>, <code>sa-east-1</code>, <code>us-east-1</code>, <code>us-east-2</code>, <code>us-west-1</code>, <code>us-west-2</code>.</p>
   */
  MediaRegion?: string;

  /**
   * <p>Reserved.</p>
   */
  MeetingHostId?: string;

  /**
   * <p>The configuration for resource targets to receive notifications when meeting and attendee events occur.</p>
   */
  NotificationsConfiguration?: MeetingNotificationConfiguration;
}

export namespace CreateMeetingRequest {
  export function isa(o: any): o is CreateMeetingRequest {
    return __isa(o, "CreateMeetingRequest");
  }
}

export interface CreateMeetingResponse {
  __type?: "CreateMeetingResponse";
  /**
   * <p>The meeting information, including the meeting ID and <code>MediaPlacement</code>.</p>
   */
  Meeting?: Meeting;
}

export namespace CreateMeetingResponse {
  export function isa(o: any): o is CreateMeetingResponse {
    return __isa(o, "CreateMeetingResponse");
  }
}

export interface CreatePhoneNumberOrderRequest {
  __type?: "CreatePhoneNumberOrderRequest";
  /**
   * <p>List of phone numbers, in E.164 format.</p>
   */
  E164PhoneNumbers: Array<string> | undefined;

  /**
   * <p>The phone number product type.</p>
   */
  ProductType: PhoneNumberProductType | string | undefined;
}

export namespace CreatePhoneNumberOrderRequest {
  export function isa(o: any): o is CreatePhoneNumberOrderRequest {
    return __isa(o, "CreatePhoneNumberOrderRequest");
  }
}

export interface CreatePhoneNumberOrderResponse {
  __type?: "CreatePhoneNumberOrderResponse";
  /**
   * <p>The phone number order details.</p>
   */
  PhoneNumberOrder?: PhoneNumberOrder;
}

export namespace CreatePhoneNumberOrderResponse {
  export function isa(o: any): o is CreatePhoneNumberOrderResponse {
    return __isa(o, "CreatePhoneNumberOrderResponse");
  }
}

export interface CreateRoomMembershipRequest {
  __type?: "CreateRoomMembershipRequest";
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The Amazon Chime member ID (user ID or bot ID).</p>
   */
  MemberId: string | undefined;

  /**
   * <p>The role of the member.</p>
   */
  Role?: RoomMembershipRole | string;

  /**
   * <p>The room ID.</p>
   */
  RoomId: string | undefined;
}

export namespace CreateRoomMembershipRequest {
  export function isa(o: any): o is CreateRoomMembershipRequest {
    return __isa(o, "CreateRoomMembershipRequest");
  }
}

export interface CreateRoomMembershipResponse {
  __type?: "CreateRoomMembershipResponse";
  /**
   * <p>The room membership details.</p>
   */
  RoomMembership?: RoomMembership;
}

export namespace CreateRoomMembershipResponse {
  export function isa(o: any): o is CreateRoomMembershipResponse {
    return __isa(o, "CreateRoomMembershipResponse");
  }
}

export interface CreateRoomRequest {
  __type?: "CreateRoomRequest";
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The idempotency token for the request.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The room name.</p>
   */
  Name: string | undefined;
}

export namespace CreateRoomRequest {
  export function isa(o: any): o is CreateRoomRequest {
    return __isa(o, "CreateRoomRequest");
  }
}

export interface CreateRoomResponse {
  __type?: "CreateRoomResponse";
  /**
   * <p>The room details.</p>
   */
  Room?: Room;
}

export namespace CreateRoomResponse {
  export function isa(o: any): o is CreateRoomResponse {
    return __isa(o, "CreateRoomResponse");
  }
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
  export function isa(o: any): o is CreateUserRequest {
    return __isa(o, "CreateUserRequest");
  }
}

export interface CreateUserResponse {
  __type?: "CreateUserResponse";
  /**
   * <p>The user on the Amazon Chime account.</p>
   */
  User?: User;
}

export namespace CreateUserResponse {
  export function isa(o: any): o is CreateUserResponse {
    return __isa(o, "CreateUserResponse");
  }
}

export interface CreateVoiceConnectorGroupRequest {
  __type?: "CreateVoiceConnectorGroupRequest";
  /**
   * <p>The name of the Amazon Chime Voice Connector group.</p>
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Chime Voice Connectors to route inbound calls to.</p>
   */
  VoiceConnectorItems?: Array<VoiceConnectorItem>;
}

export namespace CreateVoiceConnectorGroupRequest {
  export function isa(o: any): o is CreateVoiceConnectorGroupRequest {
    return __isa(o, "CreateVoiceConnectorGroupRequest");
  }
}

export interface CreateVoiceConnectorGroupResponse {
  __type?: "CreateVoiceConnectorGroupResponse";
  /**
   * <p>The Amazon Chime Voice Connector group details.</p>
   */
  VoiceConnectorGroup?: VoiceConnectorGroup;
}

export namespace CreateVoiceConnectorGroupResponse {
  export function isa(o: any): o is CreateVoiceConnectorGroupResponse {
    return __isa(o, "CreateVoiceConnectorGroupResponse");
  }
}

export interface CreateVoiceConnectorRequest {
  __type?: "CreateVoiceConnectorRequest";
  /**
   * <p>The AWS Region in which the Amazon Chime Voice Connector is created. Default value: <code>us-east-1</code>.</p>
   */
  AwsRegion?: VoiceConnectorAwsRegion | string;

  /**
   * <p>The name of the Amazon Chime Voice Connector.</p>
   */
  Name: string | undefined;

  /**
   * <p>When enabled, requires encryption for the Amazon Chime Voice Connector.</p>
   */
  RequireEncryption: boolean | undefined;
}

export namespace CreateVoiceConnectorRequest {
  export function isa(o: any): o is CreateVoiceConnectorRequest {
    return __isa(o, "CreateVoiceConnectorRequest");
  }
}

export interface CreateVoiceConnectorResponse {
  __type?: "CreateVoiceConnectorResponse";
  /**
   * <p>The Amazon Chime Voice Connector details.</p>
   */
  VoiceConnector?: VoiceConnector;
}

export namespace CreateVoiceConnectorResponse {
  export function isa(o: any): o is CreateVoiceConnectorResponse {
    return __isa(o, "CreateVoiceConnectorResponse");
  }
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
  export function isa(o: any): o is Credential {
    return __isa(o, "Credential");
  }
}

export interface DeleteAccountRequest {
  __type?: "DeleteAccountRequest";
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
}

export namespace DeleteAccountRequest {
  export function isa(o: any): o is DeleteAccountRequest {
    return __isa(o, "DeleteAccountRequest");
  }
}

export interface DeleteAccountResponse {
  __type?: "DeleteAccountResponse";
}

export namespace DeleteAccountResponse {
  export function isa(o: any): o is DeleteAccountResponse {
    return __isa(o, "DeleteAccountResponse");
  }
}

export interface DeleteAttendeeRequest {
  __type?: "DeleteAttendeeRequest";
  /**
   * <p>The Amazon Chime SDK attendee ID.</p>
   */
  AttendeeId: string | undefined;

  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;
}

export namespace DeleteAttendeeRequest {
  export function isa(o: any): o is DeleteAttendeeRequest {
    return __isa(o, "DeleteAttendeeRequest");
  }
}

export interface DeleteEventsConfigurationRequest {
  __type?: "DeleteEventsConfigurationRequest";
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
  export function isa(o: any): o is DeleteEventsConfigurationRequest {
    return __isa(o, "DeleteEventsConfigurationRequest");
  }
}

export interface DeleteMeetingRequest {
  __type?: "DeleteMeetingRequest";
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;
}

export namespace DeleteMeetingRequest {
  export function isa(o: any): o is DeleteMeetingRequest {
    return __isa(o, "DeleteMeetingRequest");
  }
}

export interface DeletePhoneNumberRequest {
  __type?: "DeletePhoneNumberRequest";
  /**
   * <p>The phone number ID.</p>
   */
  PhoneNumberId: string | undefined;
}

export namespace DeletePhoneNumberRequest {
  export function isa(o: any): o is DeletePhoneNumberRequest {
    return __isa(o, "DeletePhoneNumberRequest");
  }
}

export interface DeleteRoomMembershipRequest {
  __type?: "DeleteRoomMembershipRequest";
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The member ID (user ID or bot ID).</p>
   */
  MemberId: string | undefined;

  /**
   * <p>The room ID.</p>
   */
  RoomId: string | undefined;
}

export namespace DeleteRoomMembershipRequest {
  export function isa(o: any): o is DeleteRoomMembershipRequest {
    return __isa(o, "DeleteRoomMembershipRequest");
  }
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
  export function isa(o: any): o is DeleteRoomRequest {
    return __isa(o, "DeleteRoomRequest");
  }
}

export interface DeleteVoiceConnectorGroupRequest {
  __type?: "DeleteVoiceConnectorGroupRequest";
  /**
   * <p>The Amazon Chime Voice Connector group ID.</p>
   */
  VoiceConnectorGroupId: string | undefined;
}

export namespace DeleteVoiceConnectorGroupRequest {
  export function isa(o: any): o is DeleteVoiceConnectorGroupRequest {
    return __isa(o, "DeleteVoiceConnectorGroupRequest");
  }
}

export interface DeleteVoiceConnectorOriginationRequest {
  __type?: "DeleteVoiceConnectorOriginationRequest";
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

export namespace DeleteVoiceConnectorOriginationRequest {
  export function isa(o: any): o is DeleteVoiceConnectorOriginationRequest {
    return __isa(o, "DeleteVoiceConnectorOriginationRequest");
  }
}

export interface DeleteVoiceConnectorRequest {
  __type?: "DeleteVoiceConnectorRequest";
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

export namespace DeleteVoiceConnectorRequest {
  export function isa(o: any): o is DeleteVoiceConnectorRequest {
    return __isa(o, "DeleteVoiceConnectorRequest");
  }
}

export interface DeleteVoiceConnectorStreamingConfigurationRequest {
  __type?: "DeleteVoiceConnectorStreamingConfigurationRequest";
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

export namespace DeleteVoiceConnectorStreamingConfigurationRequest {
  export function isa(
    o: any
  ): o is DeleteVoiceConnectorStreamingConfigurationRequest {
    return __isa(o, "DeleteVoiceConnectorStreamingConfigurationRequest");
  }
}

export interface DeleteVoiceConnectorTerminationCredentialsRequest {
  __type?: "DeleteVoiceConnectorTerminationCredentialsRequest";
  /**
   * <p>The RFC2617 compliant username associated with the SIP credentials, in US-ASCII format.</p>
   */
  Usernames?: Array<string>;

  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

export namespace DeleteVoiceConnectorTerminationCredentialsRequest {
  export function isa(
    o: any
  ): o is DeleteVoiceConnectorTerminationCredentialsRequest {
    return __isa(o, "DeleteVoiceConnectorTerminationCredentialsRequest");
  }
}

export interface DeleteVoiceConnectorTerminationRequest {
  __type?: "DeleteVoiceConnectorTerminationRequest";
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

export namespace DeleteVoiceConnectorTerminationRequest {
  export function isa(o: any): o is DeleteVoiceConnectorTerminationRequest {
    return __isa(o, "DeleteVoiceConnectorTerminationRequest");
  }
}

export interface DisassociatePhoneNumberFromUserRequest {
  __type?: "DisassociatePhoneNumberFromUserRequest";
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
  export function isa(o: any): o is DisassociatePhoneNumberFromUserRequest {
    return __isa(o, "DisassociatePhoneNumberFromUserRequest");
  }
}

export interface DisassociatePhoneNumberFromUserResponse {
  __type?: "DisassociatePhoneNumberFromUserResponse";
}

export namespace DisassociatePhoneNumberFromUserResponse {
  export function isa(o: any): o is DisassociatePhoneNumberFromUserResponse {
    return __isa(o, "DisassociatePhoneNumberFromUserResponse");
  }
}

export interface DisassociatePhoneNumbersFromVoiceConnectorGroupRequest {
  __type?: "DisassociatePhoneNumbersFromVoiceConnectorGroupRequest";
  /**
   * <p>List of phone numbers, in E.164 format.</p>
   */
  E164PhoneNumbers?: Array<string>;

  /**
   * <p>The Amazon Chime Voice Connector group ID.</p>
   */
  VoiceConnectorGroupId: string | undefined;
}

export namespace DisassociatePhoneNumbersFromVoiceConnectorGroupRequest {
  export function isa(
    o: any
  ): o is DisassociatePhoneNumbersFromVoiceConnectorGroupRequest {
    return __isa(o, "DisassociatePhoneNumbersFromVoiceConnectorGroupRequest");
  }
}

export interface DisassociatePhoneNumbersFromVoiceConnectorGroupResponse {
  __type?: "DisassociatePhoneNumbersFromVoiceConnectorGroupResponse";
  /**
   * <p>If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages.</p>
   */
  PhoneNumberErrors?: Array<PhoneNumberError>;
}

export namespace DisassociatePhoneNumbersFromVoiceConnectorGroupResponse {
  export function isa(
    o: any
  ): o is DisassociatePhoneNumbersFromVoiceConnectorGroupResponse {
    return __isa(o, "DisassociatePhoneNumbersFromVoiceConnectorGroupResponse");
  }
}

export interface DisassociatePhoneNumbersFromVoiceConnectorRequest {
  __type?: "DisassociatePhoneNumbersFromVoiceConnectorRequest";
  /**
   * <p>List of phone numbers, in E.164 format.</p>
   */
  E164PhoneNumbers?: Array<string>;

  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

export namespace DisassociatePhoneNumbersFromVoiceConnectorRequest {
  export function isa(
    o: any
  ): o is DisassociatePhoneNumbersFromVoiceConnectorRequest {
    return __isa(o, "DisassociatePhoneNumbersFromVoiceConnectorRequest");
  }
}

export interface DisassociatePhoneNumbersFromVoiceConnectorResponse {
  __type?: "DisassociatePhoneNumbersFromVoiceConnectorResponse";
  /**
   * <p>If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages.</p>
   */
  PhoneNumberErrors?: Array<PhoneNumberError>;
}

export namespace DisassociatePhoneNumbersFromVoiceConnectorResponse {
  export function isa(
    o: any
  ): o is DisassociatePhoneNumbersFromVoiceConnectorResponse {
    return __isa(o, "DisassociatePhoneNumbersFromVoiceConnectorResponse");
  }
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
  GroupNames: Array<string> | undefined;
}

export namespace DisassociateSigninDelegateGroupsFromAccountRequest {
  export function isa(
    o: any
  ): o is DisassociateSigninDelegateGroupsFromAccountRequest {
    return __isa(o, "DisassociateSigninDelegateGroupsFromAccountRequest");
  }
}

export interface DisassociateSigninDelegateGroupsFromAccountResponse {
  __type?: "DisassociateSigninDelegateGroupsFromAccountResponse";
}

export namespace DisassociateSigninDelegateGroupsFromAccountResponse {
  export function isa(
    o: any
  ): o is DisassociateSigninDelegateGroupsFromAccountResponse {
    return __isa(o, "DisassociateSigninDelegateGroupsFromAccountResponse");
  }
}

export enum EmailStatus {
  Failed = "Failed",
  NotSent = "NotSent",
  Sent = "Sent"
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
  VoiceConnectorGroupAssociationsExist = "VoiceConnectorGroupAssociationsExist"
}

/**
 * <p>The configuration that allows a bot to receive outgoing events. Can be either an HTTPS endpoint or a Lambda function ARN.</p>
 */
export interface EventsConfiguration {
  __type?: "EventsConfiguration";
  /**
   * <p>The bot ID.</p>
   */
  BotId?: string;

  /**
   * <p>Lambda function ARN that allows a bot to receive outgoing events.</p>
   */
  LambdaFunctionArn?: string;

  /**
   * <p>HTTPS endpoint that allows a bot to receive outgoing events.</p>
   */
  OutboundEventsHTTPSEndpoint?: string;
}

export namespace EventsConfiguration {
  export function isa(o: any): o is EventsConfiguration {
    return __isa(o, "EventsConfiguration");
  }
}

/**
 * <p>The client is permanently forbidden from making the request. For example, when a user
 *         tries to create an account from an unsupported Region.</p>
 */
export interface ForbiddenException extends __SmithyException, $MetadataBearer {
  name: "ForbiddenException";
  $fault: "client";
  Code?: ErrorCode | string;
  Message?: string;
}

export namespace ForbiddenException {
  export function isa(o: any): o is ForbiddenException {
    return __isa(o, "ForbiddenException");
  }
}

export interface GetAccountRequest {
  __type?: "GetAccountRequest";
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
}

export namespace GetAccountRequest {
  export function isa(o: any): o is GetAccountRequest {
    return __isa(o, "GetAccountRequest");
  }
}

export interface GetAccountResponse {
  __type?: "GetAccountResponse";
  /**
   * <p>The Amazon Chime account details.</p>
   */
  Account?: Account;
}

export namespace GetAccountResponse {
  export function isa(o: any): o is GetAccountResponse {
    return __isa(o, "GetAccountResponse");
  }
}

export interface GetAccountSettingsRequest {
  __type?: "GetAccountSettingsRequest";
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
}

export namespace GetAccountSettingsRequest {
  export function isa(o: any): o is GetAccountSettingsRequest {
    return __isa(o, "GetAccountSettingsRequest");
  }
}

export interface GetAccountSettingsResponse {
  __type?: "GetAccountSettingsResponse";
  /**
   * <p>The Amazon Chime account settings.</p>
   */
  AccountSettings?: AccountSettings;
}

export namespace GetAccountSettingsResponse {
  export function isa(o: any): o is GetAccountSettingsResponse {
    return __isa(o, "GetAccountSettingsResponse");
  }
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
  export function isa(o: any): o is GetAttendeeRequest {
    return __isa(o, "GetAttendeeRequest");
  }
}

export interface GetAttendeeResponse {
  __type?: "GetAttendeeResponse";
  /**
   * <p>The Amazon Chime SDK attendee information.</p>
   */
  Attendee?: Attendee;
}

export namespace GetAttendeeResponse {
  export function isa(o: any): o is GetAttendeeResponse {
    return __isa(o, "GetAttendeeResponse");
  }
}

export interface GetBotRequest {
  __type?: "GetBotRequest";
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
  export function isa(o: any): o is GetBotRequest {
    return __isa(o, "GetBotRequest");
  }
}

export interface GetBotResponse {
  __type?: "GetBotResponse";
  /**
   * <p>The chat bot details.</p>
   */
  Bot?: Bot;
}

export namespace GetBotResponse {
  export function isa(o: any): o is GetBotResponse {
    return __isa(o, "GetBotResponse");
  }
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
  export function isa(o: any): o is GetEventsConfigurationRequest {
    return __isa(o, "GetEventsConfigurationRequest");
  }
}

export interface GetEventsConfigurationResponse {
  __type?: "GetEventsConfigurationResponse";
  /**
   * <p>The events configuration details.</p>
   */
  EventsConfiguration?: EventsConfiguration;
}

export namespace GetEventsConfigurationResponse {
  export function isa(o: any): o is GetEventsConfigurationResponse {
    return __isa(o, "GetEventsConfigurationResponse");
  }
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
  export function isa(o: any): o is GetGlobalSettingsResponse {
    return __isa(o, "GetGlobalSettingsResponse");
  }
}

export interface GetMeetingRequest {
  __type?: "GetMeetingRequest";
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;
}

export namespace GetMeetingRequest {
  export function isa(o: any): o is GetMeetingRequest {
    return __isa(o, "GetMeetingRequest");
  }
}

export interface GetMeetingResponse {
  __type?: "GetMeetingResponse";
  /**
   * <p>The Amazon Chime SDK meeting information.</p>
   */
  Meeting?: Meeting;
}

export namespace GetMeetingResponse {
  export function isa(o: any): o is GetMeetingResponse {
    return __isa(o, "GetMeetingResponse");
  }
}

export interface GetPhoneNumberOrderRequest {
  __type?: "GetPhoneNumberOrderRequest";
  /**
   * <p>The ID for the phone number order.</p>
   */
  PhoneNumberOrderId: string | undefined;
}

export namespace GetPhoneNumberOrderRequest {
  export function isa(o: any): o is GetPhoneNumberOrderRequest {
    return __isa(o, "GetPhoneNumberOrderRequest");
  }
}

export interface GetPhoneNumberOrderResponse {
  __type?: "GetPhoneNumberOrderResponse";
  /**
   * <p>The phone number order details.</p>
   */
  PhoneNumberOrder?: PhoneNumberOrder;
}

export namespace GetPhoneNumberOrderResponse {
  export function isa(o: any): o is GetPhoneNumberOrderResponse {
    return __isa(o, "GetPhoneNumberOrderResponse");
  }
}

export interface GetPhoneNumberRequest {
  __type?: "GetPhoneNumberRequest";
  /**
   * <p>The phone number ID.</p>
   */
  PhoneNumberId: string | undefined;
}

export namespace GetPhoneNumberRequest {
  export function isa(o: any): o is GetPhoneNumberRequest {
    return __isa(o, "GetPhoneNumberRequest");
  }
}

export interface GetPhoneNumberResponse {
  __type?: "GetPhoneNumberResponse";
  /**
   * <p>The phone number details.</p>
   */
  PhoneNumber?: PhoneNumber;
}

export namespace GetPhoneNumberResponse {
  export function isa(o: any): o is GetPhoneNumberResponse {
    return __isa(o, "GetPhoneNumberResponse");
  }
}

export interface GetPhoneNumberSettingsResponse {
  __type?: "GetPhoneNumberSettingsResponse";
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
  export function isa(o: any): o is GetPhoneNumberSettingsResponse {
    return __isa(o, "GetPhoneNumberSettingsResponse");
  }
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
  export function isa(o: any): o is GetRoomRequest {
    return __isa(o, "GetRoomRequest");
  }
}

export interface GetRoomResponse {
  __type?: "GetRoomResponse";
  /**
   * <p>The room details.</p>
   */
  Room?: Room;
}

export namespace GetRoomResponse {
  export function isa(o: any): o is GetRoomResponse {
    return __isa(o, "GetRoomResponse");
  }
}

export interface GetUserRequest {
  __type?: "GetUserRequest";
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
  export function isa(o: any): o is GetUserRequest {
    return __isa(o, "GetUserRequest");
  }
}

export interface GetUserResponse {
  __type?: "GetUserResponse";
  /**
   * <p>The user details.</p>
   */
  User?: User;
}

export namespace GetUserResponse {
  export function isa(o: any): o is GetUserResponse {
    return __isa(o, "GetUserResponse");
  }
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
  export function isa(o: any): o is GetUserSettingsRequest {
    return __isa(o, "GetUserSettingsRequest");
  }
}

export interface GetUserSettingsResponse {
  __type?: "GetUserSettingsResponse";
  /**
   * <p>The user settings.</p>
   */
  UserSettings?: UserSettings;
}

export namespace GetUserSettingsResponse {
  export function isa(o: any): o is GetUserSettingsResponse {
    return __isa(o, "GetUserSettingsResponse");
  }
}

export interface GetVoiceConnectorGroupRequest {
  __type?: "GetVoiceConnectorGroupRequest";
  /**
   * <p>The Amazon Chime Voice Connector group ID.</p>
   */
  VoiceConnectorGroupId: string | undefined;
}

export namespace GetVoiceConnectorGroupRequest {
  export function isa(o: any): o is GetVoiceConnectorGroupRequest {
    return __isa(o, "GetVoiceConnectorGroupRequest");
  }
}

export interface GetVoiceConnectorGroupResponse {
  __type?: "GetVoiceConnectorGroupResponse";
  /**
   * <p>The Amazon Chime Voice Connector group details.</p>
   */
  VoiceConnectorGroup?: VoiceConnectorGroup;
}

export namespace GetVoiceConnectorGroupResponse {
  export function isa(o: any): o is GetVoiceConnectorGroupResponse {
    return __isa(o, "GetVoiceConnectorGroupResponse");
  }
}

export interface GetVoiceConnectorLoggingConfigurationRequest {
  __type?: "GetVoiceConnectorLoggingConfigurationRequest";
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

export namespace GetVoiceConnectorLoggingConfigurationRequest {
  export function isa(
    o: any
  ): o is GetVoiceConnectorLoggingConfigurationRequest {
    return __isa(o, "GetVoiceConnectorLoggingConfigurationRequest");
  }
}

export interface GetVoiceConnectorLoggingConfigurationResponse {
  __type?: "GetVoiceConnectorLoggingConfigurationResponse";
  /**
   * <p>The logging configuration details.</p>
   */
  LoggingConfiguration?: LoggingConfiguration;
}

export namespace GetVoiceConnectorLoggingConfigurationResponse {
  export function isa(
    o: any
  ): o is GetVoiceConnectorLoggingConfigurationResponse {
    return __isa(o, "GetVoiceConnectorLoggingConfigurationResponse");
  }
}

export interface GetVoiceConnectorOriginationRequest {
  __type?: "GetVoiceConnectorOriginationRequest";
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

export namespace GetVoiceConnectorOriginationRequest {
  export function isa(o: any): o is GetVoiceConnectorOriginationRequest {
    return __isa(o, "GetVoiceConnectorOriginationRequest");
  }
}

export interface GetVoiceConnectorOriginationResponse {
  __type?: "GetVoiceConnectorOriginationResponse";
  /**
   * <p>The origination setting details.</p>
   */
  Origination?: Origination;
}

export namespace GetVoiceConnectorOriginationResponse {
  export function isa(o: any): o is GetVoiceConnectorOriginationResponse {
    return __isa(o, "GetVoiceConnectorOriginationResponse");
  }
}

export interface GetVoiceConnectorRequest {
  __type?: "GetVoiceConnectorRequest";
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

export namespace GetVoiceConnectorRequest {
  export function isa(o: any): o is GetVoiceConnectorRequest {
    return __isa(o, "GetVoiceConnectorRequest");
  }
}

export interface GetVoiceConnectorResponse {
  __type?: "GetVoiceConnectorResponse";
  /**
   * <p>The Amazon Chime Voice Connector details.</p>
   */
  VoiceConnector?: VoiceConnector;
}

export namespace GetVoiceConnectorResponse {
  export function isa(o: any): o is GetVoiceConnectorResponse {
    return __isa(o, "GetVoiceConnectorResponse");
  }
}

export interface GetVoiceConnectorStreamingConfigurationRequest {
  __type?: "GetVoiceConnectorStreamingConfigurationRequest";
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

export namespace GetVoiceConnectorStreamingConfigurationRequest {
  export function isa(
    o: any
  ): o is GetVoiceConnectorStreamingConfigurationRequest {
    return __isa(o, "GetVoiceConnectorStreamingConfigurationRequest");
  }
}

export interface GetVoiceConnectorStreamingConfigurationResponse {
  __type?: "GetVoiceConnectorStreamingConfigurationResponse";
  /**
   * <p>The streaming configuration details.</p>
   */
  StreamingConfiguration?: StreamingConfiguration;
}

export namespace GetVoiceConnectorStreamingConfigurationResponse {
  export function isa(
    o: any
  ): o is GetVoiceConnectorStreamingConfigurationResponse {
    return __isa(o, "GetVoiceConnectorStreamingConfigurationResponse");
  }
}

export interface GetVoiceConnectorTerminationHealthRequest {
  __type?: "GetVoiceConnectorTerminationHealthRequest";
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

export namespace GetVoiceConnectorTerminationHealthRequest {
  export function isa(o: any): o is GetVoiceConnectorTerminationHealthRequest {
    return __isa(o, "GetVoiceConnectorTerminationHealthRequest");
  }
}

export interface GetVoiceConnectorTerminationHealthResponse {
  __type?: "GetVoiceConnectorTerminationHealthResponse";
  /**
   * <p>The termination health details.</p>
   */
  TerminationHealth?: TerminationHealth;
}

export namespace GetVoiceConnectorTerminationHealthResponse {
  export function isa(o: any): o is GetVoiceConnectorTerminationHealthResponse {
    return __isa(o, "GetVoiceConnectorTerminationHealthResponse");
  }
}

export interface GetVoiceConnectorTerminationRequest {
  __type?: "GetVoiceConnectorTerminationRequest";
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

export namespace GetVoiceConnectorTerminationRequest {
  export function isa(o: any): o is GetVoiceConnectorTerminationRequest {
    return __isa(o, "GetVoiceConnectorTerminationRequest");
  }
}

export interface GetVoiceConnectorTerminationResponse {
  __type?: "GetVoiceConnectorTerminationResponse";
  /**
   * <p>The termination setting details.</p>
   */
  Termination?: Termination;
}

export namespace GetVoiceConnectorTerminationResponse {
  export function isa(o: any): o is GetVoiceConnectorTerminationResponse {
    return __isa(o, "GetVoiceConnectorTerminationResponse");
  }
}

/**
 * <p>Invitation object returned after emailing users to invite them to join the
 *         Amazon Chime <code>Team</code> account.</p>
 */
export interface Invite {
  __type?: "Invite";
  /**
   * <p>The email address to which the invite is sent.</p>
   */
  EmailAddress?: string;

  /**
   * <p>The status of the invite email.</p>
   */
  EmailStatus?: EmailStatus | string;

  /**
   * <p>The invite ID.</p>
   */
  InviteId?: string;

  /**
   * <p>The status of the invite.</p>
   */
  Status?: InviteStatus | string;
}

export namespace Invite {
  export function isa(o: any): o is Invite {
    return __isa(o, "Invite");
  }
}

export enum InviteStatus {
  Accepted = "Accepted",
  Failed = "Failed",
  Pending = "Pending"
}

export interface InviteUsersRequest {
  __type?: "InviteUsersRequest";
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The user email addresses to which to send the email invitation.</p>
   */
  UserEmailList: Array<string> | undefined;

  /**
   * <p>The user type.</p>
   */
  UserType?: UserType | string;
}

export namespace InviteUsersRequest {
  export function isa(o: any): o is InviteUsersRequest {
    return __isa(o, "InviteUsersRequest");
  }
}

export interface InviteUsersResponse {
  __type?: "InviteUsersResponse";
  /**
   * <p>The email invitation details.</p>
   */
  Invites?: Array<Invite>;
}

export namespace InviteUsersResponse {
  export function isa(o: any): o is InviteUsersResponse {
    return __isa(o, "InviteUsersResponse");
  }
}

export enum License {
  Basic = "Basic",
  Plus = "Plus",
  Pro = "Pro",
  ProTrial = "ProTrial"
}

export interface ListAccountsRequest {
  __type?: "ListAccountsRequest";
  /**
   * <p>The maximum number of results to return in a single call. Defaults to 100.</p>
   */
  MaxResults?: number;

  /**
   * <p>Amazon Chime account name prefix with which to filter results.</p>
   */
  Name?: string;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>User email address with which to filter results.</p>
   */
  UserEmail?: string;
}

export namespace ListAccountsRequest {
  export function isa(o: any): o is ListAccountsRequest {
    return __isa(o, "ListAccountsRequest");
  }
}

export interface ListAccountsResponse {
  __type?: "ListAccountsResponse";
  /**
   * <p>List of Amazon Chime accounts and account details.</p>
   */
  Accounts?: Array<Account>;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

export namespace ListAccountsResponse {
  export function isa(o: any): o is ListAccountsResponse {
    return __isa(o, "ListAccountsResponse");
  }
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
  export function isa(o: any): o is ListAttendeesRequest {
    return __isa(o, "ListAttendeesRequest");
  }
}

export interface ListAttendeesResponse {
  __type?: "ListAttendeesResponse";
  /**
   * <p>The Amazon Chime SDK attendee information.</p>
   */
  Attendees?: Array<Attendee>;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

export namespace ListAttendeesResponse {
  export function isa(o: any): o is ListAttendeesResponse {
    return __isa(o, "ListAttendeesResponse");
  }
}

export interface ListBotsRequest {
  __type?: "ListBotsRequest";
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
  export function isa(o: any): o is ListBotsRequest {
    return __isa(o, "ListBotsRequest");
  }
}

export interface ListBotsResponse {
  __type?: "ListBotsResponse";
  /**
   * <p>List of bots and bot details.</p>
   */
  Bots?: Array<Bot>;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

export namespace ListBotsResponse {
  export function isa(o: any): o is ListBotsResponse {
    return __isa(o, "ListBotsResponse");
  }
}

export interface ListMeetingsRequest {
  __type?: "ListMeetingsRequest";
  /**
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

export namespace ListMeetingsRequest {
  export function isa(o: any): o is ListMeetingsRequest {
    return __isa(o, "ListMeetingsRequest");
  }
}

export interface ListMeetingsResponse {
  __type?: "ListMeetingsResponse";
  /**
   * <p>The Amazon Chime SDK meeting information.</p>
   */
  Meetings?: Array<Meeting>;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

export namespace ListMeetingsResponse {
  export function isa(o: any): o is ListMeetingsResponse {
    return __isa(o, "ListMeetingsResponse");
  }
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
  export function isa(o: any): o is ListPhoneNumberOrdersRequest {
    return __isa(o, "ListPhoneNumberOrdersRequest");
  }
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
  PhoneNumberOrders?: Array<PhoneNumberOrder>;
}

export namespace ListPhoneNumberOrdersResponse {
  export function isa(o: any): o is ListPhoneNumberOrdersResponse {
    return __isa(o, "ListPhoneNumberOrdersResponse");
  }
}

export interface ListPhoneNumbersRequest {
  __type?: "ListPhoneNumbersRequest";
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

  /**
   * <p>The phone number product type.</p>
   */
  ProductType?: PhoneNumberProductType | string;

  /**
   * <p>The phone number status.</p>
   */
  Status?: PhoneNumberStatus | string;
}

export namespace ListPhoneNumbersRequest {
  export function isa(o: any): o is ListPhoneNumbersRequest {
    return __isa(o, "ListPhoneNumbersRequest");
  }
}

export interface ListPhoneNumbersResponse {
  __type?: "ListPhoneNumbersResponse";
  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The phone number details.</p>
   */
  PhoneNumbers?: Array<PhoneNumber>;
}

export namespace ListPhoneNumbersResponse {
  export function isa(o: any): o is ListPhoneNumbersResponse {
    return __isa(o, "ListPhoneNumbersResponse");
  }
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
  export function isa(o: any): o is ListRoomMembershipsRequest {
    return __isa(o, "ListRoomMembershipsRequest");
  }
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
  RoomMemberships?: Array<RoomMembership>;
}

export namespace ListRoomMembershipsResponse {
  export function isa(o: any): o is ListRoomMembershipsResponse {
    return __isa(o, "ListRoomMembershipsResponse");
  }
}

export interface ListRoomsRequest {
  __type?: "ListRoomsRequest";
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The member ID (user ID or bot ID).</p>
   */
  MemberId?: string;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

export namespace ListRoomsRequest {
  export function isa(o: any): o is ListRoomsRequest {
    return __isa(o, "ListRoomsRequest");
  }
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
  Rooms?: Array<Room>;
}

export namespace ListRoomsResponse {
  export function isa(o: any): o is ListRoomsResponse {
    return __isa(o, "ListRoomsResponse");
  }
}

export interface ListUsersRequest {
  __type?: "ListUsersRequest";
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call. Defaults to 100.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Optional. The user email address used to filter results. Maximum 1.</p>
   */
  UserEmail?: string;

  /**
   * <p>The user type.</p>
   */
  UserType?: UserType | string;
}

export namespace ListUsersRequest {
  export function isa(o: any): o is ListUsersRequest {
    return __isa(o, "ListUsersRequest");
  }
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
  Users?: Array<User>;
}

export namespace ListUsersResponse {
  export function isa(o: any): o is ListUsersResponse {
    return __isa(o, "ListUsersResponse");
  }
}

export interface ListVoiceConnectorGroupsRequest {
  __type?: "ListVoiceConnectorGroupsRequest";
  /**
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

export namespace ListVoiceConnectorGroupsRequest {
  export function isa(o: any): o is ListVoiceConnectorGroupsRequest {
    return __isa(o, "ListVoiceConnectorGroupsRequest");
  }
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
  VoiceConnectorGroups?: Array<VoiceConnectorGroup>;
}

export namespace ListVoiceConnectorGroupsResponse {
  export function isa(o: any): o is ListVoiceConnectorGroupsResponse {
    return __isa(o, "ListVoiceConnectorGroupsResponse");
  }
}

export interface ListVoiceConnectorTerminationCredentialsRequest {
  __type?: "ListVoiceConnectorTerminationCredentialsRequest";
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

export namespace ListVoiceConnectorTerminationCredentialsRequest {
  export function isa(
    o: any
  ): o is ListVoiceConnectorTerminationCredentialsRequest {
    return __isa(o, "ListVoiceConnectorTerminationCredentialsRequest");
  }
}

export interface ListVoiceConnectorTerminationCredentialsResponse {
  __type?: "ListVoiceConnectorTerminationCredentialsResponse";
  /**
   * <p>A list of user names.</p>
   */
  Usernames?: Array<string>;
}

export namespace ListVoiceConnectorTerminationCredentialsResponse {
  export function isa(
    o: any
  ): o is ListVoiceConnectorTerminationCredentialsResponse {
    return __isa(o, "ListVoiceConnectorTerminationCredentialsResponse");
  }
}

export interface ListVoiceConnectorsRequest {
  __type?: "ListVoiceConnectorsRequest";
  /**
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

export namespace ListVoiceConnectorsRequest {
  export function isa(o: any): o is ListVoiceConnectorsRequest {
    return __isa(o, "ListVoiceConnectorsRequest");
  }
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
  VoiceConnectors?: Array<VoiceConnector>;
}

export namespace ListVoiceConnectorsResponse {
  export function isa(o: any): o is ListVoiceConnectorsResponse {
    return __isa(o, "ListVoiceConnectorsResponse");
  }
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
  export function isa(o: any): o is LoggingConfiguration {
    return __isa(o, "LoggingConfiguration");
  }
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
  export function isa(o: any): o is LogoutUserRequest {
    return __isa(o, "LogoutUserRequest");
  }
}

export interface LogoutUserResponse {
  __type?: "LogoutUserResponse";
}

export namespace LogoutUserResponse {
  export function isa(o: any): o is LogoutUserResponse {
    return __isa(o, "LogoutUserResponse");
  }
}

/**
 * <p>A set of endpoints used by clients to connect to the media service group for a Amazon Chime SDK meeting.</p>
 */
export interface MediaPlacement {
  __type?: "MediaPlacement";
  /**
   * <p>The audio host URL.</p>
   */
  AudioHostUrl?: string;

  /**
   * <p>The screen data URL.</p>
   */
  ScreenDataUrl?: string;

  /**
   * <p>The screen sharing URL.</p>
   */
  ScreenSharingUrl?: string;

  /**
   * <p>The screen viewing URL.</p>
   */
  ScreenViewingUrl?: string;

  /**
   * <p>The signaling URL.</p>
   */
  SignalingUrl?: string;

  /**
   * <p>The turn control URL.</p>
   */
  TurnControlUrl?: string;
}

export namespace MediaPlacement {
  export function isa(o: any): o is MediaPlacement {
    return __isa(o, "MediaPlacement");
  }
}

/**
 * <p>A meeting created using the Amazon Chime SDK.</p>
 */
export interface Meeting {
  __type?: "Meeting";
  /**
   * <p>The media placement for the meeting.</p>
   */
  MediaPlacement?: MediaPlacement;

  /**
   * <p>The Region in which to create the meeting. Available values: <code>ap-northeast-1</code>, <code>ap-southeast-1</code>, <code>ap-southeast-2</code>, <code>ca-central-1</code>, <code>eu-central-1</code>, <code>eu-north-1</code>, <code>eu-west-1</code>, <code>eu-west-2</code>, <code>eu-west-3</code>, <code>sa-east-1</code>, <code>us-east-1</code>, <code>us-east-2</code>, <code>us-west-1</code>, <code>us-west-2</code>.</p>
   */
  MediaRegion?: string;

  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId?: string;
}

export namespace Meeting {
  export function isa(o: any): o is Meeting {
    return __isa(o, "Meeting");
  }
}

/**
 * <p>The configuration for resource targets to receive notifications when Amazon Chime SDK meeting and attendee events occur.</p>
 */
export interface MeetingNotificationConfiguration {
  __type?: "MeetingNotificationConfiguration";
  /**
   * <p>The SNS topic ARN.</p>
   */
  SnsTopicArn?: string;

  /**
   * <p>The SQS queue ARN.</p>
   */
  SqsQueueArn?: string;
}

export namespace MeetingNotificationConfiguration {
  export function isa(o: any): o is MeetingNotificationConfiguration {
    return __isa(o, "MeetingNotificationConfiguration");
  }
}

/**
 * <p>The member details, such as email address, name, member ID, and member type.</p>
 */
export interface Member {
  __type?: "Member";
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId?: string;

  /**
   * <p>The member email address.</p>
   */
  Email?: string;

  /**
   * <p>The member name.</p>
   */
  FullName?: string;

  /**
   * <p>The member ID (user ID or bot ID).</p>
   */
  MemberId?: string;

  /**
   * <p>The member type.</p>
   */
  MemberType?: MemberType | string;
}

export namespace Member {
  export function isa(o: any): o is Member {
    return __isa(o, "Member");
  }
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
   * <p>The error message.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The member ID.</p>
   */
  MemberId?: string;
}

export namespace MemberError {
  export function isa(o: any): o is MemberError {
    return __isa(o, "MemberError");
  }
}

export enum MemberType {
  Bot = "Bot",
  User = "User",
  Webhook = "Webhook"
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
  export function isa(o: any): o is MembershipItem {
    return __isa(o, "MembershipItem");
  }
}

/**
 * <p>One or more of the resources in the request does not exist in the system.</p>
 */
export interface NotFoundException extends __SmithyException, $MetadataBearer {
  name: "NotFoundException";
  $fault: "client";
  Code?: ErrorCode | string;
  Message?: string;
}

export namespace NotFoundException {
  export function isa(o: any): o is NotFoundException {
    return __isa(o, "NotFoundException");
  }
}

/**
 * <p>A phone number for which an order has been placed.</p>
 */
export interface OrderedPhoneNumber {
  __type?: "OrderedPhoneNumber";
  /**
   * <p>The phone number, in E.164 format.</p>
   */
  E164PhoneNumber?: string;

  /**
   * <p>The phone number status.</p>
   */
  Status?: OrderedPhoneNumberStatus | string;
}

export namespace OrderedPhoneNumber {
  export function isa(o: any): o is OrderedPhoneNumber {
    return __isa(o, "OrderedPhoneNumber");
  }
}

export enum OrderedPhoneNumberStatus {
  Acquired = "Acquired",
  Failed = "Failed",
  Processing = "Processing"
}

/**
 * <p>Origination settings enable your SIP hosts to receive inbound calls using your Amazon
 *       Chime Voice Connector.</p>
 */
export interface Origination {
  __type?: "Origination";
  /**
   * <p>When origination settings are disabled, inbound calls are not enabled for your Amazon
   *       Chime Voice Connector.</p>
   */
  Disabled?: boolean;

  /**
   * <p>The call distribution properties defined for your SIP hosts. Valid range: Minimum value
   *     of 1. Maximum value of 20.</p>
   */
  Routes?: Array<OriginationRoute>;
}

export namespace Origination {
  export function isa(o: any): o is Origination {
    return __isa(o, "Origination");
  }
}

/**
 * <p>Origination routes define call distribution properties for your SIP hosts to receive
 *       inbound calls using your Amazon Chime Voice Connector. Limit: Ten origination routes for each
 *       Amazon Chime Voice Connector.</p>
 */
export interface OriginationRoute {
  __type?: "OriginationRoute";
  /**
   * <p>The FQDN or IP address to contact for origination traffic.</p>
   */
  Host?: string;

  /**
   * <p>The designated origination route port. Defaults to 5060.</p>
   */
  Port?: number;

  /**
   * <p>The priority associated with the host, with 1 being the highest priority. Higher
   *       priority hosts are attempted first.</p>
   */
  Priority?: number;

  /**
   * <p>The protocol to use for the origination route. Encryption-enabled Amazon Chime Voice Connectors use TCP protocol by default.</p>
   */
  Protocol?: OriginationRouteProtocol | string;

  /**
   * <p>The weight associated with the host. If hosts are equal in priority, calls are
   *       distributed among them based on their relative weight.</p>
   */
  Weight?: number;
}

export namespace OriginationRoute {
  export function isa(o: any): o is OriginationRoute {
    return __isa(o, "OriginationRoute");
  }
}

export enum OriginationRouteProtocol {
  TCP = "TCP",
  UDP = "UDP"
}

/**
 * <p>A phone number used for Amazon Chime Business Calling or an Amazon Chime Voice
 *       Connector.</p>
 */
export interface PhoneNumber {
  __type?: "PhoneNumber";
  /**
   * <p>The phone number associations.</p>
   */
  Associations?: Array<PhoneNumberAssociation>;

  /**
   * <p>The outbound calling name associated with the phone number.</p>
   */
  CallingName?: string;

  /**
   * <p>The outbound calling name status.</p>
   */
  CallingNameStatus?: CallingNameStatus | string;

  /**
   * <p>The phone number capabilities.</p>
   */
  Capabilities?: PhoneNumberCapabilities;

  /**
   * <p>The phone number creation timestamp, in ISO 8601 format.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The deleted phone number timestamp, in ISO 8601 format.</p>
   */
  DeletionTimestamp?: Date;

  /**
   * <p>The phone number, in E.164 format.</p>
   */
  E164PhoneNumber?: string;

  /**
   * <p>The phone number ID.</p>
   */
  PhoneNumberId?: string;

  /**
   * <p>The phone number product type.</p>
   */
  ProductType?: PhoneNumberProductType | string;

  /**
   * <p>The phone number status.</p>
   */
  Status?: PhoneNumberStatus | string;

  /**
   * <p>The phone number type.</p>
   */
  Type?: PhoneNumberType | string;

  /**
   * <p>The updated phone number timestamp, in ISO 8601 format.</p>
   */
  UpdatedTimestamp?: Date;
}

export namespace PhoneNumber {
  export function isa(o: any): o is PhoneNumber {
    return __isa(o, "PhoneNumber");
  }
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
   * <p>Defines the association with an Amazon Chime account ID, user ID, Amazon Chime Voice
   *       Connector ID, or Amazon Chime Voice Connector group ID.</p>
   */
  Name?: PhoneNumberAssociationName | string;

  /**
   * <p>Contains the ID for the entity specified in Name.</p>
   */
  Value?: string;
}

export namespace PhoneNumberAssociation {
  export function isa(o: any): o is PhoneNumberAssociation {
    return __isa(o, "PhoneNumberAssociation");
  }
}

export enum PhoneNumberAssociationName {
  AccountId = "AccountId",
  UserId = "UserId",
  VoiceConnectorGroupId = "VoiceConnectorGroupId",
  VoiceConnectorId = "VoiceConnectorId"
}

/**
 * <p>The phone number capabilities for Amazon Chime Business Calling phone numbers, such as enabled inbound and outbound calling and text
 *       messaging.</p>
 */
export interface PhoneNumberCapabilities {
  __type?: "PhoneNumberCapabilities";
  /**
   * <p>Allows or denies inbound calling for the specified phone number.</p>
   */
  InboundCall?: boolean;

  /**
   * <p>Allows or denies inbound MMS messaging for the specified phone number.</p>
   */
  InboundMMS?: boolean;

  /**
   * <p>Allows or denies inbound SMS messaging for the specified phone number.</p>
   */
  InboundSMS?: boolean;

  /**
   * <p>Allows or denies outbound calling for the specified phone number.</p>
   */
  OutboundCall?: boolean;

  /**
   * <p>Allows or denies outbound MMS messaging for the specified phone number.</p>
   */
  OutboundMMS?: boolean;

  /**
   * <p>Allows or denies outbound SMS messaging for the specified phone number.</p>
   */
  OutboundSMS?: boolean;
}

export namespace PhoneNumberCapabilities {
  export function isa(o: any): o is PhoneNumberCapabilities {
    return __isa(o, "PhoneNumberCapabilities");
  }
}

/**
 * <p>If the phone number action fails for one or more of the phone numbers in the request, a
 *     list of the phone numbers is returned, along with error codes and error messages.</p>
 */
export interface PhoneNumberError {
  __type?: "PhoneNumberError";
  /**
   * <p>The error code.</p>
   */
  ErrorCode?: ErrorCode | string;

  /**
   * <p>The error message.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The phone number ID for which the action failed.</p>
   */
  PhoneNumberId?: string;
}

export namespace PhoneNumberError {
  export function isa(o: any): o is PhoneNumberError {
    return __isa(o, "PhoneNumberError");
  }
}

/**
 * <p>The details of a phone number order created for Amazon Chime.</p>
 */
export interface PhoneNumberOrder {
  __type?: "PhoneNumberOrder";
  /**
   * <p>The phone number order creation timestamp, in ISO 8601 format.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The ordered phone number details, such as the phone number in E.164 format and the
   *      phone number status.</p>
   */
  OrderedPhoneNumbers?: Array<OrderedPhoneNumber>;

  /**
   * <p>The phone number order ID.</p>
   */
  PhoneNumberOrderId?: string;

  /**
   * <p>The phone number order product type.</p>
   */
  ProductType?: PhoneNumberProductType | string;

  /**
   * <p>The status of the phone number order.</p>
   */
  Status?: PhoneNumberOrderStatus | string;

  /**
   * <p>The updated phone number order timestamp, in ISO 8601 format.</p>
   */
  UpdatedTimestamp?: Date;
}

export namespace PhoneNumberOrder {
  export function isa(o: any): o is PhoneNumberOrder {
    return __isa(o, "PhoneNumberOrder");
  }
}

export enum PhoneNumberOrderStatus {
  Failed = "Failed",
  Partial = "Partial",
  Processing = "Processing",
  Successful = "Successful"
}

export enum PhoneNumberProductType {
  BusinessCalling = "BusinessCalling",
  VoiceConnector = "VoiceConnector"
}

export enum PhoneNumberStatus {
  AcquireFailed = "AcquireFailed",
  AcquireInProgress = "AcquireInProgress",
  Assigned = "Assigned",
  DeleteFailed = "DeleteFailed",
  DeleteInProgress = "DeleteInProgress",
  ReleaseFailed = "ReleaseFailed",
  ReleaseInProgress = "ReleaseInProgress",
  Unassigned = "Unassigned"
}

export enum PhoneNumberType {
  Local = "Local",
  TollFree = "TollFree"
}

export interface PutEventsConfigurationRequest {
  __type?: "PutEventsConfigurationRequest";
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The bot ID.</p>
   */
  BotId: string | undefined;

  /**
   * <p>Lambda function ARN that allows the bot to receive outgoing events.</p>
   */
  LambdaFunctionArn?: string;

  /**
   * <p>HTTPS endpoint that allows the bot to receive outgoing events.</p>
   */
  OutboundEventsHTTPSEndpoint?: string;
}

export namespace PutEventsConfigurationRequest {
  export function isa(o: any): o is PutEventsConfigurationRequest {
    return __isa(o, "PutEventsConfigurationRequest");
  }
}

export interface PutEventsConfigurationResponse {
  __type?: "PutEventsConfigurationResponse";
  /**
   * <p>The configuration that allows a bot to receive outgoing events. Can be either an HTTPS endpoint or a Lambda function ARN.</p>
   */
  EventsConfiguration?: EventsConfiguration;
}

export namespace PutEventsConfigurationResponse {
  export function isa(o: any): o is PutEventsConfigurationResponse {
    return __isa(o, "PutEventsConfigurationResponse");
  }
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
  export function isa(
    o: any
  ): o is PutVoiceConnectorLoggingConfigurationRequest {
    return __isa(o, "PutVoiceConnectorLoggingConfigurationRequest");
  }
}

export interface PutVoiceConnectorLoggingConfigurationResponse {
  __type?: "PutVoiceConnectorLoggingConfigurationResponse";
  /**
   * <p>The updated logging configuration details.</p>
   */
  LoggingConfiguration?: LoggingConfiguration;
}

export namespace PutVoiceConnectorLoggingConfigurationResponse {
  export function isa(
    o: any
  ): o is PutVoiceConnectorLoggingConfigurationResponse {
    return __isa(o, "PutVoiceConnectorLoggingConfigurationResponse");
  }
}

export interface PutVoiceConnectorOriginationRequest {
  __type?: "PutVoiceConnectorOriginationRequest";
  /**
   * <p>The origination setting details to add.</p>
   */
  Origination: Origination | undefined;

  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

export namespace PutVoiceConnectorOriginationRequest {
  export function isa(o: any): o is PutVoiceConnectorOriginationRequest {
    return __isa(o, "PutVoiceConnectorOriginationRequest");
  }
}

export interface PutVoiceConnectorOriginationResponse {
  __type?: "PutVoiceConnectorOriginationResponse";
  /**
   * <p>The updated origination setting details.</p>
   */
  Origination?: Origination;
}

export namespace PutVoiceConnectorOriginationResponse {
  export function isa(o: any): o is PutVoiceConnectorOriginationResponse {
    return __isa(o, "PutVoiceConnectorOriginationResponse");
  }
}

export interface PutVoiceConnectorStreamingConfigurationRequest {
  __type?: "PutVoiceConnectorStreamingConfigurationRequest";
  /**
   * <p>The streaming configuration details to add.</p>
   */
  StreamingConfiguration: StreamingConfiguration | undefined;

  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

export namespace PutVoiceConnectorStreamingConfigurationRequest {
  export function isa(
    o: any
  ): o is PutVoiceConnectorStreamingConfigurationRequest {
    return __isa(o, "PutVoiceConnectorStreamingConfigurationRequest");
  }
}

export interface PutVoiceConnectorStreamingConfigurationResponse {
  __type?: "PutVoiceConnectorStreamingConfigurationResponse";
  /**
   * <p>The updated streaming configuration details.</p>
   */
  StreamingConfiguration?: StreamingConfiguration;
}

export namespace PutVoiceConnectorStreamingConfigurationResponse {
  export function isa(
    o: any
  ): o is PutVoiceConnectorStreamingConfigurationResponse {
    return __isa(o, "PutVoiceConnectorStreamingConfigurationResponse");
  }
}

export interface PutVoiceConnectorTerminationCredentialsRequest {
  __type?: "PutVoiceConnectorTerminationCredentialsRequest";
  /**
   * <p>The termination SIP credentials.</p>
   */
  Credentials?: Array<Credential>;

  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

export namespace PutVoiceConnectorTerminationCredentialsRequest {
  export function isa(
    o: any
  ): o is PutVoiceConnectorTerminationCredentialsRequest {
    return __isa(o, "PutVoiceConnectorTerminationCredentialsRequest");
  }
}

export interface PutVoiceConnectorTerminationRequest {
  __type?: "PutVoiceConnectorTerminationRequest";
  /**
   * <p>The termination setting details to add.</p>
   */
  Termination: Termination | undefined;

  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

export namespace PutVoiceConnectorTerminationRequest {
  export function isa(o: any): o is PutVoiceConnectorTerminationRequest {
    return __isa(o, "PutVoiceConnectorTerminationRequest");
  }
}

export interface PutVoiceConnectorTerminationResponse {
  __type?: "PutVoiceConnectorTerminationResponse";
  /**
   * <p>The updated termination setting details.</p>
   */
  Termination?: Termination;
}

export namespace PutVoiceConnectorTerminationResponse {
  export function isa(o: any): o is PutVoiceConnectorTerminationResponse {
    return __isa(o, "PutVoiceConnectorTerminationResponse");
  }
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
  export function isa(o: any): o is RegenerateSecurityTokenRequest {
    return __isa(o, "RegenerateSecurityTokenRequest");
  }
}

export interface RegenerateSecurityTokenResponse {
  __type?: "RegenerateSecurityTokenResponse";
  /**
   * <p>A resource that allows Enterprise account administrators to configure an interface to receive events from Amazon Chime.</p>
   */
  Bot?: Bot;
}

export namespace RegenerateSecurityTokenResponse {
  export function isa(o: any): o is RegenerateSecurityTokenResponse {
    return __isa(o, "RegenerateSecurityTokenResponse");
  }
}

export enum RegistrationStatus {
  Registered = "Registered",
  Suspended = "Suspended",
  Unregistered = "Unregistered"
}

export interface ResetPersonalPINRequest {
  __type?: "ResetPersonalPINRequest";
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
  export function isa(o: any): o is ResetPersonalPINRequest {
    return __isa(o, "ResetPersonalPINRequest");
  }
}

export interface ResetPersonalPINResponse {
  __type?: "ResetPersonalPINResponse";
  /**
   * <p>The user details and new personal meeting PIN.</p>
   */
  User?: User;
}

export namespace ResetPersonalPINResponse {
  export function isa(o: any): o is ResetPersonalPINResponse {
    return __isa(o, "ResetPersonalPINResponse");
  }
}

/**
 * <p>The request exceeds the resource limit.</p>
 */
export interface ResourceLimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceLimitExceededException";
  $fault: "client";
  Code?: ErrorCode | string;
  Message?: string;
}

export namespace ResourceLimitExceededException {
  export function isa(o: any): o is ResourceLimitExceededException {
    return __isa(o, "ResourceLimitExceededException");
  }
}

export interface RestorePhoneNumberRequest {
  __type?: "RestorePhoneNumberRequest";
  /**
   * <p>The phone number.</p>
   */
  PhoneNumberId: string | undefined;
}

export namespace RestorePhoneNumberRequest {
  export function isa(o: any): o is RestorePhoneNumberRequest {
    return __isa(o, "RestorePhoneNumberRequest");
  }
}

export interface RestorePhoneNumberResponse {
  __type?: "RestorePhoneNumberResponse";
  /**
   * <p>The phone number details.</p>
   */
  PhoneNumber?: PhoneNumber;
}

export namespace RestorePhoneNumberResponse {
  export function isa(o: any): o is RestorePhoneNumberResponse {
    return __isa(o, "RestorePhoneNumberResponse");
  }
}

/**
 * <p>The Amazon Chime chat room details.</p>
 */
export interface Room {
  __type?: "Room";
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId?: string;

  /**
   * <p>The identifier of the room creator.</p>
   */
  CreatedBy?: string;

  /**
   * <p>The room creation timestamp, in ISO 8601 format.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The room name.</p>
   */
  Name?: string;

  /**
   * <p>The room ID.</p>
   */
  RoomId?: string;

  /**
   * <p>The room update timestamp, in ISO 8601 format.</p>
   */
  UpdatedTimestamp?: Date;
}

export namespace Room {
  export function isa(o: any): o is Room {
    return __isa(o, "Room");
  }
}

/**
 * <p>The room membership details.</p>
 */
export interface RoomMembership {
  __type?: "RoomMembership";
  /**
   * <p>The identifier of the user that invited the room member.</p>
   */
  InvitedBy?: string;

  /**
   * <p>The member details, such as email address, name, member ID, and member type.</p>
   */
  Member?: Member;

  /**
   * <p>The membership role.</p>
   */
  Role?: RoomMembershipRole | string;

  /**
   * <p>The room ID.</p>
   */
  RoomId?: string;

  /**
   * <p>The room membership update timestamp, in ISO 8601 format.</p>
   */
  UpdatedTimestamp?: Date;
}

export namespace RoomMembership {
  export function isa(o: any): o is RoomMembership {
    return __isa(o, "RoomMembership");
  }
}

export enum RoomMembershipRole {
  Administrator = "Administrator",
  Member = "Member"
}

export interface SearchAvailablePhoneNumbersRequest {
  __type?: "SearchAvailablePhoneNumbersRequest";
  /**
   * <p>The area code used to filter results.</p>
   */
  AreaCode?: string;

  /**
   * <p>The city used to filter results.</p>
   */
  City?: string;

  /**
   * <p>The country used to filter results.</p>
   */
  Country?: string;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The state used to filter results.</p>
   */
  State?: string;

  /**
   * <p>The toll-free prefix that you use to filter results.</p>
   */
  TollFreePrefix?: string;
}

export namespace SearchAvailablePhoneNumbersRequest {
  export function isa(o: any): o is SearchAvailablePhoneNumbersRequest {
    return __isa(o, "SearchAvailablePhoneNumbersRequest");
  }
}

export interface SearchAvailablePhoneNumbersResponse {
  __type?: "SearchAvailablePhoneNumbersResponse";
  /**
   * <p>List of phone numbers, in E.164 format.</p>
   */
  E164PhoneNumbers?: Array<string>;
}

export namespace SearchAvailablePhoneNumbersResponse {
  export function isa(o: any): o is SearchAvailablePhoneNumbersResponse {
    return __isa(o, "SearchAvailablePhoneNumbersResponse");
  }
}

/**
 * <p>The service encountered an unexpected error.</p>
 */
export interface ServiceFailureException
  extends __SmithyException,
    $MetadataBearer {
  name: "ServiceFailureException";
  $fault: "server";
  Code?: ErrorCode | string;
  Message?: string;
}

export namespace ServiceFailureException {
  export function isa(o: any): o is ServiceFailureException {
    return __isa(o, "ServiceFailureException");
  }
}

/**
 * <p>The service is currently unavailable.</p>
 */
export interface ServiceUnavailableException
  extends __SmithyException,
    $MetadataBearer {
  name: "ServiceUnavailableException";
  $fault: "server";
  Code?: ErrorCode | string;
  Message?: string;
}

export namespace ServiceUnavailableException {
  export function isa(o: any): o is ServiceUnavailableException {
    return __isa(o, "ServiceUnavailableException");
  }
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
  export function isa(o: any): o is SigninDelegateGroup {
    return __isa(o, "SigninDelegateGroup");
  }
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
}

export namespace StreamingConfiguration {
  export function isa(o: any): o is StreamingConfiguration {
    return __isa(o, "StreamingConfiguration");
  }
}

/**
 * <p>Settings that allow management of telephony permissions for an Amazon Chime user, such
 *       as inbound and outbound calling and text messaging.</p>
 */
export interface TelephonySettings {
  __type?: "TelephonySettings";
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

export namespace TelephonySettings {
  export function isa(o: any): o is TelephonySettings {
    return __isa(o, "TelephonySettings");
  }
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
  CallingRegions?: Array<string>;

  /**
   * <p>The IP addresses allowed to make calls, in CIDR format. Required.</p>
   */
  CidrAllowedList?: Array<string>;

  /**
   * <p>The limit on calls per second. Max value based on account service limit. Default value
   *       of 1.</p>
   */
  CpsLimit?: number;

  /**
   * <p>The default caller ID phone number.</p>
   */
  DefaultPhoneNumber?: string;

  /**
   * <p>When termination settings are disabled, outbound calls can not be made.</p>
   */
  Disabled?: boolean;
}

export namespace Termination {
  export function isa(o: any): o is Termination {
    return __isa(o, "Termination");
  }
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
  export function isa(o: any): o is TerminationHealth {
    return __isa(o, "TerminationHealth");
  }
}

/**
 * <p>The client exceeded its request rate limit.</p>
 */
export interface ThrottledClientException
  extends __SmithyException,
    $MetadataBearer {
  name: "ThrottledClientException";
  $fault: "client";
  Code?: ErrorCode | string;
  Message?: string;
}

export namespace ThrottledClientException {
  export function isa(o: any): o is ThrottledClientException {
    return __isa(o, "ThrottledClientException");
  }
}

/**
 * <p>The client is not currently authorized to make the request.</p>
 */
export interface UnauthorizedClientException
  extends __SmithyException,
    $MetadataBearer {
  name: "UnauthorizedClientException";
  $fault: "client";
  Code?: ErrorCode | string;
  Message?: string;
}

export namespace UnauthorizedClientException {
  export function isa(o: any): o is UnauthorizedClientException {
    return __isa(o, "UnauthorizedClientException");
  }
}

/**
 * <p>The request was well-formed but was unable to be followed due to semantic errors.</p>
 */
export interface UnprocessableEntityException
  extends __SmithyException,
    $MetadataBearer {
  name: "UnprocessableEntityException";
  $fault: "client";
  Code?: ErrorCode | string;
  Message?: string;
}

export namespace UnprocessableEntityException {
  export function isa(o: any): o is UnprocessableEntityException {
    return __isa(o, "UnprocessableEntityException");
  }
}

export interface UpdateAccountRequest {
  __type?: "UpdateAccountRequest";
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
  export function isa(o: any): o is UpdateAccountRequest {
    return __isa(o, "UpdateAccountRequest");
  }
}

export interface UpdateAccountResponse {
  __type?: "UpdateAccountResponse";
  /**
   * <p>The updated Amazon Chime account details.</p>
   */
  Account?: Account;
}

export namespace UpdateAccountResponse {
  export function isa(o: any): o is UpdateAccountResponse {
    return __isa(o, "UpdateAccountResponse");
  }
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
  export function isa(o: any): o is UpdateAccountSettingsRequest {
    return __isa(o, "UpdateAccountSettingsRequest");
  }
}

export interface UpdateAccountSettingsResponse {
  __type?: "UpdateAccountSettingsResponse";
}

export namespace UpdateAccountSettingsResponse {
  export function isa(o: any): o is UpdateAccountSettingsResponse {
    return __isa(o, "UpdateAccountSettingsResponse");
  }
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
  export function isa(o: any): o is UpdateBotRequest {
    return __isa(o, "UpdateBotRequest");
  }
}

export interface UpdateBotResponse {
  __type?: "UpdateBotResponse";
  /**
   * <p>The updated bot details.</p>
   */
  Bot?: Bot;
}

export namespace UpdateBotResponse {
  export function isa(o: any): o is UpdateBotResponse {
    return __isa(o, "UpdateBotResponse");
  }
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
  export function isa(o: any): o is UpdateGlobalSettingsRequest {
    return __isa(o, "UpdateGlobalSettingsRequest");
  }
}

export interface UpdatePhoneNumberRequest {
  __type?: "UpdatePhoneNumberRequest";
  /**
   * <p>The outbound calling name associated with the phone number.</p>
   */
  CallingName?: string;

  /**
   * <p>The phone number ID.</p>
   */
  PhoneNumberId: string | undefined;

  /**
   * <p>The product type.</p>
   */
  ProductType?: PhoneNumberProductType | string;
}

export namespace UpdatePhoneNumberRequest {
  export function isa(o: any): o is UpdatePhoneNumberRequest {
    return __isa(o, "UpdatePhoneNumberRequest");
  }
}

/**
 * <p>The phone number ID, product type, or calling name fields to update, used with the <a>BatchUpdatePhoneNumber</a> and <a>UpdatePhoneNumber</a> actions.</p>
 */
export interface UpdatePhoneNumberRequestItem {
  __type?: "UpdatePhoneNumberRequestItem";
  /**
   * <p>The outbound calling name to update.</p>
   */
  CallingName?: string;

  /**
   * <p>The phone number ID to update.</p>
   */
  PhoneNumberId: string | undefined;

  /**
   * <p>The product type to update.</p>
   */
  ProductType?: PhoneNumberProductType | string;
}

export namespace UpdatePhoneNumberRequestItem {
  export function isa(o: any): o is UpdatePhoneNumberRequestItem {
    return __isa(o, "UpdatePhoneNumberRequestItem");
  }
}

export interface UpdatePhoneNumberResponse {
  __type?: "UpdatePhoneNumberResponse";
  /**
   * <p>The updated phone number details.</p>
   */
  PhoneNumber?: PhoneNumber;
}

export namespace UpdatePhoneNumberResponse {
  export function isa(o: any): o is UpdatePhoneNumberResponse {
    return __isa(o, "UpdatePhoneNumberResponse");
  }
}

export interface UpdatePhoneNumberSettingsRequest {
  __type?: "UpdatePhoneNumberSettingsRequest";
  /**
   * <p>The default outbound calling name for the account.</p>
   */
  CallingName: string | undefined;
}

export namespace UpdatePhoneNumberSettingsRequest {
  export function isa(o: any): o is UpdatePhoneNumberSettingsRequest {
    return __isa(o, "UpdatePhoneNumberSettingsRequest");
  }
}

export interface UpdateRoomMembershipRequest {
  __type?: "UpdateRoomMembershipRequest";
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The member ID.</p>
   */
  MemberId: string | undefined;

  /**
   * <p>The role of the member.</p>
   */
  Role?: RoomMembershipRole | string;

  /**
   * <p>The room ID.</p>
   */
  RoomId: string | undefined;
}

export namespace UpdateRoomMembershipRequest {
  export function isa(o: any): o is UpdateRoomMembershipRequest {
    return __isa(o, "UpdateRoomMembershipRequest");
  }
}

export interface UpdateRoomMembershipResponse {
  __type?: "UpdateRoomMembershipResponse";
  /**
   * <p>The room membership details.</p>
   */
  RoomMembership?: RoomMembership;
}

export namespace UpdateRoomMembershipResponse {
  export function isa(o: any): o is UpdateRoomMembershipResponse {
    return __isa(o, "UpdateRoomMembershipResponse");
  }
}

export interface UpdateRoomRequest {
  __type?: "UpdateRoomRequest";
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The room name.</p>
   */
  Name?: string;

  /**
   * <p>The room ID.</p>
   */
  RoomId: string | undefined;
}

export namespace UpdateRoomRequest {
  export function isa(o: any): o is UpdateRoomRequest {
    return __isa(o, "UpdateRoomRequest");
  }
}

export interface UpdateRoomResponse {
  __type?: "UpdateRoomResponse";
  /**
   * <p>The room details.</p>
   */
  Room?: Room;
}

export namespace UpdateRoomResponse {
  export function isa(o: any): o is UpdateRoomResponse {
    return __isa(o, "UpdateRoomResponse");
  }
}

export interface UpdateUserRequest {
  __type?: "UpdateUserRequest";
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The Alexa for Business metadata.</p>
   */
  AlexaForBusinessMetadata?: AlexaForBusinessMetadata;

  /**
   * <p>The user license type to update. This must be a supported license type for the Amazon
   *        Chime account that the user belongs to.</p>
   */
  LicenseType?: License | string;

  /**
   * <p>The user ID.</p>
   */
  UserId: string | undefined;

  /**
   * <p>The user type.</p>
   */
  UserType?: UserType | string;
}

export namespace UpdateUserRequest {
  export function isa(o: any): o is UpdateUserRequest {
    return __isa(o, "UpdateUserRequest");
  }
}

/**
 * <p>The user ID and user fields to update, used with the <a>BatchUpdateUser</a> action.</p>
 */
export interface UpdateUserRequestItem {
  __type?: "UpdateUserRequestItem";
  /**
   * <p>The Alexa for Business metadata.</p>
   */
  AlexaForBusinessMetadata?: AlexaForBusinessMetadata;

  /**
   * <p>The user license type.</p>
   */
  LicenseType?: License | string;

  /**
   * <p>The user ID.</p>
   */
  UserId: string | undefined;

  /**
   * <p>The user type.</p>
   */
  UserType?: UserType | string;
}

export namespace UpdateUserRequestItem {
  export function isa(o: any): o is UpdateUserRequestItem {
    return __isa(o, "UpdateUserRequestItem");
  }
}

export interface UpdateUserResponse {
  __type?: "UpdateUserResponse";
  /**
   * <p>The updated user details.</p>
   */
  User?: User;
}

export namespace UpdateUserResponse {
  export function isa(o: any): o is UpdateUserResponse {
    return __isa(o, "UpdateUserResponse");
  }
}

export interface UpdateUserSettingsRequest {
  __type?: "UpdateUserSettingsRequest";
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
  export function isa(o: any): o is UpdateUserSettingsRequest {
    return __isa(o, "UpdateUserSettingsRequest");
  }
}

export interface UpdateVoiceConnectorGroupRequest {
  __type?: "UpdateVoiceConnectorGroupRequest";
  /**
   * <p>The name of the Amazon Chime Voice Connector group.</p>
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Chime Voice Connector group ID.</p>
   */
  VoiceConnectorGroupId: string | undefined;

  /**
   * <p>The <code>VoiceConnectorItems</code> to associate with the group.</p>
   */
  VoiceConnectorItems: Array<VoiceConnectorItem> | undefined;
}

export namespace UpdateVoiceConnectorGroupRequest {
  export function isa(o: any): o is UpdateVoiceConnectorGroupRequest {
    return __isa(o, "UpdateVoiceConnectorGroupRequest");
  }
}

export interface UpdateVoiceConnectorGroupResponse {
  __type?: "UpdateVoiceConnectorGroupResponse";
  /**
   * <p>The updated Amazon Chime Voice Connector group details.</p>
   */
  VoiceConnectorGroup?: VoiceConnectorGroup;
}

export namespace UpdateVoiceConnectorGroupResponse {
  export function isa(o: any): o is UpdateVoiceConnectorGroupResponse {
    return __isa(o, "UpdateVoiceConnectorGroupResponse");
  }
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
  export function isa(o: any): o is UpdateVoiceConnectorRequest {
    return __isa(o, "UpdateVoiceConnectorRequest");
  }
}

export interface UpdateVoiceConnectorResponse {
  __type?: "UpdateVoiceConnectorResponse";
  /**
   * <p>The updated Amazon Chime Voice Connector details.</p>
   */
  VoiceConnector?: VoiceConnector;
}

export namespace UpdateVoiceConnectorResponse {
  export function isa(o: any): o is UpdateVoiceConnectorResponse {
    return __isa(o, "UpdateVoiceConnectorResponse");
  }
}

/**
 * <p>The user on the Amazon Chime account.</p>
 */
export interface User {
  __type?: "User";
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId?: string;

  /**
   * <p>The Alexa for Business metadata.</p>
   */
  AlexaForBusinessMetadata?: AlexaForBusinessMetadata;

  /**
   * <p>The display name of the user.</p>
   */
  DisplayName?: string;

  /**
   * <p>Date and time when the user is invited to the Amazon Chime account, in ISO 8601
   *       format.</p>
   */
  InvitedOn?: Date;

  /**
   * <p>The license type for the user.</p>
   */
  LicenseType?: License | string;

  /**
   * <p>The user's personal meeting PIN.</p>
   */
  PersonalPIN?: string;

  /**
   * <p>The primary email address of the user.</p>
   */
  PrimaryEmail?: string;

  /**
   * <p>The primary phone number associated with the user.</p>
   */
  PrimaryProvisionedNumber?: string;

  /**
   * <p>Date and time when the user is registered, in ISO 8601 format.</p>
   */
  RegisteredOn?: Date;

  /**
   * <p>The user ID.</p>
   */
  UserId: string | undefined;

  /**
   * <p>The user invite status.</p>
   */
  UserInvitationStatus?: InviteStatus | string;

  /**
   * <p>The user registration status.</p>
   */
  UserRegistrationStatus?: RegistrationStatus | string;

  /**
   * <p>The user type.</p>
   */
  UserType?: UserType | string;
}

export namespace User {
  export function isa(o: any): o is User {
    return __isa(o, "User");
  }
}

/**
 * <p>The list of errors returned when errors are encountered during the <a>BatchSuspendUser</a>, <a>BatchUnsuspendUser</a>, or <a>BatchUpdateUser</a> actions. This includes user IDs, error codes, and error
 *       messages.</p>
 */
export interface UserError {
  __type?: "UserError";
  /**
   * <p>The error code.</p>
   */
  ErrorCode?: ErrorCode | string;

  /**
   * <p>The error message.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The user ID for which the action failed.</p>
   */
  UserId?: string;
}

export namespace UserError {
  export function isa(o: any): o is UserError {
    return __isa(o, "UserError");
  }
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
  export function isa(o: any): o is UserSettings {
    return __isa(o, "UserSettings");
  }
}

export enum UserType {
  PrivateUser = "PrivateUser",
  SharedDevice = "SharedDevice"
}

/**
 * <p>The Amazon Chime Voice Connector configuration, including outbound host name and
 *       encryption settings.</p>
 */
export interface VoiceConnector {
  __type?: "VoiceConnector";
  /**
   * <p>The AWS Region in which the Amazon Chime Voice Connector is created. Default: <code>us-east-1</code>.</p>
   */
  AwsRegion?: VoiceConnectorAwsRegion | string;

  /**
   * <p>The Amazon Chime Voice Connector creation timestamp, in ISO 8601 format.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The name of the Amazon Chime Voice Connector.</p>
   */
  Name?: string;

  /**
   * <p>The outbound host name for the Amazon Chime Voice Connector.</p>
   */
  OutboundHostName?: string;

  /**
   * <p>Designates whether encryption is required for the Amazon Chime Voice Connector.</p>
   */
  RequireEncryption?: boolean;

  /**
   * <p>The updated Amazon Chime Voice Connector timestamp, in ISO 8601 format.</p>
   */
  UpdatedTimestamp?: Date;

  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId?: string;
}

export namespace VoiceConnector {
  export function isa(o: any): o is VoiceConnector {
    return __isa(o, "VoiceConnector");
  }
}

export enum VoiceConnectorAwsRegion {
  US_EAST_1 = "us-east-1",
  US_WEST_2 = "us-west-2"
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
   * <p>The Amazon Chime Voice Connector group creation timestamp, in ISO 8601 format.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The name of the Amazon Chime Voice Connector group.</p>
   */
  Name?: string;

  /**
   * <p>The updated Amazon Chime Voice Connector group timestamp, in ISO 8601 format.</p>
   */
  UpdatedTimestamp?: Date;

  /**
   * <p>The Amazon Chime Voice Connector group ID.</p>
   */
  VoiceConnectorGroupId?: string;

  /**
   * <p>The Amazon Chime Voice Connectors to which to route inbound calls.</p>
   */
  VoiceConnectorItems?: Array<VoiceConnectorItem>;
}

export namespace VoiceConnectorGroup {
  export function isa(o: any): o is VoiceConnectorGroup {
    return __isa(o, "VoiceConnectorGroup");
  }
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
  export function isa(o: any): o is VoiceConnectorItem {
    return __isa(o, "VoiceConnectorItem");
  }
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
  export function isa(o: any): o is VoiceConnectorSettings {
    return __isa(o, "VoiceConnectorSettings");
  }
}
