// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type { HttpHandlerOptions as __HttpHandlerOptions, MetricsRecorder as __MetricsRecorder } from "@smithy/types";

import {
  type CreateDeliveryStreamCommandInput,
  type CreateDeliveryStreamCommandOutput,
  CreateDeliveryStreamCommand,
} from "./commands/CreateDeliveryStreamCommand";
import {
  type DeleteDeliveryStreamCommandInput,
  type DeleteDeliveryStreamCommandOutput,
  DeleteDeliveryStreamCommand,
} from "./commands/DeleteDeliveryStreamCommand";
import {
  type DescribeDeliveryStreamCommandInput,
  type DescribeDeliveryStreamCommandOutput,
  DescribeDeliveryStreamCommand,
} from "./commands/DescribeDeliveryStreamCommand";
import {
  type ListDeliveryStreamsCommandInput,
  type ListDeliveryStreamsCommandOutput,
  ListDeliveryStreamsCommand,
} from "./commands/ListDeliveryStreamsCommand";
import {
  type ListTagsForDeliveryStreamCommandInput,
  type ListTagsForDeliveryStreamCommandOutput,
  ListTagsForDeliveryStreamCommand,
} from "./commands/ListTagsForDeliveryStreamCommand";
import {
  type PutRecordBatchCommandInput,
  type PutRecordBatchCommandOutput,
  PutRecordBatchCommand,
} from "./commands/PutRecordBatchCommand";
import { type PutRecordCommandInput, type PutRecordCommandOutput, PutRecordCommand } from "./commands/PutRecordCommand";
import {
  type StartDeliveryStreamEncryptionCommandInput,
  type StartDeliveryStreamEncryptionCommandOutput,
  StartDeliveryStreamEncryptionCommand,
} from "./commands/StartDeliveryStreamEncryptionCommand";
import {
  type StopDeliveryStreamEncryptionCommandInput,
  type StopDeliveryStreamEncryptionCommandOutput,
  StopDeliveryStreamEncryptionCommand,
} from "./commands/StopDeliveryStreamEncryptionCommand";
import {
  type TagDeliveryStreamCommandInput,
  type TagDeliveryStreamCommandOutput,
  TagDeliveryStreamCommand,
} from "./commands/TagDeliveryStreamCommand";
import {
  type UntagDeliveryStreamCommandInput,
  type UntagDeliveryStreamCommandOutput,
  UntagDeliveryStreamCommand,
} from "./commands/UntagDeliveryStreamCommand";
import {
  type UpdateDestinationCommandInput,
  type UpdateDestinationCommandOutput,
  UpdateDestinationCommand,
} from "./commands/UpdateDestinationCommand";
import { FirehoseClient } from "./FirehoseClient";

const commands = {
  CreateDeliveryStreamCommand,
  DeleteDeliveryStreamCommand,
  DescribeDeliveryStreamCommand,
  ListDeliveryStreamsCommand,
  ListTagsForDeliveryStreamCommand,
  PutRecordCommand,
  PutRecordBatchCommand,
  StartDeliveryStreamEncryptionCommand,
  StopDeliveryStreamEncryptionCommand,
  TagDeliveryStreamCommand,
  UntagDeliveryStreamCommand,
  UpdateDestinationCommand,
};

/**
 * @public
 */
export interface FirehoseRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface Firehose {
  /**
   * @see {@link CreateDeliveryStreamCommand}
   */
  createDeliveryStream(
    args: CreateDeliveryStreamCommandInput,
    options?: FirehoseRequestOptions
  ): Promise<CreateDeliveryStreamCommandOutput>;
  createDeliveryStream(
    args: CreateDeliveryStreamCommandInput,
    cb: (err: any, data?: CreateDeliveryStreamCommandOutput) => void
  ): void;
  createDeliveryStream(
    args: CreateDeliveryStreamCommandInput,
    options: FirehoseRequestOptions,
    cb: (err: any, data?: CreateDeliveryStreamCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDeliveryStreamCommand}
   */
  deleteDeliveryStream(
    args: DeleteDeliveryStreamCommandInput,
    options?: FirehoseRequestOptions
  ): Promise<DeleteDeliveryStreamCommandOutput>;
  deleteDeliveryStream(
    args: DeleteDeliveryStreamCommandInput,
    cb: (err: any, data?: DeleteDeliveryStreamCommandOutput) => void
  ): void;
  deleteDeliveryStream(
    args: DeleteDeliveryStreamCommandInput,
    options: FirehoseRequestOptions,
    cb: (err: any, data?: DeleteDeliveryStreamCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDeliveryStreamCommand}
   */
  describeDeliveryStream(
    args: DescribeDeliveryStreamCommandInput,
    options?: FirehoseRequestOptions
  ): Promise<DescribeDeliveryStreamCommandOutput>;
  describeDeliveryStream(
    args: DescribeDeliveryStreamCommandInput,
    cb: (err: any, data?: DescribeDeliveryStreamCommandOutput) => void
  ): void;
  describeDeliveryStream(
    args: DescribeDeliveryStreamCommandInput,
    options: FirehoseRequestOptions,
    cb: (err: any, data?: DescribeDeliveryStreamCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDeliveryStreamsCommand}
   */
  listDeliveryStreams(): Promise<ListDeliveryStreamsCommandOutput>;
  listDeliveryStreams(
    args: ListDeliveryStreamsCommandInput,
    options?: FirehoseRequestOptions
  ): Promise<ListDeliveryStreamsCommandOutput>;
  listDeliveryStreams(
    args: ListDeliveryStreamsCommandInput,
    cb: (err: any, data?: ListDeliveryStreamsCommandOutput) => void
  ): void;
  listDeliveryStreams(
    args: ListDeliveryStreamsCommandInput,
    options: FirehoseRequestOptions,
    cb: (err: any, data?: ListDeliveryStreamsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForDeliveryStreamCommand}
   */
  listTagsForDeliveryStream(
    args: ListTagsForDeliveryStreamCommandInput,
    options?: FirehoseRequestOptions
  ): Promise<ListTagsForDeliveryStreamCommandOutput>;
  listTagsForDeliveryStream(
    args: ListTagsForDeliveryStreamCommandInput,
    cb: (err: any, data?: ListTagsForDeliveryStreamCommandOutput) => void
  ): void;
  listTagsForDeliveryStream(
    args: ListTagsForDeliveryStreamCommandInput,
    options: FirehoseRequestOptions,
    cb: (err: any, data?: ListTagsForDeliveryStreamCommandOutput) => void
  ): void;

  /**
   * @see {@link PutRecordCommand}
   */
  putRecord(
    args: PutRecordCommandInput,
    options?: FirehoseRequestOptions
  ): Promise<PutRecordCommandOutput>;
  putRecord(
    args: PutRecordCommandInput,
    cb: (err: any, data?: PutRecordCommandOutput) => void
  ): void;
  putRecord(
    args: PutRecordCommandInput,
    options: FirehoseRequestOptions,
    cb: (err: any, data?: PutRecordCommandOutput) => void
  ): void;

  /**
   * @see {@link PutRecordBatchCommand}
   */
  putRecordBatch(
    args: PutRecordBatchCommandInput,
    options?: FirehoseRequestOptions
  ): Promise<PutRecordBatchCommandOutput>;
  putRecordBatch(
    args: PutRecordBatchCommandInput,
    cb: (err: any, data?: PutRecordBatchCommandOutput) => void
  ): void;
  putRecordBatch(
    args: PutRecordBatchCommandInput,
    options: FirehoseRequestOptions,
    cb: (err: any, data?: PutRecordBatchCommandOutput) => void
  ): void;

  /**
   * @see {@link StartDeliveryStreamEncryptionCommand}
   */
  startDeliveryStreamEncryption(
    args: StartDeliveryStreamEncryptionCommandInput,
    options?: FirehoseRequestOptions
  ): Promise<StartDeliveryStreamEncryptionCommandOutput>;
  startDeliveryStreamEncryption(
    args: StartDeliveryStreamEncryptionCommandInput,
    cb: (err: any, data?: StartDeliveryStreamEncryptionCommandOutput) => void
  ): void;
  startDeliveryStreamEncryption(
    args: StartDeliveryStreamEncryptionCommandInput,
    options: FirehoseRequestOptions,
    cb: (err: any, data?: StartDeliveryStreamEncryptionCommandOutput) => void
  ): void;

  /**
   * @see {@link StopDeliveryStreamEncryptionCommand}
   */
  stopDeliveryStreamEncryption(
    args: StopDeliveryStreamEncryptionCommandInput,
    options?: FirehoseRequestOptions
  ): Promise<StopDeliveryStreamEncryptionCommandOutput>;
  stopDeliveryStreamEncryption(
    args: StopDeliveryStreamEncryptionCommandInput,
    cb: (err: any, data?: StopDeliveryStreamEncryptionCommandOutput) => void
  ): void;
  stopDeliveryStreamEncryption(
    args: StopDeliveryStreamEncryptionCommandInput,
    options: FirehoseRequestOptions,
    cb: (err: any, data?: StopDeliveryStreamEncryptionCommandOutput) => void
  ): void;

  /**
   * @see {@link TagDeliveryStreamCommand}
   */
  tagDeliveryStream(
    args: TagDeliveryStreamCommandInput,
    options?: FirehoseRequestOptions
  ): Promise<TagDeliveryStreamCommandOutput>;
  tagDeliveryStream(
    args: TagDeliveryStreamCommandInput,
    cb: (err: any, data?: TagDeliveryStreamCommandOutput) => void
  ): void;
  tagDeliveryStream(
    args: TagDeliveryStreamCommandInput,
    options: FirehoseRequestOptions,
    cb: (err: any, data?: TagDeliveryStreamCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagDeliveryStreamCommand}
   */
  untagDeliveryStream(
    args: UntagDeliveryStreamCommandInput,
    options?: FirehoseRequestOptions
  ): Promise<UntagDeliveryStreamCommandOutput>;
  untagDeliveryStream(
    args: UntagDeliveryStreamCommandInput,
    cb: (err: any, data?: UntagDeliveryStreamCommandOutput) => void
  ): void;
  untagDeliveryStream(
    args: UntagDeliveryStreamCommandInput,
    options: FirehoseRequestOptions,
    cb: (err: any, data?: UntagDeliveryStreamCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDestinationCommand}
   */
  updateDestination(
    args: UpdateDestinationCommandInput,
    options?: FirehoseRequestOptions
  ): Promise<UpdateDestinationCommandOutput>;
  updateDestination(
    args: UpdateDestinationCommandInput,
    cb: (err: any, data?: UpdateDestinationCommandOutput) => void
  ): void;
  updateDestination(
    args: UpdateDestinationCommandInput,
    options: FirehoseRequestOptions,
    cb: (err: any, data?: UpdateDestinationCommandOutput) => void
  ): void;
}

/**
 * <fullname>Amazon Data Firehose</fullname>
 *          <note>
 *             <p>Amazon Data Firehose was previously known as Amazon Kinesis Data Firehose.</p>
 *          </note>
 *          <p>Amazon Data Firehose is a fully managed service that delivers real-time streaming
 *          data to destinations such as Amazon Simple Storage Service (Amazon S3), Amazon OpenSearch
 *          Service, Amazon Redshift, Splunk, and various other supported destinations.</p>
 * @public
 */
export class Firehose extends FirehoseClient implements Firehose {}
createAggregatedClient(commands, Firehose);
