// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

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
  type UpdateNetworkConnectorCommandInput,
  type UpdateNetworkConnectorCommandOutput,
  UpdateNetworkConnectorCommand,
} from "./commands/UpdateNetworkConnectorCommand";
import { LambdaCoreClient } from "./LambdaCoreClient";
import { paginateListNetworkConnectors } from "./pagination/ListNetworkConnectorsPaginator";

const commands = {
  CreateNetworkConnectorCommand,
  DeleteNetworkConnectorCommand,
  GetNetworkConnectorCommand,
  ListNetworkConnectorsCommand,
  UpdateNetworkConnectorCommand,
};
const paginators = {
  paginateListNetworkConnectors,
};

export interface LambdaCore {
  /**
   * @see {@link CreateNetworkConnectorCommand}
   */
  createNetworkConnector(
    args: CreateNetworkConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateNetworkConnectorCommandOutput>;
  createNetworkConnector(
    args: CreateNetworkConnectorCommandInput,
    cb: (err: any, data?: CreateNetworkConnectorCommandOutput) => void
  ): void;
  createNetworkConnector(
    args: CreateNetworkConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateNetworkConnectorCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteNetworkConnectorCommand}
   */
  deleteNetworkConnector(
    args: DeleteNetworkConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteNetworkConnectorCommandOutput>;
  deleteNetworkConnector(
    args: DeleteNetworkConnectorCommandInput,
    cb: (err: any, data?: DeleteNetworkConnectorCommandOutput) => void
  ): void;
  deleteNetworkConnector(
    args: DeleteNetworkConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteNetworkConnectorCommandOutput) => void
  ): void;

  /**
   * @see {@link GetNetworkConnectorCommand}
   */
  getNetworkConnector(
    args: GetNetworkConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetNetworkConnectorCommandOutput>;
  getNetworkConnector(
    args: GetNetworkConnectorCommandInput,
    cb: (err: any, data?: GetNetworkConnectorCommandOutput) => void
  ): void;
  getNetworkConnector(
    args: GetNetworkConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetNetworkConnectorCommandOutput) => void
  ): void;

  /**
   * @see {@link ListNetworkConnectorsCommand}
   */
  listNetworkConnectors(): Promise<ListNetworkConnectorsCommandOutput>;
  listNetworkConnectors(
    args: ListNetworkConnectorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListNetworkConnectorsCommandOutput>;
  listNetworkConnectors(
    args: ListNetworkConnectorsCommandInput,
    cb: (err: any, data?: ListNetworkConnectorsCommandOutput) => void
  ): void;
  listNetworkConnectors(
    args: ListNetworkConnectorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNetworkConnectorsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateNetworkConnectorCommand}
   */
  updateNetworkConnector(
    args: UpdateNetworkConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateNetworkConnectorCommandOutput>;
  updateNetworkConnector(
    args: UpdateNetworkConnectorCommandInput,
    cb: (err: any, data?: UpdateNetworkConnectorCommandOutput) => void
  ): void;
  updateNetworkConnector(
    args: UpdateNetworkConnectorCommandInput,
    options: __HttpHandlerOptions,
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
}

/**
 * <p>AWS Lambda Core is a set of APIs for managing shared infrastructure resources used by AWS Lambda. The Lambda Core API provides operations for creating and managing network connectors that enable Lambda MicroVMs to access resources in your Amazon Virtual Private Cloud (Amazon VPC).</p> <p>Network connectors provision elastic network interfaces (ENIs) in your VPC subnets, providing a managed network path from Lambda compute environments to private resources such as Amazon RDS databases, Amazon ElastiCache clusters, and internal APIs. You create a network connector once and attach it to one or more Lambda MicroVMs at run time.</p>
 * @public
 */
export class LambdaCore extends LambdaCoreClient implements LambdaCore {}
createAggregatedClient(commands, LambdaCore, { paginators });
