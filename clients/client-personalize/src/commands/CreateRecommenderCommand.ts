// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateRecommenderRequest, CreateRecommenderResponse } from "../models/models_0";
import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { CreateRecommender } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateRecommenderCommand}.
 */
export interface CreateRecommenderCommandInput extends CreateRecommenderRequest {}
/**
 * @public
 *
 * The output of {@link CreateRecommenderCommand}.
 */
export interface CreateRecommenderCommandOutput extends CreateRecommenderResponse, __MetadataBearer {}

/**
 * <p>Creates a recommender with the recipe (a Domain dataset group use case) you specify.
 *       You create recommenders for a Domain dataset group and specify the recommender's Amazon Resource Name (ARN) when you make a
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a>
 *       request.
 *      </p>
 *          <p>
 *             <b>Minimum recommendation requests per second</b>
 *          </p>
 *          <important>
 *             <p>A high <code>minRecommendationRequestsPerSecond</code> will increase your bill. We recommend starting with 1 for <code>minRecommendationRequestsPerSecond</code> (the default). Track
 *         your usage using Amazon CloudWatch metrics, and increase the <code>minRecommendationRequestsPerSecond</code>
 *         as necessary.</p>
 *          </important>
 *          <p>When you create a recommender, you can configure the recommender's minimum recommendation requests per second. The minimum recommendation requests per second
 *       (<code>minRecommendationRequestsPerSecond</code>) specifies the baseline recommendation request throughput provisioned by
 *       Amazon Personalize. The default minRecommendationRequestsPerSecond is <code>1</code>. A recommendation request is a single <code>GetRecommendations</code> operation.
 *       Request throughput is measured in requests per second and Amazon Personalize uses your requests per second to derive
 *       your requests per hour and the price of your recommender usage.
 *     </p>
 *          <p>
 *       If your requests per second increases beyond
 *       <code>minRecommendationRequestsPerSecond</code>, Amazon Personalize auto-scales the provisioned capacity up and down,
 *       but never below <code>minRecommendationRequestsPerSecond</code>.
 *       There's a short time delay while the capacity is increased that might cause loss of
 *       requests.</p>
 *          <p>
 *       Your bill is the greater of either the minimum requests per hour (based on minRecommendationRequestsPerSecond)
 *       or the actual number of requests. The actual request throughput used is calculated as the average requests/second within a one-hour window.
 *
 *       We recommend starting with the default <code>minRecommendationRequestsPerSecond</code>, track
 *       your usage using Amazon CloudWatch metrics, and then increase the <code>minRecommendationRequestsPerSecond</code>
 *       as necessary.
 *     </p>
 *          <p>
 *             <b>Status</b>
 *          </p>
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
 *          <p>To get the recommender status, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeRecommender.html">DescribeRecommender</a>.</p>
 *          <note>
 *             <p>Wait until the <code>status</code> of the recommender
 *         is <code>ACTIVE</code> before asking the recommender for recommendations.</p>
 *          </note>
 *          <p class="title">
 *             <b>Related APIs</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListRecommenders.html">ListRecommenders</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeRecommender.html">DescribeRecommender</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_UpdateRecommender.html">UpdateRecommender</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteRecommender.html">DeleteRecommender</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, CreateRecommenderCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, CreateRecommenderCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * // import type { PersonalizeClientConfig } from "@aws-sdk/client-personalize";
 * const config = {}; // type is PersonalizeClientConfig
 * const client = new PersonalizeClient(config);
 * const input = { // CreateRecommenderRequest
 *   name: "STRING_VALUE", // required
 *   datasetGroupArn: "STRING_VALUE", // required
 *   recipeArn: "STRING_VALUE", // required
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
 *   tags: [ // Tags
 *     { // Tag
 *       tagKey: "STRING_VALUE", // required
 *       tagValue: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateRecommenderCommand(input);
 * const response = await client.send(command);
 * // { // CreateRecommenderResponse
 * //   recommenderArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateRecommenderCommandInput - {@link CreateRecommenderCommandInput}
 * @returns {@link CreateRecommenderCommandOutput}
 * @see {@link CreateRecommenderCommandInput} for command's `input` shape.
 * @see {@link CreateRecommenderCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for PersonalizeClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Provide a valid value for the field or parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The limit on the number of requests per second has been exceeded.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The specified resource already exists.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource is in use.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Could not find the specified resource.</p>
 *
 * @throws {@link TooManyTagsException} (client fault)
 *  <p>You have exceeded the maximum number of tags you can apply to this resource. </p>
 *
 * @throws {@link PersonalizeServiceException}
 * <p>Base exception class for all service exceptions from Personalize service.</p>
 *
 *
 * @public
 */
export class CreateRecommenderCommand extends $Command
  .classBuilder<
    CreateRecommenderCommandInput,
    CreateRecommenderCommandOutput,
    PersonalizeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PersonalizeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonPersonalize", "CreateRecommender", {})
  .n("PersonalizeClient", "CreateRecommenderCommand")
  .sc(CreateRecommender)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateRecommenderRequest;
      output: CreateRecommenderResponse;
    };
    sdk: {
      input: CreateRecommenderCommandInput;
      output: CreateRecommenderCommandOutput;
    };
  };
}
