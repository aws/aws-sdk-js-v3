// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  CreateEndpointCommand,
  CreateEndpointCommandInput,
  CreateEndpointCommandOutput,
} from "./commands/CreateEndpointCommand";
import {
  DeleteEndpointCommand,
  DeleteEndpointCommandInput,
  DeleteEndpointCommandOutput,
} from "./commands/DeleteEndpointCommand";
import {
  ListEndpointsCommand,
  ListEndpointsCommandInput,
  ListEndpointsCommandOutput,
} from "./commands/ListEndpointsCommand";
import {
  ListOutpostsWithS3Command,
  ListOutpostsWithS3CommandInput,
  ListOutpostsWithS3CommandOutput,
} from "./commands/ListOutpostsWithS3Command";
import {
  ListSharedEndpointsCommand,
  ListSharedEndpointsCommandInput,
  ListSharedEndpointsCommandOutput,
} from "./commands/ListSharedEndpointsCommand";
import { S3OutpostsClient, S3OutpostsClientConfig } from "./S3OutpostsClient";

const commands = {
  CreateEndpointCommand,
  DeleteEndpointCommand,
  ListEndpointsCommand,
  ListOutpostsWithS3Command,
  ListSharedEndpointsCommand,
};

export interface S3Outposts {
  /**
   * @see {@link CreateEndpointCommand}
   */
  createEndpoint(
    args: CreateEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEndpointCommandOutput>;
  createEndpoint(args: CreateEndpointCommandInput, cb: (err: any, data?: CreateEndpointCommandOutput) => void): void;
  createEndpoint(
    args: CreateEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEndpointCommand}
   */
  deleteEndpoint(
    args: DeleteEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEndpointCommandOutput>;
  deleteEndpoint(args: DeleteEndpointCommandInput, cb: (err: any, data?: DeleteEndpointCommandOutput) => void): void;
  deleteEndpoint(
    args: DeleteEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEndpointsCommand}
   */
  listEndpoints(args: ListEndpointsCommandInput, options?: __HttpHandlerOptions): Promise<ListEndpointsCommandOutput>;
  listEndpoints(args: ListEndpointsCommandInput, cb: (err: any, data?: ListEndpointsCommandOutput) => void): void;
  listEndpoints(
    args: ListEndpointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEndpointsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListOutpostsWithS3Command}
   */
  listOutpostsWithS3(
    args: ListOutpostsWithS3CommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOutpostsWithS3CommandOutput>;
  listOutpostsWithS3(
    args: ListOutpostsWithS3CommandInput,
    cb: (err: any, data?: ListOutpostsWithS3CommandOutput) => void
  ): void;
  listOutpostsWithS3(
    args: ListOutpostsWithS3CommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOutpostsWithS3CommandOutput) => void
  ): void;

  /**
   * @see {@link ListSharedEndpointsCommand}
   */
  listSharedEndpoints(
    args: ListSharedEndpointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSharedEndpointsCommandOutput>;
  listSharedEndpoints(
    args: ListSharedEndpointsCommandInput,
    cb: (err: any, data?: ListSharedEndpointsCommandOutput) => void
  ): void;
  listSharedEndpoints(
    args: ListSharedEndpointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSharedEndpointsCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>Amazon S3 on Outposts provides access to S3 on Outposts operations.</p>
 */
export class S3Outposts extends S3OutpostsClient implements S3Outposts {}
createAggregatedClient(commands, S3Outposts);
