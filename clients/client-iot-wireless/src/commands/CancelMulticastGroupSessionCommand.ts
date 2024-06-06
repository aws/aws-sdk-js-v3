// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { CancelMulticastGroupSessionRequest, CancelMulticastGroupSessionResponse } from "../models/models_0";
import {
  de_CancelMulticastGroupSessionCommand,
  se_CancelMulticastGroupSessionCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelMulticastGroupSessionCommand}.
 */
export interface CancelMulticastGroupSessionCommandInput extends CancelMulticastGroupSessionRequest {}
/**
 * @public
 *
 * The output of {@link CancelMulticastGroupSessionCommand}.
 */
export interface CancelMulticastGroupSessionCommandOutput
  extends CancelMulticastGroupSessionResponse,
    __MetadataBearer {}

/**
 * <p>Cancels an existing multicast group session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, CancelMulticastGroupSessionCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, CancelMulticastGroupSessionCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const input = { // CancelMulticastGroupSessionRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new CancelMulticastGroupSessionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CancelMulticastGroupSessionCommandInput - {@link CancelMulticastGroupSessionCommandInput}
 * @returns {@link CancelMulticastGroupSessionCommandOutput}
 * @see {@link CancelMulticastGroupSessionCommandInput} for command's `input` shape.
 * @see {@link CancelMulticastGroupSessionCommandOutput} for command's `response` shape.
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
 * @public
 */
export class CancelMulticastGroupSessionCommand extends $Command
  .classBuilder<
    CancelMulticastGroupSessionCommandInput,
    CancelMulticastGroupSessionCommandOutput,
    IoTWirelessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: IoTWirelessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("iotwireless", "CancelMulticastGroupSession", {})
  .n("IoTWirelessClient", "CancelMulticastGroupSessionCommand")
  .f(void 0, void 0)
  .ser(se_CancelMulticastGroupSessionCommand)
  .de(de_CancelMulticastGroupSessionCommand)
  .build() {}
