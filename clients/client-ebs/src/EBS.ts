// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

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
import { EBSClient, EBSClientConfig } from "./EBSClient";

const commands = {
  CompleteSnapshotCommand,
  GetSnapshotBlockCommand,
  ListChangedBlocksCommand,
  ListSnapshotBlocksCommand,
  PutSnapshotBlockCommand,
  StartSnapshotCommand,
};

export interface EBS {
  /**
   * @see {@link CompleteSnapshotCommand}
   */
  completeSnapshot(
    args: CompleteSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CompleteSnapshotCommandOutput>;
  completeSnapshot(
    args: CompleteSnapshotCommandInput,
    cb: (err: any, data?: CompleteSnapshotCommandOutput) => void
  ): void;
  completeSnapshot(
    args: CompleteSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CompleteSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSnapshotBlockCommand}
   */
  getSnapshotBlock(
    args: GetSnapshotBlockCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSnapshotBlockCommandOutput>;
  getSnapshotBlock(
    args: GetSnapshotBlockCommandInput,
    cb: (err: any, data?: GetSnapshotBlockCommandOutput) => void
  ): void;
  getSnapshotBlock(
    args: GetSnapshotBlockCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSnapshotBlockCommandOutput) => void
  ): void;

  /**
   * @see {@link ListChangedBlocksCommand}
   */
  listChangedBlocks(
    args: ListChangedBlocksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListChangedBlocksCommandOutput>;
  listChangedBlocks(
    args: ListChangedBlocksCommandInput,
    cb: (err: any, data?: ListChangedBlocksCommandOutput) => void
  ): void;
  listChangedBlocks(
    args: ListChangedBlocksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListChangedBlocksCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSnapshotBlocksCommand}
   */
  listSnapshotBlocks(
    args: ListSnapshotBlocksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSnapshotBlocksCommandOutput>;
  listSnapshotBlocks(
    args: ListSnapshotBlocksCommandInput,
    cb: (err: any, data?: ListSnapshotBlocksCommandOutput) => void
  ): void;
  listSnapshotBlocks(
    args: ListSnapshotBlocksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSnapshotBlocksCommandOutput) => void
  ): void;

  /**
   * @see {@link PutSnapshotBlockCommand}
   */
  putSnapshotBlock(
    args: PutSnapshotBlockCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutSnapshotBlockCommandOutput>;
  putSnapshotBlock(
    args: PutSnapshotBlockCommandInput,
    cb: (err: any, data?: PutSnapshotBlockCommandOutput) => void
  ): void;
  putSnapshotBlock(
    args: PutSnapshotBlockCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutSnapshotBlockCommandOutput) => void
  ): void;

  /**
   * @see {@link StartSnapshotCommand}
   */
  startSnapshot(args: StartSnapshotCommandInput, options?: __HttpHandlerOptions): Promise<StartSnapshotCommandOutput>;
  startSnapshot(args: StartSnapshotCommandInput, cb: (err: any, data?: StartSnapshotCommandOutput) => void): void;
  startSnapshot(
    args: StartSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartSnapshotCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>You can use the Amazon Elastic Block Store (Amazon EBS) direct APIs to create Amazon EBS snapshots, write data directly to
 *     		your snapshots, read data on your snapshots, and identify the differences or changes between
 *     		two snapshots. If you’re an independent software vendor (ISV) who offers backup services for
 *     		Amazon EBS, the EBS direct APIs make it more efficient and cost-effective to track incremental changes on
 *     		your Amazon EBS volumes through snapshots. This can be done without having to create new volumes
 *     		from snapshots, and then use Amazon Elastic Compute Cloud (Amazon EC2) instances to compare the differences.</p>
 *          <p>You can create incremental snapshots directly from data on-premises into volumes and the
 *     		cloud to use for quick disaster recovery. With the ability to write and read snapshots, you can
 *     		write your on-premises data to an snapshot during a disaster. Then after recovery, you can
 *     		restore it back to Amazon Web Services or on-premises from the snapshot. You no longer need to build and
 *     		maintain complex mechanisms to copy data to and from Amazon EBS.</p>
 *          <p>This API reference provides detailed information about the actions, data types,
 *             parameters, and errors of the EBS direct APIs. For more information about the elements that
 *             make up the EBS direct APIs, and examples of how to use them effectively, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-accessing-snapshot.html">Accessing the Contents of an Amazon EBS Snapshot</a> in the <i>Amazon Elastic Compute Cloud User
 *                 Guide</i>. For more information about the supported Amazon Web Services Regions, endpoints,
 *             and service quotas for the EBS direct APIs, see <a href="https://docs.aws.amazon.com/general/latest/gr/ebs-service.html">Amazon Elastic Block Store Endpoints and Quotas</a> in
 *             the <i>Amazon Web Services General Reference</i>.</p>
 */
export class EBS extends EBSClient implements EBS {}
createAggregatedClient(commands, EBS);
