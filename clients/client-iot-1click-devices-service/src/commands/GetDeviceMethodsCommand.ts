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
import { GetDeviceMethodsRequest, GetDeviceMethodsResponse } from "../models/models_0";
import { de_GetDeviceMethodsCommand, se_GetDeviceMethodsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDeviceMethodsCommand}.
 */
export interface GetDeviceMethodsCommandInput extends GetDeviceMethodsRequest {}
/**
 * @public
 *
 * The output of {@link GetDeviceMethodsCommand}.
 */
export interface GetDeviceMethodsCommandOutput extends GetDeviceMethodsResponse, __MetadataBearer {}

/**
 * <p>Given a device ID, returns the invokable methods associated with the device.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoT1ClickDevicesServiceClient, GetDeviceMethodsCommand } from "@aws-sdk/client-iot-1click-devices-service"; // ES Modules import
 * // const { IoT1ClickDevicesServiceClient, GetDeviceMethodsCommand } = require("@aws-sdk/client-iot-1click-devices-service"); // CommonJS import
 * const client = new IoT1ClickDevicesServiceClient(config);
 * const input = { // GetDeviceMethodsRequest
 *   DeviceId: "STRING_VALUE", // required
 * };
 * const command = new GetDeviceMethodsCommand(input);
 * const response = await client.send(command);
 * // { // GetDeviceMethodsResponse
 * //   DeviceMethods: [ // __listOfDeviceMethod
 * //     { // DeviceMethod
 * //       DeviceType: "STRING_VALUE",
 * //       MethodName: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetDeviceMethodsCommandInput - {@link GetDeviceMethodsCommandInput}
 * @returns {@link GetDeviceMethodsCommandOutput}
 * @see {@link GetDeviceMethodsCommandInput} for command's `input` shape.
 * @see {@link GetDeviceMethodsCommandOutput} for command's `response` shape.
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
export class GetDeviceMethodsCommand extends $Command
  .classBuilder<
    GetDeviceMethodsCommandInput,
    GetDeviceMethodsCommandOutput,
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
  .s("IoT1ClickDevicesService", "GetDeviceMethods", {})
  .n("IoT1ClickDevicesServiceClient", "GetDeviceMethodsCommand")
  .f(void 0, void 0)
  .ser(se_GetDeviceMethodsCommand)
  .de(de_GetDeviceMethodsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDeviceMethodsRequest;
      output: GetDeviceMethodsResponse;
    };
    sdk: {
      input: GetDeviceMethodsCommandInput;
      output: GetDeviceMethodsCommandOutput;
    };
  };
}
