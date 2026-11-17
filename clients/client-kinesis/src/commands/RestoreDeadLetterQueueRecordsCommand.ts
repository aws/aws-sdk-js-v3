// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RestoreDeadLetterQueueRecordsInput, RestoreDeadLetterQueueRecordsOutput } from "../models/models_0";
import { RestoreDeadLetterQueueRecords$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RestoreDeadLetterQueueRecordsCommand}.
 */
export interface RestoreDeadLetterQueueRecordsCommandInput extends RestoreDeadLetterQueueRecordsInput {}
/**
 * @public
 *
 * The output of {@link RestoreDeadLetterQueueRecordsCommand}.
 */
export interface RestoreDeadLetterQueueRecordsCommandOutput extends RestoreDeadLetterQueueRecordsOutput, __MetadataBearer {}

/**
 * <p>Restores up to 10 dead-letter records in the specified queue. Restoring a record clears
 *             its dead-letter state and resets its receive count, so
 *             <a>ReceiveQueueRecords</a> can return it again, up to <code>MaxReceiveCount</code> times before it becomes a dead-letter record
 *             again. The result for each entry is reported individually in the response.</p>
 *          <p>Restore records after you have corrected the condition that prevented your queue consumer
 *             from processing them.</p>
 *          <p>Because the request can result in a combination of successful and unsuccessful entries, check the <code>Failed</code> list even when the call returns an HTTP status code of <code>200</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, RestoreDeadLetterQueueRecordsCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, RestoreDeadLetterQueueRecordsCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * // import type { KinesisClientConfig } from "@aws-sdk/client-kinesis";
 * const config = {}; // type is KinesisClientConfig
 * const client = new KinesisClient(config);
 * const input = { // RestoreDeadLetterQueueRecordsInput
 *   QueueARN: "STRING_VALUE", // required
 *   Entries: [ // RestoreDeadLetterQueueRecordsRequestEntryList // required
 *     { // RestoreDeadLetterQueueRecordsRequestEntry
 *       ReceiptHandle: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new RestoreDeadLetterQueueRecordsCommand(input);
 * const response = await client.send(command);
 * // { // RestoreDeadLetterQueueRecordsOutput
 * //   Successful: [ // RestoreDeadLetterQueueRecordsResultEntryList // required
 * //     { // RestoreDeadLetterQueueRecordsResultEntry
 * //       ReceiptHandle: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   Failed: [ // RestoreDeadLetterQueueRecordsErrorEntryList // required
 * //     { // RestoreDeadLetterQueueRecordsErrorEntry
 * //       ReceiptHandle: "STRING_VALUE", // required
 * //       ErrorCode: "STRING_VALUE", // required
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param RestoreDeadLetterQueueRecordsCommandInput - {@link RestoreDeadLetterQueueRecordsCommandInput}
 * @returns {@link RestoreDeadLetterQueueRecordsCommandOutput}
 * @see {@link RestoreDeadLetterQueueRecordsCommandInput} for command's `input` shape.
 * @see {@link RestoreDeadLetterQueueRecordsCommandOutput} for command's `response` shape.
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
export class RestoreDeadLetterQueueRecordsCommand extends command<RestoreDeadLetterQueueRecordsCommandInput, RestoreDeadLetterQueueRecordsCommandOutput>(
  _ep0,
  _mw0,
  "RestoreDeadLetterQueueRecords",
  RestoreDeadLetterQueueRecords$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RestoreDeadLetterQueueRecordsInput;
      output: RestoreDeadLetterQueueRecordsOutput;
    };
    sdk: {
      input: RestoreDeadLetterQueueRecordsCommandInput;
      output: RestoreDeadLetterQueueRecordsCommandOutput;
    };
  };
}
