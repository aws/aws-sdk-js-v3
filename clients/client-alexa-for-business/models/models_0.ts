import { SENSITIVE_STRING, SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>An address book with attributes.</p>
 */
export interface AddressBook {
  /**
   * <p>The ARN of the address book.</p>
   */
  AddressBookArn?: string;

  /**
   * <p>The name of the address book.</p>
   */
  Name?: string;

  /**
   * <p>The description of the address book.</p>
   */
  Description?: string;
}

export namespace AddressBook {
  export const filterSensitiveLog = (obj: AddressBook): any => ({
    ...obj,
  });
}

/**
 * <p>Information related to an address book.</p>
 */
export interface AddressBookData {
  /**
   * <p>The ARN of the address book.</p>
   */
  AddressBookArn?: string;

  /**
   * <p>The name of the address book.</p>
   */
  Name?: string;

  /**
   * <p>The description of the address book.</p>
   */
  Description?: string;
}

export namespace AddressBookData {
  export const filterSensitiveLog = (obj: AddressBookData): any => ({
    ...obj,
  });
}

export interface ApproveSkillRequest {
  /**
   * <p>The unique identifier of the skill.</p>
   */
  SkillId: string | undefined;
}

export namespace ApproveSkillRequest {
  export const filterSensitiveLog = (obj: ApproveSkillRequest): any => ({
    ...obj,
  });
}

export interface ApproveSkillResponse {}

export namespace ApproveSkillResponse {
  export const filterSensitiveLog = (obj: ApproveSkillResponse): any => ({
    ...obj,
  });
}

/**
 * <p>There is a concurrent modification of resources.</p>
 */
export interface ConcurrentModificationException extends __SmithyException, $MetadataBearer {
  name: "ConcurrentModificationException";
  $fault: "client";
  Message?: string;
}

export namespace ConcurrentModificationException {
  export const filterSensitiveLog = (obj: ConcurrentModificationException): any => ({
    ...obj,
  });
}

/**
 * <p>You are performing an action that would put you beyond your account's limits.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  Message?: string;
}

export namespace LimitExceededException {
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>The resource is not found.</p>
 */
export interface NotFoundException extends __SmithyException, $MetadataBearer {
  name: "NotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace NotFoundException {
  export const filterSensitiveLog = (obj: NotFoundException): any => ({
    ...obj,
  });
}

export interface AssociateContactWithAddressBookRequest {
  /**
   * <p>The ARN of the contact to associate with an address book.</p>
   */
  ContactArn: string | undefined;

  /**
   * <p>The ARN of the address book with which to associate the contact.</p>
   */
  AddressBookArn: string | undefined;
}

export namespace AssociateContactWithAddressBookRequest {
  export const filterSensitiveLog = (obj: AssociateContactWithAddressBookRequest): any => ({
    ...obj,
  });
}

export interface AssociateContactWithAddressBookResponse {}

export namespace AssociateContactWithAddressBookResponse {
  export const filterSensitiveLog = (obj: AssociateContactWithAddressBookResponse): any => ({
    ...obj,
  });
}

export interface AssociateDeviceWithNetworkProfileRequest {
  /**
   * <p>The device ARN.</p>
   */
  DeviceArn: string | undefined;

  /**
   * <p>The ARN of the network profile to associate with a device.</p>
   */
  NetworkProfileArn: string | undefined;
}

export namespace AssociateDeviceWithNetworkProfileRequest {
  export const filterSensitiveLog = (obj: AssociateDeviceWithNetworkProfileRequest): any => ({
    ...obj,
  });
}

export interface AssociateDeviceWithNetworkProfileResponse {}

export namespace AssociateDeviceWithNetworkProfileResponse {
  export const filterSensitiveLog = (obj: AssociateDeviceWithNetworkProfileResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The request failed because this device is no longer registered and therefore no longer managed by this account.</p>
 */
export interface DeviceNotRegisteredException extends __SmithyException, $MetadataBearer {
  name: "DeviceNotRegisteredException";
  $fault: "client";
  Message?: string;
}

export namespace DeviceNotRegisteredException {
  export const filterSensitiveLog = (obj: DeviceNotRegisteredException): any => ({
    ...obj,
  });
}

export interface AssociateDeviceWithRoomRequest {
  /**
   * <p>The ARN of the device to associate to a room. Required.</p>
   */
  DeviceArn?: string;

  /**
   * <p>The ARN of the room with which to associate the device. Required.</p>
   */
  RoomArn?: string;
}

export namespace AssociateDeviceWithRoomRequest {
  export const filterSensitiveLog = (obj: AssociateDeviceWithRoomRequest): any => ({
    ...obj,
  });
}

export interface AssociateDeviceWithRoomResponse {}

export namespace AssociateDeviceWithRoomResponse {
  export const filterSensitiveLog = (obj: AssociateDeviceWithRoomResponse): any => ({
    ...obj,
  });
}

export interface AssociateSkillGroupWithRoomRequest {
  /**
   * <p>The ARN of the skill group to associate with a room. Required.</p>
   */
  SkillGroupArn?: string;

  /**
   * <p>The ARN of the room with which to associate the skill group. Required.</p>
   */
  RoomArn?: string;
}

export namespace AssociateSkillGroupWithRoomRequest {
  export const filterSensitiveLog = (obj: AssociateSkillGroupWithRoomRequest): any => ({
    ...obj,
  });
}

export interface AssociateSkillGroupWithRoomResponse {}

export namespace AssociateSkillGroupWithRoomResponse {
  export const filterSensitiveLog = (obj: AssociateSkillGroupWithRoomResponse): any => ({
    ...obj,
  });
}

export interface AssociateSkillWithSkillGroupRequest {
  /**
   * <p>The ARN of the skill group to associate the skill to. Required.</p>
   */
  SkillGroupArn?: string;

  /**
   * <p>The unique identifier of the skill.</p>
   */
  SkillId: string | undefined;
}

export namespace AssociateSkillWithSkillGroupRequest {
  export const filterSensitiveLog = (obj: AssociateSkillWithSkillGroupRequest): any => ({
    ...obj,
  });
}

export interface AssociateSkillWithSkillGroupResponse {}

export namespace AssociateSkillWithSkillGroupResponse {
  export const filterSensitiveLog = (obj: AssociateSkillWithSkillGroupResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The skill must be linked to a third-party account.</p>
 */
export interface SkillNotLinkedException extends __SmithyException, $MetadataBearer {
  name: "SkillNotLinkedException";
  $fault: "client";
  Message?: string;
}

export namespace SkillNotLinkedException {
  export const filterSensitiveLog = (obj: SkillNotLinkedException): any => ({
    ...obj,
  });
}

export interface AssociateSkillWithUsersRequest {
  /**
   * <p>The private skill ID you want to make available to enrolled users.</p>
   */
  SkillId: string | undefined;
}

export namespace AssociateSkillWithUsersRequest {
  export const filterSensitiveLog = (obj: AssociateSkillWithUsersRequest): any => ({
    ...obj,
  });
}

export interface AssociateSkillWithUsersResponse {}

export namespace AssociateSkillWithUsersResponse {
  export const filterSensitiveLog = (obj: AssociateSkillWithUsersResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The resource being created already exists.</p>
 */
export interface AlreadyExistsException extends __SmithyException, $MetadataBearer {
  name: "AlreadyExistsException";
  $fault: "client";
  Message?: string;
}

export namespace AlreadyExistsException {
  export const filterSensitiveLog = (obj: AlreadyExistsException): any => ({
    ...obj,
  });
}

export interface CreateAddressBookRequest {
  /**
   * <p>The name of the address book.</p>
   */
  Name: string | undefined;

  /**
   * <p>The description of the address book.</p>
   */
  Description?: string;

  /**
   * <p>A unique, user-specified identifier for the request that ensures
   *          idempotency.</p>
   */
  ClientRequestToken?: string;
}

export namespace CreateAddressBookRequest {
  export const filterSensitiveLog = (obj: CreateAddressBookRequest): any => ({
    ...obj,
  });
}

export interface CreateAddressBookResponse {
  /**
   * <p>The ARN of the newly created address book.</p>
   */
  AddressBookArn?: string;
}

export namespace CreateAddressBookResponse {
  export const filterSensitiveLog = (obj: CreateAddressBookResponse): any => ({
    ...obj,
  });
}

export enum BusinessReportInterval {
  ONE_DAY = "ONE_DAY",
  ONE_WEEK = "ONE_WEEK",
  THIRTY_DAYS = "THIRTY_DAYS",
}

/**
 * <p>The content range of the report.</p>
 */
export interface BusinessReportContentRange {
  /**
   * <p>The interval of the content range.</p>
   */
  Interval: BusinessReportInterval | string | undefined;
}

export namespace BusinessReportContentRange {
  export const filterSensitiveLog = (obj: BusinessReportContentRange): any => ({
    ...obj,
  });
}

export enum BusinessReportFormat {
  CSV = "CSV",
  CSV_ZIP = "CSV_ZIP",
}

/**
 * <p>The recurrence of the reports.</p>
 */
export interface BusinessReportRecurrence {
  /**
   * <p>The start date.</p>
   */
  StartDate?: string;
}

export namespace BusinessReportRecurrence {
  export const filterSensitiveLog = (obj: BusinessReportRecurrence): any => ({
    ...obj,
  });
}

/**
 * <p>A key-value pair that can be associated with a resource. </p>
 */
export interface Tag {
  /**
   * <p>The key of a tag. Tag keys are case-sensitive. </p>
   */
  Key: string | undefined;

  /**
   * <p>The value of a tag. Tag values are case sensitive and can be null.</p>
   */
  Value: string | undefined;
}

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

export interface CreateBusinessReportScheduleRequest {
  /**
   * <p>The name identifier of the schedule.</p>
   */
  ScheduleName?: string;

  /**
   * <p>The S3 bucket name of the output reports. If this isn't specified, the report can be
   *          retrieved from a download link by calling ListBusinessReportSchedule. </p>
   */
  S3BucketName?: string;

  /**
   * <p>The S3 key where the report is delivered.</p>
   */
  S3KeyPrefix?: string;

  /**
   * <p>The format of the generated report (individual CSV files or zipped files of
   *          individual files).</p>
   */
  Format: BusinessReportFormat | string | undefined;

  /**
   * <p>The content range of the reports.</p>
   */
  ContentRange: BusinessReportContentRange | undefined;

  /**
   * <p>The recurrence of the reports. If this isn't specified, the report will only be
   *          delivered one time when the API is called. </p>
   */
  Recurrence?: BusinessReportRecurrence;

  /**
   * <p>The client request token.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The tags for the business report schedule.</p>
   */
  Tags?: Tag[];
}

export namespace CreateBusinessReportScheduleRequest {
  export const filterSensitiveLog = (obj: CreateBusinessReportScheduleRequest): any => ({
    ...obj,
  });
}

export interface CreateBusinessReportScheduleResponse {
  /**
   * <p>The ARN of the business report schedule.</p>
   */
  ScheduleArn?: string;
}

export namespace CreateBusinessReportScheduleResponse {
  export const filterSensitiveLog = (obj: CreateBusinessReportScheduleResponse): any => ({
    ...obj,
  });
}

export enum ConferenceProviderType {
  BLUEJEANS = "BLUEJEANS",
  CHIME = "CHIME",
  CUSTOM = "CUSTOM",
  FUZE = "FUZE",
  GOOGLE_HANGOUTS = "GOOGLE_HANGOUTS",
  POLYCOM = "POLYCOM",
  RINGCENTRAL = "RINGCENTRAL",
  SKYPE_FOR_BUSINESS = "SKYPE_FOR_BUSINESS",
  WEBEX = "WEBEX",
  ZOOM = "ZOOM",
}

export enum CommsProtocol {
  H323 = "H323",
  SIP = "SIP",
  SIPS = "SIPS",
}

/**
 * <p>The IP endpoint and protocol for calling.</p>
 */
export interface IPDialIn {
  /**
   * <p>The IP address.</p>
   */
  Endpoint: string | undefined;

  /**
   * <p>The protocol, including SIP, SIPS, and H323.</p>
   */
  CommsProtocol: CommsProtocol | string | undefined;
}

export namespace IPDialIn {
  export const filterSensitiveLog = (obj: IPDialIn): any => ({
    ...obj,
  });
}

export enum RequirePin {
  NO = "NO",
  OPTIONAL = "OPTIONAL",
  YES = "YES",
}

/**
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
   * <p>The values that indicate whether the pin is always required.</p>
   */
  RequirePin: RequirePin | string | undefined;
}

export namespace MeetingSetting {
  export const filterSensitiveLog = (obj: MeetingSetting): any => ({
    ...obj,
  });
}

/**
 * <p>The information for public switched telephone network (PSTN) conferencing.</p>
 */
export interface PSTNDialIn {
  /**
   * <p>The zip code.</p>
   */
  CountryCode: string | undefined;

  /**
   * <p>The phone number to call to join the conference.</p>
   */
  PhoneNumber: string | undefined;

  /**
   * <p>The delay duration before Alexa enters the conference ID with dual-tone multi-frequency (DTMF). Each number on the dial pad corresponds to a DTMF tone, which is how we send data over the telephone network.</p>
   */
  OneClickIdDelay: string | undefined;

  /**
   * <p>The delay duration before Alexa enters the conference pin with dual-tone multi-frequency (DTMF). Each number on the dial pad corresponds to a DTMF tone, which is how we send data over the telephone network.</p>
   */
  OneClickPinDelay: string | undefined;
}

export namespace PSTNDialIn {
  export const filterSensitiveLog = (obj: PSTNDialIn): any => ({
    ...obj,
  });
}

export interface CreateConferenceProviderRequest {
  /**
   * <p>The name of the conference provider.</p>
   */
  ConferenceProviderName: string | undefined;

  /**
   * <p>Represents a type within a list of predefined types.</p>
   */
  ConferenceProviderType: ConferenceProviderType | string | undefined;

  /**
   * <p>The IP endpoint and protocol for calling.</p>
   */
  IPDialIn?: IPDialIn;

  /**
   * <p>The information for PSTN conferencing.</p>
   */
  PSTNDialIn?: PSTNDialIn;

  /**
   * <p>The meeting settings for the conference provider.</p>
   */
  MeetingSetting: MeetingSetting | undefined;

  /**
   * <p>The request token of the client.</p>
   */
  ClientRequestToken?: string;
}

export namespace CreateConferenceProviderRequest {
  export const filterSensitiveLog = (obj: CreateConferenceProviderRequest): any => ({
    ...obj,
  });
}

export interface CreateConferenceProviderResponse {
  /**
   * <p>The ARN of the newly-created conference provider.</p>
   */
  ConferenceProviderArn?: string;
}

export namespace CreateConferenceProviderResponse {
  export const filterSensitiveLog = (obj: CreateConferenceProviderResponse): any => ({
    ...obj,
  });
}

export enum PhoneNumberType {
  HOME = "HOME",
  MOBILE = "MOBILE",
  WORK = "WORK",
}

/**
 * <p>The phone number for the contact containing the raw number and phone number type.</p>
 */
export interface PhoneNumber {
  /**
   * <p>The raw value of the phone number.</p>
   */
  Number: string | undefined;

  /**
   * <p>The type of the phone number.</p>
   */
  Type: PhoneNumberType | string | undefined;
}

export namespace PhoneNumber {
  export const filterSensitiveLog = (obj: PhoneNumber): any => ({
    ...obj,
    ...(obj.Number && { Number: SENSITIVE_STRING }),
    ...(obj.Type && { Type: SENSITIVE_STRING }),
  });
}

export enum SipType {
  WORK = "WORK",
}

/**
 * <p>The SIP address for the contact containing the URI and SIP address type.</p>
 */
export interface SipAddress {
  /**
   * <p>The URI for the SIP address.</p>
   */
  Uri: string | undefined;

  /**
   * <p>The type of the SIP address.</p>
   */
  Type: SipType | string | undefined;
}

export namespace SipAddress {
  export const filterSensitiveLog = (obj: SipAddress): any => ({
    ...obj,
    ...(obj.Uri && { Uri: SENSITIVE_STRING }),
    ...(obj.Type && { Type: SENSITIVE_STRING }),
  });
}

export interface CreateContactRequest {
  /**
   * <p>The name of the contact to display on the console.</p>
   */
  DisplayName?: string;

  /**
   * <p>The first name of the contact that is used to call the contact on the
   *          device.</p>
   */
  FirstName: string | undefined;

  /**
   * <p>The last name of the contact that is used to call the contact on the
   *          device.</p>
   */
  LastName?: string;

  /**
   * <p>The phone number of the contact in E.164 format. The phone number type defaults to
   *          WORK. You can specify PhoneNumber or PhoneNumbers. We recommend that you use PhoneNumbers,
   *          which lets you specify the phone number type and multiple numbers.</p>
   */
  PhoneNumber?: string;

  /**
   * <p>The list of phone numbers for the contact.</p>
   */
  PhoneNumbers?: PhoneNumber[];

  /**
   * <p>The list of SIP addresses for the contact.</p>
   */
  SipAddresses?: SipAddress[];

  /**
   * <p>A unique, user-specified identifier for this request that ensures
   *          idempotency.</p>
   */
  ClientRequestToken?: string;
}

export namespace CreateContactRequest {
  export const filterSensitiveLog = (obj: CreateContactRequest): any => ({
    ...obj,
    ...(obj.PhoneNumber && { PhoneNumber: SENSITIVE_STRING }),
    ...(obj.PhoneNumbers && { PhoneNumbers: obj.PhoneNumbers.map((item) => PhoneNumber.filterSensitiveLog(item)) }),
    ...(obj.SipAddresses && { SipAddresses: obj.SipAddresses.map((item) => SipAddress.filterSensitiveLog(item)) }),
  });
}

export interface CreateContactResponse {
  /**
   * <p>The ARN of the newly created address book.</p>
   */
  ContactArn?: string;
}

export namespace CreateContactResponse {
  export const filterSensitiveLog = (obj: CreateContactResponse): any => ({
    ...obj,
  });
}

export interface CreateGatewayGroupRequest {
  /**
   * <p>The name of the gateway group.</p>
   */
  Name: string | undefined;

  /**
   * <p>The description of the gateway group.</p>
   */
  Description?: string;

  /**
   * <p> A unique, user-specified identifier for the request that ensures idempotency.</p>
   */
  ClientRequestToken?: string;
}

export namespace CreateGatewayGroupRequest {
  export const filterSensitiveLog = (obj: CreateGatewayGroupRequest): any => ({
    ...obj,
  });
}

export interface CreateGatewayGroupResponse {
  /**
   * <p>The ARN of the created gateway group.</p>
   */
  GatewayGroupArn?: string;
}

export namespace CreateGatewayGroupResponse {
  export const filterSensitiveLog = (obj: CreateGatewayGroupResponse): any => ({
    ...obj,
  });
}

export enum NetworkEapMethod {
  EAP_TLS = "EAP_TLS",
}

export enum NetworkSecurityType {
  OPEN = "OPEN",
  WEP = "WEP",
  WPA2_ENTERPRISE = "WPA2_ENTERPRISE",
  WPA2_PSK = "WPA2_PSK",
  WPA_PSK = "WPA_PSK",
}

export interface CreateNetworkProfileRequest {
  /**
   * <p>The name of the network profile associated with a device.</p>
   */
  NetworkProfileName: string | undefined;

  /**
   * <p>Detailed information about a device's network profile.</p>
   */
  Description?: string;

  /**
   * <p>The SSID of the Wi-Fi network.</p>
   */
  Ssid: string | undefined;

  /**
   * <p>The security type of the Wi-Fi network. This can be WPA2_ENTERPRISE, WPA2_PSK, WPA_PSK,
   *          WEP, or OPEN.</p>
   */
  SecurityType: NetworkSecurityType | string | undefined;

  /**
   * <p>The authentication standard that is used in the EAP framework. Currently, EAP_TLS is
   *          supported.</p>
   */
  EapMethod?: NetworkEapMethod | string;

  /**
   * <p>The current password of the Wi-Fi network.</p>
   */
  CurrentPassword?: string;

  /**
   * <p>The next, or subsequent, password of the Wi-Fi network. This password is asynchronously
   *          transmitted to the device and is used when the password of the network changes to
   *          NextPassword. </p>
   */
  NextPassword?: string;

  /**
   * <p>The ARN of the Private Certificate Authority (PCA) created in AWS Certificate Manager
   *          (ACM). This is used to issue certificates to the devices. </p>
   */
  CertificateAuthorityArn?: string;

  /**
   * <p>The root certificates of your authentication server that is installed on your devices
   *          and used to trust your authentication server during EAP negotiation. </p>
   */
  TrustAnchors?: string[];

  /**
   * <p>A unique, user-specified identifier for the request that ensures idempotency.</p>
   */
  ClientRequestToken?: string;
}

export namespace CreateNetworkProfileRequest {
  export const filterSensitiveLog = (obj: CreateNetworkProfileRequest): any => ({
    ...obj,
    ...(obj.CurrentPassword && { CurrentPassword: SENSITIVE_STRING }),
    ...(obj.NextPassword && { NextPassword: SENSITIVE_STRING }),
  });
}

export interface CreateNetworkProfileResponse {
  /**
   * <p>The ARN of the network profile associated with a device.</p>
   */
  NetworkProfileArn?: string;
}

export namespace CreateNetworkProfileResponse {
  export const filterSensitiveLog = (obj: CreateNetworkProfileResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The Certificate Authority can't issue or revoke a certificate.</p>
 */
export interface InvalidCertificateAuthorityException extends __SmithyException, $MetadataBearer {
  name: "InvalidCertificateAuthorityException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidCertificateAuthorityException {
  export const filterSensitiveLog = (obj: InvalidCertificateAuthorityException): any => ({
    ...obj,
  });
}

/**
 * <p>The service linked role is locked for deletion. </p>
 */
export interface InvalidServiceLinkedRoleStateException extends __SmithyException, $MetadataBearer {
  name: "InvalidServiceLinkedRoleStateException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidServiceLinkedRoleStateException {
  export const filterSensitiveLog = (obj: InvalidServiceLinkedRoleStateException): any => ({
    ...obj,
  });
}

export enum DistanceUnit {
  IMPERIAL = "IMPERIAL",
  METRIC = "METRIC",
}

export enum EndOfMeetingReminderType {
  ANNOUNCEMENT_TIME_CHECK = "ANNOUNCEMENT_TIME_CHECK",
  ANNOUNCEMENT_VARIABLE_TIME_LEFT = "ANNOUNCEMENT_VARIABLE_TIME_LEFT",
  CHIME = "CHIME",
  KNOCK = "KNOCK",
}

/**
 * <p>Creates settings for the end of meeting reminder feature that are applied to a room
 *          profile. The end of meeting reminder enables Alexa to remind users when a meeting is
 *          ending.</p>
 */
export interface CreateEndOfMeetingReminder {
  /**
   * <p> A range of 3 to 15 minutes that determines when the reminder begins.</p>
   */
  ReminderAtMinutes: number[] | undefined;

  /**
   * <p>The type of sound that users hear during the end of meeting reminder. </p>
   */
  ReminderType: EndOfMeetingReminderType | string | undefined;

  /**
   * <p>Whether an end of meeting reminder is enabled or not.</p>
   */
  Enabled: boolean | undefined;
}

export namespace CreateEndOfMeetingReminder {
  export const filterSensitiveLog = (obj: CreateEndOfMeetingReminder): any => ({
    ...obj,
  });
}

/**
 * <p>Creates settings for the instant booking feature that are applied to a room profile.
 *          When users start their meeting with Alexa, Alexa automatically books the room for the
 *          configured duration if the room is available.</p>
 */
export interface CreateInstantBooking {
  /**
   * <p>Duration between 15 and 240 minutes at increments of 15 that determines how long to book
   *          an available room when a meeting is started with Alexa.</p>
   */
  DurationInMinutes: number | undefined;

  /**
   * <p>Whether instant booking is enabled or not.</p>
   */
  Enabled: boolean | undefined;
}

export namespace CreateInstantBooking {
  export const filterSensitiveLog = (obj: CreateInstantBooking): any => ({
    ...obj,
  });
}

/**
 * <p>Creates settings for the require check in feature that are applied to a room profile. Require check in allows a meeting room’s Alexa or AVS device to prompt the user to check in; otherwise, the room will be released.</p>
 */
export interface CreateRequireCheckIn {
  /**
   * <p>Duration between 5 and 20 minutes to determine when to release the room if it's not checked into.</p>
   */
  ReleaseAfterMinutes: number | undefined;

  /**
   * <p>Whether require check in is enabled or not.</p>
   */
  Enabled: boolean | undefined;
}

export namespace CreateRequireCheckIn {
  export const filterSensitiveLog = (obj: CreateRequireCheckIn): any => ({
    ...obj,
  });
}

/**
 * <p>Creates meeting room settings of a room profile.</p>
 */
export interface CreateMeetingRoomConfiguration {
  /**
   * <p>Whether room utilization metrics are enabled or not.</p>
   */
  RoomUtilizationMetricsEnabled?: boolean;

  /**
   * <p>Creates settings for the end of meeting reminder feature that are applied to a room
   *          profile. The end of meeting reminder enables Alexa to remind users when a meeting is
   *          ending.</p>
   */
  EndOfMeetingReminder?: CreateEndOfMeetingReminder;

  /**
   * <p>Settings to automatically book a room for a configured duration if it's free when joining a meeting with Alexa.</p>
   */
  InstantBooking?: CreateInstantBooking;

  /**
   * <p>Settings for requiring a check in when a room is reserved. Alexa can cancel a room reservation if it's not checked into to make the room available for others. Users can check in by joining the meeting with Alexa or an AVS device, or by saying “Alexa, check in.”</p>
   */
  RequireCheckIn?: CreateRequireCheckIn;
}

export namespace CreateMeetingRoomConfiguration {
  export const filterSensitiveLog = (obj: CreateMeetingRoomConfiguration): any => ({
    ...obj,
  });
}

export enum TemperatureUnit {
  CELSIUS = "CELSIUS",
  FAHRENHEIT = "FAHRENHEIT",
}

export enum WakeWord {
  ALEXA = "ALEXA",
  AMAZON = "AMAZON",
  COMPUTER = "COMPUTER",
  ECHO = "ECHO",
}

export interface CreateProfileRequest {
  /**
   * <p>The name of a room profile.</p>
   */
  ProfileName: string | undefined;

  /**
   * <p>The time zone used by a room profile.</p>
   */
  Timezone: string | undefined;

  /**
   * <p>The valid address for the room.</p>
   */
  Address: string | undefined;

  /**
   * <p>The distance unit to be used by devices in the profile.</p>
   */
  DistanceUnit: DistanceUnit | string | undefined;

  /**
   * <p>The temperature unit to be used by devices in the profile.</p>
   */
  TemperatureUnit: TemperatureUnit | string | undefined;

  /**
   * <p>A wake word for Alexa, Echo, Amazon, or a computer.</p>
   */
  WakeWord: WakeWord | string | undefined;

  /**
   * <p>The locale of the room profile. (This is currently only available to a limited preview audience.)</p>
   */
  Locale?: string;

  /**
   * <p>The user-specified token that is used during the creation of a profile.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>Whether room profile setup is enabled.</p>
   */
  SetupModeDisabled?: boolean;

  /**
   * <p>The maximum volume limit for a room profile.</p>
   */
  MaxVolumeLimit?: number;

  /**
   * <p>Whether PSTN calling is enabled.</p>
   */
  PSTNEnabled?: boolean;

  /**
   * <p>The meeting room settings of a room profile.</p>
   */
  MeetingRoomConfiguration?: CreateMeetingRoomConfiguration;

  /**
   * <p>The tags for the profile.</p>
   */
  Tags?: Tag[];
}

export namespace CreateProfileRequest {
  export const filterSensitiveLog = (obj: CreateProfileRequest): any => ({
    ...obj,
  });
}

export interface CreateProfileResponse {
  /**
   * <p>The ARN of the newly created room profile in the response.</p>
   */
  ProfileArn?: string;
}

export namespace CreateProfileResponse {
  export const filterSensitiveLog = (obj: CreateProfileResponse): any => ({
    ...obj,
  });
}

export interface CreateRoomRequest {
  /**
   * <p>The name for the room.</p>
   */
  RoomName: string | undefined;

  /**
   * <p>The description for the room.</p>
   */
  Description?: string;

  /**
   * <p>The profile ARN for the room. This is required.</p>
   */
  ProfileArn?: string;

  /**
   * <p>The calendar ARN for the room.</p>
   */
  ProviderCalendarId?: string;

  /**
   * <p>A unique, user-specified identifier for this request that ensures idempotency.
   *       </p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The tags for the room.</p>
   */
  Tags?: Tag[];
}

export namespace CreateRoomRequest {
  export const filterSensitiveLog = (obj: CreateRoomRequest): any => ({
    ...obj,
  });
}

export interface CreateRoomResponse {
  /**
   * <p>The ARN of the newly created room in the response.</p>
   */
  RoomArn?: string;
}

export namespace CreateRoomResponse {
  export const filterSensitiveLog = (obj: CreateRoomResponse): any => ({
    ...obj,
  });
}

export interface CreateSkillGroupRequest {
  /**
   * <p>The name for the skill group.</p>
   */
  SkillGroupName: string | undefined;

  /**
   * <p>The description for the skill group.</p>
   */
  Description?: string;

  /**
   * <p>A unique, user-specified identifier for this request that ensures idempotency.
   *       </p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The tags for the skill group.</p>
   */
  Tags?: Tag[];
}

export namespace CreateSkillGroupRequest {
  export const filterSensitiveLog = (obj: CreateSkillGroupRequest): any => ({
    ...obj,
  });
}

export interface CreateSkillGroupResponse {
  /**
   * <p>The ARN of the newly created skill group in the response.</p>
   */
  SkillGroupArn?: string;
}

export namespace CreateSkillGroupResponse {
  export const filterSensitiveLog = (obj: CreateSkillGroupResponse): any => ({
    ...obj,
  });
}

export interface CreateUserRequest {
  /**
   * <p>The ARN for the user.</p>
   */
  UserId: string | undefined;

  /**
   * <p>The first name for the user.</p>
   */
  FirstName?: string;

  /**
   * <p>The last name for the user.</p>
   */
  LastName?: string;

  /**
   * <p>The email address for the user.</p>
   */
  Email?: string;

  /**
   * <p>A unique, user-specified identifier for this request that ensures idempotency.
   *       </p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The tags for the user.</p>
   */
  Tags?: Tag[];
}

export namespace CreateUserRequest {
  export const filterSensitiveLog = (obj: CreateUserRequest): any => ({
    ...obj,
  });
}

export interface CreateUserResponse {
  /**
   * <p>The ARN of the newly created user in the response.</p>
   */
  UserArn?: string;
}

export namespace CreateUserResponse {
  export const filterSensitiveLog = (obj: CreateUserResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The resource in the request is already in use.</p>
 */
export interface ResourceInUseException extends __SmithyException, $MetadataBearer {
  name: "ResourceInUseException";
  $fault: "client";
  Message?: string;
  /**
   * <p>A unique, user-specified identifier for the request that ensures idempotency.</p>
   */
  ClientRequestToken?: string;
}

export namespace ResourceInUseException {
  export const filterSensitiveLog = (obj: ResourceInUseException): any => ({
    ...obj,
  });
}

export interface DeleteAddressBookRequest {
  /**
   * <p>The ARN of the address book to delete.</p>
   */
  AddressBookArn: string | undefined;
}

export namespace DeleteAddressBookRequest {
  export const filterSensitiveLog = (obj: DeleteAddressBookRequest): any => ({
    ...obj,
  });
}

export interface DeleteAddressBookResponse {}

export namespace DeleteAddressBookResponse {
  export const filterSensitiveLog = (obj: DeleteAddressBookResponse): any => ({
    ...obj,
  });
}

export interface DeleteBusinessReportScheduleRequest {
  /**
   * <p>The ARN of the business report schedule.</p>
   */
  ScheduleArn: string | undefined;
}

export namespace DeleteBusinessReportScheduleRequest {
  export const filterSensitiveLog = (obj: DeleteBusinessReportScheduleRequest): any => ({
    ...obj,
  });
}

export interface DeleteBusinessReportScheduleResponse {}

export namespace DeleteBusinessReportScheduleResponse {
  export const filterSensitiveLog = (obj: DeleteBusinessReportScheduleResponse): any => ({
    ...obj,
  });
}

export interface DeleteConferenceProviderRequest {
  /**
   * <p>The ARN of the conference provider.</p>
   */
  ConferenceProviderArn: string | undefined;
}

export namespace DeleteConferenceProviderRequest {
  export const filterSensitiveLog = (obj: DeleteConferenceProviderRequest): any => ({
    ...obj,
  });
}

export interface DeleteConferenceProviderResponse {}

export namespace DeleteConferenceProviderResponse {
  export const filterSensitiveLog = (obj: DeleteConferenceProviderResponse): any => ({
    ...obj,
  });
}

export interface DeleteContactRequest {
  /**
   * <p>The ARN of the contact to delete.</p>
   */
  ContactArn: string | undefined;
}

export namespace DeleteContactRequest {
  export const filterSensitiveLog = (obj: DeleteContactRequest): any => ({
    ...obj,
  });
}

export interface DeleteContactResponse {}

export namespace DeleteContactResponse {
  export const filterSensitiveLog = (obj: DeleteContactResponse): any => ({
    ...obj,
  });
}

export interface DeleteDeviceRequest {
  /**
   * <p>The ARN of the device for which to request details.</p>
   */
  DeviceArn: string | undefined;
}

export namespace DeleteDeviceRequest {
  export const filterSensitiveLog = (obj: DeleteDeviceRequest): any => ({
    ...obj,
  });
}

export interface DeleteDeviceResponse {}

export namespace DeleteDeviceResponse {
  export const filterSensitiveLog = (obj: DeleteDeviceResponse): any => ({
    ...obj,
  });
}

export enum DeviceUsageType {
  VOICE = "VOICE",
}

export interface DeleteDeviceUsageDataRequest {
  /**
   * <p>The ARN of the device.</p>
   */
  DeviceArn: string | undefined;

  /**
   * <p>The type of usage data to delete.</p>
   */
  DeviceUsageType: DeviceUsageType | string | undefined;
}

export namespace DeleteDeviceUsageDataRequest {
  export const filterSensitiveLog = (obj: DeleteDeviceUsageDataRequest): any => ({
    ...obj,
  });
}

export interface DeleteDeviceUsageDataResponse {}

export namespace DeleteDeviceUsageDataResponse {
  export const filterSensitiveLog = (obj: DeleteDeviceUsageDataResponse): any => ({
    ...obj,
  });
}

export interface DeleteGatewayGroupRequest {
  /**
   * <p>The ARN of the gateway group to delete.</p>
   */
  GatewayGroupArn: string | undefined;
}

export namespace DeleteGatewayGroupRequest {
  export const filterSensitiveLog = (obj: DeleteGatewayGroupRequest): any => ({
    ...obj,
  });
}

export interface DeleteGatewayGroupResponse {}

export namespace DeleteGatewayGroupResponse {
  export const filterSensitiveLog = (obj: DeleteGatewayGroupResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Another resource is associated with the resource in the request.</p>
 */
export interface ResourceAssociatedException extends __SmithyException, $MetadataBearer {
  name: "ResourceAssociatedException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceAssociatedException {
  export const filterSensitiveLog = (obj: ResourceAssociatedException): any => ({
    ...obj,
  });
}

export interface DeleteNetworkProfileRequest {
  /**
   * <p>The ARN of the network profile associated with a device.</p>
   */
  NetworkProfileArn: string | undefined;
}

export namespace DeleteNetworkProfileRequest {
  export const filterSensitiveLog = (obj: DeleteNetworkProfileRequest): any => ({
    ...obj,
  });
}

export interface DeleteNetworkProfileResponse {}

export namespace DeleteNetworkProfileResponse {
  export const filterSensitiveLog = (obj: DeleteNetworkProfileResponse): any => ({
    ...obj,
  });
}

export interface DeleteProfileRequest {
  /**
   * <p>The ARN of the room profile to delete. Required.</p>
   */
  ProfileArn?: string;
}

export namespace DeleteProfileRequest {
  export const filterSensitiveLog = (obj: DeleteProfileRequest): any => ({
    ...obj,
  });
}

export interface DeleteProfileResponse {}

export namespace DeleteProfileResponse {
  export const filterSensitiveLog = (obj: DeleteProfileResponse): any => ({
    ...obj,
  });
}

export interface DeleteRoomRequest {
  /**
   * <p>The ARN of the room to delete. Required.</p>
   */
  RoomArn?: string;
}

export namespace DeleteRoomRequest {
  export const filterSensitiveLog = (obj: DeleteRoomRequest): any => ({
    ...obj,
  });
}

export interface DeleteRoomResponse {}

export namespace DeleteRoomResponse {
  export const filterSensitiveLog = (obj: DeleteRoomResponse): any => ({
    ...obj,
  });
}

export interface DeleteRoomSkillParameterRequest {
  /**
   * <p>The ARN of the room from which to remove the room skill parameter details.</p>
   */
  RoomArn?: string;

  /**
   * <p>The ID of the skill from which to remove the room skill parameter details.</p>
   */
  SkillId: string | undefined;

  /**
   * <p>The room skill parameter key for which to remove details.</p>
   */
  ParameterKey: string | undefined;
}

export namespace DeleteRoomSkillParameterRequest {
  export const filterSensitiveLog = (obj: DeleteRoomSkillParameterRequest): any => ({
    ...obj,
  });
}

export interface DeleteRoomSkillParameterResponse {}

export namespace DeleteRoomSkillParameterResponse {
  export const filterSensitiveLog = (obj: DeleteRoomSkillParameterResponse): any => ({
    ...obj,
  });
}

export interface DeleteSkillAuthorizationRequest {
  /**
   * <p>The unique identifier of a skill.</p>
   */
  SkillId: string | undefined;

  /**
   * <p>The room that the skill is authorized for.</p>
   */
  RoomArn?: string;
}

export namespace DeleteSkillAuthorizationRequest {
  export const filterSensitiveLog = (obj: DeleteSkillAuthorizationRequest): any => ({
    ...obj,
  });
}

export interface DeleteSkillAuthorizationResponse {}

export namespace DeleteSkillAuthorizationResponse {
  export const filterSensitiveLog = (obj: DeleteSkillAuthorizationResponse): any => ({
    ...obj,
  });
}

export interface DeleteSkillGroupRequest {
  /**
   * <p>The ARN of the skill group to delete. Required.</p>
   */
  SkillGroupArn?: string;
}

export namespace DeleteSkillGroupRequest {
  export const filterSensitiveLog = (obj: DeleteSkillGroupRequest): any => ({
    ...obj,
  });
}

export interface DeleteSkillGroupResponse {}

export namespace DeleteSkillGroupResponse {
  export const filterSensitiveLog = (obj: DeleteSkillGroupResponse): any => ({
    ...obj,
  });
}

export interface DeleteUserRequest {
  /**
   * <p>The ARN of the user to delete in the organization. Required.</p>
   */
  UserArn?: string;

  /**
   * <p>The ARN of the user's enrollment in the organization. Required.</p>
   */
  EnrollmentId: string | undefined;
}

export namespace DeleteUserRequest {
  export const filterSensitiveLog = (obj: DeleteUserRequest): any => ({
    ...obj,
  });
}

export interface DeleteUserResponse {}

export namespace DeleteUserResponse {
  export const filterSensitiveLog = (obj: DeleteUserResponse): any => ({
    ...obj,
  });
}

export interface DisassociateContactFromAddressBookRequest {
  /**
   * <p>The ARN of the contact to disassociate from an address book.</p>
   */
  ContactArn: string | undefined;

  /**
   * <p>The ARN of the address from which to disassociate the contact.</p>
   */
  AddressBookArn: string | undefined;
}

export namespace DisassociateContactFromAddressBookRequest {
  export const filterSensitiveLog = (obj: DisassociateContactFromAddressBookRequest): any => ({
    ...obj,
  });
}

export interface DisassociateContactFromAddressBookResponse {}

export namespace DisassociateContactFromAddressBookResponse {
  export const filterSensitiveLog = (obj: DisassociateContactFromAddressBookResponse): any => ({
    ...obj,
  });
}

export interface DisassociateDeviceFromRoomRequest {
  /**
   * <p>The ARN of the device to disassociate from a room. Required.</p>
   */
  DeviceArn?: string;
}

export namespace DisassociateDeviceFromRoomRequest {
  export const filterSensitiveLog = (obj: DisassociateDeviceFromRoomRequest): any => ({
    ...obj,
  });
}

export interface DisassociateDeviceFromRoomResponse {}

export namespace DisassociateDeviceFromRoomResponse {
  export const filterSensitiveLog = (obj: DisassociateDeviceFromRoomResponse): any => ({
    ...obj,
  });
}

export interface DisassociateSkillFromSkillGroupRequest {
  /**
   * <p>The unique identifier of a skill. Required.</p>
   */
  SkillGroupArn?: string;

  /**
   * <p>The ARN of a skill group to associate to a skill.</p>
   */
  SkillId: string | undefined;
}

export namespace DisassociateSkillFromSkillGroupRequest {
  export const filterSensitiveLog = (obj: DisassociateSkillFromSkillGroupRequest): any => ({
    ...obj,
  });
}

export interface DisassociateSkillFromSkillGroupResponse {}

export namespace DisassociateSkillFromSkillGroupResponse {
  export const filterSensitiveLog = (obj: DisassociateSkillFromSkillGroupResponse): any => ({
    ...obj,
  });
}

export interface DisassociateSkillFromUsersRequest {
  /**
   * <p> The private skill ID you want to make unavailable for enrolled users.</p>
   */
  SkillId: string | undefined;
}

export namespace DisassociateSkillFromUsersRequest {
  export const filterSensitiveLog = (obj: DisassociateSkillFromUsersRequest): any => ({
    ...obj,
  });
}

export interface DisassociateSkillFromUsersResponse {}

export namespace DisassociateSkillFromUsersResponse {
  export const filterSensitiveLog = (obj: DisassociateSkillFromUsersResponse): any => ({
    ...obj,
  });
}

export interface DisassociateSkillGroupFromRoomRequest {
  /**
   * <p>The ARN of the skill group to disassociate from a room. Required.</p>
   */
  SkillGroupArn?: string;

  /**
   * <p>The ARN of the room from which the skill group is to be disassociated.
   *          Required.</p>
   */
  RoomArn?: string;
}

export namespace DisassociateSkillGroupFromRoomRequest {
  export const filterSensitiveLog = (obj: DisassociateSkillGroupFromRoomRequest): any => ({
    ...obj,
  });
}

export interface DisassociateSkillGroupFromRoomResponse {}

export namespace DisassociateSkillGroupFromRoomResponse {
  export const filterSensitiveLog = (obj: DisassociateSkillGroupFromRoomResponse): any => ({
    ...obj,
  });
}

export interface ForgetSmartHomeAppliancesRequest {
  /**
   * <p>The room that the appliances are associated with.</p>
   */
  RoomArn: string | undefined;
}

export namespace ForgetSmartHomeAppliancesRequest {
  export const filterSensitiveLog = (obj: ForgetSmartHomeAppliancesRequest): any => ({
    ...obj,
  });
}

export interface ForgetSmartHomeAppliancesResponse {}

export namespace ForgetSmartHomeAppliancesResponse {
  export const filterSensitiveLog = (obj: ForgetSmartHomeAppliancesResponse): any => ({
    ...obj,
  });
}

export interface GetAddressBookRequest {
  /**
   * <p>The ARN of the address book for which to request details.</p>
   */
  AddressBookArn: string | undefined;
}

export namespace GetAddressBookRequest {
  export const filterSensitiveLog = (obj: GetAddressBookRequest): any => ({
    ...obj,
  });
}

export interface GetAddressBookResponse {
  /**
   * <p>The details of the requested address book.</p>
   */
  AddressBook?: AddressBook;
}

export namespace GetAddressBookResponse {
  export const filterSensitiveLog = (obj: GetAddressBookResponse): any => ({
    ...obj,
  });
}

export interface GetConferencePreferenceRequest {}

export namespace GetConferencePreferenceRequest {
  export const filterSensitiveLog = (obj: GetConferencePreferenceRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The default conference provider that is used if no other scheduled meetings are
 *          detected.</p>
 */
export interface ConferencePreference {
  /**
   * <p>The ARN of the default conference provider.</p>
   */
  DefaultConferenceProviderArn?: string;
}

export namespace ConferencePreference {
  export const filterSensitiveLog = (obj: ConferencePreference): any => ({
    ...obj,
  });
}

export interface GetConferencePreferenceResponse {
  /**
   * <p>The conference preference.</p>
   */
  Preference?: ConferencePreference;
}

export namespace GetConferencePreferenceResponse {
  export const filterSensitiveLog = (obj: GetConferencePreferenceResponse): any => ({
    ...obj,
  });
}

export interface GetConferenceProviderRequest {
  /**
   * <p>The ARN of the newly created conference provider.</p>
   */
  ConferenceProviderArn: string | undefined;
}

export namespace GetConferenceProviderRequest {
  export const filterSensitiveLog = (obj: GetConferenceProviderRequest): any => ({
    ...obj,
  });
}

/**
 * <p>An entity that provides a conferencing solution. Alexa for Business acts as the voice interface and mediator that connects users to their preferred conference provider. Examples of conference providers include Amazon Chime, Zoom, Cisco, and Polycom. </p>
 */
export interface ConferenceProvider {
  /**
   * <p>The ARN of the newly created conference provider.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the conference provider.</p>
   */
  Name?: string;

  /**
   * <p>The type of conference providers.</p>
   */
  Type?: ConferenceProviderType | string;

  /**
   * <p>The IP endpoint and protocol for calling.</p>
   */
  IPDialIn?: IPDialIn;

  /**
   * <p>The information for PSTN conferencing.</p>
   */
  PSTNDialIn?: PSTNDialIn;

  /**
   * <p>The meeting settings for the conference provider.</p>
   */
  MeetingSetting?: MeetingSetting;
}

export namespace ConferenceProvider {
  export const filterSensitiveLog = (obj: ConferenceProvider): any => ({
    ...obj,
  });
}

export interface GetConferenceProviderResponse {
  /**
   * <p>The conference provider.</p>
   */
  ConferenceProvider?: ConferenceProvider;
}

export namespace GetConferenceProviderResponse {
  export const filterSensitiveLog = (obj: GetConferenceProviderResponse): any => ({
    ...obj,
  });
}

export interface GetContactRequest {
  /**
   * <p>The ARN of the contact for which to request details.</p>
   */
  ContactArn: string | undefined;
}

export namespace GetContactRequest {
  export const filterSensitiveLog = (obj: GetContactRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A contact with attributes.</p>
 */
export interface Contact {
  /**
   * <p>The ARN of the contact.</p>
   */
  ContactArn?: string;

  /**
   * <p>The name of the contact to display on the console.</p>
   */
  DisplayName?: string;

  /**
   * <p>The first name of the contact, used to call the contact on the device.</p>
   */
  FirstName?: string;

  /**
   * <p>The last name of the contact, used to call the contact on the device.</p>
   */
  LastName?: string;

  /**
   * <p>The phone number of the contact. The phone number type defaults to WORK. You can
   *          either specify PhoneNumber or PhoneNumbers. We recommend that you use PhoneNumbers, which
   *          lets you specify the phone number type and multiple numbers.</p>
   */
  PhoneNumber?: string;

  /**
   * <p>The list of phone numbers for the contact.</p>
   */
  PhoneNumbers?: PhoneNumber[];

  /**
   * <p>The list of SIP addresses for the contact.</p>
   */
  SipAddresses?: SipAddress[];
}

export namespace Contact {
  export const filterSensitiveLog = (obj: Contact): any => ({
    ...obj,
    ...(obj.PhoneNumber && { PhoneNumber: SENSITIVE_STRING }),
    ...(obj.PhoneNumbers && { PhoneNumbers: obj.PhoneNumbers.map((item) => PhoneNumber.filterSensitiveLog(item)) }),
    ...(obj.SipAddresses && { SipAddresses: obj.SipAddresses.map((item) => SipAddress.filterSensitiveLog(item)) }),
  });
}

export interface GetContactResponse {
  /**
   * <p>The details of the requested contact.</p>
   */
  Contact?: Contact;
}

export namespace GetContactResponse {
  export const filterSensitiveLog = (obj: GetContactResponse): any => ({
    ...obj,
    ...(obj.Contact && { Contact: Contact.filterSensitiveLog(obj.Contact) }),
  });
}

export interface GetDeviceRequest {
  /**
   * <p>The ARN of the device for which to request details. Required.</p>
   */
  DeviceArn?: string;
}

export namespace GetDeviceRequest {
  export const filterSensitiveLog = (obj: GetDeviceRequest): any => ({
    ...obj,
  });
}

export enum DeviceStatus {
  DEREGISTERED = "DEREGISTERED",
  FAILED = "FAILED",
  PENDING = "PENDING",
  READY = "READY",
  WAS_OFFLINE = "WAS_OFFLINE",
}

export enum ConnectionStatus {
  OFFLINE = "OFFLINE",
  ONLINE = "ONLINE",
}

export enum DeviceStatusDetailCode {
  ASSOCIATION_REJECTION = "ASSOCIATION_REJECTION",
  AUTHENTICATION_FAILURE = "AUTHENTICATION_FAILURE",
  CERTIFICATE_AUTHORITY_ACCESS_DENIED = "CERTIFICATE_AUTHORITY_ACCESS_DENIED",
  CERTIFICATE_ISSUING_LIMIT_EXCEEDED = "CERTIFICATE_ISSUING_LIMIT_EXCEEDED",
  CREDENTIALS_ACCESS_FAILURE = "CREDENTIALS_ACCESS_FAILURE",
  DEVICE_SOFTWARE_UPDATE_NEEDED = "DEVICE_SOFTWARE_UPDATE_NEEDED",
  DEVICE_WAS_OFFLINE = "DEVICE_WAS_OFFLINE",
  DHCP_FAILURE = "DHCP_FAILURE",
  DNS_FAILURE = "DNS_FAILURE",
  INTERNET_UNAVAILABLE = "INTERNET_UNAVAILABLE",
  INVALID_CERTIFICATE_AUTHORITY = "INVALID_CERTIFICATE_AUTHORITY",
  INVALID_PASSWORD_STATE = "INVALID_PASSWORD_STATE",
  NETWORK_PROFILE_NOT_FOUND = "NETWORK_PROFILE_NOT_FOUND",
  PASSWORD_MANAGER_ACCESS_DENIED = "PASSWORD_MANAGER_ACCESS_DENIED",
  PASSWORD_NOT_FOUND = "PASSWORD_NOT_FOUND",
  TLS_VERSION_MISMATCH = "TLS_VERSION_MISMATCH",
  UNKNOWN_FAILURE = "UNKNOWN_FAILURE",
}

export enum Feature {
  ALL = "ALL",
  BLUETOOTH = "BLUETOOTH",
  LISTS = "LISTS",
  NETWORK_PROFILE = "NETWORK_PROFILE",
  NOTIFICATIONS = "NOTIFICATIONS",
  SETTINGS = "SETTINGS",
  SKILLS = "SKILLS",
  VOLUME = "VOLUME",
}

/**
 * <p>Details of a device’s status.</p>
 */
export interface DeviceStatusDetail {
  /**
   * <p>The list of available features on the device.</p>
   */
  Feature?: Feature | string;

  /**
   * <p>The device status detail code.</p>
   */
  Code?: DeviceStatusDetailCode | string;
}

export namespace DeviceStatusDetail {
  export const filterSensitiveLog = (obj: DeviceStatusDetail): any => ({
    ...obj,
  });
}

/**
 * <p>Detailed information about a device's status.</p>
 */
export interface DeviceStatusInfo {
  /**
   * <p>One or more device status detail descriptions.</p>
   */
  DeviceStatusDetails?: DeviceStatusDetail[];

  /**
   * <p>The latest available information about the connection status of a device. </p>
   */
  ConnectionStatus?: ConnectionStatus | string;

  /**
   * <p>The time (in epoch) when the device connection status changed.</p>
   */
  ConnectionStatusUpdatedTime?: Date;
}

export namespace DeviceStatusInfo {
  export const filterSensitiveLog = (obj: DeviceStatusInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Detailed information about a device's network profile.</p>
 */
export interface DeviceNetworkProfileInfo {
  /**
   * <p>The ARN of the network profile associated with a device.</p>
   */
  NetworkProfileArn?: string;

  /**
   * <p>The ARN of the certificate associated with a device.</p>
   */
  CertificateArn?: string;

  /**
   * <p>The time (in epoch) when the certificate expires.</p>
   */
  CertificateExpirationTime?: Date;
}

export namespace DeviceNetworkProfileInfo {
  export const filterSensitiveLog = (obj: DeviceNetworkProfileInfo): any => ({
    ...obj,
  });
}

/**
 * <p>A device with attributes.</p>
 */
export interface Device {
  /**
   * <p>The ARN of a device.</p>
   */
  DeviceArn?: string;

  /**
   * <p>The serial number of a device.</p>
   */
  DeviceSerialNumber?: string;

  /**
   * <p>The type of a device.</p>
   */
  DeviceType?: string;

  /**
   * <p>The name of a device.</p>
   */
  DeviceName?: string;

  /**
   * <p>The software version of a device.</p>
   */
  SoftwareVersion?: string;

  /**
   * <p>The MAC address of a device.</p>
   */
  MacAddress?: string;

  /**
   * <p>The room ARN of a device.</p>
   */
  RoomArn?: string;

  /**
   * <p>The status of a device. If the status is not READY, check the DeviceStatusInfo value
   *          for details.</p>
   */
  DeviceStatus?: DeviceStatus | string;

  /**
   * <p>Detailed information about a device's status.</p>
   */
  DeviceStatusInfo?: DeviceStatusInfo;

  /**
   * <p>Detailed information about a device's network profile.</p>
   */
  NetworkProfileInfo?: DeviceNetworkProfileInfo;
}

export namespace Device {
  export const filterSensitiveLog = (obj: Device): any => ({
    ...obj,
  });
}

export interface GetDeviceResponse {
  /**
   * <p>The details of the device requested. Required.</p>
   */
  Device?: Device;
}

export namespace GetDeviceResponse {
  export const filterSensitiveLog = (obj: GetDeviceResponse): any => ({
    ...obj,
  });
}

export interface GetGatewayRequest {
  /**
   * <p>The ARN of the gateway to get.</p>
   */
  GatewayArn: string | undefined;
}

export namespace GetGatewayRequest {
  export const filterSensitiveLog = (obj: GetGatewayRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The details of the gateway. </p>
 */
export interface Gateway {
  /**
   * <p>The ARN of the gateway.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the gateway.</p>
   */
  Name?: string;

  /**
   * <p>The description of the gateway.</p>
   */
  Description?: string;

  /**
   * <p>The ARN of the gateway group that the gateway is associated to.</p>
   */
  GatewayGroupArn?: string;

  /**
   * <p>The software version of the gateway. The gateway automatically updates its software
   *          version during normal operation.</p>
   */
  SoftwareVersion?: string;
}

export namespace Gateway {
  export const filterSensitiveLog = (obj: Gateway): any => ({
    ...obj,
  });
}

export interface GetGatewayResponse {
  /**
   * <p>The details of the gateway.</p>
   */
  Gateway?: Gateway;
}

export namespace GetGatewayResponse {
  export const filterSensitiveLog = (obj: GetGatewayResponse): any => ({
    ...obj,
  });
}

export interface GetGatewayGroupRequest {
  /**
   * <p>The ARN of the gateway group to get.</p>
   */
  GatewayGroupArn: string | undefined;
}

export namespace GetGatewayGroupRequest {
  export const filterSensitiveLog = (obj: GetGatewayGroupRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The details of the gateway group.</p>
 */
export interface GatewayGroup {
  /**
   * <p>The ARN of the gateway group.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the gateway group.</p>
   */
  Name?: string;

  /**
   * <p>The description of the gateway group.</p>
   */
  Description?: string;
}

export namespace GatewayGroup {
  export const filterSensitiveLog = (obj: GatewayGroup): any => ({
    ...obj,
  });
}

export interface GetGatewayGroupResponse {
  /**
   * <p>The details of the gateway group.</p>
   */
  GatewayGroup?: GatewayGroup;
}

export namespace GetGatewayGroupResponse {
  export const filterSensitiveLog = (obj: GetGatewayGroupResponse): any => ({
    ...obj,
  });
}

export interface GetInvitationConfigurationRequest {}

export namespace GetInvitationConfigurationRequest {
  export const filterSensitiveLog = (obj: GetInvitationConfigurationRequest): any => ({
    ...obj,
  });
}

export interface GetInvitationConfigurationResponse {
  /**
   * <p>The name of the organization sending the enrollment invite to a user.</p>
   */
  OrganizationName?: string;

  /**
   * <p>The email ID of the organization or individual contact that the enrolled user can use.
   *       </p>
   */
  ContactEmail?: string;

  /**
   * <p>The list of private skill IDs that you want to recommend to the user to enable in the
   *          invitation.</p>
   */
  PrivateSkillIds?: string[];
}

export namespace GetInvitationConfigurationResponse {
  export const filterSensitiveLog = (obj: GetInvitationConfigurationResponse): any => ({
    ...obj,
  });
}

export interface GetNetworkProfileRequest {
  /**
   * <p>The ARN of the network profile associated with a device.</p>
   */
  NetworkProfileArn: string | undefined;
}

export namespace GetNetworkProfileRequest {
  export const filterSensitiveLog = (obj: GetNetworkProfileRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The network profile associated with a device.</p>
 */
export interface NetworkProfile {
  /**
   * <p>The ARN of the network profile associated with a device.</p>
   */
  NetworkProfileArn?: string;

  /**
   * <p>The name of the network profile associated with a device.</p>
   */
  NetworkProfileName?: string;

  /**
   * <p>Detailed information about a device's network profile.</p>
   */
  Description?: string;

  /**
   * <p>The SSID of the Wi-Fi network.</p>
   */
  Ssid?: string;

  /**
   * <p>The security type of the Wi-Fi network. This can be WPA2_ENTERPRISE, WPA2_PSK, WPA_PSK,
   *          WEP, or OPEN.</p>
   */
  SecurityType?: NetworkSecurityType | string;

  /**
   * <p>The authentication standard that is used in the EAP framework. Currently, EAP_TLS is
   *          supported. </p>
   */
  EapMethod?: NetworkEapMethod | string;

  /**
   * <p>The current password of the Wi-Fi network.</p>
   */
  CurrentPassword?: string;

  /**
   * <p>The next, or subsequent, password of the Wi-Fi network. This password is asynchronously
   *          transmitted to the device and is used when the password of the network changes to
   *          NextPassword. </p>
   */
  NextPassword?: string;

  /**
   * <p>The ARN of the Private Certificate Authority (PCA) created in AWS Certificate Manager
   *          (ACM). This is used to issue certificates to the devices. </p>
   */
  CertificateAuthorityArn?: string;

  /**
   * <p>The root certificates of your authentication server, which is installed on your devices
   *          and used to trust your authentication server during EAP negotiation.</p>
   */
  TrustAnchors?: string[];
}

export namespace NetworkProfile {
  export const filterSensitiveLog = (obj: NetworkProfile): any => ({
    ...obj,
    ...(obj.CurrentPassword && { CurrentPassword: SENSITIVE_STRING }),
    ...(obj.NextPassword && { NextPassword: SENSITIVE_STRING }),
  });
}

export interface GetNetworkProfileResponse {
  /**
   * <p>The network profile associated with a device.</p>
   */
  NetworkProfile?: NetworkProfile;
}

export namespace GetNetworkProfileResponse {
  export const filterSensitiveLog = (obj: GetNetworkProfileResponse): any => ({
    ...obj,
    ...(obj.NetworkProfile && { NetworkProfile: NetworkProfile.filterSensitiveLog(obj.NetworkProfile) }),
  });
}

/**
 * <p>A password in SecretsManager is in an invalid state.</p>
 */
export interface InvalidSecretsManagerResourceException extends __SmithyException, $MetadataBearer {
  name: "InvalidSecretsManagerResourceException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidSecretsManagerResourceException {
  export const filterSensitiveLog = (obj: InvalidSecretsManagerResourceException): any => ({
    ...obj,
  });
}

export interface GetProfileRequest {
  /**
   * <p>The ARN of the room profile for which to request details. Required.</p>
   */
  ProfileArn?: string;
}

export namespace GetProfileRequest {
  export const filterSensitiveLog = (obj: GetProfileRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Settings for the end of meeting reminder feature that are applied to a room profile. The
 *          end of meeting reminder enables Alexa to remind users when a meeting is ending. </p>
 */
export interface EndOfMeetingReminder {
  /**
   * <p>A range of 3 to 15 minutes that determines when the reminder begins.</p>
   */
  ReminderAtMinutes?: number[];

  /**
   * <p>The type of sound that users hear during the end of meeting reminder. </p>
   */
  ReminderType?: EndOfMeetingReminderType | string;

  /**
   * <p>Whether an end of meeting reminder is enabled or not.</p>
   */
  Enabled?: boolean;
}

export namespace EndOfMeetingReminder {
  export const filterSensitiveLog = (obj: EndOfMeetingReminder): any => ({
    ...obj,
  });
}

/**
 * <p>Settings for the instant booking feature that are applied to a room profile. When users
 *          start their meeting with Alexa, Alexa  automatically books the room for the configured
 *          duration if the room is available.</p>
 */
export interface InstantBooking {
  /**
   * <p>Duration between 15 and 240 minutes at increments of 15 that determines how long to book
   *          an available room when a meeting is started with Alexa. </p>
   */
  DurationInMinutes?: number;

  /**
   * <p>Whether instant booking is enabled or not.</p>
   */
  Enabled?: boolean;
}

export namespace InstantBooking {
  export const filterSensitiveLog = (obj: InstantBooking): any => ({
    ...obj,
  });
}

/**
 * <p>Settings for the require check in feature that are applied to a room profile. Require check in allows a meeting room’s Alexa or AVS device to prompt the user to check in; otherwise, the room will be released. </p>
 */
export interface RequireCheckIn {
  /**
   * <p>Duration between 5 and 20 minutes to determine when to release the room if it's not checked into. </p>
   */
  ReleaseAfterMinutes?: number;

  /**
   * <p>Whether require check in is enabled or not.</p>
   */
  Enabled?: boolean;
}

export namespace RequireCheckIn {
  export const filterSensitiveLog = (obj: RequireCheckIn): any => ({
    ...obj,
  });
}

/**
 * <p>Meeting room settings of a room profile.</p>
 */
export interface MeetingRoomConfiguration {
  /**
   * <p>Whether room utilization metrics are enabled or not.</p>
   */
  RoomUtilizationMetricsEnabled?: boolean;

  /**
   * <p>Settings for the end of meeting reminder feature that are applied to a room profile. The
   *          end of meeting reminder enables Alexa to remind users when a meeting is ending. </p>
   */
  EndOfMeetingReminder?: EndOfMeetingReminder;

  /**
   * <p>Settings to automatically book the room if available for a configured duration when
   *          joining a meeting with Alexa. </p>
   */
  InstantBooking?: InstantBooking;

  /**
   * <p>Settings for requiring a check in when a room is reserved. Alexa can cancel a room
   *          reservation if it's not checked into. This makes the room available for others. Users can
   *          check in by joining the meeting with Alexa or an AVS device, or by saying “Alexa, check
   *          in.” </p>
   */
  RequireCheckIn?: RequireCheckIn;
}

export namespace MeetingRoomConfiguration {
  export const filterSensitiveLog = (obj: MeetingRoomConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>A room profile with attributes.</p>
 */
export interface Profile {
  /**
   * <p>The ARN of a room profile.</p>
   */
  ProfileArn?: string;

  /**
   * <p>The name of a room profile.</p>
   */
  ProfileName?: string;

  /**
   * <p>Retrieves if the profile is default or not.</p>
   */
  IsDefault?: boolean;

  /**
   * <p>The address of a room profile.</p>
   */
  Address?: string;

  /**
   * <p>The time zone of a room profile.</p>
   */
  Timezone?: string;

  /**
   * <p>The distance unit of a room profile.</p>
   */
  DistanceUnit?: DistanceUnit | string;

  /**
   * <p>The temperature unit of a room profile.</p>
   */
  TemperatureUnit?: TemperatureUnit | string;

  /**
   * <p>The wake word of a room profile.</p>
   */
  WakeWord?: WakeWord | string;

  /**
   * <p>The locale of a room profile. (This is currently available only to a limited preview
   *          audience.)</p>
   */
  Locale?: string;

  /**
   * <p>The setup mode of a room profile.</p>
   */
  SetupModeDisabled?: boolean;

  /**
   * <p>The max volume limit of a room profile.</p>
   */
  MaxVolumeLimit?: number;

  /**
   * <p>The PSTN setting of a room profile.</p>
   */
  PSTNEnabled?: boolean;

  /**
   * <p>The ARN of the address book.</p>
   */
  AddressBookArn?: string;

  /**
   * <p>Meeting room settings of a room profile.</p>
   */
  MeetingRoomConfiguration?: MeetingRoomConfiguration;
}

export namespace Profile {
  export const filterSensitiveLog = (obj: Profile): any => ({
    ...obj,
  });
}

export interface GetProfileResponse {
  /**
   * <p>The details of the room profile requested. Required.</p>
   */
  Profile?: Profile;
}

export namespace GetProfileResponse {
  export const filterSensitiveLog = (obj: GetProfileResponse): any => ({
    ...obj,
  });
}

export interface GetRoomRequest {
  /**
   * <p>The ARN of the room for which to request details. Required.</p>
   */
  RoomArn?: string;
}

export namespace GetRoomRequest {
  export const filterSensitiveLog = (obj: GetRoomRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A room with attributes.</p>
 */
export interface Room {
  /**
   * <p>The ARN of a room.</p>
   */
  RoomArn?: string;

  /**
   * <p>The name of a room.</p>
   */
  RoomName?: string;

  /**
   * <p>The description of a room.</p>
   */
  Description?: string;

  /**
   * <p>The provider calendar ARN of a room.</p>
   */
  ProviderCalendarId?: string;

  /**
   * <p>The profile ARN of a room.</p>
   */
  ProfileArn?: string;
}

export namespace Room {
  export const filterSensitiveLog = (obj: Room): any => ({
    ...obj,
  });
}

export interface GetRoomResponse {
  /**
   * <p>The details of the room requested.</p>
   */
  Room?: Room;
}

export namespace GetRoomResponse {
  export const filterSensitiveLog = (obj: GetRoomResponse): any => ({
    ...obj,
  });
}

export interface GetRoomSkillParameterRequest {
  /**
   * <p>The ARN of the room from which to get the room skill parameter details. </p>
   */
  RoomArn?: string;

  /**
   * <p>The ARN of the skill from which to get the room skill parameter details.
   *          Required.</p>
   */
  SkillId: string | undefined;

  /**
   * <p>The room skill parameter key for which to get details. Required.</p>
   */
  ParameterKey: string | undefined;
}

export namespace GetRoomSkillParameterRequest {
  export const filterSensitiveLog = (obj: GetRoomSkillParameterRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A skill parameter associated with a room.</p>
 */
export interface RoomSkillParameter {
  /**
   * <p>The parameter key of a room skill parameter. ParameterKey is an enumerated type that
   *          only takes “DEFAULT” or “SCOPE” as valid values.</p>
   */
  ParameterKey: string | undefined;

  /**
   * <p>The parameter value of a room skill parameter.</p>
   */
  ParameterValue: string | undefined;
}

export namespace RoomSkillParameter {
  export const filterSensitiveLog = (obj: RoomSkillParameter): any => ({
    ...obj,
  });
}

export interface GetRoomSkillParameterResponse {
  /**
   * <p>The details of the room skill parameter requested. Required.</p>
   */
  RoomSkillParameter?: RoomSkillParameter;
}

export namespace GetRoomSkillParameterResponse {
  export const filterSensitiveLog = (obj: GetRoomSkillParameterResponse): any => ({
    ...obj,
  });
}

export interface GetSkillGroupRequest {
  /**
   * <p>The ARN of the skill group for which to get details. Required.</p>
   */
  SkillGroupArn?: string;
}

export namespace GetSkillGroupRequest {
  export const filterSensitiveLog = (obj: GetSkillGroupRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A skill group with attributes.</p>
 */
export interface SkillGroup {
  /**
   * <p>The ARN of a skill group.</p>
   */
  SkillGroupArn?: string;

  /**
   * <p>The name of a skill group.</p>
   */
  SkillGroupName?: string;

  /**
   * <p>The description of a skill group.</p>
   */
  Description?: string;
}

export namespace SkillGroup {
  export const filterSensitiveLog = (obj: SkillGroup): any => ({
    ...obj,
  });
}

export interface GetSkillGroupResponse {
  /**
   * <p>The details of the skill group requested. Required.</p>
   */
  SkillGroup?: SkillGroup;
}

export namespace GetSkillGroupResponse {
  export const filterSensitiveLog = (obj: GetSkillGroupResponse): any => ({
    ...obj,
  });
}

export interface ListBusinessReportSchedulesRequest {
  /**
   * <p>The token used to list the remaining schedules from the previous API call.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of schedules listed in the call.</p>
   */
  MaxResults?: number;
}

export namespace ListBusinessReportSchedulesRequest {
  export const filterSensitiveLog = (obj: ListBusinessReportSchedulesRequest): any => ({
    ...obj,
  });
}

export enum BusinessReportFailureCode {
  ACCESS_DENIED = "ACCESS_DENIED",
  INTERNAL_FAILURE = "INTERNAL_FAILURE",
  NO_SUCH_BUCKET = "NO_SUCH_BUCKET",
}

/**
 * <p>The S3 location of the output reports.</p>
 */
export interface BusinessReportS3Location {
  /**
   * <p>The path of the business report.</p>
   */
  Path?: string;

  /**
   * <p>The S3 bucket name of the output reports.</p>
   */
  BucketName?: string;
}

export namespace BusinessReportS3Location {
  export const filterSensitiveLog = (obj: BusinessReportS3Location): any => ({
    ...obj,
  });
}

export enum BusinessReportStatus {
  FAILED = "FAILED",
  RUNNING = "RUNNING",
  SUCCEEDED = "SUCCEEDED",
}

/**
 * <p>Usage report with specified parameters.</p>
 */
export interface BusinessReport {
  /**
   * <p>The status of the report generation execution (RUNNING, SUCCEEDED, or
   *          FAILED).</p>
   */
  Status?: BusinessReportStatus | string;

  /**
   * <p>The failure code.</p>
   */
  FailureCode?: BusinessReportFailureCode | string;

  /**
   * <p>The S3 location of the output reports.</p>
   */
  S3Location?: BusinessReportS3Location;

  /**
   * <p>The time of report delivery.</p>
   */
  DeliveryTime?: Date;

  /**
   * <p>The download link where a user can download the report.</p>
   */
  DownloadUrl?: string;
}

export namespace BusinessReport {
  export const filterSensitiveLog = (obj: BusinessReport): any => ({
    ...obj,
  });
}

/**
 * <p>The schedule of the usage report.</p>
 */
export interface BusinessReportSchedule {
  /**
   * <p>The ARN of the business report schedule.</p>
   */
  ScheduleArn?: string;

  /**
   * <p>The name identifier of the schedule.</p>
   */
  ScheduleName?: string;

  /**
   * <p>The S3 bucket name of the output reports.</p>
   */
  S3BucketName?: string;

  /**
   * <p>The S3 key where the report is delivered.</p>
   */
  S3KeyPrefix?: string;

  /**
   * <p>The format of the generated report (individual CSV files or zipped files of
   *          individual files).</p>
   */
  Format?: BusinessReportFormat | string;

  /**
   * <p>The content range of the reports.</p>
   */
  ContentRange?: BusinessReportContentRange;

  /**
   * <p>The recurrence of the reports.</p>
   */
  Recurrence?: BusinessReportRecurrence;

  /**
   * <p>The details of the last business report delivery for a specified time
   *          interval.</p>
   */
  LastBusinessReport?: BusinessReport;
}

export namespace BusinessReportSchedule {
  export const filterSensitiveLog = (obj: BusinessReportSchedule): any => ({
    ...obj,
  });
}

export interface ListBusinessReportSchedulesResponse {
  /**
   * <p>The schedule of the reports.</p>
   */
  BusinessReportSchedules?: BusinessReportSchedule[];

  /**
   * <p>The token used to list the remaining schedules from the previous API call.</p>
   */
  NextToken?: string;
}

export namespace ListBusinessReportSchedulesResponse {
  export const filterSensitiveLog = (obj: ListBusinessReportSchedulesResponse): any => ({
    ...obj,
  });
}

export interface ListConferenceProvidersRequest {
  /**
   * <p>The tokens used for pagination.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of conference providers to be returned, per paginated
   *          calls.</p>
   */
  MaxResults?: number;
}

export namespace ListConferenceProvidersRequest {
  export const filterSensitiveLog = (obj: ListConferenceProvidersRequest): any => ({
    ...obj,
  });
}

export interface ListConferenceProvidersResponse {
  /**
   * <p>The conference providers.</p>
   */
  ConferenceProviders?: ConferenceProvider[];

  /**
   * <p>The tokens used for pagination.</p>
   */
  NextToken?: string;
}

export namespace ListConferenceProvidersResponse {
  export const filterSensitiveLog = (obj: ListConferenceProvidersResponse): any => ({
    ...obj,
  });
}

export enum DeviceEventType {
  CONNECTION_STATUS = "CONNECTION_STATUS",
  DEVICE_STATUS = "DEVICE_STATUS",
}

export interface ListDeviceEventsRequest {
  /**
   * <p>The ARN of a device.</p>
   */
  DeviceArn: string | undefined;

  /**
   * <p>The event type to filter device events. If EventType isn't specified, this returns a
   *          list of all device events in reverse chronological order. If EventType is specified, this
   *          returns a list of device events for that EventType in reverse chronological order.
   *       </p>
   */
  EventType?: DeviceEventType | string;

  /**
   * <p>An optional token returned from a prior request. Use this token for pagination of
   *          results from this action. If this parameter is specified, the response only includes
   *          results beyond the token, up to the value specified by MaxResults. When the end of results
   *          is reached, the response has a value of null.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to include in the response. The default value is 50. If
   *          more results exist than the specified MaxResults value, a token is included in the response
   *          so that the remaining results can be retrieved. </p>
   */
  MaxResults?: number;
}

export namespace ListDeviceEventsRequest {
  export const filterSensitiveLog = (obj: ListDeviceEventsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The list of device events.</p>
 */
export interface DeviceEvent {
  /**
   * <p>The type of device event.</p>
   */
  Type?: DeviceEventType | string;

  /**
   * <p>The value of the event.</p>
   */
  Value?: string;

  /**
   * <p>The time (in epoch) when the event occurred. </p>
   */
  Timestamp?: Date;
}

export namespace DeviceEvent {
  export const filterSensitiveLog = (obj: DeviceEvent): any => ({
    ...obj,
  });
}

export interface ListDeviceEventsResponse {
  /**
   * <p>The device events requested for the device ARN.</p>
   */
  DeviceEvents?: DeviceEvent[];

  /**
   * <p>The token returned to indicate that there is more data available.</p>
   */
  NextToken?: string;
}

export namespace ListDeviceEventsResponse {
  export const filterSensitiveLog = (obj: ListDeviceEventsResponse): any => ({
    ...obj,
  });
}

export interface ListGatewayGroupsRequest {
  /**
   * <p>The token used to paginate though multiple pages of gateway group summaries.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of gateway group summaries to return. The default is 50.</p>
   */
  MaxResults?: number;
}

export namespace ListGatewayGroupsRequest {
  export const filterSensitiveLog = (obj: ListGatewayGroupsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The summary of a gateway group.</p>
 */
export interface GatewayGroupSummary {
  /**
   * <p>The ARN of the gateway group.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the gateway group.</p>
   */
  Name?: string;

  /**
   * <p>The description of the gateway group.</p>
   */
  Description?: string;
}

export namespace GatewayGroupSummary {
  export const filterSensitiveLog = (obj: GatewayGroupSummary): any => ({
    ...obj,
  });
}

export interface ListGatewayGroupsResponse {
  /**
   * <p>The gateway groups in the list.</p>
   */
  GatewayGroups?: GatewayGroupSummary[];

  /**
   * <p>The token used to paginate though multiple pages of gateway group summaries.</p>
   */
  NextToken?: string;
}

export namespace ListGatewayGroupsResponse {
  export const filterSensitiveLog = (obj: ListGatewayGroupsResponse): any => ({
    ...obj,
  });
}

export interface ListGatewaysRequest {
  /**
   * <p>The gateway group ARN for which to list gateways.</p>
   */
  GatewayGroupArn?: string;

  /**
   * <p>The token used to paginate though multiple pages of gateway summaries.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of gateway summaries to return. The default is 50.</p>
   */
  MaxResults?: number;
}

export namespace ListGatewaysRequest {
  export const filterSensitiveLog = (obj: ListGatewaysRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The summary of a gateway.</p>
 */
export interface GatewaySummary {
  /**
   * <p>The ARN of the gateway.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the gateway.</p>
   */
  Name?: string;

  /**
   * <p>The description of the gateway.</p>
   */
  Description?: string;

  /**
   * <p>The ARN of the gateway group that the gateway is associated to.</p>
   */
  GatewayGroupArn?: string;

  /**
   * <p>The software version of the gateway. The gateway automatically updates its software
   *          version during normal operation.</p>
   */
  SoftwareVersion?: string;
}

export namespace GatewaySummary {
  export const filterSensitiveLog = (obj: GatewaySummary): any => ({
    ...obj,
  });
}

export interface ListGatewaysResponse {
  /**
   * <p>The gateways in the list.</p>
   */
  Gateways?: GatewaySummary[];

  /**
   * <p>The token used to paginate though multiple pages of gateway summaries.</p>
   */
  NextToken?: string;
}

export namespace ListGatewaysResponse {
  export const filterSensitiveLog = (obj: ListGatewaysResponse): any => ({
    ...obj,
  });
}

export enum EnablementTypeFilter {
  ENABLED = "ENABLED",
  PENDING = "PENDING",
}

export enum SkillTypeFilter {
  ALL = "ALL",
  PRIVATE = "PRIVATE",
  PUBLIC = "PUBLIC",
}

export interface ListSkillsRequest {
  /**
   * <p>The ARN of the skill group for which to list enabled skills.</p>
   */
  SkillGroupArn?: string;

  /**
   * <p>Whether the skill is enabled under the user's account.</p>
   */
  EnablementType?: EnablementTypeFilter | string;

  /**
   * <p>Whether the skill is publicly available or is a private skill.</p>
   */
  SkillType?: SkillTypeFilter | string;

  /**
   * <p>An optional token returned from a prior request. Use this token for pagination of
   *          results from this action. If this parameter is specified, the response includes only
   *          results beyond the token, up to the value specified by <code>MaxResults</code>.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to include in the response. If more results exist than
   *          the specified <code>MaxResults</code> value, a token is included in the response so that
   *          the remaining results can be retrieved.</p>
   */
  MaxResults?: number;
}

export namespace ListSkillsRequest {
  export const filterSensitiveLog = (obj: ListSkillsRequest): any => ({
    ...obj,
  });
}

export enum EnablementType {
  ENABLED = "ENABLED",
  PENDING = "PENDING",
}

export enum SkillType {
  PRIVATE = "PRIVATE",
  PUBLIC = "PUBLIC",
}

/**
 * <p>The summary of skills.</p>
 */
export interface SkillSummary {
  /**
   * <p>The ARN of the skill summary.</p>
   */
  SkillId?: string;

  /**
   * <p>The name of the skill.</p>
   */
  SkillName?: string;

  /**
   * <p>Linking support for a skill.</p>
   */
  SupportsLinking?: boolean;

  /**
   * <p>Whether the skill is enabled under the user's account, or if it requires linking to be
   *          used.</p>
   */
  EnablementType?: EnablementType | string;

  /**
   * <p>Whether the skill is publicly available or is a private skill.</p>
   */
  SkillType?: SkillType | string;
}

export namespace SkillSummary {
  export const filterSensitiveLog = (obj: SkillSummary): any => ({
    ...obj,
  });
}

export interface ListSkillsResponse {
  /**
   * <p>The list of enabled skills requested. Required.</p>
   */
  SkillSummaries?: SkillSummary[];

  /**
   * <p>The token returned to indicate that there is more data available.</p>
   */
  NextToken?: string;
}

export namespace ListSkillsResponse {
  export const filterSensitiveLog = (obj: ListSkillsResponse): any => ({
    ...obj,
  });
}

export interface ListSkillsStoreCategoriesRequest {
  /**
   * <p>The tokens used for pagination.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of categories returned, per paginated calls.</p>
   */
  MaxResults?: number;
}

export namespace ListSkillsStoreCategoriesRequest {
  export const filterSensitiveLog = (obj: ListSkillsStoreCategoriesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The skill store category that is shown. Alexa skills are assigned a specific skill
 *          category during creation, such as News, Social, and Sports.</p>
 */
export interface Category {
  /**
   * <p>The ID of the skill store category.</p>
   */
  CategoryId?: number;

  /**
   * <p>The name of the skill store category.</p>
   */
  CategoryName?: string;
}

export namespace Category {
  export const filterSensitiveLog = (obj: Category): any => ({
    ...obj,
  });
}

export interface ListSkillsStoreCategoriesResponse {
  /**
   * <p>The list of categories.</p>
   */
  CategoryList?: Category[];

  /**
   * <p>The tokens used for pagination.</p>
   */
  NextToken?: string;
}

export namespace ListSkillsStoreCategoriesResponse {
  export const filterSensitiveLog = (obj: ListSkillsStoreCategoriesResponse): any => ({
    ...obj,
  });
}

export interface ListSkillsStoreSkillsByCategoryRequest {
  /**
   * <p>The category ID for which the skills are being retrieved from the skill
   *          store.</p>
   */
  CategoryId: number | undefined;

  /**
   * <p>The tokens used for pagination.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of skills returned per paginated calls.</p>
   */
  MaxResults?: number;
}

export namespace ListSkillsStoreSkillsByCategoryRequest {
  export const filterSensitiveLog = (obj: ListSkillsStoreSkillsByCategoryRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The details about the developer that published the skill.</p>
 */
export interface DeveloperInfo {
  /**
   * <p>The name of the developer.</p>
   */
  DeveloperName?: string;

  /**
   * <p>The URL of the privacy policy.</p>
   */
  PrivacyPolicy?: string;

  /**
   * <p>The email of the developer.</p>
   */
  Email?: string;

  /**
   * <p>The website of the developer.</p>
   */
  Url?: string;
}

export namespace DeveloperInfo {
  export const filterSensitiveLog = (obj: DeveloperInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Granular information about the skill.</p>
 */
export interface SkillDetails {
  /**
   * <p>The description of the product.</p>
   */
  ProductDescription?: string;

  /**
   * <p>The phrase used to trigger the skill.</p>
   */
  InvocationPhrase?: string;

  /**
   * <p>The date when the skill was released.</p>
   */
  ReleaseDate?: string;

  /**
   * <p>The URL of the end user license agreement.</p>
   */
  EndUserLicenseAgreement?: string;

  /**
   * <p>The generic keywords associated with the skill that can be used to find a
   *          skill.</p>
   */
  GenericKeywords?: string[];

  /**
   * <p>The details about what the skill supports organized as bullet points.</p>
   */
  BulletPoints?: string[];

  /**
   * <p>The updates added in bullet points.</p>
   */
  NewInThisVersionBulletPoints?: string[];

  /**
   * <p>The types of skills.</p>
   */
  SkillTypes?: string[];

  /**
   * <p>
   *             <i>This member has been deprecated.</i>
   *          </p>
   *          <p>The list of reviews for the skill, including Key and Value pair.</p>
   */
  Reviews?: { [key: string]: string };

  /**
   * <p>The details about the developer that published the skill.</p>
   */
  DeveloperInfo?: DeveloperInfo;
}

export namespace SkillDetails {
  export const filterSensitiveLog = (obj: SkillDetails): any => ({
    ...obj,
  });
}

/**
 * <p>The detailed information about an Alexa skill.</p>
 */
export interface SkillsStoreSkill {
  /**
   * <p>The ARN of the skill.</p>
   */
  SkillId?: string;

  /**
   * <p>The name of the skill.</p>
   */
  SkillName?: string;

  /**
   * <p>Short description about the skill.</p>
   */
  ShortDescription?: string;

  /**
   * <p>The URL where the skill icon resides.</p>
   */
  IconUrl?: string;

  /**
   * <p>Sample utterances that interact with the skill.</p>
   */
  SampleUtterances?: string[];

  /**
   * <p>Information about the skill.</p>
   */
  SkillDetails?: SkillDetails;

  /**
   * <p>Linking support for a skill.</p>
   */
  SupportsLinking?: boolean;
}

export namespace SkillsStoreSkill {
  export const filterSensitiveLog = (obj: SkillsStoreSkill): any => ({
    ...obj,
  });
}

export interface ListSkillsStoreSkillsByCategoryResponse {
  /**
   * <p>The skill store skills.</p>
   */
  SkillsStoreSkills?: SkillsStoreSkill[];

  /**
   * <p>The tokens used for pagination.</p>
   */
  NextToken?: string;
}

export namespace ListSkillsStoreSkillsByCategoryResponse {
  export const filterSensitiveLog = (obj: ListSkillsStoreSkillsByCategoryResponse): any => ({
    ...obj,
  });
}

export interface ListSmartHomeAppliancesRequest {
  /**
   * <p>The room that the appliances are associated with.</p>
   */
  RoomArn: string | undefined;

  /**
   * <p>The maximum number of appliances to be returned, per paginated calls.</p>
   */
  MaxResults?: number;

  /**
   * <p>The tokens used for pagination.</p>
   */
  NextToken?: string;
}

export namespace ListSmartHomeAppliancesRequest {
  export const filterSensitiveLog = (obj: ListSmartHomeAppliancesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A smart home appliance that can connect to a central system. Any domestic device can be
 *          a smart appliance. </p>
 */
export interface SmartHomeAppliance {
  /**
   * <p>The friendly name of the smart home appliance.</p>
   */
  FriendlyName?: string;

  /**
   * <p>The description of the smart home appliance.</p>
   */
  Description?: string;

  /**
   * <p>The name of the manufacturer of the smart home appliance.</p>
   */
  ManufacturerName?: string;
}

export namespace SmartHomeAppliance {
  export const filterSensitiveLog = (obj: SmartHomeAppliance): any => ({
    ...obj,
  });
}

export interface ListSmartHomeAppliancesResponse {
  /**
   * <p>The smart home appliances.</p>
   */
  SmartHomeAppliances?: SmartHomeAppliance[];

  /**
   * <p>The tokens used for pagination.</p>
   */
  NextToken?: string;
}

export namespace ListSmartHomeAppliancesResponse {
  export const filterSensitiveLog = (obj: ListSmartHomeAppliancesResponse): any => ({
    ...obj,
  });
}

export interface ListTagsRequest {
  /**
   * <p>The ARN of the specified resource for which to list tags.</p>
   */
  Arn: string | undefined;

  /**
   * <p>An optional token returned from a prior request. Use this token for pagination of
   *          results from this action. If this parameter is specified, the response includes only
   *          results beyond the token, up to the value specified by <code>MaxResults</code>. </p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to include in the response. If more results exist than
   *          the specified <code>MaxResults</code> value, a token is included in the response so that
   *          the remaining results can be retrieved.</p>
   */
  MaxResults?: number;
}

export namespace ListTagsRequest {
  export const filterSensitiveLog = (obj: ListTagsRequest): any => ({
    ...obj,
  });
}

export interface ListTagsResponse {
  /**
   * <p>The tags requested for the specified resource.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The token returned to indicate that there is more data available.</p>
   */
  NextToken?: string;
}

export namespace ListTagsResponse {
  export const filterSensitiveLog = (obj: ListTagsResponse): any => ({
    ...obj,
  });
}

export interface PutConferencePreferenceRequest {
  /**
   * <p>The conference preference of a specific conference provider.</p>
   */
  ConferencePreference: ConferencePreference | undefined;
}

export namespace PutConferencePreferenceRequest {
  export const filterSensitiveLog = (obj: PutConferencePreferenceRequest): any => ({
    ...obj,
  });
}

export interface PutConferencePreferenceResponse {}

export namespace PutConferencePreferenceResponse {
  export const filterSensitiveLog = (obj: PutConferencePreferenceResponse): any => ({
    ...obj,
  });
}

export interface PutInvitationConfigurationRequest {
  /**
   * <p>The name of the organization sending the enrollment invite to a user.</p>
   */
  OrganizationName: string | undefined;

  /**
   * <p>The email ID of the organization or individual contact that the enrolled user can use.
   *       </p>
   */
  ContactEmail?: string;

  /**
   * <p>The list of private skill IDs that you want to recommend to the user to enable in the
   *          invitation.</p>
   */
  PrivateSkillIds?: string[];
}

export namespace PutInvitationConfigurationRequest {
  export const filterSensitiveLog = (obj: PutInvitationConfigurationRequest): any => ({
    ...obj,
  });
}

export interface PutInvitationConfigurationResponse {}

export namespace PutInvitationConfigurationResponse {
  export const filterSensitiveLog = (obj: PutInvitationConfigurationResponse): any => ({
    ...obj,
  });
}

export interface PutRoomSkillParameterRequest {
  /**
   * <p>The ARN of the room associated with the room skill parameter. Required.</p>
   */
  RoomArn?: string;

  /**
   * <p>The ARN of the skill associated with the room skill parameter. Required.</p>
   */
  SkillId: string | undefined;

  /**
   * <p>The updated room skill parameter. Required.</p>
   */
  RoomSkillParameter: RoomSkillParameter | undefined;
}

export namespace PutRoomSkillParameterRequest {
  export const filterSensitiveLog = (obj: PutRoomSkillParameterRequest): any => ({
    ...obj,
  });
}

export interface PutRoomSkillParameterResponse {}

export namespace PutRoomSkillParameterResponse {
  export const filterSensitiveLog = (obj: PutRoomSkillParameterResponse): any => ({
    ...obj,
  });
}

export interface PutSkillAuthorizationRequest {
  /**
   * <p>The authorization result specific to OAUTH code grant output. "Code” must be
   *          populated in the AuthorizationResult map to establish the authorization.</p>
   */
  AuthorizationResult: { [key: string]: string } | undefined;

  /**
   * <p>The unique identifier of a skill.</p>
   */
  SkillId: string | undefined;

  /**
   * <p>The room that the skill is authorized for.</p>
   */
  RoomArn?: string;
}

export namespace PutSkillAuthorizationRequest {
  export const filterSensitiveLog = (obj: PutSkillAuthorizationRequest): any => ({
    ...obj,
    ...(obj.AuthorizationResult && { AuthorizationResult: SENSITIVE_STRING }),
  });
}

export interface PutSkillAuthorizationResponse {}

export namespace PutSkillAuthorizationResponse {
  export const filterSensitiveLog = (obj: PutSkillAuthorizationResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The caller has no permissions to operate on the resource involved in the API call.</p>
 */
export interface UnauthorizedException extends __SmithyException, $MetadataBearer {
  name: "UnauthorizedException";
  $fault: "client";
  Message?: string;
}

export namespace UnauthorizedException {
  export const filterSensitiveLog = (obj: UnauthorizedException): any => ({
    ...obj,
  });
}

/**
 * <p>The device is in an invalid state.</p>
 */
export interface InvalidDeviceException extends __SmithyException, $MetadataBearer {
  name: "InvalidDeviceException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidDeviceException {
  export const filterSensitiveLog = (obj: InvalidDeviceException): any => ({
    ...obj,
  });
}

export interface RegisterAVSDeviceRequest {
  /**
   * <p>The client ID of the OEM used for code-based linking authorization on an AVS
   *          device.</p>
   */
  ClientId: string | undefined;

  /**
   * <p>The code that is obtained after your AVS device has made a POST request to LWA as a
   *          part of the Device Authorization Request component of the OAuth code-based linking
   *          specification.</p>
   */
  UserCode: string | undefined;

  /**
   * <p>The product ID used to identify your AVS device during authorization.</p>
   */
  ProductId: string | undefined;

  /**
   * <p>The key generated by the OEM that uniquely identifies a specified instance of your
   *          AVS device.</p>
   */
  DeviceSerialNumber?: string;

  /**
   * <p>The device type ID for your AVS device generated by Amazon when the OEM creates a new
   *          product on Amazon's Developer Console.</p>
   */
  AmazonId: string | undefined;

  /**
   * <p>The ARN of the room with which to associate your AVS device.</p>
   */
  RoomArn?: string;
}

export namespace RegisterAVSDeviceRequest {
  export const filterSensitiveLog = (obj: RegisterAVSDeviceRequest): any => ({
    ...obj,
  });
}

export interface RegisterAVSDeviceResponse {
  /**
   * <p>The ARN of the device.</p>
   */
  DeviceArn?: string;
}

export namespace RegisterAVSDeviceResponse {
  export const filterSensitiveLog = (obj: RegisterAVSDeviceResponse): any => ({
    ...obj,
  });
}

export interface RejectSkillRequest {
  /**
   * <p>The unique identifier of the skill.</p>
   */
  SkillId: string | undefined;
}

export namespace RejectSkillRequest {
  export const filterSensitiveLog = (obj: RejectSkillRequest): any => ({
    ...obj,
  });
}

export interface RejectSkillResponse {}

export namespace RejectSkillResponse {
  export const filterSensitiveLog = (obj: RejectSkillResponse): any => ({
    ...obj,
  });
}

export interface ResolveRoomRequest {
  /**
   * <p>The ARN of the user. Required.</p>
   */
  UserId: string | undefined;

  /**
   * <p>The ARN of the skill that was requested. Required.</p>
   */
  SkillId: string | undefined;
}

export namespace ResolveRoomRequest {
  export const filterSensitiveLog = (obj: ResolveRoomRequest): any => ({
    ...obj,
  });
}

export interface ResolveRoomResponse {
  /**
   * <p>The ARN of the room from which the skill request was invoked.</p>
   */
  RoomArn?: string;

  /**
   * <p>The name of the room from which the skill request was invoked.</p>
   */
  RoomName?: string;

  /**
   * <p>Response to get the room profile request. Required.</p>
   */
  RoomSkillParameters?: RoomSkillParameter[];
}

export namespace ResolveRoomResponse {
  export const filterSensitiveLog = (obj: ResolveRoomResponse): any => ({
    ...obj,
  });
}

export interface RevokeInvitationRequest {
  /**
   * <p>The ARN of the user for whom to revoke an enrollment invitation. Required.</p>
   */
  UserArn?: string;

  /**
   * <p>The ARN of the enrollment invitation to revoke. Required.</p>
   */
  EnrollmentId?: string;
}

export namespace RevokeInvitationRequest {
  export const filterSensitiveLog = (obj: RevokeInvitationRequest): any => ({
    ...obj,
  });
}

export interface RevokeInvitationResponse {}

export namespace RevokeInvitationResponse {
  export const filterSensitiveLog = (obj: RevokeInvitationResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A filter name and value pair that is used to return a more specific list of results.
 *          Filters can be used to match a set of resources by various criteria.</p>
 */
export interface Filter {
  /**
   * <p>The key of a filter.</p>
   */
  Key: string | undefined;

  /**
   * <p>The values of a filter.</p>
   */
  Values: string[] | undefined;
}

export namespace Filter {
  export const filterSensitiveLog = (obj: Filter): any => ({
    ...obj,
  });
}

export enum SortValue {
  ASC = "ASC",
  DESC = "DESC",
}

/**
 * <p>An object representing a sort criteria. </p>
 */
export interface Sort {
  /**
   * <p>The sort key of a sort object.</p>
   */
  Key: string | undefined;

  /**
   * <p>The sort value of a sort object.</p>
   */
  Value: SortValue | string | undefined;
}

export namespace Sort {
  export const filterSensitiveLog = (obj: Sort): any => ({
    ...obj,
  });
}

export interface SearchAddressBooksRequest {
  /**
   * <p>The filters to use to list a specified set of address books. The supported filter key
   *          is AddressBookName.</p>
   */
  Filters?: Filter[];

  /**
   * <p>The sort order to use in listing the specified set of address books. The supported
   *          sort key is AddressBookName.</p>
   */
  SortCriteria?: Sort[];

  /**
   * <p>An optional token returned from a prior request. Use this token for pagination of
   *          results from this action. If this parameter is specified, the response only includes
   *          results beyond the token, up to the value specified by MaxResults.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to include in the response. If more results exist than
   *          the specified MaxResults value, a token is included in the response so that the remaining
   *          results can be retrieved.</p>
   */
  MaxResults?: number;
}

export namespace SearchAddressBooksRequest {
  export const filterSensitiveLog = (obj: SearchAddressBooksRequest): any => ({
    ...obj,
  });
}

export interface SearchAddressBooksResponse {
  /**
   * <p>The address books that meet the specified set of filter criteria, in sort
   *          order.</p>
   */
  AddressBooks?: AddressBookData[];

  /**
   * <p>The token returned to indicate that there is more data available.</p>
   */
  NextToken?: string;

  /**
   * <p>The total number of address books returned.</p>
   */
  TotalCount?: number;
}

export namespace SearchAddressBooksResponse {
  export const filterSensitiveLog = (obj: SearchAddressBooksResponse): any => ({
    ...obj,
  });
}

export interface SearchContactsRequest {
  /**
   * <p>The filters to use to list a specified set of address books. The supported filter
   *          keys are DisplayName, FirstName, LastName, and AddressBookArns.</p>
   */
  Filters?: Filter[];

  /**
   * <p>The sort order to use in listing the specified set of contacts. The supported sort
   *          keys are DisplayName, FirstName, and LastName.</p>
   */
  SortCriteria?: Sort[];

  /**
   * <p>An optional token returned from a prior request. Use this token for pagination of
   *          results from this action. If this parameter is specified, the response only includes
   *          results beyond the token, up to the value specified by MaxResults.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to include in the response. If more results exist than
   *          the specified MaxResults value, a token is included in the response so that the remaining
   *          results can be retrieved.</p>
   */
  MaxResults?: number;
}

export namespace SearchContactsRequest {
  export const filterSensitiveLog = (obj: SearchContactsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Information related to a contact.</p>
 */
export interface ContactData {
  /**
   * <p>The ARN of the contact.</p>
   */
  ContactArn?: string;

  /**
   * <p>The name of the contact to display on the console.</p>
   */
  DisplayName?: string;

  /**
   * <p>The first name of the contact, used to call the contact on the device.</p>
   */
  FirstName?: string;

  /**
   * <p>The last name of the contact, used to call the contact on the device.</p>
   */
  LastName?: string;

  /**
   * <p>The phone number of the contact. The phone number type defaults to WORK. You can
   *          specify PhoneNumber or PhoneNumbers. We recommend that you use PhoneNumbers, which lets you
   *          specify the phone number type and multiple numbers.</p>
   */
  PhoneNumber?: string;

  /**
   * <p>The list of phone numbers for the contact.</p>
   */
  PhoneNumbers?: PhoneNumber[];

  /**
   * <p>The list of SIP addresses for the contact.</p>
   */
  SipAddresses?: SipAddress[];
}

export namespace ContactData {
  export const filterSensitiveLog = (obj: ContactData): any => ({
    ...obj,
    ...(obj.PhoneNumber && { PhoneNumber: SENSITIVE_STRING }),
    ...(obj.PhoneNumbers && { PhoneNumbers: obj.PhoneNumbers.map((item) => PhoneNumber.filterSensitiveLog(item)) }),
    ...(obj.SipAddresses && { SipAddresses: obj.SipAddresses.map((item) => SipAddress.filterSensitiveLog(item)) }),
  });
}

export interface SearchContactsResponse {
  /**
   * <p>The contacts that meet the specified set of filter criteria, in sort order.</p>
   */
  Contacts?: ContactData[];

  /**
   * <p>The token returned to indicate that there is more data available.</p>
   */
  NextToken?: string;

  /**
   * <p>The total number of contacts returned.</p>
   */
  TotalCount?: number;
}

export namespace SearchContactsResponse {
  export const filterSensitiveLog = (obj: SearchContactsResponse): any => ({
    ...obj,
    ...(obj.Contacts && { Contacts: obj.Contacts.map((item) => ContactData.filterSensitiveLog(item)) }),
  });
}

export interface SearchDevicesRequest {
  /**
   * <p>An optional token returned from a prior request. Use this token for pagination of
   *          results from this action. If this parameter is specified, the response includes only
   *          results beyond the token, up to the value specified by <code>MaxResults</code>.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to include in the response. If more results exist than
   *          the specified <code>MaxResults</code> value, a token is included in the response so that
   *          the remaining results can be retrieved.</p>
   */
  MaxResults?: number;

  /**
   * <p>The filters to use to list a specified set of devices. Supported filter keys are
   *          DeviceName, DeviceStatus, DeviceStatusDetailCode, RoomName, DeviceType, DeviceSerialNumber,
   *          UnassociatedOnly, ConnectionStatus (ONLINE and OFFLINE), NetworkProfileName,
   *          NetworkProfileArn, Feature, and FailureCode.</p>
   */
  Filters?: Filter[];

  /**
   * <p>The sort order to use in listing the specified set of devices. Supported sort keys
   *          are DeviceName, DeviceStatus, RoomName, DeviceType, DeviceSerialNumber, ConnectionStatus,
   *          NetworkProfileName, NetworkProfileArn, Feature, and FailureCode.</p>
   */
  SortCriteria?: Sort[];
}

export namespace SearchDevicesRequest {
  export const filterSensitiveLog = (obj: SearchDevicesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Device attributes.</p>
 */
export interface DeviceData {
  /**
   * <p>The ARN of a device.</p>
   */
  DeviceArn?: string;

  /**
   * <p>The serial number of a device.</p>
   */
  DeviceSerialNumber?: string;

  /**
   * <p>The type of a device.</p>
   */
  DeviceType?: string;

  /**
   * <p>The name of a device.</p>
   */
  DeviceName?: string;

  /**
   * <p>The software version of a device.</p>
   */
  SoftwareVersion?: string;

  /**
   * <p>The MAC address of a device.</p>
   */
  MacAddress?: string;

  /**
   * <p>The status of a device.</p>
   */
  DeviceStatus?: DeviceStatus | string;

  /**
   * <p>The ARN of the network profile associated with a device.</p>
   */
  NetworkProfileArn?: string;

  /**
   * <p>The name of the network profile associated with a device.</p>
   */
  NetworkProfileName?: string;

  /**
   * <p>The room ARN associated with a device.</p>
   */
  RoomArn?: string;

  /**
   * <p>The name of the room associated with a device.</p>
   */
  RoomName?: string;

  /**
   * <p>Detailed information about a device's status.</p>
   */
  DeviceStatusInfo?: DeviceStatusInfo;

  /**
   * <p>The time (in epoch) when the device data was created.</p>
   */
  CreatedTime?: Date;
}

export namespace DeviceData {
  export const filterSensitiveLog = (obj: DeviceData): any => ({
    ...obj,
  });
}

export interface SearchDevicesResponse {
  /**
   * <p>The devices that meet the specified set of filter criteria, in sort order.</p>
   */
  Devices?: DeviceData[];

  /**
   * <p>The token returned to indicate that there is more data available.</p>
   */
  NextToken?: string;

  /**
   * <p>The total number of devices returned.</p>
   */
  TotalCount?: number;
}

export namespace SearchDevicesResponse {
  export const filterSensitiveLog = (obj: SearchDevicesResponse): any => ({
    ...obj,
  });
}

export interface SearchNetworkProfilesRequest {
  /**
   * <p>An optional token returned from a prior request. Use this token for pagination of
   *          results from this action. If this parameter is specified, the response includes only
   *          results beyond the token, up to the value specified by MaxResults. </p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to include in the response. If more results exist than the
   *          specified MaxResults value, a token is included in the response so that the remaining
   *          results can be retrieved. </p>
   */
  MaxResults?: number;

  /**
   * <p>The filters to use to list a specified set of network profiles. Valid filters are
   *          NetworkProfileName, Ssid, and SecurityType.</p>
   */
  Filters?: Filter[];

  /**
   * <p>The sort order to use to list the specified set of network profiles. Valid sort criteria
   *          includes NetworkProfileName, Ssid, and SecurityType.</p>
   */
  SortCriteria?: Sort[];
}

export namespace SearchNetworkProfilesRequest {
  export const filterSensitiveLog = (obj: SearchNetworkProfilesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The data associated with a network profile.</p>
 */
export interface NetworkProfileData {
  /**
   * <p>The ARN of the network profile associated with a device.</p>
   */
  NetworkProfileArn?: string;

  /**
   * <p>The name of the network profile associated with a device.</p>
   */
  NetworkProfileName?: string;

  /**
   * <p>Detailed information about a device's network profile.</p>
   */
  Description?: string;

  /**
   * <p>The SSID of the Wi-Fi network.</p>
   */
  Ssid?: string;

  /**
   * <p>The security type of the Wi-Fi network. This can be WPA2_ENTERPRISE, WPA2_PSK, WPA_PSK,
   *          WEP, or OPEN.</p>
   */
  SecurityType?: NetworkSecurityType | string;

  /**
   * <p>The authentication standard that is used in the EAP framework. Currently, EAP_TLS is
   *          supported.</p>
   */
  EapMethod?: NetworkEapMethod | string;

  /**
   * <p>The ARN of the Private Certificate Authority (PCA) created in AWS Certificate Manager
   *          (ACM). This is used to issue certificates to the devices.</p>
   */
  CertificateAuthorityArn?: string;
}

export namespace NetworkProfileData {
  export const filterSensitiveLog = (obj: NetworkProfileData): any => ({
    ...obj,
  });
}

export interface SearchNetworkProfilesResponse {
  /**
   * <p>The network profiles that meet the specified set of filter criteria, in sort order. It
   *          is a list of NetworkProfileData objects. </p>
   */
  NetworkProfiles?: NetworkProfileData[];

  /**
   * <p>An optional token returned from a prior request. Use this token for pagination of
   *          results from this action. If this parameter is specified, the response includes only
   *          results beyond the token, up to the value specified by MaxResults.</p>
   */
  NextToken?: string;

  /**
   * <p>The total number of network profiles returned.</p>
   */
  TotalCount?: number;
}

export namespace SearchNetworkProfilesResponse {
  export const filterSensitiveLog = (obj: SearchNetworkProfilesResponse): any => ({
    ...obj,
  });
}

export interface SearchProfilesRequest {
  /**
   * <p>An optional token returned from a prior request. Use this token for pagination of
   *          results from this action. If this parameter is specified, the response includes only
   *          results beyond the token, up to the value specified by <code>MaxResults</code>.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to include in the response. If more results exist than
   *          the specified <code>MaxResults</code> value, a token is included in the response so that
   *          the remaining results can be retrieved.</p>
   */
  MaxResults?: number;

  /**
   * <p>The filters to use to list a specified set of room profiles. Supported filter keys
   *          are ProfileName and Address. Required. </p>
   */
  Filters?: Filter[];

  /**
   * <p>The sort order to use in listing the specified set of room profiles. Supported sort
   *          keys are ProfileName and Address.</p>
   */
  SortCriteria?: Sort[];
}

export namespace SearchProfilesRequest {
  export const filterSensitiveLog = (obj: SearchProfilesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The data of a room profile.</p>
 */
export interface ProfileData {
  /**
   * <p>The ARN of a room profile.</p>
   */
  ProfileArn?: string;

  /**
   * <p>The name of a room profile.</p>
   */
  ProfileName?: string;

  /**
   * <p>Retrieves if the profile data is default or not.</p>
   */
  IsDefault?: boolean;

  /**
   * <p>The address of a room profile.</p>
   */
  Address?: string;

  /**
   * <p>The time zone of a room profile.</p>
   */
  Timezone?: string;

  /**
   * <p>The distance unit of a room profile.</p>
   */
  DistanceUnit?: DistanceUnit | string;

  /**
   * <p>The temperature unit of a room profile.</p>
   */
  TemperatureUnit?: TemperatureUnit | string;

  /**
   * <p>The wake word of a room profile.</p>
   */
  WakeWord?: WakeWord | string;

  /**
   * <p>The locale of a room profile. (This is currently available only to a limited preview
   *          audience.)</p>
   */
  Locale?: string;
}

export namespace ProfileData {
  export const filterSensitiveLog = (obj: ProfileData): any => ({
    ...obj,
  });
}

export interface SearchProfilesResponse {
  /**
   * <p>The profiles that meet the specified set of filter criteria, in sort order.</p>
   */
  Profiles?: ProfileData[];

  /**
   * <p>The token returned to indicate that there is more data available.</p>
   */
  NextToken?: string;

  /**
   * <p>The total number of room profiles returned.</p>
   */
  TotalCount?: number;
}

export namespace SearchProfilesResponse {
  export const filterSensitiveLog = (obj: SearchProfilesResponse): any => ({
    ...obj,
  });
}

export interface SearchRoomsRequest {
  /**
   * <p>An optional token returned from a prior request. Use this token for pagination of
   *          results from this action. If this parameter is specified, the response includes only
   *          results beyond the token, up to the value specified by <code>MaxResults</code>.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to include in the response. If more results exist than
   *          the specified <code>MaxResults</code> value, a token is included in the response so that
   *          the remaining results can be retrieved. </p>
   */
  MaxResults?: number;

  /**
   * <p>The filters to use to list a specified set of rooms. The supported filter keys are
   *          RoomName and ProfileName.</p>
   */
  Filters?: Filter[];

  /**
   * <p>The sort order to use in listing the specified set of rooms. The supported sort keys
   *          are RoomName and ProfileName.</p>
   */
  SortCriteria?: Sort[];
}

export namespace SearchRoomsRequest {
  export const filterSensitiveLog = (obj: SearchRoomsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The data of a room.</p>
 */
export interface RoomData {
  /**
   * <p>The ARN of a room.</p>
   */
  RoomArn?: string;

  /**
   * <p>The name of a room.</p>
   */
  RoomName?: string;

  /**
   * <p>The description of a room.</p>
   */
  Description?: string;

  /**
   * <p>The provider calendar ARN of a room.</p>
   */
  ProviderCalendarId?: string;

  /**
   * <p>The profile ARN of a room.</p>
   */
  ProfileArn?: string;

  /**
   * <p>The profile name of a room.</p>
   */
  ProfileName?: string;
}

export namespace RoomData {
  export const filterSensitiveLog = (obj: RoomData): any => ({
    ...obj,
  });
}

export interface SearchRoomsResponse {
  /**
   * <p>The rooms that meet the specified set of filter criteria, in sort order.</p>
   */
  Rooms?: RoomData[];

  /**
   * <p>The token returned to indicate that there is more data available.</p>
   */
  NextToken?: string;

  /**
   * <p>The total number of rooms returned.</p>
   */
  TotalCount?: number;
}

export namespace SearchRoomsResponse {
  export const filterSensitiveLog = (obj: SearchRoomsResponse): any => ({
    ...obj,
  });
}

export interface SearchSkillGroupsRequest {
  /**
   * <p>An optional token returned from a prior request. Use this token for pagination of
   *          results from this action. If this parameter is specified, the response includes only
   *          results beyond the token, up to the value specified by <code>MaxResults</code>.
   *          Required.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to include in the response. If more results exist than
   *          the specified <code>MaxResults</code> value, a token is included in the response so that
   *          the remaining results can be retrieved. </p>
   */
  MaxResults?: number;

  /**
   * <p>The filters to use to list a specified set of skill groups. The supported filter key
   *          is SkillGroupName. </p>
   */
  Filters?: Filter[];

  /**
   * <p>The sort order to use in listing the specified set of skill groups. The supported
   *          sort key is SkillGroupName. </p>
   */
  SortCriteria?: Sort[];
}

export namespace SearchSkillGroupsRequest {
  export const filterSensitiveLog = (obj: SearchSkillGroupsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The attributes of a skill group.</p>
 */
export interface SkillGroupData {
  /**
   * <p>The skill group ARN of a skill group.</p>
   */
  SkillGroupArn?: string;

  /**
   * <p>The skill group name of a skill group.</p>
   */
  SkillGroupName?: string;

  /**
   * <p>The description of a skill group.</p>
   */
  Description?: string;
}

export namespace SkillGroupData {
  export const filterSensitiveLog = (obj: SkillGroupData): any => ({
    ...obj,
  });
}

export interface SearchSkillGroupsResponse {
  /**
   * <p>The skill groups that meet the filter criteria, in sort order.</p>
   */
  SkillGroups?: SkillGroupData[];

  /**
   * <p>The token returned to indicate that there is more data available.</p>
   */
  NextToken?: string;

  /**
   * <p>The total number of skill groups returned.</p>
   */
  TotalCount?: number;
}

export namespace SearchSkillGroupsResponse {
  export const filterSensitiveLog = (obj: SearchSkillGroupsResponse): any => ({
    ...obj,
  });
}

export interface SearchUsersRequest {
  /**
   * <p>An optional token returned from a prior request. Use this token for pagination of
   *          results from this action. If this parameter is specified, the response includes only
   *          results beyond the token, up to the value specified by <code>MaxResults</code>.
   *          Required.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to include in the response. If more results exist than
   *          the specified <code>MaxResults</code> value, a token is included in the response so that
   *          the remaining results can be retrieved. Required.</p>
   */
  MaxResults?: number;

  /**
   * <p>The filters to use for listing a specific set of users. Required. Supported filter
   *          keys are UserId, FirstName, LastName, Email, and EnrollmentStatus.</p>
   */
  Filters?: Filter[];

  /**
   * <p>The sort order to use in listing the filtered set of users. Required. Supported sort
   *          keys are UserId, FirstName, LastName, Email, and EnrollmentStatus.</p>
   */
  SortCriteria?: Sort[];
}

export namespace SearchUsersRequest {
  export const filterSensitiveLog = (obj: SearchUsersRequest): any => ({
    ...obj,
  });
}

export enum EnrollmentStatus {
  DEREGISTERING = "DEREGISTERING",
  DISASSOCIATING = "DISASSOCIATING",
  INITIALIZED = "INITIALIZED",
  PENDING = "PENDING",
  REGISTERED = "REGISTERED",
}

/**
 * <p>Information related to a user.</p>
 */
export interface UserData {
  /**
   * <p>The ARN of a user.</p>
   */
  UserArn?: string;

  /**
   * <p>The first name of a user.</p>
   */
  FirstName?: string;

  /**
   * <p>The last name of a user.</p>
   */
  LastName?: string;

  /**
   * <p>The email of a user.</p>
   */
  Email?: string;

  /**
   * <p>The enrollment status of a user.</p>
   */
  EnrollmentStatus?: EnrollmentStatus | string;

  /**
   * <p>The enrollment ARN of a user.</p>
   */
  EnrollmentId?: string;
}

export namespace UserData {
  export const filterSensitiveLog = (obj: UserData): any => ({
    ...obj,
  });
}

export interface SearchUsersResponse {
  /**
   * <p>The users that meet the specified set of filter criteria, in sort order.</p>
   */
  Users?: UserData[];

  /**
   * <p>The token returned to indicate that there is more data available.</p>
   */
  NextToken?: string;

  /**
   * <p>The total number of users returned.</p>
   */
  TotalCount?: number;
}

export namespace SearchUsersResponse {
  export const filterSensitiveLog = (obj: SearchUsersResponse): any => ({
    ...obj,
  });
}

export enum Locale {
  en_US = "en-US",
}

/**
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
   * <p>The locale of the audio message. Currently, en-US is supported.</p>
   */
  Locale: Locale | string | undefined;

  /**
   * <p>The location of the audio file. Currently, S3 URLs are supported. Only S3 locations
   *          comprised of safe characters are valid. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingMetadata.html#Safe%20Characters">Safe Characters</a>.</p>
   */
  Location: string | undefined;
}

export namespace Audio {
  export const filterSensitiveLog = (obj: Audio): any => ({
    ...obj,
  });
}

/**
 * <p>The SSML message. For more information, see <a href="https://developer.amazon.com/docs/custom-skills/speech-synthesis-markup-language-ssml-reference.html">SSML Reference</a>.</p>
 */
export interface Ssml {
  /**
   * <p>The locale of the SSML message. Currently, en-US is supported.</p>
   */
  Locale: Locale | string | undefined;

  /**
   * <p>The value of the SSML message in the correct SSML format. The audio tag is not supported.</p>
   */
  Value: string | undefined;
}

export namespace Ssml {
  export const filterSensitiveLog = (obj: Ssml): any => ({
    ...obj,
  });
}

/**
 * <p>The text message.</p>
 */
export interface Text {
  /**
   * <p>The locale of the text message. Currently, en-US is supported.</p>
   */
  Locale: Locale | string | undefined;

  /**
   * <p>The value of the text message.</p>
   */
  Value: string | undefined;
}

export namespace Text {
  export const filterSensitiveLog = (obj: Text): any => ({
    ...obj,
  });
}

/**
 * <p>The content definition. This can contain only one text, SSML, or audio list
 *          object.</p>
 */
export interface Content {
  /**
   * <p>The list of text messages.</p>
   */
  TextList?: Text[];

  /**
   * <p>The list of SSML messages.</p>
   */
  SsmlList?: Ssml[];

  /**
   * <p>The list of audio messages.</p>
   */
  AudioList?: Audio[];
}

export namespace Content {
  export const filterSensitiveLog = (obj: Content): any => ({
    ...obj,
  });
}

export interface SendAnnouncementRequest {
  /**
   * <p>The filters to use to send an announcement to a specified list of rooms. The supported filter keys are RoomName, ProfileName, RoomArn, and ProfileArn. To send to all rooms, specify an empty RoomFilters list.</p>
   */
  RoomFilters: Filter[] | undefined;

  /**
   * <p>The announcement content. This can contain only one of the three possible announcement types (text, SSML or audio).</p>
   */
  Content: Content | undefined;

  /**
   * <p>The time to live for an announcement. Default is 300. If delivery doesn't occur within this time, the
   *          announcement is not delivered.</p>
   */
  TimeToLiveInSeconds?: number;

  /**
   * <p>The unique, user-specified identifier for the request that ensures idempotency.</p>
   */
  ClientRequestToken?: string;
}

export namespace SendAnnouncementRequest {
  export const filterSensitiveLog = (obj: SendAnnouncementRequest): any => ({
    ...obj,
  });
}

export interface SendAnnouncementResponse {
  /**
   * <p>The identifier of the announcement.</p>
   */
  AnnouncementArn?: string;
}

export namespace SendAnnouncementResponse {
  export const filterSensitiveLog = (obj: SendAnnouncementResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The attempt to update a user is invalid due to the user's current status.</p>
 */
export interface InvalidUserStatusException extends __SmithyException, $MetadataBearer {
  name: "InvalidUserStatusException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidUserStatusException {
  export const filterSensitiveLog = (obj: InvalidUserStatusException): any => ({
    ...obj,
  });
}

export interface SendInvitationRequest {
  /**
   * <p>The ARN of the user to whom to send an invitation. Required.</p>
   */
  UserArn?: string;
}

export namespace SendInvitationRequest {
  export const filterSensitiveLog = (obj: SendInvitationRequest): any => ({
    ...obj,
  });
}

export interface SendInvitationResponse {}

export namespace SendInvitationResponse {
  export const filterSensitiveLog = (obj: SendInvitationResponse): any => ({
    ...obj,
  });
}

export interface StartDeviceSyncRequest {
  /**
   * <p>The ARN of the room with which the device to sync is associated. Required.</p>
   */
  RoomArn?: string;

  /**
   * <p>The ARN of the device to sync. Required.</p>
   */
  DeviceArn?: string;

  /**
   * <p>Request structure to start the device sync. Required.</p>
   */
  Features: (Feature | string)[] | undefined;
}

export namespace StartDeviceSyncRequest {
  export const filterSensitiveLog = (obj: StartDeviceSyncRequest): any => ({
    ...obj,
  });
}

export interface StartDeviceSyncResponse {}

export namespace StartDeviceSyncResponse {
  export const filterSensitiveLog = (obj: StartDeviceSyncResponse): any => ({
    ...obj,
  });
}

export interface StartSmartHomeApplianceDiscoveryRequest {
  /**
   * <p>The room where smart home appliance discovery was initiated.</p>
   */
  RoomArn: string | undefined;
}

export namespace StartSmartHomeApplianceDiscoveryRequest {
  export const filterSensitiveLog = (obj: StartSmartHomeApplianceDiscoveryRequest): any => ({
    ...obj,
  });
}

export interface StartSmartHomeApplianceDiscoveryResponse {}

export namespace StartSmartHomeApplianceDiscoveryResponse {
  export const filterSensitiveLog = (obj: StartSmartHomeApplianceDiscoveryResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The ARN of the resource to which to add metadata tags. Required. </p>
   */
  Arn: string | undefined;

  /**
   * <p>The tags to be added to the specified resource. Do not provide system tags. Required.
   *       </p>
   */
  Tags: Tag[] | undefined;
}

export namespace TagResourceRequest {
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>The ARN of the resource from which to remove metadata tags. Required. </p>
   */
  Arn: string | undefined;

  /**
   * <p>The tags to be removed from the specified resource. Do not provide system tags.
   *          Required. </p>
   */
  TagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The name sent in the request is already in use.</p>
 */
export interface NameInUseException extends __SmithyException, $MetadataBearer {
  name: "NameInUseException";
  $fault: "client";
  Message?: string;
}

export namespace NameInUseException {
  export const filterSensitiveLog = (obj: NameInUseException): any => ({
    ...obj,
  });
}

export interface UpdateAddressBookRequest {
  /**
   * <p>The ARN of the room to update.</p>
   */
  AddressBookArn: string | undefined;

  /**
   * <p>The updated name of the room.</p>
   */
  Name?: string;

  /**
   * <p>The updated description of the room.</p>
   */
  Description?: string;
}

export namespace UpdateAddressBookRequest {
  export const filterSensitiveLog = (obj: UpdateAddressBookRequest): any => ({
    ...obj,
  });
}

export interface UpdateAddressBookResponse {}

export namespace UpdateAddressBookResponse {
  export const filterSensitiveLog = (obj: UpdateAddressBookResponse): any => ({
    ...obj,
  });
}

export interface UpdateBusinessReportScheduleRequest {
  /**
   * <p>The ARN of the business report schedule.</p>
   */
  ScheduleArn: string | undefined;

  /**
   * <p>The S3 location of the output reports.</p>
   */
  S3BucketName?: string;

  /**
   * <p>The S3 key where the report is delivered.</p>
   */
  S3KeyPrefix?: string;

  /**
   * <p>The format of the generated report (individual CSV files or zipped files of
   *          individual files).</p>
   */
  Format?: BusinessReportFormat | string;

  /**
   * <p>The name identifier of the schedule.</p>
   */
  ScheduleName?: string;

  /**
   * <p>The recurrence of the reports.</p>
   */
  Recurrence?: BusinessReportRecurrence;
}

export namespace UpdateBusinessReportScheduleRequest {
  export const filterSensitiveLog = (obj: UpdateBusinessReportScheduleRequest): any => ({
    ...obj,
  });
}

export interface UpdateBusinessReportScheduleResponse {}

export namespace UpdateBusinessReportScheduleResponse {
  export const filterSensitiveLog = (obj: UpdateBusinessReportScheduleResponse): any => ({
    ...obj,
  });
}

export interface UpdateConferenceProviderRequest {
  /**
   * <p>The ARN of the conference provider.</p>
   */
  ConferenceProviderArn: string | undefined;

  /**
   * <p>The type of the conference provider.</p>
   */
  ConferenceProviderType: ConferenceProviderType | string | undefined;

  /**
   * <p>The IP endpoint and protocol for calling.</p>
   */
  IPDialIn?: IPDialIn;

  /**
   * <p>The information for PSTN conferencing.</p>
   */
  PSTNDialIn?: PSTNDialIn;

  /**
   * <p>The meeting settings for the conference provider.</p>
   */
  MeetingSetting: MeetingSetting | undefined;
}

export namespace UpdateConferenceProviderRequest {
  export const filterSensitiveLog = (obj: UpdateConferenceProviderRequest): any => ({
    ...obj,
  });
}

export interface UpdateConferenceProviderResponse {}

export namespace UpdateConferenceProviderResponse {
  export const filterSensitiveLog = (obj: UpdateConferenceProviderResponse): any => ({
    ...obj,
  });
}

export interface UpdateContactRequest {
  /**
   * <p>The ARN of the contact to update.</p>
   */
  ContactArn: string | undefined;

  /**
   * <p>The updated display name of the contact.</p>
   */
  DisplayName?: string;

  /**
   * <p>The updated first name of the contact.</p>
   */
  FirstName?: string;

  /**
   * <p>The updated last name of the contact.</p>
   */
  LastName?: string;

  /**
   * <p>The updated phone number of the contact. The phone number type defaults to WORK. You
   *          can either specify PhoneNumber or PhoneNumbers. We recommend that you use PhoneNumbers,
   *          which lets you specify the phone number type and multiple numbers.</p>
   */
  PhoneNumber?: string;

  /**
   * <p>The list of phone numbers for the contact.</p>
   */
  PhoneNumbers?: PhoneNumber[];

  /**
   * <p>The list of SIP addresses for the contact.</p>
   */
  SipAddresses?: SipAddress[];
}

export namespace UpdateContactRequest {
  export const filterSensitiveLog = (obj: UpdateContactRequest): any => ({
    ...obj,
    ...(obj.PhoneNumber && { PhoneNumber: SENSITIVE_STRING }),
    ...(obj.PhoneNumbers && { PhoneNumbers: obj.PhoneNumbers.map((item) => PhoneNumber.filterSensitiveLog(item)) }),
    ...(obj.SipAddresses && { SipAddresses: obj.SipAddresses.map((item) => SipAddress.filterSensitiveLog(item)) }),
  });
}

export interface UpdateContactResponse {}

export namespace UpdateContactResponse {
  export const filterSensitiveLog = (obj: UpdateContactResponse): any => ({
    ...obj,
  });
}

export interface UpdateDeviceRequest {
  /**
   * <p>The ARN of the device to update. Required.</p>
   */
  DeviceArn?: string;

  /**
   * <p>The updated device name. Required.</p>
   */
  DeviceName?: string;
}

export namespace UpdateDeviceRequest {
  export const filterSensitiveLog = (obj: UpdateDeviceRequest): any => ({
    ...obj,
  });
}

export interface UpdateDeviceResponse {}

export namespace UpdateDeviceResponse {
  export const filterSensitiveLog = (obj: UpdateDeviceResponse): any => ({
    ...obj,
  });
}

export interface UpdateGatewayRequest {
  /**
   * <p>The ARN of the gateway to update.</p>
   */
  GatewayArn: string | undefined;

  /**
   * <p>The updated name of the gateway.</p>
   */
  Name?: string;

  /**
   * <p>The updated description of the gateway.</p>
   */
  Description?: string;

  /**
   * <p>The updated software version of the gateway. The gateway automatically updates its
   *          software version during normal operation.</p>
   */
  SoftwareVersion?: string;
}

export namespace UpdateGatewayRequest {
  export const filterSensitiveLog = (obj: UpdateGatewayRequest): any => ({
    ...obj,
  });
}

export interface UpdateGatewayResponse {}

export namespace UpdateGatewayResponse {
  export const filterSensitiveLog = (obj: UpdateGatewayResponse): any => ({
    ...obj,
  });
}

export interface UpdateGatewayGroupRequest {
  /**
   * <p>The ARN of the gateway group to update.</p>
   */
  GatewayGroupArn: string | undefined;

  /**
   * <p>The updated name of the gateway group.</p>
   */
  Name?: string;

  /**
   * <p>The updated description of the gateway group.</p>
   */
  Description?: string;
}

export namespace UpdateGatewayGroupRequest {
  export const filterSensitiveLog = (obj: UpdateGatewayGroupRequest): any => ({
    ...obj,
  });
}

export interface UpdateGatewayGroupResponse {}

export namespace UpdateGatewayGroupResponse {
  export const filterSensitiveLog = (obj: UpdateGatewayGroupResponse): any => ({
    ...obj,
  });
}

export interface UpdateNetworkProfileRequest {
  /**
   * <p>The ARN of the network profile associated with a device.</p>
   */
  NetworkProfileArn: string | undefined;

  /**
   * <p>The name of the network profile associated with a device.</p>
   */
  NetworkProfileName?: string;

  /**
   * <p>Detailed information about a device's network profile.</p>
   */
  Description?: string;

  /**
   * <p>The current password of the Wi-Fi network.</p>
   */
  CurrentPassword?: string;

  /**
   * <p>The next, or subsequent, password of the Wi-Fi network. This password is asynchronously
   *          transmitted to the device and is used when the password of the network changes to
   *          NextPassword. </p>
   */
  NextPassword?: string;

  /**
   * <p>The ARN of the Private Certificate Authority (PCA) created in AWS Certificate Manager
   *          (ACM). This is used to issue certificates to the devices. </p>
   */
  CertificateAuthorityArn?: string;

  /**
   * <p>The root certificate(s) of your authentication server that will be installed on your
   *          devices and used to trust your authentication server during EAP negotiation. </p>
   */
  TrustAnchors?: string[];
}

export namespace UpdateNetworkProfileRequest {
  export const filterSensitiveLog = (obj: UpdateNetworkProfileRequest): any => ({
    ...obj,
    ...(obj.CurrentPassword && { CurrentPassword: SENSITIVE_STRING }),
    ...(obj.NextPassword && { NextPassword: SENSITIVE_STRING }),
  });
}

export interface UpdateNetworkProfileResponse {}

export namespace UpdateNetworkProfileResponse {
  export const filterSensitiveLog = (obj: UpdateNetworkProfileResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Settings for the end of meeting reminder feature that are applied to a room profile. The
 *          end of meeting reminder enables Alexa to remind users when a meeting is ending. </p>
 */
export interface UpdateEndOfMeetingReminder {
  /**
   * <p>Updates settings for the end of meeting reminder feature that are applied to a room
   *          profile. The end of meeting reminder enables Alexa to remind users when a meeting is
   *          ending. </p>
   */
  ReminderAtMinutes?: number[];

  /**
   * <p>The type of sound that users hear during the end of meeting reminder. </p>
   */
  ReminderType?: EndOfMeetingReminderType | string;

  /**
   * <p>Whether an end of meeting reminder is enabled or not.</p>
   */
  Enabled?: boolean;
}

export namespace UpdateEndOfMeetingReminder {
  export const filterSensitiveLog = (obj: UpdateEndOfMeetingReminder): any => ({
    ...obj,
  });
}

/**
 * <p>Updates settings for the instant booking feature that are applied to a room profile. If
 *          instant booking is enabled, Alexa automatically reserves a room if it is free when a user
 *          joins a meeting with Alexa.</p>
 */
export interface UpdateInstantBooking {
  /**
   * <p>Duration between 15 and 240 minutes at increments of 15 that determines how long to book
   *          an available room when a meeting is started with Alexa.</p>
   */
  DurationInMinutes?: number;

  /**
   * <p>Whether instant booking is enabled or not.</p>
   */
  Enabled?: boolean;
}

export namespace UpdateInstantBooking {
  export const filterSensitiveLog = (obj: UpdateInstantBooking): any => ({
    ...obj,
  });
}

/**
 * <p>Updates settings for the require check in feature that are applied to a room profile. Require check in allows a meeting room’s Alexa or AVS device to prompt the user to check in; otherwise, the room will be released. </p>
 */
export interface UpdateRequireCheckIn {
  /**
   * <p>Duration between 5 and 20 minutes to determine when to release the room if it's not checked into. </p>
   */
  ReleaseAfterMinutes?: number;

  /**
   * <p>Whether require check in is enabled or not.</p>
   */
  Enabled?: boolean;
}

export namespace UpdateRequireCheckIn {
  export const filterSensitiveLog = (obj: UpdateRequireCheckIn): any => ({
    ...obj,
  });
}

/**
 * <p>Updates meeting room settings of a room profile.</p>
 */
export interface UpdateMeetingRoomConfiguration {
  /**
   * <p>Whether room utilization metrics are enabled or not.</p>
   */
  RoomUtilizationMetricsEnabled?: boolean;

  /**
   * <p>Settings for the end of meeting reminder feature that are applied to a room profile. The
   *          end of meeting reminder enables Alexa to remind users when a meeting is ending. </p>
   */
  EndOfMeetingReminder?: UpdateEndOfMeetingReminder;

  /**
   * <p>Settings to automatically book an available room available for a configured duration
   *          when joining a meeting with Alexa.</p>
   */
  InstantBooking?: UpdateInstantBooking;

  /**
   * <p>Settings for requiring a check in when a room is reserved. Alexa can cancel a room reservation if it's not checked into to make the room available for others. Users can check in by joining the meeting with Alexa or an AVS device, or by saying “Alexa, check in.” </p>
   */
  RequireCheckIn?: UpdateRequireCheckIn;
}

export namespace UpdateMeetingRoomConfiguration {
  export const filterSensitiveLog = (obj: UpdateMeetingRoomConfiguration): any => ({
    ...obj,
  });
}

export interface UpdateProfileRequest {
  /**
   * <p>The ARN of the room profile to update. Required.</p>
   */
  ProfileArn?: string;

  /**
   * <p>The updated name for the room profile.</p>
   */
  ProfileName?: string;

  /**
   * <p>Sets the profile as default if selected. If this is missing, no update is done to the
   *          default status.</p>
   */
  IsDefault?: boolean;

  /**
   * <p>The updated timezone for the room profile.</p>
   */
  Timezone?: string;

  /**
   * <p>The updated address for the room profile.</p>
   */
  Address?: string;

  /**
   * <p>The updated distance unit for the room profile.</p>
   */
  DistanceUnit?: DistanceUnit | string;

  /**
   * <p>The updated temperature unit for the room profile.</p>
   */
  TemperatureUnit?: TemperatureUnit | string;

  /**
   * <p>The updated wake word for the room profile.</p>
   */
  WakeWord?: WakeWord | string;

  /**
   * <p>The updated locale for the room profile. (This is currently only available to a limited preview audience.)</p>
   */
  Locale?: string;

  /**
   * <p>Whether the setup mode of the profile is enabled.</p>
   */
  SetupModeDisabled?: boolean;

  /**
   * <p>The updated maximum volume limit for the room profile.</p>
   */
  MaxVolumeLimit?: number;

  /**
   * <p>Whether the PSTN setting of the room profile is enabled.</p>
   */
  PSTNEnabled?: boolean;

  /**
   * <p>The updated meeting room settings of a room profile.</p>
   */
  MeetingRoomConfiguration?: UpdateMeetingRoomConfiguration;
}

export namespace UpdateProfileRequest {
  export const filterSensitiveLog = (obj: UpdateProfileRequest): any => ({
    ...obj,
  });
}

export interface UpdateProfileResponse {}

export namespace UpdateProfileResponse {
  export const filterSensitiveLog = (obj: UpdateProfileResponse): any => ({
    ...obj,
  });
}

export interface UpdateRoomRequest {
  /**
   * <p>The ARN of the room to update. </p>
   */
  RoomArn?: string;

  /**
   * <p>The updated name for the room.</p>
   */
  RoomName?: string;

  /**
   * <p>The updated description for the room.</p>
   */
  Description?: string;

  /**
   * <p>The updated provider calendar ARN for the room.</p>
   */
  ProviderCalendarId?: string;

  /**
   * <p>The updated profile ARN for the room.</p>
   */
  ProfileArn?: string;
}

export namespace UpdateRoomRequest {
  export const filterSensitiveLog = (obj: UpdateRoomRequest): any => ({
    ...obj,
  });
}

export interface UpdateRoomResponse {}

export namespace UpdateRoomResponse {
  export const filterSensitiveLog = (obj: UpdateRoomResponse): any => ({
    ...obj,
  });
}

export interface UpdateSkillGroupRequest {
  /**
   * <p>The ARN of the skill group to update. </p>
   */
  SkillGroupArn?: string;

  /**
   * <p>The updated name for the skill group.</p>
   */
  SkillGroupName?: string;

  /**
   * <p>The updated description for the skill group.</p>
   */
  Description?: string;
}

export namespace UpdateSkillGroupRequest {
  export const filterSensitiveLog = (obj: UpdateSkillGroupRequest): any => ({
    ...obj,
  });
}

export interface UpdateSkillGroupResponse {}

export namespace UpdateSkillGroupResponse {
  export const filterSensitiveLog = (obj: UpdateSkillGroupResponse): any => ({
    ...obj,
  });
}
