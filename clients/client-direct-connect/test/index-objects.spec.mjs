import {
  AcceptDirectConnectGatewayAssociationProposalCommand,
  AddressFamily,
  AllocateConnectionOnInterconnectCommand,
  AllocateHostedConnectionCommand,
  AllocatePrivateVirtualInterfaceCommand,
  AllocatePublicVirtualInterfaceCommand,
  AllocateTransitVirtualInterfaceCommand,
  AssociateConnectionWithLagCommand,
  AssociateHostedConnectionCommand,
  AssociateMacSecKeyCommand,
  AssociateVirtualInterfaceCommand,
  BGPPeerState,
  BGPStatus,
  ConfirmConnectionCommand,
  ConfirmCustomerAgreementCommand,
  ConfirmPrivateVirtualInterfaceCommand,
  ConfirmPublicVirtualInterfaceCommand,
  ConfirmTransitVirtualInterfaceCommand,
  ConnectionState,
  CreateBGPPeerCommand,
  CreateConnectionCommand,
  CreateDirectConnectGatewayAssociationCommand,
  CreateDirectConnectGatewayAssociationProposalCommand,
  CreateDirectConnectGatewayCommand,
  CreateInterconnectCommand,
  CreateLagCommand,
  CreatePrivateVirtualInterfaceCommand,
  CreatePublicVirtualInterfaceCommand,
  CreateTransitVirtualInterfaceCommand,
  DeleteBGPPeerCommand,
  DeleteConnectionCommand,
  DeleteDirectConnectGatewayAssociationCommand,
  DeleteDirectConnectGatewayAssociationProposalCommand,
  DeleteDirectConnectGatewayCommand,
  DeleteInterconnectCommand,
  DeleteLagCommand,
  DeleteVirtualInterfaceCommand,
  DescribeConnectionLoaCommand,
  DescribeConnectionsCommand,
  DescribeConnectionsOnInterconnectCommand,
  DescribeCustomerMetadataCommand,
  DescribeDirectConnectGatewayAssociationProposalsCommand,
  DescribeDirectConnectGatewayAssociationsCommand,
  DescribeDirectConnectGatewayAttachmentsCommand,
  DescribeDirectConnectGatewaysCommand,
  DescribeHostedConnectionsCommand,
  DescribeInterconnectLoaCommand,
  DescribeInterconnectsCommand,
  DescribeLagsCommand,
  DescribeLoaCommand,
  DescribeLocationsCommand,
  DescribeRouterConfigurationCommand,
  DescribeTagsCommand,
  DescribeVirtualGatewaysCommand,
  DescribeVirtualInterfacesCommand,
  DirectConnect,
  DirectConnectClient,
  DirectConnectGatewayAssociationProposalState,
  DirectConnectGatewayAssociationState,
  DirectConnectGatewayAttachmentState,
  DirectConnectGatewayAttachmentType,
  DirectConnectGatewayState,
  DirectConnectServiceException,
  DisassociateConnectionFromLagCommand,
  DisassociateMacSecKeyCommand,
  GatewayType,
  HasLogicalRedundancy,
  InterconnectState,
  LagState,
  ListVirtualInterfaceTestHistoryCommand,
  LoaContentType,
  NniPartnerType,
  StartBgpFailoverTestCommand,
  StopBgpFailoverTestCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateConnectionCommand,
  UpdateDirectConnectGatewayAssociationCommand,
  UpdateDirectConnectGatewayCommand,
  UpdateLagCommand,
  UpdateVirtualInterfaceAttributesCommand,
  VirtualInterfaceState,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof DirectConnectClient === "function")
assert(typeof DirectConnect === "function")
// commands
assert(typeof AcceptDirectConnectGatewayAssociationProposalCommand === "function")
assert(typeof AllocateConnectionOnInterconnectCommand === "function")
assert(typeof AllocateHostedConnectionCommand === "function")
assert(typeof AllocatePrivateVirtualInterfaceCommand === "function")
assert(typeof AllocatePublicVirtualInterfaceCommand === "function")
assert(typeof AllocateTransitVirtualInterfaceCommand === "function")
assert(typeof AssociateConnectionWithLagCommand === "function")
assert(typeof AssociateHostedConnectionCommand === "function")
assert(typeof AssociateMacSecKeyCommand === "function")
assert(typeof AssociateVirtualInterfaceCommand === "function")
assert(typeof ConfirmConnectionCommand === "function")
assert(typeof ConfirmCustomerAgreementCommand === "function")
assert(typeof ConfirmPrivateVirtualInterfaceCommand === "function")
assert(typeof ConfirmPublicVirtualInterfaceCommand === "function")
assert(typeof ConfirmTransitVirtualInterfaceCommand === "function")
assert(typeof CreateBGPPeerCommand === "function")
assert(typeof CreateConnectionCommand === "function")
assert(typeof CreateDirectConnectGatewayCommand === "function")
assert(typeof CreateDirectConnectGatewayAssociationCommand === "function")
assert(typeof CreateDirectConnectGatewayAssociationProposalCommand === "function")
assert(typeof CreateInterconnectCommand === "function")
assert(typeof CreateLagCommand === "function")
assert(typeof CreatePrivateVirtualInterfaceCommand === "function")
assert(typeof CreatePublicVirtualInterfaceCommand === "function")
assert(typeof CreateTransitVirtualInterfaceCommand === "function")
assert(typeof DeleteBGPPeerCommand === "function")
assert(typeof DeleteConnectionCommand === "function")
assert(typeof DeleteDirectConnectGatewayCommand === "function")
assert(typeof DeleteDirectConnectGatewayAssociationCommand === "function")
assert(typeof DeleteDirectConnectGatewayAssociationProposalCommand === "function")
assert(typeof DeleteInterconnectCommand === "function")
assert(typeof DeleteLagCommand === "function")
assert(typeof DeleteVirtualInterfaceCommand === "function")
assert(typeof DescribeConnectionLoaCommand === "function")
assert(typeof DescribeConnectionsCommand === "function")
assert(typeof DescribeConnectionsOnInterconnectCommand === "function")
assert(typeof DescribeCustomerMetadataCommand === "function")
assert(typeof DescribeDirectConnectGatewayAssociationProposalsCommand === "function")
assert(typeof DescribeDirectConnectGatewayAssociationsCommand === "function")
assert(typeof DescribeDirectConnectGatewayAttachmentsCommand === "function")
assert(typeof DescribeDirectConnectGatewaysCommand === "function")
assert(typeof DescribeHostedConnectionsCommand === "function")
assert(typeof DescribeInterconnectLoaCommand === "function")
assert(typeof DescribeInterconnectsCommand === "function")
assert(typeof DescribeLagsCommand === "function")
assert(typeof DescribeLoaCommand === "function")
assert(typeof DescribeLocationsCommand === "function")
assert(typeof DescribeRouterConfigurationCommand === "function")
assert(typeof DescribeTagsCommand === "function")
assert(typeof DescribeVirtualGatewaysCommand === "function")
assert(typeof DescribeVirtualInterfacesCommand === "function")
assert(typeof DisassociateConnectionFromLagCommand === "function")
assert(typeof DisassociateMacSecKeyCommand === "function")
assert(typeof ListVirtualInterfaceTestHistoryCommand === "function")
assert(typeof StartBgpFailoverTestCommand === "function")
assert(typeof StopBgpFailoverTestCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateConnectionCommand === "function")
assert(typeof UpdateDirectConnectGatewayCommand === "function")
assert(typeof UpdateDirectConnectGatewayAssociationCommand === "function")
assert(typeof UpdateLagCommand === "function")
assert(typeof UpdateVirtualInterfaceAttributesCommand === "function")
// enums
assert(typeof AddressFamily === "object");
assert(typeof BGPPeerState === "object");
assert(typeof BGPStatus === "object");
assert(typeof ConnectionState === "object");
assert(typeof DirectConnectGatewayAssociationProposalState === "object");
assert(typeof DirectConnectGatewayAssociationState === "object");
assert(typeof DirectConnectGatewayAttachmentState === "object");
assert(typeof DirectConnectGatewayAttachmentType === "object");
assert(typeof DirectConnectGatewayState === "object");
assert(typeof GatewayType === "object");
assert(typeof HasLogicalRedundancy === "object");
assert(typeof InterconnectState === "object");
assert(typeof LagState === "object");
assert(typeof LoaContentType === "object");
assert(typeof NniPartnerType === "object");
assert(typeof VirtualInterfaceState === "object");
// errors
assert(DirectConnectServiceException.prototype instanceof Error)
console.log(`DirectConnect index test passed.`);
