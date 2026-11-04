// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateSlackChannelConfigurationRequest, CreateSlackChannelConfigurationResult } from "../models/models_0";
import { CreateSlackChannelConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateSlackChannelConfigurationCommand}.
 */
export interface CreateSlackChannelConfigurationCommandInput extends CreateSlackChannelConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link CreateSlackChannelConfigurationCommand}.
 */
export interface CreateSlackChannelConfigurationCommandOutput extends CreateSlackChannelConfigurationResult, __MetadataBearer {}

/**
 * Creates a Slack channel configuration for your Amazon Web Services account.
 *
 * > **Note:**
 * >
 * > - You can add up to 5 Slack workspaces for your account.
 * > - You can add up to 20 Slack channels for your account.
 *
 * A Slack channel can have up to 100 Amazon Web Services accounts. This means that only 100 accounts can add the same Slack channel to the Amazon Web Services Support App. We recommend that you only add the accounts that you need to manage support cases for your organization. This can reduce the notifications about case updates that you receive in the Slack channel.
 *
 * > **Note:** We recommend that you choose a private Slack channel so that only members in that channel have read and write access to your support cases. Anyone in your Slack channel can create, update, or resolve support cases for your account. Users require an invitation to join private channels.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupportAppClient, CreateSlackChannelConfigurationCommand } from "@aws-sdk/client-support-app"; // ES Modules import
 * // const { SupportAppClient, CreateSlackChannelConfigurationCommand } = require("@aws-sdk/client-support-app"); // CommonJS import
 * // import type { SupportAppClientConfig } from "@aws-sdk/client-support-app";
 * const config = {}; // type is SupportAppClientConfig
 * const client = new SupportAppClient(config);
 * const input = { // CreateSlackChannelConfigurationRequest
 *   teamId: "STRING_VALUE", // required
 *   channelId: "STRING_VALUE", // required
 *   channelName: "STRING_VALUE",
 *   notifyOnCreateOrReopenCase: true || false,
 *   notifyOnAddCorrespondenceToCase: true || false,
 *   notifyOnResolveCase: true || false,
 *   notifyOnCaseSeverity: "STRING_VALUE", // required
 *   channelRoleArn: "STRING_VALUE", // required
 * };
 * const command = new CreateSlackChannelConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateSlackChannelConfigurationCommandInput - {@link CreateSlackChannelConfigurationCommandInput}
 * @returns {@link CreateSlackChannelConfigurationCommandOutput}
 * @see {@link CreateSlackChannelConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateSlackChannelConfigurationCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * Your Service Quotas request exceeds the quota for the service. For example, your Service Quotas request to Amazon Web Services Support App might exceed the maximum number of workspaces or channels per account, or the maximum number of accounts per Slack channel.
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
export class CreateSlackChannelConfigurationCommand extends command<CreateSlackChannelConfigurationCommandInput, CreateSlackChannelConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "CreateSlackChannelConfiguration",
  CreateSlackChannelConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSlackChannelConfigurationRequest;
      output: {};
    };
    sdk: {
      input: CreateSlackChannelConfigurationCommandInput;
      output: CreateSlackChannelConfigurationCommandOutput;
    };
  };
}
