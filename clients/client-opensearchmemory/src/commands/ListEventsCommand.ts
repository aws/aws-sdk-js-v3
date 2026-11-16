// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListEventsInput, ListEventsOutput } from "../models/models_0";
import { ListEvents$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListEventsCommand}.
 */
export interface ListEventsCommandInput extends ListEventsInput {}
/**
 * @public
 *
 * The output of {@link ListEventsCommand}.
 */
export interface ListEventsCommandOutput extends ListEventsOutput, __MetadataBearer {}

/**
 * <p>Lists the events in a session, sorted by time. Optionally limit the results to events whose <code>eventTimestamp</code> falls between <code>eventTimestampAfter</code> and <code>eventTimestampBefore</code>. Returns event metadata only. Call <code>GetEvent</code> for the payload. For full-text or relevance search, use <code>SearchEvents</code>.</p> <p>If the space uses a customer managed AWS KMS key, the call can also fail because of the key. It fails with <code>AccessDeniedException</code> if you aren't allowed to use the key, and with <code>ThrottlingException</code> if AWS KMS throttles the request. It fails with <code>ValidationException</code> if the key is disabled, pending deletion, or deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchMemoryClient, ListEventsCommand } from "@aws-sdk/client-opensearchmemory"; // ES Modules import
 * // const { OpenSearchMemoryClient, ListEventsCommand } = require("@aws-sdk/client-opensearchmemory"); // CommonJS import
 * // import type { OpenSearchMemoryClientConfig } from "@aws-sdk/client-opensearchmemory";
 * const config = {}; // type is OpenSearchMemoryClientConfig
 * const client = new OpenSearchMemoryClient(config);
 * const input = { // ListEventsInput
 *   spaceId: "STRING_VALUE", // required
 *   actorId: "STRING_VALUE", // required
 *   sessionId: "STRING_VALUE", // required
 *   eventTimestampBefore: new Date("TIMESTAMP"),
 *   eventTimestampAfter: new Date("TIMESTAMP"),
 *   sortOrder: "ASC" || "DESC",
 *   metadataFilters: { // MetadataMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListEventsCommand(input);
 * const response = await client.send(command);
 * // { // ListEventsOutput
 * //   events: [ // EventSummaryList // required
 * //     { // EventSummary
 * //       eventId: "STRING_VALUE", // required
 * //       metadata: { // MetadataMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       eventTimestamp: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEventsCommandInput - {@link ListEventsCommandInput}
 * @returns {@link ListEventsCommandOutput}
 * @see {@link ListEventsCommandInput} for command's `input` shape.
 * @see {@link ListEventsCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchMemoryClientResolvedConfig | config} for OpenSearchMemoryClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this operation. To use this operation, you must have AWS Identity and Access Management (IAM) permissions for the operation, and on the resource it acts on. If the space uses a customer managed AWS Key Management Service (AWS KMS) key, you must also have permission to use the key.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service couldn't process the request because of an internal error. Retry the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource doesn't exist. Check the IDs in the request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The service throttled the request. Retry the request with exponential backoff.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. The <code>reason</code>, <code>message</code>, and <code>fieldList</code> members describe the problem. Fix the request, and then try again.</p>
 *
 * @throws {@link OpenSearchMemoryServiceException}
 * <p>Base exception class for all service exceptions from OpenSearchMemory service.</p>
 *
 *
 * @public
 */
export class ListEventsCommand extends command<ListEventsCommandInput, ListEventsCommandOutput>(
  _ep0,
  _mw0,
  "ListEvents",
  ListEvents$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEventsInput;
      output: ListEventsOutput;
    };
    sdk: {
      input: ListEventsCommandInput;
      output: ListEventsCommandOutput;
    };
  };
}
