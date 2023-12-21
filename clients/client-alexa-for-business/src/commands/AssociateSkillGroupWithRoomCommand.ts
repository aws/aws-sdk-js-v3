// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateSkillGroupWithRoomRequest, AssociateSkillGroupWithRoomResponse } from "../models/models_0";
import { de_AssociateSkillGroupWithRoomCommand, se_AssociateSkillGroupWithRoomCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AssociateSkillGroupWithRoomCommand}.
 */
export interface AssociateSkillGroupWithRoomCommandInput extends AssociateSkillGroupWithRoomRequest {}
/**
 * @public
 *
 * The output of {@link AssociateSkillGroupWithRoomCommand}.
 */
export interface AssociateSkillGroupWithRoomCommandOutput
  extends AssociateSkillGroupWithRoomResponse,
    __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Associates a skill group with a given room. This enables all skills in the associated
 *          skill group on all devices in the room.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, AssociateSkillGroupWithRoomCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, AssociateSkillGroupWithRoomCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // AssociateSkillGroupWithRoomRequest
 *   SkillGroupArn: "STRING_VALUE",
 *   RoomArn: "STRING_VALUE",
 * };
 * const command = new AssociateSkillGroupWithRoomCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateSkillGroupWithRoomCommandInput - {@link AssociateSkillGroupWithRoomCommandInput}
 * @returns {@link AssociateSkillGroupWithRoomCommandOutput}
 * @see {@link AssociateSkillGroupWithRoomCommandInput} for command's `input` shape.
 * @see {@link AssociateSkillGroupWithRoomCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>There is a concurrent modification of resources.</p>
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 */
export class AssociateSkillGroupWithRoomCommand extends $Command
  .classBuilder<
    AssociateSkillGroupWithRoomCommandInput,
    AssociateSkillGroupWithRoomCommandOutput,
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
  .s("AlexaForBusiness", "AssociateSkillGroupWithRoom", {})
  .n("AlexaForBusinessClient", "AssociateSkillGroupWithRoomCommand")
  .f(void 0, void 0)
  .ser(se_AssociateSkillGroupWithRoomCommand)
  .de(de_AssociateSkillGroupWithRoomCommand)
  .build() {}
