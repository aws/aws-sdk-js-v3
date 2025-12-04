// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { BedrockAgentRuntimeClient } from "./BedrockAgentRuntimeClient";
import {
  CreateInvocationCommand,
  CreateInvocationCommandInput,
  CreateInvocationCommandOutput,
} from "./commands/CreateInvocationCommand";
import {
  CreateSessionCommand,
  CreateSessionCommandInput,
  CreateSessionCommandOutput,
} from "./commands/CreateSessionCommand";
import {
  DeleteAgentMemoryCommand,
  DeleteAgentMemoryCommandInput,
  DeleteAgentMemoryCommandOutput,
} from "./commands/DeleteAgentMemoryCommand";
import {
  DeleteSessionCommand,
  DeleteSessionCommandInput,
  DeleteSessionCommandOutput,
} from "./commands/DeleteSessionCommand";
import { EndSessionCommand, EndSessionCommandInput, EndSessionCommandOutput } from "./commands/EndSessionCommand";
import {
  GenerateQueryCommand,
  GenerateQueryCommandInput,
  GenerateQueryCommandOutput,
} from "./commands/GenerateQueryCommand";
import {
  GetAgentMemoryCommand,
  GetAgentMemoryCommandInput,
  GetAgentMemoryCommandOutput,
} from "./commands/GetAgentMemoryCommand";
import {
  GetExecutionFlowSnapshotCommand,
  GetExecutionFlowSnapshotCommandInput,
  GetExecutionFlowSnapshotCommandOutput,
} from "./commands/GetExecutionFlowSnapshotCommand";
import {
  GetFlowExecutionCommand,
  GetFlowExecutionCommandInput,
  GetFlowExecutionCommandOutput,
} from "./commands/GetFlowExecutionCommand";
import {
  GetInvocationStepCommand,
  GetInvocationStepCommandInput,
  GetInvocationStepCommandOutput,
} from "./commands/GetInvocationStepCommand";
import { GetSessionCommand, GetSessionCommandInput, GetSessionCommandOutput } from "./commands/GetSessionCommand";
import { InvokeAgentCommand, InvokeAgentCommandInput, InvokeAgentCommandOutput } from "./commands/InvokeAgentCommand";
import { InvokeFlowCommand, InvokeFlowCommandInput, InvokeFlowCommandOutput } from "./commands/InvokeFlowCommand";
import {
  InvokeInlineAgentCommand,
  InvokeInlineAgentCommandInput,
  InvokeInlineAgentCommandOutput,
} from "./commands/InvokeInlineAgentCommand";
import {
  ListFlowExecutionEventsCommand,
  ListFlowExecutionEventsCommandInput,
  ListFlowExecutionEventsCommandOutput,
} from "./commands/ListFlowExecutionEventsCommand";
import {
  ListFlowExecutionsCommand,
  ListFlowExecutionsCommandInput,
  ListFlowExecutionsCommandOutput,
} from "./commands/ListFlowExecutionsCommand";
import {
  ListInvocationsCommand,
  ListInvocationsCommandInput,
  ListInvocationsCommandOutput,
} from "./commands/ListInvocationsCommand";
import {
  ListInvocationStepsCommand,
  ListInvocationStepsCommandInput,
  ListInvocationStepsCommandOutput,
} from "./commands/ListInvocationStepsCommand";
import {
  ListSessionsCommand,
  ListSessionsCommandInput,
  ListSessionsCommandOutput,
} from "./commands/ListSessionsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  OptimizePromptCommand,
  OptimizePromptCommandInput,
  OptimizePromptCommandOutput,
} from "./commands/OptimizePromptCommand";
import {
  PutInvocationStepCommand,
  PutInvocationStepCommandInput,
  PutInvocationStepCommandOutput,
} from "./commands/PutInvocationStepCommand";
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
import {
  StartFlowExecutionCommand,
  StartFlowExecutionCommandInput,
  StartFlowExecutionCommandOutput,
} from "./commands/StartFlowExecutionCommand";
import {
  StopFlowExecutionCommand,
  StopFlowExecutionCommandInput,
  StopFlowExecutionCommandOutput,
} from "./commands/StopFlowExecutionCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateSessionCommand,
  UpdateSessionCommandInput,
  UpdateSessionCommandOutput,
} from "./commands/UpdateSessionCommand";

const commands = {
  CreateInvocationCommand,
  CreateSessionCommand,
  DeleteAgentMemoryCommand,
  DeleteSessionCommand,
  EndSessionCommand,
  GenerateQueryCommand,
  GetAgentMemoryCommand,
  GetExecutionFlowSnapshotCommand,
  GetFlowExecutionCommand,
  GetInvocationStepCommand,
  GetSessionCommand,
  InvokeAgentCommand,
  InvokeFlowCommand,
  InvokeInlineAgentCommand,
  ListFlowExecutionEventsCommand,
  ListFlowExecutionsCommand,
  ListInvocationsCommand,
  ListInvocationStepsCommand,
  ListSessionsCommand,
  ListTagsForResourceCommand,
  OptimizePromptCommand,
  PutInvocationStepCommand,
  RerankCommand,
  RetrieveCommand,
  RetrieveAndGenerateCommand,
  RetrieveAndGenerateStreamCommand,
  StartFlowExecutionCommand,
  StopFlowExecutionCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateSessionCommand,
};

export interface BedrockAgentRuntime {
  /**
   * @see {@link CreateInvocationCommand}
   */
  createInvocation(
    args: CreateInvocationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateInvocationCommandOutput>;
  createInvocation(
    args: CreateInvocationCommandInput,
    cb: (err: any, data?: CreateInvocationCommandOutput) => void
  ): void;
  createInvocation(
    args: CreateInvocationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateInvocationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSessionCommand}
   */
  createSession(): Promise<CreateSessionCommandOutput>;
  createSession(args: CreateSessionCommandInput, options?: __HttpHandlerOptions): Promise<CreateSessionCommandOutput>;
  createSession(args: CreateSessionCommandInput, cb: (err: any, data?: CreateSessionCommandOutput) => void): void;
  createSession(
    args: CreateSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSessionCommandOutput) => void
  ): void;

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
   * @see {@link DeleteSessionCommand}
   */
  deleteSession(args: DeleteSessionCommandInput, options?: __HttpHandlerOptions): Promise<DeleteSessionCommandOutput>;
  deleteSession(args: DeleteSessionCommandInput, cb: (err: any, data?: DeleteSessionCommandOutput) => void): void;
  deleteSession(
    args: DeleteSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link EndSessionCommand}
   */
  endSession(args: EndSessionCommandInput, options?: __HttpHandlerOptions): Promise<EndSessionCommandOutput>;
  endSession(args: EndSessionCommandInput, cb: (err: any, data?: EndSessionCommandOutput) => void): void;
  endSession(
    args: EndSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EndSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link GenerateQueryCommand}
   */
  generateQuery(args: GenerateQueryCommandInput, options?: __HttpHandlerOptions): Promise<GenerateQueryCommandOutput>;
  generateQuery(args: GenerateQueryCommandInput, cb: (err: any, data?: GenerateQueryCommandOutput) => void): void;
  generateQuery(
    args: GenerateQueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GenerateQueryCommandOutput) => void
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
   * @see {@link GetExecutionFlowSnapshotCommand}
   */
  getExecutionFlowSnapshot(
    args: GetExecutionFlowSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetExecutionFlowSnapshotCommandOutput>;
  getExecutionFlowSnapshot(
    args: GetExecutionFlowSnapshotCommandInput,
    cb: (err: any, data?: GetExecutionFlowSnapshotCommandOutput) => void
  ): void;
  getExecutionFlowSnapshot(
    args: GetExecutionFlowSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetExecutionFlowSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFlowExecutionCommand}
   */
  getFlowExecution(
    args: GetFlowExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFlowExecutionCommandOutput>;
  getFlowExecution(
    args: GetFlowExecutionCommandInput,
    cb: (err: any, data?: GetFlowExecutionCommandOutput) => void
  ): void;
  getFlowExecution(
    args: GetFlowExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFlowExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetInvocationStepCommand}
   */
  getInvocationStep(
    args: GetInvocationStepCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetInvocationStepCommandOutput>;
  getInvocationStep(
    args: GetInvocationStepCommandInput,
    cb: (err: any, data?: GetInvocationStepCommandOutput) => void
  ): void;
  getInvocationStep(
    args: GetInvocationStepCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInvocationStepCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSessionCommand}
   */
  getSession(args: GetSessionCommandInput, options?: __HttpHandlerOptions): Promise<GetSessionCommandOutput>;
  getSession(args: GetSessionCommandInput, cb: (err: any, data?: GetSessionCommandOutput) => void): void;
  getSession(
    args: GetSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSessionCommandOutput) => void
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
   * @see {@link ListFlowExecutionEventsCommand}
   */
  listFlowExecutionEvents(
    args: ListFlowExecutionEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFlowExecutionEventsCommandOutput>;
  listFlowExecutionEvents(
    args: ListFlowExecutionEventsCommandInput,
    cb: (err: any, data?: ListFlowExecutionEventsCommandOutput) => void
  ): void;
  listFlowExecutionEvents(
    args: ListFlowExecutionEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFlowExecutionEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFlowExecutionsCommand}
   */
  listFlowExecutions(
    args: ListFlowExecutionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFlowExecutionsCommandOutput>;
  listFlowExecutions(
    args: ListFlowExecutionsCommandInput,
    cb: (err: any, data?: ListFlowExecutionsCommandOutput) => void
  ): void;
  listFlowExecutions(
    args: ListFlowExecutionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFlowExecutionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListInvocationsCommand}
   */
  listInvocations(
    args: ListInvocationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInvocationsCommandOutput>;
  listInvocations(args: ListInvocationsCommandInput, cb: (err: any, data?: ListInvocationsCommandOutput) => void): void;
  listInvocations(
    args: ListInvocationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInvocationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListInvocationStepsCommand}
   */
  listInvocationSteps(
    args: ListInvocationStepsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInvocationStepsCommandOutput>;
  listInvocationSteps(
    args: ListInvocationStepsCommandInput,
    cb: (err: any, data?: ListInvocationStepsCommandOutput) => void
  ): void;
  listInvocationSteps(
    args: ListInvocationStepsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInvocationStepsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSessionsCommand}
   */
  listSessions(): Promise<ListSessionsCommandOutput>;
  listSessions(args: ListSessionsCommandInput, options?: __HttpHandlerOptions): Promise<ListSessionsCommandOutput>;
  listSessions(args: ListSessionsCommandInput, cb: (err: any, data?: ListSessionsCommandOutput) => void): void;
  listSessions(
    args: ListSessionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSessionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
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
   * @see {@link PutInvocationStepCommand}
   */
  putInvocationStep(
    args: PutInvocationStepCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutInvocationStepCommandOutput>;
  putInvocationStep(
    args: PutInvocationStepCommandInput,
    cb: (err: any, data?: PutInvocationStepCommandOutput) => void
  ): void;
  putInvocationStep(
    args: PutInvocationStepCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutInvocationStepCommandOutput) => void
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

  /**
   * @see {@link StartFlowExecutionCommand}
   */
  startFlowExecution(
    args: StartFlowExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartFlowExecutionCommandOutput>;
  startFlowExecution(
    args: StartFlowExecutionCommandInput,
    cb: (err: any, data?: StartFlowExecutionCommandOutput) => void
  ): void;
  startFlowExecution(
    args: StartFlowExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartFlowExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link StopFlowExecutionCommand}
   */
  stopFlowExecution(
    args: StopFlowExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopFlowExecutionCommandOutput>;
  stopFlowExecution(
    args: StopFlowExecutionCommandInput,
    cb: (err: any, data?: StopFlowExecutionCommandOutput) => void
  ): void;
  stopFlowExecution(
    args: StopFlowExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopFlowExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSessionCommand}
   */
  updateSession(args: UpdateSessionCommandInput, options?: __HttpHandlerOptions): Promise<UpdateSessionCommandOutput>;
  updateSession(args: UpdateSessionCommandInput, cb: (err: any, data?: UpdateSessionCommandOutput) => void): void;
  updateSession(
    args: UpdateSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSessionCommandOutput) => void
  ): void;
}

/**
 * <p>Contains APIs related to model invocation and querying of knowledge bases.</p>
 * @public
 */
export class BedrockAgentRuntime extends BedrockAgentRuntimeClient implements BedrockAgentRuntime {}
createAggregatedClient(commands, BedrockAgentRuntime);
