// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep6, _mw0, command } from "../commandBuilder";
import type { SubscribeToShardInput, SubscribeToShardOutput } from "../models/models_0";
import { SubscribeToShard$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * This operation establishes an HTTP/2 connection between the consumer you specify in the `ConsumerARN` parameter and the shard you specify in the `ShardId` parameter. After the connection is successfully established, Kinesis Data Streams pushes records from the shard to the consumer over this connection. Before you call this operation, call RegisterStreamConsumer to register the consumer with Kinesis Data Streams.
 *
 * When the `SubscribeToShard` call succeeds, your consumer starts receiving events of type SubscribeToShardEvent over the HTTP/2 connection for up to 5 minutes, after which time you need to call `SubscribeToShard` again to renew the subscription if you want to continue to receive records.
 *
 * You can make one call to `SubscribeToShard` per second per registered consumer per shard. For example, if you have a 4000 shard stream and two registered stream consumers, you can make one `SubscribeToShard` request per second for each combination of shard and registered consumer, allowing you to subscribe both consumers to all 4000 shards in one second.
 *
 * If you call `SubscribeToShard` again with the same `ConsumerARN` and `ShardId` within 5 seconds of a successful call, you'll get a `ResourceInUseException`. If you call `SubscribeToShard` 5 seconds or more after a successful call, the second call takes over the subscription and the previous connection expires or fails with a `ResourceInUseException`.
 *
 * For an example of how to use this operation, see [Enhanced Fan-Out Using the Kinesis Data Streams API](https://docs.aws.amazon.com/streams/latest/dev/building-enhanced-consumers-api.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, SubscribeToShardCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, SubscribeToShardCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * // import type { KinesisClientConfig } from "@aws-sdk/client-kinesis";
 * const config = {}; // type is KinesisClientConfig
 * const client = new KinesisClient(config);
 * const input = { // SubscribeToShardInput
 *   ConsumerARN: "STRING_VALUE", // required
 *   StreamId: "STRING_VALUE",
 *   ShardId: "STRING_VALUE", // required
 *   StartingPosition: { // StartingPosition
 *     Type: "AT_SEQUENCE_NUMBER" || "AFTER_SEQUENCE_NUMBER" || "TRIM_HORIZON" || "LATEST" || "AT_TIMESTAMP", // required
 *     SequenceNumber: "STRING_VALUE",
 *     Timestamp: new Date("TIMESTAMP"),
 *   },
 *   DryRun: true || false,
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
 * //           PartitionKey: "STRING_VALUE",
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
 *
 * Specifies that you do not have the permissions required to perform this operation.
 *
 * @throws {@link DryRunOperationException} (client fault)
 *
 * The request was rejected because the DryRun parameter was specified.
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
 * @throws {@link KinesisServiceException}
 *
 * Base exception class for all service exceptions from Kinesis service.
 *
 * @public
 */
export class SubscribeToShardCommand extends command<SubscribeToShardCommandInput, SubscribeToShardCommandOutput>(
  _ep6,
  _mw0,
  "SubscribeToShard",
  SubscribeToShard$
) {
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
