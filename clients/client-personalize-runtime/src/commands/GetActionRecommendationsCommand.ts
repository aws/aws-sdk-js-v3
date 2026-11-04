// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetActionRecommendationsRequest, GetActionRecommendationsResponse } from "../models/models_0";
import { GetActionRecommendations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns a list of recommended actions in sorted in descending order by prediction score. Use the `GetActionRecommendations` API if you have a custom campaign that deploys a solution version trained with a PERSONALIZED_ACTIONS recipe.
 *
 * For more information about PERSONALIZED_ACTIONS recipes, see [PERSONALIZED_ACTIONS recipes](https://docs.aws.amazon.com/personalize/latest/dg/nexts-best-action-recipes.html). For more information about getting action recommendations, see [Getting action recommendations](https://docs.aws.amazon.com/personalize/latest/dg/get-action-recommendations.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeRuntimeClient, GetActionRecommendationsCommand } from "@aws-sdk/client-personalize-runtime"; // ES Modules import
 * // const { PersonalizeRuntimeClient, GetActionRecommendationsCommand } = require("@aws-sdk/client-personalize-runtime"); // CommonJS import
 * // import type { PersonalizeRuntimeClientConfig } from "@aws-sdk/client-personalize-runtime";
 * const config = {}; // type is PersonalizeRuntimeClientConfig
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
 *
 * Provide a valid value for the field or parameter.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link PersonalizeRuntimeServiceException}
 *
 * Base exception class for all service exceptions from PersonalizeRuntime service.
 *
 * @public
 */
export class GetActionRecommendationsCommand extends command<GetActionRecommendationsCommandInput, GetActionRecommendationsCommandOutput>(
  _ep0,
  _mw0,
  "GetActionRecommendations",
  GetActionRecommendations$
) {
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
