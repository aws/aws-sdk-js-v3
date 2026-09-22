// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import {
  type AcceptAttachmentCommandInput,
  type AcceptAttachmentCommandOutput,
  AcceptAttachmentCommand,
} from "./commands/AcceptAttachmentCommand";
import {
  type AssociateConnectPeerCommandInput,
  type AssociateConnectPeerCommandOutput,
  AssociateConnectPeerCommand,
} from "./commands/AssociateConnectPeerCommand";
import {
  type AssociateCustomerGatewayCommandInput,
  type AssociateCustomerGatewayCommandOutput,
  AssociateCustomerGatewayCommand,
} from "./commands/AssociateCustomerGatewayCommand";
import {
  type AssociateLinkCommandInput,
  type AssociateLinkCommandOutput,
  AssociateLinkCommand,
} from "./commands/AssociateLinkCommand";
import {
  type AssociateTransitGatewayConnectPeerCommandInput,
  type AssociateTransitGatewayConnectPeerCommandOutput,
  AssociateTransitGatewayConnectPeerCommand,
} from "./commands/AssociateTransitGatewayConnectPeerCommand";
import {
  type CreateConnectAttachmentCommandInput,
  type CreateConnectAttachmentCommandOutput,
  CreateConnectAttachmentCommand,
} from "./commands/CreateConnectAttachmentCommand";
import {
  type CreateConnectionCommandInput,
  type CreateConnectionCommandOutput,
  CreateConnectionCommand,
} from "./commands/CreateConnectionCommand";
import {
  type CreateConnectPeerCommandInput,
  type CreateConnectPeerCommandOutput,
  CreateConnectPeerCommand,
} from "./commands/CreateConnectPeerCommand";
import {
  type CreateCoreNetworkCommandInput,
  type CreateCoreNetworkCommandOutput,
  CreateCoreNetworkCommand,
} from "./commands/CreateCoreNetworkCommand";
import {
  type CreateCoreNetworkPrefixListAssociationCommandInput,
  type CreateCoreNetworkPrefixListAssociationCommandOutput,
  CreateCoreNetworkPrefixListAssociationCommand,
} from "./commands/CreateCoreNetworkPrefixListAssociationCommand";
import {
  type CreateDeviceCommandInput,
  type CreateDeviceCommandOutput,
  CreateDeviceCommand,
} from "./commands/CreateDeviceCommand";
import {
  type CreateDirectConnectGatewayAttachmentCommandInput,
  type CreateDirectConnectGatewayAttachmentCommandOutput,
  CreateDirectConnectGatewayAttachmentCommand,
} from "./commands/CreateDirectConnectGatewayAttachmentCommand";
import {
  type CreateGlobalNetworkCommandInput,
  type CreateGlobalNetworkCommandOutput,
  CreateGlobalNetworkCommand,
} from "./commands/CreateGlobalNetworkCommand";
import {
  type CreateLinkCommandInput,
  type CreateLinkCommandOutput,
  CreateLinkCommand,
} from "./commands/CreateLinkCommand";
import {
  type CreateSiteCommandInput,
  type CreateSiteCommandOutput,
  CreateSiteCommand,
} from "./commands/CreateSiteCommand";
import {
  type CreateSiteToSiteVpnAttachmentCommandInput,
  type CreateSiteToSiteVpnAttachmentCommandOutput,
  CreateSiteToSiteVpnAttachmentCommand,
} from "./commands/CreateSiteToSiteVpnAttachmentCommand";
import {
  type CreateTransitGatewayPeeringCommandInput,
  type CreateTransitGatewayPeeringCommandOutput,
  CreateTransitGatewayPeeringCommand,
} from "./commands/CreateTransitGatewayPeeringCommand";
import {
  type CreateTransitGatewayRouteTableAttachmentCommandInput,
  type CreateTransitGatewayRouteTableAttachmentCommandOutput,
  CreateTransitGatewayRouteTableAttachmentCommand,
} from "./commands/CreateTransitGatewayRouteTableAttachmentCommand";
import {
  type CreateVpcAttachmentCommandInput,
  type CreateVpcAttachmentCommandOutput,
  CreateVpcAttachmentCommand,
} from "./commands/CreateVpcAttachmentCommand";
import {
  type DeleteAttachmentCommandInput,
  type DeleteAttachmentCommandOutput,
  DeleteAttachmentCommand,
} from "./commands/DeleteAttachmentCommand";
import {
  type DeleteConnectionCommandInput,
  type DeleteConnectionCommandOutput,
  DeleteConnectionCommand,
} from "./commands/DeleteConnectionCommand";
import {
  type DeleteConnectPeerCommandInput,
  type DeleteConnectPeerCommandOutput,
  DeleteConnectPeerCommand,
} from "./commands/DeleteConnectPeerCommand";
import {
  type DeleteCoreNetworkCommandInput,
  type DeleteCoreNetworkCommandOutput,
  DeleteCoreNetworkCommand,
} from "./commands/DeleteCoreNetworkCommand";
import {
  type DeleteCoreNetworkPolicyVersionCommandInput,
  type DeleteCoreNetworkPolicyVersionCommandOutput,
  DeleteCoreNetworkPolicyVersionCommand,
} from "./commands/DeleteCoreNetworkPolicyVersionCommand";
import {
  type DeleteCoreNetworkPrefixListAssociationCommandInput,
  type DeleteCoreNetworkPrefixListAssociationCommandOutput,
  DeleteCoreNetworkPrefixListAssociationCommand,
} from "./commands/DeleteCoreNetworkPrefixListAssociationCommand";
import {
  type DeleteDeviceCommandInput,
  type DeleteDeviceCommandOutput,
  DeleteDeviceCommand,
} from "./commands/DeleteDeviceCommand";
import {
  type DeleteGlobalNetworkCommandInput,
  type DeleteGlobalNetworkCommandOutput,
  DeleteGlobalNetworkCommand,
} from "./commands/DeleteGlobalNetworkCommand";
import {
  type DeleteLinkCommandInput,
  type DeleteLinkCommandOutput,
  DeleteLinkCommand,
} from "./commands/DeleteLinkCommand";
import {
  type DeletePeeringCommandInput,
  type DeletePeeringCommandOutput,
  DeletePeeringCommand,
} from "./commands/DeletePeeringCommand";
import {
  type DeleteResourcePolicyCommandInput,
  type DeleteResourcePolicyCommandOutput,
  DeleteResourcePolicyCommand,
} from "./commands/DeleteResourcePolicyCommand";
import {
  type DeleteSiteCommandInput,
  type DeleteSiteCommandOutput,
  DeleteSiteCommand,
} from "./commands/DeleteSiteCommand";
import {
  type DeregisterTransitGatewayCommandInput,
  type DeregisterTransitGatewayCommandOutput,
  DeregisterTransitGatewayCommand,
} from "./commands/DeregisterTransitGatewayCommand";
import {
  type DescribeGlobalNetworksCommandInput,
  type DescribeGlobalNetworksCommandOutput,
  DescribeGlobalNetworksCommand,
} from "./commands/DescribeGlobalNetworksCommand";
import {
  type DisassociateConnectPeerCommandInput,
  type DisassociateConnectPeerCommandOutput,
  DisassociateConnectPeerCommand,
} from "./commands/DisassociateConnectPeerCommand";
import {
  type DisassociateCustomerGatewayCommandInput,
  type DisassociateCustomerGatewayCommandOutput,
  DisassociateCustomerGatewayCommand,
} from "./commands/DisassociateCustomerGatewayCommand";
import {
  type DisassociateLinkCommandInput,
  type DisassociateLinkCommandOutput,
  DisassociateLinkCommand,
} from "./commands/DisassociateLinkCommand";
import {
  type DisassociateTransitGatewayConnectPeerCommandInput,
  type DisassociateTransitGatewayConnectPeerCommandOutput,
  DisassociateTransitGatewayConnectPeerCommand,
} from "./commands/DisassociateTransitGatewayConnectPeerCommand";
import {
  type ExecuteCoreNetworkChangeSetCommandInput,
  type ExecuteCoreNetworkChangeSetCommandOutput,
  ExecuteCoreNetworkChangeSetCommand,
} from "./commands/ExecuteCoreNetworkChangeSetCommand";
import {
  type GetConnectAttachmentCommandInput,
  type GetConnectAttachmentCommandOutput,
  GetConnectAttachmentCommand,
} from "./commands/GetConnectAttachmentCommand";
import {
  type GetConnectionsCommandInput,
  type GetConnectionsCommandOutput,
  GetConnectionsCommand,
} from "./commands/GetConnectionsCommand";
import {
  type GetConnectPeerAssociationsCommandInput,
  type GetConnectPeerAssociationsCommandOutput,
  GetConnectPeerAssociationsCommand,
} from "./commands/GetConnectPeerAssociationsCommand";
import {
  type GetConnectPeerCommandInput,
  type GetConnectPeerCommandOutput,
  GetConnectPeerCommand,
} from "./commands/GetConnectPeerCommand";
import {
  type GetCoreNetworkChangeEventsCommandInput,
  type GetCoreNetworkChangeEventsCommandOutput,
  GetCoreNetworkChangeEventsCommand,
} from "./commands/GetCoreNetworkChangeEventsCommand";
import {
  type GetCoreNetworkChangeSetCommandInput,
  type GetCoreNetworkChangeSetCommandOutput,
  GetCoreNetworkChangeSetCommand,
} from "./commands/GetCoreNetworkChangeSetCommand";
import {
  type GetCoreNetworkCommandInput,
  type GetCoreNetworkCommandOutput,
  GetCoreNetworkCommand,
} from "./commands/GetCoreNetworkCommand";
import {
  type GetCoreNetworkPolicyCommandInput,
  type GetCoreNetworkPolicyCommandOutput,
  GetCoreNetworkPolicyCommand,
} from "./commands/GetCoreNetworkPolicyCommand";
import {
  type GetCustomerGatewayAssociationsCommandInput,
  type GetCustomerGatewayAssociationsCommandOutput,
  GetCustomerGatewayAssociationsCommand,
} from "./commands/GetCustomerGatewayAssociationsCommand";
import {
  type GetDevicesCommandInput,
  type GetDevicesCommandOutput,
  GetDevicesCommand,
} from "./commands/GetDevicesCommand";
import {
  type GetDirectConnectGatewayAttachmentCommandInput,
  type GetDirectConnectGatewayAttachmentCommandOutput,
  GetDirectConnectGatewayAttachmentCommand,
} from "./commands/GetDirectConnectGatewayAttachmentCommand";
import {
  type GetLinkAssociationsCommandInput,
  type GetLinkAssociationsCommandOutput,
  GetLinkAssociationsCommand,
} from "./commands/GetLinkAssociationsCommand";
import { type GetLinksCommandInput, type GetLinksCommandOutput, GetLinksCommand } from "./commands/GetLinksCommand";
import {
  type GetNetworkResourceCountsCommandInput,
  type GetNetworkResourceCountsCommandOutput,
  GetNetworkResourceCountsCommand,
} from "./commands/GetNetworkResourceCountsCommand";
import {
  type GetNetworkResourceRelationshipsCommandInput,
  type GetNetworkResourceRelationshipsCommandOutput,
  GetNetworkResourceRelationshipsCommand,
} from "./commands/GetNetworkResourceRelationshipsCommand";
import {
  type GetNetworkResourcesCommandInput,
  type GetNetworkResourcesCommandOutput,
  GetNetworkResourcesCommand,
} from "./commands/GetNetworkResourcesCommand";
import {
  type GetNetworkRoutesCommandInput,
  type GetNetworkRoutesCommandOutput,
  GetNetworkRoutesCommand,
} from "./commands/GetNetworkRoutesCommand";
import {
  type GetNetworkTelemetryCommandInput,
  type GetNetworkTelemetryCommandOutput,
  GetNetworkTelemetryCommand,
} from "./commands/GetNetworkTelemetryCommand";
import {
  type GetResourcePolicyCommandInput,
  type GetResourcePolicyCommandOutput,
  GetResourcePolicyCommand,
} from "./commands/GetResourcePolicyCommand";
import {
  type GetRouteAnalysisCommandInput,
  type GetRouteAnalysisCommandOutput,
  GetRouteAnalysisCommand,
} from "./commands/GetRouteAnalysisCommand";
import { type GetSitesCommandInput, type GetSitesCommandOutput, GetSitesCommand } from "./commands/GetSitesCommand";
import {
  type GetSiteToSiteVpnAttachmentCommandInput,
  type GetSiteToSiteVpnAttachmentCommandOutput,
  GetSiteToSiteVpnAttachmentCommand,
} from "./commands/GetSiteToSiteVpnAttachmentCommand";
import {
  type GetTransitGatewayConnectPeerAssociationsCommandInput,
  type GetTransitGatewayConnectPeerAssociationsCommandOutput,
  GetTransitGatewayConnectPeerAssociationsCommand,
} from "./commands/GetTransitGatewayConnectPeerAssociationsCommand";
import {
  type GetTransitGatewayPeeringCommandInput,
  type GetTransitGatewayPeeringCommandOutput,
  GetTransitGatewayPeeringCommand,
} from "./commands/GetTransitGatewayPeeringCommand";
import {
  type GetTransitGatewayRegistrationsCommandInput,
  type GetTransitGatewayRegistrationsCommandOutput,
  GetTransitGatewayRegistrationsCommand,
} from "./commands/GetTransitGatewayRegistrationsCommand";
import {
  type GetTransitGatewayRouteTableAttachmentCommandInput,
  type GetTransitGatewayRouteTableAttachmentCommandOutput,
  GetTransitGatewayRouteTableAttachmentCommand,
} from "./commands/GetTransitGatewayRouteTableAttachmentCommand";
import {
  type GetVpcAttachmentCommandInput,
  type GetVpcAttachmentCommandOutput,
  GetVpcAttachmentCommand,
} from "./commands/GetVpcAttachmentCommand";
import {
  type ListAttachmentRoutingPolicyAssociationsCommandInput,
  type ListAttachmentRoutingPolicyAssociationsCommandOutput,
  ListAttachmentRoutingPolicyAssociationsCommand,
} from "./commands/ListAttachmentRoutingPolicyAssociationsCommand";
import {
  type ListAttachmentsCommandInput,
  type ListAttachmentsCommandOutput,
  ListAttachmentsCommand,
} from "./commands/ListAttachmentsCommand";
import {
  type ListConnectPeersCommandInput,
  type ListConnectPeersCommandOutput,
  ListConnectPeersCommand,
} from "./commands/ListConnectPeersCommand";
import {
  type ListCoreNetworkPolicyVersionsCommandInput,
  type ListCoreNetworkPolicyVersionsCommandOutput,
  ListCoreNetworkPolicyVersionsCommand,
} from "./commands/ListCoreNetworkPolicyVersionsCommand";
import {
  type ListCoreNetworkPrefixListAssociationsCommandInput,
  type ListCoreNetworkPrefixListAssociationsCommandOutput,
  ListCoreNetworkPrefixListAssociationsCommand,
} from "./commands/ListCoreNetworkPrefixListAssociationsCommand";
import {
  type ListCoreNetworkRoutingInformationCommandInput,
  type ListCoreNetworkRoutingInformationCommandOutput,
  ListCoreNetworkRoutingInformationCommand,
} from "./commands/ListCoreNetworkRoutingInformationCommand";
import {
  type ListCoreNetworksCommandInput,
  type ListCoreNetworksCommandOutput,
  ListCoreNetworksCommand,
} from "./commands/ListCoreNetworksCommand";
import {
  type ListOrganizationServiceAccessStatusCommandInput,
  type ListOrganizationServiceAccessStatusCommandOutput,
  ListOrganizationServiceAccessStatusCommand,
} from "./commands/ListOrganizationServiceAccessStatusCommand";
import {
  type ListPeeringsCommandInput,
  type ListPeeringsCommandOutput,
  ListPeeringsCommand,
} from "./commands/ListPeeringsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type PutAttachmentRoutingPolicyLabelCommandInput,
  type PutAttachmentRoutingPolicyLabelCommandOutput,
  PutAttachmentRoutingPolicyLabelCommand,
} from "./commands/PutAttachmentRoutingPolicyLabelCommand";
import {
  type PutCoreNetworkPolicyCommandInput,
  type PutCoreNetworkPolicyCommandOutput,
  PutCoreNetworkPolicyCommand,
} from "./commands/PutCoreNetworkPolicyCommand";
import {
  type PutResourcePolicyCommandInput,
  type PutResourcePolicyCommandOutput,
  PutResourcePolicyCommand,
} from "./commands/PutResourcePolicyCommand";
import {
  type RegisterTransitGatewayCommandInput,
  type RegisterTransitGatewayCommandOutput,
  RegisterTransitGatewayCommand,
} from "./commands/RegisterTransitGatewayCommand";
import {
  type RejectAttachmentCommandInput,
  type RejectAttachmentCommandOutput,
  RejectAttachmentCommand,
} from "./commands/RejectAttachmentCommand";
import {
  type RemoveAttachmentRoutingPolicyLabelCommandInput,
  type RemoveAttachmentRoutingPolicyLabelCommandOutput,
  RemoveAttachmentRoutingPolicyLabelCommand,
} from "./commands/RemoveAttachmentRoutingPolicyLabelCommand";
import {
  type RestoreCoreNetworkPolicyVersionCommandInput,
  type RestoreCoreNetworkPolicyVersionCommandOutput,
  RestoreCoreNetworkPolicyVersionCommand,
} from "./commands/RestoreCoreNetworkPolicyVersionCommand";
import {
  type StartOrganizationServiceAccessUpdateCommandInput,
  type StartOrganizationServiceAccessUpdateCommandOutput,
  StartOrganizationServiceAccessUpdateCommand,
} from "./commands/StartOrganizationServiceAccessUpdateCommand";
import {
  type StartRouteAnalysisCommandInput,
  type StartRouteAnalysisCommandOutput,
  StartRouteAnalysisCommand,
} from "./commands/StartRouteAnalysisCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateConnectionCommandInput,
  type UpdateConnectionCommandOutput,
  UpdateConnectionCommand,
} from "./commands/UpdateConnectionCommand";
import {
  type UpdateCoreNetworkCommandInput,
  type UpdateCoreNetworkCommandOutput,
  UpdateCoreNetworkCommand,
} from "./commands/UpdateCoreNetworkCommand";
import {
  type UpdateDeviceCommandInput,
  type UpdateDeviceCommandOutput,
  UpdateDeviceCommand,
} from "./commands/UpdateDeviceCommand";
import {
  type UpdateDirectConnectGatewayAttachmentCommandInput,
  type UpdateDirectConnectGatewayAttachmentCommandOutput,
  UpdateDirectConnectGatewayAttachmentCommand,
} from "./commands/UpdateDirectConnectGatewayAttachmentCommand";
import {
  type UpdateGlobalNetworkCommandInput,
  type UpdateGlobalNetworkCommandOutput,
  UpdateGlobalNetworkCommand,
} from "./commands/UpdateGlobalNetworkCommand";
import {
  type UpdateLinkCommandInput,
  type UpdateLinkCommandOutput,
  UpdateLinkCommand,
} from "./commands/UpdateLinkCommand";
import {
  type UpdateNetworkResourceMetadataCommandInput,
  type UpdateNetworkResourceMetadataCommandOutput,
  UpdateNetworkResourceMetadataCommand,
} from "./commands/UpdateNetworkResourceMetadataCommand";
import {
  type UpdateSiteCommandInput,
  type UpdateSiteCommandOutput,
  UpdateSiteCommand,
} from "./commands/UpdateSiteCommand";
import {
  type UpdateVpcAttachmentCommandInput,
  type UpdateVpcAttachmentCommandOutput,
  UpdateVpcAttachmentCommand,
} from "./commands/UpdateVpcAttachmentCommand";
import { NetworkManagerClient } from "./NetworkManagerClient";
import { paginateDescribeGlobalNetworks } from "./pagination/DescribeGlobalNetworksPaginator";
import { paginateGetConnections } from "./pagination/GetConnectionsPaginator";
import { paginateGetConnectPeerAssociations } from "./pagination/GetConnectPeerAssociationsPaginator";
import { paginateGetCoreNetworkChangeEvents } from "./pagination/GetCoreNetworkChangeEventsPaginator";
import { paginateGetCoreNetworkChangeSet } from "./pagination/GetCoreNetworkChangeSetPaginator";
import { paginateGetCustomerGatewayAssociations } from "./pagination/GetCustomerGatewayAssociationsPaginator";
import { paginateGetDevices } from "./pagination/GetDevicesPaginator";
import { paginateGetLinkAssociations } from "./pagination/GetLinkAssociationsPaginator";
import { paginateGetLinks } from "./pagination/GetLinksPaginator";
import { paginateGetNetworkResourceCounts } from "./pagination/GetNetworkResourceCountsPaginator";
import { paginateGetNetworkResourceRelationships } from "./pagination/GetNetworkResourceRelationshipsPaginator";
import { paginateGetNetworkResources } from "./pagination/GetNetworkResourcesPaginator";
import { paginateGetNetworkTelemetry } from "./pagination/GetNetworkTelemetryPaginator";
import { paginateGetSites } from "./pagination/GetSitesPaginator";
import {
  paginateGetTransitGatewayConnectPeerAssociations,
} from "./pagination/GetTransitGatewayConnectPeerAssociationsPaginator";
import { paginateGetTransitGatewayRegistrations } from "./pagination/GetTransitGatewayRegistrationsPaginator";
import {
  paginateListAttachmentRoutingPolicyAssociations,
} from "./pagination/ListAttachmentRoutingPolicyAssociationsPaginator";
import { paginateListAttachments } from "./pagination/ListAttachmentsPaginator";
import { paginateListConnectPeers } from "./pagination/ListConnectPeersPaginator";
import { paginateListCoreNetworkPolicyVersions } from "./pagination/ListCoreNetworkPolicyVersionsPaginator";
import {
  paginateListCoreNetworkPrefixListAssociations,
} from "./pagination/ListCoreNetworkPrefixListAssociationsPaginator";
import { paginateListCoreNetworkRoutingInformation } from "./pagination/ListCoreNetworkRoutingInformationPaginator";
import { paginateListCoreNetworks } from "./pagination/ListCoreNetworksPaginator";
import { paginateListPeerings } from "./pagination/ListPeeringsPaginator";

const commands = {
  AcceptAttachmentCommand,
  AssociateConnectPeerCommand,
  AssociateCustomerGatewayCommand,
  AssociateLinkCommand,
  AssociateTransitGatewayConnectPeerCommand,
  CreateConnectAttachmentCommand,
  CreateConnectionCommand,
  CreateConnectPeerCommand,
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
  DeleteAttachmentCommand,
  DeleteConnectionCommand,
  DeleteConnectPeerCommand,
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
  DisassociateConnectPeerCommand,
  DisassociateCustomerGatewayCommand,
  DisassociateLinkCommand,
  DisassociateTransitGatewayConnectPeerCommand,
  ExecuteCoreNetworkChangeSetCommand,
  GetConnectAttachmentCommand,
  GetConnectionsCommand,
  GetConnectPeerCommand,
  GetConnectPeerAssociationsCommand,
  GetCoreNetworkCommand,
  GetCoreNetworkChangeEventsCommand,
  GetCoreNetworkChangeSetCommand,
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
  GetSitesCommand,
  GetSiteToSiteVpnAttachmentCommand,
  GetTransitGatewayConnectPeerAssociationsCommand,
  GetTransitGatewayPeeringCommand,
  GetTransitGatewayRegistrationsCommand,
  GetTransitGatewayRouteTableAttachmentCommand,
  GetVpcAttachmentCommand,
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
  PutAttachmentRoutingPolicyLabelCommand,
  PutCoreNetworkPolicyCommand,
  PutResourcePolicyCommand,
  RegisterTransitGatewayCommand,
  RejectAttachmentCommand,
  RemoveAttachmentRoutingPolicyLabelCommand,
  RestoreCoreNetworkPolicyVersionCommand,
  StartOrganizationServiceAccessUpdateCommand,
  StartRouteAnalysisCommand,
  TagResourceCommand,
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
};
const paginators = {
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
};

/**
 * @public
 */
export interface NetworkManagerRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface NetworkManager {
  /**
   * @see {@link AcceptAttachmentCommand}
   */
  acceptAttachment(
    args: AcceptAttachmentCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<AcceptAttachmentCommandOutput>;
  acceptAttachment(
    args: AcceptAttachmentCommandInput,
    cb: (err: any, data?: AcceptAttachmentCommandOutput) => void
  ): void;
  acceptAttachment(
    args: AcceptAttachmentCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: AcceptAttachmentCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateConnectPeerCommand}
   */
  associateConnectPeer(
    args: AssociateConnectPeerCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<AssociateConnectPeerCommandOutput>;
  associateConnectPeer(
    args: AssociateConnectPeerCommandInput,
    cb: (err: any, data?: AssociateConnectPeerCommandOutput) => void
  ): void;
  associateConnectPeer(
    args: AssociateConnectPeerCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: AssociateConnectPeerCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateCustomerGatewayCommand}
   */
  associateCustomerGateway(
    args: AssociateCustomerGatewayCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<AssociateCustomerGatewayCommandOutput>;
  associateCustomerGateway(
    args: AssociateCustomerGatewayCommandInput,
    cb: (err: any, data?: AssociateCustomerGatewayCommandOutput) => void
  ): void;
  associateCustomerGateway(
    args: AssociateCustomerGatewayCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: AssociateCustomerGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateLinkCommand}
   */
  associateLink(
    args: AssociateLinkCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<AssociateLinkCommandOutput>;
  associateLink(
    args: AssociateLinkCommandInput,
    cb: (err: any, data?: AssociateLinkCommandOutput) => void
  ): void;
  associateLink(
    args: AssociateLinkCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: AssociateLinkCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateTransitGatewayConnectPeerCommand}
   */
  associateTransitGatewayConnectPeer(
    args: AssociateTransitGatewayConnectPeerCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<AssociateTransitGatewayConnectPeerCommandOutput>;
  associateTransitGatewayConnectPeer(
    args: AssociateTransitGatewayConnectPeerCommandInput,
    cb: (err: any, data?: AssociateTransitGatewayConnectPeerCommandOutput) => void
  ): void;
  associateTransitGatewayConnectPeer(
    args: AssociateTransitGatewayConnectPeerCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: AssociateTransitGatewayConnectPeerCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateConnectAttachmentCommand}
   */
  createConnectAttachment(
    args: CreateConnectAttachmentCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<CreateConnectAttachmentCommandOutput>;
  createConnectAttachment(
    args: CreateConnectAttachmentCommandInput,
    cb: (err: any, data?: CreateConnectAttachmentCommandOutput) => void
  ): void;
  createConnectAttachment(
    args: CreateConnectAttachmentCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: CreateConnectAttachmentCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateConnectionCommand}
   */
  createConnection(
    args: CreateConnectionCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<CreateConnectionCommandOutput>;
  createConnection(
    args: CreateConnectionCommandInput,
    cb: (err: any, data?: CreateConnectionCommandOutput) => void
  ): void;
  createConnection(
    args: CreateConnectionCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: CreateConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateConnectPeerCommand}
   */
  createConnectPeer(
    args: CreateConnectPeerCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<CreateConnectPeerCommandOutput>;
  createConnectPeer(
    args: CreateConnectPeerCommandInput,
    cb: (err: any, data?: CreateConnectPeerCommandOutput) => void
  ): void;
  createConnectPeer(
    args: CreateConnectPeerCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: CreateConnectPeerCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCoreNetworkCommand}
   */
  createCoreNetwork(
    args: CreateCoreNetworkCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<CreateCoreNetworkCommandOutput>;
  createCoreNetwork(
    args: CreateCoreNetworkCommandInput,
    cb: (err: any, data?: CreateCoreNetworkCommandOutput) => void
  ): void;
  createCoreNetwork(
    args: CreateCoreNetworkCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: CreateCoreNetworkCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCoreNetworkPrefixListAssociationCommand}
   */
  createCoreNetworkPrefixListAssociation(
    args: CreateCoreNetworkPrefixListAssociationCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<CreateCoreNetworkPrefixListAssociationCommandOutput>;
  createCoreNetworkPrefixListAssociation(
    args: CreateCoreNetworkPrefixListAssociationCommandInput,
    cb: (err: any, data?: CreateCoreNetworkPrefixListAssociationCommandOutput) => void
  ): void;
  createCoreNetworkPrefixListAssociation(
    args: CreateCoreNetworkPrefixListAssociationCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: CreateCoreNetworkPrefixListAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDeviceCommand}
   */
  createDevice(
    args: CreateDeviceCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<CreateDeviceCommandOutput>;
  createDevice(
    args: CreateDeviceCommandInput,
    cb: (err: any, data?: CreateDeviceCommandOutput) => void
  ): void;
  createDevice(
    args: CreateDeviceCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: CreateDeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDirectConnectGatewayAttachmentCommand}
   */
  createDirectConnectGatewayAttachment(
    args: CreateDirectConnectGatewayAttachmentCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<CreateDirectConnectGatewayAttachmentCommandOutput>;
  createDirectConnectGatewayAttachment(
    args: CreateDirectConnectGatewayAttachmentCommandInput,
    cb: (err: any, data?: CreateDirectConnectGatewayAttachmentCommandOutput) => void
  ): void;
  createDirectConnectGatewayAttachment(
    args: CreateDirectConnectGatewayAttachmentCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: CreateDirectConnectGatewayAttachmentCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateGlobalNetworkCommand}
   */
  createGlobalNetwork(): Promise<CreateGlobalNetworkCommandOutput>;
  createGlobalNetwork(
    args: CreateGlobalNetworkCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<CreateGlobalNetworkCommandOutput>;
  createGlobalNetwork(
    args: CreateGlobalNetworkCommandInput,
    cb: (err: any, data?: CreateGlobalNetworkCommandOutput) => void
  ): void;
  createGlobalNetwork(
    args: CreateGlobalNetworkCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: CreateGlobalNetworkCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLinkCommand}
   */
  createLink(
    args: CreateLinkCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<CreateLinkCommandOutput>;
  createLink(
    args: CreateLinkCommandInput,
    cb: (err: any, data?: CreateLinkCommandOutput) => void
  ): void;
  createLink(
    args: CreateLinkCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: CreateLinkCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSiteCommand}
   */
  createSite(
    args: CreateSiteCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<CreateSiteCommandOutput>;
  createSite(
    args: CreateSiteCommandInput,
    cb: (err: any, data?: CreateSiteCommandOutput) => void
  ): void;
  createSite(
    args: CreateSiteCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: CreateSiteCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSiteToSiteVpnAttachmentCommand}
   */
  createSiteToSiteVpnAttachment(
    args: CreateSiteToSiteVpnAttachmentCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<CreateSiteToSiteVpnAttachmentCommandOutput>;
  createSiteToSiteVpnAttachment(
    args: CreateSiteToSiteVpnAttachmentCommandInput,
    cb: (err: any, data?: CreateSiteToSiteVpnAttachmentCommandOutput) => void
  ): void;
  createSiteToSiteVpnAttachment(
    args: CreateSiteToSiteVpnAttachmentCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: CreateSiteToSiteVpnAttachmentCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTransitGatewayPeeringCommand}
   */
  createTransitGatewayPeering(
    args: CreateTransitGatewayPeeringCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<CreateTransitGatewayPeeringCommandOutput>;
  createTransitGatewayPeering(
    args: CreateTransitGatewayPeeringCommandInput,
    cb: (err: any, data?: CreateTransitGatewayPeeringCommandOutput) => void
  ): void;
  createTransitGatewayPeering(
    args: CreateTransitGatewayPeeringCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: CreateTransitGatewayPeeringCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTransitGatewayRouteTableAttachmentCommand}
   */
  createTransitGatewayRouteTableAttachment(
    args: CreateTransitGatewayRouteTableAttachmentCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<CreateTransitGatewayRouteTableAttachmentCommandOutput>;
  createTransitGatewayRouteTableAttachment(
    args: CreateTransitGatewayRouteTableAttachmentCommandInput,
    cb: (err: any, data?: CreateTransitGatewayRouteTableAttachmentCommandOutput) => void
  ): void;
  createTransitGatewayRouteTableAttachment(
    args: CreateTransitGatewayRouteTableAttachmentCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: CreateTransitGatewayRouteTableAttachmentCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateVpcAttachmentCommand}
   */
  createVpcAttachment(
    args: CreateVpcAttachmentCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<CreateVpcAttachmentCommandOutput>;
  createVpcAttachment(
    args: CreateVpcAttachmentCommandInput,
    cb: (err: any, data?: CreateVpcAttachmentCommandOutput) => void
  ): void;
  createVpcAttachment(
    args: CreateVpcAttachmentCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: CreateVpcAttachmentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAttachmentCommand}
   */
  deleteAttachment(
    args: DeleteAttachmentCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<DeleteAttachmentCommandOutput>;
  deleteAttachment(
    args: DeleteAttachmentCommandInput,
    cb: (err: any, data?: DeleteAttachmentCommandOutput) => void
  ): void;
  deleteAttachment(
    args: DeleteAttachmentCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: DeleteAttachmentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteConnectionCommand}
   */
  deleteConnection(
    args: DeleteConnectionCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<DeleteConnectionCommandOutput>;
  deleteConnection(
    args: DeleteConnectionCommandInput,
    cb: (err: any, data?: DeleteConnectionCommandOutput) => void
  ): void;
  deleteConnection(
    args: DeleteConnectionCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: DeleteConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteConnectPeerCommand}
   */
  deleteConnectPeer(
    args: DeleteConnectPeerCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<DeleteConnectPeerCommandOutput>;
  deleteConnectPeer(
    args: DeleteConnectPeerCommandInput,
    cb: (err: any, data?: DeleteConnectPeerCommandOutput) => void
  ): void;
  deleteConnectPeer(
    args: DeleteConnectPeerCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: DeleteConnectPeerCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCoreNetworkCommand}
   */
  deleteCoreNetwork(
    args: DeleteCoreNetworkCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<DeleteCoreNetworkCommandOutput>;
  deleteCoreNetwork(
    args: DeleteCoreNetworkCommandInput,
    cb: (err: any, data?: DeleteCoreNetworkCommandOutput) => void
  ): void;
  deleteCoreNetwork(
    args: DeleteCoreNetworkCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: DeleteCoreNetworkCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCoreNetworkPolicyVersionCommand}
   */
  deleteCoreNetworkPolicyVersion(
    args: DeleteCoreNetworkPolicyVersionCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<DeleteCoreNetworkPolicyVersionCommandOutput>;
  deleteCoreNetworkPolicyVersion(
    args: DeleteCoreNetworkPolicyVersionCommandInput,
    cb: (err: any, data?: DeleteCoreNetworkPolicyVersionCommandOutput) => void
  ): void;
  deleteCoreNetworkPolicyVersion(
    args: DeleteCoreNetworkPolicyVersionCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: DeleteCoreNetworkPolicyVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCoreNetworkPrefixListAssociationCommand}
   */
  deleteCoreNetworkPrefixListAssociation(
    args: DeleteCoreNetworkPrefixListAssociationCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<DeleteCoreNetworkPrefixListAssociationCommandOutput>;
  deleteCoreNetworkPrefixListAssociation(
    args: DeleteCoreNetworkPrefixListAssociationCommandInput,
    cb: (err: any, data?: DeleteCoreNetworkPrefixListAssociationCommandOutput) => void
  ): void;
  deleteCoreNetworkPrefixListAssociation(
    args: DeleteCoreNetworkPrefixListAssociationCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: DeleteCoreNetworkPrefixListAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDeviceCommand}
   */
  deleteDevice(
    args: DeleteDeviceCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<DeleteDeviceCommandOutput>;
  deleteDevice(
    args: DeleteDeviceCommandInput,
    cb: (err: any, data?: DeleteDeviceCommandOutput) => void
  ): void;
  deleteDevice(
    args: DeleteDeviceCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: DeleteDeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteGlobalNetworkCommand}
   */
  deleteGlobalNetwork(
    args: DeleteGlobalNetworkCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<DeleteGlobalNetworkCommandOutput>;
  deleteGlobalNetwork(
    args: DeleteGlobalNetworkCommandInput,
    cb: (err: any, data?: DeleteGlobalNetworkCommandOutput) => void
  ): void;
  deleteGlobalNetwork(
    args: DeleteGlobalNetworkCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: DeleteGlobalNetworkCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLinkCommand}
   */
  deleteLink(
    args: DeleteLinkCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<DeleteLinkCommandOutput>;
  deleteLink(
    args: DeleteLinkCommandInput,
    cb: (err: any, data?: DeleteLinkCommandOutput) => void
  ): void;
  deleteLink(
    args: DeleteLinkCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: DeleteLinkCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePeeringCommand}
   */
  deletePeering(
    args: DeletePeeringCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<DeletePeeringCommandOutput>;
  deletePeering(
    args: DeletePeeringCommandInput,
    cb: (err: any, data?: DeletePeeringCommandOutput) => void
  ): void;
  deletePeering(
    args: DeletePeeringCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: DeletePeeringCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResourcePolicyCommand}
   */
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<DeleteResourcePolicyCommandOutput>;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSiteCommand}
   */
  deleteSite(
    args: DeleteSiteCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<DeleteSiteCommandOutput>;
  deleteSite(
    args: DeleteSiteCommandInput,
    cb: (err: any, data?: DeleteSiteCommandOutput) => void
  ): void;
  deleteSite(
    args: DeleteSiteCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: DeleteSiteCommandOutput) => void
  ): void;

  /**
   * @see {@link DeregisterTransitGatewayCommand}
   */
  deregisterTransitGateway(
    args: DeregisterTransitGatewayCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<DeregisterTransitGatewayCommandOutput>;
  deregisterTransitGateway(
    args: DeregisterTransitGatewayCommandInput,
    cb: (err: any, data?: DeregisterTransitGatewayCommandOutput) => void
  ): void;
  deregisterTransitGateway(
    args: DeregisterTransitGatewayCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: DeregisterTransitGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeGlobalNetworksCommand}
   */
  describeGlobalNetworks(): Promise<DescribeGlobalNetworksCommandOutput>;
  describeGlobalNetworks(
    args: DescribeGlobalNetworksCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<DescribeGlobalNetworksCommandOutput>;
  describeGlobalNetworks(
    args: DescribeGlobalNetworksCommandInput,
    cb: (err: any, data?: DescribeGlobalNetworksCommandOutput) => void
  ): void;
  describeGlobalNetworks(
    args: DescribeGlobalNetworksCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: DescribeGlobalNetworksCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateConnectPeerCommand}
   */
  disassociateConnectPeer(
    args: DisassociateConnectPeerCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<DisassociateConnectPeerCommandOutput>;
  disassociateConnectPeer(
    args: DisassociateConnectPeerCommandInput,
    cb: (err: any, data?: DisassociateConnectPeerCommandOutput) => void
  ): void;
  disassociateConnectPeer(
    args: DisassociateConnectPeerCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: DisassociateConnectPeerCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateCustomerGatewayCommand}
   */
  disassociateCustomerGateway(
    args: DisassociateCustomerGatewayCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<DisassociateCustomerGatewayCommandOutput>;
  disassociateCustomerGateway(
    args: DisassociateCustomerGatewayCommandInput,
    cb: (err: any, data?: DisassociateCustomerGatewayCommandOutput) => void
  ): void;
  disassociateCustomerGateway(
    args: DisassociateCustomerGatewayCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: DisassociateCustomerGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateLinkCommand}
   */
  disassociateLink(
    args: DisassociateLinkCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<DisassociateLinkCommandOutput>;
  disassociateLink(
    args: DisassociateLinkCommandInput,
    cb: (err: any, data?: DisassociateLinkCommandOutput) => void
  ): void;
  disassociateLink(
    args: DisassociateLinkCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: DisassociateLinkCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateTransitGatewayConnectPeerCommand}
   */
  disassociateTransitGatewayConnectPeer(
    args: DisassociateTransitGatewayConnectPeerCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<DisassociateTransitGatewayConnectPeerCommandOutput>;
  disassociateTransitGatewayConnectPeer(
    args: DisassociateTransitGatewayConnectPeerCommandInput,
    cb: (err: any, data?: DisassociateTransitGatewayConnectPeerCommandOutput) => void
  ): void;
  disassociateTransitGatewayConnectPeer(
    args: DisassociateTransitGatewayConnectPeerCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: DisassociateTransitGatewayConnectPeerCommandOutput) => void
  ): void;

  /**
   * @see {@link ExecuteCoreNetworkChangeSetCommand}
   */
  executeCoreNetworkChangeSet(
    args: ExecuteCoreNetworkChangeSetCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<ExecuteCoreNetworkChangeSetCommandOutput>;
  executeCoreNetworkChangeSet(
    args: ExecuteCoreNetworkChangeSetCommandInput,
    cb: (err: any, data?: ExecuteCoreNetworkChangeSetCommandOutput) => void
  ): void;
  executeCoreNetworkChangeSet(
    args: ExecuteCoreNetworkChangeSetCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: ExecuteCoreNetworkChangeSetCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConnectAttachmentCommand}
   */
  getConnectAttachment(
    args: GetConnectAttachmentCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<GetConnectAttachmentCommandOutput>;
  getConnectAttachment(
    args: GetConnectAttachmentCommandInput,
    cb: (err: any, data?: GetConnectAttachmentCommandOutput) => void
  ): void;
  getConnectAttachment(
    args: GetConnectAttachmentCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: GetConnectAttachmentCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConnectionsCommand}
   */
  getConnections(
    args: GetConnectionsCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<GetConnectionsCommandOutput>;
  getConnections(
    args: GetConnectionsCommandInput,
    cb: (err: any, data?: GetConnectionsCommandOutput) => void
  ): void;
  getConnections(
    args: GetConnectionsCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: GetConnectionsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConnectPeerCommand}
   */
  getConnectPeer(
    args: GetConnectPeerCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<GetConnectPeerCommandOutput>;
  getConnectPeer(
    args: GetConnectPeerCommandInput,
    cb: (err: any, data?: GetConnectPeerCommandOutput) => void
  ): void;
  getConnectPeer(
    args: GetConnectPeerCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: GetConnectPeerCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConnectPeerAssociationsCommand}
   */
  getConnectPeerAssociations(
    args: GetConnectPeerAssociationsCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<GetConnectPeerAssociationsCommandOutput>;
  getConnectPeerAssociations(
    args: GetConnectPeerAssociationsCommandInput,
    cb: (err: any, data?: GetConnectPeerAssociationsCommandOutput) => void
  ): void;
  getConnectPeerAssociations(
    args: GetConnectPeerAssociationsCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: GetConnectPeerAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCoreNetworkCommand}
   */
  getCoreNetwork(
    args: GetCoreNetworkCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<GetCoreNetworkCommandOutput>;
  getCoreNetwork(
    args: GetCoreNetworkCommandInput,
    cb: (err: any, data?: GetCoreNetworkCommandOutput) => void
  ): void;
  getCoreNetwork(
    args: GetCoreNetworkCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: GetCoreNetworkCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCoreNetworkChangeEventsCommand}
   */
  getCoreNetworkChangeEvents(
    args: GetCoreNetworkChangeEventsCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<GetCoreNetworkChangeEventsCommandOutput>;
  getCoreNetworkChangeEvents(
    args: GetCoreNetworkChangeEventsCommandInput,
    cb: (err: any, data?: GetCoreNetworkChangeEventsCommandOutput) => void
  ): void;
  getCoreNetworkChangeEvents(
    args: GetCoreNetworkChangeEventsCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: GetCoreNetworkChangeEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCoreNetworkChangeSetCommand}
   */
  getCoreNetworkChangeSet(
    args: GetCoreNetworkChangeSetCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<GetCoreNetworkChangeSetCommandOutput>;
  getCoreNetworkChangeSet(
    args: GetCoreNetworkChangeSetCommandInput,
    cb: (err: any, data?: GetCoreNetworkChangeSetCommandOutput) => void
  ): void;
  getCoreNetworkChangeSet(
    args: GetCoreNetworkChangeSetCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: GetCoreNetworkChangeSetCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCoreNetworkPolicyCommand}
   */
  getCoreNetworkPolicy(
    args: GetCoreNetworkPolicyCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<GetCoreNetworkPolicyCommandOutput>;
  getCoreNetworkPolicy(
    args: GetCoreNetworkPolicyCommandInput,
    cb: (err: any, data?: GetCoreNetworkPolicyCommandOutput) => void
  ): void;
  getCoreNetworkPolicy(
    args: GetCoreNetworkPolicyCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: GetCoreNetworkPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCustomerGatewayAssociationsCommand}
   */
  getCustomerGatewayAssociations(
    args: GetCustomerGatewayAssociationsCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<GetCustomerGatewayAssociationsCommandOutput>;
  getCustomerGatewayAssociations(
    args: GetCustomerGatewayAssociationsCommandInput,
    cb: (err: any, data?: GetCustomerGatewayAssociationsCommandOutput) => void
  ): void;
  getCustomerGatewayAssociations(
    args: GetCustomerGatewayAssociationsCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: GetCustomerGatewayAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDevicesCommand}
   */
  getDevices(
    args: GetDevicesCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<GetDevicesCommandOutput>;
  getDevices(
    args: GetDevicesCommandInput,
    cb: (err: any, data?: GetDevicesCommandOutput) => void
  ): void;
  getDevices(
    args: GetDevicesCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: GetDevicesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDirectConnectGatewayAttachmentCommand}
   */
  getDirectConnectGatewayAttachment(
    args: GetDirectConnectGatewayAttachmentCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<GetDirectConnectGatewayAttachmentCommandOutput>;
  getDirectConnectGatewayAttachment(
    args: GetDirectConnectGatewayAttachmentCommandInput,
    cb: (err: any, data?: GetDirectConnectGatewayAttachmentCommandOutput) => void
  ): void;
  getDirectConnectGatewayAttachment(
    args: GetDirectConnectGatewayAttachmentCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: GetDirectConnectGatewayAttachmentCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLinkAssociationsCommand}
   */
  getLinkAssociations(
    args: GetLinkAssociationsCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<GetLinkAssociationsCommandOutput>;
  getLinkAssociations(
    args: GetLinkAssociationsCommandInput,
    cb: (err: any, data?: GetLinkAssociationsCommandOutput) => void
  ): void;
  getLinkAssociations(
    args: GetLinkAssociationsCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: GetLinkAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLinksCommand}
   */
  getLinks(
    args: GetLinksCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<GetLinksCommandOutput>;
  getLinks(
    args: GetLinksCommandInput,
    cb: (err: any, data?: GetLinksCommandOutput) => void
  ): void;
  getLinks(
    args: GetLinksCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: GetLinksCommandOutput) => void
  ): void;

  /**
   * @see {@link GetNetworkResourceCountsCommand}
   */
  getNetworkResourceCounts(
    args: GetNetworkResourceCountsCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<GetNetworkResourceCountsCommandOutput>;
  getNetworkResourceCounts(
    args: GetNetworkResourceCountsCommandInput,
    cb: (err: any, data?: GetNetworkResourceCountsCommandOutput) => void
  ): void;
  getNetworkResourceCounts(
    args: GetNetworkResourceCountsCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: GetNetworkResourceCountsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetNetworkResourceRelationshipsCommand}
   */
  getNetworkResourceRelationships(
    args: GetNetworkResourceRelationshipsCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<GetNetworkResourceRelationshipsCommandOutput>;
  getNetworkResourceRelationships(
    args: GetNetworkResourceRelationshipsCommandInput,
    cb: (err: any, data?: GetNetworkResourceRelationshipsCommandOutput) => void
  ): void;
  getNetworkResourceRelationships(
    args: GetNetworkResourceRelationshipsCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: GetNetworkResourceRelationshipsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetNetworkResourcesCommand}
   */
  getNetworkResources(
    args: GetNetworkResourcesCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<GetNetworkResourcesCommandOutput>;
  getNetworkResources(
    args: GetNetworkResourcesCommandInput,
    cb: (err: any, data?: GetNetworkResourcesCommandOutput) => void
  ): void;
  getNetworkResources(
    args: GetNetworkResourcesCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: GetNetworkResourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetNetworkRoutesCommand}
   */
  getNetworkRoutes(
    args: GetNetworkRoutesCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<GetNetworkRoutesCommandOutput>;
  getNetworkRoutes(
    args: GetNetworkRoutesCommandInput,
    cb: (err: any, data?: GetNetworkRoutesCommandOutput) => void
  ): void;
  getNetworkRoutes(
    args: GetNetworkRoutesCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: GetNetworkRoutesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetNetworkTelemetryCommand}
   */
  getNetworkTelemetry(
    args: GetNetworkTelemetryCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<GetNetworkTelemetryCommandOutput>;
  getNetworkTelemetry(
    args: GetNetworkTelemetryCommandInput,
    cb: (err: any, data?: GetNetworkTelemetryCommandOutput) => void
  ): void;
  getNetworkTelemetry(
    args: GetNetworkTelemetryCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: GetNetworkTelemetryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourcePolicyCommand}
   */
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<GetResourcePolicyCommandOutput>;
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRouteAnalysisCommand}
   */
  getRouteAnalysis(
    args: GetRouteAnalysisCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<GetRouteAnalysisCommandOutput>;
  getRouteAnalysis(
    args: GetRouteAnalysisCommandInput,
    cb: (err: any, data?: GetRouteAnalysisCommandOutput) => void
  ): void;
  getRouteAnalysis(
    args: GetRouteAnalysisCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: GetRouteAnalysisCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSitesCommand}
   */
  getSites(
    args: GetSitesCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<GetSitesCommandOutput>;
  getSites(
    args: GetSitesCommandInput,
    cb: (err: any, data?: GetSitesCommandOutput) => void
  ): void;
  getSites(
    args: GetSitesCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: GetSitesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSiteToSiteVpnAttachmentCommand}
   */
  getSiteToSiteVpnAttachment(
    args: GetSiteToSiteVpnAttachmentCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<GetSiteToSiteVpnAttachmentCommandOutput>;
  getSiteToSiteVpnAttachment(
    args: GetSiteToSiteVpnAttachmentCommandInput,
    cb: (err: any, data?: GetSiteToSiteVpnAttachmentCommandOutput) => void
  ): void;
  getSiteToSiteVpnAttachment(
    args: GetSiteToSiteVpnAttachmentCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: GetSiteToSiteVpnAttachmentCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTransitGatewayConnectPeerAssociationsCommand}
   */
  getTransitGatewayConnectPeerAssociations(
    args: GetTransitGatewayConnectPeerAssociationsCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<GetTransitGatewayConnectPeerAssociationsCommandOutput>;
  getTransitGatewayConnectPeerAssociations(
    args: GetTransitGatewayConnectPeerAssociationsCommandInput,
    cb: (err: any, data?: GetTransitGatewayConnectPeerAssociationsCommandOutput) => void
  ): void;
  getTransitGatewayConnectPeerAssociations(
    args: GetTransitGatewayConnectPeerAssociationsCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: GetTransitGatewayConnectPeerAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTransitGatewayPeeringCommand}
   */
  getTransitGatewayPeering(
    args: GetTransitGatewayPeeringCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<GetTransitGatewayPeeringCommandOutput>;
  getTransitGatewayPeering(
    args: GetTransitGatewayPeeringCommandInput,
    cb: (err: any, data?: GetTransitGatewayPeeringCommandOutput) => void
  ): void;
  getTransitGatewayPeering(
    args: GetTransitGatewayPeeringCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: GetTransitGatewayPeeringCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTransitGatewayRegistrationsCommand}
   */
  getTransitGatewayRegistrations(
    args: GetTransitGatewayRegistrationsCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<GetTransitGatewayRegistrationsCommandOutput>;
  getTransitGatewayRegistrations(
    args: GetTransitGatewayRegistrationsCommandInput,
    cb: (err: any, data?: GetTransitGatewayRegistrationsCommandOutput) => void
  ): void;
  getTransitGatewayRegistrations(
    args: GetTransitGatewayRegistrationsCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: GetTransitGatewayRegistrationsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTransitGatewayRouteTableAttachmentCommand}
   */
  getTransitGatewayRouteTableAttachment(
    args: GetTransitGatewayRouteTableAttachmentCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<GetTransitGatewayRouteTableAttachmentCommandOutput>;
  getTransitGatewayRouteTableAttachment(
    args: GetTransitGatewayRouteTableAttachmentCommandInput,
    cb: (err: any, data?: GetTransitGatewayRouteTableAttachmentCommandOutput) => void
  ): void;
  getTransitGatewayRouteTableAttachment(
    args: GetTransitGatewayRouteTableAttachmentCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: GetTransitGatewayRouteTableAttachmentCommandOutput) => void
  ): void;

  /**
   * @see {@link GetVpcAttachmentCommand}
   */
  getVpcAttachment(
    args: GetVpcAttachmentCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<GetVpcAttachmentCommandOutput>;
  getVpcAttachment(
    args: GetVpcAttachmentCommandInput,
    cb: (err: any, data?: GetVpcAttachmentCommandOutput) => void
  ): void;
  getVpcAttachment(
    args: GetVpcAttachmentCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: GetVpcAttachmentCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAttachmentRoutingPolicyAssociationsCommand}
   */
  listAttachmentRoutingPolicyAssociations(
    args: ListAttachmentRoutingPolicyAssociationsCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<ListAttachmentRoutingPolicyAssociationsCommandOutput>;
  listAttachmentRoutingPolicyAssociations(
    args: ListAttachmentRoutingPolicyAssociationsCommandInput,
    cb: (err: any, data?: ListAttachmentRoutingPolicyAssociationsCommandOutput) => void
  ): void;
  listAttachmentRoutingPolicyAssociations(
    args: ListAttachmentRoutingPolicyAssociationsCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: ListAttachmentRoutingPolicyAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAttachmentsCommand}
   */
  listAttachments(): Promise<ListAttachmentsCommandOutput>;
  listAttachments(
    args: ListAttachmentsCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<ListAttachmentsCommandOutput>;
  listAttachments(
    args: ListAttachmentsCommandInput,
    cb: (err: any, data?: ListAttachmentsCommandOutput) => void
  ): void;
  listAttachments(
    args: ListAttachmentsCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: ListAttachmentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListConnectPeersCommand}
   */
  listConnectPeers(): Promise<ListConnectPeersCommandOutput>;
  listConnectPeers(
    args: ListConnectPeersCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<ListConnectPeersCommandOutput>;
  listConnectPeers(
    args: ListConnectPeersCommandInput,
    cb: (err: any, data?: ListConnectPeersCommandOutput) => void
  ): void;
  listConnectPeers(
    args: ListConnectPeersCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: ListConnectPeersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCoreNetworkPolicyVersionsCommand}
   */
  listCoreNetworkPolicyVersions(
    args: ListCoreNetworkPolicyVersionsCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<ListCoreNetworkPolicyVersionsCommandOutput>;
  listCoreNetworkPolicyVersions(
    args: ListCoreNetworkPolicyVersionsCommandInput,
    cb: (err: any, data?: ListCoreNetworkPolicyVersionsCommandOutput) => void
  ): void;
  listCoreNetworkPolicyVersions(
    args: ListCoreNetworkPolicyVersionsCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: ListCoreNetworkPolicyVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCoreNetworkPrefixListAssociationsCommand}
   */
  listCoreNetworkPrefixListAssociations(
    args: ListCoreNetworkPrefixListAssociationsCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<ListCoreNetworkPrefixListAssociationsCommandOutput>;
  listCoreNetworkPrefixListAssociations(
    args: ListCoreNetworkPrefixListAssociationsCommandInput,
    cb: (err: any, data?: ListCoreNetworkPrefixListAssociationsCommandOutput) => void
  ): void;
  listCoreNetworkPrefixListAssociations(
    args: ListCoreNetworkPrefixListAssociationsCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: ListCoreNetworkPrefixListAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCoreNetworkRoutingInformationCommand}
   */
  listCoreNetworkRoutingInformation(
    args: ListCoreNetworkRoutingInformationCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<ListCoreNetworkRoutingInformationCommandOutput>;
  listCoreNetworkRoutingInformation(
    args: ListCoreNetworkRoutingInformationCommandInput,
    cb: (err: any, data?: ListCoreNetworkRoutingInformationCommandOutput) => void
  ): void;
  listCoreNetworkRoutingInformation(
    args: ListCoreNetworkRoutingInformationCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: ListCoreNetworkRoutingInformationCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCoreNetworksCommand}
   */
  listCoreNetworks(): Promise<ListCoreNetworksCommandOutput>;
  listCoreNetworks(
    args: ListCoreNetworksCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<ListCoreNetworksCommandOutput>;
  listCoreNetworks(
    args: ListCoreNetworksCommandInput,
    cb: (err: any, data?: ListCoreNetworksCommandOutput) => void
  ): void;
  listCoreNetworks(
    args: ListCoreNetworksCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: ListCoreNetworksCommandOutput) => void
  ): void;

  /**
   * @see {@link ListOrganizationServiceAccessStatusCommand}
   */
  listOrganizationServiceAccessStatus(): Promise<ListOrganizationServiceAccessStatusCommandOutput>;
  listOrganizationServiceAccessStatus(
    args: ListOrganizationServiceAccessStatusCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<ListOrganizationServiceAccessStatusCommandOutput>;
  listOrganizationServiceAccessStatus(
    args: ListOrganizationServiceAccessStatusCommandInput,
    cb: (err: any, data?: ListOrganizationServiceAccessStatusCommandOutput) => void
  ): void;
  listOrganizationServiceAccessStatus(
    args: ListOrganizationServiceAccessStatusCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: ListOrganizationServiceAccessStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPeeringsCommand}
   */
  listPeerings(): Promise<ListPeeringsCommandOutput>;
  listPeerings(
    args: ListPeeringsCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<ListPeeringsCommandOutput>;
  listPeerings(
    args: ListPeeringsCommandInput,
    cb: (err: any, data?: ListPeeringsCommandOutput) => void
  ): void;
  listPeerings(
    args: ListPeeringsCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: ListPeeringsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link PutAttachmentRoutingPolicyLabelCommand}
   */
  putAttachmentRoutingPolicyLabel(
    args: PutAttachmentRoutingPolicyLabelCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<PutAttachmentRoutingPolicyLabelCommandOutput>;
  putAttachmentRoutingPolicyLabel(
    args: PutAttachmentRoutingPolicyLabelCommandInput,
    cb: (err: any, data?: PutAttachmentRoutingPolicyLabelCommandOutput) => void
  ): void;
  putAttachmentRoutingPolicyLabel(
    args: PutAttachmentRoutingPolicyLabelCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: PutAttachmentRoutingPolicyLabelCommandOutput) => void
  ): void;

  /**
   * @see {@link PutCoreNetworkPolicyCommand}
   */
  putCoreNetworkPolicy(
    args: PutCoreNetworkPolicyCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<PutCoreNetworkPolicyCommandOutput>;
  putCoreNetworkPolicy(
    args: PutCoreNetworkPolicyCommandInput,
    cb: (err: any, data?: PutCoreNetworkPolicyCommandOutput) => void
  ): void;
  putCoreNetworkPolicy(
    args: PutCoreNetworkPolicyCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: PutCoreNetworkPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link PutResourcePolicyCommand}
   */
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<PutResourcePolicyCommandOutput>;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterTransitGatewayCommand}
   */
  registerTransitGateway(
    args: RegisterTransitGatewayCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<RegisterTransitGatewayCommandOutput>;
  registerTransitGateway(
    args: RegisterTransitGatewayCommandInput,
    cb: (err: any, data?: RegisterTransitGatewayCommandOutput) => void
  ): void;
  registerTransitGateway(
    args: RegisterTransitGatewayCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: RegisterTransitGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link RejectAttachmentCommand}
   */
  rejectAttachment(
    args: RejectAttachmentCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<RejectAttachmentCommandOutput>;
  rejectAttachment(
    args: RejectAttachmentCommandInput,
    cb: (err: any, data?: RejectAttachmentCommandOutput) => void
  ): void;
  rejectAttachment(
    args: RejectAttachmentCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: RejectAttachmentCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveAttachmentRoutingPolicyLabelCommand}
   */
  removeAttachmentRoutingPolicyLabel(
    args: RemoveAttachmentRoutingPolicyLabelCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<RemoveAttachmentRoutingPolicyLabelCommandOutput>;
  removeAttachmentRoutingPolicyLabel(
    args: RemoveAttachmentRoutingPolicyLabelCommandInput,
    cb: (err: any, data?: RemoveAttachmentRoutingPolicyLabelCommandOutput) => void
  ): void;
  removeAttachmentRoutingPolicyLabel(
    args: RemoveAttachmentRoutingPolicyLabelCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: RemoveAttachmentRoutingPolicyLabelCommandOutput) => void
  ): void;

  /**
   * @see {@link RestoreCoreNetworkPolicyVersionCommand}
   */
  restoreCoreNetworkPolicyVersion(
    args: RestoreCoreNetworkPolicyVersionCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<RestoreCoreNetworkPolicyVersionCommandOutput>;
  restoreCoreNetworkPolicyVersion(
    args: RestoreCoreNetworkPolicyVersionCommandInput,
    cb: (err: any, data?: RestoreCoreNetworkPolicyVersionCommandOutput) => void
  ): void;
  restoreCoreNetworkPolicyVersion(
    args: RestoreCoreNetworkPolicyVersionCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: RestoreCoreNetworkPolicyVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link StartOrganizationServiceAccessUpdateCommand}
   */
  startOrganizationServiceAccessUpdate(
    args: StartOrganizationServiceAccessUpdateCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<StartOrganizationServiceAccessUpdateCommandOutput>;
  startOrganizationServiceAccessUpdate(
    args: StartOrganizationServiceAccessUpdateCommandInput,
    cb: (err: any, data?: StartOrganizationServiceAccessUpdateCommandOutput) => void
  ): void;
  startOrganizationServiceAccessUpdate(
    args: StartOrganizationServiceAccessUpdateCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: StartOrganizationServiceAccessUpdateCommandOutput) => void
  ): void;

  /**
   * @see {@link StartRouteAnalysisCommand}
   */
  startRouteAnalysis(
    args: StartRouteAnalysisCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<StartRouteAnalysisCommandOutput>;
  startRouteAnalysis(
    args: StartRouteAnalysisCommandInput,
    cb: (err: any, data?: StartRouteAnalysisCommandOutput) => void
  ): void;
  startRouteAnalysis(
    args: StartRouteAnalysisCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: StartRouteAnalysisCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateConnectionCommand}
   */
  updateConnection(
    args: UpdateConnectionCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<UpdateConnectionCommandOutput>;
  updateConnection(
    args: UpdateConnectionCommandInput,
    cb: (err: any, data?: UpdateConnectionCommandOutput) => void
  ): void;
  updateConnection(
    args: UpdateConnectionCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: UpdateConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateCoreNetworkCommand}
   */
  updateCoreNetwork(
    args: UpdateCoreNetworkCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<UpdateCoreNetworkCommandOutput>;
  updateCoreNetwork(
    args: UpdateCoreNetworkCommandInput,
    cb: (err: any, data?: UpdateCoreNetworkCommandOutput) => void
  ): void;
  updateCoreNetwork(
    args: UpdateCoreNetworkCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: UpdateCoreNetworkCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDeviceCommand}
   */
  updateDevice(
    args: UpdateDeviceCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<UpdateDeviceCommandOutput>;
  updateDevice(
    args: UpdateDeviceCommandInput,
    cb: (err: any, data?: UpdateDeviceCommandOutput) => void
  ): void;
  updateDevice(
    args: UpdateDeviceCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: UpdateDeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDirectConnectGatewayAttachmentCommand}
   */
  updateDirectConnectGatewayAttachment(
    args: UpdateDirectConnectGatewayAttachmentCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<UpdateDirectConnectGatewayAttachmentCommandOutput>;
  updateDirectConnectGatewayAttachment(
    args: UpdateDirectConnectGatewayAttachmentCommandInput,
    cb: (err: any, data?: UpdateDirectConnectGatewayAttachmentCommandOutput) => void
  ): void;
  updateDirectConnectGatewayAttachment(
    args: UpdateDirectConnectGatewayAttachmentCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: UpdateDirectConnectGatewayAttachmentCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateGlobalNetworkCommand}
   */
  updateGlobalNetwork(
    args: UpdateGlobalNetworkCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<UpdateGlobalNetworkCommandOutput>;
  updateGlobalNetwork(
    args: UpdateGlobalNetworkCommandInput,
    cb: (err: any, data?: UpdateGlobalNetworkCommandOutput) => void
  ): void;
  updateGlobalNetwork(
    args: UpdateGlobalNetworkCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: UpdateGlobalNetworkCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateLinkCommand}
   */
  updateLink(
    args: UpdateLinkCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<UpdateLinkCommandOutput>;
  updateLink(
    args: UpdateLinkCommandInput,
    cb: (err: any, data?: UpdateLinkCommandOutput) => void
  ): void;
  updateLink(
    args: UpdateLinkCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: UpdateLinkCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateNetworkResourceMetadataCommand}
   */
  updateNetworkResourceMetadata(
    args: UpdateNetworkResourceMetadataCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<UpdateNetworkResourceMetadataCommandOutput>;
  updateNetworkResourceMetadata(
    args: UpdateNetworkResourceMetadataCommandInput,
    cb: (err: any, data?: UpdateNetworkResourceMetadataCommandOutput) => void
  ): void;
  updateNetworkResourceMetadata(
    args: UpdateNetworkResourceMetadataCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: UpdateNetworkResourceMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSiteCommand}
   */
  updateSite(
    args: UpdateSiteCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<UpdateSiteCommandOutput>;
  updateSite(
    args: UpdateSiteCommandInput,
    cb: (err: any, data?: UpdateSiteCommandOutput) => void
  ): void;
  updateSite(
    args: UpdateSiteCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: UpdateSiteCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateVpcAttachmentCommand}
   */
  updateVpcAttachment(
    args: UpdateVpcAttachmentCommandInput,
    options?: NetworkManagerRequestOptions
  ): Promise<UpdateVpcAttachmentCommandOutput>;
  updateVpcAttachment(
    args: UpdateVpcAttachmentCommandInput,
    cb: (err: any, data?: UpdateVpcAttachmentCommandOutput) => void
  ): void;
  updateVpcAttachment(
    args: UpdateVpcAttachmentCommandInput,
    options: NetworkManagerRequestOptions,
    cb: (err: any, data?: UpdateVpcAttachmentCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeGlobalNetworksCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeGlobalNetworksCommandOutput}.
   */
  paginateDescribeGlobalNetworks(
    args?: DescribeGlobalNetworksCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeGlobalNetworksCommandOutput>;

  /**
   * @see {@link GetConnectionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetConnectionsCommandOutput}.
   */
  paginateGetConnections(
    args: GetConnectionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetConnectionsCommandOutput>;

  /**
   * @see {@link GetConnectPeerAssociationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetConnectPeerAssociationsCommandOutput}.
   */
  paginateGetConnectPeerAssociations(
    args: GetConnectPeerAssociationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetConnectPeerAssociationsCommandOutput>;

  /**
   * @see {@link GetCoreNetworkChangeEventsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetCoreNetworkChangeEventsCommandOutput}.
   */
  paginateGetCoreNetworkChangeEvents(
    args: GetCoreNetworkChangeEventsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetCoreNetworkChangeEventsCommandOutput>;

  /**
   * @see {@link GetCoreNetworkChangeSetCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetCoreNetworkChangeSetCommandOutput}.
   */
  paginateGetCoreNetworkChangeSet(
    args: GetCoreNetworkChangeSetCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetCoreNetworkChangeSetCommandOutput>;

  /**
   * @see {@link GetCustomerGatewayAssociationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetCustomerGatewayAssociationsCommandOutput}.
   */
  paginateGetCustomerGatewayAssociations(
    args: GetCustomerGatewayAssociationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetCustomerGatewayAssociationsCommandOutput>;

  /**
   * @see {@link GetDevicesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetDevicesCommandOutput}.
   */
  paginateGetDevices(
    args: GetDevicesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetDevicesCommandOutput>;

  /**
   * @see {@link GetLinkAssociationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetLinkAssociationsCommandOutput}.
   */
  paginateGetLinkAssociations(
    args: GetLinkAssociationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetLinkAssociationsCommandOutput>;

  /**
   * @see {@link GetLinksCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetLinksCommandOutput}.
   */
  paginateGetLinks(
    args: GetLinksCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetLinksCommandOutput>;

  /**
   * @see {@link GetNetworkResourceCountsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetNetworkResourceCountsCommandOutput}.
   */
  paginateGetNetworkResourceCounts(
    args: GetNetworkResourceCountsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetNetworkResourceCountsCommandOutput>;

  /**
   * @see {@link GetNetworkResourceRelationshipsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetNetworkResourceRelationshipsCommandOutput}.
   */
  paginateGetNetworkResourceRelationships(
    args: GetNetworkResourceRelationshipsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetNetworkResourceRelationshipsCommandOutput>;

  /**
   * @see {@link GetNetworkResourcesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetNetworkResourcesCommandOutput}.
   */
  paginateGetNetworkResources(
    args: GetNetworkResourcesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetNetworkResourcesCommandOutput>;

  /**
   * @see {@link GetNetworkTelemetryCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetNetworkTelemetryCommandOutput}.
   */
  paginateGetNetworkTelemetry(
    args: GetNetworkTelemetryCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetNetworkTelemetryCommandOutput>;

  /**
   * @see {@link GetSitesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetSitesCommandOutput}.
   */
  paginateGetSites(
    args: GetSitesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetSitesCommandOutput>;

  /**
   * @see {@link GetTransitGatewayConnectPeerAssociationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetTransitGatewayConnectPeerAssociationsCommandOutput}.
   */
  paginateGetTransitGatewayConnectPeerAssociations(
    args: GetTransitGatewayConnectPeerAssociationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetTransitGatewayConnectPeerAssociationsCommandOutput>;

  /**
   * @see {@link GetTransitGatewayRegistrationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetTransitGatewayRegistrationsCommandOutput}.
   */
  paginateGetTransitGatewayRegistrations(
    args: GetTransitGatewayRegistrationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetTransitGatewayRegistrationsCommandOutput>;

  /**
   * @see {@link ListAttachmentRoutingPolicyAssociationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAttachmentRoutingPolicyAssociationsCommandOutput}.
   */
  paginateListAttachmentRoutingPolicyAssociations(
    args: ListAttachmentRoutingPolicyAssociationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAttachmentRoutingPolicyAssociationsCommandOutput>;

  /**
   * @see {@link ListAttachmentsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAttachmentsCommandOutput}.
   */
  paginateListAttachments(
    args?: ListAttachmentsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAttachmentsCommandOutput>;

  /**
   * @see {@link ListConnectPeersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListConnectPeersCommandOutput}.
   */
  paginateListConnectPeers(
    args?: ListConnectPeersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListConnectPeersCommandOutput>;

  /**
   * @see {@link ListCoreNetworkPolicyVersionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListCoreNetworkPolicyVersionsCommandOutput}.
   */
  paginateListCoreNetworkPolicyVersions(
    args: ListCoreNetworkPolicyVersionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListCoreNetworkPolicyVersionsCommandOutput>;

  /**
   * @see {@link ListCoreNetworkPrefixListAssociationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListCoreNetworkPrefixListAssociationsCommandOutput}.
   */
  paginateListCoreNetworkPrefixListAssociations(
    args: ListCoreNetworkPrefixListAssociationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListCoreNetworkPrefixListAssociationsCommandOutput>;

  /**
   * @see {@link ListCoreNetworkRoutingInformationCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListCoreNetworkRoutingInformationCommandOutput}.
   */
  paginateListCoreNetworkRoutingInformation(
    args: ListCoreNetworkRoutingInformationCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListCoreNetworkRoutingInformationCommandOutput>;

  /**
   * @see {@link ListCoreNetworksCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListCoreNetworksCommandOutput}.
   */
  paginateListCoreNetworks(
    args?: ListCoreNetworksCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListCoreNetworksCommandOutput>;

  /**
   * @see {@link ListPeeringsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPeeringsCommandOutput}.
   */
  paginateListPeerings(
    args?: ListPeeringsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPeeringsCommandOutput>;
}

/**
 * <p>Amazon Web Services enables you to centrally manage your Amazon Web Services Cloud WAN core network and your Transit Gateway network across Amazon Web Services accounts, Regions, and on-premises locations.</p>
 * @public
 */
export class NetworkManager extends NetworkManagerClient implements NetworkManager {}
createAggregatedClient(commands, NetworkManager, { paginators });
