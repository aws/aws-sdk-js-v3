// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { GetMetricConfigurationRequest, GetMetricConfigurationResponse } from "../models/models_0";
import { de_GetMetricConfigurationCommand, se_GetMetricConfigurationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetMetricConfigurationCommand}.
 */
export interface GetMetricConfigurationCommandInput extends GetMetricConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetMetricConfigurationCommand}.
 */
export interface GetMetricConfigurationCommandOutput extends GetMetricConfigurationResponse, __MetadataBearer {}

/**
 * <p>Get the metric configuration status for this AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, GetMetricConfigurationCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, GetMetricConfigurationCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
 * const client = new IoTWirelessClient(config);
 * const input = {};
 * const command = new GetMetricConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetMetricConfigurationResponse
 * //   SummaryMetric: { // SummaryMetricConfiguration
 * //     Status: "Enabled" || "Disabled",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetMetricConfigurationCommandInput - {@link GetMetricConfigurationCommandInput}
 * @returns {@link GetMetricConfigurationCommandOutput}
 * @see {@link GetMetricConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetMetricConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have permission to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Adding, updating, or deleting the resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing a request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because it exceeded the allowed API request rate.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input did not meet the specified constraints.</p>
 *
 * @throws {@link IoTWirelessServiceException}
 * <p>Base exception class for all service exceptions from IoTWireless service.</p>
 *
 *
 * @public
 */
export class GetMetricConfigurationCommand extends $Command
  .classBuilder<
    GetMetricConfigurationCommandInput,
    GetMetricConfigurationCommandOutput,
    IoTWirelessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTWirelessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("iotwireless", "GetMetricConfiguration", {})
  .n("IoTWirelessClient", "GetMetricConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_GetMetricConfigurationCommand)
  .de(de_GetMetricConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetMetricConfigurationResponse;
    };
    sdk: {
      input: GetMetricConfigurationCommandInput;
      output: GetMetricConfigurationCommandOutput;
    };
  };
}
