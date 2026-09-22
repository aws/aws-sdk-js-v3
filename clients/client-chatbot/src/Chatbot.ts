// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import { ChatbotClient } from "./ChatbotClient";
import {
  type AssociateToConfigurationCommandInput,
  type AssociateToConfigurationCommandOutput,
  AssociateToConfigurationCommand,
} from "./commands/AssociateToConfigurationCommand";
import {
  type CreateChimeWebhookConfigurationCommandInput,
  type CreateChimeWebhookConfigurationCommandOutput,
  CreateChimeWebhookConfigurationCommand,
} from "./commands/CreateChimeWebhookConfigurationCommand";
import {
  type CreateCustomActionCommandInput,
  type CreateCustomActionCommandOutput,
  CreateCustomActionCommand,
} from "./commands/CreateCustomActionCommand";
import {
  type CreateMicrosoftTeamsChannelConfigurationCommandInput,
  type CreateMicrosoftTeamsChannelConfigurationCommandOutput,
  CreateMicrosoftTeamsChannelConfigurationCommand,
} from "./commands/CreateMicrosoftTeamsChannelConfigurationCommand";
import {
  type CreateSlackChannelConfigurationCommandInput,
  type CreateSlackChannelConfigurationCommandOutput,
  CreateSlackChannelConfigurationCommand,
} from "./commands/CreateSlackChannelConfigurationCommand";
import {
  type DeleteChimeWebhookConfigurationCommandInput,
  type DeleteChimeWebhookConfigurationCommandOutput,
  DeleteChimeWebhookConfigurationCommand,
} from "./commands/DeleteChimeWebhookConfigurationCommand";
import {
  type DeleteCustomActionCommandInput,
  type DeleteCustomActionCommandOutput,
  DeleteCustomActionCommand,
} from "./commands/DeleteCustomActionCommand";
import {
  type DeleteMicrosoftTeamsChannelConfigurationCommandInput,
  type DeleteMicrosoftTeamsChannelConfigurationCommandOutput,
  DeleteMicrosoftTeamsChannelConfigurationCommand,
} from "./commands/DeleteMicrosoftTeamsChannelConfigurationCommand";
import {
  type DeleteMicrosoftTeamsConfiguredTeamCommandInput,
  type DeleteMicrosoftTeamsConfiguredTeamCommandOutput,
  DeleteMicrosoftTeamsConfiguredTeamCommand,
} from "./commands/DeleteMicrosoftTeamsConfiguredTeamCommand";
import {
  type DeleteMicrosoftTeamsUserIdentityCommandInput,
  type DeleteMicrosoftTeamsUserIdentityCommandOutput,
  DeleteMicrosoftTeamsUserIdentityCommand,
} from "./commands/DeleteMicrosoftTeamsUserIdentityCommand";
import {
  type DeleteSlackChannelConfigurationCommandInput,
  type DeleteSlackChannelConfigurationCommandOutput,
  DeleteSlackChannelConfigurationCommand,
} from "./commands/DeleteSlackChannelConfigurationCommand";
import {
  type DeleteSlackUserIdentityCommandInput,
  type DeleteSlackUserIdentityCommandOutput,
  DeleteSlackUserIdentityCommand,
} from "./commands/DeleteSlackUserIdentityCommand";
import {
  type DeleteSlackWorkspaceAuthorizationCommandInput,
  type DeleteSlackWorkspaceAuthorizationCommandOutput,
  DeleteSlackWorkspaceAuthorizationCommand,
} from "./commands/DeleteSlackWorkspaceAuthorizationCommand";
import {
  type DescribeChimeWebhookConfigurationsCommandInput,
  type DescribeChimeWebhookConfigurationsCommandOutput,
  DescribeChimeWebhookConfigurationsCommand,
} from "./commands/DescribeChimeWebhookConfigurationsCommand";
import {
  type DescribeSlackChannelConfigurationsCommandInput,
  type DescribeSlackChannelConfigurationsCommandOutput,
  DescribeSlackChannelConfigurationsCommand,
} from "./commands/DescribeSlackChannelConfigurationsCommand";
import {
  type DescribeSlackUserIdentitiesCommandInput,
  type DescribeSlackUserIdentitiesCommandOutput,
  DescribeSlackUserIdentitiesCommand,
} from "./commands/DescribeSlackUserIdentitiesCommand";
import {
  type DescribeSlackWorkspacesCommandInput,
  type DescribeSlackWorkspacesCommandOutput,
  DescribeSlackWorkspacesCommand,
} from "./commands/DescribeSlackWorkspacesCommand";
import {
  type DisassociateFromConfigurationCommandInput,
  type DisassociateFromConfigurationCommandOutput,
  DisassociateFromConfigurationCommand,
} from "./commands/DisassociateFromConfigurationCommand";
import {
  type GetAccountPreferencesCommandInput,
  type GetAccountPreferencesCommandOutput,
  GetAccountPreferencesCommand,
} from "./commands/GetAccountPreferencesCommand";
import {
  type GetCustomActionCommandInput,
  type GetCustomActionCommandOutput,
  GetCustomActionCommand,
} from "./commands/GetCustomActionCommand";
import {
  type GetMicrosoftTeamsChannelConfigurationCommandInput,
  type GetMicrosoftTeamsChannelConfigurationCommandOutput,
  GetMicrosoftTeamsChannelConfigurationCommand,
} from "./commands/GetMicrosoftTeamsChannelConfigurationCommand";
import {
  type ListAssociationsCommandInput,
  type ListAssociationsCommandOutput,
  ListAssociationsCommand,
} from "./commands/ListAssociationsCommand";
import {
  type ListCustomActionsCommandInput,
  type ListCustomActionsCommandOutput,
  ListCustomActionsCommand,
} from "./commands/ListCustomActionsCommand";
import {
  type ListMicrosoftTeamsChannelConfigurationsCommandInput,
  type ListMicrosoftTeamsChannelConfigurationsCommandOutput,
  ListMicrosoftTeamsChannelConfigurationsCommand,
} from "./commands/ListMicrosoftTeamsChannelConfigurationsCommand";
import {
  type ListMicrosoftTeamsConfiguredTeamsCommandInput,
  type ListMicrosoftTeamsConfiguredTeamsCommandOutput,
  ListMicrosoftTeamsConfiguredTeamsCommand,
} from "./commands/ListMicrosoftTeamsConfiguredTeamsCommand";
import {
  type ListMicrosoftTeamsUserIdentitiesCommandInput,
  type ListMicrosoftTeamsUserIdentitiesCommandOutput,
  ListMicrosoftTeamsUserIdentitiesCommand,
} from "./commands/ListMicrosoftTeamsUserIdentitiesCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateAccountPreferencesCommandInput,
  type UpdateAccountPreferencesCommandOutput,
  UpdateAccountPreferencesCommand,
} from "./commands/UpdateAccountPreferencesCommand";
import {
  type UpdateChimeWebhookConfigurationCommandInput,
  type UpdateChimeWebhookConfigurationCommandOutput,
  UpdateChimeWebhookConfigurationCommand,
} from "./commands/UpdateChimeWebhookConfigurationCommand";
import {
  type UpdateCustomActionCommandInput,
  type UpdateCustomActionCommandOutput,
  UpdateCustomActionCommand,
} from "./commands/UpdateCustomActionCommand";
import {
  type UpdateMicrosoftTeamsChannelConfigurationCommandInput,
  type UpdateMicrosoftTeamsChannelConfigurationCommandOutput,
  UpdateMicrosoftTeamsChannelConfigurationCommand,
} from "./commands/UpdateMicrosoftTeamsChannelConfigurationCommand";
import {
  type UpdateSlackChannelConfigurationCommandInput,
  type UpdateSlackChannelConfigurationCommandOutput,
  UpdateSlackChannelConfigurationCommand,
} from "./commands/UpdateSlackChannelConfigurationCommand";
import { paginateDescribeChimeWebhookConfigurations } from "./pagination/DescribeChimeWebhookConfigurationsPaginator";
import { paginateDescribeSlackChannelConfigurations } from "./pagination/DescribeSlackChannelConfigurationsPaginator";
import { paginateDescribeSlackUserIdentities } from "./pagination/DescribeSlackUserIdentitiesPaginator";
import { paginateDescribeSlackWorkspaces } from "./pagination/DescribeSlackWorkspacesPaginator";
import { paginateListAssociations } from "./pagination/ListAssociationsPaginator";
import { paginateListCustomActions } from "./pagination/ListCustomActionsPaginator";
import {
  paginateListMicrosoftTeamsChannelConfigurations,
} from "./pagination/ListMicrosoftTeamsChannelConfigurationsPaginator";
import { paginateListMicrosoftTeamsConfiguredTeams } from "./pagination/ListMicrosoftTeamsConfiguredTeamsPaginator";
import { paginateListMicrosoftTeamsUserIdentities } from "./pagination/ListMicrosoftTeamsUserIdentitiesPaginator";

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
const paginators = {
  paginateDescribeChimeWebhookConfigurations,
  paginateDescribeSlackChannelConfigurations,
  paginateDescribeSlackUserIdentities,
  paginateDescribeSlackWorkspaces,
  paginateListAssociations,
  paginateListCustomActions,
  paginateListMicrosoftTeamsChannelConfigurations,
  paginateListMicrosoftTeamsConfiguredTeams,
  paginateListMicrosoftTeamsUserIdentities,
};

/**
 * @public
 */
export interface ChatbotRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface Chatbot {
  /**
   * @see {@link AssociateToConfigurationCommand}
   */
  associateToConfiguration(
    args: AssociateToConfigurationCommandInput,
    options?: ChatbotRequestOptions
  ): Promise<AssociateToConfigurationCommandOutput>;
  associateToConfiguration(
    args: AssociateToConfigurationCommandInput,
    cb: (err: any, data?: AssociateToConfigurationCommandOutput) => void
  ): void;
  associateToConfiguration(
    args: AssociateToConfigurationCommandInput,
    options: ChatbotRequestOptions,
    cb: (err: any, data?: AssociateToConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateChimeWebhookConfigurationCommand}
   */
  createChimeWebhookConfiguration(
    args: CreateChimeWebhookConfigurationCommandInput,
    options?: ChatbotRequestOptions
  ): Promise<CreateChimeWebhookConfigurationCommandOutput>;
  createChimeWebhookConfiguration(
    args: CreateChimeWebhookConfigurationCommandInput,
    cb: (err: any, data?: CreateChimeWebhookConfigurationCommandOutput) => void
  ): void;
  createChimeWebhookConfiguration(
    args: CreateChimeWebhookConfigurationCommandInput,
    options: ChatbotRequestOptions,
    cb: (err: any, data?: CreateChimeWebhookConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCustomActionCommand}
   */
  createCustomAction(
    args: CreateCustomActionCommandInput,
    options?: ChatbotRequestOptions
  ): Promise<CreateCustomActionCommandOutput>;
  createCustomAction(
    args: CreateCustomActionCommandInput,
    cb: (err: any, data?: CreateCustomActionCommandOutput) => void
  ): void;
  createCustomAction(
    args: CreateCustomActionCommandInput,
    options: ChatbotRequestOptions,
    cb: (err: any, data?: CreateCustomActionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMicrosoftTeamsChannelConfigurationCommand}
   */
  createMicrosoftTeamsChannelConfiguration(
    args: CreateMicrosoftTeamsChannelConfigurationCommandInput,
    options?: ChatbotRequestOptions
  ): Promise<CreateMicrosoftTeamsChannelConfigurationCommandOutput>;
  createMicrosoftTeamsChannelConfiguration(
    args: CreateMicrosoftTeamsChannelConfigurationCommandInput,
    cb: (err: any, data?: CreateMicrosoftTeamsChannelConfigurationCommandOutput) => void
  ): void;
  createMicrosoftTeamsChannelConfiguration(
    args: CreateMicrosoftTeamsChannelConfigurationCommandInput,
    options: ChatbotRequestOptions,
    cb: (err: any, data?: CreateMicrosoftTeamsChannelConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSlackChannelConfigurationCommand}
   */
  createSlackChannelConfiguration(
    args: CreateSlackChannelConfigurationCommandInput,
    options?: ChatbotRequestOptions
  ): Promise<CreateSlackChannelConfigurationCommandOutput>;
  createSlackChannelConfiguration(
    args: CreateSlackChannelConfigurationCommandInput,
    cb: (err: any, data?: CreateSlackChannelConfigurationCommandOutput) => void
  ): void;
  createSlackChannelConfiguration(
    args: CreateSlackChannelConfigurationCommandInput,
    options: ChatbotRequestOptions,
    cb: (err: any, data?: CreateSlackChannelConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteChimeWebhookConfigurationCommand}
   */
  deleteChimeWebhookConfiguration(
    args: DeleteChimeWebhookConfigurationCommandInput,
    options?: ChatbotRequestOptions
  ): Promise<DeleteChimeWebhookConfigurationCommandOutput>;
  deleteChimeWebhookConfiguration(
    args: DeleteChimeWebhookConfigurationCommandInput,
    cb: (err: any, data?: DeleteChimeWebhookConfigurationCommandOutput) => void
  ): void;
  deleteChimeWebhookConfiguration(
    args: DeleteChimeWebhookConfigurationCommandInput,
    options: ChatbotRequestOptions,
    cb: (err: any, data?: DeleteChimeWebhookConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCustomActionCommand}
   */
  deleteCustomAction(
    args: DeleteCustomActionCommandInput,
    options?: ChatbotRequestOptions
  ): Promise<DeleteCustomActionCommandOutput>;
  deleteCustomAction(
    args: DeleteCustomActionCommandInput,
    cb: (err: any, data?: DeleteCustomActionCommandOutput) => void
  ): void;
  deleteCustomAction(
    args: DeleteCustomActionCommandInput,
    options: ChatbotRequestOptions,
    cb: (err: any, data?: DeleteCustomActionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMicrosoftTeamsChannelConfigurationCommand}
   */
  deleteMicrosoftTeamsChannelConfiguration(
    args: DeleteMicrosoftTeamsChannelConfigurationCommandInput,
    options?: ChatbotRequestOptions
  ): Promise<DeleteMicrosoftTeamsChannelConfigurationCommandOutput>;
  deleteMicrosoftTeamsChannelConfiguration(
    args: DeleteMicrosoftTeamsChannelConfigurationCommandInput,
    cb: (err: any, data?: DeleteMicrosoftTeamsChannelConfigurationCommandOutput) => void
  ): void;
  deleteMicrosoftTeamsChannelConfiguration(
    args: DeleteMicrosoftTeamsChannelConfigurationCommandInput,
    options: ChatbotRequestOptions,
    cb: (err: any, data?: DeleteMicrosoftTeamsChannelConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMicrosoftTeamsConfiguredTeamCommand}
   */
  deleteMicrosoftTeamsConfiguredTeam(
    args: DeleteMicrosoftTeamsConfiguredTeamCommandInput,
    options?: ChatbotRequestOptions
  ): Promise<DeleteMicrosoftTeamsConfiguredTeamCommandOutput>;
  deleteMicrosoftTeamsConfiguredTeam(
    args: DeleteMicrosoftTeamsConfiguredTeamCommandInput,
    cb: (err: any, data?: DeleteMicrosoftTeamsConfiguredTeamCommandOutput) => void
  ): void;
  deleteMicrosoftTeamsConfiguredTeam(
    args: DeleteMicrosoftTeamsConfiguredTeamCommandInput,
    options: ChatbotRequestOptions,
    cb: (err: any, data?: DeleteMicrosoftTeamsConfiguredTeamCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMicrosoftTeamsUserIdentityCommand}
   */
  deleteMicrosoftTeamsUserIdentity(
    args: DeleteMicrosoftTeamsUserIdentityCommandInput,
    options?: ChatbotRequestOptions
  ): Promise<DeleteMicrosoftTeamsUserIdentityCommandOutput>;
  deleteMicrosoftTeamsUserIdentity(
    args: DeleteMicrosoftTeamsUserIdentityCommandInput,
    cb: (err: any, data?: DeleteMicrosoftTeamsUserIdentityCommandOutput) => void
  ): void;
  deleteMicrosoftTeamsUserIdentity(
    args: DeleteMicrosoftTeamsUserIdentityCommandInput,
    options: ChatbotRequestOptions,
    cb: (err: any, data?: DeleteMicrosoftTeamsUserIdentityCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSlackChannelConfigurationCommand}
   */
  deleteSlackChannelConfiguration(
    args: DeleteSlackChannelConfigurationCommandInput,
    options?: ChatbotRequestOptions
  ): Promise<DeleteSlackChannelConfigurationCommandOutput>;
  deleteSlackChannelConfiguration(
    args: DeleteSlackChannelConfigurationCommandInput,
    cb: (err: any, data?: DeleteSlackChannelConfigurationCommandOutput) => void
  ): void;
  deleteSlackChannelConfiguration(
    args: DeleteSlackChannelConfigurationCommandInput,
    options: ChatbotRequestOptions,
    cb: (err: any, data?: DeleteSlackChannelConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSlackUserIdentityCommand}
   */
  deleteSlackUserIdentity(
    args: DeleteSlackUserIdentityCommandInput,
    options?: ChatbotRequestOptions
  ): Promise<DeleteSlackUserIdentityCommandOutput>;
  deleteSlackUserIdentity(
    args: DeleteSlackUserIdentityCommandInput,
    cb: (err: any, data?: DeleteSlackUserIdentityCommandOutput) => void
  ): void;
  deleteSlackUserIdentity(
    args: DeleteSlackUserIdentityCommandInput,
    options: ChatbotRequestOptions,
    cb: (err: any, data?: DeleteSlackUserIdentityCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSlackWorkspaceAuthorizationCommand}
   */
  deleteSlackWorkspaceAuthorization(
    args: DeleteSlackWorkspaceAuthorizationCommandInput,
    options?: ChatbotRequestOptions
  ): Promise<DeleteSlackWorkspaceAuthorizationCommandOutput>;
  deleteSlackWorkspaceAuthorization(
    args: DeleteSlackWorkspaceAuthorizationCommandInput,
    cb: (err: any, data?: DeleteSlackWorkspaceAuthorizationCommandOutput) => void
  ): void;
  deleteSlackWorkspaceAuthorization(
    args: DeleteSlackWorkspaceAuthorizationCommandInput,
    options: ChatbotRequestOptions,
    cb: (err: any, data?: DeleteSlackWorkspaceAuthorizationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeChimeWebhookConfigurationsCommand}
   */
  describeChimeWebhookConfigurations(): Promise<DescribeChimeWebhookConfigurationsCommandOutput>;
  describeChimeWebhookConfigurations(
    args: DescribeChimeWebhookConfigurationsCommandInput,
    options?: ChatbotRequestOptions
  ): Promise<DescribeChimeWebhookConfigurationsCommandOutput>;
  describeChimeWebhookConfigurations(
    args: DescribeChimeWebhookConfigurationsCommandInput,
    cb: (err: any, data?: DescribeChimeWebhookConfigurationsCommandOutput) => void
  ): void;
  describeChimeWebhookConfigurations(
    args: DescribeChimeWebhookConfigurationsCommandInput,
    options: ChatbotRequestOptions,
    cb: (err: any, data?: DescribeChimeWebhookConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSlackChannelConfigurationsCommand}
   */
  describeSlackChannelConfigurations(): Promise<DescribeSlackChannelConfigurationsCommandOutput>;
  describeSlackChannelConfigurations(
    args: DescribeSlackChannelConfigurationsCommandInput,
    options?: ChatbotRequestOptions
  ): Promise<DescribeSlackChannelConfigurationsCommandOutput>;
  describeSlackChannelConfigurations(
    args: DescribeSlackChannelConfigurationsCommandInput,
    cb: (err: any, data?: DescribeSlackChannelConfigurationsCommandOutput) => void
  ): void;
  describeSlackChannelConfigurations(
    args: DescribeSlackChannelConfigurationsCommandInput,
    options: ChatbotRequestOptions,
    cb: (err: any, data?: DescribeSlackChannelConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSlackUserIdentitiesCommand}
   */
  describeSlackUserIdentities(): Promise<DescribeSlackUserIdentitiesCommandOutput>;
  describeSlackUserIdentities(
    args: DescribeSlackUserIdentitiesCommandInput,
    options?: ChatbotRequestOptions
  ): Promise<DescribeSlackUserIdentitiesCommandOutput>;
  describeSlackUserIdentities(
    args: DescribeSlackUserIdentitiesCommandInput,
    cb: (err: any, data?: DescribeSlackUserIdentitiesCommandOutput) => void
  ): void;
  describeSlackUserIdentities(
    args: DescribeSlackUserIdentitiesCommandInput,
    options: ChatbotRequestOptions,
    cb: (err: any, data?: DescribeSlackUserIdentitiesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSlackWorkspacesCommand}
   */
  describeSlackWorkspaces(): Promise<DescribeSlackWorkspacesCommandOutput>;
  describeSlackWorkspaces(
    args: DescribeSlackWorkspacesCommandInput,
    options?: ChatbotRequestOptions
  ): Promise<DescribeSlackWorkspacesCommandOutput>;
  describeSlackWorkspaces(
    args: DescribeSlackWorkspacesCommandInput,
    cb: (err: any, data?: DescribeSlackWorkspacesCommandOutput) => void
  ): void;
  describeSlackWorkspaces(
    args: DescribeSlackWorkspacesCommandInput,
    options: ChatbotRequestOptions,
    cb: (err: any, data?: DescribeSlackWorkspacesCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateFromConfigurationCommand}
   */
  disassociateFromConfiguration(
    args: DisassociateFromConfigurationCommandInput,
    options?: ChatbotRequestOptions
  ): Promise<DisassociateFromConfigurationCommandOutput>;
  disassociateFromConfiguration(
    args: DisassociateFromConfigurationCommandInput,
    cb: (err: any, data?: DisassociateFromConfigurationCommandOutput) => void
  ): void;
  disassociateFromConfiguration(
    args: DisassociateFromConfigurationCommandInput,
    options: ChatbotRequestOptions,
    cb: (err: any, data?: DisassociateFromConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAccountPreferencesCommand}
   */
  getAccountPreferences(): Promise<GetAccountPreferencesCommandOutput>;
  getAccountPreferences(
    args: GetAccountPreferencesCommandInput,
    options?: ChatbotRequestOptions
  ): Promise<GetAccountPreferencesCommandOutput>;
  getAccountPreferences(
    args: GetAccountPreferencesCommandInput,
    cb: (err: any, data?: GetAccountPreferencesCommandOutput) => void
  ): void;
  getAccountPreferences(
    args: GetAccountPreferencesCommandInput,
    options: ChatbotRequestOptions,
    cb: (err: any, data?: GetAccountPreferencesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCustomActionCommand}
   */
  getCustomAction(
    args: GetCustomActionCommandInput,
    options?: ChatbotRequestOptions
  ): Promise<GetCustomActionCommandOutput>;
  getCustomAction(
    args: GetCustomActionCommandInput,
    cb: (err: any, data?: GetCustomActionCommandOutput) => void
  ): void;
  getCustomAction(
    args: GetCustomActionCommandInput,
    options: ChatbotRequestOptions,
    cb: (err: any, data?: GetCustomActionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMicrosoftTeamsChannelConfigurationCommand}
   */
  getMicrosoftTeamsChannelConfiguration(
    args: GetMicrosoftTeamsChannelConfigurationCommandInput,
    options?: ChatbotRequestOptions
  ): Promise<GetMicrosoftTeamsChannelConfigurationCommandOutput>;
  getMicrosoftTeamsChannelConfiguration(
    args: GetMicrosoftTeamsChannelConfigurationCommandInput,
    cb: (err: any, data?: GetMicrosoftTeamsChannelConfigurationCommandOutput) => void
  ): void;
  getMicrosoftTeamsChannelConfiguration(
    args: GetMicrosoftTeamsChannelConfigurationCommandInput,
    options: ChatbotRequestOptions,
    cb: (err: any, data?: GetMicrosoftTeamsChannelConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAssociationsCommand}
   */
  listAssociations(
    args: ListAssociationsCommandInput,
    options?: ChatbotRequestOptions
  ): Promise<ListAssociationsCommandOutput>;
  listAssociations(
    args: ListAssociationsCommandInput,
    cb: (err: any, data?: ListAssociationsCommandOutput) => void
  ): void;
  listAssociations(
    args: ListAssociationsCommandInput,
    options: ChatbotRequestOptions,
    cb: (err: any, data?: ListAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCustomActionsCommand}
   */
  listCustomActions(): Promise<ListCustomActionsCommandOutput>;
  listCustomActions(
    args: ListCustomActionsCommandInput,
    options?: ChatbotRequestOptions
  ): Promise<ListCustomActionsCommandOutput>;
  listCustomActions(
    args: ListCustomActionsCommandInput,
    cb: (err: any, data?: ListCustomActionsCommandOutput) => void
  ): void;
  listCustomActions(
    args: ListCustomActionsCommandInput,
    options: ChatbotRequestOptions,
    cb: (err: any, data?: ListCustomActionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMicrosoftTeamsChannelConfigurationsCommand}
   */
  listMicrosoftTeamsChannelConfigurations(): Promise<ListMicrosoftTeamsChannelConfigurationsCommandOutput>;
  listMicrosoftTeamsChannelConfigurations(
    args: ListMicrosoftTeamsChannelConfigurationsCommandInput,
    options?: ChatbotRequestOptions
  ): Promise<ListMicrosoftTeamsChannelConfigurationsCommandOutput>;
  listMicrosoftTeamsChannelConfigurations(
    args: ListMicrosoftTeamsChannelConfigurationsCommandInput,
    cb: (err: any, data?: ListMicrosoftTeamsChannelConfigurationsCommandOutput) => void
  ): void;
  listMicrosoftTeamsChannelConfigurations(
    args: ListMicrosoftTeamsChannelConfigurationsCommandInput,
    options: ChatbotRequestOptions,
    cb: (err: any, data?: ListMicrosoftTeamsChannelConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMicrosoftTeamsConfiguredTeamsCommand}
   */
  listMicrosoftTeamsConfiguredTeams(): Promise<ListMicrosoftTeamsConfiguredTeamsCommandOutput>;
  listMicrosoftTeamsConfiguredTeams(
    args: ListMicrosoftTeamsConfiguredTeamsCommandInput,
    options?: ChatbotRequestOptions
  ): Promise<ListMicrosoftTeamsConfiguredTeamsCommandOutput>;
  listMicrosoftTeamsConfiguredTeams(
    args: ListMicrosoftTeamsConfiguredTeamsCommandInput,
    cb: (err: any, data?: ListMicrosoftTeamsConfiguredTeamsCommandOutput) => void
  ): void;
  listMicrosoftTeamsConfiguredTeams(
    args: ListMicrosoftTeamsConfiguredTeamsCommandInput,
    options: ChatbotRequestOptions,
    cb: (err: any, data?: ListMicrosoftTeamsConfiguredTeamsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMicrosoftTeamsUserIdentitiesCommand}
   */
  listMicrosoftTeamsUserIdentities(): Promise<ListMicrosoftTeamsUserIdentitiesCommandOutput>;
  listMicrosoftTeamsUserIdentities(
    args: ListMicrosoftTeamsUserIdentitiesCommandInput,
    options?: ChatbotRequestOptions
  ): Promise<ListMicrosoftTeamsUserIdentitiesCommandOutput>;
  listMicrosoftTeamsUserIdentities(
    args: ListMicrosoftTeamsUserIdentitiesCommandInput,
    cb: (err: any, data?: ListMicrosoftTeamsUserIdentitiesCommandOutput) => void
  ): void;
  listMicrosoftTeamsUserIdentities(
    args: ListMicrosoftTeamsUserIdentitiesCommandInput,
    options: ChatbotRequestOptions,
    cb: (err: any, data?: ListMicrosoftTeamsUserIdentitiesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: ChatbotRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: ChatbotRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: ChatbotRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: ChatbotRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: ChatbotRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: ChatbotRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAccountPreferencesCommand}
   */
  updateAccountPreferences(): Promise<UpdateAccountPreferencesCommandOutput>;
  updateAccountPreferences(
    args: UpdateAccountPreferencesCommandInput,
    options?: ChatbotRequestOptions
  ): Promise<UpdateAccountPreferencesCommandOutput>;
  updateAccountPreferences(
    args: UpdateAccountPreferencesCommandInput,
    cb: (err: any, data?: UpdateAccountPreferencesCommandOutput) => void
  ): void;
  updateAccountPreferences(
    args: UpdateAccountPreferencesCommandInput,
    options: ChatbotRequestOptions,
    cb: (err: any, data?: UpdateAccountPreferencesCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateChimeWebhookConfigurationCommand}
   */
  updateChimeWebhookConfiguration(
    args: UpdateChimeWebhookConfigurationCommandInput,
    options?: ChatbotRequestOptions
  ): Promise<UpdateChimeWebhookConfigurationCommandOutput>;
  updateChimeWebhookConfiguration(
    args: UpdateChimeWebhookConfigurationCommandInput,
    cb: (err: any, data?: UpdateChimeWebhookConfigurationCommandOutput) => void
  ): void;
  updateChimeWebhookConfiguration(
    args: UpdateChimeWebhookConfigurationCommandInput,
    options: ChatbotRequestOptions,
    cb: (err: any, data?: UpdateChimeWebhookConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateCustomActionCommand}
   */
  updateCustomAction(
    args: UpdateCustomActionCommandInput,
    options?: ChatbotRequestOptions
  ): Promise<UpdateCustomActionCommandOutput>;
  updateCustomAction(
    args: UpdateCustomActionCommandInput,
    cb: (err: any, data?: UpdateCustomActionCommandOutput) => void
  ): void;
  updateCustomAction(
    args: UpdateCustomActionCommandInput,
    options: ChatbotRequestOptions,
    cb: (err: any, data?: UpdateCustomActionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateMicrosoftTeamsChannelConfigurationCommand}
   */
  updateMicrosoftTeamsChannelConfiguration(
    args: UpdateMicrosoftTeamsChannelConfigurationCommandInput,
    options?: ChatbotRequestOptions
  ): Promise<UpdateMicrosoftTeamsChannelConfigurationCommandOutput>;
  updateMicrosoftTeamsChannelConfiguration(
    args: UpdateMicrosoftTeamsChannelConfigurationCommandInput,
    cb: (err: any, data?: UpdateMicrosoftTeamsChannelConfigurationCommandOutput) => void
  ): void;
  updateMicrosoftTeamsChannelConfiguration(
    args: UpdateMicrosoftTeamsChannelConfigurationCommandInput,
    options: ChatbotRequestOptions,
    cb: (err: any, data?: UpdateMicrosoftTeamsChannelConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSlackChannelConfigurationCommand}
   */
  updateSlackChannelConfiguration(
    args: UpdateSlackChannelConfigurationCommandInput,
    options?: ChatbotRequestOptions
  ): Promise<UpdateSlackChannelConfigurationCommandOutput>;
  updateSlackChannelConfiguration(
    args: UpdateSlackChannelConfigurationCommandInput,
    cb: (err: any, data?: UpdateSlackChannelConfigurationCommandOutput) => void
  ): void;
  updateSlackChannelConfiguration(
    args: UpdateSlackChannelConfigurationCommandInput,
    options: ChatbotRequestOptions,
    cb: (err: any, data?: UpdateSlackChannelConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeChimeWebhookConfigurationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeChimeWebhookConfigurationsCommandOutput}.
   */
  paginateDescribeChimeWebhookConfigurations(
    args?: DescribeChimeWebhookConfigurationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeChimeWebhookConfigurationsCommandOutput>;

  /**
   * @see {@link DescribeSlackChannelConfigurationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeSlackChannelConfigurationsCommandOutput}.
   */
  paginateDescribeSlackChannelConfigurations(
    args?: DescribeSlackChannelConfigurationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeSlackChannelConfigurationsCommandOutput>;

  /**
   * @see {@link DescribeSlackUserIdentitiesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeSlackUserIdentitiesCommandOutput}.
   */
  paginateDescribeSlackUserIdentities(
    args?: DescribeSlackUserIdentitiesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeSlackUserIdentitiesCommandOutput>;

  /**
   * @see {@link DescribeSlackWorkspacesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeSlackWorkspacesCommandOutput}.
   */
  paginateDescribeSlackWorkspaces(
    args?: DescribeSlackWorkspacesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeSlackWorkspacesCommandOutput>;

  /**
   * @see {@link ListAssociationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAssociationsCommandOutput}.
   */
  paginateListAssociations(
    args: ListAssociationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAssociationsCommandOutput>;

  /**
   * @see {@link ListCustomActionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListCustomActionsCommandOutput}.
   */
  paginateListCustomActions(
    args?: ListCustomActionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListCustomActionsCommandOutput>;

  /**
   * @see {@link ListMicrosoftTeamsChannelConfigurationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListMicrosoftTeamsChannelConfigurationsCommandOutput}.
   */
  paginateListMicrosoftTeamsChannelConfigurations(
    args?: ListMicrosoftTeamsChannelConfigurationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListMicrosoftTeamsChannelConfigurationsCommandOutput>;

  /**
   * @see {@link ListMicrosoftTeamsConfiguredTeamsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListMicrosoftTeamsConfiguredTeamsCommandOutput}.
   */
  paginateListMicrosoftTeamsConfiguredTeams(
    args?: ListMicrosoftTeamsConfiguredTeamsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListMicrosoftTeamsConfiguredTeamsCommandOutput>;

  /**
   * @see {@link ListMicrosoftTeamsUserIdentitiesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListMicrosoftTeamsUserIdentitiesCommandOutput}.
   */
  paginateListMicrosoftTeamsUserIdentities(
    args?: ListMicrosoftTeamsUserIdentitiesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListMicrosoftTeamsUserIdentitiesCommandOutput>;
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
createAggregatedClient(commands, Chatbot, { paginators });
