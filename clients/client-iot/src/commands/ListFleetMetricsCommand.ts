// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListFleetMetricsRequest, ListFleetMetricsResponse } from "../models/models_2";
import { de_ListFleetMetricsCommand, se_ListFleetMetricsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListFleetMetricsCommand}.
 */
export interface ListFleetMetricsCommandInput extends ListFleetMetricsRequest {}
/**
 * @public
 *
 * The output of {@link ListFleetMetricsCommand}.
 */
export interface ListFleetMetricsCommandOutput extends ListFleetMetricsResponse, __MetadataBearer {}

/**
 * <p>Lists all your fleet metrics. </p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListFleetMetrics</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListFleetMetricsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListFleetMetricsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new IoTClient(config);
 * const input = { // ListFleetMetricsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListFleetMetricsCommand(input);
 * const response = await client.send(command);
 * // { // ListFleetMetricsResponse
 * //   fleetMetrics: [ // FleetMetricNameAndArnList
 * //     { // FleetMetricNameAndArn
 * //       metricName: "STRING_VALUE",
 * //       metricArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFleetMetricsCommandInput - {@link ListFleetMetricsCommandInput}
 * @returns {@link ListFleetMetricsCommandOutput}
 * @see {@link ListFleetMetricsCommandInput} for command's `input` shape.
 * @see {@link ListFleetMetricsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
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
 * @public
 */
export class ListFleetMetricsCommand extends $Command
  .classBuilder<
    ListFleetMetricsCommandInput,
    ListFleetMetricsCommandOutput,
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
  .s("AWSIotService", "ListFleetMetrics", {})
  .n("IoTClient", "ListFleetMetricsCommand")
  .f(void 0, void 0)
  .ser(se_ListFleetMetricsCommand)
  .de(de_ListFleetMetricsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFleetMetricsRequest;
      output: ListFleetMetricsResponse;
    };
    sdk: {
      input: ListFleetMetricsCommandInput;
      output: ListFleetMetricsCommandOutput;
    };
  };
}
