// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import {
  DisassociateWirelessDeviceFromFuotaTaskRequest,
  DisassociateWirelessDeviceFromFuotaTaskResponse,
} from "../models/models_0";
import {
  de_DisassociateWirelessDeviceFromFuotaTaskCommand,
  se_DisassociateWirelessDeviceFromFuotaTaskCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateWirelessDeviceFromFuotaTaskCommand}.
 */
export interface DisassociateWirelessDeviceFromFuotaTaskCommandInput
  extends DisassociateWirelessDeviceFromFuotaTaskRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateWirelessDeviceFromFuotaTaskCommand}.
 */
export interface DisassociateWirelessDeviceFromFuotaTaskCommandOutput
  extends DisassociateWirelessDeviceFromFuotaTaskResponse,
    __MetadataBearer {}

/**
 * <p>Disassociates a wireless device from a FUOTA task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, DisassociateWirelessDeviceFromFuotaTaskCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, DisassociateWirelessDeviceFromFuotaTaskCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
 * const client = new IoTWirelessClient(config);
 * const input = { // DisassociateWirelessDeviceFromFuotaTaskRequest
 *   Id: "STRING_VALUE", // required
 *   WirelessDeviceId: "STRING_VALUE", // required
 * };
 * const command = new DisassociateWirelessDeviceFromFuotaTaskCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateWirelessDeviceFromFuotaTaskCommandInput - {@link DisassociateWirelessDeviceFromFuotaTaskCommandInput}
 * @returns {@link DisassociateWirelessDeviceFromFuotaTaskCommandOutput}
 * @see {@link DisassociateWirelessDeviceFromFuotaTaskCommandInput} for command's `input` shape.
 * @see {@link DisassociateWirelessDeviceFromFuotaTaskCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have permission to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Adding, updating, or deleting the resource can cause an inconsistent state.</p>
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
export class DisassociateWirelessDeviceFromFuotaTaskCommand extends $Command
  .classBuilder<
    DisassociateWirelessDeviceFromFuotaTaskCommandInput,
    DisassociateWirelessDeviceFromFuotaTaskCommandOutput,
    IoTWirelessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTWirelessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("iotwireless", "DisassociateWirelessDeviceFromFuotaTask", {})
  .n("IoTWirelessClient", "DisassociateWirelessDeviceFromFuotaTaskCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateWirelessDeviceFromFuotaTaskCommand)
  .de(de_DisassociateWirelessDeviceFromFuotaTaskCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateWirelessDeviceFromFuotaTaskRequest;
      output: {};
    };
    sdk: {
      input: DisassociateWirelessDeviceFromFuotaTaskCommandInput;
      output: DisassociateWirelessDeviceFromFuotaTaskCommandOutput;
    };
  };
}
