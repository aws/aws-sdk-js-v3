import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
/**
 * <p>The resource being created already exists.</p>
 */
export interface AlreadyExistsException extends __SmithyException, $MetadataBearer {
    name: "AlreadyExistsException";
    $fault: "client";
    Message?: string;
}
export declare namespace AlreadyExistsException {
    function isa(o: any): o is AlreadyExistsException;
}
/**
 * <p>There is a concurrent modification of resources.</p>
 */
export interface ConcurrentModificationException extends __SmithyException, $MetadataBearer {
    name: "ConcurrentModificationException";
    $fault: "client";
    Message?: string;
}
export declare namespace ConcurrentModificationException {
    function isa(o: any): o is ConcurrentModificationException;
}
/**
 * <p>The request failed because this device is no longer registered and therefore no longer managed by this account.</p>
 */
export interface DeviceNotRegisteredException extends __SmithyException, $MetadataBearer {
    name: "DeviceNotRegisteredException";
    $fault: "client";
    Message?: string;
}
export declare namespace DeviceNotRegisteredException {
    function isa(o: any): o is DeviceNotRegisteredException;
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
    Values: Array<string> | undefined;
}
export declare namespace Filter {
    function isa(o: any): o is Filter;
}
/**
 * <p>You are performing an action that would put you beyond your account's limits.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
    name: "LimitExceededException";
    $fault: "client";
    Message?: string;
}
export declare namespace LimitExceededException {
    function isa(o: any): o is LimitExceededException;
}
/**
 * <p>The name sent in the request is already in use.</p>
 */
export interface NameInUseException extends __SmithyException, $MetadataBearer {
    name: "NameInUseException";
    $fault: "client";
    Message?: string;
}
export declare namespace NameInUseException {
    function isa(o: any): o is NameInUseException;
}
/**
 * <p>The resource is not found.</p>
 */
export interface NotFoundException extends __SmithyException, $MetadataBearer {
    name: "NotFoundException";
    $fault: "client";
    Message?: string;
}
export declare namespace NotFoundException {
    function isa(o: any): o is NotFoundException;
}
/**
 * <p>The resource in the request is already in use.</p>
 */
export interface ResourceInUseException extends __SmithyException, $MetadataBearer {
    name: "ResourceInUseException";
    $fault: "client";
    /**
     * <p>A unique, user-specified identifier for the request that ensures idempotency.</p>
     */
    ClientRequestToken?: string;
    Message?: string;
}
export declare namespace ResourceInUseException {
    function isa(o: any): o is ResourceInUseException;
}
/**
 * <p>The caller has no permissions to operate on the resource involved in the API call.</p>
 */
export interface UnauthorizedException extends __SmithyException, $MetadataBearer {
    name: "UnauthorizedException";
    $fault: "client";
    Message?: string;
}
export declare namespace UnauthorizedException {
    function isa(o: any): o is UnauthorizedException;
}
export declare enum CommsProtocol {
    H323 = "H323",
    SIP = "SIP",
    SIPS = "SIPS"
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
export declare namespace ConferenceProvider {
    function isa(o: any): o is ConferenceProvider;
}
export declare enum ConferenceProviderType {
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
export declare namespace IPDialIn {
    function isa(o: any): o is IPDialIn;
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
export declare namespace MeetingSetting {
    function isa(o: any): o is MeetingSetting;
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
export declare namespace PSTNDialIn {
    function isa(o: any): o is PSTNDialIn;
}
export declare enum RequirePin {
    NO = "NO",
    OPTIONAL = "OPTIONAL",
    YES = "YES"
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
export declare namespace Audio {
    function isa(o: any): o is Audio;
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
    AudioList?: Array<Audio>;
    /**
     * <p>The list of SSML messages.</p>
     */
    SsmlList?: Array<Ssml>;
    /**
     * <p>The list of text messages.</p>
     */
    TextList?: Array<Text>;
}
export declare namespace Content {
    function isa(o: any): o is Content;
}
export declare enum Locale {
    en_US = "en-US"
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
    RoomFilters: Array<Filter> | undefined;
    /**
     * <p>The time to live for an announcement. Default is 300. If delivery doesn't occur within this time, the
     *          announcement is not delivered.</p>
     */
    TimeToLiveInSeconds?: number;
}
export declare namespace SendAnnouncementRequest {
    function isa(o: any): o is SendAnnouncementRequest;
}
export interface SendAnnouncementResponse {
    __type?: "SendAnnouncementResponse";
    /**
     * <p>The identifier of the announcement.</p>
     */
    AnnouncementArn?: string;
}
export declare namespace SendAnnouncementResponse {
    function isa(o: any): o is SendAnnouncementResponse;
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
export declare namespace Ssml {
    function isa(o: any): o is Ssml;
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
export declare namespace Text {
    function isa(o: any): o is Text;
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
export declare namespace DeleteDeviceUsageDataRequest {
    function isa(o: any): o is DeleteDeviceUsageDataRequest;
}
export interface DeleteDeviceUsageDataResponse {
    __type?: "DeleteDeviceUsageDataResponse";
}
export declare namespace DeleteDeviceUsageDataResponse {
    function isa(o: any): o is DeleteDeviceUsageDataResponse;
}
export declare enum DeviceUsageType {
    VOICE = "VOICE"
}
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
export declare namespace AddressBook {
    function isa(o: any): o is AddressBook;
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
export declare namespace AddressBookData {
    function isa(o: any): o is AddressBookData;
}
export interface ApproveSkillRequest {
    __type?: "ApproveSkillRequest";
    /**
     * <p>The unique identifier of the skill.</p>
     */
    SkillId: string | undefined;
}
export declare namespace ApproveSkillRequest {
    function isa(o: any): o is ApproveSkillRequest;
}
export interface ApproveSkillResponse {
    __type?: "ApproveSkillResponse";
}
export declare namespace ApproveSkillResponse {
    function isa(o: any): o is ApproveSkillResponse;
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
export declare namespace AssociateContactWithAddressBookRequest {
    function isa(o: any): o is AssociateContactWithAddressBookRequest;
}
export interface AssociateContactWithAddressBookResponse {
    __type?: "AssociateContactWithAddressBookResponse";
}
export declare namespace AssociateContactWithAddressBookResponse {
    function isa(o: any): o is AssociateContactWithAddressBookResponse;
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
export declare namespace AssociateDeviceWithNetworkProfileRequest {
    function isa(o: any): o is AssociateDeviceWithNetworkProfileRequest;
}
export interface AssociateDeviceWithNetworkProfileResponse {
    __type?: "AssociateDeviceWithNetworkProfileResponse";
}
export declare namespace AssociateDeviceWithNetworkProfileResponse {
    function isa(o: any): o is AssociateDeviceWithNetworkProfileResponse;
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
export declare namespace AssociateDeviceWithRoomRequest {
    function isa(o: any): o is AssociateDeviceWithRoomRequest;
}
export interface AssociateDeviceWithRoomResponse {
    __type?: "AssociateDeviceWithRoomResponse";
}
export declare namespace AssociateDeviceWithRoomResponse {
    function isa(o: any): o is AssociateDeviceWithRoomResponse;
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
export declare namespace AssociateSkillGroupWithRoomRequest {
    function isa(o: any): o is AssociateSkillGroupWithRoomRequest;
}
export interface AssociateSkillGroupWithRoomResponse {
    __type?: "AssociateSkillGroupWithRoomResponse";
}
export declare namespace AssociateSkillGroupWithRoomResponse {
    function isa(o: any): o is AssociateSkillGroupWithRoomResponse;
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
export declare namespace AssociateSkillWithSkillGroupRequest {
    function isa(o: any): o is AssociateSkillWithSkillGroupRequest;
}
export interface AssociateSkillWithSkillGroupResponse {
    __type?: "AssociateSkillWithSkillGroupResponse";
}
export declare namespace AssociateSkillWithSkillGroupResponse {
    function isa(o: any): o is AssociateSkillWithSkillGroupResponse;
}
export interface AssociateSkillWithUsersRequest {
    __type?: "AssociateSkillWithUsersRequest";
    /**
     * <p>The private skill ID you want to make available to enrolled users.</p>
     */
    SkillId: string | undefined;
}
export declare namespace AssociateSkillWithUsersRequest {
    function isa(o: any): o is AssociateSkillWithUsersRequest;
}
export interface AssociateSkillWithUsersResponse {
    __type?: "AssociateSkillWithUsersResponse";
}
export declare namespace AssociateSkillWithUsersResponse {
    function isa(o: any): o is AssociateSkillWithUsersResponse;
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
export declare namespace BusinessReport {
    function isa(o: any): o is BusinessReport;
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
export declare namespace BusinessReportContentRange {
    function isa(o: any): o is BusinessReportContentRange;
}
export declare enum BusinessReportFailureCode {
    ACCESS_DENIED = "ACCESS_DENIED",
    INTERNAL_FAILURE = "INTERNAL_FAILURE",
    NO_SUCH_BUCKET = "NO_SUCH_BUCKET"
}
export declare enum BusinessReportFormat {
    CSV = "CSV",
    CSV_ZIP = "CSV_ZIP"
}
export declare enum BusinessReportInterval {
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
export declare namespace BusinessReportRecurrence {
    function isa(o: any): o is BusinessReportRecurrence;
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
export declare namespace BusinessReportS3Location {
    function isa(o: any): o is BusinessReportS3Location;
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
export declare namespace BusinessReportSchedule {
    function isa(o: any): o is BusinessReportSchedule;
}
export declare enum BusinessReportStatus {
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
export declare namespace Category {
    function isa(o: any): o is Category;
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
export declare namespace ConferencePreference {
    function isa(o: any): o is ConferencePreference;
}
export declare enum ConnectionStatus {
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
    PhoneNumbers?: Array<PhoneNumber>;
    /**
     * <p>The list of SIP addresses for the contact.</p>
     */
    SipAddresses?: Array<SipAddress>;
}
export declare namespace Contact {
    function isa(o: any): o is Contact;
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
    PhoneNumbers?: Array<PhoneNumber>;
    /**
     * <p>The list of SIP addresses for the contact.</p>
     */
    SipAddresses?: Array<SipAddress>;
}
export declare namespace ContactData {
    function isa(o: any): o is ContactData;
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
export declare namespace CreateAddressBookRequest {
    function isa(o: any): o is CreateAddressBookRequest;
}
export interface CreateAddressBookResponse {
    __type?: "CreateAddressBookResponse";
    /**
     * <p>The ARN of the newly created address book.</p>
     */
    AddressBookArn?: string;
}
export declare namespace CreateAddressBookResponse {
    function isa(o: any): o is CreateAddressBookResponse;
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
export declare namespace CreateBusinessReportScheduleRequest {
    function isa(o: any): o is CreateBusinessReportScheduleRequest;
}
export interface CreateBusinessReportScheduleResponse {
    __type?: "CreateBusinessReportScheduleResponse";
    /**
     * <p>The ARN of the business report schedule.</p>
     */
    ScheduleArn?: string;
}
export declare namespace CreateBusinessReportScheduleResponse {
    function isa(o: any): o is CreateBusinessReportScheduleResponse;
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
export declare namespace CreateConferenceProviderRequest {
    function isa(o: any): o is CreateConferenceProviderRequest;
}
export interface CreateConferenceProviderResponse {
    __type?: "CreateConferenceProviderResponse";
    /**
     * <p>The ARN of the newly-created conference provider.</p>
     */
    ConferenceProviderArn?: string;
}
export declare namespace CreateConferenceProviderResponse {
    function isa(o: any): o is CreateConferenceProviderResponse;
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
    PhoneNumbers?: Array<PhoneNumber>;
    /**
     * <p>The list of SIP addresses for the contact.</p>
     */
    SipAddresses?: Array<SipAddress>;
}
export declare namespace CreateContactRequest {
    function isa(o: any): o is CreateContactRequest;
}
export interface CreateContactResponse {
    __type?: "CreateContactResponse";
    /**
     * <p>The ARN of the newly created address book.</p>
     */
    ContactArn?: string;
}
export declare namespace CreateContactResponse {
    function isa(o: any): o is CreateContactResponse;
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
    ReminderAtMinutes: Array<number> | undefined;
    /**
     * <p>The type of sound that users hear during the end of meeting reminder. </p>
     */
    ReminderType: EndOfMeetingReminderType | string | undefined;
}
export declare namespace CreateEndOfMeetingReminder {
    function isa(o: any): o is CreateEndOfMeetingReminder;
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
export declare namespace CreateGatewayGroupRequest {
    function isa(o: any): o is CreateGatewayGroupRequest;
}
export interface CreateGatewayGroupResponse {
    __type?: "CreateGatewayGroupResponse";
    /**
     * <p>The ARN of the created gateway group.</p>
     */
    GatewayGroupArn?: string;
}
export declare namespace CreateGatewayGroupResponse {
    function isa(o: any): o is CreateGatewayGroupResponse;
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
export declare namespace CreateInstantBooking {
    function isa(o: any): o is CreateInstantBooking;
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
export declare namespace CreateMeetingRoomConfiguration {
    function isa(o: any): o is CreateMeetingRoomConfiguration;
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
    TrustAnchors?: Array<string>;
}
export declare namespace CreateNetworkProfileRequest {
    function isa(o: any): o is CreateNetworkProfileRequest;
}
export interface CreateNetworkProfileResponse {
    __type?: "CreateNetworkProfileResponse";
    /**
     * <p>The ARN of the network profile associated with a device.</p>
     */
    NetworkProfileArn?: string;
}
export declare namespace CreateNetworkProfileResponse {
    function isa(o: any): o is CreateNetworkProfileResponse;
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
export declare namespace CreateProfileRequest {
    function isa(o: any): o is CreateProfileRequest;
}
export interface CreateProfileResponse {
    __type?: "CreateProfileResponse";
    /**
     * <p>The ARN of the newly created room profile in the response.</p>
     */
    ProfileArn?: string;
}
export declare namespace CreateProfileResponse {
    function isa(o: any): o is CreateProfileResponse;
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
export declare namespace CreateRequireCheckIn {
    function isa(o: any): o is CreateRequireCheckIn;
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
    Tags?: Array<Tag>;
}
export declare namespace CreateRoomRequest {
    function isa(o: any): o is CreateRoomRequest;
}
export interface CreateRoomResponse {
    __type?: "CreateRoomResponse";
    /**
     * <p>The ARN of the newly created room in the response.</p>
     */
    RoomArn?: string;
}
export declare namespace CreateRoomResponse {
    function isa(o: any): o is CreateRoomResponse;
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
export declare namespace CreateSkillGroupRequest {
    function isa(o: any): o is CreateSkillGroupRequest;
}
export interface CreateSkillGroupResponse {
    __type?: "CreateSkillGroupResponse";
    /**
     * <p>The ARN of the newly created skill group in the response.</p>
     */
    SkillGroupArn?: string;
}
export declare namespace CreateSkillGroupResponse {
    function isa(o: any): o is CreateSkillGroupResponse;
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
    Tags?: Array<Tag>;
    /**
     * <p>The ARN for the user.</p>
     */
    UserId: string | undefined;
}
export declare namespace CreateUserRequest {
    function isa(o: any): o is CreateUserRequest;
}
export interface CreateUserResponse {
    __type?: "CreateUserResponse";
    /**
     * <p>The ARN of the newly created user in the response.</p>
     */
    UserArn?: string;
}
export declare namespace CreateUserResponse {
    function isa(o: any): o is CreateUserResponse;
}
export interface DeleteAddressBookRequest {
    __type?: "DeleteAddressBookRequest";
    /**
     * <p>The ARN of the address book to delete.</p>
     */
    AddressBookArn: string | undefined;
}
export declare namespace DeleteAddressBookRequest {
    function isa(o: any): o is DeleteAddressBookRequest;
}
export interface DeleteAddressBookResponse {
    __type?: "DeleteAddressBookResponse";
}
export declare namespace DeleteAddressBookResponse {
    function isa(o: any): o is DeleteAddressBookResponse;
}
export interface DeleteBusinessReportScheduleRequest {
    __type?: "DeleteBusinessReportScheduleRequest";
    /**
     * <p>The ARN of the business report schedule.</p>
     */
    ScheduleArn: string | undefined;
}
export declare namespace DeleteBusinessReportScheduleRequest {
    function isa(o: any): o is DeleteBusinessReportScheduleRequest;
}
export interface DeleteBusinessReportScheduleResponse {
    __type?: "DeleteBusinessReportScheduleResponse";
}
export declare namespace DeleteBusinessReportScheduleResponse {
    function isa(o: any): o is DeleteBusinessReportScheduleResponse;
}
export interface DeleteConferenceProviderRequest {
    __type?: "DeleteConferenceProviderRequest";
    /**
     * <p>The ARN of the conference provider.</p>
     */
    ConferenceProviderArn: string | undefined;
}
export declare namespace DeleteConferenceProviderRequest {
    function isa(o: any): o is DeleteConferenceProviderRequest;
}
export interface DeleteConferenceProviderResponse {
    __type?: "DeleteConferenceProviderResponse";
}
export declare namespace DeleteConferenceProviderResponse {
    function isa(o: any): o is DeleteConferenceProviderResponse;
}
export interface DeleteContactRequest {
    __type?: "DeleteContactRequest";
    /**
     * <p>The ARN of the contact to delete.</p>
     */
    ContactArn: string | undefined;
}
export declare namespace DeleteContactRequest {
    function isa(o: any): o is DeleteContactRequest;
}
export interface DeleteContactResponse {
    __type?: "DeleteContactResponse";
}
export declare namespace DeleteContactResponse {
    function isa(o: any): o is DeleteContactResponse;
}
export interface DeleteDeviceRequest {
    __type?: "DeleteDeviceRequest";
    /**
     * <p>The ARN of the device for which to request details.</p>
     */
    DeviceArn: string | undefined;
}
export declare namespace DeleteDeviceRequest {
    function isa(o: any): o is DeleteDeviceRequest;
}
export interface DeleteDeviceResponse {
    __type?: "DeleteDeviceResponse";
}
export declare namespace DeleteDeviceResponse {
    function isa(o: any): o is DeleteDeviceResponse;
}
export interface DeleteGatewayGroupRequest {
    __type?: "DeleteGatewayGroupRequest";
    /**
     * <p>The ARN of the gateway group to delete.</p>
     */
    GatewayGroupArn: string | undefined;
}
export declare namespace DeleteGatewayGroupRequest {
    function isa(o: any): o is DeleteGatewayGroupRequest;
}
export interface DeleteGatewayGroupResponse {
    __type?: "DeleteGatewayGroupResponse";
}
export declare namespace DeleteGatewayGroupResponse {
    function isa(o: any): o is DeleteGatewayGroupResponse;
}
export interface DeleteNetworkProfileRequest {
    __type?: "DeleteNetworkProfileRequest";
    /**
     * <p>The ARN of the network profile associated with a device.</p>
     */
    NetworkProfileArn: string | undefined;
}
export declare namespace DeleteNetworkProfileRequest {
    function isa(o: any): o is DeleteNetworkProfileRequest;
}
export interface DeleteNetworkProfileResponse {
    __type?: "DeleteNetworkProfileResponse";
}
export declare namespace DeleteNetworkProfileResponse {
    function isa(o: any): o is DeleteNetworkProfileResponse;
}
export interface DeleteProfileRequest {
    __type?: "DeleteProfileRequest";
    /**
     * <p>The ARN of the room profile to delete. Required.</p>
     */
    ProfileArn?: string;
}
export declare namespace DeleteProfileRequest {
    function isa(o: any): o is DeleteProfileRequest;
}
export interface DeleteProfileResponse {
    __type?: "DeleteProfileResponse";
}
export declare namespace DeleteProfileResponse {
    function isa(o: any): o is DeleteProfileResponse;
}
export interface DeleteRoomRequest {
    __type?: "DeleteRoomRequest";
    /**
     * <p>The ARN of the room to delete. Required.</p>
     */
    RoomArn?: string;
}
export declare namespace DeleteRoomRequest {
    function isa(o: any): o is DeleteRoomRequest;
}
export interface DeleteRoomResponse {
    __type?: "DeleteRoomResponse";
}
export declare namespace DeleteRoomResponse {
    function isa(o: any): o is DeleteRoomResponse;
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
export declare namespace DeleteRoomSkillParameterRequest {
    function isa(o: any): o is DeleteRoomSkillParameterRequest;
}
export interface DeleteRoomSkillParameterResponse {
    __type?: "DeleteRoomSkillParameterResponse";
}
export declare namespace DeleteRoomSkillParameterResponse {
    function isa(o: any): o is DeleteRoomSkillParameterResponse;
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
export declare namespace DeleteSkillAuthorizationRequest {
    function isa(o: any): o is DeleteSkillAuthorizationRequest;
}
export interface DeleteSkillAuthorizationResponse {
    __type?: "DeleteSkillAuthorizationResponse";
}
export declare namespace DeleteSkillAuthorizationResponse {
    function isa(o: any): o is DeleteSkillAuthorizationResponse;
}
export interface DeleteSkillGroupRequest {
    __type?: "DeleteSkillGroupRequest";
    /**
     * <p>The ARN of the skill group to delete. Required.</p>
     */
    SkillGroupArn?: string;
}
export declare namespace DeleteSkillGroupRequest {
    function isa(o: any): o is DeleteSkillGroupRequest;
}
export interface DeleteSkillGroupResponse {
    __type?: "DeleteSkillGroupResponse";
}
export declare namespace DeleteSkillGroupResponse {
    function isa(o: any): o is DeleteSkillGroupResponse;
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
export declare namespace DeleteUserRequest {
    function isa(o: any): o is DeleteUserRequest;
}
export interface DeleteUserResponse {
    __type?: "DeleteUserResponse";
}
export declare namespace DeleteUserResponse {
    function isa(o: any): o is DeleteUserResponse;
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
export declare namespace DeveloperInfo {
    function isa(o: any): o is DeveloperInfo;
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
export declare namespace Device {
    function isa(o: any): o is Device;
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
export declare namespace DeviceData {
    function isa(o: any): o is DeviceData;
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
export declare namespace DeviceEvent {
    function isa(o: any): o is DeviceEvent;
}
export declare enum DeviceEventType {
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
export declare namespace DeviceNetworkProfileInfo {
    function isa(o: any): o is DeviceNetworkProfileInfo;
}
export declare enum DeviceStatus {
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
export declare namespace DeviceStatusDetail {
    function isa(o: any): o is DeviceStatusDetail;
}
export declare enum DeviceStatusDetailCode {
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
    DeviceStatusDetails?: Array<DeviceStatusDetail>;
}
export declare namespace DeviceStatusInfo {
    function isa(o: any): o is DeviceStatusInfo;
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
export declare namespace DisassociateContactFromAddressBookRequest {
    function isa(o: any): o is DisassociateContactFromAddressBookRequest;
}
export interface DisassociateContactFromAddressBookResponse {
    __type?: "DisassociateContactFromAddressBookResponse";
}
export declare namespace DisassociateContactFromAddressBookResponse {
    function isa(o: any): o is DisassociateContactFromAddressBookResponse;
}
export interface DisassociateDeviceFromRoomRequest {
    __type?: "DisassociateDeviceFromRoomRequest";
    /**
     * <p>The ARN of the device to disassociate from a room. Required.</p>
     */
    DeviceArn?: string;
}
export declare namespace DisassociateDeviceFromRoomRequest {
    function isa(o: any): o is DisassociateDeviceFromRoomRequest;
}
export interface DisassociateDeviceFromRoomResponse {
    __type?: "DisassociateDeviceFromRoomResponse";
}
export declare namespace DisassociateDeviceFromRoomResponse {
    function isa(o: any): o is DisassociateDeviceFromRoomResponse;
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
export declare namespace DisassociateSkillFromSkillGroupRequest {
    function isa(o: any): o is DisassociateSkillFromSkillGroupRequest;
}
export interface DisassociateSkillFromSkillGroupResponse {
    __type?: "DisassociateSkillFromSkillGroupResponse";
}
export declare namespace DisassociateSkillFromSkillGroupResponse {
    function isa(o: any): o is DisassociateSkillFromSkillGroupResponse;
}
export interface DisassociateSkillFromUsersRequest {
    __type?: "DisassociateSkillFromUsersRequest";
    /**
     * <p> The private skill ID you want to make unavailable for enrolled users.</p>
     */
    SkillId: string | undefined;
}
export declare namespace DisassociateSkillFromUsersRequest {
    function isa(o: any): o is DisassociateSkillFromUsersRequest;
}
export interface DisassociateSkillFromUsersResponse {
    __type?: "DisassociateSkillFromUsersResponse";
}
export declare namespace DisassociateSkillFromUsersResponse {
    function isa(o: any): o is DisassociateSkillFromUsersResponse;
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
export declare namespace DisassociateSkillGroupFromRoomRequest {
    function isa(o: any): o is DisassociateSkillGroupFromRoomRequest;
}
export interface DisassociateSkillGroupFromRoomResponse {
    __type?: "DisassociateSkillGroupFromRoomResponse";
}
export declare namespace DisassociateSkillGroupFromRoomResponse {
    function isa(o: any): o is DisassociateSkillGroupFromRoomResponse;
}
export declare enum DistanceUnit {
    IMPERIAL = "IMPERIAL",
    METRIC = "METRIC"
}
export declare enum EnablementType {
    ENABLED = "ENABLED",
    PENDING = "PENDING"
}
export declare enum EnablementTypeFilter {
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
    ReminderAtMinutes?: Array<number>;
    /**
     * <p>The type of sound that users hear during the end of meeting reminder. </p>
     */
    ReminderType?: EndOfMeetingReminderType | string;
}
export declare namespace EndOfMeetingReminder {
    function isa(o: any): o is EndOfMeetingReminder;
}
export declare enum EndOfMeetingReminderType {
    ANNOUNCEMENT_TIME_CHECK = "ANNOUNCEMENT_TIME_CHECK",
    ANNOUNCEMENT_VARIABLE_TIME_LEFT = "ANNOUNCEMENT_VARIABLE_TIME_LEFT",
    CHIME = "CHIME",
    KNOCK = "KNOCK"
}
export declare enum EnrollmentStatus {
    DEREGISTERING = "DEREGISTERING",
    DISASSOCIATING = "DISASSOCIATING",
    INITIALIZED = "INITIALIZED",
    PENDING = "PENDING",
    REGISTERED = "REGISTERED"
}
export declare enum Feature {
    ALL = "ALL",
    BLUETOOTH = "BLUETOOTH",
    LISTS = "LISTS",
    NETWORK_PROFILE = "NETWORK_PROFILE",
    NOTIFICATIONS = "NOTIFICATIONS",
    SETTINGS = "SETTINGS",
    SKILLS = "SKILLS",
    VOLUME = "VOLUME"
}
export interface ForgetSmartHomeAppliancesRequest {
    __type?: "ForgetSmartHomeAppliancesRequest";
    /**
     * <p>The room that the appliances are associated with.</p>
     */
    RoomArn: string | undefined;
}
export declare namespace ForgetSmartHomeAppliancesRequest {
    function isa(o: any): o is ForgetSmartHomeAppliancesRequest;
}
export interface ForgetSmartHomeAppliancesResponse {
    __type?: "ForgetSmartHomeAppliancesResponse";
}
export declare namespace ForgetSmartHomeAppliancesResponse {
    function isa(o: any): o is ForgetSmartHomeAppliancesResponse;
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
export declare namespace Gateway {
    function isa(o: any): o is Gateway;
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
export declare namespace GatewayGroup {
    function isa(o: any): o is GatewayGroup;
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
export declare namespace GatewayGroupSummary {
    function isa(o: any): o is GatewayGroupSummary;
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
export declare namespace GatewaySummary {
    function isa(o: any): o is GatewaySummary;
}
export interface GetAddressBookRequest {
    __type?: "GetAddressBookRequest";
    /**
     * <p>The ARN of the address book for which to request details.</p>
     */
    AddressBookArn: string | undefined;
}
export declare namespace GetAddressBookRequest {
    function isa(o: any): o is GetAddressBookRequest;
}
export interface GetAddressBookResponse {
    __type?: "GetAddressBookResponse";
    /**
     * <p>The details of the requested address book.</p>
     */
    AddressBook?: AddressBook;
}
export declare namespace GetAddressBookResponse {
    function isa(o: any): o is GetAddressBookResponse;
}
export interface GetConferencePreferenceRequest {
    __type?: "GetConferencePreferenceRequest";
}
export declare namespace GetConferencePreferenceRequest {
    function isa(o: any): o is GetConferencePreferenceRequest;
}
export interface GetConferencePreferenceResponse {
    __type?: "GetConferencePreferenceResponse";
    /**
     * <p>The conference preference.</p>
     */
    Preference?: ConferencePreference;
}
export declare namespace GetConferencePreferenceResponse {
    function isa(o: any): o is GetConferencePreferenceResponse;
}
export interface GetConferenceProviderRequest {
    __type?: "GetConferenceProviderRequest";
    /**
     * <p>The ARN of the newly created conference provider.</p>
     */
    ConferenceProviderArn: string | undefined;
}
export declare namespace GetConferenceProviderRequest {
    function isa(o: any): o is GetConferenceProviderRequest;
}
export interface GetConferenceProviderResponse {
    __type?: "GetConferenceProviderResponse";
    /**
     * <p>The conference provider.</p>
     */
    ConferenceProvider?: ConferenceProvider;
}
export declare namespace GetConferenceProviderResponse {
    function isa(o: any): o is GetConferenceProviderResponse;
}
export interface GetContactRequest {
    __type?: "GetContactRequest";
    /**
     * <p>The ARN of the contact for which to request details.</p>
     */
    ContactArn: string | undefined;
}
export declare namespace GetContactRequest {
    function isa(o: any): o is GetContactRequest;
}
export interface GetContactResponse {
    __type?: "GetContactResponse";
    /**
     * <p>The details of the requested contact.</p>
     */
    Contact?: Contact;
}
export declare namespace GetContactResponse {
    function isa(o: any): o is GetContactResponse;
}
export interface GetDeviceRequest {
    __type?: "GetDeviceRequest";
    /**
     * <p>The ARN of the device for which to request details. Required.</p>
     */
    DeviceArn?: string;
}
export declare namespace GetDeviceRequest {
    function isa(o: any): o is GetDeviceRequest;
}
export interface GetDeviceResponse {
    __type?: "GetDeviceResponse";
    /**
     * <p>The details of the device requested. Required.</p>
     */
    Device?: Device;
}
export declare namespace GetDeviceResponse {
    function isa(o: any): o is GetDeviceResponse;
}
export interface GetGatewayGroupRequest {
    __type?: "GetGatewayGroupRequest";
    /**
     * <p>The ARN of the gateway group to get.</p>
     */
    GatewayGroupArn: string | undefined;
}
export declare namespace GetGatewayGroupRequest {
    function isa(o: any): o is GetGatewayGroupRequest;
}
export interface GetGatewayGroupResponse {
    __type?: "GetGatewayGroupResponse";
    /**
     * <p>The details of the gateway group.</p>
     */
    GatewayGroup?: GatewayGroup;
}
export declare namespace GetGatewayGroupResponse {
    function isa(o: any): o is GetGatewayGroupResponse;
}
export interface GetGatewayRequest {
    __type?: "GetGatewayRequest";
    /**
     * <p>The ARN of the gateway to get.</p>
     */
    GatewayArn: string | undefined;
}
export declare namespace GetGatewayRequest {
    function isa(o: any): o is GetGatewayRequest;
}
export interface GetGatewayResponse {
    __type?: "GetGatewayResponse";
    /**
     * <p>The details of the gateway.</p>
     */
    Gateway?: Gateway;
}
export declare namespace GetGatewayResponse {
    function isa(o: any): o is GetGatewayResponse;
}
export interface GetInvitationConfigurationRequest {
    __type?: "GetInvitationConfigurationRequest";
}
export declare namespace GetInvitationConfigurationRequest {
    function isa(o: any): o is GetInvitationConfigurationRequest;
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
    PrivateSkillIds?: Array<string>;
}
export declare namespace GetInvitationConfigurationResponse {
    function isa(o: any): o is GetInvitationConfigurationResponse;
}
export interface GetNetworkProfileRequest {
    __type?: "GetNetworkProfileRequest";
    /**
     * <p>The ARN of the network profile associated with a device.</p>
     */
    NetworkProfileArn: string | undefined;
}
export declare namespace GetNetworkProfileRequest {
    function isa(o: any): o is GetNetworkProfileRequest;
}
export interface GetNetworkProfileResponse {
    __type?: "GetNetworkProfileResponse";
    /**
     * <p>The network profile associated with a device.</p>
     */
    NetworkProfile?: NetworkProfile;
}
export declare namespace GetNetworkProfileResponse {
    function isa(o: any): o is GetNetworkProfileResponse;
}
export interface GetProfileRequest {
    __type?: "GetProfileRequest";
    /**
     * <p>The ARN of the room profile for which to request details. Required.</p>
     */
    ProfileArn?: string;
}
export declare namespace GetProfileRequest {
    function isa(o: any): o is GetProfileRequest;
}
export interface GetProfileResponse {
    __type?: "GetProfileResponse";
    /**
     * <p>The details of the room profile requested. Required.</p>
     */
    Profile?: Profile;
}
export declare namespace GetProfileResponse {
    function isa(o: any): o is GetProfileResponse;
}
export interface GetRoomRequest {
    __type?: "GetRoomRequest";
    /**
     * <p>The ARN of the room for which to request details. Required.</p>
     */
    RoomArn?: string;
}
export declare namespace GetRoomRequest {
    function isa(o: any): o is GetRoomRequest;
}
export interface GetRoomResponse {
    __type?: "GetRoomResponse";
    /**
     * <p>The details of the room requested.</p>
     */
    Room?: Room;
}
export declare namespace GetRoomResponse {
    function isa(o: any): o is GetRoomResponse;
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
export declare namespace GetRoomSkillParameterRequest {
    function isa(o: any): o is GetRoomSkillParameterRequest;
}
export interface GetRoomSkillParameterResponse {
    __type?: "GetRoomSkillParameterResponse";
    /**
     * <p>The details of the room skill parameter requested. Required.</p>
     */
    RoomSkillParameter?: RoomSkillParameter;
}
export declare namespace GetRoomSkillParameterResponse {
    function isa(o: any): o is GetRoomSkillParameterResponse;
}
export interface GetSkillGroupRequest {
    __type?: "GetSkillGroupRequest";
    /**
     * <p>The ARN of the skill group for which to get details. Required.</p>
     */
    SkillGroupArn?: string;
}
export declare namespace GetSkillGroupRequest {
    function isa(o: any): o is GetSkillGroupRequest;
}
export interface GetSkillGroupResponse {
    __type?: "GetSkillGroupResponse";
    /**
     * <p>The details of the skill group requested. Required.</p>
     */
    SkillGroup?: SkillGroup;
}
export declare namespace GetSkillGroupResponse {
    function isa(o: any): o is GetSkillGroupResponse;
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
export declare namespace InstantBooking {
    function isa(o: any): o is InstantBooking;
}
/**
 * <p>The Certificate Authority can't issue or revoke a certificate.</p>
 */
export interface InvalidCertificateAuthorityException extends __SmithyException, $MetadataBearer {
    name: "InvalidCertificateAuthorityException";
    $fault: "client";
    Message?: string;
}
export declare namespace InvalidCertificateAuthorityException {
    function isa(o: any): o is InvalidCertificateAuthorityException;
}
/**
 * <p>The device is in an invalid state.</p>
 */
export interface InvalidDeviceException extends __SmithyException, $MetadataBearer {
    name: "InvalidDeviceException";
    $fault: "client";
    Message?: string;
}
export declare namespace InvalidDeviceException {
    function isa(o: any): o is InvalidDeviceException;
}
/**
 * <p>A password in SecretsManager is in an invalid state.</p>
 */
export interface InvalidSecretsManagerResourceException extends __SmithyException, $MetadataBearer {
    name: "InvalidSecretsManagerResourceException";
    $fault: "client";
    Message?: string;
}
export declare namespace InvalidSecretsManagerResourceException {
    function isa(o: any): o is InvalidSecretsManagerResourceException;
}
/**
 * <p>The service linked role is locked for deletion. </p>
 */
export interface InvalidServiceLinkedRoleStateException extends __SmithyException, $MetadataBearer {
    name: "InvalidServiceLinkedRoleStateException";
    $fault: "client";
    Message?: string;
}
export declare namespace InvalidServiceLinkedRoleStateException {
    function isa(o: any): o is InvalidServiceLinkedRoleStateException;
}
/**
 * <p>The attempt to update a user is invalid due to the user's current status.</p>
 */
export interface InvalidUserStatusException extends __SmithyException, $MetadataBearer {
    name: "InvalidUserStatusException";
    $fault: "client";
    Message?: string;
}
export declare namespace InvalidUserStatusException {
    function isa(o: any): o is InvalidUserStatusException;
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
export declare namespace ListBusinessReportSchedulesRequest {
    function isa(o: any): o is ListBusinessReportSchedulesRequest;
}
export interface ListBusinessReportSchedulesResponse {
    __type?: "ListBusinessReportSchedulesResponse";
    /**
     * <p>The schedule of the reports.</p>
     */
    BusinessReportSchedules?: Array<BusinessReportSchedule>;
    /**
     * <p>The token used to list the remaining schedules from the previous API call.</p>
     */
    NextToken?: string;
}
export declare namespace ListBusinessReportSchedulesResponse {
    function isa(o: any): o is ListBusinessReportSchedulesResponse;
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
export declare namespace ListConferenceProvidersRequest {
    function isa(o: any): o is ListConferenceProvidersRequest;
}
export interface ListConferenceProvidersResponse {
    __type?: "ListConferenceProvidersResponse";
    /**
     * <p>The conference providers.</p>
     */
    ConferenceProviders?: Array<ConferenceProvider>;
    /**
     * <p>The tokens used for pagination.</p>
     */
    NextToken?: string;
}
export declare namespace ListConferenceProvidersResponse {
    function isa(o: any): o is ListConferenceProvidersResponse;
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
export declare namespace ListDeviceEventsRequest {
    function isa(o: any): o is ListDeviceEventsRequest;
}
export interface ListDeviceEventsResponse {
    __type?: "ListDeviceEventsResponse";
    /**
     * <p>The device events requested for the device ARN.</p>
     */
    DeviceEvents?: Array<DeviceEvent>;
    /**
     * <p>The token returned to indicate that there is more data available.</p>
     */
    NextToken?: string;
}
export declare namespace ListDeviceEventsResponse {
    function isa(o: any): o is ListDeviceEventsResponse;
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
export declare namespace ListGatewayGroupsRequest {
    function isa(o: any): o is ListGatewayGroupsRequest;
}
export interface ListGatewayGroupsResponse {
    __type?: "ListGatewayGroupsResponse";
    /**
     * <p>The gateway groups in the list.</p>
     */
    GatewayGroups?: Array<GatewayGroupSummary>;
    /**
     * <p>The token used to paginate though multiple pages of gateway group summaries.</p>
     */
    NextToken?: string;
}
export declare namespace ListGatewayGroupsResponse {
    function isa(o: any): o is ListGatewayGroupsResponse;
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
export declare namespace ListGatewaysRequest {
    function isa(o: any): o is ListGatewaysRequest;
}
export interface ListGatewaysResponse {
    __type?: "ListGatewaysResponse";
    /**
     * <p>The gateways in the list.</p>
     */
    Gateways?: Array<GatewaySummary>;
    /**
     * <p>The token used to paginate though multiple pages of gateway summaries.</p>
     */
    NextToken?: string;
}
export declare namespace ListGatewaysResponse {
    function isa(o: any): o is ListGatewaysResponse;
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
export declare namespace ListSkillsRequest {
    function isa(o: any): o is ListSkillsRequest;
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
    SkillSummaries?: Array<SkillSummary>;
}
export declare namespace ListSkillsResponse {
    function isa(o: any): o is ListSkillsResponse;
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
export declare namespace ListSkillsStoreCategoriesRequest {
    function isa(o: any): o is ListSkillsStoreCategoriesRequest;
}
export interface ListSkillsStoreCategoriesResponse {
    __type?: "ListSkillsStoreCategoriesResponse";
    /**
     * <p>The list of categories.</p>
     */
    CategoryList?: Array<Category>;
    /**
     * <p>The tokens used for pagination.</p>
     */
    NextToken?: string;
}
export declare namespace ListSkillsStoreCategoriesResponse {
    function isa(o: any): o is ListSkillsStoreCategoriesResponse;
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
export declare namespace ListSkillsStoreSkillsByCategoryRequest {
    function isa(o: any): o is ListSkillsStoreSkillsByCategoryRequest;
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
    SkillsStoreSkills?: Array<SkillsStoreSkill>;
}
export declare namespace ListSkillsStoreSkillsByCategoryResponse {
    function isa(o: any): o is ListSkillsStoreSkillsByCategoryResponse;
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
export declare namespace ListSmartHomeAppliancesRequest {
    function isa(o: any): o is ListSmartHomeAppliancesRequest;
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
    SmartHomeAppliances?: Array<SmartHomeAppliance>;
}
export declare namespace ListSmartHomeAppliancesResponse {
    function isa(o: any): o is ListSmartHomeAppliancesResponse;
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
export declare namespace ListTagsRequest {
    function isa(o: any): o is ListTagsRequest;
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
    Tags?: Array<Tag>;
}
export declare namespace ListTagsResponse {
    function isa(o: any): o is ListTagsResponse;
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
export declare namespace MeetingRoomConfiguration {
    function isa(o: any): o is MeetingRoomConfiguration;
}
export declare enum NetworkEapMethod {
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
    TrustAnchors?: Array<string>;
}
export declare namespace NetworkProfile {
    function isa(o: any): o is NetworkProfile;
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
export declare namespace NetworkProfileData {
    function isa(o: any): o is NetworkProfileData;
}
export declare enum NetworkSecurityType {
    OPEN = "OPEN",
    WEP = "WEP",
    WPA2_ENTERPRISE = "WPA2_ENTERPRISE",
    WPA2_PSK = "WPA2_PSK",
    WPA_PSK = "WPA_PSK"
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
export declare namespace PhoneNumber {
    function isa(o: any): o is PhoneNumber;
}
export declare enum PhoneNumberType {
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
export declare namespace Profile {
    function isa(o: any): o is Profile;
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
export declare namespace ProfileData {
    function isa(o: any): o is ProfileData;
}
export interface PutConferencePreferenceRequest {
    __type?: "PutConferencePreferenceRequest";
    /**
     * <p>The conference preference of a specific conference provider.</p>
     */
    ConferencePreference: ConferencePreference | undefined;
}
export declare namespace PutConferencePreferenceRequest {
    function isa(o: any): o is PutConferencePreferenceRequest;
}
export interface PutConferencePreferenceResponse {
    __type?: "PutConferencePreferenceResponse";
}
export declare namespace PutConferencePreferenceResponse {
    function isa(o: any): o is PutConferencePreferenceResponse;
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
    PrivateSkillIds?: Array<string>;
}
export declare namespace PutInvitationConfigurationRequest {
    function isa(o: any): o is PutInvitationConfigurationRequest;
}
export interface PutInvitationConfigurationResponse {
    __type?: "PutInvitationConfigurationResponse";
}
export declare namespace PutInvitationConfigurationResponse {
    function isa(o: any): o is PutInvitationConfigurationResponse;
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
export declare namespace PutRoomSkillParameterRequest {
    function isa(o: any): o is PutRoomSkillParameterRequest;
}
export interface PutRoomSkillParameterResponse {
    __type?: "PutRoomSkillParameterResponse";
}
export declare namespace PutRoomSkillParameterResponse {
    function isa(o: any): o is PutRoomSkillParameterResponse;
}
export interface PutSkillAuthorizationRequest {
    __type?: "PutSkillAuthorizationRequest";
    /**
     * <p>The authorization result specific to OAUTH code grant output. "Code” must be
     *          populated in the AuthorizationResult map to establish the authorization.</p>
     */
    AuthorizationResult: {
        [key: string]: string;
    } | undefined;
    /**
     * <p>The room that the skill is authorized for.</p>
     */
    RoomArn?: string;
    /**
     * <p>The unique identifier of a skill.</p>
     */
    SkillId: string | undefined;
}
export declare namespace PutSkillAuthorizationRequest {
    function isa(o: any): o is PutSkillAuthorizationRequest;
}
export interface PutSkillAuthorizationResponse {
    __type?: "PutSkillAuthorizationResponse";
}
export declare namespace PutSkillAuthorizationResponse {
    function isa(o: any): o is PutSkillAuthorizationResponse;
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
export declare namespace RegisterAVSDeviceRequest {
    function isa(o: any): o is RegisterAVSDeviceRequest;
}
export interface RegisterAVSDeviceResponse {
    __type?: "RegisterAVSDeviceResponse";
    /**
     * <p>The ARN of the device.</p>
     */
    DeviceArn?: string;
}
export declare namespace RegisterAVSDeviceResponse {
    function isa(o: any): o is RegisterAVSDeviceResponse;
}
export interface RejectSkillRequest {
    __type?: "RejectSkillRequest";
    /**
     * <p>The unique identifier of the skill.</p>
     */
    SkillId: string | undefined;
}
export declare namespace RejectSkillRequest {
    function isa(o: any): o is RejectSkillRequest;
}
export interface RejectSkillResponse {
    __type?: "RejectSkillResponse";
}
export declare namespace RejectSkillResponse {
    function isa(o: any): o is RejectSkillResponse;
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
export declare namespace RequireCheckIn {
    function isa(o: any): o is RequireCheckIn;
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
export declare namespace ResolveRoomRequest {
    function isa(o: any): o is ResolveRoomRequest;
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
    RoomSkillParameters?: Array<RoomSkillParameter>;
}
export declare namespace ResolveRoomResponse {
    function isa(o: any): o is ResolveRoomResponse;
}
/**
 * <p>Another resource is associated with the resource in the request.</p>
 */
export interface ResourceAssociatedException extends __SmithyException, $MetadataBearer {
    name: "ResourceAssociatedException";
    $fault: "client";
    Message?: string;
}
export declare namespace ResourceAssociatedException {
    function isa(o: any): o is ResourceAssociatedException;
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
export declare namespace RevokeInvitationRequest {
    function isa(o: any): o is RevokeInvitationRequest;
}
export interface RevokeInvitationResponse {
    __type?: "RevokeInvitationResponse";
}
export declare namespace RevokeInvitationResponse {
    function isa(o: any): o is RevokeInvitationResponse;
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
export declare namespace Room {
    function isa(o: any): o is Room;
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
export declare namespace RoomData {
    function isa(o: any): o is RoomData;
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
export declare namespace RoomSkillParameter {
    function isa(o: any): o is RoomSkillParameter;
}
export interface SearchAddressBooksRequest {
    __type?: "SearchAddressBooksRequest";
    /**
     * <p>The filters to use to list a specified set of address books. The supported filter key
     *          is AddressBookName.</p>
     */
    Filters?: Array<Filter>;
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
    SortCriteria?: Array<Sort>;
}
export declare namespace SearchAddressBooksRequest {
    function isa(o: any): o is SearchAddressBooksRequest;
}
export interface SearchAddressBooksResponse {
    __type?: "SearchAddressBooksResponse";
    /**
     * <p>The address books that meet the specified set of filter criteria, in sort
     *          order.</p>
     */
    AddressBooks?: Array<AddressBookData>;
    /**
     * <p>The token returned to indicate that there is more data available.</p>
     */
    NextToken?: string;
    /**
     * <p>The total number of address books returned.</p>
     */
    TotalCount?: number;
}
export declare namespace SearchAddressBooksResponse {
    function isa(o: any): o is SearchAddressBooksResponse;
}
export interface SearchContactsRequest {
    __type?: "SearchContactsRequest";
    /**
     * <p>The filters to use to list a specified set of address books. The supported filter
     *          keys are DisplayName, FirstName, LastName, and AddressBookArns.</p>
     */
    Filters?: Array<Filter>;
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
    SortCriteria?: Array<Sort>;
}
export declare namespace SearchContactsRequest {
    function isa(o: any): o is SearchContactsRequest;
}
export interface SearchContactsResponse {
    __type?: "SearchContactsResponse";
    /**
     * <p>The contacts that meet the specified set of filter criteria, in sort order.</p>
     */
    Contacts?: Array<ContactData>;
    /**
     * <p>The token returned to indicate that there is more data available.</p>
     */
    NextToken?: string;
    /**
     * <p>The total number of contacts returned.</p>
     */
    TotalCount?: number;
}
export declare namespace SearchContactsResponse {
    function isa(o: any): o is SearchContactsResponse;
}
export interface SearchDevicesRequest {
    __type?: "SearchDevicesRequest";
    /**
     * <p>The filters to use to list a specified set of devices. Supported filter keys are
     *          DeviceName, DeviceStatus, DeviceStatusDetailCode, RoomName, DeviceType, DeviceSerialNumber,
     *          UnassociatedOnly, ConnectionStatus (ONLINE and OFFLINE), NetworkProfileName,
     *          NetworkProfileArn, Feature, and FailureCode.</p>
     */
    Filters?: Array<Filter>;
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
    SortCriteria?: Array<Sort>;
}
export declare namespace SearchDevicesRequest {
    function isa(o: any): o is SearchDevicesRequest;
}
export interface SearchDevicesResponse {
    __type?: "SearchDevicesResponse";
    /**
     * <p>The devices that meet the specified set of filter criteria, in sort order.</p>
     */
    Devices?: Array<DeviceData>;
    /**
     * <p>The token returned to indicate that there is more data available.</p>
     */
    NextToken?: string;
    /**
     * <p>The total number of devices returned.</p>
     */
    TotalCount?: number;
}
export declare namespace SearchDevicesResponse {
    function isa(o: any): o is SearchDevicesResponse;
}
export interface SearchNetworkProfilesRequest {
    __type?: "SearchNetworkProfilesRequest";
    /**
     * <p>The filters to use to list a specified set of network profiles. Valid filters are
     *          NetworkProfileName, Ssid, and SecurityType.</p>
     */
    Filters?: Array<Filter>;
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
    SortCriteria?: Array<Sort>;
}
export declare namespace SearchNetworkProfilesRequest {
    function isa(o: any): o is SearchNetworkProfilesRequest;
}
export interface SearchNetworkProfilesResponse {
    __type?: "SearchNetworkProfilesResponse";
    /**
     * <p>The network profiles that meet the specified set of filter criteria, in sort order. It
     *          is a list of NetworkProfileData objects. </p>
     */
    NetworkProfiles?: Array<NetworkProfileData>;
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
export declare namespace SearchNetworkProfilesResponse {
    function isa(o: any): o is SearchNetworkProfilesResponse;
}
export interface SearchProfilesRequest {
    __type?: "SearchProfilesRequest";
    /**
     * <p>The filters to use to list a specified set of room profiles. Supported filter keys
     *          are ProfileName and Address. Required. </p>
     */
    Filters?: Array<Filter>;
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
    SortCriteria?: Array<Sort>;
}
export declare namespace SearchProfilesRequest {
    function isa(o: any): o is SearchProfilesRequest;
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
    Profiles?: Array<ProfileData>;
    /**
     * <p>The total number of room profiles returned.</p>
     */
    TotalCount?: number;
}
export declare namespace SearchProfilesResponse {
    function isa(o: any): o is SearchProfilesResponse;
}
export interface SearchRoomsRequest {
    __type?: "SearchRoomsRequest";
    /**
     * <p>The filters to use to list a specified set of rooms. The supported filter keys are
     *          RoomName and ProfileName.</p>
     */
    Filters?: Array<Filter>;
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
    SortCriteria?: Array<Sort>;
}
export declare namespace SearchRoomsRequest {
    function isa(o: any): o is SearchRoomsRequest;
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
    Rooms?: Array<RoomData>;
    /**
     * <p>The total number of rooms returned.</p>
     */
    TotalCount?: number;
}
export declare namespace SearchRoomsResponse {
    function isa(o: any): o is SearchRoomsResponse;
}
export interface SearchSkillGroupsRequest {
    __type?: "SearchSkillGroupsRequest";
    /**
     * <p>The filters to use to list a specified set of skill groups. The supported filter key
     *          is SkillGroupName. </p>
     */
    Filters?: Array<Filter>;
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
    SortCriteria?: Array<Sort>;
}
export declare namespace SearchSkillGroupsRequest {
    function isa(o: any): o is SearchSkillGroupsRequest;
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
    SkillGroups?: Array<SkillGroupData>;
    /**
     * <p>The total number of skill groups returned.</p>
     */
    TotalCount?: number;
}
export declare namespace SearchSkillGroupsResponse {
    function isa(o: any): o is SearchSkillGroupsResponse;
}
export interface SearchUsersRequest {
    __type?: "SearchUsersRequest";
    /**
     * <p>The filters to use for listing a specific set of users. Required. Supported filter
     *          keys are UserId, FirstName, LastName, Email, and EnrollmentStatus.</p>
     */
    Filters?: Array<Filter>;
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
    SortCriteria?: Array<Sort>;
}
export declare namespace SearchUsersRequest {
    function isa(o: any): o is SearchUsersRequest;
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
    Users?: Array<UserData>;
}
export declare namespace SearchUsersResponse {
    function isa(o: any): o is SearchUsersResponse;
}
export interface SendInvitationRequest {
    __type?: "SendInvitationRequest";
    /**
     * <p>The ARN of the user to whom to send an invitation. Required.</p>
     */
    UserArn?: string;
}
export declare namespace SendInvitationRequest {
    function isa(o: any): o is SendInvitationRequest;
}
export interface SendInvitationResponse {
    __type?: "SendInvitationResponse";
}
export declare namespace SendInvitationResponse {
    function isa(o: any): o is SendInvitationResponse;
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
export declare namespace SipAddress {
    function isa(o: any): o is SipAddress;
}
export declare enum SipType {
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
    BulletPoints?: Array<string>;
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
    GenericKeywords?: Array<string>;
    /**
     * <p>The phrase used to trigger the skill.</p>
     */
    InvocationPhrase?: string;
    /**
     * <p>The updates added in bullet points.</p>
     */
    NewInThisVersionBulletPoints?: Array<string>;
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
    Reviews?: {
        [key: string]: string;
    };
    /**
     * <p>The types of skills.</p>
     */
    SkillTypes?: Array<string>;
}
export declare namespace SkillDetails {
    function isa(o: any): o is SkillDetails;
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
export declare namespace SkillGroup {
    function isa(o: any): o is SkillGroup;
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
export declare namespace SkillGroupData {
    function isa(o: any): o is SkillGroupData;
}
/**
 * <p>The skill must be linked to a third-party account.</p>
 */
export interface SkillNotLinkedException extends __SmithyException, $MetadataBearer {
    name: "SkillNotLinkedException";
    $fault: "client";
    Message?: string;
}
export declare namespace SkillNotLinkedException {
    function isa(o: any): o is SkillNotLinkedException;
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
export declare namespace SkillSummary {
    function isa(o: any): o is SkillSummary;
}
export declare enum SkillType {
    PRIVATE = "PRIVATE",
    PUBLIC = "PUBLIC"
}
export declare enum SkillTypeFilter {
    ALL = "ALL",
    PRIVATE = "PRIVATE",
    PUBLIC = "PUBLIC"
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
    SampleUtterances?: Array<string>;
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
export declare namespace SkillsStoreSkill {
    function isa(o: any): o is SkillsStoreSkill;
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
export declare namespace SmartHomeAppliance {
    function isa(o: any): o is SmartHomeAppliance;
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
export declare namespace Sort {
    function isa(o: any): o is Sort;
}
export declare enum SortValue {
    ASC = "ASC",
    DESC = "DESC"
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
    Features: Array<Feature | string> | undefined;
    /**
     * <p>The ARN of the room with which the device to sync is associated. Required.</p>
     */
    RoomArn?: string;
}
export declare namespace StartDeviceSyncRequest {
    function isa(o: any): o is StartDeviceSyncRequest;
}
export interface StartDeviceSyncResponse {
    __type?: "StartDeviceSyncResponse";
}
export declare namespace StartDeviceSyncResponse {
    function isa(o: any): o is StartDeviceSyncResponse;
}
export interface StartSmartHomeApplianceDiscoveryRequest {
    __type?: "StartSmartHomeApplianceDiscoveryRequest";
    /**
     * <p>The room where smart home appliance discovery was initiated.</p>
     */
    RoomArn: string | undefined;
}
export declare namespace StartSmartHomeApplianceDiscoveryRequest {
    function isa(o: any): o is StartSmartHomeApplianceDiscoveryRequest;
}
export interface StartSmartHomeApplianceDiscoveryResponse {
    __type?: "StartSmartHomeApplianceDiscoveryResponse";
}
export declare namespace StartSmartHomeApplianceDiscoveryResponse {
    function isa(o: any): o is StartSmartHomeApplianceDiscoveryResponse;
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
export declare namespace Tag {
    function isa(o: any): o is Tag;
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
    Tags: Array<Tag> | undefined;
}
export declare namespace TagResourceRequest {
    function isa(o: any): o is TagResourceRequest;
}
export interface TagResourceResponse {
    __type?: "TagResourceResponse";
}
export declare namespace TagResourceResponse {
    function isa(o: any): o is TagResourceResponse;
}
export declare enum TemperatureUnit {
    CELSIUS = "CELSIUS",
    FAHRENHEIT = "FAHRENHEIT"
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
    TagKeys: Array<string> | undefined;
}
export declare namespace UntagResourceRequest {
    function isa(o: any): o is UntagResourceRequest;
}
export interface UntagResourceResponse {
    __type?: "UntagResourceResponse";
}
export declare namespace UntagResourceResponse {
    function isa(o: any): o is UntagResourceResponse;
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
export declare namespace UpdateAddressBookRequest {
    function isa(o: any): o is UpdateAddressBookRequest;
}
export interface UpdateAddressBookResponse {
    __type?: "UpdateAddressBookResponse";
}
export declare namespace UpdateAddressBookResponse {
    function isa(o: any): o is UpdateAddressBookResponse;
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
export declare namespace UpdateBusinessReportScheduleRequest {
    function isa(o: any): o is UpdateBusinessReportScheduleRequest;
}
export interface UpdateBusinessReportScheduleResponse {
    __type?: "UpdateBusinessReportScheduleResponse";
}
export declare namespace UpdateBusinessReportScheduleResponse {
    function isa(o: any): o is UpdateBusinessReportScheduleResponse;
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
export declare namespace UpdateConferenceProviderRequest {
    function isa(o: any): o is UpdateConferenceProviderRequest;
}
export interface UpdateConferenceProviderResponse {
    __type?: "UpdateConferenceProviderResponse";
}
export declare namespace UpdateConferenceProviderResponse {
    function isa(o: any): o is UpdateConferenceProviderResponse;
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
    PhoneNumbers?: Array<PhoneNumber>;
    /**
     * <p>The list of SIP addresses for the contact.</p>
     */
    SipAddresses?: Array<SipAddress>;
}
export declare namespace UpdateContactRequest {
    function isa(o: any): o is UpdateContactRequest;
}
export interface UpdateContactResponse {
    __type?: "UpdateContactResponse";
}
export declare namespace UpdateContactResponse {
    function isa(o: any): o is UpdateContactResponse;
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
export declare namespace UpdateDeviceRequest {
    function isa(o: any): o is UpdateDeviceRequest;
}
export interface UpdateDeviceResponse {
    __type?: "UpdateDeviceResponse";
}
export declare namespace UpdateDeviceResponse {
    function isa(o: any): o is UpdateDeviceResponse;
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
    ReminderAtMinutes?: Array<number>;
    /**
     * <p>The type of sound that users hear during the end of meeting reminder. </p>
     */
    ReminderType?: EndOfMeetingReminderType | string;
}
export declare namespace UpdateEndOfMeetingReminder {
    function isa(o: any): o is UpdateEndOfMeetingReminder;
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
export declare namespace UpdateGatewayGroupRequest {
    function isa(o: any): o is UpdateGatewayGroupRequest;
}
export interface UpdateGatewayGroupResponse {
    __type?: "UpdateGatewayGroupResponse";
}
export declare namespace UpdateGatewayGroupResponse {
    function isa(o: any): o is UpdateGatewayGroupResponse;
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
export declare namespace UpdateGatewayRequest {
    function isa(o: any): o is UpdateGatewayRequest;
}
export interface UpdateGatewayResponse {
    __type?: "UpdateGatewayResponse";
}
export declare namespace UpdateGatewayResponse {
    function isa(o: any): o is UpdateGatewayResponse;
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
export declare namespace UpdateInstantBooking {
    function isa(o: any): o is UpdateInstantBooking;
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
export declare namespace UpdateMeetingRoomConfiguration {
    function isa(o: any): o is UpdateMeetingRoomConfiguration;
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
    TrustAnchors?: Array<string>;
}
export declare namespace UpdateNetworkProfileRequest {
    function isa(o: any): o is UpdateNetworkProfileRequest;
}
export interface UpdateNetworkProfileResponse {
    __type?: "UpdateNetworkProfileResponse";
}
export declare namespace UpdateNetworkProfileResponse {
    function isa(o: any): o is UpdateNetworkProfileResponse;
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
export declare namespace UpdateProfileRequest {
    function isa(o: any): o is UpdateProfileRequest;
}
export interface UpdateProfileResponse {
    __type?: "UpdateProfileResponse";
}
export declare namespace UpdateProfileResponse {
    function isa(o: any): o is UpdateProfileResponse;
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
export declare namespace UpdateRequireCheckIn {
    function isa(o: any): o is UpdateRequireCheckIn;
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
export declare namespace UpdateRoomRequest {
    function isa(o: any): o is UpdateRoomRequest;
}
export interface UpdateRoomResponse {
    __type?: "UpdateRoomResponse";
}
export declare namespace UpdateRoomResponse {
    function isa(o: any): o is UpdateRoomResponse;
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
export declare namespace UpdateSkillGroupRequest {
    function isa(o: any): o is UpdateSkillGroupRequest;
}
export interface UpdateSkillGroupResponse {
    __type?: "UpdateSkillGroupResponse";
}
export declare namespace UpdateSkillGroupResponse {
    function isa(o: any): o is UpdateSkillGroupResponse;
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
export declare namespace UserData {
    function isa(o: any): o is UserData;
}
export declare enum WakeWord {
    ALEXA = "ALEXA",
    AMAZON = "AMAZON",
    COMPUTER = "COMPUTER",
    ECHO = "ECHO"
}
