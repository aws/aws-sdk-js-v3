import { ApproveSkillCommandInput, ApproveSkillCommandOutput } from "../commands/ApproveSkillCommand";
import {
  AssociateContactWithAddressBookCommandInput,
  AssociateContactWithAddressBookCommandOutput,
} from "../commands/AssociateContactWithAddressBookCommand";
import {
  AssociateDeviceWithNetworkProfileCommandInput,
  AssociateDeviceWithNetworkProfileCommandOutput,
} from "../commands/AssociateDeviceWithNetworkProfileCommand";
import {
  AssociateDeviceWithRoomCommandInput,
  AssociateDeviceWithRoomCommandOutput,
} from "../commands/AssociateDeviceWithRoomCommand";
import {
  AssociateSkillGroupWithRoomCommandInput,
  AssociateSkillGroupWithRoomCommandOutput,
} from "../commands/AssociateSkillGroupWithRoomCommand";
import {
  AssociateSkillWithSkillGroupCommandInput,
  AssociateSkillWithSkillGroupCommandOutput,
} from "../commands/AssociateSkillWithSkillGroupCommand";
import {
  AssociateSkillWithUsersCommandInput,
  AssociateSkillWithUsersCommandOutput,
} from "../commands/AssociateSkillWithUsersCommand";
import { CreateAddressBookCommandInput, CreateAddressBookCommandOutput } from "../commands/CreateAddressBookCommand";
import {
  CreateBusinessReportScheduleCommandInput,
  CreateBusinessReportScheduleCommandOutput,
} from "../commands/CreateBusinessReportScheduleCommand";
import {
  CreateConferenceProviderCommandInput,
  CreateConferenceProviderCommandOutput,
} from "../commands/CreateConferenceProviderCommand";
import { CreateContactCommandInput, CreateContactCommandOutput } from "../commands/CreateContactCommand";
import { CreateGatewayGroupCommandInput, CreateGatewayGroupCommandOutput } from "../commands/CreateGatewayGroupCommand";
import {
  CreateNetworkProfileCommandInput,
  CreateNetworkProfileCommandOutput,
} from "../commands/CreateNetworkProfileCommand";
import { CreateProfileCommandInput, CreateProfileCommandOutput } from "../commands/CreateProfileCommand";
import { CreateRoomCommandInput, CreateRoomCommandOutput } from "../commands/CreateRoomCommand";
import { CreateSkillGroupCommandInput, CreateSkillGroupCommandOutput } from "../commands/CreateSkillGroupCommand";
import { CreateUserCommandInput, CreateUserCommandOutput } from "../commands/CreateUserCommand";
import { DeleteAddressBookCommandInput, DeleteAddressBookCommandOutput } from "../commands/DeleteAddressBookCommand";
import {
  DeleteBusinessReportScheduleCommandInput,
  DeleteBusinessReportScheduleCommandOutput,
} from "../commands/DeleteBusinessReportScheduleCommand";
import {
  DeleteConferenceProviderCommandInput,
  DeleteConferenceProviderCommandOutput,
} from "../commands/DeleteConferenceProviderCommand";
import { DeleteContactCommandInput, DeleteContactCommandOutput } from "../commands/DeleteContactCommand";
import { DeleteDeviceCommandInput, DeleteDeviceCommandOutput } from "../commands/DeleteDeviceCommand";
import {
  DeleteDeviceUsageDataCommandInput,
  DeleteDeviceUsageDataCommandOutput,
} from "../commands/DeleteDeviceUsageDataCommand";
import { DeleteGatewayGroupCommandInput, DeleteGatewayGroupCommandOutput } from "../commands/DeleteGatewayGroupCommand";
import {
  DeleteNetworkProfileCommandInput,
  DeleteNetworkProfileCommandOutput,
} from "../commands/DeleteNetworkProfileCommand";
import { DeleteProfileCommandInput, DeleteProfileCommandOutput } from "../commands/DeleteProfileCommand";
import { DeleteRoomCommandInput, DeleteRoomCommandOutput } from "../commands/DeleteRoomCommand";
import {
  DeleteRoomSkillParameterCommandInput,
  DeleteRoomSkillParameterCommandOutput,
} from "../commands/DeleteRoomSkillParameterCommand";
import {
  DeleteSkillAuthorizationCommandInput,
  DeleteSkillAuthorizationCommandOutput,
} from "../commands/DeleteSkillAuthorizationCommand";
import { DeleteSkillGroupCommandInput, DeleteSkillGroupCommandOutput } from "../commands/DeleteSkillGroupCommand";
import { DeleteUserCommandInput, DeleteUserCommandOutput } from "../commands/DeleteUserCommand";
import {
  DisassociateContactFromAddressBookCommandInput,
  DisassociateContactFromAddressBookCommandOutput,
} from "../commands/DisassociateContactFromAddressBookCommand";
import {
  DisassociateDeviceFromRoomCommandInput,
  DisassociateDeviceFromRoomCommandOutput,
} from "../commands/DisassociateDeviceFromRoomCommand";
import {
  DisassociateSkillFromSkillGroupCommandInput,
  DisassociateSkillFromSkillGroupCommandOutput,
} from "../commands/DisassociateSkillFromSkillGroupCommand";
import {
  DisassociateSkillFromUsersCommandInput,
  DisassociateSkillFromUsersCommandOutput,
} from "../commands/DisassociateSkillFromUsersCommand";
import {
  DisassociateSkillGroupFromRoomCommandInput,
  DisassociateSkillGroupFromRoomCommandOutput,
} from "../commands/DisassociateSkillGroupFromRoomCommand";
import {
  ForgetSmartHomeAppliancesCommandInput,
  ForgetSmartHomeAppliancesCommandOutput,
} from "../commands/ForgetSmartHomeAppliancesCommand";
import { GetAddressBookCommandInput, GetAddressBookCommandOutput } from "../commands/GetAddressBookCommand";
import {
  GetConferencePreferenceCommandInput,
  GetConferencePreferenceCommandOutput,
} from "../commands/GetConferencePreferenceCommand";
import {
  GetConferenceProviderCommandInput,
  GetConferenceProviderCommandOutput,
} from "../commands/GetConferenceProviderCommand";
import { GetContactCommandInput, GetContactCommandOutput } from "../commands/GetContactCommand";
import { GetDeviceCommandInput, GetDeviceCommandOutput } from "../commands/GetDeviceCommand";
import { GetGatewayCommandInput, GetGatewayCommandOutput } from "../commands/GetGatewayCommand";
import { GetGatewayGroupCommandInput, GetGatewayGroupCommandOutput } from "../commands/GetGatewayGroupCommand";
import {
  GetInvitationConfigurationCommandInput,
  GetInvitationConfigurationCommandOutput,
} from "../commands/GetInvitationConfigurationCommand";
import { GetNetworkProfileCommandInput, GetNetworkProfileCommandOutput } from "../commands/GetNetworkProfileCommand";
import { GetProfileCommandInput, GetProfileCommandOutput } from "../commands/GetProfileCommand";
import { GetRoomCommandInput, GetRoomCommandOutput } from "../commands/GetRoomCommand";
import {
  GetRoomSkillParameterCommandInput,
  GetRoomSkillParameterCommandOutput,
} from "../commands/GetRoomSkillParameterCommand";
import { GetSkillGroupCommandInput, GetSkillGroupCommandOutput } from "../commands/GetSkillGroupCommand";
import {
  ListBusinessReportSchedulesCommandInput,
  ListBusinessReportSchedulesCommandOutput,
} from "../commands/ListBusinessReportSchedulesCommand";
import {
  ListConferenceProvidersCommandInput,
  ListConferenceProvidersCommandOutput,
} from "../commands/ListConferenceProvidersCommand";
import { ListDeviceEventsCommandInput, ListDeviceEventsCommandOutput } from "../commands/ListDeviceEventsCommand";
import { ListGatewayGroupsCommandInput, ListGatewayGroupsCommandOutput } from "../commands/ListGatewayGroupsCommand";
import { ListGatewaysCommandInput, ListGatewaysCommandOutput } from "../commands/ListGatewaysCommand";
import { ListSkillsCommandInput, ListSkillsCommandOutput } from "../commands/ListSkillsCommand";
import {
  ListSkillsStoreCategoriesCommandInput,
  ListSkillsStoreCategoriesCommandOutput,
} from "../commands/ListSkillsStoreCategoriesCommand";
import {
  ListSkillsStoreSkillsByCategoryCommandInput,
  ListSkillsStoreSkillsByCategoryCommandOutput,
} from "../commands/ListSkillsStoreSkillsByCategoryCommand";
import {
  ListSmartHomeAppliancesCommandInput,
  ListSmartHomeAppliancesCommandOutput,
} from "../commands/ListSmartHomeAppliancesCommand";
import { ListTagsCommandInput, ListTagsCommandOutput } from "../commands/ListTagsCommand";
import {
  PutConferencePreferenceCommandInput,
  PutConferencePreferenceCommandOutput,
} from "../commands/PutConferencePreferenceCommand";
import {
  PutInvitationConfigurationCommandInput,
  PutInvitationConfigurationCommandOutput,
} from "../commands/PutInvitationConfigurationCommand";
import {
  PutRoomSkillParameterCommandInput,
  PutRoomSkillParameterCommandOutput,
} from "../commands/PutRoomSkillParameterCommand";
import {
  PutSkillAuthorizationCommandInput,
  PutSkillAuthorizationCommandOutput,
} from "../commands/PutSkillAuthorizationCommand";
import { RegisterAVSDeviceCommandInput, RegisterAVSDeviceCommandOutput } from "../commands/RegisterAVSDeviceCommand";
import { RejectSkillCommandInput, RejectSkillCommandOutput } from "../commands/RejectSkillCommand";
import { ResolveRoomCommandInput, ResolveRoomCommandOutput } from "../commands/ResolveRoomCommand";
import { RevokeInvitationCommandInput, RevokeInvitationCommandOutput } from "../commands/RevokeInvitationCommand";
import { SearchAddressBooksCommandInput, SearchAddressBooksCommandOutput } from "../commands/SearchAddressBooksCommand";
import { SearchContactsCommandInput, SearchContactsCommandOutput } from "../commands/SearchContactsCommand";
import { SearchDevicesCommandInput, SearchDevicesCommandOutput } from "../commands/SearchDevicesCommand";
import {
  SearchNetworkProfilesCommandInput,
  SearchNetworkProfilesCommandOutput,
} from "../commands/SearchNetworkProfilesCommand";
import { SearchProfilesCommandInput, SearchProfilesCommandOutput } from "../commands/SearchProfilesCommand";
import { SearchRoomsCommandInput, SearchRoomsCommandOutput } from "../commands/SearchRoomsCommand";
import { SearchSkillGroupsCommandInput, SearchSkillGroupsCommandOutput } from "../commands/SearchSkillGroupsCommand";
import { SearchUsersCommandInput, SearchUsersCommandOutput } from "../commands/SearchUsersCommand";
import { SendAnnouncementCommandInput, SendAnnouncementCommandOutput } from "../commands/SendAnnouncementCommand";
import { SendInvitationCommandInput, SendInvitationCommandOutput } from "../commands/SendInvitationCommand";
import { StartDeviceSyncCommandInput, StartDeviceSyncCommandOutput } from "../commands/StartDeviceSyncCommand";
import {
  StartSmartHomeApplianceDiscoveryCommandInput,
  StartSmartHomeApplianceDiscoveryCommandOutput,
} from "../commands/StartSmartHomeApplianceDiscoveryCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateAddressBookCommandInput, UpdateAddressBookCommandOutput } from "../commands/UpdateAddressBookCommand";
import {
  UpdateBusinessReportScheduleCommandInput,
  UpdateBusinessReportScheduleCommandOutput,
} from "../commands/UpdateBusinessReportScheduleCommand";
import {
  UpdateConferenceProviderCommandInput,
  UpdateConferenceProviderCommandOutput,
} from "../commands/UpdateConferenceProviderCommand";
import { UpdateContactCommandInput, UpdateContactCommandOutput } from "../commands/UpdateContactCommand";
import { UpdateDeviceCommandInput, UpdateDeviceCommandOutput } from "../commands/UpdateDeviceCommand";
import { UpdateGatewayCommandInput, UpdateGatewayCommandOutput } from "../commands/UpdateGatewayCommand";
import { UpdateGatewayGroupCommandInput, UpdateGatewayGroupCommandOutput } from "../commands/UpdateGatewayGroupCommand";
import {
  UpdateNetworkProfileCommandInput,
  UpdateNetworkProfileCommandOutput,
} from "../commands/UpdateNetworkProfileCommand";
import { UpdateProfileCommandInput, UpdateProfileCommandOutput } from "../commands/UpdateProfileCommand";
import { UpdateRoomCommandInput, UpdateRoomCommandOutput } from "../commands/UpdateRoomCommand";
import { UpdateSkillGroupCommandInput, UpdateSkillGroupCommandOutput } from "../commands/UpdateSkillGroupCommand";
import {
  AddressBook,
  AddressBookData,
  AlreadyExistsException,
  ApproveSkillRequest,
  ApproveSkillResponse,
  AssociateContactWithAddressBookRequest,
  AssociateContactWithAddressBookResponse,
  AssociateDeviceWithNetworkProfileRequest,
  AssociateDeviceWithNetworkProfileResponse,
  AssociateDeviceWithRoomRequest,
  AssociateDeviceWithRoomResponse,
  AssociateSkillGroupWithRoomRequest,
  AssociateSkillGroupWithRoomResponse,
  AssociateSkillWithSkillGroupRequest,
  AssociateSkillWithSkillGroupResponse,
  AssociateSkillWithUsersRequest,
  AssociateSkillWithUsersResponse,
  Audio,
  BusinessReport,
  BusinessReportContentRange,
  BusinessReportRecurrence,
  BusinessReportS3Location,
  BusinessReportSchedule,
  Category,
  ConcurrentModificationException,
  ConferencePreference,
  ConferenceProvider,
  Contact,
  ContactData,
  Content,
  CreateAddressBookRequest,
  CreateAddressBookResponse,
  CreateBusinessReportScheduleRequest,
  CreateBusinessReportScheduleResponse,
  CreateConferenceProviderRequest,
  CreateConferenceProviderResponse,
  CreateContactRequest,
  CreateContactResponse,
  CreateEndOfMeetingReminder,
  CreateGatewayGroupRequest,
  CreateGatewayGroupResponse,
  CreateInstantBooking,
  CreateMeetingRoomConfiguration,
  CreateNetworkProfileRequest,
  CreateNetworkProfileResponse,
  CreateProfileRequest,
  CreateProfileResponse,
  CreateRequireCheckIn,
  CreateRoomRequest,
  CreateRoomResponse,
  CreateSkillGroupRequest,
  CreateSkillGroupResponse,
  CreateUserRequest,
  CreateUserResponse,
  DeleteAddressBookRequest,
  DeleteAddressBookResponse,
  DeleteBusinessReportScheduleRequest,
  DeleteBusinessReportScheduleResponse,
  DeleteConferenceProviderRequest,
  DeleteConferenceProviderResponse,
  DeleteContactRequest,
  DeleteContactResponse,
  DeleteDeviceRequest,
  DeleteDeviceResponse,
  DeleteDeviceUsageDataRequest,
  DeleteDeviceUsageDataResponse,
  DeleteGatewayGroupRequest,
  DeleteGatewayGroupResponse,
  DeleteNetworkProfileRequest,
  DeleteNetworkProfileResponse,
  DeleteProfileRequest,
  DeleteProfileResponse,
  DeleteRoomRequest,
  DeleteRoomResponse,
  DeleteRoomSkillParameterRequest,
  DeleteRoomSkillParameterResponse,
  DeleteSkillAuthorizationRequest,
  DeleteSkillAuthorizationResponse,
  DeleteSkillGroupRequest,
  DeleteSkillGroupResponse,
  DeleteUserRequest,
  DeleteUserResponse,
  DeveloperInfo,
  Device,
  DeviceData,
  DeviceEvent,
  DeviceNetworkProfileInfo,
  DeviceNotRegisteredException,
  DeviceStatusDetail,
  DeviceStatusInfo,
  DisassociateContactFromAddressBookRequest,
  DisassociateContactFromAddressBookResponse,
  DisassociateDeviceFromRoomRequest,
  DisassociateDeviceFromRoomResponse,
  DisassociateSkillFromSkillGroupRequest,
  DisassociateSkillFromSkillGroupResponse,
  DisassociateSkillFromUsersRequest,
  DisassociateSkillFromUsersResponse,
  DisassociateSkillGroupFromRoomRequest,
  DisassociateSkillGroupFromRoomResponse,
  EndOfMeetingReminder,
  Feature,
  Filter,
  ForgetSmartHomeAppliancesRequest,
  ForgetSmartHomeAppliancesResponse,
  Gateway,
  GatewayGroup,
  GatewayGroupSummary,
  GatewaySummary,
  GetAddressBookRequest,
  GetAddressBookResponse,
  GetConferencePreferenceRequest,
  GetConferencePreferenceResponse,
  GetConferenceProviderRequest,
  GetConferenceProviderResponse,
  GetContactRequest,
  GetContactResponse,
  GetDeviceRequest,
  GetDeviceResponse,
  GetGatewayGroupRequest,
  GetGatewayGroupResponse,
  GetGatewayRequest,
  GetGatewayResponse,
  GetInvitationConfigurationRequest,
  GetInvitationConfigurationResponse,
  GetNetworkProfileRequest,
  GetNetworkProfileResponse,
  GetProfileRequest,
  GetProfileResponse,
  GetRoomRequest,
  GetRoomResponse,
  GetRoomSkillParameterRequest,
  GetRoomSkillParameterResponse,
  GetSkillGroupRequest,
  GetSkillGroupResponse,
  IPDialIn,
  InstantBooking,
  InvalidCertificateAuthorityException,
  InvalidDeviceException,
  InvalidSecretsManagerResourceException,
  InvalidServiceLinkedRoleStateException,
  InvalidUserStatusException,
  LimitExceededException,
  ListBusinessReportSchedulesRequest,
  ListBusinessReportSchedulesResponse,
  ListConferenceProvidersRequest,
  ListConferenceProvidersResponse,
  ListDeviceEventsRequest,
  ListDeviceEventsResponse,
  ListGatewayGroupsRequest,
  ListGatewayGroupsResponse,
  ListGatewaysRequest,
  ListGatewaysResponse,
  ListSkillsRequest,
  ListSkillsResponse,
  ListSkillsStoreCategoriesRequest,
  ListSkillsStoreCategoriesResponse,
  ListSkillsStoreSkillsByCategoryRequest,
  ListSkillsStoreSkillsByCategoryResponse,
  ListSmartHomeAppliancesRequest,
  ListSmartHomeAppliancesResponse,
  ListTagsRequest,
  ListTagsResponse,
  MeetingRoomConfiguration,
  MeetingSetting,
  NameInUseException,
  NetworkProfile,
  NetworkProfileData,
  NotFoundException,
  PSTNDialIn,
  PhoneNumber,
  Profile,
  ProfileData,
  PutConferencePreferenceRequest,
  PutConferencePreferenceResponse,
  PutInvitationConfigurationRequest,
  PutInvitationConfigurationResponse,
  PutRoomSkillParameterRequest,
  PutRoomSkillParameterResponse,
  PutSkillAuthorizationRequest,
  PutSkillAuthorizationResponse,
  RegisterAVSDeviceRequest,
  RegisterAVSDeviceResponse,
  RejectSkillRequest,
  RejectSkillResponse,
  RequireCheckIn,
  ResolveRoomRequest,
  ResolveRoomResponse,
  ResourceAssociatedException,
  ResourceInUseException,
  RevokeInvitationRequest,
  RevokeInvitationResponse,
  Room,
  RoomData,
  RoomSkillParameter,
  SearchAddressBooksRequest,
  SearchAddressBooksResponse,
  SearchContactsRequest,
  SearchContactsResponse,
  SearchDevicesRequest,
  SearchDevicesResponse,
  SearchNetworkProfilesRequest,
  SearchNetworkProfilesResponse,
  SearchProfilesRequest,
  SearchProfilesResponse,
  SearchRoomsRequest,
  SearchRoomsResponse,
  SearchSkillGroupsRequest,
  SearchSkillGroupsResponse,
  SearchUsersRequest,
  SearchUsersResponse,
  SendAnnouncementRequest,
  SendAnnouncementResponse,
  SendInvitationRequest,
  SendInvitationResponse,
  SipAddress,
  SkillDetails,
  SkillGroup,
  SkillGroupData,
  SkillNotLinkedException,
  SkillSummary,
  SkillsStoreSkill,
  SmartHomeAppliance,
  Sort,
  Ssml,
  StartDeviceSyncRequest,
  StartDeviceSyncResponse,
  StartSmartHomeApplianceDiscoveryRequest,
  StartSmartHomeApplianceDiscoveryResponse,
  Tag,
  TagResourceRequest,
  TagResourceResponse,
  Text,
  UnauthorizedException,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateAddressBookRequest,
  UpdateAddressBookResponse,
  UpdateBusinessReportScheduleRequest,
  UpdateBusinessReportScheduleResponse,
  UpdateConferenceProviderRequest,
  UpdateConferenceProviderResponse,
  UpdateContactRequest,
  UpdateContactResponse,
  UpdateDeviceRequest,
  UpdateDeviceResponse,
  UpdateEndOfMeetingReminder,
  UpdateGatewayGroupRequest,
  UpdateGatewayGroupResponse,
  UpdateGatewayRequest,
  UpdateGatewayResponse,
  UpdateInstantBooking,
  UpdateMeetingRoomConfiguration,
  UpdateNetworkProfileRequest,
  UpdateNetworkProfileResponse,
  UpdateProfileRequest,
  UpdateProfileResponse,
  UpdateRequireCheckIn,
  UpdateRoomRequest,
  UpdateRoomResponse,
  UpdateSkillGroupRequest,
  UpdateSkillGroupResponse,
  UserData,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectBoolean as __expectBoolean,
  expectInt as __expectInt,
  expectString as __expectString,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

export const serializeAws_json1_1ApproveSkillCommand = async (
  input: ApproveSkillCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.ApproveSkill",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ApproveSkillRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AssociateContactWithAddressBookCommand = async (
  input: AssociateContactWithAddressBookCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.AssociateContactWithAddressBook",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AssociateContactWithAddressBookRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AssociateDeviceWithNetworkProfileCommand = async (
  input: AssociateDeviceWithNetworkProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.AssociateDeviceWithNetworkProfile",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AssociateDeviceWithNetworkProfileRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AssociateDeviceWithRoomCommand = async (
  input: AssociateDeviceWithRoomCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.AssociateDeviceWithRoom",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AssociateDeviceWithRoomRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AssociateSkillGroupWithRoomCommand = async (
  input: AssociateSkillGroupWithRoomCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.AssociateSkillGroupWithRoom",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AssociateSkillGroupWithRoomRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AssociateSkillWithSkillGroupCommand = async (
  input: AssociateSkillWithSkillGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.AssociateSkillWithSkillGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AssociateSkillWithSkillGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AssociateSkillWithUsersCommand = async (
  input: AssociateSkillWithUsersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.AssociateSkillWithUsers",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AssociateSkillWithUsersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateAddressBookCommand = async (
  input: CreateAddressBookCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.CreateAddressBook",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateAddressBookRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateBusinessReportScheduleCommand = async (
  input: CreateBusinessReportScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.CreateBusinessReportSchedule",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateBusinessReportScheduleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateConferenceProviderCommand = async (
  input: CreateConferenceProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.CreateConferenceProvider",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateConferenceProviderRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateContactCommand = async (
  input: CreateContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.CreateContact",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateContactRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateGatewayGroupCommand = async (
  input: CreateGatewayGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.CreateGatewayGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateGatewayGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateNetworkProfileCommand = async (
  input: CreateNetworkProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.CreateNetworkProfile",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateNetworkProfileRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateProfileCommand = async (
  input: CreateProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.CreateProfile",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateProfileRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateRoomCommand = async (
  input: CreateRoomCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.CreateRoom",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateRoomRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateSkillGroupCommand = async (
  input: CreateSkillGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.CreateSkillGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateSkillGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateUserCommand = async (
  input: CreateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.CreateUser",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateUserRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteAddressBookCommand = async (
  input: DeleteAddressBookCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.DeleteAddressBook",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteAddressBookRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteBusinessReportScheduleCommand = async (
  input: DeleteBusinessReportScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.DeleteBusinessReportSchedule",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteBusinessReportScheduleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteConferenceProviderCommand = async (
  input: DeleteConferenceProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.DeleteConferenceProvider",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteConferenceProviderRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteContactCommand = async (
  input: DeleteContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.DeleteContact",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteContactRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteDeviceCommand = async (
  input: DeleteDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.DeleteDevice",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteDeviceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteDeviceUsageDataCommand = async (
  input: DeleteDeviceUsageDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.DeleteDeviceUsageData",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteDeviceUsageDataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteGatewayGroupCommand = async (
  input: DeleteGatewayGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.DeleteGatewayGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteGatewayGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteNetworkProfileCommand = async (
  input: DeleteNetworkProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.DeleteNetworkProfile",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteNetworkProfileRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteProfileCommand = async (
  input: DeleteProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.DeleteProfile",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteProfileRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteRoomCommand = async (
  input: DeleteRoomCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.DeleteRoom",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteRoomRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteRoomSkillParameterCommand = async (
  input: DeleteRoomSkillParameterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.DeleteRoomSkillParameter",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteRoomSkillParameterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteSkillAuthorizationCommand = async (
  input: DeleteSkillAuthorizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.DeleteSkillAuthorization",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteSkillAuthorizationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteSkillGroupCommand = async (
  input: DeleteSkillGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.DeleteSkillGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteSkillGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteUserCommand = async (
  input: DeleteUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.DeleteUser",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteUserRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisassociateContactFromAddressBookCommand = async (
  input: DisassociateContactFromAddressBookCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.DisassociateContactFromAddressBook",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DisassociateContactFromAddressBookRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisassociateDeviceFromRoomCommand = async (
  input: DisassociateDeviceFromRoomCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.DisassociateDeviceFromRoom",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DisassociateDeviceFromRoomRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisassociateSkillFromSkillGroupCommand = async (
  input: DisassociateSkillFromSkillGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.DisassociateSkillFromSkillGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DisassociateSkillFromSkillGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisassociateSkillFromUsersCommand = async (
  input: DisassociateSkillFromUsersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.DisassociateSkillFromUsers",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DisassociateSkillFromUsersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisassociateSkillGroupFromRoomCommand = async (
  input: DisassociateSkillGroupFromRoomCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.DisassociateSkillGroupFromRoom",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DisassociateSkillGroupFromRoomRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ForgetSmartHomeAppliancesCommand = async (
  input: ForgetSmartHomeAppliancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.ForgetSmartHomeAppliances",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ForgetSmartHomeAppliancesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetAddressBookCommand = async (
  input: GetAddressBookCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.GetAddressBook",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetAddressBookRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetConferencePreferenceCommand = async (
  input: GetConferencePreferenceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.GetConferencePreference",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetConferencePreferenceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetConferenceProviderCommand = async (
  input: GetConferenceProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.GetConferenceProvider",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetConferenceProviderRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetContactCommand = async (
  input: GetContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.GetContact",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetContactRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDeviceCommand = async (
  input: GetDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.GetDevice",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetDeviceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetGatewayCommand = async (
  input: GetGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.GetGateway",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetGatewayRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetGatewayGroupCommand = async (
  input: GetGatewayGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.GetGatewayGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetGatewayGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetInvitationConfigurationCommand = async (
  input: GetInvitationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.GetInvitationConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetInvitationConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetNetworkProfileCommand = async (
  input: GetNetworkProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.GetNetworkProfile",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetNetworkProfileRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetProfileCommand = async (
  input: GetProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.GetProfile",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetProfileRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetRoomCommand = async (
  input: GetRoomCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.GetRoom",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetRoomRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetRoomSkillParameterCommand = async (
  input: GetRoomSkillParameterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.GetRoomSkillParameter",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetRoomSkillParameterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetSkillGroupCommand = async (
  input: GetSkillGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.GetSkillGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetSkillGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListBusinessReportSchedulesCommand = async (
  input: ListBusinessReportSchedulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.ListBusinessReportSchedules",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListBusinessReportSchedulesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListConferenceProvidersCommand = async (
  input: ListConferenceProvidersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.ListConferenceProviders",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListConferenceProvidersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListDeviceEventsCommand = async (
  input: ListDeviceEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.ListDeviceEvents",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListDeviceEventsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListGatewayGroupsCommand = async (
  input: ListGatewayGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.ListGatewayGroups",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListGatewayGroupsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListGatewaysCommand = async (
  input: ListGatewaysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.ListGateways",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListGatewaysRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListSkillsCommand = async (
  input: ListSkillsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.ListSkills",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListSkillsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListSkillsStoreCategoriesCommand = async (
  input: ListSkillsStoreCategoriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.ListSkillsStoreCategories",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListSkillsStoreCategoriesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListSkillsStoreSkillsByCategoryCommand = async (
  input: ListSkillsStoreSkillsByCategoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.ListSkillsStoreSkillsByCategory",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListSkillsStoreSkillsByCategoryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListSmartHomeAppliancesCommand = async (
  input: ListSmartHomeAppliancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.ListSmartHomeAppliances",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListSmartHomeAppliancesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsCommand = async (
  input: ListTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.ListTags",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTagsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutConferencePreferenceCommand = async (
  input: PutConferencePreferenceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.PutConferencePreference",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutConferencePreferenceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutInvitationConfigurationCommand = async (
  input: PutInvitationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.PutInvitationConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutInvitationConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutRoomSkillParameterCommand = async (
  input: PutRoomSkillParameterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.PutRoomSkillParameter",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutRoomSkillParameterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutSkillAuthorizationCommand = async (
  input: PutSkillAuthorizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.PutSkillAuthorization",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutSkillAuthorizationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RegisterAVSDeviceCommand = async (
  input: RegisterAVSDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.RegisterAVSDevice",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RegisterAVSDeviceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RejectSkillCommand = async (
  input: RejectSkillCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.RejectSkill",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RejectSkillRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ResolveRoomCommand = async (
  input: ResolveRoomCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.ResolveRoom",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ResolveRoomRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RevokeInvitationCommand = async (
  input: RevokeInvitationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.RevokeInvitation",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RevokeInvitationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1SearchAddressBooksCommand = async (
  input: SearchAddressBooksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.SearchAddressBooks",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1SearchAddressBooksRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1SearchContactsCommand = async (
  input: SearchContactsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.SearchContacts",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1SearchContactsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1SearchDevicesCommand = async (
  input: SearchDevicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.SearchDevices",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1SearchDevicesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1SearchNetworkProfilesCommand = async (
  input: SearchNetworkProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.SearchNetworkProfiles",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1SearchNetworkProfilesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1SearchProfilesCommand = async (
  input: SearchProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.SearchProfiles",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1SearchProfilesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1SearchRoomsCommand = async (
  input: SearchRoomsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.SearchRooms",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1SearchRoomsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1SearchSkillGroupsCommand = async (
  input: SearchSkillGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.SearchSkillGroups",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1SearchSkillGroupsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1SearchUsersCommand = async (
  input: SearchUsersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.SearchUsers",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1SearchUsersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1SendAnnouncementCommand = async (
  input: SendAnnouncementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.SendAnnouncement",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1SendAnnouncementRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1SendInvitationCommand = async (
  input: SendInvitationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.SendInvitation",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1SendInvitationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartDeviceSyncCommand = async (
  input: StartDeviceSyncCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.StartDeviceSync",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartDeviceSyncRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartSmartHomeApplianceDiscoveryCommand = async (
  input: StartSmartHomeApplianceDiscoveryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.StartSmartHomeApplianceDiscovery",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartSmartHomeApplianceDiscoveryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.TagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateAddressBookCommand = async (
  input: UpdateAddressBookCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.UpdateAddressBook",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateAddressBookRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateBusinessReportScheduleCommand = async (
  input: UpdateBusinessReportScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.UpdateBusinessReportSchedule",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateBusinessReportScheduleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateConferenceProviderCommand = async (
  input: UpdateConferenceProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.UpdateConferenceProvider",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateConferenceProviderRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateContactCommand = async (
  input: UpdateContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.UpdateContact",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateContactRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateDeviceCommand = async (
  input: UpdateDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.UpdateDevice",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateDeviceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateGatewayCommand = async (
  input: UpdateGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.UpdateGateway",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateGatewayRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateGatewayGroupCommand = async (
  input: UpdateGatewayGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.UpdateGatewayGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateGatewayGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateNetworkProfileCommand = async (
  input: UpdateNetworkProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.UpdateNetworkProfile",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateNetworkProfileRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateProfileCommand = async (
  input: UpdateProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.UpdateProfile",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateProfileRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateRoomCommand = async (
  input: UpdateRoomCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.UpdateRoom",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateRoomRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateSkillGroupCommand = async (
  input: UpdateSkillGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AlexaForBusiness.UpdateSkillGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateSkillGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1ApproveSkillCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ApproveSkillCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ApproveSkillCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ApproveSkillResponse(data, context);
  const response: ApproveSkillCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ApproveSkillCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ApproveSkillCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.alexaforbusiness#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1AssociateContactWithAddressBookCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateContactWithAddressBookCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AssociateContactWithAddressBookCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AssociateContactWithAddressBookResponse(data, context);
  const response: AssociateContactWithAddressBookCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AssociateContactWithAddressBookCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateContactWithAddressBookCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededException":
    case "com.amazonaws.alexaforbusiness#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1AssociateDeviceWithNetworkProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateDeviceWithNetworkProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AssociateDeviceWithNetworkProfileCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AssociateDeviceWithNetworkProfileResponse(data, context);
  const response: AssociateDeviceWithNetworkProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AssociateDeviceWithNetworkProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateDeviceWithNetworkProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DeviceNotRegisteredException":
    case "com.amazonaws.alexaforbusiness#DeviceNotRegisteredException":
      response = {
        ...(await deserializeAws_json1_1DeviceNotRegisteredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1AssociateDeviceWithRoomCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateDeviceWithRoomCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AssociateDeviceWithRoomCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AssociateDeviceWithRoomResponse(data, context);
  const response: AssociateDeviceWithRoomCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AssociateDeviceWithRoomCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateDeviceWithRoomCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DeviceNotRegisteredException":
    case "com.amazonaws.alexaforbusiness#DeviceNotRegisteredException":
      response = {
        ...(await deserializeAws_json1_1DeviceNotRegisteredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.alexaforbusiness#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1AssociateSkillGroupWithRoomCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateSkillGroupWithRoomCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AssociateSkillGroupWithRoomCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AssociateSkillGroupWithRoomResponse(data, context);
  const response: AssociateSkillGroupWithRoomCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AssociateSkillGroupWithRoomCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateSkillGroupWithRoomCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1AssociateSkillWithSkillGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateSkillWithSkillGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AssociateSkillWithSkillGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AssociateSkillWithSkillGroupResponse(data, context);
  const response: AssociateSkillWithSkillGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AssociateSkillWithSkillGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateSkillWithSkillGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "SkillNotLinkedException":
    case "com.amazonaws.alexaforbusiness#SkillNotLinkedException":
      response = {
        ...(await deserializeAws_json1_1SkillNotLinkedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1AssociateSkillWithUsersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateSkillWithUsersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AssociateSkillWithUsersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AssociateSkillWithUsersResponse(data, context);
  const response: AssociateSkillWithUsersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AssociateSkillWithUsersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateSkillWithUsersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateAddressBookCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAddressBookCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateAddressBookCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateAddressBookResponse(data, context);
  const response: CreateAddressBookCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateAddressBookCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAddressBookCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.alexaforbusiness#AlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.alexaforbusiness#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateBusinessReportScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBusinessReportScheduleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateBusinessReportScheduleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateBusinessReportScheduleResponse(data, context);
  const response: CreateBusinessReportScheduleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateBusinessReportScheduleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBusinessReportScheduleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.alexaforbusiness#AlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateConferenceProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConferenceProviderCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateConferenceProviderCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateConferenceProviderResponse(data, context);
  const response: CreateConferenceProviderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateConferenceProviderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConferenceProviderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.alexaforbusiness#AlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateContactCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateContactCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateContactResponse(data, context);
  const response: CreateContactCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateContactCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateContactCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.alexaforbusiness#AlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.alexaforbusiness#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateGatewayGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGatewayGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateGatewayGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateGatewayGroupResponse(data, context);
  const response: CreateGatewayGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateGatewayGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGatewayGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.alexaforbusiness#AlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.alexaforbusiness#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateNetworkProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNetworkProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateNetworkProfileCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateNetworkProfileResponse(data, context);
  const response: CreateNetworkProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateNetworkProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNetworkProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.alexaforbusiness#AlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidCertificateAuthorityException":
    case "com.amazonaws.alexaforbusiness#InvalidCertificateAuthorityException":
      response = {
        ...(await deserializeAws_json1_1InvalidCertificateAuthorityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidServiceLinkedRoleStateException":
    case "com.amazonaws.alexaforbusiness#InvalidServiceLinkedRoleStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidServiceLinkedRoleStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.alexaforbusiness#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateProfileCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateProfileResponse(data, context);
  const response: CreateProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.alexaforbusiness#AlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.alexaforbusiness#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateRoomCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRoomCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateRoomCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateRoomResponse(data, context);
  const response: CreateRoomCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateRoomCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRoomCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.alexaforbusiness#AlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.alexaforbusiness#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateSkillGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSkillGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateSkillGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateSkillGroupResponse(data, context);
  const response: CreateSkillGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateSkillGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSkillGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.alexaforbusiness#AlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.alexaforbusiness#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateUserCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateUserResponse(data, context);
  const response: CreateUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.alexaforbusiness#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.alexaforbusiness#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteAddressBookCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAddressBookCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteAddressBookCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteAddressBookResponse(data, context);
  const response: DeleteAddressBookCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteAddressBookCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAddressBookCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteBusinessReportScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBusinessReportScheduleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteBusinessReportScheduleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteBusinessReportScheduleResponse(data, context);
  const response: DeleteBusinessReportScheduleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteBusinessReportScheduleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBusinessReportScheduleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteConferenceProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConferenceProviderCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteConferenceProviderCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteConferenceProviderResponse(data, context);
  const response: DeleteConferenceProviderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteConferenceProviderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConferenceProviderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteContactCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteContactCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteContactResponse(data, context);
  const response: DeleteContactCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteContactCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteContactCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeviceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteDeviceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteDeviceResponse(data, context);
  const response: DeleteDeviceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteDeviceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeviceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidCertificateAuthorityException":
    case "com.amazonaws.alexaforbusiness#InvalidCertificateAuthorityException":
      response = {
        ...(await deserializeAws_json1_1InvalidCertificateAuthorityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteDeviceUsageDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeviceUsageDataCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteDeviceUsageDataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteDeviceUsageDataResponse(data, context);
  const response: DeleteDeviceUsageDataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteDeviceUsageDataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeviceUsageDataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DeviceNotRegisteredException":
    case "com.amazonaws.alexaforbusiness#DeviceNotRegisteredException":
      response = {
        ...(await deserializeAws_json1_1DeviceNotRegisteredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.alexaforbusiness#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteGatewayGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGatewayGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteGatewayGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteGatewayGroupResponse(data, context);
  const response: DeleteGatewayGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteGatewayGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGatewayGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceAssociatedException":
    case "com.amazonaws.alexaforbusiness#ResourceAssociatedException":
      response = {
        ...(await deserializeAws_json1_1ResourceAssociatedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteNetworkProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNetworkProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteNetworkProfileCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteNetworkProfileResponse(data, context);
  const response: DeleteNetworkProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteNetworkProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNetworkProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.alexaforbusiness#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteProfileCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteProfileResponse(data, context);
  const response: DeleteProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteRoomCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRoomCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteRoomCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteRoomResponse(data, context);
  const response: DeleteRoomCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteRoomCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRoomCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteRoomSkillParameterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRoomSkillParameterCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteRoomSkillParameterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteRoomSkillParameterResponse(data, context);
  const response: DeleteRoomSkillParameterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteRoomSkillParameterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRoomSkillParameterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteSkillAuthorizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSkillAuthorizationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteSkillAuthorizationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteSkillAuthorizationResponse(data, context);
  const response: DeleteSkillAuthorizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteSkillAuthorizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSkillAuthorizationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteSkillGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSkillGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteSkillGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteSkillGroupResponse(data, context);
  const response: DeleteSkillGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteSkillGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSkillGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteUserCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteUserResponse(data, context);
  const response: DeleteUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DisassociateContactFromAddressBookCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateContactFromAddressBookCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DisassociateContactFromAddressBookCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisassociateContactFromAddressBookResponse(data, context);
  const response: DisassociateContactFromAddressBookCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisassociateContactFromAddressBookCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateContactFromAddressBookCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DisassociateDeviceFromRoomCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateDeviceFromRoomCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DisassociateDeviceFromRoomCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisassociateDeviceFromRoomResponse(data, context);
  const response: DisassociateDeviceFromRoomCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisassociateDeviceFromRoomCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateDeviceFromRoomCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DeviceNotRegisteredException":
    case "com.amazonaws.alexaforbusiness#DeviceNotRegisteredException":
      response = {
        ...(await deserializeAws_json1_1DeviceNotRegisteredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DisassociateSkillFromSkillGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateSkillFromSkillGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DisassociateSkillFromSkillGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisassociateSkillFromSkillGroupResponse(data, context);
  const response: DisassociateSkillFromSkillGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisassociateSkillFromSkillGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateSkillFromSkillGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DisassociateSkillFromUsersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateSkillFromUsersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DisassociateSkillFromUsersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisassociateSkillFromUsersResponse(data, context);
  const response: DisassociateSkillFromUsersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisassociateSkillFromUsersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateSkillFromUsersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DisassociateSkillGroupFromRoomCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateSkillGroupFromRoomCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DisassociateSkillGroupFromRoomCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisassociateSkillGroupFromRoomResponse(data, context);
  const response: DisassociateSkillGroupFromRoomCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisassociateSkillGroupFromRoomCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateSkillGroupFromRoomCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ForgetSmartHomeAppliancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ForgetSmartHomeAppliancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ForgetSmartHomeAppliancesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ForgetSmartHomeAppliancesResponse(data, context);
  const response: ForgetSmartHomeAppliancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ForgetSmartHomeAppliancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ForgetSmartHomeAppliancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1GetAddressBookCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAddressBookCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetAddressBookCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetAddressBookResponse(data, context);
  const response: GetAddressBookCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetAddressBookCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAddressBookCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1GetConferencePreferenceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConferencePreferenceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetConferencePreferenceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetConferencePreferenceResponse(data, context);
  const response: GetConferencePreferenceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetConferencePreferenceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConferencePreferenceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1GetConferenceProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConferenceProviderCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetConferenceProviderCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetConferenceProviderResponse(data, context);
  const response: GetConferenceProviderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetConferenceProviderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConferenceProviderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1GetContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContactCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetContactCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetContactResponse(data, context);
  const response: GetContactCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetContactCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContactCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1GetDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeviceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetDeviceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDeviceResponse(data, context);
  const response: GetDeviceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDeviceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeviceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1GetGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGatewayCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetGatewayCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetGatewayResponse(data, context);
  const response: GetGatewayCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetGatewayCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGatewayCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1GetGatewayGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGatewayGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetGatewayGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetGatewayGroupResponse(data, context);
  const response: GetGatewayGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetGatewayGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGatewayGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1GetInvitationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInvitationConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetInvitationConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetInvitationConfigurationResponse(data, context);
  const response: GetInvitationConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetInvitationConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInvitationConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1GetNetworkProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNetworkProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetNetworkProfileCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetNetworkProfileResponse(data, context);
  const response: GetNetworkProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetNetworkProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNetworkProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidSecretsManagerResourceException":
    case "com.amazonaws.alexaforbusiness#InvalidSecretsManagerResourceException":
      response = {
        ...(await deserializeAws_json1_1InvalidSecretsManagerResourceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1GetProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetProfileCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetProfileResponse(data, context);
  const response: GetProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1GetRoomCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRoomCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetRoomCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRoomResponse(data, context);
  const response: GetRoomCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetRoomCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRoomCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1GetRoomSkillParameterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRoomSkillParameterCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetRoomSkillParameterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRoomSkillParameterResponse(data, context);
  const response: GetRoomSkillParameterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetRoomSkillParameterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRoomSkillParameterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1GetSkillGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSkillGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetSkillGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetSkillGroupResponse(data, context);
  const response: GetSkillGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetSkillGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSkillGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListBusinessReportSchedulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBusinessReportSchedulesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListBusinessReportSchedulesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListBusinessReportSchedulesResponse(data, context);
  const response: ListBusinessReportSchedulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListBusinessReportSchedulesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBusinessReportSchedulesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListConferenceProvidersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConferenceProvidersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListConferenceProvidersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListConferenceProvidersResponse(data, context);
  const response: ListConferenceProvidersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListConferenceProvidersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConferenceProvidersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListDeviceEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeviceEventsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListDeviceEventsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListDeviceEventsResponse(data, context);
  const response: ListDeviceEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListDeviceEventsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeviceEventsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListGatewayGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGatewayGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListGatewayGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListGatewayGroupsResponse(data, context);
  const response: ListGatewayGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListGatewayGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGatewayGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListGatewaysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGatewaysCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListGatewaysCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListGatewaysResponse(data, context);
  const response: ListGatewaysCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListGatewaysCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGatewaysCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListSkillsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSkillsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListSkillsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListSkillsResponse(data, context);
  const response: ListSkillsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListSkillsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSkillsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListSkillsStoreCategoriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSkillsStoreCategoriesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListSkillsStoreCategoriesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListSkillsStoreCategoriesResponse(data, context);
  const response: ListSkillsStoreCategoriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListSkillsStoreCategoriesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSkillsStoreCategoriesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListSkillsStoreSkillsByCategoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSkillsStoreSkillsByCategoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListSkillsStoreSkillsByCategoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListSkillsStoreSkillsByCategoryResponse(data, context);
  const response: ListSkillsStoreSkillsByCategoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListSkillsStoreSkillsByCategoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSkillsStoreSkillsByCategoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListSmartHomeAppliancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSmartHomeAppliancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListSmartHomeAppliancesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListSmartHomeAppliancesResponse(data, context);
  const response: ListSmartHomeAppliancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListSmartHomeAppliancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSmartHomeAppliancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsResponse(data, context);
  const response: ListTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1PutConferencePreferenceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutConferencePreferenceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutConferencePreferenceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutConferencePreferenceResponse(data, context);
  const response: PutConferencePreferenceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutConferencePreferenceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutConferencePreferenceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1PutInvitationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutInvitationConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutInvitationConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutInvitationConfigurationResponse(data, context);
  const response: PutInvitationConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutInvitationConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutInvitationConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1PutRoomSkillParameterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRoomSkillParameterCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutRoomSkillParameterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutRoomSkillParameterResponse(data, context);
  const response: PutRoomSkillParameterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutRoomSkillParameterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRoomSkillParameterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1PutSkillAuthorizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSkillAuthorizationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutSkillAuthorizationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutSkillAuthorizationResponse(data, context);
  const response: PutSkillAuthorizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutSkillAuthorizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSkillAuthorizationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.alexaforbusiness#UnauthorizedException":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1RegisterAVSDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterAVSDeviceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RegisterAVSDeviceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RegisterAVSDeviceResponse(data, context);
  const response: RegisterAVSDeviceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RegisterAVSDeviceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterAVSDeviceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidDeviceException":
    case "com.amazonaws.alexaforbusiness#InvalidDeviceException":
      response = {
        ...(await deserializeAws_json1_1InvalidDeviceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.alexaforbusiness#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1RejectSkillCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectSkillCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RejectSkillCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RejectSkillResponse(data, context);
  const response: RejectSkillCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RejectSkillCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectSkillCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ResolveRoomCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResolveRoomCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ResolveRoomCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ResolveRoomResponse(data, context);
  const response: ResolveRoomCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ResolveRoomCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResolveRoomCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1RevokeInvitationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeInvitationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RevokeInvitationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RevokeInvitationResponse(data, context);
  const response: RevokeInvitationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RevokeInvitationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeInvitationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1SearchAddressBooksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchAddressBooksCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1SearchAddressBooksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SearchAddressBooksResponse(data, context);
  const response: SearchAddressBooksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1SearchAddressBooksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchAddressBooksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1SearchContactsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchContactsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1SearchContactsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SearchContactsResponse(data, context);
  const response: SearchContactsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1SearchContactsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchContactsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1SearchDevicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchDevicesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1SearchDevicesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SearchDevicesResponse(data, context);
  const response: SearchDevicesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1SearchDevicesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchDevicesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1SearchNetworkProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchNetworkProfilesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1SearchNetworkProfilesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SearchNetworkProfilesResponse(data, context);
  const response: SearchNetworkProfilesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1SearchNetworkProfilesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchNetworkProfilesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1SearchProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchProfilesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1SearchProfilesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SearchProfilesResponse(data, context);
  const response: SearchProfilesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1SearchProfilesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchProfilesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1SearchRoomsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchRoomsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1SearchRoomsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SearchRoomsResponse(data, context);
  const response: SearchRoomsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1SearchRoomsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchRoomsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1SearchSkillGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchSkillGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1SearchSkillGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SearchSkillGroupsResponse(data, context);
  const response: SearchSkillGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1SearchSkillGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchSkillGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1SearchUsersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchUsersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1SearchUsersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SearchUsersResponse(data, context);
  const response: SearchUsersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1SearchUsersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchUsersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1SendAnnouncementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendAnnouncementCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1SendAnnouncementCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SendAnnouncementResponse(data, context);
  const response: SendAnnouncementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1SendAnnouncementCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendAnnouncementCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.alexaforbusiness#AlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.alexaforbusiness#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1SendInvitationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendInvitationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1SendInvitationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SendInvitationResponse(data, context);
  const response: SendInvitationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1SendInvitationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendInvitationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidUserStatusException":
    case "com.amazonaws.alexaforbusiness#InvalidUserStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidUserStatusExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1StartDeviceSyncCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDeviceSyncCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartDeviceSyncCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartDeviceSyncResponse(data, context);
  const response: StartDeviceSyncCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartDeviceSyncCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDeviceSyncCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DeviceNotRegisteredException":
    case "com.amazonaws.alexaforbusiness#DeviceNotRegisteredException":
      response = {
        ...(await deserializeAws_json1_1DeviceNotRegisteredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1StartSmartHomeApplianceDiscoveryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSmartHomeApplianceDiscoveryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartSmartHomeApplianceDiscoveryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartSmartHomeApplianceDiscoveryResponse(data, context);
  const response: StartSmartHomeApplianceDiscoveryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartSmartHomeApplianceDiscoveryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSmartHomeApplianceDiscoveryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdateAddressBookCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAddressBookCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateAddressBookCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateAddressBookResponse(data, context);
  const response: UpdateAddressBookCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateAddressBookCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAddressBookCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NameInUseException":
    case "com.amazonaws.alexaforbusiness#NameInUseException":
      response = {
        ...(await deserializeAws_json1_1NameInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdateBusinessReportScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBusinessReportScheduleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateBusinessReportScheduleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateBusinessReportScheduleResponse(data, context);
  const response: UpdateBusinessReportScheduleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateBusinessReportScheduleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBusinessReportScheduleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdateConferenceProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConferenceProviderCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateConferenceProviderCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateConferenceProviderResponse(data, context);
  const response: UpdateConferenceProviderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateConferenceProviderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConferenceProviderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdateContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContactCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateContactCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateContactResponse(data, context);
  const response: UpdateContactCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateContactCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContactCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdateDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDeviceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateDeviceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateDeviceResponse(data, context);
  const response: UpdateDeviceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateDeviceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDeviceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DeviceNotRegisteredException":
    case "com.amazonaws.alexaforbusiness#DeviceNotRegisteredException":
      response = {
        ...(await deserializeAws_json1_1DeviceNotRegisteredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdateGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGatewayCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateGatewayCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateGatewayResponse(data, context);
  const response: UpdateGatewayCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateGatewayCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGatewayCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NameInUseException":
    case "com.amazonaws.alexaforbusiness#NameInUseException":
      response = {
        ...(await deserializeAws_json1_1NameInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdateGatewayGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGatewayGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateGatewayGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateGatewayGroupResponse(data, context);
  const response: UpdateGatewayGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateGatewayGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGatewayGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NameInUseException":
    case "com.amazonaws.alexaforbusiness#NameInUseException":
      response = {
        ...(await deserializeAws_json1_1NameInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdateNetworkProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNetworkProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateNetworkProfileCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateNetworkProfileResponse(data, context);
  const response: UpdateNetworkProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateNetworkProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNetworkProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidCertificateAuthorityException":
    case "com.amazonaws.alexaforbusiness#InvalidCertificateAuthorityException":
      response = {
        ...(await deserializeAws_json1_1InvalidCertificateAuthorityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidSecretsManagerResourceException":
    case "com.amazonaws.alexaforbusiness#InvalidSecretsManagerResourceException":
      response = {
        ...(await deserializeAws_json1_1InvalidSecretsManagerResourceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NameInUseException":
    case "com.amazonaws.alexaforbusiness#NameInUseException":
      response = {
        ...(await deserializeAws_json1_1NameInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdateProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateProfileCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateProfileResponse(data, context);
  const response: UpdateProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NameInUseException":
    case "com.amazonaws.alexaforbusiness#NameInUseException":
      response = {
        ...(await deserializeAws_json1_1NameInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdateRoomCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRoomCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateRoomCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateRoomResponse(data, context);
  const response: UpdateRoomCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateRoomCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRoomCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NameInUseException":
    case "com.amazonaws.alexaforbusiness#NameInUseException":
      response = {
        ...(await deserializeAws_json1_1NameInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdateSkillGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSkillGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateSkillGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateSkillGroupResponse(data, context);
  const response: UpdateSkillGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateSkillGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSkillGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NameInUseException":
    case "com.amazonaws.alexaforbusiness#NameInUseException":
      response = {
        ...(await deserializeAws_json1_1NameInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_json1_1AlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AlreadyExistsException(body, context);
  const contents: AlreadyExistsException = {
    name: "AlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ConcurrentModificationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ConcurrentModificationException(body, context);
  const contents: ConcurrentModificationException = {
    name: "ConcurrentModificationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1DeviceNotRegisteredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DeviceNotRegisteredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DeviceNotRegisteredException(body, context);
  const contents: DeviceNotRegisteredException = {
    name: "DeviceNotRegisteredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidCertificateAuthorityExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidCertificateAuthorityException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidCertificateAuthorityException(body, context);
  const contents: InvalidCertificateAuthorityException = {
    name: "InvalidCertificateAuthorityException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidDeviceExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDeviceException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidDeviceException(body, context);
  const contents: InvalidDeviceException = {
    name: "InvalidDeviceException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidSecretsManagerResourceExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSecretsManagerResourceException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidSecretsManagerResourceException(body, context);
  const contents: InvalidSecretsManagerResourceException = {
    name: "InvalidSecretsManagerResourceException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidServiceLinkedRoleStateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidServiceLinkedRoleStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidServiceLinkedRoleStateException(body, context);
  const contents: InvalidServiceLinkedRoleStateException = {
    name: "InvalidServiceLinkedRoleStateException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidUserStatusExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidUserStatusException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidUserStatusException(body, context);
  const contents: InvalidUserStatusException = {
    name: "InvalidUserStatusException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LimitExceededException(body, context);
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1NameInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NameInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NameInUseException(body, context);
  const contents: NameInUseException = {
    name: "NameInUseException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1NotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NotFoundException(body, context);
  const contents: NotFoundException = {
    name: "NotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ResourceAssociatedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAssociatedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceAssociatedException(body, context);
  const contents: ResourceAssociatedException = {
    name: "ResourceAssociatedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ResourceInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceInUseException(body, context);
  const contents: ResourceInUseException = {
    name: "ResourceInUseException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1SkillNotLinkedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SkillNotLinkedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1SkillNotLinkedException(body, context);
  const contents: SkillNotLinkedException = {
    name: "SkillNotLinkedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1UnauthorizedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnauthorizedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnauthorizedException(body, context);
  const contents: UnauthorizedException = {
    name: "UnauthorizedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const serializeAws_json1_1ApproveSkillRequest = (input: ApproveSkillRequest, context: __SerdeContext): any => {
  return {
    ...(input.SkillId !== undefined && input.SkillId !== null && { SkillId: input.SkillId }),
  };
};

const serializeAws_json1_1AssociateContactWithAddressBookRequest = (
  input: AssociateContactWithAddressBookRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AddressBookArn !== undefined &&
      input.AddressBookArn !== null && { AddressBookArn: input.AddressBookArn }),
    ...(input.ContactArn !== undefined && input.ContactArn !== null && { ContactArn: input.ContactArn }),
  };
};

const serializeAws_json1_1AssociateDeviceWithNetworkProfileRequest = (
  input: AssociateDeviceWithNetworkProfileRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeviceArn !== undefined && input.DeviceArn !== null && { DeviceArn: input.DeviceArn }),
    ...(input.NetworkProfileArn !== undefined &&
      input.NetworkProfileArn !== null && { NetworkProfileArn: input.NetworkProfileArn }),
  };
};

const serializeAws_json1_1AssociateDeviceWithRoomRequest = (
  input: AssociateDeviceWithRoomRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeviceArn !== undefined && input.DeviceArn !== null && { DeviceArn: input.DeviceArn }),
    ...(input.RoomArn !== undefined && input.RoomArn !== null && { RoomArn: input.RoomArn }),
  };
};

const serializeAws_json1_1AssociateSkillGroupWithRoomRequest = (
  input: AssociateSkillGroupWithRoomRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.RoomArn !== undefined && input.RoomArn !== null && { RoomArn: input.RoomArn }),
    ...(input.SkillGroupArn !== undefined && input.SkillGroupArn !== null && { SkillGroupArn: input.SkillGroupArn }),
  };
};

const serializeAws_json1_1AssociateSkillWithSkillGroupRequest = (
  input: AssociateSkillWithSkillGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.SkillGroupArn !== undefined && input.SkillGroupArn !== null && { SkillGroupArn: input.SkillGroupArn }),
    ...(input.SkillId !== undefined && input.SkillId !== null && { SkillId: input.SkillId }),
  };
};

const serializeAws_json1_1AssociateSkillWithUsersRequest = (
  input: AssociateSkillWithUsersRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.SkillId !== undefined && input.SkillId !== null && { SkillId: input.SkillId }),
  };
};

const serializeAws_json1_1Audio = (input: Audio, context: __SerdeContext): any => {
  return {
    ...(input.Locale !== undefined && input.Locale !== null && { Locale: input.Locale }),
    ...(input.Location !== undefined && input.Location !== null && { Location: input.Location }),
  };
};

const serializeAws_json1_1AudioList = (input: Audio[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Audio(entry, context);
    });
};

const serializeAws_json1_1AuthorizationResult = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_json1_1BusinessReportContentRange = (
  input: BusinessReportContentRange,
  context: __SerdeContext
): any => {
  return {
    ...(input.Interval !== undefined && input.Interval !== null && { Interval: input.Interval }),
  };
};

const serializeAws_json1_1BusinessReportRecurrence = (
  input: BusinessReportRecurrence,
  context: __SerdeContext
): any => {
  return {
    ...(input.StartDate !== undefined && input.StartDate !== null && { StartDate: input.StartDate }),
  };
};

const serializeAws_json1_1ConferencePreference = (input: ConferencePreference, context: __SerdeContext): any => {
  return {
    ...(input.DefaultConferenceProviderArn !== undefined &&
      input.DefaultConferenceProviderArn !== null && {
        DefaultConferenceProviderArn: input.DefaultConferenceProviderArn,
      }),
  };
};

const serializeAws_json1_1Content = (input: Content, context: __SerdeContext): any => {
  return {
    ...(input.AudioList !== undefined &&
      input.AudioList !== null && { AudioList: serializeAws_json1_1AudioList(input.AudioList, context) }),
    ...(input.SsmlList !== undefined &&
      input.SsmlList !== null && { SsmlList: serializeAws_json1_1SsmlList(input.SsmlList, context) }),
    ...(input.TextList !== undefined &&
      input.TextList !== null && { TextList: serializeAws_json1_1TextList(input.TextList, context) }),
  };
};

const serializeAws_json1_1CreateAddressBookRequest = (
  input: CreateAddressBookRequest,
  context: __SerdeContext
): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateBusinessReportScheduleRequest = (
  input: CreateBusinessReportScheduleRequest,
  context: __SerdeContext
): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.ContentRange !== undefined &&
      input.ContentRange !== null && {
        ContentRange: serializeAws_json1_1BusinessReportContentRange(input.ContentRange, context),
      }),
    ...(input.Format !== undefined && input.Format !== null && { Format: input.Format }),
    ...(input.Recurrence !== undefined &&
      input.Recurrence !== null && {
        Recurrence: serializeAws_json1_1BusinessReportRecurrence(input.Recurrence, context),
      }),
    ...(input.S3BucketName !== undefined && input.S3BucketName !== null && { S3BucketName: input.S3BucketName }),
    ...(input.S3KeyPrefix !== undefined && input.S3KeyPrefix !== null && { S3KeyPrefix: input.S3KeyPrefix }),
    ...(input.ScheduleName !== undefined && input.ScheduleName !== null && { ScheduleName: input.ScheduleName }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateConferenceProviderRequest = (
  input: CreateConferenceProviderRequest,
  context: __SerdeContext
): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.ConferenceProviderName !== undefined &&
      input.ConferenceProviderName !== null && { ConferenceProviderName: input.ConferenceProviderName }),
    ...(input.ConferenceProviderType !== undefined &&
      input.ConferenceProviderType !== null && { ConferenceProviderType: input.ConferenceProviderType }),
    ...(input.IPDialIn !== undefined &&
      input.IPDialIn !== null && { IPDialIn: serializeAws_json1_1IPDialIn(input.IPDialIn, context) }),
    ...(input.MeetingSetting !== undefined &&
      input.MeetingSetting !== null && {
        MeetingSetting: serializeAws_json1_1MeetingSetting(input.MeetingSetting, context),
      }),
    ...(input.PSTNDialIn !== undefined &&
      input.PSTNDialIn !== null && { PSTNDialIn: serializeAws_json1_1PSTNDialIn(input.PSTNDialIn, context) }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateContactRequest = (input: CreateContactRequest, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.DisplayName !== undefined && input.DisplayName !== null && { DisplayName: input.DisplayName }),
    ...(input.FirstName !== undefined && input.FirstName !== null && { FirstName: input.FirstName }),
    ...(input.LastName !== undefined && input.LastName !== null && { LastName: input.LastName }),
    ...(input.PhoneNumber !== undefined && input.PhoneNumber !== null && { PhoneNumber: input.PhoneNumber }),
    ...(input.PhoneNumbers !== undefined &&
      input.PhoneNumbers !== null && {
        PhoneNumbers: serializeAws_json1_1PhoneNumberList(input.PhoneNumbers, context),
      }),
    ...(input.SipAddresses !== undefined &&
      input.SipAddresses !== null && { SipAddresses: serializeAws_json1_1SipAddressList(input.SipAddresses, context) }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateEndOfMeetingReminder = (
  input: CreateEndOfMeetingReminder,
  context: __SerdeContext
): any => {
  return {
    ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
    ...(input.ReminderAtMinutes !== undefined &&
      input.ReminderAtMinutes !== null && {
        ReminderAtMinutes: serializeAws_json1_1EndOfMeetingReminderMinutesList(input.ReminderAtMinutes, context),
      }),
    ...(input.ReminderType !== undefined && input.ReminderType !== null && { ReminderType: input.ReminderType }),
  };
};

const serializeAws_json1_1CreateGatewayGroupRequest = (
  input: CreateGatewayGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateInstantBooking = (input: CreateInstantBooking, context: __SerdeContext): any => {
  return {
    ...(input.DurationInMinutes !== undefined &&
      input.DurationInMinutes !== null && { DurationInMinutes: input.DurationInMinutes }),
    ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
  };
};

const serializeAws_json1_1CreateMeetingRoomConfiguration = (
  input: CreateMeetingRoomConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.EndOfMeetingReminder !== undefined &&
      input.EndOfMeetingReminder !== null && {
        EndOfMeetingReminder: serializeAws_json1_1CreateEndOfMeetingReminder(input.EndOfMeetingReminder, context),
      }),
    ...(input.InstantBooking !== undefined &&
      input.InstantBooking !== null && {
        InstantBooking: serializeAws_json1_1CreateInstantBooking(input.InstantBooking, context),
      }),
    ...(input.RequireCheckIn !== undefined &&
      input.RequireCheckIn !== null && {
        RequireCheckIn: serializeAws_json1_1CreateRequireCheckIn(input.RequireCheckIn, context),
      }),
    ...(input.RoomUtilizationMetricsEnabled !== undefined &&
      input.RoomUtilizationMetricsEnabled !== null && {
        RoomUtilizationMetricsEnabled: input.RoomUtilizationMetricsEnabled,
      }),
  };
};

const serializeAws_json1_1CreateNetworkProfileRequest = (
  input: CreateNetworkProfileRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateAuthorityArn !== undefined &&
      input.CertificateAuthorityArn !== null && { CertificateAuthorityArn: input.CertificateAuthorityArn }),
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.CurrentPassword !== undefined &&
      input.CurrentPassword !== null && { CurrentPassword: input.CurrentPassword }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.EapMethod !== undefined && input.EapMethod !== null && { EapMethod: input.EapMethod }),
    ...(input.NetworkProfileName !== undefined &&
      input.NetworkProfileName !== null && { NetworkProfileName: input.NetworkProfileName }),
    ...(input.NextPassword !== undefined && input.NextPassword !== null && { NextPassword: input.NextPassword }),
    ...(input.SecurityType !== undefined && input.SecurityType !== null && { SecurityType: input.SecurityType }),
    ...(input.Ssid !== undefined && input.Ssid !== null && { Ssid: input.Ssid }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.TrustAnchors !== undefined &&
      input.TrustAnchors !== null && {
        TrustAnchors: serializeAws_json1_1TrustAnchorList(input.TrustAnchors, context),
      }),
  };
};

const serializeAws_json1_1CreateProfileRequest = (input: CreateProfileRequest, context: __SerdeContext): any => {
  return {
    ...(input.Address !== undefined && input.Address !== null && { Address: input.Address }),
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.DataRetentionOptIn !== undefined &&
      input.DataRetentionOptIn !== null && { DataRetentionOptIn: input.DataRetentionOptIn }),
    ...(input.DistanceUnit !== undefined && input.DistanceUnit !== null && { DistanceUnit: input.DistanceUnit }),
    ...(input.Locale !== undefined && input.Locale !== null && { Locale: input.Locale }),
    ...(input.MaxVolumeLimit !== undefined &&
      input.MaxVolumeLimit !== null && { MaxVolumeLimit: input.MaxVolumeLimit }),
    ...(input.MeetingRoomConfiguration !== undefined &&
      input.MeetingRoomConfiguration !== null && {
        MeetingRoomConfiguration: serializeAws_json1_1CreateMeetingRoomConfiguration(
          input.MeetingRoomConfiguration,
          context
        ),
      }),
    ...(input.PSTNEnabled !== undefined && input.PSTNEnabled !== null && { PSTNEnabled: input.PSTNEnabled }),
    ...(input.ProfileName !== undefined && input.ProfileName !== null && { ProfileName: input.ProfileName }),
    ...(input.SetupModeDisabled !== undefined &&
      input.SetupModeDisabled !== null && { SetupModeDisabled: input.SetupModeDisabled }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.TemperatureUnit !== undefined &&
      input.TemperatureUnit !== null && { TemperatureUnit: input.TemperatureUnit }),
    ...(input.Timezone !== undefined && input.Timezone !== null && { Timezone: input.Timezone }),
    ...(input.WakeWord !== undefined && input.WakeWord !== null && { WakeWord: input.WakeWord }),
  };
};

const serializeAws_json1_1CreateRequireCheckIn = (input: CreateRequireCheckIn, context: __SerdeContext): any => {
  return {
    ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
    ...(input.ReleaseAfterMinutes !== undefined &&
      input.ReleaseAfterMinutes !== null && { ReleaseAfterMinutes: input.ReleaseAfterMinutes }),
  };
};

const serializeAws_json1_1CreateRoomRequest = (input: CreateRoomRequest, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.ProfileArn !== undefined && input.ProfileArn !== null && { ProfileArn: input.ProfileArn }),
    ...(input.ProviderCalendarId !== undefined &&
      input.ProviderCalendarId !== null && { ProviderCalendarId: input.ProviderCalendarId }),
    ...(input.RoomName !== undefined && input.RoomName !== null && { RoomName: input.RoomName }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateSkillGroupRequest = (input: CreateSkillGroupRequest, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.SkillGroupName !== undefined &&
      input.SkillGroupName !== null && { SkillGroupName: input.SkillGroupName }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateUserRequest = (input: CreateUserRequest, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.Email !== undefined && input.Email !== null && { Email: input.Email }),
    ...(input.FirstName !== undefined && input.FirstName !== null && { FirstName: input.FirstName }),
    ...(input.LastName !== undefined && input.LastName !== null && { LastName: input.LastName }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.UserId !== undefined && input.UserId !== null && { UserId: input.UserId }),
  };
};

const serializeAws_json1_1DeleteAddressBookRequest = (
  input: DeleteAddressBookRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AddressBookArn !== undefined &&
      input.AddressBookArn !== null && { AddressBookArn: input.AddressBookArn }),
  };
};

const serializeAws_json1_1DeleteBusinessReportScheduleRequest = (
  input: DeleteBusinessReportScheduleRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ScheduleArn !== undefined && input.ScheduleArn !== null && { ScheduleArn: input.ScheduleArn }),
  };
};

const serializeAws_json1_1DeleteConferenceProviderRequest = (
  input: DeleteConferenceProviderRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConferenceProviderArn !== undefined &&
      input.ConferenceProviderArn !== null && { ConferenceProviderArn: input.ConferenceProviderArn }),
  };
};

const serializeAws_json1_1DeleteContactRequest = (input: DeleteContactRequest, context: __SerdeContext): any => {
  return {
    ...(input.ContactArn !== undefined && input.ContactArn !== null && { ContactArn: input.ContactArn }),
  };
};

const serializeAws_json1_1DeleteDeviceRequest = (input: DeleteDeviceRequest, context: __SerdeContext): any => {
  return {
    ...(input.DeviceArn !== undefined && input.DeviceArn !== null && { DeviceArn: input.DeviceArn }),
  };
};

const serializeAws_json1_1DeleteDeviceUsageDataRequest = (
  input: DeleteDeviceUsageDataRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeviceArn !== undefined && input.DeviceArn !== null && { DeviceArn: input.DeviceArn }),
    ...(input.DeviceUsageType !== undefined &&
      input.DeviceUsageType !== null && { DeviceUsageType: input.DeviceUsageType }),
  };
};

const serializeAws_json1_1DeleteGatewayGroupRequest = (
  input: DeleteGatewayGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.GatewayGroupArn !== undefined &&
      input.GatewayGroupArn !== null && { GatewayGroupArn: input.GatewayGroupArn }),
  };
};

const serializeAws_json1_1DeleteNetworkProfileRequest = (
  input: DeleteNetworkProfileRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.NetworkProfileArn !== undefined &&
      input.NetworkProfileArn !== null && { NetworkProfileArn: input.NetworkProfileArn }),
  };
};

const serializeAws_json1_1DeleteProfileRequest = (input: DeleteProfileRequest, context: __SerdeContext): any => {
  return {
    ...(input.ProfileArn !== undefined && input.ProfileArn !== null && { ProfileArn: input.ProfileArn }),
  };
};

const serializeAws_json1_1DeleteRoomRequest = (input: DeleteRoomRequest, context: __SerdeContext): any => {
  return {
    ...(input.RoomArn !== undefined && input.RoomArn !== null && { RoomArn: input.RoomArn }),
  };
};

const serializeAws_json1_1DeleteRoomSkillParameterRequest = (
  input: DeleteRoomSkillParameterRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ParameterKey !== undefined && input.ParameterKey !== null && { ParameterKey: input.ParameterKey }),
    ...(input.RoomArn !== undefined && input.RoomArn !== null && { RoomArn: input.RoomArn }),
    ...(input.SkillId !== undefined && input.SkillId !== null && { SkillId: input.SkillId }),
  };
};

const serializeAws_json1_1DeleteSkillAuthorizationRequest = (
  input: DeleteSkillAuthorizationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.RoomArn !== undefined && input.RoomArn !== null && { RoomArn: input.RoomArn }),
    ...(input.SkillId !== undefined && input.SkillId !== null && { SkillId: input.SkillId }),
  };
};

const serializeAws_json1_1DeleteSkillGroupRequest = (input: DeleteSkillGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.SkillGroupArn !== undefined && input.SkillGroupArn !== null && { SkillGroupArn: input.SkillGroupArn }),
  };
};

const serializeAws_json1_1DeleteUserRequest = (input: DeleteUserRequest, context: __SerdeContext): any => {
  return {
    ...(input.EnrollmentId !== undefined && input.EnrollmentId !== null && { EnrollmentId: input.EnrollmentId }),
    ...(input.UserArn !== undefined && input.UserArn !== null && { UserArn: input.UserArn }),
  };
};

const serializeAws_json1_1DisassociateContactFromAddressBookRequest = (
  input: DisassociateContactFromAddressBookRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AddressBookArn !== undefined &&
      input.AddressBookArn !== null && { AddressBookArn: input.AddressBookArn }),
    ...(input.ContactArn !== undefined && input.ContactArn !== null && { ContactArn: input.ContactArn }),
  };
};

const serializeAws_json1_1DisassociateDeviceFromRoomRequest = (
  input: DisassociateDeviceFromRoomRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeviceArn !== undefined && input.DeviceArn !== null && { DeviceArn: input.DeviceArn }),
  };
};

const serializeAws_json1_1DisassociateSkillFromSkillGroupRequest = (
  input: DisassociateSkillFromSkillGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.SkillGroupArn !== undefined && input.SkillGroupArn !== null && { SkillGroupArn: input.SkillGroupArn }),
    ...(input.SkillId !== undefined && input.SkillId !== null && { SkillId: input.SkillId }),
  };
};

const serializeAws_json1_1DisassociateSkillFromUsersRequest = (
  input: DisassociateSkillFromUsersRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.SkillId !== undefined && input.SkillId !== null && { SkillId: input.SkillId }),
  };
};

const serializeAws_json1_1DisassociateSkillGroupFromRoomRequest = (
  input: DisassociateSkillGroupFromRoomRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.RoomArn !== undefined && input.RoomArn !== null && { RoomArn: input.RoomArn }),
    ...(input.SkillGroupArn !== undefined && input.SkillGroupArn !== null && { SkillGroupArn: input.SkillGroupArn }),
  };
};

const serializeAws_json1_1EndOfMeetingReminderMinutesList = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1Features = (input: (Feature | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1Filter = (input: Filter, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.Values !== undefined &&
      input.Values !== null && { Values: serializeAws_json1_1FilterValueList(input.Values, context) }),
  };
};

const serializeAws_json1_1FilterList = (input: Filter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Filter(entry, context);
    });
};

const serializeAws_json1_1FilterValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1ForgetSmartHomeAppliancesRequest = (
  input: ForgetSmartHomeAppliancesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.RoomArn !== undefined && input.RoomArn !== null && { RoomArn: input.RoomArn }),
  };
};

const serializeAws_json1_1GetAddressBookRequest = (input: GetAddressBookRequest, context: __SerdeContext): any => {
  return {
    ...(input.AddressBookArn !== undefined &&
      input.AddressBookArn !== null && { AddressBookArn: input.AddressBookArn }),
  };
};

const serializeAws_json1_1GetConferencePreferenceRequest = (
  input: GetConferencePreferenceRequest,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1GetConferenceProviderRequest = (
  input: GetConferenceProviderRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConferenceProviderArn !== undefined &&
      input.ConferenceProviderArn !== null && { ConferenceProviderArn: input.ConferenceProviderArn }),
  };
};

const serializeAws_json1_1GetContactRequest = (input: GetContactRequest, context: __SerdeContext): any => {
  return {
    ...(input.ContactArn !== undefined && input.ContactArn !== null && { ContactArn: input.ContactArn }),
  };
};

const serializeAws_json1_1GetDeviceRequest = (input: GetDeviceRequest, context: __SerdeContext): any => {
  return {
    ...(input.DeviceArn !== undefined && input.DeviceArn !== null && { DeviceArn: input.DeviceArn }),
  };
};

const serializeAws_json1_1GetGatewayGroupRequest = (input: GetGatewayGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.GatewayGroupArn !== undefined &&
      input.GatewayGroupArn !== null && { GatewayGroupArn: input.GatewayGroupArn }),
  };
};

const serializeAws_json1_1GetGatewayRequest = (input: GetGatewayRequest, context: __SerdeContext): any => {
  return {
    ...(input.GatewayArn !== undefined && input.GatewayArn !== null && { GatewayArn: input.GatewayArn }),
  };
};

const serializeAws_json1_1GetInvitationConfigurationRequest = (
  input: GetInvitationConfigurationRequest,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1GetNetworkProfileRequest = (
  input: GetNetworkProfileRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.NetworkProfileArn !== undefined &&
      input.NetworkProfileArn !== null && { NetworkProfileArn: input.NetworkProfileArn }),
  };
};

const serializeAws_json1_1GetProfileRequest = (input: GetProfileRequest, context: __SerdeContext): any => {
  return {
    ...(input.ProfileArn !== undefined && input.ProfileArn !== null && { ProfileArn: input.ProfileArn }),
  };
};

const serializeAws_json1_1GetRoomRequest = (input: GetRoomRequest, context: __SerdeContext): any => {
  return {
    ...(input.RoomArn !== undefined && input.RoomArn !== null && { RoomArn: input.RoomArn }),
  };
};

const serializeAws_json1_1GetRoomSkillParameterRequest = (
  input: GetRoomSkillParameterRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ParameterKey !== undefined && input.ParameterKey !== null && { ParameterKey: input.ParameterKey }),
    ...(input.RoomArn !== undefined && input.RoomArn !== null && { RoomArn: input.RoomArn }),
    ...(input.SkillId !== undefined && input.SkillId !== null && { SkillId: input.SkillId }),
  };
};

const serializeAws_json1_1GetSkillGroupRequest = (input: GetSkillGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.SkillGroupArn !== undefined && input.SkillGroupArn !== null && { SkillGroupArn: input.SkillGroupArn }),
  };
};

const serializeAws_json1_1IPDialIn = (input: IPDialIn, context: __SerdeContext): any => {
  return {
    ...(input.CommsProtocol !== undefined && input.CommsProtocol !== null && { CommsProtocol: input.CommsProtocol }),
    ...(input.Endpoint !== undefined && input.Endpoint !== null && { Endpoint: input.Endpoint }),
  };
};

const serializeAws_json1_1ListBusinessReportSchedulesRequest = (
  input: ListBusinessReportSchedulesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListConferenceProvidersRequest = (
  input: ListConferenceProvidersRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListDeviceEventsRequest = (input: ListDeviceEventsRequest, context: __SerdeContext): any => {
  return {
    ...(input.DeviceArn !== undefined && input.DeviceArn !== null && { DeviceArn: input.DeviceArn }),
    ...(input.EventType !== undefined && input.EventType !== null && { EventType: input.EventType }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListGatewayGroupsRequest = (
  input: ListGatewayGroupsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListGatewaysRequest = (input: ListGatewaysRequest, context: __SerdeContext): any => {
  return {
    ...(input.GatewayGroupArn !== undefined &&
      input.GatewayGroupArn !== null && { GatewayGroupArn: input.GatewayGroupArn }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListSkillsRequest = (input: ListSkillsRequest, context: __SerdeContext): any => {
  return {
    ...(input.EnablementType !== undefined &&
      input.EnablementType !== null && { EnablementType: input.EnablementType }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.SkillGroupArn !== undefined && input.SkillGroupArn !== null && { SkillGroupArn: input.SkillGroupArn }),
    ...(input.SkillType !== undefined && input.SkillType !== null && { SkillType: input.SkillType }),
  };
};

const serializeAws_json1_1ListSkillsStoreCategoriesRequest = (
  input: ListSkillsStoreCategoriesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListSkillsStoreSkillsByCategoryRequest = (
  input: ListSkillsStoreSkillsByCategoryRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CategoryId !== undefined && input.CategoryId !== null && { CategoryId: input.CategoryId }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListSmartHomeAppliancesRequest = (
  input: ListSmartHomeAppliancesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.RoomArn !== undefined && input.RoomArn !== null && { RoomArn: input.RoomArn }),
  };
};

const serializeAws_json1_1ListTagsRequest = (input: ListTagsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Arn !== undefined && input.Arn !== null && { Arn: input.Arn }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1MeetingSetting = (input: MeetingSetting, context: __SerdeContext): any => {
  return {
    ...(input.RequirePin !== undefined && input.RequirePin !== null && { RequirePin: input.RequirePin }),
  };
};

const serializeAws_json1_1PhoneNumber = (input: PhoneNumber, context: __SerdeContext): any => {
  return {
    ...(input.Number !== undefined && input.Number !== null && { Number: input.Number }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  };
};

const serializeAws_json1_1PhoneNumberList = (input: PhoneNumber[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1PhoneNumber(entry, context);
    });
};

const serializeAws_json1_1PSTNDialIn = (input: PSTNDialIn, context: __SerdeContext): any => {
  return {
    ...(input.CountryCode !== undefined && input.CountryCode !== null && { CountryCode: input.CountryCode }),
    ...(input.OneClickIdDelay !== undefined &&
      input.OneClickIdDelay !== null && { OneClickIdDelay: input.OneClickIdDelay }),
    ...(input.OneClickPinDelay !== undefined &&
      input.OneClickPinDelay !== null && { OneClickPinDelay: input.OneClickPinDelay }),
    ...(input.PhoneNumber !== undefined && input.PhoneNumber !== null && { PhoneNumber: input.PhoneNumber }),
  };
};

const serializeAws_json1_1PutConferencePreferenceRequest = (
  input: PutConferencePreferenceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConferencePreference !== undefined &&
      input.ConferencePreference !== null && {
        ConferencePreference: serializeAws_json1_1ConferencePreference(input.ConferencePreference, context),
      }),
  };
};

const serializeAws_json1_1PutInvitationConfigurationRequest = (
  input: PutInvitationConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ContactEmail !== undefined && input.ContactEmail !== null && { ContactEmail: input.ContactEmail }),
    ...(input.OrganizationName !== undefined &&
      input.OrganizationName !== null && { OrganizationName: input.OrganizationName }),
    ...(input.PrivateSkillIds !== undefined &&
      input.PrivateSkillIds !== null && {
        PrivateSkillIds: serializeAws_json1_1ShortSkillIdList(input.PrivateSkillIds, context),
      }),
  };
};

const serializeAws_json1_1PutRoomSkillParameterRequest = (
  input: PutRoomSkillParameterRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.RoomArn !== undefined && input.RoomArn !== null && { RoomArn: input.RoomArn }),
    ...(input.RoomSkillParameter !== undefined &&
      input.RoomSkillParameter !== null && {
        RoomSkillParameter: serializeAws_json1_1RoomSkillParameter(input.RoomSkillParameter, context),
      }),
    ...(input.SkillId !== undefined && input.SkillId !== null && { SkillId: input.SkillId }),
  };
};

const serializeAws_json1_1PutSkillAuthorizationRequest = (
  input: PutSkillAuthorizationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AuthorizationResult !== undefined &&
      input.AuthorizationResult !== null && {
        AuthorizationResult: serializeAws_json1_1AuthorizationResult(input.AuthorizationResult, context),
      }),
    ...(input.RoomArn !== undefined && input.RoomArn !== null && { RoomArn: input.RoomArn }),
    ...(input.SkillId !== undefined && input.SkillId !== null && { SkillId: input.SkillId }),
  };
};

const serializeAws_json1_1RegisterAVSDeviceRequest = (
  input: RegisterAVSDeviceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AmazonId !== undefined && input.AmazonId !== null && { AmazonId: input.AmazonId }),
    ...(input.ClientId !== undefined && input.ClientId !== null && { ClientId: input.ClientId }),
    ...(input.DeviceSerialNumber !== undefined &&
      input.DeviceSerialNumber !== null && { DeviceSerialNumber: input.DeviceSerialNumber }),
    ...(input.ProductId !== undefined && input.ProductId !== null && { ProductId: input.ProductId }),
    ...(input.RoomArn !== undefined && input.RoomArn !== null && { RoomArn: input.RoomArn }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.UserCode !== undefined && input.UserCode !== null && { UserCode: input.UserCode }),
  };
};

const serializeAws_json1_1RejectSkillRequest = (input: RejectSkillRequest, context: __SerdeContext): any => {
  return {
    ...(input.SkillId !== undefined && input.SkillId !== null && { SkillId: input.SkillId }),
  };
};

const serializeAws_json1_1ResolveRoomRequest = (input: ResolveRoomRequest, context: __SerdeContext): any => {
  return {
    ...(input.SkillId !== undefined && input.SkillId !== null && { SkillId: input.SkillId }),
    ...(input.UserId !== undefined && input.UserId !== null && { UserId: input.UserId }),
  };
};

const serializeAws_json1_1RevokeInvitationRequest = (input: RevokeInvitationRequest, context: __SerdeContext): any => {
  return {
    ...(input.EnrollmentId !== undefined && input.EnrollmentId !== null && { EnrollmentId: input.EnrollmentId }),
    ...(input.UserArn !== undefined && input.UserArn !== null && { UserArn: input.UserArn }),
  };
};

const serializeAws_json1_1RoomSkillParameter = (input: RoomSkillParameter, context: __SerdeContext): any => {
  return {
    ...(input.ParameterKey !== undefined && input.ParameterKey !== null && { ParameterKey: input.ParameterKey }),
    ...(input.ParameterValue !== undefined &&
      input.ParameterValue !== null && { ParameterValue: input.ParameterValue }),
  };
};

const serializeAws_json1_1SearchAddressBooksRequest = (
  input: SearchAddressBooksRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters !== undefined &&
      input.Filters !== null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.SortCriteria !== undefined &&
      input.SortCriteria !== null && { SortCriteria: serializeAws_json1_1SortList(input.SortCriteria, context) }),
  };
};

const serializeAws_json1_1SearchContactsRequest = (input: SearchContactsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters !== undefined &&
      input.Filters !== null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.SortCriteria !== undefined &&
      input.SortCriteria !== null && { SortCriteria: serializeAws_json1_1SortList(input.SortCriteria, context) }),
  };
};

const serializeAws_json1_1SearchDevicesRequest = (input: SearchDevicesRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters !== undefined &&
      input.Filters !== null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.SortCriteria !== undefined &&
      input.SortCriteria !== null && { SortCriteria: serializeAws_json1_1SortList(input.SortCriteria, context) }),
  };
};

const serializeAws_json1_1SearchNetworkProfilesRequest = (
  input: SearchNetworkProfilesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters !== undefined &&
      input.Filters !== null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.SortCriteria !== undefined &&
      input.SortCriteria !== null && { SortCriteria: serializeAws_json1_1SortList(input.SortCriteria, context) }),
  };
};

const serializeAws_json1_1SearchProfilesRequest = (input: SearchProfilesRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters !== undefined &&
      input.Filters !== null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.SortCriteria !== undefined &&
      input.SortCriteria !== null && { SortCriteria: serializeAws_json1_1SortList(input.SortCriteria, context) }),
  };
};

const serializeAws_json1_1SearchRoomsRequest = (input: SearchRoomsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters !== undefined &&
      input.Filters !== null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.SortCriteria !== undefined &&
      input.SortCriteria !== null && { SortCriteria: serializeAws_json1_1SortList(input.SortCriteria, context) }),
  };
};

const serializeAws_json1_1SearchSkillGroupsRequest = (
  input: SearchSkillGroupsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters !== undefined &&
      input.Filters !== null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.SortCriteria !== undefined &&
      input.SortCriteria !== null && { SortCriteria: serializeAws_json1_1SortList(input.SortCriteria, context) }),
  };
};

const serializeAws_json1_1SearchUsersRequest = (input: SearchUsersRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters !== undefined &&
      input.Filters !== null && { Filters: serializeAws_json1_1FilterList(input.Filters, context) }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.SortCriteria !== undefined &&
      input.SortCriteria !== null && { SortCriteria: serializeAws_json1_1SortList(input.SortCriteria, context) }),
  };
};

const serializeAws_json1_1SendAnnouncementRequest = (input: SendAnnouncementRequest, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.Content !== undefined &&
      input.Content !== null && { Content: serializeAws_json1_1Content(input.Content, context) }),
    ...(input.RoomFilters !== undefined &&
      input.RoomFilters !== null && { RoomFilters: serializeAws_json1_1FilterList(input.RoomFilters, context) }),
    ...(input.TimeToLiveInSeconds !== undefined &&
      input.TimeToLiveInSeconds !== null && { TimeToLiveInSeconds: input.TimeToLiveInSeconds }),
  };
};

const serializeAws_json1_1SendInvitationRequest = (input: SendInvitationRequest, context: __SerdeContext): any => {
  return {
    ...(input.UserArn !== undefined && input.UserArn !== null && { UserArn: input.UserArn }),
  };
};

const serializeAws_json1_1ShortSkillIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1SipAddress = (input: SipAddress, context: __SerdeContext): any => {
  return {
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    ...(input.Uri !== undefined && input.Uri !== null && { Uri: input.Uri }),
  };
};

const serializeAws_json1_1SipAddressList = (input: SipAddress[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1SipAddress(entry, context);
    });
};

const serializeAws_json1_1Sort = (input: Sort, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_json1_1SortList = (input: Sort[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Sort(entry, context);
    });
};

const serializeAws_json1_1Ssml = (input: Ssml, context: __SerdeContext): any => {
  return {
    ...(input.Locale !== undefined && input.Locale !== null && { Locale: input.Locale }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_json1_1SsmlList = (input: Ssml[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Ssml(entry, context);
    });
};

const serializeAws_json1_1StartDeviceSyncRequest = (input: StartDeviceSyncRequest, context: __SerdeContext): any => {
  return {
    ...(input.DeviceArn !== undefined && input.DeviceArn !== null && { DeviceArn: input.DeviceArn }),
    ...(input.Features !== undefined &&
      input.Features !== null && { Features: serializeAws_json1_1Features(input.Features, context) }),
    ...(input.RoomArn !== undefined && input.RoomArn !== null && { RoomArn: input.RoomArn }),
  };
};

const serializeAws_json1_1StartSmartHomeApplianceDiscoveryRequest = (
  input: StartSmartHomeApplianceDiscoveryRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.RoomArn !== undefined && input.RoomArn !== null && { RoomArn: input.RoomArn }),
  };
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_json1_1TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Tag(entry, context);
    });
};

const serializeAws_json1_1TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.Arn !== undefined && input.Arn !== null && { Arn: input.Arn }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1Text = (input: Text, context: __SerdeContext): any => {
  return {
    ...(input.Locale !== undefined && input.Locale !== null && { Locale: input.Locale }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_json1_1TextList = (input: Text[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Text(entry, context);
    });
};

const serializeAws_json1_1TrustAnchorList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.Arn !== undefined && input.Arn !== null && { Arn: input.Arn }),
    ...(input.TagKeys !== undefined &&
      input.TagKeys !== null && { TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context) }),
  };
};

const serializeAws_json1_1UpdateAddressBookRequest = (
  input: UpdateAddressBookRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AddressBookArn !== undefined &&
      input.AddressBookArn !== null && { AddressBookArn: input.AddressBookArn }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1UpdateBusinessReportScheduleRequest = (
  input: UpdateBusinessReportScheduleRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Format !== undefined && input.Format !== null && { Format: input.Format }),
    ...(input.Recurrence !== undefined &&
      input.Recurrence !== null && {
        Recurrence: serializeAws_json1_1BusinessReportRecurrence(input.Recurrence, context),
      }),
    ...(input.S3BucketName !== undefined && input.S3BucketName !== null && { S3BucketName: input.S3BucketName }),
    ...(input.S3KeyPrefix !== undefined && input.S3KeyPrefix !== null && { S3KeyPrefix: input.S3KeyPrefix }),
    ...(input.ScheduleArn !== undefined && input.ScheduleArn !== null && { ScheduleArn: input.ScheduleArn }),
    ...(input.ScheduleName !== undefined && input.ScheduleName !== null && { ScheduleName: input.ScheduleName }),
  };
};

const serializeAws_json1_1UpdateConferenceProviderRequest = (
  input: UpdateConferenceProviderRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConferenceProviderArn !== undefined &&
      input.ConferenceProviderArn !== null && { ConferenceProviderArn: input.ConferenceProviderArn }),
    ...(input.ConferenceProviderType !== undefined &&
      input.ConferenceProviderType !== null && { ConferenceProviderType: input.ConferenceProviderType }),
    ...(input.IPDialIn !== undefined &&
      input.IPDialIn !== null && { IPDialIn: serializeAws_json1_1IPDialIn(input.IPDialIn, context) }),
    ...(input.MeetingSetting !== undefined &&
      input.MeetingSetting !== null && {
        MeetingSetting: serializeAws_json1_1MeetingSetting(input.MeetingSetting, context),
      }),
    ...(input.PSTNDialIn !== undefined &&
      input.PSTNDialIn !== null && { PSTNDialIn: serializeAws_json1_1PSTNDialIn(input.PSTNDialIn, context) }),
  };
};

const serializeAws_json1_1UpdateContactRequest = (input: UpdateContactRequest, context: __SerdeContext): any => {
  return {
    ...(input.ContactArn !== undefined && input.ContactArn !== null && { ContactArn: input.ContactArn }),
    ...(input.DisplayName !== undefined && input.DisplayName !== null && { DisplayName: input.DisplayName }),
    ...(input.FirstName !== undefined && input.FirstName !== null && { FirstName: input.FirstName }),
    ...(input.LastName !== undefined && input.LastName !== null && { LastName: input.LastName }),
    ...(input.PhoneNumber !== undefined && input.PhoneNumber !== null && { PhoneNumber: input.PhoneNumber }),
    ...(input.PhoneNumbers !== undefined &&
      input.PhoneNumbers !== null && {
        PhoneNumbers: serializeAws_json1_1PhoneNumberList(input.PhoneNumbers, context),
      }),
    ...(input.SipAddresses !== undefined &&
      input.SipAddresses !== null && { SipAddresses: serializeAws_json1_1SipAddressList(input.SipAddresses, context) }),
  };
};

const serializeAws_json1_1UpdateDeviceRequest = (input: UpdateDeviceRequest, context: __SerdeContext): any => {
  return {
    ...(input.DeviceArn !== undefined && input.DeviceArn !== null && { DeviceArn: input.DeviceArn }),
    ...(input.DeviceName !== undefined && input.DeviceName !== null && { DeviceName: input.DeviceName }),
  };
};

const serializeAws_json1_1UpdateEndOfMeetingReminder = (
  input: UpdateEndOfMeetingReminder,
  context: __SerdeContext
): any => {
  return {
    ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
    ...(input.ReminderAtMinutes !== undefined &&
      input.ReminderAtMinutes !== null && {
        ReminderAtMinutes: serializeAws_json1_1EndOfMeetingReminderMinutesList(input.ReminderAtMinutes, context),
      }),
    ...(input.ReminderType !== undefined && input.ReminderType !== null && { ReminderType: input.ReminderType }),
  };
};

const serializeAws_json1_1UpdateGatewayGroupRequest = (
  input: UpdateGatewayGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.GatewayGroupArn !== undefined &&
      input.GatewayGroupArn !== null && { GatewayGroupArn: input.GatewayGroupArn }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1UpdateGatewayRequest = (input: UpdateGatewayRequest, context: __SerdeContext): any => {
  return {
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.GatewayArn !== undefined && input.GatewayArn !== null && { GatewayArn: input.GatewayArn }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.SoftwareVersion !== undefined &&
      input.SoftwareVersion !== null && { SoftwareVersion: input.SoftwareVersion }),
  };
};

const serializeAws_json1_1UpdateInstantBooking = (input: UpdateInstantBooking, context: __SerdeContext): any => {
  return {
    ...(input.DurationInMinutes !== undefined &&
      input.DurationInMinutes !== null && { DurationInMinutes: input.DurationInMinutes }),
    ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
  };
};

const serializeAws_json1_1UpdateMeetingRoomConfiguration = (
  input: UpdateMeetingRoomConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.EndOfMeetingReminder !== undefined &&
      input.EndOfMeetingReminder !== null && {
        EndOfMeetingReminder: serializeAws_json1_1UpdateEndOfMeetingReminder(input.EndOfMeetingReminder, context),
      }),
    ...(input.InstantBooking !== undefined &&
      input.InstantBooking !== null && {
        InstantBooking: serializeAws_json1_1UpdateInstantBooking(input.InstantBooking, context),
      }),
    ...(input.RequireCheckIn !== undefined &&
      input.RequireCheckIn !== null && {
        RequireCheckIn: serializeAws_json1_1UpdateRequireCheckIn(input.RequireCheckIn, context),
      }),
    ...(input.RoomUtilizationMetricsEnabled !== undefined &&
      input.RoomUtilizationMetricsEnabled !== null && {
        RoomUtilizationMetricsEnabled: input.RoomUtilizationMetricsEnabled,
      }),
  };
};

const serializeAws_json1_1UpdateNetworkProfileRequest = (
  input: UpdateNetworkProfileRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateAuthorityArn !== undefined &&
      input.CertificateAuthorityArn !== null && { CertificateAuthorityArn: input.CertificateAuthorityArn }),
    ...(input.CurrentPassword !== undefined &&
      input.CurrentPassword !== null && { CurrentPassword: input.CurrentPassword }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.NetworkProfileArn !== undefined &&
      input.NetworkProfileArn !== null && { NetworkProfileArn: input.NetworkProfileArn }),
    ...(input.NetworkProfileName !== undefined &&
      input.NetworkProfileName !== null && { NetworkProfileName: input.NetworkProfileName }),
    ...(input.NextPassword !== undefined && input.NextPassword !== null && { NextPassword: input.NextPassword }),
    ...(input.TrustAnchors !== undefined &&
      input.TrustAnchors !== null && {
        TrustAnchors: serializeAws_json1_1TrustAnchorList(input.TrustAnchors, context),
      }),
  };
};

const serializeAws_json1_1UpdateProfileRequest = (input: UpdateProfileRequest, context: __SerdeContext): any => {
  return {
    ...(input.Address !== undefined && input.Address !== null && { Address: input.Address }),
    ...(input.DataRetentionOptIn !== undefined &&
      input.DataRetentionOptIn !== null && { DataRetentionOptIn: input.DataRetentionOptIn }),
    ...(input.DistanceUnit !== undefined && input.DistanceUnit !== null && { DistanceUnit: input.DistanceUnit }),
    ...(input.IsDefault !== undefined && input.IsDefault !== null && { IsDefault: input.IsDefault }),
    ...(input.Locale !== undefined && input.Locale !== null && { Locale: input.Locale }),
    ...(input.MaxVolumeLimit !== undefined &&
      input.MaxVolumeLimit !== null && { MaxVolumeLimit: input.MaxVolumeLimit }),
    ...(input.MeetingRoomConfiguration !== undefined &&
      input.MeetingRoomConfiguration !== null && {
        MeetingRoomConfiguration: serializeAws_json1_1UpdateMeetingRoomConfiguration(
          input.MeetingRoomConfiguration,
          context
        ),
      }),
    ...(input.PSTNEnabled !== undefined && input.PSTNEnabled !== null && { PSTNEnabled: input.PSTNEnabled }),
    ...(input.ProfileArn !== undefined && input.ProfileArn !== null && { ProfileArn: input.ProfileArn }),
    ...(input.ProfileName !== undefined && input.ProfileName !== null && { ProfileName: input.ProfileName }),
    ...(input.SetupModeDisabled !== undefined &&
      input.SetupModeDisabled !== null && { SetupModeDisabled: input.SetupModeDisabled }),
    ...(input.TemperatureUnit !== undefined &&
      input.TemperatureUnit !== null && { TemperatureUnit: input.TemperatureUnit }),
    ...(input.Timezone !== undefined && input.Timezone !== null && { Timezone: input.Timezone }),
    ...(input.WakeWord !== undefined && input.WakeWord !== null && { WakeWord: input.WakeWord }),
  };
};

const serializeAws_json1_1UpdateRequireCheckIn = (input: UpdateRequireCheckIn, context: __SerdeContext): any => {
  return {
    ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
    ...(input.ReleaseAfterMinutes !== undefined &&
      input.ReleaseAfterMinutes !== null && { ReleaseAfterMinutes: input.ReleaseAfterMinutes }),
  };
};

const serializeAws_json1_1UpdateRoomRequest = (input: UpdateRoomRequest, context: __SerdeContext): any => {
  return {
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.ProfileArn !== undefined && input.ProfileArn !== null && { ProfileArn: input.ProfileArn }),
    ...(input.ProviderCalendarId !== undefined &&
      input.ProviderCalendarId !== null && { ProviderCalendarId: input.ProviderCalendarId }),
    ...(input.RoomArn !== undefined && input.RoomArn !== null && { RoomArn: input.RoomArn }),
    ...(input.RoomName !== undefined && input.RoomName !== null && { RoomName: input.RoomName }),
  };
};

const serializeAws_json1_1UpdateSkillGroupRequest = (input: UpdateSkillGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.SkillGroupArn !== undefined && input.SkillGroupArn !== null && { SkillGroupArn: input.SkillGroupArn }),
    ...(input.SkillGroupName !== undefined &&
      input.SkillGroupName !== null && { SkillGroupName: input.SkillGroupName }),
  };
};

const deserializeAws_json1_1AddressBook = (output: any, context: __SerdeContext): AddressBook => {
  return {
    AddressBookArn: __expectString(output.AddressBookArn),
    Description: __expectString(output.Description),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1AddressBookData = (output: any, context: __SerdeContext): AddressBookData => {
  return {
    AddressBookArn: __expectString(output.AddressBookArn),
    Description: __expectString(output.Description),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1AddressBookDataList = (output: any, context: __SerdeContext): AddressBookData[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AddressBookData(entry, context);
    });
};

const deserializeAws_json1_1AlreadyExistsException = (output: any, context: __SerdeContext): AlreadyExistsException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ApproveSkillResponse = (output: any, context: __SerdeContext): ApproveSkillResponse => {
  return {} as any;
};

const deserializeAws_json1_1AssociateContactWithAddressBookResponse = (
  output: any,
  context: __SerdeContext
): AssociateContactWithAddressBookResponse => {
  return {} as any;
};

const deserializeAws_json1_1AssociateDeviceWithNetworkProfileResponse = (
  output: any,
  context: __SerdeContext
): AssociateDeviceWithNetworkProfileResponse => {
  return {} as any;
};

const deserializeAws_json1_1AssociateDeviceWithRoomResponse = (
  output: any,
  context: __SerdeContext
): AssociateDeviceWithRoomResponse => {
  return {} as any;
};

const deserializeAws_json1_1AssociateSkillGroupWithRoomResponse = (
  output: any,
  context: __SerdeContext
): AssociateSkillGroupWithRoomResponse => {
  return {} as any;
};

const deserializeAws_json1_1AssociateSkillWithSkillGroupResponse = (
  output: any,
  context: __SerdeContext
): AssociateSkillWithSkillGroupResponse => {
  return {} as any;
};

const deserializeAws_json1_1AssociateSkillWithUsersResponse = (
  output: any,
  context: __SerdeContext
): AssociateSkillWithUsersResponse => {
  return {} as any;
};

const deserializeAws_json1_1BulletPoints = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1BusinessReport = (output: any, context: __SerdeContext): BusinessReport => {
  return {
    DeliveryTime:
      output.DeliveryTime !== undefined && output.DeliveryTime !== null
        ? new Date(Math.round(output.DeliveryTime * 1000))
        : undefined,
    DownloadUrl: __expectString(output.DownloadUrl),
    FailureCode: __expectString(output.FailureCode),
    S3Location:
      output.S3Location !== undefined && output.S3Location !== null
        ? deserializeAws_json1_1BusinessReportS3Location(output.S3Location, context)
        : undefined,
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1BusinessReportContentRange = (
  output: any,
  context: __SerdeContext
): BusinessReportContentRange => {
  return {
    Interval: __expectString(output.Interval),
  } as any;
};

const deserializeAws_json1_1BusinessReportRecurrence = (
  output: any,
  context: __SerdeContext
): BusinessReportRecurrence => {
  return {
    StartDate: __expectString(output.StartDate),
  } as any;
};

const deserializeAws_json1_1BusinessReportS3Location = (
  output: any,
  context: __SerdeContext
): BusinessReportS3Location => {
  return {
    BucketName: __expectString(output.BucketName),
    Path: __expectString(output.Path),
  } as any;
};

const deserializeAws_json1_1BusinessReportSchedule = (output: any, context: __SerdeContext): BusinessReportSchedule => {
  return {
    ContentRange:
      output.ContentRange !== undefined && output.ContentRange !== null
        ? deserializeAws_json1_1BusinessReportContentRange(output.ContentRange, context)
        : undefined,
    Format: __expectString(output.Format),
    LastBusinessReport:
      output.LastBusinessReport !== undefined && output.LastBusinessReport !== null
        ? deserializeAws_json1_1BusinessReport(output.LastBusinessReport, context)
        : undefined,
    Recurrence:
      output.Recurrence !== undefined && output.Recurrence !== null
        ? deserializeAws_json1_1BusinessReportRecurrence(output.Recurrence, context)
        : undefined,
    S3BucketName: __expectString(output.S3BucketName),
    S3KeyPrefix: __expectString(output.S3KeyPrefix),
    ScheduleArn: __expectString(output.ScheduleArn),
    ScheduleName: __expectString(output.ScheduleName),
  } as any;
};

const deserializeAws_json1_1BusinessReportScheduleList = (
  output: any,
  context: __SerdeContext
): BusinessReportSchedule[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1BusinessReportSchedule(entry, context);
    });
};

const deserializeAws_json1_1Category = (output: any, context: __SerdeContext): Category => {
  return {
    CategoryId: __expectInt(output.CategoryId),
    CategoryName: __expectString(output.CategoryName),
  } as any;
};

const deserializeAws_json1_1CategoryList = (output: any, context: __SerdeContext): Category[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Category(entry, context);
    });
};

const deserializeAws_json1_1ConcurrentModificationException = (
  output: any,
  context: __SerdeContext
): ConcurrentModificationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ConferencePreference = (output: any, context: __SerdeContext): ConferencePreference => {
  return {
    DefaultConferenceProviderArn: __expectString(output.DefaultConferenceProviderArn),
  } as any;
};

const deserializeAws_json1_1ConferenceProvider = (output: any, context: __SerdeContext): ConferenceProvider => {
  return {
    Arn: __expectString(output.Arn),
    IPDialIn:
      output.IPDialIn !== undefined && output.IPDialIn !== null
        ? deserializeAws_json1_1IPDialIn(output.IPDialIn, context)
        : undefined,
    MeetingSetting:
      output.MeetingSetting !== undefined && output.MeetingSetting !== null
        ? deserializeAws_json1_1MeetingSetting(output.MeetingSetting, context)
        : undefined,
    Name: __expectString(output.Name),
    PSTNDialIn:
      output.PSTNDialIn !== undefined && output.PSTNDialIn !== null
        ? deserializeAws_json1_1PSTNDialIn(output.PSTNDialIn, context)
        : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1ConferenceProvidersList = (output: any, context: __SerdeContext): ConferenceProvider[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ConferenceProvider(entry, context);
    });
};

const deserializeAws_json1_1Contact = (output: any, context: __SerdeContext): Contact => {
  return {
    ContactArn: __expectString(output.ContactArn),
    DisplayName: __expectString(output.DisplayName),
    FirstName: __expectString(output.FirstName),
    LastName: __expectString(output.LastName),
    PhoneNumber: __expectString(output.PhoneNumber),
    PhoneNumbers:
      output.PhoneNumbers !== undefined && output.PhoneNumbers !== null
        ? deserializeAws_json1_1PhoneNumberList(output.PhoneNumbers, context)
        : undefined,
    SipAddresses:
      output.SipAddresses !== undefined && output.SipAddresses !== null
        ? deserializeAws_json1_1SipAddressList(output.SipAddresses, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ContactData = (output: any, context: __SerdeContext): ContactData => {
  return {
    ContactArn: __expectString(output.ContactArn),
    DisplayName: __expectString(output.DisplayName),
    FirstName: __expectString(output.FirstName),
    LastName: __expectString(output.LastName),
    PhoneNumber: __expectString(output.PhoneNumber),
    PhoneNumbers:
      output.PhoneNumbers !== undefined && output.PhoneNumbers !== null
        ? deserializeAws_json1_1PhoneNumberList(output.PhoneNumbers, context)
        : undefined,
    SipAddresses:
      output.SipAddresses !== undefined && output.SipAddresses !== null
        ? deserializeAws_json1_1SipAddressList(output.SipAddresses, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ContactDataList = (output: any, context: __SerdeContext): ContactData[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ContactData(entry, context);
    });
};

const deserializeAws_json1_1CreateAddressBookResponse = (
  output: any,
  context: __SerdeContext
): CreateAddressBookResponse => {
  return {
    AddressBookArn: __expectString(output.AddressBookArn),
  } as any;
};

const deserializeAws_json1_1CreateBusinessReportScheduleResponse = (
  output: any,
  context: __SerdeContext
): CreateBusinessReportScheduleResponse => {
  return {
    ScheduleArn: __expectString(output.ScheduleArn),
  } as any;
};

const deserializeAws_json1_1CreateConferenceProviderResponse = (
  output: any,
  context: __SerdeContext
): CreateConferenceProviderResponse => {
  return {
    ConferenceProviderArn: __expectString(output.ConferenceProviderArn),
  } as any;
};

const deserializeAws_json1_1CreateContactResponse = (output: any, context: __SerdeContext): CreateContactResponse => {
  return {
    ContactArn: __expectString(output.ContactArn),
  } as any;
};

const deserializeAws_json1_1CreateGatewayGroupResponse = (
  output: any,
  context: __SerdeContext
): CreateGatewayGroupResponse => {
  return {
    GatewayGroupArn: __expectString(output.GatewayGroupArn),
  } as any;
};

const deserializeAws_json1_1CreateNetworkProfileResponse = (
  output: any,
  context: __SerdeContext
): CreateNetworkProfileResponse => {
  return {
    NetworkProfileArn: __expectString(output.NetworkProfileArn),
  } as any;
};

const deserializeAws_json1_1CreateProfileResponse = (output: any, context: __SerdeContext): CreateProfileResponse => {
  return {
    ProfileArn: __expectString(output.ProfileArn),
  } as any;
};

const deserializeAws_json1_1CreateRoomResponse = (output: any, context: __SerdeContext): CreateRoomResponse => {
  return {
    RoomArn: __expectString(output.RoomArn),
  } as any;
};

const deserializeAws_json1_1CreateSkillGroupResponse = (
  output: any,
  context: __SerdeContext
): CreateSkillGroupResponse => {
  return {
    SkillGroupArn: __expectString(output.SkillGroupArn),
  } as any;
};

const deserializeAws_json1_1CreateUserResponse = (output: any, context: __SerdeContext): CreateUserResponse => {
  return {
    UserArn: __expectString(output.UserArn),
  } as any;
};

const deserializeAws_json1_1DeleteAddressBookResponse = (
  output: any,
  context: __SerdeContext
): DeleteAddressBookResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteBusinessReportScheduleResponse = (
  output: any,
  context: __SerdeContext
): DeleteBusinessReportScheduleResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteConferenceProviderResponse = (
  output: any,
  context: __SerdeContext
): DeleteConferenceProviderResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteContactResponse = (output: any, context: __SerdeContext): DeleteContactResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteDeviceResponse = (output: any, context: __SerdeContext): DeleteDeviceResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteDeviceUsageDataResponse = (
  output: any,
  context: __SerdeContext
): DeleteDeviceUsageDataResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteGatewayGroupResponse = (
  output: any,
  context: __SerdeContext
): DeleteGatewayGroupResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteNetworkProfileResponse = (
  output: any,
  context: __SerdeContext
): DeleteNetworkProfileResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteProfileResponse = (output: any, context: __SerdeContext): DeleteProfileResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteRoomResponse = (output: any, context: __SerdeContext): DeleteRoomResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteRoomSkillParameterResponse = (
  output: any,
  context: __SerdeContext
): DeleteRoomSkillParameterResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteSkillAuthorizationResponse = (
  output: any,
  context: __SerdeContext
): DeleteSkillAuthorizationResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteSkillGroupResponse = (
  output: any,
  context: __SerdeContext
): DeleteSkillGroupResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteUserResponse = (output: any, context: __SerdeContext): DeleteUserResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeveloperInfo = (output: any, context: __SerdeContext): DeveloperInfo => {
  return {
    DeveloperName: __expectString(output.DeveloperName),
    Email: __expectString(output.Email),
    PrivacyPolicy: __expectString(output.PrivacyPolicy),
    Url: __expectString(output.Url),
  } as any;
};

const deserializeAws_json1_1Device = (output: any, context: __SerdeContext): Device => {
  return {
    DeviceArn: __expectString(output.DeviceArn),
    DeviceName: __expectString(output.DeviceName),
    DeviceSerialNumber: __expectString(output.DeviceSerialNumber),
    DeviceStatus: __expectString(output.DeviceStatus),
    DeviceStatusInfo:
      output.DeviceStatusInfo !== undefined && output.DeviceStatusInfo !== null
        ? deserializeAws_json1_1DeviceStatusInfo(output.DeviceStatusInfo, context)
        : undefined,
    DeviceType: __expectString(output.DeviceType),
    MacAddress: __expectString(output.MacAddress),
    NetworkProfileInfo:
      output.NetworkProfileInfo !== undefined && output.NetworkProfileInfo !== null
        ? deserializeAws_json1_1DeviceNetworkProfileInfo(output.NetworkProfileInfo, context)
        : undefined,
    RoomArn: __expectString(output.RoomArn),
    SoftwareVersion: __expectString(output.SoftwareVersion),
  } as any;
};

const deserializeAws_json1_1DeviceData = (output: any, context: __SerdeContext): DeviceData => {
  return {
    CreatedTime:
      output.CreatedTime !== undefined && output.CreatedTime !== null
        ? new Date(Math.round(output.CreatedTime * 1000))
        : undefined,
    DeviceArn: __expectString(output.DeviceArn),
    DeviceName: __expectString(output.DeviceName),
    DeviceSerialNumber: __expectString(output.DeviceSerialNumber),
    DeviceStatus: __expectString(output.DeviceStatus),
    DeviceStatusInfo:
      output.DeviceStatusInfo !== undefined && output.DeviceStatusInfo !== null
        ? deserializeAws_json1_1DeviceStatusInfo(output.DeviceStatusInfo, context)
        : undefined,
    DeviceType: __expectString(output.DeviceType),
    MacAddress: __expectString(output.MacAddress),
    NetworkProfileArn: __expectString(output.NetworkProfileArn),
    NetworkProfileName: __expectString(output.NetworkProfileName),
    RoomArn: __expectString(output.RoomArn),
    RoomName: __expectString(output.RoomName),
    SoftwareVersion: __expectString(output.SoftwareVersion),
  } as any;
};

const deserializeAws_json1_1DeviceDataList = (output: any, context: __SerdeContext): DeviceData[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DeviceData(entry, context);
    });
};

const deserializeAws_json1_1DeviceEvent = (output: any, context: __SerdeContext): DeviceEvent => {
  return {
    Timestamp:
      output.Timestamp !== undefined && output.Timestamp !== null
        ? new Date(Math.round(output.Timestamp * 1000))
        : undefined,
    Type: __expectString(output.Type),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1DeviceEventList = (output: any, context: __SerdeContext): DeviceEvent[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DeviceEvent(entry, context);
    });
};

const deserializeAws_json1_1DeviceNetworkProfileInfo = (
  output: any,
  context: __SerdeContext
): DeviceNetworkProfileInfo => {
  return {
    CertificateArn: __expectString(output.CertificateArn),
    CertificateExpirationTime:
      output.CertificateExpirationTime !== undefined && output.CertificateExpirationTime !== null
        ? new Date(Math.round(output.CertificateExpirationTime * 1000))
        : undefined,
    NetworkProfileArn: __expectString(output.NetworkProfileArn),
  } as any;
};

const deserializeAws_json1_1DeviceNotRegisteredException = (
  output: any,
  context: __SerdeContext
): DeviceNotRegisteredException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1DeviceStatusDetail = (output: any, context: __SerdeContext): DeviceStatusDetail => {
  return {
    Code: __expectString(output.Code),
    Feature: __expectString(output.Feature),
  } as any;
};

const deserializeAws_json1_1DeviceStatusDetails = (output: any, context: __SerdeContext): DeviceStatusDetail[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DeviceStatusDetail(entry, context);
    });
};

const deserializeAws_json1_1DeviceStatusInfo = (output: any, context: __SerdeContext): DeviceStatusInfo => {
  return {
    ConnectionStatus: __expectString(output.ConnectionStatus),
    ConnectionStatusUpdatedTime:
      output.ConnectionStatusUpdatedTime !== undefined && output.ConnectionStatusUpdatedTime !== null
        ? new Date(Math.round(output.ConnectionStatusUpdatedTime * 1000))
        : undefined,
    DeviceStatusDetails:
      output.DeviceStatusDetails !== undefined && output.DeviceStatusDetails !== null
        ? deserializeAws_json1_1DeviceStatusDetails(output.DeviceStatusDetails, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DisassociateContactFromAddressBookResponse = (
  output: any,
  context: __SerdeContext
): DisassociateContactFromAddressBookResponse => {
  return {} as any;
};

const deserializeAws_json1_1DisassociateDeviceFromRoomResponse = (
  output: any,
  context: __SerdeContext
): DisassociateDeviceFromRoomResponse => {
  return {} as any;
};

const deserializeAws_json1_1DisassociateSkillFromSkillGroupResponse = (
  output: any,
  context: __SerdeContext
): DisassociateSkillFromSkillGroupResponse => {
  return {} as any;
};

const deserializeAws_json1_1DisassociateSkillFromUsersResponse = (
  output: any,
  context: __SerdeContext
): DisassociateSkillFromUsersResponse => {
  return {} as any;
};

const deserializeAws_json1_1DisassociateSkillGroupFromRoomResponse = (
  output: any,
  context: __SerdeContext
): DisassociateSkillGroupFromRoomResponse => {
  return {} as any;
};

const deserializeAws_json1_1EndOfMeetingReminder = (output: any, context: __SerdeContext): EndOfMeetingReminder => {
  return {
    Enabled: __expectBoolean(output.Enabled),
    ReminderAtMinutes:
      output.ReminderAtMinutes !== undefined && output.ReminderAtMinutes !== null
        ? deserializeAws_json1_1EndOfMeetingReminderMinutesList(output.ReminderAtMinutes, context)
        : undefined,
    ReminderType: __expectString(output.ReminderType),
  } as any;
};

const deserializeAws_json1_1EndOfMeetingReminderMinutesList = (output: any, context: __SerdeContext): number[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectInt(entry) as any;
    });
};

const deserializeAws_json1_1ForgetSmartHomeAppliancesResponse = (
  output: any,
  context: __SerdeContext
): ForgetSmartHomeAppliancesResponse => {
  return {} as any;
};

const deserializeAws_json1_1Gateway = (output: any, context: __SerdeContext): Gateway => {
  return {
    Arn: __expectString(output.Arn),
    Description: __expectString(output.Description),
    GatewayGroupArn: __expectString(output.GatewayGroupArn),
    Name: __expectString(output.Name),
    SoftwareVersion: __expectString(output.SoftwareVersion),
  } as any;
};

const deserializeAws_json1_1GatewayGroup = (output: any, context: __SerdeContext): GatewayGroup => {
  return {
    Arn: __expectString(output.Arn),
    Description: __expectString(output.Description),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1GatewayGroupSummaries = (output: any, context: __SerdeContext): GatewayGroupSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1GatewayGroupSummary(entry, context);
    });
};

const deserializeAws_json1_1GatewayGroupSummary = (output: any, context: __SerdeContext): GatewayGroupSummary => {
  return {
    Arn: __expectString(output.Arn),
    Description: __expectString(output.Description),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1GatewaySummaries = (output: any, context: __SerdeContext): GatewaySummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1GatewaySummary(entry, context);
    });
};

const deserializeAws_json1_1GatewaySummary = (output: any, context: __SerdeContext): GatewaySummary => {
  return {
    Arn: __expectString(output.Arn),
    Description: __expectString(output.Description),
    GatewayGroupArn: __expectString(output.GatewayGroupArn),
    Name: __expectString(output.Name),
    SoftwareVersion: __expectString(output.SoftwareVersion),
  } as any;
};

const deserializeAws_json1_1GenericKeywords = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1GetAddressBookResponse = (output: any, context: __SerdeContext): GetAddressBookResponse => {
  return {
    AddressBook:
      output.AddressBook !== undefined && output.AddressBook !== null
        ? deserializeAws_json1_1AddressBook(output.AddressBook, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetConferencePreferenceResponse = (
  output: any,
  context: __SerdeContext
): GetConferencePreferenceResponse => {
  return {
    Preference:
      output.Preference !== undefined && output.Preference !== null
        ? deserializeAws_json1_1ConferencePreference(output.Preference, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetConferenceProviderResponse = (
  output: any,
  context: __SerdeContext
): GetConferenceProviderResponse => {
  return {
    ConferenceProvider:
      output.ConferenceProvider !== undefined && output.ConferenceProvider !== null
        ? deserializeAws_json1_1ConferenceProvider(output.ConferenceProvider, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetContactResponse = (output: any, context: __SerdeContext): GetContactResponse => {
  return {
    Contact:
      output.Contact !== undefined && output.Contact !== null
        ? deserializeAws_json1_1Contact(output.Contact, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetDeviceResponse = (output: any, context: __SerdeContext): GetDeviceResponse => {
  return {
    Device:
      output.Device !== undefined && output.Device !== null
        ? deserializeAws_json1_1Device(output.Device, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetGatewayGroupResponse = (
  output: any,
  context: __SerdeContext
): GetGatewayGroupResponse => {
  return {
    GatewayGroup:
      output.GatewayGroup !== undefined && output.GatewayGroup !== null
        ? deserializeAws_json1_1GatewayGroup(output.GatewayGroup, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetGatewayResponse = (output: any, context: __SerdeContext): GetGatewayResponse => {
  return {
    Gateway:
      output.Gateway !== undefined && output.Gateway !== null
        ? deserializeAws_json1_1Gateway(output.Gateway, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetInvitationConfigurationResponse = (
  output: any,
  context: __SerdeContext
): GetInvitationConfigurationResponse => {
  return {
    ContactEmail: __expectString(output.ContactEmail),
    OrganizationName: __expectString(output.OrganizationName),
    PrivateSkillIds:
      output.PrivateSkillIds !== undefined && output.PrivateSkillIds !== null
        ? deserializeAws_json1_1ShortSkillIdList(output.PrivateSkillIds, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetNetworkProfileResponse = (
  output: any,
  context: __SerdeContext
): GetNetworkProfileResponse => {
  return {
    NetworkProfile:
      output.NetworkProfile !== undefined && output.NetworkProfile !== null
        ? deserializeAws_json1_1NetworkProfile(output.NetworkProfile, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetProfileResponse = (output: any, context: __SerdeContext): GetProfileResponse => {
  return {
    Profile:
      output.Profile !== undefined && output.Profile !== null
        ? deserializeAws_json1_1Profile(output.Profile, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetRoomResponse = (output: any, context: __SerdeContext): GetRoomResponse => {
  return {
    Room:
      output.Room !== undefined && output.Room !== null ? deserializeAws_json1_1Room(output.Room, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetRoomSkillParameterResponse = (
  output: any,
  context: __SerdeContext
): GetRoomSkillParameterResponse => {
  return {
    RoomSkillParameter:
      output.RoomSkillParameter !== undefined && output.RoomSkillParameter !== null
        ? deserializeAws_json1_1RoomSkillParameter(output.RoomSkillParameter, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetSkillGroupResponse = (output: any, context: __SerdeContext): GetSkillGroupResponse => {
  return {
    SkillGroup:
      output.SkillGroup !== undefined && output.SkillGroup !== null
        ? deserializeAws_json1_1SkillGroup(output.SkillGroup, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1InstantBooking = (output: any, context: __SerdeContext): InstantBooking => {
  return {
    DurationInMinutes: __expectInt(output.DurationInMinutes),
    Enabled: __expectBoolean(output.Enabled),
  } as any;
};

const deserializeAws_json1_1InvalidCertificateAuthorityException = (
  output: any,
  context: __SerdeContext
): InvalidCertificateAuthorityException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidDeviceException = (output: any, context: __SerdeContext): InvalidDeviceException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidSecretsManagerResourceException = (
  output: any,
  context: __SerdeContext
): InvalidSecretsManagerResourceException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidServiceLinkedRoleStateException = (
  output: any,
  context: __SerdeContext
): InvalidServiceLinkedRoleStateException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidUserStatusException = (
  output: any,
  context: __SerdeContext
): InvalidUserStatusException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1IPDialIn = (output: any, context: __SerdeContext): IPDialIn => {
  return {
    CommsProtocol: __expectString(output.CommsProtocol),
    Endpoint: __expectString(output.Endpoint),
  } as any;
};

const deserializeAws_json1_1LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ListBusinessReportSchedulesResponse = (
  output: any,
  context: __SerdeContext
): ListBusinessReportSchedulesResponse => {
  return {
    BusinessReportSchedules:
      output.BusinessReportSchedules !== undefined && output.BusinessReportSchedules !== null
        ? deserializeAws_json1_1BusinessReportScheduleList(output.BusinessReportSchedules, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListConferenceProvidersResponse = (
  output: any,
  context: __SerdeContext
): ListConferenceProvidersResponse => {
  return {
    ConferenceProviders:
      output.ConferenceProviders !== undefined && output.ConferenceProviders !== null
        ? deserializeAws_json1_1ConferenceProvidersList(output.ConferenceProviders, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListDeviceEventsResponse = (
  output: any,
  context: __SerdeContext
): ListDeviceEventsResponse => {
  return {
    DeviceEvents:
      output.DeviceEvents !== undefined && output.DeviceEvents !== null
        ? deserializeAws_json1_1DeviceEventList(output.DeviceEvents, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListGatewayGroupsResponse = (
  output: any,
  context: __SerdeContext
): ListGatewayGroupsResponse => {
  return {
    GatewayGroups:
      output.GatewayGroups !== undefined && output.GatewayGroups !== null
        ? deserializeAws_json1_1GatewayGroupSummaries(output.GatewayGroups, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListGatewaysResponse = (output: any, context: __SerdeContext): ListGatewaysResponse => {
  return {
    Gateways:
      output.Gateways !== undefined && output.Gateways !== null
        ? deserializeAws_json1_1GatewaySummaries(output.Gateways, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListSkillsResponse = (output: any, context: __SerdeContext): ListSkillsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    SkillSummaries:
      output.SkillSummaries !== undefined && output.SkillSummaries !== null
        ? deserializeAws_json1_1SkillSummaryList(output.SkillSummaries, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListSkillsStoreCategoriesResponse = (
  output: any,
  context: __SerdeContext
): ListSkillsStoreCategoriesResponse => {
  return {
    CategoryList:
      output.CategoryList !== undefined && output.CategoryList !== null
        ? deserializeAws_json1_1CategoryList(output.CategoryList, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListSkillsStoreSkillsByCategoryResponse = (
  output: any,
  context: __SerdeContext
): ListSkillsStoreSkillsByCategoryResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    SkillsStoreSkills:
      output.SkillsStoreSkills !== undefined && output.SkillsStoreSkills !== null
        ? deserializeAws_json1_1SkillsStoreSkillList(output.SkillsStoreSkills, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListSmartHomeAppliancesResponse = (
  output: any,
  context: __SerdeContext
): ListSmartHomeAppliancesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    SmartHomeAppliances:
      output.SmartHomeAppliances !== undefined && output.SmartHomeAppliances !== null
        ? deserializeAws_json1_1SmartHomeApplianceList(output.SmartHomeAppliances, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListTagsResponse = (output: any, context: __SerdeContext): ListTagsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_json1_1TagList(output.Tags, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1MeetingRoomConfiguration = (
  output: any,
  context: __SerdeContext
): MeetingRoomConfiguration => {
  return {
    EndOfMeetingReminder:
      output.EndOfMeetingReminder !== undefined && output.EndOfMeetingReminder !== null
        ? deserializeAws_json1_1EndOfMeetingReminder(output.EndOfMeetingReminder, context)
        : undefined,
    InstantBooking:
      output.InstantBooking !== undefined && output.InstantBooking !== null
        ? deserializeAws_json1_1InstantBooking(output.InstantBooking, context)
        : undefined,
    RequireCheckIn:
      output.RequireCheckIn !== undefined && output.RequireCheckIn !== null
        ? deserializeAws_json1_1RequireCheckIn(output.RequireCheckIn, context)
        : undefined,
    RoomUtilizationMetricsEnabled: __expectBoolean(output.RoomUtilizationMetricsEnabled),
  } as any;
};

const deserializeAws_json1_1MeetingSetting = (output: any, context: __SerdeContext): MeetingSetting => {
  return {
    RequirePin: __expectString(output.RequirePin),
  } as any;
};

const deserializeAws_json1_1NameInUseException = (output: any, context: __SerdeContext): NameInUseException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1NetworkProfile = (output: any, context: __SerdeContext): NetworkProfile => {
  return {
    CertificateAuthorityArn: __expectString(output.CertificateAuthorityArn),
    CurrentPassword: __expectString(output.CurrentPassword),
    Description: __expectString(output.Description),
    EapMethod: __expectString(output.EapMethod),
    NetworkProfileArn: __expectString(output.NetworkProfileArn),
    NetworkProfileName: __expectString(output.NetworkProfileName),
    NextPassword: __expectString(output.NextPassword),
    SecurityType: __expectString(output.SecurityType),
    Ssid: __expectString(output.Ssid),
    TrustAnchors:
      output.TrustAnchors !== undefined && output.TrustAnchors !== null
        ? deserializeAws_json1_1TrustAnchorList(output.TrustAnchors, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1NetworkProfileData = (output: any, context: __SerdeContext): NetworkProfileData => {
  return {
    CertificateAuthorityArn: __expectString(output.CertificateAuthorityArn),
    Description: __expectString(output.Description),
    EapMethod: __expectString(output.EapMethod),
    NetworkProfileArn: __expectString(output.NetworkProfileArn),
    NetworkProfileName: __expectString(output.NetworkProfileName),
    SecurityType: __expectString(output.SecurityType),
    Ssid: __expectString(output.Ssid),
  } as any;
};

const deserializeAws_json1_1NetworkProfileDataList = (output: any, context: __SerdeContext): NetworkProfileData[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1NetworkProfileData(entry, context);
    });
};

const deserializeAws_json1_1NewInThisVersionBulletPoints = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1NotFoundException = (output: any, context: __SerdeContext): NotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1PhoneNumber = (output: any, context: __SerdeContext): PhoneNumber => {
  return {
    Number: __expectString(output.Number),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1PhoneNumberList = (output: any, context: __SerdeContext): PhoneNumber[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PhoneNumber(entry, context);
    });
};

const deserializeAws_json1_1Profile = (output: any, context: __SerdeContext): Profile => {
  return {
    Address: __expectString(output.Address),
    AddressBookArn: __expectString(output.AddressBookArn),
    DataRetentionOptIn: __expectBoolean(output.DataRetentionOptIn),
    DistanceUnit: __expectString(output.DistanceUnit),
    IsDefault: __expectBoolean(output.IsDefault),
    Locale: __expectString(output.Locale),
    MaxVolumeLimit: __expectInt(output.MaxVolumeLimit),
    MeetingRoomConfiguration:
      output.MeetingRoomConfiguration !== undefined && output.MeetingRoomConfiguration !== null
        ? deserializeAws_json1_1MeetingRoomConfiguration(output.MeetingRoomConfiguration, context)
        : undefined,
    PSTNEnabled: __expectBoolean(output.PSTNEnabled),
    ProfileArn: __expectString(output.ProfileArn),
    ProfileName: __expectString(output.ProfileName),
    SetupModeDisabled: __expectBoolean(output.SetupModeDisabled),
    TemperatureUnit: __expectString(output.TemperatureUnit),
    Timezone: __expectString(output.Timezone),
    WakeWord: __expectString(output.WakeWord),
  } as any;
};

const deserializeAws_json1_1ProfileData = (output: any, context: __SerdeContext): ProfileData => {
  return {
    Address: __expectString(output.Address),
    DistanceUnit: __expectString(output.DistanceUnit),
    IsDefault: __expectBoolean(output.IsDefault),
    Locale: __expectString(output.Locale),
    ProfileArn: __expectString(output.ProfileArn),
    ProfileName: __expectString(output.ProfileName),
    TemperatureUnit: __expectString(output.TemperatureUnit),
    Timezone: __expectString(output.Timezone),
    WakeWord: __expectString(output.WakeWord),
  } as any;
};

const deserializeAws_json1_1ProfileDataList = (output: any, context: __SerdeContext): ProfileData[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ProfileData(entry, context);
    });
};

const deserializeAws_json1_1PSTNDialIn = (output: any, context: __SerdeContext): PSTNDialIn => {
  return {
    CountryCode: __expectString(output.CountryCode),
    OneClickIdDelay: __expectString(output.OneClickIdDelay),
    OneClickPinDelay: __expectString(output.OneClickPinDelay),
    PhoneNumber: __expectString(output.PhoneNumber),
  } as any;
};

const deserializeAws_json1_1PutConferencePreferenceResponse = (
  output: any,
  context: __SerdeContext
): PutConferencePreferenceResponse => {
  return {} as any;
};

const deserializeAws_json1_1PutInvitationConfigurationResponse = (
  output: any,
  context: __SerdeContext
): PutInvitationConfigurationResponse => {
  return {} as any;
};

const deserializeAws_json1_1PutRoomSkillParameterResponse = (
  output: any,
  context: __SerdeContext
): PutRoomSkillParameterResponse => {
  return {} as any;
};

const deserializeAws_json1_1PutSkillAuthorizationResponse = (
  output: any,
  context: __SerdeContext
): PutSkillAuthorizationResponse => {
  return {} as any;
};

const deserializeAws_json1_1RegisterAVSDeviceResponse = (
  output: any,
  context: __SerdeContext
): RegisterAVSDeviceResponse => {
  return {
    DeviceArn: __expectString(output.DeviceArn),
  } as any;
};

const deserializeAws_json1_1RejectSkillResponse = (output: any, context: __SerdeContext): RejectSkillResponse => {
  return {} as any;
};

const deserializeAws_json1_1RequireCheckIn = (output: any, context: __SerdeContext): RequireCheckIn => {
  return {
    Enabled: __expectBoolean(output.Enabled),
    ReleaseAfterMinutes: __expectInt(output.ReleaseAfterMinutes),
  } as any;
};

const deserializeAws_json1_1ResolveRoomResponse = (output: any, context: __SerdeContext): ResolveRoomResponse => {
  return {
    RoomArn: __expectString(output.RoomArn),
    RoomName: __expectString(output.RoomName),
    RoomSkillParameters:
      output.RoomSkillParameters !== undefined && output.RoomSkillParameters !== null
        ? deserializeAws_json1_1RoomSkillParameters(output.RoomSkillParameters, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ResourceAssociatedException = (
  output: any,
  context: __SerdeContext
): ResourceAssociatedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ResourceInUseException = (output: any, context: __SerdeContext): ResourceInUseException => {
  return {
    ClientRequestToken: __expectString(output.ClientRequestToken),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1Reviews = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_json1_1RevokeInvitationResponse = (
  output: any,
  context: __SerdeContext
): RevokeInvitationResponse => {
  return {} as any;
};

const deserializeAws_json1_1Room = (output: any, context: __SerdeContext): Room => {
  return {
    Description: __expectString(output.Description),
    ProfileArn: __expectString(output.ProfileArn),
    ProviderCalendarId: __expectString(output.ProviderCalendarId),
    RoomArn: __expectString(output.RoomArn),
    RoomName: __expectString(output.RoomName),
  } as any;
};

const deserializeAws_json1_1RoomData = (output: any, context: __SerdeContext): RoomData => {
  return {
    Description: __expectString(output.Description),
    ProfileArn: __expectString(output.ProfileArn),
    ProfileName: __expectString(output.ProfileName),
    ProviderCalendarId: __expectString(output.ProviderCalendarId),
    RoomArn: __expectString(output.RoomArn),
    RoomName: __expectString(output.RoomName),
  } as any;
};

const deserializeAws_json1_1RoomDataList = (output: any, context: __SerdeContext): RoomData[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1RoomData(entry, context);
    });
};

const deserializeAws_json1_1RoomSkillParameter = (output: any, context: __SerdeContext): RoomSkillParameter => {
  return {
    ParameterKey: __expectString(output.ParameterKey),
    ParameterValue: __expectString(output.ParameterValue),
  } as any;
};

const deserializeAws_json1_1RoomSkillParameters = (output: any, context: __SerdeContext): RoomSkillParameter[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1RoomSkillParameter(entry, context);
    });
};

const deserializeAws_json1_1SampleUtterances = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1SearchAddressBooksResponse = (
  output: any,
  context: __SerdeContext
): SearchAddressBooksResponse => {
  return {
    AddressBooks:
      output.AddressBooks !== undefined && output.AddressBooks !== null
        ? deserializeAws_json1_1AddressBookDataList(output.AddressBooks, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
    TotalCount: __expectInt(output.TotalCount),
  } as any;
};

const deserializeAws_json1_1SearchContactsResponse = (output: any, context: __SerdeContext): SearchContactsResponse => {
  return {
    Contacts:
      output.Contacts !== undefined && output.Contacts !== null
        ? deserializeAws_json1_1ContactDataList(output.Contacts, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
    TotalCount: __expectInt(output.TotalCount),
  } as any;
};

const deserializeAws_json1_1SearchDevicesResponse = (output: any, context: __SerdeContext): SearchDevicesResponse => {
  return {
    Devices:
      output.Devices !== undefined && output.Devices !== null
        ? deserializeAws_json1_1DeviceDataList(output.Devices, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
    TotalCount: __expectInt(output.TotalCount),
  } as any;
};

const deserializeAws_json1_1SearchNetworkProfilesResponse = (
  output: any,
  context: __SerdeContext
): SearchNetworkProfilesResponse => {
  return {
    NetworkProfiles:
      output.NetworkProfiles !== undefined && output.NetworkProfiles !== null
        ? deserializeAws_json1_1NetworkProfileDataList(output.NetworkProfiles, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
    TotalCount: __expectInt(output.TotalCount),
  } as any;
};

const deserializeAws_json1_1SearchProfilesResponse = (output: any, context: __SerdeContext): SearchProfilesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Profiles:
      output.Profiles !== undefined && output.Profiles !== null
        ? deserializeAws_json1_1ProfileDataList(output.Profiles, context)
        : undefined,
    TotalCount: __expectInt(output.TotalCount),
  } as any;
};

const deserializeAws_json1_1SearchRoomsResponse = (output: any, context: __SerdeContext): SearchRoomsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Rooms:
      output.Rooms !== undefined && output.Rooms !== null
        ? deserializeAws_json1_1RoomDataList(output.Rooms, context)
        : undefined,
    TotalCount: __expectInt(output.TotalCount),
  } as any;
};

const deserializeAws_json1_1SearchSkillGroupsResponse = (
  output: any,
  context: __SerdeContext
): SearchSkillGroupsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    SkillGroups:
      output.SkillGroups !== undefined && output.SkillGroups !== null
        ? deserializeAws_json1_1SkillGroupDataList(output.SkillGroups, context)
        : undefined,
    TotalCount: __expectInt(output.TotalCount),
  } as any;
};

const deserializeAws_json1_1SearchUsersResponse = (output: any, context: __SerdeContext): SearchUsersResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    TotalCount: __expectInt(output.TotalCount),
    Users:
      output.Users !== undefined && output.Users !== null
        ? deserializeAws_json1_1UserDataList(output.Users, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1SendAnnouncementResponse = (
  output: any,
  context: __SerdeContext
): SendAnnouncementResponse => {
  return {
    AnnouncementArn: __expectString(output.AnnouncementArn),
  } as any;
};

const deserializeAws_json1_1SendInvitationResponse = (output: any, context: __SerdeContext): SendInvitationResponse => {
  return {} as any;
};

const deserializeAws_json1_1ShortSkillIdList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1SipAddress = (output: any, context: __SerdeContext): SipAddress => {
  return {
    Type: __expectString(output.Type),
    Uri: __expectString(output.Uri),
  } as any;
};

const deserializeAws_json1_1SipAddressList = (output: any, context: __SerdeContext): SipAddress[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SipAddress(entry, context);
    });
};

const deserializeAws_json1_1SkillDetails = (output: any, context: __SerdeContext): SkillDetails => {
  return {
    BulletPoints:
      output.BulletPoints !== undefined && output.BulletPoints !== null
        ? deserializeAws_json1_1BulletPoints(output.BulletPoints, context)
        : undefined,
    DeveloperInfo:
      output.DeveloperInfo !== undefined && output.DeveloperInfo !== null
        ? deserializeAws_json1_1DeveloperInfo(output.DeveloperInfo, context)
        : undefined,
    EndUserLicenseAgreement: __expectString(output.EndUserLicenseAgreement),
    GenericKeywords:
      output.GenericKeywords !== undefined && output.GenericKeywords !== null
        ? deserializeAws_json1_1GenericKeywords(output.GenericKeywords, context)
        : undefined,
    InvocationPhrase: __expectString(output.InvocationPhrase),
    NewInThisVersionBulletPoints:
      output.NewInThisVersionBulletPoints !== undefined && output.NewInThisVersionBulletPoints !== null
        ? deserializeAws_json1_1NewInThisVersionBulletPoints(output.NewInThisVersionBulletPoints, context)
        : undefined,
    ProductDescription: __expectString(output.ProductDescription),
    ReleaseDate: __expectString(output.ReleaseDate),
    Reviews:
      output.Reviews !== undefined && output.Reviews !== null
        ? deserializeAws_json1_1Reviews(output.Reviews, context)
        : undefined,
    SkillTypes:
      output.SkillTypes !== undefined && output.SkillTypes !== null
        ? deserializeAws_json1_1SkillTypes(output.SkillTypes, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1SkillGroup = (output: any, context: __SerdeContext): SkillGroup => {
  return {
    Description: __expectString(output.Description),
    SkillGroupArn: __expectString(output.SkillGroupArn),
    SkillGroupName: __expectString(output.SkillGroupName),
  } as any;
};

const deserializeAws_json1_1SkillGroupData = (output: any, context: __SerdeContext): SkillGroupData => {
  return {
    Description: __expectString(output.Description),
    SkillGroupArn: __expectString(output.SkillGroupArn),
    SkillGroupName: __expectString(output.SkillGroupName),
  } as any;
};

const deserializeAws_json1_1SkillGroupDataList = (output: any, context: __SerdeContext): SkillGroupData[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SkillGroupData(entry, context);
    });
};

const deserializeAws_json1_1SkillNotLinkedException = (
  output: any,
  context: __SerdeContext
): SkillNotLinkedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1SkillsStoreSkill = (output: any, context: __SerdeContext): SkillsStoreSkill => {
  return {
    IconUrl: __expectString(output.IconUrl),
    SampleUtterances:
      output.SampleUtterances !== undefined && output.SampleUtterances !== null
        ? deserializeAws_json1_1SampleUtterances(output.SampleUtterances, context)
        : undefined,
    ShortDescription: __expectString(output.ShortDescription),
    SkillDetails:
      output.SkillDetails !== undefined && output.SkillDetails !== null
        ? deserializeAws_json1_1SkillDetails(output.SkillDetails, context)
        : undefined,
    SkillId: __expectString(output.SkillId),
    SkillName: __expectString(output.SkillName),
    SupportsLinking: __expectBoolean(output.SupportsLinking),
  } as any;
};

const deserializeAws_json1_1SkillsStoreSkillList = (output: any, context: __SerdeContext): SkillsStoreSkill[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SkillsStoreSkill(entry, context);
    });
};

const deserializeAws_json1_1SkillSummary = (output: any, context: __SerdeContext): SkillSummary => {
  return {
    EnablementType: __expectString(output.EnablementType),
    SkillId: __expectString(output.SkillId),
    SkillName: __expectString(output.SkillName),
    SkillType: __expectString(output.SkillType),
    SupportsLinking: __expectBoolean(output.SupportsLinking),
  } as any;
};

const deserializeAws_json1_1SkillSummaryList = (output: any, context: __SerdeContext): SkillSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SkillSummary(entry, context);
    });
};

const deserializeAws_json1_1SkillTypes = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1SmartHomeAppliance = (output: any, context: __SerdeContext): SmartHomeAppliance => {
  return {
    Description: __expectString(output.Description),
    FriendlyName: __expectString(output.FriendlyName),
    ManufacturerName: __expectString(output.ManufacturerName),
  } as any;
};

const deserializeAws_json1_1SmartHomeApplianceList = (output: any, context: __SerdeContext): SmartHomeAppliance[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SmartHomeAppliance(entry, context);
    });
};

const deserializeAws_json1_1StartDeviceSyncResponse = (
  output: any,
  context: __SerdeContext
): StartDeviceSyncResponse => {
  return {} as any;
};

const deserializeAws_json1_1StartSmartHomeApplianceDiscoveryResponse = (
  output: any,
  context: __SerdeContext
): StartSmartHomeApplianceDiscoveryResponse => {
  return {} as any;
};

const deserializeAws_json1_1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1TagList = (output: any, context: __SerdeContext): Tag[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Tag(entry, context);
    });
};

const deserializeAws_json1_1TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1TrustAnchorList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1UnauthorizedException = (output: any, context: __SerdeContext): UnauthorizedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateAddressBookResponse = (
  output: any,
  context: __SerdeContext
): UpdateAddressBookResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateBusinessReportScheduleResponse = (
  output: any,
  context: __SerdeContext
): UpdateBusinessReportScheduleResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateConferenceProviderResponse = (
  output: any,
  context: __SerdeContext
): UpdateConferenceProviderResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateContactResponse = (output: any, context: __SerdeContext): UpdateContactResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateDeviceResponse = (output: any, context: __SerdeContext): UpdateDeviceResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateGatewayGroupResponse = (
  output: any,
  context: __SerdeContext
): UpdateGatewayGroupResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateGatewayResponse = (output: any, context: __SerdeContext): UpdateGatewayResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateNetworkProfileResponse = (
  output: any,
  context: __SerdeContext
): UpdateNetworkProfileResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateProfileResponse = (output: any, context: __SerdeContext): UpdateProfileResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateRoomResponse = (output: any, context: __SerdeContext): UpdateRoomResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateSkillGroupResponse = (
  output: any,
  context: __SerdeContext
): UpdateSkillGroupResponse => {
  return {} as any;
};

const deserializeAws_json1_1UserData = (output: any, context: __SerdeContext): UserData => {
  return {
    Email: __expectString(output.Email),
    EnrollmentId: __expectString(output.EnrollmentId),
    EnrollmentStatus: __expectString(output.EnrollmentStatus),
    FirstName: __expectString(output.FirstName),
    LastName: __expectString(output.LastName),
    UserArn: __expectString(output.UserArn),
  } as any;
};

const deserializeAws_json1_1UserDataList = (output: any, context: __SerdeContext): UserData[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1UserData(entry, context);
    });
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path,
    headers,
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }

  return "";
};
