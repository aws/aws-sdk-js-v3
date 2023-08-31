// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  InvokeEndpointAsyncCommand,
  InvokeEndpointAsyncCommandInput,
  InvokeEndpointAsyncCommandOutput,
} from "./commands/InvokeEndpointAsyncCommand";
import {
  InvokeEndpointCommand,
  InvokeEndpointCommandInput,
  InvokeEndpointCommandOutput,
} from "./commands/InvokeEndpointCommand";
import {
  InvokeEndpointWithResponseStreamCommand,
  InvokeEndpointWithResponseStreamCommandInput,
  InvokeEndpointWithResponseStreamCommandOutput,
} from "./commands/InvokeEndpointWithResponseStreamCommand";
import { SageMakerRuntimeClient, SageMakerRuntimeClientConfig } from "./SageMakerRuntimeClient";

const commands = {
  InvokeEndpointCommand,
  InvokeEndpointAsyncCommand,
  InvokeEndpointWithResponseStreamCommand,
};

export interface SageMakerRuntime {
  /**
   * @see {@link InvokeEndpointCommand}
   */
  invokeEndpoint(
    args: InvokeEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<InvokeEndpointCommandOutput>;
  invokeEndpoint(args: InvokeEndpointCommandInput, cb: (err: any, data?: InvokeEndpointCommandOutput) => void): void;
  invokeEndpoint(
    args: InvokeEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InvokeEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link InvokeEndpointAsyncCommand}
   */
  invokeEndpointAsync(
    args: InvokeEndpointAsyncCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<InvokeEndpointAsyncCommandOutput>;
  invokeEndpointAsync(
    args: InvokeEndpointAsyncCommandInput,
    cb: (err: any, data?: InvokeEndpointAsyncCommandOutput) => void
  ): void;
  invokeEndpointAsync(
    args: InvokeEndpointAsyncCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InvokeEndpointAsyncCommandOutput) => void
  ): void;

  /**
   * @see {@link InvokeEndpointWithResponseStreamCommand}
   */
  invokeEndpointWithResponseStream(
    args: InvokeEndpointWithResponseStreamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<InvokeEndpointWithResponseStreamCommandOutput>;
  invokeEndpointWithResponseStream(
    args: InvokeEndpointWithResponseStreamCommandInput,
    cb: (err: any, data?: InvokeEndpointWithResponseStreamCommandOutput) => void
  ): void;
  invokeEndpointWithResponseStream(
    args: InvokeEndpointWithResponseStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InvokeEndpointWithResponseStreamCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p> The Amazon SageMaker runtime API. </p>
 */
export class SageMakerRuntime extends SageMakerRuntimeClient implements SageMakerRuntime {}
createAggregatedClient(commands, SageMakerRuntime);
