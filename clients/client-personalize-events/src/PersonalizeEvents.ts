import { PersonalizeEventsClient } from "./PersonalizeEventsClient";
import { PutEventsCommand, PutEventsCommandInput, PutEventsCommandOutput } from "./commands/PutEventsCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p></p>
 */
export class PersonalizeEvents extends PersonalizeEventsClient {
  /**
   * <p>Records user interaction event data.</p>
   */
  public putEvents(args: PutEventsCommandInput, options?: __HttpHandlerOptions): Promise<PutEventsCommandOutput>;
  public putEvents(args: PutEventsCommandInput, cb: (err: any, data?: PutEventsCommandOutput) => void): void;
  public putEvents(
    args: PutEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutEventsCommandOutput) => void
  ): void;
  public putEvents(
    args: PutEventsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutEventsCommandOutput) => void),
    cb?: (err: any, data?: PutEventsCommandOutput) => void
  ): Promise<PutEventsCommandOutput> | void {
    const command = new PutEventsCommand(args);
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
