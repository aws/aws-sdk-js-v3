// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  CancelJournalKinesisStreamCommand,
  CancelJournalKinesisStreamCommandInput,
  CancelJournalKinesisStreamCommandOutput,
} from "./commands/CancelJournalKinesisStreamCommand";
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
  DescribeJournalKinesisStreamCommand,
  DescribeJournalKinesisStreamCommandInput,
  DescribeJournalKinesisStreamCommandOutput,
} from "./commands/DescribeJournalKinesisStreamCommand";
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
  ListJournalKinesisStreamsForLedgerCommand,
  ListJournalKinesisStreamsForLedgerCommandInput,
  ListJournalKinesisStreamsForLedgerCommandOutput,
} from "./commands/ListJournalKinesisStreamsForLedgerCommand";
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
import {
  StreamJournalToKinesisCommand,
  StreamJournalToKinesisCommandInput,
  StreamJournalToKinesisCommandOutput,
} from "./commands/StreamJournalToKinesisCommand";
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
import {
  UpdateLedgerPermissionsModeCommand,
  UpdateLedgerPermissionsModeCommandInput,
  UpdateLedgerPermissionsModeCommandOutput,
} from "./commands/UpdateLedgerPermissionsModeCommand";
import { QLDBClient, QLDBClientConfig } from "./QLDBClient";

const commands = {
  CancelJournalKinesisStreamCommand,
  CreateLedgerCommand,
  DeleteLedgerCommand,
  DescribeJournalKinesisStreamCommand,
  DescribeJournalS3ExportCommand,
  DescribeLedgerCommand,
  ExportJournalToS3Command,
  GetBlockCommand,
  GetDigestCommand,
  GetRevisionCommand,
  ListJournalKinesisStreamsForLedgerCommand,
  ListJournalS3ExportsCommand,
  ListJournalS3ExportsForLedgerCommand,
  ListLedgersCommand,
  ListTagsForResourceCommand,
  StreamJournalToKinesisCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateLedgerCommand,
  UpdateLedgerPermissionsModeCommand,
};

export interface QLDB {
  /**
   * @see {@link CancelJournalKinesisStreamCommand}
   */
  cancelJournalKinesisStream(
    args: CancelJournalKinesisStreamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelJournalKinesisStreamCommandOutput>;
  cancelJournalKinesisStream(
    args: CancelJournalKinesisStreamCommandInput,
    cb: (err: any, data?: CancelJournalKinesisStreamCommandOutput) => void
  ): void;
  cancelJournalKinesisStream(
    args: CancelJournalKinesisStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelJournalKinesisStreamCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLedgerCommand}
   */
  createLedger(args: CreateLedgerCommandInput, options?: __HttpHandlerOptions): Promise<CreateLedgerCommandOutput>;
  createLedger(args: CreateLedgerCommandInput, cb: (err: any, data?: CreateLedgerCommandOutput) => void): void;
  createLedger(
    args: CreateLedgerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLedgerCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLedgerCommand}
   */
  deleteLedger(args: DeleteLedgerCommandInput, options?: __HttpHandlerOptions): Promise<DeleteLedgerCommandOutput>;
  deleteLedger(args: DeleteLedgerCommandInput, cb: (err: any, data?: DeleteLedgerCommandOutput) => void): void;
  deleteLedger(
    args: DeleteLedgerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLedgerCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeJournalKinesisStreamCommand}
   */
  describeJournalKinesisStream(
    args: DescribeJournalKinesisStreamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeJournalKinesisStreamCommandOutput>;
  describeJournalKinesisStream(
    args: DescribeJournalKinesisStreamCommandInput,
    cb: (err: any, data?: DescribeJournalKinesisStreamCommandOutput) => void
  ): void;
  describeJournalKinesisStream(
    args: DescribeJournalKinesisStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeJournalKinesisStreamCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeJournalS3ExportCommand}
   */
  describeJournalS3Export(
    args: DescribeJournalS3ExportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeJournalS3ExportCommandOutput>;
  describeJournalS3Export(
    args: DescribeJournalS3ExportCommandInput,
    cb: (err: any, data?: DescribeJournalS3ExportCommandOutput) => void
  ): void;
  describeJournalS3Export(
    args: DescribeJournalS3ExportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeJournalS3ExportCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLedgerCommand}
   */
  describeLedger(
    args: DescribeLedgerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLedgerCommandOutput>;
  describeLedger(args: DescribeLedgerCommandInput, cb: (err: any, data?: DescribeLedgerCommandOutput) => void): void;
  describeLedger(
    args: DescribeLedgerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLedgerCommandOutput) => void
  ): void;

  /**
   * @see {@link ExportJournalToS3Command}
   */
  exportJournalToS3(
    args: ExportJournalToS3CommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExportJournalToS3CommandOutput>;
  exportJournalToS3(
    args: ExportJournalToS3CommandInput,
    cb: (err: any, data?: ExportJournalToS3CommandOutput) => void
  ): void;
  exportJournalToS3(
    args: ExportJournalToS3CommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExportJournalToS3CommandOutput) => void
  ): void;

  /**
   * @see {@link GetBlockCommand}
   */
  getBlock(args: GetBlockCommandInput, options?: __HttpHandlerOptions): Promise<GetBlockCommandOutput>;
  getBlock(args: GetBlockCommandInput, cb: (err: any, data?: GetBlockCommandOutput) => void): void;
  getBlock(
    args: GetBlockCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBlockCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDigestCommand}
   */
  getDigest(args: GetDigestCommandInput, options?: __HttpHandlerOptions): Promise<GetDigestCommandOutput>;
  getDigest(args: GetDigestCommandInput, cb: (err: any, data?: GetDigestCommandOutput) => void): void;
  getDigest(
    args: GetDigestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDigestCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRevisionCommand}
   */
  getRevision(args: GetRevisionCommandInput, options?: __HttpHandlerOptions): Promise<GetRevisionCommandOutput>;
  getRevision(args: GetRevisionCommandInput, cb: (err: any, data?: GetRevisionCommandOutput) => void): void;
  getRevision(
    args: GetRevisionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRevisionCommandOutput) => void
  ): void;

  /**
   * @see {@link ListJournalKinesisStreamsForLedgerCommand}
   */
  listJournalKinesisStreamsForLedger(
    args: ListJournalKinesisStreamsForLedgerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListJournalKinesisStreamsForLedgerCommandOutput>;
  listJournalKinesisStreamsForLedger(
    args: ListJournalKinesisStreamsForLedgerCommandInput,
    cb: (err: any, data?: ListJournalKinesisStreamsForLedgerCommandOutput) => void
  ): void;
  listJournalKinesisStreamsForLedger(
    args: ListJournalKinesisStreamsForLedgerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListJournalKinesisStreamsForLedgerCommandOutput) => void
  ): void;

  /**
   * @see {@link ListJournalS3ExportsCommand}
   */
  listJournalS3Exports(
    args: ListJournalS3ExportsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListJournalS3ExportsCommandOutput>;
  listJournalS3Exports(
    args: ListJournalS3ExportsCommandInput,
    cb: (err: any, data?: ListJournalS3ExportsCommandOutput) => void
  ): void;
  listJournalS3Exports(
    args: ListJournalS3ExportsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListJournalS3ExportsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListJournalS3ExportsForLedgerCommand}
   */
  listJournalS3ExportsForLedger(
    args: ListJournalS3ExportsForLedgerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListJournalS3ExportsForLedgerCommandOutput>;
  listJournalS3ExportsForLedger(
    args: ListJournalS3ExportsForLedgerCommandInput,
    cb: (err: any, data?: ListJournalS3ExportsForLedgerCommandOutput) => void
  ): void;
  listJournalS3ExportsForLedger(
    args: ListJournalS3ExportsForLedgerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListJournalS3ExportsForLedgerCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLedgersCommand}
   */
  listLedgers(args: ListLedgersCommandInput, options?: __HttpHandlerOptions): Promise<ListLedgersCommandOutput>;
  listLedgers(args: ListLedgersCommandInput, cb: (err: any, data?: ListLedgersCommandOutput) => void): void;
  listLedgers(
    args: ListLedgersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLedgersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link StreamJournalToKinesisCommand}
   */
  streamJournalToKinesis(
    args: StreamJournalToKinesisCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StreamJournalToKinesisCommandOutput>;
  streamJournalToKinesis(
    args: StreamJournalToKinesisCommandInput,
    cb: (err: any, data?: StreamJournalToKinesisCommandOutput) => void
  ): void;
  streamJournalToKinesis(
    args: StreamJournalToKinesisCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StreamJournalToKinesisCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateLedgerCommand}
   */
  updateLedger(args: UpdateLedgerCommandInput, options?: __HttpHandlerOptions): Promise<UpdateLedgerCommandOutput>;
  updateLedger(args: UpdateLedgerCommandInput, cb: (err: any, data?: UpdateLedgerCommandOutput) => void): void;
  updateLedger(
    args: UpdateLedgerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLedgerCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateLedgerPermissionsModeCommand}
   */
  updateLedgerPermissionsMode(
    args: UpdateLedgerPermissionsModeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateLedgerPermissionsModeCommandOutput>;
  updateLedgerPermissionsMode(
    args: UpdateLedgerPermissionsModeCommandInput,
    cb: (err: any, data?: UpdateLedgerPermissionsModeCommandOutput) => void
  ): void;
  updateLedgerPermissionsMode(
    args: UpdateLedgerPermissionsModeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLedgerPermissionsModeCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>The resource management API for Amazon QLDB</p>
 */
export class QLDB extends QLDBClient implements QLDB {}
createAggregatedClient(commands, QLDB);
