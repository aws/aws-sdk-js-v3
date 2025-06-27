// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateVTLDeviceTypeInput, UpdateVTLDeviceTypeOutput } from "../models/models_0";
import { de_UpdateVTLDeviceTypeCommand, se_UpdateVTLDeviceTypeCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateVTLDeviceTypeCommand}.
 */
export interface UpdateVTLDeviceTypeCommandInput extends UpdateVTLDeviceTypeInput {}
/**
 * @public
 *
 * The output of {@link UpdateVTLDeviceTypeCommand}.
 */
export interface UpdateVTLDeviceTypeCommandOutput extends UpdateVTLDeviceTypeOutput, __MetadataBearer {}

/**
 * <p>Updates the type of medium changer in a tape gateway. When you activate a tape gateway,
 *          you select a medium changer type for the tape gateway. This operation enables you to select
 *          a different type of medium changer after a tape gateway is activated. This operation is
 *          only supported in the tape gateway type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, UpdateVTLDeviceTypeCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, UpdateVTLDeviceTypeCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // UpdateVTLDeviceTypeInput
 *   VTLDeviceARN: "STRING_VALUE", // required
 *   DeviceType: "STRING_VALUE", // required
 * };
 * const command = new UpdateVTLDeviceTypeCommand(input);
 * const response = await client.send(command);
 * // { // UpdateVTLDeviceTypeOutput
 * //   VTLDeviceARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateVTLDeviceTypeCommandInput - {@link UpdateVTLDeviceTypeCommandInput}
 * @returns {@link UpdateVTLDeviceTypeCommandOutput}
 * @see {@link UpdateVTLDeviceTypeCommandInput} for command's `input` shape.
 * @see {@link UpdateVTLDeviceTypeCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An internal server error has occurred during the request. For more information, see the
 *          error and message fields.</p>
 *
 * @throws {@link InvalidGatewayRequestException} (client fault)
 *  <p>An exception occurred because an invalid gateway request was issued to the service. For
 *          more information, see the error and message fields.</p>
 *
 * @throws {@link StorageGatewayServiceException}
 * <p>Base exception class for all service exceptions from StorageGateway service.</p>
 *
 *
 * @example To update a VTL device type
 * ```javascript
 * // Updates the type of medium changer in a gateway-VTL after a gateway-VTL is activated.
 * const input = {
 *   DeviceType: "Medium Changer",
 *   VTLDeviceARN: "arn:aws:storagegateway:us-east-1:999999999999:gateway/sgw-12A3456B/device/AMZN_SGW-1FAD4876_MEDIACHANGER_00001"
 * };
 * const command = new UpdateVTLDeviceTypeCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   VTLDeviceARN: "arn:aws:storagegateway:us-east-1:999999999999:gateway/sgw-12A3456B/device/AMZN_SGW-1FAD4876_MEDIACHANGER_00001"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateVTLDeviceTypeCommand extends $Command
  .classBuilder<
    UpdateVTLDeviceTypeCommandInput,
    UpdateVTLDeviceTypeCommandOutput,
    StorageGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: StorageGatewayClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("StorageGateway_20130630", "UpdateVTLDeviceType", {})
  .n("StorageGatewayClient", "UpdateVTLDeviceTypeCommand")
  .f(void 0, void 0)
  .ser(se_UpdateVTLDeviceTypeCommand)
  .de(de_UpdateVTLDeviceTypeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateVTLDeviceTypeInput;
      output: UpdateVTLDeviceTypeOutput;
    };
    sdk: {
      input: UpdateVTLDeviceTypeCommandInput;
      output: UpdateVTLDeviceTypeCommandOutput;
    };
  };
}
