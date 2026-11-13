// smithy-typescript generated code
import { type WaiterResult, createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
  WaiterConfiguration,
} from "@smithy/types";

import {
  type CreateNetworkConnectorCommandInput,
  type CreateNetworkConnectorCommandOutput,
  CreateNetworkConnectorCommand,
} from "./commands/CreateNetworkConnectorCommand";
import {
  type CreateRuntimeAliasCommandInput,
  type CreateRuntimeAliasCommandOutput,
  CreateRuntimeAliasCommand,
} from "./commands/CreateRuntimeAliasCommand";
import {
  type CreateRuntimeCommandInput,
  type CreateRuntimeCommandOutput,
  CreateRuntimeCommand,
} from "./commands/CreateRuntimeCommand";
import {
  type CreateRuntimeVersionCommandInput,
  type CreateRuntimeVersionCommandOutput,
  CreateRuntimeVersionCommand,
} from "./commands/CreateRuntimeVersionCommand";
import {
  type DeleteNetworkConnectorCommandInput,
  type DeleteNetworkConnectorCommandOutput,
  DeleteNetworkConnectorCommand,
} from "./commands/DeleteNetworkConnectorCommand";
import {
  type DeleteRuntimeAliasCommandInput,
  type DeleteRuntimeAliasCommandOutput,
  DeleteRuntimeAliasCommand,
} from "./commands/DeleteRuntimeAliasCommand";
import {
  type DeleteRuntimeCommandInput,
  type DeleteRuntimeCommandOutput,
  DeleteRuntimeCommand,
} from "./commands/DeleteRuntimeCommand";
import {
  type DeleteRuntimeVersionCommandInput,
  type DeleteRuntimeVersionCommandOutput,
  DeleteRuntimeVersionCommand,
} from "./commands/DeleteRuntimeVersionCommand";
import {
  type GetNetworkConnectorCommandInput,
  type GetNetworkConnectorCommandOutput,
  GetNetworkConnectorCommand,
} from "./commands/GetNetworkConnectorCommand";
import {
  type GetRuntimeAliasCommandInput,
  type GetRuntimeAliasCommandOutput,
  GetRuntimeAliasCommand,
} from "./commands/GetRuntimeAliasCommand";
import {
  type GetRuntimeCommandInput,
  type GetRuntimeCommandOutput,
  GetRuntimeCommand,
} from "./commands/GetRuntimeCommand";
import {
  type GetRuntimeVersionCommandInput,
  type GetRuntimeVersionCommandOutput,
  GetRuntimeVersionCommand,
} from "./commands/GetRuntimeVersionCommand";
import {
  type ListNetworkConnectorsCommandInput,
  type ListNetworkConnectorsCommandOutput,
  ListNetworkConnectorsCommand,
} from "./commands/ListNetworkConnectorsCommand";
import {
  type ListNetworkConnectorVersionsCommandInput,
  type ListNetworkConnectorVersionsCommandOutput,
  ListNetworkConnectorVersionsCommand,
} from "./commands/ListNetworkConnectorVersionsCommand";
import {
  type ListRuntimeAliasesCommandInput,
  type ListRuntimeAliasesCommandOutput,
  ListRuntimeAliasesCommand,
} from "./commands/ListRuntimeAliasesCommand";
import {
  type ListRuntimesCommandInput,
  type ListRuntimesCommandOutput,
  ListRuntimesCommand,
} from "./commands/ListRuntimesCommand";
import {
  type ListRuntimeVersionsCommandInput,
  type ListRuntimeVersionsCommandOutput,
  ListRuntimeVersionsCommand,
} from "./commands/ListRuntimeVersionsCommand";
import {
  type RestoreRuntimeCommandInput,
  type RestoreRuntimeCommandOutput,
  RestoreRuntimeCommand,
} from "./commands/RestoreRuntimeCommand";
import {
  type UpdateNetworkConnectorCommandInput,
  type UpdateNetworkConnectorCommandOutput,
  UpdateNetworkConnectorCommand,
} from "./commands/UpdateNetworkConnectorCommand";
import {
  type UpdateRuntimeAliasCommandInput,
  type UpdateRuntimeAliasCommandOutput,
  UpdateRuntimeAliasCommand,
} from "./commands/UpdateRuntimeAliasCommand";
import {
  type UpdateRuntimeCommandInput,
  type UpdateRuntimeCommandOutput,
  UpdateRuntimeCommand,
} from "./commands/UpdateRuntimeCommand";
import {
  type UpdateRuntimeVersionCommandInput,
  type UpdateRuntimeVersionCommandOutput,
  UpdateRuntimeVersionCommand,
} from "./commands/UpdateRuntimeVersionCommand";
import { LambdaCoreClient } from "./LambdaCoreClient";
import type { LambdaCoreServiceException } from "./models/LambdaCoreServiceException";
import { paginateListNetworkConnectors } from "./pagination/ListNetworkConnectorsPaginator";
import { paginateListNetworkConnectorVersions } from "./pagination/ListNetworkConnectorVersionsPaginator";
import { paginateListRuntimeAliases } from "./pagination/ListRuntimeAliasesPaginator";
import { paginateListRuntimes } from "./pagination/ListRuntimesPaginator";
import { paginateListRuntimeVersions } from "./pagination/ListRuntimeVersionsPaginator";
import { waitUntilRuntimeAliasActive } from "./waiters/waitForRuntimeAliasActive";
import { waitUntilRuntimeVersionActive } from "./waiters/waitForRuntimeVersionActive";

const commands = {
  CreateNetworkConnectorCommand,
  CreateRuntimeCommand,
  CreateRuntimeAliasCommand,
  CreateRuntimeVersionCommand,
  DeleteNetworkConnectorCommand,
  DeleteRuntimeCommand,
  DeleteRuntimeAliasCommand,
  DeleteRuntimeVersionCommand,
  GetNetworkConnectorCommand,
  GetRuntimeCommand,
  GetRuntimeAliasCommand,
  GetRuntimeVersionCommand,
  ListNetworkConnectorsCommand,
  ListNetworkConnectorVersionsCommand,
  ListRuntimeAliasesCommand,
  ListRuntimesCommand,
  ListRuntimeVersionsCommand,
  RestoreRuntimeCommand,
  UpdateNetworkConnectorCommand,
  UpdateRuntimeCommand,
  UpdateRuntimeAliasCommand,
  UpdateRuntimeVersionCommand,
};
const paginators = {
  paginateListNetworkConnectors,
  paginateListNetworkConnectorVersions,
  paginateListRuntimeAliases,
  paginateListRuntimes,
  paginateListRuntimeVersions,
};
const waiters = {
  waitUntilRuntimeAliasActive,
  waitUntilRuntimeVersionActive,
};

/**
 * @public
 */
export interface LambdaCoreRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface LambdaCore {
  /**
   * @see {@link CreateNetworkConnectorCommand}
   */
  createNetworkConnector(
    args: CreateNetworkConnectorCommandInput,
    options?: LambdaCoreRequestOptions
  ): Promise<CreateNetworkConnectorCommandOutput>;
  createNetworkConnector(
    args: CreateNetworkConnectorCommandInput,
    cb: (err: any, data?: CreateNetworkConnectorCommandOutput) => void
  ): void;
  createNetworkConnector(
    args: CreateNetworkConnectorCommandInput,
    options: LambdaCoreRequestOptions,
    cb: (err: any, data?: CreateNetworkConnectorCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRuntimeCommand}
   */
  createRuntime(
    args: CreateRuntimeCommandInput,
    options?: LambdaCoreRequestOptions
  ): Promise<CreateRuntimeCommandOutput>;
  createRuntime(
    args: CreateRuntimeCommandInput,
    cb: (err: any, data?: CreateRuntimeCommandOutput) => void
  ): void;
  createRuntime(
    args: CreateRuntimeCommandInput,
    options: LambdaCoreRequestOptions,
    cb: (err: any, data?: CreateRuntimeCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRuntimeAliasCommand}
   */
  createRuntimeAlias(
    args: CreateRuntimeAliasCommandInput,
    options?: LambdaCoreRequestOptions
  ): Promise<CreateRuntimeAliasCommandOutput>;
  createRuntimeAlias(
    args: CreateRuntimeAliasCommandInput,
    cb: (err: any, data?: CreateRuntimeAliasCommandOutput) => void
  ): void;
  createRuntimeAlias(
    args: CreateRuntimeAliasCommandInput,
    options: LambdaCoreRequestOptions,
    cb: (err: any, data?: CreateRuntimeAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRuntimeVersionCommand}
   */
  createRuntimeVersion(
    args: CreateRuntimeVersionCommandInput,
    options?: LambdaCoreRequestOptions
  ): Promise<CreateRuntimeVersionCommandOutput>;
  createRuntimeVersion(
    args: CreateRuntimeVersionCommandInput,
    cb: (err: any, data?: CreateRuntimeVersionCommandOutput) => void
  ): void;
  createRuntimeVersion(
    args: CreateRuntimeVersionCommandInput,
    options: LambdaCoreRequestOptions,
    cb: (err: any, data?: CreateRuntimeVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteNetworkConnectorCommand}
   */
  deleteNetworkConnector(
    args: DeleteNetworkConnectorCommandInput,
    options?: LambdaCoreRequestOptions
  ): Promise<DeleteNetworkConnectorCommandOutput>;
  deleteNetworkConnector(
    args: DeleteNetworkConnectorCommandInput,
    cb: (err: any, data?: DeleteNetworkConnectorCommandOutput) => void
  ): void;
  deleteNetworkConnector(
    args: DeleteNetworkConnectorCommandInput,
    options: LambdaCoreRequestOptions,
    cb: (err: any, data?: DeleteNetworkConnectorCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRuntimeCommand}
   */
  deleteRuntime(
    args: DeleteRuntimeCommandInput,
    options?: LambdaCoreRequestOptions
  ): Promise<DeleteRuntimeCommandOutput>;
  deleteRuntime(
    args: DeleteRuntimeCommandInput,
    cb: (err: any, data?: DeleteRuntimeCommandOutput) => void
  ): void;
  deleteRuntime(
    args: DeleteRuntimeCommandInput,
    options: LambdaCoreRequestOptions,
    cb: (err: any, data?: DeleteRuntimeCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRuntimeAliasCommand}
   */
  deleteRuntimeAlias(
    args: DeleteRuntimeAliasCommandInput,
    options?: LambdaCoreRequestOptions
  ): Promise<DeleteRuntimeAliasCommandOutput>;
  deleteRuntimeAlias(
    args: DeleteRuntimeAliasCommandInput,
    cb: (err: any, data?: DeleteRuntimeAliasCommandOutput) => void
  ): void;
  deleteRuntimeAlias(
    args: DeleteRuntimeAliasCommandInput,
    options: LambdaCoreRequestOptions,
    cb: (err: any, data?: DeleteRuntimeAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRuntimeVersionCommand}
   */
  deleteRuntimeVersion(
    args: DeleteRuntimeVersionCommandInput,
    options?: LambdaCoreRequestOptions
  ): Promise<DeleteRuntimeVersionCommandOutput>;
  deleteRuntimeVersion(
    args: DeleteRuntimeVersionCommandInput,
    cb: (err: any, data?: DeleteRuntimeVersionCommandOutput) => void
  ): void;
  deleteRuntimeVersion(
    args: DeleteRuntimeVersionCommandInput,
    options: LambdaCoreRequestOptions,
    cb: (err: any, data?: DeleteRuntimeVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetNetworkConnectorCommand}
   */
  getNetworkConnector(
    args: GetNetworkConnectorCommandInput,
    options?: LambdaCoreRequestOptions
  ): Promise<GetNetworkConnectorCommandOutput>;
  getNetworkConnector(
    args: GetNetworkConnectorCommandInput,
    cb: (err: any, data?: GetNetworkConnectorCommandOutput) => void
  ): void;
  getNetworkConnector(
    args: GetNetworkConnectorCommandInput,
    options: LambdaCoreRequestOptions,
    cb: (err: any, data?: GetNetworkConnectorCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRuntimeCommand}
   */
  getRuntime(
    args: GetRuntimeCommandInput,
    options?: LambdaCoreRequestOptions
  ): Promise<GetRuntimeCommandOutput>;
  getRuntime(
    args: GetRuntimeCommandInput,
    cb: (err: any, data?: GetRuntimeCommandOutput) => void
  ): void;
  getRuntime(
    args: GetRuntimeCommandInput,
    options: LambdaCoreRequestOptions,
    cb: (err: any, data?: GetRuntimeCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRuntimeAliasCommand}
   */
  getRuntimeAlias(
    args: GetRuntimeAliasCommandInput,
    options?: LambdaCoreRequestOptions
  ): Promise<GetRuntimeAliasCommandOutput>;
  getRuntimeAlias(
    args: GetRuntimeAliasCommandInput,
    cb: (err: any, data?: GetRuntimeAliasCommandOutput) => void
  ): void;
  getRuntimeAlias(
    args: GetRuntimeAliasCommandInput,
    options: LambdaCoreRequestOptions,
    cb: (err: any, data?: GetRuntimeAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRuntimeVersionCommand}
   */
  getRuntimeVersion(
    args: GetRuntimeVersionCommandInput,
    options?: LambdaCoreRequestOptions
  ): Promise<GetRuntimeVersionCommandOutput>;
  getRuntimeVersion(
    args: GetRuntimeVersionCommandInput,
    cb: (err: any, data?: GetRuntimeVersionCommandOutput) => void
  ): void;
  getRuntimeVersion(
    args: GetRuntimeVersionCommandInput,
    options: LambdaCoreRequestOptions,
    cb: (err: any, data?: GetRuntimeVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link ListNetworkConnectorsCommand}
   */
  listNetworkConnectors(): Promise<ListNetworkConnectorsCommandOutput>;
  listNetworkConnectors(
    args: ListNetworkConnectorsCommandInput,
    options?: LambdaCoreRequestOptions
  ): Promise<ListNetworkConnectorsCommandOutput>;
  listNetworkConnectors(
    args: ListNetworkConnectorsCommandInput,
    cb: (err: any, data?: ListNetworkConnectorsCommandOutput) => void
  ): void;
  listNetworkConnectors(
    args: ListNetworkConnectorsCommandInput,
    options: LambdaCoreRequestOptions,
    cb: (err: any, data?: ListNetworkConnectorsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListNetworkConnectorVersionsCommand}
   */
  listNetworkConnectorVersions(
    args: ListNetworkConnectorVersionsCommandInput,
    options?: LambdaCoreRequestOptions
  ): Promise<ListNetworkConnectorVersionsCommandOutput>;
  listNetworkConnectorVersions(
    args: ListNetworkConnectorVersionsCommandInput,
    cb: (err: any, data?: ListNetworkConnectorVersionsCommandOutput) => void
  ): void;
  listNetworkConnectorVersions(
    args: ListNetworkConnectorVersionsCommandInput,
    options: LambdaCoreRequestOptions,
    cb: (err: any, data?: ListNetworkConnectorVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRuntimeAliasesCommand}
   */
  listRuntimeAliases(
    args: ListRuntimeAliasesCommandInput,
    options?: LambdaCoreRequestOptions
  ): Promise<ListRuntimeAliasesCommandOutput>;
  listRuntimeAliases(
    args: ListRuntimeAliasesCommandInput,
    cb: (err: any, data?: ListRuntimeAliasesCommandOutput) => void
  ): void;
  listRuntimeAliases(
    args: ListRuntimeAliasesCommandInput,
    options: LambdaCoreRequestOptions,
    cb: (err: any, data?: ListRuntimeAliasesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRuntimesCommand}
   */
  listRuntimes(): Promise<ListRuntimesCommandOutput>;
  listRuntimes(
    args: ListRuntimesCommandInput,
    options?: LambdaCoreRequestOptions
  ): Promise<ListRuntimesCommandOutput>;
  listRuntimes(
    args: ListRuntimesCommandInput,
    cb: (err: any, data?: ListRuntimesCommandOutput) => void
  ): void;
  listRuntimes(
    args: ListRuntimesCommandInput,
    options: LambdaCoreRequestOptions,
    cb: (err: any, data?: ListRuntimesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRuntimeVersionsCommand}
   */
  listRuntimeVersions(
    args: ListRuntimeVersionsCommandInput,
    options?: LambdaCoreRequestOptions
  ): Promise<ListRuntimeVersionsCommandOutput>;
  listRuntimeVersions(
    args: ListRuntimeVersionsCommandInput,
    cb: (err: any, data?: ListRuntimeVersionsCommandOutput) => void
  ): void;
  listRuntimeVersions(
    args: ListRuntimeVersionsCommandInput,
    options: LambdaCoreRequestOptions,
    cb: (err: any, data?: ListRuntimeVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link RestoreRuntimeCommand}
   */
  restoreRuntime(
    args: RestoreRuntimeCommandInput,
    options?: LambdaCoreRequestOptions
  ): Promise<RestoreRuntimeCommandOutput>;
  restoreRuntime(
    args: RestoreRuntimeCommandInput,
    cb: (err: any, data?: RestoreRuntimeCommandOutput) => void
  ): void;
  restoreRuntime(
    args: RestoreRuntimeCommandInput,
    options: LambdaCoreRequestOptions,
    cb: (err: any, data?: RestoreRuntimeCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateNetworkConnectorCommand}
   */
  updateNetworkConnector(
    args: UpdateNetworkConnectorCommandInput,
    options?: LambdaCoreRequestOptions
  ): Promise<UpdateNetworkConnectorCommandOutput>;
  updateNetworkConnector(
    args: UpdateNetworkConnectorCommandInput,
    cb: (err: any, data?: UpdateNetworkConnectorCommandOutput) => void
  ): void;
  updateNetworkConnector(
    args: UpdateNetworkConnectorCommandInput,
    options: LambdaCoreRequestOptions,
    cb: (err: any, data?: UpdateNetworkConnectorCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRuntimeCommand}
   */
  updateRuntime(
    args: UpdateRuntimeCommandInput,
    options?: LambdaCoreRequestOptions
  ): Promise<UpdateRuntimeCommandOutput>;
  updateRuntime(
    args: UpdateRuntimeCommandInput,
    cb: (err: any, data?: UpdateRuntimeCommandOutput) => void
  ): void;
  updateRuntime(
    args: UpdateRuntimeCommandInput,
    options: LambdaCoreRequestOptions,
    cb: (err: any, data?: UpdateRuntimeCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRuntimeAliasCommand}
   */
  updateRuntimeAlias(
    args: UpdateRuntimeAliasCommandInput,
    options?: LambdaCoreRequestOptions
  ): Promise<UpdateRuntimeAliasCommandOutput>;
  updateRuntimeAlias(
    args: UpdateRuntimeAliasCommandInput,
    cb: (err: any, data?: UpdateRuntimeAliasCommandOutput) => void
  ): void;
  updateRuntimeAlias(
    args: UpdateRuntimeAliasCommandInput,
    options: LambdaCoreRequestOptions,
    cb: (err: any, data?: UpdateRuntimeAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRuntimeVersionCommand}
   */
  updateRuntimeVersion(
    args: UpdateRuntimeVersionCommandInput,
    options?: LambdaCoreRequestOptions
  ): Promise<UpdateRuntimeVersionCommandOutput>;
  updateRuntimeVersion(
    args: UpdateRuntimeVersionCommandInput,
    cb: (err: any, data?: UpdateRuntimeVersionCommandOutput) => void
  ): void;
  updateRuntimeVersion(
    args: UpdateRuntimeVersionCommandInput,
    options: LambdaCoreRequestOptions,
    cb: (err: any, data?: UpdateRuntimeVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link ListNetworkConnectorsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListNetworkConnectorsCommandOutput}.
   */
  paginateListNetworkConnectors(
    args?: ListNetworkConnectorsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListNetworkConnectorsCommandOutput>;

  /**
   * @see {@link ListNetworkConnectorVersionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListNetworkConnectorVersionsCommandOutput}.
   */
  paginateListNetworkConnectorVersions(
    args: ListNetworkConnectorVersionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListNetworkConnectorVersionsCommandOutput>;

  /**
   * @see {@link ListRuntimeAliasesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRuntimeAliasesCommandOutput}.
   */
  paginateListRuntimeAliases(
    args: ListRuntimeAliasesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRuntimeAliasesCommandOutput>;

  /**
   * @see {@link ListRuntimesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRuntimesCommandOutput}.
   */
  paginateListRuntimes(
    args?: ListRuntimesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRuntimesCommandOutput>;

  /**
   * @see {@link ListRuntimeVersionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRuntimeVersionsCommandOutput}.
   */
  paginateListRuntimeVersions(
    args: ListRuntimeVersionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRuntimeVersionsCommandOutput>;

  /**
   * @see {@link GetRuntimeAliasCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilRuntimeAliasActive(
    args: GetRuntimeAliasCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<LambdaCore>, "client">
  ): Promise<WaiterResult<GetRuntimeAliasCommandOutput>>;

  /**
   * @see {@link GetRuntimeVersionCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilRuntimeVersionActive(
    args: GetRuntimeVersionCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<LambdaCore>, "client">
  ): Promise<WaiterResult<GetRuntimeVersionCommandOutput>>;
}

/**
 * <fullname>Lambda</fullname> <p> <b>Overview</b> </p> <p>Lambda Core is a set of APIs for managing shared infrastructure resources used by Lambda. The Lambda Core API provides operations for:</p> <ol> <li> <p>Creating and managing network connectors that enable Lambda MicroVMs and Lambda Web Functions to access resources in your Amazon Virtual Private Cloud (Amazon VPC).</p> </li> <li> <p>Creating customer-managed runtimes which can be used with Lambda Event Functions.</p> </li> </ol> <p>Network connectors provision elastic network interfaces (ENIs) in your VPC subnets, providing a managed network path from Lambda compute environments to private resources such as Amazon RDS databases, Amazon ElastiCache clusters, and internal APIs. You create a network connector once and attach it to one or more Lambda MicroVMs or Lambda Web Functions at run time.</p> <p>A customer-managed runtime is a Lambda runtime that you create and manage as a standalone resource. Lambda Event Functions can use your customer-managed runtime instead of using one of the built-in Lambda-managed runtimes. Customer-managed runtimes enable you to create customized runtimes for your workloads, and give you control over runtime updates and the deprecation lifecycle.</p> <p>The <i>Lambda Core API Reference</i> provides information about each of the API methods, including details about the parameters in each API request and response.</p> <p>You can use Software Development Kits (SDKs), Integrated Development Environment (IDE) Toolkits, and command line tools to access the API. For installation instructions, see <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a>.</p> <p>For a list of Region-specific endpoints that Lambda supports, see <a href="https://docs.aws.amazon.com/general/latest/gr/lambda-service.html">Lambda endpoints and quotas</a> in the <i>Amazon Web Services General Reference.</i> </p> <p>When making the API calls, you will need to authenticate your request by providing a signature. Lambda supports signature version 4. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 signing process</a> in the <i>Amazon Web Services General Reference.</i> </p>
 * @public
 */
export class LambdaCore extends LambdaCoreClient implements LambdaCore {}
createAggregatedClient(commands, LambdaCore, { paginators, waiters });
