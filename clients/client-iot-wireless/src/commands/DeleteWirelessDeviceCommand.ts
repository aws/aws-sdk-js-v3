// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import type { DeleteWirelessDeviceRequest, DeleteWirelessDeviceResponse } from "../models/models_0";
import { DeleteWirelessDevice } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteWirelessDeviceCommand}.
 */
export interface DeleteWirelessDeviceCommandInput extends DeleteWirelessDeviceRequest {}
/**
 * @public
 *
 * The output of {@link DeleteWirelessDeviceCommand}.
 */
export interface DeleteWirelessDeviceCommandOutput extends DeleteWirelessDeviceResponse, __MetadataBearer {}

/**
 * <p>Deletes a wireless device.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, DeleteWirelessDeviceCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, DeleteWirelessDeviceCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
 * const client = new IoTWirelessClient(config);
 * const input = { // DeleteWirelessDeviceRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new DeleteWirelessDeviceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteWirelessDeviceCommandInput - {@link DeleteWirelessDeviceCommandInput}
 * @returns {@link DeleteWirelessDeviceCommandOutput}
 * @see {@link DeleteWirelessDeviceCommandInput} for command's `input` shape.
 * @see {@link DeleteWirelessDeviceCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have permission to perform this action.</p>
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
export class DeleteWirelessDeviceCommand extends $Command
  .classBuilder<
    DeleteWirelessDeviceCommandInput,
    DeleteWirelessDeviceCommandOutput,
    IoTWirelessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTWirelessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("iotwireless", "DeleteWirelessDevice", {})
  .n("IoTWirelessClient", "DeleteWirelessDeviceCommand")
  .sc(DeleteWirelessDevice)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteWirelessDeviceRequest;
      output: {};
    };
    sdk: {
      input: DeleteWirelessDeviceCommandInput;
      output: DeleteWirelessDeviceCommandOutput;
    };
  };
}
