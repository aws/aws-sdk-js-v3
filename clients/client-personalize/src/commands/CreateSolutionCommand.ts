// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateSolutionRequest, CreateSolutionResponse } from "../models/models_0";
import { CreateSolution$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * > **Important:** By default, all new solutions use automatic training. With automatic training, you incur training costs while your solution is active. To avoid unnecessary costs, when you are finished you can [update the solution](https://docs.aws.amazon.com/personalize/latest/dg/API_UpdateSolution.html) to turn off automatic training. For information about training costs, see [Amazon Personalize pricing](https://aws.amazon.com/personalize/pricing/).
 *
 * Creates the configuration for training a model (creating a solution version). This configuration includes the recipe to use for model training and optional training configuration, such as columns to use in training and feature transformation parameters. For more information about configuring a solution, see [Creating and configuring a solution](https://docs.aws.amazon.com/personalize/latest/dg/customizing-solution-config.html).
 *
 * By default, new solutions use automatic training to create solution versions every 7 days. You can change the training frequency. Automatic solution version creation starts within one hour after the solution is ACTIVE. If you manually create a solution version within the hour, the solution skips the first automatic training. For more information, see [Configuring automatic training](https://docs.aws.amazon.com/personalize/latest/dg/solution-config-auto-training.html).
 *
 * To turn off automatic training, set `performAutoTraining` to false. If you turn off automatic training, you must manually create a solution version by calling the [CreateSolutionVersion](https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolutionVersion.html) operation.
 *
 * After training starts, you can get the solution version's Amazon Resource Name (ARN) with the [ListSolutionVersions](https://docs.aws.amazon.com/personalize/latest/dg/API_ListSolutionVersions.html) API operation. To get its status, use the [DescribeSolutionVersion](https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolutionVersion.html).
 *
 * After training completes you can evaluate model accuracy by calling [GetSolutionMetrics](https://docs.aws.amazon.com/personalize/latest/dg/API_GetSolutionMetrics.html). When you are satisfied with the solution version, you deploy it using [CreateCampaign](https://docs.aws.amazon.com/personalize/latest/dg/API_CreateCampaign.html). The campaign provides recommendations to a client through the [GetRecommendations](https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html) API.
 *
 * > **Note:** Amazon Personalize doesn't support configuring the `hpoObjective` for solution hyperparameter optimization at this time.
 *
 * **Status**
 *
 * A solution can be in one of the following states:
 *
 * - CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED
 * - DELETE PENDING > DELETE IN_PROGRESS
 *
 * To get the status of the solution, call [DescribeSolution](https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolution.html). If you use manual training, the status must be ACTIVE before you call `CreateSolutionVersion`.
 *
 * **Related APIs**
 *
 * - [UpdateSolution](https://docs.aws.amazon.com/personalize/latest/dg/API_UpdateSolution.html)
 * - [ListSolutions](https://docs.aws.amazon.com/personalize/latest/dg/API_ListSolutions.html)
 * - [CreateSolutionVersion](https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolutionVersion.html)
 * - [DescribeSolution](https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolution.html)
 * - [DeleteSolution](https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteSolution.html)
 *
 * - [ListSolutionVersions](https://docs.aws.amazon.com/personalize/latest/dg/API_ListSolutionVersions.html)
 * - [DescribeSolutionVersion](https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolutionVersion.html)
 *
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
 *
 * Provide a valid value for the field or parameter.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The limit on the number of requests per second has been exceeded.
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *
 * The specified resource already exists.
 *
 * @throws {@link ResourceInUseException} (client fault)
 *
 * The specified resource is in use.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Could not find the specified resource.
 *
 * @throws {@link TooManyTagsException} (client fault)
 *
 * You have exceeded the maximum number of tags you can apply to this resource.
 *
 * @throws {@link PersonalizeServiceException}
 *
 * Base exception class for all service exceptions from Personalize service.
 *
 * @public
 */
export class CreateSolutionCommand extends command<CreateSolutionCommandInput, CreateSolutionCommandOutput>(
  _ep0,
  _mw0,
  "CreateSolution",
  CreateSolution$
) {
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
