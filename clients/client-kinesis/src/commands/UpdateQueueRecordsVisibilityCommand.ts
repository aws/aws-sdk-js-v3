// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateQueueRecordsVisibilityInput, UpdateQueueRecordsVisibilityOutput } from "../models/models_0";
import { UpdateQueueRecordsVisibility$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateQueueRecordsVisibilityCommand}.
 */
export interface UpdateQueueRecordsVisibilityCommandInput extends UpdateQueueRecordsVisibilityInput {}
/**
 * @public
 *
 * The output of {@link UpdateQueueRecordsVisibilityCommand}.
 */
export interface UpdateQueueRecordsVisibilityCommandOutput extends UpdateQueueRecordsVisibilityOutput, __MetadataBearer {}

/**
 * <p>Changes the visibility timeout of up to 10 records that you have received from the
 *             specified queue but not yet acknowledged. The result for each entry is reported
 *             individually in the response.</p>
 *          <p>Extend the visibility timeout of a record when your queue consumer needs more time to
 *             finish processing it, so the record does not become visible and get redelivered while it is
 *             still being processed. Set the visibility timeout to <code>0</code> to make a record
 *             visible in the queue immediately, so that it can be received again without waiting for its
 *             current timeout to expire.</p>
 *          <p>Because the request can result in a combination of successful and unsuccessful entries, check the <code>Failed</code> list even when the call returns an HTTP status code of <code>200</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, UpdateQueueRecordsVisibilityCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, UpdateQueueRecordsVisibilityCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * // import type { KinesisClientConfig } from "@aws-sdk/client-kinesis";
 * const config = {}; // type is KinesisClientConfig
 * const client = new KinesisClient(config);
 * const input = { // UpdateQueueRecordsVisibilityInput
 *   QueueARN: "STRING_VALUE", // required
 *   Entries: [ // UpdateQueueRecordsVisibilityRequestEntryList // required
 *     { // UpdateQueueRecordsVisibilityRequestEntry
 *       ReceiptHandle: "STRING_VALUE", // required
 *       VisibilityTimeoutSeconds: Number("int"), // required
 *     },
 *   ],
 * };
 * const command = new UpdateQueueRecordsVisibilityCommand(input);
 * const response = await client.send(command);
 * // { // UpdateQueueRecordsVisibilityOutput
 * //   Successful: [ // UpdateQueueRecordsVisibilityResultEntryList // required
 * //     { // UpdateQueueRecordsVisibilityResultEntry
 * //       ReceiptHandle: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   Failed: [ // UpdateQueueRecordsVisibilityErrorEntryList // required
 * //     { // UpdateQueueRecordsVisibilityErrorEntry
 * //       ReceiptHandle: "STRING_VALUE", // required
 * //       ErrorCode: "STRING_VALUE", // required
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param UpdateQueueRecordsVisibilityCommandInput - {@link UpdateQueueRecordsVisibilityCommandInput}
 * @returns {@link UpdateQueueRecordsVisibilityCommandOutput}
 * @see {@link UpdateQueueRecordsVisibilityCommandInput} for command's `input` shape.
 * @see {@link UpdateQueueRecordsVisibilityCommandOutput} for command's `response` shape.
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
export class UpdateQueueRecordsVisibilityCommand extends command<UpdateQueueRecordsVisibilityCommandInput, UpdateQueueRecordsVisibilityCommandOutput>(
  _ep0,
  _mw0,
  "UpdateQueueRecordsVisibility",
  UpdateQueueRecordsVisibility$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateQueueRecordsVisibilityInput;
      output: UpdateQueueRecordsVisibilityOutput;
    };
    sdk: {
      input: UpdateQueueRecordsVisibilityCommandInput;
      output: UpdateQueueRecordsVisibilityCommandOutput;
    };
  };
}
