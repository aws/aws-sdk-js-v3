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
import { SageMakerRuntimeClient, SageMakerRuntimeClientConfig } from "./SageMakerRuntimeClient";

const commands = {
  InvokeEndpointCommand,
  InvokeEndpointAsyncCommand,
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
}

/**
 * @public
 * <p> The Amazon SageMaker runtime API. </p>
 */
export class SageMakerRuntime extends SageMakerRuntimeClient implements SageMakerRuntime {}
createAggregatedClient(commands, SageMakerRuntime);
