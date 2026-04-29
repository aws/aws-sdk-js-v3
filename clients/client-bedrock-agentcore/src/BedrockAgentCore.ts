// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import { BedrockAgentCoreClient } from "./BedrockAgentCoreClient";
import {
  type BatchCreateMemoryRecordsCommandInput,
  type BatchCreateMemoryRecordsCommandOutput,
  BatchCreateMemoryRecordsCommand,
} from "./commands/BatchCreateMemoryRecordsCommand";
import {
  type BatchDeleteMemoryRecordsCommandInput,
  type BatchDeleteMemoryRecordsCommandOutput,
  BatchDeleteMemoryRecordsCommand,
} from "./commands/BatchDeleteMemoryRecordsCommand";
import {
  type BatchUpdateMemoryRecordsCommandInput,
  type BatchUpdateMemoryRecordsCommandOutput,
  BatchUpdateMemoryRecordsCommand,
} from "./commands/BatchUpdateMemoryRecordsCommand";
import {
  type CompleteResourceTokenAuthCommandInput,
  type CompleteResourceTokenAuthCommandOutput,
  CompleteResourceTokenAuthCommand,
} from "./commands/CompleteResourceTokenAuthCommand";
import {
  type CreateABTestCommandInput,
  type CreateABTestCommandOutput,
  CreateABTestCommand,
} from "./commands/CreateABTestCommand";
import {
  type CreateEventCommandInput,
  type CreateEventCommandOutput,
  CreateEventCommand,
} from "./commands/CreateEventCommand";
import {
  type DeleteABTestCommandInput,
  type DeleteABTestCommandOutput,
  DeleteABTestCommand,
} from "./commands/DeleteABTestCommand";
import {
  type DeleteBatchEvaluationCommandInput,
  type DeleteBatchEvaluationCommandOutput,
  DeleteBatchEvaluationCommand,
} from "./commands/DeleteBatchEvaluationCommand";
import {
  type DeleteEventCommandInput,
  type DeleteEventCommandOutput,
  DeleteEventCommand,
} from "./commands/DeleteEventCommand";
import {
  type DeleteMemoryRecordCommandInput,
  type DeleteMemoryRecordCommandOutput,
  DeleteMemoryRecordCommand,
} from "./commands/DeleteMemoryRecordCommand";
import {
  type DeleteRecommendationCommandInput,
  type DeleteRecommendationCommandOutput,
  DeleteRecommendationCommand,
} from "./commands/DeleteRecommendationCommand";
import { type EvaluateCommandInput, type EvaluateCommandOutput, EvaluateCommand } from "./commands/EvaluateCommand";
import { type GetABTestCommandInput, type GetABTestCommandOutput, GetABTestCommand } from "./commands/GetABTestCommand";
import {
  type GetAgentCardCommandInput,
  type GetAgentCardCommandOutput,
  GetAgentCardCommand,
} from "./commands/GetAgentCardCommand";
import {
  type GetBatchEvaluationCommandInput,
  type GetBatchEvaluationCommandOutput,
  GetBatchEvaluationCommand,
} from "./commands/GetBatchEvaluationCommand";
import {
  type GetBrowserSessionCommandInput,
  type GetBrowserSessionCommandOutput,
  GetBrowserSessionCommand,
} from "./commands/GetBrowserSessionCommand";
import {
  type GetCodeInterpreterSessionCommandInput,
  type GetCodeInterpreterSessionCommandOutput,
  GetCodeInterpreterSessionCommand,
} from "./commands/GetCodeInterpreterSessionCommand";
import { type GetEventCommandInput, type GetEventCommandOutput, GetEventCommand } from "./commands/GetEventCommand";
import {
  type GetMemoryRecordCommandInput,
  type GetMemoryRecordCommandOutput,
  GetMemoryRecordCommand,
} from "./commands/GetMemoryRecordCommand";
import {
  type GetRecommendationCommandInput,
  type GetRecommendationCommandOutput,
  GetRecommendationCommand,
} from "./commands/GetRecommendationCommand";
import {
  type GetResourceApiKeyCommandInput,
  type GetResourceApiKeyCommandOutput,
  GetResourceApiKeyCommand,
} from "./commands/GetResourceApiKeyCommand";
import {
  type GetResourceOauth2TokenCommandInput,
  type GetResourceOauth2TokenCommandOutput,
  GetResourceOauth2TokenCommand,
} from "./commands/GetResourceOauth2TokenCommand";
import {
  type GetWorkloadAccessTokenCommandInput,
  type GetWorkloadAccessTokenCommandOutput,
  GetWorkloadAccessTokenCommand,
} from "./commands/GetWorkloadAccessTokenCommand";
import {
  type GetWorkloadAccessTokenForJWTCommandInput,
  type GetWorkloadAccessTokenForJWTCommandOutput,
  GetWorkloadAccessTokenForJWTCommand,
} from "./commands/GetWorkloadAccessTokenForJWTCommand";
import {
  type GetWorkloadAccessTokenForUserIdCommandInput,
  type GetWorkloadAccessTokenForUserIdCommandOutput,
  GetWorkloadAccessTokenForUserIdCommand,
} from "./commands/GetWorkloadAccessTokenForUserIdCommand";
import {
  type InvokeAgentRuntimeCommandInput,
  type InvokeAgentRuntimeCommandOutput,
  InvokeAgentRuntimeCommand,
} from "./commands/InvokeAgentRuntimeCommand";
import {
  type InvokeAgentRuntimeCommandCommandInput,
  type InvokeAgentRuntimeCommandCommandOutput,
  InvokeAgentRuntimeCommandCommand,
} from "./commands/InvokeAgentRuntimeCommandCommand";
import {
  type InvokeBrowserCommandInput,
  type InvokeBrowserCommandOutput,
  InvokeBrowserCommand,
} from "./commands/InvokeBrowserCommand";
import {
  type InvokeCodeInterpreterCommandInput,
  type InvokeCodeInterpreterCommandOutput,
  InvokeCodeInterpreterCommand,
} from "./commands/InvokeCodeInterpreterCommand";
import {
  type InvokeHarnessCommandInput,
  type InvokeHarnessCommandOutput,
  InvokeHarnessCommand,
} from "./commands/InvokeHarnessCommand";
import {
  type ListABTestsCommandInput,
  type ListABTestsCommandOutput,
  ListABTestsCommand,
} from "./commands/ListABTestsCommand";
import {
  type ListActorsCommandInput,
  type ListActorsCommandOutput,
  ListActorsCommand,
} from "./commands/ListActorsCommand";
import {
  type ListBatchEvaluationsCommandInput,
  type ListBatchEvaluationsCommandOutput,
  ListBatchEvaluationsCommand,
} from "./commands/ListBatchEvaluationsCommand";
import {
  type ListBrowserSessionsCommandInput,
  type ListBrowserSessionsCommandOutput,
  ListBrowserSessionsCommand,
} from "./commands/ListBrowserSessionsCommand";
import {
  type ListCodeInterpreterSessionsCommandInput,
  type ListCodeInterpreterSessionsCommandOutput,
  ListCodeInterpreterSessionsCommand,
} from "./commands/ListCodeInterpreterSessionsCommand";
import {
  type ListEventsCommandInput,
  type ListEventsCommandOutput,
  ListEventsCommand,
} from "./commands/ListEventsCommand";
import {
  type ListMemoryExtractionJobsCommandInput,
  type ListMemoryExtractionJobsCommandOutput,
  ListMemoryExtractionJobsCommand,
} from "./commands/ListMemoryExtractionJobsCommand";
import {
  type ListMemoryRecordsCommandInput,
  type ListMemoryRecordsCommandOutput,
  ListMemoryRecordsCommand,
} from "./commands/ListMemoryRecordsCommand";
import {
  type ListRecommendationsCommandInput,
  type ListRecommendationsCommandOutput,
  ListRecommendationsCommand,
} from "./commands/ListRecommendationsCommand";
import {
  type ListSessionsCommandInput,
  type ListSessionsCommandOutput,
  ListSessionsCommand,
} from "./commands/ListSessionsCommand";
import {
  type RetrieveMemoryRecordsCommandInput,
  type RetrieveMemoryRecordsCommandOutput,
  RetrieveMemoryRecordsCommand,
} from "./commands/RetrieveMemoryRecordsCommand";
import {
  type SaveBrowserSessionProfileCommandInput,
  type SaveBrowserSessionProfileCommandOutput,
  SaveBrowserSessionProfileCommand,
} from "./commands/SaveBrowserSessionProfileCommand";
import {
  type SearchRegistryRecordsCommandInput,
  type SearchRegistryRecordsCommandOutput,
  SearchRegistryRecordsCommand,
} from "./commands/SearchRegistryRecordsCommand";
import {
  type StartBatchEvaluationCommandInput,
  type StartBatchEvaluationCommandOutput,
  StartBatchEvaluationCommand,
} from "./commands/StartBatchEvaluationCommand";
import {
  type StartBrowserSessionCommandInput,
  type StartBrowserSessionCommandOutput,
  StartBrowserSessionCommand,
} from "./commands/StartBrowserSessionCommand";
import {
  type StartCodeInterpreterSessionCommandInput,
  type StartCodeInterpreterSessionCommandOutput,
  StartCodeInterpreterSessionCommand,
} from "./commands/StartCodeInterpreterSessionCommand";
import {
  type StartMemoryExtractionJobCommandInput,
  type StartMemoryExtractionJobCommandOutput,
  StartMemoryExtractionJobCommand,
} from "./commands/StartMemoryExtractionJobCommand";
import {
  type StartRecommendationCommandInput,
  type StartRecommendationCommandOutput,
  StartRecommendationCommand,
} from "./commands/StartRecommendationCommand";
import {
  type StopBatchEvaluationCommandInput,
  type StopBatchEvaluationCommandOutput,
  StopBatchEvaluationCommand,
} from "./commands/StopBatchEvaluationCommand";
import {
  type StopBrowserSessionCommandInput,
  type StopBrowserSessionCommandOutput,
  StopBrowserSessionCommand,
} from "./commands/StopBrowserSessionCommand";
import {
  type StopCodeInterpreterSessionCommandInput,
  type StopCodeInterpreterSessionCommandOutput,
  StopCodeInterpreterSessionCommand,
} from "./commands/StopCodeInterpreterSessionCommand";
import {
  type StopRuntimeSessionCommandInput,
  type StopRuntimeSessionCommandOutput,
  StopRuntimeSessionCommand,
} from "./commands/StopRuntimeSessionCommand";
import {
  type UpdateABTestCommandInput,
  type UpdateABTestCommandOutput,
  UpdateABTestCommand,
} from "./commands/UpdateABTestCommand";
import {
  type UpdateBrowserStreamCommandInput,
  type UpdateBrowserStreamCommandOutput,
  UpdateBrowserStreamCommand,
} from "./commands/UpdateBrowserStreamCommand";
import { paginateListABTests } from "./pagination/ListABTestsPaginator";
import { paginateListActors } from "./pagination/ListActorsPaginator";
import { paginateListBatchEvaluations } from "./pagination/ListBatchEvaluationsPaginator";
import { paginateListEvents } from "./pagination/ListEventsPaginator";
import { paginateListMemoryExtractionJobs } from "./pagination/ListMemoryExtractionJobsPaginator";
import { paginateListMemoryRecords } from "./pagination/ListMemoryRecordsPaginator";
import { paginateListRecommendations } from "./pagination/ListRecommendationsPaginator";
import { paginateListSessions } from "./pagination/ListSessionsPaginator";
import { paginateRetrieveMemoryRecords } from "./pagination/RetrieveMemoryRecordsPaginator";

const commands = {
  BatchCreateMemoryRecordsCommand,
  BatchDeleteMemoryRecordsCommand,
  BatchUpdateMemoryRecordsCommand,
  CompleteResourceTokenAuthCommand,
  CreateABTestCommand,
  CreateEventCommand,
  DeleteABTestCommand,
  DeleteBatchEvaluationCommand,
  DeleteEventCommand,
  DeleteMemoryRecordCommand,
  DeleteRecommendationCommand,
  EvaluateCommand,
  GetABTestCommand,
  GetAgentCardCommand,
  GetBatchEvaluationCommand,
  GetBrowserSessionCommand,
  GetCodeInterpreterSessionCommand,
  GetEventCommand,
  GetMemoryRecordCommand,
  GetRecommendationCommand,
  GetResourceApiKeyCommand,
  GetResourceOauth2TokenCommand,
  GetWorkloadAccessTokenCommand,
  GetWorkloadAccessTokenForJWTCommand,
  GetWorkloadAccessTokenForUserIdCommand,
  InvokeAgentRuntimeCommand,
  InvokeAgentRuntimeCommandCommand,
  InvokeBrowserCommand,
  InvokeCodeInterpreterCommand,
  InvokeHarnessCommand,
  ListABTestsCommand,
  ListActorsCommand,
  ListBatchEvaluationsCommand,
  ListBrowserSessionsCommand,
  ListCodeInterpreterSessionsCommand,
  ListEventsCommand,
  ListMemoryExtractionJobsCommand,
  ListMemoryRecordsCommand,
  ListRecommendationsCommand,
  ListSessionsCommand,
  RetrieveMemoryRecordsCommand,
  SaveBrowserSessionProfileCommand,
  SearchRegistryRecordsCommand,
  StartBatchEvaluationCommand,
  StartBrowserSessionCommand,
  StartCodeInterpreterSessionCommand,
  StartMemoryExtractionJobCommand,
  StartRecommendationCommand,
  StopBatchEvaluationCommand,
  StopBrowserSessionCommand,
  StopCodeInterpreterSessionCommand,
  StopRuntimeSessionCommand,
  UpdateABTestCommand,
  UpdateBrowserStreamCommand,
};
const paginators = {
  paginateListABTests,
  paginateListActors,
  paginateListBatchEvaluations,
  paginateListEvents,
  paginateListMemoryExtractionJobs,
  paginateListMemoryRecords,
  paginateListRecommendations,
  paginateListSessions,
  paginateRetrieveMemoryRecords,
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
   * @see {@link CreateABTestCommand}
   */
  createABTest(
    args: CreateABTestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateABTestCommandOutput>;
  createABTest(
    args: CreateABTestCommandInput,
    cb: (err: any, data?: CreateABTestCommandOutput) => void
  ): void;
  createABTest(
    args: CreateABTestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateABTestCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEventCommand}
   */
  createEvent(
    args: CreateEventCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEventCommandOutput>;
  createEvent(
    args: CreateEventCommandInput,
    cb: (err: any, data?: CreateEventCommandOutput) => void
  ): void;
  createEvent(
    args: CreateEventCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEventCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteABTestCommand}
   */
  deleteABTest(
    args: DeleteABTestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteABTestCommandOutput>;
  deleteABTest(
    args: DeleteABTestCommandInput,
    cb: (err: any, data?: DeleteABTestCommandOutput) => void
  ): void;
  deleteABTest(
    args: DeleteABTestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteABTestCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBatchEvaluationCommand}
   */
  deleteBatchEvaluation(
    args: DeleteBatchEvaluationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBatchEvaluationCommandOutput>;
  deleteBatchEvaluation(
    args: DeleteBatchEvaluationCommandInput,
    cb: (err: any, data?: DeleteBatchEvaluationCommandOutput) => void
  ): void;
  deleteBatchEvaluation(
    args: DeleteBatchEvaluationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBatchEvaluationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEventCommand}
   */
  deleteEvent(
    args: DeleteEventCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEventCommandOutput>;
  deleteEvent(
    args: DeleteEventCommandInput,
    cb: (err: any, data?: DeleteEventCommandOutput) => void
  ): void;
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
   * @see {@link DeleteRecommendationCommand}
   */
  deleteRecommendation(
    args: DeleteRecommendationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRecommendationCommandOutput>;
  deleteRecommendation(
    args: DeleteRecommendationCommandInput,
    cb: (err: any, data?: DeleteRecommendationCommandOutput) => void
  ): void;
  deleteRecommendation(
    args: DeleteRecommendationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRecommendationCommandOutput) => void
  ): void;

  /**
   * @see {@link EvaluateCommand}
   */
  evaluate(
    args: EvaluateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EvaluateCommandOutput>;
  evaluate(
    args: EvaluateCommandInput,
    cb: (err: any, data?: EvaluateCommandOutput) => void
  ): void;
  evaluate(
    args: EvaluateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EvaluateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetABTestCommand}
   */
  getABTest(
    args: GetABTestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetABTestCommandOutput>;
  getABTest(
    args: GetABTestCommandInput,
    cb: (err: any, data?: GetABTestCommandOutput) => void
  ): void;
  getABTest(
    args: GetABTestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetABTestCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAgentCardCommand}
   */
  getAgentCard(
    args: GetAgentCardCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAgentCardCommandOutput>;
  getAgentCard(
    args: GetAgentCardCommandInput,
    cb: (err: any, data?: GetAgentCardCommandOutput) => void
  ): void;
  getAgentCard(
    args: GetAgentCardCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAgentCardCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBatchEvaluationCommand}
   */
  getBatchEvaluation(
    args: GetBatchEvaluationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBatchEvaluationCommandOutput>;
  getBatchEvaluation(
    args: GetBatchEvaluationCommandInput,
    cb: (err: any, data?: GetBatchEvaluationCommandOutput) => void
  ): void;
  getBatchEvaluation(
    args: GetBatchEvaluationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBatchEvaluationCommandOutput) => void
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
  getEvent(
    args: GetEventCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEventCommandOutput>;
  getEvent(
    args: GetEventCommandInput,
    cb: (err: any, data?: GetEventCommandOutput) => void
  ): void;
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
  getMemoryRecord(
    args: GetMemoryRecordCommandInput,
    cb: (err: any, data?: GetMemoryRecordCommandOutput) => void
  ): void;
  getMemoryRecord(
    args: GetMemoryRecordCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMemoryRecordCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRecommendationCommand}
   */
  getRecommendation(
    args: GetRecommendationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRecommendationCommandOutput>;
  getRecommendation(
    args: GetRecommendationCommandInput,
    cb: (err: any, data?: GetRecommendationCommandOutput) => void
  ): void;
  getRecommendation(
    args: GetRecommendationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRecommendationCommandOutput) => void
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
   * @see {@link InvokeAgentRuntimeCommandCommand}
   */
  invokeAgentRuntimeCommand(
    args: InvokeAgentRuntimeCommandCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<InvokeAgentRuntimeCommandCommandOutput>;
  invokeAgentRuntimeCommand(
    args: InvokeAgentRuntimeCommandCommandInput,
    cb: (err: any, data?: InvokeAgentRuntimeCommandCommandOutput) => void
  ): void;
  invokeAgentRuntimeCommand(
    args: InvokeAgentRuntimeCommandCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InvokeAgentRuntimeCommandCommandOutput) => void
  ): void;

  /**
   * @see {@link InvokeBrowserCommand}
   */
  invokeBrowser(
    args: InvokeBrowserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<InvokeBrowserCommandOutput>;
  invokeBrowser(
    args: InvokeBrowserCommandInput,
    cb: (err: any, data?: InvokeBrowserCommandOutput) => void
  ): void;
  invokeBrowser(
    args: InvokeBrowserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InvokeBrowserCommandOutput) => void
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
   * @see {@link InvokeHarnessCommand}
   */
  invokeHarness(
    args: InvokeHarnessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<InvokeHarnessCommandOutput>;
  invokeHarness(
    args: InvokeHarnessCommandInput,
    cb: (err: any, data?: InvokeHarnessCommandOutput) => void
  ): void;
  invokeHarness(
    args: InvokeHarnessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InvokeHarnessCommandOutput) => void
  ): void;

  /**
   * @see {@link ListABTestsCommand}
   */
  listABTests(): Promise<ListABTestsCommandOutput>;
  listABTests(
    args: ListABTestsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListABTestsCommandOutput>;
  listABTests(
    args: ListABTestsCommandInput,
    cb: (err: any, data?: ListABTestsCommandOutput) => void
  ): void;
  listABTests(
    args: ListABTestsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListABTestsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListActorsCommand}
   */
  listActors(
    args: ListActorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListActorsCommandOutput>;
  listActors(
    args: ListActorsCommandInput,
    cb: (err: any, data?: ListActorsCommandOutput) => void
  ): void;
  listActors(
    args: ListActorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListActorsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBatchEvaluationsCommand}
   */
  listBatchEvaluations(): Promise<ListBatchEvaluationsCommandOutput>;
  listBatchEvaluations(
    args: ListBatchEvaluationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBatchEvaluationsCommandOutput>;
  listBatchEvaluations(
    args: ListBatchEvaluationsCommandInput,
    cb: (err: any, data?: ListBatchEvaluationsCommandOutput) => void
  ): void;
  listBatchEvaluations(
    args: ListBatchEvaluationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBatchEvaluationsCommandOutput) => void
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
  listEvents(
    args: ListEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEventsCommandOutput>;
  listEvents(
    args: ListEventsCommandInput,
    cb: (err: any, data?: ListEventsCommandOutput) => void
  ): void;
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
   * @see {@link ListRecommendationsCommand}
   */
  listRecommendations(): Promise<ListRecommendationsCommandOutput>;
  listRecommendations(
    args: ListRecommendationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRecommendationsCommandOutput>;
  listRecommendations(
    args: ListRecommendationsCommandInput,
    cb: (err: any, data?: ListRecommendationsCommandOutput) => void
  ): void;
  listRecommendations(
    args: ListRecommendationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRecommendationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSessionsCommand}
   */
  listSessions(
    args: ListSessionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSessionsCommandOutput>;
  listSessions(
    args: ListSessionsCommandInput,
    cb: (err: any, data?: ListSessionsCommandOutput) => void
  ): void;
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
   * @see {@link SaveBrowserSessionProfileCommand}
   */
  saveBrowserSessionProfile(
    args: SaveBrowserSessionProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SaveBrowserSessionProfileCommandOutput>;
  saveBrowserSessionProfile(
    args: SaveBrowserSessionProfileCommandInput,
    cb: (err: any, data?: SaveBrowserSessionProfileCommandOutput) => void
  ): void;
  saveBrowserSessionProfile(
    args: SaveBrowserSessionProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SaveBrowserSessionProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchRegistryRecordsCommand}
   */
  searchRegistryRecords(
    args: SearchRegistryRecordsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchRegistryRecordsCommandOutput>;
  searchRegistryRecords(
    args: SearchRegistryRecordsCommandInput,
    cb: (err: any, data?: SearchRegistryRecordsCommandOutput) => void
  ): void;
  searchRegistryRecords(
    args: SearchRegistryRecordsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchRegistryRecordsCommandOutput) => void
  ): void;

  /**
   * @see {@link StartBatchEvaluationCommand}
   */
  startBatchEvaluation(
    args: StartBatchEvaluationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartBatchEvaluationCommandOutput>;
  startBatchEvaluation(
    args: StartBatchEvaluationCommandInput,
    cb: (err: any, data?: StartBatchEvaluationCommandOutput) => void
  ): void;
  startBatchEvaluation(
    args: StartBatchEvaluationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartBatchEvaluationCommandOutput) => void
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
   * @see {@link StartRecommendationCommand}
   */
  startRecommendation(
    args: StartRecommendationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartRecommendationCommandOutput>;
  startRecommendation(
    args: StartRecommendationCommandInput,
    cb: (err: any, data?: StartRecommendationCommandOutput) => void
  ): void;
  startRecommendation(
    args: StartRecommendationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartRecommendationCommandOutput) => void
  ): void;

  /**
   * @see {@link StopBatchEvaluationCommand}
   */
  stopBatchEvaluation(
    args: StopBatchEvaluationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopBatchEvaluationCommandOutput>;
  stopBatchEvaluation(
    args: StopBatchEvaluationCommandInput,
    cb: (err: any, data?: StopBatchEvaluationCommandOutput) => void
  ): void;
  stopBatchEvaluation(
    args: StopBatchEvaluationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopBatchEvaluationCommandOutput) => void
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
   * @see {@link UpdateABTestCommand}
   */
  updateABTest(
    args: UpdateABTestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateABTestCommandOutput>;
  updateABTest(
    args: UpdateABTestCommandInput,
    cb: (err: any, data?: UpdateABTestCommandOutput) => void
  ): void;
  updateABTest(
    args: UpdateABTestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateABTestCommandOutput) => void
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

  /**
   * @see {@link ListABTestsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListABTestsCommandOutput}.
   */
  paginateListABTests(
    args?: ListABTestsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListABTestsCommandOutput>;

  /**
   * @see {@link ListActorsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListActorsCommandOutput}.
   */
  paginateListActors(
    args: ListActorsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListActorsCommandOutput>;

  /**
   * @see {@link ListBatchEvaluationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListBatchEvaluationsCommandOutput}.
   */
  paginateListBatchEvaluations(
    args?: ListBatchEvaluationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListBatchEvaluationsCommandOutput>;

  /**
   * @see {@link ListEventsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListEventsCommandOutput}.
   */
  paginateListEvents(
    args: ListEventsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListEventsCommandOutput>;

  /**
   * @see {@link ListMemoryExtractionJobsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListMemoryExtractionJobsCommandOutput}.
   */
  paginateListMemoryExtractionJobs(
    args: ListMemoryExtractionJobsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListMemoryExtractionJobsCommandOutput>;

  /**
   * @see {@link ListMemoryRecordsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListMemoryRecordsCommandOutput}.
   */
  paginateListMemoryRecords(
    args: ListMemoryRecordsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListMemoryRecordsCommandOutput>;

  /**
   * @see {@link ListRecommendationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRecommendationsCommandOutput}.
   */
  paginateListRecommendations(
    args?: ListRecommendationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRecommendationsCommandOutput>;

  /**
   * @see {@link ListSessionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSessionsCommandOutput}.
   */
  paginateListSessions(
    args: ListSessionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSessionsCommandOutput>;

  /**
   * @see {@link RetrieveMemoryRecordsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link RetrieveMemoryRecordsCommandOutput}.
   */
  paginateRetrieveMemoryRecords(
    args: RetrieveMemoryRecordsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<RetrieveMemoryRecordsCommandOutput>;
}

/**
 * <p>Welcome to the Amazon Bedrock AgentCore Data Plane API reference. Data Plane actions process and handle data or workloads within Amazon Web Services services. </p>
 * @public
 */
export class BedrockAgentCore extends BedrockAgentCoreClient implements BedrockAgentCore {}
createAggregatedClient(commands, BedrockAgentCore, { paginators });
