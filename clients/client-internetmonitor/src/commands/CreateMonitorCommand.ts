// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateMonitorInput, CreateMonitorOutput } from "../models/models_0";
import { CreateMonitor$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a monitor in Amazon CloudWatch Internet Monitor. A monitor is built based on information from the application resources that you add: VPCs, Network Load Balancers (NLBs), Amazon CloudFront distributions, and Amazon WorkSpaces directories. Internet Monitor then publishes internet measurements from Amazon Web Services that are specific to the *city-networks*. That is, the locations and ASNs (typically internet service providers or ISPs), where clients access your application. For more information, see [Using Amazon CloudWatch Internet Monitor](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-InternetMonitor.html) in the *Amazon CloudWatch User Guide*.
 *
 * When you create a monitor, you choose the percentage of traffic that you want to monitor. You can also set a maximum limit for the number of city-networks where client traffic is monitored, that caps the total traffic that Internet Monitor monitors. A city-network maximum is the limit of city-networks, but you only pay for the number of city-networks that are actually monitored. You can update your monitor at any time to change the percentage of traffic to monitor or the city-networks maximum. For more information, see [Choosing a city-network maximum value](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/IMCityNetworksMaximum.html) in the *Amazon CloudWatch User Guide*.
 *
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
 *
 * You don't have sufficient permission to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The requested resource is in use.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal error occurred.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The request exceeded a service quota.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Invalid request.
 *
 * @throws {@link InternetMonitorServiceException}
 *
 * Base exception class for all service exceptions from InternetMonitor service.
 *
 * @public
 */
export class CreateMonitorCommand extends command<CreateMonitorCommandInput, CreateMonitorCommandOutput>(
  _ep0,
  _mw0,
  "CreateMonitor",
  CreateMonitor$
) {
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
