// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  type CreateConfigurationManagerCommandInput,
  type CreateConfigurationManagerCommandOutput,
  CreateConfigurationManagerCommand,
} from "./commands/CreateConfigurationManagerCommand";
import {
  type DeleteConfigurationManagerCommandInput,
  type DeleteConfigurationManagerCommandOutput,
  DeleteConfigurationManagerCommand,
} from "./commands/DeleteConfigurationManagerCommand";
import {
  type GetConfigurationCommandInput,
  type GetConfigurationCommandOutput,
  GetConfigurationCommand,
} from "./commands/GetConfigurationCommand";
import {
  type GetConfigurationManagerCommandInput,
  type GetConfigurationManagerCommandOutput,
  GetConfigurationManagerCommand,
} from "./commands/GetConfigurationManagerCommand";
import {
  type GetServiceSettingsCommandInput,
  type GetServiceSettingsCommandOutput,
  GetServiceSettingsCommand,
} from "./commands/GetServiceSettingsCommand";
import {
  type ListConfigurationManagersCommandInput,
  type ListConfigurationManagersCommandOutput,
  ListConfigurationManagersCommand,
} from "./commands/ListConfigurationManagersCommand";
import {
  type ListConfigurationsCommandInput,
  type ListConfigurationsCommandOutput,
  ListConfigurationsCommand,
} from "./commands/ListConfigurationsCommand";
import {
  type ListQuickSetupTypesCommandInput,
  type ListQuickSetupTypesCommandOutput,
  ListQuickSetupTypesCommand,
} from "./commands/ListQuickSetupTypesCommand";
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
  type UpdateConfigurationDefinitionCommandInput,
  type UpdateConfigurationDefinitionCommandOutput,
  UpdateConfigurationDefinitionCommand,
} from "./commands/UpdateConfigurationDefinitionCommand";
import {
  type UpdateConfigurationManagerCommandInput,
  type UpdateConfigurationManagerCommandOutput,
  UpdateConfigurationManagerCommand,
} from "./commands/UpdateConfigurationManagerCommand";
import {
  type UpdateServiceSettingsCommandInput,
  type UpdateServiceSettingsCommandOutput,
  UpdateServiceSettingsCommand,
} from "./commands/UpdateServiceSettingsCommand";
import { paginateListConfigurationManagers } from "./pagination/ListConfigurationManagersPaginator";
import { paginateListConfigurations } from "./pagination/ListConfigurationsPaginator";
import { SSMQuickSetupClient } from "./SSMQuickSetupClient";

const commands = {
  CreateConfigurationManagerCommand,
  DeleteConfigurationManagerCommand,
  GetConfigurationCommand,
  GetConfigurationManagerCommand,
  GetServiceSettingsCommand,
  ListConfigurationManagersCommand,
  ListConfigurationsCommand,
  ListQuickSetupTypesCommand,
  ListTagsForResourceCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateConfigurationDefinitionCommand,
  UpdateConfigurationManagerCommand,
  UpdateServiceSettingsCommand,
};
const paginators = {
  paginateListConfigurationManagers,
  paginateListConfigurations,
};

export interface SSMQuickSetup {
  /**
   * @see {@link CreateConfigurationManagerCommand}
   */
  createConfigurationManager(
    args: CreateConfigurationManagerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConfigurationManagerCommandOutput>;
  createConfigurationManager(
    args: CreateConfigurationManagerCommandInput,
    cb: (err: any, data?: CreateConfigurationManagerCommandOutput) => void
  ): void;
  createConfigurationManager(
    args: CreateConfigurationManagerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConfigurationManagerCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteConfigurationManagerCommand}
   */
  deleteConfigurationManager(
    args: DeleteConfigurationManagerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConfigurationManagerCommandOutput>;
  deleteConfigurationManager(
    args: DeleteConfigurationManagerCommandInput,
    cb: (err: any, data?: DeleteConfigurationManagerCommandOutput) => void
  ): void;
  deleteConfigurationManager(
    args: DeleteConfigurationManagerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConfigurationManagerCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConfigurationCommand}
   */
  getConfiguration(
    args: GetConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConfigurationCommandOutput>;
  getConfiguration(
    args: GetConfigurationCommandInput,
    cb: (err: any, data?: GetConfigurationCommandOutput) => void
  ): void;
  getConfiguration(
    args: GetConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConfigurationManagerCommand}
   */
  getConfigurationManager(
    args: GetConfigurationManagerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConfigurationManagerCommandOutput>;
  getConfigurationManager(
    args: GetConfigurationManagerCommandInput,
    cb: (err: any, data?: GetConfigurationManagerCommandOutput) => void
  ): void;
  getConfigurationManager(
    args: GetConfigurationManagerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConfigurationManagerCommandOutput) => void
  ): void;

  /**
   * @see {@link GetServiceSettingsCommand}
   */
  getServiceSettings(): Promise<GetServiceSettingsCommandOutput>;
  getServiceSettings(
    args: GetServiceSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetServiceSettingsCommandOutput>;
  getServiceSettings(
    args: GetServiceSettingsCommandInput,
    cb: (err: any, data?: GetServiceSettingsCommandOutput) => void
  ): void;
  getServiceSettings(
    args: GetServiceSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetServiceSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListConfigurationManagersCommand}
   */
  listConfigurationManagers(): Promise<ListConfigurationManagersCommandOutput>;
  listConfigurationManagers(
    args: ListConfigurationManagersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConfigurationManagersCommandOutput>;
  listConfigurationManagers(
    args: ListConfigurationManagersCommandInput,
    cb: (err: any, data?: ListConfigurationManagersCommandOutput) => void
  ): void;
  listConfigurationManagers(
    args: ListConfigurationManagersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConfigurationManagersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListConfigurationsCommand}
   */
  listConfigurations(): Promise<ListConfigurationsCommandOutput>;
  listConfigurations(
    args: ListConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConfigurationsCommandOutput>;
  listConfigurations(
    args: ListConfigurationsCommandInput,
    cb: (err: any, data?: ListConfigurationsCommandOutput) => void
  ): void;
  listConfigurations(
    args: ListConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListQuickSetupTypesCommand}
   */
  listQuickSetupTypes(): Promise<ListQuickSetupTypesCommandOutput>;
  listQuickSetupTypes(
    args: ListQuickSetupTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListQuickSetupTypesCommandOutput>;
  listQuickSetupTypes(
    args: ListQuickSetupTypesCommandInput,
    cb: (err: any, data?: ListQuickSetupTypesCommandOutput) => void
  ): void;
  listQuickSetupTypes(
    args: ListQuickSetupTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListQuickSetupTypesCommandOutput) => void
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
  tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateConfigurationDefinitionCommand}
   */
  updateConfigurationDefinition(
    args: UpdateConfigurationDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConfigurationDefinitionCommandOutput>;
  updateConfigurationDefinition(
    args: UpdateConfigurationDefinitionCommandInput,
    cb: (err: any, data?: UpdateConfigurationDefinitionCommandOutput) => void
  ): void;
  updateConfigurationDefinition(
    args: UpdateConfigurationDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConfigurationDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateConfigurationManagerCommand}
   */
  updateConfigurationManager(
    args: UpdateConfigurationManagerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConfigurationManagerCommandOutput>;
  updateConfigurationManager(
    args: UpdateConfigurationManagerCommandInput,
    cb: (err: any, data?: UpdateConfigurationManagerCommandOutput) => void
  ): void;
  updateConfigurationManager(
    args: UpdateConfigurationManagerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConfigurationManagerCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateServiceSettingsCommand}
   */
  updateServiceSettings(): Promise<UpdateServiceSettingsCommandOutput>;
  updateServiceSettings(
    args: UpdateServiceSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateServiceSettingsCommandOutput>;
  updateServiceSettings(
    args: UpdateServiceSettingsCommandInput,
    cb: (err: any, data?: UpdateServiceSettingsCommandOutput) => void
  ): void;
  updateServiceSettings(
    args: UpdateServiceSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateServiceSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListConfigurationManagersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListConfigurationManagersCommandOutput}.
   */
  paginateListConfigurationManagers(
    args?: ListConfigurationManagersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListConfigurationManagersCommandOutput>;

  /**
   * @see {@link ListConfigurationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListConfigurationsCommandOutput}.
   */
  paginateListConfigurations(
    args?: ListConfigurationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListConfigurationsCommandOutput>;
}

/**
 * <p>Quick Setup helps you quickly configure frequently used services and features with
 *                   recommended best practices. Quick Setup simplifies setting up services, including
 *                         Systems Manager, by automating common or recommended tasks.</p>
 * @public
 */
export class SSMQuickSetup extends SSMQuickSetupClient implements SSMQuickSetup {}
createAggregatedClient(commands, SSMQuickSetup, { paginators });
