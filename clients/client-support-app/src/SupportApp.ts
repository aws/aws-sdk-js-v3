// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  CreateSlackChannelConfigurationCommand,
  CreateSlackChannelConfigurationCommandInput,
  CreateSlackChannelConfigurationCommandOutput,
} from "./commands/CreateSlackChannelConfigurationCommand";
import {
  DeleteAccountAliasCommand,
  DeleteAccountAliasCommandInput,
  DeleteAccountAliasCommandOutput,
} from "./commands/DeleteAccountAliasCommand";
import {
  DeleteSlackChannelConfigurationCommand,
  DeleteSlackChannelConfigurationCommandInput,
  DeleteSlackChannelConfigurationCommandOutput,
} from "./commands/DeleteSlackChannelConfigurationCommand";
import {
  DeleteSlackWorkspaceConfigurationCommand,
  DeleteSlackWorkspaceConfigurationCommandInput,
  DeleteSlackWorkspaceConfigurationCommandOutput,
} from "./commands/DeleteSlackWorkspaceConfigurationCommand";
import {
  GetAccountAliasCommand,
  GetAccountAliasCommandInput,
  GetAccountAliasCommandOutput,
} from "./commands/GetAccountAliasCommand";
import {
  ListSlackChannelConfigurationsCommand,
  ListSlackChannelConfigurationsCommandInput,
  ListSlackChannelConfigurationsCommandOutput,
} from "./commands/ListSlackChannelConfigurationsCommand";
import {
  ListSlackWorkspaceConfigurationsCommand,
  ListSlackWorkspaceConfigurationsCommandInput,
  ListSlackWorkspaceConfigurationsCommandOutput,
} from "./commands/ListSlackWorkspaceConfigurationsCommand";
import {
  PutAccountAliasCommand,
  PutAccountAliasCommandInput,
  PutAccountAliasCommandOutput,
} from "./commands/PutAccountAliasCommand";
import {
  RegisterSlackWorkspaceForOrganizationCommand,
  RegisterSlackWorkspaceForOrganizationCommandInput,
  RegisterSlackWorkspaceForOrganizationCommandOutput,
} from "./commands/RegisterSlackWorkspaceForOrganizationCommand";
import {
  UpdateSlackChannelConfigurationCommand,
  UpdateSlackChannelConfigurationCommandInput,
  UpdateSlackChannelConfigurationCommandOutput,
} from "./commands/UpdateSlackChannelConfigurationCommand";
import { SupportAppClient, SupportAppClientConfig } from "./SupportAppClient";

const commands = {
  CreateSlackChannelConfigurationCommand,
  DeleteAccountAliasCommand,
  DeleteSlackChannelConfigurationCommand,
  DeleteSlackWorkspaceConfigurationCommand,
  GetAccountAliasCommand,
  ListSlackChannelConfigurationsCommand,
  ListSlackWorkspaceConfigurationsCommand,
  PutAccountAliasCommand,
  RegisterSlackWorkspaceForOrganizationCommand,
  UpdateSlackChannelConfigurationCommand,
};

export interface SupportApp {
  /**
   * @see {@link CreateSlackChannelConfigurationCommand}
   */
  createSlackChannelConfiguration(
    args: CreateSlackChannelConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSlackChannelConfigurationCommandOutput>;
  createSlackChannelConfiguration(
    args: CreateSlackChannelConfigurationCommandInput,
    cb: (err: any, data?: CreateSlackChannelConfigurationCommandOutput) => void
  ): void;
  createSlackChannelConfiguration(
    args: CreateSlackChannelConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSlackChannelConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAccountAliasCommand}
   */
  deleteAccountAlias(
    args: DeleteAccountAliasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAccountAliasCommandOutput>;
  deleteAccountAlias(
    args: DeleteAccountAliasCommandInput,
    cb: (err: any, data?: DeleteAccountAliasCommandOutput) => void
  ): void;
  deleteAccountAlias(
    args: DeleteAccountAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAccountAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSlackChannelConfigurationCommand}
   */
  deleteSlackChannelConfiguration(
    args: DeleteSlackChannelConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSlackChannelConfigurationCommandOutput>;
  deleteSlackChannelConfiguration(
    args: DeleteSlackChannelConfigurationCommandInput,
    cb: (err: any, data?: DeleteSlackChannelConfigurationCommandOutput) => void
  ): void;
  deleteSlackChannelConfiguration(
    args: DeleteSlackChannelConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSlackChannelConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSlackWorkspaceConfigurationCommand}
   */
  deleteSlackWorkspaceConfiguration(
    args: DeleteSlackWorkspaceConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSlackWorkspaceConfigurationCommandOutput>;
  deleteSlackWorkspaceConfiguration(
    args: DeleteSlackWorkspaceConfigurationCommandInput,
    cb: (err: any, data?: DeleteSlackWorkspaceConfigurationCommandOutput) => void
  ): void;
  deleteSlackWorkspaceConfiguration(
    args: DeleteSlackWorkspaceConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSlackWorkspaceConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAccountAliasCommand}
   */
  getAccountAlias(
    args: GetAccountAliasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccountAliasCommandOutput>;
  getAccountAlias(args: GetAccountAliasCommandInput, cb: (err: any, data?: GetAccountAliasCommandOutput) => void): void;
  getAccountAlias(
    args: GetAccountAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccountAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSlackChannelConfigurationsCommand}
   */
  listSlackChannelConfigurations(
    args: ListSlackChannelConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSlackChannelConfigurationsCommandOutput>;
  listSlackChannelConfigurations(
    args: ListSlackChannelConfigurationsCommandInput,
    cb: (err: any, data?: ListSlackChannelConfigurationsCommandOutput) => void
  ): void;
  listSlackChannelConfigurations(
    args: ListSlackChannelConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSlackChannelConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSlackWorkspaceConfigurationsCommand}
   */
  listSlackWorkspaceConfigurations(
    args: ListSlackWorkspaceConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSlackWorkspaceConfigurationsCommandOutput>;
  listSlackWorkspaceConfigurations(
    args: ListSlackWorkspaceConfigurationsCommandInput,
    cb: (err: any, data?: ListSlackWorkspaceConfigurationsCommandOutput) => void
  ): void;
  listSlackWorkspaceConfigurations(
    args: ListSlackWorkspaceConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSlackWorkspaceConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutAccountAliasCommand}
   */
  putAccountAlias(
    args: PutAccountAliasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutAccountAliasCommandOutput>;
  putAccountAlias(args: PutAccountAliasCommandInput, cb: (err: any, data?: PutAccountAliasCommandOutput) => void): void;
  putAccountAlias(
    args: PutAccountAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAccountAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterSlackWorkspaceForOrganizationCommand}
   */
  registerSlackWorkspaceForOrganization(
    args: RegisterSlackWorkspaceForOrganizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterSlackWorkspaceForOrganizationCommandOutput>;
  registerSlackWorkspaceForOrganization(
    args: RegisterSlackWorkspaceForOrganizationCommandInput,
    cb: (err: any, data?: RegisterSlackWorkspaceForOrganizationCommandOutput) => void
  ): void;
  registerSlackWorkspaceForOrganization(
    args: RegisterSlackWorkspaceForOrganizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterSlackWorkspaceForOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSlackChannelConfigurationCommand}
   */
  updateSlackChannelConfiguration(
    args: UpdateSlackChannelConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSlackChannelConfigurationCommandOutput>;
  updateSlackChannelConfiguration(
    args: UpdateSlackChannelConfigurationCommandInput,
    cb: (err: any, data?: UpdateSlackChannelConfigurationCommandOutput) => void
  ): void;
  updateSlackChannelConfiguration(
    args: UpdateSlackChannelConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSlackChannelConfigurationCommandOutput) => void
  ): void;
}

/**
 * @public
 * <fullname>Amazon Web Services Support App in Slack</fullname>
 *          <p>You can use the Amazon Web Services Support App in Slack API to manage your support cases in Slack for your
 *       Amazon Web Services account. After you configure your Slack workspace and channel with the Amazon Web Services Support App, you can
 *       perform the following tasks directly in your Slack channel:</p>
 *          <ul>
 *             <li>
 *                <p>Create, search, update, and resolve your support cases</p>
 *             </li>
 *             <li>
 *                <p>Request service quota increases for your account</p>
 *             </li>
 *             <li>
 *                <p>Invite Amazon Web Services Support agents to your channel so that you can chat directly about your
 *           support cases</p>
 *             </li>
 *          </ul>
 *          <p>For more information about how to perform these actions in Slack, see the following
 *       documentation in the <i>Amazon Web Services Support User Guide</i>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/awssupport/latest/user/aws-support-app-for-slack.html">Amazon Web Services Support App in Slack</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/awssupport/latest/user/joining-a-live-chat-session.html">Joining a live chat session with Amazon Web Services Support</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/awssupport/latest/user/service-quota-increase.html">Requesting service quota increases</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/awssupport/latest/user/support-app-commands.html">Amazon Web Services Support App commands in Slack</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>You can also use the Amazon Web Services Management Console instead of the Amazon Web Services Support App API to manage your Slack
 *       configurations. For more information, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/authorize-slack-workspace.html">Authorize a
 *         Slack workspace to enable the Amazon Web Services Support App</a>.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>You must have a Business or Enterprise Support plan to use the Amazon Web Services Support App API. </p>
 *                </li>
 *                <li>
 *                   <p>For more information about the Amazon Web Services Support App endpoints, see the <a href="https://docs.aws.amazon.com/general/latest/gr/awssupport.html#awssupport_app_region">Amazon Web Services Support App in Slack endpoints</a> in the <i>Amazon Web Services General
 *               Reference</i>.</p>
 *                </li>
 *             </ul>
 *          </note>
 */
export class SupportApp extends SupportAppClient implements SupportApp {}
createAggregatedClient(commands, SupportApp);
