// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EvidentlyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EvidentlyClient";
import { UpdateLaunchRequest, UpdateLaunchResponse } from "../models/models_0";
import { de_UpdateLaunchCommand, se_UpdateLaunchCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateLaunchCommand}.
 */
export interface UpdateLaunchCommandInput extends UpdateLaunchRequest {}
/**
 * @public
 *
 * The output of {@link UpdateLaunchCommand}.
 */
export interface UpdateLaunchCommandOutput extends UpdateLaunchResponse, __MetadataBearer {}

/**
 * <p>Updates a launch of a given feature. </p>
 *          <p>Don't use this operation to update the tags of an existing launch. Instead, use
 *       <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_TagResource.html">TagResource</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EvidentlyClient, UpdateLaunchCommand } from "@aws-sdk/client-evidently"; // ES Modules import
 * // const { EvidentlyClient, UpdateLaunchCommand } = require("@aws-sdk/client-evidently"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new EvidentlyClient(config);
 * const input = { // UpdateLaunchRequest
 *   project: "STRING_VALUE", // required
 *   launch: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   groups: [ // LaunchGroupConfigList
 *     { // LaunchGroupConfig
 *       name: "STRING_VALUE", // required
 *       description: "STRING_VALUE",
 *       feature: "STRING_VALUE", // required
 *       variation: "STRING_VALUE", // required
 *     },
 *   ],
 *   metricMonitors: [ // MetricMonitorConfigList
 *     { // MetricMonitorConfig
 *       metricDefinition: { // MetricDefinitionConfig
 *         name: "STRING_VALUE", // required
 *         entityIdKey: "STRING_VALUE", // required
 *         valueKey: "STRING_VALUE", // required
 *         eventPattern: "STRING_VALUE",
 *         unitLabel: "STRING_VALUE",
 *       },
 *     },
 *   ],
 *   randomizationSalt: "STRING_VALUE",
 *   scheduledSplitsConfig: { // ScheduledSplitsLaunchConfig
 *     steps: [ // ScheduledSplitConfigList // required
 *       { // ScheduledSplitConfig
 *         startTime: new Date("TIMESTAMP"), // required
 *         groupWeights: { // GroupToWeightMap // required
 *           "<keys>": Number("long"),
 *         },
 *         segmentOverrides: [ // SegmentOverridesList
 *           { // SegmentOverride
 *             segment: "STRING_VALUE", // required
 *             evaluationOrder: Number("long"), // required
 *             weights: { // required
 *               "<keys>": Number("long"),
 *             },
 *           },
 *         ],
 *       },
 *     ],
 *   },
 * };
 * const command = new UpdateLaunchCommand(input);
 * const response = await client.send(command);
 * // { // UpdateLaunchResponse
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
 * @param UpdateLaunchCommandInput - {@link UpdateLaunchCommandInput}
 * @returns {@link UpdateLaunchCommandOutput}
 * @see {@link UpdateLaunchCommandInput} for command's `input` shape.
 * @see {@link UpdateLaunchCommandOutput} for command's `response` shape.
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
export class UpdateLaunchCommand extends $Command
  .classBuilder<
    UpdateLaunchCommandInput,
    UpdateLaunchCommandOutput,
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
  .s("Evidently", "UpdateLaunch", {})
  .n("EvidentlyClient", "UpdateLaunchCommand")
  .f(void 0, void 0)
  .ser(se_UpdateLaunchCommand)
  .de(de_UpdateLaunchCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateLaunchRequest;
      output: UpdateLaunchResponse;
    };
    sdk: {
      input: UpdateLaunchCommandInput;
      output: UpdateLaunchCommandOutput;
    };
  };
}
