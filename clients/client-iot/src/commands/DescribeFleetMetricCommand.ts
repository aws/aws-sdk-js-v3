// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeFleetMetricRequest, DescribeFleetMetricResponse } from "../models/models_1";
import { DescribeFleetMetric$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeFleetMetricCommand}.
 */
export interface DescribeFleetMetricCommandInput extends DescribeFleetMetricRequest {}
/**
 * @public
 *
 * The output of {@link DescribeFleetMetricCommand}.
 */
export interface DescribeFleetMetricCommandOutput extends DescribeFleetMetricResponse, __MetadataBearer {}

/**
 * Gets information about the specified fleet metric.
 *
 * Requires permission to access the [DescribeFleetMetric](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeFleetMetricCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeFleetMetricCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // DescribeFleetMetricRequest
 *   metricName: "STRING_VALUE", // required
 * };
 * const command = new DescribeFleetMetricCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFleetMetricResponse
 * //   metricName: "STRING_VALUE",
 * //   queryString: "STRING_VALUE",
 * //   aggregationType: { // AggregationType
 * //     name: "Statistics" || "Percentiles" || "Cardinality", // required
 * //     values: [ // AggregationTypeValues
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   period: Number("int"),
 * //   aggregationField: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   queryVersion: "STRING_VALUE",
 * //   indexName: "STRING_VALUE",
 * //   creationDate: new Date("TIMESTAMP"),
 * //   lastModifiedDate: new Date("TIMESTAMP"),
 * //   unit: "Seconds" || "Microseconds" || "Milliseconds" || "Bytes" || "Kilobytes" || "Megabytes" || "Gigabytes" || "Terabytes" || "Bits" || "Kilobits" || "Megabits" || "Gigabits" || "Terabits" || "Percent" || "Count" || "Bytes/Second" || "Kilobytes/Second" || "Megabytes/Second" || "Gigabytes/Second" || "Terabytes/Second" || "Bits/Second" || "Kilobits/Second" || "Megabits/Second" || "Gigabits/Second" || "Terabits/Second" || "Count/Second" || "None",
 * //   version: Number("long"),
 * //   metricArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeFleetMetricCommandInput - {@link DescribeFleetMetricCommandInput}
 * @returns {@link DescribeFleetMetricCommandOutput}
 * @see {@link DescribeFleetMetricCommandInput} for command's `input` shape.
 * @see {@link DescribeFleetMetricCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An unexpected error has occurred.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is temporarily unavailable.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You are not authorized to perform this operation.
 *
 * @throws {@link IoTServiceException}
 *
 * Base exception class for all service exceptions from IoT service.
 *
 * @public
 */
export class DescribeFleetMetricCommand extends command<DescribeFleetMetricCommandInput, DescribeFleetMetricCommandOutput>(
  _ep0,
  _mw0,
  "DescribeFleetMetric",
  DescribeFleetMetric$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeFleetMetricRequest;
      output: DescribeFleetMetricResponse;
    };
    sdk: {
      input: DescribeFleetMetricCommandInput;
      output: DescribeFleetMetricCommandOutput;
    };
  };
}
