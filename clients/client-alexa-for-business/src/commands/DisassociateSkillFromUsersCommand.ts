// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociateSkillFromUsersRequest, DisassociateSkillFromUsersResponse } from "../models/models_0";
import { de_DisassociateSkillFromUsersCommand, se_DisassociateSkillFromUsersCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DisassociateSkillFromUsersCommand}.
 */
export interface DisassociateSkillFromUsersCommandInput extends DisassociateSkillFromUsersRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateSkillFromUsersCommand}.
 */
export interface DisassociateSkillFromUsersCommandOutput extends DisassociateSkillFromUsersResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Makes a private skill unavailable for enrolled users and prevents them from enabling it
 *          on their devices.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, DisassociateSkillFromUsersCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, DisassociateSkillFromUsersCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // DisassociateSkillFromUsersRequest
 *   SkillId: "STRING_VALUE", // required
 * };
 * const command = new DisassociateSkillFromUsersCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateSkillFromUsersCommandInput - {@link DisassociateSkillFromUsersCommandInput}
 * @returns {@link DisassociateSkillFromUsersCommandOutput}
 * @see {@link DisassociateSkillFromUsersCommandInput} for command's `input` shape.
 * @see {@link DisassociateSkillFromUsersCommandOutput} for command's `response` shape.
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
export class DisassociateSkillFromUsersCommand extends $Command
  .classBuilder<
    DisassociateSkillFromUsersCommandInput,
    DisassociateSkillFromUsersCommandOutput,
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
  .s("AlexaForBusiness", "DisassociateSkillFromUsers", {})
  .n("AlexaForBusinessClient", "DisassociateSkillFromUsersCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateSkillFromUsersCommand)
  .de(de_DisassociateSkillFromUsersCommand)
  .build() {}
