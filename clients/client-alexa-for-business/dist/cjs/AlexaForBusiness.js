"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AlexaForBusinessClient_1 = require("./AlexaForBusinessClient");
const ApproveSkillCommand_1 = require("./commands/ApproveSkillCommand");
const AssociateContactWithAddressBookCommand_1 = require("./commands/AssociateContactWithAddressBookCommand");
const AssociateDeviceWithNetworkProfileCommand_1 = require("./commands/AssociateDeviceWithNetworkProfileCommand");
const AssociateDeviceWithRoomCommand_1 = require("./commands/AssociateDeviceWithRoomCommand");
const AssociateSkillGroupWithRoomCommand_1 = require("./commands/AssociateSkillGroupWithRoomCommand");
const AssociateSkillWithSkillGroupCommand_1 = require("./commands/AssociateSkillWithSkillGroupCommand");
const AssociateSkillWithUsersCommand_1 = require("./commands/AssociateSkillWithUsersCommand");
const CreateAddressBookCommand_1 = require("./commands/CreateAddressBookCommand");
const CreateBusinessReportScheduleCommand_1 = require("./commands/CreateBusinessReportScheduleCommand");
const CreateConferenceProviderCommand_1 = require("./commands/CreateConferenceProviderCommand");
const CreateContactCommand_1 = require("./commands/CreateContactCommand");
const CreateGatewayGroupCommand_1 = require("./commands/CreateGatewayGroupCommand");
const CreateNetworkProfileCommand_1 = require("./commands/CreateNetworkProfileCommand");
const CreateProfileCommand_1 = require("./commands/CreateProfileCommand");
const CreateRoomCommand_1 = require("./commands/CreateRoomCommand");
const CreateSkillGroupCommand_1 = require("./commands/CreateSkillGroupCommand");
const CreateUserCommand_1 = require("./commands/CreateUserCommand");
const DeleteAddressBookCommand_1 = require("./commands/DeleteAddressBookCommand");
const DeleteBusinessReportScheduleCommand_1 = require("./commands/DeleteBusinessReportScheduleCommand");
const DeleteConferenceProviderCommand_1 = require("./commands/DeleteConferenceProviderCommand");
const DeleteContactCommand_1 = require("./commands/DeleteContactCommand");
const DeleteDeviceCommand_1 = require("./commands/DeleteDeviceCommand");
const DeleteDeviceUsageDataCommand_1 = require("./commands/DeleteDeviceUsageDataCommand");
const DeleteGatewayGroupCommand_1 = require("./commands/DeleteGatewayGroupCommand");
const DeleteNetworkProfileCommand_1 = require("./commands/DeleteNetworkProfileCommand");
const DeleteProfileCommand_1 = require("./commands/DeleteProfileCommand");
const DeleteRoomCommand_1 = require("./commands/DeleteRoomCommand");
const DeleteRoomSkillParameterCommand_1 = require("./commands/DeleteRoomSkillParameterCommand");
const DeleteSkillAuthorizationCommand_1 = require("./commands/DeleteSkillAuthorizationCommand");
const DeleteSkillGroupCommand_1 = require("./commands/DeleteSkillGroupCommand");
const DeleteUserCommand_1 = require("./commands/DeleteUserCommand");
const DisassociateContactFromAddressBookCommand_1 = require("./commands/DisassociateContactFromAddressBookCommand");
const DisassociateDeviceFromRoomCommand_1 = require("./commands/DisassociateDeviceFromRoomCommand");
const DisassociateSkillFromSkillGroupCommand_1 = require("./commands/DisassociateSkillFromSkillGroupCommand");
const DisassociateSkillFromUsersCommand_1 = require("./commands/DisassociateSkillFromUsersCommand");
const DisassociateSkillGroupFromRoomCommand_1 = require("./commands/DisassociateSkillGroupFromRoomCommand");
const ForgetSmartHomeAppliancesCommand_1 = require("./commands/ForgetSmartHomeAppliancesCommand");
const GetAddressBookCommand_1 = require("./commands/GetAddressBookCommand");
const GetConferencePreferenceCommand_1 = require("./commands/GetConferencePreferenceCommand");
const GetConferenceProviderCommand_1 = require("./commands/GetConferenceProviderCommand");
const GetContactCommand_1 = require("./commands/GetContactCommand");
const GetDeviceCommand_1 = require("./commands/GetDeviceCommand");
const GetGatewayCommand_1 = require("./commands/GetGatewayCommand");
const GetGatewayGroupCommand_1 = require("./commands/GetGatewayGroupCommand");
const GetInvitationConfigurationCommand_1 = require("./commands/GetInvitationConfigurationCommand");
const GetNetworkProfileCommand_1 = require("./commands/GetNetworkProfileCommand");
const GetProfileCommand_1 = require("./commands/GetProfileCommand");
const GetRoomCommand_1 = require("./commands/GetRoomCommand");
const GetRoomSkillParameterCommand_1 = require("./commands/GetRoomSkillParameterCommand");
const GetSkillGroupCommand_1 = require("./commands/GetSkillGroupCommand");
const ListBusinessReportSchedulesCommand_1 = require("./commands/ListBusinessReportSchedulesCommand");
const ListConferenceProvidersCommand_1 = require("./commands/ListConferenceProvidersCommand");
const ListDeviceEventsCommand_1 = require("./commands/ListDeviceEventsCommand");
const ListGatewayGroupsCommand_1 = require("./commands/ListGatewayGroupsCommand");
const ListGatewaysCommand_1 = require("./commands/ListGatewaysCommand");
const ListSkillsCommand_1 = require("./commands/ListSkillsCommand");
const ListSkillsStoreCategoriesCommand_1 = require("./commands/ListSkillsStoreCategoriesCommand");
const ListSkillsStoreSkillsByCategoryCommand_1 = require("./commands/ListSkillsStoreSkillsByCategoryCommand");
const ListSmartHomeAppliancesCommand_1 = require("./commands/ListSmartHomeAppliancesCommand");
const ListTagsCommand_1 = require("./commands/ListTagsCommand");
const PutConferencePreferenceCommand_1 = require("./commands/PutConferencePreferenceCommand");
const PutInvitationConfigurationCommand_1 = require("./commands/PutInvitationConfigurationCommand");
const PutRoomSkillParameterCommand_1 = require("./commands/PutRoomSkillParameterCommand");
const PutSkillAuthorizationCommand_1 = require("./commands/PutSkillAuthorizationCommand");
const RegisterAVSDeviceCommand_1 = require("./commands/RegisterAVSDeviceCommand");
const RejectSkillCommand_1 = require("./commands/RejectSkillCommand");
const ResolveRoomCommand_1 = require("./commands/ResolveRoomCommand");
const RevokeInvitationCommand_1 = require("./commands/RevokeInvitationCommand");
const SearchAddressBooksCommand_1 = require("./commands/SearchAddressBooksCommand");
const SearchContactsCommand_1 = require("./commands/SearchContactsCommand");
const SearchDevicesCommand_1 = require("./commands/SearchDevicesCommand");
const SearchNetworkProfilesCommand_1 = require("./commands/SearchNetworkProfilesCommand");
const SearchProfilesCommand_1 = require("./commands/SearchProfilesCommand");
const SearchRoomsCommand_1 = require("./commands/SearchRoomsCommand");
const SearchSkillGroupsCommand_1 = require("./commands/SearchSkillGroupsCommand");
const SearchUsersCommand_1 = require("./commands/SearchUsersCommand");
const SendAnnouncementCommand_1 = require("./commands/SendAnnouncementCommand");
const SendInvitationCommand_1 = require("./commands/SendInvitationCommand");
const StartDeviceSyncCommand_1 = require("./commands/StartDeviceSyncCommand");
const StartSmartHomeApplianceDiscoveryCommand_1 = require("./commands/StartSmartHomeApplianceDiscoveryCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
const UpdateAddressBookCommand_1 = require("./commands/UpdateAddressBookCommand");
const UpdateBusinessReportScheduleCommand_1 = require("./commands/UpdateBusinessReportScheduleCommand");
const UpdateConferenceProviderCommand_1 = require("./commands/UpdateConferenceProviderCommand");
const UpdateContactCommand_1 = require("./commands/UpdateContactCommand");
const UpdateDeviceCommand_1 = require("./commands/UpdateDeviceCommand");
const UpdateGatewayCommand_1 = require("./commands/UpdateGatewayCommand");
const UpdateGatewayGroupCommand_1 = require("./commands/UpdateGatewayGroupCommand");
const UpdateNetworkProfileCommand_1 = require("./commands/UpdateNetworkProfileCommand");
const UpdateProfileCommand_1 = require("./commands/UpdateProfileCommand");
const UpdateRoomCommand_1 = require("./commands/UpdateRoomCommand");
const UpdateSkillGroupCommand_1 = require("./commands/UpdateSkillGroupCommand");
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
class AlexaForBusiness extends AlexaForBusinessClient_1.AlexaForBusinessClient {
    sendAnnouncement(args, optionsOrCb, cb) {
        const command = new SendAnnouncementCommand_1.SendAnnouncementCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteDeviceUsageData(args, optionsOrCb, cb) {
        const command = new DeleteDeviceUsageDataCommand_1.DeleteDeviceUsageDataCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    approveSkill(args, optionsOrCb, cb) {
        const command = new ApproveSkillCommand_1.ApproveSkillCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    associateContactWithAddressBook(args, optionsOrCb, cb) {
        const command = new AssociateContactWithAddressBookCommand_1.AssociateContactWithAddressBookCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    associateDeviceWithNetworkProfile(args, optionsOrCb, cb) {
        const command = new AssociateDeviceWithNetworkProfileCommand_1.AssociateDeviceWithNetworkProfileCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    associateDeviceWithRoom(args, optionsOrCb, cb) {
        const command = new AssociateDeviceWithRoomCommand_1.AssociateDeviceWithRoomCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    associateSkillGroupWithRoom(args, optionsOrCb, cb) {
        const command = new AssociateSkillGroupWithRoomCommand_1.AssociateSkillGroupWithRoomCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    associateSkillWithSkillGroup(args, optionsOrCb, cb) {
        const command = new AssociateSkillWithSkillGroupCommand_1.AssociateSkillWithSkillGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    associateSkillWithUsers(args, optionsOrCb, cb) {
        const command = new AssociateSkillWithUsersCommand_1.AssociateSkillWithUsersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createAddressBook(args, optionsOrCb, cb) {
        const command = new CreateAddressBookCommand_1.CreateAddressBookCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createBusinessReportSchedule(args, optionsOrCb, cb) {
        const command = new CreateBusinessReportScheduleCommand_1.CreateBusinessReportScheduleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createConferenceProvider(args, optionsOrCb, cb) {
        const command = new CreateConferenceProviderCommand_1.CreateConferenceProviderCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createContact(args, optionsOrCb, cb) {
        const command = new CreateContactCommand_1.CreateContactCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createGatewayGroup(args, optionsOrCb, cb) {
        const command = new CreateGatewayGroupCommand_1.CreateGatewayGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createNetworkProfile(args, optionsOrCb, cb) {
        const command = new CreateNetworkProfileCommand_1.CreateNetworkProfileCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createProfile(args, optionsOrCb, cb) {
        const command = new CreateProfileCommand_1.CreateProfileCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createRoom(args, optionsOrCb, cb) {
        const command = new CreateRoomCommand_1.CreateRoomCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createSkillGroup(args, optionsOrCb, cb) {
        const command = new CreateSkillGroupCommand_1.CreateSkillGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createUser(args, optionsOrCb, cb) {
        const command = new CreateUserCommand_1.CreateUserCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteAddressBook(args, optionsOrCb, cb) {
        const command = new DeleteAddressBookCommand_1.DeleteAddressBookCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteBusinessReportSchedule(args, optionsOrCb, cb) {
        const command = new DeleteBusinessReportScheduleCommand_1.DeleteBusinessReportScheduleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteConferenceProvider(args, optionsOrCb, cb) {
        const command = new DeleteConferenceProviderCommand_1.DeleteConferenceProviderCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteContact(args, optionsOrCb, cb) {
        const command = new DeleteContactCommand_1.DeleteContactCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteDevice(args, optionsOrCb, cb) {
        const command = new DeleteDeviceCommand_1.DeleteDeviceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteGatewayGroup(args, optionsOrCb, cb) {
        const command = new DeleteGatewayGroupCommand_1.DeleteGatewayGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteNetworkProfile(args, optionsOrCb, cb) {
        const command = new DeleteNetworkProfileCommand_1.DeleteNetworkProfileCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteProfile(args, optionsOrCb, cb) {
        const command = new DeleteProfileCommand_1.DeleteProfileCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteRoom(args, optionsOrCb, cb) {
        const command = new DeleteRoomCommand_1.DeleteRoomCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteRoomSkillParameter(args, optionsOrCb, cb) {
        const command = new DeleteRoomSkillParameterCommand_1.DeleteRoomSkillParameterCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteSkillAuthorization(args, optionsOrCb, cb) {
        const command = new DeleteSkillAuthorizationCommand_1.DeleteSkillAuthorizationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteSkillGroup(args, optionsOrCb, cb) {
        const command = new DeleteSkillGroupCommand_1.DeleteSkillGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteUser(args, optionsOrCb, cb) {
        const command = new DeleteUserCommand_1.DeleteUserCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    disassociateContactFromAddressBook(args, optionsOrCb, cb) {
        const command = new DisassociateContactFromAddressBookCommand_1.DisassociateContactFromAddressBookCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    disassociateDeviceFromRoom(args, optionsOrCb, cb) {
        const command = new DisassociateDeviceFromRoomCommand_1.DisassociateDeviceFromRoomCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    disassociateSkillFromSkillGroup(args, optionsOrCb, cb) {
        const command = new DisassociateSkillFromSkillGroupCommand_1.DisassociateSkillFromSkillGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    disassociateSkillFromUsers(args, optionsOrCb, cb) {
        const command = new DisassociateSkillFromUsersCommand_1.DisassociateSkillFromUsersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    disassociateSkillGroupFromRoom(args, optionsOrCb, cb) {
        const command = new DisassociateSkillGroupFromRoomCommand_1.DisassociateSkillGroupFromRoomCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    forgetSmartHomeAppliances(args, optionsOrCb, cb) {
        const command = new ForgetSmartHomeAppliancesCommand_1.ForgetSmartHomeAppliancesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getAddressBook(args, optionsOrCb, cb) {
        const command = new GetAddressBookCommand_1.GetAddressBookCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getConferencePreference(args, optionsOrCb, cb) {
        const command = new GetConferencePreferenceCommand_1.GetConferencePreferenceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getConferenceProvider(args, optionsOrCb, cb) {
        const command = new GetConferenceProviderCommand_1.GetConferenceProviderCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getContact(args, optionsOrCb, cb) {
        const command = new GetContactCommand_1.GetContactCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getDevice(args, optionsOrCb, cb) {
        const command = new GetDeviceCommand_1.GetDeviceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getGateway(args, optionsOrCb, cb) {
        const command = new GetGatewayCommand_1.GetGatewayCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getGatewayGroup(args, optionsOrCb, cb) {
        const command = new GetGatewayGroupCommand_1.GetGatewayGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getInvitationConfiguration(args, optionsOrCb, cb) {
        const command = new GetInvitationConfigurationCommand_1.GetInvitationConfigurationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getNetworkProfile(args, optionsOrCb, cb) {
        const command = new GetNetworkProfileCommand_1.GetNetworkProfileCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getProfile(args, optionsOrCb, cb) {
        const command = new GetProfileCommand_1.GetProfileCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getRoom(args, optionsOrCb, cb) {
        const command = new GetRoomCommand_1.GetRoomCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getRoomSkillParameter(args, optionsOrCb, cb) {
        const command = new GetRoomSkillParameterCommand_1.GetRoomSkillParameterCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getSkillGroup(args, optionsOrCb, cb) {
        const command = new GetSkillGroupCommand_1.GetSkillGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listBusinessReportSchedules(args, optionsOrCb, cb) {
        const command = new ListBusinessReportSchedulesCommand_1.ListBusinessReportSchedulesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listConferenceProviders(args, optionsOrCb, cb) {
        const command = new ListConferenceProvidersCommand_1.ListConferenceProvidersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listDeviceEvents(args, optionsOrCb, cb) {
        const command = new ListDeviceEventsCommand_1.ListDeviceEventsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listGatewayGroups(args, optionsOrCb, cb) {
        const command = new ListGatewayGroupsCommand_1.ListGatewayGroupsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listGateways(args, optionsOrCb, cb) {
        const command = new ListGatewaysCommand_1.ListGatewaysCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listSkills(args, optionsOrCb, cb) {
        const command = new ListSkillsCommand_1.ListSkillsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listSkillsStoreCategories(args, optionsOrCb, cb) {
        const command = new ListSkillsStoreCategoriesCommand_1.ListSkillsStoreCategoriesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listSkillsStoreSkillsByCategory(args, optionsOrCb, cb) {
        const command = new ListSkillsStoreSkillsByCategoryCommand_1.ListSkillsStoreSkillsByCategoryCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listSmartHomeAppliances(args, optionsOrCb, cb) {
        const command = new ListSmartHomeAppliancesCommand_1.ListSmartHomeAppliancesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listTags(args, optionsOrCb, cb) {
        const command = new ListTagsCommand_1.ListTagsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    putConferencePreference(args, optionsOrCb, cb) {
        const command = new PutConferencePreferenceCommand_1.PutConferencePreferenceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    putInvitationConfiguration(args, optionsOrCb, cb) {
        const command = new PutInvitationConfigurationCommand_1.PutInvitationConfigurationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    putRoomSkillParameter(args, optionsOrCb, cb) {
        const command = new PutRoomSkillParameterCommand_1.PutRoomSkillParameterCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    putSkillAuthorization(args, optionsOrCb, cb) {
        const command = new PutSkillAuthorizationCommand_1.PutSkillAuthorizationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    registerAVSDevice(args, optionsOrCb, cb) {
        const command = new RegisterAVSDeviceCommand_1.RegisterAVSDeviceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    rejectSkill(args, optionsOrCb, cb) {
        const command = new RejectSkillCommand_1.RejectSkillCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    resolveRoom(args, optionsOrCb, cb) {
        const command = new ResolveRoomCommand_1.ResolveRoomCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    revokeInvitation(args, optionsOrCb, cb) {
        const command = new RevokeInvitationCommand_1.RevokeInvitationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    searchAddressBooks(args, optionsOrCb, cb) {
        const command = new SearchAddressBooksCommand_1.SearchAddressBooksCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    searchContacts(args, optionsOrCb, cb) {
        const command = new SearchContactsCommand_1.SearchContactsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    searchDevices(args, optionsOrCb, cb) {
        const command = new SearchDevicesCommand_1.SearchDevicesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    searchNetworkProfiles(args, optionsOrCb, cb) {
        const command = new SearchNetworkProfilesCommand_1.SearchNetworkProfilesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    searchProfiles(args, optionsOrCb, cb) {
        const command = new SearchProfilesCommand_1.SearchProfilesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    searchRooms(args, optionsOrCb, cb) {
        const command = new SearchRoomsCommand_1.SearchRoomsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    searchSkillGroups(args, optionsOrCb, cb) {
        const command = new SearchSkillGroupsCommand_1.SearchSkillGroupsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    searchUsers(args, optionsOrCb, cb) {
        const command = new SearchUsersCommand_1.SearchUsersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    sendInvitation(args, optionsOrCb, cb) {
        const command = new SendInvitationCommand_1.SendInvitationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    startDeviceSync(args, optionsOrCb, cb) {
        const command = new StartDeviceSyncCommand_1.StartDeviceSyncCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    startSmartHomeApplianceDiscovery(args, optionsOrCb, cb) {
        const command = new StartSmartHomeApplianceDiscoveryCommand_1.StartSmartHomeApplianceDiscoveryCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    tagResource(args, optionsOrCb, cb) {
        const command = new TagResourceCommand_1.TagResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    untagResource(args, optionsOrCb, cb) {
        const command = new UntagResourceCommand_1.UntagResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateAddressBook(args, optionsOrCb, cb) {
        const command = new UpdateAddressBookCommand_1.UpdateAddressBookCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateBusinessReportSchedule(args, optionsOrCb, cb) {
        const command = new UpdateBusinessReportScheduleCommand_1.UpdateBusinessReportScheduleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateConferenceProvider(args, optionsOrCb, cb) {
        const command = new UpdateConferenceProviderCommand_1.UpdateConferenceProviderCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateContact(args, optionsOrCb, cb) {
        const command = new UpdateContactCommand_1.UpdateContactCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateDevice(args, optionsOrCb, cb) {
        const command = new UpdateDeviceCommand_1.UpdateDeviceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateGateway(args, optionsOrCb, cb) {
        const command = new UpdateGatewayCommand_1.UpdateGatewayCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateGatewayGroup(args, optionsOrCb, cb) {
        const command = new UpdateGatewayGroupCommand_1.UpdateGatewayGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateNetworkProfile(args, optionsOrCb, cb) {
        const command = new UpdateNetworkProfileCommand_1.UpdateNetworkProfileCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateProfile(args, optionsOrCb, cb) {
        const command = new UpdateProfileCommand_1.UpdateProfileCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateRoom(args, optionsOrCb, cb) {
        const command = new UpdateRoomCommand_1.UpdateRoomCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateSkillGroup(args, optionsOrCb, cb) {
        const command = new UpdateSkillGroupCommand_1.UpdateSkillGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
}
exports.AlexaForBusiness = AlexaForBusiness;
//# sourceMappingURL=AlexaForBusiness.js.map