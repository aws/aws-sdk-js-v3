// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  DescribeStreamCommand,
  DescribeStreamCommandInput,
  DescribeStreamCommandOutput,
} from "./commands/DescribeStreamCommand";
import { GetRecordsCommand, GetRecordsCommandInput, GetRecordsCommandOutput } from "./commands/GetRecordsCommand";
import {
  GetShardIteratorCommand,
  GetShardIteratorCommandInput,
  GetShardIteratorCommandOutput,
} from "./commands/GetShardIteratorCommand";
import { ListStreamsCommand, ListStreamsCommandInput, ListStreamsCommandOutput } from "./commands/ListStreamsCommand";
import { DynamoDBStreamsClient, DynamoDBStreamsClientConfig } from "./DynamoDBStreamsClient";

const commands = {
  DescribeStreamCommand,
  GetRecordsCommand,
  GetShardIteratorCommand,
  ListStreamsCommand,
};

export interface DynamoDBStreams {
  /**
   * @see {@link DescribeStreamCommand}
   */
  describeStream(
    args: DescribeStreamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeStreamCommandOutput>;
  describeStream(args: DescribeStreamCommandInput, cb: (err: any, data?: DescribeStreamCommandOutput) => void): void;
  describeStream(
    args: DescribeStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeStreamCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRecordsCommand}
   */
  getRecords(args: GetRecordsCommandInput, options?: __HttpHandlerOptions): Promise<GetRecordsCommandOutput>;
  getRecords(args: GetRecordsCommandInput, cb: (err: any, data?: GetRecordsCommandOutput) => void): void;
  getRecords(
    args: GetRecordsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRecordsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetShardIteratorCommand}
   */
  getShardIterator(
    args: GetShardIteratorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetShardIteratorCommandOutput>;
  getShardIterator(
    args: GetShardIteratorCommandInput,
    cb: (err: any, data?: GetShardIteratorCommandOutput) => void
  ): void;
  getShardIterator(
    args: GetShardIteratorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetShardIteratorCommandOutput) => void
  ): void;

  /**
   * @see {@link ListStreamsCommand}
   */
  listStreams(args: ListStreamsCommandInput, options?: __HttpHandlerOptions): Promise<ListStreamsCommandOutput>;
  listStreams(args: ListStreamsCommandInput, cb: (err: any, data?: ListStreamsCommandOutput) => void): void;
  listStreams(
    args: ListStreamsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStreamsCommandOutput) => void
  ): void;
}

/**
 * @public
 * <fullname>Amazon DynamoDB</fullname>
 *          <p>Amazon DynamoDB Streams provides API actions for accessing streams and processing
 *          stream records. To learn more about application development with Streams, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Streams.html">Capturing
 *             Table Activity with DynamoDB Streams</a> in the Amazon DynamoDB Developer
 *          Guide.</p>
 */
export class DynamoDBStreams extends DynamoDBStreamsClient implements DynamoDBStreams {}
createAggregatedClient(commands, DynamoDBStreams);
