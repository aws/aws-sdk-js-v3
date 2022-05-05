// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  CreateDiscovererCommand,
  CreateDiscovererCommandInput,
  CreateDiscovererCommandOutput,
} from "./commands/CreateDiscovererCommand";
import {
  CreateRegistryCommand,
  CreateRegistryCommandInput,
  CreateRegistryCommandOutput,
} from "./commands/CreateRegistryCommand";
import {
  CreateSchemaCommand,
  CreateSchemaCommandInput,
  CreateSchemaCommandOutput,
} from "./commands/CreateSchemaCommand";
import {
  DeleteDiscovererCommand,
  DeleteDiscovererCommandInput,
  DeleteDiscovererCommandOutput,
} from "./commands/DeleteDiscovererCommand";
import {
  DeleteRegistryCommand,
  DeleteRegistryCommandInput,
  DeleteRegistryCommandOutput,
} from "./commands/DeleteRegistryCommand";
import {
  DeleteResourcePolicyCommand,
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "./commands/DeleteResourcePolicyCommand";
import {
  DeleteSchemaCommand,
  DeleteSchemaCommandInput,
  DeleteSchemaCommandOutput,
} from "./commands/DeleteSchemaCommand";
import {
  DeleteSchemaVersionCommand,
  DeleteSchemaVersionCommandInput,
  DeleteSchemaVersionCommandOutput,
} from "./commands/DeleteSchemaVersionCommand";
import {
  DescribeCodeBindingCommand,
  DescribeCodeBindingCommandInput,
  DescribeCodeBindingCommandOutput,
} from "./commands/DescribeCodeBindingCommand";
import {
  DescribeDiscovererCommand,
  DescribeDiscovererCommandInput,
  DescribeDiscovererCommandOutput,
} from "./commands/DescribeDiscovererCommand";
import {
  DescribeRegistryCommand,
  DescribeRegistryCommandInput,
  DescribeRegistryCommandOutput,
} from "./commands/DescribeRegistryCommand";
import {
  DescribeSchemaCommand,
  DescribeSchemaCommandInput,
  DescribeSchemaCommandOutput,
} from "./commands/DescribeSchemaCommand";
import {
  ExportSchemaCommand,
  ExportSchemaCommandInput,
  ExportSchemaCommandOutput,
} from "./commands/ExportSchemaCommand";
import {
  GetCodeBindingSourceCommand,
  GetCodeBindingSourceCommandInput,
  GetCodeBindingSourceCommandOutput,
} from "./commands/GetCodeBindingSourceCommand";
import {
  GetDiscoveredSchemaCommand,
  GetDiscoveredSchemaCommandInput,
  GetDiscoveredSchemaCommandOutput,
} from "./commands/GetDiscoveredSchemaCommand";
import {
  GetResourcePolicyCommand,
  GetResourcePolicyCommandInput,
  GetResourcePolicyCommandOutput,
} from "./commands/GetResourcePolicyCommand";
import {
  ListDiscoverersCommand,
  ListDiscoverersCommandInput,
  ListDiscoverersCommandOutput,
} from "./commands/ListDiscoverersCommand";
import {
  ListRegistriesCommand,
  ListRegistriesCommandInput,
  ListRegistriesCommandOutput,
} from "./commands/ListRegistriesCommand";
import { ListSchemasCommand, ListSchemasCommandInput, ListSchemasCommandOutput } from "./commands/ListSchemasCommand";
import {
  ListSchemaVersionsCommand,
  ListSchemaVersionsCommandInput,
  ListSchemaVersionsCommandOutput,
} from "./commands/ListSchemaVersionsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PutCodeBindingCommand,
  PutCodeBindingCommandInput,
  PutCodeBindingCommandOutput,
} from "./commands/PutCodeBindingCommand";
import {
  PutResourcePolicyCommand,
  PutResourcePolicyCommandInput,
  PutResourcePolicyCommandOutput,
} from "./commands/PutResourcePolicyCommand";
import {
  SearchSchemasCommand,
  SearchSchemasCommandInput,
  SearchSchemasCommandOutput,
} from "./commands/SearchSchemasCommand";
import {
  StartDiscovererCommand,
  StartDiscovererCommandInput,
  StartDiscovererCommandOutput,
} from "./commands/StartDiscovererCommand";
import {
  StopDiscovererCommand,
  StopDiscovererCommandInput,
  StopDiscovererCommandOutput,
} from "./commands/StopDiscovererCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateDiscovererCommand,
  UpdateDiscovererCommandInput,
  UpdateDiscovererCommandOutput,
} from "./commands/UpdateDiscovererCommand";
import {
  UpdateRegistryCommand,
  UpdateRegistryCommandInput,
  UpdateRegistryCommandOutput,
} from "./commands/UpdateRegistryCommand";
import {
  UpdateSchemaCommand,
  UpdateSchemaCommandInput,
  UpdateSchemaCommandOutput,
} from "./commands/UpdateSchemaCommand";
import { SchemasClient } from "./SchemasClient";

/**
 * <p>Amazon EventBridge Schema Registry</p>
 */
export class Schemas extends SchemasClient {
  /**
   * <p>Creates a discoverer.</p>
   */
  public createDiscoverer(
    args: CreateDiscovererCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDiscovererCommandOutput>;
  public createDiscoverer(
    args: CreateDiscovererCommandInput,
    cb: (err: any, data?: CreateDiscovererCommandOutput) => void
  ): void;
  public createDiscoverer(
    args: CreateDiscovererCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDiscovererCommandOutput) => void
  ): void;
  public createDiscoverer(
    args: CreateDiscovererCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDiscovererCommandOutput) => void),
    cb?: (err: any, data?: CreateDiscovererCommandOutput) => void
  ): Promise<CreateDiscovererCommandOutput> | void {
    const command = new CreateDiscovererCommand(args);
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
   * <p>Creates a registry.</p>
   */
  public createRegistry(
    args: CreateRegistryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRegistryCommandOutput>;
  public createRegistry(
    args: CreateRegistryCommandInput,
    cb: (err: any, data?: CreateRegistryCommandOutput) => void
  ): void;
  public createRegistry(
    args: CreateRegistryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRegistryCommandOutput) => void
  ): void;
  public createRegistry(
    args: CreateRegistryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateRegistryCommandOutput) => void),
    cb?: (err: any, data?: CreateRegistryCommandOutput) => void
  ): Promise<CreateRegistryCommandOutput> | void {
    const command = new CreateRegistryCommand(args);
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
   * <p>Creates a schema definition.</p> <note><p>Inactive schemas will be deleted after two years.</p></note>
   */
  public createSchema(
    args: CreateSchemaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSchemaCommandOutput>;
  public createSchema(args: CreateSchemaCommandInput, cb: (err: any, data?: CreateSchemaCommandOutput) => void): void;
  public createSchema(
    args: CreateSchemaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSchemaCommandOutput) => void
  ): void;
  public createSchema(
    args: CreateSchemaCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateSchemaCommandOutput) => void),
    cb?: (err: any, data?: CreateSchemaCommandOutput) => void
  ): Promise<CreateSchemaCommandOutput> | void {
    const command = new CreateSchemaCommand(args);
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
   * <p>Deletes a discoverer.</p>
   */
  public deleteDiscoverer(
    args: DeleteDiscovererCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDiscovererCommandOutput>;
  public deleteDiscoverer(
    args: DeleteDiscovererCommandInput,
    cb: (err: any, data?: DeleteDiscovererCommandOutput) => void
  ): void;
  public deleteDiscoverer(
    args: DeleteDiscovererCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDiscovererCommandOutput) => void
  ): void;
  public deleteDiscoverer(
    args: DeleteDiscovererCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDiscovererCommandOutput) => void),
    cb?: (err: any, data?: DeleteDiscovererCommandOutput) => void
  ): Promise<DeleteDiscovererCommandOutput> | void {
    const command = new DeleteDiscovererCommand(args);
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
   * <p>Deletes a Registry.</p>
   */
  public deleteRegistry(
    args: DeleteRegistryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRegistryCommandOutput>;
  public deleteRegistry(
    args: DeleteRegistryCommandInput,
    cb: (err: any, data?: DeleteRegistryCommandOutput) => void
  ): void;
  public deleteRegistry(
    args: DeleteRegistryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRegistryCommandOutput) => void
  ): void;
  public deleteRegistry(
    args: DeleteRegistryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteRegistryCommandOutput) => void),
    cb?: (err: any, data?: DeleteRegistryCommandOutput) => void
  ): Promise<DeleteRegistryCommandOutput> | void {
    const command = new DeleteRegistryCommand(args);
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
   * <p>Delete the resource-based policy attached to the specified registry.</p>
   */
  public deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResourcePolicyCommandOutput>;
  public deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;
  public deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;
  public deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteResourcePolicyCommandOutput) => void),
    cb?: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): Promise<DeleteResourcePolicyCommandOutput> | void {
    const command = new DeleteResourcePolicyCommand(args);
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
   * <p>Delete a schema definition.</p>
   */
  public deleteSchema(
    args: DeleteSchemaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSchemaCommandOutput>;
  public deleteSchema(args: DeleteSchemaCommandInput, cb: (err: any, data?: DeleteSchemaCommandOutput) => void): void;
  public deleteSchema(
    args: DeleteSchemaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSchemaCommandOutput) => void
  ): void;
  public deleteSchema(
    args: DeleteSchemaCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteSchemaCommandOutput) => void),
    cb?: (err: any, data?: DeleteSchemaCommandOutput) => void
  ): Promise<DeleteSchemaCommandOutput> | void {
    const command = new DeleteSchemaCommand(args);
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
   * <p>Delete the schema version definition</p>
   */
  public deleteSchemaVersion(
    args: DeleteSchemaVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSchemaVersionCommandOutput>;
  public deleteSchemaVersion(
    args: DeleteSchemaVersionCommandInput,
    cb: (err: any, data?: DeleteSchemaVersionCommandOutput) => void
  ): void;
  public deleteSchemaVersion(
    args: DeleteSchemaVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSchemaVersionCommandOutput) => void
  ): void;
  public deleteSchemaVersion(
    args: DeleteSchemaVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteSchemaVersionCommandOutput) => void),
    cb?: (err: any, data?: DeleteSchemaVersionCommandOutput) => void
  ): Promise<DeleteSchemaVersionCommandOutput> | void {
    const command = new DeleteSchemaVersionCommand(args);
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
   * <p>Describe the code binding URI.</p>
   */
  public describeCodeBinding(
    args: DescribeCodeBindingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCodeBindingCommandOutput>;
  public describeCodeBinding(
    args: DescribeCodeBindingCommandInput,
    cb: (err: any, data?: DescribeCodeBindingCommandOutput) => void
  ): void;
  public describeCodeBinding(
    args: DescribeCodeBindingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCodeBindingCommandOutput) => void
  ): void;
  public describeCodeBinding(
    args: DescribeCodeBindingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeCodeBindingCommandOutput) => void),
    cb?: (err: any, data?: DescribeCodeBindingCommandOutput) => void
  ): Promise<DescribeCodeBindingCommandOutput> | void {
    const command = new DescribeCodeBindingCommand(args);
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
   * <p>Describes the discoverer.</p>
   */
  public describeDiscoverer(
    args: DescribeDiscovererCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDiscovererCommandOutput>;
  public describeDiscoverer(
    args: DescribeDiscovererCommandInput,
    cb: (err: any, data?: DescribeDiscovererCommandOutput) => void
  ): void;
  public describeDiscoverer(
    args: DescribeDiscovererCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDiscovererCommandOutput) => void
  ): void;
  public describeDiscoverer(
    args: DescribeDiscovererCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDiscovererCommandOutput) => void),
    cb?: (err: any, data?: DescribeDiscovererCommandOutput) => void
  ): Promise<DescribeDiscovererCommandOutput> | void {
    const command = new DescribeDiscovererCommand(args);
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
   * <p>Describes the registry.</p>
   */
  public describeRegistry(
    args: DescribeRegistryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRegistryCommandOutput>;
  public describeRegistry(
    args: DescribeRegistryCommandInput,
    cb: (err: any, data?: DescribeRegistryCommandOutput) => void
  ): void;
  public describeRegistry(
    args: DescribeRegistryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRegistryCommandOutput) => void
  ): void;
  public describeRegistry(
    args: DescribeRegistryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeRegistryCommandOutput) => void),
    cb?: (err: any, data?: DescribeRegistryCommandOutput) => void
  ): Promise<DescribeRegistryCommandOutput> | void {
    const command = new DescribeRegistryCommand(args);
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
   * <p>Retrieve the schema definition.</p>
   */
  public describeSchema(
    args: DescribeSchemaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSchemaCommandOutput>;
  public describeSchema(
    args: DescribeSchemaCommandInput,
    cb: (err: any, data?: DescribeSchemaCommandOutput) => void
  ): void;
  public describeSchema(
    args: DescribeSchemaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSchemaCommandOutput) => void
  ): void;
  public describeSchema(
    args: DescribeSchemaCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeSchemaCommandOutput) => void),
    cb?: (err: any, data?: DescribeSchemaCommandOutput) => void
  ): Promise<DescribeSchemaCommandOutput> | void {
    const command = new DescribeSchemaCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  public exportSchema(
    args: ExportSchemaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExportSchemaCommandOutput>;
  public exportSchema(args: ExportSchemaCommandInput, cb: (err: any, data?: ExportSchemaCommandOutput) => void): void;
  public exportSchema(
    args: ExportSchemaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExportSchemaCommandOutput) => void
  ): void;
  public exportSchema(
    args: ExportSchemaCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ExportSchemaCommandOutput) => void),
    cb?: (err: any, data?: ExportSchemaCommandOutput) => void
  ): Promise<ExportSchemaCommandOutput> | void {
    const command = new ExportSchemaCommand(args);
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
   * <p>Get the code binding source URI.</p>
   */
  public getCodeBindingSource(
    args: GetCodeBindingSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCodeBindingSourceCommandOutput>;
  public getCodeBindingSource(
    args: GetCodeBindingSourceCommandInput,
    cb: (err: any, data?: GetCodeBindingSourceCommandOutput) => void
  ): void;
  public getCodeBindingSource(
    args: GetCodeBindingSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCodeBindingSourceCommandOutput) => void
  ): void;
  public getCodeBindingSource(
    args: GetCodeBindingSourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetCodeBindingSourceCommandOutput) => void),
    cb?: (err: any, data?: GetCodeBindingSourceCommandOutput) => void
  ): Promise<GetCodeBindingSourceCommandOutput> | void {
    const command = new GetCodeBindingSourceCommand(args);
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
   * <p>Get the discovered schema that was generated based on sampled events.</p>
   */
  public getDiscoveredSchema(
    args: GetDiscoveredSchemaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDiscoveredSchemaCommandOutput>;
  public getDiscoveredSchema(
    args: GetDiscoveredSchemaCommandInput,
    cb: (err: any, data?: GetDiscoveredSchemaCommandOutput) => void
  ): void;
  public getDiscoveredSchema(
    args: GetDiscoveredSchemaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDiscoveredSchemaCommandOutput) => void
  ): void;
  public getDiscoveredSchema(
    args: GetDiscoveredSchemaCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDiscoveredSchemaCommandOutput) => void),
    cb?: (err: any, data?: GetDiscoveredSchemaCommandOutput) => void
  ): Promise<GetDiscoveredSchemaCommandOutput> | void {
    const command = new GetDiscoveredSchemaCommand(args);
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
   * <p>Retrieves the resource-based policy attached to a given registry.</p>
   */
  public getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourcePolicyCommandOutput>;
  public getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;
  public getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;
  public getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetResourcePolicyCommandOutput) => void),
    cb?: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): Promise<GetResourcePolicyCommandOutput> | void {
    const command = new GetResourcePolicyCommand(args);
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
   * <p>List the discoverers.</p>
   */
  public listDiscoverers(
    args: ListDiscoverersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDiscoverersCommandOutput>;
  public listDiscoverers(
    args: ListDiscoverersCommandInput,
    cb: (err: any, data?: ListDiscoverersCommandOutput) => void
  ): void;
  public listDiscoverers(
    args: ListDiscoverersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDiscoverersCommandOutput) => void
  ): void;
  public listDiscoverers(
    args: ListDiscoverersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDiscoverersCommandOutput) => void),
    cb?: (err: any, data?: ListDiscoverersCommandOutput) => void
  ): Promise<ListDiscoverersCommandOutput> | void {
    const command = new ListDiscoverersCommand(args);
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
   * <p>List the registries.</p>
   */
  public listRegistries(
    args: ListRegistriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRegistriesCommandOutput>;
  public listRegistries(
    args: ListRegistriesCommandInput,
    cb: (err: any, data?: ListRegistriesCommandOutput) => void
  ): void;
  public listRegistries(
    args: ListRegistriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRegistriesCommandOutput) => void
  ): void;
  public listRegistries(
    args: ListRegistriesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListRegistriesCommandOutput) => void),
    cb?: (err: any, data?: ListRegistriesCommandOutput) => void
  ): Promise<ListRegistriesCommandOutput> | void {
    const command = new ListRegistriesCommand(args);
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
   * <p>List the schemas.</p>
   */
  public listSchemas(args: ListSchemasCommandInput, options?: __HttpHandlerOptions): Promise<ListSchemasCommandOutput>;
  public listSchemas(args: ListSchemasCommandInput, cb: (err: any, data?: ListSchemasCommandOutput) => void): void;
  public listSchemas(
    args: ListSchemasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSchemasCommandOutput) => void
  ): void;
  public listSchemas(
    args: ListSchemasCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSchemasCommandOutput) => void),
    cb?: (err: any, data?: ListSchemasCommandOutput) => void
  ): Promise<ListSchemasCommandOutput> | void {
    const command = new ListSchemasCommand(args);
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
   * <p>Provides a list of the schema versions and related information.</p>
   */
  public listSchemaVersions(
    args: ListSchemaVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSchemaVersionsCommandOutput>;
  public listSchemaVersions(
    args: ListSchemaVersionsCommandInput,
    cb: (err: any, data?: ListSchemaVersionsCommandOutput) => void
  ): void;
  public listSchemaVersions(
    args: ListSchemaVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSchemaVersionsCommandOutput) => void
  ): void;
  public listSchemaVersions(
    args: ListSchemaVersionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSchemaVersionsCommandOutput) => void),
    cb?: (err: any, data?: ListSchemaVersionsCommandOutput) => void
  ): Promise<ListSchemaVersionsCommandOutput> | void {
    const command = new ListSchemaVersionsCommand(args);
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
   * <p>Get tags for resource.</p>
   */
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
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
   * <p>Put code binding URI</p>
   */
  public putCodeBinding(
    args: PutCodeBindingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutCodeBindingCommandOutput>;
  public putCodeBinding(
    args: PutCodeBindingCommandInput,
    cb: (err: any, data?: PutCodeBindingCommandOutput) => void
  ): void;
  public putCodeBinding(
    args: PutCodeBindingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutCodeBindingCommandOutput) => void
  ): void;
  public putCodeBinding(
    args: PutCodeBindingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutCodeBindingCommandOutput) => void),
    cb?: (err: any, data?: PutCodeBindingCommandOutput) => void
  ): Promise<PutCodeBindingCommandOutput> | void {
    const command = new PutCodeBindingCommand(args);
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
   * <p>The name of the policy.</p>
   */
  public putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutResourcePolicyCommandOutput>;
  public putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;
  public putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;
  public putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutResourcePolicyCommandOutput) => void),
    cb?: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): Promise<PutResourcePolicyCommandOutput> | void {
    const command = new PutResourcePolicyCommand(args);
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
   * <p>Search the schemas</p>
   */
  public searchSchemas(
    args: SearchSchemasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchSchemasCommandOutput>;
  public searchSchemas(
    args: SearchSchemasCommandInput,
    cb: (err: any, data?: SearchSchemasCommandOutput) => void
  ): void;
  public searchSchemas(
    args: SearchSchemasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchSchemasCommandOutput) => void
  ): void;
  public searchSchemas(
    args: SearchSchemasCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SearchSchemasCommandOutput) => void),
    cb?: (err: any, data?: SearchSchemasCommandOutput) => void
  ): Promise<SearchSchemasCommandOutput> | void {
    const command = new SearchSchemasCommand(args);
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
   * <p>Starts the discoverer</p>
   */
  public startDiscoverer(
    args: StartDiscovererCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartDiscovererCommandOutput>;
  public startDiscoverer(
    args: StartDiscovererCommandInput,
    cb: (err: any, data?: StartDiscovererCommandOutput) => void
  ): void;
  public startDiscoverer(
    args: StartDiscovererCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartDiscovererCommandOutput) => void
  ): void;
  public startDiscoverer(
    args: StartDiscovererCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartDiscovererCommandOutput) => void),
    cb?: (err: any, data?: StartDiscovererCommandOutput) => void
  ): Promise<StartDiscovererCommandOutput> | void {
    const command = new StartDiscovererCommand(args);
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
   * <p>Stops the discoverer</p>
   */
  public stopDiscoverer(
    args: StopDiscovererCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopDiscovererCommandOutput>;
  public stopDiscoverer(
    args: StopDiscovererCommandInput,
    cb: (err: any, data?: StopDiscovererCommandOutput) => void
  ): void;
  public stopDiscoverer(
    args: StopDiscovererCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopDiscovererCommandOutput) => void
  ): void;
  public stopDiscoverer(
    args: StopDiscovererCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopDiscovererCommandOutput) => void),
    cb?: (err: any, data?: StopDiscovererCommandOutput) => void
  ): Promise<StopDiscovererCommandOutput> | void {
    const command = new StopDiscovererCommand(args);
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
   * <p>Add tags to a resource.</p>
   */
  public tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  public tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
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
   * <p>Removes tags from a resource.</p>
   */
  public untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  public untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
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
   * <p>Updates the discoverer</p>
   */
  public updateDiscoverer(
    args: UpdateDiscovererCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDiscovererCommandOutput>;
  public updateDiscoverer(
    args: UpdateDiscovererCommandInput,
    cb: (err: any, data?: UpdateDiscovererCommandOutput) => void
  ): void;
  public updateDiscoverer(
    args: UpdateDiscovererCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDiscovererCommandOutput) => void
  ): void;
  public updateDiscoverer(
    args: UpdateDiscovererCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDiscovererCommandOutput) => void),
    cb?: (err: any, data?: UpdateDiscovererCommandOutput) => void
  ): Promise<UpdateDiscovererCommandOutput> | void {
    const command = new UpdateDiscovererCommand(args);
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
   * <p>Updates a registry.</p>
   */
  public updateRegistry(
    args: UpdateRegistryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRegistryCommandOutput>;
  public updateRegistry(
    args: UpdateRegistryCommandInput,
    cb: (err: any, data?: UpdateRegistryCommandOutput) => void
  ): void;
  public updateRegistry(
    args: UpdateRegistryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRegistryCommandOutput) => void
  ): void;
  public updateRegistry(
    args: UpdateRegistryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateRegistryCommandOutput) => void),
    cb?: (err: any, data?: UpdateRegistryCommandOutput) => void
  ): Promise<UpdateRegistryCommandOutput> | void {
    const command = new UpdateRegistryCommand(args);
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
   * <p>Updates the schema definition</p> <note><p>Inactive schemas will be deleted after two years.</p></note>
   */
  public updateSchema(
    args: UpdateSchemaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSchemaCommandOutput>;
  public updateSchema(args: UpdateSchemaCommandInput, cb: (err: any, data?: UpdateSchemaCommandOutput) => void): void;
  public updateSchema(
    args: UpdateSchemaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSchemaCommandOutput) => void
  ): void;
  public updateSchema(
    args: UpdateSchemaCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateSchemaCommandOutput) => void),
    cb?: (err: any, data?: UpdateSchemaCommandOutput) => void
  ): Promise<UpdateSchemaCommandOutput> | void {
    const command = new UpdateSchemaCommand(args);
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
