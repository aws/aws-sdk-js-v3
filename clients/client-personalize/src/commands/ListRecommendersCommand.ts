// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListRecommendersRequest, ListRecommendersResponse } from "../models/models_0";
import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { ListRecommenders } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRecommendersCommand}.
 */
export interface ListRecommendersCommandInput extends ListRecommendersRequest {}
/**
 * @public
 *
 * The output of {@link ListRecommendersCommand}.
 */
export interface ListRecommendersCommandOutput extends ListRecommendersResponse, __MetadataBearer {}

/**
 * <p>Returns a list of recommenders in a given Domain dataset group.
 *       When a Domain dataset group is not specified, all the recommenders associated with the account are listed.
 *       The response provides the properties for each recommender, including the Amazon Resource Name (ARN).
 *       For more information on recommenders, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateRecommender.html">CreateRecommender</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, ListRecommendersCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, ListRecommendersCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * // import type { PersonalizeClientConfig } from "@aws-sdk/client-personalize";
 * const config = {}; // type is PersonalizeClientConfig
 * const client = new PersonalizeClient(config);
 * const input = { // ListRecommendersRequest
 *   datasetGroupArn: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListRecommendersCommand(input);
 * const response = await client.send(command);
 * // { // ListRecommendersResponse
 * //   recommenders: [ // Recommenders
 * //     { // RecommenderSummary
 * //       name: "STRING_VALUE",
 * //       recommenderArn: "STRING_VALUE",
 * //       datasetGroupArn: "STRING_VALUE",
 * //       recipeArn: "STRING_VALUE",
 * //       recommenderConfig: { // RecommenderConfig
 * //         itemExplorationConfig: { // HyperParameters
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         minRecommendationRequestsPerSecond: Number("int"),
 * //         trainingDataConfig: { // TrainingDataConfig
 * //           excludedDatasetColumns: { // ExcludedDatasetColumns
 * //             "<keys>": [ // ColumnNamesList
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         },
 * //         enableMetadataWithRecommendations: true || false,
 * //       },
 * //       status: "STRING_VALUE",
 * //       creationDateTime: new Date("TIMESTAMP"),
 * //       lastUpdatedDateTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRecommendersCommandInput - {@link ListRecommendersCommandInput}
 * @returns {@link ListRecommendersCommandOutput}
 * @see {@link ListRecommendersCommandInput} for command's `input` shape.
 * @see {@link ListRecommendersCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for PersonalizeClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Provide a valid value for the field or parameter.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The token is not valid.</p>
 *
 * @throws {@link PersonalizeServiceException}
 * <p>Base exception class for all service exceptions from Personalize service.</p>
 *
 *
 * @public
 */
export class ListRecommendersCommand extends $Command
  .classBuilder<
    ListRecommendersCommandInput,
    ListRecommendersCommandOutput,
    PersonalizeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PersonalizeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonPersonalize", "ListRecommenders", {})
  .n("PersonalizeClient", "ListRecommendersCommand")
  .sc(ListRecommenders)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRecommendersRequest;
      output: ListRecommendersResponse;
    };
    sdk: {
      input: ListRecommendersCommandInput;
      output: ListRecommendersCommandOutput;
    };
  };
}
