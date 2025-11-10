// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EvidentlyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EvidentlyClient";
import { ListExperimentsRequest, ListExperimentsResponse } from "../models/models_0";
import { ListExperiments } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListExperimentsCommand}.
 */
export interface ListExperimentsCommandInput extends ListExperimentsRequest {}
/**
 * @public
 *
 * The output of {@link ListExperimentsCommand}.
 */
export interface ListExperimentsCommandOutput extends ListExperimentsResponse, __MetadataBearer {}

/**
 * <p>Returns configuration details about all the experiments in the specified project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EvidentlyClient, ListExperimentsCommand } from "@aws-sdk/client-evidently"; // ES Modules import
 * // const { EvidentlyClient, ListExperimentsCommand } = require("@aws-sdk/client-evidently"); // CommonJS import
 * // import type { EvidentlyClientConfig } from "@aws-sdk/client-evidently";
 * const config = {}; // type is EvidentlyClientConfig
 * const client = new EvidentlyClient(config);
 * const input = { // ListExperimentsRequest
 *   project: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   status: "STRING_VALUE",
 * };
 * const command = new ListExperimentsCommand(input);
 * const response = await client.send(command);
 * // { // ListExperimentsResponse
 * //   experiments: [ // ExperimentList
 * //     { // Experiment
 * //       arn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       project: "STRING_VALUE",
 * //       status: "STRING_VALUE", // required
 * //       statusReason: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       createdTime: new Date("TIMESTAMP"), // required
 * //       lastUpdatedTime: new Date("TIMESTAMP"), // required
 * //       schedule: { // ExperimentSchedule
 * //         analysisCompleteTime: new Date("TIMESTAMP"),
 * //       },
 * //       execution: { // ExperimentExecution
 * //         startedTime: new Date("TIMESTAMP"),
 * //         endedTime: new Date("TIMESTAMP"),
 * //       },
 * //       treatments: [ // TreatmentList
 * //         { // Treatment
 * //           name: "STRING_VALUE", // required
 * //           description: "STRING_VALUE",
 * //           featureVariations: { // FeatureToVariationMap
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
 * //       metricGoals: [ // MetricGoalsList
 * //         { // MetricGoal
 * //           metricDefinition: { // MetricDefinition
 * //             name: "STRING_VALUE",
 * //             entityIdKey: "STRING_VALUE",
 * //             valueKey: "STRING_VALUE",
 * //             eventPattern: "STRING_VALUE",
 * //             unitLabel: "STRING_VALUE",
 * //           },
 * //           desiredChange: "STRING_VALUE",
 * //         },
 * //       ],
 * //       randomizationSalt: "STRING_VALUE",
 * //       samplingRate: Number("long"),
 * //       segment: "STRING_VALUE",
 * //       type: "STRING_VALUE", // required
 * //       onlineAbDefinition: { // OnlineAbDefinition
 * //         controlTreatmentName: "STRING_VALUE",
 * //         treatmentWeights: { // TreatmentToWeightMap
 * //           "<keys>": Number("long"),
 * //         },
 * //       },
 * //       tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListExperimentsCommandInput - {@link ListExperimentsCommandInput}
 * @returns {@link ListExperimentsCommandOutput}
 * @see {@link ListExperimentsCommandInput} for command's `input` shape.
 * @see {@link ListExperimentsCommandOutput} for command's `response` shape.
 * @see {@link EvidentlyClientResolvedConfig | config} for EvidentlyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action. </p>
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
 *
 * @public
 */
export class ListExperimentsCommand extends $Command
  .classBuilder<
    ListExperimentsCommandInput,
    ListExperimentsCommandOutput,
    EvidentlyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EvidentlyClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Evidently", "ListExperiments", {})
  .n("EvidentlyClient", "ListExperimentsCommand")
  .sc(ListExperiments)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListExperimentsRequest;
      output: ListExperimentsResponse;
    };
    sdk: {
      input: ListExperimentsCommandInput;
      output: ListExperimentsCommandOutput;
    };
  };
}
