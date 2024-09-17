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
import { UpdateDeviceStateRequest, UpdateDeviceStateResponse } from "../models/models_0";
import { de_UpdateDeviceStateCommand, se_UpdateDeviceStateCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDeviceStateCommand}.
 */
export interface UpdateDeviceStateCommandInput extends UpdateDeviceStateRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDeviceStateCommand}.
 */
export interface UpdateDeviceStateCommandOutput extends UpdateDeviceStateResponse, __MetadataBearer {}

/**
 * <p>Using a Boolean value (true or false), this operation
 *  enables or disables the device given a device ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoT1ClickDevicesServiceClient, UpdateDeviceStateCommand } from "@aws-sdk/client-iot-1click-devices-service"; // ES Modules import
 * // const { IoT1ClickDevicesServiceClient, UpdateDeviceStateCommand } = require("@aws-sdk/client-iot-1click-devices-service"); // CommonJS import
 * const client = new IoT1ClickDevicesServiceClient(config);
 * const input = { // UpdateDeviceStateRequest
 *   DeviceId: "STRING_VALUE", // required
 *   Enabled: true || false,
 * };
 * const command = new UpdateDeviceStateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateDeviceStateCommandInput - {@link UpdateDeviceStateCommandInput}
 * @returns {@link UpdateDeviceStateCommandOutput}
 * @see {@link UpdateDeviceStateCommandInput} for command's `input` shape.
 * @see {@link UpdateDeviceStateCommandOutput} for command's `response` shape.
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
export class UpdateDeviceStateCommand extends $Command
  .classBuilder<
    UpdateDeviceStateCommandInput,
    UpdateDeviceStateCommandOutput,
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
  .s("IoT1ClickDevicesService", "UpdateDeviceState", {})
  .n("IoT1ClickDevicesServiceClient", "UpdateDeviceStateCommand")
  .f(void 0, void 0)
  .ser(se_UpdateDeviceStateCommand)
  .de(de_UpdateDeviceStateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDeviceStateRequest;
      output: {};
    };
    sdk: {
      input: UpdateDeviceStateCommandInput;
      output: UpdateDeviceStateCommandOutput;
    };
  };
}
