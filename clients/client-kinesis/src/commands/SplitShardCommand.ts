// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SplitShardInput } from "../models/models_0";
import { SplitShard$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SplitShardCommand}.
 */
export interface SplitShardCommandInput extends SplitShardInput {}
/**
 * @public
 *
 * The output of {@link SplitShardCommand}.
 */
export interface SplitShardCommandOutput extends __MetadataBearer {}

/**
 * Splits a shard into two new shards in the Kinesis data stream, to increase the stream's capacity to ingest and transport data. `SplitShard` is called when there is a need to increase the overall capacity of a stream because of an expected increase in the volume of data records being ingested. This API is only supported for the data streams with the provisioned capacity mode.
 *
 * > **Note:** When invoking this API, you must use either the `StreamARN` or the `StreamName` parameter, or both. It is recommended that you use the `StreamARN` input parameter when you invoke this API.
 *
 * You can also use `SplitShard` when a shard appears to be approaching its maximum utilization; for example, the producers sending data into the specific shard are suddenly sending more than previously anticipated. You can also call `SplitShard` to increase stream capacity, so that more Kinesis Data Streams applications can simultaneously read data from the stream for real-time processing.
 *
 * You must specify the shard to be split and the new hash key, which is the position in the shard where the shard gets split in two. In many cases, the new hash key might be the average of the beginning and ending hash key, but it can be any hash key value in the range being mapped into the shard. For more information, see [Split a Shard](https://docs.aws.amazon.com/kinesis/latest/dev/kinesis-using-sdk-java-resharding-split.html) in the *Amazon Kinesis Data Streams Developer Guide*.
 *
 * You can use DescribeStreamSummary and the ListShards APIs to determine the shard ID and hash key values for the `ShardToSplit` and `NewStartingHashKey` parameters that are specified in the `SplitShard` request.
 *
 * `SplitShard` is an asynchronous operation. Upon receiving a `SplitShard` request, Kinesis Data Streams immediately returns a response and sets the stream status to `UPDATING`. After the operation is completed, Kinesis Data Streams sets the stream status to `ACTIVE`. Read and write operations continue to work while the stream is in the `UPDATING` state.
 *
 * You can use DescribeStreamSummary to check the status of the stream, which is returned in `StreamStatus`. If the stream is in the `ACTIVE` state, you can call `SplitShard`.
 *
 * If the specified stream does not exist, DescribeStreamSummary returns a `ResourceNotFoundException`. If you try to create more shards than are authorized for your account, you receive a `LimitExceededException`.
 *
 * For the default shard limit for an Amazon Web Services account, see [Kinesis Data Streams Limits](https://docs.aws.amazon.com/kinesis/latest/dev/service-sizes-and-limits.html) in the *Amazon Kinesis Data Streams Developer Guide*. To increase this limit, [contact Amazon Web Services Support](https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html).
 *
 * If you try to operate on too many streams simultaneously using CreateStream, DeleteStream, MergeShards, and/or SplitShard, you receive a `LimitExceededException`.
 *
 * `SplitShard` has a limit of five transactions per second per account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, SplitShardCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, SplitShardCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * // import type { KinesisClientConfig } from "@aws-sdk/client-kinesis";
 * const config = {}; // type is KinesisClientConfig
 * const client = new KinesisClient(config);
 * const input = { // SplitShardInput
 *   StreamName: "STRING_VALUE",
 *   ShardToSplit: "STRING_VALUE", // required
 *   NewStartingHashKey: "STRING_VALUE", // required
 *   StreamARN: "STRING_VALUE",
 *   StreamId: "STRING_VALUE",
 * };
 * const command = new SplitShardCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SplitShardCommandInput - {@link SplitShardCommandInput}
 * @returns {@link SplitShardCommandOutput}
 * @see {@link SplitShardCommandInput} for command's `input` shape.
 * @see {@link SplitShardCommandOutput} for command's `response` shape.
 * @see {@link KinesisClientResolvedConfig | config} for KinesisClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Specifies that you do not have the permissions required to perform this operation.
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *
 * A specified parameter exceeds its restrictions, is not supported, or can't be used. For more information, see the returned message.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The requested resource exceeds the maximum number allowed, or the number of concurrent stream requests exceeds the maximum number allowed.
 *
 * @throws {@link ResourceInUseException} (client fault)
 *
 * The resource is not available for this operation. For successful operation, the resource must be in the `ACTIVE` state.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource could not be found. The stream might not be specified correctly.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Specifies that you tried to invoke this API for a data stream with the on-demand capacity mode. This API is only supported for data streams with the provisioned capacity mode.
 *
 * @throws {@link KinesisServiceException}
 *
 * Base exception class for all service exceptions from Kinesis service.
 *
 * @public
 */
export class SplitShardCommand extends command<SplitShardCommandInput, SplitShardCommandOutput>(
  _ep0,
  _mw0,
  "SplitShard",
  SplitShard$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SplitShardInput;
      output: {};
    };
    sdk: {
      input: SplitShardCommandInput;
      output: SplitShardCommandOutput;
    };
  };
}
