// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type { HttpHandlerOptions as __HttpHandlerOptions, MetricsRecorder as __MetricsRecorder } from "@smithy/types";

import {
  type SendSerialConsoleSSHPublicKeyCommandInput,
  type SendSerialConsoleSSHPublicKeyCommandOutput,
  SendSerialConsoleSSHPublicKeyCommand,
} from "./commands/SendSerialConsoleSSHPublicKeyCommand";
import {
  type SendSSHPublicKeyCommandInput,
  type SendSSHPublicKeyCommandOutput,
  SendSSHPublicKeyCommand,
} from "./commands/SendSSHPublicKeyCommand";
import { EC2InstanceConnectClient } from "./EC2InstanceConnectClient";

const commands = {
  SendSerialConsoleSSHPublicKeyCommand,
  SendSSHPublicKeyCommand,
};

/**
 * @public
 */
export interface EC2InstanceConnectRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface EC2InstanceConnect {
  /**
   * @see {@link SendSerialConsoleSSHPublicKeyCommand}
   */
  sendSerialConsoleSSHPublicKey(
    args: SendSerialConsoleSSHPublicKeyCommandInput,
    options?: EC2InstanceConnectRequestOptions
  ): Promise<SendSerialConsoleSSHPublicKeyCommandOutput>;
  sendSerialConsoleSSHPublicKey(
    args: SendSerialConsoleSSHPublicKeyCommandInput,
    cb: (err: any, data?: SendSerialConsoleSSHPublicKeyCommandOutput) => void
  ): void;
  sendSerialConsoleSSHPublicKey(
    args: SendSerialConsoleSSHPublicKeyCommandInput,
    options: EC2InstanceConnectRequestOptions,
    cb: (err: any, data?: SendSerialConsoleSSHPublicKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link SendSSHPublicKeyCommand}
   */
  sendSSHPublicKey(
    args: SendSSHPublicKeyCommandInput,
    options?: EC2InstanceConnectRequestOptions
  ): Promise<SendSSHPublicKeyCommandOutput>;
  sendSSHPublicKey(
    args: SendSSHPublicKeyCommandInput,
    cb: (err: any, data?: SendSSHPublicKeyCommandOutput) => void
  ): void;
  sendSSHPublicKey(
    args: SendSSHPublicKeyCommandInput,
    options: EC2InstanceConnectRequestOptions,
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
