// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateSkillWithUsersRequest, AssociateSkillWithUsersResponse } from "../models/models_0";
import { de_AssociateSkillWithUsersCommand, se_AssociateSkillWithUsersCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AssociateSkillWithUsersCommand}.
 */
export interface AssociateSkillWithUsersCommandInput extends AssociateSkillWithUsersRequest {}
/**
 * @public
 *
 * The output of {@link AssociateSkillWithUsersCommand}.
 */
export interface AssociateSkillWithUsersCommandOutput extends AssociateSkillWithUsersResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Makes a private skill available for enrolled users to enable on their devices.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, AssociateSkillWithUsersCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, AssociateSkillWithUsersCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // AssociateSkillWithUsersRequest
 *   SkillId: "STRING_VALUE", // required
 * };
 * const command = new AssociateSkillWithUsersCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateSkillWithUsersCommandInput - {@link AssociateSkillWithUsersCommandInput}
 * @returns {@link AssociateSkillWithUsersCommandOutput}
 * @see {@link AssociateSkillWithUsersCommandInput} for command's `input` shape.
 * @see {@link AssociateSkillWithUsersCommandOutput} for command's `response` shape.
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
export class AssociateSkillWithUsersCommand extends $Command
  .classBuilder<
    AssociateSkillWithUsersCommandInput,
    AssociateSkillWithUsersCommandOutput,
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
  .s("AlexaForBusiness", "AssociateSkillWithUsers", {})
  .n("AlexaForBusinessClient", "AssociateSkillWithUsersCommand")
  .f(void 0, void 0)
  .ser(se_AssociateSkillWithUsersCommand)
  .de(de_AssociateSkillWithUsersCommand)
  .build() {}
