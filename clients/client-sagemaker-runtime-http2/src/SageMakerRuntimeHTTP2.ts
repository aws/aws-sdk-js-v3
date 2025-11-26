// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  InvokeEndpointWithBidirectionalStreamCommand,
  InvokeEndpointWithBidirectionalStreamCommandInput,
  InvokeEndpointWithBidirectionalStreamCommandOutput,
} from "./commands/InvokeEndpointWithBidirectionalStreamCommand";
import { SageMakerRuntimeHTTP2Client } from "./SageMakerRuntimeHTTP2Client";

const commands = {
  InvokeEndpointWithBidirectionalStreamCommand,
};

export interface SageMakerRuntimeHTTP2 {
  /**
   * @see {@link InvokeEndpointWithBidirectionalStreamCommand}
   */
  invokeEndpointWithBidirectionalStream(
    args: InvokeEndpointWithBidirectionalStreamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<InvokeEndpointWithBidirectionalStreamCommandOutput>;
  invokeEndpointWithBidirectionalStream(
    args: InvokeEndpointWithBidirectionalStreamCommandInput,
    cb: (err: any, data?: InvokeEndpointWithBidirectionalStreamCommandOutput) => void
  ): void;
  invokeEndpointWithBidirectionalStream(
    args: InvokeEndpointWithBidirectionalStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InvokeEndpointWithBidirectionalStreamCommandOutput) => void
  ): void;
}

/**
 * <p> The Amazon SageMaker AI runtime HTTP/2 API. </p>
 * @public
 */
export class SageMakerRuntimeHTTP2 extends SageMakerRuntimeHTTP2Client implements SageMakerRuntimeHTTP2 {}
createAggregatedClient(commands, SageMakerRuntimeHTTP2);
