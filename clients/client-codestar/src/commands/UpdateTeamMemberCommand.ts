// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeStarClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeStarClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateTeamMemberRequest, UpdateTeamMemberResult } from "../models/models_0";
import { de_UpdateTeamMemberCommand, se_UpdateTeamMemberCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateTeamMemberCommand}.
 */
export interface UpdateTeamMemberCommandInput extends UpdateTeamMemberRequest {}
/**
 * @public
 *
 * The output of {@link UpdateTeamMemberCommand}.
 */
export interface UpdateTeamMemberCommandOutput extends UpdateTeamMemberResult, __MetadataBearer {}

/**
 * <p>Updates a team member's attributes in an AWS CodeStar project. For example, you can change a
 *       team member's role in the project, or change whether they have remote access to project
 *       resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarClient, UpdateTeamMemberCommand } from "@aws-sdk/client-codestar"; // ES Modules import
 * // const { CodeStarClient, UpdateTeamMemberCommand } = require("@aws-sdk/client-codestar"); // CommonJS import
 * const client = new CodeStarClient(config);
 * const input = { // UpdateTeamMemberRequest
 *   projectId: "STRING_VALUE", // required
 *   userArn: "STRING_VALUE", // required
 *   projectRole: "STRING_VALUE",
 *   remoteAccessAllowed: true || false,
 * };
 * const command = new UpdateTeamMemberCommand(input);
 * const response = await client.send(command);
 * // { // UpdateTeamMemberResult
 * //   userArn: "STRING_VALUE",
 * //   projectRole: "STRING_VALUE",
 * //   remoteAccessAllowed: true || false,
 * // };
 *
 * ```
 *
 * @param UpdateTeamMemberCommandInput - {@link UpdateTeamMemberCommandInput}
 * @returns {@link UpdateTeamMemberCommandOutput}
 * @see {@link UpdateTeamMemberCommandInput} for command's `input` shape.
 * @see {@link UpdateTeamMemberCommandOutput} for command's `response` shape.
 * @see {@link CodeStarClientResolvedConfig | config} for CodeStarClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (server fault)
 *  <p>Another modification is being made. That modification must complete before you can make
 *       your change.</p>
 *
 * @throws {@link InvalidServiceRoleException} (client fault)
 *  <p>The service role is not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A resource limit has been exceeded.</p>
 *
 * @throws {@link ProjectConfigurationException} (client fault)
 *  <p>Project configuration information is required but not specified.</p>
 *
 * @throws {@link ProjectNotFoundException} (client fault)
 *  <p>The specified AWS CodeStar project was not found.</p>
 *
 * @throws {@link TeamMemberNotFoundException} (client fault)
 *  <p>The specified team member was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The specified input is either not valid, or it could not be validated.</p>
 *
 * @throws {@link CodeStarServiceException}
 * <p>Base exception class for all service exceptions from CodeStar service.</p>
 *
 * @public
 */
export class UpdateTeamMemberCommand extends $Command
  .classBuilder<
    UpdateTeamMemberCommandInput,
    UpdateTeamMemberCommandOutput,
    CodeStarClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CodeStarClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodeStar_20170419", "UpdateTeamMember", {})
  .n("CodeStarClient", "UpdateTeamMemberCommand")
  .f(void 0, void 0)
  .ser(se_UpdateTeamMemberCommand)
  .de(de_UpdateTeamMemberCommand)
  .build() {}
