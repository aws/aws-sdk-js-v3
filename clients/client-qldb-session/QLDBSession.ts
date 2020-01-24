import { QLDBSessionClient } from "./QLDBSessionClient";
import {
  SendCommandCommand,
  SendCommandCommandInput,
  SendCommandCommandOutput
} from "./commands/SendCommandCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>The transactional data APIs for Amazon QLDB</p>
 */
export class QLDBSession extends QLDBSessionClient {
  /**
   * <p>Sends a command to an Amazon QLDB ledger.</p>
   */
  public sendCommand(
    args: SendCommandCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendCommandCommandOutput>;
  public sendCommand(
    args: SendCommandCommandInput,
    cb: (err: any, data?: SendCommandCommandOutput) => void
  ): void;
  public sendCommand(
    args: SendCommandCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendCommandCommandOutput) => void
  ): void;
  public sendCommand(
    args: SendCommandCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: SendCommandCommandOutput) => void),
    cb?: (err: any, data?: SendCommandCommandOutput) => void
  ): Promise<SendCommandCommandOutput> | void {
    const command = new SendCommandCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
