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

export const serializeAws_json1_1AcknowledgeJobCommand = async (
  input: AcknowledgeJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodePipeline_20150709.AcknowledgeJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AcknowledgeJobInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AcknowledgeThirdPartyJobCommand = async (
  input: AcknowledgeThirdPartyJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodePipeline_20150709.AcknowledgeThirdPartyJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AcknowledgeThirdPartyJobInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateCustomActionTypeCommand = async (
  input: CreateCustomActionTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodePipeline_20150709.CreateCustomActionType",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateCustomActionTypeInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreatePipelineCommand = async (
  input: CreatePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodePipeline_20150709.CreatePipeline",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreatePipelineInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteCustomActionTypeCommand = async (
  input: DeleteCustomActionTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodePipeline_20150709.DeleteCustomActionType",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteCustomActionTypeInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeletePipelineCommand = async (
  input: DeletePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodePipeline_20150709.DeletePipeline",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeletePipelineInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteWebhookCommand = async (
  input: DeleteWebhookCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodePipeline_20150709.DeleteWebhook",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteWebhookInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeregisterWebhookWithThirdPartyCommand = async (
  input: DeregisterWebhookWithThirdPartyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodePipeline_20150709.DeregisterWebhookWithThirdParty",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeregisterWebhookWithThirdPartyInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisableStageTransitionCommand = async (
  input: DisableStageTransitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodePipeline_20150709.DisableStageTransition",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DisableStageTransitionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1EnableStageTransitionCommand = async (
  input: EnableStageTransitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodePipeline_20150709.EnableStageTransition",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1EnableStageTransitionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetActionTypeCommand = async (
  input: GetActionTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodePipeline_20150709.GetActionType",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetActionTypeInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetJobDetailsCommand = async (
  input: GetJobDetailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodePipeline_20150709.GetJobDetails",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetJobDetailsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetPipelineCommand = async (
  input: GetPipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodePipeline_20150709.GetPipeline",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetPipelineInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetPipelineExecutionCommand = async (
  input: GetPipelineExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodePipeline_20150709.GetPipelineExecution",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetPipelineExecutionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetPipelineStateCommand = async (
  input: GetPipelineStateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodePipeline_20150709.GetPipelineState",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetPipelineStateInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetThirdPartyJobDetailsCommand = async (
  input: GetThirdPartyJobDetailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodePipeline_20150709.GetThirdPartyJobDetails",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetThirdPartyJobDetailsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListActionExecutionsCommand = async (
  input: ListActionExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodePipeline_20150709.ListActionExecutions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListActionExecutionsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListActionTypesCommand = async (
  input: ListActionTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodePipeline_20150709.ListActionTypes",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListActionTypesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListPipelineExecutionsCommand = async (
  input: ListPipelineExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodePipeline_20150709.ListPipelineExecutions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListPipelineExecutionsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListPipelinesCommand = async (
  input: ListPipelinesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodePipeline_20150709.ListPipelines",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListPipelinesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodePipeline_20150709.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTagsForResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListWebhooksCommand = async (
  input: ListWebhooksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodePipeline_20150709.ListWebhooks",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListWebhooksInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PollForJobsCommand = async (
  input: PollForJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodePipeline_20150709.PollForJobs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PollForJobsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PollForThirdPartyJobsCommand = async (
  input: PollForThirdPartyJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodePipeline_20150709.PollForThirdPartyJobs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PollForThirdPartyJobsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutActionRevisionCommand = async (
  input: PutActionRevisionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodePipeline_20150709.PutActionRevision",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutActionRevisionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutApprovalResultCommand = async (
  input: PutApprovalResultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodePipeline_20150709.PutApprovalResult",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutApprovalResultInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutJobFailureResultCommand = async (
  input: PutJobFailureResultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodePipeline_20150709.PutJobFailureResult",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutJobFailureResultInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutJobSuccessResultCommand = async (
  input: PutJobSuccessResultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodePipeline_20150709.PutJobSuccessResult",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutJobSuccessResultInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutThirdPartyJobFailureResultCommand = async (
  input: PutThirdPartyJobFailureResultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodePipeline_20150709.PutThirdPartyJobFailureResult",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutThirdPartyJobFailureResultInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutThirdPartyJobSuccessResultCommand = async (
  input: PutThirdPartyJobSuccessResultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodePipeline_20150709.PutThirdPartyJobSuccessResult",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutThirdPartyJobSuccessResultInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutWebhookCommand = async (
  input: PutWebhookCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodePipeline_20150709.PutWebhook",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutWebhookInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RegisterWebhookWithThirdPartyCommand = async (
  input: RegisterWebhookWithThirdPartyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodePipeline_20150709.RegisterWebhookWithThirdParty",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RegisterWebhookWithThirdPartyInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RetryStageExecutionCommand = async (
  input: RetryStageExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodePipeline_20150709.RetryStageExecution",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RetryStageExecutionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartPipelineExecutionCommand = async (
  input: StartPipelineExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodePipeline_20150709.StartPipelineExecution",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartPipelineExecutionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopPipelineExecutionCommand = async (
  input: StopPipelineExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodePipeline_20150709.StopPipelineExecution",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopPipelineExecutionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodePipeline_20150709.TagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodePipeline_20150709.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UntagResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateActionTypeCommand = async (
  input: UpdateActionTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodePipeline_20150709.UpdateActionType",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateActionTypeInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdatePipelineCommand = async (
  input: UpdatePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodePipeline_20150709.UpdatePipeline",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdatePipelineInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1AcknowledgeJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcknowledgeJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AcknowledgeJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AcknowledgeJobOutput(data, context);
  const response: AcknowledgeJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AcknowledgeJobCommandError = async (
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
      throw await deserializeAws_json1_1InvalidNonceExceptionResponse(parsedOutput, context);
    case "JobNotFoundException":
    case "com.amazonaws.codepipeline#JobNotFoundException":
      throw await deserializeAws_json1_1JobNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1AcknowledgeThirdPartyJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcknowledgeThirdPartyJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AcknowledgeThirdPartyJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AcknowledgeThirdPartyJobOutput(data, context);
  const response: AcknowledgeThirdPartyJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AcknowledgeThirdPartyJobCommandError = async (
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
      throw await deserializeAws_json1_1InvalidClientTokenExceptionResponse(parsedOutput, context);
    case "InvalidNonceException":
    case "com.amazonaws.codepipeline#InvalidNonceException":
      throw await deserializeAws_json1_1InvalidNonceExceptionResponse(parsedOutput, context);
    case "JobNotFoundException":
    case "com.amazonaws.codepipeline#JobNotFoundException":
      throw await deserializeAws_json1_1JobNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateCustomActionTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomActionTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateCustomActionTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateCustomActionTypeOutput(data, context);
  const response: CreateCustomActionTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateCustomActionTypeCommandError = async (
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
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InvalidTagsException":
    case "com.amazonaws.codepipeline#InvalidTagsException":
      throw await deserializeAws_json1_1InvalidTagsExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.codepipeline#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.codepipeline#TooManyTagsException":
      throw await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreatePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePipelineCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreatePipelineCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreatePipelineOutput(data, context);
  const response: CreatePipelineCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreatePipelineCommandError = async (
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
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InvalidActionDeclarationException":
    case "com.amazonaws.codepipeline#InvalidActionDeclarationException":
      throw await deserializeAws_json1_1InvalidActionDeclarationExceptionResponse(parsedOutput, context);
    case "InvalidBlockerDeclarationException":
    case "com.amazonaws.codepipeline#InvalidBlockerDeclarationException":
      throw await deserializeAws_json1_1InvalidBlockerDeclarationExceptionResponse(parsedOutput, context);
    case "InvalidStageDeclarationException":
    case "com.amazonaws.codepipeline#InvalidStageDeclarationException":
      throw await deserializeAws_json1_1InvalidStageDeclarationExceptionResponse(parsedOutput, context);
    case "InvalidStructureException":
    case "com.amazonaws.codepipeline#InvalidStructureException":
      throw await deserializeAws_json1_1InvalidStructureExceptionResponse(parsedOutput, context);
    case "InvalidTagsException":
    case "com.amazonaws.codepipeline#InvalidTagsException":
      throw await deserializeAws_json1_1InvalidTagsExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.codepipeline#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "PipelineNameInUseException":
    case "com.amazonaws.codepipeline#PipelineNameInUseException":
      throw await deserializeAws_json1_1PipelineNameInUseExceptionResponse(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.codepipeline#TooManyTagsException":
      throw await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteCustomActionTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomActionTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteCustomActionTypeCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteCustomActionTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteCustomActionTypeCommandError = async (
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
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeletePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePipelineCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeletePipelineCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeletePipelineCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeletePipelineCommandError = async (
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
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteWebhookCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWebhookCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteWebhookCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteWebhookOutput(data, context);
  const response: DeleteWebhookCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteWebhookCommandError = async (
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
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeregisterWebhookWithThirdPartyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterWebhookWithThirdPartyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeregisterWebhookWithThirdPartyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeregisterWebhookWithThirdPartyOutput(data, context);
  const response: DeregisterWebhookWithThirdPartyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeregisterWebhookWithThirdPartyCommandError = async (
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
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
    case "WebhookNotFoundException":
    case "com.amazonaws.codepipeline#WebhookNotFoundException":
      throw await deserializeAws_json1_1WebhookNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DisableStageTransitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableStageTransitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DisableStageTransitionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DisableStageTransitionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisableStageTransitionCommandError = async (
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
      throw await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context);
    case "StageNotFoundException":
    case "com.amazonaws.codepipeline#StageNotFoundException":
      throw await deserializeAws_json1_1StageNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1EnableStageTransitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableStageTransitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1EnableStageTransitionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: EnableStageTransitionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1EnableStageTransitionCommandError = async (
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
      throw await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context);
    case "StageNotFoundException":
    case "com.amazonaws.codepipeline#StageNotFoundException":
      throw await deserializeAws_json1_1StageNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetActionTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetActionTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetActionTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetActionTypeOutput(data, context);
  const response: GetActionTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetActionTypeCommandError = async (
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
      throw await deserializeAws_json1_1ActionTypeNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetJobDetailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobDetailsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetJobDetailsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetJobDetailsOutput(data, context);
  const response: GetJobDetailsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetJobDetailsCommandError = async (
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
      throw await deserializeAws_json1_1JobNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetPipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPipelineCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetPipelineCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetPipelineOutput(data, context);
  const response: GetPipelineCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetPipelineCommandError = async (
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
      throw await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context);
    case "PipelineVersionNotFoundException":
    case "com.amazonaws.codepipeline#PipelineVersionNotFoundException":
      throw await deserializeAws_json1_1PipelineVersionNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetPipelineExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPipelineExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetPipelineExecutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetPipelineExecutionOutput(data, context);
  const response: GetPipelineExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetPipelineExecutionCommandError = async (
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
      throw await deserializeAws_json1_1PipelineExecutionNotFoundExceptionResponse(parsedOutput, context);
    case "PipelineNotFoundException":
    case "com.amazonaws.codepipeline#PipelineNotFoundException":
      throw await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetPipelineStateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPipelineStateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetPipelineStateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetPipelineStateOutput(data, context);
  const response: GetPipelineStateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetPipelineStateCommandError = async (
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
      throw await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetThirdPartyJobDetailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetThirdPartyJobDetailsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetThirdPartyJobDetailsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetThirdPartyJobDetailsOutput(data, context);
  const response: GetThirdPartyJobDetailsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetThirdPartyJobDetailsCommandError = async (
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
      throw await deserializeAws_json1_1InvalidClientTokenExceptionResponse(parsedOutput, context);
    case "InvalidJobException":
    case "com.amazonaws.codepipeline#InvalidJobException":
      throw await deserializeAws_json1_1InvalidJobExceptionResponse(parsedOutput, context);
    case "JobNotFoundException":
    case "com.amazonaws.codepipeline#JobNotFoundException":
      throw await deserializeAws_json1_1JobNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListActionExecutionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListActionExecutionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListActionExecutionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListActionExecutionsOutput(data, context);
  const response: ListActionExecutionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListActionExecutionsCommandError = async (
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
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "PipelineExecutionNotFoundException":
    case "com.amazonaws.codepipeline#PipelineExecutionNotFoundException":
      throw await deserializeAws_json1_1PipelineExecutionNotFoundExceptionResponse(parsedOutput, context);
    case "PipelineNotFoundException":
    case "com.amazonaws.codepipeline#PipelineNotFoundException":
      throw await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListActionTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListActionTypesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListActionTypesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListActionTypesOutput(data, context);
  const response: ListActionTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListActionTypesCommandError = async (
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
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListPipelineExecutionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPipelineExecutionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListPipelineExecutionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListPipelineExecutionsOutput(data, context);
  const response: ListPipelineExecutionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListPipelineExecutionsCommandError = async (
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
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "PipelineNotFoundException":
    case "com.amazonaws.codepipeline#PipelineNotFoundException":
      throw await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListPipelinesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPipelinesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListPipelinesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListPipelinesOutput(data, context);
  const response: ListPipelinesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListPipelinesCommandError = async (
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
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForResourceOutput(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTagsForResourceCommandError = async (
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
      throw await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.codepipeline#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codepipeline#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListWebhooksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWebhooksCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListWebhooksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListWebhooksOutput(data, context);
  const response: ListWebhooksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListWebhooksCommandError = async (
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
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PollForJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PollForJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PollForJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PollForJobsOutput(data, context);
  const response: PollForJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PollForJobsCommandError = async (
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
      throw await deserializeAws_json1_1ActionTypeNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PollForThirdPartyJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PollForThirdPartyJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PollForThirdPartyJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PollForThirdPartyJobsOutput(data, context);
  const response: PollForThirdPartyJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PollForThirdPartyJobsCommandError = async (
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
      throw await deserializeAws_json1_1ActionTypeNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PutActionRevisionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutActionRevisionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutActionRevisionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutActionRevisionOutput(data, context);
  const response: PutActionRevisionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutActionRevisionCommandError = async (
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
      throw await deserializeAws_json1_1ActionNotFoundExceptionResponse(parsedOutput, context);
    case "PipelineNotFoundException":
    case "com.amazonaws.codepipeline#PipelineNotFoundException":
      throw await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context);
    case "StageNotFoundException":
    case "com.amazonaws.codepipeline#StageNotFoundException":
      throw await deserializeAws_json1_1StageNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PutApprovalResultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutApprovalResultCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutApprovalResultCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutApprovalResultOutput(data, context);
  const response: PutApprovalResultCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutApprovalResultCommandError = async (
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
      throw await deserializeAws_json1_1ActionNotFoundExceptionResponse(parsedOutput, context);
    case "ApprovalAlreadyCompletedException":
    case "com.amazonaws.codepipeline#ApprovalAlreadyCompletedException":
      throw await deserializeAws_json1_1ApprovalAlreadyCompletedExceptionResponse(parsedOutput, context);
    case "InvalidApprovalTokenException":
    case "com.amazonaws.codepipeline#InvalidApprovalTokenException":
      throw await deserializeAws_json1_1InvalidApprovalTokenExceptionResponse(parsedOutput, context);
    case "PipelineNotFoundException":
    case "com.amazonaws.codepipeline#PipelineNotFoundException":
      throw await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context);
    case "StageNotFoundException":
    case "com.amazonaws.codepipeline#StageNotFoundException":
      throw await deserializeAws_json1_1StageNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PutJobFailureResultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutJobFailureResultCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutJobFailureResultCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutJobFailureResultCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutJobFailureResultCommandError = async (
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
      throw await deserializeAws_json1_1InvalidJobStateExceptionResponse(parsedOutput, context);
    case "JobNotFoundException":
    case "com.amazonaws.codepipeline#JobNotFoundException":
      throw await deserializeAws_json1_1JobNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PutJobSuccessResultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutJobSuccessResultCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutJobSuccessResultCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutJobSuccessResultCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutJobSuccessResultCommandError = async (
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
      throw await deserializeAws_json1_1InvalidJobStateExceptionResponse(parsedOutput, context);
    case "JobNotFoundException":
    case "com.amazonaws.codepipeline#JobNotFoundException":
      throw await deserializeAws_json1_1JobNotFoundExceptionResponse(parsedOutput, context);
    case "OutputVariablesSizeExceededException":
    case "com.amazonaws.codepipeline#OutputVariablesSizeExceededException":
      throw await deserializeAws_json1_1OutputVariablesSizeExceededExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PutThirdPartyJobFailureResultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutThirdPartyJobFailureResultCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutThirdPartyJobFailureResultCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutThirdPartyJobFailureResultCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutThirdPartyJobFailureResultCommandError = async (
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
      throw await deserializeAws_json1_1InvalidClientTokenExceptionResponse(parsedOutput, context);
    case "InvalidJobStateException":
    case "com.amazonaws.codepipeline#InvalidJobStateException":
      throw await deserializeAws_json1_1InvalidJobStateExceptionResponse(parsedOutput, context);
    case "JobNotFoundException":
    case "com.amazonaws.codepipeline#JobNotFoundException":
      throw await deserializeAws_json1_1JobNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PutThirdPartyJobSuccessResultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutThirdPartyJobSuccessResultCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutThirdPartyJobSuccessResultCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutThirdPartyJobSuccessResultCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutThirdPartyJobSuccessResultCommandError = async (
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
      throw await deserializeAws_json1_1InvalidClientTokenExceptionResponse(parsedOutput, context);
    case "InvalidJobStateException":
    case "com.amazonaws.codepipeline#InvalidJobStateException":
      throw await deserializeAws_json1_1InvalidJobStateExceptionResponse(parsedOutput, context);
    case "JobNotFoundException":
    case "com.amazonaws.codepipeline#JobNotFoundException":
      throw await deserializeAws_json1_1JobNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PutWebhookCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutWebhookCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutWebhookCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutWebhookOutput(data, context);
  const response: PutWebhookCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutWebhookCommandError = async (
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
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InvalidTagsException":
    case "com.amazonaws.codepipeline#InvalidTagsException":
      throw await deserializeAws_json1_1InvalidTagsExceptionResponse(parsedOutput, context);
    case "InvalidWebhookAuthenticationParametersException":
    case "com.amazonaws.codepipeline#InvalidWebhookAuthenticationParametersException":
      throw await deserializeAws_json1_1InvalidWebhookAuthenticationParametersExceptionResponse(parsedOutput, context);
    case "InvalidWebhookFilterPatternException":
    case "com.amazonaws.codepipeline#InvalidWebhookFilterPatternException":
      throw await deserializeAws_json1_1InvalidWebhookFilterPatternExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.codepipeline#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "PipelineNotFoundException":
    case "com.amazonaws.codepipeline#PipelineNotFoundException":
      throw await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.codepipeline#TooManyTagsException":
      throw await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1RegisterWebhookWithThirdPartyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterWebhookWithThirdPartyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RegisterWebhookWithThirdPartyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RegisterWebhookWithThirdPartyOutput(data, context);
  const response: RegisterWebhookWithThirdPartyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RegisterWebhookWithThirdPartyCommandError = async (
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
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
    case "WebhookNotFoundException":
    case "com.amazonaws.codepipeline#WebhookNotFoundException":
      throw await deserializeAws_json1_1WebhookNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1RetryStageExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RetryStageExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RetryStageExecutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RetryStageExecutionOutput(data, context);
  const response: RetryStageExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RetryStageExecutionCommandError = async (
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
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "NotLatestPipelineExecutionException":
    case "com.amazonaws.codepipeline#NotLatestPipelineExecutionException":
      throw await deserializeAws_json1_1NotLatestPipelineExecutionExceptionResponse(parsedOutput, context);
    case "PipelineNotFoundException":
    case "com.amazonaws.codepipeline#PipelineNotFoundException":
      throw await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context);
    case "StageNotFoundException":
    case "com.amazonaws.codepipeline#StageNotFoundException":
      throw await deserializeAws_json1_1StageNotFoundExceptionResponse(parsedOutput, context);
    case "StageNotRetryableException":
    case "com.amazonaws.codepipeline#StageNotRetryableException":
      throw await deserializeAws_json1_1StageNotRetryableExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StartPipelineExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartPipelineExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartPipelineExecutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartPipelineExecutionOutput(data, context);
  const response: StartPipelineExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartPipelineExecutionCommandError = async (
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
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "PipelineNotFoundException":
    case "com.amazonaws.codepipeline#PipelineNotFoundException":
      throw await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StopPipelineExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopPipelineExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StopPipelineExecutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopPipelineExecutionOutput(data, context);
  const response: StopPipelineExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopPipelineExecutionCommandError = async (
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
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "DuplicatedStopRequestException":
    case "com.amazonaws.codepipeline#DuplicatedStopRequestException":
      throw await deserializeAws_json1_1DuplicatedStopRequestExceptionResponse(parsedOutput, context);
    case "PipelineExecutionNotStoppableException":
    case "com.amazonaws.codepipeline#PipelineExecutionNotStoppableException":
      throw await deserializeAws_json1_1PipelineExecutionNotStoppableExceptionResponse(parsedOutput, context);
    case "PipelineNotFoundException":
    case "com.amazonaws.codepipeline#PipelineNotFoundException":
      throw await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TagResourceOutput(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TagResourceCommandError = async (
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
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.codepipeline#InvalidArnException":
      throw await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context);
    case "InvalidTagsException":
    case "com.amazonaws.codepipeline#InvalidTagsException":
      throw await deserializeAws_json1_1InvalidTagsExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codepipeline#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.codepipeline#TooManyTagsException":
      throw await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UntagResourceOutput(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UntagResourceCommandError = async (
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
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.codepipeline#InvalidArnException":
      throw await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context);
    case "InvalidTagsException":
    case "com.amazonaws.codepipeline#InvalidTagsException":
      throw await deserializeAws_json1_1InvalidTagsExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codepipeline#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateActionTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateActionTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateActionTypeCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateActionTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateActionTypeCommandError = async (
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
      throw await deserializeAws_json1_1ActionTypeNotFoundExceptionResponse(parsedOutput, context);
    case "RequestFailedException":
    case "com.amazonaws.codepipeline#RequestFailedException":
      throw await deserializeAws_json1_1RequestFailedExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdatePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePipelineCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdatePipelineCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdatePipelineOutput(data, context);
  const response: UpdatePipelineCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdatePipelineCommandError = async (
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
      throw await deserializeAws_json1_1InvalidActionDeclarationExceptionResponse(parsedOutput, context);
    case "InvalidBlockerDeclarationException":
    case "com.amazonaws.codepipeline#InvalidBlockerDeclarationException":
      throw await deserializeAws_json1_1InvalidBlockerDeclarationExceptionResponse(parsedOutput, context);
    case "InvalidStageDeclarationException":
    case "com.amazonaws.codepipeline#InvalidStageDeclarationException":
      throw await deserializeAws_json1_1InvalidStageDeclarationExceptionResponse(parsedOutput, context);
    case "InvalidStructureException":
    case "com.amazonaws.codepipeline#InvalidStructureException":
      throw await deserializeAws_json1_1InvalidStructureExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.codepipeline#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

const deserializeAws_json1_1ActionNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ActionNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ActionNotFoundException(body, context);
  const exception = new ActionNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ActionTypeNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ActionTypeNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ActionTypeNotFoundException(body, context);
  const exception = new ActionTypeNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ApprovalAlreadyCompletedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ApprovalAlreadyCompletedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ApprovalAlreadyCompletedException(body, context);
  const exception = new ApprovalAlreadyCompletedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ConcurrentModificationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ConcurrentModificationException(body, context);
  const exception = new ConcurrentModificationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ConflictException(body, context);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1DuplicatedStopRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicatedStopRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DuplicatedStopRequestException(body, context);
  const exception = new DuplicatedStopRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidActionDeclarationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidActionDeclarationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidActionDeclarationException(body, context);
  const exception = new InvalidActionDeclarationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidApprovalTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidApprovalTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidApprovalTokenException(body, context);
  const exception = new InvalidApprovalTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidArnExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidArnException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidArnException(body, context);
  const exception = new InvalidArnException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidBlockerDeclarationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidBlockerDeclarationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidBlockerDeclarationException(body, context);
  const exception = new InvalidBlockerDeclarationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidClientTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidClientTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidClientTokenException(body, context);
  const exception = new InvalidClientTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidJobExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidJobException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidJobException(body, context);
  const exception = new InvalidJobException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidJobStateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidJobStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidJobStateException(body, context);
  const exception = new InvalidJobStateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidNextTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNextTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidNextTokenException(body, context);
  const exception = new InvalidNextTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidNonceExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNonceException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidNonceException(body, context);
  const exception = new InvalidNonceException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidStageDeclarationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidStageDeclarationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidStageDeclarationException(body, context);
  const exception = new InvalidStageDeclarationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidStructureExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidStructureException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidStructureException(body, context);
  const exception = new InvalidStructureException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidTagsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTagsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidTagsException(body, context);
  const exception = new InvalidTagsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidWebhookAuthenticationParametersExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidWebhookAuthenticationParametersException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidWebhookAuthenticationParametersException(body, context);
  const exception = new InvalidWebhookAuthenticationParametersException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidWebhookFilterPatternExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidWebhookFilterPatternException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidWebhookFilterPatternException(body, context);
  const exception = new InvalidWebhookFilterPatternException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1JobNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<JobNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1JobNotFoundException(body, context);
  const exception = new JobNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LimitExceededException(body, context);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1NotLatestPipelineExecutionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotLatestPipelineExecutionException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NotLatestPipelineExecutionException(body, context);
  const exception = new NotLatestPipelineExecutionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1OutputVariablesSizeExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OutputVariablesSizeExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OutputVariablesSizeExceededException(body, context);
  const exception = new OutputVariablesSizeExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1PipelineExecutionNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PipelineExecutionNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1PipelineExecutionNotFoundException(body, context);
  const exception = new PipelineExecutionNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1PipelineExecutionNotStoppableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PipelineExecutionNotStoppableException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1PipelineExecutionNotStoppableException(body, context);
  const exception = new PipelineExecutionNotStoppableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1PipelineNameInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PipelineNameInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1PipelineNameInUseException(body, context);
  const exception = new PipelineNameInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1PipelineNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PipelineNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1PipelineNotFoundException(body, context);
  const exception = new PipelineNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1PipelineVersionNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PipelineVersionNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1PipelineVersionNotFoundException(body, context);
  const exception = new PipelineVersionNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1RequestFailedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RequestFailedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1RequestFailedException(body, context);
  const exception = new RequestFailedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(body, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1StageNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<StageNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1StageNotFoundException(body, context);
  const exception = new StageNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1StageNotRetryableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<StageNotRetryableException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1StageNotRetryableException(body, context);
  const exception = new StageNotRetryableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1TooManyTagsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TooManyTagsException(body, context);
  const exception = new TooManyTagsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ValidationException(body, context);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1WebhookNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WebhookNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1WebhookNotFoundException(body, context);
  const exception = new WebhookNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_1AcknowledgeJobInput = (input: AcknowledgeJobInput, context: __SerdeContext): any => {
  return {
    ...(input.jobId != null && { jobId: input.jobId }),
    ...(input.nonce != null && { nonce: input.nonce }),
  };
};

const serializeAws_json1_1AcknowledgeThirdPartyJobInput = (
  input: AcknowledgeThirdPartyJobInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.clientToken != null && { clientToken: input.clientToken }),
    ...(input.jobId != null && { jobId: input.jobId }),
    ...(input.nonce != null && { nonce: input.nonce }),
  };
};

const serializeAws_json1_1ActionConfigurationMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_json1_1ActionConfigurationProperty = (
  input: ActionConfigurationProperty,
  context: __SerdeContext
): any => {
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

const serializeAws_json1_1ActionConfigurationPropertyList = (
  input: ActionConfigurationProperty[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1ActionConfigurationProperty(entry, context);
    });
};

const serializeAws_json1_1ActionDeclaration = (input: ActionDeclaration, context: __SerdeContext): any => {
  return {
    ...(input.actionTypeId != null && { actionTypeId: serializeAws_json1_1ActionTypeId(input.actionTypeId, context) }),
    ...(input.configuration != null && {
      configuration: serializeAws_json1_1ActionConfigurationMap(input.configuration, context),
    }),
    ...(input.inputArtifacts != null && {
      inputArtifacts: serializeAws_json1_1InputArtifactList(input.inputArtifacts, context),
    }),
    ...(input.name != null && { name: input.name }),
    ...(input.namespace != null && { namespace: input.namespace }),
    ...(input.outputArtifacts != null && {
      outputArtifacts: serializeAws_json1_1OutputArtifactList(input.outputArtifacts, context),
    }),
    ...(input.region != null && { region: input.region }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
    ...(input.runOrder != null && { runOrder: input.runOrder }),
  };
};

const serializeAws_json1_1ActionExecutionFilter = (input: ActionExecutionFilter, context: __SerdeContext): any => {
  return {
    ...(input.pipelineExecutionId != null && { pipelineExecutionId: input.pipelineExecutionId }),
  };
};

const serializeAws_json1_1ActionRevision = (input: ActionRevision, context: __SerdeContext): any => {
  return {
    ...(input.created != null && { created: Math.round(input.created.getTime() / 1000) }),
    ...(input.revisionChangeId != null && { revisionChangeId: input.revisionChangeId }),
    ...(input.revisionId != null && { revisionId: input.revisionId }),
  };
};

const serializeAws_json1_1ActionTypeArtifactDetails = (
  input: ActionTypeArtifactDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.maximumCount != null && { maximumCount: input.maximumCount }),
    ...(input.minimumCount != null && { minimumCount: input.minimumCount }),
  };
};

const serializeAws_json1_1ActionTypeDeclaration = (input: ActionTypeDeclaration, context: __SerdeContext): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.executor != null && { executor: serializeAws_json1_1ActionTypeExecutor(input.executor, context) }),
    ...(input.id != null && { id: serializeAws_json1_1ActionTypeIdentifier(input.id, context) }),
    ...(input.inputArtifactDetails != null && {
      inputArtifactDetails: serializeAws_json1_1ActionTypeArtifactDetails(input.inputArtifactDetails, context),
    }),
    ...(input.outputArtifactDetails != null && {
      outputArtifactDetails: serializeAws_json1_1ActionTypeArtifactDetails(input.outputArtifactDetails, context),
    }),
    ...(input.permissions != null && {
      permissions: serializeAws_json1_1ActionTypePermissions(input.permissions, context),
    }),
    ...(input.properties != null && {
      properties: serializeAws_json1_1ActionTypeProperties(input.properties, context),
    }),
    ...(input.urls != null && { urls: serializeAws_json1_1ActionTypeUrls(input.urls, context) }),
  };
};

const serializeAws_json1_1ActionTypeExecutor = (input: ActionTypeExecutor, context: __SerdeContext): any => {
  return {
    ...(input.configuration != null && {
      configuration: serializeAws_json1_1ExecutorConfiguration(input.configuration, context),
    }),
    ...(input.jobTimeout != null && { jobTimeout: input.jobTimeout }),
    ...(input.policyStatementsTemplate != null && { policyStatementsTemplate: input.policyStatementsTemplate }),
    ...(input.type != null && { type: input.type }),
  };
};

const serializeAws_json1_1ActionTypeId = (input: ActionTypeId, context: __SerdeContext): any => {
  return {
    ...(input.category != null && { category: input.category }),
    ...(input.owner != null && { owner: input.owner }),
    ...(input.provider != null && { provider: input.provider }),
    ...(input.version != null && { version: input.version }),
  };
};

const serializeAws_json1_1ActionTypeIdentifier = (input: ActionTypeIdentifier, context: __SerdeContext): any => {
  return {
    ...(input.category != null && { category: input.category }),
    ...(input.owner != null && { owner: input.owner }),
    ...(input.provider != null && { provider: input.provider }),
    ...(input.version != null && { version: input.version }),
  };
};

const serializeAws_json1_1ActionTypePermissions = (input: ActionTypePermissions, context: __SerdeContext): any => {
  return {
    ...(input.allowedAccounts != null && {
      allowedAccounts: serializeAws_json1_1AllowedAccounts(input.allowedAccounts, context),
    }),
  };
};

const serializeAws_json1_1ActionTypeProperties = (input: ActionTypeProperty[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1ActionTypeProperty(entry, context);
    });
};

const serializeAws_json1_1ActionTypeProperty = (input: ActionTypeProperty, context: __SerdeContext): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.key != null && { key: input.key }),
    ...(input.name != null && { name: input.name }),
    ...(input.noEcho != null && { noEcho: input.noEcho }),
    ...(input.optional != null && { optional: input.optional }),
    ...(input.queryable != null && { queryable: input.queryable }),
  };
};

const serializeAws_json1_1ActionTypeSettings = (input: ActionTypeSettings, context: __SerdeContext): any => {
  return {
    ...(input.entityUrlTemplate != null && { entityUrlTemplate: input.entityUrlTemplate }),
    ...(input.executionUrlTemplate != null && { executionUrlTemplate: input.executionUrlTemplate }),
    ...(input.revisionUrlTemplate != null && { revisionUrlTemplate: input.revisionUrlTemplate }),
    ...(input.thirdPartyConfigurationUrl != null && { thirdPartyConfigurationUrl: input.thirdPartyConfigurationUrl }),
  };
};

const serializeAws_json1_1ActionTypeUrls = (input: ActionTypeUrls, context: __SerdeContext): any => {
  return {
    ...(input.configurationUrl != null && { configurationUrl: input.configurationUrl }),
    ...(input.entityUrlTemplate != null && { entityUrlTemplate: input.entityUrlTemplate }),
    ...(input.executionUrlTemplate != null && { executionUrlTemplate: input.executionUrlTemplate }),
    ...(input.revisionUrlTemplate != null && { revisionUrlTemplate: input.revisionUrlTemplate }),
  };
};

const serializeAws_json1_1AllowedAccounts = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ApprovalResult = (input: ApprovalResult, context: __SerdeContext): any => {
  return {
    ...(input.status != null && { status: input.status }),
    ...(input.summary != null && { summary: input.summary }),
  };
};

const serializeAws_json1_1ArtifactDetails = (input: ArtifactDetails, context: __SerdeContext): any => {
  return {
    ...(input.maximumCount != null && { maximumCount: input.maximumCount }),
    ...(input.minimumCount != null && { minimumCount: input.minimumCount }),
  };
};

const serializeAws_json1_1ArtifactStore = (input: ArtifactStore, context: __SerdeContext): any => {
  return {
    ...(input.encryptionKey != null && {
      encryptionKey: serializeAws_json1_1EncryptionKey(input.encryptionKey, context),
    }),
    ...(input.location != null && { location: input.location }),
    ...(input.type != null && { type: input.type }),
  };
};

const serializeAws_json1_1ArtifactStoreMap = (input: Record<string, ArtifactStore>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_json1_1ArtifactStore(value, context);
    return acc;
  }, {});
};

const serializeAws_json1_1BlockerDeclaration = (input: BlockerDeclaration, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.type != null && { type: input.type }),
  };
};

const serializeAws_json1_1CreateCustomActionTypeInput = (
  input: CreateCustomActionTypeInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.category != null && { category: input.category }),
    ...(input.configurationProperties != null && {
      configurationProperties: serializeAws_json1_1ActionConfigurationPropertyList(
        input.configurationProperties,
        context
      ),
    }),
    ...(input.inputArtifactDetails != null && {
      inputArtifactDetails: serializeAws_json1_1ArtifactDetails(input.inputArtifactDetails, context),
    }),
    ...(input.outputArtifactDetails != null && {
      outputArtifactDetails: serializeAws_json1_1ArtifactDetails(input.outputArtifactDetails, context),
    }),
    ...(input.provider != null && { provider: input.provider }),
    ...(input.settings != null && { settings: serializeAws_json1_1ActionTypeSettings(input.settings, context) }),
    ...(input.tags != null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
    ...(input.version != null && { version: input.version }),
  };
};

const serializeAws_json1_1CreatePipelineInput = (input: CreatePipelineInput, context: __SerdeContext): any => {
  return {
    ...(input.pipeline != null && { pipeline: serializeAws_json1_1PipelineDeclaration(input.pipeline, context) }),
    ...(input.tags != null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
  };
};

const serializeAws_json1_1CurrentRevision = (input: CurrentRevision, context: __SerdeContext): any => {
  return {
    ...(input.changeIdentifier != null && { changeIdentifier: input.changeIdentifier }),
    ...(input.created != null && { created: Math.round(input.created.getTime() / 1000) }),
    ...(input.revision != null && { revision: input.revision }),
    ...(input.revisionSummary != null && { revisionSummary: input.revisionSummary }),
  };
};

const serializeAws_json1_1DeleteCustomActionTypeInput = (
  input: DeleteCustomActionTypeInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.category != null && { category: input.category }),
    ...(input.provider != null && { provider: input.provider }),
    ...(input.version != null && { version: input.version }),
  };
};

const serializeAws_json1_1DeletePipelineInput = (input: DeletePipelineInput, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
  };
};

const serializeAws_json1_1DeleteWebhookInput = (input: DeleteWebhookInput, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
  };
};

const serializeAws_json1_1DeregisterWebhookWithThirdPartyInput = (
  input: DeregisterWebhookWithThirdPartyInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.webhookName != null && { webhookName: input.webhookName }),
  };
};

const serializeAws_json1_1DisableStageTransitionInput = (
  input: DisableStageTransitionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.pipelineName != null && { pipelineName: input.pipelineName }),
    ...(input.reason != null && { reason: input.reason }),
    ...(input.stageName != null && { stageName: input.stageName }),
    ...(input.transitionType != null && { transitionType: input.transitionType }),
  };
};

const serializeAws_json1_1EnableStageTransitionInput = (
  input: EnableStageTransitionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.pipelineName != null && { pipelineName: input.pipelineName }),
    ...(input.stageName != null && { stageName: input.stageName }),
    ...(input.transitionType != null && { transitionType: input.transitionType }),
  };
};

const serializeAws_json1_1EncryptionKey = (input: EncryptionKey, context: __SerdeContext): any => {
  return {
    ...(input.id != null && { id: input.id }),
    ...(input.type != null && { type: input.type }),
  };
};

const serializeAws_json1_1ExecutionDetails = (input: ExecutionDetails, context: __SerdeContext): any => {
  return {
    ...(input.externalExecutionId != null && { externalExecutionId: input.externalExecutionId }),
    ...(input.percentComplete != null && { percentComplete: input.percentComplete }),
    ...(input.summary != null && { summary: input.summary }),
  };
};

const serializeAws_json1_1ExecutorConfiguration = (input: ExecutorConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.jobWorkerExecutorConfiguration != null && {
      jobWorkerExecutorConfiguration: serializeAws_json1_1JobWorkerExecutorConfiguration(
        input.jobWorkerExecutorConfiguration,
        context
      ),
    }),
    ...(input.lambdaExecutorConfiguration != null && {
      lambdaExecutorConfiguration: serializeAws_json1_1LambdaExecutorConfiguration(
        input.lambdaExecutorConfiguration,
        context
      ),
    }),
  };
};

const serializeAws_json1_1FailureDetails = (input: FailureDetails, context: __SerdeContext): any => {
  return {
    ...(input.externalExecutionId != null && { externalExecutionId: input.externalExecutionId }),
    ...(input.message != null && { message: input.message }),
    ...(input.type != null && { type: input.type }),
  };
};

const serializeAws_json1_1GetActionTypeInput = (input: GetActionTypeInput, context: __SerdeContext): any => {
  return {
    ...(input.category != null && { category: input.category }),
    ...(input.owner != null && { owner: input.owner }),
    ...(input.provider != null && { provider: input.provider }),
    ...(input.version != null && { version: input.version }),
  };
};

const serializeAws_json1_1GetJobDetailsInput = (input: GetJobDetailsInput, context: __SerdeContext): any => {
  return {
    ...(input.jobId != null && { jobId: input.jobId }),
  };
};

const serializeAws_json1_1GetPipelineExecutionInput = (
  input: GetPipelineExecutionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.pipelineExecutionId != null && { pipelineExecutionId: input.pipelineExecutionId }),
    ...(input.pipelineName != null && { pipelineName: input.pipelineName }),
  };
};

const serializeAws_json1_1GetPipelineInput = (input: GetPipelineInput, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.version != null && { version: input.version }),
  };
};

const serializeAws_json1_1GetPipelineStateInput = (input: GetPipelineStateInput, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
  };
};

const serializeAws_json1_1GetThirdPartyJobDetailsInput = (
  input: GetThirdPartyJobDetailsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.clientToken != null && { clientToken: input.clientToken }),
    ...(input.jobId != null && { jobId: input.jobId }),
  };
};

const serializeAws_json1_1InputArtifact = (input: InputArtifact, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
  };
};

const serializeAws_json1_1InputArtifactList = (input: InputArtifact[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1InputArtifact(entry, context);
    });
};

const serializeAws_json1_1JobWorkerExecutorConfiguration = (
  input: JobWorkerExecutorConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.pollingAccounts != null && {
      pollingAccounts: serializeAws_json1_1PollingAccountList(input.pollingAccounts, context),
    }),
    ...(input.pollingServicePrincipals != null && {
      pollingServicePrincipals: serializeAws_json1_1PollingServicePrincipalList(
        input.pollingServicePrincipals,
        context
      ),
    }),
  };
};

const serializeAws_json1_1LambdaExecutorConfiguration = (
  input: LambdaExecutorConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.lambdaFunctionArn != null && { lambdaFunctionArn: input.lambdaFunctionArn }),
  };
};

const serializeAws_json1_1ListActionExecutionsInput = (
  input: ListActionExecutionsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.filter != null && { filter: serializeAws_json1_1ActionExecutionFilter(input.filter, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.pipelineName != null && { pipelineName: input.pipelineName }),
  };
};

const serializeAws_json1_1ListActionTypesInput = (input: ListActionTypesInput, context: __SerdeContext): any => {
  return {
    ...(input.actionOwnerFilter != null && { actionOwnerFilter: input.actionOwnerFilter }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.regionFilter != null && { regionFilter: input.regionFilter }),
  };
};

const serializeAws_json1_1ListPipelineExecutionsInput = (
  input: ListPipelineExecutionsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.pipelineName != null && { pipelineName: input.pipelineName }),
  };
};

const serializeAws_json1_1ListPipelinesInput = (input: ListPipelinesInput, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1ListTagsForResourceInput = (
  input: ListTagsForResourceInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
  };
};

const serializeAws_json1_1ListWebhooksInput = (input: ListWebhooksInput, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1OutputArtifact = (input: OutputArtifact, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
  };
};

const serializeAws_json1_1OutputArtifactList = (input: OutputArtifact[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1OutputArtifact(entry, context);
    });
};

const serializeAws_json1_1OutputVariablesMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_json1_1PipelineDeclaration = (input: PipelineDeclaration, context: __SerdeContext): any => {
  return {
    ...(input.artifactStore != null && {
      artifactStore: serializeAws_json1_1ArtifactStore(input.artifactStore, context),
    }),
    ...(input.artifactStores != null && {
      artifactStores: serializeAws_json1_1ArtifactStoreMap(input.artifactStores, context),
    }),
    ...(input.name != null && { name: input.name }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
    ...(input.stages != null && { stages: serializeAws_json1_1PipelineStageDeclarationList(input.stages, context) }),
    ...(input.version != null && { version: input.version }),
  };
};

const serializeAws_json1_1PipelineStageDeclarationList = (input: StageDeclaration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1StageDeclaration(entry, context);
    });
};

const serializeAws_json1_1PollForJobsInput = (input: PollForJobsInput, context: __SerdeContext): any => {
  return {
    ...(input.actionTypeId != null && { actionTypeId: serializeAws_json1_1ActionTypeId(input.actionTypeId, context) }),
    ...(input.maxBatchSize != null && { maxBatchSize: input.maxBatchSize }),
    ...(input.queryParam != null && { queryParam: serializeAws_json1_1QueryParamMap(input.queryParam, context) }),
  };
};

const serializeAws_json1_1PollForThirdPartyJobsInput = (
  input: PollForThirdPartyJobsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.actionTypeId != null && { actionTypeId: serializeAws_json1_1ActionTypeId(input.actionTypeId, context) }),
    ...(input.maxBatchSize != null && { maxBatchSize: input.maxBatchSize }),
  };
};

const serializeAws_json1_1PollingAccountList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1PollingServicePrincipalList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1PutActionRevisionInput = (input: PutActionRevisionInput, context: __SerdeContext): any => {
  return {
    ...(input.actionName != null && { actionName: input.actionName }),
    ...(input.actionRevision != null && {
      actionRevision: serializeAws_json1_1ActionRevision(input.actionRevision, context),
    }),
    ...(input.pipelineName != null && { pipelineName: input.pipelineName }),
    ...(input.stageName != null && { stageName: input.stageName }),
  };
};

const serializeAws_json1_1PutApprovalResultInput = (input: PutApprovalResultInput, context: __SerdeContext): any => {
  return {
    ...(input.actionName != null && { actionName: input.actionName }),
    ...(input.pipelineName != null && { pipelineName: input.pipelineName }),
    ...(input.result != null && { result: serializeAws_json1_1ApprovalResult(input.result, context) }),
    ...(input.stageName != null && { stageName: input.stageName }),
    ...(input.token != null && { token: input.token }),
  };
};

const serializeAws_json1_1PutJobFailureResultInput = (
  input: PutJobFailureResultInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.failureDetails != null && {
      failureDetails: serializeAws_json1_1FailureDetails(input.failureDetails, context),
    }),
    ...(input.jobId != null && { jobId: input.jobId }),
  };
};

const serializeAws_json1_1PutJobSuccessResultInput = (
  input: PutJobSuccessResultInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.continuationToken != null && { continuationToken: input.continuationToken }),
    ...(input.currentRevision != null && {
      currentRevision: serializeAws_json1_1CurrentRevision(input.currentRevision, context),
    }),
    ...(input.executionDetails != null && {
      executionDetails: serializeAws_json1_1ExecutionDetails(input.executionDetails, context),
    }),
    ...(input.jobId != null && { jobId: input.jobId }),
    ...(input.outputVariables != null && {
      outputVariables: serializeAws_json1_1OutputVariablesMap(input.outputVariables, context),
    }),
  };
};

const serializeAws_json1_1PutThirdPartyJobFailureResultInput = (
  input: PutThirdPartyJobFailureResultInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.clientToken != null && { clientToken: input.clientToken }),
    ...(input.failureDetails != null && {
      failureDetails: serializeAws_json1_1FailureDetails(input.failureDetails, context),
    }),
    ...(input.jobId != null && { jobId: input.jobId }),
  };
};

const serializeAws_json1_1PutThirdPartyJobSuccessResultInput = (
  input: PutThirdPartyJobSuccessResultInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.clientToken != null && { clientToken: input.clientToken }),
    ...(input.continuationToken != null && { continuationToken: input.continuationToken }),
    ...(input.currentRevision != null && {
      currentRevision: serializeAws_json1_1CurrentRevision(input.currentRevision, context),
    }),
    ...(input.executionDetails != null && {
      executionDetails: serializeAws_json1_1ExecutionDetails(input.executionDetails, context),
    }),
    ...(input.jobId != null && { jobId: input.jobId }),
  };
};

const serializeAws_json1_1PutWebhookInput = (input: PutWebhookInput, context: __SerdeContext): any => {
  return {
    ...(input.tags != null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
    ...(input.webhook != null && { webhook: serializeAws_json1_1WebhookDefinition(input.webhook, context) }),
  };
};

const serializeAws_json1_1QueryParamMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_json1_1RegisterWebhookWithThirdPartyInput = (
  input: RegisterWebhookWithThirdPartyInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.webhookName != null && { webhookName: input.webhookName }),
  };
};

const serializeAws_json1_1RetryStageExecutionInput = (
  input: RetryStageExecutionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.pipelineExecutionId != null && { pipelineExecutionId: input.pipelineExecutionId }),
    ...(input.pipelineName != null && { pipelineName: input.pipelineName }),
    ...(input.retryMode != null && { retryMode: input.retryMode }),
    ...(input.stageName != null && { stageName: input.stageName }),
  };
};

const serializeAws_json1_1StageActionDeclarationList = (input: ActionDeclaration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1ActionDeclaration(entry, context);
    });
};

const serializeAws_json1_1StageBlockerDeclarationList = (input: BlockerDeclaration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1BlockerDeclaration(entry, context);
    });
};

const serializeAws_json1_1StageDeclaration = (input: StageDeclaration, context: __SerdeContext): any => {
  return {
    ...(input.actions != null && { actions: serializeAws_json1_1StageActionDeclarationList(input.actions, context) }),
    ...(input.blockers != null && {
      blockers: serializeAws_json1_1StageBlockerDeclarationList(input.blockers, context),
    }),
    ...(input.name != null && { name: input.name }),
  };
};

const serializeAws_json1_1StartPipelineExecutionInput = (
  input: StartPipelineExecutionInput,
  context: __SerdeContext
): any => {
  return {
    clientRequestToken: input.clientRequestToken ?? generateIdempotencyToken(),
    ...(input.name != null && { name: input.name }),
  };
};

const serializeAws_json1_1StopPipelineExecutionInput = (
  input: StopPipelineExecutionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.abandon != null && { abandon: input.abandon }),
    ...(input.pipelineExecutionId != null && { pipelineExecutionId: input.pipelineExecutionId }),
    ...(input.pipelineName != null && { pipelineName: input.pipelineName }),
    ...(input.reason != null && { reason: input.reason }),
  };
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.key != null && { key: input.key }),
    ...(input.value != null && { value: input.value }),
  };
};

const serializeAws_json1_1TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Tag(entry, context);
    });
};

const serializeAws_json1_1TagResourceInput = (input: TagResourceInput, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
    ...(input.tags != null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
  };
};

const serializeAws_json1_1UntagResourceInput = (input: UntagResourceInput, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
    ...(input.tagKeys != null && { tagKeys: serializeAws_json1_1TagKeyList(input.tagKeys, context) }),
  };
};

const serializeAws_json1_1UpdateActionTypeInput = (input: UpdateActionTypeInput, context: __SerdeContext): any => {
  return {
    ...(input.actionType != null && {
      actionType: serializeAws_json1_1ActionTypeDeclaration(input.actionType, context),
    }),
  };
};

const serializeAws_json1_1UpdatePipelineInput = (input: UpdatePipelineInput, context: __SerdeContext): any => {
  return {
    ...(input.pipeline != null && { pipeline: serializeAws_json1_1PipelineDeclaration(input.pipeline, context) }),
  };
};

const serializeAws_json1_1WebhookAuthConfiguration = (
  input: WebhookAuthConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.AllowedIPRange != null && { AllowedIPRange: input.AllowedIPRange }),
    ...(input.SecretToken != null && { SecretToken: input.SecretToken }),
  };
};

const serializeAws_json1_1WebhookDefinition = (input: WebhookDefinition, context: __SerdeContext): any => {
  return {
    ...(input.authentication != null && { authentication: input.authentication }),
    ...(input.authenticationConfiguration != null && {
      authenticationConfiguration: serializeAws_json1_1WebhookAuthConfiguration(
        input.authenticationConfiguration,
        context
      ),
    }),
    ...(input.filters != null && { filters: serializeAws_json1_1WebhookFilters(input.filters, context) }),
    ...(input.name != null && { name: input.name }),
    ...(input.targetAction != null && { targetAction: input.targetAction }),
    ...(input.targetPipeline != null && { targetPipeline: input.targetPipeline }),
  };
};

const serializeAws_json1_1WebhookFilterRule = (input: WebhookFilterRule, context: __SerdeContext): any => {
  return {
    ...(input.jsonPath != null && { jsonPath: input.jsonPath }),
    ...(input.matchEquals != null && { matchEquals: input.matchEquals }),
  };
};

const serializeAws_json1_1WebhookFilters = (input: WebhookFilterRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1WebhookFilterRule(entry, context);
    });
};

const deserializeAws_json1_1AcknowledgeJobOutput = (output: any, context: __SerdeContext): AcknowledgeJobOutput => {
  return {
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_json1_1AcknowledgeThirdPartyJobOutput = (
  output: any,
  context: __SerdeContext
): AcknowledgeThirdPartyJobOutput => {
  return {
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_json1_1ActionConfiguration = (output: any, context: __SerdeContext): ActionConfiguration => {
  return {
    configuration:
      output.configuration != null
        ? deserializeAws_json1_1ActionConfigurationMap(output.configuration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ActionConfigurationMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_json1_1ActionConfigurationProperty = (
  output: any,
  context: __SerdeContext
): ActionConfigurationProperty => {
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

const deserializeAws_json1_1ActionConfigurationPropertyList = (
  output: any,
  context: __SerdeContext
): ActionConfigurationProperty[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ActionConfigurationProperty(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ActionContext = (output: any, context: __SerdeContext): ActionContext => {
  return {
    actionExecutionId: __expectString(output.actionExecutionId),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_json1_1ActionDeclaration = (output: any, context: __SerdeContext): ActionDeclaration => {
  return {
    actionTypeId:
      output.actionTypeId != null ? deserializeAws_json1_1ActionTypeId(output.actionTypeId, context) : undefined,
    configuration:
      output.configuration != null
        ? deserializeAws_json1_1ActionConfigurationMap(output.configuration, context)
        : undefined,
    inputArtifacts:
      output.inputArtifacts != null
        ? deserializeAws_json1_1InputArtifactList(output.inputArtifacts, context)
        : undefined,
    name: __expectString(output.name),
    namespace: __expectString(output.namespace),
    outputArtifacts:
      output.outputArtifacts != null
        ? deserializeAws_json1_1OutputArtifactList(output.outputArtifacts, context)
        : undefined,
    region: __expectString(output.region),
    roleArn: __expectString(output.roleArn),
    runOrder: __expectInt32(output.runOrder),
  } as any;
};

const deserializeAws_json1_1ActionExecution = (output: any, context: __SerdeContext): ActionExecution => {
  return {
    actionExecutionId: __expectString(output.actionExecutionId),
    errorDetails:
      output.errorDetails != null ? deserializeAws_json1_1ErrorDetails(output.errorDetails, context) : undefined,
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

const deserializeAws_json1_1ActionExecutionDetail = (output: any, context: __SerdeContext): ActionExecutionDetail => {
  return {
    actionExecutionId: __expectString(output.actionExecutionId),
    actionName: __expectString(output.actionName),
    input: output.input != null ? deserializeAws_json1_1ActionExecutionInput(output.input, context) : undefined,
    lastUpdateTime:
      output.lastUpdateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdateTime)))
        : undefined,
    output: output.output != null ? deserializeAws_json1_1ActionExecutionOutput(output.output, context) : undefined,
    pipelineExecutionId: __expectString(output.pipelineExecutionId),
    pipelineVersion: __expectInt32(output.pipelineVersion),
    stageName: __expectString(output.stageName),
    startTime:
      output.startTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startTime))) : undefined,
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_json1_1ActionExecutionDetailList = (
  output: any,
  context: __SerdeContext
): ActionExecutionDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ActionExecutionDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ActionExecutionInput = (output: any, context: __SerdeContext): ActionExecutionInput => {
  return {
    actionTypeId:
      output.actionTypeId != null ? deserializeAws_json1_1ActionTypeId(output.actionTypeId, context) : undefined,
    configuration:
      output.configuration != null
        ? deserializeAws_json1_1ActionConfigurationMap(output.configuration, context)
        : undefined,
    inputArtifacts:
      output.inputArtifacts != null
        ? deserializeAws_json1_1ArtifactDetailList(output.inputArtifacts, context)
        : undefined,
    namespace: __expectString(output.namespace),
    region: __expectString(output.region),
    resolvedConfiguration:
      output.resolvedConfiguration != null
        ? deserializeAws_json1_1ResolvedActionConfigurationMap(output.resolvedConfiguration, context)
        : undefined,
    roleArn: __expectString(output.roleArn),
  } as any;
};

const deserializeAws_json1_1ActionExecutionOutput = (output: any, context: __SerdeContext): ActionExecutionOutput => {
  return {
    executionResult:
      output.executionResult != null
        ? deserializeAws_json1_1ActionExecutionResult(output.executionResult, context)
        : undefined,
    outputArtifacts:
      output.outputArtifacts != null
        ? deserializeAws_json1_1ArtifactDetailList(output.outputArtifacts, context)
        : undefined,
    outputVariables:
      output.outputVariables != null
        ? deserializeAws_json1_1OutputVariablesMap(output.outputVariables, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ActionExecutionResult = (output: any, context: __SerdeContext): ActionExecutionResult => {
  return {
    externalExecutionId: __expectString(output.externalExecutionId),
    externalExecutionSummary: __expectString(output.externalExecutionSummary),
    externalExecutionUrl: __expectString(output.externalExecutionUrl),
  } as any;
};

const deserializeAws_json1_1ActionNotFoundException = (
  output: any,
  context: __SerdeContext
): ActionNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ActionRevision = (output: any, context: __SerdeContext): ActionRevision => {
  return {
    created:
      output.created != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.created))) : undefined,
    revisionChangeId: __expectString(output.revisionChangeId),
    revisionId: __expectString(output.revisionId),
  } as any;
};

const deserializeAws_json1_1ActionState = (output: any, context: __SerdeContext): ActionState => {
  return {
    actionName: __expectString(output.actionName),
    currentRevision:
      output.currentRevision != null
        ? deserializeAws_json1_1ActionRevision(output.currentRevision, context)
        : undefined,
    entityUrl: __expectString(output.entityUrl),
    latestExecution:
      output.latestExecution != null
        ? deserializeAws_json1_1ActionExecution(output.latestExecution, context)
        : undefined,
    revisionUrl: __expectString(output.revisionUrl),
  } as any;
};

const deserializeAws_json1_1ActionStateList = (output: any, context: __SerdeContext): ActionState[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ActionState(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ActionType = (output: any, context: __SerdeContext): ActionType => {
  return {
    actionConfigurationProperties:
      output.actionConfigurationProperties != null
        ? deserializeAws_json1_1ActionConfigurationPropertyList(output.actionConfigurationProperties, context)
        : undefined,
    id: output.id != null ? deserializeAws_json1_1ActionTypeId(output.id, context) : undefined,
    inputArtifactDetails:
      output.inputArtifactDetails != null
        ? deserializeAws_json1_1ArtifactDetails(output.inputArtifactDetails, context)
        : undefined,
    outputArtifactDetails:
      output.outputArtifactDetails != null
        ? deserializeAws_json1_1ArtifactDetails(output.outputArtifactDetails, context)
        : undefined,
    settings: output.settings != null ? deserializeAws_json1_1ActionTypeSettings(output.settings, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ActionTypeArtifactDetails = (
  output: any,
  context: __SerdeContext
): ActionTypeArtifactDetails => {
  return {
    maximumCount: __expectInt32(output.maximumCount),
    minimumCount: __expectInt32(output.minimumCount),
  } as any;
};

const deserializeAws_json1_1ActionTypeDeclaration = (output: any, context: __SerdeContext): ActionTypeDeclaration => {
  return {
    description: __expectString(output.description),
    executor: output.executor != null ? deserializeAws_json1_1ActionTypeExecutor(output.executor, context) : undefined,
    id: output.id != null ? deserializeAws_json1_1ActionTypeIdentifier(output.id, context) : undefined,
    inputArtifactDetails:
      output.inputArtifactDetails != null
        ? deserializeAws_json1_1ActionTypeArtifactDetails(output.inputArtifactDetails, context)
        : undefined,
    outputArtifactDetails:
      output.outputArtifactDetails != null
        ? deserializeAws_json1_1ActionTypeArtifactDetails(output.outputArtifactDetails, context)
        : undefined,
    permissions:
      output.permissions != null ? deserializeAws_json1_1ActionTypePermissions(output.permissions, context) : undefined,
    properties:
      output.properties != null ? deserializeAws_json1_1ActionTypeProperties(output.properties, context) : undefined,
    urls: output.urls != null ? deserializeAws_json1_1ActionTypeUrls(output.urls, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ActionTypeExecutor = (output: any, context: __SerdeContext): ActionTypeExecutor => {
  return {
    configuration:
      output.configuration != null
        ? deserializeAws_json1_1ExecutorConfiguration(output.configuration, context)
        : undefined,
    jobTimeout: __expectInt32(output.jobTimeout),
    policyStatementsTemplate: __expectString(output.policyStatementsTemplate),
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_json1_1ActionTypeId = (output: any, context: __SerdeContext): ActionTypeId => {
  return {
    category: __expectString(output.category),
    owner: __expectString(output.owner),
    provider: __expectString(output.provider),
    version: __expectString(output.version),
  } as any;
};

const deserializeAws_json1_1ActionTypeIdentifier = (output: any, context: __SerdeContext): ActionTypeIdentifier => {
  return {
    category: __expectString(output.category),
    owner: __expectString(output.owner),
    provider: __expectString(output.provider),
    version: __expectString(output.version),
  } as any;
};

const deserializeAws_json1_1ActionTypeList = (output: any, context: __SerdeContext): ActionType[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ActionType(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ActionTypeNotFoundException = (
  output: any,
  context: __SerdeContext
): ActionTypeNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ActionTypePermissions = (output: any, context: __SerdeContext): ActionTypePermissions => {
  return {
    allowedAccounts:
      output.allowedAccounts != null
        ? deserializeAws_json1_1AllowedAccounts(output.allowedAccounts, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ActionTypeProperties = (output: any, context: __SerdeContext): ActionTypeProperty[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ActionTypeProperty(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ActionTypeProperty = (output: any, context: __SerdeContext): ActionTypeProperty => {
  return {
    description: __expectString(output.description),
    key: __expectBoolean(output.key),
    name: __expectString(output.name),
    noEcho: __expectBoolean(output.noEcho),
    optional: __expectBoolean(output.optional),
    queryable: __expectBoolean(output.queryable),
  } as any;
};

const deserializeAws_json1_1ActionTypeSettings = (output: any, context: __SerdeContext): ActionTypeSettings => {
  return {
    entityUrlTemplate: __expectString(output.entityUrlTemplate),
    executionUrlTemplate: __expectString(output.executionUrlTemplate),
    revisionUrlTemplate: __expectString(output.revisionUrlTemplate),
    thirdPartyConfigurationUrl: __expectString(output.thirdPartyConfigurationUrl),
  } as any;
};

const deserializeAws_json1_1ActionTypeUrls = (output: any, context: __SerdeContext): ActionTypeUrls => {
  return {
    configurationUrl: __expectString(output.configurationUrl),
    entityUrlTemplate: __expectString(output.entityUrlTemplate),
    executionUrlTemplate: __expectString(output.executionUrlTemplate),
    revisionUrlTemplate: __expectString(output.revisionUrlTemplate),
  } as any;
};

const deserializeAws_json1_1AllowedAccounts = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1ApprovalAlreadyCompletedException = (
  output: any,
  context: __SerdeContext
): ApprovalAlreadyCompletedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1Artifact = (output: any, context: __SerdeContext): Artifact => {
  return {
    location: output.location != null ? deserializeAws_json1_1ArtifactLocation(output.location, context) : undefined,
    name: __expectString(output.name),
    revision: __expectString(output.revision),
  } as any;
};

const deserializeAws_json1_1ArtifactDetail = (output: any, context: __SerdeContext): ArtifactDetail => {
  return {
    name: __expectString(output.name),
    s3location: output.s3location != null ? deserializeAws_json1_1S3Location(output.s3location, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ArtifactDetailList = (output: any, context: __SerdeContext): ArtifactDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ArtifactDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ArtifactDetails = (output: any, context: __SerdeContext): ArtifactDetails => {
  return {
    maximumCount: __expectInt32(output.maximumCount),
    minimumCount: __expectInt32(output.minimumCount),
  } as any;
};

const deserializeAws_json1_1ArtifactList = (output: any, context: __SerdeContext): Artifact[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Artifact(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ArtifactLocation = (output: any, context: __SerdeContext): ArtifactLocation => {
  return {
    s3Location:
      output.s3Location != null ? deserializeAws_json1_1S3ArtifactLocation(output.s3Location, context) : undefined,
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_json1_1ArtifactRevision = (output: any, context: __SerdeContext): ArtifactRevision => {
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

const deserializeAws_json1_1ArtifactRevisionList = (output: any, context: __SerdeContext): ArtifactRevision[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ArtifactRevision(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ArtifactStore = (output: any, context: __SerdeContext): ArtifactStore => {
  return {
    encryptionKey:
      output.encryptionKey != null ? deserializeAws_json1_1EncryptionKey(output.encryptionKey, context) : undefined,
    location: __expectString(output.location),
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_json1_1ArtifactStoreMap = (
  output: any,
  context: __SerdeContext
): Record<string, ArtifactStore> => {
  return Object.entries(output).reduce((acc: Record<string, ArtifactStore>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_json1_1ArtifactStore(value, context);
    return acc;
  }, {});
};

const deserializeAws_json1_1AWSSessionCredentials = (output: any, context: __SerdeContext): AWSSessionCredentials => {
  return {
    accessKeyId: __expectString(output.accessKeyId),
    secretAccessKey: __expectString(output.secretAccessKey),
    sessionToken: __expectString(output.sessionToken),
  } as any;
};

const deserializeAws_json1_1BlockerDeclaration = (output: any, context: __SerdeContext): BlockerDeclaration => {
  return {
    name: __expectString(output.name),
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_json1_1ConcurrentModificationException = (
  output: any,
  context: __SerdeContext
): ConcurrentModificationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ConflictException = (output: any, context: __SerdeContext): ConflictException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1CreateCustomActionTypeOutput = (
  output: any,
  context: __SerdeContext
): CreateCustomActionTypeOutput => {
  return {
    actionType: output.actionType != null ? deserializeAws_json1_1ActionType(output.actionType, context) : undefined,
    tags: output.tags != null ? deserializeAws_json1_1TagList(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CreatePipelineOutput = (output: any, context: __SerdeContext): CreatePipelineOutput => {
  return {
    pipeline: output.pipeline != null ? deserializeAws_json1_1PipelineDeclaration(output.pipeline, context) : undefined,
    tags: output.tags != null ? deserializeAws_json1_1TagList(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteWebhookOutput = (output: any, context: __SerdeContext): DeleteWebhookOutput => {
  return {} as any;
};

const deserializeAws_json1_1DeregisterWebhookWithThirdPartyOutput = (
  output: any,
  context: __SerdeContext
): DeregisterWebhookWithThirdPartyOutput => {
  return {} as any;
};

const deserializeAws_json1_1DuplicatedStopRequestException = (
  output: any,
  context: __SerdeContext
): DuplicatedStopRequestException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1EncryptionKey = (output: any, context: __SerdeContext): EncryptionKey => {
  return {
    id: __expectString(output.id),
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_json1_1ErrorDetails = (output: any, context: __SerdeContext): ErrorDetails => {
  return {
    code: __expectString(output.code),
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ExecutionTrigger = (output: any, context: __SerdeContext): ExecutionTrigger => {
  return {
    triggerDetail: __expectString(output.triggerDetail),
    triggerType: __expectString(output.triggerType),
  } as any;
};

const deserializeAws_json1_1ExecutorConfiguration = (output: any, context: __SerdeContext): ExecutorConfiguration => {
  return {
    jobWorkerExecutorConfiguration:
      output.jobWorkerExecutorConfiguration != null
        ? deserializeAws_json1_1JobWorkerExecutorConfiguration(output.jobWorkerExecutorConfiguration, context)
        : undefined,
    lambdaExecutorConfiguration:
      output.lambdaExecutorConfiguration != null
        ? deserializeAws_json1_1LambdaExecutorConfiguration(output.lambdaExecutorConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetActionTypeOutput = (output: any, context: __SerdeContext): GetActionTypeOutput => {
  return {
    actionType:
      output.actionType != null ? deserializeAws_json1_1ActionTypeDeclaration(output.actionType, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetJobDetailsOutput = (output: any, context: __SerdeContext): GetJobDetailsOutput => {
  return {
    jobDetails: output.jobDetails != null ? deserializeAws_json1_1JobDetails(output.jobDetails, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetPipelineExecutionOutput = (
  output: any,
  context: __SerdeContext
): GetPipelineExecutionOutput => {
  return {
    pipelineExecution:
      output.pipelineExecution != null
        ? deserializeAws_json1_1PipelineExecution(output.pipelineExecution, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetPipelineOutput = (output: any, context: __SerdeContext): GetPipelineOutput => {
  return {
    metadata: output.metadata != null ? deserializeAws_json1_1PipelineMetadata(output.metadata, context) : undefined,
    pipeline: output.pipeline != null ? deserializeAws_json1_1PipelineDeclaration(output.pipeline, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetPipelineStateOutput = (output: any, context: __SerdeContext): GetPipelineStateOutput => {
  return {
    created:
      output.created != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.created))) : undefined,
    pipelineName: __expectString(output.pipelineName),
    pipelineVersion: __expectInt32(output.pipelineVersion),
    stageStates:
      output.stageStates != null ? deserializeAws_json1_1StageStateList(output.stageStates, context) : undefined,
    updated:
      output.updated != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.updated))) : undefined,
  } as any;
};

const deserializeAws_json1_1GetThirdPartyJobDetailsOutput = (
  output: any,
  context: __SerdeContext
): GetThirdPartyJobDetailsOutput => {
  return {
    jobDetails:
      output.jobDetails != null ? deserializeAws_json1_1ThirdPartyJobDetails(output.jobDetails, context) : undefined,
  } as any;
};

const deserializeAws_json1_1InputArtifact = (output: any, context: __SerdeContext): InputArtifact => {
  return {
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_json1_1InputArtifactList = (output: any, context: __SerdeContext): InputArtifact[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1InputArtifact(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1InvalidActionDeclarationException = (
  output: any,
  context: __SerdeContext
): InvalidActionDeclarationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidApprovalTokenException = (
  output: any,
  context: __SerdeContext
): InvalidApprovalTokenException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidArnException = (output: any, context: __SerdeContext): InvalidArnException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidBlockerDeclarationException = (
  output: any,
  context: __SerdeContext
): InvalidBlockerDeclarationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidClientTokenException = (
  output: any,
  context: __SerdeContext
): InvalidClientTokenException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidJobException = (output: any, context: __SerdeContext): InvalidJobException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidJobStateException = (
  output: any,
  context: __SerdeContext
): InvalidJobStateException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidNextTokenException = (
  output: any,
  context: __SerdeContext
): InvalidNextTokenException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidNonceException = (output: any, context: __SerdeContext): InvalidNonceException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidStageDeclarationException = (
  output: any,
  context: __SerdeContext
): InvalidStageDeclarationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidStructureException = (
  output: any,
  context: __SerdeContext
): InvalidStructureException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidTagsException = (output: any, context: __SerdeContext): InvalidTagsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidWebhookAuthenticationParametersException = (
  output: any,
  context: __SerdeContext
): InvalidWebhookAuthenticationParametersException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidWebhookFilterPatternException = (
  output: any,
  context: __SerdeContext
): InvalidWebhookFilterPatternException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1Job = (output: any, context: __SerdeContext): Job => {
  return {
    accountId: __expectString(output.accountId),
    data: output.data != null ? deserializeAws_json1_1JobData(output.data, context) : undefined,
    id: __expectString(output.id),
    nonce: __expectString(output.nonce),
  } as any;
};

const deserializeAws_json1_1JobData = (output: any, context: __SerdeContext): JobData => {
  return {
    actionConfiguration:
      output.actionConfiguration != null
        ? deserializeAws_json1_1ActionConfiguration(output.actionConfiguration, context)
        : undefined,
    actionTypeId:
      output.actionTypeId != null ? deserializeAws_json1_1ActionTypeId(output.actionTypeId, context) : undefined,
    artifactCredentials:
      output.artifactCredentials != null
        ? deserializeAws_json1_1AWSSessionCredentials(output.artifactCredentials, context)
        : undefined,
    continuationToken: __expectString(output.continuationToken),
    encryptionKey:
      output.encryptionKey != null ? deserializeAws_json1_1EncryptionKey(output.encryptionKey, context) : undefined,
    inputArtifacts:
      output.inputArtifacts != null ? deserializeAws_json1_1ArtifactList(output.inputArtifacts, context) : undefined,
    outputArtifacts:
      output.outputArtifacts != null ? deserializeAws_json1_1ArtifactList(output.outputArtifacts, context) : undefined,
    pipelineContext:
      output.pipelineContext != null
        ? deserializeAws_json1_1PipelineContext(output.pipelineContext, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1JobDetails = (output: any, context: __SerdeContext): JobDetails => {
  return {
    accountId: __expectString(output.accountId),
    data: output.data != null ? deserializeAws_json1_1JobData(output.data, context) : undefined,
    id: __expectString(output.id),
  } as any;
};

const deserializeAws_json1_1JobList = (output: any, context: __SerdeContext): Job[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Job(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1JobNotFoundException = (output: any, context: __SerdeContext): JobNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1JobWorkerExecutorConfiguration = (
  output: any,
  context: __SerdeContext
): JobWorkerExecutorConfiguration => {
  return {
    pollingAccounts:
      output.pollingAccounts != null
        ? deserializeAws_json1_1PollingAccountList(output.pollingAccounts, context)
        : undefined,
    pollingServicePrincipals:
      output.pollingServicePrincipals != null
        ? deserializeAws_json1_1PollingServicePrincipalList(output.pollingServicePrincipals, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1LambdaExecutorConfiguration = (
  output: any,
  context: __SerdeContext
): LambdaExecutorConfiguration => {
  return {
    lambdaFunctionArn: __expectString(output.lambdaFunctionArn),
  } as any;
};

const deserializeAws_json1_1LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ListActionExecutionsOutput = (
  output: any,
  context: __SerdeContext
): ListActionExecutionsOutput => {
  return {
    actionExecutionDetails:
      output.actionExecutionDetails != null
        ? deserializeAws_json1_1ActionExecutionDetailList(output.actionExecutionDetails, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1ListActionTypesOutput = (output: any, context: __SerdeContext): ListActionTypesOutput => {
  return {
    actionTypes:
      output.actionTypes != null ? deserializeAws_json1_1ActionTypeList(output.actionTypes, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1ListPipelineExecutionsOutput = (
  output: any,
  context: __SerdeContext
): ListPipelineExecutionsOutput => {
  return {
    nextToken: __expectString(output.nextToken),
    pipelineExecutionSummaries:
      output.pipelineExecutionSummaries != null
        ? deserializeAws_json1_1PipelineExecutionSummaryList(output.pipelineExecutionSummaries, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListPipelinesOutput = (output: any, context: __SerdeContext): ListPipelinesOutput => {
  return {
    nextToken: __expectString(output.nextToken),
    pipelines: output.pipelines != null ? deserializeAws_json1_1PipelineList(output.pipelines, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ListTagsForResourceOutput = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceOutput => {
  return {
    nextToken: __expectString(output.nextToken),
    tags: output.tags != null ? deserializeAws_json1_1TagList(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ListWebhookItem = (output: any, context: __SerdeContext): ListWebhookItem => {
  return {
    arn: __expectString(output.arn),
    definition:
      output.definition != null ? deserializeAws_json1_1WebhookDefinition(output.definition, context) : undefined,
    errorCode: __expectString(output.errorCode),
    errorMessage: __expectString(output.errorMessage),
    lastTriggered:
      output.lastTriggered != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastTriggered)))
        : undefined,
    tags: output.tags != null ? deserializeAws_json1_1TagList(output.tags, context) : undefined,
    url: __expectString(output.url),
  } as any;
};

const deserializeAws_json1_1ListWebhooksOutput = (output: any, context: __SerdeContext): ListWebhooksOutput => {
  return {
    NextToken: __expectString(output.NextToken),
    webhooks: output.webhooks != null ? deserializeAws_json1_1WebhookList(output.webhooks, context) : undefined,
  } as any;
};

const deserializeAws_json1_1NotLatestPipelineExecutionException = (
  output: any,
  context: __SerdeContext
): NotLatestPipelineExecutionException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1OutputArtifact = (output: any, context: __SerdeContext): OutputArtifact => {
  return {
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_json1_1OutputArtifactList = (output: any, context: __SerdeContext): OutputArtifact[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1OutputArtifact(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1OutputVariablesMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_json1_1OutputVariablesSizeExceededException = (
  output: any,
  context: __SerdeContext
): OutputVariablesSizeExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1PipelineContext = (output: any, context: __SerdeContext): PipelineContext => {
  return {
    action: output.action != null ? deserializeAws_json1_1ActionContext(output.action, context) : undefined,
    pipelineArn: __expectString(output.pipelineArn),
    pipelineExecutionId: __expectString(output.pipelineExecutionId),
    pipelineName: __expectString(output.pipelineName),
    stage: output.stage != null ? deserializeAws_json1_1StageContext(output.stage, context) : undefined,
  } as any;
};

const deserializeAws_json1_1PipelineDeclaration = (output: any, context: __SerdeContext): PipelineDeclaration => {
  return {
    artifactStore:
      output.artifactStore != null ? deserializeAws_json1_1ArtifactStore(output.artifactStore, context) : undefined,
    artifactStores:
      output.artifactStores != null
        ? deserializeAws_json1_1ArtifactStoreMap(output.artifactStores, context)
        : undefined,
    name: __expectString(output.name),
    roleArn: __expectString(output.roleArn),
    stages:
      output.stages != null ? deserializeAws_json1_1PipelineStageDeclarationList(output.stages, context) : undefined,
    version: __expectInt32(output.version),
  } as any;
};

const deserializeAws_json1_1PipelineExecution = (output: any, context: __SerdeContext): PipelineExecution => {
  return {
    artifactRevisions:
      output.artifactRevisions != null
        ? deserializeAws_json1_1ArtifactRevisionList(output.artifactRevisions, context)
        : undefined,
    pipelineExecutionId: __expectString(output.pipelineExecutionId),
    pipelineName: __expectString(output.pipelineName),
    pipelineVersion: __expectInt32(output.pipelineVersion),
    status: __expectString(output.status),
    statusSummary: __expectString(output.statusSummary),
  } as any;
};

const deserializeAws_json1_1PipelineExecutionNotFoundException = (
  output: any,
  context: __SerdeContext
): PipelineExecutionNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1PipelineExecutionNotStoppableException = (
  output: any,
  context: __SerdeContext
): PipelineExecutionNotStoppableException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1PipelineExecutionSummary = (
  output: any,
  context: __SerdeContext
): PipelineExecutionSummary => {
  return {
    lastUpdateTime:
      output.lastUpdateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdateTime)))
        : undefined,
    pipelineExecutionId: __expectString(output.pipelineExecutionId),
    sourceRevisions:
      output.sourceRevisions != null
        ? deserializeAws_json1_1SourceRevisionList(output.sourceRevisions, context)
        : undefined,
    startTime:
      output.startTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startTime))) : undefined,
    status: __expectString(output.status),
    stopTrigger:
      output.stopTrigger != null ? deserializeAws_json1_1StopExecutionTrigger(output.stopTrigger, context) : undefined,
    trigger: output.trigger != null ? deserializeAws_json1_1ExecutionTrigger(output.trigger, context) : undefined,
  } as any;
};

const deserializeAws_json1_1PipelineExecutionSummaryList = (
  output: any,
  context: __SerdeContext
): PipelineExecutionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PipelineExecutionSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1PipelineList = (output: any, context: __SerdeContext): PipelineSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PipelineSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1PipelineMetadata = (output: any, context: __SerdeContext): PipelineMetadata => {
  return {
    created:
      output.created != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.created))) : undefined,
    pipelineArn: __expectString(output.pipelineArn),
    updated:
      output.updated != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.updated))) : undefined,
  } as any;
};

const deserializeAws_json1_1PipelineNameInUseException = (
  output: any,
  context: __SerdeContext
): PipelineNameInUseException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1PipelineNotFoundException = (
  output: any,
  context: __SerdeContext
): PipelineNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1PipelineStageDeclarationList = (
  output: any,
  context: __SerdeContext
): StageDeclaration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1StageDeclaration(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1PipelineSummary = (output: any, context: __SerdeContext): PipelineSummary => {
  return {
    created:
      output.created != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.created))) : undefined,
    name: __expectString(output.name),
    updated:
      output.updated != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.updated))) : undefined,
    version: __expectInt32(output.version),
  } as any;
};

const deserializeAws_json1_1PipelineVersionNotFoundException = (
  output: any,
  context: __SerdeContext
): PipelineVersionNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1PollForJobsOutput = (output: any, context: __SerdeContext): PollForJobsOutput => {
  return {
    jobs: output.jobs != null ? deserializeAws_json1_1JobList(output.jobs, context) : undefined,
  } as any;
};

const deserializeAws_json1_1PollForThirdPartyJobsOutput = (
  output: any,
  context: __SerdeContext
): PollForThirdPartyJobsOutput => {
  return {
    jobs: output.jobs != null ? deserializeAws_json1_1ThirdPartyJobList(output.jobs, context) : undefined,
  } as any;
};

const deserializeAws_json1_1PollingAccountList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1PollingServicePrincipalList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1PutActionRevisionOutput = (
  output: any,
  context: __SerdeContext
): PutActionRevisionOutput => {
  return {
    newRevision: __expectBoolean(output.newRevision),
    pipelineExecutionId: __expectString(output.pipelineExecutionId),
  } as any;
};

const deserializeAws_json1_1PutApprovalResultOutput = (
  output: any,
  context: __SerdeContext
): PutApprovalResultOutput => {
  return {
    approvedAt:
      output.approvedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.approvedAt))) : undefined,
  } as any;
};

const deserializeAws_json1_1PutWebhookOutput = (output: any, context: __SerdeContext): PutWebhookOutput => {
  return {
    webhook: output.webhook != null ? deserializeAws_json1_1ListWebhookItem(output.webhook, context) : undefined,
  } as any;
};

const deserializeAws_json1_1RegisterWebhookWithThirdPartyOutput = (
  output: any,
  context: __SerdeContext
): RegisterWebhookWithThirdPartyOutput => {
  return {} as any;
};

const deserializeAws_json1_1RequestFailedException = (output: any, context: __SerdeContext): RequestFailedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ResolvedActionConfigurationMap = (
  output: any,
  context: __SerdeContext
): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1RetryStageExecutionOutput = (
  output: any,
  context: __SerdeContext
): RetryStageExecutionOutput => {
  return {
    pipelineExecutionId: __expectString(output.pipelineExecutionId),
  } as any;
};

const deserializeAws_json1_1S3ArtifactLocation = (output: any, context: __SerdeContext): S3ArtifactLocation => {
  return {
    bucketName: __expectString(output.bucketName),
    objectKey: __expectString(output.objectKey),
  } as any;
};

const deserializeAws_json1_1S3Location = (output: any, context: __SerdeContext): S3Location => {
  return {
    bucket: __expectString(output.bucket),
    key: __expectString(output.key),
  } as any;
};

const deserializeAws_json1_1SourceRevision = (output: any, context: __SerdeContext): SourceRevision => {
  return {
    actionName: __expectString(output.actionName),
    revisionId: __expectString(output.revisionId),
    revisionSummary: __expectString(output.revisionSummary),
    revisionUrl: __expectString(output.revisionUrl),
  } as any;
};

const deserializeAws_json1_1SourceRevisionList = (output: any, context: __SerdeContext): SourceRevision[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SourceRevision(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1StageActionDeclarationList = (
  output: any,
  context: __SerdeContext
): ActionDeclaration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ActionDeclaration(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1StageBlockerDeclarationList = (
  output: any,
  context: __SerdeContext
): BlockerDeclaration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1BlockerDeclaration(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1StageContext = (output: any, context: __SerdeContext): StageContext => {
  return {
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_json1_1StageDeclaration = (output: any, context: __SerdeContext): StageDeclaration => {
  return {
    actions:
      output.actions != null ? deserializeAws_json1_1StageActionDeclarationList(output.actions, context) : undefined,
    blockers:
      output.blockers != null ? deserializeAws_json1_1StageBlockerDeclarationList(output.blockers, context) : undefined,
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_json1_1StageExecution = (output: any, context: __SerdeContext): StageExecution => {
  return {
    pipelineExecutionId: __expectString(output.pipelineExecutionId),
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_json1_1StageNotFoundException = (output: any, context: __SerdeContext): StageNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1StageNotRetryableException = (
  output: any,
  context: __SerdeContext
): StageNotRetryableException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1StageState = (output: any, context: __SerdeContext): StageState => {
  return {
    actionStates:
      output.actionStates != null ? deserializeAws_json1_1ActionStateList(output.actionStates, context) : undefined,
    inboundExecution:
      output.inboundExecution != null
        ? deserializeAws_json1_1StageExecution(output.inboundExecution, context)
        : undefined,
    inboundTransitionState:
      output.inboundTransitionState != null
        ? deserializeAws_json1_1TransitionState(output.inboundTransitionState, context)
        : undefined,
    latestExecution:
      output.latestExecution != null
        ? deserializeAws_json1_1StageExecution(output.latestExecution, context)
        : undefined,
    stageName: __expectString(output.stageName),
  } as any;
};

const deserializeAws_json1_1StageStateList = (output: any, context: __SerdeContext): StageState[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1StageState(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1StartPipelineExecutionOutput = (
  output: any,
  context: __SerdeContext
): StartPipelineExecutionOutput => {
  return {
    pipelineExecutionId: __expectString(output.pipelineExecutionId),
  } as any;
};

const deserializeAws_json1_1StopExecutionTrigger = (output: any, context: __SerdeContext): StopExecutionTrigger => {
  return {
    reason: __expectString(output.reason),
  } as any;
};

const deserializeAws_json1_1StopPipelineExecutionOutput = (
  output: any,
  context: __SerdeContext
): StopPipelineExecutionOutput => {
  return {
    pipelineExecutionId: __expectString(output.pipelineExecutionId),
  } as any;
};

const deserializeAws_json1_1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    key: __expectString(output.key),
    value: __expectString(output.value),
  } as any;
};

const deserializeAws_json1_1TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Tag(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1TagResourceOutput = (output: any, context: __SerdeContext): TagResourceOutput => {
  return {} as any;
};

const deserializeAws_json1_1ThirdPartyJob = (output: any, context: __SerdeContext): ThirdPartyJob => {
  return {
    clientId: __expectString(output.clientId),
    jobId: __expectString(output.jobId),
  } as any;
};

const deserializeAws_json1_1ThirdPartyJobData = (output: any, context: __SerdeContext): ThirdPartyJobData => {
  return {
    actionConfiguration:
      output.actionConfiguration != null
        ? deserializeAws_json1_1ActionConfiguration(output.actionConfiguration, context)
        : undefined,
    actionTypeId:
      output.actionTypeId != null ? deserializeAws_json1_1ActionTypeId(output.actionTypeId, context) : undefined,
    artifactCredentials:
      output.artifactCredentials != null
        ? deserializeAws_json1_1AWSSessionCredentials(output.artifactCredentials, context)
        : undefined,
    continuationToken: __expectString(output.continuationToken),
    encryptionKey:
      output.encryptionKey != null ? deserializeAws_json1_1EncryptionKey(output.encryptionKey, context) : undefined,
    inputArtifacts:
      output.inputArtifacts != null ? deserializeAws_json1_1ArtifactList(output.inputArtifacts, context) : undefined,
    outputArtifacts:
      output.outputArtifacts != null ? deserializeAws_json1_1ArtifactList(output.outputArtifacts, context) : undefined,
    pipelineContext:
      output.pipelineContext != null
        ? deserializeAws_json1_1PipelineContext(output.pipelineContext, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ThirdPartyJobDetails = (output: any, context: __SerdeContext): ThirdPartyJobDetails => {
  return {
    data: output.data != null ? deserializeAws_json1_1ThirdPartyJobData(output.data, context) : undefined,
    id: __expectString(output.id),
    nonce: __expectString(output.nonce),
  } as any;
};

const deserializeAws_json1_1ThirdPartyJobList = (output: any, context: __SerdeContext): ThirdPartyJob[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ThirdPartyJob(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1TooManyTagsException = (output: any, context: __SerdeContext): TooManyTagsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1TransitionState = (output: any, context: __SerdeContext): TransitionState => {
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

const deserializeAws_json1_1UntagResourceOutput = (output: any, context: __SerdeContext): UntagResourceOutput => {
  return {} as any;
};

const deserializeAws_json1_1UpdatePipelineOutput = (output: any, context: __SerdeContext): UpdatePipelineOutput => {
  return {
    pipeline: output.pipeline != null ? deserializeAws_json1_1PipelineDeclaration(output.pipeline, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ValidationException = (output: any, context: __SerdeContext): ValidationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1WebhookAuthConfiguration = (
  output: any,
  context: __SerdeContext
): WebhookAuthConfiguration => {
  return {
    AllowedIPRange: __expectString(output.AllowedIPRange),
    SecretToken: __expectString(output.SecretToken),
  } as any;
};

const deserializeAws_json1_1WebhookDefinition = (output: any, context: __SerdeContext): WebhookDefinition => {
  return {
    authentication: __expectString(output.authentication),
    authenticationConfiguration:
      output.authenticationConfiguration != null
        ? deserializeAws_json1_1WebhookAuthConfiguration(output.authenticationConfiguration, context)
        : undefined,
    filters: output.filters != null ? deserializeAws_json1_1WebhookFilters(output.filters, context) : undefined,
    name: __expectString(output.name),
    targetAction: __expectString(output.targetAction),
    targetPipeline: __expectString(output.targetPipeline),
  } as any;
};

const deserializeAws_json1_1WebhookFilterRule = (output: any, context: __SerdeContext): WebhookFilterRule => {
  return {
    jsonPath: __expectString(output.jsonPath),
    matchEquals: __expectString(output.matchEquals),
  } as any;
};

const deserializeAws_json1_1WebhookFilters = (output: any, context: __SerdeContext): WebhookFilterRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1WebhookFilterRule(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1WebhookList = (output: any, context: __SerdeContext): ListWebhookItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ListWebhookItem(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1WebhookNotFoundException = (
  output: any,
  context: __SerdeContext
): WebhookNotFoundException => {
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
