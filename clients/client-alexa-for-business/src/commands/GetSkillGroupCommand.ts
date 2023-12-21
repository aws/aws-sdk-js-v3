// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetSkillGroupRequest, GetSkillGroupResponse } from "../models/models_0";
import { de_GetSkillGroupCommand, se_GetSkillGroupCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetSkillGroupCommand}.
 */
export interface GetSkillGroupCommandInput extends GetSkillGroupRequest {}
/**
 * @public
 *
 * The output of {@link GetSkillGroupCommand}.
 */
export interface GetSkillGroupCommandOutput extends GetSkillGroupResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Gets skill group details by skill group ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, GetSkillGroupCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, GetSkillGroupCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // GetSkillGroupRequest
 *   SkillGroupArn: "STRING_VALUE",
 * };
 * const command = new GetSkillGroupCommand(input);
 * const response = await client.send(command);
 * // { // GetSkillGroupResponse
 * //   SkillGroup: { // SkillGroup
 * //     SkillGroupArn: "STRING_VALUE",
 * //     SkillGroupName: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSkillGroupCommandInput - {@link GetSkillGroupCommandInput}
 * @returns {@link GetSkillGroupCommandOutput}
 * @see {@link GetSkillGroupCommandInput} for command's `input` shape.
 * @see {@link GetSkillGroupCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource is not found.</p>
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 */
export class GetSkillGroupCommand extends $Command
  .classBuilder<
    GetSkillGroupCommandInput,
    GetSkillGroupCommandOutput,
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
  .s("AlexaForBusiness", "GetSkillGroup", {})
  .n("AlexaForBusinessClient", "GetSkillGroupCommand")
  .f(void 0, void 0)
  .ser(se_GetSkillGroupCommand)
  .de(de_GetSkillGroupCommand)
  .build() {}
