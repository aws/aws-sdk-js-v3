// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EvidentlyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EvidentlyClient";
import { StartLaunchRequest, StartLaunchResponse } from "../models/models_0";
import { de_StartLaunchCommand, se_StartLaunchCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartLaunchCommand}.
 */
export interface StartLaunchCommandInput extends StartLaunchRequest {}
/**
 * @public
 *
 * The output of {@link StartLaunchCommand}.
 */
export interface StartLaunchCommandOutput extends StartLaunchResponse, __MetadataBearer {}

/**
 * <p>Starts an existing launch. To create a launch,
 *        use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_CreateLaunch.html">CreateLaunch</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EvidentlyClient, StartLaunchCommand } from "@aws-sdk/client-evidently"; // ES Modules import
 * // const { EvidentlyClient, StartLaunchCommand } = require("@aws-sdk/client-evidently"); // CommonJS import
 * const client = new EvidentlyClient(config);
 * const input = { // StartLaunchRequest
 *   project: "STRING_VALUE", // required
 *   launch: "STRING_VALUE", // required
 * };
 * const command = new StartLaunchCommand(input);
 * const response = await client.send(command);
 * // { // StartLaunchResponse
 * //   launch: { // Launch
 * //     arn: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     project: "STRING_VALUE",
 * //     status: "STRING_VALUE", // required
 * //     statusReason: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     createdTime: new Date("TIMESTAMP"), // required
 * //     lastUpdatedTime: new Date("TIMESTAMP"), // required
 * //     execution: { // LaunchExecution
 * //       startedTime: new Date("TIMESTAMP"),
 * //       endedTime: new Date("TIMESTAMP"),
 * //     },
 * //     groups: [ // LaunchGroupList
 * //       { // LaunchGroup
 * //         name: "STRING_VALUE", // required
 * //         description: "STRING_VALUE",
 * //         featureVariations: { // FeatureToVariationMap // required
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     metricMonitors: [ // MetricMonitorList
 * //       { // MetricMonitor
 * //         metricDefinition: { // MetricDefinition
 * //           name: "STRING_VALUE",
 * //           entityIdKey: "STRING_VALUE",
 * //           valueKey: "STRING_VALUE",
 * //           eventPattern: "STRING_VALUE",
 * //           unitLabel: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     randomizationSalt: "STRING_VALUE",
 * //     type: "STRING_VALUE", // required
 * //     scheduledSplitsDefinition: { // ScheduledSplitsLaunchDefinition
 * //       steps: [ // ScheduledStepList
 * //         { // ScheduledSplit
 * //           startTime: new Date("TIMESTAMP"), // required
 * //           groupWeights: { // GroupToWeightMap
 * //             "<keys>": Number("long"),
 * //           },
 * //           segmentOverrides: [ // SegmentOverridesList
 * //             { // SegmentOverride
 * //               segment: "STRING_VALUE", // required
 * //               evaluationOrder: Number("long"), // required
 * //               weights: { // required
 * //                 "<keys>": Number("long"),
 * //               },
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param StartLaunchCommandInput - {@link StartLaunchCommandInput}
 * @returns {@link StartLaunchCommandOutput}
 * @see {@link StartLaunchCommandInput} for command's `input` shape.
 * @see {@link StartLaunchCommandOutput} for command's `response` shape.
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
export class StartLaunchCommand extends $Command
  .classBuilder<
    StartLaunchCommandInput,
    StartLaunchCommandOutput,
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
  .s("Evidently", "StartLaunch", {})
  .n("EvidentlyClient", "StartLaunchCommand")
  .f(void 0, void 0)
  .ser(se_StartLaunchCommand)
  .de(de_StartLaunchCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartLaunchRequest;
      output: StartLaunchResponse;
    };
    sdk: {
      input: StartLaunchCommandInput;
      output: StartLaunchCommandOutput;
    };
  };
}
