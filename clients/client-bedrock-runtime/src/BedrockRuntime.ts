// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { BedrockRuntimeClient, BedrockRuntimeClientConfig } from "./BedrockRuntimeClient";
import { InvokeModelCommand, InvokeModelCommandInput, InvokeModelCommandOutput } from "./commands/InvokeModelCommand";
import {
  InvokeModelWithResponseStreamCommand,
  InvokeModelWithResponseStreamCommandInput,
  InvokeModelWithResponseStreamCommandOutput,
} from "./commands/InvokeModelWithResponseStreamCommand";

const commands = {
  InvokeModelCommand,
  InvokeModelWithResponseStreamCommand,
};

export interface BedrockRuntime {
  /**
   * @see {@link InvokeModelCommand}
   */
  invokeModel(args: InvokeModelCommandInput, options?: __HttpHandlerOptions): Promise<InvokeModelCommandOutput>;
  invokeModel(args: InvokeModelCommandInput, cb: (err: any, data?: InvokeModelCommandOutput) => void): void;
  invokeModel(
    args: InvokeModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InvokeModelCommandOutput) => void
  ): void;

  /**
   * @see {@link InvokeModelWithResponseStreamCommand}
   */
  invokeModelWithResponseStream(
    args: InvokeModelWithResponseStreamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<InvokeModelWithResponseStreamCommandOutput>;
  invokeModelWithResponseStream(
    args: InvokeModelWithResponseStreamCommandInput,
    cb: (err: any, data?: InvokeModelWithResponseStreamCommandOutput) => void
  ): void;
  invokeModelWithResponseStream(
    args: InvokeModelWithResponseStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InvokeModelWithResponseStreamCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>Describes the API operations for running inference using Bedrock models.</p>
 */
export class BedrockRuntime extends BedrockRuntimeClient implements BedrockRuntime {}
createAggregatedClient(commands, BedrockRuntime);
