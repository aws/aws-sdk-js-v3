// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

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
import { MacieClient, MacieClientConfig } from "./MacieClient";

const commands = {
  AssociateMemberAccountCommand,
  AssociateS3ResourcesCommand,
  DisassociateMemberAccountCommand,
  DisassociateS3ResourcesCommand,
  ListMemberAccountsCommand,
  ListS3ResourcesCommand,
  UpdateS3ResourcesCommand,
};

export interface Macie {
  /**
   * @see {@link AssociateMemberAccountCommand}
   */
  associateMemberAccount(
    args: AssociateMemberAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateMemberAccountCommandOutput>;
  associateMemberAccount(
    args: AssociateMemberAccountCommandInput,
    cb: (err: any, data?: AssociateMemberAccountCommandOutput) => void
  ): void;
  associateMemberAccount(
    args: AssociateMemberAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateMemberAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateS3ResourcesCommand}
   */
  associateS3Resources(
    args: AssociateS3ResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateS3ResourcesCommandOutput>;
  associateS3Resources(
    args: AssociateS3ResourcesCommandInput,
    cb: (err: any, data?: AssociateS3ResourcesCommandOutput) => void
  ): void;
  associateS3Resources(
    args: AssociateS3ResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateS3ResourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateMemberAccountCommand}
   */
  disassociateMemberAccount(
    args: DisassociateMemberAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateMemberAccountCommandOutput>;
  disassociateMemberAccount(
    args: DisassociateMemberAccountCommandInput,
    cb: (err: any, data?: DisassociateMemberAccountCommandOutput) => void
  ): void;
  disassociateMemberAccount(
    args: DisassociateMemberAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateMemberAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateS3ResourcesCommand}
   */
  disassociateS3Resources(
    args: DisassociateS3ResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateS3ResourcesCommandOutput>;
  disassociateS3Resources(
    args: DisassociateS3ResourcesCommandInput,
    cb: (err: any, data?: DisassociateS3ResourcesCommandOutput) => void
  ): void;
  disassociateS3Resources(
    args: DisassociateS3ResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateS3ResourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMemberAccountsCommand}
   */
  listMemberAccounts(
    args: ListMemberAccountsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMemberAccountsCommandOutput>;
  listMemberAccounts(
    args: ListMemberAccountsCommandInput,
    cb: (err: any, data?: ListMemberAccountsCommandOutput) => void
  ): void;
  listMemberAccounts(
    args: ListMemberAccountsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMemberAccountsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListS3ResourcesCommand}
   */
  listS3Resources(
    args: ListS3ResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListS3ResourcesCommandOutput>;
  listS3Resources(args: ListS3ResourcesCommandInput, cb: (err: any, data?: ListS3ResourcesCommandOutput) => void): void;
  listS3Resources(
    args: ListS3ResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListS3ResourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateS3ResourcesCommand}
   */
  updateS3Resources(
    args: UpdateS3ResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateS3ResourcesCommandOutput>;
  updateS3Resources(
    args: UpdateS3ResourcesCommandInput,
    cb: (err: any, data?: UpdateS3ResourcesCommandOutput) => void
  ): void;
  updateS3Resources(
    args: UpdateS3ResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateS3ResourcesCommandOutput) => void
  ): void;
}

/**
 * @public
 * <fullname>Amazon Macie Classic</fullname>
 *          <p>Amazon Macie Classic has been discontinued and is no longer available.</p>
 *          <p>A new Amazon Macie is now available with significant design improvements and additional
 *       features, at a lower price and in most Amazon Web Services Regions. We encourage you to take advantage of the
 *       new and improved features, and benefit from the reduced cost. To learn about features and pricing for the new Macie, see <a href="http://aws.amazon.com/macie/">Amazon Macie</a>. To learn how to use the new Macie, see the <a href="https://docs.aws.amazon.com/macie/latest/user/what-is-macie.html">Amazon Macie User
 *         Guide</a>.</p>
 */
export class Macie extends MacieClient implements Macie {}
createAggregatedClient(commands, Macie);
