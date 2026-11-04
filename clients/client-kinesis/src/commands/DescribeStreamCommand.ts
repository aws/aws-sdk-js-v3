// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeStreamInput, DescribeStreamOutput } from "../models/models_0";
import { DescribeStream$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Describes the specified Kinesis data stream.
 *
 * > **Note:** This API has been revised. It's highly recommended that you use the DescribeStreamSummary API to get a summarized description of the specified Kinesis data stream and the ListShards API to list the shards in a specified data stream and obtain information about each shard.
 *
 * > **Note:** When invoking this API, you must use either the `StreamARN` or the `StreamName` parameter, or both. It is recommended that you use the `StreamARN` input parameter when you invoke this API.
 *
 * The information returned includes the stream name, Amazon Resource Name (ARN), creation time, enhanced metric configuration, and shard map. The shard map is an array of shard objects. For each shard object, there is the hash key and sequence number ranges that the shard spans, and the IDs of any earlier shards that played in a role in creating the shard. Every record ingested in the stream is identified by a sequence number, which is assigned when the record is put into the stream.
 *
 * You can limit the number of shards returned by each call. For more information, see [Retrieving Shards from a Stream](https://docs.aws.amazon.com/kinesis/latest/dev/kinesis-using-sdk-java-retrieve-shards.html) in the *Amazon Kinesis Data Streams Developer Guide*.
 *
 * There are no guarantees about the chronological order shards returned. To process shards in chronological order, use the ID of the parent shard to track the lineage to the oldest shard.
 *
 * This operation has a limit of 10 transactions per second per account.
 *
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
 *   StreamId: "STRING_VALUE",
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
export class DescribeStreamCommand extends command<DescribeStreamCommandInput, DescribeStreamCommandOutput>(
  _ep0,
  _mw0,
  "DescribeStream",
  DescribeStream$
) {
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
