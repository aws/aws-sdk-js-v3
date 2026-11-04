// smithy-typescript generated code
import type {
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
 * An Active Directory (AD) group whose members are granted permission to act as delegates.
 *
 * @public
 */
export interface SigninDelegateGroup {
  /**
   * The group name.
   *
   * @public
   */
  GroupName?: string | undefined;
}

/**
 * The Amazon Chime account details. An AWS account can have multiple Amazon Chime accounts.
 *
 * @public
 */
export interface Account {
  /**
   * The AWS account ID.
   *
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * The Amazon Chime account ID.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * The Amazon Chime account name.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The Amazon Chime account type. For more information about different account types, see [Managing Your Amazon Chime Accounts](https://docs.aws.amazon.com/chime/latest/ag/manage-chime-account.html) in the *Amazon Chime Administration Guide*.
   *
   * @public
   */
  AccountType?: AccountType | undefined;

  /**
   * The Amazon Chime account creation timestamp, in ISO 8601 format.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * The default license for the Amazon Chime account.
   *
   * @public
   */
  DefaultLicense?: License | undefined;

  /**
   * Supported licenses for the Amazon Chime account.
   *
   * @public
   */
  SupportedLicenses?: License[] | undefined;

  /**
   * The status of the account.
   *
   * @public
   */
  AccountStatus?: AccountStatus | undefined;

  /**
   * The sign-in delegate groups associated with the account.
   *
   * @public
   */
  SigninDelegateGroups?: SigninDelegateGroup[] | undefined;
}

/**
 * Settings related to the Amazon Chime account. This includes settings that start or stop remote control of shared screens, or start or stop the dial-out option in the Amazon Chime web application. For more information about these settings, see [Use the Policies Page](https://docs.aws.amazon.com/chime/latest/ag/policies.html) in the *Amazon Chime Administration Guide*.
 *
 * @public
 */
export interface AccountSettings {
  /**
   * Setting that stops or starts remote control of shared screens during meetings.
   *
   * @public
   */
  DisableRemoteControl?: boolean | undefined;

  /**
   * Setting that allows meeting participants to choose the **Call me at a phone number** option. For more information, see [Join a Meeting without the Amazon Chime App](https://docs.aws.amazon.com/chime/latest/ug/chime-join-meeting.html).
   *
   * @public
   */
  EnableDialOut?: boolean | undefined;
}

/**
 * The Alexa for Business metadata associated with an Amazon Chime user, used to integrate Alexa for Business with a device.
 *
 * @public
 */
export interface AlexaForBusinessMetadata {
  /**
   * Starts or stops Alexa for Business.
   *
   * @public
   */
  IsAlexaForBusinessEnabled?: boolean | undefined;

  /**
   * The ARN of the room resource.
   *
   * @public
   */
  AlexaForBusinessRoomArn?: string | undefined;
}

/**
 * @public
 */
export interface AssociatePhoneNumberWithUserRequest {
  /**
   * The Amazon Chime account ID.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * The user ID.
   *
   * @public
   */
  UserId: string | undefined;

  /**
   * The phone number, in E.164 format.
   *
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
   * The Amazon Chime account ID.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * The sign-in delegate groups.
   *
   * @public
   */
  SigninDelegateGroups: SigninDelegateGroup[] | undefined;
}

/**
 * @public
 */
export interface AssociateSigninDelegateGroupsWithAccountResponse {}

/**
 * Membership details, such as member ID and member role.
 *
 * @public
 */
export interface MembershipItem {
  /**
   * The member ID.
   *
   * @public
   */
  MemberId?: string | undefined;

  /**
   * The member role.
   *
   * @public
   */
  Role?: RoomMembershipRole | undefined;
}

/**
 * @public
 */
export interface BatchCreateRoomMembershipRequest {
  /**
   * The Amazon Chime account ID.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * The room ID.
   *
   * @public
   */
  RoomId: string | undefined;

  /**
   * The list of membership items.
   *
   * @public
   */
  MembershipItemList: MembershipItem[] | undefined;
}

/**
 * The list of errors returned when a member action results in an error.
 *
 * @public
 */
export interface MemberError {
  /**
   * The member ID.
   *
   * @public
   */
  MemberId?: string | undefined;

  /**
   * The error code.
   *
   * @public
   */
  ErrorCode?: ErrorCode | undefined;

  /**
   * The error message.
   *
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * @public
 */
export interface BatchCreateRoomMembershipResponse {
  /**
   * If the action fails for one or more of the member IDs in the request, a list of the member IDs is returned, along with error codes and error messages.
   *
   * @public
   */
  Errors?: MemberError[] | undefined;
}

/**
 * @public
 */
export interface BatchDeletePhoneNumberRequest {
  /**
   * List of phone number IDs.
   *
   * @public
   */
  PhoneNumberIds: string[] | undefined;
}

/**
 * If the phone number action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages.
 *
 * @public
 */
export interface PhoneNumberError {
  /**
   * The phone number ID for which the action failed.
   *
   * @public
   */
  PhoneNumberId?: string | undefined;

  /**
   * The error code.
   *
   * @public
   */
  ErrorCode?: ErrorCode | undefined;

  /**
   * The error message.
   *
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * @public
 */
export interface BatchDeletePhoneNumberResponse {
  /**
   * If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages.
   *
   * @public
   */
  PhoneNumberErrors?: PhoneNumberError[] | undefined;
}

/**
 * @public
 */
export interface BatchSuspendUserRequest {
  /**
   * The Amazon Chime account ID.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * The request containing the user IDs to suspend.
   *
   * @public
   */
  UserIdList: string[] | undefined;
}

/**
 * The list of errors returned when errors are encountered during the BatchSuspendUser, BatchUnsuspendUser, or BatchUpdateUser actions. This includes user IDs, error codes, and error messages.
 *
 * @public
 */
export interface UserError {
  /**
   * The user ID for which the action failed.
   *
   * @public
   */
  UserId?: string | undefined;

  /**
   * The error code.
   *
   * @public
   */
  ErrorCode?: ErrorCode | undefined;

  /**
   * The error message.
   *
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * @public
 */
export interface BatchSuspendUserResponse {
  /**
   * If the BatchSuspendUser action fails for one or more of the user IDs in the request, a list of the user IDs is returned, along with error codes and error messages.
   *
   * @public
   */
  UserErrors?: UserError[] | undefined;
}

/**
 * @public
 */
export interface BatchUnsuspendUserRequest {
  /**
   * The Amazon Chime account ID.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * The request containing the user IDs to unsuspend.
   *
   * @public
   */
  UserIdList: string[] | undefined;
}

/**
 * @public
 */
export interface BatchUnsuspendUserResponse {
  /**
   * If the BatchUnsuspendUser action fails for one or more of the user IDs in the request, a list of the user IDs is returned, along with error codes and error messages.
   *
   * @public
   */
  UserErrors?: UserError[] | undefined;
}

/**
 * The phone number ID, product type, or calling name fields to update, used with the BatchUpdatePhoneNumber and UpdatePhoneNumber actions.
 *
 * @public
 */
export interface UpdatePhoneNumberRequestItem {
  /**
   * The phone number ID to update.
   *
   * @public
   */
  PhoneNumberId: string | undefined;

  /**
   * The product type to update.
   *
   * @public
   */
  ProductType?: PhoneNumberProductType | undefined;

  /**
   * The outbound calling name to update.
   *
   * @public
   */
  CallingName?: string | undefined;
}

/**
 * @public
 */
export interface BatchUpdatePhoneNumberRequest {
  /**
   * The request containing the phone number IDs and product types or calling names to update.
   *
   * @public
   */
  UpdatePhoneNumberRequestItems: UpdatePhoneNumberRequestItem[] | undefined;
}

/**
 * @public
 */
export interface BatchUpdatePhoneNumberResponse {
  /**
   * If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages.
   *
   * @public
   */
  PhoneNumberErrors?: PhoneNumberError[] | undefined;
}

/**
 * The user ID and user fields to update, used with the BatchUpdateUser action.
 *
 * @public
 */
export interface UpdateUserRequestItem {
  /**
   * The user ID.
   *
   * @public
   */
  UserId: string | undefined;

  /**
   * The user license type.
   *
   * @public
   */
  LicenseType?: License | undefined;

  /**
   * The user type.
   *
   * @public
   */
  UserType?: UserType | undefined;

  /**
   * The Alexa for Business metadata.
   *
   * @public
   */
  AlexaForBusinessMetadata?: AlexaForBusinessMetadata | undefined;
}

/**
 * @public
 */
export interface BatchUpdateUserRequest {
  /**
   * The Amazon Chime account ID.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * The request containing the user IDs and details to update.
   *
   * @public
   */
  UpdateUserRequestItems: UpdateUserRequestItem[] | undefined;
}

/**
 * @public
 */
export interface BatchUpdateUserResponse {
  /**
   * If the BatchUpdateUser action fails for one or more of the user IDs in the request, a list of the user IDs is returned, along with error codes and error messages.
   *
   * @public
   */
  UserErrors?: UserError[] | undefined;
}

/**
 * A resource that allows Enterprise account administrators to configure an interface to receive events from Amazon Chime.
 *
 * @public
 */
export interface Bot {
  /**
   * The bot ID.
   *
   * @public
   */
  BotId?: string | undefined;

  /**
   * The unique ID for the bot user.
   *
   * @public
   */
  UserId?: string | undefined;

  /**
   * The bot display name.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * The bot type.
   *
   * @public
   */
  BotType?: BotType | undefined;

  /**
   * When true, the bot is stopped from running in your account.
   *
   * @public
   */
  Disabled?: boolean | undefined;

  /**
   * The bot creation timestamp, in ISO 8601 format.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * The updated bot timestamp, in ISO 8601 format.
   *
   * @public
   */
  UpdatedTimestamp?: Date | undefined;

  /**
   * The bot email address.
   *
   * @public
   */
  BotEmail?: string | undefined;

  /**
   * The security token used to authenticate Amazon Chime with the outgoing event endpoint.
   *
   * @public
   */
  SecurityToken?: string | undefined;
}

/**
 * The Amazon Chime Business Calling settings for the administrator's AWS account. Includes any Amazon S3 buckets designated for storing call detail records.
 *
 * @public
 */
export interface BusinessCallingSettings {
  /**
   * The Amazon S3 bucket designated for call detail record storage.
   *
   * @public
   */
  CdrBucket?: string | undefined;
}

/**
 * The retention settings that determine how long to retain conversation messages for an Amazon Chime Enterprise account.
 *
 * @public
 */
export interface ConversationRetentionSettings {
  /**
   * The number of days for which to retain conversation messages.
   *
   * @public
   */
  RetentionDays?: number | undefined;
}

/**
 * @public
 */
export interface CreateAccountRequest {
  /**
   * The name of the Amazon Chime account.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface CreateAccountResponse {
  /**
   * The Amazon Chime account details.
   *
   * @public
   */
  Account?: Account | undefined;
}

/**
 * @public
 */
export interface CreateBotRequest {
  /**
   * The Amazon Chime account ID.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * The bot display name.
   *
   * @public
   */
  DisplayName: string | undefined;

  /**
   * The domain of the Amazon Chime Enterprise account.
   *
   * @public
   */
  Domain?: string | undefined;
}

/**
 * @public
 */
export interface CreateBotResponse {
  /**
   * The bot details.
   *
   * @public
   */
  Bot?: Bot | undefined;
}

/**
 * @public
 */
export interface CreateMeetingDialOutRequest {
  /**
   * The Amazon Chime SDK meeting ID.
   *
   * @public
   */
  MeetingId: string | undefined;

  /**
   * Phone number used as the caller ID when the remote party receives a call.
   *
   * @public
   */
  FromPhoneNumber: string | undefined;

  /**
   * Phone number called when inviting someone to a meeting.
   *
   * @public
   */
  ToPhoneNumber: string | undefined;

  /**
   * Token used by the Amazon Chime SDK attendee. Call the [CreateAttendee](https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateAttendee.html) action to get a join token.
   *
   * @public
   */
  JoinToken: string | undefined;
}

/**
 * @public
 */
export interface CreateMeetingDialOutResponse {
  /**
   * Unique ID that tracks API calls.
   *
   * @public
   */
  TransactionId?: string | undefined;
}

/**
 * @public
 */
export interface CreatePhoneNumberOrderRequest {
  /**
   * The phone number product type.
   *
   * @public
   */
  ProductType: PhoneNumberProductType | undefined;

  /**
   * List of phone numbers, in E.164 format.
   *
   * @public
   */
  E164PhoneNumbers: string[] | undefined;
}

/**
 * A phone number for which an order has been placed.
 *
 * @public
 */
export interface OrderedPhoneNumber {
  /**
   * The phone number, in E.164 format.
   *
   * @public
   */
  E164PhoneNumber?: string | undefined;

  /**
   * The phone number status.
   *
   * @public
   */
  Status?: OrderedPhoneNumberStatus | undefined;
}

/**
 * The details of a phone number order created for Amazon Chime.
 *
 * @public
 */
export interface PhoneNumberOrder {
  /**
   * The phone number order ID.
   *
   * @public
   */
  PhoneNumberOrderId?: string | undefined;

  /**
   * The phone number order product type.
   *
   * @public
   */
  ProductType?: PhoneNumberProductType | undefined;

  /**
   * The status of the phone number order.
   *
   * @public
   */
  Status?: PhoneNumberOrderStatus | undefined;

  /**
   * The ordered phone number details, such as the phone number in E.164 format and the phone number status.
   *
   * @public
   */
  OrderedPhoneNumbers?: OrderedPhoneNumber[] | undefined;

  /**
   * The phone number order creation time stamp, in ISO 8601 format.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * The updated phone number order time stamp, in ISO 8601 format.
   *
   * @public
   */
  UpdatedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface CreatePhoneNumberOrderResponse {
  /**
   * The phone number order details.
   *
   * @public
   */
  PhoneNumberOrder?: PhoneNumberOrder | undefined;
}

/**
 * @public
 */
export interface CreateRoomRequest {
  /**
   * The Amazon Chime account ID.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * The room name.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The idempotency token for the request.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * The Amazon Chime chat room details.
 *
 * @public
 */
export interface Room {
  /**
   * The room ID.
   *
   * @public
   */
  RoomId?: string | undefined;

  /**
   * The room name.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon Chime account ID.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The identifier of the room creator.
   *
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * The room creation timestamp, in ISO 8601 format.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * The room update timestamp, in ISO 8601 format.
   *
   * @public
   */
  UpdatedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface CreateRoomResponse {
  /**
   * The room details.
   *
   * @public
   */
  Room?: Room | undefined;
}

/**
 * @public
 */
export interface CreateRoomMembershipRequest {
  /**
   * The Amazon Chime account ID.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * The room ID.
   *
   * @public
   */
  RoomId: string | undefined;

  /**
   * The Amazon Chime member ID (user ID or bot ID).
   *
   * @public
   */
  MemberId: string | undefined;

  /**
   * The role of the member.
   *
   * @public
   */
  Role?: RoomMembershipRole | undefined;
}

/**
 * The member details, such as email address, name, member ID, and member type.
 *
 * @public
 */
export interface Member {
  /**
   * The member ID (user ID or bot ID).
   *
   * @public
   */
  MemberId?: string | undefined;

  /**
   * The member type.
   *
   * @public
   */
  MemberType?: MemberType | undefined;

  /**
   * The member email address.
   *
   * @public
   */
  Email?: string | undefined;

  /**
   * The member name.
   *
   * @public
   */
  FullName?: string | undefined;

  /**
   * The Amazon Chime account ID.
   *
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * The room membership details.
 *
 * @public
 */
export interface RoomMembership {
  /**
   * The room ID.
   *
   * @public
   */
  RoomId?: string | undefined;

  /**
   * The member details, such as email address, name, member ID, and member type.
   *
   * @public
   */
  Member?: Member | undefined;

  /**
   * The membership role.
   *
   * @public
   */
  Role?: RoomMembershipRole | undefined;

  /**
   * The identifier of the user that invited the room member.
   *
   * @public
   */
  InvitedBy?: string | undefined;

  /**
   * The room membership update timestamp, in ISO 8601 format.
   *
   * @public
   */
  UpdatedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface CreateRoomMembershipResponse {
  /**
   * The room membership details.
   *
   * @public
   */
  RoomMembership?: RoomMembership | undefined;
}

/**
 * @public
 */
export interface CreateUserRequest {
  /**
   * The Amazon Chime account ID.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * The user name.
   *
   * @public
   */
  Username?: string | undefined;

  /**
   * The user's email address.
   *
   * @public
   */
  Email?: string | undefined;

  /**
   * The user type.
   *
   * @public
   */
  UserType?: UserType | undefined;
}

/**
 * The user on the Amazon Chime account.
 *
 * @public
 */
export interface User {
  /**
   * The user ID.
   *
   * @public
   */
  UserId: string | undefined;

  /**
   * The Amazon Chime account ID.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The primary email address of the user.
   *
   * @public
   */
  PrimaryEmail?: string | undefined;

  /**
   * The primary phone number associated with the user.
   *
   * @public
   */
  PrimaryProvisionedNumber?: string | undefined;

  /**
   * The display name of the user.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * The license type for the user.
   *
   * @public
   */
  LicenseType?: License | undefined;

  /**
   * The user type.
   *
   * @public
   */
  UserType?: UserType | undefined;

  /**
   * The user registration status.
   *
   * @public
   */
  UserRegistrationStatus?: RegistrationStatus | undefined;

  /**
   * The user invite status.
   *
   * @public
   */
  UserInvitationStatus?: InviteStatus | undefined;

  /**
   * Date and time when the user is registered, in ISO 8601 format.
   *
   * @public
   */
  RegisteredOn?: Date | undefined;

  /**
   * Date and time when the user is invited to the Amazon Chime account, in ISO 8601 format.
   *
   * @public
   */
  InvitedOn?: Date | undefined;

  /**
   * The Alexa for Business metadata.
   *
   * @public
   */
  AlexaForBusinessMetadata?: AlexaForBusinessMetadata | undefined;

  /**
   * The user's personal meeting PIN.
   *
   * @public
   */
  PersonalPIN?: string | undefined;
}

/**
 * @public
 */
export interface CreateUserResponse {
  /**
   * The user on the Amazon Chime account.
   *
   * @public
   */
  User?: User | undefined;
}

/**
 * @public
 */
export interface DeleteAccountRequest {
  /**
   * The Amazon Chime account ID.
   *
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
   * The Amazon Chime account ID.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * The bot ID.
   *
   * @public
   */
  BotId: string | undefined;
}

/**
 * @public
 */
export interface DeletePhoneNumberRequest {
  /**
   * The phone number ID.
   *
   * @public
   */
  PhoneNumberId: string | undefined;
}

/**
 * @public
 */
export interface DeleteRoomRequest {
  /**
   * The Amazon Chime account ID.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * The chat room ID.
   *
   * @public
   */
  RoomId: string | undefined;
}

/**
 * @public
 */
export interface DeleteRoomMembershipRequest {
  /**
   * The Amazon Chime account ID.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * The room ID.
   *
   * @public
   */
  RoomId: string | undefined;

  /**
   * The member ID (user ID or bot ID).
   *
   * @public
   */
  MemberId: string | undefined;
}

/**
 * @public
 */
export interface DisassociatePhoneNumberFromUserRequest {
  /**
   * The Amazon Chime account ID.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * The user ID.
   *
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
   * The Amazon Chime account ID.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * The sign-in delegate group names.
   *
   * @public
   */
  GroupNames: string[] | undefined;
}

/**
 * @public
 */
export interface DisassociateSigninDelegateGroupsFromAccountResponse {}

/**
 * The configuration that allows a bot to receive outgoing events. Can be either an HTTPS endpoint or a Lambda function ARN.
 *
 * @public
 */
export interface EventsConfiguration {
  /**
   * The bot ID.
   *
   * @public
   */
  BotId?: string | undefined;

  /**
   * HTTPS endpoint that allows a bot to receive outgoing events.
   *
   * @public
   */
  OutboundEventsHTTPSEndpoint?: string | undefined;

  /**
   * Lambda function ARN that allows a bot to receive outgoing events.
   *
   * @public
   */
  LambdaFunctionArn?: string | undefined;
}

/**
 * @public
 */
export interface GetAccountRequest {
  /**
   * The Amazon Chime account ID.
   *
   * @public
   */
  AccountId: string | undefined;
}

/**
 * @public
 */
export interface GetAccountResponse {
  /**
   * The Amazon Chime account details.
   *
   * @public
   */
  Account?: Account | undefined;
}

/**
 * @public
 */
export interface GetAccountSettingsRequest {
  /**
   * The Amazon Chime account ID.
   *
   * @public
   */
  AccountId: string | undefined;
}

/**
 * @public
 */
export interface GetAccountSettingsResponse {
  /**
   * The Amazon Chime account settings.
   *
   * @public
   */
  AccountSettings?: AccountSettings | undefined;
}

/**
 * @public
 */
export interface GetBotRequest {
  /**
   * The Amazon Chime account ID.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * The bot ID.
   *
   * @public
   */
  BotId: string | undefined;
}

/**
 * @public
 */
export interface GetBotResponse {
  /**
   * The chat bot details.
   *
   * @public
   */
  Bot?: Bot | undefined;
}

/**
 * @public
 */
export interface GetEventsConfigurationRequest {
  /**
   * The Amazon Chime account ID.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * The bot ID.
   *
   * @public
   */
  BotId: string | undefined;
}

/**
 * @public
 */
export interface GetEventsConfigurationResponse {
  /**
   * The events configuration details.
   *
   * @public
   */
  EventsConfiguration?: EventsConfiguration | undefined;
}

/**
 * The Amazon Chime Voice Connector settings. Includes any Amazon S3 buckets designated for storing call detail records.
 *
 * @public
 */
export interface VoiceConnectorSettings {
  /**
   * The Amazon S3 bucket designated for call detail record storage.
   *
   * @public
   */
  CdrBucket?: string | undefined;
}

/**
 * @public
 */
export interface GetGlobalSettingsResponse {
  /**
   * The Amazon Chime Business Calling settings.
   *
   * @public
   */
  BusinessCalling?: BusinessCallingSettings | undefined;

  /**
   * The Amazon Chime Voice Connector settings.
   *
   * @public
   */
  VoiceConnector?: VoiceConnectorSettings | undefined;
}

/**
 * @public
 */
export interface GetPhoneNumberRequest {
  /**
   * The phone number ID.
   *
   * @public
   */
  PhoneNumberId: string | undefined;
}

/**
 * The phone number associations, such as Amazon Chime account ID, Amazon Chime user ID, Amazon Chime Voice Connector ID, or Amazon Chime Voice Connector group ID.
 *
 * @public
 */
export interface PhoneNumberAssociation {
  /**
   * Contains the ID for the entity specified in Name.
   *
   * @public
   */
  Value?: string | undefined;

  /**
   * Defines the association with an Amazon Chime account ID, user ID, Amazon Chime Voice Connector ID, or Amazon Chime Voice Connector group ID.
   *
   * @public
   */
  Name?: PhoneNumberAssociationName | undefined;

  /**
   * The timestamp of the phone number association, in ISO 8601 format.
   *
   * @public
   */
  AssociatedTimestamp?: Date | undefined;
}

/**
 * The phone number capabilities for Amazon Chime Business Calling phone numbers, such as enabled inbound and outbound calling and text messaging.
 *
 * @public
 */
export interface PhoneNumberCapabilities {
  /**
   * Allows or denies inbound calling for the specified phone number.
   *
   * @public
   */
  InboundCall?: boolean | undefined;

  /**
   * Allows or denies outbound calling for the specified phone number.
   *
   * @public
   */
  OutboundCall?: boolean | undefined;

  /**
   * Allows or denies inbound SMS messaging for the specified phone number.
   *
   * @public
   */
  InboundSMS?: boolean | undefined;

  /**
   * Allows or denies outbound SMS messaging for the specified phone number.
   *
   * @public
   */
  OutboundSMS?: boolean | undefined;

  /**
   * Allows or denies inbound MMS messaging for the specified phone number.
   *
   * @public
   */
  InboundMMS?: boolean | undefined;

  /**
   * Allows or denies outbound MMS messaging for the specified phone number.
   *
   * @public
   */
  OutboundMMS?: boolean | undefined;
}

/**
 * A phone number used for Amazon Chime Business Calling or an Amazon Chime Voice Connector.
 *
 * @public
 */
export interface PhoneNumber {
  /**
   * The phone number ID.
   *
   * @public
   */
  PhoneNumberId?: string | undefined;

  /**
   * The phone number, in E.164 format.
   *
   * @public
   */
  E164PhoneNumber?: string | undefined;

  /**
   * The phone number country. Format: ISO 3166-1 alpha-2.
   *
   * @public
   */
  Country?: string | undefined;

  /**
   * The phone number type.
   *
   * @public
   */
  Type?: PhoneNumberType | undefined;

  /**
   * The phone number product type.
   *
   * @public
   */
  ProductType?: PhoneNumberProductType | undefined;

  /**
   * The phone number status.
   *
   * @public
   */
  Status?: PhoneNumberStatus | undefined;

  /**
   * The phone number capabilities.
   *
   * @public
   */
  Capabilities?: PhoneNumberCapabilities | undefined;

  /**
   * The phone number associations.
   *
   * @public
   */
  Associations?: PhoneNumberAssociation[] | undefined;

  /**
   * The outbound calling name associated with the phone number.
   *
   * @public
   */
  CallingName?: string | undefined;

  /**
   * The outbound calling name status.
   *
   * @public
   */
  CallingNameStatus?: CallingNameStatus | undefined;

  /**
   * The phone number creation timestamp, in ISO 8601 format.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * The updated phone number timestamp, in ISO 8601 format.
   *
   * @public
   */
  UpdatedTimestamp?: Date | undefined;

  /**
   * The deleted phone number timestamp, in ISO 8601 format.
   *
   * @public
   */
  DeletionTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface GetPhoneNumberResponse {
  /**
   * The phone number details.
   *
   * @public
   */
  PhoneNumber?: PhoneNumber | undefined;
}

/**
 * @public
 */
export interface GetPhoneNumberOrderRequest {
  /**
   * The ID for the phone number order.
   *
   * @public
   */
  PhoneNumberOrderId: string | undefined;
}

/**
 * @public
 */
export interface GetPhoneNumberOrderResponse {
  /**
   * The phone number order details.
   *
   * @public
   */
  PhoneNumberOrder?: PhoneNumberOrder | undefined;
}

/**
 * @public
 */
export interface GetPhoneNumberSettingsResponse {
  /**
   * The default outbound calling name for the account.
   *
   * @public
   */
  CallingName?: string | undefined;

  /**
   * The updated outbound calling name timestamp, in ISO 8601 format.
   *
   * @public
   */
  CallingNameUpdatedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface GetRetentionSettingsRequest {
  /**
   * The Amazon Chime account ID.
   *
   * @public
   */
  AccountId: string | undefined;
}

/**
 * The retention settings that determine how long to retain chat-room messages for an Amazon Chime Enterprise account.
 *
 * @public
 */
export interface RoomRetentionSettings {
  /**
   * The number of days for which to retain chat-room messages.
   *
   * @public
   */
  RetentionDays?: number | undefined;
}

/**
 * The retention settings for an Amazon Chime Enterprise account that determine how long to retain items such as chat-room messages and chat-conversation messages.
 *
 * @public
 */
export interface RetentionSettings {
  /**
   * The chat room retention settings.
   *
   * @public
   */
  RoomRetentionSettings?: RoomRetentionSettings | undefined;

  /**
   * The chat conversation retention settings.
   *
   * @public
   */
  ConversationRetentionSettings?: ConversationRetentionSettings | undefined;
}

/**
 * @public
 */
export interface GetRetentionSettingsResponse {
  /**
   * The retention settings.
   *
   * @public
   */
  RetentionSettings?: RetentionSettings | undefined;

  /**
   * The timestamp representing the time at which the specified items are permanently deleted, in ISO 8601 format.
   *
   * @public
   */
  InitiateDeletionTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface GetRoomRequest {
  /**
   * The Amazon Chime account ID.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * The room ID.
   *
   * @public
   */
  RoomId: string | undefined;
}

/**
 * @public
 */
export interface GetRoomResponse {
  /**
   * The room details.
   *
   * @public
   */
  Room?: Room | undefined;
}

/**
 * @public
 */
export interface GetUserRequest {
  /**
   * The Amazon Chime account ID.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * The user ID.
   *
   * @public
   */
  UserId: string | undefined;
}

/**
 * @public
 */
export interface GetUserResponse {
  /**
   * The user details.
   *
   * @public
   */
  User?: User | undefined;
}

/**
 * @public
 */
export interface GetUserSettingsRequest {
  /**
   * The Amazon Chime account ID.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * The user ID.
   *
   * @public
   */
  UserId: string | undefined;
}

/**
 * Settings that allow management of telephony permissions for an Amazon Chime user, such as inbound and outbound calling and text messaging.
 *
 * @public
 */
export interface TelephonySettings {
  /**
   * Allows or denies inbound calling.
   *
   * @public
   */
  InboundCalling: boolean | undefined;

  /**
   * Allows or denies outbound calling.
   *
   * @public
   */
  OutboundCalling: boolean | undefined;

  /**
   * Allows or denies SMS messaging.
   *
   * @public
   */
  SMS: boolean | undefined;
}

/**
 * Settings associated with an Amazon Chime user, including inbound and outbound calling and text messaging.
 *
 * @public
 */
export interface UserSettings {
  /**
   * The telephony settings associated with the user.
   *
   * @public
   */
  Telephony: TelephonySettings | undefined;
}

/**
 * @public
 */
export interface GetUserSettingsResponse {
  /**
   * The user settings.
   *
   * @public
   */
  UserSettings?: UserSettings | undefined;
}

/**
 * Invitation object returned after emailing users to invite them to join the Amazon Chime `Team` account.
 *
 * @public
 */
export interface Invite {
  /**
   * The invite ID.
   *
   * @public
   */
  InviteId?: string | undefined;

  /**
   * The status of the invite.
   *
   * @public
   */
  Status?: InviteStatus | undefined;

  /**
   * The email address to which the invite is sent.
   *
   * @public
   */
  EmailAddress?: string | undefined;

  /**
   * The status of the invite email.
   *
   * @public
   */
  EmailStatus?: EmailStatus | undefined;
}

/**
 * @public
 */
export interface InviteUsersRequest {
  /**
   * The Amazon Chime account ID.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * The user email addresses to which to send the email invitation.
   *
   * @public
   */
  UserEmailList: string[] | undefined;

  /**
   * The user type.
   *
   * @public
   */
  UserType?: UserType | undefined;
}

/**
 * @public
 */
export interface InviteUsersResponse {
  /**
   * The email invitation details.
   *
   * @public
   */
  Invites?: Invite[] | undefined;
}

/**
 * @public
 */
export interface ListAccountsRequest {
  /**
   * Amazon Chime account name prefix with which to filter results.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * User email address with which to filter results.
   *
   * @public
   */
  UserEmail?: string | undefined;

  /**
   * The token to use to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return in a single call. Defaults to 100.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAccountsResponse {
  /**
   * List of Amazon Chime accounts and account details.
   *
   * @public
   */
  Accounts?: Account[] | undefined;

  /**
   * The token to use to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBotsRequest {
  /**
   * The Amazon Chime account ID.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * The maximum number of results to return in a single call. The default is 10.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token to use to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBotsResponse {
  /**
   * List of bots and bot details.
   *
   * @public
   */
  Bots?: Bot[] | undefined;

  /**
   * The token to use to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPhoneNumberOrdersRequest {
  /**
   * The token to use to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListPhoneNumberOrdersResponse {
  /**
   * The phone number order details.
   *
   * @public
   */
  PhoneNumberOrders?: PhoneNumberOrder[] | undefined;

  /**
   * The token to use to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPhoneNumbersRequest {
  /**
   * The phone number status.
   *
   * @public
   */
  Status?: PhoneNumberStatus | undefined;

  /**
   * The phone number product type.
   *
   * @public
   */
  ProductType?: PhoneNumberProductType | undefined;

  /**
   * The filter to use to limit the number of results.
   *
   * @public
   */
  FilterName?: PhoneNumberAssociationName | undefined;

  /**
   * The value to use for the filter.
   *
   * @public
   */
  FilterValue?: string | undefined;

  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token to use to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPhoneNumbersResponse {
  /**
   * The phone number details.
   *
   * @public
   */
  PhoneNumbers?: PhoneNumber[] | undefined;

  /**
   * The token to use to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRoomMembershipsRequest {
  /**
   * The Amazon Chime account ID.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * The room ID.
   *
   * @public
   */
  RoomId: string | undefined;

  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token to use to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRoomMembershipsResponse {
  /**
   * The room membership details.
   *
   * @public
   */
  RoomMemberships?: RoomMembership[] | undefined;

  /**
   * The token to use to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRoomsRequest {
  /**
   * The Amazon Chime account ID.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * The member ID (user ID or bot ID).
   *
   * @public
   */
  MemberId?: string | undefined;

  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token to use to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRoomsResponse {
  /**
   * The room details.
   *
   * @public
   */
  Rooms?: Room[] | undefined;

  /**
   * The token to use to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSupportedPhoneNumberCountriesRequest {
  /**
   * The phone number product type.
   *
   * @public
   */
  ProductType: PhoneNumberProductType | undefined;
}

/**
 * The phone number country.
 *
 * @public
 */
export interface PhoneNumberCountry {
  /**
   * The phone number country code. Format: ISO 3166-1 alpha-2.
   *
   * @public
   */
  CountryCode?: string | undefined;

  /**
   * The supported phone number types.
   *
   * @public
   */
  SupportedPhoneNumberTypes?: PhoneNumberType[] | undefined;
}

/**
 * @public
 */
export interface ListSupportedPhoneNumberCountriesResponse {
  /**
   * The supported phone number countries.
   *
   * @public
   */
  PhoneNumberCountries?: PhoneNumberCountry[] | undefined;
}

/**
 * @public
 */
export interface ListUsersRequest {
  /**
   * The Amazon Chime account ID.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * Optional. The user email address used to filter results. Maximum 1.
   *
   * @public
   */
  UserEmail?: string | undefined;

  /**
   * The user type.
   *
   * @public
   */
  UserType?: UserType | undefined;

  /**
   * The maximum number of results to return in a single call. Defaults to 100.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token to use to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListUsersResponse {
  /**
   * List of users and user details.
   *
   * @public
   */
  Users?: User[] | undefined;

  /**
   * The token to use to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface LogoutUserRequest {
  /**
   * The Amazon Chime account ID.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * The user ID.
   *
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
   * The Amazon Chime account ID.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * The bot ID.
   *
   * @public
   */
  BotId: string | undefined;

  /**
   * HTTPS endpoint that allows the bot to receive outgoing events.
   *
   * @public
   */
  OutboundEventsHTTPSEndpoint?: string | undefined;

  /**
   * Lambda function ARN that allows the bot to receive outgoing events.
   *
   * @public
   */
  LambdaFunctionArn?: string | undefined;
}

/**
 * @public
 */
export interface PutEventsConfigurationResponse {
  /**
   * The configuration that allows a bot to receive outgoing events. Can be an HTTPS endpoint or an AWS Lambda function ARN.
   *
   * @public
   */
  EventsConfiguration?: EventsConfiguration | undefined;
}

/**
 * @public
 */
export interface PutRetentionSettingsRequest {
  /**
   * The Amazon Chime account ID.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * The retention settings.
   *
   * @public
   */
  RetentionSettings: RetentionSettings | undefined;
}

/**
 * @public
 */
export interface PutRetentionSettingsResponse {
  /**
   * The retention settings.
   *
   * @public
   */
  RetentionSettings?: RetentionSettings | undefined;

  /**
   * The timestamp representing the time at which the specified items are permanently deleted, in ISO 8601 format.
   *
   * @public
   */
  InitiateDeletionTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface RedactConversationMessageRequest {
  /**
   * The Amazon Chime account ID.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * The conversation ID.
   *
   * @public
   */
  ConversationId: string | undefined;

  /**
   * The message ID.
   *
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
   * The Amazon Chime account ID.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * The room ID.
   *
   * @public
   */
  RoomId: string | undefined;

  /**
   * The message ID.
   *
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
   * The Amazon Chime account ID.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * The bot ID.
   *
   * @public
   */
  BotId: string | undefined;
}

/**
 * @public
 */
export interface RegenerateSecurityTokenResponse {
  /**
   * A resource that allows Enterprise account administrators to configure an interface that receives events from Amazon Chime.
   *
   * @public
   */
  Bot?: Bot | undefined;
}

/**
 * @public
 */
export interface ResetPersonalPINRequest {
  /**
   * The Amazon Chime account ID.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * The user ID.
   *
   * @public
   */
  UserId: string | undefined;
}

/**
 * @public
 */
export interface ResetPersonalPINResponse {
  /**
   * The user details and new personal meeting PIN.
   *
   * @public
   */
  User?: User | undefined;
}

/**
 * @public
 */
export interface RestorePhoneNumberRequest {
  /**
   * The phone number.
   *
   * @public
   */
  PhoneNumberId: string | undefined;
}

/**
 * @public
 */
export interface RestorePhoneNumberResponse {
  /**
   * The phone number details.
   *
   * @public
   */
  PhoneNumber?: PhoneNumber | undefined;
}

/**
 * @public
 */
export interface SearchAvailablePhoneNumbersRequest {
  /**
   * The area code used to filter results. Only applies to the US.
   *
   * @public
   */
  AreaCode?: string | undefined;

  /**
   * The city used to filter results. Only applies to the US.
   *
   * @public
   */
  City?: string | undefined;

  /**
   * The country used to filter results. Defaults to the US Format: ISO 3166-1 alpha-2.
   *
   * @public
   */
  Country?: string | undefined;

  /**
   * The state used to filter results. Required only if you provide `City`. Only applies to the US.
   *
   * @public
   */
  State?: string | undefined;

  /**
   * The toll-free prefix that you use to filter results. Only applies to the US.
   *
   * @public
   */
  TollFreePrefix?: string | undefined;

  /**
   * The phone number type used to filter results. Required for non-US numbers.
   *
   * @public
   */
  PhoneNumberType?: PhoneNumberType | undefined;

  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token used to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface SearchAvailablePhoneNumbersResponse {
  /**
   * List of phone numbers, in E.164 format.
   *
   * @public
   */
  E164PhoneNumbers?: string[] | undefined;

  /**
   * The token used to retrieve the next page of search results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAccountRequest {
  /**
   * The Amazon Chime account ID.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * The new name for the specified Amazon Chime account.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The default license applied when you add users to an Amazon Chime account.
   *
   * @public
   */
  DefaultLicense?: License | undefined;
}

/**
 * @public
 */
export interface UpdateAccountResponse {
  /**
   * The updated Amazon Chime account details.
   *
   * @public
   */
  Account?: Account | undefined;
}

/**
 * @public
 */
export interface UpdateAccountSettingsRequest {
  /**
   * The Amazon Chime account ID.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * The Amazon Chime account settings to update.
   *
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
   * The Amazon Chime account ID.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * The bot ID.
   *
   * @public
   */
  BotId: string | undefined;

  /**
   * When true, stops the specified bot from running in your account.
   *
   * @public
   */
  Disabled?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateBotResponse {
  /**
   * The updated bot details.
   *
   * @public
   */
  Bot?: Bot | undefined;
}

/**
 * @public
 */
export interface UpdateGlobalSettingsRequest {
  /**
   * The Amazon Chime Business Calling settings.
   *
   * @public
   */
  BusinessCalling?: BusinessCallingSettings | undefined;

  /**
   * The Amazon Chime Voice Connector settings.
   *
   * @public
   */
  VoiceConnector?: VoiceConnectorSettings | undefined;
}

/**
 * @public
 */
export interface UpdatePhoneNumberRequest {
  /**
   * The phone number ID.
   *
   * @public
   */
  PhoneNumberId: string | undefined;

  /**
   * The product type.
   *
   * @public
   */
  ProductType?: PhoneNumberProductType | undefined;

  /**
   * The outbound calling name associated with the phone number.
   *
   * @public
   */
  CallingName?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePhoneNumberResponse {
  /**
   * The updated phone number details.
   *
   * @public
   */
  PhoneNumber?: PhoneNumber | undefined;
}

/**
 * @public
 */
export interface UpdatePhoneNumberSettingsRequest {
  /**
   * The default outbound calling name for the account.
   *
   * @public
   */
  CallingName: string | undefined;
}

/**
 * @public
 */
export interface UpdateRoomRequest {
  /**
   * The Amazon Chime account ID.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * The room ID.
   *
   * @public
   */
  RoomId: string | undefined;

  /**
   * The room name.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface UpdateRoomResponse {
  /**
   * The room details.
   *
   * @public
   */
  Room?: Room | undefined;
}

/**
 * @public
 */
export interface UpdateRoomMembershipRequest {
  /**
   * The Amazon Chime account ID.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * The room ID.
   *
   * @public
   */
  RoomId: string | undefined;

  /**
   * The member ID.
   *
   * @public
   */
  MemberId: string | undefined;

  /**
   * The role of the member.
   *
   * @public
   */
  Role?: RoomMembershipRole | undefined;
}

/**
 * @public
 */
export interface UpdateRoomMembershipResponse {
  /**
   * The room membership details.
   *
   * @public
   */
  RoomMembership?: RoomMembership | undefined;
}

/**
 * @public
 */
export interface UpdateUserRequest {
  /**
   * The Amazon Chime account ID.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * The user ID.
   *
   * @public
   */
  UserId: string | undefined;

  /**
   * The user license type to update. This must be a supported license type for the Amazon Chime account that the user belongs to.
   *
   * @public
   */
  LicenseType?: License | undefined;

  /**
   * The user type.
   *
   * @public
   */
  UserType?: UserType | undefined;

  /**
   * The Alexa for Business metadata.
   *
   * @public
   */
  AlexaForBusinessMetadata?: AlexaForBusinessMetadata | undefined;
}

/**
 * @public
 */
export interface UpdateUserResponse {
  /**
   * The updated user details.
   *
   * @public
   */
  User?: User | undefined;
}

/**
 * @public
 */
export interface UpdateUserSettingsRequest {
  /**
   * The Amazon Chime account ID.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * The user ID.
   *
   * @public
   */
  UserId: string | undefined;

  /**
   * The user settings to update.
   *
   * @public
   */
  UserSettings: UserSettings | undefined;
}
