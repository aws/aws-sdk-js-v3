// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { BedrockAgentRuntimeClient, BedrockAgentRuntimeClientConfig } from "./BedrockAgentRuntimeClient";
import {
  DeleteAgentMemoryCommand,
  DeleteAgentMemoryCommandInput,
  DeleteAgentMemoryCommandOutput,
} from "./commands/DeleteAgentMemoryCommand";
import {
  GetAgentMemoryCommand,
  GetAgentMemoryCommandInput,
  GetAgentMemoryCommandOutput,
} from "./commands/GetAgentMemoryCommand";
import { InvokeAgentCommand, InvokeAgentCommandInput, InvokeAgentCommandOutput } from "./commands/InvokeAgentCommand";
import { InvokeFlowCommand, InvokeFlowCommandInput, InvokeFlowCommandOutput } from "./commands/InvokeFlowCommand";
import {
  InvokeInlineAgentCommand,
  InvokeInlineAgentCommandInput,
  InvokeInlineAgentCommandOutput,
} from "./commands/InvokeInlineAgentCommand";
import {
  OptimizePromptCommand,
  OptimizePromptCommandInput,
  OptimizePromptCommandOutput,
} from "./commands/OptimizePromptCommand";
import { RerankCommand, RerankCommandInput, RerankCommandOutput } from "./commands/RerankCommand";
import {
  RetrieveAndGenerateCommand,
  RetrieveAndGenerateCommandInput,
  RetrieveAndGenerateCommandOutput,
} from "./commands/RetrieveAndGenerateCommand";
import {
  RetrieveAndGenerateStreamCommand,
  RetrieveAndGenerateStreamCommandInput,
  RetrieveAndGenerateStreamCommandOutput,
} from "./commands/RetrieveAndGenerateStreamCommand";
import { RetrieveCommand, RetrieveCommandInput, RetrieveCommandOutput } from "./commands/RetrieveCommand";

const commands = {
  DeleteAgentMemoryCommand,
  GetAgentMemoryCommand,
  InvokeAgentCommand,
  InvokeFlowCommand,
  InvokeInlineAgentCommand,
  OptimizePromptCommand,
  RerankCommand,
  RetrieveCommand,
  RetrieveAndGenerateCommand,
  RetrieveAndGenerateStreamCommand,
};

export interface BedrockAgentRuntime {
  /**
   * @see {@link DeleteAgentMemoryCommand}
   */
  deleteAgentMemory(
    args: DeleteAgentMemoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAgentMemoryCommandOutput>;
  deleteAgentMemory(
    args: DeleteAgentMemoryCommandInput,
    cb: (err: any, data?: DeleteAgentMemoryCommandOutput) => void
  ): void;
  deleteAgentMemory(
    args: DeleteAgentMemoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAgentMemoryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAgentMemoryCommand}
   */
  getAgentMemory(
    args: GetAgentMemoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAgentMemoryCommandOutput>;
  getAgentMemory(args: GetAgentMemoryCommandInput, cb: (err: any, data?: GetAgentMemoryCommandOutput) => void): void;
  getAgentMemory(
    args: GetAgentMemoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAgentMemoryCommandOutput) => void
  ): void;

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
   * @see {@link InvokeFlowCommand}
   */
  invokeFlow(args: InvokeFlowCommandInput, options?: __HttpHandlerOptions): Promise<InvokeFlowCommandOutput>;
  invokeFlow(args: InvokeFlowCommandInput, cb: (err: any, data?: InvokeFlowCommandOutput) => void): void;
  invokeFlow(
    args: InvokeFlowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InvokeFlowCommandOutput) => void
  ): void;

  /**
   * @see {@link InvokeInlineAgentCommand}
   */
  invokeInlineAgent(
    args: InvokeInlineAgentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<InvokeInlineAgentCommandOutput>;
  invokeInlineAgent(
    args: InvokeInlineAgentCommandInput,
    cb: (err: any, data?: InvokeInlineAgentCommandOutput) => void
  ): void;
  invokeInlineAgent(
    args: InvokeInlineAgentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InvokeInlineAgentCommandOutput) => void
  ): void;

  /**
   * @see {@link OptimizePromptCommand}
   */
  optimizePrompt(
    args: OptimizePromptCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<OptimizePromptCommandOutput>;
  optimizePrompt(args: OptimizePromptCommandInput, cb: (err: any, data?: OptimizePromptCommandOutput) => void): void;
  optimizePrompt(
    args: OptimizePromptCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: OptimizePromptCommandOutput) => void
  ): void;

  /**
   * @see {@link RerankCommand}
   */
  rerank(args: RerankCommandInput, options?: __HttpHandlerOptions): Promise<RerankCommandOutput>;
  rerank(args: RerankCommandInput, cb: (err: any, data?: RerankCommandOutput) => void): void;
  rerank(
    args: RerankCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RerankCommandOutput) => void
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

  /**
   * @see {@link RetrieveAndGenerateStreamCommand}
   */
  retrieveAndGenerateStream(
    args: RetrieveAndGenerateStreamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RetrieveAndGenerateStreamCommandOutput>;
  retrieveAndGenerateStream(
    args: RetrieveAndGenerateStreamCommandInput,
    cb: (err: any, data?: RetrieveAndGenerateStreamCommandOutput) => void
  ): void;
  retrieveAndGenerateStream(
    args: RetrieveAndGenerateStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RetrieveAndGenerateStreamCommandOutput) => void
  ): void;
}

/**
 * <p>Contains APIs related to model invocation and querying of knowledge bases.</p>
 * @public
 */
export class BedrockAgentRuntime extends BedrockAgentRuntimeClient implements BedrockAgentRuntime {}
createAggregatedClient(commands, BedrockAgentRuntime);
