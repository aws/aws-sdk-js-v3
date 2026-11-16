// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListMemoriesInput, ListMemoriesOutput } from "../models/models_0";
import { ListMemories$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListMemoriesCommand}.
 */
export interface ListMemoriesCommandInput extends ListMemoriesInput {}
/**
 * @public
 *
 * The output of {@link ListMemoriesCommand}.
 */
export interface ListMemoriesCommandOutput extends ListMemoriesOutput, __MetadataBearer {}

/**
 * <p>Lists a space's memories without a query, for example the most recent memories or the memories of one strategy. Filter by strategy and optionally by owning actor or session, sort by creation or update time, and page through the results. Results have no relevance score. To query or filter by metadata, use <code>SearchMemories</code>.</p> <p>If memories are written or deleted while you page, the results can skip a memory or return it twice. You can page through only a limited number of results. A request past that limit fails with <code>ValidationException</code> (reason <code>invalidNextToken</code>), and the message gives the limit.</p> <p>Memories past their expiry (set from the space's <code>memoryExpiryDays</code> when each memory is written) are left out. Unlike <code>SearchMemories</code>, this operation also returns memories that consolidation has superseded.</p> <p>If the space uses a customer managed AWS KMS key, the call can also fail because of the key. It fails with <code>AccessDeniedException</code> if you aren't allowed to use the key, and with <code>ThrottlingException</code> if AWS KMS throttles the request. It fails with <code>ValidationException</code> if the key is disabled, pending deletion, or deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchMemoryClient, ListMemoriesCommand } from "@aws-sdk/client-opensearchmemory"; // ES Modules import
 * // const { OpenSearchMemoryClient, ListMemoriesCommand } = require("@aws-sdk/client-opensearchmemory"); // CommonJS import
 * // import type { OpenSearchMemoryClientConfig } from "@aws-sdk/client-opensearchmemory";
 * const config = {}; // type is OpenSearchMemoryClientConfig
 * const client = new OpenSearchMemoryClient(config);
 * const input = { // ListMemoriesInput
 *   spaceId: "STRING_VALUE", // required
 *   memoryStrategies: [ // StrategySelectorList
 *     { // StrategySelector
 *       memoryType: "SEMANTIC" || "SUMMARY" || "CUSTOM", // required
 *       memoryStrategyNames: [ // StrategyNameList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   actorIds: [ // ActorIdList
 *     "STRING_VALUE",
 *   ],
 *   sessionIds: [ // SessionIdList
 *     "STRING_VALUE",
 *   ],
 *   sortBy: "CREATED_AT" || "UPDATED_AT",
 *   sortOrder: "ASC" || "DESC",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListMemoriesCommand(input);
 * const response = await client.send(command);
 * // { // ListMemoriesOutput
 * //   memories: [ // MemoryListSummaryList // required
 * //     { // MemoryListSummary
 * //       memoryId: "STRING_VALUE", // required
 * //       memoryType: "SEMANTIC" || "SUMMARY" || "CUSTOM", // required
 * //       strategyName: "STRING_VALUE",
 * //       systemMetadata: { // SystemMetadata
 * //         actorId: "STRING_VALUE",
 * //         sessionId: "STRING_VALUE",
 * //         createdAt: new Date("TIMESTAMP"),
 * //         updatedAt: new Date("TIMESTAMP"),
 * //       },
 * //       metadata: { // MetadataMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListMemoriesCommandInput - {@link ListMemoriesCommandInput}
 * @returns {@link ListMemoriesCommandOutput}
 * @see {@link ListMemoriesCommandInput} for command's `input` shape.
 * @see {@link ListMemoriesCommandOutput} for command's `response` shape.
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
export class ListMemoriesCommand extends command<ListMemoriesCommandInput, ListMemoriesCommandOutput>(
  _ep0,
  _mw0,
  "ListMemories",
  ListMemories$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMemoriesInput;
      output: ListMemoriesOutput;
    };
    sdk: {
      input: ListMemoriesCommandInput;
      output: ListMemoriesCommandOutput;
    };
  };
}
