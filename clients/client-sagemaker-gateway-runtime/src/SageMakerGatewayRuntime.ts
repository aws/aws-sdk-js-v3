// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type { HttpHandlerOptions as __HttpHandlerOptions, MetricsRecorder as __MetricsRecorder } from "@smithy/types";

import {
  type InvokeGlobalInferenceGatewayCommandInput,
  type InvokeGlobalInferenceGatewayCommandOutput,
  InvokeGlobalInferenceGatewayCommand,
} from "./commands/InvokeGlobalInferenceGatewayCommand";
import {
  type InvokeGlobalInferenceGatewayWithResponseStreamCommandInput,
  type InvokeGlobalInferenceGatewayWithResponseStreamCommandOutput,
  InvokeGlobalInferenceGatewayWithResponseStreamCommand,
} from "./commands/InvokeGlobalInferenceGatewayWithResponseStreamCommand";
import { SageMakerGatewayRuntimeClient } from "./SageMakerGatewayRuntimeClient";

const commands = {
  InvokeGlobalInferenceGatewayCommand,
  InvokeGlobalInferenceGatewayWithResponseStreamCommand,
};

/**
 * @public
 */
export interface SageMakerGatewayRuntimeRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface SageMakerGatewayRuntime {
  /**
   * @see {@link InvokeGlobalInferenceGatewayCommand}
   */
  invokeGlobalInferenceGateway(
    args: InvokeGlobalInferenceGatewayCommandInput,
    options?: SageMakerGatewayRuntimeRequestOptions
  ): Promise<InvokeGlobalInferenceGatewayCommandOutput>;
  invokeGlobalInferenceGateway(
    args: InvokeGlobalInferenceGatewayCommandInput,
    cb: (err: any, data?: InvokeGlobalInferenceGatewayCommandOutput) => void
  ): void;
  invokeGlobalInferenceGateway(
    args: InvokeGlobalInferenceGatewayCommandInput,
    options: SageMakerGatewayRuntimeRequestOptions,
    cb: (err: any, data?: InvokeGlobalInferenceGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link InvokeGlobalInferenceGatewayWithResponseStreamCommand}
   */
  invokeGlobalInferenceGatewayWithResponseStream(
    args: InvokeGlobalInferenceGatewayWithResponseStreamCommandInput,
    options?: SageMakerGatewayRuntimeRequestOptions
  ): Promise<InvokeGlobalInferenceGatewayWithResponseStreamCommandOutput>;
  invokeGlobalInferenceGatewayWithResponseStream(
    args: InvokeGlobalInferenceGatewayWithResponseStreamCommandInput,
    cb: (err: any, data?: InvokeGlobalInferenceGatewayWithResponseStreamCommandOutput) => void
  ): void;
  invokeGlobalInferenceGatewayWithResponseStream(
    args: InvokeGlobalInferenceGatewayWithResponseStreamCommandInput,
    options: SageMakerGatewayRuntimeRequestOptions,
    cb: (err: any, data?: InvokeGlobalInferenceGatewayWithResponseStreamCommandOutput) => void
  ): void;
}

/**
 * Use the Amazon SageMaker Gateway Runtime API to run inference through a
 * Global Inference Gateway. A Global Inference Gateway routes each request to
 * an inference gateway that serves the model named in the request.
 *
 * The request body is an OpenAI-compatible JSON object, sent with
 * `Content-Type: application/json`, and the model is selected by the `model`
 * key in that body. The content of the body is passed to the model server
 * unchanged, except for the `stream` flag, which each operation sets.
 *
 * Requests are signed with Signature Version 4 under the `sagemaker` signing
 * name. IAM actions are in the `sagemaker` namespace, for example
 * `sagemaker:InvokeGlobalInferenceGateway`. The default regional endpoint is
 * `gateway-runtime.sagemaker.\{region\}.amazonaws.com`.
 * @public
 */
export class SageMakerGatewayRuntime extends SageMakerGatewayRuntimeClient implements SageMakerGatewayRuntime {}
createAggregatedClient(commands, SageMakerGatewayRuntime);
