import { QLDBClient } from "./QLDBClient";
import {
  CreateLedgerCommand,
  CreateLedgerCommandInput,
  CreateLedgerCommandOutput,
} from "./commands/CreateLedgerCommand";
import {
  DeleteLedgerCommand,
  DeleteLedgerCommandInput,
  DeleteLedgerCommandOutput,
} from "./commands/DeleteLedgerCommand";
import {
  DescribeJournalS3ExportCommand,
  DescribeJournalS3ExportCommandInput,
  DescribeJournalS3ExportCommandOutput,
} from "./commands/DescribeJournalS3ExportCommand";
import {
  DescribeLedgerCommand,
  DescribeLedgerCommandInput,
  DescribeLedgerCommandOutput,
} from "./commands/DescribeLedgerCommand";
import {
  ExportJournalToS3Command,
  ExportJournalToS3CommandInput,
  ExportJournalToS3CommandOutput,
} from "./commands/ExportJournalToS3Command";
import { GetBlockCommand, GetBlockCommandInput, GetBlockCommandOutput } from "./commands/GetBlockCommand";
import { GetDigestCommand, GetDigestCommandInput, GetDigestCommandOutput } from "./commands/GetDigestCommand";
import { GetRevisionCommand, GetRevisionCommandInput, GetRevisionCommandOutput } from "./commands/GetRevisionCommand";
import {
  ListJournalS3ExportsCommand,
  ListJournalS3ExportsCommandInput,
  ListJournalS3ExportsCommandOutput,
} from "./commands/ListJournalS3ExportsCommand";
import {
  ListJournalS3ExportsForLedgerCommand,
  ListJournalS3ExportsForLedgerCommandInput,
  ListJournalS3ExportsForLedgerCommandOutput,
} from "./commands/ListJournalS3ExportsForLedgerCommand";
import { ListLedgersCommand, ListLedgersCommandInput, ListLedgersCommandOutput } from "./commands/ListLedgersCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateLedgerCommand,
  UpdateLedgerCommandInput,
  UpdateLedgerCommandOutput,
} from "./commands/UpdateLedgerCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>The control plane for Amazon QLDB</p>
 */
export class QLDB extends QLDBClient {
  /**
   * <p>Creates a new ledger in your AWS account.</p>
   */
  public createLedger(
    args: CreateLedgerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLedgerCommandOutput>;
  public createLedger(args: CreateLedgerCommandInput, cb: (err: any, data?: CreateLedgerCommandOutput) => void): void;
  public createLedger(
    args: CreateLedgerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLedgerCommandOutput) => void
  ): void;
  public createLedger(
    args: CreateLedgerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateLedgerCommandOutput) => void),
    cb?: (err: any, data?: CreateLedgerCommandOutput) => void
  ): Promise<CreateLedgerCommandOutput> | void {
    const command = new CreateLedgerCommand(args);
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
   * <p>Deletes a ledger and all of its contents. This action is irreversible.</p>
   *          <p>If deletion protection is enabled, you must first disable it before you can delete the
   *          ledger using the QLDB API or the AWS Command Line Interface (AWS CLI). You can disable it by calling the
   *             <code>UpdateLedger</code> operation to set the flag to <code>false</code>. The QLDB
   *          console disables deletion protection for you when you use it to delete a ledger.</p>
   */
  public deleteLedger(
    args: DeleteLedgerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLedgerCommandOutput>;
  public deleteLedger(args: DeleteLedgerCommandInput, cb: (err: any, data?: DeleteLedgerCommandOutput) => void): void;
  public deleteLedger(
    args: DeleteLedgerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLedgerCommandOutput) => void
  ): void;
  public deleteLedger(
    args: DeleteLedgerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteLedgerCommandOutput) => void),
    cb?: (err: any, data?: DeleteLedgerCommandOutput) => void
  ): Promise<DeleteLedgerCommandOutput> | void {
    const command = new DeleteLedgerCommand(args);
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
   * <p>Returns information about a journal export job, including the ledger name, export ID,
   *          when it was created, current status, and its start and end time export parameters.</p>
   *          <p>If the export job with the given <code>ExportId</code> doesn't exist, then throws
   *             <code>ResourceNotFoundException</code>.</p>
   *          <p>If the ledger with the given <code>Name</code> doesn't exist, then throws
   *             <code>ResourceNotFoundException</code>.</p>
   */
  public describeJournalS3Export(
    args: DescribeJournalS3ExportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeJournalS3ExportCommandOutput>;
  public describeJournalS3Export(
    args: DescribeJournalS3ExportCommandInput,
    cb: (err: any, data?: DescribeJournalS3ExportCommandOutput) => void
  ): void;
  public describeJournalS3Export(
    args: DescribeJournalS3ExportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeJournalS3ExportCommandOutput) => void
  ): void;
  public describeJournalS3Export(
    args: DescribeJournalS3ExportCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeJournalS3ExportCommandOutput) => void),
    cb?: (err: any, data?: DescribeJournalS3ExportCommandOutput) => void
  ): Promise<DescribeJournalS3ExportCommandOutput> | void {
    const command = new DescribeJournalS3ExportCommand(args);
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
   * <p>Returns information about a ledger, including its state and when it was created.</p>
   */
  public describeLedger(
    args: DescribeLedgerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLedgerCommandOutput>;
  public describeLedger(
    args: DescribeLedgerCommandInput,
    cb: (err: any, data?: DescribeLedgerCommandOutput) => void
  ): void;
  public describeLedger(
    args: DescribeLedgerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLedgerCommandOutput) => void
  ): void;
  public describeLedger(
    args: DescribeLedgerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeLedgerCommandOutput) => void),
    cb?: (err: any, data?: DescribeLedgerCommandOutput) => void
  ): Promise<DescribeLedgerCommandOutput> | void {
    const command = new DescribeLedgerCommand(args);
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
   * <p>Exports journal contents within a date and time range from a ledger into a specified
   *          Amazon Simple Storage Service (Amazon S3) bucket. The data is written as files in Amazon Ion format.</p>
   *          <p>If the ledger with the given <code>Name</code> doesn't exist, then throws
   *             <code>ResourceNotFoundException</code>.</p>
   *          <p>If the ledger with the given <code>Name</code> is in <code>CREATING</code> status, then
   *          throws <code>ResourcePreconditionNotMetException</code>.</p>
   *          <p>You can initiate up to two concurrent journal export requests for each ledger. Beyond
   *          this limit, journal export requests throw <code>LimitExceededException</code>.</p>
   */
  public exportJournalToS3(
    args: ExportJournalToS3CommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExportJournalToS3CommandOutput>;
  public exportJournalToS3(
    args: ExportJournalToS3CommandInput,
    cb: (err: any, data?: ExportJournalToS3CommandOutput) => void
  ): void;
  public exportJournalToS3(
    args: ExportJournalToS3CommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExportJournalToS3CommandOutput) => void
  ): void;
  public exportJournalToS3(
    args: ExportJournalToS3CommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ExportJournalToS3CommandOutput) => void),
    cb?: (err: any, data?: ExportJournalToS3CommandOutput) => void
  ): Promise<ExportJournalToS3CommandOutput> | void {
    const command = new ExportJournalToS3Command(args);
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
   * <p>Returns a journal block object at a specified address in a ledger. Also returns a proof
   *          of the specified block for verification if <code>DigestTipAddress</code> is
   *          provided.</p>
   *          <p>If the specified ledger doesn't exist or is in <code>DELETING</code> status, then throws
   *             <code>ResourceNotFoundException</code>.</p>
   *          <p>If the specified ledger is in <code>CREATING</code> status, then throws
   *             <code>ResourcePreconditionNotMetException</code>.</p>
   *          <p>If no block exists with the specified address, then throws
   *             <code>InvalidParameterException</code>.</p>
   */
  public getBlock(args: GetBlockCommandInput, options?: __HttpHandlerOptions): Promise<GetBlockCommandOutput>;
  public getBlock(args: GetBlockCommandInput, cb: (err: any, data?: GetBlockCommandOutput) => void): void;
  public getBlock(
    args: GetBlockCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBlockCommandOutput) => void
  ): void;
  public getBlock(
    args: GetBlockCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetBlockCommandOutput) => void),
    cb?: (err: any, data?: GetBlockCommandOutput) => void
  ): Promise<GetBlockCommandOutput> | void {
    const command = new GetBlockCommand(args);
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
   * <p>Returns the digest of a ledger at the latest committed block in the journal. The
   *          response includes a 256-bit hash value and a block address.</p>
   */
  public getDigest(args: GetDigestCommandInput, options?: __HttpHandlerOptions): Promise<GetDigestCommandOutput>;
  public getDigest(args: GetDigestCommandInput, cb: (err: any, data?: GetDigestCommandOutput) => void): void;
  public getDigest(
    args: GetDigestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDigestCommandOutput) => void
  ): void;
  public getDigest(
    args: GetDigestCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDigestCommandOutput) => void),
    cb?: (err: any, data?: GetDigestCommandOutput) => void
  ): Promise<GetDigestCommandOutput> | void {
    const command = new GetDigestCommand(args);
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
   * <p>Returns a revision data object for a specified document ID and block address. Also
   *          returns a proof of the specified revision for verification if <code>DigestTipAddress</code>
   *          is provided.</p>
   */
  public getRevision(args: GetRevisionCommandInput, options?: __HttpHandlerOptions): Promise<GetRevisionCommandOutput>;
  public getRevision(args: GetRevisionCommandInput, cb: (err: any, data?: GetRevisionCommandOutput) => void): void;
  public getRevision(
    args: GetRevisionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRevisionCommandOutput) => void
  ): void;
  public getRevision(
    args: GetRevisionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetRevisionCommandOutput) => void),
    cb?: (err: any, data?: GetRevisionCommandOutput) => void
  ): Promise<GetRevisionCommandOutput> | void {
    const command = new GetRevisionCommand(args);
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
   * <p>Returns an array of journal export job descriptions for all ledgers that are associated
   *          with the current AWS account and Region.</p>
   *          <p>This action returns a maximum of <code>MaxResults</code> items, and is paginated so that
   *          you can retrieve all the items by calling <code>ListJournalS3Exports</code> multiple
   *          times.</p>
   */
  public listJournalS3Exports(
    args: ListJournalS3ExportsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListJournalS3ExportsCommandOutput>;
  public listJournalS3Exports(
    args: ListJournalS3ExportsCommandInput,
    cb: (err: any, data?: ListJournalS3ExportsCommandOutput) => void
  ): void;
  public listJournalS3Exports(
    args: ListJournalS3ExportsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListJournalS3ExportsCommandOutput) => void
  ): void;
  public listJournalS3Exports(
    args: ListJournalS3ExportsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListJournalS3ExportsCommandOutput) => void),
    cb?: (err: any, data?: ListJournalS3ExportsCommandOutput) => void
  ): Promise<ListJournalS3ExportsCommandOutput> | void {
    const command = new ListJournalS3ExportsCommand(args);
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
   * <p>Returns an array of journal export job descriptions for a specified ledger.</p>
   *          <p>This action returns a maximum of <code>MaxResults</code> items, and is paginated so that
   *          you can retrieve all the items by calling <code>ListJournalS3ExportsForLedger</code>
   *          multiple times.</p>
   */
  public listJournalS3ExportsForLedger(
    args: ListJournalS3ExportsForLedgerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListJournalS3ExportsForLedgerCommandOutput>;
  public listJournalS3ExportsForLedger(
    args: ListJournalS3ExportsForLedgerCommandInput,
    cb: (err: any, data?: ListJournalS3ExportsForLedgerCommandOutput) => void
  ): void;
  public listJournalS3ExportsForLedger(
    args: ListJournalS3ExportsForLedgerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListJournalS3ExportsForLedgerCommandOutput) => void
  ): void;
  public listJournalS3ExportsForLedger(
    args: ListJournalS3ExportsForLedgerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListJournalS3ExportsForLedgerCommandOutput) => void),
    cb?: (err: any, data?: ListJournalS3ExportsForLedgerCommandOutput) => void
  ): Promise<ListJournalS3ExportsForLedgerCommandOutput> | void {
    const command = new ListJournalS3ExportsForLedgerCommand(args);
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
   * <p>Returns an array of ledger summaries that are associated with the current AWS account
   *          and Region.</p>
   *          <p>This action returns a maximum of 100 items and is paginated so that you can
   *          retrieve all the items by calling <code>ListLedgers</code> multiple times.</p>
   */
  public listLedgers(args: ListLedgersCommandInput, options?: __HttpHandlerOptions): Promise<ListLedgersCommandOutput>;
  public listLedgers(args: ListLedgersCommandInput, cb: (err: any, data?: ListLedgersCommandOutput) => void): void;
  public listLedgers(
    args: ListLedgersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLedgersCommandOutput) => void
  ): void;
  public listLedgers(
    args: ListLedgersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListLedgersCommandOutput) => void),
    cb?: (err: any, data?: ListLedgersCommandOutput) => void
  ): Promise<ListLedgersCommandOutput> | void {
    const command = new ListLedgersCommand(args);
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
   * <p>Returns all tags for a specified Amazon QLDB resource.</p>
   */
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
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
   * <p>Adds one or more tags to a specified Amazon QLDB resource.</p>
   *          <p>A resource can have up to 50 tags. If you try to create more than 50 tags for a
   *          resource, your request fails and returns an error.</p>
   */
  public tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  public tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
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
   * <p>Removes one or more tags from a specified Amazon QLDB resource. You can specify up to 50
   *          tag keys to remove.</p>
   */
  public untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  public untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
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
   * <p>Updates properties on a ledger.</p>
   */
  public updateLedger(
    args: UpdateLedgerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateLedgerCommandOutput>;
  public updateLedger(args: UpdateLedgerCommandInput, cb: (err: any, data?: UpdateLedgerCommandOutput) => void): void;
  public updateLedger(
    args: UpdateLedgerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLedgerCommandOutput) => void
  ): void;
  public updateLedger(
    args: UpdateLedgerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateLedgerCommandOutput) => void),
    cb?: (err: any, data?: UpdateLedgerCommandOutput) => void
  ): Promise<UpdateLedgerCommandOutput> | void {
    const command = new UpdateLedgerCommand(args);
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
