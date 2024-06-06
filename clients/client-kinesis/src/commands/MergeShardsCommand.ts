// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KinesisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisClient";
import { MergeShardsInput } from "../models/models_0";
import { de_MergeShardsCommand, se_MergeShardsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Merges two adjacent shards in a Kinesis data stream and combines them into a single
 *             shard to reduce the stream's capacity to ingest and transport data. This API is only
 *             supported for the data streams with the provisioned capacity mode. Two shards are
 *             considered adjacent if the union of the hash key ranges for the two shards form a
 *             contiguous set with no gaps. For example, if you have two shards, one with a hash key
 *             range of 276...381 and the other with a hash key range of 382...454, then you could
 *             merge these two shards into a single shard that would have a hash key range of
 *             276...454. After the merge, the single child shard receives data for all hash key values
 *             covered by the two parent shards.</p>
 *          <note>
 *             <p>When invoking this API, you must use either the <code>StreamARN</code> or the
 *                     <code>StreamName</code> parameter, or both. It is recommended that you use the
 *                     <code>StreamARN</code> input parameter when you invoke this API.</p>
 *          </note>
 *          <p>
 *             <code>MergeShards</code> is called when there is a need to reduce the overall capacity
 *             of a stream because of excess capacity that is not being used. You must specify the
 *             shard to be merged and the adjacent shard for a stream. For more information about
 *             merging shards, see <a href="https://docs.aws.amazon.com/kinesis/latest/dev/kinesis-using-sdk-java-resharding-merge.html">Merge Two
 *                 Shards</a> in the <i>Amazon Kinesis Data Streams Developer
 *                 Guide</i>.</p>
 *          <p>If the stream is in the <code>ACTIVE</code> state, you can call
 *                 <code>MergeShards</code>. If a stream is in the <code>CREATING</code>,
 *                 <code>UPDATING</code>, or <code>DELETING</code> state, <code>MergeShards</code>
 *             returns a <code>ResourceInUseException</code>. If the specified stream does not exist,
 *                 <code>MergeShards</code> returns a <code>ResourceNotFoundException</code>. </p>
 *          <p>You can use <a>DescribeStreamSummary</a> to check the state of the stream,
 *             which is returned in <code>StreamStatus</code>.</p>
 *          <p>
 *             <code>MergeShards</code> is an asynchronous operation. Upon receiving a
 *                 <code>MergeShards</code> request, Amazon Kinesis Data Streams immediately returns a
 *             response and sets the <code>StreamStatus</code> to <code>UPDATING</code>. After the
 *             operation is completed, Kinesis Data Streams sets the <code>StreamStatus</code> to
 *                 <code>ACTIVE</code>. Read and write operations continue to work while the stream is
 *             in the <code>UPDATING</code> state. </p>
 *          <p>You use <a>DescribeStreamSummary</a> and the <a>ListShards</a>
 *             APIs to determine the shard IDs that are specified in the <code>MergeShards</code>
 *             request. </p>
 *          <p>If you try to operate on too many streams in parallel using <a>CreateStream</a>, <a>DeleteStream</a>, <code>MergeShards</code>,
 *             or <a>SplitShard</a>, you receive a <code>LimitExceededException</code>. </p>
 *          <p>
 *             <code>MergeShards</code> has a limit of five transactions per second per account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, MergeShardsCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, MergeShardsCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * const client = new KinesisClient(config);
 * const input = { // MergeShardsInput
 *   StreamName: "STRING_VALUE",
 *   ShardToMerge: "STRING_VALUE", // required
 *   AdjacentShardToMerge: "STRING_VALUE", // required
 *   StreamARN: "STRING_VALUE",
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
 *  <p>Specifies that you do not have the permissions required to perform this
 *             operation.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>A specified parameter exceeds its restrictions, is not supported, or can't be used.
 *             For more information, see the returned message.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The requested resource exceeds the maximum number allowed, or the number of concurrent
 *             stream requests exceeds the maximum number allowed. </p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The resource is not available for this operation. For successful operation, the
 *             resource must be in the <code>ACTIVE</code> state.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource could not be found. The stream might not be specified
 *             correctly.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Specifies that you tried to invoke this API for a data stream with the on-demand
 *             capacity mode. This API is only supported for data streams with the provisioned capacity
 *             mode. </p>
 *
 * @throws {@link KinesisServiceException}
 * <p>Base exception class for all service exceptions from Kinesis service.</p>
 *
 * @public
 */
export class MergeShardsCommand extends $Command
  .classBuilder<
    MergeShardsCommandInput,
    MergeShardsCommandOutput,
    KinesisClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    OperationType: { type: "staticContextParams", value: `control` },
    StreamARN: { type: "contextParams", name: "StreamARN" },
  })
  .m(function (this: any, Command: any, cs: any, config: KinesisClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Kinesis_20131202", "MergeShards", {})
  .n("KinesisClient", "MergeShardsCommand")
  .f(void 0, void 0)
  .ser(se_MergeShardsCommand)
  .de(de_MergeShardsCommand)
  .build() {}
