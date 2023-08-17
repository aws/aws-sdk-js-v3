// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  BatchPutMetricsCommand,
  BatchPutMetricsCommandInput,
  BatchPutMetricsCommandOutput,
} from "./commands/BatchPutMetricsCommand";
import { SageMakerMetricsClient, SageMakerMetricsClientConfig } from "./SageMakerMetricsClient";

const commands = {
  BatchPutMetricsCommand,
};

export interface SageMakerMetrics {
  /**
   * @see {@link BatchPutMetricsCommand}
   */
  batchPutMetrics(
    args: BatchPutMetricsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchPutMetricsCommandOutput>;
  batchPutMetrics(args: BatchPutMetricsCommandInput, cb: (err: any, data?: BatchPutMetricsCommandOutput) => void): void;
  batchPutMetrics(
    args: BatchPutMetricsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchPutMetricsCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>Contains all data plane API operations and data types for Amazon SageMaker Metrics.
 *          Use these APIs to put and retrieve (get) features related to your training run.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_metrics_BatchPutMetrics.html">BatchPutMetrics</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export class SageMakerMetrics extends SageMakerMetricsClient implements SageMakerMetrics {}
createAggregatedClient(commands, SageMakerMetrics);
