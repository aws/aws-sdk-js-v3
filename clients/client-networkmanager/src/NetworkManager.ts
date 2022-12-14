// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

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
import { NetworkManagerClient } from "./NetworkManagerClient";

/**
 * <p>Amazon Web Services enables you to centrally manage your Amazon Web Services Cloud WAN core network and your Transit Gateway network across Amazon Web Services accounts, Regions, and on-premises locations.</p>
 */
export class NetworkManager extends NetworkManagerClient {
  /**
   * <p>Accepts a core network attachment request. </p>
   *          <p>Once the attachment request is accepted by a core network owner, the attachment is
   *          created and connected to a core network.</p>
   */
  public acceptAttachment(
    args: AcceptAttachmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AcceptAttachmentCommandOutput>;
  public acceptAttachment(
    args: AcceptAttachmentCommandInput,
    cb: (err: any, data?: AcceptAttachmentCommandOutput) => void
  ): void;
  public acceptAttachment(
    args: AcceptAttachmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcceptAttachmentCommandOutput) => void
  ): void;
  public acceptAttachment(
    args: AcceptAttachmentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AcceptAttachmentCommandOutput) => void),
    cb?: (err: any, data?: AcceptAttachmentCommandOutput) => void
  ): Promise<AcceptAttachmentCommandOutput> | void {
    const command = new AcceptAttachmentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Associates a core network Connect peer with a device and optionally, with a link. </p>
   *          <p>If you specify a link, it must be associated with the specified device. You can only
   *          associate core network Connect peers that have been created on a core network Connect
   *          attachment on a core network. </p>
   */
  public associateConnectPeer(
    args: AssociateConnectPeerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateConnectPeerCommandOutput>;
  public associateConnectPeer(
    args: AssociateConnectPeerCommandInput,
    cb: (err: any, data?: AssociateConnectPeerCommandOutput) => void
  ): void;
  public associateConnectPeer(
    args: AssociateConnectPeerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateConnectPeerCommandOutput) => void
  ): void;
  public associateConnectPeer(
    args: AssociateConnectPeerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateConnectPeerCommandOutput) => void),
    cb?: (err: any, data?: AssociateConnectPeerCommandOutput) => void
  ): Promise<AssociateConnectPeerCommandOutput> | void {
    const command = new AssociateConnectPeerCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Associates a customer gateway with a device and optionally, with a link. If you
   *             specify a link, it must be associated with the specified device. </p>
   *         <p>You can only associate customer gateways that are connected to a VPN attachment on a
   *             transit gateway or core network registered in your global network. When you register a
   *             transit gateway or core network, customer gateways that are connected to the transit
   *             gateway are automatically included in the global network. To list customer gateways
   *             that are connected to a transit gateway, use the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVpnConnections.html">DescribeVpnConnections</a> EC2 API and filter by
   *                 <code>transit-gateway-id</code>.</p>
   *         <p>You cannot associate a customer gateway with more than one device and link. </p>
   */
  public associateCustomerGateway(
    args: AssociateCustomerGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateCustomerGatewayCommandOutput>;
  public associateCustomerGateway(
    args: AssociateCustomerGatewayCommandInput,
    cb: (err: any, data?: AssociateCustomerGatewayCommandOutput) => void
  ): void;
  public associateCustomerGateway(
    args: AssociateCustomerGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateCustomerGatewayCommandOutput) => void
  ): void;
  public associateCustomerGateway(
    args: AssociateCustomerGatewayCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateCustomerGatewayCommandOutput) => void),
    cb?: (err: any, data?: AssociateCustomerGatewayCommandOutput) => void
  ): Promise<AssociateCustomerGatewayCommandOutput> | void {
    const command = new AssociateCustomerGatewayCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Associates a link to a device. A device can be associated to multiple links and a link can be associated to multiple devices. The device and link must be in the same global network and the same site.</p>
   */
  public associateLink(
    args: AssociateLinkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateLinkCommandOutput>;
  public associateLink(
    args: AssociateLinkCommandInput,
    cb: (err: any, data?: AssociateLinkCommandOutput) => void
  ): void;
  public associateLink(
    args: AssociateLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateLinkCommandOutput) => void
  ): void;
  public associateLink(
    args: AssociateLinkCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateLinkCommandOutput) => void),
    cb?: (err: any, data?: AssociateLinkCommandOutput) => void
  ): Promise<AssociateLinkCommandOutput> | void {
    const command = new AssociateLinkCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Associates a transit gateway Connect peer with a device, and optionally, with a link. If you
   *             specify a link, it must be associated with the specified device. </p>
   *         <p>You can only associate transit gateway Connect peers that have been created on a
   *             transit gateway that's registered in your global network.</p>
   *         <p>You cannot associate a transit gateway Connect peer with more than one device and link. </p>
   */
  public associateTransitGatewayConnectPeer(
    args: AssociateTransitGatewayConnectPeerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateTransitGatewayConnectPeerCommandOutput>;
  public associateTransitGatewayConnectPeer(
    args: AssociateTransitGatewayConnectPeerCommandInput,
    cb: (err: any, data?: AssociateTransitGatewayConnectPeerCommandOutput) => void
  ): void;
  public associateTransitGatewayConnectPeer(
    args: AssociateTransitGatewayConnectPeerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateTransitGatewayConnectPeerCommandOutput) => void
  ): void;
  public associateTransitGatewayConnectPeer(
    args: AssociateTransitGatewayConnectPeerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateTransitGatewayConnectPeerCommandOutput) => void),
    cb?: (err: any, data?: AssociateTransitGatewayConnectPeerCommandOutput) => void
  ): Promise<AssociateTransitGatewayConnectPeerCommandOutput> | void {
    const command = new AssociateTransitGatewayConnectPeerCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a core network Connect attachment from a specified core network attachment. </p>
   *          <p>A core network Connect attachment is a GRE-based tunnel attachment that you can use to
   *          establish a connection between a core network and an appliance. A core network Connect
   *          attachment uses an existing VPC attachment as the underlying transport mechanism.</p>
   */
  public createConnectAttachment(
    args: CreateConnectAttachmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConnectAttachmentCommandOutput>;
  public createConnectAttachment(
    args: CreateConnectAttachmentCommandInput,
    cb: (err: any, data?: CreateConnectAttachmentCommandOutput) => void
  ): void;
  public createConnectAttachment(
    args: CreateConnectAttachmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConnectAttachmentCommandOutput) => void
  ): void;
  public createConnectAttachment(
    args: CreateConnectAttachmentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateConnectAttachmentCommandOutput) => void),
    cb?: (err: any, data?: CreateConnectAttachmentCommandOutput) => void
  ): Promise<CreateConnectAttachmentCommandOutput> | void {
    const command = new CreateConnectAttachmentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a connection between two devices. The devices can be a physical or virtual appliance that connects to a third-party appliance in a VPC, or a physical appliance that connects to another physical appliance in an on-premises network.</p>
   */
  public createConnection(
    args: CreateConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConnectionCommandOutput>;
  public createConnection(
    args: CreateConnectionCommandInput,
    cb: (err: any, data?: CreateConnectionCommandOutput) => void
  ): void;
  public createConnection(
    args: CreateConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConnectionCommandOutput) => void
  ): void;
  public createConnection(
    args: CreateConnectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateConnectionCommandOutput) => void),
    cb?: (err: any, data?: CreateConnectionCommandOutput) => void
  ): Promise<CreateConnectionCommandOutput> | void {
    const command = new CreateConnectionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a core network Connect peer for a specified core network connect attachment between a core network and an appliance.
   *          The peer address and transit gateway address must be the same IP address family (IPv4 or IPv6).</p>
   */
  public createConnectPeer(
    args: CreateConnectPeerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConnectPeerCommandOutput>;
  public createConnectPeer(
    args: CreateConnectPeerCommandInput,
    cb: (err: any, data?: CreateConnectPeerCommandOutput) => void
  ): void;
  public createConnectPeer(
    args: CreateConnectPeerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConnectPeerCommandOutput) => void
  ): void;
  public createConnectPeer(
    args: CreateConnectPeerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateConnectPeerCommandOutput) => void),
    cb?: (err: any, data?: CreateConnectPeerCommandOutput) => void
  ): Promise<CreateConnectPeerCommandOutput> | void {
    const command = new CreateConnectPeerCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a core network as part of your global network, and optionally, with a core network policy.</p>
   */
  public createCoreNetwork(
    args: CreateCoreNetworkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCoreNetworkCommandOutput>;
  public createCoreNetwork(
    args: CreateCoreNetworkCommandInput,
    cb: (err: any, data?: CreateCoreNetworkCommandOutput) => void
  ): void;
  public createCoreNetwork(
    args: CreateCoreNetworkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCoreNetworkCommandOutput) => void
  ): void;
  public createCoreNetwork(
    args: CreateCoreNetworkCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateCoreNetworkCommandOutput) => void),
    cb?: (err: any, data?: CreateCoreNetworkCommandOutput) => void
  ): Promise<CreateCoreNetworkCommandOutput> | void {
    const command = new CreateCoreNetworkCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new device in a global network. If you specify both a site ID and a
   *             location, the location of the site is used for visualization in the Network Manager console.</p>
   */
  public createDevice(
    args: CreateDeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDeviceCommandOutput>;
  public createDevice(args: CreateDeviceCommandInput, cb: (err: any, data?: CreateDeviceCommandOutput) => void): void;
  public createDevice(
    args: CreateDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDeviceCommandOutput) => void
  ): void;
  public createDevice(
    args: CreateDeviceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDeviceCommandOutput) => void),
    cb?: (err: any, data?: CreateDeviceCommandOutput) => void
  ): Promise<CreateDeviceCommandOutput> | void {
    const command = new CreateDeviceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new, empty global network.</p>
   */
  public createGlobalNetwork(
    args: CreateGlobalNetworkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateGlobalNetworkCommandOutput>;
  public createGlobalNetwork(
    args: CreateGlobalNetworkCommandInput,
    cb: (err: any, data?: CreateGlobalNetworkCommandOutput) => void
  ): void;
  public createGlobalNetwork(
    args: CreateGlobalNetworkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGlobalNetworkCommandOutput) => void
  ): void;
  public createGlobalNetwork(
    args: CreateGlobalNetworkCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateGlobalNetworkCommandOutput) => void),
    cb?: (err: any, data?: CreateGlobalNetworkCommandOutput) => void
  ): Promise<CreateGlobalNetworkCommandOutput> | void {
    const command = new CreateGlobalNetworkCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new link for a specified site.</p>
   */
  public createLink(args: CreateLinkCommandInput, options?: __HttpHandlerOptions): Promise<CreateLinkCommandOutput>;
  public createLink(args: CreateLinkCommandInput, cb: (err: any, data?: CreateLinkCommandOutput) => void): void;
  public createLink(
    args: CreateLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLinkCommandOutput) => void
  ): void;
  public createLink(
    args: CreateLinkCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateLinkCommandOutput) => void),
    cb?: (err: any, data?: CreateLinkCommandOutput) => void
  ): Promise<CreateLinkCommandOutput> | void {
    const command = new CreateLinkCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new site in a global network.</p>
   */
  public createSite(args: CreateSiteCommandInput, options?: __HttpHandlerOptions): Promise<CreateSiteCommandOutput>;
  public createSite(args: CreateSiteCommandInput, cb: (err: any, data?: CreateSiteCommandOutput) => void): void;
  public createSite(
    args: CreateSiteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSiteCommandOutput) => void
  ): void;
  public createSite(
    args: CreateSiteCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateSiteCommandOutput) => void),
    cb?: (err: any, data?: CreateSiteCommandOutput) => void
  ): Promise<CreateSiteCommandOutput> | void {
    const command = new CreateSiteCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an Amazon Web Services site-to-site VPN attachment on an edge location of a core network.</p>
   */
  public createSiteToSiteVpnAttachment(
    args: CreateSiteToSiteVpnAttachmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSiteToSiteVpnAttachmentCommandOutput>;
  public createSiteToSiteVpnAttachment(
    args: CreateSiteToSiteVpnAttachmentCommandInput,
    cb: (err: any, data?: CreateSiteToSiteVpnAttachmentCommandOutput) => void
  ): void;
  public createSiteToSiteVpnAttachment(
    args: CreateSiteToSiteVpnAttachmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSiteToSiteVpnAttachmentCommandOutput) => void
  ): void;
  public createSiteToSiteVpnAttachment(
    args: CreateSiteToSiteVpnAttachmentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateSiteToSiteVpnAttachmentCommandOutput) => void),
    cb?: (err: any, data?: CreateSiteToSiteVpnAttachmentCommandOutput) => void
  ): Promise<CreateSiteToSiteVpnAttachmentCommandOutput> | void {
    const command = new CreateSiteToSiteVpnAttachmentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a transit gateway peering connection.</p>
   */
  public createTransitGatewayPeering(
    args: CreateTransitGatewayPeeringCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTransitGatewayPeeringCommandOutput>;
  public createTransitGatewayPeering(
    args: CreateTransitGatewayPeeringCommandInput,
    cb: (err: any, data?: CreateTransitGatewayPeeringCommandOutput) => void
  ): void;
  public createTransitGatewayPeering(
    args: CreateTransitGatewayPeeringCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTransitGatewayPeeringCommandOutput) => void
  ): void;
  public createTransitGatewayPeering(
    args: CreateTransitGatewayPeeringCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateTransitGatewayPeeringCommandOutput) => void),
    cb?: (err: any, data?: CreateTransitGatewayPeeringCommandOutput) => void
  ): Promise<CreateTransitGatewayPeeringCommandOutput> | void {
    const command = new CreateTransitGatewayPeeringCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a transit gateway route table attachment.</p>
   */
  public createTransitGatewayRouteTableAttachment(
    args: CreateTransitGatewayRouteTableAttachmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTransitGatewayRouteTableAttachmentCommandOutput>;
  public createTransitGatewayRouteTableAttachment(
    args: CreateTransitGatewayRouteTableAttachmentCommandInput,
    cb: (err: any, data?: CreateTransitGatewayRouteTableAttachmentCommandOutput) => void
  ): void;
  public createTransitGatewayRouteTableAttachment(
    args: CreateTransitGatewayRouteTableAttachmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTransitGatewayRouteTableAttachmentCommandOutput) => void
  ): void;
  public createTransitGatewayRouteTableAttachment(
    args: CreateTransitGatewayRouteTableAttachmentCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateTransitGatewayRouteTableAttachmentCommandOutput) => void),
    cb?: (err: any, data?: CreateTransitGatewayRouteTableAttachmentCommandOutput) => void
  ): Promise<CreateTransitGatewayRouteTableAttachmentCommandOutput> | void {
    const command = new CreateTransitGatewayRouteTableAttachmentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a VPC attachment on an edge location of a core network.</p>
   */
  public createVpcAttachment(
    args: CreateVpcAttachmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVpcAttachmentCommandOutput>;
  public createVpcAttachment(
    args: CreateVpcAttachmentCommandInput,
    cb: (err: any, data?: CreateVpcAttachmentCommandOutput) => void
  ): void;
  public createVpcAttachment(
    args: CreateVpcAttachmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVpcAttachmentCommandOutput) => void
  ): void;
  public createVpcAttachment(
    args: CreateVpcAttachmentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateVpcAttachmentCommandOutput) => void),
    cb?: (err: any, data?: CreateVpcAttachmentCommandOutput) => void
  ): Promise<CreateVpcAttachmentCommandOutput> | void {
    const command = new CreateVpcAttachmentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes an attachment. Supports all attachment types.</p>
   */
  public deleteAttachment(
    args: DeleteAttachmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAttachmentCommandOutput>;
  public deleteAttachment(
    args: DeleteAttachmentCommandInput,
    cb: (err: any, data?: DeleteAttachmentCommandOutput) => void
  ): void;
  public deleteAttachment(
    args: DeleteAttachmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAttachmentCommandOutput) => void
  ): void;
  public deleteAttachment(
    args: DeleteAttachmentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAttachmentCommandOutput) => void),
    cb?: (err: any, data?: DeleteAttachmentCommandOutput) => void
  ): Promise<DeleteAttachmentCommandOutput> | void {
    const command = new DeleteAttachmentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified connection in your global network.</p>
   */
  public deleteConnection(
    args: DeleteConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConnectionCommandOutput>;
  public deleteConnection(
    args: DeleteConnectionCommandInput,
    cb: (err: any, data?: DeleteConnectionCommandOutput) => void
  ): void;
  public deleteConnection(
    args: DeleteConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConnectionCommandOutput) => void
  ): void;
  public deleteConnection(
    args: DeleteConnectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteConnectionCommandOutput) => void),
    cb?: (err: any, data?: DeleteConnectionCommandOutput) => void
  ): Promise<DeleteConnectionCommandOutput> | void {
    const command = new DeleteConnectionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a Connect peer.</p>
   */
  public deleteConnectPeer(
    args: DeleteConnectPeerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConnectPeerCommandOutput>;
  public deleteConnectPeer(
    args: DeleteConnectPeerCommandInput,
    cb: (err: any, data?: DeleteConnectPeerCommandOutput) => void
  ): void;
  public deleteConnectPeer(
    args: DeleteConnectPeerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConnectPeerCommandOutput) => void
  ): void;
  public deleteConnectPeer(
    args: DeleteConnectPeerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteConnectPeerCommandOutput) => void),
    cb?: (err: any, data?: DeleteConnectPeerCommandOutput) => void
  ): Promise<DeleteConnectPeerCommandOutput> | void {
    const command = new DeleteConnectPeerCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a core network along with all core network policies. This can only be done if there are no attachments on a core network.</p>
   */
  public deleteCoreNetwork(
    args: DeleteCoreNetworkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCoreNetworkCommandOutput>;
  public deleteCoreNetwork(
    args: DeleteCoreNetworkCommandInput,
    cb: (err: any, data?: DeleteCoreNetworkCommandOutput) => void
  ): void;
  public deleteCoreNetwork(
    args: DeleteCoreNetworkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCoreNetworkCommandOutput) => void
  ): void;
  public deleteCoreNetwork(
    args: DeleteCoreNetworkCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteCoreNetworkCommandOutput) => void),
    cb?: (err: any, data?: DeleteCoreNetworkCommandOutput) => void
  ): Promise<DeleteCoreNetworkCommandOutput> | void {
    const command = new DeleteCoreNetworkCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a policy version from a core network. You can't delete the current LIVE policy.</p>
   */
  public deleteCoreNetworkPolicyVersion(
    args: DeleteCoreNetworkPolicyVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCoreNetworkPolicyVersionCommandOutput>;
  public deleteCoreNetworkPolicyVersion(
    args: DeleteCoreNetworkPolicyVersionCommandInput,
    cb: (err: any, data?: DeleteCoreNetworkPolicyVersionCommandOutput) => void
  ): void;
  public deleteCoreNetworkPolicyVersion(
    args: DeleteCoreNetworkPolicyVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCoreNetworkPolicyVersionCommandOutput) => void
  ): void;
  public deleteCoreNetworkPolicyVersion(
    args: DeleteCoreNetworkPolicyVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteCoreNetworkPolicyVersionCommandOutput) => void),
    cb?: (err: any, data?: DeleteCoreNetworkPolicyVersionCommandOutput) => void
  ): Promise<DeleteCoreNetworkPolicyVersionCommandOutput> | void {
    const command = new DeleteCoreNetworkPolicyVersionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes an existing device. You must first disassociate the device from any links and
   *             customer gateways.</p>
   */
  public deleteDevice(
    args: DeleteDeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDeviceCommandOutput>;
  public deleteDevice(args: DeleteDeviceCommandInput, cb: (err: any, data?: DeleteDeviceCommandOutput) => void): void;
  public deleteDevice(
    args: DeleteDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDeviceCommandOutput) => void
  ): void;
  public deleteDevice(
    args: DeleteDeviceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDeviceCommandOutput) => void),
    cb?: (err: any, data?: DeleteDeviceCommandOutput) => void
  ): Promise<DeleteDeviceCommandOutput> | void {
    const command = new DeleteDeviceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes an existing global network. You must first delete all global network objects
   *             (devices, links, and sites), deregister all transit gateways, and delete any core networks.</p>
   */
  public deleteGlobalNetwork(
    args: DeleteGlobalNetworkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteGlobalNetworkCommandOutput>;
  public deleteGlobalNetwork(
    args: DeleteGlobalNetworkCommandInput,
    cb: (err: any, data?: DeleteGlobalNetworkCommandOutput) => void
  ): void;
  public deleteGlobalNetwork(
    args: DeleteGlobalNetworkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGlobalNetworkCommandOutput) => void
  ): void;
  public deleteGlobalNetwork(
    args: DeleteGlobalNetworkCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteGlobalNetworkCommandOutput) => void),
    cb?: (err: any, data?: DeleteGlobalNetworkCommandOutput) => void
  ): Promise<DeleteGlobalNetworkCommandOutput> | void {
    const command = new DeleteGlobalNetworkCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes an existing link. You must first disassociate the link from any devices and
   *             customer gateways.</p>
   */
  public deleteLink(args: DeleteLinkCommandInput, options?: __HttpHandlerOptions): Promise<DeleteLinkCommandOutput>;
  public deleteLink(args: DeleteLinkCommandInput, cb: (err: any, data?: DeleteLinkCommandOutput) => void): void;
  public deleteLink(
    args: DeleteLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLinkCommandOutput) => void
  ): void;
  public deleteLink(
    args: DeleteLinkCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteLinkCommandOutput) => void),
    cb?: (err: any, data?: DeleteLinkCommandOutput) => void
  ): Promise<DeleteLinkCommandOutput> | void {
    const command = new DeleteLinkCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes an existing peering connection.</p>
   */
  public deletePeering(
    args: DeletePeeringCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePeeringCommandOutput>;
  public deletePeering(
    args: DeletePeeringCommandInput,
    cb: (err: any, data?: DeletePeeringCommandOutput) => void
  ): void;
  public deletePeering(
    args: DeletePeeringCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePeeringCommandOutput) => void
  ): void;
  public deletePeering(
    args: DeletePeeringCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeletePeeringCommandOutput) => void),
    cb?: (err: any, data?: DeletePeeringCommandOutput) => void
  ): Promise<DeletePeeringCommandOutput> | void {
    const command = new DeletePeeringCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a resource policy for the specified resource. This revokes the access of the principals specified in the resource policy.</p>
   */
  public deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResourcePolicyCommandOutput>;
  public deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;
  public deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;
  public deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteResourcePolicyCommandOutput) => void),
    cb?: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): Promise<DeleteResourcePolicyCommandOutput> | void {
    const command = new DeleteResourcePolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes an existing site. The site cannot be associated with any device or link.</p>
   */
  public deleteSite(args: DeleteSiteCommandInput, options?: __HttpHandlerOptions): Promise<DeleteSiteCommandOutput>;
  public deleteSite(args: DeleteSiteCommandInput, cb: (err: any, data?: DeleteSiteCommandOutput) => void): void;
  public deleteSite(
    args: DeleteSiteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSiteCommandOutput) => void
  ): void;
  public deleteSite(
    args: DeleteSiteCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteSiteCommandOutput) => void),
    cb?: (err: any, data?: DeleteSiteCommandOutput) => void
  ): Promise<DeleteSiteCommandOutput> | void {
    const command = new DeleteSiteCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deregisters a transit gateway from your global network. This action does not delete
   *             your transit gateway, or modify any of its attachments. This action removes any customer gateway associations.</p>
   */
  public deregisterTransitGateway(
    args: DeregisterTransitGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterTransitGatewayCommandOutput>;
  public deregisterTransitGateway(
    args: DeregisterTransitGatewayCommandInput,
    cb: (err: any, data?: DeregisterTransitGatewayCommandOutput) => void
  ): void;
  public deregisterTransitGateway(
    args: DeregisterTransitGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterTransitGatewayCommandOutput) => void
  ): void;
  public deregisterTransitGateway(
    args: DeregisterTransitGatewayCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeregisterTransitGatewayCommandOutput) => void),
    cb?: (err: any, data?: DeregisterTransitGatewayCommandOutput) => void
  ): Promise<DeregisterTransitGatewayCommandOutput> | void {
    const command = new DeregisterTransitGatewayCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes one or more global networks. By default, all global networks are
   *             described. To describe the objects in your global network, you must use the appropriate
   *                 <code>Get*</code> action. For example, to list the transit gateways in your global
   *             network, use <a>GetTransitGatewayRegistrations</a>.</p>
   */
  public describeGlobalNetworks(
    args: DescribeGlobalNetworksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeGlobalNetworksCommandOutput>;
  public describeGlobalNetworks(
    args: DescribeGlobalNetworksCommandInput,
    cb: (err: any, data?: DescribeGlobalNetworksCommandOutput) => void
  ): void;
  public describeGlobalNetworks(
    args: DescribeGlobalNetworksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeGlobalNetworksCommandOutput) => void
  ): void;
  public describeGlobalNetworks(
    args: DescribeGlobalNetworksCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeGlobalNetworksCommandOutput) => void),
    cb?: (err: any, data?: DescribeGlobalNetworksCommandOutput) => void
  ): Promise<DescribeGlobalNetworksCommandOutput> | void {
    const command = new DescribeGlobalNetworksCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Disassociates a core network Connect peer from a device and a link. </p>
   */
  public disassociateConnectPeer(
    args: DisassociateConnectPeerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateConnectPeerCommandOutput>;
  public disassociateConnectPeer(
    args: DisassociateConnectPeerCommandInput,
    cb: (err: any, data?: DisassociateConnectPeerCommandOutput) => void
  ): void;
  public disassociateConnectPeer(
    args: DisassociateConnectPeerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateConnectPeerCommandOutput) => void
  ): void;
  public disassociateConnectPeer(
    args: DisassociateConnectPeerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateConnectPeerCommandOutput) => void),
    cb?: (err: any, data?: DisassociateConnectPeerCommandOutput) => void
  ): Promise<DisassociateConnectPeerCommandOutput> | void {
    const command = new DisassociateConnectPeerCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Disassociates a customer gateway from a device and a link.</p>
   */
  public disassociateCustomerGateway(
    args: DisassociateCustomerGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateCustomerGatewayCommandOutput>;
  public disassociateCustomerGateway(
    args: DisassociateCustomerGatewayCommandInput,
    cb: (err: any, data?: DisassociateCustomerGatewayCommandOutput) => void
  ): void;
  public disassociateCustomerGateway(
    args: DisassociateCustomerGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateCustomerGatewayCommandOutput) => void
  ): void;
  public disassociateCustomerGateway(
    args: DisassociateCustomerGatewayCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateCustomerGatewayCommandOutput) => void),
    cb?: (err: any, data?: DisassociateCustomerGatewayCommandOutput) => void
  ): Promise<DisassociateCustomerGatewayCommandOutput> | void {
    const command = new DisassociateCustomerGatewayCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Disassociates an existing device from a link. You must first disassociate any customer
   *             gateways that are associated with the link.</p>
   */
  public disassociateLink(
    args: DisassociateLinkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateLinkCommandOutput>;
  public disassociateLink(
    args: DisassociateLinkCommandInput,
    cb: (err: any, data?: DisassociateLinkCommandOutput) => void
  ): void;
  public disassociateLink(
    args: DisassociateLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateLinkCommandOutput) => void
  ): void;
  public disassociateLink(
    args: DisassociateLinkCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateLinkCommandOutput) => void),
    cb?: (err: any, data?: DisassociateLinkCommandOutput) => void
  ): Promise<DisassociateLinkCommandOutput> | void {
    const command = new DisassociateLinkCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Disassociates a transit gateway Connect peer from a device and link.</p>
   */
  public disassociateTransitGatewayConnectPeer(
    args: DisassociateTransitGatewayConnectPeerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateTransitGatewayConnectPeerCommandOutput>;
  public disassociateTransitGatewayConnectPeer(
    args: DisassociateTransitGatewayConnectPeerCommandInput,
    cb: (err: any, data?: DisassociateTransitGatewayConnectPeerCommandOutput) => void
  ): void;
  public disassociateTransitGatewayConnectPeer(
    args: DisassociateTransitGatewayConnectPeerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateTransitGatewayConnectPeerCommandOutput) => void
  ): void;
  public disassociateTransitGatewayConnectPeer(
    args: DisassociateTransitGatewayConnectPeerCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DisassociateTransitGatewayConnectPeerCommandOutput) => void),
    cb?: (err: any, data?: DisassociateTransitGatewayConnectPeerCommandOutput) => void
  ): Promise<DisassociateTransitGatewayConnectPeerCommandOutput> | void {
    const command = new DisassociateTransitGatewayConnectPeerCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Executes a change set on your core network. Deploys changes globally based on the policy submitted..</p>
   */
  public executeCoreNetworkChangeSet(
    args: ExecuteCoreNetworkChangeSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExecuteCoreNetworkChangeSetCommandOutput>;
  public executeCoreNetworkChangeSet(
    args: ExecuteCoreNetworkChangeSetCommandInput,
    cb: (err: any, data?: ExecuteCoreNetworkChangeSetCommandOutput) => void
  ): void;
  public executeCoreNetworkChangeSet(
    args: ExecuteCoreNetworkChangeSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExecuteCoreNetworkChangeSetCommandOutput) => void
  ): void;
  public executeCoreNetworkChangeSet(
    args: ExecuteCoreNetworkChangeSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ExecuteCoreNetworkChangeSetCommandOutput) => void),
    cb?: (err: any, data?: ExecuteCoreNetworkChangeSetCommandOutput) => void
  ): Promise<ExecuteCoreNetworkChangeSetCommandOutput> | void {
    const command = new ExecuteCoreNetworkChangeSetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about a core network Connect attachment.</p>
   */
  public getConnectAttachment(
    args: GetConnectAttachmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConnectAttachmentCommandOutput>;
  public getConnectAttachment(
    args: GetConnectAttachmentCommandInput,
    cb: (err: any, data?: GetConnectAttachmentCommandOutput) => void
  ): void;
  public getConnectAttachment(
    args: GetConnectAttachmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConnectAttachmentCommandOutput) => void
  ): void;
  public getConnectAttachment(
    args: GetConnectAttachmentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetConnectAttachmentCommandOutput) => void),
    cb?: (err: any, data?: GetConnectAttachmentCommandOutput) => void
  ): Promise<GetConnectAttachmentCommandOutput> | void {
    const command = new GetConnectAttachmentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about one or more of your connections in a global network.</p>
   */
  public getConnections(
    args: GetConnectionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConnectionsCommandOutput>;
  public getConnections(
    args: GetConnectionsCommandInput,
    cb: (err: any, data?: GetConnectionsCommandOutput) => void
  ): void;
  public getConnections(
    args: GetConnectionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConnectionsCommandOutput) => void
  ): void;
  public getConnections(
    args: GetConnectionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetConnectionsCommandOutput) => void),
    cb?: (err: any, data?: GetConnectionsCommandOutput) => void
  ): Promise<GetConnectionsCommandOutput> | void {
    const command = new GetConnectionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about a core network Connect peer.</p>
   */
  public getConnectPeer(
    args: GetConnectPeerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConnectPeerCommandOutput>;
  public getConnectPeer(
    args: GetConnectPeerCommandInput,
    cb: (err: any, data?: GetConnectPeerCommandOutput) => void
  ): void;
  public getConnectPeer(
    args: GetConnectPeerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConnectPeerCommandOutput) => void
  ): void;
  public getConnectPeer(
    args: GetConnectPeerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetConnectPeerCommandOutput) => void),
    cb?: (err: any, data?: GetConnectPeerCommandOutput) => void
  ): Promise<GetConnectPeerCommandOutput> | void {
    const command = new GetConnectPeerCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about a core network Connect peer associations.</p>
   */
  public getConnectPeerAssociations(
    args: GetConnectPeerAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConnectPeerAssociationsCommandOutput>;
  public getConnectPeerAssociations(
    args: GetConnectPeerAssociationsCommandInput,
    cb: (err: any, data?: GetConnectPeerAssociationsCommandOutput) => void
  ): void;
  public getConnectPeerAssociations(
    args: GetConnectPeerAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConnectPeerAssociationsCommandOutput) => void
  ): void;
  public getConnectPeerAssociations(
    args: GetConnectPeerAssociationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetConnectPeerAssociationsCommandOutput) => void),
    cb?: (err: any, data?: GetConnectPeerAssociationsCommandOutput) => void
  ): Promise<GetConnectPeerAssociationsCommandOutput> | void {
    const command = new GetConnectPeerAssociationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about the LIVE policy for a core network.</p>
   */
  public getCoreNetwork(
    args: GetCoreNetworkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCoreNetworkCommandOutput>;
  public getCoreNetwork(
    args: GetCoreNetworkCommandInput,
    cb: (err: any, data?: GetCoreNetworkCommandOutput) => void
  ): void;
  public getCoreNetwork(
    args: GetCoreNetworkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCoreNetworkCommandOutput) => void
  ): void;
  public getCoreNetwork(
    args: GetCoreNetworkCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetCoreNetworkCommandOutput) => void),
    cb?: (err: any, data?: GetCoreNetworkCommandOutput) => void
  ): Promise<GetCoreNetworkCommandOutput> | void {
    const command = new GetCoreNetworkCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about a core network change event.</p>
   */
  public getCoreNetworkChangeEvents(
    args: GetCoreNetworkChangeEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCoreNetworkChangeEventsCommandOutput>;
  public getCoreNetworkChangeEvents(
    args: GetCoreNetworkChangeEventsCommandInput,
    cb: (err: any, data?: GetCoreNetworkChangeEventsCommandOutput) => void
  ): void;
  public getCoreNetworkChangeEvents(
    args: GetCoreNetworkChangeEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCoreNetworkChangeEventsCommandOutput) => void
  ): void;
  public getCoreNetworkChangeEvents(
    args: GetCoreNetworkChangeEventsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetCoreNetworkChangeEventsCommandOutput) => void),
    cb?: (err: any, data?: GetCoreNetworkChangeEventsCommandOutput) => void
  ): Promise<GetCoreNetworkChangeEventsCommandOutput> | void {
    const command = new GetCoreNetworkChangeEventsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a change set between the LIVE core network policy and a submitted policy.</p>
   */
  public getCoreNetworkChangeSet(
    args: GetCoreNetworkChangeSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCoreNetworkChangeSetCommandOutput>;
  public getCoreNetworkChangeSet(
    args: GetCoreNetworkChangeSetCommandInput,
    cb: (err: any, data?: GetCoreNetworkChangeSetCommandOutput) => void
  ): void;
  public getCoreNetworkChangeSet(
    args: GetCoreNetworkChangeSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCoreNetworkChangeSetCommandOutput) => void
  ): void;
  public getCoreNetworkChangeSet(
    args: GetCoreNetworkChangeSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetCoreNetworkChangeSetCommandOutput) => void),
    cb?: (err: any, data?: GetCoreNetworkChangeSetCommandOutput) => void
  ): Promise<GetCoreNetworkChangeSetCommandOutput> | void {
    const command = new GetCoreNetworkChangeSetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns details about a core network policy. You can get details about your current live policy or any previous policy version.</p>
   */
  public getCoreNetworkPolicy(
    args: GetCoreNetworkPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCoreNetworkPolicyCommandOutput>;
  public getCoreNetworkPolicy(
    args: GetCoreNetworkPolicyCommandInput,
    cb: (err: any, data?: GetCoreNetworkPolicyCommandOutput) => void
  ): void;
  public getCoreNetworkPolicy(
    args: GetCoreNetworkPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCoreNetworkPolicyCommandOutput) => void
  ): void;
  public getCoreNetworkPolicy(
    args: GetCoreNetworkPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetCoreNetworkPolicyCommandOutput) => void),
    cb?: (err: any, data?: GetCoreNetworkPolicyCommandOutput) => void
  ): Promise<GetCoreNetworkPolicyCommandOutput> | void {
    const command = new GetCoreNetworkPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets the association information for customer gateways that are associated with
   *             devices and links in your global network.</p>
   */
  public getCustomerGatewayAssociations(
    args: GetCustomerGatewayAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCustomerGatewayAssociationsCommandOutput>;
  public getCustomerGatewayAssociations(
    args: GetCustomerGatewayAssociationsCommandInput,
    cb: (err: any, data?: GetCustomerGatewayAssociationsCommandOutput) => void
  ): void;
  public getCustomerGatewayAssociations(
    args: GetCustomerGatewayAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCustomerGatewayAssociationsCommandOutput) => void
  ): void;
  public getCustomerGatewayAssociations(
    args: GetCustomerGatewayAssociationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetCustomerGatewayAssociationsCommandOutput) => void),
    cb?: (err: any, data?: GetCustomerGatewayAssociationsCommandOutput) => void
  ): Promise<GetCustomerGatewayAssociationsCommandOutput> | void {
    const command = new GetCustomerGatewayAssociationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about one or more of your devices in a global network.</p>
   */
  public getDevices(args: GetDevicesCommandInput, options?: __HttpHandlerOptions): Promise<GetDevicesCommandOutput>;
  public getDevices(args: GetDevicesCommandInput, cb: (err: any, data?: GetDevicesCommandOutput) => void): void;
  public getDevices(
    args: GetDevicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDevicesCommandOutput) => void
  ): void;
  public getDevices(
    args: GetDevicesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDevicesCommandOutput) => void),
    cb?: (err: any, data?: GetDevicesCommandOutput) => void
  ): Promise<GetDevicesCommandOutput> | void {
    const command = new GetDevicesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets the link associations for a device or a link. Either the device ID or the link ID
   *             must be specified.</p>
   */
  public getLinkAssociations(
    args: GetLinkAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLinkAssociationsCommandOutput>;
  public getLinkAssociations(
    args: GetLinkAssociationsCommandInput,
    cb: (err: any, data?: GetLinkAssociationsCommandOutput) => void
  ): void;
  public getLinkAssociations(
    args: GetLinkAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLinkAssociationsCommandOutput) => void
  ): void;
  public getLinkAssociations(
    args: GetLinkAssociationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetLinkAssociationsCommandOutput) => void),
    cb?: (err: any, data?: GetLinkAssociationsCommandOutput) => void
  ): Promise<GetLinkAssociationsCommandOutput> | void {
    const command = new GetLinkAssociationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about one or more links in a specified global network.</p>
   *         <p>If you specify the site ID, you cannot specify the type or provider in the same request. You can specify the type and provider in the same request.</p>
   */
  public getLinks(args: GetLinksCommandInput, options?: __HttpHandlerOptions): Promise<GetLinksCommandOutput>;
  public getLinks(args: GetLinksCommandInput, cb: (err: any, data?: GetLinksCommandOutput) => void): void;
  public getLinks(
    args: GetLinksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLinksCommandOutput) => void
  ): void;
  public getLinks(
    args: GetLinksCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetLinksCommandOutput) => void),
    cb?: (err: any, data?: GetLinksCommandOutput) => void
  ): Promise<GetLinksCommandOutput> | void {
    const command = new GetLinksCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets the count of network resources, by resource type, for the specified global network.</p>
   */
  public getNetworkResourceCounts(
    args: GetNetworkResourceCountsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetNetworkResourceCountsCommandOutput>;
  public getNetworkResourceCounts(
    args: GetNetworkResourceCountsCommandInput,
    cb: (err: any, data?: GetNetworkResourceCountsCommandOutput) => void
  ): void;
  public getNetworkResourceCounts(
    args: GetNetworkResourceCountsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetNetworkResourceCountsCommandOutput) => void
  ): void;
  public getNetworkResourceCounts(
    args: GetNetworkResourceCountsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetNetworkResourceCountsCommandOutput) => void),
    cb?: (err: any, data?: GetNetworkResourceCountsCommandOutput) => void
  ): Promise<GetNetworkResourceCountsCommandOutput> | void {
    const command = new GetNetworkResourceCountsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets the network resource relationships for the specified global network.</p>
   */
  public getNetworkResourceRelationships(
    args: GetNetworkResourceRelationshipsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetNetworkResourceRelationshipsCommandOutput>;
  public getNetworkResourceRelationships(
    args: GetNetworkResourceRelationshipsCommandInput,
    cb: (err: any, data?: GetNetworkResourceRelationshipsCommandOutput) => void
  ): void;
  public getNetworkResourceRelationships(
    args: GetNetworkResourceRelationshipsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetNetworkResourceRelationshipsCommandOutput) => void
  ): void;
  public getNetworkResourceRelationships(
    args: GetNetworkResourceRelationshipsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetNetworkResourceRelationshipsCommandOutput) => void),
    cb?: (err: any, data?: GetNetworkResourceRelationshipsCommandOutput) => void
  ): Promise<GetNetworkResourceRelationshipsCommandOutput> | void {
    const command = new GetNetworkResourceRelationshipsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the network resources for the specified global network.</p>
   *          <p>The results include information from the corresponding Describe call for the resource, minus any sensitive information such as pre-shared keys.</p>
   */
  public getNetworkResources(
    args: GetNetworkResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetNetworkResourcesCommandOutput>;
  public getNetworkResources(
    args: GetNetworkResourcesCommandInput,
    cb: (err: any, data?: GetNetworkResourcesCommandOutput) => void
  ): void;
  public getNetworkResources(
    args: GetNetworkResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetNetworkResourcesCommandOutput) => void
  ): void;
  public getNetworkResources(
    args: GetNetworkResourcesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetNetworkResourcesCommandOutput) => void),
    cb?: (err: any, data?: GetNetworkResourcesCommandOutput) => void
  ): Promise<GetNetworkResourcesCommandOutput> | void {
    const command = new GetNetworkResourcesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets the network routes of the specified global network.</p>
   */
  public getNetworkRoutes(
    args: GetNetworkRoutesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetNetworkRoutesCommandOutput>;
  public getNetworkRoutes(
    args: GetNetworkRoutesCommandInput,
    cb: (err: any, data?: GetNetworkRoutesCommandOutput) => void
  ): void;
  public getNetworkRoutes(
    args: GetNetworkRoutesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetNetworkRoutesCommandOutput) => void
  ): void;
  public getNetworkRoutes(
    args: GetNetworkRoutesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetNetworkRoutesCommandOutput) => void),
    cb?: (err: any, data?: GetNetworkRoutesCommandOutput) => void
  ): Promise<GetNetworkRoutesCommandOutput> | void {
    const command = new GetNetworkRoutesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets the network telemetry of the specified global network.</p>
   */
  public getNetworkTelemetry(
    args: GetNetworkTelemetryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetNetworkTelemetryCommandOutput>;
  public getNetworkTelemetry(
    args: GetNetworkTelemetryCommandInput,
    cb: (err: any, data?: GetNetworkTelemetryCommandOutput) => void
  ): void;
  public getNetworkTelemetry(
    args: GetNetworkTelemetryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetNetworkTelemetryCommandOutput) => void
  ): void;
  public getNetworkTelemetry(
    args: GetNetworkTelemetryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetNetworkTelemetryCommandOutput) => void),
    cb?: (err: any, data?: GetNetworkTelemetryCommandOutput) => void
  ): Promise<GetNetworkTelemetryCommandOutput> | void {
    const command = new GetNetworkTelemetryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about a resource policy.</p>
   */
  public getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourcePolicyCommandOutput>;
  public getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;
  public getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;
  public getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetResourcePolicyCommandOutput) => void),
    cb?: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): Promise<GetResourcePolicyCommandOutput> | void {
    const command = new GetResourcePolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about the specified route analysis.</p>
   */
  public getRouteAnalysis(
    args: GetRouteAnalysisCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRouteAnalysisCommandOutput>;
  public getRouteAnalysis(
    args: GetRouteAnalysisCommandInput,
    cb: (err: any, data?: GetRouteAnalysisCommandOutput) => void
  ): void;
  public getRouteAnalysis(
    args: GetRouteAnalysisCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRouteAnalysisCommandOutput) => void
  ): void;
  public getRouteAnalysis(
    args: GetRouteAnalysisCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetRouteAnalysisCommandOutput) => void),
    cb?: (err: any, data?: GetRouteAnalysisCommandOutput) => void
  ): Promise<GetRouteAnalysisCommandOutput> | void {
    const command = new GetRouteAnalysisCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about one or more of your sites in a global network.</p>
   */
  public getSites(args: GetSitesCommandInput, options?: __HttpHandlerOptions): Promise<GetSitesCommandOutput>;
  public getSites(args: GetSitesCommandInput, cb: (err: any, data?: GetSitesCommandOutput) => void): void;
  public getSites(
    args: GetSitesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSitesCommandOutput) => void
  ): void;
  public getSites(
    args: GetSitesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSitesCommandOutput) => void),
    cb?: (err: any, data?: GetSitesCommandOutput) => void
  ): Promise<GetSitesCommandOutput> | void {
    const command = new GetSitesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about a site-to-site VPN attachment.</p>
   */
  public getSiteToSiteVpnAttachment(
    args: GetSiteToSiteVpnAttachmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSiteToSiteVpnAttachmentCommandOutput>;
  public getSiteToSiteVpnAttachment(
    args: GetSiteToSiteVpnAttachmentCommandInput,
    cb: (err: any, data?: GetSiteToSiteVpnAttachmentCommandOutput) => void
  ): void;
  public getSiteToSiteVpnAttachment(
    args: GetSiteToSiteVpnAttachmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSiteToSiteVpnAttachmentCommandOutput) => void
  ): void;
  public getSiteToSiteVpnAttachment(
    args: GetSiteToSiteVpnAttachmentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSiteToSiteVpnAttachmentCommandOutput) => void),
    cb?: (err: any, data?: GetSiteToSiteVpnAttachmentCommandOutput) => void
  ): Promise<GetSiteToSiteVpnAttachmentCommandOutput> | void {
    const command = new GetSiteToSiteVpnAttachmentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about one or more of your transit gateway Connect peer associations in a global network.</p>
   */
  public getTransitGatewayConnectPeerAssociations(
    args: GetTransitGatewayConnectPeerAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTransitGatewayConnectPeerAssociationsCommandOutput>;
  public getTransitGatewayConnectPeerAssociations(
    args: GetTransitGatewayConnectPeerAssociationsCommandInput,
    cb: (err: any, data?: GetTransitGatewayConnectPeerAssociationsCommandOutput) => void
  ): void;
  public getTransitGatewayConnectPeerAssociations(
    args: GetTransitGatewayConnectPeerAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTransitGatewayConnectPeerAssociationsCommandOutput) => void
  ): void;
  public getTransitGatewayConnectPeerAssociations(
    args: GetTransitGatewayConnectPeerAssociationsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetTransitGatewayConnectPeerAssociationsCommandOutput) => void),
    cb?: (err: any, data?: GetTransitGatewayConnectPeerAssociationsCommandOutput) => void
  ): Promise<GetTransitGatewayConnectPeerAssociationsCommandOutput> | void {
    const command = new GetTransitGatewayConnectPeerAssociationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about a transit gateway peer.</p>
   */
  public getTransitGatewayPeering(
    args: GetTransitGatewayPeeringCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTransitGatewayPeeringCommandOutput>;
  public getTransitGatewayPeering(
    args: GetTransitGatewayPeeringCommandInput,
    cb: (err: any, data?: GetTransitGatewayPeeringCommandOutput) => void
  ): void;
  public getTransitGatewayPeering(
    args: GetTransitGatewayPeeringCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTransitGatewayPeeringCommandOutput) => void
  ): void;
  public getTransitGatewayPeering(
    args: GetTransitGatewayPeeringCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetTransitGatewayPeeringCommandOutput) => void),
    cb?: (err: any, data?: GetTransitGatewayPeeringCommandOutput) => void
  ): Promise<GetTransitGatewayPeeringCommandOutput> | void {
    const command = new GetTransitGatewayPeeringCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about the transit gateway registrations in a specified
   *             global network.</p>
   */
  public getTransitGatewayRegistrations(
    args: GetTransitGatewayRegistrationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTransitGatewayRegistrationsCommandOutput>;
  public getTransitGatewayRegistrations(
    args: GetTransitGatewayRegistrationsCommandInput,
    cb: (err: any, data?: GetTransitGatewayRegistrationsCommandOutput) => void
  ): void;
  public getTransitGatewayRegistrations(
    args: GetTransitGatewayRegistrationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTransitGatewayRegistrationsCommandOutput) => void
  ): void;
  public getTransitGatewayRegistrations(
    args: GetTransitGatewayRegistrationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetTransitGatewayRegistrationsCommandOutput) => void),
    cb?: (err: any, data?: GetTransitGatewayRegistrationsCommandOutput) => void
  ): Promise<GetTransitGatewayRegistrationsCommandOutput> | void {
    const command = new GetTransitGatewayRegistrationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about a transit gateway route table attachment.</p>
   */
  public getTransitGatewayRouteTableAttachment(
    args: GetTransitGatewayRouteTableAttachmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTransitGatewayRouteTableAttachmentCommandOutput>;
  public getTransitGatewayRouteTableAttachment(
    args: GetTransitGatewayRouteTableAttachmentCommandInput,
    cb: (err: any, data?: GetTransitGatewayRouteTableAttachmentCommandOutput) => void
  ): void;
  public getTransitGatewayRouteTableAttachment(
    args: GetTransitGatewayRouteTableAttachmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTransitGatewayRouteTableAttachmentCommandOutput) => void
  ): void;
  public getTransitGatewayRouteTableAttachment(
    args: GetTransitGatewayRouteTableAttachmentCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetTransitGatewayRouteTableAttachmentCommandOutput) => void),
    cb?: (err: any, data?: GetTransitGatewayRouteTableAttachmentCommandOutput) => void
  ): Promise<GetTransitGatewayRouteTableAttachmentCommandOutput> | void {
    const command = new GetTransitGatewayRouteTableAttachmentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about a VPC attachment.</p>
   */
  public getVpcAttachment(
    args: GetVpcAttachmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVpcAttachmentCommandOutput>;
  public getVpcAttachment(
    args: GetVpcAttachmentCommandInput,
    cb: (err: any, data?: GetVpcAttachmentCommandOutput) => void
  ): void;
  public getVpcAttachment(
    args: GetVpcAttachmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVpcAttachmentCommandOutput) => void
  ): void;
  public getVpcAttachment(
    args: GetVpcAttachmentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetVpcAttachmentCommandOutput) => void),
    cb?: (err: any, data?: GetVpcAttachmentCommandOutput) => void
  ): Promise<GetVpcAttachmentCommandOutput> | void {
    const command = new GetVpcAttachmentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of core network attachments.</p>
   */
  public listAttachments(
    args: ListAttachmentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAttachmentsCommandOutput>;
  public listAttachments(
    args: ListAttachmentsCommandInput,
    cb: (err: any, data?: ListAttachmentsCommandOutput) => void
  ): void;
  public listAttachments(
    args: ListAttachmentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAttachmentsCommandOutput) => void
  ): void;
  public listAttachments(
    args: ListAttachmentsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAttachmentsCommandOutput) => void),
    cb?: (err: any, data?: ListAttachmentsCommandOutput) => void
  ): Promise<ListAttachmentsCommandOutput> | void {
    const command = new ListAttachmentsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of core network Connect peers.</p>
   */
  public listConnectPeers(
    args: ListConnectPeersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConnectPeersCommandOutput>;
  public listConnectPeers(
    args: ListConnectPeersCommandInput,
    cb: (err: any, data?: ListConnectPeersCommandOutput) => void
  ): void;
  public listConnectPeers(
    args: ListConnectPeersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConnectPeersCommandOutput) => void
  ): void;
  public listConnectPeers(
    args: ListConnectPeersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListConnectPeersCommandOutput) => void),
    cb?: (err: any, data?: ListConnectPeersCommandOutput) => void
  ): Promise<ListConnectPeersCommandOutput> | void {
    const command = new ListConnectPeersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of core network policy versions.</p>
   */
  public listCoreNetworkPolicyVersions(
    args: ListCoreNetworkPolicyVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCoreNetworkPolicyVersionsCommandOutput>;
  public listCoreNetworkPolicyVersions(
    args: ListCoreNetworkPolicyVersionsCommandInput,
    cb: (err: any, data?: ListCoreNetworkPolicyVersionsCommandOutput) => void
  ): void;
  public listCoreNetworkPolicyVersions(
    args: ListCoreNetworkPolicyVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCoreNetworkPolicyVersionsCommandOutput) => void
  ): void;
  public listCoreNetworkPolicyVersions(
    args: ListCoreNetworkPolicyVersionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListCoreNetworkPolicyVersionsCommandOutput) => void),
    cb?: (err: any, data?: ListCoreNetworkPolicyVersionsCommandOutput) => void
  ): Promise<ListCoreNetworkPolicyVersionsCommandOutput> | void {
    const command = new ListCoreNetworkPolicyVersionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of owned and shared core networks.</p>
   */
  public listCoreNetworks(
    args: ListCoreNetworksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCoreNetworksCommandOutput>;
  public listCoreNetworks(
    args: ListCoreNetworksCommandInput,
    cb: (err: any, data?: ListCoreNetworksCommandOutput) => void
  ): void;
  public listCoreNetworks(
    args: ListCoreNetworksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCoreNetworksCommandOutput) => void
  ): void;
  public listCoreNetworks(
    args: ListCoreNetworksCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListCoreNetworksCommandOutput) => void),
    cb?: (err: any, data?: ListCoreNetworksCommandOutput) => void
  ): Promise<ListCoreNetworksCommandOutput> | void {
    const command = new ListCoreNetworksCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets the status of the Service Linked Role (SLR) deployment for the accounts in a given Amazon Web Services Organization.</p>
   */
  public listOrganizationServiceAccessStatus(
    args: ListOrganizationServiceAccessStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOrganizationServiceAccessStatusCommandOutput>;
  public listOrganizationServiceAccessStatus(
    args: ListOrganizationServiceAccessStatusCommandInput,
    cb: (err: any, data?: ListOrganizationServiceAccessStatusCommandOutput) => void
  ): void;
  public listOrganizationServiceAccessStatus(
    args: ListOrganizationServiceAccessStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOrganizationServiceAccessStatusCommandOutput) => void
  ): void;
  public listOrganizationServiceAccessStatus(
    args: ListOrganizationServiceAccessStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListOrganizationServiceAccessStatusCommandOutput) => void),
    cb?: (err: any, data?: ListOrganizationServiceAccessStatusCommandOutput) => void
  ): Promise<ListOrganizationServiceAccessStatusCommandOutput> | void {
    const command = new ListOrganizationServiceAccessStatusCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the peerings for a core network.</p>
   */
  public listPeerings(
    args: ListPeeringsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPeeringsCommandOutput>;
  public listPeerings(args: ListPeeringsCommandInput, cb: (err: any, data?: ListPeeringsCommandOutput) => void): void;
  public listPeerings(
    args: ListPeeringsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPeeringsCommandOutput) => void
  ): void;
  public listPeerings(
    args: ListPeeringsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPeeringsCommandOutput) => void),
    cb?: (err: any, data?: ListPeeringsCommandOutput) => void
  ): Promise<ListPeeringsCommandOutput> | void {
    const command = new ListPeeringsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the tags for a specified resource.</p>
   */
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new, immutable version of a core network policy. A subsequent change set is created showing the differences between the LIVE policy and the submitted policy.</p>
   */
  public putCoreNetworkPolicy(
    args: PutCoreNetworkPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutCoreNetworkPolicyCommandOutput>;
  public putCoreNetworkPolicy(
    args: PutCoreNetworkPolicyCommandInput,
    cb: (err: any, data?: PutCoreNetworkPolicyCommandOutput) => void
  ): void;
  public putCoreNetworkPolicy(
    args: PutCoreNetworkPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutCoreNetworkPolicyCommandOutput) => void
  ): void;
  public putCoreNetworkPolicy(
    args: PutCoreNetworkPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutCoreNetworkPolicyCommandOutput) => void),
    cb?: (err: any, data?: PutCoreNetworkPolicyCommandOutput) => void
  ): Promise<PutCoreNetworkPolicyCommandOutput> | void {
    const command = new PutCoreNetworkPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates or updates a resource policy.</p>
   */
  public putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutResourcePolicyCommandOutput>;
  public putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;
  public putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;
  public putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutResourcePolicyCommandOutput) => void),
    cb?: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): Promise<PutResourcePolicyCommandOutput> | void {
    const command = new PutResourcePolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Registers a transit gateway in your global network. The transit gateway can be in any
   *             Amazon Web Services Region, but it must be owned by the same Amazon Web Services account that owns
   *             the global network. You cannot register a transit gateway in more than one global network.</p>
   */
  public registerTransitGateway(
    args: RegisterTransitGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterTransitGatewayCommandOutput>;
  public registerTransitGateway(
    args: RegisterTransitGatewayCommandInput,
    cb: (err: any, data?: RegisterTransitGatewayCommandOutput) => void
  ): void;
  public registerTransitGateway(
    args: RegisterTransitGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterTransitGatewayCommandOutput) => void
  ): void;
  public registerTransitGateway(
    args: RegisterTransitGatewayCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RegisterTransitGatewayCommandOutput) => void),
    cb?: (err: any, data?: RegisterTransitGatewayCommandOutput) => void
  ): Promise<RegisterTransitGatewayCommandOutput> | void {
    const command = new RegisterTransitGatewayCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Rejects a core network attachment request.</p>
   */
  public rejectAttachment(
    args: RejectAttachmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RejectAttachmentCommandOutput>;
  public rejectAttachment(
    args: RejectAttachmentCommandInput,
    cb: (err: any, data?: RejectAttachmentCommandOutput) => void
  ): void;
  public rejectAttachment(
    args: RejectAttachmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RejectAttachmentCommandOutput) => void
  ): void;
  public rejectAttachment(
    args: RejectAttachmentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RejectAttachmentCommandOutput) => void),
    cb?: (err: any, data?: RejectAttachmentCommandOutput) => void
  ): Promise<RejectAttachmentCommandOutput> | void {
    const command = new RejectAttachmentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Restores a previous policy version as a new, immutable version of a core network policy. A subsequent change set is created showing the differences between the LIVE policy and restored policy.</p>
   */
  public restoreCoreNetworkPolicyVersion(
    args: RestoreCoreNetworkPolicyVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RestoreCoreNetworkPolicyVersionCommandOutput>;
  public restoreCoreNetworkPolicyVersion(
    args: RestoreCoreNetworkPolicyVersionCommandInput,
    cb: (err: any, data?: RestoreCoreNetworkPolicyVersionCommandOutput) => void
  ): void;
  public restoreCoreNetworkPolicyVersion(
    args: RestoreCoreNetworkPolicyVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestoreCoreNetworkPolicyVersionCommandOutput) => void
  ): void;
  public restoreCoreNetworkPolicyVersion(
    args: RestoreCoreNetworkPolicyVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RestoreCoreNetworkPolicyVersionCommandOutput) => void),
    cb?: (err: any, data?: RestoreCoreNetworkPolicyVersionCommandOutput) => void
  ): Promise<RestoreCoreNetworkPolicyVersionCommandOutput> | void {
    const command = new RestoreCoreNetworkPolicyVersionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Enables the Network Manager service for an Amazon Web Services Organization. This can only be called by a management account within the organization. </p>
   */
  public startOrganizationServiceAccessUpdate(
    args: StartOrganizationServiceAccessUpdateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartOrganizationServiceAccessUpdateCommandOutput>;
  public startOrganizationServiceAccessUpdate(
    args: StartOrganizationServiceAccessUpdateCommandInput,
    cb: (err: any, data?: StartOrganizationServiceAccessUpdateCommandOutput) => void
  ): void;
  public startOrganizationServiceAccessUpdate(
    args: StartOrganizationServiceAccessUpdateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartOrganizationServiceAccessUpdateCommandOutput) => void
  ): void;
  public startOrganizationServiceAccessUpdate(
    args: StartOrganizationServiceAccessUpdateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartOrganizationServiceAccessUpdateCommandOutput) => void),
    cb?: (err: any, data?: StartOrganizationServiceAccessUpdateCommandOutput) => void
  ): Promise<StartOrganizationServiceAccessUpdateCommandOutput> | void {
    const command = new StartOrganizationServiceAccessUpdateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Starts analyzing the routing path between the specified source and destination. For more information,
   *             see <a href="https://docs.aws.amazon.com/vpc/latest/tgw/route-analyzer.html">Route Analyzer</a>.</p>
   */
  public startRouteAnalysis(
    args: StartRouteAnalysisCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartRouteAnalysisCommandOutput>;
  public startRouteAnalysis(
    args: StartRouteAnalysisCommandInput,
    cb: (err: any, data?: StartRouteAnalysisCommandOutput) => void
  ): void;
  public startRouteAnalysis(
    args: StartRouteAnalysisCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartRouteAnalysisCommandOutput) => void
  ): void;
  public startRouteAnalysis(
    args: StartRouteAnalysisCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartRouteAnalysisCommandOutput) => void),
    cb?: (err: any, data?: StartRouteAnalysisCommandOutput) => void
  ): Promise<StartRouteAnalysisCommandOutput> | void {
    const command = new StartRouteAnalysisCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Tags a specified resource.</p>
   */
  public tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  public tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes tags from a specified resource.</p>
   */
  public untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  public untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the information for an existing connection. To remove information for any of the parameters,
   *             specify an empty string.</p>
   */
  public updateConnection(
    args: UpdateConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConnectionCommandOutput>;
  public updateConnection(
    args: UpdateConnectionCommandInput,
    cb: (err: any, data?: UpdateConnectionCommandOutput) => void
  ): void;
  public updateConnection(
    args: UpdateConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConnectionCommandOutput) => void
  ): void;
  public updateConnection(
    args: UpdateConnectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateConnectionCommandOutput) => void),
    cb?: (err: any, data?: UpdateConnectionCommandOutput) => void
  ): Promise<UpdateConnectionCommandOutput> | void {
    const command = new UpdateConnectionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the description of a core network.</p>
   */
  public updateCoreNetwork(
    args: UpdateCoreNetworkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCoreNetworkCommandOutput>;
  public updateCoreNetwork(
    args: UpdateCoreNetworkCommandInput,
    cb: (err: any, data?: UpdateCoreNetworkCommandOutput) => void
  ): void;
  public updateCoreNetwork(
    args: UpdateCoreNetworkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCoreNetworkCommandOutput) => void
  ): void;
  public updateCoreNetwork(
    args: UpdateCoreNetworkCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateCoreNetworkCommandOutput) => void),
    cb?: (err: any, data?: UpdateCoreNetworkCommandOutput) => void
  ): Promise<UpdateCoreNetworkCommandOutput> | void {
    const command = new UpdateCoreNetworkCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the details for an existing device. To remove information for any of the
   *             parameters, specify an empty string.</p>
   */
  public updateDevice(
    args: UpdateDeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDeviceCommandOutput>;
  public updateDevice(args: UpdateDeviceCommandInput, cb: (err: any, data?: UpdateDeviceCommandOutput) => void): void;
  public updateDevice(
    args: UpdateDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDeviceCommandOutput) => void
  ): void;
  public updateDevice(
    args: UpdateDeviceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDeviceCommandOutput) => void),
    cb?: (err: any, data?: UpdateDeviceCommandOutput) => void
  ): Promise<UpdateDeviceCommandOutput> | void {
    const command = new UpdateDeviceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates an existing global network. To remove information for any of the parameters,
   *             specify an empty string.</p>
   */
  public updateGlobalNetwork(
    args: UpdateGlobalNetworkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateGlobalNetworkCommandOutput>;
  public updateGlobalNetwork(
    args: UpdateGlobalNetworkCommandInput,
    cb: (err: any, data?: UpdateGlobalNetworkCommandOutput) => void
  ): void;
  public updateGlobalNetwork(
    args: UpdateGlobalNetworkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGlobalNetworkCommandOutput) => void
  ): void;
  public updateGlobalNetwork(
    args: UpdateGlobalNetworkCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateGlobalNetworkCommandOutput) => void),
    cb?: (err: any, data?: UpdateGlobalNetworkCommandOutput) => void
  ): Promise<UpdateGlobalNetworkCommandOutput> | void {
    const command = new UpdateGlobalNetworkCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the details for an existing link. To remove information for any of the
   *             parameters, specify an empty string.</p>
   */
  public updateLink(args: UpdateLinkCommandInput, options?: __HttpHandlerOptions): Promise<UpdateLinkCommandOutput>;
  public updateLink(args: UpdateLinkCommandInput, cb: (err: any, data?: UpdateLinkCommandOutput) => void): void;
  public updateLink(
    args: UpdateLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLinkCommandOutput) => void
  ): void;
  public updateLink(
    args: UpdateLinkCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateLinkCommandOutput) => void),
    cb?: (err: any, data?: UpdateLinkCommandOutput) => void
  ): Promise<UpdateLinkCommandOutput> | void {
    const command = new UpdateLinkCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the resource metadata for the specified global network.</p>
   */
  public updateNetworkResourceMetadata(
    args: UpdateNetworkResourceMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateNetworkResourceMetadataCommandOutput>;
  public updateNetworkResourceMetadata(
    args: UpdateNetworkResourceMetadataCommandInput,
    cb: (err: any, data?: UpdateNetworkResourceMetadataCommandOutput) => void
  ): void;
  public updateNetworkResourceMetadata(
    args: UpdateNetworkResourceMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateNetworkResourceMetadataCommandOutput) => void
  ): void;
  public updateNetworkResourceMetadata(
    args: UpdateNetworkResourceMetadataCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateNetworkResourceMetadataCommandOutput) => void),
    cb?: (err: any, data?: UpdateNetworkResourceMetadataCommandOutput) => void
  ): Promise<UpdateNetworkResourceMetadataCommandOutput> | void {
    const command = new UpdateNetworkResourceMetadataCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the information for an existing site. To remove information for any of the
   *             parameters, specify an empty string.</p>
   */
  public updateSite(args: UpdateSiteCommandInput, options?: __HttpHandlerOptions): Promise<UpdateSiteCommandOutput>;
  public updateSite(args: UpdateSiteCommandInput, cb: (err: any, data?: UpdateSiteCommandOutput) => void): void;
  public updateSite(
    args: UpdateSiteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSiteCommandOutput) => void
  ): void;
  public updateSite(
    args: UpdateSiteCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateSiteCommandOutput) => void),
    cb?: (err: any, data?: UpdateSiteCommandOutput) => void
  ): Promise<UpdateSiteCommandOutput> | void {
    const command = new UpdateSiteCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates a VPC attachment.</p>
   */
  public updateVpcAttachment(
    args: UpdateVpcAttachmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateVpcAttachmentCommandOutput>;
  public updateVpcAttachment(
    args: UpdateVpcAttachmentCommandInput,
    cb: (err: any, data?: UpdateVpcAttachmentCommandOutput) => void
  ): void;
  public updateVpcAttachment(
    args: UpdateVpcAttachmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateVpcAttachmentCommandOutput) => void
  ): void;
  public updateVpcAttachment(
    args: UpdateVpcAttachmentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateVpcAttachmentCommandOutput) => void),
    cb?: (err: any, data?: UpdateVpcAttachmentCommandOutput) => void
  ): Promise<UpdateVpcAttachmentCommandOutput> | void {
    const command = new UpdateVpcAttachmentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
