// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import {
  type CreateEndpointCommandInput,
  type CreateEndpointCommandOutput,
  CreateEndpointCommand,
} from "./commands/CreateEndpointCommand";
import {
  type DeleteEndpointCommandInput,
  type DeleteEndpointCommandOutput,
  DeleteEndpointCommand,
} from "./commands/DeleteEndpointCommand";
import {
  type ListEndpointsCommandInput,
  type ListEndpointsCommandOutput,
  ListEndpointsCommand,
} from "./commands/ListEndpointsCommand";
import {
  type ListOutpostsWithS3CommandInput,
  type ListOutpostsWithS3CommandOutput,
  ListOutpostsWithS3Command,
} from "./commands/ListOutpostsWithS3Command";
import {
  type ListSharedEndpointsCommandInput,
  type ListSharedEndpointsCommandOutput,
  ListSharedEndpointsCommand,
} from "./commands/ListSharedEndpointsCommand";
import { paginateListEndpoints } from "./pagination/ListEndpointsPaginator";
import { paginateListOutpostsWithS3 } from "./pagination/ListOutpostsWithS3Paginator";
import { paginateListSharedEndpoints } from "./pagination/ListSharedEndpointsPaginator";
import { S3OutpostsClient } from "./S3OutpostsClient";

const commands = {
  CreateEndpointCommand,
  DeleteEndpointCommand,
  ListEndpointsCommand,
  ListOutpostsWithS3Command,
  ListSharedEndpointsCommand,
};
const paginators = {
  paginateListEndpoints,
  paginateListOutpostsWithS3,
  paginateListSharedEndpoints,
};

/**
 * @public
 */
export interface S3OutpostsRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface S3Outposts {
  /**
   * @see {@link CreateEndpointCommand}
   */
  createEndpoint(
    args: CreateEndpointCommandInput,
    options?: S3OutpostsRequestOptions
  ): Promise<CreateEndpointCommandOutput>;
  createEndpoint(
    args: CreateEndpointCommandInput,
    cb: (err: any, data?: CreateEndpointCommandOutput) => void
  ): void;
  createEndpoint(
    args: CreateEndpointCommandInput,
    options: S3OutpostsRequestOptions,
    cb: (err: any, data?: CreateEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEndpointCommand}
   */
  deleteEndpoint(
    args: DeleteEndpointCommandInput,
    options?: S3OutpostsRequestOptions
  ): Promise<DeleteEndpointCommandOutput>;
  deleteEndpoint(
    args: DeleteEndpointCommandInput,
    cb: (err: any, data?: DeleteEndpointCommandOutput) => void
  ): void;
  deleteEndpoint(
    args: DeleteEndpointCommandInput,
    options: S3OutpostsRequestOptions,
    cb: (err: any, data?: DeleteEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEndpointsCommand}
   */
  listEndpoints(): Promise<ListEndpointsCommandOutput>;
  listEndpoints(
    args: ListEndpointsCommandInput,
    options?: S3OutpostsRequestOptions
  ): Promise<ListEndpointsCommandOutput>;
  listEndpoints(
    args: ListEndpointsCommandInput,
    cb: (err: any, data?: ListEndpointsCommandOutput) => void
  ): void;
  listEndpoints(
    args: ListEndpointsCommandInput,
    options: S3OutpostsRequestOptions,
    cb: (err: any, data?: ListEndpointsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListOutpostsWithS3Command}
   */
  listOutpostsWithS3(): Promise<ListOutpostsWithS3CommandOutput>;
  listOutpostsWithS3(
    args: ListOutpostsWithS3CommandInput,
    options?: S3OutpostsRequestOptions
  ): Promise<ListOutpostsWithS3CommandOutput>;
  listOutpostsWithS3(
    args: ListOutpostsWithS3CommandInput,
    cb: (err: any, data?: ListOutpostsWithS3CommandOutput) => void
  ): void;
  listOutpostsWithS3(
    args: ListOutpostsWithS3CommandInput,
    options: S3OutpostsRequestOptions,
    cb: (err: any, data?: ListOutpostsWithS3CommandOutput) => void
  ): void;

  /**
   * @see {@link ListSharedEndpointsCommand}
   */
  listSharedEndpoints(
    args: ListSharedEndpointsCommandInput,
    options?: S3OutpostsRequestOptions
  ): Promise<ListSharedEndpointsCommandOutput>;
  listSharedEndpoints(
    args: ListSharedEndpointsCommandInput,
    cb: (err: any, data?: ListSharedEndpointsCommandOutput) => void
  ): void;
  listSharedEndpoints(
    args: ListSharedEndpointsCommandInput,
    options: S3OutpostsRequestOptions,
    cb: (err: any, data?: ListSharedEndpointsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEndpointsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListEndpointsCommandOutput}.
   */
  paginateListEndpoints(
    args?: ListEndpointsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListEndpointsCommandOutput>;

  /**
   * @see {@link ListOutpostsWithS3Command}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListOutpostsWithS3CommandOutput}.
   */
  paginateListOutpostsWithS3(
    args?: ListOutpostsWithS3CommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListOutpostsWithS3CommandOutput>;

  /**
   * @see {@link ListSharedEndpointsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSharedEndpointsCommandOutput}.
   */
  paginateListSharedEndpoints(
    args: ListSharedEndpointsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSharedEndpointsCommandOutput>;
}

/**
 * <p>Amazon S3 on Outposts provides access to S3 on Outposts operations.</p>
 * @public
 */
export class S3Outposts extends S3OutpostsClient implements S3Outposts {}
createAggregatedClient(commands, S3Outposts, { paginators });
