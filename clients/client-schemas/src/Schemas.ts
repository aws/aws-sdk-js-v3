// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  PaginationConfiguration,
  Paginator,
  WaiterConfiguration,
} from "@smithy/types";
import type { WaiterResult } from "@smithy/util-waiter";

import {
  type CreateDiscovererCommandInput,
  type CreateDiscovererCommandOutput,
  CreateDiscovererCommand,
} from "./commands/CreateDiscovererCommand";
import {
  type CreateRegistryCommandInput,
  type CreateRegistryCommandOutput,
  CreateRegistryCommand,
} from "./commands/CreateRegistryCommand";
import {
  type CreateSchemaCommandInput,
  type CreateSchemaCommandOutput,
  CreateSchemaCommand,
} from "./commands/CreateSchemaCommand";
import {
  type DeleteDiscovererCommandInput,
  type DeleteDiscovererCommandOutput,
  DeleteDiscovererCommand,
} from "./commands/DeleteDiscovererCommand";
import {
  type DeleteRegistryCommandInput,
  type DeleteRegistryCommandOutput,
  DeleteRegistryCommand,
} from "./commands/DeleteRegistryCommand";
import {
  type DeleteResourcePolicyCommandInput,
  type DeleteResourcePolicyCommandOutput,
  DeleteResourcePolicyCommand,
} from "./commands/DeleteResourcePolicyCommand";
import {
  type DeleteSchemaCommandInput,
  type DeleteSchemaCommandOutput,
  DeleteSchemaCommand,
} from "./commands/DeleteSchemaCommand";
import {
  type DeleteSchemaVersionCommandInput,
  type DeleteSchemaVersionCommandOutput,
  DeleteSchemaVersionCommand,
} from "./commands/DeleteSchemaVersionCommand";
import {
  type DescribeCodeBindingCommandInput,
  type DescribeCodeBindingCommandOutput,
  DescribeCodeBindingCommand,
} from "./commands/DescribeCodeBindingCommand";
import {
  type DescribeDiscovererCommandInput,
  type DescribeDiscovererCommandOutput,
  DescribeDiscovererCommand,
} from "./commands/DescribeDiscovererCommand";
import {
  type DescribeRegistryCommandInput,
  type DescribeRegistryCommandOutput,
  DescribeRegistryCommand,
} from "./commands/DescribeRegistryCommand";
import {
  type DescribeSchemaCommandInput,
  type DescribeSchemaCommandOutput,
  DescribeSchemaCommand,
} from "./commands/DescribeSchemaCommand";
import {
  type ExportSchemaCommandInput,
  type ExportSchemaCommandOutput,
  ExportSchemaCommand,
} from "./commands/ExportSchemaCommand";
import {
  type GetCodeBindingSourceCommandInput,
  type GetCodeBindingSourceCommandOutput,
  GetCodeBindingSourceCommand,
} from "./commands/GetCodeBindingSourceCommand";
import {
  type GetDiscoveredSchemaCommandInput,
  type GetDiscoveredSchemaCommandOutput,
  GetDiscoveredSchemaCommand,
} from "./commands/GetDiscoveredSchemaCommand";
import {
  type GetResourcePolicyCommandInput,
  type GetResourcePolicyCommandOutput,
  GetResourcePolicyCommand,
} from "./commands/GetResourcePolicyCommand";
import {
  type ListDiscoverersCommandInput,
  type ListDiscoverersCommandOutput,
  ListDiscoverersCommand,
} from "./commands/ListDiscoverersCommand";
import {
  type ListRegistriesCommandInput,
  type ListRegistriesCommandOutput,
  ListRegistriesCommand,
} from "./commands/ListRegistriesCommand";
import {
  type ListSchemasCommandInput,
  type ListSchemasCommandOutput,
  ListSchemasCommand,
} from "./commands/ListSchemasCommand";
import {
  type ListSchemaVersionsCommandInput,
  type ListSchemaVersionsCommandOutput,
  ListSchemaVersionsCommand,
} from "./commands/ListSchemaVersionsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type PutCodeBindingCommandInput,
  type PutCodeBindingCommandOutput,
  PutCodeBindingCommand,
} from "./commands/PutCodeBindingCommand";
import {
  type PutResourcePolicyCommandInput,
  type PutResourcePolicyCommandOutput,
  PutResourcePolicyCommand,
} from "./commands/PutResourcePolicyCommand";
import {
  type SearchSchemasCommandInput,
  type SearchSchemasCommandOutput,
  SearchSchemasCommand,
} from "./commands/SearchSchemasCommand";
import {
  type StartDiscovererCommandInput,
  type StartDiscovererCommandOutput,
  StartDiscovererCommand,
} from "./commands/StartDiscovererCommand";
import {
  type StopDiscovererCommandInput,
  type StopDiscovererCommandOutput,
  StopDiscovererCommand,
} from "./commands/StopDiscovererCommand";
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
  type UpdateDiscovererCommandInput,
  type UpdateDiscovererCommandOutput,
  UpdateDiscovererCommand,
} from "./commands/UpdateDiscovererCommand";
import {
  type UpdateRegistryCommandInput,
  type UpdateRegistryCommandOutput,
  UpdateRegistryCommand,
} from "./commands/UpdateRegistryCommand";
import {
  type UpdateSchemaCommandInput,
  type UpdateSchemaCommandOutput,
  UpdateSchemaCommand,
} from "./commands/UpdateSchemaCommand";
import { paginateListDiscoverers } from "./pagination/ListDiscoverersPaginator";
import { paginateListRegistries } from "./pagination/ListRegistriesPaginator";
import { paginateListSchemas } from "./pagination/ListSchemasPaginator";
import { paginateListSchemaVersions } from "./pagination/ListSchemaVersionsPaginator";
import { paginateSearchSchemas } from "./pagination/SearchSchemasPaginator";
import { SchemasClient } from "./SchemasClient";
import { waitUntilCodeBindingExists } from "./waiters/waitForCodeBindingExists";

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
const paginators = {
  paginateListDiscoverers,
  paginateListRegistries,
  paginateListSchemas,
  paginateListSchemaVersions,
  paginateSearchSchemas,
};
const waiters = {
  waitUntilCodeBindingExists,
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
  createRegistry(
    args: CreateRegistryCommandInput,
    cb: (err: any, data?: CreateRegistryCommandOutput) => void
  ): void;
  createRegistry(
    args: CreateRegistryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRegistryCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSchemaCommand}
   */
  createSchema(
    args: CreateSchemaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSchemaCommandOutput>;
  createSchema(
    args: CreateSchemaCommandInput,
    cb: (err: any, data?: CreateSchemaCommandOutput) => void
  ): void;
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
  deleteRegistry(
    args: DeleteRegistryCommandInput,
    cb: (err: any, data?: DeleteRegistryCommandOutput) => void
  ): void;
  deleteRegistry(
    args: DeleteRegistryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRegistryCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResourcePolicyCommand}
   */
  deleteResourcePolicy(): Promise<DeleteResourcePolicyCommandOutput>;
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
  deleteSchema(
    args: DeleteSchemaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSchemaCommandOutput>;
  deleteSchema(
    args: DeleteSchemaCommandInput,
    cb: (err: any, data?: DeleteSchemaCommandOutput) => void
  ): void;
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
  describeSchema(
    args: DescribeSchemaCommandInput,
    cb: (err: any, data?: DescribeSchemaCommandOutput) => void
  ): void;
  describeSchema(
    args: DescribeSchemaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSchemaCommandOutput) => void
  ): void;

  /**
   * @see {@link ExportSchemaCommand}
   */
  exportSchema(
    args: ExportSchemaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExportSchemaCommandOutput>;
  exportSchema(
    args: ExportSchemaCommandInput,
    cb: (err: any, data?: ExportSchemaCommandOutput) => void
  ): void;
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
  getResourcePolicy(): Promise<GetResourcePolicyCommandOutput>;
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
  listDiscoverers(): Promise<ListDiscoverersCommandOutput>;
  listDiscoverers(
    args: ListDiscoverersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDiscoverersCommandOutput>;
  listDiscoverers(
    args: ListDiscoverersCommandInput,
    cb: (err: any, data?: ListDiscoverersCommandOutput) => void
  ): void;
  listDiscoverers(
    args: ListDiscoverersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDiscoverersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRegistriesCommand}
   */
  listRegistries(): Promise<ListRegistriesCommandOutput>;
  listRegistries(
    args: ListRegistriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRegistriesCommandOutput>;
  listRegistries(
    args: ListRegistriesCommandInput,
    cb: (err: any, data?: ListRegistriesCommandOutput) => void
  ): void;
  listRegistries(
    args: ListRegistriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRegistriesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSchemasCommand}
   */
  listSchemas(
    args: ListSchemasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSchemasCommandOutput>;
  listSchemas(
    args: ListSchemasCommandInput,
    cb: (err: any, data?: ListSchemasCommandOutput) => void
  ): void;
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
  putCodeBinding(
    args: PutCodeBindingCommandInput,
    cb: (err: any, data?: PutCodeBindingCommandOutput) => void
  ): void;
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
  searchSchemas(
    args: SearchSchemasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchSchemasCommandOutput>;
  searchSchemas(
    args: SearchSchemasCommandInput,
    cb: (err: any, data?: SearchSchemasCommandOutput) => void
  ): void;
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
  startDiscoverer(
    args: StartDiscovererCommandInput,
    cb: (err: any, data?: StartDiscovererCommandOutput) => void
  ): void;
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
  stopDiscoverer(
    args: StopDiscovererCommandInput,
    cb: (err: any, data?: StopDiscovererCommandOutput) => void
  ): void;
  stopDiscoverer(
    args: StopDiscovererCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopDiscovererCommandOutput) => void
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
  updateRegistry(
    args: UpdateRegistryCommandInput,
    cb: (err: any, data?: UpdateRegistryCommandOutput) => void
  ): void;
  updateRegistry(
    args: UpdateRegistryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRegistryCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSchemaCommand}
   */
  updateSchema(
    args: UpdateSchemaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSchemaCommandOutput>;
  updateSchema(
    args: UpdateSchemaCommandInput,
    cb: (err: any, data?: UpdateSchemaCommandOutput) => void
  ): void;
  updateSchema(
    args: UpdateSchemaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSchemaCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDiscoverersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDiscoverersCommandOutput}.
   */
  paginateListDiscoverers(
    args?: ListDiscoverersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDiscoverersCommandOutput>;

  /**
   * @see {@link ListRegistriesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRegistriesCommandOutput}.
   */
  paginateListRegistries(
    args?: ListRegistriesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRegistriesCommandOutput>;

  /**
   * @see {@link ListSchemasCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSchemasCommandOutput}.
   */
  paginateListSchemas(
    args: ListSchemasCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSchemasCommandOutput>;

  /**
   * @see {@link ListSchemaVersionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSchemaVersionsCommandOutput}.
   */
  paginateListSchemaVersions(
    args: ListSchemaVersionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSchemaVersionsCommandOutput>;

  /**
   * @see {@link SearchSchemasCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchSchemasCommandOutput}.
   */
  paginateSearchSchemas(
    args: SearchSchemasCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchSchemasCommandOutput>;

  /**
   * @see {@link DescribeCodeBindingCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilCodeBindingExists(
    args: DescribeCodeBindingCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<Schemas>, "client">
  ): Promise<WaiterResult>;
}

/**
 * <p>Amazon EventBridge Schema Registry</p>
 * @public
 */
export class Schemas extends SchemasClient implements Schemas {}
createAggregatedClient(commands, Schemas, { paginators, waiters });
