// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeStarClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeStarClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateTeamMemberRequest, AssociateTeamMemberResult } from "../models/models_0";
import { de_AssociateTeamMemberCommand, se_AssociateTeamMemberCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateTeamMemberCommand}.
 */
export interface AssociateTeamMemberCommandInput extends AssociateTeamMemberRequest {}
/**
 * @public
 *
 * The output of {@link AssociateTeamMemberCommand}.
 */
export interface AssociateTeamMemberCommandOutput extends AssociateTeamMemberResult, __MetadataBearer {}

/**
 * <p>Adds an IAM user to the team for an AWS CodeStar project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarClient, AssociateTeamMemberCommand } from "@aws-sdk/client-codestar"; // ES Modules import
 * // const { CodeStarClient, AssociateTeamMemberCommand } = require("@aws-sdk/client-codestar"); // CommonJS import
 * const client = new CodeStarClient(config);
 * const input = { // AssociateTeamMemberRequest
 *   projectId: "STRING_VALUE", // required
 *   clientRequestToken: "STRING_VALUE",
 *   userArn: "STRING_VALUE", // required
 *   projectRole: "STRING_VALUE", // required
 *   remoteAccessAllowed: true || false,
 * };
 * const command = new AssociateTeamMemberCommand(input);
 * const response = await client.send(command);
 * // { // AssociateTeamMemberResult
 * //   clientRequestToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AssociateTeamMemberCommandInput - {@link AssociateTeamMemberCommandInput}
 * @returns {@link AssociateTeamMemberCommandOutput}
 * @see {@link AssociateTeamMemberCommandInput} for command's `input` shape.
 * @see {@link AssociateTeamMemberCommandOutput} for command's `response` shape.
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
 * @throws {@link TeamMemberAlreadyAssociatedException} (client fault)
 *  <p>The team member is already associated with a role in this project.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The specified input is either not valid, or it could not be validated.</p>
 *
 * @throws {@link CodeStarServiceException}
 * <p>Base exception class for all service exceptions from CodeStar service.</p>
 *
 * @public
 */
export class AssociateTeamMemberCommand extends $Command
  .classBuilder<
    AssociateTeamMemberCommandInput,
    AssociateTeamMemberCommandOutput,
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
  .s("CodeStar_20170419", "AssociateTeamMember", {})
  .n("CodeStarClient", "AssociateTeamMemberCommand")
  .f(void 0, void 0)
  .ser(se_AssociateTeamMemberCommand)
  .de(de_AssociateTeamMemberCommand)
  .build() {}
