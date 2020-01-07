import { AlexaForBusinessClient } from "./AlexaForBusinessClient";
import { ApproveSkillCommandInput, ApproveSkillCommandOutput } from "./commands/ApproveSkillCommand";
import { AssociateContactWithAddressBookCommandInput, AssociateContactWithAddressBookCommandOutput } from "./commands/AssociateContactWithAddressBookCommand";
import { AssociateDeviceWithNetworkProfileCommandInput, AssociateDeviceWithNetworkProfileCommandOutput } from "./commands/AssociateDeviceWithNetworkProfileCommand";
import { AssociateDeviceWithRoomCommandInput, AssociateDeviceWithRoomCommandOutput } from "./commands/AssociateDeviceWithRoomCommand";
import { AssociateSkillGroupWithRoomCommandInput, AssociateSkillGroupWithRoomCommandOutput } from "./commands/AssociateSkillGroupWithRoomCommand";
import { AssociateSkillWithSkillGroupCommandInput, AssociateSkillWithSkillGroupCommandOutput } from "./commands/AssociateSkillWithSkillGroupCommand";
import { AssociateSkillWithUsersCommandInput, AssociateSkillWithUsersCommandOutput } from "./commands/AssociateSkillWithUsersCommand";
import { CreateAddressBookCommandInput, CreateAddressBookCommandOutput } from "./commands/CreateAddressBookCommand";
import { CreateBusinessReportScheduleCommandInput, CreateBusinessReportScheduleCommandOutput } from "./commands/CreateBusinessReportScheduleCommand";
import { CreateConferenceProviderCommandInput, CreateConferenceProviderCommandOutput } from "./commands/CreateConferenceProviderCommand";
import { CreateContactCommandInput, CreateContactCommandOutput } from "./commands/CreateContactCommand";
import { CreateGatewayGroupCommandInput, CreateGatewayGroupCommandOutput } from "./commands/CreateGatewayGroupCommand";
import { CreateNetworkProfileCommandInput, CreateNetworkProfileCommandOutput } from "./commands/CreateNetworkProfileCommand";
import { CreateProfileCommandInput, CreateProfileCommandOutput } from "./commands/CreateProfileCommand";
import { CreateRoomCommandInput, CreateRoomCommandOutput } from "./commands/CreateRoomCommand";
import { CreateSkillGroupCommandInput, CreateSkillGroupCommandOutput } from "./commands/CreateSkillGroupCommand";
import { CreateUserCommandInput, CreateUserCommandOutput } from "./commands/CreateUserCommand";
import { DeleteAddressBookCommandInput, DeleteAddressBookCommandOutput } from "./commands/DeleteAddressBookCommand";
import { DeleteBusinessReportScheduleCommandInput, DeleteBusinessReportScheduleCommandOutput } from "./commands/DeleteBusinessReportScheduleCommand";
import { DeleteConferenceProviderCommandInput, DeleteConferenceProviderCommandOutput } from "./commands/DeleteConferenceProviderCommand";
import { DeleteContactCommandInput, DeleteContactCommandOutput } from "./commands/DeleteContactCommand";
import { DeleteDeviceCommandInput, DeleteDeviceCommandOutput } from "./commands/DeleteDeviceCommand";
import { DeleteDeviceUsageDataCommandInput, DeleteDeviceUsageDataCommandOutput } from "./commands/DeleteDeviceUsageDataCommand";
import { DeleteGatewayGroupCommandInput, DeleteGatewayGroupCommandOutput } from "./commands/DeleteGatewayGroupCommand";
import { DeleteNetworkProfileCommandInput, DeleteNetworkProfileCommandOutput } from "./commands/DeleteNetworkProfileCommand";
import { DeleteProfileCommandInput, DeleteProfileCommandOutput } from "./commands/DeleteProfileCommand";
import { DeleteRoomCommandInput, DeleteRoomCommandOutput } from "./commands/DeleteRoomCommand";
import { DeleteRoomSkillParameterCommandInput, DeleteRoomSkillParameterCommandOutput } from "./commands/DeleteRoomSkillParameterCommand";
import { DeleteSkillAuthorizationCommandInput, DeleteSkillAuthorizationCommandOutput } from "./commands/DeleteSkillAuthorizationCommand";
import { DeleteSkillGroupCommandInput, DeleteSkillGroupCommandOutput } from "./commands/DeleteSkillGroupCommand";
import { DeleteUserCommandInput, DeleteUserCommandOutput } from "./commands/DeleteUserCommand";
import { DisassociateContactFromAddressBookCommandInput, DisassociateContactFromAddressBookCommandOutput } from "./commands/DisassociateContactFromAddressBookCommand";
import { DisassociateDeviceFromRoomCommandInput, DisassociateDeviceFromRoomCommandOutput } from "./commands/DisassociateDeviceFromRoomCommand";
import { DisassociateSkillFromSkillGroupCommandInput, DisassociateSkillFromSkillGroupCommandOutput } from "./commands/DisassociateSkillFromSkillGroupCommand";
import { DisassociateSkillFromUsersCommandInput, DisassociateSkillFromUsersCommandOutput } from "./commands/DisassociateSkillFromUsersCommand";
import { DisassociateSkillGroupFromRoomCommandInput, DisassociateSkillGroupFromRoomCommandOutput } from "./commands/DisassociateSkillGroupFromRoomCommand";
import { ForgetSmartHomeAppliancesCommandInput, ForgetSmartHomeAppliancesCommandOutput } from "./commands/ForgetSmartHomeAppliancesCommand";
import { GetAddressBookCommandInput, GetAddressBookCommandOutput } from "./commands/GetAddressBookCommand";
import { GetConferencePreferenceCommandInput, GetConferencePreferenceCommandOutput } from "./commands/GetConferencePreferenceCommand";
import { GetConferenceProviderCommandInput, GetConferenceProviderCommandOutput } from "./commands/GetConferenceProviderCommand";
import { GetContactCommandInput, GetContactCommandOutput } from "./commands/GetContactCommand";
import { GetDeviceCommandInput, GetDeviceCommandOutput } from "./commands/GetDeviceCommand";
import { GetGatewayCommandInput, GetGatewayCommandOutput } from "./commands/GetGatewayCommand";
import { GetGatewayGroupCommandInput, GetGatewayGroupCommandOutput } from "./commands/GetGatewayGroupCommand";
import { GetInvitationConfigurationCommandInput, GetInvitationConfigurationCommandOutput } from "./commands/GetInvitationConfigurationCommand";
import { GetNetworkProfileCommandInput, GetNetworkProfileCommandOutput } from "./commands/GetNetworkProfileCommand";
import { GetProfileCommandInput, GetProfileCommandOutput } from "./commands/GetProfileCommand";
import { GetRoomCommandInput, GetRoomCommandOutput } from "./commands/GetRoomCommand";
import { GetRoomSkillParameterCommandInput, GetRoomSkillParameterCommandOutput } from "./commands/GetRoomSkillParameterCommand";
import { GetSkillGroupCommandInput, GetSkillGroupCommandOutput } from "./commands/GetSkillGroupCommand";
import { ListBusinessReportSchedulesCommandInput, ListBusinessReportSchedulesCommandOutput } from "./commands/ListBusinessReportSchedulesCommand";
import { ListConferenceProvidersCommandInput, ListConferenceProvidersCommandOutput } from "./commands/ListConferenceProvidersCommand";
import { ListDeviceEventsCommandInput, ListDeviceEventsCommandOutput } from "./commands/ListDeviceEventsCommand";
import { ListGatewayGroupsCommandInput, ListGatewayGroupsCommandOutput } from "./commands/ListGatewayGroupsCommand";
import { ListGatewaysCommandInput, ListGatewaysCommandOutput } from "./commands/ListGatewaysCommand";
import { ListSkillsCommandInput, ListSkillsCommandOutput } from "./commands/ListSkillsCommand";
import { ListSkillsStoreCategoriesCommandInput, ListSkillsStoreCategoriesCommandOutput } from "./commands/ListSkillsStoreCategoriesCommand";
import { ListSkillsStoreSkillsByCategoryCommandInput, ListSkillsStoreSkillsByCategoryCommandOutput } from "./commands/ListSkillsStoreSkillsByCategoryCommand";
import { ListSmartHomeAppliancesCommandInput, ListSmartHomeAppliancesCommandOutput } from "./commands/ListSmartHomeAppliancesCommand";
import { ListTagsCommandInput, ListTagsCommandOutput } from "./commands/ListTagsCommand";
import { PutConferencePreferenceCommandInput, PutConferencePreferenceCommandOutput } from "./commands/PutConferencePreferenceCommand";
import { PutInvitationConfigurationCommandInput, PutInvitationConfigurationCommandOutput } from "./commands/PutInvitationConfigurationCommand";
import { PutRoomSkillParameterCommandInput, PutRoomSkillParameterCommandOutput } from "./commands/PutRoomSkillParameterCommand";
import { PutSkillAuthorizationCommandInput, PutSkillAuthorizationCommandOutput } from "./commands/PutSkillAuthorizationCommand";
import { RegisterAVSDeviceCommandInput, RegisterAVSDeviceCommandOutput } from "./commands/RegisterAVSDeviceCommand";
import { RejectSkillCommandInput, RejectSkillCommandOutput } from "./commands/RejectSkillCommand";
import { ResolveRoomCommandInput, ResolveRoomCommandOutput } from "./commands/ResolveRoomCommand";
import { RevokeInvitationCommandInput, RevokeInvitationCommandOutput } from "./commands/RevokeInvitationCommand";
import { SearchAddressBooksCommandInput, SearchAddressBooksCommandOutput } from "./commands/SearchAddressBooksCommand";
import { SearchContactsCommandInput, SearchContactsCommandOutput } from "./commands/SearchContactsCommand";
import { SearchDevicesCommandInput, SearchDevicesCommandOutput } from "./commands/SearchDevicesCommand";
import { SearchNetworkProfilesCommandInput, SearchNetworkProfilesCommandOutput } from "./commands/SearchNetworkProfilesCommand";
import { SearchProfilesCommandInput, SearchProfilesCommandOutput } from "./commands/SearchProfilesCommand";
import { SearchRoomsCommandInput, SearchRoomsCommandOutput } from "./commands/SearchRoomsCommand";
import { SearchSkillGroupsCommandInput, SearchSkillGroupsCommandOutput } from "./commands/SearchSkillGroupsCommand";
import { SearchUsersCommandInput, SearchUsersCommandOutput } from "./commands/SearchUsersCommand";
import { SendAnnouncementCommandInput, SendAnnouncementCommandOutput } from "./commands/SendAnnouncementCommand";
import { SendInvitationCommandInput, SendInvitationCommandOutput } from "./commands/SendInvitationCommand";
import { StartDeviceSyncCommandInput, StartDeviceSyncCommandOutput } from "./commands/StartDeviceSyncCommand";
import { StartSmartHomeApplianceDiscoveryCommandInput, StartSmartHomeApplianceDiscoveryCommandOutput } from "./commands/StartSmartHomeApplianceDiscoveryCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateAddressBookCommandInput, UpdateAddressBookCommandOutput } from "./commands/UpdateAddressBookCommand";
import { UpdateBusinessReportScheduleCommandInput, UpdateBusinessReportScheduleCommandOutput } from "./commands/UpdateBusinessReportScheduleCommand";
import { UpdateConferenceProviderCommandInput, UpdateConferenceProviderCommandOutput } from "./commands/UpdateConferenceProviderCommand";
import { UpdateContactCommandInput, UpdateContactCommandOutput } from "./commands/UpdateContactCommand";
import { UpdateDeviceCommandInput, UpdateDeviceCommandOutput } from "./commands/UpdateDeviceCommand";
import { UpdateGatewayCommandInput, UpdateGatewayCommandOutput } from "./commands/UpdateGatewayCommand";
import { UpdateGatewayGroupCommandInput, UpdateGatewayGroupCommandOutput } from "./commands/UpdateGatewayGroupCommand";
import { UpdateNetworkProfileCommandInput, UpdateNetworkProfileCommandOutput } from "./commands/UpdateNetworkProfileCommand";
import { UpdateProfileCommandInput, UpdateProfileCommandOutput } from "./commands/UpdateProfileCommand";
import { UpdateRoomCommandInput, UpdateRoomCommandOutput } from "./commands/UpdateRoomCommand";
import { UpdateSkillGroupCommandInput, UpdateSkillGroupCommandOutput } from "./commands/UpdateSkillGroupCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
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
export declare class AlexaForBusiness extends AlexaForBusinessClient {
    /**
     * <p>Triggers an asynchronous flow to send text, SSML, or audio announcements to rooms that
     *          are identified by a search or filter. </p>
     */
    sendAnnouncement(args: SendAnnouncementCommandInput, options?: __HttpHandlerOptions): Promise<SendAnnouncementCommandOutput>;
    sendAnnouncement(args: SendAnnouncementCommandInput, cb: (err: any, data?: SendAnnouncementCommandOutput) => void): void;
    sendAnnouncement(args: SendAnnouncementCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SendAnnouncementCommandOutput) => void): void;
    /**
     * <p>When this action is called for a specified shared device, it allows authorized users to
     *          delete the device's entire previous history of voice input data and associated response
     *          data. This action can be called once every 24 hours for a specific shared device.</p>
     */
    deleteDeviceUsageData(args: DeleteDeviceUsageDataCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDeviceUsageDataCommandOutput>;
    deleteDeviceUsageData(args: DeleteDeviceUsageDataCommandInput, cb: (err: any, data?: DeleteDeviceUsageDataCommandOutput) => void): void;
    deleteDeviceUsageData(args: DeleteDeviceUsageDataCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDeviceUsageDataCommandOutput) => void): void;
    /**
     * <p>Associates a skill with the organization under the customer's AWS account. If a skill
     *          is private, the user implicitly accepts access to this skill during enablement.</p>
     */
    approveSkill(args: ApproveSkillCommandInput, options?: __HttpHandlerOptions): Promise<ApproveSkillCommandOutput>;
    approveSkill(args: ApproveSkillCommandInput, cb: (err: any, data?: ApproveSkillCommandOutput) => void): void;
    approveSkill(args: ApproveSkillCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ApproveSkillCommandOutput) => void): void;
    /**
     * <p>Associates a contact with a given address book.</p>
     */
    associateContactWithAddressBook(args: AssociateContactWithAddressBookCommandInput, options?: __HttpHandlerOptions): Promise<AssociateContactWithAddressBookCommandOutput>;
    associateContactWithAddressBook(args: AssociateContactWithAddressBookCommandInput, cb: (err: any, data?: AssociateContactWithAddressBookCommandOutput) => void): void;
    associateContactWithAddressBook(args: AssociateContactWithAddressBookCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateContactWithAddressBookCommandOutput) => void): void;
    /**
     * <p>Associates a device with the specified network profile.</p>
     */
    associateDeviceWithNetworkProfile(args: AssociateDeviceWithNetworkProfileCommandInput, options?: __HttpHandlerOptions): Promise<AssociateDeviceWithNetworkProfileCommandOutput>;
    associateDeviceWithNetworkProfile(args: AssociateDeviceWithNetworkProfileCommandInput, cb: (err: any, data?: AssociateDeviceWithNetworkProfileCommandOutput) => void): void;
    associateDeviceWithNetworkProfile(args: AssociateDeviceWithNetworkProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateDeviceWithNetworkProfileCommandOutput) => void): void;
    /**
     * <p>Associates a device with a given room. This applies all the settings from the room
     *          profile to the device, and all the skills in any skill groups added to that room. This
     *          operation requires the device to be online, or else a manual sync is required. </p>
     */
    associateDeviceWithRoom(args: AssociateDeviceWithRoomCommandInput, options?: __HttpHandlerOptions): Promise<AssociateDeviceWithRoomCommandOutput>;
    associateDeviceWithRoom(args: AssociateDeviceWithRoomCommandInput, cb: (err: any, data?: AssociateDeviceWithRoomCommandOutput) => void): void;
    associateDeviceWithRoom(args: AssociateDeviceWithRoomCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateDeviceWithRoomCommandOutput) => void): void;
    /**
     * <p>Associates a skill group with a given room. This enables all skills in the associated
     *          skill group on all devices in the room.</p>
     */
    associateSkillGroupWithRoom(args: AssociateSkillGroupWithRoomCommandInput, options?: __HttpHandlerOptions): Promise<AssociateSkillGroupWithRoomCommandOutput>;
    associateSkillGroupWithRoom(args: AssociateSkillGroupWithRoomCommandInput, cb: (err: any, data?: AssociateSkillGroupWithRoomCommandOutput) => void): void;
    associateSkillGroupWithRoom(args: AssociateSkillGroupWithRoomCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateSkillGroupWithRoomCommandOutput) => void): void;
    /**
     * <p>Associates a skill with a skill group.</p>
     */
    associateSkillWithSkillGroup(args: AssociateSkillWithSkillGroupCommandInput, options?: __HttpHandlerOptions): Promise<AssociateSkillWithSkillGroupCommandOutput>;
    associateSkillWithSkillGroup(args: AssociateSkillWithSkillGroupCommandInput, cb: (err: any, data?: AssociateSkillWithSkillGroupCommandOutput) => void): void;
    associateSkillWithSkillGroup(args: AssociateSkillWithSkillGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateSkillWithSkillGroupCommandOutput) => void): void;
    /**
     * <p>Makes a private skill available for enrolled users to enable on their devices.</p>
     */
    associateSkillWithUsers(args: AssociateSkillWithUsersCommandInput, options?: __HttpHandlerOptions): Promise<AssociateSkillWithUsersCommandOutput>;
    associateSkillWithUsers(args: AssociateSkillWithUsersCommandInput, cb: (err: any, data?: AssociateSkillWithUsersCommandOutput) => void): void;
    associateSkillWithUsers(args: AssociateSkillWithUsersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateSkillWithUsersCommandOutput) => void): void;
    /**
     * <p>Creates an address book with the specified details.</p>
     */
    createAddressBook(args: CreateAddressBookCommandInput, options?: __HttpHandlerOptions): Promise<CreateAddressBookCommandOutput>;
    createAddressBook(args: CreateAddressBookCommandInput, cb: (err: any, data?: CreateAddressBookCommandOutput) => void): void;
    createAddressBook(args: CreateAddressBookCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateAddressBookCommandOutput) => void): void;
    /**
     * <p>Creates a recurring schedule for usage reports to deliver to the specified S3
     *          location with a specified daily or weekly interval.</p>
     */
    createBusinessReportSchedule(args: CreateBusinessReportScheduleCommandInput, options?: __HttpHandlerOptions): Promise<CreateBusinessReportScheduleCommandOutput>;
    createBusinessReportSchedule(args: CreateBusinessReportScheduleCommandInput, cb: (err: any, data?: CreateBusinessReportScheduleCommandOutput) => void): void;
    createBusinessReportSchedule(args: CreateBusinessReportScheduleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateBusinessReportScheduleCommandOutput) => void): void;
    /**
     * <p>Adds a new conference provider under the user's AWS account.</p>
     */
    createConferenceProvider(args: CreateConferenceProviderCommandInput, options?: __HttpHandlerOptions): Promise<CreateConferenceProviderCommandOutput>;
    createConferenceProvider(args: CreateConferenceProviderCommandInput, cb: (err: any, data?: CreateConferenceProviderCommandOutput) => void): void;
    createConferenceProvider(args: CreateConferenceProviderCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateConferenceProviderCommandOutput) => void): void;
    /**
     * <p>Creates a contact with the specified details.</p>
     */
    createContact(args: CreateContactCommandInput, options?: __HttpHandlerOptions): Promise<CreateContactCommandOutput>;
    createContact(args: CreateContactCommandInput, cb: (err: any, data?: CreateContactCommandOutput) => void): void;
    createContact(args: CreateContactCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateContactCommandOutput) => void): void;
    /**
     * <p>Creates a gateway group with the specified details.</p>
     */
    createGatewayGroup(args: CreateGatewayGroupCommandInput, options?: __HttpHandlerOptions): Promise<CreateGatewayGroupCommandOutput>;
    createGatewayGroup(args: CreateGatewayGroupCommandInput, cb: (err: any, data?: CreateGatewayGroupCommandOutput) => void): void;
    createGatewayGroup(args: CreateGatewayGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateGatewayGroupCommandOutput) => void): void;
    /**
     * <p>Creates a network profile with the specified details.</p>
     */
    createNetworkProfile(args: CreateNetworkProfileCommandInput, options?: __HttpHandlerOptions): Promise<CreateNetworkProfileCommandOutput>;
    createNetworkProfile(args: CreateNetworkProfileCommandInput, cb: (err: any, data?: CreateNetworkProfileCommandOutput) => void): void;
    createNetworkProfile(args: CreateNetworkProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateNetworkProfileCommandOutput) => void): void;
    /**
     * <p>Creates a new room profile with the specified details.</p>
     */
    createProfile(args: CreateProfileCommandInput, options?: __HttpHandlerOptions): Promise<CreateProfileCommandOutput>;
    createProfile(args: CreateProfileCommandInput, cb: (err: any, data?: CreateProfileCommandOutput) => void): void;
    createProfile(args: CreateProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateProfileCommandOutput) => void): void;
    /**
     * <p>Creates a room with the specified details.</p>
     */
    createRoom(args: CreateRoomCommandInput, options?: __HttpHandlerOptions): Promise<CreateRoomCommandOutput>;
    createRoom(args: CreateRoomCommandInput, cb: (err: any, data?: CreateRoomCommandOutput) => void): void;
    createRoom(args: CreateRoomCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateRoomCommandOutput) => void): void;
    /**
     * <p>Creates a skill group with a specified name and description.</p>
     */
    createSkillGroup(args: CreateSkillGroupCommandInput, options?: __HttpHandlerOptions): Promise<CreateSkillGroupCommandOutput>;
    createSkillGroup(args: CreateSkillGroupCommandInput, cb: (err: any, data?: CreateSkillGroupCommandOutput) => void): void;
    createSkillGroup(args: CreateSkillGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateSkillGroupCommandOutput) => void): void;
    /**
     * <p>Creates a user.</p>
     */
    createUser(args: CreateUserCommandInput, options?: __HttpHandlerOptions): Promise<CreateUserCommandOutput>;
    createUser(args: CreateUserCommandInput, cb: (err: any, data?: CreateUserCommandOutput) => void): void;
    createUser(args: CreateUserCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateUserCommandOutput) => void): void;
    /**
     * <p>Deletes an address book by the address book ARN.</p>
     */
    deleteAddressBook(args: DeleteAddressBookCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAddressBookCommandOutput>;
    deleteAddressBook(args: DeleteAddressBookCommandInput, cb: (err: any, data?: DeleteAddressBookCommandOutput) => void): void;
    deleteAddressBook(args: DeleteAddressBookCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteAddressBookCommandOutput) => void): void;
    /**
     * <p>Deletes the recurring report delivery schedule with the specified schedule
     *          ARN.</p>
     */
    deleteBusinessReportSchedule(args: DeleteBusinessReportScheduleCommandInput, options?: __HttpHandlerOptions): Promise<DeleteBusinessReportScheduleCommandOutput>;
    deleteBusinessReportSchedule(args: DeleteBusinessReportScheduleCommandInput, cb: (err: any, data?: DeleteBusinessReportScheduleCommandOutput) => void): void;
    deleteBusinessReportSchedule(args: DeleteBusinessReportScheduleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteBusinessReportScheduleCommandOutput) => void): void;
    /**
     * <p>Deletes a conference provider.</p>
     */
    deleteConferenceProvider(args: DeleteConferenceProviderCommandInput, options?: __HttpHandlerOptions): Promise<DeleteConferenceProviderCommandOutput>;
    deleteConferenceProvider(args: DeleteConferenceProviderCommandInput, cb: (err: any, data?: DeleteConferenceProviderCommandOutput) => void): void;
    deleteConferenceProvider(args: DeleteConferenceProviderCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteConferenceProviderCommandOutput) => void): void;
    /**
     * <p>Deletes a contact by the contact ARN.</p>
     */
    deleteContact(args: DeleteContactCommandInput, options?: __HttpHandlerOptions): Promise<DeleteContactCommandOutput>;
    deleteContact(args: DeleteContactCommandInput, cb: (err: any, data?: DeleteContactCommandOutput) => void): void;
    deleteContact(args: DeleteContactCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteContactCommandOutput) => void): void;
    /**
     * <p>Removes a device from Alexa For Business.</p>
     */
    deleteDevice(args: DeleteDeviceCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDeviceCommandOutput>;
    deleteDevice(args: DeleteDeviceCommandInput, cb: (err: any, data?: DeleteDeviceCommandOutput) => void): void;
    deleteDevice(args: DeleteDeviceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDeviceCommandOutput) => void): void;
    /**
     * <p>Deletes a gateway group.</p>
     */
    deleteGatewayGroup(args: DeleteGatewayGroupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteGatewayGroupCommandOutput>;
    deleteGatewayGroup(args: DeleteGatewayGroupCommandInput, cb: (err: any, data?: DeleteGatewayGroupCommandOutput) => void): void;
    deleteGatewayGroup(args: DeleteGatewayGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteGatewayGroupCommandOutput) => void): void;
    /**
     * <p>Deletes a network profile by the network profile ARN.</p>
     */
    deleteNetworkProfile(args: DeleteNetworkProfileCommandInput, options?: __HttpHandlerOptions): Promise<DeleteNetworkProfileCommandOutput>;
    deleteNetworkProfile(args: DeleteNetworkProfileCommandInput, cb: (err: any, data?: DeleteNetworkProfileCommandOutput) => void): void;
    deleteNetworkProfile(args: DeleteNetworkProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteNetworkProfileCommandOutput) => void): void;
    /**
     * <p>Deletes a room profile by the profile ARN.</p>
     */
    deleteProfile(args: DeleteProfileCommandInput, options?: __HttpHandlerOptions): Promise<DeleteProfileCommandOutput>;
    deleteProfile(args: DeleteProfileCommandInput, cb: (err: any, data?: DeleteProfileCommandOutput) => void): void;
    deleteProfile(args: DeleteProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteProfileCommandOutput) => void): void;
    /**
     * <p>Deletes a room by the room ARN.</p>
     */
    deleteRoom(args: DeleteRoomCommandInput, options?: __HttpHandlerOptions): Promise<DeleteRoomCommandOutput>;
    deleteRoom(args: DeleteRoomCommandInput, cb: (err: any, data?: DeleteRoomCommandOutput) => void): void;
    deleteRoom(args: DeleteRoomCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteRoomCommandOutput) => void): void;
    /**
     * <p>Deletes room skill parameter details by room, skill, and parameter key ID.</p>
     */
    deleteRoomSkillParameter(args: DeleteRoomSkillParameterCommandInput, options?: __HttpHandlerOptions): Promise<DeleteRoomSkillParameterCommandOutput>;
    deleteRoomSkillParameter(args: DeleteRoomSkillParameterCommandInput, cb: (err: any, data?: DeleteRoomSkillParameterCommandOutput) => void): void;
    deleteRoomSkillParameter(args: DeleteRoomSkillParameterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteRoomSkillParameterCommandOutput) => void): void;
    /**
     * <p>Unlinks a third-party account from a skill.</p>
     */
    deleteSkillAuthorization(args: DeleteSkillAuthorizationCommandInput, options?: __HttpHandlerOptions): Promise<DeleteSkillAuthorizationCommandOutput>;
    deleteSkillAuthorization(args: DeleteSkillAuthorizationCommandInput, cb: (err: any, data?: DeleteSkillAuthorizationCommandOutput) => void): void;
    deleteSkillAuthorization(args: DeleteSkillAuthorizationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteSkillAuthorizationCommandOutput) => void): void;
    /**
     * <p>Deletes a skill group by skill group ARN.</p>
     */
    deleteSkillGroup(args: DeleteSkillGroupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteSkillGroupCommandOutput>;
    deleteSkillGroup(args: DeleteSkillGroupCommandInput, cb: (err: any, data?: DeleteSkillGroupCommandOutput) => void): void;
    deleteSkillGroup(args: DeleteSkillGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteSkillGroupCommandOutput) => void): void;
    /**
     * <p>Deletes a specified user by user ARN and enrollment ARN.</p>
     */
    deleteUser(args: DeleteUserCommandInput, options?: __HttpHandlerOptions): Promise<DeleteUserCommandOutput>;
    deleteUser(args: DeleteUserCommandInput, cb: (err: any, data?: DeleteUserCommandOutput) => void): void;
    deleteUser(args: DeleteUserCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteUserCommandOutput) => void): void;
    /**
     * <p>Disassociates a contact from a given address book.</p>
     */
    disassociateContactFromAddressBook(args: DisassociateContactFromAddressBookCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateContactFromAddressBookCommandOutput>;
    disassociateContactFromAddressBook(args: DisassociateContactFromAddressBookCommandInput, cb: (err: any, data?: DisassociateContactFromAddressBookCommandOutput) => void): void;
    disassociateContactFromAddressBook(args: DisassociateContactFromAddressBookCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateContactFromAddressBookCommandOutput) => void): void;
    /**
     * <p>Disassociates a device from its current room. The device continues to be connected to
     *          the Wi-Fi network and is still registered to the account. The device settings and skills
     *          are removed from the room.</p>
     */
    disassociateDeviceFromRoom(args: DisassociateDeviceFromRoomCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateDeviceFromRoomCommandOutput>;
    disassociateDeviceFromRoom(args: DisassociateDeviceFromRoomCommandInput, cb: (err: any, data?: DisassociateDeviceFromRoomCommandOutput) => void): void;
    disassociateDeviceFromRoom(args: DisassociateDeviceFromRoomCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateDeviceFromRoomCommandOutput) => void): void;
    /**
     * <p>Disassociates a skill from a skill group.</p>
     */
    disassociateSkillFromSkillGroup(args: DisassociateSkillFromSkillGroupCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateSkillFromSkillGroupCommandOutput>;
    disassociateSkillFromSkillGroup(args: DisassociateSkillFromSkillGroupCommandInput, cb: (err: any, data?: DisassociateSkillFromSkillGroupCommandOutput) => void): void;
    disassociateSkillFromSkillGroup(args: DisassociateSkillFromSkillGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateSkillFromSkillGroupCommandOutput) => void): void;
    /**
     * <p>Makes a private skill unavailable for enrolled users and prevents them from enabling it
     *          on their devices.</p>
     */
    disassociateSkillFromUsers(args: DisassociateSkillFromUsersCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateSkillFromUsersCommandOutput>;
    disassociateSkillFromUsers(args: DisassociateSkillFromUsersCommandInput, cb: (err: any, data?: DisassociateSkillFromUsersCommandOutput) => void): void;
    disassociateSkillFromUsers(args: DisassociateSkillFromUsersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateSkillFromUsersCommandOutput) => void): void;
    /**
     * <p>Disassociates a skill group from a specified room. This disables all skills in the
     *          skill group on all devices in the room.</p>
     */
    disassociateSkillGroupFromRoom(args: DisassociateSkillGroupFromRoomCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateSkillGroupFromRoomCommandOutput>;
    disassociateSkillGroupFromRoom(args: DisassociateSkillGroupFromRoomCommandInput, cb: (err: any, data?: DisassociateSkillGroupFromRoomCommandOutput) => void): void;
    disassociateSkillGroupFromRoom(args: DisassociateSkillGroupFromRoomCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateSkillGroupFromRoomCommandOutput) => void): void;
    /**
     * <p>Forgets smart home appliances associated to a room.</p>
     */
    forgetSmartHomeAppliances(args: ForgetSmartHomeAppliancesCommandInput, options?: __HttpHandlerOptions): Promise<ForgetSmartHomeAppliancesCommandOutput>;
    forgetSmartHomeAppliances(args: ForgetSmartHomeAppliancesCommandInput, cb: (err: any, data?: ForgetSmartHomeAppliancesCommandOutput) => void): void;
    forgetSmartHomeAppliances(args: ForgetSmartHomeAppliancesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ForgetSmartHomeAppliancesCommandOutput) => void): void;
    /**
     * <p>Gets address the book details by the address book ARN.</p>
     */
    getAddressBook(args: GetAddressBookCommandInput, options?: __HttpHandlerOptions): Promise<GetAddressBookCommandOutput>;
    getAddressBook(args: GetAddressBookCommandInput, cb: (err: any, data?: GetAddressBookCommandOutput) => void): void;
    getAddressBook(args: GetAddressBookCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetAddressBookCommandOutput) => void): void;
    /**
     * <p>Retrieves the existing conference preferences.</p>
     */
    getConferencePreference(args: GetConferencePreferenceCommandInput, options?: __HttpHandlerOptions): Promise<GetConferencePreferenceCommandOutput>;
    getConferencePreference(args: GetConferencePreferenceCommandInput, cb: (err: any, data?: GetConferencePreferenceCommandOutput) => void): void;
    getConferencePreference(args: GetConferencePreferenceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetConferencePreferenceCommandOutput) => void): void;
    /**
     * <p>Gets details about a specific conference provider.</p>
     */
    getConferenceProvider(args: GetConferenceProviderCommandInput, options?: __HttpHandlerOptions): Promise<GetConferenceProviderCommandOutput>;
    getConferenceProvider(args: GetConferenceProviderCommandInput, cb: (err: any, data?: GetConferenceProviderCommandOutput) => void): void;
    getConferenceProvider(args: GetConferenceProviderCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetConferenceProviderCommandOutput) => void): void;
    /**
     * <p>Gets the contact details by the contact ARN.</p>
     */
    getContact(args: GetContactCommandInput, options?: __HttpHandlerOptions): Promise<GetContactCommandOutput>;
    getContact(args: GetContactCommandInput, cb: (err: any, data?: GetContactCommandOutput) => void): void;
    getContact(args: GetContactCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetContactCommandOutput) => void): void;
    /**
     * <p>Gets the details of a device by device ARN.</p>
     */
    getDevice(args: GetDeviceCommandInput, options?: __HttpHandlerOptions): Promise<GetDeviceCommandOutput>;
    getDevice(args: GetDeviceCommandInput, cb: (err: any, data?: GetDeviceCommandOutput) => void): void;
    getDevice(args: GetDeviceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDeviceCommandOutput) => void): void;
    /**
     * <p>Retrieves the details of a gateway.</p>
     */
    getGateway(args: GetGatewayCommandInput, options?: __HttpHandlerOptions): Promise<GetGatewayCommandOutput>;
    getGateway(args: GetGatewayCommandInput, cb: (err: any, data?: GetGatewayCommandOutput) => void): void;
    getGateway(args: GetGatewayCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetGatewayCommandOutput) => void): void;
    /**
     * <p>Retrieves the details of a gateway group.</p>
     */
    getGatewayGroup(args: GetGatewayGroupCommandInput, options?: __HttpHandlerOptions): Promise<GetGatewayGroupCommandOutput>;
    getGatewayGroup(args: GetGatewayGroupCommandInput, cb: (err: any, data?: GetGatewayGroupCommandOutput) => void): void;
    getGatewayGroup(args: GetGatewayGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetGatewayGroupCommandOutput) => void): void;
    /**
     * <p>Retrieves the configured values for the user enrollment invitation email
     *          template.</p>
     */
    getInvitationConfiguration(args: GetInvitationConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<GetInvitationConfigurationCommandOutput>;
    getInvitationConfiguration(args: GetInvitationConfigurationCommandInput, cb: (err: any, data?: GetInvitationConfigurationCommandOutput) => void): void;
    getInvitationConfiguration(args: GetInvitationConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetInvitationConfigurationCommandOutput) => void): void;
    /**
     * <p>Gets the network profile details by the network profile ARN.</p>
     */
    getNetworkProfile(args: GetNetworkProfileCommandInput, options?: __HttpHandlerOptions): Promise<GetNetworkProfileCommandOutput>;
    getNetworkProfile(args: GetNetworkProfileCommandInput, cb: (err: any, data?: GetNetworkProfileCommandOutput) => void): void;
    getNetworkProfile(args: GetNetworkProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetNetworkProfileCommandOutput) => void): void;
    /**
     * <p>Gets the details of a room profile by profile ARN.</p>
     */
    getProfile(args: GetProfileCommandInput, options?: __HttpHandlerOptions): Promise<GetProfileCommandOutput>;
    getProfile(args: GetProfileCommandInput, cb: (err: any, data?: GetProfileCommandOutput) => void): void;
    getProfile(args: GetProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetProfileCommandOutput) => void): void;
    /**
     * <p>Gets room details by room ARN.</p>
     */
    getRoom(args: GetRoomCommandInput, options?: __HttpHandlerOptions): Promise<GetRoomCommandOutput>;
    getRoom(args: GetRoomCommandInput, cb: (err: any, data?: GetRoomCommandOutput) => void): void;
    getRoom(args: GetRoomCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetRoomCommandOutput) => void): void;
    /**
     * <p>Gets room skill parameter details by room, skill, and parameter key ARN.</p>
     */
    getRoomSkillParameter(args: GetRoomSkillParameterCommandInput, options?: __HttpHandlerOptions): Promise<GetRoomSkillParameterCommandOutput>;
    getRoomSkillParameter(args: GetRoomSkillParameterCommandInput, cb: (err: any, data?: GetRoomSkillParameterCommandOutput) => void): void;
    getRoomSkillParameter(args: GetRoomSkillParameterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetRoomSkillParameterCommandOutput) => void): void;
    /**
     * <p>Gets skill group details by skill group ARN.</p>
     */
    getSkillGroup(args: GetSkillGroupCommandInput, options?: __HttpHandlerOptions): Promise<GetSkillGroupCommandOutput>;
    getSkillGroup(args: GetSkillGroupCommandInput, cb: (err: any, data?: GetSkillGroupCommandOutput) => void): void;
    getSkillGroup(args: GetSkillGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetSkillGroupCommandOutput) => void): void;
    /**
     * <p>Lists the details of the schedules that a user configured. A download URL of the report associated with each schedule is returned every time this action is called. A new download URL is returned each time, and is valid for 24 hours.</p>
     */
    listBusinessReportSchedules(args: ListBusinessReportSchedulesCommandInput, options?: __HttpHandlerOptions): Promise<ListBusinessReportSchedulesCommandOutput>;
    listBusinessReportSchedules(args: ListBusinessReportSchedulesCommandInput, cb: (err: any, data?: ListBusinessReportSchedulesCommandOutput) => void): void;
    listBusinessReportSchedules(args: ListBusinessReportSchedulesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListBusinessReportSchedulesCommandOutput) => void): void;
    /**
     * <p>Lists conference providers under a specific AWS account.</p>
     */
    listConferenceProviders(args: ListConferenceProvidersCommandInput, options?: __HttpHandlerOptions): Promise<ListConferenceProvidersCommandOutput>;
    listConferenceProviders(args: ListConferenceProvidersCommandInput, cb: (err: any, data?: ListConferenceProvidersCommandOutput) => void): void;
    listConferenceProviders(args: ListConferenceProvidersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListConferenceProvidersCommandOutput) => void): void;
    /**
     * <p>Lists the device event history, including device connection status, for up to 30
     *          days.</p>
     */
    listDeviceEvents(args: ListDeviceEventsCommandInput, options?: __HttpHandlerOptions): Promise<ListDeviceEventsCommandOutput>;
    listDeviceEvents(args: ListDeviceEventsCommandInput, cb: (err: any, data?: ListDeviceEventsCommandOutput) => void): void;
    listDeviceEvents(args: ListDeviceEventsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDeviceEventsCommandOutput) => void): void;
    /**
     * <p>Retrieves a list of gateway group summaries. Use GetGatewayGroup to retrieve details of
     *          a specific gateway group.</p>
     */
    listGatewayGroups(args: ListGatewayGroupsCommandInput, options?: __HttpHandlerOptions): Promise<ListGatewayGroupsCommandOutput>;
    listGatewayGroups(args: ListGatewayGroupsCommandInput, cb: (err: any, data?: ListGatewayGroupsCommandOutput) => void): void;
    listGatewayGroups(args: ListGatewayGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListGatewayGroupsCommandOutput) => void): void;
    /**
     * <p>Retrieves a list of gateway summaries. Use GetGateway to retrieve details of a specific
     *          gateway. An optional gateway group ARN can be provided to only retrieve gateway summaries
     *          of gateways that are associated with that gateway group ARN.</p>
     */
    listGateways(args: ListGatewaysCommandInput, options?: __HttpHandlerOptions): Promise<ListGatewaysCommandOutput>;
    listGateways(args: ListGatewaysCommandInput, cb: (err: any, data?: ListGatewaysCommandOutput) => void): void;
    listGateways(args: ListGatewaysCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListGatewaysCommandOutput) => void): void;
    /**
     * <p>Lists all enabled skills in a specific skill group.</p>
     */
    listSkills(args: ListSkillsCommandInput, options?: __HttpHandlerOptions): Promise<ListSkillsCommandOutput>;
    listSkills(args: ListSkillsCommandInput, cb: (err: any, data?: ListSkillsCommandOutput) => void): void;
    listSkills(args: ListSkillsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListSkillsCommandOutput) => void): void;
    /**
     * <p>Lists all categories in the Alexa skill store.</p>
     */
    listSkillsStoreCategories(args: ListSkillsStoreCategoriesCommandInput, options?: __HttpHandlerOptions): Promise<ListSkillsStoreCategoriesCommandOutput>;
    listSkillsStoreCategories(args: ListSkillsStoreCategoriesCommandInput, cb: (err: any, data?: ListSkillsStoreCategoriesCommandOutput) => void): void;
    listSkillsStoreCategories(args: ListSkillsStoreCategoriesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListSkillsStoreCategoriesCommandOutput) => void): void;
    /**
     * <p>Lists all skills in the Alexa skill store by category.</p>
     */
    listSkillsStoreSkillsByCategory(args: ListSkillsStoreSkillsByCategoryCommandInput, options?: __HttpHandlerOptions): Promise<ListSkillsStoreSkillsByCategoryCommandOutput>;
    listSkillsStoreSkillsByCategory(args: ListSkillsStoreSkillsByCategoryCommandInput, cb: (err: any, data?: ListSkillsStoreSkillsByCategoryCommandOutput) => void): void;
    listSkillsStoreSkillsByCategory(args: ListSkillsStoreSkillsByCategoryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListSkillsStoreSkillsByCategoryCommandOutput) => void): void;
    /**
     * <p>Lists all of the smart home appliances associated with a room.</p>
     */
    listSmartHomeAppliances(args: ListSmartHomeAppliancesCommandInput, options?: __HttpHandlerOptions): Promise<ListSmartHomeAppliancesCommandOutput>;
    listSmartHomeAppliances(args: ListSmartHomeAppliancesCommandInput, cb: (err: any, data?: ListSmartHomeAppliancesCommandOutput) => void): void;
    listSmartHomeAppliances(args: ListSmartHomeAppliancesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListSmartHomeAppliancesCommandOutput) => void): void;
    /**
     * <p>Lists all tags for the specified resource.</p>
     */
    listTags(args: ListTagsCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsCommandOutput>;
    listTags(args: ListTagsCommandInput, cb: (err: any, data?: ListTagsCommandOutput) => void): void;
    listTags(args: ListTagsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsCommandOutput) => void): void;
    /**
     * <p>Sets the conference preferences on a specific conference provider at the account
     *          level.</p>
     */
    putConferencePreference(args: PutConferencePreferenceCommandInput, options?: __HttpHandlerOptions): Promise<PutConferencePreferenceCommandOutput>;
    putConferencePreference(args: PutConferencePreferenceCommandInput, cb: (err: any, data?: PutConferencePreferenceCommandOutput) => void): void;
    putConferencePreference(args: PutConferencePreferenceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutConferencePreferenceCommandOutput) => void): void;
    /**
     * <p>Configures the email template for the user enrollment invitation with the specified
     *          attributes.</p>
     */
    putInvitationConfiguration(args: PutInvitationConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<PutInvitationConfigurationCommandOutput>;
    putInvitationConfiguration(args: PutInvitationConfigurationCommandInput, cb: (err: any, data?: PutInvitationConfigurationCommandOutput) => void): void;
    putInvitationConfiguration(args: PutInvitationConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutInvitationConfigurationCommandOutput) => void): void;
    /**
     * <p>Updates room skill parameter details by room, skill, and parameter key ID. Not all
     *          skills have a room skill parameter.</p>
     */
    putRoomSkillParameter(args: PutRoomSkillParameterCommandInput, options?: __HttpHandlerOptions): Promise<PutRoomSkillParameterCommandOutput>;
    putRoomSkillParameter(args: PutRoomSkillParameterCommandInput, cb: (err: any, data?: PutRoomSkillParameterCommandOutput) => void): void;
    putRoomSkillParameter(args: PutRoomSkillParameterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutRoomSkillParameterCommandOutput) => void): void;
    /**
     * <p>Links a user's account to a third-party skill provider. If this API operation is
     *          called by an assumed IAM role, the skill being linked must be a private skill. Also, the
     *          skill must be owned by the AWS account that assumed the IAM role.</p>
     */
    putSkillAuthorization(args: PutSkillAuthorizationCommandInput, options?: __HttpHandlerOptions): Promise<PutSkillAuthorizationCommandOutput>;
    putSkillAuthorization(args: PutSkillAuthorizationCommandInput, cb: (err: any, data?: PutSkillAuthorizationCommandOutput) => void): void;
    putSkillAuthorization(args: PutSkillAuthorizationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutSkillAuthorizationCommandOutput) => void): void;
    /**
     * <p>Registers an Alexa-enabled device built by an Original Equipment Manufacturer (OEM)
     *          using Alexa Voice Service (AVS).</p>
     */
    registerAVSDevice(args: RegisterAVSDeviceCommandInput, options?: __HttpHandlerOptions): Promise<RegisterAVSDeviceCommandOutput>;
    registerAVSDevice(args: RegisterAVSDeviceCommandInput, cb: (err: any, data?: RegisterAVSDeviceCommandOutput) => void): void;
    registerAVSDevice(args: RegisterAVSDeviceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RegisterAVSDeviceCommandOutput) => void): void;
    /**
     * <p>Disassociates a skill from the organization under a user's AWS account. If the skill
     *          is a private skill, it moves to an AcceptStatus of PENDING. Any private or public skill
     *          that is rejected can be added later by calling the ApproveSkill API. </p>
     */
    rejectSkill(args: RejectSkillCommandInput, options?: __HttpHandlerOptions): Promise<RejectSkillCommandOutput>;
    rejectSkill(args: RejectSkillCommandInput, cb: (err: any, data?: RejectSkillCommandOutput) => void): void;
    rejectSkill(args: RejectSkillCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RejectSkillCommandOutput) => void): void;
    /**
     * <p>Determines the details for the room from which a skill request was invoked. This
     *          operation is used by skill developers.</p>
     */
    resolveRoom(args: ResolveRoomCommandInput, options?: __HttpHandlerOptions): Promise<ResolveRoomCommandOutput>;
    resolveRoom(args: ResolveRoomCommandInput, cb: (err: any, data?: ResolveRoomCommandOutput) => void): void;
    resolveRoom(args: ResolveRoomCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ResolveRoomCommandOutput) => void): void;
    /**
     * <p>Revokes an invitation and invalidates the enrollment URL.</p>
     */
    revokeInvitation(args: RevokeInvitationCommandInput, options?: __HttpHandlerOptions): Promise<RevokeInvitationCommandOutput>;
    revokeInvitation(args: RevokeInvitationCommandInput, cb: (err: any, data?: RevokeInvitationCommandOutput) => void): void;
    revokeInvitation(args: RevokeInvitationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RevokeInvitationCommandOutput) => void): void;
    /**
     * <p>Searches address books and lists the ones that meet a set of filter and sort
     *          criteria.</p>
     */
    searchAddressBooks(args: SearchAddressBooksCommandInput, options?: __HttpHandlerOptions): Promise<SearchAddressBooksCommandOutput>;
    searchAddressBooks(args: SearchAddressBooksCommandInput, cb: (err: any, data?: SearchAddressBooksCommandOutput) => void): void;
    searchAddressBooks(args: SearchAddressBooksCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SearchAddressBooksCommandOutput) => void): void;
    /**
     * <p>Searches contacts and lists the ones that meet a set of filter and sort
     *          criteria.</p>
     */
    searchContacts(args: SearchContactsCommandInput, options?: __HttpHandlerOptions): Promise<SearchContactsCommandOutput>;
    searchContacts(args: SearchContactsCommandInput, cb: (err: any, data?: SearchContactsCommandOutput) => void): void;
    searchContacts(args: SearchContactsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SearchContactsCommandOutput) => void): void;
    /**
     * <p>Searches devices and lists the ones that meet a set of filter criteria.</p>
     */
    searchDevices(args: SearchDevicesCommandInput, options?: __HttpHandlerOptions): Promise<SearchDevicesCommandOutput>;
    searchDevices(args: SearchDevicesCommandInput, cb: (err: any, data?: SearchDevicesCommandOutput) => void): void;
    searchDevices(args: SearchDevicesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SearchDevicesCommandOutput) => void): void;
    /**
     * <p>Searches network profiles and lists the ones that meet a set of filter and sort
     *          criteria.</p>
     */
    searchNetworkProfiles(args: SearchNetworkProfilesCommandInput, options?: __HttpHandlerOptions): Promise<SearchNetworkProfilesCommandOutput>;
    searchNetworkProfiles(args: SearchNetworkProfilesCommandInput, cb: (err: any, data?: SearchNetworkProfilesCommandOutput) => void): void;
    searchNetworkProfiles(args: SearchNetworkProfilesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SearchNetworkProfilesCommandOutput) => void): void;
    /**
     * <p>Searches room profiles and lists the ones that meet a set of filter
     *          criteria.</p>
     */
    searchProfiles(args: SearchProfilesCommandInput, options?: __HttpHandlerOptions): Promise<SearchProfilesCommandOutput>;
    searchProfiles(args: SearchProfilesCommandInput, cb: (err: any, data?: SearchProfilesCommandOutput) => void): void;
    searchProfiles(args: SearchProfilesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SearchProfilesCommandOutput) => void): void;
    /**
     * <p>Searches rooms and lists the ones that meet a set of filter and sort
     *          criteria.</p>
     */
    searchRooms(args: SearchRoomsCommandInput, options?: __HttpHandlerOptions): Promise<SearchRoomsCommandOutput>;
    searchRooms(args: SearchRoomsCommandInput, cb: (err: any, data?: SearchRoomsCommandOutput) => void): void;
    searchRooms(args: SearchRoomsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SearchRoomsCommandOutput) => void): void;
    /**
     * <p>Searches skill groups and lists the ones that meet a set of filter and sort
     *          criteria.</p>
     */
    searchSkillGroups(args: SearchSkillGroupsCommandInput, options?: __HttpHandlerOptions): Promise<SearchSkillGroupsCommandOutput>;
    searchSkillGroups(args: SearchSkillGroupsCommandInput, cb: (err: any, data?: SearchSkillGroupsCommandOutput) => void): void;
    searchSkillGroups(args: SearchSkillGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SearchSkillGroupsCommandOutput) => void): void;
    /**
     * <p>Searches users and lists the ones that meet a set of filter and sort
     *          criteria.</p>
     */
    searchUsers(args: SearchUsersCommandInput, options?: __HttpHandlerOptions): Promise<SearchUsersCommandOutput>;
    searchUsers(args: SearchUsersCommandInput, cb: (err: any, data?: SearchUsersCommandOutput) => void): void;
    searchUsers(args: SearchUsersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SearchUsersCommandOutput) => void): void;
    /**
     * <p>Sends an enrollment invitation email with a URL to a user. The URL is valid for 30
     *          days or until you call this operation again, whichever comes first. </p>
     */
    sendInvitation(args: SendInvitationCommandInput, options?: __HttpHandlerOptions): Promise<SendInvitationCommandOutput>;
    sendInvitation(args: SendInvitationCommandInput, cb: (err: any, data?: SendInvitationCommandOutput) => void): void;
    sendInvitation(args: SendInvitationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SendInvitationCommandOutput) => void): void;
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
    startDeviceSync(args: StartDeviceSyncCommandInput, options?: __HttpHandlerOptions): Promise<StartDeviceSyncCommandOutput>;
    startDeviceSync(args: StartDeviceSyncCommandInput, cb: (err: any, data?: StartDeviceSyncCommandOutput) => void): void;
    startDeviceSync(args: StartDeviceSyncCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartDeviceSyncCommandOutput) => void): void;
    /**
     * <p>Initiates the discovery of any smart home appliances associated with the
     *          room.</p>
     */
    startSmartHomeApplianceDiscovery(args: StartSmartHomeApplianceDiscoveryCommandInput, options?: __HttpHandlerOptions): Promise<StartSmartHomeApplianceDiscoveryCommandOutput>;
    startSmartHomeApplianceDiscovery(args: StartSmartHomeApplianceDiscoveryCommandInput, cb: (err: any, data?: StartSmartHomeApplianceDiscoveryCommandOutput) => void): void;
    startSmartHomeApplianceDiscovery(args: StartSmartHomeApplianceDiscoveryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartSmartHomeApplianceDiscoveryCommandOutput) => void): void;
    /**
     * <p>Adds metadata tags to a specified resource.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Removes metadata tags from a specified resource.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Updates address book details by the address book ARN.</p>
     */
    updateAddressBook(args: UpdateAddressBookCommandInput, options?: __HttpHandlerOptions): Promise<UpdateAddressBookCommandOutput>;
    updateAddressBook(args: UpdateAddressBookCommandInput, cb: (err: any, data?: UpdateAddressBookCommandOutput) => void): void;
    updateAddressBook(args: UpdateAddressBookCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateAddressBookCommandOutput) => void): void;
    /**
     * <p>Updates the configuration of the report delivery schedule with the specified schedule
     *          ARN.</p>
     */
    updateBusinessReportSchedule(args: UpdateBusinessReportScheduleCommandInput, options?: __HttpHandlerOptions): Promise<UpdateBusinessReportScheduleCommandOutput>;
    updateBusinessReportSchedule(args: UpdateBusinessReportScheduleCommandInput, cb: (err: any, data?: UpdateBusinessReportScheduleCommandOutput) => void): void;
    updateBusinessReportSchedule(args: UpdateBusinessReportScheduleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateBusinessReportScheduleCommandOutput) => void): void;
    /**
     * <p>Updates an existing conference provider's settings.</p>
     */
    updateConferenceProvider(args: UpdateConferenceProviderCommandInput, options?: __HttpHandlerOptions): Promise<UpdateConferenceProviderCommandOutput>;
    updateConferenceProvider(args: UpdateConferenceProviderCommandInput, cb: (err: any, data?: UpdateConferenceProviderCommandOutput) => void): void;
    updateConferenceProvider(args: UpdateConferenceProviderCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateConferenceProviderCommandOutput) => void): void;
    /**
     * <p>Updates the contact details by the contact ARN.</p>
     */
    updateContact(args: UpdateContactCommandInput, options?: __HttpHandlerOptions): Promise<UpdateContactCommandOutput>;
    updateContact(args: UpdateContactCommandInput, cb: (err: any, data?: UpdateContactCommandOutput) => void): void;
    updateContact(args: UpdateContactCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateContactCommandOutput) => void): void;
    /**
     * <p>Updates the device name by device ARN.</p>
     */
    updateDevice(args: UpdateDeviceCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDeviceCommandOutput>;
    updateDevice(args: UpdateDeviceCommandInput, cb: (err: any, data?: UpdateDeviceCommandOutput) => void): void;
    updateDevice(args: UpdateDeviceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateDeviceCommandOutput) => void): void;
    /**
     * <p>Updates the details of a gateway. If any optional field is not provided, the existing
     *          corresponding value is left unmodified.</p>
     */
    updateGateway(args: UpdateGatewayCommandInput, options?: __HttpHandlerOptions): Promise<UpdateGatewayCommandOutput>;
    updateGateway(args: UpdateGatewayCommandInput, cb: (err: any, data?: UpdateGatewayCommandOutput) => void): void;
    updateGateway(args: UpdateGatewayCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateGatewayCommandOutput) => void): void;
    /**
     * <p>Updates the details of a gateway group. If any optional field is not provided, the
     *          existing corresponding value is left unmodified.</p>
     */
    updateGatewayGroup(args: UpdateGatewayGroupCommandInput, options?: __HttpHandlerOptions): Promise<UpdateGatewayGroupCommandOutput>;
    updateGatewayGroup(args: UpdateGatewayGroupCommandInput, cb: (err: any, data?: UpdateGatewayGroupCommandOutput) => void): void;
    updateGatewayGroup(args: UpdateGatewayGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateGatewayGroupCommandOutput) => void): void;
    /**
     * <p>Updates a network profile by the network profile ARN.</p>
     */
    updateNetworkProfile(args: UpdateNetworkProfileCommandInput, options?: __HttpHandlerOptions): Promise<UpdateNetworkProfileCommandOutput>;
    updateNetworkProfile(args: UpdateNetworkProfileCommandInput, cb: (err: any, data?: UpdateNetworkProfileCommandOutput) => void): void;
    updateNetworkProfile(args: UpdateNetworkProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateNetworkProfileCommandOutput) => void): void;
    /**
     * <p>Updates an existing room profile by room profile ARN.</p>
     */
    updateProfile(args: UpdateProfileCommandInput, options?: __HttpHandlerOptions): Promise<UpdateProfileCommandOutput>;
    updateProfile(args: UpdateProfileCommandInput, cb: (err: any, data?: UpdateProfileCommandOutput) => void): void;
    updateProfile(args: UpdateProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateProfileCommandOutput) => void): void;
    /**
     * <p>Updates room details by room ARN.</p>
     */
    updateRoom(args: UpdateRoomCommandInput, options?: __HttpHandlerOptions): Promise<UpdateRoomCommandOutput>;
    updateRoom(args: UpdateRoomCommandInput, cb: (err: any, data?: UpdateRoomCommandOutput) => void): void;
    updateRoom(args: UpdateRoomCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateRoomCommandOutput) => void): void;
    /**
     * <p>Updates skill group details by skill group ARN.</p>
     */
    updateSkillGroup(args: UpdateSkillGroupCommandInput, options?: __HttpHandlerOptions): Promise<UpdateSkillGroupCommandOutput>;
    updateSkillGroup(args: UpdateSkillGroupCommandInput, cb: (err: any, data?: UpdateSkillGroupCommandOutput) => void): void;
    updateSkillGroup(args: UpdateSkillGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateSkillGroupCommandOutput) => void): void;
}
