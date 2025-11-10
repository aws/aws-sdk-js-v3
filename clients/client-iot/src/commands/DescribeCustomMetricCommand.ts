// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DescribeCustomMetricRequest, DescribeCustomMetricResponse } from "../models/models_1";
import { DescribeCustomMetric } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeCustomMetricCommand}.
 */
export interface DescribeCustomMetricCommandInput extends DescribeCustomMetricRequest {}
/**
 * @public
 *
 * The output of {@link DescribeCustomMetricCommand}.
 */
export interface DescribeCustomMetricCommandOutput extends DescribeCustomMetricResponse, __MetadataBearer {}

/**
 * <p>
 *       Gets information about a Device Defender detect custom metric.
 *     </p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeCustomMetric</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeCustomMetricCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeCustomMetricCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // DescribeCustomMetricRequest
 *   metricName: "STRING_VALUE", // required
 * };
 * const command = new DescribeCustomMetricCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCustomMetricResponse
 * //   metricName: "STRING_VALUE",
 * //   metricArn: "STRING_VALUE",
 * //   metricType: "string-list" || "ip-address-list" || "number-list" || "number",
 * //   displayName: "STRING_VALUE",
 * //   creationDate: new Date("TIMESTAMP"),
 * //   lastModifiedDate: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeCustomMetricCommandInput - {@link DescribeCustomMetricCommandInput}
 * @returns {@link DescribeCustomMetricCommandOutput}
 * @see {@link DescribeCustomMetricCommandInput} for command's `input` shape.
 * @see {@link DescribeCustomMetricCommandOutput} for command's `response` shape.
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
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 *
 * @public
 */
export class DescribeCustomMetricCommand extends $Command
  .classBuilder<
    DescribeCustomMetricCommandInput,
    DescribeCustomMetricCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "DescribeCustomMetric", {})
  .n("IoTClient", "DescribeCustomMetricCommand")
  .sc(DescribeCustomMetric)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeCustomMetricRequest;
      output: DescribeCustomMetricResponse;
    };
    sdk: {
      input: DescribeCustomMetricCommandInput;
      output: DescribeCustomMetricCommandOutput;
    };
  };
}
