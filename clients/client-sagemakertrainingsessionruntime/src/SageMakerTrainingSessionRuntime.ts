// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type { HttpHandlerOptions as __HttpHandlerOptions, MetricsRecorder as __MetricsRecorder } from "@smithy/types";

import {
  type ExecuteSamplingOperationCommandInput,
  type ExecuteSamplingOperationCommandOutput,
  ExecuteSamplingOperationCommand,
} from "./commands/ExecuteSamplingOperationCommand";
import {
  type ExecuteTrainingOperationCommandInput,
  type ExecuteTrainingOperationCommandOutput,
  ExecuteTrainingOperationCommand,
} from "./commands/ExecuteTrainingOperationCommand";
import {
  type GetSamplingOperationResultCommandInput,
  type GetSamplingOperationResultCommandOutput,
  GetSamplingOperationResultCommand,
} from "./commands/GetSamplingOperationResultCommand";
import {
  type GetTrainingOperationResultCommandInput,
  type GetTrainingOperationResultCommandOutput,
  GetTrainingOperationResultCommand,
} from "./commands/GetTrainingOperationResultCommand";
import {
  type SampleTrainingSessionCommandInput,
  type SampleTrainingSessionCommandOutput,
  SampleTrainingSessionCommand,
} from "./commands/SampleTrainingSessionCommand";
import {
  type SampleTrainingSessionWithResponseStreamCommandInput,
  type SampleTrainingSessionWithResponseStreamCommandOutput,
  SampleTrainingSessionWithResponseStreamCommand,
} from "./commands/SampleTrainingSessionWithResponseStreamCommand";
import { SageMakerTrainingSessionRuntimeClient } from "./SageMakerTrainingSessionRuntimeClient";

const commands = {
  ExecuteSamplingOperationCommand,
  ExecuteTrainingOperationCommand,
  GetSamplingOperationResultCommand,
  GetTrainingOperationResultCommand,
  SampleTrainingSessionCommand,
  SampleTrainingSessionWithResponseStreamCommand,
};

/**
 * @public
 */
export interface SageMakerTrainingSessionRuntimeRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface SageMakerTrainingSessionRuntime {
  /**
   * @see {@link ExecuteSamplingOperationCommand}
   */
  executeSamplingOperation(
    args: ExecuteSamplingOperationCommandInput,
    options?: SageMakerTrainingSessionRuntimeRequestOptions
  ): Promise<ExecuteSamplingOperationCommandOutput>;
  executeSamplingOperation(
    args: ExecuteSamplingOperationCommandInput,
    cb: (err: any, data?: ExecuteSamplingOperationCommandOutput) => void
  ): void;
  executeSamplingOperation(
    args: ExecuteSamplingOperationCommandInput,
    options: SageMakerTrainingSessionRuntimeRequestOptions,
    cb: (err: any, data?: ExecuteSamplingOperationCommandOutput) => void
  ): void;

  /**
   * @see {@link ExecuteTrainingOperationCommand}
   */
  executeTrainingOperation(
    args: ExecuteTrainingOperationCommandInput,
    options?: SageMakerTrainingSessionRuntimeRequestOptions
  ): Promise<ExecuteTrainingOperationCommandOutput>;
  executeTrainingOperation(
    args: ExecuteTrainingOperationCommandInput,
    cb: (err: any, data?: ExecuteTrainingOperationCommandOutput) => void
  ): void;
  executeTrainingOperation(
    args: ExecuteTrainingOperationCommandInput,
    options: SageMakerTrainingSessionRuntimeRequestOptions,
    cb: (err: any, data?: ExecuteTrainingOperationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSamplingOperationResultCommand}
   */
  getSamplingOperationResult(
    args: GetSamplingOperationResultCommandInput,
    options?: SageMakerTrainingSessionRuntimeRequestOptions
  ): Promise<GetSamplingOperationResultCommandOutput>;
  getSamplingOperationResult(
    args: GetSamplingOperationResultCommandInput,
    cb: (err: any, data?: GetSamplingOperationResultCommandOutput) => void
  ): void;
  getSamplingOperationResult(
    args: GetSamplingOperationResultCommandInput,
    options: SageMakerTrainingSessionRuntimeRequestOptions,
    cb: (err: any, data?: GetSamplingOperationResultCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTrainingOperationResultCommand}
   */
  getTrainingOperationResult(
    args: GetTrainingOperationResultCommandInput,
    options?: SageMakerTrainingSessionRuntimeRequestOptions
  ): Promise<GetTrainingOperationResultCommandOutput>;
  getTrainingOperationResult(
    args: GetTrainingOperationResultCommandInput,
    cb: (err: any, data?: GetTrainingOperationResultCommandOutput) => void
  ): void;
  getTrainingOperationResult(
    args: GetTrainingOperationResultCommandInput,
    options: SageMakerTrainingSessionRuntimeRequestOptions,
    cb: (err: any, data?: GetTrainingOperationResultCommandOutput) => void
  ): void;

  /**
   * @see {@link SampleTrainingSessionCommand}
   */
  sampleTrainingSession(
    args: SampleTrainingSessionCommandInput,
    options?: SageMakerTrainingSessionRuntimeRequestOptions
  ): Promise<SampleTrainingSessionCommandOutput>;
  sampleTrainingSession(
    args: SampleTrainingSessionCommandInput,
    cb: (err: any, data?: SampleTrainingSessionCommandOutput) => void
  ): void;
  sampleTrainingSession(
    args: SampleTrainingSessionCommandInput,
    options: SageMakerTrainingSessionRuntimeRequestOptions,
    cb: (err: any, data?: SampleTrainingSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link SampleTrainingSessionWithResponseStreamCommand}
   */
  sampleTrainingSessionWithResponseStream(
    args: SampleTrainingSessionWithResponseStreamCommandInput,
    options?: SageMakerTrainingSessionRuntimeRequestOptions
  ): Promise<SampleTrainingSessionWithResponseStreamCommandOutput>;
  sampleTrainingSessionWithResponseStream(
    args: SampleTrainingSessionWithResponseStreamCommandInput,
    cb: (err: any, data?: SampleTrainingSessionWithResponseStreamCommandOutput) => void
  ): void;
  sampleTrainingSessionWithResponseStream(
    args: SampleTrainingSessionWithResponseStreamCommandInput,
    options: SageMakerTrainingSessionRuntimeRequestOptions,
    cb: (err: any, data?: SampleTrainingSessionWithResponseStreamCommandOutput) => void
  ): void;
}

/**
 * <p>Amazon SageMaker Training Session Runtime provides APIs for executing training operations and sampling operations against a running training session. Use these APIs to submit asynchronous training steps (such as forward-backward passes, optimizer steps, and checkpoint saves) and to generate text samples from the model being trained.</p>
 * @public
 */
export class SageMakerTrainingSessionRuntime extends SageMakerTrainingSessionRuntimeClient implements SageMakerTrainingSessionRuntime {}
createAggregatedClient(commands, SageMakerTrainingSessionRuntime);
