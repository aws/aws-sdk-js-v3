// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { KinesisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisClient";
import type { DescribeStreamInput, DescribeStreamOutput } from "../models/models_0";
import { DescribeStream } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeStreamCommand}.
 */
export interface DescribeStreamCommandInput extends DescribeStreamInput {}
/**
 * @public
 *
 * The output of {@link DescribeStreamCommand}.
 */
export interface DescribeStreamCommandOutput extends DescribeStreamOutput, __MetadataBearer {}

/**
 * <p>Describes the specified Kinesis data stream.</p>
 *          <note>
 *             <p>This API has been revised. It's highly recommended that you use the <a>DescribeStreamSummary</a> API to get a summarized description of the
 *                 specified Kinesis data stream and the <a>ListShards</a> API to list the
 *                 shards in a specified data stream and obtain information about each shard. </p>
 *          </note>
 *          <note>
 *             <p>When invoking this API, you must use either the <code>StreamARN</code> or the
 *                     <code>StreamName</code> parameter, or both. It is recommended that you use the
 *                     <code>StreamARN</code> input parameter when you invoke this API.</p>
 *          </note>
 *          <p>The information returned includes the stream name, Amazon Resource Name (ARN),
 *             creation time, enhanced metric configuration, and shard map. The shard map is an array
 *             of shard objects. For each shard object, there is the hash key and sequence number
 *             ranges that the shard spans, and the IDs of any earlier shards that played in a role in
 *             creating the shard. Every record ingested in the stream is identified by a sequence
 *             number, which is assigned when the record is put into the stream.</p>
 *          <p>You can limit the number of shards returned by each call. For more information, see
 *                 <a href="https://docs.aws.amazon.com/kinesis/latest/dev/kinesis-using-sdk-java-retrieve-shards.html">Retrieving
 *                 Shards from a Stream</a> in the <i>Amazon Kinesis Data Streams Developer
 *                 Guide</i>.</p>
 *          <p>There are no guarantees about the chronological order shards returned. To process
 *             shards in chronological order, use the ID of the parent shard to track the lineage to
 *             the oldest shard.</p>
 *          <p>This operation has a limit of 10 transactions per second per account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, DescribeStreamCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, DescribeStreamCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * // import type { KinesisClientConfig } from "@aws-sdk/client-kinesis";
 * const config = {}; // type is KinesisClientConfig
 * const client = new KinesisClient(config);
 * const input = { // DescribeStreamInput
 *   StreamName: "STRING_VALUE",
 *   Limit: Number("int"),
 *   ExclusiveStartShardId: "STRING_VALUE",
 *   StreamARN: "STRING_VALUE",
 * };
 * const command = new DescribeStreamCommand(input);
 * const response = await client.send(command);
 * // { // DescribeStreamOutput
 * //   StreamDescription: { // StreamDescription
 * //     StreamName: "STRING_VALUE", // required
 * //     StreamARN: "STRING_VALUE", // required
 * //     StreamStatus: "CREATING" || "DELETING" || "ACTIVE" || "UPDATING", // required
 * //     StreamModeDetails: { // StreamModeDetails
 * //       StreamMode: "PROVISIONED" || "ON_DEMAND", // required
 * //     },
 * //     Shards: [ // ShardList // required
 * //       { // Shard
 * //         ShardId: "STRING_VALUE", // required
 * //         ParentShardId: "STRING_VALUE",
 * //         AdjacentParentShardId: "STRING_VALUE",
 * //         HashKeyRange: { // HashKeyRange
 * //           StartingHashKey: "STRING_VALUE", // required
 * //           EndingHashKey: "STRING_VALUE", // required
 * //         },
 * //         SequenceNumberRange: { // SequenceNumberRange
 * //           StartingSequenceNumber: "STRING_VALUE", // required
 * //           EndingSequenceNumber: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     HasMoreShards: true || false, // required
 * //     RetentionPeriodHours: Number("int"), // required
 * //     StreamCreationTimestamp: new Date("TIMESTAMP"), // required
 * //     EnhancedMonitoring: [ // EnhancedMonitoringList // required
 * //       { // EnhancedMetrics
 * //         ShardLevelMetrics: [ // MetricsNameList
 * //           "IncomingBytes" || "IncomingRecords" || "OutgoingBytes" || "OutgoingRecords" || "WriteProvisionedThroughputExceeded" || "ReadProvisionedThroughputExceeded" || "IteratorAgeMilliseconds" || "ALL",
 * //         ],
 * //       },
 * //     ],
 * //     EncryptionType: "NONE" || "KMS",
 * //     KeyId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeStreamCommandInput - {@link DescribeStreamCommandInput}
 * @returns {@link DescribeStreamCommandOutput}
 * @see {@link DescribeStreamCommandInput} for command's `input` shape.
 * @see {@link DescribeStreamCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource could not be found. The stream might not be specified
 *             correctly.</p>
 *
 * @throws {@link KinesisServiceException}
 * <p>Base exception class for all service exceptions from Kinesis service.</p>
 *
 *
 * @public
 */
export class DescribeStreamCommand extends $Command
  .classBuilder<
    DescribeStreamCommandInput,
    DescribeStreamCommandOutput,
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Kinesis_20131202", "DescribeStream", {})
  .n("KinesisClient", "DescribeStreamCommand")
  .sc(DescribeStream)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeStreamInput;
      output: DescribeStreamOutput;
    };
    sdk: {
      input: DescribeStreamCommandInput;
      output: DescribeStreamCommandOutput;
    };
  };
}
