// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeSolutionRequest, DescribeSolutionResponse } from "../models/models_0";
import type { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { DescribeSolution } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeSolutionCommand}.
 */
export interface DescribeSolutionCommandInput extends DescribeSolutionRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSolutionCommand}.
 */
export interface DescribeSolutionCommandOutput extends DescribeSolutionResponse, __MetadataBearer {}

/**
 * <p>Describes a solution.
 *       For more information on solutions, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, DescribeSolutionCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, DescribeSolutionCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * // import type { PersonalizeClientConfig } from "@aws-sdk/client-personalize";
 * const config = {}; // type is PersonalizeClientConfig
 * const client = new PersonalizeClient(config);
 * const input = { // DescribeSolutionRequest
 *   solutionArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeSolutionCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSolutionResponse
 * //   solution: { // Solution
 * //     name: "STRING_VALUE",
 * //     solutionArn: "STRING_VALUE",
 * //     performHPO: true || false,
 * //     performAutoML: true || false,
 * //     performAutoTraining: true || false,
 * //     performIncrementalUpdate: true || false,
 * //     recipeArn: "STRING_VALUE",
 * //     datasetGroupArn: "STRING_VALUE",
 * //     eventType: "STRING_VALUE",
 * //     solutionConfig: { // SolutionConfig
 * //       eventValueThreshold: "STRING_VALUE",
 * //       hpoConfig: { // HPOConfig
 * //         hpoObjective: { // HPOObjective
 * //           type: "STRING_VALUE",
 * //           metricName: "STRING_VALUE",
 * //           metricRegex: "STRING_VALUE",
 * //         },
 * //         hpoResourceConfig: { // HPOResourceConfig
 * //           maxNumberOfTrainingJobs: "STRING_VALUE",
 * //           maxParallelTrainingJobs: "STRING_VALUE",
 * //         },
 * //         algorithmHyperParameterRanges: { // HyperParameterRanges
 * //           integerHyperParameterRanges: [ // IntegerHyperParameterRanges
 * //             { // IntegerHyperParameterRange
 * //               name: "STRING_VALUE",
 * //               minValue: Number("int"),
 * //               maxValue: Number("int"),
 * //             },
 * //           ],
 * //           continuousHyperParameterRanges: [ // ContinuousHyperParameterRanges
 * //             { // ContinuousHyperParameterRange
 * //               name: "STRING_VALUE",
 * //               minValue: Number("double"),
 * //               maxValue: Number("double"),
 * //             },
 * //           ],
 * //           categoricalHyperParameterRanges: [ // CategoricalHyperParameterRanges
 * //             { // CategoricalHyperParameterRange
 * //               name: "STRING_VALUE",
 * //               values: [ // CategoricalValues
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //           ],
 * //         },
 * //       },
 * //       algorithmHyperParameters: { // HyperParameters
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       featureTransformationParameters: { // FeatureTransformationParameters
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       autoMLConfig: { // AutoMLConfig
 * //         metricName: "STRING_VALUE",
 * //         recipeList: [ // ArnList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       eventsConfig: { // EventsConfig
 * //         eventParametersList: [ // EventParametersList
 * //           { // EventParameters
 * //             eventType: "STRING_VALUE",
 * //             eventValueThreshold: Number("double"),
 * //             weight: Number("double"),
 * //           },
 * //         ],
 * //       },
 * //       optimizationObjective: { // OptimizationObjective
 * //         itemAttribute: "STRING_VALUE",
 * //         objectiveSensitivity: "LOW" || "MEDIUM" || "HIGH" || "OFF",
 * //       },
 * //       trainingDataConfig: { // TrainingDataConfig
 * //         excludedDatasetColumns: { // ExcludedDatasetColumns
 * //           "<keys>": [ // ColumnNamesList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         includedDatasetColumns: { // IncludedDatasetColumns
 * //           "<keys>": [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //       autoTrainingConfig: { // AutoTrainingConfig
 * //         schedulingExpression: "STRING_VALUE",
 * //       },
 * //     },
 * //     autoMLResult: { // AutoMLResult
 * //       bestRecipeArn: "STRING_VALUE",
 * //     },
 * //     status: "STRING_VALUE",
 * //     creationDateTime: new Date("TIMESTAMP"),
 * //     lastUpdatedDateTime: new Date("TIMESTAMP"),
 * //     latestSolutionVersion: { // SolutionVersionSummary
 * //       solutionVersionArn: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //       trainingMode: "FULL" || "UPDATE" || "AUTOTRAIN",
 * //       trainingType: "AUTOMATIC" || "MANUAL",
 * //       creationDateTime: new Date("TIMESTAMP"),
 * //       lastUpdatedDateTime: new Date("TIMESTAMP"),
 * //       failureReason: "STRING_VALUE",
 * //     },
 * //     latestSolutionUpdate: { // SolutionUpdateSummary
 * //       solutionUpdateConfig: { // SolutionUpdateConfig
 * //         autoTrainingConfig: {
 * //           schedulingExpression: "STRING_VALUE",
 * //         },
 * //         eventsConfig: {
 * //           eventParametersList: [
 * //             {
 * //               eventType: "STRING_VALUE",
 * //               eventValueThreshold: Number("double"),
 * //               weight: Number("double"),
 * //             },
 * //           ],
 * //         },
 * //       },
 * //       status: "STRING_VALUE",
 * //       performAutoTraining: true || false,
 * //       performIncrementalUpdate: true || false,
 * //       creationDateTime: new Date("TIMESTAMP"),
 * //       lastUpdatedDateTime: new Date("TIMESTAMP"),
 * //       failureReason: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeSolutionCommandInput - {@link DescribeSolutionCommandInput}
 * @returns {@link DescribeSolutionCommandOutput}
 * @see {@link DescribeSolutionCommandInput} for command's `input` shape.
 * @see {@link DescribeSolutionCommandOutput} for command's `response` shape.
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
export class DescribeSolutionCommand extends $Command
  .classBuilder<
    DescribeSolutionCommandInput,
    DescribeSolutionCommandOutput,
    PersonalizeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PersonalizeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonPersonalize", "DescribeSolution", {})
  .n("PersonalizeClient", "DescribeSolutionCommand")
  .sc(DescribeSolution)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeSolutionRequest;
      output: DescribeSolutionResponse;
    };
    sdk: {
      input: DescribeSolutionCommandInput;
      output: DescribeSolutionCommandOutput;
    };
  };
}
