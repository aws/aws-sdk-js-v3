// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { AlexaForBusinessClient, AlexaForBusinessClientConfig } from "./AlexaForBusinessClient";
import {
  ApproveSkillCommand,
  ApproveSkillCommandInput,
  ApproveSkillCommandOutput,
} from "./commands/ApproveSkillCommand";
import {
  AssociateContactWithAddressBookCommand,
  AssociateContactWithAddressBookCommandInput,
  AssociateContactWithAddressBookCommandOutput,
} from "./commands/AssociateContactWithAddressBookCommand";
import {
  AssociateDeviceWithNetworkProfileCommand,
  AssociateDeviceWithNetworkProfileCommandInput,
  AssociateDeviceWithNetworkProfileCommandOutput,
} from "./commands/AssociateDeviceWithNetworkProfileCommand";
import {
  AssociateDeviceWithRoomCommand,
  AssociateDeviceWithRoomCommandInput,
  AssociateDeviceWithRoomCommandOutput,
} from "./commands/AssociateDeviceWithRoomCommand";
import {
  AssociateSkillGroupWithRoomCommand,
  AssociateSkillGroupWithRoomCommandInput,
  AssociateSkillGroupWithRoomCommandOutput,
} from "./commands/AssociateSkillGroupWithRoomCommand";
import {
  AssociateSkillWithSkillGroupCommand,
  AssociateSkillWithSkillGroupCommandInput,
  AssociateSkillWithSkillGroupCommandOutput,
} from "./commands/AssociateSkillWithSkillGroupCommand";
import {
  AssociateSkillWithUsersCommand,
  AssociateSkillWithUsersCommandInput,
  AssociateSkillWithUsersCommandOutput,
} from "./commands/AssociateSkillWithUsersCommand";
import {
  CreateAddressBookCommand,
  CreateAddressBookCommandInput,
  CreateAddressBookCommandOutput,
} from "./commands/CreateAddressBookCommand";
import {
  CreateBusinessReportScheduleCommand,
  CreateBusinessReportScheduleCommandInput,
  CreateBusinessReportScheduleCommandOutput,
} from "./commands/CreateBusinessReportScheduleCommand";
import {
  CreateConferenceProviderCommand,
  CreateConferenceProviderCommandInput,
  CreateConferenceProviderCommandOutput,
} from "./commands/CreateConferenceProviderCommand";
import {
  CreateContactCommand,
  CreateContactCommandInput,
  CreateContactCommandOutput,
} from "./commands/CreateContactCommand";
import {
  CreateGatewayGroupCommand,
  CreateGatewayGroupCommandInput,
  CreateGatewayGroupCommandOutput,
} from "./commands/CreateGatewayGroupCommand";
import {
  CreateNetworkProfileCommand,
  CreateNetworkProfileCommandInput,
  CreateNetworkProfileCommandOutput,
} from "./commands/CreateNetworkProfileCommand";
import {
  CreateProfileCommand,
  CreateProfileCommandInput,
  CreateProfileCommandOutput,
} from "./commands/CreateProfileCommand";
import { CreateRoomCommand, CreateRoomCommandInput, CreateRoomCommandOutput } from "./commands/CreateRoomCommand";
import {
  CreateSkillGroupCommand,
  CreateSkillGroupCommandInput,
  CreateSkillGroupCommandOutput,
} from "./commands/CreateSkillGroupCommand";
import { CreateUserCommand, CreateUserCommandInput, CreateUserCommandOutput } from "./commands/CreateUserCommand";
import {
  DeleteAddressBookCommand,
  DeleteAddressBookCommandInput,
  DeleteAddressBookCommandOutput,
} from "./commands/DeleteAddressBookCommand";
import {
  DeleteBusinessReportScheduleCommand,
  DeleteBusinessReportScheduleCommandInput,
  DeleteBusinessReportScheduleCommandOutput,
} from "./commands/DeleteBusinessReportScheduleCommand";
import {
  DeleteConferenceProviderCommand,
  DeleteConferenceProviderCommandInput,
  DeleteConferenceProviderCommandOutput,
} from "./commands/DeleteConferenceProviderCommand";
import {
  DeleteContactCommand,
  DeleteContactCommandInput,
  DeleteContactCommandOutput,
} from "./commands/DeleteContactCommand";
import {
  DeleteDeviceCommand,
  DeleteDeviceCommandInput,
  DeleteDeviceCommandOutput,
} from "./commands/DeleteDeviceCommand";
import {
  DeleteDeviceUsageDataCommand,
  DeleteDeviceUsageDataCommandInput,
  DeleteDeviceUsageDataCommandOutput,
} from "./commands/DeleteDeviceUsageDataCommand";
import {
  DeleteGatewayGroupCommand,
  DeleteGatewayGroupCommandInput,
  DeleteGatewayGroupCommandOutput,
} from "./commands/DeleteGatewayGroupCommand";
import {
  DeleteNetworkProfileCommand,
  DeleteNetworkProfileCommandInput,
  DeleteNetworkProfileCommandOutput,
} from "./commands/DeleteNetworkProfileCommand";
import {
  DeleteProfileCommand,
  DeleteProfileCommandInput,
  DeleteProfileCommandOutput,
} from "./commands/DeleteProfileCommand";
import { DeleteRoomCommand, DeleteRoomCommandInput, DeleteRoomCommandOutput } from "./commands/DeleteRoomCommand";
import {
  DeleteRoomSkillParameterCommand,
  DeleteRoomSkillParameterCommandInput,
  DeleteRoomSkillParameterCommandOutput,
} from "./commands/DeleteRoomSkillParameterCommand";
import {
  DeleteSkillAuthorizationCommand,
  DeleteSkillAuthorizationCommandInput,
  DeleteSkillAuthorizationCommandOutput,
} from "./commands/DeleteSkillAuthorizationCommand";
import {
  DeleteSkillGroupCommand,
  DeleteSkillGroupCommandInput,
  DeleteSkillGroupCommandOutput,
} from "./commands/DeleteSkillGroupCommand";
import { DeleteUserCommand, DeleteUserCommandInput, DeleteUserCommandOutput } from "./commands/DeleteUserCommand";
import {
  DisassociateContactFromAddressBookCommand,
  DisassociateContactFromAddressBookCommandInput,
  DisassociateContactFromAddressBookCommandOutput,
} from "./commands/DisassociateContactFromAddressBookCommand";
import {
  DisassociateDeviceFromRoomCommand,
  DisassociateDeviceFromRoomCommandInput,
  DisassociateDeviceFromRoomCommandOutput,
} from "./commands/DisassociateDeviceFromRoomCommand";
import {
  DisassociateSkillFromSkillGroupCommand,
  DisassociateSkillFromSkillGroupCommandInput,
  DisassociateSkillFromSkillGroupCommandOutput,
} from "./commands/DisassociateSkillFromSkillGroupCommand";
import {
  DisassociateSkillFromUsersCommand,
  DisassociateSkillFromUsersCommandInput,
  DisassociateSkillFromUsersCommandOutput,
} from "./commands/DisassociateSkillFromUsersCommand";
import {
  DisassociateSkillGroupFromRoomCommand,
  DisassociateSkillGroupFromRoomCommandInput,
  DisassociateSkillGroupFromRoomCommandOutput,
} from "./commands/DisassociateSkillGroupFromRoomCommand";
import {
  ForgetSmartHomeAppliancesCommand,
  ForgetSmartHomeAppliancesCommandInput,
  ForgetSmartHomeAppliancesCommandOutput,
} from "./commands/ForgetSmartHomeAppliancesCommand";
import {
  GetAddressBookCommand,
  GetAddressBookCommandInput,
  GetAddressBookCommandOutput,
} from "./commands/GetAddressBookCommand";
import {
  GetConferencePreferenceCommand,
  GetConferencePreferenceCommandInput,
  GetConferencePreferenceCommandOutput,
} from "./commands/GetConferencePreferenceCommand";
import {
  GetConferenceProviderCommand,
  GetConferenceProviderCommandInput,
  GetConferenceProviderCommandOutput,
} from "./commands/GetConferenceProviderCommand";
import { GetContactCommand, GetContactCommandInput, GetContactCommandOutput } from "./commands/GetContactCommand";
import { GetDeviceCommand, GetDeviceCommandInput, GetDeviceCommandOutput } from "./commands/GetDeviceCommand";
import { GetGatewayCommand, GetGatewayCommandInput, GetGatewayCommandOutput } from "./commands/GetGatewayCommand";
import {
  GetGatewayGroupCommand,
  GetGatewayGroupCommandInput,
  GetGatewayGroupCommandOutput,
} from "./commands/GetGatewayGroupCommand";
import {
  GetInvitationConfigurationCommand,
  GetInvitationConfigurationCommandInput,
  GetInvitationConfigurationCommandOutput,
} from "./commands/GetInvitationConfigurationCommand";
import {
  GetNetworkProfileCommand,
  GetNetworkProfileCommandInput,
  GetNetworkProfileCommandOutput,
} from "./commands/GetNetworkProfileCommand";
import { GetProfileCommand, GetProfileCommandInput, GetProfileCommandOutput } from "./commands/GetProfileCommand";
import { GetRoomCommand, GetRoomCommandInput, GetRoomCommandOutput } from "./commands/GetRoomCommand";
import {
  GetRoomSkillParameterCommand,
  GetRoomSkillParameterCommandInput,
  GetRoomSkillParameterCommandOutput,
} from "./commands/GetRoomSkillParameterCommand";
import {
  GetSkillGroupCommand,
  GetSkillGroupCommandInput,
  GetSkillGroupCommandOutput,
} from "./commands/GetSkillGroupCommand";
import {
  ListBusinessReportSchedulesCommand,
  ListBusinessReportSchedulesCommandInput,
  ListBusinessReportSchedulesCommandOutput,
} from "./commands/ListBusinessReportSchedulesCommand";
import {
  ListConferenceProvidersCommand,
  ListConferenceProvidersCommandInput,
  ListConferenceProvidersCommandOutput,
} from "./commands/ListConferenceProvidersCommand";
import {
  ListDeviceEventsCommand,
  ListDeviceEventsCommandInput,
  ListDeviceEventsCommandOutput,
} from "./commands/ListDeviceEventsCommand";
import {
  ListGatewayGroupsCommand,
  ListGatewayGroupsCommandInput,
  ListGatewayGroupsCommandOutput,
} from "./commands/ListGatewayGroupsCommand";
import {
  ListGatewaysCommand,
  ListGatewaysCommandInput,
  ListGatewaysCommandOutput,
} from "./commands/ListGatewaysCommand";
import { ListSkillsCommand, ListSkillsCommandInput, ListSkillsCommandOutput } from "./commands/ListSkillsCommand";
import {
  ListSkillsStoreCategoriesCommand,
  ListSkillsStoreCategoriesCommandInput,
  ListSkillsStoreCategoriesCommandOutput,
} from "./commands/ListSkillsStoreCategoriesCommand";
import {
  ListSkillsStoreSkillsByCategoryCommand,
  ListSkillsStoreSkillsByCategoryCommandInput,
  ListSkillsStoreSkillsByCategoryCommandOutput,
} from "./commands/ListSkillsStoreSkillsByCategoryCommand";
import {
  ListSmartHomeAppliancesCommand,
  ListSmartHomeAppliancesCommandInput,
  ListSmartHomeAppliancesCommandOutput,
} from "./commands/ListSmartHomeAppliancesCommand";
import { ListTagsCommand, ListTagsCommandInput, ListTagsCommandOutput } from "./commands/ListTagsCommand";
import {
  PutConferencePreferenceCommand,
  PutConferencePreferenceCommandInput,
  PutConferencePreferenceCommandOutput,
} from "./commands/PutConferencePreferenceCommand";
import {
  PutInvitationConfigurationCommand,
  PutInvitationConfigurationCommandInput,
  PutInvitationConfigurationCommandOutput,
} from "./commands/PutInvitationConfigurationCommand";
import {
  PutRoomSkillParameterCommand,
  PutRoomSkillParameterCommandInput,
  PutRoomSkillParameterCommandOutput,
} from "./commands/PutRoomSkillParameterCommand";
import {
  PutSkillAuthorizationCommand,
  PutSkillAuthorizationCommandInput,
  PutSkillAuthorizationCommandOutput,
} from "./commands/PutSkillAuthorizationCommand";
import {
  RegisterAVSDeviceCommand,
  RegisterAVSDeviceCommandInput,
  RegisterAVSDeviceCommandOutput,
} from "./commands/RegisterAVSDeviceCommand";
import { RejectSkillCommand, RejectSkillCommandInput, RejectSkillCommandOutput } from "./commands/RejectSkillCommand";
import { ResolveRoomCommand, ResolveRoomCommandInput, ResolveRoomCommandOutput } from "./commands/ResolveRoomCommand";
import {
  RevokeInvitationCommand,
  RevokeInvitationCommandInput,
  RevokeInvitationCommandOutput,
} from "./commands/RevokeInvitationCommand";
import {
  SearchAddressBooksCommand,
  SearchAddressBooksCommandInput,
  SearchAddressBooksCommandOutput,
} from "./commands/SearchAddressBooksCommand";
import {
  SearchContactsCommand,
  SearchContactsCommandInput,
  SearchContactsCommandOutput,
} from "./commands/SearchContactsCommand";
import {
  SearchDevicesCommand,
  SearchDevicesCommandInput,
  SearchDevicesCommandOutput,
} from "./commands/SearchDevicesCommand";
import {
  SearchNetworkProfilesCommand,
  SearchNetworkProfilesCommandInput,
  SearchNetworkProfilesCommandOutput,
} from "./commands/SearchNetworkProfilesCommand";
import {
  SearchProfilesCommand,
  SearchProfilesCommandInput,
  SearchProfilesCommandOutput,
} from "./commands/SearchProfilesCommand";
import { SearchRoomsCommand, SearchRoomsCommandInput, SearchRoomsCommandOutput } from "./commands/SearchRoomsCommand";
import {
  SearchSkillGroupsCommand,
  SearchSkillGroupsCommandInput,
  SearchSkillGroupsCommandOutput,
} from "./commands/SearchSkillGroupsCommand";
import { SearchUsersCommand, SearchUsersCommandInput, SearchUsersCommandOutput } from "./commands/SearchUsersCommand";
import {
  SendAnnouncementCommand,
  SendAnnouncementCommandInput,
  SendAnnouncementCommandOutput,
} from "./commands/SendAnnouncementCommand";
import {
  SendInvitationCommand,
  SendInvitationCommandInput,
  SendInvitationCommandOutput,
} from "./commands/SendInvitationCommand";
import {
  StartDeviceSyncCommand,
  StartDeviceSyncCommandInput,
  StartDeviceSyncCommandOutput,
} from "./commands/StartDeviceSyncCommand";
import {
  StartSmartHomeApplianceDiscoveryCommand,
  StartSmartHomeApplianceDiscoveryCommandInput,
  StartSmartHomeApplianceDiscoveryCommandOutput,
} from "./commands/StartSmartHomeApplianceDiscoveryCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateAddressBookCommand,
  UpdateAddressBookCommandInput,
  UpdateAddressBookCommandOutput,
} from "./commands/UpdateAddressBookCommand";
import {
  UpdateBusinessReportScheduleCommand,
  UpdateBusinessReportScheduleCommandInput,
  UpdateBusinessReportScheduleCommandOutput,
} from "./commands/UpdateBusinessReportScheduleCommand";
import {
  UpdateConferenceProviderCommand,
  UpdateConferenceProviderCommandInput,
  UpdateConferenceProviderCommandOutput,
} from "./commands/UpdateConferenceProviderCommand";
import {
  UpdateContactCommand,
  UpdateContactCommandInput,
  UpdateContactCommandOutput,
} from "./commands/UpdateContactCommand";
import {
  UpdateDeviceCommand,
  UpdateDeviceCommandInput,
  UpdateDeviceCommandOutput,
} from "./commands/UpdateDeviceCommand";
import {
  UpdateGatewayCommand,
  UpdateGatewayCommandInput,
  UpdateGatewayCommandOutput,
} from "./commands/UpdateGatewayCommand";
import {
  UpdateGatewayGroupCommand,
  UpdateGatewayGroupCommandInput,
  UpdateGatewayGroupCommandOutput,
} from "./commands/UpdateGatewayGroupCommand";
import {
  UpdateNetworkProfileCommand,
  UpdateNetworkProfileCommandInput,
  UpdateNetworkProfileCommandOutput,
} from "./commands/UpdateNetworkProfileCommand";
import {
  UpdateProfileCommand,
  UpdateProfileCommandInput,
  UpdateProfileCommandOutput,
} from "./commands/UpdateProfileCommand";
import { UpdateRoomCommand, UpdateRoomCommandInput, UpdateRoomCommandOutput } from "./commands/UpdateRoomCommand";
import {
  UpdateSkillGroupCommand,
  UpdateSkillGroupCommandInput,
  UpdateSkillGroupCommandOutput,
} from "./commands/UpdateSkillGroupCommand";

const commands = {
  ApproveSkillCommand,
  AssociateContactWithAddressBookCommand,
  AssociateDeviceWithNetworkProfileCommand,
  AssociateDeviceWithRoomCommand,
  AssociateSkillGroupWithRoomCommand,
  AssociateSkillWithSkillGroupCommand,
  AssociateSkillWithUsersCommand,
  CreateAddressBookCommand,
  CreateBusinessReportScheduleCommand,
  CreateConferenceProviderCommand,
  CreateContactCommand,
  CreateGatewayGroupCommand,
  CreateNetworkProfileCommand,
  CreateProfileCommand,
  CreateRoomCommand,
  CreateSkillGroupCommand,
  CreateUserCommand,
  DeleteAddressBookCommand,
  DeleteBusinessReportScheduleCommand,
  DeleteConferenceProviderCommand,
  DeleteContactCommand,
  DeleteDeviceCommand,
  DeleteDeviceUsageDataCommand,
  DeleteGatewayGroupCommand,
  DeleteNetworkProfileCommand,
  DeleteProfileCommand,
  DeleteRoomCommand,
  DeleteRoomSkillParameterCommand,
  DeleteSkillAuthorizationCommand,
  DeleteSkillGroupCommand,
  DeleteUserCommand,
  DisassociateContactFromAddressBookCommand,
  DisassociateDeviceFromRoomCommand,
  DisassociateSkillFromSkillGroupCommand,
  DisassociateSkillFromUsersCommand,
  DisassociateSkillGroupFromRoomCommand,
  ForgetSmartHomeAppliancesCommand,
  GetAddressBookCommand,
  GetConferencePreferenceCommand,
  GetConferenceProviderCommand,
  GetContactCommand,
  GetDeviceCommand,
  GetGatewayCommand,
  GetGatewayGroupCommand,
  GetInvitationConfigurationCommand,
  GetNetworkProfileCommand,
  GetProfileCommand,
  GetRoomCommand,
  GetRoomSkillParameterCommand,
  GetSkillGroupCommand,
  ListBusinessReportSchedulesCommand,
  ListConferenceProvidersCommand,
  ListDeviceEventsCommand,
  ListGatewayGroupsCommand,
  ListGatewaysCommand,
  ListSkillsCommand,
  ListSkillsStoreCategoriesCommand,
  ListSkillsStoreSkillsByCategoryCommand,
  ListSmartHomeAppliancesCommand,
  ListTagsCommand,
  PutConferencePreferenceCommand,
  PutInvitationConfigurationCommand,
  PutRoomSkillParameterCommand,
  PutSkillAuthorizationCommand,
  RegisterAVSDeviceCommand,
  RejectSkillCommand,
  ResolveRoomCommand,
  RevokeInvitationCommand,
  SearchAddressBooksCommand,
  SearchContactsCommand,
  SearchDevicesCommand,
  SearchNetworkProfilesCommand,
  SearchProfilesCommand,
  SearchRoomsCommand,
  SearchSkillGroupsCommand,
  SearchUsersCommand,
  SendAnnouncementCommand,
  SendInvitationCommand,
  StartDeviceSyncCommand,
  StartSmartHomeApplianceDiscoveryCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAddressBookCommand,
  UpdateBusinessReportScheduleCommand,
  UpdateConferenceProviderCommand,
  UpdateContactCommand,
  UpdateDeviceCommand,
  UpdateGatewayCommand,
  UpdateGatewayGroupCommand,
  UpdateNetworkProfileCommand,
  UpdateProfileCommand,
  UpdateRoomCommand,
  UpdateSkillGroupCommand,
};

export interface AlexaForBusiness {
  /**
   * @see {@link ApproveSkillCommand}
   */
  approveSkill(args: ApproveSkillCommandInput, options?: __HttpHandlerOptions): Promise<ApproveSkillCommandOutput>;
  approveSkill(args: ApproveSkillCommandInput, cb: (err: any, data?: ApproveSkillCommandOutput) => void): void;
  approveSkill(
    args: ApproveSkillCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ApproveSkillCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateContactWithAddressBookCommand}
   */
  associateContactWithAddressBook(
    args: AssociateContactWithAddressBookCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateContactWithAddressBookCommandOutput>;
  associateContactWithAddressBook(
    args: AssociateContactWithAddressBookCommandInput,
    cb: (err: any, data?: AssociateContactWithAddressBookCommandOutput) => void
  ): void;
  associateContactWithAddressBook(
    args: AssociateContactWithAddressBookCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateContactWithAddressBookCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateDeviceWithNetworkProfileCommand}
   */
  associateDeviceWithNetworkProfile(
    args: AssociateDeviceWithNetworkProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateDeviceWithNetworkProfileCommandOutput>;
  associateDeviceWithNetworkProfile(
    args: AssociateDeviceWithNetworkProfileCommandInput,
    cb: (err: any, data?: AssociateDeviceWithNetworkProfileCommandOutput) => void
  ): void;
  associateDeviceWithNetworkProfile(
    args: AssociateDeviceWithNetworkProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateDeviceWithNetworkProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateDeviceWithRoomCommand}
   */
  associateDeviceWithRoom(
    args: AssociateDeviceWithRoomCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateDeviceWithRoomCommandOutput>;
  associateDeviceWithRoom(
    args: AssociateDeviceWithRoomCommandInput,
    cb: (err: any, data?: AssociateDeviceWithRoomCommandOutput) => void
  ): void;
  associateDeviceWithRoom(
    args: AssociateDeviceWithRoomCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateDeviceWithRoomCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateSkillGroupWithRoomCommand}
   */
  associateSkillGroupWithRoom(
    args: AssociateSkillGroupWithRoomCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateSkillGroupWithRoomCommandOutput>;
  associateSkillGroupWithRoom(
    args: AssociateSkillGroupWithRoomCommandInput,
    cb: (err: any, data?: AssociateSkillGroupWithRoomCommandOutput) => void
  ): void;
  associateSkillGroupWithRoom(
    args: AssociateSkillGroupWithRoomCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateSkillGroupWithRoomCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateSkillWithSkillGroupCommand}
   */
  associateSkillWithSkillGroup(
    args: AssociateSkillWithSkillGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateSkillWithSkillGroupCommandOutput>;
  associateSkillWithSkillGroup(
    args: AssociateSkillWithSkillGroupCommandInput,
    cb: (err: any, data?: AssociateSkillWithSkillGroupCommandOutput) => void
  ): void;
  associateSkillWithSkillGroup(
    args: AssociateSkillWithSkillGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateSkillWithSkillGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateSkillWithUsersCommand}
   */
  associateSkillWithUsers(
    args: AssociateSkillWithUsersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateSkillWithUsersCommandOutput>;
  associateSkillWithUsers(
    args: AssociateSkillWithUsersCommandInput,
    cb: (err: any, data?: AssociateSkillWithUsersCommandOutput) => void
  ): void;
  associateSkillWithUsers(
    args: AssociateSkillWithUsersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateSkillWithUsersCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAddressBookCommand}
   */
  createAddressBook(
    args: CreateAddressBookCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAddressBookCommandOutput>;
  createAddressBook(
    args: CreateAddressBookCommandInput,
    cb: (err: any, data?: CreateAddressBookCommandOutput) => void
  ): void;
  createAddressBook(
    args: CreateAddressBookCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAddressBookCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateBusinessReportScheduleCommand}
   */
  createBusinessReportSchedule(
    args: CreateBusinessReportScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBusinessReportScheduleCommandOutput>;
  createBusinessReportSchedule(
    args: CreateBusinessReportScheduleCommandInput,
    cb: (err: any, data?: CreateBusinessReportScheduleCommandOutput) => void
  ): void;
  createBusinessReportSchedule(
    args: CreateBusinessReportScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBusinessReportScheduleCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateConferenceProviderCommand}
   */
  createConferenceProvider(
    args: CreateConferenceProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConferenceProviderCommandOutput>;
  createConferenceProvider(
    args: CreateConferenceProviderCommandInput,
    cb: (err: any, data?: CreateConferenceProviderCommandOutput) => void
  ): void;
  createConferenceProvider(
    args: CreateConferenceProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConferenceProviderCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateContactCommand}
   */
  createContact(args: CreateContactCommandInput, options?: __HttpHandlerOptions): Promise<CreateContactCommandOutput>;
  createContact(args: CreateContactCommandInput, cb: (err: any, data?: CreateContactCommandOutput) => void): void;
  createContact(
    args: CreateContactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateContactCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateGatewayGroupCommand}
   */
  createGatewayGroup(
    args: CreateGatewayGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateGatewayGroupCommandOutput>;
  createGatewayGroup(
    args: CreateGatewayGroupCommandInput,
    cb: (err: any, data?: CreateGatewayGroupCommandOutput) => void
  ): void;
  createGatewayGroup(
    args: CreateGatewayGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGatewayGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateNetworkProfileCommand}
   */
  createNetworkProfile(
    args: CreateNetworkProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateNetworkProfileCommandOutput>;
  createNetworkProfile(
    args: CreateNetworkProfileCommandInput,
    cb: (err: any, data?: CreateNetworkProfileCommandOutput) => void
  ): void;
  createNetworkProfile(
    args: CreateNetworkProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateNetworkProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateProfileCommand}
   */
  createProfile(args: CreateProfileCommandInput, options?: __HttpHandlerOptions): Promise<CreateProfileCommandOutput>;
  createProfile(args: CreateProfileCommandInput, cb: (err: any, data?: CreateProfileCommandOutput) => void): void;
  createProfile(
    args: CreateProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRoomCommand}
   */
  createRoom(args: CreateRoomCommandInput, options?: __HttpHandlerOptions): Promise<CreateRoomCommandOutput>;
  createRoom(args: CreateRoomCommandInput, cb: (err: any, data?: CreateRoomCommandOutput) => void): void;
  createRoom(
    args: CreateRoomCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRoomCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSkillGroupCommand}
   */
  createSkillGroup(
    args: CreateSkillGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSkillGroupCommandOutput>;
  createSkillGroup(
    args: CreateSkillGroupCommandInput,
    cb: (err: any, data?: CreateSkillGroupCommandOutput) => void
  ): void;
  createSkillGroup(
    args: CreateSkillGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSkillGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateUserCommand}
   */
  createUser(args: CreateUserCommandInput, options?: __HttpHandlerOptions): Promise<CreateUserCommandOutput>;
  createUser(args: CreateUserCommandInput, cb: (err: any, data?: CreateUserCommandOutput) => void): void;
  createUser(
    args: CreateUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUserCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAddressBookCommand}
   */
  deleteAddressBook(
    args: DeleteAddressBookCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAddressBookCommandOutput>;
  deleteAddressBook(
    args: DeleteAddressBookCommandInput,
    cb: (err: any, data?: DeleteAddressBookCommandOutput) => void
  ): void;
  deleteAddressBook(
    args: DeleteAddressBookCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAddressBookCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBusinessReportScheduleCommand}
   */
  deleteBusinessReportSchedule(
    args: DeleteBusinessReportScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBusinessReportScheduleCommandOutput>;
  deleteBusinessReportSchedule(
    args: DeleteBusinessReportScheduleCommandInput,
    cb: (err: any, data?: DeleteBusinessReportScheduleCommandOutput) => void
  ): void;
  deleteBusinessReportSchedule(
    args: DeleteBusinessReportScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBusinessReportScheduleCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteConferenceProviderCommand}
   */
  deleteConferenceProvider(
    args: DeleteConferenceProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConferenceProviderCommandOutput>;
  deleteConferenceProvider(
    args: DeleteConferenceProviderCommandInput,
    cb: (err: any, data?: DeleteConferenceProviderCommandOutput) => void
  ): void;
  deleteConferenceProvider(
    args: DeleteConferenceProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConferenceProviderCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteContactCommand}
   */
  deleteContact(args: DeleteContactCommandInput, options?: __HttpHandlerOptions): Promise<DeleteContactCommandOutput>;
  deleteContact(args: DeleteContactCommandInput, cb: (err: any, data?: DeleteContactCommandOutput) => void): void;
  deleteContact(
    args: DeleteContactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteContactCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDeviceCommand}
   */
  deleteDevice(args: DeleteDeviceCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDeviceCommandOutput>;
  deleteDevice(args: DeleteDeviceCommandInput, cb: (err: any, data?: DeleteDeviceCommandOutput) => void): void;
  deleteDevice(
    args: DeleteDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDeviceUsageDataCommand}
   */
  deleteDeviceUsageData(
    args: DeleteDeviceUsageDataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDeviceUsageDataCommandOutput>;
  deleteDeviceUsageData(
    args: DeleteDeviceUsageDataCommandInput,
    cb: (err: any, data?: DeleteDeviceUsageDataCommandOutput) => void
  ): void;
  deleteDeviceUsageData(
    args: DeleteDeviceUsageDataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDeviceUsageDataCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteGatewayGroupCommand}
   */
  deleteGatewayGroup(
    args: DeleteGatewayGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteGatewayGroupCommandOutput>;
  deleteGatewayGroup(
    args: DeleteGatewayGroupCommandInput,
    cb: (err: any, data?: DeleteGatewayGroupCommandOutput) => void
  ): void;
  deleteGatewayGroup(
    args: DeleteGatewayGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGatewayGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteNetworkProfileCommand}
   */
  deleteNetworkProfile(
    args: DeleteNetworkProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteNetworkProfileCommandOutput>;
  deleteNetworkProfile(
    args: DeleteNetworkProfileCommandInput,
    cb: (err: any, data?: DeleteNetworkProfileCommandOutput) => void
  ): void;
  deleteNetworkProfile(
    args: DeleteNetworkProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteNetworkProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProfileCommand}
   */
  deleteProfile(args: DeleteProfileCommandInput, options?: __HttpHandlerOptions): Promise<DeleteProfileCommandOutput>;
  deleteProfile(args: DeleteProfileCommandInput, cb: (err: any, data?: DeleteProfileCommandOutput) => void): void;
  deleteProfile(
    args: DeleteProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRoomCommand}
   */
  deleteRoom(args: DeleteRoomCommandInput, options?: __HttpHandlerOptions): Promise<DeleteRoomCommandOutput>;
  deleteRoom(args: DeleteRoomCommandInput, cb: (err: any, data?: DeleteRoomCommandOutput) => void): void;
  deleteRoom(
    args: DeleteRoomCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRoomCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRoomSkillParameterCommand}
   */
  deleteRoomSkillParameter(
    args: DeleteRoomSkillParameterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRoomSkillParameterCommandOutput>;
  deleteRoomSkillParameter(
    args: DeleteRoomSkillParameterCommandInput,
    cb: (err: any, data?: DeleteRoomSkillParameterCommandOutput) => void
  ): void;
  deleteRoomSkillParameter(
    args: DeleteRoomSkillParameterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRoomSkillParameterCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSkillAuthorizationCommand}
   */
  deleteSkillAuthorization(
    args: DeleteSkillAuthorizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSkillAuthorizationCommandOutput>;
  deleteSkillAuthorization(
    args: DeleteSkillAuthorizationCommandInput,
    cb: (err: any, data?: DeleteSkillAuthorizationCommandOutput) => void
  ): void;
  deleteSkillAuthorization(
    args: DeleteSkillAuthorizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSkillAuthorizationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSkillGroupCommand}
   */
  deleteSkillGroup(
    args: DeleteSkillGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSkillGroupCommandOutput>;
  deleteSkillGroup(
    args: DeleteSkillGroupCommandInput,
    cb: (err: any, data?: DeleteSkillGroupCommandOutput) => void
  ): void;
  deleteSkillGroup(
    args: DeleteSkillGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSkillGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteUserCommand}
   */
  deleteUser(args: DeleteUserCommandInput, options?: __HttpHandlerOptions): Promise<DeleteUserCommandOutput>;
  deleteUser(args: DeleteUserCommandInput, cb: (err: any, data?: DeleteUserCommandOutput) => void): void;
  deleteUser(
    args: DeleteUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUserCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateContactFromAddressBookCommand}
   */
  disassociateContactFromAddressBook(
    args: DisassociateContactFromAddressBookCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateContactFromAddressBookCommandOutput>;
  disassociateContactFromAddressBook(
    args: DisassociateContactFromAddressBookCommandInput,
    cb: (err: any, data?: DisassociateContactFromAddressBookCommandOutput) => void
  ): void;
  disassociateContactFromAddressBook(
    args: DisassociateContactFromAddressBookCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateContactFromAddressBookCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateDeviceFromRoomCommand}
   */
  disassociateDeviceFromRoom(
    args: DisassociateDeviceFromRoomCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateDeviceFromRoomCommandOutput>;
  disassociateDeviceFromRoom(
    args: DisassociateDeviceFromRoomCommandInput,
    cb: (err: any, data?: DisassociateDeviceFromRoomCommandOutput) => void
  ): void;
  disassociateDeviceFromRoom(
    args: DisassociateDeviceFromRoomCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateDeviceFromRoomCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateSkillFromSkillGroupCommand}
   */
  disassociateSkillFromSkillGroup(
    args: DisassociateSkillFromSkillGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateSkillFromSkillGroupCommandOutput>;
  disassociateSkillFromSkillGroup(
    args: DisassociateSkillFromSkillGroupCommandInput,
    cb: (err: any, data?: DisassociateSkillFromSkillGroupCommandOutput) => void
  ): void;
  disassociateSkillFromSkillGroup(
    args: DisassociateSkillFromSkillGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateSkillFromSkillGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateSkillFromUsersCommand}
   */
  disassociateSkillFromUsers(
    args: DisassociateSkillFromUsersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateSkillFromUsersCommandOutput>;
  disassociateSkillFromUsers(
    args: DisassociateSkillFromUsersCommandInput,
    cb: (err: any, data?: DisassociateSkillFromUsersCommandOutput) => void
  ): void;
  disassociateSkillFromUsers(
    args: DisassociateSkillFromUsersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateSkillFromUsersCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateSkillGroupFromRoomCommand}
   */
  disassociateSkillGroupFromRoom(
    args: DisassociateSkillGroupFromRoomCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateSkillGroupFromRoomCommandOutput>;
  disassociateSkillGroupFromRoom(
    args: DisassociateSkillGroupFromRoomCommandInput,
    cb: (err: any, data?: DisassociateSkillGroupFromRoomCommandOutput) => void
  ): void;
  disassociateSkillGroupFromRoom(
    args: DisassociateSkillGroupFromRoomCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateSkillGroupFromRoomCommandOutput) => void
  ): void;

  /**
   * @see {@link ForgetSmartHomeAppliancesCommand}
   */
  forgetSmartHomeAppliances(
    args: ForgetSmartHomeAppliancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ForgetSmartHomeAppliancesCommandOutput>;
  forgetSmartHomeAppliances(
    args: ForgetSmartHomeAppliancesCommandInput,
    cb: (err: any, data?: ForgetSmartHomeAppliancesCommandOutput) => void
  ): void;
  forgetSmartHomeAppliances(
    args: ForgetSmartHomeAppliancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ForgetSmartHomeAppliancesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAddressBookCommand}
   */
  getAddressBook(
    args: GetAddressBookCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAddressBookCommandOutput>;
  getAddressBook(args: GetAddressBookCommandInput, cb: (err: any, data?: GetAddressBookCommandOutput) => void): void;
  getAddressBook(
    args: GetAddressBookCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAddressBookCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConferencePreferenceCommand}
   */
  getConferencePreference(
    args: GetConferencePreferenceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConferencePreferenceCommandOutput>;
  getConferencePreference(
    args: GetConferencePreferenceCommandInput,
    cb: (err: any, data?: GetConferencePreferenceCommandOutput) => void
  ): void;
  getConferencePreference(
    args: GetConferencePreferenceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConferencePreferenceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConferenceProviderCommand}
   */
  getConferenceProvider(
    args: GetConferenceProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConferenceProviderCommandOutput>;
  getConferenceProvider(
    args: GetConferenceProviderCommandInput,
    cb: (err: any, data?: GetConferenceProviderCommandOutput) => void
  ): void;
  getConferenceProvider(
    args: GetConferenceProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConferenceProviderCommandOutput) => void
  ): void;

  /**
   * @see {@link GetContactCommand}
   */
  getContact(args: GetContactCommandInput, options?: __HttpHandlerOptions): Promise<GetContactCommandOutput>;
  getContact(args: GetContactCommandInput, cb: (err: any, data?: GetContactCommandOutput) => void): void;
  getContact(
    args: GetContactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetContactCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDeviceCommand}
   */
  getDevice(args: GetDeviceCommandInput, options?: __HttpHandlerOptions): Promise<GetDeviceCommandOutput>;
  getDevice(args: GetDeviceCommandInput, cb: (err: any, data?: GetDeviceCommandOutput) => void): void;
  getDevice(
    args: GetDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetGatewayCommand}
   */
  getGateway(args: GetGatewayCommandInput, options?: __HttpHandlerOptions): Promise<GetGatewayCommandOutput>;
  getGateway(args: GetGatewayCommandInput, cb: (err: any, data?: GetGatewayCommandOutput) => void): void;
  getGateway(
    args: GetGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link GetGatewayGroupCommand}
   */
  getGatewayGroup(
    args: GetGatewayGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetGatewayGroupCommandOutput>;
  getGatewayGroup(args: GetGatewayGroupCommandInput, cb: (err: any, data?: GetGatewayGroupCommandOutput) => void): void;
  getGatewayGroup(
    args: GetGatewayGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGatewayGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link GetInvitationConfigurationCommand}
   */
  getInvitationConfiguration(
    args: GetInvitationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetInvitationConfigurationCommandOutput>;
  getInvitationConfiguration(
    args: GetInvitationConfigurationCommandInput,
    cb: (err: any, data?: GetInvitationConfigurationCommandOutput) => void
  ): void;
  getInvitationConfiguration(
    args: GetInvitationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInvitationConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetNetworkProfileCommand}
   */
  getNetworkProfile(
    args: GetNetworkProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetNetworkProfileCommandOutput>;
  getNetworkProfile(
    args: GetNetworkProfileCommandInput,
    cb: (err: any, data?: GetNetworkProfileCommandOutput) => void
  ): void;
  getNetworkProfile(
    args: GetNetworkProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetNetworkProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link GetProfileCommand}
   */
  getProfile(args: GetProfileCommandInput, options?: __HttpHandlerOptions): Promise<GetProfileCommandOutput>;
  getProfile(args: GetProfileCommandInput, cb: (err: any, data?: GetProfileCommandOutput) => void): void;
  getProfile(
    args: GetProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRoomCommand}
   */
  getRoom(args: GetRoomCommandInput, options?: __HttpHandlerOptions): Promise<GetRoomCommandOutput>;
  getRoom(args: GetRoomCommandInput, cb: (err: any, data?: GetRoomCommandOutput) => void): void;
  getRoom(
    args: GetRoomCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRoomCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRoomSkillParameterCommand}
   */
  getRoomSkillParameter(
    args: GetRoomSkillParameterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRoomSkillParameterCommandOutput>;
  getRoomSkillParameter(
    args: GetRoomSkillParameterCommandInput,
    cb: (err: any, data?: GetRoomSkillParameterCommandOutput) => void
  ): void;
  getRoomSkillParameter(
    args: GetRoomSkillParameterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRoomSkillParameterCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSkillGroupCommand}
   */
  getSkillGroup(args: GetSkillGroupCommandInput, options?: __HttpHandlerOptions): Promise<GetSkillGroupCommandOutput>;
  getSkillGroup(args: GetSkillGroupCommandInput, cb: (err: any, data?: GetSkillGroupCommandOutput) => void): void;
  getSkillGroup(
    args: GetSkillGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSkillGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBusinessReportSchedulesCommand}
   */
  listBusinessReportSchedules(
    args: ListBusinessReportSchedulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBusinessReportSchedulesCommandOutput>;
  listBusinessReportSchedules(
    args: ListBusinessReportSchedulesCommandInput,
    cb: (err: any, data?: ListBusinessReportSchedulesCommandOutput) => void
  ): void;
  listBusinessReportSchedules(
    args: ListBusinessReportSchedulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBusinessReportSchedulesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListConferenceProvidersCommand}
   */
  listConferenceProviders(
    args: ListConferenceProvidersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConferenceProvidersCommandOutput>;
  listConferenceProviders(
    args: ListConferenceProvidersCommandInput,
    cb: (err: any, data?: ListConferenceProvidersCommandOutput) => void
  ): void;
  listConferenceProviders(
    args: ListConferenceProvidersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConferenceProvidersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDeviceEventsCommand}
   */
  listDeviceEvents(
    args: ListDeviceEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDeviceEventsCommandOutput>;
  listDeviceEvents(
    args: ListDeviceEventsCommandInput,
    cb: (err: any, data?: ListDeviceEventsCommandOutput) => void
  ): void;
  listDeviceEvents(
    args: ListDeviceEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDeviceEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGatewayGroupsCommand}
   */
  listGatewayGroups(
    args: ListGatewayGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListGatewayGroupsCommandOutput>;
  listGatewayGroups(
    args: ListGatewayGroupsCommandInput,
    cb: (err: any, data?: ListGatewayGroupsCommandOutput) => void
  ): void;
  listGatewayGroups(
    args: ListGatewayGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGatewayGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGatewaysCommand}
   */
  listGateways(args: ListGatewaysCommandInput, options?: __HttpHandlerOptions): Promise<ListGatewaysCommandOutput>;
  listGateways(args: ListGatewaysCommandInput, cb: (err: any, data?: ListGatewaysCommandOutput) => void): void;
  listGateways(
    args: ListGatewaysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGatewaysCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSkillsCommand}
   */
  listSkills(args: ListSkillsCommandInput, options?: __HttpHandlerOptions): Promise<ListSkillsCommandOutput>;
  listSkills(args: ListSkillsCommandInput, cb: (err: any, data?: ListSkillsCommandOutput) => void): void;
  listSkills(
    args: ListSkillsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSkillsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSkillsStoreCategoriesCommand}
   */
  listSkillsStoreCategories(
    args: ListSkillsStoreCategoriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSkillsStoreCategoriesCommandOutput>;
  listSkillsStoreCategories(
    args: ListSkillsStoreCategoriesCommandInput,
    cb: (err: any, data?: ListSkillsStoreCategoriesCommandOutput) => void
  ): void;
  listSkillsStoreCategories(
    args: ListSkillsStoreCategoriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSkillsStoreCategoriesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSkillsStoreSkillsByCategoryCommand}
   */
  listSkillsStoreSkillsByCategory(
    args: ListSkillsStoreSkillsByCategoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSkillsStoreSkillsByCategoryCommandOutput>;
  listSkillsStoreSkillsByCategory(
    args: ListSkillsStoreSkillsByCategoryCommandInput,
    cb: (err: any, data?: ListSkillsStoreSkillsByCategoryCommandOutput) => void
  ): void;
  listSkillsStoreSkillsByCategory(
    args: ListSkillsStoreSkillsByCategoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSkillsStoreSkillsByCategoryCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSmartHomeAppliancesCommand}
   */
  listSmartHomeAppliances(
    args: ListSmartHomeAppliancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSmartHomeAppliancesCommandOutput>;
  listSmartHomeAppliances(
    args: ListSmartHomeAppliancesCommandInput,
    cb: (err: any, data?: ListSmartHomeAppliancesCommandOutput) => void
  ): void;
  listSmartHomeAppliances(
    args: ListSmartHomeAppliancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSmartHomeAppliancesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsCommand}
   */
  listTags(args: ListTagsCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsCommandOutput>;
  listTags(args: ListTagsCommandInput, cb: (err: any, data?: ListTagsCommandOutput) => void): void;
  listTags(
    args: ListTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutConferencePreferenceCommand}
   */
  putConferencePreference(
    args: PutConferencePreferenceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutConferencePreferenceCommandOutput>;
  putConferencePreference(
    args: PutConferencePreferenceCommandInput,
    cb: (err: any, data?: PutConferencePreferenceCommandOutput) => void
  ): void;
  putConferencePreference(
    args: PutConferencePreferenceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutConferencePreferenceCommandOutput) => void
  ): void;

  /**
   * @see {@link PutInvitationConfigurationCommand}
   */
  putInvitationConfiguration(
    args: PutInvitationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutInvitationConfigurationCommandOutput>;
  putInvitationConfiguration(
    args: PutInvitationConfigurationCommandInput,
    cb: (err: any, data?: PutInvitationConfigurationCommandOutput) => void
  ): void;
  putInvitationConfiguration(
    args: PutInvitationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutInvitationConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutRoomSkillParameterCommand}
   */
  putRoomSkillParameter(
    args: PutRoomSkillParameterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutRoomSkillParameterCommandOutput>;
  putRoomSkillParameter(
    args: PutRoomSkillParameterCommandInput,
    cb: (err: any, data?: PutRoomSkillParameterCommandOutput) => void
  ): void;
  putRoomSkillParameter(
    args: PutRoomSkillParameterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutRoomSkillParameterCommandOutput) => void
  ): void;

  /**
   * @see {@link PutSkillAuthorizationCommand}
   */
  putSkillAuthorization(
    args: PutSkillAuthorizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutSkillAuthorizationCommandOutput>;
  putSkillAuthorization(
    args: PutSkillAuthorizationCommandInput,
    cb: (err: any, data?: PutSkillAuthorizationCommandOutput) => void
  ): void;
  putSkillAuthorization(
    args: PutSkillAuthorizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutSkillAuthorizationCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterAVSDeviceCommand}
   */
  registerAVSDevice(
    args: RegisterAVSDeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterAVSDeviceCommandOutput>;
  registerAVSDevice(
    args: RegisterAVSDeviceCommandInput,
    cb: (err: any, data?: RegisterAVSDeviceCommandOutput) => void
  ): void;
  registerAVSDevice(
    args: RegisterAVSDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterAVSDeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link RejectSkillCommand}
   */
  rejectSkill(args: RejectSkillCommandInput, options?: __HttpHandlerOptions): Promise<RejectSkillCommandOutput>;
  rejectSkill(args: RejectSkillCommandInput, cb: (err: any, data?: RejectSkillCommandOutput) => void): void;
  rejectSkill(
    args: RejectSkillCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RejectSkillCommandOutput) => void
  ): void;

  /**
   * @see {@link ResolveRoomCommand}
   */
  resolveRoom(args: ResolveRoomCommandInput, options?: __HttpHandlerOptions): Promise<ResolveRoomCommandOutput>;
  resolveRoom(args: ResolveRoomCommandInput, cb: (err: any, data?: ResolveRoomCommandOutput) => void): void;
  resolveRoom(
    args: ResolveRoomCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResolveRoomCommandOutput) => void
  ): void;

  /**
   * @see {@link RevokeInvitationCommand}
   */
  revokeInvitation(
    args: RevokeInvitationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RevokeInvitationCommandOutput>;
  revokeInvitation(
    args: RevokeInvitationCommandInput,
    cb: (err: any, data?: RevokeInvitationCommandOutput) => void
  ): void;
  revokeInvitation(
    args: RevokeInvitationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RevokeInvitationCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchAddressBooksCommand}
   */
  searchAddressBooks(
    args: SearchAddressBooksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchAddressBooksCommandOutput>;
  searchAddressBooks(
    args: SearchAddressBooksCommandInput,
    cb: (err: any, data?: SearchAddressBooksCommandOutput) => void
  ): void;
  searchAddressBooks(
    args: SearchAddressBooksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchAddressBooksCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchContactsCommand}
   */
  searchContacts(
    args: SearchContactsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchContactsCommandOutput>;
  searchContacts(args: SearchContactsCommandInput, cb: (err: any, data?: SearchContactsCommandOutput) => void): void;
  searchContacts(
    args: SearchContactsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchContactsCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchDevicesCommand}
   */
  searchDevices(args: SearchDevicesCommandInput, options?: __HttpHandlerOptions): Promise<SearchDevicesCommandOutput>;
  searchDevices(args: SearchDevicesCommandInput, cb: (err: any, data?: SearchDevicesCommandOutput) => void): void;
  searchDevices(
    args: SearchDevicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchDevicesCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchNetworkProfilesCommand}
   */
  searchNetworkProfiles(
    args: SearchNetworkProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchNetworkProfilesCommandOutput>;
  searchNetworkProfiles(
    args: SearchNetworkProfilesCommandInput,
    cb: (err: any, data?: SearchNetworkProfilesCommandOutput) => void
  ): void;
  searchNetworkProfiles(
    args: SearchNetworkProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchNetworkProfilesCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchProfilesCommand}
   */
  searchProfiles(
    args: SearchProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchProfilesCommandOutput>;
  searchProfiles(args: SearchProfilesCommandInput, cb: (err: any, data?: SearchProfilesCommandOutput) => void): void;
  searchProfiles(
    args: SearchProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchProfilesCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchRoomsCommand}
   */
  searchRooms(args: SearchRoomsCommandInput, options?: __HttpHandlerOptions): Promise<SearchRoomsCommandOutput>;
  searchRooms(args: SearchRoomsCommandInput, cb: (err: any, data?: SearchRoomsCommandOutput) => void): void;
  searchRooms(
    args: SearchRoomsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchRoomsCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchSkillGroupsCommand}
   */
  searchSkillGroups(
    args: SearchSkillGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchSkillGroupsCommandOutput>;
  searchSkillGroups(
    args: SearchSkillGroupsCommandInput,
    cb: (err: any, data?: SearchSkillGroupsCommandOutput) => void
  ): void;
  searchSkillGroups(
    args: SearchSkillGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchSkillGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchUsersCommand}
   */
  searchUsers(args: SearchUsersCommandInput, options?: __HttpHandlerOptions): Promise<SearchUsersCommandOutput>;
  searchUsers(args: SearchUsersCommandInput, cb: (err: any, data?: SearchUsersCommandOutput) => void): void;
  searchUsers(
    args: SearchUsersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchUsersCommandOutput) => void
  ): void;

  /**
   * @see {@link SendAnnouncementCommand}
   */
  sendAnnouncement(
    args: SendAnnouncementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendAnnouncementCommandOutput>;
  sendAnnouncement(
    args: SendAnnouncementCommandInput,
    cb: (err: any, data?: SendAnnouncementCommandOutput) => void
  ): void;
  sendAnnouncement(
    args: SendAnnouncementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendAnnouncementCommandOutput) => void
  ): void;

  /**
   * @see {@link SendInvitationCommand}
   */
  sendInvitation(
    args: SendInvitationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendInvitationCommandOutput>;
  sendInvitation(args: SendInvitationCommandInput, cb: (err: any, data?: SendInvitationCommandOutput) => void): void;
  sendInvitation(
    args: SendInvitationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendInvitationCommandOutput) => void
  ): void;

  /**
   * @see {@link StartDeviceSyncCommand}
   */
  startDeviceSync(
    args: StartDeviceSyncCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartDeviceSyncCommandOutput>;
  startDeviceSync(args: StartDeviceSyncCommandInput, cb: (err: any, data?: StartDeviceSyncCommandOutput) => void): void;
  startDeviceSync(
    args: StartDeviceSyncCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartDeviceSyncCommandOutput) => void
  ): void;

  /**
   * @see {@link StartSmartHomeApplianceDiscoveryCommand}
   */
  startSmartHomeApplianceDiscovery(
    args: StartSmartHomeApplianceDiscoveryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartSmartHomeApplianceDiscoveryCommandOutput>;
  startSmartHomeApplianceDiscovery(
    args: StartSmartHomeApplianceDiscoveryCommandInput,
    cb: (err: any, data?: StartSmartHomeApplianceDiscoveryCommandOutput) => void
  ): void;
  startSmartHomeApplianceDiscovery(
    args: StartSmartHomeApplianceDiscoveryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartSmartHomeApplianceDiscoveryCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAddressBookCommand}
   */
  updateAddressBook(
    args: UpdateAddressBookCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAddressBookCommandOutput>;
  updateAddressBook(
    args: UpdateAddressBookCommandInput,
    cb: (err: any, data?: UpdateAddressBookCommandOutput) => void
  ): void;
  updateAddressBook(
    args: UpdateAddressBookCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAddressBookCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateBusinessReportScheduleCommand}
   */
  updateBusinessReportSchedule(
    args: UpdateBusinessReportScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBusinessReportScheduleCommandOutput>;
  updateBusinessReportSchedule(
    args: UpdateBusinessReportScheduleCommandInput,
    cb: (err: any, data?: UpdateBusinessReportScheduleCommandOutput) => void
  ): void;
  updateBusinessReportSchedule(
    args: UpdateBusinessReportScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBusinessReportScheduleCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateConferenceProviderCommand}
   */
  updateConferenceProvider(
    args: UpdateConferenceProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConferenceProviderCommandOutput>;
  updateConferenceProvider(
    args: UpdateConferenceProviderCommandInput,
    cb: (err: any, data?: UpdateConferenceProviderCommandOutput) => void
  ): void;
  updateConferenceProvider(
    args: UpdateConferenceProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConferenceProviderCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateContactCommand}
   */
  updateContact(args: UpdateContactCommandInput, options?: __HttpHandlerOptions): Promise<UpdateContactCommandOutput>;
  updateContact(args: UpdateContactCommandInput, cb: (err: any, data?: UpdateContactCommandOutput) => void): void;
  updateContact(
    args: UpdateContactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateContactCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDeviceCommand}
   */
  updateDevice(args: UpdateDeviceCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDeviceCommandOutput>;
  updateDevice(args: UpdateDeviceCommandInput, cb: (err: any, data?: UpdateDeviceCommandOutput) => void): void;
  updateDevice(
    args: UpdateDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateGatewayCommand}
   */
  updateGateway(args: UpdateGatewayCommandInput, options?: __HttpHandlerOptions): Promise<UpdateGatewayCommandOutput>;
  updateGateway(args: UpdateGatewayCommandInput, cb: (err: any, data?: UpdateGatewayCommandOutput) => void): void;
  updateGateway(
    args: UpdateGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateGatewayGroupCommand}
   */
  updateGatewayGroup(
    args: UpdateGatewayGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateGatewayGroupCommandOutput>;
  updateGatewayGroup(
    args: UpdateGatewayGroupCommandInput,
    cb: (err: any, data?: UpdateGatewayGroupCommandOutput) => void
  ): void;
  updateGatewayGroup(
    args: UpdateGatewayGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGatewayGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateNetworkProfileCommand}
   */
  updateNetworkProfile(
    args: UpdateNetworkProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateNetworkProfileCommandOutput>;
  updateNetworkProfile(
    args: UpdateNetworkProfileCommandInput,
    cb: (err: any, data?: UpdateNetworkProfileCommandOutput) => void
  ): void;
  updateNetworkProfile(
    args: UpdateNetworkProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateNetworkProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateProfileCommand}
   */
  updateProfile(args: UpdateProfileCommandInput, options?: __HttpHandlerOptions): Promise<UpdateProfileCommandOutput>;
  updateProfile(args: UpdateProfileCommandInput, cb: (err: any, data?: UpdateProfileCommandOutput) => void): void;
  updateProfile(
    args: UpdateProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRoomCommand}
   */
  updateRoom(args: UpdateRoomCommandInput, options?: __HttpHandlerOptions): Promise<UpdateRoomCommandOutput>;
  updateRoom(args: UpdateRoomCommandInput, cb: (err: any, data?: UpdateRoomCommandOutput) => void): void;
  updateRoom(
    args: UpdateRoomCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRoomCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSkillGroupCommand}
   */
  updateSkillGroup(
    args: UpdateSkillGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSkillGroupCommandOutput>;
  updateSkillGroup(
    args: UpdateSkillGroupCommandInput,
    cb: (err: any, data?: UpdateSkillGroupCommandOutput) => void
  ): void;
  updateSkillGroup(
    args: UpdateSkillGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSkillGroupCommandOutput) => void
  ): void;
}

/**
 * @public
 * @deprecated
 *
 * <p>Alexa for Business has been retired and is no longer supported.</p>
 */
export class AlexaForBusiness extends AlexaForBusinessClient implements AlexaForBusiness {}
createAggregatedClient(commands, AlexaForBusiness);
