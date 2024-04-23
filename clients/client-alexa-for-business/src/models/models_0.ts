// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { AlexaForBusinessServiceException as __BaseException } from "./AlexaForBusinessServiceException";

/**
 * @public
 * <p>An address book with attributes.</p>
 */
export interface AddressBook {
  /**
   * @public
   * <p>The ARN of the address book.</p>
   */
  AddressBookArn?: string;

  /**
   * @public
   * <p>The name of the address book.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The description of the address book.</p>
   */
  Description?: string;
}

/**
 * @public
 * <p>Information related to an address book.</p>
 */
export interface AddressBookData {
  /**
   * @public
   * <p>The ARN of the address book.</p>
   */
  AddressBookArn?: string;

  /**
   * @public
   * <p>The name of the address book.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The description of the address book.</p>
   */
  Description?: string;
}

/**
 * @public
 */
export interface ApproveSkillRequest {
  /**
   * @public
   * <p>The unique identifier of the skill.</p>
   */
  SkillId: string | undefined;
}

/**
 * @public
 */
export interface ApproveSkillResponse {}

/**
 * @public
 * <p>There is a concurrent modification of resources.</p>
 */
export class ConcurrentModificationException extends __BaseException {
  readonly name: "ConcurrentModificationException" = "ConcurrentModificationException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConcurrentModificationException, __BaseException>) {
    super({
      name: "ConcurrentModificationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConcurrentModificationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>You are performing an action that would put you beyond your account's limits.</p>
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The resource is not found.</p>
 */
export class NotFoundException extends __BaseException {
  readonly name: "NotFoundException" = "NotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotFoundException, __BaseException>) {
    super({
      name: "NotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface AssociateContactWithAddressBookRequest {
  /**
   * @public
   * <p>The ARN of the contact to associate with an address book.</p>
   */
  ContactArn: string | undefined;

  /**
   * @public
   * <p>The ARN of the address book with which to associate the contact.</p>
   */
  AddressBookArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateContactWithAddressBookResponse {}

/**
 * @public
 */
export interface AssociateDeviceWithNetworkProfileRequest {
  /**
   * @public
   * <p>The device ARN.</p>
   */
  DeviceArn: string | undefined;

  /**
   * @public
   * <p>The ARN of the network profile to associate with a device.</p>
   */
  NetworkProfileArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateDeviceWithNetworkProfileResponse {}

/**
 * @public
 * <p>The request failed because this device is no longer registered and therefore no longer managed by this account.</p>
 */
export class DeviceNotRegisteredException extends __BaseException {
  readonly name: "DeviceNotRegisteredException" = "DeviceNotRegisteredException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DeviceNotRegisteredException, __BaseException>) {
    super({
      name: "DeviceNotRegisteredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DeviceNotRegisteredException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface AssociateDeviceWithRoomRequest {
  /**
   * @public
   * <p>The ARN of the device to associate to a room. Required.</p>
   */
  DeviceArn?: string;

  /**
   * @public
   * <p>The ARN of the room with which to associate the device. Required.</p>
   */
  RoomArn?: string;
}

/**
 * @public
 */
export interface AssociateDeviceWithRoomResponse {}

/**
 * @public
 */
export interface AssociateSkillGroupWithRoomRequest {
  /**
   * @public
   * <p>The ARN of the skill group to associate with a room. Required.</p>
   */
  SkillGroupArn?: string;

  /**
   * @public
   * <p>The ARN of the room with which to associate the skill group. Required.</p>
   */
  RoomArn?: string;
}

/**
 * @public
 */
export interface AssociateSkillGroupWithRoomResponse {}

/**
 * @public
 */
export interface AssociateSkillWithSkillGroupRequest {
  /**
   * @public
   * <p>The ARN of the skill group to associate the skill to. Required.</p>
   */
  SkillGroupArn?: string;

  /**
   * @public
   * <p>The unique identifier of the skill.</p>
   */
  SkillId: string | undefined;
}

/**
 * @public
 */
export interface AssociateSkillWithSkillGroupResponse {}

/**
 * @public
 * <p>The skill must be linked to a third-party account.</p>
 */
export class SkillNotLinkedException extends __BaseException {
  readonly name: "SkillNotLinkedException" = "SkillNotLinkedException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SkillNotLinkedException, __BaseException>) {
    super({
      name: "SkillNotLinkedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SkillNotLinkedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface AssociateSkillWithUsersRequest {
  /**
   * @public
   * <p>The private skill ID you want to make available to enrolled users.</p>
   */
  SkillId: string | undefined;
}

/**
 * @public
 */
export interface AssociateSkillWithUsersResponse {}

/**
 * @public
 * <p>The resource being created already exists.</p>
 */
export class AlreadyExistsException extends __BaseException {
  readonly name: "AlreadyExistsException" = "AlreadyExistsException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AlreadyExistsException, __BaseException>) {
    super({
      name: "AlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AlreadyExistsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>A key-value pair that can be associated with a resource. </p>
 */
export interface Tag {
  /**
   * @public
   * <p>The key of a tag. Tag keys are case-sensitive. </p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>The value of a tag. Tag values are case sensitive and can be null.</p>
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateAddressBookRequest {
  /**
   * @public
   * <p>The name of the address book.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The description of the address book.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>A unique, user-specified identifier for the request that ensures
   *          idempotency.</p>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>The tags to be added to the specified resource. Do not provide system tags.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateAddressBookResponse {
  /**
   * @public
   * <p>The ARN of the newly created address book.</p>
   */
  AddressBookArn?: string;
}

/**
 * @public
 * @enum
 */
export const BusinessReportInterval = {
  ONE_DAY: "ONE_DAY",
  ONE_WEEK: "ONE_WEEK",
  THIRTY_DAYS: "THIRTY_DAYS",
} as const;

/**
 * @public
 */
export type BusinessReportInterval = (typeof BusinessReportInterval)[keyof typeof BusinessReportInterval];

/**
 * @public
 * <p>The content range of the report.</p>
 */
export interface BusinessReportContentRange {
  /**
   * @public
   * <p>The interval of the content range.</p>
   */
  Interval: BusinessReportInterval | undefined;
}

/**
 * @public
 * @enum
 */
export const BusinessReportFormat = {
  CSV: "CSV",
  CSV_ZIP: "CSV_ZIP",
} as const;

/**
 * @public
 */
export type BusinessReportFormat = (typeof BusinessReportFormat)[keyof typeof BusinessReportFormat];

/**
 * @public
 * <p>The recurrence of the reports.</p>
 */
export interface BusinessReportRecurrence {
  /**
   * @public
   * <p>The start date.</p>
   */
  StartDate?: string;
}

/**
 * @public
 */
export interface CreateBusinessReportScheduleRequest {
  /**
   * @public
   * <p>The name identifier of the schedule.</p>
   */
  ScheduleName?: string;

  /**
   * @public
   * <p>The S3 bucket name of the output reports. If this isn't specified, the report can be
   *          retrieved from a download link by calling ListBusinessReportSchedule. </p>
   */
  S3BucketName?: string;

  /**
   * @public
   * <p>The S3 key where the report is delivered.</p>
   */
  S3KeyPrefix?: string;

  /**
   * @public
   * <p>The format of the generated report (individual CSV files or zipped files of
   *          individual files).</p>
   */
  Format: BusinessReportFormat | undefined;

  /**
   * @public
   * <p>The content range of the reports.</p>
   */
  ContentRange: BusinessReportContentRange | undefined;

  /**
   * @public
   * <p>The recurrence of the reports. If this isn't specified, the report will only be
   *          delivered one time when the API is called. </p>
   */
  Recurrence?: BusinessReportRecurrence;

  /**
   * @public
   * <p>The client request token.</p>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>The tags for the business report schedule.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateBusinessReportScheduleResponse {
  /**
   * @public
   * <p>The ARN of the business report schedule.</p>
   */
  ScheduleArn?: string;
}

/**
 * @public
 * @enum
 */
export const ConferenceProviderType = {
  BLUEJEANS: "BLUEJEANS",
  CHIME: "CHIME",
  CUSTOM: "CUSTOM",
  FUZE: "FUZE",
  GOOGLE_HANGOUTS: "GOOGLE_HANGOUTS",
  POLYCOM: "POLYCOM",
  RINGCENTRAL: "RINGCENTRAL",
  SKYPE_FOR_BUSINESS: "SKYPE_FOR_BUSINESS",
  WEBEX: "WEBEX",
  ZOOM: "ZOOM",
} as const;

/**
 * @public
 */
export type ConferenceProviderType = (typeof ConferenceProviderType)[keyof typeof ConferenceProviderType];

/**
 * @public
 * @enum
 */
export const CommsProtocol = {
  H323: "H323",
  SIP: "SIP",
  SIPS: "SIPS",
} as const;

/**
 * @public
 */
export type CommsProtocol = (typeof CommsProtocol)[keyof typeof CommsProtocol];

/**
 * @public
 * <p>The IP endpoint and protocol for calling.</p>
 */
export interface IPDialIn {
  /**
   * @public
   * <p>The IP address.</p>
   */
  Endpoint: string | undefined;

  /**
   * @public
   * <p>The protocol, including SIP, SIPS, and H323.</p>
   */
  CommsProtocol: CommsProtocol | undefined;
}

/**
 * @public
 * @enum
 */
export const RequirePin = {
  NO: "NO",
  OPTIONAL: "OPTIONAL",
  YES: "YES",
} as const;

/**
 * @public
 */
export type RequirePin = (typeof RequirePin)[keyof typeof RequirePin];

/**
 * @public
 * <p>The values that indicate whether a pin is always required (YES), never required (NO),
 *             or OPTIONAL.</p>
 *         <ul>
 *             <li>
 *                 <p>If YES, Alexa will always ask for a meeting pin.</p>
 *             </li>
 *             <li>
 *                 <p>If NO, Alexa will never ask for a meeting pin.</p>
 *             </li>
 *             <li>
 *                 <p>If OPTIONAL, Alexa will ask if you have a meeting pin and if the customer responds
 *                     with yes, it will ask for the meeting pin.</p>
 *             </li>
 *          </ul>
 */
export interface MeetingSetting {
  /**
   * @public
   * <p>The values that indicate whether the pin is always required.</p>
   */
  RequirePin: RequirePin | undefined;
}

/**
 * @public
 * <p>The information for public switched telephone network (PSTN) conferencing.</p>
 */
export interface PSTNDialIn {
  /**
   * @public
   * <p>The zip code.</p>
   */
  CountryCode: string | undefined;

  /**
   * @public
   * <p>The phone number to call to join the conference.</p>
   */
  PhoneNumber: string | undefined;

  /**
   * @public
   * <p>The delay duration before Alexa enters the conference ID with dual-tone multi-frequency (DTMF). Each number on the dial pad corresponds to a DTMF tone, which is how we send data over the telephone network.</p>
   */
  OneClickIdDelay: string | undefined;

  /**
   * @public
   * <p>The delay duration before Alexa enters the conference pin with dual-tone multi-frequency (DTMF). Each number on the dial pad corresponds to a DTMF tone, which is how we send data over the telephone network.</p>
   */
  OneClickPinDelay: string | undefined;
}

/**
 * @public
 */
export interface CreateConferenceProviderRequest {
  /**
   * @public
   * <p>The name of the conference provider.</p>
   */
  ConferenceProviderName: string | undefined;

  /**
   * @public
   * <p>Represents a type within a list of predefined types.</p>
   */
  ConferenceProviderType: ConferenceProviderType | undefined;

  /**
   * @public
   * <p>The IP endpoint and protocol for calling.</p>
   */
  IPDialIn?: IPDialIn;

  /**
   * @public
   * <p>The information for PSTN conferencing.</p>
   */
  PSTNDialIn?: PSTNDialIn;

  /**
   * @public
   * <p>The meeting settings for the conference provider.</p>
   */
  MeetingSetting: MeetingSetting | undefined;

  /**
   * @public
   * <p>The request token of the client.</p>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>The tags to be added to the specified resource. Do not provide system tags.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateConferenceProviderResponse {
  /**
   * @public
   * <p>The ARN of the newly-created conference provider.</p>
   */
  ConferenceProviderArn?: string;
}

/**
 * @public
 * @enum
 */
export const PhoneNumberType = {
  HOME: "HOME",
  MOBILE: "MOBILE",
  WORK: "WORK",
} as const;

/**
 * @public
 */
export type PhoneNumberType = (typeof PhoneNumberType)[keyof typeof PhoneNumberType];

/**
 * @public
 * <p>The phone number for the contact containing the raw number and phone number type.</p>
 */
export interface PhoneNumber {
  /**
   * @public
   * <p>The raw value of the phone number.</p>
   */
  Number: string | undefined;

  /**
   * @public
   * <p>The type of the phone number.</p>
   */
  Type: PhoneNumberType | undefined;
}

/**
 * @public
 * @enum
 */
export const SipType = {
  WORK: "WORK",
} as const;

/**
 * @public
 */
export type SipType = (typeof SipType)[keyof typeof SipType];

/**
 * @public
 * <p>The SIP address for the contact containing the URI and SIP address type.</p>
 */
export interface SipAddress {
  /**
   * @public
   * <p>The URI for the SIP address.</p>
   */
  Uri: string | undefined;

  /**
   * @public
   * <p>The type of the SIP address.</p>
   */
  Type: SipType | undefined;
}

/**
 * @public
 */
export interface CreateContactRequest {
  /**
   * @public
   * <p>The name of the contact to display on the console.</p>
   */
  DisplayName?: string;

  /**
   * @public
   * <p>The first name of the contact that is used to call the contact on the
   *          device.</p>
   */
  FirstName: string | undefined;

  /**
   * @public
   * <p>The last name of the contact that is used to call the contact on the
   *          device.</p>
   */
  LastName?: string;

  /**
   * @public
   * <p>The phone number of the contact in E.164 format. The phone number type defaults to
   *          WORK. You can specify PhoneNumber or PhoneNumbers. We recommend that you use PhoneNumbers,
   *          which lets you specify the phone number type and multiple numbers.</p>
   */
  PhoneNumber?: string;

  /**
   * @public
   * <p>The list of phone numbers for the contact.</p>
   */
  PhoneNumbers?: PhoneNumber[];

  /**
   * @public
   * <p>The list of SIP addresses for the contact.</p>
   */
  SipAddresses?: SipAddress[];

  /**
   * @public
   * <p>A unique, user-specified identifier for this request that ensures
   *          idempotency.</p>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>The tags to be added to the specified resource. Do not provide system tags.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateContactResponse {
  /**
   * @public
   * <p>The ARN of the newly created address book.</p>
   */
  ContactArn?: string;
}

/**
 * @public
 */
export interface CreateGatewayGroupRequest {
  /**
   * @public
   * <p>The name of the gateway group.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The description of the gateway group.</p>
   */
  Description?: string;

  /**
   * @public
   * <p> A unique, user-specified identifier for the request that ensures idempotency.</p>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>The tags to be added to the specified resource. Do not provide system tags.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateGatewayGroupResponse {
  /**
   * @public
   * <p>The ARN of the created gateway group.</p>
   */
  GatewayGroupArn?: string;
}

/**
 * @public
 * @enum
 */
export const NetworkEapMethod = {
  EAP_TLS: "EAP_TLS",
} as const;

/**
 * @public
 */
export type NetworkEapMethod = (typeof NetworkEapMethod)[keyof typeof NetworkEapMethod];

/**
 * @public
 * @enum
 */
export const NetworkSecurityType = {
  OPEN: "OPEN",
  WEP: "WEP",
  WPA2_ENTERPRISE: "WPA2_ENTERPRISE",
  WPA2_PSK: "WPA2_PSK",
  WPA_PSK: "WPA_PSK",
} as const;

/**
 * @public
 */
export type NetworkSecurityType = (typeof NetworkSecurityType)[keyof typeof NetworkSecurityType];

/**
 * @public
 */
export interface CreateNetworkProfileRequest {
  /**
   * @public
   * <p>The name of the network profile associated with a device.</p>
   */
  NetworkProfileName: string | undefined;

  /**
   * @public
   * <p>Detailed information about a device's network profile.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The SSID of the Wi-Fi network.</p>
   */
  Ssid: string | undefined;

  /**
   * @public
   * <p>The security type of the Wi-Fi network. This can be WPA2_ENTERPRISE, WPA2_PSK, WPA_PSK,
   *          WEP, or OPEN.</p>
   */
  SecurityType: NetworkSecurityType | undefined;

  /**
   * @public
   * <p>The authentication standard that is used in the EAP framework. Currently, EAP_TLS is
   *          supported.</p>
   */
  EapMethod?: NetworkEapMethod;

  /**
   * @public
   * <p>The current password of the Wi-Fi network.</p>
   */
  CurrentPassword?: string;

  /**
   * @public
   * <p>The next, or subsequent, password of the Wi-Fi network. This password is asynchronously
   *          transmitted to the device and is used when the password of the network changes to
   *          NextPassword. </p>
   */
  NextPassword?: string;

  /**
   * @public
   * <p>The ARN of the Private Certificate Authority (PCA) created in AWS Certificate Manager
   *          (ACM). This is used to issue certificates to the devices. </p>
   */
  CertificateAuthorityArn?: string;

  /**
   * @public
   * <p>The root certificates of your authentication server that is installed on your devices
   *          and used to trust your authentication server during EAP negotiation. </p>
   */
  TrustAnchors?: string[];

  /**
   * @public
   * <p>A unique, user-specified identifier for the request that ensures idempotency.</p>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>The tags to be added to the specified resource. Do not provide system tags. </p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateNetworkProfileResponse {
  /**
   * @public
   * <p>The ARN of the network profile associated with a device.</p>
   */
  NetworkProfileArn?: string;
}

/**
 * @public
 * <p>The Certificate Authority can't issue or revoke a certificate.</p>
 */
export class InvalidCertificateAuthorityException extends __BaseException {
  readonly name: "InvalidCertificateAuthorityException" = "InvalidCertificateAuthorityException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidCertificateAuthorityException, __BaseException>) {
    super({
      name: "InvalidCertificateAuthorityException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidCertificateAuthorityException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The service linked role is locked for deletion. </p>
 */
export class InvalidServiceLinkedRoleStateException extends __BaseException {
  readonly name: "InvalidServiceLinkedRoleStateException" = "InvalidServiceLinkedRoleStateException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidServiceLinkedRoleStateException, __BaseException>) {
    super({
      name: "InvalidServiceLinkedRoleStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidServiceLinkedRoleStateException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const DistanceUnit = {
  IMPERIAL: "IMPERIAL",
  METRIC: "METRIC",
} as const;

/**
 * @public
 */
export type DistanceUnit = (typeof DistanceUnit)[keyof typeof DistanceUnit];

/**
 * @public
 * @enum
 */
export const EndOfMeetingReminderType = {
  ANNOUNCEMENT_TIME_CHECK: "ANNOUNCEMENT_TIME_CHECK",
  ANNOUNCEMENT_VARIABLE_TIME_LEFT: "ANNOUNCEMENT_VARIABLE_TIME_LEFT",
  CHIME: "CHIME",
  KNOCK: "KNOCK",
} as const;

/**
 * @public
 */
export type EndOfMeetingReminderType = (typeof EndOfMeetingReminderType)[keyof typeof EndOfMeetingReminderType];

/**
 * @public
 * <p>Creates settings for the end of meeting reminder feature that are applied to a room
 *          profile. The end of meeting reminder enables Alexa to remind users when a meeting is
 *          ending.</p>
 */
export interface CreateEndOfMeetingReminder {
  /**
   * @public
   * <p> A range of 3 to 15 minutes that determines when the reminder begins.</p>
   */
  ReminderAtMinutes: number[] | undefined;

  /**
   * @public
   * <p>The type of sound that users hear during the end of meeting reminder. </p>
   */
  ReminderType: EndOfMeetingReminderType | undefined;

  /**
   * @public
   * <p>Whether an end of meeting reminder is enabled or not.</p>
   */
  Enabled: boolean | undefined;
}

/**
 * @public
 * <p>Creates settings for the instant booking feature that are applied to a room profile.
 *          When users start their meeting with Alexa, Alexa automatically books the room for the
 *          configured duration if the room is available.</p>
 */
export interface CreateInstantBooking {
  /**
   * @public
   * <p>Duration between 15 and 240 minutes at increments of 15 that determines how long to book
   *          an available room when a meeting is started with Alexa.</p>
   */
  DurationInMinutes: number | undefined;

  /**
   * @public
   * <p>Whether instant booking is enabled or not.</p>
   */
  Enabled: boolean | undefined;
}

/**
 * @public
 */
export interface CreateProactiveJoin {
  EnabledByMotion: boolean | undefined;
}

/**
 * @public
 * <p>Creates settings for the require check in feature that are applied to a room profile. Require check in allows a meeting room’s Alexa or AVS device to prompt the user to check in; otherwise, the room will be released.</p>
 */
export interface CreateRequireCheckIn {
  /**
   * @public
   * <p>Duration between 5 and 20 minutes to determine when to release the room if it's not checked into.</p>
   */
  ReleaseAfterMinutes: number | undefined;

  /**
   * @public
   * <p>Whether require check in is enabled or not.</p>
   */
  Enabled: boolean | undefined;
}

/**
 * @public
 * <p>Creates meeting room settings of a room profile.</p>
 */
export interface CreateMeetingRoomConfiguration {
  /**
   * @public
   * <p>Whether room utilization metrics are enabled or not.</p>
   */
  RoomUtilizationMetricsEnabled?: boolean;

  /**
   * @public
   * <p>Creates settings for the end of meeting reminder feature that are applied to a room
   *          profile. The end of meeting reminder enables Alexa to remind users when a meeting is
   *          ending.</p>
   */
  EndOfMeetingReminder?: CreateEndOfMeetingReminder;

  /**
   * @public
   * <p>Settings to automatically book a room for a configured duration if it's free when joining a meeting with Alexa.</p>
   */
  InstantBooking?: CreateInstantBooking;

  /**
   * @public
   * <p>Settings for requiring a check in when a room is reserved. Alexa can cancel a room reservation if it's not checked into to make the room available for others. Users can check in by joining the meeting with Alexa or an AVS device, or by saying “Alexa, check in.”</p>
   */
  RequireCheckIn?: CreateRequireCheckIn;

  ProactiveJoin?: CreateProactiveJoin;
}

/**
 * @public
 * @enum
 */
export const TemperatureUnit = {
  CELSIUS: "CELSIUS",
  FAHRENHEIT: "FAHRENHEIT",
} as const;

/**
 * @public
 */
export type TemperatureUnit = (typeof TemperatureUnit)[keyof typeof TemperatureUnit];

/**
 * @public
 * @enum
 */
export const WakeWord = {
  ALEXA: "ALEXA",
  AMAZON: "AMAZON",
  COMPUTER: "COMPUTER",
  ECHO: "ECHO",
} as const;

/**
 * @public
 */
export type WakeWord = (typeof WakeWord)[keyof typeof WakeWord];

/**
 * @public
 */
export interface CreateProfileRequest {
  /**
   * @public
   * <p>The name of a room profile.</p>
   */
  ProfileName: string | undefined;

  /**
   * @public
   * <p>The time zone used by a room profile.</p>
   */
  Timezone: string | undefined;

  /**
   * @public
   * <p>The valid address for the room.</p>
   */
  Address: string | undefined;

  /**
   * @public
   * <p>The distance unit to be used by devices in the profile.</p>
   */
  DistanceUnit: DistanceUnit | undefined;

  /**
   * @public
   * <p>The temperature unit to be used by devices in the profile.</p>
   */
  TemperatureUnit: TemperatureUnit | undefined;

  /**
   * @public
   * <p>A wake word for Alexa, Echo, Amazon, or a computer.</p>
   */
  WakeWord: WakeWord | undefined;

  /**
   * @public
   * <p>The locale of the room profile. (This is currently only available to a limited preview audience.)</p>
   */
  Locale?: string;

  /**
   * @public
   * <p>The user-specified token that is used during the creation of a profile.</p>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>Whether room profile setup is enabled.</p>
   */
  SetupModeDisabled?: boolean;

  /**
   * @public
   * <p>The maximum volume limit for a room profile.</p>
   */
  MaxVolumeLimit?: number;

  /**
   * @public
   * <p>Whether PSTN calling is enabled.</p>
   */
  PSTNEnabled?: boolean;

  /**
   * @public
   * <p>Whether data retention of the profile is enabled.</p>
   */
  DataRetentionOptIn?: boolean;

  /**
   * @public
   * <p>The meeting room settings of a room profile.</p>
   */
  MeetingRoomConfiguration?: CreateMeetingRoomConfiguration;

  /**
   * @public
   * <p>The tags for the profile.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateProfileResponse {
  /**
   * @public
   * <p>The ARN of the newly created room profile in the response.</p>
   */
  ProfileArn?: string;
}

/**
 * @public
 */
export interface CreateRoomRequest {
  /**
   * @public
   * <p>The name for the room.</p>
   */
  RoomName: string | undefined;

  /**
   * @public
   * <p>The description for the room.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The profile ARN for the room. This is required.</p>
   */
  ProfileArn?: string;

  /**
   * @public
   * <p>The calendar ARN for the room.</p>
   */
  ProviderCalendarId?: string;

  /**
   * @public
   * <p>A unique, user-specified identifier for this request that ensures idempotency.
   *       </p>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>The tags for the room.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateRoomResponse {
  /**
   * @public
   * <p>The ARN of the newly created room in the response.</p>
   */
  RoomArn?: string;
}

/**
 * @public
 */
export interface CreateSkillGroupRequest {
  /**
   * @public
   * <p>The name for the skill group.</p>
   */
  SkillGroupName: string | undefined;

  /**
   * @public
   * <p>The description for the skill group.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>A unique, user-specified identifier for this request that ensures idempotency.
   *       </p>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>The tags for the skill group.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateSkillGroupResponse {
  /**
   * @public
   * <p>The ARN of the newly created skill group in the response.</p>
   */
  SkillGroupArn?: string;
}

/**
 * @public
 */
export interface CreateUserRequest {
  /**
   * @public
   * <p>The ARN for the user.</p>
   */
  UserId: string | undefined;

  /**
   * @public
   * <p>The first name for the user.</p>
   */
  FirstName?: string;

  /**
   * @public
   * <p>The last name for the user.</p>
   */
  LastName?: string;

  /**
   * @public
   * <p>The email address for the user.</p>
   */
  Email?: string;

  /**
   * @public
   * <p>A unique, user-specified identifier for this request that ensures idempotency.
   *       </p>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>The tags for the user.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateUserResponse {
  /**
   * @public
   * <p>The ARN of the newly created user in the response.</p>
   */
  UserArn?: string;
}

/**
 * @public
 * <p>The resource in the request is already in use.</p>
 */
export class ResourceInUseException extends __BaseException {
  readonly name: "ResourceInUseException" = "ResourceInUseException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @public
   * <p>A unique, user-specified identifier for the request that ensures idempotency.</p>
   */
  ClientRequestToken?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceInUseException, __BaseException>) {
    super({
      name: "ResourceInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceInUseException.prototype);
    this.Message = opts.Message;
    this.ClientRequestToken = opts.ClientRequestToken;
  }
}

/**
 * @public
 */
export interface DeleteAddressBookRequest {
  /**
   * @public
   * <p>The ARN of the address book to delete.</p>
   */
  AddressBookArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteAddressBookResponse {}

/**
 * @public
 */
export interface DeleteBusinessReportScheduleRequest {
  /**
   * @public
   * <p>The ARN of the business report schedule.</p>
   */
  ScheduleArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteBusinessReportScheduleResponse {}

/**
 * @public
 */
export interface DeleteConferenceProviderRequest {
  /**
   * @public
   * <p>The ARN of the conference provider.</p>
   */
  ConferenceProviderArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteConferenceProviderResponse {}

/**
 * @public
 */
export interface DeleteContactRequest {
  /**
   * @public
   * <p>The ARN of the contact to delete.</p>
   */
  ContactArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteContactResponse {}

/**
 * @public
 */
export interface DeleteDeviceRequest {
  /**
   * @public
   * <p>The ARN of the device for which to request details.</p>
   */
  DeviceArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteDeviceResponse {}

/**
 * @public
 * @enum
 */
export const DeviceUsageType = {
  VOICE: "VOICE",
} as const;

/**
 * @public
 */
export type DeviceUsageType = (typeof DeviceUsageType)[keyof typeof DeviceUsageType];

/**
 * @public
 */
export interface DeleteDeviceUsageDataRequest {
  /**
   * @public
   * <p>The ARN of the device.</p>
   */
  DeviceArn: string | undefined;

  /**
   * @public
   * <p>The type of usage data to delete.</p>
   */
  DeviceUsageType: DeviceUsageType | undefined;
}

/**
 * @public
 */
export interface DeleteDeviceUsageDataResponse {}

/**
 * @public
 */
export interface DeleteGatewayGroupRequest {
  /**
   * @public
   * <p>The ARN of the gateway group to delete.</p>
   */
  GatewayGroupArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteGatewayGroupResponse {}

/**
 * @public
 * <p>Another resource is associated with the resource in the request.</p>
 */
export class ResourceAssociatedException extends __BaseException {
  readonly name: "ResourceAssociatedException" = "ResourceAssociatedException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceAssociatedException, __BaseException>) {
    super({
      name: "ResourceAssociatedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceAssociatedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface DeleteNetworkProfileRequest {
  /**
   * @public
   * <p>The ARN of the network profile associated with a device.</p>
   */
  NetworkProfileArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteNetworkProfileResponse {}

/**
 * @public
 */
export interface DeleteProfileRequest {
  /**
   * @public
   * <p>The ARN of the room profile to delete. Required.</p>
   */
  ProfileArn?: string;
}

/**
 * @public
 */
export interface DeleteProfileResponse {}

/**
 * @public
 */
export interface DeleteRoomRequest {
  /**
   * @public
   * <p>The ARN of the room to delete. Required.</p>
   */
  RoomArn?: string;
}

/**
 * @public
 */
export interface DeleteRoomResponse {}

/**
 * @public
 */
export interface DeleteRoomSkillParameterRequest {
  /**
   * @public
   * <p>The ARN of the room from which to remove the room skill parameter details.</p>
   */
  RoomArn?: string;

  /**
   * @public
   * <p>The ID of the skill from which to remove the room skill parameter details.</p>
   */
  SkillId: string | undefined;

  /**
   * @public
   * <p>The room skill parameter key for which to remove details.</p>
   */
  ParameterKey: string | undefined;
}

/**
 * @public
 */
export interface DeleteRoomSkillParameterResponse {}

/**
 * @public
 */
export interface DeleteSkillAuthorizationRequest {
  /**
   * @public
   * <p>The unique identifier of a skill.</p>
   */
  SkillId: string | undefined;

  /**
   * @public
   * <p>The room that the skill is authorized for.</p>
   */
  RoomArn?: string;
}

/**
 * @public
 */
export interface DeleteSkillAuthorizationResponse {}

/**
 * @public
 */
export interface DeleteSkillGroupRequest {
  /**
   * @public
   * <p>The ARN of the skill group to delete. Required.</p>
   */
  SkillGroupArn?: string;
}

/**
 * @public
 */
export interface DeleteSkillGroupResponse {}

/**
 * @public
 */
export interface DeleteUserRequest {
  /**
   * @public
   * <p>The ARN of the user to delete in the organization. Required.</p>
   */
  UserArn?: string;

  /**
   * @public
   * <p>The ARN of the user's enrollment in the organization. Required.</p>
   */
  EnrollmentId: string | undefined;
}

/**
 * @public
 */
export interface DeleteUserResponse {}

/**
 * @public
 */
export interface DisassociateContactFromAddressBookRequest {
  /**
   * @public
   * <p>The ARN of the contact to disassociate from an address book.</p>
   */
  ContactArn: string | undefined;

  /**
   * @public
   * <p>The ARN of the address from which to disassociate the contact.</p>
   */
  AddressBookArn: string | undefined;
}

/**
 * @public
 */
export interface DisassociateContactFromAddressBookResponse {}

/**
 * @public
 */
export interface DisassociateDeviceFromRoomRequest {
  /**
   * @public
   * <p>The ARN of the device to disassociate from a room. Required.</p>
   */
  DeviceArn?: string;
}

/**
 * @public
 */
export interface DisassociateDeviceFromRoomResponse {}

/**
 * @public
 */
export interface DisassociateSkillFromSkillGroupRequest {
  /**
   * @public
   * <p>The unique identifier of a skill. Required.</p>
   */
  SkillGroupArn?: string;

  /**
   * @public
   * <p>The ARN of a skill group to associate to a skill.</p>
   */
  SkillId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateSkillFromSkillGroupResponse {}

/**
 * @public
 */
export interface DisassociateSkillFromUsersRequest {
  /**
   * @public
   * <p> The private skill ID you want to make unavailable for enrolled users.</p>
   */
  SkillId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateSkillFromUsersResponse {}

/**
 * @public
 */
export interface DisassociateSkillGroupFromRoomRequest {
  /**
   * @public
   * <p>The ARN of the skill group to disassociate from a room. Required.</p>
   */
  SkillGroupArn?: string;

  /**
   * @public
   * <p>The ARN of the room from which the skill group is to be disassociated.
   *          Required.</p>
   */
  RoomArn?: string;
}

/**
 * @public
 */
export interface DisassociateSkillGroupFromRoomResponse {}

/**
 * @public
 */
export interface ForgetSmartHomeAppliancesRequest {
  /**
   * @public
   * <p>The room that the appliances are associated with.</p>
   */
  RoomArn: string | undefined;
}

/**
 * @public
 */
export interface ForgetSmartHomeAppliancesResponse {}

/**
 * @public
 */
export interface GetAddressBookRequest {
  /**
   * @public
   * <p>The ARN of the address book for which to request details.</p>
   */
  AddressBookArn: string | undefined;
}

/**
 * @public
 */
export interface GetAddressBookResponse {
  /**
   * @public
   * <p>The details of the requested address book.</p>
   */
  AddressBook?: AddressBook;
}

/**
 * @public
 */
export interface GetConferencePreferenceRequest {}

/**
 * @public
 * <p>The default conference provider that is used if no other scheduled meetings are
 *          detected.</p>
 */
export interface ConferencePreference {
  /**
   * @public
   * <p>The ARN of the default conference provider.</p>
   */
  DefaultConferenceProviderArn?: string;
}

/**
 * @public
 */
export interface GetConferencePreferenceResponse {
  /**
   * @public
   * <p>The conference preference.</p>
   */
  Preference?: ConferencePreference;
}

/**
 * @public
 */
export interface GetConferenceProviderRequest {
  /**
   * @public
   * <p>The ARN of the newly created conference provider.</p>
   */
  ConferenceProviderArn: string | undefined;
}

/**
 * @public
 * <p>An entity that provides a conferencing solution. Alexa for Business acts as the voice interface and mediator that connects users to their preferred conference provider. Examples of conference providers include Amazon Chime, Zoom, Cisco, and Polycom. </p>
 */
export interface ConferenceProvider {
  /**
   * @public
   * <p>The ARN of the newly created conference provider.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The name of the conference provider.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The type of conference providers.</p>
   */
  Type?: ConferenceProviderType;

  /**
   * @public
   * <p>The IP endpoint and protocol for calling.</p>
   */
  IPDialIn?: IPDialIn;

  /**
   * @public
   * <p>The information for PSTN conferencing.</p>
   */
  PSTNDialIn?: PSTNDialIn;

  /**
   * @public
   * <p>The meeting settings for the conference provider.</p>
   */
  MeetingSetting?: MeetingSetting;
}

/**
 * @public
 */
export interface GetConferenceProviderResponse {
  /**
   * @public
   * <p>The conference provider.</p>
   */
  ConferenceProvider?: ConferenceProvider;
}

/**
 * @public
 */
export interface GetContactRequest {
  /**
   * @public
   * <p>The ARN of the contact for which to request details.</p>
   */
  ContactArn: string | undefined;
}

/**
 * @public
 * <p>A contact with attributes.</p>
 */
export interface Contact {
  /**
   * @public
   * <p>The ARN of the contact.</p>
   */
  ContactArn?: string;

  /**
   * @public
   * <p>The name of the contact to display on the console.</p>
   */
  DisplayName?: string;

  /**
   * @public
   * <p>The first name of the contact, used to call the contact on the device.</p>
   */
  FirstName?: string;

  /**
   * @public
   * <p>The last name of the contact, used to call the contact on the device.</p>
   */
  LastName?: string;

  /**
   * @public
   * <p>The phone number of the contact. The phone number type defaults to WORK. You can
   *          either specify PhoneNumber or PhoneNumbers. We recommend that you use PhoneNumbers, which
   *          lets you specify the phone number type and multiple numbers.</p>
   */
  PhoneNumber?: string;

  /**
   * @public
   * <p>The list of phone numbers for the contact.</p>
   */
  PhoneNumbers?: PhoneNumber[];

  /**
   * @public
   * <p>The list of SIP addresses for the contact.</p>
   */
  SipAddresses?: SipAddress[];
}

/**
 * @public
 */
export interface GetContactResponse {
  /**
   * @public
   * <p>The details of the requested contact.</p>
   */
  Contact?: Contact;
}

/**
 * @public
 */
export interface GetDeviceRequest {
  /**
   * @public
   * <p>The ARN of the device for which to request details. Required.</p>
   */
  DeviceArn?: string;
}

/**
 * @public
 * @enum
 */
export const DeviceStatus = {
  DEREGISTERED: "DEREGISTERED",
  FAILED: "FAILED",
  PENDING: "PENDING",
  READY: "READY",
  WAS_OFFLINE: "WAS_OFFLINE",
} as const;

/**
 * @public
 */
export type DeviceStatus = (typeof DeviceStatus)[keyof typeof DeviceStatus];

/**
 * @public
 * @enum
 */
export const ConnectionStatus = {
  OFFLINE: "OFFLINE",
  ONLINE: "ONLINE",
} as const;

/**
 * @public
 */
export type ConnectionStatus = (typeof ConnectionStatus)[keyof typeof ConnectionStatus];

/**
 * @public
 * @enum
 */
export const DeviceStatusDetailCode = {
  ASSOCIATION_REJECTION: "ASSOCIATION_REJECTION",
  AUTHENTICATION_FAILURE: "AUTHENTICATION_FAILURE",
  CERTIFICATE_AUTHORITY_ACCESS_DENIED: "CERTIFICATE_AUTHORITY_ACCESS_DENIED",
  CERTIFICATE_ISSUING_LIMIT_EXCEEDED: "CERTIFICATE_ISSUING_LIMIT_EXCEEDED",
  CREDENTIALS_ACCESS_FAILURE: "CREDENTIALS_ACCESS_FAILURE",
  DEVICE_SOFTWARE_UPDATE_NEEDED: "DEVICE_SOFTWARE_UPDATE_NEEDED",
  DEVICE_WAS_OFFLINE: "DEVICE_WAS_OFFLINE",
  DHCP_FAILURE: "DHCP_FAILURE",
  DNS_FAILURE: "DNS_FAILURE",
  INTERNET_UNAVAILABLE: "INTERNET_UNAVAILABLE",
  INVALID_CERTIFICATE_AUTHORITY: "INVALID_CERTIFICATE_AUTHORITY",
  INVALID_PASSWORD_STATE: "INVALID_PASSWORD_STATE",
  NETWORK_PROFILE_NOT_FOUND: "NETWORK_PROFILE_NOT_FOUND",
  PASSWORD_MANAGER_ACCESS_DENIED: "PASSWORD_MANAGER_ACCESS_DENIED",
  PASSWORD_NOT_FOUND: "PASSWORD_NOT_FOUND",
  TLS_VERSION_MISMATCH: "TLS_VERSION_MISMATCH",
  UNKNOWN_FAILURE: "UNKNOWN_FAILURE",
} as const;

/**
 * @public
 */
export type DeviceStatusDetailCode = (typeof DeviceStatusDetailCode)[keyof typeof DeviceStatusDetailCode];

/**
 * @public
 * @enum
 */
export const Feature = {
  ALL: "ALL",
  BLUETOOTH: "BLUETOOTH",
  LISTS: "LISTS",
  NETWORK_PROFILE: "NETWORK_PROFILE",
  NOTIFICATIONS: "NOTIFICATIONS",
  SETTINGS: "SETTINGS",
  SKILLS: "SKILLS",
  VOLUME: "VOLUME",
} as const;

/**
 * @public
 */
export type Feature = (typeof Feature)[keyof typeof Feature];

/**
 * @public
 * <p>Details of a device’s status.</p>
 */
export interface DeviceStatusDetail {
  /**
   * @public
   * <p>The list of available features on the device.</p>
   */
  Feature?: Feature;

  /**
   * @public
   * <p>The device status detail code.</p>
   */
  Code?: DeviceStatusDetailCode;
}

/**
 * @public
 * <p>Detailed information about a device's status.</p>
 */
export interface DeviceStatusInfo {
  /**
   * @public
   * <p>One or more device status detail descriptions.</p>
   */
  DeviceStatusDetails?: DeviceStatusDetail[];

  /**
   * @public
   * <p>The latest available information about the connection status of a device. </p>
   */
  ConnectionStatus?: ConnectionStatus;

  /**
   * @public
   * <p>The time (in epoch) when the device connection status changed.</p>
   */
  ConnectionStatusUpdatedTime?: Date;
}

/**
 * @public
 * <p>Detailed information about a device's network profile.</p>
 */
export interface DeviceNetworkProfileInfo {
  /**
   * @public
   * <p>The ARN of the network profile associated with a device.</p>
   */
  NetworkProfileArn?: string;

  /**
   * @public
   * <p>The ARN of the certificate associated with a device.</p>
   */
  CertificateArn?: string;

  /**
   * @public
   * <p>The time (in epoch) when the certificate expires.</p>
   */
  CertificateExpirationTime?: Date;
}

/**
 * @public
 * <p>A device with attributes.</p>
 */
export interface Device {
  /**
   * @public
   * <p>The ARN of a device.</p>
   */
  DeviceArn?: string;

  /**
   * @public
   * <p>The serial number of a device.</p>
   */
  DeviceSerialNumber?: string;

  /**
   * @public
   * <p>The type of a device.</p>
   */
  DeviceType?: string;

  /**
   * @public
   * <p>The name of a device.</p>
   */
  DeviceName?: string;

  /**
   * @public
   * <p>The software version of a device.</p>
   */
  SoftwareVersion?: string;

  /**
   * @public
   * <p>The MAC address of a device.</p>
   */
  MacAddress?: string;

  /**
   * @public
   * <p>The room ARN of a device.</p>
   */
  RoomArn?: string;

  /**
   * @public
   * <p>The status of a device. If the status is not READY, check the DeviceStatusInfo value
   *          for details.</p>
   */
  DeviceStatus?: DeviceStatus;

  /**
   * @public
   * <p>Detailed information about a device's status.</p>
   */
  DeviceStatusInfo?: DeviceStatusInfo;

  /**
   * @public
   * <p>Detailed information about a device's network profile.</p>
   */
  NetworkProfileInfo?: DeviceNetworkProfileInfo;
}

/**
 * @public
 */
export interface GetDeviceResponse {
  /**
   * @public
   * <p>The details of the device requested. Required.</p>
   */
  Device?: Device;
}

/**
 * @public
 */
export interface GetGatewayRequest {
  /**
   * @public
   * <p>The ARN of the gateway to get.</p>
   */
  GatewayArn: string | undefined;
}

/**
 * @public
 * <p>The details of the gateway. </p>
 */
export interface Gateway {
  /**
   * @public
   * <p>The ARN of the gateway.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The name of the gateway.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The description of the gateway.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The ARN of the gateway group that the gateway is associated to.</p>
   */
  GatewayGroupArn?: string;

  /**
   * @public
   * <p>The software version of the gateway. The gateway automatically updates its software
   *          version during normal operation.</p>
   */
  SoftwareVersion?: string;
}

/**
 * @public
 */
export interface GetGatewayResponse {
  /**
   * @public
   * <p>The details of the gateway.</p>
   */
  Gateway?: Gateway;
}

/**
 * @public
 */
export interface GetGatewayGroupRequest {
  /**
   * @public
   * <p>The ARN of the gateway group to get.</p>
   */
  GatewayGroupArn: string | undefined;
}

/**
 * @public
 * <p>The details of the gateway group.</p>
 */
export interface GatewayGroup {
  /**
   * @public
   * <p>The ARN of the gateway group.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The name of the gateway group.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The description of the gateway group.</p>
   */
  Description?: string;
}

/**
 * @public
 */
export interface GetGatewayGroupResponse {
  /**
   * @public
   * <p>The details of the gateway group.</p>
   */
  GatewayGroup?: GatewayGroup;
}

/**
 * @public
 */
export interface GetInvitationConfigurationRequest {}

/**
 * @public
 */
export interface GetInvitationConfigurationResponse {
  /**
   * @public
   * <p>The name of the organization sending the enrollment invite to a user.</p>
   */
  OrganizationName?: string;

  /**
   * @public
   * <p>The email ID of the organization or individual contact that the enrolled user can use.
   *       </p>
   */
  ContactEmail?: string;

  /**
   * @public
   * <p>The list of private skill IDs that you want to recommend to the user to enable in the
   *          invitation.</p>
   */
  PrivateSkillIds?: string[];
}

/**
 * @public
 */
export interface GetNetworkProfileRequest {
  /**
   * @public
   * <p>The ARN of the network profile associated with a device.</p>
   */
  NetworkProfileArn: string | undefined;
}

/**
 * @public
 * <p>The network profile associated with a device.</p>
 */
export interface NetworkProfile {
  /**
   * @public
   * <p>The ARN of the network profile associated with a device.</p>
   */
  NetworkProfileArn?: string;

  /**
   * @public
   * <p>The name of the network profile associated with a device.</p>
   */
  NetworkProfileName?: string;

  /**
   * @public
   * <p>Detailed information about a device's network profile.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The SSID of the Wi-Fi network.</p>
   */
  Ssid?: string;

  /**
   * @public
   * <p>The security type of the Wi-Fi network. This can be WPA2_ENTERPRISE, WPA2_PSK, WPA_PSK,
   *          WEP, or OPEN.</p>
   */
  SecurityType?: NetworkSecurityType;

  /**
   * @public
   * <p>The authentication standard that is used in the EAP framework. Currently, EAP_TLS is
   *          supported. </p>
   */
  EapMethod?: NetworkEapMethod;

  /**
   * @public
   * <p>The current password of the Wi-Fi network.</p>
   */
  CurrentPassword?: string;

  /**
   * @public
   * <p>The next, or subsequent, password of the Wi-Fi network. This password is asynchronously
   *          transmitted to the device and is used when the password of the network changes to
   *          NextPassword. </p>
   */
  NextPassword?: string;

  /**
   * @public
   * <p>The ARN of the Private Certificate Authority (PCA) created in AWS Certificate Manager
   *          (ACM). This is used to issue certificates to the devices. </p>
   */
  CertificateAuthorityArn?: string;

  /**
   * @public
   * <p>The root certificates of your authentication server, which is installed on your devices
   *          and used to trust your authentication server during EAP negotiation.</p>
   */
  TrustAnchors?: string[];
}

/**
 * @public
 */
export interface GetNetworkProfileResponse {
  /**
   * @public
   * <p>The network profile associated with a device.</p>
   */
  NetworkProfile?: NetworkProfile;
}

/**
 * @public
 * <p>A password in SecretsManager is in an invalid state.</p>
 */
export class InvalidSecretsManagerResourceException extends __BaseException {
  readonly name: "InvalidSecretsManagerResourceException" = "InvalidSecretsManagerResourceException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidSecretsManagerResourceException, __BaseException>) {
    super({
      name: "InvalidSecretsManagerResourceException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidSecretsManagerResourceException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface GetProfileRequest {
  /**
   * @public
   * <p>The ARN of the room profile for which to request details. Required.</p>
   */
  ProfileArn?: string;
}

/**
 * @public
 * <p>Settings for the end of meeting reminder feature that are applied to a room profile. The
 *          end of meeting reminder enables Alexa to remind users when a meeting is ending. </p>
 */
export interface EndOfMeetingReminder {
  /**
   * @public
   * <p>A range of 3 to 15 minutes that determines when the reminder begins.</p>
   */
  ReminderAtMinutes?: number[];

  /**
   * @public
   * <p>The type of sound that users hear during the end of meeting reminder. </p>
   */
  ReminderType?: EndOfMeetingReminderType;

  /**
   * @public
   * <p>Whether an end of meeting reminder is enabled or not.</p>
   */
  Enabled?: boolean;
}

/**
 * @public
 * <p>Settings for the instant booking feature that are applied to a room profile. When users
 *          start their meeting with Alexa, Alexa  automatically books the room for the configured
 *          duration if the room is available.</p>
 */
export interface InstantBooking {
  /**
   * @public
   * <p>Duration between 15 and 240 minutes at increments of 15 that determines how long to book
   *          an available room when a meeting is started with Alexa. </p>
   */
  DurationInMinutes?: number;

  /**
   * @public
   * <p>Whether instant booking is enabled or not.</p>
   */
  Enabled?: boolean;
}

/**
 * @public
 */
export interface ProactiveJoin {
  EnabledByMotion?: boolean;
}

/**
 * @public
 * <p>Settings for the require check in feature that are applied to a room profile. Require check in allows a meeting room’s Alexa or AVS device to prompt the user to check in; otherwise, the room will be released. </p>
 */
export interface RequireCheckIn {
  /**
   * @public
   * <p>Duration between 5 and 20 minutes to determine when to release the room if it's not checked into. </p>
   */
  ReleaseAfterMinutes?: number;

  /**
   * @public
   * <p>Whether require check in is enabled or not.</p>
   */
  Enabled?: boolean;
}

/**
 * @public
 * <p>Meeting room settings of a room profile.</p>
 */
export interface MeetingRoomConfiguration {
  /**
   * @public
   * <p>Whether room utilization metrics are enabled or not.</p>
   */
  RoomUtilizationMetricsEnabled?: boolean;

  /**
   * @public
   * <p>Settings for the end of meeting reminder feature that are applied to a room profile. The
   *          end of meeting reminder enables Alexa to remind users when a meeting is ending. </p>
   */
  EndOfMeetingReminder?: EndOfMeetingReminder;

  /**
   * @public
   * <p>Settings to automatically book the room if available for a configured duration when
   *          joining a meeting with Alexa. </p>
   */
  InstantBooking?: InstantBooking;

  /**
   * @public
   * <p>Settings for requiring a check in when a room is reserved. Alexa can cancel a room
   *          reservation if it's not checked into. This makes the room available for others. Users can
   *          check in by joining the meeting with Alexa or an AVS device, or by saying “Alexa, check
   *          in.” </p>
   */
  RequireCheckIn?: RequireCheckIn;

  ProactiveJoin?: ProactiveJoin;
}

/**
 * @public
 * <p>A room profile with attributes.</p>
 */
export interface Profile {
  /**
   * @public
   * <p>The ARN of a room profile.</p>
   */
  ProfileArn?: string;

  /**
   * @public
   * <p>The name of a room profile.</p>
   */
  ProfileName?: string;

  /**
   * @public
   * <p>Retrieves if the profile is default or not.</p>
   */
  IsDefault?: boolean;

  /**
   * @public
   * <p>The address of a room profile.</p>
   */
  Address?: string;

  /**
   * @public
   * <p>The time zone of a room profile.</p>
   */
  Timezone?: string;

  /**
   * @public
   * <p>The distance unit of a room profile.</p>
   */
  DistanceUnit?: DistanceUnit;

  /**
   * @public
   * <p>The temperature unit of a room profile.</p>
   */
  TemperatureUnit?: TemperatureUnit;

  /**
   * @public
   * <p>The wake word of a room profile.</p>
   */
  WakeWord?: WakeWord;

  /**
   * @public
   * <p>The locale of a room profile. (This is currently available only to a limited preview
   *          audience.)</p>
   */
  Locale?: string;

  /**
   * @public
   * <p>The setup mode of a room profile.</p>
   */
  SetupModeDisabled?: boolean;

  /**
   * @public
   * <p>The max volume limit of a room profile.</p>
   */
  MaxVolumeLimit?: number;

  /**
   * @public
   * <p>The PSTN setting of a room profile.</p>
   */
  PSTNEnabled?: boolean;

  /**
   * @public
   * <p>Whether data retention of the profile is enabled.</p>
   */
  DataRetentionOptIn?: boolean;

  /**
   * @public
   * <p>The ARN of the address book.</p>
   */
  AddressBookArn?: string;

  /**
   * @public
   * <p>Meeting room settings of a room profile.</p>
   */
  MeetingRoomConfiguration?: MeetingRoomConfiguration;
}

/**
 * @public
 */
export interface GetProfileResponse {
  /**
   * @public
   * <p>The details of the room profile requested. Required.</p>
   */
  Profile?: Profile;
}

/**
 * @public
 */
export interface GetRoomRequest {
  /**
   * @public
   * <p>The ARN of the room for which to request details. Required.</p>
   */
  RoomArn?: string;
}

/**
 * @public
 * <p>A room with attributes.</p>
 */
export interface Room {
  /**
   * @public
   * <p>The ARN of a room.</p>
   */
  RoomArn?: string;

  /**
   * @public
   * <p>The name of a room.</p>
   */
  RoomName?: string;

  /**
   * @public
   * <p>The description of a room.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The provider calendar ARN of a room.</p>
   */
  ProviderCalendarId?: string;

  /**
   * @public
   * <p>The profile ARN of a room.</p>
   */
  ProfileArn?: string;
}

/**
 * @public
 */
export interface GetRoomResponse {
  /**
   * @public
   * <p>The details of the room requested.</p>
   */
  Room?: Room;
}

/**
 * @public
 */
export interface GetRoomSkillParameterRequest {
  /**
   * @public
   * <p>The ARN of the room from which to get the room skill parameter details. </p>
   */
  RoomArn?: string;

  /**
   * @public
   * <p>The ARN of the skill from which to get the room skill parameter details.
   *          Required.</p>
   */
  SkillId: string | undefined;

  /**
   * @public
   * <p>The room skill parameter key for which to get details. Required.</p>
   */
  ParameterKey: string | undefined;
}

/**
 * @public
 * <p>A skill parameter associated with a room.</p>
 */
export interface RoomSkillParameter {
  /**
   * @public
   * <p>The parameter key of a room skill parameter. ParameterKey is an enumerated type that
   *          only takes “DEFAULT” or “SCOPE” as valid values.</p>
   */
  ParameterKey: string | undefined;

  /**
   * @public
   * <p>The parameter value of a room skill parameter.</p>
   */
  ParameterValue: string | undefined;
}

/**
 * @public
 */
export interface GetRoomSkillParameterResponse {
  /**
   * @public
   * <p>The details of the room skill parameter requested. Required.</p>
   */
  RoomSkillParameter?: RoomSkillParameter;
}

/**
 * @public
 */
export interface GetSkillGroupRequest {
  /**
   * @public
   * <p>The ARN of the skill group for which to get details. Required.</p>
   */
  SkillGroupArn?: string;
}

/**
 * @public
 * <p>A skill group with attributes.</p>
 */
export interface SkillGroup {
  /**
   * @public
   * <p>The ARN of a skill group.</p>
   */
  SkillGroupArn?: string;

  /**
   * @public
   * <p>The name of a skill group.</p>
   */
  SkillGroupName?: string;

  /**
   * @public
   * <p>The description of a skill group.</p>
   */
  Description?: string;
}

/**
 * @public
 */
export interface GetSkillGroupResponse {
  /**
   * @public
   * <p>The details of the skill group requested. Required.</p>
   */
  SkillGroup?: SkillGroup;
}

/**
 * @public
 */
export interface ListBusinessReportSchedulesRequest {
  /**
   * @public
   * <p>The token used to list the remaining schedules from the previous API call.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of schedules listed in the call.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * @enum
 */
export const BusinessReportFailureCode = {
  ACCESS_DENIED: "ACCESS_DENIED",
  INTERNAL_FAILURE: "INTERNAL_FAILURE",
  NO_SUCH_BUCKET: "NO_SUCH_BUCKET",
} as const;

/**
 * @public
 */
export type BusinessReportFailureCode = (typeof BusinessReportFailureCode)[keyof typeof BusinessReportFailureCode];

/**
 * @public
 * <p>The S3 location of the output reports.</p>
 */
export interface BusinessReportS3Location {
  /**
   * @public
   * <p>The path of the business report.</p>
   */
  Path?: string;

  /**
   * @public
   * <p>The S3 bucket name of the output reports.</p>
   */
  BucketName?: string;
}

/**
 * @public
 * @enum
 */
export const BusinessReportStatus = {
  FAILED: "FAILED",
  RUNNING: "RUNNING",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type BusinessReportStatus = (typeof BusinessReportStatus)[keyof typeof BusinessReportStatus];

/**
 * @public
 * <p>Usage report with specified parameters.</p>
 */
export interface BusinessReport {
  /**
   * @public
   * <p>The status of the report generation execution (RUNNING, SUCCEEDED, or
   *          FAILED).</p>
   */
  Status?: BusinessReportStatus;

  /**
   * @public
   * <p>The failure code.</p>
   */
  FailureCode?: BusinessReportFailureCode;

  /**
   * @public
   * <p>The S3 location of the output reports.</p>
   */
  S3Location?: BusinessReportS3Location;

  /**
   * @public
   * <p>The time of report delivery.</p>
   */
  DeliveryTime?: Date;

  /**
   * @public
   * <p>The download link where a user can download the report.</p>
   */
  DownloadUrl?: string;
}

/**
 * @public
 * <p>The schedule of the usage report.</p>
 */
export interface BusinessReportSchedule {
  /**
   * @public
   * <p>The ARN of the business report schedule.</p>
   */
  ScheduleArn?: string;

  /**
   * @public
   * <p>The name identifier of the schedule.</p>
   */
  ScheduleName?: string;

  /**
   * @public
   * <p>The S3 bucket name of the output reports.</p>
   */
  S3BucketName?: string;

  /**
   * @public
   * <p>The S3 key where the report is delivered.</p>
   */
  S3KeyPrefix?: string;

  /**
   * @public
   * <p>The format of the generated report (individual CSV files or zipped files of
   *          individual files).</p>
   */
  Format?: BusinessReportFormat;

  /**
   * @public
   * <p>The content range of the reports.</p>
   */
  ContentRange?: BusinessReportContentRange;

  /**
   * @public
   * <p>The recurrence of the reports.</p>
   */
  Recurrence?: BusinessReportRecurrence;

  /**
   * @public
   * <p>The details of the last business report delivery for a specified time
   *          interval.</p>
   */
  LastBusinessReport?: BusinessReport;
}

/**
 * @public
 */
export interface ListBusinessReportSchedulesResponse {
  /**
   * @public
   * <p>The schedule of the reports.</p>
   */
  BusinessReportSchedules?: BusinessReportSchedule[];

  /**
   * @public
   * <p>The token used to list the remaining schedules from the previous API call.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListConferenceProvidersRequest {
  /**
   * @public
   * <p>The tokens used for pagination.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of conference providers to be returned, per paginated
   *          calls.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListConferenceProvidersResponse {
  /**
   * @public
   * <p>The conference providers.</p>
   */
  ConferenceProviders?: ConferenceProvider[];

  /**
   * @public
   * <p>The tokens used for pagination.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const DeviceEventType = {
  CONNECTION_STATUS: "CONNECTION_STATUS",
  DEVICE_STATUS: "DEVICE_STATUS",
} as const;

/**
 * @public
 */
export type DeviceEventType = (typeof DeviceEventType)[keyof typeof DeviceEventType];

/**
 * @public
 */
export interface ListDeviceEventsRequest {
  /**
   * @public
   * <p>The ARN of a device.</p>
   */
  DeviceArn: string | undefined;

  /**
   * @public
   * <p>The event type to filter device events. If EventType isn't specified, this returns a
   *          list of all device events in reverse chronological order. If EventType is specified, this
   *          returns a list of device events for that EventType in reverse chronological order.
   *       </p>
   */
  EventType?: DeviceEventType;

  /**
   * @public
   * <p>An optional token returned from a prior request. Use this token for pagination of
   *          results from this action. If this parameter is specified, the response only includes
   *          results beyond the token, up to the value specified by MaxResults. When the end of results
   *          is reached, the response has a value of null.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to include in the response. The default value is 50. If
   *          more results exist than the specified MaxResults value, a token is included in the response
   *          so that the remaining results can be retrieved. </p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>The list of device events.</p>
 */
export interface DeviceEvent {
  /**
   * @public
   * <p>The type of device event.</p>
   */
  Type?: DeviceEventType;

  /**
   * @public
   * <p>The value of the event.</p>
   */
  Value?: string;

  /**
   * @public
   * <p>The time (in epoch) when the event occurred. </p>
   */
  Timestamp?: Date;
}

/**
 * @public
 */
export interface ListDeviceEventsResponse {
  /**
   * @public
   * <p>The device events requested for the device ARN.</p>
   */
  DeviceEvents?: DeviceEvent[];

  /**
   * @public
   * <p>The token returned to indicate that there is more data available.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListGatewayGroupsRequest {
  /**
   * @public
   * <p>The token used to paginate though multiple pages of gateway group summaries.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of gateway group summaries to return. The default is 50.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>The summary of a gateway group.</p>
 */
export interface GatewayGroupSummary {
  /**
   * @public
   * <p>The ARN of the gateway group.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The name of the gateway group.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The description of the gateway group.</p>
   */
  Description?: string;
}

/**
 * @public
 */
export interface ListGatewayGroupsResponse {
  /**
   * @public
   * <p>The gateway groups in the list.</p>
   */
  GatewayGroups?: GatewayGroupSummary[];

  /**
   * @public
   * <p>The token used to paginate though multiple pages of gateway group summaries.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListGatewaysRequest {
  /**
   * @public
   * <p>The gateway group ARN for which to list gateways.</p>
   */
  GatewayGroupArn?: string;

  /**
   * @public
   * <p>The token used to paginate though multiple pages of gateway summaries.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of gateway summaries to return. The default is 50.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>The summary of a gateway.</p>
 */
export interface GatewaySummary {
  /**
   * @public
   * <p>The ARN of the gateway.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The name of the gateway.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The description of the gateway.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The ARN of the gateway group that the gateway is associated to.</p>
   */
  GatewayGroupArn?: string;

  /**
   * @public
   * <p>The software version of the gateway. The gateway automatically updates its software
   *          version during normal operation.</p>
   */
  SoftwareVersion?: string;
}

/**
 * @public
 */
export interface ListGatewaysResponse {
  /**
   * @public
   * <p>The gateways in the list.</p>
   */
  Gateways?: GatewaySummary[];

  /**
   * @public
   * <p>The token used to paginate though multiple pages of gateway summaries.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const EnablementTypeFilter = {
  ENABLED: "ENABLED",
  PENDING: "PENDING",
} as const;

/**
 * @public
 */
export type EnablementTypeFilter = (typeof EnablementTypeFilter)[keyof typeof EnablementTypeFilter];

/**
 * @public
 * @enum
 */
export const SkillTypeFilter = {
  ALL: "ALL",
  PRIVATE: "PRIVATE",
  PUBLIC: "PUBLIC",
} as const;

/**
 * @public
 */
export type SkillTypeFilter = (typeof SkillTypeFilter)[keyof typeof SkillTypeFilter];

/**
 * @public
 */
export interface ListSkillsRequest {
  /**
   * @public
   * <p>The ARN of the skill group for which to list enabled skills.</p>
   */
  SkillGroupArn?: string;

  /**
   * @public
   * <p>Whether the skill is enabled under the user's account.</p>
   */
  EnablementType?: EnablementTypeFilter;

  /**
   * @public
   * <p>Whether the skill is publicly available or is a private skill.</p>
   */
  SkillType?: SkillTypeFilter;

  /**
   * @public
   * <p>An optional token returned from a prior request. Use this token for pagination of
   *          results from this action. If this parameter is specified, the response includes only
   *          results beyond the token, up to the value specified by <code>MaxResults</code>.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to include in the response. If more results exist than
   *          the specified <code>MaxResults</code> value, a token is included in the response so that
   *          the remaining results can be retrieved.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * @enum
 */
export const EnablementType = {
  ENABLED: "ENABLED",
  PENDING: "PENDING",
} as const;

/**
 * @public
 */
export type EnablementType = (typeof EnablementType)[keyof typeof EnablementType];

/**
 * @public
 * @enum
 */
export const SkillType = {
  PRIVATE: "PRIVATE",
  PUBLIC: "PUBLIC",
} as const;

/**
 * @public
 */
export type SkillType = (typeof SkillType)[keyof typeof SkillType];

/**
 * @public
 * <p>The summary of skills.</p>
 */
export interface SkillSummary {
  /**
   * @public
   * <p>The ARN of the skill summary.</p>
   */
  SkillId?: string;

  /**
   * @public
   * <p>The name of the skill.</p>
   */
  SkillName?: string;

  /**
   * @public
   * <p>Linking support for a skill.</p>
   */
  SupportsLinking?: boolean;

  /**
   * @public
   * <p>Whether the skill is enabled under the user's account, or if it requires linking to be
   *          used.</p>
   */
  EnablementType?: EnablementType;

  /**
   * @public
   * <p>Whether the skill is publicly available or is a private skill.</p>
   */
  SkillType?: SkillType;
}

/**
 * @public
 */
export interface ListSkillsResponse {
  /**
   * @public
   * <p>The list of enabled skills requested. Required.</p>
   */
  SkillSummaries?: SkillSummary[];

  /**
   * @public
   * <p>The token returned to indicate that there is more data available.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListSkillsStoreCategoriesRequest {
  /**
   * @public
   * <p>The tokens used for pagination.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of categories returned, per paginated calls.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>The skill store category that is shown. Alexa skills are assigned a specific skill
 *          category during creation, such as News, Social, and Sports.</p>
 */
export interface Category {
  /**
   * @public
   * <p>The ID of the skill store category.</p>
   */
  CategoryId?: number;

  /**
   * @public
   * <p>The name of the skill store category.</p>
   */
  CategoryName?: string;
}

/**
 * @public
 */
export interface ListSkillsStoreCategoriesResponse {
  /**
   * @public
   * <p>The list of categories.</p>
   */
  CategoryList?: Category[];

  /**
   * @public
   * <p>The tokens used for pagination.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListSkillsStoreSkillsByCategoryRequest {
  /**
   * @public
   * <p>The category ID for which the skills are being retrieved from the skill
   *          store.</p>
   */
  CategoryId: number | undefined;

  /**
   * @public
   * <p>The tokens used for pagination.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of skills returned per paginated calls.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>The details about the developer that published the skill.</p>
 */
export interface DeveloperInfo {
  /**
   * @public
   * <p>The name of the developer.</p>
   */
  DeveloperName?: string;

  /**
   * @public
   * <p>The URL of the privacy policy.</p>
   */
  PrivacyPolicy?: string;

  /**
   * @public
   * <p>The email of the developer.</p>
   */
  Email?: string;

  /**
   * @public
   * <p>The website of the developer.</p>
   */
  Url?: string;
}

/**
 * @public
 * <p>Granular information about the skill.</p>
 */
export interface SkillDetails {
  /**
   * @public
   * <p>The description of the product.</p>
   */
  ProductDescription?: string;

  /**
   * @public
   * <p>The phrase used to trigger the skill.</p>
   */
  InvocationPhrase?: string;

  /**
   * @public
   * <p>The date when the skill was released.</p>
   */
  ReleaseDate?: string;

  /**
   * @public
   * <p>The URL of the end user license agreement.</p>
   */
  EndUserLicenseAgreement?: string;

  /**
   * @public
   * <p>The generic keywords associated with the skill that can be used to find a
   *          skill.</p>
   */
  GenericKeywords?: string[];

  /**
   * @public
   * <p>The details about what the skill supports organized as bullet points.</p>
   */
  BulletPoints?: string[];

  /**
   * @public
   * <p>The updates added in bullet points.</p>
   */
  NewInThisVersionBulletPoints?: string[];

  /**
   * @public
   * <p>The types of skills.</p>
   */
  SkillTypes?: string[];

  /**
   * @public
   * <p>
   *             <i>This member has been deprecated.</i>
   *          </p>
   *          <p>The list of reviews for the skill, including Key and Value pair.</p>
   */
  Reviews?: Record<string, string>;

  /**
   * @public
   * <p>The details about the developer that published the skill.</p>
   */
  DeveloperInfo?: DeveloperInfo;
}

/**
 * @public
 * <p>The detailed information about an Alexa skill.</p>
 */
export interface SkillsStoreSkill {
  /**
   * @public
   * <p>The ARN of the skill.</p>
   */
  SkillId?: string;

  /**
   * @public
   * <p>The name of the skill.</p>
   */
  SkillName?: string;

  /**
   * @public
   * <p>Short description about the skill.</p>
   */
  ShortDescription?: string;

  /**
   * @public
   * <p>The URL where the skill icon resides.</p>
   */
  IconUrl?: string;

  /**
   * @public
   * <p>Sample utterances that interact with the skill.</p>
   */
  SampleUtterances?: string[];

  /**
   * @public
   * <p>Information about the skill.</p>
   */
  SkillDetails?: SkillDetails;

  /**
   * @public
   * <p>Linking support for a skill.</p>
   */
  SupportsLinking?: boolean;
}

/**
 * @public
 */
export interface ListSkillsStoreSkillsByCategoryResponse {
  /**
   * @public
   * <p>The skill store skills.</p>
   */
  SkillsStoreSkills?: SkillsStoreSkill[];

  /**
   * @public
   * <p>The tokens used for pagination.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListSmartHomeAppliancesRequest {
  /**
   * @public
   * <p>The room that the appliances are associated with.</p>
   */
  RoomArn: string | undefined;

  /**
   * @public
   * <p>The maximum number of appliances to be returned, per paginated calls.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The tokens used for pagination.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>A smart home appliance that can connect to a central system. Any domestic device can be
 *          a smart appliance. </p>
 */
export interface SmartHomeAppliance {
  /**
   * @public
   * <p>The friendly name of the smart home appliance.</p>
   */
  FriendlyName?: string;

  /**
   * @public
   * <p>The description of the smart home appliance.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The name of the manufacturer of the smart home appliance.</p>
   */
  ManufacturerName?: string;
}

/**
 * @public
 */
export interface ListSmartHomeAppliancesResponse {
  /**
   * @public
   * <p>The smart home appliances.</p>
   */
  SmartHomeAppliances?: SmartHomeAppliance[];

  /**
   * @public
   * <p>The tokens used for pagination.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsRequest {
  /**
   * @public
   * <p>The ARN of the specified resource for which to list tags.</p>
   */
  Arn: string | undefined;

  /**
   * @public
   * <p>An optional token returned from a prior request. Use this token for pagination of
   *          results from this action. If this parameter is specified, the response includes only
   *          results beyond the token, up to the value specified by <code>MaxResults</code>. </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to include in the response. If more results exist than
   *          the specified <code>MaxResults</code> value, a token is included in the response so that
   *          the remaining results can be retrieved.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListTagsResponse {
  /**
   * @public
   * <p>The tags requested for the specified resource.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The token returned to indicate that there is more data available.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface PutConferencePreferenceRequest {
  /**
   * @public
   * <p>The conference preference of a specific conference provider.</p>
   */
  ConferencePreference: ConferencePreference | undefined;
}

/**
 * @public
 */
export interface PutConferencePreferenceResponse {}

/**
 * @public
 */
export interface PutInvitationConfigurationRequest {
  /**
   * @public
   * <p>The name of the organization sending the enrollment invite to a user.</p>
   */
  OrganizationName: string | undefined;

  /**
   * @public
   * <p>The email ID of the organization or individual contact that the enrolled user can use.
   *       </p>
   */
  ContactEmail?: string;

  /**
   * @public
   * <p>The list of private skill IDs that you want to recommend to the user to enable in the
   *          invitation.</p>
   */
  PrivateSkillIds?: string[];
}

/**
 * @public
 */
export interface PutInvitationConfigurationResponse {}

/**
 * @public
 */
export interface PutRoomSkillParameterRequest {
  /**
   * @public
   * <p>The ARN of the room associated with the room skill parameter. Required.</p>
   */
  RoomArn?: string;

  /**
   * @public
   * <p>The ARN of the skill associated with the room skill parameter. Required.</p>
   */
  SkillId: string | undefined;

  /**
   * @public
   * <p>The updated room skill parameter. Required.</p>
   */
  RoomSkillParameter: RoomSkillParameter | undefined;
}

/**
 * @public
 */
export interface PutRoomSkillParameterResponse {}

/**
 * @public
 */
export interface PutSkillAuthorizationRequest {
  /**
   * @public
   * <p>The authorization result specific to OAUTH code grant output. "Code” must be
   *          populated in the AuthorizationResult map to establish the authorization.</p>
   */
  AuthorizationResult: Record<string, string> | undefined;

  /**
   * @public
   * <p>The unique identifier of a skill.</p>
   */
  SkillId: string | undefined;

  /**
   * @public
   * <p>The room that the skill is authorized for.</p>
   */
  RoomArn?: string;
}

/**
 * @public
 */
export interface PutSkillAuthorizationResponse {}

/**
 * @public
 * <p>The caller has no permissions to operate on the resource involved in the API call.</p>
 */
export class UnauthorizedException extends __BaseException {
  readonly name: "UnauthorizedException" = "UnauthorizedException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnauthorizedException, __BaseException>) {
    super({
      name: "UnauthorizedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnauthorizedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The device is in an invalid state.</p>
 */
export class InvalidDeviceException extends __BaseException {
  readonly name: "InvalidDeviceException" = "InvalidDeviceException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDeviceException, __BaseException>) {
    super({
      name: "InvalidDeviceException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDeviceException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface RegisterAVSDeviceRequest {
  /**
   * @public
   * <p>The client ID of the OEM used for code-based linking authorization on an AVS
   *          device.</p>
   */
  ClientId: string | undefined;

  /**
   * @public
   * <p>The code that is obtained after your AVS device has made a POST request to LWA as a
   *          part of the Device Authorization Request component of the OAuth code-based linking
   *          specification.</p>
   */
  UserCode: string | undefined;

  /**
   * @public
   * <p>The product ID used to identify your AVS device during authorization.</p>
   */
  ProductId: string | undefined;

  /**
   * @public
   * <p>The key generated by the OEM that uniquely identifies a specified instance of your
   *          AVS device.</p>
   */
  DeviceSerialNumber?: string;

  /**
   * @public
   * <p>The device type ID for your AVS device generated by Amazon when the OEM creates a new
   *          product on Amazon's Developer Console.</p>
   */
  AmazonId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the room with which to associate your AVS device.</p>
   */
  RoomArn?: string;

  /**
   * @public
   * <p>The tags to be added to the specified resource. Do not provide system tags.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface RegisterAVSDeviceResponse {
  /**
   * @public
   * <p>The ARN of the device.</p>
   */
  DeviceArn?: string;
}

/**
 * @public
 */
export interface RejectSkillRequest {
  /**
   * @public
   * <p>The unique identifier of the skill.</p>
   */
  SkillId: string | undefined;
}

/**
 * @public
 */
export interface RejectSkillResponse {}

/**
 * @public
 */
export interface ResolveRoomRequest {
  /**
   * @public
   * <p>The ARN of the user. Required.</p>
   */
  UserId: string | undefined;

  /**
   * @public
   * <p>The ARN of the skill that was requested. Required.</p>
   */
  SkillId: string | undefined;
}

/**
 * @public
 */
export interface ResolveRoomResponse {
  /**
   * @public
   * <p>The ARN of the room from which the skill request was invoked.</p>
   */
  RoomArn?: string;

  /**
   * @public
   * <p>The name of the room from which the skill request was invoked.</p>
   */
  RoomName?: string;

  /**
   * @public
   * <p>Response to get the room profile request. Required.</p>
   */
  RoomSkillParameters?: RoomSkillParameter[];
}

/**
 * @public
 */
export interface RevokeInvitationRequest {
  /**
   * @public
   * <p>The ARN of the user for whom to revoke an enrollment invitation. Required.</p>
   */
  UserArn?: string;

  /**
   * @public
   * <p>The ARN of the enrollment invitation to revoke. Required.</p>
   */
  EnrollmentId?: string;
}

/**
 * @public
 */
export interface RevokeInvitationResponse {}

/**
 * @public
 * <p>A filter name and value pair that is used to return a more specific list of results.
 *          Filters can be used to match a set of resources by various criteria.</p>
 */
export interface Filter {
  /**
   * @public
   * <p>The key of a filter.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>The values of a filter.</p>
   */
  Values: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const SortValue = {
  ASC: "ASC",
  DESC: "DESC",
} as const;

/**
 * @public
 */
export type SortValue = (typeof SortValue)[keyof typeof SortValue];

/**
 * @public
 * <p>An object representing a sort criteria. </p>
 */
export interface Sort {
  /**
   * @public
   * <p>The sort key of a sort object.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>The sort value of a sort object.</p>
   */
  Value: SortValue | undefined;
}

/**
 * @public
 */
export interface SearchAddressBooksRequest {
  /**
   * @public
   * <p>The filters to use to list a specified set of address books. The supported filter key
   *          is AddressBookName.</p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The sort order to use in listing the specified set of address books. The supported
   *          sort key is AddressBookName.</p>
   */
  SortCriteria?: Sort[];

  /**
   * @public
   * <p>An optional token returned from a prior request. Use this token for pagination of
   *          results from this action. If this parameter is specified, the response only includes
   *          results beyond the token, up to the value specified by MaxResults.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to include in the response. If more results exist than
   *          the specified MaxResults value, a token is included in the response so that the remaining
   *          results can be retrieved.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface SearchAddressBooksResponse {
  /**
   * @public
   * <p>The address books that meet the specified set of filter criteria, in sort
   *          order.</p>
   */
  AddressBooks?: AddressBookData[];

  /**
   * @public
   * <p>The token returned to indicate that there is more data available.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The total number of address books returned.</p>
   */
  TotalCount?: number;
}

/**
 * @public
 */
export interface SearchContactsRequest {
  /**
   * @public
   * <p>The filters to use to list a specified set of address books. The supported filter
   *          keys are DisplayName, FirstName, LastName, and AddressBookArns.</p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The sort order to use in listing the specified set of contacts. The supported sort
   *          keys are DisplayName, FirstName, and LastName.</p>
   */
  SortCriteria?: Sort[];

  /**
   * @public
   * <p>An optional token returned from a prior request. Use this token for pagination of
   *          results from this action. If this parameter is specified, the response only includes
   *          results beyond the token, up to the value specified by MaxResults.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to include in the response. If more results exist than
   *          the specified MaxResults value, a token is included in the response so that the remaining
   *          results can be retrieved.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Information related to a contact.</p>
 */
export interface ContactData {
  /**
   * @public
   * <p>The ARN of the contact.</p>
   */
  ContactArn?: string;

  /**
   * @public
   * <p>The name of the contact to display on the console.</p>
   */
  DisplayName?: string;

  /**
   * @public
   * <p>The first name of the contact, used to call the contact on the device.</p>
   */
  FirstName?: string;

  /**
   * @public
   * <p>The last name of the contact, used to call the contact on the device.</p>
   */
  LastName?: string;

  /**
   * @public
   * <p>The phone number of the contact. The phone number type defaults to WORK. You can
   *          specify PhoneNumber or PhoneNumbers. We recommend that you use PhoneNumbers, which lets you
   *          specify the phone number type and multiple numbers.</p>
   */
  PhoneNumber?: string;

  /**
   * @public
   * <p>The list of phone numbers for the contact.</p>
   */
  PhoneNumbers?: PhoneNumber[];

  /**
   * @public
   * <p>The list of SIP addresses for the contact.</p>
   */
  SipAddresses?: SipAddress[];
}

/**
 * @public
 */
export interface SearchContactsResponse {
  /**
   * @public
   * <p>The contacts that meet the specified set of filter criteria, in sort order.</p>
   */
  Contacts?: ContactData[];

  /**
   * @public
   * <p>The token returned to indicate that there is more data available.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The total number of contacts returned.</p>
   */
  TotalCount?: number;
}

/**
 * @public
 */
export interface SearchDevicesRequest {
  /**
   * @public
   * <p>An optional token returned from a prior request. Use this token for pagination of
   *          results from this action. If this parameter is specified, the response includes only
   *          results beyond the token, up to the value specified by <code>MaxResults</code>.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to include in the response. If more results exist than
   *          the specified <code>MaxResults</code> value, a token is included in the response so that
   *          the remaining results can be retrieved.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The filters to use to list a specified set of devices. Supported filter keys are
   *          DeviceName, DeviceStatus, DeviceStatusDetailCode, RoomName, DeviceType, DeviceSerialNumber,
   *          UnassociatedOnly, ConnectionStatus (ONLINE and OFFLINE), NetworkProfileName,
   *          NetworkProfileArn, Feature, and FailureCode.</p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The sort order to use in listing the specified set of devices. Supported sort keys
   *          are DeviceName, DeviceStatus, RoomName, DeviceType, DeviceSerialNumber, ConnectionStatus,
   *          NetworkProfileName, NetworkProfileArn, Feature, and FailureCode.</p>
   */
  SortCriteria?: Sort[];
}

/**
 * @public
 * <p>Device attributes.</p>
 */
export interface DeviceData {
  /**
   * @public
   * <p>The ARN of a device.</p>
   */
  DeviceArn?: string;

  /**
   * @public
   * <p>The serial number of a device.</p>
   */
  DeviceSerialNumber?: string;

  /**
   * @public
   * <p>The type of a device.</p>
   */
  DeviceType?: string;

  /**
   * @public
   * <p>The name of a device.</p>
   */
  DeviceName?: string;

  /**
   * @public
   * <p>The software version of a device.</p>
   */
  SoftwareVersion?: string;

  /**
   * @public
   * <p>The MAC address of a device.</p>
   */
  MacAddress?: string;

  /**
   * @public
   * <p>The status of a device.</p>
   */
  DeviceStatus?: DeviceStatus;

  /**
   * @public
   * <p>The ARN of the network profile associated with a device.</p>
   */
  NetworkProfileArn?: string;

  /**
   * @public
   * <p>The name of the network profile associated with a device.</p>
   */
  NetworkProfileName?: string;

  /**
   * @public
   * <p>The room ARN associated with a device.</p>
   */
  RoomArn?: string;

  /**
   * @public
   * <p>The name of the room associated with a device.</p>
   */
  RoomName?: string;

  /**
   * @public
   * <p>Detailed information about a device's status.</p>
   */
  DeviceStatusInfo?: DeviceStatusInfo;

  /**
   * @public
   * <p>The time (in epoch) when the device data was created.</p>
   */
  CreatedTime?: Date;
}

/**
 * @public
 */
export interface SearchDevicesResponse {
  /**
   * @public
   * <p>The devices that meet the specified set of filter criteria, in sort order.</p>
   */
  Devices?: DeviceData[];

  /**
   * @public
   * <p>The token returned to indicate that there is more data available.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The total number of devices returned.</p>
   */
  TotalCount?: number;
}

/**
 * @public
 */
export interface SearchNetworkProfilesRequest {
  /**
   * @public
   * <p>An optional token returned from a prior request. Use this token for pagination of
   *          results from this action. If this parameter is specified, the response includes only
   *          results beyond the token, up to the value specified by MaxResults. </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to include in the response. If more results exist than the
   *          specified MaxResults value, a token is included in the response so that the remaining
   *          results can be retrieved. </p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The filters to use to list a specified set of network profiles. Valid filters are
   *          NetworkProfileName, Ssid, and SecurityType.</p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The sort order to use to list the specified set of network profiles. Valid sort criteria
   *          includes NetworkProfileName, Ssid, and SecurityType.</p>
   */
  SortCriteria?: Sort[];
}

/**
 * @public
 * <p>The data associated with a network profile.</p>
 */
export interface NetworkProfileData {
  /**
   * @public
   * <p>The ARN of the network profile associated with a device.</p>
   */
  NetworkProfileArn?: string;

  /**
   * @public
   * <p>The name of the network profile associated with a device.</p>
   */
  NetworkProfileName?: string;

  /**
   * @public
   * <p>Detailed information about a device's network profile.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The SSID of the Wi-Fi network.</p>
   */
  Ssid?: string;

  /**
   * @public
   * <p>The security type of the Wi-Fi network. This can be WPA2_ENTERPRISE, WPA2_PSK, WPA_PSK,
   *          WEP, or OPEN.</p>
   */
  SecurityType?: NetworkSecurityType;

  /**
   * @public
   * <p>The authentication standard that is used in the EAP framework. Currently, EAP_TLS is
   *          supported.</p>
   */
  EapMethod?: NetworkEapMethod;

  /**
   * @public
   * <p>The ARN of the Private Certificate Authority (PCA) created in AWS Certificate Manager
   *          (ACM). This is used to issue certificates to the devices.</p>
   */
  CertificateAuthorityArn?: string;
}

/**
 * @public
 */
export interface SearchNetworkProfilesResponse {
  /**
   * @public
   * <p>The network profiles that meet the specified set of filter criteria, in sort order. It
   *          is a list of NetworkProfileData objects. </p>
   */
  NetworkProfiles?: NetworkProfileData[];

  /**
   * @public
   * <p>An optional token returned from a prior request. Use this token for pagination of
   *          results from this action. If this parameter is specified, the response includes only
   *          results beyond the token, up to the value specified by MaxResults.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The total number of network profiles returned.</p>
   */
  TotalCount?: number;
}

/**
 * @public
 */
export interface SearchProfilesRequest {
  /**
   * @public
   * <p>An optional token returned from a prior request. Use this token for pagination of
   *          results from this action. If this parameter is specified, the response includes only
   *          results beyond the token, up to the value specified by <code>MaxResults</code>.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to include in the response. If more results exist than
   *          the specified <code>MaxResults</code> value, a token is included in the response so that
   *          the remaining results can be retrieved.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The filters to use to list a specified set of room profiles. Supported filter keys
   *          are ProfileName and Address. Required. </p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The sort order to use in listing the specified set of room profiles. Supported sort
   *          keys are ProfileName and Address.</p>
   */
  SortCriteria?: Sort[];
}

/**
 * @public
 * <p>The data of a room profile.</p>
 */
export interface ProfileData {
  /**
   * @public
   * <p>The ARN of a room profile.</p>
   */
  ProfileArn?: string;

  /**
   * @public
   * <p>The name of a room profile.</p>
   */
  ProfileName?: string;

  /**
   * @public
   * <p>Retrieves if the profile data is default or not.</p>
   */
  IsDefault?: boolean;

  /**
   * @public
   * <p>The address of a room profile.</p>
   */
  Address?: string;

  /**
   * @public
   * <p>The time zone of a room profile.</p>
   */
  Timezone?: string;

  /**
   * @public
   * <p>The distance unit of a room profile.</p>
   */
  DistanceUnit?: DistanceUnit;

  /**
   * @public
   * <p>The temperature unit of a room profile.</p>
   */
  TemperatureUnit?: TemperatureUnit;

  /**
   * @public
   * <p>The wake word of a room profile.</p>
   */
  WakeWord?: WakeWord;

  /**
   * @public
   * <p>The locale of a room profile. (This is currently available only to a limited preview
   *          audience.)</p>
   */
  Locale?: string;
}

/**
 * @public
 */
export interface SearchProfilesResponse {
  /**
   * @public
   * <p>The profiles that meet the specified set of filter criteria, in sort order.</p>
   */
  Profiles?: ProfileData[];

  /**
   * @public
   * <p>The token returned to indicate that there is more data available.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The total number of room profiles returned.</p>
   */
  TotalCount?: number;
}

/**
 * @public
 */
export interface SearchRoomsRequest {
  /**
   * @public
   * <p>An optional token returned from a prior request. Use this token for pagination of
   *          results from this action. If this parameter is specified, the response includes only
   *          results beyond the token, up to the value specified by <code>MaxResults</code>.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to include in the response. If more results exist than
   *          the specified <code>MaxResults</code> value, a token is included in the response so that
   *          the remaining results can be retrieved. </p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The filters to use to list a specified set of rooms. The supported filter keys are
   *          RoomName and ProfileName.</p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The sort order to use in listing the specified set of rooms. The supported sort keys
   *          are RoomName and ProfileName.</p>
   */
  SortCriteria?: Sort[];
}

/**
 * @public
 * <p>The data of a room.</p>
 */
export interface RoomData {
  /**
   * @public
   * <p>The ARN of a room.</p>
   */
  RoomArn?: string;

  /**
   * @public
   * <p>The name of a room.</p>
   */
  RoomName?: string;

  /**
   * @public
   * <p>The description of a room.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The provider calendar ARN of a room.</p>
   */
  ProviderCalendarId?: string;

  /**
   * @public
   * <p>The profile ARN of a room.</p>
   */
  ProfileArn?: string;

  /**
   * @public
   * <p>The profile name of a room.</p>
   */
  ProfileName?: string;
}

/**
 * @public
 */
export interface SearchRoomsResponse {
  /**
   * @public
   * <p>The rooms that meet the specified set of filter criteria, in sort order.</p>
   */
  Rooms?: RoomData[];

  /**
   * @public
   * <p>The token returned to indicate that there is more data available.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The total number of rooms returned.</p>
   */
  TotalCount?: number;
}

/**
 * @public
 */
export interface SearchSkillGroupsRequest {
  /**
   * @public
   * <p>An optional token returned from a prior request. Use this token for pagination of
   *          results from this action. If this parameter is specified, the response includes only
   *          results beyond the token, up to the value specified by <code>MaxResults</code>.
   *          Required.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to include in the response. If more results exist than
   *          the specified <code>MaxResults</code> value, a token is included in the response so that
   *          the remaining results can be retrieved. </p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The filters to use to list a specified set of skill groups. The supported filter key
   *          is SkillGroupName. </p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The sort order to use in listing the specified set of skill groups. The supported
   *          sort key is SkillGroupName. </p>
   */
  SortCriteria?: Sort[];
}

/**
 * @public
 * <p>The attributes of a skill group.</p>
 */
export interface SkillGroupData {
  /**
   * @public
   * <p>The skill group ARN of a skill group.</p>
   */
  SkillGroupArn?: string;

  /**
   * @public
   * <p>The skill group name of a skill group.</p>
   */
  SkillGroupName?: string;

  /**
   * @public
   * <p>The description of a skill group.</p>
   */
  Description?: string;
}

/**
 * @public
 */
export interface SearchSkillGroupsResponse {
  /**
   * @public
   * <p>The skill groups that meet the filter criteria, in sort order.</p>
   */
  SkillGroups?: SkillGroupData[];

  /**
   * @public
   * <p>The token returned to indicate that there is more data available.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The total number of skill groups returned.</p>
   */
  TotalCount?: number;
}

/**
 * @public
 */
export interface SearchUsersRequest {
  /**
   * @public
   * <p>An optional token returned from a prior request. Use this token for pagination of
   *          results from this action. If this parameter is specified, the response includes only
   *          results beyond the token, up to the value specified by <code>MaxResults</code>.
   *          Required.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to include in the response. If more results exist than
   *          the specified <code>MaxResults</code> value, a token is included in the response so that
   *          the remaining results can be retrieved. Required.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The filters to use for listing a specific set of users. Required. Supported filter
   *          keys are UserId, FirstName, LastName, Email, and EnrollmentStatus.</p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The sort order to use in listing the filtered set of users. Required. Supported sort
   *          keys are UserId, FirstName, LastName, Email, and EnrollmentStatus.</p>
   */
  SortCriteria?: Sort[];
}

/**
 * @public
 * @enum
 */
export const EnrollmentStatus = {
  DEREGISTERING: "DEREGISTERING",
  DISASSOCIATING: "DISASSOCIATING",
  INITIALIZED: "INITIALIZED",
  PENDING: "PENDING",
  REGISTERED: "REGISTERED",
} as const;

/**
 * @public
 */
export type EnrollmentStatus = (typeof EnrollmentStatus)[keyof typeof EnrollmentStatus];

/**
 * @public
 * <p>Information related to a user.</p>
 */
export interface UserData {
  /**
   * @public
   * <p>The ARN of a user.</p>
   */
  UserArn?: string;

  /**
   * @public
   * <p>The first name of a user.</p>
   */
  FirstName?: string;

  /**
   * @public
   * <p>The last name of a user.</p>
   */
  LastName?: string;

  /**
   * @public
   * <p>The email of a user.</p>
   */
  Email?: string;

  /**
   * @public
   * <p>The enrollment status of a user.</p>
   */
  EnrollmentStatus?: EnrollmentStatus;

  /**
   * @public
   * <p>The enrollment ARN of a user.</p>
   */
  EnrollmentId?: string;
}

/**
 * @public
 */
export interface SearchUsersResponse {
  /**
   * @public
   * <p>The users that meet the specified set of filter criteria, in sort order.</p>
   */
  Users?: UserData[];

  /**
   * @public
   * <p>The token returned to indicate that there is more data available.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The total number of users returned.</p>
   */
  TotalCount?: number;
}

/**
 * @public
 * @enum
 */
export const Locale = {
  en_US: "en-US",
} as const;

/**
 * @public
 */
export type Locale = (typeof Locale)[keyof typeof Locale];

/**
 * @public
 * <p>The audio message. There is a 1 MB limit on the audio file input and the only supported
 *          format is MP3. To convert your MP3 audio files to an Alexa-friendly,  </p>
 *          <p>required codec version (MPEG version 2) and bit rate (48 kbps), you might use converter
 *          software. One option for this is a command-line tool, FFmpeg. For more information, see
 *             <a href="https://www.ffmpeg.org/">FFmpeg</a>. The following command converts the
 *          provided <input-file> to an MP3 file that is played in the announcement:</p>
 *          <p>
 *             <code>ffmpeg -i <input-file> -ac 2 -codec:a libmp3lame -b:a 48k -ar 16000
 *             <output-file.mp3></code>
 *          </p>
 */
export interface Audio {
  /**
   * @public
   * <p>The locale of the audio message. Currently, en-US is supported.</p>
   */
  Locale: Locale | undefined;

  /**
   * @public
   * <p>The location of the audio file. Currently, S3 URLs are supported. Only S3 locations
   *          comprised of safe characters are valid. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingMetadata.html#Safe%20Characters">Safe Characters</a>.</p>
   */
  Location: string | undefined;
}

/**
 * @public
 * <p>The SSML message. For more information, see <a href="https://developer.amazon.com/docs/custom-skills/speech-synthesis-markup-language-ssml-reference.html">SSML Reference</a>.</p>
 */
export interface Ssml {
  /**
   * @public
   * <p>The locale of the SSML message. Currently, en-US is supported.</p>
   */
  Locale: Locale | undefined;

  /**
   * @public
   * <p>The value of the SSML message in the correct SSML format. The audio tag is not supported.</p>
   */
  Value: string | undefined;
}

/**
 * @public
 * <p>The text message.</p>
 */
export interface Text {
  /**
   * @public
   * <p>The locale of the text message. Currently, en-US is supported.</p>
   */
  Locale: Locale | undefined;

  /**
   * @public
   * <p>The value of the text message.</p>
   */
  Value: string | undefined;
}

/**
 * @public
 * <p>The content definition. This can contain only one text, SSML, or audio list
 *          object.</p>
 */
export interface Content {
  /**
   * @public
   * <p>The list of text messages.</p>
   */
  TextList?: Text[];

  /**
   * @public
   * <p>The list of SSML messages.</p>
   */
  SsmlList?: Ssml[];

  /**
   * @public
   * <p>The list of audio messages.</p>
   */
  AudioList?: Audio[];
}

/**
 * @public
 */
export interface SendAnnouncementRequest {
  /**
   * @public
   * <p>The filters to use to send an announcement to a specified list of rooms. The supported filter keys are RoomName, ProfileName, RoomArn, and ProfileArn. To send to all rooms, specify an empty RoomFilters list.</p>
   */
  RoomFilters: Filter[] | undefined;

  /**
   * @public
   * <p>The announcement content. This can contain only one of the three possible announcement types (text, SSML or audio).</p>
   */
  Content: Content | undefined;

  /**
   * @public
   * <p>The time to live for an announcement. Default is 300. If delivery doesn't occur within this time, the
   *          announcement is not delivered.</p>
   */
  TimeToLiveInSeconds?: number;

  /**
   * @public
   * <p>The unique, user-specified identifier for the request that ensures idempotency.</p>
   */
  ClientRequestToken?: string;
}

/**
 * @public
 */
export interface SendAnnouncementResponse {
  /**
   * @public
   * <p>The identifier of the announcement.</p>
   */
  AnnouncementArn?: string;
}

/**
 * @public
 * <p>The attempt to update a user is invalid due to the user's current status.</p>
 */
export class InvalidUserStatusException extends __BaseException {
  readonly name: "InvalidUserStatusException" = "InvalidUserStatusException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidUserStatusException, __BaseException>) {
    super({
      name: "InvalidUserStatusException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidUserStatusException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface SendInvitationRequest {
  /**
   * @public
   * <p>The ARN of the user to whom to send an invitation. Required.</p>
   */
  UserArn?: string;
}

/**
 * @public
 */
export interface SendInvitationResponse {}

/**
 * @public
 */
export interface StartDeviceSyncRequest {
  /**
   * @public
   * <p>The ARN of the room with which the device to sync is associated. Required.</p>
   */
  RoomArn?: string;

  /**
   * @public
   * <p>The ARN of the device to sync. Required.</p>
   */
  DeviceArn?: string;

  /**
   * @public
   * <p>Request structure to start the device sync. Required.</p>
   */
  Features: Feature[] | undefined;
}

/**
 * @public
 */
export interface StartDeviceSyncResponse {}

/**
 * @public
 */
export interface StartSmartHomeApplianceDiscoveryRequest {
  /**
   * @public
   * <p>The room where smart home appliance discovery was initiated.</p>
   */
  RoomArn: string | undefined;
}

/**
 * @public
 */
export interface StartSmartHomeApplianceDiscoveryResponse {}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The ARN of the resource to which to add metadata tags. Required. </p>
   */
  Arn: string | undefined;

  /**
   * @public
   * <p>The tags to be added to the specified resource. Do not provide system tags. Required.
   *       </p>
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * @public
   * <p>The ARN of the resource from which to remove metadata tags. Required. </p>
   */
  Arn: string | undefined;

  /**
   * @public
   * <p>The tags to be removed from the specified resource. Do not provide system tags.
   *          Required. </p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 * <p>The name sent in the request is already in use.</p>
 */
export class NameInUseException extends __BaseException {
  readonly name: "NameInUseException" = "NameInUseException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NameInUseException, __BaseException>) {
    super({
      name: "NameInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NameInUseException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface UpdateAddressBookRequest {
  /**
   * @public
   * <p>The ARN of the room to update.</p>
   */
  AddressBookArn: string | undefined;

  /**
   * @public
   * <p>The updated name of the room.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The updated description of the room.</p>
   */
  Description?: string;
}

/**
 * @public
 */
export interface UpdateAddressBookResponse {}

/**
 * @public
 */
export interface UpdateBusinessReportScheduleRequest {
  /**
   * @public
   * <p>The ARN of the business report schedule.</p>
   */
  ScheduleArn: string | undefined;

  /**
   * @public
   * <p>The S3 location of the output reports.</p>
   */
  S3BucketName?: string;

  /**
   * @public
   * <p>The S3 key where the report is delivered.</p>
   */
  S3KeyPrefix?: string;

  /**
   * @public
   * <p>The format of the generated report (individual CSV files or zipped files of
   *          individual files).</p>
   */
  Format?: BusinessReportFormat;

  /**
   * @public
   * <p>The name identifier of the schedule.</p>
   */
  ScheduleName?: string;

  /**
   * @public
   * <p>The recurrence of the reports.</p>
   */
  Recurrence?: BusinessReportRecurrence;
}

/**
 * @public
 */
export interface UpdateBusinessReportScheduleResponse {}

/**
 * @public
 */
export interface UpdateConferenceProviderRequest {
  /**
   * @public
   * <p>The ARN of the conference provider.</p>
   */
  ConferenceProviderArn: string | undefined;

  /**
   * @public
   * <p>The type of the conference provider.</p>
   */
  ConferenceProviderType: ConferenceProviderType | undefined;

  /**
   * @public
   * <p>The IP endpoint and protocol for calling.</p>
   */
  IPDialIn?: IPDialIn;

  /**
   * @public
   * <p>The information for PSTN conferencing.</p>
   */
  PSTNDialIn?: PSTNDialIn;

  /**
   * @public
   * <p>The meeting settings for the conference provider.</p>
   */
  MeetingSetting: MeetingSetting | undefined;
}

/**
 * @public
 */
export interface UpdateConferenceProviderResponse {}

/**
 * @public
 */
export interface UpdateContactRequest {
  /**
   * @public
   * <p>The ARN of the contact to update.</p>
   */
  ContactArn: string | undefined;

  /**
   * @public
   * <p>The updated display name of the contact.</p>
   */
  DisplayName?: string;

  /**
   * @public
   * <p>The updated first name of the contact.</p>
   */
  FirstName?: string;

  /**
   * @public
   * <p>The updated last name of the contact.</p>
   */
  LastName?: string;

  /**
   * @public
   * <p>The updated phone number of the contact. The phone number type defaults to WORK. You
   *          can either specify PhoneNumber or PhoneNumbers. We recommend that you use PhoneNumbers,
   *          which lets you specify the phone number type and multiple numbers.</p>
   */
  PhoneNumber?: string;

  /**
   * @public
   * <p>The list of phone numbers for the contact.</p>
   */
  PhoneNumbers?: PhoneNumber[];

  /**
   * @public
   * <p>The list of SIP addresses for the contact.</p>
   */
  SipAddresses?: SipAddress[];
}

/**
 * @public
 */
export interface UpdateContactResponse {}

/**
 * @public
 */
export interface UpdateDeviceRequest {
  /**
   * @public
   * <p>The ARN of the device to update. Required.</p>
   */
  DeviceArn?: string;

  /**
   * @public
   * <p>The updated device name. Required.</p>
   */
  DeviceName?: string;
}

/**
 * @public
 */
export interface UpdateDeviceResponse {}

/**
 * @public
 */
export interface UpdateGatewayRequest {
  /**
   * @public
   * <p>The ARN of the gateway to update.</p>
   */
  GatewayArn: string | undefined;

  /**
   * @public
   * <p>The updated name of the gateway.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The updated description of the gateway.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The updated software version of the gateway. The gateway automatically updates its
   *          software version during normal operation.</p>
   */
  SoftwareVersion?: string;
}

/**
 * @public
 */
export interface UpdateGatewayResponse {}

/**
 * @public
 */
export interface UpdateGatewayGroupRequest {
  /**
   * @public
   * <p>The ARN of the gateway group to update.</p>
   */
  GatewayGroupArn: string | undefined;

  /**
   * @public
   * <p>The updated name of the gateway group.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The updated description of the gateway group.</p>
   */
  Description?: string;
}

/**
 * @public
 */
export interface UpdateGatewayGroupResponse {}

/**
 * @public
 */
export interface UpdateNetworkProfileRequest {
  /**
   * @public
   * <p>The ARN of the network profile associated with a device.</p>
   */
  NetworkProfileArn: string | undefined;

  /**
   * @public
   * <p>The name of the network profile associated with a device.</p>
   */
  NetworkProfileName?: string;

  /**
   * @public
   * <p>Detailed information about a device's network profile.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The current password of the Wi-Fi network.</p>
   */
  CurrentPassword?: string;

  /**
   * @public
   * <p>The next, or subsequent, password of the Wi-Fi network. This password is asynchronously
   *          transmitted to the device and is used when the password of the network changes to
   *          NextPassword. </p>
   */
  NextPassword?: string;

  /**
   * @public
   * <p>The ARN of the Private Certificate Authority (PCA) created in AWS Certificate Manager
   *          (ACM). This is used to issue certificates to the devices. </p>
   */
  CertificateAuthorityArn?: string;

  /**
   * @public
   * <p>The root certificate(s) of your authentication server that will be installed on your
   *          devices and used to trust your authentication server during EAP negotiation. </p>
   */
  TrustAnchors?: string[];
}

/**
 * @public
 */
export interface UpdateNetworkProfileResponse {}

/**
 * @public
 * <p>Settings for the end of meeting reminder feature that are applied to a room profile. The
 *          end of meeting reminder enables Alexa to remind users when a meeting is ending. </p>
 */
export interface UpdateEndOfMeetingReminder {
  /**
   * @public
   * <p>Updates settings for the end of meeting reminder feature that are applied to a room
   *          profile. The end of meeting reminder enables Alexa to remind users when a meeting is
   *          ending. </p>
   */
  ReminderAtMinutes?: number[];

  /**
   * @public
   * <p>The type of sound that users hear during the end of meeting reminder. </p>
   */
  ReminderType?: EndOfMeetingReminderType;

  /**
   * @public
   * <p>Whether an end of meeting reminder is enabled or not.</p>
   */
  Enabled?: boolean;
}

/**
 * @public
 * <p>Updates settings for the instant booking feature that are applied to a room profile. If
 *          instant booking is enabled, Alexa automatically reserves a room if it is free when a user
 *          joins a meeting with Alexa.</p>
 */
export interface UpdateInstantBooking {
  /**
   * @public
   * <p>Duration between 15 and 240 minutes at increments of 15 that determines how long to book
   *          an available room when a meeting is started with Alexa.</p>
   */
  DurationInMinutes?: number;

  /**
   * @public
   * <p>Whether instant booking is enabled or not.</p>
   */
  Enabled?: boolean;
}

/**
 * @public
 */
export interface UpdateProactiveJoin {
  EnabledByMotion: boolean | undefined;
}

/**
 * @public
 * <p>Updates settings for the require check in feature that are applied to a room profile. Require check in allows a meeting room’s Alexa or AVS device to prompt the user to check in; otherwise, the room will be released. </p>
 */
export interface UpdateRequireCheckIn {
  /**
   * @public
   * <p>Duration between 5 and 20 minutes to determine when to release the room if it's not checked into. </p>
   */
  ReleaseAfterMinutes?: number;

  /**
   * @public
   * <p>Whether require check in is enabled or not.</p>
   */
  Enabled?: boolean;
}

/**
 * @public
 * <p>Updates meeting room settings of a room profile.</p>
 */
export interface UpdateMeetingRoomConfiguration {
  /**
   * @public
   * <p>Whether room utilization metrics are enabled or not.</p>
   */
  RoomUtilizationMetricsEnabled?: boolean;

  /**
   * @public
   * <p>Settings for the end of meeting reminder feature that are applied to a room profile. The
   *          end of meeting reminder enables Alexa to remind users when a meeting is ending. </p>
   */
  EndOfMeetingReminder?: UpdateEndOfMeetingReminder;

  /**
   * @public
   * <p>Settings to automatically book an available room available for a configured duration
   *          when joining a meeting with Alexa.</p>
   */
  InstantBooking?: UpdateInstantBooking;

  /**
   * @public
   * <p>Settings for requiring a check in when a room is reserved. Alexa can cancel a room reservation if it's not checked into to make the room available for others. Users can check in by joining the meeting with Alexa or an AVS device, or by saying “Alexa, check in.” </p>
   */
  RequireCheckIn?: UpdateRequireCheckIn;

  ProactiveJoin?: UpdateProactiveJoin;
}

/**
 * @public
 */
export interface UpdateProfileRequest {
  /**
   * @public
   * <p>The ARN of the room profile to update. Required.</p>
   */
  ProfileArn?: string;

  /**
   * @public
   * <p>The updated name for the room profile.</p>
   */
  ProfileName?: string;

  /**
   * @public
   * <p>Sets the profile as default if selected. If this is missing, no update is done to the
   *          default status.</p>
   */
  IsDefault?: boolean;

  /**
   * @public
   * <p>The updated timezone for the room profile.</p>
   */
  Timezone?: string;

  /**
   * @public
   * <p>The updated address for the room profile.</p>
   */
  Address?: string;

  /**
   * @public
   * <p>The updated distance unit for the room profile.</p>
   */
  DistanceUnit?: DistanceUnit;

  /**
   * @public
   * <p>The updated temperature unit for the room profile.</p>
   */
  TemperatureUnit?: TemperatureUnit;

  /**
   * @public
   * <p>The updated wake word for the room profile.</p>
   */
  WakeWord?: WakeWord;

  /**
   * @public
   * <p>The updated locale for the room profile. (This is currently only available to a limited preview audience.)</p>
   */
  Locale?: string;

  /**
   * @public
   * <p>Whether the setup mode of the profile is enabled.</p>
   */
  SetupModeDisabled?: boolean;

  /**
   * @public
   * <p>The updated maximum volume limit for the room profile.</p>
   */
  MaxVolumeLimit?: number;

  /**
   * @public
   * <p>Whether the PSTN setting of the room profile is enabled.</p>
   */
  PSTNEnabled?: boolean;

  /**
   * @public
   * <p>Whether data retention of the profile is enabled.</p>
   */
  DataRetentionOptIn?: boolean;

  /**
   * @public
   * <p>The updated meeting room settings of a room profile.</p>
   */
  MeetingRoomConfiguration?: UpdateMeetingRoomConfiguration;
}

/**
 * @public
 */
export interface UpdateProfileResponse {}

/**
 * @public
 */
export interface UpdateRoomRequest {
  /**
   * @public
   * <p>The ARN of the room to update. </p>
   */
  RoomArn?: string;

  /**
   * @public
   * <p>The updated name for the room.</p>
   */
  RoomName?: string;

  /**
   * @public
   * <p>The updated description for the room.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The updated provider calendar ARN for the room.</p>
   */
  ProviderCalendarId?: string;

  /**
   * @public
   * <p>The updated profile ARN for the room.</p>
   */
  ProfileArn?: string;
}

/**
 * @public
 */
export interface UpdateRoomResponse {}

/**
 * @public
 */
export interface UpdateSkillGroupRequest {
  /**
   * @public
   * <p>The ARN of the skill group to update. </p>
   */
  SkillGroupArn?: string;

  /**
   * @public
   * <p>The updated name for the skill group.</p>
   */
  SkillGroupName?: string;

  /**
   * @public
   * <p>The updated description for the skill group.</p>
   */
  Description?: string;
}

/**
 * @public
 */
export interface UpdateSkillGroupResponse {}

/**
 * @internal
 */
export const PhoneNumberFilterSensitiveLog = (obj: PhoneNumber): any => ({
  ...obj,
  ...(obj.Number && { Number: SENSITIVE_STRING }),
  ...(obj.Type && { Type: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SipAddressFilterSensitiveLog = (obj: SipAddress): any => ({
  ...obj,
  ...(obj.Uri && { Uri: SENSITIVE_STRING }),
  ...(obj.Type && { Type: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateContactRequestFilterSensitiveLog = (obj: CreateContactRequest): any => ({
  ...obj,
  ...(obj.PhoneNumber && { PhoneNumber: SENSITIVE_STRING }),
  ...(obj.PhoneNumbers && { PhoneNumbers: obj.PhoneNumbers.map((item) => PhoneNumberFilterSensitiveLog(item)) }),
  ...(obj.SipAddresses && { SipAddresses: obj.SipAddresses.map((item) => SipAddressFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const CreateNetworkProfileRequestFilterSensitiveLog = (obj: CreateNetworkProfileRequest): any => ({
  ...obj,
  ...(obj.CurrentPassword && { CurrentPassword: SENSITIVE_STRING }),
  ...(obj.NextPassword && { NextPassword: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ContactFilterSensitiveLog = (obj: Contact): any => ({
  ...obj,
  ...(obj.PhoneNumber && { PhoneNumber: SENSITIVE_STRING }),
  ...(obj.PhoneNumbers && { PhoneNumbers: obj.PhoneNumbers.map((item) => PhoneNumberFilterSensitiveLog(item)) }),
  ...(obj.SipAddresses && { SipAddresses: obj.SipAddresses.map((item) => SipAddressFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const GetContactResponseFilterSensitiveLog = (obj: GetContactResponse): any => ({
  ...obj,
  ...(obj.Contact && { Contact: ContactFilterSensitiveLog(obj.Contact) }),
});

/**
 * @internal
 */
export const NetworkProfileFilterSensitiveLog = (obj: NetworkProfile): any => ({
  ...obj,
  ...(obj.CurrentPassword && { CurrentPassword: SENSITIVE_STRING }),
  ...(obj.NextPassword && { NextPassword: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetNetworkProfileResponseFilterSensitiveLog = (obj: GetNetworkProfileResponse): any => ({
  ...obj,
  ...(obj.NetworkProfile && { NetworkProfile: NetworkProfileFilterSensitiveLog(obj.NetworkProfile) }),
});

/**
 * @internal
 */
export const PutSkillAuthorizationRequestFilterSensitiveLog = (obj: PutSkillAuthorizationRequest): any => ({
  ...obj,
  ...(obj.AuthorizationResult && { AuthorizationResult: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ContactDataFilterSensitiveLog = (obj: ContactData): any => ({
  ...obj,
  ...(obj.PhoneNumber && { PhoneNumber: SENSITIVE_STRING }),
  ...(obj.PhoneNumbers && { PhoneNumbers: obj.PhoneNumbers.map((item) => PhoneNumberFilterSensitiveLog(item)) }),
  ...(obj.SipAddresses && { SipAddresses: obj.SipAddresses.map((item) => SipAddressFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const SearchContactsResponseFilterSensitiveLog = (obj: SearchContactsResponse): any => ({
  ...obj,
  ...(obj.Contacts && { Contacts: obj.Contacts.map((item) => ContactDataFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const UpdateContactRequestFilterSensitiveLog = (obj: UpdateContactRequest): any => ({
  ...obj,
  ...(obj.PhoneNumber && { PhoneNumber: SENSITIVE_STRING }),
  ...(obj.PhoneNumbers && { PhoneNumbers: obj.PhoneNumbers.map((item) => PhoneNumberFilterSensitiveLog(item)) }),
  ...(obj.SipAddresses && { SipAddresses: obj.SipAddresses.map((item) => SipAddressFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const UpdateNetworkProfileRequestFilterSensitiveLog = (obj: UpdateNetworkProfileRequest): any => ({
  ...obj,
  ...(obj.CurrentPassword && { CurrentPassword: SENSITIVE_STRING }),
  ...(obj.NextPassword && { NextPassword: SENSITIVE_STRING }),
});
