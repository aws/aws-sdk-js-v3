// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SearchAgentsRequest, SearchAgentsResponse } from "../models/models_5";
import { SearchAgents$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SearchAgentsCommand}.
 */
export interface SearchAgentsCommandInput extends SearchAgentsRequest {}
/**
 * @public
 *
 * The output of {@link SearchAgentsCommand}.
 */
export interface SearchAgentsCommandOutput extends SearchAgentsResponse, __MetadataBearer {}

/**
 * Searches for agents based on specified filters.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, SearchAgentsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, SearchAgentsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // SearchAgentsRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   Filters: [ // AgentSearchFilterList // required
 *     { // AgentSearchFilter
 *       Name: "DIRECT_QUICKSIGHT_OWNER" || "DIRECT_QUICKSIGHT_VIEWER_OR_OWNER" || "DIRECT_QUICKSIGHT_SOLE_OWNER" || "AGENT_NAME",
 *       Operator: "StringEquals" || "StringLike",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new SearchAgentsCommand(input);
 * const response = await client.send(command);
 * // { // SearchAgentsResponse
 * //   AgentSummaries: [ // AgentSummaryList
 * //     { // AgentSummary
 * //       Arn: "STRING_VALUE", // required
 * //       AgentId: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //       Description: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"), // required
 * //       UpdatedAt: new Date("TIMESTAMP"), // required
 * //       IconId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   RequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SearchAgentsCommandInput - {@link SearchAgentsCommandInput}
 * @returns {@link SearchAgentsCommandOutput}
 * @see {@link SearchAgentsCommandInput} for command's `input` shape.
 * @see {@link SearchAgentsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have access to this item. The provided credentials couldn't be validated. You might not be authorized to carry out the request. Make sure that your account is authorized to use the Amazon Quick Sight service, that your policies have the correct permissions, and that you are using the correct credentials.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An internal failure occurred.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * One or more parameters has a value that isn't valid.
 *
 * @throws {@link PreconditionNotMetException} (client fault)
 *
 * One or more preconditions aren't met.
 *
 * @throws {@link ResourceExistsException} (client fault)
 *
 * The resource specified already exists.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Access is throttled.
 *
 * @throws {@link QuickSightServiceException}
 *
 * Base exception class for all service exceptions from QuickSight service.
 *
 * @public
 */
export class SearchAgentsCommand extends command<SearchAgentsCommandInput, SearchAgentsCommandOutput>(
  _ep0,
  _mw0,
  "SearchAgents",
  SearchAgents$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchAgentsRequest;
      output: SearchAgentsResponse;
    };
    sdk: {
      input: SearchAgentsCommandInput;
      output: SearchAgentsCommandOutput;
    };
  };
}
