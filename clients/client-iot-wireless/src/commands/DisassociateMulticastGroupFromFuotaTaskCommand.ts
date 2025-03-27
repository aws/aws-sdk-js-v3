// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import {
  DisassociateMulticastGroupFromFuotaTaskRequest,
  DisassociateMulticastGroupFromFuotaTaskResponse,
} from "../models/models_0";
import {
  de_DisassociateMulticastGroupFromFuotaTaskCommand,
  se_DisassociateMulticastGroupFromFuotaTaskCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateMulticastGroupFromFuotaTaskCommand}.
 */
export interface DisassociateMulticastGroupFromFuotaTaskCommandInput
  extends DisassociateMulticastGroupFromFuotaTaskRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateMulticastGroupFromFuotaTaskCommand}.
 */
export interface DisassociateMulticastGroupFromFuotaTaskCommandOutput
  extends DisassociateMulticastGroupFromFuotaTaskResponse,
    __MetadataBearer {}

/**
 * <p>Disassociates a multicast group from a FUOTA task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, DisassociateMulticastGroupFromFuotaTaskCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, DisassociateMulticastGroupFromFuotaTaskCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const input = { // DisassociateMulticastGroupFromFuotaTaskRequest
 *   Id: "STRING_VALUE", // required
 *   MulticastGroupId: "STRING_VALUE", // required
 * };
 * const command = new DisassociateMulticastGroupFromFuotaTaskCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateMulticastGroupFromFuotaTaskCommandInput - {@link DisassociateMulticastGroupFromFuotaTaskCommandInput}
 * @returns {@link DisassociateMulticastGroupFromFuotaTaskCommandOutput}
 * @see {@link DisassociateMulticastGroupFromFuotaTaskCommandInput} for command's `input` shape.
 * @see {@link DisassociateMulticastGroupFromFuotaTaskCommandOutput} for command's `response` shape.
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
 * @throws {@link ValidationException} (client fault)
 *  <p>The input did not meet the specified constraints.</p>
 *
 * @throws {@link IoTWirelessServiceException}
 * <p>Base exception class for all service exceptions from IoTWireless service.</p>
 *
 *
 * @public
 */
export class DisassociateMulticastGroupFromFuotaTaskCommand extends $Command
  .classBuilder<
    DisassociateMulticastGroupFromFuotaTaskCommandInput,
    DisassociateMulticastGroupFromFuotaTaskCommandOutput,
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
  .s("iotwireless", "DisassociateMulticastGroupFromFuotaTask", {})
  .n("IoTWirelessClient", "DisassociateMulticastGroupFromFuotaTaskCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateMulticastGroupFromFuotaTaskCommand)
  .de(de_DisassociateMulticastGroupFromFuotaTaskCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateMulticastGroupFromFuotaTaskRequest;
      output: {};
    };
    sdk: {
      input: DisassociateMulticastGroupFromFuotaTaskCommandInput;
      output: DisassociateMulticastGroupFromFuotaTaskCommandOutput;
    };
  };
}
