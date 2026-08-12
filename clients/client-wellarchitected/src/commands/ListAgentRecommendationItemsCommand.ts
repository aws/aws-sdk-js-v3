// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
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
 * <p>Lists recommendation items for a specific recommendation. Recommendation items provide detailed information about individual optimization opportunities.</p>
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
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is a problem with the Well-Architected Tool API service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The user input is not valid.</p>
 *
 * @throws {@link WellArchitectedServiceException}
 * <p>Base exception class for all service exceptions from WellArchitected service.</p>
 *
 *
 * @public
 */
export class ListAgentRecommendationItemsCommand extends command<ListAgentRecommendationItemsCommandInput, ListAgentRecommendationItemsCommandOutput>(
  _ep0,
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
