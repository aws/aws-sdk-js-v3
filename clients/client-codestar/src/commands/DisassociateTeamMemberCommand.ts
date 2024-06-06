// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeStarClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeStarClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociateTeamMemberRequest, DisassociateTeamMemberResult } from "../models/models_0";
import { de_DisassociateTeamMemberCommand, se_DisassociateTeamMemberCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateTeamMemberCommand}.
 */
export interface DisassociateTeamMemberCommandInput extends DisassociateTeamMemberRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateTeamMemberCommand}.
 */
export interface DisassociateTeamMemberCommandOutput extends DisassociateTeamMemberResult, __MetadataBearer {}

/**
 * <p>Removes a user from a project. Removing a user from a project also removes the IAM
 *       policies from that user that allowed access to the project and its resources. Disassociating a
 *       team member does not remove that user's profile from AWS CodeStar. It does not remove the user from
 *       IAM.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarClient, DisassociateTeamMemberCommand } from "@aws-sdk/client-codestar"; // ES Modules import
 * // const { CodeStarClient, DisassociateTeamMemberCommand } = require("@aws-sdk/client-codestar"); // CommonJS import
 * const client = new CodeStarClient(config);
 * const input = { // DisassociateTeamMemberRequest
 *   projectId: "STRING_VALUE", // required
 *   userArn: "STRING_VALUE", // required
 * };
 * const command = new DisassociateTeamMemberCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateTeamMemberCommandInput - {@link DisassociateTeamMemberCommandInput}
 * @returns {@link DisassociateTeamMemberCommandOutput}
 * @see {@link DisassociateTeamMemberCommandInput} for command's `input` shape.
 * @see {@link DisassociateTeamMemberCommandOutput} for command's `response` shape.
 * @see {@link CodeStarClientResolvedConfig | config} for CodeStarClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (server fault)
 *  <p>Another modification is being made. That modification must complete before you can make
 *       your change.</p>
 *
 * @throws {@link InvalidServiceRoleException} (client fault)
 *  <p>The service role is not valid.</p>
 *
 * @throws {@link ProjectNotFoundException} (client fault)
 *  <p>The specified AWS CodeStar project was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The specified input is either not valid, or it could not be validated.</p>
 *
 * @throws {@link CodeStarServiceException}
 * <p>Base exception class for all service exceptions from CodeStar service.</p>
 *
 * @public
 */
export class DisassociateTeamMemberCommand extends $Command
  .classBuilder<
    DisassociateTeamMemberCommandInput,
    DisassociateTeamMemberCommandOutput,
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
  .s("CodeStar_20170419", "DisassociateTeamMember", {})
  .n("CodeStarClient", "DisassociateTeamMemberCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateTeamMemberCommand)
  .de(de_DisassociateTeamMemberCommand)
  .build() {}
