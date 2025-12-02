// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { BedrockAgentCoreClient, BedrockAgentCoreClientConfig } from "./BedrockAgentCoreClient";
import {
  BatchCreateMemoryRecordsCommand,
  BatchCreateMemoryRecordsCommandInput,
  BatchCreateMemoryRecordsCommandOutput,
} from "./commands/BatchCreateMemoryRecordsCommand";
import {
  BatchDeleteMemoryRecordsCommand,
  BatchDeleteMemoryRecordsCommandInput,
  BatchDeleteMemoryRecordsCommandOutput,
} from "./commands/BatchDeleteMemoryRecordsCommand";
import {
  BatchUpdateMemoryRecordsCommand,
  BatchUpdateMemoryRecordsCommandInput,
  BatchUpdateMemoryRecordsCommandOutput,
} from "./commands/BatchUpdateMemoryRecordsCommand";
import {
  CompleteResourceTokenAuthCommand,
  CompleteResourceTokenAuthCommandInput,
  CompleteResourceTokenAuthCommandOutput,
} from "./commands/CompleteResourceTokenAuthCommand";
import { CreateEventCommand, CreateEventCommandInput, CreateEventCommandOutput } from "./commands/CreateEventCommand";
import { DeleteEventCommand, DeleteEventCommandInput, DeleteEventCommandOutput } from "./commands/DeleteEventCommand";
import {
  DeleteMemoryRecordCommand,
  DeleteMemoryRecordCommandInput,
  DeleteMemoryRecordCommandOutput,
} from "./commands/DeleteMemoryRecordCommand";
import { EvaluateCommand, EvaluateCommandInput, EvaluateCommandOutput } from "./commands/EvaluateCommand";
import {
  GetAgentCardCommand,
  GetAgentCardCommandInput,
  GetAgentCardCommandOutput,
} from "./commands/GetAgentCardCommand";
import {
  GetBrowserSessionCommand,
  GetBrowserSessionCommandInput,
  GetBrowserSessionCommandOutput,
} from "./commands/GetBrowserSessionCommand";
import {
  GetCodeInterpreterSessionCommand,
  GetCodeInterpreterSessionCommandInput,
  GetCodeInterpreterSessionCommandOutput,
} from "./commands/GetCodeInterpreterSessionCommand";
import { GetEventCommand, GetEventCommandInput, GetEventCommandOutput } from "./commands/GetEventCommand";
import {
  GetMemoryRecordCommand,
  GetMemoryRecordCommandInput,
  GetMemoryRecordCommandOutput,
} from "./commands/GetMemoryRecordCommand";
import {
  GetResourceApiKeyCommand,
  GetResourceApiKeyCommandInput,
  GetResourceApiKeyCommandOutput,
} from "./commands/GetResourceApiKeyCommand";
import {
  GetResourceOauth2TokenCommand,
  GetResourceOauth2TokenCommandInput,
  GetResourceOauth2TokenCommandOutput,
} from "./commands/GetResourceOauth2TokenCommand";
import {
  GetWorkloadAccessTokenCommand,
  GetWorkloadAccessTokenCommandInput,
  GetWorkloadAccessTokenCommandOutput,
} from "./commands/GetWorkloadAccessTokenCommand";
import {
  GetWorkloadAccessTokenForJWTCommand,
  GetWorkloadAccessTokenForJWTCommandInput,
  GetWorkloadAccessTokenForJWTCommandOutput,
} from "./commands/GetWorkloadAccessTokenForJWTCommand";
import {
  GetWorkloadAccessTokenForUserIdCommand,
  GetWorkloadAccessTokenForUserIdCommandInput,
  GetWorkloadAccessTokenForUserIdCommandOutput,
} from "./commands/GetWorkloadAccessTokenForUserIdCommand";
import {
  InvokeAgentRuntimeCommand,
  InvokeAgentRuntimeCommandInput,
  InvokeAgentRuntimeCommandOutput,
} from "./commands/InvokeAgentRuntimeCommand";
import {
  InvokeCodeInterpreterCommand,
  InvokeCodeInterpreterCommandInput,
  InvokeCodeInterpreterCommandOutput,
} from "./commands/InvokeCodeInterpreterCommand";
import { ListActorsCommand, ListActorsCommandInput, ListActorsCommandOutput } from "./commands/ListActorsCommand";
import {
  ListBrowserSessionsCommand,
  ListBrowserSessionsCommandInput,
  ListBrowserSessionsCommandOutput,
} from "./commands/ListBrowserSessionsCommand";
import {
  ListCodeInterpreterSessionsCommand,
  ListCodeInterpreterSessionsCommandInput,
  ListCodeInterpreterSessionsCommandOutput,
} from "./commands/ListCodeInterpreterSessionsCommand";
import { ListEventsCommand, ListEventsCommandInput, ListEventsCommandOutput } from "./commands/ListEventsCommand";
import {
  ListMemoryExtractionJobsCommand,
  ListMemoryExtractionJobsCommandInput,
  ListMemoryExtractionJobsCommandOutput,
} from "./commands/ListMemoryExtractionJobsCommand";
import {
  ListMemoryRecordsCommand,
  ListMemoryRecordsCommandInput,
  ListMemoryRecordsCommandOutput,
} from "./commands/ListMemoryRecordsCommand";
import {
  ListSessionsCommand,
  ListSessionsCommandInput,
  ListSessionsCommandOutput,
} from "./commands/ListSessionsCommand";
import {
  RetrieveMemoryRecordsCommand,
  RetrieveMemoryRecordsCommandInput,
  RetrieveMemoryRecordsCommandOutput,
} from "./commands/RetrieveMemoryRecordsCommand";
import {
  StartBrowserSessionCommand,
  StartBrowserSessionCommandInput,
  StartBrowserSessionCommandOutput,
} from "./commands/StartBrowserSessionCommand";
import {
  StartCodeInterpreterSessionCommand,
  StartCodeInterpreterSessionCommandInput,
  StartCodeInterpreterSessionCommandOutput,
} from "./commands/StartCodeInterpreterSessionCommand";
import {
  StartMemoryExtractionJobCommand,
  StartMemoryExtractionJobCommandInput,
  StartMemoryExtractionJobCommandOutput,
} from "./commands/StartMemoryExtractionJobCommand";
import {
  StopBrowserSessionCommand,
  StopBrowserSessionCommandInput,
  StopBrowserSessionCommandOutput,
} from "./commands/StopBrowserSessionCommand";
import {
  StopCodeInterpreterSessionCommand,
  StopCodeInterpreterSessionCommandInput,
  StopCodeInterpreterSessionCommandOutput,
} from "./commands/StopCodeInterpreterSessionCommand";
import {
  StopRuntimeSessionCommand,
  StopRuntimeSessionCommandInput,
  StopRuntimeSessionCommandOutput,
} from "./commands/StopRuntimeSessionCommand";
import {
  UpdateBrowserStreamCommand,
  UpdateBrowserStreamCommandInput,
  UpdateBrowserStreamCommandOutput,
} from "./commands/UpdateBrowserStreamCommand";

const commands = {
  BatchCreateMemoryRecordsCommand,
  BatchDeleteMemoryRecordsCommand,
  BatchUpdateMemoryRecordsCommand,
  CompleteResourceTokenAuthCommand,
  CreateEventCommand,
  DeleteEventCommand,
  DeleteMemoryRecordCommand,
  EvaluateCommand,
  GetAgentCardCommand,
  GetBrowserSessionCommand,
  GetCodeInterpreterSessionCommand,
  GetEventCommand,
  GetMemoryRecordCommand,
  GetResourceApiKeyCommand,
  GetResourceOauth2TokenCommand,
  GetWorkloadAccessTokenCommand,
  GetWorkloadAccessTokenForJWTCommand,
  GetWorkloadAccessTokenForUserIdCommand,
  InvokeAgentRuntimeCommand,
  InvokeCodeInterpreterCommand,
  ListActorsCommand,
  ListBrowserSessionsCommand,
  ListCodeInterpreterSessionsCommand,
  ListEventsCommand,
  ListMemoryExtractionJobsCommand,
  ListMemoryRecordsCommand,
  ListSessionsCommand,
  RetrieveMemoryRecordsCommand,
  StartBrowserSessionCommand,
  StartCodeInterpreterSessionCommand,
  StartMemoryExtractionJobCommand,
  StopBrowserSessionCommand,
  StopCodeInterpreterSessionCommand,
  StopRuntimeSessionCommand,
  UpdateBrowserStreamCommand,
};

export interface BedrockAgentCore {
  /**
   * @see {@link BatchCreateMemoryRecordsCommand}
   */
  batchCreateMemoryRecords(
    args: BatchCreateMemoryRecordsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchCreateMemoryRecordsCommandOutput>;
  batchCreateMemoryRecords(
    args: BatchCreateMemoryRecordsCommandInput,
    cb: (err: any, data?: BatchCreateMemoryRecordsCommandOutput) => void
  ): void;
  batchCreateMemoryRecords(
    args: BatchCreateMemoryRecordsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchCreateMemoryRecordsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDeleteMemoryRecordsCommand}
   */
  batchDeleteMemoryRecords(
    args: BatchDeleteMemoryRecordsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDeleteMemoryRecordsCommandOutput>;
  batchDeleteMemoryRecords(
    args: BatchDeleteMemoryRecordsCommandInput,
    cb: (err: any, data?: BatchDeleteMemoryRecordsCommandOutput) => void
  ): void;
  batchDeleteMemoryRecords(
    args: BatchDeleteMemoryRecordsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDeleteMemoryRecordsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchUpdateMemoryRecordsCommand}
   */
  batchUpdateMemoryRecords(
    args: BatchUpdateMemoryRecordsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchUpdateMemoryRecordsCommandOutput>;
  batchUpdateMemoryRecords(
    args: BatchUpdateMemoryRecordsCommandInput,
    cb: (err: any, data?: BatchUpdateMemoryRecordsCommandOutput) => void
  ): void;
  batchUpdateMemoryRecords(
    args: BatchUpdateMemoryRecordsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchUpdateMemoryRecordsCommandOutput) => void
  ): void;

  /**
   * @see {@link CompleteResourceTokenAuthCommand}
   */
  completeResourceTokenAuth(
    args: CompleteResourceTokenAuthCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CompleteResourceTokenAuthCommandOutput>;
  completeResourceTokenAuth(
    args: CompleteResourceTokenAuthCommandInput,
    cb: (err: any, data?: CompleteResourceTokenAuthCommandOutput) => void
  ): void;
  completeResourceTokenAuth(
    args: CompleteResourceTokenAuthCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CompleteResourceTokenAuthCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEventCommand}
   */
  createEvent(args: CreateEventCommandInput, options?: __HttpHandlerOptions): Promise<CreateEventCommandOutput>;
  createEvent(args: CreateEventCommandInput, cb: (err: any, data?: CreateEventCommandOutput) => void): void;
  createEvent(
    args: CreateEventCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEventCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEventCommand}
   */
  deleteEvent(args: DeleteEventCommandInput, options?: __HttpHandlerOptions): Promise<DeleteEventCommandOutput>;
  deleteEvent(args: DeleteEventCommandInput, cb: (err: any, data?: DeleteEventCommandOutput) => void): void;
  deleteEvent(
    args: DeleteEventCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEventCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMemoryRecordCommand}
   */
  deleteMemoryRecord(
    args: DeleteMemoryRecordCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMemoryRecordCommandOutput>;
  deleteMemoryRecord(
    args: DeleteMemoryRecordCommandInput,
    cb: (err: any, data?: DeleteMemoryRecordCommandOutput) => void
  ): void;
  deleteMemoryRecord(
    args: DeleteMemoryRecordCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMemoryRecordCommandOutput) => void
  ): void;

  /**
   * @see {@link EvaluateCommand}
   */
  evaluate(args: EvaluateCommandInput, options?: __HttpHandlerOptions): Promise<EvaluateCommandOutput>;
  evaluate(args: EvaluateCommandInput, cb: (err: any, data?: EvaluateCommandOutput) => void): void;
  evaluate(
    args: EvaluateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EvaluateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAgentCardCommand}
   */
  getAgentCard(args: GetAgentCardCommandInput, options?: __HttpHandlerOptions): Promise<GetAgentCardCommandOutput>;
  getAgentCard(args: GetAgentCardCommandInput, cb: (err: any, data?: GetAgentCardCommandOutput) => void): void;
  getAgentCard(
    args: GetAgentCardCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAgentCardCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBrowserSessionCommand}
   */
  getBrowserSession(
    args: GetBrowserSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBrowserSessionCommandOutput>;
  getBrowserSession(
    args: GetBrowserSessionCommandInput,
    cb: (err: any, data?: GetBrowserSessionCommandOutput) => void
  ): void;
  getBrowserSession(
    args: GetBrowserSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBrowserSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCodeInterpreterSessionCommand}
   */
  getCodeInterpreterSession(
    args: GetCodeInterpreterSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCodeInterpreterSessionCommandOutput>;
  getCodeInterpreterSession(
    args: GetCodeInterpreterSessionCommandInput,
    cb: (err: any, data?: GetCodeInterpreterSessionCommandOutput) => void
  ): void;
  getCodeInterpreterSession(
    args: GetCodeInterpreterSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCodeInterpreterSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEventCommand}
   */
  getEvent(args: GetEventCommandInput, options?: __HttpHandlerOptions): Promise<GetEventCommandOutput>;
  getEvent(args: GetEventCommandInput, cb: (err: any, data?: GetEventCommandOutput) => void): void;
  getEvent(
    args: GetEventCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEventCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMemoryRecordCommand}
   */
  getMemoryRecord(
    args: GetMemoryRecordCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMemoryRecordCommandOutput>;
  getMemoryRecord(args: GetMemoryRecordCommandInput, cb: (err: any, data?: GetMemoryRecordCommandOutput) => void): void;
  getMemoryRecord(
    args: GetMemoryRecordCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMemoryRecordCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourceApiKeyCommand}
   */
  getResourceApiKey(
    args: GetResourceApiKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourceApiKeyCommandOutput>;
  getResourceApiKey(
    args: GetResourceApiKeyCommandInput,
    cb: (err: any, data?: GetResourceApiKeyCommandOutput) => void
  ): void;
  getResourceApiKey(
    args: GetResourceApiKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourceApiKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourceOauth2TokenCommand}
   */
  getResourceOauth2Token(
    args: GetResourceOauth2TokenCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourceOauth2TokenCommandOutput>;
  getResourceOauth2Token(
    args: GetResourceOauth2TokenCommandInput,
    cb: (err: any, data?: GetResourceOauth2TokenCommandOutput) => void
  ): void;
  getResourceOauth2Token(
    args: GetResourceOauth2TokenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourceOauth2TokenCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWorkloadAccessTokenCommand}
   */
  getWorkloadAccessToken(
    args: GetWorkloadAccessTokenCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWorkloadAccessTokenCommandOutput>;
  getWorkloadAccessToken(
    args: GetWorkloadAccessTokenCommandInput,
    cb: (err: any, data?: GetWorkloadAccessTokenCommandOutput) => void
  ): void;
  getWorkloadAccessToken(
    args: GetWorkloadAccessTokenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWorkloadAccessTokenCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWorkloadAccessTokenForJWTCommand}
   */
  getWorkloadAccessTokenForJWT(
    args: GetWorkloadAccessTokenForJWTCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWorkloadAccessTokenForJWTCommandOutput>;
  getWorkloadAccessTokenForJWT(
    args: GetWorkloadAccessTokenForJWTCommandInput,
    cb: (err: any, data?: GetWorkloadAccessTokenForJWTCommandOutput) => void
  ): void;
  getWorkloadAccessTokenForJWT(
    args: GetWorkloadAccessTokenForJWTCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWorkloadAccessTokenForJWTCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWorkloadAccessTokenForUserIdCommand}
   */
  getWorkloadAccessTokenForUserId(
    args: GetWorkloadAccessTokenForUserIdCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWorkloadAccessTokenForUserIdCommandOutput>;
  getWorkloadAccessTokenForUserId(
    args: GetWorkloadAccessTokenForUserIdCommandInput,
    cb: (err: any, data?: GetWorkloadAccessTokenForUserIdCommandOutput) => void
  ): void;
  getWorkloadAccessTokenForUserId(
    args: GetWorkloadAccessTokenForUserIdCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWorkloadAccessTokenForUserIdCommandOutput) => void
  ): void;

  /**
   * @see {@link InvokeAgentRuntimeCommand}
   */
  invokeAgentRuntime(
    args: InvokeAgentRuntimeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<InvokeAgentRuntimeCommandOutput>;
  invokeAgentRuntime(
    args: InvokeAgentRuntimeCommandInput,
    cb: (err: any, data?: InvokeAgentRuntimeCommandOutput) => void
  ): void;
  invokeAgentRuntime(
    args: InvokeAgentRuntimeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InvokeAgentRuntimeCommandOutput) => void
  ): void;

  /**
   * @see {@link InvokeCodeInterpreterCommand}
   */
  invokeCodeInterpreter(
    args: InvokeCodeInterpreterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<InvokeCodeInterpreterCommandOutput>;
  invokeCodeInterpreter(
    args: InvokeCodeInterpreterCommandInput,
    cb: (err: any, data?: InvokeCodeInterpreterCommandOutput) => void
  ): void;
  invokeCodeInterpreter(
    args: InvokeCodeInterpreterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InvokeCodeInterpreterCommandOutput) => void
  ): void;

  /**
   * @see {@link ListActorsCommand}
   */
  listActors(args: ListActorsCommandInput, options?: __HttpHandlerOptions): Promise<ListActorsCommandOutput>;
  listActors(args: ListActorsCommandInput, cb: (err: any, data?: ListActorsCommandOutput) => void): void;
  listActors(
    args: ListActorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListActorsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBrowserSessionsCommand}
   */
  listBrowserSessions(
    args: ListBrowserSessionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBrowserSessionsCommandOutput>;
  listBrowserSessions(
    args: ListBrowserSessionsCommandInput,
    cb: (err: any, data?: ListBrowserSessionsCommandOutput) => void
  ): void;
  listBrowserSessions(
    args: ListBrowserSessionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBrowserSessionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCodeInterpreterSessionsCommand}
   */
  listCodeInterpreterSessions(
    args: ListCodeInterpreterSessionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCodeInterpreterSessionsCommandOutput>;
  listCodeInterpreterSessions(
    args: ListCodeInterpreterSessionsCommandInput,
    cb: (err: any, data?: ListCodeInterpreterSessionsCommandOutput) => void
  ): void;
  listCodeInterpreterSessions(
    args: ListCodeInterpreterSessionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCodeInterpreterSessionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEventsCommand}
   */
  listEvents(args: ListEventsCommandInput, options?: __HttpHandlerOptions): Promise<ListEventsCommandOutput>;
  listEvents(args: ListEventsCommandInput, cb: (err: any, data?: ListEventsCommandOutput) => void): void;
  listEvents(
    args: ListEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMemoryExtractionJobsCommand}
   */
  listMemoryExtractionJobs(
    args: ListMemoryExtractionJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMemoryExtractionJobsCommandOutput>;
  listMemoryExtractionJobs(
    args: ListMemoryExtractionJobsCommandInput,
    cb: (err: any, data?: ListMemoryExtractionJobsCommandOutput) => void
  ): void;
  listMemoryExtractionJobs(
    args: ListMemoryExtractionJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMemoryExtractionJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMemoryRecordsCommand}
   */
  listMemoryRecords(
    args: ListMemoryRecordsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMemoryRecordsCommandOutput>;
  listMemoryRecords(
    args: ListMemoryRecordsCommandInput,
    cb: (err: any, data?: ListMemoryRecordsCommandOutput) => void
  ): void;
  listMemoryRecords(
    args: ListMemoryRecordsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMemoryRecordsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSessionsCommand}
   */
  listSessions(args: ListSessionsCommandInput, options?: __HttpHandlerOptions): Promise<ListSessionsCommandOutput>;
  listSessions(args: ListSessionsCommandInput, cb: (err: any, data?: ListSessionsCommandOutput) => void): void;
  listSessions(
    args: ListSessionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSessionsCommandOutput) => void
  ): void;

  /**
   * @see {@link RetrieveMemoryRecordsCommand}
   */
  retrieveMemoryRecords(
    args: RetrieveMemoryRecordsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RetrieveMemoryRecordsCommandOutput>;
  retrieveMemoryRecords(
    args: RetrieveMemoryRecordsCommandInput,
    cb: (err: any, data?: RetrieveMemoryRecordsCommandOutput) => void
  ): void;
  retrieveMemoryRecords(
    args: RetrieveMemoryRecordsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RetrieveMemoryRecordsCommandOutput) => void
  ): void;

  /**
   * @see {@link StartBrowserSessionCommand}
   */
  startBrowserSession(
    args: StartBrowserSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartBrowserSessionCommandOutput>;
  startBrowserSession(
    args: StartBrowserSessionCommandInput,
    cb: (err: any, data?: StartBrowserSessionCommandOutput) => void
  ): void;
  startBrowserSession(
    args: StartBrowserSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartBrowserSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link StartCodeInterpreterSessionCommand}
   */
  startCodeInterpreterSession(
    args: StartCodeInterpreterSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartCodeInterpreterSessionCommandOutput>;
  startCodeInterpreterSession(
    args: StartCodeInterpreterSessionCommandInput,
    cb: (err: any, data?: StartCodeInterpreterSessionCommandOutput) => void
  ): void;
  startCodeInterpreterSession(
    args: StartCodeInterpreterSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartCodeInterpreterSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link StartMemoryExtractionJobCommand}
   */
  startMemoryExtractionJob(
    args: StartMemoryExtractionJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartMemoryExtractionJobCommandOutput>;
  startMemoryExtractionJob(
    args: StartMemoryExtractionJobCommandInput,
    cb: (err: any, data?: StartMemoryExtractionJobCommandOutput) => void
  ): void;
  startMemoryExtractionJob(
    args: StartMemoryExtractionJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartMemoryExtractionJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StopBrowserSessionCommand}
   */
  stopBrowserSession(
    args: StopBrowserSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopBrowserSessionCommandOutput>;
  stopBrowserSession(
    args: StopBrowserSessionCommandInput,
    cb: (err: any, data?: StopBrowserSessionCommandOutput) => void
  ): void;
  stopBrowserSession(
    args: StopBrowserSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopBrowserSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link StopCodeInterpreterSessionCommand}
   */
  stopCodeInterpreterSession(
    args: StopCodeInterpreterSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopCodeInterpreterSessionCommandOutput>;
  stopCodeInterpreterSession(
    args: StopCodeInterpreterSessionCommandInput,
    cb: (err: any, data?: StopCodeInterpreterSessionCommandOutput) => void
  ): void;
  stopCodeInterpreterSession(
    args: StopCodeInterpreterSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopCodeInterpreterSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link StopRuntimeSessionCommand}
   */
  stopRuntimeSession(
    args: StopRuntimeSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopRuntimeSessionCommandOutput>;
  stopRuntimeSession(
    args: StopRuntimeSessionCommandInput,
    cb: (err: any, data?: StopRuntimeSessionCommandOutput) => void
  ): void;
  stopRuntimeSession(
    args: StopRuntimeSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopRuntimeSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateBrowserStreamCommand}
   */
  updateBrowserStream(
    args: UpdateBrowserStreamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBrowserStreamCommandOutput>;
  updateBrowserStream(
    args: UpdateBrowserStreamCommandInput,
    cb: (err: any, data?: UpdateBrowserStreamCommandOutput) => void
  ): void;
  updateBrowserStream(
    args: UpdateBrowserStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBrowserStreamCommandOutput) => void
  ): void;
}

/**
 * <p>Welcome to the Amazon Bedrock AgentCore Data Plane API reference. Data Plane actions process and handle data or workloads within Amazon Web Services services. </p>
 * @public
 */
export class BedrockAgentCore extends BedrockAgentCoreClient implements BedrockAgentCore {}
createAggregatedClient(commands, BedrockAgentCore);
