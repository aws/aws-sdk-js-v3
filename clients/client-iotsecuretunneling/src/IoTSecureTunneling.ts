// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

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
import { IoTSecureTunnelingClient, IoTSecureTunnelingClientConfig } from "./IoTSecureTunnelingClient";

const commands = {
  CloseTunnelCommand,
  DescribeTunnelCommand,
  ListTagsForResourceCommand,
  ListTunnelsCommand,
  OpenTunnelCommand,
  RotateTunnelAccessTokenCommand,
  TagResourceCommand,
  UntagResourceCommand,
};

export interface IoTSecureTunneling {
  /**
   * @see {@link CloseTunnelCommand}
   */
  closeTunnel(args: CloseTunnelCommandInput, options?: __HttpHandlerOptions): Promise<CloseTunnelCommandOutput>;
  closeTunnel(args: CloseTunnelCommandInput, cb: (err: any, data?: CloseTunnelCommandOutput) => void): void;
  closeTunnel(
    args: CloseTunnelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CloseTunnelCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTunnelCommand}
   */
  describeTunnel(
    args: DescribeTunnelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTunnelCommandOutput>;
  describeTunnel(args: DescribeTunnelCommandInput, cb: (err: any, data?: DescribeTunnelCommandOutput) => void): void;
  describeTunnel(
    args: DescribeTunnelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTunnelCommandOutput) => void
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
   * @see {@link ListTunnelsCommand}
   */
  listTunnels(args: ListTunnelsCommandInput, options?: __HttpHandlerOptions): Promise<ListTunnelsCommandOutput>;
  listTunnels(args: ListTunnelsCommandInput, cb: (err: any, data?: ListTunnelsCommandOutput) => void): void;
  listTunnels(
    args: ListTunnelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTunnelsCommandOutput) => void
  ): void;

  /**
   * @see {@link OpenTunnelCommand}
   */
  openTunnel(args: OpenTunnelCommandInput, options?: __HttpHandlerOptions): Promise<OpenTunnelCommandOutput>;
  openTunnel(args: OpenTunnelCommandInput, cb: (err: any, data?: OpenTunnelCommandOutput) => void): void;
  openTunnel(
    args: OpenTunnelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: OpenTunnelCommandOutput) => void
  ): void;

  /**
   * @see {@link RotateTunnelAccessTokenCommand}
   */
  rotateTunnelAccessToken(
    args: RotateTunnelAccessTokenCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RotateTunnelAccessTokenCommandOutput>;
  rotateTunnelAccessToken(
    args: RotateTunnelAccessTokenCommandInput,
    cb: (err: any, data?: RotateTunnelAccessTokenCommandOutput) => void
  ): void;
  rotateTunnelAccessToken(
    args: RotateTunnelAccessTokenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RotateTunnelAccessTokenCommandOutput) => void
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
}

/**
 * @public
 * <fullname>IoT Secure Tunneling</fullname>
 *          <p>IoT Secure Tunneling creates remote connections to devices deployed in the
 * 			field.</p>
 *          <p>For more information about how IoT Secure Tunneling works, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/secure-tunneling.html">IoT
 * 				Secure Tunneling</a>.</p>
 */
export class IoTSecureTunneling extends IoTSecureTunnelingClient implements IoTSecureTunneling {}
createAggregatedClient(commands, IoTSecureTunneling);
