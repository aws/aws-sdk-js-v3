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
import type { CreateMonitorInput, CreateMonitorOutput } from "../models/models_0";
import { CreateMonitor$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateMonitorCommand}.
 */
export interface CreateMonitorCommandInput extends CreateMonitorInput {}
/**
 * @public
 *
 * The output of {@link CreateMonitorCommand}.
 */
export interface CreateMonitorCommandOutput extends CreateMonitorOutput, __MetadataBearer {}

/**
 * <p>Creates a monitor in Amazon CloudWatch Internet Monitor. A monitor is built based on information from the application resources that you add: VPCs,
 * 			Network Load Balancers (NLBs), Amazon CloudFront distributions, and Amazon WorkSpaces directories. Internet Monitor then publishes internet measurements from Amazon Web Services
 * 			that are specific to the <i>city-networks</i>. That is, the locations and ASNs (typically internet service providers or ISPs),
 * 			where clients access your application. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-InternetMonitor.html">Using Amazon CloudWatch Internet Monitor</a> in the <i>Amazon CloudWatch User
 * 					Guide</i>.</p>
 *          <p>When you create a monitor, you choose the percentage of traffic that you want to monitor. You can also set a maximum limit for the
 * 			number of city-networks where client traffic is monitored, that caps the total traffic that Internet Monitor monitors. A city-network
 * 			maximum is the limit of city-networks, but you only pay for the number of city-networks that are actually monitored. You can update your monitor
 * 			at any time to change the percentage of traffic to monitor or the city-networks maximum. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/IMCityNetworksMaximum.html">Choosing a city-network maximum value</a> in the <i>Amazon CloudWatch User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InternetMonitorClient, CreateMonitorCommand } from "@aws-sdk/client-internetmonitor"; // ES Modules import
 * // const { InternetMonitorClient, CreateMonitorCommand } = require("@aws-sdk/client-internetmonitor"); // CommonJS import
 * // import type { InternetMonitorClientConfig } from "@aws-sdk/client-internetmonitor";
 * const config = {}; // type is InternetMonitorClientConfig
 * const client = new InternetMonitorClient(config);
 * const input = { // CreateMonitorInput
 *   MonitorName: "STRING_VALUE", // required
 *   Resources: [ // SetOfARNs
 *     "STRING_VALUE",
 *   ],
 *   ClientToken: "STRING_VALUE",
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
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
 * const command = new CreateMonitorCommand(input);
 * const response = await client.send(command);
 * // { // CreateMonitorOutput
 * //   Arn: "STRING_VALUE", // required
 * //   Status: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateMonitorCommandInput - {@link CreateMonitorCommandInput}
 * @returns {@link CreateMonitorCommandOutput}
 * @see {@link CreateMonitorCommandInput} for command's `input` shape.
 * @see {@link CreateMonitorCommandOutput} for command's `response` shape.
 * @see {@link InternetMonitorClientResolvedConfig | config} for InternetMonitorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permission to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The requested resource is in use.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request exceeded a service quota.</p>
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
export class CreateMonitorCommand extends $Command
  .classBuilder<
    CreateMonitorCommandInput,
    CreateMonitorCommandOutput,
    InternetMonitorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: InternetMonitorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("InternetMonitor20210603", "CreateMonitor", {})
  .n("InternetMonitorClient", "CreateMonitorCommand")
  .sc(CreateMonitor$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateMonitorInput;
      output: CreateMonitorOutput;
    };
    sdk: {
      input: CreateMonitorCommandInput;
      output: CreateMonitorCommandOutput;
    };
  };
}
