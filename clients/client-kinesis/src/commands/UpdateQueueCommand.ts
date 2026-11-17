// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep5, _mw0, command } from "../commandBuilder";
import type { UpdateQueueInput, UpdateQueueOutput } from "../models/models_0";
import { UpdateQueue$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateQueueCommand}.
 */
export interface UpdateQueueCommandInput extends UpdateQueueInput {}
/**
 * @public
 *
 * The output of {@link UpdateQueueCommand}.
 */
export interface UpdateQueueCommandOutput extends UpdateQueueOutput, __MetadataBearer {}

/**
 * <p>Updates the configuration attributes of the specified queue. You can change the queue's
 *             visibility timeout, its dead-letter handling configuration, or both.</p>
 *          <p>A new visibility timeout applies to records received after the update completes. Records
 *             that are already in flight keep the visibility timeout they were received with. To change
 *             the visibility timeout of a record that is already in flight, use
 *             <a>UpdateQueueRecordsVisibility</a>.</p>
 *          <p>
 *             <code>UpdateQueue</code> is an asynchronous operation. Upon receiving an
 *             <code>UpdateQueue</code> request, Amazon Kinesis Data Streams sets the
 *             <code>QueueStatus</code> to <code>UPDATING</code>, and sets it back to
 *             <code>ACTIVE</code> when the update is complete. You can continue to receive and
 *             acknowledge records while the queue is <code>UPDATING</code>.</p>
 *          <p>You can't change the data stream or the starting position of a queue after you create
 *             it. To read from a different stream or position, create a new queue.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, UpdateQueueCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, UpdateQueueCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * // import type { KinesisClientConfig } from "@aws-sdk/client-kinesis";
 * const config = {}; // type is KinesisClientConfig
 * const client = new KinesisClient(config);
 * const input = { // UpdateQueueInput
 *   QueueARN: "STRING_VALUE", // required
 *   QueueAttributes: { // QueueAttributes
 *     VisibilityTimeoutSeconds: Number("int"),
 *     DeadLetterConfiguration: { // DeadLetterConfiguration
 *       TargetType: "BUILT_IN" || "NONE", // required
 *       MaxReceiveCount: Number("int"),
 *     },
 *   },
 * };
 * const command = new UpdateQueueCommand(input);
 * const response = await client.send(command);
 * // { // UpdateQueueOutput
 * //   QueueDescription: { // QueueDescription
 * //     QueueName: "STRING_VALUE", // required
 * //     QueueARN: "STRING_VALUE", // required
 * //     QueueStatus: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING", // required
 * //     QueueCreationTimestamp: new Date("TIMESTAMP"), // required
 * //     StreamConfigurationList: [ // QueueStreamConfigurationList // required
 * //       { // QueueStreamConfiguration
 * //         StreamARN: "STRING_VALUE", // required
 * //         StartingPosition: { // QueueStartingPosition
 * //           Type: "TRIM_HORIZON" || "LATEST" || "AT_TIMESTAMP", // required
 * //           Timestamp: new Date("TIMESTAMP"),
 * //         },
 * //       },
 * //     ],
 * //     QueueAttributes: { // QueueAttributes
 * //       VisibilityTimeoutSeconds: Number("int"),
 * //       DeadLetterConfiguration: { // DeadLetterConfiguration
 * //         TargetType: "BUILT_IN" || "NONE", // required
 * //         MaxReceiveCount: Number("int"),
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateQueueCommandInput - {@link UpdateQueueCommandInput}
 * @returns {@link UpdateQueueCommandOutput}
 * @see {@link UpdateQueueCommandInput} for command's `input` shape.
 * @see {@link UpdateQueueCommandOutput} for command's `response` shape.
 * @see {@link KinesisClientResolvedConfig | config} for KinesisClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Specifies that you do not have the permissions required to perform this
 *             operation.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>The processing of the request failed because of an unknown error, exception, or
 *             failure.</p>
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
 *  <p>The request failed validation. For example, a parameter value is not valid, a
 *             combination of parameters is not supported, or the operation is not supported for the
 *             stream's capacity mode. The error message describes the specific reason.</p>
 *
 * @throws {@link KinesisServiceException}
 * <p>Base exception class for all service exceptions from Kinesis service.</p>
 *
 *
 * @public
 */
export class UpdateQueueCommand extends command<UpdateQueueCommandInput, UpdateQueueCommandOutput>(
  _ep5,
  _mw0,
  "UpdateQueue",
  UpdateQueue$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateQueueInput;
      output: UpdateQueueOutput;
    };
    sdk: {
      input: UpdateQueueCommandInput;
      output: UpdateQueueCommandOutput;
    };
  };
}
