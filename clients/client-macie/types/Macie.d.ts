import { MacieClient } from "./MacieClient";
import { AssociateMemberAccountCommandInput, AssociateMemberAccountCommandOutput } from "./commands/AssociateMemberAccountCommand";
import { AssociateS3ResourcesCommandInput, AssociateS3ResourcesCommandOutput } from "./commands/AssociateS3ResourcesCommand";
import { DisassociateMemberAccountCommandInput, DisassociateMemberAccountCommandOutput } from "./commands/DisassociateMemberAccountCommand";
import { DisassociateS3ResourcesCommandInput, DisassociateS3ResourcesCommandOutput } from "./commands/DisassociateS3ResourcesCommand";
import { ListMemberAccountsCommandInput, ListMemberAccountsCommandOutput } from "./commands/ListMemberAccountsCommand";
import { ListS3ResourcesCommandInput, ListS3ResourcesCommandOutput } from "./commands/ListS3ResourcesCommand";
import { UpdateS3ResourcesCommandInput, UpdateS3ResourcesCommandOutput } from "./commands/UpdateS3ResourcesCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <fullname>Amazon Macie</fullname>
 *          <p>Amazon Macie is a security service that uses machine learning to automatically
 *       discover, classify, and protect sensitive data in AWS. Macie recognizes sensitive data such as
 *       personally identifiable information (PII) or intellectual property, and provides you with
 *       dashboards and alerts that give visibility into how this data is being accessed or moved. For
 *       more information, see the <a href="https://docs.aws.amazon.com/macie/latest/userguide/what-is-macie.html">Macie User
 *         Guide</a>. </p>
 */
export declare class Macie extends MacieClient {
    /**
     * <p>Associates a specified AWS account with Amazon Macie as a member account.</p>
     */
    associateMemberAccount(args: AssociateMemberAccountCommandInput, options?: __HttpHandlerOptions): Promise<AssociateMemberAccountCommandOutput>;
    associateMemberAccount(args: AssociateMemberAccountCommandInput, cb: (err: any, data?: AssociateMemberAccountCommandOutput) => void): void;
    associateMemberAccount(args: AssociateMemberAccountCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateMemberAccountCommandOutput) => void): void;
    /**
     * <p>Associates specified S3 resources with Amazon Macie for monitoring and data
     *       classification. If memberAccountId isn't specified, the action associates specified S3
     *       resources with Macie for the current master account. If memberAccountId is specified, the
     *       action associates specified S3 resources with Macie for the specified member account.
     *     </p>
     */
    associateS3Resources(args: AssociateS3ResourcesCommandInput, options?: __HttpHandlerOptions): Promise<AssociateS3ResourcesCommandOutput>;
    associateS3Resources(args: AssociateS3ResourcesCommandInput, cb: (err: any, data?: AssociateS3ResourcesCommandOutput) => void): void;
    associateS3Resources(args: AssociateS3ResourcesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateS3ResourcesCommandOutput) => void): void;
    /**
     * <p>Removes the specified member account from Amazon Macie.</p>
     */
    disassociateMemberAccount(args: DisassociateMemberAccountCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateMemberAccountCommandOutput>;
    disassociateMemberAccount(args: DisassociateMemberAccountCommandInput, cb: (err: any, data?: DisassociateMemberAccountCommandOutput) => void): void;
    disassociateMemberAccount(args: DisassociateMemberAccountCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateMemberAccountCommandOutput) => void): void;
    /**
     * <p>Removes specified S3 resources from being monitored by Amazon Macie. If memberAccountId
     *       isn't specified, the action removes specified S3 resources from Macie for the current master
     *       account. If memberAccountId is specified, the action removes specified S3 resources from Macie
     *       for the specified member account.</p>
     */
    disassociateS3Resources(args: DisassociateS3ResourcesCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateS3ResourcesCommandOutput>;
    disassociateS3Resources(args: DisassociateS3ResourcesCommandInput, cb: (err: any, data?: DisassociateS3ResourcesCommandOutput) => void): void;
    disassociateS3Resources(args: DisassociateS3ResourcesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateS3ResourcesCommandOutput) => void): void;
    /**
     * <p>Lists all Amazon Macie member accounts for the current Amazon Macie master
     *       account.</p>
     */
    listMemberAccounts(args: ListMemberAccountsCommandInput, options?: __HttpHandlerOptions): Promise<ListMemberAccountsCommandOutput>;
    listMemberAccounts(args: ListMemberAccountsCommandInput, cb: (err: any, data?: ListMemberAccountsCommandOutput) => void): void;
    listMemberAccounts(args: ListMemberAccountsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListMemberAccountsCommandOutput) => void): void;
    /**
     * <p>Lists all the S3 resources associated with Amazon Macie. If memberAccountId isn't
     *       specified, the action lists the S3 resources associated with Amazon Macie for the current
     *       master account. If memberAccountId is specified, the action lists the S3 resources associated
     *       with Amazon Macie for the specified member account. </p>
     */
    listS3Resources(args: ListS3ResourcesCommandInput, options?: __HttpHandlerOptions): Promise<ListS3ResourcesCommandOutput>;
    listS3Resources(args: ListS3ResourcesCommandInput, cb: (err: any, data?: ListS3ResourcesCommandOutput) => void): void;
    listS3Resources(args: ListS3ResourcesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListS3ResourcesCommandOutput) => void): void;
    /**
     * <p>Updates the classification types for the specified S3 resources. If memberAccountId
     *       isn't specified, the action updates the classification types of the S3 resources associated
     *       with Amazon Macie for the current master account. If memberAccountId is specified, the action
     *       updates the classification types of the S3 resources associated with Amazon Macie for the
     *       specified member account. </p>
     */
    updateS3Resources(args: UpdateS3ResourcesCommandInput, options?: __HttpHandlerOptions): Promise<UpdateS3ResourcesCommandOutput>;
    updateS3Resources(args: UpdateS3ResourcesCommandInput, cb: (err: any, data?: UpdateS3ResourcesCommandOutput) => void): void;
    updateS3Resources(args: UpdateS3ResourcesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateS3ResourcesCommandOutput) => void): void;
}
