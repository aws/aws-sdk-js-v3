"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1AcceptDirectConnectGatewayAssociationProposalCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "OvertureService.AcceptDirectConnectGatewayAssociationProposal";
    let body;
    body = JSON.stringify(serializeAws_json1_1AcceptDirectConnectGatewayAssociationProposalRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AcceptDirectConnectGatewayAssociationProposalCommand = serializeAws_json1_1AcceptDirectConnectGatewayAssociationProposalCommand;
async function serializeAws_json1_1AllocateConnectionOnInterconnectCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OvertureService.AllocateConnectionOnInterconnect";
    let body;
    body = JSON.stringify(serializeAws_json1_1AllocateConnectionOnInterconnectRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AllocateConnectionOnInterconnectCommand = serializeAws_json1_1AllocateConnectionOnInterconnectCommand;
async function serializeAws_json1_1AllocateHostedConnectionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OvertureService.AllocateHostedConnection";
    let body;
    body = JSON.stringify(serializeAws_json1_1AllocateHostedConnectionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AllocateHostedConnectionCommand = serializeAws_json1_1AllocateHostedConnectionCommand;
async function serializeAws_json1_1AllocatePrivateVirtualInterfaceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OvertureService.AllocatePrivateVirtualInterface";
    let body;
    body = JSON.stringify(serializeAws_json1_1AllocatePrivateVirtualInterfaceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AllocatePrivateVirtualInterfaceCommand = serializeAws_json1_1AllocatePrivateVirtualInterfaceCommand;
async function serializeAws_json1_1AllocatePublicVirtualInterfaceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OvertureService.AllocatePublicVirtualInterface";
    let body;
    body = JSON.stringify(serializeAws_json1_1AllocatePublicVirtualInterfaceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AllocatePublicVirtualInterfaceCommand = serializeAws_json1_1AllocatePublicVirtualInterfaceCommand;
async function serializeAws_json1_1AllocateTransitVirtualInterfaceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OvertureService.AllocateTransitVirtualInterface";
    let body;
    body = JSON.stringify(serializeAws_json1_1AllocateTransitVirtualInterfaceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AllocateTransitVirtualInterfaceCommand = serializeAws_json1_1AllocateTransitVirtualInterfaceCommand;
async function serializeAws_json1_1AssociateConnectionWithLagCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OvertureService.AssociateConnectionWithLag";
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateConnectionWithLagRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AssociateConnectionWithLagCommand = serializeAws_json1_1AssociateConnectionWithLagCommand;
async function serializeAws_json1_1AssociateHostedConnectionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OvertureService.AssociateHostedConnection";
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateHostedConnectionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AssociateHostedConnectionCommand = serializeAws_json1_1AssociateHostedConnectionCommand;
async function serializeAws_json1_1AssociateVirtualInterfaceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OvertureService.AssociateVirtualInterface";
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateVirtualInterfaceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AssociateVirtualInterfaceCommand = serializeAws_json1_1AssociateVirtualInterfaceCommand;
async function serializeAws_json1_1ConfirmConnectionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OvertureService.ConfirmConnection";
    let body;
    body = JSON.stringify(serializeAws_json1_1ConfirmConnectionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ConfirmConnectionCommand = serializeAws_json1_1ConfirmConnectionCommand;
async function serializeAws_json1_1ConfirmPrivateVirtualInterfaceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OvertureService.ConfirmPrivateVirtualInterface";
    let body;
    body = JSON.stringify(serializeAws_json1_1ConfirmPrivateVirtualInterfaceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ConfirmPrivateVirtualInterfaceCommand = serializeAws_json1_1ConfirmPrivateVirtualInterfaceCommand;
async function serializeAws_json1_1ConfirmPublicVirtualInterfaceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OvertureService.ConfirmPublicVirtualInterface";
    let body;
    body = JSON.stringify(serializeAws_json1_1ConfirmPublicVirtualInterfaceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ConfirmPublicVirtualInterfaceCommand = serializeAws_json1_1ConfirmPublicVirtualInterfaceCommand;
async function serializeAws_json1_1ConfirmTransitVirtualInterfaceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OvertureService.ConfirmTransitVirtualInterface";
    let body;
    body = JSON.stringify(serializeAws_json1_1ConfirmTransitVirtualInterfaceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ConfirmTransitVirtualInterfaceCommand = serializeAws_json1_1ConfirmTransitVirtualInterfaceCommand;
async function serializeAws_json1_1CreateBGPPeerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OvertureService.CreateBGPPeer";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateBGPPeerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateBGPPeerCommand = serializeAws_json1_1CreateBGPPeerCommand;
async function serializeAws_json1_1CreateConnectionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OvertureService.CreateConnection";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateConnectionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateConnectionCommand = serializeAws_json1_1CreateConnectionCommand;
async function serializeAws_json1_1CreateDirectConnectGatewayCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OvertureService.CreateDirectConnectGateway";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateDirectConnectGatewayRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateDirectConnectGatewayCommand = serializeAws_json1_1CreateDirectConnectGatewayCommand;
async function serializeAws_json1_1CreateDirectConnectGatewayAssociationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "OvertureService.CreateDirectConnectGatewayAssociation";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateDirectConnectGatewayAssociationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateDirectConnectGatewayAssociationCommand = serializeAws_json1_1CreateDirectConnectGatewayAssociationCommand;
async function serializeAws_json1_1CreateDirectConnectGatewayAssociationProposalCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "OvertureService.CreateDirectConnectGatewayAssociationProposal";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateDirectConnectGatewayAssociationProposalRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateDirectConnectGatewayAssociationProposalCommand = serializeAws_json1_1CreateDirectConnectGatewayAssociationProposalCommand;
async function serializeAws_json1_1CreateInterconnectCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OvertureService.CreateInterconnect";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateInterconnectRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateInterconnectCommand = serializeAws_json1_1CreateInterconnectCommand;
async function serializeAws_json1_1CreateLagCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OvertureService.CreateLag";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateLagRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateLagCommand = serializeAws_json1_1CreateLagCommand;
async function serializeAws_json1_1CreatePrivateVirtualInterfaceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OvertureService.CreatePrivateVirtualInterface";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreatePrivateVirtualInterfaceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreatePrivateVirtualInterfaceCommand = serializeAws_json1_1CreatePrivateVirtualInterfaceCommand;
async function serializeAws_json1_1CreatePublicVirtualInterfaceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OvertureService.CreatePublicVirtualInterface";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreatePublicVirtualInterfaceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreatePublicVirtualInterfaceCommand = serializeAws_json1_1CreatePublicVirtualInterfaceCommand;
async function serializeAws_json1_1CreateTransitVirtualInterfaceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OvertureService.CreateTransitVirtualInterface";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateTransitVirtualInterfaceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateTransitVirtualInterfaceCommand = serializeAws_json1_1CreateTransitVirtualInterfaceCommand;
async function serializeAws_json1_1DeleteBGPPeerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OvertureService.DeleteBGPPeer";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteBGPPeerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteBGPPeerCommand = serializeAws_json1_1DeleteBGPPeerCommand;
async function serializeAws_json1_1DeleteConnectionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OvertureService.DeleteConnection";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteConnectionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteConnectionCommand = serializeAws_json1_1DeleteConnectionCommand;
async function serializeAws_json1_1DeleteDirectConnectGatewayCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OvertureService.DeleteDirectConnectGateway";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteDirectConnectGatewayRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteDirectConnectGatewayCommand = serializeAws_json1_1DeleteDirectConnectGatewayCommand;
async function serializeAws_json1_1DeleteDirectConnectGatewayAssociationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "OvertureService.DeleteDirectConnectGatewayAssociation";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteDirectConnectGatewayAssociationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteDirectConnectGatewayAssociationCommand = serializeAws_json1_1DeleteDirectConnectGatewayAssociationCommand;
async function serializeAws_json1_1DeleteDirectConnectGatewayAssociationProposalCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "OvertureService.DeleteDirectConnectGatewayAssociationProposal";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteDirectConnectGatewayAssociationProposalRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteDirectConnectGatewayAssociationProposalCommand = serializeAws_json1_1DeleteDirectConnectGatewayAssociationProposalCommand;
async function serializeAws_json1_1DeleteInterconnectCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OvertureService.DeleteInterconnect";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteInterconnectRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteInterconnectCommand = serializeAws_json1_1DeleteInterconnectCommand;
async function serializeAws_json1_1DeleteLagCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OvertureService.DeleteLag";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteLagRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteLagCommand = serializeAws_json1_1DeleteLagCommand;
async function serializeAws_json1_1DeleteVirtualInterfaceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OvertureService.DeleteVirtualInterface";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteVirtualInterfaceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteVirtualInterfaceCommand = serializeAws_json1_1DeleteVirtualInterfaceCommand;
async function serializeAws_json1_1DescribeConnectionLoaCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OvertureService.DescribeConnectionLoa";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeConnectionLoaRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeConnectionLoaCommand = serializeAws_json1_1DescribeConnectionLoaCommand;
async function serializeAws_json1_1DescribeConnectionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OvertureService.DescribeConnections";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeConnectionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeConnectionsCommand = serializeAws_json1_1DescribeConnectionsCommand;
async function serializeAws_json1_1DescribeConnectionsOnInterconnectCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OvertureService.DescribeConnectionsOnInterconnect";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeConnectionsOnInterconnectRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeConnectionsOnInterconnectCommand = serializeAws_json1_1DescribeConnectionsOnInterconnectCommand;
async function serializeAws_json1_1DescribeDirectConnectGatewayAssociationProposalsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "OvertureService.DescribeDirectConnectGatewayAssociationProposals";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeDirectConnectGatewayAssociationProposalsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeDirectConnectGatewayAssociationProposalsCommand = serializeAws_json1_1DescribeDirectConnectGatewayAssociationProposalsCommand;
async function serializeAws_json1_1DescribeDirectConnectGatewayAssociationsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "OvertureService.DescribeDirectConnectGatewayAssociations";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeDirectConnectGatewayAssociationsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeDirectConnectGatewayAssociationsCommand = serializeAws_json1_1DescribeDirectConnectGatewayAssociationsCommand;
async function serializeAws_json1_1DescribeDirectConnectGatewayAttachmentsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "OvertureService.DescribeDirectConnectGatewayAttachments";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeDirectConnectGatewayAttachmentsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeDirectConnectGatewayAttachmentsCommand = serializeAws_json1_1DescribeDirectConnectGatewayAttachmentsCommand;
async function serializeAws_json1_1DescribeDirectConnectGatewaysCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OvertureService.DescribeDirectConnectGateways";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeDirectConnectGatewaysRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeDirectConnectGatewaysCommand = serializeAws_json1_1DescribeDirectConnectGatewaysCommand;
async function serializeAws_json1_1DescribeHostedConnectionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OvertureService.DescribeHostedConnections";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeHostedConnectionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeHostedConnectionsCommand = serializeAws_json1_1DescribeHostedConnectionsCommand;
async function serializeAws_json1_1DescribeInterconnectLoaCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OvertureService.DescribeInterconnectLoa";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeInterconnectLoaRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeInterconnectLoaCommand = serializeAws_json1_1DescribeInterconnectLoaCommand;
async function serializeAws_json1_1DescribeInterconnectsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OvertureService.DescribeInterconnects";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeInterconnectsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeInterconnectsCommand = serializeAws_json1_1DescribeInterconnectsCommand;
async function serializeAws_json1_1DescribeLagsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OvertureService.DescribeLags";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeLagsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeLagsCommand = serializeAws_json1_1DescribeLagsCommand;
async function serializeAws_json1_1DescribeLoaCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OvertureService.DescribeLoa";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeLoaRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeLoaCommand = serializeAws_json1_1DescribeLoaCommand;
async function serializeAws_json1_1DescribeLocationsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OvertureService.DescribeLocations";
    return buildHttpRpcRequest(context, headers, "/", undefined, undefined);
}
exports.serializeAws_json1_1DescribeLocationsCommand = serializeAws_json1_1DescribeLocationsCommand;
async function serializeAws_json1_1DescribeTagsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OvertureService.DescribeTags";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeTagsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeTagsCommand = serializeAws_json1_1DescribeTagsCommand;
async function serializeAws_json1_1DescribeVirtualGatewaysCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OvertureService.DescribeVirtualGateways";
    return buildHttpRpcRequest(context, headers, "/", undefined, undefined);
}
exports.serializeAws_json1_1DescribeVirtualGatewaysCommand = serializeAws_json1_1DescribeVirtualGatewaysCommand;
async function serializeAws_json1_1DescribeVirtualInterfacesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OvertureService.DescribeVirtualInterfaces";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeVirtualInterfacesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeVirtualInterfacesCommand = serializeAws_json1_1DescribeVirtualInterfacesCommand;
async function serializeAws_json1_1DisassociateConnectionFromLagCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OvertureService.DisassociateConnectionFromLag";
    let body;
    body = JSON.stringify(serializeAws_json1_1DisassociateConnectionFromLagRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DisassociateConnectionFromLagCommand = serializeAws_json1_1DisassociateConnectionFromLagCommand;
async function serializeAws_json1_1TagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OvertureService.TagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
async function serializeAws_json1_1UntagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OvertureService.UntagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
async function serializeAws_json1_1UpdateDirectConnectGatewayAssociationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "OvertureService.UpdateDirectConnectGatewayAssociation";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateDirectConnectGatewayAssociationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateDirectConnectGatewayAssociationCommand = serializeAws_json1_1UpdateDirectConnectGatewayAssociationCommand;
async function serializeAws_json1_1UpdateLagCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OvertureService.UpdateLag";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateLagRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateLagCommand = serializeAws_json1_1UpdateLagCommand;
async function serializeAws_json1_1UpdateVirtualInterfaceAttributesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OvertureService.UpdateVirtualInterfaceAttributes";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateVirtualInterfaceAttributesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateVirtualInterfaceAttributesCommand = serializeAws_json1_1UpdateVirtualInterfaceAttributesCommand;
async function deserializeAws_json1_1AcceptDirectConnectGatewayAssociationProposalCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AcceptDirectConnectGatewayAssociationProposalCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AcceptDirectConnectGatewayAssociationProposalResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AcceptDirectConnectGatewayAssociationProposalResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AcceptDirectConnectGatewayAssociationProposalCommand = deserializeAws_json1_1AcceptDirectConnectGatewayAssociationProposalCommand;
async function deserializeAws_json1_1AcceptDirectConnectGatewayAssociationProposalCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazon.awsdx.overture#DirectConnectClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectConnectServerException":
        case "com.amazon.awsdx.overture#DirectConnectServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1AllocateConnectionOnInterconnectCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AllocateConnectionOnInterconnectCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1Connection(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "Connection" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AllocateConnectionOnInterconnectCommand = deserializeAws_json1_1AllocateConnectionOnInterconnectCommand;
async function deserializeAws_json1_1AllocateConnectionOnInterconnectCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazon.awsdx.overture#DirectConnectClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectConnectServerException":
        case "com.amazon.awsdx.overture#DirectConnectServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1AllocateHostedConnectionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AllocateHostedConnectionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1Connection(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "Connection" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AllocateHostedConnectionCommand = deserializeAws_json1_1AllocateHostedConnectionCommand;
async function deserializeAws_json1_1AllocateHostedConnectionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazon.awsdx.overture#DirectConnectClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectConnectServerException":
        case "com.amazon.awsdx.overture#DirectConnectServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DuplicateTagKeysException":
        case "com.amazon.awsdx.overture#DuplicateTagKeysException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DuplicateTagKeysExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyTagsException":
        case "com.amazon.awsdx.overture#TooManyTagsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1AllocatePrivateVirtualInterfaceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AllocatePrivateVirtualInterfaceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1VirtualInterface(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "VirtualInterface" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AllocatePrivateVirtualInterfaceCommand = deserializeAws_json1_1AllocatePrivateVirtualInterfaceCommand;
async function deserializeAws_json1_1AllocatePrivateVirtualInterfaceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazon.awsdx.overture#DirectConnectClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectConnectServerException":
        case "com.amazon.awsdx.overture#DirectConnectServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DuplicateTagKeysException":
        case "com.amazon.awsdx.overture#DuplicateTagKeysException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DuplicateTagKeysExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyTagsException":
        case "com.amazon.awsdx.overture#TooManyTagsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1AllocatePublicVirtualInterfaceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AllocatePublicVirtualInterfaceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1VirtualInterface(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "VirtualInterface" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AllocatePublicVirtualInterfaceCommand = deserializeAws_json1_1AllocatePublicVirtualInterfaceCommand;
async function deserializeAws_json1_1AllocatePublicVirtualInterfaceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazon.awsdx.overture#DirectConnectClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectConnectServerException":
        case "com.amazon.awsdx.overture#DirectConnectServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DuplicateTagKeysException":
        case "com.amazon.awsdx.overture#DuplicateTagKeysException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DuplicateTagKeysExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyTagsException":
        case "com.amazon.awsdx.overture#TooManyTagsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1AllocateTransitVirtualInterfaceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AllocateTransitVirtualInterfaceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AllocateTransitVirtualInterfaceResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AllocateTransitVirtualInterfaceResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AllocateTransitVirtualInterfaceCommand = deserializeAws_json1_1AllocateTransitVirtualInterfaceCommand;
async function deserializeAws_json1_1AllocateTransitVirtualInterfaceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazon.awsdx.overture#DirectConnectClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectConnectServerException":
        case "com.amazon.awsdx.overture#DirectConnectServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DuplicateTagKeysException":
        case "com.amazon.awsdx.overture#DuplicateTagKeysException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DuplicateTagKeysExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyTagsException":
        case "com.amazon.awsdx.overture#TooManyTagsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1AssociateConnectionWithLagCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AssociateConnectionWithLagCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1Connection(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "Connection" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AssociateConnectionWithLagCommand = deserializeAws_json1_1AssociateConnectionWithLagCommand;
async function deserializeAws_json1_1AssociateConnectionWithLagCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazon.awsdx.overture#DirectConnectClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectConnectServerException":
        case "com.amazon.awsdx.overture#DirectConnectServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1AssociateHostedConnectionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AssociateHostedConnectionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1Connection(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "Connection" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AssociateHostedConnectionCommand = deserializeAws_json1_1AssociateHostedConnectionCommand;
async function deserializeAws_json1_1AssociateHostedConnectionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazon.awsdx.overture#DirectConnectClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectConnectServerException":
        case "com.amazon.awsdx.overture#DirectConnectServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1AssociateVirtualInterfaceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AssociateVirtualInterfaceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1VirtualInterface(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "VirtualInterface" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AssociateVirtualInterfaceCommand = deserializeAws_json1_1AssociateVirtualInterfaceCommand;
async function deserializeAws_json1_1AssociateVirtualInterfaceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazon.awsdx.overture#DirectConnectClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectConnectServerException":
        case "com.amazon.awsdx.overture#DirectConnectServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ConfirmConnectionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ConfirmConnectionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ConfirmConnectionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ConfirmConnectionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ConfirmConnectionCommand = deserializeAws_json1_1ConfirmConnectionCommand;
async function deserializeAws_json1_1ConfirmConnectionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazon.awsdx.overture#DirectConnectClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectConnectServerException":
        case "com.amazon.awsdx.overture#DirectConnectServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ConfirmPrivateVirtualInterfaceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ConfirmPrivateVirtualInterfaceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ConfirmPrivateVirtualInterfaceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ConfirmPrivateVirtualInterfaceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ConfirmPrivateVirtualInterfaceCommand = deserializeAws_json1_1ConfirmPrivateVirtualInterfaceCommand;
async function deserializeAws_json1_1ConfirmPrivateVirtualInterfaceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazon.awsdx.overture#DirectConnectClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectConnectServerException":
        case "com.amazon.awsdx.overture#DirectConnectServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ConfirmPublicVirtualInterfaceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ConfirmPublicVirtualInterfaceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ConfirmPublicVirtualInterfaceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ConfirmPublicVirtualInterfaceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ConfirmPublicVirtualInterfaceCommand = deserializeAws_json1_1ConfirmPublicVirtualInterfaceCommand;
async function deserializeAws_json1_1ConfirmPublicVirtualInterfaceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazon.awsdx.overture#DirectConnectClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectConnectServerException":
        case "com.amazon.awsdx.overture#DirectConnectServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ConfirmTransitVirtualInterfaceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ConfirmTransitVirtualInterfaceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ConfirmTransitVirtualInterfaceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ConfirmTransitVirtualInterfaceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ConfirmTransitVirtualInterfaceCommand = deserializeAws_json1_1ConfirmTransitVirtualInterfaceCommand;
async function deserializeAws_json1_1ConfirmTransitVirtualInterfaceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazon.awsdx.overture#DirectConnectClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectConnectServerException":
        case "com.amazon.awsdx.overture#DirectConnectServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateBGPPeerCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateBGPPeerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateBGPPeerResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateBGPPeerResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateBGPPeerCommand = deserializeAws_json1_1CreateBGPPeerCommand;
async function deserializeAws_json1_1CreateBGPPeerCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazon.awsdx.overture#DirectConnectClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectConnectServerException":
        case "com.amazon.awsdx.overture#DirectConnectServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateConnectionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateConnectionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1Connection(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "Connection" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateConnectionCommand = deserializeAws_json1_1CreateConnectionCommand;
async function deserializeAws_json1_1CreateConnectionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazon.awsdx.overture#DirectConnectClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectConnectServerException":
        case "com.amazon.awsdx.overture#DirectConnectServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DuplicateTagKeysException":
        case "com.amazon.awsdx.overture#DuplicateTagKeysException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DuplicateTagKeysExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyTagsException":
        case "com.amazon.awsdx.overture#TooManyTagsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateDirectConnectGatewayCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateDirectConnectGatewayCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateDirectConnectGatewayResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateDirectConnectGatewayResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateDirectConnectGatewayCommand = deserializeAws_json1_1CreateDirectConnectGatewayCommand;
async function deserializeAws_json1_1CreateDirectConnectGatewayCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazon.awsdx.overture#DirectConnectClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectConnectServerException":
        case "com.amazon.awsdx.overture#DirectConnectServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateDirectConnectGatewayAssociationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateDirectConnectGatewayAssociationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateDirectConnectGatewayAssociationResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateDirectConnectGatewayAssociationResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateDirectConnectGatewayAssociationCommand = deserializeAws_json1_1CreateDirectConnectGatewayAssociationCommand;
async function deserializeAws_json1_1CreateDirectConnectGatewayAssociationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazon.awsdx.overture#DirectConnectClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectConnectServerException":
        case "com.amazon.awsdx.overture#DirectConnectServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateDirectConnectGatewayAssociationProposalCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateDirectConnectGatewayAssociationProposalCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateDirectConnectGatewayAssociationProposalResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateDirectConnectGatewayAssociationProposalResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateDirectConnectGatewayAssociationProposalCommand = deserializeAws_json1_1CreateDirectConnectGatewayAssociationProposalCommand;
async function deserializeAws_json1_1CreateDirectConnectGatewayAssociationProposalCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazon.awsdx.overture#DirectConnectClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectConnectServerException":
        case "com.amazon.awsdx.overture#DirectConnectServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateInterconnectCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateInterconnectCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1Interconnect(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "Interconnect" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateInterconnectCommand = deserializeAws_json1_1CreateInterconnectCommand;
async function deserializeAws_json1_1CreateInterconnectCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazon.awsdx.overture#DirectConnectClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectConnectServerException":
        case "com.amazon.awsdx.overture#DirectConnectServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DuplicateTagKeysException":
        case "com.amazon.awsdx.overture#DuplicateTagKeysException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DuplicateTagKeysExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyTagsException":
        case "com.amazon.awsdx.overture#TooManyTagsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateLagCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateLagCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1Lag(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "Lag" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateLagCommand = deserializeAws_json1_1CreateLagCommand;
async function deserializeAws_json1_1CreateLagCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazon.awsdx.overture#DirectConnectClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectConnectServerException":
        case "com.amazon.awsdx.overture#DirectConnectServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DuplicateTagKeysException":
        case "com.amazon.awsdx.overture#DuplicateTagKeysException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DuplicateTagKeysExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyTagsException":
        case "com.amazon.awsdx.overture#TooManyTagsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreatePrivateVirtualInterfaceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreatePrivateVirtualInterfaceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1VirtualInterface(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "VirtualInterface" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreatePrivateVirtualInterfaceCommand = deserializeAws_json1_1CreatePrivateVirtualInterfaceCommand;
async function deserializeAws_json1_1CreatePrivateVirtualInterfaceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazon.awsdx.overture#DirectConnectClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectConnectServerException":
        case "com.amazon.awsdx.overture#DirectConnectServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DuplicateTagKeysException":
        case "com.amazon.awsdx.overture#DuplicateTagKeysException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DuplicateTagKeysExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyTagsException":
        case "com.amazon.awsdx.overture#TooManyTagsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreatePublicVirtualInterfaceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreatePublicVirtualInterfaceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1VirtualInterface(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "VirtualInterface" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreatePublicVirtualInterfaceCommand = deserializeAws_json1_1CreatePublicVirtualInterfaceCommand;
async function deserializeAws_json1_1CreatePublicVirtualInterfaceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazon.awsdx.overture#DirectConnectClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectConnectServerException":
        case "com.amazon.awsdx.overture#DirectConnectServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DuplicateTagKeysException":
        case "com.amazon.awsdx.overture#DuplicateTagKeysException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DuplicateTagKeysExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyTagsException":
        case "com.amazon.awsdx.overture#TooManyTagsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateTransitVirtualInterfaceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateTransitVirtualInterfaceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateTransitVirtualInterfaceResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateTransitVirtualInterfaceResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateTransitVirtualInterfaceCommand = deserializeAws_json1_1CreateTransitVirtualInterfaceCommand;
async function deserializeAws_json1_1CreateTransitVirtualInterfaceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazon.awsdx.overture#DirectConnectClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectConnectServerException":
        case "com.amazon.awsdx.overture#DirectConnectServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DuplicateTagKeysException":
        case "com.amazon.awsdx.overture#DuplicateTagKeysException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DuplicateTagKeysExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyTagsException":
        case "com.amazon.awsdx.overture#TooManyTagsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteBGPPeerCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteBGPPeerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteBGPPeerResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteBGPPeerResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteBGPPeerCommand = deserializeAws_json1_1DeleteBGPPeerCommand;
async function deserializeAws_json1_1DeleteBGPPeerCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazon.awsdx.overture#DirectConnectClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectConnectServerException":
        case "com.amazon.awsdx.overture#DirectConnectServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteConnectionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteConnectionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1Connection(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "Connection" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteConnectionCommand = deserializeAws_json1_1DeleteConnectionCommand;
async function deserializeAws_json1_1DeleteConnectionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazon.awsdx.overture#DirectConnectClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectConnectServerException":
        case "com.amazon.awsdx.overture#DirectConnectServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteDirectConnectGatewayCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteDirectConnectGatewayCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteDirectConnectGatewayResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteDirectConnectGatewayResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteDirectConnectGatewayCommand = deserializeAws_json1_1DeleteDirectConnectGatewayCommand;
async function deserializeAws_json1_1DeleteDirectConnectGatewayCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazon.awsdx.overture#DirectConnectClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectConnectServerException":
        case "com.amazon.awsdx.overture#DirectConnectServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteDirectConnectGatewayAssociationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteDirectConnectGatewayAssociationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteDirectConnectGatewayAssociationResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteDirectConnectGatewayAssociationResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteDirectConnectGatewayAssociationCommand = deserializeAws_json1_1DeleteDirectConnectGatewayAssociationCommand;
async function deserializeAws_json1_1DeleteDirectConnectGatewayAssociationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazon.awsdx.overture#DirectConnectClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectConnectServerException":
        case "com.amazon.awsdx.overture#DirectConnectServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteDirectConnectGatewayAssociationProposalCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteDirectConnectGatewayAssociationProposalCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteDirectConnectGatewayAssociationProposalResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteDirectConnectGatewayAssociationProposalResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteDirectConnectGatewayAssociationProposalCommand = deserializeAws_json1_1DeleteDirectConnectGatewayAssociationProposalCommand;
async function deserializeAws_json1_1DeleteDirectConnectGatewayAssociationProposalCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazon.awsdx.overture#DirectConnectClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectConnectServerException":
        case "com.amazon.awsdx.overture#DirectConnectServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteInterconnectCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteInterconnectCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteInterconnectResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteInterconnectResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteInterconnectCommand = deserializeAws_json1_1DeleteInterconnectCommand;
async function deserializeAws_json1_1DeleteInterconnectCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazon.awsdx.overture#DirectConnectClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectConnectServerException":
        case "com.amazon.awsdx.overture#DirectConnectServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteLagCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteLagCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1Lag(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "Lag" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteLagCommand = deserializeAws_json1_1DeleteLagCommand;
async function deserializeAws_json1_1DeleteLagCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazon.awsdx.overture#DirectConnectClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectConnectServerException":
        case "com.amazon.awsdx.overture#DirectConnectServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteVirtualInterfaceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteVirtualInterfaceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteVirtualInterfaceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteVirtualInterfaceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteVirtualInterfaceCommand = deserializeAws_json1_1DeleteVirtualInterfaceCommand;
async function deserializeAws_json1_1DeleteVirtualInterfaceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazon.awsdx.overture#DirectConnectClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectConnectServerException":
        case "com.amazon.awsdx.overture#DirectConnectServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeConnectionLoaCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeConnectionLoaCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeConnectionLoaResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeConnectionLoaResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeConnectionLoaCommand = deserializeAws_json1_1DescribeConnectionLoaCommand;
async function deserializeAws_json1_1DescribeConnectionLoaCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazon.awsdx.overture#DirectConnectClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectConnectServerException":
        case "com.amazon.awsdx.overture#DirectConnectServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeConnectionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeConnectionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1Connections(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "Connections" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeConnectionsCommand = deserializeAws_json1_1DescribeConnectionsCommand;
async function deserializeAws_json1_1DescribeConnectionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazon.awsdx.overture#DirectConnectClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectConnectServerException":
        case "com.amazon.awsdx.overture#DirectConnectServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeConnectionsOnInterconnectCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeConnectionsOnInterconnectCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1Connections(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "Connections" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeConnectionsOnInterconnectCommand = deserializeAws_json1_1DescribeConnectionsOnInterconnectCommand;
async function deserializeAws_json1_1DescribeConnectionsOnInterconnectCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazon.awsdx.overture#DirectConnectClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectConnectServerException":
        case "com.amazon.awsdx.overture#DirectConnectServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeDirectConnectGatewayAssociationProposalsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeDirectConnectGatewayAssociationProposalsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeDirectConnectGatewayAssociationProposalsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeDirectConnectGatewayAssociationProposalsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeDirectConnectGatewayAssociationProposalsCommand = deserializeAws_json1_1DescribeDirectConnectGatewayAssociationProposalsCommand;
async function deserializeAws_json1_1DescribeDirectConnectGatewayAssociationProposalsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazon.awsdx.overture#DirectConnectClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectConnectServerException":
        case "com.amazon.awsdx.overture#DirectConnectServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeDirectConnectGatewayAssociationsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeDirectConnectGatewayAssociationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeDirectConnectGatewayAssociationsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeDirectConnectGatewayAssociationsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeDirectConnectGatewayAssociationsCommand = deserializeAws_json1_1DescribeDirectConnectGatewayAssociationsCommand;
async function deserializeAws_json1_1DescribeDirectConnectGatewayAssociationsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazon.awsdx.overture#DirectConnectClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectConnectServerException":
        case "com.amazon.awsdx.overture#DirectConnectServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeDirectConnectGatewayAttachmentsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeDirectConnectGatewayAttachmentsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeDirectConnectGatewayAttachmentsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeDirectConnectGatewayAttachmentsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeDirectConnectGatewayAttachmentsCommand = deserializeAws_json1_1DescribeDirectConnectGatewayAttachmentsCommand;
async function deserializeAws_json1_1DescribeDirectConnectGatewayAttachmentsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazon.awsdx.overture#DirectConnectClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectConnectServerException":
        case "com.amazon.awsdx.overture#DirectConnectServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeDirectConnectGatewaysCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeDirectConnectGatewaysCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeDirectConnectGatewaysResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeDirectConnectGatewaysResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeDirectConnectGatewaysCommand = deserializeAws_json1_1DescribeDirectConnectGatewaysCommand;
async function deserializeAws_json1_1DescribeDirectConnectGatewaysCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazon.awsdx.overture#DirectConnectClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectConnectServerException":
        case "com.amazon.awsdx.overture#DirectConnectServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeHostedConnectionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeHostedConnectionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1Connections(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "Connections" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeHostedConnectionsCommand = deserializeAws_json1_1DescribeHostedConnectionsCommand;
async function deserializeAws_json1_1DescribeHostedConnectionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazon.awsdx.overture#DirectConnectClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectConnectServerException":
        case "com.amazon.awsdx.overture#DirectConnectServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeInterconnectLoaCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeInterconnectLoaCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeInterconnectLoaResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeInterconnectLoaResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeInterconnectLoaCommand = deserializeAws_json1_1DescribeInterconnectLoaCommand;
async function deserializeAws_json1_1DescribeInterconnectLoaCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazon.awsdx.overture#DirectConnectClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectConnectServerException":
        case "com.amazon.awsdx.overture#DirectConnectServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeInterconnectsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeInterconnectsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1Interconnects(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "Interconnects" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeInterconnectsCommand = deserializeAws_json1_1DescribeInterconnectsCommand;
async function deserializeAws_json1_1DescribeInterconnectsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazon.awsdx.overture#DirectConnectClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectConnectServerException":
        case "com.amazon.awsdx.overture#DirectConnectServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeLagsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeLagsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1Lags(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "Lags" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeLagsCommand = deserializeAws_json1_1DescribeLagsCommand;
async function deserializeAws_json1_1DescribeLagsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazon.awsdx.overture#DirectConnectClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectConnectServerException":
        case "com.amazon.awsdx.overture#DirectConnectServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeLoaCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeLoaCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1Loa(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "Loa" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeLoaCommand = deserializeAws_json1_1DescribeLoaCommand;
async function deserializeAws_json1_1DescribeLoaCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazon.awsdx.overture#DirectConnectClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectConnectServerException":
        case "com.amazon.awsdx.overture#DirectConnectServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeLocationsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeLocationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1Locations(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "Locations" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeLocationsCommand = deserializeAws_json1_1DescribeLocationsCommand;
async function deserializeAws_json1_1DescribeLocationsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazon.awsdx.overture#DirectConnectClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectConnectServerException":
        case "com.amazon.awsdx.overture#DirectConnectServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeTagsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeTagsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeTagsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeTagsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeTagsCommand = deserializeAws_json1_1DescribeTagsCommand;
async function deserializeAws_json1_1DescribeTagsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazon.awsdx.overture#DirectConnectClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectConnectServerException":
        case "com.amazon.awsdx.overture#DirectConnectServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeVirtualGatewaysCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeVirtualGatewaysCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1VirtualGateways(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "VirtualGateways" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeVirtualGatewaysCommand = deserializeAws_json1_1DescribeVirtualGatewaysCommand;
async function deserializeAws_json1_1DescribeVirtualGatewaysCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazon.awsdx.overture#DirectConnectClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectConnectServerException":
        case "com.amazon.awsdx.overture#DirectConnectServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeVirtualInterfacesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeVirtualInterfacesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1VirtualInterfaces(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "VirtualInterfaces" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeVirtualInterfacesCommand = deserializeAws_json1_1DescribeVirtualInterfacesCommand;
async function deserializeAws_json1_1DescribeVirtualInterfacesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazon.awsdx.overture#DirectConnectClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectConnectServerException":
        case "com.amazon.awsdx.overture#DirectConnectServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DisassociateConnectionFromLagCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DisassociateConnectionFromLagCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1Connection(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "Connection" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DisassociateConnectionFromLagCommand = deserializeAws_json1_1DisassociateConnectionFromLagCommand;
async function deserializeAws_json1_1DisassociateConnectionFromLagCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazon.awsdx.overture#DirectConnectClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectConnectServerException":
        case "com.amazon.awsdx.overture#DirectConnectServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
        case "DirectConnectClientException":
        case "com.amazon.awsdx.overture#DirectConnectClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectConnectServerException":
        case "com.amazon.awsdx.overture#DirectConnectServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DuplicateTagKeysException":
        case "com.amazon.awsdx.overture#DuplicateTagKeysException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DuplicateTagKeysExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyTagsException":
        case "com.amazon.awsdx.overture#TooManyTagsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
        case "DirectConnectClientException":
        case "com.amazon.awsdx.overture#DirectConnectClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectConnectServerException":
        case "com.amazon.awsdx.overture#DirectConnectServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdateDirectConnectGatewayAssociationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateDirectConnectGatewayAssociationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateDirectConnectGatewayAssociationResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateDirectConnectGatewayAssociationResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateDirectConnectGatewayAssociationCommand = deserializeAws_json1_1UpdateDirectConnectGatewayAssociationCommand;
async function deserializeAws_json1_1UpdateDirectConnectGatewayAssociationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazon.awsdx.overture#DirectConnectClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectConnectServerException":
        case "com.amazon.awsdx.overture#DirectConnectServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdateLagCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateLagCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1Lag(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "Lag" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateLagCommand = deserializeAws_json1_1UpdateLagCommand;
async function deserializeAws_json1_1UpdateLagCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazon.awsdx.overture#DirectConnectClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectConnectServerException":
        case "com.amazon.awsdx.overture#DirectConnectServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdateVirtualInterfaceAttributesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateVirtualInterfaceAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1VirtualInterface(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "VirtualInterface" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateVirtualInterfaceAttributesCommand = deserializeAws_json1_1UpdateVirtualInterfaceAttributesCommand;
async function deserializeAws_json1_1UpdateVirtualInterfaceAttributesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DirectConnectClientException":
        case "com.amazon.awsdx.overture#DirectConnectClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DirectConnectServerException":
        case "com.amazon.awsdx.overture#DirectConnectServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DirectConnectServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
const deserializeAws_json1_1DirectConnectClientExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DirectConnectClientException(body, context);
    const contents = Object.assign({ name: "DirectConnectClientException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1DirectConnectServerExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DirectConnectServerException(body, context);
    const contents = Object.assign({ name: "DirectConnectServerException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1DuplicateTagKeysExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DuplicateTagKeysException(body, context);
    const contents = Object.assign({ name: "DuplicateTagKeysException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1TooManyTagsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TooManyTagsException(body, context);
    const contents = Object.assign({ name: "TooManyTagsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1AcceptDirectConnectGatewayAssociationProposalRequest = (input, context) => {
    const bodyParams = {};
    if (input.associatedGatewayOwnerAccount !== undefined) {
        bodyParams["associatedGatewayOwnerAccount"] =
            input.associatedGatewayOwnerAccount;
    }
    if (input.directConnectGatewayId !== undefined) {
        bodyParams["directConnectGatewayId"] = input.directConnectGatewayId;
    }
    if (input.overrideAllowedPrefixesToDirectConnectGateway !== undefined) {
        bodyParams["overrideAllowedPrefixesToDirectConnectGateway"] = serializeAws_json1_1RouteFilterPrefixList(input.overrideAllowedPrefixesToDirectConnectGateway, context);
    }
    if (input.proposalId !== undefined) {
        bodyParams["proposalId"] = input.proposalId;
    }
    return bodyParams;
};
const serializeAws_json1_1AllocateConnectionOnInterconnectRequest = (input, context) => {
    const bodyParams = {};
    if (input.bandwidth !== undefined) {
        bodyParams["bandwidth"] = input.bandwidth;
    }
    if (input.connectionName !== undefined) {
        bodyParams["connectionName"] = input.connectionName;
    }
    if (input.interconnectId !== undefined) {
        bodyParams["interconnectId"] = input.interconnectId;
    }
    if (input.ownerAccount !== undefined) {
        bodyParams["ownerAccount"] = input.ownerAccount;
    }
    if (input.vlan !== undefined) {
        bodyParams["vlan"] = input.vlan;
    }
    return bodyParams;
};
const serializeAws_json1_1AllocateHostedConnectionRequest = (input, context) => {
    const bodyParams = {};
    if (input.bandwidth !== undefined) {
        bodyParams["bandwidth"] = input.bandwidth;
    }
    if (input.connectionId !== undefined) {
        bodyParams["connectionId"] = input.connectionId;
    }
    if (input.connectionName !== undefined) {
        bodyParams["connectionName"] = input.connectionName;
    }
    if (input.ownerAccount !== undefined) {
        bodyParams["ownerAccount"] = input.ownerAccount;
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_json1_1TagList(input.tags, context);
    }
    if (input.vlan !== undefined) {
        bodyParams["vlan"] = input.vlan;
    }
    return bodyParams;
};
const serializeAws_json1_1AllocatePrivateVirtualInterfaceRequest = (input, context) => {
    const bodyParams = {};
    if (input.connectionId !== undefined) {
        bodyParams["connectionId"] = input.connectionId;
    }
    if (input.newPrivateVirtualInterfaceAllocation !== undefined) {
        bodyParams["newPrivateVirtualInterfaceAllocation"] = serializeAws_json1_1NewPrivateVirtualInterfaceAllocation(input.newPrivateVirtualInterfaceAllocation, context);
    }
    if (input.ownerAccount !== undefined) {
        bodyParams["ownerAccount"] = input.ownerAccount;
    }
    return bodyParams;
};
const serializeAws_json1_1AllocatePublicVirtualInterfaceRequest = (input, context) => {
    const bodyParams = {};
    if (input.connectionId !== undefined) {
        bodyParams["connectionId"] = input.connectionId;
    }
    if (input.newPublicVirtualInterfaceAllocation !== undefined) {
        bodyParams["newPublicVirtualInterfaceAllocation"] = serializeAws_json1_1NewPublicVirtualInterfaceAllocation(input.newPublicVirtualInterfaceAllocation, context);
    }
    if (input.ownerAccount !== undefined) {
        bodyParams["ownerAccount"] = input.ownerAccount;
    }
    return bodyParams;
};
const serializeAws_json1_1AllocateTransitVirtualInterfaceRequest = (input, context) => {
    const bodyParams = {};
    if (input.connectionId !== undefined) {
        bodyParams["connectionId"] = input.connectionId;
    }
    if (input.newTransitVirtualInterfaceAllocation !== undefined) {
        bodyParams["newTransitVirtualInterfaceAllocation"] = serializeAws_json1_1NewTransitVirtualInterfaceAllocation(input.newTransitVirtualInterfaceAllocation, context);
    }
    if (input.ownerAccount !== undefined) {
        bodyParams["ownerAccount"] = input.ownerAccount;
    }
    return bodyParams;
};
const serializeAws_json1_1AssociateConnectionWithLagRequest = (input, context) => {
    const bodyParams = {};
    if (input.connectionId !== undefined) {
        bodyParams["connectionId"] = input.connectionId;
    }
    if (input.lagId !== undefined) {
        bodyParams["lagId"] = input.lagId;
    }
    return bodyParams;
};
const serializeAws_json1_1AssociateHostedConnectionRequest = (input, context) => {
    const bodyParams = {};
    if (input.connectionId !== undefined) {
        bodyParams["connectionId"] = input.connectionId;
    }
    if (input.parentConnectionId !== undefined) {
        bodyParams["parentConnectionId"] = input.parentConnectionId;
    }
    return bodyParams;
};
const serializeAws_json1_1AssociateVirtualInterfaceRequest = (input, context) => {
    const bodyParams = {};
    if (input.connectionId !== undefined) {
        bodyParams["connectionId"] = input.connectionId;
    }
    if (input.virtualInterfaceId !== undefined) {
        bodyParams["virtualInterfaceId"] = input.virtualInterfaceId;
    }
    return bodyParams;
};
const serializeAws_json1_1ConfirmConnectionRequest = (input, context) => {
    const bodyParams = {};
    if (input.connectionId !== undefined) {
        bodyParams["connectionId"] = input.connectionId;
    }
    return bodyParams;
};
const serializeAws_json1_1ConfirmPrivateVirtualInterfaceRequest = (input, context) => {
    const bodyParams = {};
    if (input.directConnectGatewayId !== undefined) {
        bodyParams["directConnectGatewayId"] = input.directConnectGatewayId;
    }
    if (input.virtualGatewayId !== undefined) {
        bodyParams["virtualGatewayId"] = input.virtualGatewayId;
    }
    if (input.virtualInterfaceId !== undefined) {
        bodyParams["virtualInterfaceId"] = input.virtualInterfaceId;
    }
    return bodyParams;
};
const serializeAws_json1_1ConfirmPublicVirtualInterfaceRequest = (input, context) => {
    const bodyParams = {};
    if (input.virtualInterfaceId !== undefined) {
        bodyParams["virtualInterfaceId"] = input.virtualInterfaceId;
    }
    return bodyParams;
};
const serializeAws_json1_1ConfirmTransitVirtualInterfaceRequest = (input, context) => {
    const bodyParams = {};
    if (input.directConnectGatewayId !== undefined) {
        bodyParams["directConnectGatewayId"] = input.directConnectGatewayId;
    }
    if (input.virtualInterfaceId !== undefined) {
        bodyParams["virtualInterfaceId"] = input.virtualInterfaceId;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateBGPPeerRequest = (input, context) => {
    const bodyParams = {};
    if (input.newBGPPeer !== undefined) {
        bodyParams["newBGPPeer"] = serializeAws_json1_1NewBGPPeer(input.newBGPPeer, context);
    }
    if (input.virtualInterfaceId !== undefined) {
        bodyParams["virtualInterfaceId"] = input.virtualInterfaceId;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateConnectionRequest = (input, context) => {
    const bodyParams = {};
    if (input.bandwidth !== undefined) {
        bodyParams["bandwidth"] = input.bandwidth;
    }
    if (input.connectionName !== undefined) {
        bodyParams["connectionName"] = input.connectionName;
    }
    if (input.lagId !== undefined) {
        bodyParams["lagId"] = input.lagId;
    }
    if (input.location !== undefined) {
        bodyParams["location"] = input.location;
    }
    if (input.providerName !== undefined) {
        bodyParams["providerName"] = input.providerName;
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_json1_1TagList(input.tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateDirectConnectGatewayAssociationProposalRequest = (input, context) => {
    const bodyParams = {};
    if (input.addAllowedPrefixesToDirectConnectGateway !== undefined) {
        bodyParams["addAllowedPrefixesToDirectConnectGateway"] = serializeAws_json1_1RouteFilterPrefixList(input.addAllowedPrefixesToDirectConnectGateway, context);
    }
    if (input.directConnectGatewayId !== undefined) {
        bodyParams["directConnectGatewayId"] = input.directConnectGatewayId;
    }
    if (input.directConnectGatewayOwnerAccount !== undefined) {
        bodyParams["directConnectGatewayOwnerAccount"] =
            input.directConnectGatewayOwnerAccount;
    }
    if (input.gatewayId !== undefined) {
        bodyParams["gatewayId"] = input.gatewayId;
    }
    if (input.removeAllowedPrefixesToDirectConnectGateway !== undefined) {
        bodyParams["removeAllowedPrefixesToDirectConnectGateway"] = serializeAws_json1_1RouteFilterPrefixList(input.removeAllowedPrefixesToDirectConnectGateway, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateDirectConnectGatewayAssociationRequest = (input, context) => {
    const bodyParams = {};
    if (input.addAllowedPrefixesToDirectConnectGateway !== undefined) {
        bodyParams["addAllowedPrefixesToDirectConnectGateway"] = serializeAws_json1_1RouteFilterPrefixList(input.addAllowedPrefixesToDirectConnectGateway, context);
    }
    if (input.directConnectGatewayId !== undefined) {
        bodyParams["directConnectGatewayId"] = input.directConnectGatewayId;
    }
    if (input.gatewayId !== undefined) {
        bodyParams["gatewayId"] = input.gatewayId;
    }
    if (input.virtualGatewayId !== undefined) {
        bodyParams["virtualGatewayId"] = input.virtualGatewayId;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateDirectConnectGatewayRequest = (input, context) => {
    const bodyParams = {};
    if (input.amazonSideAsn !== undefined) {
        bodyParams["amazonSideAsn"] = input.amazonSideAsn;
    }
    if (input.directConnectGatewayName !== undefined) {
        bodyParams["directConnectGatewayName"] = input.directConnectGatewayName;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateInterconnectRequest = (input, context) => {
    const bodyParams = {};
    if (input.bandwidth !== undefined) {
        bodyParams["bandwidth"] = input.bandwidth;
    }
    if (input.interconnectName !== undefined) {
        bodyParams["interconnectName"] = input.interconnectName;
    }
    if (input.lagId !== undefined) {
        bodyParams["lagId"] = input.lagId;
    }
    if (input.location !== undefined) {
        bodyParams["location"] = input.location;
    }
    if (input.providerName !== undefined) {
        bodyParams["providerName"] = input.providerName;
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_json1_1TagList(input.tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateLagRequest = (input, context) => {
    const bodyParams = {};
    if (input.childConnectionTags !== undefined) {
        bodyParams["childConnectionTags"] = serializeAws_json1_1TagList(input.childConnectionTags, context);
    }
    if (input.connectionId !== undefined) {
        bodyParams["connectionId"] = input.connectionId;
    }
    if (input.connectionsBandwidth !== undefined) {
        bodyParams["connectionsBandwidth"] = input.connectionsBandwidth;
    }
    if (input.lagName !== undefined) {
        bodyParams["lagName"] = input.lagName;
    }
    if (input.location !== undefined) {
        bodyParams["location"] = input.location;
    }
    if (input.numberOfConnections !== undefined) {
        bodyParams["numberOfConnections"] = input.numberOfConnections;
    }
    if (input.providerName !== undefined) {
        bodyParams["providerName"] = input.providerName;
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_json1_1TagList(input.tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreatePrivateVirtualInterfaceRequest = (input, context) => {
    const bodyParams = {};
    if (input.connectionId !== undefined) {
        bodyParams["connectionId"] = input.connectionId;
    }
    if (input.newPrivateVirtualInterface !== undefined) {
        bodyParams["newPrivateVirtualInterface"] = serializeAws_json1_1NewPrivateVirtualInterface(input.newPrivateVirtualInterface, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreatePublicVirtualInterfaceRequest = (input, context) => {
    const bodyParams = {};
    if (input.connectionId !== undefined) {
        bodyParams["connectionId"] = input.connectionId;
    }
    if (input.newPublicVirtualInterface !== undefined) {
        bodyParams["newPublicVirtualInterface"] = serializeAws_json1_1NewPublicVirtualInterface(input.newPublicVirtualInterface, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateTransitVirtualInterfaceRequest = (input, context) => {
    const bodyParams = {};
    if (input.connectionId !== undefined) {
        bodyParams["connectionId"] = input.connectionId;
    }
    if (input.newTransitVirtualInterface !== undefined) {
        bodyParams["newTransitVirtualInterface"] = serializeAws_json1_1NewTransitVirtualInterface(input.newTransitVirtualInterface, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteBGPPeerRequest = (input, context) => {
    const bodyParams = {};
    if (input.asn !== undefined) {
        bodyParams["asn"] = input.asn;
    }
    if (input.bgpPeerId !== undefined) {
        bodyParams["bgpPeerId"] = input.bgpPeerId;
    }
    if (input.customerAddress !== undefined) {
        bodyParams["customerAddress"] = input.customerAddress;
    }
    if (input.virtualInterfaceId !== undefined) {
        bodyParams["virtualInterfaceId"] = input.virtualInterfaceId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteConnectionRequest = (input, context) => {
    const bodyParams = {};
    if (input.connectionId !== undefined) {
        bodyParams["connectionId"] = input.connectionId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteDirectConnectGatewayAssociationProposalRequest = (input, context) => {
    const bodyParams = {};
    if (input.proposalId !== undefined) {
        bodyParams["proposalId"] = input.proposalId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteDirectConnectGatewayAssociationRequest = (input, context) => {
    const bodyParams = {};
    if (input.associationId !== undefined) {
        bodyParams["associationId"] = input.associationId;
    }
    if (input.directConnectGatewayId !== undefined) {
        bodyParams["directConnectGatewayId"] = input.directConnectGatewayId;
    }
    if (input.virtualGatewayId !== undefined) {
        bodyParams["virtualGatewayId"] = input.virtualGatewayId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteDirectConnectGatewayRequest = (input, context) => {
    const bodyParams = {};
    if (input.directConnectGatewayId !== undefined) {
        bodyParams["directConnectGatewayId"] = input.directConnectGatewayId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteInterconnectRequest = (input, context) => {
    const bodyParams = {};
    if (input.interconnectId !== undefined) {
        bodyParams["interconnectId"] = input.interconnectId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteLagRequest = (input, context) => {
    const bodyParams = {};
    if (input.lagId !== undefined) {
        bodyParams["lagId"] = input.lagId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteVirtualInterfaceRequest = (input, context) => {
    const bodyParams = {};
    if (input.virtualInterfaceId !== undefined) {
        bodyParams["virtualInterfaceId"] = input.virtualInterfaceId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeConnectionLoaRequest = (input, context) => {
    const bodyParams = {};
    if (input.connectionId !== undefined) {
        bodyParams["connectionId"] = input.connectionId;
    }
    if (input.loaContentType !== undefined) {
        bodyParams["loaContentType"] = input.loaContentType;
    }
    if (input.providerName !== undefined) {
        bodyParams["providerName"] = input.providerName;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeConnectionsOnInterconnectRequest = (input, context) => {
    const bodyParams = {};
    if (input.interconnectId !== undefined) {
        bodyParams["interconnectId"] = input.interconnectId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeConnectionsRequest = (input, context) => {
    const bodyParams = {};
    if (input.connectionId !== undefined) {
        bodyParams["connectionId"] = input.connectionId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeDirectConnectGatewayAssociationProposalsRequest = (input, context) => {
    const bodyParams = {};
    if (input.associatedGatewayId !== undefined) {
        bodyParams["associatedGatewayId"] = input.associatedGatewayId;
    }
    if (input.directConnectGatewayId !== undefined) {
        bodyParams["directConnectGatewayId"] = input.directConnectGatewayId;
    }
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.proposalId !== undefined) {
        bodyParams["proposalId"] = input.proposalId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeDirectConnectGatewayAssociationsRequest = (input, context) => {
    const bodyParams = {};
    if (input.associatedGatewayId !== undefined) {
        bodyParams["associatedGatewayId"] = input.associatedGatewayId;
    }
    if (input.associationId !== undefined) {
        bodyParams["associationId"] = input.associationId;
    }
    if (input.directConnectGatewayId !== undefined) {
        bodyParams["directConnectGatewayId"] = input.directConnectGatewayId;
    }
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.virtualGatewayId !== undefined) {
        bodyParams["virtualGatewayId"] = input.virtualGatewayId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeDirectConnectGatewayAttachmentsRequest = (input, context) => {
    const bodyParams = {};
    if (input.directConnectGatewayId !== undefined) {
        bodyParams["directConnectGatewayId"] = input.directConnectGatewayId;
    }
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.virtualInterfaceId !== undefined) {
        bodyParams["virtualInterfaceId"] = input.virtualInterfaceId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeDirectConnectGatewaysRequest = (input, context) => {
    const bodyParams = {};
    if (input.directConnectGatewayId !== undefined) {
        bodyParams["directConnectGatewayId"] = input.directConnectGatewayId;
    }
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeHostedConnectionsRequest = (input, context) => {
    const bodyParams = {};
    if (input.connectionId !== undefined) {
        bodyParams["connectionId"] = input.connectionId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeInterconnectLoaRequest = (input, context) => {
    const bodyParams = {};
    if (input.interconnectId !== undefined) {
        bodyParams["interconnectId"] = input.interconnectId;
    }
    if (input.loaContentType !== undefined) {
        bodyParams["loaContentType"] = input.loaContentType;
    }
    if (input.providerName !== undefined) {
        bodyParams["providerName"] = input.providerName;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeInterconnectsRequest = (input, context) => {
    const bodyParams = {};
    if (input.interconnectId !== undefined) {
        bodyParams["interconnectId"] = input.interconnectId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeLagsRequest = (input, context) => {
    const bodyParams = {};
    if (input.lagId !== undefined) {
        bodyParams["lagId"] = input.lagId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeLoaRequest = (input, context) => {
    const bodyParams = {};
    if (input.connectionId !== undefined) {
        bodyParams["connectionId"] = input.connectionId;
    }
    if (input.loaContentType !== undefined) {
        bodyParams["loaContentType"] = input.loaContentType;
    }
    if (input.providerName !== undefined) {
        bodyParams["providerName"] = input.providerName;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeTagsRequest = (input, context) => {
    const bodyParams = {};
    if (input.resourceArns !== undefined) {
        bodyParams["resourceArns"] = serializeAws_json1_1ResourceArnList(input.resourceArns, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeVirtualInterfacesRequest = (input, context) => {
    const bodyParams = {};
    if (input.connectionId !== undefined) {
        bodyParams["connectionId"] = input.connectionId;
    }
    if (input.virtualInterfaceId !== undefined) {
        bodyParams["virtualInterfaceId"] = input.virtualInterfaceId;
    }
    return bodyParams;
};
const serializeAws_json1_1DisassociateConnectionFromLagRequest = (input, context) => {
    const bodyParams = {};
    if (input.connectionId !== undefined) {
        bodyParams["connectionId"] = input.connectionId;
    }
    if (input.lagId !== undefined) {
        bodyParams["lagId"] = input.lagId;
    }
    return bodyParams;
};
const serializeAws_json1_1NewBGPPeer = (input, context) => {
    const bodyParams = {};
    if (input.addressFamily !== undefined) {
        bodyParams["addressFamily"] = input.addressFamily;
    }
    if (input.amazonAddress !== undefined) {
        bodyParams["amazonAddress"] = input.amazonAddress;
    }
    if (input.asn !== undefined) {
        bodyParams["asn"] = input.asn;
    }
    if (input.authKey !== undefined) {
        bodyParams["authKey"] = input.authKey;
    }
    if (input.customerAddress !== undefined) {
        bodyParams["customerAddress"] = input.customerAddress;
    }
    return bodyParams;
};
const serializeAws_json1_1NewPrivateVirtualInterface = (input, context) => {
    const bodyParams = {};
    if (input.addressFamily !== undefined) {
        bodyParams["addressFamily"] = input.addressFamily;
    }
    if (input.amazonAddress !== undefined) {
        bodyParams["amazonAddress"] = input.amazonAddress;
    }
    if (input.asn !== undefined) {
        bodyParams["asn"] = input.asn;
    }
    if (input.authKey !== undefined) {
        bodyParams["authKey"] = input.authKey;
    }
    if (input.customerAddress !== undefined) {
        bodyParams["customerAddress"] = input.customerAddress;
    }
    if (input.directConnectGatewayId !== undefined) {
        bodyParams["directConnectGatewayId"] = input.directConnectGatewayId;
    }
    if (input.mtu !== undefined) {
        bodyParams["mtu"] = input.mtu;
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_json1_1TagList(input.tags, context);
    }
    if (input.virtualGatewayId !== undefined) {
        bodyParams["virtualGatewayId"] = input.virtualGatewayId;
    }
    if (input.virtualInterfaceName !== undefined) {
        bodyParams["virtualInterfaceName"] = input.virtualInterfaceName;
    }
    if (input.vlan !== undefined) {
        bodyParams["vlan"] = input.vlan;
    }
    return bodyParams;
};
const serializeAws_json1_1NewPrivateVirtualInterfaceAllocation = (input, context) => {
    const bodyParams = {};
    if (input.addressFamily !== undefined) {
        bodyParams["addressFamily"] = input.addressFamily;
    }
    if (input.amazonAddress !== undefined) {
        bodyParams["amazonAddress"] = input.amazonAddress;
    }
    if (input.asn !== undefined) {
        bodyParams["asn"] = input.asn;
    }
    if (input.authKey !== undefined) {
        bodyParams["authKey"] = input.authKey;
    }
    if (input.customerAddress !== undefined) {
        bodyParams["customerAddress"] = input.customerAddress;
    }
    if (input.mtu !== undefined) {
        bodyParams["mtu"] = input.mtu;
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_json1_1TagList(input.tags, context);
    }
    if (input.virtualInterfaceName !== undefined) {
        bodyParams["virtualInterfaceName"] = input.virtualInterfaceName;
    }
    if (input.vlan !== undefined) {
        bodyParams["vlan"] = input.vlan;
    }
    return bodyParams;
};
const serializeAws_json1_1NewPublicVirtualInterface = (input, context) => {
    const bodyParams = {};
    if (input.addressFamily !== undefined) {
        bodyParams["addressFamily"] = input.addressFamily;
    }
    if (input.amazonAddress !== undefined) {
        bodyParams["amazonAddress"] = input.amazonAddress;
    }
    if (input.asn !== undefined) {
        bodyParams["asn"] = input.asn;
    }
    if (input.authKey !== undefined) {
        bodyParams["authKey"] = input.authKey;
    }
    if (input.customerAddress !== undefined) {
        bodyParams["customerAddress"] = input.customerAddress;
    }
    if (input.routeFilterPrefixes !== undefined) {
        bodyParams["routeFilterPrefixes"] = serializeAws_json1_1RouteFilterPrefixList(input.routeFilterPrefixes, context);
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_json1_1TagList(input.tags, context);
    }
    if (input.virtualInterfaceName !== undefined) {
        bodyParams["virtualInterfaceName"] = input.virtualInterfaceName;
    }
    if (input.vlan !== undefined) {
        bodyParams["vlan"] = input.vlan;
    }
    return bodyParams;
};
const serializeAws_json1_1NewPublicVirtualInterfaceAllocation = (input, context) => {
    const bodyParams = {};
    if (input.addressFamily !== undefined) {
        bodyParams["addressFamily"] = input.addressFamily;
    }
    if (input.amazonAddress !== undefined) {
        bodyParams["amazonAddress"] = input.amazonAddress;
    }
    if (input.asn !== undefined) {
        bodyParams["asn"] = input.asn;
    }
    if (input.authKey !== undefined) {
        bodyParams["authKey"] = input.authKey;
    }
    if (input.customerAddress !== undefined) {
        bodyParams["customerAddress"] = input.customerAddress;
    }
    if (input.routeFilterPrefixes !== undefined) {
        bodyParams["routeFilterPrefixes"] = serializeAws_json1_1RouteFilterPrefixList(input.routeFilterPrefixes, context);
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_json1_1TagList(input.tags, context);
    }
    if (input.virtualInterfaceName !== undefined) {
        bodyParams["virtualInterfaceName"] = input.virtualInterfaceName;
    }
    if (input.vlan !== undefined) {
        bodyParams["vlan"] = input.vlan;
    }
    return bodyParams;
};
const serializeAws_json1_1NewTransitVirtualInterface = (input, context) => {
    const bodyParams = {};
    if (input.addressFamily !== undefined) {
        bodyParams["addressFamily"] = input.addressFamily;
    }
    if (input.amazonAddress !== undefined) {
        bodyParams["amazonAddress"] = input.amazonAddress;
    }
    if (input.asn !== undefined) {
        bodyParams["asn"] = input.asn;
    }
    if (input.authKey !== undefined) {
        bodyParams["authKey"] = input.authKey;
    }
    if (input.customerAddress !== undefined) {
        bodyParams["customerAddress"] = input.customerAddress;
    }
    if (input.directConnectGatewayId !== undefined) {
        bodyParams["directConnectGatewayId"] = input.directConnectGatewayId;
    }
    if (input.mtu !== undefined) {
        bodyParams["mtu"] = input.mtu;
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_json1_1TagList(input.tags, context);
    }
    if (input.virtualInterfaceName !== undefined) {
        bodyParams["virtualInterfaceName"] = input.virtualInterfaceName;
    }
    if (input.vlan !== undefined) {
        bodyParams["vlan"] = input.vlan;
    }
    return bodyParams;
};
const serializeAws_json1_1NewTransitVirtualInterfaceAllocation = (input, context) => {
    const bodyParams = {};
    if (input.addressFamily !== undefined) {
        bodyParams["addressFamily"] = input.addressFamily;
    }
    if (input.amazonAddress !== undefined) {
        bodyParams["amazonAddress"] = input.amazonAddress;
    }
    if (input.asn !== undefined) {
        bodyParams["asn"] = input.asn;
    }
    if (input.authKey !== undefined) {
        bodyParams["authKey"] = input.authKey;
    }
    if (input.customerAddress !== undefined) {
        bodyParams["customerAddress"] = input.customerAddress;
    }
    if (input.mtu !== undefined) {
        bodyParams["mtu"] = input.mtu;
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_json1_1TagList(input.tags, context);
    }
    if (input.virtualInterfaceName !== undefined) {
        bodyParams["virtualInterfaceName"] = input.virtualInterfaceName;
    }
    if (input.vlan !== undefined) {
        bodyParams["vlan"] = input.vlan;
    }
    return bodyParams;
};
const serializeAws_json1_1ResourceArnList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1RouteFilterPrefix = (input, context) => {
    const bodyParams = {};
    if (input.cidr !== undefined) {
        bodyParams["cidr"] = input.cidr;
    }
    return bodyParams;
};
const serializeAws_json1_1RouteFilterPrefixList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1RouteFilterPrefix(entry, context));
    }
    return contents;
};
const serializeAws_json1_1Tag = (input, context) => {
    const bodyParams = {};
    if (input.key !== undefined) {
        bodyParams["key"] = input.key;
    }
    if (input.value !== undefined) {
        bodyParams["value"] = input.value;
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
    if (input.resourceArn !== undefined) {
        bodyParams["resourceArn"] = input.resourceArn;
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_json1_1TagList(input.tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UntagResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.resourceArn !== undefined) {
        bodyParams["resourceArn"] = input.resourceArn;
    }
    if (input.tagKeys !== undefined) {
        bodyParams["tagKeys"] = serializeAws_json1_1TagKeyList(input.tagKeys, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateDirectConnectGatewayAssociationRequest = (input, context) => {
    const bodyParams = {};
    if (input.addAllowedPrefixesToDirectConnectGateway !== undefined) {
        bodyParams["addAllowedPrefixesToDirectConnectGateway"] = serializeAws_json1_1RouteFilterPrefixList(input.addAllowedPrefixesToDirectConnectGateway, context);
    }
    if (input.associationId !== undefined) {
        bodyParams["associationId"] = input.associationId;
    }
    if (input.removeAllowedPrefixesToDirectConnectGateway !== undefined) {
        bodyParams["removeAllowedPrefixesToDirectConnectGateway"] = serializeAws_json1_1RouteFilterPrefixList(input.removeAllowedPrefixesToDirectConnectGateway, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateLagRequest = (input, context) => {
    const bodyParams = {};
    if (input.lagId !== undefined) {
        bodyParams["lagId"] = input.lagId;
    }
    if (input.lagName !== undefined) {
        bodyParams["lagName"] = input.lagName;
    }
    if (input.minimumLinks !== undefined) {
        bodyParams["minimumLinks"] = input.minimumLinks;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateVirtualInterfaceAttributesRequest = (input, context) => {
    const bodyParams = {};
    if (input.mtu !== undefined) {
        bodyParams["mtu"] = input.mtu;
    }
    if (input.virtualInterfaceId !== undefined) {
        bodyParams["virtualInterfaceId"] = input.virtualInterfaceId;
    }
    return bodyParams;
};
const deserializeAws_json1_1AcceptDirectConnectGatewayAssociationProposalResult = (output, context) => {
    let contents = {
        __type: "AcceptDirectConnectGatewayAssociationProposalResult",
        directConnectGatewayAssociation: undefined
    };
    if (output.directConnectGatewayAssociation !== undefined &&
        output.directConnectGatewayAssociation !== null) {
        contents.directConnectGatewayAssociation = deserializeAws_json1_1DirectConnectGatewayAssociation(output.directConnectGatewayAssociation, context);
    }
    return contents;
};
const deserializeAws_json1_1AllocateTransitVirtualInterfaceResult = (output, context) => {
    let contents = {
        __type: "AllocateTransitVirtualInterfaceResult",
        virtualInterface: undefined
    };
    if (output.virtualInterface !== undefined &&
        output.virtualInterface !== null) {
        contents.virtualInterface = deserializeAws_json1_1VirtualInterface(output.virtualInterface, context);
    }
    return contents;
};
const deserializeAws_json1_1AssociatedGateway = (output, context) => {
    let contents = {
        __type: "AssociatedGateway",
        id: undefined,
        ownerAccount: undefined,
        region: undefined,
        type: undefined
    };
    if (output.id !== undefined && output.id !== null) {
        contents.id = output.id;
    }
    if (output.ownerAccount !== undefined && output.ownerAccount !== null) {
        contents.ownerAccount = output.ownerAccount;
    }
    if (output.region !== undefined && output.region !== null) {
        contents.region = output.region;
    }
    if (output.type !== undefined && output.type !== null) {
        contents.type = output.type;
    }
    return contents;
};
const deserializeAws_json1_1AvailablePortSpeeds = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1BGPPeer = (output, context) => {
    let contents = {
        __type: "BGPPeer",
        addressFamily: undefined,
        amazonAddress: undefined,
        asn: undefined,
        authKey: undefined,
        awsDeviceV2: undefined,
        bgpPeerId: undefined,
        bgpPeerState: undefined,
        bgpStatus: undefined,
        customerAddress: undefined
    };
    if (output.addressFamily !== undefined && output.addressFamily !== null) {
        contents.addressFamily = output.addressFamily;
    }
    if (output.amazonAddress !== undefined && output.amazonAddress !== null) {
        contents.amazonAddress = output.amazonAddress;
    }
    if (output.asn !== undefined && output.asn !== null) {
        contents.asn = output.asn;
    }
    if (output.authKey !== undefined && output.authKey !== null) {
        contents.authKey = output.authKey;
    }
    if (output.awsDeviceV2 !== undefined && output.awsDeviceV2 !== null) {
        contents.awsDeviceV2 = output.awsDeviceV2;
    }
    if (output.bgpPeerId !== undefined && output.bgpPeerId !== null) {
        contents.bgpPeerId = output.bgpPeerId;
    }
    if (output.bgpPeerState !== undefined && output.bgpPeerState !== null) {
        contents.bgpPeerState = output.bgpPeerState;
    }
    if (output.bgpStatus !== undefined && output.bgpStatus !== null) {
        contents.bgpStatus = output.bgpStatus;
    }
    if (output.customerAddress !== undefined && output.customerAddress !== null) {
        contents.customerAddress = output.customerAddress;
    }
    return contents;
};
const deserializeAws_json1_1BGPPeerList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1BGPPeer(entry, context));
};
const deserializeAws_json1_1ConfirmConnectionResponse = (output, context) => {
    let contents = {
        __type: "ConfirmConnectionResponse",
        connectionState: undefined
    };
    if (output.connectionState !== undefined && output.connectionState !== null) {
        contents.connectionState = output.connectionState;
    }
    return contents;
};
const deserializeAws_json1_1ConfirmPrivateVirtualInterfaceResponse = (output, context) => {
    let contents = {
        __type: "ConfirmPrivateVirtualInterfaceResponse",
        virtualInterfaceState: undefined
    };
    if (output.virtualInterfaceState !== undefined &&
        output.virtualInterfaceState !== null) {
        contents.virtualInterfaceState = output.virtualInterfaceState;
    }
    return contents;
};
const deserializeAws_json1_1ConfirmPublicVirtualInterfaceResponse = (output, context) => {
    let contents = {
        __type: "ConfirmPublicVirtualInterfaceResponse",
        virtualInterfaceState: undefined
    };
    if (output.virtualInterfaceState !== undefined &&
        output.virtualInterfaceState !== null) {
        contents.virtualInterfaceState = output.virtualInterfaceState;
    }
    return contents;
};
const deserializeAws_json1_1ConfirmTransitVirtualInterfaceResponse = (output, context) => {
    let contents = {
        __type: "ConfirmTransitVirtualInterfaceResponse",
        virtualInterfaceState: undefined
    };
    if (output.virtualInterfaceState !== undefined &&
        output.virtualInterfaceState !== null) {
        contents.virtualInterfaceState = output.virtualInterfaceState;
    }
    return contents;
};
const deserializeAws_json1_1Connection = (output, context) => {
    let contents = {
        __type: "Connection",
        awsDevice: undefined,
        awsDeviceV2: undefined,
        bandwidth: undefined,
        connectionId: undefined,
        connectionName: undefined,
        connectionState: undefined,
        hasLogicalRedundancy: undefined,
        jumboFrameCapable: undefined,
        lagId: undefined,
        loaIssueTime: undefined,
        location: undefined,
        ownerAccount: undefined,
        partnerName: undefined,
        providerName: undefined,
        region: undefined,
        tags: undefined,
        vlan: undefined
    };
    if (output.awsDevice !== undefined && output.awsDevice !== null) {
        contents.awsDevice = output.awsDevice;
    }
    if (output.awsDeviceV2 !== undefined && output.awsDeviceV2 !== null) {
        contents.awsDeviceV2 = output.awsDeviceV2;
    }
    if (output.bandwidth !== undefined && output.bandwidth !== null) {
        contents.bandwidth = output.bandwidth;
    }
    if (output.connectionId !== undefined && output.connectionId !== null) {
        contents.connectionId = output.connectionId;
    }
    if (output.connectionName !== undefined && output.connectionName !== null) {
        contents.connectionName = output.connectionName;
    }
    if (output.connectionState !== undefined && output.connectionState !== null) {
        contents.connectionState = output.connectionState;
    }
    if (output.hasLogicalRedundancy !== undefined &&
        output.hasLogicalRedundancy !== null) {
        contents.hasLogicalRedundancy = output.hasLogicalRedundancy;
    }
    if (output.jumboFrameCapable !== undefined &&
        output.jumboFrameCapable !== null) {
        contents.jumboFrameCapable = output.jumboFrameCapable;
    }
    if (output.lagId !== undefined && output.lagId !== null) {
        contents.lagId = output.lagId;
    }
    if (output.loaIssueTime !== undefined && output.loaIssueTime !== null) {
        contents.loaIssueTime = new Date(Math.round(output.loaIssueTime * 1000));
    }
    if (output.location !== undefined && output.location !== null) {
        contents.location = output.location;
    }
    if (output.ownerAccount !== undefined && output.ownerAccount !== null) {
        contents.ownerAccount = output.ownerAccount;
    }
    if (output.partnerName !== undefined && output.partnerName !== null) {
        contents.partnerName = output.partnerName;
    }
    if (output.providerName !== undefined && output.providerName !== null) {
        contents.providerName = output.providerName;
    }
    if (output.region !== undefined && output.region !== null) {
        contents.region = output.region;
    }
    if (output.tags !== undefined && output.tags !== null) {
        contents.tags = deserializeAws_json1_1TagList(output.tags, context);
    }
    if (output.vlan !== undefined && output.vlan !== null) {
        contents.vlan = output.vlan;
    }
    return contents;
};
const deserializeAws_json1_1ConnectionList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Connection(entry, context));
};
const deserializeAws_json1_1Connections = (output, context) => {
    let contents = {
        __type: "Connections",
        connections: undefined
    };
    if (output.connections !== undefined && output.connections !== null) {
        contents.connections = deserializeAws_json1_1ConnectionList(output.connections, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateBGPPeerResponse = (output, context) => {
    let contents = {
        __type: "CreateBGPPeerResponse",
        virtualInterface: undefined
    };
    if (output.virtualInterface !== undefined &&
        output.virtualInterface !== null) {
        contents.virtualInterface = deserializeAws_json1_1VirtualInterface(output.virtualInterface, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateDirectConnectGatewayAssociationProposalResult = (output, context) => {
    let contents = {
        __type: "CreateDirectConnectGatewayAssociationProposalResult",
        directConnectGatewayAssociationProposal: undefined
    };
    if (output.directConnectGatewayAssociationProposal !== undefined &&
        output.directConnectGatewayAssociationProposal !== null) {
        contents.directConnectGatewayAssociationProposal = deserializeAws_json1_1DirectConnectGatewayAssociationProposal(output.directConnectGatewayAssociationProposal, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateDirectConnectGatewayAssociationResult = (output, context) => {
    let contents = {
        __type: "CreateDirectConnectGatewayAssociationResult",
        directConnectGatewayAssociation: undefined
    };
    if (output.directConnectGatewayAssociation !== undefined &&
        output.directConnectGatewayAssociation !== null) {
        contents.directConnectGatewayAssociation = deserializeAws_json1_1DirectConnectGatewayAssociation(output.directConnectGatewayAssociation, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateDirectConnectGatewayResult = (output, context) => {
    let contents = {
        __type: "CreateDirectConnectGatewayResult",
        directConnectGateway: undefined
    };
    if (output.directConnectGateway !== undefined &&
        output.directConnectGateway !== null) {
        contents.directConnectGateway = deserializeAws_json1_1DirectConnectGateway(output.directConnectGateway, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateTransitVirtualInterfaceResult = (output, context) => {
    let contents = {
        __type: "CreateTransitVirtualInterfaceResult",
        virtualInterface: undefined
    };
    if (output.virtualInterface !== undefined &&
        output.virtualInterface !== null) {
        contents.virtualInterface = deserializeAws_json1_1VirtualInterface(output.virtualInterface, context);
    }
    return contents;
};
const deserializeAws_json1_1DeleteBGPPeerResponse = (output, context) => {
    let contents = {
        __type: "DeleteBGPPeerResponse",
        virtualInterface: undefined
    };
    if (output.virtualInterface !== undefined &&
        output.virtualInterface !== null) {
        contents.virtualInterface = deserializeAws_json1_1VirtualInterface(output.virtualInterface, context);
    }
    return contents;
};
const deserializeAws_json1_1DeleteDirectConnectGatewayAssociationProposalResult = (output, context) => {
    let contents = {
        __type: "DeleteDirectConnectGatewayAssociationProposalResult",
        directConnectGatewayAssociationProposal: undefined
    };
    if (output.directConnectGatewayAssociationProposal !== undefined &&
        output.directConnectGatewayAssociationProposal !== null) {
        contents.directConnectGatewayAssociationProposal = deserializeAws_json1_1DirectConnectGatewayAssociationProposal(output.directConnectGatewayAssociationProposal, context);
    }
    return contents;
};
const deserializeAws_json1_1DeleteDirectConnectGatewayAssociationResult = (output, context) => {
    let contents = {
        __type: "DeleteDirectConnectGatewayAssociationResult",
        directConnectGatewayAssociation: undefined
    };
    if (output.directConnectGatewayAssociation !== undefined &&
        output.directConnectGatewayAssociation !== null) {
        contents.directConnectGatewayAssociation = deserializeAws_json1_1DirectConnectGatewayAssociation(output.directConnectGatewayAssociation, context);
    }
    return contents;
};
const deserializeAws_json1_1DeleteDirectConnectGatewayResult = (output, context) => {
    let contents = {
        __type: "DeleteDirectConnectGatewayResult",
        directConnectGateway: undefined
    };
    if (output.directConnectGateway !== undefined &&
        output.directConnectGateway !== null) {
        contents.directConnectGateway = deserializeAws_json1_1DirectConnectGateway(output.directConnectGateway, context);
    }
    return contents;
};
const deserializeAws_json1_1DeleteInterconnectResponse = (output, context) => {
    let contents = {
        __type: "DeleteInterconnectResponse",
        interconnectState: undefined
    };
    if (output.interconnectState !== undefined &&
        output.interconnectState !== null) {
        contents.interconnectState = output.interconnectState;
    }
    return contents;
};
const deserializeAws_json1_1DeleteVirtualInterfaceResponse = (output, context) => {
    let contents = {
        __type: "DeleteVirtualInterfaceResponse",
        virtualInterfaceState: undefined
    };
    if (output.virtualInterfaceState !== undefined &&
        output.virtualInterfaceState !== null) {
        contents.virtualInterfaceState = output.virtualInterfaceState;
    }
    return contents;
};
const deserializeAws_json1_1DescribeConnectionLoaResponse = (output, context) => {
    let contents = {
        __type: "DescribeConnectionLoaResponse",
        loa: undefined
    };
    if (output.loa !== undefined && output.loa !== null) {
        contents.loa = deserializeAws_json1_1Loa(output.loa, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeDirectConnectGatewayAssociationProposalsResult = (output, context) => {
    let contents = {
        __type: "DescribeDirectConnectGatewayAssociationProposalsResult",
        directConnectGatewayAssociationProposals: undefined,
        nextToken: undefined
    };
    if (output.directConnectGatewayAssociationProposals !== undefined &&
        output.directConnectGatewayAssociationProposals !== null) {
        contents.directConnectGatewayAssociationProposals = deserializeAws_json1_1DirectConnectGatewayAssociationProposalList(output.directConnectGatewayAssociationProposals, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribeDirectConnectGatewayAssociationsResult = (output, context) => {
    let contents = {
        __type: "DescribeDirectConnectGatewayAssociationsResult",
        directConnectGatewayAssociations: undefined,
        nextToken: undefined
    };
    if (output.directConnectGatewayAssociations !== undefined &&
        output.directConnectGatewayAssociations !== null) {
        contents.directConnectGatewayAssociations = deserializeAws_json1_1DirectConnectGatewayAssociationList(output.directConnectGatewayAssociations, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribeDirectConnectGatewayAttachmentsResult = (output, context) => {
    let contents = {
        __type: "DescribeDirectConnectGatewayAttachmentsResult",
        directConnectGatewayAttachments: undefined,
        nextToken: undefined
    };
    if (output.directConnectGatewayAttachments !== undefined &&
        output.directConnectGatewayAttachments !== null) {
        contents.directConnectGatewayAttachments = deserializeAws_json1_1DirectConnectGatewayAttachmentList(output.directConnectGatewayAttachments, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribeDirectConnectGatewaysResult = (output, context) => {
    let contents = {
        __type: "DescribeDirectConnectGatewaysResult",
        directConnectGateways: undefined,
        nextToken: undefined
    };
    if (output.directConnectGateways !== undefined &&
        output.directConnectGateways !== null) {
        contents.directConnectGateways = deserializeAws_json1_1DirectConnectGatewayList(output.directConnectGateways, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribeInterconnectLoaResponse = (output, context) => {
    let contents = {
        __type: "DescribeInterconnectLoaResponse",
        loa: undefined
    };
    if (output.loa !== undefined && output.loa !== null) {
        contents.loa = deserializeAws_json1_1Loa(output.loa, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeTagsResponse = (output, context) => {
    let contents = {
        __type: "DescribeTagsResponse",
        resourceTags: undefined
    };
    if (output.resourceTags !== undefined && output.resourceTags !== null) {
        contents.resourceTags = deserializeAws_json1_1ResourceTagList(output.resourceTags, context);
    }
    return contents;
};
const deserializeAws_json1_1DirectConnectClientException = (output, context) => {
    let contents = {
        __type: "DirectConnectClientException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1DirectConnectGateway = (output, context) => {
    let contents = {
        __type: "DirectConnectGateway",
        amazonSideAsn: undefined,
        directConnectGatewayId: undefined,
        directConnectGatewayName: undefined,
        directConnectGatewayState: undefined,
        ownerAccount: undefined,
        stateChangeError: undefined
    };
    if (output.amazonSideAsn !== undefined && output.amazonSideAsn !== null) {
        contents.amazonSideAsn = output.amazonSideAsn;
    }
    if (output.directConnectGatewayId !== undefined &&
        output.directConnectGatewayId !== null) {
        contents.directConnectGatewayId = output.directConnectGatewayId;
    }
    if (output.directConnectGatewayName !== undefined &&
        output.directConnectGatewayName !== null) {
        contents.directConnectGatewayName = output.directConnectGatewayName;
    }
    if (output.directConnectGatewayState !== undefined &&
        output.directConnectGatewayState !== null) {
        contents.directConnectGatewayState = output.directConnectGatewayState;
    }
    if (output.ownerAccount !== undefined && output.ownerAccount !== null) {
        contents.ownerAccount = output.ownerAccount;
    }
    if (output.stateChangeError !== undefined &&
        output.stateChangeError !== null) {
        contents.stateChangeError = output.stateChangeError;
    }
    return contents;
};
const deserializeAws_json1_1DirectConnectGatewayAssociation = (output, context) => {
    let contents = {
        __type: "DirectConnectGatewayAssociation",
        allowedPrefixesToDirectConnectGateway: undefined,
        associatedGateway: undefined,
        associationId: undefined,
        associationState: undefined,
        directConnectGatewayId: undefined,
        directConnectGatewayOwnerAccount: undefined,
        stateChangeError: undefined,
        virtualGatewayId: undefined,
        virtualGatewayOwnerAccount: undefined,
        virtualGatewayRegion: undefined
    };
    if (output.allowedPrefixesToDirectConnectGateway !== undefined &&
        output.allowedPrefixesToDirectConnectGateway !== null) {
        contents.allowedPrefixesToDirectConnectGateway = deserializeAws_json1_1RouteFilterPrefixList(output.allowedPrefixesToDirectConnectGateway, context);
    }
    if (output.associatedGateway !== undefined &&
        output.associatedGateway !== null) {
        contents.associatedGateway = deserializeAws_json1_1AssociatedGateway(output.associatedGateway, context);
    }
    if (output.associationId !== undefined && output.associationId !== null) {
        contents.associationId = output.associationId;
    }
    if (output.associationState !== undefined &&
        output.associationState !== null) {
        contents.associationState = output.associationState;
    }
    if (output.directConnectGatewayId !== undefined &&
        output.directConnectGatewayId !== null) {
        contents.directConnectGatewayId = output.directConnectGatewayId;
    }
    if (output.directConnectGatewayOwnerAccount !== undefined &&
        output.directConnectGatewayOwnerAccount !== null) {
        contents.directConnectGatewayOwnerAccount =
            output.directConnectGatewayOwnerAccount;
    }
    if (output.stateChangeError !== undefined &&
        output.stateChangeError !== null) {
        contents.stateChangeError = output.stateChangeError;
    }
    if (output.virtualGatewayId !== undefined &&
        output.virtualGatewayId !== null) {
        contents.virtualGatewayId = output.virtualGatewayId;
    }
    if (output.virtualGatewayOwnerAccount !== undefined &&
        output.virtualGatewayOwnerAccount !== null) {
        contents.virtualGatewayOwnerAccount = output.virtualGatewayOwnerAccount;
    }
    if (output.virtualGatewayRegion !== undefined &&
        output.virtualGatewayRegion !== null) {
        contents.virtualGatewayRegion = output.virtualGatewayRegion;
    }
    return contents;
};
const deserializeAws_json1_1DirectConnectGatewayAssociationList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1DirectConnectGatewayAssociation(entry, context));
};
const deserializeAws_json1_1DirectConnectGatewayAssociationProposal = (output, context) => {
    let contents = {
        __type: "DirectConnectGatewayAssociationProposal",
        associatedGateway: undefined,
        directConnectGatewayId: undefined,
        directConnectGatewayOwnerAccount: undefined,
        existingAllowedPrefixesToDirectConnectGateway: undefined,
        proposalId: undefined,
        proposalState: undefined,
        requestedAllowedPrefixesToDirectConnectGateway: undefined
    };
    if (output.associatedGateway !== undefined &&
        output.associatedGateway !== null) {
        contents.associatedGateway = deserializeAws_json1_1AssociatedGateway(output.associatedGateway, context);
    }
    if (output.directConnectGatewayId !== undefined &&
        output.directConnectGatewayId !== null) {
        contents.directConnectGatewayId = output.directConnectGatewayId;
    }
    if (output.directConnectGatewayOwnerAccount !== undefined &&
        output.directConnectGatewayOwnerAccount !== null) {
        contents.directConnectGatewayOwnerAccount =
            output.directConnectGatewayOwnerAccount;
    }
    if (output.existingAllowedPrefixesToDirectConnectGateway !== undefined &&
        output.existingAllowedPrefixesToDirectConnectGateway !== null) {
        contents.existingAllowedPrefixesToDirectConnectGateway = deserializeAws_json1_1RouteFilterPrefixList(output.existingAllowedPrefixesToDirectConnectGateway, context);
    }
    if (output.proposalId !== undefined && output.proposalId !== null) {
        contents.proposalId = output.proposalId;
    }
    if (output.proposalState !== undefined && output.proposalState !== null) {
        contents.proposalState = output.proposalState;
    }
    if (output.requestedAllowedPrefixesToDirectConnectGateway !== undefined &&
        output.requestedAllowedPrefixesToDirectConnectGateway !== null) {
        contents.requestedAllowedPrefixesToDirectConnectGateway = deserializeAws_json1_1RouteFilterPrefixList(output.requestedAllowedPrefixesToDirectConnectGateway, context);
    }
    return contents;
};
const deserializeAws_json1_1DirectConnectGatewayAssociationProposalList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1DirectConnectGatewayAssociationProposal(entry, context));
};
const deserializeAws_json1_1DirectConnectGatewayAttachment = (output, context) => {
    let contents = {
        __type: "DirectConnectGatewayAttachment",
        attachmentState: undefined,
        attachmentType: undefined,
        directConnectGatewayId: undefined,
        stateChangeError: undefined,
        virtualInterfaceId: undefined,
        virtualInterfaceOwnerAccount: undefined,
        virtualInterfaceRegion: undefined
    };
    if (output.attachmentState !== undefined && output.attachmentState !== null) {
        contents.attachmentState = output.attachmentState;
    }
    if (output.attachmentType !== undefined && output.attachmentType !== null) {
        contents.attachmentType = output.attachmentType;
    }
    if (output.directConnectGatewayId !== undefined &&
        output.directConnectGatewayId !== null) {
        contents.directConnectGatewayId = output.directConnectGatewayId;
    }
    if (output.stateChangeError !== undefined &&
        output.stateChangeError !== null) {
        contents.stateChangeError = output.stateChangeError;
    }
    if (output.virtualInterfaceId !== undefined &&
        output.virtualInterfaceId !== null) {
        contents.virtualInterfaceId = output.virtualInterfaceId;
    }
    if (output.virtualInterfaceOwnerAccount !== undefined &&
        output.virtualInterfaceOwnerAccount !== null) {
        contents.virtualInterfaceOwnerAccount = output.virtualInterfaceOwnerAccount;
    }
    if (output.virtualInterfaceRegion !== undefined &&
        output.virtualInterfaceRegion !== null) {
        contents.virtualInterfaceRegion = output.virtualInterfaceRegion;
    }
    return contents;
};
const deserializeAws_json1_1DirectConnectGatewayAttachmentList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1DirectConnectGatewayAttachment(entry, context));
};
const deserializeAws_json1_1DirectConnectGatewayList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1DirectConnectGateway(entry, context));
};
const deserializeAws_json1_1DirectConnectServerException = (output, context) => {
    let contents = {
        __type: "DirectConnectServerException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1DuplicateTagKeysException = (output, context) => {
    let contents = {
        __type: "DuplicateTagKeysException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1Interconnect = (output, context) => {
    let contents = {
        __type: "Interconnect",
        awsDevice: undefined,
        awsDeviceV2: undefined,
        bandwidth: undefined,
        hasLogicalRedundancy: undefined,
        interconnectId: undefined,
        interconnectName: undefined,
        interconnectState: undefined,
        jumboFrameCapable: undefined,
        lagId: undefined,
        loaIssueTime: undefined,
        location: undefined,
        providerName: undefined,
        region: undefined,
        tags: undefined
    };
    if (output.awsDevice !== undefined && output.awsDevice !== null) {
        contents.awsDevice = output.awsDevice;
    }
    if (output.awsDeviceV2 !== undefined && output.awsDeviceV2 !== null) {
        contents.awsDeviceV2 = output.awsDeviceV2;
    }
    if (output.bandwidth !== undefined && output.bandwidth !== null) {
        contents.bandwidth = output.bandwidth;
    }
    if (output.hasLogicalRedundancy !== undefined &&
        output.hasLogicalRedundancy !== null) {
        contents.hasLogicalRedundancy = output.hasLogicalRedundancy;
    }
    if (output.interconnectId !== undefined && output.interconnectId !== null) {
        contents.interconnectId = output.interconnectId;
    }
    if (output.interconnectName !== undefined &&
        output.interconnectName !== null) {
        contents.interconnectName = output.interconnectName;
    }
    if (output.interconnectState !== undefined &&
        output.interconnectState !== null) {
        contents.interconnectState = output.interconnectState;
    }
    if (output.jumboFrameCapable !== undefined &&
        output.jumboFrameCapable !== null) {
        contents.jumboFrameCapable = output.jumboFrameCapable;
    }
    if (output.lagId !== undefined && output.lagId !== null) {
        contents.lagId = output.lagId;
    }
    if (output.loaIssueTime !== undefined && output.loaIssueTime !== null) {
        contents.loaIssueTime = new Date(Math.round(output.loaIssueTime * 1000));
    }
    if (output.location !== undefined && output.location !== null) {
        contents.location = output.location;
    }
    if (output.providerName !== undefined && output.providerName !== null) {
        contents.providerName = output.providerName;
    }
    if (output.region !== undefined && output.region !== null) {
        contents.region = output.region;
    }
    if (output.tags !== undefined && output.tags !== null) {
        contents.tags = deserializeAws_json1_1TagList(output.tags, context);
    }
    return contents;
};
const deserializeAws_json1_1InterconnectList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Interconnect(entry, context));
};
const deserializeAws_json1_1Interconnects = (output, context) => {
    let contents = {
        __type: "Interconnects",
        interconnects: undefined
    };
    if (output.interconnects !== undefined && output.interconnects !== null) {
        contents.interconnects = deserializeAws_json1_1InterconnectList(output.interconnects, context);
    }
    return contents;
};
const deserializeAws_json1_1Lag = (output, context) => {
    let contents = {
        __type: "Lag",
        allowsHostedConnections: undefined,
        awsDevice: undefined,
        awsDeviceV2: undefined,
        connections: undefined,
        connectionsBandwidth: undefined,
        hasLogicalRedundancy: undefined,
        jumboFrameCapable: undefined,
        lagId: undefined,
        lagName: undefined,
        lagState: undefined,
        location: undefined,
        minimumLinks: undefined,
        numberOfConnections: undefined,
        ownerAccount: undefined,
        providerName: undefined,
        region: undefined,
        tags: undefined
    };
    if (output.allowsHostedConnections !== undefined &&
        output.allowsHostedConnections !== null) {
        contents.allowsHostedConnections = output.allowsHostedConnections;
    }
    if (output.awsDevice !== undefined && output.awsDevice !== null) {
        contents.awsDevice = output.awsDevice;
    }
    if (output.awsDeviceV2 !== undefined && output.awsDeviceV2 !== null) {
        contents.awsDeviceV2 = output.awsDeviceV2;
    }
    if (output.connections !== undefined && output.connections !== null) {
        contents.connections = deserializeAws_json1_1ConnectionList(output.connections, context);
    }
    if (output.connectionsBandwidth !== undefined &&
        output.connectionsBandwidth !== null) {
        contents.connectionsBandwidth = output.connectionsBandwidth;
    }
    if (output.hasLogicalRedundancy !== undefined &&
        output.hasLogicalRedundancy !== null) {
        contents.hasLogicalRedundancy = output.hasLogicalRedundancy;
    }
    if (output.jumboFrameCapable !== undefined &&
        output.jumboFrameCapable !== null) {
        contents.jumboFrameCapable = output.jumboFrameCapable;
    }
    if (output.lagId !== undefined && output.lagId !== null) {
        contents.lagId = output.lagId;
    }
    if (output.lagName !== undefined && output.lagName !== null) {
        contents.lagName = output.lagName;
    }
    if (output.lagState !== undefined && output.lagState !== null) {
        contents.lagState = output.lagState;
    }
    if (output.location !== undefined && output.location !== null) {
        contents.location = output.location;
    }
    if (output.minimumLinks !== undefined && output.minimumLinks !== null) {
        contents.minimumLinks = output.minimumLinks;
    }
    if (output.numberOfConnections !== undefined &&
        output.numberOfConnections !== null) {
        contents.numberOfConnections = output.numberOfConnections;
    }
    if (output.ownerAccount !== undefined && output.ownerAccount !== null) {
        contents.ownerAccount = output.ownerAccount;
    }
    if (output.providerName !== undefined && output.providerName !== null) {
        contents.providerName = output.providerName;
    }
    if (output.region !== undefined && output.region !== null) {
        contents.region = output.region;
    }
    if (output.tags !== undefined && output.tags !== null) {
        contents.tags = deserializeAws_json1_1TagList(output.tags, context);
    }
    return contents;
};
const deserializeAws_json1_1LagList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Lag(entry, context));
};
const deserializeAws_json1_1Lags = (output, context) => {
    let contents = {
        __type: "Lags",
        lags: undefined
    };
    if (output.lags !== undefined && output.lags !== null) {
        contents.lags = deserializeAws_json1_1LagList(output.lags, context);
    }
    return contents;
};
const deserializeAws_json1_1Loa = (output, context) => {
    let contents = {
        __type: "Loa",
        loaContent: undefined,
        loaContentType: undefined
    };
    if (output.loaContent !== undefined && output.loaContent !== null) {
        contents.loaContent = Uint8Array.from(output.loaContent);
    }
    if (output.loaContentType !== undefined && output.loaContentType !== null) {
        contents.loaContentType = output.loaContentType;
    }
    return contents;
};
const deserializeAws_json1_1Location = (output, context) => {
    let contents = {
        __type: "Location",
        availablePortSpeeds: undefined,
        availableProviders: undefined,
        locationCode: undefined,
        locationName: undefined,
        region: undefined
    };
    if (output.availablePortSpeeds !== undefined &&
        output.availablePortSpeeds !== null) {
        contents.availablePortSpeeds = deserializeAws_json1_1AvailablePortSpeeds(output.availablePortSpeeds, context);
    }
    if (output.availableProviders !== undefined &&
        output.availableProviders !== null) {
        contents.availableProviders = deserializeAws_json1_1ProviderList(output.availableProviders, context);
    }
    if (output.locationCode !== undefined && output.locationCode !== null) {
        contents.locationCode = output.locationCode;
    }
    if (output.locationName !== undefined && output.locationName !== null) {
        contents.locationName = output.locationName;
    }
    if (output.region !== undefined && output.region !== null) {
        contents.region = output.region;
    }
    return contents;
};
const deserializeAws_json1_1LocationList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Location(entry, context));
};
const deserializeAws_json1_1Locations = (output, context) => {
    let contents = {
        __type: "Locations",
        locations: undefined
    };
    if (output.locations !== undefined && output.locations !== null) {
        contents.locations = deserializeAws_json1_1LocationList(output.locations, context);
    }
    return contents;
};
const deserializeAws_json1_1ProviderList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1ResourceTag = (output, context) => {
    let contents = {
        __type: "ResourceTag",
        resourceArn: undefined,
        tags: undefined
    };
    if (output.resourceArn !== undefined && output.resourceArn !== null) {
        contents.resourceArn = output.resourceArn;
    }
    if (output.tags !== undefined && output.tags !== null) {
        contents.tags = deserializeAws_json1_1TagList(output.tags, context);
    }
    return contents;
};
const deserializeAws_json1_1ResourceTagList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ResourceTag(entry, context));
};
const deserializeAws_json1_1RouteFilterPrefix = (output, context) => {
    let contents = {
        __type: "RouteFilterPrefix",
        cidr: undefined
    };
    if (output.cidr !== undefined && output.cidr !== null) {
        contents.cidr = output.cidr;
    }
    return contents;
};
const deserializeAws_json1_1RouteFilterPrefixList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1RouteFilterPrefix(entry, context));
};
const deserializeAws_json1_1Tag = (output, context) => {
    let contents = {
        __type: "Tag",
        key: undefined,
        value: undefined
    };
    if (output.key !== undefined && output.key !== null) {
        contents.key = output.key;
    }
    if (output.value !== undefined && output.value !== null) {
        contents.value = output.value;
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
const deserializeAws_json1_1TooManyTagsException = (output, context) => {
    let contents = {
        __type: "TooManyTagsException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1UntagResourceResponse = (output, context) => {
    let contents = {
        __type: "UntagResourceResponse"
    };
    return contents;
};
const deserializeAws_json1_1UpdateDirectConnectGatewayAssociationResult = (output, context) => {
    let contents = {
        __type: "UpdateDirectConnectGatewayAssociationResult",
        directConnectGatewayAssociation: undefined
    };
    if (output.directConnectGatewayAssociation !== undefined &&
        output.directConnectGatewayAssociation !== null) {
        contents.directConnectGatewayAssociation = deserializeAws_json1_1DirectConnectGatewayAssociation(output.directConnectGatewayAssociation, context);
    }
    return contents;
};
const deserializeAws_json1_1VirtualGateway = (output, context) => {
    let contents = {
        __type: "VirtualGateway",
        virtualGatewayId: undefined,
        virtualGatewayState: undefined
    };
    if (output.virtualGatewayId !== undefined &&
        output.virtualGatewayId !== null) {
        contents.virtualGatewayId = output.virtualGatewayId;
    }
    if (output.virtualGatewayState !== undefined &&
        output.virtualGatewayState !== null) {
        contents.virtualGatewayState = output.virtualGatewayState;
    }
    return contents;
};
const deserializeAws_json1_1VirtualGatewayList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1VirtualGateway(entry, context));
};
const deserializeAws_json1_1VirtualGateways = (output, context) => {
    let contents = {
        __type: "VirtualGateways",
        virtualGateways: undefined
    };
    if (output.virtualGateways !== undefined && output.virtualGateways !== null) {
        contents.virtualGateways = deserializeAws_json1_1VirtualGatewayList(output.virtualGateways, context);
    }
    return contents;
};
const deserializeAws_json1_1VirtualInterface = (output, context) => {
    let contents = {
        __type: "VirtualInterface",
        addressFamily: undefined,
        amazonAddress: undefined,
        amazonSideAsn: undefined,
        asn: undefined,
        authKey: undefined,
        awsDeviceV2: undefined,
        bgpPeers: undefined,
        connectionId: undefined,
        customerAddress: undefined,
        customerRouterConfig: undefined,
        directConnectGatewayId: undefined,
        jumboFrameCapable: undefined,
        location: undefined,
        mtu: undefined,
        ownerAccount: undefined,
        region: undefined,
        routeFilterPrefixes: undefined,
        tags: undefined,
        virtualGatewayId: undefined,
        virtualInterfaceId: undefined,
        virtualInterfaceName: undefined,
        virtualInterfaceState: undefined,
        virtualInterfaceType: undefined,
        vlan: undefined
    };
    if (output.addressFamily !== undefined && output.addressFamily !== null) {
        contents.addressFamily = output.addressFamily;
    }
    if (output.amazonAddress !== undefined && output.amazonAddress !== null) {
        contents.amazonAddress = output.amazonAddress;
    }
    if (output.amazonSideAsn !== undefined && output.amazonSideAsn !== null) {
        contents.amazonSideAsn = output.amazonSideAsn;
    }
    if (output.asn !== undefined && output.asn !== null) {
        contents.asn = output.asn;
    }
    if (output.authKey !== undefined && output.authKey !== null) {
        contents.authKey = output.authKey;
    }
    if (output.awsDeviceV2 !== undefined && output.awsDeviceV2 !== null) {
        contents.awsDeviceV2 = output.awsDeviceV2;
    }
    if (output.bgpPeers !== undefined && output.bgpPeers !== null) {
        contents.bgpPeers = deserializeAws_json1_1BGPPeerList(output.bgpPeers, context);
    }
    if (output.connectionId !== undefined && output.connectionId !== null) {
        contents.connectionId = output.connectionId;
    }
    if (output.customerAddress !== undefined && output.customerAddress !== null) {
        contents.customerAddress = output.customerAddress;
    }
    if (output.customerRouterConfig !== undefined &&
        output.customerRouterConfig !== null) {
        contents.customerRouterConfig = output.customerRouterConfig;
    }
    if (output.directConnectGatewayId !== undefined &&
        output.directConnectGatewayId !== null) {
        contents.directConnectGatewayId = output.directConnectGatewayId;
    }
    if (output.jumboFrameCapable !== undefined &&
        output.jumboFrameCapable !== null) {
        contents.jumboFrameCapable = output.jumboFrameCapable;
    }
    if (output.location !== undefined && output.location !== null) {
        contents.location = output.location;
    }
    if (output.mtu !== undefined && output.mtu !== null) {
        contents.mtu = output.mtu;
    }
    if (output.ownerAccount !== undefined && output.ownerAccount !== null) {
        contents.ownerAccount = output.ownerAccount;
    }
    if (output.region !== undefined && output.region !== null) {
        contents.region = output.region;
    }
    if (output.routeFilterPrefixes !== undefined &&
        output.routeFilterPrefixes !== null) {
        contents.routeFilterPrefixes = deserializeAws_json1_1RouteFilterPrefixList(output.routeFilterPrefixes, context);
    }
    if (output.tags !== undefined && output.tags !== null) {
        contents.tags = deserializeAws_json1_1TagList(output.tags, context);
    }
    if (output.virtualGatewayId !== undefined &&
        output.virtualGatewayId !== null) {
        contents.virtualGatewayId = output.virtualGatewayId;
    }
    if (output.virtualInterfaceId !== undefined &&
        output.virtualInterfaceId !== null) {
        contents.virtualInterfaceId = output.virtualInterfaceId;
    }
    if (output.virtualInterfaceName !== undefined &&
        output.virtualInterfaceName !== null) {
        contents.virtualInterfaceName = output.virtualInterfaceName;
    }
    if (output.virtualInterfaceState !== undefined &&
        output.virtualInterfaceState !== null) {
        contents.virtualInterfaceState = output.virtualInterfaceState;
    }
    if (output.virtualInterfaceType !== undefined &&
        output.virtualInterfaceType !== null) {
        contents.virtualInterfaceType = output.virtualInterfaceType;
    }
    if (output.vlan !== undefined && output.vlan !== null) {
        contents.vlan = output.vlan;
    }
    return contents;
};
const deserializeAws_json1_1VirtualInterfaceList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1VirtualInterface(entry, context));
};
const deserializeAws_json1_1VirtualInterfaces = (output, context) => {
    let contents = {
        __type: "VirtualInterfaces",
        virtualInterfaces: undefined
    };
    if (output.virtualInterfaces !== undefined &&
        output.virtualInterfaces !== null) {
        contents.virtualInterfaces = deserializeAws_json1_1VirtualInterfaceList(output.virtualInterfaces, context);
    }
    return contents;
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