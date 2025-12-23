import {
  AcceptDirectConnectGatewayAssociationProposal$,
  AcceptDirectConnectGatewayAssociationProposalCommand,
  AcceptDirectConnectGatewayAssociationProposalRequest$,
  AcceptDirectConnectGatewayAssociationProposalResult$,
  AddressFamily,
  AllocateConnectionOnInterconnect$,
  AllocateConnectionOnInterconnectCommand,
  AllocateConnectionOnInterconnectRequest$,
  AllocateHostedConnection$,
  AllocateHostedConnectionCommand,
  AllocateHostedConnectionRequest$,
  AllocatePrivateVirtualInterface$,
  AllocatePrivateVirtualInterfaceCommand,
  AllocatePrivateVirtualInterfaceRequest$,
  AllocatePublicVirtualInterface$,
  AllocatePublicVirtualInterfaceCommand,
  AllocatePublicVirtualInterfaceRequest$,
  AllocateTransitVirtualInterface$,
  AllocateTransitVirtualInterfaceCommand,
  AllocateTransitVirtualInterfaceRequest$,
  AllocateTransitVirtualInterfaceResult$,
  AssociateConnectionWithLag$,
  AssociateConnectionWithLagCommand,
  AssociateConnectionWithLagRequest$,
  AssociatedCoreNetwork$,
  AssociatedGateway$,
  AssociateHostedConnection$,
  AssociateHostedConnectionCommand,
  AssociateHostedConnectionRequest$,
  AssociateMacSecKey$,
  AssociateMacSecKeyCommand,
  AssociateMacSecKeyRequest$,
  AssociateMacSecKeyResponse$,
  AssociateVirtualInterface$,
  AssociateVirtualInterfaceCommand,
  AssociateVirtualInterfaceRequest$,
  BGPPeer$,
  BGPPeerState,
  BGPStatus,
  ConfirmConnection$,
  ConfirmConnectionCommand,
  ConfirmConnectionRequest$,
  ConfirmConnectionResponse$,
  ConfirmCustomerAgreement$,
  ConfirmCustomerAgreementCommand,
  ConfirmCustomerAgreementRequest$,
  ConfirmCustomerAgreementResponse$,
  ConfirmPrivateVirtualInterface$,
  ConfirmPrivateVirtualInterfaceCommand,
  ConfirmPrivateVirtualInterfaceRequest$,
  ConfirmPrivateVirtualInterfaceResponse$,
  ConfirmPublicVirtualInterface$,
  ConfirmPublicVirtualInterfaceCommand,
  ConfirmPublicVirtualInterfaceRequest$,
  ConfirmPublicVirtualInterfaceResponse$,
  ConfirmTransitVirtualInterface$,
  ConfirmTransitVirtualInterfaceCommand,
  ConfirmTransitVirtualInterfaceRequest$,
  ConfirmTransitVirtualInterfaceResponse$,
  Connection$,
  Connections$,
  ConnectionState,
  CreateBGPPeer$,
  CreateBGPPeerCommand,
  CreateBGPPeerRequest$,
  CreateBGPPeerResponse$,
  CreateConnection$,
  CreateConnectionCommand,
  CreateConnectionRequest$,
  CreateDirectConnectGateway$,
  CreateDirectConnectGatewayAssociation$,
  CreateDirectConnectGatewayAssociationCommand,
  CreateDirectConnectGatewayAssociationProposal$,
  CreateDirectConnectGatewayAssociationProposalCommand,
  CreateDirectConnectGatewayAssociationProposalRequest$,
  CreateDirectConnectGatewayAssociationProposalResult$,
  CreateDirectConnectGatewayAssociationRequest$,
  CreateDirectConnectGatewayAssociationResult$,
  CreateDirectConnectGatewayCommand,
  CreateDirectConnectGatewayRequest$,
  CreateDirectConnectGatewayResult$,
  CreateInterconnect$,
  CreateInterconnectCommand,
  CreateInterconnectRequest$,
  CreateLag$,
  CreateLagCommand,
  CreateLagRequest$,
  CreatePrivateVirtualInterface$,
  CreatePrivateVirtualInterfaceCommand,
  CreatePrivateVirtualInterfaceRequest$,
  CreatePublicVirtualInterface$,
  CreatePublicVirtualInterfaceCommand,
  CreatePublicVirtualInterfaceRequest$,
  CreateTransitVirtualInterface$,
  CreateTransitVirtualInterfaceCommand,
  CreateTransitVirtualInterfaceRequest$,
  CreateTransitVirtualInterfaceResult$,
  CustomerAgreement$,
  DeleteBGPPeer$,
  DeleteBGPPeerCommand,
  DeleteBGPPeerRequest$,
  DeleteBGPPeerResponse$,
  DeleteConnection$,
  DeleteConnectionCommand,
  DeleteConnectionRequest$,
  DeleteDirectConnectGateway$,
  DeleteDirectConnectGatewayAssociation$,
  DeleteDirectConnectGatewayAssociationCommand,
  DeleteDirectConnectGatewayAssociationProposal$,
  DeleteDirectConnectGatewayAssociationProposalCommand,
  DeleteDirectConnectGatewayAssociationProposalRequest$,
  DeleteDirectConnectGatewayAssociationProposalResult$,
  DeleteDirectConnectGatewayAssociationRequest$,
  DeleteDirectConnectGatewayAssociationResult$,
  DeleteDirectConnectGatewayCommand,
  DeleteDirectConnectGatewayRequest$,
  DeleteDirectConnectGatewayResult$,
  DeleteInterconnect$,
  DeleteInterconnectCommand,
  DeleteInterconnectRequest$,
  DeleteInterconnectResponse$,
  DeleteLag$,
  DeleteLagCommand,
  DeleteLagRequest$,
  DeleteVirtualInterface$,
  DeleteVirtualInterfaceCommand,
  DeleteVirtualInterfaceRequest$,
  DeleteVirtualInterfaceResponse$,
  DescribeConnectionLoa$,
  DescribeConnectionLoaCommand,
  DescribeConnectionLoaRequest$,
  DescribeConnectionLoaResponse$,
  DescribeConnections$,
  DescribeConnectionsCommand,
  DescribeConnectionsOnInterconnect$,
  DescribeConnectionsOnInterconnectCommand,
  DescribeConnectionsOnInterconnectRequest$,
  DescribeConnectionsRequest$,
  DescribeCustomerMetadata$,
  DescribeCustomerMetadataCommand,
  DescribeCustomerMetadataResponse$,
  DescribeDirectConnectGatewayAssociationProposals$,
  DescribeDirectConnectGatewayAssociationProposalsCommand,
  DescribeDirectConnectGatewayAssociationProposalsRequest$,
  DescribeDirectConnectGatewayAssociationProposalsResult$,
  DescribeDirectConnectGatewayAssociations$,
  DescribeDirectConnectGatewayAssociationsCommand,
  DescribeDirectConnectGatewayAssociationsRequest$,
  DescribeDirectConnectGatewayAssociationsResult$,
  DescribeDirectConnectGatewayAttachments$,
  DescribeDirectConnectGatewayAttachmentsCommand,
  DescribeDirectConnectGatewayAttachmentsRequest$,
  DescribeDirectConnectGatewayAttachmentsResult$,
  DescribeDirectConnectGateways$,
  DescribeDirectConnectGatewaysCommand,
  DescribeDirectConnectGatewaysRequest$,
  DescribeDirectConnectGatewaysResult$,
  DescribeHostedConnections$,
  DescribeHostedConnectionsCommand,
  DescribeHostedConnectionsRequest$,
  DescribeInterconnectLoa$,
  DescribeInterconnectLoaCommand,
  DescribeInterconnectLoaRequest$,
  DescribeInterconnectLoaResponse$,
  DescribeInterconnects$,
  DescribeInterconnectsCommand,
  DescribeInterconnectsRequest$,
  DescribeLags$,
  DescribeLagsCommand,
  DescribeLagsRequest$,
  DescribeLoa$,
  DescribeLoaCommand,
  DescribeLoaRequest$,
  DescribeLocations$,
  DescribeLocationsCommand,
  DescribeRouterConfiguration$,
  DescribeRouterConfigurationCommand,
  DescribeRouterConfigurationRequest$,
  DescribeRouterConfigurationResponse$,
  DescribeTags$,
  DescribeTagsCommand,
  DescribeTagsRequest$,
  DescribeTagsResponse$,
  DescribeVirtualGateways$,
  DescribeVirtualGatewaysCommand,
  DescribeVirtualInterfaces$,
  DescribeVirtualInterfacesCommand,
  DescribeVirtualInterfacesRequest$,
  DirectConnect,
  DirectConnectClient,
  DirectConnectClientException,
  DirectConnectClientException$,
  DirectConnectGateway$,
  DirectConnectGatewayAssociation$,
  DirectConnectGatewayAssociationProposal$,
  DirectConnectGatewayAssociationProposalState,
  DirectConnectGatewayAssociationState,
  DirectConnectGatewayAttachment$,
  DirectConnectGatewayAttachmentState,
  DirectConnectGatewayAttachmentType,
  DirectConnectGatewayState,
  DirectConnectServerException,
  DirectConnectServerException$,
  DirectConnectServiceException,
  DisassociateConnectionFromLag$,
  DisassociateConnectionFromLagCommand,
  DisassociateConnectionFromLagRequest$,
  DisassociateMacSecKey$,
  DisassociateMacSecKeyCommand,
  DisassociateMacSecKeyRequest$,
  DisassociateMacSecKeyResponse$,
  DuplicateTagKeysException,
  DuplicateTagKeysException$,
  GatewayType,
  HasLogicalRedundancy,
  Interconnect$,
  Interconnects$,
  InterconnectState,
  Lag$,
  Lags$,
  LagState,
  ListVirtualInterfaceTestHistory$,
  ListVirtualInterfaceTestHistoryCommand,
  ListVirtualInterfaceTestHistoryRequest$,
  ListVirtualInterfaceTestHistoryResponse$,
  Loa$,
  LoaContentType,
  Location$,
  Locations$,
  MacSecKey$,
  NewBGPPeer$,
  NewPrivateVirtualInterface$,
  NewPrivateVirtualInterfaceAllocation$,
  NewPublicVirtualInterface$,
  NewPublicVirtualInterfaceAllocation$,
  NewTransitVirtualInterface$,
  NewTransitVirtualInterfaceAllocation$,
  NniPartnerType,
  ResourceTag$,
  RouteFilterPrefix$,
  RouterType$,
  StartBgpFailoverTest$,
  StartBgpFailoverTestCommand,
  StartBgpFailoverTestRequest$,
  StartBgpFailoverTestResponse$,
  StopBgpFailoverTest$,
  StopBgpFailoverTestCommand,
  StopBgpFailoverTestRequest$,
  StopBgpFailoverTestResponse$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TooManyTagsException,
  TooManyTagsException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateConnection$,
  UpdateConnectionCommand,
  UpdateConnectionRequest$,
  UpdateDirectConnectGateway$,
  UpdateDirectConnectGatewayAssociation$,
  UpdateDirectConnectGatewayAssociationCommand,
  UpdateDirectConnectGatewayAssociationRequest$,
  UpdateDirectConnectGatewayAssociationResult$,
  UpdateDirectConnectGatewayCommand,
  UpdateDirectConnectGatewayRequest$,
  UpdateDirectConnectGatewayResponse$,
  UpdateLag$,
  UpdateLagCommand,
  UpdateLagRequest$,
  UpdateVirtualInterfaceAttributes$,
  UpdateVirtualInterfaceAttributesCommand,
  UpdateVirtualInterfaceAttributesRequest$,
  VirtualGateway$,
  VirtualGateways$,
  VirtualInterface$,
  VirtualInterfaces$,
  VirtualInterfaceState,
  VirtualInterfaceTestHistory$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof DirectConnectClient === "function");
assert(typeof DirectConnect === "function");
// commands
assert(typeof AcceptDirectConnectGatewayAssociationProposalCommand === "function");
assert(typeof AcceptDirectConnectGatewayAssociationProposal$ === "object");
assert(typeof AllocateConnectionOnInterconnectCommand === "function");
assert(typeof AllocateConnectionOnInterconnect$ === "object");
assert(typeof AllocateHostedConnectionCommand === "function");
assert(typeof AllocateHostedConnection$ === "object");
assert(typeof AllocatePrivateVirtualInterfaceCommand === "function");
assert(typeof AllocatePrivateVirtualInterface$ === "object");
assert(typeof AllocatePublicVirtualInterfaceCommand === "function");
assert(typeof AllocatePublicVirtualInterface$ === "object");
assert(typeof AllocateTransitVirtualInterfaceCommand === "function");
assert(typeof AllocateTransitVirtualInterface$ === "object");
assert(typeof AssociateConnectionWithLagCommand === "function");
assert(typeof AssociateConnectionWithLag$ === "object");
assert(typeof AssociateHostedConnectionCommand === "function");
assert(typeof AssociateHostedConnection$ === "object");
assert(typeof AssociateMacSecKeyCommand === "function");
assert(typeof AssociateMacSecKey$ === "object");
assert(typeof AssociateVirtualInterfaceCommand === "function");
assert(typeof AssociateVirtualInterface$ === "object");
assert(typeof ConfirmConnectionCommand === "function");
assert(typeof ConfirmConnection$ === "object");
assert(typeof ConfirmCustomerAgreementCommand === "function");
assert(typeof ConfirmCustomerAgreement$ === "object");
assert(typeof ConfirmPrivateVirtualInterfaceCommand === "function");
assert(typeof ConfirmPrivateVirtualInterface$ === "object");
assert(typeof ConfirmPublicVirtualInterfaceCommand === "function");
assert(typeof ConfirmPublicVirtualInterface$ === "object");
assert(typeof ConfirmTransitVirtualInterfaceCommand === "function");
assert(typeof ConfirmTransitVirtualInterface$ === "object");
assert(typeof CreateBGPPeerCommand === "function");
assert(typeof CreateBGPPeer$ === "object");
assert(typeof CreateConnectionCommand === "function");
assert(typeof CreateConnection$ === "object");
assert(typeof CreateDirectConnectGatewayCommand === "function");
assert(typeof CreateDirectConnectGateway$ === "object");
assert(typeof CreateDirectConnectGatewayAssociationCommand === "function");
assert(typeof CreateDirectConnectGatewayAssociation$ === "object");
assert(typeof CreateDirectConnectGatewayAssociationProposalCommand === "function");
assert(typeof CreateDirectConnectGatewayAssociationProposal$ === "object");
assert(typeof CreateInterconnectCommand === "function");
assert(typeof CreateInterconnect$ === "object");
assert(typeof CreateLagCommand === "function");
assert(typeof CreateLag$ === "object");
assert(typeof CreatePrivateVirtualInterfaceCommand === "function");
assert(typeof CreatePrivateVirtualInterface$ === "object");
assert(typeof CreatePublicVirtualInterfaceCommand === "function");
assert(typeof CreatePublicVirtualInterface$ === "object");
assert(typeof CreateTransitVirtualInterfaceCommand === "function");
assert(typeof CreateTransitVirtualInterface$ === "object");
assert(typeof DeleteBGPPeerCommand === "function");
assert(typeof DeleteBGPPeer$ === "object");
assert(typeof DeleteConnectionCommand === "function");
assert(typeof DeleteConnection$ === "object");
assert(typeof DeleteDirectConnectGatewayCommand === "function");
assert(typeof DeleteDirectConnectGateway$ === "object");
assert(typeof DeleteDirectConnectGatewayAssociationCommand === "function");
assert(typeof DeleteDirectConnectGatewayAssociation$ === "object");
assert(typeof DeleteDirectConnectGatewayAssociationProposalCommand === "function");
assert(typeof DeleteDirectConnectGatewayAssociationProposal$ === "object");
assert(typeof DeleteInterconnectCommand === "function");
assert(typeof DeleteInterconnect$ === "object");
assert(typeof DeleteLagCommand === "function");
assert(typeof DeleteLag$ === "object");
assert(typeof DeleteVirtualInterfaceCommand === "function");
assert(typeof DeleteVirtualInterface$ === "object");
assert(typeof DescribeConnectionLoaCommand === "function");
assert(typeof DescribeConnectionLoa$ === "object");
assert(typeof DescribeConnectionsCommand === "function");
assert(typeof DescribeConnections$ === "object");
assert(typeof DescribeConnectionsOnInterconnectCommand === "function");
assert(typeof DescribeConnectionsOnInterconnect$ === "object");
assert(typeof DescribeCustomerMetadataCommand === "function");
assert(typeof DescribeCustomerMetadata$ === "object");
assert(typeof DescribeDirectConnectGatewayAssociationProposalsCommand === "function");
assert(typeof DescribeDirectConnectGatewayAssociationProposals$ === "object");
assert(typeof DescribeDirectConnectGatewayAssociationsCommand === "function");
assert(typeof DescribeDirectConnectGatewayAssociations$ === "object");
assert(typeof DescribeDirectConnectGatewayAttachmentsCommand === "function");
assert(typeof DescribeDirectConnectGatewayAttachments$ === "object");
assert(typeof DescribeDirectConnectGatewaysCommand === "function");
assert(typeof DescribeDirectConnectGateways$ === "object");
assert(typeof DescribeHostedConnectionsCommand === "function");
assert(typeof DescribeHostedConnections$ === "object");
assert(typeof DescribeInterconnectLoaCommand === "function");
assert(typeof DescribeInterconnectLoa$ === "object");
assert(typeof DescribeInterconnectsCommand === "function");
assert(typeof DescribeInterconnects$ === "object");
assert(typeof DescribeLagsCommand === "function");
assert(typeof DescribeLags$ === "object");
assert(typeof DescribeLoaCommand === "function");
assert(typeof DescribeLoa$ === "object");
assert(typeof DescribeLocationsCommand === "function");
assert(typeof DescribeLocations$ === "object");
assert(typeof DescribeRouterConfigurationCommand === "function");
assert(typeof DescribeRouterConfiguration$ === "object");
assert(typeof DescribeTagsCommand === "function");
assert(typeof DescribeTags$ === "object");
assert(typeof DescribeVirtualGatewaysCommand === "function");
assert(typeof DescribeVirtualGateways$ === "object");
assert(typeof DescribeVirtualInterfacesCommand === "function");
assert(typeof DescribeVirtualInterfaces$ === "object");
assert(typeof DisassociateConnectionFromLagCommand === "function");
assert(typeof DisassociateConnectionFromLag$ === "object");
assert(typeof DisassociateMacSecKeyCommand === "function");
assert(typeof DisassociateMacSecKey$ === "object");
assert(typeof ListVirtualInterfaceTestHistoryCommand === "function");
assert(typeof ListVirtualInterfaceTestHistory$ === "object");
assert(typeof StartBgpFailoverTestCommand === "function");
assert(typeof StartBgpFailoverTest$ === "object");
assert(typeof StopBgpFailoverTestCommand === "function");
assert(typeof StopBgpFailoverTest$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateConnectionCommand === "function");
assert(typeof UpdateConnection$ === "object");
assert(typeof UpdateDirectConnectGatewayCommand === "function");
assert(typeof UpdateDirectConnectGateway$ === "object");
assert(typeof UpdateDirectConnectGatewayAssociationCommand === "function");
assert(typeof UpdateDirectConnectGatewayAssociation$ === "object");
assert(typeof UpdateLagCommand === "function");
assert(typeof UpdateLag$ === "object");
assert(typeof UpdateVirtualInterfaceAttributesCommand === "function");
assert(typeof UpdateVirtualInterfaceAttributes$ === "object");
// structural schemas
assert(typeof AcceptDirectConnectGatewayAssociationProposalRequest$ === "object");
assert(typeof AcceptDirectConnectGatewayAssociationProposalResult$ === "object");
assert(typeof AllocateConnectionOnInterconnectRequest$ === "object");
assert(typeof AllocateHostedConnectionRequest$ === "object");
assert(typeof AllocatePrivateVirtualInterfaceRequest$ === "object");
assert(typeof AllocatePublicVirtualInterfaceRequest$ === "object");
assert(typeof AllocateTransitVirtualInterfaceRequest$ === "object");
assert(typeof AllocateTransitVirtualInterfaceResult$ === "object");
assert(typeof AssociateConnectionWithLagRequest$ === "object");
assert(typeof AssociatedCoreNetwork$ === "object");
assert(typeof AssociatedGateway$ === "object");
assert(typeof AssociateHostedConnectionRequest$ === "object");
assert(typeof AssociateMacSecKeyRequest$ === "object");
assert(typeof AssociateMacSecKeyResponse$ === "object");
assert(typeof AssociateVirtualInterfaceRequest$ === "object");
assert(typeof BGPPeer$ === "object");
assert(typeof ConfirmConnectionRequest$ === "object");
assert(typeof ConfirmConnectionResponse$ === "object");
assert(typeof ConfirmCustomerAgreementRequest$ === "object");
assert(typeof ConfirmCustomerAgreementResponse$ === "object");
assert(typeof ConfirmPrivateVirtualInterfaceRequest$ === "object");
assert(typeof ConfirmPrivateVirtualInterfaceResponse$ === "object");
assert(typeof ConfirmPublicVirtualInterfaceRequest$ === "object");
assert(typeof ConfirmPublicVirtualInterfaceResponse$ === "object");
assert(typeof ConfirmTransitVirtualInterfaceRequest$ === "object");
assert(typeof ConfirmTransitVirtualInterfaceResponse$ === "object");
assert(typeof Connection$ === "object");
assert(typeof Connections$ === "object");
assert(typeof CreateBGPPeerRequest$ === "object");
assert(typeof CreateBGPPeerResponse$ === "object");
assert(typeof CreateConnectionRequest$ === "object");
assert(typeof CreateDirectConnectGatewayAssociationProposalRequest$ === "object");
assert(typeof CreateDirectConnectGatewayAssociationProposalResult$ === "object");
assert(typeof CreateDirectConnectGatewayAssociationRequest$ === "object");
assert(typeof CreateDirectConnectGatewayAssociationResult$ === "object");
assert(typeof CreateDirectConnectGatewayRequest$ === "object");
assert(typeof CreateDirectConnectGatewayResult$ === "object");
assert(typeof CreateInterconnectRequest$ === "object");
assert(typeof CreateLagRequest$ === "object");
assert(typeof CreatePrivateVirtualInterfaceRequest$ === "object");
assert(typeof CreatePublicVirtualInterfaceRequest$ === "object");
assert(typeof CreateTransitVirtualInterfaceRequest$ === "object");
assert(typeof CreateTransitVirtualInterfaceResult$ === "object");
assert(typeof CustomerAgreement$ === "object");
assert(typeof DeleteBGPPeerRequest$ === "object");
assert(typeof DeleteBGPPeerResponse$ === "object");
assert(typeof DeleteConnectionRequest$ === "object");
assert(typeof DeleteDirectConnectGatewayAssociationProposalRequest$ === "object");
assert(typeof DeleteDirectConnectGatewayAssociationProposalResult$ === "object");
assert(typeof DeleteDirectConnectGatewayAssociationRequest$ === "object");
assert(typeof DeleteDirectConnectGatewayAssociationResult$ === "object");
assert(typeof DeleteDirectConnectGatewayRequest$ === "object");
assert(typeof DeleteDirectConnectGatewayResult$ === "object");
assert(typeof DeleteInterconnectRequest$ === "object");
assert(typeof DeleteInterconnectResponse$ === "object");
assert(typeof DeleteLagRequest$ === "object");
assert(typeof DeleteVirtualInterfaceRequest$ === "object");
assert(typeof DeleteVirtualInterfaceResponse$ === "object");
assert(typeof DescribeConnectionLoaRequest$ === "object");
assert(typeof DescribeConnectionLoaResponse$ === "object");
assert(typeof DescribeConnectionsOnInterconnectRequest$ === "object");
assert(typeof DescribeConnectionsRequest$ === "object");
assert(typeof DescribeCustomerMetadataResponse$ === "object");
assert(typeof DescribeDirectConnectGatewayAssociationProposalsRequest$ === "object");
assert(typeof DescribeDirectConnectGatewayAssociationProposalsResult$ === "object");
assert(typeof DescribeDirectConnectGatewayAssociationsRequest$ === "object");
assert(typeof DescribeDirectConnectGatewayAssociationsResult$ === "object");
assert(typeof DescribeDirectConnectGatewayAttachmentsRequest$ === "object");
assert(typeof DescribeDirectConnectGatewayAttachmentsResult$ === "object");
assert(typeof DescribeDirectConnectGatewaysRequest$ === "object");
assert(typeof DescribeDirectConnectGatewaysResult$ === "object");
assert(typeof DescribeHostedConnectionsRequest$ === "object");
assert(typeof DescribeInterconnectLoaRequest$ === "object");
assert(typeof DescribeInterconnectLoaResponse$ === "object");
assert(typeof DescribeInterconnectsRequest$ === "object");
assert(typeof DescribeLagsRequest$ === "object");
assert(typeof DescribeLoaRequest$ === "object");
assert(typeof DescribeRouterConfigurationRequest$ === "object");
assert(typeof DescribeRouterConfigurationResponse$ === "object");
assert(typeof DescribeTagsRequest$ === "object");
assert(typeof DescribeTagsResponse$ === "object");
assert(typeof DescribeVirtualInterfacesRequest$ === "object");
assert(typeof DirectConnectGateway$ === "object");
assert(typeof DirectConnectGatewayAssociation$ === "object");
assert(typeof DirectConnectGatewayAssociationProposal$ === "object");
assert(typeof DirectConnectGatewayAttachment$ === "object");
assert(typeof DisassociateConnectionFromLagRequest$ === "object");
assert(typeof DisassociateMacSecKeyRequest$ === "object");
assert(typeof DisassociateMacSecKeyResponse$ === "object");
assert(typeof Interconnect$ === "object");
assert(typeof Interconnects$ === "object");
assert(typeof Lag$ === "object");
assert(typeof Lags$ === "object");
assert(typeof ListVirtualInterfaceTestHistoryRequest$ === "object");
assert(typeof ListVirtualInterfaceTestHistoryResponse$ === "object");
assert(typeof Loa$ === "object");
assert(typeof Location$ === "object");
assert(typeof Locations$ === "object");
assert(typeof MacSecKey$ === "object");
assert(typeof NewBGPPeer$ === "object");
assert(typeof NewPrivateVirtualInterface$ === "object");
assert(typeof NewPrivateVirtualInterfaceAllocation$ === "object");
assert(typeof NewPublicVirtualInterface$ === "object");
assert(typeof NewPublicVirtualInterfaceAllocation$ === "object");
assert(typeof NewTransitVirtualInterface$ === "object");
assert(typeof NewTransitVirtualInterfaceAllocation$ === "object");
assert(typeof ResourceTag$ === "object");
assert(typeof RouteFilterPrefix$ === "object");
assert(typeof RouterType$ === "object");
assert(typeof StartBgpFailoverTestRequest$ === "object");
assert(typeof StartBgpFailoverTestResponse$ === "object");
assert(typeof StopBgpFailoverTestRequest$ === "object");
assert(typeof StopBgpFailoverTestResponse$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateConnectionRequest$ === "object");
assert(typeof UpdateDirectConnectGatewayAssociationRequest$ === "object");
assert(typeof UpdateDirectConnectGatewayAssociationResult$ === "object");
assert(typeof UpdateDirectConnectGatewayRequest$ === "object");
assert(typeof UpdateDirectConnectGatewayResponse$ === "object");
assert(typeof UpdateLagRequest$ === "object");
assert(typeof UpdateVirtualInterfaceAttributesRequest$ === "object");
assert(typeof VirtualGateway$ === "object");
assert(typeof VirtualGateways$ === "object");
assert(typeof VirtualInterface$ === "object");
assert(typeof VirtualInterfaces$ === "object");
assert(typeof VirtualInterfaceTestHistory$ === "object");
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
assert(DirectConnectClientException.prototype instanceof DirectConnectServiceException);
assert(typeof DirectConnectClientException$ === "object");
assert(DirectConnectServerException.prototype instanceof DirectConnectServiceException);
assert(typeof DirectConnectServerException$ === "object");
assert(DuplicateTagKeysException.prototype instanceof DirectConnectServiceException);
assert(typeof DuplicateTagKeysException$ === "object");
assert(TooManyTagsException.prototype instanceof DirectConnectServiceException);
assert(typeof TooManyTagsException$ === "object");
assert(DirectConnectServiceException.prototype instanceof Error);
console.log(`DirectConnect index test passed.`);
