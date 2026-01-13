// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateSolutionRequest, CreateSolutionResponse } from "../models/models_0";
import type { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { CreateSolution$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateSolutionCommand}.
 */
export interface CreateSolutionCommandInput extends CreateSolutionRequest {}
/**
 * @public
 *
 * The output of {@link CreateSolutionCommand}.
 */
export interface CreateSolutionCommandOutput extends CreateSolutionResponse, __MetadataBearer {}

/**
 * <important>
 *             <p>By default, all new solutions use automatic training. With automatic training, you incur training costs while
 *            your solution is active. To avoid unnecessary costs, when you are finished you can
 *            <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_UpdateSolution.html">update the solution</a> to turn off automatic training.
 *            For information about training
 *   costs, see <a href="https://aws.amazon.com/personalize/pricing/">Amazon Personalize pricing</a>.</p>
 *          </important>
 *          <p>Creates the configuration for training a model (creating a solution version). This configuration
 *       includes the recipe to use for model training and optional training configuration, such as columns to use
 *       in training and feature transformation parameters. For more information about configuring a solution, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/customizing-solution-config.html">Creating and configuring a solution</a>.
 *     </p>
 *          <p>
 *       By default, new solutions use automatic training to create solution versions every 7 days. You can change the training frequency.
 *       Automatic solution version creation starts within one hour after the solution is ACTIVE. If you manually create a solution version within
 *       the hour, the solution skips the first automatic training. For more information,
 *         see <a href="https://docs.aws.amazon.com/personalize/latest/dg/solution-config-auto-training.html">Configuring automatic training</a>.</p>
 *          <p>
 *       To turn off automatic training, set <code>performAutoTraining</code> to false. If you turn off automatic training, you must manually create a solution version
 *       by calling the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolutionVersion.html">CreateSolutionVersion</a> operation.</p>
 *          <p>After training starts, you can
 *         get the solution version's Amazon Resource Name (ARN) with the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListSolutionVersions.html">ListSolutionVersions</a> API operation.
 *         To get its status, use the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolutionVersion.html">DescribeSolutionVersion</a>.
 *       </p>
 *          <p>After training completes you can evaluate model accuracy by calling
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_GetSolutionMetrics.html">GetSolutionMetrics</a>. When you are satisfied with the solution version, you
 *       deploy it using <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateCampaign.html">CreateCampaign</a>. The campaign provides recommendations
 *       to a client through the
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> API.</p>
 *          <note>
 *             <p>Amazon Personalize doesn't support configuring the <code>hpoObjective</code>
 *         for solution hyperparameter optimization at this time.</p>
 *          </note>
 *          <p>
 *             <b>Status</b>
 *          </p>
 *          <p>A solution can be in one of the following states:</p>
 *          <ul>
 *             <li>
 *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
 *             </li>
 *             <li>
 *                <p>DELETE PENDING > DELETE IN_PROGRESS</p>
 *             </li>
 *          </ul>
 *          <p>To get the status of the solution, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolution.html">DescribeSolution</a>. If you use
 *       manual training, the status must be ACTIVE before you call <code>CreateSolutionVersion</code>.</p>
 *          <p class="title">
 *             <b>Related APIs</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_UpdateSolution.html">UpdateSolution</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListSolutions.html">ListSolutions</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolutionVersion.html">CreateSolutionVersion</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolution.html">DescribeSolution</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteSolution.html">DeleteSolution</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListSolutionVersions.html">ListSolutionVersions</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolutionVersion.html">DescribeSolutionVersion</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, CreateSolutionCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, CreateSolutionCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * // import type { PersonalizeClientConfig } from "@aws-sdk/client-personalize";
 * const config = {}; // type is PersonalizeClientConfig
 * const client = new PersonalizeClient(config);
 * const input = { // CreateSolutionRequest
 *   name: "STRING_VALUE", // required
 *   performHPO: true || false,
 *   performAutoML: true || false,
 *   performAutoTraining: true || false,
 *   performIncrementalUpdate: true || false,
 *   recipeArn: "STRING_VALUE",
 *   datasetGroupArn: "STRING_VALUE", // required
 *   eventType: "STRING_VALUE",
 *   solutionConfig: { // SolutionConfig
 *     eventValueThreshold: "STRING_VALUE",
 *     hpoConfig: { // HPOConfig
 *       hpoObjective: { // HPOObjective
 *         type: "STRING_VALUE",
 *         metricName: "STRING_VALUE",
 *         metricRegex: "STRING_VALUE",
 *       },
 *       hpoResourceConfig: { // HPOResourceConfig
 *         maxNumberOfTrainingJobs: "STRING_VALUE",
 *         maxParallelTrainingJobs: "STRING_VALUE",
 *       },
 *       algorithmHyperParameterRanges: { // HyperParameterRanges
 *         integerHyperParameterRanges: [ // IntegerHyperParameterRanges
 *           { // IntegerHyperParameterRange
 *             name: "STRING_VALUE",
 *             minValue: Number("int"),
 *             maxValue: Number("int"),
 *           },
 *         ],
 *         continuousHyperParameterRanges: [ // ContinuousHyperParameterRanges
 *           { // ContinuousHyperParameterRange
 *             name: "STRING_VALUE",
 *             minValue: Number("double"),
 *             maxValue: Number("double"),
 *           },
 *         ],
 *         categoricalHyperParameterRanges: [ // CategoricalHyperParameterRanges
 *           { // CategoricalHyperParameterRange
 *             name: "STRING_VALUE",
 *             values: [ // CategoricalValues
 *               "STRING_VALUE",
 *             ],
 *           },
 *         ],
 *       },
 *     },
 *     algorithmHyperParameters: { // HyperParameters
 *       "<keys>": "STRING_VALUE",
 *     },
 *     featureTransformationParameters: { // FeatureTransformationParameters
 *       "<keys>": "STRING_VALUE",
 *     },
 *     autoMLConfig: { // AutoMLConfig
 *       metricName: "STRING_VALUE",
 *       recipeList: [ // ArnList
 *         "STRING_VALUE",
 *       ],
 *     },
 *     eventsConfig: { // EventsConfig
 *       eventParametersList: [ // EventParametersList
 *         { // EventParameters
 *           eventType: "STRING_VALUE",
 *           eventValueThreshold: Number("double"),
 *           weight: Number("double"),
 *         },
 *       ],
 *     },
 *     optimizationObjective: { // OptimizationObjective
 *       itemAttribute: "STRING_VALUE",
 *       objectiveSensitivity: "LOW" || "MEDIUM" || "HIGH" || "OFF",
 *     },
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
 *     autoTrainingConfig: { // AutoTrainingConfig
 *       schedulingExpression: "STRING_VALUE",
 *     },
 *   },
 *   tags: [ // Tags
 *     { // Tag
 *       tagKey: "STRING_VALUE", // required
 *       tagValue: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateSolutionCommand(input);
 * const response = await client.send(command);
 * // { // CreateSolutionResponse
 * //   solutionArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateSolutionCommandInput - {@link CreateSolutionCommandInput}
 * @returns {@link CreateSolutionCommandOutput}
 * @see {@link CreateSolutionCommandInput} for command's `input` shape.
 * @see {@link CreateSolutionCommandOutput} for command's `response` shape.
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
export class CreateSolutionCommand extends $Command
  .classBuilder<
    CreateSolutionCommandInput,
    CreateSolutionCommandOutput,
    PersonalizeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PersonalizeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonPersonalize", "CreateSolution", {})
  .n("PersonalizeClient", "CreateSolutionCommand")
  .sc(CreateSolution$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSolutionRequest;
      output: CreateSolutionResponse;
    };
    sdk: {
      input: CreateSolutionCommandInput;
      output: CreateSolutionCommandOutput;
    };
  };
}
