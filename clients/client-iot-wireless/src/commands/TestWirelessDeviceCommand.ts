// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { TestWirelessDeviceRequest, TestWirelessDeviceResponse } from "../models/models_1";
import { de_TestWirelessDeviceCommand, se_TestWirelessDeviceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link TestWirelessDeviceCommand}.
 */
export interface TestWirelessDeviceCommandInput extends TestWirelessDeviceRequest {}
/**
 * @public
 *
 * The output of {@link TestWirelessDeviceCommand}.
 */
export interface TestWirelessDeviceCommandOutput extends TestWirelessDeviceResponse, __MetadataBearer {}

/**
 * <p>Simulates a provisioned device by sending an uplink data payload of
 *             <code>Hello</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, TestWirelessDeviceCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, TestWirelessDeviceCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const input = { // TestWirelessDeviceRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new TestWirelessDeviceCommand(input);
 * const response = await client.send(command);
 * // { // TestWirelessDeviceResponse
 * //   Result: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param TestWirelessDeviceCommandInput - {@link TestWirelessDeviceCommandInput}
 * @returns {@link TestWirelessDeviceCommandOutput}
 * @see {@link TestWirelessDeviceCommandInput} for command's `input` shape.
 * @see {@link TestWirelessDeviceCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
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
 * @public
 */
export class TestWirelessDeviceCommand extends $Command
  .classBuilder<
    TestWirelessDeviceCommandInput,
    TestWirelessDeviceCommandOutput,
    IoTWirelessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: IoTWirelessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("iotwireless", "TestWirelessDevice", {})
  .n("IoTWirelessClient", "TestWirelessDeviceCommand")
  .f(void 0, void 0)
  .ser(se_TestWirelessDeviceCommand)
  .de(de_TestWirelessDeviceCommand)
  .build() {}
