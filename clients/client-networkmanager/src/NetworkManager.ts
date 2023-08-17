// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AcceptAttachmentCommand,
  AcceptAttachmentCommandInput,
  AcceptAttachmentCommandOutput,
} from "./commands/AcceptAttachmentCommand";
import {
  AssociateConnectPeerCommand,
  AssociateConnectPeerCommandInput,
  AssociateConnectPeerCommandOutput,
} from "./commands/AssociateConnectPeerCommand";
import {
  AssociateCustomerGatewayCommand,
  AssociateCustomerGatewayCommandInput,
  AssociateCustomerGatewayCommandOutput,
} from "./commands/AssociateCustomerGatewayCommand";
import {
  AssociateLinkCommand,
  AssociateLinkCommandInput,
  AssociateLinkCommandOutput,
} from "./commands/AssociateLinkCommand";
import {
  AssociateTransitGatewayConnectPeerCommand,
  AssociateTransitGatewayConnectPeerCommandInput,
  AssociateTransitGatewayConnectPeerCommandOutput,
} from "./commands/AssociateTransitGatewayConnectPeerCommand";
import {
  CreateConnectAttachmentCommand,
  CreateConnectAttachmentCommandInput,
  CreateConnectAttachmentCommandOutput,
} from "./commands/CreateConnectAttachmentCommand";
import {
  CreateConnectionCommand,
  CreateConnectionCommandInput,
  CreateConnectionCommandOutput,
} from "./commands/CreateConnectionCommand";
import {
  CreateConnectPeerCommand,
  CreateConnectPeerCommandInput,
  CreateConnectPeerCommandOutput,
} from "./commands/CreateConnectPeerCommand";
import {
  CreateCoreNetworkCommand,
  CreateCoreNetworkCommandInput,
  CreateCoreNetworkCommandOutput,
} from "./commands/CreateCoreNetworkCommand";
import {
  CreateDeviceCommand,
  CreateDeviceCommandInput,
  CreateDeviceCommandOutput,
} from "./commands/CreateDeviceCommand";
import {
  CreateGlobalNetworkCommand,
  CreateGlobalNetworkCommandInput,
  CreateGlobalNetworkCommandOutput,
} from "./commands/CreateGlobalNetworkCommand";
import { CreateLinkCommand, CreateLinkCommandInput, CreateLinkCommandOutput } from "./commands/CreateLinkCommand";
import { CreateSiteCommand, CreateSiteCommandInput, CreateSiteCommandOutput } from "./commands/CreateSiteCommand";
import {
  CreateSiteToSiteVpnAttachmentCommand,
  CreateSiteToSiteVpnAttachmentCommandInput,
  CreateSiteToSiteVpnAttachmentCommandOutput,
} from "./commands/CreateSiteToSiteVpnAttachmentCommand";
import {
  CreateTransitGatewayPeeringCommand,
  CreateTransitGatewayPeeringCommandInput,
  CreateTransitGatewayPeeringCommandOutput,
} from "./commands/CreateTransitGatewayPeeringCommand";
import {
  CreateTransitGatewayRouteTableAttachmentCommand,
  CreateTransitGatewayRouteTableAttachmentCommandInput,
  CreateTransitGatewayRouteTableAttachmentCommandOutput,
} from "./commands/CreateTransitGatewayRouteTableAttachmentCommand";
import {
  CreateVpcAttachmentCommand,
  CreateVpcAttachmentCommandInput,
  CreateVpcAttachmentCommandOutput,
} from "./commands/CreateVpcAttachmentCommand";
import {
  DeleteAttachmentCommand,
  DeleteAttachmentCommandInput,
  DeleteAttachmentCommandOutput,
} from "./commands/DeleteAttachmentCommand";
import {
  DeleteConnectionCommand,
  DeleteConnectionCommandInput,
  DeleteConnectionCommandOutput,
} from "./commands/DeleteConnectionCommand";
import {
  DeleteConnectPeerCommand,
  DeleteConnectPeerCommandInput,
  DeleteConnectPeerCommandOutput,
} from "./commands/DeleteConnectPeerCommand";
import {
  DeleteCoreNetworkCommand,
  DeleteCoreNetworkCommandInput,
  DeleteCoreNetworkCommandOutput,
} from "./commands/DeleteCoreNetworkCommand";
import {
  DeleteCoreNetworkPolicyVersionCommand,
  DeleteCoreNetworkPolicyVersionCommandInput,
  DeleteCoreNetworkPolicyVersionCommandOutput,
} from "./commands/DeleteCoreNetworkPolicyVersionCommand";
import {
  DeleteDeviceCommand,
  DeleteDeviceCommandInput,
  DeleteDeviceCommandOutput,
} from "./commands/DeleteDeviceCommand";
import {
  DeleteGlobalNetworkCommand,
  DeleteGlobalNetworkCommandInput,
  DeleteGlobalNetworkCommandOutput,
} from "./commands/DeleteGlobalNetworkCommand";
import { DeleteLinkCommand, DeleteLinkCommandInput, DeleteLinkCommandOutput } from "./commands/DeleteLinkCommand";
import {
  DeletePeeringCommand,
  DeletePeeringCommandInput,
  DeletePeeringCommandOutput,
} from "./commands/DeletePeeringCommand";
import {
  DeleteResourcePolicyCommand,
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "./commands/DeleteResourcePolicyCommand";
import { DeleteSiteCommand, DeleteSiteCommandInput, DeleteSiteCommandOutput } from "./commands/DeleteSiteCommand";
import {
  DeregisterTransitGatewayCommand,
  DeregisterTransitGatewayCommandInput,
  DeregisterTransitGatewayCommandOutput,
} from "./commands/DeregisterTransitGatewayCommand";
import {
  DescribeGlobalNetworksCommand,
  DescribeGlobalNetworksCommandInput,
  DescribeGlobalNetworksCommandOutput,
} from "./commands/DescribeGlobalNetworksCommand";
import {
  DisassociateConnectPeerCommand,
  DisassociateConnectPeerCommandInput,
  DisassociateConnectPeerCommandOutput,
} from "./commands/DisassociateConnectPeerCommand";
import {
  DisassociateCustomerGatewayCommand,
  DisassociateCustomerGatewayCommandInput,
  DisassociateCustomerGatewayCommandOutput,
} from "./commands/DisassociateCustomerGatewayCommand";
import {
  DisassociateLinkCommand,
  DisassociateLinkCommandInput,
  DisassociateLinkCommandOutput,
} from "./commands/DisassociateLinkCommand";
import {
  DisassociateTransitGatewayConnectPeerCommand,
  DisassociateTransitGatewayConnectPeerCommandInput,
  DisassociateTransitGatewayConnectPeerCommandOutput,
} from "./commands/DisassociateTransitGatewayConnectPeerCommand";
import {
  ExecuteCoreNetworkChangeSetCommand,
  ExecuteCoreNetworkChangeSetCommandInput,
  ExecuteCoreNetworkChangeSetCommandOutput,
} from "./commands/ExecuteCoreNetworkChangeSetCommand";
import {
  GetConnectAttachmentCommand,
  GetConnectAttachmentCommandInput,
  GetConnectAttachmentCommandOutput,
} from "./commands/GetConnectAttachmentCommand";
import {
  GetConnectionsCommand,
  GetConnectionsCommandInput,
  GetConnectionsCommandOutput,
} from "./commands/GetConnectionsCommand";
import {
  GetConnectPeerAssociationsCommand,
  GetConnectPeerAssociationsCommandInput,
  GetConnectPeerAssociationsCommandOutput,
} from "./commands/GetConnectPeerAssociationsCommand";
import {
  GetConnectPeerCommand,
  GetConnectPeerCommandInput,
  GetConnectPeerCommandOutput,
} from "./commands/GetConnectPeerCommand";
import {
  GetCoreNetworkChangeEventsCommand,
  GetCoreNetworkChangeEventsCommandInput,
  GetCoreNetworkChangeEventsCommandOutput,
} from "./commands/GetCoreNetworkChangeEventsCommand";
import {
  GetCoreNetworkChangeSetCommand,
  GetCoreNetworkChangeSetCommandInput,
  GetCoreNetworkChangeSetCommandOutput,
} from "./commands/GetCoreNetworkChangeSetCommand";
import {
  GetCoreNetworkCommand,
  GetCoreNetworkCommandInput,
  GetCoreNetworkCommandOutput,
} from "./commands/GetCoreNetworkCommand";
import {
  GetCoreNetworkPolicyCommand,
  GetCoreNetworkPolicyCommandInput,
  GetCoreNetworkPolicyCommandOutput,
} from "./commands/GetCoreNetworkPolicyCommand";
import {
  GetCustomerGatewayAssociationsCommand,
  GetCustomerGatewayAssociationsCommandInput,
  GetCustomerGatewayAssociationsCommandOutput,
} from "./commands/GetCustomerGatewayAssociationsCommand";
import { GetDevicesCommand, GetDevicesCommandInput, GetDevicesCommandOutput } from "./commands/GetDevicesCommand";
import {
  GetLinkAssociationsCommand,
  GetLinkAssociationsCommandInput,
  GetLinkAssociationsCommandOutput,
} from "./commands/GetLinkAssociationsCommand";
import { GetLinksCommand, GetLinksCommandInput, GetLinksCommandOutput } from "./commands/GetLinksCommand";
import {
  GetNetworkResourceCountsCommand,
  GetNetworkResourceCountsCommandInput,
  GetNetworkResourceCountsCommandOutput,
} from "./commands/GetNetworkResourceCountsCommand";
import {
  GetNetworkResourceRelationshipsCommand,
  GetNetworkResourceRelationshipsCommandInput,
  GetNetworkResourceRelationshipsCommandOutput,
} from "./commands/GetNetworkResourceRelationshipsCommand";
import {
  GetNetworkResourcesCommand,
  GetNetworkResourcesCommandInput,
  GetNetworkResourcesCommandOutput,
} from "./commands/GetNetworkResourcesCommand";
import {
  GetNetworkRoutesCommand,
  GetNetworkRoutesCommandInput,
  GetNetworkRoutesCommandOutput,
} from "./commands/GetNetworkRoutesCommand";
import {
  GetNetworkTelemetryCommand,
  GetNetworkTelemetryCommandInput,
  GetNetworkTelemetryCommandOutput,
} from "./commands/GetNetworkTelemetryCommand";
import {
  GetResourcePolicyCommand,
  GetResourcePolicyCommandInput,
  GetResourcePolicyCommandOutput,
} from "./commands/GetResourcePolicyCommand";
import {
  GetRouteAnalysisCommand,
  GetRouteAnalysisCommandInput,
  GetRouteAnalysisCommandOutput,
} from "./commands/GetRouteAnalysisCommand";
import { GetSitesCommand, GetSitesCommandInput, GetSitesCommandOutput } from "./commands/GetSitesCommand";
import {
  GetSiteToSiteVpnAttachmentCommand,
  GetSiteToSiteVpnAttachmentCommandInput,
  GetSiteToSiteVpnAttachmentCommandOutput,
} from "./commands/GetSiteToSiteVpnAttachmentCommand";
import {
  GetTransitGatewayConnectPeerAssociationsCommand,
  GetTransitGatewayConnectPeerAssociationsCommandInput,
  GetTransitGatewayConnectPeerAssociationsCommandOutput,
} from "./commands/GetTransitGatewayConnectPeerAssociationsCommand";
import {
  GetTransitGatewayPeeringCommand,
  GetTransitGatewayPeeringCommandInput,
  GetTransitGatewayPeeringCommandOutput,
} from "./commands/GetTransitGatewayPeeringCommand";
import {
  GetTransitGatewayRegistrationsCommand,
  GetTransitGatewayRegistrationsCommandInput,
  GetTransitGatewayRegistrationsCommandOutput,
} from "./commands/GetTransitGatewayRegistrationsCommand";
import {
  GetTransitGatewayRouteTableAttachmentCommand,
  GetTransitGatewayRouteTableAttachmentCommandInput,
  GetTransitGatewayRouteTableAttachmentCommandOutput,
} from "./commands/GetTransitGatewayRouteTableAttachmentCommand";
import {
  GetVpcAttachmentCommand,
  GetVpcAttachmentCommandInput,
  GetVpcAttachmentCommandOutput,
} from "./commands/GetVpcAttachmentCommand";
import {
  ListAttachmentsCommand,
  ListAttachmentsCommandInput,
  ListAttachmentsCommandOutput,
} from "./commands/ListAttachmentsCommand";
import {
  ListConnectPeersCommand,
  ListConnectPeersCommandInput,
  ListConnectPeersCommandOutput,
} from "./commands/ListConnectPeersCommand";
import {
  ListCoreNetworkPolicyVersionsCommand,
  ListCoreNetworkPolicyVersionsCommandInput,
  ListCoreNetworkPolicyVersionsCommandOutput,
} from "./commands/ListCoreNetworkPolicyVersionsCommand";
import {
  ListCoreNetworksCommand,
  ListCoreNetworksCommandInput,
  ListCoreNetworksCommandOutput,
} from "./commands/ListCoreNetworksCommand";
import {
  ListOrganizationServiceAccessStatusCommand,
  ListOrganizationServiceAccessStatusCommandInput,
  ListOrganizationServiceAccessStatusCommandOutput,
} from "./commands/ListOrganizationServiceAccessStatusCommand";
import {
  ListPeeringsCommand,
  ListPeeringsCommandInput,
  ListPeeringsCommandOutput,
} from "./commands/ListPeeringsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PutCoreNetworkPolicyCommand,
  PutCoreNetworkPolicyCommandInput,
  PutCoreNetworkPolicyCommandOutput,
} from "./commands/PutCoreNetworkPolicyCommand";
import {
  PutResourcePolicyCommand,
  PutResourcePolicyCommandInput,
  PutResourcePolicyCommandOutput,
} from "./commands/PutResourcePolicyCommand";
import {
  RegisterTransitGatewayCommand,
  RegisterTransitGatewayCommandInput,
  RegisterTransitGatewayCommandOutput,
} from "./commands/RegisterTransitGatewayCommand";
import {
  RejectAttachmentCommand,
  RejectAttachmentCommandInput,
  RejectAttachmentCommandOutput,
} from "./commands/RejectAttachmentCommand";
import {
  RestoreCoreNetworkPolicyVersionCommand,
  RestoreCoreNetworkPolicyVersionCommandInput,
  RestoreCoreNetworkPolicyVersionCommandOutput,
} from "./commands/RestoreCoreNetworkPolicyVersionCommand";
import {
  StartOrganizationServiceAccessUpdateCommand,
  StartOrganizationServiceAccessUpdateCommandInput,
  StartOrganizationServiceAccessUpdateCommandOutput,
} from "./commands/StartOrganizationServiceAccessUpdateCommand";
import {
  StartRouteAnalysisCommand,
  StartRouteAnalysisCommandInput,
  StartRouteAnalysisCommandOutput,
} from "./commands/StartRouteAnalysisCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateConnectionCommand,
  UpdateConnectionCommandInput,
  UpdateConnectionCommandOutput,
} from "./commands/UpdateConnectionCommand";
import {
  UpdateCoreNetworkCommand,
  UpdateCoreNetworkCommandInput,
  UpdateCoreNetworkCommandOutput,
} from "./commands/UpdateCoreNetworkCommand";
import {
  UpdateDeviceCommand,
  UpdateDeviceCommandInput,
  UpdateDeviceCommandOutput,
} from "./commands/UpdateDeviceCommand";
import {
  UpdateGlobalNetworkCommand,
  UpdateGlobalNetworkCommandInput,
  UpdateGlobalNetworkCommandOutput,
} from "./commands/UpdateGlobalNetworkCommand";
import { UpdateLinkCommand, UpdateLinkCommandInput, UpdateLinkCommandOutput } from "./commands/UpdateLinkCommand";
import {
  UpdateNetworkResourceMetadataCommand,
  UpdateNetworkResourceMetadataCommandInput,
  UpdateNetworkResourceMetadataCommandOutput,
} from "./commands/UpdateNetworkResourceMetadataCommand";
import { UpdateSiteCommand, UpdateSiteCommandInput, UpdateSiteCommandOutput } from "./commands/UpdateSiteCommand";
import {
  UpdateVpcAttachmentCommand,
  UpdateVpcAttachmentCommandInput,
  UpdateVpcAttachmentCommandOutput,
} from "./commands/UpdateVpcAttachmentCommand";
import { NetworkManagerClient, NetworkManagerClientConfig } from "./NetworkManagerClient";

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
  CreateDeviceCommand,
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
  ListAttachmentsCommand,
  ListConnectPeersCommand,
  ListCoreNetworkPolicyVersionsCommand,
  ListCoreNetworksCommand,
  ListOrganizationServiceAccessStatusCommand,
  ListPeeringsCommand,
  ListTagsForResourceCommand,
  PutCoreNetworkPolicyCommand,
  PutResourcePolicyCommand,
  RegisterTransitGatewayCommand,
  RejectAttachmentCommand,
  RestoreCoreNetworkPolicyVersionCommand,
  StartOrganizationServiceAccessUpdateCommand,
  StartRouteAnalysisCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateConnectionCommand,
  UpdateCoreNetworkCommand,
  UpdateDeviceCommand,
  UpdateGlobalNetworkCommand,
  UpdateLinkCommand,
  UpdateNetworkResourceMetadataCommand,
  UpdateSiteCommand,
  UpdateVpcAttachmentCommand,
};

export interface NetworkManager {
  /**
   * @see {@link AcceptAttachmentCommand}
   */
  acceptAttachment(
    args: AcceptAttachmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AcceptAttachmentCommandOutput>;
  acceptAttachment(
    args: AcceptAttachmentCommandInput,
    cb: (err: any, data?: AcceptAttachmentCommandOutput) => void
  ): void;
  acceptAttachment(
    args: AcceptAttachmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcceptAttachmentCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateConnectPeerCommand}
   */
  associateConnectPeer(
    args: AssociateConnectPeerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateConnectPeerCommandOutput>;
  associateConnectPeer(
    args: AssociateConnectPeerCommandInput,
    cb: (err: any, data?: AssociateConnectPeerCommandOutput) => void
  ): void;
  associateConnectPeer(
    args: AssociateConnectPeerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateConnectPeerCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateCustomerGatewayCommand}
   */
  associateCustomerGateway(
    args: AssociateCustomerGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateCustomerGatewayCommandOutput>;
  associateCustomerGateway(
    args: AssociateCustomerGatewayCommandInput,
    cb: (err: any, data?: AssociateCustomerGatewayCommandOutput) => void
  ): void;
  associateCustomerGateway(
    args: AssociateCustomerGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateCustomerGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateLinkCommand}
   */
  associateLink(args: AssociateLinkCommandInput, options?: __HttpHandlerOptions): Promise<AssociateLinkCommandOutput>;
  associateLink(args: AssociateLinkCommandInput, cb: (err: any, data?: AssociateLinkCommandOutput) => void): void;
  associateLink(
    args: AssociateLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateLinkCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateTransitGatewayConnectPeerCommand}
   */
  associateTransitGatewayConnectPeer(
    args: AssociateTransitGatewayConnectPeerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateTransitGatewayConnectPeerCommandOutput>;
  associateTransitGatewayConnectPeer(
    args: AssociateTransitGatewayConnectPeerCommandInput,
    cb: (err: any, data?: AssociateTransitGatewayConnectPeerCommandOutput) => void
  ): void;
  associateTransitGatewayConnectPeer(
    args: AssociateTransitGatewayConnectPeerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateTransitGatewayConnectPeerCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateConnectAttachmentCommand}
   */
  createConnectAttachment(
    args: CreateConnectAttachmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConnectAttachmentCommandOutput>;
  createConnectAttachment(
    args: CreateConnectAttachmentCommandInput,
    cb: (err: any, data?: CreateConnectAttachmentCommandOutput) => void
  ): void;
  createConnectAttachment(
    args: CreateConnectAttachmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConnectAttachmentCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateConnectionCommand}
   */
  createConnection(
    args: CreateConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConnectionCommandOutput>;
  createConnection(
    args: CreateConnectionCommandInput,
    cb: (err: any, data?: CreateConnectionCommandOutput) => void
  ): void;
  createConnection(
    args: CreateConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateConnectPeerCommand}
   */
  createConnectPeer(
    args: CreateConnectPeerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConnectPeerCommandOutput>;
  createConnectPeer(
    args: CreateConnectPeerCommandInput,
    cb: (err: any, data?: CreateConnectPeerCommandOutput) => void
  ): void;
  createConnectPeer(
    args: CreateConnectPeerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConnectPeerCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCoreNetworkCommand}
   */
  createCoreNetwork(
    args: CreateCoreNetworkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCoreNetworkCommandOutput>;
  createCoreNetwork(
    args: CreateCoreNetworkCommandInput,
    cb: (err: any, data?: CreateCoreNetworkCommandOutput) => void
  ): void;
  createCoreNetwork(
    args: CreateCoreNetworkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCoreNetworkCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDeviceCommand}
   */
  createDevice(args: CreateDeviceCommandInput, options?: __HttpHandlerOptions): Promise<CreateDeviceCommandOutput>;
  createDevice(args: CreateDeviceCommandInput, cb: (err: any, data?: CreateDeviceCommandOutput) => void): void;
  createDevice(
    args: CreateDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateGlobalNetworkCommand}
   */
  createGlobalNetwork(
    args: CreateGlobalNetworkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateGlobalNetworkCommandOutput>;
  createGlobalNetwork(
    args: CreateGlobalNetworkCommandInput,
    cb: (err: any, data?: CreateGlobalNetworkCommandOutput) => void
  ): void;
  createGlobalNetwork(
    args: CreateGlobalNetworkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGlobalNetworkCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLinkCommand}
   */
  createLink(args: CreateLinkCommandInput, options?: __HttpHandlerOptions): Promise<CreateLinkCommandOutput>;
  createLink(args: CreateLinkCommandInput, cb: (err: any, data?: CreateLinkCommandOutput) => void): void;
  createLink(
    args: CreateLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLinkCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSiteCommand}
   */
  createSite(args: CreateSiteCommandInput, options?: __HttpHandlerOptions): Promise<CreateSiteCommandOutput>;
  createSite(args: CreateSiteCommandInput, cb: (err: any, data?: CreateSiteCommandOutput) => void): void;
  createSite(
    args: CreateSiteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSiteCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSiteToSiteVpnAttachmentCommand}
   */
  createSiteToSiteVpnAttachment(
    args: CreateSiteToSiteVpnAttachmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSiteToSiteVpnAttachmentCommandOutput>;
  createSiteToSiteVpnAttachment(
    args: CreateSiteToSiteVpnAttachmentCommandInput,
    cb: (err: any, data?: CreateSiteToSiteVpnAttachmentCommandOutput) => void
  ): void;
  createSiteToSiteVpnAttachment(
    args: CreateSiteToSiteVpnAttachmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSiteToSiteVpnAttachmentCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTransitGatewayPeeringCommand}
   */
  createTransitGatewayPeering(
    args: CreateTransitGatewayPeeringCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTransitGatewayPeeringCommandOutput>;
  createTransitGatewayPeering(
    args: CreateTransitGatewayPeeringCommandInput,
    cb: (err: any, data?: CreateTransitGatewayPeeringCommandOutput) => void
  ): void;
  createTransitGatewayPeering(
    args: CreateTransitGatewayPeeringCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTransitGatewayPeeringCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTransitGatewayRouteTableAttachmentCommand}
   */
  createTransitGatewayRouteTableAttachment(
    args: CreateTransitGatewayRouteTableAttachmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTransitGatewayRouteTableAttachmentCommandOutput>;
  createTransitGatewayRouteTableAttachment(
    args: CreateTransitGatewayRouteTableAttachmentCommandInput,
    cb: (err: any, data?: CreateTransitGatewayRouteTableAttachmentCommandOutput) => void
  ): void;
  createTransitGatewayRouteTableAttachment(
    args: CreateTransitGatewayRouteTableAttachmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTransitGatewayRouteTableAttachmentCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateVpcAttachmentCommand}
   */
  createVpcAttachment(
    args: CreateVpcAttachmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVpcAttachmentCommandOutput>;
  createVpcAttachment(
    args: CreateVpcAttachmentCommandInput,
    cb: (err: any, data?: CreateVpcAttachmentCommandOutput) => void
  ): void;
  createVpcAttachment(
    args: CreateVpcAttachmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVpcAttachmentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAttachmentCommand}
   */
  deleteAttachment(
    args: DeleteAttachmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAttachmentCommandOutput>;
  deleteAttachment(
    args: DeleteAttachmentCommandInput,
    cb: (err: any, data?: DeleteAttachmentCommandOutput) => void
  ): void;
  deleteAttachment(
    args: DeleteAttachmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAttachmentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteConnectionCommand}
   */
  deleteConnection(
    args: DeleteConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConnectionCommandOutput>;
  deleteConnection(
    args: DeleteConnectionCommandInput,
    cb: (err: any, data?: DeleteConnectionCommandOutput) => void
  ): void;
  deleteConnection(
    args: DeleteConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteConnectPeerCommand}
   */
  deleteConnectPeer(
    args: DeleteConnectPeerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConnectPeerCommandOutput>;
  deleteConnectPeer(
    args: DeleteConnectPeerCommandInput,
    cb: (err: any, data?: DeleteConnectPeerCommandOutput) => void
  ): void;
  deleteConnectPeer(
    args: DeleteConnectPeerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConnectPeerCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCoreNetworkCommand}
   */
  deleteCoreNetwork(
    args: DeleteCoreNetworkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCoreNetworkCommandOutput>;
  deleteCoreNetwork(
    args: DeleteCoreNetworkCommandInput,
    cb: (err: any, data?: DeleteCoreNetworkCommandOutput) => void
  ): void;
  deleteCoreNetwork(
    args: DeleteCoreNetworkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCoreNetworkCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCoreNetworkPolicyVersionCommand}
   */
  deleteCoreNetworkPolicyVersion(
    args: DeleteCoreNetworkPolicyVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCoreNetworkPolicyVersionCommandOutput>;
  deleteCoreNetworkPolicyVersion(
    args: DeleteCoreNetworkPolicyVersionCommandInput,
    cb: (err: any, data?: DeleteCoreNetworkPolicyVersionCommandOutput) => void
  ): void;
  deleteCoreNetworkPolicyVersion(
    args: DeleteCoreNetworkPolicyVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCoreNetworkPolicyVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDeviceCommand}
   */
  deleteDevice(args: DeleteDeviceCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDeviceCommandOutput>;
  deleteDevice(args: DeleteDeviceCommandInput, cb: (err: any, data?: DeleteDeviceCommandOutput) => void): void;
  deleteDevice(
    args: DeleteDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteGlobalNetworkCommand}
   */
  deleteGlobalNetwork(
    args: DeleteGlobalNetworkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteGlobalNetworkCommandOutput>;
  deleteGlobalNetwork(
    args: DeleteGlobalNetworkCommandInput,
    cb: (err: any, data?: DeleteGlobalNetworkCommandOutput) => void
  ): void;
  deleteGlobalNetwork(
    args: DeleteGlobalNetworkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGlobalNetworkCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLinkCommand}
   */
  deleteLink(args: DeleteLinkCommandInput, options?: __HttpHandlerOptions): Promise<DeleteLinkCommandOutput>;
  deleteLink(args: DeleteLinkCommandInput, cb: (err: any, data?: DeleteLinkCommandOutput) => void): void;
  deleteLink(
    args: DeleteLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLinkCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePeeringCommand}
   */
  deletePeering(args: DeletePeeringCommandInput, options?: __HttpHandlerOptions): Promise<DeletePeeringCommandOutput>;
  deletePeering(args: DeletePeeringCommandInput, cb: (err: any, data?: DeletePeeringCommandOutput) => void): void;
  deletePeering(
    args: DeletePeeringCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePeeringCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResourcePolicyCommand}
   */
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResourcePolicyCommandOutput>;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSiteCommand}
   */
  deleteSite(args: DeleteSiteCommandInput, options?: __HttpHandlerOptions): Promise<DeleteSiteCommandOutput>;
  deleteSite(args: DeleteSiteCommandInput, cb: (err: any, data?: DeleteSiteCommandOutput) => void): void;
  deleteSite(
    args: DeleteSiteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSiteCommandOutput) => void
  ): void;

  /**
   * @see {@link DeregisterTransitGatewayCommand}
   */
  deregisterTransitGateway(
    args: DeregisterTransitGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterTransitGatewayCommandOutput>;
  deregisterTransitGateway(
    args: DeregisterTransitGatewayCommandInput,
    cb: (err: any, data?: DeregisterTransitGatewayCommandOutput) => void
  ): void;
  deregisterTransitGateway(
    args: DeregisterTransitGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterTransitGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeGlobalNetworksCommand}
   */
  describeGlobalNetworks(
    args: DescribeGlobalNetworksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeGlobalNetworksCommandOutput>;
  describeGlobalNetworks(
    args: DescribeGlobalNetworksCommandInput,
    cb: (err: any, data?: DescribeGlobalNetworksCommandOutput) => void
  ): void;
  describeGlobalNetworks(
    args: DescribeGlobalNetworksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeGlobalNetworksCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateConnectPeerCommand}
   */
  disassociateConnectPeer(
    args: DisassociateConnectPeerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateConnectPeerCommandOutput>;
  disassociateConnectPeer(
    args: DisassociateConnectPeerCommandInput,
    cb: (err: any, data?: DisassociateConnectPeerCommandOutput) => void
  ): void;
  disassociateConnectPeer(
    args: DisassociateConnectPeerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateConnectPeerCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateCustomerGatewayCommand}
   */
  disassociateCustomerGateway(
    args: DisassociateCustomerGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateCustomerGatewayCommandOutput>;
  disassociateCustomerGateway(
    args: DisassociateCustomerGatewayCommandInput,
    cb: (err: any, data?: DisassociateCustomerGatewayCommandOutput) => void
  ): void;
  disassociateCustomerGateway(
    args: DisassociateCustomerGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateCustomerGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateLinkCommand}
   */
  disassociateLink(
    args: DisassociateLinkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateLinkCommandOutput>;
  disassociateLink(
    args: DisassociateLinkCommandInput,
    cb: (err: any, data?: DisassociateLinkCommandOutput) => void
  ): void;
  disassociateLink(
    args: DisassociateLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateLinkCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateTransitGatewayConnectPeerCommand}
   */
  disassociateTransitGatewayConnectPeer(
    args: DisassociateTransitGatewayConnectPeerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateTransitGatewayConnectPeerCommandOutput>;
  disassociateTransitGatewayConnectPeer(
    args: DisassociateTransitGatewayConnectPeerCommandInput,
    cb: (err: any, data?: DisassociateTransitGatewayConnectPeerCommandOutput) => void
  ): void;
  disassociateTransitGatewayConnectPeer(
    args: DisassociateTransitGatewayConnectPeerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateTransitGatewayConnectPeerCommandOutput) => void
  ): void;

  /**
   * @see {@link ExecuteCoreNetworkChangeSetCommand}
   */
  executeCoreNetworkChangeSet(
    args: ExecuteCoreNetworkChangeSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExecuteCoreNetworkChangeSetCommandOutput>;
  executeCoreNetworkChangeSet(
    args: ExecuteCoreNetworkChangeSetCommandInput,
    cb: (err: any, data?: ExecuteCoreNetworkChangeSetCommandOutput) => void
  ): void;
  executeCoreNetworkChangeSet(
    args: ExecuteCoreNetworkChangeSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExecuteCoreNetworkChangeSetCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConnectAttachmentCommand}
   */
  getConnectAttachment(
    args: GetConnectAttachmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConnectAttachmentCommandOutput>;
  getConnectAttachment(
    args: GetConnectAttachmentCommandInput,
    cb: (err: any, data?: GetConnectAttachmentCommandOutput) => void
  ): void;
  getConnectAttachment(
    args: GetConnectAttachmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConnectAttachmentCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConnectionsCommand}
   */
  getConnections(
    args: GetConnectionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConnectionsCommandOutput>;
  getConnections(args: GetConnectionsCommandInput, cb: (err: any, data?: GetConnectionsCommandOutput) => void): void;
  getConnections(
    args: GetConnectionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConnectionsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConnectPeerCommand}
   */
  getConnectPeer(
    args: GetConnectPeerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConnectPeerCommandOutput>;
  getConnectPeer(args: GetConnectPeerCommandInput, cb: (err: any, data?: GetConnectPeerCommandOutput) => void): void;
  getConnectPeer(
    args: GetConnectPeerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConnectPeerCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConnectPeerAssociationsCommand}
   */
  getConnectPeerAssociations(
    args: GetConnectPeerAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConnectPeerAssociationsCommandOutput>;
  getConnectPeerAssociations(
    args: GetConnectPeerAssociationsCommandInput,
    cb: (err: any, data?: GetConnectPeerAssociationsCommandOutput) => void
  ): void;
  getConnectPeerAssociations(
    args: GetConnectPeerAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConnectPeerAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCoreNetworkCommand}
   */
  getCoreNetwork(
    args: GetCoreNetworkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCoreNetworkCommandOutput>;
  getCoreNetwork(args: GetCoreNetworkCommandInput, cb: (err: any, data?: GetCoreNetworkCommandOutput) => void): void;
  getCoreNetwork(
    args: GetCoreNetworkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCoreNetworkCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCoreNetworkChangeEventsCommand}
   */
  getCoreNetworkChangeEvents(
    args: GetCoreNetworkChangeEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCoreNetworkChangeEventsCommandOutput>;
  getCoreNetworkChangeEvents(
    args: GetCoreNetworkChangeEventsCommandInput,
    cb: (err: any, data?: GetCoreNetworkChangeEventsCommandOutput) => void
  ): void;
  getCoreNetworkChangeEvents(
    args: GetCoreNetworkChangeEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCoreNetworkChangeEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCoreNetworkChangeSetCommand}
   */
  getCoreNetworkChangeSet(
    args: GetCoreNetworkChangeSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCoreNetworkChangeSetCommandOutput>;
  getCoreNetworkChangeSet(
    args: GetCoreNetworkChangeSetCommandInput,
    cb: (err: any, data?: GetCoreNetworkChangeSetCommandOutput) => void
  ): void;
  getCoreNetworkChangeSet(
    args: GetCoreNetworkChangeSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCoreNetworkChangeSetCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCoreNetworkPolicyCommand}
   */
  getCoreNetworkPolicy(
    args: GetCoreNetworkPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCoreNetworkPolicyCommandOutput>;
  getCoreNetworkPolicy(
    args: GetCoreNetworkPolicyCommandInput,
    cb: (err: any, data?: GetCoreNetworkPolicyCommandOutput) => void
  ): void;
  getCoreNetworkPolicy(
    args: GetCoreNetworkPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCoreNetworkPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCustomerGatewayAssociationsCommand}
   */
  getCustomerGatewayAssociations(
    args: GetCustomerGatewayAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCustomerGatewayAssociationsCommandOutput>;
  getCustomerGatewayAssociations(
    args: GetCustomerGatewayAssociationsCommandInput,
    cb: (err: any, data?: GetCustomerGatewayAssociationsCommandOutput) => void
  ): void;
  getCustomerGatewayAssociations(
    args: GetCustomerGatewayAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCustomerGatewayAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDevicesCommand}
   */
  getDevices(args: GetDevicesCommandInput, options?: __HttpHandlerOptions): Promise<GetDevicesCommandOutput>;
  getDevices(args: GetDevicesCommandInput, cb: (err: any, data?: GetDevicesCommandOutput) => void): void;
  getDevices(
    args: GetDevicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDevicesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLinkAssociationsCommand}
   */
  getLinkAssociations(
    args: GetLinkAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLinkAssociationsCommandOutput>;
  getLinkAssociations(
    args: GetLinkAssociationsCommandInput,
    cb: (err: any, data?: GetLinkAssociationsCommandOutput) => void
  ): void;
  getLinkAssociations(
    args: GetLinkAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLinkAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLinksCommand}
   */
  getLinks(args: GetLinksCommandInput, options?: __HttpHandlerOptions): Promise<GetLinksCommandOutput>;
  getLinks(args: GetLinksCommandInput, cb: (err: any, data?: GetLinksCommandOutput) => void): void;
  getLinks(
    args: GetLinksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLinksCommandOutput) => void
  ): void;

  /**
   * @see {@link GetNetworkResourceCountsCommand}
   */
  getNetworkResourceCounts(
    args: GetNetworkResourceCountsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetNetworkResourceCountsCommandOutput>;
  getNetworkResourceCounts(
    args: GetNetworkResourceCountsCommandInput,
    cb: (err: any, data?: GetNetworkResourceCountsCommandOutput) => void
  ): void;
  getNetworkResourceCounts(
    args: GetNetworkResourceCountsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetNetworkResourceCountsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetNetworkResourceRelationshipsCommand}
   */
  getNetworkResourceRelationships(
    args: GetNetworkResourceRelationshipsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetNetworkResourceRelationshipsCommandOutput>;
  getNetworkResourceRelationships(
    args: GetNetworkResourceRelationshipsCommandInput,
    cb: (err: any, data?: GetNetworkResourceRelationshipsCommandOutput) => void
  ): void;
  getNetworkResourceRelationships(
    args: GetNetworkResourceRelationshipsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetNetworkResourceRelationshipsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetNetworkResourcesCommand}
   */
  getNetworkResources(
    args: GetNetworkResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetNetworkResourcesCommandOutput>;
  getNetworkResources(
    args: GetNetworkResourcesCommandInput,
    cb: (err: any, data?: GetNetworkResourcesCommandOutput) => void
  ): void;
  getNetworkResources(
    args: GetNetworkResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetNetworkResourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetNetworkRoutesCommand}
   */
  getNetworkRoutes(
    args: GetNetworkRoutesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetNetworkRoutesCommandOutput>;
  getNetworkRoutes(
    args: GetNetworkRoutesCommandInput,
    cb: (err: any, data?: GetNetworkRoutesCommandOutput) => void
  ): void;
  getNetworkRoutes(
    args: GetNetworkRoutesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetNetworkRoutesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetNetworkTelemetryCommand}
   */
  getNetworkTelemetry(
    args: GetNetworkTelemetryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetNetworkTelemetryCommandOutput>;
  getNetworkTelemetry(
    args: GetNetworkTelemetryCommandInput,
    cb: (err: any, data?: GetNetworkTelemetryCommandOutput) => void
  ): void;
  getNetworkTelemetry(
    args: GetNetworkTelemetryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetNetworkTelemetryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourcePolicyCommand}
   */
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourcePolicyCommandOutput>;
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRouteAnalysisCommand}
   */
  getRouteAnalysis(
    args: GetRouteAnalysisCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRouteAnalysisCommandOutput>;
  getRouteAnalysis(
    args: GetRouteAnalysisCommandInput,
    cb: (err: any, data?: GetRouteAnalysisCommandOutput) => void
  ): void;
  getRouteAnalysis(
    args: GetRouteAnalysisCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRouteAnalysisCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSitesCommand}
   */
  getSites(args: GetSitesCommandInput, options?: __HttpHandlerOptions): Promise<GetSitesCommandOutput>;
  getSites(args: GetSitesCommandInput, cb: (err: any, data?: GetSitesCommandOutput) => void): void;
  getSites(
    args: GetSitesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSitesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSiteToSiteVpnAttachmentCommand}
   */
  getSiteToSiteVpnAttachment(
    args: GetSiteToSiteVpnAttachmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSiteToSiteVpnAttachmentCommandOutput>;
  getSiteToSiteVpnAttachment(
    args: GetSiteToSiteVpnAttachmentCommandInput,
    cb: (err: any, data?: GetSiteToSiteVpnAttachmentCommandOutput) => void
  ): void;
  getSiteToSiteVpnAttachment(
    args: GetSiteToSiteVpnAttachmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSiteToSiteVpnAttachmentCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTransitGatewayConnectPeerAssociationsCommand}
   */
  getTransitGatewayConnectPeerAssociations(
    args: GetTransitGatewayConnectPeerAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTransitGatewayConnectPeerAssociationsCommandOutput>;
  getTransitGatewayConnectPeerAssociations(
    args: GetTransitGatewayConnectPeerAssociationsCommandInput,
    cb: (err: any, data?: GetTransitGatewayConnectPeerAssociationsCommandOutput) => void
  ): void;
  getTransitGatewayConnectPeerAssociations(
    args: GetTransitGatewayConnectPeerAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTransitGatewayConnectPeerAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTransitGatewayPeeringCommand}
   */
  getTransitGatewayPeering(
    args: GetTransitGatewayPeeringCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTransitGatewayPeeringCommandOutput>;
  getTransitGatewayPeering(
    args: GetTransitGatewayPeeringCommandInput,
    cb: (err: any, data?: GetTransitGatewayPeeringCommandOutput) => void
  ): void;
  getTransitGatewayPeering(
    args: GetTransitGatewayPeeringCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTransitGatewayPeeringCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTransitGatewayRegistrationsCommand}
   */
  getTransitGatewayRegistrations(
    args: GetTransitGatewayRegistrationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTransitGatewayRegistrationsCommandOutput>;
  getTransitGatewayRegistrations(
    args: GetTransitGatewayRegistrationsCommandInput,
    cb: (err: any, data?: GetTransitGatewayRegistrationsCommandOutput) => void
  ): void;
  getTransitGatewayRegistrations(
    args: GetTransitGatewayRegistrationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTransitGatewayRegistrationsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTransitGatewayRouteTableAttachmentCommand}
   */
  getTransitGatewayRouteTableAttachment(
    args: GetTransitGatewayRouteTableAttachmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTransitGatewayRouteTableAttachmentCommandOutput>;
  getTransitGatewayRouteTableAttachment(
    args: GetTransitGatewayRouteTableAttachmentCommandInput,
    cb: (err: any, data?: GetTransitGatewayRouteTableAttachmentCommandOutput) => void
  ): void;
  getTransitGatewayRouteTableAttachment(
    args: GetTransitGatewayRouteTableAttachmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTransitGatewayRouteTableAttachmentCommandOutput) => void
  ): void;

  /**
   * @see {@link GetVpcAttachmentCommand}
   */
  getVpcAttachment(
    args: GetVpcAttachmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVpcAttachmentCommandOutput>;
  getVpcAttachment(
    args: GetVpcAttachmentCommandInput,
    cb: (err: any, data?: GetVpcAttachmentCommandOutput) => void
  ): void;
  getVpcAttachment(
    args: GetVpcAttachmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVpcAttachmentCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAttachmentsCommand}
   */
  listAttachments(
    args: ListAttachmentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAttachmentsCommandOutput>;
  listAttachments(args: ListAttachmentsCommandInput, cb: (err: any, data?: ListAttachmentsCommandOutput) => void): void;
  listAttachments(
    args: ListAttachmentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAttachmentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListConnectPeersCommand}
   */
  listConnectPeers(
    args: ListConnectPeersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConnectPeersCommandOutput>;
  listConnectPeers(
    args: ListConnectPeersCommandInput,
    cb: (err: any, data?: ListConnectPeersCommandOutput) => void
  ): void;
  listConnectPeers(
    args: ListConnectPeersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConnectPeersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCoreNetworkPolicyVersionsCommand}
   */
  listCoreNetworkPolicyVersions(
    args: ListCoreNetworkPolicyVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCoreNetworkPolicyVersionsCommandOutput>;
  listCoreNetworkPolicyVersions(
    args: ListCoreNetworkPolicyVersionsCommandInput,
    cb: (err: any, data?: ListCoreNetworkPolicyVersionsCommandOutput) => void
  ): void;
  listCoreNetworkPolicyVersions(
    args: ListCoreNetworkPolicyVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCoreNetworkPolicyVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCoreNetworksCommand}
   */
  listCoreNetworks(
    args: ListCoreNetworksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCoreNetworksCommandOutput>;
  listCoreNetworks(
    args: ListCoreNetworksCommandInput,
    cb: (err: any, data?: ListCoreNetworksCommandOutput) => void
  ): void;
  listCoreNetworks(
    args: ListCoreNetworksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCoreNetworksCommandOutput) => void
  ): void;

  /**
   * @see {@link ListOrganizationServiceAccessStatusCommand}
   */
  listOrganizationServiceAccessStatus(
    args: ListOrganizationServiceAccessStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOrganizationServiceAccessStatusCommandOutput>;
  listOrganizationServiceAccessStatus(
    args: ListOrganizationServiceAccessStatusCommandInput,
    cb: (err: any, data?: ListOrganizationServiceAccessStatusCommandOutput) => void
  ): void;
  listOrganizationServiceAccessStatus(
    args: ListOrganizationServiceAccessStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOrganizationServiceAccessStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPeeringsCommand}
   */
  listPeerings(args: ListPeeringsCommandInput, options?: __HttpHandlerOptions): Promise<ListPeeringsCommandOutput>;
  listPeerings(args: ListPeeringsCommandInput, cb: (err: any, data?: ListPeeringsCommandOutput) => void): void;
  listPeerings(
    args: ListPeeringsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPeeringsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link PutCoreNetworkPolicyCommand}
   */
  putCoreNetworkPolicy(
    args: PutCoreNetworkPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutCoreNetworkPolicyCommandOutput>;
  putCoreNetworkPolicy(
    args: PutCoreNetworkPolicyCommandInput,
    cb: (err: any, data?: PutCoreNetworkPolicyCommandOutput) => void
  ): void;
  putCoreNetworkPolicy(
    args: PutCoreNetworkPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutCoreNetworkPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link PutResourcePolicyCommand}
   */
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutResourcePolicyCommandOutput>;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterTransitGatewayCommand}
   */
  registerTransitGateway(
    args: RegisterTransitGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterTransitGatewayCommandOutput>;
  registerTransitGateway(
    args: RegisterTransitGatewayCommandInput,
    cb: (err: any, data?: RegisterTransitGatewayCommandOutput) => void
  ): void;
  registerTransitGateway(
    args: RegisterTransitGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterTransitGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link RejectAttachmentCommand}
   */
  rejectAttachment(
    args: RejectAttachmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RejectAttachmentCommandOutput>;
  rejectAttachment(
    args: RejectAttachmentCommandInput,
    cb: (err: any, data?: RejectAttachmentCommandOutput) => void
  ): void;
  rejectAttachment(
    args: RejectAttachmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RejectAttachmentCommandOutput) => void
  ): void;

  /**
   * @see {@link RestoreCoreNetworkPolicyVersionCommand}
   */
  restoreCoreNetworkPolicyVersion(
    args: RestoreCoreNetworkPolicyVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RestoreCoreNetworkPolicyVersionCommandOutput>;
  restoreCoreNetworkPolicyVersion(
    args: RestoreCoreNetworkPolicyVersionCommandInput,
    cb: (err: any, data?: RestoreCoreNetworkPolicyVersionCommandOutput) => void
  ): void;
  restoreCoreNetworkPolicyVersion(
    args: RestoreCoreNetworkPolicyVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestoreCoreNetworkPolicyVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link StartOrganizationServiceAccessUpdateCommand}
   */
  startOrganizationServiceAccessUpdate(
    args: StartOrganizationServiceAccessUpdateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartOrganizationServiceAccessUpdateCommandOutput>;
  startOrganizationServiceAccessUpdate(
    args: StartOrganizationServiceAccessUpdateCommandInput,
    cb: (err: any, data?: StartOrganizationServiceAccessUpdateCommandOutput) => void
  ): void;
  startOrganizationServiceAccessUpdate(
    args: StartOrganizationServiceAccessUpdateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartOrganizationServiceAccessUpdateCommandOutput) => void
  ): void;

  /**
   * @see {@link StartRouteAnalysisCommand}
   */
  startRouteAnalysis(
    args: StartRouteAnalysisCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartRouteAnalysisCommandOutput>;
  startRouteAnalysis(
    args: StartRouteAnalysisCommandInput,
    cb: (err: any, data?: StartRouteAnalysisCommandOutput) => void
  ): void;
  startRouteAnalysis(
    args: StartRouteAnalysisCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartRouteAnalysisCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateConnectionCommand}
   */
  updateConnection(
    args: UpdateConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConnectionCommandOutput>;
  updateConnection(
    args: UpdateConnectionCommandInput,
    cb: (err: any, data?: UpdateConnectionCommandOutput) => void
  ): void;
  updateConnection(
    args: UpdateConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateCoreNetworkCommand}
   */
  updateCoreNetwork(
    args: UpdateCoreNetworkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCoreNetworkCommandOutput>;
  updateCoreNetwork(
    args: UpdateCoreNetworkCommandInput,
    cb: (err: any, data?: UpdateCoreNetworkCommandOutput) => void
  ): void;
  updateCoreNetwork(
    args: UpdateCoreNetworkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCoreNetworkCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDeviceCommand}
   */
  updateDevice(args: UpdateDeviceCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDeviceCommandOutput>;
  updateDevice(args: UpdateDeviceCommandInput, cb: (err: any, data?: UpdateDeviceCommandOutput) => void): void;
  updateDevice(
    args: UpdateDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateGlobalNetworkCommand}
   */
  updateGlobalNetwork(
    args: UpdateGlobalNetworkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateGlobalNetworkCommandOutput>;
  updateGlobalNetwork(
    args: UpdateGlobalNetworkCommandInput,
    cb: (err: any, data?: UpdateGlobalNetworkCommandOutput) => void
  ): void;
  updateGlobalNetwork(
    args: UpdateGlobalNetworkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGlobalNetworkCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateLinkCommand}
   */
  updateLink(args: UpdateLinkCommandInput, options?: __HttpHandlerOptions): Promise<UpdateLinkCommandOutput>;
  updateLink(args: UpdateLinkCommandInput, cb: (err: any, data?: UpdateLinkCommandOutput) => void): void;
  updateLink(
    args: UpdateLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLinkCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateNetworkResourceMetadataCommand}
   */
  updateNetworkResourceMetadata(
    args: UpdateNetworkResourceMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateNetworkResourceMetadataCommandOutput>;
  updateNetworkResourceMetadata(
    args: UpdateNetworkResourceMetadataCommandInput,
    cb: (err: any, data?: UpdateNetworkResourceMetadataCommandOutput) => void
  ): void;
  updateNetworkResourceMetadata(
    args: UpdateNetworkResourceMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateNetworkResourceMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSiteCommand}
   */
  updateSite(args: UpdateSiteCommandInput, options?: __HttpHandlerOptions): Promise<UpdateSiteCommandOutput>;
  updateSite(args: UpdateSiteCommandInput, cb: (err: any, data?: UpdateSiteCommandOutput) => void): void;
  updateSite(
    args: UpdateSiteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSiteCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateVpcAttachmentCommand}
   */
  updateVpcAttachment(
    args: UpdateVpcAttachmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateVpcAttachmentCommandOutput>;
  updateVpcAttachment(
    args: UpdateVpcAttachmentCommandInput,
    cb: (err: any, data?: UpdateVpcAttachmentCommandOutput) => void
  ): void;
  updateVpcAttachment(
    args: UpdateVpcAttachmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateVpcAttachmentCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>Amazon Web Services enables you to centrally manage your Amazon Web Services Cloud WAN core network and your Transit Gateway network across Amazon Web Services accounts, Regions, and on-premises locations.</p>
 */
export class NetworkManager extends NetworkManagerClient implements NetworkManager {}
createAggregatedClient(commands, NetworkManager);
