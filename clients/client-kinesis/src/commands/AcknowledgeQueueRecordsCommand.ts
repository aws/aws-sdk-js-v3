// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AcknowledgeQueueRecordsInput, AcknowledgeQueueRecordsOutput } from "../models/models_0";
import { AcknowledgeQueueRecords$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AcknowledgeQueueRecordsCommand}.
 */
export interface AcknowledgeQueueRecordsCommandInput extends AcknowledgeQueueRecordsInput {}
/**
 * @public
 *
 * The output of {@link AcknowledgeQueueRecordsCommand}.
 */
export interface AcknowledgeQueueRecordsCommandOutput extends AcknowledgeQueueRecordsOutput, __MetadataBearer {}

/**
 * <p>Acknowledges up to 10 records from the specified queue. After a record is acknowledged,
 *             the queue does not deliver it again. The result for each entry is reported individually in
 *             the response.</p>
 *          <p>Acknowledging a record does not affect the record in the data stream. That record remains available to stream consumers and to other queues on the same stream for the rest of its retention period.</p>
 *          <p>Because the request can result in a combination of successful and unsuccessful entries, check the <code>Failed</code> list even when the call returns an HTTP status code of <code>200</code>.</p>
 *          <p>On rare occasions, you can receive a record again after you acknowledge it. Design your
 *             queue consumer to be idempotent, so that processing the same record more than once is
 *             safe.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, AcknowledgeQueueRecordsCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, AcknowledgeQueueRecordsCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * // import type { KinesisClientConfig } from "@aws-sdk/client-kinesis";
 * const config = {}; // type is KinesisClientConfig
 * const client = new KinesisClient(config);
 * const input = { // AcknowledgeQueueRecordsInput
 *   QueueARN: "STRING_VALUE", // required
 *   Entries: [ // AcknowledgeQueueRecordsRequestEntryList // required
 *     { // AcknowledgeQueueRecordsRequestEntry
 *       ReceiptHandle: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new AcknowledgeQueueRecordsCommand(input);
 * const response = await client.send(command);
 * // { // AcknowledgeQueueRecordsOutput
 * //   Successful: [ // AcknowledgeQueueRecordsResultEntryList // required
 * //     { // AcknowledgeQueueRecordsResultEntry
 * //       ReceiptHandle: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   Failed: [ // AcknowledgeQueueRecordsErrorEntryList // required
 * //     { // AcknowledgeQueueRecordsErrorEntry
 * //       ReceiptHandle: "STRING_VALUE", // required
 * //       ErrorCode: "STRING_VALUE", // required
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param AcknowledgeQueueRecordsCommandInput - {@link AcknowledgeQueueRecordsCommandInput}
 * @returns {@link AcknowledgeQueueRecordsCommandOutput}
 * @see {@link AcknowledgeQueueRecordsCommandInput} for command's `input` shape.
 * @see {@link AcknowledgeQueueRecordsCommandOutput} for command's `response` shape.
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
export class AcknowledgeQueueRecordsCommand extends command<AcknowledgeQueueRecordsCommandInput, AcknowledgeQueueRecordsCommandOutput>(
  _ep0,
  _mw0,
  "AcknowledgeQueueRecords",
  AcknowledgeQueueRecords$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AcknowledgeQueueRecordsInput;
      output: AcknowledgeQueueRecordsOutput;
    };
    sdk: {
      input: AcknowledgeQueueRecordsCommandInput;
      output: AcknowledgeQueueRecordsCommandOutput;
    };
  };
}
