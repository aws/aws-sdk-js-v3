// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateSkillGroupRequest, CreateSkillGroupResponse } from "../models/models_0";
import { de_CreateSkillGroupCommand, se_CreateSkillGroupCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateSkillGroupCommand}.
 */
export interface CreateSkillGroupCommandInput extends CreateSkillGroupRequest {}
/**
 * @public
 *
 * The output of {@link CreateSkillGroupCommand}.
 */
export interface CreateSkillGroupCommandOutput extends CreateSkillGroupResponse, __MetadataBearer {}

/**
 * <p>Creates a skill group with a specified name and description.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, CreateSkillGroupCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, CreateSkillGroupCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // CreateSkillGroupRequest
 *   SkillGroupName: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   ClientRequestToken: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateSkillGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateSkillGroupResponse
 * //   SkillGroupArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateSkillGroupCommandInput - {@link CreateSkillGroupCommandInput}
 * @returns {@link CreateSkillGroupCommandOutput}
 * @see {@link CreateSkillGroupCommandInput} for command's `input` shape.
 * @see {@link CreateSkillGroupCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>The resource being created already exists.</p>
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>There is a concurrent modification of resources.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You are performing an action that would put you beyond your account's limits.</p>
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 * @public
 * @deprecated Alexa For Business is no longer supported
 */
export class CreateSkillGroupCommand extends $Command
  .classBuilder<
    CreateSkillGroupCommandInput,
    CreateSkillGroupCommandOutput,
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
  .s("AlexaForBusiness", "CreateSkillGroup", {})
  .n("AlexaForBusinessClient", "CreateSkillGroupCommand")
  .f(void 0, void 0)
  .ser(se_CreateSkillGroupCommand)
  .de(de_CreateSkillGroupCommand)
  .build() {}
