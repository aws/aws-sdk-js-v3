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
import { InitiateDeviceClaimRequest, InitiateDeviceClaimResponse } from "../models/models_0";
import { de_InitiateDeviceClaimCommand, se_InitiateDeviceClaimCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link InitiateDeviceClaimCommand}.
 */
export interface InitiateDeviceClaimCommandInput extends InitiateDeviceClaimRequest {}
/**
 * @public
 *
 * The output of {@link InitiateDeviceClaimCommand}.
 */
export interface InitiateDeviceClaimCommandOutput extends InitiateDeviceClaimResponse, __MetadataBearer {}

/**
 * <p>Given a device ID, initiates a claim request for the associated device.</p><note>
 *  <p>Claiming a device consists of initiating a claim, then publishing a device event,
 *  and finalizing the claim. For a device of type button, a device event can
 *  be published by simply clicking the device.</p>
 *  </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoT1ClickDevicesServiceClient, InitiateDeviceClaimCommand } from "@aws-sdk/client-iot-1click-devices-service"; // ES Modules import
 * // const { IoT1ClickDevicesServiceClient, InitiateDeviceClaimCommand } = require("@aws-sdk/client-iot-1click-devices-service"); // CommonJS import
 * const client = new IoT1ClickDevicesServiceClient(config);
 * const input = { // InitiateDeviceClaimRequest
 *   DeviceId: "STRING_VALUE", // required
 * };
 * const command = new InitiateDeviceClaimCommand(input);
 * const response = await client.send(command);
 * // { // InitiateDeviceClaimResponse
 * //   State: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param InitiateDeviceClaimCommandInput - {@link InitiateDeviceClaimCommandInput}
 * @returns {@link InitiateDeviceClaimCommandOutput}
 * @see {@link InitiateDeviceClaimCommandInput} for command's `input` shape.
 * @see {@link InitiateDeviceClaimCommandOutput} for command's `response` shape.
 * @see {@link IoT1ClickDevicesServiceClientResolvedConfig | config} for IoT1ClickDevicesServiceClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * @throws {@link InvalidRequestException} (client fault)
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
export class InitiateDeviceClaimCommand extends $Command
  .classBuilder<
    InitiateDeviceClaimCommandInput,
    InitiateDeviceClaimCommandOutput,
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
  .s("IoT1ClickDevicesService", "InitiateDeviceClaim", {})
  .n("IoT1ClickDevicesServiceClient", "InitiateDeviceClaimCommand")
  .f(void 0, void 0)
  .ser(se_InitiateDeviceClaimCommand)
  .de(de_InitiateDeviceClaimCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: InitiateDeviceClaimRequest;
      output: InitiateDeviceClaimResponse;
    };
    sdk: {
      input: InitiateDeviceClaimCommandInput;
      output: InitiateDeviceClaimCommandOutput;
    };
  };
}
