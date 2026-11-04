// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep5, _mw0, command } from "../commandBuilder";
import type { GetShardIteratorInput, GetShardIteratorOutput } from "../models/models_0";
import { GetShardIterator$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetShardIteratorCommand}.
 */
export interface GetShardIteratorCommandInput extends GetShardIteratorInput {}
/**
 * @public
 *
 * The output of {@link GetShardIteratorCommand}.
 */
export interface GetShardIteratorCommandOutput extends GetShardIteratorOutput, __MetadataBearer {}

/**
 * Gets an Amazon Kinesis shard iterator. A shard iterator expires 5 minutes after it is returned to the requester.
 *
 * > **Note:** When invoking this API, you must use either the `StreamARN` or the `StreamName` parameter, or both. It is recommended that you use the `StreamARN` input parameter when you invoke this API.
 *
 * A shard iterator specifies the shard position from which to start reading data records sequentially. The position is specified using the sequence number of a data record in a shard. A sequence number is the identifier associated with every record ingested in the stream, and is assigned when a record is put into the stream. Each stream has one or more shards.
 *
 * You must specify the shard iterator type. For example, you can set the `ShardIteratorType` parameter to read exactly from the position denoted by a specific sequence number by using the `AT_SEQUENCE_NUMBER` shard iterator type. Alternatively, the parameter can read right after the sequence number by using the `AFTER_SEQUENCE_NUMBER` shard iterator type, using sequence numbers returned by earlier calls to PutRecord, PutRecords, GetRecords, or DescribeStream. In the request, you can specify the shard iterator type `AT_TIMESTAMP` to read records from an arbitrary point in time, `TRIM_HORIZON` to cause `ShardIterator` to point to the last untrimmed record in the shard in the system (the oldest data record in the shard), or `LATEST` so that you always read the most recent data in the shard.
 *
 * When you read repeatedly from a stream, use a GetShardIterator request to get the first shard iterator for use in your first GetRecords request and for subsequent reads use the shard iterator returned by the GetRecords request in `NextShardIterator`. A new shard iterator is returned by every GetRecords request in `NextShardIterator`, which you use in the `ShardIterator` parameter of the next GetRecords request.
 *
 * If a GetShardIterator request is made too often, you receive a `ProvisionedThroughputExceededException`. For more information about throughput limits, see GetRecords, and [Streams Limits](https://docs.aws.amazon.com/kinesis/latest/dev/service-sizes-and-limits.html) in the *Amazon Kinesis Data Streams Developer Guide*.
 *
 * If the shard is closed, GetShardIterator returns a valid iterator for the last sequence number of the shard. A shard can be closed as a result of using SplitShard or MergeShards.
 *
 * GetShardIterator has a limit of five transactions per second per account per open shard.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, GetShardIteratorCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, GetShardIteratorCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * // import type { KinesisClientConfig } from "@aws-sdk/client-kinesis";
 * const config = {}; // type is KinesisClientConfig
 * const client = new KinesisClient(config);
 * const input = { // GetShardIteratorInput
 *   StreamName: "STRING_VALUE",
 *   ShardId: "STRING_VALUE", // required
 *   ShardIteratorType: "AT_SEQUENCE_NUMBER" || "AFTER_SEQUENCE_NUMBER" || "TRIM_HORIZON" || "LATEST" || "AT_TIMESTAMP", // required
 *   StartingSequenceNumber: "STRING_VALUE",
 *   Timestamp: new Date("TIMESTAMP"),
 *   StreamARN: "STRING_VALUE",
 *   StreamId: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new GetShardIteratorCommand(input);
 * const response = await client.send(command);
 * // { // GetShardIteratorOutput
 * //   ShardIterator: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetShardIteratorCommandInput - {@link GetShardIteratorCommandInput}
 * @returns {@link GetShardIteratorCommandOutput}
 * @see {@link GetShardIteratorCommandInput} for command's `input` shape.
 * @see {@link GetShardIteratorCommandOutput} for command's `response` shape.
 * @see {@link KinesisClientResolvedConfig | config} for KinesisClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Specifies that you do not have the permissions required to perform this operation.
 *
 * @throws {@link DryRunOperationException} (client fault)
 *
 * The request was rejected because the DryRun parameter was specified.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * The processing of the request failed because of an unknown error, exception, or failure.
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *
 * A specified parameter exceeds its restrictions, is not supported, or can't be used. For more information, see the returned message.
 *
 * @throws {@link ProvisionedThroughputExceededException} (client fault)
 *
 * The request rate for the stream is too high, or the requested data is too large for the available throughput. Reduce the frequency or size of your requests. For more information, see [Streams Limits](https://docs.aws.amazon.com/kinesis/latest/dev/service-sizes-and-limits.html) in the *Amazon Kinesis Data Streams Developer Guide*, and [Error Retries and Exponential Backoff in Amazon Web Services](https://docs.aws.amazon.com/general/latest/gr/api-retries.html) in the *Amazon Web Services General Reference*.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource could not be found. The stream might not be specified correctly.
 *
 * @throws {@link KinesisServiceException}
 *
 * Base exception class for all service exceptions from Kinesis service.
 *
 * @public
 */
export class GetShardIteratorCommand extends command<GetShardIteratorCommandInput, GetShardIteratorCommandOutput>(
  _ep5,
  _mw0,
  "GetShardIterator",
  GetShardIterator$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetShardIteratorInput;
      output: GetShardIteratorOutput;
    };
    sdk: {
      input: GetShardIteratorCommandInput;
      output: GetShardIteratorCommandOutput;
    };
  };
}
