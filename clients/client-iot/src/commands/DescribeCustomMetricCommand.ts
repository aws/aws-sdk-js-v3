// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeCustomMetricRequest, DescribeCustomMetricResponse } from "../models/models_1";
import { DescribeCustomMetric$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * > **Note:** The IoT Device Defender detect feature will no longer be available to new customers starting August 31, 2026. If you would like to use the detect feature, sign up prior to August 31, 2026. To learn about alternatives to IoT Device Defender detect, see IoT Device Defender detect feature availability change in the IoT Device Defender Developer Guide. There is no change to IoT Device Defender audit availability.
 *
 * Gets information about a Device Defender detect custom metric.
 *
 * Requires permission to access the [DescribeCustomMetric](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
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
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link IoTServiceException}
 *
 * Base exception class for all service exceptions from IoT service.
 *
 * @public
 */
export class DescribeCustomMetricCommand extends command<DescribeCustomMetricCommandInput, DescribeCustomMetricCommandOutput>(
  _ep0,
  _mw0,
  "DescribeCustomMetric",
  DescribeCustomMetric$
) {
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
