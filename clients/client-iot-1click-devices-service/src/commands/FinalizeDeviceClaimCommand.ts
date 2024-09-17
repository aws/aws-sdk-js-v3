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
import { FinalizeDeviceClaimRequest, FinalizeDeviceClaimResponse } from "../models/models_0";
import { de_FinalizeDeviceClaimCommand, se_FinalizeDeviceClaimCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link FinalizeDeviceClaimCommand}.
 */
export interface FinalizeDeviceClaimCommandInput extends FinalizeDeviceClaimRequest {}
/**
 * @public
 *
 * The output of {@link FinalizeDeviceClaimCommand}.
 */
export interface FinalizeDeviceClaimCommandOutput extends FinalizeDeviceClaimResponse, __MetadataBearer {}

/**
 * <p>Given a device ID, finalizes the claim request for the associated device.</p><note>
 *  <p>Claiming a device consists of initiating a claim, then publishing a device event,
 *  and finalizing the claim. For a device of type button, a device event can
 *  be published by simply clicking the device.</p>
 *  </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoT1ClickDevicesServiceClient, FinalizeDeviceClaimCommand } from "@aws-sdk/client-iot-1click-devices-service"; // ES Modules import
 * // const { IoT1ClickDevicesServiceClient, FinalizeDeviceClaimCommand } = require("@aws-sdk/client-iot-1click-devices-service"); // CommonJS import
 * const client = new IoT1ClickDevicesServiceClient(config);
 * const input = { // FinalizeDeviceClaimRequest
 *   DeviceId: "STRING_VALUE", // required
 *   Tags: { // __mapOf__string
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new FinalizeDeviceClaimCommand(input);
 * const response = await client.send(command);
 * // { // FinalizeDeviceClaimResponse
 * //   State: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param FinalizeDeviceClaimCommandInput - {@link FinalizeDeviceClaimCommandInput}
 * @returns {@link FinalizeDeviceClaimCommandOutput}
 * @see {@link FinalizeDeviceClaimCommandInput} for command's `input` shape.
 * @see {@link FinalizeDeviceClaimCommandOutput} for command's `response` shape.
 * @see {@link IoT1ClickDevicesServiceClientResolvedConfig | config} for IoT1ClickDevicesServiceClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * @throws {@link PreconditionFailedException} (client fault)
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
export class FinalizeDeviceClaimCommand extends $Command
  .classBuilder<
    FinalizeDeviceClaimCommandInput,
    FinalizeDeviceClaimCommandOutput,
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
  .s("IoT1ClickDevicesService", "FinalizeDeviceClaim", {})
  .n("IoT1ClickDevicesServiceClient", "FinalizeDeviceClaimCommand")
  .f(void 0, void 0)
  .ser(se_FinalizeDeviceClaimCommand)
  .de(de_FinalizeDeviceClaimCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: FinalizeDeviceClaimRequest;
      output: FinalizeDeviceClaimResponse;
    };
    sdk: {
      input: FinalizeDeviceClaimCommandInput;
      output: FinalizeDeviceClaimCommandOutput;
    };
  };
}
