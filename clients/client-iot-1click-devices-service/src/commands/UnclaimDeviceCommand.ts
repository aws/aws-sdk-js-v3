// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  IoT1ClickDevicesServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoT1ClickDevicesServiceClient";
import { UnclaimDeviceRequest, UnclaimDeviceResponse } from "../models/models_0";
import { de_UnclaimDeviceCommand, se_UnclaimDeviceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UnclaimDeviceCommand}.
 */
export interface UnclaimDeviceCommandInput extends UnclaimDeviceRequest {}
/**
 * @public
 *
 * The output of {@link UnclaimDeviceCommand}.
 */
export interface UnclaimDeviceCommandOutput extends UnclaimDeviceResponse, __MetadataBearer {}

/**
 * <p>Disassociates a device from your AWS account using its device ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoT1ClickDevicesServiceClient, UnclaimDeviceCommand } from "@aws-sdk/client-iot-1click-devices-service"; // ES Modules import
 * // const { IoT1ClickDevicesServiceClient, UnclaimDeviceCommand } = require("@aws-sdk/client-iot-1click-devices-service"); // CommonJS import
 * const client = new IoT1ClickDevicesServiceClient(config);
 * const input = { // UnclaimDeviceRequest
 *   DeviceId: "STRING_VALUE", // required
 * };
 * const command = new UnclaimDeviceCommand(input);
 * const response = await client.send(command);
 * // { // UnclaimDeviceResponse
 * //   State: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UnclaimDeviceCommandInput - {@link UnclaimDeviceCommandInput}
 * @returns {@link UnclaimDeviceCommandOutput}
 * @see {@link UnclaimDeviceCommandInput} for command's `input` shape.
 * @see {@link UnclaimDeviceCommandOutput} for command's `response` shape.
 * @see {@link IoT1ClickDevicesServiceClientResolvedConfig | config} for IoT1ClickDevicesServiceClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * @throws {@link IoT1ClickDevicesServiceServiceException}
 * <p>Base exception class for all service exceptions from IoT1ClickDevicesService service.</p>
 *
 * @public
 */
export class UnclaimDeviceCommand extends $Command
  .classBuilder<
    UnclaimDeviceCommandInput,
    UnclaimDeviceCommandOutput,
    IoT1ClickDevicesServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoT1ClickDevicesServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("IoT1ClickDevicesService", "UnclaimDevice", {})
  .n("IoT1ClickDevicesServiceClient", "UnclaimDeviceCommand")
  .f(void 0, void 0)
  .ser(se_UnclaimDeviceCommand)
  .de(de_UnclaimDeviceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UnclaimDeviceRequest;
      output: UnclaimDeviceResponse;
    };
    sdk: {
      input: UnclaimDeviceCommandInput;
      output: UnclaimDeviceCommandOutput;
    };
  };
}
