// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAgentRecommendationsRequest, ListAgentRecommendationsResponse } from "../models/models_0";
import { ListAgentRecommendations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAgentRecommendationsCommand}.
 */
export interface ListAgentRecommendationsCommandInput extends ListAgentRecommendationsRequest {}
/**
 * @public
 *
 * The output of {@link ListAgentRecommendationsCommand}.
 */
export interface ListAgentRecommendationsCommandOutput extends ListAgentRecommendationsResponse, __MetadataBearer {}

/**
 * <p>Lists active optimization recommendations for a specified profile with optional filtering by state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, ListAgentRecommendationsCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, ListAgentRecommendationsCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // ListAgentRecommendationsRequest
 *   profileArn: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   state: "OPEN" || "CLOSED",
 *   pillar: "COST_OPTIMIZATION" || "SECURITY" || "RESILIENCE" || "PERFORMANCE" || "OPERATIONAL_EXCELLENCE",
 * };
 * const command = new ListAgentRecommendationsCommand(input);
 * const response = await client.send(command);
 * // { // ListAgentRecommendationsResponse
 * //   items: [ // AgentRecommendationSummaries // required
 * //     { // AgentRecommendationSummary
 * //       recommendationArn: "STRING_VALUE", // required
 * //       profileArn: "STRING_VALUE", // required
 * //       title: "STRING_VALUE", // required
 * //       description: "STRING_VALUE", // required
 * //       type: "RESOURCE" || "ARCHITECTURE" || "APPLICATION", // required
 * //       pillar: "COST_OPTIMIZATION" || "SECURITY" || "RESILIENCE" || "PERFORMANCE" || "OPERATIONAL_EXCELLENCE", // required
 * //       priority: "HIGH" || "MEDIUM" || "LOW", // required
 * //       effort: "LARGE" || "MEDIUM" || "SMALL", // required
 * //       status: "ACTIVE" || "SUPPRESSED" || "COMPLETED", // required
 * //       state: "OPEN" || "CLOSED", // required
 * //       updateReason: "STRING_VALUE",
 * //       impact: "HIGH" || "MEDIUM" || "LOW", // required
 * //       roi: { // Roi
 * //         estimate: "STRING_VALUE",
 * //         detail: "STRING_VALUE", // required
 * //       },
 * //       numberOfResources: Number("int"),
 * //       awsServices: [ // StringList
 * //         "STRING_VALUE",
 * //       ],
 * //       businessUnits: [
 * //         "STRING_VALUE",
 * //       ],
 * //       applications: [
 * //         "STRING_VALUE",
 * //       ],
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
 * @param ListAgentRecommendationsCommandInput - {@link ListAgentRecommendationsCommandInput}
 * @returns {@link ListAgentRecommendationsCommandOutput}
 * @see {@link ListAgentRecommendationsCommandInput} for command's `input` shape.
 * @see {@link ListAgentRecommendationsCommandOutput} for command's `response` shape.
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
export class ListAgentRecommendationsCommand extends command<ListAgentRecommendationsCommandInput, ListAgentRecommendationsCommandOutput>(
  _ep0,
  _mw0,
  "ListAgentRecommendations",
  ListAgentRecommendations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAgentRecommendationsRequest;
      output: ListAgentRecommendationsResponse;
    };
    sdk: {
      input: ListAgentRecommendationsCommandInput;
      output: ListAgentRecommendationsCommandOutput;
    };
  };
}
