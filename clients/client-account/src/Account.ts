// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import { AccountClient } from "./AccountClient";
import {
  DeleteAlternateContactCommand,
  DeleteAlternateContactCommandInput,
  DeleteAlternateContactCommandOutput,
} from "./commands/DeleteAlternateContactCommand";
import {
  GetAlternateContactCommand,
  GetAlternateContactCommandInput,
  GetAlternateContactCommandOutput,
} from "./commands/GetAlternateContactCommand";
import {
  PutAlternateContactCommand,
  PutAlternateContactCommandInput,
  PutAlternateContactCommandOutput,
} from "./commands/PutAlternateContactCommand";

/**
 * <p>Operations for Amazon Web Services Account Management</p>
 */
export class Account extends AccountClient {
  /**
   * <p>Deletes the specified alternate contact from an Amazon Web Services account.</p>
   *         <p>For complete details about how to use the alternate contact operations, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-update-contact.html">Access or
   *                 updating the alternate contacts</a>.</p>
   */
  public deleteAlternateContact(
    args: DeleteAlternateContactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAlternateContactCommandOutput>;
  public deleteAlternateContact(
    args: DeleteAlternateContactCommandInput,
    cb: (err: any, data?: DeleteAlternateContactCommandOutput) => void
  ): void;
  public deleteAlternateContact(
    args: DeleteAlternateContactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAlternateContactCommandOutput) => void
  ): void;
  public deleteAlternateContact(
    args: DeleteAlternateContactCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAlternateContactCommandOutput) => void),
    cb?: (err: any, data?: DeleteAlternateContactCommandOutput) => void
  ): Promise<DeleteAlternateContactCommandOutput> | void {
    const command = new DeleteAlternateContactCommand(args);
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
   * <p>Retrieves the specified alternate contact attached to an Amazon Web Services account.</p>
   *         <p>For complete details about how to use the alternate contact operations, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-update-contact.html">Access or
   *             updating the alternate contacts</a>.</p>
   */
  public getAlternateContact(
    args: GetAlternateContactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAlternateContactCommandOutput>;
  public getAlternateContact(
    args: GetAlternateContactCommandInput,
    cb: (err: any, data?: GetAlternateContactCommandOutput) => void
  ): void;
  public getAlternateContact(
    args: GetAlternateContactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAlternateContactCommandOutput) => void
  ): void;
  public getAlternateContact(
    args: GetAlternateContactCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAlternateContactCommandOutput) => void),
    cb?: (err: any, data?: GetAlternateContactCommandOutput) => void
  ): Promise<GetAlternateContactCommandOutput> | void {
    const command = new GetAlternateContactCommand(args);
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
   * <p>Modifies the specified alternate contact attached to an Amazon Web Services account.</p>
   *         <p>For complete details about how to use the alternate contact operations, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-update-contact.html">Access or
   *             updating the alternate contacts</a>.</p>
   */
  public putAlternateContact(
    args: PutAlternateContactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutAlternateContactCommandOutput>;
  public putAlternateContact(
    args: PutAlternateContactCommandInput,
    cb: (err: any, data?: PutAlternateContactCommandOutput) => void
  ): void;
  public putAlternateContact(
    args: PutAlternateContactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAlternateContactCommandOutput) => void
  ): void;
  public putAlternateContact(
    args: PutAlternateContactCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutAlternateContactCommandOutput) => void),
    cb?: (err: any, data?: PutAlternateContactCommandOutput) => void
  ): Promise<PutAlternateContactCommandOutput> | void {
    const command = new PutAlternateContactCommand(args);
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
