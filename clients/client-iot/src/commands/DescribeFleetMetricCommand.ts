// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DescribeFleetMetricRequest, DescribeFleetMetricResponse } from "../models/models_1";
import { de_DescribeFleetMetricCommand, se_DescribeFleetMetricCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Gets information about the specified fleet metric.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeFleetMetric</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeFleetMetricCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeFleetMetricCommand } = require("@aws-sdk/client-iot"); // CommonJS import
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
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 *
 * @public
 */
export class DescribeFleetMetricCommand extends $Command
  .classBuilder<
    DescribeFleetMetricCommandInput,
    DescribeFleetMetricCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIotService", "DescribeFleetMetric", {})
  .n("IoTClient", "DescribeFleetMetricCommand")
  .f(void 0, void 0)
  .ser(se_DescribeFleetMetricCommand)
  .de(de_DescribeFleetMetricCommand)
  .build() {
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
