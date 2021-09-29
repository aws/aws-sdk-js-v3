import { NetworkManagerClient } from "./NetworkManagerClient";
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
  CreateConnectionCommand,
  CreateConnectionCommandInput,
  CreateConnectionCommandOutput,
} from "./commands/CreateConnectionCommand";
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
  DeleteConnectionCommand,
  DeleteConnectionCommandInput,
  DeleteConnectionCommandOutput,
} from "./commands/DeleteConnectionCommand";
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
  GetConnectionsCommand,
  GetConnectionsCommandInput,
  GetConnectionsCommandOutput,
} from "./commands/GetConnectionsCommand";
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
import { GetSitesCommand, GetSitesCommandInput, GetSitesCommandOutput } from "./commands/GetSitesCommand";
import {
  GetTransitGatewayConnectPeerAssociationsCommand,
  GetTransitGatewayConnectPeerAssociationsCommandInput,
  GetTransitGatewayConnectPeerAssociationsCommandOutput,
} from "./commands/GetTransitGatewayConnectPeerAssociationsCommand";
import {
  GetTransitGatewayRegistrationsCommand,
  GetTransitGatewayRegistrationsCommandInput,
  GetTransitGatewayRegistrationsCommandOutput,
} from "./commands/GetTransitGatewayRegistrationsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  RegisterTransitGatewayCommand,
  RegisterTransitGatewayCommandInput,
  RegisterTransitGatewayCommandOutput,
} from "./commands/RegisterTransitGatewayCommand";
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
import { UpdateSiteCommand, UpdateSiteCommandInput, UpdateSiteCommandOutput } from "./commands/UpdateSiteCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>Transit Gateway Network Manager (Network Manager) enables you to create a global network, in which you can monitor your
 *             AWS and on-premises networks that are built around transit gateways.</p>
 *         <p>The Network Manager APIs are supported in the US West (Oregon) Region only. You must specify the <code>us-west-2</code> Region in all requests made to Network Manager.</p>
 */
export class NetworkManager extends NetworkManagerClient {
  /**
   * <p>Associates a customer gateway with a device and optionally, with a link. If you
   *             specify a link, it must be associated with the specified device. </p>
   *         <p>You can only associate customer gateways that are connected to a VPN attachment on a
   *             transit gateway. The transit gateway must be registered in your global network. When
   *             you register a transit gateway, customer gateways that are connected to the transit
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
   *             (devices, links, and sites) and deregister all transit gateways.</p>
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
   * <p>Registers a transit gateway in your global network. The transit gateway can be in any
   *             AWS Region, but it must be owned by the same AWS account that owns the global network.
   *             You cannot register a transit gateway in more than one global network.</p>
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
}
