// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  AcknowledgeDeadLetterQueueRecordsInput,
  AcknowledgeDeadLetterQueueRecordsOutput,
} from "../models/models_0";
import { AcknowledgeDeadLetterQueueRecords$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AcknowledgeDeadLetterQueueRecordsCommand}.
 */
export interface AcknowledgeDeadLetterQueueRecordsCommandInput extends AcknowledgeDeadLetterQueueRecordsInput {}
/**
 * @public
 *
 * The output of {@link AcknowledgeDeadLetterQueueRecordsCommand}.
 */
export interface AcknowledgeDeadLetterQueueRecordsCommandOutput extends AcknowledgeDeadLetterQueueRecordsOutput, __MetadataBearer {}

/**
 * <p>Acknowledges up to 10 dead-letter records in the specified queue, so the
 *             queue doesn't return them again. The result for each entry is reported individually
 *             in the response.</p>
 *          <p>Acknowledging a record does not affect the record in the data stream. That record remains available to stream consumers and to other queues on the same stream for the rest of its retention period.</p>
 *          <p>Because the request can result in a combination of successful and unsuccessful entries, check the <code>Failed</code> list even when the call returns an HTTP status code of <code>200</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, AcknowledgeDeadLetterQueueRecordsCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, AcknowledgeDeadLetterQueueRecordsCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * // import type { KinesisClientConfig } from "@aws-sdk/client-kinesis";
 * const config = {}; // type is KinesisClientConfig
 * const client = new KinesisClient(config);
 * const input = { // AcknowledgeDeadLetterQueueRecordsInput
 *   QueueARN: "STRING_VALUE", // required
 *   Entries: [ // AcknowledgeDeadLetterQueueRecordsRequestEntryList // required
 *     { // AcknowledgeDeadLetterQueueRecordsRequestEntry
 *       ReceiptHandle: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new AcknowledgeDeadLetterQueueRecordsCommand(input);
 * const response = await client.send(command);
 * // { // AcknowledgeDeadLetterQueueRecordsOutput
 * //   Successful: [ // AcknowledgeDeadLetterQueueRecordsResultEntryList // required
 * //     { // AcknowledgeDeadLetterQueueRecordsResultEntry
 * //       ReceiptHandle: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   Failed: [ // AcknowledgeDeadLetterQueueRecordsErrorEntryList // required
 * //     { // AcknowledgeDeadLetterQueueRecordsErrorEntry
 * //       ReceiptHandle: "STRING_VALUE", // required
 * //       ErrorCode: "STRING_VALUE", // required
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param AcknowledgeDeadLetterQueueRecordsCommandInput - {@link AcknowledgeDeadLetterQueueRecordsCommandInput}
 * @returns {@link AcknowledgeDeadLetterQueueRecordsCommandOutput}
 * @see {@link AcknowledgeDeadLetterQueueRecordsCommandInput} for command's `input` shape.
 * @see {@link AcknowledgeDeadLetterQueueRecordsCommandOutput} for command's `response` shape.
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
export class AcknowledgeDeadLetterQueueRecordsCommand extends command<AcknowledgeDeadLetterQueueRecordsCommandInput, AcknowledgeDeadLetterQueueRecordsCommandOutput>(
  _ep0,
  _mw0,
  "AcknowledgeDeadLetterQueueRecords",
  AcknowledgeDeadLetterQueueRecords$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AcknowledgeDeadLetterQueueRecordsInput;
      output: AcknowledgeDeadLetterQueueRecordsOutput;
    };
    sdk: {
      input: AcknowledgeDeadLetterQueueRecordsCommandInput;
      output: AcknowledgeDeadLetterQueueRecordsCommandOutput;
    };
  };
}
