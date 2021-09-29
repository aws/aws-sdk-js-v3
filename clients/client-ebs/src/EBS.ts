import { EBSClient } from "./EBSClient";
import {
  CompleteSnapshotCommand,
  CompleteSnapshotCommandInput,
  CompleteSnapshotCommandOutput,
} from "./commands/CompleteSnapshotCommand";
import {
  GetSnapshotBlockCommand,
  GetSnapshotBlockCommandInput,
  GetSnapshotBlockCommandOutput,
} from "./commands/GetSnapshotBlockCommand";
import {
  ListChangedBlocksCommand,
  ListChangedBlocksCommandInput,
  ListChangedBlocksCommandOutput,
} from "./commands/ListChangedBlocksCommand";
import {
  ListSnapshotBlocksCommand,
  ListSnapshotBlocksCommandInput,
  ListSnapshotBlocksCommandOutput,
} from "./commands/ListSnapshotBlocksCommand";
import {
  PutSnapshotBlockCommand,
  PutSnapshotBlockCommandInput,
  PutSnapshotBlockCommandOutput,
} from "./commands/PutSnapshotBlockCommand";
import {
  StartSnapshotCommand,
  StartSnapshotCommandInput,
  StartSnapshotCommandOutput,
} from "./commands/StartSnapshotCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>You can use the Amazon Elastic Block Store (Amazon EBS) direct APIs to create Amazon EBS snapshots, write data directly to
 *     		your snapshots, read data on your snapshots, and identify the differences or changes between
 *     		two snapshots. If you’re an independent software vendor (ISV) who offers backup services for
 *     		Amazon EBS, the EBS direct APIs make it more efficient and cost-effective to track incremental changes on
 *     		your Amazon EBS volumes through snapshots. This can be done without having to create new volumes
 *     		from snapshots, and then use Amazon Elastic Compute Cloud (Amazon EC2) instances to compare the differences.</p>
 *
 *     	    <p>You can create incremental snapshots directly from data on-premises into volumes and the
 *     		cloud to use for quick disaster recovery. With the ability to write and read snapshots, you can
 *     		write your on-premises data to an snapshot during a disaster. Then after recovery, you can
 *     		restore it back to Amazon Web Services or on-premises from the snapshot. You no longer need to build and
 *     		maintain complex mechanisms to copy data to and from Amazon EBS.</p>
 *
 *
 *         <p>This API reference provides detailed information about the actions, data types,
 *             parameters, and errors of the EBS direct APIs. For more information about the elements that
 *             make up the EBS direct APIs, and examples of how to use them effectively, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-accessing-snapshot.html">Accessing the Contents of an Amazon EBS Snapshot</a> in the <i>Amazon Elastic Compute Cloud User
 *                 Guide</i>. For more information about the supported Amazon Web Services Regions, endpoints,
 *             and service quotas for the EBS direct APIs, see <a href="https://docs.aws.amazon.com/general/latest/gr/ebs-service.html">Amazon Elastic Block Store Endpoints and Quotas</a> in
 *             the <i>Amazon Web Services General Reference</i>.</p>
 */
export class EBS extends EBSClient {
  /**
   * <p>Seals and completes the snapshot after all of the required blocks of data have been
   *             written to it. Completing the snapshot changes the status to <code>completed</code>. You
   *             cannot write new blocks to a snapshot after it has been completed.</p>
   */
  public completeSnapshot(
    args: CompleteSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CompleteSnapshotCommandOutput>;
  public completeSnapshot(
    args: CompleteSnapshotCommandInput,
    cb: (err: any, data?: CompleteSnapshotCommandOutput) => void
  ): void;
  public completeSnapshot(
    args: CompleteSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CompleteSnapshotCommandOutput) => void
  ): void;
  public completeSnapshot(
    args: CompleteSnapshotCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CompleteSnapshotCommandOutput) => void),
    cb?: (err: any, data?: CompleteSnapshotCommandOutput) => void
  ): Promise<CompleteSnapshotCommandOutput> | void {
    const command = new CompleteSnapshotCommand(args);
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSnapshotBlockCommandOutput) => void),
    cb?: (err: any, data?: GetSnapshotBlockCommandOutput) => void
  ): Promise<GetSnapshotBlockCommandOutput> | void {
    const command = new GetSnapshotBlockCommand(args);
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
   * <p>Returns information about the blocks that are different between two
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListChangedBlocksCommandOutput) => void),
    cb?: (err: any, data?: ListChangedBlocksCommandOutput) => void
  ): Promise<ListChangedBlocksCommandOutput> | void {
    const command = new ListChangedBlocksCommand(args);
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
   * <p>Returns information about the blocks in an Amazon Elastic Block Store snapshot.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSnapshotBlocksCommandOutput) => void),
    cb?: (err: any, data?: ListSnapshotBlocksCommandOutput) => void
  ): Promise<ListSnapshotBlocksCommandOutput> | void {
    const command = new ListSnapshotBlocksCommand(args);
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
   * <p>Writes a block of data to a snapshot. If the specified block contains
   *             data, the existing data is overwritten. The target snapshot must be in the
   *                 <code>pending</code> state.</p>
   *     	    <p>Data written to a snapshot must be aligned with 512-KiB sectors.</p>
   */
  public putSnapshotBlock(
    args: PutSnapshotBlockCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutSnapshotBlockCommandOutput>;
  public putSnapshotBlock(
    args: PutSnapshotBlockCommandInput,
    cb: (err: any, data?: PutSnapshotBlockCommandOutput) => void
  ): void;
  public putSnapshotBlock(
    args: PutSnapshotBlockCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutSnapshotBlockCommandOutput) => void
  ): void;
  public putSnapshotBlock(
    args: PutSnapshotBlockCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutSnapshotBlockCommandOutput) => void),
    cb?: (err: any, data?: PutSnapshotBlockCommandOutput) => void
  ): Promise<PutSnapshotBlockCommandOutput> | void {
    const command = new PutSnapshotBlockCommand(args);
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
   * <p>Creates a new Amazon EBS snapshot. The new snapshot enters the <code>pending</code> state
   *             after the request completes. </p>
   *         <p>After creating the snapshot, use <a href="https://docs.aws.amazon.com/ebs/latest/APIReference/API_PutSnapshotBlock.html"> PutSnapshotBlock</a> to
   *             write blocks of data to the snapshot.</p>
   */
  public startSnapshot(
    args: StartSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartSnapshotCommandOutput>;
  public startSnapshot(
    args: StartSnapshotCommandInput,
    cb: (err: any, data?: StartSnapshotCommandOutput) => void
  ): void;
  public startSnapshot(
    args: StartSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartSnapshotCommandOutput) => void
  ): void;
  public startSnapshot(
    args: StartSnapshotCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartSnapshotCommandOutput) => void),
    cb?: (err: any, data?: StartSnapshotCommandOutput) => void
  ): Promise<StartSnapshotCommandOutput> | void {
    const command = new StartSnapshotCommand(args);
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
