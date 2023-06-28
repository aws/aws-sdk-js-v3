// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

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
import {
  StartNetworkResourceUpdateCommand,
  StartNetworkResourceUpdateCommandInput,
  StartNetworkResourceUpdateCommandOutput,
} from "./commands/StartNetworkResourceUpdateCommand";
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
import { PrivateNetworksClient, PrivateNetworksClientConfig } from "./PrivateNetworksClient";

const commands = {
  AcknowledgeOrderReceiptCommand,
  ActivateDeviceIdentifierCommand,
  ActivateNetworkSiteCommand,
  ConfigureAccessPointCommand,
  CreateNetworkCommand,
  CreateNetworkSiteCommand,
  DeactivateDeviceIdentifierCommand,
  DeleteNetworkCommand,
  DeleteNetworkSiteCommand,
  GetDeviceIdentifierCommand,
  GetNetworkCommand,
  GetNetworkResourceCommand,
  GetNetworkSiteCommand,
  GetOrderCommand,
  ListDeviceIdentifiersCommand,
  ListNetworkResourcesCommand,
  ListNetworksCommand,
  ListNetworkSitesCommand,
  ListOrdersCommand,
  ListTagsForResourceCommand,
  PingCommand,
  StartNetworkResourceUpdateCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateNetworkSiteCommand,
  UpdateNetworkSitePlanCommand,
};

export interface PrivateNetworks {
  /**
   * @see {@link AcknowledgeOrderReceiptCommand}
   */
  acknowledgeOrderReceipt(
    args: AcknowledgeOrderReceiptCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AcknowledgeOrderReceiptCommandOutput>;
  acknowledgeOrderReceipt(
    args: AcknowledgeOrderReceiptCommandInput,
    cb: (err: any, data?: AcknowledgeOrderReceiptCommandOutput) => void
  ): void;
  acknowledgeOrderReceipt(
    args: AcknowledgeOrderReceiptCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcknowledgeOrderReceiptCommandOutput) => void
  ): void;

  /**
   * @see {@link ActivateDeviceIdentifierCommand}
   */
  activateDeviceIdentifier(
    args: ActivateDeviceIdentifierCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ActivateDeviceIdentifierCommandOutput>;
  activateDeviceIdentifier(
    args: ActivateDeviceIdentifierCommandInput,
    cb: (err: any, data?: ActivateDeviceIdentifierCommandOutput) => void
  ): void;
  activateDeviceIdentifier(
    args: ActivateDeviceIdentifierCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ActivateDeviceIdentifierCommandOutput) => void
  ): void;

  /**
   * @see {@link ActivateNetworkSiteCommand}
   */
  activateNetworkSite(
    args: ActivateNetworkSiteCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ActivateNetworkSiteCommandOutput>;
  activateNetworkSite(
    args: ActivateNetworkSiteCommandInput,
    cb: (err: any, data?: ActivateNetworkSiteCommandOutput) => void
  ): void;
  activateNetworkSite(
    args: ActivateNetworkSiteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ActivateNetworkSiteCommandOutput) => void
  ): void;

  /**
   * @see {@link ConfigureAccessPointCommand}
   */
  configureAccessPoint(
    args: ConfigureAccessPointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ConfigureAccessPointCommandOutput>;
  configureAccessPoint(
    args: ConfigureAccessPointCommandInput,
    cb: (err: any, data?: ConfigureAccessPointCommandOutput) => void
  ): void;
  configureAccessPoint(
    args: ConfigureAccessPointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ConfigureAccessPointCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateNetworkCommand}
   */
  createNetwork(args: CreateNetworkCommandInput, options?: __HttpHandlerOptions): Promise<CreateNetworkCommandOutput>;
  createNetwork(args: CreateNetworkCommandInput, cb: (err: any, data?: CreateNetworkCommandOutput) => void): void;
  createNetwork(
    args: CreateNetworkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateNetworkCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateNetworkSiteCommand}
   */
  createNetworkSite(
    args: CreateNetworkSiteCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateNetworkSiteCommandOutput>;
  createNetworkSite(
    args: CreateNetworkSiteCommandInput,
    cb: (err: any, data?: CreateNetworkSiteCommandOutput) => void
  ): void;
  createNetworkSite(
    args: CreateNetworkSiteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateNetworkSiteCommandOutput) => void
  ): void;

  /**
   * @see {@link DeactivateDeviceIdentifierCommand}
   */
  deactivateDeviceIdentifier(
    args: DeactivateDeviceIdentifierCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeactivateDeviceIdentifierCommandOutput>;
  deactivateDeviceIdentifier(
    args: DeactivateDeviceIdentifierCommandInput,
    cb: (err: any, data?: DeactivateDeviceIdentifierCommandOutput) => void
  ): void;
  deactivateDeviceIdentifier(
    args: DeactivateDeviceIdentifierCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeactivateDeviceIdentifierCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteNetworkCommand}
   */
  deleteNetwork(args: DeleteNetworkCommandInput, options?: __HttpHandlerOptions): Promise<DeleteNetworkCommandOutput>;
  deleteNetwork(args: DeleteNetworkCommandInput, cb: (err: any, data?: DeleteNetworkCommandOutput) => void): void;
  deleteNetwork(
    args: DeleteNetworkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteNetworkCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteNetworkSiteCommand}
   */
  deleteNetworkSite(
    args: DeleteNetworkSiteCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteNetworkSiteCommandOutput>;
  deleteNetworkSite(
    args: DeleteNetworkSiteCommandInput,
    cb: (err: any, data?: DeleteNetworkSiteCommandOutput) => void
  ): void;
  deleteNetworkSite(
    args: DeleteNetworkSiteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteNetworkSiteCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDeviceIdentifierCommand}
   */
  getDeviceIdentifier(
    args: GetDeviceIdentifierCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDeviceIdentifierCommandOutput>;
  getDeviceIdentifier(
    args: GetDeviceIdentifierCommandInput,
    cb: (err: any, data?: GetDeviceIdentifierCommandOutput) => void
  ): void;
  getDeviceIdentifier(
    args: GetDeviceIdentifierCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeviceIdentifierCommandOutput) => void
  ): void;

  /**
   * @see {@link GetNetworkCommand}
   */
  getNetwork(args: GetNetworkCommandInput, options?: __HttpHandlerOptions): Promise<GetNetworkCommandOutput>;
  getNetwork(args: GetNetworkCommandInput, cb: (err: any, data?: GetNetworkCommandOutput) => void): void;
  getNetwork(
    args: GetNetworkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetNetworkCommandOutput) => void
  ): void;

  /**
   * @see {@link GetNetworkResourceCommand}
   */
  getNetworkResource(
    args: GetNetworkResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetNetworkResourceCommandOutput>;
  getNetworkResource(
    args: GetNetworkResourceCommandInput,
    cb: (err: any, data?: GetNetworkResourceCommandOutput) => void
  ): void;
  getNetworkResource(
    args: GetNetworkResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetNetworkResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetNetworkSiteCommand}
   */
  getNetworkSite(
    args: GetNetworkSiteCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetNetworkSiteCommandOutput>;
  getNetworkSite(args: GetNetworkSiteCommandInput, cb: (err: any, data?: GetNetworkSiteCommandOutput) => void): void;
  getNetworkSite(
    args: GetNetworkSiteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetNetworkSiteCommandOutput) => void
  ): void;

  /**
   * @see {@link GetOrderCommand}
   */
  getOrder(args: GetOrderCommandInput, options?: __HttpHandlerOptions): Promise<GetOrderCommandOutput>;
  getOrder(args: GetOrderCommandInput, cb: (err: any, data?: GetOrderCommandOutput) => void): void;
  getOrder(
    args: GetOrderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOrderCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDeviceIdentifiersCommand}
   */
  listDeviceIdentifiers(
    args: ListDeviceIdentifiersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDeviceIdentifiersCommandOutput>;
  listDeviceIdentifiers(
    args: ListDeviceIdentifiersCommandInput,
    cb: (err: any, data?: ListDeviceIdentifiersCommandOutput) => void
  ): void;
  listDeviceIdentifiers(
    args: ListDeviceIdentifiersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDeviceIdentifiersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListNetworkResourcesCommand}
   */
  listNetworkResources(
    args: ListNetworkResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListNetworkResourcesCommandOutput>;
  listNetworkResources(
    args: ListNetworkResourcesCommandInput,
    cb: (err: any, data?: ListNetworkResourcesCommandOutput) => void
  ): void;
  listNetworkResources(
    args: ListNetworkResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNetworkResourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListNetworksCommand}
   */
  listNetworks(args: ListNetworksCommandInput, options?: __HttpHandlerOptions): Promise<ListNetworksCommandOutput>;
  listNetworks(args: ListNetworksCommandInput, cb: (err: any, data?: ListNetworksCommandOutput) => void): void;
  listNetworks(
    args: ListNetworksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNetworksCommandOutput) => void
  ): void;

  /**
   * @see {@link ListNetworkSitesCommand}
   */
  listNetworkSites(
    args: ListNetworkSitesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListNetworkSitesCommandOutput>;
  listNetworkSites(
    args: ListNetworkSitesCommandInput,
    cb: (err: any, data?: ListNetworkSitesCommandOutput) => void
  ): void;
  listNetworkSites(
    args: ListNetworkSitesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNetworkSitesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListOrdersCommand}
   */
  listOrders(args: ListOrdersCommandInput, options?: __HttpHandlerOptions): Promise<ListOrdersCommandOutput>;
  listOrders(args: ListOrdersCommandInput, cb: (err: any, data?: ListOrdersCommandOutput) => void): void;
  listOrders(
    args: ListOrdersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOrdersCommandOutput) => void
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
   * @see {@link PingCommand}
   */
  ping(args: PingCommandInput, options?: __HttpHandlerOptions): Promise<PingCommandOutput>;
  ping(args: PingCommandInput, cb: (err: any, data?: PingCommandOutput) => void): void;
  ping(args: PingCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PingCommandOutput) => void): void;

  /**
   * @see {@link StartNetworkResourceUpdateCommand}
   */
  startNetworkResourceUpdate(
    args: StartNetworkResourceUpdateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartNetworkResourceUpdateCommandOutput>;
  startNetworkResourceUpdate(
    args: StartNetworkResourceUpdateCommandInput,
    cb: (err: any, data?: StartNetworkResourceUpdateCommandOutput) => void
  ): void;
  startNetworkResourceUpdate(
    args: StartNetworkResourceUpdateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartNetworkResourceUpdateCommandOutput) => void
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
   * @see {@link UpdateNetworkSiteCommand}
   */
  updateNetworkSite(
    args: UpdateNetworkSiteCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateNetworkSiteCommandOutput>;
  updateNetworkSite(
    args: UpdateNetworkSiteCommandInput,
    cb: (err: any, data?: UpdateNetworkSiteCommandOutput) => void
  ): void;
  updateNetworkSite(
    args: UpdateNetworkSiteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateNetworkSiteCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateNetworkSitePlanCommand}
   */
  updateNetworkSitePlan(
    args: UpdateNetworkSitePlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateNetworkSitePlanCommandOutput>;
  updateNetworkSitePlan(
    args: UpdateNetworkSitePlanCommandInput,
    cb: (err: any, data?: UpdateNetworkSitePlanCommandOutput) => void
  ): void;
  updateNetworkSitePlan(
    args: UpdateNetworkSitePlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateNetworkSitePlanCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>Amazon Web Services Private 5G is a managed service that makes it easy to deploy, operate, and scale
 *             your own private mobile network at your on-premises location. Private 5G provides the
 *             pre-configured hardware and software for mobile networks, helps automate setup, and
 *             scales capacity on demand to support additional devices as needed.</p>
 */
export class PrivateNetworks extends PrivateNetworksClient implements PrivateNetworks {}
createAggregatedClient(commands, PrivateNetworks);
