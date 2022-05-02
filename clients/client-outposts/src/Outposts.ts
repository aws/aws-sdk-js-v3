import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import { CancelOrderCommand, CancelOrderCommandInput, CancelOrderCommandOutput } from "./commands/CancelOrderCommand";
import { CreateOrderCommand, CreateOrderCommandInput, CreateOrderCommandOutput } from "./commands/CreateOrderCommand";
import {
  CreateOutpostCommand,
  CreateOutpostCommandInput,
  CreateOutpostCommandOutput,
} from "./commands/CreateOutpostCommand";
import { CreateSiteCommand, CreateSiteCommandInput, CreateSiteCommandOutput } from "./commands/CreateSiteCommand";
import {
  DeleteOutpostCommand,
  DeleteOutpostCommandInput,
  DeleteOutpostCommandOutput,
} from "./commands/DeleteOutpostCommand";
import { DeleteSiteCommand, DeleteSiteCommandInput, DeleteSiteCommandOutput } from "./commands/DeleteSiteCommand";
import {
  GetCatalogItemCommand,
  GetCatalogItemCommandInput,
  GetCatalogItemCommandOutput,
} from "./commands/GetCatalogItemCommand";
import { GetOrderCommand, GetOrderCommandInput, GetOrderCommandOutput } from "./commands/GetOrderCommand";
import { GetOutpostCommand, GetOutpostCommandInput, GetOutpostCommandOutput } from "./commands/GetOutpostCommand";
import {
  GetOutpostInstanceTypesCommand,
  GetOutpostInstanceTypesCommandInput,
  GetOutpostInstanceTypesCommandOutput,
} from "./commands/GetOutpostInstanceTypesCommand";
import {
  GetSiteAddressCommand,
  GetSiteAddressCommandInput,
  GetSiteAddressCommandOutput,
} from "./commands/GetSiteAddressCommand";
import { GetSiteCommand, GetSiteCommandInput, GetSiteCommandOutput } from "./commands/GetSiteCommand";
import { ListAssetsCommand, ListAssetsCommandInput, ListAssetsCommandOutput } from "./commands/ListAssetsCommand";
import {
  ListCatalogItemsCommand,
  ListCatalogItemsCommandInput,
  ListCatalogItemsCommandOutput,
} from "./commands/ListCatalogItemsCommand";
import { ListOrdersCommand, ListOrdersCommandInput, ListOrdersCommandOutput } from "./commands/ListOrdersCommand";
import {
  ListOutpostsCommand,
  ListOutpostsCommandInput,
  ListOutpostsCommandOutput,
} from "./commands/ListOutpostsCommand";
import { ListSitesCommand, ListSitesCommandInput, ListSitesCommandOutput } from "./commands/ListSitesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateOutpostCommand,
  UpdateOutpostCommandInput,
  UpdateOutpostCommandOutput,
} from "./commands/UpdateOutpostCommand";
import {
  UpdateSiteAddressCommand,
  UpdateSiteAddressCommandInput,
  UpdateSiteAddressCommandOutput,
} from "./commands/UpdateSiteAddressCommand";
import { UpdateSiteCommand, UpdateSiteCommandInput, UpdateSiteCommandOutput } from "./commands/UpdateSiteCommand";
import {
  UpdateSiteRackPhysicalPropertiesCommand,
  UpdateSiteRackPhysicalPropertiesCommandInput,
  UpdateSiteRackPhysicalPropertiesCommandOutput,
} from "./commands/UpdateSiteRackPhysicalPropertiesCommand";
import { OutpostsClient } from "./OutpostsClient";

/**
 * <p>Amazon Web Services Outposts is a fully managed service that extends Amazon Web Services infrastructure, APIs, and tools
 *       to customer premises. By providing local access to Amazon Web Services managed infrastructure, Amazon Web Services Outposts
 *       enables customers to build and run applications on premises using the same programming
 *       interfaces as in Amazon Web Services Regions, while using local compute and storage resources for lower
 *       latency and local data processing needs.</p>
 */
export class Outposts extends OutpostsClient {
  /**
   * <p>
   *       Cancels an order for an Outpost.
   *     </p>
   */
  public cancelOrder(args: CancelOrderCommandInput, options?: __HttpHandlerOptions): Promise<CancelOrderCommandOutput>;
  public cancelOrder(args: CancelOrderCommandInput, cb: (err: any, data?: CancelOrderCommandOutput) => void): void;
  public cancelOrder(
    args: CancelOrderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelOrderCommandOutput) => void
  ): void;
  public cancelOrder(
    args: CancelOrderCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CancelOrderCommandOutput) => void),
    cb?: (err: any, data?: CancelOrderCommandOutput) => void
  ): Promise<CancelOrderCommandOutput> | void {
    const command = new CancelOrderCommand(args);
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
   * <p>Creates an order for an Outpost.</p>
   */
  public createOrder(args: CreateOrderCommandInput, options?: __HttpHandlerOptions): Promise<CreateOrderCommandOutput>;
  public createOrder(args: CreateOrderCommandInput, cb: (err: any, data?: CreateOrderCommandOutput) => void): void;
  public createOrder(
    args: CreateOrderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateOrderCommandOutput) => void
  ): void;
  public createOrder(
    args: CreateOrderCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateOrderCommandOutput) => void),
    cb?: (err: any, data?: CreateOrderCommandOutput) => void
  ): Promise<CreateOrderCommandOutput> | void {
    const command = new CreateOrderCommand(args);
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
   * <p>Creates an Outpost.</p>
   *          <p>You can specify <code>AvailabilityZone</code> or <code>AvailabilityZoneId</code>.</p>
   */
  public createOutpost(
    args: CreateOutpostCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateOutpostCommandOutput>;
  public createOutpost(
    args: CreateOutpostCommandInput,
    cb: (err: any, data?: CreateOutpostCommandOutput) => void
  ): void;
  public createOutpost(
    args: CreateOutpostCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateOutpostCommandOutput) => void
  ): void;
  public createOutpost(
    args: CreateOutpostCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateOutpostCommandOutput) => void),
    cb?: (err: any, data?: CreateOutpostCommandOutput) => void
  ): Promise<CreateOutpostCommandOutput> | void {
    const command = new CreateOutpostCommand(args);
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
   *       Creates a site for an Outpost.
   *     </p>
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
   * <p>Deletes the Outpost.</p>
   */
  public deleteOutpost(
    args: DeleteOutpostCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteOutpostCommandOutput>;
  public deleteOutpost(
    args: DeleteOutpostCommandInput,
    cb: (err: any, data?: DeleteOutpostCommandOutput) => void
  ): void;
  public deleteOutpost(
    args: DeleteOutpostCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteOutpostCommandOutput) => void
  ): void;
  public deleteOutpost(
    args: DeleteOutpostCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteOutpostCommandOutput) => void),
    cb?: (err: any, data?: DeleteOutpostCommandOutput) => void
  ): Promise<DeleteOutpostCommandOutput> | void {
    const command = new DeleteOutpostCommand(args);
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
   * <p>Deletes the site.</p>
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
   * <p>Gets information about a catalog item.</p>
   */
  public getCatalogItem(
    args: GetCatalogItemCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCatalogItemCommandOutput>;
  public getCatalogItem(
    args: GetCatalogItemCommandInput,
    cb: (err: any, data?: GetCatalogItemCommandOutput) => void
  ): void;
  public getCatalogItem(
    args: GetCatalogItemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCatalogItemCommandOutput) => void
  ): void;
  public getCatalogItem(
    args: GetCatalogItemCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetCatalogItemCommandOutput) => void),
    cb?: (err: any, data?: GetCatalogItemCommandOutput) => void
  ): Promise<GetCatalogItemCommandOutput> | void {
    const command = new GetCatalogItemCommand(args);
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
   * <p>Gets an order.</p>
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
   * <p>Gets information about the specified Outpost.</p>
   */
  public getOutpost(args: GetOutpostCommandInput, options?: __HttpHandlerOptions): Promise<GetOutpostCommandOutput>;
  public getOutpost(args: GetOutpostCommandInput, cb: (err: any, data?: GetOutpostCommandOutput) => void): void;
  public getOutpost(
    args: GetOutpostCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOutpostCommandOutput) => void
  ): void;
  public getOutpost(
    args: GetOutpostCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetOutpostCommandOutput) => void),
    cb?: (err: any, data?: GetOutpostCommandOutput) => void
  ): Promise<GetOutpostCommandOutput> | void {
    const command = new GetOutpostCommand(args);
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
   * <p>Gets the instance types for the specified Outpost.</p>
   */
  public getOutpostInstanceTypes(
    args: GetOutpostInstanceTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetOutpostInstanceTypesCommandOutput>;
  public getOutpostInstanceTypes(
    args: GetOutpostInstanceTypesCommandInput,
    cb: (err: any, data?: GetOutpostInstanceTypesCommandOutput) => void
  ): void;
  public getOutpostInstanceTypes(
    args: GetOutpostInstanceTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOutpostInstanceTypesCommandOutput) => void
  ): void;
  public getOutpostInstanceTypes(
    args: GetOutpostInstanceTypesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetOutpostInstanceTypesCommandOutput) => void),
    cb?: (err: any, data?: GetOutpostInstanceTypesCommandOutput) => void
  ): Promise<GetOutpostInstanceTypesCommandOutput> | void {
    const command = new GetOutpostInstanceTypesCommand(args);
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
   *       Gets information about the specified Outpost site.
   *     </p>
   */
  public getSite(args: GetSiteCommandInput, options?: __HttpHandlerOptions): Promise<GetSiteCommandOutput>;
  public getSite(args: GetSiteCommandInput, cb: (err: any, data?: GetSiteCommandOutput) => void): void;
  public getSite(
    args: GetSiteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSiteCommandOutput) => void
  ): void;
  public getSite(
    args: GetSiteCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSiteCommandOutput) => void),
    cb?: (err: any, data?: GetSiteCommandOutput) => void
  ): Promise<GetSiteCommandOutput> | void {
    const command = new GetSiteCommand(args);
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
   *       Gets the site address.
   *     </p>
   */
  public getSiteAddress(
    args: GetSiteAddressCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSiteAddressCommandOutput>;
  public getSiteAddress(
    args: GetSiteAddressCommandInput,
    cb: (err: any, data?: GetSiteAddressCommandOutput) => void
  ): void;
  public getSiteAddress(
    args: GetSiteAddressCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSiteAddressCommandOutput) => void
  ): void;
  public getSiteAddress(
    args: GetSiteAddressCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSiteAddressCommandOutput) => void),
    cb?: (err: any, data?: GetSiteAddressCommandOutput) => void
  ): Promise<GetSiteAddressCommandOutput> | void {
    const command = new GetSiteAddressCommand(args);
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
   *       Lists the hardware assets in an Outpost. If you are using Dedicated Hosts on
   *       Amazon Web Services Outposts, you can filter your request by host ID to return a list of hardware
   *       assets that allocate resources for Dedicated Hosts.
   *     </p>
   */
  public listAssets(args: ListAssetsCommandInput, options?: __HttpHandlerOptions): Promise<ListAssetsCommandOutput>;
  public listAssets(args: ListAssetsCommandInput, cb: (err: any, data?: ListAssetsCommandOutput) => void): void;
  public listAssets(
    args: ListAssetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssetsCommandOutput) => void
  ): void;
  public listAssets(
    args: ListAssetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAssetsCommandOutput) => void),
    cb?: (err: any, data?: ListAssetsCommandOutput) => void
  ): Promise<ListAssetsCommandOutput> | void {
    const command = new ListAssetsCommand(args);
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
   * <p>Lists the items in the catalog. Add filters to your request to return a
   *       more specific list of results. Use filters to match an item class, storage
   *       option, or EC2 family. </p>
   *          <p>If you specify multiple filters, the filters are joined with an <code>AND</code>, and
   *       the request returns only results that match all of the specified filters.</p>
   */
  public listCatalogItems(
    args: ListCatalogItemsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCatalogItemsCommandOutput>;
  public listCatalogItems(
    args: ListCatalogItemsCommandInput,
    cb: (err: any, data?: ListCatalogItemsCommandOutput) => void
  ): void;
  public listCatalogItems(
    args: ListCatalogItemsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCatalogItemsCommandOutput) => void
  ): void;
  public listCatalogItems(
    args: ListCatalogItemsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListCatalogItemsCommandOutput) => void),
    cb?: (err: any, data?: ListCatalogItemsCommandOutput) => void
  ): Promise<ListCatalogItemsCommandOutput> | void {
    const command = new ListCatalogItemsCommand(args);
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
   * <p>Lists the Outpost orders for your Amazon Web Services account. You can filter your request by Outpost to
   *       return a more specific list of results. </p>
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
   * <p>Lists the Outposts for your Amazon Web Services account. Add filters to your request to return
   *       a more specific list of results. Use filters to match an Outpost lifecycle status,
   *       Availability Zone (<code>us-east-1a</code>), and AZ ID (<code>use1-az1</code>). </p>
   *
   *          <p>If you specify multiple filters, the filters are joined with an <code>AND</code>, and the request returns only
   *       results that match all of the specified filters.</p>
   */
  public listOutposts(
    args: ListOutpostsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOutpostsCommandOutput>;
  public listOutposts(args: ListOutpostsCommandInput, cb: (err: any, data?: ListOutpostsCommandOutput) => void): void;
  public listOutposts(
    args: ListOutpostsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOutpostsCommandOutput) => void
  ): void;
  public listOutposts(
    args: ListOutpostsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListOutpostsCommandOutput) => void),
    cb?: (err: any, data?: ListOutpostsCommandOutput) => void
  ): Promise<ListOutpostsCommandOutput> | void {
    const command = new ListOutpostsCommand(args);
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
   * <p>Lists the Outpost sites for your Amazon Web Services account. Add operating address filters to your request to
   *       return a more specific list of results. Use filters to match site city, country code, or state/region of the
   *       operating address. </p>
   *
   *          <p>If you specify multiple filters, the filters are joined with an <code>AND</code>, and the request returns only
   *       results that match all of the specified filters.</p>
   */
  public listSites(args: ListSitesCommandInput, options?: __HttpHandlerOptions): Promise<ListSitesCommandOutput>;
  public listSites(args: ListSitesCommandInput, cb: (err: any, data?: ListSitesCommandOutput) => void): void;
  public listSites(
    args: ListSitesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSitesCommandOutput) => void
  ): void;
  public listSites(
    args: ListSitesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSitesCommandOutput) => void),
    cb?: (err: any, data?: ListSitesCommandOutput) => void
  ): Promise<ListSitesCommandOutput> | void {
    const command = new ListSitesCommand(args);
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
   * <p>Adds tags to the specified resource.</p>
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
   * <p>
   *       Updates an Outpost.
   *     </p>
   */
  public updateOutpost(
    args: UpdateOutpostCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateOutpostCommandOutput>;
  public updateOutpost(
    args: UpdateOutpostCommandInput,
    cb: (err: any, data?: UpdateOutpostCommandOutput) => void
  ): void;
  public updateOutpost(
    args: UpdateOutpostCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateOutpostCommandOutput) => void
  ): void;
  public updateOutpost(
    args: UpdateOutpostCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateOutpostCommandOutput) => void),
    cb?: (err: any, data?: UpdateOutpostCommandOutput) => void
  ): Promise<UpdateOutpostCommandOutput> | void {
    const command = new UpdateOutpostCommand(args);
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
   *       Updates the site.
   *     </p>
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
   * <p>
   *       Updates the site address.
   *     </p>
   *          <p>
   *       To update a site address
   *       with an order <code>IN_PROGRESS</code>, you must wait for the order
   *       to complete or cancel the order.
   *     </p>
   *          <p>You
   *       can update the operating address before you place an order at the
   *       site, or after all Outposts that belong to the site have been deactivated.
   *     </p>
   */
  public updateSiteAddress(
    args: UpdateSiteAddressCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSiteAddressCommandOutput>;
  public updateSiteAddress(
    args: UpdateSiteAddressCommandInput,
    cb: (err: any, data?: UpdateSiteAddressCommandOutput) => void
  ): void;
  public updateSiteAddress(
    args: UpdateSiteAddressCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSiteAddressCommandOutput) => void
  ): void;
  public updateSiteAddress(
    args: UpdateSiteAddressCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateSiteAddressCommandOutput) => void),
    cb?: (err: any, data?: UpdateSiteAddressCommandOutput) => void
  ): Promise<UpdateSiteAddressCommandOutput> | void {
    const command = new UpdateSiteAddressCommand(args);
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
   * <p>Update the physical and logistical details for a rack at a site. For more information
   *       about hardware requirements for racks, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/outposts-requirements.html#checklist">Network
   *         readiness checklist</a> in the Amazon Web Services Outposts User Guide.
   *          </p>
   *          <p>To update a rack at a site with an order of <code>IN_PROGRESS</code>, you must wait for
   *       the order to complete or cancel the order.</p>
   */
  public updateSiteRackPhysicalProperties(
    args: UpdateSiteRackPhysicalPropertiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSiteRackPhysicalPropertiesCommandOutput>;
  public updateSiteRackPhysicalProperties(
    args: UpdateSiteRackPhysicalPropertiesCommandInput,
    cb: (err: any, data?: UpdateSiteRackPhysicalPropertiesCommandOutput) => void
  ): void;
  public updateSiteRackPhysicalProperties(
    args: UpdateSiteRackPhysicalPropertiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSiteRackPhysicalPropertiesCommandOutput) => void
  ): void;
  public updateSiteRackPhysicalProperties(
    args: UpdateSiteRackPhysicalPropertiesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateSiteRackPhysicalPropertiesCommandOutput) => void),
    cb?: (err: any, data?: UpdateSiteRackPhysicalPropertiesCommandOutput) => void
  ): Promise<UpdateSiteRackPhysicalPropertiesCommandOutput> | void {
    const command = new UpdateSiteRackPhysicalPropertiesCommand(args);
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
