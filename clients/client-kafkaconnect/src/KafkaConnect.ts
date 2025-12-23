// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  CreateConnectorCommand,
  CreateConnectorCommandInput,
  CreateConnectorCommandOutput,
} from "./commands/CreateConnectorCommand";
import {
  CreateCustomPluginCommand,
  CreateCustomPluginCommandInput,
  CreateCustomPluginCommandOutput,
} from "./commands/CreateCustomPluginCommand";
import {
  CreateWorkerConfigurationCommand,
  CreateWorkerConfigurationCommandInput,
  CreateWorkerConfigurationCommandOutput,
} from "./commands/CreateWorkerConfigurationCommand";
import {
  DeleteConnectorCommand,
  DeleteConnectorCommandInput,
  DeleteConnectorCommandOutput,
} from "./commands/DeleteConnectorCommand";
import {
  DeleteCustomPluginCommand,
  DeleteCustomPluginCommandInput,
  DeleteCustomPluginCommandOutput,
} from "./commands/DeleteCustomPluginCommand";
import {
  DeleteWorkerConfigurationCommand,
  DeleteWorkerConfigurationCommandInput,
  DeleteWorkerConfigurationCommandOutput,
} from "./commands/DeleteWorkerConfigurationCommand";
import {
  DescribeConnectorCommand,
  DescribeConnectorCommandInput,
  DescribeConnectorCommandOutput,
} from "./commands/DescribeConnectorCommand";
import {
  DescribeConnectorOperationCommand,
  DescribeConnectorOperationCommandInput,
  DescribeConnectorOperationCommandOutput,
} from "./commands/DescribeConnectorOperationCommand";
import {
  DescribeCustomPluginCommand,
  DescribeCustomPluginCommandInput,
  DescribeCustomPluginCommandOutput,
} from "./commands/DescribeCustomPluginCommand";
import {
  DescribeWorkerConfigurationCommand,
  DescribeWorkerConfigurationCommandInput,
  DescribeWorkerConfigurationCommandOutput,
} from "./commands/DescribeWorkerConfigurationCommand";
import {
  ListConnectorOperationsCommand,
  ListConnectorOperationsCommandInput,
  ListConnectorOperationsCommandOutput,
} from "./commands/ListConnectorOperationsCommand";
import {
  ListConnectorsCommand,
  ListConnectorsCommandInput,
  ListConnectorsCommandOutput,
} from "./commands/ListConnectorsCommand";
import {
  ListCustomPluginsCommand,
  ListCustomPluginsCommandInput,
  ListCustomPluginsCommandOutput,
} from "./commands/ListCustomPluginsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListWorkerConfigurationsCommand,
  ListWorkerConfigurationsCommandInput,
  ListWorkerConfigurationsCommandOutput,
} from "./commands/ListWorkerConfigurationsCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateConnectorCommand,
  UpdateConnectorCommandInput,
  UpdateConnectorCommandOutput,
} from "./commands/UpdateConnectorCommand";
import { KafkaConnectClient } from "./KafkaConnectClient";

const commands = {
  CreateConnectorCommand,
  CreateCustomPluginCommand,
  CreateWorkerConfigurationCommand,
  DeleteConnectorCommand,
  DeleteCustomPluginCommand,
  DeleteWorkerConfigurationCommand,
  DescribeConnectorCommand,
  DescribeConnectorOperationCommand,
  DescribeCustomPluginCommand,
  DescribeWorkerConfigurationCommand,
  ListConnectorOperationsCommand,
  ListConnectorsCommand,
  ListCustomPluginsCommand,
  ListTagsForResourceCommand,
  ListWorkerConfigurationsCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateConnectorCommand,
};

export interface KafkaConnect {
  /**
   * @see {@link CreateConnectorCommand}
   */
  createConnector(
    args: CreateConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConnectorCommandOutput>;
  createConnector(
    args: CreateConnectorCommandInput,
    cb: (err: any, data?: CreateConnectorCommandOutput) => void
  ): void;
  createConnector(
    args: CreateConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConnectorCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCustomPluginCommand}
   */
  createCustomPlugin(
    args: CreateCustomPluginCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCustomPluginCommandOutput>;
  createCustomPlugin(
    args: CreateCustomPluginCommandInput,
    cb: (err: any, data?: CreateCustomPluginCommandOutput) => void
  ): void;
  createCustomPlugin(
    args: CreateCustomPluginCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCustomPluginCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWorkerConfigurationCommand}
   */
  createWorkerConfiguration(
    args: CreateWorkerConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWorkerConfigurationCommandOutput>;
  createWorkerConfiguration(
    args: CreateWorkerConfigurationCommandInput,
    cb: (err: any, data?: CreateWorkerConfigurationCommandOutput) => void
  ): void;
  createWorkerConfiguration(
    args: CreateWorkerConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWorkerConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteConnectorCommand}
   */
  deleteConnector(
    args: DeleteConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConnectorCommandOutput>;
  deleteConnector(
    args: DeleteConnectorCommandInput,
    cb: (err: any, data?: DeleteConnectorCommandOutput) => void
  ): void;
  deleteConnector(
    args: DeleteConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConnectorCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCustomPluginCommand}
   */
  deleteCustomPlugin(
    args: DeleteCustomPluginCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCustomPluginCommandOutput>;
  deleteCustomPlugin(
    args: DeleteCustomPluginCommandInput,
    cb: (err: any, data?: DeleteCustomPluginCommandOutput) => void
  ): void;
  deleteCustomPlugin(
    args: DeleteCustomPluginCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCustomPluginCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWorkerConfigurationCommand}
   */
  deleteWorkerConfiguration(
    args: DeleteWorkerConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWorkerConfigurationCommandOutput>;
  deleteWorkerConfiguration(
    args: DeleteWorkerConfigurationCommandInput,
    cb: (err: any, data?: DeleteWorkerConfigurationCommandOutput) => void
  ): void;
  deleteWorkerConfiguration(
    args: DeleteWorkerConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWorkerConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeConnectorCommand}
   */
  describeConnector(
    args: DescribeConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeConnectorCommandOutput>;
  describeConnector(
    args: DescribeConnectorCommandInput,
    cb: (err: any, data?: DescribeConnectorCommandOutput) => void
  ): void;
  describeConnector(
    args: DescribeConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeConnectorCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeConnectorOperationCommand}
   */
  describeConnectorOperation(
    args: DescribeConnectorOperationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeConnectorOperationCommandOutput>;
  describeConnectorOperation(
    args: DescribeConnectorOperationCommandInput,
    cb: (err: any, data?: DescribeConnectorOperationCommandOutput) => void
  ): void;
  describeConnectorOperation(
    args: DescribeConnectorOperationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeConnectorOperationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeCustomPluginCommand}
   */
  describeCustomPlugin(
    args: DescribeCustomPluginCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCustomPluginCommandOutput>;
  describeCustomPlugin(
    args: DescribeCustomPluginCommandInput,
    cb: (err: any, data?: DescribeCustomPluginCommandOutput) => void
  ): void;
  describeCustomPlugin(
    args: DescribeCustomPluginCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCustomPluginCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeWorkerConfigurationCommand}
   */
  describeWorkerConfiguration(
    args: DescribeWorkerConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeWorkerConfigurationCommandOutput>;
  describeWorkerConfiguration(
    args: DescribeWorkerConfigurationCommandInput,
    cb: (err: any, data?: DescribeWorkerConfigurationCommandOutput) => void
  ): void;
  describeWorkerConfiguration(
    args: DescribeWorkerConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeWorkerConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link ListConnectorOperationsCommand}
   */
  listConnectorOperations(
    args: ListConnectorOperationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConnectorOperationsCommandOutput>;
  listConnectorOperations(
    args: ListConnectorOperationsCommandInput,
    cb: (err: any, data?: ListConnectorOperationsCommandOutput) => void
  ): void;
  listConnectorOperations(
    args: ListConnectorOperationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConnectorOperationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListConnectorsCommand}
   */
  listConnectors(): Promise<ListConnectorsCommandOutput>;
  listConnectors(
    args: ListConnectorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConnectorsCommandOutput>;
  listConnectors(
    args: ListConnectorsCommandInput,
    cb: (err: any, data?: ListConnectorsCommandOutput) => void
  ): void;
  listConnectors(
    args: ListConnectorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConnectorsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCustomPluginsCommand}
   */
  listCustomPlugins(): Promise<ListCustomPluginsCommandOutput>;
  listCustomPlugins(
    args: ListCustomPluginsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCustomPluginsCommandOutput>;
  listCustomPlugins(
    args: ListCustomPluginsCommandInput,
    cb: (err: any, data?: ListCustomPluginsCommandOutput) => void
  ): void;
  listCustomPlugins(
    args: ListCustomPluginsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCustomPluginsCommandOutput) => void
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
   * @see {@link ListWorkerConfigurationsCommand}
   */
  listWorkerConfigurations(): Promise<ListWorkerConfigurationsCommandOutput>;
  listWorkerConfigurations(
    args: ListWorkerConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWorkerConfigurationsCommandOutput>;
  listWorkerConfigurations(
    args: ListWorkerConfigurationsCommandInput,
    cb: (err: any, data?: ListWorkerConfigurationsCommandOutput) => void
  ): void;
  listWorkerConfigurations(
    args: ListWorkerConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorkerConfigurationsCommandOutput) => void
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
   * @see {@link UpdateConnectorCommand}
   */
  updateConnector(
    args: UpdateConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConnectorCommandOutput>;
  updateConnector(
    args: UpdateConnectorCommandInput,
    cb: (err: any, data?: UpdateConnectorCommandOutput) => void
  ): void;
  updateConnector(
    args: UpdateConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConnectorCommandOutput) => void
  ): void;
}

/**
 * <p/>
 * @public
 */
export class KafkaConnect extends KafkaConnectClient implements KafkaConnect {}
createAggregatedClient(commands, KafkaConnect);
