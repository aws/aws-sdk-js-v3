// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  RegisterSlackWorkspaceForOrganizationRequest,
  RegisterSlackWorkspaceForOrganizationResult,
} from "../models/models_0";
import { RegisterSlackWorkspaceForOrganization } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, SupportAppClientResolvedConfig } from "../SupportAppClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RegisterSlackWorkspaceForOrganizationCommand}.
 */
export interface RegisterSlackWorkspaceForOrganizationCommandInput
  extends RegisterSlackWorkspaceForOrganizationRequest {}
/**
 * @public
 *
 * The output of {@link RegisterSlackWorkspaceForOrganizationCommand}.
 */
export interface RegisterSlackWorkspaceForOrganizationCommandOutput
  extends RegisterSlackWorkspaceForOrganizationResult,
    __MetadataBearer {}

/**
 * <p>Registers a Slack workspace for your Amazon Web Services account. To call this API, your account must be
 *       part of an organization in Organizations.</p>
 *          <p>If you're the <i>management account</i> and you want to register Slack
 *       workspaces for your organization, you must complete the following tasks:</p>
 *          <ol>
 *             <li>
 *                <p>Sign in to the <a href="https://console.aws.amazon.com/support/app">Amazon Web Services Support Center</a> and
 *           authorize the Slack workspaces where you want your organization to have access to. See
 *             <a href="https://docs.aws.amazon.com/awssupport/latest/user/authorize-slack-workspace.html">Authorize a Slack workspace</a> in the <i>Amazon Web Services Support User
 *           Guide</i>.</p>
 *             </li>
 *             <li>
 *                <p>Call the <code>RegisterSlackWorkspaceForOrganization</code> API to authorize each
 *           Slack workspace for the organization.</p>
 *             </li>
 *          </ol>
 *          <p>After the management account authorizes the Slack workspace, member accounts can call this
 *       API to authorize the same Slack workspace for their individual accounts. Member accounts don't
 *       need to authorize the Slack workspace manually through the <a href="https://console.aws.amazon.com/support/app">Amazon Web Services Support Center</a>.</p>
 *          <p>To use the Amazon Web Services Support App, each account must then complete the following tasks:</p>
 *          <ul>
 *             <li>
 *                <p>Create an Identity and Access Management (IAM) role with the required permission. For more information,
 *           see <a href="https://docs.aws.amazon.com/awssupport/latest/user/support-app-permissions.html">Managing access to the Amazon Web Services Support App</a>.</p>
 *             </li>
 *             <li>
 *                <p>Configure a Slack channel to use the Amazon Web Services Support App for support cases for that account. For
 *           more information, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/add-your-slack-channel.html">Configuring a Slack channel</a>.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupportAppClient, RegisterSlackWorkspaceForOrganizationCommand } from "@aws-sdk/client-support-app"; // ES Modules import
 * // const { SupportAppClient, RegisterSlackWorkspaceForOrganizationCommand } = require("@aws-sdk/client-support-app"); // CommonJS import
 * // import type { SupportAppClientConfig } from "@aws-sdk/client-support-app";
 * const config = {}; // type is SupportAppClientConfig
 * const client = new SupportAppClient(config);
 * const input = { // RegisterSlackWorkspaceForOrganizationRequest
 *   teamId: "STRING_VALUE", // required
 * };
 * const command = new RegisterSlackWorkspaceForOrganizationCommand(input);
 * const response = await client.send(command);
 * // { // RegisterSlackWorkspaceForOrganizationResult
 * //   teamId: "STRING_VALUE",
 * //   teamName: "STRING_VALUE",
 * //   accountType: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RegisterSlackWorkspaceForOrganizationCommandInput - {@link RegisterSlackWorkspaceForOrganizationCommandInput}
 * @returns {@link RegisterSlackWorkspaceForOrganizationCommandOutput}
 * @see {@link RegisterSlackWorkspaceForOrganizationCommandInput} for command's `input` shape.
 * @see {@link RegisterSlackWorkspaceForOrganizationCommandOutput} for command's `response` shape.
 * @see {@link SupportAppClientResolvedConfig | config} for SupportAppClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permission to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Your request has a conflict. For example, you might receive this error if you try the
 *       following:</p>
 *          <ul>
 *             <li>
 *                <p>Add, update, or delete a Slack channel configuration before you add a Slack workspace
 *           to your Amazon Web Services account.</p>
 *             </li>
 *             <li>
 *                <p>Add a Slack channel configuration that already exists in your Amazon Web Services account.</p>
 *             </li>
 *             <li>
 *                <p>Delete a Slack channel configuration for a live chat channel.</p>
 *             </li>
 *             <li>
 *                <p>Delete a Slack workspace from your Amazon Web Services account that has an active live chat
 *           channel.</p>
 *             </li>
 *             <li>
 *                <p>Call the <code>RegisterSlackWorkspaceForOrganization</code> API from an Amazon Web Services account
 *           that doesn't belong to an organization.</p>
 *             </li>
 *             <li>
 *                <p>Call the <code>RegisterSlackWorkspaceForOrganization</code> API from a member account,
 *           but the management account hasn't registered that workspace yet for the
 *           organization.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>We can’t process your request right now because of a server issue. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource is missing or doesn't exist, such as an account alias, Slack
 *       channel configuration, or Slack workspace configuration.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Your request input doesn't meet the constraints that the Amazon Web Services Support App specifies.</p>
 *
 * @throws {@link SupportAppServiceException}
 * <p>Base exception class for all service exceptions from SupportApp service.</p>
 *
 *
 * @public
 */
export class RegisterSlackWorkspaceForOrganizationCommand extends $Command
  .classBuilder<
    RegisterSlackWorkspaceForOrganizationCommandInput,
    RegisterSlackWorkspaceForOrganizationCommandOutput,
    SupportAppClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SupportAppClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SupportApp", "RegisterSlackWorkspaceForOrganization", {})
  .n("SupportAppClient", "RegisterSlackWorkspaceForOrganizationCommand")
  .sc(RegisterSlackWorkspaceForOrganization)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterSlackWorkspaceForOrganizationRequest;
      output: RegisterSlackWorkspaceForOrganizationResult;
    };
    sdk: {
      input: RegisterSlackWorkspaceForOrganizationCommandInput;
      output: RegisterSlackWorkspaceForOrganizationCommandOutput;
    };
  };
}
