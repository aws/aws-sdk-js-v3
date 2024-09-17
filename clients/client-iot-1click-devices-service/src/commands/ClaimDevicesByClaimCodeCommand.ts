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
import { ClaimDevicesByClaimCodeRequest, ClaimDevicesByClaimCodeResponse } from "../models/models_0";
import { de_ClaimDevicesByClaimCodeCommand, se_ClaimDevicesByClaimCodeCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ClaimDevicesByClaimCodeCommand}.
 */
export interface ClaimDevicesByClaimCodeCommandInput extends ClaimDevicesByClaimCodeRequest {}
/**
 * @public
 *
 * The output of {@link ClaimDevicesByClaimCodeCommand}.
 */
export interface ClaimDevicesByClaimCodeCommandOutput extends ClaimDevicesByClaimCodeResponse, __MetadataBearer {}

/**
 * <p>Adds device(s) to your account (i.e., claim one or more devices) if and only if you
 *  received a claim code with the device(s).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoT1ClickDevicesServiceClient, ClaimDevicesByClaimCodeCommand } from "@aws-sdk/client-iot-1click-devices-service"; // ES Modules import
 * // const { IoT1ClickDevicesServiceClient, ClaimDevicesByClaimCodeCommand } = require("@aws-sdk/client-iot-1click-devices-service"); // CommonJS import
 * const client = new IoT1ClickDevicesServiceClient(config);
 * const input = { // ClaimDevicesByClaimCodeRequest
 *   ClaimCode: "STRING_VALUE", // required
 * };
 * const command = new ClaimDevicesByClaimCodeCommand(input);
 * const response = await client.send(command);
 * // { // ClaimDevicesByClaimCodeResponse
 * //   ClaimCode: "STRING_VALUE",
 * //   Total: Number("int"),
 * // };
 *
 * ```
 *
 * @param ClaimDevicesByClaimCodeCommandInput - {@link ClaimDevicesByClaimCodeCommandInput}
 * @returns {@link ClaimDevicesByClaimCodeCommandOutput}
 * @see {@link ClaimDevicesByClaimCodeCommandInput} for command's `input` shape.
 * @see {@link ClaimDevicesByClaimCodeCommandOutput} for command's `response` shape.
 * @see {@link IoT1ClickDevicesServiceClientResolvedConfig | config} for IoT1ClickDevicesServiceClient's `config` shape.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * @throws {@link IoT1ClickDevicesServiceServiceException}
 * <p>Base exception class for all service exceptions from IoT1ClickDevicesService service.</p>
 *
 * @public
 */
export class ClaimDevicesByClaimCodeCommand extends $Command
  .classBuilder<
    ClaimDevicesByClaimCodeCommandInput,
    ClaimDevicesByClaimCodeCommandOutput,
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
  .s("IoT1ClickDevicesService", "ClaimDevicesByClaimCode", {})
  .n("IoT1ClickDevicesServiceClient", "ClaimDevicesByClaimCodeCommand")
  .f(void 0, void 0)
  .ser(se_ClaimDevicesByClaimCodeCommand)
  .de(de_ClaimDevicesByClaimCodeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ClaimDevicesByClaimCodeRequest;
      output: ClaimDevicesByClaimCodeResponse;
    };
    sdk: {
      input: ClaimDevicesByClaimCodeCommandInput;
      output: ClaimDevicesByClaimCodeCommandOutput;
    };
  };
}
