// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { MergeShardsInput } from "../models/models_0";
import { MergeShards$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link MergeShardsCommand}.
 */
export interface MergeShardsCommandInput extends MergeShardsInput {}
/**
 * @public
 *
 * The output of {@link MergeShardsCommand}.
 */
export interface MergeShardsCommandOutput extends __MetadataBearer {}

/**
 * Merges two adjacent shards in a Kinesis data stream and combines them into a single shard to reduce the stream's capacity to ingest and transport data. This API is only supported for the data streams with the provisioned capacity mode. Two shards are considered adjacent if the union of the hash key ranges for the two shards form a contiguous set with no gaps. For example, if you have two shards, one with a hash key range of 276...381 and the other with a hash key range of 382...454, then you could merge these two shards into a single shard that would have a hash key range of 276...454. After the merge, the single child shard receives data for all hash key values covered by the two parent shards.
 *
 * > **Note:** When invoking this API, you must use either the `StreamARN` or the `StreamName` parameter, or both. It is recommended that you use the `StreamARN` input parameter when you invoke this API.
 *
 * `MergeShards` is called when there is a need to reduce the overall capacity of a stream because of excess capacity that is not being used. You must specify the shard to be merged and the adjacent shard for a stream. For more information about merging shards, see [Merge Two Shards](https://docs.aws.amazon.com/kinesis/latest/dev/kinesis-using-sdk-java-resharding-merge.html) in the *Amazon Kinesis Data Streams Developer Guide*.
 *
 * If the stream is in the `ACTIVE` state, you can call `MergeShards`. If a stream is in the `CREATING`, `UPDATING`, or `DELETING` state, `MergeShards` returns a `ResourceInUseException`. If the specified stream does not exist, `MergeShards` returns a `ResourceNotFoundException`.
 *
 * You can use DescribeStreamSummary to check the state of the stream, which is returned in `StreamStatus`.
 *
 * `MergeShards` is an asynchronous operation. Upon receiving a `MergeShards` request, Amazon Kinesis Data Streams immediately returns a response and sets the `StreamStatus` to `UPDATING`. After the operation is completed, Kinesis Data Streams sets the `StreamStatus` to `ACTIVE`. Read and write operations continue to work while the stream is in the `UPDATING` state.
 *
 * You use DescribeStreamSummary and the ListShards APIs to determine the shard IDs that are specified in the `MergeShards` request.
 *
 * If you try to operate on too many streams in parallel using CreateStream, DeleteStream, `MergeShards`, or SplitShard, you receive a `LimitExceededException`.
 *
 * `MergeShards` has a limit of five transactions per second per account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, MergeShardsCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, MergeShardsCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * // import type { KinesisClientConfig } from "@aws-sdk/client-kinesis";
 * const config = {}; // type is KinesisClientConfig
 * const client = new KinesisClient(config);
 * const input = { // MergeShardsInput
 *   StreamName: "STRING_VALUE",
 *   ShardToMerge: "STRING_VALUE", // required
 *   AdjacentShardToMerge: "STRING_VALUE", // required
 *   StreamARN: "STRING_VALUE",
 *   StreamId: "STRING_VALUE",
 * };
 * const command = new MergeShardsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param MergeShardsCommandInput - {@link MergeShardsCommandInput}
 * @returns {@link MergeShardsCommandOutput}
 * @see {@link MergeShardsCommandInput} for command's `input` shape.
 * @see {@link MergeShardsCommandOutput} for command's `response` shape.
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
export class MergeShardsCommand extends command<MergeShardsCommandInput, MergeShardsCommandOutput>(
  _ep0,
  _mw0,
  "MergeShards",
  MergeShards$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: MergeShardsInput;
      output: {};
    };
    sdk: {
      input: MergeShardsCommandInput;
      output: MergeShardsCommandOutput;
    };
  };
}
