// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { CodePipelineClient, CodePipelineClientConfig } from "./CodePipelineClient";
import {
  AcknowledgeJobCommand,
  AcknowledgeJobCommandInput,
  AcknowledgeJobCommandOutput,
} from "./commands/AcknowledgeJobCommand";
import {
  AcknowledgeThirdPartyJobCommand,
  AcknowledgeThirdPartyJobCommandInput,
  AcknowledgeThirdPartyJobCommandOutput,
} from "./commands/AcknowledgeThirdPartyJobCommand";
import {
  CreateCustomActionTypeCommand,
  CreateCustomActionTypeCommandInput,
  CreateCustomActionTypeCommandOutput,
} from "./commands/CreateCustomActionTypeCommand";
import {
  CreatePipelineCommand,
  CreatePipelineCommandInput,
  CreatePipelineCommandOutput,
} from "./commands/CreatePipelineCommand";
import {
  DeleteCustomActionTypeCommand,
  DeleteCustomActionTypeCommandInput,
  DeleteCustomActionTypeCommandOutput,
} from "./commands/DeleteCustomActionTypeCommand";
import {
  DeletePipelineCommand,
  DeletePipelineCommandInput,
  DeletePipelineCommandOutput,
} from "./commands/DeletePipelineCommand";
import {
  DeleteWebhookCommand,
  DeleteWebhookCommandInput,
  DeleteWebhookCommandOutput,
} from "./commands/DeleteWebhookCommand";
import {
  DeregisterWebhookWithThirdPartyCommand,
  DeregisterWebhookWithThirdPartyCommandInput,
  DeregisterWebhookWithThirdPartyCommandOutput,
} from "./commands/DeregisterWebhookWithThirdPartyCommand";
import {
  DisableStageTransitionCommand,
  DisableStageTransitionCommandInput,
  DisableStageTransitionCommandOutput,
} from "./commands/DisableStageTransitionCommand";
import {
  EnableStageTransitionCommand,
  EnableStageTransitionCommandInput,
  EnableStageTransitionCommandOutput,
} from "./commands/EnableStageTransitionCommand";
import {
  GetActionTypeCommand,
  GetActionTypeCommandInput,
  GetActionTypeCommandOutput,
} from "./commands/GetActionTypeCommand";
import {
  GetJobDetailsCommand,
  GetJobDetailsCommandInput,
  GetJobDetailsCommandOutput,
} from "./commands/GetJobDetailsCommand";
import { GetPipelineCommand, GetPipelineCommandInput, GetPipelineCommandOutput } from "./commands/GetPipelineCommand";
import {
  GetPipelineExecutionCommand,
  GetPipelineExecutionCommandInput,
  GetPipelineExecutionCommandOutput,
} from "./commands/GetPipelineExecutionCommand";
import {
  GetPipelineStateCommand,
  GetPipelineStateCommandInput,
  GetPipelineStateCommandOutput,
} from "./commands/GetPipelineStateCommand";
import {
  GetThirdPartyJobDetailsCommand,
  GetThirdPartyJobDetailsCommandInput,
  GetThirdPartyJobDetailsCommandOutput,
} from "./commands/GetThirdPartyJobDetailsCommand";
import {
  ListActionExecutionsCommand,
  ListActionExecutionsCommandInput,
  ListActionExecutionsCommandOutput,
} from "./commands/ListActionExecutionsCommand";
import {
  ListActionTypesCommand,
  ListActionTypesCommandInput,
  ListActionTypesCommandOutput,
} from "./commands/ListActionTypesCommand";
import {
  ListPipelineExecutionsCommand,
  ListPipelineExecutionsCommandInput,
  ListPipelineExecutionsCommandOutput,
} from "./commands/ListPipelineExecutionsCommand";
import {
  ListPipelinesCommand,
  ListPipelinesCommandInput,
  ListPipelinesCommandOutput,
} from "./commands/ListPipelinesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListWebhooksCommand,
  ListWebhooksCommandInput,
  ListWebhooksCommandOutput,
} from "./commands/ListWebhooksCommand";
import { PollForJobsCommand, PollForJobsCommandInput, PollForJobsCommandOutput } from "./commands/PollForJobsCommand";
import {
  PollForThirdPartyJobsCommand,
  PollForThirdPartyJobsCommandInput,
  PollForThirdPartyJobsCommandOutput,
} from "./commands/PollForThirdPartyJobsCommand";
import {
  PutActionRevisionCommand,
  PutActionRevisionCommandInput,
  PutActionRevisionCommandOutput,
} from "./commands/PutActionRevisionCommand";
import {
  PutApprovalResultCommand,
  PutApprovalResultCommandInput,
  PutApprovalResultCommandOutput,
} from "./commands/PutApprovalResultCommand";
import {
  PutJobFailureResultCommand,
  PutJobFailureResultCommandInput,
  PutJobFailureResultCommandOutput,
} from "./commands/PutJobFailureResultCommand";
import {
  PutJobSuccessResultCommand,
  PutJobSuccessResultCommandInput,
  PutJobSuccessResultCommandOutput,
} from "./commands/PutJobSuccessResultCommand";
import {
  PutThirdPartyJobFailureResultCommand,
  PutThirdPartyJobFailureResultCommandInput,
  PutThirdPartyJobFailureResultCommandOutput,
} from "./commands/PutThirdPartyJobFailureResultCommand";
import {
  PutThirdPartyJobSuccessResultCommand,
  PutThirdPartyJobSuccessResultCommandInput,
  PutThirdPartyJobSuccessResultCommandOutput,
} from "./commands/PutThirdPartyJobSuccessResultCommand";
import { PutWebhookCommand, PutWebhookCommandInput, PutWebhookCommandOutput } from "./commands/PutWebhookCommand";
import {
  RegisterWebhookWithThirdPartyCommand,
  RegisterWebhookWithThirdPartyCommandInput,
  RegisterWebhookWithThirdPartyCommandOutput,
} from "./commands/RegisterWebhookWithThirdPartyCommand";
import {
  RetryStageExecutionCommand,
  RetryStageExecutionCommandInput,
  RetryStageExecutionCommandOutput,
} from "./commands/RetryStageExecutionCommand";
import {
  StartPipelineExecutionCommand,
  StartPipelineExecutionCommandInput,
  StartPipelineExecutionCommandOutput,
} from "./commands/StartPipelineExecutionCommand";
import {
  StopPipelineExecutionCommand,
  StopPipelineExecutionCommandInput,
  StopPipelineExecutionCommandOutput,
} from "./commands/StopPipelineExecutionCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateActionTypeCommand,
  UpdateActionTypeCommandInput,
  UpdateActionTypeCommandOutput,
} from "./commands/UpdateActionTypeCommand";
import {
  UpdatePipelineCommand,
  UpdatePipelineCommandInput,
  UpdatePipelineCommandOutput,
} from "./commands/UpdatePipelineCommand";

const commands = {
  AcknowledgeJobCommand,
  AcknowledgeThirdPartyJobCommand,
  CreateCustomActionTypeCommand,
  CreatePipelineCommand,
  DeleteCustomActionTypeCommand,
  DeletePipelineCommand,
  DeleteWebhookCommand,
  DeregisterWebhookWithThirdPartyCommand,
  DisableStageTransitionCommand,
  EnableStageTransitionCommand,
  GetActionTypeCommand,
  GetJobDetailsCommand,
  GetPipelineCommand,
  GetPipelineExecutionCommand,
  GetPipelineStateCommand,
  GetThirdPartyJobDetailsCommand,
  ListActionExecutionsCommand,
  ListActionTypesCommand,
  ListPipelineExecutionsCommand,
  ListPipelinesCommand,
  ListTagsForResourceCommand,
  ListWebhooksCommand,
  PollForJobsCommand,
  PollForThirdPartyJobsCommand,
  PutActionRevisionCommand,
  PutApprovalResultCommand,
  PutJobFailureResultCommand,
  PutJobSuccessResultCommand,
  PutThirdPartyJobFailureResultCommand,
  PutThirdPartyJobSuccessResultCommand,
  PutWebhookCommand,
  RegisterWebhookWithThirdPartyCommand,
  RetryStageExecutionCommand,
  StartPipelineExecutionCommand,
  StopPipelineExecutionCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateActionTypeCommand,
  UpdatePipelineCommand,
};

export interface CodePipeline {
  /**
   * @see {@link AcknowledgeJobCommand}
   */
  acknowledgeJob(
    args: AcknowledgeJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AcknowledgeJobCommandOutput>;
  acknowledgeJob(args: AcknowledgeJobCommandInput, cb: (err: any, data?: AcknowledgeJobCommandOutput) => void): void;
  acknowledgeJob(
    args: AcknowledgeJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcknowledgeJobCommandOutput) => void
  ): void;

  /**
   * @see {@link AcknowledgeThirdPartyJobCommand}
   */
  acknowledgeThirdPartyJob(
    args: AcknowledgeThirdPartyJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AcknowledgeThirdPartyJobCommandOutput>;
  acknowledgeThirdPartyJob(
    args: AcknowledgeThirdPartyJobCommandInput,
    cb: (err: any, data?: AcknowledgeThirdPartyJobCommandOutput) => void
  ): void;
  acknowledgeThirdPartyJob(
    args: AcknowledgeThirdPartyJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcknowledgeThirdPartyJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCustomActionTypeCommand}
   */
  createCustomActionType(
    args: CreateCustomActionTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCustomActionTypeCommandOutput>;
  createCustomActionType(
    args: CreateCustomActionTypeCommandInput,
    cb: (err: any, data?: CreateCustomActionTypeCommandOutput) => void
  ): void;
  createCustomActionType(
    args: CreateCustomActionTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCustomActionTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePipelineCommand}
   */
  createPipeline(
    args: CreatePipelineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePipelineCommandOutput>;
  createPipeline(args: CreatePipelineCommandInput, cb: (err: any, data?: CreatePipelineCommandOutput) => void): void;
  createPipeline(
    args: CreatePipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePipelineCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCustomActionTypeCommand}
   */
  deleteCustomActionType(
    args: DeleteCustomActionTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCustomActionTypeCommandOutput>;
  deleteCustomActionType(
    args: DeleteCustomActionTypeCommandInput,
    cb: (err: any, data?: DeleteCustomActionTypeCommandOutput) => void
  ): void;
  deleteCustomActionType(
    args: DeleteCustomActionTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCustomActionTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePipelineCommand}
   */
  deletePipeline(
    args: DeletePipelineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePipelineCommandOutput>;
  deletePipeline(args: DeletePipelineCommandInput, cb: (err: any, data?: DeletePipelineCommandOutput) => void): void;
  deletePipeline(
    args: DeletePipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePipelineCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWebhookCommand}
   */
  deleteWebhook(args: DeleteWebhookCommandInput, options?: __HttpHandlerOptions): Promise<DeleteWebhookCommandOutput>;
  deleteWebhook(args: DeleteWebhookCommandInput, cb: (err: any, data?: DeleteWebhookCommandOutput) => void): void;
  deleteWebhook(
    args: DeleteWebhookCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWebhookCommandOutput) => void
  ): void;

  /**
   * @see {@link DeregisterWebhookWithThirdPartyCommand}
   */
  deregisterWebhookWithThirdParty(
    args: DeregisterWebhookWithThirdPartyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterWebhookWithThirdPartyCommandOutput>;
  deregisterWebhookWithThirdParty(
    args: DeregisterWebhookWithThirdPartyCommandInput,
    cb: (err: any, data?: DeregisterWebhookWithThirdPartyCommandOutput) => void
  ): void;
  deregisterWebhookWithThirdParty(
    args: DeregisterWebhookWithThirdPartyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterWebhookWithThirdPartyCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableStageTransitionCommand}
   */
  disableStageTransition(
    args: DisableStageTransitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableStageTransitionCommandOutput>;
  disableStageTransition(
    args: DisableStageTransitionCommandInput,
    cb: (err: any, data?: DisableStageTransitionCommandOutput) => void
  ): void;
  disableStageTransition(
    args: DisableStageTransitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableStageTransitionCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableStageTransitionCommand}
   */
  enableStageTransition(
    args: EnableStageTransitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableStageTransitionCommandOutput>;
  enableStageTransition(
    args: EnableStageTransitionCommandInput,
    cb: (err: any, data?: EnableStageTransitionCommandOutput) => void
  ): void;
  enableStageTransition(
    args: EnableStageTransitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableStageTransitionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetActionTypeCommand}
   */
  getActionType(args: GetActionTypeCommandInput, options?: __HttpHandlerOptions): Promise<GetActionTypeCommandOutput>;
  getActionType(args: GetActionTypeCommandInput, cb: (err: any, data?: GetActionTypeCommandOutput) => void): void;
  getActionType(
    args: GetActionTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetActionTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link GetJobDetailsCommand}
   */
  getJobDetails(args: GetJobDetailsCommandInput, options?: __HttpHandlerOptions): Promise<GetJobDetailsCommandOutput>;
  getJobDetails(args: GetJobDetailsCommandInput, cb: (err: any, data?: GetJobDetailsCommandOutput) => void): void;
  getJobDetails(
    args: GetJobDetailsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetJobDetailsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPipelineCommand}
   */
  getPipeline(args: GetPipelineCommandInput, options?: __HttpHandlerOptions): Promise<GetPipelineCommandOutput>;
  getPipeline(args: GetPipelineCommandInput, cb: (err: any, data?: GetPipelineCommandOutput) => void): void;
  getPipeline(
    args: GetPipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPipelineCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPipelineExecutionCommand}
   */
  getPipelineExecution(
    args: GetPipelineExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPipelineExecutionCommandOutput>;
  getPipelineExecution(
    args: GetPipelineExecutionCommandInput,
    cb: (err: any, data?: GetPipelineExecutionCommandOutput) => void
  ): void;
  getPipelineExecution(
    args: GetPipelineExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPipelineExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPipelineStateCommand}
   */
  getPipelineState(
    args: GetPipelineStateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPipelineStateCommandOutput>;
  getPipelineState(
    args: GetPipelineStateCommandInput,
    cb: (err: any, data?: GetPipelineStateCommandOutput) => void
  ): void;
  getPipelineState(
    args: GetPipelineStateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPipelineStateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetThirdPartyJobDetailsCommand}
   */
  getThirdPartyJobDetails(
    args: GetThirdPartyJobDetailsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetThirdPartyJobDetailsCommandOutput>;
  getThirdPartyJobDetails(
    args: GetThirdPartyJobDetailsCommandInput,
    cb: (err: any, data?: GetThirdPartyJobDetailsCommandOutput) => void
  ): void;
  getThirdPartyJobDetails(
    args: GetThirdPartyJobDetailsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetThirdPartyJobDetailsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListActionExecutionsCommand}
   */
  listActionExecutions(
    args: ListActionExecutionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListActionExecutionsCommandOutput>;
  listActionExecutions(
    args: ListActionExecutionsCommandInput,
    cb: (err: any, data?: ListActionExecutionsCommandOutput) => void
  ): void;
  listActionExecutions(
    args: ListActionExecutionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListActionExecutionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListActionTypesCommand}
   */
  listActionTypes(
    args: ListActionTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListActionTypesCommandOutput>;
  listActionTypes(args: ListActionTypesCommandInput, cb: (err: any, data?: ListActionTypesCommandOutput) => void): void;
  listActionTypes(
    args: ListActionTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListActionTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPipelineExecutionsCommand}
   */
  listPipelineExecutions(
    args: ListPipelineExecutionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPipelineExecutionsCommandOutput>;
  listPipelineExecutions(
    args: ListPipelineExecutionsCommandInput,
    cb: (err: any, data?: ListPipelineExecutionsCommandOutput) => void
  ): void;
  listPipelineExecutions(
    args: ListPipelineExecutionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPipelineExecutionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPipelinesCommand}
   */
  listPipelines(args: ListPipelinesCommandInput, options?: __HttpHandlerOptions): Promise<ListPipelinesCommandOutput>;
  listPipelines(args: ListPipelinesCommandInput, cb: (err: any, data?: ListPipelinesCommandOutput) => void): void;
  listPipelines(
    args: ListPipelinesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPipelinesCommandOutput) => void
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
   * @see {@link ListWebhooksCommand}
   */
  listWebhooks(args: ListWebhooksCommandInput, options?: __HttpHandlerOptions): Promise<ListWebhooksCommandOutput>;
  listWebhooks(args: ListWebhooksCommandInput, cb: (err: any, data?: ListWebhooksCommandOutput) => void): void;
  listWebhooks(
    args: ListWebhooksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWebhooksCommandOutput) => void
  ): void;

  /**
   * @see {@link PollForJobsCommand}
   */
  pollForJobs(args: PollForJobsCommandInput, options?: __HttpHandlerOptions): Promise<PollForJobsCommandOutput>;
  pollForJobs(args: PollForJobsCommandInput, cb: (err: any, data?: PollForJobsCommandOutput) => void): void;
  pollForJobs(
    args: PollForJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PollForJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link PollForThirdPartyJobsCommand}
   */
  pollForThirdPartyJobs(
    args: PollForThirdPartyJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PollForThirdPartyJobsCommandOutput>;
  pollForThirdPartyJobs(
    args: PollForThirdPartyJobsCommandInput,
    cb: (err: any, data?: PollForThirdPartyJobsCommandOutput) => void
  ): void;
  pollForThirdPartyJobs(
    args: PollForThirdPartyJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PollForThirdPartyJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutActionRevisionCommand}
   */
  putActionRevision(
    args: PutActionRevisionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutActionRevisionCommandOutput>;
  putActionRevision(
    args: PutActionRevisionCommandInput,
    cb: (err: any, data?: PutActionRevisionCommandOutput) => void
  ): void;
  putActionRevision(
    args: PutActionRevisionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutActionRevisionCommandOutput) => void
  ): void;

  /**
   * @see {@link PutApprovalResultCommand}
   */
  putApprovalResult(
    args: PutApprovalResultCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutApprovalResultCommandOutput>;
  putApprovalResult(
    args: PutApprovalResultCommandInput,
    cb: (err: any, data?: PutApprovalResultCommandOutput) => void
  ): void;
  putApprovalResult(
    args: PutApprovalResultCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutApprovalResultCommandOutput) => void
  ): void;

  /**
   * @see {@link PutJobFailureResultCommand}
   */
  putJobFailureResult(
    args: PutJobFailureResultCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutJobFailureResultCommandOutput>;
  putJobFailureResult(
    args: PutJobFailureResultCommandInput,
    cb: (err: any, data?: PutJobFailureResultCommandOutput) => void
  ): void;
  putJobFailureResult(
    args: PutJobFailureResultCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutJobFailureResultCommandOutput) => void
  ): void;

  /**
   * @see {@link PutJobSuccessResultCommand}
   */
  putJobSuccessResult(
    args: PutJobSuccessResultCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutJobSuccessResultCommandOutput>;
  putJobSuccessResult(
    args: PutJobSuccessResultCommandInput,
    cb: (err: any, data?: PutJobSuccessResultCommandOutput) => void
  ): void;
  putJobSuccessResult(
    args: PutJobSuccessResultCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutJobSuccessResultCommandOutput) => void
  ): void;

  /**
   * @see {@link PutThirdPartyJobFailureResultCommand}
   */
  putThirdPartyJobFailureResult(
    args: PutThirdPartyJobFailureResultCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutThirdPartyJobFailureResultCommandOutput>;
  putThirdPartyJobFailureResult(
    args: PutThirdPartyJobFailureResultCommandInput,
    cb: (err: any, data?: PutThirdPartyJobFailureResultCommandOutput) => void
  ): void;
  putThirdPartyJobFailureResult(
    args: PutThirdPartyJobFailureResultCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutThirdPartyJobFailureResultCommandOutput) => void
  ): void;

  /**
   * @see {@link PutThirdPartyJobSuccessResultCommand}
   */
  putThirdPartyJobSuccessResult(
    args: PutThirdPartyJobSuccessResultCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutThirdPartyJobSuccessResultCommandOutput>;
  putThirdPartyJobSuccessResult(
    args: PutThirdPartyJobSuccessResultCommandInput,
    cb: (err: any, data?: PutThirdPartyJobSuccessResultCommandOutput) => void
  ): void;
  putThirdPartyJobSuccessResult(
    args: PutThirdPartyJobSuccessResultCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutThirdPartyJobSuccessResultCommandOutput) => void
  ): void;

  /**
   * @see {@link PutWebhookCommand}
   */
  putWebhook(args: PutWebhookCommandInput, options?: __HttpHandlerOptions): Promise<PutWebhookCommandOutput>;
  putWebhook(args: PutWebhookCommandInput, cb: (err: any, data?: PutWebhookCommandOutput) => void): void;
  putWebhook(
    args: PutWebhookCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutWebhookCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterWebhookWithThirdPartyCommand}
   */
  registerWebhookWithThirdParty(
    args: RegisterWebhookWithThirdPartyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterWebhookWithThirdPartyCommandOutput>;
  registerWebhookWithThirdParty(
    args: RegisterWebhookWithThirdPartyCommandInput,
    cb: (err: any, data?: RegisterWebhookWithThirdPartyCommandOutput) => void
  ): void;
  registerWebhookWithThirdParty(
    args: RegisterWebhookWithThirdPartyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterWebhookWithThirdPartyCommandOutput) => void
  ): void;

  /**
   * @see {@link RetryStageExecutionCommand}
   */
  retryStageExecution(
    args: RetryStageExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RetryStageExecutionCommandOutput>;
  retryStageExecution(
    args: RetryStageExecutionCommandInput,
    cb: (err: any, data?: RetryStageExecutionCommandOutput) => void
  ): void;
  retryStageExecution(
    args: RetryStageExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RetryStageExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link StartPipelineExecutionCommand}
   */
  startPipelineExecution(
    args: StartPipelineExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartPipelineExecutionCommandOutput>;
  startPipelineExecution(
    args: StartPipelineExecutionCommandInput,
    cb: (err: any, data?: StartPipelineExecutionCommandOutput) => void
  ): void;
  startPipelineExecution(
    args: StartPipelineExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartPipelineExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link StopPipelineExecutionCommand}
   */
  stopPipelineExecution(
    args: StopPipelineExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopPipelineExecutionCommandOutput>;
  stopPipelineExecution(
    args: StopPipelineExecutionCommandInput,
    cb: (err: any, data?: StopPipelineExecutionCommandOutput) => void
  ): void;
  stopPipelineExecution(
    args: StopPipelineExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopPipelineExecutionCommandOutput) => void
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
   * @see {@link UpdateActionTypeCommand}
   */
  updateActionType(
    args: UpdateActionTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateActionTypeCommandOutput>;
  updateActionType(
    args: UpdateActionTypeCommandInput,
    cb: (err: any, data?: UpdateActionTypeCommandOutput) => void
  ): void;
  updateActionType(
    args: UpdateActionTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateActionTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePipelineCommand}
   */
  updatePipeline(
    args: UpdatePipelineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePipelineCommandOutput>;
  updatePipeline(args: UpdatePipelineCommandInput, cb: (err: any, data?: UpdatePipelineCommandOutput) => void): void;
  updatePipeline(
    args: UpdatePipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePipelineCommandOutput) => void
  ): void;
}

/**
 * @public
 * <fullname>CodePipeline</fullname>
 *          <p>
 *             <b>Overview</b>
 *          </p>
 *          <p>This is the CodePipeline API Reference. This guide provides descriptions
 *             of the actions and data types for CodePipeline. Some functionality for your
 *             pipeline can only be configured through the API. For more information, see the <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html">CodePipeline User Guide</a>.</p>
 *          <p>You can use the CodePipeline API to work with pipelines, stages, actions,
 *             and transitions.</p>
 *          <p>
 *             <i>Pipelines</i> are models of automated release processes. Each pipeline
 *             is uniquely named, and consists of stages, actions, and transitions. </p>
 *          <p>You can work with pipelines by calling:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreatePipeline</a>, which creates a uniquely named
 *                     pipeline.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeletePipeline</a>, which deletes the specified
 *                     pipeline.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetPipeline</a>, which returns information about the pipeline
 *                     structure and pipeline metadata, including the pipeline Amazon Resource Name
 *                     (ARN).</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetPipelineExecution</a>, which returns information about a
 *                     specific execution of a pipeline.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetPipelineState</a>, which returns information about the current
 *                     state of the stages and actions of a pipeline.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListActionExecutions</a>, which returns action-level details
 *                     for past executions. The details include full stage and action-level details,
 *                     including individual action duration, status, any errors that occurred during
 *                     the execution, and input and output artifact location details.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListPipelines</a>, which gets a summary of all of the pipelines
 *                     associated with your account.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListPipelineExecutions</a>, which gets a summary of the most
 *                     recent executions for a pipeline.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>StartPipelineExecution</a>, which runs the most recent revision of
 *                     an artifact through the pipeline.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>StopPipelineExecution</a>, which stops the specified pipeline
 *                     execution from continuing through the pipeline.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdatePipeline</a>, which updates a pipeline with edits or changes
 *                     to the structure of the pipeline.</p>
 *             </li>
 *          </ul>
 *          <p>Pipelines include <i>stages</i>. Each stage contains one or more
 *             actions that must complete before the next stage begins. A stage results in success or
 *             failure. If a stage fails, the pipeline stops at that stage and remains stopped until
 *             either a new version of an artifact appears in the source location, or a user takes
 *             action to rerun the most recent artifact through the pipeline. You can call <a>GetPipelineState</a>, which displays the status of a pipeline, including the
 *             status of stages in the pipeline, or <a>GetPipeline</a>, which returns the
 *             entire structure of the pipeline, including the stages of that pipeline. For more
 *             information about the structure of stages and actions, see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/pipeline-structure.html">CodePipeline
 *                 Pipeline Structure Reference</a>.</p>
 *          <p>Pipeline stages include <i>actions</i> that are categorized into
 *             categories such as source or build actions performed in a stage of a pipeline. For
 *             example, you can use a source action to import artifacts into a pipeline from a source
 *             such as Amazon S3. Like stages, you do not work with actions directly in most cases, but
 *             you do define and interact with actions when working with pipeline operations such as
 *                 <a>CreatePipeline</a> and <a>GetPipelineState</a>. Valid
 *             action categories are:</p>
 *          <ul>
 *             <li>
 *                <p>Source</p>
 *             </li>
 *             <li>
 *                <p>Build</p>
 *             </li>
 *             <li>
 *                <p>Test</p>
 *             </li>
 *             <li>
 *                <p>Deploy</p>
 *             </li>
 *             <li>
 *                <p>Approval</p>
 *             </li>
 *             <li>
 *                <p>Invoke</p>
 *             </li>
 *          </ul>
 *          <p>Pipelines also include <i>transitions</i>, which allow the transition
 *             of artifacts from one stage to the next in a pipeline after the actions in one stage
 *             complete.</p>
 *          <p>You can work with transitions by calling:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>DisableStageTransition</a>, which prevents artifacts from
 *                     transitioning to the next stage in a pipeline.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>EnableStageTransition</a>, which enables transition of artifacts
 *                     between stages in a pipeline. </p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Using the API to integrate with CodePipeline</b>
 *          </p>
 *          <p>For third-party integrators or developers who want to create their own integrations
 *             with CodePipeline, the expected sequence varies from the standard API user. To
 *             integrate with CodePipeline, developers need to work with the following
 *             items:</p>
 *          <p>
 *             <b>Jobs</b>, which are instances of an action. For
 *             example, a job for a source action might import a revision of an artifact from a source. </p>
 *          <p>You can work with jobs by calling:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>AcknowledgeJob</a>, which confirms whether a job worker has
 *                     received the specified job.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetJobDetails</a>, which returns the details of a job.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>PollForJobs</a>, which determines whether there are any jobs to
 *                     act on.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>PutJobFailureResult</a>, which provides details of a job failure.
 *                 </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>PutJobSuccessResult</a>, which provides details of a job
 *                     success.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Third party jobs</b>, which are instances of an action
 *             created by a partner action and integrated into CodePipeline. Partner actions are
 *             created by members of the Amazon Web Services Partner Network.</p>
 *          <p>You can work with third party jobs by calling:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>AcknowledgeThirdPartyJob</a>, which confirms whether a job worker
 *                     has received the specified job.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetThirdPartyJobDetails</a>, which requests the details of a job
 *                     for a partner action.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>PollForThirdPartyJobs</a>, which determines whether there are any
 *                     jobs to act on. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>PutThirdPartyJobFailureResult</a>, which provides details of a job
 *                     failure.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>PutThirdPartyJobSuccessResult</a>, which provides details of a job
 *                     success.</p>
 *             </li>
 *          </ul>
 */
export class CodePipeline extends CodePipelineClient implements CodePipeline {}
createAggregatedClient(commands, CodePipeline);
