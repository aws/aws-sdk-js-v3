// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep1, _mw0, command } from "../commandBuilder";
import type { ListAgentRecommendationItemsRequest, ListAgentRecommendationItemsResponse } from "../models/models_0";
import { ListAgentRecommendationItems$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAgentRecommendationItemsCommand}.
 */
export interface ListAgentRecommendationItemsCommandInput extends ListAgentRecommendationItemsRequest {}
/**
 * @public
 *
 * The output of {@link ListAgentRecommendationItemsCommand}.
 */
export interface ListAgentRecommendationItemsCommandOutput extends ListAgentRecommendationItemsResponse, __MetadataBearer {}

/**
 * Lists recommendation items for a specific recommendation. Recommendation items provide detailed information about individual optimization opportunities.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, ListAgentRecommendationItemsCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, ListAgentRecommendationItemsCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // ListAgentRecommendationItemsRequest
 *   recommendationArn: "STRING_VALUE", // required
 *   type: "AWS_RESOURCE" || "RECOMMENDATION",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListAgentRecommendationItemsCommand(input);
 * const response = await client.send(command);
 * // { // ListAgentRecommendationItemsResponse
 * //   items: [ // AgentRecommendationItemSummaries // required
 * //     { // AgentRecommendationItemSummary
 * //       id: "STRING_VALUE", // required
 * //       recommendationArn: "STRING_VALUE", // required
 * //       type: "AWS_RESOURCE" || "RECOMMENDATION", // required
 * //       metadata: "DOCUMENT_VALUE", // required
 * //       createdBy: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       lastModifiedBy: "STRING_VALUE",
 * //       lastModifiedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAgentRecommendationItemsCommandInput - {@link ListAgentRecommendationItemsCommandInput}
 * @returns {@link ListAgentRecommendationItemsCommandOutput}
 * @see {@link ListAgentRecommendationItemsCommandInput} for command's `input` shape.
 * @see {@link ListAgentRecommendationItemsCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * User does not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * There is a problem with the Well-Architected Tool API service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The user input is not valid.
 *
 * @throws {@link WellArchitectedServiceException}
 *
 * Base exception class for all service exceptions from WellArchitected service.
 *
 * @public
 */
export class ListAgentRecommendationItemsCommand extends command<ListAgentRecommendationItemsCommandInput, ListAgentRecommendationItemsCommandOutput>(
  _ep1,
  _mw0,
  "ListAgentRecommendationItems",
  ListAgentRecommendationItems$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAgentRecommendationItemsRequest;
      output: ListAgentRecommendationItemsResponse;
    };
    sdk: {
      input: ListAgentRecommendationItemsCommandInput;
      output: ListAgentRecommendationItemsCommandOutput;
    };
  };
}
