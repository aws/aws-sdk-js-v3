"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AcceptDirectConnectGatewayAssociationProposalRequest;
(function (AcceptDirectConnectGatewayAssociationProposalRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AcceptDirectConnectGatewayAssociationProposalRequest");
    }
    AcceptDirectConnectGatewayAssociationProposalRequest.isa = isa;
})(AcceptDirectConnectGatewayAssociationProposalRequest = exports.AcceptDirectConnectGatewayAssociationProposalRequest || (exports.AcceptDirectConnectGatewayAssociationProposalRequest = {}));
var AcceptDirectConnectGatewayAssociationProposalResult;
(function (AcceptDirectConnectGatewayAssociationProposalResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "AcceptDirectConnectGatewayAssociationProposalResult");
    }
    AcceptDirectConnectGatewayAssociationProposalResult.isa = isa;
})(AcceptDirectConnectGatewayAssociationProposalResult = exports.AcceptDirectConnectGatewayAssociationProposalResult || (exports.AcceptDirectConnectGatewayAssociationProposalResult = {}));
var AddressFamily;
(function (AddressFamily) {
    AddressFamily["IPv4"] = "ipv4";
    AddressFamily["IPv6"] = "ipv6";
})(AddressFamily = exports.AddressFamily || (exports.AddressFamily = {}));
var AllocateConnectionOnInterconnectRequest;
(function (AllocateConnectionOnInterconnectRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AllocateConnectionOnInterconnectRequest");
    }
    AllocateConnectionOnInterconnectRequest.isa = isa;
})(AllocateConnectionOnInterconnectRequest = exports.AllocateConnectionOnInterconnectRequest || (exports.AllocateConnectionOnInterconnectRequest = {}));
var AllocateHostedConnectionRequest;
(function (AllocateHostedConnectionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AllocateHostedConnectionRequest");
    }
    AllocateHostedConnectionRequest.isa = isa;
})(AllocateHostedConnectionRequest = exports.AllocateHostedConnectionRequest || (exports.AllocateHostedConnectionRequest = {}));
var AllocatePrivateVirtualInterfaceRequest;
(function (AllocatePrivateVirtualInterfaceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AllocatePrivateVirtualInterfaceRequest");
    }
    AllocatePrivateVirtualInterfaceRequest.isa = isa;
})(AllocatePrivateVirtualInterfaceRequest = exports.AllocatePrivateVirtualInterfaceRequest || (exports.AllocatePrivateVirtualInterfaceRequest = {}));
var AllocatePublicVirtualInterfaceRequest;
(function (AllocatePublicVirtualInterfaceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AllocatePublicVirtualInterfaceRequest");
    }
    AllocatePublicVirtualInterfaceRequest.isa = isa;
})(AllocatePublicVirtualInterfaceRequest = exports.AllocatePublicVirtualInterfaceRequest || (exports.AllocatePublicVirtualInterfaceRequest = {}));
var AllocateTransitVirtualInterfaceRequest;
(function (AllocateTransitVirtualInterfaceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AllocateTransitVirtualInterfaceRequest");
    }
    AllocateTransitVirtualInterfaceRequest.isa = isa;
})(AllocateTransitVirtualInterfaceRequest = exports.AllocateTransitVirtualInterfaceRequest || (exports.AllocateTransitVirtualInterfaceRequest = {}));
var AllocateTransitVirtualInterfaceResult;
(function (AllocateTransitVirtualInterfaceResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "AllocateTransitVirtualInterfaceResult");
    }
    AllocateTransitVirtualInterfaceResult.isa = isa;
})(AllocateTransitVirtualInterfaceResult = exports.AllocateTransitVirtualInterfaceResult || (exports.AllocateTransitVirtualInterfaceResult = {}));
var AssociateConnectionWithLagRequest;
(function (AssociateConnectionWithLagRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssociateConnectionWithLagRequest");
    }
    AssociateConnectionWithLagRequest.isa = isa;
})(AssociateConnectionWithLagRequest = exports.AssociateConnectionWithLagRequest || (exports.AssociateConnectionWithLagRequest = {}));
var AssociateHostedConnectionRequest;
(function (AssociateHostedConnectionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssociateHostedConnectionRequest");
    }
    AssociateHostedConnectionRequest.isa = isa;
})(AssociateHostedConnectionRequest = exports.AssociateHostedConnectionRequest || (exports.AssociateHostedConnectionRequest = {}));
var AssociateVirtualInterfaceRequest;
(function (AssociateVirtualInterfaceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssociateVirtualInterfaceRequest");
    }
    AssociateVirtualInterfaceRequest.isa = isa;
})(AssociateVirtualInterfaceRequest = exports.AssociateVirtualInterfaceRequest || (exports.AssociateVirtualInterfaceRequest = {}));
var AssociatedGateway;
(function (AssociatedGateway) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssociatedGateway");
    }
    AssociatedGateway.isa = isa;
})(AssociatedGateway = exports.AssociatedGateway || (exports.AssociatedGateway = {}));
var BGPPeer;
(function (BGPPeer) {
    function isa(o) {
        return smithy_client_1.isa(o, "BGPPeer");
    }
    BGPPeer.isa = isa;
})(BGPPeer = exports.BGPPeer || (exports.BGPPeer = {}));
var BGPPeerState;
(function (BGPPeerState) {
    BGPPeerState["Available"] = "available";
    BGPPeerState["Deleted"] = "deleted";
    BGPPeerState["Deleting"] = "deleting";
    BGPPeerState["Pending"] = "pending";
    BGPPeerState["Verifying"] = "verifying";
})(BGPPeerState = exports.BGPPeerState || (exports.BGPPeerState = {}));
var BGPStatus;
(function (BGPStatus) {
    BGPStatus["Down"] = "down";
    BGPStatus["Unknown"] = "unknown";
    BGPStatus["Up"] = "up";
})(BGPStatus = exports.BGPStatus || (exports.BGPStatus = {}));
var ConfirmConnectionRequest;
(function (ConfirmConnectionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConfirmConnectionRequest");
    }
    ConfirmConnectionRequest.isa = isa;
})(ConfirmConnectionRequest = exports.ConfirmConnectionRequest || (exports.ConfirmConnectionRequest = {}));
var ConfirmConnectionResponse;
(function (ConfirmConnectionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConfirmConnectionResponse");
    }
    ConfirmConnectionResponse.isa = isa;
})(ConfirmConnectionResponse = exports.ConfirmConnectionResponse || (exports.ConfirmConnectionResponse = {}));
var ConfirmPrivateVirtualInterfaceRequest;
(function (ConfirmPrivateVirtualInterfaceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConfirmPrivateVirtualInterfaceRequest");
    }
    ConfirmPrivateVirtualInterfaceRequest.isa = isa;
})(ConfirmPrivateVirtualInterfaceRequest = exports.ConfirmPrivateVirtualInterfaceRequest || (exports.ConfirmPrivateVirtualInterfaceRequest = {}));
var ConfirmPrivateVirtualInterfaceResponse;
(function (ConfirmPrivateVirtualInterfaceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConfirmPrivateVirtualInterfaceResponse");
    }
    ConfirmPrivateVirtualInterfaceResponse.isa = isa;
})(ConfirmPrivateVirtualInterfaceResponse = exports.ConfirmPrivateVirtualInterfaceResponse || (exports.ConfirmPrivateVirtualInterfaceResponse = {}));
var ConfirmPublicVirtualInterfaceRequest;
(function (ConfirmPublicVirtualInterfaceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConfirmPublicVirtualInterfaceRequest");
    }
    ConfirmPublicVirtualInterfaceRequest.isa = isa;
})(ConfirmPublicVirtualInterfaceRequest = exports.ConfirmPublicVirtualInterfaceRequest || (exports.ConfirmPublicVirtualInterfaceRequest = {}));
var ConfirmPublicVirtualInterfaceResponse;
(function (ConfirmPublicVirtualInterfaceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConfirmPublicVirtualInterfaceResponse");
    }
    ConfirmPublicVirtualInterfaceResponse.isa = isa;
})(ConfirmPublicVirtualInterfaceResponse = exports.ConfirmPublicVirtualInterfaceResponse || (exports.ConfirmPublicVirtualInterfaceResponse = {}));
var ConfirmTransitVirtualInterfaceRequest;
(function (ConfirmTransitVirtualInterfaceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConfirmTransitVirtualInterfaceRequest");
    }
    ConfirmTransitVirtualInterfaceRequest.isa = isa;
})(ConfirmTransitVirtualInterfaceRequest = exports.ConfirmTransitVirtualInterfaceRequest || (exports.ConfirmTransitVirtualInterfaceRequest = {}));
var ConfirmTransitVirtualInterfaceResponse;
(function (ConfirmTransitVirtualInterfaceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConfirmTransitVirtualInterfaceResponse");
    }
    ConfirmTransitVirtualInterfaceResponse.isa = isa;
})(ConfirmTransitVirtualInterfaceResponse = exports.ConfirmTransitVirtualInterfaceResponse || (exports.ConfirmTransitVirtualInterfaceResponse = {}));
var Connection;
(function (Connection) {
    function isa(o) {
        return smithy_client_1.isa(o, "Connection");
    }
    Connection.isa = isa;
})(Connection = exports.Connection || (exports.Connection = {}));
var Connections;
(function (Connections) {
    function isa(o) {
        return smithy_client_1.isa(o, "Connections");
    }
    Connections.isa = isa;
})(Connections = exports.Connections || (exports.Connections = {}));
var CreateBGPPeerRequest;
(function (CreateBGPPeerRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateBGPPeerRequest");
    }
    CreateBGPPeerRequest.isa = isa;
})(CreateBGPPeerRequest = exports.CreateBGPPeerRequest || (exports.CreateBGPPeerRequest = {}));
var CreateBGPPeerResponse;
(function (CreateBGPPeerResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateBGPPeerResponse");
    }
    CreateBGPPeerResponse.isa = isa;
})(CreateBGPPeerResponse = exports.CreateBGPPeerResponse || (exports.CreateBGPPeerResponse = {}));
var CreateConnectionRequest;
(function (CreateConnectionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateConnectionRequest");
    }
    CreateConnectionRequest.isa = isa;
})(CreateConnectionRequest = exports.CreateConnectionRequest || (exports.CreateConnectionRequest = {}));
var CreateDirectConnectGatewayAssociationProposalRequest;
(function (CreateDirectConnectGatewayAssociationProposalRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateDirectConnectGatewayAssociationProposalRequest");
    }
    CreateDirectConnectGatewayAssociationProposalRequest.isa = isa;
})(CreateDirectConnectGatewayAssociationProposalRequest = exports.CreateDirectConnectGatewayAssociationProposalRequest || (exports.CreateDirectConnectGatewayAssociationProposalRequest = {}));
var CreateDirectConnectGatewayAssociationProposalResult;
(function (CreateDirectConnectGatewayAssociationProposalResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateDirectConnectGatewayAssociationProposalResult");
    }
    CreateDirectConnectGatewayAssociationProposalResult.isa = isa;
})(CreateDirectConnectGatewayAssociationProposalResult = exports.CreateDirectConnectGatewayAssociationProposalResult || (exports.CreateDirectConnectGatewayAssociationProposalResult = {}));
var CreateDirectConnectGatewayAssociationRequest;
(function (CreateDirectConnectGatewayAssociationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateDirectConnectGatewayAssociationRequest");
    }
    CreateDirectConnectGatewayAssociationRequest.isa = isa;
})(CreateDirectConnectGatewayAssociationRequest = exports.CreateDirectConnectGatewayAssociationRequest || (exports.CreateDirectConnectGatewayAssociationRequest = {}));
var CreateDirectConnectGatewayAssociationResult;
(function (CreateDirectConnectGatewayAssociationResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateDirectConnectGatewayAssociationResult");
    }
    CreateDirectConnectGatewayAssociationResult.isa = isa;
})(CreateDirectConnectGatewayAssociationResult = exports.CreateDirectConnectGatewayAssociationResult || (exports.CreateDirectConnectGatewayAssociationResult = {}));
var CreateDirectConnectGatewayRequest;
(function (CreateDirectConnectGatewayRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateDirectConnectGatewayRequest");
    }
    CreateDirectConnectGatewayRequest.isa = isa;
})(CreateDirectConnectGatewayRequest = exports.CreateDirectConnectGatewayRequest || (exports.CreateDirectConnectGatewayRequest = {}));
var CreateDirectConnectGatewayResult;
(function (CreateDirectConnectGatewayResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateDirectConnectGatewayResult");
    }
    CreateDirectConnectGatewayResult.isa = isa;
})(CreateDirectConnectGatewayResult = exports.CreateDirectConnectGatewayResult || (exports.CreateDirectConnectGatewayResult = {}));
var CreateInterconnectRequest;
(function (CreateInterconnectRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateInterconnectRequest");
    }
    CreateInterconnectRequest.isa = isa;
})(CreateInterconnectRequest = exports.CreateInterconnectRequest || (exports.CreateInterconnectRequest = {}));
var CreateLagRequest;
(function (CreateLagRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateLagRequest");
    }
    CreateLagRequest.isa = isa;
})(CreateLagRequest = exports.CreateLagRequest || (exports.CreateLagRequest = {}));
var CreatePrivateVirtualInterfaceRequest;
(function (CreatePrivateVirtualInterfaceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreatePrivateVirtualInterfaceRequest");
    }
    CreatePrivateVirtualInterfaceRequest.isa = isa;
})(CreatePrivateVirtualInterfaceRequest = exports.CreatePrivateVirtualInterfaceRequest || (exports.CreatePrivateVirtualInterfaceRequest = {}));
var CreatePublicVirtualInterfaceRequest;
(function (CreatePublicVirtualInterfaceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreatePublicVirtualInterfaceRequest");
    }
    CreatePublicVirtualInterfaceRequest.isa = isa;
})(CreatePublicVirtualInterfaceRequest = exports.CreatePublicVirtualInterfaceRequest || (exports.CreatePublicVirtualInterfaceRequest = {}));
var CreateTransitVirtualInterfaceRequest;
(function (CreateTransitVirtualInterfaceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateTransitVirtualInterfaceRequest");
    }
    CreateTransitVirtualInterfaceRequest.isa = isa;
})(CreateTransitVirtualInterfaceRequest = exports.CreateTransitVirtualInterfaceRequest || (exports.CreateTransitVirtualInterfaceRequest = {}));
var CreateTransitVirtualInterfaceResult;
(function (CreateTransitVirtualInterfaceResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateTransitVirtualInterfaceResult");
    }
    CreateTransitVirtualInterfaceResult.isa = isa;
})(CreateTransitVirtualInterfaceResult = exports.CreateTransitVirtualInterfaceResult || (exports.CreateTransitVirtualInterfaceResult = {}));
var DeleteBGPPeerRequest;
(function (DeleteBGPPeerRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteBGPPeerRequest");
    }
    DeleteBGPPeerRequest.isa = isa;
})(DeleteBGPPeerRequest = exports.DeleteBGPPeerRequest || (exports.DeleteBGPPeerRequest = {}));
var DeleteBGPPeerResponse;
(function (DeleteBGPPeerResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteBGPPeerResponse");
    }
    DeleteBGPPeerResponse.isa = isa;
})(DeleteBGPPeerResponse = exports.DeleteBGPPeerResponse || (exports.DeleteBGPPeerResponse = {}));
var DeleteConnectionRequest;
(function (DeleteConnectionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteConnectionRequest");
    }
    DeleteConnectionRequest.isa = isa;
})(DeleteConnectionRequest = exports.DeleteConnectionRequest || (exports.DeleteConnectionRequest = {}));
var DeleteDirectConnectGatewayAssociationProposalRequest;
(function (DeleteDirectConnectGatewayAssociationProposalRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteDirectConnectGatewayAssociationProposalRequest");
    }
    DeleteDirectConnectGatewayAssociationProposalRequest.isa = isa;
})(DeleteDirectConnectGatewayAssociationProposalRequest = exports.DeleteDirectConnectGatewayAssociationProposalRequest || (exports.DeleteDirectConnectGatewayAssociationProposalRequest = {}));
var DeleteDirectConnectGatewayAssociationProposalResult;
(function (DeleteDirectConnectGatewayAssociationProposalResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteDirectConnectGatewayAssociationProposalResult");
    }
    DeleteDirectConnectGatewayAssociationProposalResult.isa = isa;
})(DeleteDirectConnectGatewayAssociationProposalResult = exports.DeleteDirectConnectGatewayAssociationProposalResult || (exports.DeleteDirectConnectGatewayAssociationProposalResult = {}));
var DeleteDirectConnectGatewayAssociationRequest;
(function (DeleteDirectConnectGatewayAssociationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteDirectConnectGatewayAssociationRequest");
    }
    DeleteDirectConnectGatewayAssociationRequest.isa = isa;
})(DeleteDirectConnectGatewayAssociationRequest = exports.DeleteDirectConnectGatewayAssociationRequest || (exports.DeleteDirectConnectGatewayAssociationRequest = {}));
var DeleteDirectConnectGatewayAssociationResult;
(function (DeleteDirectConnectGatewayAssociationResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteDirectConnectGatewayAssociationResult");
    }
    DeleteDirectConnectGatewayAssociationResult.isa = isa;
})(DeleteDirectConnectGatewayAssociationResult = exports.DeleteDirectConnectGatewayAssociationResult || (exports.DeleteDirectConnectGatewayAssociationResult = {}));
var DeleteDirectConnectGatewayRequest;
(function (DeleteDirectConnectGatewayRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteDirectConnectGatewayRequest");
    }
    DeleteDirectConnectGatewayRequest.isa = isa;
})(DeleteDirectConnectGatewayRequest = exports.DeleteDirectConnectGatewayRequest || (exports.DeleteDirectConnectGatewayRequest = {}));
var DeleteDirectConnectGatewayResult;
(function (DeleteDirectConnectGatewayResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteDirectConnectGatewayResult");
    }
    DeleteDirectConnectGatewayResult.isa = isa;
})(DeleteDirectConnectGatewayResult = exports.DeleteDirectConnectGatewayResult || (exports.DeleteDirectConnectGatewayResult = {}));
var DeleteInterconnectRequest;
(function (DeleteInterconnectRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteInterconnectRequest");
    }
    DeleteInterconnectRequest.isa = isa;
})(DeleteInterconnectRequest = exports.DeleteInterconnectRequest || (exports.DeleteInterconnectRequest = {}));
var DeleteInterconnectResponse;
(function (DeleteInterconnectResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteInterconnectResponse");
    }
    DeleteInterconnectResponse.isa = isa;
})(DeleteInterconnectResponse = exports.DeleteInterconnectResponse || (exports.DeleteInterconnectResponse = {}));
var DeleteLagRequest;
(function (DeleteLagRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteLagRequest");
    }
    DeleteLagRequest.isa = isa;
})(DeleteLagRequest = exports.DeleteLagRequest || (exports.DeleteLagRequest = {}));
var DeleteVirtualInterfaceRequest;
(function (DeleteVirtualInterfaceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteVirtualInterfaceRequest");
    }
    DeleteVirtualInterfaceRequest.isa = isa;
})(DeleteVirtualInterfaceRequest = exports.DeleteVirtualInterfaceRequest || (exports.DeleteVirtualInterfaceRequest = {}));
var DeleteVirtualInterfaceResponse;
(function (DeleteVirtualInterfaceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteVirtualInterfaceResponse");
    }
    DeleteVirtualInterfaceResponse.isa = isa;
})(DeleteVirtualInterfaceResponse = exports.DeleteVirtualInterfaceResponse || (exports.DeleteVirtualInterfaceResponse = {}));
var DescribeConnectionLoaRequest;
(function (DescribeConnectionLoaRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeConnectionLoaRequest");
    }
    DescribeConnectionLoaRequest.isa = isa;
})(DescribeConnectionLoaRequest = exports.DescribeConnectionLoaRequest || (exports.DescribeConnectionLoaRequest = {}));
var DescribeConnectionLoaResponse;
(function (DescribeConnectionLoaResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeConnectionLoaResponse");
    }
    DescribeConnectionLoaResponse.isa = isa;
})(DescribeConnectionLoaResponse = exports.DescribeConnectionLoaResponse || (exports.DescribeConnectionLoaResponse = {}));
var DescribeConnectionsOnInterconnectRequest;
(function (DescribeConnectionsOnInterconnectRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeConnectionsOnInterconnectRequest");
    }
    DescribeConnectionsOnInterconnectRequest.isa = isa;
})(DescribeConnectionsOnInterconnectRequest = exports.DescribeConnectionsOnInterconnectRequest || (exports.DescribeConnectionsOnInterconnectRequest = {}));
var DescribeConnectionsRequest;
(function (DescribeConnectionsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeConnectionsRequest");
    }
    DescribeConnectionsRequest.isa = isa;
})(DescribeConnectionsRequest = exports.DescribeConnectionsRequest || (exports.DescribeConnectionsRequest = {}));
var DescribeDirectConnectGatewayAssociationProposalsRequest;
(function (DescribeDirectConnectGatewayAssociationProposalsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeDirectConnectGatewayAssociationProposalsRequest");
    }
    DescribeDirectConnectGatewayAssociationProposalsRequest.isa = isa;
})(DescribeDirectConnectGatewayAssociationProposalsRequest = exports.DescribeDirectConnectGatewayAssociationProposalsRequest || (exports.DescribeDirectConnectGatewayAssociationProposalsRequest = {}));
var DescribeDirectConnectGatewayAssociationProposalsResult;
(function (DescribeDirectConnectGatewayAssociationProposalsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeDirectConnectGatewayAssociationProposalsResult");
    }
    DescribeDirectConnectGatewayAssociationProposalsResult.isa = isa;
})(DescribeDirectConnectGatewayAssociationProposalsResult = exports.DescribeDirectConnectGatewayAssociationProposalsResult || (exports.DescribeDirectConnectGatewayAssociationProposalsResult = {}));
var DescribeDirectConnectGatewayAssociationsRequest;
(function (DescribeDirectConnectGatewayAssociationsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeDirectConnectGatewayAssociationsRequest");
    }
    DescribeDirectConnectGatewayAssociationsRequest.isa = isa;
})(DescribeDirectConnectGatewayAssociationsRequest = exports.DescribeDirectConnectGatewayAssociationsRequest || (exports.DescribeDirectConnectGatewayAssociationsRequest = {}));
var DescribeDirectConnectGatewayAssociationsResult;
(function (DescribeDirectConnectGatewayAssociationsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeDirectConnectGatewayAssociationsResult");
    }
    DescribeDirectConnectGatewayAssociationsResult.isa = isa;
})(DescribeDirectConnectGatewayAssociationsResult = exports.DescribeDirectConnectGatewayAssociationsResult || (exports.DescribeDirectConnectGatewayAssociationsResult = {}));
var DescribeDirectConnectGatewayAttachmentsRequest;
(function (DescribeDirectConnectGatewayAttachmentsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeDirectConnectGatewayAttachmentsRequest");
    }
    DescribeDirectConnectGatewayAttachmentsRequest.isa = isa;
})(DescribeDirectConnectGatewayAttachmentsRequest = exports.DescribeDirectConnectGatewayAttachmentsRequest || (exports.DescribeDirectConnectGatewayAttachmentsRequest = {}));
var DescribeDirectConnectGatewayAttachmentsResult;
(function (DescribeDirectConnectGatewayAttachmentsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeDirectConnectGatewayAttachmentsResult");
    }
    DescribeDirectConnectGatewayAttachmentsResult.isa = isa;
})(DescribeDirectConnectGatewayAttachmentsResult = exports.DescribeDirectConnectGatewayAttachmentsResult || (exports.DescribeDirectConnectGatewayAttachmentsResult = {}));
var DescribeDirectConnectGatewaysRequest;
(function (DescribeDirectConnectGatewaysRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeDirectConnectGatewaysRequest");
    }
    DescribeDirectConnectGatewaysRequest.isa = isa;
})(DescribeDirectConnectGatewaysRequest = exports.DescribeDirectConnectGatewaysRequest || (exports.DescribeDirectConnectGatewaysRequest = {}));
var DescribeDirectConnectGatewaysResult;
(function (DescribeDirectConnectGatewaysResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeDirectConnectGatewaysResult");
    }
    DescribeDirectConnectGatewaysResult.isa = isa;
})(DescribeDirectConnectGatewaysResult = exports.DescribeDirectConnectGatewaysResult || (exports.DescribeDirectConnectGatewaysResult = {}));
var DescribeHostedConnectionsRequest;
(function (DescribeHostedConnectionsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeHostedConnectionsRequest");
    }
    DescribeHostedConnectionsRequest.isa = isa;
})(DescribeHostedConnectionsRequest = exports.DescribeHostedConnectionsRequest || (exports.DescribeHostedConnectionsRequest = {}));
var DescribeInterconnectLoaRequest;
(function (DescribeInterconnectLoaRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeInterconnectLoaRequest");
    }
    DescribeInterconnectLoaRequest.isa = isa;
})(DescribeInterconnectLoaRequest = exports.DescribeInterconnectLoaRequest || (exports.DescribeInterconnectLoaRequest = {}));
var DescribeInterconnectLoaResponse;
(function (DescribeInterconnectLoaResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeInterconnectLoaResponse");
    }
    DescribeInterconnectLoaResponse.isa = isa;
})(DescribeInterconnectLoaResponse = exports.DescribeInterconnectLoaResponse || (exports.DescribeInterconnectLoaResponse = {}));
var DescribeInterconnectsRequest;
(function (DescribeInterconnectsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeInterconnectsRequest");
    }
    DescribeInterconnectsRequest.isa = isa;
})(DescribeInterconnectsRequest = exports.DescribeInterconnectsRequest || (exports.DescribeInterconnectsRequest = {}));
var DescribeLagsRequest;
(function (DescribeLagsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeLagsRequest");
    }
    DescribeLagsRequest.isa = isa;
})(DescribeLagsRequest = exports.DescribeLagsRequest || (exports.DescribeLagsRequest = {}));
var DescribeLoaRequest;
(function (DescribeLoaRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeLoaRequest");
    }
    DescribeLoaRequest.isa = isa;
})(DescribeLoaRequest = exports.DescribeLoaRequest || (exports.DescribeLoaRequest = {}));
var DescribeTagsRequest;
(function (DescribeTagsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeTagsRequest");
    }
    DescribeTagsRequest.isa = isa;
})(DescribeTagsRequest = exports.DescribeTagsRequest || (exports.DescribeTagsRequest = {}));
var DescribeTagsResponse;
(function (DescribeTagsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeTagsResponse");
    }
    DescribeTagsResponse.isa = isa;
})(DescribeTagsResponse = exports.DescribeTagsResponse || (exports.DescribeTagsResponse = {}));
var DescribeVirtualInterfacesRequest;
(function (DescribeVirtualInterfacesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeVirtualInterfacesRequest");
    }
    DescribeVirtualInterfacesRequest.isa = isa;
})(DescribeVirtualInterfacesRequest = exports.DescribeVirtualInterfacesRequest || (exports.DescribeVirtualInterfacesRequest = {}));
var DirectConnectClientException;
(function (DirectConnectClientException) {
    function isa(o) {
        return smithy_client_1.isa(o, "DirectConnectClientException");
    }
    DirectConnectClientException.isa = isa;
})(DirectConnectClientException = exports.DirectConnectClientException || (exports.DirectConnectClientException = {}));
var DirectConnectGateway;
(function (DirectConnectGateway) {
    function isa(o) {
        return smithy_client_1.isa(o, "DirectConnectGateway");
    }
    DirectConnectGateway.isa = isa;
})(DirectConnectGateway = exports.DirectConnectGateway || (exports.DirectConnectGateway = {}));
var DirectConnectGatewayAssociation;
(function (DirectConnectGatewayAssociation) {
    function isa(o) {
        return smithy_client_1.isa(o, "DirectConnectGatewayAssociation");
    }
    DirectConnectGatewayAssociation.isa = isa;
})(DirectConnectGatewayAssociation = exports.DirectConnectGatewayAssociation || (exports.DirectConnectGatewayAssociation = {}));
var DirectConnectGatewayAssociationProposal;
(function (DirectConnectGatewayAssociationProposal) {
    function isa(o) {
        return smithy_client_1.isa(o, "DirectConnectGatewayAssociationProposal");
    }
    DirectConnectGatewayAssociationProposal.isa = isa;
})(DirectConnectGatewayAssociationProposal = exports.DirectConnectGatewayAssociationProposal || (exports.DirectConnectGatewayAssociationProposal = {}));
var DirectConnectGatewayAttachment;
(function (DirectConnectGatewayAttachment) {
    function isa(o) {
        return smithy_client_1.isa(o, "DirectConnectGatewayAttachment");
    }
    DirectConnectGatewayAttachment.isa = isa;
})(DirectConnectGatewayAttachment = exports.DirectConnectGatewayAttachment || (exports.DirectConnectGatewayAttachment = {}));
var DirectConnectServerException;
(function (DirectConnectServerException) {
    function isa(o) {
        return smithy_client_1.isa(o, "DirectConnectServerException");
    }
    DirectConnectServerException.isa = isa;
})(DirectConnectServerException = exports.DirectConnectServerException || (exports.DirectConnectServerException = {}));
var DisassociateConnectionFromLagRequest;
(function (DisassociateConnectionFromLagRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DisassociateConnectionFromLagRequest");
    }
    DisassociateConnectionFromLagRequest.isa = isa;
})(DisassociateConnectionFromLagRequest = exports.DisassociateConnectionFromLagRequest || (exports.DisassociateConnectionFromLagRequest = {}));
var DuplicateTagKeysException;
(function (DuplicateTagKeysException) {
    function isa(o) {
        return smithy_client_1.isa(o, "DuplicateTagKeysException");
    }
    DuplicateTagKeysException.isa = isa;
})(DuplicateTagKeysException = exports.DuplicateTagKeysException || (exports.DuplicateTagKeysException = {}));
var GatewayType;
(function (GatewayType) {
    GatewayType["TransitGateway"] = "transitGateway";
    GatewayType["VirtualPrivateGateway"] = "virtualPrivateGateway";
})(GatewayType = exports.GatewayType || (exports.GatewayType = {}));
var HasLogicalRedundancy;
(function (HasLogicalRedundancy) {
    HasLogicalRedundancy["No"] = "no";
    HasLogicalRedundancy["Unknown"] = "unknown";
    HasLogicalRedundancy["Yes"] = "yes";
})(HasLogicalRedundancy = exports.HasLogicalRedundancy || (exports.HasLogicalRedundancy = {}));
var Interconnect;
(function (Interconnect) {
    function isa(o) {
        return smithy_client_1.isa(o, "Interconnect");
    }
    Interconnect.isa = isa;
})(Interconnect = exports.Interconnect || (exports.Interconnect = {}));
var Interconnects;
(function (Interconnects) {
    function isa(o) {
        return smithy_client_1.isa(o, "Interconnects");
    }
    Interconnects.isa = isa;
})(Interconnects = exports.Interconnects || (exports.Interconnects = {}));
var Lag;
(function (Lag) {
    function isa(o) {
        return smithy_client_1.isa(o, "Lag");
    }
    Lag.isa = isa;
})(Lag = exports.Lag || (exports.Lag = {}));
var Lags;
(function (Lags) {
    function isa(o) {
        return smithy_client_1.isa(o, "Lags");
    }
    Lags.isa = isa;
})(Lags = exports.Lags || (exports.Lags = {}));
var Loa;
(function (Loa) {
    function isa(o) {
        return smithy_client_1.isa(o, "Loa");
    }
    Loa.isa = isa;
})(Loa = exports.Loa || (exports.Loa = {}));
var LoaContentType;
(function (LoaContentType) {
    LoaContentType["PDF"] = "application/pdf";
})(LoaContentType = exports.LoaContentType || (exports.LoaContentType = {}));
var Location;
(function (Location) {
    function isa(o) {
        return smithy_client_1.isa(o, "Location");
    }
    Location.isa = isa;
})(Location = exports.Location || (exports.Location = {}));
var Locations;
(function (Locations) {
    function isa(o) {
        return smithy_client_1.isa(o, "Locations");
    }
    Locations.isa = isa;
})(Locations = exports.Locations || (exports.Locations = {}));
var NewBGPPeer;
(function (NewBGPPeer) {
    function isa(o) {
        return smithy_client_1.isa(o, "NewBGPPeer");
    }
    NewBGPPeer.isa = isa;
})(NewBGPPeer = exports.NewBGPPeer || (exports.NewBGPPeer = {}));
var NewPrivateVirtualInterface;
(function (NewPrivateVirtualInterface) {
    function isa(o) {
        return smithy_client_1.isa(o, "NewPrivateVirtualInterface");
    }
    NewPrivateVirtualInterface.isa = isa;
})(NewPrivateVirtualInterface = exports.NewPrivateVirtualInterface || (exports.NewPrivateVirtualInterface = {}));
var NewPrivateVirtualInterfaceAllocation;
(function (NewPrivateVirtualInterfaceAllocation) {
    function isa(o) {
        return smithy_client_1.isa(o, "NewPrivateVirtualInterfaceAllocation");
    }
    NewPrivateVirtualInterfaceAllocation.isa = isa;
})(NewPrivateVirtualInterfaceAllocation = exports.NewPrivateVirtualInterfaceAllocation || (exports.NewPrivateVirtualInterfaceAllocation = {}));
var NewPublicVirtualInterface;
(function (NewPublicVirtualInterface) {
    function isa(o) {
        return smithy_client_1.isa(o, "NewPublicVirtualInterface");
    }
    NewPublicVirtualInterface.isa = isa;
})(NewPublicVirtualInterface = exports.NewPublicVirtualInterface || (exports.NewPublicVirtualInterface = {}));
var NewPublicVirtualInterfaceAllocation;
(function (NewPublicVirtualInterfaceAllocation) {
    function isa(o) {
        return smithy_client_1.isa(o, "NewPublicVirtualInterfaceAllocation");
    }
    NewPublicVirtualInterfaceAllocation.isa = isa;
})(NewPublicVirtualInterfaceAllocation = exports.NewPublicVirtualInterfaceAllocation || (exports.NewPublicVirtualInterfaceAllocation = {}));
var NewTransitVirtualInterface;
(function (NewTransitVirtualInterface) {
    function isa(o) {
        return smithy_client_1.isa(o, "NewTransitVirtualInterface");
    }
    NewTransitVirtualInterface.isa = isa;
})(NewTransitVirtualInterface = exports.NewTransitVirtualInterface || (exports.NewTransitVirtualInterface = {}));
var NewTransitVirtualInterfaceAllocation;
(function (NewTransitVirtualInterfaceAllocation) {
    function isa(o) {
        return smithy_client_1.isa(o, "NewTransitVirtualInterfaceAllocation");
    }
    NewTransitVirtualInterfaceAllocation.isa = isa;
})(NewTransitVirtualInterfaceAllocation = exports.NewTransitVirtualInterfaceAllocation || (exports.NewTransitVirtualInterfaceAllocation = {}));
var ResourceTag;
(function (ResourceTag) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceTag");
    }
    ResourceTag.isa = isa;
})(ResourceTag = exports.ResourceTag || (exports.ResourceTag = {}));
var RouteFilterPrefix;
(function (RouteFilterPrefix) {
    function isa(o) {
        return smithy_client_1.isa(o, "RouteFilterPrefix");
    }
    RouteFilterPrefix.isa = isa;
})(RouteFilterPrefix = exports.RouteFilterPrefix || (exports.RouteFilterPrefix = {}));
var Tag;
(function (Tag) {
    function isa(o) {
        return smithy_client_1.isa(o, "Tag");
    }
    Tag.isa = isa;
})(Tag = exports.Tag || (exports.Tag = {}));
var TagResourceRequest;
(function (TagResourceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "TagResourceRequest");
    }
    TagResourceRequest.isa = isa;
})(TagResourceRequest = exports.TagResourceRequest || (exports.TagResourceRequest = {}));
var TagResourceResponse;
(function (TagResourceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "TagResourceResponse");
    }
    TagResourceResponse.isa = isa;
})(TagResourceResponse = exports.TagResourceResponse || (exports.TagResourceResponse = {}));
var TooManyTagsException;
(function (TooManyTagsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "TooManyTagsException");
    }
    TooManyTagsException.isa = isa;
})(TooManyTagsException = exports.TooManyTagsException || (exports.TooManyTagsException = {}));
var UntagResourceRequest;
(function (UntagResourceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UntagResourceRequest");
    }
    UntagResourceRequest.isa = isa;
})(UntagResourceRequest = exports.UntagResourceRequest || (exports.UntagResourceRequest = {}));
var UntagResourceResponse;
(function (UntagResourceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UntagResourceResponse");
    }
    UntagResourceResponse.isa = isa;
})(UntagResourceResponse = exports.UntagResourceResponse || (exports.UntagResourceResponse = {}));
var UpdateDirectConnectGatewayAssociationRequest;
(function (UpdateDirectConnectGatewayAssociationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateDirectConnectGatewayAssociationRequest");
    }
    UpdateDirectConnectGatewayAssociationRequest.isa = isa;
})(UpdateDirectConnectGatewayAssociationRequest = exports.UpdateDirectConnectGatewayAssociationRequest || (exports.UpdateDirectConnectGatewayAssociationRequest = {}));
var UpdateDirectConnectGatewayAssociationResult;
(function (UpdateDirectConnectGatewayAssociationResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateDirectConnectGatewayAssociationResult");
    }
    UpdateDirectConnectGatewayAssociationResult.isa = isa;
})(UpdateDirectConnectGatewayAssociationResult = exports.UpdateDirectConnectGatewayAssociationResult || (exports.UpdateDirectConnectGatewayAssociationResult = {}));
var UpdateLagRequest;
(function (UpdateLagRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateLagRequest");
    }
    UpdateLagRequest.isa = isa;
})(UpdateLagRequest = exports.UpdateLagRequest || (exports.UpdateLagRequest = {}));
var UpdateVirtualInterfaceAttributesRequest;
(function (UpdateVirtualInterfaceAttributesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateVirtualInterfaceAttributesRequest");
    }
    UpdateVirtualInterfaceAttributesRequest.isa = isa;
})(UpdateVirtualInterfaceAttributesRequest = exports.UpdateVirtualInterfaceAttributesRequest || (exports.UpdateVirtualInterfaceAttributesRequest = {}));
var VirtualGateway;
(function (VirtualGateway) {
    function isa(o) {
        return smithy_client_1.isa(o, "VirtualGateway");
    }
    VirtualGateway.isa = isa;
})(VirtualGateway = exports.VirtualGateway || (exports.VirtualGateway = {}));
var VirtualGateways;
(function (VirtualGateways) {
    function isa(o) {
        return smithy_client_1.isa(o, "VirtualGateways");
    }
    VirtualGateways.isa = isa;
})(VirtualGateways = exports.VirtualGateways || (exports.VirtualGateways = {}));
var VirtualInterface;
(function (VirtualInterface) {
    function isa(o) {
        return smithy_client_1.isa(o, "VirtualInterface");
    }
    VirtualInterface.isa = isa;
})(VirtualInterface = exports.VirtualInterface || (exports.VirtualInterface = {}));
var VirtualInterfaces;
(function (VirtualInterfaces) {
    function isa(o) {
        return smithy_client_1.isa(o, "VirtualInterfaces");
    }
    VirtualInterfaces.isa = isa;
})(VirtualInterfaces = exports.VirtualInterfaces || (exports.VirtualInterfaces = {}));
//# sourceMappingURL=index.js.map