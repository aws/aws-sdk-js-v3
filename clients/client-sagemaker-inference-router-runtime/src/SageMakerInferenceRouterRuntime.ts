// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type { HttpHandlerOptions as __HttpHandlerOptions, MetricsRecorder as __MetricsRecorder } from "@smithy/types";

import {
  type InvokeInferenceRouterAsyncCommandInput,
  type InvokeInferenceRouterAsyncCommandOutput,
  InvokeInferenceRouterAsyncCommand,
} from "./commands/InvokeInferenceRouterAsyncCommand";
import {
  type InvokeInferenceRouterCommandInput,
  type InvokeInferenceRouterCommandOutput,
  InvokeInferenceRouterCommand,
} from "./commands/InvokeInferenceRouterCommand";
import { SageMakerInferenceRouterRuntimeClient } from "./SageMakerInferenceRouterRuntimeClient";

const commands = {
  InvokeInferenceRouterCommand,
  InvokeInferenceRouterAsyncCommand,
};

/**
 * @public
 */
export interface SageMakerInferenceRouterRuntimeRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface SageMakerInferenceRouterRuntime {
  /**
   * @see {@link InvokeInferenceRouterCommand}
   */
  invokeInferenceRouter(
    args: InvokeInferenceRouterCommandInput,
    options?: SageMakerInferenceRouterRuntimeRequestOptions
  ): Promise<InvokeInferenceRouterCommandOutput>;
  invokeInferenceRouter(
    args: InvokeInferenceRouterCommandInput,
    cb: (err: any, data?: InvokeInferenceRouterCommandOutput) => void
  ): void;
  invokeInferenceRouter(
    args: InvokeInferenceRouterCommandInput,
    options: SageMakerInferenceRouterRuntimeRequestOptions,
    cb: (err: any, data?: InvokeInferenceRouterCommandOutput) => void
  ): void;

  /**
   * @see {@link InvokeInferenceRouterAsyncCommand}
   */
  invokeInferenceRouterAsync(
    args: InvokeInferenceRouterAsyncCommandInput,
    options?: SageMakerInferenceRouterRuntimeRequestOptions
  ): Promise<InvokeInferenceRouterAsyncCommandOutput>;
  invokeInferenceRouterAsync(
    args: InvokeInferenceRouterAsyncCommandInput,
    cb: (err: any, data?: InvokeInferenceRouterAsyncCommandOutput) => void
  ): void;
  invokeInferenceRouterAsync(
    args: InvokeInferenceRouterAsyncCommandInput,
    options: SageMakerInferenceRouterRuntimeRequestOptions,
    cb: (err: any, data?: InvokeInferenceRouterAsyncCommandOutput) => void
  ): void;
}

/**
 * <p>Amazon SageMaker Inference Router Runtime is the runtime API for Amazon SageMaker AI inference routers. An inference router sends each request that you make to one of the destinations of a routing target. A destination is a SageMaker AI endpoint or inference component, in your account or in another account, in the router's Amazon Web Services Region or in another Region in the same Amazon Web Services partition. The router chooses a healthy destination with capacity, and prefers destinations in its own Region.</p> <p>Use <code>InvokeInferenceRouter</code> to get an inference in real time. Use <code>InvokeInferenceRouterAsync</code> to submit a request whose input and response are stored in Amazon S3.</p> <p>The inference router runtime endpoint supports HTTP/1.1 only. HTTP/2 isn't supported. If you use the Amazon Web Services SDKs or the Amazon Web Services CLI, you don't need to change anything.</p>
 * @public
 */
export class SageMakerInferenceRouterRuntime extends SageMakerInferenceRouterRuntimeClient implements SageMakerInferenceRouterRuntime {}
createAggregatedClient(commands, SageMakerInferenceRouterRuntime);
