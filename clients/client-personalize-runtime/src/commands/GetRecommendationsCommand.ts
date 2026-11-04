// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetRecommendationsRequest, GetRecommendationsResponse } from "../models/models_0";
import { GetRecommendations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns a list of recommended items. For campaigns, the campaign's Amazon Resource Name (ARN) is required and the required user and item input depends on the recipe type used to create the solution backing the campaign as follows:
 *
 * - USER_PERSONALIZATION - `userId` required, `itemId` not used
 * - RELATED_ITEMS - `itemId` required, `userId` not used
 *
 * > **Note:** Campaigns that are backed by a solution created using a recipe of type PERSONALIZED_RANKING use the API.
 *
 * For recommenders, the recommender's ARN is required and the required item and user input depends on the use case (domain-based recipe) backing the recommender. For information on use case requirements see [Choosing recommender use cases](https://docs.aws.amazon.com/personalize/latest/dg/domain-use-cases.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeRuntimeClient, GetRecommendationsCommand } from "@aws-sdk/client-personalize-runtime"; // ES Modules import
 * // const { PersonalizeRuntimeClient, GetRecommendationsCommand } = require("@aws-sdk/client-personalize-runtime"); // CommonJS import
 * // import type { PersonalizeRuntimeClientConfig } from "@aws-sdk/client-personalize-runtime";
 * const config = {}; // type is PersonalizeRuntimeClientConfig
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
export class GetRecommendationsCommand extends command<GetRecommendationsCommandInput, GetRecommendationsCommandOutput>(
  _ep0,
  _mw0,
  "GetRecommendations",
  GetRecommendations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRecommendationsRequest;
      output: GetRecommendationsResponse;
    };
    sdk: {
      input: GetRecommendationsCommandInput;
      output: GetRecommendationsCommandOutput;
    };
  };
}
