import { EBSClient } from "./EBSClient";
import {
  GetSnapshotBlockCommand,
  GetSnapshotBlockCommandInput,
  GetSnapshotBlockCommandOutput
} from "./commands/GetSnapshotBlockCommand";
import {
  ListChangedBlocksCommand,
  ListChangedBlocksCommandInput,
  ListChangedBlocksCommandOutput
} from "./commands/ListChangedBlocksCommand";
import {
  ListSnapshotBlocksCommand,
  ListSnapshotBlocksCommandInput,
  ListSnapshotBlocksCommandOutput
} from "./commands/ListSnapshotBlocksCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>You can use the Amazon Elastic Block Store (EBS) direct APIs to directly read the data on your EBS
 *             snapshots, and identify the difference between two snapshots. You can view the details
 *             of blocks in an EBS snapshot, compare the block difference between two snapshots, and
 *             directly access the data in a snapshot. If you’re an independent software vendor (ISV)
 *             who offers backup services for EBS, the EBS direct APIs makes it easier and more
 *             cost-effective to track incremental changes on your EBS volumes via EBS snapshots. This
 *             can be done without having to create new volumes from EBS snapshots, and then use EC2
 *             instances to compare the differences.</p>
 *
 *
 *         <p>This API reference provides detailed information about the actions, data types,
 *             parameters, and errors of the EBS direct APIs. For more information about the elements that
 *             make up the EBS direct APIs, and examples of how to use them effectively, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-accessing-snapshot.html">Accessing the Contents of an EBS Snapshot</a>. For more information about how
 *             to use the EBS direct APIs, see the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-accessing-snapshots.html">EBS direct APIs User Guide</a>. To view the currently supported AWS Regions and
 *             endpoints for the EBS direct APIs, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#ebs_region">AWS
 *                 Service Endpoints</a> in the <i>AWS General
 *             Reference</i>.</p>
 */
export class EBS extends EBSClient {
  /**
   * <p>Returns the data in a block in an Amazon Elastic Block Store snapshot.</p>
   */
  public getSnapshotBlock(
    args: GetSnapshotBlockCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSnapshotBlockCommandOutput>;
  public getSnapshotBlock(
    args: GetSnapshotBlockCommandInput,
    cb: (err: any, data?: GetSnapshotBlockCommandOutput) => void
  ): void;
  public getSnapshotBlock(
    args: GetSnapshotBlockCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSnapshotBlockCommandOutput) => void
  ): void;
  public getSnapshotBlock(
    args: GetSnapshotBlockCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetSnapshotBlockCommandOutput) => void),
    cb?: (err: any, data?: GetSnapshotBlockCommandOutput) => void
  ): Promise<GetSnapshotBlockCommandOutput> | void {
    const command = new GetSnapshotBlockCommand(args);
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
   * <p>Returns the block indexes and block tokens for blocks that are different between two
   *             Amazon Elastic Block Store snapshots of the same volume/snapshot lineage.</p>
   */
  public listChangedBlocks(
    args: ListChangedBlocksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListChangedBlocksCommandOutput>;
  public listChangedBlocks(
    args: ListChangedBlocksCommandInput,
    cb: (err: any, data?: ListChangedBlocksCommandOutput) => void
  ): void;
  public listChangedBlocks(
    args: ListChangedBlocksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListChangedBlocksCommandOutput) => void
  ): void;
  public listChangedBlocks(
    args: ListChangedBlocksCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListChangedBlocksCommandOutput) => void),
    cb?: (err: any, data?: ListChangedBlocksCommandOutput) => void
  ): Promise<ListChangedBlocksCommandOutput> | void {
    const command = new ListChangedBlocksCommand(args);
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
   * <p>Returns the block indexes and block tokens for blocks in an Amazon Elastic Block Store snapshot.</p>
   */
  public listSnapshotBlocks(
    args: ListSnapshotBlocksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSnapshotBlocksCommandOutput>;
  public listSnapshotBlocks(
    args: ListSnapshotBlocksCommandInput,
    cb: (err: any, data?: ListSnapshotBlocksCommandOutput) => void
  ): void;
  public listSnapshotBlocks(
    args: ListSnapshotBlocksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSnapshotBlocksCommandOutput) => void
  ): void;
  public listSnapshotBlocks(
    args: ListSnapshotBlocksCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListSnapshotBlocksCommandOutput) => void),
    cb?: (err: any, data?: ListSnapshotBlocksCommandOutput) => void
  ): Promise<ListSnapshotBlocksCommandOutput> | void {
    const command = new ListSnapshotBlocksCommand(args);
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
