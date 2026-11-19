// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw1, command } from "../commandBuilder";
import type { ReceiveDeadLetterQueueRecordsInput, ReceiveDeadLetterQueueRecordsOutput } from "../models/models_0";
import { ReceiveDeadLetterQueueRecords$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ReceiveDeadLetterQueueRecordsCommand}.
 */
export interface ReceiveDeadLetterQueueRecordsCommandInput extends ReceiveDeadLetterQueueRecordsInput {}
/**
 * @public
 *
 * The output of {@link ReceiveDeadLetterQueueRecordsCommand}.
 */
export interface ReceiveDeadLetterQueueRecordsCommandOutput extends ReceiveDeadLetterQueueRecordsOutput, __MetadataBearer {}

/**
 * <p>Receives up to 10 dead-letter records from the specified queue. Each queue has built-in
 *             dead-letter handling: when a record has been received <code>MaxReceiveCount</code> times
 *             without being acknowledged, it becomes a dead-letter record, which usually means your queue
 *             consumer could not process it. The dead-letter record stays in the same queue, and
 *             <a>ReceiveQueueRecords</a> no longer returns it.</p>
 *          <p>Dead-letter records carry the same data and partition key as when
 *             they were first delivered, and are returned with a receipt handle. Use the receipt
 *             handle to acknowledge the record with
 *             <a>AcknowledgeDeadLetterQueueRecords</a>, which discards it, to change its
 *             visibility with <a>UpdateDeadLetterQueueRecordsVisibility</a>, or to restore
 *             it with <a>RestoreDeadLetterQueueRecords</a>, which returns it to the normal
 *             receive path so that <a>ReceiveQueueRecords</a> can return it again.</p>
 *          <p>Use this operation to inspect the records your queue consumer could not process, so you
 *             can correct the cause and then either acknowledge or restore them.</p>
 *          <p>A queue delivers dead-letter records while it is in the <code>ACTIVE</code>
 *             state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, ReceiveDeadLetterQueueRecordsCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, ReceiveDeadLetterQueueRecordsCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * // import type { KinesisClientConfig } from "@aws-sdk/client-kinesis";
 * const config = {}; // type is KinesisClientConfig
 * const client = new KinesisClient(config);
 * const input = { // ReceiveDeadLetterQueueRecordsInput
 *   QueueARN: "STRING_VALUE", // required
 *   Limit: Number("int"),
 *   WaitTimeSeconds: Number("int"),
 *   VisibilityTimeoutSeconds: Number("int"),
 * };
 * const command = new ReceiveDeadLetterQueueRecordsCommand(input);
 * const response = await client.send(command);
 * // { // ReceiveDeadLetterQueueRecordsOutput
 * //   QueueRecords: [ // QueueRecordList // required
 * //     { // QueueRecord
 * //       ReceiptHandle: "STRING_VALUE", // required
 * //       RecordId: "STRING_VALUE", // required
 * //       PartitionKey: "STRING_VALUE",
 * //       Data: new Uint8Array(), // required
 * //       ApproximateArrivalTimestamp: new Date("TIMESTAMP"), // required
 * //       FirstReceiveTimestamp: new Date("TIMESTAMP"), // required
 * //       ReceiveCount: Number("int"), // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ReceiveDeadLetterQueueRecordsCommandInput - {@link ReceiveDeadLetterQueueRecordsCommandInput}
 * @returns {@link ReceiveDeadLetterQueueRecordsCommandOutput}
 * @see {@link ReceiveDeadLetterQueueRecordsCommandInput} for command's `input` shape.
 * @see {@link ReceiveDeadLetterQueueRecordsCommandOutput} for command's `response` shape.
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
 * @throws {@link KMSAccessDeniedException} (client fault)
 *  <p>The ciphertext references a key that doesn't exist or that you don't have access
 *             to.</p>
 *
 * @throws {@link KMSDisabledException} (client fault)
 *  <p>The request was rejected because the specified KMS key isn't
 *             enabled.</p>
 *
 * @throws {@link KMSInvalidStateException} (client fault)
 *  <p>The request was rejected because the state of the specified resource isn't valid for
 *             this request. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a
 *                 Customer Master Key</a> in the <i>Amazon Web Services Key Management
 *                 Service Developer Guide</i>.</p>
 *
 * @throws {@link KMSNotFoundException} (client fault)
 *  <p>The request was rejected because the specified entity or resource can't be
 *             found.</p>
 *
 * @throws {@link KMSOptInRequired} (client fault)
 *  <p>The Amazon Web Services access key ID needs a subscription for the service.</p>
 *
 * @throws {@link KMSThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. For more information about
 *             throttling, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/limits.html#requests-per-second">Limits</a> in
 *             the <i>Amazon Web Services Key Management Service Developer
 *             Guide</i>.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource could not be found. The stream might not be specified
 *             correctly.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because the request rate is too high. Reduce the frequency of
 *             your requests, and retry them with exponential backoff.</p>
 *
 * @throws {@link KinesisServiceException}
 * <p>Base exception class for all service exceptions from Kinesis service.</p>
 *
 *
 * @public
 */
export class ReceiveDeadLetterQueueRecordsCommand extends command<ReceiveDeadLetterQueueRecordsCommandInput, ReceiveDeadLetterQueueRecordsCommandOutput>(
  _ep0,
  _mw1,
  "ReceiveDeadLetterQueueRecords",
  ReceiveDeadLetterQueueRecords$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ReceiveDeadLetterQueueRecordsInput;
      output: ReceiveDeadLetterQueueRecordsOutput;
    };
    sdk: {
      input: ReceiveDeadLetterQueueRecordsCommandInput;
      output: ReceiveDeadLetterQueueRecordsCommandOutput;
    };
  };
}
