import { KafkaConnectClient } from "./KafkaConnectClient";
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
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p/>
 */
export class KafkaConnect extends KafkaConnectClient {
  /**
   * <p>Creates a connector using the specified properties.</p>
   */
  public createConnector(
    args: CreateConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConnectorCommandOutput>;
  public createConnector(
    args: CreateConnectorCommandInput,
    cb: (err: any, data?: CreateConnectorCommandOutput) => void
  ): void;
  public createConnector(
    args: CreateConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConnectorCommandOutput) => void
  ): void;
  public createConnector(
    args: CreateConnectorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateConnectorCommandOutput) => void),
    cb?: (err: any, data?: CreateConnectorCommandOutput) => void
  ): Promise<CreateConnectorCommandOutput> | void {
    const command = new CreateConnectorCommand(args);
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
   * <p>Creates a custom plugin using the specified properties.</p>
   */
  public createCustomPlugin(
    args: CreateCustomPluginCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCustomPluginCommandOutput>;
  public createCustomPlugin(
    args: CreateCustomPluginCommandInput,
    cb: (err: any, data?: CreateCustomPluginCommandOutput) => void
  ): void;
  public createCustomPlugin(
    args: CreateCustomPluginCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCustomPluginCommandOutput) => void
  ): void;
  public createCustomPlugin(
    args: CreateCustomPluginCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateCustomPluginCommandOutput) => void),
    cb?: (err: any, data?: CreateCustomPluginCommandOutput) => void
  ): Promise<CreateCustomPluginCommandOutput> | void {
    const command = new CreateCustomPluginCommand(args);
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
   * <p>Creates a worker configuration using the specified properties.</p>
   */
  public createWorkerConfiguration(
    args: CreateWorkerConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWorkerConfigurationCommandOutput>;
  public createWorkerConfiguration(
    args: CreateWorkerConfigurationCommandInput,
    cb: (err: any, data?: CreateWorkerConfigurationCommandOutput) => void
  ): void;
  public createWorkerConfiguration(
    args: CreateWorkerConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWorkerConfigurationCommandOutput) => void
  ): void;
  public createWorkerConfiguration(
    args: CreateWorkerConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateWorkerConfigurationCommandOutput) => void),
    cb?: (err: any, data?: CreateWorkerConfigurationCommandOutput) => void
  ): Promise<CreateWorkerConfigurationCommandOutput> | void {
    const command = new CreateWorkerConfigurationCommand(args);
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
   * <p>Deletes the specified connector.</p>
   */
  public deleteConnector(
    args: DeleteConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConnectorCommandOutput>;
  public deleteConnector(
    args: DeleteConnectorCommandInput,
    cb: (err: any, data?: DeleteConnectorCommandOutput) => void
  ): void;
  public deleteConnector(
    args: DeleteConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConnectorCommandOutput) => void
  ): void;
  public deleteConnector(
    args: DeleteConnectorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteConnectorCommandOutput) => void),
    cb?: (err: any, data?: DeleteConnectorCommandOutput) => void
  ): Promise<DeleteConnectorCommandOutput> | void {
    const command = new DeleteConnectorCommand(args);
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
   * <p>Returns summary information about the connector.</p>
   */
  public describeConnector(
    args: DescribeConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeConnectorCommandOutput>;
  public describeConnector(
    args: DescribeConnectorCommandInput,
    cb: (err: any, data?: DescribeConnectorCommandOutput) => void
  ): void;
  public describeConnector(
    args: DescribeConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeConnectorCommandOutput) => void
  ): void;
  public describeConnector(
    args: DescribeConnectorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeConnectorCommandOutput) => void),
    cb?: (err: any, data?: DescribeConnectorCommandOutput) => void
  ): Promise<DescribeConnectorCommandOutput> | void {
    const command = new DescribeConnectorCommand(args);
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
   * <p>A summary description of the custom plugin.</p>
   */
  public describeCustomPlugin(
    args: DescribeCustomPluginCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCustomPluginCommandOutput>;
  public describeCustomPlugin(
    args: DescribeCustomPluginCommandInput,
    cb: (err: any, data?: DescribeCustomPluginCommandOutput) => void
  ): void;
  public describeCustomPlugin(
    args: DescribeCustomPluginCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCustomPluginCommandOutput) => void
  ): void;
  public describeCustomPlugin(
    args: DescribeCustomPluginCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeCustomPluginCommandOutput) => void),
    cb?: (err: any, data?: DescribeCustomPluginCommandOutput) => void
  ): Promise<DescribeCustomPluginCommandOutput> | void {
    const command = new DescribeCustomPluginCommand(args);
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
   * <p>Returns information about a worker configuration.</p>
   */
  public describeWorkerConfiguration(
    args: DescribeWorkerConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeWorkerConfigurationCommandOutput>;
  public describeWorkerConfiguration(
    args: DescribeWorkerConfigurationCommandInput,
    cb: (err: any, data?: DescribeWorkerConfigurationCommandOutput) => void
  ): void;
  public describeWorkerConfiguration(
    args: DescribeWorkerConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeWorkerConfigurationCommandOutput) => void
  ): void;
  public describeWorkerConfiguration(
    args: DescribeWorkerConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeWorkerConfigurationCommandOutput) => void),
    cb?: (err: any, data?: DescribeWorkerConfigurationCommandOutput) => void
  ): Promise<DescribeWorkerConfigurationCommandOutput> | void {
    const command = new DescribeWorkerConfigurationCommand(args);
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
   * <p>Returns a list of all the connectors in this account and Region. The list is limited to connectors whose name starts with the specified prefix. The response also includes a description of each of the listed connectors.</p>
   */
  public listConnectors(
    args: ListConnectorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConnectorsCommandOutput>;
  public listConnectors(
    args: ListConnectorsCommandInput,
    cb: (err: any, data?: ListConnectorsCommandOutput) => void
  ): void;
  public listConnectors(
    args: ListConnectorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConnectorsCommandOutput) => void
  ): void;
  public listConnectors(
    args: ListConnectorsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListConnectorsCommandOutput) => void),
    cb?: (err: any, data?: ListConnectorsCommandOutput) => void
  ): Promise<ListConnectorsCommandOutput> | void {
    const command = new ListConnectorsCommand(args);
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
   * <p>Returns a list of all of the custom plugins in this account and Region.</p>
   */
  public listCustomPlugins(
    args: ListCustomPluginsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCustomPluginsCommandOutput>;
  public listCustomPlugins(
    args: ListCustomPluginsCommandInput,
    cb: (err: any, data?: ListCustomPluginsCommandOutput) => void
  ): void;
  public listCustomPlugins(
    args: ListCustomPluginsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCustomPluginsCommandOutput) => void
  ): void;
  public listCustomPlugins(
    args: ListCustomPluginsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListCustomPluginsCommandOutput) => void),
    cb?: (err: any, data?: ListCustomPluginsCommandOutput) => void
  ): Promise<ListCustomPluginsCommandOutput> | void {
    const command = new ListCustomPluginsCommand(args);
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
   * <p>Returns a list of all of the worker configurations in this account and Region.</p>
   */
  public listWorkerConfigurations(
    args: ListWorkerConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWorkerConfigurationsCommandOutput>;
  public listWorkerConfigurations(
    args: ListWorkerConfigurationsCommandInput,
    cb: (err: any, data?: ListWorkerConfigurationsCommandOutput) => void
  ): void;
  public listWorkerConfigurations(
    args: ListWorkerConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorkerConfigurationsCommandOutput) => void
  ): void;
  public listWorkerConfigurations(
    args: ListWorkerConfigurationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListWorkerConfigurationsCommandOutput) => void),
    cb?: (err: any, data?: ListWorkerConfigurationsCommandOutput) => void
  ): Promise<ListWorkerConfigurationsCommandOutput> | void {
    const command = new ListWorkerConfigurationsCommand(args);
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
   * <p>Updates the specified connector.</p>
   */
  public updateConnector(
    args: UpdateConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConnectorCommandOutput>;
  public updateConnector(
    args: UpdateConnectorCommandInput,
    cb: (err: any, data?: UpdateConnectorCommandOutput) => void
  ): void;
  public updateConnector(
    args: UpdateConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConnectorCommandOutput) => void
  ): void;
  public updateConnector(
    args: UpdateConnectorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateConnectorCommandOutput) => void),
    cb?: (err: any, data?: UpdateConnectorCommandOutput) => void
  ): Promise<UpdateConnectorCommandOutput> | void {
    const command = new UpdateConnectorCommand(args);
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
