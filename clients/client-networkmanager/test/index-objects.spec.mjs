import {
  AcceptAttachmentCommand,
  AssociateConnectPeerCommand,
  AssociateCustomerGatewayCommand,
  AssociateLinkCommand,
  AssociateTransitGatewayConnectPeerCommand,
  AttachmentErrorCode,
  AttachmentState,
  AttachmentType,
  ChangeAction,
  ChangeSetState,
  ChangeStatus,
  ChangeType,
  ConnectPeerAssociationState,
  ConnectPeerErrorCode,
  ConnectPeerState,
  ConnectionState,
  ConnectionStatus,
  ConnectionType,
  CoreNetworkPolicyAlias,
  CoreNetworkState,
  CreateConnectAttachmentCommand,
  CreateConnectPeerCommand,
  CreateConnectionCommand,
  CreateCoreNetworkCommand,
  CreateCoreNetworkPrefixListAssociationCommand,
  CreateDeviceCommand,
  CreateDirectConnectGatewayAttachmentCommand,
  CreateGlobalNetworkCommand,
  CreateLinkCommand,
  CreateSiteCommand,
  CreateSiteToSiteVpnAttachmentCommand,
  CreateTransitGatewayPeeringCommand,
  CreateTransitGatewayRouteTableAttachmentCommand,
  CreateVpcAttachmentCommand,
  CustomerGatewayAssociationState,
  DeleteAttachmentCommand,
  DeleteConnectPeerCommand,
  DeleteConnectionCommand,
  DeleteCoreNetworkCommand,
  DeleteCoreNetworkPolicyVersionCommand,
  DeleteCoreNetworkPrefixListAssociationCommand,
  DeleteDeviceCommand,
  DeleteGlobalNetworkCommand,
  DeleteLinkCommand,
  DeletePeeringCommand,
  DeleteResourcePolicyCommand,
  DeleteSiteCommand,
  DeregisterTransitGatewayCommand,
  DescribeGlobalNetworksCommand,
  DeviceState,
  DisassociateConnectPeerCommand,
  DisassociateCustomerGatewayCommand,
  DisassociateLinkCommand,
  DisassociateTransitGatewayConnectPeerCommand,
  ExecuteCoreNetworkChangeSetCommand,
  GetConnectAttachmentCommand,
  GetConnectPeerAssociationsCommand,
  GetConnectPeerCommand,
  GetConnectionsCommand,
  GetCoreNetworkChangeEventsCommand,
  GetCoreNetworkChangeSetCommand,
  GetCoreNetworkCommand,
  GetCoreNetworkPolicyCommand,
  GetCustomerGatewayAssociationsCommand,
  GetDevicesCommand,
  GetDirectConnectGatewayAttachmentCommand,
  GetLinkAssociationsCommand,
  GetLinksCommand,
  GetNetworkResourceCountsCommand,
  GetNetworkResourceRelationshipsCommand,
  GetNetworkResourcesCommand,
  GetNetworkRoutesCommand,
  GetNetworkTelemetryCommand,
  GetResourcePolicyCommand,
  GetRouteAnalysisCommand,
  GetSiteToSiteVpnAttachmentCommand,
  GetSitesCommand,
  GetTransitGatewayConnectPeerAssociationsCommand,
  GetTransitGatewayPeeringCommand,
  GetTransitGatewayRegistrationsCommand,
  GetTransitGatewayRouteTableAttachmentCommand,
  GetVpcAttachmentCommand,
  GlobalNetworkState,
  LinkAssociationState,
  LinkState,
  ListAttachmentRoutingPolicyAssociationsCommand,
  ListAttachmentsCommand,
  ListConnectPeersCommand,
  ListCoreNetworkPolicyVersionsCommand,
  ListCoreNetworkPrefixListAssociationsCommand,
  ListCoreNetworkRoutingInformationCommand,
  ListCoreNetworksCommand,
  ListOrganizationServiceAccessStatusCommand,
  ListPeeringsCommand,
  ListTagsForResourceCommand,
  NetworkManager,
  NetworkManagerClient,
  NetworkManagerServiceException,
  PeeringErrorCode,
  PeeringState,
  PeeringType,
  PutAttachmentRoutingPolicyLabelCommand,
  PutCoreNetworkPolicyCommand,
  PutResourcePolicyCommand,
  RegisterTransitGatewayCommand,
  RejectAttachmentCommand,
  RemoveAttachmentRoutingPolicyLabelCommand,
  RestoreCoreNetworkPolicyVersionCommand,
  RouteAnalysisCompletionReasonCode,
  RouteAnalysisCompletionResultCode,
  RouteAnalysisStatus,
  RouteState,
  RouteTableType,
  RouteType,
  RoutingPolicyDirection,
  SegmentActionServiceInsertion,
  SendViaMode,
  SiteState,
  StartOrganizationServiceAccessUpdateCommand,
  StartRouteAnalysisCommand,
  TagResourceCommand,
  TransitGatewayConnectPeerAssociationState,
  TransitGatewayRegistrationState,
  TunnelProtocol,
  UntagResourceCommand,
  UpdateConnectionCommand,
  UpdateCoreNetworkCommand,
  UpdateDeviceCommand,
  UpdateDirectConnectGatewayAttachmentCommand,
  UpdateGlobalNetworkCommand,
  UpdateLinkCommand,
  UpdateNetworkResourceMetadataCommand,
  UpdateSiteCommand,
  UpdateVpcAttachmentCommand,
  paginateDescribeGlobalNetworks,
  paginateGetConnectPeerAssociations,
  paginateGetConnections,
  paginateGetCoreNetworkChangeEvents,
  paginateGetCoreNetworkChangeSet,
  paginateGetCustomerGatewayAssociations,
  paginateGetDevices,
  paginateGetLinkAssociations,
  paginateGetLinks,
  paginateGetNetworkResourceCounts,
  paginateGetNetworkResourceRelationships,
  paginateGetNetworkResources,
  paginateGetNetworkTelemetry,
  paginateGetSites,
  paginateGetTransitGatewayConnectPeerAssociations,
  paginateGetTransitGatewayRegistrations,
  paginateListAttachmentRoutingPolicyAssociations,
  paginateListAttachments,
  paginateListConnectPeers,
  paginateListCoreNetworkPolicyVersions,
  paginateListCoreNetworkPrefixListAssociations,
  paginateListCoreNetworkRoutingInformation,
  paginateListCoreNetworks,
  paginateListPeerings,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof NetworkManagerClient === "function");
assert(typeof NetworkManager === "function");
// commands
assert(typeof AcceptAttachmentCommand === "function");
assert(typeof AssociateConnectPeerCommand === "function");
assert(typeof AssociateCustomerGatewayCommand === "function");
assert(typeof AssociateLinkCommand === "function");
assert(typeof AssociateTransitGatewayConnectPeerCommand === "function");
assert(typeof CreateConnectAttachmentCommand === "function");
assert(typeof CreateConnectionCommand === "function");
assert(typeof CreateConnectPeerCommand === "function");
assert(typeof CreateCoreNetworkCommand === "function");
assert(typeof CreateCoreNetworkPrefixListAssociationCommand === "function");
assert(typeof CreateDeviceCommand === "function");
assert(typeof CreateDirectConnectGatewayAttachmentCommand === "function");
assert(typeof CreateGlobalNetworkCommand === "function");
assert(typeof CreateLinkCommand === "function");
assert(typeof CreateSiteCommand === "function");
assert(typeof CreateSiteToSiteVpnAttachmentCommand === "function");
assert(typeof CreateTransitGatewayPeeringCommand === "function");
assert(typeof CreateTransitGatewayRouteTableAttachmentCommand === "function");
assert(typeof CreateVpcAttachmentCommand === "function");
assert(typeof DeleteAttachmentCommand === "function");
assert(typeof DeleteConnectionCommand === "function");
assert(typeof DeleteConnectPeerCommand === "function");
assert(typeof DeleteCoreNetworkCommand === "function");
assert(typeof DeleteCoreNetworkPolicyVersionCommand === "function");
assert(typeof DeleteCoreNetworkPrefixListAssociationCommand === "function");
assert(typeof DeleteDeviceCommand === "function");
assert(typeof DeleteGlobalNetworkCommand === "function");
assert(typeof DeleteLinkCommand === "function");
assert(typeof DeletePeeringCommand === "function");
assert(typeof DeleteResourcePolicyCommand === "function");
assert(typeof DeleteSiteCommand === "function");
assert(typeof DeregisterTransitGatewayCommand === "function");
assert(typeof DescribeGlobalNetworksCommand === "function");
assert(typeof DisassociateConnectPeerCommand === "function");
assert(typeof DisassociateCustomerGatewayCommand === "function");
assert(typeof DisassociateLinkCommand === "function");
assert(typeof DisassociateTransitGatewayConnectPeerCommand === "function");
assert(typeof ExecuteCoreNetworkChangeSetCommand === "function");
assert(typeof GetConnectAttachmentCommand === "function");
assert(typeof GetConnectionsCommand === "function");
assert(typeof GetConnectPeerCommand === "function");
assert(typeof GetConnectPeerAssociationsCommand === "function");
assert(typeof GetCoreNetworkCommand === "function");
assert(typeof GetCoreNetworkChangeEventsCommand === "function");
assert(typeof GetCoreNetworkChangeSetCommand === "function");
assert(typeof GetCoreNetworkPolicyCommand === "function");
assert(typeof GetCustomerGatewayAssociationsCommand === "function");
assert(typeof GetDevicesCommand === "function");
assert(typeof GetDirectConnectGatewayAttachmentCommand === "function");
assert(typeof GetLinkAssociationsCommand === "function");
assert(typeof GetLinksCommand === "function");
assert(typeof GetNetworkResourceCountsCommand === "function");
assert(typeof GetNetworkResourceRelationshipsCommand === "function");
assert(typeof GetNetworkResourcesCommand === "function");
assert(typeof GetNetworkRoutesCommand === "function");
assert(typeof GetNetworkTelemetryCommand === "function");
assert(typeof GetResourcePolicyCommand === "function");
assert(typeof GetRouteAnalysisCommand === "function");
assert(typeof GetSitesCommand === "function");
assert(typeof GetSiteToSiteVpnAttachmentCommand === "function");
assert(typeof GetTransitGatewayConnectPeerAssociationsCommand === "function");
assert(typeof GetTransitGatewayPeeringCommand === "function");
assert(typeof GetTransitGatewayRegistrationsCommand === "function");
assert(typeof GetTransitGatewayRouteTableAttachmentCommand === "function");
assert(typeof GetVpcAttachmentCommand === "function");
assert(typeof ListAttachmentRoutingPolicyAssociationsCommand === "function");
assert(typeof ListAttachmentsCommand === "function");
assert(typeof ListConnectPeersCommand === "function");
assert(typeof ListCoreNetworkPolicyVersionsCommand === "function");
assert(typeof ListCoreNetworkPrefixListAssociationsCommand === "function");
assert(typeof ListCoreNetworkRoutingInformationCommand === "function");
assert(typeof ListCoreNetworksCommand === "function");
assert(typeof ListOrganizationServiceAccessStatusCommand === "function");
assert(typeof ListPeeringsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof PutAttachmentRoutingPolicyLabelCommand === "function");
assert(typeof PutCoreNetworkPolicyCommand === "function");
assert(typeof PutResourcePolicyCommand === "function");
assert(typeof RegisterTransitGatewayCommand === "function");
assert(typeof RejectAttachmentCommand === "function");
assert(typeof RemoveAttachmentRoutingPolicyLabelCommand === "function");
assert(typeof RestoreCoreNetworkPolicyVersionCommand === "function");
assert(typeof StartOrganizationServiceAccessUpdateCommand === "function");
assert(typeof StartRouteAnalysisCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateConnectionCommand === "function");
assert(typeof UpdateCoreNetworkCommand === "function");
assert(typeof UpdateDeviceCommand === "function");
assert(typeof UpdateDirectConnectGatewayAttachmentCommand === "function");
assert(typeof UpdateGlobalNetworkCommand === "function");
assert(typeof UpdateLinkCommand === "function");
assert(typeof UpdateNetworkResourceMetadataCommand === "function");
assert(typeof UpdateSiteCommand === "function");
assert(typeof UpdateVpcAttachmentCommand === "function");
// enums
assert(typeof AttachmentErrorCode === "object");
assert(typeof AttachmentState === "object");
assert(typeof AttachmentType === "object");
assert(typeof ChangeAction === "object");
assert(typeof ChangeSetState === "object");
assert(typeof ChangeStatus === "object");
assert(typeof ChangeType === "object");
assert(typeof ConnectionState === "object");
assert(typeof ConnectionStatus === "object");
assert(typeof ConnectionType === "object");
assert(typeof ConnectPeerAssociationState === "object");
assert(typeof ConnectPeerErrorCode === "object");
assert(typeof ConnectPeerState === "object");
assert(typeof CoreNetworkPolicyAlias === "object");
assert(typeof CoreNetworkState === "object");
assert(typeof CustomerGatewayAssociationState === "object");
assert(typeof DeviceState === "object");
assert(typeof GlobalNetworkState === "object");
assert(typeof LinkAssociationState === "object");
assert(typeof LinkState === "object");
assert(typeof PeeringErrorCode === "object");
assert(typeof PeeringState === "object");
assert(typeof PeeringType === "object");
assert(typeof RouteAnalysisCompletionReasonCode === "object");
assert(typeof RouteAnalysisCompletionResultCode === "object");
assert(typeof RouteAnalysisStatus === "object");
assert(typeof RouteState === "object");
assert(typeof RouteTableType === "object");
assert(typeof RouteType === "object");
assert(typeof RoutingPolicyDirection === "object");
assert(typeof SegmentActionServiceInsertion === "object");
assert(typeof SendViaMode === "object");
assert(typeof SiteState === "object");
assert(typeof TransitGatewayConnectPeerAssociationState === "object");
assert(typeof TransitGatewayRegistrationState === "object");
assert(typeof TunnelProtocol === "object");
// errors
assert(NetworkManagerServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateDescribeGlobalNetworks === "function");
assert(typeof paginateGetConnectPeerAssociations === "function");
assert(typeof paginateGetConnections === "function");
assert(typeof paginateGetCoreNetworkChangeEvents === "function");
assert(typeof paginateGetCoreNetworkChangeSet === "function");
assert(typeof paginateGetCustomerGatewayAssociations === "function");
assert(typeof paginateGetDevices === "function");
assert(typeof paginateGetLinkAssociations === "function");
assert(typeof paginateGetLinks === "function");
assert(typeof paginateGetNetworkResourceCounts === "function");
assert(typeof paginateGetNetworkResourceRelationships === "function");
assert(typeof paginateGetNetworkResources === "function");
assert(typeof paginateGetNetworkTelemetry === "function");
assert(typeof paginateGetSites === "function");
assert(typeof paginateGetTransitGatewayConnectPeerAssociations === "function");
assert(typeof paginateGetTransitGatewayRegistrations === "function");
assert(typeof paginateListAttachmentRoutingPolicyAssociations === "function");
assert(typeof paginateListAttachments === "function");
assert(typeof paginateListConnectPeers === "function");
assert(typeof paginateListCoreNetworkPolicyVersions === "function");
assert(typeof paginateListCoreNetworkPrefixListAssociations === "function");
assert(typeof paginateListCoreNetworkRoutingInformation === "function");
assert(typeof paginateListCoreNetworks === "function");
assert(typeof paginateListPeerings === "function");
console.log(`NetworkManager index test passed.`);
