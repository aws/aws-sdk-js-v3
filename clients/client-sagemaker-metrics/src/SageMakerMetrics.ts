// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  BatchPutMetricsCommand,
  BatchPutMetricsCommandInput,
  BatchPutMetricsCommandOutput,
} from "./commands/BatchPutMetricsCommand";
import { SageMakerMetricsClient } from "./SageMakerMetricsClient";

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
 */
export class SageMakerMetrics extends SageMakerMetricsClient {
  /**
   * <p>Used to ingest training metrics into SageMaker. These metrics can be visualized in SageMaker Studio and
   *          retrieved with the <code>GetMetrics</code> API.
   *       </p>
   */
  public batchPutMetrics(
    args: BatchPutMetricsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchPutMetricsCommandOutput>;
  public batchPutMetrics(
    args: BatchPutMetricsCommandInput,
    cb: (err: any, data?: BatchPutMetricsCommandOutput) => void
  ): void;
  public batchPutMetrics(
    args: BatchPutMetricsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchPutMetricsCommandOutput) => void
  ): void;
  public batchPutMetrics(
    args: BatchPutMetricsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchPutMetricsCommandOutput) => void),
    cb?: (err: any, data?: BatchPutMetricsCommandOutput) => void
  ): Promise<BatchPutMetricsCommandOutput> | void {
    const command = new BatchPutMetricsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
