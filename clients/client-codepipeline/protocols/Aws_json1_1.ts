import {
  AcknowledgeJobCommandInput,
  AcknowledgeJobCommandOutput
} from "../commands/AcknowledgeJobCommand";
import {
  AcknowledgeThirdPartyJobCommandInput,
  AcknowledgeThirdPartyJobCommandOutput
} from "../commands/AcknowledgeThirdPartyJobCommand";
import {
  CreateCustomActionTypeCommandInput,
  CreateCustomActionTypeCommandOutput
} from "../commands/CreateCustomActionTypeCommand";
import {
  CreatePipelineCommandInput,
  CreatePipelineCommandOutput
} from "../commands/CreatePipelineCommand";
import {
  DeleteCustomActionTypeCommandInput,
  DeleteCustomActionTypeCommandOutput
} from "../commands/DeleteCustomActionTypeCommand";
import {
  DeletePipelineCommandInput,
  DeletePipelineCommandOutput
} from "../commands/DeletePipelineCommand";
import {
  DeleteWebhookCommandInput,
  DeleteWebhookCommandOutput
} from "../commands/DeleteWebhookCommand";
import {
  DeregisterWebhookWithThirdPartyCommandInput,
  DeregisterWebhookWithThirdPartyCommandOutput
} from "../commands/DeregisterWebhookWithThirdPartyCommand";
import {
  DisableStageTransitionCommandInput,
  DisableStageTransitionCommandOutput
} from "../commands/DisableStageTransitionCommand";
import {
  EnableStageTransitionCommandInput,
  EnableStageTransitionCommandOutput
} from "../commands/EnableStageTransitionCommand";
import {
  GetJobDetailsCommandInput,
  GetJobDetailsCommandOutput
} from "../commands/GetJobDetailsCommand";
import {
  GetPipelineCommandInput,
  GetPipelineCommandOutput
} from "../commands/GetPipelineCommand";
import {
  GetPipelineExecutionCommandInput,
  GetPipelineExecutionCommandOutput
} from "../commands/GetPipelineExecutionCommand";
import {
  GetPipelineStateCommandInput,
  GetPipelineStateCommandOutput
} from "../commands/GetPipelineStateCommand";
import {
  GetThirdPartyJobDetailsCommandInput,
  GetThirdPartyJobDetailsCommandOutput
} from "../commands/GetThirdPartyJobDetailsCommand";
import {
  ListActionExecutionsCommandInput,
  ListActionExecutionsCommandOutput
} from "../commands/ListActionExecutionsCommand";
import {
  ListActionTypesCommandInput,
  ListActionTypesCommandOutput
} from "../commands/ListActionTypesCommand";
import {
  ListPipelineExecutionsCommandInput,
  ListPipelineExecutionsCommandOutput
} from "../commands/ListPipelineExecutionsCommand";
import {
  ListPipelinesCommandInput,
  ListPipelinesCommandOutput
} from "../commands/ListPipelinesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "../commands/ListTagsForResourceCommand";
import {
  ListWebhooksCommandInput,
  ListWebhooksCommandOutput
} from "../commands/ListWebhooksCommand";
import {
  PollForJobsCommandInput,
  PollForJobsCommandOutput
} from "../commands/PollForJobsCommand";
import {
  PollForThirdPartyJobsCommandInput,
  PollForThirdPartyJobsCommandOutput
} from "../commands/PollForThirdPartyJobsCommand";
import {
  PutActionRevisionCommandInput,
  PutActionRevisionCommandOutput
} from "../commands/PutActionRevisionCommand";
import {
  PutApprovalResultCommandInput,
  PutApprovalResultCommandOutput
} from "../commands/PutApprovalResultCommand";
import {
  PutJobFailureResultCommandInput,
  PutJobFailureResultCommandOutput
} from "../commands/PutJobFailureResultCommand";
import {
  PutJobSuccessResultCommandInput,
  PutJobSuccessResultCommandOutput
} from "../commands/PutJobSuccessResultCommand";
import {
  PutThirdPartyJobFailureResultCommandInput,
  PutThirdPartyJobFailureResultCommandOutput
} from "../commands/PutThirdPartyJobFailureResultCommand";
import {
  PutThirdPartyJobSuccessResultCommandInput,
  PutThirdPartyJobSuccessResultCommandOutput
} from "../commands/PutThirdPartyJobSuccessResultCommand";
import {
  PutWebhookCommandInput,
  PutWebhookCommandOutput
} from "../commands/PutWebhookCommand";
import {
  RegisterWebhookWithThirdPartyCommandInput,
  RegisterWebhookWithThirdPartyCommandOutput
} from "../commands/RegisterWebhookWithThirdPartyCommand";
import {
  RetryStageExecutionCommandInput,
  RetryStageExecutionCommandOutput
} from "../commands/RetryStageExecutionCommand";
import {
  StartPipelineExecutionCommandInput,
  StartPipelineExecutionCommandOutput
} from "../commands/StartPipelineExecutionCommand";
import {
  StopPipelineExecutionCommandInput,
  StopPipelineExecutionCommandOutput
} from "../commands/StopPipelineExecutionCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "../commands/TagResourceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "../commands/UntagResourceCommand";
import {
  UpdatePipelineCommandInput,
  UpdatePipelineCommandOutput
} from "../commands/UpdatePipelineCommand";
import {
  AWSSessionCredentials,
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
  ActionTypeId,
  ActionTypeNotFoundException,
  ActionTypeSettings,
  ApprovalAlreadyCompletedException,
  ApprovalResult,
  Artifact,
  ArtifactDetail,
  ArtifactDetails,
  ArtifactLocation,
  ArtifactRevision,
  ArtifactStore,
  BlockerDeclaration,
  ConcurrentModificationException,
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
  FailureDetails,
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
  UpdatePipelineInput,
  UpdatePipelineOutput,
  ValidationException,
  WebhookAuthConfiguration,
  WebhookDefinition,
  WebhookFilterRule,
  WebhookNotFoundException
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

export const serializeAws_json1_1AcknowledgeJobCommand = async (
  input: AcknowledgeJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodePipeline_20150709.AcknowledgeJob"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1AcknowledgeJobInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AcknowledgeThirdPartyJobCommand = async (
  input: AcknowledgeThirdPartyJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodePipeline_20150709.AcknowledgeThirdPartyJob"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1AcknowledgeThirdPartyJobInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateCustomActionTypeCommand = async (
  input: CreateCustomActionTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodePipeline_20150709.CreateCustomActionType"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateCustomActionTypeInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreatePipelineCommand = async (
  input: CreatePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodePipeline_20150709.CreatePipeline"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreatePipelineInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteCustomActionTypeCommand = async (
  input: DeleteCustomActionTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodePipeline_20150709.DeleteCustomActionType"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteCustomActionTypeInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeletePipelineCommand = async (
  input: DeletePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodePipeline_20150709.DeletePipeline"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeletePipelineInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteWebhookCommand = async (
  input: DeleteWebhookCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodePipeline_20150709.DeleteWebhook"
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodePipeline_20150709.DeregisterWebhookWithThirdParty"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeregisterWebhookWithThirdPartyInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisableStageTransitionCommand = async (
  input: DisableStageTransitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodePipeline_20150709.DisableStageTransition"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DisableStageTransitionInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1EnableStageTransitionCommand = async (
  input: EnableStageTransitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodePipeline_20150709.EnableStageTransition"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1EnableStageTransitionInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetJobDetailsCommand = async (
  input: GetJobDetailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodePipeline_20150709.GetJobDetails"
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodePipeline_20150709.GetPipeline"
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodePipeline_20150709.GetPipelineExecution"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetPipelineExecutionInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetPipelineStateCommand = async (
  input: GetPipelineStateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodePipeline_20150709.GetPipelineState"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetPipelineStateInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetThirdPartyJobDetailsCommand = async (
  input: GetThirdPartyJobDetailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodePipeline_20150709.GetThirdPartyJobDetails"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetThirdPartyJobDetailsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListActionExecutionsCommand = async (
  input: ListActionExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodePipeline_20150709.ListActionExecutions"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListActionExecutionsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListActionTypesCommand = async (
  input: ListActionTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodePipeline_20150709.ListActionTypes"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListActionTypesInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListPipelineExecutionsCommand = async (
  input: ListPipelineExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodePipeline_20150709.ListPipelineExecutions"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListPipelineExecutionsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListPipelinesCommand = async (
  input: ListPipelinesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodePipeline_20150709.ListPipelines"
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodePipeline_20150709.ListTagsForResource"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListTagsForResourceInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListWebhooksCommand = async (
  input: ListWebhooksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodePipeline_20150709.ListWebhooks"
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodePipeline_20150709.PollForJobs"
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodePipeline_20150709.PollForThirdPartyJobs"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1PollForThirdPartyJobsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutActionRevisionCommand = async (
  input: PutActionRevisionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodePipeline_20150709.PutActionRevision"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1PutActionRevisionInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutApprovalResultCommand = async (
  input: PutApprovalResultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodePipeline_20150709.PutApprovalResult"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1PutApprovalResultInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutJobFailureResultCommand = async (
  input: PutJobFailureResultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodePipeline_20150709.PutJobFailureResult"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1PutJobFailureResultInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutJobSuccessResultCommand = async (
  input: PutJobSuccessResultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodePipeline_20150709.PutJobSuccessResult"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1PutJobSuccessResultInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutThirdPartyJobFailureResultCommand = async (
  input: PutThirdPartyJobFailureResultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodePipeline_20150709.PutThirdPartyJobFailureResult"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1PutThirdPartyJobFailureResultInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutThirdPartyJobSuccessResultCommand = async (
  input: PutThirdPartyJobSuccessResultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodePipeline_20150709.PutThirdPartyJobSuccessResult"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1PutThirdPartyJobSuccessResultInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutWebhookCommand = async (
  input: PutWebhookCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodePipeline_20150709.PutWebhook"
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodePipeline_20150709.RegisterWebhookWithThirdParty"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1RegisterWebhookWithThirdPartyInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RetryStageExecutionCommand = async (
  input: RetryStageExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodePipeline_20150709.RetryStageExecution"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1RetryStageExecutionInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartPipelineExecutionCommand = async (
  input: StartPipelineExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodePipeline_20150709.StartPipelineExecution"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1StartPipelineExecutionInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopPipelineExecutionCommand = async (
  input: StopPipelineExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodePipeline_20150709.StopPipelineExecution"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1StopPipelineExecutionInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodePipeline_20150709.TagResource"
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodePipeline_20150709.UntagResource"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UntagResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdatePipelineCommand = async (
  input: UpdatePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodePipeline_20150709.UpdatePipeline"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdatePipelineInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1AcknowledgeJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcknowledgeJobCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AcknowledgeJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AcknowledgeJobOutput(data, context);
  const response: AcknowledgeJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AcknowledgeJobOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AcknowledgeJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcknowledgeJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidNonceException":
    case "com.amazonaws.codepipeline#InvalidNonceException":
      response = {
        ...(await deserializeAws_json1_1InvalidNonceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "JobNotFoundException":
    case "com.amazonaws.codepipeline#JobNotFoundException":
      response = {
        ...(await deserializeAws_json1_1JobNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1AcknowledgeThirdPartyJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcknowledgeThirdPartyJobCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AcknowledgeThirdPartyJobCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AcknowledgeThirdPartyJobOutput(
    data,
    context
  );
  const response: AcknowledgeThirdPartyJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AcknowledgeThirdPartyJobOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AcknowledgeThirdPartyJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcknowledgeThirdPartyJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidClientTokenException":
    case "com.amazonaws.codepipeline#InvalidClientTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidClientTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNonceException":
    case "com.amazonaws.codepipeline#InvalidNonceException":
      response = {
        ...(await deserializeAws_json1_1InvalidNonceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "JobNotFoundException":
    case "com.amazonaws.codepipeline#JobNotFoundException":
      response = {
        ...(await deserializeAws_json1_1JobNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateCustomActionTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomActionTypeCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateCustomActionTypeCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateCustomActionTypeOutput(data, context);
  const response: CreateCustomActionTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateCustomActionTypeOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateCustomActionTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomActionTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.codepipeline#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTagsException":
    case "com.amazonaws.codepipeline#InvalidTagsException":
      response = {
        ...(await deserializeAws_json1_1InvalidTagsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.codepipeline#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyTagsException":
    case "com.amazonaws.codepipeline#TooManyTagsException":
      response = {
        ...(await deserializeAws_json1_1TooManyTagsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreatePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePipelineCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreatePipelineCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreatePipelineOutput(data, context);
  const response: CreatePipelineCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreatePipelineOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreatePipelineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePipelineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.codepipeline#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidActionDeclarationException":
    case "com.amazonaws.codepipeline#InvalidActionDeclarationException":
      response = {
        ...(await deserializeAws_json1_1InvalidActionDeclarationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidBlockerDeclarationException":
    case "com.amazonaws.codepipeline#InvalidBlockerDeclarationException":
      response = {
        ...(await deserializeAws_json1_1InvalidBlockerDeclarationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidStageDeclarationException":
    case "com.amazonaws.codepipeline#InvalidStageDeclarationException":
      response = {
        ...(await deserializeAws_json1_1InvalidStageDeclarationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidStructureException":
    case "com.amazonaws.codepipeline#InvalidStructureException":
      response = {
        ...(await deserializeAws_json1_1InvalidStructureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTagsException":
    case "com.amazonaws.codepipeline#InvalidTagsException":
      response = {
        ...(await deserializeAws_json1_1InvalidTagsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.codepipeline#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PipelineNameInUseException":
    case "com.amazonaws.codepipeline#PipelineNameInUseException":
      response = {
        ...(await deserializeAws_json1_1PipelineNameInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyTagsException":
    case "com.amazonaws.codepipeline#TooManyTagsException":
      response = {
        ...(await deserializeAws_json1_1TooManyTagsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteCustomActionTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomActionTypeCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteCustomActionTypeCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: DeleteCustomActionTypeCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteCustomActionTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomActionTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.codepipeline#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeletePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePipelineCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeletePipelineCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeletePipelineCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeletePipelineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePipelineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.codepipeline#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteWebhookCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWebhookCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteWebhookCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteWebhookOutput(data, context);
  const response: DeleteWebhookCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteWebhookOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteWebhookCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWebhookCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.codepipeline#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeregisterWebhookWithThirdPartyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterWebhookWithThirdPartyCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeregisterWebhookWithThirdPartyCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeregisterWebhookWithThirdPartyOutput(
    data,
    context
  );
  const response: DeregisterWebhookWithThirdPartyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeregisterWebhookWithThirdPartyOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeregisterWebhookWithThirdPartyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterWebhookWithThirdPartyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WebhookNotFoundException":
    case "com.amazonaws.codepipeline#WebhookNotFoundException":
      response = {
        ...(await deserializeAws_json1_1WebhookNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DisableStageTransitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableStageTransitionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DisableStageTransitionCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: DisableStageTransitionCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisableStageTransitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableStageTransitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "PipelineNotFoundException":
    case "com.amazonaws.codepipeline#PipelineNotFoundException":
      response = {
        ...(await deserializeAws_json1_1PipelineNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "StageNotFoundException":
    case "com.amazonaws.codepipeline#StageNotFoundException":
      response = {
        ...(await deserializeAws_json1_1StageNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1EnableStageTransitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableStageTransitionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1EnableStageTransitionCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: EnableStageTransitionCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1EnableStageTransitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableStageTransitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "PipelineNotFoundException":
    case "com.amazonaws.codepipeline#PipelineNotFoundException":
      response = {
        ...(await deserializeAws_json1_1PipelineNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "StageNotFoundException":
    case "com.amazonaws.codepipeline#StageNotFoundException":
      response = {
        ...(await deserializeAws_json1_1StageNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1GetJobDetailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobDetailsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetJobDetailsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetJobDetailsOutput(data, context);
  const response: GetJobDetailsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetJobDetailsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetJobDetailsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobDetailsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "JobNotFoundException":
    case "com.amazonaws.codepipeline#JobNotFoundException":
      response = {
        ...(await deserializeAws_json1_1JobNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1GetPipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPipelineCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetPipelineCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetPipelineOutput(data, context);
  const response: GetPipelineCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetPipelineOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetPipelineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPipelineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "PipelineNotFoundException":
    case "com.amazonaws.codepipeline#PipelineNotFoundException":
      response = {
        ...(await deserializeAws_json1_1PipelineNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PipelineVersionNotFoundException":
    case "com.amazonaws.codepipeline#PipelineVersionNotFoundException":
      response = {
        ...(await deserializeAws_json1_1PipelineVersionNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1GetPipelineExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPipelineExecutionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetPipelineExecutionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetPipelineExecutionOutput(data, context);
  const response: GetPipelineExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetPipelineExecutionOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetPipelineExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPipelineExecutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "PipelineExecutionNotFoundException":
    case "com.amazonaws.codepipeline#PipelineExecutionNotFoundException":
      response = {
        ...(await deserializeAws_json1_1PipelineExecutionNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PipelineNotFoundException":
    case "com.amazonaws.codepipeline#PipelineNotFoundException":
      response = {
        ...(await deserializeAws_json1_1PipelineNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1GetPipelineStateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPipelineStateCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetPipelineStateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetPipelineStateOutput(data, context);
  const response: GetPipelineStateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetPipelineStateOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetPipelineStateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPipelineStateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "PipelineNotFoundException":
    case "com.amazonaws.codepipeline#PipelineNotFoundException":
      response = {
        ...(await deserializeAws_json1_1PipelineNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1GetThirdPartyJobDetailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetThirdPartyJobDetailsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetThirdPartyJobDetailsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetThirdPartyJobDetailsOutput(data, context);
  const response: GetThirdPartyJobDetailsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetThirdPartyJobDetailsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetThirdPartyJobDetailsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetThirdPartyJobDetailsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidClientTokenException":
    case "com.amazonaws.codepipeline#InvalidClientTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidClientTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidJobException":
    case "com.amazonaws.codepipeline#InvalidJobException":
      response = {
        ...(await deserializeAws_json1_1InvalidJobExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "JobNotFoundException":
    case "com.amazonaws.codepipeline#JobNotFoundException":
      response = {
        ...(await deserializeAws_json1_1JobNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListActionExecutionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListActionExecutionsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListActionExecutionsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListActionExecutionsOutput(data, context);
  const response: ListActionExecutionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListActionExecutionsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListActionExecutionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListActionExecutionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.codepipeline#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PipelineExecutionNotFoundException":
    case "com.amazonaws.codepipeline#PipelineExecutionNotFoundException":
      response = {
        ...(await deserializeAws_json1_1PipelineExecutionNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PipelineNotFoundException":
    case "com.amazonaws.codepipeline#PipelineNotFoundException":
      response = {
        ...(await deserializeAws_json1_1PipelineNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListActionTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListActionTypesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListActionTypesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListActionTypesOutput(data, context);
  const response: ListActionTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListActionTypesOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListActionTypesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListActionTypesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.codepipeline#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListPipelineExecutionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPipelineExecutionsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListPipelineExecutionsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListPipelineExecutionsOutput(data, context);
  const response: ListPipelineExecutionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListPipelineExecutionsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListPipelineExecutionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPipelineExecutionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.codepipeline#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PipelineNotFoundException":
    case "com.amazonaws.codepipeline#PipelineNotFoundException":
      response = {
        ...(await deserializeAws_json1_1PipelineNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListPipelinesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPipelinesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListPipelinesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListPipelinesOutput(data, context);
  const response: ListPipelinesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListPipelinesOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListPipelinesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPipelinesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.codepipeline#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListTagsForResourceCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForResourceOutput(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsForResourceOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazonaws.codepipeline#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.codepipeline#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.codepipeline#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListWebhooksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWebhooksCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListWebhooksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListWebhooksOutput(data, context);
  const response: ListWebhooksCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListWebhooksOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListWebhooksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWebhooksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.codepipeline#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1PollForJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PollForJobsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PollForJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PollForJobsOutput(data, context);
  const response: PollForJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PollForJobsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PollForJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PollForJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ActionTypeNotFoundException":
    case "com.amazonaws.codepipeline#ActionTypeNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ActionTypeNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1PollForThirdPartyJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PollForThirdPartyJobsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PollForThirdPartyJobsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PollForThirdPartyJobsOutput(data, context);
  const response: PollForThirdPartyJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PollForThirdPartyJobsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PollForThirdPartyJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PollForThirdPartyJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ActionTypeNotFoundException":
    case "com.amazonaws.codepipeline#ActionTypeNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ActionTypeNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1PutActionRevisionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutActionRevisionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutActionRevisionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutActionRevisionOutput(data, context);
  const response: PutActionRevisionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutActionRevisionOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutActionRevisionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutActionRevisionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ActionNotFoundException":
    case "com.amazonaws.codepipeline#ActionNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ActionNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PipelineNotFoundException":
    case "com.amazonaws.codepipeline#PipelineNotFoundException":
      response = {
        ...(await deserializeAws_json1_1PipelineNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "StageNotFoundException":
    case "com.amazonaws.codepipeline#StageNotFoundException":
      response = {
        ...(await deserializeAws_json1_1StageNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1PutApprovalResultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutApprovalResultCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutApprovalResultCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutApprovalResultOutput(data, context);
  const response: PutApprovalResultCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutApprovalResultOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutApprovalResultCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutApprovalResultCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ActionNotFoundException":
    case "com.amazonaws.codepipeline#ActionNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ActionNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ApprovalAlreadyCompletedException":
    case "com.amazonaws.codepipeline#ApprovalAlreadyCompletedException":
      response = {
        ...(await deserializeAws_json1_1ApprovalAlreadyCompletedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidApprovalTokenException":
    case "com.amazonaws.codepipeline#InvalidApprovalTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidApprovalTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PipelineNotFoundException":
    case "com.amazonaws.codepipeline#PipelineNotFoundException":
      response = {
        ...(await deserializeAws_json1_1PipelineNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "StageNotFoundException":
    case "com.amazonaws.codepipeline#StageNotFoundException":
      response = {
        ...(await deserializeAws_json1_1StageNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1PutJobFailureResultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutJobFailureResultCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutJobFailureResultCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: PutJobFailureResultCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutJobFailureResultCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutJobFailureResultCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidJobStateException":
    case "com.amazonaws.codepipeline#InvalidJobStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidJobStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "JobNotFoundException":
    case "com.amazonaws.codepipeline#JobNotFoundException":
      response = {
        ...(await deserializeAws_json1_1JobNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1PutJobSuccessResultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutJobSuccessResultCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutJobSuccessResultCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: PutJobSuccessResultCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutJobSuccessResultCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutJobSuccessResultCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidJobStateException":
    case "com.amazonaws.codepipeline#InvalidJobStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidJobStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "JobNotFoundException":
    case "com.amazonaws.codepipeline#JobNotFoundException":
      response = {
        ...(await deserializeAws_json1_1JobNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OutputVariablesSizeExceededException":
    case "com.amazonaws.codepipeline#OutputVariablesSizeExceededException":
      response = {
        ...(await deserializeAws_json1_1OutputVariablesSizeExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1PutThirdPartyJobFailureResultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutThirdPartyJobFailureResultCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutThirdPartyJobFailureResultCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: PutThirdPartyJobFailureResultCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutThirdPartyJobFailureResultCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutThirdPartyJobFailureResultCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidClientTokenException":
    case "com.amazonaws.codepipeline#InvalidClientTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidClientTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidJobStateException":
    case "com.amazonaws.codepipeline#InvalidJobStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidJobStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "JobNotFoundException":
    case "com.amazonaws.codepipeline#JobNotFoundException":
      response = {
        ...(await deserializeAws_json1_1JobNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1PutThirdPartyJobSuccessResultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutThirdPartyJobSuccessResultCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutThirdPartyJobSuccessResultCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: PutThirdPartyJobSuccessResultCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutThirdPartyJobSuccessResultCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutThirdPartyJobSuccessResultCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidClientTokenException":
    case "com.amazonaws.codepipeline#InvalidClientTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidClientTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidJobStateException":
    case "com.amazonaws.codepipeline#InvalidJobStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidJobStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "JobNotFoundException":
    case "com.amazonaws.codepipeline#JobNotFoundException":
      response = {
        ...(await deserializeAws_json1_1JobNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1PutWebhookCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutWebhookCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutWebhookCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutWebhookOutput(data, context);
  const response: PutWebhookCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutWebhookOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutWebhookCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutWebhookCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.codepipeline#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTagsException":
    case "com.amazonaws.codepipeline#InvalidTagsException":
      response = {
        ...(await deserializeAws_json1_1InvalidTagsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidWebhookAuthenticationParametersException":
    case "com.amazonaws.codepipeline#InvalidWebhookAuthenticationParametersException":
      response = {
        ...(await deserializeAws_json1_1InvalidWebhookAuthenticationParametersExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidWebhookFilterPatternException":
    case "com.amazonaws.codepipeline#InvalidWebhookFilterPatternException":
      response = {
        ...(await deserializeAws_json1_1InvalidWebhookFilterPatternExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.codepipeline#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PipelineNotFoundException":
    case "com.amazonaws.codepipeline#PipelineNotFoundException":
      response = {
        ...(await deserializeAws_json1_1PipelineNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyTagsException":
    case "com.amazonaws.codepipeline#TooManyTagsException":
      response = {
        ...(await deserializeAws_json1_1TooManyTagsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1RegisterWebhookWithThirdPartyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterWebhookWithThirdPartyCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RegisterWebhookWithThirdPartyCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RegisterWebhookWithThirdPartyOutput(
    data,
    context
  );
  const response: RegisterWebhookWithThirdPartyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RegisterWebhookWithThirdPartyOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RegisterWebhookWithThirdPartyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterWebhookWithThirdPartyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WebhookNotFoundException":
    case "com.amazonaws.codepipeline#WebhookNotFoundException":
      response = {
        ...(await deserializeAws_json1_1WebhookNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1RetryStageExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RetryStageExecutionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RetryStageExecutionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RetryStageExecutionOutput(data, context);
  const response: RetryStageExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RetryStageExecutionOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RetryStageExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RetryStageExecutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "NotLatestPipelineExecutionException":
    case "com.amazonaws.codepipeline#NotLatestPipelineExecutionException":
      response = {
        ...(await deserializeAws_json1_1NotLatestPipelineExecutionExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PipelineNotFoundException":
    case "com.amazonaws.codepipeline#PipelineNotFoundException":
      response = {
        ...(await deserializeAws_json1_1PipelineNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "StageNotFoundException":
    case "com.amazonaws.codepipeline#StageNotFoundException":
      response = {
        ...(await deserializeAws_json1_1StageNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "StageNotRetryableException":
    case "com.amazonaws.codepipeline#StageNotRetryableException":
      response = {
        ...(await deserializeAws_json1_1StageNotRetryableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1StartPipelineExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartPipelineExecutionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StartPipelineExecutionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartPipelineExecutionOutput(data, context);
  const response: StartPipelineExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartPipelineExecutionOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartPipelineExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartPipelineExecutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "PipelineNotFoundException":
    case "com.amazonaws.codepipeline#PipelineNotFoundException":
      response = {
        ...(await deserializeAws_json1_1PipelineNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1StopPipelineExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopPipelineExecutionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StopPipelineExecutionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopPipelineExecutionOutput(data, context);
  const response: StopPipelineExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StopPipelineExecutionOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopPipelineExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopPipelineExecutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DuplicatedStopRequestException":
    case "com.amazonaws.codepipeline#DuplicatedStopRequestException":
      response = {
        ...(await deserializeAws_json1_1DuplicatedStopRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PipelineExecutionNotStoppableException":
    case "com.amazonaws.codepipeline#PipelineExecutionNotStoppableException":
      response = {
        ...(await deserializeAws_json1_1PipelineExecutionNotStoppableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PipelineNotFoundException":
    case "com.amazonaws.codepipeline#PipelineNotFoundException":
      response = {
        ...(await deserializeAws_json1_1PipelineNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TagResourceOutput(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagResourceOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.codepipeline#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.codepipeline#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTagsException":
    case "com.amazonaws.codepipeline#InvalidTagsException":
      response = {
        ...(await deserializeAws_json1_1InvalidTagsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.codepipeline#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyTagsException":
    case "com.amazonaws.codepipeline#TooManyTagsException":
      response = {
        ...(await deserializeAws_json1_1TooManyTagsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UntagResourceOutput(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UntagResourceOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.codepipeline#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.codepipeline#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTagsException":
    case "com.amazonaws.codepipeline#InvalidTagsException":
      response = {
        ...(await deserializeAws_json1_1InvalidTagsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.codepipeline#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdatePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePipelineCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdatePipelineCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdatePipelineOutput(data, context);
  const response: UpdatePipelineCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdatePipelineOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdatePipelineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePipelineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidActionDeclarationException":
    case "com.amazonaws.codepipeline#InvalidActionDeclarationException":
      response = {
        ...(await deserializeAws_json1_1InvalidActionDeclarationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidBlockerDeclarationException":
    case "com.amazonaws.codepipeline#InvalidBlockerDeclarationException":
      response = {
        ...(await deserializeAws_json1_1InvalidBlockerDeclarationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidStageDeclarationException":
    case "com.amazonaws.codepipeline#InvalidStageDeclarationException":
      response = {
        ...(await deserializeAws_json1_1InvalidStageDeclarationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidStructureException":
    case "com.amazonaws.codepipeline#InvalidStructureException":
      response = {
        ...(await deserializeAws_json1_1InvalidStructureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.codepipeline#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codepipeline#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_json1_1ActionNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ActionNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ActionNotFoundException(
    body,
    context
  );
  const contents: ActionNotFoundException = {
    name: "ActionNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ActionTypeNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ActionTypeNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ActionTypeNotFoundException(
    body,
    context
  );
  const contents: ActionTypeNotFoundException = {
    name: "ActionTypeNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ApprovalAlreadyCompletedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ApprovalAlreadyCompletedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ApprovalAlreadyCompletedException(
    body,
    context
  );
  const contents: ApprovalAlreadyCompletedException = {
    name: "ApprovalAlreadyCompletedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ConcurrentModificationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ConcurrentModificationException(
    body,
    context
  );
  const contents: ConcurrentModificationException = {
    name: "ConcurrentModificationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1DuplicatedStopRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicatedStopRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DuplicatedStopRequestException(
    body,
    context
  );
  const contents: DuplicatedStopRequestException = {
    name: "DuplicatedStopRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidActionDeclarationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidActionDeclarationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidActionDeclarationException(
    body,
    context
  );
  const contents: InvalidActionDeclarationException = {
    name: "InvalidActionDeclarationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidApprovalTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidApprovalTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidApprovalTokenException(
    body,
    context
  );
  const contents: InvalidApprovalTokenException = {
    name: "InvalidApprovalTokenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidArnExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidArnException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidArnException(
    body,
    context
  );
  const contents: InvalidArnException = {
    name: "InvalidArnException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidBlockerDeclarationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidBlockerDeclarationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidBlockerDeclarationException(
    body,
    context
  );
  const contents: InvalidBlockerDeclarationException = {
    name: "InvalidBlockerDeclarationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidClientTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidClientTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidClientTokenException(
    body,
    context
  );
  const contents: InvalidClientTokenException = {
    name: "InvalidClientTokenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidJobExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidJobException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidJobException(
    body,
    context
  );
  const contents: InvalidJobException = {
    name: "InvalidJobException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidJobStateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidJobStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidJobStateException(
    body,
    context
  );
  const contents: InvalidJobStateException = {
    name: "InvalidJobStateException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidNextTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNextTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidNextTokenException(
    body,
    context
  );
  const contents: InvalidNextTokenException = {
    name: "InvalidNextTokenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidNonceExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNonceException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidNonceException(
    body,
    context
  );
  const contents: InvalidNonceException = {
    name: "InvalidNonceException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidStageDeclarationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidStageDeclarationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidStageDeclarationException(
    body,
    context
  );
  const contents: InvalidStageDeclarationException = {
    name: "InvalidStageDeclarationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidStructureExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidStructureException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidStructureException(
    body,
    context
  );
  const contents: InvalidStructureException = {
    name: "InvalidStructureException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidTagsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTagsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidTagsException(
    body,
    context
  );
  const contents: InvalidTagsException = {
    name: "InvalidTagsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidWebhookAuthenticationParametersExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidWebhookAuthenticationParametersException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidWebhookAuthenticationParametersException(
    body,
    context
  );
  const contents: InvalidWebhookAuthenticationParametersException = {
    name: "InvalidWebhookAuthenticationParametersException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidWebhookFilterPatternExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidWebhookFilterPatternException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidWebhookFilterPatternException(
    body,
    context
  );
  const contents: InvalidWebhookFilterPatternException = {
    name: "InvalidWebhookFilterPatternException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1JobNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<JobNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1JobNotFoundException(
    body,
    context
  );
  const contents: JobNotFoundException = {
    name: "JobNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LimitExceededException(
    body,
    context
  );
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1NotLatestPipelineExecutionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotLatestPipelineExecutionException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NotLatestPipelineExecutionException(
    body,
    context
  );
  const contents: NotLatestPipelineExecutionException = {
    name: "NotLatestPipelineExecutionException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1OutputVariablesSizeExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OutputVariablesSizeExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OutputVariablesSizeExceededException(
    body,
    context
  );
  const contents: OutputVariablesSizeExceededException = {
    name: "OutputVariablesSizeExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1PipelineExecutionNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PipelineExecutionNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1PipelineExecutionNotFoundException(
    body,
    context
  );
  const contents: PipelineExecutionNotFoundException = {
    name: "PipelineExecutionNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1PipelineExecutionNotStoppableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PipelineExecutionNotStoppableException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1PipelineExecutionNotStoppableException(
    body,
    context
  );
  const contents: PipelineExecutionNotStoppableException = {
    name: "PipelineExecutionNotStoppableException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1PipelineNameInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PipelineNameInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1PipelineNameInUseException(
    body,
    context
  );
  const contents: PipelineNameInUseException = {
    name: "PipelineNameInUseException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1PipelineNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PipelineNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1PipelineNotFoundException(
    body,
    context
  );
  const contents: PipelineNotFoundException = {
    name: "PipelineNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1PipelineVersionNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PipelineVersionNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1PipelineVersionNotFoundException(
    body,
    context
  );
  const contents: PipelineVersionNotFoundException = {
    name: "PipelineVersionNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(
    body,
    context
  );
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1StageNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<StageNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1StageNotFoundException(
    body,
    context
  );
  const contents: StageNotFoundException = {
    name: "StageNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1StageNotRetryableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<StageNotRetryableException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1StageNotRetryableException(
    body,
    context
  );
  const contents: StageNotRetryableException = {
    name: "StageNotRetryableException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1TooManyTagsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TooManyTagsException(
    body,
    context
  );
  const contents: TooManyTagsException = {
    name: "TooManyTagsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ValidationException(
    body,
    context
  );
  const contents: ValidationException = {
    name: "ValidationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1WebhookNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WebhookNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1WebhookNotFoundException(
    body,
    context
  );
  const contents: WebhookNotFoundException = {
    name: "WebhookNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1AcknowledgeJobInput = (
  input: AcknowledgeJobInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.jobId !== undefined && { jobId: input.jobId }),
    ...(input.nonce !== undefined && { nonce: input.nonce })
  };
};

const serializeAws_json1_1AcknowledgeThirdPartyJobInput = (
  input: AcknowledgeThirdPartyJobInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.clientToken !== undefined && { clientToken: input.clientToken }),
    ...(input.jobId !== undefined && { jobId: input.jobId }),
    ...(input.nonce !== undefined && { nonce: input.nonce })
  };
};

const serializeAws_json1_1ActionConfigurationMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const serializeAws_json1_1ActionConfigurationProperty = (
  input: ActionConfigurationProperty,
  context: __SerdeContext
): any => {
  return {
    ...(input.description !== undefined && { description: input.description }),
    ...(input.key !== undefined && { key: input.key }),
    ...(input.name !== undefined && { name: input.name }),
    ...(input.queryable !== undefined && { queryable: input.queryable }),
    ...(input.required !== undefined && { required: input.required }),
    ...(input.secret !== undefined && { secret: input.secret }),
    ...(input.type !== undefined && { type: input.type })
  };
};

const serializeAws_json1_1ActionConfigurationPropertyList = (
  input: ActionConfigurationProperty[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1ActionConfigurationProperty(entry, context)
  );
};

const serializeAws_json1_1ActionDeclaration = (
  input: ActionDeclaration,
  context: __SerdeContext
): any => {
  return {
    ...(input.actionTypeId !== undefined && {
      actionTypeId: serializeAws_json1_1ActionTypeId(
        input.actionTypeId,
        context
      )
    }),
    ...(input.configuration !== undefined && {
      configuration: serializeAws_json1_1ActionConfigurationMap(
        input.configuration,
        context
      )
    }),
    ...(input.inputArtifacts !== undefined && {
      inputArtifacts: serializeAws_json1_1InputArtifactList(
        input.inputArtifacts,
        context
      )
    }),
    ...(input.name !== undefined && { name: input.name }),
    ...(input.namespace !== undefined && { namespace: input.namespace }),
    ...(input.outputArtifacts !== undefined && {
      outputArtifacts: serializeAws_json1_1OutputArtifactList(
        input.outputArtifacts,
        context
      )
    }),
    ...(input.region !== undefined && { region: input.region }),
    ...(input.roleArn !== undefined && { roleArn: input.roleArn }),
    ...(input.runOrder !== undefined && { runOrder: input.runOrder })
  };
};

const serializeAws_json1_1ActionExecutionFilter = (
  input: ActionExecutionFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.pipelineExecutionId !== undefined && {
      pipelineExecutionId: input.pipelineExecutionId
    })
  };
};

const serializeAws_json1_1ActionRevision = (
  input: ActionRevision,
  context: __SerdeContext
): any => {
  return {
    ...(input.created !== undefined && {
      created: Math.round(input.created.getTime() / 1000)
    }),
    ...(input.revisionChangeId !== undefined && {
      revisionChangeId: input.revisionChangeId
    }),
    ...(input.revisionId !== undefined && { revisionId: input.revisionId })
  };
};

const serializeAws_json1_1ActionTypeId = (
  input: ActionTypeId,
  context: __SerdeContext
): any => {
  return {
    ...(input.category !== undefined && { category: input.category }),
    ...(input.owner !== undefined && { owner: input.owner }),
    ...(input.provider !== undefined && { provider: input.provider }),
    ...(input.version !== undefined && { version: input.version })
  };
};

const serializeAws_json1_1ActionTypeSettings = (
  input: ActionTypeSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.entityUrlTemplate !== undefined && {
      entityUrlTemplate: input.entityUrlTemplate
    }),
    ...(input.executionUrlTemplate !== undefined && {
      executionUrlTemplate: input.executionUrlTemplate
    }),
    ...(input.revisionUrlTemplate !== undefined && {
      revisionUrlTemplate: input.revisionUrlTemplate
    }),
    ...(input.thirdPartyConfigurationUrl !== undefined && {
      thirdPartyConfigurationUrl: input.thirdPartyConfigurationUrl
    })
  };
};

const serializeAws_json1_1ApprovalResult = (
  input: ApprovalResult,
  context: __SerdeContext
): any => {
  return {
    ...(input.status !== undefined && { status: input.status }),
    ...(input.summary !== undefined && { summary: input.summary })
  };
};

const serializeAws_json1_1ArtifactDetails = (
  input: ArtifactDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.maximumCount !== undefined && {
      maximumCount: input.maximumCount
    }),
    ...(input.minimumCount !== undefined && {
      minimumCount: input.minimumCount
    })
  };
};

const serializeAws_json1_1ArtifactStore = (
  input: ArtifactStore,
  context: __SerdeContext
): any => {
  return {
    ...(input.encryptionKey !== undefined && {
      encryptionKey: serializeAws_json1_1EncryptionKey(
        input.encryptionKey,
        context
      )
    }),
    ...(input.location !== undefined && { location: input.location }),
    ...(input.type !== undefined && { type: input.type })
  };
};

const serializeAws_json1_1ArtifactStoreMap = (
  input: { [key: string]: ArtifactStore },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: ArtifactStore }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: serializeAws_json1_1ArtifactStore(value, context)
    }),
    {}
  );
};

const serializeAws_json1_1BlockerDeclaration = (
  input: BlockerDeclaration,
  context: __SerdeContext
): any => {
  return {
    ...(input.name !== undefined && { name: input.name }),
    ...(input.type !== undefined && { type: input.type })
  };
};

const serializeAws_json1_1CreateCustomActionTypeInput = (
  input: CreateCustomActionTypeInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.category !== undefined && { category: input.category }),
    ...(input.configurationProperties !== undefined && {
      configurationProperties: serializeAws_json1_1ActionConfigurationPropertyList(
        input.configurationProperties,
        context
      )
    }),
    ...(input.inputArtifactDetails !== undefined && {
      inputArtifactDetails: serializeAws_json1_1ArtifactDetails(
        input.inputArtifactDetails,
        context
      )
    }),
    ...(input.outputArtifactDetails !== undefined && {
      outputArtifactDetails: serializeAws_json1_1ArtifactDetails(
        input.outputArtifactDetails,
        context
      )
    }),
    ...(input.provider !== undefined && { provider: input.provider }),
    ...(input.settings !== undefined && {
      settings: serializeAws_json1_1ActionTypeSettings(input.settings, context)
    }),
    ...(input.tags !== undefined && {
      tags: serializeAws_json1_1TagList(input.tags, context)
    }),
    ...(input.version !== undefined && { version: input.version })
  };
};

const serializeAws_json1_1CreatePipelineInput = (
  input: CreatePipelineInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.pipeline !== undefined && {
      pipeline: serializeAws_json1_1PipelineDeclaration(input.pipeline, context)
    }),
    ...(input.tags !== undefined && {
      tags: serializeAws_json1_1TagList(input.tags, context)
    })
  };
};

const serializeAws_json1_1CurrentRevision = (
  input: CurrentRevision,
  context: __SerdeContext
): any => {
  return {
    ...(input.changeIdentifier !== undefined && {
      changeIdentifier: input.changeIdentifier
    }),
    ...(input.created !== undefined && {
      created: Math.round(input.created.getTime() / 1000)
    }),
    ...(input.revision !== undefined && { revision: input.revision }),
    ...(input.revisionSummary !== undefined && {
      revisionSummary: input.revisionSummary
    })
  };
};

const serializeAws_json1_1DeleteCustomActionTypeInput = (
  input: DeleteCustomActionTypeInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.category !== undefined && { category: input.category }),
    ...(input.provider !== undefined && { provider: input.provider }),
    ...(input.version !== undefined && { version: input.version })
  };
};

const serializeAws_json1_1DeletePipelineInput = (
  input: DeletePipelineInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.name !== undefined && { name: input.name })
  };
};

const serializeAws_json1_1DeleteWebhookInput = (
  input: DeleteWebhookInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.name !== undefined && { name: input.name })
  };
};

const serializeAws_json1_1DeregisterWebhookWithThirdPartyInput = (
  input: DeregisterWebhookWithThirdPartyInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.webhookName !== undefined && { webhookName: input.webhookName })
  };
};

const serializeAws_json1_1DisableStageTransitionInput = (
  input: DisableStageTransitionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.pipelineName !== undefined && {
      pipelineName: input.pipelineName
    }),
    ...(input.reason !== undefined && { reason: input.reason }),
    ...(input.stageName !== undefined && { stageName: input.stageName }),
    ...(input.transitionType !== undefined && {
      transitionType: input.transitionType
    })
  };
};

const serializeAws_json1_1EnableStageTransitionInput = (
  input: EnableStageTransitionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.pipelineName !== undefined && {
      pipelineName: input.pipelineName
    }),
    ...(input.stageName !== undefined && { stageName: input.stageName }),
    ...(input.transitionType !== undefined && {
      transitionType: input.transitionType
    })
  };
};

const serializeAws_json1_1EncryptionKey = (
  input: EncryptionKey,
  context: __SerdeContext
): any => {
  return {
    ...(input.id !== undefined && { id: input.id }),
    ...(input.type !== undefined && { type: input.type })
  };
};

const serializeAws_json1_1ExecutionDetails = (
  input: ExecutionDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.externalExecutionId !== undefined && {
      externalExecutionId: input.externalExecutionId
    }),
    ...(input.percentComplete !== undefined && {
      percentComplete: input.percentComplete
    }),
    ...(input.summary !== undefined && { summary: input.summary })
  };
};

const serializeAws_json1_1FailureDetails = (
  input: FailureDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.externalExecutionId !== undefined && {
      externalExecutionId: input.externalExecutionId
    }),
    ...(input.message !== undefined && { message: input.message }),
    ...(input.type !== undefined && { type: input.type })
  };
};

const serializeAws_json1_1GetJobDetailsInput = (
  input: GetJobDetailsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.jobId !== undefined && { jobId: input.jobId })
  };
};

const serializeAws_json1_1GetPipelineExecutionInput = (
  input: GetPipelineExecutionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.pipelineExecutionId !== undefined && {
      pipelineExecutionId: input.pipelineExecutionId
    }),
    ...(input.pipelineName !== undefined && {
      pipelineName: input.pipelineName
    })
  };
};

const serializeAws_json1_1GetPipelineInput = (
  input: GetPipelineInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.name !== undefined && { name: input.name }),
    ...(input.version !== undefined && { version: input.version })
  };
};

const serializeAws_json1_1GetPipelineStateInput = (
  input: GetPipelineStateInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.name !== undefined && { name: input.name })
  };
};

const serializeAws_json1_1GetThirdPartyJobDetailsInput = (
  input: GetThirdPartyJobDetailsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.clientToken !== undefined && { clientToken: input.clientToken }),
    ...(input.jobId !== undefined && { jobId: input.jobId })
  };
};

const serializeAws_json1_1InputArtifact = (
  input: InputArtifact,
  context: __SerdeContext
): any => {
  return {
    ...(input.name !== undefined && { name: input.name })
  };
};

const serializeAws_json1_1InputArtifactList = (
  input: InputArtifact[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1InputArtifact(entry, context));
};

const serializeAws_json1_1ListActionExecutionsInput = (
  input: ListActionExecutionsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.filter !== undefined && {
      filter: serializeAws_json1_1ActionExecutionFilter(input.filter, context)
    }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.pipelineName !== undefined && {
      pipelineName: input.pipelineName
    })
  };
};

const serializeAws_json1_1ListActionTypesInput = (
  input: ListActionTypesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.actionOwnerFilter !== undefined && {
      actionOwnerFilter: input.actionOwnerFilter
    }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken })
  };
};

const serializeAws_json1_1ListPipelineExecutionsInput = (
  input: ListPipelineExecutionsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.pipelineName !== undefined && {
      pipelineName: input.pipelineName
    })
  };
};

const serializeAws_json1_1ListPipelinesInput = (
  input: ListPipelinesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken })
  };
};

const serializeAws_json1_1ListTagsForResourceInput = (
  input: ListTagsForResourceInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.resourceArn !== undefined && { resourceArn: input.resourceArn })
  };
};

const serializeAws_json1_1ListWebhooksInput = (
  input: ListWebhooksInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  };
};

const serializeAws_json1_1OutputArtifact = (
  input: OutputArtifact,
  context: __SerdeContext
): any => {
  return {
    ...(input.name !== undefined && { name: input.name })
  };
};

const serializeAws_json1_1OutputArtifactList = (
  input: OutputArtifact[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1OutputArtifact(entry, context));
};

const serializeAws_json1_1OutputVariablesMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const serializeAws_json1_1PipelineDeclaration = (
  input: PipelineDeclaration,
  context: __SerdeContext
): any => {
  return {
    ...(input.artifactStore !== undefined && {
      artifactStore: serializeAws_json1_1ArtifactStore(
        input.artifactStore,
        context
      )
    }),
    ...(input.artifactStores !== undefined && {
      artifactStores: serializeAws_json1_1ArtifactStoreMap(
        input.artifactStores,
        context
      )
    }),
    ...(input.name !== undefined && { name: input.name }),
    ...(input.roleArn !== undefined && { roleArn: input.roleArn }),
    ...(input.stages !== undefined && {
      stages: serializeAws_json1_1PipelineStageDeclarationList(
        input.stages,
        context
      )
    }),
    ...(input.version !== undefined && { version: input.version })
  };
};

const serializeAws_json1_1PipelineStageDeclarationList = (
  input: StageDeclaration[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1StageDeclaration(entry, context)
  );
};

const serializeAws_json1_1PollForJobsInput = (
  input: PollForJobsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.actionTypeId !== undefined && {
      actionTypeId: serializeAws_json1_1ActionTypeId(
        input.actionTypeId,
        context
      )
    }),
    ...(input.maxBatchSize !== undefined && {
      maxBatchSize: input.maxBatchSize
    }),
    ...(input.queryParam !== undefined && {
      queryParam: serializeAws_json1_1QueryParamMap(input.queryParam, context)
    })
  };
};

const serializeAws_json1_1PollForThirdPartyJobsInput = (
  input: PollForThirdPartyJobsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.actionTypeId !== undefined && {
      actionTypeId: serializeAws_json1_1ActionTypeId(
        input.actionTypeId,
        context
      )
    }),
    ...(input.maxBatchSize !== undefined && {
      maxBatchSize: input.maxBatchSize
    })
  };
};

const serializeAws_json1_1PutActionRevisionInput = (
  input: PutActionRevisionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.actionName !== undefined && { actionName: input.actionName }),
    ...(input.actionRevision !== undefined && {
      actionRevision: serializeAws_json1_1ActionRevision(
        input.actionRevision,
        context
      )
    }),
    ...(input.pipelineName !== undefined && {
      pipelineName: input.pipelineName
    }),
    ...(input.stageName !== undefined && { stageName: input.stageName })
  };
};

const serializeAws_json1_1PutApprovalResultInput = (
  input: PutApprovalResultInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.actionName !== undefined && { actionName: input.actionName }),
    ...(input.pipelineName !== undefined && {
      pipelineName: input.pipelineName
    }),
    ...(input.result !== undefined && {
      result: serializeAws_json1_1ApprovalResult(input.result, context)
    }),
    ...(input.stageName !== undefined && { stageName: input.stageName }),
    ...(input.token !== undefined && { token: input.token })
  };
};

const serializeAws_json1_1PutJobFailureResultInput = (
  input: PutJobFailureResultInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.failureDetails !== undefined && {
      failureDetails: serializeAws_json1_1FailureDetails(
        input.failureDetails,
        context
      )
    }),
    ...(input.jobId !== undefined && { jobId: input.jobId })
  };
};

const serializeAws_json1_1PutJobSuccessResultInput = (
  input: PutJobSuccessResultInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.continuationToken !== undefined && {
      continuationToken: input.continuationToken
    }),
    ...(input.currentRevision !== undefined && {
      currentRevision: serializeAws_json1_1CurrentRevision(
        input.currentRevision,
        context
      )
    }),
    ...(input.executionDetails !== undefined && {
      executionDetails: serializeAws_json1_1ExecutionDetails(
        input.executionDetails,
        context
      )
    }),
    ...(input.jobId !== undefined && { jobId: input.jobId }),
    ...(input.outputVariables !== undefined && {
      outputVariables: serializeAws_json1_1OutputVariablesMap(
        input.outputVariables,
        context
      )
    })
  };
};

const serializeAws_json1_1PutThirdPartyJobFailureResultInput = (
  input: PutThirdPartyJobFailureResultInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.clientToken !== undefined && { clientToken: input.clientToken }),
    ...(input.failureDetails !== undefined && {
      failureDetails: serializeAws_json1_1FailureDetails(
        input.failureDetails,
        context
      )
    }),
    ...(input.jobId !== undefined && { jobId: input.jobId })
  };
};

const serializeAws_json1_1PutThirdPartyJobSuccessResultInput = (
  input: PutThirdPartyJobSuccessResultInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.clientToken !== undefined && { clientToken: input.clientToken }),
    ...(input.continuationToken !== undefined && {
      continuationToken: input.continuationToken
    }),
    ...(input.currentRevision !== undefined && {
      currentRevision: serializeAws_json1_1CurrentRevision(
        input.currentRevision,
        context
      )
    }),
    ...(input.executionDetails !== undefined && {
      executionDetails: serializeAws_json1_1ExecutionDetails(
        input.executionDetails,
        context
      )
    }),
    ...(input.jobId !== undefined && { jobId: input.jobId })
  };
};

const serializeAws_json1_1PutWebhookInput = (
  input: PutWebhookInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.tags !== undefined && {
      tags: serializeAws_json1_1TagList(input.tags, context)
    }),
    ...(input.webhook !== undefined && {
      webhook: serializeAws_json1_1WebhookDefinition(input.webhook, context)
    })
  };
};

const serializeAws_json1_1QueryParamMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const serializeAws_json1_1RegisterWebhookWithThirdPartyInput = (
  input: RegisterWebhookWithThirdPartyInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.webhookName !== undefined && { webhookName: input.webhookName })
  };
};

const serializeAws_json1_1RetryStageExecutionInput = (
  input: RetryStageExecutionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.pipelineExecutionId !== undefined && {
      pipelineExecutionId: input.pipelineExecutionId
    }),
    ...(input.pipelineName !== undefined && {
      pipelineName: input.pipelineName
    }),
    ...(input.retryMode !== undefined && { retryMode: input.retryMode }),
    ...(input.stageName !== undefined && { stageName: input.stageName })
  };
};

const serializeAws_json1_1StageActionDeclarationList = (
  input: ActionDeclaration[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1ActionDeclaration(entry, context)
  );
};

const serializeAws_json1_1StageBlockerDeclarationList = (
  input: BlockerDeclaration[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1BlockerDeclaration(entry, context)
  );
};

const serializeAws_json1_1StageDeclaration = (
  input: StageDeclaration,
  context: __SerdeContext
): any => {
  return {
    ...(input.actions !== undefined && {
      actions: serializeAws_json1_1StageActionDeclarationList(
        input.actions,
        context
      )
    }),
    ...(input.blockers !== undefined && {
      blockers: serializeAws_json1_1StageBlockerDeclarationList(
        input.blockers,
        context
      )
    }),
    ...(input.name !== undefined && { name: input.name })
  };
};

const serializeAws_json1_1StartPipelineExecutionInput = (
  input: StartPipelineExecutionInput,
  context: __SerdeContext
): any => {
  return {
    clientRequestToken: input.clientRequestToken ?? generateIdempotencyToken(),
    ...(input.name !== undefined && { name: input.name })
  };
};

const serializeAws_json1_1StopPipelineExecutionInput = (
  input: StopPipelineExecutionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.abandon !== undefined && { abandon: input.abandon }),
    ...(input.pipelineExecutionId !== undefined && {
      pipelineExecutionId: input.pipelineExecutionId
    }),
    ...(input.pipelineName !== undefined && {
      pipelineName: input.pipelineName
    }),
    ...(input.reason !== undefined && { reason: input.reason })
  };
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.key !== undefined && { key: input.key }),
    ...(input.value !== undefined && { value: input.value })
  };
};

const serializeAws_json1_1TagKeyList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1TagList = (
  input: Tag[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1Tag(entry, context));
};

const serializeAws_json1_1TagResourceInput = (
  input: TagResourceInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.resourceArn !== undefined && { resourceArn: input.resourceArn }),
    ...(input.tags !== undefined && {
      tags: serializeAws_json1_1TagList(input.tags, context)
    })
  };
};

const serializeAws_json1_1UntagResourceInput = (
  input: UntagResourceInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.resourceArn !== undefined && { resourceArn: input.resourceArn }),
    ...(input.tagKeys !== undefined && {
      tagKeys: serializeAws_json1_1TagKeyList(input.tagKeys, context)
    })
  };
};

const serializeAws_json1_1UpdatePipelineInput = (
  input: UpdatePipelineInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.pipeline !== undefined && {
      pipeline: serializeAws_json1_1PipelineDeclaration(input.pipeline, context)
    })
  };
};

const serializeAws_json1_1WebhookAuthConfiguration = (
  input: WebhookAuthConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.AllowedIPRange !== undefined && {
      AllowedIPRange: input.AllowedIPRange
    }),
    ...(input.SecretToken !== undefined && { SecretToken: input.SecretToken })
  };
};

const serializeAws_json1_1WebhookDefinition = (
  input: WebhookDefinition,
  context: __SerdeContext
): any => {
  return {
    ...(input.authentication !== undefined && {
      authentication: input.authentication
    }),
    ...(input.authenticationConfiguration !== undefined && {
      authenticationConfiguration: serializeAws_json1_1WebhookAuthConfiguration(
        input.authenticationConfiguration,
        context
      )
    }),
    ...(input.filters !== undefined && {
      filters: serializeAws_json1_1WebhookFilters(input.filters, context)
    }),
    ...(input.name !== undefined && { name: input.name }),
    ...(input.targetAction !== undefined && {
      targetAction: input.targetAction
    }),
    ...(input.targetPipeline !== undefined && {
      targetPipeline: input.targetPipeline
    })
  };
};

const serializeAws_json1_1WebhookFilterRule = (
  input: WebhookFilterRule,
  context: __SerdeContext
): any => {
  return {
    ...(input.jsonPath !== undefined && { jsonPath: input.jsonPath }),
    ...(input.matchEquals !== undefined && { matchEquals: input.matchEquals })
  };
};

const serializeAws_json1_1WebhookFilters = (
  input: WebhookFilterRule[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1WebhookFilterRule(entry, context)
  );
};

const deserializeAws_json1_1AcknowledgeJobOutput = (
  output: any,
  context: __SerdeContext
): AcknowledgeJobOutput => {
  return {
    __type: "AcknowledgeJobOutput",
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined
  } as any;
};

const deserializeAws_json1_1AcknowledgeThirdPartyJobOutput = (
  output: any,
  context: __SerdeContext
): AcknowledgeThirdPartyJobOutput => {
  return {
    __type: "AcknowledgeThirdPartyJobOutput",
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined
  } as any;
};

const deserializeAws_json1_1ActionConfiguration = (
  output: any,
  context: __SerdeContext
): ActionConfiguration => {
  return {
    __type: "ActionConfiguration",
    configuration:
      output.configuration !== undefined && output.configuration !== null
        ? deserializeAws_json1_1ActionConfigurationMap(
            output.configuration,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1ActionConfigurationMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const deserializeAws_json1_1ActionConfigurationProperty = (
  output: any,
  context: __SerdeContext
): ActionConfigurationProperty => {
  return {
    __type: "ActionConfigurationProperty",
    description:
      output.description !== undefined && output.description !== null
        ? output.description
        : undefined,
    key:
      output.key !== undefined && output.key !== null ? output.key : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    queryable:
      output.queryable !== undefined && output.queryable !== null
        ? output.queryable
        : undefined,
    required:
      output.required !== undefined && output.required !== null
        ? output.required
        : undefined,
    secret:
      output.secret !== undefined && output.secret !== null
        ? output.secret
        : undefined,
    type:
      output.type !== undefined && output.type !== null
        ? output.type
        : undefined
  } as any;
};

const deserializeAws_json1_1ActionConfigurationPropertyList = (
  output: any,
  context: __SerdeContext
): ActionConfigurationProperty[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ActionConfigurationProperty(entry, context)
  );
};

const deserializeAws_json1_1ActionContext = (
  output: any,
  context: __SerdeContext
): ActionContext => {
  return {
    __type: "ActionContext",
    actionExecutionId:
      output.actionExecutionId !== undefined &&
      output.actionExecutionId !== null
        ? output.actionExecutionId
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined
  } as any;
};

const deserializeAws_json1_1ActionDeclaration = (
  output: any,
  context: __SerdeContext
): ActionDeclaration => {
  return {
    __type: "ActionDeclaration",
    actionTypeId:
      output.actionTypeId !== undefined && output.actionTypeId !== null
        ? deserializeAws_json1_1ActionTypeId(output.actionTypeId, context)
        : undefined,
    configuration:
      output.configuration !== undefined && output.configuration !== null
        ? deserializeAws_json1_1ActionConfigurationMap(
            output.configuration,
            context
          )
        : undefined,
    inputArtifacts:
      output.inputArtifacts !== undefined && output.inputArtifacts !== null
        ? deserializeAws_json1_1InputArtifactList(
            output.inputArtifacts,
            context
          )
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    namespace:
      output.namespace !== undefined && output.namespace !== null
        ? output.namespace
        : undefined,
    outputArtifacts:
      output.outputArtifacts !== undefined && output.outputArtifacts !== null
        ? deserializeAws_json1_1OutputArtifactList(
            output.outputArtifacts,
            context
          )
        : undefined,
    region:
      output.region !== undefined && output.region !== null
        ? output.region
        : undefined,
    roleArn:
      output.roleArn !== undefined && output.roleArn !== null
        ? output.roleArn
        : undefined,
    runOrder:
      output.runOrder !== undefined && output.runOrder !== null
        ? output.runOrder
        : undefined
  } as any;
};

const deserializeAws_json1_1ActionExecution = (
  output: any,
  context: __SerdeContext
): ActionExecution => {
  return {
    __type: "ActionExecution",
    errorDetails:
      output.errorDetails !== undefined && output.errorDetails !== null
        ? deserializeAws_json1_1ErrorDetails(output.errorDetails, context)
        : undefined,
    externalExecutionId:
      output.externalExecutionId !== undefined &&
      output.externalExecutionId !== null
        ? output.externalExecutionId
        : undefined,
    externalExecutionUrl:
      output.externalExecutionUrl !== undefined &&
      output.externalExecutionUrl !== null
        ? output.externalExecutionUrl
        : undefined,
    lastStatusChange:
      output.lastStatusChange !== undefined && output.lastStatusChange !== null
        ? new Date(Math.round(output.lastStatusChange * 1000))
        : undefined,
    lastUpdatedBy:
      output.lastUpdatedBy !== undefined && output.lastUpdatedBy !== null
        ? output.lastUpdatedBy
        : undefined,
    percentComplete:
      output.percentComplete !== undefined && output.percentComplete !== null
        ? output.percentComplete
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined,
    summary:
      output.summary !== undefined && output.summary !== null
        ? output.summary
        : undefined,
    token:
      output.token !== undefined && output.token !== null
        ? output.token
        : undefined
  } as any;
};

const deserializeAws_json1_1ActionExecutionDetail = (
  output: any,
  context: __SerdeContext
): ActionExecutionDetail => {
  return {
    __type: "ActionExecutionDetail",
    actionExecutionId:
      output.actionExecutionId !== undefined &&
      output.actionExecutionId !== null
        ? output.actionExecutionId
        : undefined,
    actionName:
      output.actionName !== undefined && output.actionName !== null
        ? output.actionName
        : undefined,
    input:
      output.input !== undefined && output.input !== null
        ? deserializeAws_json1_1ActionExecutionInput(output.input, context)
        : undefined,
    lastUpdateTime:
      output.lastUpdateTime !== undefined && output.lastUpdateTime !== null
        ? new Date(Math.round(output.lastUpdateTime * 1000))
        : undefined,
    output:
      output.output !== undefined && output.output !== null
        ? deserializeAws_json1_1ActionExecutionOutput(output.output, context)
        : undefined,
    pipelineExecutionId:
      output.pipelineExecutionId !== undefined &&
      output.pipelineExecutionId !== null
        ? output.pipelineExecutionId
        : undefined,
    pipelineVersion:
      output.pipelineVersion !== undefined && output.pipelineVersion !== null
        ? output.pipelineVersion
        : undefined,
    stageName:
      output.stageName !== undefined && output.stageName !== null
        ? output.stageName
        : undefined,
    startTime:
      output.startTime !== undefined && output.startTime !== null
        ? new Date(Math.round(output.startTime * 1000))
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined
  } as any;
};

const deserializeAws_json1_1ActionExecutionDetailList = (
  output: any,
  context: __SerdeContext
): ActionExecutionDetail[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ActionExecutionDetail(entry, context)
  );
};

const deserializeAws_json1_1ActionExecutionInput = (
  output: any,
  context: __SerdeContext
): ActionExecutionInput => {
  return {
    __type: "ActionExecutionInput",
    actionTypeId:
      output.actionTypeId !== undefined && output.actionTypeId !== null
        ? deserializeAws_json1_1ActionTypeId(output.actionTypeId, context)
        : undefined,
    configuration:
      output.configuration !== undefined && output.configuration !== null
        ? deserializeAws_json1_1ActionConfigurationMap(
            output.configuration,
            context
          )
        : undefined,
    inputArtifacts:
      output.inputArtifacts !== undefined && output.inputArtifacts !== null
        ? deserializeAws_json1_1ArtifactDetailList(
            output.inputArtifacts,
            context
          )
        : undefined,
    namespace:
      output.namespace !== undefined && output.namespace !== null
        ? output.namespace
        : undefined,
    region:
      output.region !== undefined && output.region !== null
        ? output.region
        : undefined,
    resolvedConfiguration:
      output.resolvedConfiguration !== undefined &&
      output.resolvedConfiguration !== null
        ? deserializeAws_json1_1ResolvedActionConfigurationMap(
            output.resolvedConfiguration,
            context
          )
        : undefined,
    roleArn:
      output.roleArn !== undefined && output.roleArn !== null
        ? output.roleArn
        : undefined
  } as any;
};

const deserializeAws_json1_1ActionExecutionOutput = (
  output: any,
  context: __SerdeContext
): ActionExecutionOutput => {
  return {
    __type: "ActionExecutionOutput",
    executionResult:
      output.executionResult !== undefined && output.executionResult !== null
        ? deserializeAws_json1_1ActionExecutionResult(
            output.executionResult,
            context
          )
        : undefined,
    outputArtifacts:
      output.outputArtifacts !== undefined && output.outputArtifacts !== null
        ? deserializeAws_json1_1ArtifactDetailList(
            output.outputArtifacts,
            context
          )
        : undefined,
    outputVariables:
      output.outputVariables !== undefined && output.outputVariables !== null
        ? deserializeAws_json1_1OutputVariablesMap(
            output.outputVariables,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1ActionExecutionResult = (
  output: any,
  context: __SerdeContext
): ActionExecutionResult => {
  return {
    __type: "ActionExecutionResult",
    externalExecutionId:
      output.externalExecutionId !== undefined &&
      output.externalExecutionId !== null
        ? output.externalExecutionId
        : undefined,
    externalExecutionSummary:
      output.externalExecutionSummary !== undefined &&
      output.externalExecutionSummary !== null
        ? output.externalExecutionSummary
        : undefined,
    externalExecutionUrl:
      output.externalExecutionUrl !== undefined &&
      output.externalExecutionUrl !== null
        ? output.externalExecutionUrl
        : undefined
  } as any;
};

const deserializeAws_json1_1ActionNotFoundException = (
  output: any,
  context: __SerdeContext
): ActionNotFoundException => {
  return {
    __type: "ActionNotFoundException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1ActionRevision = (
  output: any,
  context: __SerdeContext
): ActionRevision => {
  return {
    __type: "ActionRevision",
    created:
      output.created !== undefined && output.created !== null
        ? new Date(Math.round(output.created * 1000))
        : undefined,
    revisionChangeId:
      output.revisionChangeId !== undefined && output.revisionChangeId !== null
        ? output.revisionChangeId
        : undefined,
    revisionId:
      output.revisionId !== undefined && output.revisionId !== null
        ? output.revisionId
        : undefined
  } as any;
};

const deserializeAws_json1_1ActionState = (
  output: any,
  context: __SerdeContext
): ActionState => {
  return {
    __type: "ActionState",
    actionName:
      output.actionName !== undefined && output.actionName !== null
        ? output.actionName
        : undefined,
    currentRevision:
      output.currentRevision !== undefined && output.currentRevision !== null
        ? deserializeAws_json1_1ActionRevision(output.currentRevision, context)
        : undefined,
    entityUrl:
      output.entityUrl !== undefined && output.entityUrl !== null
        ? output.entityUrl
        : undefined,
    latestExecution:
      output.latestExecution !== undefined && output.latestExecution !== null
        ? deserializeAws_json1_1ActionExecution(output.latestExecution, context)
        : undefined,
    revisionUrl:
      output.revisionUrl !== undefined && output.revisionUrl !== null
        ? output.revisionUrl
        : undefined
  } as any;
};

const deserializeAws_json1_1ActionStateList = (
  output: any,
  context: __SerdeContext
): ActionState[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ActionState(entry, context)
  );
};

const deserializeAws_json1_1ActionType = (
  output: any,
  context: __SerdeContext
): ActionType => {
  return {
    __type: "ActionType",
    actionConfigurationProperties:
      output.actionConfigurationProperties !== undefined &&
      output.actionConfigurationProperties !== null
        ? deserializeAws_json1_1ActionConfigurationPropertyList(
            output.actionConfigurationProperties,
            context
          )
        : undefined,
    id:
      output.id !== undefined && output.id !== null
        ? deserializeAws_json1_1ActionTypeId(output.id, context)
        : undefined,
    inputArtifactDetails:
      output.inputArtifactDetails !== undefined &&
      output.inputArtifactDetails !== null
        ? deserializeAws_json1_1ArtifactDetails(
            output.inputArtifactDetails,
            context
          )
        : undefined,
    outputArtifactDetails:
      output.outputArtifactDetails !== undefined &&
      output.outputArtifactDetails !== null
        ? deserializeAws_json1_1ArtifactDetails(
            output.outputArtifactDetails,
            context
          )
        : undefined,
    settings:
      output.settings !== undefined && output.settings !== null
        ? deserializeAws_json1_1ActionTypeSettings(output.settings, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1ActionTypeId = (
  output: any,
  context: __SerdeContext
): ActionTypeId => {
  return {
    __type: "ActionTypeId",
    category:
      output.category !== undefined && output.category !== null
        ? output.category
        : undefined,
    owner:
      output.owner !== undefined && output.owner !== null
        ? output.owner
        : undefined,
    provider:
      output.provider !== undefined && output.provider !== null
        ? output.provider
        : undefined,
    version:
      output.version !== undefined && output.version !== null
        ? output.version
        : undefined
  } as any;
};

const deserializeAws_json1_1ActionTypeList = (
  output: any,
  context: __SerdeContext
): ActionType[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ActionType(entry, context)
  );
};

const deserializeAws_json1_1ActionTypeNotFoundException = (
  output: any,
  context: __SerdeContext
): ActionTypeNotFoundException => {
  return {
    __type: "ActionTypeNotFoundException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1ActionTypeSettings = (
  output: any,
  context: __SerdeContext
): ActionTypeSettings => {
  return {
    __type: "ActionTypeSettings",
    entityUrlTemplate:
      output.entityUrlTemplate !== undefined &&
      output.entityUrlTemplate !== null
        ? output.entityUrlTemplate
        : undefined,
    executionUrlTemplate:
      output.executionUrlTemplate !== undefined &&
      output.executionUrlTemplate !== null
        ? output.executionUrlTemplate
        : undefined,
    revisionUrlTemplate:
      output.revisionUrlTemplate !== undefined &&
      output.revisionUrlTemplate !== null
        ? output.revisionUrlTemplate
        : undefined,
    thirdPartyConfigurationUrl:
      output.thirdPartyConfigurationUrl !== undefined &&
      output.thirdPartyConfigurationUrl !== null
        ? output.thirdPartyConfigurationUrl
        : undefined
  } as any;
};

const deserializeAws_json1_1ApprovalAlreadyCompletedException = (
  output: any,
  context: __SerdeContext
): ApprovalAlreadyCompletedException => {
  return {
    __type: "ApprovalAlreadyCompletedException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1Artifact = (
  output: any,
  context: __SerdeContext
): Artifact => {
  return {
    __type: "Artifact",
    location:
      output.location !== undefined && output.location !== null
        ? deserializeAws_json1_1ArtifactLocation(output.location, context)
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    revision:
      output.revision !== undefined && output.revision !== null
        ? output.revision
        : undefined
  } as any;
};

const deserializeAws_json1_1ArtifactDetail = (
  output: any,
  context: __SerdeContext
): ArtifactDetail => {
  return {
    __type: "ArtifactDetail",
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    s3location:
      output.s3location !== undefined && output.s3location !== null
        ? deserializeAws_json1_1S3Location(output.s3location, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1ArtifactDetailList = (
  output: any,
  context: __SerdeContext
): ArtifactDetail[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ArtifactDetail(entry, context)
  );
};

const deserializeAws_json1_1ArtifactDetails = (
  output: any,
  context: __SerdeContext
): ArtifactDetails => {
  return {
    __type: "ArtifactDetails",
    maximumCount:
      output.maximumCount !== undefined && output.maximumCount !== null
        ? output.maximumCount
        : undefined,
    minimumCount:
      output.minimumCount !== undefined && output.minimumCount !== null
        ? output.minimumCount
        : undefined
  } as any;
};

const deserializeAws_json1_1ArtifactList = (
  output: any,
  context: __SerdeContext
): Artifact[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Artifact(entry, context)
  );
};

const deserializeAws_json1_1ArtifactLocation = (
  output: any,
  context: __SerdeContext
): ArtifactLocation => {
  return {
    __type: "ArtifactLocation",
    s3Location:
      output.s3Location !== undefined && output.s3Location !== null
        ? deserializeAws_json1_1S3ArtifactLocation(output.s3Location, context)
        : undefined,
    type:
      output.type !== undefined && output.type !== null
        ? output.type
        : undefined
  } as any;
};

const deserializeAws_json1_1ArtifactRevision = (
  output: any,
  context: __SerdeContext
): ArtifactRevision => {
  return {
    __type: "ArtifactRevision",
    created:
      output.created !== undefined && output.created !== null
        ? new Date(Math.round(output.created * 1000))
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    revisionChangeIdentifier:
      output.revisionChangeIdentifier !== undefined &&
      output.revisionChangeIdentifier !== null
        ? output.revisionChangeIdentifier
        : undefined,
    revisionId:
      output.revisionId !== undefined && output.revisionId !== null
        ? output.revisionId
        : undefined,
    revisionSummary:
      output.revisionSummary !== undefined && output.revisionSummary !== null
        ? output.revisionSummary
        : undefined,
    revisionUrl:
      output.revisionUrl !== undefined && output.revisionUrl !== null
        ? output.revisionUrl
        : undefined
  } as any;
};

const deserializeAws_json1_1ArtifactRevisionList = (
  output: any,
  context: __SerdeContext
): ArtifactRevision[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ArtifactRevision(entry, context)
  );
};

const deserializeAws_json1_1ArtifactStore = (
  output: any,
  context: __SerdeContext
): ArtifactStore => {
  return {
    __type: "ArtifactStore",
    encryptionKey:
      output.encryptionKey !== undefined && output.encryptionKey !== null
        ? deserializeAws_json1_1EncryptionKey(output.encryptionKey, context)
        : undefined,
    location:
      output.location !== undefined && output.location !== null
        ? output.location
        : undefined,
    type:
      output.type !== undefined && output.type !== null
        ? output.type
        : undefined
  } as any;
};

const deserializeAws_json1_1ArtifactStoreMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: ArtifactStore } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: ArtifactStore }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: deserializeAws_json1_1ArtifactStore(value, context)
    }),
    {}
  );
};

const deserializeAws_json1_1AWSSessionCredentials = (
  output: any,
  context: __SerdeContext
): AWSSessionCredentials => {
  return {
    __type: "AWSSessionCredentials",
    accessKeyId:
      output.accessKeyId !== undefined && output.accessKeyId !== null
        ? output.accessKeyId
        : undefined,
    secretAccessKey:
      output.secretAccessKey !== undefined && output.secretAccessKey !== null
        ? output.secretAccessKey
        : undefined,
    sessionToken:
      output.sessionToken !== undefined && output.sessionToken !== null
        ? output.sessionToken
        : undefined
  } as any;
};

const deserializeAws_json1_1BlockerDeclaration = (
  output: any,
  context: __SerdeContext
): BlockerDeclaration => {
  return {
    __type: "BlockerDeclaration",
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    type:
      output.type !== undefined && output.type !== null
        ? output.type
        : undefined
  } as any;
};

const deserializeAws_json1_1ConcurrentModificationException = (
  output: any,
  context: __SerdeContext
): ConcurrentModificationException => {
  return {
    __type: "ConcurrentModificationException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateCustomActionTypeOutput = (
  output: any,
  context: __SerdeContext
): CreateCustomActionTypeOutput => {
  return {
    __type: "CreateCustomActionTypeOutput",
    actionType:
      output.actionType !== undefined && output.actionType !== null
        ? deserializeAws_json1_1ActionType(output.actionType, context)
        : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_json1_1TagList(output.tags, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1CreatePipelineOutput = (
  output: any,
  context: __SerdeContext
): CreatePipelineOutput => {
  return {
    __type: "CreatePipelineOutput",
    pipeline:
      output.pipeline !== undefined && output.pipeline !== null
        ? deserializeAws_json1_1PipelineDeclaration(output.pipeline, context)
        : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_json1_1TagList(output.tags, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1DeleteWebhookOutput = (
  output: any,
  context: __SerdeContext
): DeleteWebhookOutput => {
  return {
    __type: "DeleteWebhookOutput"
  } as any;
};

const deserializeAws_json1_1DeregisterWebhookWithThirdPartyOutput = (
  output: any,
  context: __SerdeContext
): DeregisterWebhookWithThirdPartyOutput => {
  return {
    __type: "DeregisterWebhookWithThirdPartyOutput"
  } as any;
};

const deserializeAws_json1_1DuplicatedStopRequestException = (
  output: any,
  context: __SerdeContext
): DuplicatedStopRequestException => {
  return {
    __type: "DuplicatedStopRequestException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1EncryptionKey = (
  output: any,
  context: __SerdeContext
): EncryptionKey => {
  return {
    __type: "EncryptionKey",
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    type:
      output.type !== undefined && output.type !== null
        ? output.type
        : undefined
  } as any;
};

const deserializeAws_json1_1ErrorDetails = (
  output: any,
  context: __SerdeContext
): ErrorDetails => {
  return {
    __type: "ErrorDetails",
    code:
      output.code !== undefined && output.code !== null
        ? output.code
        : undefined,
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1ExecutionTrigger = (
  output: any,
  context: __SerdeContext
): ExecutionTrigger => {
  return {
    __type: "ExecutionTrigger",
    triggerDetail:
      output.triggerDetail !== undefined && output.triggerDetail !== null
        ? output.triggerDetail
        : undefined,
    triggerType:
      output.triggerType !== undefined && output.triggerType !== null
        ? output.triggerType
        : undefined
  } as any;
};

const deserializeAws_json1_1GetJobDetailsOutput = (
  output: any,
  context: __SerdeContext
): GetJobDetailsOutput => {
  return {
    __type: "GetJobDetailsOutput",
    jobDetails:
      output.jobDetails !== undefined && output.jobDetails !== null
        ? deserializeAws_json1_1JobDetails(output.jobDetails, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1GetPipelineExecutionOutput = (
  output: any,
  context: __SerdeContext
): GetPipelineExecutionOutput => {
  return {
    __type: "GetPipelineExecutionOutput",
    pipelineExecution:
      output.pipelineExecution !== undefined &&
      output.pipelineExecution !== null
        ? deserializeAws_json1_1PipelineExecution(
            output.pipelineExecution,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1GetPipelineOutput = (
  output: any,
  context: __SerdeContext
): GetPipelineOutput => {
  return {
    __type: "GetPipelineOutput",
    metadata:
      output.metadata !== undefined && output.metadata !== null
        ? deserializeAws_json1_1PipelineMetadata(output.metadata, context)
        : undefined,
    pipeline:
      output.pipeline !== undefined && output.pipeline !== null
        ? deserializeAws_json1_1PipelineDeclaration(output.pipeline, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1GetPipelineStateOutput = (
  output: any,
  context: __SerdeContext
): GetPipelineStateOutput => {
  return {
    __type: "GetPipelineStateOutput",
    created:
      output.created !== undefined && output.created !== null
        ? new Date(Math.round(output.created * 1000))
        : undefined,
    pipelineName:
      output.pipelineName !== undefined && output.pipelineName !== null
        ? output.pipelineName
        : undefined,
    pipelineVersion:
      output.pipelineVersion !== undefined && output.pipelineVersion !== null
        ? output.pipelineVersion
        : undefined,
    stageStates:
      output.stageStates !== undefined && output.stageStates !== null
        ? deserializeAws_json1_1StageStateList(output.stageStates, context)
        : undefined,
    updated:
      output.updated !== undefined && output.updated !== null
        ? new Date(Math.round(output.updated * 1000))
        : undefined
  } as any;
};

const deserializeAws_json1_1GetThirdPartyJobDetailsOutput = (
  output: any,
  context: __SerdeContext
): GetThirdPartyJobDetailsOutput => {
  return {
    __type: "GetThirdPartyJobDetailsOutput",
    jobDetails:
      output.jobDetails !== undefined && output.jobDetails !== null
        ? deserializeAws_json1_1ThirdPartyJobDetails(output.jobDetails, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1InputArtifact = (
  output: any,
  context: __SerdeContext
): InputArtifact => {
  return {
    __type: "InputArtifact",
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined
  } as any;
};

const deserializeAws_json1_1InputArtifactList = (
  output: any,
  context: __SerdeContext
): InputArtifact[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1InputArtifact(entry, context)
  );
};

const deserializeAws_json1_1InvalidActionDeclarationException = (
  output: any,
  context: __SerdeContext
): InvalidActionDeclarationException => {
  return {
    __type: "InvalidActionDeclarationException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidApprovalTokenException = (
  output: any,
  context: __SerdeContext
): InvalidApprovalTokenException => {
  return {
    __type: "InvalidApprovalTokenException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidArnException = (
  output: any,
  context: __SerdeContext
): InvalidArnException => {
  return {
    __type: "InvalidArnException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidBlockerDeclarationException = (
  output: any,
  context: __SerdeContext
): InvalidBlockerDeclarationException => {
  return {
    __type: "InvalidBlockerDeclarationException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidClientTokenException = (
  output: any,
  context: __SerdeContext
): InvalidClientTokenException => {
  return {
    __type: "InvalidClientTokenException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidJobException = (
  output: any,
  context: __SerdeContext
): InvalidJobException => {
  return {
    __type: "InvalidJobException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidJobStateException = (
  output: any,
  context: __SerdeContext
): InvalidJobStateException => {
  return {
    __type: "InvalidJobStateException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidNextTokenException = (
  output: any,
  context: __SerdeContext
): InvalidNextTokenException => {
  return {
    __type: "InvalidNextTokenException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidNonceException = (
  output: any,
  context: __SerdeContext
): InvalidNonceException => {
  return {
    __type: "InvalidNonceException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidStageDeclarationException = (
  output: any,
  context: __SerdeContext
): InvalidStageDeclarationException => {
  return {
    __type: "InvalidStageDeclarationException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidStructureException = (
  output: any,
  context: __SerdeContext
): InvalidStructureException => {
  return {
    __type: "InvalidStructureException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidTagsException = (
  output: any,
  context: __SerdeContext
): InvalidTagsException => {
  return {
    __type: "InvalidTagsException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidWebhookAuthenticationParametersException = (
  output: any,
  context: __SerdeContext
): InvalidWebhookAuthenticationParametersException => {
  return {
    __type: "InvalidWebhookAuthenticationParametersException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidWebhookFilterPatternException = (
  output: any,
  context: __SerdeContext
): InvalidWebhookFilterPatternException => {
  return {
    __type: "InvalidWebhookFilterPatternException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1Job = (
  output: any,
  context: __SerdeContext
): Job => {
  return {
    __type: "Job",
    accountId:
      output.accountId !== undefined && output.accountId !== null
        ? output.accountId
        : undefined,
    data:
      output.data !== undefined && output.data !== null
        ? deserializeAws_json1_1JobData(output.data, context)
        : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    nonce:
      output.nonce !== undefined && output.nonce !== null
        ? output.nonce
        : undefined
  } as any;
};

const deserializeAws_json1_1JobData = (
  output: any,
  context: __SerdeContext
): JobData => {
  return {
    __type: "JobData",
    actionConfiguration:
      output.actionConfiguration !== undefined &&
      output.actionConfiguration !== null
        ? deserializeAws_json1_1ActionConfiguration(
            output.actionConfiguration,
            context
          )
        : undefined,
    actionTypeId:
      output.actionTypeId !== undefined && output.actionTypeId !== null
        ? deserializeAws_json1_1ActionTypeId(output.actionTypeId, context)
        : undefined,
    artifactCredentials:
      output.artifactCredentials !== undefined &&
      output.artifactCredentials !== null
        ? deserializeAws_json1_1AWSSessionCredentials(
            output.artifactCredentials,
            context
          )
        : undefined,
    continuationToken:
      output.continuationToken !== undefined &&
      output.continuationToken !== null
        ? output.continuationToken
        : undefined,
    encryptionKey:
      output.encryptionKey !== undefined && output.encryptionKey !== null
        ? deserializeAws_json1_1EncryptionKey(output.encryptionKey, context)
        : undefined,
    inputArtifacts:
      output.inputArtifacts !== undefined && output.inputArtifacts !== null
        ? deserializeAws_json1_1ArtifactList(output.inputArtifacts, context)
        : undefined,
    outputArtifacts:
      output.outputArtifacts !== undefined && output.outputArtifacts !== null
        ? deserializeAws_json1_1ArtifactList(output.outputArtifacts, context)
        : undefined,
    pipelineContext:
      output.pipelineContext !== undefined && output.pipelineContext !== null
        ? deserializeAws_json1_1PipelineContext(output.pipelineContext, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1JobDetails = (
  output: any,
  context: __SerdeContext
): JobDetails => {
  return {
    __type: "JobDetails",
    accountId:
      output.accountId !== undefined && output.accountId !== null
        ? output.accountId
        : undefined,
    data:
      output.data !== undefined && output.data !== null
        ? deserializeAws_json1_1JobData(output.data, context)
        : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined
  } as any;
};

const deserializeAws_json1_1JobList = (
  output: any,
  context: __SerdeContext
): Job[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Job(entry, context)
  );
};

const deserializeAws_json1_1JobNotFoundException = (
  output: any,
  context: __SerdeContext
): JobNotFoundException => {
  return {
    __type: "JobNotFoundException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1LimitExceededException = (
  output: any,
  context: __SerdeContext
): LimitExceededException => {
  return {
    __type: "LimitExceededException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1ListActionExecutionsOutput = (
  output: any,
  context: __SerdeContext
): ListActionExecutionsOutput => {
  return {
    __type: "ListActionExecutionsOutput",
    actionExecutionDetails:
      output.actionExecutionDetails !== undefined &&
      output.actionExecutionDetails !== null
        ? deserializeAws_json1_1ActionExecutionDetailList(
            output.actionExecutionDetails,
            context
          )
        : undefined,
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1ListActionTypesOutput = (
  output: any,
  context: __SerdeContext
): ListActionTypesOutput => {
  return {
    __type: "ListActionTypesOutput",
    actionTypes:
      output.actionTypes !== undefined && output.actionTypes !== null
        ? deserializeAws_json1_1ActionTypeList(output.actionTypes, context)
        : undefined,
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1ListPipelineExecutionsOutput = (
  output: any,
  context: __SerdeContext
): ListPipelineExecutionsOutput => {
  return {
    __type: "ListPipelineExecutionsOutput",
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined,
    pipelineExecutionSummaries:
      output.pipelineExecutionSummaries !== undefined &&
      output.pipelineExecutionSummaries !== null
        ? deserializeAws_json1_1PipelineExecutionSummaryList(
            output.pipelineExecutionSummaries,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1ListPipelinesOutput = (
  output: any,
  context: __SerdeContext
): ListPipelinesOutput => {
  return {
    __type: "ListPipelinesOutput",
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined,
    pipelines:
      output.pipelines !== undefined && output.pipelines !== null
        ? deserializeAws_json1_1PipelineList(output.pipelines, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1ListTagsForResourceOutput = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceOutput => {
  return {
    __type: "ListTagsForResourceOutput",
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_json1_1TagList(output.tags, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1ListWebhookItem = (
  output: any,
  context: __SerdeContext
): ListWebhookItem => {
  return {
    __type: "ListWebhookItem",
    arn:
      output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    definition:
      output.definition !== undefined && output.definition !== null
        ? deserializeAws_json1_1WebhookDefinition(output.definition, context)
        : undefined,
    errorCode:
      output.errorCode !== undefined && output.errorCode !== null
        ? output.errorCode
        : undefined,
    errorMessage:
      output.errorMessage !== undefined && output.errorMessage !== null
        ? output.errorMessage
        : undefined,
    lastTriggered:
      output.lastTriggered !== undefined && output.lastTriggered !== null
        ? new Date(Math.round(output.lastTriggered * 1000))
        : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_json1_1TagList(output.tags, context)
        : undefined,
    url:
      output.url !== undefined && output.url !== null ? output.url : undefined
  } as any;
};

const deserializeAws_json1_1ListWebhooksOutput = (
  output: any,
  context: __SerdeContext
): ListWebhooksOutput => {
  return {
    __type: "ListWebhooksOutput",
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined,
    webhooks:
      output.webhooks !== undefined && output.webhooks !== null
        ? deserializeAws_json1_1WebhookList(output.webhooks, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1NotLatestPipelineExecutionException = (
  output: any,
  context: __SerdeContext
): NotLatestPipelineExecutionException => {
  return {
    __type: "NotLatestPipelineExecutionException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1OutputArtifact = (
  output: any,
  context: __SerdeContext
): OutputArtifact => {
  return {
    __type: "OutputArtifact",
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined
  } as any;
};

const deserializeAws_json1_1OutputArtifactList = (
  output: any,
  context: __SerdeContext
): OutputArtifact[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1OutputArtifact(entry, context)
  );
};

const deserializeAws_json1_1OutputVariablesMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const deserializeAws_json1_1OutputVariablesSizeExceededException = (
  output: any,
  context: __SerdeContext
): OutputVariablesSizeExceededException => {
  return {
    __type: "OutputVariablesSizeExceededException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1PipelineContext = (
  output: any,
  context: __SerdeContext
): PipelineContext => {
  return {
    __type: "PipelineContext",
    action:
      output.action !== undefined && output.action !== null
        ? deserializeAws_json1_1ActionContext(output.action, context)
        : undefined,
    pipelineArn:
      output.pipelineArn !== undefined && output.pipelineArn !== null
        ? output.pipelineArn
        : undefined,
    pipelineExecutionId:
      output.pipelineExecutionId !== undefined &&
      output.pipelineExecutionId !== null
        ? output.pipelineExecutionId
        : undefined,
    pipelineName:
      output.pipelineName !== undefined && output.pipelineName !== null
        ? output.pipelineName
        : undefined,
    stage:
      output.stage !== undefined && output.stage !== null
        ? deserializeAws_json1_1StageContext(output.stage, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1PipelineDeclaration = (
  output: any,
  context: __SerdeContext
): PipelineDeclaration => {
  return {
    __type: "PipelineDeclaration",
    artifactStore:
      output.artifactStore !== undefined && output.artifactStore !== null
        ? deserializeAws_json1_1ArtifactStore(output.artifactStore, context)
        : undefined,
    artifactStores:
      output.artifactStores !== undefined && output.artifactStores !== null
        ? deserializeAws_json1_1ArtifactStoreMap(output.artifactStores, context)
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    roleArn:
      output.roleArn !== undefined && output.roleArn !== null
        ? output.roleArn
        : undefined,
    stages:
      output.stages !== undefined && output.stages !== null
        ? deserializeAws_json1_1PipelineStageDeclarationList(
            output.stages,
            context
          )
        : undefined,
    version:
      output.version !== undefined && output.version !== null
        ? output.version
        : undefined
  } as any;
};

const deserializeAws_json1_1PipelineExecution = (
  output: any,
  context: __SerdeContext
): PipelineExecution => {
  return {
    __type: "PipelineExecution",
    artifactRevisions:
      output.artifactRevisions !== undefined &&
      output.artifactRevisions !== null
        ? deserializeAws_json1_1ArtifactRevisionList(
            output.artifactRevisions,
            context
          )
        : undefined,
    pipelineExecutionId:
      output.pipelineExecutionId !== undefined &&
      output.pipelineExecutionId !== null
        ? output.pipelineExecutionId
        : undefined,
    pipelineName:
      output.pipelineName !== undefined && output.pipelineName !== null
        ? output.pipelineName
        : undefined,
    pipelineVersion:
      output.pipelineVersion !== undefined && output.pipelineVersion !== null
        ? output.pipelineVersion
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined
  } as any;
};

const deserializeAws_json1_1PipelineExecutionNotFoundException = (
  output: any,
  context: __SerdeContext
): PipelineExecutionNotFoundException => {
  return {
    __type: "PipelineExecutionNotFoundException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1PipelineExecutionNotStoppableException = (
  output: any,
  context: __SerdeContext
): PipelineExecutionNotStoppableException => {
  return {
    __type: "PipelineExecutionNotStoppableException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1PipelineExecutionSummary = (
  output: any,
  context: __SerdeContext
): PipelineExecutionSummary => {
  return {
    __type: "PipelineExecutionSummary",
    lastUpdateTime:
      output.lastUpdateTime !== undefined && output.lastUpdateTime !== null
        ? new Date(Math.round(output.lastUpdateTime * 1000))
        : undefined,
    pipelineExecutionId:
      output.pipelineExecutionId !== undefined &&
      output.pipelineExecutionId !== null
        ? output.pipelineExecutionId
        : undefined,
    sourceRevisions:
      output.sourceRevisions !== undefined && output.sourceRevisions !== null
        ? deserializeAws_json1_1SourceRevisionList(
            output.sourceRevisions,
            context
          )
        : undefined,
    startTime:
      output.startTime !== undefined && output.startTime !== null
        ? new Date(Math.round(output.startTime * 1000))
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined,
    stopTrigger:
      output.stopTrigger !== undefined && output.stopTrigger !== null
        ? deserializeAws_json1_1StopExecutionTrigger(
            output.stopTrigger,
            context
          )
        : undefined,
    trigger:
      output.trigger !== undefined && output.trigger !== null
        ? deserializeAws_json1_1ExecutionTrigger(output.trigger, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1PipelineExecutionSummaryList = (
  output: any,
  context: __SerdeContext
): PipelineExecutionSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1PipelineExecutionSummary(entry, context)
  );
};

const deserializeAws_json1_1PipelineList = (
  output: any,
  context: __SerdeContext
): PipelineSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1PipelineSummary(entry, context)
  );
};

const deserializeAws_json1_1PipelineMetadata = (
  output: any,
  context: __SerdeContext
): PipelineMetadata => {
  return {
    __type: "PipelineMetadata",
    created:
      output.created !== undefined && output.created !== null
        ? new Date(Math.round(output.created * 1000))
        : undefined,
    pipelineArn:
      output.pipelineArn !== undefined && output.pipelineArn !== null
        ? output.pipelineArn
        : undefined,
    updated:
      output.updated !== undefined && output.updated !== null
        ? new Date(Math.round(output.updated * 1000))
        : undefined
  } as any;
};

const deserializeAws_json1_1PipelineNameInUseException = (
  output: any,
  context: __SerdeContext
): PipelineNameInUseException => {
  return {
    __type: "PipelineNameInUseException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1PipelineNotFoundException = (
  output: any,
  context: __SerdeContext
): PipelineNotFoundException => {
  return {
    __type: "PipelineNotFoundException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1PipelineStageDeclarationList = (
  output: any,
  context: __SerdeContext
): StageDeclaration[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1StageDeclaration(entry, context)
  );
};

const deserializeAws_json1_1PipelineSummary = (
  output: any,
  context: __SerdeContext
): PipelineSummary => {
  return {
    __type: "PipelineSummary",
    created:
      output.created !== undefined && output.created !== null
        ? new Date(Math.round(output.created * 1000))
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    updated:
      output.updated !== undefined && output.updated !== null
        ? new Date(Math.round(output.updated * 1000))
        : undefined,
    version:
      output.version !== undefined && output.version !== null
        ? output.version
        : undefined
  } as any;
};

const deserializeAws_json1_1PipelineVersionNotFoundException = (
  output: any,
  context: __SerdeContext
): PipelineVersionNotFoundException => {
  return {
    __type: "PipelineVersionNotFoundException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1PollForJobsOutput = (
  output: any,
  context: __SerdeContext
): PollForJobsOutput => {
  return {
    __type: "PollForJobsOutput",
    jobs:
      output.jobs !== undefined && output.jobs !== null
        ? deserializeAws_json1_1JobList(output.jobs, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1PollForThirdPartyJobsOutput = (
  output: any,
  context: __SerdeContext
): PollForThirdPartyJobsOutput => {
  return {
    __type: "PollForThirdPartyJobsOutput",
    jobs:
      output.jobs !== undefined && output.jobs !== null
        ? deserializeAws_json1_1ThirdPartyJobList(output.jobs, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1PutActionRevisionOutput = (
  output: any,
  context: __SerdeContext
): PutActionRevisionOutput => {
  return {
    __type: "PutActionRevisionOutput",
    newRevision:
      output.newRevision !== undefined && output.newRevision !== null
        ? output.newRevision
        : undefined,
    pipelineExecutionId:
      output.pipelineExecutionId !== undefined &&
      output.pipelineExecutionId !== null
        ? output.pipelineExecutionId
        : undefined
  } as any;
};

const deserializeAws_json1_1PutApprovalResultOutput = (
  output: any,
  context: __SerdeContext
): PutApprovalResultOutput => {
  return {
    __type: "PutApprovalResultOutput",
    approvedAt:
      output.approvedAt !== undefined && output.approvedAt !== null
        ? new Date(Math.round(output.approvedAt * 1000))
        : undefined
  } as any;
};

const deserializeAws_json1_1PutWebhookOutput = (
  output: any,
  context: __SerdeContext
): PutWebhookOutput => {
  return {
    __type: "PutWebhookOutput",
    webhook:
      output.webhook !== undefined && output.webhook !== null
        ? deserializeAws_json1_1ListWebhookItem(output.webhook, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1RegisterWebhookWithThirdPartyOutput = (
  output: any,
  context: __SerdeContext
): RegisterWebhookWithThirdPartyOutput => {
  return {
    __type: "RegisterWebhookWithThirdPartyOutput"
  } as any;
};

const deserializeAws_json1_1ResolvedActionConfigurationMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    __type: "ResourceNotFoundException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1RetryStageExecutionOutput = (
  output: any,
  context: __SerdeContext
): RetryStageExecutionOutput => {
  return {
    __type: "RetryStageExecutionOutput",
    pipelineExecutionId:
      output.pipelineExecutionId !== undefined &&
      output.pipelineExecutionId !== null
        ? output.pipelineExecutionId
        : undefined
  } as any;
};

const deserializeAws_json1_1S3ArtifactLocation = (
  output: any,
  context: __SerdeContext
): S3ArtifactLocation => {
  return {
    __type: "S3ArtifactLocation",
    bucketName:
      output.bucketName !== undefined && output.bucketName !== null
        ? output.bucketName
        : undefined,
    objectKey:
      output.objectKey !== undefined && output.objectKey !== null
        ? output.objectKey
        : undefined
  } as any;
};

const deserializeAws_json1_1S3Location = (
  output: any,
  context: __SerdeContext
): S3Location => {
  return {
    __type: "S3Location",
    bucket:
      output.bucket !== undefined && output.bucket !== null
        ? output.bucket
        : undefined,
    key:
      output.key !== undefined && output.key !== null ? output.key : undefined
  } as any;
};

const deserializeAws_json1_1SourceRevision = (
  output: any,
  context: __SerdeContext
): SourceRevision => {
  return {
    __type: "SourceRevision",
    actionName:
      output.actionName !== undefined && output.actionName !== null
        ? output.actionName
        : undefined,
    revisionId:
      output.revisionId !== undefined && output.revisionId !== null
        ? output.revisionId
        : undefined,
    revisionSummary:
      output.revisionSummary !== undefined && output.revisionSummary !== null
        ? output.revisionSummary
        : undefined,
    revisionUrl:
      output.revisionUrl !== undefined && output.revisionUrl !== null
        ? output.revisionUrl
        : undefined
  } as any;
};

const deserializeAws_json1_1SourceRevisionList = (
  output: any,
  context: __SerdeContext
): SourceRevision[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1SourceRevision(entry, context)
  );
};

const deserializeAws_json1_1StageActionDeclarationList = (
  output: any,
  context: __SerdeContext
): ActionDeclaration[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ActionDeclaration(entry, context)
  );
};

const deserializeAws_json1_1StageBlockerDeclarationList = (
  output: any,
  context: __SerdeContext
): BlockerDeclaration[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1BlockerDeclaration(entry, context)
  );
};

const deserializeAws_json1_1StageContext = (
  output: any,
  context: __SerdeContext
): StageContext => {
  return {
    __type: "StageContext",
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined
  } as any;
};

const deserializeAws_json1_1StageDeclaration = (
  output: any,
  context: __SerdeContext
): StageDeclaration => {
  return {
    __type: "StageDeclaration",
    actions:
      output.actions !== undefined && output.actions !== null
        ? deserializeAws_json1_1StageActionDeclarationList(
            output.actions,
            context
          )
        : undefined,
    blockers:
      output.blockers !== undefined && output.blockers !== null
        ? deserializeAws_json1_1StageBlockerDeclarationList(
            output.blockers,
            context
          )
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined
  } as any;
};

const deserializeAws_json1_1StageExecution = (
  output: any,
  context: __SerdeContext
): StageExecution => {
  return {
    __type: "StageExecution",
    pipelineExecutionId:
      output.pipelineExecutionId !== undefined &&
      output.pipelineExecutionId !== null
        ? output.pipelineExecutionId
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined
  } as any;
};

const deserializeAws_json1_1StageNotFoundException = (
  output: any,
  context: __SerdeContext
): StageNotFoundException => {
  return {
    __type: "StageNotFoundException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1StageNotRetryableException = (
  output: any,
  context: __SerdeContext
): StageNotRetryableException => {
  return {
    __type: "StageNotRetryableException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1StageState = (
  output: any,
  context: __SerdeContext
): StageState => {
  return {
    __type: "StageState",
    actionStates:
      output.actionStates !== undefined && output.actionStates !== null
        ? deserializeAws_json1_1ActionStateList(output.actionStates, context)
        : undefined,
    inboundTransitionState:
      output.inboundTransitionState !== undefined &&
      output.inboundTransitionState !== null
        ? deserializeAws_json1_1TransitionState(
            output.inboundTransitionState,
            context
          )
        : undefined,
    latestExecution:
      output.latestExecution !== undefined && output.latestExecution !== null
        ? deserializeAws_json1_1StageExecution(output.latestExecution, context)
        : undefined,
    stageName:
      output.stageName !== undefined && output.stageName !== null
        ? output.stageName
        : undefined
  } as any;
};

const deserializeAws_json1_1StageStateList = (
  output: any,
  context: __SerdeContext
): StageState[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1StageState(entry, context)
  );
};

const deserializeAws_json1_1StartPipelineExecutionOutput = (
  output: any,
  context: __SerdeContext
): StartPipelineExecutionOutput => {
  return {
    __type: "StartPipelineExecutionOutput",
    pipelineExecutionId:
      output.pipelineExecutionId !== undefined &&
      output.pipelineExecutionId !== null
        ? output.pipelineExecutionId
        : undefined
  } as any;
};

const deserializeAws_json1_1StopExecutionTrigger = (
  output: any,
  context: __SerdeContext
): StopExecutionTrigger => {
  return {
    __type: "StopExecutionTrigger",
    reason:
      output.reason !== undefined && output.reason !== null
        ? output.reason
        : undefined
  } as any;
};

const deserializeAws_json1_1StopPipelineExecutionOutput = (
  output: any,
  context: __SerdeContext
): StopPipelineExecutionOutput => {
  return {
    __type: "StopPipelineExecutionOutput",
    pipelineExecutionId:
      output.pipelineExecutionId !== undefined &&
      output.pipelineExecutionId !== null
        ? output.pipelineExecutionId
        : undefined
  } as any;
};

const deserializeAws_json1_1Tag = (
  output: any,
  context: __SerdeContext
): Tag => {
  return {
    __type: "Tag",
    key:
      output.key !== undefined && output.key !== null ? output.key : undefined,
    value:
      output.value !== undefined && output.value !== null
        ? output.value
        : undefined
  } as any;
};

const deserializeAws_json1_1TagList = (
  output: any,
  context: __SerdeContext
): Tag[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Tag(entry, context)
  );
};

const deserializeAws_json1_1TagResourceOutput = (
  output: any,
  context: __SerdeContext
): TagResourceOutput => {
  return {
    __type: "TagResourceOutput"
  } as any;
};

const deserializeAws_json1_1ThirdPartyJob = (
  output: any,
  context: __SerdeContext
): ThirdPartyJob => {
  return {
    __type: "ThirdPartyJob",
    clientId:
      output.clientId !== undefined && output.clientId !== null
        ? output.clientId
        : undefined,
    jobId:
      output.jobId !== undefined && output.jobId !== null
        ? output.jobId
        : undefined
  } as any;
};

const deserializeAws_json1_1ThirdPartyJobData = (
  output: any,
  context: __SerdeContext
): ThirdPartyJobData => {
  return {
    __type: "ThirdPartyJobData",
    actionConfiguration:
      output.actionConfiguration !== undefined &&
      output.actionConfiguration !== null
        ? deserializeAws_json1_1ActionConfiguration(
            output.actionConfiguration,
            context
          )
        : undefined,
    actionTypeId:
      output.actionTypeId !== undefined && output.actionTypeId !== null
        ? deserializeAws_json1_1ActionTypeId(output.actionTypeId, context)
        : undefined,
    artifactCredentials:
      output.artifactCredentials !== undefined &&
      output.artifactCredentials !== null
        ? deserializeAws_json1_1AWSSessionCredentials(
            output.artifactCredentials,
            context
          )
        : undefined,
    continuationToken:
      output.continuationToken !== undefined &&
      output.continuationToken !== null
        ? output.continuationToken
        : undefined,
    encryptionKey:
      output.encryptionKey !== undefined && output.encryptionKey !== null
        ? deserializeAws_json1_1EncryptionKey(output.encryptionKey, context)
        : undefined,
    inputArtifacts:
      output.inputArtifacts !== undefined && output.inputArtifacts !== null
        ? deserializeAws_json1_1ArtifactList(output.inputArtifacts, context)
        : undefined,
    outputArtifacts:
      output.outputArtifacts !== undefined && output.outputArtifacts !== null
        ? deserializeAws_json1_1ArtifactList(output.outputArtifacts, context)
        : undefined,
    pipelineContext:
      output.pipelineContext !== undefined && output.pipelineContext !== null
        ? deserializeAws_json1_1PipelineContext(output.pipelineContext, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1ThirdPartyJobDetails = (
  output: any,
  context: __SerdeContext
): ThirdPartyJobDetails => {
  return {
    __type: "ThirdPartyJobDetails",
    data:
      output.data !== undefined && output.data !== null
        ? deserializeAws_json1_1ThirdPartyJobData(output.data, context)
        : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    nonce:
      output.nonce !== undefined && output.nonce !== null
        ? output.nonce
        : undefined
  } as any;
};

const deserializeAws_json1_1ThirdPartyJobList = (
  output: any,
  context: __SerdeContext
): ThirdPartyJob[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ThirdPartyJob(entry, context)
  );
};

const deserializeAws_json1_1TooManyTagsException = (
  output: any,
  context: __SerdeContext
): TooManyTagsException => {
  return {
    __type: "TooManyTagsException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1TransitionState = (
  output: any,
  context: __SerdeContext
): TransitionState => {
  return {
    __type: "TransitionState",
    disabledReason:
      output.disabledReason !== undefined && output.disabledReason !== null
        ? output.disabledReason
        : undefined,
    enabled:
      output.enabled !== undefined && output.enabled !== null
        ? output.enabled
        : undefined,
    lastChangedAt:
      output.lastChangedAt !== undefined && output.lastChangedAt !== null
        ? new Date(Math.round(output.lastChangedAt * 1000))
        : undefined,
    lastChangedBy:
      output.lastChangedBy !== undefined && output.lastChangedBy !== null
        ? output.lastChangedBy
        : undefined
  } as any;
};

const deserializeAws_json1_1UntagResourceOutput = (
  output: any,
  context: __SerdeContext
): UntagResourceOutput => {
  return {
    __type: "UntagResourceOutput"
  } as any;
};

const deserializeAws_json1_1UpdatePipelineOutput = (
  output: any,
  context: __SerdeContext
): UpdatePipelineOutput => {
  return {
    __type: "UpdatePipelineOutput",
    pipeline:
      output.pipeline !== undefined && output.pipeline !== null
        ? deserializeAws_json1_1PipelineDeclaration(output.pipeline, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1ValidationException = (
  output: any,
  context: __SerdeContext
): ValidationException => {
  return {
    __type: "ValidationException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1WebhookAuthConfiguration = (
  output: any,
  context: __SerdeContext
): WebhookAuthConfiguration => {
  return {
    __type: "WebhookAuthConfiguration",
    AllowedIPRange:
      output.AllowedIPRange !== undefined && output.AllowedIPRange !== null
        ? output.AllowedIPRange
        : undefined,
    SecretToken:
      output.SecretToken !== undefined && output.SecretToken !== null
        ? output.SecretToken
        : undefined
  } as any;
};

const deserializeAws_json1_1WebhookDefinition = (
  output: any,
  context: __SerdeContext
): WebhookDefinition => {
  return {
    __type: "WebhookDefinition",
    authentication:
      output.authentication !== undefined && output.authentication !== null
        ? output.authentication
        : undefined,
    authenticationConfiguration:
      output.authenticationConfiguration !== undefined &&
      output.authenticationConfiguration !== null
        ? deserializeAws_json1_1WebhookAuthConfiguration(
            output.authenticationConfiguration,
            context
          )
        : undefined,
    filters:
      output.filters !== undefined && output.filters !== null
        ? deserializeAws_json1_1WebhookFilters(output.filters, context)
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    targetAction:
      output.targetAction !== undefined && output.targetAction !== null
        ? output.targetAction
        : undefined,
    targetPipeline:
      output.targetPipeline !== undefined && output.targetPipeline !== null
        ? output.targetPipeline
        : undefined
  } as any;
};

const deserializeAws_json1_1WebhookFilterRule = (
  output: any,
  context: __SerdeContext
): WebhookFilterRule => {
  return {
    __type: "WebhookFilterRule",
    jsonPath:
      output.jsonPath !== undefined && output.jsonPath !== null
        ? output.jsonPath
        : undefined,
    matchEquals:
      output.matchEquals !== undefined && output.matchEquals !== null
        ? output.matchEquals
        : undefined
  } as any;
};

const deserializeAws_json1_1WebhookFilters = (
  output: any,
  context: __SerdeContext
): WebhookFilterRule[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1WebhookFilterRule(entry, context)
  );
};

const deserializeAws_json1_1WebhookList = (
  output: any,
  context: __SerdeContext
): ListWebhookItem[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ListWebhookItem(entry, context)
  );
};

const deserializeAws_json1_1WebhookNotFoundException = (
  output: any,
  context: __SerdeContext
): WebhookNotFoundException => {
  return {
    __type: "WebhookNotFoundException"
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any = new Uint8Array(),
  context: __SerdeContext
): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return (
    context.streamCollector(streamBody) || Promise.resolve(new Uint8Array())
  );
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (
  streamBody: any,
  context: __SerdeContext
): Promise<string> =>
  collectBody(streamBody, context).then(body => context.utf8Encoder(body));

const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path,
    headers
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
  collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
