// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListShardsInput, ListShardsOutput } from "../models/models_0";
import { ListShards$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListShardsCommand}.
 */
export interface ListShardsCommandInput extends ListShardsInput {}
/**
 * @public
 *
 * The output of {@link ListShardsCommand}.
 */
export interface ListShardsCommandOutput extends ListShardsOutput, __MetadataBearer {}

/**
 * Lists the shards in a stream and provides information about each shard. This operation has a limit of 1000 transactions per second per data stream.
 *
 * > **Note:** When invoking this API, you must use either the `StreamARN` or the `StreamName` parameter, or both. It is recommended that you use the `StreamARN` input parameter when you invoke this API.
 *
 * This action does not list expired shards. For information about expired shards, see [Data Routing, Data Persistence, and Shard State after a Reshard](https://docs.aws.amazon.com/streams/latest/dev/kinesis-using-sdk-java-after-resharding.html#kinesis-using-sdk-java-resharding-data-routing).
 *
 * > **Important:** This API is a new operation that is used by the Amazon Kinesis Client Library (KCL). If you have a fine-grained IAM policy that only allows specific operations, you must update your policy to allow calls to this API. For more information, see [Controlling Access to Amazon Kinesis Data Streams Resources Using IAM](https://docs.aws.amazon.com/streams/latest/dev/controlling-access.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, ListShardsCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, ListShardsCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * // import type { KinesisClientConfig } from "@aws-sdk/client-kinesis";
 * const config = {}; // type is KinesisClientConfig
 * const client = new KinesisClient(config);
 * const input = { // ListShardsInput
 *   StreamName: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   ExclusiveStartShardId: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   StreamCreationTimestamp: new Date("TIMESTAMP"),
 *   ShardFilter: { // ShardFilter
 *     Type: "AFTER_SHARD_ID" || "AT_TRIM_HORIZON" || "FROM_TRIM_HORIZON" || "AT_LATEST" || "AT_TIMESTAMP" || "FROM_TIMESTAMP", // required
 *     ShardId: "STRING_VALUE",
 *     Timestamp: new Date("TIMESTAMP"),
 *   },
 *   StreamARN: "STRING_VALUE",
 *   StreamId: "STRING_VALUE",
 * };
 * const command = new ListShardsCommand(input);
 * const response = await client.send(command);
 * // { // ListShardsOutput
 * //   Shards: [ // ShardList
 * //     { // Shard
 * //       ShardId: "STRING_VALUE", // required
 * //       ParentShardId: "STRING_VALUE",
 * //       AdjacentParentShardId: "STRING_VALUE",
 * //       HashKeyRange: { // HashKeyRange
 * //         StartingHashKey: "STRING_VALUE", // required
 * //         EndingHashKey: "STRING_VALUE", // required
 * //       },
 * //       SequenceNumberRange: { // SequenceNumberRange
 * //         StartingSequenceNumber: "STRING_VALUE", // required
 * //         EndingSequenceNumber: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListShardsCommandInput - {@link ListShardsCommandInput}
 * @returns {@link ListShardsCommandOutput}
 * @see {@link ListShardsCommandInput} for command's `input` shape.
 * @see {@link ListShardsCommandOutput} for command's `response` shape.
 * @see {@link KinesisClientResolvedConfig | config} for KinesisClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Specifies that you do not have the permissions required to perform this operation.
 *
 * @throws {@link ExpiredNextTokenException} (client fault)
 *
 * The pagination token passed to the operation is expired.
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
export class ListShardsCommand extends command<ListShardsCommandInput, ListShardsCommandOutput>(
  _ep0,
  _mw0,
  "ListShards",
  ListShards$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListShardsInput;
      output: ListShardsOutput;
    };
    sdk: {
      input: ListShardsCommandInput;
      output: ListShardsCommandOutput;
    };
  };
}
