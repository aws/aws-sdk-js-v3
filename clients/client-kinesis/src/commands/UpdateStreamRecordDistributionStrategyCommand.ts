// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateStreamRecordDistributionStrategyInput } from "../models/models_0";
import { UpdateStreamRecordDistributionStrategy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateStreamRecordDistributionStrategyCommand}.
 */
export interface UpdateStreamRecordDistributionStrategyCommandInput extends UpdateStreamRecordDistributionStrategyInput {}
/**
 * @public
 *
 * The output of {@link UpdateStreamRecordDistributionStrategyCommand}.
 */
export interface UpdateStreamRecordDistributionStrategyCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates the record distribution strategy for the specified Amazon Kinesis Data Streams
 *             on-demand data stream. The record distribution strategy determines how Amazon Kinesis
 *             Data Streams distributes records across the shards in a stream.</p>
 *          <note>
 *             <p>You must specify the stream using the <code>StreamARN</code> parameter.</p>
 *          </note>
 *          <p>The record distribution strategy is a stream-level setting. You can switch between the
 *             following strategies at any time, and the change takes effect immediately without
 *             downtime, data loss, or disruption to producer or consumer applications:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>AUTO</code> – Amazon Kinesis Data Streams distributes records evenly
 *                     across shards using service-managed algorithms, and ignores any partition key
 *                     and <code>ExplicitHashKey</code> that a producer provides. Use this strategy for
 *                     stateless workloads that do not require partition-key ordering.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>USER_PARTITION_KEY</code> – Producers must provide a partition key, and
 *                     Amazon Kinesis Data Streams uses the partition key to determine shard placement.
 *                     Records that share a partition key are sent to the same shard. This is the
 *                     default strategy.</p>
 *             </li>
 *          </ul>
 *          <p>This operation is only supported for data streams that use the on-demand capacity
 *             mode. Provisioned capacity mode streams do not support the record distribution strategy
 *             setting. Attempting to set <code>AUTO</code> on a provisioned stream results in an
 *             <code>InvalidArgumentException</code>.</p>
 *          <p>New records that arrive after the change are distributed according to the new
 *             strategy. Records already in the stream keep their original shard assignments and are
 *             not redistributed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, UpdateStreamRecordDistributionStrategyCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, UpdateStreamRecordDistributionStrategyCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * // import type { KinesisClientConfig } from "@aws-sdk/client-kinesis";
 * const config = {}; // type is KinesisClientConfig
 * const client = new KinesisClient(config);
 * const input = { // UpdateStreamRecordDistributionStrategyInput
 *   StreamARN: "STRING_VALUE", // required
 *   StreamId: "STRING_VALUE",
 *   RecordDistributionStrategy: "AUTO" || "USER_PARTITION_KEY", // required
 * };
 * const command = new UpdateStreamRecordDistributionStrategyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateStreamRecordDistributionStrategyCommandInput - {@link UpdateStreamRecordDistributionStrategyCommandInput}
 * @returns {@link UpdateStreamRecordDistributionStrategyCommandOutput}
 * @see {@link UpdateStreamRecordDistributionStrategyCommandInput} for command's `input` shape.
 * @see {@link UpdateStreamRecordDistributionStrategyCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class UpdateStreamRecordDistributionStrategyCommand extends command<UpdateStreamRecordDistributionStrategyCommandInput, UpdateStreamRecordDistributionStrategyCommandOutput>(
  _ep0,
  _mw0,
  "UpdateStreamRecordDistributionStrategy",
  UpdateStreamRecordDistributionStrategy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateStreamRecordDistributionStrategyInput;
      output: {};
    };
    sdk: {
      input: UpdateStreamRecordDistributionStrategyCommandInput;
      output: UpdateStreamRecordDistributionStrategyCommandOutput;
    };
  };
}
