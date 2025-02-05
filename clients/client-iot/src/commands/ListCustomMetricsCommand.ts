// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListCustomMetricsRequest, ListCustomMetricsResponse } from "../models/models_1";
import { de_ListCustomMetricsCommand, se_ListCustomMetricsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCustomMetricsCommand}.
 */
export interface ListCustomMetricsCommandInput extends ListCustomMetricsRequest {}
/**
 * @public
 *
 * The output of {@link ListCustomMetricsCommand}.
 */
export interface ListCustomMetricsCommandOutput extends ListCustomMetricsResponse, __MetadataBearer {}

/**
 * <p>
 *       Lists your Device Defender detect custom metrics.
 *     </p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListCustomMetrics</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListCustomMetricsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListCustomMetricsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new IoTClient(config);
 * const input = { // ListCustomMetricsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListCustomMetricsCommand(input);
 * const response = await client.send(command);
 * // { // ListCustomMetricsResponse
 * //   metricNames: [ // MetricNames
 * //     "STRING_VALUE",
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCustomMetricsCommandInput - {@link ListCustomMetricsCommandInput}
 * @returns {@link ListCustomMetricsCommandOutput}
 * @see {@link ListCustomMetricsCommandInput} for command's `input` shape.
 * @see {@link ListCustomMetricsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 * @public
 */
export class ListCustomMetricsCommand extends $Command
  .classBuilder<
    ListCustomMetricsCommandInput,
    ListCustomMetricsCommandOutput,
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
  .s("AWSIotService", "ListCustomMetrics", {})
  .n("IoTClient", "ListCustomMetricsCommand")
  .f(void 0, void 0)
  .ser(se_ListCustomMetricsCommand)
  .de(de_ListCustomMetricsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCustomMetricsRequest;
      output: ListCustomMetricsResponse;
    };
    sdk: {
      input: ListCustomMetricsCommandInput;
      output: ListCustomMetricsCommandOutput;
    };
  };
}
