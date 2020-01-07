import { EC2InstanceConnectClient } from "./EC2InstanceConnectClient";
import { SendSSHPublicKeyCommandInput, SendSSHPublicKeyCommandOutput } from "./commands/SendSSHPublicKeyCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>AWS EC2 Connect Service is a service that enables system administrators to publish
 *             temporary SSH keys to their EC2 instances in order to establish connections to their
 *             instances without leaving a permanent authentication option.</p>
 */
export declare class EC2InstanceConnect extends EC2InstanceConnectClient {
    /**
     * <p>Pushes an SSH public key to a particular OS user on a given EC2 instance for 60 seconds.</p>
     */
    sendSSHPublicKey(args: SendSSHPublicKeyCommandInput, options?: __HttpHandlerOptions): Promise<SendSSHPublicKeyCommandOutput>;
    sendSSHPublicKey(args: SendSSHPublicKeyCommandInput, cb: (err: any, data?: SendSSHPublicKeyCommandOutput) => void): void;
    sendSSHPublicKey(args: SendSSHPublicKeyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SendSSHPublicKeyCommandOutput) => void): void;
}
