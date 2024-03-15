// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteSkillGroupRequest, DeleteSkillGroupResponse } from "../models/models_0";
import { de_DeleteSkillGroupCommand, se_DeleteSkillGroupCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteSkillGroupCommand}.
 */
export interface DeleteSkillGroupCommandInput extends DeleteSkillGroupRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSkillGroupCommand}.
 */
export interface DeleteSkillGroupCommandOutput extends DeleteSkillGroupResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated Alexa For Business is no longer supported
 *
 * <p>Deletes a skill group by skill group ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, DeleteSkillGroupCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, DeleteSkillGroupCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // DeleteSkillGroupRequest
 *   SkillGroupArn: "STRING_VALUE",
 * };
 * const command = new DeleteSkillGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSkillGroupCommandInput - {@link DeleteSkillGroupCommandInput}
 * @returns {@link DeleteSkillGroupCommandOutput}
 * @see {@link DeleteSkillGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteSkillGroupCommandOutput} for command's `response` shape.
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
export class DeleteSkillGroupCommand extends $Command
  .classBuilder<
    DeleteSkillGroupCommandInput,
    DeleteSkillGroupCommandOutput,
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
  .s("AlexaForBusiness", "DeleteSkillGroup", {})
  .n("AlexaForBusinessClient", "DeleteSkillGroupCommand")
  .f(void 0, void 0)
  .ser(se_DeleteSkillGroupCommand)
  .de(de_DeleteSkillGroupCommand)
  .build() {}
