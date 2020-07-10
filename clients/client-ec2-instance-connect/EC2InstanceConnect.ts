import { EC2InstanceConnectClient } from "./EC2InstanceConnectClient";
import {
  SendSSHPublicKeyCommand,
  SendSSHPublicKeyCommandInput,
  SendSSHPublicKeyCommandOutput,
} from "./commands/SendSSHPublicKeyCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>AWS EC2 Connect Service is a service that enables system administrators to publish
 *             temporary SSH keys to their EC2 instances in order to establish connections to their
 *             instances without leaving a permanent authentication option.</p>
 */
export class EC2InstanceConnect extends EC2InstanceConnectClient {
  /**
   * <p>Pushes an SSH public key to a particular OS user on a given EC2 instance for 60 seconds.</p>
   */
  public sendSSHPublicKey(
    args: SendSSHPublicKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendSSHPublicKeyCommandOutput>;
  public sendSSHPublicKey(
    args: SendSSHPublicKeyCommandInput,
    cb: (err: any, data?: SendSSHPublicKeyCommandOutput) => void
  ): void;
  public sendSSHPublicKey(
    args: SendSSHPublicKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendSSHPublicKeyCommandOutput) => void
  ): void;
  public sendSSHPublicKey(
    args: SendSSHPublicKeyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SendSSHPublicKeyCommandOutput) => void),
    cb?: (err: any, data?: SendSSHPublicKeyCommandOutput) => void
  ): Promise<SendSSHPublicKeyCommandOutput> | void {
    const command = new SendSSHPublicKeyCommand(args);
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
