import {
  AcceptAttachment$,
  AcceptAttachmentCommand,
  AcceptAttachmentRequest$,
  AcceptAttachmentResponse$,
  AccessDeniedException,
  AccessDeniedException$,
  AccountStatus$,
  AssociateConnectPeer$,
  AssociateConnectPeerCommand,
  AssociateConnectPeerRequest$,
  AssociateConnectPeerResponse$,
  AssociateCustomerGateway$,
  AssociateCustomerGatewayCommand,
  AssociateCustomerGatewayRequest$,
  AssociateCustomerGatewayResponse$,
  AssociateLink$,
  AssociateLinkCommand,
  AssociateLinkRequest$,
  AssociateLinkResponse$,
  AssociateTransitGatewayConnectPeer$,
  AssociateTransitGatewayConnectPeerCommand,
  AssociateTransitGatewayConnectPeerRequest$,
  AssociateTransitGatewayConnectPeerResponse$,
  Attachment$,
  AttachmentError$,
  AttachmentErrorCode,
  AttachmentRoutingPolicyAssociationSummary$,
  AttachmentState,
  AttachmentType,
  AWSLocation$,
  Bandwidth$,
  BgpOptions$,
  ChangeAction,
  ChangeSetState,
  ChangeStatus,
  ChangeType,
  ConflictException,
  ConflictException$,
  ConnectAttachment$,
  ConnectAttachmentOptions$,
  Connection$,
  ConnectionHealth$,
  ConnectionState,
  ConnectionStatus,
  ConnectionType,
  ConnectPeer$,
  ConnectPeerAssociation$,
  ConnectPeerAssociationState,
  ConnectPeerBgpConfiguration$,
  ConnectPeerConfiguration$,
  ConnectPeerError$,
  ConnectPeerErrorCode,
  ConnectPeerState,
  ConnectPeerSummary$,
  CoreNetwork$,
  CoreNetworkChange$,
  CoreNetworkChangeEvent$,
  CoreNetworkChangeEventValues$,
  CoreNetworkChangeValues$,
  CoreNetworkEdge$,
  CoreNetworkNetworkFunctionGroup$,
  CoreNetworkNetworkFunctionGroupIdentifier$,
  CoreNetworkPolicy$,
  CoreNetworkPolicyAlias,
  CoreNetworkPolicyError$,
  CoreNetworkPolicyException,
  CoreNetworkPolicyException$,
  CoreNetworkPolicyVersion$,
  CoreNetworkRoutingInformation$,
  CoreNetworkSegment$,
  CoreNetworkSegmentEdgeIdentifier$,
  CoreNetworkState,
  CoreNetworkSummary$,
  CreateConnectAttachment$,
  CreateConnectAttachmentCommand,
  CreateConnectAttachmentRequest$,
  CreateConnectAttachmentResponse$,
  CreateConnection$,
  CreateConnectionCommand,
  CreateConnectionRequest$,
  CreateConnectionResponse$,
  CreateConnectPeer$,
  CreateConnectPeerCommand,
  CreateConnectPeerRequest$,
  CreateConnectPeerResponse$,
  CreateCoreNetwork$,
  CreateCoreNetworkCommand,
  CreateCoreNetworkPrefixListAssociation$,
  CreateCoreNetworkPrefixListAssociationCommand,
  CreateCoreNetworkPrefixListAssociationRequest$,
  CreateCoreNetworkPrefixListAssociationResponse$,
  CreateCoreNetworkRequest$,
  CreateCoreNetworkResponse$,
  CreateDevice$,
  CreateDeviceCommand,
  CreateDeviceRequest$,
  CreateDeviceResponse$,
  CreateDirectConnectGatewayAttachment$,
  CreateDirectConnectGatewayAttachmentCommand,
  CreateDirectConnectGatewayAttachmentRequest$,
  CreateDirectConnectGatewayAttachmentResponse$,
  CreateGlobalNetwork$,
  CreateGlobalNetworkCommand,
  CreateGlobalNetworkRequest$,
  CreateGlobalNetworkResponse$,
  CreateLink$,
  CreateLinkCommand,
  CreateLinkRequest$,
  CreateLinkResponse$,
  CreateSite$,
  CreateSiteCommand,
  CreateSiteRequest$,
  CreateSiteResponse$,
  CreateSiteToSiteVpnAttachment$,
  CreateSiteToSiteVpnAttachmentCommand,
  CreateSiteToSiteVpnAttachmentRequest$,
  CreateSiteToSiteVpnAttachmentResponse$,
  CreateTransitGatewayPeering$,
  CreateTransitGatewayPeeringCommand,
  CreateTransitGatewayPeeringRequest$,
  CreateTransitGatewayPeeringResponse$,
  CreateTransitGatewayRouteTableAttachment$,
  CreateTransitGatewayRouteTableAttachmentCommand,
  CreateTransitGatewayRouteTableAttachmentRequest$,
  CreateTransitGatewayRouteTableAttachmentResponse$,
  CreateVpcAttachment$,
  CreateVpcAttachmentCommand,
  CreateVpcAttachmentRequest$,
  CreateVpcAttachmentResponse$,
  CustomerGatewayAssociation$,
  CustomerGatewayAssociationState,
  DeleteAttachment$,
  DeleteAttachmentCommand,
  DeleteAttachmentRequest$,
  DeleteAttachmentResponse$,
  DeleteConnection$,
  DeleteConnectionCommand,
  DeleteConnectionRequest$,
  DeleteConnectionResponse$,
  DeleteConnectPeer$,
  DeleteConnectPeerCommand,
  DeleteConnectPeerRequest$,
  DeleteConnectPeerResponse$,
  DeleteCoreNetwork$,
  DeleteCoreNetworkCommand,
  DeleteCoreNetworkPolicyVersion$,
  DeleteCoreNetworkPolicyVersionCommand,
  DeleteCoreNetworkPolicyVersionRequest$,
  DeleteCoreNetworkPolicyVersionResponse$,
  DeleteCoreNetworkPrefixListAssociation$,
  DeleteCoreNetworkPrefixListAssociationCommand,
  DeleteCoreNetworkPrefixListAssociationRequest$,
  DeleteCoreNetworkPrefixListAssociationResponse$,
  DeleteCoreNetworkRequest$,
  DeleteCoreNetworkResponse$,
  DeleteDevice$,
  DeleteDeviceCommand,
  DeleteDeviceRequest$,
  DeleteDeviceResponse$,
  DeleteGlobalNetwork$,
  DeleteGlobalNetworkCommand,
  DeleteGlobalNetworkRequest$,
  DeleteGlobalNetworkResponse$,
  DeleteLink$,
  DeleteLinkCommand,
  DeleteLinkRequest$,
  DeleteLinkResponse$,
  DeletePeering$,
  DeletePeeringCommand,
  DeletePeeringRequest$,
  DeletePeeringResponse$,
  DeleteResourcePolicy$,
  DeleteResourcePolicyCommand,
  DeleteResourcePolicyRequest$,
  DeleteResourcePolicyResponse$,
  DeleteSite$,
  DeleteSiteCommand,
  DeleteSiteRequest$,
  DeleteSiteResponse$,
  DeregisterTransitGateway$,
  DeregisterTransitGatewayCommand,
  DeregisterTransitGatewayRequest$,
  DeregisterTransitGatewayResponse$,
  DescribeGlobalNetworks$,
  DescribeGlobalNetworksCommand,
  DescribeGlobalNetworksRequest$,
  DescribeGlobalNetworksResponse$,
  Device$,
  DeviceState,
  DirectConnectGatewayAttachment$,
  DisassociateConnectPeer$,
  DisassociateConnectPeerCommand,
  DisassociateConnectPeerRequest$,
  DisassociateConnectPeerResponse$,
  DisassociateCustomerGateway$,
  DisassociateCustomerGatewayCommand,
  DisassociateCustomerGatewayRequest$,
  DisassociateCustomerGatewayResponse$,
  DisassociateLink$,
  DisassociateLinkCommand,
  DisassociateLinkRequest$,
  DisassociateLinkResponse$,
  DisassociateTransitGatewayConnectPeer$,
  DisassociateTransitGatewayConnectPeerCommand,
  DisassociateTransitGatewayConnectPeerRequest$,
  DisassociateTransitGatewayConnectPeerResponse$,
  EdgeOverride$,
  ExecuteCoreNetworkChangeSet$,
  ExecuteCoreNetworkChangeSetCommand,
  ExecuteCoreNetworkChangeSetRequest$,
  ExecuteCoreNetworkChangeSetResponse$,
  GetConnectAttachment$,
  GetConnectAttachmentCommand,
  GetConnectAttachmentRequest$,
  GetConnectAttachmentResponse$,
  GetConnections$,
  GetConnectionsCommand,
  GetConnectionsRequest$,
  GetConnectionsResponse$,
  GetConnectPeer$,
  GetConnectPeerAssociations$,
  GetConnectPeerAssociationsCommand,
  GetConnectPeerAssociationsRequest$,
  GetConnectPeerAssociationsResponse$,
  GetConnectPeerCommand,
  GetConnectPeerRequest$,
  GetConnectPeerResponse$,
  GetCoreNetwork$,
  GetCoreNetworkChangeEvents$,
  GetCoreNetworkChangeEventsCommand,
  GetCoreNetworkChangeEventsRequest$,
  GetCoreNetworkChangeEventsResponse$,
  GetCoreNetworkChangeSet$,
  GetCoreNetworkChangeSetCommand,
  GetCoreNetworkChangeSetRequest$,
  GetCoreNetworkChangeSetResponse$,
  GetCoreNetworkCommand,
  GetCoreNetworkPolicy$,
  GetCoreNetworkPolicyCommand,
  GetCoreNetworkPolicyRequest$,
  GetCoreNetworkPolicyResponse$,
  GetCoreNetworkRequest$,
  GetCoreNetworkResponse$,
  GetCustomerGatewayAssociations$,
  GetCustomerGatewayAssociationsCommand,
  GetCustomerGatewayAssociationsRequest$,
  GetCustomerGatewayAssociationsResponse$,
  GetDevices$,
  GetDevicesCommand,
  GetDevicesRequest$,
  GetDevicesResponse$,
  GetDirectConnectGatewayAttachment$,
  GetDirectConnectGatewayAttachmentCommand,
  GetDirectConnectGatewayAttachmentRequest$,
  GetDirectConnectGatewayAttachmentResponse$,
  GetLinkAssociations$,
  GetLinkAssociationsCommand,
  GetLinkAssociationsRequest$,
  GetLinkAssociationsResponse$,
  GetLinks$,
  GetLinksCommand,
  GetLinksRequest$,
  GetLinksResponse$,
  GetNetworkResourceCounts$,
  GetNetworkResourceCountsCommand,
  GetNetworkResourceCountsRequest$,
  GetNetworkResourceCountsResponse$,
  GetNetworkResourceRelationships$,
  GetNetworkResourceRelationshipsCommand,
  GetNetworkResourceRelationshipsRequest$,
  GetNetworkResourceRelationshipsResponse$,
  GetNetworkResources$,
  GetNetworkResourcesCommand,
  GetNetworkResourcesRequest$,
  GetNetworkResourcesResponse$,
  GetNetworkRoutes$,
  GetNetworkRoutesCommand,
  GetNetworkRoutesRequest$,
  GetNetworkRoutesResponse$,
  GetNetworkTelemetry$,
  GetNetworkTelemetryCommand,
  GetNetworkTelemetryRequest$,
  GetNetworkTelemetryResponse$,
  GetResourcePolicy$,
  GetResourcePolicyCommand,
  GetResourcePolicyRequest$,
  GetResourcePolicyResponse$,
  GetRouteAnalysis$,
  GetRouteAnalysisCommand,
  GetRouteAnalysisRequest$,
  GetRouteAnalysisResponse$,
  GetSites$,
  GetSitesCommand,
  GetSitesRequest$,
  GetSitesResponse$,
  GetSiteToSiteVpnAttachment$,
  GetSiteToSiteVpnAttachmentCommand,
  GetSiteToSiteVpnAttachmentRequest$,
  GetSiteToSiteVpnAttachmentResponse$,
  GetTransitGatewayConnectPeerAssociations$,
  GetTransitGatewayConnectPeerAssociationsCommand,
  GetTransitGatewayConnectPeerAssociationsRequest$,
  GetTransitGatewayConnectPeerAssociationsResponse$,
  GetTransitGatewayPeering$,
  GetTransitGatewayPeeringCommand,
  GetTransitGatewayPeeringRequest$,
  GetTransitGatewayPeeringResponse$,
  GetTransitGatewayRegistrations$,
  GetTransitGatewayRegistrationsCommand,
  GetTransitGatewayRegistrationsRequest$,
  GetTransitGatewayRegistrationsResponse$,
  GetTransitGatewayRouteTableAttachment$,
  GetTransitGatewayRouteTableAttachmentCommand,
  GetTransitGatewayRouteTableAttachmentRequest$,
  GetTransitGatewayRouteTableAttachmentResponse$,
  GetVpcAttachment$,
  GetVpcAttachmentCommand,
  GetVpcAttachmentRequest$,
  GetVpcAttachmentResponse$,
  GlobalNetwork$,
  GlobalNetworkState,
  InternalServerException,
  InternalServerException$,
  Link$,
  LinkAssociation$,
  LinkAssociationState,
  LinkState,
  ListAttachmentRoutingPolicyAssociations$,
  ListAttachmentRoutingPolicyAssociationsCommand,
  ListAttachmentRoutingPolicyAssociationsRequest$,
  ListAttachmentRoutingPolicyAssociationsResponse$,
  ListAttachments$,
  ListAttachmentsCommand,
  ListAttachmentsRequest$,
  ListAttachmentsResponse$,
  ListConnectPeers$,
  ListConnectPeersCommand,
  ListConnectPeersRequest$,
  ListConnectPeersResponse$,
  ListCoreNetworkPolicyVersions$,
  ListCoreNetworkPolicyVersionsCommand,
  ListCoreNetworkPolicyVersionsRequest$,
  ListCoreNetworkPolicyVersionsResponse$,
  ListCoreNetworkPrefixListAssociations$,
  ListCoreNetworkPrefixListAssociationsCommand,
  ListCoreNetworkPrefixListAssociationsRequest$,
  ListCoreNetworkPrefixListAssociationsResponse$,
  ListCoreNetworkRoutingInformation$,
  ListCoreNetworkRoutingInformationCommand,
  ListCoreNetworkRoutingInformationRequest$,
  ListCoreNetworkRoutingInformationResponse$,
  ListCoreNetworks$,
  ListCoreNetworksCommand,
  ListCoreNetworksRequest$,
  ListCoreNetworksResponse$,
  ListOrganizationServiceAccessStatus$,
  ListOrganizationServiceAccessStatusCommand,
  ListOrganizationServiceAccessStatusRequest$,
  ListOrganizationServiceAccessStatusResponse$,
  ListPeerings$,
  ListPeeringsCommand,
  ListPeeringsRequest$,
  ListPeeringsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  Location$,
  NetworkFunctionGroup$,
  NetworkManager,
  NetworkManagerClient,
  NetworkManagerServiceException,
  NetworkResource$,
  NetworkResourceCount$,
  NetworkResourceSummary$,
  NetworkRoute$,
  NetworkRouteDestination$,
  NetworkTelemetry$,
  OrganizationStatus$,
  paginateDescribeGlobalNetworks,
  paginateGetConnections,
  paginateGetConnectPeerAssociations,
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
  PathComponent$,
  Peering$,
  PeeringError$,
  PeeringErrorCode,
  PeeringState,
  PeeringType,
  PermissionsErrorContext$,
  PrefixListAssociation$,
  ProposedNetworkFunctionGroupChange$,
  ProposedSegmentChange$,
  PutAttachmentRoutingPolicyLabel$,
  PutAttachmentRoutingPolicyLabelCommand,
  PutAttachmentRoutingPolicyLabelRequest$,
  PutAttachmentRoutingPolicyLabelResponse$,
  PutCoreNetworkPolicy$,
  PutCoreNetworkPolicyCommand,
  PutCoreNetworkPolicyRequest$,
  PutCoreNetworkPolicyResponse$,
  PutResourcePolicy$,
  PutResourcePolicyCommand,
  PutResourcePolicyRequest$,
  PutResourcePolicyResponse$,
  RegisterTransitGateway$,
  RegisterTransitGatewayCommand,
  RegisterTransitGatewayRequest$,
  RegisterTransitGatewayResponse$,
  RejectAttachment$,
  RejectAttachmentCommand,
  RejectAttachmentRequest$,
  RejectAttachmentResponse$,
  Relationship$,
  RemoveAttachmentRoutingPolicyLabel$,
  RemoveAttachmentRoutingPolicyLabelCommand,
  RemoveAttachmentRoutingPolicyLabelRequest$,
  RemoveAttachmentRoutingPolicyLabelResponse$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  RestoreCoreNetworkPolicyVersion$,
  RestoreCoreNetworkPolicyVersionCommand,
  RestoreCoreNetworkPolicyVersionRequest$,
  RestoreCoreNetworkPolicyVersionResponse$,
  RouteAnalysis$,
  RouteAnalysisCompletion$,
  RouteAnalysisCompletionReasonCode,
  RouteAnalysisCompletionResultCode,
  RouteAnalysisEndpointOptions$,
  RouteAnalysisEndpointOptionsSpecification$,
  RouteAnalysisPath$,
  RouteAnalysisStatus,
  RouteState,
  RouteTableIdentifier$,
  RouteTableType,
  RouteType,
  RoutingInformationNextHop$,
  RoutingPolicyAssociationDetail$,
  RoutingPolicyDirection,
  SegmentActionServiceInsertion,
  SendViaMode,
  ServiceInsertionAction$,
  ServiceInsertionSegments$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  Site$,
  SiteState,
  SiteToSiteVpnAttachment$,
  StartOrganizationServiceAccessUpdate$,
  StartOrganizationServiceAccessUpdateCommand,
  StartOrganizationServiceAccessUpdateRequest$,
  StartOrganizationServiceAccessUpdateResponse$,
  StartRouteAnalysis$,
  StartRouteAnalysisCommand,
  StartRouteAnalysisRequest$,
  StartRouteAnalysisResponse$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  ThrottlingException,
  ThrottlingException$,
  TransitGatewayConnectPeerAssociation$,
  TransitGatewayConnectPeerAssociationState,
  TransitGatewayPeering$,
  TransitGatewayRegistration$,
  TransitGatewayRegistrationState,
  TransitGatewayRegistrationStateReason$,
  TransitGatewayRouteTableAttachment$,
  TunnelProtocol,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateConnection$,
  UpdateConnectionCommand,
  UpdateConnectionRequest$,
  UpdateConnectionResponse$,
  UpdateCoreNetwork$,
  UpdateCoreNetworkCommand,
  UpdateCoreNetworkRequest$,
  UpdateCoreNetworkResponse$,
  UpdateDevice$,
  UpdateDeviceCommand,
  UpdateDeviceRequest$,
  UpdateDeviceResponse$,
  UpdateDirectConnectGatewayAttachment$,
  UpdateDirectConnectGatewayAttachmentCommand,
  UpdateDirectConnectGatewayAttachmentRequest$,
  UpdateDirectConnectGatewayAttachmentResponse$,
  UpdateGlobalNetwork$,
  UpdateGlobalNetworkCommand,
  UpdateGlobalNetworkRequest$,
  UpdateGlobalNetworkResponse$,
  UpdateLink$,
  UpdateLinkCommand,
  UpdateLinkRequest$,
  UpdateLinkResponse$,
  UpdateNetworkResourceMetadata$,
  UpdateNetworkResourceMetadataCommand,
  UpdateNetworkResourceMetadataRequest$,
  UpdateNetworkResourceMetadataResponse$,
  UpdateSite$,
  UpdateSiteCommand,
  UpdateSiteRequest$,
  UpdateSiteResponse$,
  UpdateVpcAttachment$,
  UpdateVpcAttachmentCommand,
  UpdateVpcAttachmentRequest$,
  UpdateVpcAttachmentResponse$,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  ValidationExceptionReason,
  Via$,
  VpcAttachment$,
  VpcOptions$,
  WhenSentTo$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof NetworkManagerClient === "function");
assert(typeof NetworkManager === "function");
// commands
assert(typeof AcceptAttachmentCommand === "function");
assert(typeof AcceptAttachment$ === "object");
assert(typeof AssociateConnectPeerCommand === "function");
assert(typeof AssociateConnectPeer$ === "object");
assert(typeof AssociateCustomerGatewayCommand === "function");
assert(typeof AssociateCustomerGateway$ === "object");
assert(typeof AssociateLinkCommand === "function");
assert(typeof AssociateLink$ === "object");
assert(typeof AssociateTransitGatewayConnectPeerCommand === "function");
assert(typeof AssociateTransitGatewayConnectPeer$ === "object");
assert(typeof CreateConnectAttachmentCommand === "function");
assert(typeof CreateConnectAttachment$ === "object");
assert(typeof CreateConnectionCommand === "function");
assert(typeof CreateConnection$ === "object");
assert(typeof CreateConnectPeerCommand === "function");
assert(typeof CreateConnectPeer$ === "object");
assert(typeof CreateCoreNetworkCommand === "function");
assert(typeof CreateCoreNetwork$ === "object");
assert(typeof CreateCoreNetworkPrefixListAssociationCommand === "function");
assert(typeof CreateCoreNetworkPrefixListAssociation$ === "object");
assert(typeof CreateDeviceCommand === "function");
assert(typeof CreateDevice$ === "object");
assert(typeof CreateDirectConnectGatewayAttachmentCommand === "function");
assert(typeof CreateDirectConnectGatewayAttachment$ === "object");
assert(typeof CreateGlobalNetworkCommand === "function");
assert(typeof CreateGlobalNetwork$ === "object");
assert(typeof CreateLinkCommand === "function");
assert(typeof CreateLink$ === "object");
assert(typeof CreateSiteCommand === "function");
assert(typeof CreateSite$ === "object");
assert(typeof CreateSiteToSiteVpnAttachmentCommand === "function");
assert(typeof CreateSiteToSiteVpnAttachment$ === "object");
assert(typeof CreateTransitGatewayPeeringCommand === "function");
assert(typeof CreateTransitGatewayPeering$ === "object");
assert(typeof CreateTransitGatewayRouteTableAttachmentCommand === "function");
assert(typeof CreateTransitGatewayRouteTableAttachment$ === "object");
assert(typeof CreateVpcAttachmentCommand === "function");
assert(typeof CreateVpcAttachment$ === "object");
assert(typeof DeleteAttachmentCommand === "function");
assert(typeof DeleteAttachment$ === "object");
assert(typeof DeleteConnectionCommand === "function");
assert(typeof DeleteConnection$ === "object");
assert(typeof DeleteConnectPeerCommand === "function");
assert(typeof DeleteConnectPeer$ === "object");
assert(typeof DeleteCoreNetworkCommand === "function");
assert(typeof DeleteCoreNetwork$ === "object");
assert(typeof DeleteCoreNetworkPolicyVersionCommand === "function");
assert(typeof DeleteCoreNetworkPolicyVersion$ === "object");
assert(typeof DeleteCoreNetworkPrefixListAssociationCommand === "function");
assert(typeof DeleteCoreNetworkPrefixListAssociation$ === "object");
assert(typeof DeleteDeviceCommand === "function");
assert(typeof DeleteDevice$ === "object");
assert(typeof DeleteGlobalNetworkCommand === "function");
assert(typeof DeleteGlobalNetwork$ === "object");
assert(typeof DeleteLinkCommand === "function");
assert(typeof DeleteLink$ === "object");
assert(typeof DeletePeeringCommand === "function");
assert(typeof DeletePeering$ === "object");
assert(typeof DeleteResourcePolicyCommand === "function");
assert(typeof DeleteResourcePolicy$ === "object");
assert(typeof DeleteSiteCommand === "function");
assert(typeof DeleteSite$ === "object");
assert(typeof DeregisterTransitGatewayCommand === "function");
assert(typeof DeregisterTransitGateway$ === "object");
assert(typeof DescribeGlobalNetworksCommand === "function");
assert(typeof DescribeGlobalNetworks$ === "object");
assert(typeof DisassociateConnectPeerCommand === "function");
assert(typeof DisassociateConnectPeer$ === "object");
assert(typeof DisassociateCustomerGatewayCommand === "function");
assert(typeof DisassociateCustomerGateway$ === "object");
assert(typeof DisassociateLinkCommand === "function");
assert(typeof DisassociateLink$ === "object");
assert(typeof DisassociateTransitGatewayConnectPeerCommand === "function");
assert(typeof DisassociateTransitGatewayConnectPeer$ === "object");
assert(typeof ExecuteCoreNetworkChangeSetCommand === "function");
assert(typeof ExecuteCoreNetworkChangeSet$ === "object");
assert(typeof GetConnectAttachmentCommand === "function");
assert(typeof GetConnectAttachment$ === "object");
assert(typeof GetConnectionsCommand === "function");
assert(typeof GetConnections$ === "object");
assert(typeof GetConnectPeerCommand === "function");
assert(typeof GetConnectPeer$ === "object");
assert(typeof GetConnectPeerAssociationsCommand === "function");
assert(typeof GetConnectPeerAssociations$ === "object");
assert(typeof GetCoreNetworkCommand === "function");
assert(typeof GetCoreNetwork$ === "object");
assert(typeof GetCoreNetworkChangeEventsCommand === "function");
assert(typeof GetCoreNetworkChangeEvents$ === "object");
assert(typeof GetCoreNetworkChangeSetCommand === "function");
assert(typeof GetCoreNetworkChangeSet$ === "object");
assert(typeof GetCoreNetworkPolicyCommand === "function");
assert(typeof GetCoreNetworkPolicy$ === "object");
assert(typeof GetCustomerGatewayAssociationsCommand === "function");
assert(typeof GetCustomerGatewayAssociations$ === "object");
assert(typeof GetDevicesCommand === "function");
assert(typeof GetDevices$ === "object");
assert(typeof GetDirectConnectGatewayAttachmentCommand === "function");
assert(typeof GetDirectConnectGatewayAttachment$ === "object");
assert(typeof GetLinkAssociationsCommand === "function");
assert(typeof GetLinkAssociations$ === "object");
assert(typeof GetLinksCommand === "function");
assert(typeof GetLinks$ === "object");
assert(typeof GetNetworkResourceCountsCommand === "function");
assert(typeof GetNetworkResourceCounts$ === "object");
assert(typeof GetNetworkResourceRelationshipsCommand === "function");
assert(typeof GetNetworkResourceRelationships$ === "object");
assert(typeof GetNetworkResourcesCommand === "function");
assert(typeof GetNetworkResources$ === "object");
assert(typeof GetNetworkRoutesCommand === "function");
assert(typeof GetNetworkRoutes$ === "object");
assert(typeof GetNetworkTelemetryCommand === "function");
assert(typeof GetNetworkTelemetry$ === "object");
assert(typeof GetResourcePolicyCommand === "function");
assert(typeof GetResourcePolicy$ === "object");
assert(typeof GetRouteAnalysisCommand === "function");
assert(typeof GetRouteAnalysis$ === "object");
assert(typeof GetSitesCommand === "function");
assert(typeof GetSites$ === "object");
assert(typeof GetSiteToSiteVpnAttachmentCommand === "function");
assert(typeof GetSiteToSiteVpnAttachment$ === "object");
assert(typeof GetTransitGatewayConnectPeerAssociationsCommand === "function");
assert(typeof GetTransitGatewayConnectPeerAssociations$ === "object");
assert(typeof GetTransitGatewayPeeringCommand === "function");
assert(typeof GetTransitGatewayPeering$ === "object");
assert(typeof GetTransitGatewayRegistrationsCommand === "function");
assert(typeof GetTransitGatewayRegistrations$ === "object");
assert(typeof GetTransitGatewayRouteTableAttachmentCommand === "function");
assert(typeof GetTransitGatewayRouteTableAttachment$ === "object");
assert(typeof GetVpcAttachmentCommand === "function");
assert(typeof GetVpcAttachment$ === "object");
assert(typeof ListAttachmentRoutingPolicyAssociationsCommand === "function");
assert(typeof ListAttachmentRoutingPolicyAssociations$ === "object");
assert(typeof ListAttachmentsCommand === "function");
assert(typeof ListAttachments$ === "object");
assert(typeof ListConnectPeersCommand === "function");
assert(typeof ListConnectPeers$ === "object");
assert(typeof ListCoreNetworkPolicyVersionsCommand === "function");
assert(typeof ListCoreNetworkPolicyVersions$ === "object");
assert(typeof ListCoreNetworkPrefixListAssociationsCommand === "function");
assert(typeof ListCoreNetworkPrefixListAssociations$ === "object");
assert(typeof ListCoreNetworkRoutingInformationCommand === "function");
assert(typeof ListCoreNetworkRoutingInformation$ === "object");
assert(typeof ListCoreNetworksCommand === "function");
assert(typeof ListCoreNetworks$ === "object");
assert(typeof ListOrganizationServiceAccessStatusCommand === "function");
assert(typeof ListOrganizationServiceAccessStatus$ === "object");
assert(typeof ListPeeringsCommand === "function");
assert(typeof ListPeerings$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof PutAttachmentRoutingPolicyLabelCommand === "function");
assert(typeof PutAttachmentRoutingPolicyLabel$ === "object");
assert(typeof PutCoreNetworkPolicyCommand === "function");
assert(typeof PutCoreNetworkPolicy$ === "object");
assert(typeof PutResourcePolicyCommand === "function");
assert(typeof PutResourcePolicy$ === "object");
assert(typeof RegisterTransitGatewayCommand === "function");
assert(typeof RegisterTransitGateway$ === "object");
assert(typeof RejectAttachmentCommand === "function");
assert(typeof RejectAttachment$ === "object");
assert(typeof RemoveAttachmentRoutingPolicyLabelCommand === "function");
assert(typeof RemoveAttachmentRoutingPolicyLabel$ === "object");
assert(typeof RestoreCoreNetworkPolicyVersionCommand === "function");
assert(typeof RestoreCoreNetworkPolicyVersion$ === "object");
assert(typeof StartOrganizationServiceAccessUpdateCommand === "function");
assert(typeof StartOrganizationServiceAccessUpdate$ === "object");
assert(typeof StartRouteAnalysisCommand === "function");
assert(typeof StartRouteAnalysis$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateConnectionCommand === "function");
assert(typeof UpdateConnection$ === "object");
assert(typeof UpdateCoreNetworkCommand === "function");
assert(typeof UpdateCoreNetwork$ === "object");
assert(typeof UpdateDeviceCommand === "function");
assert(typeof UpdateDevice$ === "object");
assert(typeof UpdateDirectConnectGatewayAttachmentCommand === "function");
assert(typeof UpdateDirectConnectGatewayAttachment$ === "object");
assert(typeof UpdateGlobalNetworkCommand === "function");
assert(typeof UpdateGlobalNetwork$ === "object");
assert(typeof UpdateLinkCommand === "function");
assert(typeof UpdateLink$ === "object");
assert(typeof UpdateNetworkResourceMetadataCommand === "function");
assert(typeof UpdateNetworkResourceMetadata$ === "object");
assert(typeof UpdateSiteCommand === "function");
assert(typeof UpdateSite$ === "object");
assert(typeof UpdateVpcAttachmentCommand === "function");
assert(typeof UpdateVpcAttachment$ === "object");
// structural schemas
assert(typeof AcceptAttachmentRequest$ === "object");
assert(typeof AcceptAttachmentResponse$ === "object");
assert(typeof AccountStatus$ === "object");
assert(typeof AssociateConnectPeerRequest$ === "object");
assert(typeof AssociateConnectPeerResponse$ === "object");
assert(typeof AssociateCustomerGatewayRequest$ === "object");
assert(typeof AssociateCustomerGatewayResponse$ === "object");
assert(typeof AssociateLinkRequest$ === "object");
assert(typeof AssociateLinkResponse$ === "object");
assert(typeof AssociateTransitGatewayConnectPeerRequest$ === "object");
assert(typeof AssociateTransitGatewayConnectPeerResponse$ === "object");
assert(typeof Attachment$ === "object");
assert(typeof AttachmentError$ === "object");
assert(typeof AttachmentRoutingPolicyAssociationSummary$ === "object");
assert(typeof AWSLocation$ === "object");
assert(typeof Bandwidth$ === "object");
assert(typeof BgpOptions$ === "object");
assert(typeof ConnectAttachment$ === "object");
assert(typeof ConnectAttachmentOptions$ === "object");
assert(typeof Connection$ === "object");
assert(typeof ConnectionHealth$ === "object");
assert(typeof ConnectPeer$ === "object");
assert(typeof ConnectPeerAssociation$ === "object");
assert(typeof ConnectPeerBgpConfiguration$ === "object");
assert(typeof ConnectPeerConfiguration$ === "object");
assert(typeof ConnectPeerError$ === "object");
assert(typeof ConnectPeerSummary$ === "object");
assert(typeof CoreNetwork$ === "object");
assert(typeof CoreNetworkChange$ === "object");
assert(typeof CoreNetworkChangeEvent$ === "object");
assert(typeof CoreNetworkChangeEventValues$ === "object");
assert(typeof CoreNetworkChangeValues$ === "object");
assert(typeof CoreNetworkEdge$ === "object");
assert(typeof CoreNetworkNetworkFunctionGroup$ === "object");
assert(typeof CoreNetworkNetworkFunctionGroupIdentifier$ === "object");
assert(typeof CoreNetworkPolicy$ === "object");
assert(typeof CoreNetworkPolicyError$ === "object");
assert(typeof CoreNetworkPolicyVersion$ === "object");
assert(typeof CoreNetworkRoutingInformation$ === "object");
assert(typeof CoreNetworkSegment$ === "object");
assert(typeof CoreNetworkSegmentEdgeIdentifier$ === "object");
assert(typeof CoreNetworkSummary$ === "object");
assert(typeof CreateConnectAttachmentRequest$ === "object");
assert(typeof CreateConnectAttachmentResponse$ === "object");
assert(typeof CreateConnectionRequest$ === "object");
assert(typeof CreateConnectionResponse$ === "object");
assert(typeof CreateConnectPeerRequest$ === "object");
assert(typeof CreateConnectPeerResponse$ === "object");
assert(typeof CreateCoreNetworkPrefixListAssociationRequest$ === "object");
assert(typeof CreateCoreNetworkPrefixListAssociationResponse$ === "object");
assert(typeof CreateCoreNetworkRequest$ === "object");
assert(typeof CreateCoreNetworkResponse$ === "object");
assert(typeof CreateDeviceRequest$ === "object");
assert(typeof CreateDeviceResponse$ === "object");
assert(typeof CreateDirectConnectGatewayAttachmentRequest$ === "object");
assert(typeof CreateDirectConnectGatewayAttachmentResponse$ === "object");
assert(typeof CreateGlobalNetworkRequest$ === "object");
assert(typeof CreateGlobalNetworkResponse$ === "object");
assert(typeof CreateLinkRequest$ === "object");
assert(typeof CreateLinkResponse$ === "object");
assert(typeof CreateSiteRequest$ === "object");
assert(typeof CreateSiteResponse$ === "object");
assert(typeof CreateSiteToSiteVpnAttachmentRequest$ === "object");
assert(typeof CreateSiteToSiteVpnAttachmentResponse$ === "object");
assert(typeof CreateTransitGatewayPeeringRequest$ === "object");
assert(typeof CreateTransitGatewayPeeringResponse$ === "object");
assert(typeof CreateTransitGatewayRouteTableAttachmentRequest$ === "object");
assert(typeof CreateTransitGatewayRouteTableAttachmentResponse$ === "object");
assert(typeof CreateVpcAttachmentRequest$ === "object");
assert(typeof CreateVpcAttachmentResponse$ === "object");
assert(typeof CustomerGatewayAssociation$ === "object");
assert(typeof DeleteAttachmentRequest$ === "object");
assert(typeof DeleteAttachmentResponse$ === "object");
assert(typeof DeleteConnectionRequest$ === "object");
assert(typeof DeleteConnectionResponse$ === "object");
assert(typeof DeleteConnectPeerRequest$ === "object");
assert(typeof DeleteConnectPeerResponse$ === "object");
assert(typeof DeleteCoreNetworkPolicyVersionRequest$ === "object");
assert(typeof DeleteCoreNetworkPolicyVersionResponse$ === "object");
assert(typeof DeleteCoreNetworkPrefixListAssociationRequest$ === "object");
assert(typeof DeleteCoreNetworkPrefixListAssociationResponse$ === "object");
assert(typeof DeleteCoreNetworkRequest$ === "object");
assert(typeof DeleteCoreNetworkResponse$ === "object");
assert(typeof DeleteDeviceRequest$ === "object");
assert(typeof DeleteDeviceResponse$ === "object");
assert(typeof DeleteGlobalNetworkRequest$ === "object");
assert(typeof DeleteGlobalNetworkResponse$ === "object");
assert(typeof DeleteLinkRequest$ === "object");
assert(typeof DeleteLinkResponse$ === "object");
assert(typeof DeletePeeringRequest$ === "object");
assert(typeof DeletePeeringResponse$ === "object");
assert(typeof DeleteResourcePolicyRequest$ === "object");
assert(typeof DeleteResourcePolicyResponse$ === "object");
assert(typeof DeleteSiteRequest$ === "object");
assert(typeof DeleteSiteResponse$ === "object");
assert(typeof DeregisterTransitGatewayRequest$ === "object");
assert(typeof DeregisterTransitGatewayResponse$ === "object");
assert(typeof DescribeGlobalNetworksRequest$ === "object");
assert(typeof DescribeGlobalNetworksResponse$ === "object");
assert(typeof Device$ === "object");
assert(typeof DirectConnectGatewayAttachment$ === "object");
assert(typeof DisassociateConnectPeerRequest$ === "object");
assert(typeof DisassociateConnectPeerResponse$ === "object");
assert(typeof DisassociateCustomerGatewayRequest$ === "object");
assert(typeof DisassociateCustomerGatewayResponse$ === "object");
assert(typeof DisassociateLinkRequest$ === "object");
assert(typeof DisassociateLinkResponse$ === "object");
assert(typeof DisassociateTransitGatewayConnectPeerRequest$ === "object");
assert(typeof DisassociateTransitGatewayConnectPeerResponse$ === "object");
assert(typeof EdgeOverride$ === "object");
assert(typeof ExecuteCoreNetworkChangeSetRequest$ === "object");
assert(typeof ExecuteCoreNetworkChangeSetResponse$ === "object");
assert(typeof GetConnectAttachmentRequest$ === "object");
assert(typeof GetConnectAttachmentResponse$ === "object");
assert(typeof GetConnectionsRequest$ === "object");
assert(typeof GetConnectionsResponse$ === "object");
assert(typeof GetConnectPeerAssociationsRequest$ === "object");
assert(typeof GetConnectPeerAssociationsResponse$ === "object");
assert(typeof GetConnectPeerRequest$ === "object");
assert(typeof GetConnectPeerResponse$ === "object");
assert(typeof GetCoreNetworkChangeEventsRequest$ === "object");
assert(typeof GetCoreNetworkChangeEventsResponse$ === "object");
assert(typeof GetCoreNetworkChangeSetRequest$ === "object");
assert(typeof GetCoreNetworkChangeSetResponse$ === "object");
assert(typeof GetCoreNetworkPolicyRequest$ === "object");
assert(typeof GetCoreNetworkPolicyResponse$ === "object");
assert(typeof GetCoreNetworkRequest$ === "object");
assert(typeof GetCoreNetworkResponse$ === "object");
assert(typeof GetCustomerGatewayAssociationsRequest$ === "object");
assert(typeof GetCustomerGatewayAssociationsResponse$ === "object");
assert(typeof GetDevicesRequest$ === "object");
assert(typeof GetDevicesResponse$ === "object");
assert(typeof GetDirectConnectGatewayAttachmentRequest$ === "object");
assert(typeof GetDirectConnectGatewayAttachmentResponse$ === "object");
assert(typeof GetLinkAssociationsRequest$ === "object");
assert(typeof GetLinkAssociationsResponse$ === "object");
assert(typeof GetLinksRequest$ === "object");
assert(typeof GetLinksResponse$ === "object");
assert(typeof GetNetworkResourceCountsRequest$ === "object");
assert(typeof GetNetworkResourceCountsResponse$ === "object");
assert(typeof GetNetworkResourceRelationshipsRequest$ === "object");
assert(typeof GetNetworkResourceRelationshipsResponse$ === "object");
assert(typeof GetNetworkResourcesRequest$ === "object");
assert(typeof GetNetworkResourcesResponse$ === "object");
assert(typeof GetNetworkRoutesRequest$ === "object");
assert(typeof GetNetworkRoutesResponse$ === "object");
assert(typeof GetNetworkTelemetryRequest$ === "object");
assert(typeof GetNetworkTelemetryResponse$ === "object");
assert(typeof GetResourcePolicyRequest$ === "object");
assert(typeof GetResourcePolicyResponse$ === "object");
assert(typeof GetRouteAnalysisRequest$ === "object");
assert(typeof GetRouteAnalysisResponse$ === "object");
assert(typeof GetSitesRequest$ === "object");
assert(typeof GetSitesResponse$ === "object");
assert(typeof GetSiteToSiteVpnAttachmentRequest$ === "object");
assert(typeof GetSiteToSiteVpnAttachmentResponse$ === "object");
assert(typeof GetTransitGatewayConnectPeerAssociationsRequest$ === "object");
assert(typeof GetTransitGatewayConnectPeerAssociationsResponse$ === "object");
assert(typeof GetTransitGatewayPeeringRequest$ === "object");
assert(typeof GetTransitGatewayPeeringResponse$ === "object");
assert(typeof GetTransitGatewayRegistrationsRequest$ === "object");
assert(typeof GetTransitGatewayRegistrationsResponse$ === "object");
assert(typeof GetTransitGatewayRouteTableAttachmentRequest$ === "object");
assert(typeof GetTransitGatewayRouteTableAttachmentResponse$ === "object");
assert(typeof GetVpcAttachmentRequest$ === "object");
assert(typeof GetVpcAttachmentResponse$ === "object");
assert(typeof GlobalNetwork$ === "object");
assert(typeof Link$ === "object");
assert(typeof LinkAssociation$ === "object");
assert(typeof ListAttachmentRoutingPolicyAssociationsRequest$ === "object");
assert(typeof ListAttachmentRoutingPolicyAssociationsResponse$ === "object");
assert(typeof ListAttachmentsRequest$ === "object");
assert(typeof ListAttachmentsResponse$ === "object");
assert(typeof ListConnectPeersRequest$ === "object");
assert(typeof ListConnectPeersResponse$ === "object");
assert(typeof ListCoreNetworkPolicyVersionsRequest$ === "object");
assert(typeof ListCoreNetworkPolicyVersionsResponse$ === "object");
assert(typeof ListCoreNetworkPrefixListAssociationsRequest$ === "object");
assert(typeof ListCoreNetworkPrefixListAssociationsResponse$ === "object");
assert(typeof ListCoreNetworkRoutingInformationRequest$ === "object");
assert(typeof ListCoreNetworkRoutingInformationResponse$ === "object");
assert(typeof ListCoreNetworksRequest$ === "object");
assert(typeof ListCoreNetworksResponse$ === "object");
assert(typeof ListOrganizationServiceAccessStatusRequest$ === "object");
assert(typeof ListOrganizationServiceAccessStatusResponse$ === "object");
assert(typeof ListPeeringsRequest$ === "object");
assert(typeof ListPeeringsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof Location$ === "object");
assert(typeof NetworkFunctionGroup$ === "object");
assert(typeof NetworkResource$ === "object");
assert(typeof NetworkResourceCount$ === "object");
assert(typeof NetworkResourceSummary$ === "object");
assert(typeof NetworkRoute$ === "object");
assert(typeof NetworkRouteDestination$ === "object");
assert(typeof NetworkTelemetry$ === "object");
assert(typeof OrganizationStatus$ === "object");
assert(typeof PathComponent$ === "object");
assert(typeof Peering$ === "object");
assert(typeof PeeringError$ === "object");
assert(typeof PermissionsErrorContext$ === "object");
assert(typeof PrefixListAssociation$ === "object");
assert(typeof ProposedNetworkFunctionGroupChange$ === "object");
assert(typeof ProposedSegmentChange$ === "object");
assert(typeof PutAttachmentRoutingPolicyLabelRequest$ === "object");
assert(typeof PutAttachmentRoutingPolicyLabelResponse$ === "object");
assert(typeof PutCoreNetworkPolicyRequest$ === "object");
assert(typeof PutCoreNetworkPolicyResponse$ === "object");
assert(typeof PutResourcePolicyRequest$ === "object");
assert(typeof PutResourcePolicyResponse$ === "object");
assert(typeof RegisterTransitGatewayRequest$ === "object");
assert(typeof RegisterTransitGatewayResponse$ === "object");
assert(typeof RejectAttachmentRequest$ === "object");
assert(typeof RejectAttachmentResponse$ === "object");
assert(typeof Relationship$ === "object");
assert(typeof RemoveAttachmentRoutingPolicyLabelRequest$ === "object");
assert(typeof RemoveAttachmentRoutingPolicyLabelResponse$ === "object");
assert(typeof RestoreCoreNetworkPolicyVersionRequest$ === "object");
assert(typeof RestoreCoreNetworkPolicyVersionResponse$ === "object");
assert(typeof RouteAnalysis$ === "object");
assert(typeof RouteAnalysisCompletion$ === "object");
assert(typeof RouteAnalysisEndpointOptions$ === "object");
assert(typeof RouteAnalysisEndpointOptionsSpecification$ === "object");
assert(typeof RouteAnalysisPath$ === "object");
assert(typeof RouteTableIdentifier$ === "object");
assert(typeof RoutingInformationNextHop$ === "object");
assert(typeof RoutingPolicyAssociationDetail$ === "object");
assert(typeof ServiceInsertionAction$ === "object");
assert(typeof ServiceInsertionSegments$ === "object");
assert(typeof Site$ === "object");
assert(typeof SiteToSiteVpnAttachment$ === "object");
assert(typeof StartOrganizationServiceAccessUpdateRequest$ === "object");
assert(typeof StartOrganizationServiceAccessUpdateResponse$ === "object");
assert(typeof StartRouteAnalysisRequest$ === "object");
assert(typeof StartRouteAnalysisResponse$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TransitGatewayConnectPeerAssociation$ === "object");
assert(typeof TransitGatewayPeering$ === "object");
assert(typeof TransitGatewayRegistration$ === "object");
assert(typeof TransitGatewayRegistrationStateReason$ === "object");
assert(typeof TransitGatewayRouteTableAttachment$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateConnectionRequest$ === "object");
assert(typeof UpdateConnectionResponse$ === "object");
assert(typeof UpdateCoreNetworkRequest$ === "object");
assert(typeof UpdateCoreNetworkResponse$ === "object");
assert(typeof UpdateDeviceRequest$ === "object");
assert(typeof UpdateDeviceResponse$ === "object");
assert(typeof UpdateDirectConnectGatewayAttachmentRequest$ === "object");
assert(typeof UpdateDirectConnectGatewayAttachmentResponse$ === "object");
assert(typeof UpdateGlobalNetworkRequest$ === "object");
assert(typeof UpdateGlobalNetworkResponse$ === "object");
assert(typeof UpdateLinkRequest$ === "object");
assert(typeof UpdateLinkResponse$ === "object");
assert(typeof UpdateNetworkResourceMetadataRequest$ === "object");
assert(typeof UpdateNetworkResourceMetadataResponse$ === "object");
assert(typeof UpdateSiteRequest$ === "object");
assert(typeof UpdateSiteResponse$ === "object");
assert(typeof UpdateVpcAttachmentRequest$ === "object");
assert(typeof UpdateVpcAttachmentResponse$ === "object");
assert(typeof ValidationExceptionField$ === "object");
assert(typeof Via$ === "object");
assert(typeof VpcAttachment$ === "object");
assert(typeof VpcOptions$ === "object");
assert(typeof WhenSentTo$ === "object");
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
assert(typeof ValidationExceptionReason === "object");
// errors
assert(AccessDeniedException.prototype instanceof NetworkManagerServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof NetworkManagerServiceException);
assert(typeof ConflictException$ === "object");
assert(CoreNetworkPolicyException.prototype instanceof NetworkManagerServiceException);
assert(typeof CoreNetworkPolicyException$ === "object");
assert(InternalServerException.prototype instanceof NetworkManagerServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof NetworkManagerServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof NetworkManagerServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof NetworkManagerServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof NetworkManagerServiceException);
assert(typeof ValidationException$ === "object");
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
