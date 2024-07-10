// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { BedrockRuntimeClient, BedrockRuntimeClientConfig } from "./BedrockRuntimeClient";
import {
  ApplyGuardrailCommand,
  ApplyGuardrailCommandInput,
  ApplyGuardrailCommandOutput,
} from "./commands/ApplyGuardrailCommand";
import { ConverseCommand, ConverseCommandInput, ConverseCommandOutput } from "./commands/ConverseCommand";
import {
  ConverseStreamCommand,
  ConverseStreamCommandInput,
  ConverseStreamCommandOutput,
} from "./commands/ConverseStreamCommand";
import { InvokeModelCommand, InvokeModelCommandInput, InvokeModelCommandOutput } from "./commands/InvokeModelCommand";
import {
  InvokeModelWithResponseStreamCommand,
  InvokeModelWithResponseStreamCommandInput,
  InvokeModelWithResponseStreamCommandOutput,
} from "./commands/InvokeModelWithResponseStreamCommand";

const commands = {
  ApplyGuardrailCommand,
  ConverseCommand,
  ConverseStreamCommand,
  InvokeModelCommand,
  InvokeModelWithResponseStreamCommand,
};

export interface BedrockRuntime {
  /**
   * @see {@link ApplyGuardrailCommand}
   */
  applyGuardrail(
    args: ApplyGuardrailCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ApplyGuardrailCommandOutput>;
  applyGuardrail(args: ApplyGuardrailCommandInput, cb: (err: any, data?: ApplyGuardrailCommandOutput) => void): void;
  applyGuardrail(
    args: ApplyGuardrailCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ApplyGuardrailCommandOutput) => void
  ): void;

  /**
   * @see {@link ConverseCommand}
   */
  converse(args: ConverseCommandInput, options?: __HttpHandlerOptions): Promise<ConverseCommandOutput>;
  converse(args: ConverseCommandInput, cb: (err: any, data?: ConverseCommandOutput) => void): void;
  converse(
    args: ConverseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ConverseCommandOutput) => void
  ): void;

  /**
   * @see {@link ConverseStreamCommand}
   */
  converseStream(
    args: ConverseStreamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ConverseStreamCommandOutput>;
  converseStream(args: ConverseStreamCommandInput, cb: (err: any, data?: ConverseStreamCommandOutput) => void): void;
  converseStream(
    args: ConverseStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ConverseStreamCommandOutput) => void
  ): void;

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
 * <p>Describes the API operations for running inference using Amazon Bedrock models.</p>
 * @public
 */
export class BedrockRuntime extends BedrockRuntimeClient implements BedrockRuntime {}
createAggregatedClient(commands, BedrockRuntime);
