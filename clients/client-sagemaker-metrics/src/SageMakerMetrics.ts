// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type { HttpHandlerOptions as __HttpHandlerOptions, MetricsRecorder as __MetricsRecorder } from "@smithy/types";

import {
  type BatchGetMetricsCommandInput,
  type BatchGetMetricsCommandOutput,
  BatchGetMetricsCommand,
} from "./commands/BatchGetMetricsCommand";
import {
  type BatchPutMetricsCommandInput,
  type BatchPutMetricsCommandOutput,
  BatchPutMetricsCommand,
} from "./commands/BatchPutMetricsCommand";
import { SageMakerMetricsClient } from "./SageMakerMetricsClient";

const commands = {
  BatchGetMetricsCommand,
  BatchPutMetricsCommand,
};

/**
 * @public
 */
export interface SageMakerMetricsRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface SageMakerMetrics {
  /**
   * @see {@link BatchGetMetricsCommand}
   */
  batchGetMetrics(
    args: BatchGetMetricsCommandInput,
    options?: SageMakerMetricsRequestOptions
  ): Promise<BatchGetMetricsCommandOutput>;
  batchGetMetrics(
    args: BatchGetMetricsCommandInput,
    cb: (err: any, data?: BatchGetMetricsCommandOutput) => void
  ): void;
  batchGetMetrics(
    args: BatchGetMetricsCommandInput,
    options: SageMakerMetricsRequestOptions,
    cb: (err: any, data?: BatchGetMetricsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchPutMetricsCommand}
   */
  batchPutMetrics(
    args: BatchPutMetricsCommandInput,
    options?: SageMakerMetricsRequestOptions
  ): Promise<BatchPutMetricsCommandOutput>;
  batchPutMetrics(
    args: BatchPutMetricsCommandInput,
    cb: (err: any, data?: BatchPutMetricsCommandOutput) => void
  ): void;
  batchPutMetrics(
    args: BatchPutMetricsCommandInput,
    options: SageMakerMetricsRequestOptions,
    cb: (err: any, data?: BatchPutMetricsCommandOutput) => void
  ): void;
}

/**
 * <p>Contains all data plane API operations and data types for Amazon SageMaker Metrics.
 *          Use these APIs to put and retrieve (get) features related to your training run.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_metrics_BatchPutMetrics.html">BatchPutMetrics</a>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export class SageMakerMetrics extends SageMakerMetricsClient implements SageMakerMetrics {}
createAggregatedClient(commands, SageMakerMetrics);
