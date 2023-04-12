// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  parseEpochTimestamp as __parseEpochTimestamp,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

import { AcknowledgeJobCommandInput, AcknowledgeJobCommandOutput } from "../commands/AcknowledgeJobCommand";
import {
  AcknowledgeThirdPartyJobCommandInput,
  AcknowledgeThirdPartyJobCommandOutput,
} from "../commands/AcknowledgeThirdPartyJobCommand";
import {
  CreateCustomActionTypeCommandInput,
  CreateCustomActionTypeCommandOutput,
} from "../commands/CreateCustomActionTypeCommand";
import { CreatePipelineCommandInput, CreatePipelineCommandOutput } from "../commands/CreatePipelineCommand";
import {
  DeleteCustomActionTypeCommandInput,
  DeleteCustomActionTypeCommandOutput,
} from "../commands/DeleteCustomActionTypeCommand";
import { DeletePipelineCommandInput, DeletePipelineCommandOutput } from "../commands/DeletePipelineCommand";
import { DeleteWebhookCommandInput, DeleteWebhookCommandOutput } from "../commands/DeleteWebhookCommand";
import {
  DeregisterWebhookWithThirdPartyCommandInput,
  DeregisterWebhookWithThirdPartyCommandOutput,
} from "../commands/DeregisterWebhookWithThirdPartyCommand";
import {
  DisableStageTransitionCommandInput,
  DisableStageTransitionCommandOutput,
} from "../commands/DisableStageTransitionCommand";
import {
  EnableStageTransitionCommandInput,
  EnableStageTransitionCommandOutput,
} from "../commands/EnableStageTransitionCommand";
import { GetActionTypeCommandInput, GetActionTypeCommandOutput } from "../commands/GetActionTypeCommand";
import { GetJobDetailsCommandInput, GetJobDetailsCommandOutput } from "../commands/GetJobDetailsCommand";
import { GetPipelineCommandInput, GetPipelineCommandOutput } from "../commands/GetPipelineCommand";
import {
  GetPipelineExecutionCommandInput,
  GetPipelineExecutionCommandOutput,
} from "../commands/GetPipelineExecutionCommand";
import { GetPipelineStateCommandInput, GetPipelineStateCommandOutput } from "../commands/GetPipelineStateCommand";
import {
  GetThirdPartyJobDetailsCommandInput,
  GetThirdPartyJobDetailsCommandOutput,
} from "../commands/GetThirdPartyJobDetailsCommand";
import {
  ListActionExecutionsCommandInput,
  ListActionExecutionsCommandOutput,
} from "../commands/ListActionExecutionsCommand";
import { ListActionTypesCommandInput, ListActionTypesCommandOutput } from "../commands/ListActionTypesCommand";
import {
  ListPipelineExecutionsCommandInput,
  ListPipelineExecutionsCommandOutput,
} from "../commands/ListPipelineExecutionsCommand";
import { ListPipelinesCommandInput, ListPipelinesCommandOutput } from "../commands/ListPipelinesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ListWebhooksCommandInput, ListWebhooksCommandOutput } from "../commands/ListWebhooksCommand";
import { PollForJobsCommandInput, PollForJobsCommandOutput } from "../commands/PollForJobsCommand";
import {
  PollForThirdPartyJobsCommandInput,
  PollForThirdPartyJobsCommandOutput,
} from "../commands/PollForThirdPartyJobsCommand";
import { PutActionRevisionCommandInput, PutActionRevisionCommandOutput } from "../commands/PutActionRevisionCommand";
import { PutApprovalResultCommandInput, PutApprovalResultCommandOutput } from "../commands/PutApprovalResultCommand";
import {
  PutJobFailureResultCommandInput,
  PutJobFailureResultCommandOutput,
} from "../commands/PutJobFailureResultCommand";
import {
  PutJobSuccessResultCommandInput,
  PutJobSuccessResultCommandOutput,
} from "../commands/PutJobSuccessResultCommand";
import {
  PutThirdPartyJobFailureResultCommandInput,
  PutThirdPartyJobFailureResultCommandOutput,
} from "../commands/PutThirdPartyJobFailureResultCommand";
import {
  PutThirdPartyJobSuccessResultCommandInput,
  PutThirdPartyJobSuccessResultCommandOutput,
} from "../commands/PutThirdPartyJobSuccessResultCommand";
import { PutWebhookCommandInput, PutWebhookCommandOutput } from "../commands/PutWebhookCommand";
import {
  RegisterWebhookWithThirdPartyCommandInput,
  RegisterWebhookWithThirdPartyCommandOutput,
} from "../commands/RegisterWebhookWithThirdPartyCommand";
import {
  RetryStageExecutionCommandInput,
  RetryStageExecutionCommandOutput,
} from "../commands/RetryStageExecutionCommand";
import {
  StartPipelineExecutionCommandInput,
  StartPipelineExecutionCommandOutput,
} from "../commands/StartPipelineExecutionCommand";
import {
  StopPipelineExecutionCommandInput,
  StopPipelineExecutionCommandOutput,
} from "../commands/StopPipelineExecutionCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateActionTypeCommandInput, UpdateActionTypeCommandOutput } from "../commands/UpdateActionTypeCommand";
import { UpdatePipelineCommandInput, UpdatePipelineCommandOutput } from "../commands/UpdatePipelineCommand";
import { CodePipelineServiceException as __BaseException } from "../models/CodePipelineServiceException";
import {
  AcknowledgeJobInput,
  AcknowledgeJobOutput,
  AcknowledgeThirdPartyJobInput,
  AcknowledgeThirdPartyJobOutput,
  ActionConfiguration,
  ActionConfigurationProperty,
  ActionContext,
  ActionDeclaration,
  ActionExecution,
  ActionExecutionDetail,
  ActionExecutionFilter,
  ActionExecutionInput,
  ActionExecutionOutput,
  ActionExecutionResult,
  ActionNotFoundException,
  ActionRevision,
  ActionState,
  ActionType,
  ActionTypeArtifactDetails,
  ActionTypeDeclaration,
  ActionTypeExecutor,
  ActionTypeId,
  ActionTypeIdentifier,
  ActionTypeNotFoundException,
  ActionTypePermissions,
  ActionTypeProperty,
  ActionTypeSettings,
  ActionTypeUrls,
  ApprovalAlreadyCompletedException,
  ApprovalResult,
  Artifact,
  ArtifactDetail,
  ArtifactDetails,
  ArtifactLocation,
  ArtifactRevision,
  ArtifactStore,
  AWSSessionCredentials,
  BlockerDeclaration,
  ConcurrentModificationException,
  ConflictException,
  CreateCustomActionTypeInput,
  CreateCustomActionTypeOutput,
  CreatePipelineInput,
  CreatePipelineOutput,
  CurrentRevision,
  DeleteCustomActionTypeInput,
  DeletePipelineInput,
  DeleteWebhookInput,
  DeleteWebhookOutput,
  DeregisterWebhookWithThirdPartyInput,
  DeregisterWebhookWithThirdPartyOutput,
  DisableStageTransitionInput,
  DuplicatedStopRequestException,
  EnableStageTransitionInput,
  EncryptionKey,
  ErrorDetails,
  ExecutionDetails,
  ExecutionTrigger,
  ExecutorConfiguration,
  FailureDetails,
  GetActionTypeInput,
  GetActionTypeOutput,
  GetJobDetailsInput,
  GetJobDetailsOutput,
  GetPipelineExecutionInput,
  GetPipelineExecutionOutput,
  GetPipelineInput,
  GetPipelineOutput,
  GetPipelineStateInput,
  GetPipelineStateOutput,
  GetThirdPartyJobDetailsInput,
  GetThirdPartyJobDetailsOutput,
  InputArtifact,
  InvalidActionDeclarationException,
  InvalidApprovalTokenException,
  InvalidArnException,
  InvalidBlockerDeclarationException,
  InvalidClientTokenException,
  InvalidJobException,
  InvalidJobStateException,
  InvalidNextTokenException,
  InvalidNonceException,
  InvalidStageDeclarationException,
  InvalidStructureException,
  InvalidTagsException,
  InvalidWebhookAuthenticationParametersException,
  InvalidWebhookFilterPatternException,
  Job,
  JobData,
  JobDetails,
  JobNotFoundException,
  JobWorkerExecutorConfiguration,
  LambdaExecutorConfiguration,
  LimitExceededException,
  ListActionExecutionsInput,
  ListActionExecutionsOutput,
  ListActionTypesInput,
  ListActionTypesOutput,
  ListPipelineExecutionsInput,
  ListPipelineExecutionsOutput,
  ListPipelinesInput,
  ListPipelinesOutput,
  ListTagsForResourceInput,
  ListTagsForResourceOutput,
  ListWebhookItem,
  ListWebhooksInput,
  ListWebhooksOutput,
  NotLatestPipelineExecutionException,
  OutputArtifact,
  OutputVariablesSizeExceededException,
  PipelineContext,
  PipelineDeclaration,
  PipelineExecution,
  PipelineExecutionNotFoundException,
  PipelineExecutionNotStoppableException,
  PipelineExecutionSummary,
  PipelineMetadata,
  PipelineNameInUseException,
  PipelineNotFoundException,
  PipelineSummary,
  PipelineVersionNotFoundException,
  PollForJobsInput,
  PollForJobsOutput,
  PollForThirdPartyJobsInput,
  PollForThirdPartyJobsOutput,
  PutActionRevisionInput,
  PutActionRevisionOutput,
  PutApprovalResultInput,
  PutApprovalResultOutput,
  PutJobFailureResultInput,
  PutJobSuccessResultInput,
  PutThirdPartyJobFailureResultInput,
  PutThirdPartyJobSuccessResultInput,
  PutWebhookInput,
  PutWebhookOutput,
  RegisterWebhookWithThirdPartyInput,
  RegisterWebhookWithThirdPartyOutput,
  RequestFailedException,
  ResourceNotFoundException,
  RetryStageExecutionInput,
  RetryStageExecutionOutput,
  S3ArtifactLocation,
  S3Location,
  SourceRevision,
  StageContext,
  StageDeclaration,
  StageExecution,
  StageNotFoundException,
  StageNotRetryableException,
  StageState,
  StartPipelineExecutionInput,
  StartPipelineExecutionOutput,
  StopExecutionTrigger,
  StopPipelineExecutionInput,
  StopPipelineExecutionOutput,
  Tag,
  TagResourceInput,
  TagResourceOutput,
  ThirdPartyJob,
  ThirdPartyJobData,
  ThirdPartyJobDetails,
  TooManyTagsException,
  TransitionState,
  UntagResourceInput,
  UntagResourceOutput,
  UpdateActionTypeInput,
  UpdatePipelineInput,
  UpdatePipelineOutput,
  ValidationException,
  WebhookAuthConfiguration,
  WebhookDefinition,
  WebhookFilterRule,
  WebhookNotFoundException,
} from "../models/models_0";

/**
 * serializeAws_json1_1AcknowledgeJobCommand
 */
export const se_AcknowledgeJobCommand = async (
  input: AcknowledgeJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AcknowledgeJob");
  let body: any;
  body = JSON.stringify(se_AcknowledgeJobInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AcknowledgeThirdPartyJobCommand
 */
export const se_AcknowledgeThirdPartyJobCommand = async (
  input: AcknowledgeThirdPartyJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AcknowledgeThirdPartyJob");
  let body: any;
  body = JSON.stringify(se_AcknowledgeThirdPartyJobInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateCustomActionTypeCommand
 */
export const se_CreateCustomActionTypeCommand = async (
  input: CreateCustomActionTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateCustomActionType");
  let body: any;
  body = JSON.stringify(se_CreateCustomActionTypeInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreatePipelineCommand
 */
export const se_CreatePipelineCommand = async (
  input: CreatePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreatePipeline");
  let body: any;
  body = JSON.stringify(se_CreatePipelineInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteCustomActionTypeCommand
 */
export const se_DeleteCustomActionTypeCommand = async (
  input: DeleteCustomActionTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteCustomActionType");
  let body: any;
  body = JSON.stringify(se_DeleteCustomActionTypeInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeletePipelineCommand
 */
export const se_DeletePipelineCommand = async (
  input: DeletePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeletePipeline");
  let body: any;
  body = JSON.stringify(se_DeletePipelineInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteWebhookCommand
 */
export const se_DeleteWebhookCommand = async (
  input: DeleteWebhookCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteWebhook");
  let body: any;
  body = JSON.stringify(se_DeleteWebhookInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeregisterWebhookWithThirdPartyCommand
 */
export const se_DeregisterWebhookWithThirdPartyCommand = async (
  input: DeregisterWebhookWithThirdPartyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeregisterWebhookWithThirdParty");
  let body: any;
  body = JSON.stringify(se_DeregisterWebhookWithThirdPartyInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisableStageTransitionCommand
 */
export const se_DisableStageTransitionCommand = async (
  input: DisableStageTransitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisableStageTransition");
  let body: any;
  body = JSON.stringify(se_DisableStageTransitionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1EnableStageTransitionCommand
 */
export const se_EnableStageTransitionCommand = async (
  input: EnableStageTransitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("EnableStageTransition");
  let body: any;
  body = JSON.stringify(se_EnableStageTransitionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetActionTypeCommand
 */
export const se_GetActionTypeCommand = async (
  input: GetActionTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetActionType");
  let body: any;
  body = JSON.stringify(se_GetActionTypeInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetJobDetailsCommand
 */
export const se_GetJobDetailsCommand = async (
  input: GetJobDetailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetJobDetails");
  let body: any;
  body = JSON.stringify(se_GetJobDetailsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetPipelineCommand
 */
export const se_GetPipelineCommand = async (
  input: GetPipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetPipeline");
  let body: any;
  body = JSON.stringify(se_GetPipelineInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetPipelineExecutionCommand
 */
export const se_GetPipelineExecutionCommand = async (
  input: GetPipelineExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetPipelineExecution");
  let body: any;
  body = JSON.stringify(se_GetPipelineExecutionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetPipelineStateCommand
 */
export const se_GetPipelineStateCommand = async (
  input: GetPipelineStateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetPipelineState");
  let body: any;
  body = JSON.stringify(se_GetPipelineStateInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetThirdPartyJobDetailsCommand
 */
export const se_GetThirdPartyJobDetailsCommand = async (
  input: GetThirdPartyJobDetailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetThirdPartyJobDetails");
  let body: any;
  body = JSON.stringify(se_GetThirdPartyJobDetailsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListActionExecutionsCommand
 */
export const se_ListActionExecutionsCommand = async (
  input: ListActionExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListActionExecutions");
  let body: any;
  body = JSON.stringify(se_ListActionExecutionsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListActionTypesCommand
 */
export const se_ListActionTypesCommand = async (
  input: ListActionTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListActionTypes");
  let body: any;
  body = JSON.stringify(se_ListActionTypesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListPipelineExecutionsCommand
 */
export const se_ListPipelineExecutionsCommand = async (
  input: ListPipelineExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListPipelineExecutions");
  let body: any;
  body = JSON.stringify(se_ListPipelineExecutionsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListPipelinesCommand
 */
export const se_ListPipelinesCommand = async (
  input: ListPipelinesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListPipelines");
  let body: any;
  body = JSON.stringify(se_ListPipelinesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTagsForResource");
  let body: any;
  body = JSON.stringify(se_ListTagsForResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListWebhooksCommand
 */
export const se_ListWebhooksCommand = async (
  input: ListWebhooksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListWebhooks");
  let body: any;
  body = JSON.stringify(se_ListWebhooksInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PollForJobsCommand
 */
export const se_PollForJobsCommand = async (
  input: PollForJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PollForJobs");
  let body: any;
  body = JSON.stringify(se_PollForJobsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PollForThirdPartyJobsCommand
 */
export const se_PollForThirdPartyJobsCommand = async (
  input: PollForThirdPartyJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PollForThirdPartyJobs");
  let body: any;
  body = JSON.stringify(se_PollForThirdPartyJobsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutActionRevisionCommand
 */
export const se_PutActionRevisionCommand = async (
  input: PutActionRevisionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutActionRevision");
  let body: any;
  body = JSON.stringify(se_PutActionRevisionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutApprovalResultCommand
 */
export const se_PutApprovalResultCommand = async (
  input: PutApprovalResultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutApprovalResult");
  let body: any;
  body = JSON.stringify(se_PutApprovalResultInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutJobFailureResultCommand
 */
export const se_PutJobFailureResultCommand = async (
  input: PutJobFailureResultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutJobFailureResult");
  let body: any;
  body = JSON.stringify(se_PutJobFailureResultInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutJobSuccessResultCommand
 */
export const se_PutJobSuccessResultCommand = async (
  input: PutJobSuccessResultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutJobSuccessResult");
  let body: any;
  body = JSON.stringify(se_PutJobSuccessResultInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutThirdPartyJobFailureResultCommand
 */
export const se_PutThirdPartyJobFailureResultCommand = async (
  input: PutThirdPartyJobFailureResultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutThirdPartyJobFailureResult");
  let body: any;
  body = JSON.stringify(se_PutThirdPartyJobFailureResultInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutThirdPartyJobSuccessResultCommand
 */
export const se_PutThirdPartyJobSuccessResultCommand = async (
  input: PutThirdPartyJobSuccessResultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutThirdPartyJobSuccessResult");
  let body: any;
  body = JSON.stringify(se_PutThirdPartyJobSuccessResultInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutWebhookCommand
 */
export const se_PutWebhookCommand = async (
  input: PutWebhookCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutWebhook");
  let body: any;
  body = JSON.stringify(se_PutWebhookInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RegisterWebhookWithThirdPartyCommand
 */
export const se_RegisterWebhookWithThirdPartyCommand = async (
  input: RegisterWebhookWithThirdPartyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RegisterWebhookWithThirdParty");
  let body: any;
  body = JSON.stringify(se_RegisterWebhookWithThirdPartyInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RetryStageExecutionCommand
 */
export const se_RetryStageExecutionCommand = async (
  input: RetryStageExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RetryStageExecution");
  let body: any;
  body = JSON.stringify(se_RetryStageExecutionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartPipelineExecutionCommand
 */
export const se_StartPipelineExecutionCommand = async (
  input: StartPipelineExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartPipelineExecution");
  let body: any;
  body = JSON.stringify(se_StartPipelineExecutionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopPipelineExecutionCommand
 */
export const se_StopPipelineExecutionCommand = async (
  input: StopPipelineExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopPipelineExecution");
  let body: any;
  body = JSON.stringify(se_StopPipelineExecutionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TagResource");
  let body: any;
  body = JSON.stringify(se_TagResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UntagResource");
  let body: any;
  body = JSON.stringify(se_UntagResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateActionTypeCommand
 */
export const se_UpdateActionTypeCommand = async (
  input: UpdateActionTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateActionType");
  let body: any;
  body = JSON.stringify(se_UpdateActionTypeInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdatePipelineCommand
 */
export const se_UpdatePipelineCommand = async (
  input: UpdatePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdatePipeline");
  let body: any;
  body = JSON.stringify(se_UpdatePipelineInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1AcknowledgeJobCommand
 */
export const de_AcknowledgeJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcknowledgeJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AcknowledgeJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AcknowledgeJobOutput(data, context);
  const response: AcknowledgeJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AcknowledgeJobCommandError
 */
const de_AcknowledgeJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcknowledgeJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNonceException":
    case "com.amazonaws.codepipeline#InvalidNonceException":
      throw await de_InvalidNonceExceptionRes(parsedOutput, context);
    case "JobNotFoundException":
    case "com.amazonaws.codepipeline#JobNotFoundException":
      throw await de_JobNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AcknowledgeThirdPartyJobCommand
 */
export const de_AcknowledgeThirdPartyJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcknowledgeThirdPartyJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AcknowledgeThirdPartyJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AcknowledgeThirdPartyJobOutput(data, context);
  const response: AcknowledgeThirdPartyJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AcknowledgeThirdPartyJobCommandError
 */
const de_AcknowledgeThirdPartyJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcknowledgeThirdPartyJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidClientTokenException":
    case "com.amazonaws.codepipeline#InvalidClientTokenException":
      throw await de_InvalidClientTokenExceptionRes(parsedOutput, context);
    case "InvalidNonceException":
    case "com.amazonaws.codepipeline#InvalidNonceException":
      throw await de_InvalidNonceExceptionRes(parsedOutput, context);
    case "JobNotFoundException":
    case "com.amazonaws.codepipeline#JobNotFoundException":
      throw await de_JobNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateCustomActionTypeCommand
 */
export const de_CreateCustomActionTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomActionTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateCustomActionTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateCustomActionTypeOutput(data, context);
  const response: CreateCustomActionTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateCustomActionTypeCommandError
 */
const de_CreateCustomActionTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomActionTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.codepipeline#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InvalidTagsException":
    case "com.amazonaws.codepipeline#InvalidTagsException":
      throw await de_InvalidTagsExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.codepipeline#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.codepipeline#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreatePipelineCommand
 */
export const de_CreatePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePipelineCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreatePipelineCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreatePipelineOutput(data, context);
  const response: CreatePipelineCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreatePipelineCommandError
 */
const de_CreatePipelineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePipelineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.codepipeline#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InvalidActionDeclarationException":
    case "com.amazonaws.codepipeline#InvalidActionDeclarationException":
      throw await de_InvalidActionDeclarationExceptionRes(parsedOutput, context);
    case "InvalidBlockerDeclarationException":
    case "com.amazonaws.codepipeline#InvalidBlockerDeclarationException":
      throw await de_InvalidBlockerDeclarationExceptionRes(parsedOutput, context);
    case "InvalidStageDeclarationException":
    case "com.amazonaws.codepipeline#InvalidStageDeclarationException":
      throw await de_InvalidStageDeclarationExceptionRes(parsedOutput, context);
    case "InvalidStructureException":
    case "com.amazonaws.codepipeline#InvalidStructureException":
      throw await de_InvalidStructureExceptionRes(parsedOutput, context);
    case "InvalidTagsException":
    case "com.amazonaws.codepipeline#InvalidTagsException":
      throw await de_InvalidTagsExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.codepipeline#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "PipelineNameInUseException":
    case "com.amazonaws.codepipeline#PipelineNameInUseException":
      throw await de_PipelineNameInUseExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.codepipeline#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteCustomActionTypeCommand
 */
export const de_DeleteCustomActionTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomActionTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteCustomActionTypeCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteCustomActionTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteCustomActionTypeCommandError
 */
const de_DeleteCustomActionTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomActionTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.codepipeline#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeletePipelineCommand
 */
export const de_DeletePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePipelineCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeletePipelineCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeletePipelineCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeletePipelineCommandError
 */
const de_DeletePipelineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePipelineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.codepipeline#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteWebhookCommand
 */
export const de_DeleteWebhookCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWebhookCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteWebhookCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteWebhookOutput(data, context);
  const response: DeleteWebhookCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteWebhookCommandError
 */
const de_DeleteWebhookCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWebhookCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.codepipeline#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeregisterWebhookWithThirdPartyCommand
 */
export const de_DeregisterWebhookWithThirdPartyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterWebhookWithThirdPartyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeregisterWebhookWithThirdPartyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeregisterWebhookWithThirdPartyOutput(data, context);
  const response: DeregisterWebhookWithThirdPartyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeregisterWebhookWithThirdPartyCommandError
 */
const de_DeregisterWebhookWithThirdPartyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterWebhookWithThirdPartyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "WebhookNotFoundException":
    case "com.amazonaws.codepipeline#WebhookNotFoundException":
      throw await de_WebhookNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DisableStageTransitionCommand
 */
export const de_DisableStageTransitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableStageTransitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisableStageTransitionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DisableStageTransitionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DisableStageTransitionCommandError
 */
const de_DisableStageTransitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableStageTransitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "PipelineNotFoundException":
    case "com.amazonaws.codepipeline#PipelineNotFoundException":
      throw await de_PipelineNotFoundExceptionRes(parsedOutput, context);
    case "StageNotFoundException":
    case "com.amazonaws.codepipeline#StageNotFoundException":
      throw await de_StageNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1EnableStageTransitionCommand
 */
export const de_EnableStageTransitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableStageTransitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_EnableStageTransitionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: EnableStageTransitionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1EnableStageTransitionCommandError
 */
const de_EnableStageTransitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableStageTransitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "PipelineNotFoundException":
    case "com.amazonaws.codepipeline#PipelineNotFoundException":
      throw await de_PipelineNotFoundExceptionRes(parsedOutput, context);
    case "StageNotFoundException":
    case "com.amazonaws.codepipeline#StageNotFoundException":
      throw await de_StageNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetActionTypeCommand
 */
export const de_GetActionTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetActionTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetActionTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetActionTypeOutput(data, context);
  const response: GetActionTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetActionTypeCommandError
 */
const de_GetActionTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetActionTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ActionTypeNotFoundException":
    case "com.amazonaws.codepipeline#ActionTypeNotFoundException":
      throw await de_ActionTypeNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetJobDetailsCommand
 */
export const de_GetJobDetailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobDetailsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetJobDetailsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetJobDetailsOutput(data, context);
  const response: GetJobDetailsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetJobDetailsCommandError
 */
const de_GetJobDetailsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobDetailsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "JobNotFoundException":
    case "com.amazonaws.codepipeline#JobNotFoundException":
      throw await de_JobNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetPipelineCommand
 */
export const de_GetPipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPipelineCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetPipelineCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetPipelineOutput(data, context);
  const response: GetPipelineCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetPipelineCommandError
 */
const de_GetPipelineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPipelineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "PipelineNotFoundException":
    case "com.amazonaws.codepipeline#PipelineNotFoundException":
      throw await de_PipelineNotFoundExceptionRes(parsedOutput, context);
    case "PipelineVersionNotFoundException":
    case "com.amazonaws.codepipeline#PipelineVersionNotFoundException":
      throw await de_PipelineVersionNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetPipelineExecutionCommand
 */
export const de_GetPipelineExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPipelineExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetPipelineExecutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetPipelineExecutionOutput(data, context);
  const response: GetPipelineExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetPipelineExecutionCommandError
 */
const de_GetPipelineExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPipelineExecutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "PipelineExecutionNotFoundException":
    case "com.amazonaws.codepipeline#PipelineExecutionNotFoundException":
      throw await de_PipelineExecutionNotFoundExceptionRes(parsedOutput, context);
    case "PipelineNotFoundException":
    case "com.amazonaws.codepipeline#PipelineNotFoundException":
      throw await de_PipelineNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetPipelineStateCommand
 */
export const de_GetPipelineStateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPipelineStateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetPipelineStateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetPipelineStateOutput(data, context);
  const response: GetPipelineStateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetPipelineStateCommandError
 */
const de_GetPipelineStateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPipelineStateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "PipelineNotFoundException":
    case "com.amazonaws.codepipeline#PipelineNotFoundException":
      throw await de_PipelineNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetThirdPartyJobDetailsCommand
 */
export const de_GetThirdPartyJobDetailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetThirdPartyJobDetailsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetThirdPartyJobDetailsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetThirdPartyJobDetailsOutput(data, context);
  const response: GetThirdPartyJobDetailsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetThirdPartyJobDetailsCommandError
 */
const de_GetThirdPartyJobDetailsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetThirdPartyJobDetailsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidClientTokenException":
    case "com.amazonaws.codepipeline#InvalidClientTokenException":
      throw await de_InvalidClientTokenExceptionRes(parsedOutput, context);
    case "InvalidJobException":
    case "com.amazonaws.codepipeline#InvalidJobException":
      throw await de_InvalidJobExceptionRes(parsedOutput, context);
    case "JobNotFoundException":
    case "com.amazonaws.codepipeline#JobNotFoundException":
      throw await de_JobNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListActionExecutionsCommand
 */
export const de_ListActionExecutionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListActionExecutionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListActionExecutionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListActionExecutionsOutput(data, context);
  const response: ListActionExecutionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListActionExecutionsCommandError
 */
const de_ListActionExecutionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListActionExecutionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.codepipeline#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "PipelineExecutionNotFoundException":
    case "com.amazonaws.codepipeline#PipelineExecutionNotFoundException":
      throw await de_PipelineExecutionNotFoundExceptionRes(parsedOutput, context);
    case "PipelineNotFoundException":
    case "com.amazonaws.codepipeline#PipelineNotFoundException":
      throw await de_PipelineNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListActionTypesCommand
 */
export const de_ListActionTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListActionTypesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListActionTypesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListActionTypesOutput(data, context);
  const response: ListActionTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListActionTypesCommandError
 */
const de_ListActionTypesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListActionTypesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.codepipeline#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListPipelineExecutionsCommand
 */
export const de_ListPipelineExecutionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPipelineExecutionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListPipelineExecutionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListPipelineExecutionsOutput(data, context);
  const response: ListPipelineExecutionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListPipelineExecutionsCommandError
 */
const de_ListPipelineExecutionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPipelineExecutionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.codepipeline#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "PipelineNotFoundException":
    case "com.amazonaws.codepipeline#PipelineNotFoundException":
      throw await de_PipelineNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListPipelinesCommand
 */
export const de_ListPipelinesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPipelinesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListPipelinesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListPipelinesOutput(data, context);
  const response: ListPipelinesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListPipelinesCommandError
 */
const de_ListPipelinesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPipelinesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.codepipeline#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTagsForResourceOutput(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListTagsForResourceCommandError
 */
const de_ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazonaws.codepipeline#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.codepipeline#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codepipeline#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListWebhooksCommand
 */
export const de_ListWebhooksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWebhooksCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListWebhooksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListWebhooksOutput(data, context);
  const response: ListWebhooksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListWebhooksCommandError
 */
const de_ListWebhooksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWebhooksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.codepipeline#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1PollForJobsCommand
 */
export const de_PollForJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PollForJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PollForJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PollForJobsOutput(data, context);
  const response: PollForJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PollForJobsCommandError
 */
const de_PollForJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PollForJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ActionTypeNotFoundException":
    case "com.amazonaws.codepipeline#ActionTypeNotFoundException":
      throw await de_ActionTypeNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1PollForThirdPartyJobsCommand
 */
export const de_PollForThirdPartyJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PollForThirdPartyJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PollForThirdPartyJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PollForThirdPartyJobsOutput(data, context);
  const response: PollForThirdPartyJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PollForThirdPartyJobsCommandError
 */
const de_PollForThirdPartyJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PollForThirdPartyJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ActionTypeNotFoundException":
    case "com.amazonaws.codepipeline#ActionTypeNotFoundException":
      throw await de_ActionTypeNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1PutActionRevisionCommand
 */
export const de_PutActionRevisionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutActionRevisionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutActionRevisionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutActionRevisionOutput(data, context);
  const response: PutActionRevisionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutActionRevisionCommandError
 */
const de_PutActionRevisionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutActionRevisionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ActionNotFoundException":
    case "com.amazonaws.codepipeline#ActionNotFoundException":
      throw await de_ActionNotFoundExceptionRes(parsedOutput, context);
    case "PipelineNotFoundException":
    case "com.amazonaws.codepipeline#PipelineNotFoundException":
      throw await de_PipelineNotFoundExceptionRes(parsedOutput, context);
    case "StageNotFoundException":
    case "com.amazonaws.codepipeline#StageNotFoundException":
      throw await de_StageNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1PutApprovalResultCommand
 */
export const de_PutApprovalResultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutApprovalResultCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutApprovalResultCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutApprovalResultOutput(data, context);
  const response: PutApprovalResultCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutApprovalResultCommandError
 */
const de_PutApprovalResultCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutApprovalResultCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ActionNotFoundException":
    case "com.amazonaws.codepipeline#ActionNotFoundException":
      throw await de_ActionNotFoundExceptionRes(parsedOutput, context);
    case "ApprovalAlreadyCompletedException":
    case "com.amazonaws.codepipeline#ApprovalAlreadyCompletedException":
      throw await de_ApprovalAlreadyCompletedExceptionRes(parsedOutput, context);
    case "InvalidApprovalTokenException":
    case "com.amazonaws.codepipeline#InvalidApprovalTokenException":
      throw await de_InvalidApprovalTokenExceptionRes(parsedOutput, context);
    case "PipelineNotFoundException":
    case "com.amazonaws.codepipeline#PipelineNotFoundException":
      throw await de_PipelineNotFoundExceptionRes(parsedOutput, context);
    case "StageNotFoundException":
    case "com.amazonaws.codepipeline#StageNotFoundException":
      throw await de_StageNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1PutJobFailureResultCommand
 */
export const de_PutJobFailureResultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutJobFailureResultCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutJobFailureResultCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutJobFailureResultCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutJobFailureResultCommandError
 */
const de_PutJobFailureResultCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutJobFailureResultCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidJobStateException":
    case "com.amazonaws.codepipeline#InvalidJobStateException":
      throw await de_InvalidJobStateExceptionRes(parsedOutput, context);
    case "JobNotFoundException":
    case "com.amazonaws.codepipeline#JobNotFoundException":
      throw await de_JobNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1PutJobSuccessResultCommand
 */
export const de_PutJobSuccessResultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutJobSuccessResultCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutJobSuccessResultCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutJobSuccessResultCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutJobSuccessResultCommandError
 */
const de_PutJobSuccessResultCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutJobSuccessResultCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidJobStateException":
    case "com.amazonaws.codepipeline#InvalidJobStateException":
      throw await de_InvalidJobStateExceptionRes(parsedOutput, context);
    case "JobNotFoundException":
    case "com.amazonaws.codepipeline#JobNotFoundException":
      throw await de_JobNotFoundExceptionRes(parsedOutput, context);
    case "OutputVariablesSizeExceededException":
    case "com.amazonaws.codepipeline#OutputVariablesSizeExceededException":
      throw await de_OutputVariablesSizeExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1PutThirdPartyJobFailureResultCommand
 */
export const de_PutThirdPartyJobFailureResultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutThirdPartyJobFailureResultCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutThirdPartyJobFailureResultCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutThirdPartyJobFailureResultCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutThirdPartyJobFailureResultCommandError
 */
const de_PutThirdPartyJobFailureResultCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutThirdPartyJobFailureResultCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidClientTokenException":
    case "com.amazonaws.codepipeline#InvalidClientTokenException":
      throw await de_InvalidClientTokenExceptionRes(parsedOutput, context);
    case "InvalidJobStateException":
    case "com.amazonaws.codepipeline#InvalidJobStateException":
      throw await de_InvalidJobStateExceptionRes(parsedOutput, context);
    case "JobNotFoundException":
    case "com.amazonaws.codepipeline#JobNotFoundException":
      throw await de_JobNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1PutThirdPartyJobSuccessResultCommand
 */
export const de_PutThirdPartyJobSuccessResultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutThirdPartyJobSuccessResultCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutThirdPartyJobSuccessResultCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutThirdPartyJobSuccessResultCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutThirdPartyJobSuccessResultCommandError
 */
const de_PutThirdPartyJobSuccessResultCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutThirdPartyJobSuccessResultCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidClientTokenException":
    case "com.amazonaws.codepipeline#InvalidClientTokenException":
      throw await de_InvalidClientTokenExceptionRes(parsedOutput, context);
    case "InvalidJobStateException":
    case "com.amazonaws.codepipeline#InvalidJobStateException":
      throw await de_InvalidJobStateExceptionRes(parsedOutput, context);
    case "JobNotFoundException":
    case "com.amazonaws.codepipeline#JobNotFoundException":
      throw await de_JobNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1PutWebhookCommand
 */
export const de_PutWebhookCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutWebhookCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutWebhookCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutWebhookOutput(data, context);
  const response: PutWebhookCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutWebhookCommandError
 */
const de_PutWebhookCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutWebhookCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.codepipeline#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InvalidTagsException":
    case "com.amazonaws.codepipeline#InvalidTagsException":
      throw await de_InvalidTagsExceptionRes(parsedOutput, context);
    case "InvalidWebhookAuthenticationParametersException":
    case "com.amazonaws.codepipeline#InvalidWebhookAuthenticationParametersException":
      throw await de_InvalidWebhookAuthenticationParametersExceptionRes(parsedOutput, context);
    case "InvalidWebhookFilterPatternException":
    case "com.amazonaws.codepipeline#InvalidWebhookFilterPatternException":
      throw await de_InvalidWebhookFilterPatternExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.codepipeline#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "PipelineNotFoundException":
    case "com.amazonaws.codepipeline#PipelineNotFoundException":
      throw await de_PipelineNotFoundExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.codepipeline#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1RegisterWebhookWithThirdPartyCommand
 */
export const de_RegisterWebhookWithThirdPartyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterWebhookWithThirdPartyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RegisterWebhookWithThirdPartyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RegisterWebhookWithThirdPartyOutput(data, context);
  const response: RegisterWebhookWithThirdPartyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RegisterWebhookWithThirdPartyCommandError
 */
const de_RegisterWebhookWithThirdPartyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterWebhookWithThirdPartyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "WebhookNotFoundException":
    case "com.amazonaws.codepipeline#WebhookNotFoundException":
      throw await de_WebhookNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1RetryStageExecutionCommand
 */
export const de_RetryStageExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RetryStageExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RetryStageExecutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RetryStageExecutionOutput(data, context);
  const response: RetryStageExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RetryStageExecutionCommandError
 */
const de_RetryStageExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RetryStageExecutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.codepipeline#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "NotLatestPipelineExecutionException":
    case "com.amazonaws.codepipeline#NotLatestPipelineExecutionException":
      throw await de_NotLatestPipelineExecutionExceptionRes(parsedOutput, context);
    case "PipelineNotFoundException":
    case "com.amazonaws.codepipeline#PipelineNotFoundException":
      throw await de_PipelineNotFoundExceptionRes(parsedOutput, context);
    case "StageNotFoundException":
    case "com.amazonaws.codepipeline#StageNotFoundException":
      throw await de_StageNotFoundExceptionRes(parsedOutput, context);
    case "StageNotRetryableException":
    case "com.amazonaws.codepipeline#StageNotRetryableException":
      throw await de_StageNotRetryableExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StartPipelineExecutionCommand
 */
export const de_StartPipelineExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartPipelineExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartPipelineExecutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartPipelineExecutionOutput(data, context);
  const response: StartPipelineExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StartPipelineExecutionCommandError
 */
const de_StartPipelineExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartPipelineExecutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.codepipeline#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "PipelineNotFoundException":
    case "com.amazonaws.codepipeline#PipelineNotFoundException":
      throw await de_PipelineNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StopPipelineExecutionCommand
 */
export const de_StopPipelineExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopPipelineExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopPipelineExecutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StopPipelineExecutionOutput(data, context);
  const response: StopPipelineExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StopPipelineExecutionCommandError
 */
const de_StopPipelineExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopPipelineExecutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.codepipeline#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "DuplicatedStopRequestException":
    case "com.amazonaws.codepipeline#DuplicatedStopRequestException":
      throw await de_DuplicatedStopRequestExceptionRes(parsedOutput, context);
    case "PipelineExecutionNotStoppableException":
    case "com.amazonaws.codepipeline#PipelineExecutionNotStoppableException":
      throw await de_PipelineExecutionNotStoppableExceptionRes(parsedOutput, context);
    case "PipelineNotFoundException":
    case "com.amazonaws.codepipeline#PipelineNotFoundException":
      throw await de_PipelineNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_TagResourceOutput(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1TagResourceCommandError
 */
const de_TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.codepipeline#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.codepipeline#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "InvalidTagsException":
    case "com.amazonaws.codepipeline#InvalidTagsException":
      throw await de_InvalidTagsExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codepipeline#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.codepipeline#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UntagResourceOutput(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UntagResourceCommandError
 */
const de_UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.codepipeline#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.codepipeline#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "InvalidTagsException":
    case "com.amazonaws.codepipeline#InvalidTagsException":
      throw await de_InvalidTagsExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codepipeline#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateActionTypeCommand
 */
export const de_UpdateActionTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateActionTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateActionTypeCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateActionTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateActionTypeCommandError
 */
const de_UpdateActionTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateActionTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ActionTypeNotFoundException":
    case "com.amazonaws.codepipeline#ActionTypeNotFoundException":
      throw await de_ActionTypeNotFoundExceptionRes(parsedOutput, context);
    case "RequestFailedException":
    case "com.amazonaws.codepipeline#RequestFailedException":
      throw await de_RequestFailedExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdatePipelineCommand
 */
export const de_UpdatePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePipelineCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdatePipelineCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdatePipelineOutput(data, context);
  const response: UpdatePipelineCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdatePipelineCommandError
 */
const de_UpdatePipelineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePipelineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidActionDeclarationException":
    case "com.amazonaws.codepipeline#InvalidActionDeclarationException":
      throw await de_InvalidActionDeclarationExceptionRes(parsedOutput, context);
    case "InvalidBlockerDeclarationException":
    case "com.amazonaws.codepipeline#InvalidBlockerDeclarationException":
      throw await de_InvalidBlockerDeclarationExceptionRes(parsedOutput, context);
    case "InvalidStageDeclarationException":
    case "com.amazonaws.codepipeline#InvalidStageDeclarationException":
      throw await de_InvalidStageDeclarationExceptionRes(parsedOutput, context);
    case "InvalidStructureException":
    case "com.amazonaws.codepipeline#InvalidStructureException":
      throw await de_InvalidStructureExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.codepipeline#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ActionNotFoundExceptionRes
 */
const de_ActionNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ActionNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ActionNotFoundException(body, context);
  const exception = new ActionNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ActionTypeNotFoundExceptionRes
 */
const de_ActionTypeNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ActionTypeNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ActionTypeNotFoundException(body, context);
  const exception = new ActionTypeNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ApprovalAlreadyCompletedExceptionRes
 */
const de_ApprovalAlreadyCompletedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ApprovalAlreadyCompletedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ApprovalAlreadyCompletedException(body, context);
  const exception = new ApprovalAlreadyCompletedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ConcurrentModificationExceptionRes
 */
const de_ConcurrentModificationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ConcurrentModificationException(body, context);
  const exception = new ConcurrentModificationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ConflictException(body, context);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1DuplicatedStopRequestExceptionRes
 */
const de_DuplicatedStopRequestExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicatedStopRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DuplicatedStopRequestException(body, context);
  const exception = new DuplicatedStopRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidActionDeclarationExceptionRes
 */
const de_InvalidActionDeclarationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidActionDeclarationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidActionDeclarationException(body, context);
  const exception = new InvalidActionDeclarationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidApprovalTokenExceptionRes
 */
const de_InvalidApprovalTokenExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidApprovalTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidApprovalTokenException(body, context);
  const exception = new InvalidApprovalTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidArnExceptionRes
 */
const de_InvalidArnExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidArnException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidArnException(body, context);
  const exception = new InvalidArnException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidBlockerDeclarationExceptionRes
 */
const de_InvalidBlockerDeclarationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidBlockerDeclarationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidBlockerDeclarationException(body, context);
  const exception = new InvalidBlockerDeclarationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidClientTokenExceptionRes
 */
const de_InvalidClientTokenExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidClientTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidClientTokenException(body, context);
  const exception = new InvalidClientTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidJobExceptionRes
 */
const de_InvalidJobExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidJobException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidJobException(body, context);
  const exception = new InvalidJobException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidJobStateExceptionRes
 */
const de_InvalidJobStateExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidJobStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidJobStateException(body, context);
  const exception = new InvalidJobStateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidNextTokenExceptionRes
 */
const de_InvalidNextTokenExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNextTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidNextTokenException(body, context);
  const exception = new InvalidNextTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidNonceExceptionRes
 */
const de_InvalidNonceExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNonceException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidNonceException(body, context);
  const exception = new InvalidNonceException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidStageDeclarationExceptionRes
 */
const de_InvalidStageDeclarationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidStageDeclarationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidStageDeclarationException(body, context);
  const exception = new InvalidStageDeclarationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidStructureExceptionRes
 */
const de_InvalidStructureExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidStructureException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidStructureException(body, context);
  const exception = new InvalidStructureException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidTagsExceptionRes
 */
const de_InvalidTagsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTagsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidTagsException(body, context);
  const exception = new InvalidTagsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidWebhookAuthenticationParametersExceptionRes
 */
const de_InvalidWebhookAuthenticationParametersExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidWebhookAuthenticationParametersException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidWebhookAuthenticationParametersException(body, context);
  const exception = new InvalidWebhookAuthenticationParametersException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidWebhookFilterPatternExceptionRes
 */
const de_InvalidWebhookFilterPatternExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidWebhookFilterPatternException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidWebhookFilterPatternException(body, context);
  const exception = new InvalidWebhookFilterPatternException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1JobNotFoundExceptionRes
 */
const de_JobNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<JobNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_JobNotFoundException(body, context);
  const exception = new JobNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1LimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_LimitExceededException(body, context);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1NotLatestPipelineExecutionExceptionRes
 */
const de_NotLatestPipelineExecutionExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotLatestPipelineExecutionException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_NotLatestPipelineExecutionException(body, context);
  const exception = new NotLatestPipelineExecutionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1OutputVariablesSizeExceededExceptionRes
 */
const de_OutputVariablesSizeExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OutputVariablesSizeExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_OutputVariablesSizeExceededException(body, context);
  const exception = new OutputVariablesSizeExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1PipelineExecutionNotFoundExceptionRes
 */
const de_PipelineExecutionNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PipelineExecutionNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_PipelineExecutionNotFoundException(body, context);
  const exception = new PipelineExecutionNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1PipelineExecutionNotStoppableExceptionRes
 */
const de_PipelineExecutionNotStoppableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PipelineExecutionNotStoppableException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_PipelineExecutionNotStoppableException(body, context);
  const exception = new PipelineExecutionNotStoppableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1PipelineNameInUseExceptionRes
 */
const de_PipelineNameInUseExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PipelineNameInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_PipelineNameInUseException(body, context);
  const exception = new PipelineNameInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1PipelineNotFoundExceptionRes
 */
const de_PipelineNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PipelineNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_PipelineNotFoundException(body, context);
  const exception = new PipelineNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1PipelineVersionNotFoundExceptionRes
 */
const de_PipelineVersionNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PipelineVersionNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_PipelineVersionNotFoundException(body, context);
  const exception = new PipelineVersionNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1RequestFailedExceptionRes
 */
const de_RequestFailedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RequestFailedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_RequestFailedException(body, context);
  const exception = new RequestFailedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceNotFoundException(body, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1StageNotFoundExceptionRes
 */
const de_StageNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<StageNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_StageNotFoundException(body, context);
  const exception = new StageNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1StageNotRetryableExceptionRes
 */
const de_StageNotRetryableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<StageNotRetryableException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_StageNotRetryableException(body, context);
  const exception = new StageNotRetryableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1TooManyTagsExceptionRes
 */
const de_TooManyTagsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TooManyTagsException(body, context);
  const exception = new TooManyTagsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ValidationException(body, context);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1WebhookNotFoundExceptionRes
 */
const de_WebhookNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WebhookNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_WebhookNotFoundException(body, context);
  const exception = new WebhookNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1AcknowledgeJobInput
 */
const se_AcknowledgeJobInput = (input: AcknowledgeJobInput, context: __SerdeContext): any => {
  return {
    ...(input.jobId != null && { jobId: input.jobId }),
    ...(input.nonce != null && { nonce: input.nonce }),
  };
};

/**
 * serializeAws_json1_1AcknowledgeThirdPartyJobInput
 */
const se_AcknowledgeThirdPartyJobInput = (input: AcknowledgeThirdPartyJobInput, context: __SerdeContext): any => {
  return {
    ...(input.clientToken != null && { clientToken: input.clientToken }),
    ...(input.jobId != null && { jobId: input.jobId }),
    ...(input.nonce != null && { nonce: input.nonce }),
  };
};

/**
 * serializeAws_json1_1ActionConfigurationMap
 */
const se_ActionConfigurationMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1ActionConfigurationProperty
 */
const se_ActionConfigurationProperty = (input: ActionConfigurationProperty, context: __SerdeContext): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.key != null && { key: input.key }),
    ...(input.name != null && { name: input.name }),
    ...(input.queryable != null && { queryable: input.queryable }),
    ...(input.required != null && { required: input.required }),
    ...(input.secret != null && { secret: input.secret }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_json1_1ActionConfigurationPropertyList
 */
const se_ActionConfigurationPropertyList = (input: ActionConfigurationProperty[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ActionConfigurationProperty(entry, context);
    });
};

/**
 * serializeAws_json1_1ActionDeclaration
 */
const se_ActionDeclaration = (input: ActionDeclaration, context: __SerdeContext): any => {
  return {
    ...(input.actionTypeId != null && { actionTypeId: se_ActionTypeId(input.actionTypeId, context) }),
    ...(input.configuration != null && { configuration: se_ActionConfigurationMap(input.configuration, context) }),
    ...(input.inputArtifacts != null && { inputArtifacts: se_InputArtifactList(input.inputArtifacts, context) }),
    ...(input.name != null && { name: input.name }),
    ...(input.namespace != null && { namespace: input.namespace }),
    ...(input.outputArtifacts != null && { outputArtifacts: se_OutputArtifactList(input.outputArtifacts, context) }),
    ...(input.region != null && { region: input.region }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
    ...(input.runOrder != null && { runOrder: input.runOrder }),
  };
};

/**
 * serializeAws_json1_1ActionExecutionFilter
 */
const se_ActionExecutionFilter = (input: ActionExecutionFilter, context: __SerdeContext): any => {
  return {
    ...(input.pipelineExecutionId != null && { pipelineExecutionId: input.pipelineExecutionId }),
  };
};

/**
 * serializeAws_json1_1ActionRevision
 */
const se_ActionRevision = (input: ActionRevision, context: __SerdeContext): any => {
  return {
    ...(input.created != null && { created: Math.round(input.created.getTime() / 1000) }),
    ...(input.revisionChangeId != null && { revisionChangeId: input.revisionChangeId }),
    ...(input.revisionId != null && { revisionId: input.revisionId }),
  };
};

/**
 * serializeAws_json1_1ActionTypeArtifactDetails
 */
const se_ActionTypeArtifactDetails = (input: ActionTypeArtifactDetails, context: __SerdeContext): any => {
  return {
    ...(input.maximumCount != null && { maximumCount: input.maximumCount }),
    ...(input.minimumCount != null && { minimumCount: input.minimumCount }),
  };
};

/**
 * serializeAws_json1_1ActionTypeDeclaration
 */
const se_ActionTypeDeclaration = (input: ActionTypeDeclaration, context: __SerdeContext): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.executor != null && { executor: se_ActionTypeExecutor(input.executor, context) }),
    ...(input.id != null && { id: se_ActionTypeIdentifier(input.id, context) }),
    ...(input.inputArtifactDetails != null && {
      inputArtifactDetails: se_ActionTypeArtifactDetails(input.inputArtifactDetails, context),
    }),
    ...(input.outputArtifactDetails != null && {
      outputArtifactDetails: se_ActionTypeArtifactDetails(input.outputArtifactDetails, context),
    }),
    ...(input.permissions != null && { permissions: se_ActionTypePermissions(input.permissions, context) }),
    ...(input.properties != null && { properties: se_ActionTypeProperties(input.properties, context) }),
    ...(input.urls != null && { urls: se_ActionTypeUrls(input.urls, context) }),
  };
};

/**
 * serializeAws_json1_1ActionTypeExecutor
 */
const se_ActionTypeExecutor = (input: ActionTypeExecutor, context: __SerdeContext): any => {
  return {
    ...(input.configuration != null && { configuration: se_ExecutorConfiguration(input.configuration, context) }),
    ...(input.jobTimeout != null && { jobTimeout: input.jobTimeout }),
    ...(input.policyStatementsTemplate != null && { policyStatementsTemplate: input.policyStatementsTemplate }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_json1_1ActionTypeId
 */
const se_ActionTypeId = (input: ActionTypeId, context: __SerdeContext): any => {
  return {
    ...(input.category != null && { category: input.category }),
    ...(input.owner != null && { owner: input.owner }),
    ...(input.provider != null && { provider: input.provider }),
    ...(input.version != null && { version: input.version }),
  };
};

/**
 * serializeAws_json1_1ActionTypeIdentifier
 */
const se_ActionTypeIdentifier = (input: ActionTypeIdentifier, context: __SerdeContext): any => {
  return {
    ...(input.category != null && { category: input.category }),
    ...(input.owner != null && { owner: input.owner }),
    ...(input.provider != null && { provider: input.provider }),
    ...(input.version != null && { version: input.version }),
  };
};

/**
 * serializeAws_json1_1ActionTypePermissions
 */
const se_ActionTypePermissions = (input: ActionTypePermissions, context: __SerdeContext): any => {
  return {
    ...(input.allowedAccounts != null && { allowedAccounts: se_AllowedAccounts(input.allowedAccounts, context) }),
  };
};

/**
 * serializeAws_json1_1ActionTypeProperties
 */
const se_ActionTypeProperties = (input: ActionTypeProperty[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ActionTypeProperty(entry, context);
    });
};

/**
 * serializeAws_json1_1ActionTypeProperty
 */
const se_ActionTypeProperty = (input: ActionTypeProperty, context: __SerdeContext): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.key != null && { key: input.key }),
    ...(input.name != null && { name: input.name }),
    ...(input.noEcho != null && { noEcho: input.noEcho }),
    ...(input.optional != null && { optional: input.optional }),
    ...(input.queryable != null && { queryable: input.queryable }),
  };
};

/**
 * serializeAws_json1_1ActionTypeSettings
 */
const se_ActionTypeSettings = (input: ActionTypeSettings, context: __SerdeContext): any => {
  return {
    ...(input.entityUrlTemplate != null && { entityUrlTemplate: input.entityUrlTemplate }),
    ...(input.executionUrlTemplate != null && { executionUrlTemplate: input.executionUrlTemplate }),
    ...(input.revisionUrlTemplate != null && { revisionUrlTemplate: input.revisionUrlTemplate }),
    ...(input.thirdPartyConfigurationUrl != null && { thirdPartyConfigurationUrl: input.thirdPartyConfigurationUrl }),
  };
};

/**
 * serializeAws_json1_1ActionTypeUrls
 */
const se_ActionTypeUrls = (input: ActionTypeUrls, context: __SerdeContext): any => {
  return {
    ...(input.configurationUrl != null && { configurationUrl: input.configurationUrl }),
    ...(input.entityUrlTemplate != null && { entityUrlTemplate: input.entityUrlTemplate }),
    ...(input.executionUrlTemplate != null && { executionUrlTemplate: input.executionUrlTemplate }),
    ...(input.revisionUrlTemplate != null && { revisionUrlTemplate: input.revisionUrlTemplate }),
  };
};

/**
 * serializeAws_json1_1AllowedAccounts
 */
const se_AllowedAccounts = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ApprovalResult
 */
const se_ApprovalResult = (input: ApprovalResult, context: __SerdeContext): any => {
  return {
    ...(input.status != null && { status: input.status }),
    ...(input.summary != null && { summary: input.summary }),
  };
};

/**
 * serializeAws_json1_1ArtifactDetails
 */
const se_ArtifactDetails = (input: ArtifactDetails, context: __SerdeContext): any => {
  return {
    ...(input.maximumCount != null && { maximumCount: input.maximumCount }),
    ...(input.minimumCount != null && { minimumCount: input.minimumCount }),
  };
};

/**
 * serializeAws_json1_1ArtifactStore
 */
const se_ArtifactStore = (input: ArtifactStore, context: __SerdeContext): any => {
  return {
    ...(input.encryptionKey != null && { encryptionKey: se_EncryptionKey(input.encryptionKey, context) }),
    ...(input.location != null && { location: input.location }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_json1_1ArtifactStoreMap
 */
const se_ArtifactStoreMap = (input: Record<string, ArtifactStore>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_ArtifactStore(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1BlockerDeclaration
 */
const se_BlockerDeclaration = (input: BlockerDeclaration, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_json1_1CreateCustomActionTypeInput
 */
const se_CreateCustomActionTypeInput = (input: CreateCustomActionTypeInput, context: __SerdeContext): any => {
  return {
    ...(input.category != null && { category: input.category }),
    ...(input.configurationProperties != null && {
      configurationProperties: se_ActionConfigurationPropertyList(input.configurationProperties, context),
    }),
    ...(input.inputArtifactDetails != null && {
      inputArtifactDetails: se_ArtifactDetails(input.inputArtifactDetails, context),
    }),
    ...(input.outputArtifactDetails != null && {
      outputArtifactDetails: se_ArtifactDetails(input.outputArtifactDetails, context),
    }),
    ...(input.provider != null && { provider: input.provider }),
    ...(input.settings != null && { settings: se_ActionTypeSettings(input.settings, context) }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
    ...(input.version != null && { version: input.version }),
  };
};

/**
 * serializeAws_json1_1CreatePipelineInput
 */
const se_CreatePipelineInput = (input: CreatePipelineInput, context: __SerdeContext): any => {
  return {
    ...(input.pipeline != null && { pipeline: se_PipelineDeclaration(input.pipeline, context) }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1CurrentRevision
 */
const se_CurrentRevision = (input: CurrentRevision, context: __SerdeContext): any => {
  return {
    ...(input.changeIdentifier != null && { changeIdentifier: input.changeIdentifier }),
    ...(input.created != null && { created: Math.round(input.created.getTime() / 1000) }),
    ...(input.revision != null && { revision: input.revision }),
    ...(input.revisionSummary != null && { revisionSummary: input.revisionSummary }),
  };
};

/**
 * serializeAws_json1_1DeleteCustomActionTypeInput
 */
const se_DeleteCustomActionTypeInput = (input: DeleteCustomActionTypeInput, context: __SerdeContext): any => {
  return {
    ...(input.category != null && { category: input.category }),
    ...(input.provider != null && { provider: input.provider }),
    ...(input.version != null && { version: input.version }),
  };
};

/**
 * serializeAws_json1_1DeletePipelineInput
 */
const se_DeletePipelineInput = (input: DeletePipelineInput, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * serializeAws_json1_1DeleteWebhookInput
 */
const se_DeleteWebhookInput = (input: DeleteWebhookInput, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * serializeAws_json1_1DeregisterWebhookWithThirdPartyInput
 */
const se_DeregisterWebhookWithThirdPartyInput = (
  input: DeregisterWebhookWithThirdPartyInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.webhookName != null && { webhookName: input.webhookName }),
  };
};

/**
 * serializeAws_json1_1DisableStageTransitionInput
 */
const se_DisableStageTransitionInput = (input: DisableStageTransitionInput, context: __SerdeContext): any => {
  return {
    ...(input.pipelineName != null && { pipelineName: input.pipelineName }),
    ...(input.reason != null && { reason: input.reason }),
    ...(input.stageName != null && { stageName: input.stageName }),
    ...(input.transitionType != null && { transitionType: input.transitionType }),
  };
};

/**
 * serializeAws_json1_1EnableStageTransitionInput
 */
const se_EnableStageTransitionInput = (input: EnableStageTransitionInput, context: __SerdeContext): any => {
  return {
    ...(input.pipelineName != null && { pipelineName: input.pipelineName }),
    ...(input.stageName != null && { stageName: input.stageName }),
    ...(input.transitionType != null && { transitionType: input.transitionType }),
  };
};

/**
 * serializeAws_json1_1EncryptionKey
 */
const se_EncryptionKey = (input: EncryptionKey, context: __SerdeContext): any => {
  return {
    ...(input.id != null && { id: input.id }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_json1_1ExecutionDetails
 */
const se_ExecutionDetails = (input: ExecutionDetails, context: __SerdeContext): any => {
  return {
    ...(input.externalExecutionId != null && { externalExecutionId: input.externalExecutionId }),
    ...(input.percentComplete != null && { percentComplete: input.percentComplete }),
    ...(input.summary != null && { summary: input.summary }),
  };
};

/**
 * serializeAws_json1_1ExecutorConfiguration
 */
const se_ExecutorConfiguration = (input: ExecutorConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.jobWorkerExecutorConfiguration != null && {
      jobWorkerExecutorConfiguration: se_JobWorkerExecutorConfiguration(input.jobWorkerExecutorConfiguration, context),
    }),
    ...(input.lambdaExecutorConfiguration != null && {
      lambdaExecutorConfiguration: se_LambdaExecutorConfiguration(input.lambdaExecutorConfiguration, context),
    }),
  };
};

/**
 * serializeAws_json1_1FailureDetails
 */
const se_FailureDetails = (input: FailureDetails, context: __SerdeContext): any => {
  return {
    ...(input.externalExecutionId != null && { externalExecutionId: input.externalExecutionId }),
    ...(input.message != null && { message: input.message }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_json1_1GetActionTypeInput
 */
const se_GetActionTypeInput = (input: GetActionTypeInput, context: __SerdeContext): any => {
  return {
    ...(input.category != null && { category: input.category }),
    ...(input.owner != null && { owner: input.owner }),
    ...(input.provider != null && { provider: input.provider }),
    ...(input.version != null && { version: input.version }),
  };
};

/**
 * serializeAws_json1_1GetJobDetailsInput
 */
const se_GetJobDetailsInput = (input: GetJobDetailsInput, context: __SerdeContext): any => {
  return {
    ...(input.jobId != null && { jobId: input.jobId }),
  };
};

/**
 * serializeAws_json1_1GetPipelineExecutionInput
 */
const se_GetPipelineExecutionInput = (input: GetPipelineExecutionInput, context: __SerdeContext): any => {
  return {
    ...(input.pipelineExecutionId != null && { pipelineExecutionId: input.pipelineExecutionId }),
    ...(input.pipelineName != null && { pipelineName: input.pipelineName }),
  };
};

/**
 * serializeAws_json1_1GetPipelineInput
 */
const se_GetPipelineInput = (input: GetPipelineInput, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.version != null && { version: input.version }),
  };
};

/**
 * serializeAws_json1_1GetPipelineStateInput
 */
const se_GetPipelineStateInput = (input: GetPipelineStateInput, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * serializeAws_json1_1GetThirdPartyJobDetailsInput
 */
const se_GetThirdPartyJobDetailsInput = (input: GetThirdPartyJobDetailsInput, context: __SerdeContext): any => {
  return {
    ...(input.clientToken != null && { clientToken: input.clientToken }),
    ...(input.jobId != null && { jobId: input.jobId }),
  };
};

/**
 * serializeAws_json1_1InputArtifact
 */
const se_InputArtifact = (input: InputArtifact, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * serializeAws_json1_1InputArtifactList
 */
const se_InputArtifactList = (input: InputArtifact[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_InputArtifact(entry, context);
    });
};

/**
 * serializeAws_json1_1JobWorkerExecutorConfiguration
 */
const se_JobWorkerExecutorConfiguration = (input: JobWorkerExecutorConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.pollingAccounts != null && { pollingAccounts: se_PollingAccountList(input.pollingAccounts, context) }),
    ...(input.pollingServicePrincipals != null && {
      pollingServicePrincipals: se_PollingServicePrincipalList(input.pollingServicePrincipals, context),
    }),
  };
};

/**
 * serializeAws_json1_1LambdaExecutorConfiguration
 */
const se_LambdaExecutorConfiguration = (input: LambdaExecutorConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.lambdaFunctionArn != null && { lambdaFunctionArn: input.lambdaFunctionArn }),
  };
};

/**
 * serializeAws_json1_1ListActionExecutionsInput
 */
const se_ListActionExecutionsInput = (input: ListActionExecutionsInput, context: __SerdeContext): any => {
  return {
    ...(input.filter != null && { filter: se_ActionExecutionFilter(input.filter, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.pipelineName != null && { pipelineName: input.pipelineName }),
  };
};

/**
 * serializeAws_json1_1ListActionTypesInput
 */
const se_ListActionTypesInput = (input: ListActionTypesInput, context: __SerdeContext): any => {
  return {
    ...(input.actionOwnerFilter != null && { actionOwnerFilter: input.actionOwnerFilter }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.regionFilter != null && { regionFilter: input.regionFilter }),
  };
};

/**
 * serializeAws_json1_1ListPipelineExecutionsInput
 */
const se_ListPipelineExecutionsInput = (input: ListPipelineExecutionsInput, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.pipelineName != null && { pipelineName: input.pipelineName }),
  };
};

/**
 * serializeAws_json1_1ListPipelinesInput
 */
const se_ListPipelinesInput = (input: ListPipelinesInput, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1ListTagsForResourceInput
 */
const se_ListTagsForResourceInput = (input: ListTagsForResourceInput, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
  };
};

/**
 * serializeAws_json1_1ListWebhooksInput
 */
const se_ListWebhooksInput = (input: ListWebhooksInput, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1OutputArtifact
 */
const se_OutputArtifact = (input: OutputArtifact, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * serializeAws_json1_1OutputArtifactList
 */
const se_OutputArtifactList = (input: OutputArtifact[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_OutputArtifact(entry, context);
    });
};

/**
 * serializeAws_json1_1OutputVariablesMap
 */
const se_OutputVariablesMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1PipelineDeclaration
 */
const se_PipelineDeclaration = (input: PipelineDeclaration, context: __SerdeContext): any => {
  return {
    ...(input.artifactStore != null && { artifactStore: se_ArtifactStore(input.artifactStore, context) }),
    ...(input.artifactStores != null && { artifactStores: se_ArtifactStoreMap(input.artifactStores, context) }),
    ...(input.name != null && { name: input.name }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
    ...(input.stages != null && { stages: se_PipelineStageDeclarationList(input.stages, context) }),
    ...(input.version != null && { version: input.version }),
  };
};

/**
 * serializeAws_json1_1PipelineStageDeclarationList
 */
const se_PipelineStageDeclarationList = (input: StageDeclaration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_StageDeclaration(entry, context);
    });
};

/**
 * serializeAws_json1_1PollForJobsInput
 */
const se_PollForJobsInput = (input: PollForJobsInput, context: __SerdeContext): any => {
  return {
    ...(input.actionTypeId != null && { actionTypeId: se_ActionTypeId(input.actionTypeId, context) }),
    ...(input.maxBatchSize != null && { maxBatchSize: input.maxBatchSize }),
    ...(input.queryParam != null && { queryParam: se_QueryParamMap(input.queryParam, context) }),
  };
};

/**
 * serializeAws_json1_1PollForThirdPartyJobsInput
 */
const se_PollForThirdPartyJobsInput = (input: PollForThirdPartyJobsInput, context: __SerdeContext): any => {
  return {
    ...(input.actionTypeId != null && { actionTypeId: se_ActionTypeId(input.actionTypeId, context) }),
    ...(input.maxBatchSize != null && { maxBatchSize: input.maxBatchSize }),
  };
};

/**
 * serializeAws_json1_1PollingAccountList
 */
const se_PollingAccountList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1PollingServicePrincipalList
 */
const se_PollingServicePrincipalList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1PutActionRevisionInput
 */
const se_PutActionRevisionInput = (input: PutActionRevisionInput, context: __SerdeContext): any => {
  return {
    ...(input.actionName != null && { actionName: input.actionName }),
    ...(input.actionRevision != null && { actionRevision: se_ActionRevision(input.actionRevision, context) }),
    ...(input.pipelineName != null && { pipelineName: input.pipelineName }),
    ...(input.stageName != null && { stageName: input.stageName }),
  };
};

/**
 * serializeAws_json1_1PutApprovalResultInput
 */
const se_PutApprovalResultInput = (input: PutApprovalResultInput, context: __SerdeContext): any => {
  return {
    ...(input.actionName != null && { actionName: input.actionName }),
    ...(input.pipelineName != null && { pipelineName: input.pipelineName }),
    ...(input.result != null && { result: se_ApprovalResult(input.result, context) }),
    ...(input.stageName != null && { stageName: input.stageName }),
    ...(input.token != null && { token: input.token }),
  };
};

/**
 * serializeAws_json1_1PutJobFailureResultInput
 */
const se_PutJobFailureResultInput = (input: PutJobFailureResultInput, context: __SerdeContext): any => {
  return {
    ...(input.failureDetails != null && { failureDetails: se_FailureDetails(input.failureDetails, context) }),
    ...(input.jobId != null && { jobId: input.jobId }),
  };
};

/**
 * serializeAws_json1_1PutJobSuccessResultInput
 */
const se_PutJobSuccessResultInput = (input: PutJobSuccessResultInput, context: __SerdeContext): any => {
  return {
    ...(input.continuationToken != null && { continuationToken: input.continuationToken }),
    ...(input.currentRevision != null && { currentRevision: se_CurrentRevision(input.currentRevision, context) }),
    ...(input.executionDetails != null && { executionDetails: se_ExecutionDetails(input.executionDetails, context) }),
    ...(input.jobId != null && { jobId: input.jobId }),
    ...(input.outputVariables != null && { outputVariables: se_OutputVariablesMap(input.outputVariables, context) }),
  };
};

/**
 * serializeAws_json1_1PutThirdPartyJobFailureResultInput
 */
const se_PutThirdPartyJobFailureResultInput = (
  input: PutThirdPartyJobFailureResultInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.clientToken != null && { clientToken: input.clientToken }),
    ...(input.failureDetails != null && { failureDetails: se_FailureDetails(input.failureDetails, context) }),
    ...(input.jobId != null && { jobId: input.jobId }),
  };
};

/**
 * serializeAws_json1_1PutThirdPartyJobSuccessResultInput
 */
const se_PutThirdPartyJobSuccessResultInput = (
  input: PutThirdPartyJobSuccessResultInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.clientToken != null && { clientToken: input.clientToken }),
    ...(input.continuationToken != null && { continuationToken: input.continuationToken }),
    ...(input.currentRevision != null && { currentRevision: se_CurrentRevision(input.currentRevision, context) }),
    ...(input.executionDetails != null && { executionDetails: se_ExecutionDetails(input.executionDetails, context) }),
    ...(input.jobId != null && { jobId: input.jobId }),
  };
};

/**
 * serializeAws_json1_1PutWebhookInput
 */
const se_PutWebhookInput = (input: PutWebhookInput, context: __SerdeContext): any => {
  return {
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
    ...(input.webhook != null && { webhook: se_WebhookDefinition(input.webhook, context) }),
  };
};

/**
 * serializeAws_json1_1QueryParamMap
 */
const se_QueryParamMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1RegisterWebhookWithThirdPartyInput
 */
const se_RegisterWebhookWithThirdPartyInput = (
  input: RegisterWebhookWithThirdPartyInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.webhookName != null && { webhookName: input.webhookName }),
  };
};

/**
 * serializeAws_json1_1RetryStageExecutionInput
 */
const se_RetryStageExecutionInput = (input: RetryStageExecutionInput, context: __SerdeContext): any => {
  return {
    ...(input.pipelineExecutionId != null && { pipelineExecutionId: input.pipelineExecutionId }),
    ...(input.pipelineName != null && { pipelineName: input.pipelineName }),
    ...(input.retryMode != null && { retryMode: input.retryMode }),
    ...(input.stageName != null && { stageName: input.stageName }),
  };
};

/**
 * serializeAws_json1_1StageActionDeclarationList
 */
const se_StageActionDeclarationList = (input: ActionDeclaration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ActionDeclaration(entry, context);
    });
};

/**
 * serializeAws_json1_1StageBlockerDeclarationList
 */
const se_StageBlockerDeclarationList = (input: BlockerDeclaration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_BlockerDeclaration(entry, context);
    });
};

/**
 * serializeAws_json1_1StageDeclaration
 */
const se_StageDeclaration = (input: StageDeclaration, context: __SerdeContext): any => {
  return {
    ...(input.actions != null && { actions: se_StageActionDeclarationList(input.actions, context) }),
    ...(input.blockers != null && { blockers: se_StageBlockerDeclarationList(input.blockers, context) }),
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * serializeAws_json1_1StartPipelineExecutionInput
 */
const se_StartPipelineExecutionInput = (input: StartPipelineExecutionInput, context: __SerdeContext): any => {
  return {
    clientRequestToken: input.clientRequestToken ?? generateIdempotencyToken(),
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * serializeAws_json1_1StopPipelineExecutionInput
 */
const se_StopPipelineExecutionInput = (input: StopPipelineExecutionInput, context: __SerdeContext): any => {
  return {
    ...(input.abandon != null && { abandon: input.abandon }),
    ...(input.pipelineExecutionId != null && { pipelineExecutionId: input.pipelineExecutionId }),
    ...(input.pipelineName != null && { pipelineName: input.pipelineName }),
    ...(input.reason != null && { reason: input.reason }),
  };
};

/**
 * serializeAws_json1_1Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.key != null && { key: input.key }),
    ...(input.value != null && { value: input.value }),
  };
};

/**
 * serializeAws_json1_1TagKeyList
 */
const se_TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1TagList
 */
const se_TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_json1_1TagResourceInput
 */
const se_TagResourceInput = (input: TagResourceInput, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1UntagResourceInput
 */
const se_UntagResourceInput = (input: UntagResourceInput, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
    ...(input.tagKeys != null && { tagKeys: se_TagKeyList(input.tagKeys, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateActionTypeInput
 */
const se_UpdateActionTypeInput = (input: UpdateActionTypeInput, context: __SerdeContext): any => {
  return {
    ...(input.actionType != null && { actionType: se_ActionTypeDeclaration(input.actionType, context) }),
  };
};

/**
 * serializeAws_json1_1UpdatePipelineInput
 */
const se_UpdatePipelineInput = (input: UpdatePipelineInput, context: __SerdeContext): any => {
  return {
    ...(input.pipeline != null && { pipeline: se_PipelineDeclaration(input.pipeline, context) }),
  };
};

/**
 * serializeAws_json1_1WebhookAuthConfiguration
 */
const se_WebhookAuthConfiguration = (input: WebhookAuthConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AllowedIPRange != null && { AllowedIPRange: input.AllowedIPRange }),
    ...(input.SecretToken != null && { SecretToken: input.SecretToken }),
  };
};

/**
 * serializeAws_json1_1WebhookDefinition
 */
const se_WebhookDefinition = (input: WebhookDefinition, context: __SerdeContext): any => {
  return {
    ...(input.authentication != null && { authentication: input.authentication }),
    ...(input.authenticationConfiguration != null && {
      authenticationConfiguration: se_WebhookAuthConfiguration(input.authenticationConfiguration, context),
    }),
    ...(input.filters != null && { filters: se_WebhookFilters(input.filters, context) }),
    ...(input.name != null && { name: input.name }),
    ...(input.targetAction != null && { targetAction: input.targetAction }),
    ...(input.targetPipeline != null && { targetPipeline: input.targetPipeline }),
  };
};

/**
 * serializeAws_json1_1WebhookFilterRule
 */
const se_WebhookFilterRule = (input: WebhookFilterRule, context: __SerdeContext): any => {
  return {
    ...(input.jsonPath != null && { jsonPath: input.jsonPath }),
    ...(input.matchEquals != null && { matchEquals: input.matchEquals }),
  };
};

/**
 * serializeAws_json1_1WebhookFilters
 */
const se_WebhookFilters = (input: WebhookFilterRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_WebhookFilterRule(entry, context);
    });
};

/**
 * deserializeAws_json1_1AcknowledgeJobOutput
 */
const de_AcknowledgeJobOutput = (output: any, context: __SerdeContext): AcknowledgeJobOutput => {
  return {
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_1AcknowledgeThirdPartyJobOutput
 */
const de_AcknowledgeThirdPartyJobOutput = (output: any, context: __SerdeContext): AcknowledgeThirdPartyJobOutput => {
  return {
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_1ActionConfiguration
 */
const de_ActionConfiguration = (output: any, context: __SerdeContext): ActionConfiguration => {
  return {
    configuration: output.configuration != null ? de_ActionConfigurationMap(output.configuration, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ActionConfigurationMap
 */
const de_ActionConfigurationMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1ActionConfigurationProperty
 */
const de_ActionConfigurationProperty = (output: any, context: __SerdeContext): ActionConfigurationProperty => {
  return {
    description: __expectString(output.description),
    key: __expectBoolean(output.key),
    name: __expectString(output.name),
    queryable: __expectBoolean(output.queryable),
    required: __expectBoolean(output.required),
    secret: __expectBoolean(output.secret),
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_json1_1ActionConfigurationPropertyList
 */
const de_ActionConfigurationPropertyList = (output: any, context: __SerdeContext): ActionConfigurationProperty[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ActionConfigurationProperty(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ActionContext
 */
const de_ActionContext = (output: any, context: __SerdeContext): ActionContext => {
  return {
    actionExecutionId: __expectString(output.actionExecutionId),
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_json1_1ActionDeclaration
 */
const de_ActionDeclaration = (output: any, context: __SerdeContext): ActionDeclaration => {
  return {
    actionTypeId: output.actionTypeId != null ? de_ActionTypeId(output.actionTypeId, context) : undefined,
    configuration: output.configuration != null ? de_ActionConfigurationMap(output.configuration, context) : undefined,
    inputArtifacts: output.inputArtifacts != null ? de_InputArtifactList(output.inputArtifacts, context) : undefined,
    name: __expectString(output.name),
    namespace: __expectString(output.namespace),
    outputArtifacts:
      output.outputArtifacts != null ? de_OutputArtifactList(output.outputArtifacts, context) : undefined,
    region: __expectString(output.region),
    roleArn: __expectString(output.roleArn),
    runOrder: __expectInt32(output.runOrder),
  } as any;
};

/**
 * deserializeAws_json1_1ActionExecution
 */
const de_ActionExecution = (output: any, context: __SerdeContext): ActionExecution => {
  return {
    actionExecutionId: __expectString(output.actionExecutionId),
    errorDetails: output.errorDetails != null ? de_ErrorDetails(output.errorDetails, context) : undefined,
    externalExecutionId: __expectString(output.externalExecutionId),
    externalExecutionUrl: __expectString(output.externalExecutionUrl),
    lastStatusChange:
      output.lastStatusChange != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastStatusChange)))
        : undefined,
    lastUpdatedBy: __expectString(output.lastUpdatedBy),
    percentComplete: __expectInt32(output.percentComplete),
    status: __expectString(output.status),
    summary: __expectString(output.summary),
    token: __expectString(output.token),
  } as any;
};

/**
 * deserializeAws_json1_1ActionExecutionDetail
 */
const de_ActionExecutionDetail = (output: any, context: __SerdeContext): ActionExecutionDetail => {
  return {
    actionExecutionId: __expectString(output.actionExecutionId),
    actionName: __expectString(output.actionName),
    input: output.input != null ? de_ActionExecutionInput(output.input, context) : undefined,
    lastUpdateTime:
      output.lastUpdateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdateTime)))
        : undefined,
    output: output.output != null ? de_ActionExecutionOutput(output.output, context) : undefined,
    pipelineExecutionId: __expectString(output.pipelineExecutionId),
    pipelineVersion: __expectInt32(output.pipelineVersion),
    stageName: __expectString(output.stageName),
    startTime:
      output.startTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startTime))) : undefined,
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_1ActionExecutionDetailList
 */
const de_ActionExecutionDetailList = (output: any, context: __SerdeContext): ActionExecutionDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ActionExecutionDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ActionExecutionInput
 */
const de_ActionExecutionInput = (output: any, context: __SerdeContext): ActionExecutionInput => {
  return {
    actionTypeId: output.actionTypeId != null ? de_ActionTypeId(output.actionTypeId, context) : undefined,
    configuration: output.configuration != null ? de_ActionConfigurationMap(output.configuration, context) : undefined,
    inputArtifacts: output.inputArtifacts != null ? de_ArtifactDetailList(output.inputArtifacts, context) : undefined,
    namespace: __expectString(output.namespace),
    region: __expectString(output.region),
    resolvedConfiguration:
      output.resolvedConfiguration != null
        ? de_ResolvedActionConfigurationMap(output.resolvedConfiguration, context)
        : undefined,
    roleArn: __expectString(output.roleArn),
  } as any;
};

/**
 * deserializeAws_json1_1ActionExecutionOutput
 */
const de_ActionExecutionOutput = (output: any, context: __SerdeContext): ActionExecutionOutput => {
  return {
    executionResult:
      output.executionResult != null ? de_ActionExecutionResult(output.executionResult, context) : undefined,
    outputArtifacts:
      output.outputArtifacts != null ? de_ArtifactDetailList(output.outputArtifacts, context) : undefined,
    outputVariables:
      output.outputVariables != null ? de_OutputVariablesMap(output.outputVariables, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ActionExecutionResult
 */
const de_ActionExecutionResult = (output: any, context: __SerdeContext): ActionExecutionResult => {
  return {
    externalExecutionId: __expectString(output.externalExecutionId),
    externalExecutionSummary: __expectString(output.externalExecutionSummary),
    externalExecutionUrl: __expectString(output.externalExecutionUrl),
  } as any;
};

/**
 * deserializeAws_json1_1ActionNotFoundException
 */
const de_ActionNotFoundException = (output: any, context: __SerdeContext): ActionNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ActionRevision
 */
const de_ActionRevision = (output: any, context: __SerdeContext): ActionRevision => {
  return {
    created:
      output.created != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.created))) : undefined,
    revisionChangeId: __expectString(output.revisionChangeId),
    revisionId: __expectString(output.revisionId),
  } as any;
};

/**
 * deserializeAws_json1_1ActionState
 */
const de_ActionState = (output: any, context: __SerdeContext): ActionState => {
  return {
    actionName: __expectString(output.actionName),
    currentRevision: output.currentRevision != null ? de_ActionRevision(output.currentRevision, context) : undefined,
    entityUrl: __expectString(output.entityUrl),
    latestExecution: output.latestExecution != null ? de_ActionExecution(output.latestExecution, context) : undefined,
    revisionUrl: __expectString(output.revisionUrl),
  } as any;
};

/**
 * deserializeAws_json1_1ActionStateList
 */
const de_ActionStateList = (output: any, context: __SerdeContext): ActionState[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ActionState(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ActionType
 */
const de_ActionType = (output: any, context: __SerdeContext): ActionType => {
  return {
    actionConfigurationProperties:
      output.actionConfigurationProperties != null
        ? de_ActionConfigurationPropertyList(output.actionConfigurationProperties, context)
        : undefined,
    id: output.id != null ? de_ActionTypeId(output.id, context) : undefined,
    inputArtifactDetails:
      output.inputArtifactDetails != null ? de_ArtifactDetails(output.inputArtifactDetails, context) : undefined,
    outputArtifactDetails:
      output.outputArtifactDetails != null ? de_ArtifactDetails(output.outputArtifactDetails, context) : undefined,
    settings: output.settings != null ? de_ActionTypeSettings(output.settings, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ActionTypeArtifactDetails
 */
const de_ActionTypeArtifactDetails = (output: any, context: __SerdeContext): ActionTypeArtifactDetails => {
  return {
    maximumCount: __expectInt32(output.maximumCount),
    minimumCount: __expectInt32(output.minimumCount),
  } as any;
};

/**
 * deserializeAws_json1_1ActionTypeDeclaration
 */
const de_ActionTypeDeclaration = (output: any, context: __SerdeContext): ActionTypeDeclaration => {
  return {
    description: __expectString(output.description),
    executor: output.executor != null ? de_ActionTypeExecutor(output.executor, context) : undefined,
    id: output.id != null ? de_ActionTypeIdentifier(output.id, context) : undefined,
    inputArtifactDetails:
      output.inputArtifactDetails != null
        ? de_ActionTypeArtifactDetails(output.inputArtifactDetails, context)
        : undefined,
    outputArtifactDetails:
      output.outputArtifactDetails != null
        ? de_ActionTypeArtifactDetails(output.outputArtifactDetails, context)
        : undefined,
    permissions: output.permissions != null ? de_ActionTypePermissions(output.permissions, context) : undefined,
    properties: output.properties != null ? de_ActionTypeProperties(output.properties, context) : undefined,
    urls: output.urls != null ? de_ActionTypeUrls(output.urls, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ActionTypeExecutor
 */
const de_ActionTypeExecutor = (output: any, context: __SerdeContext): ActionTypeExecutor => {
  return {
    configuration: output.configuration != null ? de_ExecutorConfiguration(output.configuration, context) : undefined,
    jobTimeout: __expectInt32(output.jobTimeout),
    policyStatementsTemplate: __expectString(output.policyStatementsTemplate),
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_json1_1ActionTypeId
 */
const de_ActionTypeId = (output: any, context: __SerdeContext): ActionTypeId => {
  return {
    category: __expectString(output.category),
    owner: __expectString(output.owner),
    provider: __expectString(output.provider),
    version: __expectString(output.version),
  } as any;
};

/**
 * deserializeAws_json1_1ActionTypeIdentifier
 */
const de_ActionTypeIdentifier = (output: any, context: __SerdeContext): ActionTypeIdentifier => {
  return {
    category: __expectString(output.category),
    owner: __expectString(output.owner),
    provider: __expectString(output.provider),
    version: __expectString(output.version),
  } as any;
};

/**
 * deserializeAws_json1_1ActionTypeList
 */
const de_ActionTypeList = (output: any, context: __SerdeContext): ActionType[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ActionType(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ActionTypeNotFoundException
 */
const de_ActionTypeNotFoundException = (output: any, context: __SerdeContext): ActionTypeNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ActionTypePermissions
 */
const de_ActionTypePermissions = (output: any, context: __SerdeContext): ActionTypePermissions => {
  return {
    allowedAccounts: output.allowedAccounts != null ? de_AllowedAccounts(output.allowedAccounts, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ActionTypeProperties
 */
const de_ActionTypeProperties = (output: any, context: __SerdeContext): ActionTypeProperty[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ActionTypeProperty(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ActionTypeProperty
 */
const de_ActionTypeProperty = (output: any, context: __SerdeContext): ActionTypeProperty => {
  return {
    description: __expectString(output.description),
    key: __expectBoolean(output.key),
    name: __expectString(output.name),
    noEcho: __expectBoolean(output.noEcho),
    optional: __expectBoolean(output.optional),
    queryable: __expectBoolean(output.queryable),
  } as any;
};

/**
 * deserializeAws_json1_1ActionTypeSettings
 */
const de_ActionTypeSettings = (output: any, context: __SerdeContext): ActionTypeSettings => {
  return {
    entityUrlTemplate: __expectString(output.entityUrlTemplate),
    executionUrlTemplate: __expectString(output.executionUrlTemplate),
    revisionUrlTemplate: __expectString(output.revisionUrlTemplate),
    thirdPartyConfigurationUrl: __expectString(output.thirdPartyConfigurationUrl),
  } as any;
};

/**
 * deserializeAws_json1_1ActionTypeUrls
 */
const de_ActionTypeUrls = (output: any, context: __SerdeContext): ActionTypeUrls => {
  return {
    configurationUrl: __expectString(output.configurationUrl),
    entityUrlTemplate: __expectString(output.entityUrlTemplate),
    executionUrlTemplate: __expectString(output.executionUrlTemplate),
    revisionUrlTemplate: __expectString(output.revisionUrlTemplate),
  } as any;
};

/**
 * deserializeAws_json1_1AllowedAccounts
 */
const de_AllowedAccounts = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ApprovalAlreadyCompletedException
 */
const de_ApprovalAlreadyCompletedException = (
  output: any,
  context: __SerdeContext
): ApprovalAlreadyCompletedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1Artifact
 */
const de_Artifact = (output: any, context: __SerdeContext): Artifact => {
  return {
    location: output.location != null ? de_ArtifactLocation(output.location, context) : undefined,
    name: __expectString(output.name),
    revision: __expectString(output.revision),
  } as any;
};

/**
 * deserializeAws_json1_1ArtifactDetail
 */
const de_ArtifactDetail = (output: any, context: __SerdeContext): ArtifactDetail => {
  return {
    name: __expectString(output.name),
    s3location: output.s3location != null ? de_S3Location(output.s3location, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ArtifactDetailList
 */
const de_ArtifactDetailList = (output: any, context: __SerdeContext): ArtifactDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ArtifactDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ArtifactDetails
 */
const de_ArtifactDetails = (output: any, context: __SerdeContext): ArtifactDetails => {
  return {
    maximumCount: __expectInt32(output.maximumCount),
    minimumCount: __expectInt32(output.minimumCount),
  } as any;
};

/**
 * deserializeAws_json1_1ArtifactList
 */
const de_ArtifactList = (output: any, context: __SerdeContext): Artifact[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Artifact(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ArtifactLocation
 */
const de_ArtifactLocation = (output: any, context: __SerdeContext): ArtifactLocation => {
  return {
    s3Location: output.s3Location != null ? de_S3ArtifactLocation(output.s3Location, context) : undefined,
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_json1_1ArtifactRevision
 */
const de_ArtifactRevision = (output: any, context: __SerdeContext): ArtifactRevision => {
  return {
    created:
      output.created != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.created))) : undefined,
    name: __expectString(output.name),
    revisionChangeIdentifier: __expectString(output.revisionChangeIdentifier),
    revisionId: __expectString(output.revisionId),
    revisionSummary: __expectString(output.revisionSummary),
    revisionUrl: __expectString(output.revisionUrl),
  } as any;
};

/**
 * deserializeAws_json1_1ArtifactRevisionList
 */
const de_ArtifactRevisionList = (output: any, context: __SerdeContext): ArtifactRevision[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ArtifactRevision(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ArtifactStore
 */
const de_ArtifactStore = (output: any, context: __SerdeContext): ArtifactStore => {
  return {
    encryptionKey: output.encryptionKey != null ? de_EncryptionKey(output.encryptionKey, context) : undefined,
    location: __expectString(output.location),
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_json1_1ArtifactStoreMap
 */
const de_ArtifactStoreMap = (output: any, context: __SerdeContext): Record<string, ArtifactStore> => {
  return Object.entries(output).reduce((acc: Record<string, ArtifactStore>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_ArtifactStore(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1AWSSessionCredentials
 */
const de_AWSSessionCredentials = (output: any, context: __SerdeContext): AWSSessionCredentials => {
  return {
    accessKeyId: __expectString(output.accessKeyId),
    secretAccessKey: __expectString(output.secretAccessKey),
    sessionToken: __expectString(output.sessionToken),
  } as any;
};

/**
 * deserializeAws_json1_1BlockerDeclaration
 */
const de_BlockerDeclaration = (output: any, context: __SerdeContext): BlockerDeclaration => {
  return {
    name: __expectString(output.name),
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_json1_1ConcurrentModificationException
 */
const de_ConcurrentModificationException = (output: any, context: __SerdeContext): ConcurrentModificationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ConflictException
 */
const de_ConflictException = (output: any, context: __SerdeContext): ConflictException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1CreateCustomActionTypeOutput
 */
const de_CreateCustomActionTypeOutput = (output: any, context: __SerdeContext): CreateCustomActionTypeOutput => {
  return {
    actionType: output.actionType != null ? de_ActionType(output.actionType, context) : undefined,
    tags: output.tags != null ? de_TagList(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreatePipelineOutput
 */
const de_CreatePipelineOutput = (output: any, context: __SerdeContext): CreatePipelineOutput => {
  return {
    pipeline: output.pipeline != null ? de_PipelineDeclaration(output.pipeline, context) : undefined,
    tags: output.tags != null ? de_TagList(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteWebhookOutput
 */
const de_DeleteWebhookOutput = (output: any, context: __SerdeContext): DeleteWebhookOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeregisterWebhookWithThirdPartyOutput
 */
const de_DeregisterWebhookWithThirdPartyOutput = (
  output: any,
  context: __SerdeContext
): DeregisterWebhookWithThirdPartyOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DuplicatedStopRequestException
 */
const de_DuplicatedStopRequestException = (output: any, context: __SerdeContext): DuplicatedStopRequestException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1EncryptionKey
 */
const de_EncryptionKey = (output: any, context: __SerdeContext): EncryptionKey => {
  return {
    id: __expectString(output.id),
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_json1_1ErrorDetails
 */
const de_ErrorDetails = (output: any, context: __SerdeContext): ErrorDetails => {
  return {
    code: __expectString(output.code),
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ExecutionTrigger
 */
const de_ExecutionTrigger = (output: any, context: __SerdeContext): ExecutionTrigger => {
  return {
    triggerDetail: __expectString(output.triggerDetail),
    triggerType: __expectString(output.triggerType),
  } as any;
};

/**
 * deserializeAws_json1_1ExecutorConfiguration
 */
const de_ExecutorConfiguration = (output: any, context: __SerdeContext): ExecutorConfiguration => {
  return {
    jobWorkerExecutorConfiguration:
      output.jobWorkerExecutorConfiguration != null
        ? de_JobWorkerExecutorConfiguration(output.jobWorkerExecutorConfiguration, context)
        : undefined,
    lambdaExecutorConfiguration:
      output.lambdaExecutorConfiguration != null
        ? de_LambdaExecutorConfiguration(output.lambdaExecutorConfiguration, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetActionTypeOutput
 */
const de_GetActionTypeOutput = (output: any, context: __SerdeContext): GetActionTypeOutput => {
  return {
    actionType: output.actionType != null ? de_ActionTypeDeclaration(output.actionType, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetJobDetailsOutput
 */
const de_GetJobDetailsOutput = (output: any, context: __SerdeContext): GetJobDetailsOutput => {
  return {
    jobDetails: output.jobDetails != null ? de_JobDetails(output.jobDetails, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetPipelineExecutionOutput
 */
const de_GetPipelineExecutionOutput = (output: any, context: __SerdeContext): GetPipelineExecutionOutput => {
  return {
    pipelineExecution:
      output.pipelineExecution != null ? de_PipelineExecution(output.pipelineExecution, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetPipelineOutput
 */
const de_GetPipelineOutput = (output: any, context: __SerdeContext): GetPipelineOutput => {
  return {
    metadata: output.metadata != null ? de_PipelineMetadata(output.metadata, context) : undefined,
    pipeline: output.pipeline != null ? de_PipelineDeclaration(output.pipeline, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetPipelineStateOutput
 */
const de_GetPipelineStateOutput = (output: any, context: __SerdeContext): GetPipelineStateOutput => {
  return {
    created:
      output.created != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.created))) : undefined,
    pipelineName: __expectString(output.pipelineName),
    pipelineVersion: __expectInt32(output.pipelineVersion),
    stageStates: output.stageStates != null ? de_StageStateList(output.stageStates, context) : undefined,
    updated:
      output.updated != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.updated))) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetThirdPartyJobDetailsOutput
 */
const de_GetThirdPartyJobDetailsOutput = (output: any, context: __SerdeContext): GetThirdPartyJobDetailsOutput => {
  return {
    jobDetails: output.jobDetails != null ? de_ThirdPartyJobDetails(output.jobDetails, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1InputArtifact
 */
const de_InputArtifact = (output: any, context: __SerdeContext): InputArtifact => {
  return {
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_json1_1InputArtifactList
 */
const de_InputArtifactList = (output: any, context: __SerdeContext): InputArtifact[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_InputArtifact(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1InvalidActionDeclarationException
 */
const de_InvalidActionDeclarationException = (
  output: any,
  context: __SerdeContext
): InvalidActionDeclarationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidApprovalTokenException
 */
const de_InvalidApprovalTokenException = (output: any, context: __SerdeContext): InvalidApprovalTokenException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidArnException
 */
const de_InvalidArnException = (output: any, context: __SerdeContext): InvalidArnException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidBlockerDeclarationException
 */
const de_InvalidBlockerDeclarationException = (
  output: any,
  context: __SerdeContext
): InvalidBlockerDeclarationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidClientTokenException
 */
const de_InvalidClientTokenException = (output: any, context: __SerdeContext): InvalidClientTokenException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidJobException
 */
const de_InvalidJobException = (output: any, context: __SerdeContext): InvalidJobException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidJobStateException
 */
const de_InvalidJobStateException = (output: any, context: __SerdeContext): InvalidJobStateException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidNextTokenException
 */
const de_InvalidNextTokenException = (output: any, context: __SerdeContext): InvalidNextTokenException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidNonceException
 */
const de_InvalidNonceException = (output: any, context: __SerdeContext): InvalidNonceException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidStageDeclarationException
 */
const de_InvalidStageDeclarationException = (
  output: any,
  context: __SerdeContext
): InvalidStageDeclarationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidStructureException
 */
const de_InvalidStructureException = (output: any, context: __SerdeContext): InvalidStructureException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidTagsException
 */
const de_InvalidTagsException = (output: any, context: __SerdeContext): InvalidTagsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidWebhookAuthenticationParametersException
 */
const de_InvalidWebhookAuthenticationParametersException = (
  output: any,
  context: __SerdeContext
): InvalidWebhookAuthenticationParametersException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidWebhookFilterPatternException
 */
const de_InvalidWebhookFilterPatternException = (
  output: any,
  context: __SerdeContext
): InvalidWebhookFilterPatternException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1Job
 */
const de_Job = (output: any, context: __SerdeContext): Job => {
  return {
    accountId: __expectString(output.accountId),
    data: output.data != null ? de_JobData(output.data, context) : undefined,
    id: __expectString(output.id),
    nonce: __expectString(output.nonce),
  } as any;
};

/**
 * deserializeAws_json1_1JobData
 */
const de_JobData = (output: any, context: __SerdeContext): JobData => {
  return {
    actionConfiguration:
      output.actionConfiguration != null ? de_ActionConfiguration(output.actionConfiguration, context) : undefined,
    actionTypeId: output.actionTypeId != null ? de_ActionTypeId(output.actionTypeId, context) : undefined,
    artifactCredentials:
      output.artifactCredentials != null ? de_AWSSessionCredentials(output.artifactCredentials, context) : undefined,
    continuationToken: __expectString(output.continuationToken),
    encryptionKey: output.encryptionKey != null ? de_EncryptionKey(output.encryptionKey, context) : undefined,
    inputArtifacts: output.inputArtifacts != null ? de_ArtifactList(output.inputArtifacts, context) : undefined,
    outputArtifacts: output.outputArtifacts != null ? de_ArtifactList(output.outputArtifacts, context) : undefined,
    pipelineContext: output.pipelineContext != null ? de_PipelineContext(output.pipelineContext, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1JobDetails
 */
const de_JobDetails = (output: any, context: __SerdeContext): JobDetails => {
  return {
    accountId: __expectString(output.accountId),
    data: output.data != null ? de_JobData(output.data, context) : undefined,
    id: __expectString(output.id),
  } as any;
};

/**
 * deserializeAws_json1_1JobList
 */
const de_JobList = (output: any, context: __SerdeContext): Job[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Job(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1JobNotFoundException
 */
const de_JobNotFoundException = (output: any, context: __SerdeContext): JobNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1JobWorkerExecutorConfiguration
 */
const de_JobWorkerExecutorConfiguration = (output: any, context: __SerdeContext): JobWorkerExecutorConfiguration => {
  return {
    pollingAccounts:
      output.pollingAccounts != null ? de_PollingAccountList(output.pollingAccounts, context) : undefined,
    pollingServicePrincipals:
      output.pollingServicePrincipals != null
        ? de_PollingServicePrincipalList(output.pollingServicePrincipals, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1LambdaExecutorConfiguration
 */
const de_LambdaExecutorConfiguration = (output: any, context: __SerdeContext): LambdaExecutorConfiguration => {
  return {
    lambdaFunctionArn: __expectString(output.lambdaFunctionArn),
  } as any;
};

/**
 * deserializeAws_json1_1LimitExceededException
 */
const de_LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ListActionExecutionsOutput
 */
const de_ListActionExecutionsOutput = (output: any, context: __SerdeContext): ListActionExecutionsOutput => {
  return {
    actionExecutionDetails:
      output.actionExecutionDetails != null
        ? de_ActionExecutionDetailList(output.actionExecutionDetails, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListActionTypesOutput
 */
const de_ListActionTypesOutput = (output: any, context: __SerdeContext): ListActionTypesOutput => {
  return {
    actionTypes: output.actionTypes != null ? de_ActionTypeList(output.actionTypes, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListPipelineExecutionsOutput
 */
const de_ListPipelineExecutionsOutput = (output: any, context: __SerdeContext): ListPipelineExecutionsOutput => {
  return {
    nextToken: __expectString(output.nextToken),
    pipelineExecutionSummaries:
      output.pipelineExecutionSummaries != null
        ? de_PipelineExecutionSummaryList(output.pipelineExecutionSummaries, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListPipelinesOutput
 */
const de_ListPipelinesOutput = (output: any, context: __SerdeContext): ListPipelinesOutput => {
  return {
    nextToken: __expectString(output.nextToken),
    pipelines: output.pipelines != null ? de_PipelineList(output.pipelines, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListTagsForResourceOutput
 */
const de_ListTagsForResourceOutput = (output: any, context: __SerdeContext): ListTagsForResourceOutput => {
  return {
    nextToken: __expectString(output.nextToken),
    tags: output.tags != null ? de_TagList(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListWebhookItem
 */
const de_ListWebhookItem = (output: any, context: __SerdeContext): ListWebhookItem => {
  return {
    arn: __expectString(output.arn),
    definition: output.definition != null ? de_WebhookDefinition(output.definition, context) : undefined,
    errorCode: __expectString(output.errorCode),
    errorMessage: __expectString(output.errorMessage),
    lastTriggered:
      output.lastTriggered != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastTriggered)))
        : undefined,
    tags: output.tags != null ? de_TagList(output.tags, context) : undefined,
    url: __expectString(output.url),
  } as any;
};

/**
 * deserializeAws_json1_1ListWebhooksOutput
 */
const de_ListWebhooksOutput = (output: any, context: __SerdeContext): ListWebhooksOutput => {
  return {
    NextToken: __expectString(output.NextToken),
    webhooks: output.webhooks != null ? de_WebhookList(output.webhooks, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1NotLatestPipelineExecutionException
 */
const de_NotLatestPipelineExecutionException = (
  output: any,
  context: __SerdeContext
): NotLatestPipelineExecutionException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1OutputArtifact
 */
const de_OutputArtifact = (output: any, context: __SerdeContext): OutputArtifact => {
  return {
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_json1_1OutputArtifactList
 */
const de_OutputArtifactList = (output: any, context: __SerdeContext): OutputArtifact[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_OutputArtifact(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1OutputVariablesMap
 */
const de_OutputVariablesMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1OutputVariablesSizeExceededException
 */
const de_OutputVariablesSizeExceededException = (
  output: any,
  context: __SerdeContext
): OutputVariablesSizeExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1PipelineContext
 */
const de_PipelineContext = (output: any, context: __SerdeContext): PipelineContext => {
  return {
    action: output.action != null ? de_ActionContext(output.action, context) : undefined,
    pipelineArn: __expectString(output.pipelineArn),
    pipelineExecutionId: __expectString(output.pipelineExecutionId),
    pipelineName: __expectString(output.pipelineName),
    stage: output.stage != null ? de_StageContext(output.stage, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1PipelineDeclaration
 */
const de_PipelineDeclaration = (output: any, context: __SerdeContext): PipelineDeclaration => {
  return {
    artifactStore: output.artifactStore != null ? de_ArtifactStore(output.artifactStore, context) : undefined,
    artifactStores: output.artifactStores != null ? de_ArtifactStoreMap(output.artifactStores, context) : undefined,
    name: __expectString(output.name),
    roleArn: __expectString(output.roleArn),
    stages: output.stages != null ? de_PipelineStageDeclarationList(output.stages, context) : undefined,
    version: __expectInt32(output.version),
  } as any;
};

/**
 * deserializeAws_json1_1PipelineExecution
 */
const de_PipelineExecution = (output: any, context: __SerdeContext): PipelineExecution => {
  return {
    artifactRevisions:
      output.artifactRevisions != null ? de_ArtifactRevisionList(output.artifactRevisions, context) : undefined,
    pipelineExecutionId: __expectString(output.pipelineExecutionId),
    pipelineName: __expectString(output.pipelineName),
    pipelineVersion: __expectInt32(output.pipelineVersion),
    status: __expectString(output.status),
    statusSummary: __expectString(output.statusSummary),
  } as any;
};

/**
 * deserializeAws_json1_1PipelineExecutionNotFoundException
 */
const de_PipelineExecutionNotFoundException = (
  output: any,
  context: __SerdeContext
): PipelineExecutionNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1PipelineExecutionNotStoppableException
 */
const de_PipelineExecutionNotStoppableException = (
  output: any,
  context: __SerdeContext
): PipelineExecutionNotStoppableException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1PipelineExecutionSummary
 */
const de_PipelineExecutionSummary = (output: any, context: __SerdeContext): PipelineExecutionSummary => {
  return {
    lastUpdateTime:
      output.lastUpdateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdateTime)))
        : undefined,
    pipelineExecutionId: __expectString(output.pipelineExecutionId),
    sourceRevisions:
      output.sourceRevisions != null ? de_SourceRevisionList(output.sourceRevisions, context) : undefined,
    startTime:
      output.startTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startTime))) : undefined,
    status: __expectString(output.status),
    stopTrigger: output.stopTrigger != null ? de_StopExecutionTrigger(output.stopTrigger, context) : undefined,
    trigger: output.trigger != null ? de_ExecutionTrigger(output.trigger, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1PipelineExecutionSummaryList
 */
const de_PipelineExecutionSummaryList = (output: any, context: __SerdeContext): PipelineExecutionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PipelineExecutionSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PipelineList
 */
const de_PipelineList = (output: any, context: __SerdeContext): PipelineSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PipelineSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PipelineMetadata
 */
const de_PipelineMetadata = (output: any, context: __SerdeContext): PipelineMetadata => {
  return {
    created:
      output.created != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.created))) : undefined,
    pipelineArn: __expectString(output.pipelineArn),
    updated:
      output.updated != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.updated))) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1PipelineNameInUseException
 */
const de_PipelineNameInUseException = (output: any, context: __SerdeContext): PipelineNameInUseException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1PipelineNotFoundException
 */
const de_PipelineNotFoundException = (output: any, context: __SerdeContext): PipelineNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1PipelineStageDeclarationList
 */
const de_PipelineStageDeclarationList = (output: any, context: __SerdeContext): StageDeclaration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_StageDeclaration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PipelineSummary
 */
const de_PipelineSummary = (output: any, context: __SerdeContext): PipelineSummary => {
  return {
    created:
      output.created != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.created))) : undefined,
    name: __expectString(output.name),
    updated:
      output.updated != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.updated))) : undefined,
    version: __expectInt32(output.version),
  } as any;
};

/**
 * deserializeAws_json1_1PipelineVersionNotFoundException
 */
const de_PipelineVersionNotFoundException = (
  output: any,
  context: __SerdeContext
): PipelineVersionNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1PollForJobsOutput
 */
const de_PollForJobsOutput = (output: any, context: __SerdeContext): PollForJobsOutput => {
  return {
    jobs: output.jobs != null ? de_JobList(output.jobs, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1PollForThirdPartyJobsOutput
 */
const de_PollForThirdPartyJobsOutput = (output: any, context: __SerdeContext): PollForThirdPartyJobsOutput => {
  return {
    jobs: output.jobs != null ? de_ThirdPartyJobList(output.jobs, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1PollingAccountList
 */
const de_PollingAccountList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PollingServicePrincipalList
 */
const de_PollingServicePrincipalList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PutActionRevisionOutput
 */
const de_PutActionRevisionOutput = (output: any, context: __SerdeContext): PutActionRevisionOutput => {
  return {
    newRevision: __expectBoolean(output.newRevision),
    pipelineExecutionId: __expectString(output.pipelineExecutionId),
  } as any;
};

/**
 * deserializeAws_json1_1PutApprovalResultOutput
 */
const de_PutApprovalResultOutput = (output: any, context: __SerdeContext): PutApprovalResultOutput => {
  return {
    approvedAt:
      output.approvedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.approvedAt))) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1PutWebhookOutput
 */
const de_PutWebhookOutput = (output: any, context: __SerdeContext): PutWebhookOutput => {
  return {
    webhook: output.webhook != null ? de_ListWebhookItem(output.webhook, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1RegisterWebhookWithThirdPartyOutput
 */
const de_RegisterWebhookWithThirdPartyOutput = (
  output: any,
  context: __SerdeContext
): RegisterWebhookWithThirdPartyOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1RequestFailedException
 */
const de_RequestFailedException = (output: any, context: __SerdeContext): RequestFailedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ResolvedActionConfigurationMap
 */
const de_ResolvedActionConfigurationMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1ResourceNotFoundException
 */
const de_ResourceNotFoundException = (output: any, context: __SerdeContext): ResourceNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1RetryStageExecutionOutput
 */
const de_RetryStageExecutionOutput = (output: any, context: __SerdeContext): RetryStageExecutionOutput => {
  return {
    pipelineExecutionId: __expectString(output.pipelineExecutionId),
  } as any;
};

/**
 * deserializeAws_json1_1S3ArtifactLocation
 */
const de_S3ArtifactLocation = (output: any, context: __SerdeContext): S3ArtifactLocation => {
  return {
    bucketName: __expectString(output.bucketName),
    objectKey: __expectString(output.objectKey),
  } as any;
};

/**
 * deserializeAws_json1_1S3Location
 */
const de_S3Location = (output: any, context: __SerdeContext): S3Location => {
  return {
    bucket: __expectString(output.bucket),
    key: __expectString(output.key),
  } as any;
};

/**
 * deserializeAws_json1_1SourceRevision
 */
const de_SourceRevision = (output: any, context: __SerdeContext): SourceRevision => {
  return {
    actionName: __expectString(output.actionName),
    revisionId: __expectString(output.revisionId),
    revisionSummary: __expectString(output.revisionSummary),
    revisionUrl: __expectString(output.revisionUrl),
  } as any;
};

/**
 * deserializeAws_json1_1SourceRevisionList
 */
const de_SourceRevisionList = (output: any, context: __SerdeContext): SourceRevision[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SourceRevision(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1StageActionDeclarationList
 */
const de_StageActionDeclarationList = (output: any, context: __SerdeContext): ActionDeclaration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ActionDeclaration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1StageBlockerDeclarationList
 */
const de_StageBlockerDeclarationList = (output: any, context: __SerdeContext): BlockerDeclaration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BlockerDeclaration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1StageContext
 */
const de_StageContext = (output: any, context: __SerdeContext): StageContext => {
  return {
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_json1_1StageDeclaration
 */
const de_StageDeclaration = (output: any, context: __SerdeContext): StageDeclaration => {
  return {
    actions: output.actions != null ? de_StageActionDeclarationList(output.actions, context) : undefined,
    blockers: output.blockers != null ? de_StageBlockerDeclarationList(output.blockers, context) : undefined,
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_json1_1StageExecution
 */
const de_StageExecution = (output: any, context: __SerdeContext): StageExecution => {
  return {
    pipelineExecutionId: __expectString(output.pipelineExecutionId),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_1StageNotFoundException
 */
const de_StageNotFoundException = (output: any, context: __SerdeContext): StageNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1StageNotRetryableException
 */
const de_StageNotRetryableException = (output: any, context: __SerdeContext): StageNotRetryableException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1StageState
 */
const de_StageState = (output: any, context: __SerdeContext): StageState => {
  return {
    actionStates: output.actionStates != null ? de_ActionStateList(output.actionStates, context) : undefined,
    inboundExecution: output.inboundExecution != null ? de_StageExecution(output.inboundExecution, context) : undefined,
    inboundTransitionState:
      output.inboundTransitionState != null ? de_TransitionState(output.inboundTransitionState, context) : undefined,
    latestExecution: output.latestExecution != null ? de_StageExecution(output.latestExecution, context) : undefined,
    stageName: __expectString(output.stageName),
  } as any;
};

/**
 * deserializeAws_json1_1StageStateList
 */
const de_StageStateList = (output: any, context: __SerdeContext): StageState[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_StageState(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1StartPipelineExecutionOutput
 */
const de_StartPipelineExecutionOutput = (output: any, context: __SerdeContext): StartPipelineExecutionOutput => {
  return {
    pipelineExecutionId: __expectString(output.pipelineExecutionId),
  } as any;
};

/**
 * deserializeAws_json1_1StopExecutionTrigger
 */
const de_StopExecutionTrigger = (output: any, context: __SerdeContext): StopExecutionTrigger => {
  return {
    reason: __expectString(output.reason),
  } as any;
};

/**
 * deserializeAws_json1_1StopPipelineExecutionOutput
 */
const de_StopPipelineExecutionOutput = (output: any, context: __SerdeContext): StopPipelineExecutionOutput => {
  return {
    pipelineExecutionId: __expectString(output.pipelineExecutionId),
  } as any;
};

/**
 * deserializeAws_json1_1Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    key: __expectString(output.key),
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_json1_1TagList
 */
const de_TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Tag(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TagResourceOutput
 */
const de_TagResourceOutput = (output: any, context: __SerdeContext): TagResourceOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1ThirdPartyJob
 */
const de_ThirdPartyJob = (output: any, context: __SerdeContext): ThirdPartyJob => {
  return {
    clientId: __expectString(output.clientId),
    jobId: __expectString(output.jobId),
  } as any;
};

/**
 * deserializeAws_json1_1ThirdPartyJobData
 */
const de_ThirdPartyJobData = (output: any, context: __SerdeContext): ThirdPartyJobData => {
  return {
    actionConfiguration:
      output.actionConfiguration != null ? de_ActionConfiguration(output.actionConfiguration, context) : undefined,
    actionTypeId: output.actionTypeId != null ? de_ActionTypeId(output.actionTypeId, context) : undefined,
    artifactCredentials:
      output.artifactCredentials != null ? de_AWSSessionCredentials(output.artifactCredentials, context) : undefined,
    continuationToken: __expectString(output.continuationToken),
    encryptionKey: output.encryptionKey != null ? de_EncryptionKey(output.encryptionKey, context) : undefined,
    inputArtifacts: output.inputArtifacts != null ? de_ArtifactList(output.inputArtifacts, context) : undefined,
    outputArtifacts: output.outputArtifacts != null ? de_ArtifactList(output.outputArtifacts, context) : undefined,
    pipelineContext: output.pipelineContext != null ? de_PipelineContext(output.pipelineContext, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ThirdPartyJobDetails
 */
const de_ThirdPartyJobDetails = (output: any, context: __SerdeContext): ThirdPartyJobDetails => {
  return {
    data: output.data != null ? de_ThirdPartyJobData(output.data, context) : undefined,
    id: __expectString(output.id),
    nonce: __expectString(output.nonce),
  } as any;
};

/**
 * deserializeAws_json1_1ThirdPartyJobList
 */
const de_ThirdPartyJobList = (output: any, context: __SerdeContext): ThirdPartyJob[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ThirdPartyJob(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TooManyTagsException
 */
const de_TooManyTagsException = (output: any, context: __SerdeContext): TooManyTagsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1TransitionState
 */
const de_TransitionState = (output: any, context: __SerdeContext): TransitionState => {
  return {
    disabledReason: __expectString(output.disabledReason),
    enabled: __expectBoolean(output.enabled),
    lastChangedAt:
      output.lastChangedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastChangedAt)))
        : undefined,
    lastChangedBy: __expectString(output.lastChangedBy),
  } as any;
};

/**
 * deserializeAws_json1_1UntagResourceOutput
 */
const de_UntagResourceOutput = (output: any, context: __SerdeContext): UntagResourceOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdatePipelineOutput
 */
const de_UpdatePipelineOutput = (output: any, context: __SerdeContext): UpdatePipelineOutput => {
  return {
    pipeline: output.pipeline != null ? de_PipelineDeclaration(output.pipeline, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ValidationException
 */
const de_ValidationException = (output: any, context: __SerdeContext): ValidationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1WebhookAuthConfiguration
 */
const de_WebhookAuthConfiguration = (output: any, context: __SerdeContext): WebhookAuthConfiguration => {
  return {
    AllowedIPRange: __expectString(output.AllowedIPRange),
    SecretToken: __expectString(output.SecretToken),
  } as any;
};

/**
 * deserializeAws_json1_1WebhookDefinition
 */
const de_WebhookDefinition = (output: any, context: __SerdeContext): WebhookDefinition => {
  return {
    authentication: __expectString(output.authentication),
    authenticationConfiguration:
      output.authenticationConfiguration != null
        ? de_WebhookAuthConfiguration(output.authenticationConfiguration, context)
        : undefined,
    filters: output.filters != null ? de_WebhookFilters(output.filters, context) : undefined,
    name: __expectString(output.name),
    targetAction: __expectString(output.targetAction),
    targetPipeline: __expectString(output.targetPipeline),
  } as any;
};

/**
 * deserializeAws_json1_1WebhookFilterRule
 */
const de_WebhookFilterRule = (output: any, context: __SerdeContext): WebhookFilterRule => {
  return {
    jsonPath: __expectString(output.jsonPath),
    matchEquals: __expectString(output.matchEquals),
  } as any;
};

/**
 * deserializeAws_json1_1WebhookFilters
 */
const de_WebhookFilters = (output: any, context: __SerdeContext): WebhookFilterRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_WebhookFilterRule(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1WebhookList
 */
const de_WebhookList = (output: any, context: __SerdeContext): ListWebhookItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ListWebhookItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1WebhookNotFoundException
 */
const de_WebhookNotFoundException = (output: any, context: __SerdeContext): WebhookNotFoundException => {
  return {} as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
    headers,
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};
function sharedHeaders(operation: string): __HeaderBag {
  return {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `CodePipeline_20150709.${operation}`,
  };
}

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
};

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string | number): string => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }
};
