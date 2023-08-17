// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  parseEpochTimestamp as __parseEpochTimestamp,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
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
  AcknowledgeThirdPartyJobInput,
  ActionConfigurationProperty,
  ActionDeclaration,
  ActionExecution,
  ActionExecutionDetail,
  ActionExecutionFilter,
  ActionNotFoundException,
  ActionRevision,
  ActionState,
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
  ArtifactDetails,
  ArtifactRevision,
  ArtifactStore,
  BlockerDeclaration,
  ConcurrentModificationException,
  ConflictException,
  CreateCustomActionTypeInput,
  CreatePipelineInput,
  CurrentRevision,
  DeleteCustomActionTypeInput,
  DeletePipelineInput,
  DeleteWebhookInput,
  DeregisterWebhookWithThirdPartyInput,
  DisableStageTransitionInput,
  DuplicatedStopRequestException,
  EnableStageTransitionInput,
  EncryptionKey,
  ExecutionDetails,
  ExecutorConfiguration,
  FailureDetails,
  GetActionTypeInput,
  GetJobDetailsInput,
  GetPipelineExecutionInput,
  GetPipelineExecutionOutput,
  GetPipelineInput,
  GetPipelineOutput,
  GetPipelineStateInput,
  GetPipelineStateOutput,
  GetThirdPartyJobDetailsInput,
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
  JobNotFoundException,
  JobWorkerExecutorConfiguration,
  LambdaExecutorConfiguration,
  LimitExceededException,
  ListActionExecutionsInput,
  ListActionExecutionsOutput,
  ListActionTypesInput,
  ListPipelineExecutionsInput,
  ListPipelineExecutionsOutput,
  ListPipelinesInput,
  ListPipelinesOutput,
  ListTagsForResourceInput,
  ListWebhookItem,
  ListWebhooksInput,
  ListWebhooksOutput,
  NotLatestPipelineExecutionException,
  OutputArtifact,
  OutputVariablesSizeExceededException,
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
  PollForThirdPartyJobsInput,
  PutActionRevisionInput,
  PutApprovalResultInput,
  PutApprovalResultOutput,
  PutJobFailureResultInput,
  PutJobSuccessResultInput,
  PutThirdPartyJobFailureResultInput,
  PutThirdPartyJobSuccessResultInput,
  PutWebhookInput,
  PutWebhookOutput,
  RegisterWebhookWithThirdPartyInput,
  RequestFailedException,
  ResourceNotFoundException,
  RetryStageExecutionInput,
  StageDeclaration,
  StageNotFoundException,
  StageNotRetryableException,
  StageState,
  StartPipelineExecutionInput,
  StopPipelineExecutionInput,
  Tag,
  TagResourceInput,
  TooManyTagsException,
  TransitionState,
  UntagResourceInput,
  UpdateActionTypeInput,
  UpdatePipelineInput,
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  contents = _json(data);
  const response: AcknowledgeJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: AcknowledgeThirdPartyJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateCustomActionTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreatePipelineCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteWebhookCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeregisterWebhookWithThirdPartyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetActionTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetJobDetailsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetThirdPartyJobDetailsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListActionTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: PollForJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: PollForThirdPartyJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: PutActionRevisionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: RegisterWebhookWithThirdPartyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: RetryStageExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: StartPipelineExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: StopPipelineExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdatePipelineCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
  const exception = new WebhookNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_AcknowledgeJobInput omitted.

// se_AcknowledgeThirdPartyJobInput omitted.

// se_ActionConfigurationMap omitted.

// se_ActionConfigurationProperty omitted.

// se_ActionConfigurationPropertyList omitted.

// se_ActionDeclaration omitted.

// se_ActionExecutionFilter omitted.

/**
 * serializeAws_json1_1ActionRevision
 */
const se_ActionRevision = (input: ActionRevision, context: __SerdeContext): any => {
  return take(input, {
    created: (_) => Math.round(_.getTime() / 1000),
    revisionChangeId: [],
    revisionId: [],
  });
};

// se_ActionTypeArtifactDetails omitted.

// se_ActionTypeDeclaration omitted.

// se_ActionTypeExecutor omitted.

// se_ActionTypeId omitted.

// se_ActionTypeIdentifier omitted.

// se_ActionTypePermissions omitted.

// se_ActionTypeProperties omitted.

// se_ActionTypeProperty omitted.

// se_ActionTypeSettings omitted.

// se_ActionTypeUrls omitted.

// se_AllowedAccounts omitted.

// se_ApprovalResult omitted.

// se_ArtifactDetails omitted.

// se_ArtifactStore omitted.

// se_ArtifactStoreMap omitted.

// se_BlockerDeclaration omitted.

// se_CreateCustomActionTypeInput omitted.

// se_CreatePipelineInput omitted.

/**
 * serializeAws_json1_1CurrentRevision
 */
const se_CurrentRevision = (input: CurrentRevision, context: __SerdeContext): any => {
  return take(input, {
    changeIdentifier: [],
    created: (_) => Math.round(_.getTime() / 1000),
    revision: [],
    revisionSummary: [],
  });
};

// se_DeleteCustomActionTypeInput omitted.

// se_DeletePipelineInput omitted.

// se_DeleteWebhookInput omitted.

// se_DeregisterWebhookWithThirdPartyInput omitted.

// se_DisableStageTransitionInput omitted.

// se_EnableStageTransitionInput omitted.

// se_EncryptionKey omitted.

// se_ExecutionDetails omitted.

// se_ExecutorConfiguration omitted.

// se_FailureDetails omitted.

// se_GetActionTypeInput omitted.

// se_GetJobDetailsInput omitted.

// se_GetPipelineExecutionInput omitted.

// se_GetPipelineInput omitted.

// se_GetPipelineStateInput omitted.

// se_GetThirdPartyJobDetailsInput omitted.

// se_InputArtifact omitted.

// se_InputArtifactList omitted.

// se_JobWorkerExecutorConfiguration omitted.

// se_LambdaExecutorConfiguration omitted.

// se_ListActionExecutionsInput omitted.

// se_ListActionTypesInput omitted.

// se_ListPipelineExecutionsInput omitted.

// se_ListPipelinesInput omitted.

// se_ListTagsForResourceInput omitted.

// se_ListWebhooksInput omitted.

// se_OutputArtifact omitted.

// se_OutputArtifactList omitted.

// se_OutputVariablesMap omitted.

// se_PipelineDeclaration omitted.

// se_PipelineStageDeclarationList omitted.

// se_PollForJobsInput omitted.

// se_PollForThirdPartyJobsInput omitted.

// se_PollingAccountList omitted.

// se_PollingServicePrincipalList omitted.

/**
 * serializeAws_json1_1PutActionRevisionInput
 */
const se_PutActionRevisionInput = (input: PutActionRevisionInput, context: __SerdeContext): any => {
  return take(input, {
    actionName: [],
    actionRevision: (_) => se_ActionRevision(_, context),
    pipelineName: [],
    stageName: [],
  });
};

// se_PutApprovalResultInput omitted.

// se_PutJobFailureResultInput omitted.

/**
 * serializeAws_json1_1PutJobSuccessResultInput
 */
const se_PutJobSuccessResultInput = (input: PutJobSuccessResultInput, context: __SerdeContext): any => {
  return take(input, {
    continuationToken: [],
    currentRevision: (_) => se_CurrentRevision(_, context),
    executionDetails: _json,
    jobId: [],
    outputVariables: _json,
  });
};

// se_PutThirdPartyJobFailureResultInput omitted.

/**
 * serializeAws_json1_1PutThirdPartyJobSuccessResultInput
 */
const se_PutThirdPartyJobSuccessResultInput = (
  input: PutThirdPartyJobSuccessResultInput,
  context: __SerdeContext
): any => {
  return take(input, {
    clientToken: [],
    continuationToken: [],
    currentRevision: (_) => se_CurrentRevision(_, context),
    executionDetails: _json,
    jobId: [],
  });
};

// se_PutWebhookInput omitted.

// se_QueryParamMap omitted.

// se_RegisterWebhookWithThirdPartyInput omitted.

// se_RetryStageExecutionInput omitted.

// se_StageActionDeclarationList omitted.

// se_StageBlockerDeclarationList omitted.

// se_StageDeclaration omitted.

/**
 * serializeAws_json1_1StartPipelineExecutionInput
 */
const se_StartPipelineExecutionInput = (input: StartPipelineExecutionInput, context: __SerdeContext): any => {
  return take(input, {
    clientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    name: [],
  });
};

// se_StopPipelineExecutionInput omitted.

// se_Tag omitted.

// se_TagKeyList omitted.

// se_TagList omitted.

// se_TagResourceInput omitted.

// se_UntagResourceInput omitted.

// se_UpdateActionTypeInput omitted.

// se_UpdatePipelineInput omitted.

// se_WebhookAuthConfiguration omitted.

// se_WebhookDefinition omitted.

// se_WebhookFilterRule omitted.

// se_WebhookFilters omitted.

// de_AcknowledgeJobOutput omitted.

// de_AcknowledgeThirdPartyJobOutput omitted.

// de_ActionConfiguration omitted.

// de_ActionConfigurationMap omitted.

// de_ActionConfigurationProperty omitted.

// de_ActionConfigurationPropertyList omitted.

// de_ActionContext omitted.

// de_ActionDeclaration omitted.

/**
 * deserializeAws_json1_1ActionExecution
 */
const de_ActionExecution = (output: any, context: __SerdeContext): ActionExecution => {
  return take(output, {
    actionExecutionId: __expectString,
    errorDetails: _json,
    externalExecutionId: __expectString,
    externalExecutionUrl: __expectString,
    lastStatusChange: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastUpdatedBy: __expectString,
    percentComplete: __expectInt32,
    status: __expectString,
    summary: __expectString,
    token: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ActionExecutionDetail
 */
const de_ActionExecutionDetail = (output: any, context: __SerdeContext): ActionExecutionDetail => {
  return take(output, {
    actionExecutionId: __expectString,
    actionName: __expectString,
    input: _json,
    lastUpdateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    output: _json,
    pipelineExecutionId: __expectString,
    pipelineVersion: __expectInt32,
    stageName: __expectString,
    startTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ActionExecutionDetailList
 */
const de_ActionExecutionDetailList = (output: any, context: __SerdeContext): ActionExecutionDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ActionExecutionDetail(entry, context);
    });
  return retVal;
};

// de_ActionExecutionInput omitted.

// de_ActionExecutionOutput omitted.

// de_ActionExecutionResult omitted.

// de_ActionNotFoundException omitted.

/**
 * deserializeAws_json1_1ActionRevision
 */
const de_ActionRevision = (output: any, context: __SerdeContext): ActionRevision => {
  return take(output, {
    created: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    revisionChangeId: __expectString,
    revisionId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ActionState
 */
const de_ActionState = (output: any, context: __SerdeContext): ActionState => {
  return take(output, {
    actionName: __expectString,
    currentRevision: (_: any) => de_ActionRevision(_, context),
    entityUrl: __expectString,
    latestExecution: (_: any) => de_ActionExecution(_, context),
    revisionUrl: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ActionStateList
 */
const de_ActionStateList = (output: any, context: __SerdeContext): ActionState[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ActionState(entry, context);
    });
  return retVal;
};

// de_ActionType omitted.

// de_ActionTypeArtifactDetails omitted.

// de_ActionTypeDeclaration omitted.

// de_ActionTypeExecutor omitted.

// de_ActionTypeId omitted.

// de_ActionTypeIdentifier omitted.

// de_ActionTypeList omitted.

// de_ActionTypeNotFoundException omitted.

// de_ActionTypePermissions omitted.

// de_ActionTypeProperties omitted.

// de_ActionTypeProperty omitted.

// de_ActionTypeSettings omitted.

// de_ActionTypeUrls omitted.

// de_AllowedAccounts omitted.

// de_ApprovalAlreadyCompletedException omitted.

// de_Artifact omitted.

// de_ArtifactDetail omitted.

// de_ArtifactDetailList omitted.

// de_ArtifactDetails omitted.

// de_ArtifactList omitted.

// de_ArtifactLocation omitted.

/**
 * deserializeAws_json1_1ArtifactRevision
 */
const de_ArtifactRevision = (output: any, context: __SerdeContext): ArtifactRevision => {
  return take(output, {
    created: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    revisionChangeIdentifier: __expectString,
    revisionId: __expectString,
    revisionSummary: __expectString,
    revisionUrl: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ArtifactRevisionList
 */
const de_ArtifactRevisionList = (output: any, context: __SerdeContext): ArtifactRevision[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ArtifactRevision(entry, context);
    });
  return retVal;
};

// de_ArtifactStore omitted.

// de_ArtifactStoreMap omitted.

// de_AWSSessionCredentials omitted.

// de_BlockerDeclaration omitted.

// de_ConcurrentModificationException omitted.

// de_ConflictException omitted.

// de_CreateCustomActionTypeOutput omitted.

// de_CreatePipelineOutput omitted.

// de_DeleteWebhookOutput omitted.

// de_DeregisterWebhookWithThirdPartyOutput omitted.

// de_DuplicatedStopRequestException omitted.

// de_EncryptionKey omitted.

// de_ErrorDetails omitted.

// de_ExecutionTrigger omitted.

// de_ExecutorConfiguration omitted.

// de_GetActionTypeOutput omitted.

// de_GetJobDetailsOutput omitted.

/**
 * deserializeAws_json1_1GetPipelineExecutionOutput
 */
const de_GetPipelineExecutionOutput = (output: any, context: __SerdeContext): GetPipelineExecutionOutput => {
  return take(output, {
    pipelineExecution: (_: any) => de_PipelineExecution(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetPipelineOutput
 */
const de_GetPipelineOutput = (output: any, context: __SerdeContext): GetPipelineOutput => {
  return take(output, {
    metadata: (_: any) => de_PipelineMetadata(_, context),
    pipeline: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1GetPipelineStateOutput
 */
const de_GetPipelineStateOutput = (output: any, context: __SerdeContext): GetPipelineStateOutput => {
  return take(output, {
    created: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    pipelineName: __expectString,
    pipelineVersion: __expectInt32,
    stageStates: (_: any) => de_StageStateList(_, context),
    updated: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_GetThirdPartyJobDetailsOutput omitted.

// de_InputArtifact omitted.

// de_InputArtifactList omitted.

// de_InvalidActionDeclarationException omitted.

// de_InvalidApprovalTokenException omitted.

// de_InvalidArnException omitted.

// de_InvalidBlockerDeclarationException omitted.

// de_InvalidClientTokenException omitted.

// de_InvalidJobException omitted.

// de_InvalidJobStateException omitted.

// de_InvalidNextTokenException omitted.

// de_InvalidNonceException omitted.

// de_InvalidStageDeclarationException omitted.

// de_InvalidStructureException omitted.

// de_InvalidTagsException omitted.

// de_InvalidWebhookAuthenticationParametersException omitted.

// de_InvalidWebhookFilterPatternException omitted.

// de_Job omitted.

// de_JobData omitted.

// de_JobDetails omitted.

// de_JobList omitted.

// de_JobNotFoundException omitted.

// de_JobWorkerExecutorConfiguration omitted.

// de_LambdaExecutorConfiguration omitted.

// de_LimitExceededException omitted.

/**
 * deserializeAws_json1_1ListActionExecutionsOutput
 */
const de_ListActionExecutionsOutput = (output: any, context: __SerdeContext): ListActionExecutionsOutput => {
  return take(output, {
    actionExecutionDetails: (_: any) => de_ActionExecutionDetailList(_, context),
    nextToken: __expectString,
  }) as any;
};

// de_ListActionTypesOutput omitted.

/**
 * deserializeAws_json1_1ListPipelineExecutionsOutput
 */
const de_ListPipelineExecutionsOutput = (output: any, context: __SerdeContext): ListPipelineExecutionsOutput => {
  return take(output, {
    nextToken: __expectString,
    pipelineExecutionSummaries: (_: any) => de_PipelineExecutionSummaryList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListPipelinesOutput
 */
const de_ListPipelinesOutput = (output: any, context: __SerdeContext): ListPipelinesOutput => {
  return take(output, {
    nextToken: __expectString,
    pipelines: (_: any) => de_PipelineList(_, context),
  }) as any;
};

// de_ListTagsForResourceOutput omitted.

/**
 * deserializeAws_json1_1ListWebhookItem
 */
const de_ListWebhookItem = (output: any, context: __SerdeContext): ListWebhookItem => {
  return take(output, {
    arn: __expectString,
    definition: _json,
    errorCode: __expectString,
    errorMessage: __expectString,
    lastTriggered: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    tags: _json,
    url: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListWebhooksOutput
 */
const de_ListWebhooksOutput = (output: any, context: __SerdeContext): ListWebhooksOutput => {
  return take(output, {
    NextToken: __expectString,
    webhooks: (_: any) => de_WebhookList(_, context),
  }) as any;
};

// de_NotLatestPipelineExecutionException omitted.

// de_OutputArtifact omitted.

// de_OutputArtifactList omitted.

// de_OutputVariablesMap omitted.

// de_OutputVariablesSizeExceededException omitted.

// de_PipelineContext omitted.

// de_PipelineDeclaration omitted.

/**
 * deserializeAws_json1_1PipelineExecution
 */
const de_PipelineExecution = (output: any, context: __SerdeContext): PipelineExecution => {
  return take(output, {
    artifactRevisions: (_: any) => de_ArtifactRevisionList(_, context),
    pipelineExecutionId: __expectString,
    pipelineName: __expectString,
    pipelineVersion: __expectInt32,
    status: __expectString,
    statusSummary: __expectString,
  }) as any;
};

// de_PipelineExecutionNotFoundException omitted.

// de_PipelineExecutionNotStoppableException omitted.

/**
 * deserializeAws_json1_1PipelineExecutionSummary
 */
const de_PipelineExecutionSummary = (output: any, context: __SerdeContext): PipelineExecutionSummary => {
  return take(output, {
    lastUpdateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    pipelineExecutionId: __expectString,
    sourceRevisions: _json,
    startTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
    stopTrigger: _json,
    trigger: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1PipelineExecutionSummaryList
 */
const de_PipelineExecutionSummaryList = (output: any, context: __SerdeContext): PipelineExecutionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
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
      return de_PipelineSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PipelineMetadata
 */
const de_PipelineMetadata = (output: any, context: __SerdeContext): PipelineMetadata => {
  return take(output, {
    created: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    pipelineArn: __expectString,
    pollingDisabledAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    updated: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_PipelineNameInUseException omitted.

// de_PipelineNotFoundException omitted.

// de_PipelineStageDeclarationList omitted.

/**
 * deserializeAws_json1_1PipelineSummary
 */
const de_PipelineSummary = (output: any, context: __SerdeContext): PipelineSummary => {
  return take(output, {
    created: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    updated: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    version: __expectInt32,
  }) as any;
};

// de_PipelineVersionNotFoundException omitted.

// de_PollForJobsOutput omitted.

// de_PollForThirdPartyJobsOutput omitted.

// de_PollingAccountList omitted.

// de_PollingServicePrincipalList omitted.

// de_PutActionRevisionOutput omitted.

/**
 * deserializeAws_json1_1PutApprovalResultOutput
 */
const de_PutApprovalResultOutput = (output: any, context: __SerdeContext): PutApprovalResultOutput => {
  return take(output, {
    approvedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1PutWebhookOutput
 */
const de_PutWebhookOutput = (output: any, context: __SerdeContext): PutWebhookOutput => {
  return take(output, {
    webhook: (_: any) => de_ListWebhookItem(_, context),
  }) as any;
};

// de_RegisterWebhookWithThirdPartyOutput omitted.

// de_RequestFailedException omitted.

// de_ResolvedActionConfigurationMap omitted.

// de_ResourceNotFoundException omitted.

// de_RetryStageExecutionOutput omitted.

// de_S3ArtifactLocation omitted.

// de_S3Location omitted.

// de_SourceRevision omitted.

// de_SourceRevisionList omitted.

// de_StageActionDeclarationList omitted.

// de_StageBlockerDeclarationList omitted.

// de_StageContext omitted.

// de_StageDeclaration omitted.

// de_StageExecution omitted.

// de_StageNotFoundException omitted.

// de_StageNotRetryableException omitted.

/**
 * deserializeAws_json1_1StageState
 */
const de_StageState = (output: any, context: __SerdeContext): StageState => {
  return take(output, {
    actionStates: (_: any) => de_ActionStateList(_, context),
    inboundExecution: _json,
    inboundTransitionState: (_: any) => de_TransitionState(_, context),
    latestExecution: _json,
    stageName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1StageStateList
 */
const de_StageStateList = (output: any, context: __SerdeContext): StageState[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_StageState(entry, context);
    });
  return retVal;
};

// de_StartPipelineExecutionOutput omitted.

// de_StopExecutionTrigger omitted.

// de_StopPipelineExecutionOutput omitted.

// de_Tag omitted.

// de_TagList omitted.

// de_TagResourceOutput omitted.

// de_ThirdPartyJob omitted.

// de_ThirdPartyJobData omitted.

// de_ThirdPartyJobDetails omitted.

// de_ThirdPartyJobList omitted.

// de_TooManyTagsException omitted.

/**
 * deserializeAws_json1_1TransitionState
 */
const de_TransitionState = (output: any, context: __SerdeContext): TransitionState => {
  return take(output, {
    disabledReason: __expectString,
    enabled: __expectBoolean,
    lastChangedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastChangedBy: __expectString,
  }) as any;
};

// de_UntagResourceOutput omitted.

// de_UpdatePipelineOutput omitted.

// de_ValidationException omitted.

// de_WebhookAuthConfiguration omitted.

// de_WebhookDefinition omitted.

// de_WebhookFilterRule omitted.

// de_WebhookFilters omitted.

/**
 * deserializeAws_json1_1WebhookList
 */
const de_WebhookList = (output: any, context: __SerdeContext): ListWebhookItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ListWebhookItem(entry, context);
    });
  return retVal;
};

// de_WebhookNotFoundException omitted.

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const throwDefaultError = withBaseException(__BaseException);
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
