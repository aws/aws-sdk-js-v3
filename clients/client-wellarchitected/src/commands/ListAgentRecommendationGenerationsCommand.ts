// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListAgentRecommendationGenerationsRequest,
  ListAgentRecommendationGenerationsResponse,
} from "../models/models_0";
import { ListAgentRecommendationGenerations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAgentRecommendationGenerationsCommand}.
 */
export interface ListAgentRecommendationGenerationsCommandInput extends ListAgentRecommendationGenerationsRequest {}
/**
 * @public
 *
 * The output of {@link ListAgentRecommendationGenerationsCommand}.
 */
export interface ListAgentRecommendationGenerationsCommandOutput extends ListAgentRecommendationGenerationsResponse, __MetadataBearer {}

/**
 * <p>Lists recommendation generation processes for a specified profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, ListAgentRecommendationGenerationsCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, ListAgentRecommendationGenerationsCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // ListAgentRecommendationGenerationsRequest
 *   profileArn: "STRING_VALUE", // required
 *   recommendationType: "RESOURCE" || "ARCHITECTURE" || "APPLICATION",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListAgentRecommendationGenerationsCommand(input);
 * const response = await client.send(command);
 * // { // ListAgentRecommendationGenerationsResponse
 * //   items: [ // AgentRecommendationGenerationSummaries // required
 * //     { // AgentRecommendationGenerationSummary
 * //       id: "STRING_VALUE", // required
 * //       profileArn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE",
 * //       status: "QUEUED" || "IN_PROGRESS" || "COMPLETED" || "ERROR", // required
 * //       estimatedCompletionTime: new Date("TIMESTAMP"),
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
 * @param ListAgentRecommendationGenerationsCommandInput - {@link ListAgentRecommendationGenerationsCommandInput}
 * @returns {@link ListAgentRecommendationGenerationsCommandOutput}
 * @see {@link ListAgentRecommendationGenerationsCommandInput} for command's `input` shape.
 * @see {@link ListAgentRecommendationGenerationsCommandOutput} for command's `response` shape.
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
export class ListAgentRecommendationGenerationsCommand extends command<ListAgentRecommendationGenerationsCommandInput, ListAgentRecommendationGenerationsCommandOutput>(
  _ep0,
  _mw0,
  "ListAgentRecommendationGenerations",
  ListAgentRecommendationGenerations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAgentRecommendationGenerationsRequest;
      output: ListAgentRecommendationGenerationsResponse;
    };
    sdk: {
      input: ListAgentRecommendationGenerationsCommandInput;
      output: ListAgentRecommendationGenerationsCommandOutput;
    };
  };
}
