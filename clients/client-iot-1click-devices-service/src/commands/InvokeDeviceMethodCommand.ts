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
import { InvokeDeviceMethodRequest, InvokeDeviceMethodResponse } from "../models/models_0";
import { de_InvokeDeviceMethodCommand, se_InvokeDeviceMethodCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link InvokeDeviceMethodCommand}.
 */
export interface InvokeDeviceMethodCommandInput extends InvokeDeviceMethodRequest {}
/**
 * @public
 *
 * The output of {@link InvokeDeviceMethodCommand}.
 */
export interface InvokeDeviceMethodCommandOutput extends InvokeDeviceMethodResponse, __MetadataBearer {}

/**
 * <p>Given a device ID, issues a request to invoke a named device method (with possible
 *  parameters). See the "Example POST" code snippet below.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoT1ClickDevicesServiceClient, InvokeDeviceMethodCommand } from "@aws-sdk/client-iot-1click-devices-service"; // ES Modules import
 * // const { IoT1ClickDevicesServiceClient, InvokeDeviceMethodCommand } = require("@aws-sdk/client-iot-1click-devices-service"); // CommonJS import
 * const client = new IoT1ClickDevicesServiceClient(config);
 * const input = { // InvokeDeviceMethodRequest
 *   DeviceId: "STRING_VALUE", // required
 *   DeviceMethod: { // DeviceMethod
 *     DeviceType: "STRING_VALUE",
 *     MethodName: "STRING_VALUE",
 *   },
 *   DeviceMethodParameters: "STRING_VALUE",
 * };
 * const command = new InvokeDeviceMethodCommand(input);
 * const response = await client.send(command);
 * // { // InvokeDeviceMethodResponse
 * //   DeviceMethodResponse: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param InvokeDeviceMethodCommandInput - {@link InvokeDeviceMethodCommandInput}
 * @returns {@link InvokeDeviceMethodCommandOutput}
 * @see {@link InvokeDeviceMethodCommandInput} for command's `input` shape.
 * @see {@link InvokeDeviceMethodCommandOutput} for command's `response` shape.
 * @see {@link IoT1ClickDevicesServiceClientResolvedConfig | config} for IoT1ClickDevicesServiceClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * @throws {@link PreconditionFailedException} (client fault)
 *
 * @throws {@link RangeNotSatisfiableException} (client fault)
 *
 * @throws {@link ResourceConflictException} (client fault)
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * @throws {@link IoT1ClickDevicesServiceServiceException}
 * <p>Base exception class for all service exceptions from IoT1ClickDevicesService service.</p>
 *
 * @public
 */
export class InvokeDeviceMethodCommand extends $Command
  .classBuilder<
    InvokeDeviceMethodCommandInput,
    InvokeDeviceMethodCommandOutput,
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
  .s("IoT1ClickDevicesService", "InvokeDeviceMethod", {})
  .n("IoT1ClickDevicesServiceClient", "InvokeDeviceMethodCommand")
  .f(void 0, void 0)
  .ser(se_InvokeDeviceMethodCommand)
  .de(de_InvokeDeviceMethodCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: InvokeDeviceMethodRequest;
      output: InvokeDeviceMethodResponse;
    };
    sdk: {
      input: InvokeDeviceMethodCommandInput;
      output: InvokeDeviceMethodCommandOutput;
    };
  };
}
