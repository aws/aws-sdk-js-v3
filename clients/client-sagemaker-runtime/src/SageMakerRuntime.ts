// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type { HttpHandlerOptions as __HttpHandlerOptions, MetricsRecorder as __MetricsRecorder } from "@smithy/types";

import {
  type InvokeEndpointAsyncCommandInput,
  type InvokeEndpointAsyncCommandOutput,
  InvokeEndpointAsyncCommand,
} from "./commands/InvokeEndpointAsyncCommand";
import {
  type InvokeEndpointCommandInput,
  type InvokeEndpointCommandOutput,
  InvokeEndpointCommand,
} from "./commands/InvokeEndpointCommand";
import {
  type InvokeEndpointWithResponseStreamCommandInput,
  type InvokeEndpointWithResponseStreamCommandOutput,
  InvokeEndpointWithResponseStreamCommand,
} from "./commands/InvokeEndpointWithResponseStreamCommand";
import { SageMakerRuntimeClient } from "./SageMakerRuntimeClient";

const commands = {
  InvokeEndpointCommand,
  InvokeEndpointAsyncCommand,
  InvokeEndpointWithResponseStreamCommand,
};

/**
 * @public
 */
export interface SageMakerRuntimeRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface SageMakerRuntime {
  /**
   * @see {@link InvokeEndpointCommand}
   */
  invokeEndpoint(
    args: InvokeEndpointCommandInput,
    options?: SageMakerRuntimeRequestOptions
  ): Promise<InvokeEndpointCommandOutput>;
  invokeEndpoint(
    args: InvokeEndpointCommandInput,
    cb: (err: any, data?: InvokeEndpointCommandOutput) => void
  ): void;
  invokeEndpoint(
    args: InvokeEndpointCommandInput,
    options: SageMakerRuntimeRequestOptions,
    cb: (err: any, data?: InvokeEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link InvokeEndpointAsyncCommand}
   */
  invokeEndpointAsync(
    args: InvokeEndpointAsyncCommandInput,
    options?: SageMakerRuntimeRequestOptions
  ): Promise<InvokeEndpointAsyncCommandOutput>;
  invokeEndpointAsync(
    args: InvokeEndpointAsyncCommandInput,
    cb: (err: any, data?: InvokeEndpointAsyncCommandOutput) => void
  ): void;
  invokeEndpointAsync(
    args: InvokeEndpointAsyncCommandInput,
    options: SageMakerRuntimeRequestOptions,
    cb: (err: any, data?: InvokeEndpointAsyncCommandOutput) => void
  ): void;

  /**
   * @see {@link InvokeEndpointWithResponseStreamCommand}
   */
  invokeEndpointWithResponseStream(
    args: InvokeEndpointWithResponseStreamCommandInput,
    options?: SageMakerRuntimeRequestOptions
  ): Promise<InvokeEndpointWithResponseStreamCommandOutput>;
  invokeEndpointWithResponseStream(
    args: InvokeEndpointWithResponseStreamCommandInput,
    cb: (err: any, data?: InvokeEndpointWithResponseStreamCommandOutput) => void
  ): void;
  invokeEndpointWithResponseStream(
    args: InvokeEndpointWithResponseStreamCommandInput,
    options: SageMakerRuntimeRequestOptions,
    cb: (err: any, data?: InvokeEndpointWithResponseStreamCommandOutput) => void
  ): void;
}

/**
 * <p> The Amazon SageMaker AI runtime API. </p>
 * @public
 */
export class SageMakerRuntime extends SageMakerRuntimeClient implements SageMakerRuntime {}
createAggregatedClient(commands, SageMakerRuntime);
