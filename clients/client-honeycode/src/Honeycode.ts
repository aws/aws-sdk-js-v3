import { HoneycodeClient } from "./HoneycodeClient";
import {
  GetScreenDataCommand,
  GetScreenDataCommandInput,
  GetScreenDataCommandOutput,
} from "./commands/GetScreenDataCommand";
import {
  InvokeScreenAutomationCommand,
  InvokeScreenAutomationCommandInput,
  InvokeScreenAutomationCommandOutput,
} from "./commands/InvokeScreenAutomationCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>
 *       Amazon Honeycode is a fully managed service that allows you to quickly build mobile and web apps for teams—without
 *       programming. Build Honeycode apps for managing almost anything, like projects, customers, operations, approvals,
 *       resources, and even your team.
 *     </p>
 */
export class Honeycode extends HoneycodeClient {
  /**
   * <p>
   *             The GetScreenData API allows retrieval of data from a screen in a Honeycode app.
   *             The API allows setting local variables in the screen to filter, sort or otherwise affect what will be
   *             displayed on the screen.
   *         </p>
   */
  public getScreenData(
    args: GetScreenDataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetScreenDataCommandOutput>;
  public getScreenData(
    args: GetScreenDataCommandInput,
    cb: (err: any, data?: GetScreenDataCommandOutput) => void
  ): void;
  public getScreenData(
    args: GetScreenDataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetScreenDataCommandOutput) => void
  ): void;
  public getScreenData(
    args: GetScreenDataCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetScreenDataCommandOutput) => void),
    cb?: (err: any, data?: GetScreenDataCommandOutput) => void
  ): Promise<GetScreenDataCommandOutput> | void {
    const command = new GetScreenDataCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>
   *             The InvokeScreenAutomation API allows invoking an action defined in a screen in a Honeycode app.
   *             The API allows setting local variables, which can then be used in the automation being invoked.
   *             This allows automating the Honeycode app interactions to write, update or delete data in the workbook.
   *         </p>
   */
  public invokeScreenAutomation(
    args: InvokeScreenAutomationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<InvokeScreenAutomationCommandOutput>;
  public invokeScreenAutomation(
    args: InvokeScreenAutomationCommandInput,
    cb: (err: any, data?: InvokeScreenAutomationCommandOutput) => void
  ): void;
  public invokeScreenAutomation(
    args: InvokeScreenAutomationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InvokeScreenAutomationCommandOutput) => void
  ): void;
  public invokeScreenAutomation(
    args: InvokeScreenAutomationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: InvokeScreenAutomationCommandOutput) => void),
    cb?: (err: any, data?: InvokeScreenAutomationCommandOutput) => void
  ): Promise<InvokeScreenAutomationCommandOutput> | void {
    const command = new InvokeScreenAutomationCommand(args);
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
