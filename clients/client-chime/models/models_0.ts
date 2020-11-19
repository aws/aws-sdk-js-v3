import { SENSITIVE_STRING, SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

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
  Throttling = "Throttling",
  Unauthorized = "Unauthorized",
  Unprocessable = "Unprocessable",
  VoiceConnectorGroupAssociationsExist = "VoiceConnectorGroupAssociationsExist",
}

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
}

export enum AccountType {
  EnterpriseDirectory = "EnterpriseDirectory",
  EnterpriseLWA = "EnterpriseLWA",
  EnterpriseOIDC = "EnterpriseOIDC",
  Team = "Team",
}

export enum License {
  Basic = "Basic",
  Plus = "Plus",
  Pro = "Pro",
  ProTrial = "ProTrial",
}

/**
 * <p>An Active Directory (AD) group whose members are granted permission to act as delegates.</p>
 */
export interface SigninDelegateGroup {
  /**
   * <p>The group name.</p>
   */
  GroupName?: string;
}

export namespace SigninDelegateGroup {
  export const filterSensitiveLog = (obj: SigninDelegateGroup): any => ({
    ...obj,
  });
}

/**
 * <p>The Amazon Chime account details. An AWS account can have multiple Amazon Chime accounts.</p>
 */
export interface Account {
  /**
   * <p>The AWS account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The Amazon Chime account name.</p>
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Chime account type. For more information
   *        about different account types, see <a href="https://docs.aws.amazon.com/chime/latest/ag/manage-chime-account.html">Managing Your Amazon Chime Accounts</a> in the
   *        <i>Amazon
   *          Chime Administration Guide</i>.</p>
   */
  AccountType?: AccountType | string;

  /**
   * <p>The Amazon Chime account creation timestamp, in ISO 8601 format.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The default license for the Amazon Chime account.</p>
   */
  DefaultLicense?: License | string;

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
}

/**
 * <p>Settings related to the Amazon Chime account. This includes settings that start or
 *       stop remote control of shared screens, or start or stop the dial-out option in the Amazon
 *       Chime web application. For more information about these settings, see <a href="https://docs.aws.amazon.com/chime/latest/ag/policies.html">Use the Policies Page</a> in
 *       the <i>Amazon Chime Administration Guide</i>.</p>
 */
export interface AccountSettings {
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
}

/**
 * <p>The Alexa for Business metadata associated with an Amazon Chime user, used to integrate Alexa for Business with a device.</p>
 */
export interface AlexaForBusinessMetadata {
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
}

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
  export const filterSensitiveLog = (obj: AssociatePhoneNumbersWithVoiceConnectorRequest): any => ({
    ...obj,
    ...(obj.E164PhoneNumbers && { E164PhoneNumbers: SENSITIVE_STRING }),
  });
}

/**
 * <p>If the phone number action fails for one or more of the phone numbers in the request, a
 *     list of the phone numbers is returned, along with error codes and error messages.</p>
 */
export interface PhoneNumberError {
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
}

export interface AssociatePhoneNumbersWithVoiceConnectorResponse {
  /**
   * <p>If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages.</p>
   */
  PhoneNumberErrors?: PhoneNumberError[];
}

export namespace AssociatePhoneNumbersWithVoiceConnectorResponse {
  export const filterSensitiveLog = (obj: AssociatePhoneNumbersWithVoiceConnectorResponse): any => ({
    ...obj,
  });
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
  export const filterSensitiveLog = (obj: ForbiddenException): any => ({
    ...obj,
  });
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
  export const filterSensitiveLog = (obj: NotFoundException): any => ({
    ...obj,
  });
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
}

/**
 * <p>The service is currently unavailable.</p>
 */
export interface ServiceUnavailableException extends __SmithyException, $MetadataBearer {
  name: "ServiceUnavailableException";
  $fault: "server";
  Code?: ErrorCode | string;
  Message?: string;
}

export namespace ServiceUnavailableException {
  export const filterSensitiveLog = (obj: ServiceUnavailableException): any => ({
    ...obj,
  });
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
  export const filterSensitiveLog = (obj: AssociatePhoneNumberWithUserRequest): any => ({
    ...obj,
    ...(obj.E164PhoneNumber && { E164PhoneNumber: SENSITIVE_STRING }),
  });
}

export interface AssociatePhoneNumberWithUserResponse {}

export namespace AssociatePhoneNumberWithUserResponse {
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
  export const filterSensitiveLog = (obj: AssociateSigninDelegateGroupsWithAccountRequest): any => ({
    ...obj,
  });
}

export interface AssociateSigninDelegateGroupsWithAccountResponse {}

export namespace AssociateSigninDelegateGroupsWithAccountResponse {
  export const filterSensitiveLog = (obj: AssociateSigninDelegateGroupsWithAccountResponse): any => ({
    ...obj,
  });
}

/**
 * <p>An Amazon Chime SDK meeting attendee. Includes a unique <code>AttendeeId</code>
 *       and <code>JoinToken</code>. The <code>JoinToken</code> allows a client to authenticate and join as the specified attendee. The <code>JoinToken</code> expires when the meeting ends or when <a>DeleteAttendee</a> is called. After that, the attendee is unable to join the meeting.</p>
 *          <p>We recommend securely transferring each <code>JoinToken</code> from your server
 *       application to the client so that no other client has access to the token except for the one authorized to represent the attendee.</p>
 */
export interface Attendee {
  /**
   * <p>The Amazon Chime SDK external user ID. An idempotency token. Links the attendee to an identity managed by a builder application.
   *       If you create an attendee with the same external user id, the service returns the existing record.</p>
   */
  ExternalUserId?: string;

  /**
   * <p>The Amazon Chime SDK attendee ID.</p>
   */
  AttendeeId?: string;

  /**
   * <p>The join token used by the Amazon Chime SDK attendee.</p>
   */
  JoinToken?: string;
}

export namespace Attendee {
  export const filterSensitiveLog = (obj: Attendee): any => ({
    ...obj,
    ...(obj.ExternalUserId && { ExternalUserId: SENSITIVE_STRING }),
    ...(obj.JoinToken && { JoinToken: SENSITIVE_STRING }),
  });
}

/**
 * <p>Describes a tag applied to a resource.</p>
 */
export interface Tag {
  /**
   * <p>The key of the tag.</p>
   */
  Key: string | undefined;

  /**
   * <p>The value of the tag.</p>
   */
  Value: string | undefined;
}

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
    ...(obj.Key && { Key: SENSITIVE_STRING }),
    ...(obj.Value && { Value: SENSITIVE_STRING }),
  });
}

/**
 * <p>The Amazon Chime SDK attendee fields to create, used with the BatchCreateAttendee action.</p>
 */
export interface CreateAttendeeRequestItem {
  /**
   * <p>The Amazon Chime SDK external user ID. An idempotency token. Links the attendee to an identity managed by a builder application.
   *       If you create an attendee with the same external user id, the service returns the existing record.</p>
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
  export const filterSensitiveLog = (obj: BatchCreateAttendeeRequest): any => ({
    ...obj,
    ...(obj.Attendees && {
      Attendees: obj.Attendees.map((item) => CreateAttendeeRequestItem.filterSensitiveLog(item)),
    }),
  });
}

/**
 * <p>The list of errors returned when errors are encountered during the BatchCreateAttendee and CreateAttendee actions. This includes external user IDs, error codes, and error messages.</p>
 */
export interface CreateAttendeeError {
  /**
   * <p>The Amazon Chime SDK external user ID. An idempotency token. Links the attendee to an identity managed by a builder application.
   *       If you create an attendee with the same external user id, the service returns the existing record.</p>
   */
  ExternalUserId?: string;

  /**
   * <p>The error code.</p>
   */
  ErrorCode?: string;

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
  export const filterSensitiveLog = (obj: BatchCreateAttendeeResponse): any => ({
    ...obj,
    ...(obj.Attendees && { Attendees: obj.Attendees.map((item) => Attendee.filterSensitiveLog(item)) }),
    ...(obj.Errors && { Errors: obj.Errors.map((item) => CreateAttendeeError.filterSensitiveLog(item)) }),
  });
}

/**
 * <p>The request exceeds the resource limit.</p>
 */
export interface ResourceLimitExceededException extends __SmithyException, $MetadataBearer {
  name: "ResourceLimitExceededException";
  $fault: "client";
  Code?: ErrorCode | string;
  Message?: string;
}

export namespace ResourceLimitExceededException {
  export const filterSensitiveLog = (obj: ResourceLimitExceededException): any => ({
    ...obj,
  });
}

export enum RoomMembershipRole {
  Administrator = "Administrator",
  Member = "Member",
}

/**
 * <p>Membership details, such as member ID and member role.</p>
 */
export interface MembershipItem {
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
  export const filterSensitiveLog = (obj: BatchCreateRoomMembershipRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The list of errors returned when a member action results in an error.</p>
 */
export interface MemberError {
  /**
   * <p>The member ID.</p>
   */
  MemberId?: string;

  /**
   * <p>The error code.</p>
   */
  ErrorCode?: ErrorCode | string;

  /**
   * <p>The error message.</p>
   */
  ErrorMessage?: string;
}

export namespace MemberError {
  export const filterSensitiveLog = (obj: MemberError): any => ({
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
  export const filterSensitiveLog = (obj: BatchSuspendUserRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The list of errors returned when errors are encountered during the <a>BatchSuspendUser</a>, <a>BatchUnsuspendUser</a>, or <a>BatchUpdateUser</a> actions. This includes user IDs, error codes, and error
 *       messages.</p>
 */
export interface UserError {
  /**
   * <p>The user ID for which the action failed.</p>
   */
  UserId?: string;

  /**
   * <p>The error code.</p>
   */
  ErrorCode?: ErrorCode | string;

  /**
   * <p>The error message.</p>
   */
  ErrorMessage?: string;
}

export namespace UserError {
  export const filterSensitiveLog = (obj: UserError): any => ({
    ...obj,
  });
}

export interface BatchSuspendUserResponse {
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
  export const filterSensitiveLog = (obj: BatchUnsuspendUserRequest): any => ({
    ...obj,
  });
}

export interface BatchUnsuspendUserResponse {
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
}

export enum PhoneNumberProductType {
  BusinessCalling = "BusinessCalling",
  VoiceConnector = "VoiceConnector",
}

/**
 * <p>The phone number ID, product type, or calling name fields to update, used with the <a>BatchUpdatePhoneNumber</a> and <a>UpdatePhoneNumber</a> actions.</p>
 */
export interface UpdatePhoneNumberRequestItem {
  /**
   * <p>The phone number ID to update.</p>
   */
  PhoneNumberId: string | undefined;

  /**
   * <p>The product type to update.</p>
   */
  ProductType?: PhoneNumberProductType | string;

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
}

export interface BatchUpdatePhoneNumberRequest {
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
}

export interface BatchUpdatePhoneNumberResponse {
  /**
   * <p>If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages.</p>
   */
  PhoneNumberErrors?: PhoneNumberError[];
}

export namespace BatchUpdatePhoneNumberResponse {
  export const filterSensitiveLog = (obj: BatchUpdatePhoneNumberResponse): any => ({
    ...obj,
  });
}

export enum UserType {
  PrivateUser = "PrivateUser",
  SharedDevice = "SharedDevice",
}

/**
 * <p>The user ID and user fields to update, used with the <a>BatchUpdateUser</a> action.</p>
 */
export interface UpdateUserRequestItem {
  /**
   * <p>The user ID.</p>
   */
  UserId: string | undefined;

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
}

export namespace UpdateUserRequestItem {
  export const filterSensitiveLog = (obj: UpdateUserRequestItem): any => ({
    ...obj,
    ...(obj.AlexaForBusinessMetadata && {
      AlexaForBusinessMetadata: AlexaForBusinessMetadata.filterSensitiveLog(obj.AlexaForBusinessMetadata),
    }),
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
  export const filterSensitiveLog = (obj: BatchUpdateUserRequest): any => ({
    ...obj,
    ...(obj.UpdateUserRequestItems && {
      UpdateUserRequestItems: obj.UpdateUserRequestItems.map((item) => UpdateUserRequestItem.filterSensitiveLog(item)),
    }),
  });
}

export interface BatchUpdateUserResponse {
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
}

export enum BotType {
  ChatBot = "ChatBot",
}

/**
 * <p>A resource that allows Enterprise account administrators to configure an interface to receive events from Amazon Chime.</p>
 */
export interface Bot {
  /**
   * <p>The bot ID.</p>
   */
  BotId?: string;

  /**
   * <p>The unique ID for the bot user.</p>
   */
  UserId?: string;

  /**
   * <p>The bot display name.</p>
   */
  DisplayName?: string;

  /**
   * <p>The bot type.</p>
   */
  BotType?: BotType | string;

  /**
   * <p>When true, the bot is stopped from running in your account.</p>
   */
  Disabled?: boolean;

  /**
   * <p>The bot creation timestamp, in ISO 8601 format.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The updated bot timestamp, in ISO 8601 format.</p>
   */
  UpdatedTimestamp?: Date;

  /**
   * <p>The bot email address.</p>
   */
  BotEmail?: string;

  /**
   * <p>The security token used to authenticate Amazon Chime with the outgoing event endpoint.</p>
   */
  SecurityToken?: string;
}

export namespace Bot {
  export const filterSensitiveLog = (obj: Bot): any => ({
    ...obj,
    ...(obj.DisplayName && { DisplayName: SENSITIVE_STRING }),
    ...(obj.BotEmail && { BotEmail: SENSITIVE_STRING }),
    ...(obj.SecurityToken && { SecurityToken: SENSITIVE_STRING }),
  });
}

/**
 * <p>The Amazon Chime Business Calling settings for the administrator's AWS account.
 *       Includes any Amazon S3 buckets designated for storing call detail records.</p>
 */
export interface BusinessCallingSettings {
  /**
   * <p>The Amazon S3 bucket designated for call detail record storage.</p>
   */
  CdrBucket?: string;
}

export namespace BusinessCallingSettings {
  export const filterSensitiveLog = (obj: BusinessCallingSettings): any => ({
    ...obj,
  });
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
  Code?: ErrorCode | string;
  Message?: string;
}

export namespace ConflictException {
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
}

/**
 * <p>The retention settings that determine how long to retain chat conversation messages for an Amazon Chime Enterprise account.</p>
 */
export interface ConversationRetentionSettings {
  /**
   * <p>The number of days for which to retain chat conversation messages.</p>
   */
  RetentionDays?: number;
}

export namespace ConversationRetentionSettings {
  export const filterSensitiveLog = (obj: ConversationRetentionSettings): any => ({
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
  export const filterSensitiveLog = (obj: CreateAccountRequest): any => ({
    ...obj,
  });
}

export interface CreateAccountResponse {
  /**
   * <p>The Amazon Chime account details. An AWS account can have multiple Amazon Chime accounts.</p>
   */
  Account?: Account;
}

export namespace CreateAccountResponse {
  export const filterSensitiveLog = (obj: CreateAccountResponse): any => ({
    ...obj,
  });
}

export interface CreateAttendeeRequest {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;

  /**
   * <p>The Amazon Chime SDK external user ID. An idempotency token. Links the attendee to an identity managed by a builder application.
   *       If you create an attendee with the same external user id, the service returns the existing record.</p>
   */
  ExternalUserId: string | undefined;

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
}

export interface CreateAttendeeResponse {
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
  export const filterSensitiveLog = (obj: CreateBotResponse): any => ({
    ...obj,
    ...(obj.Bot && { Bot: Bot.filterSensitiveLog(obj.Bot) }),
  });
}

/**
 * <p>The configuration for resource targets to receive notifications when Amazon Chime SDK meeting and attendee events occur. The Amazon Chime SDK supports resource targets located in the US East (N. Virginia) AWS Region (<code>us-east-1</code>).</p>
 */
export interface MeetingNotificationConfiguration {
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
  export const filterSensitiveLog = (obj: MeetingNotificationConfiguration): any => ({
    ...obj,
    ...(obj.SnsTopicArn && { SnsTopicArn: SENSITIVE_STRING }),
    ...(obj.SqsQueueArn && { SqsQueueArn: SENSITIVE_STRING }),
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
   * <p>The Region in which to create the meeting. Default: <code>us-east-1</code>.</p>
   *          <p>Available values: <code>af-south-1</code>, <code>ap-northeast-1</code>, <code>ap-northeast-2</code>, <code>ap-south-1</code>, <code>ap-southeast-1</code>, <code>ap-southeast-2</code>, <code>ca-central-1</code>, <code>eu-central-1</code>, <code>eu-north-1</code>, <code>eu-south-1</code>, <code>eu-west-1</code>, <code>eu-west-2</code>, <code>eu-west-3</code>, <code>sa-east-1</code>, <code>us-east-1</code>, <code>us-east-2</code>, <code>us-west-1</code>, <code>us-west-2</code>.</p>
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

/**
 * <p>A set of endpoints used by clients to connect to the media service group for a Amazon Chime SDK meeting.</p>
 */
export interface MediaPlacement {
  /**
   * <p>The audio host URL.</p>
   */
  AudioHostUrl?: string;

  /**
   * <p>The audio fallback URL.</p>
   */
  AudioFallbackUrl?: string;

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
  export const filterSensitiveLog = (obj: MediaPlacement): any => ({
    ...obj,
  });
}

/**
 * <p>A meeting created using the Amazon Chime SDK.</p>
 */
export interface Meeting {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId?: string;

  /**
   * <p>The external meeting ID.</p>
   */
  ExternalMeetingId?: string;

  /**
   * <p>The media placement for the meeting.</p>
   */
  MediaPlacement?: MediaPlacement;

  /**
   * <p>The Region in which to create the meeting. Available values: <code>af-south-1</code>, <code>ap-northeast-1</code>, <code>ap-northeast-2</code>, <code>ap-south-1</code>, <code>ap-southeast-1</code>, <code>ap-southeast-2</code>, <code>ca-central-1</code>, <code>eu-central-1</code>, <code>eu-north-1</code>, <code>eu-south-1</code>, <code>eu-west-1</code>, <code>eu-west-2</code>, <code>eu-west-3</code>, <code>sa-east-1</code>, <code>us-east-1</code>, <code>us-east-2</code>, <code>us-west-1</code>, <code>us-west-2</code>.</p>
   */
  MediaRegion?: string;
}

export namespace Meeting {
  export const filterSensitiveLog = (obj: Meeting): any => ({
    ...obj,
    ...(obj.ExternalMeetingId && { ExternalMeetingId: SENSITIVE_STRING }),
  });
}

export interface CreateMeetingResponse {
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
}

export interface CreateMeetingDialOutRequest {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   *
   *          <p>Type: String</p>
   *
   *          <p>Pattern: [a-fA-F0-9]{8}(?:-[a-fA-F0-9]{4}){3}-[a-fA-F0-9]{12}</p>
   *
   *          <p>Required: No</p>
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
   * <p>Token used by the Amazon Chime SDK attendee. Call the <a href="https://docs.aws.amazon.com/https:/docs.aws.amazon.com/chime/latest/APIReference/API_Attendee.html">
   *         CreateAttendee API</a> to get a join token. </p>
   */
  JoinToken: string | undefined;
}

export namespace CreateMeetingDialOutRequest {
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
   * <p>The Region in which to create the meeting. Default: <code>us-east-1</code>.</p>
   *          <p>Available values: <code>af-south-1</code>, <code>ap-northeast-1</code>, <code>ap-northeast-2</code>, <code>ap-south-1</code>, <code>ap-southeast-1</code>, <code>ap-southeast-2</code>, <code>ca-central-1</code>, <code>eu-central-1</code>, <code>eu-north-1</code>, <code>eu-south-1</code>, <code>eu-west-1</code>, <code>eu-west-2</code>, <code>eu-west-3</code>, <code>sa-east-1</code>, <code>us-east-1</code>, <code>us-east-2</code>, <code>us-west-1</code>, <code>us-west-2</code>.</p>
   */
  MediaRegion?: string;

  /**
   * <p>The tag key-value pairs.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The configuration for resource targets to receive notifications when Amazon Chime SDK meeting and attendee events occur. The Amazon Chime SDK supports resource targets located in the US East (N. Virginia) AWS Region (<code>us-east-1</code>).</p>
   */
  NotificationsConfiguration?: MeetingNotificationConfiguration;

  /**
   * <p>The request containing the attendees to create.</p>
   */
  Attendees?: CreateAttendeeRequestItem[];
}

export namespace CreateMeetingWithAttendeesRequest {
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
  export const filterSensitiveLog = (obj: CreatePhoneNumberOrderRequest): any => ({
    ...obj,
    ...(obj.E164PhoneNumbers && { E164PhoneNumbers: SENSITIVE_STRING }),
  });
}

export enum OrderedPhoneNumberStatus {
  Acquired = "Acquired",
  Failed = "Failed",
  Processing = "Processing",
}

/**
 * <p>A phone number for which an order has been placed.</p>
 */
export interface OrderedPhoneNumber {
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
  export const filterSensitiveLog = (obj: OrderedPhoneNumber): any => ({
    ...obj,
    ...(obj.E164PhoneNumber && { E164PhoneNumber: SENSITIVE_STRING }),
  });
}

export enum PhoneNumberOrderStatus {
  Failed = "Failed",
  Partial = "Partial",
  Processing = "Processing",
  Successful = "Successful",
}

/**
 * <p>The details of a phone number order created for Amazon Chime.</p>
 */
export interface PhoneNumberOrder {
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
   * <p>The ordered phone number details, such as the phone number in E.164 format and the
   *      phone number status.</p>
   */
  OrderedPhoneNumbers?: OrderedPhoneNumber[];

  /**
   * <p>The phone number order creation timestamp, in ISO 8601 format.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The updated phone number order timestamp, in ISO 8601 format.</p>
   */
  UpdatedTimestamp?: Date;
}

export namespace PhoneNumberOrder {
  export const filterSensitiveLog = (obj: PhoneNumberOrder): any => ({
    ...obj,
    ...(obj.OrderedPhoneNumbers && {
      OrderedPhoneNumbers: obj.OrderedPhoneNumbers.map((item) => OrderedPhoneNumber.filterSensitiveLog(item)),
    }),
  });
}

export interface CreatePhoneNumberOrderResponse {
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
}

export enum GeoMatchLevel {
  AreaCode = "AreaCode",
  Country = "Country",
}

/**
 * <p>The country and area code for a proxy phone number in a proxy phone session.</p>
 */
export interface GeoMatchParams {
  /**
   * <p>The country.</p>
   */
  Country: string | undefined;

  /**
   * <p>The area code.</p>
   */
  AreaCode: string | undefined;
}

export namespace GeoMatchParams {
  export const filterSensitiveLog = (obj: GeoMatchParams): any => ({
    ...obj,
  });
}

export enum NumberSelectionBehavior {
  AvoidSticky = "AvoidSticky",
  PreferSticky = "PreferSticky",
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
  export const filterSensitiveLog = (obj: CreateProxySessionRequest): any => ({
    ...obj,
    ...(obj.ParticipantPhoneNumbers && { ParticipantPhoneNumbers: SENSITIVE_STRING }),
    ...(obj.Name && { Name: SENSITIVE_STRING }),
  });
}

/**
 * <p>The phone number and proxy phone number for a participant in an Amazon Chime Voice Connector proxy session.</p>
 */
export interface Participant {
  /**
   * <p>The participant's phone number.</p>
   */
  PhoneNumber?: string;

  /**
   * <p>The participant's proxy phone number.</p>
   */
  ProxyPhoneNumber?: string;
}

export namespace Participant {
  export const filterSensitiveLog = (obj: Participant): any => ({
    ...obj,
    ...(obj.PhoneNumber && { PhoneNumber: SENSITIVE_STRING }),
    ...(obj.ProxyPhoneNumber && { ProxyPhoneNumber: SENSITIVE_STRING }),
  });
}

export enum ProxySessionStatus {
  Closed = "Closed",
  InProgress = "InProgress",
  Open = "Open",
}

/**
 * <p>The proxy session for an Amazon Chime Voice Connector.</p>
 */
export interface ProxySession {
  /**
   * <p>The Amazon Chime voice connector ID.</p>
   */
  VoiceConnectorId?: string;

  /**
   * <p>The proxy session ID.</p>
   */
  ProxySessionId?: string;

  /**
   * <p>The name of the proxy session.</p>
   */
  Name?: string;

  /**
   * <p>The status of the proxy session.</p>
   */
  Status?: ProxySessionStatus | string;

  /**
   * <p>The number of minutes allowed for the proxy session.</p>
   */
  ExpiryMinutes?: number;

  /**
   * <p>The proxy session capabilities.</p>
   */
  Capabilities?: (Capability | string)[];

  /**
   * <p>The created timestamp, in ISO 8601 format.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The updated timestamp, in ISO 8601 format.</p>
   */
  UpdatedTimestamp?: Date;

  /**
   * <p>The ended timestamp, in ISO 8601 format.</p>
   */
  EndedTimestamp?: Date;

  /**
   * <p>The proxy session participants.</p>
   */
  Participants?: Participant[];

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

export namespace ProxySession {
  export const filterSensitiveLog = (obj: ProxySession): any => ({
    ...obj,
    ...(obj.Participants && { Participants: obj.Participants.map((item) => Participant.filterSensitiveLog(item)) }),
  });
}

export interface CreateProxySessionResponse {
  /**
   * <p>The proxy session details.</p>
   */
  ProxySession?: ProxySession;
}

export namespace CreateProxySessionResponse {
  export const filterSensitiveLog = (obj: CreateProxySessionResponse): any => ({
    ...obj,
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
  export const filterSensitiveLog = (obj: CreateRoomRequest): any => ({
    ...obj,
    ...(obj.Name && { Name: SENSITIVE_STRING }),
    ...(obj.ClientRequestToken && { ClientRequestToken: SENSITIVE_STRING }),
  });
}

/**
 * <p>The Amazon Chime chat room details.</p>
 */
export interface Room {
  /**
   * <p>The room ID.</p>
   */
  RoomId?: string;

  /**
   * <p>The room name.</p>
   */
  Name?: string;

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
   * <p>The room update timestamp, in ISO 8601 format.</p>
   */
  UpdatedTimestamp?: Date;
}

export namespace Room {
  export const filterSensitiveLog = (obj: Room): any => ({
    ...obj,
    ...(obj.Name && { Name: SENSITIVE_STRING }),
  });
}

export interface CreateRoomResponse {
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
  export const filterSensitiveLog = (obj: CreateRoomMembershipRequest): any => ({
    ...obj,
  });
}

export enum MemberType {
  Bot = "Bot",
  User = "User",
  Webhook = "Webhook",
}

/**
 * <p>The member details, such as email address, name, member ID, and member type.</p>
 */
export interface Member {
  /**
   * <p>The member ID (user ID or bot ID).</p>
   */
  MemberId?: string;

  /**
   * <p>The member type.</p>
   */
  MemberType?: MemberType | string;

  /**
   * <p>The member email address.</p>
   */
  Email?: string;

  /**
   * <p>The member name.</p>
   */
  FullName?: string;

  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId?: string;
}

export namespace Member {
  export const filterSensitiveLog = (obj: Member): any => ({
    ...obj,
    ...(obj.Email && { Email: SENSITIVE_STRING }),
    ...(obj.FullName && { FullName: SENSITIVE_STRING }),
  });
}

/**
 * <p>The room membership details.</p>
 */
export interface RoomMembership {
  /**
   * <p>The room ID.</p>
   */
  RoomId?: string;

  /**
   * <p>The member details, such as email address, name, member ID, and member type.</p>
   */
  Member?: Member;

  /**
   * <p>The membership role.</p>
   */
  Role?: RoomMembershipRole | string;

  /**
   * <p>The identifier of the user that invited the room member.</p>
   */
  InvitedBy?: string;

  /**
   * <p>The room membership update timestamp, in ISO 8601 format.</p>
   */
  UpdatedTimestamp?: Date;
}

export namespace RoomMembership {
  export const filterSensitiveLog = (obj: RoomMembership): any => ({
    ...obj,
    ...(obj.Member && { Member: Member.filterSensitiveLog(obj.Member) }),
  });
}

export interface CreateRoomMembershipResponse {
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
}

/**
 * <p>Endpoints to specify as part of a SIP media application.</p>
 */
export interface SipMediaApplicationEndpoint {
  /**
   * <p>Valid Amazon Resource Name (ARN) of the Lambda function of the same AWS Region where the
   *       SIP media application is created.</p>
   */
  LambdaArn?: string;
}

export namespace SipMediaApplicationEndpoint {
  export const filterSensitiveLog = (obj: SipMediaApplicationEndpoint): any => ({
    ...obj,
    ...(obj.LambdaArn && { LambdaArn: SENSITIVE_STRING }),
  });
}

export interface CreateSipMediaApplicationRequest {
  /**
   * <p>AWS Region assigned to the SIP media application.</p>
   */
  AwsRegion: string | undefined;

  /**
   * <p>The SIP media application name.</p>
   */
  Name?: string;

  /**
   * <p>List of endpoints (Lambda Amazon Resource Names) specified for the SIP media
   *       application. Currently, only one endpoint is supported.</p>
   */
  Endpoints: SipMediaApplicationEndpoint[] | undefined;
}

export namespace CreateSipMediaApplicationRequest {
  export const filterSensitiveLog = (obj: CreateSipMediaApplicationRequest): any => ({
    ...obj,
    ...(obj.Endpoints && {
      Endpoints: obj.Endpoints.map((item) => SipMediaApplicationEndpoint.filterSensitiveLog(item)),
    }),
  });
}

/**
 * <p>The SIP media application details, including name and endpoints. An AWS account can have multiple SIP media applications.</p>
 */
export interface SipMediaApplication {
  /**
   * <p>The SIP media application ID.</p>
   */
  SipMediaApplicationId?: string;

  /**
   * <p>The AWS Region in which the SIP media application is created.</p>
   */
  AwsRegion?: string;

  /**
   * <p>The name of the SIP media application.</p>
   */
  Name?: string;

  /**
   * <p>List of endpoints for SIP media application. Currently, only one endpoint per SIP media
   *       application is permitted.</p>
   */
  Endpoints?: SipMediaApplicationEndpoint[];

  /**
   * <p>The SIP media application creation timestamp, in ISO 8601 format.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The SIP media application updated timestamp, in ISO 8601 format.</p>
   */
  UpdatedTimestamp?: Date;
}

export namespace SipMediaApplication {
  export const filterSensitiveLog = (obj: SipMediaApplication): any => ({
    ...obj,
    ...(obj.Endpoints && {
      Endpoints: obj.Endpoints.map((item) => SipMediaApplicationEndpoint.filterSensitiveLog(item)),
    }),
  });
}

export interface CreateSipMediaApplicationResponse {
  /**
   * <p>The Sip media application details.</p>
   */
  SipMediaApplication?: SipMediaApplication;
}

export namespace CreateSipMediaApplicationResponse {
  export const filterSensitiveLog = (obj: CreateSipMediaApplicationResponse): any => ({
    ...obj,
    ...(obj.SipMediaApplication && {
      SipMediaApplication: SipMediaApplication.filterSensitiveLog(obj.SipMediaApplication),
    }),
  });
}

export interface CreateSipMediaApplicationCallRequest {
  /**
   * <p>The phone number that a user calls from.</p>
   */
  FromPhoneNumber?: string;

  /**
   * <p>The phone number that the user dials in order to connect to a meeting</p>
   */
  ToPhoneNumber?: string;

  /**
   * <p>The ID of the SIP media application.</p>
   */
  SipMediaApplicationId: string | undefined;
}

export namespace CreateSipMediaApplicationCallRequest {
  export const filterSensitiveLog = (obj: CreateSipMediaApplicationCallRequest): any => ({
    ...obj,
    ...(obj.FromPhoneNumber && { FromPhoneNumber: SENSITIVE_STRING }),
    ...(obj.ToPhoneNumber && { ToPhoneNumber: SENSITIVE_STRING }),
  });
}

/**
 * <p>A <code>Call</code> instance for a SIP media application.</p>
 */
export interface SipMediaApplicationCall {
  /**
   * <p>The transaction ID of a call.</p>
   */
  TransactionId?: string;
}

export namespace SipMediaApplicationCall {
  export const filterSensitiveLog = (obj: SipMediaApplicationCall): any => ({
    ...obj,
  });
}

export interface CreateSipMediaApplicationCallResponse {
  /**
   * <p>The actual call.</p>
   */
  SipMediaApplicationCall?: SipMediaApplicationCall;
}

export namespace CreateSipMediaApplicationCallResponse {
  export const filterSensitiveLog = (obj: CreateSipMediaApplicationCallResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Target SIP media application along with other details like priority and AWS Region to be
 *       specified in the SIP rule. Only one SIP rule per AWS Region can be provided.</p>
 */
export interface SipRuleTargetApplication {
  /**
   * <p>The SIP media application ID.</p>
   */
  SipMediaApplicationId?: string;

  /**
   * <p>Priority of the SIP media application in the target list.</p>
   */
  Priority?: number;

  /**
   * <p>AWS Region of target application.</p>
   */
  AwsRegion?: string;
}

export namespace SipRuleTargetApplication {
  export const filterSensitiveLog = (obj: SipRuleTargetApplication): any => ({
    ...obj,
  });
}

export enum SipRuleTriggerType {
  RequestUriHostname = "RequestUriHostname",
  ToPhoneNumber = "ToPhoneNumber",
}

export interface CreateSipRuleRequest {
  /**
   * <p>The name of the SIP rule.</p>
   */
  Name: string | undefined;

  /**
   * <p>The type of trigger whose value is assigned to the SIP rule in
   *         <code>TriggerValue</code>. Allowed trigger values are <code>RequestUriHostname</code> and <code>ToPhoneNumber</code>.</p>
   */
  TriggerType: SipRuleTriggerType | string | undefined;

  /**
   * <p>If <code>TriggerType</code> is <code>RequestUriHostname</code> then the value can be the
   *       outbound host name of an Amazon Chime Voice Connector. If <code>TriggerType</code> is
   *         <code>ToPhoneNumber</code> then the value can be a customer-owned phone number in E164
   *       format. <code>SipRule</code> is triggered if the SIP application requests a host name, or a If
   *         <code>TriggerType</code> is <code>RequestUriHostname</code>, then the value can be the
   *       outbound hostname of an Amazon Chime Voice Connector. If <code>TriggerType</code> is
   *         <code>ToPhoneNumber</code>, then the value can be a customer-owned phone number in E164
   *       format. <code>SipRule</code> is triggered if the SIP application requests a host name, or a
   *         <code>ToPhoneNumber</code> value matches the incoming SIP request.</p>
   */
  TriggerValue: string | undefined;

  /**
   * <p>Enables or disables a rule. You must disable rules before you can delete them.</p>
   */
  Disabled?: boolean;

  /**
   * <p>List of SIP media applications with priority and AWS Region. Only one SIP application
   *       per AWS Region can be used.</p>
   */
  TargetApplications: SipRuleTargetApplication[] | undefined;
}

export namespace CreateSipRuleRequest {
  export const filterSensitiveLog = (obj: CreateSipRuleRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The SIP rule details, including name, triggers, and target applications. An AWS account
 *       can have multiple SIP rules.</p>
 */
export interface SipRule {
  /**
   * <p>The SIP rule ID.</p>
   */
  SipRuleId?: string;

  /**
   * <p>The name of the SIP rule.</p>
   */
  Name?: string;

  /**
   * <p>Indicates if the SIP rule is enabled or disabled. You must disable a rule before you can
   *       delete it.</p>
   */
  Disabled?: boolean;

  /**
   * <p>The type of trigger whose value is assigned to the SIP rule in
   *       <code>TriggerValue</code>.</p>
   */
  TriggerType?: SipRuleTriggerType | string;

  /**
   * <p>If <code>TriggerType</code> is <code>RequestUriHostname</code>, then the value can be the
   *       outbound host name of the Amazon Chime Voice Connector. If <code>TriggerType</code> is
   *         <code>ToPhoneNumber</code>, then  the value can be a customer-owned phone number in E164
   *       format. <code>SipRule</code> is triggered when a SIP rule requests host name or
   *         <code>ToPhoneNumber</code> matches in the incoming SIP request.</p>
   */
  TriggerValue?: string;

  /**
   * <p>List of SIP media applications with priority and AWS Region. You can only use one SIP
   *       application per AWS Region and priority combination.</p>
   */
  TargetApplications?: SipRuleTargetApplication[];

  /**
   * <p>The SIP rule created timestamp, in ISO 8601 format.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The SIP rule updated timestamp, in ISO 8601 format.</p>
   */
  UpdatedTimestamp?: Date;
}

export namespace SipRule {
  export const filterSensitiveLog = (obj: SipRule): any => ({
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
  export const filterSensitiveLog = (obj: CreateUserRequest): any => ({
    ...obj,
    ...(obj.Email && { Email: SENSITIVE_STRING }),
  });
}

export enum InviteStatus {
  Accepted = "Accepted",
  Failed = "Failed",
  Pending = "Pending",
}

export enum RegistrationStatus {
  Registered = "Registered",
  Suspended = "Suspended",
  Unregistered = "Unregistered",
}

/**
 * <p>The user on the Amazon Chime account.</p>
 */
export interface User {
  /**
   * <p>The user ID.</p>
   */
  UserId: string | undefined;

  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId?: string;

  /**
   * <p>The primary email address of the user.</p>
   */
  PrimaryEmail?: string;

  /**
   * <p>The primary phone number associated with the user.</p>
   */
  PrimaryProvisionedNumber?: string;

  /**
   * <p>The display name of the user.</p>
   */
  DisplayName?: string;

  /**
   * <p>The license type for the user.</p>
   */
  LicenseType?: License | string;

  /**
   * <p>The user type.</p>
   */
  UserType?: UserType | string;

  /**
   * <p>The user registration status.</p>
   */
  UserRegistrationStatus?: RegistrationStatus | string;

  /**
   * <p>The user invite status.</p>
   */
  UserInvitationStatus?: InviteStatus | string;

  /**
   * <p>Date and time when the user is registered, in ISO 8601 format.</p>
   */
  RegisteredOn?: Date;

  /**
   * <p>Date and time when the user is invited to the Amazon Chime account, in ISO 8601
   *       format.</p>
   */
  InvitedOn?: Date;

  /**
   * <p>The Alexa for Business metadata.</p>
   */
  AlexaForBusinessMetadata?: AlexaForBusinessMetadata;

  /**
   * <p>The user's personal meeting PIN.</p>
   */
  PersonalPIN?: string;
}

export namespace User {
  export const filterSensitiveLog = (obj: User): any => ({
    ...obj,
    ...(obj.PrimaryEmail && { PrimaryEmail: SENSITIVE_STRING }),
    ...(obj.PrimaryProvisionedNumber && { PrimaryProvisionedNumber: SENSITIVE_STRING }),
    ...(obj.DisplayName && { DisplayName: SENSITIVE_STRING }),
    ...(obj.AlexaForBusinessMetadata && {
      AlexaForBusinessMetadata: AlexaForBusinessMetadata.filterSensitiveLog(obj.AlexaForBusinessMetadata),
    }),
  });
}

export interface CreateUserResponse {
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
}

export enum VoiceConnectorAwsRegion {
  US_EAST_1 = "us-east-1",
  US_WEST_2 = "us-west-2",
}

export interface CreateVoiceConnectorRequest {
  /**
   * <p>The name of the Amazon Chime Voice Connector.</p>
   */
  Name: string | undefined;

  /**
   * <p>The AWS Region in which the Amazon Chime Voice Connector is created. Default value: <code>us-east-1</code>.</p>
   */
  AwsRegion?: VoiceConnectorAwsRegion | string;

  /**
   * <p>When enabled, requires encryption for the Amazon Chime Voice Connector.</p>
   */
  RequireEncryption: boolean | undefined;
}

export namespace CreateVoiceConnectorRequest {
  export const filterSensitiveLog = (obj: CreateVoiceConnectorRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The Amazon Chime Voice Connector configuration, including outbound host name and
 *       encryption settings.</p>
 */
export interface VoiceConnector {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId?: string;

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

  /**
   * <p>Designates whether encryption is required for the Amazon Chime Voice Connector.</p>
   */
  RequireEncryption?: boolean;

  /**
   * <p>The Amazon Chime Voice Connector creation timestamp, in ISO 8601 format.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The updated Amazon Chime Voice Connector timestamp, in ISO 8601 format.</p>
   */
  UpdatedTimestamp?: Date;
}

export namespace VoiceConnector {
  export const filterSensitiveLog = (obj: VoiceConnector): any => ({
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
  export const filterSensitiveLog = (obj: CreateVoiceConnectorResponse): any => ({
    ...obj,
  });
}

/**
 * <p>For Amazon Chime Voice Connector groups, the Amazon Chime Voice Connectors to which to route inbound calls. Includes priority configuration settings. Limit: 3 <code>VoiceConnectorItems</code> per Amazon Chime Voice Connector group.</p>
 */
export interface VoiceConnectorItem {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;

  /**
   * <p>The priority associated with the Amazon Chime Voice Connector, with 1 being the highest priority. Higher priority Amazon Chime Voice Connectors are attempted first. </p>
   */
  Priority: number | undefined;
}

export namespace VoiceConnectorItem {
  export const filterSensitiveLog = (obj: VoiceConnectorItem): any => ({
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
  export const filterSensitiveLog = (obj: CreateVoiceConnectorGroupRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The Amazon Chime Voice Connector group configuration, including associated Amazon Chime
 *       Voice Connectors. You can include Amazon Chime Voice Connectors from different AWS Regions in
 *       your group. This creates a fault tolerant mechanism for fallback in case of availability
 *       events.</p>
 */
export interface VoiceConnectorGroup {
  /**
   * <p>The Amazon Chime Voice Connector group ID.</p>
   */
  VoiceConnectorGroupId?: string;

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

  /**
   * <p>The updated Amazon Chime Voice Connector group timestamp, in ISO 8601 format.</p>
   */
  UpdatedTimestamp?: Date;
}

export namespace VoiceConnectorGroup {
  export const filterSensitiveLog = (obj: VoiceConnectorGroup): any => ({
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
  export const filterSensitiveLog = (obj: CreateVoiceConnectorGroupResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The SIP credentials used to authenticate requests to your Amazon Chime Voice Connector.</p>
 */
export interface Credential {
  /**
   * <p>The RFC2617 compliant user name associated with the SIP credentials, in US-ASCII
   *       format.</p>
   */
  Username?: string;

  /**
   * <p>The RFC2617 compliant password associated with the SIP credentials, in US-ASCII format.</p>
   */
  Password?: string;
}

export namespace Credential {
  export const filterSensitiveLog = (obj: Credential): any => ({
    ...obj,
    ...(obj.Username && { Username: SENSITIVE_STRING }),
    ...(obj.Password && { Password: SENSITIVE_STRING }),
  });
}

export interface DeleteAccountRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
}

export namespace DeleteAccountRequest {
  export const filterSensitiveLog = (obj: DeleteAccountRequest): any => ({
    ...obj,
  });
}

export interface DeleteAccountResponse {}

export namespace DeleteAccountResponse {
  export const filterSensitiveLog = (obj: DeleteAccountResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The request was well-formed but was unable to be followed due to semantic errors.</p>
 */
export interface UnprocessableEntityException extends __SmithyException, $MetadataBearer {
  name: "UnprocessableEntityException";
  $fault: "client";
  Code?: ErrorCode | string;
  Message?: string;
}

export namespace UnprocessableEntityException {
  export const filterSensitiveLog = (obj: UnprocessableEntityException): any => ({
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
  export const filterSensitiveLog = (obj: DeleteAttendeeRequest): any => ({
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
  export const filterSensitiveLog = (obj: DeleteEventsConfigurationRequest): any => ({
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
  export const filterSensitiveLog = (obj: DeleteVoiceConnectorTerminationCredentialsRequest): any => ({
    ...obj,
    ...(obj.Usernames && { Usernames: SENSITIVE_STRING }),
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
  export const filterSensitiveLog = (obj: DisassociatePhoneNumberFromUserRequest): any => ({
    ...obj,
  });
}

export interface DisassociatePhoneNumberFromUserResponse {}

export namespace DisassociatePhoneNumberFromUserResponse {
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
  export const filterSensitiveLog = (obj: DisassociateSigninDelegateGroupsFromAccountRequest): any => ({
    ...obj,
  });
}

export interface DisassociateSigninDelegateGroupsFromAccountResponse {}

export namespace DisassociateSigninDelegateGroupsFromAccountResponse {
  export const filterSensitiveLog = (obj: DisassociateSigninDelegateGroupsFromAccountResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The Dialed Number Identification Service (DNIS) emergency calling configuration details associated with an Amazon Chime Voice Connector's emergency calling configuration.</p>
 */
export interface DNISEmergencyCallingConfiguration {
  /**
   * <p>The DNIS phone number to route emergency calls to, in E.164 format.</p>
   */
  EmergencyPhoneNumber: string | undefined;

  /**
   * <p>The DNIS phone number to route test emergency calls to, in E.164 format.</p>
   */
  TestPhoneNumber?: string;

  /**
   * <p>The country from which emergency calls are allowed, in ISO 3166-1 alpha-2 format.</p>
   */
  CallingCountry: string | undefined;
}

export namespace DNISEmergencyCallingConfiguration {
  export const filterSensitiveLog = (obj: DNISEmergencyCallingConfiguration): any => ({
    ...obj,
    ...(obj.EmergencyPhoneNumber && { EmergencyPhoneNumber: SENSITIVE_STRING }),
    ...(obj.TestPhoneNumber && { TestPhoneNumber: SENSITIVE_STRING }),
  });
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
}

/**
 * <p>The configuration that allows a bot to receive outgoing events. Can be either an HTTPS endpoint or a Lambda function ARN.</p>
 */
export interface EventsConfiguration {
  /**
   * <p>The bot ID.</p>
   */
  BotId?: string;

  /**
   * <p>HTTPS endpoint that allows a bot to receive outgoing events.</p>
   */
  OutboundEventsHTTPSEndpoint?: string;

  /**
   * <p>Lambda function ARN that allows a bot to receive outgoing events.</p>
   */
  LambdaFunctionArn?: string;
}

export namespace EventsConfiguration {
  export const filterSensitiveLog = (obj: EventsConfiguration): any => ({
    ...obj,
    ...(obj.OutboundEventsHTTPSEndpoint && { OutboundEventsHTTPSEndpoint: SENSITIVE_STRING }),
    ...(obj.LambdaFunctionArn && { LambdaFunctionArn: SENSITIVE_STRING }),
  });
}

export interface GetAccountRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
}

export namespace GetAccountRequest {
  export const filterSensitiveLog = (obj: GetAccountRequest): any => ({
    ...obj,
  });
}

export interface GetAccountResponse {
  /**
   * <p>The Amazon Chime account details. An AWS account can have multiple Amazon Chime accounts.</p>
   */
  Account?: Account;
}

export namespace GetAccountResponse {
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
  export const filterSensitiveLog = (obj: GetAccountSettingsResponse): any => ({
    ...obj,
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
  export const filterSensitiveLog = (obj: GetBotResponse): any => ({
    ...obj,
    ...(obj.Bot && { Bot: Bot.filterSensitiveLog(obj.Bot) }),
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
  export const filterSensitiveLog = (obj: GetEventsConfigurationResponse): any => ({
    ...obj,
    ...(obj.EventsConfiguration && {
      EventsConfiguration: EventsConfiguration.filterSensitiveLog(obj.EventsConfiguration),
    }),
  });
}

/**
 * <p>The Amazon Chime Voice Connector settings.
 *       Includes any Amazon S3 buckets designated for storing call detail records.</p>
 */
export interface VoiceConnectorSettings {
  /**
   * <p>The Amazon S3 bucket designated for call detail record storage.</p>
   */
  CdrBucket?: string;
}

export namespace VoiceConnectorSettings {
  export const filterSensitiveLog = (obj: VoiceConnectorSettings): any => ({
    ...obj,
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
  export const filterSensitiveLog = (obj: GetGlobalSettingsResponse): any => ({
    ...obj,
  });
}

export interface GetMeetingRequest {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;
}

export namespace GetMeetingRequest {
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
  export const filterSensitiveLog = (obj: GetMeetingResponse): any => ({
    ...obj,
    ...(obj.Meeting && { Meeting: Meeting.filterSensitiveLog(obj.Meeting) }),
  });
}

export interface GetPhoneNumberRequest {
  /**
   * <p>The phone number ID.</p>
   */
  PhoneNumberId: string | undefined;
}

export namespace GetPhoneNumberRequest {
  export const filterSensitiveLog = (obj: GetPhoneNumberRequest): any => ({
    ...obj,
  });
}

export enum PhoneNumberAssociationName {
  AccountId = "AccountId",
  SipRuleId = "SipRuleId",
  UserId = "UserId",
  VoiceConnectorGroupId = "VoiceConnectorGroupId",
  VoiceConnectorId = "VoiceConnectorId",
}

/**
 * <p>The phone number associations, such as Amazon Chime account ID, Amazon Chime user ID, Amazon Chime Voice
 *       Connector ID, or Amazon Chime Voice Connector group ID.</p>
 */
export interface PhoneNumberAssociation {
  /**
   * <p>Contains the ID for the entity specified in Name.</p>
   */
  Value?: string;

  /**
   * <p>Defines the association with an Amazon Chime account ID, user ID, Amazon Chime Voice
   *       Connector ID, or Amazon Chime Voice Connector group ID.</p>
   */
  Name?: PhoneNumberAssociationName | string;

  /**
   * <p>The timestamp of the phone number association, in ISO 8601 format.</p>
   */
  AssociatedTimestamp?: Date;
}

export namespace PhoneNumberAssociation {
  export const filterSensitiveLog = (obj: PhoneNumberAssociation): any => ({
    ...obj,
  });
}

/**
 * <p>The phone number capabilities for Amazon Chime Business Calling phone numbers, such as enabled inbound and outbound calling and text
 *       messaging.</p>
 */
export interface PhoneNumberCapabilities {
  /**
   * <p>Allows or denies inbound calling for the specified phone number.</p>
   */
  InboundCall?: boolean;

  /**
   * <p>Allows or denies outbound calling for the specified phone number.</p>
   */
  OutboundCall?: boolean;

  /**
   * <p>Allows or denies inbound SMS messaging for the specified phone number.</p>
   */
  InboundSMS?: boolean;

  /**
   * <p>Allows or denies outbound SMS messaging for the specified phone number.</p>
   */
  OutboundSMS?: boolean;

  /**
   * <p>Allows or denies inbound MMS messaging for the specified phone number.</p>
   */
  InboundMMS?: boolean;

  /**
   * <p>Allows or denies outbound MMS messaging for the specified phone number.</p>
   */
  OutboundMMS?: boolean;
}

export namespace PhoneNumberCapabilities {
  export const filterSensitiveLog = (obj: PhoneNumberCapabilities): any => ({
    ...obj,
  });
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
 * <p>A phone number used for Amazon Chime Business Calling or an Amazon Chime Voice
 *       Connector.</p>
 */
export interface PhoneNumber {
  /**
   * <p>The phone number ID.</p>
   */
  PhoneNumberId?: string;

  /**
   * <p>The phone number, in E.164 format.</p>
   */
  E164PhoneNumber?: string;

  /**
   * <p>The phone number type.</p>
   */
  Type?: PhoneNumberType | string;

  /**
   * <p>The phone number product type.</p>
   */
  ProductType?: PhoneNumberProductType | string;

  /**
   * <p>The phone number status.</p>
   */
  Status?: PhoneNumberStatus | string;

  /**
   * <p>The phone number capabilities.</p>
   */
  Capabilities?: PhoneNumberCapabilities;

  /**
   * <p>The phone number associations.</p>
   */
  Associations?: PhoneNumberAssociation[];

  /**
   * <p>The outbound calling name associated with the phone number.</p>
   */
  CallingName?: string;

  /**
   * <p>The outbound calling name status.</p>
   */
  CallingNameStatus?: CallingNameStatus | string;

  /**
   * <p>The phone number creation timestamp, in ISO 8601 format.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The updated phone number timestamp, in ISO 8601 format.</p>
   */
  UpdatedTimestamp?: Date;

  /**
   * <p>The deleted phone number timestamp, in ISO 8601 format.</p>
   */
  DeletionTimestamp?: Date;
}

export namespace PhoneNumber {
  export const filterSensitiveLog = (obj: PhoneNumber): any => ({
    ...obj,
    ...(obj.E164PhoneNumber && { E164PhoneNumber: SENSITIVE_STRING }),
    ...(obj.CallingName && { CallingName: SENSITIVE_STRING }),
  });
}

export interface GetPhoneNumberResponse {
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
}

export interface GetPhoneNumberOrderRequest {
  /**
   * <p>The ID for the phone number order.</p>
   */
  PhoneNumberOrderId: string | undefined;
}

export namespace GetPhoneNumberOrderRequest {
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
  export const filterSensitiveLog = (obj: GetProxySessionResponse): any => ({
    ...obj,
  });
}

export interface GetRetentionSettingsRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
}

export namespace GetRetentionSettingsRequest {
  export const filterSensitiveLog = (obj: GetRetentionSettingsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The retention settings that determine how long to retain chat room messages for an Amazon Chime Enterprise account.</p>
 */
export interface RoomRetentionSettings {
  /**
   * <p>The number of days for which to retain chat room messages.</p>
   */
  RetentionDays?: number;
}

export namespace RoomRetentionSettings {
  export const filterSensitiveLog = (obj: RoomRetentionSettings): any => ({
    ...obj,
  });
}

/**
 * <p>The retention settings for an Amazon Chime Enterprise account that determine how long to retain items such as chat room messages and chat conversation messages.</p>
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

export namespace RetentionSettings {
  export const filterSensitiveLog = (obj: RetentionSettings): any => ({
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
  export const filterSensitiveLog = (obj: GetSipMediaApplicationResponse): any => ({
    ...obj,
    ...(obj.SipMediaApplication && {
      SipMediaApplication: SipMediaApplication.filterSensitiveLog(obj.SipMediaApplication),
    }),
  });
}

export interface GetSipMediaApplicationLoggingConfigurationRequest {
  /**
   * <p>The ID of the SIP media application.</p>
   */
  SipMediaApplicationId: string | undefined;
}

export namespace GetSipMediaApplicationLoggingConfigurationRequest {
  export const filterSensitiveLog = (obj: GetSipMediaApplicationLoggingConfigurationRequest): any => ({
    ...obj,
  });
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

export namespace SipMediaApplicationLoggingConfiguration {
  export const filterSensitiveLog = (obj: SipMediaApplicationLoggingConfiguration): any => ({
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
  export const filterSensitiveLog = (obj: GetUserSettingsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Settings that allow management of telephony permissions for an Amazon Chime user, such
 *       as inbound and outbound calling and text messaging.</p>
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

export namespace TelephonySettings {
  export const filterSensitiveLog = (obj: TelephonySettings): any => ({
    ...obj,
  });
}

/**
 * <p>Settings associated with an Amazon Chime user, including inbound and outbound calling and
 *       text messaging.</p>
 */
export interface UserSettings {
  /**
   * <p>The telephony settings associated with the user.</p>
   */
  Telephony: TelephonySettings | undefined;
}

export namespace UserSettings {
  export const filterSensitiveLog = (obj: UserSettings): any => ({
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
  export const filterSensitiveLog = (obj: GetVoiceConnectorOriginationRequest): any => ({
    ...obj,
  });
}

export enum OriginationRouteProtocol {
  TCP = "TCP",
  UDP = "UDP",
}

/**
 * <p>Origination routes define call distribution properties for your SIP hosts to receive
 *       inbound calls using your Amazon Chime Voice Connector. Limit: Ten origination routes for each
 *       Amazon Chime Voice Connector.</p>
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
   * <p>The priority associated with the host, with 1 being the highest priority. Higher
   *       priority hosts are attempted first.</p>
   */
  Priority?: number;

  /**
   * <p>The weight associated with the host. If hosts are equal in priority, calls are
   *       distributed among them based on their relative weight.</p>
   */
  Weight?: number;
}

export namespace OriginationRoute {
  export const filterSensitiveLog = (obj: OriginationRoute): any => ({
    ...obj,
  });
}

/**
 * <p>Origination settings enable your SIP hosts to receive inbound calls using your Amazon
 *       Chime Voice Connector.</p>
 */
export interface Origination {
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
}

export interface GetVoiceConnectorOriginationResponse {
  /**
   * <p>The origination setting details.</p>
   */
  Origination?: Origination;
}

export namespace GetVoiceConnectorOriginationResponse {
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
  export const filterSensitiveLog = (obj: StreamingNotificationTarget): any => ({
    ...obj,
  });
}

/**
 * <p>The streaming configuration associated with an Amazon Chime Voice Connector. Specifies whether media streaming is enabled for sending to Amazon Kinesis, and shows the retention period for the Amazon Kinesis data, in hours.</p>
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
  export const filterSensitiveLog = (obj: GetVoiceConnectorTerminationRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Termination settings enable your SIP hosts to make outbound calls using your Amazon
 *       Chime Voice Connector.</p>
 */
export interface Termination {
  /**
   * <p>The limit on calls per second. Max value based on account service quota. Default value
   *       of 1.</p>
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
  export const filterSensitiveLog = (obj: GetVoiceConnectorTerminationHealthRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The termination health details, including the source IP address and timestamp of the
 *       last successful SIP <code>OPTIONS</code> message from your SIP infrastructure.</p>
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
  export const filterSensitiveLog = (obj: GetVoiceConnectorTerminationHealthResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Invitation object returned after emailing users to invite them to join the
 *         Amazon Chime <code>Team</code> account.</p>
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
  export const filterSensitiveLog = (obj: ListAccountsRequest): any => ({
    ...obj,
    ...(obj.UserEmail && { UserEmail: SENSITIVE_STRING }),
  });
}

export interface ListAccountsResponse {
  /**
   * <p>The list of accounts.</p>
   */
  Accounts?: Account[];

  /**
   * <p>The account's user token.</p>
   */
  NextToken?: string;
}

export namespace ListAccountsResponse {
  export const filterSensitiveLog = (obj: ListAccountsResponse): any => ({
    ...obj,
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
  export const filterSensitiveLog = (obj: ListBotsResponse): any => ({
    ...obj,
    ...(obj.Bots && { Bots: obj.Bots.map((item) => Bot.filterSensitiveLog(item)) }),
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
  export const filterSensitiveLog = (obj: ListSipRulesResponse): any => ({
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
  export const filterSensitiveLog = (obj: LogoutUserRequest): any => ({
    ...obj,
  });
}

export interface LogoutUserResponse {}

export namespace LogoutUserResponse {
  export const filterSensitiveLog = (obj: LogoutUserResponse): any => ({
    ...obj,
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
  export const filterSensitiveLog = (obj: PutRetentionSettingsResponse): any => ({
    ...obj,
  });
}

export interface PutSipMediaApplicationLoggingConfigurationRequest {
  /**
   * <p>The ID of the specified SIP media application</p>
   */
  SipMediaApplicationId: string | undefined;

  /**
   * <p>The actual logging configuration.</p>
   */
  SipMediaApplicationLoggingConfiguration?: SipMediaApplicationLoggingConfiguration;
}

export namespace PutSipMediaApplicationLoggingConfigurationRequest {
  export const filterSensitiveLog = (obj: PutSipMediaApplicationLoggingConfigurationRequest): any => ({
    ...obj,
  });
}

export interface PutSipMediaApplicationLoggingConfigurationResponse {
  /**
   * <p>The actual logging configuration.</p>
   */
  SipMediaApplicationLoggingConfiguration?: SipMediaApplicationLoggingConfiguration;
}

export namespace PutSipMediaApplicationLoggingConfigurationResponse {
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
  export const filterSensitiveLog = (obj: PutVoiceConnectorTerminationCredentialsRequest): any => ({
    ...obj,
    ...(obj.Credentials && { Credentials: obj.Credentials.map((item) => Credential.filterSensitiveLog(item)) }),
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
  export const filterSensitiveLog = (obj: RedactConversationMessageRequest): any => ({
    ...obj,
  });
}

export interface RedactConversationMessageResponse {}

export namespace RedactConversationMessageResponse {
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
  export const filterSensitiveLog = (obj: RedactRoomMessageRequest): any => ({
    ...obj,
  });
}

export interface RedactRoomMessageResponse {}

export namespace RedactRoomMessageResponse {
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
  export const filterSensitiveLog = (obj: RestorePhoneNumberResponse): any => ({
    ...obj,
    ...(obj.PhoneNumber && { PhoneNumber: PhoneNumber.filterSensitiveLog(obj.PhoneNumber) }),
  });
}

export interface SearchAvailablePhoneNumbersRequest {
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
   * <p>The state used to filter results.</p>
   */
  State?: string;

  /**
   * <p>The toll-free prefix that you use to filter results.</p>
   */
  TollFreePrefix?: string;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

export namespace SearchAvailablePhoneNumbersRequest {
  export const filterSensitiveLog = (obj: SearchAvailablePhoneNumbersRequest): any => ({
    ...obj,
  });
}

export interface SearchAvailablePhoneNumbersResponse {
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
  export const filterSensitiveLog = (obj: TagAttendeeRequest): any => ({
    ...obj,
    ...(obj.Tags && { Tags: obj.Tags.map((item) => Tag.filterSensitiveLog(item)) }),
  });
}
