// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateSkillWithSkillGroupRequest, AssociateSkillWithSkillGroupResponse } from "../models/models_0";
import {
  de_AssociateSkillWithSkillGroupCommand,
  se_AssociateSkillWithSkillGroupCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AssociateSkillWithSkillGroupCommand}.
 */
export interface AssociateSkillWithSkillGroupCommandInput extends AssociateSkillWithSkillGroupRequest {}
/**
 * @public
 *
 * The output of {@link AssociateSkillWithSkillGroupCommand}.
 */
export interface AssociateSkillWithSkillGroupCommandOutput
  extends AssociateSkillWithSkillGroupResponse,
    __MetadataBearer {}

/**
 * @public
 * @deprecated Alexa For Business is no longer supported
 *
 * <p>Associates a skill with a skill group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, AssociateSkillWithSkillGroupCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, AssociateSkillWithSkillGroupCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // AssociateSkillWithSkillGroupRequest
 *   SkillGroupArn: "STRING_VALUE",
 *   SkillId: "STRING_VALUE", // required
 * };
 * const command = new AssociateSkillWithSkillGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateSkillWithSkillGroupCommandInput - {@link AssociateSkillWithSkillGroupCommandInput}
 * @returns {@link AssociateSkillWithSkillGroupCommandOutput}
 * @see {@link AssociateSkillWithSkillGroupCommandInput} for command's `input` shape.
 * @see {@link AssociateSkillWithSkillGroupCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>There is a concurrent modification of resources.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource is not found.</p>
 *
 * @throws {@link SkillNotLinkedException} (client fault)
 *  <p>The skill must be linked to a third-party account.</p>
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 */
export class AssociateSkillWithSkillGroupCommand extends $Command
  .classBuilder<
    AssociateSkillWithSkillGroupCommandInput,
    AssociateSkillWithSkillGroupCommandOutput,
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
  .s("AlexaForBusiness", "AssociateSkillWithSkillGroup", {})
  .n("AlexaForBusinessClient", "AssociateSkillWithSkillGroupCommand")
  .f(void 0, void 0)
  .ser(se_AssociateSkillWithSkillGroupCommand)
  .de(de_AssociateSkillWithSkillGroupCommand)
  .build() {}
