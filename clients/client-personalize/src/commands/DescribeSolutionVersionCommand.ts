// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeSolutionVersionRequest, DescribeSolutionVersionResponse } from "../models/models_0";
import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { de_DescribeSolutionVersionCommand, se_DescribeSolutionVersionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeSolutionVersionCommand}.
 */
export interface DescribeSolutionVersionCommandInput extends DescribeSolutionVersionRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSolutionVersionCommand}.
 */
export interface DescribeSolutionVersionCommandOutput extends DescribeSolutionVersionResponse, __MetadataBearer {}

/**
 * <p>Describes a specific version of a solution. For more information on solutions, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, DescribeSolutionVersionCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, DescribeSolutionVersionCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const input = { // DescribeSolutionVersionRequest
 *   solutionVersionArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeSolutionVersionCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSolutionVersionResponse
 * //   solutionVersion: { // SolutionVersion
 * //     name: "STRING_VALUE",
 * //     solutionVersionArn: "STRING_VALUE",
 * //     solutionArn: "STRING_VALUE",
 * //     performHPO: true || false,
 * //     performAutoML: true || false,
 * //     recipeArn: "STRING_VALUE",
 * //     eventType: "STRING_VALUE",
 * //     datasetGroupArn: "STRING_VALUE",
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
 * //       },
 * //       autoTrainingConfig: { // AutoTrainingConfig
 * //         schedulingExpression: "STRING_VALUE",
 * //       },
 * //     },
 * //     trainingHours: Number("double"),
 * //     trainingMode: "FULL" || "UPDATE" || "AUTOTRAIN",
 * //     tunedHPOParams: { // TunedHPOParams
 * //       algorithmHyperParameters: {
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //     status: "STRING_VALUE",
 * //     failureReason: "STRING_VALUE",
 * //     creationDateTime: new Date("TIMESTAMP"),
 * //     lastUpdatedDateTime: new Date("TIMESTAMP"),
 * //     trainingType: "AUTOMATIC" || "MANUAL",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeSolutionVersionCommandInput - {@link DescribeSolutionVersionCommandInput}
 * @returns {@link DescribeSolutionVersionCommandOutput}
 * @see {@link DescribeSolutionVersionCommandInput} for command's `input` shape.
 * @see {@link DescribeSolutionVersionCommandOutput} for command's `response` shape.
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
export class DescribeSolutionVersionCommand extends $Command
  .classBuilder<
    DescribeSolutionVersionCommandInput,
    DescribeSolutionVersionCommandOutput,
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
  .s("AmazonPersonalize", "DescribeSolutionVersion", {})
  .n("PersonalizeClient", "DescribeSolutionVersionCommand")
  .f(void 0, void 0)
  .ser(se_DescribeSolutionVersionCommand)
  .de(de_DescribeSolutionVersionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeSolutionVersionRequest;
      output: DescribeSolutionVersionResponse;
    };
    sdk: {
      input: DescribeSolutionVersionCommandInput;
      output: DescribeSolutionVersionCommandOutput;
    };
  };
}
