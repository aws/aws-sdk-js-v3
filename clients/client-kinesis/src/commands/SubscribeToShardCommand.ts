// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KinesisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisClient";
import {
  SubscribeToShardInput,
  SubscribeToShardOutput,
  SubscribeToShardOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_SubscribeToShardCommand, se_SubscribeToShardCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SubscribeToShardCommand}.
 */
export interface SubscribeToShardCommandInput extends SubscribeToShardInput {}
/**
 * @public
 *
 * The output of {@link SubscribeToShardCommand}.
 */
export interface SubscribeToShardCommandOutput extends SubscribeToShardOutput, __MetadataBearer {}

/**
 * <p>This operation establishes an HTTP/2 connection between the consumer you specify in
 *             the <code>ConsumerARN</code> parameter and the shard you specify in the
 *                 <code>ShardId</code> parameter. After the connection is successfully established,
 *             Kinesis Data Streams pushes records from the shard to the consumer over this connection.
 *             Before you call this operation, call <a>RegisterStreamConsumer</a> to
 *             register the consumer with Kinesis Data Streams.</p>
 *          <p>When the <code>SubscribeToShard</code> call succeeds, your consumer starts receiving
 *             events of type <a>SubscribeToShardEvent</a> over the HTTP/2 connection for up
 *             to 5 minutes, after which time you need to call <code>SubscribeToShard</code> again to
 *             renew the subscription if you want to continue to receive records.</p>
 *          <p>You can make one call to <code>SubscribeToShard</code> per second per registered
 *             consumer per shard. For example, if you have a 4000 shard stream and two registered
 *             stream consumers, you can make one <code>SubscribeToShard</code> request per second for
 *             each combination of shard and registered consumer, allowing you to subscribe both
 *             consumers to all 4000 shards in one second. </p>
 *          <p>If you call <code>SubscribeToShard</code> again with the same <code>ConsumerARN</code>
 *             and <code>ShardId</code> within 5 seconds of a successful call, you'll get a
 *                 <code>ResourceInUseException</code>. If you call <code>SubscribeToShard</code> 5
 *             seconds or more after a successful call, the second call takes over the subscription and
 *             the previous connection expires or fails with a
 *             <code>ResourceInUseException</code>.</p>
 *          <p>For an example of how to use this operation, see <a href="https://docs.aws.amazon.com/streams/latest/dev/building-enhanced-consumers-api.html">Enhanced Fan-Out
 *                 Using the Kinesis Data Streams API</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, SubscribeToShardCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, SubscribeToShardCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new KinesisClient(config);
 * const input = { // SubscribeToShardInput
 *   ConsumerARN: "STRING_VALUE", // required
 *   ShardId: "STRING_VALUE", // required
 *   StartingPosition: { // StartingPosition
 *     Type: "AT_SEQUENCE_NUMBER" || "AFTER_SEQUENCE_NUMBER" || "TRIM_HORIZON" || "LATEST" || "AT_TIMESTAMP", // required
 *     SequenceNumber: "STRING_VALUE",
 *     Timestamp: new Date("TIMESTAMP"),
 *   },
 * };
 * const command = new SubscribeToShardCommand(input);
 * const response = await client.send(command);
 * // { // SubscribeToShardOutput
 * //   EventStream: { // SubscribeToShardEventStream Union: only one key present
 * //     SubscribeToShardEvent: { // SubscribeToShardEvent
 * //       Records: [ // RecordList // required
 * //         { // Record
 * //           SequenceNumber: "STRING_VALUE", // required
 * //           ApproximateArrivalTimestamp: new Date("TIMESTAMP"),
 * //           Data: new Uint8Array(), // required
 * //           PartitionKey: "STRING_VALUE", // required
 * //           EncryptionType: "NONE" || "KMS",
 * //         },
 * //       ],
 * //       ContinuationSequenceNumber: "STRING_VALUE", // required
 * //       MillisBehindLatest: Number("long"), // required
 * //       ChildShards: [ // ChildShardList
 * //         { // ChildShard
 * //           ShardId: "STRING_VALUE", // required
 * //           ParentShards: [ // ShardIdList // required
 * //             "STRING_VALUE",
 * //           ],
 * //           HashKeyRange: { // HashKeyRange
 * //             StartingHashKey: "STRING_VALUE", // required
 * //             EndingHashKey: "STRING_VALUE", // required
 * //           },
 * //         },
 * //       ],
 * //     },
 * //     ResourceNotFoundException: { // ResourceNotFoundException
 * //       message: "STRING_VALUE",
 * //     },
 * //     ResourceInUseException: { // ResourceInUseException
 * //       message: "STRING_VALUE",
 * //     },
 * //     KMSDisabledException: { // KMSDisabledException
 * //       message: "STRING_VALUE",
 * //     },
 * //     KMSInvalidStateException: { // KMSInvalidStateException
 * //       message: "STRING_VALUE",
 * //     },
 * //     KMSAccessDeniedException: { // KMSAccessDeniedException
 * //       message: "STRING_VALUE",
 * //     },
 * //     KMSNotFoundException: { // KMSNotFoundException
 * //       message: "STRING_VALUE",
 * //     },
 * //     KMSOptInRequired: { // KMSOptInRequired
 * //       message: "STRING_VALUE",
 * //     },
 * //     KMSThrottlingException: { // KMSThrottlingException
 * //       message: "STRING_VALUE",
 * //     },
 * //     InternalFailureException: { // InternalFailureException
 * //       message: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param SubscribeToShardCommandInput - {@link SubscribeToShardCommandInput}
 * @returns {@link SubscribeToShardCommandOutput}
 * @see {@link SubscribeToShardCommandInput} for command's `input` shape.
 * @see {@link SubscribeToShardCommandOutput} for command's `response` shape.
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
 * @throws {@link KinesisServiceException}
 * <p>Base exception class for all service exceptions from Kinesis service.</p>
 *
 * @public
 */
export class SubscribeToShardCommand extends $Command
  .classBuilder<
    SubscribeToShardCommandInput,
    SubscribeToShardCommandOutput,
    KinesisClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    OperationType: { type: "staticContextParams", value: `data` },
    ConsumerARN: { type: "contextParams", name: "ConsumerARN" },
  })
  .m(function (this: any, Command: any, cs: any, config: KinesisClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Kinesis_20131202", "SubscribeToShard", {
    /**
     * @internal
     */
    eventStream: {
      output: true,
    },
  })
  .n("KinesisClient", "SubscribeToShardCommand")
  .f(void 0, SubscribeToShardOutputFilterSensitiveLog)
  .ser(se_SubscribeToShardCommand)
  .de(de_SubscribeToShardCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SubscribeToShardInput;
      output: SubscribeToShardOutput;
    };
    sdk: {
      input: SubscribeToShardCommandInput;
      output: SubscribeToShardCommandOutput;
    };
  };
}
