// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep1, _mw0, command } from "../commandBuilder";
import type {
  StartAgentRecommendationGenerationRequest,
  StartAgentRecommendationGenerationResponse,
} from "../models/models_0";
import { StartAgentRecommendationGeneration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartAgentRecommendationGenerationCommand}.
 */
export interface StartAgentRecommendationGenerationCommandInput extends StartAgentRecommendationGenerationRequest {}
/**
 * @public
 *
 * The output of {@link StartAgentRecommendationGenerationCommand}.
 */
export interface StartAgentRecommendationGenerationCommandOutput extends StartAgentRecommendationGenerationResponse, __MetadataBearer {}

/**
 * <p>Starts a recommendation generation process for the specified agent profile. This asynchronous operation returns immediately. Use <code>GetAgentRecommendationGeneration</code> to check the status of the generation.</p> <p>Currently, only the <code>ARCHITECTURE</code> recommendation type is supported. <code>RESOURCE</code> and <code>APPLICATION</code> recommendations are generated only by the scheduled generation cycle and cannot be started with this operation.</p> <p>For the <code>ARCHITECTURE</code> type, the generation analyzes the infrastructure as code (IaC) template that you specify in <code>additionalContext</code>, and returns updated templates with best practice fixes applied. You must specify <code>scope</code> and <code>additionalContext</code>. You can optionally specify <code>name</code>.</p> <p>Architecture review generations are subject to a daily quota for each profile. For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/agent-quotas.html">Quotas and limits</a> in the Amazon Web Services Well-Architected User Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, StartAgentRecommendationGenerationCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, StartAgentRecommendationGenerationCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // StartAgentRecommendationGenerationRequest
 *   profileArn: "STRING_VALUE", // required
 *   types: [ // RecommendationTypes // required
 *     "RESOURCE" || "ARCHITECTURE" || "APPLICATION",
 *   ],
 *   name: "STRING_VALUE",
 *   additionalContext: "DOCUMENT_VALUE",
 *   scope: { // Scope
 *     pillars: [ // Pillars // required
 *       "COST_OPTIMIZATION" || "SECURITY" || "RESILIENCE" || "PERFORMANCE" || "OPERATIONAL_EXCELLENCE",
 *     ],
 *     goalIds: [ // GoalIdList
 *       "STRING_VALUE",
 *     ],
 *     items: [ // PillarItems
 *       { // PillarItem
 *         pillar: "COST_OPTIMIZATION" || "SECURITY" || "RESILIENCE" || "PERFORMANCE" || "OPERATIONAL_EXCELLENCE", // required
 *         ids: [ // ItemIds // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *     ],
 *   },
 * };
 * const command = new StartAgentRecommendationGenerationCommand(input);
 * const response = await client.send(command);
 * // { // StartAgentRecommendationGenerationResponse
 * //   id: "STRING_VALUE", // required
 * //   profileArn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE",
 * //   status: "QUEUED" || "IN_PROGRESS" || "COMPLETED" || "ERROR", // required
 * //   estimatedCompletionTime: new Date("TIMESTAMP"),
 * //   createdBy: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   lastModifiedBy: "STRING_VALUE",
 * //   lastModifiedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param StartAgentRecommendationGenerationCommandInput - {@link StartAgentRecommendationGenerationCommandInput}
 * @returns {@link StartAgentRecommendationGenerationCommandOutput}
 * @see {@link StartAgentRecommendationGenerationCommandInput} for command's `input` shape.
 * @see {@link StartAgentRecommendationGenerationCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The resource has already been processed, was deleted, or is too large.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is a problem with the Well-Architected Tool API service.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The user has reached their resource quota.</p>
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
export class StartAgentRecommendationGenerationCommand extends command<StartAgentRecommendationGenerationCommandInput, StartAgentRecommendationGenerationCommandOutput>(
  _ep1,
  _mw0,
  "StartAgentRecommendationGeneration",
  StartAgentRecommendationGeneration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartAgentRecommendationGenerationRequest;
      output: StartAgentRecommendationGenerationResponse;
    };
    sdk: {
      input: StartAgentRecommendationGenerationCommandInput;
      output: StartAgentRecommendationGenerationCommandOutput;
    };
  };
}
