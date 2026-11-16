// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SearchEventsInput, SearchEventsOutput } from "../models/models_0";
import { SearchEvents$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SearchEventsCommand}.
 */
export interface SearchEventsCommandInput extends SearchEventsInput {}
/**
 * @public
 *
 * The output of {@link SearchEventsCommand}.
 */
export interface SearchEventsCommandOutput extends SearchEventsOutput, __MetadataBearer {}

/**
 * <p>Searches a space's events by relevance. It works like <code>SearchMemories</code> without the memory type and strategy selector. The query is a subset of the OpenSearch Query DSL. The service validates it, limits the search to the actor in <code>actorId</code> and the sessions in <code>sessionIds</code>, and returns ranked results. Each result is the matching chunk of an event, not the whole event. You can page through only a limited number of results. A request past that limit fails with <code>ValidationException</code> (reason <code>invalidNextToken</code>), and the message gives the limit.</p> <p>If the results are larger than 5 MiB, the request fails with <code>ValidationException</code> (reason <code>queryBodyTooLarge</code>). Lower <code>maxResults</code>.</p> <p>If the request would exceed the service's rate for embedding requests, it fails with <code>ThrottlingException</code>. Retry with exponential backoff.</p> <p>If the space uses a customer managed AWS KMS key, the call can also fail because of the key. It fails with <code>AccessDeniedException</code> if you aren't allowed to use the key, and with <code>ThrottlingException</code> if AWS KMS throttles the request. It fails with <code>ValidationException</code> if the key is disabled, pending deletion, or deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchMemoryClient, SearchEventsCommand } from "@aws-sdk/client-opensearchmemory"; // ES Modules import
 * // const { OpenSearchMemoryClient, SearchEventsCommand } = require("@aws-sdk/client-opensearchmemory"); // CommonJS import
 * // import type { OpenSearchMemoryClientConfig } from "@aws-sdk/client-opensearchmemory";
 * const config = {}; // type is OpenSearchMemoryClientConfig
 * const client = new OpenSearchMemoryClient(config);
 * const input = { // SearchEventsInput
 *   spaceId: "STRING_VALUE", // required
 *   actorId: "STRING_VALUE", // required
 *   sessionIds: [ // SessionIdList
 *     "STRING_VALUE",
 *   ],
 *   query: "DOCUMENT_VALUE", // required
 *   sort: "DOCUMENT_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new SearchEventsCommand(input);
 * const response = await client.send(command);
 * // { // SearchEventsOutput
 * //   events: [ // EventSearchSummaryList // required
 * //     { // EventSearchSummary
 * //       eventId: "STRING_VALUE", // required
 * //       score: Number("double"),
 * //       systemMetadata: { // SystemMetadata
 * //         actorId: "STRING_VALUE",
 * //         sessionId: "STRING_VALUE",
 * //         createdAt: new Date("TIMESTAMP"),
 * //         updatedAt: new Date("TIMESTAMP"),
 * //       },
 * //       metadata: { // MetadataMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       matchedContent: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SearchEventsCommandInput - {@link SearchEventsCommandInput}
 * @returns {@link SearchEventsCommandOutput}
 * @see {@link SearchEventsCommandInput} for command's `input` shape.
 * @see {@link SearchEventsCommandOutput} for command's `response` shape.
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
export class SearchEventsCommand extends command<SearchEventsCommandInput, SearchEventsCommandOutput>(
  _ep0,
  _mw0,
  "SearchEvents",
  SearchEvents$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchEventsInput;
      output: SearchEventsOutput;
    };
    sdk: {
      input: SearchEventsCommandInput;
      output: SearchEventsCommandOutput;
    };
  };
}
