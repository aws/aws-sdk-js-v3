// smithy-typescript generated code
import {
  AccountStatus,
  AccountType,
  BotType,
  CallingNameStatus,
  EmailStatus,
  ErrorCode,
  InviteStatus,
  License,
  MemberType,
  OrderedPhoneNumberStatus,
  PhoneNumberAssociationName,
  PhoneNumberOrderStatus,
  PhoneNumberProductType,
  PhoneNumberStatus,
  PhoneNumberType,
  RegistrationStatus,
  RoomMembershipRole,
  UserType,
} from "./enums";

/**
 * <p>An Active Directory (AD) group whose members are granted permission to act as delegates.</p>
 * @public
 */
export interface SigninDelegateGroup {
  /**
   * <p>The group name.</p>
   * @public
   */
  GroupName?: string | undefined;
}

/**
 * <p>The Amazon Chime account details. An AWS account can have multiple Amazon Chime accounts.</p>
 * @public
 */
export interface Account {
  /**
   * <p>The AWS account ID.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The Amazon Chime account ID.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The Amazon Chime account name.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Chime account type. For more information about different account types, see
   *     <a href="https://docs.aws.amazon.com/chime/latest/ag/manage-chime-account.html">Managing Your Amazon Chime Accounts</a> in the <i>Amazon Chime Administration
   *                 Guide</i>.</p>
   * @public
   */
  AccountType?: AccountType | undefined;

  /**
   * <p>The Amazon Chime account creation timestamp, in ISO 8601 format.</p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * <p>The default license for the Amazon Chime account.</p>
   * @public
   */
  DefaultLicense?: License | undefined;

  /**
   * <p>Supported licenses for the Amazon Chime account.</p>
   * @public
   */
  SupportedLicenses?: License[] | undefined;

  /**
   * <p>The status of the account.</p>
   * @public
   */
  AccountStatus?: AccountStatus | undefined;

  /**
   * <p>The sign-in delegate groups associated with the account.</p>
   * @public
   */
  SigninDelegateGroups?: SigninDelegateGroup[] | undefined;
}

/**
 * <p>Settings related to the Amazon Chime account. This includes settings that start or stop
 *             remote control of shared screens, or start or stop the dial-out option in the Amazon Chime web application. For more information about these settings, see
 *     <a href="https://docs.aws.amazon.com/chime/latest/ag/policies.html">Use the Policies Page</a> in the <i>Amazon Chime Administration Guide</i>.</p>
 * @public
 */
export interface AccountSettings {
  /**
   * <p>Setting that stops or starts remote control of shared screens during meetings.</p>
   * @public
   */
  DisableRemoteControl?: boolean | undefined;

  /**
   * <p>Setting that allows meeting participants to choose the <b>Call me at a phone number</b> option. For more information, see
   *     <a href="https://docs.aws.amazon.com/chime/latest/ug/chime-join-meeting.html">Join a Meeting without the Amazon Chime App</a>.</p>
   * @public
   */
  EnableDialOut?: boolean | undefined;
}

/**
 * <p>The Alexa for Business metadata associated with an Amazon Chime user, used to integrate Alexa for Business with a device.</p>
 * @public
 */
export interface AlexaForBusinessMetadata {
  /**
   * <p>Starts or stops Alexa for Business.</p>
   * @public
   */
  IsAlexaForBusinessEnabled?: boolean | undefined;

  /**
   * <p>The ARN of the room resource.</p>
   * @public
   */
  AlexaForBusinessRoomArn?: string | undefined;
}

/**
 * @public
 */
export interface AssociatePhoneNumberWithUserRequest {
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
   * <p>The phone number, in E.164 format.</p>
   * @public
   */
  E164PhoneNumber: string | undefined;
}

/**
 * @public
 */
export interface AssociatePhoneNumberWithUserResponse {}

/**
 * @public
 */
export interface AssociateSigninDelegateGroupsWithAccountRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The sign-in delegate groups.</p>
   * @public
   */
  SigninDelegateGroups: SigninDelegateGroup[] | undefined;
}

/**
 * @public
 */
export interface AssociateSigninDelegateGroupsWithAccountResponse {}

/**
 * <p>Membership details, such as member ID and member role.</p>
 * @public
 */
export interface MembershipItem {
  /**
   * <p>The member ID.</p>
   * @public
   */
  MemberId?: string | undefined;

  /**
   * <p>The member role.</p>
   * @public
   */
  Role?: RoomMembershipRole | undefined;
}

/**
 * @public
 */
export interface BatchCreateRoomMembershipRequest {
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
   * <p>The list of membership items.</p>
   * @public
   */
  MembershipItemList: MembershipItem[] | undefined;
}

/**
 * <p>The list of errors returned when a member action results in an error.</p>
 * @public
 */
export interface MemberError {
  /**
   * <p>The member ID.</p>
   * @public
   */
  MemberId?: string | undefined;

  /**
   * <p>The error code.</p>
   * @public
   */
  ErrorCode?: ErrorCode | undefined;

  /**
   * <p>The error message.</p>
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * @public
 */
export interface BatchCreateRoomMembershipResponse {
  /**
   * <p>If the action fails for one or more of the member IDs in the request, a list of the member IDs is returned, along with error codes and error messages.</p>
   * @public
   */
  Errors?: MemberError[] | undefined;
}

/**
 * @public
 */
export interface BatchDeletePhoneNumberRequest {
  /**
   * <p>List of phone number IDs.</p>
   * @public
   */
  PhoneNumberIds: string[] | undefined;
}

/**
 * <p>If the phone number action fails for one or more of the phone numbers in the request, a list of
 *             the phone numbers is returned, along with error codes and error messages.</p>
 * @public
 */
export interface PhoneNumberError {
  /**
   * <p>The phone number ID for which the action failed.</p>
   * @public
   */
  PhoneNumberId?: string | undefined;

  /**
   * <p>The error code.</p>
   * @public
   */
  ErrorCode?: ErrorCode | undefined;

  /**
   * <p>The error message.</p>
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * @public
 */
export interface BatchDeletePhoneNumberResponse {
  /**
   * <p>If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages.</p>
   * @public
   */
  PhoneNumberErrors?: PhoneNumberError[] | undefined;
}

/**
 * @public
 */
export interface BatchSuspendUserRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The request containing the user IDs to suspend.</p>
   * @public
   */
  UserIdList: string[] | undefined;
}

/**
 * <p>The list of errors returned when errors are encountered during the <a>BatchSuspendUser</a>, <a>BatchUnsuspendUser</a>, or
 *     <a>BatchUpdateUser</a> actions. This includes user IDs, error codes, and error messages.</p>
 * @public
 */
export interface UserError {
  /**
   * <p>The user ID for which the action failed.</p>
   * @public
   */
  UserId?: string | undefined;

  /**
   * <p>The error code.</p>
   * @public
   */
  ErrorCode?: ErrorCode | undefined;

  /**
   * <p>The error message.</p>
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * @public
 */
export interface BatchSuspendUserResponse {
  /**
   * <p>If the <a>BatchSuspendUser</a> action fails for one or more of the user IDs in the
   *             request, a list of the user IDs is returned, along with error codes and error messages.</p>
   * @public
   */
  UserErrors?: UserError[] | undefined;
}

/**
 * @public
 */
export interface BatchUnsuspendUserRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The request containing the user IDs to unsuspend.</p>
   * @public
   */
  UserIdList: string[] | undefined;
}

/**
 * @public
 */
export interface BatchUnsuspendUserResponse {
  /**
   * <p>If the <a>BatchUnsuspendUser</a> action fails for one or more of the user IDs in the
   *             request, a list of the user IDs is returned, along with error codes and error messages.</p>
   * @public
   */
  UserErrors?: UserError[] | undefined;
}

/**
 * <p>The phone number ID, product type, or calling name fields to update, used with the
 * <a>BatchUpdatePhoneNumber</a> and <a>UpdatePhoneNumber</a> actions.</p>
 * @public
 */
export interface UpdatePhoneNumberRequestItem {
  /**
   * <p>The phone number ID to update.</p>
   * @public
   */
  PhoneNumberId: string | undefined;

  /**
   * <p>The product type to update.</p>
   * @public
   */
  ProductType?: PhoneNumberProductType | undefined;

  /**
   * <p>The outbound calling name to update.</p>
   * @public
   */
  CallingName?: string | undefined;
}

/**
 * @public
 */
export interface BatchUpdatePhoneNumberRequest {
  /**
   * <p>The request containing the phone number IDs and product types or calling names to update.</p>
   * @public
   */
  UpdatePhoneNumberRequestItems: UpdatePhoneNumberRequestItem[] | undefined;
}

/**
 * @public
 */
export interface BatchUpdatePhoneNumberResponse {
  /**
   * <p>If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages.</p>
   * @public
   */
  PhoneNumberErrors?: PhoneNumberError[] | undefined;
}

/**
 * <p>The user ID and user fields to update, used with the
 * <a>BatchUpdateUser</a> action.</p>
 * @public
 */
export interface UpdateUserRequestItem {
  /**
   * <p>The user ID.</p>
   * @public
   */
  UserId: string | undefined;

  /**
   * <p>The user license type.</p>
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
export interface BatchUpdateUserRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The request containing the user IDs and details to update.</p>
   * @public
   */
  UpdateUserRequestItems: UpdateUserRequestItem[] | undefined;
}

/**
 * @public
 */
export interface BatchUpdateUserResponse {
  /**
   * <p>If the <a>BatchUpdateUser</a> action fails for one or more of the user IDs in the
   *             request, a list of the user IDs is returned, along with error codes and error messages.</p>
   * @public
   */
  UserErrors?: UserError[] | undefined;
}

/**
 * <p>A resource that allows Enterprise account administrators to configure an interface to receive events from Amazon Chime.</p>
 * @public
 */
export interface Bot {
  /**
   * <p>The bot ID.</p>
   * @public
   */
  BotId?: string | undefined;

  /**
   * <p>The unique ID for the bot user.</p>
   * @public
   */
  UserId?: string | undefined;

  /**
   * <p>The bot display name.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>The bot type.</p>
   * @public
   */
  BotType?: BotType | undefined;

  /**
   * <p>When true, the bot is stopped from running in your account.</p>
   * @public
   */
  Disabled?: boolean | undefined;

  /**
   * <p>The bot creation timestamp, in ISO 8601 format.</p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * <p>The updated bot timestamp, in ISO 8601 format.</p>
   * @public
   */
  UpdatedTimestamp?: Date | undefined;

  /**
   * <p>The bot email address.</p>
   * @public
   */
  BotEmail?: string | undefined;

  /**
   * <p>The security token used to authenticate Amazon Chime with the outgoing event endpoint.</p>
   * @public
   */
  SecurityToken?: string | undefined;
}

/**
 * <p>The Amazon Chime Business Calling settings for the administrator's AWS account. Includes any
 *             Amazon S3 buckets designated for storing call detail records.</p>
 * @public
 */
export interface BusinessCallingSettings {
  /**
   * <p>The Amazon S3 bucket designated for call detail record storage.</p>
   * @public
   */
  CdrBucket?: string | undefined;
}

/**
 * <p>The retention settings that determine how long to retain conversation messages for an Amazon Chime Enterprise account.</p>
 * @public
 */
export interface ConversationRetentionSettings {
  /**
   * <p>The number of days for which to retain conversation messages.</p>
   * @public
   */
  RetentionDays?: number | undefined;
}

/**
 * @public
 */
export interface CreateAccountRequest {
  /**
   * <p>The name of the Amazon Chime account.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface CreateAccountResponse {
  /**
   * <p>The Amazon Chime account details.</p>
   * @public
   */
  Account?: Account | undefined;
}

/**
 * @public
 */
export interface CreateBotRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The bot display name.</p>
   * @public
   */
  DisplayName: string | undefined;

  /**
   * <p>The domain of the Amazon Chime Enterprise account.</p>
   * @public
   */
  Domain?: string | undefined;
}

/**
 * @public
 */
export interface CreateBotResponse {
  /**
   * <p>The bot details.</p>
   * @public
   */
  Bot?: Bot | undefined;
}

/**
 * @public
 */
export interface CreateMeetingDialOutRequest {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   * @public
   */
  MeetingId: string | undefined;

  /**
   * <p>Phone number used as the caller ID when the remote party receives a call.</p>
   * @public
   */
  FromPhoneNumber: string | undefined;

  /**
   * <p>Phone number called when inviting someone to a meeting.</p>
   * @public
   */
  ToPhoneNumber: string | undefined;

  /**
   * <p>Token used by the Amazon Chime SDK attendee. Call the <a href="https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateAttendee.html">CreateAttendee</a> action to get a join token.</p>
   * @public
   */
  JoinToken: string | undefined;
}

/**
 * @public
 */
export interface CreateMeetingDialOutResponse {
  /**
   * <p>Unique ID that tracks API calls.</p>
   * @public
   */
  TransactionId?: string | undefined;
}

/**
 * @public
 */
export interface CreatePhoneNumberOrderRequest {
  /**
   * <p>The phone number product type.</p>
   * @public
   */
  ProductType: PhoneNumberProductType | undefined;

  /**
   * <p>List of phone numbers, in E.164 format.</p>
   * @public
   */
  E164PhoneNumbers: string[] | undefined;
}

/**
 * <p>A phone number for which an order has been placed.</p>
 * @public
 */
export interface OrderedPhoneNumber {
  /**
   * <p>The phone number, in E.164 format.</p>
   * @public
   */
  E164PhoneNumber?: string | undefined;

  /**
   * <p>The phone number status.</p>
   * @public
   */
  Status?: OrderedPhoneNumberStatus | undefined;
}

/**
 * <p>The details of a phone number order created for Amazon Chime.</p>
 * @public
 */
export interface PhoneNumberOrder {
  /**
   * <p>The phone number order ID.</p>
   * @public
   */
  PhoneNumberOrderId?: string | undefined;

  /**
   * <p>The phone number order product type.</p>
   * @public
   */
  ProductType?: PhoneNumberProductType | undefined;

  /**
   * <p>The status of the phone number order.</p>
   * @public
   */
  Status?: PhoneNumberOrderStatus | undefined;

  /**
   * <p>The ordered phone number details, such as the phone number in E.164 format and the phone
   *             number status.</p>
   * @public
   */
  OrderedPhoneNumbers?: OrderedPhoneNumber[] | undefined;

  /**
   * <p>The phone number order creation time stamp, in ISO 8601 format.</p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * <p>The updated phone number order time stamp, in ISO 8601 format.</p>
   * @public
   */
  UpdatedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface CreatePhoneNumberOrderResponse {
  /**
   * <p>The phone number order details.</p>
   * @public
   */
  PhoneNumberOrder?: PhoneNumberOrder | undefined;
}

/**
 * @public
 */
export interface CreateRoomRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The room name.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The idempotency token for the request.</p>
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * <p>The Amazon Chime chat room details.</p>
 * @public
 */
export interface Room {
  /**
   * <p>The room ID.</p>
   * @public
   */
  RoomId?: string | undefined;

  /**
   * <p>The room name.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon Chime account ID.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The identifier of the room creator.</p>
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * <p>The room creation timestamp, in ISO 8601 format.</p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * <p>The room update timestamp, in ISO 8601 format.</p>
   * @public
   */
  UpdatedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface CreateRoomResponse {
  /**
   * <p>The room details.</p>
   * @public
   */
  Room?: Room | undefined;
}

/**
 * @public
 */
export interface CreateRoomMembershipRequest {
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
   * <p>The Amazon Chime member ID (user ID or bot ID).</p>
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
 * <p>The member details, such as email address, name, member ID, and member type.</p>
 * @public
 */
export interface Member {
  /**
   * <p>The member ID (user ID or bot ID).</p>
   * @public
   */
  MemberId?: string | undefined;

  /**
   * <p>The member type.</p>
   * @public
   */
  MemberType?: MemberType | undefined;

  /**
   * <p>The member email address.</p>
   * @public
   */
  Email?: string | undefined;

  /**
   * <p>The member name.</p>
   * @public
   */
  FullName?: string | undefined;

  /**
   * <p>The Amazon Chime account ID.</p>
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * <p>The room membership details.</p>
 * @public
 */
export interface RoomMembership {
  /**
   * <p>The room ID.</p>
   * @public
   */
  RoomId?: string | undefined;

  /**
   * <p>The member details, such as email address, name, member ID, and member type.</p>
   * @public
   */
  Member?: Member | undefined;

  /**
   * <p>The membership role.</p>
   * @public
   */
  Role?: RoomMembershipRole | undefined;

  /**
   * <p>The identifier of the user that invited the room member.</p>
   * @public
   */
  InvitedBy?: string | undefined;

  /**
   * <p>The room membership update timestamp, in ISO 8601 format.</p>
   * @public
   */
  UpdatedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface CreateRoomMembershipResponse {
  /**
   * <p>The room membership details.</p>
   * @public
   */
  RoomMembership?: RoomMembership | undefined;
}

/**
 * @public
 */
export interface CreateUserRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The user name.</p>
   * @public
   */
  Username?: string | undefined;

  /**
   * <p>The user's email address.</p>
   * @public
   */
  Email?: string | undefined;

  /**
   * <p>The user type.</p>
   * @public
   */
  UserType?: UserType | undefined;
}

/**
 * <p>The user on the Amazon Chime account.</p>
 * @public
 */
export interface User {
  /**
   * <p>The user ID.</p>
   * @public
   */
  UserId: string | undefined;

  /**
   * <p>The Amazon Chime account ID.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The primary email address of the user.</p>
   * @public
   */
  PrimaryEmail?: string | undefined;

  /**
   * <p>The primary phone number associated with the user.</p>
   * @public
   */
  PrimaryProvisionedNumber?: string | undefined;

  /**
   * <p>The display name of the user.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>The license type for the user.</p>
   * @public
   */
  LicenseType?: License | undefined;

  /**
   * <p>The user type.</p>
   * @public
   */
  UserType?: UserType | undefined;

  /**
   * <p>The user registration status.</p>
   * @public
   */
  UserRegistrationStatus?: RegistrationStatus | undefined;

  /**
   * <p>The user invite status.</p>
   * @public
   */
  UserInvitationStatus?: InviteStatus | undefined;

  /**
   * <p>Date and time when the user is registered, in ISO 8601 format.</p>
   * @public
   */
  RegisteredOn?: Date | undefined;

  /**
   * <p>Date and time when the user is invited to the Amazon Chime account, in ISO 8601 format.</p>
   * @public
   */
  InvitedOn?: Date | undefined;

  /**
   * <p>The Alexa for Business metadata.</p>
   * @public
   */
  AlexaForBusinessMetadata?: AlexaForBusinessMetadata | undefined;

  /**
   * <p>The user's personal meeting PIN.</p>
   * @public
   */
  PersonalPIN?: string | undefined;
}

/**
 * @public
 */
export interface CreateUserResponse {
  /**
   * <p>The user on the Amazon Chime account.</p>
   * @public
   */
  User?: User | undefined;
}

/**
 * @public
 */
export interface DeleteAccountRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   * @public
   */
  AccountId: string | undefined;
}

/**
 * @public
 */
export interface DeleteAccountResponse {}

/**
 * @public
 */
export interface DeleteEventsConfigurationRequest {
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
export interface DeletePhoneNumberRequest {
  /**
   * <p>The phone number ID.</p>
   * @public
   */
  PhoneNumberId: string | undefined;
}

/**
 * @public
 */
export interface DeleteRoomRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The chat room ID.</p>
   * @public
   */
  RoomId: string | undefined;
}

/**
 * @public
 */
export interface DeleteRoomMembershipRequest {
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
   * <p>The member ID (user ID or bot ID).</p>
   * @public
   */
  MemberId: string | undefined;
}

/**
 * @public
 */
export interface DisassociatePhoneNumberFromUserRequest {
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
export interface DisassociatePhoneNumberFromUserResponse {}

/**
 * @public
 */
export interface DisassociateSigninDelegateGroupsFromAccountRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The sign-in delegate group names.</p>
   * @public
   */
  GroupNames: string[] | undefined;
}

/**
 * @public
 */
export interface DisassociateSigninDelegateGroupsFromAccountResponse {}

/**
 * <p>The configuration that allows a bot to receive outgoing events. Can be either an HTTPS endpoint or a Lambda function ARN.</p>
 * @public
 */
export interface EventsConfiguration {
  /**
   * <p>The bot ID.</p>
   * @public
   */
  BotId?: string | undefined;

  /**
   * <p>HTTPS endpoint that allows a bot to receive outgoing events.</p>
   * @public
   */
  OutboundEventsHTTPSEndpoint?: string | undefined;

  /**
   * <p>Lambda function ARN that allows a bot to receive outgoing events.</p>
   * @public
   */
  LambdaFunctionArn?: string | undefined;
}

/**
 * @public
 */
export interface GetAccountRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   * @public
   */
  AccountId: string | undefined;
}

/**
 * @public
 */
export interface GetAccountResponse {
  /**
   * <p>The Amazon Chime account details.</p>
   * @public
   */
  Account?: Account | undefined;
}

/**
 * @public
 */
export interface GetAccountSettingsRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   * @public
   */
  AccountId: string | undefined;
}

/**
 * @public
 */
export interface GetAccountSettingsResponse {
  /**
   * <p>The Amazon Chime account settings.</p>
   * @public
   */
  AccountSettings?: AccountSettings | undefined;
}

/**
 * @public
 */
export interface GetBotRequest {
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
export interface GetBotResponse {
  /**
   * <p>The chat bot details.</p>
   * @public
   */
  Bot?: Bot | undefined;
}

/**
 * @public
 */
export interface GetEventsConfigurationRequest {
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
export interface GetEventsConfigurationResponse {
  /**
   * <p>The events configuration details.</p>
   * @public
   */
  EventsConfiguration?: EventsConfiguration | undefined;
}

/**
 * <p>The Amazon Chime Voice Connector settings. Includes any Amazon S3 buckets designated for
 *             storing call detail records.</p>
 * @public
 */
export interface VoiceConnectorSettings {
  /**
   * <p>The Amazon S3 bucket designated for call detail record storage.</p>
   * @public
   */
  CdrBucket?: string | undefined;
}

/**
 * @public
 */
export interface GetGlobalSettingsResponse {
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
export interface GetPhoneNumberRequest {
  /**
   * <p>The phone number ID.</p>
   * @public
   */
  PhoneNumberId: string | undefined;
}

/**
 * <p>The phone number associations, such as Amazon Chime account ID, Amazon Chime user ID, Amazon
 *             Chime Voice Connector ID, or Amazon Chime Voice Connector group ID.</p>
 * @public
 */
export interface PhoneNumberAssociation {
  /**
   * <p>Contains the ID for the entity specified in Name.</p>
   * @public
   */
  Value?: string | undefined;

  /**
   * <p>Defines the association with an Amazon Chime account ID, user ID, Amazon Chime Voice Connector
   *             ID, or Amazon Chime Voice Connector group ID.</p>
   * @public
   */
  Name?: PhoneNumberAssociationName | undefined;

  /**
   * <p>The timestamp of the phone number association, in ISO 8601 format.</p>
   * @public
   */
  AssociatedTimestamp?: Date | undefined;
}

/**
 * <p>The phone number capabilities for Amazon Chime Business Calling phone numbers, such as enabled
 *             inbound and outbound calling and text messaging.</p>
 * @public
 */
export interface PhoneNumberCapabilities {
  /**
   * <p>Allows or denies inbound calling for the specified phone number.</p>
   * @public
   */
  InboundCall?: boolean | undefined;

  /**
   * <p>Allows or denies outbound calling for the specified phone number.</p>
   * @public
   */
  OutboundCall?: boolean | undefined;

  /**
   * <p>Allows or denies inbound SMS messaging for the specified phone number.</p>
   * @public
   */
  InboundSMS?: boolean | undefined;

  /**
   * <p>Allows or denies outbound SMS messaging for the specified phone number.</p>
   * @public
   */
  OutboundSMS?: boolean | undefined;

  /**
   * <p>Allows or denies inbound MMS messaging for the specified phone number.</p>
   * @public
   */
  InboundMMS?: boolean | undefined;

  /**
   * <p>Allows or denies outbound MMS messaging for the specified phone number.</p>
   * @public
   */
  OutboundMMS?: boolean | undefined;
}

/**
 * <p>A phone number used for Amazon Chime Business Calling or an Amazon Chime Voice
 *             Connector.</p>
 * @public
 */
export interface PhoneNumber {
  /**
   * <p>The phone number ID.</p>
   * @public
   */
  PhoneNumberId?: string | undefined;

  /**
   * <p>The phone number, in E.164 format.</p>
   * @public
   */
  E164PhoneNumber?: string | undefined;

  /**
   * <p>The phone number country. Format: ISO 3166-1 alpha-2.</p>
   * @public
   */
  Country?: string | undefined;

  /**
   * <p>The phone number type.</p>
   * @public
   */
  Type?: PhoneNumberType | undefined;

  /**
   * <p>The phone number product type.</p>
   * @public
   */
  ProductType?: PhoneNumberProductType | undefined;

  /**
   * <p>The phone number status.</p>
   * @public
   */
  Status?: PhoneNumberStatus | undefined;

  /**
   * <p>The phone number capabilities.</p>
   * @public
   */
  Capabilities?: PhoneNumberCapabilities | undefined;

  /**
   * <p>The phone number associations.</p>
   * @public
   */
  Associations?: PhoneNumberAssociation[] | undefined;

  /**
   * <p>The outbound calling name associated with the phone number.</p>
   * @public
   */
  CallingName?: string | undefined;

  /**
   * <p>The outbound calling name status.</p>
   * @public
   */
  CallingNameStatus?: CallingNameStatus | undefined;

  /**
   * <p>The phone number creation timestamp, in ISO 8601 format.</p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * <p>The updated phone number timestamp, in ISO 8601 format.</p>
   * @public
   */
  UpdatedTimestamp?: Date | undefined;

  /**
   * <p>The deleted phone number timestamp, in ISO 8601 format.</p>
   * @public
   */
  DeletionTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface GetPhoneNumberResponse {
  /**
   * <p>The phone number details.</p>
   * @public
   */
  PhoneNumber?: PhoneNumber | undefined;
}

/**
 * @public
 */
export interface GetPhoneNumberOrderRequest {
  /**
   * <p>The ID for the phone number order.</p>
   * @public
   */
  PhoneNumberOrderId: string | undefined;
}

/**
 * @public
 */
export interface GetPhoneNumberOrderResponse {
  /**
   * <p>The phone number order details.</p>
   * @public
   */
  PhoneNumberOrder?: PhoneNumberOrder | undefined;
}

/**
 * @public
 */
export interface GetPhoneNumberSettingsResponse {
  /**
   * <p>The default outbound calling name for the account.</p>
   * @public
   */
  CallingName?: string | undefined;

  /**
   * <p>The updated outbound calling name timestamp, in ISO 8601 format.</p>
   * @public
   */
  CallingNameUpdatedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface GetRetentionSettingsRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   * @public
   */
  AccountId: string | undefined;
}

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
