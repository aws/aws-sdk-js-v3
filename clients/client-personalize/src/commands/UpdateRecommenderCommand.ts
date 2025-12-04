// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateRecommenderRequest, UpdateRecommenderResponse } from "../models/models_0";
import type { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { UpdateRecommender } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateRecommenderCommand}.
 */
export interface UpdateRecommenderCommandInput extends UpdateRecommenderRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRecommenderCommand}.
 */
export interface UpdateRecommenderCommandOutput extends UpdateRecommenderResponse, __MetadataBearer {}

/**
 * <p>Updates the recommender to modify the recommender configuration.
 *       If you update the recommender to modify the columns used in training, Amazon Personalize automatically starts a full retraining of
 *       the models backing your recommender. While the update completes, you can still get recommendations from the recommender. The recommender
 *       uses the previous configuration until the update completes.
 *       To track the status of this update,
 *       use the <code>latestRecommenderUpdate</code> returned in the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeRecommender.html">DescribeRecommender</a>
 *       operation.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, UpdateRecommenderCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, UpdateRecommenderCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * // import type { PersonalizeClientConfig } from "@aws-sdk/client-personalize";
 * const config = {}; // type is PersonalizeClientConfig
 * const client = new PersonalizeClient(config);
 * const input = { // UpdateRecommenderRequest
 *   recommenderArn: "STRING_VALUE", // required
 *   recommenderConfig: { // RecommenderConfig
 *     itemExplorationConfig: { // HyperParameters
 *       "<keys>": "STRING_VALUE",
 *     },
 *     minRecommendationRequestsPerSecond: Number("int"),
 *     trainingDataConfig: { // TrainingDataConfig
 *       excludedDatasetColumns: { // ExcludedDatasetColumns
 *         "<keys>": [ // ColumnNamesList
 *           "STRING_VALUE",
 *         ],
 *       },
 *       includedDatasetColumns: { // IncludedDatasetColumns
 *         "<keys>": [
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *     enableMetadataWithRecommendations: true || false,
 *   },
 * };
 * const command = new UpdateRecommenderCommand(input);
 * const response = await client.send(command);
 * // { // UpdateRecommenderResponse
 * //   recommenderArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateRecommenderCommandInput - {@link UpdateRecommenderCommandInput}
 * @returns {@link UpdateRecommenderCommandOutput}
 * @see {@link UpdateRecommenderCommandInput} for command's `input` shape.
 * @see {@link UpdateRecommenderCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for PersonalizeClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Provide a valid value for the field or parameter.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource is in use.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Could not find the specified resource.</p>
 *
 * @throws {@link PersonalizeServiceException}
 * <p>Base exception class for all service exceptions from Personalize service.</p>
 *
 *
 * @public
 */
export class UpdateRecommenderCommand extends $Command
  .classBuilder<
    UpdateRecommenderCommandInput,
    UpdateRecommenderCommandOutput,
    PersonalizeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PersonalizeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonPersonalize", "UpdateRecommender", {})
  .n("PersonalizeClient", "UpdateRecommenderCommand")
  .sc(UpdateRecommender)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRecommenderRequest;
      output: UpdateRecommenderResponse;
    };
    sdk: {
      input: UpdateRecommenderCommandInput;
      output: UpdateRecommenderCommandOutput;
    };
  };
}
