// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep1, _mw0, command } from "../commandBuilder";
import type {
  GetAgentRecommendationGenerationRequest,
  GetAgentRecommendationGenerationResponse,
} from "../models/models_0";
import { GetAgentRecommendationGeneration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetAgentRecommendationGenerationCommand}.
 */
export interface GetAgentRecommendationGenerationCommandInput extends GetAgentRecommendationGenerationRequest {}
/**
 * @public
 *
 * The output of {@link GetAgentRecommendationGenerationCommand}.
 */
export interface GetAgentRecommendationGenerationCommandOutput extends GetAgentRecommendationGenerationResponse, __MetadataBearer {}

/**
 * Retrieves information about a recommendation generation process, including its status, progress, and results. Recommendation generation is asynchronous: poll this operation until status reaches a terminal value of COMPLETED (results are ready) or ERROR (see errorDetails). Intermediate values are QUEUED and IN_PROGRESS.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, GetAgentRecommendationGenerationCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, GetAgentRecommendationGenerationCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // GetAgentRecommendationGenerationRequest
 *   profileArn: "STRING_VALUE", // required
 *   generationId: "STRING_VALUE", // required
 * };
 * const command = new GetAgentRecommendationGenerationCommand(input);
 * const response = await client.send(command);
 * // { // GetAgentRecommendationGenerationResponse
 * //   id: "STRING_VALUE", // required
 * //   profileArn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE",
 * //   status: "QUEUED" || "IN_PROGRESS" || "COMPLETED" || "ERROR", // required
 * //   estimatedCompletionTime: new Date("TIMESTAMP"),
 * //   createdBy: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   lastModifiedBy: "STRING_VALUE",
 * //   lastModifiedAt: new Date("TIMESTAMP"),
 * //   additionalContext: "DOCUMENT_VALUE",
 * //   scope: { // Scope
 * //     pillars: [ // Pillars // required
 * //       "COST_OPTIMIZATION" || "SECURITY" || "RESILIENCE" || "PERFORMANCE" || "OPERATIONAL_EXCELLENCE",
 * //     ],
 * //     goalIds: [ // GoalIdList
 * //       "STRING_VALUE",
 * //     ],
 * //     items: [ // PillarItems
 * //       { // PillarItem
 * //         pillar: "COST_OPTIMIZATION" || "SECURITY" || "RESILIENCE" || "PERFORMANCE" || "OPERATIONAL_EXCELLENCE", // required
 * //         ids: [ // ItemIds // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //   },
 * //   startedAt: new Date("TIMESTAMP"),
 * //   endedAt: new Date("TIMESTAMP"),
 * //   progress: { // Progress
 * //     stepsCompleted: Number("int"), // required
 * //     totalSteps: Number("int"), // required
 * //     completionPercentage: Number("double"), // required
 * //   },
 * //   errorDetails: { // ErrorDetails
 * //     code: "STRING_VALUE", // required
 * //     message: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAgentRecommendationGenerationCommandInput - {@link GetAgentRecommendationGenerationCommandInput}
 * @returns {@link GetAgentRecommendationGenerationCommandOutput}
 * @see {@link GetAgentRecommendationGenerationCommandInput} for command's `input` shape.
 * @see {@link GetAgentRecommendationGenerationCommandOutput} for command's `response` shape.
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
export class GetAgentRecommendationGenerationCommand extends command<GetAgentRecommendationGenerationCommandInput, GetAgentRecommendationGenerationCommandOutput>(
  _ep1,
  _mw0,
  "GetAgentRecommendationGeneration",
  GetAgentRecommendationGeneration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAgentRecommendationGenerationRequest;
      output: GetAgentRecommendationGenerationResponse;
    };
    sdk: {
      input: GetAgentRecommendationGenerationCommandInput;
      output: GetAgentRecommendationGenerationCommandOutput;
    };
  };
}
