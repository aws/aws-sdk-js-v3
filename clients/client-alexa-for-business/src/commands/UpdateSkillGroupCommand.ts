// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateSkillGroupRequest, UpdateSkillGroupResponse } from "../models/models_0";
import { de_UpdateSkillGroupCommand, se_UpdateSkillGroupCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateSkillGroupCommand}.
 */
export interface UpdateSkillGroupCommandInput extends UpdateSkillGroupRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSkillGroupCommand}.
 */
export interface UpdateSkillGroupCommandOutput extends UpdateSkillGroupResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Updates skill group details by skill group ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, UpdateSkillGroupCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, UpdateSkillGroupCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // UpdateSkillGroupRequest
 *   SkillGroupArn: "STRING_VALUE",
 *   SkillGroupName: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 * };
 * const command = new UpdateSkillGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateSkillGroupCommandInput - {@link UpdateSkillGroupCommandInput}
 * @returns {@link UpdateSkillGroupCommandOutput}
 * @see {@link UpdateSkillGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateSkillGroupCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>There is a concurrent modification of resources.</p>
 *
 * @throws {@link NameInUseException} (client fault)
 *  <p>The name sent in the request is already in use.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource is not found.</p>
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 */
export class UpdateSkillGroupCommand extends $Command
  .classBuilder<
    UpdateSkillGroupCommandInput,
    UpdateSkillGroupCommandOutput,
    AlexaForBusinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any /*Command*/, Command: any /*static*/, config: AlexaForBusinessClientResolvedConfig) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AlexaForBusiness", "UpdateSkillGroup", {})
  .n("AlexaForBusinessClient", "UpdateSkillGroupCommand")
  .f(void 0, void 0)
  .ser(se_UpdateSkillGroupCommand)
  .de(de_UpdateSkillGroupCommand)
  .build() {}
