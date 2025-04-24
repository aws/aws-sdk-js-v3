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
import {
  GetAsyncInvokeCommand,
  GetAsyncInvokeCommandInput,
  GetAsyncInvokeCommandOutput,
} from "./commands/GetAsyncInvokeCommand";
import { InvokeModelCommand, InvokeModelCommandInput, InvokeModelCommandOutput } from "./commands/InvokeModelCommand";
import {
  InvokeModelWithBidirectionalStreamCommand,
  InvokeModelWithBidirectionalStreamCommandInput,
  InvokeModelWithBidirectionalStreamCommandOutput,
} from "./commands/InvokeModelWithBidirectionalStreamCommand";
import {
  InvokeModelWithResponseStreamCommand,
  InvokeModelWithResponseStreamCommandInput,
  InvokeModelWithResponseStreamCommandOutput,
} from "./commands/InvokeModelWithResponseStreamCommand";
import {
  ListAsyncInvokesCommand,
  ListAsyncInvokesCommandInput,
  ListAsyncInvokesCommandOutput,
} from "./commands/ListAsyncInvokesCommand";
import {
  StartAsyncInvokeCommand,
  StartAsyncInvokeCommandInput,
  StartAsyncInvokeCommandOutput,
} from "./commands/StartAsyncInvokeCommand";

const commands = {
  ApplyGuardrailCommand,
  ConverseCommand,
  ConverseStreamCommand,
  GetAsyncInvokeCommand,
  InvokeModelCommand,
  InvokeModelWithBidirectionalStreamCommand,
  InvokeModelWithResponseStreamCommand,
  ListAsyncInvokesCommand,
  StartAsyncInvokeCommand,
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
   * @see {@link GetAsyncInvokeCommand}
   */
  getAsyncInvoke(
    args: GetAsyncInvokeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAsyncInvokeCommandOutput>;
  getAsyncInvoke(args: GetAsyncInvokeCommandInput, cb: (err: any, data?: GetAsyncInvokeCommandOutput) => void): void;
  getAsyncInvoke(
    args: GetAsyncInvokeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAsyncInvokeCommandOutput) => void
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
   * @see {@link InvokeModelWithBidirectionalStreamCommand}
   */
  invokeModelWithBidirectionalStream(
    args: InvokeModelWithBidirectionalStreamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<InvokeModelWithBidirectionalStreamCommandOutput>;
  invokeModelWithBidirectionalStream(
    args: InvokeModelWithBidirectionalStreamCommandInput,
    cb: (err: any, data?: InvokeModelWithBidirectionalStreamCommandOutput) => void
  ): void;
  invokeModelWithBidirectionalStream(
    args: InvokeModelWithBidirectionalStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InvokeModelWithBidirectionalStreamCommandOutput) => void
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

  /**
   * @see {@link ListAsyncInvokesCommand}
   */
  listAsyncInvokes(): Promise<ListAsyncInvokesCommandOutput>;
  listAsyncInvokes(
    args: ListAsyncInvokesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAsyncInvokesCommandOutput>;
  listAsyncInvokes(
    args: ListAsyncInvokesCommandInput,
    cb: (err: any, data?: ListAsyncInvokesCommandOutput) => void
  ): void;
  listAsyncInvokes(
    args: ListAsyncInvokesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAsyncInvokesCommandOutput) => void
  ): void;

  /**
   * @see {@link StartAsyncInvokeCommand}
   */
  startAsyncInvoke(
    args: StartAsyncInvokeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartAsyncInvokeCommandOutput>;
  startAsyncInvoke(
    args: StartAsyncInvokeCommandInput,
    cb: (err: any, data?: StartAsyncInvokeCommandOutput) => void
  ): void;
  startAsyncInvoke(
    args: StartAsyncInvokeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartAsyncInvokeCommandOutput) => void
  ): void;
}

/**
 * <p>Describes the API operations for running inference using Amazon Bedrock models.</p>
 * @public
 */
export class BedrockRuntime extends BedrockRuntimeClient implements BedrockRuntime {}
createAggregatedClient(commands, BedrockRuntime);
