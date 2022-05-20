// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

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
import { DynamoDBStreamsClient } from "./DynamoDBStreamsClient";

/**
 * <fullname>Amazon DynamoDB</fullname>
 *
 *          <p>Amazon DynamoDB Streams provides API actions for accessing streams and processing
 *          stream records. To learn more about application development with Streams, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Streams.html">Capturing
 *             Table Activity with DynamoDB Streams</a> in the Amazon DynamoDB Developer
 *          Guide.</p>
 */
export class DynamoDBStreams extends DynamoDBStreamsClient {
  /**
   * <p>Returns information about a stream, including the current status of the stream, its Amazon Resource Name (ARN), the composition of its shards, and its corresponding DynamoDB table.</p>
   *          <note>
   *             <p>You can call <code>DescribeStream</code> at a maximum rate of 10 times per second.</p>
   *          </note>
   *          <p>Each shard in the stream has a <code>SequenceNumberRange</code> associated with it. If the
   *         <code>SequenceNumberRange</code> has a <code>StartingSequenceNumber</code> but no
   *         <code>EndingSequenceNumber</code>, then the shard is still open (able to receive more stream
   *       records). If both <code>StartingSequenceNumber</code> and <code>EndingSequenceNumber</code>
   *       are present, then that shard is closed and can no longer receive more data.</p>
   */
  public describeStream(
    args: DescribeStreamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeStreamCommandOutput>;
  public describeStream(
    args: DescribeStreamCommandInput,
    cb: (err: any, data?: DescribeStreamCommandOutput) => void
  ): void;
  public describeStream(
    args: DescribeStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeStreamCommandOutput) => void
  ): void;
  public describeStream(
    args: DescribeStreamCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeStreamCommandOutput) => void),
    cb?: (err: any, data?: DescribeStreamCommandOutput) => void
  ): Promise<DescribeStreamCommandOutput> | void {
    const command = new DescribeStreamCommand(args);
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
   * <p>Retrieves the stream records from a given shard.</p>
   *          <p>Specify a shard iterator using the <code>ShardIterator</code> parameter. The shard iterator
   *       specifies the position in the shard from which you want to start reading stream records
   *       sequentially. If there are no stream records available in the portion of the shard that the
   *       iterator points to, <code>GetRecords</code> returns an empty list. Note that it might take
   *       multiple calls to get to a portion of the shard that contains stream records.</p>
   *          <note>
   *             <p>
   *                <code>GetRecords</code> can retrieve a maximum of 1 MB of data or 1000 stream records,
   *         whichever comes first.</p>
   *          </note>
   */
  public getRecords(args: GetRecordsCommandInput, options?: __HttpHandlerOptions): Promise<GetRecordsCommandOutput>;
  public getRecords(args: GetRecordsCommandInput, cb: (err: any, data?: GetRecordsCommandOutput) => void): void;
  public getRecords(
    args: GetRecordsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRecordsCommandOutput) => void
  ): void;
  public getRecords(
    args: GetRecordsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetRecordsCommandOutput) => void),
    cb?: (err: any, data?: GetRecordsCommandOutput) => void
  ): Promise<GetRecordsCommandOutput> | void {
    const command = new GetRecordsCommand(args);
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
   * <p>Returns a shard iterator. A shard iterator provides information
   *       about how to retrieve the stream records from within a shard.  Use
   *       the shard iterator in a subsequent
   *       <code>GetRecords</code> request to read the stream records
   *       from the shard.</p>
   *          <note>
   *             <p>A shard iterator expires 15 minutes after it is returned to the requester.</p>
   *          </note>
   */
  public getShardIterator(
    args: GetShardIteratorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetShardIteratorCommandOutput>;
  public getShardIterator(
    args: GetShardIteratorCommandInput,
    cb: (err: any, data?: GetShardIteratorCommandOutput) => void
  ): void;
  public getShardIterator(
    args: GetShardIteratorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetShardIteratorCommandOutput) => void
  ): void;
  public getShardIterator(
    args: GetShardIteratorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetShardIteratorCommandOutput) => void),
    cb?: (err: any, data?: GetShardIteratorCommandOutput) => void
  ): Promise<GetShardIteratorCommandOutput> | void {
    const command = new GetShardIteratorCommand(args);
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
   * <p>Returns an array of stream ARNs associated with the current account and endpoint. If the
   *         <code>TableName</code> parameter is present, then <code>ListStreams</code> will return only the
   *       streams ARNs for that table.</p>
   *          <note>
   *             <p>You can call <code>ListStreams</code> at a maximum rate of 5 times per second.</p>
   *          </note>
   */
  public listStreams(args: ListStreamsCommandInput, options?: __HttpHandlerOptions): Promise<ListStreamsCommandOutput>;
  public listStreams(args: ListStreamsCommandInput, cb: (err: any, data?: ListStreamsCommandOutput) => void): void;
  public listStreams(
    args: ListStreamsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStreamsCommandOutput) => void
  ): void;
  public listStreams(
    args: ListStreamsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListStreamsCommandOutput) => void),
    cb?: (err: any, data?: ListStreamsCommandOutput) => void
  ): Promise<ListStreamsCommandOutput> | void {
    const command = new ListStreamsCommand(args);
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
