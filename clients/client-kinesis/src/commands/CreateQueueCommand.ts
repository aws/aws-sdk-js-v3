// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep3, _mw0, command } from "../commandBuilder";
import type { CreateQueueInput, CreateQueueOutput } from "../models/models_0";
import { CreateQueue$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateQueueCommand}.
 */
export interface CreateQueueCommandInput extends CreateQueueInput {}
/**
 * @public
 *
 * The output of {@link CreateQueueCommand}.
 */
export interface CreateQueueCommandOutput extends CreateQueueOutput, __MetadataBearer {}

/**
 * <p>Creates a queue on the specified data stream. A queue delivers records from the stream to
 *             a queue consumer, tracks the delivery state of each record, and redelivers any record that
 *             is not acknowledged before its visibility timeout expires.</p>
 *          <p>A queue does not extend how long the stream keeps a record. When a record reaches the
 *             end of the data stream's retention period, the queue stops delivering it.</p>
 *          <p>Your queue consumer calls <a>ReceiveQueueRecords</a> to receive up to 10
 *             records at a time. After it processes records, it calls
 *             <a>AcknowledgeQueueRecords</a> so the queue does not deliver them
 *             again.</p>
 *          <p>Queues are supported only on data streams in on-demand capacity mode.</p>
 *          <p>Creating a queue does not change how producers write to the stream, and it does not change
 *             how existing stream consumers read from it. A queue counts as a registered consumer on the
 *             stream and shares the stream's registered consumer limit with enhanced fan-out
 *             consumers: 20 on On-demand Standard and 50 on On-demand Advantage.</p>
 *          <p>Use <code>StartingPosition</code> to set the position in the stream where delivery
 *             begins. The default is <code>LATEST</code>.</p>
 *          <p>
 *             <code>CreateQueue</code> is an asynchronous operation. Upon receiving a
 *             <code>CreateQueue</code> request, Amazon Kinesis Data Streams immediately returns a queue
 *             description with a <code>QueueStatus</code> of <code>CREATING</code>. After the queue is
 *             created, Kinesis Data Streams sets the <code>QueueStatus</code> to <code>ACTIVE</code>.
 *             You can begin receiving records after the queue is <code>ACTIVE</code>. Use
 *             <a>DescribeQueue</a> to check the status of the queue.</p>
 *          <p>Each queue has built-in dead-letter handling. When a record has been received
 *             <code>MaxReceiveCount</code> times without being acknowledged, it becomes a dead-letter
 *             record, and <a>ReceiveQueueRecords</a> no longer returns it. You work with
 *             dead-letter records through a separate set of operations that use the same queue ARN: <a>ReceiveDeadLetterQueueRecords</a>,
 *             <a>AcknowledgeDeadLetterQueueRecords</a>,
 *             <a>UpdateDeadLetterQueueRecordsVisibility</a>, and
 *             <a>RestoreDeadLetterQueueRecords</a>.</p>
 *          <p>Dead-letter handling is enabled by default, with a <code>MaxReceiveCount</code> of 6. To
 *             use a different value, or to turn dead-letter handling off, specify
 *             <code>DeadLetterConfiguration</code> in <code>QueueAttributes</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, CreateQueueCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, CreateQueueCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * // import type { KinesisClientConfig } from "@aws-sdk/client-kinesis";
 * const config = {}; // type is KinesisClientConfig
 * const client = new KinesisClient(config);
 * const input = { // CreateQueueInput
 *   QueueName: "STRING_VALUE", // required
 *   StreamConfigurationList: [ // QueueStreamConfigurationList // required
 *     { // QueueStreamConfiguration
 *       StreamARN: "STRING_VALUE", // required
 *       StartingPosition: { // QueueStartingPosition
 *         Type: "TRIM_HORIZON" || "LATEST" || "AT_TIMESTAMP", // required
 *         Timestamp: new Date("TIMESTAMP"),
 *       },
 *     },
 *   ],
 *   QueueAttributes: { // QueueAttributes
 *     VisibilityTimeoutSeconds: Number("int"),
 *     DeadLetterConfiguration: { // DeadLetterConfiguration
 *       TargetType: "BUILT_IN" || "NONE", // required
 *       MaxReceiveCount: Number("int"),
 *     },
 *   },
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateQueueCommand(input);
 * const response = await client.send(command);
 * // { // CreateQueueOutput
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
 * @param CreateQueueCommandInput - {@link CreateQueueCommandInput}
 * @returns {@link CreateQueueCommandOutput}
 * @see {@link CreateQueueCommandInput} for command's `input` shape.
 * @see {@link CreateQueueCommandOutput} for command's `response` shape.
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
export class CreateQueueCommand extends command<CreateQueueCommandInput, CreateQueueCommandOutput>(
  _ep3,
  _mw0,
  "CreateQueue",
  CreateQueue$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateQueueInput;
      output: CreateQueueOutput;
    };
    sdk: {
      input: CreateQueueCommandInput;
      output: CreateQueueCommandOutput;
    };
  };
}
