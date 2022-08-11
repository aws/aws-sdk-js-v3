// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  AcknowledgeOrderReceiptCommand,
  AcknowledgeOrderReceiptCommandInput,
  AcknowledgeOrderReceiptCommandOutput,
} from "./commands/AcknowledgeOrderReceiptCommand";
import {
  ActivateDeviceIdentifierCommand,
  ActivateDeviceIdentifierCommandInput,
  ActivateDeviceIdentifierCommandOutput,
} from "./commands/ActivateDeviceIdentifierCommand";
import {
  ActivateNetworkSiteCommand,
  ActivateNetworkSiteCommandInput,
  ActivateNetworkSiteCommandOutput,
} from "./commands/ActivateNetworkSiteCommand";
import {
  ConfigureAccessPointCommand,
  ConfigureAccessPointCommandInput,
  ConfigureAccessPointCommandOutput,
} from "./commands/ConfigureAccessPointCommand";
import {
  CreateNetworkCommand,
  CreateNetworkCommandInput,
  CreateNetworkCommandOutput,
} from "./commands/CreateNetworkCommand";
import {
  CreateNetworkSiteCommand,
  CreateNetworkSiteCommandInput,
  CreateNetworkSiteCommandOutput,
} from "./commands/CreateNetworkSiteCommand";
import {
  DeactivateDeviceIdentifierCommand,
  DeactivateDeviceIdentifierCommandInput,
  DeactivateDeviceIdentifierCommandOutput,
} from "./commands/DeactivateDeviceIdentifierCommand";
import {
  DeleteNetworkCommand,
  DeleteNetworkCommandInput,
  DeleteNetworkCommandOutput,
} from "./commands/DeleteNetworkCommand";
import {
  DeleteNetworkSiteCommand,
  DeleteNetworkSiteCommandInput,
  DeleteNetworkSiteCommandOutput,
} from "./commands/DeleteNetworkSiteCommand";
import {
  GetDeviceIdentifierCommand,
  GetDeviceIdentifierCommandInput,
  GetDeviceIdentifierCommandOutput,
} from "./commands/GetDeviceIdentifierCommand";
import { GetNetworkCommand, GetNetworkCommandInput, GetNetworkCommandOutput } from "./commands/GetNetworkCommand";
import {
  GetNetworkResourceCommand,
  GetNetworkResourceCommandInput,
  GetNetworkResourceCommandOutput,
} from "./commands/GetNetworkResourceCommand";
import {
  GetNetworkSiteCommand,
  GetNetworkSiteCommandInput,
  GetNetworkSiteCommandOutput,
} from "./commands/GetNetworkSiteCommand";
import { GetOrderCommand, GetOrderCommandInput, GetOrderCommandOutput } from "./commands/GetOrderCommand";
import {
  ListDeviceIdentifiersCommand,
  ListDeviceIdentifiersCommandInput,
  ListDeviceIdentifiersCommandOutput,
} from "./commands/ListDeviceIdentifiersCommand";
import {
  ListNetworkResourcesCommand,
  ListNetworkResourcesCommandInput,
  ListNetworkResourcesCommandOutput,
} from "./commands/ListNetworkResourcesCommand";
import {
  ListNetworksCommand,
  ListNetworksCommandInput,
  ListNetworksCommandOutput,
} from "./commands/ListNetworksCommand";
import {
  ListNetworkSitesCommand,
  ListNetworkSitesCommandInput,
  ListNetworkSitesCommandOutput,
} from "./commands/ListNetworkSitesCommand";
import { ListOrdersCommand, ListOrdersCommandInput, ListOrdersCommandOutput } from "./commands/ListOrdersCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { PingCommand, PingCommandInput, PingCommandOutput } from "./commands/PingCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateNetworkSiteCommand,
  UpdateNetworkSiteCommandInput,
  UpdateNetworkSiteCommandOutput,
} from "./commands/UpdateNetworkSiteCommand";
import {
  UpdateNetworkSitePlanCommand,
  UpdateNetworkSitePlanCommandInput,
  UpdateNetworkSitePlanCommandOutput,
} from "./commands/UpdateNetworkSitePlanCommand";
import { PrivateNetworksClient } from "./PrivateNetworksClient";

/**
 * <p>Amazon Web Services Private 5G is a managed service that makes it easy to deploy, operate, and scale
 *             your own private mobile network at your on-premises location. Private 5G provides the
 *             pre-configured hardware and software for mobile networks, helps automate setup, and
 *             scales capacity on demand to support additional devices as needed.</p>
 */
export class PrivateNetworks extends PrivateNetworksClient {
  /**
   * <p>Acknowledges that the specified network order was received.</p>
   */
  public acknowledgeOrderReceipt(
    args: AcknowledgeOrderReceiptCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AcknowledgeOrderReceiptCommandOutput>;
  public acknowledgeOrderReceipt(
    args: AcknowledgeOrderReceiptCommandInput,
    cb: (err: any, data?: AcknowledgeOrderReceiptCommandOutput) => void
  ): void;
  public acknowledgeOrderReceipt(
    args: AcknowledgeOrderReceiptCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcknowledgeOrderReceiptCommandOutput) => void
  ): void;
  public acknowledgeOrderReceipt(
    args: AcknowledgeOrderReceiptCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AcknowledgeOrderReceiptCommandOutput) => void),
    cb?: (err: any, data?: AcknowledgeOrderReceiptCommandOutput) => void
  ): Promise<AcknowledgeOrderReceiptCommandOutput> | void {
    const command = new AcknowledgeOrderReceiptCommand(args);
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
   * <p>Activates the specified device identifier.</p>
   */
  public activateDeviceIdentifier(
    args: ActivateDeviceIdentifierCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ActivateDeviceIdentifierCommandOutput>;
  public activateDeviceIdentifier(
    args: ActivateDeviceIdentifierCommandInput,
    cb: (err: any, data?: ActivateDeviceIdentifierCommandOutput) => void
  ): void;
  public activateDeviceIdentifier(
    args: ActivateDeviceIdentifierCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ActivateDeviceIdentifierCommandOutput) => void
  ): void;
  public activateDeviceIdentifier(
    args: ActivateDeviceIdentifierCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ActivateDeviceIdentifierCommandOutput) => void),
    cb?: (err: any, data?: ActivateDeviceIdentifierCommandOutput) => void
  ): Promise<ActivateDeviceIdentifierCommandOutput> | void {
    const command = new ActivateDeviceIdentifierCommand(args);
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
   * <p>Activates the specified network site.</p>
   */
  public activateNetworkSite(
    args: ActivateNetworkSiteCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ActivateNetworkSiteCommandOutput>;
  public activateNetworkSite(
    args: ActivateNetworkSiteCommandInput,
    cb: (err: any, data?: ActivateNetworkSiteCommandOutput) => void
  ): void;
  public activateNetworkSite(
    args: ActivateNetworkSiteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ActivateNetworkSiteCommandOutput) => void
  ): void;
  public activateNetworkSite(
    args: ActivateNetworkSiteCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ActivateNetworkSiteCommandOutput) => void),
    cb?: (err: any, data?: ActivateNetworkSiteCommandOutput) => void
  ): Promise<ActivateNetworkSiteCommandOutput> | void {
    const command = new ActivateNetworkSiteCommand(args);
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
   * <p>Configures the specified network resource.
   *         </p>
   *         <p>
   *             Use this action to specify the geographic
   *             position of the hardware. You must provide Certified Professional Installer (CPI)
   *             credentials in the request so that we can obtain spectrum grants. For more information,
   *             see <a href="https://docs.aws.amazon.com/private-networks/latest/userguide/radio-units.html">Radio
   *                 units</a> in the <i>Amazon Web Services Private 5G User Guide</i>. </p>
   */
  public configureAccessPoint(
    args: ConfigureAccessPointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ConfigureAccessPointCommandOutput>;
  public configureAccessPoint(
    args: ConfigureAccessPointCommandInput,
    cb: (err: any, data?: ConfigureAccessPointCommandOutput) => void
  ): void;
  public configureAccessPoint(
    args: ConfigureAccessPointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ConfigureAccessPointCommandOutput) => void
  ): void;
  public configureAccessPoint(
    args: ConfigureAccessPointCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ConfigureAccessPointCommandOutput) => void),
    cb?: (err: any, data?: ConfigureAccessPointCommandOutput) => void
  ): Promise<ConfigureAccessPointCommandOutput> | void {
    const command = new ConfigureAccessPointCommand(args);
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
   * <p>Creates a network.</p>
   */
  public createNetwork(
    args: CreateNetworkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateNetworkCommandOutput>;
  public createNetwork(
    args: CreateNetworkCommandInput,
    cb: (err: any, data?: CreateNetworkCommandOutput) => void
  ): void;
  public createNetwork(
    args: CreateNetworkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateNetworkCommandOutput) => void
  ): void;
  public createNetwork(
    args: CreateNetworkCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateNetworkCommandOutput) => void),
    cb?: (err: any, data?: CreateNetworkCommandOutput) => void
  ): Promise<CreateNetworkCommandOutput> | void {
    const command = new CreateNetworkCommand(args);
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
   * <p>Creates a network site.</p>
   */
  public createNetworkSite(
    args: CreateNetworkSiteCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateNetworkSiteCommandOutput>;
  public createNetworkSite(
    args: CreateNetworkSiteCommandInput,
    cb: (err: any, data?: CreateNetworkSiteCommandOutput) => void
  ): void;
  public createNetworkSite(
    args: CreateNetworkSiteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateNetworkSiteCommandOutput) => void
  ): void;
  public createNetworkSite(
    args: CreateNetworkSiteCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateNetworkSiteCommandOutput) => void),
    cb?: (err: any, data?: CreateNetworkSiteCommandOutput) => void
  ): Promise<CreateNetworkSiteCommandOutput> | void {
    const command = new CreateNetworkSiteCommand(args);
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
   * <p>Deactivates the specified device identifier.</p>
   */
  public deactivateDeviceIdentifier(
    args: DeactivateDeviceIdentifierCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeactivateDeviceIdentifierCommandOutput>;
  public deactivateDeviceIdentifier(
    args: DeactivateDeviceIdentifierCommandInput,
    cb: (err: any, data?: DeactivateDeviceIdentifierCommandOutput) => void
  ): void;
  public deactivateDeviceIdentifier(
    args: DeactivateDeviceIdentifierCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeactivateDeviceIdentifierCommandOutput) => void
  ): void;
  public deactivateDeviceIdentifier(
    args: DeactivateDeviceIdentifierCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeactivateDeviceIdentifierCommandOutput) => void),
    cb?: (err: any, data?: DeactivateDeviceIdentifierCommandOutput) => void
  ): Promise<DeactivateDeviceIdentifierCommandOutput> | void {
    const command = new DeactivateDeviceIdentifierCommand(args);
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
   * <p>Deletes the specified network. You must delete network sites before you delete the
   *             network. For more information, see
   *             <a href="https://docs.aws.amazon.com/private-networks/latest/APIReference/API_DeleteNetworkSite.html">DeleteNetworkSite</a> in the
   *             <i>API Reference for Amazon Web Services Private 5G</i>.</p>
   */
  public deleteNetwork(
    args: DeleteNetworkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteNetworkCommandOutput>;
  public deleteNetwork(
    args: DeleteNetworkCommandInput,
    cb: (err: any, data?: DeleteNetworkCommandOutput) => void
  ): void;
  public deleteNetwork(
    args: DeleteNetworkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteNetworkCommandOutput) => void
  ): void;
  public deleteNetwork(
    args: DeleteNetworkCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteNetworkCommandOutput) => void),
    cb?: (err: any, data?: DeleteNetworkCommandOutput) => void
  ): Promise<DeleteNetworkCommandOutput> | void {
    const command = new DeleteNetworkCommand(args);
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
   * <p>Deletes the specified network site. Return the hardware after you delete the network
   *             site. You are responsible for minimum charges. For more information, see <a href="https://docs.aws.amazon.com/private-networks/latest/userguide/hardware-maintenance.html">Hardware
   *                 returns</a> in the <i>Amazon Web Services Private 5G User
   *             Guide</i>. </p>
   */
  public deleteNetworkSite(
    args: DeleteNetworkSiteCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteNetworkSiteCommandOutput>;
  public deleteNetworkSite(
    args: DeleteNetworkSiteCommandInput,
    cb: (err: any, data?: DeleteNetworkSiteCommandOutput) => void
  ): void;
  public deleteNetworkSite(
    args: DeleteNetworkSiteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteNetworkSiteCommandOutput) => void
  ): void;
  public deleteNetworkSite(
    args: DeleteNetworkSiteCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteNetworkSiteCommandOutput) => void),
    cb?: (err: any, data?: DeleteNetworkSiteCommandOutput) => void
  ): Promise<DeleteNetworkSiteCommandOutput> | void {
    const command = new DeleteNetworkSiteCommand(args);
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
   * <p>Gets the specified device identifier.</p>
   */
  public getDeviceIdentifier(
    args: GetDeviceIdentifierCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDeviceIdentifierCommandOutput>;
  public getDeviceIdentifier(
    args: GetDeviceIdentifierCommandInput,
    cb: (err: any, data?: GetDeviceIdentifierCommandOutput) => void
  ): void;
  public getDeviceIdentifier(
    args: GetDeviceIdentifierCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeviceIdentifierCommandOutput) => void
  ): void;
  public getDeviceIdentifier(
    args: GetDeviceIdentifierCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDeviceIdentifierCommandOutput) => void),
    cb?: (err: any, data?: GetDeviceIdentifierCommandOutput) => void
  ): Promise<GetDeviceIdentifierCommandOutput> | void {
    const command = new GetDeviceIdentifierCommand(args);
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
   * <p>Gets the specified network.</p>
   */
  public getNetwork(args: GetNetworkCommandInput, options?: __HttpHandlerOptions): Promise<GetNetworkCommandOutput>;
  public getNetwork(args: GetNetworkCommandInput, cb: (err: any, data?: GetNetworkCommandOutput) => void): void;
  public getNetwork(
    args: GetNetworkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetNetworkCommandOutput) => void
  ): void;
  public getNetwork(
    args: GetNetworkCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetNetworkCommandOutput) => void),
    cb?: (err: any, data?: GetNetworkCommandOutput) => void
  ): Promise<GetNetworkCommandOutput> | void {
    const command = new GetNetworkCommand(args);
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
   * <p>Gets the specified network resource.</p>
   */
  public getNetworkResource(
    args: GetNetworkResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetNetworkResourceCommandOutput>;
  public getNetworkResource(
    args: GetNetworkResourceCommandInput,
    cb: (err: any, data?: GetNetworkResourceCommandOutput) => void
  ): void;
  public getNetworkResource(
    args: GetNetworkResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetNetworkResourceCommandOutput) => void
  ): void;
  public getNetworkResource(
    args: GetNetworkResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetNetworkResourceCommandOutput) => void),
    cb?: (err: any, data?: GetNetworkResourceCommandOutput) => void
  ): Promise<GetNetworkResourceCommandOutput> | void {
    const command = new GetNetworkResourceCommand(args);
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
   * <p>Gets the specified network site.</p>
   */
  public getNetworkSite(
    args: GetNetworkSiteCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetNetworkSiteCommandOutput>;
  public getNetworkSite(
    args: GetNetworkSiteCommandInput,
    cb: (err: any, data?: GetNetworkSiteCommandOutput) => void
  ): void;
  public getNetworkSite(
    args: GetNetworkSiteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetNetworkSiteCommandOutput) => void
  ): void;
  public getNetworkSite(
    args: GetNetworkSiteCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetNetworkSiteCommandOutput) => void),
    cb?: (err: any, data?: GetNetworkSiteCommandOutput) => void
  ): Promise<GetNetworkSiteCommandOutput> | void {
    const command = new GetNetworkSiteCommand(args);
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
   * <p>Gets the specified order.</p>
   */
  public getOrder(args: GetOrderCommandInput, options?: __HttpHandlerOptions): Promise<GetOrderCommandOutput>;
  public getOrder(args: GetOrderCommandInput, cb: (err: any, data?: GetOrderCommandOutput) => void): void;
  public getOrder(
    args: GetOrderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOrderCommandOutput) => void
  ): void;
  public getOrder(
    args: GetOrderCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetOrderCommandOutput) => void),
    cb?: (err: any, data?: GetOrderCommandOutput) => void
  ): Promise<GetOrderCommandOutput> | void {
    const command = new GetOrderCommand(args);
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
   * <p>Lists device identifiers. Add filters to your request to return a more
   *             specific list of results. Use filters to match the Amazon Resource Name (ARN) of an order,
   *             the status of device identifiers, or the ARN of the traffic group.</p>
   *
   *         <p>If you specify multiple filters, filters are joined with an OR, and the request
   * returns results that match all of the specified filters.</p>
   */
  public listDeviceIdentifiers(
    args: ListDeviceIdentifiersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDeviceIdentifiersCommandOutput>;
  public listDeviceIdentifiers(
    args: ListDeviceIdentifiersCommandInput,
    cb: (err: any, data?: ListDeviceIdentifiersCommandOutput) => void
  ): void;
  public listDeviceIdentifiers(
    args: ListDeviceIdentifiersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDeviceIdentifiersCommandOutput) => void
  ): void;
  public listDeviceIdentifiers(
    args: ListDeviceIdentifiersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDeviceIdentifiersCommandOutput) => void),
    cb?: (err: any, data?: ListDeviceIdentifiersCommandOutput) => void
  ): Promise<ListDeviceIdentifiersCommandOutput> | void {
    const command = new ListDeviceIdentifiersCommand(args);
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
   * <p>Lists network resources.  Add filters to your request to return a more
   *             specific list of results. Use filters to match the Amazon Resource Name (ARN) of an order or
   *             the status of network resources.</p>
   *         <p>If you specify multiple filters, filters are joined with an OR, and the request
   * returns results that match all of the specified filters.</p>
   */
  public listNetworkResources(
    args: ListNetworkResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListNetworkResourcesCommandOutput>;
  public listNetworkResources(
    args: ListNetworkResourcesCommandInput,
    cb: (err: any, data?: ListNetworkResourcesCommandOutput) => void
  ): void;
  public listNetworkResources(
    args: ListNetworkResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNetworkResourcesCommandOutput) => void
  ): void;
  public listNetworkResources(
    args: ListNetworkResourcesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListNetworkResourcesCommandOutput) => void),
    cb?: (err: any, data?: ListNetworkResourcesCommandOutput) => void
  ): Promise<ListNetworkResourcesCommandOutput> | void {
    const command = new ListNetworkResourcesCommand(args);
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
   * <p>Lists networks. Add filters to your request to return a more
   *             specific list of results. Use filters to match the status of the network.</p>
   */
  public listNetworks(
    args: ListNetworksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListNetworksCommandOutput>;
  public listNetworks(args: ListNetworksCommandInput, cb: (err: any, data?: ListNetworksCommandOutput) => void): void;
  public listNetworks(
    args: ListNetworksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNetworksCommandOutput) => void
  ): void;
  public listNetworks(
    args: ListNetworksCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListNetworksCommandOutput) => void),
    cb?: (err: any, data?: ListNetworksCommandOutput) => void
  ): Promise<ListNetworksCommandOutput> | void {
    const command = new ListNetworksCommand(args);
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
   * <p>Lists network sites. Add filters to your request to return a more
   *             specific list of results. Use filters to match the status of the network site.</p>
   */
  public listNetworkSites(
    args: ListNetworkSitesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListNetworkSitesCommandOutput>;
  public listNetworkSites(
    args: ListNetworkSitesCommandInput,
    cb: (err: any, data?: ListNetworkSitesCommandOutput) => void
  ): void;
  public listNetworkSites(
    args: ListNetworkSitesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNetworkSitesCommandOutput) => void
  ): void;
  public listNetworkSites(
    args: ListNetworkSitesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListNetworkSitesCommandOutput) => void),
    cb?: (err: any, data?: ListNetworkSitesCommandOutput) => void
  ): Promise<ListNetworkSitesCommandOutput> | void {
    const command = new ListNetworkSitesCommand(args);
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
   * <p>Lists orders.  Add filters to your request to return a more
   *             specific list of results. Use filters to match the Amazon Resource Name (ARN) of the network site or
   *             the status of the order.</p>
   *         <p>If you specify multiple filters, filters are joined with an OR, and the request
   * returns results that match all of the specified filters.</p>
   */
  public listOrders(args: ListOrdersCommandInput, options?: __HttpHandlerOptions): Promise<ListOrdersCommandOutput>;
  public listOrders(args: ListOrdersCommandInput, cb: (err: any, data?: ListOrdersCommandOutput) => void): void;
  public listOrders(
    args: ListOrdersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOrdersCommandOutput) => void
  ): void;
  public listOrders(
    args: ListOrdersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListOrdersCommandOutput) => void),
    cb?: (err: any, data?: ListOrdersCommandOutput) => void
  ): Promise<ListOrdersCommandOutput> | void {
    const command = new ListOrdersCommand(args);
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
   * <p>Lists the tags for the specified resource.</p>
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
   * <p>Checks the health of the service.</p>
   */
  public ping(args: PingCommandInput, options?: __HttpHandlerOptions): Promise<PingCommandOutput>;
  public ping(args: PingCommandInput, cb: (err: any, data?: PingCommandOutput) => void): void;
  public ping(
    args: PingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PingCommandOutput) => void
  ): void;
  public ping(
    args: PingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PingCommandOutput) => void),
    cb?: (err: any, data?: PingCommandOutput) => void
  ): Promise<PingCommandOutput> | void {
    const command = new PingCommand(args);
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
   * <p>
   *             Adds tags to the specified resource.
   *         </p>
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
   * <p>Removes tags from the specified resource.</p>
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
   * <p>Updates the specified network site.</p>
   */
  public updateNetworkSite(
    args: UpdateNetworkSiteCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateNetworkSiteCommandOutput>;
  public updateNetworkSite(
    args: UpdateNetworkSiteCommandInput,
    cb: (err: any, data?: UpdateNetworkSiteCommandOutput) => void
  ): void;
  public updateNetworkSite(
    args: UpdateNetworkSiteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateNetworkSiteCommandOutput) => void
  ): void;
  public updateNetworkSite(
    args: UpdateNetworkSiteCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateNetworkSiteCommandOutput) => void),
    cb?: (err: any, data?: UpdateNetworkSiteCommandOutput) => void
  ): Promise<UpdateNetworkSiteCommandOutput> | void {
    const command = new UpdateNetworkSiteCommand(args);
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
   * <p>Updates the specified network site plan.</p>
   */
  public updateNetworkSitePlan(
    args: UpdateNetworkSitePlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateNetworkSitePlanCommandOutput>;
  public updateNetworkSitePlan(
    args: UpdateNetworkSitePlanCommandInput,
    cb: (err: any, data?: UpdateNetworkSitePlanCommandOutput) => void
  ): void;
  public updateNetworkSitePlan(
    args: UpdateNetworkSitePlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateNetworkSitePlanCommandOutput) => void
  ): void;
  public updateNetworkSitePlan(
    args: UpdateNetworkSitePlanCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateNetworkSitePlanCommandOutput) => void),
    cb?: (err: any, data?: UpdateNetworkSitePlanCommandOutput) => void
  ): Promise<UpdateNetworkSitePlanCommandOutput> | void {
    const command = new UpdateNetworkSitePlanCommand(args);
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
