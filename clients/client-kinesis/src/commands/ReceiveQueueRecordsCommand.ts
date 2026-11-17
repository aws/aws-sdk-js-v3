// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ReceiveQueueRecordsInput, ReceiveQueueRecordsOutput } from "../models/models_0";
import { ReceiveQueueRecords$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ReceiveQueueRecordsCommand}.
 */
export interface ReceiveQueueRecordsCommandInput extends ReceiveQueueRecordsInput {}
/**
 * @public
 *
 * The output of {@link ReceiveQueueRecordsCommand}.
 */
export interface ReceiveQueueRecordsCommandOutput extends ReceiveQueueRecordsOutput, __MetadataBearer {}

/**
 * <p>Receives up to 10 records from the specified queue. Each record is returned with a
 *             receipt handle, which is the identifier you use to acknowledge the record or change its
 *             visibility.</p>
 *          <p>A record returned by <code>ReceiveQueueRecords</code> becomes in flight: it is not visible
 *             to any consumer instance for the duration of its visibility timeout, so subsequent
 *             receive requests do not return it while your queue consumer processes it. Acknowledge the record with
 *             <a>AcknowledgeQueueRecords</a> when you finish processing it. A record that is
 *             not acknowledged before its visibility timeout expires becomes visible in the queue again
 *             and can be received by any consumer instance.</p>
 *          <p>Use <code>WaitTimeSeconds</code> to control how long the call waits for a record to
 *             become visible before returning. If a record becomes visible sooner, the call returns
 *             sooner. If the wait time expires and no records are visible, the call returns an empty
 *             list of records.</p>
 *          <p>Records are not necessarily received in the order they were written to the data
 *             stream.</p>
 *          <p>A queue delivers records while it is in the <code>ACTIVE</code> state.</p>
 *          <p>On rare occasions, a queue can deliver a record more than once. Design your queue consumer to be idempotent, so that processing the same record more than once is safe.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, ReceiveQueueRecordsCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, ReceiveQueueRecordsCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * // import type { KinesisClientConfig } from "@aws-sdk/client-kinesis";
 * const config = {}; // type is KinesisClientConfig
 * const client = new KinesisClient(config);
 * const input = { // ReceiveQueueRecordsInput
 *   QueueARN: "STRING_VALUE", // required
 *   Limit: Number("int"),
 *   WaitTimeSeconds: Number("int"),
 *   VisibilityTimeoutSeconds: Number("int"),
 * };
 * const command = new ReceiveQueueRecordsCommand(input);
 * const response = await client.send(command);
 * // { // ReceiveQueueRecordsOutput
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
 * @param ReceiveQueueRecordsCommandInput - {@link ReceiveQueueRecordsCommandInput}
 * @returns {@link ReceiveQueueRecordsCommandOutput}
 * @see {@link ReceiveQueueRecordsCommandInput} for command's `input` shape.
 * @see {@link ReceiveQueueRecordsCommandOutput} for command's `response` shape.
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
export class ReceiveQueueRecordsCommand extends command<ReceiveQueueRecordsCommandInput, ReceiveQueueRecordsCommandOutput>(
  _ep0,
  _mw0,
  "ReceiveQueueRecords",
  ReceiveQueueRecords$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ReceiveQueueRecordsInput;
      output: ReceiveQueueRecordsOutput;
    };
    sdk: {
      input: ReceiveQueueRecordsCommandInput;
      output: ReceiveQueueRecordsCommandOutput;
    };
  };
}
