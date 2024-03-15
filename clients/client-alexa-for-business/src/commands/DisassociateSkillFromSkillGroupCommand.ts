// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociateSkillFromSkillGroupRequest, DisassociateSkillFromSkillGroupResponse } from "../models/models_0";
import {
  de_DisassociateSkillFromSkillGroupCommand,
  se_DisassociateSkillFromSkillGroupCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DisassociateSkillFromSkillGroupCommand}.
 */
export interface DisassociateSkillFromSkillGroupCommandInput extends DisassociateSkillFromSkillGroupRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateSkillFromSkillGroupCommand}.
 */
export interface DisassociateSkillFromSkillGroupCommandOutput
  extends DisassociateSkillFromSkillGroupResponse,
    __MetadataBearer {}

/**
 * @public
 * @deprecated Alexa For Business is no longer supported
 *
 * <p>Disassociates a skill from a skill group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, DisassociateSkillFromSkillGroupCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, DisassociateSkillFromSkillGroupCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // DisassociateSkillFromSkillGroupRequest
 *   SkillGroupArn: "STRING_VALUE",
 *   SkillId: "STRING_VALUE", // required
 * };
 * const command = new DisassociateSkillFromSkillGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateSkillFromSkillGroupCommandInput - {@link DisassociateSkillFromSkillGroupCommandInput}
 * @returns {@link DisassociateSkillFromSkillGroupCommandOutput}
 * @see {@link DisassociateSkillFromSkillGroupCommandInput} for command's `input` shape.
 * @see {@link DisassociateSkillFromSkillGroupCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>There is a concurrent modification of resources.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource is not found.</p>
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 */
export class DisassociateSkillFromSkillGroupCommand extends $Command
  .classBuilder<
    DisassociateSkillFromSkillGroupCommandInput,
    DisassociateSkillFromSkillGroupCommandOutput,
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
  .s("AlexaForBusiness", "DisassociateSkillFromSkillGroup", {})
  .n("AlexaForBusinessClient", "DisassociateSkillFromSkillGroupCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateSkillFromSkillGroupCommand)
  .de(de_DisassociateSkillFromSkillGroupCommand)
  .build() {}
