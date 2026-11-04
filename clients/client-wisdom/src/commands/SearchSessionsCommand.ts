// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SearchSessionsRequest, SearchSessionsResponse } from "../models/models_0";
import { SearchSessions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SearchSessionsCommand}.
 */
export interface SearchSessionsCommandInput extends SearchSessionsRequest {}
/**
 * @public
 *
 * The output of {@link SearchSessionsCommand}.
 */
export interface SearchSessionsCommandOutput extends SearchSessionsResponse, __MetadataBearer {}

/**
 * Searches for sessions.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WisdomClient, SearchSessionsCommand } from "@aws-sdk/client-wisdom"; // ES Modules import
 * // const { WisdomClient, SearchSessionsCommand } = require("@aws-sdk/client-wisdom"); // CommonJS import
 * // import type { WisdomClientConfig } from "@aws-sdk/client-wisdom";
 * const config = {}; // type is WisdomClientConfig
 * const client = new WisdomClient(config);
 * const input = { // SearchSessionsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   assistantId: "STRING_VALUE", // required
 *   searchExpression: { // SearchExpression
 *     filters: [ // FilterList // required
 *       { // Filter
 *         field: "STRING_VALUE", // required
 *         operator: "STRING_VALUE", // required
 *         value: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 * };
 * const command = new SearchSessionsCommand(input);
 * const response = await client.send(command);
 * // { // SearchSessionsResponse
 * //   sessionSummaries: [ // SessionSummaries // required
 * //     { // SessionSummary
 * //       sessionId: "STRING_VALUE", // required
 * //       sessionArn: "STRING_VALUE", // required
 * //       assistantId: "STRING_VALUE", // required
 * //       assistantArn: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SearchSessionsCommandInput - {@link SearchSessionsCommandInput}
 * @returns {@link SearchSessionsCommandOutput}
 * @see {@link SearchSessionsCommandInput} for command's `input` shape.
 * @see {@link SearchSessionsCommandOutput} for command's `response` shape.
 * @see {@link WisdomClientResolvedConfig | config} for WisdomClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by a service.
 *
 * @throws {@link WisdomServiceException}
 *
 * Base exception class for all service exceptions from Wisdom service.
 *
 * @public
 */
export class SearchSessionsCommand extends command<SearchSessionsCommandInput, SearchSessionsCommandOutput>(
  _ep0,
  _mw0,
  "SearchSessions",
  SearchSessions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchSessionsRequest;
      output: SearchSessionsResponse;
    };
    sdk: {
      input: SearchSessionsCommandInput;
      output: SearchSessionsCommandOutput;
    };
  };
}
