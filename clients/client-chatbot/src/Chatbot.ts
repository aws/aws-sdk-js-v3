// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { ChatbotClient, ChatbotClientConfig } from "./ChatbotClient";
import {
  CreateChimeWebhookConfigurationCommand,
  CreateChimeWebhookConfigurationCommandInput,
  CreateChimeWebhookConfigurationCommandOutput,
} from "./commands/CreateChimeWebhookConfigurationCommand";
import {
  CreateMicrosoftTeamsChannelConfigurationCommand,
  CreateMicrosoftTeamsChannelConfigurationCommandInput,
  CreateMicrosoftTeamsChannelConfigurationCommandOutput,
} from "./commands/CreateMicrosoftTeamsChannelConfigurationCommand";
import {
  CreateSlackChannelConfigurationCommand,
  CreateSlackChannelConfigurationCommandInput,
  CreateSlackChannelConfigurationCommandOutput,
} from "./commands/CreateSlackChannelConfigurationCommand";
import {
  DeleteChimeWebhookConfigurationCommand,
  DeleteChimeWebhookConfigurationCommandInput,
  DeleteChimeWebhookConfigurationCommandOutput,
} from "./commands/DeleteChimeWebhookConfigurationCommand";
import {
  DeleteMicrosoftTeamsChannelConfigurationCommand,
  DeleteMicrosoftTeamsChannelConfigurationCommandInput,
  DeleteMicrosoftTeamsChannelConfigurationCommandOutput,
} from "./commands/DeleteMicrosoftTeamsChannelConfigurationCommand";
import {
  DeleteMicrosoftTeamsConfiguredTeamCommand,
  DeleteMicrosoftTeamsConfiguredTeamCommandInput,
  DeleteMicrosoftTeamsConfiguredTeamCommandOutput,
} from "./commands/DeleteMicrosoftTeamsConfiguredTeamCommand";
import {
  DeleteMicrosoftTeamsUserIdentityCommand,
  DeleteMicrosoftTeamsUserIdentityCommandInput,
  DeleteMicrosoftTeamsUserIdentityCommandOutput,
} from "./commands/DeleteMicrosoftTeamsUserIdentityCommand";
import {
  DeleteSlackChannelConfigurationCommand,
  DeleteSlackChannelConfigurationCommandInput,
  DeleteSlackChannelConfigurationCommandOutput,
} from "./commands/DeleteSlackChannelConfigurationCommand";
import {
  DeleteSlackUserIdentityCommand,
  DeleteSlackUserIdentityCommandInput,
  DeleteSlackUserIdentityCommandOutput,
} from "./commands/DeleteSlackUserIdentityCommand";
import {
  DeleteSlackWorkspaceAuthorizationCommand,
  DeleteSlackWorkspaceAuthorizationCommandInput,
  DeleteSlackWorkspaceAuthorizationCommandOutput,
} from "./commands/DeleteSlackWorkspaceAuthorizationCommand";
import {
  DescribeChimeWebhookConfigurationsCommand,
  DescribeChimeWebhookConfigurationsCommandInput,
  DescribeChimeWebhookConfigurationsCommandOutput,
} from "./commands/DescribeChimeWebhookConfigurationsCommand";
import {
  DescribeSlackChannelConfigurationsCommand,
  DescribeSlackChannelConfigurationsCommandInput,
  DescribeSlackChannelConfigurationsCommandOutput,
} from "./commands/DescribeSlackChannelConfigurationsCommand";
import {
  DescribeSlackUserIdentitiesCommand,
  DescribeSlackUserIdentitiesCommandInput,
  DescribeSlackUserIdentitiesCommandOutput,
} from "./commands/DescribeSlackUserIdentitiesCommand";
import {
  DescribeSlackWorkspacesCommand,
  DescribeSlackWorkspacesCommandInput,
  DescribeSlackWorkspacesCommandOutput,
} from "./commands/DescribeSlackWorkspacesCommand";
import {
  GetAccountPreferencesCommand,
  GetAccountPreferencesCommandInput,
  GetAccountPreferencesCommandOutput,
} from "./commands/GetAccountPreferencesCommand";
import {
  GetMicrosoftTeamsChannelConfigurationCommand,
  GetMicrosoftTeamsChannelConfigurationCommandInput,
  GetMicrosoftTeamsChannelConfigurationCommandOutput,
} from "./commands/GetMicrosoftTeamsChannelConfigurationCommand";
import {
  ListMicrosoftTeamsChannelConfigurationsCommand,
  ListMicrosoftTeamsChannelConfigurationsCommandInput,
  ListMicrosoftTeamsChannelConfigurationsCommandOutput,
} from "./commands/ListMicrosoftTeamsChannelConfigurationsCommand";
import {
  ListMicrosoftTeamsConfiguredTeamsCommand,
  ListMicrosoftTeamsConfiguredTeamsCommandInput,
  ListMicrosoftTeamsConfiguredTeamsCommandOutput,
} from "./commands/ListMicrosoftTeamsConfiguredTeamsCommand";
import {
  ListMicrosoftTeamsUserIdentitiesCommand,
  ListMicrosoftTeamsUserIdentitiesCommandInput,
  ListMicrosoftTeamsUserIdentitiesCommandOutput,
} from "./commands/ListMicrosoftTeamsUserIdentitiesCommand";
import {
  UpdateAccountPreferencesCommand,
  UpdateAccountPreferencesCommandInput,
  UpdateAccountPreferencesCommandOutput,
} from "./commands/UpdateAccountPreferencesCommand";
import {
  UpdateChimeWebhookConfigurationCommand,
  UpdateChimeWebhookConfigurationCommandInput,
  UpdateChimeWebhookConfigurationCommandOutput,
} from "./commands/UpdateChimeWebhookConfigurationCommand";
import {
  UpdateMicrosoftTeamsChannelConfigurationCommand,
  UpdateMicrosoftTeamsChannelConfigurationCommandInput,
  UpdateMicrosoftTeamsChannelConfigurationCommandOutput,
} from "./commands/UpdateMicrosoftTeamsChannelConfigurationCommand";
import {
  UpdateSlackChannelConfigurationCommand,
  UpdateSlackChannelConfigurationCommandInput,
  UpdateSlackChannelConfigurationCommandOutput,
} from "./commands/UpdateSlackChannelConfigurationCommand";

const commands = {
  CreateChimeWebhookConfigurationCommand,
  CreateMicrosoftTeamsChannelConfigurationCommand,
  CreateSlackChannelConfigurationCommand,
  DeleteChimeWebhookConfigurationCommand,
  DeleteMicrosoftTeamsChannelConfigurationCommand,
  DeleteMicrosoftTeamsConfiguredTeamCommand,
  DeleteMicrosoftTeamsUserIdentityCommand,
  DeleteSlackChannelConfigurationCommand,
  DeleteSlackUserIdentityCommand,
  DeleteSlackWorkspaceAuthorizationCommand,
  DescribeChimeWebhookConfigurationsCommand,
  DescribeSlackChannelConfigurationsCommand,
  DescribeSlackUserIdentitiesCommand,
  DescribeSlackWorkspacesCommand,
  GetAccountPreferencesCommand,
  GetMicrosoftTeamsChannelConfigurationCommand,
  ListMicrosoftTeamsChannelConfigurationsCommand,
  ListMicrosoftTeamsConfiguredTeamsCommand,
  ListMicrosoftTeamsUserIdentitiesCommand,
  UpdateAccountPreferencesCommand,
  UpdateChimeWebhookConfigurationCommand,
  UpdateMicrosoftTeamsChannelConfigurationCommand,
  UpdateSlackChannelConfigurationCommand,
};

export interface Chatbot {
  /**
   * @see {@link CreateChimeWebhookConfigurationCommand}
   */
  createChimeWebhookConfiguration(
    args: CreateChimeWebhookConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateChimeWebhookConfigurationCommandOutput>;
  createChimeWebhookConfiguration(
    args: CreateChimeWebhookConfigurationCommandInput,
    cb: (err: any, data?: CreateChimeWebhookConfigurationCommandOutput) => void
  ): void;
  createChimeWebhookConfiguration(
    args: CreateChimeWebhookConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateChimeWebhookConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMicrosoftTeamsChannelConfigurationCommand}
   */
  createMicrosoftTeamsChannelConfiguration(
    args: CreateMicrosoftTeamsChannelConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMicrosoftTeamsChannelConfigurationCommandOutput>;
  createMicrosoftTeamsChannelConfiguration(
    args: CreateMicrosoftTeamsChannelConfigurationCommandInput,
    cb: (err: any, data?: CreateMicrosoftTeamsChannelConfigurationCommandOutput) => void
  ): void;
  createMicrosoftTeamsChannelConfiguration(
    args: CreateMicrosoftTeamsChannelConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMicrosoftTeamsChannelConfigurationCommandOutput) => void
  ): void;

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
   * @see {@link DeleteChimeWebhookConfigurationCommand}
   */
  deleteChimeWebhookConfiguration(
    args: DeleteChimeWebhookConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteChimeWebhookConfigurationCommandOutput>;
  deleteChimeWebhookConfiguration(
    args: DeleteChimeWebhookConfigurationCommandInput,
    cb: (err: any, data?: DeleteChimeWebhookConfigurationCommandOutput) => void
  ): void;
  deleteChimeWebhookConfiguration(
    args: DeleteChimeWebhookConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteChimeWebhookConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMicrosoftTeamsChannelConfigurationCommand}
   */
  deleteMicrosoftTeamsChannelConfiguration(
    args: DeleteMicrosoftTeamsChannelConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMicrosoftTeamsChannelConfigurationCommandOutput>;
  deleteMicrosoftTeamsChannelConfiguration(
    args: DeleteMicrosoftTeamsChannelConfigurationCommandInput,
    cb: (err: any, data?: DeleteMicrosoftTeamsChannelConfigurationCommandOutput) => void
  ): void;
  deleteMicrosoftTeamsChannelConfiguration(
    args: DeleteMicrosoftTeamsChannelConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMicrosoftTeamsChannelConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMicrosoftTeamsConfiguredTeamCommand}
   */
  deleteMicrosoftTeamsConfiguredTeam(
    args: DeleteMicrosoftTeamsConfiguredTeamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMicrosoftTeamsConfiguredTeamCommandOutput>;
  deleteMicrosoftTeamsConfiguredTeam(
    args: DeleteMicrosoftTeamsConfiguredTeamCommandInput,
    cb: (err: any, data?: DeleteMicrosoftTeamsConfiguredTeamCommandOutput) => void
  ): void;
  deleteMicrosoftTeamsConfiguredTeam(
    args: DeleteMicrosoftTeamsConfiguredTeamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMicrosoftTeamsConfiguredTeamCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMicrosoftTeamsUserIdentityCommand}
   */
  deleteMicrosoftTeamsUserIdentity(
    args: DeleteMicrosoftTeamsUserIdentityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMicrosoftTeamsUserIdentityCommandOutput>;
  deleteMicrosoftTeamsUserIdentity(
    args: DeleteMicrosoftTeamsUserIdentityCommandInput,
    cb: (err: any, data?: DeleteMicrosoftTeamsUserIdentityCommandOutput) => void
  ): void;
  deleteMicrosoftTeamsUserIdentity(
    args: DeleteMicrosoftTeamsUserIdentityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMicrosoftTeamsUserIdentityCommandOutput) => void
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
   * @see {@link DeleteSlackUserIdentityCommand}
   */
  deleteSlackUserIdentity(
    args: DeleteSlackUserIdentityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSlackUserIdentityCommandOutput>;
  deleteSlackUserIdentity(
    args: DeleteSlackUserIdentityCommandInput,
    cb: (err: any, data?: DeleteSlackUserIdentityCommandOutput) => void
  ): void;
  deleteSlackUserIdentity(
    args: DeleteSlackUserIdentityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSlackUserIdentityCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSlackWorkspaceAuthorizationCommand}
   */
  deleteSlackWorkspaceAuthorization(
    args: DeleteSlackWorkspaceAuthorizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSlackWorkspaceAuthorizationCommandOutput>;
  deleteSlackWorkspaceAuthorization(
    args: DeleteSlackWorkspaceAuthorizationCommandInput,
    cb: (err: any, data?: DeleteSlackWorkspaceAuthorizationCommandOutput) => void
  ): void;
  deleteSlackWorkspaceAuthorization(
    args: DeleteSlackWorkspaceAuthorizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSlackWorkspaceAuthorizationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeChimeWebhookConfigurationsCommand}
   */
  describeChimeWebhookConfigurations(): Promise<DescribeChimeWebhookConfigurationsCommandOutput>;
  describeChimeWebhookConfigurations(
    args: DescribeChimeWebhookConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeChimeWebhookConfigurationsCommandOutput>;
  describeChimeWebhookConfigurations(
    args: DescribeChimeWebhookConfigurationsCommandInput,
    cb: (err: any, data?: DescribeChimeWebhookConfigurationsCommandOutput) => void
  ): void;
  describeChimeWebhookConfigurations(
    args: DescribeChimeWebhookConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeChimeWebhookConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSlackChannelConfigurationsCommand}
   */
  describeSlackChannelConfigurations(): Promise<DescribeSlackChannelConfigurationsCommandOutput>;
  describeSlackChannelConfigurations(
    args: DescribeSlackChannelConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSlackChannelConfigurationsCommandOutput>;
  describeSlackChannelConfigurations(
    args: DescribeSlackChannelConfigurationsCommandInput,
    cb: (err: any, data?: DescribeSlackChannelConfigurationsCommandOutput) => void
  ): void;
  describeSlackChannelConfigurations(
    args: DescribeSlackChannelConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSlackChannelConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSlackUserIdentitiesCommand}
   */
  describeSlackUserIdentities(): Promise<DescribeSlackUserIdentitiesCommandOutput>;
  describeSlackUserIdentities(
    args: DescribeSlackUserIdentitiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSlackUserIdentitiesCommandOutput>;
  describeSlackUserIdentities(
    args: DescribeSlackUserIdentitiesCommandInput,
    cb: (err: any, data?: DescribeSlackUserIdentitiesCommandOutput) => void
  ): void;
  describeSlackUserIdentities(
    args: DescribeSlackUserIdentitiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSlackUserIdentitiesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSlackWorkspacesCommand}
   */
  describeSlackWorkspaces(): Promise<DescribeSlackWorkspacesCommandOutput>;
  describeSlackWorkspaces(
    args: DescribeSlackWorkspacesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSlackWorkspacesCommandOutput>;
  describeSlackWorkspaces(
    args: DescribeSlackWorkspacesCommandInput,
    cb: (err: any, data?: DescribeSlackWorkspacesCommandOutput) => void
  ): void;
  describeSlackWorkspaces(
    args: DescribeSlackWorkspacesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSlackWorkspacesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAccountPreferencesCommand}
   */
  getAccountPreferences(): Promise<GetAccountPreferencesCommandOutput>;
  getAccountPreferences(
    args: GetAccountPreferencesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccountPreferencesCommandOutput>;
  getAccountPreferences(
    args: GetAccountPreferencesCommandInput,
    cb: (err: any, data?: GetAccountPreferencesCommandOutput) => void
  ): void;
  getAccountPreferences(
    args: GetAccountPreferencesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccountPreferencesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMicrosoftTeamsChannelConfigurationCommand}
   */
  getMicrosoftTeamsChannelConfiguration(
    args: GetMicrosoftTeamsChannelConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMicrosoftTeamsChannelConfigurationCommandOutput>;
  getMicrosoftTeamsChannelConfiguration(
    args: GetMicrosoftTeamsChannelConfigurationCommandInput,
    cb: (err: any, data?: GetMicrosoftTeamsChannelConfigurationCommandOutput) => void
  ): void;
  getMicrosoftTeamsChannelConfiguration(
    args: GetMicrosoftTeamsChannelConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMicrosoftTeamsChannelConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMicrosoftTeamsChannelConfigurationsCommand}
   */
  listMicrosoftTeamsChannelConfigurations(): Promise<ListMicrosoftTeamsChannelConfigurationsCommandOutput>;
  listMicrosoftTeamsChannelConfigurations(
    args: ListMicrosoftTeamsChannelConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMicrosoftTeamsChannelConfigurationsCommandOutput>;
  listMicrosoftTeamsChannelConfigurations(
    args: ListMicrosoftTeamsChannelConfigurationsCommandInput,
    cb: (err: any, data?: ListMicrosoftTeamsChannelConfigurationsCommandOutput) => void
  ): void;
  listMicrosoftTeamsChannelConfigurations(
    args: ListMicrosoftTeamsChannelConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMicrosoftTeamsChannelConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMicrosoftTeamsConfiguredTeamsCommand}
   */
  listMicrosoftTeamsConfiguredTeams(): Promise<ListMicrosoftTeamsConfiguredTeamsCommandOutput>;
  listMicrosoftTeamsConfiguredTeams(
    args: ListMicrosoftTeamsConfiguredTeamsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMicrosoftTeamsConfiguredTeamsCommandOutput>;
  listMicrosoftTeamsConfiguredTeams(
    args: ListMicrosoftTeamsConfiguredTeamsCommandInput,
    cb: (err: any, data?: ListMicrosoftTeamsConfiguredTeamsCommandOutput) => void
  ): void;
  listMicrosoftTeamsConfiguredTeams(
    args: ListMicrosoftTeamsConfiguredTeamsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMicrosoftTeamsConfiguredTeamsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMicrosoftTeamsUserIdentitiesCommand}
   */
  listMicrosoftTeamsUserIdentities(): Promise<ListMicrosoftTeamsUserIdentitiesCommandOutput>;
  listMicrosoftTeamsUserIdentities(
    args: ListMicrosoftTeamsUserIdentitiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMicrosoftTeamsUserIdentitiesCommandOutput>;
  listMicrosoftTeamsUserIdentities(
    args: ListMicrosoftTeamsUserIdentitiesCommandInput,
    cb: (err: any, data?: ListMicrosoftTeamsUserIdentitiesCommandOutput) => void
  ): void;
  listMicrosoftTeamsUserIdentities(
    args: ListMicrosoftTeamsUserIdentitiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMicrosoftTeamsUserIdentitiesCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAccountPreferencesCommand}
   */
  updateAccountPreferences(): Promise<UpdateAccountPreferencesCommandOutput>;
  updateAccountPreferences(
    args: UpdateAccountPreferencesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAccountPreferencesCommandOutput>;
  updateAccountPreferences(
    args: UpdateAccountPreferencesCommandInput,
    cb: (err: any, data?: UpdateAccountPreferencesCommandOutput) => void
  ): void;
  updateAccountPreferences(
    args: UpdateAccountPreferencesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAccountPreferencesCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateChimeWebhookConfigurationCommand}
   */
  updateChimeWebhookConfiguration(
    args: UpdateChimeWebhookConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateChimeWebhookConfigurationCommandOutput>;
  updateChimeWebhookConfiguration(
    args: UpdateChimeWebhookConfigurationCommandInput,
    cb: (err: any, data?: UpdateChimeWebhookConfigurationCommandOutput) => void
  ): void;
  updateChimeWebhookConfiguration(
    args: UpdateChimeWebhookConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateChimeWebhookConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateMicrosoftTeamsChannelConfigurationCommand}
   */
  updateMicrosoftTeamsChannelConfiguration(
    args: UpdateMicrosoftTeamsChannelConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMicrosoftTeamsChannelConfigurationCommandOutput>;
  updateMicrosoftTeamsChannelConfiguration(
    args: UpdateMicrosoftTeamsChannelConfigurationCommandInput,
    cb: (err: any, data?: UpdateMicrosoftTeamsChannelConfigurationCommandOutput) => void
  ): void;
  updateMicrosoftTeamsChannelConfiguration(
    args: UpdateMicrosoftTeamsChannelConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMicrosoftTeamsChannelConfigurationCommandOutput) => void
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
 * AWS Chatbot API
 * @public
 */
export class Chatbot extends ChatbotClient implements Chatbot {}
createAggregatedClient(commands, Chatbot);
