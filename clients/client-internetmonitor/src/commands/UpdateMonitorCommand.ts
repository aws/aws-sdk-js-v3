// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  InternetMonitorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../InternetMonitorClient";
import type { UpdateMonitorInput, UpdateMonitorOutput } from "../models/models_0";
import { UpdateMonitor$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateMonitorCommand}.
 */
export interface UpdateMonitorCommandInput extends UpdateMonitorInput {}
/**
 * @public
 *
 * The output of {@link UpdateMonitorCommand}.
 */
export interface UpdateMonitorCommandOutput extends UpdateMonitorOutput, __MetadataBearer {}

/**
 * <p>Updates a monitor. You can update a monitor to change the percentage of traffic to monitor or the maximum number of city-networks
 * 			(locations and ASNs), to add or remove resources, or to change the status of the monitor. Note that you can't change the name of a monitor.</p>
 *          <p>The city-network maximum that you choose is the limit, but you only pay for the number of city-networks that are actually monitored.
 * 			For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/IMCityNetworksMaximum.html">Choosing a city-network maximum value</a> in the <i>Amazon CloudWatch User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InternetMonitorClient, UpdateMonitorCommand } from "@aws-sdk/client-internetmonitor"; // ES Modules import
 * // const { InternetMonitorClient, UpdateMonitorCommand } = require("@aws-sdk/client-internetmonitor"); // CommonJS import
 * // import type { InternetMonitorClientConfig } from "@aws-sdk/client-internetmonitor";
 * const config = {}; // type is InternetMonitorClientConfig
 * const client = new InternetMonitorClient(config);
 * const input = { // UpdateMonitorInput
 *   MonitorName: "STRING_VALUE", // required
 *   ResourcesToAdd: [ // SetOfARNs
 *     "STRING_VALUE",
 *   ],
 *   ResourcesToRemove: [
 *     "STRING_VALUE",
 *   ],
 *   Status: "STRING_VALUE",
 *   ClientToken: "STRING_VALUE",
 *   MaxCityNetworksToMonitor: Number("int"),
 *   InternetMeasurementsLogDelivery: { // InternetMeasurementsLogDelivery
 *     S3Config: { // S3Config
 *       BucketName: "STRING_VALUE",
 *       BucketPrefix: "STRING_VALUE",
 *       LogDeliveryStatus: "STRING_VALUE",
 *     },
 *   },
 *   TrafficPercentageToMonitor: Number("int"),
 *   HealthEventsConfig: { // HealthEventsConfig
 *     AvailabilityScoreThreshold: Number("double"),
 *     PerformanceScoreThreshold: Number("double"),
 *     AvailabilityLocalHealthEventsConfig: { // LocalHealthEventsConfig
 *       Status: "STRING_VALUE",
 *       HealthScoreThreshold: Number("double"),
 *       MinTrafficImpact: Number("double"),
 *     },
 *     PerformanceLocalHealthEventsConfig: {
 *       Status: "STRING_VALUE",
 *       HealthScoreThreshold: Number("double"),
 *       MinTrafficImpact: Number("double"),
 *     },
 *   },
 * };
 * const command = new UpdateMonitorCommand(input);
 * const response = await client.send(command);
 * // { // UpdateMonitorOutput
 * //   MonitorArn: "STRING_VALUE", // required
 * //   Status: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateMonitorCommandInput - {@link UpdateMonitorCommandInput}
 * @returns {@link UpdateMonitorCommandOutput}
 * @see {@link UpdateMonitorCommandInput} for command's `input` shape.
 * @see {@link UpdateMonitorCommandOutput} for command's `response` shape.
 * @see {@link InternetMonitorClientResolvedConfig | config} for InternetMonitorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permission to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request exceeded a service quota.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request specifies a resource that doesn't exist.</p>
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
export class UpdateMonitorCommand extends $Command
  .classBuilder<
    UpdateMonitorCommandInput,
    UpdateMonitorCommandOutput,
    InternetMonitorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: InternetMonitorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("InternetMonitor20210603", "UpdateMonitor", {})
  .n("InternetMonitorClient", "UpdateMonitorCommand")
  .sc(UpdateMonitor$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateMonitorInput;
      output: UpdateMonitorOutput;
    };
    sdk: {
      input: UpdateMonitorCommandInput;
      output: UpdateMonitorCommandOutput;
    };
  };
}
