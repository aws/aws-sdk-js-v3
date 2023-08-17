// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

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
import { EC2InstanceConnectClient, EC2InstanceConnectClientConfig } from "./EC2InstanceConnectClient";

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
 * @public
 * <p>Amazon EC2 Instance Connect enables system administrators to publish one-time use SSH
 *             public keys to EC2, providing users a simple and secure way to connect to their
 *             instances.</p>
 */
export class EC2InstanceConnect extends EC2InstanceConnectClient implements EC2InstanceConnect {}
createAggregatedClient(commands, EC2InstanceConnect);
