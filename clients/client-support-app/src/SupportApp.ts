// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

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
import { SupportAppClient } from "./SupportAppClient";

/**
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
export class SupportApp extends SupportAppClient {
  /**
   * <p>Creates a Slack channel configuration for your Amazon Web Services account.</p>
   *          <note>
   *             <ul>
   *                <li>
   *                   <p>You can add up to 5 Slack workspaces for your account.</p>
   *                </li>
   *                <li>
   *                   <p>You can add up to 20 Slack channels for your account.</p>
   *                </li>
   *             </ul>
   *          </note>
   *          <p>A Slack channel can have up to 100 Amazon Web Services accounts. This means that only 100 accounts can
   *       add the same Slack channel to the Amazon Web Services Support App. We recommend that you only add the accounts that
   *       you need to manage support cases for your organization. This can reduce the notifications
   *       about case updates that you receive in the Slack channel.</p>
   *          <note>
   *             <p>We recommend that you choose a private Slack channel so that only members in that
   *         channel have read and write access to your support cases. Anyone in your Slack channel can
   *         create, update, or resolve support cases for your account. Users require an invitation to
   *         join private channels. </p>
   *          </note>
   */
  public createSlackChannelConfiguration(
    args: CreateSlackChannelConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSlackChannelConfigurationCommandOutput>;
  public createSlackChannelConfiguration(
    args: CreateSlackChannelConfigurationCommandInput,
    cb: (err: any, data?: CreateSlackChannelConfigurationCommandOutput) => void
  ): void;
  public createSlackChannelConfiguration(
    args: CreateSlackChannelConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSlackChannelConfigurationCommandOutput) => void
  ): void;
  public createSlackChannelConfiguration(
    args: CreateSlackChannelConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateSlackChannelConfigurationCommandOutput) => void),
    cb?: (err: any, data?: CreateSlackChannelConfigurationCommandOutput) => void
  ): Promise<CreateSlackChannelConfigurationCommandOutput> | void {
    const command = new CreateSlackChannelConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes an alias for an Amazon Web Services account ID. The alias appears in the Amazon Web Services Support App page of the
   *       Amazon Web Services Support Center. The alias also appears in Slack messages from the Amazon Web Services Support App.</p>
   */
  public deleteAccountAlias(
    args: DeleteAccountAliasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAccountAliasCommandOutput>;
  public deleteAccountAlias(
    args: DeleteAccountAliasCommandInput,
    cb: (err: any, data?: DeleteAccountAliasCommandOutput) => void
  ): void;
  public deleteAccountAlias(
    args: DeleteAccountAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAccountAliasCommandOutput) => void
  ): void;
  public deleteAccountAlias(
    args: DeleteAccountAliasCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAccountAliasCommandOutput) => void),
    cb?: (err: any, data?: DeleteAccountAliasCommandOutput) => void
  ): Promise<DeleteAccountAliasCommandOutput> | void {
    const command = new DeleteAccountAliasCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a Slack channel configuration from your Amazon Web Services account. This operation doesn't
   *       delete your Slack channel.</p>
   */
  public deleteSlackChannelConfiguration(
    args: DeleteSlackChannelConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSlackChannelConfigurationCommandOutput>;
  public deleteSlackChannelConfiguration(
    args: DeleteSlackChannelConfigurationCommandInput,
    cb: (err: any, data?: DeleteSlackChannelConfigurationCommandOutput) => void
  ): void;
  public deleteSlackChannelConfiguration(
    args: DeleteSlackChannelConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSlackChannelConfigurationCommandOutput) => void
  ): void;
  public deleteSlackChannelConfiguration(
    args: DeleteSlackChannelConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteSlackChannelConfigurationCommandOutput) => void),
    cb?: (err: any, data?: DeleteSlackChannelConfigurationCommandOutput) => void
  ): Promise<DeleteSlackChannelConfigurationCommandOutput> | void {
    const command = new DeleteSlackChannelConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a Slack workspace configuration from your Amazon Web Services account. This operation doesn't
   *       delete your Slack workspace.</p>
   */
  public deleteSlackWorkspaceConfiguration(
    args: DeleteSlackWorkspaceConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSlackWorkspaceConfigurationCommandOutput>;
  public deleteSlackWorkspaceConfiguration(
    args: DeleteSlackWorkspaceConfigurationCommandInput,
    cb: (err: any, data?: DeleteSlackWorkspaceConfigurationCommandOutput) => void
  ): void;
  public deleteSlackWorkspaceConfiguration(
    args: DeleteSlackWorkspaceConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSlackWorkspaceConfigurationCommandOutput) => void
  ): void;
  public deleteSlackWorkspaceConfiguration(
    args: DeleteSlackWorkspaceConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteSlackWorkspaceConfigurationCommandOutput) => void),
    cb?: (err: any, data?: DeleteSlackWorkspaceConfigurationCommandOutput) => void
  ): Promise<DeleteSlackWorkspaceConfigurationCommandOutput> | void {
    const command = new DeleteSlackWorkspaceConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the alias from an Amazon Web Services account ID. The alias appears in the Amazon Web Services Support App page of
   *       the Amazon Web Services Support Center. The alias also appears in Slack messages from the Amazon Web Services Support App.</p>
   */
  public getAccountAlias(
    args: GetAccountAliasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccountAliasCommandOutput>;
  public getAccountAlias(
    args: GetAccountAliasCommandInput,
    cb: (err: any, data?: GetAccountAliasCommandOutput) => void
  ): void;
  public getAccountAlias(
    args: GetAccountAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccountAliasCommandOutput) => void
  ): void;
  public getAccountAlias(
    args: GetAccountAliasCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAccountAliasCommandOutput) => void),
    cb?: (err: any, data?: GetAccountAliasCommandOutput) => void
  ): Promise<GetAccountAliasCommandOutput> | void {
    const command = new GetAccountAliasCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the Slack channel configurations for an Amazon Web Services account.</p>
   */
  public listSlackChannelConfigurations(
    args: ListSlackChannelConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSlackChannelConfigurationsCommandOutput>;
  public listSlackChannelConfigurations(
    args: ListSlackChannelConfigurationsCommandInput,
    cb: (err: any, data?: ListSlackChannelConfigurationsCommandOutput) => void
  ): void;
  public listSlackChannelConfigurations(
    args: ListSlackChannelConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSlackChannelConfigurationsCommandOutput) => void
  ): void;
  public listSlackChannelConfigurations(
    args: ListSlackChannelConfigurationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSlackChannelConfigurationsCommandOutput) => void),
    cb?: (err: any, data?: ListSlackChannelConfigurationsCommandOutput) => void
  ): Promise<ListSlackChannelConfigurationsCommandOutput> | void {
    const command = new ListSlackChannelConfigurationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the Slack workspace configurations for an Amazon Web Services account.</p>
   */
  public listSlackWorkspaceConfigurations(
    args: ListSlackWorkspaceConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSlackWorkspaceConfigurationsCommandOutput>;
  public listSlackWorkspaceConfigurations(
    args: ListSlackWorkspaceConfigurationsCommandInput,
    cb: (err: any, data?: ListSlackWorkspaceConfigurationsCommandOutput) => void
  ): void;
  public listSlackWorkspaceConfigurations(
    args: ListSlackWorkspaceConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSlackWorkspaceConfigurationsCommandOutput) => void
  ): void;
  public listSlackWorkspaceConfigurations(
    args: ListSlackWorkspaceConfigurationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSlackWorkspaceConfigurationsCommandOutput) => void),
    cb?: (err: any, data?: ListSlackWorkspaceConfigurationsCommandOutput) => void
  ): Promise<ListSlackWorkspaceConfigurationsCommandOutput> | void {
    const command = new ListSlackWorkspaceConfigurationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates or updates an individual alias for each Amazon Web Services account ID. The alias appears in the
   *       Amazon Web Services Support App page of the Amazon Web Services Support Center. The alias also appears in Slack messages from the
   *       Amazon Web Services Support App.</p>
   */
  public putAccountAlias(
    args: PutAccountAliasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutAccountAliasCommandOutput>;
  public putAccountAlias(
    args: PutAccountAliasCommandInput,
    cb: (err: any, data?: PutAccountAliasCommandOutput) => void
  ): void;
  public putAccountAlias(
    args: PutAccountAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAccountAliasCommandOutput) => void
  ): void;
  public putAccountAlias(
    args: PutAccountAliasCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutAccountAliasCommandOutput) => void),
    cb?: (err: any, data?: PutAccountAliasCommandOutput) => void
  ): Promise<PutAccountAliasCommandOutput> | void {
    const command = new PutAccountAliasCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

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
   */
  public registerSlackWorkspaceForOrganization(
    args: RegisterSlackWorkspaceForOrganizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterSlackWorkspaceForOrganizationCommandOutput>;
  public registerSlackWorkspaceForOrganization(
    args: RegisterSlackWorkspaceForOrganizationCommandInput,
    cb: (err: any, data?: RegisterSlackWorkspaceForOrganizationCommandOutput) => void
  ): void;
  public registerSlackWorkspaceForOrganization(
    args: RegisterSlackWorkspaceForOrganizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterSlackWorkspaceForOrganizationCommandOutput) => void
  ): void;
  public registerSlackWorkspaceForOrganization(
    args: RegisterSlackWorkspaceForOrganizationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: RegisterSlackWorkspaceForOrganizationCommandOutput) => void),
    cb?: (err: any, data?: RegisterSlackWorkspaceForOrganizationCommandOutput) => void
  ): Promise<RegisterSlackWorkspaceForOrganizationCommandOutput> | void {
    const command = new RegisterSlackWorkspaceForOrganizationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the configuration for a Slack channel, such as case update notifications.</p>
   */
  public updateSlackChannelConfiguration(
    args: UpdateSlackChannelConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSlackChannelConfigurationCommandOutput>;
  public updateSlackChannelConfiguration(
    args: UpdateSlackChannelConfigurationCommandInput,
    cb: (err: any, data?: UpdateSlackChannelConfigurationCommandOutput) => void
  ): void;
  public updateSlackChannelConfiguration(
    args: UpdateSlackChannelConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSlackChannelConfigurationCommandOutput) => void
  ): void;
  public updateSlackChannelConfiguration(
    args: UpdateSlackChannelConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateSlackChannelConfigurationCommandOutput) => void),
    cb?: (err: any, data?: UpdateSlackChannelConfigurationCommandOutput) => void
  ): Promise<UpdateSlackChannelConfigurationCommandOutput> | void {
    const command = new UpdateSlackChannelConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
