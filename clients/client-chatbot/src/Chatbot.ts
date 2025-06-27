// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { ChatbotClient, ChatbotClientConfig } from "./ChatbotClient";
import {
  AssociateToConfigurationCommand,
  AssociateToConfigurationCommandInput,
  AssociateToConfigurationCommandOutput,
} from "./commands/AssociateToConfigurationCommand";
import {
  CreateChimeWebhookConfigurationCommand,
  CreateChimeWebhookConfigurationCommandInput,
  CreateChimeWebhookConfigurationCommandOutput,
} from "./commands/CreateChimeWebhookConfigurationCommand";
import {
  CreateCustomActionCommand,
  CreateCustomActionCommandInput,
  CreateCustomActionCommandOutput,
} from "./commands/CreateCustomActionCommand";
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
  DeleteCustomActionCommand,
  DeleteCustomActionCommandInput,
  DeleteCustomActionCommandOutput,
} from "./commands/DeleteCustomActionCommand";
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
  DisassociateFromConfigurationCommand,
  DisassociateFromConfigurationCommandInput,
  DisassociateFromConfigurationCommandOutput,
} from "./commands/DisassociateFromConfigurationCommand";
import {
  GetAccountPreferencesCommand,
  GetAccountPreferencesCommandInput,
  GetAccountPreferencesCommandOutput,
} from "./commands/GetAccountPreferencesCommand";
import {
  GetCustomActionCommand,
  GetCustomActionCommandInput,
  GetCustomActionCommandOutput,
} from "./commands/GetCustomActionCommand";
import {
  GetMicrosoftTeamsChannelConfigurationCommand,
  GetMicrosoftTeamsChannelConfigurationCommandInput,
  GetMicrosoftTeamsChannelConfigurationCommandOutput,
} from "./commands/GetMicrosoftTeamsChannelConfigurationCommand";
import {
  ListAssociationsCommand,
  ListAssociationsCommandInput,
  ListAssociationsCommandOutput,
} from "./commands/ListAssociationsCommand";
import {
  ListCustomActionsCommand,
  ListCustomActionsCommandInput,
  ListCustomActionsCommandOutput,
} from "./commands/ListCustomActionsCommand";
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
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
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
  UpdateCustomActionCommand,
  UpdateCustomActionCommandInput,
  UpdateCustomActionCommandOutput,
} from "./commands/UpdateCustomActionCommand";
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
  AssociateToConfigurationCommand,
  CreateChimeWebhookConfigurationCommand,
  CreateCustomActionCommand,
  CreateMicrosoftTeamsChannelConfigurationCommand,
  CreateSlackChannelConfigurationCommand,
  DeleteChimeWebhookConfigurationCommand,
  DeleteCustomActionCommand,
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
  DisassociateFromConfigurationCommand,
  GetAccountPreferencesCommand,
  GetCustomActionCommand,
  GetMicrosoftTeamsChannelConfigurationCommand,
  ListAssociationsCommand,
  ListCustomActionsCommand,
  ListMicrosoftTeamsChannelConfigurationsCommand,
  ListMicrosoftTeamsConfiguredTeamsCommand,
  ListMicrosoftTeamsUserIdentitiesCommand,
  ListTagsForResourceCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAccountPreferencesCommand,
  UpdateChimeWebhookConfigurationCommand,
  UpdateCustomActionCommand,
  UpdateMicrosoftTeamsChannelConfigurationCommand,
  UpdateSlackChannelConfigurationCommand,
};

export interface Chatbot {
  /**
   * @see {@link AssociateToConfigurationCommand}
   */
  associateToConfiguration(
    args: AssociateToConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateToConfigurationCommandOutput>;
  associateToConfiguration(
    args: AssociateToConfigurationCommandInput,
    cb: (err: any, data?: AssociateToConfigurationCommandOutput) => void
  ): void;
  associateToConfiguration(
    args: AssociateToConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateToConfigurationCommandOutput) => void
  ): void;

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
   * @see {@link CreateCustomActionCommand}
   */
  createCustomAction(
    args: CreateCustomActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCustomActionCommandOutput>;
  createCustomAction(
    args: CreateCustomActionCommandInput,
    cb: (err: any, data?: CreateCustomActionCommandOutput) => void
  ): void;
  createCustomAction(
    args: CreateCustomActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCustomActionCommandOutput) => void
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
   * @see {@link DeleteCustomActionCommand}
   */
  deleteCustomAction(
    args: DeleteCustomActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCustomActionCommandOutput>;
  deleteCustomAction(
    args: DeleteCustomActionCommandInput,
    cb: (err: any, data?: DeleteCustomActionCommandOutput) => void
  ): void;
  deleteCustomAction(
    args: DeleteCustomActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCustomActionCommandOutput) => void
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
   * @see {@link DisassociateFromConfigurationCommand}
   */
  disassociateFromConfiguration(
    args: DisassociateFromConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateFromConfigurationCommandOutput>;
  disassociateFromConfiguration(
    args: DisassociateFromConfigurationCommandInput,
    cb: (err: any, data?: DisassociateFromConfigurationCommandOutput) => void
  ): void;
  disassociateFromConfiguration(
    args: DisassociateFromConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateFromConfigurationCommandOutput) => void
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
   * @see {@link GetCustomActionCommand}
   */
  getCustomAction(
    args: GetCustomActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCustomActionCommandOutput>;
  getCustomAction(args: GetCustomActionCommandInput, cb: (err: any, data?: GetCustomActionCommandOutput) => void): void;
  getCustomAction(
    args: GetCustomActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCustomActionCommandOutput) => void
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
   * @see {@link ListAssociationsCommand}
   */
  listAssociations(
    args: ListAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAssociationsCommandOutput>;
  listAssociations(
    args: ListAssociationsCommandInput,
    cb: (err: any, data?: ListAssociationsCommandOutput) => void
  ): void;
  listAssociations(
    args: ListAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCustomActionsCommand}
   */
  listCustomActions(): Promise<ListCustomActionsCommandOutput>;
  listCustomActions(
    args: ListCustomActionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCustomActionsCommandOutput>;
  listCustomActions(
    args: ListCustomActionsCommandInput,
    cb: (err: any, data?: ListCustomActionsCommandOutput) => void
  ): void;
  listCustomActions(
    args: ListCustomActionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCustomActionsCommandOutput) => void
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
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
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
   * @see {@link UpdateCustomActionCommand}
   */
  updateCustomAction(
    args: UpdateCustomActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCustomActionCommandOutput>;
  updateCustomAction(
    args: UpdateCustomActionCommandInput,
    cb: (err: any, data?: UpdateCustomActionCommandOutput) => void
  ): void;
  updateCustomAction(
    args: UpdateCustomActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCustomActionCommandOutput) => void
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
 * <p>The <i>AWS Chatbot API Reference</i> provides descriptions, API request parameters, and the XML response for each of the AWS Chatbot API actions.</p>
 *          <p>AWS Chatbot APIs are currently available in the following Regions:</p>
 *          <ul>
 *             <li>
 *                <p>US East (Ohio) - <code>us-east-2</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>US West (Oregon) - <code>us-west-2</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>Asia Pacific (Singapore) - <code>ap-southeast-1</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>Europe (Ireland) - <code>eu-west-1</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>The AWS Chatbot console can only be used in US East (Ohio). Your configuration data however, is stored in each of the relevant available Regions.</p>
 *          <note>
 *             <p>Your AWS CloudTrail events are logged in whatever Region you call from, not US East (N. Virginia) by default.</p>
 *          </note>
 * @public
 */
export class Chatbot extends ChatbotClient implements Chatbot {}
createAggregatedClient(commands, Chatbot);
