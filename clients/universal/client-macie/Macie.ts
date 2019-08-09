import { MacieClient } from "./MacieClient";
import { AccessDeniedException } from "./types/AccessDeniedException";
import { AssociateMemberAccountInput } from "./types/AssociateMemberAccountInput";
import { AssociateMemberAccountOutput } from "./types/AssociateMemberAccountOutput";
import { AssociateS3ResourcesInput } from "./types/AssociateS3ResourcesInput";
import { AssociateS3ResourcesOutput } from "./types/AssociateS3ResourcesOutput";
import { DisassociateMemberAccountInput } from "./types/DisassociateMemberAccountInput";
import { DisassociateMemberAccountOutput } from "./types/DisassociateMemberAccountOutput";
import { DisassociateS3ResourcesInput } from "./types/DisassociateS3ResourcesInput";
import { DisassociateS3ResourcesOutput } from "./types/DisassociateS3ResourcesOutput";
import { InternalException } from "./types/InternalException";
import { InvalidInputException } from "./types/InvalidInputException";
import { LimitExceededException } from "./types/LimitExceededException";
import { ListMemberAccountsInput } from "./types/ListMemberAccountsInput";
import { ListMemberAccountsOutput } from "./types/ListMemberAccountsOutput";
import { ListS3ResourcesInput } from "./types/ListS3ResourcesInput";
import { ListS3ResourcesOutput } from "./types/ListS3ResourcesOutput";
import { UpdateS3ResourcesInput } from "./types/UpdateS3ResourcesInput";
import { UpdateS3ResourcesOutput } from "./types/UpdateS3ResourcesOutput";
import { AssociateMemberAccountCommand } from "./commands/AssociateMemberAccountCommand";
import { AssociateS3ResourcesCommand } from "./commands/AssociateS3ResourcesCommand";
import { DisassociateMemberAccountCommand } from "./commands/DisassociateMemberAccountCommand";
import { DisassociateS3ResourcesCommand } from "./commands/DisassociateS3ResourcesCommand";
import { ListMemberAccountsCommand } from "./commands/ListMemberAccountsCommand";
import { ListS3ResourcesCommand } from "./commands/ListS3ResourcesCommand";
import { UpdateS3ResourcesCommand } from "./commands/UpdateS3ResourcesCommand";

export class Macie extends MacieClient {
  /**
   * <p>Associates a specified AWS account with Amazon Macie as a member account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter. </p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error code describes the limit exceeded. </p>
   *   - {InternalException} <p>Internal server error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public associateMemberAccount(
    args: AssociateMemberAccountInput
  ): Promise<AssociateMemberAccountOutput>;
  public associateMemberAccount(
    args: AssociateMemberAccountInput,
    cb: (err: any, data?: AssociateMemberAccountOutput) => void
  ): void;
  public associateMemberAccount(
    args: AssociateMemberAccountInput,
    cb?: (err: any, data?: AssociateMemberAccountOutput) => void
  ): Promise<AssociateMemberAccountOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AssociateMemberAccountCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Associates specified S3 resources with Amazon Macie for monitoring and data classification. If memberAccountId isn't specified, the action associates specified S3 resources with Macie for the current master account. If memberAccountId is specified, the action associates specified S3 resources with Macie for the specified member account. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter. </p>
   *   - {AccessDeniedException} <p>You do not have required permissions to access the requested resource.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error code describes the limit exceeded. </p>
   *   - {InternalException} <p>Internal server error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public associateS3Resources(
    args: AssociateS3ResourcesInput
  ): Promise<AssociateS3ResourcesOutput>;
  public associateS3Resources(
    args: AssociateS3ResourcesInput,
    cb: (err: any, data?: AssociateS3ResourcesOutput) => void
  ): void;
  public associateS3Resources(
    args: AssociateS3ResourcesInput,
    cb?: (err: any, data?: AssociateS3ResourcesOutput) => void
  ): Promise<AssociateS3ResourcesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AssociateS3ResourcesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes the specified member account from Amazon Macie.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter. </p>
   *   - {InternalException} <p>Internal server error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public disassociateMemberAccount(
    args: DisassociateMemberAccountInput
  ): Promise<DisassociateMemberAccountOutput>;
  public disassociateMemberAccount(
    args: DisassociateMemberAccountInput,
    cb: (err: any, data?: DisassociateMemberAccountOutput) => void
  ): void;
  public disassociateMemberAccount(
    args: DisassociateMemberAccountInput,
    cb?: (err: any, data?: DisassociateMemberAccountOutput) => void
  ): Promise<DisassociateMemberAccountOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DisassociateMemberAccountCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes specified S3 resources from being monitored by Amazon Macie. If memberAccountId isn't specified, the action removes specified S3 resources from Macie for the current master account. If memberAccountId is specified, the action removes specified S3 resources from Macie for the specified member account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter. </p>
   *   - {AccessDeniedException} <p>You do not have required permissions to access the requested resource.</p>
   *   - {InternalException} <p>Internal server error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public disassociateS3Resources(
    args: DisassociateS3ResourcesInput
  ): Promise<DisassociateS3ResourcesOutput>;
  public disassociateS3Resources(
    args: DisassociateS3ResourcesInput,
    cb: (err: any, data?: DisassociateS3ResourcesOutput) => void
  ): void;
  public disassociateS3Resources(
    args: DisassociateS3ResourcesInput,
    cb?: (err: any, data?: DisassociateS3ResourcesOutput) => void
  ): Promise<DisassociateS3ResourcesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DisassociateS3ResourcesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists all Amazon Macie member accounts for the current Amazon Macie master account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>Internal server error.</p>
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listMemberAccounts(
    args: ListMemberAccountsInput
  ): Promise<ListMemberAccountsOutput>;
  public listMemberAccounts(
    args: ListMemberAccountsInput,
    cb: (err: any, data?: ListMemberAccountsOutput) => void
  ): void;
  public listMemberAccounts(
    args: ListMemberAccountsInput,
    cb?: (err: any, data?: ListMemberAccountsOutput) => void
  ): Promise<ListMemberAccountsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListMemberAccountsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists all the S3 resources associated with Amazon Macie. If memberAccountId isn't specified, the action lists the S3 resources associated with Amazon Macie for the current master account. If memberAccountId is specified, the action lists the S3 resources associated with Amazon Macie for the specified member account. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter. </p>
   *   - {AccessDeniedException} <p>You do not have required permissions to access the requested resource.</p>
   *   - {InternalException} <p>Internal server error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listS3Resources(
    args: ListS3ResourcesInput
  ): Promise<ListS3ResourcesOutput>;
  public listS3Resources(
    args: ListS3ResourcesInput,
    cb: (err: any, data?: ListS3ResourcesOutput) => void
  ): void;
  public listS3Resources(
    args: ListS3ResourcesInput,
    cb?: (err: any, data?: ListS3ResourcesOutput) => void
  ): Promise<ListS3ResourcesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListS3ResourcesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the classification types for the specified S3 resources. If memberAccountId isn't specified, the action updates the classification types of the S3 resources associated with Amazon Macie for the current master account. If memberAccountId is specified, the action updates the classification types of the S3 resources associated with Amazon Macie for the specified member account. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter. </p>
   *   - {AccessDeniedException} <p>You do not have required permissions to access the requested resource.</p>
   *   - {InternalException} <p>Internal server error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateS3Resources(
    args: UpdateS3ResourcesInput
  ): Promise<UpdateS3ResourcesOutput>;
  public updateS3Resources(
    args: UpdateS3ResourcesInput,
    cb: (err: any, data?: UpdateS3ResourcesOutput) => void
  ): void;
  public updateS3Resources(
    args: UpdateS3ResourcesInput,
    cb?: (err: any, data?: UpdateS3ResourcesOutput) => void
  ): Promise<UpdateS3ResourcesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateS3ResourcesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
