// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep3, _mw0, command } from "../commandBuilder";
import type { ListQueuesInput, ListQueuesOutput } from "../models/models_0";
import { ListQueues$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListQueuesCommand}.
 */
export interface ListQueuesCommandInput extends ListQueuesInput {}
/**
 * @public
 *
 * The output of {@link ListQueuesCommand}.
 */
export interface ListQueuesCommandOutput extends ListQueuesOutput, __MetadataBearer {}

/**
 * <p>Returns a summary of each queue in the Amazon Web Services account and Region used by the
 *             request. Use <code>StreamFilter</code> to list only the queues on a particular data
 *             stream.</p>
 *          <p>If the response contains a <code>NextToken</code>, more queues are available. Call
 *             <code>ListQueues</code> again with that value to retrieve the next page.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, ListQueuesCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, ListQueuesCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * // import type { KinesisClientConfig } from "@aws-sdk/client-kinesis";
 * const config = {}; // type is KinesisClientConfig
 * const client = new KinesisClient(config);
 * const input = { // ListQueuesInput
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   StreamFilter: [ // QueueStreamFilterList
 *     { // QueueStreamFilter
 *       StreamARN: "STRING_VALUE", // required
 *       StreamCreationTimestamp: new Date("TIMESTAMP"),
 *     },
 *   ],
 * };
 * const command = new ListQueuesCommand(input);
 * const response = await client.send(command);
 * // { // ListQueuesOutput
 * //   QueueSummaries: [ // QueueSummaryList // required
 * //     { // QueueSummary
 * //       QueueName: "STRING_VALUE", // required
 * //       QueueARN: "STRING_VALUE", // required
 * //       QueueStatus: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING", // required
 * //       QueueCreationTimestamp: new Date("TIMESTAMP"), // required
 * //       Streams: [ // QueueStreamIdentifierList // required
 * //         { // QueueStreamIdentifier
 * //           StreamARN: "STRING_VALUE", // required
 * //           StreamCreationTimestamp: new Date("TIMESTAMP"), // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListQueuesCommandInput - {@link ListQueuesCommandInput}
 * @returns {@link ListQueuesCommandOutput}
 * @see {@link ListQueuesCommandInput} for command's `input` shape.
 * @see {@link ListQueuesCommandOutput} for command's `response` shape.
 * @see {@link KinesisClientResolvedConfig | config} for KinesisClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Specifies that you do not have the permissions required to perform this
 *             operation.</p>
 *
 * @throws {@link ExpiredNextTokenException} (client fault)
 *  <p>The pagination token passed to the operation is expired.</p>
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
export class ListQueuesCommand extends command<ListQueuesCommandInput, ListQueuesCommandOutput>(
  _ep3,
  _mw0,
  "ListQueues",
  ListQueues$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListQueuesInput;
      output: ListQueuesOutput;
    };
    sdk: {
      input: ListQueuesCommandInput;
      output: ListQueuesCommandOutput;
    };
  };
}
