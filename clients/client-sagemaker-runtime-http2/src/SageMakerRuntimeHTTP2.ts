// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type { HttpHandlerOptions as __HttpHandlerOptions, MetricsRecorder as __MetricsRecorder } from "@smithy/types";

import {
  type InvokeEndpointWithBidirectionalStreamCommandInput,
  type InvokeEndpointWithBidirectionalStreamCommandOutput,
  InvokeEndpointWithBidirectionalStreamCommand,
} from "./commands/InvokeEndpointWithBidirectionalStreamCommand";
import { SageMakerRuntimeHTTP2Client } from "./SageMakerRuntimeHTTP2Client";

const commands = {
  InvokeEndpointWithBidirectionalStreamCommand,
};

/**
 * @public
 */
export interface SageMakerRuntimeHTTP2RequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface SageMakerRuntimeHTTP2 {
  /**
   * @see {@link InvokeEndpointWithBidirectionalStreamCommand}
   */
  invokeEndpointWithBidirectionalStream(
    args: InvokeEndpointWithBidirectionalStreamCommandInput,
    options?: SageMakerRuntimeHTTP2RequestOptions
  ): Promise<InvokeEndpointWithBidirectionalStreamCommandOutput>;
  invokeEndpointWithBidirectionalStream(
    args: InvokeEndpointWithBidirectionalStreamCommandInput,
    cb: (err: any, data?: InvokeEndpointWithBidirectionalStreamCommandOutput) => void
  ): void;
  invokeEndpointWithBidirectionalStream(
    args: InvokeEndpointWithBidirectionalStreamCommandInput,
    options: SageMakerRuntimeHTTP2RequestOptions,
    cb: (err: any, data?: InvokeEndpointWithBidirectionalStreamCommandOutput) => void
  ): void;
}

/**
 * <p> The Amazon SageMaker AI runtime HTTP/2 API. </p>
 * @public
 */
export class SageMakerRuntimeHTTP2 extends SageMakerRuntimeHTTP2Client implements SageMakerRuntimeHTTP2 {}
createAggregatedClient(commands, SageMakerRuntimeHTTP2);
