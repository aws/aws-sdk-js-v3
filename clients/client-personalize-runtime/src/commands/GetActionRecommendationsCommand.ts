// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetActionRecommendationsRequest,
  GetActionRecommendationsRequestFilterSensitiveLog,
  GetActionRecommendationsResponse,
} from "../models/models_0";
import {
  PersonalizeRuntimeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PersonalizeRuntimeClient";
import { de_GetActionRecommendationsCommand, se_GetActionRecommendationsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetActionRecommendationsCommand}.
 */
export interface GetActionRecommendationsCommandInput extends GetActionRecommendationsRequest {}
/**
 * @public
 *
 * The output of {@link GetActionRecommendationsCommand}.
 */
export interface GetActionRecommendationsCommandOutput extends GetActionRecommendationsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of recommended actions in sorted in descending order by prediction score.
 *       Use the <code>GetActionRecommendations</code> API if you have a custom
 *        campaign that deploys a solution version trained with a PERSONALIZED_ACTIONS recipe.
 *     </p>
 *          <p>For more information about PERSONALIZED_ACTIONS recipes, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/nexts-best-action-recipes.html">PERSONALIZED_ACTIONS recipes</a>.
 *       For more information about getting action recommendations, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/get-action-recommendations.html">Getting action recommendations</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeRuntimeClient, GetActionRecommendationsCommand } from "@aws-sdk/client-personalize-runtime"; // ES Modules import
 * // const { PersonalizeRuntimeClient, GetActionRecommendationsCommand } = require("@aws-sdk/client-personalize-runtime"); // CommonJS import
 * const client = new PersonalizeRuntimeClient(config);
 * const input = { // GetActionRecommendationsRequest
 *   campaignArn: "STRING_VALUE",
 *   userId: "STRING_VALUE",
 *   numResults: Number("int"),
 *   filterArn: "STRING_VALUE",
 *   filterValues: { // FilterValues
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new GetActionRecommendationsCommand(input);
 * const response = await client.send(command);
 * // { // GetActionRecommendationsResponse
 * //   actionList: [ // ActionList
 * //     { // PredictedAction
 * //       actionId: "STRING_VALUE",
 * //       score: Number("double"),
 * //     },
 * //   ],
 * //   recommendationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetActionRecommendationsCommandInput - {@link GetActionRecommendationsCommandInput}
 * @returns {@link GetActionRecommendationsCommandOutput}
 * @see {@link GetActionRecommendationsCommandInput} for command's `input` shape.
 * @see {@link GetActionRecommendationsCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeRuntimeClientResolvedConfig | config} for PersonalizeRuntimeClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Provide a valid value for the field or parameter.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link PersonalizeRuntimeServiceException}
 * <p>Base exception class for all service exceptions from PersonalizeRuntime service.</p>
 *
 *
 * @public
 */
export class GetActionRecommendationsCommand extends $Command
  .classBuilder<
    GetActionRecommendationsCommandInput,
    GetActionRecommendationsCommandOutput,
    PersonalizeRuntimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PersonalizeRuntimeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonPersonalizeRuntime", "GetActionRecommendations", {})
  .n("PersonalizeRuntimeClient", "GetActionRecommendationsCommand")
  .f(GetActionRecommendationsRequestFilterSensitiveLog, void 0)
  .ser(se_GetActionRecommendationsCommand)
  .de(de_GetActionRecommendationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetActionRecommendationsRequest;
      output: GetActionRecommendationsResponse;
    };
    sdk: {
      input: GetActionRecommendationsCommandInput;
      output: GetActionRecommendationsCommandOutput;
    };
  };
}
