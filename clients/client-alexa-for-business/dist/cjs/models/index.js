"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AlreadyExistsException;
(function (AlreadyExistsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "AlreadyExistsException");
    }
    AlreadyExistsException.isa = isa;
})(AlreadyExistsException = exports.AlreadyExistsException || (exports.AlreadyExistsException = {}));
var ConcurrentModificationException;
(function (ConcurrentModificationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConcurrentModificationException");
    }
    ConcurrentModificationException.isa = isa;
})(ConcurrentModificationException = exports.ConcurrentModificationException || (exports.ConcurrentModificationException = {}));
var DeviceNotRegisteredException;
(function (DeviceNotRegisteredException) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeviceNotRegisteredException");
    }
    DeviceNotRegisteredException.isa = isa;
})(DeviceNotRegisteredException = exports.DeviceNotRegisteredException || (exports.DeviceNotRegisteredException = {}));
var Filter;
(function (Filter) {
    function isa(o) {
        return smithy_client_1.isa(o, "Filter");
    }
    Filter.isa = isa;
})(Filter = exports.Filter || (exports.Filter = {}));
var LimitExceededException;
(function (LimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "LimitExceededException");
    }
    LimitExceededException.isa = isa;
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var NameInUseException;
(function (NameInUseException) {
    function isa(o) {
        return smithy_client_1.isa(o, "NameInUseException");
    }
    NameInUseException.isa = isa;
})(NameInUseException = exports.NameInUseException || (exports.NameInUseException = {}));
var NotFoundException;
(function (NotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "NotFoundException");
    }
    NotFoundException.isa = isa;
})(NotFoundException = exports.NotFoundException || (exports.NotFoundException = {}));
var ResourceInUseException;
(function (ResourceInUseException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceInUseException");
    }
    ResourceInUseException.isa = isa;
})(ResourceInUseException = exports.ResourceInUseException || (exports.ResourceInUseException = {}));
var UnauthorizedException;
(function (UnauthorizedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "UnauthorizedException");
    }
    UnauthorizedException.isa = isa;
})(UnauthorizedException = exports.UnauthorizedException || (exports.UnauthorizedException = {}));
var CommsProtocol;
(function (CommsProtocol) {
    CommsProtocol["H323"] = "H323";
    CommsProtocol["SIP"] = "SIP";
    CommsProtocol["SIPS"] = "SIPS";
})(CommsProtocol = exports.CommsProtocol || (exports.CommsProtocol = {}));
var ConferenceProvider;
(function (ConferenceProvider) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConferenceProvider");
    }
    ConferenceProvider.isa = isa;
})(ConferenceProvider = exports.ConferenceProvider || (exports.ConferenceProvider = {}));
var ConferenceProviderType;
(function (ConferenceProviderType) {
    ConferenceProviderType["BLUEJEANS"] = "BLUEJEANS";
    ConferenceProviderType["CHIME"] = "CHIME";
    ConferenceProviderType["CUSTOM"] = "CUSTOM";
    ConferenceProviderType["FUZE"] = "FUZE";
    ConferenceProviderType["GOOGLE_HANGOUTS"] = "GOOGLE_HANGOUTS";
    ConferenceProviderType["POLYCOM"] = "POLYCOM";
    ConferenceProviderType["RINGCENTRAL"] = "RINGCENTRAL";
    ConferenceProviderType["SKYPE_FOR_BUSINESS"] = "SKYPE_FOR_BUSINESS";
    ConferenceProviderType["WEBEX"] = "WEBEX";
    ConferenceProviderType["ZOOM"] = "ZOOM";
})(ConferenceProviderType = exports.ConferenceProviderType || (exports.ConferenceProviderType = {}));
var IPDialIn;
(function (IPDialIn) {
    function isa(o) {
        return smithy_client_1.isa(o, "IPDialIn");
    }
    IPDialIn.isa = isa;
})(IPDialIn = exports.IPDialIn || (exports.IPDialIn = {}));
var MeetingSetting;
(function (MeetingSetting) {
    function isa(o) {
        return smithy_client_1.isa(o, "MeetingSetting");
    }
    MeetingSetting.isa = isa;
})(MeetingSetting = exports.MeetingSetting || (exports.MeetingSetting = {}));
var PSTNDialIn;
(function (PSTNDialIn) {
    function isa(o) {
        return smithy_client_1.isa(o, "PSTNDialIn");
    }
    PSTNDialIn.isa = isa;
})(PSTNDialIn = exports.PSTNDialIn || (exports.PSTNDialIn = {}));
var RequirePin;
(function (RequirePin) {
    RequirePin["NO"] = "NO";
    RequirePin["OPTIONAL"] = "OPTIONAL";
    RequirePin["YES"] = "YES";
})(RequirePin = exports.RequirePin || (exports.RequirePin = {}));
var Audio;
(function (Audio) {
    function isa(o) {
        return smithy_client_1.isa(o, "Audio");
    }
    Audio.isa = isa;
})(Audio = exports.Audio || (exports.Audio = {}));
var Content;
(function (Content) {
    function isa(o) {
        return smithy_client_1.isa(o, "Content");
    }
    Content.isa = isa;
})(Content = exports.Content || (exports.Content = {}));
var Locale;
(function (Locale) {
    Locale["en_US"] = "en-US";
})(Locale = exports.Locale || (exports.Locale = {}));
var SendAnnouncementRequest;
(function (SendAnnouncementRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "SendAnnouncementRequest");
    }
    SendAnnouncementRequest.isa = isa;
})(SendAnnouncementRequest = exports.SendAnnouncementRequest || (exports.SendAnnouncementRequest = {}));
var SendAnnouncementResponse;
(function (SendAnnouncementResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "SendAnnouncementResponse");
    }
    SendAnnouncementResponse.isa = isa;
})(SendAnnouncementResponse = exports.SendAnnouncementResponse || (exports.SendAnnouncementResponse = {}));
var Ssml;
(function (Ssml) {
    function isa(o) {
        return smithy_client_1.isa(o, "Ssml");
    }
    Ssml.isa = isa;
})(Ssml = exports.Ssml || (exports.Ssml = {}));
var Text;
(function (Text) {
    function isa(o) {
        return smithy_client_1.isa(o, "Text");
    }
    Text.isa = isa;
})(Text = exports.Text || (exports.Text = {}));
var DeleteDeviceUsageDataRequest;
(function (DeleteDeviceUsageDataRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteDeviceUsageDataRequest");
    }
    DeleteDeviceUsageDataRequest.isa = isa;
})(DeleteDeviceUsageDataRequest = exports.DeleteDeviceUsageDataRequest || (exports.DeleteDeviceUsageDataRequest = {}));
var DeleteDeviceUsageDataResponse;
(function (DeleteDeviceUsageDataResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteDeviceUsageDataResponse");
    }
    DeleteDeviceUsageDataResponse.isa = isa;
})(DeleteDeviceUsageDataResponse = exports.DeleteDeviceUsageDataResponse || (exports.DeleteDeviceUsageDataResponse = {}));
var DeviceUsageType;
(function (DeviceUsageType) {
    DeviceUsageType["VOICE"] = "VOICE";
})(DeviceUsageType = exports.DeviceUsageType || (exports.DeviceUsageType = {}));
var AddressBook;
(function (AddressBook) {
    function isa(o) {
        return smithy_client_1.isa(o, "AddressBook");
    }
    AddressBook.isa = isa;
})(AddressBook = exports.AddressBook || (exports.AddressBook = {}));
var AddressBookData;
(function (AddressBookData) {
    function isa(o) {
        return smithy_client_1.isa(o, "AddressBookData");
    }
    AddressBookData.isa = isa;
})(AddressBookData = exports.AddressBookData || (exports.AddressBookData = {}));
var ApproveSkillRequest;
(function (ApproveSkillRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ApproveSkillRequest");
    }
    ApproveSkillRequest.isa = isa;
})(ApproveSkillRequest = exports.ApproveSkillRequest || (exports.ApproveSkillRequest = {}));
var ApproveSkillResponse;
(function (ApproveSkillResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ApproveSkillResponse");
    }
    ApproveSkillResponse.isa = isa;
})(ApproveSkillResponse = exports.ApproveSkillResponse || (exports.ApproveSkillResponse = {}));
var AssociateContactWithAddressBookRequest;
(function (AssociateContactWithAddressBookRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssociateContactWithAddressBookRequest");
    }
    AssociateContactWithAddressBookRequest.isa = isa;
})(AssociateContactWithAddressBookRequest = exports.AssociateContactWithAddressBookRequest || (exports.AssociateContactWithAddressBookRequest = {}));
var AssociateContactWithAddressBookResponse;
(function (AssociateContactWithAddressBookResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssociateContactWithAddressBookResponse");
    }
    AssociateContactWithAddressBookResponse.isa = isa;
})(AssociateContactWithAddressBookResponse = exports.AssociateContactWithAddressBookResponse || (exports.AssociateContactWithAddressBookResponse = {}));
var AssociateDeviceWithNetworkProfileRequest;
(function (AssociateDeviceWithNetworkProfileRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssociateDeviceWithNetworkProfileRequest");
    }
    AssociateDeviceWithNetworkProfileRequest.isa = isa;
})(AssociateDeviceWithNetworkProfileRequest = exports.AssociateDeviceWithNetworkProfileRequest || (exports.AssociateDeviceWithNetworkProfileRequest = {}));
var AssociateDeviceWithNetworkProfileResponse;
(function (AssociateDeviceWithNetworkProfileResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssociateDeviceWithNetworkProfileResponse");
    }
    AssociateDeviceWithNetworkProfileResponse.isa = isa;
})(AssociateDeviceWithNetworkProfileResponse = exports.AssociateDeviceWithNetworkProfileResponse || (exports.AssociateDeviceWithNetworkProfileResponse = {}));
var AssociateDeviceWithRoomRequest;
(function (AssociateDeviceWithRoomRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssociateDeviceWithRoomRequest");
    }
    AssociateDeviceWithRoomRequest.isa = isa;
})(AssociateDeviceWithRoomRequest = exports.AssociateDeviceWithRoomRequest || (exports.AssociateDeviceWithRoomRequest = {}));
var AssociateDeviceWithRoomResponse;
(function (AssociateDeviceWithRoomResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssociateDeviceWithRoomResponse");
    }
    AssociateDeviceWithRoomResponse.isa = isa;
})(AssociateDeviceWithRoomResponse = exports.AssociateDeviceWithRoomResponse || (exports.AssociateDeviceWithRoomResponse = {}));
var AssociateSkillGroupWithRoomRequest;
(function (AssociateSkillGroupWithRoomRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssociateSkillGroupWithRoomRequest");
    }
    AssociateSkillGroupWithRoomRequest.isa = isa;
})(AssociateSkillGroupWithRoomRequest = exports.AssociateSkillGroupWithRoomRequest || (exports.AssociateSkillGroupWithRoomRequest = {}));
var AssociateSkillGroupWithRoomResponse;
(function (AssociateSkillGroupWithRoomResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssociateSkillGroupWithRoomResponse");
    }
    AssociateSkillGroupWithRoomResponse.isa = isa;
})(AssociateSkillGroupWithRoomResponse = exports.AssociateSkillGroupWithRoomResponse || (exports.AssociateSkillGroupWithRoomResponse = {}));
var AssociateSkillWithSkillGroupRequest;
(function (AssociateSkillWithSkillGroupRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssociateSkillWithSkillGroupRequest");
    }
    AssociateSkillWithSkillGroupRequest.isa = isa;
})(AssociateSkillWithSkillGroupRequest = exports.AssociateSkillWithSkillGroupRequest || (exports.AssociateSkillWithSkillGroupRequest = {}));
var AssociateSkillWithSkillGroupResponse;
(function (AssociateSkillWithSkillGroupResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssociateSkillWithSkillGroupResponse");
    }
    AssociateSkillWithSkillGroupResponse.isa = isa;
})(AssociateSkillWithSkillGroupResponse = exports.AssociateSkillWithSkillGroupResponse || (exports.AssociateSkillWithSkillGroupResponse = {}));
var AssociateSkillWithUsersRequest;
(function (AssociateSkillWithUsersRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssociateSkillWithUsersRequest");
    }
    AssociateSkillWithUsersRequest.isa = isa;
})(AssociateSkillWithUsersRequest = exports.AssociateSkillWithUsersRequest || (exports.AssociateSkillWithUsersRequest = {}));
var AssociateSkillWithUsersResponse;
(function (AssociateSkillWithUsersResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssociateSkillWithUsersResponse");
    }
    AssociateSkillWithUsersResponse.isa = isa;
})(AssociateSkillWithUsersResponse = exports.AssociateSkillWithUsersResponse || (exports.AssociateSkillWithUsersResponse = {}));
var BusinessReport;
(function (BusinessReport) {
    function isa(o) {
        return smithy_client_1.isa(o, "BusinessReport");
    }
    BusinessReport.isa = isa;
})(BusinessReport = exports.BusinessReport || (exports.BusinessReport = {}));
var BusinessReportContentRange;
(function (BusinessReportContentRange) {
    function isa(o) {
        return smithy_client_1.isa(o, "BusinessReportContentRange");
    }
    BusinessReportContentRange.isa = isa;
})(BusinessReportContentRange = exports.BusinessReportContentRange || (exports.BusinessReportContentRange = {}));
var BusinessReportFailureCode;
(function (BusinessReportFailureCode) {
    BusinessReportFailureCode["ACCESS_DENIED"] = "ACCESS_DENIED";
    BusinessReportFailureCode["INTERNAL_FAILURE"] = "INTERNAL_FAILURE";
    BusinessReportFailureCode["NO_SUCH_BUCKET"] = "NO_SUCH_BUCKET";
})(BusinessReportFailureCode = exports.BusinessReportFailureCode || (exports.BusinessReportFailureCode = {}));
var BusinessReportFormat;
(function (BusinessReportFormat) {
    BusinessReportFormat["CSV"] = "CSV";
    BusinessReportFormat["CSV_ZIP"] = "CSV_ZIP";
})(BusinessReportFormat = exports.BusinessReportFormat || (exports.BusinessReportFormat = {}));
var BusinessReportInterval;
(function (BusinessReportInterval) {
    BusinessReportInterval["ONE_DAY"] = "ONE_DAY";
    BusinessReportInterval["ONE_WEEK"] = "ONE_WEEK";
    BusinessReportInterval["THIRTY_DAYS"] = "THIRTY_DAYS";
})(BusinessReportInterval = exports.BusinessReportInterval || (exports.BusinessReportInterval = {}));
var BusinessReportRecurrence;
(function (BusinessReportRecurrence) {
    function isa(o) {
        return smithy_client_1.isa(o, "BusinessReportRecurrence");
    }
    BusinessReportRecurrence.isa = isa;
})(BusinessReportRecurrence = exports.BusinessReportRecurrence || (exports.BusinessReportRecurrence = {}));
var BusinessReportS3Location;
(function (BusinessReportS3Location) {
    function isa(o) {
        return smithy_client_1.isa(o, "BusinessReportS3Location");
    }
    BusinessReportS3Location.isa = isa;
})(BusinessReportS3Location = exports.BusinessReportS3Location || (exports.BusinessReportS3Location = {}));
var BusinessReportSchedule;
(function (BusinessReportSchedule) {
    function isa(o) {
        return smithy_client_1.isa(o, "BusinessReportSchedule");
    }
    BusinessReportSchedule.isa = isa;
})(BusinessReportSchedule = exports.BusinessReportSchedule || (exports.BusinessReportSchedule = {}));
var BusinessReportStatus;
(function (BusinessReportStatus) {
    BusinessReportStatus["FAILED"] = "FAILED";
    BusinessReportStatus["RUNNING"] = "RUNNING";
    BusinessReportStatus["SUCCEEDED"] = "SUCCEEDED";
})(BusinessReportStatus = exports.BusinessReportStatus || (exports.BusinessReportStatus = {}));
var Category;
(function (Category) {
    function isa(o) {
        return smithy_client_1.isa(o, "Category");
    }
    Category.isa = isa;
})(Category = exports.Category || (exports.Category = {}));
var ConferencePreference;
(function (ConferencePreference) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConferencePreference");
    }
    ConferencePreference.isa = isa;
})(ConferencePreference = exports.ConferencePreference || (exports.ConferencePreference = {}));
var ConnectionStatus;
(function (ConnectionStatus) {
    ConnectionStatus["OFFLINE"] = "OFFLINE";
    ConnectionStatus["ONLINE"] = "ONLINE";
})(ConnectionStatus = exports.ConnectionStatus || (exports.ConnectionStatus = {}));
var Contact;
(function (Contact) {
    function isa(o) {
        return smithy_client_1.isa(o, "Contact");
    }
    Contact.isa = isa;
})(Contact = exports.Contact || (exports.Contact = {}));
var ContactData;
(function (ContactData) {
    function isa(o) {
        return smithy_client_1.isa(o, "ContactData");
    }
    ContactData.isa = isa;
})(ContactData = exports.ContactData || (exports.ContactData = {}));
var CreateAddressBookRequest;
(function (CreateAddressBookRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateAddressBookRequest");
    }
    CreateAddressBookRequest.isa = isa;
})(CreateAddressBookRequest = exports.CreateAddressBookRequest || (exports.CreateAddressBookRequest = {}));
var CreateAddressBookResponse;
(function (CreateAddressBookResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateAddressBookResponse");
    }
    CreateAddressBookResponse.isa = isa;
})(CreateAddressBookResponse = exports.CreateAddressBookResponse || (exports.CreateAddressBookResponse = {}));
var CreateBusinessReportScheduleRequest;
(function (CreateBusinessReportScheduleRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateBusinessReportScheduleRequest");
    }
    CreateBusinessReportScheduleRequest.isa = isa;
})(CreateBusinessReportScheduleRequest = exports.CreateBusinessReportScheduleRequest || (exports.CreateBusinessReportScheduleRequest = {}));
var CreateBusinessReportScheduleResponse;
(function (CreateBusinessReportScheduleResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateBusinessReportScheduleResponse");
    }
    CreateBusinessReportScheduleResponse.isa = isa;
})(CreateBusinessReportScheduleResponse = exports.CreateBusinessReportScheduleResponse || (exports.CreateBusinessReportScheduleResponse = {}));
var CreateConferenceProviderRequest;
(function (CreateConferenceProviderRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateConferenceProviderRequest");
    }
    CreateConferenceProviderRequest.isa = isa;
})(CreateConferenceProviderRequest = exports.CreateConferenceProviderRequest || (exports.CreateConferenceProviderRequest = {}));
var CreateConferenceProviderResponse;
(function (CreateConferenceProviderResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateConferenceProviderResponse");
    }
    CreateConferenceProviderResponse.isa = isa;
})(CreateConferenceProviderResponse = exports.CreateConferenceProviderResponse || (exports.CreateConferenceProviderResponse = {}));
var CreateContactRequest;
(function (CreateContactRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateContactRequest");
    }
    CreateContactRequest.isa = isa;
})(CreateContactRequest = exports.CreateContactRequest || (exports.CreateContactRequest = {}));
var CreateContactResponse;
(function (CreateContactResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateContactResponse");
    }
    CreateContactResponse.isa = isa;
})(CreateContactResponse = exports.CreateContactResponse || (exports.CreateContactResponse = {}));
var CreateEndOfMeetingReminder;
(function (CreateEndOfMeetingReminder) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateEndOfMeetingReminder");
    }
    CreateEndOfMeetingReminder.isa = isa;
})(CreateEndOfMeetingReminder = exports.CreateEndOfMeetingReminder || (exports.CreateEndOfMeetingReminder = {}));
var CreateGatewayGroupRequest;
(function (CreateGatewayGroupRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateGatewayGroupRequest");
    }
    CreateGatewayGroupRequest.isa = isa;
})(CreateGatewayGroupRequest = exports.CreateGatewayGroupRequest || (exports.CreateGatewayGroupRequest = {}));
var CreateGatewayGroupResponse;
(function (CreateGatewayGroupResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateGatewayGroupResponse");
    }
    CreateGatewayGroupResponse.isa = isa;
})(CreateGatewayGroupResponse = exports.CreateGatewayGroupResponse || (exports.CreateGatewayGroupResponse = {}));
var CreateInstantBooking;
(function (CreateInstantBooking) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateInstantBooking");
    }
    CreateInstantBooking.isa = isa;
})(CreateInstantBooking = exports.CreateInstantBooking || (exports.CreateInstantBooking = {}));
var CreateMeetingRoomConfiguration;
(function (CreateMeetingRoomConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateMeetingRoomConfiguration");
    }
    CreateMeetingRoomConfiguration.isa = isa;
})(CreateMeetingRoomConfiguration = exports.CreateMeetingRoomConfiguration || (exports.CreateMeetingRoomConfiguration = {}));
var CreateNetworkProfileRequest;
(function (CreateNetworkProfileRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateNetworkProfileRequest");
    }
    CreateNetworkProfileRequest.isa = isa;
})(CreateNetworkProfileRequest = exports.CreateNetworkProfileRequest || (exports.CreateNetworkProfileRequest = {}));
var CreateNetworkProfileResponse;
(function (CreateNetworkProfileResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateNetworkProfileResponse");
    }
    CreateNetworkProfileResponse.isa = isa;
})(CreateNetworkProfileResponse = exports.CreateNetworkProfileResponse || (exports.CreateNetworkProfileResponse = {}));
var CreateProfileRequest;
(function (CreateProfileRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateProfileRequest");
    }
    CreateProfileRequest.isa = isa;
})(CreateProfileRequest = exports.CreateProfileRequest || (exports.CreateProfileRequest = {}));
var CreateProfileResponse;
(function (CreateProfileResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateProfileResponse");
    }
    CreateProfileResponse.isa = isa;
})(CreateProfileResponse = exports.CreateProfileResponse || (exports.CreateProfileResponse = {}));
var CreateRequireCheckIn;
(function (CreateRequireCheckIn) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateRequireCheckIn");
    }
    CreateRequireCheckIn.isa = isa;
})(CreateRequireCheckIn = exports.CreateRequireCheckIn || (exports.CreateRequireCheckIn = {}));
var CreateRoomRequest;
(function (CreateRoomRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateRoomRequest");
    }
    CreateRoomRequest.isa = isa;
})(CreateRoomRequest = exports.CreateRoomRequest || (exports.CreateRoomRequest = {}));
var CreateRoomResponse;
(function (CreateRoomResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateRoomResponse");
    }
    CreateRoomResponse.isa = isa;
})(CreateRoomResponse = exports.CreateRoomResponse || (exports.CreateRoomResponse = {}));
var CreateSkillGroupRequest;
(function (CreateSkillGroupRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateSkillGroupRequest");
    }
    CreateSkillGroupRequest.isa = isa;
})(CreateSkillGroupRequest = exports.CreateSkillGroupRequest || (exports.CreateSkillGroupRequest = {}));
var CreateSkillGroupResponse;
(function (CreateSkillGroupResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateSkillGroupResponse");
    }
    CreateSkillGroupResponse.isa = isa;
})(CreateSkillGroupResponse = exports.CreateSkillGroupResponse || (exports.CreateSkillGroupResponse = {}));
var CreateUserRequest;
(function (CreateUserRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateUserRequest");
    }
    CreateUserRequest.isa = isa;
})(CreateUserRequest = exports.CreateUserRequest || (exports.CreateUserRequest = {}));
var CreateUserResponse;
(function (CreateUserResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateUserResponse");
    }
    CreateUserResponse.isa = isa;
})(CreateUserResponse = exports.CreateUserResponse || (exports.CreateUserResponse = {}));
var DeleteAddressBookRequest;
(function (DeleteAddressBookRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteAddressBookRequest");
    }
    DeleteAddressBookRequest.isa = isa;
})(DeleteAddressBookRequest = exports.DeleteAddressBookRequest || (exports.DeleteAddressBookRequest = {}));
var DeleteAddressBookResponse;
(function (DeleteAddressBookResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteAddressBookResponse");
    }
    DeleteAddressBookResponse.isa = isa;
})(DeleteAddressBookResponse = exports.DeleteAddressBookResponse || (exports.DeleteAddressBookResponse = {}));
var DeleteBusinessReportScheduleRequest;
(function (DeleteBusinessReportScheduleRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteBusinessReportScheduleRequest");
    }
    DeleteBusinessReportScheduleRequest.isa = isa;
})(DeleteBusinessReportScheduleRequest = exports.DeleteBusinessReportScheduleRequest || (exports.DeleteBusinessReportScheduleRequest = {}));
var DeleteBusinessReportScheduleResponse;
(function (DeleteBusinessReportScheduleResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteBusinessReportScheduleResponse");
    }
    DeleteBusinessReportScheduleResponse.isa = isa;
})(DeleteBusinessReportScheduleResponse = exports.DeleteBusinessReportScheduleResponse || (exports.DeleteBusinessReportScheduleResponse = {}));
var DeleteConferenceProviderRequest;
(function (DeleteConferenceProviderRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteConferenceProviderRequest");
    }
    DeleteConferenceProviderRequest.isa = isa;
})(DeleteConferenceProviderRequest = exports.DeleteConferenceProviderRequest || (exports.DeleteConferenceProviderRequest = {}));
var DeleteConferenceProviderResponse;
(function (DeleteConferenceProviderResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteConferenceProviderResponse");
    }
    DeleteConferenceProviderResponse.isa = isa;
})(DeleteConferenceProviderResponse = exports.DeleteConferenceProviderResponse || (exports.DeleteConferenceProviderResponse = {}));
var DeleteContactRequest;
(function (DeleteContactRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteContactRequest");
    }
    DeleteContactRequest.isa = isa;
})(DeleteContactRequest = exports.DeleteContactRequest || (exports.DeleteContactRequest = {}));
var DeleteContactResponse;
(function (DeleteContactResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteContactResponse");
    }
    DeleteContactResponse.isa = isa;
})(DeleteContactResponse = exports.DeleteContactResponse || (exports.DeleteContactResponse = {}));
var DeleteDeviceRequest;
(function (DeleteDeviceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteDeviceRequest");
    }
    DeleteDeviceRequest.isa = isa;
})(DeleteDeviceRequest = exports.DeleteDeviceRequest || (exports.DeleteDeviceRequest = {}));
var DeleteDeviceResponse;
(function (DeleteDeviceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteDeviceResponse");
    }
    DeleteDeviceResponse.isa = isa;
})(DeleteDeviceResponse = exports.DeleteDeviceResponse || (exports.DeleteDeviceResponse = {}));
var DeleteGatewayGroupRequest;
(function (DeleteGatewayGroupRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteGatewayGroupRequest");
    }
    DeleteGatewayGroupRequest.isa = isa;
})(DeleteGatewayGroupRequest = exports.DeleteGatewayGroupRequest || (exports.DeleteGatewayGroupRequest = {}));
var DeleteGatewayGroupResponse;
(function (DeleteGatewayGroupResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteGatewayGroupResponse");
    }
    DeleteGatewayGroupResponse.isa = isa;
})(DeleteGatewayGroupResponse = exports.DeleteGatewayGroupResponse || (exports.DeleteGatewayGroupResponse = {}));
var DeleteNetworkProfileRequest;
(function (DeleteNetworkProfileRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteNetworkProfileRequest");
    }
    DeleteNetworkProfileRequest.isa = isa;
})(DeleteNetworkProfileRequest = exports.DeleteNetworkProfileRequest || (exports.DeleteNetworkProfileRequest = {}));
var DeleteNetworkProfileResponse;
(function (DeleteNetworkProfileResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteNetworkProfileResponse");
    }
    DeleteNetworkProfileResponse.isa = isa;
})(DeleteNetworkProfileResponse = exports.DeleteNetworkProfileResponse || (exports.DeleteNetworkProfileResponse = {}));
var DeleteProfileRequest;
(function (DeleteProfileRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteProfileRequest");
    }
    DeleteProfileRequest.isa = isa;
})(DeleteProfileRequest = exports.DeleteProfileRequest || (exports.DeleteProfileRequest = {}));
var DeleteProfileResponse;
(function (DeleteProfileResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteProfileResponse");
    }
    DeleteProfileResponse.isa = isa;
})(DeleteProfileResponse = exports.DeleteProfileResponse || (exports.DeleteProfileResponse = {}));
var DeleteRoomRequest;
(function (DeleteRoomRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteRoomRequest");
    }
    DeleteRoomRequest.isa = isa;
})(DeleteRoomRequest = exports.DeleteRoomRequest || (exports.DeleteRoomRequest = {}));
var DeleteRoomResponse;
(function (DeleteRoomResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteRoomResponse");
    }
    DeleteRoomResponse.isa = isa;
})(DeleteRoomResponse = exports.DeleteRoomResponse || (exports.DeleteRoomResponse = {}));
var DeleteRoomSkillParameterRequest;
(function (DeleteRoomSkillParameterRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteRoomSkillParameterRequest");
    }
    DeleteRoomSkillParameterRequest.isa = isa;
})(DeleteRoomSkillParameterRequest = exports.DeleteRoomSkillParameterRequest || (exports.DeleteRoomSkillParameterRequest = {}));
var DeleteRoomSkillParameterResponse;
(function (DeleteRoomSkillParameterResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteRoomSkillParameterResponse");
    }
    DeleteRoomSkillParameterResponse.isa = isa;
})(DeleteRoomSkillParameterResponse = exports.DeleteRoomSkillParameterResponse || (exports.DeleteRoomSkillParameterResponse = {}));
var DeleteSkillAuthorizationRequest;
(function (DeleteSkillAuthorizationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteSkillAuthorizationRequest");
    }
    DeleteSkillAuthorizationRequest.isa = isa;
})(DeleteSkillAuthorizationRequest = exports.DeleteSkillAuthorizationRequest || (exports.DeleteSkillAuthorizationRequest = {}));
var DeleteSkillAuthorizationResponse;
(function (DeleteSkillAuthorizationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteSkillAuthorizationResponse");
    }
    DeleteSkillAuthorizationResponse.isa = isa;
})(DeleteSkillAuthorizationResponse = exports.DeleteSkillAuthorizationResponse || (exports.DeleteSkillAuthorizationResponse = {}));
var DeleteSkillGroupRequest;
(function (DeleteSkillGroupRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteSkillGroupRequest");
    }
    DeleteSkillGroupRequest.isa = isa;
})(DeleteSkillGroupRequest = exports.DeleteSkillGroupRequest || (exports.DeleteSkillGroupRequest = {}));
var DeleteSkillGroupResponse;
(function (DeleteSkillGroupResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteSkillGroupResponse");
    }
    DeleteSkillGroupResponse.isa = isa;
})(DeleteSkillGroupResponse = exports.DeleteSkillGroupResponse || (exports.DeleteSkillGroupResponse = {}));
var DeleteUserRequest;
(function (DeleteUserRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteUserRequest");
    }
    DeleteUserRequest.isa = isa;
})(DeleteUserRequest = exports.DeleteUserRequest || (exports.DeleteUserRequest = {}));
var DeleteUserResponse;
(function (DeleteUserResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteUserResponse");
    }
    DeleteUserResponse.isa = isa;
})(DeleteUserResponse = exports.DeleteUserResponse || (exports.DeleteUserResponse = {}));
var DeveloperInfo;
(function (DeveloperInfo) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeveloperInfo");
    }
    DeveloperInfo.isa = isa;
})(DeveloperInfo = exports.DeveloperInfo || (exports.DeveloperInfo = {}));
var Device;
(function (Device) {
    function isa(o) {
        return smithy_client_1.isa(o, "Device");
    }
    Device.isa = isa;
})(Device = exports.Device || (exports.Device = {}));
var DeviceData;
(function (DeviceData) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeviceData");
    }
    DeviceData.isa = isa;
})(DeviceData = exports.DeviceData || (exports.DeviceData = {}));
var DeviceEvent;
(function (DeviceEvent) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeviceEvent");
    }
    DeviceEvent.isa = isa;
})(DeviceEvent = exports.DeviceEvent || (exports.DeviceEvent = {}));
var DeviceEventType;
(function (DeviceEventType) {
    DeviceEventType["CONNECTION_STATUS"] = "CONNECTION_STATUS";
    DeviceEventType["DEVICE_STATUS"] = "DEVICE_STATUS";
})(DeviceEventType = exports.DeviceEventType || (exports.DeviceEventType = {}));
var DeviceNetworkProfileInfo;
(function (DeviceNetworkProfileInfo) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeviceNetworkProfileInfo");
    }
    DeviceNetworkProfileInfo.isa = isa;
})(DeviceNetworkProfileInfo = exports.DeviceNetworkProfileInfo || (exports.DeviceNetworkProfileInfo = {}));
var DeviceStatus;
(function (DeviceStatus) {
    DeviceStatus["DEREGISTERED"] = "DEREGISTERED";
    DeviceStatus["FAILED"] = "FAILED";
    DeviceStatus["PENDING"] = "PENDING";
    DeviceStatus["READY"] = "READY";
    DeviceStatus["WAS_OFFLINE"] = "WAS_OFFLINE";
})(DeviceStatus = exports.DeviceStatus || (exports.DeviceStatus = {}));
var DeviceStatusDetail;
(function (DeviceStatusDetail) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeviceStatusDetail");
    }
    DeviceStatusDetail.isa = isa;
})(DeviceStatusDetail = exports.DeviceStatusDetail || (exports.DeviceStatusDetail = {}));
var DeviceStatusDetailCode;
(function (DeviceStatusDetailCode) {
    DeviceStatusDetailCode["ASSOCIATION_REJECTION"] = "ASSOCIATION_REJECTION";
    DeviceStatusDetailCode["AUTHENTICATION_FAILURE"] = "AUTHENTICATION_FAILURE";
    DeviceStatusDetailCode["CERTIFICATE_ISSUING_LIMIT_EXCEEDED"] = "CERTIFICATE_ISSUING_LIMIT_EXCEEDED";
    DeviceStatusDetailCode["CREDENTIALS_ACCESS_FAILURE"] = "CREDENTIALS_ACCESS_FAILURE";
    DeviceStatusDetailCode["DEVICE_SOFTWARE_UPDATE_NEEDED"] = "DEVICE_SOFTWARE_UPDATE_NEEDED";
    DeviceStatusDetailCode["DEVICE_WAS_OFFLINE"] = "DEVICE_WAS_OFFLINE";
    DeviceStatusDetailCode["DHCP_FAILURE"] = "DHCP_FAILURE";
    DeviceStatusDetailCode["DNS_FAILURE"] = "DNS_FAILURE";
    DeviceStatusDetailCode["INTERNET_UNAVAILABLE"] = "INTERNET_UNAVAILABLE";
    DeviceStatusDetailCode["INVALID_CERTIFICATE_AUTHORITY"] = "INVALID_CERTIFICATE_AUTHORITY";
    DeviceStatusDetailCode["INVALID_PASSWORD_STATE"] = "INVALID_PASSWORD_STATE";
    DeviceStatusDetailCode["NETWORK_PROFILE_NOT_FOUND"] = "NETWORK_PROFILE_NOT_FOUND";
    DeviceStatusDetailCode["PASSWORD_NOT_FOUND"] = "PASSWORD_NOT_FOUND";
    DeviceStatusDetailCode["TLS_VERSION_MISMATCH"] = "TLS_VERSION_MISMATCH";
    DeviceStatusDetailCode["UNKNOWN_FAILURE"] = "UNKNOWN_FAILURE";
})(DeviceStatusDetailCode = exports.DeviceStatusDetailCode || (exports.DeviceStatusDetailCode = {}));
var DeviceStatusInfo;
(function (DeviceStatusInfo) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeviceStatusInfo");
    }
    DeviceStatusInfo.isa = isa;
})(DeviceStatusInfo = exports.DeviceStatusInfo || (exports.DeviceStatusInfo = {}));
var DisassociateContactFromAddressBookRequest;
(function (DisassociateContactFromAddressBookRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DisassociateContactFromAddressBookRequest");
    }
    DisassociateContactFromAddressBookRequest.isa = isa;
})(DisassociateContactFromAddressBookRequest = exports.DisassociateContactFromAddressBookRequest || (exports.DisassociateContactFromAddressBookRequest = {}));
var DisassociateContactFromAddressBookResponse;
(function (DisassociateContactFromAddressBookResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DisassociateContactFromAddressBookResponse");
    }
    DisassociateContactFromAddressBookResponse.isa = isa;
})(DisassociateContactFromAddressBookResponse = exports.DisassociateContactFromAddressBookResponse || (exports.DisassociateContactFromAddressBookResponse = {}));
var DisassociateDeviceFromRoomRequest;
(function (DisassociateDeviceFromRoomRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DisassociateDeviceFromRoomRequest");
    }
    DisassociateDeviceFromRoomRequest.isa = isa;
})(DisassociateDeviceFromRoomRequest = exports.DisassociateDeviceFromRoomRequest || (exports.DisassociateDeviceFromRoomRequest = {}));
var DisassociateDeviceFromRoomResponse;
(function (DisassociateDeviceFromRoomResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DisassociateDeviceFromRoomResponse");
    }
    DisassociateDeviceFromRoomResponse.isa = isa;
})(DisassociateDeviceFromRoomResponse = exports.DisassociateDeviceFromRoomResponse || (exports.DisassociateDeviceFromRoomResponse = {}));
var DisassociateSkillFromSkillGroupRequest;
(function (DisassociateSkillFromSkillGroupRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DisassociateSkillFromSkillGroupRequest");
    }
    DisassociateSkillFromSkillGroupRequest.isa = isa;
})(DisassociateSkillFromSkillGroupRequest = exports.DisassociateSkillFromSkillGroupRequest || (exports.DisassociateSkillFromSkillGroupRequest = {}));
var DisassociateSkillFromSkillGroupResponse;
(function (DisassociateSkillFromSkillGroupResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DisassociateSkillFromSkillGroupResponse");
    }
    DisassociateSkillFromSkillGroupResponse.isa = isa;
})(DisassociateSkillFromSkillGroupResponse = exports.DisassociateSkillFromSkillGroupResponse || (exports.DisassociateSkillFromSkillGroupResponse = {}));
var DisassociateSkillFromUsersRequest;
(function (DisassociateSkillFromUsersRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DisassociateSkillFromUsersRequest");
    }
    DisassociateSkillFromUsersRequest.isa = isa;
})(DisassociateSkillFromUsersRequest = exports.DisassociateSkillFromUsersRequest || (exports.DisassociateSkillFromUsersRequest = {}));
var DisassociateSkillFromUsersResponse;
(function (DisassociateSkillFromUsersResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DisassociateSkillFromUsersResponse");
    }
    DisassociateSkillFromUsersResponse.isa = isa;
})(DisassociateSkillFromUsersResponse = exports.DisassociateSkillFromUsersResponse || (exports.DisassociateSkillFromUsersResponse = {}));
var DisassociateSkillGroupFromRoomRequest;
(function (DisassociateSkillGroupFromRoomRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DisassociateSkillGroupFromRoomRequest");
    }
    DisassociateSkillGroupFromRoomRequest.isa = isa;
})(DisassociateSkillGroupFromRoomRequest = exports.DisassociateSkillGroupFromRoomRequest || (exports.DisassociateSkillGroupFromRoomRequest = {}));
var DisassociateSkillGroupFromRoomResponse;
(function (DisassociateSkillGroupFromRoomResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DisassociateSkillGroupFromRoomResponse");
    }
    DisassociateSkillGroupFromRoomResponse.isa = isa;
})(DisassociateSkillGroupFromRoomResponse = exports.DisassociateSkillGroupFromRoomResponse || (exports.DisassociateSkillGroupFromRoomResponse = {}));
var DistanceUnit;
(function (DistanceUnit) {
    DistanceUnit["IMPERIAL"] = "IMPERIAL";
    DistanceUnit["METRIC"] = "METRIC";
})(DistanceUnit = exports.DistanceUnit || (exports.DistanceUnit = {}));
var EnablementType;
(function (EnablementType) {
    EnablementType["ENABLED"] = "ENABLED";
    EnablementType["PENDING"] = "PENDING";
})(EnablementType = exports.EnablementType || (exports.EnablementType = {}));
var EnablementTypeFilter;
(function (EnablementTypeFilter) {
    EnablementTypeFilter["ENABLED"] = "ENABLED";
    EnablementTypeFilter["PENDING"] = "PENDING";
})(EnablementTypeFilter = exports.EnablementTypeFilter || (exports.EnablementTypeFilter = {}));
var EndOfMeetingReminder;
(function (EndOfMeetingReminder) {
    function isa(o) {
        return smithy_client_1.isa(o, "EndOfMeetingReminder");
    }
    EndOfMeetingReminder.isa = isa;
})(EndOfMeetingReminder = exports.EndOfMeetingReminder || (exports.EndOfMeetingReminder = {}));
var EndOfMeetingReminderType;
(function (EndOfMeetingReminderType) {
    EndOfMeetingReminderType["ANNOUNCEMENT_TIME_CHECK"] = "ANNOUNCEMENT_TIME_CHECK";
    EndOfMeetingReminderType["ANNOUNCEMENT_VARIABLE_TIME_LEFT"] = "ANNOUNCEMENT_VARIABLE_TIME_LEFT";
    EndOfMeetingReminderType["CHIME"] = "CHIME";
    EndOfMeetingReminderType["KNOCK"] = "KNOCK";
})(EndOfMeetingReminderType = exports.EndOfMeetingReminderType || (exports.EndOfMeetingReminderType = {}));
var EnrollmentStatus;
(function (EnrollmentStatus) {
    EnrollmentStatus["DEREGISTERING"] = "DEREGISTERING";
    EnrollmentStatus["DISASSOCIATING"] = "DISASSOCIATING";
    EnrollmentStatus["INITIALIZED"] = "INITIALIZED";
    EnrollmentStatus["PENDING"] = "PENDING";
    EnrollmentStatus["REGISTERED"] = "REGISTERED";
})(EnrollmentStatus = exports.EnrollmentStatus || (exports.EnrollmentStatus = {}));
var Feature;
(function (Feature) {
    Feature["ALL"] = "ALL";
    Feature["BLUETOOTH"] = "BLUETOOTH";
    Feature["LISTS"] = "LISTS";
    Feature["NETWORK_PROFILE"] = "NETWORK_PROFILE";
    Feature["NOTIFICATIONS"] = "NOTIFICATIONS";
    Feature["SETTINGS"] = "SETTINGS";
    Feature["SKILLS"] = "SKILLS";
    Feature["VOLUME"] = "VOLUME";
})(Feature = exports.Feature || (exports.Feature = {}));
var ForgetSmartHomeAppliancesRequest;
(function (ForgetSmartHomeAppliancesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ForgetSmartHomeAppliancesRequest");
    }
    ForgetSmartHomeAppliancesRequest.isa = isa;
})(ForgetSmartHomeAppliancesRequest = exports.ForgetSmartHomeAppliancesRequest || (exports.ForgetSmartHomeAppliancesRequest = {}));
var ForgetSmartHomeAppliancesResponse;
(function (ForgetSmartHomeAppliancesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ForgetSmartHomeAppliancesResponse");
    }
    ForgetSmartHomeAppliancesResponse.isa = isa;
})(ForgetSmartHomeAppliancesResponse = exports.ForgetSmartHomeAppliancesResponse || (exports.ForgetSmartHomeAppliancesResponse = {}));
var Gateway;
(function (Gateway) {
    function isa(o) {
        return smithy_client_1.isa(o, "Gateway");
    }
    Gateway.isa = isa;
})(Gateway = exports.Gateway || (exports.Gateway = {}));
var GatewayGroup;
(function (GatewayGroup) {
    function isa(o) {
        return smithy_client_1.isa(o, "GatewayGroup");
    }
    GatewayGroup.isa = isa;
})(GatewayGroup = exports.GatewayGroup || (exports.GatewayGroup = {}));
var GatewayGroupSummary;
(function (GatewayGroupSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "GatewayGroupSummary");
    }
    GatewayGroupSummary.isa = isa;
})(GatewayGroupSummary = exports.GatewayGroupSummary || (exports.GatewayGroupSummary = {}));
var GatewaySummary;
(function (GatewaySummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "GatewaySummary");
    }
    GatewaySummary.isa = isa;
})(GatewaySummary = exports.GatewaySummary || (exports.GatewaySummary = {}));
var GetAddressBookRequest;
(function (GetAddressBookRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetAddressBookRequest");
    }
    GetAddressBookRequest.isa = isa;
})(GetAddressBookRequest = exports.GetAddressBookRequest || (exports.GetAddressBookRequest = {}));
var GetAddressBookResponse;
(function (GetAddressBookResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetAddressBookResponse");
    }
    GetAddressBookResponse.isa = isa;
})(GetAddressBookResponse = exports.GetAddressBookResponse || (exports.GetAddressBookResponse = {}));
var GetConferencePreferenceRequest;
(function (GetConferencePreferenceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetConferencePreferenceRequest");
    }
    GetConferencePreferenceRequest.isa = isa;
})(GetConferencePreferenceRequest = exports.GetConferencePreferenceRequest || (exports.GetConferencePreferenceRequest = {}));
var GetConferencePreferenceResponse;
(function (GetConferencePreferenceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetConferencePreferenceResponse");
    }
    GetConferencePreferenceResponse.isa = isa;
})(GetConferencePreferenceResponse = exports.GetConferencePreferenceResponse || (exports.GetConferencePreferenceResponse = {}));
var GetConferenceProviderRequest;
(function (GetConferenceProviderRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetConferenceProviderRequest");
    }
    GetConferenceProviderRequest.isa = isa;
})(GetConferenceProviderRequest = exports.GetConferenceProviderRequest || (exports.GetConferenceProviderRequest = {}));
var GetConferenceProviderResponse;
(function (GetConferenceProviderResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetConferenceProviderResponse");
    }
    GetConferenceProviderResponse.isa = isa;
})(GetConferenceProviderResponse = exports.GetConferenceProviderResponse || (exports.GetConferenceProviderResponse = {}));
var GetContactRequest;
(function (GetContactRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetContactRequest");
    }
    GetContactRequest.isa = isa;
})(GetContactRequest = exports.GetContactRequest || (exports.GetContactRequest = {}));
var GetContactResponse;
(function (GetContactResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetContactResponse");
    }
    GetContactResponse.isa = isa;
})(GetContactResponse = exports.GetContactResponse || (exports.GetContactResponse = {}));
var GetDeviceRequest;
(function (GetDeviceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDeviceRequest");
    }
    GetDeviceRequest.isa = isa;
})(GetDeviceRequest = exports.GetDeviceRequest || (exports.GetDeviceRequest = {}));
var GetDeviceResponse;
(function (GetDeviceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDeviceResponse");
    }
    GetDeviceResponse.isa = isa;
})(GetDeviceResponse = exports.GetDeviceResponse || (exports.GetDeviceResponse = {}));
var GetGatewayGroupRequest;
(function (GetGatewayGroupRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetGatewayGroupRequest");
    }
    GetGatewayGroupRequest.isa = isa;
})(GetGatewayGroupRequest = exports.GetGatewayGroupRequest || (exports.GetGatewayGroupRequest = {}));
var GetGatewayGroupResponse;
(function (GetGatewayGroupResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetGatewayGroupResponse");
    }
    GetGatewayGroupResponse.isa = isa;
})(GetGatewayGroupResponse = exports.GetGatewayGroupResponse || (exports.GetGatewayGroupResponse = {}));
var GetGatewayRequest;
(function (GetGatewayRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetGatewayRequest");
    }
    GetGatewayRequest.isa = isa;
})(GetGatewayRequest = exports.GetGatewayRequest || (exports.GetGatewayRequest = {}));
var GetGatewayResponse;
(function (GetGatewayResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetGatewayResponse");
    }
    GetGatewayResponse.isa = isa;
})(GetGatewayResponse = exports.GetGatewayResponse || (exports.GetGatewayResponse = {}));
var GetInvitationConfigurationRequest;
(function (GetInvitationConfigurationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetInvitationConfigurationRequest");
    }
    GetInvitationConfigurationRequest.isa = isa;
})(GetInvitationConfigurationRequest = exports.GetInvitationConfigurationRequest || (exports.GetInvitationConfigurationRequest = {}));
var GetInvitationConfigurationResponse;
(function (GetInvitationConfigurationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetInvitationConfigurationResponse");
    }
    GetInvitationConfigurationResponse.isa = isa;
})(GetInvitationConfigurationResponse = exports.GetInvitationConfigurationResponse || (exports.GetInvitationConfigurationResponse = {}));
var GetNetworkProfileRequest;
(function (GetNetworkProfileRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetNetworkProfileRequest");
    }
    GetNetworkProfileRequest.isa = isa;
})(GetNetworkProfileRequest = exports.GetNetworkProfileRequest || (exports.GetNetworkProfileRequest = {}));
var GetNetworkProfileResponse;
(function (GetNetworkProfileResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetNetworkProfileResponse");
    }
    GetNetworkProfileResponse.isa = isa;
})(GetNetworkProfileResponse = exports.GetNetworkProfileResponse || (exports.GetNetworkProfileResponse = {}));
var GetProfileRequest;
(function (GetProfileRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetProfileRequest");
    }
    GetProfileRequest.isa = isa;
})(GetProfileRequest = exports.GetProfileRequest || (exports.GetProfileRequest = {}));
var GetProfileResponse;
(function (GetProfileResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetProfileResponse");
    }
    GetProfileResponse.isa = isa;
})(GetProfileResponse = exports.GetProfileResponse || (exports.GetProfileResponse = {}));
var GetRoomRequest;
(function (GetRoomRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetRoomRequest");
    }
    GetRoomRequest.isa = isa;
})(GetRoomRequest = exports.GetRoomRequest || (exports.GetRoomRequest = {}));
var GetRoomResponse;
(function (GetRoomResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetRoomResponse");
    }
    GetRoomResponse.isa = isa;
})(GetRoomResponse = exports.GetRoomResponse || (exports.GetRoomResponse = {}));
var GetRoomSkillParameterRequest;
(function (GetRoomSkillParameterRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetRoomSkillParameterRequest");
    }
    GetRoomSkillParameterRequest.isa = isa;
})(GetRoomSkillParameterRequest = exports.GetRoomSkillParameterRequest || (exports.GetRoomSkillParameterRequest = {}));
var GetRoomSkillParameterResponse;
(function (GetRoomSkillParameterResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetRoomSkillParameterResponse");
    }
    GetRoomSkillParameterResponse.isa = isa;
})(GetRoomSkillParameterResponse = exports.GetRoomSkillParameterResponse || (exports.GetRoomSkillParameterResponse = {}));
var GetSkillGroupRequest;
(function (GetSkillGroupRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetSkillGroupRequest");
    }
    GetSkillGroupRequest.isa = isa;
})(GetSkillGroupRequest = exports.GetSkillGroupRequest || (exports.GetSkillGroupRequest = {}));
var GetSkillGroupResponse;
(function (GetSkillGroupResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetSkillGroupResponse");
    }
    GetSkillGroupResponse.isa = isa;
})(GetSkillGroupResponse = exports.GetSkillGroupResponse || (exports.GetSkillGroupResponse = {}));
var InstantBooking;
(function (InstantBooking) {
    function isa(o) {
        return smithy_client_1.isa(o, "InstantBooking");
    }
    InstantBooking.isa = isa;
})(InstantBooking = exports.InstantBooking || (exports.InstantBooking = {}));
var InvalidCertificateAuthorityException;
(function (InvalidCertificateAuthorityException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidCertificateAuthorityException");
    }
    InvalidCertificateAuthorityException.isa = isa;
})(InvalidCertificateAuthorityException = exports.InvalidCertificateAuthorityException || (exports.InvalidCertificateAuthorityException = {}));
var InvalidDeviceException;
(function (InvalidDeviceException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidDeviceException");
    }
    InvalidDeviceException.isa = isa;
})(InvalidDeviceException = exports.InvalidDeviceException || (exports.InvalidDeviceException = {}));
var InvalidSecretsManagerResourceException;
(function (InvalidSecretsManagerResourceException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidSecretsManagerResourceException");
    }
    InvalidSecretsManagerResourceException.isa = isa;
})(InvalidSecretsManagerResourceException = exports.InvalidSecretsManagerResourceException || (exports.InvalidSecretsManagerResourceException = {}));
var InvalidServiceLinkedRoleStateException;
(function (InvalidServiceLinkedRoleStateException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidServiceLinkedRoleStateException");
    }
    InvalidServiceLinkedRoleStateException.isa = isa;
})(InvalidServiceLinkedRoleStateException = exports.InvalidServiceLinkedRoleStateException || (exports.InvalidServiceLinkedRoleStateException = {}));
var InvalidUserStatusException;
(function (InvalidUserStatusException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidUserStatusException");
    }
    InvalidUserStatusException.isa = isa;
})(InvalidUserStatusException = exports.InvalidUserStatusException || (exports.InvalidUserStatusException = {}));
var ListBusinessReportSchedulesRequest;
(function (ListBusinessReportSchedulesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListBusinessReportSchedulesRequest");
    }
    ListBusinessReportSchedulesRequest.isa = isa;
})(ListBusinessReportSchedulesRequest = exports.ListBusinessReportSchedulesRequest || (exports.ListBusinessReportSchedulesRequest = {}));
var ListBusinessReportSchedulesResponse;
(function (ListBusinessReportSchedulesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListBusinessReportSchedulesResponse");
    }
    ListBusinessReportSchedulesResponse.isa = isa;
})(ListBusinessReportSchedulesResponse = exports.ListBusinessReportSchedulesResponse || (exports.ListBusinessReportSchedulesResponse = {}));
var ListConferenceProvidersRequest;
(function (ListConferenceProvidersRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListConferenceProvidersRequest");
    }
    ListConferenceProvidersRequest.isa = isa;
})(ListConferenceProvidersRequest = exports.ListConferenceProvidersRequest || (exports.ListConferenceProvidersRequest = {}));
var ListConferenceProvidersResponse;
(function (ListConferenceProvidersResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListConferenceProvidersResponse");
    }
    ListConferenceProvidersResponse.isa = isa;
})(ListConferenceProvidersResponse = exports.ListConferenceProvidersResponse || (exports.ListConferenceProvidersResponse = {}));
var ListDeviceEventsRequest;
(function (ListDeviceEventsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListDeviceEventsRequest");
    }
    ListDeviceEventsRequest.isa = isa;
})(ListDeviceEventsRequest = exports.ListDeviceEventsRequest || (exports.ListDeviceEventsRequest = {}));
var ListDeviceEventsResponse;
(function (ListDeviceEventsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListDeviceEventsResponse");
    }
    ListDeviceEventsResponse.isa = isa;
})(ListDeviceEventsResponse = exports.ListDeviceEventsResponse || (exports.ListDeviceEventsResponse = {}));
var ListGatewayGroupsRequest;
(function (ListGatewayGroupsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListGatewayGroupsRequest");
    }
    ListGatewayGroupsRequest.isa = isa;
})(ListGatewayGroupsRequest = exports.ListGatewayGroupsRequest || (exports.ListGatewayGroupsRequest = {}));
var ListGatewayGroupsResponse;
(function (ListGatewayGroupsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListGatewayGroupsResponse");
    }
    ListGatewayGroupsResponse.isa = isa;
})(ListGatewayGroupsResponse = exports.ListGatewayGroupsResponse || (exports.ListGatewayGroupsResponse = {}));
var ListGatewaysRequest;
(function (ListGatewaysRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListGatewaysRequest");
    }
    ListGatewaysRequest.isa = isa;
})(ListGatewaysRequest = exports.ListGatewaysRequest || (exports.ListGatewaysRequest = {}));
var ListGatewaysResponse;
(function (ListGatewaysResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListGatewaysResponse");
    }
    ListGatewaysResponse.isa = isa;
})(ListGatewaysResponse = exports.ListGatewaysResponse || (exports.ListGatewaysResponse = {}));
var ListSkillsRequest;
(function (ListSkillsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListSkillsRequest");
    }
    ListSkillsRequest.isa = isa;
})(ListSkillsRequest = exports.ListSkillsRequest || (exports.ListSkillsRequest = {}));
var ListSkillsResponse;
(function (ListSkillsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListSkillsResponse");
    }
    ListSkillsResponse.isa = isa;
})(ListSkillsResponse = exports.ListSkillsResponse || (exports.ListSkillsResponse = {}));
var ListSkillsStoreCategoriesRequest;
(function (ListSkillsStoreCategoriesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListSkillsStoreCategoriesRequest");
    }
    ListSkillsStoreCategoriesRequest.isa = isa;
})(ListSkillsStoreCategoriesRequest = exports.ListSkillsStoreCategoriesRequest || (exports.ListSkillsStoreCategoriesRequest = {}));
var ListSkillsStoreCategoriesResponse;
(function (ListSkillsStoreCategoriesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListSkillsStoreCategoriesResponse");
    }
    ListSkillsStoreCategoriesResponse.isa = isa;
})(ListSkillsStoreCategoriesResponse = exports.ListSkillsStoreCategoriesResponse || (exports.ListSkillsStoreCategoriesResponse = {}));
var ListSkillsStoreSkillsByCategoryRequest;
(function (ListSkillsStoreSkillsByCategoryRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListSkillsStoreSkillsByCategoryRequest");
    }
    ListSkillsStoreSkillsByCategoryRequest.isa = isa;
})(ListSkillsStoreSkillsByCategoryRequest = exports.ListSkillsStoreSkillsByCategoryRequest || (exports.ListSkillsStoreSkillsByCategoryRequest = {}));
var ListSkillsStoreSkillsByCategoryResponse;
(function (ListSkillsStoreSkillsByCategoryResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListSkillsStoreSkillsByCategoryResponse");
    }
    ListSkillsStoreSkillsByCategoryResponse.isa = isa;
})(ListSkillsStoreSkillsByCategoryResponse = exports.ListSkillsStoreSkillsByCategoryResponse || (exports.ListSkillsStoreSkillsByCategoryResponse = {}));
var ListSmartHomeAppliancesRequest;
(function (ListSmartHomeAppliancesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListSmartHomeAppliancesRequest");
    }
    ListSmartHomeAppliancesRequest.isa = isa;
})(ListSmartHomeAppliancesRequest = exports.ListSmartHomeAppliancesRequest || (exports.ListSmartHomeAppliancesRequest = {}));
var ListSmartHomeAppliancesResponse;
(function (ListSmartHomeAppliancesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListSmartHomeAppliancesResponse");
    }
    ListSmartHomeAppliancesResponse.isa = isa;
})(ListSmartHomeAppliancesResponse = exports.ListSmartHomeAppliancesResponse || (exports.ListSmartHomeAppliancesResponse = {}));
var ListTagsRequest;
(function (ListTagsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTagsRequest");
    }
    ListTagsRequest.isa = isa;
})(ListTagsRequest = exports.ListTagsRequest || (exports.ListTagsRequest = {}));
var ListTagsResponse;
(function (ListTagsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTagsResponse");
    }
    ListTagsResponse.isa = isa;
})(ListTagsResponse = exports.ListTagsResponse || (exports.ListTagsResponse = {}));
var MeetingRoomConfiguration;
(function (MeetingRoomConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "MeetingRoomConfiguration");
    }
    MeetingRoomConfiguration.isa = isa;
})(MeetingRoomConfiguration = exports.MeetingRoomConfiguration || (exports.MeetingRoomConfiguration = {}));
var NetworkEapMethod;
(function (NetworkEapMethod) {
    NetworkEapMethod["EAP_TLS"] = "EAP_TLS";
})(NetworkEapMethod = exports.NetworkEapMethod || (exports.NetworkEapMethod = {}));
var NetworkProfile;
(function (NetworkProfile) {
    function isa(o) {
        return smithy_client_1.isa(o, "NetworkProfile");
    }
    NetworkProfile.isa = isa;
})(NetworkProfile = exports.NetworkProfile || (exports.NetworkProfile = {}));
var NetworkProfileData;
(function (NetworkProfileData) {
    function isa(o) {
        return smithy_client_1.isa(o, "NetworkProfileData");
    }
    NetworkProfileData.isa = isa;
})(NetworkProfileData = exports.NetworkProfileData || (exports.NetworkProfileData = {}));
var NetworkSecurityType;
(function (NetworkSecurityType) {
    NetworkSecurityType["OPEN"] = "OPEN";
    NetworkSecurityType["WEP"] = "WEP";
    NetworkSecurityType["WPA2_ENTERPRISE"] = "WPA2_ENTERPRISE";
    NetworkSecurityType["WPA2_PSK"] = "WPA2_PSK";
    NetworkSecurityType["WPA_PSK"] = "WPA_PSK";
})(NetworkSecurityType = exports.NetworkSecurityType || (exports.NetworkSecurityType = {}));
var PhoneNumber;
(function (PhoneNumber) {
    function isa(o) {
        return smithy_client_1.isa(o, "PhoneNumber");
    }
    PhoneNumber.isa = isa;
})(PhoneNumber = exports.PhoneNumber || (exports.PhoneNumber = {}));
var PhoneNumberType;
(function (PhoneNumberType) {
    PhoneNumberType["HOME"] = "HOME";
    PhoneNumberType["MOBILE"] = "MOBILE";
    PhoneNumberType["WORK"] = "WORK";
})(PhoneNumberType = exports.PhoneNumberType || (exports.PhoneNumberType = {}));
var Profile;
(function (Profile) {
    function isa(o) {
        return smithy_client_1.isa(o, "Profile");
    }
    Profile.isa = isa;
})(Profile = exports.Profile || (exports.Profile = {}));
var ProfileData;
(function (ProfileData) {
    function isa(o) {
        return smithy_client_1.isa(o, "ProfileData");
    }
    ProfileData.isa = isa;
})(ProfileData = exports.ProfileData || (exports.ProfileData = {}));
var PutConferencePreferenceRequest;
(function (PutConferencePreferenceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutConferencePreferenceRequest");
    }
    PutConferencePreferenceRequest.isa = isa;
})(PutConferencePreferenceRequest = exports.PutConferencePreferenceRequest || (exports.PutConferencePreferenceRequest = {}));
var PutConferencePreferenceResponse;
(function (PutConferencePreferenceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutConferencePreferenceResponse");
    }
    PutConferencePreferenceResponse.isa = isa;
})(PutConferencePreferenceResponse = exports.PutConferencePreferenceResponse || (exports.PutConferencePreferenceResponse = {}));
var PutInvitationConfigurationRequest;
(function (PutInvitationConfigurationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutInvitationConfigurationRequest");
    }
    PutInvitationConfigurationRequest.isa = isa;
})(PutInvitationConfigurationRequest = exports.PutInvitationConfigurationRequest || (exports.PutInvitationConfigurationRequest = {}));
var PutInvitationConfigurationResponse;
(function (PutInvitationConfigurationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutInvitationConfigurationResponse");
    }
    PutInvitationConfigurationResponse.isa = isa;
})(PutInvitationConfigurationResponse = exports.PutInvitationConfigurationResponse || (exports.PutInvitationConfigurationResponse = {}));
var PutRoomSkillParameterRequest;
(function (PutRoomSkillParameterRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutRoomSkillParameterRequest");
    }
    PutRoomSkillParameterRequest.isa = isa;
})(PutRoomSkillParameterRequest = exports.PutRoomSkillParameterRequest || (exports.PutRoomSkillParameterRequest = {}));
var PutRoomSkillParameterResponse;
(function (PutRoomSkillParameterResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutRoomSkillParameterResponse");
    }
    PutRoomSkillParameterResponse.isa = isa;
})(PutRoomSkillParameterResponse = exports.PutRoomSkillParameterResponse || (exports.PutRoomSkillParameterResponse = {}));
var PutSkillAuthorizationRequest;
(function (PutSkillAuthorizationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutSkillAuthorizationRequest");
    }
    PutSkillAuthorizationRequest.isa = isa;
})(PutSkillAuthorizationRequest = exports.PutSkillAuthorizationRequest || (exports.PutSkillAuthorizationRequest = {}));
var PutSkillAuthorizationResponse;
(function (PutSkillAuthorizationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutSkillAuthorizationResponse");
    }
    PutSkillAuthorizationResponse.isa = isa;
})(PutSkillAuthorizationResponse = exports.PutSkillAuthorizationResponse || (exports.PutSkillAuthorizationResponse = {}));
var RegisterAVSDeviceRequest;
(function (RegisterAVSDeviceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "RegisterAVSDeviceRequest");
    }
    RegisterAVSDeviceRequest.isa = isa;
})(RegisterAVSDeviceRequest = exports.RegisterAVSDeviceRequest || (exports.RegisterAVSDeviceRequest = {}));
var RegisterAVSDeviceResponse;
(function (RegisterAVSDeviceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "RegisterAVSDeviceResponse");
    }
    RegisterAVSDeviceResponse.isa = isa;
})(RegisterAVSDeviceResponse = exports.RegisterAVSDeviceResponse || (exports.RegisterAVSDeviceResponse = {}));
var RejectSkillRequest;
(function (RejectSkillRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "RejectSkillRequest");
    }
    RejectSkillRequest.isa = isa;
})(RejectSkillRequest = exports.RejectSkillRequest || (exports.RejectSkillRequest = {}));
var RejectSkillResponse;
(function (RejectSkillResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "RejectSkillResponse");
    }
    RejectSkillResponse.isa = isa;
})(RejectSkillResponse = exports.RejectSkillResponse || (exports.RejectSkillResponse = {}));
var RequireCheckIn;
(function (RequireCheckIn) {
    function isa(o) {
        return smithy_client_1.isa(o, "RequireCheckIn");
    }
    RequireCheckIn.isa = isa;
})(RequireCheckIn = exports.RequireCheckIn || (exports.RequireCheckIn = {}));
var ResolveRoomRequest;
(function (ResolveRoomRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResolveRoomRequest");
    }
    ResolveRoomRequest.isa = isa;
})(ResolveRoomRequest = exports.ResolveRoomRequest || (exports.ResolveRoomRequest = {}));
var ResolveRoomResponse;
(function (ResolveRoomResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResolveRoomResponse");
    }
    ResolveRoomResponse.isa = isa;
})(ResolveRoomResponse = exports.ResolveRoomResponse || (exports.ResolveRoomResponse = {}));
var ResourceAssociatedException;
(function (ResourceAssociatedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceAssociatedException");
    }
    ResourceAssociatedException.isa = isa;
})(ResourceAssociatedException = exports.ResourceAssociatedException || (exports.ResourceAssociatedException = {}));
var RevokeInvitationRequest;
(function (RevokeInvitationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "RevokeInvitationRequest");
    }
    RevokeInvitationRequest.isa = isa;
})(RevokeInvitationRequest = exports.RevokeInvitationRequest || (exports.RevokeInvitationRequest = {}));
var RevokeInvitationResponse;
(function (RevokeInvitationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "RevokeInvitationResponse");
    }
    RevokeInvitationResponse.isa = isa;
})(RevokeInvitationResponse = exports.RevokeInvitationResponse || (exports.RevokeInvitationResponse = {}));
var Room;
(function (Room) {
    function isa(o) {
        return smithy_client_1.isa(o, "Room");
    }
    Room.isa = isa;
})(Room = exports.Room || (exports.Room = {}));
var RoomData;
(function (RoomData) {
    function isa(o) {
        return smithy_client_1.isa(o, "RoomData");
    }
    RoomData.isa = isa;
})(RoomData = exports.RoomData || (exports.RoomData = {}));
var RoomSkillParameter;
(function (RoomSkillParameter) {
    function isa(o) {
        return smithy_client_1.isa(o, "RoomSkillParameter");
    }
    RoomSkillParameter.isa = isa;
})(RoomSkillParameter = exports.RoomSkillParameter || (exports.RoomSkillParameter = {}));
var SearchAddressBooksRequest;
(function (SearchAddressBooksRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "SearchAddressBooksRequest");
    }
    SearchAddressBooksRequest.isa = isa;
})(SearchAddressBooksRequest = exports.SearchAddressBooksRequest || (exports.SearchAddressBooksRequest = {}));
var SearchAddressBooksResponse;
(function (SearchAddressBooksResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "SearchAddressBooksResponse");
    }
    SearchAddressBooksResponse.isa = isa;
})(SearchAddressBooksResponse = exports.SearchAddressBooksResponse || (exports.SearchAddressBooksResponse = {}));
var SearchContactsRequest;
(function (SearchContactsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "SearchContactsRequest");
    }
    SearchContactsRequest.isa = isa;
})(SearchContactsRequest = exports.SearchContactsRequest || (exports.SearchContactsRequest = {}));
var SearchContactsResponse;
(function (SearchContactsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "SearchContactsResponse");
    }
    SearchContactsResponse.isa = isa;
})(SearchContactsResponse = exports.SearchContactsResponse || (exports.SearchContactsResponse = {}));
var SearchDevicesRequest;
(function (SearchDevicesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "SearchDevicesRequest");
    }
    SearchDevicesRequest.isa = isa;
})(SearchDevicesRequest = exports.SearchDevicesRequest || (exports.SearchDevicesRequest = {}));
var SearchDevicesResponse;
(function (SearchDevicesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "SearchDevicesResponse");
    }
    SearchDevicesResponse.isa = isa;
})(SearchDevicesResponse = exports.SearchDevicesResponse || (exports.SearchDevicesResponse = {}));
var SearchNetworkProfilesRequest;
(function (SearchNetworkProfilesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "SearchNetworkProfilesRequest");
    }
    SearchNetworkProfilesRequest.isa = isa;
})(SearchNetworkProfilesRequest = exports.SearchNetworkProfilesRequest || (exports.SearchNetworkProfilesRequest = {}));
var SearchNetworkProfilesResponse;
(function (SearchNetworkProfilesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "SearchNetworkProfilesResponse");
    }
    SearchNetworkProfilesResponse.isa = isa;
})(SearchNetworkProfilesResponse = exports.SearchNetworkProfilesResponse || (exports.SearchNetworkProfilesResponse = {}));
var SearchProfilesRequest;
(function (SearchProfilesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "SearchProfilesRequest");
    }
    SearchProfilesRequest.isa = isa;
})(SearchProfilesRequest = exports.SearchProfilesRequest || (exports.SearchProfilesRequest = {}));
var SearchProfilesResponse;
(function (SearchProfilesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "SearchProfilesResponse");
    }
    SearchProfilesResponse.isa = isa;
})(SearchProfilesResponse = exports.SearchProfilesResponse || (exports.SearchProfilesResponse = {}));
var SearchRoomsRequest;
(function (SearchRoomsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "SearchRoomsRequest");
    }
    SearchRoomsRequest.isa = isa;
})(SearchRoomsRequest = exports.SearchRoomsRequest || (exports.SearchRoomsRequest = {}));
var SearchRoomsResponse;
(function (SearchRoomsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "SearchRoomsResponse");
    }
    SearchRoomsResponse.isa = isa;
})(SearchRoomsResponse = exports.SearchRoomsResponse || (exports.SearchRoomsResponse = {}));
var SearchSkillGroupsRequest;
(function (SearchSkillGroupsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "SearchSkillGroupsRequest");
    }
    SearchSkillGroupsRequest.isa = isa;
})(SearchSkillGroupsRequest = exports.SearchSkillGroupsRequest || (exports.SearchSkillGroupsRequest = {}));
var SearchSkillGroupsResponse;
(function (SearchSkillGroupsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "SearchSkillGroupsResponse");
    }
    SearchSkillGroupsResponse.isa = isa;
})(SearchSkillGroupsResponse = exports.SearchSkillGroupsResponse || (exports.SearchSkillGroupsResponse = {}));
var SearchUsersRequest;
(function (SearchUsersRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "SearchUsersRequest");
    }
    SearchUsersRequest.isa = isa;
})(SearchUsersRequest = exports.SearchUsersRequest || (exports.SearchUsersRequest = {}));
var SearchUsersResponse;
(function (SearchUsersResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "SearchUsersResponse");
    }
    SearchUsersResponse.isa = isa;
})(SearchUsersResponse = exports.SearchUsersResponse || (exports.SearchUsersResponse = {}));
var SendInvitationRequest;
(function (SendInvitationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "SendInvitationRequest");
    }
    SendInvitationRequest.isa = isa;
})(SendInvitationRequest = exports.SendInvitationRequest || (exports.SendInvitationRequest = {}));
var SendInvitationResponse;
(function (SendInvitationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "SendInvitationResponse");
    }
    SendInvitationResponse.isa = isa;
})(SendInvitationResponse = exports.SendInvitationResponse || (exports.SendInvitationResponse = {}));
var SipAddress;
(function (SipAddress) {
    function isa(o) {
        return smithy_client_1.isa(o, "SipAddress");
    }
    SipAddress.isa = isa;
})(SipAddress = exports.SipAddress || (exports.SipAddress = {}));
var SipType;
(function (SipType) {
    SipType["WORK"] = "WORK";
})(SipType = exports.SipType || (exports.SipType = {}));
var SkillDetails;
(function (SkillDetails) {
    function isa(o) {
        return smithy_client_1.isa(o, "SkillDetails");
    }
    SkillDetails.isa = isa;
})(SkillDetails = exports.SkillDetails || (exports.SkillDetails = {}));
var SkillGroup;
(function (SkillGroup) {
    function isa(o) {
        return smithy_client_1.isa(o, "SkillGroup");
    }
    SkillGroup.isa = isa;
})(SkillGroup = exports.SkillGroup || (exports.SkillGroup = {}));
var SkillGroupData;
(function (SkillGroupData) {
    function isa(o) {
        return smithy_client_1.isa(o, "SkillGroupData");
    }
    SkillGroupData.isa = isa;
})(SkillGroupData = exports.SkillGroupData || (exports.SkillGroupData = {}));
var SkillNotLinkedException;
(function (SkillNotLinkedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "SkillNotLinkedException");
    }
    SkillNotLinkedException.isa = isa;
})(SkillNotLinkedException = exports.SkillNotLinkedException || (exports.SkillNotLinkedException = {}));
var SkillSummary;
(function (SkillSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "SkillSummary");
    }
    SkillSummary.isa = isa;
})(SkillSummary = exports.SkillSummary || (exports.SkillSummary = {}));
var SkillType;
(function (SkillType) {
    SkillType["PRIVATE"] = "PRIVATE";
    SkillType["PUBLIC"] = "PUBLIC";
})(SkillType = exports.SkillType || (exports.SkillType = {}));
var SkillTypeFilter;
(function (SkillTypeFilter) {
    SkillTypeFilter["ALL"] = "ALL";
    SkillTypeFilter["PRIVATE"] = "PRIVATE";
    SkillTypeFilter["PUBLIC"] = "PUBLIC";
})(SkillTypeFilter = exports.SkillTypeFilter || (exports.SkillTypeFilter = {}));
var SkillsStoreSkill;
(function (SkillsStoreSkill) {
    function isa(o) {
        return smithy_client_1.isa(o, "SkillsStoreSkill");
    }
    SkillsStoreSkill.isa = isa;
})(SkillsStoreSkill = exports.SkillsStoreSkill || (exports.SkillsStoreSkill = {}));
var SmartHomeAppliance;
(function (SmartHomeAppliance) {
    function isa(o) {
        return smithy_client_1.isa(o, "SmartHomeAppliance");
    }
    SmartHomeAppliance.isa = isa;
})(SmartHomeAppliance = exports.SmartHomeAppliance || (exports.SmartHomeAppliance = {}));
var Sort;
(function (Sort) {
    function isa(o) {
        return smithy_client_1.isa(o, "Sort");
    }
    Sort.isa = isa;
})(Sort = exports.Sort || (exports.Sort = {}));
var SortValue;
(function (SortValue) {
    SortValue["ASC"] = "ASC";
    SortValue["DESC"] = "DESC";
})(SortValue = exports.SortValue || (exports.SortValue = {}));
var StartDeviceSyncRequest;
(function (StartDeviceSyncRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartDeviceSyncRequest");
    }
    StartDeviceSyncRequest.isa = isa;
})(StartDeviceSyncRequest = exports.StartDeviceSyncRequest || (exports.StartDeviceSyncRequest = {}));
var StartDeviceSyncResponse;
(function (StartDeviceSyncResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartDeviceSyncResponse");
    }
    StartDeviceSyncResponse.isa = isa;
})(StartDeviceSyncResponse = exports.StartDeviceSyncResponse || (exports.StartDeviceSyncResponse = {}));
var StartSmartHomeApplianceDiscoveryRequest;
(function (StartSmartHomeApplianceDiscoveryRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartSmartHomeApplianceDiscoveryRequest");
    }
    StartSmartHomeApplianceDiscoveryRequest.isa = isa;
})(StartSmartHomeApplianceDiscoveryRequest = exports.StartSmartHomeApplianceDiscoveryRequest || (exports.StartSmartHomeApplianceDiscoveryRequest = {}));
var StartSmartHomeApplianceDiscoveryResponse;
(function (StartSmartHomeApplianceDiscoveryResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartSmartHomeApplianceDiscoveryResponse");
    }
    StartSmartHomeApplianceDiscoveryResponse.isa = isa;
})(StartSmartHomeApplianceDiscoveryResponse = exports.StartSmartHomeApplianceDiscoveryResponse || (exports.StartSmartHomeApplianceDiscoveryResponse = {}));
var Tag;
(function (Tag) {
    function isa(o) {
        return smithy_client_1.isa(o, "Tag");
    }
    Tag.isa = isa;
})(Tag = exports.Tag || (exports.Tag = {}));
var TagResourceRequest;
(function (TagResourceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "TagResourceRequest");
    }
    TagResourceRequest.isa = isa;
})(TagResourceRequest = exports.TagResourceRequest || (exports.TagResourceRequest = {}));
var TagResourceResponse;
(function (TagResourceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "TagResourceResponse");
    }
    TagResourceResponse.isa = isa;
})(TagResourceResponse = exports.TagResourceResponse || (exports.TagResourceResponse = {}));
var TemperatureUnit;
(function (TemperatureUnit) {
    TemperatureUnit["CELSIUS"] = "CELSIUS";
    TemperatureUnit["FAHRENHEIT"] = "FAHRENHEIT";
})(TemperatureUnit = exports.TemperatureUnit || (exports.TemperatureUnit = {}));
var UntagResourceRequest;
(function (UntagResourceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UntagResourceRequest");
    }
    UntagResourceRequest.isa = isa;
})(UntagResourceRequest = exports.UntagResourceRequest || (exports.UntagResourceRequest = {}));
var UntagResourceResponse;
(function (UntagResourceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UntagResourceResponse");
    }
    UntagResourceResponse.isa = isa;
})(UntagResourceResponse = exports.UntagResourceResponse || (exports.UntagResourceResponse = {}));
var UpdateAddressBookRequest;
(function (UpdateAddressBookRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateAddressBookRequest");
    }
    UpdateAddressBookRequest.isa = isa;
})(UpdateAddressBookRequest = exports.UpdateAddressBookRequest || (exports.UpdateAddressBookRequest = {}));
var UpdateAddressBookResponse;
(function (UpdateAddressBookResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateAddressBookResponse");
    }
    UpdateAddressBookResponse.isa = isa;
})(UpdateAddressBookResponse = exports.UpdateAddressBookResponse || (exports.UpdateAddressBookResponse = {}));
var UpdateBusinessReportScheduleRequest;
(function (UpdateBusinessReportScheduleRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateBusinessReportScheduleRequest");
    }
    UpdateBusinessReportScheduleRequest.isa = isa;
})(UpdateBusinessReportScheduleRequest = exports.UpdateBusinessReportScheduleRequest || (exports.UpdateBusinessReportScheduleRequest = {}));
var UpdateBusinessReportScheduleResponse;
(function (UpdateBusinessReportScheduleResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateBusinessReportScheduleResponse");
    }
    UpdateBusinessReportScheduleResponse.isa = isa;
})(UpdateBusinessReportScheduleResponse = exports.UpdateBusinessReportScheduleResponse || (exports.UpdateBusinessReportScheduleResponse = {}));
var UpdateConferenceProviderRequest;
(function (UpdateConferenceProviderRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateConferenceProviderRequest");
    }
    UpdateConferenceProviderRequest.isa = isa;
})(UpdateConferenceProviderRequest = exports.UpdateConferenceProviderRequest || (exports.UpdateConferenceProviderRequest = {}));
var UpdateConferenceProviderResponse;
(function (UpdateConferenceProviderResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateConferenceProviderResponse");
    }
    UpdateConferenceProviderResponse.isa = isa;
})(UpdateConferenceProviderResponse = exports.UpdateConferenceProviderResponse || (exports.UpdateConferenceProviderResponse = {}));
var UpdateContactRequest;
(function (UpdateContactRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateContactRequest");
    }
    UpdateContactRequest.isa = isa;
})(UpdateContactRequest = exports.UpdateContactRequest || (exports.UpdateContactRequest = {}));
var UpdateContactResponse;
(function (UpdateContactResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateContactResponse");
    }
    UpdateContactResponse.isa = isa;
})(UpdateContactResponse = exports.UpdateContactResponse || (exports.UpdateContactResponse = {}));
var UpdateDeviceRequest;
(function (UpdateDeviceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateDeviceRequest");
    }
    UpdateDeviceRequest.isa = isa;
})(UpdateDeviceRequest = exports.UpdateDeviceRequest || (exports.UpdateDeviceRequest = {}));
var UpdateDeviceResponse;
(function (UpdateDeviceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateDeviceResponse");
    }
    UpdateDeviceResponse.isa = isa;
})(UpdateDeviceResponse = exports.UpdateDeviceResponse || (exports.UpdateDeviceResponse = {}));
var UpdateEndOfMeetingReminder;
(function (UpdateEndOfMeetingReminder) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateEndOfMeetingReminder");
    }
    UpdateEndOfMeetingReminder.isa = isa;
})(UpdateEndOfMeetingReminder = exports.UpdateEndOfMeetingReminder || (exports.UpdateEndOfMeetingReminder = {}));
var UpdateGatewayGroupRequest;
(function (UpdateGatewayGroupRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateGatewayGroupRequest");
    }
    UpdateGatewayGroupRequest.isa = isa;
})(UpdateGatewayGroupRequest = exports.UpdateGatewayGroupRequest || (exports.UpdateGatewayGroupRequest = {}));
var UpdateGatewayGroupResponse;
(function (UpdateGatewayGroupResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateGatewayGroupResponse");
    }
    UpdateGatewayGroupResponse.isa = isa;
})(UpdateGatewayGroupResponse = exports.UpdateGatewayGroupResponse || (exports.UpdateGatewayGroupResponse = {}));
var UpdateGatewayRequest;
(function (UpdateGatewayRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateGatewayRequest");
    }
    UpdateGatewayRequest.isa = isa;
})(UpdateGatewayRequest = exports.UpdateGatewayRequest || (exports.UpdateGatewayRequest = {}));
var UpdateGatewayResponse;
(function (UpdateGatewayResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateGatewayResponse");
    }
    UpdateGatewayResponse.isa = isa;
})(UpdateGatewayResponse = exports.UpdateGatewayResponse || (exports.UpdateGatewayResponse = {}));
var UpdateInstantBooking;
(function (UpdateInstantBooking) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateInstantBooking");
    }
    UpdateInstantBooking.isa = isa;
})(UpdateInstantBooking = exports.UpdateInstantBooking || (exports.UpdateInstantBooking = {}));
var UpdateMeetingRoomConfiguration;
(function (UpdateMeetingRoomConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateMeetingRoomConfiguration");
    }
    UpdateMeetingRoomConfiguration.isa = isa;
})(UpdateMeetingRoomConfiguration = exports.UpdateMeetingRoomConfiguration || (exports.UpdateMeetingRoomConfiguration = {}));
var UpdateNetworkProfileRequest;
(function (UpdateNetworkProfileRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateNetworkProfileRequest");
    }
    UpdateNetworkProfileRequest.isa = isa;
})(UpdateNetworkProfileRequest = exports.UpdateNetworkProfileRequest || (exports.UpdateNetworkProfileRequest = {}));
var UpdateNetworkProfileResponse;
(function (UpdateNetworkProfileResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateNetworkProfileResponse");
    }
    UpdateNetworkProfileResponse.isa = isa;
})(UpdateNetworkProfileResponse = exports.UpdateNetworkProfileResponse || (exports.UpdateNetworkProfileResponse = {}));
var UpdateProfileRequest;
(function (UpdateProfileRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateProfileRequest");
    }
    UpdateProfileRequest.isa = isa;
})(UpdateProfileRequest = exports.UpdateProfileRequest || (exports.UpdateProfileRequest = {}));
var UpdateProfileResponse;
(function (UpdateProfileResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateProfileResponse");
    }
    UpdateProfileResponse.isa = isa;
})(UpdateProfileResponse = exports.UpdateProfileResponse || (exports.UpdateProfileResponse = {}));
var UpdateRequireCheckIn;
(function (UpdateRequireCheckIn) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateRequireCheckIn");
    }
    UpdateRequireCheckIn.isa = isa;
})(UpdateRequireCheckIn = exports.UpdateRequireCheckIn || (exports.UpdateRequireCheckIn = {}));
var UpdateRoomRequest;
(function (UpdateRoomRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateRoomRequest");
    }
    UpdateRoomRequest.isa = isa;
})(UpdateRoomRequest = exports.UpdateRoomRequest || (exports.UpdateRoomRequest = {}));
var UpdateRoomResponse;
(function (UpdateRoomResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateRoomResponse");
    }
    UpdateRoomResponse.isa = isa;
})(UpdateRoomResponse = exports.UpdateRoomResponse || (exports.UpdateRoomResponse = {}));
var UpdateSkillGroupRequest;
(function (UpdateSkillGroupRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateSkillGroupRequest");
    }
    UpdateSkillGroupRequest.isa = isa;
})(UpdateSkillGroupRequest = exports.UpdateSkillGroupRequest || (exports.UpdateSkillGroupRequest = {}));
var UpdateSkillGroupResponse;
(function (UpdateSkillGroupResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateSkillGroupResponse");
    }
    UpdateSkillGroupResponse.isa = isa;
})(UpdateSkillGroupResponse = exports.UpdateSkillGroupResponse || (exports.UpdateSkillGroupResponse = {}));
var UserData;
(function (UserData) {
    function isa(o) {
        return smithy_client_1.isa(o, "UserData");
    }
    UserData.isa = isa;
})(UserData = exports.UserData || (exports.UserData = {}));
var WakeWord;
(function (WakeWord) {
    WakeWord["ALEXA"] = "ALEXA";
    WakeWord["AMAZON"] = "AMAZON";
    WakeWord["COMPUTER"] = "COMPUTER";
    WakeWord["ECHO"] = "ECHO";
})(WakeWord = exports.WakeWord || (exports.WakeWord = {}));
//# sourceMappingURL=index.js.map