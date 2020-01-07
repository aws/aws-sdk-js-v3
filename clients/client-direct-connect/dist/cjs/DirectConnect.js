"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DirectConnectClient_1 = require("./DirectConnectClient");
const AcceptDirectConnectGatewayAssociationProposalCommand_1 = require("./commands/AcceptDirectConnectGatewayAssociationProposalCommand");
const AllocateConnectionOnInterconnectCommand_1 = require("./commands/AllocateConnectionOnInterconnectCommand");
const AllocateHostedConnectionCommand_1 = require("./commands/AllocateHostedConnectionCommand");
const AllocatePrivateVirtualInterfaceCommand_1 = require("./commands/AllocatePrivateVirtualInterfaceCommand");
const AllocatePublicVirtualInterfaceCommand_1 = require("./commands/AllocatePublicVirtualInterfaceCommand");
const AllocateTransitVirtualInterfaceCommand_1 = require("./commands/AllocateTransitVirtualInterfaceCommand");
const AssociateConnectionWithLagCommand_1 = require("./commands/AssociateConnectionWithLagCommand");
const AssociateHostedConnectionCommand_1 = require("./commands/AssociateHostedConnectionCommand");
const AssociateVirtualInterfaceCommand_1 = require("./commands/AssociateVirtualInterfaceCommand");
const ConfirmConnectionCommand_1 = require("./commands/ConfirmConnectionCommand");
const ConfirmPrivateVirtualInterfaceCommand_1 = require("./commands/ConfirmPrivateVirtualInterfaceCommand");
const ConfirmPublicVirtualInterfaceCommand_1 = require("./commands/ConfirmPublicVirtualInterfaceCommand");
const ConfirmTransitVirtualInterfaceCommand_1 = require("./commands/ConfirmTransitVirtualInterfaceCommand");
const CreateBGPPeerCommand_1 = require("./commands/CreateBGPPeerCommand");
const CreateConnectionCommand_1 = require("./commands/CreateConnectionCommand");
const CreateDirectConnectGatewayAssociationCommand_1 = require("./commands/CreateDirectConnectGatewayAssociationCommand");
const CreateDirectConnectGatewayAssociationProposalCommand_1 = require("./commands/CreateDirectConnectGatewayAssociationProposalCommand");
const CreateDirectConnectGatewayCommand_1 = require("./commands/CreateDirectConnectGatewayCommand");
const CreateInterconnectCommand_1 = require("./commands/CreateInterconnectCommand");
const CreateLagCommand_1 = require("./commands/CreateLagCommand");
const CreatePrivateVirtualInterfaceCommand_1 = require("./commands/CreatePrivateVirtualInterfaceCommand");
const CreatePublicVirtualInterfaceCommand_1 = require("./commands/CreatePublicVirtualInterfaceCommand");
const CreateTransitVirtualInterfaceCommand_1 = require("./commands/CreateTransitVirtualInterfaceCommand");
const DeleteBGPPeerCommand_1 = require("./commands/DeleteBGPPeerCommand");
const DeleteConnectionCommand_1 = require("./commands/DeleteConnectionCommand");
const DeleteDirectConnectGatewayAssociationCommand_1 = require("./commands/DeleteDirectConnectGatewayAssociationCommand");
const DeleteDirectConnectGatewayAssociationProposalCommand_1 = require("./commands/DeleteDirectConnectGatewayAssociationProposalCommand");
const DeleteDirectConnectGatewayCommand_1 = require("./commands/DeleteDirectConnectGatewayCommand");
const DeleteInterconnectCommand_1 = require("./commands/DeleteInterconnectCommand");
const DeleteLagCommand_1 = require("./commands/DeleteLagCommand");
const DeleteVirtualInterfaceCommand_1 = require("./commands/DeleteVirtualInterfaceCommand");
const DescribeConnectionLoaCommand_1 = require("./commands/DescribeConnectionLoaCommand");
const DescribeConnectionsCommand_1 = require("./commands/DescribeConnectionsCommand");
const DescribeConnectionsOnInterconnectCommand_1 = require("./commands/DescribeConnectionsOnInterconnectCommand");
const DescribeDirectConnectGatewayAssociationProposalsCommand_1 = require("./commands/DescribeDirectConnectGatewayAssociationProposalsCommand");
const DescribeDirectConnectGatewayAssociationsCommand_1 = require("./commands/DescribeDirectConnectGatewayAssociationsCommand");
const DescribeDirectConnectGatewayAttachmentsCommand_1 = require("./commands/DescribeDirectConnectGatewayAttachmentsCommand");
const DescribeDirectConnectGatewaysCommand_1 = require("./commands/DescribeDirectConnectGatewaysCommand");
const DescribeHostedConnectionsCommand_1 = require("./commands/DescribeHostedConnectionsCommand");
const DescribeInterconnectLoaCommand_1 = require("./commands/DescribeInterconnectLoaCommand");
const DescribeInterconnectsCommand_1 = require("./commands/DescribeInterconnectsCommand");
const DescribeLagsCommand_1 = require("./commands/DescribeLagsCommand");
const DescribeLoaCommand_1 = require("./commands/DescribeLoaCommand");
const DescribeLocationsCommand_1 = require("./commands/DescribeLocationsCommand");
const DescribeTagsCommand_1 = require("./commands/DescribeTagsCommand");
const DescribeVirtualGatewaysCommand_1 = require("./commands/DescribeVirtualGatewaysCommand");
const DescribeVirtualInterfacesCommand_1 = require("./commands/DescribeVirtualInterfacesCommand");
const DisassociateConnectionFromLagCommand_1 = require("./commands/DisassociateConnectionFromLagCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
const UpdateDirectConnectGatewayAssociationCommand_1 = require("./commands/UpdateDirectConnectGatewayAssociationCommand");
const UpdateLagCommand_1 = require("./commands/UpdateLagCommand");
const UpdateVirtualInterfaceAttributesCommand_1 = require("./commands/UpdateVirtualInterfaceAttributesCommand");
/**
 * <p>AWS Direct Connect links your internal network to an AWS Direct Connect location over a standard Ethernet fiber-optic cable.
 *       One end of the cable is connected to your router, the other to an AWS Direct Connect router. With this connection
 *       in place, you can create virtual interfaces directly to the AWS cloud (for example, to Amazon EC2
 *       and Amazon S3) and to Amazon VPC, bypassing Internet service providers in your network path. A
 *       connection provides access to all AWS Regions except the China (Beijing) and (China) Ningxia Regions.
 *       AWS resources in the China Regions can only be accessed through locations associated with those Regions.</p>
 */
class DirectConnect extends DirectConnectClient_1.DirectConnectClient {
    acceptDirectConnectGatewayAssociationProposal(args, optionsOrCb, cb) {
        const command = new AcceptDirectConnectGatewayAssociationProposalCommand_1.AcceptDirectConnectGatewayAssociationProposalCommand(args);
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
    allocateConnectionOnInterconnect(args, optionsOrCb, cb) {
        const command = new AllocateConnectionOnInterconnectCommand_1.AllocateConnectionOnInterconnectCommand(args);
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
    allocateHostedConnection(args, optionsOrCb, cb) {
        const command = new AllocateHostedConnectionCommand_1.AllocateHostedConnectionCommand(args);
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
    allocatePrivateVirtualInterface(args, optionsOrCb, cb) {
        const command = new AllocatePrivateVirtualInterfaceCommand_1.AllocatePrivateVirtualInterfaceCommand(args);
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
    allocatePublicVirtualInterface(args, optionsOrCb, cb) {
        const command = new AllocatePublicVirtualInterfaceCommand_1.AllocatePublicVirtualInterfaceCommand(args);
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
    allocateTransitVirtualInterface(args, optionsOrCb, cb) {
        const command = new AllocateTransitVirtualInterfaceCommand_1.AllocateTransitVirtualInterfaceCommand(args);
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
    associateConnectionWithLag(args, optionsOrCb, cb) {
        const command = new AssociateConnectionWithLagCommand_1.AssociateConnectionWithLagCommand(args);
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
    associateHostedConnection(args, optionsOrCb, cb) {
        const command = new AssociateHostedConnectionCommand_1.AssociateHostedConnectionCommand(args);
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
    associateVirtualInterface(args, optionsOrCb, cb) {
        const command = new AssociateVirtualInterfaceCommand_1.AssociateVirtualInterfaceCommand(args);
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
    confirmConnection(args, optionsOrCb, cb) {
        const command = new ConfirmConnectionCommand_1.ConfirmConnectionCommand(args);
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
    confirmPrivateVirtualInterface(args, optionsOrCb, cb) {
        const command = new ConfirmPrivateVirtualInterfaceCommand_1.ConfirmPrivateVirtualInterfaceCommand(args);
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
    confirmPublicVirtualInterface(args, optionsOrCb, cb) {
        const command = new ConfirmPublicVirtualInterfaceCommand_1.ConfirmPublicVirtualInterfaceCommand(args);
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
    confirmTransitVirtualInterface(args, optionsOrCb, cb) {
        const command = new ConfirmTransitVirtualInterfaceCommand_1.ConfirmTransitVirtualInterfaceCommand(args);
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
    createBGPPeer(args, optionsOrCb, cb) {
        const command = new CreateBGPPeerCommand_1.CreateBGPPeerCommand(args);
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
    createConnection(args, optionsOrCb, cb) {
        const command = new CreateConnectionCommand_1.CreateConnectionCommand(args);
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
    createDirectConnectGateway(args, optionsOrCb, cb) {
        const command = new CreateDirectConnectGatewayCommand_1.CreateDirectConnectGatewayCommand(args);
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
    createDirectConnectGatewayAssociation(args, optionsOrCb, cb) {
        const command = new CreateDirectConnectGatewayAssociationCommand_1.CreateDirectConnectGatewayAssociationCommand(args);
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
    createDirectConnectGatewayAssociationProposal(args, optionsOrCb, cb) {
        const command = new CreateDirectConnectGatewayAssociationProposalCommand_1.CreateDirectConnectGatewayAssociationProposalCommand(args);
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
    createInterconnect(args, optionsOrCb, cb) {
        const command = new CreateInterconnectCommand_1.CreateInterconnectCommand(args);
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
    createLag(args, optionsOrCb, cb) {
        const command = new CreateLagCommand_1.CreateLagCommand(args);
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
    createPrivateVirtualInterface(args, optionsOrCb, cb) {
        const command = new CreatePrivateVirtualInterfaceCommand_1.CreatePrivateVirtualInterfaceCommand(args);
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
    createPublicVirtualInterface(args, optionsOrCb, cb) {
        const command = new CreatePublicVirtualInterfaceCommand_1.CreatePublicVirtualInterfaceCommand(args);
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
    createTransitVirtualInterface(args, optionsOrCb, cb) {
        const command = new CreateTransitVirtualInterfaceCommand_1.CreateTransitVirtualInterfaceCommand(args);
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
    deleteBGPPeer(args, optionsOrCb, cb) {
        const command = new DeleteBGPPeerCommand_1.DeleteBGPPeerCommand(args);
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
    deleteConnection(args, optionsOrCb, cb) {
        const command = new DeleteConnectionCommand_1.DeleteConnectionCommand(args);
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
    deleteDirectConnectGateway(args, optionsOrCb, cb) {
        const command = new DeleteDirectConnectGatewayCommand_1.DeleteDirectConnectGatewayCommand(args);
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
    deleteDirectConnectGatewayAssociation(args, optionsOrCb, cb) {
        const command = new DeleteDirectConnectGatewayAssociationCommand_1.DeleteDirectConnectGatewayAssociationCommand(args);
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
    deleteDirectConnectGatewayAssociationProposal(args, optionsOrCb, cb) {
        const command = new DeleteDirectConnectGatewayAssociationProposalCommand_1.DeleteDirectConnectGatewayAssociationProposalCommand(args);
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
    deleteInterconnect(args, optionsOrCb, cb) {
        const command = new DeleteInterconnectCommand_1.DeleteInterconnectCommand(args);
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
    deleteLag(args, optionsOrCb, cb) {
        const command = new DeleteLagCommand_1.DeleteLagCommand(args);
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
    deleteVirtualInterface(args, optionsOrCb, cb) {
        const command = new DeleteVirtualInterfaceCommand_1.DeleteVirtualInterfaceCommand(args);
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
    describeConnectionLoa(args, optionsOrCb, cb) {
        const command = new DescribeConnectionLoaCommand_1.DescribeConnectionLoaCommand(args);
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
    describeConnections(args, optionsOrCb, cb) {
        const command = new DescribeConnectionsCommand_1.DescribeConnectionsCommand(args);
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
    describeConnectionsOnInterconnect(args, optionsOrCb, cb) {
        const command = new DescribeConnectionsOnInterconnectCommand_1.DescribeConnectionsOnInterconnectCommand(args);
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
    describeDirectConnectGatewayAssociationProposals(args, optionsOrCb, cb) {
        const command = new DescribeDirectConnectGatewayAssociationProposalsCommand_1.DescribeDirectConnectGatewayAssociationProposalsCommand(args);
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
    describeDirectConnectGatewayAssociations(args, optionsOrCb, cb) {
        const command = new DescribeDirectConnectGatewayAssociationsCommand_1.DescribeDirectConnectGatewayAssociationsCommand(args);
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
    describeDirectConnectGatewayAttachments(args, optionsOrCb, cb) {
        const command = new DescribeDirectConnectGatewayAttachmentsCommand_1.DescribeDirectConnectGatewayAttachmentsCommand(args);
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
    describeDirectConnectGateways(args, optionsOrCb, cb) {
        const command = new DescribeDirectConnectGatewaysCommand_1.DescribeDirectConnectGatewaysCommand(args);
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
    describeHostedConnections(args, optionsOrCb, cb) {
        const command = new DescribeHostedConnectionsCommand_1.DescribeHostedConnectionsCommand(args);
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
    describeInterconnectLoa(args, optionsOrCb, cb) {
        const command = new DescribeInterconnectLoaCommand_1.DescribeInterconnectLoaCommand(args);
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
    describeInterconnects(args, optionsOrCb, cb) {
        const command = new DescribeInterconnectsCommand_1.DescribeInterconnectsCommand(args);
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
    describeLags(args, optionsOrCb, cb) {
        const command = new DescribeLagsCommand_1.DescribeLagsCommand(args);
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
    describeLoa(args, optionsOrCb, cb) {
        const command = new DescribeLoaCommand_1.DescribeLoaCommand(args);
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
    describeLocations(args, optionsOrCb, cb) {
        const command = new DescribeLocationsCommand_1.DescribeLocationsCommand(args);
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
    describeTags(args, optionsOrCb, cb) {
        const command = new DescribeTagsCommand_1.DescribeTagsCommand(args);
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
    describeVirtualGateways(args, optionsOrCb, cb) {
        const command = new DescribeVirtualGatewaysCommand_1.DescribeVirtualGatewaysCommand(args);
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
    describeVirtualInterfaces(args, optionsOrCb, cb) {
        const command = new DescribeVirtualInterfacesCommand_1.DescribeVirtualInterfacesCommand(args);
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
    disassociateConnectionFromLag(args, optionsOrCb, cb) {
        const command = new DisassociateConnectionFromLagCommand_1.DisassociateConnectionFromLagCommand(args);
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
    updateDirectConnectGatewayAssociation(args, optionsOrCb, cb) {
        const command = new UpdateDirectConnectGatewayAssociationCommand_1.UpdateDirectConnectGatewayAssociationCommand(args);
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
    updateLag(args, optionsOrCb, cb) {
        const command = new UpdateLagCommand_1.UpdateLagCommand(args);
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
    updateVirtualInterfaceAttributes(args, optionsOrCb, cb) {
        const command = new UpdateVirtualInterfaceAttributesCommand_1.UpdateVirtualInterfaceAttributesCommand(args);
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
exports.DirectConnect = DirectConnect;
//# sourceMappingURL=DirectConnect.js.map