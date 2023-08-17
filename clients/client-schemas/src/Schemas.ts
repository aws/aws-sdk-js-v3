// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

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
import { SchemasClient, SchemasClientConfig } from "./SchemasClient";

const commands = {
  CreateDiscovererCommand,
  CreateRegistryCommand,
  CreateSchemaCommand,
  DeleteDiscovererCommand,
  DeleteRegistryCommand,
  DeleteResourcePolicyCommand,
  DeleteSchemaCommand,
  DeleteSchemaVersionCommand,
  DescribeCodeBindingCommand,
  DescribeDiscovererCommand,
  DescribeRegistryCommand,
  DescribeSchemaCommand,
  ExportSchemaCommand,
  GetCodeBindingSourceCommand,
  GetDiscoveredSchemaCommand,
  GetResourcePolicyCommand,
  ListDiscoverersCommand,
  ListRegistriesCommand,
  ListSchemasCommand,
  ListSchemaVersionsCommand,
  ListTagsForResourceCommand,
  PutCodeBindingCommand,
  PutResourcePolicyCommand,
  SearchSchemasCommand,
  StartDiscovererCommand,
  StopDiscovererCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateDiscovererCommand,
  UpdateRegistryCommand,
  UpdateSchemaCommand,
};

export interface Schemas {
  /**
   * @see {@link CreateDiscovererCommand}
   */
  createDiscoverer(
    args: CreateDiscovererCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDiscovererCommandOutput>;
  createDiscoverer(
    args: CreateDiscovererCommandInput,
    cb: (err: any, data?: CreateDiscovererCommandOutput) => void
  ): void;
  createDiscoverer(
    args: CreateDiscovererCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDiscovererCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRegistryCommand}
   */
  createRegistry(
    args: CreateRegistryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRegistryCommandOutput>;
  createRegistry(args: CreateRegistryCommandInput, cb: (err: any, data?: CreateRegistryCommandOutput) => void): void;
  createRegistry(
    args: CreateRegistryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRegistryCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSchemaCommand}
   */
  createSchema(args: CreateSchemaCommandInput, options?: __HttpHandlerOptions): Promise<CreateSchemaCommandOutput>;
  createSchema(args: CreateSchemaCommandInput, cb: (err: any, data?: CreateSchemaCommandOutput) => void): void;
  createSchema(
    args: CreateSchemaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSchemaCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDiscovererCommand}
   */
  deleteDiscoverer(
    args: DeleteDiscovererCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDiscovererCommandOutput>;
  deleteDiscoverer(
    args: DeleteDiscovererCommandInput,
    cb: (err: any, data?: DeleteDiscovererCommandOutput) => void
  ): void;
  deleteDiscoverer(
    args: DeleteDiscovererCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDiscovererCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRegistryCommand}
   */
  deleteRegistry(
    args: DeleteRegistryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRegistryCommandOutput>;
  deleteRegistry(args: DeleteRegistryCommandInput, cb: (err: any, data?: DeleteRegistryCommandOutput) => void): void;
  deleteRegistry(
    args: DeleteRegistryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRegistryCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResourcePolicyCommand}
   */
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResourcePolicyCommandOutput>;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSchemaCommand}
   */
  deleteSchema(args: DeleteSchemaCommandInput, options?: __HttpHandlerOptions): Promise<DeleteSchemaCommandOutput>;
  deleteSchema(args: DeleteSchemaCommandInput, cb: (err: any, data?: DeleteSchemaCommandOutput) => void): void;
  deleteSchema(
    args: DeleteSchemaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSchemaCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSchemaVersionCommand}
   */
  deleteSchemaVersion(
    args: DeleteSchemaVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSchemaVersionCommandOutput>;
  deleteSchemaVersion(
    args: DeleteSchemaVersionCommandInput,
    cb: (err: any, data?: DeleteSchemaVersionCommandOutput) => void
  ): void;
  deleteSchemaVersion(
    args: DeleteSchemaVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSchemaVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeCodeBindingCommand}
   */
  describeCodeBinding(
    args: DescribeCodeBindingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCodeBindingCommandOutput>;
  describeCodeBinding(
    args: DescribeCodeBindingCommandInput,
    cb: (err: any, data?: DescribeCodeBindingCommandOutput) => void
  ): void;
  describeCodeBinding(
    args: DescribeCodeBindingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCodeBindingCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDiscovererCommand}
   */
  describeDiscoverer(
    args: DescribeDiscovererCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDiscovererCommandOutput>;
  describeDiscoverer(
    args: DescribeDiscovererCommandInput,
    cb: (err: any, data?: DescribeDiscovererCommandOutput) => void
  ): void;
  describeDiscoverer(
    args: DescribeDiscovererCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDiscovererCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRegistryCommand}
   */
  describeRegistry(
    args: DescribeRegistryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRegistryCommandOutput>;
  describeRegistry(
    args: DescribeRegistryCommandInput,
    cb: (err: any, data?: DescribeRegistryCommandOutput) => void
  ): void;
  describeRegistry(
    args: DescribeRegistryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRegistryCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSchemaCommand}
   */
  describeSchema(
    args: DescribeSchemaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSchemaCommandOutput>;
  describeSchema(args: DescribeSchemaCommandInput, cb: (err: any, data?: DescribeSchemaCommandOutput) => void): void;
  describeSchema(
    args: DescribeSchemaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSchemaCommandOutput) => void
  ): void;

  /**
   * @see {@link ExportSchemaCommand}
   */
  exportSchema(args: ExportSchemaCommandInput, options?: __HttpHandlerOptions): Promise<ExportSchemaCommandOutput>;
  exportSchema(args: ExportSchemaCommandInput, cb: (err: any, data?: ExportSchemaCommandOutput) => void): void;
  exportSchema(
    args: ExportSchemaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExportSchemaCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCodeBindingSourceCommand}
   */
  getCodeBindingSource(
    args: GetCodeBindingSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCodeBindingSourceCommandOutput>;
  getCodeBindingSource(
    args: GetCodeBindingSourceCommandInput,
    cb: (err: any, data?: GetCodeBindingSourceCommandOutput) => void
  ): void;
  getCodeBindingSource(
    args: GetCodeBindingSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCodeBindingSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDiscoveredSchemaCommand}
   */
  getDiscoveredSchema(
    args: GetDiscoveredSchemaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDiscoveredSchemaCommandOutput>;
  getDiscoveredSchema(
    args: GetDiscoveredSchemaCommandInput,
    cb: (err: any, data?: GetDiscoveredSchemaCommandOutput) => void
  ): void;
  getDiscoveredSchema(
    args: GetDiscoveredSchemaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDiscoveredSchemaCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourcePolicyCommand}
   */
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourcePolicyCommandOutput>;
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDiscoverersCommand}
   */
  listDiscoverers(
    args: ListDiscoverersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDiscoverersCommandOutput>;
  listDiscoverers(args: ListDiscoverersCommandInput, cb: (err: any, data?: ListDiscoverersCommandOutput) => void): void;
  listDiscoverers(
    args: ListDiscoverersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDiscoverersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRegistriesCommand}
   */
  listRegistries(
    args: ListRegistriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRegistriesCommandOutput>;
  listRegistries(args: ListRegistriesCommandInput, cb: (err: any, data?: ListRegistriesCommandOutput) => void): void;
  listRegistries(
    args: ListRegistriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRegistriesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSchemasCommand}
   */
  listSchemas(args: ListSchemasCommandInput, options?: __HttpHandlerOptions): Promise<ListSchemasCommandOutput>;
  listSchemas(args: ListSchemasCommandInput, cb: (err: any, data?: ListSchemasCommandOutput) => void): void;
  listSchemas(
    args: ListSchemasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSchemasCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSchemaVersionsCommand}
   */
  listSchemaVersions(
    args: ListSchemaVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSchemaVersionsCommandOutput>;
  listSchemaVersions(
    args: ListSchemaVersionsCommandInput,
    cb: (err: any, data?: ListSchemaVersionsCommandOutput) => void
  ): void;
  listSchemaVersions(
    args: ListSchemaVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSchemaVersionsCommandOutput) => void
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
   * @see {@link PutCodeBindingCommand}
   */
  putCodeBinding(
    args: PutCodeBindingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutCodeBindingCommandOutput>;
  putCodeBinding(args: PutCodeBindingCommandInput, cb: (err: any, data?: PutCodeBindingCommandOutput) => void): void;
  putCodeBinding(
    args: PutCodeBindingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutCodeBindingCommandOutput) => void
  ): void;

  /**
   * @see {@link PutResourcePolicyCommand}
   */
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutResourcePolicyCommandOutput>;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchSchemasCommand}
   */
  searchSchemas(args: SearchSchemasCommandInput, options?: __HttpHandlerOptions): Promise<SearchSchemasCommandOutput>;
  searchSchemas(args: SearchSchemasCommandInput, cb: (err: any, data?: SearchSchemasCommandOutput) => void): void;
  searchSchemas(
    args: SearchSchemasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchSchemasCommandOutput) => void
  ): void;

  /**
   * @see {@link StartDiscovererCommand}
   */
  startDiscoverer(
    args: StartDiscovererCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartDiscovererCommandOutput>;
  startDiscoverer(args: StartDiscovererCommandInput, cb: (err: any, data?: StartDiscovererCommandOutput) => void): void;
  startDiscoverer(
    args: StartDiscovererCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartDiscovererCommandOutput) => void
  ): void;

  /**
   * @see {@link StopDiscovererCommand}
   */
  stopDiscoverer(
    args: StopDiscovererCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopDiscovererCommandOutput>;
  stopDiscoverer(args: StopDiscovererCommandInput, cb: (err: any, data?: StopDiscovererCommandOutput) => void): void;
  stopDiscoverer(
    args: StopDiscovererCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopDiscovererCommandOutput) => void
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
   * @see {@link UpdateDiscovererCommand}
   */
  updateDiscoverer(
    args: UpdateDiscovererCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDiscovererCommandOutput>;
  updateDiscoverer(
    args: UpdateDiscovererCommandInput,
    cb: (err: any, data?: UpdateDiscovererCommandOutput) => void
  ): void;
  updateDiscoverer(
    args: UpdateDiscovererCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDiscovererCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRegistryCommand}
   */
  updateRegistry(
    args: UpdateRegistryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRegistryCommandOutput>;
  updateRegistry(args: UpdateRegistryCommandInput, cb: (err: any, data?: UpdateRegistryCommandOutput) => void): void;
  updateRegistry(
    args: UpdateRegistryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRegistryCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSchemaCommand}
   */
  updateSchema(args: UpdateSchemaCommandInput, options?: __HttpHandlerOptions): Promise<UpdateSchemaCommandOutput>;
  updateSchema(args: UpdateSchemaCommandInput, cb: (err: any, data?: UpdateSchemaCommandOutput) => void): void;
  updateSchema(
    args: UpdateSchemaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSchemaCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>Amazon EventBridge Schema Registry</p>
 */
export class Schemas extends SchemasClient implements Schemas {}
createAggregatedClient(commands, Schemas);
