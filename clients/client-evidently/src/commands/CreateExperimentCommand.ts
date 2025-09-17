// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EvidentlyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EvidentlyClient";
import { CreateExperimentRequest, CreateExperimentResponse } from "../models/models_0";
import { de_CreateExperimentCommand, se_CreateExperimentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateExperimentCommand}.
 */
export interface CreateExperimentCommandInput extends CreateExperimentRequest {}
/**
 * @public
 *
 * The output of {@link CreateExperimentCommand}.
 */
export interface CreateExperimentCommandOutput extends CreateExperimentResponse, __MetadataBearer {}

/**
 * <p>Creates an Evidently <i>experiment</i>. Before you create an experiment,
 *       you must create the feature to use for the experiment.</p>
 *          <p>An experiment helps you make feature design
 *        decisions based on evidence and data. An experiment can test as
 *        many as five variations at once. Evidently collects experiment data and analyzes it by statistical methods, and provides
 *        clear recommendations about which variations perform better.</p>
 *          <p>You can optionally specify a <code>segment</code> to have the experiment consider only certain audience
 *      types in the experiment, such as using only user sessions from a certain location or who use a certain internet browser.</p>
 *          <p>Don't use this operation to update an existing experiment. Instead, use
 *        <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_UpdateExperiment.html">UpdateExperiment</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EvidentlyClient, CreateExperimentCommand } from "@aws-sdk/client-evidently"; // ES Modules import
 * // const { EvidentlyClient, CreateExperimentCommand } = require("@aws-sdk/client-evidently"); // CommonJS import
 * // import type { EvidentlyClientConfig } from "@aws-sdk/client-evidently";
 * const config = {}; // type is EvidentlyClientConfig
 * const client = new EvidentlyClient(config);
 * const input = { // CreateExperimentRequest
 *   project: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   treatments: [ // TreatmentConfigList // required
 *     { // TreatmentConfig
 *       name: "STRING_VALUE", // required
 *       description: "STRING_VALUE",
 *       feature: "STRING_VALUE", // required
 *       variation: "STRING_VALUE", // required
 *     },
 *   ],
 *   metricGoals: [ // MetricGoalConfigList // required
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
 *   onlineAbConfig: { // OnlineAbConfig
 *     controlTreatmentName: "STRING_VALUE",
 *     treatmentWeights: { // TreatmentToWeightMap
 *       "<keys>": Number("long"),
 *     },
 *   },
 *   segment: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateExperimentCommand(input);
 * const response = await client.send(command);
 * // { // CreateExperimentResponse
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
 * @param CreateExperimentCommandInput - {@link CreateExperimentCommandInput}
 * @returns {@link CreateExperimentCommandOutput}
 * @see {@link CreateExperimentCommandInput} for command's `input` shape.
 * @see {@link CreateExperimentCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would cause a service quota to be exceeded.</p>
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
export class CreateExperimentCommand extends $Command
  .classBuilder<
    CreateExperimentCommandInput,
    CreateExperimentCommandOutput,
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
  .s("Evidently", "CreateExperiment", {})
  .n("EvidentlyClient", "CreateExperimentCommand")
  .f(void 0, void 0)
  .ser(se_CreateExperimentCommand)
  .de(de_CreateExperimentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateExperimentRequest;
      output: CreateExperimentResponse;
    };
    sdk: {
      input: CreateExperimentCommandInput;
      output: CreateExperimentCommandOutput;
    };
  };
}
