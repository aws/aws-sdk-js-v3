// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  AssociateMemberAccountCommand,
  AssociateMemberAccountCommandInput,
  AssociateMemberAccountCommandOutput,
} from "./commands/AssociateMemberAccountCommand";
import {
  AssociateS3ResourcesCommand,
  AssociateS3ResourcesCommandInput,
  AssociateS3ResourcesCommandOutput,
} from "./commands/AssociateS3ResourcesCommand";
import {
  DisassociateMemberAccountCommand,
  DisassociateMemberAccountCommandInput,
  DisassociateMemberAccountCommandOutput,
} from "./commands/DisassociateMemberAccountCommand";
import {
  DisassociateS3ResourcesCommand,
  DisassociateS3ResourcesCommandInput,
  DisassociateS3ResourcesCommandOutput,
} from "./commands/DisassociateS3ResourcesCommand";
import {
  ListMemberAccountsCommand,
  ListMemberAccountsCommandInput,
  ListMemberAccountsCommandOutput,
} from "./commands/ListMemberAccountsCommand";
import {
  ListS3ResourcesCommand,
  ListS3ResourcesCommandInput,
  ListS3ResourcesCommandOutput,
} from "./commands/ListS3ResourcesCommand";
import {
  UpdateS3ResourcesCommand,
  UpdateS3ResourcesCommandInput,
  UpdateS3ResourcesCommandOutput,
} from "./commands/UpdateS3ResourcesCommand";
import { MacieClient } from "./MacieClient";

/**
 * <fullname>Amazon Macie Classic</fullname>
 *          <p>Amazon Macie Classic has been discontinued and is no longer available.</p>
 *
 *          <p>A new Amazon Macie is now available with significant design improvements and additional
 *       features, at a lower price and in most Amazon Web Services Regions. We encourage you to take advantage of the
 *       new and improved features, and benefit from the reduced cost. To learn about features and pricing for the new Macie, see <a href="http://aws.amazon.com/macie/">Amazon Macie</a>. To learn how to use the new Macie, see the <a href="https://docs.aws.amazon.com/macie/latest/user/what-is-macie.html">Amazon Macie User
 *         Guide</a>.</p>
 */
export class Macie extends MacieClient {
  /**
   * <p>(Discontinued) Associates a specified Amazon Web Services account with Amazon Macie Classic as a member
   *       account.</p>
   */
  public associateMemberAccount(
    args: AssociateMemberAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateMemberAccountCommandOutput>;
  public associateMemberAccount(
    args: AssociateMemberAccountCommandInput,
    cb: (err: any, data?: AssociateMemberAccountCommandOutput) => void
  ): void;
  public associateMemberAccount(
    args: AssociateMemberAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateMemberAccountCommandOutput) => void
  ): void;
  public associateMemberAccount(
    args: AssociateMemberAccountCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateMemberAccountCommandOutput) => void),
    cb?: (err: any, data?: AssociateMemberAccountCommandOutput) => void
  ): Promise<AssociateMemberAccountCommandOutput> | void {
    const command = new AssociateMemberAccountCommand(args);
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
   * <p>(Discontinued) Associates specified S3 resources with Amazon Macie Classic for
   *       monitoring and data classification. If <code>memberAccountId</code> isn't specified, the action associates
   *       specified S3 resources with Macie Classic for the current Macie Classic administrator account.
   *       If <code>memberAccountId</code> is specified, the action associates specified S3 resources with Macie
   *       Classic for the specified member account.</p>
   */
  public associateS3Resources(
    args: AssociateS3ResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateS3ResourcesCommandOutput>;
  public associateS3Resources(
    args: AssociateS3ResourcesCommandInput,
    cb: (err: any, data?: AssociateS3ResourcesCommandOutput) => void
  ): void;
  public associateS3Resources(
    args: AssociateS3ResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateS3ResourcesCommandOutput) => void
  ): void;
  public associateS3Resources(
    args: AssociateS3ResourcesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateS3ResourcesCommandOutput) => void),
    cb?: (err: any, data?: AssociateS3ResourcesCommandOutput) => void
  ): Promise<AssociateS3ResourcesCommandOutput> | void {
    const command = new AssociateS3ResourcesCommand(args);
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
   * <p>(Discontinued) Removes the specified member account from Amazon Macie
   *       Classic.</p>
   */
  public disassociateMemberAccount(
    args: DisassociateMemberAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateMemberAccountCommandOutput>;
  public disassociateMemberAccount(
    args: DisassociateMemberAccountCommandInput,
    cb: (err: any, data?: DisassociateMemberAccountCommandOutput) => void
  ): void;
  public disassociateMemberAccount(
    args: DisassociateMemberAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateMemberAccountCommandOutput) => void
  ): void;
  public disassociateMemberAccount(
    args: DisassociateMemberAccountCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateMemberAccountCommandOutput) => void),
    cb?: (err: any, data?: DisassociateMemberAccountCommandOutput) => void
  ): Promise<DisassociateMemberAccountCommandOutput> | void {
    const command = new DisassociateMemberAccountCommand(args);
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
   * <p>(Discontinued) Removes specified S3 resources from being monitored by Amazon Macie
   *       Classic. If <code>memberAccountId</code> isn't specified, the action removes specified S3 resources from
   *       Macie Classic for the current Macie Classic administrator account. If <code>memberAccountId</code> is
   *       specified, the action removes specified S3 resources from Macie Classic for the specified
   *       member account.</p>
   */
  public disassociateS3Resources(
    args: DisassociateS3ResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateS3ResourcesCommandOutput>;
  public disassociateS3Resources(
    args: DisassociateS3ResourcesCommandInput,
    cb: (err: any, data?: DisassociateS3ResourcesCommandOutput) => void
  ): void;
  public disassociateS3Resources(
    args: DisassociateS3ResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateS3ResourcesCommandOutput) => void
  ): void;
  public disassociateS3Resources(
    args: DisassociateS3ResourcesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateS3ResourcesCommandOutput) => void),
    cb?: (err: any, data?: DisassociateS3ResourcesCommandOutput) => void
  ): Promise<DisassociateS3ResourcesCommandOutput> | void {
    const command = new DisassociateS3ResourcesCommand(args);
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
   * <p>(Discontinued) Lists all Amazon Macie Classic member accounts for the current Macie
   *       Classic administrator account.</p>
   */
  public listMemberAccounts(
    args: ListMemberAccountsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMemberAccountsCommandOutput>;
  public listMemberAccounts(
    args: ListMemberAccountsCommandInput,
    cb: (err: any, data?: ListMemberAccountsCommandOutput) => void
  ): void;
  public listMemberAccounts(
    args: ListMemberAccountsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMemberAccountsCommandOutput) => void
  ): void;
  public listMemberAccounts(
    args: ListMemberAccountsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListMemberAccountsCommandOutput) => void),
    cb?: (err: any, data?: ListMemberAccountsCommandOutput) => void
  ): Promise<ListMemberAccountsCommandOutput> | void {
    const command = new ListMemberAccountsCommand(args);
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
   * <p>(Discontinued) Lists all the S3 resources associated with Amazon Macie Classic. If
   *       <code>memberAccountId</code> isn't specified, the action lists the S3 resources associated with Macie
   *       Classic for the current Macie Classic administrator account. If <code>memberAccountId</code> is specified,
   *       the action lists the S3 resources associated with Macie Classic for the specified member
   *       account. </p>
   */
  public listS3Resources(
    args: ListS3ResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListS3ResourcesCommandOutput>;
  public listS3Resources(
    args: ListS3ResourcesCommandInput,
    cb: (err: any, data?: ListS3ResourcesCommandOutput) => void
  ): void;
  public listS3Resources(
    args: ListS3ResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListS3ResourcesCommandOutput) => void
  ): void;
  public listS3Resources(
    args: ListS3ResourcesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListS3ResourcesCommandOutput) => void),
    cb?: (err: any, data?: ListS3ResourcesCommandOutput) => void
  ): Promise<ListS3ResourcesCommandOutput> | void {
    const command = new ListS3ResourcesCommand(args);
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
   * <p>(Discontinued) Updates the classification types for the specified S3 resources. If
   *       <code>memberAccountId</code> isn't specified, the action updates the classification types of the S3
   *       resources associated with Amazon Macie Classic for the current Macie Classic administrator
   *       account. If <code>memberAccountId</code> is specified, the action updates the classification types of the
   *       S3 resources associated with Macie Classic for the specified member account.</p>
   */
  public updateS3Resources(
    args: UpdateS3ResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateS3ResourcesCommandOutput>;
  public updateS3Resources(
    args: UpdateS3ResourcesCommandInput,
    cb: (err: any, data?: UpdateS3ResourcesCommandOutput) => void
  ): void;
  public updateS3Resources(
    args: UpdateS3ResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateS3ResourcesCommandOutput) => void
  ): void;
  public updateS3Resources(
    args: UpdateS3ResourcesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateS3ResourcesCommandOutput) => void),
    cb?: (err: any, data?: UpdateS3ResourcesCommandOutput) => void
  ): Promise<UpdateS3ResourcesCommandOutput> | void {
    const command = new UpdateS3ResourcesCommand(args);
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
