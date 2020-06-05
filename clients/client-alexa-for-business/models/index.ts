import {
  SENSITIVE_STRING,
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>An address book with attributes.</p>
 */
export interface AddressBook {
  __type?: "AddressBook";
  /**
   * <p>The ARN of the address book.</p>
   */
  AddressBookArn?: string;

  /**
   * <p>The description of the address book.</p>
   */
  Description?: string;

  /**
   * <p>The name of the address book.</p>
   */
  Name?: string;
}

export namespace AddressBook {
  export const filterSensitiveLog = (obj: AddressBook): any => ({
    ...obj
  });
  export const isa = (o: any): o is AddressBook => __isa(o, "AddressBook");
}

/**
 * <p>Information related to an address book.</p>
 */
export interface AddressBookData {
  __type?: "AddressBookData";
  /**
   * <p>The ARN of the address book.</p>
   */
  AddressBookArn?: string;

  /**
   * <p>The description of the address book.</p>
   */
  Description?: string;

  /**
   * <p>The name of the address book.</p>
   */
  Name?: string;
}

export namespace AddressBookData {
  export const filterSensitiveLog = (obj: AddressBookData): any => ({
    ...obj
  });
  export const isa = (o: any): o is AddressBookData =>
    __isa(o, "AddressBookData");
}

/**
 * <p>The resource being created already exists.</p>
 */
export interface AlreadyExistsException
  extends __SmithyException,
    $MetadataBearer {
  name: "AlreadyExistsException";
  $fault: "client";
  Message?: string;
}

export namespace AlreadyExistsException {
  export const filterSensitiveLog = (obj: AlreadyExistsException): any => ({
    ...obj
  });
  export const isa = (o: any): o is AlreadyExistsException =>
    __isa(o, "AlreadyExistsException");
}

export interface ApproveSkillRequest {
  __type?: "ApproveSkillRequest";
  /**
   * <p>The unique identifier of the skill.</p>
   */
  SkillId: string | undefined;
}

export namespace ApproveSkillRequest {
  export const filterSensitiveLog = (obj: ApproveSkillRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ApproveSkillRequest =>
    __isa(o, "ApproveSkillRequest");
}

export interface ApproveSkillResponse {
  __type?: "ApproveSkillResponse";
}

export namespace ApproveSkillResponse {
  export const filterSensitiveLog = (obj: ApproveSkillResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ApproveSkillResponse =>
    __isa(o, "ApproveSkillResponse");
}

export interface AssociateContactWithAddressBookRequest {
  __type?: "AssociateContactWithAddressBookRequest";
  /**
   * <p>The ARN of the address book with which to associate the contact.</p>
   */
  AddressBookArn: string | undefined;

  /**
   * <p>The ARN of the contact to associate with an address book.</p>
   */
  ContactArn: string | undefined;
}

export namespace AssociateContactWithAddressBookRequest {
  export const filterSensitiveLog = (
    obj: AssociateContactWithAddressBookRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AssociateContactWithAddressBookRequest =>
    __isa(o, "AssociateContactWithAddressBookRequest");
}

export interface AssociateContactWithAddressBookResponse {
  __type?: "AssociateContactWithAddressBookResponse";
}

export namespace AssociateContactWithAddressBookResponse {
  export const filterSensitiveLog = (
    obj: AssociateContactWithAddressBookResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AssociateContactWithAddressBookResponse =>
    __isa(o, "AssociateContactWithAddressBookResponse");
}

export interface AssociateDeviceWithNetworkProfileRequest {
  __type?: "AssociateDeviceWithNetworkProfileRequest";
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
  export const filterSensitiveLog = (
    obj: AssociateDeviceWithNetworkProfileRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AssociateDeviceWithNetworkProfileRequest =>
    __isa(o, "AssociateDeviceWithNetworkProfileRequest");
}

export interface AssociateDeviceWithNetworkProfileResponse {
  __type?: "AssociateDeviceWithNetworkProfileResponse";
}

export namespace AssociateDeviceWithNetworkProfileResponse {
  export const filterSensitiveLog = (
    obj: AssociateDeviceWithNetworkProfileResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AssociateDeviceWithNetworkProfileResponse =>
    __isa(o, "AssociateDeviceWithNetworkProfileResponse");
}

export interface AssociateDeviceWithRoomRequest {
  __type?: "AssociateDeviceWithRoomRequest";
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
  export const filterSensitiveLog = (
    obj: AssociateDeviceWithRoomRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AssociateDeviceWithRoomRequest =>
    __isa(o, "AssociateDeviceWithRoomRequest");
}

export interface AssociateDeviceWithRoomResponse {
  __type?: "AssociateDeviceWithRoomResponse";
}

export namespace AssociateDeviceWithRoomResponse {
  export const filterSensitiveLog = (
    obj: AssociateDeviceWithRoomResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AssociateDeviceWithRoomResponse =>
    __isa(o, "AssociateDeviceWithRoomResponse");
}

export interface AssociateSkillGroupWithRoomRequest {
  __type?: "AssociateSkillGroupWithRoomRequest";
  /**
   * <p>The ARN of the room with which to associate the skill group. Required.</p>
   */
  RoomArn?: string;

  /**
   * <p>The ARN of the skill group to associate with a room. Required.</p>
   */
  SkillGroupArn?: string;
}

export namespace AssociateSkillGroupWithRoomRequest {
  export const filterSensitiveLog = (
    obj: AssociateSkillGroupWithRoomRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AssociateSkillGroupWithRoomRequest =>
    __isa(o, "AssociateSkillGroupWithRoomRequest");
}

export interface AssociateSkillGroupWithRoomResponse {
  __type?: "AssociateSkillGroupWithRoomResponse";
}

export namespace AssociateSkillGroupWithRoomResponse {
  export const filterSensitiveLog = (
    obj: AssociateSkillGroupWithRoomResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AssociateSkillGroupWithRoomResponse =>
    __isa(o, "AssociateSkillGroupWithRoomResponse");
}

export interface AssociateSkillWithSkillGroupRequest {
  __type?: "AssociateSkillWithSkillGroupRequest";
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
  export const filterSensitiveLog = (
    obj: AssociateSkillWithSkillGroupRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AssociateSkillWithSkillGroupRequest =>
    __isa(o, "AssociateSkillWithSkillGroupRequest");
}

export interface AssociateSkillWithSkillGroupResponse {
  __type?: "AssociateSkillWithSkillGroupResponse";
}

export namespace AssociateSkillWithSkillGroupResponse {
  export const filterSensitiveLog = (
    obj: AssociateSkillWithSkillGroupResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AssociateSkillWithSkillGroupResponse =>
    __isa(o, "AssociateSkillWithSkillGroupResponse");
}

export interface AssociateSkillWithUsersRequest {
  __type?: "AssociateSkillWithUsersRequest";
  /**
   * <p>The private skill ID you want to make available to enrolled users.</p>
   */
  SkillId: string | undefined;
}

export namespace AssociateSkillWithUsersRequest {
  export const filterSensitiveLog = (
    obj: AssociateSkillWithUsersRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AssociateSkillWithUsersRequest =>
    __isa(o, "AssociateSkillWithUsersRequest");
}

export interface AssociateSkillWithUsersResponse {
  __type?: "AssociateSkillWithUsersResponse";
}

export namespace AssociateSkillWithUsersResponse {
  export const filterSensitiveLog = (
    obj: AssociateSkillWithUsersResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AssociateSkillWithUsersResponse =>
    __isa(o, "AssociateSkillWithUsersResponse");
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
  __type?: "Audio";
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
    ...obj
  });
  export const isa = (o: any): o is Audio => __isa(o, "Audio");
}

/**
 * <p>Usage report with specified parameters.</p>
 */
export interface BusinessReport {
  __type?: "BusinessReport";
  /**
   * <p>The time of report delivery.</p>
   */
  DeliveryTime?: Date;

  /**
   * <p>The download link where a user can download the report.</p>
   */
  DownloadUrl?: string;

  /**
   * <p>The failure code.</p>
   */
  FailureCode?: BusinessReportFailureCode | string;

  /**
   * <p>The S3 location of the output reports.</p>
   */
  S3Location?: BusinessReportS3Location;

  /**
   * <p>The status of the report generation execution (RUNNING, SUCCEEDED, or
   *          FAILED).</p>
   */
  Status?: BusinessReportStatus | string;
}

export namespace BusinessReport {
  export const filterSensitiveLog = (obj: BusinessReport): any => ({
    ...obj
  });
  export const isa = (o: any): o is BusinessReport =>
    __isa(o, "BusinessReport");
}

/**
 * <p>The content range of the report.</p>
 */
export interface BusinessReportContentRange {
  __type?: "BusinessReportContentRange";
  /**
   * <p>The interval of the content range.</p>
   */
  Interval?: BusinessReportInterval | string;
}

export namespace BusinessReportContentRange {
  export const filterSensitiveLog = (obj: BusinessReportContentRange): any => ({
    ...obj
  });
  export const isa = (o: any): o is BusinessReportContentRange =>
    __isa(o, "BusinessReportContentRange");
}

export enum BusinessReportFailureCode {
  ACCESS_DENIED = "ACCESS_DENIED",
  INTERNAL_FAILURE = "INTERNAL_FAILURE",
  NO_SUCH_BUCKET = "NO_SUCH_BUCKET"
}

export enum BusinessReportFormat {
  CSV = "CSV",
  CSV_ZIP = "CSV_ZIP"
}

export enum BusinessReportInterval {
  ONE_DAY = "ONE_DAY",
  ONE_WEEK = "ONE_WEEK",
  THIRTY_DAYS = "THIRTY_DAYS"
}

/**
 * <p>The recurrence of the reports.</p>
 */
export interface BusinessReportRecurrence {
  __type?: "BusinessReportRecurrence";
  /**
   * <p>The start date.</p>
   */
  StartDate?: string;
}

export namespace BusinessReportRecurrence {
  export const filterSensitiveLog = (obj: BusinessReportRecurrence): any => ({
    ...obj
  });
  export const isa = (o: any): o is BusinessReportRecurrence =>
    __isa(o, "BusinessReportRecurrence");
}

/**
 * <p>The S3 location of the output reports.</p>
 */
export interface BusinessReportS3Location {
  __type?: "BusinessReportS3Location";
  /**
   * <p>The S3 bucket name of the output reports.</p>
   */
  BucketName?: string;

  /**
   * <p>The path of the business report.</p>
   */
  Path?: string;
}

export namespace BusinessReportS3Location {
  export const filterSensitiveLog = (obj: BusinessReportS3Location): any => ({
    ...obj
  });
  export const isa = (o: any): o is BusinessReportS3Location =>
    __isa(o, "BusinessReportS3Location");
}

/**
 * <p>The schedule of the usage report.</p>
 */
export interface BusinessReportSchedule {
  __type?: "BusinessReportSchedule";
  /**
   * <p>The content range of the reports.</p>
   */
  ContentRange?: BusinessReportContentRange;

  /**
   * <p>The format of the generated report (individual CSV files or zipped files of
   *          individual files).</p>
   */
  Format?: BusinessReportFormat | string;

  /**
   * <p>The details of the last business report delivery for a specified time
   *          interval.</p>
   */
  LastBusinessReport?: BusinessReport;

  /**
   * <p>The recurrence of the reports.</p>
   */
  Recurrence?: BusinessReportRecurrence;

  /**
   * <p>The S3 bucket name of the output reports.</p>
   */
  S3BucketName?: string;

  /**
   * <p>The S3 key where the report is delivered.</p>
   */
  S3KeyPrefix?: string;

  /**
   * <p>The ARN of the business report schedule.</p>
   */
  ScheduleArn?: string;

  /**
   * <p>The name identifier of the schedule.</p>
   */
  ScheduleName?: string;
}

export namespace BusinessReportSchedule {
  export const filterSensitiveLog = (obj: BusinessReportSchedule): any => ({
    ...obj
  });
  export const isa = (o: any): o is BusinessReportSchedule =>
    __isa(o, "BusinessReportSchedule");
}

export enum BusinessReportStatus {
  FAILED = "FAILED",
  RUNNING = "RUNNING",
  SUCCEEDED = "SUCCEEDED"
}

/**
 * <p>The skill store category that is shown. Alexa skills are assigned a specific skill
 *          category during creation, such as News, Social, and Sports.</p>
 */
export interface Category {
  __type?: "Category";
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
    ...obj
  });
  export const isa = (o: any): o is Category => __isa(o, "Category");
}

export enum CommsProtocol {
  H323 = "H323",
  SIP = "SIP",
  SIPS = "SIPS"
}

/**
 * <p>There is a concurrent modification of resources.</p>
 */
export interface ConcurrentModificationException
  extends __SmithyException,
    $MetadataBearer {
  name: "ConcurrentModificationException";
  $fault: "client";
  Message?: string;
}

export namespace ConcurrentModificationException {
  export const filterSensitiveLog = (
    obj: ConcurrentModificationException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ConcurrentModificationException =>
    __isa(o, "ConcurrentModificationException");
}

/**
 * <p>The default conference provider that is used if no other scheduled meetings are
 *          detected.</p>
 */
export interface ConferencePreference {
  __type?: "ConferencePreference";
  /**
   * <p>The ARN of the default conference provider.</p>
   */
  DefaultConferenceProviderArn?: string;
}

export namespace ConferencePreference {
  export const filterSensitiveLog = (obj: ConferencePreference): any => ({
    ...obj
  });
  export const isa = (o: any): o is ConferencePreference =>
    __isa(o, "ConferencePreference");
}

/**
 * <p>An entity that provides a conferencing solution. Alexa for Business acts as the voice interface and mediator that connects users to their preferred conference provider. Examples of conference providers include Amazon Chime, Zoom, Cisco, and Polycom. </p>
 */
export interface ConferenceProvider {
  __type?: "ConferenceProvider";
  /**
   * <p>The ARN of the newly created conference provider.</p>
   */
  Arn?: string;

  /**
   * <p>The IP endpoint and protocol for calling.</p>
   */
  IPDialIn?: IPDialIn;

  /**
   * <p>The meeting settings for the conference provider.</p>
   */
  MeetingSetting?: MeetingSetting;

  /**
   * <p>The name of the conference provider.</p>
   */
  Name?: string;

  /**
   * <p>The information for PSTN conferencing.</p>
   */
  PSTNDialIn?: PSTNDialIn;

  /**
   * <p>The type of conference providers.</p>
   */
  Type?: ConferenceProviderType | string;
}

export namespace ConferenceProvider {
  export const filterSensitiveLog = (obj: ConferenceProvider): any => ({
    ...obj
  });
  export const isa = (o: any): o is ConferenceProvider =>
    __isa(o, "ConferenceProvider");
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
  ZOOM = "ZOOM"
}

export enum ConnectionStatus {
  OFFLINE = "OFFLINE",
  ONLINE = "ONLINE"
}

/**
 * <p>A contact with attributes.</p>
 */
export interface Contact {
  __type?: "Contact";
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
    ...(obj.PhoneNumbers && {
      PhoneNumbers: obj.PhoneNumbers.map(item =>
        PhoneNumber.filterSensitiveLog(item)
      )
    }),
    ...(obj.SipAddresses && {
      SipAddresses: obj.SipAddresses.map(item =>
        SipAddress.filterSensitiveLog(item)
      )
    })
  });
  export const isa = (o: any): o is Contact => __isa(o, "Contact");
}

/**
 * <p>Information related to a contact.</p>
 */
export interface ContactData {
  __type?: "ContactData";
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
    ...(obj.PhoneNumbers && {
      PhoneNumbers: obj.PhoneNumbers.map(item =>
        PhoneNumber.filterSensitiveLog(item)
      )
    }),
    ...(obj.SipAddresses && {
      SipAddresses: obj.SipAddresses.map(item =>
        SipAddress.filterSensitiveLog(item)
      )
    })
  });
  export const isa = (o: any): o is ContactData => __isa(o, "ContactData");
}

/**
 * <p>The content definition. This can contain only one text, SSML, or audio list
 *          object.</p>
 */
export interface Content {
  __type?: "Content";
  /**
   * <p>The list of audio messages.</p>
   */
  AudioList?: Audio[];

  /**
   * <p>The list of SSML messages.</p>
   */
  SsmlList?: Ssml[];

  /**
   * <p>The list of text messages.</p>
   */
  TextList?: Text[];
}

export namespace Content {
  export const filterSensitiveLog = (obj: Content): any => ({
    ...obj
  });
  export const isa = (o: any): o is Content => __isa(o, "Content");
}

export interface CreateAddressBookRequest {
  __type?: "CreateAddressBookRequest";
  /**
   * <p>A unique, user-specified identifier for the request that ensures
   *          idempotency.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The description of the address book.</p>
   */
  Description?: string;

  /**
   * <p>The name of the address book.</p>
   */
  Name: string | undefined;
}

export namespace CreateAddressBookRequest {
  export const filterSensitiveLog = (obj: CreateAddressBookRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateAddressBookRequest =>
    __isa(o, "CreateAddressBookRequest");
}

export interface CreateAddressBookResponse {
  __type?: "CreateAddressBookResponse";
  /**
   * <p>The ARN of the newly created address book.</p>
   */
  AddressBookArn?: string;
}

export namespace CreateAddressBookResponse {
  export const filterSensitiveLog = (obj: CreateAddressBookResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateAddressBookResponse =>
    __isa(o, "CreateAddressBookResponse");
}

export interface CreateBusinessReportScheduleRequest {
  __type?: "CreateBusinessReportScheduleRequest";
  /**
   * <p>The client request token.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The content range of the reports.</p>
   */
  ContentRange: BusinessReportContentRange | undefined;

  /**
   * <p>The format of the generated report (individual CSV files or zipped files of
   *          individual files).</p>
   */
  Format: BusinessReportFormat | string | undefined;

  /**
   * <p>The recurrence of the reports. If this isn't specified, the report will only be
   *          delivered one time when the API is called. </p>
   */
  Recurrence?: BusinessReportRecurrence;

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
   * <p>The name identifier of the schedule.</p>
   */
  ScheduleName?: string;
}

export namespace CreateBusinessReportScheduleRequest {
  export const filterSensitiveLog = (
    obj: CreateBusinessReportScheduleRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateBusinessReportScheduleRequest =>
    __isa(o, "CreateBusinessReportScheduleRequest");
}

export interface CreateBusinessReportScheduleResponse {
  __type?: "CreateBusinessReportScheduleResponse";
  /**
   * <p>The ARN of the business report schedule.</p>
   */
  ScheduleArn?: string;
}

export namespace CreateBusinessReportScheduleResponse {
  export const filterSensitiveLog = (
    obj: CreateBusinessReportScheduleResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateBusinessReportScheduleResponse =>
    __isa(o, "CreateBusinessReportScheduleResponse");
}

export interface CreateConferenceProviderRequest {
  __type?: "CreateConferenceProviderRequest";
  /**
   * <p>The request token of the client.</p>
   */
  ClientRequestToken?: string;

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
   * <p>The meeting settings for the conference provider.</p>
   */
  MeetingSetting: MeetingSetting | undefined;

  /**
   * <p>The information for PSTN conferencing.</p>
   */
  PSTNDialIn?: PSTNDialIn;
}

export namespace CreateConferenceProviderRequest {
  export const filterSensitiveLog = (
    obj: CreateConferenceProviderRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateConferenceProviderRequest =>
    __isa(o, "CreateConferenceProviderRequest");
}

export interface CreateConferenceProviderResponse {
  __type?: "CreateConferenceProviderResponse";
  /**
   * <p>The ARN of the newly-created conference provider.</p>
   */
  ConferenceProviderArn?: string;
}

export namespace CreateConferenceProviderResponse {
  export const filterSensitiveLog = (
    obj: CreateConferenceProviderResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateConferenceProviderResponse =>
    __isa(o, "CreateConferenceProviderResponse");
}

export interface CreateContactRequest {
  __type?: "CreateContactRequest";
  /**
   * <p>A unique, user-specified identifier for this request that ensures
   *          idempotency.</p>
   */
  ClientRequestToken?: string;

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
}

export namespace CreateContactRequest {
  export const filterSensitiveLog = (obj: CreateContactRequest): any => ({
    ...obj,
    ...(obj.PhoneNumber && { PhoneNumber: SENSITIVE_STRING }),
    ...(obj.PhoneNumbers && {
      PhoneNumbers: obj.PhoneNumbers.map(item =>
        PhoneNumber.filterSensitiveLog(item)
      )
    }),
    ...(obj.SipAddresses && {
      SipAddresses: obj.SipAddresses.map(item =>
        SipAddress.filterSensitiveLog(item)
      )
    })
  });
  export const isa = (o: any): o is CreateContactRequest =>
    __isa(o, "CreateContactRequest");
}

export interface CreateContactResponse {
  __type?: "CreateContactResponse";
  /**
   * <p>The ARN of the newly created address book.</p>
   */
  ContactArn?: string;
}

export namespace CreateContactResponse {
  export const filterSensitiveLog = (obj: CreateContactResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateContactResponse =>
    __isa(o, "CreateContactResponse");
}

/**
 * <p>Creates settings for the end of meeting reminder feature that are applied to a room
 *          profile. The end of meeting reminder enables Alexa to remind users when a meeting is
 *          ending.</p>
 */
export interface CreateEndOfMeetingReminder {
  __type?: "CreateEndOfMeetingReminder";
  /**
   * <p>Whether an end of meeting reminder is enabled or not.</p>
   */
  Enabled: boolean | undefined;

  /**
   * <p> A range of 3 to 15 minutes that determines when the reminder begins.</p>
   */
  ReminderAtMinutes: number[] | undefined;

  /**
   * <p>The type of sound that users hear during the end of meeting reminder. </p>
   */
  ReminderType: EndOfMeetingReminderType | string | undefined;
}

export namespace CreateEndOfMeetingReminder {
  export const filterSensitiveLog = (obj: CreateEndOfMeetingReminder): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateEndOfMeetingReminder =>
    __isa(o, "CreateEndOfMeetingReminder");
}

export interface CreateGatewayGroupRequest {
  __type?: "CreateGatewayGroupRequest";
  /**
   * <p> A unique, user-specified identifier for the request that ensures idempotency.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The description of the gateway group.</p>
   */
  Description?: string;

  /**
   * <p>The name of the gateway group.</p>
   */
  Name: string | undefined;
}

export namespace CreateGatewayGroupRequest {
  export const filterSensitiveLog = (obj: CreateGatewayGroupRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateGatewayGroupRequest =>
    __isa(o, "CreateGatewayGroupRequest");
}

export interface CreateGatewayGroupResponse {
  __type?: "CreateGatewayGroupResponse";
  /**
   * <p>The ARN of the created gateway group.</p>
   */
  GatewayGroupArn?: string;
}

export namespace CreateGatewayGroupResponse {
  export const filterSensitiveLog = (obj: CreateGatewayGroupResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateGatewayGroupResponse =>
    __isa(o, "CreateGatewayGroupResponse");
}

/**
 * <p>Creates settings for the instant booking feature that are applied to a room profile.
 *          When users start their meeting with Alexa, Alexa automatically books the room for the
 *          configured duration if the room is available.</p>
 */
export interface CreateInstantBooking {
  __type?: "CreateInstantBooking";
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
    ...obj
  });
  export const isa = (o: any): o is CreateInstantBooking =>
    __isa(o, "CreateInstantBooking");
}

/**
 * <p>Creates meeting room settings of a room profile.</p>
 */
export interface CreateMeetingRoomConfiguration {
  __type?: "CreateMeetingRoomConfiguration";
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

  /**
   * <p>Whether room utilization metrics are enabled or not.</p>
   */
  RoomUtilizationMetricsEnabled?: boolean;
}

export namespace CreateMeetingRoomConfiguration {
  export const filterSensitiveLog = (
    obj: CreateMeetingRoomConfiguration
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateMeetingRoomConfiguration =>
    __isa(o, "CreateMeetingRoomConfiguration");
}

export interface CreateNetworkProfileRequest {
  __type?: "CreateNetworkProfileRequest";
  /**
   * <p>The ARN of the Private Certificate Authority (PCA) created in AWS Certificate Manager
   *          (ACM). This is used to issue certificates to the devices. </p>
   */
  CertificateAuthorityArn?: string;

  /**
   * <p>A unique, user-specified identifier for the request that ensures idempotency.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The current password of the Wi-Fi network.</p>
   */
  CurrentPassword?: string;

  /**
   * <p>Detailed information about a device's network profile.</p>
   */
  Description?: string;

  /**
   * <p>The authentication standard that is used in the EAP framework. Currently, EAP_TLS is
   *          supported.</p>
   */
  EapMethod?: NetworkEapMethod | string;

  /**
   * <p>The name of the network profile associated with a device.</p>
   */
  NetworkProfileName: string | undefined;

  /**
   * <p>The next, or subsequent, password of the Wi-Fi network. This password is asynchronously
   *          transmitted to the device and is used when the password of the network changes to
   *          NextPassword. </p>
   */
  NextPassword?: string;

  /**
   * <p>The security type of the Wi-Fi network. This can be WPA2_ENTERPRISE, WPA2_PSK, WPA_PSK,
   *          WEP, or OPEN.</p>
   */
  SecurityType: NetworkSecurityType | string | undefined;

  /**
   * <p>The SSID of the Wi-Fi network.</p>
   */
  Ssid: string | undefined;

  /**
   * <p>The root certificates of your authentication server that is installed on your devices
   *          and used to trust your authentication server during EAP negotiation. </p>
   */
  TrustAnchors?: string[];
}

export namespace CreateNetworkProfileRequest {
  export const filterSensitiveLog = (
    obj: CreateNetworkProfileRequest
  ): any => ({
    ...obj,
    ...(obj.CurrentPassword && { CurrentPassword: SENSITIVE_STRING }),
    ...(obj.NextPassword && { NextPassword: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is CreateNetworkProfileRequest =>
    __isa(o, "CreateNetworkProfileRequest");
}

export interface CreateNetworkProfileResponse {
  __type?: "CreateNetworkProfileResponse";
  /**
   * <p>The ARN of the network profile associated with a device.</p>
   */
  NetworkProfileArn?: string;
}

export namespace CreateNetworkProfileResponse {
  export const filterSensitiveLog = (
    obj: CreateNetworkProfileResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateNetworkProfileResponse =>
    __isa(o, "CreateNetworkProfileResponse");
}

export interface CreateProfileRequest {
  __type?: "CreateProfileRequest";
  /**
   * <p>The valid address for the room.</p>
   */
  Address: string | undefined;

  /**
   * <p>The user-specified token that is used during the creation of a profile.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The distance unit to be used by devices in the profile.</p>
   */
  DistanceUnit: DistanceUnit | string | undefined;

  /**
   * <p>The locale of the room profile. (This is currently only available to a limited preview audience.)</p>
   */
  Locale?: string;

  /**
   * <p>The maximum volume limit for a room profile.</p>
   */
  MaxVolumeLimit?: number;

  /**
   * <p>The meeting room settings of a room profile.</p>
   */
  MeetingRoomConfiguration?: CreateMeetingRoomConfiguration;

  /**
   * <p>Whether PSTN calling is enabled.</p>
   */
  PSTNEnabled?: boolean;

  /**
   * <p>The name of a room profile.</p>
   */
  ProfileName: string | undefined;

  /**
   * <p>Whether room profile setup is enabled.</p>
   */
  SetupModeDisabled?: boolean;

  /**
   * <p>The temperature unit to be used by devices in the profile.</p>
   */
  TemperatureUnit: TemperatureUnit | string | undefined;

  /**
   * <p>The time zone used by a room profile.</p>
   */
  Timezone: string | undefined;

  /**
   * <p>A wake word for Alexa, Echo, Amazon, or a computer.</p>
   */
  WakeWord: WakeWord | string | undefined;
}

export namespace CreateProfileRequest {
  export const filterSensitiveLog = (obj: CreateProfileRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateProfileRequest =>
    __isa(o, "CreateProfileRequest");
}

export interface CreateProfileResponse {
  __type?: "CreateProfileResponse";
  /**
   * <p>The ARN of the newly created room profile in the response.</p>
   */
  ProfileArn?: string;
}

export namespace CreateProfileResponse {
  export const filterSensitiveLog = (obj: CreateProfileResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateProfileResponse =>
    __isa(o, "CreateProfileResponse");
}

/**
 * <p>Creates settings for the require check in feature that are applied to a room profile. Require check in allows a meeting room’s Alexa or AVS device to prompt the user to check in; otherwise, the room will be released.</p>
 */
export interface CreateRequireCheckIn {
  __type?: "CreateRequireCheckIn";
  /**
   * <p>Whether require check in is enabled or not.</p>
   */
  Enabled: boolean | undefined;

  /**
   * <p>Duration between 5 and 20 minutes to determine when to release the room if it's not checked into.</p>
   */
  ReleaseAfterMinutes: number | undefined;
}

export namespace CreateRequireCheckIn {
  export const filterSensitiveLog = (obj: CreateRequireCheckIn): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateRequireCheckIn =>
    __isa(o, "CreateRequireCheckIn");
}

export interface CreateRoomRequest {
  __type?: "CreateRoomRequest";
  /**
   * <p>A unique, user-specified identifier for this request that ensures idempotency.
   *       </p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The description for the room.</p>
   */
  Description?: string;

  /**
   * <p>The profile ARN for the room.</p>
   */
  ProfileArn?: string;

  /**
   * <p>The calendar ARN for the room.</p>
   */
  ProviderCalendarId?: string;

  /**
   * <p>The name for the room.</p>
   */
  RoomName: string | undefined;

  /**
   * <p>The tags for the room.</p>
   */
  Tags?: Tag[];
}

export namespace CreateRoomRequest {
  export const filterSensitiveLog = (obj: CreateRoomRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateRoomRequest =>
    __isa(o, "CreateRoomRequest");
}

export interface CreateRoomResponse {
  __type?: "CreateRoomResponse";
  /**
   * <p>The ARN of the newly created room in the response.</p>
   */
  RoomArn?: string;
}

export namespace CreateRoomResponse {
  export const filterSensitiveLog = (obj: CreateRoomResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateRoomResponse =>
    __isa(o, "CreateRoomResponse");
}

export interface CreateSkillGroupRequest {
  __type?: "CreateSkillGroupRequest";
  /**
   * <p>A unique, user-specified identifier for this request that ensures idempotency.
   *       </p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The description for the skill group.</p>
   */
  Description?: string;

  /**
   * <p>The name for the skill group.</p>
   */
  SkillGroupName: string | undefined;
}

export namespace CreateSkillGroupRequest {
  export const filterSensitiveLog = (obj: CreateSkillGroupRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateSkillGroupRequest =>
    __isa(o, "CreateSkillGroupRequest");
}

export interface CreateSkillGroupResponse {
  __type?: "CreateSkillGroupResponse";
  /**
   * <p>The ARN of the newly created skill group in the response.</p>
   */
  SkillGroupArn?: string;
}

export namespace CreateSkillGroupResponse {
  export const filterSensitiveLog = (obj: CreateSkillGroupResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateSkillGroupResponse =>
    __isa(o, "CreateSkillGroupResponse");
}

export interface CreateUserRequest {
  __type?: "CreateUserRequest";
  /**
   * <p>A unique, user-specified identifier for this request that ensures idempotency.
   *       </p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The email address for the user.</p>
   */
  Email?: string;

  /**
   * <p>The first name for the user.</p>
   */
  FirstName?: string;

  /**
   * <p>The last name for the user.</p>
   */
  LastName?: string;

  /**
   * <p>The tags for the user.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The ARN for the user.</p>
   */
  UserId: string | undefined;
}

export namespace CreateUserRequest {
  export const filterSensitiveLog = (obj: CreateUserRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateUserRequest =>
    __isa(o, "CreateUserRequest");
}

export interface CreateUserResponse {
  __type?: "CreateUserResponse";
  /**
   * <p>The ARN of the newly created user in the response.</p>
   */
  UserArn?: string;
}

export namespace CreateUserResponse {
  export const filterSensitiveLog = (obj: CreateUserResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateUserResponse =>
    __isa(o, "CreateUserResponse");
}

export interface DeleteAddressBookRequest {
  __type?: "DeleteAddressBookRequest";
  /**
   * <p>The ARN of the address book to delete.</p>
   */
  AddressBookArn: string | undefined;
}

export namespace DeleteAddressBookRequest {
  export const filterSensitiveLog = (obj: DeleteAddressBookRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteAddressBookRequest =>
    __isa(o, "DeleteAddressBookRequest");
}

export interface DeleteAddressBookResponse {
  __type?: "DeleteAddressBookResponse";
}

export namespace DeleteAddressBookResponse {
  export const filterSensitiveLog = (obj: DeleteAddressBookResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteAddressBookResponse =>
    __isa(o, "DeleteAddressBookResponse");
}

export interface DeleteBusinessReportScheduleRequest {
  __type?: "DeleteBusinessReportScheduleRequest";
  /**
   * <p>The ARN of the business report schedule.</p>
   */
  ScheduleArn: string | undefined;
}

export namespace DeleteBusinessReportScheduleRequest {
  export const filterSensitiveLog = (
    obj: DeleteBusinessReportScheduleRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteBusinessReportScheduleRequest =>
    __isa(o, "DeleteBusinessReportScheduleRequest");
}

export interface DeleteBusinessReportScheduleResponse {
  __type?: "DeleteBusinessReportScheduleResponse";
}

export namespace DeleteBusinessReportScheduleResponse {
  export const filterSensitiveLog = (
    obj: DeleteBusinessReportScheduleResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteBusinessReportScheduleResponse =>
    __isa(o, "DeleteBusinessReportScheduleResponse");
}

export interface DeleteConferenceProviderRequest {
  __type?: "DeleteConferenceProviderRequest";
  /**
   * <p>The ARN of the conference provider.</p>
   */
  ConferenceProviderArn: string | undefined;
}

export namespace DeleteConferenceProviderRequest {
  export const filterSensitiveLog = (
    obj: DeleteConferenceProviderRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteConferenceProviderRequest =>
    __isa(o, "DeleteConferenceProviderRequest");
}

export interface DeleteConferenceProviderResponse {
  __type?: "DeleteConferenceProviderResponse";
}

export namespace DeleteConferenceProviderResponse {
  export const filterSensitiveLog = (
    obj: DeleteConferenceProviderResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteConferenceProviderResponse =>
    __isa(o, "DeleteConferenceProviderResponse");
}

export interface DeleteContactRequest {
  __type?: "DeleteContactRequest";
  /**
   * <p>The ARN of the contact to delete.</p>
   */
  ContactArn: string | undefined;
}

export namespace DeleteContactRequest {
  export const filterSensitiveLog = (obj: DeleteContactRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteContactRequest =>
    __isa(o, "DeleteContactRequest");
}

export interface DeleteContactResponse {
  __type?: "DeleteContactResponse";
}

export namespace DeleteContactResponse {
  export const filterSensitiveLog = (obj: DeleteContactResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteContactResponse =>
    __isa(o, "DeleteContactResponse");
}

export interface DeleteDeviceRequest {
  __type?: "DeleteDeviceRequest";
  /**
   * <p>The ARN of the device for which to request details.</p>
   */
  DeviceArn: string | undefined;
}

export namespace DeleteDeviceRequest {
  export const filterSensitiveLog = (obj: DeleteDeviceRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteDeviceRequest =>
    __isa(o, "DeleteDeviceRequest");
}

export interface DeleteDeviceResponse {
  __type?: "DeleteDeviceResponse";
}

export namespace DeleteDeviceResponse {
  export const filterSensitiveLog = (obj: DeleteDeviceResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteDeviceResponse =>
    __isa(o, "DeleteDeviceResponse");
}

export interface DeleteDeviceUsageDataRequest {
  __type?: "DeleteDeviceUsageDataRequest";
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
  export const filterSensitiveLog = (
    obj: DeleteDeviceUsageDataRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteDeviceUsageDataRequest =>
    __isa(o, "DeleteDeviceUsageDataRequest");
}

export interface DeleteDeviceUsageDataResponse {
  __type?: "DeleteDeviceUsageDataResponse";
}

export namespace DeleteDeviceUsageDataResponse {
  export const filterSensitiveLog = (
    obj: DeleteDeviceUsageDataResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteDeviceUsageDataResponse =>
    __isa(o, "DeleteDeviceUsageDataResponse");
}

export interface DeleteGatewayGroupRequest {
  __type?: "DeleteGatewayGroupRequest";
  /**
   * <p>The ARN of the gateway group to delete.</p>
   */
  GatewayGroupArn: string | undefined;
}

export namespace DeleteGatewayGroupRequest {
  export const filterSensitiveLog = (obj: DeleteGatewayGroupRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteGatewayGroupRequest =>
    __isa(o, "DeleteGatewayGroupRequest");
}

export interface DeleteGatewayGroupResponse {
  __type?: "DeleteGatewayGroupResponse";
}

export namespace DeleteGatewayGroupResponse {
  export const filterSensitiveLog = (obj: DeleteGatewayGroupResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteGatewayGroupResponse =>
    __isa(o, "DeleteGatewayGroupResponse");
}

export interface DeleteNetworkProfileRequest {
  __type?: "DeleteNetworkProfileRequest";
  /**
   * <p>The ARN of the network profile associated with a device.</p>
   */
  NetworkProfileArn: string | undefined;
}

export namespace DeleteNetworkProfileRequest {
  export const filterSensitiveLog = (
    obj: DeleteNetworkProfileRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteNetworkProfileRequest =>
    __isa(o, "DeleteNetworkProfileRequest");
}

export interface DeleteNetworkProfileResponse {
  __type?: "DeleteNetworkProfileResponse";
}

export namespace DeleteNetworkProfileResponse {
  export const filterSensitiveLog = (
    obj: DeleteNetworkProfileResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteNetworkProfileResponse =>
    __isa(o, "DeleteNetworkProfileResponse");
}

export interface DeleteProfileRequest {
  __type?: "DeleteProfileRequest";
  /**
   * <p>The ARN of the room profile to delete. Required.</p>
   */
  ProfileArn?: string;
}

export namespace DeleteProfileRequest {
  export const filterSensitiveLog = (obj: DeleteProfileRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteProfileRequest =>
    __isa(o, "DeleteProfileRequest");
}

export interface DeleteProfileResponse {
  __type?: "DeleteProfileResponse";
}

export namespace DeleteProfileResponse {
  export const filterSensitiveLog = (obj: DeleteProfileResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteProfileResponse =>
    __isa(o, "DeleteProfileResponse");
}

export interface DeleteRoomRequest {
  __type?: "DeleteRoomRequest";
  /**
   * <p>The ARN of the room to delete. Required.</p>
   */
  RoomArn?: string;
}

export namespace DeleteRoomRequest {
  export const filterSensitiveLog = (obj: DeleteRoomRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteRoomRequest =>
    __isa(o, "DeleteRoomRequest");
}

export interface DeleteRoomResponse {
  __type?: "DeleteRoomResponse";
}

export namespace DeleteRoomResponse {
  export const filterSensitiveLog = (obj: DeleteRoomResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteRoomResponse =>
    __isa(o, "DeleteRoomResponse");
}

export interface DeleteRoomSkillParameterRequest {
  __type?: "DeleteRoomSkillParameterRequest";
  /**
   * <p>The room skill parameter key for which to remove details.</p>
   */
  ParameterKey: string | undefined;

  /**
   * <p>The ARN of the room from which to remove the room skill parameter details.</p>
   */
  RoomArn?: string;

  /**
   * <p>The ID of the skill from which to remove the room skill parameter details.</p>
   */
  SkillId: string | undefined;
}

export namespace DeleteRoomSkillParameterRequest {
  export const filterSensitiveLog = (
    obj: DeleteRoomSkillParameterRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteRoomSkillParameterRequest =>
    __isa(o, "DeleteRoomSkillParameterRequest");
}

export interface DeleteRoomSkillParameterResponse {
  __type?: "DeleteRoomSkillParameterResponse";
}

export namespace DeleteRoomSkillParameterResponse {
  export const filterSensitiveLog = (
    obj: DeleteRoomSkillParameterResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteRoomSkillParameterResponse =>
    __isa(o, "DeleteRoomSkillParameterResponse");
}

export interface DeleteSkillAuthorizationRequest {
  __type?: "DeleteSkillAuthorizationRequest";
  /**
   * <p>The room that the skill is authorized for.</p>
   */
  RoomArn?: string;

  /**
   * <p>The unique identifier of a skill.</p>
   */
  SkillId: string | undefined;
}

export namespace DeleteSkillAuthorizationRequest {
  export const filterSensitiveLog = (
    obj: DeleteSkillAuthorizationRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteSkillAuthorizationRequest =>
    __isa(o, "DeleteSkillAuthorizationRequest");
}

export interface DeleteSkillAuthorizationResponse {
  __type?: "DeleteSkillAuthorizationResponse";
}

export namespace DeleteSkillAuthorizationResponse {
  export const filterSensitiveLog = (
    obj: DeleteSkillAuthorizationResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteSkillAuthorizationResponse =>
    __isa(o, "DeleteSkillAuthorizationResponse");
}

export interface DeleteSkillGroupRequest {
  __type?: "DeleteSkillGroupRequest";
  /**
   * <p>The ARN of the skill group to delete. Required.</p>
   */
  SkillGroupArn?: string;
}

export namespace DeleteSkillGroupRequest {
  export const filterSensitiveLog = (obj: DeleteSkillGroupRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteSkillGroupRequest =>
    __isa(o, "DeleteSkillGroupRequest");
}

export interface DeleteSkillGroupResponse {
  __type?: "DeleteSkillGroupResponse";
}

export namespace DeleteSkillGroupResponse {
  export const filterSensitiveLog = (obj: DeleteSkillGroupResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteSkillGroupResponse =>
    __isa(o, "DeleteSkillGroupResponse");
}

export interface DeleteUserRequest {
  __type?: "DeleteUserRequest";
  /**
   * <p>The ARN of the user's enrollment in the organization. Required.</p>
   */
  EnrollmentId: string | undefined;

  /**
   * <p>The ARN of the user to delete in the organization. Required.</p>
   */
  UserArn?: string;
}

export namespace DeleteUserRequest {
  export const filterSensitiveLog = (obj: DeleteUserRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteUserRequest =>
    __isa(o, "DeleteUserRequest");
}

export interface DeleteUserResponse {
  __type?: "DeleteUserResponse";
}

export namespace DeleteUserResponse {
  export const filterSensitiveLog = (obj: DeleteUserResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteUserResponse =>
    __isa(o, "DeleteUserResponse");
}

/**
 * <p>The details about the developer that published the skill.</p>
 */
export interface DeveloperInfo {
  __type?: "DeveloperInfo";
  /**
   * <p>The name of the developer.</p>
   */
  DeveloperName?: string;

  /**
   * <p>The email of the developer.</p>
   */
  Email?: string;

  /**
   * <p>The URL of the privacy policy.</p>
   */
  PrivacyPolicy?: string;

  /**
   * <p>The website of the developer.</p>
   */
  Url?: string;
}

export namespace DeveloperInfo {
  export const filterSensitiveLog = (obj: DeveloperInfo): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeveloperInfo => __isa(o, "DeveloperInfo");
}

/**
 * <p>A device with attributes.</p>
 */
export interface Device {
  __type?: "Device";
  /**
   * <p>The ARN of a device.</p>
   */
  DeviceArn?: string;

  /**
   * <p>The name of a device.</p>
   */
  DeviceName?: string;

  /**
   * <p>The serial number of a device.</p>
   */
  DeviceSerialNumber?: string;

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
   * <p>The type of a device.</p>
   */
  DeviceType?: string;

  /**
   * <p>The MAC address of a device.</p>
   */
  MacAddress?: string;

  /**
   * <p>Detailed information about a device's network profile.</p>
   */
  NetworkProfileInfo?: DeviceNetworkProfileInfo;

  /**
   * <p>The room ARN of a device.</p>
   */
  RoomArn?: string;

  /**
   * <p>The software version of a device.</p>
   */
  SoftwareVersion?: string;
}

export namespace Device {
  export const filterSensitiveLog = (obj: Device): any => ({
    ...obj
  });
  export const isa = (o: any): o is Device => __isa(o, "Device");
}

/**
 * <p>Device attributes.</p>
 */
export interface DeviceData {
  __type?: "DeviceData";
  /**
   * <p>The time (in epoch) when the device data was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The ARN of a device.</p>
   */
  DeviceArn?: string;

  /**
   * <p>The name of a device.</p>
   */
  DeviceName?: string;

  /**
   * <p>The serial number of a device.</p>
   */
  DeviceSerialNumber?: string;

  /**
   * <p>The status of a device.</p>
   */
  DeviceStatus?: DeviceStatus | string;

  /**
   * <p>Detailed information about a device's status.</p>
   */
  DeviceStatusInfo?: DeviceStatusInfo;

  /**
   * <p>The type of a device.</p>
   */
  DeviceType?: string;

  /**
   * <p>The MAC address of a device.</p>
   */
  MacAddress?: string;

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
   * <p>The software version of a device.</p>
   */
  SoftwareVersion?: string;
}

export namespace DeviceData {
  export const filterSensitiveLog = (obj: DeviceData): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeviceData => __isa(o, "DeviceData");
}

/**
 * <p>The list of device events.</p>
 */
export interface DeviceEvent {
  __type?: "DeviceEvent";
  /**
   * <p>The time (in epoch) when the event occurred. </p>
   */
  Timestamp?: Date;

  /**
   * <p>The type of device event.</p>
   */
  Type?: DeviceEventType | string;

  /**
   * <p>The value of the event.</p>
   */
  Value?: string;
}

export namespace DeviceEvent {
  export const filterSensitiveLog = (obj: DeviceEvent): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeviceEvent => __isa(o, "DeviceEvent");
}

export enum DeviceEventType {
  CONNECTION_STATUS = "CONNECTION_STATUS",
  DEVICE_STATUS = "DEVICE_STATUS"
}

/**
 * <p>Detailed information about a device's network profile.</p>
 */
export interface DeviceNetworkProfileInfo {
  __type?: "DeviceNetworkProfileInfo";
  /**
   * <p>The ARN of the certificate associated with a device.</p>
   */
  CertificateArn?: string;

  /**
   * <p>The time (in epoch) when the certificate expires.</p>
   */
  CertificateExpirationTime?: Date;

  /**
   * <p>The ARN of the network profile associated with a device.</p>
   */
  NetworkProfileArn?: string;
}

export namespace DeviceNetworkProfileInfo {
  export const filterSensitiveLog = (obj: DeviceNetworkProfileInfo): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeviceNetworkProfileInfo =>
    __isa(o, "DeviceNetworkProfileInfo");
}

/**
 * <p>The request failed because this device is no longer registered and therefore no longer managed by this account.</p>
 */
export interface DeviceNotRegisteredException
  extends __SmithyException,
    $MetadataBearer {
  name: "DeviceNotRegisteredException";
  $fault: "client";
  Message?: string;
}

export namespace DeviceNotRegisteredException {
  export const filterSensitiveLog = (
    obj: DeviceNotRegisteredException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeviceNotRegisteredException =>
    __isa(o, "DeviceNotRegisteredException");
}

export enum DeviceStatus {
  DEREGISTERED = "DEREGISTERED",
  FAILED = "FAILED",
  PENDING = "PENDING",
  READY = "READY",
  WAS_OFFLINE = "WAS_OFFLINE"
}

/**
 * <p>Details of a device’s status.</p>
 */
export interface DeviceStatusDetail {
  __type?: "DeviceStatusDetail";
  /**
   * <p>The device status detail code.</p>
   */
  Code?: DeviceStatusDetailCode | string;

  /**
   * <p>The list of available features on the device.</p>
   */
  Feature?: Feature | string;
}

export namespace DeviceStatusDetail {
  export const filterSensitiveLog = (obj: DeviceStatusDetail): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeviceStatusDetail =>
    __isa(o, "DeviceStatusDetail");
}

export enum DeviceStatusDetailCode {
  ASSOCIATION_REJECTION = "ASSOCIATION_REJECTION",
  AUTHENTICATION_FAILURE = "AUTHENTICATION_FAILURE",
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
  PASSWORD_NOT_FOUND = "PASSWORD_NOT_FOUND",
  TLS_VERSION_MISMATCH = "TLS_VERSION_MISMATCH",
  UNKNOWN_FAILURE = "UNKNOWN_FAILURE"
}

/**
 * <p>Detailed information about a device's status.</p>
 */
export interface DeviceStatusInfo {
  __type?: "DeviceStatusInfo";
  /**
   * <p>The latest available information about the connection status of a device. </p>
   */
  ConnectionStatus?: ConnectionStatus | string;

  /**
   * <p>The time (in epoch) when the device connection status changed.</p>
   */
  ConnectionStatusUpdatedTime?: Date;

  /**
   * <p>One or more device status detail descriptions.</p>
   */
  DeviceStatusDetails?: DeviceStatusDetail[];
}

export namespace DeviceStatusInfo {
  export const filterSensitiveLog = (obj: DeviceStatusInfo): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeviceStatusInfo =>
    __isa(o, "DeviceStatusInfo");
}

export enum DeviceUsageType {
  VOICE = "VOICE"
}

export interface DisassociateContactFromAddressBookRequest {
  __type?: "DisassociateContactFromAddressBookRequest";
  /**
   * <p>The ARN of the address from which to disassociate the contact.</p>
   */
  AddressBookArn: string | undefined;

  /**
   * <p>The ARN of the contact to disassociate from an address book.</p>
   */
  ContactArn: string | undefined;
}

export namespace DisassociateContactFromAddressBookRequest {
  export const filterSensitiveLog = (
    obj: DisassociateContactFromAddressBookRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DisassociateContactFromAddressBookRequest =>
    __isa(o, "DisassociateContactFromAddressBookRequest");
}

export interface DisassociateContactFromAddressBookResponse {
  __type?: "DisassociateContactFromAddressBookResponse";
}

export namespace DisassociateContactFromAddressBookResponse {
  export const filterSensitiveLog = (
    obj: DisassociateContactFromAddressBookResponse
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is DisassociateContactFromAddressBookResponse =>
    __isa(o, "DisassociateContactFromAddressBookResponse");
}

export interface DisassociateDeviceFromRoomRequest {
  __type?: "DisassociateDeviceFromRoomRequest";
  /**
   * <p>The ARN of the device to disassociate from a room. Required.</p>
   */
  DeviceArn?: string;
}

export namespace DisassociateDeviceFromRoomRequest {
  export const filterSensitiveLog = (
    obj: DisassociateDeviceFromRoomRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DisassociateDeviceFromRoomRequest =>
    __isa(o, "DisassociateDeviceFromRoomRequest");
}

export interface DisassociateDeviceFromRoomResponse {
  __type?: "DisassociateDeviceFromRoomResponse";
}

export namespace DisassociateDeviceFromRoomResponse {
  export const filterSensitiveLog = (
    obj: DisassociateDeviceFromRoomResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DisassociateDeviceFromRoomResponse =>
    __isa(o, "DisassociateDeviceFromRoomResponse");
}

export interface DisassociateSkillFromSkillGroupRequest {
  __type?: "DisassociateSkillFromSkillGroupRequest";
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
  export const filterSensitiveLog = (
    obj: DisassociateSkillFromSkillGroupRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DisassociateSkillFromSkillGroupRequest =>
    __isa(o, "DisassociateSkillFromSkillGroupRequest");
}

export interface DisassociateSkillFromSkillGroupResponse {
  __type?: "DisassociateSkillFromSkillGroupResponse";
}

export namespace DisassociateSkillFromSkillGroupResponse {
  export const filterSensitiveLog = (
    obj: DisassociateSkillFromSkillGroupResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DisassociateSkillFromSkillGroupResponse =>
    __isa(o, "DisassociateSkillFromSkillGroupResponse");
}

export interface DisassociateSkillFromUsersRequest {
  __type?: "DisassociateSkillFromUsersRequest";
  /**
   * <p> The private skill ID you want to make unavailable for enrolled users.</p>
   */
  SkillId: string | undefined;
}

export namespace DisassociateSkillFromUsersRequest {
  export const filterSensitiveLog = (
    obj: DisassociateSkillFromUsersRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DisassociateSkillFromUsersRequest =>
    __isa(o, "DisassociateSkillFromUsersRequest");
}

export interface DisassociateSkillFromUsersResponse {
  __type?: "DisassociateSkillFromUsersResponse";
}

export namespace DisassociateSkillFromUsersResponse {
  export const filterSensitiveLog = (
    obj: DisassociateSkillFromUsersResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DisassociateSkillFromUsersResponse =>
    __isa(o, "DisassociateSkillFromUsersResponse");
}

export interface DisassociateSkillGroupFromRoomRequest {
  __type?: "DisassociateSkillGroupFromRoomRequest";
  /**
   * <p>The ARN of the room from which the skill group is to be disassociated.
   *          Required.</p>
   */
  RoomArn?: string;

  /**
   * <p>The ARN of the skill group to disassociate from a room. Required.</p>
   */
  SkillGroupArn?: string;
}

export namespace DisassociateSkillGroupFromRoomRequest {
  export const filterSensitiveLog = (
    obj: DisassociateSkillGroupFromRoomRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DisassociateSkillGroupFromRoomRequest =>
    __isa(o, "DisassociateSkillGroupFromRoomRequest");
}

export interface DisassociateSkillGroupFromRoomResponse {
  __type?: "DisassociateSkillGroupFromRoomResponse";
}

export namespace DisassociateSkillGroupFromRoomResponse {
  export const filterSensitiveLog = (
    obj: DisassociateSkillGroupFromRoomResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DisassociateSkillGroupFromRoomResponse =>
    __isa(o, "DisassociateSkillGroupFromRoomResponse");
}

export enum DistanceUnit {
  IMPERIAL = "IMPERIAL",
  METRIC = "METRIC"
}

export enum EnablementType {
  ENABLED = "ENABLED",
  PENDING = "PENDING"
}

export enum EnablementTypeFilter {
  ENABLED = "ENABLED",
  PENDING = "PENDING"
}

/**
 * <p>Settings for the end of meeting reminder feature that are applied to a room profile. The
 *          end of meeting reminder enables Alexa to remind users when a meeting is ending. </p>
 */
export interface EndOfMeetingReminder {
  __type?: "EndOfMeetingReminder";
  /**
   * <p>Whether an end of meeting reminder is enabled or not.</p>
   */
  Enabled?: boolean;

  /**
   * <p>A range of 3 to 15 minutes that determines when the reminder begins.</p>
   */
  ReminderAtMinutes?: number[];

  /**
   * <p>The type of sound that users hear during the end of meeting reminder. </p>
   */
  ReminderType?: EndOfMeetingReminderType | string;
}

export namespace EndOfMeetingReminder {
  export const filterSensitiveLog = (obj: EndOfMeetingReminder): any => ({
    ...obj
  });
  export const isa = (o: any): o is EndOfMeetingReminder =>
    __isa(o, "EndOfMeetingReminder");
}

export enum EndOfMeetingReminderType {
  ANNOUNCEMENT_TIME_CHECK = "ANNOUNCEMENT_TIME_CHECK",
  ANNOUNCEMENT_VARIABLE_TIME_LEFT = "ANNOUNCEMENT_VARIABLE_TIME_LEFT",
  CHIME = "CHIME",
  KNOCK = "KNOCK"
}

export enum EnrollmentStatus {
  DEREGISTERING = "DEREGISTERING",
  DISASSOCIATING = "DISASSOCIATING",
  INITIALIZED = "INITIALIZED",
  PENDING = "PENDING",
  REGISTERED = "REGISTERED"
}

export enum Feature {
  ALL = "ALL",
  BLUETOOTH = "BLUETOOTH",
  LISTS = "LISTS",
  NETWORK_PROFILE = "NETWORK_PROFILE",
  NOTIFICATIONS = "NOTIFICATIONS",
  SETTINGS = "SETTINGS",
  SKILLS = "SKILLS",
  VOLUME = "VOLUME"
}

/**
 * <p>A filter name and value pair that is used to return a more specific list of results.
 *          Filters can be used to match a set of resources by various criteria.</p>
 */
export interface Filter {
  __type?: "Filter";
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
    ...obj
  });
  export const isa = (o: any): o is Filter => __isa(o, "Filter");
}

export interface ForgetSmartHomeAppliancesRequest {
  __type?: "ForgetSmartHomeAppliancesRequest";
  /**
   * <p>The room that the appliances are associated with.</p>
   */
  RoomArn: string | undefined;
}

export namespace ForgetSmartHomeAppliancesRequest {
  export const filterSensitiveLog = (
    obj: ForgetSmartHomeAppliancesRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ForgetSmartHomeAppliancesRequest =>
    __isa(o, "ForgetSmartHomeAppliancesRequest");
}

export interface ForgetSmartHomeAppliancesResponse {
  __type?: "ForgetSmartHomeAppliancesResponse";
}

export namespace ForgetSmartHomeAppliancesResponse {
  export const filterSensitiveLog = (
    obj: ForgetSmartHomeAppliancesResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ForgetSmartHomeAppliancesResponse =>
    __isa(o, "ForgetSmartHomeAppliancesResponse");
}

/**
 * <p>The details of the gateway. </p>
 */
export interface Gateway {
  __type?: "Gateway";
  /**
   * <p>The ARN of the gateway.</p>
   */
  Arn?: string;

  /**
   * <p>The description of the gateway.</p>
   */
  Description?: string;

  /**
   * <p>The ARN of the gateway group that the gateway is associated to.</p>
   */
  GatewayGroupArn?: string;

  /**
   * <p>The name of the gateway.</p>
   */
  Name?: string;

  /**
   * <p>The software version of the gateway. The gateway automatically updates its software
   *          version during normal operation.</p>
   */
  SoftwareVersion?: string;
}

export namespace Gateway {
  export const filterSensitiveLog = (obj: Gateway): any => ({
    ...obj
  });
  export const isa = (o: any): o is Gateway => __isa(o, "Gateway");
}

/**
 * <p>The details of the gateway group.</p>
 */
export interface GatewayGroup {
  __type?: "GatewayGroup";
  /**
   * <p>The ARN of the gateway group.</p>
   */
  Arn?: string;

  /**
   * <p>The description of the gateway group.</p>
   */
  Description?: string;

  /**
   * <p>The name of the gateway group.</p>
   */
  Name?: string;
}

export namespace GatewayGroup {
  export const filterSensitiveLog = (obj: GatewayGroup): any => ({
    ...obj
  });
  export const isa = (o: any): o is GatewayGroup => __isa(o, "GatewayGroup");
}

/**
 * <p>The summary of a gateway group.</p>
 */
export interface GatewayGroupSummary {
  __type?: "GatewayGroupSummary";
  /**
   * <p>The ARN of the gateway group.</p>
   */
  Arn?: string;

  /**
   * <p>The description of the gateway group.</p>
   */
  Description?: string;

  /**
   * <p>The name of the gateway group.</p>
   */
  Name?: string;
}

export namespace GatewayGroupSummary {
  export const filterSensitiveLog = (obj: GatewayGroupSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is GatewayGroupSummary =>
    __isa(o, "GatewayGroupSummary");
}

/**
 * <p>The summary of a gateway.</p>
 */
export interface GatewaySummary {
  __type?: "GatewaySummary";
  /**
   * <p>The ARN of the gateway.</p>
   */
  Arn?: string;

  /**
   * <p>The description of the gateway.</p>
   */
  Description?: string;

  /**
   * <p>The ARN of the gateway group that the gateway is associated to.</p>
   */
  GatewayGroupArn?: string;

  /**
   * <p>The name of the gateway.</p>
   */
  Name?: string;

  /**
   * <p>The software version of the gateway. The gateway automatically updates its software
   *          version during normal operation.</p>
   */
  SoftwareVersion?: string;
}

export namespace GatewaySummary {
  export const filterSensitiveLog = (obj: GatewaySummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is GatewaySummary =>
    __isa(o, "GatewaySummary");
}

export interface GetAddressBookRequest {
  __type?: "GetAddressBookRequest";
  /**
   * <p>The ARN of the address book for which to request details.</p>
   */
  AddressBookArn: string | undefined;
}

export namespace GetAddressBookRequest {
  export const filterSensitiveLog = (obj: GetAddressBookRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetAddressBookRequest =>
    __isa(o, "GetAddressBookRequest");
}

export interface GetAddressBookResponse {
  __type?: "GetAddressBookResponse";
  /**
   * <p>The details of the requested address book.</p>
   */
  AddressBook?: AddressBook;
}

export namespace GetAddressBookResponse {
  export const filterSensitiveLog = (obj: GetAddressBookResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetAddressBookResponse =>
    __isa(o, "GetAddressBookResponse");
}

export interface GetConferencePreferenceRequest {
  __type?: "GetConferencePreferenceRequest";
}

export namespace GetConferencePreferenceRequest {
  export const filterSensitiveLog = (
    obj: GetConferencePreferenceRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetConferencePreferenceRequest =>
    __isa(o, "GetConferencePreferenceRequest");
}

export interface GetConferencePreferenceResponse {
  __type?: "GetConferencePreferenceResponse";
  /**
   * <p>The conference preference.</p>
   */
  Preference?: ConferencePreference;
}

export namespace GetConferencePreferenceResponse {
  export const filterSensitiveLog = (
    obj: GetConferencePreferenceResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetConferencePreferenceResponse =>
    __isa(o, "GetConferencePreferenceResponse");
}

export interface GetConferenceProviderRequest {
  __type?: "GetConferenceProviderRequest";
  /**
   * <p>The ARN of the newly created conference provider.</p>
   */
  ConferenceProviderArn: string | undefined;
}

export namespace GetConferenceProviderRequest {
  export const filterSensitiveLog = (
    obj: GetConferenceProviderRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetConferenceProviderRequest =>
    __isa(o, "GetConferenceProviderRequest");
}

export interface GetConferenceProviderResponse {
  __type?: "GetConferenceProviderResponse";
  /**
   * <p>The conference provider.</p>
   */
  ConferenceProvider?: ConferenceProvider;
}

export namespace GetConferenceProviderResponse {
  export const filterSensitiveLog = (
    obj: GetConferenceProviderResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetConferenceProviderResponse =>
    __isa(o, "GetConferenceProviderResponse");
}

export interface GetContactRequest {
  __type?: "GetContactRequest";
  /**
   * <p>The ARN of the contact for which to request details.</p>
   */
  ContactArn: string | undefined;
}

export namespace GetContactRequest {
  export const filterSensitiveLog = (obj: GetContactRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetContactRequest =>
    __isa(o, "GetContactRequest");
}

export interface GetContactResponse {
  __type?: "GetContactResponse";
  /**
   * <p>The details of the requested contact.</p>
   */
  Contact?: Contact;
}

export namespace GetContactResponse {
  export const filterSensitiveLog = (obj: GetContactResponse): any => ({
    ...obj,
    ...(obj.Contact && { Contact: Contact.filterSensitiveLog(obj.Contact) })
  });
  export const isa = (o: any): o is GetContactResponse =>
    __isa(o, "GetContactResponse");
}

export interface GetDeviceRequest {
  __type?: "GetDeviceRequest";
  /**
   * <p>The ARN of the device for which to request details. Required.</p>
   */
  DeviceArn?: string;
}

export namespace GetDeviceRequest {
  export const filterSensitiveLog = (obj: GetDeviceRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetDeviceRequest =>
    __isa(o, "GetDeviceRequest");
}

export interface GetDeviceResponse {
  __type?: "GetDeviceResponse";
  /**
   * <p>The details of the device requested. Required.</p>
   */
  Device?: Device;
}

export namespace GetDeviceResponse {
  export const filterSensitiveLog = (obj: GetDeviceResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetDeviceResponse =>
    __isa(o, "GetDeviceResponse");
}

export interface GetGatewayGroupRequest {
  __type?: "GetGatewayGroupRequest";
  /**
   * <p>The ARN of the gateway group to get.</p>
   */
  GatewayGroupArn: string | undefined;
}

export namespace GetGatewayGroupRequest {
  export const filterSensitiveLog = (obj: GetGatewayGroupRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetGatewayGroupRequest =>
    __isa(o, "GetGatewayGroupRequest");
}

export interface GetGatewayGroupResponse {
  __type?: "GetGatewayGroupResponse";
  /**
   * <p>The details of the gateway group.</p>
   */
  GatewayGroup?: GatewayGroup;
}

export namespace GetGatewayGroupResponse {
  export const filterSensitiveLog = (obj: GetGatewayGroupResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetGatewayGroupResponse =>
    __isa(o, "GetGatewayGroupResponse");
}

export interface GetGatewayRequest {
  __type?: "GetGatewayRequest";
  /**
   * <p>The ARN of the gateway to get.</p>
   */
  GatewayArn: string | undefined;
}

export namespace GetGatewayRequest {
  export const filterSensitiveLog = (obj: GetGatewayRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetGatewayRequest =>
    __isa(o, "GetGatewayRequest");
}

export interface GetGatewayResponse {
  __type?: "GetGatewayResponse";
  /**
   * <p>The details of the gateway.</p>
   */
  Gateway?: Gateway;
}

export namespace GetGatewayResponse {
  export const filterSensitiveLog = (obj: GetGatewayResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetGatewayResponse =>
    __isa(o, "GetGatewayResponse");
}

export interface GetInvitationConfigurationRequest {
  __type?: "GetInvitationConfigurationRequest";
}

export namespace GetInvitationConfigurationRequest {
  export const filterSensitiveLog = (
    obj: GetInvitationConfigurationRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetInvitationConfigurationRequest =>
    __isa(o, "GetInvitationConfigurationRequest");
}

export interface GetInvitationConfigurationResponse {
  __type?: "GetInvitationConfigurationResponse";
  /**
   * <p>The email ID of the organization or individual contact that the enrolled user can use.
   *       </p>
   */
  ContactEmail?: string;

  /**
   * <p>The name of the organization sending the enrollment invite to a user.</p>
   */
  OrganizationName?: string;

  /**
   * <p>The list of private skill IDs that you want to recommend to the user to enable in the
   *          invitation.</p>
   */
  PrivateSkillIds?: string[];
}

export namespace GetInvitationConfigurationResponse {
  export const filterSensitiveLog = (
    obj: GetInvitationConfigurationResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetInvitationConfigurationResponse =>
    __isa(o, "GetInvitationConfigurationResponse");
}

export interface GetNetworkProfileRequest {
  __type?: "GetNetworkProfileRequest";
  /**
   * <p>The ARN of the network profile associated with a device.</p>
   */
  NetworkProfileArn: string | undefined;
}

export namespace GetNetworkProfileRequest {
  export const filterSensitiveLog = (obj: GetNetworkProfileRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetNetworkProfileRequest =>
    __isa(o, "GetNetworkProfileRequest");
}

export interface GetNetworkProfileResponse {
  __type?: "GetNetworkProfileResponse";
  /**
   * <p>The network profile associated with a device.</p>
   */
  NetworkProfile?: NetworkProfile;
}

export namespace GetNetworkProfileResponse {
  export const filterSensitiveLog = (obj: GetNetworkProfileResponse): any => ({
    ...obj,
    ...(obj.NetworkProfile && {
      NetworkProfile: NetworkProfile.filterSensitiveLog(obj.NetworkProfile)
    })
  });
  export const isa = (o: any): o is GetNetworkProfileResponse =>
    __isa(o, "GetNetworkProfileResponse");
}

export interface GetProfileRequest {
  __type?: "GetProfileRequest";
  /**
   * <p>The ARN of the room profile for which to request details. Required.</p>
   */
  ProfileArn?: string;
}

export namespace GetProfileRequest {
  export const filterSensitiveLog = (obj: GetProfileRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetProfileRequest =>
    __isa(o, "GetProfileRequest");
}

export interface GetProfileResponse {
  __type?: "GetProfileResponse";
  /**
   * <p>The details of the room profile requested. Required.</p>
   */
  Profile?: Profile;
}

export namespace GetProfileResponse {
  export const filterSensitiveLog = (obj: GetProfileResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetProfileResponse =>
    __isa(o, "GetProfileResponse");
}

export interface GetRoomRequest {
  __type?: "GetRoomRequest";
  /**
   * <p>The ARN of the room for which to request details. Required.</p>
   */
  RoomArn?: string;
}

export namespace GetRoomRequest {
  export const filterSensitiveLog = (obj: GetRoomRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetRoomRequest =>
    __isa(o, "GetRoomRequest");
}

export interface GetRoomResponse {
  __type?: "GetRoomResponse";
  /**
   * <p>The details of the room requested.</p>
   */
  Room?: Room;
}

export namespace GetRoomResponse {
  export const filterSensitiveLog = (obj: GetRoomResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetRoomResponse =>
    __isa(o, "GetRoomResponse");
}

export interface GetRoomSkillParameterRequest {
  __type?: "GetRoomSkillParameterRequest";
  /**
   * <p>The room skill parameter key for which to get details. Required.</p>
   */
  ParameterKey: string | undefined;

  /**
   * <p>The ARN of the room from which to get the room skill parameter details. </p>
   */
  RoomArn?: string;

  /**
   * <p>The ARN of the skill from which to get the room skill parameter details.
   *          Required.</p>
   */
  SkillId: string | undefined;
}

export namespace GetRoomSkillParameterRequest {
  export const filterSensitiveLog = (
    obj: GetRoomSkillParameterRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetRoomSkillParameterRequest =>
    __isa(o, "GetRoomSkillParameterRequest");
}

export interface GetRoomSkillParameterResponse {
  __type?: "GetRoomSkillParameterResponse";
  /**
   * <p>The details of the room skill parameter requested. Required.</p>
   */
  RoomSkillParameter?: RoomSkillParameter;
}

export namespace GetRoomSkillParameterResponse {
  export const filterSensitiveLog = (
    obj: GetRoomSkillParameterResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetRoomSkillParameterResponse =>
    __isa(o, "GetRoomSkillParameterResponse");
}

export interface GetSkillGroupRequest {
  __type?: "GetSkillGroupRequest";
  /**
   * <p>The ARN of the skill group for which to get details. Required.</p>
   */
  SkillGroupArn?: string;
}

export namespace GetSkillGroupRequest {
  export const filterSensitiveLog = (obj: GetSkillGroupRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetSkillGroupRequest =>
    __isa(o, "GetSkillGroupRequest");
}

export interface GetSkillGroupResponse {
  __type?: "GetSkillGroupResponse";
  /**
   * <p>The details of the skill group requested. Required.</p>
   */
  SkillGroup?: SkillGroup;
}

export namespace GetSkillGroupResponse {
  export const filterSensitiveLog = (obj: GetSkillGroupResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetSkillGroupResponse =>
    __isa(o, "GetSkillGroupResponse");
}

/**
 * <p>Settings for the instant booking feature that are applied to a room profile. When users
 *          start their meeting with Alexa, Alexa  automatically books the room for the configured
 *          duration if the room is available.</p>
 */
export interface InstantBooking {
  __type?: "InstantBooking";
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
    ...obj
  });
  export const isa = (o: any): o is InstantBooking =>
    __isa(o, "InstantBooking");
}

/**
 * <p>The Certificate Authority can't issue or revoke a certificate.</p>
 */
export interface InvalidCertificateAuthorityException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidCertificateAuthorityException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidCertificateAuthorityException {
  export const filterSensitiveLog = (
    obj: InvalidCertificateAuthorityException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidCertificateAuthorityException =>
    __isa(o, "InvalidCertificateAuthorityException");
}

/**
 * <p>The device is in an invalid state.</p>
 */
export interface InvalidDeviceException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidDeviceException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidDeviceException {
  export const filterSensitiveLog = (obj: InvalidDeviceException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidDeviceException =>
    __isa(o, "InvalidDeviceException");
}

/**
 * <p>A password in SecretsManager is in an invalid state.</p>
 */
export interface InvalidSecretsManagerResourceException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidSecretsManagerResourceException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidSecretsManagerResourceException {
  export const filterSensitiveLog = (
    obj: InvalidSecretsManagerResourceException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidSecretsManagerResourceException =>
    __isa(o, "InvalidSecretsManagerResourceException");
}

/**
 * <p>The service linked role is locked for deletion. </p>
 */
export interface InvalidServiceLinkedRoleStateException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidServiceLinkedRoleStateException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidServiceLinkedRoleStateException {
  export const filterSensitiveLog = (
    obj: InvalidServiceLinkedRoleStateException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidServiceLinkedRoleStateException =>
    __isa(o, "InvalidServiceLinkedRoleStateException");
}

/**
 * <p>The attempt to update a user is invalid due to the user's current status.</p>
 */
export interface InvalidUserStatusException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidUserStatusException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidUserStatusException {
  export const filterSensitiveLog = (obj: InvalidUserStatusException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidUserStatusException =>
    __isa(o, "InvalidUserStatusException");
}

/**
 * <p>The IP endpoint and protocol for calling.</p>
 */
export interface IPDialIn {
  __type?: "IPDialIn";
  /**
   * <p>The protocol, including SIP, SIPS, and H323.</p>
   */
  CommsProtocol: CommsProtocol | string | undefined;

  /**
   * <p>The IP address.</p>
   */
  Endpoint: string | undefined;
}

export namespace IPDialIn {
  export const filterSensitiveLog = (obj: IPDialIn): any => ({
    ...obj
  });
  export const isa = (o: any): o is IPDialIn => __isa(o, "IPDialIn");
}

/**
 * <p>You are performing an action that would put you beyond your account's limits.</p>
 */
export interface LimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  Message?: string;
}

export namespace LimitExceededException {
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj
  });
  export const isa = (o: any): o is LimitExceededException =>
    __isa(o, "LimitExceededException");
}

export interface ListBusinessReportSchedulesRequest {
  __type?: "ListBusinessReportSchedulesRequest";
  /**
   * <p>The maximum number of schedules listed in the call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token used to list the remaining schedules from the previous API call.</p>
   */
  NextToken?: string;
}

export namespace ListBusinessReportSchedulesRequest {
  export const filterSensitiveLog = (
    obj: ListBusinessReportSchedulesRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListBusinessReportSchedulesRequest =>
    __isa(o, "ListBusinessReportSchedulesRequest");
}

export interface ListBusinessReportSchedulesResponse {
  __type?: "ListBusinessReportSchedulesResponse";
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
  export const filterSensitiveLog = (
    obj: ListBusinessReportSchedulesResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListBusinessReportSchedulesResponse =>
    __isa(o, "ListBusinessReportSchedulesResponse");
}

export interface ListConferenceProvidersRequest {
  __type?: "ListConferenceProvidersRequest";
  /**
   * <p>The maximum number of conference providers to be returned, per paginated
   *          calls.</p>
   */
  MaxResults?: number;

  /**
   * <p>The tokens used for pagination.</p>
   */
  NextToken?: string;
}

export namespace ListConferenceProvidersRequest {
  export const filterSensitiveLog = (
    obj: ListConferenceProvidersRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListConferenceProvidersRequest =>
    __isa(o, "ListConferenceProvidersRequest");
}

export interface ListConferenceProvidersResponse {
  __type?: "ListConferenceProvidersResponse";
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
  export const filterSensitiveLog = (
    obj: ListConferenceProvidersResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListConferenceProvidersResponse =>
    __isa(o, "ListConferenceProvidersResponse");
}

export interface ListDeviceEventsRequest {
  __type?: "ListDeviceEventsRequest";
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
   * <p>The maximum number of results to include in the response. The default value is 50. If
   *          more results exist than the specified MaxResults value, a token is included in the response
   *          so that the remaining results can be retrieved. </p>
   */
  MaxResults?: number;

  /**
   * <p>An optional token returned from a prior request. Use this token for pagination of
   *          results from this action. If this parameter is specified, the response only includes
   *          results beyond the token, up to the value specified by MaxResults. When the end of results
   *          is reached, the response has a value of null.</p>
   */
  NextToken?: string;
}

export namespace ListDeviceEventsRequest {
  export const filterSensitiveLog = (obj: ListDeviceEventsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListDeviceEventsRequest =>
    __isa(o, "ListDeviceEventsRequest");
}

export interface ListDeviceEventsResponse {
  __type?: "ListDeviceEventsResponse";
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
    ...obj
  });
  export const isa = (o: any): o is ListDeviceEventsResponse =>
    __isa(o, "ListDeviceEventsResponse");
}

export interface ListGatewayGroupsRequest {
  __type?: "ListGatewayGroupsRequest";
  /**
   * <p>The maximum number of gateway group summaries to return. The default is 50.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token used to paginate though multiple pages of gateway group summaries.</p>
   */
  NextToken?: string;
}

export namespace ListGatewayGroupsRequest {
  export const filterSensitiveLog = (obj: ListGatewayGroupsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListGatewayGroupsRequest =>
    __isa(o, "ListGatewayGroupsRequest");
}

export interface ListGatewayGroupsResponse {
  __type?: "ListGatewayGroupsResponse";
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
    ...obj
  });
  export const isa = (o: any): o is ListGatewayGroupsResponse =>
    __isa(o, "ListGatewayGroupsResponse");
}

export interface ListGatewaysRequest {
  __type?: "ListGatewaysRequest";
  /**
   * <p>The gateway group ARN for which to list gateways.</p>
   */
  GatewayGroupArn?: string;

  /**
   * <p>The maximum number of gateway summaries to return. The default is 50.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token used to paginate though multiple pages of gateway summaries.</p>
   */
  NextToken?: string;
}

export namespace ListGatewaysRequest {
  export const filterSensitiveLog = (obj: ListGatewaysRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListGatewaysRequest =>
    __isa(o, "ListGatewaysRequest");
}

export interface ListGatewaysResponse {
  __type?: "ListGatewaysResponse";
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
    ...obj
  });
  export const isa = (o: any): o is ListGatewaysResponse =>
    __isa(o, "ListGatewaysResponse");
}

export interface ListSkillsRequest {
  __type?: "ListSkillsRequest";
  /**
   * <p>Whether the skill is enabled under the user's account.</p>
   */
  EnablementType?: EnablementTypeFilter | string;

  /**
   * <p>The maximum number of results to include in the response. If more results exist than
   *          the specified <code>MaxResults</code> value, a token is included in the response so that
   *          the remaining results can be retrieved.</p>
   */
  MaxResults?: number;

  /**
   * <p>An optional token returned from a prior request. Use this token for pagination of
   *          results from this action. If this parameter is specified, the response includes only
   *          results beyond the token, up to the value specified by <code>MaxResults</code>.</p>
   */
  NextToken?: string;

  /**
   * <p>The ARN of the skill group for which to list enabled skills.</p>
   */
  SkillGroupArn?: string;

  /**
   * <p>Whether the skill is publicly available or is a private skill.</p>
   */
  SkillType?: SkillTypeFilter | string;
}

export namespace ListSkillsRequest {
  export const filterSensitiveLog = (obj: ListSkillsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListSkillsRequest =>
    __isa(o, "ListSkillsRequest");
}

export interface ListSkillsResponse {
  __type?: "ListSkillsResponse";
  /**
   * <p>The token returned to indicate that there is more data available.</p>
   */
  NextToken?: string;

  /**
   * <p>The list of enabled skills requested. Required.</p>
   */
  SkillSummaries?: SkillSummary[];
}

export namespace ListSkillsResponse {
  export const filterSensitiveLog = (obj: ListSkillsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListSkillsResponse =>
    __isa(o, "ListSkillsResponse");
}

export interface ListSkillsStoreCategoriesRequest {
  __type?: "ListSkillsStoreCategoriesRequest";
  /**
   * <p>The maximum number of categories returned, per paginated calls.</p>
   */
  MaxResults?: number;

  /**
   * <p>The tokens used for pagination.</p>
   */
  NextToken?: string;
}

export namespace ListSkillsStoreCategoriesRequest {
  export const filterSensitiveLog = (
    obj: ListSkillsStoreCategoriesRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListSkillsStoreCategoriesRequest =>
    __isa(o, "ListSkillsStoreCategoriesRequest");
}

export interface ListSkillsStoreCategoriesResponse {
  __type?: "ListSkillsStoreCategoriesResponse";
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
  export const filterSensitiveLog = (
    obj: ListSkillsStoreCategoriesResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListSkillsStoreCategoriesResponse =>
    __isa(o, "ListSkillsStoreCategoriesResponse");
}

export interface ListSkillsStoreSkillsByCategoryRequest {
  __type?: "ListSkillsStoreSkillsByCategoryRequest";
  /**
   * <p>The category ID for which the skills are being retrieved from the skill
   *          store.</p>
   */
  CategoryId: number | undefined;

  /**
   * <p>The maximum number of skills returned per paginated calls.</p>
   */
  MaxResults?: number;

  /**
   * <p>The tokens used for pagination.</p>
   */
  NextToken?: string;
}

export namespace ListSkillsStoreSkillsByCategoryRequest {
  export const filterSensitiveLog = (
    obj: ListSkillsStoreSkillsByCategoryRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListSkillsStoreSkillsByCategoryRequest =>
    __isa(o, "ListSkillsStoreSkillsByCategoryRequest");
}

export interface ListSkillsStoreSkillsByCategoryResponse {
  __type?: "ListSkillsStoreSkillsByCategoryResponse";
  /**
   * <p>The tokens used for pagination.</p>
   */
  NextToken?: string;

  /**
   * <p>The skill store skills.</p>
   */
  SkillsStoreSkills?: SkillsStoreSkill[];
}

export namespace ListSkillsStoreSkillsByCategoryResponse {
  export const filterSensitiveLog = (
    obj: ListSkillsStoreSkillsByCategoryResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListSkillsStoreSkillsByCategoryResponse =>
    __isa(o, "ListSkillsStoreSkillsByCategoryResponse");
}

export interface ListSmartHomeAppliancesRequest {
  __type?: "ListSmartHomeAppliancesRequest";
  /**
   * <p>The maximum number of appliances to be returned, per paginated calls.</p>
   */
  MaxResults?: number;

  /**
   * <p>The tokens used for pagination.</p>
   */
  NextToken?: string;

  /**
   * <p>The room that the appliances are associated with.</p>
   */
  RoomArn: string | undefined;
}

export namespace ListSmartHomeAppliancesRequest {
  export const filterSensitiveLog = (
    obj: ListSmartHomeAppliancesRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListSmartHomeAppliancesRequest =>
    __isa(o, "ListSmartHomeAppliancesRequest");
}

export interface ListSmartHomeAppliancesResponse {
  __type?: "ListSmartHomeAppliancesResponse";
  /**
   * <p>The tokens used for pagination.</p>
   */
  NextToken?: string;

  /**
   * <p>The smart home appliances.</p>
   */
  SmartHomeAppliances?: SmartHomeAppliance[];
}

export namespace ListSmartHomeAppliancesResponse {
  export const filterSensitiveLog = (
    obj: ListSmartHomeAppliancesResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListSmartHomeAppliancesResponse =>
    __isa(o, "ListSmartHomeAppliancesResponse");
}

export interface ListTagsRequest {
  __type?: "ListTagsRequest";
  /**
   * <p>The ARN of the specified resource for which to list tags.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The maximum number of results to include in the response. If more results exist than
   *          the specified <code>MaxResults</code> value, a token is included in the response so that
   *          the remaining results can be retrieved.</p>
   */
  MaxResults?: number;

  /**
   * <p>An optional token returned from a prior request. Use this token for pagination of
   *          results from this action. If this parameter is specified, the response includes only
   *          results beyond the token, up to the value specified by <code>MaxResults</code>. </p>
   */
  NextToken?: string;
}

export namespace ListTagsRequest {
  export const filterSensitiveLog = (obj: ListTagsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTagsRequest =>
    __isa(o, "ListTagsRequest");
}

export interface ListTagsResponse {
  __type?: "ListTagsResponse";
  /**
   * <p>The token returned to indicate that there is more data available.</p>
   */
  NextToken?: string;

  /**
   * <p>The tags requested for the specified resource.</p>
   */
  Tags?: Tag[];
}

export namespace ListTagsResponse {
  export const filterSensitiveLog = (obj: ListTagsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTagsResponse =>
    __isa(o, "ListTagsResponse");
}

export enum Locale {
  en_US = "en-US"
}

/**
 * <p>Meeting room settings of a room profile.</p>
 */
export interface MeetingRoomConfiguration {
  __type?: "MeetingRoomConfiguration";
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

  /**
   * <p>Whether room utilization metrics are enabled or not.</p>
   */
  RoomUtilizationMetricsEnabled?: boolean;
}

export namespace MeetingRoomConfiguration {
  export const filterSensitiveLog = (obj: MeetingRoomConfiguration): any => ({
    ...obj
  });
  export const isa = (o: any): o is MeetingRoomConfiguration =>
    __isa(o, "MeetingRoomConfiguration");
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
  __type?: "MeetingSetting";
  /**
   * <p>The values that indicate whether the pin is always required.</p>
   */
  RequirePin: RequirePin | string | undefined;
}

export namespace MeetingSetting {
  export const filterSensitiveLog = (obj: MeetingSetting): any => ({
    ...obj
  });
  export const isa = (o: any): o is MeetingSetting =>
    __isa(o, "MeetingSetting");
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
    ...obj
  });
  export const isa = (o: any): o is NameInUseException =>
    __isa(o, "NameInUseException");
}

export enum NetworkEapMethod {
  EAP_TLS = "EAP_TLS"
}

/**
 * <p>The network profile associated with a device.</p>
 */
export interface NetworkProfile {
  __type?: "NetworkProfile";
  /**
   * <p>The ARN of the Private Certificate Authority (PCA) created in AWS Certificate Manager
   *          (ACM). This is used to issue certificates to the devices. </p>
   */
  CertificateAuthorityArn?: string;

  /**
   * <p>The current password of the Wi-Fi network.</p>
   */
  CurrentPassword?: string;

  /**
   * <p>Detailed information about a device's network profile.</p>
   */
  Description?: string;

  /**
   * <p>The authentication standard that is used in the EAP framework. Currently, EAP_TLS is
   *          supported. </p>
   */
  EapMethod?: NetworkEapMethod | string;

  /**
   * <p>The ARN of the network profile associated with a device.</p>
   */
  NetworkProfileArn?: string;

  /**
   * <p>The name of the network profile associated with a device.</p>
   */
  NetworkProfileName?: string;

  /**
   * <p>The next, or subsequent, password of the Wi-Fi network. This password is asynchronously
   *          transmitted to the device and is used when the password of the network changes to
   *          NextPassword. </p>
   */
  NextPassword?: string;

  /**
   * <p>The security type of the Wi-Fi network. This can be WPA2_ENTERPRISE, WPA2_PSK, WPA_PSK,
   *          WEP, or OPEN.</p>
   */
  SecurityType?: NetworkSecurityType | string;

  /**
   * <p>The SSID of the Wi-Fi network.</p>
   */
  Ssid?: string;

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
    ...(obj.NextPassword && { NextPassword: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is NetworkProfile =>
    __isa(o, "NetworkProfile");
}

/**
 * <p>The data associated with a network profile.</p>
 */
export interface NetworkProfileData {
  __type?: "NetworkProfileData";
  /**
   * <p>The ARN of the Private Certificate Authority (PCA) created in AWS Certificate Manager
   *          (ACM). This is used to issue certificates to the devices.</p>
   */
  CertificateAuthorityArn?: string;

  /**
   * <p>Detailed information about a device's network profile.</p>
   */
  Description?: string;

  /**
   * <p>The authentication standard that is used in the EAP framework. Currently, EAP_TLS is
   *          supported.</p>
   */
  EapMethod?: NetworkEapMethod | string;

  /**
   * <p>The ARN of the network profile associated with a device.</p>
   */
  NetworkProfileArn?: string;

  /**
   * <p>The name of the network profile associated with a device.</p>
   */
  NetworkProfileName?: string;

  /**
   * <p>The security type of the Wi-Fi network. This can be WPA2_ENTERPRISE, WPA2_PSK, WPA_PSK,
   *          WEP, or OPEN.</p>
   */
  SecurityType?: NetworkSecurityType | string;

  /**
   * <p>The SSID of the Wi-Fi network.</p>
   */
  Ssid?: string;
}

export namespace NetworkProfileData {
  export const filterSensitiveLog = (obj: NetworkProfileData): any => ({
    ...obj
  });
  export const isa = (o: any): o is NetworkProfileData =>
    __isa(o, "NetworkProfileData");
}

export enum NetworkSecurityType {
  OPEN = "OPEN",
  WEP = "WEP",
  WPA2_ENTERPRISE = "WPA2_ENTERPRISE",
  WPA2_PSK = "WPA2_PSK",
  WPA_PSK = "WPA_PSK"
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
    ...obj
  });
  export const isa = (o: any): o is NotFoundException =>
    __isa(o, "NotFoundException");
}

/**
 * <p>The phone number for the contact containing the raw number and phone number type.</p>
 */
export interface PhoneNumber {
  __type?: "PhoneNumber";
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
    ...(obj.Type && { Type: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is PhoneNumber => __isa(o, "PhoneNumber");
}

export enum PhoneNumberType {
  HOME = "HOME",
  MOBILE = "MOBILE",
  WORK = "WORK"
}

/**
 * <p>A room profile with attributes.</p>
 */
export interface Profile {
  __type?: "Profile";
  /**
   * <p>The address of a room profile.</p>
   */
  Address?: string;

  /**
   * <p>The ARN of the address book.</p>
   */
  AddressBookArn?: string;

  /**
   * <p>The distance unit of a room profile.</p>
   */
  DistanceUnit?: DistanceUnit | string;

  /**
   * <p>Retrieves if the profile is default or not.</p>
   */
  IsDefault?: boolean;

  /**
   * <p>The locale of a room profile. (This is currently available only to a limited preview
   *          audience.)</p>
   */
  Locale?: string;

  /**
   * <p>The max volume limit of a room profile.</p>
   */
  MaxVolumeLimit?: number;

  /**
   * <p>Meeting room settings of a room profile.</p>
   */
  MeetingRoomConfiguration?: MeetingRoomConfiguration;

  /**
   * <p>The PSTN setting of a room profile.</p>
   */
  PSTNEnabled?: boolean;

  /**
   * <p>The ARN of a room profile.</p>
   */
  ProfileArn?: string;

  /**
   * <p>The name of a room profile.</p>
   */
  ProfileName?: string;

  /**
   * <p>The setup mode of a room profile.</p>
   */
  SetupModeDisabled?: boolean;

  /**
   * <p>The temperature unit of a room profile.</p>
   */
  TemperatureUnit?: TemperatureUnit | string;

  /**
   * <p>The time zone of a room profile.</p>
   */
  Timezone?: string;

  /**
   * <p>The wake word of a room profile.</p>
   */
  WakeWord?: WakeWord | string;
}

export namespace Profile {
  export const filterSensitiveLog = (obj: Profile): any => ({
    ...obj
  });
  export const isa = (o: any): o is Profile => __isa(o, "Profile");
}

/**
 * <p>The data of a room profile.</p>
 */
export interface ProfileData {
  __type?: "ProfileData";
  /**
   * <p>The address of a room profile.</p>
   */
  Address?: string;

  /**
   * <p>The distance unit of a room profile.</p>
   */
  DistanceUnit?: DistanceUnit | string;

  /**
   * <p>Retrieves if the profile data is default or not.</p>
   */
  IsDefault?: boolean;

  /**
   * <p>The locale of a room profile. (This is currently available only to a limited preview
   *          audience.)</p>
   */
  Locale?: string;

  /**
   * <p>The ARN of a room profile.</p>
   */
  ProfileArn?: string;

  /**
   * <p>The name of a room profile.</p>
   */
  ProfileName?: string;

  /**
   * <p>The temperature unit of a room profile.</p>
   */
  TemperatureUnit?: TemperatureUnit | string;

  /**
   * <p>The time zone of a room profile.</p>
   */
  Timezone?: string;

  /**
   * <p>The wake word of a room profile.</p>
   */
  WakeWord?: WakeWord | string;
}

export namespace ProfileData {
  export const filterSensitiveLog = (obj: ProfileData): any => ({
    ...obj
  });
  export const isa = (o: any): o is ProfileData => __isa(o, "ProfileData");
}

/**
 * <p>The information for public switched telephone network (PSTN) conferencing.</p>
 */
export interface PSTNDialIn {
  __type?: "PSTNDialIn";
  /**
   * <p>The zip code.</p>
   */
  CountryCode: string | undefined;

  /**
   * <p>The delay duration before Alexa enters the conference ID with dual-tone multi-frequency (DTMF). Each number on the dial pad corresponds to a DTMF tone, which is how we send data over the telephone network.</p>
   */
  OneClickIdDelay: string | undefined;

  /**
   * <p>The delay duration before Alexa enters the conference pin with dual-tone multi-frequency (DTMF). Each number on the dial pad corresponds to a DTMF tone, which is how we send data over the telephone network.</p>
   */
  OneClickPinDelay: string | undefined;

  /**
   * <p>The phone number to call to join the conference.</p>
   */
  PhoneNumber: string | undefined;
}

export namespace PSTNDialIn {
  export const filterSensitiveLog = (obj: PSTNDialIn): any => ({
    ...obj
  });
  export const isa = (o: any): o is PSTNDialIn => __isa(o, "PSTNDialIn");
}

export interface PutConferencePreferenceRequest {
  __type?: "PutConferencePreferenceRequest";
  /**
   * <p>The conference preference of a specific conference provider.</p>
   */
  ConferencePreference: ConferencePreference | undefined;
}

export namespace PutConferencePreferenceRequest {
  export const filterSensitiveLog = (
    obj: PutConferencePreferenceRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutConferencePreferenceRequest =>
    __isa(o, "PutConferencePreferenceRequest");
}

export interface PutConferencePreferenceResponse {
  __type?: "PutConferencePreferenceResponse";
}

export namespace PutConferencePreferenceResponse {
  export const filterSensitiveLog = (
    obj: PutConferencePreferenceResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutConferencePreferenceResponse =>
    __isa(o, "PutConferencePreferenceResponse");
}

export interface PutInvitationConfigurationRequest {
  __type?: "PutInvitationConfigurationRequest";
  /**
   * <p>The email ID of the organization or individual contact that the enrolled user can use.
   *       </p>
   */
  ContactEmail?: string;

  /**
   * <p>The name of the organization sending the enrollment invite to a user.</p>
   */
  OrganizationName: string | undefined;

  /**
   * <p>The list of private skill IDs that you want to recommend to the user to enable in the
   *          invitation.</p>
   */
  PrivateSkillIds?: string[];
}

export namespace PutInvitationConfigurationRequest {
  export const filterSensitiveLog = (
    obj: PutInvitationConfigurationRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutInvitationConfigurationRequest =>
    __isa(o, "PutInvitationConfigurationRequest");
}

export interface PutInvitationConfigurationResponse {
  __type?: "PutInvitationConfigurationResponse";
}

export namespace PutInvitationConfigurationResponse {
  export const filterSensitiveLog = (
    obj: PutInvitationConfigurationResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutInvitationConfigurationResponse =>
    __isa(o, "PutInvitationConfigurationResponse");
}

export interface PutRoomSkillParameterRequest {
  __type?: "PutRoomSkillParameterRequest";
  /**
   * <p>The ARN of the room associated with the room skill parameter. Required.</p>
   */
  RoomArn?: string;

  /**
   * <p>The updated room skill parameter. Required.</p>
   */
  RoomSkillParameter: RoomSkillParameter | undefined;

  /**
   * <p>The ARN of the skill associated with the room skill parameter. Required.</p>
   */
  SkillId: string | undefined;
}

export namespace PutRoomSkillParameterRequest {
  export const filterSensitiveLog = (
    obj: PutRoomSkillParameterRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutRoomSkillParameterRequest =>
    __isa(o, "PutRoomSkillParameterRequest");
}

export interface PutRoomSkillParameterResponse {
  __type?: "PutRoomSkillParameterResponse";
}

export namespace PutRoomSkillParameterResponse {
  export const filterSensitiveLog = (
    obj: PutRoomSkillParameterResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutRoomSkillParameterResponse =>
    __isa(o, "PutRoomSkillParameterResponse");
}

export interface PutSkillAuthorizationRequest {
  __type?: "PutSkillAuthorizationRequest";
  /**
   * <p>The authorization result specific to OAUTH code grant output. "Code” must be
   *          populated in the AuthorizationResult map to establish the authorization.</p>
   */
  AuthorizationResult: { [key: string]: string } | undefined;

  /**
   * <p>The room that the skill is authorized for.</p>
   */
  RoomArn?: string;

  /**
   * <p>The unique identifier of a skill.</p>
   */
  SkillId: string | undefined;
}

export namespace PutSkillAuthorizationRequest {
  export const filterSensitiveLog = (
    obj: PutSkillAuthorizationRequest
  ): any => ({
    ...obj,
    ...(obj.AuthorizationResult && { AuthorizationResult: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is PutSkillAuthorizationRequest =>
    __isa(o, "PutSkillAuthorizationRequest");
}

export interface PutSkillAuthorizationResponse {
  __type?: "PutSkillAuthorizationResponse";
}

export namespace PutSkillAuthorizationResponse {
  export const filterSensitiveLog = (
    obj: PutSkillAuthorizationResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutSkillAuthorizationResponse =>
    __isa(o, "PutSkillAuthorizationResponse");
}

export interface RegisterAVSDeviceRequest {
  __type?: "RegisterAVSDeviceRequest";
  /**
   * <p>The device type ID for your AVS device generated by Amazon when the OEM creates a new
   *          product on Amazon's Developer Console.</p>
   */
  AmazonId: string | undefined;

  /**
   * <p>The client ID of the OEM used for code-based linking authorization on an AVS
   *          device.</p>
   */
  ClientId: string | undefined;

  /**
   * <p>The key generated by the OEM that uniquely identifies a specified instance of your
   *          AVS device.</p>
   */
  DeviceSerialNumber: string | undefined;

  /**
   * <p>The product ID used to identify your AVS device during authorization.</p>
   */
  ProductId: string | undefined;

  /**
   * <p>The code that is obtained after your AVS device has made a POST request to LWA as a
   *          part of the Device Authorization Request component of the OAuth code-based linking
   *          specification.</p>
   */
  UserCode: string | undefined;
}

export namespace RegisterAVSDeviceRequest {
  export const filterSensitiveLog = (obj: RegisterAVSDeviceRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is RegisterAVSDeviceRequest =>
    __isa(o, "RegisterAVSDeviceRequest");
}

export interface RegisterAVSDeviceResponse {
  __type?: "RegisterAVSDeviceResponse";
  /**
   * <p>The ARN of the device.</p>
   */
  DeviceArn?: string;
}

export namespace RegisterAVSDeviceResponse {
  export const filterSensitiveLog = (obj: RegisterAVSDeviceResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is RegisterAVSDeviceResponse =>
    __isa(o, "RegisterAVSDeviceResponse");
}

export interface RejectSkillRequest {
  __type?: "RejectSkillRequest";
  /**
   * <p>The unique identifier of the skill.</p>
   */
  SkillId: string | undefined;
}

export namespace RejectSkillRequest {
  export const filterSensitiveLog = (obj: RejectSkillRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is RejectSkillRequest =>
    __isa(o, "RejectSkillRequest");
}

export interface RejectSkillResponse {
  __type?: "RejectSkillResponse";
}

export namespace RejectSkillResponse {
  export const filterSensitiveLog = (obj: RejectSkillResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is RejectSkillResponse =>
    __isa(o, "RejectSkillResponse");
}

/**
 * <p>Settings for the require check in feature that are applied to a room profile. Require check in allows a meeting room’s Alexa or AVS device to prompt the user to check in; otherwise, the room will be released. </p>
 */
export interface RequireCheckIn {
  __type?: "RequireCheckIn";
  /**
   * <p>Whether require check in is enabled or not.</p>
   */
  Enabled?: boolean;

  /**
   * <p>Duration between 5 and 20 minutes to determine when to release the room if it's not checked into. </p>
   */
  ReleaseAfterMinutes?: number;
}

export namespace RequireCheckIn {
  export const filterSensitiveLog = (obj: RequireCheckIn): any => ({
    ...obj
  });
  export const isa = (o: any): o is RequireCheckIn =>
    __isa(o, "RequireCheckIn");
}

export enum RequirePin {
  NO = "NO",
  OPTIONAL = "OPTIONAL",
  YES = "YES"
}

export interface ResolveRoomRequest {
  __type?: "ResolveRoomRequest";
  /**
   * <p>The ARN of the skill that was requested. Required.</p>
   */
  SkillId: string | undefined;

  /**
   * <p>The ARN of the user. Required.</p>
   */
  UserId: string | undefined;
}

export namespace ResolveRoomRequest {
  export const filterSensitiveLog = (obj: ResolveRoomRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResolveRoomRequest =>
    __isa(o, "ResolveRoomRequest");
}

export interface ResolveRoomResponse {
  __type?: "ResolveRoomResponse";
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
    ...obj
  });
  export const isa = (o: any): o is ResolveRoomResponse =>
    __isa(o, "ResolveRoomResponse");
}

/**
 * <p>Another resource is associated with the resource in the request.</p>
 */
export interface ResourceAssociatedException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceAssociatedException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceAssociatedException {
  export const filterSensitiveLog = (
    obj: ResourceAssociatedException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceAssociatedException =>
    __isa(o, "ResourceAssociatedException");
}

/**
 * <p>The resource in the request is already in use.</p>
 */
export interface ResourceInUseException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceInUseException";
  $fault: "client";
  /**
   * <p>A unique, user-specified identifier for the request that ensures idempotency.</p>
   */
  ClientRequestToken?: string;

  Message?: string;
}

export namespace ResourceInUseException {
  export const filterSensitiveLog = (obj: ResourceInUseException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceInUseException =>
    __isa(o, "ResourceInUseException");
}

export interface RevokeInvitationRequest {
  __type?: "RevokeInvitationRequest";
  /**
   * <p>The ARN of the enrollment invitation to revoke. Required.</p>
   */
  EnrollmentId?: string;

  /**
   * <p>The ARN of the user for whom to revoke an enrollment invitation. Required.</p>
   */
  UserArn?: string;
}

export namespace RevokeInvitationRequest {
  export const filterSensitiveLog = (obj: RevokeInvitationRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is RevokeInvitationRequest =>
    __isa(o, "RevokeInvitationRequest");
}

export interface RevokeInvitationResponse {
  __type?: "RevokeInvitationResponse";
}

export namespace RevokeInvitationResponse {
  export const filterSensitiveLog = (obj: RevokeInvitationResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is RevokeInvitationResponse =>
    __isa(o, "RevokeInvitationResponse");
}

/**
 * <p>A room with attributes.</p>
 */
export interface Room {
  __type?: "Room";
  /**
   * <p>The description of a room.</p>
   */
  Description?: string;

  /**
   * <p>The profile ARN of a room.</p>
   */
  ProfileArn?: string;

  /**
   * <p>The provider calendar ARN of a room.</p>
   */
  ProviderCalendarId?: string;

  /**
   * <p>The ARN of a room.</p>
   */
  RoomArn?: string;

  /**
   * <p>The name of a room.</p>
   */
  RoomName?: string;
}

export namespace Room {
  export const filterSensitiveLog = (obj: Room): any => ({
    ...obj
  });
  export const isa = (o: any): o is Room => __isa(o, "Room");
}

/**
 * <p>The data of a room.</p>
 */
export interface RoomData {
  __type?: "RoomData";
  /**
   * <p>The description of a room.</p>
   */
  Description?: string;

  /**
   * <p>The profile ARN of a room.</p>
   */
  ProfileArn?: string;

  /**
   * <p>The profile name of a room.</p>
   */
  ProfileName?: string;

  /**
   * <p>The provider calendar ARN of a room.</p>
   */
  ProviderCalendarId?: string;

  /**
   * <p>The ARN of a room.</p>
   */
  RoomArn?: string;

  /**
   * <p>The name of a room.</p>
   */
  RoomName?: string;
}

export namespace RoomData {
  export const filterSensitiveLog = (obj: RoomData): any => ({
    ...obj
  });
  export const isa = (o: any): o is RoomData => __isa(o, "RoomData");
}

/**
 * <p>A skill parameter associated with a room.</p>
 */
export interface RoomSkillParameter {
  __type?: "RoomSkillParameter";
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
    ...obj
  });
  export const isa = (o: any): o is RoomSkillParameter =>
    __isa(o, "RoomSkillParameter");
}

export interface SearchAddressBooksRequest {
  __type?: "SearchAddressBooksRequest";
  /**
   * <p>The filters to use to list a specified set of address books. The supported filter key
   *          is AddressBookName.</p>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to include in the response. If more results exist than
   *          the specified MaxResults value, a token is included in the response so that the remaining
   *          results can be retrieved.</p>
   */
  MaxResults?: number;

  /**
   * <p>An optional token returned from a prior request. Use this token for pagination of
   *          results from this action. If this parameter is specified, the response only includes
   *          results beyond the token, up to the value specified by MaxResults.</p>
   */
  NextToken?: string;

  /**
   * <p>The sort order to use in listing the specified set of address books. The supported
   *          sort key is AddressBookName.</p>
   */
  SortCriteria?: Sort[];
}

export namespace SearchAddressBooksRequest {
  export const filterSensitiveLog = (obj: SearchAddressBooksRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is SearchAddressBooksRequest =>
    __isa(o, "SearchAddressBooksRequest");
}

export interface SearchAddressBooksResponse {
  __type?: "SearchAddressBooksResponse";
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
    ...obj
  });
  export const isa = (o: any): o is SearchAddressBooksResponse =>
    __isa(o, "SearchAddressBooksResponse");
}

export interface SearchContactsRequest {
  __type?: "SearchContactsRequest";
  /**
   * <p>The filters to use to list a specified set of address books. The supported filter
   *          keys are DisplayName, FirstName, LastName, and AddressBookArns.</p>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to include in the response. If more results exist than
   *          the specified MaxResults value, a token is included in the response so that the remaining
   *          results can be retrieved.</p>
   */
  MaxResults?: number;

  /**
   * <p>An optional token returned from a prior request. Use this token for pagination of
   *          results from this action. If this parameter is specified, the response only includes
   *          results beyond the token, up to the value specified by MaxResults.</p>
   */
  NextToken?: string;

  /**
   * <p>The sort order to use in listing the specified set of contacts. The supported sort
   *          keys are DisplayName, FirstName, and LastName.</p>
   */
  SortCriteria?: Sort[];
}

export namespace SearchContactsRequest {
  export const filterSensitiveLog = (obj: SearchContactsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is SearchContactsRequest =>
    __isa(o, "SearchContactsRequest");
}

export interface SearchContactsResponse {
  __type?: "SearchContactsResponse";
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
    ...(obj.Contacts && {
      Contacts: obj.Contacts.map(item => ContactData.filterSensitiveLog(item))
    })
  });
  export const isa = (o: any): o is SearchContactsResponse =>
    __isa(o, "SearchContactsResponse");
}

export interface SearchDevicesRequest {
  __type?: "SearchDevicesRequest";
  /**
   * <p>The filters to use to list a specified set of devices. Supported filter keys are
   *          DeviceName, DeviceStatus, DeviceStatusDetailCode, RoomName, DeviceType, DeviceSerialNumber,
   *          UnassociatedOnly, ConnectionStatus (ONLINE and OFFLINE), NetworkProfileName,
   *          NetworkProfileArn, Feature, and FailureCode.</p>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to include in the response. If more results exist than
   *          the specified <code>MaxResults</code> value, a token is included in the response so that
   *          the remaining results can be retrieved.</p>
   */
  MaxResults?: number;

  /**
   * <p>An optional token returned from a prior request. Use this token for pagination of
   *          results from this action. If this parameter is specified, the response includes only
   *          results beyond the token, up to the value specified by <code>MaxResults</code>.</p>
   */
  NextToken?: string;

  /**
   * <p>The sort order to use in listing the specified set of devices. Supported sort keys
   *          are DeviceName, DeviceStatus, RoomName, DeviceType, DeviceSerialNumber, ConnectionStatus,
   *          NetworkProfileName, NetworkProfileArn, Feature, and FailureCode.</p>
   */
  SortCriteria?: Sort[];
}

export namespace SearchDevicesRequest {
  export const filterSensitiveLog = (obj: SearchDevicesRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is SearchDevicesRequest =>
    __isa(o, "SearchDevicesRequest");
}

export interface SearchDevicesResponse {
  __type?: "SearchDevicesResponse";
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
    ...obj
  });
  export const isa = (o: any): o is SearchDevicesResponse =>
    __isa(o, "SearchDevicesResponse");
}

export interface SearchNetworkProfilesRequest {
  __type?: "SearchNetworkProfilesRequest";
  /**
   * <p>The filters to use to list a specified set of network profiles. Valid filters are
   *          NetworkProfileName, Ssid, and SecurityType.</p>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to include in the response. If more results exist than the
   *          specified MaxResults value, a token is included in the response so that the remaining
   *          results can be retrieved. </p>
   */
  MaxResults?: number;

  /**
   * <p>An optional token returned from a prior request. Use this token for pagination of
   *          results from this action. If this parameter is specified, the response includes only
   *          results beyond the token, up to the value specified by MaxResults. </p>
   */
  NextToken?: string;

  /**
   * <p>The sort order to use to list the specified set of network profiles. Valid sort criteria
   *          includes NetworkProfileName, Ssid, and SecurityType.</p>
   */
  SortCriteria?: Sort[];
}

export namespace SearchNetworkProfilesRequest {
  export const filterSensitiveLog = (
    obj: SearchNetworkProfilesRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is SearchNetworkProfilesRequest =>
    __isa(o, "SearchNetworkProfilesRequest");
}

export interface SearchNetworkProfilesResponse {
  __type?: "SearchNetworkProfilesResponse";
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
  export const filterSensitiveLog = (
    obj: SearchNetworkProfilesResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is SearchNetworkProfilesResponse =>
    __isa(o, "SearchNetworkProfilesResponse");
}

export interface SearchProfilesRequest {
  __type?: "SearchProfilesRequest";
  /**
   * <p>The filters to use to list a specified set of room profiles. Supported filter keys
   *          are ProfileName and Address. Required. </p>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to include in the response. If more results exist than
   *          the specified <code>MaxResults</code> value, a token is included in the response so that
   *          the remaining results can be retrieved.</p>
   */
  MaxResults?: number;

  /**
   * <p>An optional token returned from a prior request. Use this token for pagination of
   *          results from this action. If this parameter is specified, the response includes only
   *          results beyond the token, up to the value specified by <code>MaxResults</code>.</p>
   */
  NextToken?: string;

  /**
   * <p>The sort order to use in listing the specified set of room profiles. Supported sort
   *          keys are ProfileName and Address.</p>
   */
  SortCriteria?: Sort[];
}

export namespace SearchProfilesRequest {
  export const filterSensitiveLog = (obj: SearchProfilesRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is SearchProfilesRequest =>
    __isa(o, "SearchProfilesRequest");
}

export interface SearchProfilesResponse {
  __type?: "SearchProfilesResponse";
  /**
   * <p>The token returned to indicate that there is more data available.</p>
   */
  NextToken?: string;

  /**
   * <p>The profiles that meet the specified set of filter criteria, in sort order.</p>
   */
  Profiles?: ProfileData[];

  /**
   * <p>The total number of room profiles returned.</p>
   */
  TotalCount?: number;
}

export namespace SearchProfilesResponse {
  export const filterSensitiveLog = (obj: SearchProfilesResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is SearchProfilesResponse =>
    __isa(o, "SearchProfilesResponse");
}

export interface SearchRoomsRequest {
  __type?: "SearchRoomsRequest";
  /**
   * <p>The filters to use to list a specified set of rooms. The supported filter keys are
   *          RoomName and ProfileName.</p>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to include in the response. If more results exist than
   *          the specified <code>MaxResults</code> value, a token is included in the response so that
   *          the remaining results can be retrieved. </p>
   */
  MaxResults?: number;

  /**
   * <p>An optional token returned from a prior request. Use this token for pagination of
   *          results from this action. If this parameter is specified, the response includes only
   *          results beyond the token, up to the value specified by <code>MaxResults</code>.</p>
   */
  NextToken?: string;

  /**
   * <p>The sort order to use in listing the specified set of rooms. The supported sort keys
   *          are RoomName and ProfileName.</p>
   */
  SortCriteria?: Sort[];
}

export namespace SearchRoomsRequest {
  export const filterSensitiveLog = (obj: SearchRoomsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is SearchRoomsRequest =>
    __isa(o, "SearchRoomsRequest");
}

export interface SearchRoomsResponse {
  __type?: "SearchRoomsResponse";
  /**
   * <p>The token returned to indicate that there is more data available.</p>
   */
  NextToken?: string;

  /**
   * <p>The rooms that meet the specified set of filter criteria, in sort order.</p>
   */
  Rooms?: RoomData[];

  /**
   * <p>The total number of rooms returned.</p>
   */
  TotalCount?: number;
}

export namespace SearchRoomsResponse {
  export const filterSensitiveLog = (obj: SearchRoomsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is SearchRoomsResponse =>
    __isa(o, "SearchRoomsResponse");
}

export interface SearchSkillGroupsRequest {
  __type?: "SearchSkillGroupsRequest";
  /**
   * <p>The filters to use to list a specified set of skill groups. The supported filter key
   *          is SkillGroupName. </p>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to include in the response. If more results exist than
   *          the specified <code>MaxResults</code> value, a token is included in the response so that
   *          the remaining results can be retrieved. </p>
   */
  MaxResults?: number;

  /**
   * <p>An optional token returned from a prior request. Use this token for pagination of
   *          results from this action. If this parameter is specified, the response includes only
   *          results beyond the token, up to the value specified by <code>MaxResults</code>.
   *          Required.</p>
   */
  NextToken?: string;

  /**
   * <p>The sort order to use in listing the specified set of skill groups. The supported
   *          sort key is SkillGroupName. </p>
   */
  SortCriteria?: Sort[];
}

export namespace SearchSkillGroupsRequest {
  export const filterSensitiveLog = (obj: SearchSkillGroupsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is SearchSkillGroupsRequest =>
    __isa(o, "SearchSkillGroupsRequest");
}

export interface SearchSkillGroupsResponse {
  __type?: "SearchSkillGroupsResponse";
  /**
   * <p>The token returned to indicate that there is more data available.</p>
   */
  NextToken?: string;

  /**
   * <p>The skill groups that meet the filter criteria, in sort order.</p>
   */
  SkillGroups?: SkillGroupData[];

  /**
   * <p>The total number of skill groups returned.</p>
   */
  TotalCount?: number;
}

export namespace SearchSkillGroupsResponse {
  export const filterSensitiveLog = (obj: SearchSkillGroupsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is SearchSkillGroupsResponse =>
    __isa(o, "SearchSkillGroupsResponse");
}

export interface SearchUsersRequest {
  __type?: "SearchUsersRequest";
  /**
   * <p>The filters to use for listing a specific set of users. Required. Supported filter
   *          keys are UserId, FirstName, LastName, Email, and EnrollmentStatus.</p>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of results to include in the response. If more results exist than
   *          the specified <code>MaxResults</code> value, a token is included in the response so that
   *          the remaining results can be retrieved. Required.</p>
   */
  MaxResults?: number;

  /**
   * <p>An optional token returned from a prior request. Use this token for pagination of
   *          results from this action. If this parameter is specified, the response includes only
   *          results beyond the token, up to the value specified by <code>MaxResults</code>.
   *          Required.</p>
   */
  NextToken?: string;

  /**
   * <p>The sort order to use in listing the filtered set of users. Required. Supported sort
   *          keys are UserId, FirstName, LastName, Email, and EnrollmentStatus.</p>
   */
  SortCriteria?: Sort[];
}

export namespace SearchUsersRequest {
  export const filterSensitiveLog = (obj: SearchUsersRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is SearchUsersRequest =>
    __isa(o, "SearchUsersRequest");
}

export interface SearchUsersResponse {
  __type?: "SearchUsersResponse";
  /**
   * <p>The token returned to indicate that there is more data available.</p>
   */
  NextToken?: string;

  /**
   * <p>The total number of users returned.</p>
   */
  TotalCount?: number;

  /**
   * <p>The users that meet the specified set of filter criteria, in sort order.</p>
   */
  Users?: UserData[];
}

export namespace SearchUsersResponse {
  export const filterSensitiveLog = (obj: SearchUsersResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is SearchUsersResponse =>
    __isa(o, "SearchUsersResponse");
}

export interface SendAnnouncementRequest {
  __type?: "SendAnnouncementRequest";
  /**
   * <p>The unique, user-specified identifier for the request that ensures idempotency.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The announcement content. This can contain only one of the three possible announcement types (text, SSML or audio).</p>
   */
  Content: Content | undefined;

  /**
   * <p>The filters to use to send an announcement to a specified list of rooms. The supported filter keys are RoomName, ProfileName, RoomArn, and ProfileArn. To send to all rooms, specify an empty RoomFilters list.</p>
   */
  RoomFilters: Filter[] | undefined;

  /**
   * <p>The time to live for an announcement. Default is 300. If delivery doesn't occur within this time, the
   *          announcement is not delivered.</p>
   */
  TimeToLiveInSeconds?: number;
}

export namespace SendAnnouncementRequest {
  export const filterSensitiveLog = (obj: SendAnnouncementRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is SendAnnouncementRequest =>
    __isa(o, "SendAnnouncementRequest");
}

export interface SendAnnouncementResponse {
  __type?: "SendAnnouncementResponse";
  /**
   * <p>The identifier of the announcement.</p>
   */
  AnnouncementArn?: string;
}

export namespace SendAnnouncementResponse {
  export const filterSensitiveLog = (obj: SendAnnouncementResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is SendAnnouncementResponse =>
    __isa(o, "SendAnnouncementResponse");
}

export interface SendInvitationRequest {
  __type?: "SendInvitationRequest";
  /**
   * <p>The ARN of the user to whom to send an invitation. Required.</p>
   */
  UserArn?: string;
}

export namespace SendInvitationRequest {
  export const filterSensitiveLog = (obj: SendInvitationRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is SendInvitationRequest =>
    __isa(o, "SendInvitationRequest");
}

export interface SendInvitationResponse {
  __type?: "SendInvitationResponse";
}

export namespace SendInvitationResponse {
  export const filterSensitiveLog = (obj: SendInvitationResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is SendInvitationResponse =>
    __isa(o, "SendInvitationResponse");
}

/**
 * <p>The SIP address for the contact containing the URI and SIP address type.</p>
 */
export interface SipAddress {
  __type?: "SipAddress";
  /**
   * <p>The type of the SIP address.</p>
   */
  Type: SipType | string | undefined;

  /**
   * <p>The URI for the SIP address.</p>
   */
  Uri: string | undefined;
}

export namespace SipAddress {
  export const filterSensitiveLog = (obj: SipAddress): any => ({
    ...obj,
    ...(obj.Type && { Type: SENSITIVE_STRING }),
    ...(obj.Uri && { Uri: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is SipAddress => __isa(o, "SipAddress");
}

export enum SipType {
  WORK = "WORK"
}

/**
 * <p>Granular information about the skill.</p>
 */
export interface SkillDetails {
  __type?: "SkillDetails";
  /**
   * <p>The details about what the skill supports organized as bullet points.</p>
   */
  BulletPoints?: string[];

  /**
   * <p>The details about the developer that published the skill.</p>
   */
  DeveloperInfo?: DeveloperInfo;

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
   * <p>The phrase used to trigger the skill.</p>
   */
  InvocationPhrase?: string;

  /**
   * <p>The updates added in bullet points.</p>
   */
  NewInThisVersionBulletPoints?: string[];

  /**
   * <p>The description of the product.</p>
   */
  ProductDescription?: string;

  /**
   * <p>The date when the skill was released.</p>
   */
  ReleaseDate?: string;

  /**
   * <p>The list of reviews for the skill, including Key and Value pair.</p>
   */
  Reviews?: { [key: string]: string };

  /**
   * <p>The types of skills.</p>
   */
  SkillTypes?: string[];
}

export namespace SkillDetails {
  export const filterSensitiveLog = (obj: SkillDetails): any => ({
    ...obj
  });
  export const isa = (o: any): o is SkillDetails => __isa(o, "SkillDetails");
}

/**
 * <p>A skill group with attributes.</p>
 */
export interface SkillGroup {
  __type?: "SkillGroup";
  /**
   * <p>The description of a skill group.</p>
   */
  Description?: string;

  /**
   * <p>The ARN of a skill group.</p>
   */
  SkillGroupArn?: string;

  /**
   * <p>The name of a skill group.</p>
   */
  SkillGroupName?: string;
}

export namespace SkillGroup {
  export const filterSensitiveLog = (obj: SkillGroup): any => ({
    ...obj
  });
  export const isa = (o: any): o is SkillGroup => __isa(o, "SkillGroup");
}

/**
 * <p>The attributes of a skill group.</p>
 */
export interface SkillGroupData {
  __type?: "SkillGroupData";
  /**
   * <p>The description of a skill group.</p>
   */
  Description?: string;

  /**
   * <p>The skill group ARN of a skill group.</p>
   */
  SkillGroupArn?: string;

  /**
   * <p>The skill group name of a skill group.</p>
   */
  SkillGroupName?: string;
}

export namespace SkillGroupData {
  export const filterSensitiveLog = (obj: SkillGroupData): any => ({
    ...obj
  });
  export const isa = (o: any): o is SkillGroupData =>
    __isa(o, "SkillGroupData");
}

/**
 * <p>The skill must be linked to a third-party account.</p>
 */
export interface SkillNotLinkedException
  extends __SmithyException,
    $MetadataBearer {
  name: "SkillNotLinkedException";
  $fault: "client";
  Message?: string;
}

export namespace SkillNotLinkedException {
  export const filterSensitiveLog = (obj: SkillNotLinkedException): any => ({
    ...obj
  });
  export const isa = (o: any): o is SkillNotLinkedException =>
    __isa(o, "SkillNotLinkedException");
}

/**
 * <p>The detailed information about an Alexa skill.</p>
 */
export interface SkillsStoreSkill {
  __type?: "SkillsStoreSkill";
  /**
   * <p>The URL where the skill icon resides.</p>
   */
  IconUrl?: string;

  /**
   * <p>Sample utterances that interact with the skill.</p>
   */
  SampleUtterances?: string[];

  /**
   * <p>Short description about the skill.</p>
   */
  ShortDescription?: string;

  /**
   * <p>Information about the skill.</p>
   */
  SkillDetails?: SkillDetails;

  /**
   * <p>The ARN of the skill.</p>
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
}

export namespace SkillsStoreSkill {
  export const filterSensitiveLog = (obj: SkillsStoreSkill): any => ({
    ...obj
  });
  export const isa = (o: any): o is SkillsStoreSkill =>
    __isa(o, "SkillsStoreSkill");
}

/**
 * <p>The summary of skills.</p>
 */
export interface SkillSummary {
  __type?: "SkillSummary";
  /**
   * <p>Whether the skill is enabled under the user's account, or if it requires linking to be
   *          used.</p>
   */
  EnablementType?: EnablementType | string;

  /**
   * <p>The ARN of the skill summary.</p>
   */
  SkillId?: string;

  /**
   * <p>The name of the skill.</p>
   */
  SkillName?: string;

  /**
   * <p>Whether the skill is publicly available or is a private skill.</p>
   */
  SkillType?: SkillType | string;

  /**
   * <p>Linking support for a skill.</p>
   */
  SupportsLinking?: boolean;
}

export namespace SkillSummary {
  export const filterSensitiveLog = (obj: SkillSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is SkillSummary => __isa(o, "SkillSummary");
}

export enum SkillType {
  PRIVATE = "PRIVATE",
  PUBLIC = "PUBLIC"
}

export enum SkillTypeFilter {
  ALL = "ALL",
  PRIVATE = "PRIVATE",
  PUBLIC = "PUBLIC"
}

/**
 * <p>A smart home appliance that can connect to a central system. Any domestic device can be
 *          a smart appliance. </p>
 */
export interface SmartHomeAppliance {
  __type?: "SmartHomeAppliance";
  /**
   * <p>The description of the smart home appliance.</p>
   */
  Description?: string;

  /**
   * <p>The friendly name of the smart home appliance.</p>
   */
  FriendlyName?: string;

  /**
   * <p>The name of the manufacturer of the smart home appliance.</p>
   */
  ManufacturerName?: string;
}

export namespace SmartHomeAppliance {
  export const filterSensitiveLog = (obj: SmartHomeAppliance): any => ({
    ...obj
  });
  export const isa = (o: any): o is SmartHomeAppliance =>
    __isa(o, "SmartHomeAppliance");
}

/**
 * <p>An object representing a sort criteria. </p>
 */
export interface Sort {
  __type?: "Sort";
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
    ...obj
  });
  export const isa = (o: any): o is Sort => __isa(o, "Sort");
}

export enum SortValue {
  ASC = "ASC",
  DESC = "DESC"
}

/**
 * <p>The SSML message. For more information, see <a href="https://developer.amazon.com/docs/custom-skills/speech-synthesis-markup-language-ssml-reference.html">SSML Reference</a>.</p>
 */
export interface Ssml {
  __type?: "Ssml";
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
    ...obj
  });
  export const isa = (o: any): o is Ssml => __isa(o, "Ssml");
}

export interface StartDeviceSyncRequest {
  __type?: "StartDeviceSyncRequest";
  /**
   * <p>The ARN of the device to sync. Required.</p>
   */
  DeviceArn?: string;

  /**
   * <p>Request structure to start the device sync. Required.</p>
   */
  Features: (Feature | string)[] | undefined;

  /**
   * <p>The ARN of the room with which the device to sync is associated. Required.</p>
   */
  RoomArn?: string;
}

export namespace StartDeviceSyncRequest {
  export const filterSensitiveLog = (obj: StartDeviceSyncRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartDeviceSyncRequest =>
    __isa(o, "StartDeviceSyncRequest");
}

export interface StartDeviceSyncResponse {
  __type?: "StartDeviceSyncResponse";
}

export namespace StartDeviceSyncResponse {
  export const filterSensitiveLog = (obj: StartDeviceSyncResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartDeviceSyncResponse =>
    __isa(o, "StartDeviceSyncResponse");
}

export interface StartSmartHomeApplianceDiscoveryRequest {
  __type?: "StartSmartHomeApplianceDiscoveryRequest";
  /**
   * <p>The room where smart home appliance discovery was initiated.</p>
   */
  RoomArn: string | undefined;
}

export namespace StartSmartHomeApplianceDiscoveryRequest {
  export const filterSensitiveLog = (
    obj: StartSmartHomeApplianceDiscoveryRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartSmartHomeApplianceDiscoveryRequest =>
    __isa(o, "StartSmartHomeApplianceDiscoveryRequest");
}

export interface StartSmartHomeApplianceDiscoveryResponse {
  __type?: "StartSmartHomeApplianceDiscoveryResponse";
}

export namespace StartSmartHomeApplianceDiscoveryResponse {
  export const filterSensitiveLog = (
    obj: StartSmartHomeApplianceDiscoveryResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartSmartHomeApplianceDiscoveryResponse =>
    __isa(o, "StartSmartHomeApplianceDiscoveryResponse");
}

/**
 * <p>A key-value pair that can be associated with a resource. </p>
 */
export interface Tag {
  __type?: "Tag";
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
    ...obj
  });
  export const isa = (o: any): o is Tag => __isa(o, "Tag");
}

export interface TagResourceRequest {
  __type?: "TagResourceRequest";
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
    ...obj
  });
  export const isa = (o: any): o is TagResourceRequest =>
    __isa(o, "TagResourceRequest");
}

export interface TagResourceResponse {
  __type?: "TagResourceResponse";
}

export namespace TagResourceResponse {
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is TagResourceResponse =>
    __isa(o, "TagResourceResponse");
}

export enum TemperatureUnit {
  CELSIUS = "CELSIUS",
  FAHRENHEIT = "FAHRENHEIT"
}

/**
 * <p>The text message.</p>
 */
export interface Text {
  __type?: "Text";
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
    ...obj
  });
  export const isa = (o: any): o is Text => __isa(o, "Text");
}

/**
 * <p>The caller has no permissions to operate on the resource involved in the API call.</p>
 */
export interface UnauthorizedException
  extends __SmithyException,
    $MetadataBearer {
  name: "UnauthorizedException";
  $fault: "client";
  Message?: string;
}

export namespace UnauthorizedException {
  export const filterSensitiveLog = (obj: UnauthorizedException): any => ({
    ...obj
  });
  export const isa = (o: any): o is UnauthorizedException =>
    __isa(o, "UnauthorizedException");
}

export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
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
    ...obj
  });
  export const isa = (o: any): o is UntagResourceRequest =>
    __isa(o, "UntagResourceRequest");
}

export interface UntagResourceResponse {
  __type?: "UntagResourceResponse";
}

export namespace UntagResourceResponse {
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UntagResourceResponse =>
    __isa(o, "UntagResourceResponse");
}

export interface UpdateAddressBookRequest {
  __type?: "UpdateAddressBookRequest";
  /**
   * <p>The ARN of the room to update.</p>
   */
  AddressBookArn: string | undefined;

  /**
   * <p>The updated description of the room.</p>
   */
  Description?: string;

  /**
   * <p>The updated name of the room.</p>
   */
  Name?: string;
}

export namespace UpdateAddressBookRequest {
  export const filterSensitiveLog = (obj: UpdateAddressBookRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateAddressBookRequest =>
    __isa(o, "UpdateAddressBookRequest");
}

export interface UpdateAddressBookResponse {
  __type?: "UpdateAddressBookResponse";
}

export namespace UpdateAddressBookResponse {
  export const filterSensitiveLog = (obj: UpdateAddressBookResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateAddressBookResponse =>
    __isa(o, "UpdateAddressBookResponse");
}

export interface UpdateBusinessReportScheduleRequest {
  __type?: "UpdateBusinessReportScheduleRequest";
  /**
   * <p>The format of the generated report (individual CSV files or zipped files of
   *          individual files).</p>
   */
  Format?: BusinessReportFormat | string;

  /**
   * <p>The recurrence of the reports.</p>
   */
  Recurrence?: BusinessReportRecurrence;

  /**
   * <p>The S3 location of the output reports.</p>
   */
  S3BucketName?: string;

  /**
   * <p>The S3 key where the report is delivered.</p>
   */
  S3KeyPrefix?: string;

  /**
   * <p>The ARN of the business report schedule.</p>
   */
  ScheduleArn: string | undefined;

  /**
   * <p>The name identifier of the schedule.</p>
   */
  ScheduleName?: string;
}

export namespace UpdateBusinessReportScheduleRequest {
  export const filterSensitiveLog = (
    obj: UpdateBusinessReportScheduleRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateBusinessReportScheduleRequest =>
    __isa(o, "UpdateBusinessReportScheduleRequest");
}

export interface UpdateBusinessReportScheduleResponse {
  __type?: "UpdateBusinessReportScheduleResponse";
}

export namespace UpdateBusinessReportScheduleResponse {
  export const filterSensitiveLog = (
    obj: UpdateBusinessReportScheduleResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateBusinessReportScheduleResponse =>
    __isa(o, "UpdateBusinessReportScheduleResponse");
}

export interface UpdateConferenceProviderRequest {
  __type?: "UpdateConferenceProviderRequest";
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
   * <p>The meeting settings for the conference provider.</p>
   */
  MeetingSetting: MeetingSetting | undefined;

  /**
   * <p>The information for PSTN conferencing.</p>
   */
  PSTNDialIn?: PSTNDialIn;
}

export namespace UpdateConferenceProviderRequest {
  export const filterSensitiveLog = (
    obj: UpdateConferenceProviderRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateConferenceProviderRequest =>
    __isa(o, "UpdateConferenceProviderRequest");
}

export interface UpdateConferenceProviderResponse {
  __type?: "UpdateConferenceProviderResponse";
}

export namespace UpdateConferenceProviderResponse {
  export const filterSensitiveLog = (
    obj: UpdateConferenceProviderResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateConferenceProviderResponse =>
    __isa(o, "UpdateConferenceProviderResponse");
}

export interface UpdateContactRequest {
  __type?: "UpdateContactRequest";
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
    ...(obj.PhoneNumbers && {
      PhoneNumbers: obj.PhoneNumbers.map(item =>
        PhoneNumber.filterSensitiveLog(item)
      )
    }),
    ...(obj.SipAddresses && {
      SipAddresses: obj.SipAddresses.map(item =>
        SipAddress.filterSensitiveLog(item)
      )
    })
  });
  export const isa = (o: any): o is UpdateContactRequest =>
    __isa(o, "UpdateContactRequest");
}

export interface UpdateContactResponse {
  __type?: "UpdateContactResponse";
}

export namespace UpdateContactResponse {
  export const filterSensitiveLog = (obj: UpdateContactResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateContactResponse =>
    __isa(o, "UpdateContactResponse");
}

export interface UpdateDeviceRequest {
  __type?: "UpdateDeviceRequest";
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
    ...obj
  });
  export const isa = (o: any): o is UpdateDeviceRequest =>
    __isa(o, "UpdateDeviceRequest");
}

export interface UpdateDeviceResponse {
  __type?: "UpdateDeviceResponse";
}

export namespace UpdateDeviceResponse {
  export const filterSensitiveLog = (obj: UpdateDeviceResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateDeviceResponse =>
    __isa(o, "UpdateDeviceResponse");
}

/**
 * <p>Settings for the end of meeting reminder feature that are applied to a room profile. The
 *          end of meeting reminder enables Alexa to remind users when a meeting is ending. </p>
 */
export interface UpdateEndOfMeetingReminder {
  __type?: "UpdateEndOfMeetingReminder";
  /**
   * <p>Whether an end of meeting reminder is enabled or not.</p>
   */
  Enabled?: boolean;

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
}

export namespace UpdateEndOfMeetingReminder {
  export const filterSensitiveLog = (obj: UpdateEndOfMeetingReminder): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateEndOfMeetingReminder =>
    __isa(o, "UpdateEndOfMeetingReminder");
}

export interface UpdateGatewayGroupRequest {
  __type?: "UpdateGatewayGroupRequest";
  /**
   * <p>The updated description of the gateway group.</p>
   */
  Description?: string;

  /**
   * <p>The ARN of the gateway group to update.</p>
   */
  GatewayGroupArn: string | undefined;

  /**
   * <p>The updated name of the gateway group.</p>
   */
  Name?: string;
}

export namespace UpdateGatewayGroupRequest {
  export const filterSensitiveLog = (obj: UpdateGatewayGroupRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateGatewayGroupRequest =>
    __isa(o, "UpdateGatewayGroupRequest");
}

export interface UpdateGatewayGroupResponse {
  __type?: "UpdateGatewayGroupResponse";
}

export namespace UpdateGatewayGroupResponse {
  export const filterSensitiveLog = (obj: UpdateGatewayGroupResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateGatewayGroupResponse =>
    __isa(o, "UpdateGatewayGroupResponse");
}

export interface UpdateGatewayRequest {
  __type?: "UpdateGatewayRequest";
  /**
   * <p>The updated description of the gateway.</p>
   */
  Description?: string;

  /**
   * <p>The ARN of the gateway to update.</p>
   */
  GatewayArn: string | undefined;

  /**
   * <p>The updated name of the gateway.</p>
   */
  Name?: string;

  /**
   * <p>The updated software version of the gateway. The gateway automatically updates its
   *          software version during normal operation.</p>
   */
  SoftwareVersion?: string;
}

export namespace UpdateGatewayRequest {
  export const filterSensitiveLog = (obj: UpdateGatewayRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateGatewayRequest =>
    __isa(o, "UpdateGatewayRequest");
}

export interface UpdateGatewayResponse {
  __type?: "UpdateGatewayResponse";
}

export namespace UpdateGatewayResponse {
  export const filterSensitiveLog = (obj: UpdateGatewayResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateGatewayResponse =>
    __isa(o, "UpdateGatewayResponse");
}

/**
 * <p>Updates settings for the instant booking feature that are applied to a room profile. If
 *          instant booking is enabled, Alexa automatically reserves a room if it is free when a user
 *          joins a meeting with Alexa.</p>
 */
export interface UpdateInstantBooking {
  __type?: "UpdateInstantBooking";
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
    ...obj
  });
  export const isa = (o: any): o is UpdateInstantBooking =>
    __isa(o, "UpdateInstantBooking");
}

/**
 * <p>Updates meeting room settings of a room profile.</p>
 */
export interface UpdateMeetingRoomConfiguration {
  __type?: "UpdateMeetingRoomConfiguration";
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

  /**
   * <p>Whether room utilization metrics are enabled or not.</p>
   */
  RoomUtilizationMetricsEnabled?: boolean;
}

export namespace UpdateMeetingRoomConfiguration {
  export const filterSensitiveLog = (
    obj: UpdateMeetingRoomConfiguration
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateMeetingRoomConfiguration =>
    __isa(o, "UpdateMeetingRoomConfiguration");
}

export interface UpdateNetworkProfileRequest {
  __type?: "UpdateNetworkProfileRequest";
  /**
   * <p>The ARN of the Private Certificate Authority (PCA) created in AWS Certificate Manager
   *          (ACM). This is used to issue certificates to the devices. </p>
   */
  CertificateAuthorityArn?: string;

  /**
   * <p>The current password of the Wi-Fi network.</p>
   */
  CurrentPassword?: string;

  /**
   * <p>Detailed information about a device's network profile.</p>
   */
  Description?: string;

  /**
   * <p>The ARN of the network profile associated with a device.</p>
   */
  NetworkProfileArn: string | undefined;

  /**
   * <p>The name of the network profile associated with a device.</p>
   */
  NetworkProfileName?: string;

  /**
   * <p>The next, or subsequent, password of the Wi-Fi network. This password is asynchronously
   *          transmitted to the device and is used when the password of the network changes to
   *          NextPassword. </p>
   */
  NextPassword?: string;

  /**
   * <p>The root certificate(s) of your authentication server that will be installed on your
   *          devices and used to trust your authentication server during EAP negotiation. </p>
   */
  TrustAnchors?: string[];
}

export namespace UpdateNetworkProfileRequest {
  export const filterSensitiveLog = (
    obj: UpdateNetworkProfileRequest
  ): any => ({
    ...obj,
    ...(obj.CurrentPassword && { CurrentPassword: SENSITIVE_STRING }),
    ...(obj.NextPassword && { NextPassword: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is UpdateNetworkProfileRequest =>
    __isa(o, "UpdateNetworkProfileRequest");
}

export interface UpdateNetworkProfileResponse {
  __type?: "UpdateNetworkProfileResponse";
}

export namespace UpdateNetworkProfileResponse {
  export const filterSensitiveLog = (
    obj: UpdateNetworkProfileResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateNetworkProfileResponse =>
    __isa(o, "UpdateNetworkProfileResponse");
}

export interface UpdateProfileRequest {
  __type?: "UpdateProfileRequest";
  /**
   * <p>The updated address for the room profile.</p>
   */
  Address?: string;

  /**
   * <p>The updated distance unit for the room profile.</p>
   */
  DistanceUnit?: DistanceUnit | string;

  /**
   * <p>Sets the profile as default if selected. If this is missing, no update is done to the
   *          default status.</p>
   */
  IsDefault?: boolean;

  /**
   * <p>The updated locale for the room profile. (This is currently only available to a limited preview audience.)</p>
   */
  Locale?: string;

  /**
   * <p>The updated maximum volume limit for the room profile.</p>
   */
  MaxVolumeLimit?: number;

  /**
   * <p>The updated meeting room settings of a room profile.</p>
   */
  MeetingRoomConfiguration?: UpdateMeetingRoomConfiguration;

  /**
   * <p>Whether the PSTN setting of the room profile is enabled.</p>
   */
  PSTNEnabled?: boolean;

  /**
   * <p>The ARN of the room profile to update. Required.</p>
   */
  ProfileArn?: string;

  /**
   * <p>The updated name for the room profile.</p>
   */
  ProfileName?: string;

  /**
   * <p>Whether the setup mode of the profile is enabled.</p>
   */
  SetupModeDisabled?: boolean;

  /**
   * <p>The updated temperature unit for the room profile.</p>
   */
  TemperatureUnit?: TemperatureUnit | string;

  /**
   * <p>The updated timezone for the room profile.</p>
   */
  Timezone?: string;

  /**
   * <p>The updated wake word for the room profile.</p>
   */
  WakeWord?: WakeWord | string;
}

export namespace UpdateProfileRequest {
  export const filterSensitiveLog = (obj: UpdateProfileRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateProfileRequest =>
    __isa(o, "UpdateProfileRequest");
}

export interface UpdateProfileResponse {
  __type?: "UpdateProfileResponse";
}

export namespace UpdateProfileResponse {
  export const filterSensitiveLog = (obj: UpdateProfileResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateProfileResponse =>
    __isa(o, "UpdateProfileResponse");
}

/**
 * <p>Updates settings for the require check in feature that are applied to a room profile. Require check in allows a meeting room’s Alexa or AVS device to prompt the user to check in; otherwise, the room will be released. </p>
 */
export interface UpdateRequireCheckIn {
  __type?: "UpdateRequireCheckIn";
  /**
   * <p>Whether require check in is enabled or not.</p>
   */
  Enabled?: boolean;

  /**
   * <p>Duration between 5 and 20 minutes to determine when to release the room if it's not checked into. </p>
   */
  ReleaseAfterMinutes?: number;
}

export namespace UpdateRequireCheckIn {
  export const filterSensitiveLog = (obj: UpdateRequireCheckIn): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateRequireCheckIn =>
    __isa(o, "UpdateRequireCheckIn");
}

export interface UpdateRoomRequest {
  __type?: "UpdateRoomRequest";
  /**
   * <p>The updated description for the room.</p>
   */
  Description?: string;

  /**
   * <p>The updated profile ARN for the room.</p>
   */
  ProfileArn?: string;

  /**
   * <p>The updated provider calendar ARN for the room.</p>
   */
  ProviderCalendarId?: string;

  /**
   * <p>The ARN of the room to update. </p>
   */
  RoomArn?: string;

  /**
   * <p>The updated name for the room.</p>
   */
  RoomName?: string;
}

export namespace UpdateRoomRequest {
  export const filterSensitiveLog = (obj: UpdateRoomRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateRoomRequest =>
    __isa(o, "UpdateRoomRequest");
}

export interface UpdateRoomResponse {
  __type?: "UpdateRoomResponse";
}

export namespace UpdateRoomResponse {
  export const filterSensitiveLog = (obj: UpdateRoomResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateRoomResponse =>
    __isa(o, "UpdateRoomResponse");
}

export interface UpdateSkillGroupRequest {
  __type?: "UpdateSkillGroupRequest";
  /**
   * <p>The updated description for the skill group.</p>
   */
  Description?: string;

  /**
   * <p>The ARN of the skill group to update. </p>
   */
  SkillGroupArn?: string;

  /**
   * <p>The updated name for the skill group.</p>
   */
  SkillGroupName?: string;
}

export namespace UpdateSkillGroupRequest {
  export const filterSensitiveLog = (obj: UpdateSkillGroupRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateSkillGroupRequest =>
    __isa(o, "UpdateSkillGroupRequest");
}

export interface UpdateSkillGroupResponse {
  __type?: "UpdateSkillGroupResponse";
}

export namespace UpdateSkillGroupResponse {
  export const filterSensitiveLog = (obj: UpdateSkillGroupResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateSkillGroupResponse =>
    __isa(o, "UpdateSkillGroupResponse");
}

/**
 * <p>Information related to a user.</p>
 */
export interface UserData {
  __type?: "UserData";
  /**
   * <p>The email of a user.</p>
   */
  Email?: string;

  /**
   * <p>The enrollment ARN of a user.</p>
   */
  EnrollmentId?: string;

  /**
   * <p>The enrollment status of a user.</p>
   */
  EnrollmentStatus?: EnrollmentStatus | string;

  /**
   * <p>The first name of a user.</p>
   */
  FirstName?: string;

  /**
   * <p>The last name of a user.</p>
   */
  LastName?: string;

  /**
   * <p>The ARN of a user.</p>
   */
  UserArn?: string;
}

export namespace UserData {
  export const filterSensitiveLog = (obj: UserData): any => ({
    ...obj
  });
  export const isa = (o: any): o is UserData => __isa(o, "UserData");
}

export enum WakeWord {
  ALEXA = "ALEXA",
  AMAZON = "AMAZON",
  COMPUTER = "COMPUTER",
  ECHO = "ECHO"
}
