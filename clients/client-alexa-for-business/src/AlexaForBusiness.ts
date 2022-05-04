// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import { AlexaForBusinessClient } from "./AlexaForBusinessClient";
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

/**
 * <p>Alexa for Business helps you use Alexa in your organization. Alexa for Business provides you with the tools
 *          to manage Alexa devices, enroll your users, and assign skills, at scale. You can build your
 *          own context-aware voice skills using the Alexa Skills Kit and the Alexa for Business API operations.
 *          You can also make these available as private skills for your organization. Alexa for Business makes it
 *          efficient to voice-enable your products and services, thus providing context-aware voice
 *          experiences for your customers. Device makers building with the Alexa Voice Service (AVS)
 *          can create fully integrated solutions, register their products with Alexa for Business, and manage them
 *          as shared devices in their organization. </p>
 */
export class AlexaForBusiness extends AlexaForBusinessClient {
  /**
   * <p>Associates a skill with the organization under the customer's AWS account. If a skill
   *          is private, the user implicitly accepts access to this skill during enablement.</p>
   */
  public approveSkill(
    args: ApproveSkillCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ApproveSkillCommandOutput>;
  public approveSkill(args: ApproveSkillCommandInput, cb: (err: any, data?: ApproveSkillCommandOutput) => void): void;
  public approveSkill(
    args: ApproveSkillCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ApproveSkillCommandOutput) => void
  ): void;
  public approveSkill(
    args: ApproveSkillCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ApproveSkillCommandOutput) => void),
    cb?: (err: any, data?: ApproveSkillCommandOutput) => void
  ): Promise<ApproveSkillCommandOutput> | void {
    const command = new ApproveSkillCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Associates a contact with a given address book.</p>
   */
  public associateContactWithAddressBook(
    args: AssociateContactWithAddressBookCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateContactWithAddressBookCommandOutput>;
  public associateContactWithAddressBook(
    args: AssociateContactWithAddressBookCommandInput,
    cb: (err: any, data?: AssociateContactWithAddressBookCommandOutput) => void
  ): void;
  public associateContactWithAddressBook(
    args: AssociateContactWithAddressBookCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateContactWithAddressBookCommandOutput) => void
  ): void;
  public associateContactWithAddressBook(
    args: AssociateContactWithAddressBookCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateContactWithAddressBookCommandOutput) => void),
    cb?: (err: any, data?: AssociateContactWithAddressBookCommandOutput) => void
  ): Promise<AssociateContactWithAddressBookCommandOutput> | void {
    const command = new AssociateContactWithAddressBookCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Associates a device with the specified network profile.</p>
   */
  public associateDeviceWithNetworkProfile(
    args: AssociateDeviceWithNetworkProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateDeviceWithNetworkProfileCommandOutput>;
  public associateDeviceWithNetworkProfile(
    args: AssociateDeviceWithNetworkProfileCommandInput,
    cb: (err: any, data?: AssociateDeviceWithNetworkProfileCommandOutput) => void
  ): void;
  public associateDeviceWithNetworkProfile(
    args: AssociateDeviceWithNetworkProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateDeviceWithNetworkProfileCommandOutput) => void
  ): void;
  public associateDeviceWithNetworkProfile(
    args: AssociateDeviceWithNetworkProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateDeviceWithNetworkProfileCommandOutput) => void),
    cb?: (err: any, data?: AssociateDeviceWithNetworkProfileCommandOutput) => void
  ): Promise<AssociateDeviceWithNetworkProfileCommandOutput> | void {
    const command = new AssociateDeviceWithNetworkProfileCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Associates a device with a given room. This applies all the settings from the room
   *          profile to the device, and all the skills in any skill groups added to that room. This
   *          operation requires the device to be online, or else a manual sync is required. </p>
   */
  public associateDeviceWithRoom(
    args: AssociateDeviceWithRoomCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateDeviceWithRoomCommandOutput>;
  public associateDeviceWithRoom(
    args: AssociateDeviceWithRoomCommandInput,
    cb: (err: any, data?: AssociateDeviceWithRoomCommandOutput) => void
  ): void;
  public associateDeviceWithRoom(
    args: AssociateDeviceWithRoomCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateDeviceWithRoomCommandOutput) => void
  ): void;
  public associateDeviceWithRoom(
    args: AssociateDeviceWithRoomCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateDeviceWithRoomCommandOutput) => void),
    cb?: (err: any, data?: AssociateDeviceWithRoomCommandOutput) => void
  ): Promise<AssociateDeviceWithRoomCommandOutput> | void {
    const command = new AssociateDeviceWithRoomCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Associates a skill group with a given room. This enables all skills in the associated
   *          skill group on all devices in the room.</p>
   */
  public associateSkillGroupWithRoom(
    args: AssociateSkillGroupWithRoomCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateSkillGroupWithRoomCommandOutput>;
  public associateSkillGroupWithRoom(
    args: AssociateSkillGroupWithRoomCommandInput,
    cb: (err: any, data?: AssociateSkillGroupWithRoomCommandOutput) => void
  ): void;
  public associateSkillGroupWithRoom(
    args: AssociateSkillGroupWithRoomCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateSkillGroupWithRoomCommandOutput) => void
  ): void;
  public associateSkillGroupWithRoom(
    args: AssociateSkillGroupWithRoomCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateSkillGroupWithRoomCommandOutput) => void),
    cb?: (err: any, data?: AssociateSkillGroupWithRoomCommandOutput) => void
  ): Promise<AssociateSkillGroupWithRoomCommandOutput> | void {
    const command = new AssociateSkillGroupWithRoomCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Associates a skill with a skill group.</p>
   */
  public associateSkillWithSkillGroup(
    args: AssociateSkillWithSkillGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateSkillWithSkillGroupCommandOutput>;
  public associateSkillWithSkillGroup(
    args: AssociateSkillWithSkillGroupCommandInput,
    cb: (err: any, data?: AssociateSkillWithSkillGroupCommandOutput) => void
  ): void;
  public associateSkillWithSkillGroup(
    args: AssociateSkillWithSkillGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateSkillWithSkillGroupCommandOutput) => void
  ): void;
  public associateSkillWithSkillGroup(
    args: AssociateSkillWithSkillGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateSkillWithSkillGroupCommandOutput) => void),
    cb?: (err: any, data?: AssociateSkillWithSkillGroupCommandOutput) => void
  ): Promise<AssociateSkillWithSkillGroupCommandOutput> | void {
    const command = new AssociateSkillWithSkillGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Makes a private skill available for enrolled users to enable on their devices.</p>
   */
  public associateSkillWithUsers(
    args: AssociateSkillWithUsersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateSkillWithUsersCommandOutput>;
  public associateSkillWithUsers(
    args: AssociateSkillWithUsersCommandInput,
    cb: (err: any, data?: AssociateSkillWithUsersCommandOutput) => void
  ): void;
  public associateSkillWithUsers(
    args: AssociateSkillWithUsersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateSkillWithUsersCommandOutput) => void
  ): void;
  public associateSkillWithUsers(
    args: AssociateSkillWithUsersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateSkillWithUsersCommandOutput) => void),
    cb?: (err: any, data?: AssociateSkillWithUsersCommandOutput) => void
  ): Promise<AssociateSkillWithUsersCommandOutput> | void {
    const command = new AssociateSkillWithUsersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an address book with the specified details.</p>
   */
  public createAddressBook(
    args: CreateAddressBookCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAddressBookCommandOutput>;
  public createAddressBook(
    args: CreateAddressBookCommandInput,
    cb: (err: any, data?: CreateAddressBookCommandOutput) => void
  ): void;
  public createAddressBook(
    args: CreateAddressBookCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAddressBookCommandOutput) => void
  ): void;
  public createAddressBook(
    args: CreateAddressBookCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateAddressBookCommandOutput) => void),
    cb?: (err: any, data?: CreateAddressBookCommandOutput) => void
  ): Promise<CreateAddressBookCommandOutput> | void {
    const command = new CreateAddressBookCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a recurring schedule for usage reports to deliver to the specified S3
   *          location with a specified daily or weekly interval.</p>
   */
  public createBusinessReportSchedule(
    args: CreateBusinessReportScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBusinessReportScheduleCommandOutput>;
  public createBusinessReportSchedule(
    args: CreateBusinessReportScheduleCommandInput,
    cb: (err: any, data?: CreateBusinessReportScheduleCommandOutput) => void
  ): void;
  public createBusinessReportSchedule(
    args: CreateBusinessReportScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBusinessReportScheduleCommandOutput) => void
  ): void;
  public createBusinessReportSchedule(
    args: CreateBusinessReportScheduleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateBusinessReportScheduleCommandOutput) => void),
    cb?: (err: any, data?: CreateBusinessReportScheduleCommandOutput) => void
  ): Promise<CreateBusinessReportScheduleCommandOutput> | void {
    const command = new CreateBusinessReportScheduleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Adds a new conference provider under the user's AWS account.</p>
   */
  public createConferenceProvider(
    args: CreateConferenceProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConferenceProviderCommandOutput>;
  public createConferenceProvider(
    args: CreateConferenceProviderCommandInput,
    cb: (err: any, data?: CreateConferenceProviderCommandOutput) => void
  ): void;
  public createConferenceProvider(
    args: CreateConferenceProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConferenceProviderCommandOutput) => void
  ): void;
  public createConferenceProvider(
    args: CreateConferenceProviderCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateConferenceProviderCommandOutput) => void),
    cb?: (err: any, data?: CreateConferenceProviderCommandOutput) => void
  ): Promise<CreateConferenceProviderCommandOutput> | void {
    const command = new CreateConferenceProviderCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a contact with the specified details.</p>
   */
  public createContact(
    args: CreateContactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateContactCommandOutput>;
  public createContact(
    args: CreateContactCommandInput,
    cb: (err: any, data?: CreateContactCommandOutput) => void
  ): void;
  public createContact(
    args: CreateContactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateContactCommandOutput) => void
  ): void;
  public createContact(
    args: CreateContactCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateContactCommandOutput) => void),
    cb?: (err: any, data?: CreateContactCommandOutput) => void
  ): Promise<CreateContactCommandOutput> | void {
    const command = new CreateContactCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a gateway group with the specified details.</p>
   */
  public createGatewayGroup(
    args: CreateGatewayGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateGatewayGroupCommandOutput>;
  public createGatewayGroup(
    args: CreateGatewayGroupCommandInput,
    cb: (err: any, data?: CreateGatewayGroupCommandOutput) => void
  ): void;
  public createGatewayGroup(
    args: CreateGatewayGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGatewayGroupCommandOutput) => void
  ): void;
  public createGatewayGroup(
    args: CreateGatewayGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateGatewayGroupCommandOutput) => void),
    cb?: (err: any, data?: CreateGatewayGroupCommandOutput) => void
  ): Promise<CreateGatewayGroupCommandOutput> | void {
    const command = new CreateGatewayGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a network profile with the specified details.</p>
   */
  public createNetworkProfile(
    args: CreateNetworkProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateNetworkProfileCommandOutput>;
  public createNetworkProfile(
    args: CreateNetworkProfileCommandInput,
    cb: (err: any, data?: CreateNetworkProfileCommandOutput) => void
  ): void;
  public createNetworkProfile(
    args: CreateNetworkProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateNetworkProfileCommandOutput) => void
  ): void;
  public createNetworkProfile(
    args: CreateNetworkProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateNetworkProfileCommandOutput) => void),
    cb?: (err: any, data?: CreateNetworkProfileCommandOutput) => void
  ): Promise<CreateNetworkProfileCommandOutput> | void {
    const command = new CreateNetworkProfileCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new room profile with the specified details.</p>
   */
  public createProfile(
    args: CreateProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateProfileCommandOutput>;
  public createProfile(
    args: CreateProfileCommandInput,
    cb: (err: any, data?: CreateProfileCommandOutput) => void
  ): void;
  public createProfile(
    args: CreateProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProfileCommandOutput) => void
  ): void;
  public createProfile(
    args: CreateProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateProfileCommandOutput) => void),
    cb?: (err: any, data?: CreateProfileCommandOutput) => void
  ): Promise<CreateProfileCommandOutput> | void {
    const command = new CreateProfileCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a room with the specified details.</p>
   */
  public createRoom(args: CreateRoomCommandInput, options?: __HttpHandlerOptions): Promise<CreateRoomCommandOutput>;
  public createRoom(args: CreateRoomCommandInput, cb: (err: any, data?: CreateRoomCommandOutput) => void): void;
  public createRoom(
    args: CreateRoomCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRoomCommandOutput) => void
  ): void;
  public createRoom(
    args: CreateRoomCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateRoomCommandOutput) => void),
    cb?: (err: any, data?: CreateRoomCommandOutput) => void
  ): Promise<CreateRoomCommandOutput> | void {
    const command = new CreateRoomCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a skill group with a specified name and description.</p>
   */
  public createSkillGroup(
    args: CreateSkillGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSkillGroupCommandOutput>;
  public createSkillGroup(
    args: CreateSkillGroupCommandInput,
    cb: (err: any, data?: CreateSkillGroupCommandOutput) => void
  ): void;
  public createSkillGroup(
    args: CreateSkillGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSkillGroupCommandOutput) => void
  ): void;
  public createSkillGroup(
    args: CreateSkillGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateSkillGroupCommandOutput) => void),
    cb?: (err: any, data?: CreateSkillGroupCommandOutput) => void
  ): Promise<CreateSkillGroupCommandOutput> | void {
    const command = new CreateSkillGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a user.</p>
   */
  public createUser(args: CreateUserCommandInput, options?: __HttpHandlerOptions): Promise<CreateUserCommandOutput>;
  public createUser(args: CreateUserCommandInput, cb: (err: any, data?: CreateUserCommandOutput) => void): void;
  public createUser(
    args: CreateUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUserCommandOutput) => void
  ): void;
  public createUser(
    args: CreateUserCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateUserCommandOutput) => void),
    cb?: (err: any, data?: CreateUserCommandOutput) => void
  ): Promise<CreateUserCommandOutput> | void {
    const command = new CreateUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes an address book by the address book ARN.</p>
   */
  public deleteAddressBook(
    args: DeleteAddressBookCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAddressBookCommandOutput>;
  public deleteAddressBook(
    args: DeleteAddressBookCommandInput,
    cb: (err: any, data?: DeleteAddressBookCommandOutput) => void
  ): void;
  public deleteAddressBook(
    args: DeleteAddressBookCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAddressBookCommandOutput) => void
  ): void;
  public deleteAddressBook(
    args: DeleteAddressBookCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAddressBookCommandOutput) => void),
    cb?: (err: any, data?: DeleteAddressBookCommandOutput) => void
  ): Promise<DeleteAddressBookCommandOutput> | void {
    const command = new DeleteAddressBookCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the recurring report delivery schedule with the specified schedule
   *          ARN.</p>
   */
  public deleteBusinessReportSchedule(
    args: DeleteBusinessReportScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBusinessReportScheduleCommandOutput>;
  public deleteBusinessReportSchedule(
    args: DeleteBusinessReportScheduleCommandInput,
    cb: (err: any, data?: DeleteBusinessReportScheduleCommandOutput) => void
  ): void;
  public deleteBusinessReportSchedule(
    args: DeleteBusinessReportScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBusinessReportScheduleCommandOutput) => void
  ): void;
  public deleteBusinessReportSchedule(
    args: DeleteBusinessReportScheduleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteBusinessReportScheduleCommandOutput) => void),
    cb?: (err: any, data?: DeleteBusinessReportScheduleCommandOutput) => void
  ): Promise<DeleteBusinessReportScheduleCommandOutput> | void {
    const command = new DeleteBusinessReportScheduleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a conference provider.</p>
   */
  public deleteConferenceProvider(
    args: DeleteConferenceProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConferenceProviderCommandOutput>;
  public deleteConferenceProvider(
    args: DeleteConferenceProviderCommandInput,
    cb: (err: any, data?: DeleteConferenceProviderCommandOutput) => void
  ): void;
  public deleteConferenceProvider(
    args: DeleteConferenceProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConferenceProviderCommandOutput) => void
  ): void;
  public deleteConferenceProvider(
    args: DeleteConferenceProviderCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteConferenceProviderCommandOutput) => void),
    cb?: (err: any, data?: DeleteConferenceProviderCommandOutput) => void
  ): Promise<DeleteConferenceProviderCommandOutput> | void {
    const command = new DeleteConferenceProviderCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a contact by the contact ARN.</p>
   */
  public deleteContact(
    args: DeleteContactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteContactCommandOutput>;
  public deleteContact(
    args: DeleteContactCommandInput,
    cb: (err: any, data?: DeleteContactCommandOutput) => void
  ): void;
  public deleteContact(
    args: DeleteContactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteContactCommandOutput) => void
  ): void;
  public deleteContact(
    args: DeleteContactCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteContactCommandOutput) => void),
    cb?: (err: any, data?: DeleteContactCommandOutput) => void
  ): Promise<DeleteContactCommandOutput> | void {
    const command = new DeleteContactCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes a device from Alexa For Business.</p>
   */
  public deleteDevice(
    args: DeleteDeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDeviceCommandOutput>;
  public deleteDevice(args: DeleteDeviceCommandInput, cb: (err: any, data?: DeleteDeviceCommandOutput) => void): void;
  public deleteDevice(
    args: DeleteDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDeviceCommandOutput) => void
  ): void;
  public deleteDevice(
    args: DeleteDeviceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDeviceCommandOutput) => void),
    cb?: (err: any, data?: DeleteDeviceCommandOutput) => void
  ): Promise<DeleteDeviceCommandOutput> | void {
    const command = new DeleteDeviceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>When this action is called for a specified shared device, it allows authorized users to
   *          delete the device's entire previous history of voice input data and associated response
   *          data. This action can be called once every 24 hours for a specific shared device.</p>
   */
  public deleteDeviceUsageData(
    args: DeleteDeviceUsageDataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDeviceUsageDataCommandOutput>;
  public deleteDeviceUsageData(
    args: DeleteDeviceUsageDataCommandInput,
    cb: (err: any, data?: DeleteDeviceUsageDataCommandOutput) => void
  ): void;
  public deleteDeviceUsageData(
    args: DeleteDeviceUsageDataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDeviceUsageDataCommandOutput) => void
  ): void;
  public deleteDeviceUsageData(
    args: DeleteDeviceUsageDataCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDeviceUsageDataCommandOutput) => void),
    cb?: (err: any, data?: DeleteDeviceUsageDataCommandOutput) => void
  ): Promise<DeleteDeviceUsageDataCommandOutput> | void {
    const command = new DeleteDeviceUsageDataCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a gateway group.</p>
   */
  public deleteGatewayGroup(
    args: DeleteGatewayGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteGatewayGroupCommandOutput>;
  public deleteGatewayGroup(
    args: DeleteGatewayGroupCommandInput,
    cb: (err: any, data?: DeleteGatewayGroupCommandOutput) => void
  ): void;
  public deleteGatewayGroup(
    args: DeleteGatewayGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGatewayGroupCommandOutput) => void
  ): void;
  public deleteGatewayGroup(
    args: DeleteGatewayGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteGatewayGroupCommandOutput) => void),
    cb?: (err: any, data?: DeleteGatewayGroupCommandOutput) => void
  ): Promise<DeleteGatewayGroupCommandOutput> | void {
    const command = new DeleteGatewayGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a network profile by the network profile ARN.</p>
   */
  public deleteNetworkProfile(
    args: DeleteNetworkProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteNetworkProfileCommandOutput>;
  public deleteNetworkProfile(
    args: DeleteNetworkProfileCommandInput,
    cb: (err: any, data?: DeleteNetworkProfileCommandOutput) => void
  ): void;
  public deleteNetworkProfile(
    args: DeleteNetworkProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteNetworkProfileCommandOutput) => void
  ): void;
  public deleteNetworkProfile(
    args: DeleteNetworkProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteNetworkProfileCommandOutput) => void),
    cb?: (err: any, data?: DeleteNetworkProfileCommandOutput) => void
  ): Promise<DeleteNetworkProfileCommandOutput> | void {
    const command = new DeleteNetworkProfileCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a room profile by the profile ARN.</p>
   */
  public deleteProfile(
    args: DeleteProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteProfileCommandOutput>;
  public deleteProfile(
    args: DeleteProfileCommandInput,
    cb: (err: any, data?: DeleteProfileCommandOutput) => void
  ): void;
  public deleteProfile(
    args: DeleteProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProfileCommandOutput) => void
  ): void;
  public deleteProfile(
    args: DeleteProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteProfileCommandOutput) => void),
    cb?: (err: any, data?: DeleteProfileCommandOutput) => void
  ): Promise<DeleteProfileCommandOutput> | void {
    const command = new DeleteProfileCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a room by the room ARN.</p>
   */
  public deleteRoom(args: DeleteRoomCommandInput, options?: __HttpHandlerOptions): Promise<DeleteRoomCommandOutput>;
  public deleteRoom(args: DeleteRoomCommandInput, cb: (err: any, data?: DeleteRoomCommandOutput) => void): void;
  public deleteRoom(
    args: DeleteRoomCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRoomCommandOutput) => void
  ): void;
  public deleteRoom(
    args: DeleteRoomCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteRoomCommandOutput) => void),
    cb?: (err: any, data?: DeleteRoomCommandOutput) => void
  ): Promise<DeleteRoomCommandOutput> | void {
    const command = new DeleteRoomCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes room skill parameter details by room, skill, and parameter key ID.</p>
   */
  public deleteRoomSkillParameter(
    args: DeleteRoomSkillParameterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRoomSkillParameterCommandOutput>;
  public deleteRoomSkillParameter(
    args: DeleteRoomSkillParameterCommandInput,
    cb: (err: any, data?: DeleteRoomSkillParameterCommandOutput) => void
  ): void;
  public deleteRoomSkillParameter(
    args: DeleteRoomSkillParameterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRoomSkillParameterCommandOutput) => void
  ): void;
  public deleteRoomSkillParameter(
    args: DeleteRoomSkillParameterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteRoomSkillParameterCommandOutput) => void),
    cb?: (err: any, data?: DeleteRoomSkillParameterCommandOutput) => void
  ): Promise<DeleteRoomSkillParameterCommandOutput> | void {
    const command = new DeleteRoomSkillParameterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Unlinks a third-party account from a skill.</p>
   */
  public deleteSkillAuthorization(
    args: DeleteSkillAuthorizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSkillAuthorizationCommandOutput>;
  public deleteSkillAuthorization(
    args: DeleteSkillAuthorizationCommandInput,
    cb: (err: any, data?: DeleteSkillAuthorizationCommandOutput) => void
  ): void;
  public deleteSkillAuthorization(
    args: DeleteSkillAuthorizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSkillAuthorizationCommandOutput) => void
  ): void;
  public deleteSkillAuthorization(
    args: DeleteSkillAuthorizationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteSkillAuthorizationCommandOutput) => void),
    cb?: (err: any, data?: DeleteSkillAuthorizationCommandOutput) => void
  ): Promise<DeleteSkillAuthorizationCommandOutput> | void {
    const command = new DeleteSkillAuthorizationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a skill group by skill group ARN.</p>
   */
  public deleteSkillGroup(
    args: DeleteSkillGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSkillGroupCommandOutput>;
  public deleteSkillGroup(
    args: DeleteSkillGroupCommandInput,
    cb: (err: any, data?: DeleteSkillGroupCommandOutput) => void
  ): void;
  public deleteSkillGroup(
    args: DeleteSkillGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSkillGroupCommandOutput) => void
  ): void;
  public deleteSkillGroup(
    args: DeleteSkillGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteSkillGroupCommandOutput) => void),
    cb?: (err: any, data?: DeleteSkillGroupCommandOutput) => void
  ): Promise<DeleteSkillGroupCommandOutput> | void {
    const command = new DeleteSkillGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a specified user by user ARN and enrollment ARN.</p>
   */
  public deleteUser(args: DeleteUserCommandInput, options?: __HttpHandlerOptions): Promise<DeleteUserCommandOutput>;
  public deleteUser(args: DeleteUserCommandInput, cb: (err: any, data?: DeleteUserCommandOutput) => void): void;
  public deleteUser(
    args: DeleteUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUserCommandOutput) => void
  ): void;
  public deleteUser(
    args: DeleteUserCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteUserCommandOutput) => void),
    cb?: (err: any, data?: DeleteUserCommandOutput) => void
  ): Promise<DeleteUserCommandOutput> | void {
    const command = new DeleteUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Disassociates a contact from a given address book.</p>
   */
  public disassociateContactFromAddressBook(
    args: DisassociateContactFromAddressBookCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateContactFromAddressBookCommandOutput>;
  public disassociateContactFromAddressBook(
    args: DisassociateContactFromAddressBookCommandInput,
    cb: (err: any, data?: DisassociateContactFromAddressBookCommandOutput) => void
  ): void;
  public disassociateContactFromAddressBook(
    args: DisassociateContactFromAddressBookCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateContactFromAddressBookCommandOutput) => void
  ): void;
  public disassociateContactFromAddressBook(
    args: DisassociateContactFromAddressBookCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateContactFromAddressBookCommandOutput) => void),
    cb?: (err: any, data?: DisassociateContactFromAddressBookCommandOutput) => void
  ): Promise<DisassociateContactFromAddressBookCommandOutput> | void {
    const command = new DisassociateContactFromAddressBookCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Disassociates a device from its current room. The device continues to be connected to
   *          the Wi-Fi network and is still registered to the account. The device settings and skills
   *          are removed from the room.</p>
   */
  public disassociateDeviceFromRoom(
    args: DisassociateDeviceFromRoomCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateDeviceFromRoomCommandOutput>;
  public disassociateDeviceFromRoom(
    args: DisassociateDeviceFromRoomCommandInput,
    cb: (err: any, data?: DisassociateDeviceFromRoomCommandOutput) => void
  ): void;
  public disassociateDeviceFromRoom(
    args: DisassociateDeviceFromRoomCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateDeviceFromRoomCommandOutput) => void
  ): void;
  public disassociateDeviceFromRoom(
    args: DisassociateDeviceFromRoomCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateDeviceFromRoomCommandOutput) => void),
    cb?: (err: any, data?: DisassociateDeviceFromRoomCommandOutput) => void
  ): Promise<DisassociateDeviceFromRoomCommandOutput> | void {
    const command = new DisassociateDeviceFromRoomCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Disassociates a skill from a skill group.</p>
   */
  public disassociateSkillFromSkillGroup(
    args: DisassociateSkillFromSkillGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateSkillFromSkillGroupCommandOutput>;
  public disassociateSkillFromSkillGroup(
    args: DisassociateSkillFromSkillGroupCommandInput,
    cb: (err: any, data?: DisassociateSkillFromSkillGroupCommandOutput) => void
  ): void;
  public disassociateSkillFromSkillGroup(
    args: DisassociateSkillFromSkillGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateSkillFromSkillGroupCommandOutput) => void
  ): void;
  public disassociateSkillFromSkillGroup(
    args: DisassociateSkillFromSkillGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateSkillFromSkillGroupCommandOutput) => void),
    cb?: (err: any, data?: DisassociateSkillFromSkillGroupCommandOutput) => void
  ): Promise<DisassociateSkillFromSkillGroupCommandOutput> | void {
    const command = new DisassociateSkillFromSkillGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Makes a private skill unavailable for enrolled users and prevents them from enabling it
   *          on their devices.</p>
   */
  public disassociateSkillFromUsers(
    args: DisassociateSkillFromUsersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateSkillFromUsersCommandOutput>;
  public disassociateSkillFromUsers(
    args: DisassociateSkillFromUsersCommandInput,
    cb: (err: any, data?: DisassociateSkillFromUsersCommandOutput) => void
  ): void;
  public disassociateSkillFromUsers(
    args: DisassociateSkillFromUsersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateSkillFromUsersCommandOutput) => void
  ): void;
  public disassociateSkillFromUsers(
    args: DisassociateSkillFromUsersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateSkillFromUsersCommandOutput) => void),
    cb?: (err: any, data?: DisassociateSkillFromUsersCommandOutput) => void
  ): Promise<DisassociateSkillFromUsersCommandOutput> | void {
    const command = new DisassociateSkillFromUsersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Disassociates a skill group from a specified room. This disables all skills in the
   *          skill group on all devices in the room.</p>
   */
  public disassociateSkillGroupFromRoom(
    args: DisassociateSkillGroupFromRoomCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateSkillGroupFromRoomCommandOutput>;
  public disassociateSkillGroupFromRoom(
    args: DisassociateSkillGroupFromRoomCommandInput,
    cb: (err: any, data?: DisassociateSkillGroupFromRoomCommandOutput) => void
  ): void;
  public disassociateSkillGroupFromRoom(
    args: DisassociateSkillGroupFromRoomCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateSkillGroupFromRoomCommandOutput) => void
  ): void;
  public disassociateSkillGroupFromRoom(
    args: DisassociateSkillGroupFromRoomCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateSkillGroupFromRoomCommandOutput) => void),
    cb?: (err: any, data?: DisassociateSkillGroupFromRoomCommandOutput) => void
  ): Promise<DisassociateSkillGroupFromRoomCommandOutput> | void {
    const command = new DisassociateSkillGroupFromRoomCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Forgets smart home appliances associated to a room.</p>
   */
  public forgetSmartHomeAppliances(
    args: ForgetSmartHomeAppliancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ForgetSmartHomeAppliancesCommandOutput>;
  public forgetSmartHomeAppliances(
    args: ForgetSmartHomeAppliancesCommandInput,
    cb: (err: any, data?: ForgetSmartHomeAppliancesCommandOutput) => void
  ): void;
  public forgetSmartHomeAppliances(
    args: ForgetSmartHomeAppliancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ForgetSmartHomeAppliancesCommandOutput) => void
  ): void;
  public forgetSmartHomeAppliances(
    args: ForgetSmartHomeAppliancesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ForgetSmartHomeAppliancesCommandOutput) => void),
    cb?: (err: any, data?: ForgetSmartHomeAppliancesCommandOutput) => void
  ): Promise<ForgetSmartHomeAppliancesCommandOutput> | void {
    const command = new ForgetSmartHomeAppliancesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets address the book details by the address book ARN.</p>
   */
  public getAddressBook(
    args: GetAddressBookCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAddressBookCommandOutput>;
  public getAddressBook(
    args: GetAddressBookCommandInput,
    cb: (err: any, data?: GetAddressBookCommandOutput) => void
  ): void;
  public getAddressBook(
    args: GetAddressBookCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAddressBookCommandOutput) => void
  ): void;
  public getAddressBook(
    args: GetAddressBookCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAddressBookCommandOutput) => void),
    cb?: (err: any, data?: GetAddressBookCommandOutput) => void
  ): Promise<GetAddressBookCommandOutput> | void {
    const command = new GetAddressBookCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the existing conference preferences.</p>
   */
  public getConferencePreference(
    args: GetConferencePreferenceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConferencePreferenceCommandOutput>;
  public getConferencePreference(
    args: GetConferencePreferenceCommandInput,
    cb: (err: any, data?: GetConferencePreferenceCommandOutput) => void
  ): void;
  public getConferencePreference(
    args: GetConferencePreferenceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConferencePreferenceCommandOutput) => void
  ): void;
  public getConferencePreference(
    args: GetConferencePreferenceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetConferencePreferenceCommandOutput) => void),
    cb?: (err: any, data?: GetConferencePreferenceCommandOutput) => void
  ): Promise<GetConferencePreferenceCommandOutput> | void {
    const command = new GetConferencePreferenceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets details about a specific conference provider.</p>
   */
  public getConferenceProvider(
    args: GetConferenceProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConferenceProviderCommandOutput>;
  public getConferenceProvider(
    args: GetConferenceProviderCommandInput,
    cb: (err: any, data?: GetConferenceProviderCommandOutput) => void
  ): void;
  public getConferenceProvider(
    args: GetConferenceProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConferenceProviderCommandOutput) => void
  ): void;
  public getConferenceProvider(
    args: GetConferenceProviderCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetConferenceProviderCommandOutput) => void),
    cb?: (err: any, data?: GetConferenceProviderCommandOutput) => void
  ): Promise<GetConferenceProviderCommandOutput> | void {
    const command = new GetConferenceProviderCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets the contact details by the contact ARN.</p>
   */
  public getContact(args: GetContactCommandInput, options?: __HttpHandlerOptions): Promise<GetContactCommandOutput>;
  public getContact(args: GetContactCommandInput, cb: (err: any, data?: GetContactCommandOutput) => void): void;
  public getContact(
    args: GetContactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetContactCommandOutput) => void
  ): void;
  public getContact(
    args: GetContactCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetContactCommandOutput) => void),
    cb?: (err: any, data?: GetContactCommandOutput) => void
  ): Promise<GetContactCommandOutput> | void {
    const command = new GetContactCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets the details of a device by device ARN.</p>
   */
  public getDevice(args: GetDeviceCommandInput, options?: __HttpHandlerOptions): Promise<GetDeviceCommandOutput>;
  public getDevice(args: GetDeviceCommandInput, cb: (err: any, data?: GetDeviceCommandOutput) => void): void;
  public getDevice(
    args: GetDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeviceCommandOutput) => void
  ): void;
  public getDevice(
    args: GetDeviceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDeviceCommandOutput) => void),
    cb?: (err: any, data?: GetDeviceCommandOutput) => void
  ): Promise<GetDeviceCommandOutput> | void {
    const command = new GetDeviceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the details of a gateway.</p>
   */
  public getGateway(args: GetGatewayCommandInput, options?: __HttpHandlerOptions): Promise<GetGatewayCommandOutput>;
  public getGateway(args: GetGatewayCommandInput, cb: (err: any, data?: GetGatewayCommandOutput) => void): void;
  public getGateway(
    args: GetGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGatewayCommandOutput) => void
  ): void;
  public getGateway(
    args: GetGatewayCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetGatewayCommandOutput) => void),
    cb?: (err: any, data?: GetGatewayCommandOutput) => void
  ): Promise<GetGatewayCommandOutput> | void {
    const command = new GetGatewayCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the details of a gateway group.</p>
   */
  public getGatewayGroup(
    args: GetGatewayGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetGatewayGroupCommandOutput>;
  public getGatewayGroup(
    args: GetGatewayGroupCommandInput,
    cb: (err: any, data?: GetGatewayGroupCommandOutput) => void
  ): void;
  public getGatewayGroup(
    args: GetGatewayGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGatewayGroupCommandOutput) => void
  ): void;
  public getGatewayGroup(
    args: GetGatewayGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetGatewayGroupCommandOutput) => void),
    cb?: (err: any, data?: GetGatewayGroupCommandOutput) => void
  ): Promise<GetGatewayGroupCommandOutput> | void {
    const command = new GetGatewayGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the configured values for the user enrollment invitation email
   *          template.</p>
   */
  public getInvitationConfiguration(
    args: GetInvitationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetInvitationConfigurationCommandOutput>;
  public getInvitationConfiguration(
    args: GetInvitationConfigurationCommandInput,
    cb: (err: any, data?: GetInvitationConfigurationCommandOutput) => void
  ): void;
  public getInvitationConfiguration(
    args: GetInvitationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInvitationConfigurationCommandOutput) => void
  ): void;
  public getInvitationConfiguration(
    args: GetInvitationConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetInvitationConfigurationCommandOutput) => void),
    cb?: (err: any, data?: GetInvitationConfigurationCommandOutput) => void
  ): Promise<GetInvitationConfigurationCommandOutput> | void {
    const command = new GetInvitationConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets the network profile details by the network profile ARN.</p>
   */
  public getNetworkProfile(
    args: GetNetworkProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetNetworkProfileCommandOutput>;
  public getNetworkProfile(
    args: GetNetworkProfileCommandInput,
    cb: (err: any, data?: GetNetworkProfileCommandOutput) => void
  ): void;
  public getNetworkProfile(
    args: GetNetworkProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetNetworkProfileCommandOutput) => void
  ): void;
  public getNetworkProfile(
    args: GetNetworkProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetNetworkProfileCommandOutput) => void),
    cb?: (err: any, data?: GetNetworkProfileCommandOutput) => void
  ): Promise<GetNetworkProfileCommandOutput> | void {
    const command = new GetNetworkProfileCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets the details of a room profile by profile ARN.</p>
   */
  public getProfile(args: GetProfileCommandInput, options?: __HttpHandlerOptions): Promise<GetProfileCommandOutput>;
  public getProfile(args: GetProfileCommandInput, cb: (err: any, data?: GetProfileCommandOutput) => void): void;
  public getProfile(
    args: GetProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetProfileCommandOutput) => void
  ): void;
  public getProfile(
    args: GetProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetProfileCommandOutput) => void),
    cb?: (err: any, data?: GetProfileCommandOutput) => void
  ): Promise<GetProfileCommandOutput> | void {
    const command = new GetProfileCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets room details by room ARN.</p>
   */
  public getRoom(args: GetRoomCommandInput, options?: __HttpHandlerOptions): Promise<GetRoomCommandOutput>;
  public getRoom(args: GetRoomCommandInput, cb: (err: any, data?: GetRoomCommandOutput) => void): void;
  public getRoom(
    args: GetRoomCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRoomCommandOutput) => void
  ): void;
  public getRoom(
    args: GetRoomCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetRoomCommandOutput) => void),
    cb?: (err: any, data?: GetRoomCommandOutput) => void
  ): Promise<GetRoomCommandOutput> | void {
    const command = new GetRoomCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets room skill parameter details by room, skill, and parameter key ARN.</p>
   */
  public getRoomSkillParameter(
    args: GetRoomSkillParameterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRoomSkillParameterCommandOutput>;
  public getRoomSkillParameter(
    args: GetRoomSkillParameterCommandInput,
    cb: (err: any, data?: GetRoomSkillParameterCommandOutput) => void
  ): void;
  public getRoomSkillParameter(
    args: GetRoomSkillParameterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRoomSkillParameterCommandOutput) => void
  ): void;
  public getRoomSkillParameter(
    args: GetRoomSkillParameterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetRoomSkillParameterCommandOutput) => void),
    cb?: (err: any, data?: GetRoomSkillParameterCommandOutput) => void
  ): Promise<GetRoomSkillParameterCommandOutput> | void {
    const command = new GetRoomSkillParameterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets skill group details by skill group ARN.</p>
   */
  public getSkillGroup(
    args: GetSkillGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSkillGroupCommandOutput>;
  public getSkillGroup(
    args: GetSkillGroupCommandInput,
    cb: (err: any, data?: GetSkillGroupCommandOutput) => void
  ): void;
  public getSkillGroup(
    args: GetSkillGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSkillGroupCommandOutput) => void
  ): void;
  public getSkillGroup(
    args: GetSkillGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSkillGroupCommandOutput) => void),
    cb?: (err: any, data?: GetSkillGroupCommandOutput) => void
  ): Promise<GetSkillGroupCommandOutput> | void {
    const command = new GetSkillGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the details of the schedules that a user configured. A download URL of the report associated with each schedule is returned every time this action is called. A new download URL is returned each time, and is valid for 24 hours.</p>
   */
  public listBusinessReportSchedules(
    args: ListBusinessReportSchedulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBusinessReportSchedulesCommandOutput>;
  public listBusinessReportSchedules(
    args: ListBusinessReportSchedulesCommandInput,
    cb: (err: any, data?: ListBusinessReportSchedulesCommandOutput) => void
  ): void;
  public listBusinessReportSchedules(
    args: ListBusinessReportSchedulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBusinessReportSchedulesCommandOutput) => void
  ): void;
  public listBusinessReportSchedules(
    args: ListBusinessReportSchedulesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListBusinessReportSchedulesCommandOutput) => void),
    cb?: (err: any, data?: ListBusinessReportSchedulesCommandOutput) => void
  ): Promise<ListBusinessReportSchedulesCommandOutput> | void {
    const command = new ListBusinessReportSchedulesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists conference providers under a specific AWS account.</p>
   */
  public listConferenceProviders(
    args: ListConferenceProvidersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConferenceProvidersCommandOutput>;
  public listConferenceProviders(
    args: ListConferenceProvidersCommandInput,
    cb: (err: any, data?: ListConferenceProvidersCommandOutput) => void
  ): void;
  public listConferenceProviders(
    args: ListConferenceProvidersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConferenceProvidersCommandOutput) => void
  ): void;
  public listConferenceProviders(
    args: ListConferenceProvidersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListConferenceProvidersCommandOutput) => void),
    cb?: (err: any, data?: ListConferenceProvidersCommandOutput) => void
  ): Promise<ListConferenceProvidersCommandOutput> | void {
    const command = new ListConferenceProvidersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the device event history, including device connection status, for up to 30
   *          days.</p>
   */
  public listDeviceEvents(
    args: ListDeviceEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDeviceEventsCommandOutput>;
  public listDeviceEvents(
    args: ListDeviceEventsCommandInput,
    cb: (err: any, data?: ListDeviceEventsCommandOutput) => void
  ): void;
  public listDeviceEvents(
    args: ListDeviceEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDeviceEventsCommandOutput) => void
  ): void;
  public listDeviceEvents(
    args: ListDeviceEventsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDeviceEventsCommandOutput) => void),
    cb?: (err: any, data?: ListDeviceEventsCommandOutput) => void
  ): Promise<ListDeviceEventsCommandOutput> | void {
    const command = new ListDeviceEventsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a list of gateway group summaries. Use GetGatewayGroup to retrieve details of
   *          a specific gateway group.</p>
   */
  public listGatewayGroups(
    args: ListGatewayGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListGatewayGroupsCommandOutput>;
  public listGatewayGroups(
    args: ListGatewayGroupsCommandInput,
    cb: (err: any, data?: ListGatewayGroupsCommandOutput) => void
  ): void;
  public listGatewayGroups(
    args: ListGatewayGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGatewayGroupsCommandOutput) => void
  ): void;
  public listGatewayGroups(
    args: ListGatewayGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListGatewayGroupsCommandOutput) => void),
    cb?: (err: any, data?: ListGatewayGroupsCommandOutput) => void
  ): Promise<ListGatewayGroupsCommandOutput> | void {
    const command = new ListGatewayGroupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a list of gateway summaries. Use GetGateway to retrieve details of a specific
   *          gateway. An optional gateway group ARN can be provided to only retrieve gateway summaries
   *          of gateways that are associated with that gateway group ARN.</p>
   */
  public listGateways(
    args: ListGatewaysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListGatewaysCommandOutput>;
  public listGateways(args: ListGatewaysCommandInput, cb: (err: any, data?: ListGatewaysCommandOutput) => void): void;
  public listGateways(
    args: ListGatewaysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGatewaysCommandOutput) => void
  ): void;
  public listGateways(
    args: ListGatewaysCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListGatewaysCommandOutput) => void),
    cb?: (err: any, data?: ListGatewaysCommandOutput) => void
  ): Promise<ListGatewaysCommandOutput> | void {
    const command = new ListGatewaysCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all enabled skills in a specific skill group.</p>
   */
  public listSkills(args: ListSkillsCommandInput, options?: __HttpHandlerOptions): Promise<ListSkillsCommandOutput>;
  public listSkills(args: ListSkillsCommandInput, cb: (err: any, data?: ListSkillsCommandOutput) => void): void;
  public listSkills(
    args: ListSkillsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSkillsCommandOutput) => void
  ): void;
  public listSkills(
    args: ListSkillsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSkillsCommandOutput) => void),
    cb?: (err: any, data?: ListSkillsCommandOutput) => void
  ): Promise<ListSkillsCommandOutput> | void {
    const command = new ListSkillsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all categories in the Alexa skill store.</p>
   */
  public listSkillsStoreCategories(
    args: ListSkillsStoreCategoriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSkillsStoreCategoriesCommandOutput>;
  public listSkillsStoreCategories(
    args: ListSkillsStoreCategoriesCommandInput,
    cb: (err: any, data?: ListSkillsStoreCategoriesCommandOutput) => void
  ): void;
  public listSkillsStoreCategories(
    args: ListSkillsStoreCategoriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSkillsStoreCategoriesCommandOutput) => void
  ): void;
  public listSkillsStoreCategories(
    args: ListSkillsStoreCategoriesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSkillsStoreCategoriesCommandOutput) => void),
    cb?: (err: any, data?: ListSkillsStoreCategoriesCommandOutput) => void
  ): Promise<ListSkillsStoreCategoriesCommandOutput> | void {
    const command = new ListSkillsStoreCategoriesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all skills in the Alexa skill store by category.</p>
   */
  public listSkillsStoreSkillsByCategory(
    args: ListSkillsStoreSkillsByCategoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSkillsStoreSkillsByCategoryCommandOutput>;
  public listSkillsStoreSkillsByCategory(
    args: ListSkillsStoreSkillsByCategoryCommandInput,
    cb: (err: any, data?: ListSkillsStoreSkillsByCategoryCommandOutput) => void
  ): void;
  public listSkillsStoreSkillsByCategory(
    args: ListSkillsStoreSkillsByCategoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSkillsStoreSkillsByCategoryCommandOutput) => void
  ): void;
  public listSkillsStoreSkillsByCategory(
    args: ListSkillsStoreSkillsByCategoryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSkillsStoreSkillsByCategoryCommandOutput) => void),
    cb?: (err: any, data?: ListSkillsStoreSkillsByCategoryCommandOutput) => void
  ): Promise<ListSkillsStoreSkillsByCategoryCommandOutput> | void {
    const command = new ListSkillsStoreSkillsByCategoryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all of the smart home appliances associated with a room.</p>
   */
  public listSmartHomeAppliances(
    args: ListSmartHomeAppliancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSmartHomeAppliancesCommandOutput>;
  public listSmartHomeAppliances(
    args: ListSmartHomeAppliancesCommandInput,
    cb: (err: any, data?: ListSmartHomeAppliancesCommandOutput) => void
  ): void;
  public listSmartHomeAppliances(
    args: ListSmartHomeAppliancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSmartHomeAppliancesCommandOutput) => void
  ): void;
  public listSmartHomeAppliances(
    args: ListSmartHomeAppliancesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSmartHomeAppliancesCommandOutput) => void),
    cb?: (err: any, data?: ListSmartHomeAppliancesCommandOutput) => void
  ): Promise<ListSmartHomeAppliancesCommandOutput> | void {
    const command = new ListSmartHomeAppliancesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all tags for the specified resource.</p>
   */
  public listTags(args: ListTagsCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsCommandOutput>;
  public listTags(args: ListTagsCommandInput, cb: (err: any, data?: ListTagsCommandOutput) => void): void;
  public listTags(
    args: ListTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsCommandOutput) => void
  ): void;
  public listTags(
    args: ListTagsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsCommandOutput) => void),
    cb?: (err: any, data?: ListTagsCommandOutput) => void
  ): Promise<ListTagsCommandOutput> | void {
    const command = new ListTagsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Sets the conference preferences on a specific conference provider at the account
   *          level.</p>
   */
  public putConferencePreference(
    args: PutConferencePreferenceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutConferencePreferenceCommandOutput>;
  public putConferencePreference(
    args: PutConferencePreferenceCommandInput,
    cb: (err: any, data?: PutConferencePreferenceCommandOutput) => void
  ): void;
  public putConferencePreference(
    args: PutConferencePreferenceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutConferencePreferenceCommandOutput) => void
  ): void;
  public putConferencePreference(
    args: PutConferencePreferenceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutConferencePreferenceCommandOutput) => void),
    cb?: (err: any, data?: PutConferencePreferenceCommandOutput) => void
  ): Promise<PutConferencePreferenceCommandOutput> | void {
    const command = new PutConferencePreferenceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Configures the email template for the user enrollment invitation with the specified
   *          attributes.</p>
   */
  public putInvitationConfiguration(
    args: PutInvitationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutInvitationConfigurationCommandOutput>;
  public putInvitationConfiguration(
    args: PutInvitationConfigurationCommandInput,
    cb: (err: any, data?: PutInvitationConfigurationCommandOutput) => void
  ): void;
  public putInvitationConfiguration(
    args: PutInvitationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutInvitationConfigurationCommandOutput) => void
  ): void;
  public putInvitationConfiguration(
    args: PutInvitationConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutInvitationConfigurationCommandOutput) => void),
    cb?: (err: any, data?: PutInvitationConfigurationCommandOutput) => void
  ): Promise<PutInvitationConfigurationCommandOutput> | void {
    const command = new PutInvitationConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates room skill parameter details by room, skill, and parameter key ID. Not all
   *          skills have a room skill parameter.</p>
   */
  public putRoomSkillParameter(
    args: PutRoomSkillParameterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutRoomSkillParameterCommandOutput>;
  public putRoomSkillParameter(
    args: PutRoomSkillParameterCommandInput,
    cb: (err: any, data?: PutRoomSkillParameterCommandOutput) => void
  ): void;
  public putRoomSkillParameter(
    args: PutRoomSkillParameterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutRoomSkillParameterCommandOutput) => void
  ): void;
  public putRoomSkillParameter(
    args: PutRoomSkillParameterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutRoomSkillParameterCommandOutput) => void),
    cb?: (err: any, data?: PutRoomSkillParameterCommandOutput) => void
  ): Promise<PutRoomSkillParameterCommandOutput> | void {
    const command = new PutRoomSkillParameterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Links a user's account to a third-party skill provider. If this API operation is
   *          called by an assumed IAM role, the skill being linked must be a private skill. Also, the
   *          skill must be owned by the AWS account that assumed the IAM role.</p>
   */
  public putSkillAuthorization(
    args: PutSkillAuthorizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutSkillAuthorizationCommandOutput>;
  public putSkillAuthorization(
    args: PutSkillAuthorizationCommandInput,
    cb: (err: any, data?: PutSkillAuthorizationCommandOutput) => void
  ): void;
  public putSkillAuthorization(
    args: PutSkillAuthorizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutSkillAuthorizationCommandOutput) => void
  ): void;
  public putSkillAuthorization(
    args: PutSkillAuthorizationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutSkillAuthorizationCommandOutput) => void),
    cb?: (err: any, data?: PutSkillAuthorizationCommandOutput) => void
  ): Promise<PutSkillAuthorizationCommandOutput> | void {
    const command = new PutSkillAuthorizationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Registers an Alexa-enabled device built by an Original Equipment Manufacturer (OEM)
   *          using Alexa Voice Service (AVS).</p>
   */
  public registerAVSDevice(
    args: RegisterAVSDeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterAVSDeviceCommandOutput>;
  public registerAVSDevice(
    args: RegisterAVSDeviceCommandInput,
    cb: (err: any, data?: RegisterAVSDeviceCommandOutput) => void
  ): void;
  public registerAVSDevice(
    args: RegisterAVSDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterAVSDeviceCommandOutput) => void
  ): void;
  public registerAVSDevice(
    args: RegisterAVSDeviceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RegisterAVSDeviceCommandOutput) => void),
    cb?: (err: any, data?: RegisterAVSDeviceCommandOutput) => void
  ): Promise<RegisterAVSDeviceCommandOutput> | void {
    const command = new RegisterAVSDeviceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Disassociates a skill from the organization under a user's AWS account. If the skill
   *          is a private skill, it moves to an AcceptStatus of PENDING. Any private or public skill
   *          that is rejected can be added later by calling the ApproveSkill API. </p>
   */
  public rejectSkill(args: RejectSkillCommandInput, options?: __HttpHandlerOptions): Promise<RejectSkillCommandOutput>;
  public rejectSkill(args: RejectSkillCommandInput, cb: (err: any, data?: RejectSkillCommandOutput) => void): void;
  public rejectSkill(
    args: RejectSkillCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RejectSkillCommandOutput) => void
  ): void;
  public rejectSkill(
    args: RejectSkillCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RejectSkillCommandOutput) => void),
    cb?: (err: any, data?: RejectSkillCommandOutput) => void
  ): Promise<RejectSkillCommandOutput> | void {
    const command = new RejectSkillCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Determines the details for the room from which a skill request was invoked. This
   *          operation is used by skill developers.</p>
   *          <p>To query ResolveRoom from an Alexa skill, the skill ID needs to be authorized. When
   *          the skill is using an AWS Lambda function, the skill is automatically authorized when you
   *          publish your skill as a private skill to your AWS account. Skills that are hosted using a
   *          custom web service must be manually authorized. To get your skill authorized, contact AWS
   *          Support with your AWS account ID that queries the ResolveRoom API and skill ID. </p>
   */
  public resolveRoom(args: ResolveRoomCommandInput, options?: __HttpHandlerOptions): Promise<ResolveRoomCommandOutput>;
  public resolveRoom(args: ResolveRoomCommandInput, cb: (err: any, data?: ResolveRoomCommandOutput) => void): void;
  public resolveRoom(
    args: ResolveRoomCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResolveRoomCommandOutput) => void
  ): void;
  public resolveRoom(
    args: ResolveRoomCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ResolveRoomCommandOutput) => void),
    cb?: (err: any, data?: ResolveRoomCommandOutput) => void
  ): Promise<ResolveRoomCommandOutput> | void {
    const command = new ResolveRoomCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Revokes an invitation and invalidates the enrollment URL.</p>
   */
  public revokeInvitation(
    args: RevokeInvitationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RevokeInvitationCommandOutput>;
  public revokeInvitation(
    args: RevokeInvitationCommandInput,
    cb: (err: any, data?: RevokeInvitationCommandOutput) => void
  ): void;
  public revokeInvitation(
    args: RevokeInvitationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RevokeInvitationCommandOutput) => void
  ): void;
  public revokeInvitation(
    args: RevokeInvitationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RevokeInvitationCommandOutput) => void),
    cb?: (err: any, data?: RevokeInvitationCommandOutput) => void
  ): Promise<RevokeInvitationCommandOutput> | void {
    const command = new RevokeInvitationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Searches address books and lists the ones that meet a set of filter and sort
   *          criteria.</p>
   */
  public searchAddressBooks(
    args: SearchAddressBooksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchAddressBooksCommandOutput>;
  public searchAddressBooks(
    args: SearchAddressBooksCommandInput,
    cb: (err: any, data?: SearchAddressBooksCommandOutput) => void
  ): void;
  public searchAddressBooks(
    args: SearchAddressBooksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchAddressBooksCommandOutput) => void
  ): void;
  public searchAddressBooks(
    args: SearchAddressBooksCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SearchAddressBooksCommandOutput) => void),
    cb?: (err: any, data?: SearchAddressBooksCommandOutput) => void
  ): Promise<SearchAddressBooksCommandOutput> | void {
    const command = new SearchAddressBooksCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Searches contacts and lists the ones that meet a set of filter and sort
   *          criteria.</p>
   */
  public searchContacts(
    args: SearchContactsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchContactsCommandOutput>;
  public searchContacts(
    args: SearchContactsCommandInput,
    cb: (err: any, data?: SearchContactsCommandOutput) => void
  ): void;
  public searchContacts(
    args: SearchContactsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchContactsCommandOutput) => void
  ): void;
  public searchContacts(
    args: SearchContactsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SearchContactsCommandOutput) => void),
    cb?: (err: any, data?: SearchContactsCommandOutput) => void
  ): Promise<SearchContactsCommandOutput> | void {
    const command = new SearchContactsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Searches devices and lists the ones that meet a set of filter criteria.</p>
   */
  public searchDevices(
    args: SearchDevicesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchDevicesCommandOutput>;
  public searchDevices(
    args: SearchDevicesCommandInput,
    cb: (err: any, data?: SearchDevicesCommandOutput) => void
  ): void;
  public searchDevices(
    args: SearchDevicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchDevicesCommandOutput) => void
  ): void;
  public searchDevices(
    args: SearchDevicesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SearchDevicesCommandOutput) => void),
    cb?: (err: any, data?: SearchDevicesCommandOutput) => void
  ): Promise<SearchDevicesCommandOutput> | void {
    const command = new SearchDevicesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Searches network profiles and lists the ones that meet a set of filter and sort
   *          criteria.</p>
   */
  public searchNetworkProfiles(
    args: SearchNetworkProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchNetworkProfilesCommandOutput>;
  public searchNetworkProfiles(
    args: SearchNetworkProfilesCommandInput,
    cb: (err: any, data?: SearchNetworkProfilesCommandOutput) => void
  ): void;
  public searchNetworkProfiles(
    args: SearchNetworkProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchNetworkProfilesCommandOutput) => void
  ): void;
  public searchNetworkProfiles(
    args: SearchNetworkProfilesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SearchNetworkProfilesCommandOutput) => void),
    cb?: (err: any, data?: SearchNetworkProfilesCommandOutput) => void
  ): Promise<SearchNetworkProfilesCommandOutput> | void {
    const command = new SearchNetworkProfilesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Searches room profiles and lists the ones that meet a set of filter
   *          criteria.</p>
   */
  public searchProfiles(
    args: SearchProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchProfilesCommandOutput>;
  public searchProfiles(
    args: SearchProfilesCommandInput,
    cb: (err: any, data?: SearchProfilesCommandOutput) => void
  ): void;
  public searchProfiles(
    args: SearchProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchProfilesCommandOutput) => void
  ): void;
  public searchProfiles(
    args: SearchProfilesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SearchProfilesCommandOutput) => void),
    cb?: (err: any, data?: SearchProfilesCommandOutput) => void
  ): Promise<SearchProfilesCommandOutput> | void {
    const command = new SearchProfilesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Searches rooms and lists the ones that meet a set of filter and sort
   *          criteria.</p>
   */
  public searchRooms(args: SearchRoomsCommandInput, options?: __HttpHandlerOptions): Promise<SearchRoomsCommandOutput>;
  public searchRooms(args: SearchRoomsCommandInput, cb: (err: any, data?: SearchRoomsCommandOutput) => void): void;
  public searchRooms(
    args: SearchRoomsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchRoomsCommandOutput) => void
  ): void;
  public searchRooms(
    args: SearchRoomsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SearchRoomsCommandOutput) => void),
    cb?: (err: any, data?: SearchRoomsCommandOutput) => void
  ): Promise<SearchRoomsCommandOutput> | void {
    const command = new SearchRoomsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Searches skill groups and lists the ones that meet a set of filter and sort
   *          criteria.</p>
   */
  public searchSkillGroups(
    args: SearchSkillGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchSkillGroupsCommandOutput>;
  public searchSkillGroups(
    args: SearchSkillGroupsCommandInput,
    cb: (err: any, data?: SearchSkillGroupsCommandOutput) => void
  ): void;
  public searchSkillGroups(
    args: SearchSkillGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchSkillGroupsCommandOutput) => void
  ): void;
  public searchSkillGroups(
    args: SearchSkillGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SearchSkillGroupsCommandOutput) => void),
    cb?: (err: any, data?: SearchSkillGroupsCommandOutput) => void
  ): Promise<SearchSkillGroupsCommandOutput> | void {
    const command = new SearchSkillGroupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Searches users and lists the ones that meet a set of filter and sort
   *          criteria.</p>
   */
  public searchUsers(args: SearchUsersCommandInput, options?: __HttpHandlerOptions): Promise<SearchUsersCommandOutput>;
  public searchUsers(args: SearchUsersCommandInput, cb: (err: any, data?: SearchUsersCommandOutput) => void): void;
  public searchUsers(
    args: SearchUsersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchUsersCommandOutput) => void
  ): void;
  public searchUsers(
    args: SearchUsersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SearchUsersCommandOutput) => void),
    cb?: (err: any, data?: SearchUsersCommandOutput) => void
  ): Promise<SearchUsersCommandOutput> | void {
    const command = new SearchUsersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Triggers an asynchronous flow to send text, SSML, or audio announcements to rooms that
   *          are identified by a search or filter. </p>
   */
  public sendAnnouncement(
    args: SendAnnouncementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendAnnouncementCommandOutput>;
  public sendAnnouncement(
    args: SendAnnouncementCommandInput,
    cb: (err: any, data?: SendAnnouncementCommandOutput) => void
  ): void;
  public sendAnnouncement(
    args: SendAnnouncementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendAnnouncementCommandOutput) => void
  ): void;
  public sendAnnouncement(
    args: SendAnnouncementCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SendAnnouncementCommandOutput) => void),
    cb?: (err: any, data?: SendAnnouncementCommandOutput) => void
  ): Promise<SendAnnouncementCommandOutput> | void {
    const command = new SendAnnouncementCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Sends an enrollment invitation email with a URL to a user. The URL is valid for 30
   *          days or until you call this operation again, whichever comes first. </p>
   */
  public sendInvitation(
    args: SendInvitationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendInvitationCommandOutput>;
  public sendInvitation(
    args: SendInvitationCommandInput,
    cb: (err: any, data?: SendInvitationCommandOutput) => void
  ): void;
  public sendInvitation(
    args: SendInvitationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendInvitationCommandOutput) => void
  ): void;
  public sendInvitation(
    args: SendInvitationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SendInvitationCommandOutput) => void),
    cb?: (err: any, data?: SendInvitationCommandOutput) => void
  ): Promise<SendInvitationCommandOutput> | void {
    const command = new SendInvitationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Resets a device and its account to the known default settings. This clears all
   *          information and settings set by previous users in the following ways:</p>
   *          <ul>
   *             <li>
   *                <p>Bluetooth - This unpairs all bluetooth devices paired with your echo
   *                device.</p>
   *             </li>
   *             <li>
   *                <p>Volume - This resets the echo device's volume to the default value.</p>
   *             </li>
   *             <li>
   *                <p>Notifications - This clears all notifications from your echo device.</p>
   *             </li>
   *             <li>
   *                <p>Lists - This clears all to-do items from your echo device.</p>
   *             </li>
   *             <li>
   *                <p>Settings - This internally syncs the room's profile (if the device is assigned to
   *                a room), contacts, address books, delegation access for account linking, and
   *                communications (if enabled on the room profile).</p>
   *             </li>
   *          </ul>
   */
  public startDeviceSync(
    args: StartDeviceSyncCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartDeviceSyncCommandOutput>;
  public startDeviceSync(
    args: StartDeviceSyncCommandInput,
    cb: (err: any, data?: StartDeviceSyncCommandOutput) => void
  ): void;
  public startDeviceSync(
    args: StartDeviceSyncCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartDeviceSyncCommandOutput) => void
  ): void;
  public startDeviceSync(
    args: StartDeviceSyncCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartDeviceSyncCommandOutput) => void),
    cb?: (err: any, data?: StartDeviceSyncCommandOutput) => void
  ): Promise<StartDeviceSyncCommandOutput> | void {
    const command = new StartDeviceSyncCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Initiates the discovery of any smart home appliances associated with the
   *          room.</p>
   */
  public startSmartHomeApplianceDiscovery(
    args: StartSmartHomeApplianceDiscoveryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartSmartHomeApplianceDiscoveryCommandOutput>;
  public startSmartHomeApplianceDiscovery(
    args: StartSmartHomeApplianceDiscoveryCommandInput,
    cb: (err: any, data?: StartSmartHomeApplianceDiscoveryCommandOutput) => void
  ): void;
  public startSmartHomeApplianceDiscovery(
    args: StartSmartHomeApplianceDiscoveryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartSmartHomeApplianceDiscoveryCommandOutput) => void
  ): void;
  public startSmartHomeApplianceDiscovery(
    args: StartSmartHomeApplianceDiscoveryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartSmartHomeApplianceDiscoveryCommandOutput) => void),
    cb?: (err: any, data?: StartSmartHomeApplianceDiscoveryCommandOutput) => void
  ): Promise<StartSmartHomeApplianceDiscoveryCommandOutput> | void {
    const command = new StartSmartHomeApplianceDiscoveryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Adds metadata tags to a specified resource.</p>
   */
  public tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  public tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes metadata tags from a specified resource.</p>
   */
  public untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  public untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates address book details by the address book ARN.</p>
   */
  public updateAddressBook(
    args: UpdateAddressBookCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAddressBookCommandOutput>;
  public updateAddressBook(
    args: UpdateAddressBookCommandInput,
    cb: (err: any, data?: UpdateAddressBookCommandOutput) => void
  ): void;
  public updateAddressBook(
    args: UpdateAddressBookCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAddressBookCommandOutput) => void
  ): void;
  public updateAddressBook(
    args: UpdateAddressBookCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateAddressBookCommandOutput) => void),
    cb?: (err: any, data?: UpdateAddressBookCommandOutput) => void
  ): Promise<UpdateAddressBookCommandOutput> | void {
    const command = new UpdateAddressBookCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the configuration of the report delivery schedule with the specified schedule
   *          ARN.</p>
   */
  public updateBusinessReportSchedule(
    args: UpdateBusinessReportScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBusinessReportScheduleCommandOutput>;
  public updateBusinessReportSchedule(
    args: UpdateBusinessReportScheduleCommandInput,
    cb: (err: any, data?: UpdateBusinessReportScheduleCommandOutput) => void
  ): void;
  public updateBusinessReportSchedule(
    args: UpdateBusinessReportScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBusinessReportScheduleCommandOutput) => void
  ): void;
  public updateBusinessReportSchedule(
    args: UpdateBusinessReportScheduleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateBusinessReportScheduleCommandOutput) => void),
    cb?: (err: any, data?: UpdateBusinessReportScheduleCommandOutput) => void
  ): Promise<UpdateBusinessReportScheduleCommandOutput> | void {
    const command = new UpdateBusinessReportScheduleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates an existing conference provider's settings.</p>
   */
  public updateConferenceProvider(
    args: UpdateConferenceProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConferenceProviderCommandOutput>;
  public updateConferenceProvider(
    args: UpdateConferenceProviderCommandInput,
    cb: (err: any, data?: UpdateConferenceProviderCommandOutput) => void
  ): void;
  public updateConferenceProvider(
    args: UpdateConferenceProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConferenceProviderCommandOutput) => void
  ): void;
  public updateConferenceProvider(
    args: UpdateConferenceProviderCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateConferenceProviderCommandOutput) => void),
    cb?: (err: any, data?: UpdateConferenceProviderCommandOutput) => void
  ): Promise<UpdateConferenceProviderCommandOutput> | void {
    const command = new UpdateConferenceProviderCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the contact details by the contact ARN.</p>
   */
  public updateContact(
    args: UpdateContactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateContactCommandOutput>;
  public updateContact(
    args: UpdateContactCommandInput,
    cb: (err: any, data?: UpdateContactCommandOutput) => void
  ): void;
  public updateContact(
    args: UpdateContactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateContactCommandOutput) => void
  ): void;
  public updateContact(
    args: UpdateContactCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateContactCommandOutput) => void),
    cb?: (err: any, data?: UpdateContactCommandOutput) => void
  ): Promise<UpdateContactCommandOutput> | void {
    const command = new UpdateContactCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the device name by device ARN.</p>
   */
  public updateDevice(
    args: UpdateDeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDeviceCommandOutput>;
  public updateDevice(args: UpdateDeviceCommandInput, cb: (err: any, data?: UpdateDeviceCommandOutput) => void): void;
  public updateDevice(
    args: UpdateDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDeviceCommandOutput) => void
  ): void;
  public updateDevice(
    args: UpdateDeviceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDeviceCommandOutput) => void),
    cb?: (err: any, data?: UpdateDeviceCommandOutput) => void
  ): Promise<UpdateDeviceCommandOutput> | void {
    const command = new UpdateDeviceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the details of a gateway. If any optional field is not provided, the existing
   *          corresponding value is left unmodified.</p>
   */
  public updateGateway(
    args: UpdateGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateGatewayCommandOutput>;
  public updateGateway(
    args: UpdateGatewayCommandInput,
    cb: (err: any, data?: UpdateGatewayCommandOutput) => void
  ): void;
  public updateGateway(
    args: UpdateGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGatewayCommandOutput) => void
  ): void;
  public updateGateway(
    args: UpdateGatewayCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateGatewayCommandOutput) => void),
    cb?: (err: any, data?: UpdateGatewayCommandOutput) => void
  ): Promise<UpdateGatewayCommandOutput> | void {
    const command = new UpdateGatewayCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the details of a gateway group. If any optional field is not provided, the
   *          existing corresponding value is left unmodified.</p>
   */
  public updateGatewayGroup(
    args: UpdateGatewayGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateGatewayGroupCommandOutput>;
  public updateGatewayGroup(
    args: UpdateGatewayGroupCommandInput,
    cb: (err: any, data?: UpdateGatewayGroupCommandOutput) => void
  ): void;
  public updateGatewayGroup(
    args: UpdateGatewayGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGatewayGroupCommandOutput) => void
  ): void;
  public updateGatewayGroup(
    args: UpdateGatewayGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateGatewayGroupCommandOutput) => void),
    cb?: (err: any, data?: UpdateGatewayGroupCommandOutput) => void
  ): Promise<UpdateGatewayGroupCommandOutput> | void {
    const command = new UpdateGatewayGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates a network profile by the network profile ARN.</p>
   */
  public updateNetworkProfile(
    args: UpdateNetworkProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateNetworkProfileCommandOutput>;
  public updateNetworkProfile(
    args: UpdateNetworkProfileCommandInput,
    cb: (err: any, data?: UpdateNetworkProfileCommandOutput) => void
  ): void;
  public updateNetworkProfile(
    args: UpdateNetworkProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateNetworkProfileCommandOutput) => void
  ): void;
  public updateNetworkProfile(
    args: UpdateNetworkProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateNetworkProfileCommandOutput) => void),
    cb?: (err: any, data?: UpdateNetworkProfileCommandOutput) => void
  ): Promise<UpdateNetworkProfileCommandOutput> | void {
    const command = new UpdateNetworkProfileCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates an existing room profile by room profile ARN.</p>
   */
  public updateProfile(
    args: UpdateProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateProfileCommandOutput>;
  public updateProfile(
    args: UpdateProfileCommandInput,
    cb: (err: any, data?: UpdateProfileCommandOutput) => void
  ): void;
  public updateProfile(
    args: UpdateProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateProfileCommandOutput) => void
  ): void;
  public updateProfile(
    args: UpdateProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateProfileCommandOutput) => void),
    cb?: (err: any, data?: UpdateProfileCommandOutput) => void
  ): Promise<UpdateProfileCommandOutput> | void {
    const command = new UpdateProfileCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates room details by room ARN.</p>
   */
  public updateRoom(args: UpdateRoomCommandInput, options?: __HttpHandlerOptions): Promise<UpdateRoomCommandOutput>;
  public updateRoom(args: UpdateRoomCommandInput, cb: (err: any, data?: UpdateRoomCommandOutput) => void): void;
  public updateRoom(
    args: UpdateRoomCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRoomCommandOutput) => void
  ): void;
  public updateRoom(
    args: UpdateRoomCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateRoomCommandOutput) => void),
    cb?: (err: any, data?: UpdateRoomCommandOutput) => void
  ): Promise<UpdateRoomCommandOutput> | void {
    const command = new UpdateRoomCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates skill group details by skill group ARN.</p>
   */
  public updateSkillGroup(
    args: UpdateSkillGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSkillGroupCommandOutput>;
  public updateSkillGroup(
    args: UpdateSkillGroupCommandInput,
    cb: (err: any, data?: UpdateSkillGroupCommandOutput) => void
  ): void;
  public updateSkillGroup(
    args: UpdateSkillGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSkillGroupCommandOutput) => void
  ): void;
  public updateSkillGroup(
    args: UpdateSkillGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateSkillGroupCommandOutput) => void),
    cb?: (err: any, data?: UpdateSkillGroupCommandOutput) => void
  ): Promise<UpdateSkillGroupCommandOutput> | void {
    const command = new UpdateSkillGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
