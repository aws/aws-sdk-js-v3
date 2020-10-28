import { OutpostsClient } from "./OutpostsClient";
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
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>AWS Outposts is a fully-managed service that extends AWS infrastructure,
 *       APIs, and tools to customer premises. By providing local access to AWS-managed
 *       infrastructure, AWS Outposts enables customers to build and run applications
 *       on premises using the same programming interfaces as in AWS Regions, while
 *       using local compute and storage resources for lower latency and local data
 *       processing needs.</p>
 */
export class Outposts extends OutpostsClient {
  /**
   * <p>Creates an Outpost.</p>
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
   * <p>List the Outposts for your AWS account.</p>
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
}
