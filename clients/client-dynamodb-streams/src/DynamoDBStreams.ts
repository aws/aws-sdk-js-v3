// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type { HttpHandlerOptions as __HttpHandlerOptions, MetricsRecorder as __MetricsRecorder } from "@smithy/types";

import {
  type DescribeStreamCommandInput,
  type DescribeStreamCommandOutput,
  DescribeStreamCommand,
} from "./commands/DescribeStreamCommand";
import {
  type GetRecordsCommandInput,
  type GetRecordsCommandOutput,
  GetRecordsCommand,
} from "./commands/GetRecordsCommand";
import {
  type GetShardIteratorCommandInput,
  type GetShardIteratorCommandOutput,
  GetShardIteratorCommand,
} from "./commands/GetShardIteratorCommand";
import {
  type ListStreamsCommandInput,
  type ListStreamsCommandOutput,
  ListStreamsCommand,
} from "./commands/ListStreamsCommand";
import { DynamoDBStreamsClient } from "./DynamoDBStreamsClient";

const commands = {
  DescribeStreamCommand,
  GetRecordsCommand,
  GetShardIteratorCommand,
  ListStreamsCommand,
};

/**
 * @public
 */
export interface DynamoDBStreamsRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface DynamoDBStreams {
  /**
   * @see {@link DescribeStreamCommand}
   */
  describeStream(
    args: DescribeStreamCommandInput,
    options?: DynamoDBStreamsRequestOptions
  ): Promise<DescribeStreamCommandOutput>;
  describeStream(
    args: DescribeStreamCommandInput,
    cb: (err: any, data?: DescribeStreamCommandOutput) => void
  ): void;
  describeStream(
    args: DescribeStreamCommandInput,
    options: DynamoDBStreamsRequestOptions,
    cb: (err: any, data?: DescribeStreamCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRecordsCommand}
   */
  getRecords(
    args: GetRecordsCommandInput,
    options?: DynamoDBStreamsRequestOptions
  ): Promise<GetRecordsCommandOutput>;
  getRecords(
    args: GetRecordsCommandInput,
    cb: (err: any, data?: GetRecordsCommandOutput) => void
  ): void;
  getRecords(
    args: GetRecordsCommandInput,
    options: DynamoDBStreamsRequestOptions,
    cb: (err: any, data?: GetRecordsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetShardIteratorCommand}
   */
  getShardIterator(
    args: GetShardIteratorCommandInput,
    options?: DynamoDBStreamsRequestOptions
  ): Promise<GetShardIteratorCommandOutput>;
  getShardIterator(
    args: GetShardIteratorCommandInput,
    cb: (err: any, data?: GetShardIteratorCommandOutput) => void
  ): void;
  getShardIterator(
    args: GetShardIteratorCommandInput,
    options: DynamoDBStreamsRequestOptions,
    cb: (err: any, data?: GetShardIteratorCommandOutput) => void
  ): void;

  /**
   * @see {@link ListStreamsCommand}
   */
  listStreams(): Promise<ListStreamsCommandOutput>;
  listStreams(
    args: ListStreamsCommandInput,
    options?: DynamoDBStreamsRequestOptions
  ): Promise<ListStreamsCommandOutput>;
  listStreams(
    args: ListStreamsCommandInput,
    cb: (err: any, data?: ListStreamsCommandOutput) => void
  ): void;
  listStreams(
    args: ListStreamsCommandInput,
    options: DynamoDBStreamsRequestOptions,
    cb: (err: any, data?: ListStreamsCommandOutput) => void
  ): void;
}

/**
 * <fullname>Amazon DynamoDB</fullname>
 *          <p>Amazon DynamoDB Streams provides API actions for accessing streams and processing
 *          stream records. To learn more about application development with Streams, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Streams.html">Capturing
 *             Table Activity with DynamoDB Streams</a> in the Amazon DynamoDB Developer
 *          Guide.</p>
 * @public
 */
export class DynamoDBStreams extends DynamoDBStreamsClient implements DynamoDBStreams {}
createAggregatedClient(commands, DynamoDBStreams);
