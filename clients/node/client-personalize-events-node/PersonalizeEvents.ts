import { PersonalizeEventsClient } from "./PersonalizeEventsClient";
import { InvalidInputException } from "./types/InvalidInputException";
import { PutEventsInput } from "./types/PutEventsInput";
import { PutEventsOutput } from "./types/PutEventsOutput";
import { PutEventsCommand } from "./commands/PutEventsCommand";

export class PersonalizeEvents extends PersonalizeEventsClient {
  /**
   * <p>Records user interaction event data.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>Provide a valid value for the field or parameter.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putEvents(args: PutEventsInput): Promise<PutEventsOutput>;
  public putEvents(
    args: PutEventsInput,
    cb: (err: any, data?: PutEventsOutput) => void
  ): void;
  public putEvents(
    args: PutEventsInput,
    cb?: (err: any, data?: PutEventsOutput) => void
  ): Promise<PutEventsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutEventsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
