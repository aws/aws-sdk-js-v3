import { IoTSecureTunnelingClient } from "./IoTSecureTunnelingClient";
import { CloseTunnelCommand, CloseTunnelCommandInput, CloseTunnelCommandOutput } from "./commands/CloseTunnelCommand";
import {
  DescribeTunnelCommand,
  DescribeTunnelCommandInput,
  DescribeTunnelCommandOutput,
} from "./commands/DescribeTunnelCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListTunnelsCommand, ListTunnelsCommandInput, ListTunnelsCommandOutput } from "./commands/ListTunnelsCommand";
import { OpenTunnelCommand, OpenTunnelCommandInput, OpenTunnelCommandOutput } from "./commands/OpenTunnelCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <fullname>AWS IoT Secure Tunneling</fullname>
 * 		       <p>AWS IoT Secure Tunnling enables you to create remote connections to devices
 * 			deployed in the field.</p>
 * 		       <p>For more information about how AWS IoT Secure Tunneling works, see the <a href="https://docs.aws.amazon.com/secure-tunneling/latest/ug/what-is-secure-tunneling.html">User
 * 			Guide</a>.</p>
 */
export class IoTSecureTunneling extends IoTSecureTunnelingClient {
  /**
   * <p>Closes a tunnel identified by the unique tunnel id. When a <code>CloseTunnel</code>
   * 			request is received, we close the WebSocket connections between the client and proxy
   * 			server so no data can be transmitted.</p>
   */
  public closeTunnel(args: CloseTunnelCommandInput, options?: __HttpHandlerOptions): Promise<CloseTunnelCommandOutput>;
  public closeTunnel(args: CloseTunnelCommandInput, cb: (err: any, data?: CloseTunnelCommandOutput) => void): void;
  public closeTunnel(
    args: CloseTunnelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CloseTunnelCommandOutput) => void
  ): void;
  public closeTunnel(
    args: CloseTunnelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CloseTunnelCommandOutput) => void),
    cb?: (err: any, data?: CloseTunnelCommandOutput) => void
  ): Promise<CloseTunnelCommandOutput> | void {
    const command = new CloseTunnelCommand(args);
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
   * <p>Gets information about a tunnel identified by the unique tunnel id.</p>
   */
  public describeTunnel(
    args: DescribeTunnelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTunnelCommandOutput>;
  public describeTunnel(
    args: DescribeTunnelCommandInput,
    cb: (err: any, data?: DescribeTunnelCommandOutput) => void
  ): void;
  public describeTunnel(
    args: DescribeTunnelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTunnelCommandOutput) => void
  ): void;
  public describeTunnel(
    args: DescribeTunnelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeTunnelCommandOutput) => void),
    cb?: (err: any, data?: DescribeTunnelCommandOutput) => void
  ): Promise<DescribeTunnelCommandOutput> | void {
    const command = new DescribeTunnelCommand(args);
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
   * <p>List all tunnels for an AWS account. Tunnels are listed by creation time in
   * 			descending order, newer tunnels will be listed before older tunnels.</p>
   */
  public listTunnels(args: ListTunnelsCommandInput, options?: __HttpHandlerOptions): Promise<ListTunnelsCommandOutput>;
  public listTunnels(args: ListTunnelsCommandInput, cb: (err: any, data?: ListTunnelsCommandOutput) => void): void;
  public listTunnels(
    args: ListTunnelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTunnelsCommandOutput) => void
  ): void;
  public listTunnels(
    args: ListTunnelsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTunnelsCommandOutput) => void),
    cb?: (err: any, data?: ListTunnelsCommandOutput) => void
  ): Promise<ListTunnelsCommandOutput> | void {
    const command = new ListTunnelsCommand(args);
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
   * <p>Creates a new tunnel, and returns two client access tokens for clients to use to
   * 			connect to the AWS IoT Secure Tunneling proxy server. .</p>
   */
  public openTunnel(args: OpenTunnelCommandInput, options?: __HttpHandlerOptions): Promise<OpenTunnelCommandOutput>;
  public openTunnel(args: OpenTunnelCommandInput, cb: (err: any, data?: OpenTunnelCommandOutput) => void): void;
  public openTunnel(
    args: OpenTunnelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: OpenTunnelCommandOutput) => void
  ): void;
  public openTunnel(
    args: OpenTunnelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: OpenTunnelCommandOutput) => void),
    cb?: (err: any, data?: OpenTunnelCommandOutput) => void
  ): Promise<OpenTunnelCommandOutput> | void {
    const command = new OpenTunnelCommand(args);
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
   * <p>A resource tag.</p>
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
   * <p>Removes a tag from a resource.</p>
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
