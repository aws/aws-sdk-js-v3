"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
const uuid_1 = require("uuid");
async function serializeAws_json1_1SendAnnouncementCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.SendAnnouncement";
    let body;
    body = JSON.stringify(serializeAws_json1_1SendAnnouncementRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1SendAnnouncementCommand = serializeAws_json1_1SendAnnouncementCommand;
async function serializeAws_json1_1DeleteDeviceUsageDataCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.DeleteDeviceUsageData";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteDeviceUsageDataRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteDeviceUsageDataCommand = serializeAws_json1_1DeleteDeviceUsageDataCommand;
async function serializeAws_json1_1ApproveSkillCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.ApproveSkill";
    let body;
    body = JSON.stringify(serializeAws_json1_1ApproveSkillRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ApproveSkillCommand = serializeAws_json1_1ApproveSkillCommand;
async function serializeAws_json1_1AssociateContactWithAddressBookCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.AssociateContactWithAddressBook";
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateContactWithAddressBookRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AssociateContactWithAddressBookCommand = serializeAws_json1_1AssociateContactWithAddressBookCommand;
async function serializeAws_json1_1AssociateDeviceWithNetworkProfileCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AlexaForBusiness.AssociateDeviceWithNetworkProfile";
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateDeviceWithNetworkProfileRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AssociateDeviceWithNetworkProfileCommand = serializeAws_json1_1AssociateDeviceWithNetworkProfileCommand;
async function serializeAws_json1_1AssociateDeviceWithRoomCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.AssociateDeviceWithRoom";
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateDeviceWithRoomRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AssociateDeviceWithRoomCommand = serializeAws_json1_1AssociateDeviceWithRoomCommand;
async function serializeAws_json1_1AssociateSkillGroupWithRoomCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.AssociateSkillGroupWithRoom";
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateSkillGroupWithRoomRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AssociateSkillGroupWithRoomCommand = serializeAws_json1_1AssociateSkillGroupWithRoomCommand;
async function serializeAws_json1_1AssociateSkillWithSkillGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.AssociateSkillWithSkillGroup";
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateSkillWithSkillGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AssociateSkillWithSkillGroupCommand = serializeAws_json1_1AssociateSkillWithSkillGroupCommand;
async function serializeAws_json1_1AssociateSkillWithUsersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.AssociateSkillWithUsers";
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateSkillWithUsersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AssociateSkillWithUsersCommand = serializeAws_json1_1AssociateSkillWithUsersCommand;
async function serializeAws_json1_1CreateAddressBookCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.CreateAddressBook";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateAddressBookRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateAddressBookCommand = serializeAws_json1_1CreateAddressBookCommand;
async function serializeAws_json1_1CreateBusinessReportScheduleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.CreateBusinessReportSchedule";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateBusinessReportScheduleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateBusinessReportScheduleCommand = serializeAws_json1_1CreateBusinessReportScheduleCommand;
async function serializeAws_json1_1CreateConferenceProviderCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.CreateConferenceProvider";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateConferenceProviderRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateConferenceProviderCommand = serializeAws_json1_1CreateConferenceProviderCommand;
async function serializeAws_json1_1CreateContactCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.CreateContact";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateContactRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateContactCommand = serializeAws_json1_1CreateContactCommand;
async function serializeAws_json1_1CreateGatewayGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.CreateGatewayGroup";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateGatewayGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateGatewayGroupCommand = serializeAws_json1_1CreateGatewayGroupCommand;
async function serializeAws_json1_1CreateNetworkProfileCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.CreateNetworkProfile";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateNetworkProfileRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateNetworkProfileCommand = serializeAws_json1_1CreateNetworkProfileCommand;
async function serializeAws_json1_1CreateProfileCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.CreateProfile";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateProfileRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateProfileCommand = serializeAws_json1_1CreateProfileCommand;
async function serializeAws_json1_1CreateRoomCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.CreateRoom";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateRoomRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateRoomCommand = serializeAws_json1_1CreateRoomCommand;
async function serializeAws_json1_1CreateSkillGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.CreateSkillGroup";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateSkillGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateSkillGroupCommand = serializeAws_json1_1CreateSkillGroupCommand;
async function serializeAws_json1_1CreateUserCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.CreateUser";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateUserRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateUserCommand = serializeAws_json1_1CreateUserCommand;
async function serializeAws_json1_1DeleteAddressBookCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.DeleteAddressBook";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteAddressBookRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteAddressBookCommand = serializeAws_json1_1DeleteAddressBookCommand;
async function serializeAws_json1_1DeleteBusinessReportScheduleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.DeleteBusinessReportSchedule";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteBusinessReportScheduleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteBusinessReportScheduleCommand = serializeAws_json1_1DeleteBusinessReportScheduleCommand;
async function serializeAws_json1_1DeleteConferenceProviderCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.DeleteConferenceProvider";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteConferenceProviderRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteConferenceProviderCommand = serializeAws_json1_1DeleteConferenceProviderCommand;
async function serializeAws_json1_1DeleteContactCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.DeleteContact";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteContactRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteContactCommand = serializeAws_json1_1DeleteContactCommand;
async function serializeAws_json1_1DeleteDeviceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.DeleteDevice";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteDeviceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteDeviceCommand = serializeAws_json1_1DeleteDeviceCommand;
async function serializeAws_json1_1DeleteGatewayGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.DeleteGatewayGroup";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteGatewayGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteGatewayGroupCommand = serializeAws_json1_1DeleteGatewayGroupCommand;
async function serializeAws_json1_1DeleteNetworkProfileCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.DeleteNetworkProfile";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteNetworkProfileRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteNetworkProfileCommand = serializeAws_json1_1DeleteNetworkProfileCommand;
async function serializeAws_json1_1DeleteProfileCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.DeleteProfile";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteProfileRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteProfileCommand = serializeAws_json1_1DeleteProfileCommand;
async function serializeAws_json1_1DeleteRoomCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.DeleteRoom";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteRoomRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteRoomCommand = serializeAws_json1_1DeleteRoomCommand;
async function serializeAws_json1_1DeleteRoomSkillParameterCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.DeleteRoomSkillParameter";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteRoomSkillParameterRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteRoomSkillParameterCommand = serializeAws_json1_1DeleteRoomSkillParameterCommand;
async function serializeAws_json1_1DeleteSkillAuthorizationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.DeleteSkillAuthorization";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteSkillAuthorizationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteSkillAuthorizationCommand = serializeAws_json1_1DeleteSkillAuthorizationCommand;
async function serializeAws_json1_1DeleteSkillGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.DeleteSkillGroup";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteSkillGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteSkillGroupCommand = serializeAws_json1_1DeleteSkillGroupCommand;
async function serializeAws_json1_1DeleteUserCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.DeleteUser";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteUserRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteUserCommand = serializeAws_json1_1DeleteUserCommand;
async function serializeAws_json1_1DisassociateContactFromAddressBookCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AlexaForBusiness.DisassociateContactFromAddressBook";
    let body;
    body = JSON.stringify(serializeAws_json1_1DisassociateContactFromAddressBookRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DisassociateContactFromAddressBookCommand = serializeAws_json1_1DisassociateContactFromAddressBookCommand;
async function serializeAws_json1_1DisassociateDeviceFromRoomCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.DisassociateDeviceFromRoom";
    let body;
    body = JSON.stringify(serializeAws_json1_1DisassociateDeviceFromRoomRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DisassociateDeviceFromRoomCommand = serializeAws_json1_1DisassociateDeviceFromRoomCommand;
async function serializeAws_json1_1DisassociateSkillFromSkillGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.DisassociateSkillFromSkillGroup";
    let body;
    body = JSON.stringify(serializeAws_json1_1DisassociateSkillFromSkillGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DisassociateSkillFromSkillGroupCommand = serializeAws_json1_1DisassociateSkillFromSkillGroupCommand;
async function serializeAws_json1_1DisassociateSkillFromUsersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.DisassociateSkillFromUsers";
    let body;
    body = JSON.stringify(serializeAws_json1_1DisassociateSkillFromUsersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DisassociateSkillFromUsersCommand = serializeAws_json1_1DisassociateSkillFromUsersCommand;
async function serializeAws_json1_1DisassociateSkillGroupFromRoomCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.DisassociateSkillGroupFromRoom";
    let body;
    body = JSON.stringify(serializeAws_json1_1DisassociateSkillGroupFromRoomRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DisassociateSkillGroupFromRoomCommand = serializeAws_json1_1DisassociateSkillGroupFromRoomCommand;
async function serializeAws_json1_1ForgetSmartHomeAppliancesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.ForgetSmartHomeAppliances";
    let body;
    body = JSON.stringify(serializeAws_json1_1ForgetSmartHomeAppliancesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ForgetSmartHomeAppliancesCommand = serializeAws_json1_1ForgetSmartHomeAppliancesCommand;
async function serializeAws_json1_1GetAddressBookCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.GetAddressBook";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetAddressBookRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetAddressBookCommand = serializeAws_json1_1GetAddressBookCommand;
async function serializeAws_json1_1GetConferencePreferenceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.GetConferencePreference";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetConferencePreferenceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetConferencePreferenceCommand = serializeAws_json1_1GetConferencePreferenceCommand;
async function serializeAws_json1_1GetConferenceProviderCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.GetConferenceProvider";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetConferenceProviderRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetConferenceProviderCommand = serializeAws_json1_1GetConferenceProviderCommand;
async function serializeAws_json1_1GetContactCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.GetContact";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetContactRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetContactCommand = serializeAws_json1_1GetContactCommand;
async function serializeAws_json1_1GetDeviceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.GetDevice";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDeviceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetDeviceCommand = serializeAws_json1_1GetDeviceCommand;
async function serializeAws_json1_1GetGatewayCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.GetGateway";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetGatewayRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetGatewayCommand = serializeAws_json1_1GetGatewayCommand;
async function serializeAws_json1_1GetGatewayGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.GetGatewayGroup";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetGatewayGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetGatewayGroupCommand = serializeAws_json1_1GetGatewayGroupCommand;
async function serializeAws_json1_1GetInvitationConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.GetInvitationConfiguration";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetInvitationConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetInvitationConfigurationCommand = serializeAws_json1_1GetInvitationConfigurationCommand;
async function serializeAws_json1_1GetNetworkProfileCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.GetNetworkProfile";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetNetworkProfileRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetNetworkProfileCommand = serializeAws_json1_1GetNetworkProfileCommand;
async function serializeAws_json1_1GetProfileCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.GetProfile";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetProfileRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetProfileCommand = serializeAws_json1_1GetProfileCommand;
async function serializeAws_json1_1GetRoomCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.GetRoom";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetRoomRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetRoomCommand = serializeAws_json1_1GetRoomCommand;
async function serializeAws_json1_1GetRoomSkillParameterCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.GetRoomSkillParameter";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetRoomSkillParameterRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetRoomSkillParameterCommand = serializeAws_json1_1GetRoomSkillParameterCommand;
async function serializeAws_json1_1GetSkillGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.GetSkillGroup";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetSkillGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetSkillGroupCommand = serializeAws_json1_1GetSkillGroupCommand;
async function serializeAws_json1_1ListBusinessReportSchedulesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.ListBusinessReportSchedules";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListBusinessReportSchedulesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListBusinessReportSchedulesCommand = serializeAws_json1_1ListBusinessReportSchedulesCommand;
async function serializeAws_json1_1ListConferenceProvidersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.ListConferenceProviders";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListConferenceProvidersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListConferenceProvidersCommand = serializeAws_json1_1ListConferenceProvidersCommand;
async function serializeAws_json1_1ListDeviceEventsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.ListDeviceEvents";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListDeviceEventsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListDeviceEventsCommand = serializeAws_json1_1ListDeviceEventsCommand;
async function serializeAws_json1_1ListGatewayGroupsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.ListGatewayGroups";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListGatewayGroupsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListGatewayGroupsCommand = serializeAws_json1_1ListGatewayGroupsCommand;
async function serializeAws_json1_1ListGatewaysCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.ListGateways";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListGatewaysRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListGatewaysCommand = serializeAws_json1_1ListGatewaysCommand;
async function serializeAws_json1_1ListSkillsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.ListSkills";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListSkillsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListSkillsCommand = serializeAws_json1_1ListSkillsCommand;
async function serializeAws_json1_1ListSkillsStoreCategoriesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.ListSkillsStoreCategories";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListSkillsStoreCategoriesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListSkillsStoreCategoriesCommand = serializeAws_json1_1ListSkillsStoreCategoriesCommand;
async function serializeAws_json1_1ListSkillsStoreSkillsByCategoryCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.ListSkillsStoreSkillsByCategory";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListSkillsStoreSkillsByCategoryRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListSkillsStoreSkillsByCategoryCommand = serializeAws_json1_1ListSkillsStoreSkillsByCategoryCommand;
async function serializeAws_json1_1ListSmartHomeAppliancesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.ListSmartHomeAppliances";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListSmartHomeAppliancesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListSmartHomeAppliancesCommand = serializeAws_json1_1ListSmartHomeAppliancesCommand;
async function serializeAws_json1_1ListTagsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.ListTags";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListTagsCommand = serializeAws_json1_1ListTagsCommand;
async function serializeAws_json1_1PutConferencePreferenceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.PutConferencePreference";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutConferencePreferenceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutConferencePreferenceCommand = serializeAws_json1_1PutConferencePreferenceCommand;
async function serializeAws_json1_1PutInvitationConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.PutInvitationConfiguration";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutInvitationConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutInvitationConfigurationCommand = serializeAws_json1_1PutInvitationConfigurationCommand;
async function serializeAws_json1_1PutRoomSkillParameterCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.PutRoomSkillParameter";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutRoomSkillParameterRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutRoomSkillParameterCommand = serializeAws_json1_1PutRoomSkillParameterCommand;
async function serializeAws_json1_1PutSkillAuthorizationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.PutSkillAuthorization";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutSkillAuthorizationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutSkillAuthorizationCommand = serializeAws_json1_1PutSkillAuthorizationCommand;
async function serializeAws_json1_1RegisterAVSDeviceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.RegisterAVSDevice";
    let body;
    body = JSON.stringify(serializeAws_json1_1RegisterAVSDeviceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RegisterAVSDeviceCommand = serializeAws_json1_1RegisterAVSDeviceCommand;
async function serializeAws_json1_1RejectSkillCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.RejectSkill";
    let body;
    body = JSON.stringify(serializeAws_json1_1RejectSkillRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RejectSkillCommand = serializeAws_json1_1RejectSkillCommand;
async function serializeAws_json1_1ResolveRoomCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.ResolveRoom";
    let body;
    body = JSON.stringify(serializeAws_json1_1ResolveRoomRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ResolveRoomCommand = serializeAws_json1_1ResolveRoomCommand;
async function serializeAws_json1_1RevokeInvitationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.RevokeInvitation";
    let body;
    body = JSON.stringify(serializeAws_json1_1RevokeInvitationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RevokeInvitationCommand = serializeAws_json1_1RevokeInvitationCommand;
async function serializeAws_json1_1SearchAddressBooksCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.SearchAddressBooks";
    let body;
    body = JSON.stringify(serializeAws_json1_1SearchAddressBooksRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1SearchAddressBooksCommand = serializeAws_json1_1SearchAddressBooksCommand;
async function serializeAws_json1_1SearchContactsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.SearchContacts";
    let body;
    body = JSON.stringify(serializeAws_json1_1SearchContactsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1SearchContactsCommand = serializeAws_json1_1SearchContactsCommand;
async function serializeAws_json1_1SearchDevicesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.SearchDevices";
    let body;
    body = JSON.stringify(serializeAws_json1_1SearchDevicesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1SearchDevicesCommand = serializeAws_json1_1SearchDevicesCommand;
async function serializeAws_json1_1SearchNetworkProfilesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.SearchNetworkProfiles";
    let body;
    body = JSON.stringify(serializeAws_json1_1SearchNetworkProfilesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1SearchNetworkProfilesCommand = serializeAws_json1_1SearchNetworkProfilesCommand;
async function serializeAws_json1_1SearchProfilesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.SearchProfiles";
    let body;
    body = JSON.stringify(serializeAws_json1_1SearchProfilesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1SearchProfilesCommand = serializeAws_json1_1SearchProfilesCommand;
async function serializeAws_json1_1SearchRoomsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.SearchRooms";
    let body;
    body = JSON.stringify(serializeAws_json1_1SearchRoomsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1SearchRoomsCommand = serializeAws_json1_1SearchRoomsCommand;
async function serializeAws_json1_1SearchSkillGroupsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.SearchSkillGroups";
    let body;
    body = JSON.stringify(serializeAws_json1_1SearchSkillGroupsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1SearchSkillGroupsCommand = serializeAws_json1_1SearchSkillGroupsCommand;
async function serializeAws_json1_1SearchUsersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.SearchUsers";
    let body;
    body = JSON.stringify(serializeAws_json1_1SearchUsersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1SearchUsersCommand = serializeAws_json1_1SearchUsersCommand;
async function serializeAws_json1_1SendInvitationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.SendInvitation";
    let body;
    body = JSON.stringify(serializeAws_json1_1SendInvitationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1SendInvitationCommand = serializeAws_json1_1SendInvitationCommand;
async function serializeAws_json1_1StartDeviceSyncCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.StartDeviceSync";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartDeviceSyncRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartDeviceSyncCommand = serializeAws_json1_1StartDeviceSyncCommand;
async function serializeAws_json1_1StartSmartHomeApplianceDiscoveryCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.StartSmartHomeApplianceDiscovery";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartSmartHomeApplianceDiscoveryRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartSmartHomeApplianceDiscoveryCommand = serializeAws_json1_1StartSmartHomeApplianceDiscoveryCommand;
async function serializeAws_json1_1TagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.TagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
async function serializeAws_json1_1UntagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.UntagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
async function serializeAws_json1_1UpdateAddressBookCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.UpdateAddressBook";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateAddressBookRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateAddressBookCommand = serializeAws_json1_1UpdateAddressBookCommand;
async function serializeAws_json1_1UpdateBusinessReportScheduleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.UpdateBusinessReportSchedule";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateBusinessReportScheduleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateBusinessReportScheduleCommand = serializeAws_json1_1UpdateBusinessReportScheduleCommand;
async function serializeAws_json1_1UpdateConferenceProviderCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.UpdateConferenceProvider";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateConferenceProviderRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateConferenceProviderCommand = serializeAws_json1_1UpdateConferenceProviderCommand;
async function serializeAws_json1_1UpdateContactCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.UpdateContact";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateContactRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateContactCommand = serializeAws_json1_1UpdateContactCommand;
async function serializeAws_json1_1UpdateDeviceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.UpdateDevice";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateDeviceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateDeviceCommand = serializeAws_json1_1UpdateDeviceCommand;
async function serializeAws_json1_1UpdateGatewayCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.UpdateGateway";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateGatewayRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateGatewayCommand = serializeAws_json1_1UpdateGatewayCommand;
async function serializeAws_json1_1UpdateGatewayGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.UpdateGatewayGroup";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateGatewayGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateGatewayGroupCommand = serializeAws_json1_1UpdateGatewayGroupCommand;
async function serializeAws_json1_1UpdateNetworkProfileCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.UpdateNetworkProfile";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateNetworkProfileRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateNetworkProfileCommand = serializeAws_json1_1UpdateNetworkProfileCommand;
async function serializeAws_json1_1UpdateProfileCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.UpdateProfile";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateProfileRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateProfileCommand = serializeAws_json1_1UpdateProfileCommand;
async function serializeAws_json1_1UpdateRoomCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.UpdateRoom";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateRoomRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateRoomCommand = serializeAws_json1_1UpdateRoomCommand;
async function serializeAws_json1_1UpdateSkillGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AlexaForBusiness.UpdateSkillGroup";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateSkillGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateSkillGroupCommand = serializeAws_json1_1UpdateSkillGroupCommand;
async function deserializeAws_json1_1SendAnnouncementCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1SendAnnouncementCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SendAnnouncementResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SendAnnouncementResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1SendAnnouncementCommand = deserializeAws_json1_1SendAnnouncementCommand;
async function deserializeAws_json1_1SendAnnouncementCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AlreadyExistsException":
        case "com.amazonaws.a4b.api#AlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.a4b.api#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteDeviceUsageDataCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteDeviceUsageDataCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteDeviceUsageDataResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteDeviceUsageDataResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteDeviceUsageDataCommand = deserializeAws_json1_1DeleteDeviceUsageDataCommand;
async function deserializeAws_json1_1DeleteDeviceUsageDataCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DeviceNotRegisteredException":
        case "com.amazonaws.a4b.api#DeviceNotRegisteredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DeviceNotRegisteredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.a4b.api#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.a4b.api#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ApproveSkillCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ApproveSkillCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ApproveSkillResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ApproveSkillResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ApproveSkillCommand = deserializeAws_json1_1ApproveSkillCommand;
async function deserializeAws_json1_1ApproveSkillCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.a4b.api#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.a4b.api#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.a4b.api#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1AssociateContactWithAddressBookCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AssociateContactWithAddressBookCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AssociateContactWithAddressBookResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AssociateContactWithAddressBookResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AssociateContactWithAddressBookCommand = deserializeAws_json1_1AssociateContactWithAddressBookCommand;
async function deserializeAws_json1_1AssociateContactWithAddressBookCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazonaws.a4b.api#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1AssociateDeviceWithNetworkProfileCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AssociateDeviceWithNetworkProfileCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AssociateDeviceWithNetworkProfileResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AssociateDeviceWithNetworkProfileResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AssociateDeviceWithNetworkProfileCommand = deserializeAws_json1_1AssociateDeviceWithNetworkProfileCommand;
async function deserializeAws_json1_1AssociateDeviceWithNetworkProfileCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.a4b.api#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DeviceNotRegisteredException":
        case "com.amazonaws.a4b.api#DeviceNotRegisteredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DeviceNotRegisteredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.a4b.api#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1AssociateDeviceWithRoomCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AssociateDeviceWithRoomCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AssociateDeviceWithRoomResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AssociateDeviceWithRoomResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AssociateDeviceWithRoomCommand = deserializeAws_json1_1AssociateDeviceWithRoomCommand;
async function deserializeAws_json1_1AssociateDeviceWithRoomCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.a4b.api#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DeviceNotRegisteredException":
        case "com.amazonaws.a4b.api#DeviceNotRegisteredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DeviceNotRegisteredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.a4b.api#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1AssociateSkillGroupWithRoomCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AssociateSkillGroupWithRoomCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AssociateSkillGroupWithRoomResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AssociateSkillGroupWithRoomResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AssociateSkillGroupWithRoomCommand = deserializeAws_json1_1AssociateSkillGroupWithRoomCommand;
async function deserializeAws_json1_1AssociateSkillGroupWithRoomCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.a4b.api#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1AssociateSkillWithSkillGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AssociateSkillWithSkillGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AssociateSkillWithSkillGroupResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AssociateSkillWithSkillGroupResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AssociateSkillWithSkillGroupCommand = deserializeAws_json1_1AssociateSkillWithSkillGroupCommand;
async function deserializeAws_json1_1AssociateSkillWithSkillGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.a4b.api#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.a4b.api#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SkillNotLinkedException":
        case "com.amazonaws.awsmoneypennyresourcemanagement#SkillNotLinkedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1SkillNotLinkedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1AssociateSkillWithUsersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AssociateSkillWithUsersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AssociateSkillWithUsersResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AssociateSkillWithUsersResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AssociateSkillWithUsersCommand = deserializeAws_json1_1AssociateSkillWithUsersCommand;
async function deserializeAws_json1_1AssociateSkillWithUsersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.a4b.api#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.a4b.api#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateAddressBookCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateAddressBookCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateAddressBookResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateAddressBookResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateAddressBookCommand = deserializeAws_json1_1CreateAddressBookCommand;
async function deserializeAws_json1_1CreateAddressBookCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AlreadyExistsException":
        case "com.amazonaws.a4b.api#AlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.a4b.api#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateBusinessReportScheduleCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateBusinessReportScheduleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateBusinessReportScheduleResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateBusinessReportScheduleResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateBusinessReportScheduleCommand = deserializeAws_json1_1CreateBusinessReportScheduleCommand;
async function deserializeAws_json1_1CreateBusinessReportScheduleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AlreadyExistsException":
        case "com.amazonaws.a4b.api#AlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateConferenceProviderCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateConferenceProviderCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateConferenceProviderResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateConferenceProviderResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateConferenceProviderCommand = deserializeAws_json1_1CreateConferenceProviderCommand;
async function deserializeAws_json1_1CreateConferenceProviderCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AlreadyExistsException":
        case "com.amazonaws.a4b.api#AlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateContactCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateContactCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateContactResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateContactResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateContactCommand = deserializeAws_json1_1CreateContactCommand;
async function deserializeAws_json1_1CreateContactCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AlreadyExistsException":
        case "com.amazonaws.a4b.api#AlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.a4b.api#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateGatewayGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateGatewayGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateGatewayGroupResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateGatewayGroupResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateGatewayGroupCommand = deserializeAws_json1_1CreateGatewayGroupCommand;
async function deserializeAws_json1_1CreateGatewayGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AlreadyExistsException":
        case "com.amazonaws.a4b.api#AlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.a4b.api#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateNetworkProfileCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateNetworkProfileCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateNetworkProfileResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateNetworkProfileResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateNetworkProfileCommand = deserializeAws_json1_1CreateNetworkProfileCommand;
async function deserializeAws_json1_1CreateNetworkProfileCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AlreadyExistsException":
        case "com.amazonaws.a4b.api#AlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.a4b.api#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.a4b.api#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidCertificateAuthorityException":
        case "com.amazonaws.awsmoneypennyresourcemanagement#InvalidCertificateAuthorityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidCertificateAuthorityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidServiceLinkedRoleStateException":
        case "com.amazonaws.awsmoneypennyresourcemanagement#InvalidServiceLinkedRoleStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidServiceLinkedRoleStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateProfileCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateProfileCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateProfileResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateProfileResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateProfileCommand = deserializeAws_json1_1CreateProfileCommand;
async function deserializeAws_json1_1CreateProfileCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AlreadyExistsException":
        case "com.amazonaws.a4b.api#AlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.a4b.api#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.a4b.api#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateRoomCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateRoomCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateRoomResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateRoomResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateRoomCommand = deserializeAws_json1_1CreateRoomCommand;
async function deserializeAws_json1_1CreateRoomCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AlreadyExistsException":
        case "com.amazonaws.a4b.api#AlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.a4b.api#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateSkillGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateSkillGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateSkillGroupResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateSkillGroupResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateSkillGroupCommand = deserializeAws_json1_1CreateSkillGroupCommand;
async function deserializeAws_json1_1CreateSkillGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AlreadyExistsException":
        case "com.amazonaws.a4b.api#AlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.a4b.api#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.a4b.api#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateUserCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateUserCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateUserResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateUserResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateUserCommand = deserializeAws_json1_1CreateUserCommand;
async function deserializeAws_json1_1CreateUserCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.a4b.api#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.a4b.api#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.a4b.api#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteAddressBookCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteAddressBookCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteAddressBookResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteAddressBookResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteAddressBookCommand = deserializeAws_json1_1DeleteAddressBookCommand;
async function deserializeAws_json1_1DeleteAddressBookCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.a4b.api#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.a4b.api#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteBusinessReportScheduleCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteBusinessReportScheduleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteBusinessReportScheduleResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteBusinessReportScheduleResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteBusinessReportScheduleCommand = deserializeAws_json1_1DeleteBusinessReportScheduleCommand;
async function deserializeAws_json1_1DeleteBusinessReportScheduleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.a4b.api#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.a4b.api#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteConferenceProviderCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteConferenceProviderCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteConferenceProviderResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteConferenceProviderResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteConferenceProviderCommand = deserializeAws_json1_1DeleteConferenceProviderCommand;
async function deserializeAws_json1_1DeleteConferenceProviderCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "NotFoundException":
        case "com.amazonaws.a4b.api#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteContactCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteContactCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteContactResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteContactResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteContactCommand = deserializeAws_json1_1DeleteContactCommand;
async function deserializeAws_json1_1DeleteContactCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.a4b.api#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.a4b.api#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteDeviceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteDeviceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteDeviceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteDeviceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteDeviceCommand = deserializeAws_json1_1DeleteDeviceCommand;
async function deserializeAws_json1_1DeleteDeviceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.a4b.api#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.a4b.api#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidCertificateAuthorityException":
        case "com.amazonaws.awsmoneypennyresourcemanagement#InvalidCertificateAuthorityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidCertificateAuthorityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteGatewayGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteGatewayGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteGatewayGroupResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteGatewayGroupResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteGatewayGroupCommand = deserializeAws_json1_1DeleteGatewayGroupCommand;
async function deserializeAws_json1_1DeleteGatewayGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceAssociatedException":
        case "com.amazonaws.awsmoneypennyresourcemanagement#ResourceAssociatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceAssociatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteNetworkProfileCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteNetworkProfileCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteNetworkProfileResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteNetworkProfileResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteNetworkProfileCommand = deserializeAws_json1_1DeleteNetworkProfileCommand;
async function deserializeAws_json1_1DeleteNetworkProfileCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.a4b.api#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.a4b.api#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.a4b.api#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteProfileCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteProfileCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteProfileResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteProfileResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteProfileCommand = deserializeAws_json1_1DeleteProfileCommand;
async function deserializeAws_json1_1DeleteProfileCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.a4b.api#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.a4b.api#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteRoomCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteRoomCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteRoomResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteRoomResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteRoomCommand = deserializeAws_json1_1DeleteRoomCommand;
async function deserializeAws_json1_1DeleteRoomCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.a4b.api#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.a4b.api#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteRoomSkillParameterCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteRoomSkillParameterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteRoomSkillParameterResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteRoomSkillParameterResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteRoomSkillParameterCommand = deserializeAws_json1_1DeleteRoomSkillParameterCommand;
async function deserializeAws_json1_1DeleteRoomSkillParameterCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.a4b.api#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteSkillAuthorizationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteSkillAuthorizationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteSkillAuthorizationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteSkillAuthorizationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteSkillAuthorizationCommand = deserializeAws_json1_1DeleteSkillAuthorizationCommand;
async function deserializeAws_json1_1DeleteSkillAuthorizationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.a4b.api#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.a4b.api#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteSkillGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteSkillGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteSkillGroupResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteSkillGroupResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteSkillGroupCommand = deserializeAws_json1_1DeleteSkillGroupCommand;
async function deserializeAws_json1_1DeleteSkillGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.a4b.api#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.a4b.api#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteUserCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteUserCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteUserResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteUserResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteUserCommand = deserializeAws_json1_1DeleteUserCommand;
async function deserializeAws_json1_1DeleteUserCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.a4b.api#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.a4b.api#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DisassociateContactFromAddressBookCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DisassociateContactFromAddressBookCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisassociateContactFromAddressBookResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DisassociateContactFromAddressBookResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DisassociateContactFromAddressBookCommand = deserializeAws_json1_1DisassociateContactFromAddressBookCommand;
async function deserializeAws_json1_1DisassociateContactFromAddressBookCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DisassociateDeviceFromRoomCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DisassociateDeviceFromRoomCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisassociateDeviceFromRoomResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DisassociateDeviceFromRoomResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DisassociateDeviceFromRoomCommand = deserializeAws_json1_1DisassociateDeviceFromRoomCommand;
async function deserializeAws_json1_1DisassociateDeviceFromRoomCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.a4b.api#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DeviceNotRegisteredException":
        case "com.amazonaws.a4b.api#DeviceNotRegisteredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DeviceNotRegisteredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DisassociateSkillFromSkillGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DisassociateSkillFromSkillGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisassociateSkillFromSkillGroupResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DisassociateSkillFromSkillGroupResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DisassociateSkillFromSkillGroupCommand = deserializeAws_json1_1DisassociateSkillFromSkillGroupCommand;
async function deserializeAws_json1_1DisassociateSkillFromSkillGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.a4b.api#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.a4b.api#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DisassociateSkillFromUsersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DisassociateSkillFromUsersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisassociateSkillFromUsersResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DisassociateSkillFromUsersResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DisassociateSkillFromUsersCommand = deserializeAws_json1_1DisassociateSkillFromUsersCommand;
async function deserializeAws_json1_1DisassociateSkillFromUsersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.a4b.api#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.a4b.api#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DisassociateSkillGroupFromRoomCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DisassociateSkillGroupFromRoomCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisassociateSkillGroupFromRoomResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DisassociateSkillGroupFromRoomResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DisassociateSkillGroupFromRoomCommand = deserializeAws_json1_1DisassociateSkillGroupFromRoomCommand;
async function deserializeAws_json1_1DisassociateSkillGroupFromRoomCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.a4b.api#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ForgetSmartHomeAppliancesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ForgetSmartHomeAppliancesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ForgetSmartHomeAppliancesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ForgetSmartHomeAppliancesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ForgetSmartHomeAppliancesCommand = deserializeAws_json1_1ForgetSmartHomeAppliancesCommand;
async function deserializeAws_json1_1ForgetSmartHomeAppliancesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "NotFoundException":
        case "com.amazonaws.a4b.api#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetAddressBookCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetAddressBookCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetAddressBookResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetAddressBookResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetAddressBookCommand = deserializeAws_json1_1GetAddressBookCommand;
async function deserializeAws_json1_1GetAddressBookCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "NotFoundException":
        case "com.amazonaws.a4b.api#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetConferencePreferenceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetConferencePreferenceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetConferencePreferenceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetConferencePreferenceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetConferencePreferenceCommand = deserializeAws_json1_1GetConferencePreferenceCommand;
async function deserializeAws_json1_1GetConferencePreferenceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "NotFoundException":
        case "com.amazonaws.a4b.api#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetConferenceProviderCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetConferenceProviderCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetConferenceProviderResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetConferenceProviderResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetConferenceProviderCommand = deserializeAws_json1_1GetConferenceProviderCommand;
async function deserializeAws_json1_1GetConferenceProviderCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "NotFoundException":
        case "com.amazonaws.a4b.api#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetContactCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetContactCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetContactResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetContactResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetContactCommand = deserializeAws_json1_1GetContactCommand;
async function deserializeAws_json1_1GetContactCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "NotFoundException":
        case "com.amazonaws.a4b.api#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetDeviceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetDeviceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDeviceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetDeviceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetDeviceCommand = deserializeAws_json1_1GetDeviceCommand;
async function deserializeAws_json1_1GetDeviceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "NotFoundException":
        case "com.amazonaws.a4b.api#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetGatewayCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetGatewayCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetGatewayResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetGatewayResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetGatewayCommand = deserializeAws_json1_1GetGatewayCommand;
async function deserializeAws_json1_1GetGatewayCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "NotFoundException":
        case "com.amazonaws.a4b.api#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetGatewayGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetGatewayGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetGatewayGroupResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetGatewayGroupResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetGatewayGroupCommand = deserializeAws_json1_1GetGatewayGroupCommand;
async function deserializeAws_json1_1GetGatewayGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "NotFoundException":
        case "com.amazonaws.a4b.api#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetInvitationConfigurationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetInvitationConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetInvitationConfigurationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetInvitationConfigurationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetInvitationConfigurationCommand = deserializeAws_json1_1GetInvitationConfigurationCommand;
async function deserializeAws_json1_1GetInvitationConfigurationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "NotFoundException":
        case "com.amazonaws.a4b.api#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetNetworkProfileCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetNetworkProfileCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetNetworkProfileResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetNetworkProfileResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetNetworkProfileCommand = deserializeAws_json1_1GetNetworkProfileCommand;
async function deserializeAws_json1_1GetNetworkProfileCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "NotFoundException":
        case "com.amazonaws.a4b.api#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSecretsManagerResourceException":
        case "com.amazonaws.awsmoneypennyresourcemanagement#InvalidSecretsManagerResourceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidSecretsManagerResourceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetProfileCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetProfileCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetProfileResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetProfileResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetProfileCommand = deserializeAws_json1_1GetProfileCommand;
async function deserializeAws_json1_1GetProfileCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "NotFoundException":
        case "com.amazonaws.a4b.api#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetRoomCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetRoomCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetRoomResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetRoomResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetRoomCommand = deserializeAws_json1_1GetRoomCommand;
async function deserializeAws_json1_1GetRoomCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "NotFoundException":
        case "com.amazonaws.a4b.api#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetRoomSkillParameterCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetRoomSkillParameterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetRoomSkillParameterResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetRoomSkillParameterResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetRoomSkillParameterCommand = deserializeAws_json1_1GetRoomSkillParameterCommand;
async function deserializeAws_json1_1GetRoomSkillParameterCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "NotFoundException":
        case "com.amazonaws.a4b.api#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetSkillGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetSkillGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetSkillGroupResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetSkillGroupResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetSkillGroupCommand = deserializeAws_json1_1GetSkillGroupCommand;
async function deserializeAws_json1_1GetSkillGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "NotFoundException":
        case "com.amazonaws.a4b.api#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListBusinessReportSchedulesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListBusinessReportSchedulesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListBusinessReportSchedulesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListBusinessReportSchedulesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListBusinessReportSchedulesCommand = deserializeAws_json1_1ListBusinessReportSchedulesCommand;
async function deserializeAws_json1_1ListBusinessReportSchedulesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListConferenceProvidersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListConferenceProvidersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListConferenceProvidersResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListConferenceProvidersResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListConferenceProvidersCommand = deserializeAws_json1_1ListConferenceProvidersCommand;
async function deserializeAws_json1_1ListConferenceProvidersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListDeviceEventsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListDeviceEventsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListDeviceEventsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListDeviceEventsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListDeviceEventsCommand = deserializeAws_json1_1ListDeviceEventsCommand;
async function deserializeAws_json1_1ListDeviceEventsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "NotFoundException":
        case "com.amazonaws.a4b.api#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListGatewayGroupsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListGatewayGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListGatewayGroupsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListGatewayGroupsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListGatewayGroupsCommand = deserializeAws_json1_1ListGatewayGroupsCommand;
async function deserializeAws_json1_1ListGatewayGroupsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListGatewaysCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListGatewaysCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListGatewaysResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListGatewaysResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListGatewaysCommand = deserializeAws_json1_1ListGatewaysCommand;
async function deserializeAws_json1_1ListGatewaysCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListSkillsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListSkillsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListSkillsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListSkillsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListSkillsCommand = deserializeAws_json1_1ListSkillsCommand;
async function deserializeAws_json1_1ListSkillsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListSkillsStoreCategoriesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListSkillsStoreCategoriesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListSkillsStoreCategoriesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListSkillsStoreCategoriesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListSkillsStoreCategoriesCommand = deserializeAws_json1_1ListSkillsStoreCategoriesCommand;
async function deserializeAws_json1_1ListSkillsStoreCategoriesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListSkillsStoreSkillsByCategoryCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListSkillsStoreSkillsByCategoryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListSkillsStoreSkillsByCategoryResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListSkillsStoreSkillsByCategoryResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListSkillsStoreSkillsByCategoryCommand = deserializeAws_json1_1ListSkillsStoreSkillsByCategoryCommand;
async function deserializeAws_json1_1ListSkillsStoreSkillsByCategoryCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListSmartHomeAppliancesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListSmartHomeAppliancesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListSmartHomeAppliancesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListSmartHomeAppliancesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListSmartHomeAppliancesCommand = deserializeAws_json1_1ListSmartHomeAppliancesCommand;
async function deserializeAws_json1_1ListSmartHomeAppliancesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "NotFoundException":
        case "com.amazonaws.a4b.api#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListTagsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListTagsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTagsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListTagsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListTagsCommand = deserializeAws_json1_1ListTagsCommand;
async function deserializeAws_json1_1ListTagsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "NotFoundException":
        case "com.amazonaws.a4b.api#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1PutConferencePreferenceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutConferencePreferenceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutConferencePreferenceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutConferencePreferenceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutConferencePreferenceCommand = deserializeAws_json1_1PutConferencePreferenceCommand;
async function deserializeAws_json1_1PutConferencePreferenceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "NotFoundException":
        case "com.amazonaws.a4b.api#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1PutInvitationConfigurationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutInvitationConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutInvitationConfigurationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutInvitationConfigurationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutInvitationConfigurationCommand = deserializeAws_json1_1PutInvitationConfigurationCommand;
async function deserializeAws_json1_1PutInvitationConfigurationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.a4b.api#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.a4b.api#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1PutRoomSkillParameterCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutRoomSkillParameterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutRoomSkillParameterResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutRoomSkillParameterResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutRoomSkillParameterCommand = deserializeAws_json1_1PutRoomSkillParameterCommand;
async function deserializeAws_json1_1PutRoomSkillParameterCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.a4b.api#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1PutSkillAuthorizationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutSkillAuthorizationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutSkillAuthorizationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutSkillAuthorizationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutSkillAuthorizationCommand = deserializeAws_json1_1PutSkillAuthorizationCommand;
async function deserializeAws_json1_1PutSkillAuthorizationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.a4b.api#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedException":
        case "com.amazonaws.a4b.api#UnauthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1RegisterAVSDeviceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RegisterAVSDeviceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RegisterAVSDeviceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RegisterAVSDeviceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RegisterAVSDeviceCommand = deserializeAws_json1_1RegisterAVSDeviceCommand;
async function deserializeAws_json1_1RegisterAVSDeviceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.a4b.api#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.a4b.api#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDeviceException":
        case "com.amazonaws.awsmoneypennyresourcemanagement#InvalidDeviceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDeviceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1RejectSkillCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RejectSkillCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RejectSkillResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RejectSkillResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RejectSkillCommand = deserializeAws_json1_1RejectSkillCommand;
async function deserializeAws_json1_1RejectSkillCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.a4b.api#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.a4b.api#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ResolveRoomCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ResolveRoomCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ResolveRoomResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ResolveRoomResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ResolveRoomCommand = deserializeAws_json1_1ResolveRoomCommand;
async function deserializeAws_json1_1ResolveRoomCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "NotFoundException":
        case "com.amazonaws.a4b.api#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1RevokeInvitationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RevokeInvitationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RevokeInvitationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RevokeInvitationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RevokeInvitationCommand = deserializeAws_json1_1RevokeInvitationCommand;
async function deserializeAws_json1_1RevokeInvitationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.a4b.api#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.a4b.api#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1SearchAddressBooksCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1SearchAddressBooksCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SearchAddressBooksResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SearchAddressBooksResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1SearchAddressBooksCommand = deserializeAws_json1_1SearchAddressBooksCommand;
async function deserializeAws_json1_1SearchAddressBooksCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1SearchContactsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1SearchContactsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SearchContactsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SearchContactsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1SearchContactsCommand = deserializeAws_json1_1SearchContactsCommand;
async function deserializeAws_json1_1SearchContactsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1SearchDevicesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1SearchDevicesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SearchDevicesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SearchDevicesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1SearchDevicesCommand = deserializeAws_json1_1SearchDevicesCommand;
async function deserializeAws_json1_1SearchDevicesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1SearchNetworkProfilesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1SearchNetworkProfilesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SearchNetworkProfilesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SearchNetworkProfilesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1SearchNetworkProfilesCommand = deserializeAws_json1_1SearchNetworkProfilesCommand;
async function deserializeAws_json1_1SearchNetworkProfilesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1SearchProfilesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1SearchProfilesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SearchProfilesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SearchProfilesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1SearchProfilesCommand = deserializeAws_json1_1SearchProfilesCommand;
async function deserializeAws_json1_1SearchProfilesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1SearchRoomsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1SearchRoomsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SearchRoomsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SearchRoomsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1SearchRoomsCommand = deserializeAws_json1_1SearchRoomsCommand;
async function deserializeAws_json1_1SearchRoomsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1SearchSkillGroupsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1SearchSkillGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SearchSkillGroupsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SearchSkillGroupsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1SearchSkillGroupsCommand = deserializeAws_json1_1SearchSkillGroupsCommand;
async function deserializeAws_json1_1SearchSkillGroupsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1SearchUsersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1SearchUsersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SearchUsersResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SearchUsersResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1SearchUsersCommand = deserializeAws_json1_1SearchUsersCommand;
async function deserializeAws_json1_1SearchUsersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1SendInvitationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1SendInvitationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SendInvitationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SendInvitationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1SendInvitationCommand = deserializeAws_json1_1SendInvitationCommand;
async function deserializeAws_json1_1SendInvitationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.a4b.api#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.a4b.api#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidUserStatusException":
        case "com.amazonaws.awsmoneypennyresourcemanagement#InvalidUserStatusException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidUserStatusExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1StartDeviceSyncCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartDeviceSyncCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartDeviceSyncResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartDeviceSyncResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartDeviceSyncCommand = deserializeAws_json1_1StartDeviceSyncCommand;
async function deserializeAws_json1_1StartDeviceSyncCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DeviceNotRegisteredException":
        case "com.amazonaws.a4b.api#DeviceNotRegisteredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DeviceNotRegisteredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1StartSmartHomeApplianceDiscoveryCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartSmartHomeApplianceDiscoveryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartSmartHomeApplianceDiscoveryResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartSmartHomeApplianceDiscoveryResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartSmartHomeApplianceDiscoveryCommand = deserializeAws_json1_1StartSmartHomeApplianceDiscoveryCommand;
async function deserializeAws_json1_1StartSmartHomeApplianceDiscoveryCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "NotFoundException":
        case "com.amazonaws.a4b.api#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1TagResourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1TagResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1TagResourceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "TagResourceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1TagResourceCommand = deserializeAws_json1_1TagResourceCommand;
async function deserializeAws_json1_1TagResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "NotFoundException":
        case "com.amazonaws.a4b.api#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UntagResourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UntagResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UntagResourceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UntagResourceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UntagResourceCommand = deserializeAws_json1_1UntagResourceCommand;
async function deserializeAws_json1_1UntagResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "NotFoundException":
        case "com.amazonaws.a4b.api#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateAddressBookCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateAddressBookCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateAddressBookResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateAddressBookResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateAddressBookCommand = deserializeAws_json1_1UpdateAddressBookCommand;
async function deserializeAws_json1_1UpdateAddressBookCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.a4b.api#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NameInUseException":
        case "com.amazonaws.a4b.api#NameInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NameInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.a4b.api#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateBusinessReportScheduleCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateBusinessReportScheduleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateBusinessReportScheduleResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateBusinessReportScheduleResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateBusinessReportScheduleCommand = deserializeAws_json1_1UpdateBusinessReportScheduleCommand;
async function deserializeAws_json1_1UpdateBusinessReportScheduleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.a4b.api#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.a4b.api#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateConferenceProviderCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateConferenceProviderCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateConferenceProviderResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateConferenceProviderResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateConferenceProviderCommand = deserializeAws_json1_1UpdateConferenceProviderCommand;
async function deserializeAws_json1_1UpdateConferenceProviderCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "NotFoundException":
        case "com.amazonaws.a4b.api#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateContactCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateContactCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateContactResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateContactResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateContactCommand = deserializeAws_json1_1UpdateContactCommand;
async function deserializeAws_json1_1UpdateContactCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.a4b.api#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.a4b.api#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateDeviceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateDeviceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateDeviceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateDeviceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateDeviceCommand = deserializeAws_json1_1UpdateDeviceCommand;
async function deserializeAws_json1_1UpdateDeviceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.a4b.api#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DeviceNotRegisteredException":
        case "com.amazonaws.a4b.api#DeviceNotRegisteredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DeviceNotRegisteredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.a4b.api#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateGatewayCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateGatewayCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateGatewayResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateGatewayResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateGatewayCommand = deserializeAws_json1_1UpdateGatewayCommand;
async function deserializeAws_json1_1UpdateGatewayCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "NameInUseException":
        case "com.amazonaws.a4b.api#NameInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NameInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.a4b.api#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateGatewayGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateGatewayGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateGatewayGroupResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateGatewayGroupResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateGatewayGroupCommand = deserializeAws_json1_1UpdateGatewayGroupCommand;
async function deserializeAws_json1_1UpdateGatewayGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "NameInUseException":
        case "com.amazonaws.a4b.api#NameInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NameInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.a4b.api#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateNetworkProfileCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateNetworkProfileCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateNetworkProfileResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateNetworkProfileResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateNetworkProfileCommand = deserializeAws_json1_1UpdateNetworkProfileCommand;
async function deserializeAws_json1_1UpdateNetworkProfileCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.a4b.api#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NameInUseException":
        case "com.amazonaws.a4b.api#NameInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NameInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.a4b.api#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidCertificateAuthorityException":
        case "com.amazonaws.awsmoneypennyresourcemanagement#InvalidCertificateAuthorityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidCertificateAuthorityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSecretsManagerResourceException":
        case "com.amazonaws.awsmoneypennyresourcemanagement#InvalidSecretsManagerResourceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidSecretsManagerResourceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateProfileCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateProfileCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateProfileResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateProfileResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateProfileCommand = deserializeAws_json1_1UpdateProfileCommand;
async function deserializeAws_json1_1UpdateProfileCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.a4b.api#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NameInUseException":
        case "com.amazonaws.a4b.api#NameInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NameInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.a4b.api#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateRoomCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateRoomCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateRoomResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateRoomResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateRoomCommand = deserializeAws_json1_1UpdateRoomCommand;
async function deserializeAws_json1_1UpdateRoomCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "NameInUseException":
        case "com.amazonaws.a4b.api#NameInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NameInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.a4b.api#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateSkillGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateSkillGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateSkillGroupResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateSkillGroupResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateSkillGroupCommand = deserializeAws_json1_1UpdateSkillGroupCommand;
async function deserializeAws_json1_1UpdateSkillGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.a4b.api#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NameInUseException":
        case "com.amazonaws.a4b.api#NameInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NameInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.a4b.api#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
const deserializeAws_json1_1AlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AlreadyExistsException(body, context);
    const contents = Object.assign({ name: "AlreadyExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ConcurrentModificationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ConcurrentModificationException(body, context);
    const contents = Object.assign({ name: "ConcurrentModificationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1DeviceNotRegisteredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DeviceNotRegisteredException(body, context);
    const contents = Object.assign({ name: "DeviceNotRegisteredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1LimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1LimitExceededException(body, context);
    const contents = Object.assign({ name: "LimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1NameInUseExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NameInUseException(body, context);
    const contents = Object.assign({ name: "NameInUseException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1NotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NotFoundException(body, context);
    const contents = Object.assign({ name: "NotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceInUseExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceInUseException(body, context);
    const contents = Object.assign({ name: "ResourceInUseException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1UnauthorizedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UnauthorizedException(body, context);
    const contents = Object.assign({ name: "UnauthorizedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidCertificateAuthorityExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidCertificateAuthorityException(body, context);
    const contents = Object.assign({ name: "InvalidCertificateAuthorityException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidDeviceExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidDeviceException(body, context);
    const contents = Object.assign({ name: "InvalidDeviceException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidSecretsManagerResourceExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidSecretsManagerResourceException(body, context);
    const contents = Object.assign({ name: "InvalidSecretsManagerResourceException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidServiceLinkedRoleStateExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidServiceLinkedRoleStateException(body, context);
    const contents = Object.assign({ name: "InvalidServiceLinkedRoleStateException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidUserStatusExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidUserStatusException(body, context);
    const contents = Object.assign({ name: "InvalidUserStatusException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceAssociatedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceAssociatedException(body, context);
    const contents = Object.assign({ name: "ResourceAssociatedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1SkillNotLinkedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1SkillNotLinkedException(body, context);
    const contents = Object.assign({ name: "SkillNotLinkedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1Filter = (input, context) => {
    const bodyParams = {};
    if (input.Key !== undefined) {
        bodyParams["Key"] = input.Key;
    }
    if (input.Values !== undefined) {
        bodyParams["Values"] = serializeAws_json1_1FilterValueList(input.Values, context);
    }
    return bodyParams;
};
const serializeAws_json1_1FilterList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Filter(entry, context));
    }
    return contents;
};
const serializeAws_json1_1FilterValueList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1IPDialIn = (input, context) => {
    const bodyParams = {};
    if (input.CommsProtocol !== undefined) {
        bodyParams["CommsProtocol"] = input.CommsProtocol;
    }
    if (input.Endpoint !== undefined) {
        bodyParams["Endpoint"] = input.Endpoint;
    }
    return bodyParams;
};
const serializeAws_json1_1MeetingSetting = (input, context) => {
    const bodyParams = {};
    if (input.RequirePin !== undefined) {
        bodyParams["RequirePin"] = input.RequirePin;
    }
    return bodyParams;
};
const serializeAws_json1_1PSTNDialIn = (input, context) => {
    const bodyParams = {};
    if (input.CountryCode !== undefined) {
        bodyParams["CountryCode"] = input.CountryCode;
    }
    if (input.OneClickIdDelay !== undefined) {
        bodyParams["OneClickIdDelay"] = input.OneClickIdDelay;
    }
    if (input.OneClickPinDelay !== undefined) {
        bodyParams["OneClickPinDelay"] = input.OneClickPinDelay;
    }
    if (input.PhoneNumber !== undefined) {
        bodyParams["PhoneNumber"] = input.PhoneNumber;
    }
    return bodyParams;
};
const serializeAws_json1_1Audio = (input, context) => {
    const bodyParams = {};
    if (input.Locale !== undefined) {
        bodyParams["Locale"] = input.Locale;
    }
    if (input.Location !== undefined) {
        bodyParams["Location"] = input.Location;
    }
    return bodyParams;
};
const serializeAws_json1_1AudioList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Audio(entry, context));
    }
    return contents;
};
const serializeAws_json1_1Content = (input, context) => {
    const bodyParams = {};
    if (input.AudioList !== undefined) {
        bodyParams["AudioList"] = serializeAws_json1_1AudioList(input.AudioList, context);
    }
    if (input.SsmlList !== undefined) {
        bodyParams["SsmlList"] = serializeAws_json1_1SsmlList(input.SsmlList, context);
    }
    if (input.TextList !== undefined) {
        bodyParams["TextList"] = serializeAws_json1_1TextList(input.TextList, context);
    }
    return bodyParams;
};
const serializeAws_json1_1SendAnnouncementRequest = (input, context) => {
    const bodyParams = {};
    if (input.ClientRequestToken === undefined) {
        input.ClientRequestToken = uuid_1.v4();
    }
    if (input.ClientRequestToken !== undefined) {
        bodyParams["ClientRequestToken"] = input.ClientRequestToken;
    }
    if (input.Content !== undefined) {
        bodyParams["Content"] = serializeAws_json1_1Content(input.Content, context);
    }
    if (input.RoomFilters !== undefined) {
        bodyParams["RoomFilters"] = serializeAws_json1_1FilterList(input.RoomFilters, context);
    }
    if (input.TimeToLiveInSeconds !== undefined) {
        bodyParams["TimeToLiveInSeconds"] = input.TimeToLiveInSeconds;
    }
    return bodyParams;
};
const serializeAws_json1_1Ssml = (input, context) => {
    const bodyParams = {};
    if (input.Locale !== undefined) {
        bodyParams["Locale"] = input.Locale;
    }
    if (input.Value !== undefined) {
        bodyParams["Value"] = input.Value;
    }
    return bodyParams;
};
const serializeAws_json1_1SsmlList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Ssml(entry, context));
    }
    return contents;
};
const serializeAws_json1_1Text = (input, context) => {
    const bodyParams = {};
    if (input.Locale !== undefined) {
        bodyParams["Locale"] = input.Locale;
    }
    if (input.Value !== undefined) {
        bodyParams["Value"] = input.Value;
    }
    return bodyParams;
};
const serializeAws_json1_1TextList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Text(entry, context));
    }
    return contents;
};
const serializeAws_json1_1DeleteDeviceUsageDataRequest = (input, context) => {
    const bodyParams = {};
    if (input.DeviceArn !== undefined) {
        bodyParams["DeviceArn"] = input.DeviceArn;
    }
    if (input.DeviceUsageType !== undefined) {
        bodyParams["DeviceUsageType"] = input.DeviceUsageType;
    }
    return bodyParams;
};
const serializeAws_json1_1ApproveSkillRequest = (input, context) => {
    const bodyParams = {};
    if (input.SkillId !== undefined) {
        bodyParams["SkillId"] = input.SkillId;
    }
    return bodyParams;
};
const serializeAws_json1_1AssociateContactWithAddressBookRequest = (input, context) => {
    const bodyParams = {};
    if (input.AddressBookArn !== undefined) {
        bodyParams["AddressBookArn"] = input.AddressBookArn;
    }
    if (input.ContactArn !== undefined) {
        bodyParams["ContactArn"] = input.ContactArn;
    }
    return bodyParams;
};
const serializeAws_json1_1AssociateDeviceWithNetworkProfileRequest = (input, context) => {
    const bodyParams = {};
    if (input.DeviceArn !== undefined) {
        bodyParams["DeviceArn"] = input.DeviceArn;
    }
    if (input.NetworkProfileArn !== undefined) {
        bodyParams["NetworkProfileArn"] = input.NetworkProfileArn;
    }
    return bodyParams;
};
const serializeAws_json1_1AssociateDeviceWithRoomRequest = (input, context) => {
    const bodyParams = {};
    if (input.DeviceArn !== undefined) {
        bodyParams["DeviceArn"] = input.DeviceArn;
    }
    if (input.RoomArn !== undefined) {
        bodyParams["RoomArn"] = input.RoomArn;
    }
    return bodyParams;
};
const serializeAws_json1_1AssociateSkillGroupWithRoomRequest = (input, context) => {
    const bodyParams = {};
    if (input.RoomArn !== undefined) {
        bodyParams["RoomArn"] = input.RoomArn;
    }
    if (input.SkillGroupArn !== undefined) {
        bodyParams["SkillGroupArn"] = input.SkillGroupArn;
    }
    return bodyParams;
};
const serializeAws_json1_1AssociateSkillWithSkillGroupRequest = (input, context) => {
    const bodyParams = {};
    if (input.SkillGroupArn !== undefined) {
        bodyParams["SkillGroupArn"] = input.SkillGroupArn;
    }
    if (input.SkillId !== undefined) {
        bodyParams["SkillId"] = input.SkillId;
    }
    return bodyParams;
};
const serializeAws_json1_1AssociateSkillWithUsersRequest = (input, context) => {
    const bodyParams = {};
    if (input.SkillId !== undefined) {
        bodyParams["SkillId"] = input.SkillId;
    }
    return bodyParams;
};
const serializeAws_json1_1AuthorizationResult = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const serializeAws_json1_1BusinessReportContentRange = (input, context) => {
    const bodyParams = {};
    if (input.Interval !== undefined) {
        bodyParams["Interval"] = input.Interval;
    }
    return bodyParams;
};
const serializeAws_json1_1BusinessReportRecurrence = (input, context) => {
    const bodyParams = {};
    if (input.StartDate !== undefined) {
        bodyParams["StartDate"] = input.StartDate;
    }
    return bodyParams;
};
const serializeAws_json1_1ConferencePreference = (input, context) => {
    const bodyParams = {};
    if (input.DefaultConferenceProviderArn !== undefined) {
        bodyParams["DefaultConferenceProviderArn"] =
            input.DefaultConferenceProviderArn;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateAddressBookRequest = (input, context) => {
    const bodyParams = {};
    if (input.ClientRequestToken === undefined) {
        input.ClientRequestToken = uuid_1.v4();
    }
    if (input.ClientRequestToken !== undefined) {
        bodyParams["ClientRequestToken"] = input.ClientRequestToken;
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateBusinessReportScheduleRequest = (input, context) => {
    const bodyParams = {};
    if (input.ClientRequestToken === undefined) {
        input.ClientRequestToken = uuid_1.v4();
    }
    if (input.ClientRequestToken !== undefined) {
        bodyParams["ClientRequestToken"] = input.ClientRequestToken;
    }
    if (input.ContentRange !== undefined) {
        bodyParams["ContentRange"] = serializeAws_json1_1BusinessReportContentRange(input.ContentRange, context);
    }
    if (input.Format !== undefined) {
        bodyParams["Format"] = input.Format;
    }
    if (input.Recurrence !== undefined) {
        bodyParams["Recurrence"] = serializeAws_json1_1BusinessReportRecurrence(input.Recurrence, context);
    }
    if (input.S3BucketName !== undefined) {
        bodyParams["S3BucketName"] = input.S3BucketName;
    }
    if (input.S3KeyPrefix !== undefined) {
        bodyParams["S3KeyPrefix"] = input.S3KeyPrefix;
    }
    if (input.ScheduleName !== undefined) {
        bodyParams["ScheduleName"] = input.ScheduleName;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateConferenceProviderRequest = (input, context) => {
    const bodyParams = {};
    if (input.ClientRequestToken === undefined) {
        input.ClientRequestToken = uuid_1.v4();
    }
    if (input.ClientRequestToken !== undefined) {
        bodyParams["ClientRequestToken"] = input.ClientRequestToken;
    }
    if (input.ConferenceProviderName !== undefined) {
        bodyParams["ConferenceProviderName"] = input.ConferenceProviderName;
    }
    if (input.ConferenceProviderType !== undefined) {
        bodyParams["ConferenceProviderType"] = input.ConferenceProviderType;
    }
    if (input.IPDialIn !== undefined) {
        bodyParams["IPDialIn"] = serializeAws_json1_1IPDialIn(input.IPDialIn, context);
    }
    if (input.MeetingSetting !== undefined) {
        bodyParams["MeetingSetting"] = serializeAws_json1_1MeetingSetting(input.MeetingSetting, context);
    }
    if (input.PSTNDialIn !== undefined) {
        bodyParams["PSTNDialIn"] = serializeAws_json1_1PSTNDialIn(input.PSTNDialIn, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateContactRequest = (input, context) => {
    const bodyParams = {};
    if (input.ClientRequestToken === undefined) {
        input.ClientRequestToken = uuid_1.v4();
    }
    if (input.ClientRequestToken !== undefined) {
        bodyParams["ClientRequestToken"] = input.ClientRequestToken;
    }
    if (input.DisplayName !== undefined) {
        bodyParams["DisplayName"] = input.DisplayName;
    }
    if (input.FirstName !== undefined) {
        bodyParams["FirstName"] = input.FirstName;
    }
    if (input.LastName !== undefined) {
        bodyParams["LastName"] = input.LastName;
    }
    if (input.PhoneNumber !== undefined) {
        bodyParams["PhoneNumber"] = input.PhoneNumber;
    }
    if (input.PhoneNumbers !== undefined) {
        bodyParams["PhoneNumbers"] = serializeAws_json1_1PhoneNumberList(input.PhoneNumbers, context);
    }
    if (input.SipAddresses !== undefined) {
        bodyParams["SipAddresses"] = serializeAws_json1_1SipAddressList(input.SipAddresses, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateEndOfMeetingReminder = (input, context) => {
    const bodyParams = {};
    if (input.Enabled !== undefined) {
        bodyParams["Enabled"] = input.Enabled;
    }
    if (input.ReminderAtMinutes !== undefined) {
        bodyParams["ReminderAtMinutes"] = serializeAws_json1_1EndOfMeetingReminderMinutesList(input.ReminderAtMinutes, context);
    }
    if (input.ReminderType !== undefined) {
        bodyParams["ReminderType"] = input.ReminderType;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateGatewayGroupRequest = (input, context) => {
    const bodyParams = {};
    if (input.ClientRequestToken === undefined) {
        input.ClientRequestToken = uuid_1.v4();
    }
    if (input.ClientRequestToken !== undefined) {
        bodyParams["ClientRequestToken"] = input.ClientRequestToken;
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateInstantBooking = (input, context) => {
    const bodyParams = {};
    if (input.DurationInMinutes !== undefined) {
        bodyParams["DurationInMinutes"] = input.DurationInMinutes;
    }
    if (input.Enabled !== undefined) {
        bodyParams["Enabled"] = input.Enabled;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateMeetingRoomConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.EndOfMeetingReminder !== undefined) {
        bodyParams["EndOfMeetingReminder"] = serializeAws_json1_1CreateEndOfMeetingReminder(input.EndOfMeetingReminder, context);
    }
    if (input.InstantBooking !== undefined) {
        bodyParams["InstantBooking"] = serializeAws_json1_1CreateInstantBooking(input.InstantBooking, context);
    }
    if (input.RequireCheckIn !== undefined) {
        bodyParams["RequireCheckIn"] = serializeAws_json1_1CreateRequireCheckIn(input.RequireCheckIn, context);
    }
    if (input.RoomUtilizationMetricsEnabled !== undefined) {
        bodyParams["RoomUtilizationMetricsEnabled"] =
            input.RoomUtilizationMetricsEnabled;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateNetworkProfileRequest = (input, context) => {
    const bodyParams = {};
    if (input.CertificateAuthorityArn !== undefined) {
        bodyParams["CertificateAuthorityArn"] = input.CertificateAuthorityArn;
    }
    if (input.ClientRequestToken === undefined) {
        input.ClientRequestToken = uuid_1.v4();
    }
    if (input.ClientRequestToken !== undefined) {
        bodyParams["ClientRequestToken"] = input.ClientRequestToken;
    }
    if (input.CurrentPassword !== undefined) {
        bodyParams["CurrentPassword"] = input.CurrentPassword;
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.EapMethod !== undefined) {
        bodyParams["EapMethod"] = input.EapMethod;
    }
    if (input.NetworkProfileName !== undefined) {
        bodyParams["NetworkProfileName"] = input.NetworkProfileName;
    }
    if (input.NextPassword !== undefined) {
        bodyParams["NextPassword"] = input.NextPassword;
    }
    if (input.SecurityType !== undefined) {
        bodyParams["SecurityType"] = input.SecurityType;
    }
    if (input.Ssid !== undefined) {
        bodyParams["Ssid"] = input.Ssid;
    }
    if (input.TrustAnchors !== undefined) {
        bodyParams["TrustAnchors"] = serializeAws_json1_1TrustAnchorList(input.TrustAnchors, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateProfileRequest = (input, context) => {
    const bodyParams = {};
    if (input.Address !== undefined) {
        bodyParams["Address"] = input.Address;
    }
    if (input.ClientRequestToken === undefined) {
        input.ClientRequestToken = uuid_1.v4();
    }
    if (input.ClientRequestToken !== undefined) {
        bodyParams["ClientRequestToken"] = input.ClientRequestToken;
    }
    if (input.DistanceUnit !== undefined) {
        bodyParams["DistanceUnit"] = input.DistanceUnit;
    }
    if (input.Locale !== undefined) {
        bodyParams["Locale"] = input.Locale;
    }
    if (input.MaxVolumeLimit !== undefined) {
        bodyParams["MaxVolumeLimit"] = input.MaxVolumeLimit;
    }
    if (input.MeetingRoomConfiguration !== undefined) {
        bodyParams["MeetingRoomConfiguration"] = serializeAws_json1_1CreateMeetingRoomConfiguration(input.MeetingRoomConfiguration, context);
    }
    if (input.PSTNEnabled !== undefined) {
        bodyParams["PSTNEnabled"] = input.PSTNEnabled;
    }
    if (input.ProfileName !== undefined) {
        bodyParams["ProfileName"] = input.ProfileName;
    }
    if (input.SetupModeDisabled !== undefined) {
        bodyParams["SetupModeDisabled"] = input.SetupModeDisabled;
    }
    if (input.TemperatureUnit !== undefined) {
        bodyParams["TemperatureUnit"] = input.TemperatureUnit;
    }
    if (input.Timezone !== undefined) {
        bodyParams["Timezone"] = input.Timezone;
    }
    if (input.WakeWord !== undefined) {
        bodyParams["WakeWord"] = input.WakeWord;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateRequireCheckIn = (input, context) => {
    const bodyParams = {};
    if (input.Enabled !== undefined) {
        bodyParams["Enabled"] = input.Enabled;
    }
    if (input.ReleaseAfterMinutes !== undefined) {
        bodyParams["ReleaseAfterMinutes"] = input.ReleaseAfterMinutes;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateRoomRequest = (input, context) => {
    const bodyParams = {};
    if (input.ClientRequestToken === undefined) {
        input.ClientRequestToken = uuid_1.v4();
    }
    if (input.ClientRequestToken !== undefined) {
        bodyParams["ClientRequestToken"] = input.ClientRequestToken;
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.ProfileArn !== undefined) {
        bodyParams["ProfileArn"] = input.ProfileArn;
    }
    if (input.ProviderCalendarId !== undefined) {
        bodyParams["ProviderCalendarId"] = input.ProviderCalendarId;
    }
    if (input.RoomName !== undefined) {
        bodyParams["RoomName"] = input.RoomName;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateSkillGroupRequest = (input, context) => {
    const bodyParams = {};
    if (input.ClientRequestToken === undefined) {
        input.ClientRequestToken = uuid_1.v4();
    }
    if (input.ClientRequestToken !== undefined) {
        bodyParams["ClientRequestToken"] = input.ClientRequestToken;
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.SkillGroupName !== undefined) {
        bodyParams["SkillGroupName"] = input.SkillGroupName;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateUserRequest = (input, context) => {
    const bodyParams = {};
    if (input.ClientRequestToken === undefined) {
        input.ClientRequestToken = uuid_1.v4();
    }
    if (input.ClientRequestToken !== undefined) {
        bodyParams["ClientRequestToken"] = input.ClientRequestToken;
    }
    if (input.Email !== undefined) {
        bodyParams["Email"] = input.Email;
    }
    if (input.FirstName !== undefined) {
        bodyParams["FirstName"] = input.FirstName;
    }
    if (input.LastName !== undefined) {
        bodyParams["LastName"] = input.LastName;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    if (input.UserId !== undefined) {
        bodyParams["UserId"] = input.UserId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteAddressBookRequest = (input, context) => {
    const bodyParams = {};
    if (input.AddressBookArn !== undefined) {
        bodyParams["AddressBookArn"] = input.AddressBookArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteBusinessReportScheduleRequest = (input, context) => {
    const bodyParams = {};
    if (input.ScheduleArn !== undefined) {
        bodyParams["ScheduleArn"] = input.ScheduleArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteConferenceProviderRequest = (input, context) => {
    const bodyParams = {};
    if (input.ConferenceProviderArn !== undefined) {
        bodyParams["ConferenceProviderArn"] = input.ConferenceProviderArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteContactRequest = (input, context) => {
    const bodyParams = {};
    if (input.ContactArn !== undefined) {
        bodyParams["ContactArn"] = input.ContactArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteDeviceRequest = (input, context) => {
    const bodyParams = {};
    if (input.DeviceArn !== undefined) {
        bodyParams["DeviceArn"] = input.DeviceArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteGatewayGroupRequest = (input, context) => {
    const bodyParams = {};
    if (input.GatewayGroupArn !== undefined) {
        bodyParams["GatewayGroupArn"] = input.GatewayGroupArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteNetworkProfileRequest = (input, context) => {
    const bodyParams = {};
    if (input.NetworkProfileArn !== undefined) {
        bodyParams["NetworkProfileArn"] = input.NetworkProfileArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteProfileRequest = (input, context) => {
    const bodyParams = {};
    if (input.ProfileArn !== undefined) {
        bodyParams["ProfileArn"] = input.ProfileArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteRoomRequest = (input, context) => {
    const bodyParams = {};
    if (input.RoomArn !== undefined) {
        bodyParams["RoomArn"] = input.RoomArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteRoomSkillParameterRequest = (input, context) => {
    const bodyParams = {};
    if (input.ParameterKey !== undefined) {
        bodyParams["ParameterKey"] = input.ParameterKey;
    }
    if (input.RoomArn !== undefined) {
        bodyParams["RoomArn"] = input.RoomArn;
    }
    if (input.SkillId !== undefined) {
        bodyParams["SkillId"] = input.SkillId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteSkillAuthorizationRequest = (input, context) => {
    const bodyParams = {};
    if (input.RoomArn !== undefined) {
        bodyParams["RoomArn"] = input.RoomArn;
    }
    if (input.SkillId !== undefined) {
        bodyParams["SkillId"] = input.SkillId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteSkillGroupRequest = (input, context) => {
    const bodyParams = {};
    if (input.SkillGroupArn !== undefined) {
        bodyParams["SkillGroupArn"] = input.SkillGroupArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteUserRequest = (input, context) => {
    const bodyParams = {};
    if (input.EnrollmentId !== undefined) {
        bodyParams["EnrollmentId"] = input.EnrollmentId;
    }
    if (input.UserArn !== undefined) {
        bodyParams["UserArn"] = input.UserArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DisassociateContactFromAddressBookRequest = (input, context) => {
    const bodyParams = {};
    if (input.AddressBookArn !== undefined) {
        bodyParams["AddressBookArn"] = input.AddressBookArn;
    }
    if (input.ContactArn !== undefined) {
        bodyParams["ContactArn"] = input.ContactArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DisassociateDeviceFromRoomRequest = (input, context) => {
    const bodyParams = {};
    if (input.DeviceArn !== undefined) {
        bodyParams["DeviceArn"] = input.DeviceArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DisassociateSkillFromSkillGroupRequest = (input, context) => {
    const bodyParams = {};
    if (input.SkillGroupArn !== undefined) {
        bodyParams["SkillGroupArn"] = input.SkillGroupArn;
    }
    if (input.SkillId !== undefined) {
        bodyParams["SkillId"] = input.SkillId;
    }
    return bodyParams;
};
const serializeAws_json1_1DisassociateSkillFromUsersRequest = (input, context) => {
    const bodyParams = {};
    if (input.SkillId !== undefined) {
        bodyParams["SkillId"] = input.SkillId;
    }
    return bodyParams;
};
const serializeAws_json1_1DisassociateSkillGroupFromRoomRequest = (input, context) => {
    const bodyParams = {};
    if (input.RoomArn !== undefined) {
        bodyParams["RoomArn"] = input.RoomArn;
    }
    if (input.SkillGroupArn !== undefined) {
        bodyParams["SkillGroupArn"] = input.SkillGroupArn;
    }
    return bodyParams;
};
const serializeAws_json1_1EndOfMeetingReminderMinutesList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1Features = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ForgetSmartHomeAppliancesRequest = (input, context) => {
    const bodyParams = {};
    if (input.RoomArn !== undefined) {
        bodyParams["RoomArn"] = input.RoomArn;
    }
    return bodyParams;
};
const serializeAws_json1_1GetAddressBookRequest = (input, context) => {
    const bodyParams = {};
    if (input.AddressBookArn !== undefined) {
        bodyParams["AddressBookArn"] = input.AddressBookArn;
    }
    return bodyParams;
};
const serializeAws_json1_1GetConferencePreferenceRequest = (input, context) => {
    const bodyParams = {};
    return bodyParams;
};
const serializeAws_json1_1GetConferenceProviderRequest = (input, context) => {
    const bodyParams = {};
    if (input.ConferenceProviderArn !== undefined) {
        bodyParams["ConferenceProviderArn"] = input.ConferenceProviderArn;
    }
    return bodyParams;
};
const serializeAws_json1_1GetContactRequest = (input, context) => {
    const bodyParams = {};
    if (input.ContactArn !== undefined) {
        bodyParams["ContactArn"] = input.ContactArn;
    }
    return bodyParams;
};
const serializeAws_json1_1GetDeviceRequest = (input, context) => {
    const bodyParams = {};
    if (input.DeviceArn !== undefined) {
        bodyParams["DeviceArn"] = input.DeviceArn;
    }
    return bodyParams;
};
const serializeAws_json1_1GetGatewayGroupRequest = (input, context) => {
    const bodyParams = {};
    if (input.GatewayGroupArn !== undefined) {
        bodyParams["GatewayGroupArn"] = input.GatewayGroupArn;
    }
    return bodyParams;
};
const serializeAws_json1_1GetGatewayRequest = (input, context) => {
    const bodyParams = {};
    if (input.GatewayArn !== undefined) {
        bodyParams["GatewayArn"] = input.GatewayArn;
    }
    return bodyParams;
};
const serializeAws_json1_1GetInvitationConfigurationRequest = (input, context) => {
    const bodyParams = {};
    return bodyParams;
};
const serializeAws_json1_1GetNetworkProfileRequest = (input, context) => {
    const bodyParams = {};
    if (input.NetworkProfileArn !== undefined) {
        bodyParams["NetworkProfileArn"] = input.NetworkProfileArn;
    }
    return bodyParams;
};
const serializeAws_json1_1GetProfileRequest = (input, context) => {
    const bodyParams = {};
    if (input.ProfileArn !== undefined) {
        bodyParams["ProfileArn"] = input.ProfileArn;
    }
    return bodyParams;
};
const serializeAws_json1_1GetRoomRequest = (input, context) => {
    const bodyParams = {};
    if (input.RoomArn !== undefined) {
        bodyParams["RoomArn"] = input.RoomArn;
    }
    return bodyParams;
};
const serializeAws_json1_1GetRoomSkillParameterRequest = (input, context) => {
    const bodyParams = {};
    if (input.ParameterKey !== undefined) {
        bodyParams["ParameterKey"] = input.ParameterKey;
    }
    if (input.RoomArn !== undefined) {
        bodyParams["RoomArn"] = input.RoomArn;
    }
    if (input.SkillId !== undefined) {
        bodyParams["SkillId"] = input.SkillId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetSkillGroupRequest = (input, context) => {
    const bodyParams = {};
    if (input.SkillGroupArn !== undefined) {
        bodyParams["SkillGroupArn"] = input.SkillGroupArn;
    }
    return bodyParams;
};
const serializeAws_json1_1ListBusinessReportSchedulesRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListConferenceProvidersRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListDeviceEventsRequest = (input, context) => {
    const bodyParams = {};
    if (input.DeviceArn !== undefined) {
        bodyParams["DeviceArn"] = input.DeviceArn;
    }
    if (input.EventType !== undefined) {
        bodyParams["EventType"] = input.EventType;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListGatewayGroupsRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListGatewaysRequest = (input, context) => {
    const bodyParams = {};
    if (input.GatewayGroupArn !== undefined) {
        bodyParams["GatewayGroupArn"] = input.GatewayGroupArn;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListSkillsRequest = (input, context) => {
    const bodyParams = {};
    if (input.EnablementType !== undefined) {
        bodyParams["EnablementType"] = input.EnablementType;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.SkillGroupArn !== undefined) {
        bodyParams["SkillGroupArn"] = input.SkillGroupArn;
    }
    if (input.SkillType !== undefined) {
        bodyParams["SkillType"] = input.SkillType;
    }
    return bodyParams;
};
const serializeAws_json1_1ListSkillsStoreCategoriesRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListSkillsStoreSkillsByCategoryRequest = (input, context) => {
    const bodyParams = {};
    if (input.CategoryId !== undefined) {
        bodyParams["CategoryId"] = input.CategoryId;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListSmartHomeAppliancesRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.RoomArn !== undefined) {
        bodyParams["RoomArn"] = input.RoomArn;
    }
    return bodyParams;
};
const serializeAws_json1_1ListTagsRequest = (input, context) => {
    const bodyParams = {};
    if (input.Arn !== undefined) {
        bodyParams["Arn"] = input.Arn;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1PhoneNumber = (input, context) => {
    const bodyParams = {};
    if (input.Number !== undefined) {
        bodyParams["Number"] = input.Number;
    }
    if (input.Type !== undefined) {
        bodyParams["Type"] = input.Type;
    }
    return bodyParams;
};
const serializeAws_json1_1PhoneNumberList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1PhoneNumber(entry, context));
    }
    return contents;
};
const serializeAws_json1_1PutConferencePreferenceRequest = (input, context) => {
    const bodyParams = {};
    if (input.ConferencePreference !== undefined) {
        bodyParams["ConferencePreference"] = serializeAws_json1_1ConferencePreference(input.ConferencePreference, context);
    }
    return bodyParams;
};
const serializeAws_json1_1PutInvitationConfigurationRequest = (input, context) => {
    const bodyParams = {};
    if (input.ContactEmail !== undefined) {
        bodyParams["ContactEmail"] = input.ContactEmail;
    }
    if (input.OrganizationName !== undefined) {
        bodyParams["OrganizationName"] = input.OrganizationName;
    }
    if (input.PrivateSkillIds !== undefined) {
        bodyParams["PrivateSkillIds"] = serializeAws_json1_1ShortSkillIdList(input.PrivateSkillIds, context);
    }
    return bodyParams;
};
const serializeAws_json1_1PutRoomSkillParameterRequest = (input, context) => {
    const bodyParams = {};
    if (input.RoomArn !== undefined) {
        bodyParams["RoomArn"] = input.RoomArn;
    }
    if (input.RoomSkillParameter !== undefined) {
        bodyParams["RoomSkillParameter"] = serializeAws_json1_1RoomSkillParameter(input.RoomSkillParameter, context);
    }
    if (input.SkillId !== undefined) {
        bodyParams["SkillId"] = input.SkillId;
    }
    return bodyParams;
};
const serializeAws_json1_1PutSkillAuthorizationRequest = (input, context) => {
    const bodyParams = {};
    if (input.AuthorizationResult !== undefined) {
        bodyParams["AuthorizationResult"] = serializeAws_json1_1AuthorizationResult(input.AuthorizationResult, context);
    }
    if (input.RoomArn !== undefined) {
        bodyParams["RoomArn"] = input.RoomArn;
    }
    if (input.SkillId !== undefined) {
        bodyParams["SkillId"] = input.SkillId;
    }
    return bodyParams;
};
const serializeAws_json1_1RegisterAVSDeviceRequest = (input, context) => {
    const bodyParams = {};
    if (input.AmazonId !== undefined) {
        bodyParams["AmazonId"] = input.AmazonId;
    }
    if (input.ClientId !== undefined) {
        bodyParams["ClientId"] = input.ClientId;
    }
    if (input.DeviceSerialNumber !== undefined) {
        bodyParams["DeviceSerialNumber"] = input.DeviceSerialNumber;
    }
    if (input.ProductId !== undefined) {
        bodyParams["ProductId"] = input.ProductId;
    }
    if (input.UserCode !== undefined) {
        bodyParams["UserCode"] = input.UserCode;
    }
    return bodyParams;
};
const serializeAws_json1_1RejectSkillRequest = (input, context) => {
    const bodyParams = {};
    if (input.SkillId !== undefined) {
        bodyParams["SkillId"] = input.SkillId;
    }
    return bodyParams;
};
const serializeAws_json1_1ResolveRoomRequest = (input, context) => {
    const bodyParams = {};
    if (input.SkillId !== undefined) {
        bodyParams["SkillId"] = input.SkillId;
    }
    if (input.UserId !== undefined) {
        bodyParams["UserId"] = input.UserId;
    }
    return bodyParams;
};
const serializeAws_json1_1RevokeInvitationRequest = (input, context) => {
    const bodyParams = {};
    if (input.EnrollmentId !== undefined) {
        bodyParams["EnrollmentId"] = input.EnrollmentId;
    }
    if (input.UserArn !== undefined) {
        bodyParams["UserArn"] = input.UserArn;
    }
    return bodyParams;
};
const serializeAws_json1_1RoomSkillParameter = (input, context) => {
    const bodyParams = {};
    if (input.ParameterKey !== undefined) {
        bodyParams["ParameterKey"] = input.ParameterKey;
    }
    if (input.ParameterValue !== undefined) {
        bodyParams["ParameterValue"] = input.ParameterValue;
    }
    return bodyParams;
};
const serializeAws_json1_1SearchAddressBooksRequest = (input, context) => {
    const bodyParams = {};
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1FilterList(input.Filters, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.SortCriteria !== undefined) {
        bodyParams["SortCriteria"] = serializeAws_json1_1SortList(input.SortCriteria, context);
    }
    return bodyParams;
};
const serializeAws_json1_1SearchContactsRequest = (input, context) => {
    const bodyParams = {};
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1FilterList(input.Filters, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.SortCriteria !== undefined) {
        bodyParams["SortCriteria"] = serializeAws_json1_1SortList(input.SortCriteria, context);
    }
    return bodyParams;
};
const serializeAws_json1_1SearchDevicesRequest = (input, context) => {
    const bodyParams = {};
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1FilterList(input.Filters, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.SortCriteria !== undefined) {
        bodyParams["SortCriteria"] = serializeAws_json1_1SortList(input.SortCriteria, context);
    }
    return bodyParams;
};
const serializeAws_json1_1SearchNetworkProfilesRequest = (input, context) => {
    const bodyParams = {};
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1FilterList(input.Filters, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.SortCriteria !== undefined) {
        bodyParams["SortCriteria"] = serializeAws_json1_1SortList(input.SortCriteria, context);
    }
    return bodyParams;
};
const serializeAws_json1_1SearchProfilesRequest = (input, context) => {
    const bodyParams = {};
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1FilterList(input.Filters, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.SortCriteria !== undefined) {
        bodyParams["SortCriteria"] = serializeAws_json1_1SortList(input.SortCriteria, context);
    }
    return bodyParams;
};
const serializeAws_json1_1SearchRoomsRequest = (input, context) => {
    const bodyParams = {};
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1FilterList(input.Filters, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.SortCriteria !== undefined) {
        bodyParams["SortCriteria"] = serializeAws_json1_1SortList(input.SortCriteria, context);
    }
    return bodyParams;
};
const serializeAws_json1_1SearchSkillGroupsRequest = (input, context) => {
    const bodyParams = {};
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1FilterList(input.Filters, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.SortCriteria !== undefined) {
        bodyParams["SortCriteria"] = serializeAws_json1_1SortList(input.SortCriteria, context);
    }
    return bodyParams;
};
const serializeAws_json1_1SearchUsersRequest = (input, context) => {
    const bodyParams = {};
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1FilterList(input.Filters, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.SortCriteria !== undefined) {
        bodyParams["SortCriteria"] = serializeAws_json1_1SortList(input.SortCriteria, context);
    }
    return bodyParams;
};
const serializeAws_json1_1SendInvitationRequest = (input, context) => {
    const bodyParams = {};
    if (input.UserArn !== undefined) {
        bodyParams["UserArn"] = input.UserArn;
    }
    return bodyParams;
};
const serializeAws_json1_1ShortSkillIdList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1SipAddress = (input, context) => {
    const bodyParams = {};
    if (input.Type !== undefined) {
        bodyParams["Type"] = input.Type;
    }
    if (input.Uri !== undefined) {
        bodyParams["Uri"] = input.Uri;
    }
    return bodyParams;
};
const serializeAws_json1_1SipAddressList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1SipAddress(entry, context));
    }
    return contents;
};
const serializeAws_json1_1Sort = (input, context) => {
    const bodyParams = {};
    if (input.Key !== undefined) {
        bodyParams["Key"] = input.Key;
    }
    if (input.Value !== undefined) {
        bodyParams["Value"] = input.Value;
    }
    return bodyParams;
};
const serializeAws_json1_1SortList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Sort(entry, context));
    }
    return contents;
};
const serializeAws_json1_1StartDeviceSyncRequest = (input, context) => {
    const bodyParams = {};
    if (input.DeviceArn !== undefined) {
        bodyParams["DeviceArn"] = input.DeviceArn;
    }
    if (input.Features !== undefined) {
        bodyParams["Features"] = serializeAws_json1_1Features(input.Features, context);
    }
    if (input.RoomArn !== undefined) {
        bodyParams["RoomArn"] = input.RoomArn;
    }
    return bodyParams;
};
const serializeAws_json1_1StartSmartHomeApplianceDiscoveryRequest = (input, context) => {
    const bodyParams = {};
    if (input.RoomArn !== undefined) {
        bodyParams["RoomArn"] = input.RoomArn;
    }
    return bodyParams;
};
const serializeAws_json1_1Tag = (input, context) => {
    const bodyParams = {};
    if (input.Key !== undefined) {
        bodyParams["Key"] = input.Key;
    }
    if (input.Value !== undefined) {
        bodyParams["Value"] = input.Value;
    }
    return bodyParams;
};
const serializeAws_json1_1TagKeyList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1TagList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Tag(entry, context));
    }
    return contents;
};
const serializeAws_json1_1TagResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.Arn !== undefined) {
        bodyParams["Arn"] = input.Arn;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1TrustAnchorList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1UntagResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.Arn !== undefined) {
        bodyParams["Arn"] = input.Arn;
    }
    if (input.TagKeys !== undefined) {
        bodyParams["TagKeys"] = serializeAws_json1_1TagKeyList(input.TagKeys, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateAddressBookRequest = (input, context) => {
    const bodyParams = {};
    if (input.AddressBookArn !== undefined) {
        bodyParams["AddressBookArn"] = input.AddressBookArn;
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateBusinessReportScheduleRequest = (input, context) => {
    const bodyParams = {};
    if (input.Format !== undefined) {
        bodyParams["Format"] = input.Format;
    }
    if (input.Recurrence !== undefined) {
        bodyParams["Recurrence"] = serializeAws_json1_1BusinessReportRecurrence(input.Recurrence, context);
    }
    if (input.S3BucketName !== undefined) {
        bodyParams["S3BucketName"] = input.S3BucketName;
    }
    if (input.S3KeyPrefix !== undefined) {
        bodyParams["S3KeyPrefix"] = input.S3KeyPrefix;
    }
    if (input.ScheduleArn !== undefined) {
        bodyParams["ScheduleArn"] = input.ScheduleArn;
    }
    if (input.ScheduleName !== undefined) {
        bodyParams["ScheduleName"] = input.ScheduleName;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateConferenceProviderRequest = (input, context) => {
    const bodyParams = {};
    if (input.ConferenceProviderArn !== undefined) {
        bodyParams["ConferenceProviderArn"] = input.ConferenceProviderArn;
    }
    if (input.ConferenceProviderType !== undefined) {
        bodyParams["ConferenceProviderType"] = input.ConferenceProviderType;
    }
    if (input.IPDialIn !== undefined) {
        bodyParams["IPDialIn"] = serializeAws_json1_1IPDialIn(input.IPDialIn, context);
    }
    if (input.MeetingSetting !== undefined) {
        bodyParams["MeetingSetting"] = serializeAws_json1_1MeetingSetting(input.MeetingSetting, context);
    }
    if (input.PSTNDialIn !== undefined) {
        bodyParams["PSTNDialIn"] = serializeAws_json1_1PSTNDialIn(input.PSTNDialIn, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateContactRequest = (input, context) => {
    const bodyParams = {};
    if (input.ContactArn !== undefined) {
        bodyParams["ContactArn"] = input.ContactArn;
    }
    if (input.DisplayName !== undefined) {
        bodyParams["DisplayName"] = input.DisplayName;
    }
    if (input.FirstName !== undefined) {
        bodyParams["FirstName"] = input.FirstName;
    }
    if (input.LastName !== undefined) {
        bodyParams["LastName"] = input.LastName;
    }
    if (input.PhoneNumber !== undefined) {
        bodyParams["PhoneNumber"] = input.PhoneNumber;
    }
    if (input.PhoneNumbers !== undefined) {
        bodyParams["PhoneNumbers"] = serializeAws_json1_1PhoneNumberList(input.PhoneNumbers, context);
    }
    if (input.SipAddresses !== undefined) {
        bodyParams["SipAddresses"] = serializeAws_json1_1SipAddressList(input.SipAddresses, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateDeviceRequest = (input, context) => {
    const bodyParams = {};
    if (input.DeviceArn !== undefined) {
        bodyParams["DeviceArn"] = input.DeviceArn;
    }
    if (input.DeviceName !== undefined) {
        bodyParams["DeviceName"] = input.DeviceName;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateEndOfMeetingReminder = (input, context) => {
    const bodyParams = {};
    if (input.Enabled !== undefined) {
        bodyParams["Enabled"] = input.Enabled;
    }
    if (input.ReminderAtMinutes !== undefined) {
        bodyParams["ReminderAtMinutes"] = serializeAws_json1_1EndOfMeetingReminderMinutesList(input.ReminderAtMinutes, context);
    }
    if (input.ReminderType !== undefined) {
        bodyParams["ReminderType"] = input.ReminderType;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateGatewayGroupRequest = (input, context) => {
    const bodyParams = {};
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.GatewayGroupArn !== undefined) {
        bodyParams["GatewayGroupArn"] = input.GatewayGroupArn;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateGatewayRequest = (input, context) => {
    const bodyParams = {};
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.GatewayArn !== undefined) {
        bodyParams["GatewayArn"] = input.GatewayArn;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.SoftwareVersion !== undefined) {
        bodyParams["SoftwareVersion"] = input.SoftwareVersion;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateInstantBooking = (input, context) => {
    const bodyParams = {};
    if (input.DurationInMinutes !== undefined) {
        bodyParams["DurationInMinutes"] = input.DurationInMinutes;
    }
    if (input.Enabled !== undefined) {
        bodyParams["Enabled"] = input.Enabled;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateMeetingRoomConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.EndOfMeetingReminder !== undefined) {
        bodyParams["EndOfMeetingReminder"] = serializeAws_json1_1UpdateEndOfMeetingReminder(input.EndOfMeetingReminder, context);
    }
    if (input.InstantBooking !== undefined) {
        bodyParams["InstantBooking"] = serializeAws_json1_1UpdateInstantBooking(input.InstantBooking, context);
    }
    if (input.RequireCheckIn !== undefined) {
        bodyParams["RequireCheckIn"] = serializeAws_json1_1UpdateRequireCheckIn(input.RequireCheckIn, context);
    }
    if (input.RoomUtilizationMetricsEnabled !== undefined) {
        bodyParams["RoomUtilizationMetricsEnabled"] =
            input.RoomUtilizationMetricsEnabled;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateNetworkProfileRequest = (input, context) => {
    const bodyParams = {};
    if (input.CertificateAuthorityArn !== undefined) {
        bodyParams["CertificateAuthorityArn"] = input.CertificateAuthorityArn;
    }
    if (input.CurrentPassword !== undefined) {
        bodyParams["CurrentPassword"] = input.CurrentPassword;
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.NetworkProfileArn !== undefined) {
        bodyParams["NetworkProfileArn"] = input.NetworkProfileArn;
    }
    if (input.NetworkProfileName !== undefined) {
        bodyParams["NetworkProfileName"] = input.NetworkProfileName;
    }
    if (input.NextPassword !== undefined) {
        bodyParams["NextPassword"] = input.NextPassword;
    }
    if (input.TrustAnchors !== undefined) {
        bodyParams["TrustAnchors"] = serializeAws_json1_1TrustAnchorList(input.TrustAnchors, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateProfileRequest = (input, context) => {
    const bodyParams = {};
    if (input.Address !== undefined) {
        bodyParams["Address"] = input.Address;
    }
    if (input.DistanceUnit !== undefined) {
        bodyParams["DistanceUnit"] = input.DistanceUnit;
    }
    if (input.IsDefault !== undefined) {
        bodyParams["IsDefault"] = input.IsDefault;
    }
    if (input.Locale !== undefined) {
        bodyParams["Locale"] = input.Locale;
    }
    if (input.MaxVolumeLimit !== undefined) {
        bodyParams["MaxVolumeLimit"] = input.MaxVolumeLimit;
    }
    if (input.MeetingRoomConfiguration !== undefined) {
        bodyParams["MeetingRoomConfiguration"] = serializeAws_json1_1UpdateMeetingRoomConfiguration(input.MeetingRoomConfiguration, context);
    }
    if (input.PSTNEnabled !== undefined) {
        bodyParams["PSTNEnabled"] = input.PSTNEnabled;
    }
    if (input.ProfileArn !== undefined) {
        bodyParams["ProfileArn"] = input.ProfileArn;
    }
    if (input.ProfileName !== undefined) {
        bodyParams["ProfileName"] = input.ProfileName;
    }
    if (input.SetupModeDisabled !== undefined) {
        bodyParams["SetupModeDisabled"] = input.SetupModeDisabled;
    }
    if (input.TemperatureUnit !== undefined) {
        bodyParams["TemperatureUnit"] = input.TemperatureUnit;
    }
    if (input.Timezone !== undefined) {
        bodyParams["Timezone"] = input.Timezone;
    }
    if (input.WakeWord !== undefined) {
        bodyParams["WakeWord"] = input.WakeWord;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateRequireCheckIn = (input, context) => {
    const bodyParams = {};
    if (input.Enabled !== undefined) {
        bodyParams["Enabled"] = input.Enabled;
    }
    if (input.ReleaseAfterMinutes !== undefined) {
        bodyParams["ReleaseAfterMinutes"] = input.ReleaseAfterMinutes;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateRoomRequest = (input, context) => {
    const bodyParams = {};
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.ProfileArn !== undefined) {
        bodyParams["ProfileArn"] = input.ProfileArn;
    }
    if (input.ProviderCalendarId !== undefined) {
        bodyParams["ProviderCalendarId"] = input.ProviderCalendarId;
    }
    if (input.RoomArn !== undefined) {
        bodyParams["RoomArn"] = input.RoomArn;
    }
    if (input.RoomName !== undefined) {
        bodyParams["RoomName"] = input.RoomName;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateSkillGroupRequest = (input, context) => {
    const bodyParams = {};
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.SkillGroupArn !== undefined) {
        bodyParams["SkillGroupArn"] = input.SkillGroupArn;
    }
    if (input.SkillGroupName !== undefined) {
        bodyParams["SkillGroupName"] = input.SkillGroupName;
    }
    return bodyParams;
};
const deserializeAws_json1_1AlreadyExistsException = (output, context) => {
    let contents = {
        __type: "AlreadyExistsException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1ConcurrentModificationException = (output, context) => {
    let contents = {
        __type: "ConcurrentModificationException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1DeviceNotRegisteredException = (output, context) => {
    let contents = {
        __type: "DeviceNotRegisteredException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1LimitExceededException = (output, context) => {
    let contents = {
        __type: "LimitExceededException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1NameInUseException = (output, context) => {
    let contents = {
        __type: "NameInUseException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1NotFoundException = (output, context) => {
    let contents = {
        __type: "NotFoundException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1ResourceInUseException = (output, context) => {
    let contents = {
        __type: "ResourceInUseException",
        ClientRequestToken: undefined,
        Message: undefined
    };
    if (output.ClientRequestToken !== undefined &&
        output.ClientRequestToken !== null) {
        contents.ClientRequestToken = output.ClientRequestToken;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1UnauthorizedException = (output, context) => {
    let contents = {
        __type: "UnauthorizedException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1ConferenceProvider = (output, context) => {
    let contents = {
        __type: "ConferenceProvider",
        Arn: undefined,
        IPDialIn: undefined,
        MeetingSetting: undefined,
        Name: undefined,
        PSTNDialIn: undefined,
        Type: undefined
    };
    if (output.Arn !== undefined && output.Arn !== null) {
        contents.Arn = output.Arn;
    }
    if (output.IPDialIn !== undefined && output.IPDialIn !== null) {
        contents.IPDialIn = deserializeAws_json1_1IPDialIn(output.IPDialIn, context);
    }
    if (output.MeetingSetting !== undefined && output.MeetingSetting !== null) {
        contents.MeetingSetting = deserializeAws_json1_1MeetingSetting(output.MeetingSetting, context);
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.PSTNDialIn !== undefined && output.PSTNDialIn !== null) {
        contents.PSTNDialIn = deserializeAws_json1_1PSTNDialIn(output.PSTNDialIn, context);
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    return contents;
};
const deserializeAws_json1_1ConferenceProvidersList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ConferenceProvider(entry, context));
};
const deserializeAws_json1_1IPDialIn = (output, context) => {
    let contents = {
        __type: "IPDialIn",
        CommsProtocol: undefined,
        Endpoint: undefined
    };
    if (output.CommsProtocol !== undefined && output.CommsProtocol !== null) {
        contents.CommsProtocol = output.CommsProtocol;
    }
    if (output.Endpoint !== undefined && output.Endpoint !== null) {
        contents.Endpoint = output.Endpoint;
    }
    return contents;
};
const deserializeAws_json1_1MeetingSetting = (output, context) => {
    let contents = {
        __type: "MeetingSetting",
        RequirePin: undefined
    };
    if (output.RequirePin !== undefined && output.RequirePin !== null) {
        contents.RequirePin = output.RequirePin;
    }
    return contents;
};
const deserializeAws_json1_1PSTNDialIn = (output, context) => {
    let contents = {
        __type: "PSTNDialIn",
        CountryCode: undefined,
        OneClickIdDelay: undefined,
        OneClickPinDelay: undefined,
        PhoneNumber: undefined
    };
    if (output.CountryCode !== undefined && output.CountryCode !== null) {
        contents.CountryCode = output.CountryCode;
    }
    if (output.OneClickIdDelay !== undefined && output.OneClickIdDelay !== null) {
        contents.OneClickIdDelay = output.OneClickIdDelay;
    }
    if (output.OneClickPinDelay !== undefined &&
        output.OneClickPinDelay !== null) {
        contents.OneClickPinDelay = output.OneClickPinDelay;
    }
    if (output.PhoneNumber !== undefined && output.PhoneNumber !== null) {
        contents.PhoneNumber = output.PhoneNumber;
    }
    return contents;
};
const deserializeAws_json1_1SendAnnouncementResponse = (output, context) => {
    let contents = {
        __type: "SendAnnouncementResponse",
        AnnouncementArn: undefined
    };
    if (output.AnnouncementArn !== undefined && output.AnnouncementArn !== null) {
        contents.AnnouncementArn = output.AnnouncementArn;
    }
    return contents;
};
const deserializeAws_json1_1DeleteDeviceUsageDataResponse = (output, context) => {
    let contents = {
        __type: "DeleteDeviceUsageDataResponse"
    };
    return contents;
};
const deserializeAws_json1_1AddressBook = (output, context) => {
    let contents = {
        __type: "AddressBook",
        AddressBookArn: undefined,
        Description: undefined,
        Name: undefined
    };
    if (output.AddressBookArn !== undefined && output.AddressBookArn !== null) {
        contents.AddressBookArn = output.AddressBookArn;
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    return contents;
};
const deserializeAws_json1_1AddressBookData = (output, context) => {
    let contents = {
        __type: "AddressBookData",
        AddressBookArn: undefined,
        Description: undefined,
        Name: undefined
    };
    if (output.AddressBookArn !== undefined && output.AddressBookArn !== null) {
        contents.AddressBookArn = output.AddressBookArn;
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    return contents;
};
const deserializeAws_json1_1AddressBookDataList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1AddressBookData(entry, context));
};
const deserializeAws_json1_1ApproveSkillResponse = (output, context) => {
    let contents = {
        __type: "ApproveSkillResponse"
    };
    return contents;
};
const deserializeAws_json1_1AssociateContactWithAddressBookResponse = (output, context) => {
    let contents = {
        __type: "AssociateContactWithAddressBookResponse"
    };
    return contents;
};
const deserializeAws_json1_1AssociateDeviceWithNetworkProfileResponse = (output, context) => {
    let contents = {
        __type: "AssociateDeviceWithNetworkProfileResponse"
    };
    return contents;
};
const deserializeAws_json1_1AssociateDeviceWithRoomResponse = (output, context) => {
    let contents = {
        __type: "AssociateDeviceWithRoomResponse"
    };
    return contents;
};
const deserializeAws_json1_1AssociateSkillGroupWithRoomResponse = (output, context) => {
    let contents = {
        __type: "AssociateSkillGroupWithRoomResponse"
    };
    return contents;
};
const deserializeAws_json1_1AssociateSkillWithSkillGroupResponse = (output, context) => {
    let contents = {
        __type: "AssociateSkillWithSkillGroupResponse"
    };
    return contents;
};
const deserializeAws_json1_1AssociateSkillWithUsersResponse = (output, context) => {
    let contents = {
        __type: "AssociateSkillWithUsersResponse"
    };
    return contents;
};
const deserializeAws_json1_1BulletPoints = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1BusinessReport = (output, context) => {
    let contents = {
        __type: "BusinessReport",
        DeliveryTime: undefined,
        DownloadUrl: undefined,
        FailureCode: undefined,
        S3Location: undefined,
        Status: undefined
    };
    if (output.DeliveryTime !== undefined && output.DeliveryTime !== null) {
        contents.DeliveryTime = new Date(Math.round(output.DeliveryTime * 1000));
    }
    if (output.DownloadUrl !== undefined && output.DownloadUrl !== null) {
        contents.DownloadUrl = output.DownloadUrl;
    }
    if (output.FailureCode !== undefined && output.FailureCode !== null) {
        contents.FailureCode = output.FailureCode;
    }
    if (output.S3Location !== undefined && output.S3Location !== null) {
        contents.S3Location = deserializeAws_json1_1BusinessReportS3Location(output.S3Location, context);
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    return contents;
};
const deserializeAws_json1_1BusinessReportContentRange = (output, context) => {
    let contents = {
        __type: "BusinessReportContentRange",
        Interval: undefined
    };
    if (output.Interval !== undefined && output.Interval !== null) {
        contents.Interval = output.Interval;
    }
    return contents;
};
const deserializeAws_json1_1BusinessReportRecurrence = (output, context) => {
    let contents = {
        __type: "BusinessReportRecurrence",
        StartDate: undefined
    };
    if (output.StartDate !== undefined && output.StartDate !== null) {
        contents.StartDate = output.StartDate;
    }
    return contents;
};
const deserializeAws_json1_1BusinessReportS3Location = (output, context) => {
    let contents = {
        __type: "BusinessReportS3Location",
        BucketName: undefined,
        Path: undefined
    };
    if (output.BucketName !== undefined && output.BucketName !== null) {
        contents.BucketName = output.BucketName;
    }
    if (output.Path !== undefined && output.Path !== null) {
        contents.Path = output.Path;
    }
    return contents;
};
const deserializeAws_json1_1BusinessReportSchedule = (output, context) => {
    let contents = {
        __type: "BusinessReportSchedule",
        ContentRange: undefined,
        Format: undefined,
        LastBusinessReport: undefined,
        Recurrence: undefined,
        S3BucketName: undefined,
        S3KeyPrefix: undefined,
        ScheduleArn: undefined,
        ScheduleName: undefined
    };
    if (output.ContentRange !== undefined && output.ContentRange !== null) {
        contents.ContentRange = deserializeAws_json1_1BusinessReportContentRange(output.ContentRange, context);
    }
    if (output.Format !== undefined && output.Format !== null) {
        contents.Format = output.Format;
    }
    if (output.LastBusinessReport !== undefined &&
        output.LastBusinessReport !== null) {
        contents.LastBusinessReport = deserializeAws_json1_1BusinessReport(output.LastBusinessReport, context);
    }
    if (output.Recurrence !== undefined && output.Recurrence !== null) {
        contents.Recurrence = deserializeAws_json1_1BusinessReportRecurrence(output.Recurrence, context);
    }
    if (output.S3BucketName !== undefined && output.S3BucketName !== null) {
        contents.S3BucketName = output.S3BucketName;
    }
    if (output.S3KeyPrefix !== undefined && output.S3KeyPrefix !== null) {
        contents.S3KeyPrefix = output.S3KeyPrefix;
    }
    if (output.ScheduleArn !== undefined && output.ScheduleArn !== null) {
        contents.ScheduleArn = output.ScheduleArn;
    }
    if (output.ScheduleName !== undefined && output.ScheduleName !== null) {
        contents.ScheduleName = output.ScheduleName;
    }
    return contents;
};
const deserializeAws_json1_1BusinessReportScheduleList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1BusinessReportSchedule(entry, context));
};
const deserializeAws_json1_1Category = (output, context) => {
    let contents = {
        __type: "Category",
        CategoryId: undefined,
        CategoryName: undefined
    };
    if (output.CategoryId !== undefined && output.CategoryId !== null) {
        contents.CategoryId = output.CategoryId;
    }
    if (output.CategoryName !== undefined && output.CategoryName !== null) {
        contents.CategoryName = output.CategoryName;
    }
    return contents;
};
const deserializeAws_json1_1CategoryList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Category(entry, context));
};
const deserializeAws_json1_1ConferencePreference = (output, context) => {
    let contents = {
        __type: "ConferencePreference",
        DefaultConferenceProviderArn: undefined
    };
    if (output.DefaultConferenceProviderArn !== undefined &&
        output.DefaultConferenceProviderArn !== null) {
        contents.DefaultConferenceProviderArn = output.DefaultConferenceProviderArn;
    }
    return contents;
};
const deserializeAws_json1_1Contact = (output, context) => {
    let contents = {
        __type: "Contact",
        ContactArn: undefined,
        DisplayName: undefined,
        FirstName: undefined,
        LastName: undefined,
        PhoneNumber: undefined,
        PhoneNumbers: undefined,
        SipAddresses: undefined
    };
    if (output.ContactArn !== undefined && output.ContactArn !== null) {
        contents.ContactArn = output.ContactArn;
    }
    if (output.DisplayName !== undefined && output.DisplayName !== null) {
        contents.DisplayName = output.DisplayName;
    }
    if (output.FirstName !== undefined && output.FirstName !== null) {
        contents.FirstName = output.FirstName;
    }
    if (output.LastName !== undefined && output.LastName !== null) {
        contents.LastName = output.LastName;
    }
    if (output.PhoneNumber !== undefined && output.PhoneNumber !== null) {
        contents.PhoneNumber = output.PhoneNumber;
    }
    if (output.PhoneNumbers !== undefined && output.PhoneNumbers !== null) {
        contents.PhoneNumbers = deserializeAws_json1_1PhoneNumberList(output.PhoneNumbers, context);
    }
    if (output.SipAddresses !== undefined && output.SipAddresses !== null) {
        contents.SipAddresses = deserializeAws_json1_1SipAddressList(output.SipAddresses, context);
    }
    return contents;
};
const deserializeAws_json1_1ContactData = (output, context) => {
    let contents = {
        __type: "ContactData",
        ContactArn: undefined,
        DisplayName: undefined,
        FirstName: undefined,
        LastName: undefined,
        PhoneNumber: undefined,
        PhoneNumbers: undefined,
        SipAddresses: undefined
    };
    if (output.ContactArn !== undefined && output.ContactArn !== null) {
        contents.ContactArn = output.ContactArn;
    }
    if (output.DisplayName !== undefined && output.DisplayName !== null) {
        contents.DisplayName = output.DisplayName;
    }
    if (output.FirstName !== undefined && output.FirstName !== null) {
        contents.FirstName = output.FirstName;
    }
    if (output.LastName !== undefined && output.LastName !== null) {
        contents.LastName = output.LastName;
    }
    if (output.PhoneNumber !== undefined && output.PhoneNumber !== null) {
        contents.PhoneNumber = output.PhoneNumber;
    }
    if (output.PhoneNumbers !== undefined && output.PhoneNumbers !== null) {
        contents.PhoneNumbers = deserializeAws_json1_1PhoneNumberList(output.PhoneNumbers, context);
    }
    if (output.SipAddresses !== undefined && output.SipAddresses !== null) {
        contents.SipAddresses = deserializeAws_json1_1SipAddressList(output.SipAddresses, context);
    }
    return contents;
};
const deserializeAws_json1_1ContactDataList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ContactData(entry, context));
};
const deserializeAws_json1_1CreateAddressBookResponse = (output, context) => {
    let contents = {
        __type: "CreateAddressBookResponse",
        AddressBookArn: undefined
    };
    if (output.AddressBookArn !== undefined && output.AddressBookArn !== null) {
        contents.AddressBookArn = output.AddressBookArn;
    }
    return contents;
};
const deserializeAws_json1_1CreateBusinessReportScheduleResponse = (output, context) => {
    let contents = {
        __type: "CreateBusinessReportScheduleResponse",
        ScheduleArn: undefined
    };
    if (output.ScheduleArn !== undefined && output.ScheduleArn !== null) {
        contents.ScheduleArn = output.ScheduleArn;
    }
    return contents;
};
const deserializeAws_json1_1CreateConferenceProviderResponse = (output, context) => {
    let contents = {
        __type: "CreateConferenceProviderResponse",
        ConferenceProviderArn: undefined
    };
    if (output.ConferenceProviderArn !== undefined &&
        output.ConferenceProviderArn !== null) {
        contents.ConferenceProviderArn = output.ConferenceProviderArn;
    }
    return contents;
};
const deserializeAws_json1_1CreateContactResponse = (output, context) => {
    let contents = {
        __type: "CreateContactResponse",
        ContactArn: undefined
    };
    if (output.ContactArn !== undefined && output.ContactArn !== null) {
        contents.ContactArn = output.ContactArn;
    }
    return contents;
};
const deserializeAws_json1_1CreateGatewayGroupResponse = (output, context) => {
    let contents = {
        __type: "CreateGatewayGroupResponse",
        GatewayGroupArn: undefined
    };
    if (output.GatewayGroupArn !== undefined && output.GatewayGroupArn !== null) {
        contents.GatewayGroupArn = output.GatewayGroupArn;
    }
    return contents;
};
const deserializeAws_json1_1CreateNetworkProfileResponse = (output, context) => {
    let contents = {
        __type: "CreateNetworkProfileResponse",
        NetworkProfileArn: undefined
    };
    if (output.NetworkProfileArn !== undefined &&
        output.NetworkProfileArn !== null) {
        contents.NetworkProfileArn = output.NetworkProfileArn;
    }
    return contents;
};
const deserializeAws_json1_1CreateProfileResponse = (output, context) => {
    let contents = {
        __type: "CreateProfileResponse",
        ProfileArn: undefined
    };
    if (output.ProfileArn !== undefined && output.ProfileArn !== null) {
        contents.ProfileArn = output.ProfileArn;
    }
    return contents;
};
const deserializeAws_json1_1CreateRoomResponse = (output, context) => {
    let contents = {
        __type: "CreateRoomResponse",
        RoomArn: undefined
    };
    if (output.RoomArn !== undefined && output.RoomArn !== null) {
        contents.RoomArn = output.RoomArn;
    }
    return contents;
};
const deserializeAws_json1_1CreateSkillGroupResponse = (output, context) => {
    let contents = {
        __type: "CreateSkillGroupResponse",
        SkillGroupArn: undefined
    };
    if (output.SkillGroupArn !== undefined && output.SkillGroupArn !== null) {
        contents.SkillGroupArn = output.SkillGroupArn;
    }
    return contents;
};
const deserializeAws_json1_1CreateUserResponse = (output, context) => {
    let contents = {
        __type: "CreateUserResponse",
        UserArn: undefined
    };
    if (output.UserArn !== undefined && output.UserArn !== null) {
        contents.UserArn = output.UserArn;
    }
    return contents;
};
const deserializeAws_json1_1DeleteAddressBookResponse = (output, context) => {
    let contents = {
        __type: "DeleteAddressBookResponse"
    };
    return contents;
};
const deserializeAws_json1_1DeleteBusinessReportScheduleResponse = (output, context) => {
    let contents = {
        __type: "DeleteBusinessReportScheduleResponse"
    };
    return contents;
};
const deserializeAws_json1_1DeleteConferenceProviderResponse = (output, context) => {
    let contents = {
        __type: "DeleteConferenceProviderResponse"
    };
    return contents;
};
const deserializeAws_json1_1DeleteContactResponse = (output, context) => {
    let contents = {
        __type: "DeleteContactResponse"
    };
    return contents;
};
const deserializeAws_json1_1DeleteDeviceResponse = (output, context) => {
    let contents = {
        __type: "DeleteDeviceResponse"
    };
    return contents;
};
const deserializeAws_json1_1DeleteGatewayGroupResponse = (output, context) => {
    let contents = {
        __type: "DeleteGatewayGroupResponse"
    };
    return contents;
};
const deserializeAws_json1_1DeleteNetworkProfileResponse = (output, context) => {
    let contents = {
        __type: "DeleteNetworkProfileResponse"
    };
    return contents;
};
const deserializeAws_json1_1DeleteProfileResponse = (output, context) => {
    let contents = {
        __type: "DeleteProfileResponse"
    };
    return contents;
};
const deserializeAws_json1_1DeleteRoomResponse = (output, context) => {
    let contents = {
        __type: "DeleteRoomResponse"
    };
    return contents;
};
const deserializeAws_json1_1DeleteRoomSkillParameterResponse = (output, context) => {
    let contents = {
        __type: "DeleteRoomSkillParameterResponse"
    };
    return contents;
};
const deserializeAws_json1_1DeleteSkillAuthorizationResponse = (output, context) => {
    let contents = {
        __type: "DeleteSkillAuthorizationResponse"
    };
    return contents;
};
const deserializeAws_json1_1DeleteSkillGroupResponse = (output, context) => {
    let contents = {
        __type: "DeleteSkillGroupResponse"
    };
    return contents;
};
const deserializeAws_json1_1DeleteUserResponse = (output, context) => {
    let contents = {
        __type: "DeleteUserResponse"
    };
    return contents;
};
const deserializeAws_json1_1DeveloperInfo = (output, context) => {
    let contents = {
        __type: "DeveloperInfo",
        DeveloperName: undefined,
        Email: undefined,
        PrivacyPolicy: undefined,
        Url: undefined
    };
    if (output.DeveloperName !== undefined && output.DeveloperName !== null) {
        contents.DeveloperName = output.DeveloperName;
    }
    if (output.Email !== undefined && output.Email !== null) {
        contents.Email = output.Email;
    }
    if (output.PrivacyPolicy !== undefined && output.PrivacyPolicy !== null) {
        contents.PrivacyPolicy = output.PrivacyPolicy;
    }
    if (output.Url !== undefined && output.Url !== null) {
        contents.Url = output.Url;
    }
    return contents;
};
const deserializeAws_json1_1Device = (output, context) => {
    let contents = {
        __type: "Device",
        DeviceArn: undefined,
        DeviceName: undefined,
        DeviceSerialNumber: undefined,
        DeviceStatus: undefined,
        DeviceStatusInfo: undefined,
        DeviceType: undefined,
        MacAddress: undefined,
        NetworkProfileInfo: undefined,
        RoomArn: undefined,
        SoftwareVersion: undefined
    };
    if (output.DeviceArn !== undefined && output.DeviceArn !== null) {
        contents.DeviceArn = output.DeviceArn;
    }
    if (output.DeviceName !== undefined && output.DeviceName !== null) {
        contents.DeviceName = output.DeviceName;
    }
    if (output.DeviceSerialNumber !== undefined &&
        output.DeviceSerialNumber !== null) {
        contents.DeviceSerialNumber = output.DeviceSerialNumber;
    }
    if (output.DeviceStatus !== undefined && output.DeviceStatus !== null) {
        contents.DeviceStatus = output.DeviceStatus;
    }
    if (output.DeviceStatusInfo !== undefined &&
        output.DeviceStatusInfo !== null) {
        contents.DeviceStatusInfo = deserializeAws_json1_1DeviceStatusInfo(output.DeviceStatusInfo, context);
    }
    if (output.DeviceType !== undefined && output.DeviceType !== null) {
        contents.DeviceType = output.DeviceType;
    }
    if (output.MacAddress !== undefined && output.MacAddress !== null) {
        contents.MacAddress = output.MacAddress;
    }
    if (output.NetworkProfileInfo !== undefined &&
        output.NetworkProfileInfo !== null) {
        contents.NetworkProfileInfo = deserializeAws_json1_1DeviceNetworkProfileInfo(output.NetworkProfileInfo, context);
    }
    if (output.RoomArn !== undefined && output.RoomArn !== null) {
        contents.RoomArn = output.RoomArn;
    }
    if (output.SoftwareVersion !== undefined && output.SoftwareVersion !== null) {
        contents.SoftwareVersion = output.SoftwareVersion;
    }
    return contents;
};
const deserializeAws_json1_1DeviceData = (output, context) => {
    let contents = {
        __type: "DeviceData",
        CreatedTime: undefined,
        DeviceArn: undefined,
        DeviceName: undefined,
        DeviceSerialNumber: undefined,
        DeviceStatus: undefined,
        DeviceStatusInfo: undefined,
        DeviceType: undefined,
        MacAddress: undefined,
        NetworkProfileArn: undefined,
        NetworkProfileName: undefined,
        RoomArn: undefined,
        RoomName: undefined,
        SoftwareVersion: undefined
    };
    if (output.CreatedTime !== undefined && output.CreatedTime !== null) {
        contents.CreatedTime = new Date(Math.round(output.CreatedTime * 1000));
    }
    if (output.DeviceArn !== undefined && output.DeviceArn !== null) {
        contents.DeviceArn = output.DeviceArn;
    }
    if (output.DeviceName !== undefined && output.DeviceName !== null) {
        contents.DeviceName = output.DeviceName;
    }
    if (output.DeviceSerialNumber !== undefined &&
        output.DeviceSerialNumber !== null) {
        contents.DeviceSerialNumber = output.DeviceSerialNumber;
    }
    if (output.DeviceStatus !== undefined && output.DeviceStatus !== null) {
        contents.DeviceStatus = output.DeviceStatus;
    }
    if (output.DeviceStatusInfo !== undefined &&
        output.DeviceStatusInfo !== null) {
        contents.DeviceStatusInfo = deserializeAws_json1_1DeviceStatusInfo(output.DeviceStatusInfo, context);
    }
    if (output.DeviceType !== undefined && output.DeviceType !== null) {
        contents.DeviceType = output.DeviceType;
    }
    if (output.MacAddress !== undefined && output.MacAddress !== null) {
        contents.MacAddress = output.MacAddress;
    }
    if (output.NetworkProfileArn !== undefined &&
        output.NetworkProfileArn !== null) {
        contents.NetworkProfileArn = output.NetworkProfileArn;
    }
    if (output.NetworkProfileName !== undefined &&
        output.NetworkProfileName !== null) {
        contents.NetworkProfileName = output.NetworkProfileName;
    }
    if (output.RoomArn !== undefined && output.RoomArn !== null) {
        contents.RoomArn = output.RoomArn;
    }
    if (output.RoomName !== undefined && output.RoomName !== null) {
        contents.RoomName = output.RoomName;
    }
    if (output.SoftwareVersion !== undefined && output.SoftwareVersion !== null) {
        contents.SoftwareVersion = output.SoftwareVersion;
    }
    return contents;
};
const deserializeAws_json1_1DeviceDataList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1DeviceData(entry, context));
};
const deserializeAws_json1_1DeviceEvent = (output, context) => {
    let contents = {
        __type: "DeviceEvent",
        Timestamp: undefined,
        Type: undefined,
        Value: undefined
    };
    if (output.Timestamp !== undefined && output.Timestamp !== null) {
        contents.Timestamp = new Date(Math.round(output.Timestamp * 1000));
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    if (output.Value !== undefined && output.Value !== null) {
        contents.Value = output.Value;
    }
    return contents;
};
const deserializeAws_json1_1DeviceEventList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1DeviceEvent(entry, context));
};
const deserializeAws_json1_1DeviceNetworkProfileInfo = (output, context) => {
    let contents = {
        __type: "DeviceNetworkProfileInfo",
        CertificateArn: undefined,
        CertificateExpirationTime: undefined,
        NetworkProfileArn: undefined
    };
    if (output.CertificateArn !== undefined && output.CertificateArn !== null) {
        contents.CertificateArn = output.CertificateArn;
    }
    if (output.CertificateExpirationTime !== undefined &&
        output.CertificateExpirationTime !== null) {
        contents.CertificateExpirationTime = new Date(Math.round(output.CertificateExpirationTime * 1000));
    }
    if (output.NetworkProfileArn !== undefined &&
        output.NetworkProfileArn !== null) {
        contents.NetworkProfileArn = output.NetworkProfileArn;
    }
    return contents;
};
const deserializeAws_json1_1DeviceStatusDetail = (output, context) => {
    let contents = {
        __type: "DeviceStatusDetail",
        Code: undefined,
        Feature: undefined
    };
    if (output.Code !== undefined && output.Code !== null) {
        contents.Code = output.Code;
    }
    if (output.Feature !== undefined && output.Feature !== null) {
        contents.Feature = output.Feature;
    }
    return contents;
};
const deserializeAws_json1_1DeviceStatusDetails = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1DeviceStatusDetail(entry, context));
};
const deserializeAws_json1_1DeviceStatusInfo = (output, context) => {
    let contents = {
        __type: "DeviceStatusInfo",
        ConnectionStatus: undefined,
        ConnectionStatusUpdatedTime: undefined,
        DeviceStatusDetails: undefined
    };
    if (output.ConnectionStatus !== undefined &&
        output.ConnectionStatus !== null) {
        contents.ConnectionStatus = output.ConnectionStatus;
    }
    if (output.ConnectionStatusUpdatedTime !== undefined &&
        output.ConnectionStatusUpdatedTime !== null) {
        contents.ConnectionStatusUpdatedTime = new Date(Math.round(output.ConnectionStatusUpdatedTime * 1000));
    }
    if (output.DeviceStatusDetails !== undefined &&
        output.DeviceStatusDetails !== null) {
        contents.DeviceStatusDetails = deserializeAws_json1_1DeviceStatusDetails(output.DeviceStatusDetails, context);
    }
    return contents;
};
const deserializeAws_json1_1DisassociateContactFromAddressBookResponse = (output, context) => {
    let contents = {
        __type: "DisassociateContactFromAddressBookResponse"
    };
    return contents;
};
const deserializeAws_json1_1DisassociateDeviceFromRoomResponse = (output, context) => {
    let contents = {
        __type: "DisassociateDeviceFromRoomResponse"
    };
    return contents;
};
const deserializeAws_json1_1DisassociateSkillFromSkillGroupResponse = (output, context) => {
    let contents = {
        __type: "DisassociateSkillFromSkillGroupResponse"
    };
    return contents;
};
const deserializeAws_json1_1DisassociateSkillFromUsersResponse = (output, context) => {
    let contents = {
        __type: "DisassociateSkillFromUsersResponse"
    };
    return contents;
};
const deserializeAws_json1_1DisassociateSkillGroupFromRoomResponse = (output, context) => {
    let contents = {
        __type: "DisassociateSkillGroupFromRoomResponse"
    };
    return contents;
};
const deserializeAws_json1_1EndOfMeetingReminder = (output, context) => {
    let contents = {
        __type: "EndOfMeetingReminder",
        Enabled: undefined,
        ReminderAtMinutes: undefined,
        ReminderType: undefined
    };
    if (output.Enabled !== undefined && output.Enabled !== null) {
        contents.Enabled = output.Enabled;
    }
    if (output.ReminderAtMinutes !== undefined &&
        output.ReminderAtMinutes !== null) {
        contents.ReminderAtMinutes = deserializeAws_json1_1EndOfMeetingReminderMinutesList(output.ReminderAtMinutes, context);
    }
    if (output.ReminderType !== undefined && output.ReminderType !== null) {
        contents.ReminderType = output.ReminderType;
    }
    return contents;
};
const deserializeAws_json1_1EndOfMeetingReminderMinutesList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1ForgetSmartHomeAppliancesResponse = (output, context) => {
    let contents = {
        __type: "ForgetSmartHomeAppliancesResponse"
    };
    return contents;
};
const deserializeAws_json1_1Gateway = (output, context) => {
    let contents = {
        __type: "Gateway",
        Arn: undefined,
        Description: undefined,
        GatewayGroupArn: undefined,
        Name: undefined,
        SoftwareVersion: undefined
    };
    if (output.Arn !== undefined && output.Arn !== null) {
        contents.Arn = output.Arn;
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.GatewayGroupArn !== undefined && output.GatewayGroupArn !== null) {
        contents.GatewayGroupArn = output.GatewayGroupArn;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.SoftwareVersion !== undefined && output.SoftwareVersion !== null) {
        contents.SoftwareVersion = output.SoftwareVersion;
    }
    return contents;
};
const deserializeAws_json1_1GatewayGroup = (output, context) => {
    let contents = {
        __type: "GatewayGroup",
        Arn: undefined,
        Description: undefined,
        Name: undefined
    };
    if (output.Arn !== undefined && output.Arn !== null) {
        contents.Arn = output.Arn;
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    return contents;
};
const deserializeAws_json1_1GatewayGroupSummaries = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1GatewayGroupSummary(entry, context));
};
const deserializeAws_json1_1GatewayGroupSummary = (output, context) => {
    let contents = {
        __type: "GatewayGroupSummary",
        Arn: undefined,
        Description: undefined,
        Name: undefined
    };
    if (output.Arn !== undefined && output.Arn !== null) {
        contents.Arn = output.Arn;
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    return contents;
};
const deserializeAws_json1_1GatewaySummaries = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1GatewaySummary(entry, context));
};
const deserializeAws_json1_1GatewaySummary = (output, context) => {
    let contents = {
        __type: "GatewaySummary",
        Arn: undefined,
        Description: undefined,
        GatewayGroupArn: undefined,
        Name: undefined,
        SoftwareVersion: undefined
    };
    if (output.Arn !== undefined && output.Arn !== null) {
        contents.Arn = output.Arn;
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.GatewayGroupArn !== undefined && output.GatewayGroupArn !== null) {
        contents.GatewayGroupArn = output.GatewayGroupArn;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.SoftwareVersion !== undefined && output.SoftwareVersion !== null) {
        contents.SoftwareVersion = output.SoftwareVersion;
    }
    return contents;
};
const deserializeAws_json1_1GenericKeywords = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1GetAddressBookResponse = (output, context) => {
    let contents = {
        __type: "GetAddressBookResponse",
        AddressBook: undefined
    };
    if (output.AddressBook !== undefined && output.AddressBook !== null) {
        contents.AddressBook = deserializeAws_json1_1AddressBook(output.AddressBook, context);
    }
    return contents;
};
const deserializeAws_json1_1GetConferencePreferenceResponse = (output, context) => {
    let contents = {
        __type: "GetConferencePreferenceResponse",
        Preference: undefined
    };
    if (output.Preference !== undefined && output.Preference !== null) {
        contents.Preference = deserializeAws_json1_1ConferencePreference(output.Preference, context);
    }
    return contents;
};
const deserializeAws_json1_1GetConferenceProviderResponse = (output, context) => {
    let contents = {
        __type: "GetConferenceProviderResponse",
        ConferenceProvider: undefined
    };
    if (output.ConferenceProvider !== undefined &&
        output.ConferenceProvider !== null) {
        contents.ConferenceProvider = deserializeAws_json1_1ConferenceProvider(output.ConferenceProvider, context);
    }
    return contents;
};
const deserializeAws_json1_1GetContactResponse = (output, context) => {
    let contents = {
        __type: "GetContactResponse",
        Contact: undefined
    };
    if (output.Contact !== undefined && output.Contact !== null) {
        contents.Contact = deserializeAws_json1_1Contact(output.Contact, context);
    }
    return contents;
};
const deserializeAws_json1_1GetDeviceResponse = (output, context) => {
    let contents = {
        __type: "GetDeviceResponse",
        Device: undefined
    };
    if (output.Device !== undefined && output.Device !== null) {
        contents.Device = deserializeAws_json1_1Device(output.Device, context);
    }
    return contents;
};
const deserializeAws_json1_1GetGatewayGroupResponse = (output, context) => {
    let contents = {
        __type: "GetGatewayGroupResponse",
        GatewayGroup: undefined
    };
    if (output.GatewayGroup !== undefined && output.GatewayGroup !== null) {
        contents.GatewayGroup = deserializeAws_json1_1GatewayGroup(output.GatewayGroup, context);
    }
    return contents;
};
const deserializeAws_json1_1GetGatewayResponse = (output, context) => {
    let contents = {
        __type: "GetGatewayResponse",
        Gateway: undefined
    };
    if (output.Gateway !== undefined && output.Gateway !== null) {
        contents.Gateway = deserializeAws_json1_1Gateway(output.Gateway, context);
    }
    return contents;
};
const deserializeAws_json1_1GetInvitationConfigurationResponse = (output, context) => {
    let contents = {
        __type: "GetInvitationConfigurationResponse",
        ContactEmail: undefined,
        OrganizationName: undefined,
        PrivateSkillIds: undefined
    };
    if (output.ContactEmail !== undefined && output.ContactEmail !== null) {
        contents.ContactEmail = output.ContactEmail;
    }
    if (output.OrganizationName !== undefined &&
        output.OrganizationName !== null) {
        contents.OrganizationName = output.OrganizationName;
    }
    if (output.PrivateSkillIds !== undefined && output.PrivateSkillIds !== null) {
        contents.PrivateSkillIds = deserializeAws_json1_1ShortSkillIdList(output.PrivateSkillIds, context);
    }
    return contents;
};
const deserializeAws_json1_1GetNetworkProfileResponse = (output, context) => {
    let contents = {
        __type: "GetNetworkProfileResponse",
        NetworkProfile: undefined
    };
    if (output.NetworkProfile !== undefined && output.NetworkProfile !== null) {
        contents.NetworkProfile = deserializeAws_json1_1NetworkProfile(output.NetworkProfile, context);
    }
    return contents;
};
const deserializeAws_json1_1GetProfileResponse = (output, context) => {
    let contents = {
        __type: "GetProfileResponse",
        Profile: undefined
    };
    if (output.Profile !== undefined && output.Profile !== null) {
        contents.Profile = deserializeAws_json1_1Profile(output.Profile, context);
    }
    return contents;
};
const deserializeAws_json1_1GetRoomResponse = (output, context) => {
    let contents = {
        __type: "GetRoomResponse",
        Room: undefined
    };
    if (output.Room !== undefined && output.Room !== null) {
        contents.Room = deserializeAws_json1_1Room(output.Room, context);
    }
    return contents;
};
const deserializeAws_json1_1GetRoomSkillParameterResponse = (output, context) => {
    let contents = {
        __type: "GetRoomSkillParameterResponse",
        RoomSkillParameter: undefined
    };
    if (output.RoomSkillParameter !== undefined &&
        output.RoomSkillParameter !== null) {
        contents.RoomSkillParameter = deserializeAws_json1_1RoomSkillParameter(output.RoomSkillParameter, context);
    }
    return contents;
};
const deserializeAws_json1_1GetSkillGroupResponse = (output, context) => {
    let contents = {
        __type: "GetSkillGroupResponse",
        SkillGroup: undefined
    };
    if (output.SkillGroup !== undefined && output.SkillGroup !== null) {
        contents.SkillGroup = deserializeAws_json1_1SkillGroup(output.SkillGroup, context);
    }
    return contents;
};
const deserializeAws_json1_1InstantBooking = (output, context) => {
    let contents = {
        __type: "InstantBooking",
        DurationInMinutes: undefined,
        Enabled: undefined
    };
    if (output.DurationInMinutes !== undefined &&
        output.DurationInMinutes !== null) {
        contents.DurationInMinutes = output.DurationInMinutes;
    }
    if (output.Enabled !== undefined && output.Enabled !== null) {
        contents.Enabled = output.Enabled;
    }
    return contents;
};
const deserializeAws_json1_1InvalidCertificateAuthorityException = (output, context) => {
    let contents = {
        __type: "InvalidCertificateAuthorityException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidDeviceException = (output, context) => {
    let contents = {
        __type: "InvalidDeviceException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidSecretsManagerResourceException = (output, context) => {
    let contents = {
        __type: "InvalidSecretsManagerResourceException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidServiceLinkedRoleStateException = (output, context) => {
    let contents = {
        __type: "InvalidServiceLinkedRoleStateException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidUserStatusException = (output, context) => {
    let contents = {
        __type: "InvalidUserStatusException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1ListBusinessReportSchedulesResponse = (output, context) => {
    let contents = {
        __type: "ListBusinessReportSchedulesResponse",
        BusinessReportSchedules: undefined,
        NextToken: undefined
    };
    if (output.BusinessReportSchedules !== undefined &&
        output.BusinessReportSchedules !== null) {
        contents.BusinessReportSchedules = deserializeAws_json1_1BusinessReportScheduleList(output.BusinessReportSchedules, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListConferenceProvidersResponse = (output, context) => {
    let contents = {
        __type: "ListConferenceProvidersResponse",
        ConferenceProviders: undefined,
        NextToken: undefined
    };
    if (output.ConferenceProviders !== undefined &&
        output.ConferenceProviders !== null) {
        contents.ConferenceProviders = deserializeAws_json1_1ConferenceProvidersList(output.ConferenceProviders, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListDeviceEventsResponse = (output, context) => {
    let contents = {
        __type: "ListDeviceEventsResponse",
        DeviceEvents: undefined,
        NextToken: undefined
    };
    if (output.DeviceEvents !== undefined && output.DeviceEvents !== null) {
        contents.DeviceEvents = deserializeAws_json1_1DeviceEventList(output.DeviceEvents, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListGatewayGroupsResponse = (output, context) => {
    let contents = {
        __type: "ListGatewayGroupsResponse",
        GatewayGroups: undefined,
        NextToken: undefined
    };
    if (output.GatewayGroups !== undefined && output.GatewayGroups !== null) {
        contents.GatewayGroups = deserializeAws_json1_1GatewayGroupSummaries(output.GatewayGroups, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListGatewaysResponse = (output, context) => {
    let contents = {
        __type: "ListGatewaysResponse",
        Gateways: undefined,
        NextToken: undefined
    };
    if (output.Gateways !== undefined && output.Gateways !== null) {
        contents.Gateways = deserializeAws_json1_1GatewaySummaries(output.Gateways, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListSkillsResponse = (output, context) => {
    let contents = {
        __type: "ListSkillsResponse",
        NextToken: undefined,
        SkillSummaries: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.SkillSummaries !== undefined && output.SkillSummaries !== null) {
        contents.SkillSummaries = deserializeAws_json1_1SkillSummaryList(output.SkillSummaries, context);
    }
    return contents;
};
const deserializeAws_json1_1ListSkillsStoreCategoriesResponse = (output, context) => {
    let contents = {
        __type: "ListSkillsStoreCategoriesResponse",
        CategoryList: undefined,
        NextToken: undefined
    };
    if (output.CategoryList !== undefined && output.CategoryList !== null) {
        contents.CategoryList = deserializeAws_json1_1CategoryList(output.CategoryList, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListSkillsStoreSkillsByCategoryResponse = (output, context) => {
    let contents = {
        __type: "ListSkillsStoreSkillsByCategoryResponse",
        NextToken: undefined,
        SkillsStoreSkills: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.SkillsStoreSkills !== undefined &&
        output.SkillsStoreSkills !== null) {
        contents.SkillsStoreSkills = deserializeAws_json1_1SkillsStoreSkillList(output.SkillsStoreSkills, context);
    }
    return contents;
};
const deserializeAws_json1_1ListSmartHomeAppliancesResponse = (output, context) => {
    let contents = {
        __type: "ListSmartHomeAppliancesResponse",
        NextToken: undefined,
        SmartHomeAppliances: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.SmartHomeAppliances !== undefined &&
        output.SmartHomeAppliances !== null) {
        contents.SmartHomeAppliances = deserializeAws_json1_1SmartHomeApplianceList(output.SmartHomeAppliances, context);
    }
    return contents;
};
const deserializeAws_json1_1ListTagsResponse = (output, context) => {
    let contents = {
        __type: "ListTagsResponse",
        NextToken: undefined,
        Tags: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.Tags !== undefined && output.Tags !== null) {
        contents.Tags = deserializeAws_json1_1TagList(output.Tags, context);
    }
    return contents;
};
const deserializeAws_json1_1MeetingRoomConfiguration = (output, context) => {
    let contents = {
        __type: "MeetingRoomConfiguration",
        EndOfMeetingReminder: undefined,
        InstantBooking: undefined,
        RequireCheckIn: undefined,
        RoomUtilizationMetricsEnabled: undefined
    };
    if (output.EndOfMeetingReminder !== undefined &&
        output.EndOfMeetingReminder !== null) {
        contents.EndOfMeetingReminder = deserializeAws_json1_1EndOfMeetingReminder(output.EndOfMeetingReminder, context);
    }
    if (output.InstantBooking !== undefined && output.InstantBooking !== null) {
        contents.InstantBooking = deserializeAws_json1_1InstantBooking(output.InstantBooking, context);
    }
    if (output.RequireCheckIn !== undefined && output.RequireCheckIn !== null) {
        contents.RequireCheckIn = deserializeAws_json1_1RequireCheckIn(output.RequireCheckIn, context);
    }
    if (output.RoomUtilizationMetricsEnabled !== undefined &&
        output.RoomUtilizationMetricsEnabled !== null) {
        contents.RoomUtilizationMetricsEnabled =
            output.RoomUtilizationMetricsEnabled;
    }
    return contents;
};
const deserializeAws_json1_1NetworkProfile = (output, context) => {
    let contents = {
        __type: "NetworkProfile",
        CertificateAuthorityArn: undefined,
        CurrentPassword: undefined,
        Description: undefined,
        EapMethod: undefined,
        NetworkProfileArn: undefined,
        NetworkProfileName: undefined,
        NextPassword: undefined,
        SecurityType: undefined,
        Ssid: undefined,
        TrustAnchors: undefined
    };
    if (output.CertificateAuthorityArn !== undefined &&
        output.CertificateAuthorityArn !== null) {
        contents.CertificateAuthorityArn = output.CertificateAuthorityArn;
    }
    if (output.CurrentPassword !== undefined && output.CurrentPassword !== null) {
        contents.CurrentPassword = output.CurrentPassword;
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.EapMethod !== undefined && output.EapMethod !== null) {
        contents.EapMethod = output.EapMethod;
    }
    if (output.NetworkProfileArn !== undefined &&
        output.NetworkProfileArn !== null) {
        contents.NetworkProfileArn = output.NetworkProfileArn;
    }
    if (output.NetworkProfileName !== undefined &&
        output.NetworkProfileName !== null) {
        contents.NetworkProfileName = output.NetworkProfileName;
    }
    if (output.NextPassword !== undefined && output.NextPassword !== null) {
        contents.NextPassword = output.NextPassword;
    }
    if (output.SecurityType !== undefined && output.SecurityType !== null) {
        contents.SecurityType = output.SecurityType;
    }
    if (output.Ssid !== undefined && output.Ssid !== null) {
        contents.Ssid = output.Ssid;
    }
    if (output.TrustAnchors !== undefined && output.TrustAnchors !== null) {
        contents.TrustAnchors = deserializeAws_json1_1TrustAnchorList(output.TrustAnchors, context);
    }
    return contents;
};
const deserializeAws_json1_1NetworkProfileData = (output, context) => {
    let contents = {
        __type: "NetworkProfileData",
        CertificateAuthorityArn: undefined,
        Description: undefined,
        EapMethod: undefined,
        NetworkProfileArn: undefined,
        NetworkProfileName: undefined,
        SecurityType: undefined,
        Ssid: undefined
    };
    if (output.CertificateAuthorityArn !== undefined &&
        output.CertificateAuthorityArn !== null) {
        contents.CertificateAuthorityArn = output.CertificateAuthorityArn;
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.EapMethod !== undefined && output.EapMethod !== null) {
        contents.EapMethod = output.EapMethod;
    }
    if (output.NetworkProfileArn !== undefined &&
        output.NetworkProfileArn !== null) {
        contents.NetworkProfileArn = output.NetworkProfileArn;
    }
    if (output.NetworkProfileName !== undefined &&
        output.NetworkProfileName !== null) {
        contents.NetworkProfileName = output.NetworkProfileName;
    }
    if (output.SecurityType !== undefined && output.SecurityType !== null) {
        contents.SecurityType = output.SecurityType;
    }
    if (output.Ssid !== undefined && output.Ssid !== null) {
        contents.Ssid = output.Ssid;
    }
    return contents;
};
const deserializeAws_json1_1NetworkProfileDataList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1NetworkProfileData(entry, context));
};
const deserializeAws_json1_1NewInThisVersionBulletPoints = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1PhoneNumber = (output, context) => {
    let contents = {
        __type: "PhoneNumber",
        Number: undefined,
        Type: undefined
    };
    if (output.Number !== undefined && output.Number !== null) {
        contents.Number = output.Number;
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    return contents;
};
const deserializeAws_json1_1PhoneNumberList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1PhoneNumber(entry, context));
};
const deserializeAws_json1_1Profile = (output, context) => {
    let contents = {
        __type: "Profile",
        Address: undefined,
        AddressBookArn: undefined,
        DistanceUnit: undefined,
        IsDefault: undefined,
        Locale: undefined,
        MaxVolumeLimit: undefined,
        MeetingRoomConfiguration: undefined,
        PSTNEnabled: undefined,
        ProfileArn: undefined,
        ProfileName: undefined,
        SetupModeDisabled: undefined,
        TemperatureUnit: undefined,
        Timezone: undefined,
        WakeWord: undefined
    };
    if (output.Address !== undefined && output.Address !== null) {
        contents.Address = output.Address;
    }
    if (output.AddressBookArn !== undefined && output.AddressBookArn !== null) {
        contents.AddressBookArn = output.AddressBookArn;
    }
    if (output.DistanceUnit !== undefined && output.DistanceUnit !== null) {
        contents.DistanceUnit = output.DistanceUnit;
    }
    if (output.IsDefault !== undefined && output.IsDefault !== null) {
        contents.IsDefault = output.IsDefault;
    }
    if (output.Locale !== undefined && output.Locale !== null) {
        contents.Locale = output.Locale;
    }
    if (output.MaxVolumeLimit !== undefined && output.MaxVolumeLimit !== null) {
        contents.MaxVolumeLimit = output.MaxVolumeLimit;
    }
    if (output.MeetingRoomConfiguration !== undefined &&
        output.MeetingRoomConfiguration !== null) {
        contents.MeetingRoomConfiguration = deserializeAws_json1_1MeetingRoomConfiguration(output.MeetingRoomConfiguration, context);
    }
    if (output.PSTNEnabled !== undefined && output.PSTNEnabled !== null) {
        contents.PSTNEnabled = output.PSTNEnabled;
    }
    if (output.ProfileArn !== undefined && output.ProfileArn !== null) {
        contents.ProfileArn = output.ProfileArn;
    }
    if (output.ProfileName !== undefined && output.ProfileName !== null) {
        contents.ProfileName = output.ProfileName;
    }
    if (output.SetupModeDisabled !== undefined &&
        output.SetupModeDisabled !== null) {
        contents.SetupModeDisabled = output.SetupModeDisabled;
    }
    if (output.TemperatureUnit !== undefined && output.TemperatureUnit !== null) {
        contents.TemperatureUnit = output.TemperatureUnit;
    }
    if (output.Timezone !== undefined && output.Timezone !== null) {
        contents.Timezone = output.Timezone;
    }
    if (output.WakeWord !== undefined && output.WakeWord !== null) {
        contents.WakeWord = output.WakeWord;
    }
    return contents;
};
const deserializeAws_json1_1ProfileData = (output, context) => {
    let contents = {
        __type: "ProfileData",
        Address: undefined,
        DistanceUnit: undefined,
        IsDefault: undefined,
        Locale: undefined,
        ProfileArn: undefined,
        ProfileName: undefined,
        TemperatureUnit: undefined,
        Timezone: undefined,
        WakeWord: undefined
    };
    if (output.Address !== undefined && output.Address !== null) {
        contents.Address = output.Address;
    }
    if (output.DistanceUnit !== undefined && output.DistanceUnit !== null) {
        contents.DistanceUnit = output.DistanceUnit;
    }
    if (output.IsDefault !== undefined && output.IsDefault !== null) {
        contents.IsDefault = output.IsDefault;
    }
    if (output.Locale !== undefined && output.Locale !== null) {
        contents.Locale = output.Locale;
    }
    if (output.ProfileArn !== undefined && output.ProfileArn !== null) {
        contents.ProfileArn = output.ProfileArn;
    }
    if (output.ProfileName !== undefined && output.ProfileName !== null) {
        contents.ProfileName = output.ProfileName;
    }
    if (output.TemperatureUnit !== undefined && output.TemperatureUnit !== null) {
        contents.TemperatureUnit = output.TemperatureUnit;
    }
    if (output.Timezone !== undefined && output.Timezone !== null) {
        contents.Timezone = output.Timezone;
    }
    if (output.WakeWord !== undefined && output.WakeWord !== null) {
        contents.WakeWord = output.WakeWord;
    }
    return contents;
};
const deserializeAws_json1_1ProfileDataList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ProfileData(entry, context));
};
const deserializeAws_json1_1PutConferencePreferenceResponse = (output, context) => {
    let contents = {
        __type: "PutConferencePreferenceResponse"
    };
    return contents;
};
const deserializeAws_json1_1PutInvitationConfigurationResponse = (output, context) => {
    let contents = {
        __type: "PutInvitationConfigurationResponse"
    };
    return contents;
};
const deserializeAws_json1_1PutRoomSkillParameterResponse = (output, context) => {
    let contents = {
        __type: "PutRoomSkillParameterResponse"
    };
    return contents;
};
const deserializeAws_json1_1PutSkillAuthorizationResponse = (output, context) => {
    let contents = {
        __type: "PutSkillAuthorizationResponse"
    };
    return contents;
};
const deserializeAws_json1_1RegisterAVSDeviceResponse = (output, context) => {
    let contents = {
        __type: "RegisterAVSDeviceResponse",
        DeviceArn: undefined
    };
    if (output.DeviceArn !== undefined && output.DeviceArn !== null) {
        contents.DeviceArn = output.DeviceArn;
    }
    return contents;
};
const deserializeAws_json1_1RejectSkillResponse = (output, context) => {
    let contents = {
        __type: "RejectSkillResponse"
    };
    return contents;
};
const deserializeAws_json1_1RequireCheckIn = (output, context) => {
    let contents = {
        __type: "RequireCheckIn",
        Enabled: undefined,
        ReleaseAfterMinutes: undefined
    };
    if (output.Enabled !== undefined && output.Enabled !== null) {
        contents.Enabled = output.Enabled;
    }
    if (output.ReleaseAfterMinutes !== undefined &&
        output.ReleaseAfterMinutes !== null) {
        contents.ReleaseAfterMinutes = output.ReleaseAfterMinutes;
    }
    return contents;
};
const deserializeAws_json1_1ResolveRoomResponse = (output, context) => {
    let contents = {
        __type: "ResolveRoomResponse",
        RoomArn: undefined,
        RoomName: undefined,
        RoomSkillParameters: undefined
    };
    if (output.RoomArn !== undefined && output.RoomArn !== null) {
        contents.RoomArn = output.RoomArn;
    }
    if (output.RoomName !== undefined && output.RoomName !== null) {
        contents.RoomName = output.RoomName;
    }
    if (output.RoomSkillParameters !== undefined &&
        output.RoomSkillParameters !== null) {
        contents.RoomSkillParameters = deserializeAws_json1_1RoomSkillParameters(output.RoomSkillParameters, context);
    }
    return contents;
};
const deserializeAws_json1_1ResourceAssociatedException = (output, context) => {
    let contents = {
        __type: "ResourceAssociatedException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1Reviews = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1RevokeInvitationResponse = (output, context) => {
    let contents = {
        __type: "RevokeInvitationResponse"
    };
    return contents;
};
const deserializeAws_json1_1Room = (output, context) => {
    let contents = {
        __type: "Room",
        Description: undefined,
        ProfileArn: undefined,
        ProviderCalendarId: undefined,
        RoomArn: undefined,
        RoomName: undefined
    };
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.ProfileArn !== undefined && output.ProfileArn !== null) {
        contents.ProfileArn = output.ProfileArn;
    }
    if (output.ProviderCalendarId !== undefined &&
        output.ProviderCalendarId !== null) {
        contents.ProviderCalendarId = output.ProviderCalendarId;
    }
    if (output.RoomArn !== undefined && output.RoomArn !== null) {
        contents.RoomArn = output.RoomArn;
    }
    if (output.RoomName !== undefined && output.RoomName !== null) {
        contents.RoomName = output.RoomName;
    }
    return contents;
};
const deserializeAws_json1_1RoomData = (output, context) => {
    let contents = {
        __type: "RoomData",
        Description: undefined,
        ProfileArn: undefined,
        ProfileName: undefined,
        ProviderCalendarId: undefined,
        RoomArn: undefined,
        RoomName: undefined
    };
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.ProfileArn !== undefined && output.ProfileArn !== null) {
        contents.ProfileArn = output.ProfileArn;
    }
    if (output.ProfileName !== undefined && output.ProfileName !== null) {
        contents.ProfileName = output.ProfileName;
    }
    if (output.ProviderCalendarId !== undefined &&
        output.ProviderCalendarId !== null) {
        contents.ProviderCalendarId = output.ProviderCalendarId;
    }
    if (output.RoomArn !== undefined && output.RoomArn !== null) {
        contents.RoomArn = output.RoomArn;
    }
    if (output.RoomName !== undefined && output.RoomName !== null) {
        contents.RoomName = output.RoomName;
    }
    return contents;
};
const deserializeAws_json1_1RoomDataList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1RoomData(entry, context));
};
const deserializeAws_json1_1RoomSkillParameter = (output, context) => {
    let contents = {
        __type: "RoomSkillParameter",
        ParameterKey: undefined,
        ParameterValue: undefined
    };
    if (output.ParameterKey !== undefined && output.ParameterKey !== null) {
        contents.ParameterKey = output.ParameterKey;
    }
    if (output.ParameterValue !== undefined && output.ParameterValue !== null) {
        contents.ParameterValue = output.ParameterValue;
    }
    return contents;
};
const deserializeAws_json1_1RoomSkillParameters = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1RoomSkillParameter(entry, context));
};
const deserializeAws_json1_1SampleUtterances = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1SearchAddressBooksResponse = (output, context) => {
    let contents = {
        __type: "SearchAddressBooksResponse",
        AddressBooks: undefined,
        NextToken: undefined,
        TotalCount: undefined
    };
    if (output.AddressBooks !== undefined && output.AddressBooks !== null) {
        contents.AddressBooks = deserializeAws_json1_1AddressBookDataList(output.AddressBooks, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.TotalCount !== undefined && output.TotalCount !== null) {
        contents.TotalCount = output.TotalCount;
    }
    return contents;
};
const deserializeAws_json1_1SearchContactsResponse = (output, context) => {
    let contents = {
        __type: "SearchContactsResponse",
        Contacts: undefined,
        NextToken: undefined,
        TotalCount: undefined
    };
    if (output.Contacts !== undefined && output.Contacts !== null) {
        contents.Contacts = deserializeAws_json1_1ContactDataList(output.Contacts, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.TotalCount !== undefined && output.TotalCount !== null) {
        contents.TotalCount = output.TotalCount;
    }
    return contents;
};
const deserializeAws_json1_1SearchDevicesResponse = (output, context) => {
    let contents = {
        __type: "SearchDevicesResponse",
        Devices: undefined,
        NextToken: undefined,
        TotalCount: undefined
    };
    if (output.Devices !== undefined && output.Devices !== null) {
        contents.Devices = deserializeAws_json1_1DeviceDataList(output.Devices, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.TotalCount !== undefined && output.TotalCount !== null) {
        contents.TotalCount = output.TotalCount;
    }
    return contents;
};
const deserializeAws_json1_1SearchNetworkProfilesResponse = (output, context) => {
    let contents = {
        __type: "SearchNetworkProfilesResponse",
        NetworkProfiles: undefined,
        NextToken: undefined,
        TotalCount: undefined
    };
    if (output.NetworkProfiles !== undefined && output.NetworkProfiles !== null) {
        contents.NetworkProfiles = deserializeAws_json1_1NetworkProfileDataList(output.NetworkProfiles, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.TotalCount !== undefined && output.TotalCount !== null) {
        contents.TotalCount = output.TotalCount;
    }
    return contents;
};
const deserializeAws_json1_1SearchProfilesResponse = (output, context) => {
    let contents = {
        __type: "SearchProfilesResponse",
        NextToken: undefined,
        Profiles: undefined,
        TotalCount: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.Profiles !== undefined && output.Profiles !== null) {
        contents.Profiles = deserializeAws_json1_1ProfileDataList(output.Profiles, context);
    }
    if (output.TotalCount !== undefined && output.TotalCount !== null) {
        contents.TotalCount = output.TotalCount;
    }
    return contents;
};
const deserializeAws_json1_1SearchRoomsResponse = (output, context) => {
    let contents = {
        __type: "SearchRoomsResponse",
        NextToken: undefined,
        Rooms: undefined,
        TotalCount: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.Rooms !== undefined && output.Rooms !== null) {
        contents.Rooms = deserializeAws_json1_1RoomDataList(output.Rooms, context);
    }
    if (output.TotalCount !== undefined && output.TotalCount !== null) {
        contents.TotalCount = output.TotalCount;
    }
    return contents;
};
const deserializeAws_json1_1SearchSkillGroupsResponse = (output, context) => {
    let contents = {
        __type: "SearchSkillGroupsResponse",
        NextToken: undefined,
        SkillGroups: undefined,
        TotalCount: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.SkillGroups !== undefined && output.SkillGroups !== null) {
        contents.SkillGroups = deserializeAws_json1_1SkillGroupDataList(output.SkillGroups, context);
    }
    if (output.TotalCount !== undefined && output.TotalCount !== null) {
        contents.TotalCount = output.TotalCount;
    }
    return contents;
};
const deserializeAws_json1_1SearchUsersResponse = (output, context) => {
    let contents = {
        __type: "SearchUsersResponse",
        NextToken: undefined,
        TotalCount: undefined,
        Users: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.TotalCount !== undefined && output.TotalCount !== null) {
        contents.TotalCount = output.TotalCount;
    }
    if (output.Users !== undefined && output.Users !== null) {
        contents.Users = deserializeAws_json1_1UserDataList(output.Users, context);
    }
    return contents;
};
const deserializeAws_json1_1SendInvitationResponse = (output, context) => {
    let contents = {
        __type: "SendInvitationResponse"
    };
    return contents;
};
const deserializeAws_json1_1ShortSkillIdList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1SipAddress = (output, context) => {
    let contents = {
        __type: "SipAddress",
        Type: undefined,
        Uri: undefined
    };
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    if (output.Uri !== undefined && output.Uri !== null) {
        contents.Uri = output.Uri;
    }
    return contents;
};
const deserializeAws_json1_1SipAddressList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1SipAddress(entry, context));
};
const deserializeAws_json1_1SkillDetails = (output, context) => {
    let contents = {
        __type: "SkillDetails",
        BulletPoints: undefined,
        DeveloperInfo: undefined,
        EndUserLicenseAgreement: undefined,
        GenericKeywords: undefined,
        InvocationPhrase: undefined,
        NewInThisVersionBulletPoints: undefined,
        ProductDescription: undefined,
        ReleaseDate: undefined,
        Reviews: undefined,
        SkillTypes: undefined
    };
    if (output.BulletPoints !== undefined && output.BulletPoints !== null) {
        contents.BulletPoints = deserializeAws_json1_1BulletPoints(output.BulletPoints, context);
    }
    if (output.DeveloperInfo !== undefined && output.DeveloperInfo !== null) {
        contents.DeveloperInfo = deserializeAws_json1_1DeveloperInfo(output.DeveloperInfo, context);
    }
    if (output.EndUserLicenseAgreement !== undefined &&
        output.EndUserLicenseAgreement !== null) {
        contents.EndUserLicenseAgreement = output.EndUserLicenseAgreement;
    }
    if (output.GenericKeywords !== undefined && output.GenericKeywords !== null) {
        contents.GenericKeywords = deserializeAws_json1_1GenericKeywords(output.GenericKeywords, context);
    }
    if (output.InvocationPhrase !== undefined &&
        output.InvocationPhrase !== null) {
        contents.InvocationPhrase = output.InvocationPhrase;
    }
    if (output.NewInThisVersionBulletPoints !== undefined &&
        output.NewInThisVersionBulletPoints !== null) {
        contents.NewInThisVersionBulletPoints = deserializeAws_json1_1NewInThisVersionBulletPoints(output.NewInThisVersionBulletPoints, context);
    }
    if (output.ProductDescription !== undefined &&
        output.ProductDescription !== null) {
        contents.ProductDescription = output.ProductDescription;
    }
    if (output.ReleaseDate !== undefined && output.ReleaseDate !== null) {
        contents.ReleaseDate = output.ReleaseDate;
    }
    if (output.Reviews !== undefined && output.Reviews !== null) {
        contents.Reviews = deserializeAws_json1_1Reviews(output.Reviews, context);
    }
    if (output.SkillTypes !== undefined && output.SkillTypes !== null) {
        contents.SkillTypes = deserializeAws_json1_1SkillTypes(output.SkillTypes, context);
    }
    return contents;
};
const deserializeAws_json1_1SkillGroup = (output, context) => {
    let contents = {
        __type: "SkillGroup",
        Description: undefined,
        SkillGroupArn: undefined,
        SkillGroupName: undefined
    };
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.SkillGroupArn !== undefined && output.SkillGroupArn !== null) {
        contents.SkillGroupArn = output.SkillGroupArn;
    }
    if (output.SkillGroupName !== undefined && output.SkillGroupName !== null) {
        contents.SkillGroupName = output.SkillGroupName;
    }
    return contents;
};
const deserializeAws_json1_1SkillGroupData = (output, context) => {
    let contents = {
        __type: "SkillGroupData",
        Description: undefined,
        SkillGroupArn: undefined,
        SkillGroupName: undefined
    };
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.SkillGroupArn !== undefined && output.SkillGroupArn !== null) {
        contents.SkillGroupArn = output.SkillGroupArn;
    }
    if (output.SkillGroupName !== undefined && output.SkillGroupName !== null) {
        contents.SkillGroupName = output.SkillGroupName;
    }
    return contents;
};
const deserializeAws_json1_1SkillGroupDataList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1SkillGroupData(entry, context));
};
const deserializeAws_json1_1SkillNotLinkedException = (output, context) => {
    let contents = {
        __type: "SkillNotLinkedException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1SkillSummary = (output, context) => {
    let contents = {
        __type: "SkillSummary",
        EnablementType: undefined,
        SkillId: undefined,
        SkillName: undefined,
        SkillType: undefined,
        SupportsLinking: undefined
    };
    if (output.EnablementType !== undefined && output.EnablementType !== null) {
        contents.EnablementType = output.EnablementType;
    }
    if (output.SkillId !== undefined && output.SkillId !== null) {
        contents.SkillId = output.SkillId;
    }
    if (output.SkillName !== undefined && output.SkillName !== null) {
        contents.SkillName = output.SkillName;
    }
    if (output.SkillType !== undefined && output.SkillType !== null) {
        contents.SkillType = output.SkillType;
    }
    if (output.SupportsLinking !== undefined && output.SupportsLinking !== null) {
        contents.SupportsLinking = output.SupportsLinking;
    }
    return contents;
};
const deserializeAws_json1_1SkillSummaryList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1SkillSummary(entry, context));
};
const deserializeAws_json1_1SkillTypes = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1SkillsStoreSkill = (output, context) => {
    let contents = {
        __type: "SkillsStoreSkill",
        IconUrl: undefined,
        SampleUtterances: undefined,
        ShortDescription: undefined,
        SkillDetails: undefined,
        SkillId: undefined,
        SkillName: undefined,
        SupportsLinking: undefined
    };
    if (output.IconUrl !== undefined && output.IconUrl !== null) {
        contents.IconUrl = output.IconUrl;
    }
    if (output.SampleUtterances !== undefined &&
        output.SampleUtterances !== null) {
        contents.SampleUtterances = deserializeAws_json1_1SampleUtterances(output.SampleUtterances, context);
    }
    if (output.ShortDescription !== undefined &&
        output.ShortDescription !== null) {
        contents.ShortDescription = output.ShortDescription;
    }
    if (output.SkillDetails !== undefined && output.SkillDetails !== null) {
        contents.SkillDetails = deserializeAws_json1_1SkillDetails(output.SkillDetails, context);
    }
    if (output.SkillId !== undefined && output.SkillId !== null) {
        contents.SkillId = output.SkillId;
    }
    if (output.SkillName !== undefined && output.SkillName !== null) {
        contents.SkillName = output.SkillName;
    }
    if (output.SupportsLinking !== undefined && output.SupportsLinking !== null) {
        contents.SupportsLinking = output.SupportsLinking;
    }
    return contents;
};
const deserializeAws_json1_1SkillsStoreSkillList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1SkillsStoreSkill(entry, context));
};
const deserializeAws_json1_1SmartHomeAppliance = (output, context) => {
    let contents = {
        __type: "SmartHomeAppliance",
        Description: undefined,
        FriendlyName: undefined,
        ManufacturerName: undefined
    };
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.FriendlyName !== undefined && output.FriendlyName !== null) {
        contents.FriendlyName = output.FriendlyName;
    }
    if (output.ManufacturerName !== undefined &&
        output.ManufacturerName !== null) {
        contents.ManufacturerName = output.ManufacturerName;
    }
    return contents;
};
const deserializeAws_json1_1SmartHomeApplianceList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1SmartHomeAppliance(entry, context));
};
const deserializeAws_json1_1StartDeviceSyncResponse = (output, context) => {
    let contents = {
        __type: "StartDeviceSyncResponse"
    };
    return contents;
};
const deserializeAws_json1_1StartSmartHomeApplianceDiscoveryResponse = (output, context) => {
    let contents = {
        __type: "StartSmartHomeApplianceDiscoveryResponse"
    };
    return contents;
};
const deserializeAws_json1_1Tag = (output, context) => {
    let contents = {
        __type: "Tag",
        Key: undefined,
        Value: undefined
    };
    if (output.Key !== undefined && output.Key !== null) {
        contents.Key = output.Key;
    }
    if (output.Value !== undefined && output.Value !== null) {
        contents.Value = output.Value;
    }
    return contents;
};
const deserializeAws_json1_1TagList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Tag(entry, context));
};
const deserializeAws_json1_1TagResourceResponse = (output, context) => {
    let contents = {
        __type: "TagResourceResponse"
    };
    return contents;
};
const deserializeAws_json1_1TrustAnchorList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1UntagResourceResponse = (output, context) => {
    let contents = {
        __type: "UntagResourceResponse"
    };
    return contents;
};
const deserializeAws_json1_1UpdateAddressBookResponse = (output, context) => {
    let contents = {
        __type: "UpdateAddressBookResponse"
    };
    return contents;
};
const deserializeAws_json1_1UpdateBusinessReportScheduleResponse = (output, context) => {
    let contents = {
        __type: "UpdateBusinessReportScheduleResponse"
    };
    return contents;
};
const deserializeAws_json1_1UpdateConferenceProviderResponse = (output, context) => {
    let contents = {
        __type: "UpdateConferenceProviderResponse"
    };
    return contents;
};
const deserializeAws_json1_1UpdateContactResponse = (output, context) => {
    let contents = {
        __type: "UpdateContactResponse"
    };
    return contents;
};
const deserializeAws_json1_1UpdateDeviceResponse = (output, context) => {
    let contents = {
        __type: "UpdateDeviceResponse"
    };
    return contents;
};
const deserializeAws_json1_1UpdateGatewayGroupResponse = (output, context) => {
    let contents = {
        __type: "UpdateGatewayGroupResponse"
    };
    return contents;
};
const deserializeAws_json1_1UpdateGatewayResponse = (output, context) => {
    let contents = {
        __type: "UpdateGatewayResponse"
    };
    return contents;
};
const deserializeAws_json1_1UpdateNetworkProfileResponse = (output, context) => {
    let contents = {
        __type: "UpdateNetworkProfileResponse"
    };
    return contents;
};
const deserializeAws_json1_1UpdateProfileResponse = (output, context) => {
    let contents = {
        __type: "UpdateProfileResponse"
    };
    return contents;
};
const deserializeAws_json1_1UpdateRoomResponse = (output, context) => {
    let contents = {
        __type: "UpdateRoomResponse"
    };
    return contents;
};
const deserializeAws_json1_1UpdateSkillGroupResponse = (output, context) => {
    let contents = {
        __type: "UpdateSkillGroupResponse"
    };
    return contents;
};
const deserializeAws_json1_1UserData = (output, context) => {
    let contents = {
        __type: "UserData",
        Email: undefined,
        EnrollmentId: undefined,
        EnrollmentStatus: undefined,
        FirstName: undefined,
        LastName: undefined,
        UserArn: undefined
    };
    if (output.Email !== undefined && output.Email !== null) {
        contents.Email = output.Email;
    }
    if (output.EnrollmentId !== undefined && output.EnrollmentId !== null) {
        contents.EnrollmentId = output.EnrollmentId;
    }
    if (output.EnrollmentStatus !== undefined &&
        output.EnrollmentStatus !== null) {
        contents.EnrollmentStatus = output.EnrollmentStatus;
    }
    if (output.FirstName !== undefined && output.FirstName !== null) {
        contents.FirstName = output.FirstName;
    }
    if (output.LastName !== undefined && output.LastName !== null) {
        contents.LastName = output.LastName;
    }
    if (output.UserArn !== undefined && output.UserArn !== null) {
        contents.UserArn = output.UserArn;
    }
    return contents;
};
const deserializeAws_json1_1UserDataList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1UserData(entry, context));
};
const deserializeMetadata = (output) => ({
    httpStatusCode: output.statusCode,
    httpHeaders: output.headers,
    requestId: output.headers["x-amzn-requestid"]
});
// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody, context) => {
    if (streamBody instanceof Uint8Array) {
        return Promise.resolve(streamBody);
    }
    return (context.streamCollector(streamBody) || Promise.resolve(new Uint8Array()));
};
// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody, context) => {
    return collectBody(streamBody, context).then(body => context.utf8Encoder(body));
};
const buildHttpRpcRequest = (context, headers, path, resolvedHostname, body) => {
    const contents = Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", path: path, headers: headers });
    if (resolvedHostname !== undefined) {
        contents.hostname = resolvedHostname;
    }
    if (body !== undefined) {
        contents.body = body;
    }
    return new protocol_http_1.HttpRequest(contents);
};
const parseBody = (streamBody, context) => {
    return collectBodyString(streamBody, context).then(encoded => {
        if (encoded.length) {
            return JSON.parse(encoded);
        }
        return {};
    });
};
//# sourceMappingURL=Aws_json1_1.js.map