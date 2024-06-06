// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetRecommendationsRequest,
  GetRecommendationsRequestFilterSensitiveLog,
  GetRecommendationsResponse,
  GetRecommendationsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  PersonalizeRuntimeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PersonalizeRuntimeClient";
import { de_GetRecommendationsCommand, se_GetRecommendationsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRecommendationsCommand}.
 */
export interface GetRecommendationsCommandInput extends GetRecommendationsRequest {}
/**
 * @public
 *
 * The output of {@link GetRecommendationsCommand}.
 */
export interface GetRecommendationsCommandOutput extends GetRecommendationsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of recommended items. For campaigns, the campaign's Amazon Resource Name (ARN) is required and the required user and item input depends on the recipe type used to
 *       create the solution backing the campaign as follows:</p>
 *          <ul>
 *             <li>
 *                <p>USER_PERSONALIZATION - <code>userId</code> required, <code>itemId</code> not used</p>
 *             </li>
 *             <li>
 *                <p>RELATED_ITEMS - <code>itemId</code> required, <code>userId</code> not used</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>Campaigns that are backed by a solution created using a recipe of type
 *         PERSONALIZED_RANKING use the  API.</p>
 *          </note>
 *          <p>
 *       For recommenders, the recommender's ARN is required and the required item and user input depends on the use case (domain-based recipe) backing the recommender.
 *       For information on use case requirements see <a href="https://docs.aws.amazon.com/personalize/latest/dg/domain-use-cases.html">Choosing recommender use cases</a>.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeRuntimeClient, GetRecommendationsCommand } from "@aws-sdk/client-personalize-runtime"; // ES Modules import
 * // const { PersonalizeRuntimeClient, GetRecommendationsCommand } = require("@aws-sdk/client-personalize-runtime"); // CommonJS import
 * const client = new PersonalizeRuntimeClient(config);
 * const input = { // GetRecommendationsRequest
 *   campaignArn: "STRING_VALUE",
 *   itemId: "STRING_VALUE",
 *   userId: "STRING_VALUE",
 *   numResults: Number("int"),
 *   context: { // Context
 *     "<keys>": "STRING_VALUE",
 *   },
 *   filterArn: "STRING_VALUE",
 *   filterValues: { // FilterValues
 *     "<keys>": "STRING_VALUE",
 *   },
 *   recommenderArn: "STRING_VALUE",
 *   promotions: [ // PromotionList
 *     { // Promotion
 *       name: "STRING_VALUE",
 *       percentPromotedItems: Number("int"),
 *       filterArn: "STRING_VALUE",
 *       filterValues: {
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *   ],
 *   metadataColumns: { // MetadataColumns
 *     "<keys>": [ // ColumnNamesList
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new GetRecommendationsCommand(input);
 * const response = await client.send(command);
 * // { // GetRecommendationsResponse
 * //   itemList: [ // ItemList
 * //     { // PredictedItem
 * //       itemId: "STRING_VALUE",
 * //       score: Number("double"),
 * //       promotionName: "STRING_VALUE",
 * //       metadata: { // Metadata
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       reason: [ // ReasonList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   recommendationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetRecommendationsCommandInput - {@link GetRecommendationsCommandInput}
 * @returns {@link GetRecommendationsCommandOutput}
 * @see {@link GetRecommendationsCommandInput} for command's `input` shape.
 * @see {@link GetRecommendationsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetRecommendationsCommand extends $Command
  .classBuilder<
    GetRecommendationsCommandInput,
    GetRecommendationsCommandOutput,
    PersonalizeRuntimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: PersonalizeRuntimeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonPersonalizeRuntime", "GetRecommendations", {})
  .n("PersonalizeRuntimeClient", "GetRecommendationsCommand")
  .f(GetRecommendationsRequestFilterSensitiveLog, GetRecommendationsResponseFilterSensitiveLog)
  .ser(se_GetRecommendationsCommand)
  .de(de_GetRecommendationsCommand)
  .build() {}
