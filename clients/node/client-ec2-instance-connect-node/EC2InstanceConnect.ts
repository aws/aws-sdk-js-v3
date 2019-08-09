import { EC2InstanceConnectClient } from "./EC2InstanceConnectClient";
import { AuthException } from "./types/AuthException";
import { EC2InstanceNotFoundException } from "./types/EC2InstanceNotFoundException";
import { InvalidArgsException } from "./types/InvalidArgsException";
import { SendSSHPublicKeyInput } from "./types/SendSSHPublicKeyInput";
import { SendSSHPublicKeyOutput } from "./types/SendSSHPublicKeyOutput";
import { ServiceException } from "./types/ServiceException";
import { ThrottlingException } from "./types/ThrottlingException";
import { SendSSHPublicKeyCommand } from "./commands/SendSSHPublicKeyCommand";

export class EC2InstanceConnect extends EC2InstanceConnectClient {
  /**
   * <p>Pushes an SSH public key to a particular OS user on a given EC2 instance for 60 seconds.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AuthException} <p>Indicates that either your AWS credentials are invalid or you do not have access to the EC2 instance.</p>
   *   - {InvalidArgsException} <p>Indicates that you provided bad input. Ensure you have a valid instance ID, the correct zone, and a valid SSH public key.</p>
   *   - {ServiceException} <p>Indicates that the service encountered an error. Follow the message's instructions and try again.</p>
   *   - {ThrottlingException} <p>Indicates you have been making requests too frequently and have been throttled. Wait for a while and try again. If higher call volume is warranted contact AWS Support.</p>
   *   - {EC2InstanceNotFoundException} <p>Indicates that the instance requested was not found in the given zone. Check that you have provided a valid instance ID and the correct zone.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public sendSSHPublicKey(
    args: SendSSHPublicKeyInput
  ): Promise<SendSSHPublicKeyOutput>;
  public sendSSHPublicKey(
    args: SendSSHPublicKeyInput,
    cb: (err: any, data?: SendSSHPublicKeyOutput) => void
  ): void;
  public sendSSHPublicKey(
    args: SendSSHPublicKeyInput,
    cb?: (err: any, data?: SendSSHPublicKeyOutput) => void
  ): Promise<SendSSHPublicKeyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SendSSHPublicKeyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
