// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  SendSerialConsoleSSHPublicKeyCommand,
  SendSerialConsoleSSHPublicKeyCommandInput,
  SendSerialConsoleSSHPublicKeyCommandOutput,
} from "./commands/SendSerialConsoleSSHPublicKeyCommand";
import {
  SendSSHPublicKeyCommand,
  SendSSHPublicKeyCommandInput,
  SendSSHPublicKeyCommandOutput,
} from "./commands/SendSSHPublicKeyCommand";
import { EC2InstanceConnectClient } from "./EC2InstanceConnectClient";

const commands = {
  SendSerialConsoleSSHPublicKeyCommand,
  SendSSHPublicKeyCommand,
};

export interface EC2InstanceConnect {
  /**
   * @see {@link SendSerialConsoleSSHPublicKeyCommand}
   */
  sendSerialConsoleSSHPublicKey(
    args: SendSerialConsoleSSHPublicKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendSerialConsoleSSHPublicKeyCommandOutput>;
  sendSerialConsoleSSHPublicKey(
    args: SendSerialConsoleSSHPublicKeyCommandInput,
    cb: (err: any, data?: SendSerialConsoleSSHPublicKeyCommandOutput) => void
  ): void;
  sendSerialConsoleSSHPublicKey(
    args: SendSerialConsoleSSHPublicKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendSerialConsoleSSHPublicKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link SendSSHPublicKeyCommand}
   */
  sendSSHPublicKey(
    args: SendSSHPublicKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendSSHPublicKeyCommandOutput>;
  sendSSHPublicKey(
    args: SendSSHPublicKeyCommandInput,
    cb: (err: any, data?: SendSSHPublicKeyCommandOutput) => void
  ): void;
  sendSSHPublicKey(
    args: SendSSHPublicKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendSSHPublicKeyCommandOutput) => void
  ): void;
}

/**
 * <p>This is the <i> Amazon EC2 Instance Connect API Reference</i>. It
 *             provides descriptions, syntax, and usage examples for each of the actions for Amazon EC2
 *             Instance Connect. Amazon EC2 Instance Connect enables system administrators to publish
 *             one-time use SSH public keys to EC2, providing users a simple and secure way to connect
 *             to their instances.</p>
 *         <p>To view the Amazon EC2 Instance Connect content in the <i> Amazon EC2 User
 *                 Guide</i>, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Connect-using-EC2-Instance-Connect.html">Connect to
 *                 your Linux instance using EC2 Instance Connect</a>.</p>
 *         <p>For Amazon EC2 APIs, see the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Welcome.html">Amazon EC2 API
 *                 Reference</a>.</p>
 * @public
 */
export class EC2InstanceConnect extends EC2InstanceConnectClient implements EC2InstanceConnect {}
createAggregatedClient(commands, EC2InstanceConnect);
