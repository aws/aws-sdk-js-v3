// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetContainerServiceMetricDataRequest, GetContainerServiceMetricDataResult } from "../models/models_0";
import { GetContainerServiceMetricData$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetContainerServiceMetricDataCommand}.
 */
export interface GetContainerServiceMetricDataCommandInput extends GetContainerServiceMetricDataRequest {}
/**
 * @public
 *
 * The output of {@link GetContainerServiceMetricDataCommand}.
 */
export interface GetContainerServiceMetricDataCommandOutput extends GetContainerServiceMetricDataResult, __MetadataBearer {}

/**
 * Returns the data points of a specific metric of your Amazon Lightsail container service.
 *
 * Metrics report the utilization of your resources. Monitor and collect metric data regularly to maintain the reliability, availability, and performance of your resources.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetContainerServiceMetricDataCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetContainerServiceMetricDataCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * // import type { LightsailClientConfig } from "@aws-sdk/client-lightsail";
 * const config = {}; // type is LightsailClientConfig
 * const client = new LightsailClient(config);
 * const input = { // GetContainerServiceMetricDataRequest
 *   serviceName: "STRING_VALUE", // required
 *   metricName: "CPUUtilization" || "MemoryUtilization", // required
 *   startTime: new Date("TIMESTAMP"), // required
 *   endTime: new Date("TIMESTAMP"), // required
 *   period: Number("int"), // required
 *   statistics: [ // MetricStatisticList // required
 *     "Minimum" || "Maximum" || "Sum" || "Average" || "SampleCount",
 *   ],
 * };
 * const command = new GetContainerServiceMetricDataCommand(input);
 * const response = await client.send(command);
 * // { // GetContainerServiceMetricDataResult
 * //   metricName: "CPUUtilization" || "MemoryUtilization",
 * //   metricData: [ // MetricDatapointList
 * //     { // MetricDatapoint
 * //       average: Number("double"),
 * //       maximum: Number("double"),
 * //       minimum: Number("double"),
 * //       sampleCount: Number("double"),
 * //       sum: Number("double"),
 * //       timestamp: new Date("TIMESTAMP"),
 * //       unit: "Seconds" || "Microseconds" || "Milliseconds" || "Bytes" || "Kilobytes" || "Megabytes" || "Gigabytes" || "Terabytes" || "Bits" || "Kilobits" || "Megabits" || "Gigabits" || "Terabits" || "Percent" || "Count" || "Bytes/Second" || "Kilobytes/Second" || "Megabytes/Second" || "Gigabytes/Second" || "Terabytes/Second" || "Bits/Second" || "Kilobits/Second" || "Megabits/Second" || "Gigabits/Second" || "Terabits/Second" || "Count/Second" || "None",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetContainerServiceMetricDataCommandInput - {@link GetContainerServiceMetricDataCommandInput}
 * @returns {@link GetContainerServiceMetricDataCommandOutput}
 * @see {@link GetContainerServiceMetricDataCommandInput} for command's `input` shape.
 * @see {@link GetContainerServiceMetricDataCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * Lightsail throws this exception when user input does not conform to the validation rules of an input field.
 *
 * > **Note:** Domain and distribution APIs are only available in the N. Virginia (`us-east-1`) Amazon Web Services Region. Please set your Amazon Web Services Region configuration to `us-east-1` to create, view, or edit these resources.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * Lightsail throws this exception when it cannot find a resource.
 *
 * @throws {@link RegionSetupInProgressException} (client fault)
 *
 * Lightsail throws this exception when an operation is performed on resources in an opt-in Region that is currently being set up.
 *
 * @throws {@link ServiceException} (server fault)
 *
 * A general service exception.
 *
 * @throws {@link UnauthenticatedException} (client fault)
 *
 * Lightsail throws this exception when the user has not been authenticated.
 *
 * @throws {@link LightsailServiceException}
 *
 * Base exception class for all service exceptions from Lightsail service.
 *
 * @public
 */
export class GetContainerServiceMetricDataCommand extends command<GetContainerServiceMetricDataCommandInput, GetContainerServiceMetricDataCommandOutput>(
  _ep0,
  _mw0,
  "GetContainerServiceMetricData",
  GetContainerServiceMetricData$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetContainerServiceMetricDataRequest;
      output: GetContainerServiceMetricDataResult;
    };
    sdk: {
      input: GetContainerServiceMetricDataCommandInput;
      output: GetContainerServiceMetricDataCommandOutput;
    };
  };
}
