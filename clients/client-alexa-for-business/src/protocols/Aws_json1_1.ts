// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  parseEpochTimestamp as __parseEpochTimestamp,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
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
  AlreadyExistsException,
  ApproveSkillRequest,
  AssociateContactWithAddressBookRequest,
  AssociateDeviceWithNetworkProfileRequest,
  AssociateDeviceWithRoomRequest,
  AssociateSkillGroupWithRoomRequest,
  AssociateSkillWithSkillGroupRequest,
  AssociateSkillWithUsersRequest,
  Audio,
  BusinessReport,
  BusinessReportContentRange,
  BusinessReportRecurrence,
  BusinessReportSchedule,
  ConcurrentModificationException,
  ConferencePreference,
  Content,
  CreateAddressBookRequest,
  CreateBusinessReportScheduleRequest,
  CreateConferenceProviderRequest,
  CreateContactRequest,
  CreateEndOfMeetingReminder,
  CreateGatewayGroupRequest,
  CreateInstantBooking,
  CreateMeetingRoomConfiguration,
  CreateNetworkProfileRequest,
  CreateProactiveJoin,
  CreateProfileRequest,
  CreateRequireCheckIn,
  CreateRoomRequest,
  CreateSkillGroupRequest,
  CreateUserRequest,
  DeleteAddressBookRequest,
  DeleteBusinessReportScheduleRequest,
  DeleteConferenceProviderRequest,
  DeleteContactRequest,
  DeleteDeviceRequest,
  DeleteDeviceUsageDataRequest,
  DeleteGatewayGroupRequest,
  DeleteNetworkProfileRequest,
  DeleteProfileRequest,
  DeleteRoomRequest,
  DeleteRoomSkillParameterRequest,
  DeleteSkillAuthorizationRequest,
  DeleteSkillGroupRequest,
  DeleteUserRequest,
  Device,
  DeviceData,
  DeviceEvent,
  DeviceNetworkProfileInfo,
  DeviceNotRegisteredException,
  DeviceStatusInfo,
  DisassociateContactFromAddressBookRequest,
  DisassociateDeviceFromRoomRequest,
  DisassociateSkillFromSkillGroupRequest,
  DisassociateSkillFromUsersRequest,
  DisassociateSkillGroupFromRoomRequest,
  Feature,
  Filter,
  ForgetSmartHomeAppliancesRequest,
  GetAddressBookRequest,
  GetConferencePreferenceRequest,
  GetConferenceProviderRequest,
  GetContactRequest,
  GetDeviceRequest,
  GetDeviceResponse,
  GetGatewayGroupRequest,
  GetGatewayRequest,
  GetInvitationConfigurationRequest,
  GetNetworkProfileRequest,
  GetProfileRequest,
  GetRoomRequest,
  GetRoomSkillParameterRequest,
  GetSkillGroupRequest,
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
  ListDeviceEventsRequest,
  ListDeviceEventsResponse,
  ListGatewayGroupsRequest,
  ListGatewaysRequest,
  ListSkillsRequest,
  ListSkillsStoreCategoriesRequest,
  ListSkillsStoreSkillsByCategoryRequest,
  ListSmartHomeAppliancesRequest,
  ListTagsRequest,
  MeetingSetting,
  NameInUseException,
  NotFoundException,
  PhoneNumber,
  PSTNDialIn,
  PutConferencePreferenceRequest,
  PutInvitationConfigurationRequest,
  PutRoomSkillParameterRequest,
  PutSkillAuthorizationRequest,
  RegisterAVSDeviceRequest,
  RejectSkillRequest,
  ResolveRoomRequest,
  ResourceAssociatedException,
  ResourceInUseException,
  RevokeInvitationRequest,
  RoomSkillParameter,
  SearchAddressBooksRequest,
  SearchContactsRequest,
  SearchDevicesRequest,
  SearchDevicesResponse,
  SearchNetworkProfilesRequest,
  SearchProfilesRequest,
  SearchRoomsRequest,
  SearchSkillGroupsRequest,
  SearchUsersRequest,
  SendAnnouncementRequest,
  SendInvitationRequest,
  SipAddress,
  SkillNotLinkedException,
  Sort,
  Ssml,
  StartDeviceSyncRequest,
  StartSmartHomeApplianceDiscoveryRequest,
  Tag,
  TagResourceRequest,
  Text,
  UnauthorizedException,
  UntagResourceRequest,
  UpdateAddressBookRequest,
  UpdateBusinessReportScheduleRequest,
  UpdateConferenceProviderRequest,
  UpdateContactRequest,
  UpdateDeviceRequest,
  UpdateEndOfMeetingReminder,
  UpdateGatewayGroupRequest,
  UpdateGatewayRequest,
  UpdateInstantBooking,
  UpdateMeetingRoomConfiguration,
  UpdateNetworkProfileRequest,
  UpdateProactiveJoin,
  UpdateProfileRequest,
  UpdateRequireCheckIn,
  UpdateRoomRequest,
  UpdateSkillGroupRequest,
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  contents = _json(data);
  const response: ApproveSkillCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: AssociateContactWithAddressBookCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: AssociateDeviceWithNetworkProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: AssociateDeviceWithRoomCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: AssociateSkillGroupWithRoomCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: AssociateSkillWithSkillGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: AssociateSkillWithUsersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateAddressBookCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateBusinessReportScheduleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateConferenceProviderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateContactCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateGatewayGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateNetworkProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateRoomCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateSkillGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteAddressBookCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteBusinessReportScheduleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteConferenceProviderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteContactCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteDeviceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteDeviceUsageDataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteGatewayGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteNetworkProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteRoomCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteRoomSkillParameterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteSkillAuthorizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteSkillGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DisassociateContactFromAddressBookCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
  return throwDefaultError({
    output,
    parsedBody,
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
  contents = _json(data);
  const response: DisassociateDeviceFromRoomCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DisassociateSkillFromSkillGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DisassociateSkillFromUsersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DisassociateSkillGroupFromRoomCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ForgetSmartHomeAppliancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetAddressBookCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetConferencePreferenceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetConferenceProviderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetContactCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetGatewayCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetGatewayGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetInvitationConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetNetworkProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetRoomCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetRoomSkillParameterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetSkillGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
  return throwDefaultError({
    output,
    parsedBody,
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
  contents = _json(data);
  const response: ListConferenceProvidersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
  return throwDefaultError({
    output,
    parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListGatewayGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
  return throwDefaultError({
    output,
    parsedBody,
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
  contents = _json(data);
  const response: ListGatewaysCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
  return throwDefaultError({
    output,
    parsedBody,
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
  contents = _json(data);
  const response: ListSkillsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
  return throwDefaultError({
    output,
    parsedBody,
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
  contents = _json(data);
  const response: ListSkillsStoreCategoriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
  return throwDefaultError({
    output,
    parsedBody,
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
  contents = _json(data);
  const response: ListSkillsStoreSkillsByCategoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
  return throwDefaultError({
    output,
    parsedBody,
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
  contents = _json(data);
  const response: ListSmartHomeAppliancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: PutConferencePreferenceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: PutInvitationConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: PutRoomSkillParameterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: PutSkillAuthorizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: RegisterAVSDeviceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: RejectSkillCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ResolveRoomCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: RevokeInvitationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: SearchAddressBooksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
  return throwDefaultError({
    output,
    parsedBody,
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
  contents = _json(data);
  const response: SearchContactsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
  return throwDefaultError({
    output,
    parsedBody,
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
  return response;
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
  return throwDefaultError({
    output,
    parsedBody,
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
  contents = _json(data);
  const response: SearchNetworkProfilesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
  return throwDefaultError({
    output,
    parsedBody,
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
  contents = _json(data);
  const response: SearchProfilesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
  return throwDefaultError({
    output,
    parsedBody,
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
  contents = _json(data);
  const response: SearchRoomsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
  return throwDefaultError({
    output,
    parsedBody,
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
  contents = _json(data);
  const response: SearchSkillGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
  return throwDefaultError({
    output,
    parsedBody,
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
  contents = _json(data);
  const response: SearchUsersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
  return throwDefaultError({
    output,
    parsedBody,
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
  contents = _json(data);
  const response: SendAnnouncementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: SendInvitationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: StartDeviceSyncCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: StartSmartHomeApplianceDiscoveryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateAddressBookCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateBusinessReportScheduleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateConferenceProviderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateContactCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateDeviceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateGatewayCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateGatewayGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateNetworkProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateRoomCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateSkillGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
  const exception = new UnauthorizedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_ApproveSkillRequest omitted.

// se_AssociateContactWithAddressBookRequest omitted.

// se_AssociateDeviceWithNetworkProfileRequest omitted.

// se_AssociateDeviceWithRoomRequest omitted.

// se_AssociateSkillGroupWithRoomRequest omitted.

// se_AssociateSkillWithSkillGroupRequest omitted.

// se_AssociateSkillWithUsersRequest omitted.

// se_Audio omitted.

// se_AudioList omitted.

// se_AuthorizationResult omitted.

// se_BusinessReportContentRange omitted.

// se_BusinessReportRecurrence omitted.

// se_ConferencePreference omitted.

// se_Content omitted.

/**
 * serializeAws_json1_1CreateAddressBookRequest
 */
const se_CreateAddressBookRequest = (input: CreateAddressBookRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    Description: [],
    Name: [],
    Tags: _json,
  });
};

/**
 * serializeAws_json1_1CreateBusinessReportScheduleRequest
 */
const se_CreateBusinessReportScheduleRequest = (
  input: CreateBusinessReportScheduleRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    ContentRange: _json,
    Format: [],
    Recurrence: _json,
    S3BucketName: [],
    S3KeyPrefix: [],
    ScheduleName: [],
    Tags: _json,
  });
};

/**
 * serializeAws_json1_1CreateConferenceProviderRequest
 */
const se_CreateConferenceProviderRequest = (input: CreateConferenceProviderRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    ConferenceProviderName: [],
    ConferenceProviderType: [],
    IPDialIn: _json,
    MeetingSetting: _json,
    PSTNDialIn: _json,
    Tags: _json,
  });
};

/**
 * serializeAws_json1_1CreateContactRequest
 */
const se_CreateContactRequest = (input: CreateContactRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    DisplayName: [],
    FirstName: [],
    LastName: [],
    PhoneNumber: [],
    PhoneNumbers: _json,
    SipAddresses: _json,
    Tags: _json,
  });
};

// se_CreateEndOfMeetingReminder omitted.

/**
 * serializeAws_json1_1CreateGatewayGroupRequest
 */
const se_CreateGatewayGroupRequest = (input: CreateGatewayGroupRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    Description: [],
    Name: [],
    Tags: _json,
  });
};

// se_CreateInstantBooking omitted.

// se_CreateMeetingRoomConfiguration omitted.

/**
 * serializeAws_json1_1CreateNetworkProfileRequest
 */
const se_CreateNetworkProfileRequest = (input: CreateNetworkProfileRequest, context: __SerdeContext): any => {
  return take(input, {
    CertificateAuthorityArn: [],
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    CurrentPassword: [],
    Description: [],
    EapMethod: [],
    NetworkProfileName: [],
    NextPassword: [],
    SecurityType: [],
    Ssid: [],
    Tags: _json,
    TrustAnchors: _json,
  });
};

// se_CreateProactiveJoin omitted.

/**
 * serializeAws_json1_1CreateProfileRequest
 */
const se_CreateProfileRequest = (input: CreateProfileRequest, context: __SerdeContext): any => {
  return take(input, {
    Address: [],
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    DataRetentionOptIn: [],
    DistanceUnit: [],
    Locale: [],
    MaxVolumeLimit: [],
    MeetingRoomConfiguration: _json,
    PSTNEnabled: [],
    ProfileName: [],
    SetupModeDisabled: [],
    Tags: _json,
    TemperatureUnit: [],
    Timezone: [],
    WakeWord: [],
  });
};

// se_CreateRequireCheckIn omitted.

/**
 * serializeAws_json1_1CreateRoomRequest
 */
const se_CreateRoomRequest = (input: CreateRoomRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    Description: [],
    ProfileArn: [],
    ProviderCalendarId: [],
    RoomName: [],
    Tags: _json,
  });
};

/**
 * serializeAws_json1_1CreateSkillGroupRequest
 */
const se_CreateSkillGroupRequest = (input: CreateSkillGroupRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    Description: [],
    SkillGroupName: [],
    Tags: _json,
  });
};

/**
 * serializeAws_json1_1CreateUserRequest
 */
const se_CreateUserRequest = (input: CreateUserRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    Email: [],
    FirstName: [],
    LastName: [],
    Tags: _json,
    UserId: [],
  });
};

// se_DeleteAddressBookRequest omitted.

// se_DeleteBusinessReportScheduleRequest omitted.

// se_DeleteConferenceProviderRequest omitted.

// se_DeleteContactRequest omitted.

// se_DeleteDeviceRequest omitted.

// se_DeleteDeviceUsageDataRequest omitted.

// se_DeleteGatewayGroupRequest omitted.

// se_DeleteNetworkProfileRequest omitted.

// se_DeleteProfileRequest omitted.

// se_DeleteRoomRequest omitted.

// se_DeleteRoomSkillParameterRequest omitted.

// se_DeleteSkillAuthorizationRequest omitted.

// se_DeleteSkillGroupRequest omitted.

// se_DeleteUserRequest omitted.

// se_DisassociateContactFromAddressBookRequest omitted.

// se_DisassociateDeviceFromRoomRequest omitted.

// se_DisassociateSkillFromSkillGroupRequest omitted.

// se_DisassociateSkillFromUsersRequest omitted.

// se_DisassociateSkillGroupFromRoomRequest omitted.

// se_EndOfMeetingReminderMinutesList omitted.

// se_Features omitted.

// se_Filter omitted.

// se_FilterList omitted.

// se_FilterValueList omitted.

// se_ForgetSmartHomeAppliancesRequest omitted.

// se_GetAddressBookRequest omitted.

// se_GetConferencePreferenceRequest omitted.

// se_GetConferenceProviderRequest omitted.

// se_GetContactRequest omitted.

// se_GetDeviceRequest omitted.

// se_GetGatewayGroupRequest omitted.

// se_GetGatewayRequest omitted.

// se_GetInvitationConfigurationRequest omitted.

// se_GetNetworkProfileRequest omitted.

// se_GetProfileRequest omitted.

// se_GetRoomRequest omitted.

// se_GetRoomSkillParameterRequest omitted.

// se_GetSkillGroupRequest omitted.

// se_IPDialIn omitted.

// se_ListBusinessReportSchedulesRequest omitted.

// se_ListConferenceProvidersRequest omitted.

// se_ListDeviceEventsRequest omitted.

// se_ListGatewayGroupsRequest omitted.

// se_ListGatewaysRequest omitted.

// se_ListSkillsRequest omitted.

// se_ListSkillsStoreCategoriesRequest omitted.

// se_ListSkillsStoreSkillsByCategoryRequest omitted.

// se_ListSmartHomeAppliancesRequest omitted.

// se_ListTagsRequest omitted.

// se_MeetingSetting omitted.

// se_PhoneNumber omitted.

// se_PhoneNumberList omitted.

// se_PSTNDialIn omitted.

// se_PutConferencePreferenceRequest omitted.

// se_PutInvitationConfigurationRequest omitted.

// se_PutRoomSkillParameterRequest omitted.

// se_PutSkillAuthorizationRequest omitted.

// se_RegisterAVSDeviceRequest omitted.

// se_RejectSkillRequest omitted.

// se_ResolveRoomRequest omitted.

// se_RevokeInvitationRequest omitted.

// se_RoomSkillParameter omitted.

// se_SearchAddressBooksRequest omitted.

// se_SearchContactsRequest omitted.

// se_SearchDevicesRequest omitted.

// se_SearchNetworkProfilesRequest omitted.

// se_SearchProfilesRequest omitted.

// se_SearchRoomsRequest omitted.

// se_SearchSkillGroupsRequest omitted.

// se_SearchUsersRequest omitted.

/**
 * serializeAws_json1_1SendAnnouncementRequest
 */
const se_SendAnnouncementRequest = (input: SendAnnouncementRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    Content: _json,
    RoomFilters: _json,
    TimeToLiveInSeconds: [],
  });
};

// se_SendInvitationRequest omitted.

// se_ShortSkillIdList omitted.

// se_SipAddress omitted.

// se_SipAddressList omitted.

// se_Sort omitted.

// se_SortList omitted.

// se_Ssml omitted.

// se_SsmlList omitted.

// se_StartDeviceSyncRequest omitted.

// se_StartSmartHomeApplianceDiscoveryRequest omitted.

// se_Tag omitted.

// se_TagKeyList omitted.

// se_TagList omitted.

// se_TagResourceRequest omitted.

// se_Text omitted.

// se_TextList omitted.

// se_TrustAnchorList omitted.

// se_UntagResourceRequest omitted.

// se_UpdateAddressBookRequest omitted.

// se_UpdateBusinessReportScheduleRequest omitted.

// se_UpdateConferenceProviderRequest omitted.

// se_UpdateContactRequest omitted.

// se_UpdateDeviceRequest omitted.

// se_UpdateEndOfMeetingReminder omitted.

// se_UpdateGatewayGroupRequest omitted.

// se_UpdateGatewayRequest omitted.

// se_UpdateInstantBooking omitted.

// se_UpdateMeetingRoomConfiguration omitted.

// se_UpdateNetworkProfileRequest omitted.

// se_UpdateProactiveJoin omitted.

// se_UpdateProfileRequest omitted.

// se_UpdateRequireCheckIn omitted.

// se_UpdateRoomRequest omitted.

// se_UpdateSkillGroupRequest omitted.

// de_AddressBook omitted.

// de_AddressBookData omitted.

// de_AddressBookDataList omitted.

// de_AlreadyExistsException omitted.

// de_ApproveSkillResponse omitted.

// de_AssociateContactWithAddressBookResponse omitted.

// de_AssociateDeviceWithNetworkProfileResponse omitted.

// de_AssociateDeviceWithRoomResponse omitted.

// de_AssociateSkillGroupWithRoomResponse omitted.

// de_AssociateSkillWithSkillGroupResponse omitted.

// de_AssociateSkillWithUsersResponse omitted.

// de_BulletPoints omitted.

/**
 * deserializeAws_json1_1BusinessReport
 */
const de_BusinessReport = (output: any, context: __SerdeContext): BusinessReport => {
  return take(output, {
    DeliveryTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DownloadUrl: __expectString,
    FailureCode: __expectString,
    S3Location: _json,
    Status: __expectString,
  }) as any;
};

// de_BusinessReportContentRange omitted.

// de_BusinessReportRecurrence omitted.

// de_BusinessReportS3Location omitted.

/**
 * deserializeAws_json1_1BusinessReportSchedule
 */
const de_BusinessReportSchedule = (output: any, context: __SerdeContext): BusinessReportSchedule => {
  return take(output, {
    ContentRange: _json,
    Format: __expectString,
    LastBusinessReport: (_: any) => de_BusinessReport(_, context),
    Recurrence: _json,
    S3BucketName: __expectString,
    S3KeyPrefix: __expectString,
    ScheduleArn: __expectString,
    ScheduleName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1BusinessReportScheduleList
 */
const de_BusinessReportScheduleList = (output: any, context: __SerdeContext): BusinessReportSchedule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BusinessReportSchedule(entry, context);
    });
  return retVal;
};

// de_Category omitted.

// de_CategoryList omitted.

// de_ConcurrentModificationException omitted.

// de_ConferencePreference omitted.

// de_ConferenceProvider omitted.

// de_ConferenceProvidersList omitted.

// de_Contact omitted.

// de_ContactData omitted.

// de_ContactDataList omitted.

// de_CreateAddressBookResponse omitted.

// de_CreateBusinessReportScheduleResponse omitted.

// de_CreateConferenceProviderResponse omitted.

// de_CreateContactResponse omitted.

// de_CreateGatewayGroupResponse omitted.

// de_CreateNetworkProfileResponse omitted.

// de_CreateProfileResponse omitted.

// de_CreateRoomResponse omitted.

// de_CreateSkillGroupResponse omitted.

// de_CreateUserResponse omitted.

// de_DeleteAddressBookResponse omitted.

// de_DeleteBusinessReportScheduleResponse omitted.

// de_DeleteConferenceProviderResponse omitted.

// de_DeleteContactResponse omitted.

// de_DeleteDeviceResponse omitted.

// de_DeleteDeviceUsageDataResponse omitted.

// de_DeleteGatewayGroupResponse omitted.

// de_DeleteNetworkProfileResponse omitted.

// de_DeleteProfileResponse omitted.

// de_DeleteRoomResponse omitted.

// de_DeleteRoomSkillParameterResponse omitted.

// de_DeleteSkillAuthorizationResponse omitted.

// de_DeleteSkillGroupResponse omitted.

// de_DeleteUserResponse omitted.

// de_DeveloperInfo omitted.

/**
 * deserializeAws_json1_1Device
 */
const de_Device = (output: any, context: __SerdeContext): Device => {
  return take(output, {
    DeviceArn: __expectString,
    DeviceName: __expectString,
    DeviceSerialNumber: __expectString,
    DeviceStatus: __expectString,
    DeviceStatusInfo: (_: any) => de_DeviceStatusInfo(_, context),
    DeviceType: __expectString,
    MacAddress: __expectString,
    NetworkProfileInfo: (_: any) => de_DeviceNetworkProfileInfo(_, context),
    RoomArn: __expectString,
    SoftwareVersion: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DeviceData
 */
const de_DeviceData = (output: any, context: __SerdeContext): DeviceData => {
  return take(output, {
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DeviceArn: __expectString,
    DeviceName: __expectString,
    DeviceSerialNumber: __expectString,
    DeviceStatus: __expectString,
    DeviceStatusInfo: (_: any) => de_DeviceStatusInfo(_, context),
    DeviceType: __expectString,
    MacAddress: __expectString,
    NetworkProfileArn: __expectString,
    NetworkProfileName: __expectString,
    RoomArn: __expectString,
    RoomName: __expectString,
    SoftwareVersion: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DeviceDataList
 */
const de_DeviceDataList = (output: any, context: __SerdeContext): DeviceData[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DeviceData(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DeviceEvent
 */
const de_DeviceEvent = (output: any, context: __SerdeContext): DeviceEvent => {
  return take(output, {
    Timestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Type: __expectString,
    Value: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DeviceEventList
 */
const de_DeviceEventList = (output: any, context: __SerdeContext): DeviceEvent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DeviceEvent(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DeviceNetworkProfileInfo
 */
const de_DeviceNetworkProfileInfo = (output: any, context: __SerdeContext): DeviceNetworkProfileInfo => {
  return take(output, {
    CertificateArn: __expectString,
    CertificateExpirationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    NetworkProfileArn: __expectString,
  }) as any;
};

// de_DeviceNotRegisteredException omitted.

// de_DeviceStatusDetail omitted.

// de_DeviceStatusDetails omitted.

/**
 * deserializeAws_json1_1DeviceStatusInfo
 */
const de_DeviceStatusInfo = (output: any, context: __SerdeContext): DeviceStatusInfo => {
  return take(output, {
    ConnectionStatus: __expectString,
    ConnectionStatusUpdatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DeviceStatusDetails: _json,
  }) as any;
};

// de_DisassociateContactFromAddressBookResponse omitted.

// de_DisassociateDeviceFromRoomResponse omitted.

// de_DisassociateSkillFromSkillGroupResponse omitted.

// de_DisassociateSkillFromUsersResponse omitted.

// de_DisassociateSkillGroupFromRoomResponse omitted.

// de_EndOfMeetingReminder omitted.

// de_EndOfMeetingReminderMinutesList omitted.

// de_ForgetSmartHomeAppliancesResponse omitted.

// de_Gateway omitted.

// de_GatewayGroup omitted.

// de_GatewayGroupSummaries omitted.

// de_GatewayGroupSummary omitted.

// de_GatewaySummaries omitted.

// de_GatewaySummary omitted.

// de_GenericKeywords omitted.

// de_GetAddressBookResponse omitted.

// de_GetConferencePreferenceResponse omitted.

// de_GetConferenceProviderResponse omitted.

// de_GetContactResponse omitted.

/**
 * deserializeAws_json1_1GetDeviceResponse
 */
const de_GetDeviceResponse = (output: any, context: __SerdeContext): GetDeviceResponse => {
  return take(output, {
    Device: (_: any) => de_Device(_, context),
  }) as any;
};

// de_GetGatewayGroupResponse omitted.

// de_GetGatewayResponse omitted.

// de_GetInvitationConfigurationResponse omitted.

// de_GetNetworkProfileResponse omitted.

// de_GetProfileResponse omitted.

// de_GetRoomResponse omitted.

// de_GetRoomSkillParameterResponse omitted.

// de_GetSkillGroupResponse omitted.

// de_InstantBooking omitted.

// de_InvalidCertificateAuthorityException omitted.

// de_InvalidDeviceException omitted.

// de_InvalidSecretsManagerResourceException omitted.

// de_InvalidServiceLinkedRoleStateException omitted.

// de_InvalidUserStatusException omitted.

// de_IPDialIn omitted.

// de_LimitExceededException omitted.

/**
 * deserializeAws_json1_1ListBusinessReportSchedulesResponse
 */
const de_ListBusinessReportSchedulesResponse = (
  output: any,
  context: __SerdeContext
): ListBusinessReportSchedulesResponse => {
  return take(output, {
    BusinessReportSchedules: (_: any) => de_BusinessReportScheduleList(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_ListConferenceProvidersResponse omitted.

/**
 * deserializeAws_json1_1ListDeviceEventsResponse
 */
const de_ListDeviceEventsResponse = (output: any, context: __SerdeContext): ListDeviceEventsResponse => {
  return take(output, {
    DeviceEvents: (_: any) => de_DeviceEventList(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_ListGatewayGroupsResponse omitted.

// de_ListGatewaysResponse omitted.

// de_ListSkillsResponse omitted.

// de_ListSkillsStoreCategoriesResponse omitted.

// de_ListSkillsStoreSkillsByCategoryResponse omitted.

// de_ListSmartHomeAppliancesResponse omitted.

// de_ListTagsResponse omitted.

// de_MeetingRoomConfiguration omitted.

// de_MeetingSetting omitted.

// de_NameInUseException omitted.

// de_NetworkProfile omitted.

// de_NetworkProfileData omitted.

// de_NetworkProfileDataList omitted.

// de_NewInThisVersionBulletPoints omitted.

// de_NotFoundException omitted.

// de_PhoneNumber omitted.

// de_PhoneNumberList omitted.

// de_ProactiveJoin omitted.

// de_Profile omitted.

// de_ProfileData omitted.

// de_ProfileDataList omitted.

// de_PSTNDialIn omitted.

// de_PutConferencePreferenceResponse omitted.

// de_PutInvitationConfigurationResponse omitted.

// de_PutRoomSkillParameterResponse omitted.

// de_PutSkillAuthorizationResponse omitted.

// de_RegisterAVSDeviceResponse omitted.

// de_RejectSkillResponse omitted.

// de_RequireCheckIn omitted.

// de_ResolveRoomResponse omitted.

// de_ResourceAssociatedException omitted.

// de_ResourceInUseException omitted.

// de_Reviews omitted.

// de_RevokeInvitationResponse omitted.

// de_Room omitted.

// de_RoomData omitted.

// de_RoomDataList omitted.

// de_RoomSkillParameter omitted.

// de_RoomSkillParameters omitted.

// de_SampleUtterances omitted.

// de_SearchAddressBooksResponse omitted.

// de_SearchContactsResponse omitted.

/**
 * deserializeAws_json1_1SearchDevicesResponse
 */
const de_SearchDevicesResponse = (output: any, context: __SerdeContext): SearchDevicesResponse => {
  return take(output, {
    Devices: (_: any) => de_DeviceDataList(_, context),
    NextToken: __expectString,
    TotalCount: __expectInt32,
  }) as any;
};

// de_SearchNetworkProfilesResponse omitted.

// de_SearchProfilesResponse omitted.

// de_SearchRoomsResponse omitted.

// de_SearchSkillGroupsResponse omitted.

// de_SearchUsersResponse omitted.

// de_SendAnnouncementResponse omitted.

// de_SendInvitationResponse omitted.

// de_ShortSkillIdList omitted.

// de_SipAddress omitted.

// de_SipAddressList omitted.

// de_SkillDetails omitted.

// de_SkillGroup omitted.

// de_SkillGroupData omitted.

// de_SkillGroupDataList omitted.

// de_SkillNotLinkedException omitted.

// de_SkillsStoreSkill omitted.

// de_SkillsStoreSkillList omitted.

// de_SkillSummary omitted.

// de_SkillSummaryList omitted.

// de_SkillTypes omitted.

// de_SmartHomeAppliance omitted.

// de_SmartHomeApplianceList omitted.

// de_StartDeviceSyncResponse omitted.

// de_StartSmartHomeApplianceDiscoveryResponse omitted.

// de_Tag omitted.

// de_TagList omitted.

// de_TagResourceResponse omitted.

// de_TrustAnchorList omitted.

// de_UnauthorizedException omitted.

// de_UntagResourceResponse omitted.

// de_UpdateAddressBookResponse omitted.

// de_UpdateBusinessReportScheduleResponse omitted.

// de_UpdateConferenceProviderResponse omitted.

// de_UpdateContactResponse omitted.

// de_UpdateDeviceResponse omitted.

// de_UpdateGatewayGroupResponse omitted.

// de_UpdateGatewayResponse omitted.

// de_UpdateNetworkProfileResponse omitted.

// de_UpdateProfileResponse omitted.

// de_UpdateRoomResponse omitted.

// de_UpdateSkillGroupResponse omitted.

// de_UserData omitted.

// de_UserDataList omitted.

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const throwDefaultError = withBaseException(__BaseException);
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
