// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EvidentlyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EvidentlyClient";
import { UpdateExperimentRequest, UpdateExperimentResponse } from "../models/models_0";
import { de_UpdateExperimentCommand, se_UpdateExperimentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateExperimentCommand}.
 */
export interface UpdateExperimentCommandInput extends UpdateExperimentRequest {}
/**
 * @public
 *
 * The output of {@link UpdateExperimentCommand}.
 */
export interface UpdateExperimentCommandOutput extends UpdateExperimentResponse, __MetadataBearer {}

/**
 * <p>Updates an Evidently experiment. </p>
 *          <p>Don't use this operation to update an experiment's tag. Instead, use
 *       <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_TagResource.html">TagResource</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EvidentlyClient, UpdateExperimentCommand } from "@aws-sdk/client-evidently"; // ES Modules import
 * // const { EvidentlyClient, UpdateExperimentCommand } = require("@aws-sdk/client-evidently"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new EvidentlyClient(config);
 * const input = { // UpdateExperimentRequest
 *   project: "STRING_VALUE", // required
 *   experiment: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   treatments: [ // TreatmentConfigList
 *     { // TreatmentConfig
 *       name: "STRING_VALUE", // required
 *       description: "STRING_VALUE",
 *       feature: "STRING_VALUE", // required
 *       variation: "STRING_VALUE", // required
 *     },
 *   ],
 *   metricGoals: [ // MetricGoalConfigList
 *     { // MetricGoalConfig
 *       metricDefinition: { // MetricDefinitionConfig
 *         name: "STRING_VALUE", // required
 *         entityIdKey: "STRING_VALUE", // required
 *         valueKey: "STRING_VALUE", // required
 *         eventPattern: "STRING_VALUE",
 *         unitLabel: "STRING_VALUE",
 *       },
 *       desiredChange: "STRING_VALUE",
 *     },
 *   ],
 *   randomizationSalt: "STRING_VALUE",
 *   samplingRate: Number("long"),
 *   segment: "STRING_VALUE",
 *   removeSegment: true || false,
 *   onlineAbConfig: { // OnlineAbConfig
 *     controlTreatmentName: "STRING_VALUE",
 *     treatmentWeights: { // TreatmentToWeightMap
 *       "<keys>": Number("long"),
 *     },
 *   },
 * };
 * const command = new UpdateExperimentCommand(input);
 * const response = await client.send(command);
 * // { // UpdateExperimentResponse
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
 * @param UpdateExperimentCommandInput - {@link UpdateExperimentCommandInput}
 * @returns {@link UpdateExperimentCommandOutput}
 * @see {@link UpdateExperimentCommandInput} for command's `input` shape.
 * @see {@link UpdateExperimentCommandOutput} for command's `response` shape.
 * @see {@link EvidentlyClientResolvedConfig | config} for EvidentlyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A resource was in an inconsistent state during an update or a deletion.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The value of a parameter in the request caused an error.</p>
 *
 * @throws {@link EvidentlyServiceException}
 * <p>Base exception class for all service exceptions from Evidently service.</p>
 *
 * @public
 */
export class UpdateExperimentCommand extends $Command
  .classBuilder<
    UpdateExperimentCommandInput,
    UpdateExperimentCommandOutput,
    EvidentlyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EvidentlyClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Evidently", "UpdateExperiment", {})
  .n("EvidentlyClient", "UpdateExperimentCommand")
  .f(void 0, void 0)
  .ser(se_UpdateExperimentCommand)
  .de(de_UpdateExperimentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateExperimentRequest;
      output: UpdateExperimentResponse;
    };
    sdk: {
      input: UpdateExperimentCommandInput;
      output: UpdateExperimentCommandOutput;
    };
  };
}
