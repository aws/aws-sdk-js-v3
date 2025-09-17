// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { InternetMonitorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InternetMonitorClient";
import { GetMonitorInput, GetMonitorOutput } from "../models/models_0";
import { de_GetMonitorCommand, se_GetMonitorCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetMonitorCommand}.
 */
export interface GetMonitorCommandInput extends GetMonitorInput {}
/**
 * @public
 *
 * The output of {@link GetMonitorCommand}.
 */
export interface GetMonitorCommandOutput extends GetMonitorOutput, __MetadataBearer {}

/**
 * <p>Gets information about a monitor in Amazon CloudWatch Internet Monitor based on a monitor name. The information returned includes the Amazon Resource Name (ARN), create time,
 * 			modified time, resources included in the monitor, and status information.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InternetMonitorClient, GetMonitorCommand } from "@aws-sdk/client-internetmonitor"; // ES Modules import
 * // const { InternetMonitorClient, GetMonitorCommand } = require("@aws-sdk/client-internetmonitor"); // CommonJS import
 * // import type { InternetMonitorClientConfig } from "@aws-sdk/client-internetmonitor";
 * const config = {}; // type is InternetMonitorClientConfig
 * const client = new InternetMonitorClient(config);
 * const input = { // GetMonitorInput
 *   MonitorName: "STRING_VALUE", // required
 *   LinkedAccountId: "STRING_VALUE",
 * };
 * const command = new GetMonitorCommand(input);
 * const response = await client.send(command);
 * // { // GetMonitorOutput
 * //   MonitorName: "STRING_VALUE", // required
 * //   MonitorArn: "STRING_VALUE", // required
 * //   Resources: [ // SetOfARNs // required
 * //     "STRING_VALUE",
 * //   ],
 * //   Status: "STRING_VALUE", // required
 * //   CreatedAt: new Date("TIMESTAMP"), // required
 * //   ModifiedAt: new Date("TIMESTAMP"), // required
 * //   ProcessingStatus: "STRING_VALUE",
 * //   ProcessingStatusInfo: "STRING_VALUE",
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   MaxCityNetworksToMonitor: Number("int"),
 * //   InternetMeasurementsLogDelivery: { // InternetMeasurementsLogDelivery
 * //     S3Config: { // S3Config
 * //       BucketName: "STRING_VALUE",
 * //       BucketPrefix: "STRING_VALUE",
 * //       LogDeliveryStatus: "STRING_VALUE",
 * //     },
 * //   },
 * //   TrafficPercentageToMonitor: Number("int"),
 * //   HealthEventsConfig: { // HealthEventsConfig
 * //     AvailabilityScoreThreshold: Number("double"),
 * //     PerformanceScoreThreshold: Number("double"),
 * //     AvailabilityLocalHealthEventsConfig: { // LocalHealthEventsConfig
 * //       Status: "STRING_VALUE",
 * //       HealthScoreThreshold: Number("double"),
 * //       MinTrafficImpact: Number("double"),
 * //     },
 * //     PerformanceLocalHealthEventsConfig: {
 * //       Status: "STRING_VALUE",
 * //       HealthScoreThreshold: Number("double"),
 * //       MinTrafficImpact: Number("double"),
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetMonitorCommandInput - {@link GetMonitorCommandInput}
 * @returns {@link GetMonitorCommandOutput}
 * @see {@link GetMonitorCommandInput} for command's `input` shape.
 * @see {@link GetMonitorCommandOutput} for command's `response` shape.
 * @see {@link InternetMonitorClientResolvedConfig | config} for InternetMonitorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permission to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Invalid request.</p>
 *
 * @throws {@link InternetMonitorServiceException}
 * <p>Base exception class for all service exceptions from InternetMonitor service.</p>
 *
 *
 * @public
 */
export class GetMonitorCommand extends $Command
  .classBuilder<
    GetMonitorCommandInput,
    GetMonitorCommandOutput,
    InternetMonitorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: InternetMonitorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("InternetMonitor20210603", "GetMonitor", {})
  .n("InternetMonitorClient", "GetMonitorCommand")
  .f(void 0, void 0)
  .ser(se_GetMonitorCommand)
  .de(de_GetMonitorCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMonitorInput;
      output: GetMonitorOutput;
    };
    sdk: {
      input: GetMonitorCommandInput;
      output: GetMonitorCommandOutput;
    };
  };
}
