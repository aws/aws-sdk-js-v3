// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeRecommenderRequest, DescribeRecommenderResponse } from "../models/models_0";
import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { de_DescribeRecommenderCommand, se_DescribeRecommenderCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeRecommenderCommand}.
 */
export interface DescribeRecommenderCommandInput extends DescribeRecommenderRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRecommenderCommand}.
 */
export interface DescribeRecommenderCommandOutput extends DescribeRecommenderResponse, __MetadataBearer {}

/**
 * <p>Describes the given recommender, including its status.</p>
 *          <p>A recommender can be in one of the following states:</p>
 *          <ul>
 *             <li>
 *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
 *             </li>
 *             <li>
 *                <p>STOP PENDING > STOP IN_PROGRESS > INACTIVE > START PENDING > START IN_PROGRESS > ACTIVE</p>
 *             </li>
 *             <li>
 *                <p>DELETE PENDING > DELETE IN_PROGRESS</p>
 *             </li>
 *          </ul>
 *          <p>When the <code>status</code> is <code>CREATE FAILED</code>, the response includes the
 *       <code>failureReason</code> key, which describes why.</p>
 *          <p>The <code>modelMetrics</code> key is null when
 *       the recommender is being created or deleted.</p>
 *          <p>For more information on recommenders, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateRecommender.html">CreateRecommender</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, DescribeRecommenderCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, DescribeRecommenderCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const input = { // DescribeRecommenderRequest
 *   recommenderArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeRecommenderCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRecommenderResponse
 * //   recommender: { // Recommender
 * //     recommenderArn: "STRING_VALUE",
 * //     datasetGroupArn: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     recipeArn: "STRING_VALUE",
 * //     recommenderConfig: { // RecommenderConfig
 * //       itemExplorationConfig: { // HyperParameters
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       minRecommendationRequestsPerSecond: Number("int"),
 * //       trainingDataConfig: { // TrainingDataConfig
 * //         excludedDatasetColumns: { // ExcludedDatasetColumns
 * //           "<keys>": [ // ColumnNamesList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //       enableMetadataWithRecommendations: true || false,
 * //     },
 * //     creationDateTime: new Date("TIMESTAMP"),
 * //     lastUpdatedDateTime: new Date("TIMESTAMP"),
 * //     status: "STRING_VALUE",
 * //     failureReason: "STRING_VALUE",
 * //     latestRecommenderUpdate: { // RecommenderUpdateSummary
 * //       recommenderConfig: {
 * //         itemExplorationConfig: {
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         minRecommendationRequestsPerSecond: Number("int"),
 * //         trainingDataConfig: {
 * //           excludedDatasetColumns: {
 * //             "<keys>": [
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         },
 * //         enableMetadataWithRecommendations: true || false,
 * //       },
 * //       creationDateTime: new Date("TIMESTAMP"),
 * //       lastUpdatedDateTime: new Date("TIMESTAMP"),
 * //       status: "STRING_VALUE",
 * //       failureReason: "STRING_VALUE",
 * //     },
 * //     modelMetrics: { // Metrics
 * //       "<keys>": Number("double"),
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeRecommenderCommandInput - {@link DescribeRecommenderCommandInput}
 * @returns {@link DescribeRecommenderCommandOutput}
 * @see {@link DescribeRecommenderCommandInput} for command's `input` shape.
 * @see {@link DescribeRecommenderCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for PersonalizeClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Provide a valid value for the field or parameter.</p>
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
export class DescribeRecommenderCommand extends $Command
  .classBuilder<
    DescribeRecommenderCommandInput,
    DescribeRecommenderCommandOutput,
    PersonalizeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PersonalizeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonPersonalize", "DescribeRecommender", {})
  .n("PersonalizeClient", "DescribeRecommenderCommand")
  .f(void 0, void 0)
  .ser(se_DescribeRecommenderCommand)
  .de(de_DescribeRecommenderCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeRecommenderRequest;
      output: DescribeRecommenderResponse;
    };
    sdk: {
      input: DescribeRecommenderCommandInput;
      output: DescribeRecommenderCommandOutput;
    };
  };
}
