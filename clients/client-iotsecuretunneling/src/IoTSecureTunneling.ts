// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

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
import {
  RotateTunnelAccessTokenCommand,
  RotateTunnelAccessTokenCommandInput,
  RotateTunnelAccessTokenCommandOutput,
} from "./commands/RotateTunnelAccessTokenCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { IoTSecureTunnelingClient } from "./IoTSecureTunnelingClient";

/**
 * <fullname>IoT Secure Tunneling</fullname>
 * 		       <p>IoT Secure Tunneling creates remote connections to devices deployed in the
 * 			field.</p>
 * 		       <p>For more information about how IoT Secure Tunneling works, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/secure-tunneling.html">IoT
 * 				Secure Tunneling</a>.</p>
 */
export class IoTSecureTunneling extends IoTSecureTunnelingClient {
  /**
   * <p>Closes a tunnel identified by the unique tunnel id. When a <code>CloseTunnel</code>
   * 			request is received, we close the WebSocket connections between the client and proxy
   * 			server so no data can be transmitted.</p>
   * 		       <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CloseTunnel</a> action.</p>
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
   * 		       <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeTunnel</a> action.</p>
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
   * <p>List all tunnels for an Amazon Web Services account. Tunnels are listed by creation time in
   * 			descending order, newer tunnels will be listed before older tunnels.</p>
   * 		       <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListTunnels</a> action.</p>
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
   * 			connect to the IoT Secure Tunneling proxy server.</p>
   * 		       <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">OpenTunnel</a> action.</p>
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
   * <p>Revokes the current client access token (CAT) and returns new CAT for clients to
   * 			use when reconnecting to secure tunneling to access the same tunnel.</p>
   * 		       <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">RotateTunnelAccessToken</a> action.</p>
   * 		       <note>
   * 			         <p>Rotating the CAT doesn't extend the tunnel duration. For example, say the tunnel
   * 				duration is 12 hours and the tunnel has already been open for 4 hours. When you
   * 				rotate the access tokens, the new tokens that are generated can only be used for the
   * 				remaining 8 hours.</p>
   * 		       </note>
   */
  public rotateTunnelAccessToken(
    args: RotateTunnelAccessTokenCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RotateTunnelAccessTokenCommandOutput>;
  public rotateTunnelAccessToken(
    args: RotateTunnelAccessTokenCommandInput,
    cb: (err: any, data?: RotateTunnelAccessTokenCommandOutput) => void
  ): void;
  public rotateTunnelAccessToken(
    args: RotateTunnelAccessTokenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RotateTunnelAccessTokenCommandOutput) => void
  ): void;
  public rotateTunnelAccessToken(
    args: RotateTunnelAccessTokenCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RotateTunnelAccessTokenCommandOutput) => void),
    cb?: (err: any, data?: RotateTunnelAccessTokenCommandOutput) => void
  ): Promise<RotateTunnelAccessTokenCommandOutput> | void {
    const command = new RotateTunnelAccessTokenCommand(args);
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
