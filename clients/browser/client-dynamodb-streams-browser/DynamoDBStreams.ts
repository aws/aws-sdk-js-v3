import { DynamoDBStreamsClient } from "./DynamoDBStreamsClient";
import { DescribeStreamInput } from "./types/DescribeStreamInput";
import { DescribeStreamOutput } from "./types/DescribeStreamOutput";
import { ExpiredIteratorException } from "./types/ExpiredIteratorException";
import { GetRecordsInput } from "./types/GetRecordsInput";
import { GetRecordsOutput } from "./types/GetRecordsOutput";
import { GetShardIteratorInput } from "./types/GetShardIteratorInput";
import { GetShardIteratorOutput } from "./types/GetShardIteratorOutput";
import { InternalServerError } from "./types/InternalServerError";
import { LimitExceededException } from "./types/LimitExceededException";
import { ListStreamsInput } from "./types/ListStreamsInput";
import { ListStreamsOutput } from "./types/ListStreamsOutput";
import { ResourceNotFoundException } from "./types/ResourceNotFoundException";
import { TrimmedDataAccessException } from "./types/TrimmedDataAccessException";
import { DescribeStreamCommand } from "./commands/DescribeStreamCommand";
import { GetRecordsCommand } from "./commands/GetRecordsCommand";
import { GetShardIteratorCommand } from "./commands/GetShardIteratorCommand";
import { ListStreamsCommand } from "./commands/ListStreamsCommand";

export class DynamoDBStreams extends DynamoDBStreamsClient {
  /**
   * <p>Returns information about a stream, including the current status of the stream, its Amazon Resource Name (ARN), the composition of its shards, and its corresponding DynamoDB table.</p> <note> <p>You can call <code>DescribeStream</code> at a maximum rate of 10 times per second.</p> </note> <p>Each shard in the stream has a <code>SequenceNumberRange</code> associated with it. If the <code>SequenceNumberRange</code> has a <code>StartingSequenceNumber</code> but no <code>EndingSequenceNumber</code>, then the shard is still open (able to receive more stream records). If both <code>StartingSequenceNumber</code> and <code>EndingSequenceNumber</code> are present, then that shard is closed and can no longer receive more data.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The operation tried to access a nonexistent stream.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeStream(
    args: DescribeStreamInput
  ): Promise<DescribeStreamOutput>;
  public describeStream(
    args: DescribeStreamInput,
    cb: (err: any, data?: DescribeStreamOutput) => void
  ): void;
  public describeStream(
    args: DescribeStreamInput,
    cb?: (err: any, data?: DescribeStreamOutput) => void
  ): Promise<DescribeStreamOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeStreamCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the stream records from a given shard.</p> <p>Specify a shard iterator using the <code>ShardIterator</code> parameter. The shard iterator specifies the position in the shard from which you want to start reading stream records sequentially. If there are no stream records available in the portion of the shard that the iterator points to, <code>GetRecords</code> returns an empty list. Note that it might take multiple calls to get to a portion of the shard that contains stream records.</p> <note> <p> <code>GetRecords</code> can retrieve a maximum of 1 MB of data or 1000 stream records, whichever comes first.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The operation tried to access a nonexistent stream.</p>
   *   - {LimitExceededException} <p>Your request rate is too high. The AWS SDKs for DynamoDB automatically retry requests that receive this exception. Your request is eventually successful, unless your retry queue is too large to finish. Reduce the frequency of requests and use exponential backoff. For more information, go to <a href="http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ErrorHandling.html#APIRetries">Error Retries and Exponential Backoff</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {ExpiredIteratorException} <p>The shard iterator has expired and can no longer be used to retrieve stream records. A shard iterator expires 15 minutes after it is retrieved using the <code>GetShardIterator</code> action.</p>
   *   - {TrimmedDataAccessException} <p>The operation attempted to read past the oldest stream record in a shard.</p> <p>In DynamoDB Streams, there is a 24 hour limit on data retention. Stream records whose age exceeds this limit are subject to removal (trimming) from the stream. You might receive a TrimmedDataAccessException if:</p> <ul> <li><p>You request a shard iterator with a sequence number older than the trim point (24 hours).</p> </li> <li><p>You obtain a shard iterator, but before you use the iterator in a <code>GetRecords</code> request, a stream record in the shard exceeds the 24 hour period and is trimmed. This causes the iterator to access a record that no longer exists.</p> </li> </ul>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getRecords(args: GetRecordsInput): Promise<GetRecordsOutput>;
  public getRecords(
    args: GetRecordsInput,
    cb: (err: any, data?: GetRecordsOutput) => void
  ): void;
  public getRecords(
    args: GetRecordsInput,
    cb?: (err: any, data?: GetRecordsOutput) => void
  ): Promise<GetRecordsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetRecordsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a shard iterator. A shard iterator provides information about how to retrieve the stream records from within a shard. Use the shard iterator in a subsequent <code>GetRecords</code> request to read the stream records from the shard.</p> <note> <p>A shard iterator expires 15 minutes after it is returned to the requester.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The operation tried to access a nonexistent stream.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {TrimmedDataAccessException} <p>The operation attempted to read past the oldest stream record in a shard.</p> <p>In DynamoDB Streams, there is a 24 hour limit on data retention. Stream records whose age exceeds this limit are subject to removal (trimming) from the stream. You might receive a TrimmedDataAccessException if:</p> <ul> <li><p>You request a shard iterator with a sequence number older than the trim point (24 hours).</p> </li> <li><p>You obtain a shard iterator, but before you use the iterator in a <code>GetRecords</code> request, a stream record in the shard exceeds the 24 hour period and is trimmed. This causes the iterator to access a record that no longer exists.</p> </li> </ul>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getShardIterator(
    args: GetShardIteratorInput
  ): Promise<GetShardIteratorOutput>;
  public getShardIterator(
    args: GetShardIteratorInput,
    cb: (err: any, data?: GetShardIteratorOutput) => void
  ): void;
  public getShardIterator(
    args: GetShardIteratorInput,
    cb?: (err: any, data?: GetShardIteratorOutput) => void
  ): Promise<GetShardIteratorOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetShardIteratorCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns an array of stream ARNs associated with the current account and endpoint. If the <code>TableName</code> parameter is present, then <code>ListStreams</code> will return only the streams ARNs for that table.</p> <note> <p>You can call <code>ListStreams</code> at a maximum rate of 5 times per second.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The operation tried to access a nonexistent stream.</p>
   *   - {InternalServerError} <p>An error occurred on the server side.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listStreams(args: ListStreamsInput): Promise<ListStreamsOutput>;
  public listStreams(
    args: ListStreamsInput,
    cb: (err: any, data?: ListStreamsOutput) => void
  ): void;
  public listStreams(
    args: ListStreamsInput,
    cb?: (err: any, data?: ListStreamsOutput) => void
  ): Promise<ListStreamsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListStreamsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
