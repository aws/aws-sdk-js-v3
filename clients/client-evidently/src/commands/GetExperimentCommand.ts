// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EvidentlyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EvidentlyClient";
import { GetExperimentRequest, GetExperimentResponse } from "../models/models_0";
import { GetExperiment } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetExperimentCommand}.
 */
export interface GetExperimentCommandInput extends GetExperimentRequest {}
/**
 * @public
 *
 * The output of {@link GetExperimentCommand}.
 */
export interface GetExperimentCommandOutput extends GetExperimentResponse, __MetadataBearer {}

/**
 * <p>Returns the details about one experiment. You must already know the
 *       experiment name. To retrieve a list of experiments in your account, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_ListExperiments.html">ListExperiments</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EvidentlyClient, GetExperimentCommand } from "@aws-sdk/client-evidently"; // ES Modules import
 * // const { EvidentlyClient, GetExperimentCommand } = require("@aws-sdk/client-evidently"); // CommonJS import
 * // import type { EvidentlyClientConfig } from "@aws-sdk/client-evidently";
 * const config = {}; // type is EvidentlyClientConfig
 * const client = new EvidentlyClient(config);
 * const input = { // GetExperimentRequest
 *   project: "STRING_VALUE", // required
 *   experiment: "STRING_VALUE", // required
 * };
 * const command = new GetExperimentCommand(input);
 * const response = await client.send(command);
 * // { // GetExperimentResponse
 * //   experiment: { // Experiment
 * //     arn: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     project: "STRING_VALUE",
 * //     status: "STRING_VALUE", // required
 * //     statusReason: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     createdTime: new Date("TIMESTAMP"), // required
 * //     lastUpdatedTime: new Date("TIMESTAMP"), // required
 * //     schedule: { // ExperimentSchedule
 * //       analysisCompleteTime: new Date("TIMESTAMP"),
 * //     },
 * //     execution: { // ExperimentExecution
 * //       startedTime: new Date("TIMESTAMP"),
 * //       endedTime: new Date("TIMESTAMP"),
 * //     },
 * //     treatments: [ // TreatmentList
 * //       { // Treatment
 * //         name: "STRING_VALUE", // required
 * //         description: "STRING_VALUE",
 * //         featureVariations: { // FeatureToVariationMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     metricGoals: [ // MetricGoalsList
 * //       { // MetricGoal
 * //         metricDefinition: { // MetricDefinition
 * //           name: "STRING_VALUE",
 * //           entityIdKey: "STRING_VALUE",
 * //           valueKey: "STRING_VALUE",
 * //           eventPattern: "STRING_VALUE",
 * //           unitLabel: "STRING_VALUE",
 * //         },
 * //         desiredChange: "STRING_VALUE",
 * //       },
 * //     ],
 * //     randomizationSalt: "STRING_VALUE",
 * //     samplingRate: Number("long"),
 * //     segment: "STRING_VALUE",
 * //     type: "STRING_VALUE", // required
 * //     onlineAbDefinition: { // OnlineAbDefinition
 * //       controlTreatmentName: "STRING_VALUE",
 * //       treatmentWeights: { // TreatmentToWeightMap
 * //         "<keys>": Number("long"),
 * //       },
 * //     },
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetExperimentCommandInput - {@link GetExperimentCommandInput}
 * @returns {@link GetExperimentCommandOutput}
 * @see {@link GetExperimentCommandInput} for command's `input` shape.
 * @see {@link GetExperimentCommandOutput} for command's `response` shape.
 * @see {@link EvidentlyClientResolvedConfig | config} for EvidentlyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling. Retry the request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The value of a parameter in the request caused an error.</p>
 *
 * @throws {@link EvidentlyServiceException}
 * <p>Base exception class for all service exceptions from Evidently service.</p>
 *
 *
 * @public
 */
export class GetExperimentCommand extends $Command
  .classBuilder<
    GetExperimentCommandInput,
    GetExperimentCommandOutput,
    EvidentlyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EvidentlyClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Evidently", "GetExperiment", {})
  .n("EvidentlyClient", "GetExperimentCommand")
  .sc(GetExperiment)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetExperimentRequest;
      output: GetExperimentResponse;
    };
    sdk: {
      input: GetExperimentCommandInput;
      output: GetExperimentCommandOutput;
    };
  };
}
