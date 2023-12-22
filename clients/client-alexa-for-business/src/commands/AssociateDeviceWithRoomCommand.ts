// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateDeviceWithRoomRequest, AssociateDeviceWithRoomResponse } from "../models/models_0";
import { de_AssociateDeviceWithRoomCommand, se_AssociateDeviceWithRoomCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AssociateDeviceWithRoomCommand}.
 */
export interface AssociateDeviceWithRoomCommandInput extends AssociateDeviceWithRoomRequest {}
/**
 * @public
 *
 * The output of {@link AssociateDeviceWithRoomCommand}.
 */
export interface AssociateDeviceWithRoomCommandOutput extends AssociateDeviceWithRoomResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Associates a device with a given room. This applies all the settings from the room
 *          profile to the device, and all the skills in any skill groups added to that room. This
 *          operation requires the device to be online, or else a manual sync is required. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, AssociateDeviceWithRoomCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, AssociateDeviceWithRoomCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // AssociateDeviceWithRoomRequest
 *   DeviceArn: "STRING_VALUE",
 *   RoomArn: "STRING_VALUE",
 * };
 * const command = new AssociateDeviceWithRoomCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateDeviceWithRoomCommandInput - {@link AssociateDeviceWithRoomCommandInput}
 * @returns {@link AssociateDeviceWithRoomCommandOutput}
 * @see {@link AssociateDeviceWithRoomCommandInput} for command's `input` shape.
 * @see {@link AssociateDeviceWithRoomCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>There is a concurrent modification of resources.</p>
 *
 * @throws {@link DeviceNotRegisteredException} (client fault)
 *  <p>The request failed because this device is no longer registered and therefore no longer managed by this account.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You are performing an action that would put you beyond your account's limits.</p>
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 */
export class AssociateDeviceWithRoomCommand extends $Command
  .classBuilder<
    AssociateDeviceWithRoomCommandInput,
    AssociateDeviceWithRoomCommandOutput,
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
  .s("AlexaForBusiness", "AssociateDeviceWithRoom", {})
  .n("AlexaForBusinessClient", "AssociateDeviceWithRoomCommand")
  .f(void 0, void 0)
  .ser(se_AssociateDeviceWithRoomCommand)
  .de(de_AssociateDeviceWithRoomCommand)
  .build() {}
