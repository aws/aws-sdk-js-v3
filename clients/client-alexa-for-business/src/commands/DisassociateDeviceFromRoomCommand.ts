// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociateDeviceFromRoomRequest, DisassociateDeviceFromRoomResponse } from "../models/models_0";
import { de_DisassociateDeviceFromRoomCommand, se_DisassociateDeviceFromRoomCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DisassociateDeviceFromRoomCommand}.
 */
export interface DisassociateDeviceFromRoomCommandInput extends DisassociateDeviceFromRoomRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateDeviceFromRoomCommand}.
 */
export interface DisassociateDeviceFromRoomCommandOutput extends DisassociateDeviceFromRoomResponse, __MetadataBearer {}

/**
 * <p>Disassociates a device from its current room. The device continues to be connected to
 *          the Wi-Fi network and is still registered to the account. The device settings and skills
 *          are removed from the room.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, DisassociateDeviceFromRoomCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, DisassociateDeviceFromRoomCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // DisassociateDeviceFromRoomRequest
 *   DeviceArn: "STRING_VALUE",
 * };
 * const command = new DisassociateDeviceFromRoomCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateDeviceFromRoomCommandInput - {@link DisassociateDeviceFromRoomCommandInput}
 * @returns {@link DisassociateDeviceFromRoomCommandOutput}
 * @see {@link DisassociateDeviceFromRoomCommandInput} for command's `input` shape.
 * @see {@link DisassociateDeviceFromRoomCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>There is a concurrent modification of resources.</p>
 *
 * @throws {@link DeviceNotRegisteredException} (client fault)
 *  <p>The request failed because this device is no longer registered and therefore no longer managed by this account.</p>
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 * @public
 * @deprecated Alexa For Business is no longer supported
 */
export class DisassociateDeviceFromRoomCommand extends $Command
  .classBuilder<
    DisassociateDeviceFromRoomCommandInput,
    DisassociateDeviceFromRoomCommandOutput,
    AlexaForBusinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AlexaForBusinessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AlexaForBusiness", "DisassociateDeviceFromRoom", {})
  .n("AlexaForBusinessClient", "DisassociateDeviceFromRoomCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateDeviceFromRoomCommand)
  .de(de_DisassociateDeviceFromRoomCommand)
  .build() {}
