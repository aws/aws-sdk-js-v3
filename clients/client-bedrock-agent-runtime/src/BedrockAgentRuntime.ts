// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { BedrockAgentRuntimeClient, BedrockAgentRuntimeClientConfig } from "./BedrockAgentRuntimeClient";
import { InvokeAgentCommand, InvokeAgentCommandInput, InvokeAgentCommandOutput } from "./commands/InvokeAgentCommand";
import {
  RetrieveAndGenerateCommand,
  RetrieveAndGenerateCommandInput,
  RetrieveAndGenerateCommandOutput,
} from "./commands/RetrieveAndGenerateCommand";
import { RetrieveCommand, RetrieveCommandInput, RetrieveCommandOutput } from "./commands/RetrieveCommand";

const commands = {
  InvokeAgentCommand,
  RetrieveCommand,
  RetrieveAndGenerateCommand,
};

export interface BedrockAgentRuntime {
  /**
   * @see {@link InvokeAgentCommand}
   */
  invokeAgent(args: InvokeAgentCommandInput, options?: __HttpHandlerOptions): Promise<InvokeAgentCommandOutput>;
  invokeAgent(args: InvokeAgentCommandInput, cb: (err: any, data?: InvokeAgentCommandOutput) => void): void;
  invokeAgent(
    args: InvokeAgentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InvokeAgentCommandOutput) => void
  ): void;

  /**
   * @see {@link RetrieveCommand}
   */
  retrieve(args: RetrieveCommandInput, options?: __HttpHandlerOptions): Promise<RetrieveCommandOutput>;
  retrieve(args: RetrieveCommandInput, cb: (err: any, data?: RetrieveCommandOutput) => void): void;
  retrieve(
    args: RetrieveCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RetrieveCommandOutput) => void
  ): void;

  /**
   * @see {@link RetrieveAndGenerateCommand}
   */
  retrieveAndGenerate(
    args: RetrieveAndGenerateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RetrieveAndGenerateCommandOutput>;
  retrieveAndGenerate(
    args: RetrieveAndGenerateCommandInput,
    cb: (err: any, data?: RetrieveAndGenerateCommandOutput) => void
  ): void;
  retrieveAndGenerate(
    args: RetrieveAndGenerateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RetrieveAndGenerateCommandOutput) => void
  ): void;
}

/**
 * <p>Contains APIs related to model invocation and querying of knowledge bases.</p>
 * @public
 */
export class BedrockAgentRuntime extends BedrockAgentRuntimeClient implements BedrockAgentRuntime {}
createAggregatedClient(commands, BedrockAgentRuntime);
