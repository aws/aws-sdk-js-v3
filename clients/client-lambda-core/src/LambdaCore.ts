// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import {
  type CreateNetworkConnectorCommandInput,
  type CreateNetworkConnectorCommandOutput,
  CreateNetworkConnectorCommand,
} from "./commands/CreateNetworkConnectorCommand";
import {
  type DeleteNetworkConnectorCommandInput,
  type DeleteNetworkConnectorCommandOutput,
  DeleteNetworkConnectorCommand,
} from "./commands/DeleteNetworkConnectorCommand";
import {
  type GetNetworkConnectorCommandInput,
  type GetNetworkConnectorCommandOutput,
  GetNetworkConnectorCommand,
} from "./commands/GetNetworkConnectorCommand";
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
  type UpdateNetworkConnectorCommandInput,
  type UpdateNetworkConnectorCommandOutput,
  UpdateNetworkConnectorCommand,
} from "./commands/UpdateNetworkConnectorCommand";
import { LambdaCoreClient } from "./LambdaCoreClient";
import { paginateListNetworkConnectors } from "./pagination/ListNetworkConnectorsPaginator";
import { paginateListNetworkConnectorVersions } from "./pagination/ListNetworkConnectorVersionsPaginator";

const commands = {
  CreateNetworkConnectorCommand,
  DeleteNetworkConnectorCommand,
  GetNetworkConnectorCommand,
  ListNetworkConnectorsCommand,
  ListNetworkConnectorVersionsCommand,
  UpdateNetworkConnectorCommand,
};
const paginators = {
  paginateListNetworkConnectors,
  paginateListNetworkConnectorVersions,
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
}

/**
 * Lambda
 *
 * **Overview**
 *
 * AWS Lambda Core is a set of APIs for managing shared infrastructure resources used by Lambda. The Lambda Core API provides operations for creating and managing network connectors that enable Lambda compute resources to access resources in your Amazon Virtual Private Cloud (Amazon VPC).
 *
 * Network connectors provision elastic network interfaces (ENIs) in your VPC subnets, providing a managed network path from Lambda compute environments to private resources such as Amazon RDS databases, Amazon ElastiCache clusters, and internal APIs. You create a network connector once and attach it to one or more Lambda compute resources at run time.
 *
 * The *Lambda Core API Reference* provides information about each of the API methods, including details about the parameters in each API request and response.
 *
 * You can use Software Development Kits (SDKs), Integrated Development Environment (IDE) Toolkits, and command line tools to access the API. For installation instructions, see [Tools for Amazon Web Services](http://aws.amazon.com/tools/).
 *
 * For a list of Region-specific endpoints that Lambda supports, see [Lambda endpoints and quotas](https://docs.aws.amazon.com/general/latest/gr/lambda-service.html) in the *Amazon Web Services General Reference.*
 *
 * When making the API calls, you will need to authenticate your request by providing a signature. Lambda supports signature version 4. For more information, see [Signature Version 4 signing process](https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html) in the *Amazon Web Services General Reference.*
 *
 * @public
 */
export class LambdaCore extends LambdaCoreClient implements LambdaCore {}
createAggregatedClient(commands, LambdaCore, { paginators });
