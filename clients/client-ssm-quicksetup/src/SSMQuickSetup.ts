// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  CreateConfigurationManagerCommand,
  CreateConfigurationManagerCommandInput,
  CreateConfigurationManagerCommandOutput,
} from "./commands/CreateConfigurationManagerCommand";
import {
  DeleteConfigurationManagerCommand,
  DeleteConfigurationManagerCommandInput,
  DeleteConfigurationManagerCommandOutput,
} from "./commands/DeleteConfigurationManagerCommand";
import {
  GetConfigurationCommand,
  GetConfigurationCommandInput,
  GetConfigurationCommandOutput,
} from "./commands/GetConfigurationCommand";
import {
  GetConfigurationManagerCommand,
  GetConfigurationManagerCommandInput,
  GetConfigurationManagerCommandOutput,
} from "./commands/GetConfigurationManagerCommand";
import {
  GetServiceSettingsCommand,
  GetServiceSettingsCommandInput,
  GetServiceSettingsCommandOutput,
} from "./commands/GetServiceSettingsCommand";
import {
  ListConfigurationManagersCommand,
  ListConfigurationManagersCommandInput,
  ListConfigurationManagersCommandOutput,
} from "./commands/ListConfigurationManagersCommand";
import {
  ListConfigurationsCommand,
  ListConfigurationsCommandInput,
  ListConfigurationsCommandOutput,
} from "./commands/ListConfigurationsCommand";
import {
  ListQuickSetupTypesCommand,
  ListQuickSetupTypesCommandInput,
  ListQuickSetupTypesCommandOutput,
} from "./commands/ListQuickSetupTypesCommand";
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
  UpdateConfigurationDefinitionCommand,
  UpdateConfigurationDefinitionCommandInput,
  UpdateConfigurationDefinitionCommandOutput,
} from "./commands/UpdateConfigurationDefinitionCommand";
import {
  UpdateConfigurationManagerCommand,
  UpdateConfigurationManagerCommandInput,
  UpdateConfigurationManagerCommandOutput,
} from "./commands/UpdateConfigurationManagerCommand";
import {
  UpdateServiceSettingsCommand,
  UpdateServiceSettingsCommandInput,
  UpdateServiceSettingsCommandOutput,
} from "./commands/UpdateServiceSettingsCommand";
import { SSMQuickSetupClient, SSMQuickSetupClientConfig } from "./SSMQuickSetupClient";

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
}

/**
 * <p>Quick Setup helps you quickly configure frequently used services and features with
 *                   recommended best practices. Quick Setup simplifies setting up services, including
 *                         Systems Manager, by automating common or recommended tasks.</p>
 * @public
 */
export class SSMQuickSetup extends SSMQuickSetupClient implements SSMQuickSetup {}
createAggregatedClient(commands, SSMQuickSetup);
