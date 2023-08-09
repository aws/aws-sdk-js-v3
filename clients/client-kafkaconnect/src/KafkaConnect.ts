// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

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
  DescribeConnectorCommand,
  DescribeConnectorCommandInput,
  DescribeConnectorCommandOutput,
} from "./commands/DescribeConnectorCommand";
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
  ListWorkerConfigurationsCommand,
  ListWorkerConfigurationsCommandInput,
  ListWorkerConfigurationsCommandOutput,
} from "./commands/ListWorkerConfigurationsCommand";
import {
  UpdateConnectorCommand,
  UpdateConnectorCommandInput,
  UpdateConnectorCommandOutput,
} from "./commands/UpdateConnectorCommand";
import { KafkaConnectClient, KafkaConnectClientConfig } from "./KafkaConnectClient";

const commands = {
  CreateConnectorCommand,
  CreateCustomPluginCommand,
  CreateWorkerConfigurationCommand,
  DeleteConnectorCommand,
  DeleteCustomPluginCommand,
  DescribeConnectorCommand,
  DescribeCustomPluginCommand,
  DescribeWorkerConfigurationCommand,
  ListConnectorsCommand,
  ListCustomPluginsCommand,
  ListWorkerConfigurationsCommand,
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
  createConnector(args: CreateConnectorCommandInput, cb: (err: any, data?: CreateConnectorCommandOutput) => void): void;
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
  deleteConnector(args: DeleteConnectorCommandInput, cb: (err: any, data?: DeleteConnectorCommandOutput) => void): void;
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
   * @see {@link ListConnectorsCommand}
   */
  listConnectors(
    args: ListConnectorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConnectorsCommandOutput>;
  listConnectors(args: ListConnectorsCommandInput, cb: (err: any, data?: ListConnectorsCommandOutput) => void): void;
  listConnectors(
    args: ListConnectorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConnectorsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCustomPluginsCommand}
   */
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
   * @see {@link ListWorkerConfigurationsCommand}
   */
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
   * @see {@link UpdateConnectorCommand}
   */
  updateConnector(
    args: UpdateConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConnectorCommandOutput>;
  updateConnector(args: UpdateConnectorCommandInput, cb: (err: any, data?: UpdateConnectorCommandOutput) => void): void;
  updateConnector(
    args: UpdateConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConnectorCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p/>
 */
export class KafkaConnect extends KafkaConnectClient implements KafkaConnect {}
createAggregatedClient(commands, KafkaConnect);
