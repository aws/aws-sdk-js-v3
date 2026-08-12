// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutAgentRecommendationFeedbackRequest, PutAgentRecommendationFeedbackResponse } from "../models/models_0";
import { PutAgentRecommendationFeedback$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutAgentRecommendationFeedbackCommand}.
 */
export interface PutAgentRecommendationFeedbackCommandInput extends PutAgentRecommendationFeedbackRequest {}
/**
 * @public
 *
 * The output of {@link PutAgentRecommendationFeedbackCommand}.
 */
export interface PutAgentRecommendationFeedbackCommandOutput extends PutAgentRecommendationFeedbackResponse, __MetadataBearer {}

/**
 * <p>Submits user feedback on a recommendation to help improve future optimization suggestions and track implementation outcomes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, PutAgentRecommendationFeedbackCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, PutAgentRecommendationFeedbackCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // PutAgentRecommendationFeedbackRequest
 *   recommendationArn: "STRING_VALUE", // required
 *   type: "USEFUL" || "NOT_USEFUL", // required
 *   feedbackCategory: "OTHER" || "RECOMMENDATION_NOT_RELEVANT" || "RESOURCE_NOT_IMPORTANT" || "RESOURCE_TYPE_NOT_IMPORTANT" || "RECOMMENDATION_INCORRECT",
 *   comments: "STRING_VALUE",
 * };
 * const command = new PutAgentRecommendationFeedbackCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutAgentRecommendationFeedbackCommandInput - {@link PutAgentRecommendationFeedbackCommandInput}
 * @returns {@link PutAgentRecommendationFeedbackCommandOutput}
 * @see {@link PutAgentRecommendationFeedbackCommandInput} for command's `input` shape.
 * @see {@link PutAgentRecommendationFeedbackCommandOutput} for command's `response` shape.
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
export class PutAgentRecommendationFeedbackCommand extends command<PutAgentRecommendationFeedbackCommandInput, PutAgentRecommendationFeedbackCommandOutput>(
  _ep0,
  _mw0,
  "PutAgentRecommendationFeedback",
  PutAgentRecommendationFeedback$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutAgentRecommendationFeedbackRequest;
      output: {};
    };
    sdk: {
      input: PutAgentRecommendationFeedbackCommandInput;
      output: PutAgentRecommendationFeedbackCommandOutput;
    };
  };
}
