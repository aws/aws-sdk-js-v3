import { AlexaForBusinessClient } from "./AlexaForBusinessClient";
import { AlreadyExistsException } from "./types/AlreadyExistsException";
import { ApproveSkillInput } from "./types/ApproveSkillInput";
import { ApproveSkillOutput } from "./types/ApproveSkillOutput";
import { AssociateContactWithAddressBookInput } from "./types/AssociateContactWithAddressBookInput";
import { AssociateContactWithAddressBookOutput } from "./types/AssociateContactWithAddressBookOutput";
import { AssociateDeviceWithNetworkProfileInput } from "./types/AssociateDeviceWithNetworkProfileInput";
import { AssociateDeviceWithNetworkProfileOutput } from "./types/AssociateDeviceWithNetworkProfileOutput";
import { AssociateDeviceWithRoomInput } from "./types/AssociateDeviceWithRoomInput";
import { AssociateDeviceWithRoomOutput } from "./types/AssociateDeviceWithRoomOutput";
import { AssociateSkillGroupWithRoomInput } from "./types/AssociateSkillGroupWithRoomInput";
import { AssociateSkillGroupWithRoomOutput } from "./types/AssociateSkillGroupWithRoomOutput";
import { AssociateSkillWithSkillGroupInput } from "./types/AssociateSkillWithSkillGroupInput";
import { AssociateSkillWithSkillGroupOutput } from "./types/AssociateSkillWithSkillGroupOutput";
import { AssociateSkillWithUsersInput } from "./types/AssociateSkillWithUsersInput";
import { AssociateSkillWithUsersOutput } from "./types/AssociateSkillWithUsersOutput";
import { ConcurrentModificationException } from "./types/ConcurrentModificationException";
import { CreateAddressBookInput } from "./types/CreateAddressBookInput";
import { CreateAddressBookOutput } from "./types/CreateAddressBookOutput";
import { CreateBusinessReportScheduleInput } from "./types/CreateBusinessReportScheduleInput";
import { CreateBusinessReportScheduleOutput } from "./types/CreateBusinessReportScheduleOutput";
import { CreateConferenceProviderInput } from "./types/CreateConferenceProviderInput";
import { CreateConferenceProviderOutput } from "./types/CreateConferenceProviderOutput";
import { CreateContactInput } from "./types/CreateContactInput";
import { CreateContactOutput } from "./types/CreateContactOutput";
import { CreateGatewayGroupInput } from "./types/CreateGatewayGroupInput";
import { CreateGatewayGroupOutput } from "./types/CreateGatewayGroupOutput";
import { CreateNetworkProfileInput } from "./types/CreateNetworkProfileInput";
import { CreateNetworkProfileOutput } from "./types/CreateNetworkProfileOutput";
import { CreateProfileInput } from "./types/CreateProfileInput";
import { CreateProfileOutput } from "./types/CreateProfileOutput";
import { CreateRoomInput } from "./types/CreateRoomInput";
import { CreateRoomOutput } from "./types/CreateRoomOutput";
import { CreateSkillGroupInput } from "./types/CreateSkillGroupInput";
import { CreateSkillGroupOutput } from "./types/CreateSkillGroupOutput";
import { CreateUserInput } from "./types/CreateUserInput";
import { CreateUserOutput } from "./types/CreateUserOutput";
import { DeleteAddressBookInput } from "./types/DeleteAddressBookInput";
import { DeleteAddressBookOutput } from "./types/DeleteAddressBookOutput";
import { DeleteBusinessReportScheduleInput } from "./types/DeleteBusinessReportScheduleInput";
import { DeleteBusinessReportScheduleOutput } from "./types/DeleteBusinessReportScheduleOutput";
import { DeleteConferenceProviderInput } from "./types/DeleteConferenceProviderInput";
import { DeleteConferenceProviderOutput } from "./types/DeleteConferenceProviderOutput";
import { DeleteContactInput } from "./types/DeleteContactInput";
import { DeleteContactOutput } from "./types/DeleteContactOutput";
import { DeleteDeviceInput } from "./types/DeleteDeviceInput";
import { DeleteDeviceOutput } from "./types/DeleteDeviceOutput";
import { DeleteDeviceUsageDataInput } from "./types/DeleteDeviceUsageDataInput";
import { DeleteDeviceUsageDataOutput } from "./types/DeleteDeviceUsageDataOutput";
import { DeleteGatewayGroupInput } from "./types/DeleteGatewayGroupInput";
import { DeleteGatewayGroupOutput } from "./types/DeleteGatewayGroupOutput";
import { DeleteNetworkProfileInput } from "./types/DeleteNetworkProfileInput";
import { DeleteNetworkProfileOutput } from "./types/DeleteNetworkProfileOutput";
import { DeleteProfileInput } from "./types/DeleteProfileInput";
import { DeleteProfileOutput } from "./types/DeleteProfileOutput";
import { DeleteRoomInput } from "./types/DeleteRoomInput";
import { DeleteRoomOutput } from "./types/DeleteRoomOutput";
import { DeleteRoomSkillParameterInput } from "./types/DeleteRoomSkillParameterInput";
import { DeleteRoomSkillParameterOutput } from "./types/DeleteRoomSkillParameterOutput";
import { DeleteSkillAuthorizationInput } from "./types/DeleteSkillAuthorizationInput";
import { DeleteSkillAuthorizationOutput } from "./types/DeleteSkillAuthorizationOutput";
import { DeleteSkillGroupInput } from "./types/DeleteSkillGroupInput";
import { DeleteSkillGroupOutput } from "./types/DeleteSkillGroupOutput";
import { DeleteUserInput } from "./types/DeleteUserInput";
import { DeleteUserOutput } from "./types/DeleteUserOutput";
import { DeviceNotRegisteredException } from "./types/DeviceNotRegisteredException";
import { DisassociateContactFromAddressBookInput } from "./types/DisassociateContactFromAddressBookInput";
import { DisassociateContactFromAddressBookOutput } from "./types/DisassociateContactFromAddressBookOutput";
import { DisassociateDeviceFromRoomInput } from "./types/DisassociateDeviceFromRoomInput";
import { DisassociateDeviceFromRoomOutput } from "./types/DisassociateDeviceFromRoomOutput";
import { DisassociateSkillFromSkillGroupInput } from "./types/DisassociateSkillFromSkillGroupInput";
import { DisassociateSkillFromSkillGroupOutput } from "./types/DisassociateSkillFromSkillGroupOutput";
import { DisassociateSkillFromUsersInput } from "./types/DisassociateSkillFromUsersInput";
import { DisassociateSkillFromUsersOutput } from "./types/DisassociateSkillFromUsersOutput";
import { DisassociateSkillGroupFromRoomInput } from "./types/DisassociateSkillGroupFromRoomInput";
import { DisassociateSkillGroupFromRoomOutput } from "./types/DisassociateSkillGroupFromRoomOutput";
import { ForgetSmartHomeAppliancesInput } from "./types/ForgetSmartHomeAppliancesInput";
import { ForgetSmartHomeAppliancesOutput } from "./types/ForgetSmartHomeAppliancesOutput";
import { GetAddressBookInput } from "./types/GetAddressBookInput";
import { GetAddressBookOutput } from "./types/GetAddressBookOutput";
import { GetConferencePreferenceInput } from "./types/GetConferencePreferenceInput";
import { GetConferencePreferenceOutput } from "./types/GetConferencePreferenceOutput";
import { GetConferenceProviderInput } from "./types/GetConferenceProviderInput";
import { GetConferenceProviderOutput } from "./types/GetConferenceProviderOutput";
import { GetContactInput } from "./types/GetContactInput";
import { GetContactOutput } from "./types/GetContactOutput";
import { GetDeviceInput } from "./types/GetDeviceInput";
import { GetDeviceOutput } from "./types/GetDeviceOutput";
import { GetGatewayGroupInput } from "./types/GetGatewayGroupInput";
import { GetGatewayGroupOutput } from "./types/GetGatewayGroupOutput";
import { GetGatewayInput } from "./types/GetGatewayInput";
import { GetGatewayOutput } from "./types/GetGatewayOutput";
import { GetInvitationConfigurationInput } from "./types/GetInvitationConfigurationInput";
import { GetInvitationConfigurationOutput } from "./types/GetInvitationConfigurationOutput";
import { GetNetworkProfileInput } from "./types/GetNetworkProfileInput";
import { GetNetworkProfileOutput } from "./types/GetNetworkProfileOutput";
import { GetProfileInput } from "./types/GetProfileInput";
import { GetProfileOutput } from "./types/GetProfileOutput";
import { GetRoomInput } from "./types/GetRoomInput";
import { GetRoomOutput } from "./types/GetRoomOutput";
import { GetRoomSkillParameterInput } from "./types/GetRoomSkillParameterInput";
import { GetRoomSkillParameterOutput } from "./types/GetRoomSkillParameterOutput";
import { GetSkillGroupInput } from "./types/GetSkillGroupInput";
import { GetSkillGroupOutput } from "./types/GetSkillGroupOutput";
import { InvalidCertificateAuthorityException } from "./types/InvalidCertificateAuthorityException";
import { InvalidDeviceException } from "./types/InvalidDeviceException";
import { InvalidSecretsManagerResourceException } from "./types/InvalidSecretsManagerResourceException";
import { InvalidServiceLinkedRoleStateException } from "./types/InvalidServiceLinkedRoleStateException";
import { InvalidUserStatusException } from "./types/InvalidUserStatusException";
import { LimitExceededException } from "./types/LimitExceededException";
import { ListBusinessReportSchedulesInput } from "./types/ListBusinessReportSchedulesInput";
import { ListBusinessReportSchedulesOutput } from "./types/ListBusinessReportSchedulesOutput";
import { ListConferenceProvidersInput } from "./types/ListConferenceProvidersInput";
import { ListConferenceProvidersOutput } from "./types/ListConferenceProvidersOutput";
import { ListDeviceEventsInput } from "./types/ListDeviceEventsInput";
import { ListDeviceEventsOutput } from "./types/ListDeviceEventsOutput";
import { ListGatewayGroupsInput } from "./types/ListGatewayGroupsInput";
import { ListGatewayGroupsOutput } from "./types/ListGatewayGroupsOutput";
import { ListGatewaysInput } from "./types/ListGatewaysInput";
import { ListGatewaysOutput } from "./types/ListGatewaysOutput";
import { ListSkillsInput } from "./types/ListSkillsInput";
import { ListSkillsOutput } from "./types/ListSkillsOutput";
import { ListSkillsStoreCategoriesInput } from "./types/ListSkillsStoreCategoriesInput";
import { ListSkillsStoreCategoriesOutput } from "./types/ListSkillsStoreCategoriesOutput";
import { ListSkillsStoreSkillsByCategoryInput } from "./types/ListSkillsStoreSkillsByCategoryInput";
import { ListSkillsStoreSkillsByCategoryOutput } from "./types/ListSkillsStoreSkillsByCategoryOutput";
import { ListSmartHomeAppliancesInput } from "./types/ListSmartHomeAppliancesInput";
import { ListSmartHomeAppliancesOutput } from "./types/ListSmartHomeAppliancesOutput";
import { ListTagsInput } from "./types/ListTagsInput";
import { ListTagsOutput } from "./types/ListTagsOutput";
import { NameInUseException } from "./types/NameInUseException";
import { NotFoundException } from "./types/NotFoundException";
import { PutConferencePreferenceInput } from "./types/PutConferencePreferenceInput";
import { PutConferencePreferenceOutput } from "./types/PutConferencePreferenceOutput";
import { PutInvitationConfigurationInput } from "./types/PutInvitationConfigurationInput";
import { PutInvitationConfigurationOutput } from "./types/PutInvitationConfigurationOutput";
import { PutRoomSkillParameterInput } from "./types/PutRoomSkillParameterInput";
import { PutRoomSkillParameterOutput } from "./types/PutRoomSkillParameterOutput";
import { PutSkillAuthorizationInput } from "./types/PutSkillAuthorizationInput";
import { PutSkillAuthorizationOutput } from "./types/PutSkillAuthorizationOutput";
import { RegisterAVSDeviceInput } from "./types/RegisterAVSDeviceInput";
import { RegisterAVSDeviceOutput } from "./types/RegisterAVSDeviceOutput";
import { RejectSkillInput } from "./types/RejectSkillInput";
import { RejectSkillOutput } from "./types/RejectSkillOutput";
import { ResolveRoomInput } from "./types/ResolveRoomInput";
import { ResolveRoomOutput } from "./types/ResolveRoomOutput";
import { ResourceAssociatedException } from "./types/ResourceAssociatedException";
import { ResourceInUseException } from "./types/ResourceInUseException";
import { RevokeInvitationInput } from "./types/RevokeInvitationInput";
import { RevokeInvitationOutput } from "./types/RevokeInvitationOutput";
import { SearchAddressBooksInput } from "./types/SearchAddressBooksInput";
import { SearchAddressBooksOutput } from "./types/SearchAddressBooksOutput";
import { SearchContactsInput } from "./types/SearchContactsInput";
import { SearchContactsOutput } from "./types/SearchContactsOutput";
import { SearchDevicesInput } from "./types/SearchDevicesInput";
import { SearchDevicesOutput } from "./types/SearchDevicesOutput";
import { SearchNetworkProfilesInput } from "./types/SearchNetworkProfilesInput";
import { SearchNetworkProfilesOutput } from "./types/SearchNetworkProfilesOutput";
import { SearchProfilesInput } from "./types/SearchProfilesInput";
import { SearchProfilesOutput } from "./types/SearchProfilesOutput";
import { SearchRoomsInput } from "./types/SearchRoomsInput";
import { SearchRoomsOutput } from "./types/SearchRoomsOutput";
import { SearchSkillGroupsInput } from "./types/SearchSkillGroupsInput";
import { SearchSkillGroupsOutput } from "./types/SearchSkillGroupsOutput";
import { SearchUsersInput } from "./types/SearchUsersInput";
import { SearchUsersOutput } from "./types/SearchUsersOutput";
import { SendAnnouncementInput } from "./types/SendAnnouncementInput";
import { SendAnnouncementOutput } from "./types/SendAnnouncementOutput";
import { SendInvitationInput } from "./types/SendInvitationInput";
import { SendInvitationOutput } from "./types/SendInvitationOutput";
import { SkillNotLinkedException } from "./types/SkillNotLinkedException";
import { StartDeviceSyncInput } from "./types/StartDeviceSyncInput";
import { StartDeviceSyncOutput } from "./types/StartDeviceSyncOutput";
import { StartSmartHomeApplianceDiscoveryInput } from "./types/StartSmartHomeApplianceDiscoveryInput";
import { StartSmartHomeApplianceDiscoveryOutput } from "./types/StartSmartHomeApplianceDiscoveryOutput";
import { TagResourceInput } from "./types/TagResourceInput";
import { TagResourceOutput } from "./types/TagResourceOutput";
import { UnauthorizedException } from "./types/UnauthorizedException";
import { UntagResourceInput } from "./types/UntagResourceInput";
import { UntagResourceOutput } from "./types/UntagResourceOutput";
import { UpdateAddressBookInput } from "./types/UpdateAddressBookInput";
import { UpdateAddressBookOutput } from "./types/UpdateAddressBookOutput";
import { UpdateBusinessReportScheduleInput } from "./types/UpdateBusinessReportScheduleInput";
import { UpdateBusinessReportScheduleOutput } from "./types/UpdateBusinessReportScheduleOutput";
import { UpdateConferenceProviderInput } from "./types/UpdateConferenceProviderInput";
import { UpdateConferenceProviderOutput } from "./types/UpdateConferenceProviderOutput";
import { UpdateContactInput } from "./types/UpdateContactInput";
import { UpdateContactOutput } from "./types/UpdateContactOutput";
import { UpdateDeviceInput } from "./types/UpdateDeviceInput";
import { UpdateDeviceOutput } from "./types/UpdateDeviceOutput";
import { UpdateGatewayGroupInput } from "./types/UpdateGatewayGroupInput";
import { UpdateGatewayGroupOutput } from "./types/UpdateGatewayGroupOutput";
import { UpdateGatewayInput } from "./types/UpdateGatewayInput";
import { UpdateGatewayOutput } from "./types/UpdateGatewayOutput";
import { UpdateNetworkProfileInput } from "./types/UpdateNetworkProfileInput";
import { UpdateNetworkProfileOutput } from "./types/UpdateNetworkProfileOutput";
import { UpdateProfileInput } from "./types/UpdateProfileInput";
import { UpdateProfileOutput } from "./types/UpdateProfileOutput";
import { UpdateRoomInput } from "./types/UpdateRoomInput";
import { UpdateRoomOutput } from "./types/UpdateRoomOutput";
import { UpdateSkillGroupInput } from "./types/UpdateSkillGroupInput";
import { UpdateSkillGroupOutput } from "./types/UpdateSkillGroupOutput";
import { ApproveSkillCommand } from "./commands/ApproveSkillCommand";
import { AssociateContactWithAddressBookCommand } from "./commands/AssociateContactWithAddressBookCommand";
import { AssociateDeviceWithNetworkProfileCommand } from "./commands/AssociateDeviceWithNetworkProfileCommand";
import { AssociateDeviceWithRoomCommand } from "./commands/AssociateDeviceWithRoomCommand";
import { AssociateSkillGroupWithRoomCommand } from "./commands/AssociateSkillGroupWithRoomCommand";
import { AssociateSkillWithSkillGroupCommand } from "./commands/AssociateSkillWithSkillGroupCommand";
import { AssociateSkillWithUsersCommand } from "./commands/AssociateSkillWithUsersCommand";
import { CreateAddressBookCommand } from "./commands/CreateAddressBookCommand";
import { CreateBusinessReportScheduleCommand } from "./commands/CreateBusinessReportScheduleCommand";
import { CreateConferenceProviderCommand } from "./commands/CreateConferenceProviderCommand";
import { CreateContactCommand } from "./commands/CreateContactCommand";
import { CreateGatewayGroupCommand } from "./commands/CreateGatewayGroupCommand";
import { CreateNetworkProfileCommand } from "./commands/CreateNetworkProfileCommand";
import { CreateProfileCommand } from "./commands/CreateProfileCommand";
import { CreateRoomCommand } from "./commands/CreateRoomCommand";
import { CreateSkillGroupCommand } from "./commands/CreateSkillGroupCommand";
import { CreateUserCommand } from "./commands/CreateUserCommand";
import { DeleteAddressBookCommand } from "./commands/DeleteAddressBookCommand";
import { DeleteBusinessReportScheduleCommand } from "./commands/DeleteBusinessReportScheduleCommand";
import { DeleteConferenceProviderCommand } from "./commands/DeleteConferenceProviderCommand";
import { DeleteContactCommand } from "./commands/DeleteContactCommand";
import { DeleteDeviceCommand } from "./commands/DeleteDeviceCommand";
import { DeleteDeviceUsageDataCommand } from "./commands/DeleteDeviceUsageDataCommand";
import { DeleteGatewayGroupCommand } from "./commands/DeleteGatewayGroupCommand";
import { DeleteNetworkProfileCommand } from "./commands/DeleteNetworkProfileCommand";
import { DeleteProfileCommand } from "./commands/DeleteProfileCommand";
import { DeleteRoomCommand } from "./commands/DeleteRoomCommand";
import { DeleteRoomSkillParameterCommand } from "./commands/DeleteRoomSkillParameterCommand";
import { DeleteSkillAuthorizationCommand } from "./commands/DeleteSkillAuthorizationCommand";
import { DeleteSkillGroupCommand } from "./commands/DeleteSkillGroupCommand";
import { DeleteUserCommand } from "./commands/DeleteUserCommand";
import { DisassociateContactFromAddressBookCommand } from "./commands/DisassociateContactFromAddressBookCommand";
import { DisassociateDeviceFromRoomCommand } from "./commands/DisassociateDeviceFromRoomCommand";
import { DisassociateSkillFromSkillGroupCommand } from "./commands/DisassociateSkillFromSkillGroupCommand";
import { DisassociateSkillFromUsersCommand } from "./commands/DisassociateSkillFromUsersCommand";
import { DisassociateSkillGroupFromRoomCommand } from "./commands/DisassociateSkillGroupFromRoomCommand";
import { ForgetSmartHomeAppliancesCommand } from "./commands/ForgetSmartHomeAppliancesCommand";
import { GetAddressBookCommand } from "./commands/GetAddressBookCommand";
import { GetConferencePreferenceCommand } from "./commands/GetConferencePreferenceCommand";
import { GetConferenceProviderCommand } from "./commands/GetConferenceProviderCommand";
import { GetContactCommand } from "./commands/GetContactCommand";
import { GetDeviceCommand } from "./commands/GetDeviceCommand";
import { GetGatewayCommand } from "./commands/GetGatewayCommand";
import { GetGatewayGroupCommand } from "./commands/GetGatewayGroupCommand";
import { GetInvitationConfigurationCommand } from "./commands/GetInvitationConfigurationCommand";
import { GetNetworkProfileCommand } from "./commands/GetNetworkProfileCommand";
import { GetProfileCommand } from "./commands/GetProfileCommand";
import { GetRoomCommand } from "./commands/GetRoomCommand";
import { GetRoomSkillParameterCommand } from "./commands/GetRoomSkillParameterCommand";
import { GetSkillGroupCommand } from "./commands/GetSkillGroupCommand";
import { ListBusinessReportSchedulesCommand } from "./commands/ListBusinessReportSchedulesCommand";
import { ListConferenceProvidersCommand } from "./commands/ListConferenceProvidersCommand";
import { ListDeviceEventsCommand } from "./commands/ListDeviceEventsCommand";
import { ListGatewayGroupsCommand } from "./commands/ListGatewayGroupsCommand";
import { ListGatewaysCommand } from "./commands/ListGatewaysCommand";
import { ListSkillsCommand } from "./commands/ListSkillsCommand";
import { ListSkillsStoreCategoriesCommand } from "./commands/ListSkillsStoreCategoriesCommand";
import { ListSkillsStoreSkillsByCategoryCommand } from "./commands/ListSkillsStoreSkillsByCategoryCommand";
import { ListSmartHomeAppliancesCommand } from "./commands/ListSmartHomeAppliancesCommand";
import { ListTagsCommand } from "./commands/ListTagsCommand";
import { PutConferencePreferenceCommand } from "./commands/PutConferencePreferenceCommand";
import { PutInvitationConfigurationCommand } from "./commands/PutInvitationConfigurationCommand";
import { PutRoomSkillParameterCommand } from "./commands/PutRoomSkillParameterCommand";
import { PutSkillAuthorizationCommand } from "./commands/PutSkillAuthorizationCommand";
import { RegisterAVSDeviceCommand } from "./commands/RegisterAVSDeviceCommand";
import { RejectSkillCommand } from "./commands/RejectSkillCommand";
import { ResolveRoomCommand } from "./commands/ResolveRoomCommand";
import { RevokeInvitationCommand } from "./commands/RevokeInvitationCommand";
import { SearchAddressBooksCommand } from "./commands/SearchAddressBooksCommand";
import { SearchContactsCommand } from "./commands/SearchContactsCommand";
import { SearchDevicesCommand } from "./commands/SearchDevicesCommand";
import { SearchNetworkProfilesCommand } from "./commands/SearchNetworkProfilesCommand";
import { SearchProfilesCommand } from "./commands/SearchProfilesCommand";
import { SearchRoomsCommand } from "./commands/SearchRoomsCommand";
import { SearchSkillGroupsCommand } from "./commands/SearchSkillGroupsCommand";
import { SearchUsersCommand } from "./commands/SearchUsersCommand";
import { SendAnnouncementCommand } from "./commands/SendAnnouncementCommand";
import { SendInvitationCommand } from "./commands/SendInvitationCommand";
import { StartDeviceSyncCommand } from "./commands/StartDeviceSyncCommand";
import { StartSmartHomeApplianceDiscoveryCommand } from "./commands/StartSmartHomeApplianceDiscoveryCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand } from "./commands/UntagResourceCommand";
import { UpdateAddressBookCommand } from "./commands/UpdateAddressBookCommand";
import { UpdateBusinessReportScheduleCommand } from "./commands/UpdateBusinessReportScheduleCommand";
import { UpdateConferenceProviderCommand } from "./commands/UpdateConferenceProviderCommand";
import { UpdateContactCommand } from "./commands/UpdateContactCommand";
import { UpdateDeviceCommand } from "./commands/UpdateDeviceCommand";
import { UpdateGatewayCommand } from "./commands/UpdateGatewayCommand";
import { UpdateGatewayGroupCommand } from "./commands/UpdateGatewayGroupCommand";
import { UpdateNetworkProfileCommand } from "./commands/UpdateNetworkProfileCommand";
import { UpdateProfileCommand } from "./commands/UpdateProfileCommand";
import { UpdateRoomCommand } from "./commands/UpdateRoomCommand";
import { UpdateSkillGroupCommand } from "./commands/UpdateSkillGroupCommand";

export class AlexaForBusiness extends AlexaForBusinessClient {
  /**
   * <p>Associates a skill with the organization under the customer's AWS account. If a skill is private, the user implicitly accepts access to this skill during enablement.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {LimitExceededException} <p>You are performing an action that would put you beyond your account's limits.</p>
   *   - {NotFoundException} <p>The resource is not found.</p>
   *   - {ConcurrentModificationException} <p>There is a concurrent modification of resources.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public approveSkill(args: ApproveSkillInput): Promise<ApproveSkillOutput>;
  public approveSkill(
    args: ApproveSkillInput,
    cb: (err: any, data?: ApproveSkillOutput) => void
  ): void;
  public approveSkill(
    args: ApproveSkillInput,
    cb?: (err: any, data?: ApproveSkillOutput) => void
  ): Promise<ApproveSkillOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ApproveSkillCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Associates a contact with a given address book.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {LimitExceededException} <p>You are performing an action that would put you beyond your account's limits.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public associateContactWithAddressBook(
    args: AssociateContactWithAddressBookInput
  ): Promise<AssociateContactWithAddressBookOutput>;
  public associateContactWithAddressBook(
    args: AssociateContactWithAddressBookInput,
    cb: (err: any, data?: AssociateContactWithAddressBookOutput) => void
  ): void;
  public associateContactWithAddressBook(
    args: AssociateContactWithAddressBookInput,
    cb?: (err: any, data?: AssociateContactWithAddressBookOutput) => void
  ): Promise<AssociateContactWithAddressBookOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AssociateContactWithAddressBookCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Associates a device with the specified network profile.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource is not found.</p>
   *   - {ConcurrentModificationException} <p>There is a concurrent modification of resources.</p>
   *   - {DeviceNotRegisteredException} <p>The request failed because this device is no longer registered and therefore no longer managed by this account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public associateDeviceWithNetworkProfile(
    args: AssociateDeviceWithNetworkProfileInput
  ): Promise<AssociateDeviceWithNetworkProfileOutput>;
  public associateDeviceWithNetworkProfile(
    args: AssociateDeviceWithNetworkProfileInput,
    cb: (err: any, data?: AssociateDeviceWithNetworkProfileOutput) => void
  ): void;
  public associateDeviceWithNetworkProfile(
    args: AssociateDeviceWithNetworkProfileInput,
    cb?: (err: any, data?: AssociateDeviceWithNetworkProfileOutput) => void
  ): Promise<AssociateDeviceWithNetworkProfileOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AssociateDeviceWithNetworkProfileCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Associates a device with a given room. This applies all the settings from the room profile to the device, and all the skills in any skill groups added to that room. This operation requires the device to be online, or else a manual sync is required. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {LimitExceededException} <p>You are performing an action that would put you beyond your account's limits.</p>
   *   - {ConcurrentModificationException} <p>There is a concurrent modification of resources.</p>
   *   - {DeviceNotRegisteredException} <p>The request failed because this device is no longer registered and therefore no longer managed by this account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public associateDeviceWithRoom(
    args: AssociateDeviceWithRoomInput
  ): Promise<AssociateDeviceWithRoomOutput>;
  public associateDeviceWithRoom(
    args: AssociateDeviceWithRoomInput,
    cb: (err: any, data?: AssociateDeviceWithRoomOutput) => void
  ): void;
  public associateDeviceWithRoom(
    args: AssociateDeviceWithRoomInput,
    cb?: (err: any, data?: AssociateDeviceWithRoomOutput) => void
  ): Promise<AssociateDeviceWithRoomOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AssociateDeviceWithRoomCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Associates a skill group with a given room. This enables all skills in the associated skill group on all devices in the room.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ConcurrentModificationException} <p>There is a concurrent modification of resources.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public associateSkillGroupWithRoom(
    args: AssociateSkillGroupWithRoomInput
  ): Promise<AssociateSkillGroupWithRoomOutput>;
  public associateSkillGroupWithRoom(
    args: AssociateSkillGroupWithRoomInput,
    cb: (err: any, data?: AssociateSkillGroupWithRoomOutput) => void
  ): void;
  public associateSkillGroupWithRoom(
    args: AssociateSkillGroupWithRoomInput,
    cb?: (err: any, data?: AssociateSkillGroupWithRoomOutput) => void
  ): Promise<AssociateSkillGroupWithRoomOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AssociateSkillGroupWithRoomCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Associates a skill with a skill group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ConcurrentModificationException} <p>There is a concurrent modification of resources.</p>
   *   - {NotFoundException} <p>The resource is not found.</p>
   *   - {SkillNotLinkedException} <p>The skill must be linked to a third-party account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public associateSkillWithSkillGroup(
    args: AssociateSkillWithSkillGroupInput
  ): Promise<AssociateSkillWithSkillGroupOutput>;
  public associateSkillWithSkillGroup(
    args: AssociateSkillWithSkillGroupInput,
    cb: (err: any, data?: AssociateSkillWithSkillGroupOutput) => void
  ): void;
  public associateSkillWithSkillGroup(
    args: AssociateSkillWithSkillGroupInput,
    cb?: (err: any, data?: AssociateSkillWithSkillGroupOutput) => void
  ): Promise<AssociateSkillWithSkillGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AssociateSkillWithSkillGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Makes a private skill available for enrolled users to enable on their devices.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ConcurrentModificationException} <p>There is a concurrent modification of resources.</p>
   *   - {NotFoundException} <p>The resource is not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public associateSkillWithUsers(
    args: AssociateSkillWithUsersInput
  ): Promise<AssociateSkillWithUsersOutput>;
  public associateSkillWithUsers(
    args: AssociateSkillWithUsersInput,
    cb: (err: any, data?: AssociateSkillWithUsersOutput) => void
  ): void;
  public associateSkillWithUsers(
    args: AssociateSkillWithUsersInput,
    cb?: (err: any, data?: AssociateSkillWithUsersOutput) => void
  ): Promise<AssociateSkillWithUsersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AssociateSkillWithUsersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an address book with the specified details.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AlreadyExistsException} <p>The resource being created already exists.</p>
   *   - {LimitExceededException} <p>You are performing an action that would put you beyond your account's limits.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createAddressBook(
    args: CreateAddressBookInput
  ): Promise<CreateAddressBookOutput>;
  public createAddressBook(
    args: CreateAddressBookInput,
    cb: (err: any, data?: CreateAddressBookOutput) => void
  ): void;
  public createAddressBook(
    args: CreateAddressBookInput,
    cb?: (err: any, data?: CreateAddressBookOutput) => void
  ): Promise<CreateAddressBookOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateAddressBookCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a recurring schedule for usage reports to deliver to the specified S3 location with a specified daily or weekly interval.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AlreadyExistsException} <p>The resource being created already exists.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createBusinessReportSchedule(
    args: CreateBusinessReportScheduleInput
  ): Promise<CreateBusinessReportScheduleOutput>;
  public createBusinessReportSchedule(
    args: CreateBusinessReportScheduleInput,
    cb: (err: any, data?: CreateBusinessReportScheduleOutput) => void
  ): void;
  public createBusinessReportSchedule(
    args: CreateBusinessReportScheduleInput,
    cb?: (err: any, data?: CreateBusinessReportScheduleOutput) => void
  ): Promise<CreateBusinessReportScheduleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateBusinessReportScheduleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds a new conference provider under the user's AWS account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AlreadyExistsException} <p>The resource being created already exists.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createConferenceProvider(
    args: CreateConferenceProviderInput
  ): Promise<CreateConferenceProviderOutput>;
  public createConferenceProvider(
    args: CreateConferenceProviderInput,
    cb: (err: any, data?: CreateConferenceProviderOutput) => void
  ): void;
  public createConferenceProvider(
    args: CreateConferenceProviderInput,
    cb?: (err: any, data?: CreateConferenceProviderOutput) => void
  ): Promise<CreateConferenceProviderOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateConferenceProviderCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a contact with the specified details.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AlreadyExistsException} <p>The resource being created already exists.</p>
   *   - {LimitExceededException} <p>You are performing an action that would put you beyond your account's limits.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createContact(args: CreateContactInput): Promise<CreateContactOutput>;
  public createContact(
    args: CreateContactInput,
    cb: (err: any, data?: CreateContactOutput) => void
  ): void;
  public createContact(
    args: CreateContactInput,
    cb?: (err: any, data?: CreateContactOutput) => void
  ): Promise<CreateContactOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateContactCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a gateway group with the specified details.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AlreadyExistsException} <p>The resource being created already exists.</p>
   *   - {LimitExceededException} <p>You are performing an action that would put you beyond your account's limits.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createGatewayGroup(
    args: CreateGatewayGroupInput
  ): Promise<CreateGatewayGroupOutput>;
  public createGatewayGroup(
    args: CreateGatewayGroupInput,
    cb: (err: any, data?: CreateGatewayGroupOutput) => void
  ): void;
  public createGatewayGroup(
    args: CreateGatewayGroupInput,
    cb?: (err: any, data?: CreateGatewayGroupOutput) => void
  ): Promise<CreateGatewayGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateGatewayGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a network profile with the specified details.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AlreadyExistsException} <p>The resource being created already exists.</p>
   *   - {LimitExceededException} <p>You are performing an action that would put you beyond your account's limits.</p>
   *   - {ConcurrentModificationException} <p>There is a concurrent modification of resources.</p>
   *   - {InvalidCertificateAuthorityException} <p>The Certificate Authority can't issue or revoke a certificate.</p>
   *   - {InvalidServiceLinkedRoleStateException} <p>The service linked role is locked for deletion. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createNetworkProfile(
    args: CreateNetworkProfileInput
  ): Promise<CreateNetworkProfileOutput>;
  public createNetworkProfile(
    args: CreateNetworkProfileInput,
    cb: (err: any, data?: CreateNetworkProfileOutput) => void
  ): void;
  public createNetworkProfile(
    args: CreateNetworkProfileInput,
    cb?: (err: any, data?: CreateNetworkProfileOutput) => void
  ): Promise<CreateNetworkProfileOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateNetworkProfileCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new room profile with the specified details.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {LimitExceededException} <p>You are performing an action that would put you beyond your account's limits.</p>
   *   - {AlreadyExistsException} <p>The resource being created already exists.</p>
   *   - {ConcurrentModificationException} <p>There is a concurrent modification of resources.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createProfile(args: CreateProfileInput): Promise<CreateProfileOutput>;
  public createProfile(
    args: CreateProfileInput,
    cb: (err: any, data?: CreateProfileOutput) => void
  ): void;
  public createProfile(
    args: CreateProfileInput,
    cb?: (err: any, data?: CreateProfileOutput) => void
  ): Promise<CreateProfileOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateProfileCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a room with the specified details.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AlreadyExistsException} <p>The resource being created already exists.</p>
   *   - {LimitExceededException} <p>You are performing an action that would put you beyond your account's limits.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createRoom(args: CreateRoomInput): Promise<CreateRoomOutput>;
  public createRoom(
    args: CreateRoomInput,
    cb: (err: any, data?: CreateRoomOutput) => void
  ): void;
  public createRoom(
    args: CreateRoomInput,
    cb?: (err: any, data?: CreateRoomOutput) => void
  ): Promise<CreateRoomOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateRoomCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a skill group with a specified name and description.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AlreadyExistsException} <p>The resource being created already exists.</p>
   *   - {LimitExceededException} <p>You are performing an action that would put you beyond your account's limits.</p>
   *   - {ConcurrentModificationException} <p>There is a concurrent modification of resources.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createSkillGroup(
    args: CreateSkillGroupInput
  ): Promise<CreateSkillGroupOutput>;
  public createSkillGroup(
    args: CreateSkillGroupInput,
    cb: (err: any, data?: CreateSkillGroupOutput) => void
  ): void;
  public createSkillGroup(
    args: CreateSkillGroupInput,
    cb?: (err: any, data?: CreateSkillGroupOutput) => void
  ): Promise<CreateSkillGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateSkillGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a user.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceInUseException} <p>The resource in the request is already in use.</p>
   *   - {LimitExceededException} <p>You are performing an action that would put you beyond your account's limits.</p>
   *   - {ConcurrentModificationException} <p>There is a concurrent modification of resources.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createUser(args: CreateUserInput): Promise<CreateUserOutput>;
  public createUser(
    args: CreateUserInput,
    cb: (err: any, data?: CreateUserOutput) => void
  ): void;
  public createUser(
    args: CreateUserInput,
    cb?: (err: any, data?: CreateUserOutput) => void
  ): Promise<CreateUserOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateUserCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes an address book by the address book ARN.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource is not found.</p>
   *   - {ConcurrentModificationException} <p>There is a concurrent modification of resources.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteAddressBook(
    args: DeleteAddressBookInput
  ): Promise<DeleteAddressBookOutput>;
  public deleteAddressBook(
    args: DeleteAddressBookInput,
    cb: (err: any, data?: DeleteAddressBookOutput) => void
  ): void;
  public deleteAddressBook(
    args: DeleteAddressBookInput,
    cb?: (err: any, data?: DeleteAddressBookOutput) => void
  ): Promise<DeleteAddressBookOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteAddressBookCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the recurring report delivery schedule with the specified schedule ARN.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource is not found.</p>
   *   - {ConcurrentModificationException} <p>There is a concurrent modification of resources.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteBusinessReportSchedule(
    args: DeleteBusinessReportScheduleInput
  ): Promise<DeleteBusinessReportScheduleOutput>;
  public deleteBusinessReportSchedule(
    args: DeleteBusinessReportScheduleInput,
    cb: (err: any, data?: DeleteBusinessReportScheduleOutput) => void
  ): void;
  public deleteBusinessReportSchedule(
    args: DeleteBusinessReportScheduleInput,
    cb?: (err: any, data?: DeleteBusinessReportScheduleOutput) => void
  ): Promise<DeleteBusinessReportScheduleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteBusinessReportScheduleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a conference provider.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource is not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteConferenceProvider(
    args: DeleteConferenceProviderInput
  ): Promise<DeleteConferenceProviderOutput>;
  public deleteConferenceProvider(
    args: DeleteConferenceProviderInput,
    cb: (err: any, data?: DeleteConferenceProviderOutput) => void
  ): void;
  public deleteConferenceProvider(
    args: DeleteConferenceProviderInput,
    cb?: (err: any, data?: DeleteConferenceProviderOutput) => void
  ): Promise<DeleteConferenceProviderOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteConferenceProviderCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a contact by the contact ARN.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource is not found.</p>
   *   - {ConcurrentModificationException} <p>There is a concurrent modification of resources.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteContact(args: DeleteContactInput): Promise<DeleteContactOutput>;
  public deleteContact(
    args: DeleteContactInput,
    cb: (err: any, data?: DeleteContactOutput) => void
  ): void;
  public deleteContact(
    args: DeleteContactInput,
    cb?: (err: any, data?: DeleteContactOutput) => void
  ): Promise<DeleteContactOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteContactCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes a device from Alexa For Business.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource is not found.</p>
   *   - {ConcurrentModificationException} <p>There is a concurrent modification of resources.</p>
   *   - {InvalidCertificateAuthorityException} <p>The Certificate Authority can't issue or revoke a certificate.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteDevice(args: DeleteDeviceInput): Promise<DeleteDeviceOutput>;
  public deleteDevice(
    args: DeleteDeviceInput,
    cb: (err: any, data?: DeleteDeviceOutput) => void
  ): void;
  public deleteDevice(
    args: DeleteDeviceInput,
    cb?: (err: any, data?: DeleteDeviceOutput) => void
  ): Promise<DeleteDeviceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteDeviceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>When this action is called for a specified shared device, it allows authorized users to delete the device's entire previous history of voice input data and associated response data. This action can be called once every 24 hours for a specific shared device.</p> <p>When this action is called for a specified shared device, it allows authorized users to delete the device's entire previous history of voice input data. This action can be called once every 24 hours for a specific shared device. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource is not found.</p>
   *   - {DeviceNotRegisteredException} <p>The request failed because this device is no longer registered and therefore no longer managed by this account.</p>
   *   - {LimitExceededException} <p>You are performing an action that would put you beyond your account's limits.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteDeviceUsageData(
    args: DeleteDeviceUsageDataInput
  ): Promise<DeleteDeviceUsageDataOutput>;
  public deleteDeviceUsageData(
    args: DeleteDeviceUsageDataInput,
    cb: (err: any, data?: DeleteDeviceUsageDataOutput) => void
  ): void;
  public deleteDeviceUsageData(
    args: DeleteDeviceUsageDataInput,
    cb?: (err: any, data?: DeleteDeviceUsageDataOutput) => void
  ): Promise<DeleteDeviceUsageDataOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteDeviceUsageDataCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a gateway group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceAssociatedException} <p>Another resource is associated with the resource in the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteGatewayGroup(
    args: DeleteGatewayGroupInput
  ): Promise<DeleteGatewayGroupOutput>;
  public deleteGatewayGroup(
    args: DeleteGatewayGroupInput,
    cb: (err: any, data?: DeleteGatewayGroupOutput) => void
  ): void;
  public deleteGatewayGroup(
    args: DeleteGatewayGroupInput,
    cb?: (err: any, data?: DeleteGatewayGroupOutput) => void
  ): Promise<DeleteGatewayGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteGatewayGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a network profile by the network profile ARN.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceInUseException} <p>The resource in the request is already in use.</p>
   *   - {ConcurrentModificationException} <p>There is a concurrent modification of resources.</p>
   *   - {NotFoundException} <p>The resource is not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteNetworkProfile(
    args: DeleteNetworkProfileInput
  ): Promise<DeleteNetworkProfileOutput>;
  public deleteNetworkProfile(
    args: DeleteNetworkProfileInput,
    cb: (err: any, data?: DeleteNetworkProfileOutput) => void
  ): void;
  public deleteNetworkProfile(
    args: DeleteNetworkProfileInput,
    cb?: (err: any, data?: DeleteNetworkProfileOutput) => void
  ): Promise<DeleteNetworkProfileOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteNetworkProfileCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a room profile by the profile ARN.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource is not found.</p>
   *   - {ConcurrentModificationException} <p>There is a concurrent modification of resources.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteProfile(args: DeleteProfileInput): Promise<DeleteProfileOutput>;
  public deleteProfile(
    args: DeleteProfileInput,
    cb: (err: any, data?: DeleteProfileOutput) => void
  ): void;
  public deleteProfile(
    args: DeleteProfileInput,
    cb?: (err: any, data?: DeleteProfileOutput) => void
  ): Promise<DeleteProfileOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteProfileCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a room by the room ARN.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource is not found.</p>
   *   - {ConcurrentModificationException} <p>There is a concurrent modification of resources.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteRoom(args: DeleteRoomInput): Promise<DeleteRoomOutput>;
  public deleteRoom(
    args: DeleteRoomInput,
    cb: (err: any, data?: DeleteRoomOutput) => void
  ): void;
  public deleteRoom(
    args: DeleteRoomInput,
    cb?: (err: any, data?: DeleteRoomOutput) => void
  ): Promise<DeleteRoomOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteRoomCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes room skill parameter details by room, skill, and parameter key ID.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ConcurrentModificationException} <p>There is a concurrent modification of resources.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteRoomSkillParameter(
    args: DeleteRoomSkillParameterInput
  ): Promise<DeleteRoomSkillParameterOutput>;
  public deleteRoomSkillParameter(
    args: DeleteRoomSkillParameterInput,
    cb: (err: any, data?: DeleteRoomSkillParameterOutput) => void
  ): void;
  public deleteRoomSkillParameter(
    args: DeleteRoomSkillParameterInput,
    cb?: (err: any, data?: DeleteRoomSkillParameterOutput) => void
  ): Promise<DeleteRoomSkillParameterOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteRoomSkillParameterCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Unlinks a third-party account from a skill.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource is not found.</p>
   *   - {ConcurrentModificationException} <p>There is a concurrent modification of resources.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteSkillAuthorization(
    args: DeleteSkillAuthorizationInput
  ): Promise<DeleteSkillAuthorizationOutput>;
  public deleteSkillAuthorization(
    args: DeleteSkillAuthorizationInput,
    cb: (err: any, data?: DeleteSkillAuthorizationOutput) => void
  ): void;
  public deleteSkillAuthorization(
    args: DeleteSkillAuthorizationInput,
    cb?: (err: any, data?: DeleteSkillAuthorizationOutput) => void
  ): Promise<DeleteSkillAuthorizationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteSkillAuthorizationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a skill group by skill group ARN.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource is not found.</p>
   *   - {ConcurrentModificationException} <p>There is a concurrent modification of resources.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteSkillGroup(
    args: DeleteSkillGroupInput
  ): Promise<DeleteSkillGroupOutput>;
  public deleteSkillGroup(
    args: DeleteSkillGroupInput,
    cb: (err: any, data?: DeleteSkillGroupOutput) => void
  ): void;
  public deleteSkillGroup(
    args: DeleteSkillGroupInput,
    cb?: (err: any, data?: DeleteSkillGroupOutput) => void
  ): Promise<DeleteSkillGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteSkillGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a specified user by user ARN and enrollment ARN.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource is not found.</p>
   *   - {ConcurrentModificationException} <p>There is a concurrent modification of resources.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteUser(args: DeleteUserInput): Promise<DeleteUserOutput>;
  public deleteUser(
    args: DeleteUserInput,
    cb: (err: any, data?: DeleteUserOutput) => void
  ): void;
  public deleteUser(
    args: DeleteUserInput,
    cb?: (err: any, data?: DeleteUserOutput) => void
  ): Promise<DeleteUserOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteUserCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Disassociates a contact from a given address book.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public disassociateContactFromAddressBook(
    args: DisassociateContactFromAddressBookInput
  ): Promise<DisassociateContactFromAddressBookOutput>;
  public disassociateContactFromAddressBook(
    args: DisassociateContactFromAddressBookInput,
    cb: (err: any, data?: DisassociateContactFromAddressBookOutput) => void
  ): void;
  public disassociateContactFromAddressBook(
    args: DisassociateContactFromAddressBookInput,
    cb?: (err: any, data?: DisassociateContactFromAddressBookOutput) => void
  ): Promise<DisassociateContactFromAddressBookOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DisassociateContactFromAddressBookCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Disassociates a device from its current room. The device continues to be connected to the Wi-Fi network and is still registered to the account. The device settings and skills are removed from the room.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ConcurrentModificationException} <p>There is a concurrent modification of resources.</p>
   *   - {DeviceNotRegisteredException} <p>The request failed because this device is no longer registered and therefore no longer managed by this account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public disassociateDeviceFromRoom(
    args: DisassociateDeviceFromRoomInput
  ): Promise<DisassociateDeviceFromRoomOutput>;
  public disassociateDeviceFromRoom(
    args: DisassociateDeviceFromRoomInput,
    cb: (err: any, data?: DisassociateDeviceFromRoomOutput) => void
  ): void;
  public disassociateDeviceFromRoom(
    args: DisassociateDeviceFromRoomInput,
    cb?: (err: any, data?: DisassociateDeviceFromRoomOutput) => void
  ): Promise<DisassociateDeviceFromRoomOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DisassociateDeviceFromRoomCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Disassociates a skill from a skill group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ConcurrentModificationException} <p>There is a concurrent modification of resources.</p>
   *   - {NotFoundException} <p>The resource is not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public disassociateSkillFromSkillGroup(
    args: DisassociateSkillFromSkillGroupInput
  ): Promise<DisassociateSkillFromSkillGroupOutput>;
  public disassociateSkillFromSkillGroup(
    args: DisassociateSkillFromSkillGroupInput,
    cb: (err: any, data?: DisassociateSkillFromSkillGroupOutput) => void
  ): void;
  public disassociateSkillFromSkillGroup(
    args: DisassociateSkillFromSkillGroupInput,
    cb?: (err: any, data?: DisassociateSkillFromSkillGroupOutput) => void
  ): Promise<DisassociateSkillFromSkillGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DisassociateSkillFromSkillGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Makes a private skill unavailable for enrolled users and prevents them from enabling it on their devices.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ConcurrentModificationException} <p>There is a concurrent modification of resources.</p>
   *   - {NotFoundException} <p>The resource is not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public disassociateSkillFromUsers(
    args: DisassociateSkillFromUsersInput
  ): Promise<DisassociateSkillFromUsersOutput>;
  public disassociateSkillFromUsers(
    args: DisassociateSkillFromUsersInput,
    cb: (err: any, data?: DisassociateSkillFromUsersOutput) => void
  ): void;
  public disassociateSkillFromUsers(
    args: DisassociateSkillFromUsersInput,
    cb?: (err: any, data?: DisassociateSkillFromUsersOutput) => void
  ): Promise<DisassociateSkillFromUsersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DisassociateSkillFromUsersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Disassociates a skill group from a specified room. This disables all skills in the skill group on all devices in the room.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ConcurrentModificationException} <p>There is a concurrent modification of resources.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public disassociateSkillGroupFromRoom(
    args: DisassociateSkillGroupFromRoomInput
  ): Promise<DisassociateSkillGroupFromRoomOutput>;
  public disassociateSkillGroupFromRoom(
    args: DisassociateSkillGroupFromRoomInput,
    cb: (err: any, data?: DisassociateSkillGroupFromRoomOutput) => void
  ): void;
  public disassociateSkillGroupFromRoom(
    args: DisassociateSkillGroupFromRoomInput,
    cb?: (err: any, data?: DisassociateSkillGroupFromRoomOutput) => void
  ): Promise<DisassociateSkillGroupFromRoomOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DisassociateSkillGroupFromRoomCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Forgets smart home appliances associated to a room.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource is not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public forgetSmartHomeAppliances(
    args: ForgetSmartHomeAppliancesInput
  ): Promise<ForgetSmartHomeAppliancesOutput>;
  public forgetSmartHomeAppliances(
    args: ForgetSmartHomeAppliancesInput,
    cb: (err: any, data?: ForgetSmartHomeAppliancesOutput) => void
  ): void;
  public forgetSmartHomeAppliances(
    args: ForgetSmartHomeAppliancesInput,
    cb?: (err: any, data?: ForgetSmartHomeAppliancesOutput) => void
  ): Promise<ForgetSmartHomeAppliancesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ForgetSmartHomeAppliancesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets address the book details by the address book ARN.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource is not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getAddressBook(
    args: GetAddressBookInput
  ): Promise<GetAddressBookOutput>;
  public getAddressBook(
    args: GetAddressBookInput,
    cb: (err: any, data?: GetAddressBookOutput) => void
  ): void;
  public getAddressBook(
    args: GetAddressBookInput,
    cb?: (err: any, data?: GetAddressBookOutput) => void
  ): Promise<GetAddressBookOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetAddressBookCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the existing conference preferences.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource is not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getConferencePreference(
    args: GetConferencePreferenceInput
  ): Promise<GetConferencePreferenceOutput>;
  public getConferencePreference(
    args: GetConferencePreferenceInput,
    cb: (err: any, data?: GetConferencePreferenceOutput) => void
  ): void;
  public getConferencePreference(
    args: GetConferencePreferenceInput,
    cb?: (err: any, data?: GetConferencePreferenceOutput) => void
  ): Promise<GetConferencePreferenceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetConferencePreferenceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets details about a specific conference provider.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource is not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getConferenceProvider(
    args: GetConferenceProviderInput
  ): Promise<GetConferenceProviderOutput>;
  public getConferenceProvider(
    args: GetConferenceProviderInput,
    cb: (err: any, data?: GetConferenceProviderOutput) => void
  ): void;
  public getConferenceProvider(
    args: GetConferenceProviderInput,
    cb?: (err: any, data?: GetConferenceProviderOutput) => void
  ): Promise<GetConferenceProviderOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetConferenceProviderCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets the contact details by the contact ARN.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource is not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getContact(args: GetContactInput): Promise<GetContactOutput>;
  public getContact(
    args: GetContactInput,
    cb: (err: any, data?: GetContactOutput) => void
  ): void;
  public getContact(
    args: GetContactInput,
    cb?: (err: any, data?: GetContactOutput) => void
  ): Promise<GetContactOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetContactCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets the details of a device by device ARN.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource is not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getDevice(args: GetDeviceInput): Promise<GetDeviceOutput>;
  public getDevice(
    args: GetDeviceInput,
    cb: (err: any, data?: GetDeviceOutput) => void
  ): void;
  public getDevice(
    args: GetDeviceInput,
    cb?: (err: any, data?: GetDeviceOutput) => void
  ): Promise<GetDeviceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetDeviceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the details of a gateway.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource is not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getGateway(args: GetGatewayInput): Promise<GetGatewayOutput>;
  public getGateway(
    args: GetGatewayInput,
    cb: (err: any, data?: GetGatewayOutput) => void
  ): void;
  public getGateway(
    args: GetGatewayInput,
    cb?: (err: any, data?: GetGatewayOutput) => void
  ): Promise<GetGatewayOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetGatewayCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the details of a gateway group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource is not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getGatewayGroup(
    args: GetGatewayGroupInput
  ): Promise<GetGatewayGroupOutput>;
  public getGatewayGroup(
    args: GetGatewayGroupInput,
    cb: (err: any, data?: GetGatewayGroupOutput) => void
  ): void;
  public getGatewayGroup(
    args: GetGatewayGroupInput,
    cb?: (err: any, data?: GetGatewayGroupOutput) => void
  ): Promise<GetGatewayGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetGatewayGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the configured values for the user enrollment invitation email template.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource is not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getInvitationConfiguration(
    args: GetInvitationConfigurationInput
  ): Promise<GetInvitationConfigurationOutput>;
  public getInvitationConfiguration(
    args: GetInvitationConfigurationInput,
    cb: (err: any, data?: GetInvitationConfigurationOutput) => void
  ): void;
  public getInvitationConfiguration(
    args: GetInvitationConfigurationInput,
    cb?: (err: any, data?: GetInvitationConfigurationOutput) => void
  ): Promise<GetInvitationConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetInvitationConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets the network profile details by the network profile ARN.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource is not found.</p>
   *   - {InvalidSecretsManagerResourceException} <p>A password in SecretsManager is in an invalid state.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getNetworkProfile(
    args: GetNetworkProfileInput
  ): Promise<GetNetworkProfileOutput>;
  public getNetworkProfile(
    args: GetNetworkProfileInput,
    cb: (err: any, data?: GetNetworkProfileOutput) => void
  ): void;
  public getNetworkProfile(
    args: GetNetworkProfileInput,
    cb?: (err: any, data?: GetNetworkProfileOutput) => void
  ): Promise<GetNetworkProfileOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetNetworkProfileCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets the details of a room profile by profile ARN.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource is not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getProfile(args: GetProfileInput): Promise<GetProfileOutput>;
  public getProfile(
    args: GetProfileInput,
    cb: (err: any, data?: GetProfileOutput) => void
  ): void;
  public getProfile(
    args: GetProfileInput,
    cb?: (err: any, data?: GetProfileOutput) => void
  ): Promise<GetProfileOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetProfileCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets room details by room ARN.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource is not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getRoom(args: GetRoomInput): Promise<GetRoomOutput>;
  public getRoom(
    args: GetRoomInput,
    cb: (err: any, data?: GetRoomOutput) => void
  ): void;
  public getRoom(
    args: GetRoomInput,
    cb?: (err: any, data?: GetRoomOutput) => void
  ): Promise<GetRoomOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetRoomCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets room skill parameter details by room, skill, and parameter key ARN.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource is not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getRoomSkillParameter(
    args: GetRoomSkillParameterInput
  ): Promise<GetRoomSkillParameterOutput>;
  public getRoomSkillParameter(
    args: GetRoomSkillParameterInput,
    cb: (err: any, data?: GetRoomSkillParameterOutput) => void
  ): void;
  public getRoomSkillParameter(
    args: GetRoomSkillParameterInput,
    cb?: (err: any, data?: GetRoomSkillParameterOutput) => void
  ): Promise<GetRoomSkillParameterOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetRoomSkillParameterCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets skill group details by skill group ARN.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource is not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getSkillGroup(args: GetSkillGroupInput): Promise<GetSkillGroupOutput>;
  public getSkillGroup(
    args: GetSkillGroupInput,
    cb: (err: any, data?: GetSkillGroupOutput) => void
  ): void;
  public getSkillGroup(
    args: GetSkillGroupInput,
    cb?: (err: any, data?: GetSkillGroupOutput) => void
  ): Promise<GetSkillGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetSkillGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the details of the schedules that a user configured.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listBusinessReportSchedules(
    args: ListBusinessReportSchedulesInput
  ): Promise<ListBusinessReportSchedulesOutput>;
  public listBusinessReportSchedules(
    args: ListBusinessReportSchedulesInput,
    cb: (err: any, data?: ListBusinessReportSchedulesOutput) => void
  ): void;
  public listBusinessReportSchedules(
    args: ListBusinessReportSchedulesInput,
    cb?: (err: any, data?: ListBusinessReportSchedulesOutput) => void
  ): Promise<ListBusinessReportSchedulesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListBusinessReportSchedulesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists conference providers under a specific AWS account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listConferenceProviders(
    args: ListConferenceProvidersInput
  ): Promise<ListConferenceProvidersOutput>;
  public listConferenceProviders(
    args: ListConferenceProvidersInput,
    cb: (err: any, data?: ListConferenceProvidersOutput) => void
  ): void;
  public listConferenceProviders(
    args: ListConferenceProvidersInput,
    cb?: (err: any, data?: ListConferenceProvidersOutput) => void
  ): Promise<ListConferenceProvidersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListConferenceProvidersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the device event history, including device connection status, for up to 30 days.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource is not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listDeviceEvents(
    args: ListDeviceEventsInput
  ): Promise<ListDeviceEventsOutput>;
  public listDeviceEvents(
    args: ListDeviceEventsInput,
    cb: (err: any, data?: ListDeviceEventsOutput) => void
  ): void;
  public listDeviceEvents(
    args: ListDeviceEventsInput,
    cb?: (err: any, data?: ListDeviceEventsOutput) => void
  ): Promise<ListDeviceEventsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListDeviceEventsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves a list of gateway group summaries. Use GetGatewayGroup to retrieve details of a specific gateway group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listGatewayGroups(
    args: ListGatewayGroupsInput
  ): Promise<ListGatewayGroupsOutput>;
  public listGatewayGroups(
    args: ListGatewayGroupsInput,
    cb: (err: any, data?: ListGatewayGroupsOutput) => void
  ): void;
  public listGatewayGroups(
    args: ListGatewayGroupsInput,
    cb?: (err: any, data?: ListGatewayGroupsOutput) => void
  ): Promise<ListGatewayGroupsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListGatewayGroupsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves a list of gateway summaries. Use GetGateway to retrieve details of a specific gateway. An optional gateway group ARN can be provided to only retrieve gateway summaries of gateways that are associated with that gateway group ARN.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listGateways(args: ListGatewaysInput): Promise<ListGatewaysOutput>;
  public listGateways(
    args: ListGatewaysInput,
    cb: (err: any, data?: ListGatewaysOutput) => void
  ): void;
  public listGateways(
    args: ListGatewaysInput,
    cb?: (err: any, data?: ListGatewaysOutput) => void
  ): Promise<ListGatewaysOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListGatewaysCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists all enabled skills in a specific skill group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listSkills(args: ListSkillsInput): Promise<ListSkillsOutput>;
  public listSkills(
    args: ListSkillsInput,
    cb: (err: any, data?: ListSkillsOutput) => void
  ): void;
  public listSkills(
    args: ListSkillsInput,
    cb?: (err: any, data?: ListSkillsOutput) => void
  ): Promise<ListSkillsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListSkillsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists all categories in the Alexa skill store.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listSkillsStoreCategories(
    args: ListSkillsStoreCategoriesInput
  ): Promise<ListSkillsStoreCategoriesOutput>;
  public listSkillsStoreCategories(
    args: ListSkillsStoreCategoriesInput,
    cb: (err: any, data?: ListSkillsStoreCategoriesOutput) => void
  ): void;
  public listSkillsStoreCategories(
    args: ListSkillsStoreCategoriesInput,
    cb?: (err: any, data?: ListSkillsStoreCategoriesOutput) => void
  ): Promise<ListSkillsStoreCategoriesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListSkillsStoreCategoriesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists all skills in the Alexa skill store by category.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listSkillsStoreSkillsByCategory(
    args: ListSkillsStoreSkillsByCategoryInput
  ): Promise<ListSkillsStoreSkillsByCategoryOutput>;
  public listSkillsStoreSkillsByCategory(
    args: ListSkillsStoreSkillsByCategoryInput,
    cb: (err: any, data?: ListSkillsStoreSkillsByCategoryOutput) => void
  ): void;
  public listSkillsStoreSkillsByCategory(
    args: ListSkillsStoreSkillsByCategoryInput,
    cb?: (err: any, data?: ListSkillsStoreSkillsByCategoryOutput) => void
  ): Promise<ListSkillsStoreSkillsByCategoryOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListSkillsStoreSkillsByCategoryCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists all of the smart home appliances associated with a room.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource is not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listSmartHomeAppliances(
    args: ListSmartHomeAppliancesInput
  ): Promise<ListSmartHomeAppliancesOutput>;
  public listSmartHomeAppliances(
    args: ListSmartHomeAppliancesInput,
    cb: (err: any, data?: ListSmartHomeAppliancesOutput) => void
  ): void;
  public listSmartHomeAppliances(
    args: ListSmartHomeAppliancesInput,
    cb?: (err: any, data?: ListSmartHomeAppliancesOutput) => void
  ): Promise<ListSmartHomeAppliancesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListSmartHomeAppliancesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists all tags for the specified resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource is not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTags(args: ListTagsInput): Promise<ListTagsOutput>;
  public listTags(
    args: ListTagsInput,
    cb: (err: any, data?: ListTagsOutput) => void
  ): void;
  public listTags(
    args: ListTagsInput,
    cb?: (err: any, data?: ListTagsOutput) => void
  ): Promise<ListTagsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTagsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Sets the conference preferences on a specific conference provider at the account level.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource is not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putConferencePreference(
    args: PutConferencePreferenceInput
  ): Promise<PutConferencePreferenceOutput>;
  public putConferencePreference(
    args: PutConferencePreferenceInput,
    cb: (err: any, data?: PutConferencePreferenceOutput) => void
  ): void;
  public putConferencePreference(
    args: PutConferencePreferenceInput,
    cb?: (err: any, data?: PutConferencePreferenceOutput) => void
  ): Promise<PutConferencePreferenceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutConferencePreferenceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Configures the email template for the user enrollment invitation with the specified attributes.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource is not found.</p>
   *   - {ConcurrentModificationException} <p>There is a concurrent modification of resources.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putInvitationConfiguration(
    args: PutInvitationConfigurationInput
  ): Promise<PutInvitationConfigurationOutput>;
  public putInvitationConfiguration(
    args: PutInvitationConfigurationInput,
    cb: (err: any, data?: PutInvitationConfigurationOutput) => void
  ): void;
  public putInvitationConfiguration(
    args: PutInvitationConfigurationInput,
    cb?: (err: any, data?: PutInvitationConfigurationOutput) => void
  ): Promise<PutInvitationConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutInvitationConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates room skill parameter details by room, skill, and parameter key ID. Not all skills have a room skill parameter.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ConcurrentModificationException} <p>There is a concurrent modification of resources.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putRoomSkillParameter(
    args: PutRoomSkillParameterInput
  ): Promise<PutRoomSkillParameterOutput>;
  public putRoomSkillParameter(
    args: PutRoomSkillParameterInput,
    cb: (err: any, data?: PutRoomSkillParameterOutput) => void
  ): void;
  public putRoomSkillParameter(
    args: PutRoomSkillParameterInput,
    cb?: (err: any, data?: PutRoomSkillParameterOutput) => void
  ): Promise<PutRoomSkillParameterOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutRoomSkillParameterCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Links a user's account to a third-party skill provider. If this API operation is called by an assumed IAM role, the skill being linked must be a private skill. Also, the skill must be owned by the AWS account that assumed the IAM role.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The caller has no permissions to operate on the resource involved in the API call.</p>
   *   - {ConcurrentModificationException} <p>There is a concurrent modification of resources.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putSkillAuthorization(
    args: PutSkillAuthorizationInput
  ): Promise<PutSkillAuthorizationOutput>;
  public putSkillAuthorization(
    args: PutSkillAuthorizationInput,
    cb: (err: any, data?: PutSkillAuthorizationOutput) => void
  ): void;
  public putSkillAuthorization(
    args: PutSkillAuthorizationInput,
    cb?: (err: any, data?: PutSkillAuthorizationOutput) => void
  ): Promise<PutSkillAuthorizationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutSkillAuthorizationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Registers an Alexa-enabled device built by an Original Equipment Manufacturer (OEM) using Alexa Voice Service (AVS).</p>
   *
   * This operation may fail with one of the following errors:
   *   - {LimitExceededException} <p>You are performing an action that would put you beyond your account's limits.</p>
   *   - {ConcurrentModificationException} <p>There is a concurrent modification of resources.</p>
   *   - {InvalidDeviceException} <p>The device is in an invalid state.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public registerAVSDevice(
    args: RegisterAVSDeviceInput
  ): Promise<RegisterAVSDeviceOutput>;
  public registerAVSDevice(
    args: RegisterAVSDeviceInput,
    cb: (err: any, data?: RegisterAVSDeviceOutput) => void
  ): void;
  public registerAVSDevice(
    args: RegisterAVSDeviceInput,
    cb?: (err: any, data?: RegisterAVSDeviceOutput) => void
  ): Promise<RegisterAVSDeviceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RegisterAVSDeviceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Disassociates a skill from the organization under a user's AWS account. If the skill is a private skill, it moves to an AcceptStatus of PENDING. Any private or public skill that is rejected can be added later by calling the ApproveSkill API. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ConcurrentModificationException} <p>There is a concurrent modification of resources.</p>
   *   - {NotFoundException} <p>The resource is not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public rejectSkill(args: RejectSkillInput): Promise<RejectSkillOutput>;
  public rejectSkill(
    args: RejectSkillInput,
    cb: (err: any, data?: RejectSkillOutput) => void
  ): void;
  public rejectSkill(
    args: RejectSkillInput,
    cb?: (err: any, data?: RejectSkillOutput) => void
  ): Promise<RejectSkillOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RejectSkillCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Determines the details for the room from which a skill request was invoked. This operation is used by skill developers.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource is not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public resolveRoom(args: ResolveRoomInput): Promise<ResolveRoomOutput>;
  public resolveRoom(
    args: ResolveRoomInput,
    cb: (err: any, data?: ResolveRoomOutput) => void
  ): void;
  public resolveRoom(
    args: ResolveRoomInput,
    cb?: (err: any, data?: ResolveRoomOutput) => void
  ): Promise<ResolveRoomOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ResolveRoomCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Revokes an invitation and invalidates the enrollment URL.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource is not found.</p>
   *   - {ConcurrentModificationException} <p>There is a concurrent modification of resources.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public revokeInvitation(
    args: RevokeInvitationInput
  ): Promise<RevokeInvitationOutput>;
  public revokeInvitation(
    args: RevokeInvitationInput,
    cb: (err: any, data?: RevokeInvitationOutput) => void
  ): void;
  public revokeInvitation(
    args: RevokeInvitationInput,
    cb?: (err: any, data?: RevokeInvitationOutput) => void
  ): Promise<RevokeInvitationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RevokeInvitationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Searches address books and lists the ones that meet a set of filter and sort criteria.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public searchAddressBooks(
    args: SearchAddressBooksInput
  ): Promise<SearchAddressBooksOutput>;
  public searchAddressBooks(
    args: SearchAddressBooksInput,
    cb: (err: any, data?: SearchAddressBooksOutput) => void
  ): void;
  public searchAddressBooks(
    args: SearchAddressBooksInput,
    cb?: (err: any, data?: SearchAddressBooksOutput) => void
  ): Promise<SearchAddressBooksOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SearchAddressBooksCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Searches contacts and lists the ones that meet a set of filter and sort criteria.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public searchContacts(
    args: SearchContactsInput
  ): Promise<SearchContactsOutput>;
  public searchContacts(
    args: SearchContactsInput,
    cb: (err: any, data?: SearchContactsOutput) => void
  ): void;
  public searchContacts(
    args: SearchContactsInput,
    cb?: (err: any, data?: SearchContactsOutput) => void
  ): Promise<SearchContactsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SearchContactsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Searches devices and lists the ones that meet a set of filter criteria.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public searchDevices(args: SearchDevicesInput): Promise<SearchDevicesOutput>;
  public searchDevices(
    args: SearchDevicesInput,
    cb: (err: any, data?: SearchDevicesOutput) => void
  ): void;
  public searchDevices(
    args: SearchDevicesInput,
    cb?: (err: any, data?: SearchDevicesOutput) => void
  ): Promise<SearchDevicesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SearchDevicesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Searches network profiles and lists the ones that meet a set of filter and sort criteria.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public searchNetworkProfiles(
    args: SearchNetworkProfilesInput
  ): Promise<SearchNetworkProfilesOutput>;
  public searchNetworkProfiles(
    args: SearchNetworkProfilesInput,
    cb: (err: any, data?: SearchNetworkProfilesOutput) => void
  ): void;
  public searchNetworkProfiles(
    args: SearchNetworkProfilesInput,
    cb?: (err: any, data?: SearchNetworkProfilesOutput) => void
  ): Promise<SearchNetworkProfilesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SearchNetworkProfilesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Searches room profiles and lists the ones that meet a set of filter criteria.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public searchProfiles(
    args: SearchProfilesInput
  ): Promise<SearchProfilesOutput>;
  public searchProfiles(
    args: SearchProfilesInput,
    cb: (err: any, data?: SearchProfilesOutput) => void
  ): void;
  public searchProfiles(
    args: SearchProfilesInput,
    cb?: (err: any, data?: SearchProfilesOutput) => void
  ): Promise<SearchProfilesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SearchProfilesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Searches rooms and lists the ones that meet a set of filter and sort criteria.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public searchRooms(args: SearchRoomsInput): Promise<SearchRoomsOutput>;
  public searchRooms(
    args: SearchRoomsInput,
    cb: (err: any, data?: SearchRoomsOutput) => void
  ): void;
  public searchRooms(
    args: SearchRoomsInput,
    cb?: (err: any, data?: SearchRoomsOutput) => void
  ): Promise<SearchRoomsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SearchRoomsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Searches skill groups and lists the ones that meet a set of filter and sort criteria.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public searchSkillGroups(
    args: SearchSkillGroupsInput
  ): Promise<SearchSkillGroupsOutput>;
  public searchSkillGroups(
    args: SearchSkillGroupsInput,
    cb: (err: any, data?: SearchSkillGroupsOutput) => void
  ): void;
  public searchSkillGroups(
    args: SearchSkillGroupsInput,
    cb?: (err: any, data?: SearchSkillGroupsOutput) => void
  ): Promise<SearchSkillGroupsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SearchSkillGroupsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Searches users and lists the ones that meet a set of filter and sort criteria.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public searchUsers(args: SearchUsersInput): Promise<SearchUsersOutput>;
  public searchUsers(
    args: SearchUsersInput,
    cb: (err: any, data?: SearchUsersOutput) => void
  ): void;
  public searchUsers(
    args: SearchUsersInput,
    cb?: (err: any, data?: SearchUsersOutput) => void
  ): Promise<SearchUsersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SearchUsersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Triggers an asynchronous flow to send text, SSML, or audio announcements to rooms that are identified by a search or filter. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {LimitExceededException} <p>You are performing an action that would put you beyond your account's limits.</p>
   *   - {AlreadyExistsException} <p>The resource being created already exists.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public sendAnnouncement(
    args: SendAnnouncementInput
  ): Promise<SendAnnouncementOutput>;
  public sendAnnouncement(
    args: SendAnnouncementInput,
    cb: (err: any, data?: SendAnnouncementOutput) => void
  ): void;
  public sendAnnouncement(
    args: SendAnnouncementInput,
    cb?: (err: any, data?: SendAnnouncementOutput) => void
  ): Promise<SendAnnouncementOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SendAnnouncementCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Sends an enrollment invitation email with a URL to a user. The URL is valid for 30 days or until you call this operation again, whichever comes first. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource is not found.</p>
   *   - {InvalidUserStatusException} <p>The attempt to update a user is invalid due to the user's current status.</p>
   *   - {ConcurrentModificationException} <p>There is a concurrent modification of resources.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public sendInvitation(
    args: SendInvitationInput
  ): Promise<SendInvitationOutput>;
  public sendInvitation(
    args: SendInvitationInput,
    cb: (err: any, data?: SendInvitationOutput) => void
  ): void;
  public sendInvitation(
    args: SendInvitationInput,
    cb?: (err: any, data?: SendInvitationOutput) => void
  ): Promise<SendInvitationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SendInvitationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Resets a device and its account to the known default settings. This clears all information and settings set by previous users in the following ways:</p> <ul> <li> <p>Bluetooth - This unpairs all bluetooth devices paired with your echo device.</p> </li> <li> <p>Volume - This resets the echo device's volume to the default value.</p> </li> <li> <p>Notifications - This clears all notifications from your echo device.</p> </li> <li> <p>Lists - This clears all to-do items from your echo device.</p> </li> <li> <p>Settings - This internally syncs the room's profile (if the device is assigned to a room), contacts, address books, delegation access for account linking, and communications (if enabled on the room profile).</p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {DeviceNotRegisteredException} <p>The request failed because this device is no longer registered and therefore no longer managed by this account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startDeviceSync(
    args: StartDeviceSyncInput
  ): Promise<StartDeviceSyncOutput>;
  public startDeviceSync(
    args: StartDeviceSyncInput,
    cb: (err: any, data?: StartDeviceSyncOutput) => void
  ): void;
  public startDeviceSync(
    args: StartDeviceSyncInput,
    cb?: (err: any, data?: StartDeviceSyncOutput) => void
  ): Promise<StartDeviceSyncOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartDeviceSyncCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Initiates the discovery of any smart home appliances associated with the room.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource is not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startSmartHomeApplianceDiscovery(
    args: StartSmartHomeApplianceDiscoveryInput
  ): Promise<StartSmartHomeApplianceDiscoveryOutput>;
  public startSmartHomeApplianceDiscovery(
    args: StartSmartHomeApplianceDiscoveryInput,
    cb: (err: any, data?: StartSmartHomeApplianceDiscoveryOutput) => void
  ): void;
  public startSmartHomeApplianceDiscovery(
    args: StartSmartHomeApplianceDiscoveryInput,
    cb?: (err: any, data?: StartSmartHomeApplianceDiscoveryOutput) => void
  ): Promise<StartSmartHomeApplianceDiscoveryOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartSmartHomeApplianceDiscoveryCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds metadata tags to a specified resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource is not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public tagResource(args: TagResourceInput): Promise<TagResourceOutput>;
  public tagResource(
    args: TagResourceInput,
    cb: (err: any, data?: TagResourceOutput) => void
  ): void;
  public tagResource(
    args: TagResourceInput,
    cb?: (err: any, data?: TagResourceOutput) => void
  ): Promise<TagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes metadata tags from a specified resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource is not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public untagResource(args: UntagResourceInput): Promise<UntagResourceOutput>;
  public untagResource(
    args: UntagResourceInput,
    cb: (err: any, data?: UntagResourceOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceInput,
    cb?: (err: any, data?: UntagResourceOutput) => void
  ): Promise<UntagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UntagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates address book details by the address book ARN.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource is not found.</p>
   *   - {NameInUseException} <p>The name sent in the request is already in use.</p>
   *   - {ConcurrentModificationException} <p>There is a concurrent modification of resources.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateAddressBook(
    args: UpdateAddressBookInput
  ): Promise<UpdateAddressBookOutput>;
  public updateAddressBook(
    args: UpdateAddressBookInput,
    cb: (err: any, data?: UpdateAddressBookOutput) => void
  ): void;
  public updateAddressBook(
    args: UpdateAddressBookInput,
    cb?: (err: any, data?: UpdateAddressBookOutput) => void
  ): Promise<UpdateAddressBookOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateAddressBookCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the configuration of the report delivery schedule with the specified schedule ARN.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource is not found.</p>
   *   - {ConcurrentModificationException} <p>There is a concurrent modification of resources.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateBusinessReportSchedule(
    args: UpdateBusinessReportScheduleInput
  ): Promise<UpdateBusinessReportScheduleOutput>;
  public updateBusinessReportSchedule(
    args: UpdateBusinessReportScheduleInput,
    cb: (err: any, data?: UpdateBusinessReportScheduleOutput) => void
  ): void;
  public updateBusinessReportSchedule(
    args: UpdateBusinessReportScheduleInput,
    cb?: (err: any, data?: UpdateBusinessReportScheduleOutput) => void
  ): Promise<UpdateBusinessReportScheduleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateBusinessReportScheduleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates an existing conference provider's settings.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource is not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateConferenceProvider(
    args: UpdateConferenceProviderInput
  ): Promise<UpdateConferenceProviderOutput>;
  public updateConferenceProvider(
    args: UpdateConferenceProviderInput,
    cb: (err: any, data?: UpdateConferenceProviderOutput) => void
  ): void;
  public updateConferenceProvider(
    args: UpdateConferenceProviderInput,
    cb?: (err: any, data?: UpdateConferenceProviderOutput) => void
  ): Promise<UpdateConferenceProviderOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateConferenceProviderCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the contact details by the contact ARN.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource is not found.</p>
   *   - {ConcurrentModificationException} <p>There is a concurrent modification of resources.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateContact(args: UpdateContactInput): Promise<UpdateContactOutput>;
  public updateContact(
    args: UpdateContactInput,
    cb: (err: any, data?: UpdateContactOutput) => void
  ): void;
  public updateContact(
    args: UpdateContactInput,
    cb?: (err: any, data?: UpdateContactOutput) => void
  ): Promise<UpdateContactOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateContactCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the device name by device ARN.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource is not found.</p>
   *   - {ConcurrentModificationException} <p>There is a concurrent modification of resources.</p>
   *   - {DeviceNotRegisteredException} <p>The request failed because this device is no longer registered and therefore no longer managed by this account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateDevice(args: UpdateDeviceInput): Promise<UpdateDeviceOutput>;
  public updateDevice(
    args: UpdateDeviceInput,
    cb: (err: any, data?: UpdateDeviceOutput) => void
  ): void;
  public updateDevice(
    args: UpdateDeviceInput,
    cb?: (err: any, data?: UpdateDeviceOutput) => void
  ): Promise<UpdateDeviceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateDeviceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the details of a gateway. If any optional field is not provided, the existing corresponding value is left unmodified.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource is not found.</p>
   *   - {NameInUseException} <p>The name sent in the request is already in use.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateGateway(args: UpdateGatewayInput): Promise<UpdateGatewayOutput>;
  public updateGateway(
    args: UpdateGatewayInput,
    cb: (err: any, data?: UpdateGatewayOutput) => void
  ): void;
  public updateGateway(
    args: UpdateGatewayInput,
    cb?: (err: any, data?: UpdateGatewayOutput) => void
  ): Promise<UpdateGatewayOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateGatewayCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the details of a gateway group. If any optional field is not provided, the existing corresponding value is left unmodified.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource is not found.</p>
   *   - {NameInUseException} <p>The name sent in the request is already in use.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateGatewayGroup(
    args: UpdateGatewayGroupInput
  ): Promise<UpdateGatewayGroupOutput>;
  public updateGatewayGroup(
    args: UpdateGatewayGroupInput,
    cb: (err: any, data?: UpdateGatewayGroupOutput) => void
  ): void;
  public updateGatewayGroup(
    args: UpdateGatewayGroupInput,
    cb?: (err: any, data?: UpdateGatewayGroupOutput) => void
  ): Promise<UpdateGatewayGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateGatewayGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates a network profile by the network profile ARN.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource is not found.</p>
   *   - {NameInUseException} <p>The name sent in the request is already in use.</p>
   *   - {ConcurrentModificationException} <p>There is a concurrent modification of resources.</p>
   *   - {InvalidCertificateAuthorityException} <p>The Certificate Authority can't issue or revoke a certificate.</p>
   *   - {InvalidSecretsManagerResourceException} <p>A password in SecretsManager is in an invalid state.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateNetworkProfile(
    args: UpdateNetworkProfileInput
  ): Promise<UpdateNetworkProfileOutput>;
  public updateNetworkProfile(
    args: UpdateNetworkProfileInput,
    cb: (err: any, data?: UpdateNetworkProfileOutput) => void
  ): void;
  public updateNetworkProfile(
    args: UpdateNetworkProfileInput,
    cb?: (err: any, data?: UpdateNetworkProfileOutput) => void
  ): Promise<UpdateNetworkProfileOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateNetworkProfileCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates an existing room profile by room profile ARN.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource is not found.</p>
   *   - {NameInUseException} <p>The name sent in the request is already in use.</p>
   *   - {ConcurrentModificationException} <p>There is a concurrent modification of resources.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateProfile(args: UpdateProfileInput): Promise<UpdateProfileOutput>;
  public updateProfile(
    args: UpdateProfileInput,
    cb: (err: any, data?: UpdateProfileOutput) => void
  ): void;
  public updateProfile(
    args: UpdateProfileInput,
    cb?: (err: any, data?: UpdateProfileOutput) => void
  ): Promise<UpdateProfileOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateProfileCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates room details by room ARN.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource is not found.</p>
   *   - {NameInUseException} <p>The name sent in the request is already in use.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateRoom(args: UpdateRoomInput): Promise<UpdateRoomOutput>;
  public updateRoom(
    args: UpdateRoomInput,
    cb: (err: any, data?: UpdateRoomOutput) => void
  ): void;
  public updateRoom(
    args: UpdateRoomInput,
    cb?: (err: any, data?: UpdateRoomOutput) => void
  ): Promise<UpdateRoomOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateRoomCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates skill group details by skill group ARN.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource is not found.</p>
   *   - {NameInUseException} <p>The name sent in the request is already in use.</p>
   *   - {ConcurrentModificationException} <p>There is a concurrent modification of resources.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateSkillGroup(
    args: UpdateSkillGroupInput
  ): Promise<UpdateSkillGroupOutput>;
  public updateSkillGroup(
    args: UpdateSkillGroupInput,
    cb: (err: any, data?: UpdateSkillGroupOutput) => void
  ): void;
  public updateSkillGroup(
    args: UpdateSkillGroupInput,
    cb?: (err: any, data?: UpdateSkillGroupOutput) => void
  ): Promise<UpdateSkillGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateSkillGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
