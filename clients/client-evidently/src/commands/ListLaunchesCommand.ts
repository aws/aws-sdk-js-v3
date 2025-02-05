// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EvidentlyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EvidentlyClient";
import { ListLaunchesRequest, ListLaunchesResponse } from "../models/models_0";
import { de_ListLaunchesCommand, se_ListLaunchesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListLaunchesCommand}.
 */
export interface ListLaunchesCommandInput extends ListLaunchesRequest {}
/**
 * @public
 *
 * The output of {@link ListLaunchesCommand}.
 */
export interface ListLaunchesCommandOutput extends ListLaunchesResponse, __MetadataBearer {}

/**
 * <p>Returns configuration details about all the launches in the specified project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EvidentlyClient, ListLaunchesCommand } from "@aws-sdk/client-evidently"; // ES Modules import
 * // const { EvidentlyClient, ListLaunchesCommand } = require("@aws-sdk/client-evidently"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new EvidentlyClient(config);
 * const input = { // ListLaunchesRequest
 *   project: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   status: "STRING_VALUE",
 * };
 * const command = new ListLaunchesCommand(input);
 * const response = await client.send(command);
 * // { // ListLaunchesResponse
 * //   launches: [ // LaunchesList
 * //     { // Launch
 * //       arn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       project: "STRING_VALUE",
 * //       status: "STRING_VALUE", // required
 * //       statusReason: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       createdTime: new Date("TIMESTAMP"), // required
 * //       lastUpdatedTime: new Date("TIMESTAMP"), // required
 * //       execution: { // LaunchExecution
 * //         startedTime: new Date("TIMESTAMP"),
 * //         endedTime: new Date("TIMESTAMP"),
 * //       },
 * //       groups: [ // LaunchGroupList
 * //         { // LaunchGroup
 * //           name: "STRING_VALUE", // required
 * //           description: "STRING_VALUE",
 * //           featureVariations: { // FeatureToVariationMap // required
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
 * //       metricMonitors: [ // MetricMonitorList
 * //         { // MetricMonitor
 * //           metricDefinition: { // MetricDefinition
 * //             name: "STRING_VALUE",
 * //             entityIdKey: "STRING_VALUE",
 * //             valueKey: "STRING_VALUE",
 * //             eventPattern: "STRING_VALUE",
 * //             unitLabel: "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
 * //       randomizationSalt: "STRING_VALUE",
 * //       type: "STRING_VALUE", // required
 * //       scheduledSplitsDefinition: { // ScheduledSplitsLaunchDefinition
 * //         steps: [ // ScheduledStepList
 * //           { // ScheduledSplit
 * //             startTime: new Date("TIMESTAMP"), // required
 * //             groupWeights: { // GroupToWeightMap
 * //               "<keys>": Number("long"),
 * //             },
 * //             segmentOverrides: [ // SegmentOverridesList
 * //               { // SegmentOverride
 * //                 segment: "STRING_VALUE", // required
 * //                 evaluationOrder: Number("long"), // required
 * //                 weights: { // required
 * //                   "<keys>": Number("long"),
 * //                 },
 * //               },
 * //             ],
 * //           },
 * //         ],
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
 * @param ListLaunchesCommandInput - {@link ListLaunchesCommandInput}
 * @returns {@link ListLaunchesCommandOutput}
 * @see {@link ListLaunchesCommandInput} for command's `input` shape.
 * @see {@link ListLaunchesCommandOutput} for command's `response` shape.
 * @see {@link EvidentlyClientResolvedConfig | config} for EvidentlyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action. </p>
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
 * @public
 */
export class ListLaunchesCommand extends $Command
  .classBuilder<
    ListLaunchesCommandInput,
    ListLaunchesCommandOutput,
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
  .s("Evidently", "ListLaunches", {})
  .n("EvidentlyClient", "ListLaunchesCommand")
  .f(void 0, void 0)
  .ser(se_ListLaunchesCommand)
  .de(de_ListLaunchesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListLaunchesRequest;
      output: ListLaunchesResponse;
    };
    sdk: {
      input: ListLaunchesCommandInput;
      output: ListLaunchesCommandOutput;
    };
  };
}
