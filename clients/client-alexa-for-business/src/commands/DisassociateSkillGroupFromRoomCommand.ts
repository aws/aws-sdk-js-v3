// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociateSkillGroupFromRoomRequest, DisassociateSkillGroupFromRoomResponse } from "../models/models_0";
import {
  de_DisassociateSkillGroupFromRoomCommand,
  se_DisassociateSkillGroupFromRoomCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DisassociateSkillGroupFromRoomCommand}.
 */
export interface DisassociateSkillGroupFromRoomCommandInput extends DisassociateSkillGroupFromRoomRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateSkillGroupFromRoomCommand}.
 */
export interface DisassociateSkillGroupFromRoomCommandOutput
  extends DisassociateSkillGroupFromRoomResponse,
    __MetadataBearer {}

/**
 * @public
 * @deprecated Alexa For Business is no longer supported
 *
 * <p>Disassociates a skill group from a specified room. This disables all skills in the
 *          skill group on all devices in the room.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, DisassociateSkillGroupFromRoomCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, DisassociateSkillGroupFromRoomCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // DisassociateSkillGroupFromRoomRequest
 *   SkillGroupArn: "STRING_VALUE",
 *   RoomArn: "STRING_VALUE",
 * };
 * const command = new DisassociateSkillGroupFromRoomCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateSkillGroupFromRoomCommandInput - {@link DisassociateSkillGroupFromRoomCommandInput}
 * @returns {@link DisassociateSkillGroupFromRoomCommandOutput}
 * @see {@link DisassociateSkillGroupFromRoomCommandInput} for command's `input` shape.
 * @see {@link DisassociateSkillGroupFromRoomCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>There is a concurrent modification of resources.</p>
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 */
export class DisassociateSkillGroupFromRoomCommand extends $Command
  .classBuilder<
    DisassociateSkillGroupFromRoomCommandInput,
    DisassociateSkillGroupFromRoomCommandOutput,
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
  .s("AlexaForBusiness", "DisassociateSkillGroupFromRoom", {})
  .n("AlexaForBusinessClient", "DisassociateSkillGroupFromRoomCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateSkillGroupFromRoomCommand)
  .de(de_DisassociateSkillGroupFromRoomCommand)
  .build() {}
