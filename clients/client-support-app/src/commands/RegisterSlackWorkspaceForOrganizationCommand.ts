// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  RegisterSlackWorkspaceForOrganizationRequest,
  RegisterSlackWorkspaceForOrganizationResult,
} from "../models/models_0";
import { RegisterSlackWorkspaceForOrganization$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RegisterSlackWorkspaceForOrganizationCommand}.
 */
export interface RegisterSlackWorkspaceForOrganizationCommandInput extends RegisterSlackWorkspaceForOrganizationRequest {}
/**
 * @public
 *
 * The output of {@link RegisterSlackWorkspaceForOrganizationCommand}.
 */
export interface RegisterSlackWorkspaceForOrganizationCommandOutput extends RegisterSlackWorkspaceForOrganizationResult, __MetadataBearer {}

/**
 * Registers a Slack workspace for your Amazon Web Services account. To call this API, your account must be part of an organization in Organizations.
 *
 * If you're the *management account* and you want to register Slack workspaces for your organization, you must complete the following tasks:
 *
 * 1. Sign in to the [Amazon Web Services Support Center](https://console.aws.amazon.com/support/app) and authorize the Slack workspaces where you want your organization to have access to. See [Authorize a Slack workspace](https://docs.aws.amazon.com/awssupport/latest/user/authorize-slack-workspace.html) in the *Amazon Web Services Support User Guide*.
 * 2. Call the `RegisterSlackWorkspaceForOrganization` API to authorize each Slack workspace for the organization.
 *
 * After the management account authorizes the Slack workspace, member accounts can call this API to authorize the same Slack workspace for their individual accounts. Member accounts don't need to authorize the Slack workspace manually through the [Amazon Web Services Support Center](https://console.aws.amazon.com/support/app).
 *
 * To use the Amazon Web Services Support App, each account must then complete the following tasks:
 *
 * - Create an Identity and Access Management (IAM) role with the required permission. For more information, see [Managing access to the Amazon Web Services Support App](https://docs.aws.amazon.com/awssupport/latest/user/support-app-permissions.html).
 * - Configure a Slack channel to use the Amazon Web Services Support App for support cases for that account. For more information, see [Configuring a Slack channel](https://docs.aws.amazon.com/awssupport/latest/user/add-your-slack-channel.html).
 *
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
 *
 * You don't have sufficient permission to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Your request has a conflict. For example, you might receive this error if you try the following:
 *
 * - Add, update, or delete a Slack channel configuration before you add a Slack workspace to your Amazon Web Services account.
 * - Add a Slack channel configuration that already exists in your Amazon Web Services account.
 * - Delete a Slack channel configuration for a live chat channel.
 * - Delete a Slack workspace from your Amazon Web Services account that has an active live chat channel.
 * - Call the `RegisterSlackWorkspaceForOrganization` API from an Amazon Web Services account that doesn't belong to an organization.
 * - Call the `RegisterSlackWorkspaceForOrganization` API from a member account, but the management account hasn't registered that workspace yet for the organization.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * We can’t process your request right now because of a server issue. Try again later.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource is missing or doesn't exist, such as an account alias, Slack channel configuration, or Slack workspace configuration.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Your request input doesn't meet the constraints that the Amazon Web Services Support App specifies.
 *
 * @throws {@link SupportAppServiceException}
 *
 * Base exception class for all service exceptions from SupportApp service.
 *
 * @public
 */
export class RegisterSlackWorkspaceForOrganizationCommand extends command<RegisterSlackWorkspaceForOrganizationCommandInput, RegisterSlackWorkspaceForOrganizationCommandOutput>(
  _ep0,
  _mw0,
  "RegisterSlackWorkspaceForOrganization",
  RegisterSlackWorkspaceForOrganization$
) {
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
