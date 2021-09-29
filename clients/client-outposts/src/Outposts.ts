import { OutpostsClient } from "./OutpostsClient";
import { CreateOrderCommand, CreateOrderCommandInput, CreateOrderCommandOutput } from "./commands/CreateOrderCommand";
import {
  CreateOutpostCommand,
  CreateOutpostCommandInput,
  CreateOutpostCommandOutput,
} from "./commands/CreateOutpostCommand";
import {
  DeleteOutpostCommand,
  DeleteOutpostCommandInput,
  DeleteOutpostCommandOutput,
} from "./commands/DeleteOutpostCommand";
import { DeleteSiteCommand, DeleteSiteCommandInput, DeleteSiteCommandOutput } from "./commands/DeleteSiteCommand";
import { GetOutpostCommand, GetOutpostCommandInput, GetOutpostCommandOutput } from "./commands/GetOutpostCommand";
import {
  GetOutpostInstanceTypesCommand,
  GetOutpostInstanceTypesCommandInput,
  GetOutpostInstanceTypesCommandOutput,
} from "./commands/GetOutpostInstanceTypesCommand";
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
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>AWS Outposts is a fully managed service that extends AWS infrastructure, APIs, and tools
 *       to customer premises. By providing local access to AWS managed infrastructure, AWS Outposts
 *       enables customers to build and run applications on premises using the same programming
 *       interfaces as in AWS Regions, while using local compute and storage resources for lower
 *       latency and local data processing needs.</p>
 */
export class Outposts extends OutpostsClient {
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
   * <p>Lists the instance types for the specified Outpost.</p>
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
   * <p>Create a list of the Outposts for your AWS account. Add filters to your request to return
   *       a more specific list of results. Use filters to match an Outpost lifecycle status,
   *       Availibility Zone (<code>us-east-1a</code>), and AZ ID (<code>use1-az1</code>). </p>
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
   * <p>Lists the sites for the specified AWS account.</p>
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
}
