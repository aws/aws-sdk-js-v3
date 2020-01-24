import { CodeGuruReviewerClient } from "./CodeGuruReviewerClient";
import {
  AssociateRepositoryCommand,
  AssociateRepositoryCommandInput,
  AssociateRepositoryCommandOutput
} from "./commands/AssociateRepositoryCommand";
import {
  DescribeRepositoryAssociationCommand,
  DescribeRepositoryAssociationCommandInput,
  DescribeRepositoryAssociationCommandOutput
} from "./commands/DescribeRepositoryAssociationCommand";
import {
  DisassociateRepositoryCommand,
  DisassociateRepositoryCommandInput,
  DisassociateRepositoryCommandOutput
} from "./commands/DisassociateRepositoryCommand";
import {
  ListRepositoryAssociationsCommand,
  ListRepositoryAssociationsCommandInput,
  ListRepositoryAssociationsCommandOutput
} from "./commands/ListRepositoryAssociationsCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>This section provides documentation for the Amazon CodeGuru Reviewer API operations.</p>
 */
export class CodeGuruReviewer extends CodeGuruReviewerClient {
  /**
   * <p>Associates an AWS CodeCommit repository with Amazon CodeGuru Reviewer. When you associate an
   *         AWS CodeCommit repository with Amazon CodeGuru Reviewer, Amazon CodeGuru Reviewer will provide recommendations for
   *         each pull request. You can view recommendations in the AWS CodeCommit repository.</p>
   *         <p>You can associate a GitHub repository using the Amazon CodeGuru Reviewer console.</p>
   */
  public associateRepository(
    args: AssociateRepositoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateRepositoryCommandOutput>;
  public associateRepository(
    args: AssociateRepositoryCommandInput,
    cb: (err: any, data?: AssociateRepositoryCommandOutput) => void
  ): void;
  public associateRepository(
    args: AssociateRepositoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateRepositoryCommandOutput) => void
  ): void;
  public associateRepository(
    args: AssociateRepositoryCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: AssociateRepositoryCommandOutput) => void),
    cb?: (err: any, data?: AssociateRepositoryCommandOutput) => void
  ): Promise<AssociateRepositoryCommandOutput> | void {
    const command = new AssociateRepositoryCommand(args);
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

  /**
   * <p>Describes a repository association.</p>
   */
  public describeRepositoryAssociation(
    args: DescribeRepositoryAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRepositoryAssociationCommandOutput>;
  public describeRepositoryAssociation(
    args: DescribeRepositoryAssociationCommandInput,
    cb: (err: any, data?: DescribeRepositoryAssociationCommandOutput) => void
  ): void;
  public describeRepositoryAssociation(
    args: DescribeRepositoryAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRepositoryAssociationCommandOutput) => void
  ): void;
  public describeRepositoryAssociation(
    args: DescribeRepositoryAssociationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeRepositoryAssociationCommandOutput) => void),
    cb?: (err: any, data?: DescribeRepositoryAssociationCommandOutput) => void
  ): Promise<DescribeRepositoryAssociationCommandOutput> | void {
    const command = new DescribeRepositoryAssociationCommand(args);
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

  /**
   * <p>Removes the association between Amazon CodeGuru Reviewer and a repository.</p>
   */
  public disassociateRepository(
    args: DisassociateRepositoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateRepositoryCommandOutput>;
  public disassociateRepository(
    args: DisassociateRepositoryCommandInput,
    cb: (err: any, data?: DisassociateRepositoryCommandOutput) => void
  ): void;
  public disassociateRepository(
    args: DisassociateRepositoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateRepositoryCommandOutput) => void
  ): void;
  public disassociateRepository(
    args: DisassociateRepositoryCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DisassociateRepositoryCommandOutput) => void),
    cb?: (err: any, data?: DisassociateRepositoryCommandOutput) => void
  ): Promise<DisassociateRepositoryCommandOutput> | void {
    const command = new DisassociateRepositoryCommand(args);
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

  /**
   * <p>Lists repository associations. You can optionally filter on one or more
   *         of the following recommendation properties: provider types, states, names, and owners.</p>
   */
  public listRepositoryAssociations(
    args: ListRepositoryAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRepositoryAssociationsCommandOutput>;
  public listRepositoryAssociations(
    args: ListRepositoryAssociationsCommandInput,
    cb: (err: any, data?: ListRepositoryAssociationsCommandOutput) => void
  ): void;
  public listRepositoryAssociations(
    args: ListRepositoryAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRepositoryAssociationsCommandOutput) => void
  ): void;
  public listRepositoryAssociations(
    args: ListRepositoryAssociationsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListRepositoryAssociationsCommandOutput) => void),
    cb?: (err: any, data?: ListRepositoryAssociationsCommandOutput) => void
  ): Promise<ListRepositoryAssociationsCommandOutput> | void {
    const command = new ListRepositoryAssociationsCommand(args);
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
