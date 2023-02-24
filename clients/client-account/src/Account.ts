// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import { AccountClient } from "./AccountClient";
import {
  DeleteAlternateContactCommand,
  DeleteAlternateContactCommandInput,
  DeleteAlternateContactCommandOutput,
} from "./commands/DeleteAlternateContactCommand";
import {
  DisableRegionCommand,
  DisableRegionCommandInput,
  DisableRegionCommandOutput,
} from "./commands/DisableRegionCommand";
import {
  EnableRegionCommand,
  EnableRegionCommandInput,
  EnableRegionCommandOutput,
} from "./commands/EnableRegionCommand";
import {
  GetAlternateContactCommand,
  GetAlternateContactCommandInput,
  GetAlternateContactCommandOutput,
} from "./commands/GetAlternateContactCommand";
import {
  GetContactInformationCommand,
  GetContactInformationCommandInput,
  GetContactInformationCommandOutput,
} from "./commands/GetContactInformationCommand";
import {
  GetRegionOptStatusCommand,
  GetRegionOptStatusCommandInput,
  GetRegionOptStatusCommandOutput,
} from "./commands/GetRegionOptStatusCommand";
import { ListRegionsCommand, ListRegionsCommandInput, ListRegionsCommandOutput } from "./commands/ListRegionsCommand";
import {
  PutAlternateContactCommand,
  PutAlternateContactCommandInput,
  PutAlternateContactCommandOutput,
} from "./commands/PutAlternateContactCommand";
import {
  PutContactInformationCommand,
  PutContactInformationCommandInput,
  PutContactInformationCommandOutput,
} from "./commands/PutContactInformationCommand";

/**
 * <p>Operations for Amazon Web Services Account Management</p>
 */
export class Account extends AccountClient {
  /**
   * <p>Deletes the specified alternate contact from an Amazon Web Services account.</p>
   *          <p>For complete details about how to use the alternate contact operations, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-update-contact.html">Access or
   *                 updating the alternate contacts</a>.</p>
   *          <note>
   *             <p>Before you can update the alternate contact information for an
   *      Amazon Web Services account that is managed by Organizations, you must first enable integration between Amazon Web Services Account Management
   *      and Organizations.  For more information, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/using-orgs-trusted-access.html">Enabling trusted access for
   *      Amazon Web Services Account Management</a>.</p>
   *          </note>
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
   * <p>Disables (opts-out) a particular Region for an account.</p>
   */
  public disableRegion(
    args: DisableRegionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableRegionCommandOutput>;
  public disableRegion(
    args: DisableRegionCommandInput,
    cb: (err: any, data?: DisableRegionCommandOutput) => void
  ): void;
  public disableRegion(
    args: DisableRegionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableRegionCommandOutput) => void
  ): void;
  public disableRegion(
    args: DisableRegionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisableRegionCommandOutput) => void),
    cb?: (err: any, data?: DisableRegionCommandOutput) => void
  ): Promise<DisableRegionCommandOutput> | void {
    const command = new DisableRegionCommand(args);
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
   * <p>Enables (opts-in) a particular Region for an account.</p>
   */
  public enableRegion(
    args: EnableRegionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableRegionCommandOutput>;
  public enableRegion(args: EnableRegionCommandInput, cb: (err: any, data?: EnableRegionCommandOutput) => void): void;
  public enableRegion(
    args: EnableRegionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableRegionCommandOutput) => void
  ): void;
  public enableRegion(
    args: EnableRegionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: EnableRegionCommandOutput) => void),
    cb?: (err: any, data?: EnableRegionCommandOutput) => void
  ): Promise<EnableRegionCommandOutput> | void {
    const command = new EnableRegionCommand(args);
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
   *          <p>For complete details about how to use the alternate contact operations, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-update-contact.html">Access or
   *                 updating the alternate contacts</a>.</p>
   *          <note>
   *             <p>Before you can update the alternate contact information for an
   *      Amazon Web Services account that is managed by Organizations, you must first enable integration between Amazon Web Services Account Management
   *      and Organizations.  For more information, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/using-orgs-trusted-access.html">Enabling trusted access for
   *      Amazon Web Services Account Management</a>.</p>
   *          </note>
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
   * <p>Retrieves the primary contact information of an Amazon Web Services account.</p>
   *          <p>For complete details about how to use the primary contact operations, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-update-contact.html">Update
   *                 the primary and alternate contact information</a>.</p>
   */
  public getContactInformation(
    args: GetContactInformationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetContactInformationCommandOutput>;
  public getContactInformation(
    args: GetContactInformationCommandInput,
    cb: (err: any, data?: GetContactInformationCommandOutput) => void
  ): void;
  public getContactInformation(
    args: GetContactInformationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetContactInformationCommandOutput) => void
  ): void;
  public getContactInformation(
    args: GetContactInformationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetContactInformationCommandOutput) => void),
    cb?: (err: any, data?: GetContactInformationCommandOutput) => void
  ): Promise<GetContactInformationCommandOutput> | void {
    const command = new GetContactInformationCommand(args);
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
   * <p>Retrieves the opt-in status of a particular Region.</p>
   */
  public getRegionOptStatus(
    args: GetRegionOptStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRegionOptStatusCommandOutput>;
  public getRegionOptStatus(
    args: GetRegionOptStatusCommandInput,
    cb: (err: any, data?: GetRegionOptStatusCommandOutput) => void
  ): void;
  public getRegionOptStatus(
    args: GetRegionOptStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRegionOptStatusCommandOutput) => void
  ): void;
  public getRegionOptStatus(
    args: GetRegionOptStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetRegionOptStatusCommandOutput) => void),
    cb?: (err: any, data?: GetRegionOptStatusCommandOutput) => void
  ): Promise<GetRegionOptStatusCommandOutput> | void {
    const command = new GetRegionOptStatusCommand(args);
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
   * <p>Lists all the Regions for a given account and their respective opt-in statuses.
   *             Optionally, this list can be filtered by the <code>region-opt-status-contains</code>
   *             parameter. </p>
   */
  public listRegions(args: ListRegionsCommandInput, options?: __HttpHandlerOptions): Promise<ListRegionsCommandOutput>;
  public listRegions(args: ListRegionsCommandInput, cb: (err: any, data?: ListRegionsCommandOutput) => void): void;
  public listRegions(
    args: ListRegionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRegionsCommandOutput) => void
  ): void;
  public listRegions(
    args: ListRegionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListRegionsCommandOutput) => void),
    cb?: (err: any, data?: ListRegionsCommandOutput) => void
  ): Promise<ListRegionsCommandOutput> | void {
    const command = new ListRegionsCommand(args);
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
   *          <p>For complete details about how to use the alternate contact operations, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-update-contact.html">Access or
   *                 updating the alternate contacts</a>.</p>
   *          <note>
   *             <p>Before you can update the alternate contact information for an
   *      Amazon Web Services account that is managed by Organizations, you must first enable integration between Amazon Web Services Account Management
   *      and Organizations.  For more information, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/using-orgs-trusted-access.html">Enabling trusted access for
   *      Amazon Web Services Account Management</a>.</p>
   *          </note>
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

  /**
   * <p>Updates the primary contact information of an Amazon Web Services account.</p>
   *          <p>For complete details about how to use the primary contact operations, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-update-contact.html">Update
   *             the primary and alternate contact information</a>.</p>
   */
  public putContactInformation(
    args: PutContactInformationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutContactInformationCommandOutput>;
  public putContactInformation(
    args: PutContactInformationCommandInput,
    cb: (err: any, data?: PutContactInformationCommandOutput) => void
  ): void;
  public putContactInformation(
    args: PutContactInformationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutContactInformationCommandOutput) => void
  ): void;
  public putContactInformation(
    args: PutContactInformationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutContactInformationCommandOutput) => void),
    cb?: (err: any, data?: PutContactInformationCommandOutput) => void
  ): Promise<PutContactInformationCommandOutput> | void {
    const command = new PutContactInformationCommand(args);
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
