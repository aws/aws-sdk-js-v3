// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  parseEpochTimestamp as __parseEpochTimestamp,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

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
import { AlexaForBusinessServiceException as __BaseException } from "../models/AlexaForBusinessServiceException";
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
  InstantBooking,
  InvalidCertificateAuthorityException,
  InvalidDeviceException,
  InvalidSecretsManagerResourceException,
  InvalidServiceLinkedRoleStateException,
  InvalidUserStatusException,
  IPDialIn,
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
  PhoneNumber,
  Profile,
  ProfileData,
  PSTNDialIn,
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
  SkillsStoreSkill,
  SkillSummary,
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

/**
 * serializeAws_json1_1ApproveSkillCommand
 */
export const se_ApproveSkillCommand = async (
  input: ApproveSkillCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ApproveSkill");
  let body: any;
  body = JSON.stringify(se_ApproveSkillRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AssociateContactWithAddressBookCommand
 */
export const se_AssociateContactWithAddressBookCommand = async (
  input: AssociateContactWithAddressBookCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssociateContactWithAddressBook");
  let body: any;
  body = JSON.stringify(se_AssociateContactWithAddressBookRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AssociateDeviceWithNetworkProfileCommand
 */
export const se_AssociateDeviceWithNetworkProfileCommand = async (
  input: AssociateDeviceWithNetworkProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssociateDeviceWithNetworkProfile");
  let body: any;
  body = JSON.stringify(se_AssociateDeviceWithNetworkProfileRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AssociateDeviceWithRoomCommand
 */
export const se_AssociateDeviceWithRoomCommand = async (
  input: AssociateDeviceWithRoomCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssociateDeviceWithRoom");
  let body: any;
  body = JSON.stringify(se_AssociateDeviceWithRoomRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AssociateSkillGroupWithRoomCommand
 */
export const se_AssociateSkillGroupWithRoomCommand = async (
  input: AssociateSkillGroupWithRoomCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssociateSkillGroupWithRoom");
  let body: any;
  body = JSON.stringify(se_AssociateSkillGroupWithRoomRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AssociateSkillWithSkillGroupCommand
 */
export const se_AssociateSkillWithSkillGroupCommand = async (
  input: AssociateSkillWithSkillGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssociateSkillWithSkillGroup");
  let body: any;
  body = JSON.stringify(se_AssociateSkillWithSkillGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AssociateSkillWithUsersCommand
 */
export const se_AssociateSkillWithUsersCommand = async (
  input: AssociateSkillWithUsersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssociateSkillWithUsers");
  let body: any;
  body = JSON.stringify(se_AssociateSkillWithUsersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateAddressBookCommand
 */
export const se_CreateAddressBookCommand = async (
  input: CreateAddressBookCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateAddressBook");
  let body: any;
  body = JSON.stringify(se_CreateAddressBookRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateBusinessReportScheduleCommand
 */
export const se_CreateBusinessReportScheduleCommand = async (
  input: CreateBusinessReportScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateBusinessReportSchedule");
  let body: any;
  body = JSON.stringify(se_CreateBusinessReportScheduleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateConferenceProviderCommand
 */
export const se_CreateConferenceProviderCommand = async (
  input: CreateConferenceProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateConferenceProvider");
  let body: any;
  body = JSON.stringify(se_CreateConferenceProviderRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateContactCommand
 */
export const se_CreateContactCommand = async (
  input: CreateContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateContact");
  let body: any;
  body = JSON.stringify(se_CreateContactRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateGatewayGroupCommand
 */
export const se_CreateGatewayGroupCommand = async (
  input: CreateGatewayGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateGatewayGroup");
  let body: any;
  body = JSON.stringify(se_CreateGatewayGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateNetworkProfileCommand
 */
export const se_CreateNetworkProfileCommand = async (
  input: CreateNetworkProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateNetworkProfile");
  let body: any;
  body = JSON.stringify(se_CreateNetworkProfileRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateProfileCommand
 */
export const se_CreateProfileCommand = async (
  input: CreateProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateProfile");
  let body: any;
  body = JSON.stringify(se_CreateProfileRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateRoomCommand
 */
export const se_CreateRoomCommand = async (
  input: CreateRoomCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateRoom");
  let body: any;
  body = JSON.stringify(se_CreateRoomRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateSkillGroupCommand
 */
export const se_CreateSkillGroupCommand = async (
  input: CreateSkillGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateSkillGroup");
  let body: any;
  body = JSON.stringify(se_CreateSkillGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateUserCommand
 */
export const se_CreateUserCommand = async (
  input: CreateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateUser");
  let body: any;
  body = JSON.stringify(se_CreateUserRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteAddressBookCommand
 */
export const se_DeleteAddressBookCommand = async (
  input: DeleteAddressBookCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteAddressBook");
  let body: any;
  body = JSON.stringify(se_DeleteAddressBookRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteBusinessReportScheduleCommand
 */
export const se_DeleteBusinessReportScheduleCommand = async (
  input: DeleteBusinessReportScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteBusinessReportSchedule");
  let body: any;
  body = JSON.stringify(se_DeleteBusinessReportScheduleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteConferenceProviderCommand
 */
export const se_DeleteConferenceProviderCommand = async (
  input: DeleteConferenceProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteConferenceProvider");
  let body: any;
  body = JSON.stringify(se_DeleteConferenceProviderRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteContactCommand
 */
export const se_DeleteContactCommand = async (
  input: DeleteContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteContact");
  let body: any;
  body = JSON.stringify(se_DeleteContactRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteDeviceCommand
 */
export const se_DeleteDeviceCommand = async (
  input: DeleteDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteDevice");
  let body: any;
  body = JSON.stringify(se_DeleteDeviceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteDeviceUsageDataCommand
 */
export const se_DeleteDeviceUsageDataCommand = async (
  input: DeleteDeviceUsageDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteDeviceUsageData");
  let body: any;
  body = JSON.stringify(se_DeleteDeviceUsageDataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteGatewayGroupCommand
 */
export const se_DeleteGatewayGroupCommand = async (
  input: DeleteGatewayGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteGatewayGroup");
  let body: any;
  body = JSON.stringify(se_DeleteGatewayGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteNetworkProfileCommand
 */
export const se_DeleteNetworkProfileCommand = async (
  input: DeleteNetworkProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteNetworkProfile");
  let body: any;
  body = JSON.stringify(se_DeleteNetworkProfileRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteProfileCommand
 */
export const se_DeleteProfileCommand = async (
  input: DeleteProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteProfile");
  let body: any;
  body = JSON.stringify(se_DeleteProfileRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteRoomCommand
 */
export const se_DeleteRoomCommand = async (
  input: DeleteRoomCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteRoom");
  let body: any;
  body = JSON.stringify(se_DeleteRoomRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteRoomSkillParameterCommand
 */
export const se_DeleteRoomSkillParameterCommand = async (
  input: DeleteRoomSkillParameterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteRoomSkillParameter");
  let body: any;
  body = JSON.stringify(se_DeleteRoomSkillParameterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteSkillAuthorizationCommand
 */
export const se_DeleteSkillAuthorizationCommand = async (
  input: DeleteSkillAuthorizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteSkillAuthorization");
  let body: any;
  body = JSON.stringify(se_DeleteSkillAuthorizationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteSkillGroupCommand
 */
export const se_DeleteSkillGroupCommand = async (
  input: DeleteSkillGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteSkillGroup");
  let body: any;
  body = JSON.stringify(se_DeleteSkillGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteUserCommand
 */
export const se_DeleteUserCommand = async (
  input: DeleteUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteUser");
  let body: any;
  body = JSON.stringify(se_DeleteUserRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisassociateContactFromAddressBookCommand
 */
export const se_DisassociateContactFromAddressBookCommand = async (
  input: DisassociateContactFromAddressBookCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisassociateContactFromAddressBook");
  let body: any;
  body = JSON.stringify(se_DisassociateContactFromAddressBookRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisassociateDeviceFromRoomCommand
 */
export const se_DisassociateDeviceFromRoomCommand = async (
  input: DisassociateDeviceFromRoomCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisassociateDeviceFromRoom");
  let body: any;
  body = JSON.stringify(se_DisassociateDeviceFromRoomRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisassociateSkillFromSkillGroupCommand
 */
export const se_DisassociateSkillFromSkillGroupCommand = async (
  input: DisassociateSkillFromSkillGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisassociateSkillFromSkillGroup");
  let body: any;
  body = JSON.stringify(se_DisassociateSkillFromSkillGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisassociateSkillFromUsersCommand
 */
export const se_DisassociateSkillFromUsersCommand = async (
  input: DisassociateSkillFromUsersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisassociateSkillFromUsers");
  let body: any;
  body = JSON.stringify(se_DisassociateSkillFromUsersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisassociateSkillGroupFromRoomCommand
 */
export const se_DisassociateSkillGroupFromRoomCommand = async (
  input: DisassociateSkillGroupFromRoomCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisassociateSkillGroupFromRoom");
  let body: any;
  body = JSON.stringify(se_DisassociateSkillGroupFromRoomRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ForgetSmartHomeAppliancesCommand
 */
export const se_ForgetSmartHomeAppliancesCommand = async (
  input: ForgetSmartHomeAppliancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ForgetSmartHomeAppliances");
  let body: any;
  body = JSON.stringify(se_ForgetSmartHomeAppliancesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetAddressBookCommand
 */
export const se_GetAddressBookCommand = async (
  input: GetAddressBookCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetAddressBook");
  let body: any;
  body = JSON.stringify(se_GetAddressBookRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetConferencePreferenceCommand
 */
export const se_GetConferencePreferenceCommand = async (
  input: GetConferencePreferenceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetConferencePreference");
  let body: any;
  body = JSON.stringify(se_GetConferencePreferenceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetConferenceProviderCommand
 */
export const se_GetConferenceProviderCommand = async (
  input: GetConferenceProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetConferenceProvider");
  let body: any;
  body = JSON.stringify(se_GetConferenceProviderRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetContactCommand
 */
export const se_GetContactCommand = async (
  input: GetContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetContact");
  let body: any;
  body = JSON.stringify(se_GetContactRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDeviceCommand
 */
export const se_GetDeviceCommand = async (
  input: GetDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetDevice");
  let body: any;
  body = JSON.stringify(se_GetDeviceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetGatewayCommand
 */
export const se_GetGatewayCommand = async (
  input: GetGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetGateway");
  let body: any;
  body = JSON.stringify(se_GetGatewayRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetGatewayGroupCommand
 */
export const se_GetGatewayGroupCommand = async (
  input: GetGatewayGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetGatewayGroup");
  let body: any;
  body = JSON.stringify(se_GetGatewayGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetInvitationConfigurationCommand
 */
export const se_GetInvitationConfigurationCommand = async (
  input: GetInvitationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetInvitationConfiguration");
  let body: any;
  body = JSON.stringify(se_GetInvitationConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetNetworkProfileCommand
 */
export const se_GetNetworkProfileCommand = async (
  input: GetNetworkProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetNetworkProfile");
  let body: any;
  body = JSON.stringify(se_GetNetworkProfileRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetProfileCommand
 */
export const se_GetProfileCommand = async (
  input: GetProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetProfile");
  let body: any;
  body = JSON.stringify(se_GetProfileRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetRoomCommand
 */
export const se_GetRoomCommand = async (
  input: GetRoomCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetRoom");
  let body: any;
  body = JSON.stringify(se_GetRoomRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetRoomSkillParameterCommand
 */
export const se_GetRoomSkillParameterCommand = async (
  input: GetRoomSkillParameterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetRoomSkillParameter");
  let body: any;
  body = JSON.stringify(se_GetRoomSkillParameterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetSkillGroupCommand
 */
export const se_GetSkillGroupCommand = async (
  input: GetSkillGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetSkillGroup");
  let body: any;
  body = JSON.stringify(se_GetSkillGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListBusinessReportSchedulesCommand
 */
export const se_ListBusinessReportSchedulesCommand = async (
  input: ListBusinessReportSchedulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListBusinessReportSchedules");
  let body: any;
  body = JSON.stringify(se_ListBusinessReportSchedulesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListConferenceProvidersCommand
 */
export const se_ListConferenceProvidersCommand = async (
  input: ListConferenceProvidersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListConferenceProviders");
  let body: any;
  body = JSON.stringify(se_ListConferenceProvidersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListDeviceEventsCommand
 */
export const se_ListDeviceEventsCommand = async (
  input: ListDeviceEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListDeviceEvents");
  let body: any;
  body = JSON.stringify(se_ListDeviceEventsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListGatewayGroupsCommand
 */
export const se_ListGatewayGroupsCommand = async (
  input: ListGatewayGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListGatewayGroups");
  let body: any;
  body = JSON.stringify(se_ListGatewayGroupsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListGatewaysCommand
 */
export const se_ListGatewaysCommand = async (
  input: ListGatewaysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListGateways");
  let body: any;
  body = JSON.stringify(se_ListGatewaysRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListSkillsCommand
 */
export const se_ListSkillsCommand = async (
  input: ListSkillsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListSkills");
  let body: any;
  body = JSON.stringify(se_ListSkillsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListSkillsStoreCategoriesCommand
 */
export const se_ListSkillsStoreCategoriesCommand = async (
  input: ListSkillsStoreCategoriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListSkillsStoreCategories");
  let body: any;
  body = JSON.stringify(se_ListSkillsStoreCategoriesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListSkillsStoreSkillsByCategoryCommand
 */
export const se_ListSkillsStoreSkillsByCategoryCommand = async (
  input: ListSkillsStoreSkillsByCategoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListSkillsStoreSkillsByCategory");
  let body: any;
  body = JSON.stringify(se_ListSkillsStoreSkillsByCategoryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListSmartHomeAppliancesCommand
 */
export const se_ListSmartHomeAppliancesCommand = async (
  input: ListSmartHomeAppliancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListSmartHomeAppliances");
  let body: any;
  body = JSON.stringify(se_ListSmartHomeAppliancesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsCommand
 */
export const se_ListTagsCommand = async (
  input: ListTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTags");
  let body: any;
  body = JSON.stringify(se_ListTagsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutConferencePreferenceCommand
 */
export const se_PutConferencePreferenceCommand = async (
  input: PutConferencePreferenceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutConferencePreference");
  let body: any;
  body = JSON.stringify(se_PutConferencePreferenceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutInvitationConfigurationCommand
 */
export const se_PutInvitationConfigurationCommand = async (
  input: PutInvitationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutInvitationConfiguration");
  let body: any;
  body = JSON.stringify(se_PutInvitationConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutRoomSkillParameterCommand
 */
export const se_PutRoomSkillParameterCommand = async (
  input: PutRoomSkillParameterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutRoomSkillParameter");
  let body: any;
  body = JSON.stringify(se_PutRoomSkillParameterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutSkillAuthorizationCommand
 */
export const se_PutSkillAuthorizationCommand = async (
  input: PutSkillAuthorizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutSkillAuthorization");
  let body: any;
  body = JSON.stringify(se_PutSkillAuthorizationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RegisterAVSDeviceCommand
 */
export const se_RegisterAVSDeviceCommand = async (
  input: RegisterAVSDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RegisterAVSDevice");
  let body: any;
  body = JSON.stringify(se_RegisterAVSDeviceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RejectSkillCommand
 */
export const se_RejectSkillCommand = async (
  input: RejectSkillCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RejectSkill");
  let body: any;
  body = JSON.stringify(se_RejectSkillRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ResolveRoomCommand
 */
export const se_ResolveRoomCommand = async (
  input: ResolveRoomCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ResolveRoom");
  let body: any;
  body = JSON.stringify(se_ResolveRoomRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RevokeInvitationCommand
 */
export const se_RevokeInvitationCommand = async (
  input: RevokeInvitationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RevokeInvitation");
  let body: any;
  body = JSON.stringify(se_RevokeInvitationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SearchAddressBooksCommand
 */
export const se_SearchAddressBooksCommand = async (
  input: SearchAddressBooksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SearchAddressBooks");
  let body: any;
  body = JSON.stringify(se_SearchAddressBooksRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SearchContactsCommand
 */
export const se_SearchContactsCommand = async (
  input: SearchContactsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SearchContacts");
  let body: any;
  body = JSON.stringify(se_SearchContactsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SearchDevicesCommand
 */
export const se_SearchDevicesCommand = async (
  input: SearchDevicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SearchDevices");
  let body: any;
  body = JSON.stringify(se_SearchDevicesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SearchNetworkProfilesCommand
 */
export const se_SearchNetworkProfilesCommand = async (
  input: SearchNetworkProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SearchNetworkProfiles");
  let body: any;
  body = JSON.stringify(se_SearchNetworkProfilesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SearchProfilesCommand
 */
export const se_SearchProfilesCommand = async (
  input: SearchProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SearchProfiles");
  let body: any;
  body = JSON.stringify(se_SearchProfilesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SearchRoomsCommand
 */
export const se_SearchRoomsCommand = async (
  input: SearchRoomsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SearchRooms");
  let body: any;
  body = JSON.stringify(se_SearchRoomsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SearchSkillGroupsCommand
 */
export const se_SearchSkillGroupsCommand = async (
  input: SearchSkillGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SearchSkillGroups");
  let body: any;
  body = JSON.stringify(se_SearchSkillGroupsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SearchUsersCommand
 */
export const se_SearchUsersCommand = async (
  input: SearchUsersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SearchUsers");
  let body: any;
  body = JSON.stringify(se_SearchUsersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SendAnnouncementCommand
 */
export const se_SendAnnouncementCommand = async (
  input: SendAnnouncementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SendAnnouncement");
  let body: any;
  body = JSON.stringify(se_SendAnnouncementRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SendInvitationCommand
 */
export const se_SendInvitationCommand = async (
  input: SendInvitationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SendInvitation");
  let body: any;
  body = JSON.stringify(se_SendInvitationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartDeviceSyncCommand
 */
export const se_StartDeviceSyncCommand = async (
  input: StartDeviceSyncCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartDeviceSync");
  let body: any;
  body = JSON.stringify(se_StartDeviceSyncRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartSmartHomeApplianceDiscoveryCommand
 */
export const se_StartSmartHomeApplianceDiscoveryCommand = async (
  input: StartSmartHomeApplianceDiscoveryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartSmartHomeApplianceDiscovery");
  let body: any;
  body = JSON.stringify(se_StartSmartHomeApplianceDiscoveryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TagResource");
  let body: any;
  body = JSON.stringify(se_TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UntagResource");
  let body: any;
  body = JSON.stringify(se_UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateAddressBookCommand
 */
export const se_UpdateAddressBookCommand = async (
  input: UpdateAddressBookCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateAddressBook");
  let body: any;
  body = JSON.stringify(se_UpdateAddressBookRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateBusinessReportScheduleCommand
 */
export const se_UpdateBusinessReportScheduleCommand = async (
  input: UpdateBusinessReportScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateBusinessReportSchedule");
  let body: any;
  body = JSON.stringify(se_UpdateBusinessReportScheduleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateConferenceProviderCommand
 */
export const se_UpdateConferenceProviderCommand = async (
  input: UpdateConferenceProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateConferenceProvider");
  let body: any;
  body = JSON.stringify(se_UpdateConferenceProviderRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateContactCommand
 */
export const se_UpdateContactCommand = async (
  input: UpdateContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateContact");
  let body: any;
  body = JSON.stringify(se_UpdateContactRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateDeviceCommand
 */
export const se_UpdateDeviceCommand = async (
  input: UpdateDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateDevice");
  let body: any;
  body = JSON.stringify(se_UpdateDeviceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateGatewayCommand
 */
export const se_UpdateGatewayCommand = async (
  input: UpdateGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateGateway");
  let body: any;
  body = JSON.stringify(se_UpdateGatewayRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateGatewayGroupCommand
 */
export const se_UpdateGatewayGroupCommand = async (
  input: UpdateGatewayGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateGatewayGroup");
  let body: any;
  body = JSON.stringify(se_UpdateGatewayGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateNetworkProfileCommand
 */
export const se_UpdateNetworkProfileCommand = async (
  input: UpdateNetworkProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateNetworkProfile");
  let body: any;
  body = JSON.stringify(se_UpdateNetworkProfileRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateProfileCommand
 */
export const se_UpdateProfileCommand = async (
  input: UpdateProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateProfile");
  let body: any;
  body = JSON.stringify(se_UpdateProfileRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateRoomCommand
 */
export const se_UpdateRoomCommand = async (
  input: UpdateRoomCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateRoom");
  let body: any;
  body = JSON.stringify(se_UpdateRoomRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateSkillGroupCommand
 */
export const se_UpdateSkillGroupCommand = async (
  input: UpdateSkillGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateSkillGroup");
  let body: any;
  body = JSON.stringify(se_UpdateSkillGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1ApproveSkillCommand
 */
export const de_ApproveSkillCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ApproveSkillCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ApproveSkillCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ApproveSkillResponse(data, context);
  const response: ApproveSkillCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ApproveSkillCommandError
 */
const de_ApproveSkillCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ApproveSkillCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.alexaforbusiness#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AssociateContactWithAddressBookCommand
 */
export const de_AssociateContactWithAddressBookCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateContactWithAddressBookCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AssociateContactWithAddressBookCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AssociateContactWithAddressBookResponse(data, context);
  const response: AssociateContactWithAddressBookCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AssociateContactWithAddressBookCommandError
 */
const de_AssociateContactWithAddressBookCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateContactWithAddressBookCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededException":
    case "com.amazonaws.alexaforbusiness#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AssociateDeviceWithNetworkProfileCommand
 */
export const de_AssociateDeviceWithNetworkProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateDeviceWithNetworkProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AssociateDeviceWithNetworkProfileCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AssociateDeviceWithNetworkProfileResponse(data, context);
  const response: AssociateDeviceWithNetworkProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AssociateDeviceWithNetworkProfileCommandError
 */
const de_AssociateDeviceWithNetworkProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateDeviceWithNetworkProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "DeviceNotRegisteredException":
    case "com.amazonaws.alexaforbusiness#DeviceNotRegisteredException":
      throw await de_DeviceNotRegisteredExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AssociateDeviceWithRoomCommand
 */
export const de_AssociateDeviceWithRoomCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateDeviceWithRoomCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AssociateDeviceWithRoomCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AssociateDeviceWithRoomResponse(data, context);
  const response: AssociateDeviceWithRoomCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AssociateDeviceWithRoomCommandError
 */
const de_AssociateDeviceWithRoomCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateDeviceWithRoomCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "DeviceNotRegisteredException":
    case "com.amazonaws.alexaforbusiness#DeviceNotRegisteredException":
      throw await de_DeviceNotRegisteredExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.alexaforbusiness#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AssociateSkillGroupWithRoomCommand
 */
export const de_AssociateSkillGroupWithRoomCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateSkillGroupWithRoomCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AssociateSkillGroupWithRoomCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AssociateSkillGroupWithRoomResponse(data, context);
  const response: AssociateSkillGroupWithRoomCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AssociateSkillGroupWithRoomCommandError
 */
const de_AssociateSkillGroupWithRoomCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateSkillGroupWithRoomCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AssociateSkillWithSkillGroupCommand
 */
export const de_AssociateSkillWithSkillGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateSkillWithSkillGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AssociateSkillWithSkillGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AssociateSkillWithSkillGroupResponse(data, context);
  const response: AssociateSkillWithSkillGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AssociateSkillWithSkillGroupCommandError
 */
const de_AssociateSkillWithSkillGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateSkillWithSkillGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "SkillNotLinkedException":
    case "com.amazonaws.alexaforbusiness#SkillNotLinkedException":
      throw await de_SkillNotLinkedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AssociateSkillWithUsersCommand
 */
export const de_AssociateSkillWithUsersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateSkillWithUsersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AssociateSkillWithUsersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AssociateSkillWithUsersResponse(data, context);
  const response: AssociateSkillWithUsersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AssociateSkillWithUsersCommandError
 */
const de_AssociateSkillWithUsersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateSkillWithUsersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateAddressBookCommand
 */
export const de_CreateAddressBookCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAddressBookCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateAddressBookCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateAddressBookResponse(data, context);
  const response: CreateAddressBookCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateAddressBookCommandError
 */
const de_CreateAddressBookCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAddressBookCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.alexaforbusiness#AlreadyExistsException":
      throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.alexaforbusiness#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateBusinessReportScheduleCommand
 */
export const de_CreateBusinessReportScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBusinessReportScheduleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateBusinessReportScheduleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateBusinessReportScheduleResponse(data, context);
  const response: CreateBusinessReportScheduleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateBusinessReportScheduleCommandError
 */
const de_CreateBusinessReportScheduleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBusinessReportScheduleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.alexaforbusiness#AlreadyExistsException":
      throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateConferenceProviderCommand
 */
export const de_CreateConferenceProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConferenceProviderCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateConferenceProviderCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateConferenceProviderResponse(data, context);
  const response: CreateConferenceProviderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateConferenceProviderCommandError
 */
const de_CreateConferenceProviderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConferenceProviderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.alexaforbusiness#AlreadyExistsException":
      throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateContactCommand
 */
export const de_CreateContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateContactCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateContactCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateContactResponse(data, context);
  const response: CreateContactCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateContactCommandError
 */
const de_CreateContactCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateContactCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.alexaforbusiness#AlreadyExistsException":
      throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.alexaforbusiness#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateGatewayGroupCommand
 */
export const de_CreateGatewayGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGatewayGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateGatewayGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateGatewayGroupResponse(data, context);
  const response: CreateGatewayGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateGatewayGroupCommandError
 */
const de_CreateGatewayGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGatewayGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.alexaforbusiness#AlreadyExistsException":
      throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.alexaforbusiness#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateNetworkProfileCommand
 */
export const de_CreateNetworkProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNetworkProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateNetworkProfileCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateNetworkProfileResponse(data, context);
  const response: CreateNetworkProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateNetworkProfileCommandError
 */
const de_CreateNetworkProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNetworkProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.alexaforbusiness#AlreadyExistsException":
      throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InvalidCertificateAuthorityException":
    case "com.amazonaws.alexaforbusiness#InvalidCertificateAuthorityException":
      throw await de_InvalidCertificateAuthorityExceptionRes(parsedOutput, context);
    case "InvalidServiceLinkedRoleStateException":
    case "com.amazonaws.alexaforbusiness#InvalidServiceLinkedRoleStateException":
      throw await de_InvalidServiceLinkedRoleStateExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.alexaforbusiness#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateProfileCommand
 */
export const de_CreateProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateProfileCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateProfileResponse(data, context);
  const response: CreateProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateProfileCommandError
 */
const de_CreateProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.alexaforbusiness#AlreadyExistsException":
      throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.alexaforbusiness#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateRoomCommand
 */
export const de_CreateRoomCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRoomCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateRoomCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateRoomResponse(data, context);
  const response: CreateRoomCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateRoomCommandError
 */
const de_CreateRoomCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRoomCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.alexaforbusiness#AlreadyExistsException":
      throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.alexaforbusiness#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateSkillGroupCommand
 */
export const de_CreateSkillGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSkillGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateSkillGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateSkillGroupResponse(data, context);
  const response: CreateSkillGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateSkillGroupCommandError
 */
const de_CreateSkillGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSkillGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.alexaforbusiness#AlreadyExistsException":
      throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.alexaforbusiness#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateUserCommand
 */
export const de_CreateUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateUserCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateUserResponse(data, context);
  const response: CreateUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateUserCommandError
 */
const de_CreateUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.alexaforbusiness#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.alexaforbusiness#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteAddressBookCommand
 */
export const de_DeleteAddressBookCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAddressBookCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteAddressBookCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteAddressBookResponse(data, context);
  const response: DeleteAddressBookCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteAddressBookCommandError
 */
const de_DeleteAddressBookCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAddressBookCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteBusinessReportScheduleCommand
 */
export const de_DeleteBusinessReportScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBusinessReportScheduleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteBusinessReportScheduleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteBusinessReportScheduleResponse(data, context);
  const response: DeleteBusinessReportScheduleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteBusinessReportScheduleCommandError
 */
const de_DeleteBusinessReportScheduleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBusinessReportScheduleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteConferenceProviderCommand
 */
export const de_DeleteConferenceProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConferenceProviderCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteConferenceProviderCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteConferenceProviderResponse(data, context);
  const response: DeleteConferenceProviderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteConferenceProviderCommandError
 */
const de_DeleteConferenceProviderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConferenceProviderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteContactCommand
 */
export const de_DeleteContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteContactCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteContactCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteContactResponse(data, context);
  const response: DeleteContactCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteContactCommandError
 */
const de_DeleteContactCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteContactCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteDeviceCommand
 */
export const de_DeleteDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeviceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteDeviceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteDeviceResponse(data, context);
  const response: DeleteDeviceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteDeviceCommandError
 */
const de_DeleteDeviceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeviceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InvalidCertificateAuthorityException":
    case "com.amazonaws.alexaforbusiness#InvalidCertificateAuthorityException":
      throw await de_InvalidCertificateAuthorityExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteDeviceUsageDataCommand
 */
export const de_DeleteDeviceUsageDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeviceUsageDataCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteDeviceUsageDataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteDeviceUsageDataResponse(data, context);
  const response: DeleteDeviceUsageDataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteDeviceUsageDataCommandError
 */
const de_DeleteDeviceUsageDataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeviceUsageDataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DeviceNotRegisteredException":
    case "com.amazonaws.alexaforbusiness#DeviceNotRegisteredException":
      throw await de_DeviceNotRegisteredExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.alexaforbusiness#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteGatewayGroupCommand
 */
export const de_DeleteGatewayGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGatewayGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteGatewayGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteGatewayGroupResponse(data, context);
  const response: DeleteGatewayGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteGatewayGroupCommandError
 */
const de_DeleteGatewayGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGatewayGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceAssociatedException":
    case "com.amazonaws.alexaforbusiness#ResourceAssociatedException":
      throw await de_ResourceAssociatedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteNetworkProfileCommand
 */
export const de_DeleteNetworkProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNetworkProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteNetworkProfileCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteNetworkProfileResponse(data, context);
  const response: DeleteNetworkProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteNetworkProfileCommandError
 */
const de_DeleteNetworkProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNetworkProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.alexaforbusiness#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteProfileCommand
 */
export const de_DeleteProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteProfileCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteProfileResponse(data, context);
  const response: DeleteProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteProfileCommandError
 */
const de_DeleteProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteRoomCommand
 */
export const de_DeleteRoomCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRoomCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteRoomCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteRoomResponse(data, context);
  const response: DeleteRoomCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteRoomCommandError
 */
const de_DeleteRoomCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRoomCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteRoomSkillParameterCommand
 */
export const de_DeleteRoomSkillParameterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRoomSkillParameterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteRoomSkillParameterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteRoomSkillParameterResponse(data, context);
  const response: DeleteRoomSkillParameterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteRoomSkillParameterCommandError
 */
const de_DeleteRoomSkillParameterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRoomSkillParameterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteSkillAuthorizationCommand
 */
export const de_DeleteSkillAuthorizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSkillAuthorizationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteSkillAuthorizationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteSkillAuthorizationResponse(data, context);
  const response: DeleteSkillAuthorizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteSkillAuthorizationCommandError
 */
const de_DeleteSkillAuthorizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSkillAuthorizationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteSkillGroupCommand
 */
export const de_DeleteSkillGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSkillGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteSkillGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteSkillGroupResponse(data, context);
  const response: DeleteSkillGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteSkillGroupCommandError
 */
const de_DeleteSkillGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSkillGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteUserCommand
 */
export const de_DeleteUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteUserCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteUserResponse(data, context);
  const response: DeleteUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteUserCommandError
 */
const de_DeleteUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DisassociateContactFromAddressBookCommand
 */
export const de_DisassociateContactFromAddressBookCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateContactFromAddressBookCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisassociateContactFromAddressBookCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DisassociateContactFromAddressBookResponse(data, context);
  const response: DisassociateContactFromAddressBookCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DisassociateContactFromAddressBookCommandError
 */
const de_DisassociateContactFromAddressBookCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateContactFromAddressBookCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1DisassociateDeviceFromRoomCommand
 */
export const de_DisassociateDeviceFromRoomCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateDeviceFromRoomCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisassociateDeviceFromRoomCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DisassociateDeviceFromRoomResponse(data, context);
  const response: DisassociateDeviceFromRoomCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DisassociateDeviceFromRoomCommandError
 */
const de_DisassociateDeviceFromRoomCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateDeviceFromRoomCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "DeviceNotRegisteredException":
    case "com.amazonaws.alexaforbusiness#DeviceNotRegisteredException":
      throw await de_DeviceNotRegisteredExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DisassociateSkillFromSkillGroupCommand
 */
export const de_DisassociateSkillFromSkillGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateSkillFromSkillGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisassociateSkillFromSkillGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DisassociateSkillFromSkillGroupResponse(data, context);
  const response: DisassociateSkillFromSkillGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DisassociateSkillFromSkillGroupCommandError
 */
const de_DisassociateSkillFromSkillGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateSkillFromSkillGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DisassociateSkillFromUsersCommand
 */
export const de_DisassociateSkillFromUsersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateSkillFromUsersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisassociateSkillFromUsersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DisassociateSkillFromUsersResponse(data, context);
  const response: DisassociateSkillFromUsersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DisassociateSkillFromUsersCommandError
 */
const de_DisassociateSkillFromUsersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateSkillFromUsersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DisassociateSkillGroupFromRoomCommand
 */
export const de_DisassociateSkillGroupFromRoomCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateSkillGroupFromRoomCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisassociateSkillGroupFromRoomCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DisassociateSkillGroupFromRoomResponse(data, context);
  const response: DisassociateSkillGroupFromRoomCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DisassociateSkillGroupFromRoomCommandError
 */
const de_DisassociateSkillGroupFromRoomCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateSkillGroupFromRoomCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ForgetSmartHomeAppliancesCommand
 */
export const de_ForgetSmartHomeAppliancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ForgetSmartHomeAppliancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ForgetSmartHomeAppliancesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ForgetSmartHomeAppliancesResponse(data, context);
  const response: ForgetSmartHomeAppliancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ForgetSmartHomeAppliancesCommandError
 */
const de_ForgetSmartHomeAppliancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ForgetSmartHomeAppliancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetAddressBookCommand
 */
export const de_GetAddressBookCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAddressBookCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetAddressBookCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetAddressBookResponse(data, context);
  const response: GetAddressBookCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetAddressBookCommandError
 */
const de_GetAddressBookCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAddressBookCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetConferencePreferenceCommand
 */
export const de_GetConferencePreferenceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConferencePreferenceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetConferencePreferenceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetConferencePreferenceResponse(data, context);
  const response: GetConferencePreferenceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetConferencePreferenceCommandError
 */
const de_GetConferencePreferenceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConferencePreferenceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetConferenceProviderCommand
 */
export const de_GetConferenceProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConferenceProviderCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetConferenceProviderCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetConferenceProviderResponse(data, context);
  const response: GetConferenceProviderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetConferenceProviderCommandError
 */
const de_GetConferenceProviderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConferenceProviderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetContactCommand
 */
export const de_GetContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContactCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetContactCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetContactResponse(data, context);
  const response: GetContactCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetContactCommandError
 */
const de_GetContactCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContactCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetDeviceCommand
 */
export const de_GetDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeviceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetDeviceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetDeviceResponse(data, context);
  const response: GetDeviceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetDeviceCommandError
 */
const de_GetDeviceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeviceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetGatewayCommand
 */
export const de_GetGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGatewayCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetGatewayCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetGatewayResponse(data, context);
  const response: GetGatewayCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetGatewayCommandError
 */
const de_GetGatewayCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGatewayCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetGatewayGroupCommand
 */
export const de_GetGatewayGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGatewayGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetGatewayGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetGatewayGroupResponse(data, context);
  const response: GetGatewayGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetGatewayGroupCommandError
 */
const de_GetGatewayGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGatewayGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetInvitationConfigurationCommand
 */
export const de_GetInvitationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInvitationConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetInvitationConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetInvitationConfigurationResponse(data, context);
  const response: GetInvitationConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetInvitationConfigurationCommandError
 */
const de_GetInvitationConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInvitationConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetNetworkProfileCommand
 */
export const de_GetNetworkProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNetworkProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetNetworkProfileCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetNetworkProfileResponse(data, context);
  const response: GetNetworkProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetNetworkProfileCommandError
 */
const de_GetNetworkProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNetworkProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidSecretsManagerResourceException":
    case "com.amazonaws.alexaforbusiness#InvalidSecretsManagerResourceException":
      throw await de_InvalidSecretsManagerResourceExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetProfileCommand
 */
export const de_GetProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetProfileCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetProfileResponse(data, context);
  const response: GetProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetProfileCommandError
 */
const de_GetProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetRoomCommand
 */
export const de_GetRoomCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRoomCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetRoomCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetRoomResponse(data, context);
  const response: GetRoomCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetRoomCommandError
 */
const de_GetRoomCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRoomCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetRoomSkillParameterCommand
 */
export const de_GetRoomSkillParameterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRoomSkillParameterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetRoomSkillParameterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetRoomSkillParameterResponse(data, context);
  const response: GetRoomSkillParameterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetRoomSkillParameterCommandError
 */
const de_GetRoomSkillParameterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRoomSkillParameterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetSkillGroupCommand
 */
export const de_GetSkillGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSkillGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetSkillGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetSkillGroupResponse(data, context);
  const response: GetSkillGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetSkillGroupCommandError
 */
const de_GetSkillGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSkillGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListBusinessReportSchedulesCommand
 */
export const de_ListBusinessReportSchedulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBusinessReportSchedulesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListBusinessReportSchedulesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListBusinessReportSchedulesResponse(data, context);
  const response: ListBusinessReportSchedulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListBusinessReportSchedulesCommandError
 */
const de_ListBusinessReportSchedulesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBusinessReportSchedulesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1ListConferenceProvidersCommand
 */
export const de_ListConferenceProvidersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConferenceProvidersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListConferenceProvidersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListConferenceProvidersResponse(data, context);
  const response: ListConferenceProvidersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListConferenceProvidersCommandError
 */
const de_ListConferenceProvidersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConferenceProvidersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1ListDeviceEventsCommand
 */
export const de_ListDeviceEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeviceEventsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListDeviceEventsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListDeviceEventsResponse(data, context);
  const response: ListDeviceEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListDeviceEventsCommandError
 */
const de_ListDeviceEventsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeviceEventsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListGatewayGroupsCommand
 */
export const de_ListGatewayGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGatewayGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListGatewayGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListGatewayGroupsResponse(data, context);
  const response: ListGatewayGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListGatewayGroupsCommandError
 */
const de_ListGatewayGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGatewayGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1ListGatewaysCommand
 */
export const de_ListGatewaysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGatewaysCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListGatewaysCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListGatewaysResponse(data, context);
  const response: ListGatewaysCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListGatewaysCommandError
 */
const de_ListGatewaysCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGatewaysCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1ListSkillsCommand
 */
export const de_ListSkillsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSkillsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListSkillsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListSkillsResponse(data, context);
  const response: ListSkillsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListSkillsCommandError
 */
const de_ListSkillsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSkillsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1ListSkillsStoreCategoriesCommand
 */
export const de_ListSkillsStoreCategoriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSkillsStoreCategoriesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListSkillsStoreCategoriesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListSkillsStoreCategoriesResponse(data, context);
  const response: ListSkillsStoreCategoriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListSkillsStoreCategoriesCommandError
 */
const de_ListSkillsStoreCategoriesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSkillsStoreCategoriesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1ListSkillsStoreSkillsByCategoryCommand
 */
export const de_ListSkillsStoreSkillsByCategoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSkillsStoreSkillsByCategoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListSkillsStoreSkillsByCategoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListSkillsStoreSkillsByCategoryResponse(data, context);
  const response: ListSkillsStoreSkillsByCategoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListSkillsStoreSkillsByCategoryCommandError
 */
const de_ListSkillsStoreSkillsByCategoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSkillsStoreSkillsByCategoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1ListSmartHomeAppliancesCommand
 */
export const de_ListSmartHomeAppliancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSmartHomeAppliancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListSmartHomeAppliancesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListSmartHomeAppliancesResponse(data, context);
  const response: ListSmartHomeAppliancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListSmartHomeAppliancesCommandError
 */
const de_ListSmartHomeAppliancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSmartHomeAppliancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListTagsCommand
 */
export const de_ListTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTagsResponse(data, context);
  const response: ListTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListTagsCommandError
 */
const de_ListTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1PutConferencePreferenceCommand
 */
export const de_PutConferencePreferenceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutConferencePreferenceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutConferencePreferenceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutConferencePreferenceResponse(data, context);
  const response: PutConferencePreferenceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutConferencePreferenceCommandError
 */
const de_PutConferencePreferenceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutConferencePreferenceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1PutInvitationConfigurationCommand
 */
export const de_PutInvitationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutInvitationConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutInvitationConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutInvitationConfigurationResponse(data, context);
  const response: PutInvitationConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutInvitationConfigurationCommandError
 */
const de_PutInvitationConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutInvitationConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1PutRoomSkillParameterCommand
 */
export const de_PutRoomSkillParameterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRoomSkillParameterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutRoomSkillParameterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutRoomSkillParameterResponse(data, context);
  const response: PutRoomSkillParameterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutRoomSkillParameterCommandError
 */
const de_PutRoomSkillParameterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRoomSkillParameterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1PutSkillAuthorizationCommand
 */
export const de_PutSkillAuthorizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSkillAuthorizationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutSkillAuthorizationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutSkillAuthorizationResponse(data, context);
  const response: PutSkillAuthorizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutSkillAuthorizationCommandError
 */
const de_PutSkillAuthorizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSkillAuthorizationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.alexaforbusiness#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1RegisterAVSDeviceCommand
 */
export const de_RegisterAVSDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterAVSDeviceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RegisterAVSDeviceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RegisterAVSDeviceResponse(data, context);
  const response: RegisterAVSDeviceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RegisterAVSDeviceCommandError
 */
const de_RegisterAVSDeviceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterAVSDeviceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InvalidDeviceException":
    case "com.amazonaws.alexaforbusiness#InvalidDeviceException":
      throw await de_InvalidDeviceExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.alexaforbusiness#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1RejectSkillCommand
 */
export const de_RejectSkillCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectSkillCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RejectSkillCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RejectSkillResponse(data, context);
  const response: RejectSkillCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RejectSkillCommandError
 */
const de_RejectSkillCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectSkillCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ResolveRoomCommand
 */
export const de_ResolveRoomCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResolveRoomCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ResolveRoomCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ResolveRoomResponse(data, context);
  const response: ResolveRoomCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ResolveRoomCommandError
 */
const de_ResolveRoomCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResolveRoomCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1RevokeInvitationCommand
 */
export const de_RevokeInvitationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeInvitationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RevokeInvitationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RevokeInvitationResponse(data, context);
  const response: RevokeInvitationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RevokeInvitationCommandError
 */
const de_RevokeInvitationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeInvitationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1SearchAddressBooksCommand
 */
export const de_SearchAddressBooksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchAddressBooksCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SearchAddressBooksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SearchAddressBooksResponse(data, context);
  const response: SearchAddressBooksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1SearchAddressBooksCommandError
 */
const de_SearchAddressBooksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchAddressBooksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1SearchContactsCommand
 */
export const de_SearchContactsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchContactsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SearchContactsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SearchContactsResponse(data, context);
  const response: SearchContactsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1SearchContactsCommandError
 */
const de_SearchContactsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchContactsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1SearchDevicesCommand
 */
export const de_SearchDevicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchDevicesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SearchDevicesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SearchDevicesResponse(data, context);
  const response: SearchDevicesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1SearchDevicesCommandError
 */
const de_SearchDevicesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchDevicesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1SearchNetworkProfilesCommand
 */
export const de_SearchNetworkProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchNetworkProfilesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SearchNetworkProfilesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SearchNetworkProfilesResponse(data, context);
  const response: SearchNetworkProfilesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1SearchNetworkProfilesCommandError
 */
const de_SearchNetworkProfilesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchNetworkProfilesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1SearchProfilesCommand
 */
export const de_SearchProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchProfilesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SearchProfilesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SearchProfilesResponse(data, context);
  const response: SearchProfilesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1SearchProfilesCommandError
 */
const de_SearchProfilesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchProfilesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1SearchRoomsCommand
 */
export const de_SearchRoomsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchRoomsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SearchRoomsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SearchRoomsResponse(data, context);
  const response: SearchRoomsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1SearchRoomsCommandError
 */
const de_SearchRoomsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchRoomsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1SearchSkillGroupsCommand
 */
export const de_SearchSkillGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchSkillGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SearchSkillGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SearchSkillGroupsResponse(data, context);
  const response: SearchSkillGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1SearchSkillGroupsCommandError
 */
const de_SearchSkillGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchSkillGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1SearchUsersCommand
 */
export const de_SearchUsersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchUsersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SearchUsersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SearchUsersResponse(data, context);
  const response: SearchUsersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1SearchUsersCommandError
 */
const de_SearchUsersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchUsersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1SendAnnouncementCommand
 */
export const de_SendAnnouncementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendAnnouncementCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SendAnnouncementCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SendAnnouncementResponse(data, context);
  const response: SendAnnouncementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1SendAnnouncementCommandError
 */
const de_SendAnnouncementCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendAnnouncementCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.alexaforbusiness#AlreadyExistsException":
      throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.alexaforbusiness#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1SendInvitationCommand
 */
export const de_SendInvitationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendInvitationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SendInvitationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SendInvitationResponse(data, context);
  const response: SendInvitationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1SendInvitationCommandError
 */
const de_SendInvitationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendInvitationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InvalidUserStatusException":
    case "com.amazonaws.alexaforbusiness#InvalidUserStatusException":
      throw await de_InvalidUserStatusExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StartDeviceSyncCommand
 */
export const de_StartDeviceSyncCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDeviceSyncCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartDeviceSyncCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartDeviceSyncResponse(data, context);
  const response: StartDeviceSyncCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StartDeviceSyncCommandError
 */
const de_StartDeviceSyncCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDeviceSyncCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DeviceNotRegisteredException":
    case "com.amazonaws.alexaforbusiness#DeviceNotRegisteredException":
      throw await de_DeviceNotRegisteredExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StartSmartHomeApplianceDiscoveryCommand
 */
export const de_StartSmartHomeApplianceDiscoveryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSmartHomeApplianceDiscoveryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartSmartHomeApplianceDiscoveryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartSmartHomeApplianceDiscoveryResponse(data, context);
  const response: StartSmartHomeApplianceDiscoveryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StartSmartHomeApplianceDiscoveryCommandError
 */
const de_StartSmartHomeApplianceDiscoveryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSmartHomeApplianceDiscoveryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1TagResourceCommandError
 */
const de_TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UntagResourceCommandError
 */
const de_UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateAddressBookCommand
 */
export const de_UpdateAddressBookCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAddressBookCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateAddressBookCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateAddressBookResponse(data, context);
  const response: UpdateAddressBookCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateAddressBookCommandError
 */
const de_UpdateAddressBookCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAddressBookCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "NameInUseException":
    case "com.amazonaws.alexaforbusiness#NameInUseException":
      throw await de_NameInUseExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateBusinessReportScheduleCommand
 */
export const de_UpdateBusinessReportScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBusinessReportScheduleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateBusinessReportScheduleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateBusinessReportScheduleResponse(data, context);
  const response: UpdateBusinessReportScheduleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateBusinessReportScheduleCommandError
 */
const de_UpdateBusinessReportScheduleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBusinessReportScheduleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateConferenceProviderCommand
 */
export const de_UpdateConferenceProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConferenceProviderCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateConferenceProviderCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateConferenceProviderResponse(data, context);
  const response: UpdateConferenceProviderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateConferenceProviderCommandError
 */
const de_UpdateConferenceProviderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConferenceProviderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateContactCommand
 */
export const de_UpdateContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContactCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateContactCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateContactResponse(data, context);
  const response: UpdateContactCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateContactCommandError
 */
const de_UpdateContactCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContactCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateDeviceCommand
 */
export const de_UpdateDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDeviceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateDeviceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateDeviceResponse(data, context);
  const response: UpdateDeviceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateDeviceCommandError
 */
const de_UpdateDeviceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDeviceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "DeviceNotRegisteredException":
    case "com.amazonaws.alexaforbusiness#DeviceNotRegisteredException":
      throw await de_DeviceNotRegisteredExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateGatewayCommand
 */
export const de_UpdateGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGatewayCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateGatewayCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateGatewayResponse(data, context);
  const response: UpdateGatewayCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateGatewayCommandError
 */
const de_UpdateGatewayCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGatewayCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NameInUseException":
    case "com.amazonaws.alexaforbusiness#NameInUseException":
      throw await de_NameInUseExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateGatewayGroupCommand
 */
export const de_UpdateGatewayGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGatewayGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateGatewayGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateGatewayGroupResponse(data, context);
  const response: UpdateGatewayGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateGatewayGroupCommandError
 */
const de_UpdateGatewayGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGatewayGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NameInUseException":
    case "com.amazonaws.alexaforbusiness#NameInUseException":
      throw await de_NameInUseExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateNetworkProfileCommand
 */
export const de_UpdateNetworkProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNetworkProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateNetworkProfileCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateNetworkProfileResponse(data, context);
  const response: UpdateNetworkProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateNetworkProfileCommandError
 */
const de_UpdateNetworkProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNetworkProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InvalidCertificateAuthorityException":
    case "com.amazonaws.alexaforbusiness#InvalidCertificateAuthorityException":
      throw await de_InvalidCertificateAuthorityExceptionRes(parsedOutput, context);
    case "InvalidSecretsManagerResourceException":
    case "com.amazonaws.alexaforbusiness#InvalidSecretsManagerResourceException":
      throw await de_InvalidSecretsManagerResourceExceptionRes(parsedOutput, context);
    case "NameInUseException":
    case "com.amazonaws.alexaforbusiness#NameInUseException":
      throw await de_NameInUseExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateProfileCommand
 */
export const de_UpdateProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateProfileCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateProfileResponse(data, context);
  const response: UpdateProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateProfileCommandError
 */
const de_UpdateProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "NameInUseException":
    case "com.amazonaws.alexaforbusiness#NameInUseException":
      throw await de_NameInUseExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateRoomCommand
 */
export const de_UpdateRoomCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRoomCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateRoomCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateRoomResponse(data, context);
  const response: UpdateRoomCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateRoomCommandError
 */
const de_UpdateRoomCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRoomCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NameInUseException":
    case "com.amazonaws.alexaforbusiness#NameInUseException":
      throw await de_NameInUseExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateSkillGroupCommand
 */
export const de_UpdateSkillGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSkillGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateSkillGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateSkillGroupResponse(data, context);
  const response: UpdateSkillGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateSkillGroupCommandError
 */
const de_UpdateSkillGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSkillGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.alexaforbusiness#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "NameInUseException":
    case "com.amazonaws.alexaforbusiness#NameInUseException":
      throw await de_NameInUseExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.alexaforbusiness#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AlreadyExistsExceptionRes
 */
const de_AlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AlreadyExistsException(body, context);
  const exception = new AlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ConcurrentModificationExceptionRes
 */
const de_ConcurrentModificationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ConcurrentModificationException(body, context);
  const exception = new ConcurrentModificationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1DeviceNotRegisteredExceptionRes
 */
const de_DeviceNotRegisteredExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DeviceNotRegisteredException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DeviceNotRegisteredException(body, context);
  const exception = new DeviceNotRegisteredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidCertificateAuthorityExceptionRes
 */
const de_InvalidCertificateAuthorityExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidCertificateAuthorityException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidCertificateAuthorityException(body, context);
  const exception = new InvalidCertificateAuthorityException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidDeviceExceptionRes
 */
const de_InvalidDeviceExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDeviceException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidDeviceException(body, context);
  const exception = new InvalidDeviceException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidSecretsManagerResourceExceptionRes
 */
const de_InvalidSecretsManagerResourceExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSecretsManagerResourceException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidSecretsManagerResourceException(body, context);
  const exception = new InvalidSecretsManagerResourceException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidServiceLinkedRoleStateExceptionRes
 */
const de_InvalidServiceLinkedRoleStateExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidServiceLinkedRoleStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidServiceLinkedRoleStateException(body, context);
  const exception = new InvalidServiceLinkedRoleStateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidUserStatusExceptionRes
 */
const de_InvalidUserStatusExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidUserStatusException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidUserStatusException(body, context);
  const exception = new InvalidUserStatusException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1LimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_LimitExceededException(body, context);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1NameInUseExceptionRes
 */
const de_NameInUseExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<NameInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_NameInUseException(body, context);
  const exception = new NameInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1NotFoundExceptionRes
 */
const de_NotFoundExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<NotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_NotFoundException(body, context);
  const exception = new NotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceAssociatedExceptionRes
 */
const de_ResourceAssociatedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAssociatedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceAssociatedException(body, context);
  const exception = new ResourceAssociatedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceInUseExceptionRes
 */
const de_ResourceInUseExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceInUseException(body, context);
  const exception = new ResourceInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1SkillNotLinkedExceptionRes
 */
const de_SkillNotLinkedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SkillNotLinkedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_SkillNotLinkedException(body, context);
  const exception = new SkillNotLinkedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1UnauthorizedExceptionRes
 */
const de_UnauthorizedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnauthorizedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_UnauthorizedException(body, context);
  const exception = new UnauthorizedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1ApproveSkillRequest
 */
const se_ApproveSkillRequest = (input: ApproveSkillRequest, context: __SerdeContext): any => {
  return {
    ...(input.SkillId != null && { SkillId: input.SkillId }),
  };
};

/**
 * serializeAws_json1_1AssociateContactWithAddressBookRequest
 */
const se_AssociateContactWithAddressBookRequest = (
  input: AssociateContactWithAddressBookRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AddressBookArn != null && { AddressBookArn: input.AddressBookArn }),
    ...(input.ContactArn != null && { ContactArn: input.ContactArn }),
  };
};

/**
 * serializeAws_json1_1AssociateDeviceWithNetworkProfileRequest
 */
const se_AssociateDeviceWithNetworkProfileRequest = (
  input: AssociateDeviceWithNetworkProfileRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeviceArn != null && { DeviceArn: input.DeviceArn }),
    ...(input.NetworkProfileArn != null && { NetworkProfileArn: input.NetworkProfileArn }),
  };
};

/**
 * serializeAws_json1_1AssociateDeviceWithRoomRequest
 */
const se_AssociateDeviceWithRoomRequest = (input: AssociateDeviceWithRoomRequest, context: __SerdeContext): any => {
  return {
    ...(input.DeviceArn != null && { DeviceArn: input.DeviceArn }),
    ...(input.RoomArn != null && { RoomArn: input.RoomArn }),
  };
};

/**
 * serializeAws_json1_1AssociateSkillGroupWithRoomRequest
 */
const se_AssociateSkillGroupWithRoomRequest = (
  input: AssociateSkillGroupWithRoomRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.RoomArn != null && { RoomArn: input.RoomArn }),
    ...(input.SkillGroupArn != null && { SkillGroupArn: input.SkillGroupArn }),
  };
};

/**
 * serializeAws_json1_1AssociateSkillWithSkillGroupRequest
 */
const se_AssociateSkillWithSkillGroupRequest = (
  input: AssociateSkillWithSkillGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.SkillGroupArn != null && { SkillGroupArn: input.SkillGroupArn }),
    ...(input.SkillId != null && { SkillId: input.SkillId }),
  };
};

/**
 * serializeAws_json1_1AssociateSkillWithUsersRequest
 */
const se_AssociateSkillWithUsersRequest = (input: AssociateSkillWithUsersRequest, context: __SerdeContext): any => {
  return {
    ...(input.SkillId != null && { SkillId: input.SkillId }),
  };
};

/**
 * serializeAws_json1_1Audio
 */
const se_Audio = (input: Audio, context: __SerdeContext): any => {
  return {
    ...(input.Locale != null && { Locale: input.Locale }),
    ...(input.Location != null && { Location: input.Location }),
  };
};

/**
 * serializeAws_json1_1AudioList
 */
const se_AudioList = (input: Audio[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Audio(entry, context);
    });
};

/**
 * serializeAws_json1_1AuthorizationResult
 */
const se_AuthorizationResult = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1BusinessReportContentRange
 */
const se_BusinessReportContentRange = (input: BusinessReportContentRange, context: __SerdeContext): any => {
  return {
    ...(input.Interval != null && { Interval: input.Interval }),
  };
};

/**
 * serializeAws_json1_1BusinessReportRecurrence
 */
const se_BusinessReportRecurrence = (input: BusinessReportRecurrence, context: __SerdeContext): any => {
  return {
    ...(input.StartDate != null && { StartDate: input.StartDate }),
  };
};

/**
 * serializeAws_json1_1ConferencePreference
 */
const se_ConferencePreference = (input: ConferencePreference, context: __SerdeContext): any => {
  return {
    ...(input.DefaultConferenceProviderArn != null && {
      DefaultConferenceProviderArn: input.DefaultConferenceProviderArn,
    }),
  };
};

/**
 * serializeAws_json1_1Content
 */
const se_Content = (input: Content, context: __SerdeContext): any => {
  return {
    ...(input.AudioList != null && { AudioList: se_AudioList(input.AudioList, context) }),
    ...(input.SsmlList != null && { SsmlList: se_SsmlList(input.SsmlList, context) }),
    ...(input.TextList != null && { TextList: se_TextList(input.TextList, context) }),
  };
};

/**
 * serializeAws_json1_1CreateAddressBookRequest
 */
const se_CreateAddressBookRequest = (input: CreateAddressBookRequest, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateBusinessReportScheduleRequest
 */
const se_CreateBusinessReportScheduleRequest = (
  input: CreateBusinessReportScheduleRequest,
  context: __SerdeContext
): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.ContentRange != null && { ContentRange: se_BusinessReportContentRange(input.ContentRange, context) }),
    ...(input.Format != null && { Format: input.Format }),
    ...(input.Recurrence != null && { Recurrence: se_BusinessReportRecurrence(input.Recurrence, context) }),
    ...(input.S3BucketName != null && { S3BucketName: input.S3BucketName }),
    ...(input.S3KeyPrefix != null && { S3KeyPrefix: input.S3KeyPrefix }),
    ...(input.ScheduleName != null && { ScheduleName: input.ScheduleName }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateConferenceProviderRequest
 */
const se_CreateConferenceProviderRequest = (input: CreateConferenceProviderRequest, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.ConferenceProviderName != null && { ConferenceProviderName: input.ConferenceProviderName }),
    ...(input.ConferenceProviderType != null && { ConferenceProviderType: input.ConferenceProviderType }),
    ...(input.IPDialIn != null && { IPDialIn: se_IPDialIn(input.IPDialIn, context) }),
    ...(input.MeetingSetting != null && { MeetingSetting: se_MeetingSetting(input.MeetingSetting, context) }),
    ...(input.PSTNDialIn != null && { PSTNDialIn: se_PSTNDialIn(input.PSTNDialIn, context) }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateContactRequest
 */
const se_CreateContactRequest = (input: CreateContactRequest, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.DisplayName != null && { DisplayName: input.DisplayName }),
    ...(input.FirstName != null && { FirstName: input.FirstName }),
    ...(input.LastName != null && { LastName: input.LastName }),
    ...(input.PhoneNumber != null && { PhoneNumber: input.PhoneNumber }),
    ...(input.PhoneNumbers != null && { PhoneNumbers: se_PhoneNumberList(input.PhoneNumbers, context) }),
    ...(input.SipAddresses != null && { SipAddresses: se_SipAddressList(input.SipAddresses, context) }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateEndOfMeetingReminder
 */
const se_CreateEndOfMeetingReminder = (input: CreateEndOfMeetingReminder, context: __SerdeContext): any => {
  return {
    ...(input.Enabled != null && { Enabled: input.Enabled }),
    ...(input.ReminderAtMinutes != null && {
      ReminderAtMinutes: se_EndOfMeetingReminderMinutesList(input.ReminderAtMinutes, context),
    }),
    ...(input.ReminderType != null && { ReminderType: input.ReminderType }),
  };
};

/**
 * serializeAws_json1_1CreateGatewayGroupRequest
 */
const se_CreateGatewayGroupRequest = (input: CreateGatewayGroupRequest, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateInstantBooking
 */
const se_CreateInstantBooking = (input: CreateInstantBooking, context: __SerdeContext): any => {
  return {
    ...(input.DurationInMinutes != null && { DurationInMinutes: input.DurationInMinutes }),
    ...(input.Enabled != null && { Enabled: input.Enabled }),
  };
};

/**
 * serializeAws_json1_1CreateMeetingRoomConfiguration
 */
const se_CreateMeetingRoomConfiguration = (input: CreateMeetingRoomConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.EndOfMeetingReminder != null && {
      EndOfMeetingReminder: se_CreateEndOfMeetingReminder(input.EndOfMeetingReminder, context),
    }),
    ...(input.InstantBooking != null && { InstantBooking: se_CreateInstantBooking(input.InstantBooking, context) }),
    ...(input.RequireCheckIn != null && { RequireCheckIn: se_CreateRequireCheckIn(input.RequireCheckIn, context) }),
    ...(input.RoomUtilizationMetricsEnabled != null && {
      RoomUtilizationMetricsEnabled: input.RoomUtilizationMetricsEnabled,
    }),
  };
};

/**
 * serializeAws_json1_1CreateNetworkProfileRequest
 */
const se_CreateNetworkProfileRequest = (input: CreateNetworkProfileRequest, context: __SerdeContext): any => {
  return {
    ...(input.CertificateAuthorityArn != null && { CertificateAuthorityArn: input.CertificateAuthorityArn }),
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.CurrentPassword != null && { CurrentPassword: input.CurrentPassword }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.EapMethod != null && { EapMethod: input.EapMethod }),
    ...(input.NetworkProfileName != null && { NetworkProfileName: input.NetworkProfileName }),
    ...(input.NextPassword != null && { NextPassword: input.NextPassword }),
    ...(input.SecurityType != null && { SecurityType: input.SecurityType }),
    ...(input.Ssid != null && { Ssid: input.Ssid }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
    ...(input.TrustAnchors != null && { TrustAnchors: se_TrustAnchorList(input.TrustAnchors, context) }),
  };
};

/**
 * serializeAws_json1_1CreateProfileRequest
 */
const se_CreateProfileRequest = (input: CreateProfileRequest, context: __SerdeContext): any => {
  return {
    ...(input.Address != null && { Address: input.Address }),
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.DataRetentionOptIn != null && { DataRetentionOptIn: input.DataRetentionOptIn }),
    ...(input.DistanceUnit != null && { DistanceUnit: input.DistanceUnit }),
    ...(input.Locale != null && { Locale: input.Locale }),
    ...(input.MaxVolumeLimit != null && { MaxVolumeLimit: input.MaxVolumeLimit }),
    ...(input.MeetingRoomConfiguration != null && {
      MeetingRoomConfiguration: se_CreateMeetingRoomConfiguration(input.MeetingRoomConfiguration, context),
    }),
    ...(input.PSTNEnabled != null && { PSTNEnabled: input.PSTNEnabled }),
    ...(input.ProfileName != null && { ProfileName: input.ProfileName }),
    ...(input.SetupModeDisabled != null && { SetupModeDisabled: input.SetupModeDisabled }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
    ...(input.TemperatureUnit != null && { TemperatureUnit: input.TemperatureUnit }),
    ...(input.Timezone != null && { Timezone: input.Timezone }),
    ...(input.WakeWord != null && { WakeWord: input.WakeWord }),
  };
};

/**
 * serializeAws_json1_1CreateRequireCheckIn
 */
const se_CreateRequireCheckIn = (input: CreateRequireCheckIn, context: __SerdeContext): any => {
  return {
    ...(input.Enabled != null && { Enabled: input.Enabled }),
    ...(input.ReleaseAfterMinutes != null && { ReleaseAfterMinutes: input.ReleaseAfterMinutes }),
  };
};

/**
 * serializeAws_json1_1CreateRoomRequest
 */
const se_CreateRoomRequest = (input: CreateRoomRequest, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.ProfileArn != null && { ProfileArn: input.ProfileArn }),
    ...(input.ProviderCalendarId != null && { ProviderCalendarId: input.ProviderCalendarId }),
    ...(input.RoomName != null && { RoomName: input.RoomName }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateSkillGroupRequest
 */
const se_CreateSkillGroupRequest = (input: CreateSkillGroupRequest, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.SkillGroupName != null && { SkillGroupName: input.SkillGroupName }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateUserRequest
 */
const se_CreateUserRequest = (input: CreateUserRequest, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.Email != null && { Email: input.Email }),
    ...(input.FirstName != null && { FirstName: input.FirstName }),
    ...(input.LastName != null && { LastName: input.LastName }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
    ...(input.UserId != null && { UserId: input.UserId }),
  };
};

/**
 * serializeAws_json1_1DeleteAddressBookRequest
 */
const se_DeleteAddressBookRequest = (input: DeleteAddressBookRequest, context: __SerdeContext): any => {
  return {
    ...(input.AddressBookArn != null && { AddressBookArn: input.AddressBookArn }),
  };
};

/**
 * serializeAws_json1_1DeleteBusinessReportScheduleRequest
 */
const se_DeleteBusinessReportScheduleRequest = (
  input: DeleteBusinessReportScheduleRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ScheduleArn != null && { ScheduleArn: input.ScheduleArn }),
  };
};

/**
 * serializeAws_json1_1DeleteConferenceProviderRequest
 */
const se_DeleteConferenceProviderRequest = (input: DeleteConferenceProviderRequest, context: __SerdeContext): any => {
  return {
    ...(input.ConferenceProviderArn != null && { ConferenceProviderArn: input.ConferenceProviderArn }),
  };
};

/**
 * serializeAws_json1_1DeleteContactRequest
 */
const se_DeleteContactRequest = (input: DeleteContactRequest, context: __SerdeContext): any => {
  return {
    ...(input.ContactArn != null && { ContactArn: input.ContactArn }),
  };
};

/**
 * serializeAws_json1_1DeleteDeviceRequest
 */
const se_DeleteDeviceRequest = (input: DeleteDeviceRequest, context: __SerdeContext): any => {
  return {
    ...(input.DeviceArn != null && { DeviceArn: input.DeviceArn }),
  };
};

/**
 * serializeAws_json1_1DeleteDeviceUsageDataRequest
 */
const se_DeleteDeviceUsageDataRequest = (input: DeleteDeviceUsageDataRequest, context: __SerdeContext): any => {
  return {
    ...(input.DeviceArn != null && { DeviceArn: input.DeviceArn }),
    ...(input.DeviceUsageType != null && { DeviceUsageType: input.DeviceUsageType }),
  };
};

/**
 * serializeAws_json1_1DeleteGatewayGroupRequest
 */
const se_DeleteGatewayGroupRequest = (input: DeleteGatewayGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.GatewayGroupArn != null && { GatewayGroupArn: input.GatewayGroupArn }),
  };
};

/**
 * serializeAws_json1_1DeleteNetworkProfileRequest
 */
const se_DeleteNetworkProfileRequest = (input: DeleteNetworkProfileRequest, context: __SerdeContext): any => {
  return {
    ...(input.NetworkProfileArn != null && { NetworkProfileArn: input.NetworkProfileArn }),
  };
};

/**
 * serializeAws_json1_1DeleteProfileRequest
 */
const se_DeleteProfileRequest = (input: DeleteProfileRequest, context: __SerdeContext): any => {
  return {
    ...(input.ProfileArn != null && { ProfileArn: input.ProfileArn }),
  };
};

/**
 * serializeAws_json1_1DeleteRoomRequest
 */
const se_DeleteRoomRequest = (input: DeleteRoomRequest, context: __SerdeContext): any => {
  return {
    ...(input.RoomArn != null && { RoomArn: input.RoomArn }),
  };
};

/**
 * serializeAws_json1_1DeleteRoomSkillParameterRequest
 */
const se_DeleteRoomSkillParameterRequest = (input: DeleteRoomSkillParameterRequest, context: __SerdeContext): any => {
  return {
    ...(input.ParameterKey != null && { ParameterKey: input.ParameterKey }),
    ...(input.RoomArn != null && { RoomArn: input.RoomArn }),
    ...(input.SkillId != null && { SkillId: input.SkillId }),
  };
};

/**
 * serializeAws_json1_1DeleteSkillAuthorizationRequest
 */
const se_DeleteSkillAuthorizationRequest = (input: DeleteSkillAuthorizationRequest, context: __SerdeContext): any => {
  return {
    ...(input.RoomArn != null && { RoomArn: input.RoomArn }),
    ...(input.SkillId != null && { SkillId: input.SkillId }),
  };
};

/**
 * serializeAws_json1_1DeleteSkillGroupRequest
 */
const se_DeleteSkillGroupRequest = (input: DeleteSkillGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.SkillGroupArn != null && { SkillGroupArn: input.SkillGroupArn }),
  };
};

/**
 * serializeAws_json1_1DeleteUserRequest
 */
const se_DeleteUserRequest = (input: DeleteUserRequest, context: __SerdeContext): any => {
  return {
    ...(input.EnrollmentId != null && { EnrollmentId: input.EnrollmentId }),
    ...(input.UserArn != null && { UserArn: input.UserArn }),
  };
};

/**
 * serializeAws_json1_1DisassociateContactFromAddressBookRequest
 */
const se_DisassociateContactFromAddressBookRequest = (
  input: DisassociateContactFromAddressBookRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AddressBookArn != null && { AddressBookArn: input.AddressBookArn }),
    ...(input.ContactArn != null && { ContactArn: input.ContactArn }),
  };
};

/**
 * serializeAws_json1_1DisassociateDeviceFromRoomRequest
 */
const se_DisassociateDeviceFromRoomRequest = (
  input: DisassociateDeviceFromRoomRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeviceArn != null && { DeviceArn: input.DeviceArn }),
  };
};

/**
 * serializeAws_json1_1DisassociateSkillFromSkillGroupRequest
 */
const se_DisassociateSkillFromSkillGroupRequest = (
  input: DisassociateSkillFromSkillGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.SkillGroupArn != null && { SkillGroupArn: input.SkillGroupArn }),
    ...(input.SkillId != null && { SkillId: input.SkillId }),
  };
};

/**
 * serializeAws_json1_1DisassociateSkillFromUsersRequest
 */
const se_DisassociateSkillFromUsersRequest = (
  input: DisassociateSkillFromUsersRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.SkillId != null && { SkillId: input.SkillId }),
  };
};

/**
 * serializeAws_json1_1DisassociateSkillGroupFromRoomRequest
 */
const se_DisassociateSkillGroupFromRoomRequest = (
  input: DisassociateSkillGroupFromRoomRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.RoomArn != null && { RoomArn: input.RoomArn }),
    ...(input.SkillGroupArn != null && { SkillGroupArn: input.SkillGroupArn }),
  };
};

/**
 * serializeAws_json1_1EndOfMeetingReminderMinutesList
 */
const se_EndOfMeetingReminderMinutesList = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1Features
 */
const se_Features = (input: (Feature | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1Filter
 */
const se_Filter = (input: Filter, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Values != null && { Values: se_FilterValueList(input.Values, context) }),
  };
};

/**
 * serializeAws_json1_1FilterList
 */
const se_FilterList = (input: Filter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Filter(entry, context);
    });
};

/**
 * serializeAws_json1_1FilterValueList
 */
const se_FilterValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ForgetSmartHomeAppliancesRequest
 */
const se_ForgetSmartHomeAppliancesRequest = (input: ForgetSmartHomeAppliancesRequest, context: __SerdeContext): any => {
  return {
    ...(input.RoomArn != null && { RoomArn: input.RoomArn }),
  };
};

/**
 * serializeAws_json1_1GetAddressBookRequest
 */
const se_GetAddressBookRequest = (input: GetAddressBookRequest, context: __SerdeContext): any => {
  return {
    ...(input.AddressBookArn != null && { AddressBookArn: input.AddressBookArn }),
  };
};

/**
 * serializeAws_json1_1GetConferencePreferenceRequest
 */
const se_GetConferencePreferenceRequest = (input: GetConferencePreferenceRequest, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_json1_1GetConferenceProviderRequest
 */
const se_GetConferenceProviderRequest = (input: GetConferenceProviderRequest, context: __SerdeContext): any => {
  return {
    ...(input.ConferenceProviderArn != null && { ConferenceProviderArn: input.ConferenceProviderArn }),
  };
};

/**
 * serializeAws_json1_1GetContactRequest
 */
const se_GetContactRequest = (input: GetContactRequest, context: __SerdeContext): any => {
  return {
    ...(input.ContactArn != null && { ContactArn: input.ContactArn }),
  };
};

/**
 * serializeAws_json1_1GetDeviceRequest
 */
const se_GetDeviceRequest = (input: GetDeviceRequest, context: __SerdeContext): any => {
  return {
    ...(input.DeviceArn != null && { DeviceArn: input.DeviceArn }),
  };
};

/**
 * serializeAws_json1_1GetGatewayGroupRequest
 */
const se_GetGatewayGroupRequest = (input: GetGatewayGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.GatewayGroupArn != null && { GatewayGroupArn: input.GatewayGroupArn }),
  };
};

/**
 * serializeAws_json1_1GetGatewayRequest
 */
const se_GetGatewayRequest = (input: GetGatewayRequest, context: __SerdeContext): any => {
  return {
    ...(input.GatewayArn != null && { GatewayArn: input.GatewayArn }),
  };
};

/**
 * serializeAws_json1_1GetInvitationConfigurationRequest
 */
const se_GetInvitationConfigurationRequest = (
  input: GetInvitationConfigurationRequest,
  context: __SerdeContext
): any => {
  return {};
};

/**
 * serializeAws_json1_1GetNetworkProfileRequest
 */
const se_GetNetworkProfileRequest = (input: GetNetworkProfileRequest, context: __SerdeContext): any => {
  return {
    ...(input.NetworkProfileArn != null && { NetworkProfileArn: input.NetworkProfileArn }),
  };
};

/**
 * serializeAws_json1_1GetProfileRequest
 */
const se_GetProfileRequest = (input: GetProfileRequest, context: __SerdeContext): any => {
  return {
    ...(input.ProfileArn != null && { ProfileArn: input.ProfileArn }),
  };
};

/**
 * serializeAws_json1_1GetRoomRequest
 */
const se_GetRoomRequest = (input: GetRoomRequest, context: __SerdeContext): any => {
  return {
    ...(input.RoomArn != null && { RoomArn: input.RoomArn }),
  };
};

/**
 * serializeAws_json1_1GetRoomSkillParameterRequest
 */
const se_GetRoomSkillParameterRequest = (input: GetRoomSkillParameterRequest, context: __SerdeContext): any => {
  return {
    ...(input.ParameterKey != null && { ParameterKey: input.ParameterKey }),
    ...(input.RoomArn != null && { RoomArn: input.RoomArn }),
    ...(input.SkillId != null && { SkillId: input.SkillId }),
  };
};

/**
 * serializeAws_json1_1GetSkillGroupRequest
 */
const se_GetSkillGroupRequest = (input: GetSkillGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.SkillGroupArn != null && { SkillGroupArn: input.SkillGroupArn }),
  };
};

/**
 * serializeAws_json1_1IPDialIn
 */
const se_IPDialIn = (input: IPDialIn, context: __SerdeContext): any => {
  return {
    ...(input.CommsProtocol != null && { CommsProtocol: input.CommsProtocol }),
    ...(input.Endpoint != null && { Endpoint: input.Endpoint }),
  };
};

/**
 * serializeAws_json1_1ListBusinessReportSchedulesRequest
 */
const se_ListBusinessReportSchedulesRequest = (
  input: ListBusinessReportSchedulesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListConferenceProvidersRequest
 */
const se_ListConferenceProvidersRequest = (input: ListConferenceProvidersRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListDeviceEventsRequest
 */
const se_ListDeviceEventsRequest = (input: ListDeviceEventsRequest, context: __SerdeContext): any => {
  return {
    ...(input.DeviceArn != null && { DeviceArn: input.DeviceArn }),
    ...(input.EventType != null && { EventType: input.EventType }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListGatewayGroupsRequest
 */
const se_ListGatewayGroupsRequest = (input: ListGatewayGroupsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListGatewaysRequest
 */
const se_ListGatewaysRequest = (input: ListGatewaysRequest, context: __SerdeContext): any => {
  return {
    ...(input.GatewayGroupArn != null && { GatewayGroupArn: input.GatewayGroupArn }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListSkillsRequest
 */
const se_ListSkillsRequest = (input: ListSkillsRequest, context: __SerdeContext): any => {
  return {
    ...(input.EnablementType != null && { EnablementType: input.EnablementType }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SkillGroupArn != null && { SkillGroupArn: input.SkillGroupArn }),
    ...(input.SkillType != null && { SkillType: input.SkillType }),
  };
};

/**
 * serializeAws_json1_1ListSkillsStoreCategoriesRequest
 */
const se_ListSkillsStoreCategoriesRequest = (input: ListSkillsStoreCategoriesRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListSkillsStoreSkillsByCategoryRequest
 */
const se_ListSkillsStoreSkillsByCategoryRequest = (
  input: ListSkillsStoreSkillsByCategoryRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CategoryId != null && { CategoryId: input.CategoryId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListSmartHomeAppliancesRequest
 */
const se_ListSmartHomeAppliancesRequest = (input: ListSmartHomeAppliancesRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.RoomArn != null && { RoomArn: input.RoomArn }),
  };
};

/**
 * serializeAws_json1_1ListTagsRequest
 */
const se_ListTagsRequest = (input: ListTagsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Arn != null && { Arn: input.Arn }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1MeetingSetting
 */
const se_MeetingSetting = (input: MeetingSetting, context: __SerdeContext): any => {
  return {
    ...(input.RequirePin != null && { RequirePin: input.RequirePin }),
  };
};

/**
 * serializeAws_json1_1PhoneNumber
 */
const se_PhoneNumber = (input: PhoneNumber, context: __SerdeContext): any => {
  return {
    ...(input.Number != null && { Number: input.Number }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_json1_1PhoneNumberList
 */
const se_PhoneNumberList = (input: PhoneNumber[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_PhoneNumber(entry, context);
    });
};

/**
 * serializeAws_json1_1PSTNDialIn
 */
const se_PSTNDialIn = (input: PSTNDialIn, context: __SerdeContext): any => {
  return {
    ...(input.CountryCode != null && { CountryCode: input.CountryCode }),
    ...(input.OneClickIdDelay != null && { OneClickIdDelay: input.OneClickIdDelay }),
    ...(input.OneClickPinDelay != null && { OneClickPinDelay: input.OneClickPinDelay }),
    ...(input.PhoneNumber != null && { PhoneNumber: input.PhoneNumber }),
  };
};

/**
 * serializeAws_json1_1PutConferencePreferenceRequest
 */
const se_PutConferencePreferenceRequest = (input: PutConferencePreferenceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ConferencePreference != null && {
      ConferencePreference: se_ConferencePreference(input.ConferencePreference, context),
    }),
  };
};

/**
 * serializeAws_json1_1PutInvitationConfigurationRequest
 */
const se_PutInvitationConfigurationRequest = (
  input: PutInvitationConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ContactEmail != null && { ContactEmail: input.ContactEmail }),
    ...(input.OrganizationName != null && { OrganizationName: input.OrganizationName }),
    ...(input.PrivateSkillIds != null && { PrivateSkillIds: se_ShortSkillIdList(input.PrivateSkillIds, context) }),
  };
};

/**
 * serializeAws_json1_1PutRoomSkillParameterRequest
 */
const se_PutRoomSkillParameterRequest = (input: PutRoomSkillParameterRequest, context: __SerdeContext): any => {
  return {
    ...(input.RoomArn != null && { RoomArn: input.RoomArn }),
    ...(input.RoomSkillParameter != null && {
      RoomSkillParameter: se_RoomSkillParameter(input.RoomSkillParameter, context),
    }),
    ...(input.SkillId != null && { SkillId: input.SkillId }),
  };
};

/**
 * serializeAws_json1_1PutSkillAuthorizationRequest
 */
const se_PutSkillAuthorizationRequest = (input: PutSkillAuthorizationRequest, context: __SerdeContext): any => {
  return {
    ...(input.AuthorizationResult != null && {
      AuthorizationResult: se_AuthorizationResult(input.AuthorizationResult, context),
    }),
    ...(input.RoomArn != null && { RoomArn: input.RoomArn }),
    ...(input.SkillId != null && { SkillId: input.SkillId }),
  };
};

/**
 * serializeAws_json1_1RegisterAVSDeviceRequest
 */
const se_RegisterAVSDeviceRequest = (input: RegisterAVSDeviceRequest, context: __SerdeContext): any => {
  return {
    ...(input.AmazonId != null && { AmazonId: input.AmazonId }),
    ...(input.ClientId != null && { ClientId: input.ClientId }),
    ...(input.DeviceSerialNumber != null && { DeviceSerialNumber: input.DeviceSerialNumber }),
    ...(input.ProductId != null && { ProductId: input.ProductId }),
    ...(input.RoomArn != null && { RoomArn: input.RoomArn }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
    ...(input.UserCode != null && { UserCode: input.UserCode }),
  };
};

/**
 * serializeAws_json1_1RejectSkillRequest
 */
const se_RejectSkillRequest = (input: RejectSkillRequest, context: __SerdeContext): any => {
  return {
    ...(input.SkillId != null && { SkillId: input.SkillId }),
  };
};

/**
 * serializeAws_json1_1ResolveRoomRequest
 */
const se_ResolveRoomRequest = (input: ResolveRoomRequest, context: __SerdeContext): any => {
  return {
    ...(input.SkillId != null && { SkillId: input.SkillId }),
    ...(input.UserId != null && { UserId: input.UserId }),
  };
};

/**
 * serializeAws_json1_1RevokeInvitationRequest
 */
const se_RevokeInvitationRequest = (input: RevokeInvitationRequest, context: __SerdeContext): any => {
  return {
    ...(input.EnrollmentId != null && { EnrollmentId: input.EnrollmentId }),
    ...(input.UserArn != null && { UserArn: input.UserArn }),
  };
};

/**
 * serializeAws_json1_1RoomSkillParameter
 */
const se_RoomSkillParameter = (input: RoomSkillParameter, context: __SerdeContext): any => {
  return {
    ...(input.ParameterKey != null && { ParameterKey: input.ParameterKey }),
    ...(input.ParameterValue != null && { ParameterValue: input.ParameterValue }),
  };
};

/**
 * serializeAws_json1_1SearchAddressBooksRequest
 */
const se_SearchAddressBooksRequest = (input: SearchAddressBooksRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_FilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SortCriteria != null && { SortCriteria: se_SortList(input.SortCriteria, context) }),
  };
};

/**
 * serializeAws_json1_1SearchContactsRequest
 */
const se_SearchContactsRequest = (input: SearchContactsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_FilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SortCriteria != null && { SortCriteria: se_SortList(input.SortCriteria, context) }),
  };
};

/**
 * serializeAws_json1_1SearchDevicesRequest
 */
const se_SearchDevicesRequest = (input: SearchDevicesRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_FilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SortCriteria != null && { SortCriteria: se_SortList(input.SortCriteria, context) }),
  };
};

/**
 * serializeAws_json1_1SearchNetworkProfilesRequest
 */
const se_SearchNetworkProfilesRequest = (input: SearchNetworkProfilesRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_FilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SortCriteria != null && { SortCriteria: se_SortList(input.SortCriteria, context) }),
  };
};

/**
 * serializeAws_json1_1SearchProfilesRequest
 */
const se_SearchProfilesRequest = (input: SearchProfilesRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_FilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SortCriteria != null && { SortCriteria: se_SortList(input.SortCriteria, context) }),
  };
};

/**
 * serializeAws_json1_1SearchRoomsRequest
 */
const se_SearchRoomsRequest = (input: SearchRoomsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_FilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SortCriteria != null && { SortCriteria: se_SortList(input.SortCriteria, context) }),
  };
};

/**
 * serializeAws_json1_1SearchSkillGroupsRequest
 */
const se_SearchSkillGroupsRequest = (input: SearchSkillGroupsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_FilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SortCriteria != null && { SortCriteria: se_SortList(input.SortCriteria, context) }),
  };
};

/**
 * serializeAws_json1_1SearchUsersRequest
 */
const se_SearchUsersRequest = (input: SearchUsersRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_FilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SortCriteria != null && { SortCriteria: se_SortList(input.SortCriteria, context) }),
  };
};

/**
 * serializeAws_json1_1SendAnnouncementRequest
 */
const se_SendAnnouncementRequest = (input: SendAnnouncementRequest, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.Content != null && { Content: se_Content(input.Content, context) }),
    ...(input.RoomFilters != null && { RoomFilters: se_FilterList(input.RoomFilters, context) }),
    ...(input.TimeToLiveInSeconds != null && { TimeToLiveInSeconds: input.TimeToLiveInSeconds }),
  };
};

/**
 * serializeAws_json1_1SendInvitationRequest
 */
const se_SendInvitationRequest = (input: SendInvitationRequest, context: __SerdeContext): any => {
  return {
    ...(input.UserArn != null && { UserArn: input.UserArn }),
  };
};

/**
 * serializeAws_json1_1ShortSkillIdList
 */
const se_ShortSkillIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1SipAddress
 */
const se_SipAddress = (input: SipAddress, context: __SerdeContext): any => {
  return {
    ...(input.Type != null && { Type: input.Type }),
    ...(input.Uri != null && { Uri: input.Uri }),
  };
};

/**
 * serializeAws_json1_1SipAddressList
 */
const se_SipAddressList = (input: SipAddress[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SipAddress(entry, context);
    });
};

/**
 * serializeAws_json1_1Sort
 */
const se_Sort = (input: Sort, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1SortList
 */
const se_SortList = (input: Sort[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Sort(entry, context);
    });
};

/**
 * serializeAws_json1_1Ssml
 */
const se_Ssml = (input: Ssml, context: __SerdeContext): any => {
  return {
    ...(input.Locale != null && { Locale: input.Locale }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1SsmlList
 */
const se_SsmlList = (input: Ssml[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Ssml(entry, context);
    });
};

/**
 * serializeAws_json1_1StartDeviceSyncRequest
 */
const se_StartDeviceSyncRequest = (input: StartDeviceSyncRequest, context: __SerdeContext): any => {
  return {
    ...(input.DeviceArn != null && { DeviceArn: input.DeviceArn }),
    ...(input.Features != null && { Features: se_Features(input.Features, context) }),
    ...(input.RoomArn != null && { RoomArn: input.RoomArn }),
  };
};

/**
 * serializeAws_json1_1StartSmartHomeApplianceDiscoveryRequest
 */
const se_StartSmartHomeApplianceDiscoveryRequest = (
  input: StartSmartHomeApplianceDiscoveryRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.RoomArn != null && { RoomArn: input.RoomArn }),
  };
};

/**
 * serializeAws_json1_1Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1TagKeyList
 */
const se_TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1TagList
 */
const se_TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_json1_1TagResourceRequest
 */
const se_TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.Arn != null && { Arn: input.Arn }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1Text
 */
const se_Text = (input: Text, context: __SerdeContext): any => {
  return {
    ...(input.Locale != null && { Locale: input.Locale }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1TextList
 */
const se_TextList = (input: Text[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Text(entry, context);
    });
};

/**
 * serializeAws_json1_1TrustAnchorList
 */
const se_TrustAnchorList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1UntagResourceRequest
 */
const se_UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.Arn != null && { Arn: input.Arn }),
    ...(input.TagKeys != null && { TagKeys: se_TagKeyList(input.TagKeys, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateAddressBookRequest
 */
const se_UpdateAddressBookRequest = (input: UpdateAddressBookRequest, context: __SerdeContext): any => {
  return {
    ...(input.AddressBookArn != null && { AddressBookArn: input.AddressBookArn }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1UpdateBusinessReportScheduleRequest
 */
const se_UpdateBusinessReportScheduleRequest = (
  input: UpdateBusinessReportScheduleRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Format != null && { Format: input.Format }),
    ...(input.Recurrence != null && { Recurrence: se_BusinessReportRecurrence(input.Recurrence, context) }),
    ...(input.S3BucketName != null && { S3BucketName: input.S3BucketName }),
    ...(input.S3KeyPrefix != null && { S3KeyPrefix: input.S3KeyPrefix }),
    ...(input.ScheduleArn != null && { ScheduleArn: input.ScheduleArn }),
    ...(input.ScheduleName != null && { ScheduleName: input.ScheduleName }),
  };
};

/**
 * serializeAws_json1_1UpdateConferenceProviderRequest
 */
const se_UpdateConferenceProviderRequest = (input: UpdateConferenceProviderRequest, context: __SerdeContext): any => {
  return {
    ...(input.ConferenceProviderArn != null && { ConferenceProviderArn: input.ConferenceProviderArn }),
    ...(input.ConferenceProviderType != null && { ConferenceProviderType: input.ConferenceProviderType }),
    ...(input.IPDialIn != null && { IPDialIn: se_IPDialIn(input.IPDialIn, context) }),
    ...(input.MeetingSetting != null && { MeetingSetting: se_MeetingSetting(input.MeetingSetting, context) }),
    ...(input.PSTNDialIn != null && { PSTNDialIn: se_PSTNDialIn(input.PSTNDialIn, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateContactRequest
 */
const se_UpdateContactRequest = (input: UpdateContactRequest, context: __SerdeContext): any => {
  return {
    ...(input.ContactArn != null && { ContactArn: input.ContactArn }),
    ...(input.DisplayName != null && { DisplayName: input.DisplayName }),
    ...(input.FirstName != null && { FirstName: input.FirstName }),
    ...(input.LastName != null && { LastName: input.LastName }),
    ...(input.PhoneNumber != null && { PhoneNumber: input.PhoneNumber }),
    ...(input.PhoneNumbers != null && { PhoneNumbers: se_PhoneNumberList(input.PhoneNumbers, context) }),
    ...(input.SipAddresses != null && { SipAddresses: se_SipAddressList(input.SipAddresses, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateDeviceRequest
 */
const se_UpdateDeviceRequest = (input: UpdateDeviceRequest, context: __SerdeContext): any => {
  return {
    ...(input.DeviceArn != null && { DeviceArn: input.DeviceArn }),
    ...(input.DeviceName != null && { DeviceName: input.DeviceName }),
  };
};

/**
 * serializeAws_json1_1UpdateEndOfMeetingReminder
 */
const se_UpdateEndOfMeetingReminder = (input: UpdateEndOfMeetingReminder, context: __SerdeContext): any => {
  return {
    ...(input.Enabled != null && { Enabled: input.Enabled }),
    ...(input.ReminderAtMinutes != null && {
      ReminderAtMinutes: se_EndOfMeetingReminderMinutesList(input.ReminderAtMinutes, context),
    }),
    ...(input.ReminderType != null && { ReminderType: input.ReminderType }),
  };
};

/**
 * serializeAws_json1_1UpdateGatewayGroupRequest
 */
const se_UpdateGatewayGroupRequest = (input: UpdateGatewayGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.GatewayGroupArn != null && { GatewayGroupArn: input.GatewayGroupArn }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1UpdateGatewayRequest
 */
const se_UpdateGatewayRequest = (input: UpdateGatewayRequest, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.GatewayArn != null && { GatewayArn: input.GatewayArn }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.SoftwareVersion != null && { SoftwareVersion: input.SoftwareVersion }),
  };
};

/**
 * serializeAws_json1_1UpdateInstantBooking
 */
const se_UpdateInstantBooking = (input: UpdateInstantBooking, context: __SerdeContext): any => {
  return {
    ...(input.DurationInMinutes != null && { DurationInMinutes: input.DurationInMinutes }),
    ...(input.Enabled != null && { Enabled: input.Enabled }),
  };
};

/**
 * serializeAws_json1_1UpdateMeetingRoomConfiguration
 */
const se_UpdateMeetingRoomConfiguration = (input: UpdateMeetingRoomConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.EndOfMeetingReminder != null && {
      EndOfMeetingReminder: se_UpdateEndOfMeetingReminder(input.EndOfMeetingReminder, context),
    }),
    ...(input.InstantBooking != null && { InstantBooking: se_UpdateInstantBooking(input.InstantBooking, context) }),
    ...(input.RequireCheckIn != null && { RequireCheckIn: se_UpdateRequireCheckIn(input.RequireCheckIn, context) }),
    ...(input.RoomUtilizationMetricsEnabled != null && {
      RoomUtilizationMetricsEnabled: input.RoomUtilizationMetricsEnabled,
    }),
  };
};

/**
 * serializeAws_json1_1UpdateNetworkProfileRequest
 */
const se_UpdateNetworkProfileRequest = (input: UpdateNetworkProfileRequest, context: __SerdeContext): any => {
  return {
    ...(input.CertificateAuthorityArn != null && { CertificateAuthorityArn: input.CertificateAuthorityArn }),
    ...(input.CurrentPassword != null && { CurrentPassword: input.CurrentPassword }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.NetworkProfileArn != null && { NetworkProfileArn: input.NetworkProfileArn }),
    ...(input.NetworkProfileName != null && { NetworkProfileName: input.NetworkProfileName }),
    ...(input.NextPassword != null && { NextPassword: input.NextPassword }),
    ...(input.TrustAnchors != null && { TrustAnchors: se_TrustAnchorList(input.TrustAnchors, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateProfileRequest
 */
const se_UpdateProfileRequest = (input: UpdateProfileRequest, context: __SerdeContext): any => {
  return {
    ...(input.Address != null && { Address: input.Address }),
    ...(input.DataRetentionOptIn != null && { DataRetentionOptIn: input.DataRetentionOptIn }),
    ...(input.DistanceUnit != null && { DistanceUnit: input.DistanceUnit }),
    ...(input.IsDefault != null && { IsDefault: input.IsDefault }),
    ...(input.Locale != null && { Locale: input.Locale }),
    ...(input.MaxVolumeLimit != null && { MaxVolumeLimit: input.MaxVolumeLimit }),
    ...(input.MeetingRoomConfiguration != null && {
      MeetingRoomConfiguration: se_UpdateMeetingRoomConfiguration(input.MeetingRoomConfiguration, context),
    }),
    ...(input.PSTNEnabled != null && { PSTNEnabled: input.PSTNEnabled }),
    ...(input.ProfileArn != null && { ProfileArn: input.ProfileArn }),
    ...(input.ProfileName != null && { ProfileName: input.ProfileName }),
    ...(input.SetupModeDisabled != null && { SetupModeDisabled: input.SetupModeDisabled }),
    ...(input.TemperatureUnit != null && { TemperatureUnit: input.TemperatureUnit }),
    ...(input.Timezone != null && { Timezone: input.Timezone }),
    ...(input.WakeWord != null && { WakeWord: input.WakeWord }),
  };
};

/**
 * serializeAws_json1_1UpdateRequireCheckIn
 */
const se_UpdateRequireCheckIn = (input: UpdateRequireCheckIn, context: __SerdeContext): any => {
  return {
    ...(input.Enabled != null && { Enabled: input.Enabled }),
    ...(input.ReleaseAfterMinutes != null && { ReleaseAfterMinutes: input.ReleaseAfterMinutes }),
  };
};

/**
 * serializeAws_json1_1UpdateRoomRequest
 */
const se_UpdateRoomRequest = (input: UpdateRoomRequest, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.ProfileArn != null && { ProfileArn: input.ProfileArn }),
    ...(input.ProviderCalendarId != null && { ProviderCalendarId: input.ProviderCalendarId }),
    ...(input.RoomArn != null && { RoomArn: input.RoomArn }),
    ...(input.RoomName != null && { RoomName: input.RoomName }),
  };
};

/**
 * serializeAws_json1_1UpdateSkillGroupRequest
 */
const se_UpdateSkillGroupRequest = (input: UpdateSkillGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.SkillGroupArn != null && { SkillGroupArn: input.SkillGroupArn }),
    ...(input.SkillGroupName != null && { SkillGroupName: input.SkillGroupName }),
  };
};

/**
 * deserializeAws_json1_1AddressBook
 */
const de_AddressBook = (output: any, context: __SerdeContext): AddressBook => {
  return {
    AddressBookArn: __expectString(output.AddressBookArn),
    Description: __expectString(output.Description),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1AddressBookData
 */
const de_AddressBookData = (output: any, context: __SerdeContext): AddressBookData => {
  return {
    AddressBookArn: __expectString(output.AddressBookArn),
    Description: __expectString(output.Description),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1AddressBookDataList
 */
const de_AddressBookDataList = (output: any, context: __SerdeContext): AddressBookData[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AddressBookData(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AlreadyExistsException
 */
const de_AlreadyExistsException = (output: any, context: __SerdeContext): AlreadyExistsException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ApproveSkillResponse
 */
const de_ApproveSkillResponse = (output: any, context: __SerdeContext): ApproveSkillResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1AssociateContactWithAddressBookResponse
 */
const de_AssociateContactWithAddressBookResponse = (
  output: any,
  context: __SerdeContext
): AssociateContactWithAddressBookResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1AssociateDeviceWithNetworkProfileResponse
 */
const de_AssociateDeviceWithNetworkProfileResponse = (
  output: any,
  context: __SerdeContext
): AssociateDeviceWithNetworkProfileResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1AssociateDeviceWithRoomResponse
 */
const de_AssociateDeviceWithRoomResponse = (output: any, context: __SerdeContext): AssociateDeviceWithRoomResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1AssociateSkillGroupWithRoomResponse
 */
const de_AssociateSkillGroupWithRoomResponse = (
  output: any,
  context: __SerdeContext
): AssociateSkillGroupWithRoomResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1AssociateSkillWithSkillGroupResponse
 */
const de_AssociateSkillWithSkillGroupResponse = (
  output: any,
  context: __SerdeContext
): AssociateSkillWithSkillGroupResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1AssociateSkillWithUsersResponse
 */
const de_AssociateSkillWithUsersResponse = (output: any, context: __SerdeContext): AssociateSkillWithUsersResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1BulletPoints
 */
const de_BulletPoints = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1BusinessReport
 */
const de_BusinessReport = (output: any, context: __SerdeContext): BusinessReport => {
  return {
    DeliveryTime:
      output.DeliveryTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DeliveryTime)))
        : undefined,
    DownloadUrl: __expectString(output.DownloadUrl),
    FailureCode: __expectString(output.FailureCode),
    S3Location: output.S3Location != null ? de_BusinessReportS3Location(output.S3Location, context) : undefined,
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1BusinessReportContentRange
 */
const de_BusinessReportContentRange = (output: any, context: __SerdeContext): BusinessReportContentRange => {
  return {
    Interval: __expectString(output.Interval),
  } as any;
};

/**
 * deserializeAws_json1_1BusinessReportRecurrence
 */
const de_BusinessReportRecurrence = (output: any, context: __SerdeContext): BusinessReportRecurrence => {
  return {
    StartDate: __expectString(output.StartDate),
  } as any;
};

/**
 * deserializeAws_json1_1BusinessReportS3Location
 */
const de_BusinessReportS3Location = (output: any, context: __SerdeContext): BusinessReportS3Location => {
  return {
    BucketName: __expectString(output.BucketName),
    Path: __expectString(output.Path),
  } as any;
};

/**
 * deserializeAws_json1_1BusinessReportSchedule
 */
const de_BusinessReportSchedule = (output: any, context: __SerdeContext): BusinessReportSchedule => {
  return {
    ContentRange: output.ContentRange != null ? de_BusinessReportContentRange(output.ContentRange, context) : undefined,
    Format: __expectString(output.Format),
    LastBusinessReport:
      output.LastBusinessReport != null ? de_BusinessReport(output.LastBusinessReport, context) : undefined,
    Recurrence: output.Recurrence != null ? de_BusinessReportRecurrence(output.Recurrence, context) : undefined,
    S3BucketName: __expectString(output.S3BucketName),
    S3KeyPrefix: __expectString(output.S3KeyPrefix),
    ScheduleArn: __expectString(output.ScheduleArn),
    ScheduleName: __expectString(output.ScheduleName),
  } as any;
};

/**
 * deserializeAws_json1_1BusinessReportScheduleList
 */
const de_BusinessReportScheduleList = (output: any, context: __SerdeContext): BusinessReportSchedule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BusinessReportSchedule(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Category
 */
const de_Category = (output: any, context: __SerdeContext): Category => {
  return {
    CategoryId: __expectLong(output.CategoryId),
    CategoryName: __expectString(output.CategoryName),
  } as any;
};

/**
 * deserializeAws_json1_1CategoryList
 */
const de_CategoryList = (output: any, context: __SerdeContext): Category[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Category(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ConcurrentModificationException
 */
const de_ConcurrentModificationException = (output: any, context: __SerdeContext): ConcurrentModificationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ConferencePreference
 */
const de_ConferencePreference = (output: any, context: __SerdeContext): ConferencePreference => {
  return {
    DefaultConferenceProviderArn: __expectString(output.DefaultConferenceProviderArn),
  } as any;
};

/**
 * deserializeAws_json1_1ConferenceProvider
 */
const de_ConferenceProvider = (output: any, context: __SerdeContext): ConferenceProvider => {
  return {
    Arn: __expectString(output.Arn),
    IPDialIn: output.IPDialIn != null ? de_IPDialIn(output.IPDialIn, context) : undefined,
    MeetingSetting: output.MeetingSetting != null ? de_MeetingSetting(output.MeetingSetting, context) : undefined,
    Name: __expectString(output.Name),
    PSTNDialIn: output.PSTNDialIn != null ? de_PSTNDialIn(output.PSTNDialIn, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1ConferenceProvidersList
 */
const de_ConferenceProvidersList = (output: any, context: __SerdeContext): ConferenceProvider[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ConferenceProvider(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Contact
 */
const de_Contact = (output: any, context: __SerdeContext): Contact => {
  return {
    ContactArn: __expectString(output.ContactArn),
    DisplayName: __expectString(output.DisplayName),
    FirstName: __expectString(output.FirstName),
    LastName: __expectString(output.LastName),
    PhoneNumber: __expectString(output.PhoneNumber),
    PhoneNumbers: output.PhoneNumbers != null ? de_PhoneNumberList(output.PhoneNumbers, context) : undefined,
    SipAddresses: output.SipAddresses != null ? de_SipAddressList(output.SipAddresses, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ContactData
 */
const de_ContactData = (output: any, context: __SerdeContext): ContactData => {
  return {
    ContactArn: __expectString(output.ContactArn),
    DisplayName: __expectString(output.DisplayName),
    FirstName: __expectString(output.FirstName),
    LastName: __expectString(output.LastName),
    PhoneNumber: __expectString(output.PhoneNumber),
    PhoneNumbers: output.PhoneNumbers != null ? de_PhoneNumberList(output.PhoneNumbers, context) : undefined,
    SipAddresses: output.SipAddresses != null ? de_SipAddressList(output.SipAddresses, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ContactDataList
 */
const de_ContactDataList = (output: any, context: __SerdeContext): ContactData[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ContactData(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CreateAddressBookResponse
 */
const de_CreateAddressBookResponse = (output: any, context: __SerdeContext): CreateAddressBookResponse => {
  return {
    AddressBookArn: __expectString(output.AddressBookArn),
  } as any;
};

/**
 * deserializeAws_json1_1CreateBusinessReportScheduleResponse
 */
const de_CreateBusinessReportScheduleResponse = (
  output: any,
  context: __SerdeContext
): CreateBusinessReportScheduleResponse => {
  return {
    ScheduleArn: __expectString(output.ScheduleArn),
  } as any;
};

/**
 * deserializeAws_json1_1CreateConferenceProviderResponse
 */
const de_CreateConferenceProviderResponse = (
  output: any,
  context: __SerdeContext
): CreateConferenceProviderResponse => {
  return {
    ConferenceProviderArn: __expectString(output.ConferenceProviderArn),
  } as any;
};

/**
 * deserializeAws_json1_1CreateContactResponse
 */
const de_CreateContactResponse = (output: any, context: __SerdeContext): CreateContactResponse => {
  return {
    ContactArn: __expectString(output.ContactArn),
  } as any;
};

/**
 * deserializeAws_json1_1CreateGatewayGroupResponse
 */
const de_CreateGatewayGroupResponse = (output: any, context: __SerdeContext): CreateGatewayGroupResponse => {
  return {
    GatewayGroupArn: __expectString(output.GatewayGroupArn),
  } as any;
};

/**
 * deserializeAws_json1_1CreateNetworkProfileResponse
 */
const de_CreateNetworkProfileResponse = (output: any, context: __SerdeContext): CreateNetworkProfileResponse => {
  return {
    NetworkProfileArn: __expectString(output.NetworkProfileArn),
  } as any;
};

/**
 * deserializeAws_json1_1CreateProfileResponse
 */
const de_CreateProfileResponse = (output: any, context: __SerdeContext): CreateProfileResponse => {
  return {
    ProfileArn: __expectString(output.ProfileArn),
  } as any;
};

/**
 * deserializeAws_json1_1CreateRoomResponse
 */
const de_CreateRoomResponse = (output: any, context: __SerdeContext): CreateRoomResponse => {
  return {
    RoomArn: __expectString(output.RoomArn),
  } as any;
};

/**
 * deserializeAws_json1_1CreateSkillGroupResponse
 */
const de_CreateSkillGroupResponse = (output: any, context: __SerdeContext): CreateSkillGroupResponse => {
  return {
    SkillGroupArn: __expectString(output.SkillGroupArn),
  } as any;
};

/**
 * deserializeAws_json1_1CreateUserResponse
 */
const de_CreateUserResponse = (output: any, context: __SerdeContext): CreateUserResponse => {
  return {
    UserArn: __expectString(output.UserArn),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteAddressBookResponse
 */
const de_DeleteAddressBookResponse = (output: any, context: __SerdeContext): DeleteAddressBookResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteBusinessReportScheduleResponse
 */
const de_DeleteBusinessReportScheduleResponse = (
  output: any,
  context: __SerdeContext
): DeleteBusinessReportScheduleResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteConferenceProviderResponse
 */
const de_DeleteConferenceProviderResponse = (
  output: any,
  context: __SerdeContext
): DeleteConferenceProviderResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteContactResponse
 */
const de_DeleteContactResponse = (output: any, context: __SerdeContext): DeleteContactResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteDeviceResponse
 */
const de_DeleteDeviceResponse = (output: any, context: __SerdeContext): DeleteDeviceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteDeviceUsageDataResponse
 */
const de_DeleteDeviceUsageDataResponse = (output: any, context: __SerdeContext): DeleteDeviceUsageDataResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteGatewayGroupResponse
 */
const de_DeleteGatewayGroupResponse = (output: any, context: __SerdeContext): DeleteGatewayGroupResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteNetworkProfileResponse
 */
const de_DeleteNetworkProfileResponse = (output: any, context: __SerdeContext): DeleteNetworkProfileResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteProfileResponse
 */
const de_DeleteProfileResponse = (output: any, context: __SerdeContext): DeleteProfileResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteRoomResponse
 */
const de_DeleteRoomResponse = (output: any, context: __SerdeContext): DeleteRoomResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteRoomSkillParameterResponse
 */
const de_DeleteRoomSkillParameterResponse = (
  output: any,
  context: __SerdeContext
): DeleteRoomSkillParameterResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteSkillAuthorizationResponse
 */
const de_DeleteSkillAuthorizationResponse = (
  output: any,
  context: __SerdeContext
): DeleteSkillAuthorizationResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteSkillGroupResponse
 */
const de_DeleteSkillGroupResponse = (output: any, context: __SerdeContext): DeleteSkillGroupResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteUserResponse
 */
const de_DeleteUserResponse = (output: any, context: __SerdeContext): DeleteUserResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeveloperInfo
 */
const de_DeveloperInfo = (output: any, context: __SerdeContext): DeveloperInfo => {
  return {
    DeveloperName: __expectString(output.DeveloperName),
    Email: __expectString(output.Email),
    PrivacyPolicy: __expectString(output.PrivacyPolicy),
    Url: __expectString(output.Url),
  } as any;
};

/**
 * deserializeAws_json1_1Device
 */
const de_Device = (output: any, context: __SerdeContext): Device => {
  return {
    DeviceArn: __expectString(output.DeviceArn),
    DeviceName: __expectString(output.DeviceName),
    DeviceSerialNumber: __expectString(output.DeviceSerialNumber),
    DeviceStatus: __expectString(output.DeviceStatus),
    DeviceStatusInfo:
      output.DeviceStatusInfo != null ? de_DeviceStatusInfo(output.DeviceStatusInfo, context) : undefined,
    DeviceType: __expectString(output.DeviceType),
    MacAddress: __expectString(output.MacAddress),
    NetworkProfileInfo:
      output.NetworkProfileInfo != null ? de_DeviceNetworkProfileInfo(output.NetworkProfileInfo, context) : undefined,
    RoomArn: __expectString(output.RoomArn),
    SoftwareVersion: __expectString(output.SoftwareVersion),
  } as any;
};

/**
 * deserializeAws_json1_1DeviceData
 */
const de_DeviceData = (output: any, context: __SerdeContext): DeviceData => {
  return {
    CreatedTime:
      output.CreatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    DeviceArn: __expectString(output.DeviceArn),
    DeviceName: __expectString(output.DeviceName),
    DeviceSerialNumber: __expectString(output.DeviceSerialNumber),
    DeviceStatus: __expectString(output.DeviceStatus),
    DeviceStatusInfo:
      output.DeviceStatusInfo != null ? de_DeviceStatusInfo(output.DeviceStatusInfo, context) : undefined,
    DeviceType: __expectString(output.DeviceType),
    MacAddress: __expectString(output.MacAddress),
    NetworkProfileArn: __expectString(output.NetworkProfileArn),
    NetworkProfileName: __expectString(output.NetworkProfileName),
    RoomArn: __expectString(output.RoomArn),
    RoomName: __expectString(output.RoomName),
    SoftwareVersion: __expectString(output.SoftwareVersion),
  } as any;
};

/**
 * deserializeAws_json1_1DeviceDataList
 */
const de_DeviceDataList = (output: any, context: __SerdeContext): DeviceData[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DeviceData(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DeviceEvent
 */
const de_DeviceEvent = (output: any, context: __SerdeContext): DeviceEvent => {
  return {
    Timestamp:
      output.Timestamp != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.Timestamp))) : undefined,
    Type: __expectString(output.Type),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1DeviceEventList
 */
const de_DeviceEventList = (output: any, context: __SerdeContext): DeviceEvent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DeviceEvent(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DeviceNetworkProfileInfo
 */
const de_DeviceNetworkProfileInfo = (output: any, context: __SerdeContext): DeviceNetworkProfileInfo => {
  return {
    CertificateArn: __expectString(output.CertificateArn),
    CertificateExpirationTime:
      output.CertificateExpirationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CertificateExpirationTime)))
        : undefined,
    NetworkProfileArn: __expectString(output.NetworkProfileArn),
  } as any;
};

/**
 * deserializeAws_json1_1DeviceNotRegisteredException
 */
const de_DeviceNotRegisteredException = (output: any, context: __SerdeContext): DeviceNotRegisteredException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1DeviceStatusDetail
 */
const de_DeviceStatusDetail = (output: any, context: __SerdeContext): DeviceStatusDetail => {
  return {
    Code: __expectString(output.Code),
    Feature: __expectString(output.Feature),
  } as any;
};

/**
 * deserializeAws_json1_1DeviceStatusDetails
 */
const de_DeviceStatusDetails = (output: any, context: __SerdeContext): DeviceStatusDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DeviceStatusDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DeviceStatusInfo
 */
const de_DeviceStatusInfo = (output: any, context: __SerdeContext): DeviceStatusInfo => {
  return {
    ConnectionStatus: __expectString(output.ConnectionStatus),
    ConnectionStatusUpdatedTime:
      output.ConnectionStatusUpdatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ConnectionStatusUpdatedTime)))
        : undefined,
    DeviceStatusDetails:
      output.DeviceStatusDetails != null ? de_DeviceStatusDetails(output.DeviceStatusDetails, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DisassociateContactFromAddressBookResponse
 */
const de_DisassociateContactFromAddressBookResponse = (
  output: any,
  context: __SerdeContext
): DisassociateContactFromAddressBookResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DisassociateDeviceFromRoomResponse
 */
const de_DisassociateDeviceFromRoomResponse = (
  output: any,
  context: __SerdeContext
): DisassociateDeviceFromRoomResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DisassociateSkillFromSkillGroupResponse
 */
const de_DisassociateSkillFromSkillGroupResponse = (
  output: any,
  context: __SerdeContext
): DisassociateSkillFromSkillGroupResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DisassociateSkillFromUsersResponse
 */
const de_DisassociateSkillFromUsersResponse = (
  output: any,
  context: __SerdeContext
): DisassociateSkillFromUsersResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DisassociateSkillGroupFromRoomResponse
 */
const de_DisassociateSkillGroupFromRoomResponse = (
  output: any,
  context: __SerdeContext
): DisassociateSkillGroupFromRoomResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1EndOfMeetingReminder
 */
const de_EndOfMeetingReminder = (output: any, context: __SerdeContext): EndOfMeetingReminder => {
  return {
    Enabled: __expectBoolean(output.Enabled),
    ReminderAtMinutes:
      output.ReminderAtMinutes != null
        ? de_EndOfMeetingReminderMinutesList(output.ReminderAtMinutes, context)
        : undefined,
    ReminderType: __expectString(output.ReminderType),
  } as any;
};

/**
 * deserializeAws_json1_1EndOfMeetingReminderMinutesList
 */
const de_EndOfMeetingReminderMinutesList = (output: any, context: __SerdeContext): number[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectInt32(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ForgetSmartHomeAppliancesResponse
 */
const de_ForgetSmartHomeAppliancesResponse = (
  output: any,
  context: __SerdeContext
): ForgetSmartHomeAppliancesResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1Gateway
 */
const de_Gateway = (output: any, context: __SerdeContext): Gateway => {
  return {
    Arn: __expectString(output.Arn),
    Description: __expectString(output.Description),
    GatewayGroupArn: __expectString(output.GatewayGroupArn),
    Name: __expectString(output.Name),
    SoftwareVersion: __expectString(output.SoftwareVersion),
  } as any;
};

/**
 * deserializeAws_json1_1GatewayGroup
 */
const de_GatewayGroup = (output: any, context: __SerdeContext): GatewayGroup => {
  return {
    Arn: __expectString(output.Arn),
    Description: __expectString(output.Description),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1GatewayGroupSummaries
 */
const de_GatewayGroupSummaries = (output: any, context: __SerdeContext): GatewayGroupSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_GatewayGroupSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1GatewayGroupSummary
 */
const de_GatewayGroupSummary = (output: any, context: __SerdeContext): GatewayGroupSummary => {
  return {
    Arn: __expectString(output.Arn),
    Description: __expectString(output.Description),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1GatewaySummaries
 */
const de_GatewaySummaries = (output: any, context: __SerdeContext): GatewaySummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_GatewaySummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1GatewaySummary
 */
const de_GatewaySummary = (output: any, context: __SerdeContext): GatewaySummary => {
  return {
    Arn: __expectString(output.Arn),
    Description: __expectString(output.Description),
    GatewayGroupArn: __expectString(output.GatewayGroupArn),
    Name: __expectString(output.Name),
    SoftwareVersion: __expectString(output.SoftwareVersion),
  } as any;
};

/**
 * deserializeAws_json1_1GenericKeywords
 */
const de_GenericKeywords = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1GetAddressBookResponse
 */
const de_GetAddressBookResponse = (output: any, context: __SerdeContext): GetAddressBookResponse => {
  return {
    AddressBook: output.AddressBook != null ? de_AddressBook(output.AddressBook, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetConferencePreferenceResponse
 */
const de_GetConferencePreferenceResponse = (output: any, context: __SerdeContext): GetConferencePreferenceResponse => {
  return {
    Preference: output.Preference != null ? de_ConferencePreference(output.Preference, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetConferenceProviderResponse
 */
const de_GetConferenceProviderResponse = (output: any, context: __SerdeContext): GetConferenceProviderResponse => {
  return {
    ConferenceProvider:
      output.ConferenceProvider != null ? de_ConferenceProvider(output.ConferenceProvider, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetContactResponse
 */
const de_GetContactResponse = (output: any, context: __SerdeContext): GetContactResponse => {
  return {
    Contact: output.Contact != null ? de_Contact(output.Contact, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetDeviceResponse
 */
const de_GetDeviceResponse = (output: any, context: __SerdeContext): GetDeviceResponse => {
  return {
    Device: output.Device != null ? de_Device(output.Device, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetGatewayGroupResponse
 */
const de_GetGatewayGroupResponse = (output: any, context: __SerdeContext): GetGatewayGroupResponse => {
  return {
    GatewayGroup: output.GatewayGroup != null ? de_GatewayGroup(output.GatewayGroup, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetGatewayResponse
 */
const de_GetGatewayResponse = (output: any, context: __SerdeContext): GetGatewayResponse => {
  return {
    Gateway: output.Gateway != null ? de_Gateway(output.Gateway, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetInvitationConfigurationResponse
 */
const de_GetInvitationConfigurationResponse = (
  output: any,
  context: __SerdeContext
): GetInvitationConfigurationResponse => {
  return {
    ContactEmail: __expectString(output.ContactEmail),
    OrganizationName: __expectString(output.OrganizationName),
    PrivateSkillIds: output.PrivateSkillIds != null ? de_ShortSkillIdList(output.PrivateSkillIds, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetNetworkProfileResponse
 */
const de_GetNetworkProfileResponse = (output: any, context: __SerdeContext): GetNetworkProfileResponse => {
  return {
    NetworkProfile: output.NetworkProfile != null ? de_NetworkProfile(output.NetworkProfile, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetProfileResponse
 */
const de_GetProfileResponse = (output: any, context: __SerdeContext): GetProfileResponse => {
  return {
    Profile: output.Profile != null ? de_Profile(output.Profile, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetRoomResponse
 */
const de_GetRoomResponse = (output: any, context: __SerdeContext): GetRoomResponse => {
  return {
    Room: output.Room != null ? de_Room(output.Room, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetRoomSkillParameterResponse
 */
const de_GetRoomSkillParameterResponse = (output: any, context: __SerdeContext): GetRoomSkillParameterResponse => {
  return {
    RoomSkillParameter:
      output.RoomSkillParameter != null ? de_RoomSkillParameter(output.RoomSkillParameter, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetSkillGroupResponse
 */
const de_GetSkillGroupResponse = (output: any, context: __SerdeContext): GetSkillGroupResponse => {
  return {
    SkillGroup: output.SkillGroup != null ? de_SkillGroup(output.SkillGroup, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1InstantBooking
 */
const de_InstantBooking = (output: any, context: __SerdeContext): InstantBooking => {
  return {
    DurationInMinutes: __expectInt32(output.DurationInMinutes),
    Enabled: __expectBoolean(output.Enabled),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidCertificateAuthorityException
 */
const de_InvalidCertificateAuthorityException = (
  output: any,
  context: __SerdeContext
): InvalidCertificateAuthorityException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidDeviceException
 */
const de_InvalidDeviceException = (output: any, context: __SerdeContext): InvalidDeviceException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidSecretsManagerResourceException
 */
const de_InvalidSecretsManagerResourceException = (
  output: any,
  context: __SerdeContext
): InvalidSecretsManagerResourceException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidServiceLinkedRoleStateException
 */
const de_InvalidServiceLinkedRoleStateException = (
  output: any,
  context: __SerdeContext
): InvalidServiceLinkedRoleStateException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidUserStatusException
 */
const de_InvalidUserStatusException = (output: any, context: __SerdeContext): InvalidUserStatusException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1IPDialIn
 */
const de_IPDialIn = (output: any, context: __SerdeContext): IPDialIn => {
  return {
    CommsProtocol: __expectString(output.CommsProtocol),
    Endpoint: __expectString(output.Endpoint),
  } as any;
};

/**
 * deserializeAws_json1_1LimitExceededException
 */
const de_LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ListBusinessReportSchedulesResponse
 */
const de_ListBusinessReportSchedulesResponse = (
  output: any,
  context: __SerdeContext
): ListBusinessReportSchedulesResponse => {
  return {
    BusinessReportSchedules:
      output.BusinessReportSchedules != null
        ? de_BusinessReportScheduleList(output.BusinessReportSchedules, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListConferenceProvidersResponse
 */
const de_ListConferenceProvidersResponse = (output: any, context: __SerdeContext): ListConferenceProvidersResponse => {
  return {
    ConferenceProviders:
      output.ConferenceProviders != null ? de_ConferenceProvidersList(output.ConferenceProviders, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListDeviceEventsResponse
 */
const de_ListDeviceEventsResponse = (output: any, context: __SerdeContext): ListDeviceEventsResponse => {
  return {
    DeviceEvents: output.DeviceEvents != null ? de_DeviceEventList(output.DeviceEvents, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListGatewayGroupsResponse
 */
const de_ListGatewayGroupsResponse = (output: any, context: __SerdeContext): ListGatewayGroupsResponse => {
  return {
    GatewayGroups: output.GatewayGroups != null ? de_GatewayGroupSummaries(output.GatewayGroups, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListGatewaysResponse
 */
const de_ListGatewaysResponse = (output: any, context: __SerdeContext): ListGatewaysResponse => {
  return {
    Gateways: output.Gateways != null ? de_GatewaySummaries(output.Gateways, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListSkillsResponse
 */
const de_ListSkillsResponse = (output: any, context: __SerdeContext): ListSkillsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    SkillSummaries: output.SkillSummaries != null ? de_SkillSummaryList(output.SkillSummaries, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListSkillsStoreCategoriesResponse
 */
const de_ListSkillsStoreCategoriesResponse = (
  output: any,
  context: __SerdeContext
): ListSkillsStoreCategoriesResponse => {
  return {
    CategoryList: output.CategoryList != null ? de_CategoryList(output.CategoryList, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListSkillsStoreSkillsByCategoryResponse
 */
const de_ListSkillsStoreSkillsByCategoryResponse = (
  output: any,
  context: __SerdeContext
): ListSkillsStoreSkillsByCategoryResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    SkillsStoreSkills:
      output.SkillsStoreSkills != null ? de_SkillsStoreSkillList(output.SkillsStoreSkills, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListSmartHomeAppliancesResponse
 */
const de_ListSmartHomeAppliancesResponse = (output: any, context: __SerdeContext): ListSmartHomeAppliancesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    SmartHomeAppliances:
      output.SmartHomeAppliances != null ? de_SmartHomeApplianceList(output.SmartHomeAppliances, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListTagsResponse
 */
const de_ListTagsResponse = (output: any, context: __SerdeContext): ListTagsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1MeetingRoomConfiguration
 */
const de_MeetingRoomConfiguration = (output: any, context: __SerdeContext): MeetingRoomConfiguration => {
  return {
    EndOfMeetingReminder:
      output.EndOfMeetingReminder != null ? de_EndOfMeetingReminder(output.EndOfMeetingReminder, context) : undefined,
    InstantBooking: output.InstantBooking != null ? de_InstantBooking(output.InstantBooking, context) : undefined,
    RequireCheckIn: output.RequireCheckIn != null ? de_RequireCheckIn(output.RequireCheckIn, context) : undefined,
    RoomUtilizationMetricsEnabled: __expectBoolean(output.RoomUtilizationMetricsEnabled),
  } as any;
};

/**
 * deserializeAws_json1_1MeetingSetting
 */
const de_MeetingSetting = (output: any, context: __SerdeContext): MeetingSetting => {
  return {
    RequirePin: __expectString(output.RequirePin),
  } as any;
};

/**
 * deserializeAws_json1_1NameInUseException
 */
const de_NameInUseException = (output: any, context: __SerdeContext): NameInUseException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1NetworkProfile
 */
const de_NetworkProfile = (output: any, context: __SerdeContext): NetworkProfile => {
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
    TrustAnchors: output.TrustAnchors != null ? de_TrustAnchorList(output.TrustAnchors, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1NetworkProfileData
 */
const de_NetworkProfileData = (output: any, context: __SerdeContext): NetworkProfileData => {
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

/**
 * deserializeAws_json1_1NetworkProfileDataList
 */
const de_NetworkProfileDataList = (output: any, context: __SerdeContext): NetworkProfileData[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_NetworkProfileData(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1NewInThisVersionBulletPoints
 */
const de_NewInThisVersionBulletPoints = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1NotFoundException
 */
const de_NotFoundException = (output: any, context: __SerdeContext): NotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1PhoneNumber
 */
const de_PhoneNumber = (output: any, context: __SerdeContext): PhoneNumber => {
  return {
    Number: __expectString(output.Number),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1PhoneNumberList
 */
const de_PhoneNumberList = (output: any, context: __SerdeContext): PhoneNumber[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PhoneNumber(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Profile
 */
const de_Profile = (output: any, context: __SerdeContext): Profile => {
  return {
    Address: __expectString(output.Address),
    AddressBookArn: __expectString(output.AddressBookArn),
    DataRetentionOptIn: __expectBoolean(output.DataRetentionOptIn),
    DistanceUnit: __expectString(output.DistanceUnit),
    IsDefault: __expectBoolean(output.IsDefault),
    Locale: __expectString(output.Locale),
    MaxVolumeLimit: __expectInt32(output.MaxVolumeLimit),
    MeetingRoomConfiguration:
      output.MeetingRoomConfiguration != null
        ? de_MeetingRoomConfiguration(output.MeetingRoomConfiguration, context)
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

/**
 * deserializeAws_json1_1ProfileData
 */
const de_ProfileData = (output: any, context: __SerdeContext): ProfileData => {
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

/**
 * deserializeAws_json1_1ProfileDataList
 */
const de_ProfileDataList = (output: any, context: __SerdeContext): ProfileData[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ProfileData(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PSTNDialIn
 */
const de_PSTNDialIn = (output: any, context: __SerdeContext): PSTNDialIn => {
  return {
    CountryCode: __expectString(output.CountryCode),
    OneClickIdDelay: __expectString(output.OneClickIdDelay),
    OneClickPinDelay: __expectString(output.OneClickPinDelay),
    PhoneNumber: __expectString(output.PhoneNumber),
  } as any;
};

/**
 * deserializeAws_json1_1PutConferencePreferenceResponse
 */
const de_PutConferencePreferenceResponse = (output: any, context: __SerdeContext): PutConferencePreferenceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1PutInvitationConfigurationResponse
 */
const de_PutInvitationConfigurationResponse = (
  output: any,
  context: __SerdeContext
): PutInvitationConfigurationResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1PutRoomSkillParameterResponse
 */
const de_PutRoomSkillParameterResponse = (output: any, context: __SerdeContext): PutRoomSkillParameterResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1PutSkillAuthorizationResponse
 */
const de_PutSkillAuthorizationResponse = (output: any, context: __SerdeContext): PutSkillAuthorizationResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1RegisterAVSDeviceResponse
 */
const de_RegisterAVSDeviceResponse = (output: any, context: __SerdeContext): RegisterAVSDeviceResponse => {
  return {
    DeviceArn: __expectString(output.DeviceArn),
  } as any;
};

/**
 * deserializeAws_json1_1RejectSkillResponse
 */
const de_RejectSkillResponse = (output: any, context: __SerdeContext): RejectSkillResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1RequireCheckIn
 */
const de_RequireCheckIn = (output: any, context: __SerdeContext): RequireCheckIn => {
  return {
    Enabled: __expectBoolean(output.Enabled),
    ReleaseAfterMinutes: __expectInt32(output.ReleaseAfterMinutes),
  } as any;
};

/**
 * deserializeAws_json1_1ResolveRoomResponse
 */
const de_ResolveRoomResponse = (output: any, context: __SerdeContext): ResolveRoomResponse => {
  return {
    RoomArn: __expectString(output.RoomArn),
    RoomName: __expectString(output.RoomName),
    RoomSkillParameters:
      output.RoomSkillParameters != null ? de_RoomSkillParameters(output.RoomSkillParameters, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ResourceAssociatedException
 */
const de_ResourceAssociatedException = (output: any, context: __SerdeContext): ResourceAssociatedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceInUseException
 */
const de_ResourceInUseException = (output: any, context: __SerdeContext): ResourceInUseException => {
  return {
    ClientRequestToken: __expectString(output.ClientRequestToken),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1Reviews
 */
const de_Reviews = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1RevokeInvitationResponse
 */
const de_RevokeInvitationResponse = (output: any, context: __SerdeContext): RevokeInvitationResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1Room
 */
const de_Room = (output: any, context: __SerdeContext): Room => {
  return {
    Description: __expectString(output.Description),
    ProfileArn: __expectString(output.ProfileArn),
    ProviderCalendarId: __expectString(output.ProviderCalendarId),
    RoomArn: __expectString(output.RoomArn),
    RoomName: __expectString(output.RoomName),
  } as any;
};

/**
 * deserializeAws_json1_1RoomData
 */
const de_RoomData = (output: any, context: __SerdeContext): RoomData => {
  return {
    Description: __expectString(output.Description),
    ProfileArn: __expectString(output.ProfileArn),
    ProfileName: __expectString(output.ProfileName),
    ProviderCalendarId: __expectString(output.ProviderCalendarId),
    RoomArn: __expectString(output.RoomArn),
    RoomName: __expectString(output.RoomName),
  } as any;
};

/**
 * deserializeAws_json1_1RoomDataList
 */
const de_RoomDataList = (output: any, context: __SerdeContext): RoomData[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RoomData(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RoomSkillParameter
 */
const de_RoomSkillParameter = (output: any, context: __SerdeContext): RoomSkillParameter => {
  return {
    ParameterKey: __expectString(output.ParameterKey),
    ParameterValue: __expectString(output.ParameterValue),
  } as any;
};

/**
 * deserializeAws_json1_1RoomSkillParameters
 */
const de_RoomSkillParameters = (output: any, context: __SerdeContext): RoomSkillParameter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RoomSkillParameter(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SampleUtterances
 */
const de_SampleUtterances = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SearchAddressBooksResponse
 */
const de_SearchAddressBooksResponse = (output: any, context: __SerdeContext): SearchAddressBooksResponse => {
  return {
    AddressBooks: output.AddressBooks != null ? de_AddressBookDataList(output.AddressBooks, context) : undefined,
    NextToken: __expectString(output.NextToken),
    TotalCount: __expectInt32(output.TotalCount),
  } as any;
};

/**
 * deserializeAws_json1_1SearchContactsResponse
 */
const de_SearchContactsResponse = (output: any, context: __SerdeContext): SearchContactsResponse => {
  return {
    Contacts: output.Contacts != null ? de_ContactDataList(output.Contacts, context) : undefined,
    NextToken: __expectString(output.NextToken),
    TotalCount: __expectInt32(output.TotalCount),
  } as any;
};

/**
 * deserializeAws_json1_1SearchDevicesResponse
 */
const de_SearchDevicesResponse = (output: any, context: __SerdeContext): SearchDevicesResponse => {
  return {
    Devices: output.Devices != null ? de_DeviceDataList(output.Devices, context) : undefined,
    NextToken: __expectString(output.NextToken),
    TotalCount: __expectInt32(output.TotalCount),
  } as any;
};

/**
 * deserializeAws_json1_1SearchNetworkProfilesResponse
 */
const de_SearchNetworkProfilesResponse = (output: any, context: __SerdeContext): SearchNetworkProfilesResponse => {
  return {
    NetworkProfiles:
      output.NetworkProfiles != null ? de_NetworkProfileDataList(output.NetworkProfiles, context) : undefined,
    NextToken: __expectString(output.NextToken),
    TotalCount: __expectInt32(output.TotalCount),
  } as any;
};

/**
 * deserializeAws_json1_1SearchProfilesResponse
 */
const de_SearchProfilesResponse = (output: any, context: __SerdeContext): SearchProfilesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Profiles: output.Profiles != null ? de_ProfileDataList(output.Profiles, context) : undefined,
    TotalCount: __expectInt32(output.TotalCount),
  } as any;
};

/**
 * deserializeAws_json1_1SearchRoomsResponse
 */
const de_SearchRoomsResponse = (output: any, context: __SerdeContext): SearchRoomsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Rooms: output.Rooms != null ? de_RoomDataList(output.Rooms, context) : undefined,
    TotalCount: __expectInt32(output.TotalCount),
  } as any;
};

/**
 * deserializeAws_json1_1SearchSkillGroupsResponse
 */
const de_SearchSkillGroupsResponse = (output: any, context: __SerdeContext): SearchSkillGroupsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    SkillGroups: output.SkillGroups != null ? de_SkillGroupDataList(output.SkillGroups, context) : undefined,
    TotalCount: __expectInt32(output.TotalCount),
  } as any;
};

/**
 * deserializeAws_json1_1SearchUsersResponse
 */
const de_SearchUsersResponse = (output: any, context: __SerdeContext): SearchUsersResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    TotalCount: __expectInt32(output.TotalCount),
    Users: output.Users != null ? de_UserDataList(output.Users, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1SendAnnouncementResponse
 */
const de_SendAnnouncementResponse = (output: any, context: __SerdeContext): SendAnnouncementResponse => {
  return {
    AnnouncementArn: __expectString(output.AnnouncementArn),
  } as any;
};

/**
 * deserializeAws_json1_1SendInvitationResponse
 */
const de_SendInvitationResponse = (output: any, context: __SerdeContext): SendInvitationResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1ShortSkillIdList
 */
const de_ShortSkillIdList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SipAddress
 */
const de_SipAddress = (output: any, context: __SerdeContext): SipAddress => {
  return {
    Type: __expectString(output.Type),
    Uri: __expectString(output.Uri),
  } as any;
};

/**
 * deserializeAws_json1_1SipAddressList
 */
const de_SipAddressList = (output: any, context: __SerdeContext): SipAddress[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SipAddress(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SkillDetails
 */
const de_SkillDetails = (output: any, context: __SerdeContext): SkillDetails => {
  return {
    BulletPoints: output.BulletPoints != null ? de_BulletPoints(output.BulletPoints, context) : undefined,
    DeveloperInfo: output.DeveloperInfo != null ? de_DeveloperInfo(output.DeveloperInfo, context) : undefined,
    EndUserLicenseAgreement: __expectString(output.EndUserLicenseAgreement),
    GenericKeywords: output.GenericKeywords != null ? de_GenericKeywords(output.GenericKeywords, context) : undefined,
    InvocationPhrase: __expectString(output.InvocationPhrase),
    NewInThisVersionBulletPoints:
      output.NewInThisVersionBulletPoints != null
        ? de_NewInThisVersionBulletPoints(output.NewInThisVersionBulletPoints, context)
        : undefined,
    ProductDescription: __expectString(output.ProductDescription),
    ReleaseDate: __expectString(output.ReleaseDate),
    Reviews: output.Reviews != null ? de_Reviews(output.Reviews, context) : undefined,
    SkillTypes: output.SkillTypes != null ? de_SkillTypes(output.SkillTypes, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1SkillGroup
 */
const de_SkillGroup = (output: any, context: __SerdeContext): SkillGroup => {
  return {
    Description: __expectString(output.Description),
    SkillGroupArn: __expectString(output.SkillGroupArn),
    SkillGroupName: __expectString(output.SkillGroupName),
  } as any;
};

/**
 * deserializeAws_json1_1SkillGroupData
 */
const de_SkillGroupData = (output: any, context: __SerdeContext): SkillGroupData => {
  return {
    Description: __expectString(output.Description),
    SkillGroupArn: __expectString(output.SkillGroupArn),
    SkillGroupName: __expectString(output.SkillGroupName),
  } as any;
};

/**
 * deserializeAws_json1_1SkillGroupDataList
 */
const de_SkillGroupDataList = (output: any, context: __SerdeContext): SkillGroupData[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SkillGroupData(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SkillNotLinkedException
 */
const de_SkillNotLinkedException = (output: any, context: __SerdeContext): SkillNotLinkedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1SkillsStoreSkill
 */
const de_SkillsStoreSkill = (output: any, context: __SerdeContext): SkillsStoreSkill => {
  return {
    IconUrl: __expectString(output.IconUrl),
    SampleUtterances:
      output.SampleUtterances != null ? de_SampleUtterances(output.SampleUtterances, context) : undefined,
    ShortDescription: __expectString(output.ShortDescription),
    SkillDetails: output.SkillDetails != null ? de_SkillDetails(output.SkillDetails, context) : undefined,
    SkillId: __expectString(output.SkillId),
    SkillName: __expectString(output.SkillName),
    SupportsLinking: __expectBoolean(output.SupportsLinking),
  } as any;
};

/**
 * deserializeAws_json1_1SkillsStoreSkillList
 */
const de_SkillsStoreSkillList = (output: any, context: __SerdeContext): SkillsStoreSkill[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SkillsStoreSkill(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SkillSummary
 */
const de_SkillSummary = (output: any, context: __SerdeContext): SkillSummary => {
  return {
    EnablementType: __expectString(output.EnablementType),
    SkillId: __expectString(output.SkillId),
    SkillName: __expectString(output.SkillName),
    SkillType: __expectString(output.SkillType),
    SupportsLinking: __expectBoolean(output.SupportsLinking),
  } as any;
};

/**
 * deserializeAws_json1_1SkillSummaryList
 */
const de_SkillSummaryList = (output: any, context: __SerdeContext): SkillSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SkillSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SkillTypes
 */
const de_SkillTypes = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SmartHomeAppliance
 */
const de_SmartHomeAppliance = (output: any, context: __SerdeContext): SmartHomeAppliance => {
  return {
    Description: __expectString(output.Description),
    FriendlyName: __expectString(output.FriendlyName),
    ManufacturerName: __expectString(output.ManufacturerName),
  } as any;
};

/**
 * deserializeAws_json1_1SmartHomeApplianceList
 */
const de_SmartHomeApplianceList = (output: any, context: __SerdeContext): SmartHomeAppliance[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SmartHomeAppliance(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1StartDeviceSyncResponse
 */
const de_StartDeviceSyncResponse = (output: any, context: __SerdeContext): StartDeviceSyncResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1StartSmartHomeApplianceDiscoveryResponse
 */
const de_StartSmartHomeApplianceDiscoveryResponse = (
  output: any,
  context: __SerdeContext
): StartSmartHomeApplianceDiscoveryResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1TagList
 */
const de_TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Tag(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TagResourceResponse
 */
const de_TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1TrustAnchorList
 */
const de_TrustAnchorList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1UnauthorizedException
 */
const de_UnauthorizedException = (output: any, context: __SerdeContext): UnauthorizedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1UntagResourceResponse
 */
const de_UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateAddressBookResponse
 */
const de_UpdateAddressBookResponse = (output: any, context: __SerdeContext): UpdateAddressBookResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateBusinessReportScheduleResponse
 */
const de_UpdateBusinessReportScheduleResponse = (
  output: any,
  context: __SerdeContext
): UpdateBusinessReportScheduleResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateConferenceProviderResponse
 */
const de_UpdateConferenceProviderResponse = (
  output: any,
  context: __SerdeContext
): UpdateConferenceProviderResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateContactResponse
 */
const de_UpdateContactResponse = (output: any, context: __SerdeContext): UpdateContactResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateDeviceResponse
 */
const de_UpdateDeviceResponse = (output: any, context: __SerdeContext): UpdateDeviceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateGatewayGroupResponse
 */
const de_UpdateGatewayGroupResponse = (output: any, context: __SerdeContext): UpdateGatewayGroupResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateGatewayResponse
 */
const de_UpdateGatewayResponse = (output: any, context: __SerdeContext): UpdateGatewayResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateNetworkProfileResponse
 */
const de_UpdateNetworkProfileResponse = (output: any, context: __SerdeContext): UpdateNetworkProfileResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateProfileResponse
 */
const de_UpdateProfileResponse = (output: any, context: __SerdeContext): UpdateProfileResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateRoomResponse
 */
const de_UpdateRoomResponse = (output: any, context: __SerdeContext): UpdateRoomResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateSkillGroupResponse
 */
const de_UpdateSkillGroupResponse = (output: any, context: __SerdeContext): UpdateSkillGroupResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UserData
 */
const de_UserData = (output: any, context: __SerdeContext): UserData => {
  return {
    Email: __expectString(output.Email),
    EnrollmentId: __expectString(output.EnrollmentId),
    EnrollmentStatus: __expectString(output.EnrollmentStatus),
    FirstName: __expectString(output.FirstName),
    LastName: __expectString(output.LastName),
    UserArn: __expectString(output.UserArn),
  } as any;
};

/**
 * deserializeAws_json1_1UserDataList
 */
const de_UserDataList = (output: any, context: __SerdeContext): UserData[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_UserData(entry, context);
    });
  return retVal;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
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
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
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
function sharedHeaders(operation: string): __HeaderBag {
  return {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `AlexaForBusiness.${operation}`,
  };
}

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
};

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string | number): string => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
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
};
