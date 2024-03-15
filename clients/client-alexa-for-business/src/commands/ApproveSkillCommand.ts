// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ApproveSkillRequest, ApproveSkillResponse } from "../models/models_0";
import { de_ApproveSkillCommand, se_ApproveSkillCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ApproveSkillCommand}.
 */
export interface ApproveSkillCommandInput extends ApproveSkillRequest {}
/**
 * @public
 *
 * The output of {@link ApproveSkillCommand}.
 */
export interface ApproveSkillCommandOutput extends ApproveSkillResponse, __MetadataBearer {}

/**
 * <p>Associates a skill with the organization under the customer's AWS account. If a skill
 *          is private, the user implicitly accepts access to this skill during enablement.</p>
 *
 * @deprecated Alexa For Business is no longer supported
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, ApproveSkillCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, ApproveSkillCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // ApproveSkillRequest
 *   SkillId: "STRING_VALUE", // required
 * };
 * const command = new ApproveSkillCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ApproveSkillCommandInput - {@link ApproveSkillCommandInput}
 * @returns {@link ApproveSkillCommandOutput}
 * @see {@link ApproveSkillCommandInput} for command's `input` shape.
 * @see {@link ApproveSkillCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>There is a concurrent modification of resources.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You are performing an action that would put you beyond your account's limits.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource is not found.</p>
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 * @public
 */
export class ApproveSkillCommand extends $Command
  .classBuilder<
    ApproveSkillCommandInput,
    ApproveSkillCommandOutput,
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
  .s("AlexaForBusiness", "ApproveSkill", {})
  .n("AlexaForBusinessClient", "ApproveSkillCommand")
  .f(void 0, void 0)
  .ser(se_ApproveSkillCommand)
  .de(de_ApproveSkillCommand)
  .build() {}
