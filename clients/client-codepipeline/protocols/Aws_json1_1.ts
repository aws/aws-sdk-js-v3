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

export async function serializeAws_json1_1AcknowledgeJobCommand(
  input: AcknowledgeJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodePipeline_20150709.AcknowledgeJob";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1AcknowledgeJobInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1AcknowledgeThirdPartyJobCommand(
  input: AcknowledgeThirdPartyJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodePipeline_20150709.AcknowledgeThirdPartyJob";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1AcknowledgeThirdPartyJobInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateCustomActionTypeCommand(
  input: CreateCustomActionTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodePipeline_20150709.CreateCustomActionType";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateCustomActionTypeInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreatePipelineCommand(
  input: CreatePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodePipeline_20150709.CreatePipeline";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreatePipelineInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteCustomActionTypeCommand(
  input: DeleteCustomActionTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodePipeline_20150709.DeleteCustomActionType";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteCustomActionTypeInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeletePipelineCommand(
  input: DeletePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodePipeline_20150709.DeletePipeline";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeletePipelineInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteWebhookCommand(
  input: DeleteWebhookCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodePipeline_20150709.DeleteWebhook";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteWebhookInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeregisterWebhookWithThirdPartyCommand(
  input: DeregisterWebhookWithThirdPartyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "CodePipeline_20150709.DeregisterWebhookWithThirdParty";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeregisterWebhookWithThirdPartyInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DisableStageTransitionCommand(
  input: DisableStageTransitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodePipeline_20150709.DisableStageTransition";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DisableStageTransitionInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1EnableStageTransitionCommand(
  input: EnableStageTransitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodePipeline_20150709.EnableStageTransition";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1EnableStageTransitionInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetJobDetailsCommand(
  input: GetJobDetailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodePipeline_20150709.GetJobDetails";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetJobDetailsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetPipelineCommand(
  input: GetPipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodePipeline_20150709.GetPipeline";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetPipelineInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetPipelineExecutionCommand(
  input: GetPipelineExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodePipeline_20150709.GetPipelineExecution";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetPipelineExecutionInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetPipelineStateCommand(
  input: GetPipelineStateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodePipeline_20150709.GetPipelineState";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetPipelineStateInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetThirdPartyJobDetailsCommand(
  input: GetThirdPartyJobDetailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodePipeline_20150709.GetThirdPartyJobDetails";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetThirdPartyJobDetailsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListActionExecutionsCommand(
  input: ListActionExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodePipeline_20150709.ListActionExecutions";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListActionExecutionsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListActionTypesCommand(
  input: ListActionTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodePipeline_20150709.ListActionTypes";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListActionTypesInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListPipelineExecutionsCommand(
  input: ListPipelineExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodePipeline_20150709.ListPipelineExecutions";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListPipelineExecutionsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListPipelinesCommand(
  input: ListPipelinesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodePipeline_20150709.ListPipelines";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListPipelinesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListTagsForResourceCommand(
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodePipeline_20150709.ListTagsForResource";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListTagsForResourceInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListWebhooksCommand(
  input: ListWebhooksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodePipeline_20150709.ListWebhooks";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListWebhooksInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1PollForJobsCommand(
  input: PollForJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodePipeline_20150709.PollForJobs";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PollForJobsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1PollForThirdPartyJobsCommand(
  input: PollForThirdPartyJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodePipeline_20150709.PollForThirdPartyJobs";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1PollForThirdPartyJobsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1PutActionRevisionCommand(
  input: PutActionRevisionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodePipeline_20150709.PutActionRevision";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1PutActionRevisionInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1PutApprovalResultCommand(
  input: PutApprovalResultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodePipeline_20150709.PutApprovalResult";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1PutApprovalResultInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1PutJobFailureResultCommand(
  input: PutJobFailureResultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodePipeline_20150709.PutJobFailureResult";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1PutJobFailureResultInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1PutJobSuccessResultCommand(
  input: PutJobSuccessResultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodePipeline_20150709.PutJobSuccessResult";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1PutJobSuccessResultInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1PutThirdPartyJobFailureResultCommand(
  input: PutThirdPartyJobFailureResultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "CodePipeline_20150709.PutThirdPartyJobFailureResult";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1PutThirdPartyJobFailureResultInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1PutThirdPartyJobSuccessResultCommand(
  input: PutThirdPartyJobSuccessResultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "CodePipeline_20150709.PutThirdPartyJobSuccessResult";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1PutThirdPartyJobSuccessResultInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1PutWebhookCommand(
  input: PutWebhookCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodePipeline_20150709.PutWebhook";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutWebhookInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1RegisterWebhookWithThirdPartyCommand(
  input: RegisterWebhookWithThirdPartyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "CodePipeline_20150709.RegisterWebhookWithThirdParty";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1RegisterWebhookWithThirdPartyInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1RetryStageExecutionCommand(
  input: RetryStageExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodePipeline_20150709.RetryStageExecution";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1RetryStageExecutionInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1StartPipelineExecutionCommand(
  input: StartPipelineExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodePipeline_20150709.StartPipelineExecution";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1StartPipelineExecutionInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1StopPipelineExecutionCommand(
  input: StopPipelineExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodePipeline_20150709.StopPipelineExecution";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1StopPipelineExecutionInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1TagResourceCommand(
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodePipeline_20150709.TagResource";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UntagResourceCommand(
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodePipeline_20150709.UntagResource";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UntagResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdatePipelineCommand(
  input: UpdatePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodePipeline_20150709.UpdatePipeline";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdatePipelineInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function deserializeAws_json1_1AcknowledgeJobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcknowledgeJobCommandOutput> {
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
}

async function deserializeAws_json1_1AcknowledgeJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcknowledgeJobCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidNonceException":
    case "com.amazonaws.codepipeline.common.frontend.service#InvalidNonceException":
      response = {
        ...(await deserializeAws_json1_1InvalidNonceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "JobNotFoundException":
    case "com.amazonaws.codepipeline.common.frontend.service#JobNotFoundException":
      response = {
        ...(await deserializeAws_json1_1JobNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codepipeline.common.frontend.service#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1AcknowledgeThirdPartyJobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcknowledgeThirdPartyJobCommandOutput> {
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
}

async function deserializeAws_json1_1AcknowledgeThirdPartyJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcknowledgeThirdPartyJobCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNonceException":
    case "com.amazonaws.codepipeline.common.frontend.service#InvalidNonceException":
      response = {
        ...(await deserializeAws_json1_1InvalidNonceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "JobNotFoundException":
    case "com.amazonaws.codepipeline.common.frontend.service#JobNotFoundException":
      response = {
        ...(await deserializeAws_json1_1JobNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codepipeline.common.frontend.service#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1CreateCustomActionTypeCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomActionTypeCommandOutput> {
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
}

async function deserializeAws_json1_1CreateCustomActionTypeCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomActionTypeCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codepipeline.common.frontend.service#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1CreatePipelineCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePipelineCommandOutput> {
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
}

async function deserializeAws_json1_1CreatePipelineCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePipelineCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codepipeline.common.frontend.service#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DeleteCustomActionTypeCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomActionTypeCommandOutput> {
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
}

async function deserializeAws_json1_1DeleteCustomActionTypeCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomActionTypeCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codepipeline.common.frontend.service#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DeletePipelineCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePipelineCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeletePipelineCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeletePipelineCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeletePipelineCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePipelineCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codepipeline.common.frontend.service#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DeleteWebhookCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWebhookCommandOutput> {
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
}

async function deserializeAws_json1_1DeleteWebhookCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWebhookCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codepipeline.common.frontend.service#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DeregisterWebhookWithThirdPartyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterWebhookWithThirdPartyCommandOutput> {
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
}

async function deserializeAws_json1_1DeregisterWebhookWithThirdPartyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterWebhookWithThirdPartyCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "WebhookNotFoundException":
    case "com.amazonaws.codepipeline#WebhookNotFoundException":
      response = {
        ...(await deserializeAws_json1_1WebhookNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codepipeline.common.frontend.service#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DisableStageTransitionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableStageTransitionCommandOutput> {
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
}

async function deserializeAws_json1_1DisableStageTransitionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableStageTransitionCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codepipeline.common.frontend.service#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1EnableStageTransitionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableStageTransitionCommandOutput> {
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
}

async function deserializeAws_json1_1EnableStageTransitionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableStageTransitionCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codepipeline.common.frontend.service#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1GetJobDetailsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobDetailsCommandOutput> {
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
}

async function deserializeAws_json1_1GetJobDetailsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobDetailsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "JobNotFoundException":
    case "com.amazonaws.codepipeline.common.frontend.service#JobNotFoundException":
      response = {
        ...(await deserializeAws_json1_1JobNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codepipeline.common.frontend.service#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1GetPipelineCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPipelineCommandOutput> {
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
}

async function deserializeAws_json1_1GetPipelineCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPipelineCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codepipeline.common.frontend.service#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1GetPipelineExecutionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPipelineExecutionCommandOutput> {
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
}

async function deserializeAws_json1_1GetPipelineExecutionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPipelineExecutionCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codepipeline.common.frontend.service#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1GetPipelineStateCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPipelineStateCommandOutput> {
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
}

async function deserializeAws_json1_1GetPipelineStateCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPipelineStateCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codepipeline.common.frontend.service#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1GetThirdPartyJobDetailsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetThirdPartyJobDetailsCommandOutput> {
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
}

async function deserializeAws_json1_1GetThirdPartyJobDetailsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetThirdPartyJobDetailsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
        $metadata: deserializeMetadata(output)
      };
      break;
    case "JobNotFoundException":
    case "com.amazonaws.codepipeline.common.frontend.service#JobNotFoundException":
      response = {
        ...(await deserializeAws_json1_1JobNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codepipeline.common.frontend.service#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListActionExecutionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListActionExecutionsCommandOutput> {
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
}

async function deserializeAws_json1_1ListActionExecutionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListActionExecutionsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codepipeline.common.frontend.service#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListActionTypesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListActionTypesCommandOutput> {
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
}

async function deserializeAws_json1_1ListActionTypesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListActionTypesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codepipeline.common.frontend.service#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListPipelineExecutionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPipelineExecutionsCommandOutput> {
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
}

async function deserializeAws_json1_1ListPipelineExecutionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPipelineExecutionsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codepipeline.common.frontend.service#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListPipelinesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPipelinesCommandOutput> {
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
}

async function deserializeAws_json1_1ListPipelinesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPipelinesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codepipeline.common.frontend.service#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListTagsForResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
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
}

async function deserializeAws_json1_1ListTagsForResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.codepipeline.common.frontend.service#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codepipeline.common.frontend.service#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListWebhooksCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWebhooksCommandOutput> {
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
}

async function deserializeAws_json1_1ListWebhooksCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWebhooksCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codepipeline.common.frontend.service#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1PollForJobsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PollForJobsCommandOutput> {
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
}

async function deserializeAws_json1_1PollForJobsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PollForJobsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ActionTypeNotFoundException":
    case "com.amazonaws.codepipeline.common.frontend.service#ActionTypeNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ActionTypeNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codepipeline.common.frontend.service#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1PollForThirdPartyJobsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PollForThirdPartyJobsCommandOutput> {
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
}

async function deserializeAws_json1_1PollForThirdPartyJobsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PollForThirdPartyJobsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ActionTypeNotFoundException":
    case "com.amazonaws.codepipeline.common.frontend.service#ActionTypeNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ActionTypeNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codepipeline.common.frontend.service#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1PutActionRevisionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutActionRevisionCommandOutput> {
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
}

async function deserializeAws_json1_1PutActionRevisionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutActionRevisionCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codepipeline.common.frontend.service#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1PutApprovalResultCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutApprovalResultCommandOutput> {
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
}

async function deserializeAws_json1_1PutApprovalResultCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutApprovalResultCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codepipeline.common.frontend.service#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1PutJobFailureResultCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutJobFailureResultCommandOutput> {
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
}

async function deserializeAws_json1_1PutJobFailureResultCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutJobFailureResultCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidJobStateException":
    case "com.amazonaws.codepipeline.common.frontend.service#InvalidJobStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidJobStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "JobNotFoundException":
    case "com.amazonaws.codepipeline.common.frontend.service#JobNotFoundException":
      response = {
        ...(await deserializeAws_json1_1JobNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codepipeline.common.frontend.service#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1PutJobSuccessResultCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutJobSuccessResultCommandOutput> {
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
}

async function deserializeAws_json1_1PutJobSuccessResultCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutJobSuccessResultCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidJobStateException":
    case "com.amazonaws.codepipeline.common.frontend.service#InvalidJobStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidJobStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "JobNotFoundException":
    case "com.amazonaws.codepipeline.common.frontend.service#JobNotFoundException":
      response = {
        ...(await deserializeAws_json1_1JobNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OutputVariablesSizeExceededException":
    case "com.amazonaws.codepipeline.common.frontend.service#OutputVariablesSizeExceededException":
      response = {
        ...(await deserializeAws_json1_1OutputVariablesSizeExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codepipeline.common.frontend.service#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1PutThirdPartyJobFailureResultCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutThirdPartyJobFailureResultCommandOutput> {
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
}

async function deserializeAws_json1_1PutThirdPartyJobFailureResultCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutThirdPartyJobFailureResultCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidJobStateException":
    case "com.amazonaws.codepipeline.common.frontend.service#InvalidJobStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidJobStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "JobNotFoundException":
    case "com.amazonaws.codepipeline.common.frontend.service#JobNotFoundException":
      response = {
        ...(await deserializeAws_json1_1JobNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codepipeline.common.frontend.service#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1PutThirdPartyJobSuccessResultCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutThirdPartyJobSuccessResultCommandOutput> {
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
}

async function deserializeAws_json1_1PutThirdPartyJobSuccessResultCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutThirdPartyJobSuccessResultCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidJobStateException":
    case "com.amazonaws.codepipeline.common.frontend.service#InvalidJobStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidJobStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "JobNotFoundException":
    case "com.amazonaws.codepipeline.common.frontend.service#JobNotFoundException":
      response = {
        ...(await deserializeAws_json1_1JobNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codepipeline.common.frontend.service#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1PutWebhookCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutWebhookCommandOutput> {
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
}

async function deserializeAws_json1_1PutWebhookCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutWebhookCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codepipeline.common.frontend.service#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1RegisterWebhookWithThirdPartyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterWebhookWithThirdPartyCommandOutput> {
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
}

async function deserializeAws_json1_1RegisterWebhookWithThirdPartyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterWebhookWithThirdPartyCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "WebhookNotFoundException":
    case "com.amazonaws.codepipeline#WebhookNotFoundException":
      response = {
        ...(await deserializeAws_json1_1WebhookNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codepipeline.common.frontend.service#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1RetryStageExecutionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RetryStageExecutionCommandOutput> {
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
}

async function deserializeAws_json1_1RetryStageExecutionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RetryStageExecutionCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codepipeline.common.frontend.service#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1StartPipelineExecutionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartPipelineExecutionCommandOutput> {
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
}

async function deserializeAws_json1_1StartPipelineExecutionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartPipelineExecutionCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codepipeline.common.frontend.service#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1StopPipelineExecutionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopPipelineExecutionCommandOutput> {
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
}

async function deserializeAws_json1_1StopPipelineExecutionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopPipelineExecutionCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codepipeline.common.frontend.service#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1TagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
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
}

async function deserializeAws_json1_1TagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.codepipeline.common.frontend.service#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codepipeline.common.frontend.service#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1UntagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
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
}

async function deserializeAws_json1_1UntagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.codepipeline.common.frontend.service#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codepipeline.common.frontend.service#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1UpdatePipelineCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePipelineCommandOutput> {
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
}

async function deserializeAws_json1_1UpdatePipelineCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePipelineCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codepipeline.common.frontend.service#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
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
}

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

const serializeAws_json1_1AcknowledgeJobInput = (
  input: AcknowledgeJobInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.jobId !== undefined) {
    bodyParams["jobId"] = input.jobId;
  }
  if (input.nonce !== undefined) {
    bodyParams["nonce"] = input.nonce;
  }
  return bodyParams;
};

const serializeAws_json1_1AcknowledgeThirdPartyJobInput = (
  input: AcknowledgeThirdPartyJobInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.clientToken !== undefined) {
    bodyParams["clientToken"] = input.clientToken;
  }
  if (input.jobId !== undefined) {
    bodyParams["jobId"] = input.jobId;
  }
  if (input.nonce !== undefined) {
    bodyParams["nonce"] = input.nonce;
  }
  return bodyParams;
};

const serializeAws_json1_1ActionConfigurationProperty = (
  input: ActionConfigurationProperty,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.description !== undefined) {
    bodyParams["description"] = input.description;
  }
  if (input.key !== undefined) {
    bodyParams["key"] = input.key;
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.queryable !== undefined) {
    bodyParams["queryable"] = input.queryable;
  }
  if (input.required !== undefined) {
    bodyParams["required"] = input.required;
  }
  if (input.secret !== undefined) {
    bodyParams["secret"] = input.secret;
  }
  if (input.type !== undefined) {
    bodyParams["type"] = input.type;
  }
  return bodyParams;
};

const serializeAws_json1_1ActionConfigurationPropertyList = (
  input: Array<ActionConfigurationProperty>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(
      serializeAws_json1_1ActionConfigurationProperty(entry, context)
    );
  }
  return contents;
};

const serializeAws_json1_1ActionDeclaration = (
  input: ActionDeclaration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.actionTypeId !== undefined) {
    bodyParams["actionTypeId"] = serializeAws_json1_1ActionTypeId(
      input.actionTypeId,
      context
    );
  }
  if (input.configuration !== undefined) {
    bodyParams["configuration"] = serializeAws_json1_1ActionConfigurationMap(
      input.configuration,
      context
    );
  }
  if (input.inputArtifacts !== undefined) {
    bodyParams["inputArtifacts"] = serializeAws_json1_1InputArtifactList(
      input.inputArtifacts,
      context
    );
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.namespace !== undefined) {
    bodyParams["namespace"] = input.namespace;
  }
  if (input.outputArtifacts !== undefined) {
    bodyParams["outputArtifacts"] = serializeAws_json1_1OutputArtifactList(
      input.outputArtifacts,
      context
    );
  }
  if (input.region !== undefined) {
    bodyParams["region"] = input.region;
  }
  if (input.roleArn !== undefined) {
    bodyParams["roleArn"] = input.roleArn;
  }
  if (input.runOrder !== undefined) {
    bodyParams["runOrder"] = input.runOrder;
  }
  return bodyParams;
};

const serializeAws_json1_1ActionExecutionFilter = (
  input: ActionExecutionFilter,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.pipelineExecutionId !== undefined) {
    bodyParams["pipelineExecutionId"] = input.pipelineExecutionId;
  }
  return bodyParams;
};

const serializeAws_json1_1ActionRevision = (
  input: ActionRevision,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.created !== undefined) {
    bodyParams["created"] = Math.round(input.created.getTime() / 1000);
  }
  if (input.revisionChangeId !== undefined) {
    bodyParams["revisionChangeId"] = input.revisionChangeId;
  }
  if (input.revisionId !== undefined) {
    bodyParams["revisionId"] = input.revisionId;
  }
  return bodyParams;
};

const serializeAws_json1_1ActionTypeSettings = (
  input: ActionTypeSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.entityUrlTemplate !== undefined) {
    bodyParams["entityUrlTemplate"] = input.entityUrlTemplate;
  }
  if (input.executionUrlTemplate !== undefined) {
    bodyParams["executionUrlTemplate"] = input.executionUrlTemplate;
  }
  if (input.revisionUrlTemplate !== undefined) {
    bodyParams["revisionUrlTemplate"] = input.revisionUrlTemplate;
  }
  if (input.thirdPartyConfigurationUrl !== undefined) {
    bodyParams["thirdPartyConfigurationUrl"] = input.thirdPartyConfigurationUrl;
  }
  return bodyParams;
};

const serializeAws_json1_1ApprovalResult = (
  input: ApprovalResult,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.status !== undefined) {
    bodyParams["status"] = input.status;
  }
  if (input.summary !== undefined) {
    bodyParams["summary"] = input.summary;
  }
  return bodyParams;
};

const serializeAws_json1_1ArtifactDetails = (
  input: ArtifactDetails,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.maximumCount !== undefined) {
    bodyParams["maximumCount"] = input.maximumCount;
  }
  if (input.minimumCount !== undefined) {
    bodyParams["minimumCount"] = input.minimumCount;
  }
  return bodyParams;
};

const serializeAws_json1_1ArtifactStore = (
  input: ArtifactStore,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.encryptionKey !== undefined) {
    bodyParams["encryptionKey"] = serializeAws_json1_1EncryptionKey(
      input.encryptionKey,
      context
    );
  }
  if (input.location !== undefined) {
    bodyParams["location"] = input.location;
  }
  if (input.type !== undefined) {
    bodyParams["type"] = input.type;
  }
  return bodyParams;
};

const serializeAws_json1_1ArtifactStoreMap = (
  input: { [key: string]: ArtifactStore },
  context: __SerdeContext
): any => {
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = serializeAws_json1_1ArtifactStore(input[key], context);
  });
  return mapParams;
};

const serializeAws_json1_1BlockerDeclaration = (
  input: BlockerDeclaration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.type !== undefined) {
    bodyParams["type"] = input.type;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateCustomActionTypeInput = (
  input: CreateCustomActionTypeInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.category !== undefined) {
    bodyParams["category"] = input.category;
  }
  if (input.configurationProperties !== undefined) {
    bodyParams[
      "configurationProperties"
    ] = serializeAws_json1_1ActionConfigurationPropertyList(
      input.configurationProperties,
      context
    );
  }
  if (input.inputArtifactDetails !== undefined) {
    bodyParams["inputArtifactDetails"] = serializeAws_json1_1ArtifactDetails(
      input.inputArtifactDetails,
      context
    );
  }
  if (input.outputArtifactDetails !== undefined) {
    bodyParams["outputArtifactDetails"] = serializeAws_json1_1ArtifactDetails(
      input.outputArtifactDetails,
      context
    );
  }
  if (input.provider !== undefined) {
    bodyParams["provider"] = input.provider;
  }
  if (input.settings !== undefined) {
    bodyParams["settings"] = serializeAws_json1_1ActionTypeSettings(
      input.settings,
      context
    );
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_json1_1TagList(input.tags, context);
  }
  if (input.version !== undefined) {
    bodyParams["version"] = input.version;
  }
  return bodyParams;
};

const serializeAws_json1_1CreatePipelineInput = (
  input: CreatePipelineInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.pipeline !== undefined) {
    bodyParams["pipeline"] = serializeAws_json1_1PipelineDeclaration(
      input.pipeline,
      context
    );
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_json1_1TagList(input.tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteCustomActionTypeInput = (
  input: DeleteCustomActionTypeInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.category !== undefined) {
    bodyParams["category"] = input.category;
  }
  if (input.provider !== undefined) {
    bodyParams["provider"] = input.provider;
  }
  if (input.version !== undefined) {
    bodyParams["version"] = input.version;
  }
  return bodyParams;
};

const serializeAws_json1_1DeletePipelineInput = (
  input: DeletePipelineInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteWebhookInput = (
  input: DeleteWebhookInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  return bodyParams;
};

const serializeAws_json1_1DeregisterWebhookWithThirdPartyInput = (
  input: DeregisterWebhookWithThirdPartyInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.webhookName !== undefined) {
    bodyParams["webhookName"] = input.webhookName;
  }
  return bodyParams;
};

const serializeAws_json1_1DisableStageTransitionInput = (
  input: DisableStageTransitionInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.pipelineName !== undefined) {
    bodyParams["pipelineName"] = input.pipelineName;
  }
  if (input.reason !== undefined) {
    bodyParams["reason"] = input.reason;
  }
  if (input.stageName !== undefined) {
    bodyParams["stageName"] = input.stageName;
  }
  if (input.transitionType !== undefined) {
    bodyParams["transitionType"] = input.transitionType;
  }
  return bodyParams;
};

const serializeAws_json1_1EnableStageTransitionInput = (
  input: EnableStageTransitionInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.pipelineName !== undefined) {
    bodyParams["pipelineName"] = input.pipelineName;
  }
  if (input.stageName !== undefined) {
    bodyParams["stageName"] = input.stageName;
  }
  if (input.transitionType !== undefined) {
    bodyParams["transitionType"] = input.transitionType;
  }
  return bodyParams;
};

const serializeAws_json1_1GetJobDetailsInput = (
  input: GetJobDetailsInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.jobId !== undefined) {
    bodyParams["jobId"] = input.jobId;
  }
  return bodyParams;
};

const serializeAws_json1_1GetPipelineExecutionInput = (
  input: GetPipelineExecutionInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.pipelineExecutionId !== undefined) {
    bodyParams["pipelineExecutionId"] = input.pipelineExecutionId;
  }
  if (input.pipelineName !== undefined) {
    bodyParams["pipelineName"] = input.pipelineName;
  }
  return bodyParams;
};

const serializeAws_json1_1GetPipelineInput = (
  input: GetPipelineInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.version !== undefined) {
    bodyParams["version"] = input.version;
  }
  return bodyParams;
};

const serializeAws_json1_1GetPipelineStateInput = (
  input: GetPipelineStateInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  return bodyParams;
};

const serializeAws_json1_1GetThirdPartyJobDetailsInput = (
  input: GetThirdPartyJobDetailsInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.clientToken !== undefined) {
    bodyParams["clientToken"] = input.clientToken;
  }
  if (input.jobId !== undefined) {
    bodyParams["jobId"] = input.jobId;
  }
  return bodyParams;
};

const serializeAws_json1_1InputArtifact = (
  input: InputArtifact,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  return bodyParams;
};

const serializeAws_json1_1InputArtifactList = (
  input: Array<InputArtifact>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1InputArtifact(entry, context));
  }
  return contents;
};

const serializeAws_json1_1ListActionExecutionsInput = (
  input: ListActionExecutionsInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.filter !== undefined) {
    bodyParams["filter"] = serializeAws_json1_1ActionExecutionFilter(
      input.filter,
      context
    );
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  if (input.pipelineName !== undefined) {
    bodyParams["pipelineName"] = input.pipelineName;
  }
  return bodyParams;
};

const serializeAws_json1_1ListActionTypesInput = (
  input: ListActionTypesInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.actionOwnerFilter !== undefined) {
    bodyParams["actionOwnerFilter"] = input.actionOwnerFilter;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListPipelineExecutionsInput = (
  input: ListPipelineExecutionsInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  if (input.pipelineName !== undefined) {
    bodyParams["pipelineName"] = input.pipelineName;
  }
  return bodyParams;
};

const serializeAws_json1_1ListPipelinesInput = (
  input: ListPipelinesInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListTagsForResourceInput = (
  input: ListTagsForResourceInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  if (input.resourceArn !== undefined) {
    bodyParams["resourceArn"] = input.resourceArn;
  }
  return bodyParams;
};

const serializeAws_json1_1ListWebhooksInput = (
  input: ListWebhooksInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1OutputArtifact = (
  input: OutputArtifact,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  return bodyParams;
};

const serializeAws_json1_1OutputArtifactList = (
  input: Array<OutputArtifact>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1OutputArtifact(entry, context));
  }
  return contents;
};

const serializeAws_json1_1PipelineDeclaration = (
  input: PipelineDeclaration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.artifactStore !== undefined) {
    bodyParams["artifactStore"] = serializeAws_json1_1ArtifactStore(
      input.artifactStore,
      context
    );
  }
  if (input.artifactStores !== undefined) {
    bodyParams["artifactStores"] = serializeAws_json1_1ArtifactStoreMap(
      input.artifactStores,
      context
    );
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.roleArn !== undefined) {
    bodyParams["roleArn"] = input.roleArn;
  }
  if (input.stages !== undefined) {
    bodyParams["stages"] = serializeAws_json1_1PipelineStageDeclarationList(
      input.stages,
      context
    );
  }
  if (input.version !== undefined) {
    bodyParams["version"] = input.version;
  }
  return bodyParams;
};

const serializeAws_json1_1PipelineStageDeclarationList = (
  input: Array<StageDeclaration>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1StageDeclaration(entry, context));
  }
  return contents;
};

const serializeAws_json1_1PollForJobsInput = (
  input: PollForJobsInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.actionTypeId !== undefined) {
    bodyParams["actionTypeId"] = serializeAws_json1_1ActionTypeId(
      input.actionTypeId,
      context
    );
  }
  if (input.maxBatchSize !== undefined) {
    bodyParams["maxBatchSize"] = input.maxBatchSize;
  }
  if (input.queryParam !== undefined) {
    bodyParams["queryParam"] = serializeAws_json1_1QueryParamMap(
      input.queryParam,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1PollForThirdPartyJobsInput = (
  input: PollForThirdPartyJobsInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.actionTypeId !== undefined) {
    bodyParams["actionTypeId"] = serializeAws_json1_1ActionTypeId(
      input.actionTypeId,
      context
    );
  }
  if (input.maxBatchSize !== undefined) {
    bodyParams["maxBatchSize"] = input.maxBatchSize;
  }
  return bodyParams;
};

const serializeAws_json1_1PutActionRevisionInput = (
  input: PutActionRevisionInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.actionName !== undefined) {
    bodyParams["actionName"] = input.actionName;
  }
  if (input.actionRevision !== undefined) {
    bodyParams["actionRevision"] = serializeAws_json1_1ActionRevision(
      input.actionRevision,
      context
    );
  }
  if (input.pipelineName !== undefined) {
    bodyParams["pipelineName"] = input.pipelineName;
  }
  if (input.stageName !== undefined) {
    bodyParams["stageName"] = input.stageName;
  }
  return bodyParams;
};

const serializeAws_json1_1PutApprovalResultInput = (
  input: PutApprovalResultInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.actionName !== undefined) {
    bodyParams["actionName"] = input.actionName;
  }
  if (input.pipelineName !== undefined) {
    bodyParams["pipelineName"] = input.pipelineName;
  }
  if (input.result !== undefined) {
    bodyParams["result"] = serializeAws_json1_1ApprovalResult(
      input.result,
      context
    );
  }
  if (input.stageName !== undefined) {
    bodyParams["stageName"] = input.stageName;
  }
  if (input.token !== undefined) {
    bodyParams["token"] = input.token;
  }
  return bodyParams;
};

const serializeAws_json1_1PutJobFailureResultInput = (
  input: PutJobFailureResultInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.failureDetails !== undefined) {
    bodyParams["failureDetails"] = serializeAws_json1_1FailureDetails(
      input.failureDetails,
      context
    );
  }
  if (input.jobId !== undefined) {
    bodyParams["jobId"] = input.jobId;
  }
  return bodyParams;
};

const serializeAws_json1_1PutJobSuccessResultInput = (
  input: PutJobSuccessResultInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.continuationToken !== undefined) {
    bodyParams["continuationToken"] = input.continuationToken;
  }
  if (input.currentRevision !== undefined) {
    bodyParams["currentRevision"] = serializeAws_json1_1CurrentRevision(
      input.currentRevision,
      context
    );
  }
  if (input.executionDetails !== undefined) {
    bodyParams["executionDetails"] = serializeAws_json1_1ExecutionDetails(
      input.executionDetails,
      context
    );
  }
  if (input.jobId !== undefined) {
    bodyParams["jobId"] = input.jobId;
  }
  if (input.outputVariables !== undefined) {
    bodyParams["outputVariables"] = serializeAws_json1_1OutputVariablesMap(
      input.outputVariables,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1PutThirdPartyJobFailureResultInput = (
  input: PutThirdPartyJobFailureResultInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.clientToken !== undefined) {
    bodyParams["clientToken"] = input.clientToken;
  }
  if (input.failureDetails !== undefined) {
    bodyParams["failureDetails"] = serializeAws_json1_1FailureDetails(
      input.failureDetails,
      context
    );
  }
  if (input.jobId !== undefined) {
    bodyParams["jobId"] = input.jobId;
  }
  return bodyParams;
};

const serializeAws_json1_1PutThirdPartyJobSuccessResultInput = (
  input: PutThirdPartyJobSuccessResultInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.clientToken !== undefined) {
    bodyParams["clientToken"] = input.clientToken;
  }
  if (input.continuationToken !== undefined) {
    bodyParams["continuationToken"] = input.continuationToken;
  }
  if (input.currentRevision !== undefined) {
    bodyParams["currentRevision"] = serializeAws_json1_1CurrentRevision(
      input.currentRevision,
      context
    );
  }
  if (input.executionDetails !== undefined) {
    bodyParams["executionDetails"] = serializeAws_json1_1ExecutionDetails(
      input.executionDetails,
      context
    );
  }
  if (input.jobId !== undefined) {
    bodyParams["jobId"] = input.jobId;
  }
  return bodyParams;
};

const serializeAws_json1_1PutWebhookInput = (
  input: PutWebhookInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_json1_1TagList(input.tags, context);
  }
  if (input.webhook !== undefined) {
    bodyParams["webhook"] = serializeAws_json1_1WebhookDefinition(
      input.webhook,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1RegisterWebhookWithThirdPartyInput = (
  input: RegisterWebhookWithThirdPartyInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.webhookName !== undefined) {
    bodyParams["webhookName"] = input.webhookName;
  }
  return bodyParams;
};

const serializeAws_json1_1RetryStageExecutionInput = (
  input: RetryStageExecutionInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.pipelineExecutionId !== undefined) {
    bodyParams["pipelineExecutionId"] = input.pipelineExecutionId;
  }
  if (input.pipelineName !== undefined) {
    bodyParams["pipelineName"] = input.pipelineName;
  }
  if (input.retryMode !== undefined) {
    bodyParams["retryMode"] = input.retryMode;
  }
  if (input.stageName !== undefined) {
    bodyParams["stageName"] = input.stageName;
  }
  return bodyParams;
};

const serializeAws_json1_1StageActionDeclarationList = (
  input: Array<ActionDeclaration>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1ActionDeclaration(entry, context));
  }
  return contents;
};

const serializeAws_json1_1StageBlockerDeclarationList = (
  input: Array<BlockerDeclaration>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1BlockerDeclaration(entry, context));
  }
  return contents;
};

const serializeAws_json1_1StageDeclaration = (
  input: StageDeclaration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.actions !== undefined) {
    bodyParams["actions"] = serializeAws_json1_1StageActionDeclarationList(
      input.actions,
      context
    );
  }
  if (input.blockers !== undefined) {
    bodyParams["blockers"] = serializeAws_json1_1StageBlockerDeclarationList(
      input.blockers,
      context
    );
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  return bodyParams;
};

const serializeAws_json1_1StartPipelineExecutionInput = (
  input: StartPipelineExecutionInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.clientRequestToken === undefined) {
    input.clientRequestToken = generateIdempotencyToken();
  }
  if (input.clientRequestToken !== undefined) {
    bodyParams["clientRequestToken"] = input.clientRequestToken;
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  return bodyParams;
};

const serializeAws_json1_1StopPipelineExecutionInput = (
  input: StopPipelineExecutionInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.abandon !== undefined) {
    bodyParams["abandon"] = input.abandon;
  }
  if (input.pipelineExecutionId !== undefined) {
    bodyParams["pipelineExecutionId"] = input.pipelineExecutionId;
  }
  if (input.pipelineName !== undefined) {
    bodyParams["pipelineName"] = input.pipelineName;
  }
  if (input.reason !== undefined) {
    bodyParams["reason"] = input.reason;
  }
  return bodyParams;
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  const bodyParams: any = {};
  if (input.key !== undefined) {
    bodyParams["key"] = input.key;
  }
  if (input.value !== undefined) {
    bodyParams["value"] = input.value;
  }
  return bodyParams;
};

const serializeAws_json1_1TagKeyList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1TagList = (
  input: Array<Tag>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1Tag(entry, context));
  }
  return contents;
};

const serializeAws_json1_1TagResourceInput = (
  input: TagResourceInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.resourceArn !== undefined) {
    bodyParams["resourceArn"] = input.resourceArn;
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_json1_1TagList(input.tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1UntagResourceInput = (
  input: UntagResourceInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.resourceArn !== undefined) {
    bodyParams["resourceArn"] = input.resourceArn;
  }
  if (input.tagKeys !== undefined) {
    bodyParams["tagKeys"] = serializeAws_json1_1TagKeyList(
      input.tagKeys,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1UpdatePipelineInput = (
  input: UpdatePipelineInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.pipeline !== undefined) {
    bodyParams["pipeline"] = serializeAws_json1_1PipelineDeclaration(
      input.pipeline,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1WebhookAuthConfiguration = (
  input: WebhookAuthConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AllowedIPRange !== undefined) {
    bodyParams["AllowedIPRange"] = input.AllowedIPRange;
  }
  if (input.SecretToken !== undefined) {
    bodyParams["SecretToken"] = input.SecretToken;
  }
  return bodyParams;
};

const serializeAws_json1_1WebhookDefinition = (
  input: WebhookDefinition,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.authentication !== undefined) {
    bodyParams["authentication"] = input.authentication;
  }
  if (input.authenticationConfiguration !== undefined) {
    bodyParams[
      "authenticationConfiguration"
    ] = serializeAws_json1_1WebhookAuthConfiguration(
      input.authenticationConfiguration,
      context
    );
  }
  if (input.filters !== undefined) {
    bodyParams["filters"] = serializeAws_json1_1WebhookFilters(
      input.filters,
      context
    );
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.targetAction !== undefined) {
    bodyParams["targetAction"] = input.targetAction;
  }
  if (input.targetPipeline !== undefined) {
    bodyParams["targetPipeline"] = input.targetPipeline;
  }
  return bodyParams;
};

const serializeAws_json1_1WebhookFilterRule = (
  input: WebhookFilterRule,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.jsonPath !== undefined) {
    bodyParams["jsonPath"] = input.jsonPath;
  }
  if (input.matchEquals !== undefined) {
    bodyParams["matchEquals"] = input.matchEquals;
  }
  return bodyParams;
};

const serializeAws_json1_1WebhookFilters = (
  input: Array<WebhookFilterRule>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1WebhookFilterRule(entry, context));
  }
  return contents;
};

const serializeAws_json1_1ActionConfigurationMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_json1_1ActionTypeId = (
  input: ActionTypeId,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.category !== undefined) {
    bodyParams["category"] = input.category;
  }
  if (input.owner !== undefined) {
    bodyParams["owner"] = input.owner;
  }
  if (input.provider !== undefined) {
    bodyParams["provider"] = input.provider;
  }
  if (input.version !== undefined) {
    bodyParams["version"] = input.version;
  }
  return bodyParams;
};

const serializeAws_json1_1CurrentRevision = (
  input: CurrentRevision,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.changeIdentifier !== undefined) {
    bodyParams["changeIdentifier"] = input.changeIdentifier;
  }
  if (input.created !== undefined) {
    bodyParams["created"] = Math.round(input.created.getTime() / 1000);
  }
  if (input.revision !== undefined) {
    bodyParams["revision"] = input.revision;
  }
  if (input.revisionSummary !== undefined) {
    bodyParams["revisionSummary"] = input.revisionSummary;
  }
  return bodyParams;
};

const serializeAws_json1_1EncryptionKey = (
  input: EncryptionKey,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.id !== undefined) {
    bodyParams["id"] = input.id;
  }
  if (input.type !== undefined) {
    bodyParams["type"] = input.type;
  }
  return bodyParams;
};

const serializeAws_json1_1ExecutionDetails = (
  input: ExecutionDetails,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.externalExecutionId !== undefined) {
    bodyParams["externalExecutionId"] = input.externalExecutionId;
  }
  if (input.percentComplete !== undefined) {
    bodyParams["percentComplete"] = input.percentComplete;
  }
  if (input.summary !== undefined) {
    bodyParams["summary"] = input.summary;
  }
  return bodyParams;
};

const serializeAws_json1_1FailureDetails = (
  input: FailureDetails,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.externalExecutionId !== undefined) {
    bodyParams["externalExecutionId"] = input.externalExecutionId;
  }
  if (input.message !== undefined) {
    bodyParams["message"] = input.message;
  }
  if (input.type !== undefined) {
    bodyParams["type"] = input.type;
  }
  return bodyParams;
};

const serializeAws_json1_1OutputVariablesMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_json1_1QueryParamMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const deserializeAws_json1_1AcknowledgeJobOutput = (
  output: any,
  context: __SerdeContext
): AcknowledgeJobOutput => {
  let contents: any = {
    __type: "AcknowledgeJobOutput",
    status: undefined
  };
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  return contents;
};

const deserializeAws_json1_1AcknowledgeThirdPartyJobOutput = (
  output: any,
  context: __SerdeContext
): AcknowledgeThirdPartyJobOutput => {
  let contents: any = {
    __type: "AcknowledgeThirdPartyJobOutput",
    status: undefined
  };
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  return contents;
};

const deserializeAws_json1_1ActionConfigurationProperty = (
  output: any,
  context: __SerdeContext
): ActionConfigurationProperty => {
  let contents: any = {
    __type: "ActionConfigurationProperty",
    description: undefined,
    key: undefined,
    name: undefined,
    queryable: undefined,
    required: undefined,
    secret: undefined,
    type: undefined
  };
  if (output.description !== undefined && output.description !== null) {
    contents.description = output.description;
  }
  if (output.key !== undefined && output.key !== null) {
    contents.key = output.key;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.queryable !== undefined && output.queryable !== null) {
    contents.queryable = output.queryable;
  }
  if (output.required !== undefined && output.required !== null) {
    contents.required = output.required;
  }
  if (output.secret !== undefined && output.secret !== null) {
    contents.secret = output.secret;
  }
  if (output.type !== undefined && output.type !== null) {
    contents.type = output.type;
  }
  return contents;
};

const deserializeAws_json1_1ActionConfigurationPropertyList = (
  output: any,
  context: __SerdeContext
): Array<ActionConfigurationProperty> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ActionConfigurationProperty(entry, context)
  );
};

const deserializeAws_json1_1ActionDeclaration = (
  output: any,
  context: __SerdeContext
): ActionDeclaration => {
  let contents: any = {
    __type: "ActionDeclaration",
    actionTypeId: undefined,
    configuration: undefined,
    inputArtifacts: undefined,
    name: undefined,
    namespace: undefined,
    outputArtifacts: undefined,
    region: undefined,
    roleArn: undefined,
    runOrder: undefined
  };
  if (output.actionTypeId !== undefined && output.actionTypeId !== null) {
    contents.actionTypeId = deserializeAws_json1_1ActionTypeId(
      output.actionTypeId,
      context
    );
  }
  if (output.configuration !== undefined && output.configuration !== null) {
    contents.configuration = deserializeAws_json1_1ActionConfigurationMap(
      output.configuration,
      context
    );
  }
  if (output.inputArtifacts !== undefined && output.inputArtifacts !== null) {
    contents.inputArtifacts = deserializeAws_json1_1InputArtifactList(
      output.inputArtifacts,
      context
    );
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.namespace !== undefined && output.namespace !== null) {
    contents.namespace = output.namespace;
  }
  if (output.outputArtifacts !== undefined && output.outputArtifacts !== null) {
    contents.outputArtifacts = deserializeAws_json1_1OutputArtifactList(
      output.outputArtifacts,
      context
    );
  }
  if (output.region !== undefined && output.region !== null) {
    contents.region = output.region;
  }
  if (output.roleArn !== undefined && output.roleArn !== null) {
    contents.roleArn = output.roleArn;
  }
  if (output.runOrder !== undefined && output.runOrder !== null) {
    contents.runOrder = output.runOrder;
  }
  return contents;
};

const deserializeAws_json1_1ActionExecution = (
  output: any,
  context: __SerdeContext
): ActionExecution => {
  let contents: any = {
    __type: "ActionExecution",
    errorDetails: undefined,
    externalExecutionId: undefined,
    externalExecutionUrl: undefined,
    lastStatusChange: undefined,
    lastUpdatedBy: undefined,
    percentComplete: undefined,
    status: undefined,
    summary: undefined,
    token: undefined
  };
  if (output.errorDetails !== undefined && output.errorDetails !== null) {
    contents.errorDetails = deserializeAws_json1_1ErrorDetails(
      output.errorDetails,
      context
    );
  }
  if (
    output.externalExecutionId !== undefined &&
    output.externalExecutionId !== null
  ) {
    contents.externalExecutionId = output.externalExecutionId;
  }
  if (
    output.externalExecutionUrl !== undefined &&
    output.externalExecutionUrl !== null
  ) {
    contents.externalExecutionUrl = output.externalExecutionUrl;
  }
  if (
    output.lastStatusChange !== undefined &&
    output.lastStatusChange !== null
  ) {
    contents.lastStatusChange = new Date(
      Math.round(output.lastStatusChange * 1000)
    );
  }
  if (output.lastUpdatedBy !== undefined && output.lastUpdatedBy !== null) {
    contents.lastUpdatedBy = output.lastUpdatedBy;
  }
  if (output.percentComplete !== undefined && output.percentComplete !== null) {
    contents.percentComplete = output.percentComplete;
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  if (output.summary !== undefined && output.summary !== null) {
    contents.summary = output.summary;
  }
  if (output.token !== undefined && output.token !== null) {
    contents.token = output.token;
  }
  return contents;
};

const deserializeAws_json1_1ActionExecutionDetail = (
  output: any,
  context: __SerdeContext
): ActionExecutionDetail => {
  let contents: any = {
    __type: "ActionExecutionDetail",
    actionExecutionId: undefined,
    actionName: undefined,
    input: undefined,
    lastUpdateTime: undefined,
    output: undefined,
    pipelineExecutionId: undefined,
    pipelineVersion: undefined,
    stageName: undefined,
    startTime: undefined,
    status: undefined
  };
  if (
    output.actionExecutionId !== undefined &&
    output.actionExecutionId !== null
  ) {
    contents.actionExecutionId = output.actionExecutionId;
  }
  if (output.actionName !== undefined && output.actionName !== null) {
    contents.actionName = output.actionName;
  }
  if (output.input !== undefined && output.input !== null) {
    contents.input = deserializeAws_json1_1ActionExecutionInput(
      output.input,
      context
    );
  }
  if (output.lastUpdateTime !== undefined && output.lastUpdateTime !== null) {
    contents.lastUpdateTime = new Date(
      Math.round(output.lastUpdateTime * 1000)
    );
  }
  if (output.output !== undefined && output.output !== null) {
    contents.output = deserializeAws_json1_1ActionExecutionOutput(
      output.output,
      context
    );
  }
  if (
    output.pipelineExecutionId !== undefined &&
    output.pipelineExecutionId !== null
  ) {
    contents.pipelineExecutionId = output.pipelineExecutionId;
  }
  if (output.pipelineVersion !== undefined && output.pipelineVersion !== null) {
    contents.pipelineVersion = output.pipelineVersion;
  }
  if (output.stageName !== undefined && output.stageName !== null) {
    contents.stageName = output.stageName;
  }
  if (output.startTime !== undefined && output.startTime !== null) {
    contents.startTime = new Date(Math.round(output.startTime * 1000));
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  return contents;
};

const deserializeAws_json1_1ActionExecutionDetailList = (
  output: any,
  context: __SerdeContext
): Array<ActionExecutionDetail> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ActionExecutionDetail(entry, context)
  );
};

const deserializeAws_json1_1ActionExecutionInput = (
  output: any,
  context: __SerdeContext
): ActionExecutionInput => {
  let contents: any = {
    __type: "ActionExecutionInput",
    actionTypeId: undefined,
    configuration: undefined,
    inputArtifacts: undefined,
    namespace: undefined,
    region: undefined,
    resolvedConfiguration: undefined,
    roleArn: undefined
  };
  if (output.actionTypeId !== undefined && output.actionTypeId !== null) {
    contents.actionTypeId = deserializeAws_json1_1ActionTypeId(
      output.actionTypeId,
      context
    );
  }
  if (output.configuration !== undefined && output.configuration !== null) {
    contents.configuration = deserializeAws_json1_1ActionConfigurationMap(
      output.configuration,
      context
    );
  }
  if (output.inputArtifacts !== undefined && output.inputArtifacts !== null) {
    contents.inputArtifacts = deserializeAws_json1_1ArtifactDetailList(
      output.inputArtifacts,
      context
    );
  }
  if (output.namespace !== undefined && output.namespace !== null) {
    contents.namespace = output.namespace;
  }
  if (output.region !== undefined && output.region !== null) {
    contents.region = output.region;
  }
  if (
    output.resolvedConfiguration !== undefined &&
    output.resolvedConfiguration !== null
  ) {
    contents.resolvedConfiguration = deserializeAws_json1_1ResolvedActionConfigurationMap(
      output.resolvedConfiguration,
      context
    );
  }
  if (output.roleArn !== undefined && output.roleArn !== null) {
    contents.roleArn = output.roleArn;
  }
  return contents;
};

const deserializeAws_json1_1ActionExecutionOutput = (
  output: any,
  context: __SerdeContext
): ActionExecutionOutput => {
  let contents: any = {
    __type: "ActionExecutionOutput",
    executionResult: undefined,
    outputArtifacts: undefined,
    outputVariables: undefined
  };
  if (output.executionResult !== undefined && output.executionResult !== null) {
    contents.executionResult = deserializeAws_json1_1ActionExecutionResult(
      output.executionResult,
      context
    );
  }
  if (output.outputArtifacts !== undefined && output.outputArtifacts !== null) {
    contents.outputArtifacts = deserializeAws_json1_1ArtifactDetailList(
      output.outputArtifacts,
      context
    );
  }
  if (output.outputVariables !== undefined && output.outputVariables !== null) {
    contents.outputVariables = deserializeAws_json1_1OutputVariablesMap(
      output.outputVariables,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ActionExecutionResult = (
  output: any,
  context: __SerdeContext
): ActionExecutionResult => {
  let contents: any = {
    __type: "ActionExecutionResult",
    externalExecutionId: undefined,
    externalExecutionSummary: undefined,
    externalExecutionUrl: undefined
  };
  if (
    output.externalExecutionId !== undefined &&
    output.externalExecutionId !== null
  ) {
    contents.externalExecutionId = output.externalExecutionId;
  }
  if (
    output.externalExecutionSummary !== undefined &&
    output.externalExecutionSummary !== null
  ) {
    contents.externalExecutionSummary = output.externalExecutionSummary;
  }
  if (
    output.externalExecutionUrl !== undefined &&
    output.externalExecutionUrl !== null
  ) {
    contents.externalExecutionUrl = output.externalExecutionUrl;
  }
  return contents;
};

const deserializeAws_json1_1ActionNotFoundException = (
  output: any,
  context: __SerdeContext
): ActionNotFoundException => {
  let contents: any = {
    __type: "ActionNotFoundException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ActionRevision = (
  output: any,
  context: __SerdeContext
): ActionRevision => {
  let contents: any = {
    __type: "ActionRevision",
    created: undefined,
    revisionChangeId: undefined,
    revisionId: undefined
  };
  if (output.created !== undefined && output.created !== null) {
    contents.created = new Date(Math.round(output.created * 1000));
  }
  if (
    output.revisionChangeId !== undefined &&
    output.revisionChangeId !== null
  ) {
    contents.revisionChangeId = output.revisionChangeId;
  }
  if (output.revisionId !== undefined && output.revisionId !== null) {
    contents.revisionId = output.revisionId;
  }
  return contents;
};

const deserializeAws_json1_1ActionState = (
  output: any,
  context: __SerdeContext
): ActionState => {
  let contents: any = {
    __type: "ActionState",
    actionName: undefined,
    currentRevision: undefined,
    entityUrl: undefined,
    latestExecution: undefined,
    revisionUrl: undefined
  };
  if (output.actionName !== undefined && output.actionName !== null) {
    contents.actionName = output.actionName;
  }
  if (output.currentRevision !== undefined && output.currentRevision !== null) {
    contents.currentRevision = deserializeAws_json1_1ActionRevision(
      output.currentRevision,
      context
    );
  }
  if (output.entityUrl !== undefined && output.entityUrl !== null) {
    contents.entityUrl = output.entityUrl;
  }
  if (output.latestExecution !== undefined && output.latestExecution !== null) {
    contents.latestExecution = deserializeAws_json1_1ActionExecution(
      output.latestExecution,
      context
    );
  }
  if (output.revisionUrl !== undefined && output.revisionUrl !== null) {
    contents.revisionUrl = output.revisionUrl;
  }
  return contents;
};

const deserializeAws_json1_1ActionStateList = (
  output: any,
  context: __SerdeContext
): Array<ActionState> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ActionState(entry, context)
  );
};

const deserializeAws_json1_1ActionType = (
  output: any,
  context: __SerdeContext
): ActionType => {
  let contents: any = {
    __type: "ActionType",
    actionConfigurationProperties: undefined,
    id: undefined,
    inputArtifactDetails: undefined,
    outputArtifactDetails: undefined,
    settings: undefined
  };
  if (
    output.actionConfigurationProperties !== undefined &&
    output.actionConfigurationProperties !== null
  ) {
    contents.actionConfigurationProperties = deserializeAws_json1_1ActionConfigurationPropertyList(
      output.actionConfigurationProperties,
      context
    );
  }
  if (output.id !== undefined && output.id !== null) {
    contents.id = deserializeAws_json1_1ActionTypeId(output.id, context);
  }
  if (
    output.inputArtifactDetails !== undefined &&
    output.inputArtifactDetails !== null
  ) {
    contents.inputArtifactDetails = deserializeAws_json1_1ArtifactDetails(
      output.inputArtifactDetails,
      context
    );
  }
  if (
    output.outputArtifactDetails !== undefined &&
    output.outputArtifactDetails !== null
  ) {
    contents.outputArtifactDetails = deserializeAws_json1_1ArtifactDetails(
      output.outputArtifactDetails,
      context
    );
  }
  if (output.settings !== undefined && output.settings !== null) {
    contents.settings = deserializeAws_json1_1ActionTypeSettings(
      output.settings,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ActionTypeList = (
  output: any,
  context: __SerdeContext
): Array<ActionType> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ActionType(entry, context)
  );
};

const deserializeAws_json1_1ActionTypeSettings = (
  output: any,
  context: __SerdeContext
): ActionTypeSettings => {
  let contents: any = {
    __type: "ActionTypeSettings",
    entityUrlTemplate: undefined,
    executionUrlTemplate: undefined,
    revisionUrlTemplate: undefined,
    thirdPartyConfigurationUrl: undefined
  };
  if (
    output.entityUrlTemplate !== undefined &&
    output.entityUrlTemplate !== null
  ) {
    contents.entityUrlTemplate = output.entityUrlTemplate;
  }
  if (
    output.executionUrlTemplate !== undefined &&
    output.executionUrlTemplate !== null
  ) {
    contents.executionUrlTemplate = output.executionUrlTemplate;
  }
  if (
    output.revisionUrlTemplate !== undefined &&
    output.revisionUrlTemplate !== null
  ) {
    contents.revisionUrlTemplate = output.revisionUrlTemplate;
  }
  if (
    output.thirdPartyConfigurationUrl !== undefined &&
    output.thirdPartyConfigurationUrl !== null
  ) {
    contents.thirdPartyConfigurationUrl = output.thirdPartyConfigurationUrl;
  }
  return contents;
};

const deserializeAws_json1_1ApprovalAlreadyCompletedException = (
  output: any,
  context: __SerdeContext
): ApprovalAlreadyCompletedException => {
  let contents: any = {
    __type: "ApprovalAlreadyCompletedException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ArtifactDetail = (
  output: any,
  context: __SerdeContext
): ArtifactDetail => {
  let contents: any = {
    __type: "ArtifactDetail",
    name: undefined,
    s3location: undefined
  };
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.s3location !== undefined && output.s3location !== null) {
    contents.s3location = deserializeAws_json1_1S3Location(
      output.s3location,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ArtifactDetailList = (
  output: any,
  context: __SerdeContext
): Array<ArtifactDetail> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ArtifactDetail(entry, context)
  );
};

const deserializeAws_json1_1ArtifactDetails = (
  output: any,
  context: __SerdeContext
): ArtifactDetails => {
  let contents: any = {
    __type: "ArtifactDetails",
    maximumCount: undefined,
    minimumCount: undefined
  };
  if (output.maximumCount !== undefined && output.maximumCount !== null) {
    contents.maximumCount = output.maximumCount;
  }
  if (output.minimumCount !== undefined && output.minimumCount !== null) {
    contents.minimumCount = output.minimumCount;
  }
  return contents;
};

const deserializeAws_json1_1ArtifactRevision = (
  output: any,
  context: __SerdeContext
): ArtifactRevision => {
  let contents: any = {
    __type: "ArtifactRevision",
    created: undefined,
    name: undefined,
    revisionChangeIdentifier: undefined,
    revisionId: undefined,
    revisionSummary: undefined,
    revisionUrl: undefined
  };
  if (output.created !== undefined && output.created !== null) {
    contents.created = new Date(Math.round(output.created * 1000));
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (
    output.revisionChangeIdentifier !== undefined &&
    output.revisionChangeIdentifier !== null
  ) {
    contents.revisionChangeIdentifier = output.revisionChangeIdentifier;
  }
  if (output.revisionId !== undefined && output.revisionId !== null) {
    contents.revisionId = output.revisionId;
  }
  if (output.revisionSummary !== undefined && output.revisionSummary !== null) {
    contents.revisionSummary = output.revisionSummary;
  }
  if (output.revisionUrl !== undefined && output.revisionUrl !== null) {
    contents.revisionUrl = output.revisionUrl;
  }
  return contents;
};

const deserializeAws_json1_1ArtifactRevisionList = (
  output: any,
  context: __SerdeContext
): Array<ArtifactRevision> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ArtifactRevision(entry, context)
  );
};

const deserializeAws_json1_1ArtifactStore = (
  output: any,
  context: __SerdeContext
): ArtifactStore => {
  let contents: any = {
    __type: "ArtifactStore",
    encryptionKey: undefined,
    location: undefined,
    type: undefined
  };
  if (output.encryptionKey !== undefined && output.encryptionKey !== null) {
    contents.encryptionKey = deserializeAws_json1_1EncryptionKey(
      output.encryptionKey,
      context
    );
  }
  if (output.location !== undefined && output.location !== null) {
    contents.location = output.location;
  }
  if (output.type !== undefined && output.type !== null) {
    contents.type = output.type;
  }
  return contents;
};

const deserializeAws_json1_1ArtifactStoreMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: ArtifactStore } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = deserializeAws_json1_1ArtifactStore(output[key], context);
  });
  return mapParams;
};

const deserializeAws_json1_1BlockerDeclaration = (
  output: any,
  context: __SerdeContext
): BlockerDeclaration => {
  let contents: any = {
    __type: "BlockerDeclaration",
    name: undefined,
    type: undefined
  };
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.type !== undefined && output.type !== null) {
    contents.type = output.type;
  }
  return contents;
};

const deserializeAws_json1_1ConcurrentModificationException = (
  output: any,
  context: __SerdeContext
): ConcurrentModificationException => {
  let contents: any = {
    __type: "ConcurrentModificationException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1CreateCustomActionTypeOutput = (
  output: any,
  context: __SerdeContext
): CreateCustomActionTypeOutput => {
  let contents: any = {
    __type: "CreateCustomActionTypeOutput",
    actionType: undefined,
    tags: undefined
  };
  if (output.actionType !== undefined && output.actionType !== null) {
    contents.actionType = deserializeAws_json1_1ActionType(
      output.actionType,
      context
    );
  }
  if (output.tags !== undefined && output.tags !== null) {
    contents.tags = deserializeAws_json1_1TagList(output.tags, context);
  }
  return contents;
};

const deserializeAws_json1_1CreatePipelineOutput = (
  output: any,
  context: __SerdeContext
): CreatePipelineOutput => {
  let contents: any = {
    __type: "CreatePipelineOutput",
    pipeline: undefined,
    tags: undefined
  };
  if (output.pipeline !== undefined && output.pipeline !== null) {
    contents.pipeline = deserializeAws_json1_1PipelineDeclaration(
      output.pipeline,
      context
    );
  }
  if (output.tags !== undefined && output.tags !== null) {
    contents.tags = deserializeAws_json1_1TagList(output.tags, context);
  }
  return contents;
};

const deserializeAws_json1_1DeleteWebhookOutput = (
  output: any,
  context: __SerdeContext
): DeleteWebhookOutput => {
  let contents: any = {
    __type: "DeleteWebhookOutput"
  };
  return contents;
};

const deserializeAws_json1_1DeregisterWebhookWithThirdPartyOutput = (
  output: any,
  context: __SerdeContext
): DeregisterWebhookWithThirdPartyOutput => {
  let contents: any = {
    __type: "DeregisterWebhookWithThirdPartyOutput"
  };
  return contents;
};

const deserializeAws_json1_1DuplicatedStopRequestException = (
  output: any,
  context: __SerdeContext
): DuplicatedStopRequestException => {
  let contents: any = {
    __type: "DuplicatedStopRequestException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ErrorDetails = (
  output: any,
  context: __SerdeContext
): ErrorDetails => {
  let contents: any = {
    __type: "ErrorDetails",
    code: undefined,
    message: undefined
  };
  if (output.code !== undefined && output.code !== null) {
    contents.code = output.code;
  }
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ExecutionTrigger = (
  output: any,
  context: __SerdeContext
): ExecutionTrigger => {
  let contents: any = {
    __type: "ExecutionTrigger",
    triggerDetail: undefined,
    triggerType: undefined
  };
  if (output.triggerDetail !== undefined && output.triggerDetail !== null) {
    contents.triggerDetail = output.triggerDetail;
  }
  if (output.triggerType !== undefined && output.triggerType !== null) {
    contents.triggerType = output.triggerType;
  }
  return contents;
};

const deserializeAws_json1_1GetJobDetailsOutput = (
  output: any,
  context: __SerdeContext
): GetJobDetailsOutput => {
  let contents: any = {
    __type: "GetJobDetailsOutput",
    jobDetails: undefined
  };
  if (output.jobDetails !== undefined && output.jobDetails !== null) {
    contents.jobDetails = deserializeAws_json1_1JobDetails(
      output.jobDetails,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetPipelineExecutionOutput = (
  output: any,
  context: __SerdeContext
): GetPipelineExecutionOutput => {
  let contents: any = {
    __type: "GetPipelineExecutionOutput",
    pipelineExecution: undefined
  };
  if (
    output.pipelineExecution !== undefined &&
    output.pipelineExecution !== null
  ) {
    contents.pipelineExecution = deserializeAws_json1_1PipelineExecution(
      output.pipelineExecution,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetPipelineOutput = (
  output: any,
  context: __SerdeContext
): GetPipelineOutput => {
  let contents: any = {
    __type: "GetPipelineOutput",
    metadata: undefined,
    pipeline: undefined
  };
  if (output.metadata !== undefined && output.metadata !== null) {
    contents.metadata = deserializeAws_json1_1PipelineMetadata(
      output.metadata,
      context
    );
  }
  if (output.pipeline !== undefined && output.pipeline !== null) {
    contents.pipeline = deserializeAws_json1_1PipelineDeclaration(
      output.pipeline,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetPipelineStateOutput = (
  output: any,
  context: __SerdeContext
): GetPipelineStateOutput => {
  let contents: any = {
    __type: "GetPipelineStateOutput",
    created: undefined,
    pipelineName: undefined,
    pipelineVersion: undefined,
    stageStates: undefined,
    updated: undefined
  };
  if (output.created !== undefined && output.created !== null) {
    contents.created = new Date(Math.round(output.created * 1000));
  }
  if (output.pipelineName !== undefined && output.pipelineName !== null) {
    contents.pipelineName = output.pipelineName;
  }
  if (output.pipelineVersion !== undefined && output.pipelineVersion !== null) {
    contents.pipelineVersion = output.pipelineVersion;
  }
  if (output.stageStates !== undefined && output.stageStates !== null) {
    contents.stageStates = deserializeAws_json1_1StageStateList(
      output.stageStates,
      context
    );
  }
  if (output.updated !== undefined && output.updated !== null) {
    contents.updated = new Date(Math.round(output.updated * 1000));
  }
  return contents;
};

const deserializeAws_json1_1GetThirdPartyJobDetailsOutput = (
  output: any,
  context: __SerdeContext
): GetThirdPartyJobDetailsOutput => {
  let contents: any = {
    __type: "GetThirdPartyJobDetailsOutput",
    jobDetails: undefined
  };
  if (output.jobDetails !== undefined && output.jobDetails !== null) {
    contents.jobDetails = deserializeAws_json1_1ThirdPartyJobDetails(
      output.jobDetails,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1InputArtifact = (
  output: any,
  context: __SerdeContext
): InputArtifact => {
  let contents: any = {
    __type: "InputArtifact",
    name: undefined
  };
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  return contents;
};

const deserializeAws_json1_1InputArtifactList = (
  output: any,
  context: __SerdeContext
): Array<InputArtifact> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1InputArtifact(entry, context)
  );
};

const deserializeAws_json1_1InvalidActionDeclarationException = (
  output: any,
  context: __SerdeContext
): InvalidActionDeclarationException => {
  let contents: any = {
    __type: "InvalidActionDeclarationException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidApprovalTokenException = (
  output: any,
  context: __SerdeContext
): InvalidApprovalTokenException => {
  let contents: any = {
    __type: "InvalidApprovalTokenException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidArnException = (
  output: any,
  context: __SerdeContext
): InvalidArnException => {
  let contents: any = {
    __type: "InvalidArnException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidBlockerDeclarationException = (
  output: any,
  context: __SerdeContext
): InvalidBlockerDeclarationException => {
  let contents: any = {
    __type: "InvalidBlockerDeclarationException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidClientTokenException = (
  output: any,
  context: __SerdeContext
): InvalidClientTokenException => {
  let contents: any = {
    __type: "InvalidClientTokenException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidJobException = (
  output: any,
  context: __SerdeContext
): InvalidJobException => {
  let contents: any = {
    __type: "InvalidJobException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidNextTokenException = (
  output: any,
  context: __SerdeContext
): InvalidNextTokenException => {
  let contents: any = {
    __type: "InvalidNextTokenException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidStageDeclarationException = (
  output: any,
  context: __SerdeContext
): InvalidStageDeclarationException => {
  let contents: any = {
    __type: "InvalidStageDeclarationException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidStructureException = (
  output: any,
  context: __SerdeContext
): InvalidStructureException => {
  let contents: any = {
    __type: "InvalidStructureException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidTagsException = (
  output: any,
  context: __SerdeContext
): InvalidTagsException => {
  let contents: any = {
    __type: "InvalidTagsException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidWebhookAuthenticationParametersException = (
  output: any,
  context: __SerdeContext
): InvalidWebhookAuthenticationParametersException => {
  let contents: any = {
    __type: "InvalidWebhookAuthenticationParametersException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidWebhookFilterPatternException = (
  output: any,
  context: __SerdeContext
): InvalidWebhookFilterPatternException => {
  let contents: any = {
    __type: "InvalidWebhookFilterPatternException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1Job = (
  output: any,
  context: __SerdeContext
): Job => {
  let contents: any = {
    __type: "Job",
    accountId: undefined,
    data: undefined,
    id: undefined,
    nonce: undefined
  };
  if (output.accountId !== undefined && output.accountId !== null) {
    contents.accountId = output.accountId;
  }
  if (output.data !== undefined && output.data !== null) {
    contents.data = deserializeAws_json1_1JobData(output.data, context);
  }
  if (output.id !== undefined && output.id !== null) {
    contents.id = output.id;
  }
  if (output.nonce !== undefined && output.nonce !== null) {
    contents.nonce = output.nonce;
  }
  return contents;
};

const deserializeAws_json1_1JobData = (
  output: any,
  context: __SerdeContext
): JobData => {
  let contents: any = {
    __type: "JobData",
    actionConfiguration: undefined,
    actionTypeId: undefined,
    artifactCredentials: undefined,
    continuationToken: undefined,
    encryptionKey: undefined,
    inputArtifacts: undefined,
    outputArtifacts: undefined,
    pipelineContext: undefined
  };
  if (
    output.actionConfiguration !== undefined &&
    output.actionConfiguration !== null
  ) {
    contents.actionConfiguration = deserializeAws_json1_1ActionConfiguration(
      output.actionConfiguration,
      context
    );
  }
  if (output.actionTypeId !== undefined && output.actionTypeId !== null) {
    contents.actionTypeId = deserializeAws_json1_1ActionTypeId(
      output.actionTypeId,
      context
    );
  }
  if (
    output.artifactCredentials !== undefined &&
    output.artifactCredentials !== null
  ) {
    contents.artifactCredentials = deserializeAws_json1_1AWSSessionCredentials(
      output.artifactCredentials,
      context
    );
  }
  if (
    output.continuationToken !== undefined &&
    output.continuationToken !== null
  ) {
    contents.continuationToken = output.continuationToken;
  }
  if (output.encryptionKey !== undefined && output.encryptionKey !== null) {
    contents.encryptionKey = deserializeAws_json1_1EncryptionKey(
      output.encryptionKey,
      context
    );
  }
  if (output.inputArtifacts !== undefined && output.inputArtifacts !== null) {
    contents.inputArtifacts = deserializeAws_json1_1ArtifactList(
      output.inputArtifacts,
      context
    );
  }
  if (output.outputArtifacts !== undefined && output.outputArtifacts !== null) {
    contents.outputArtifacts = deserializeAws_json1_1ArtifactList(
      output.outputArtifacts,
      context
    );
  }
  if (output.pipelineContext !== undefined && output.pipelineContext !== null) {
    contents.pipelineContext = deserializeAws_json1_1PipelineContext(
      output.pipelineContext,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1JobDetails = (
  output: any,
  context: __SerdeContext
): JobDetails => {
  let contents: any = {
    __type: "JobDetails",
    accountId: undefined,
    data: undefined,
    id: undefined
  };
  if (output.accountId !== undefined && output.accountId !== null) {
    contents.accountId = output.accountId;
  }
  if (output.data !== undefined && output.data !== null) {
    contents.data = deserializeAws_json1_1JobData(output.data, context);
  }
  if (output.id !== undefined && output.id !== null) {
    contents.id = output.id;
  }
  return contents;
};

const deserializeAws_json1_1JobList = (
  output: any,
  context: __SerdeContext
): Array<Job> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Job(entry, context)
  );
};

const deserializeAws_json1_1LimitExceededException = (
  output: any,
  context: __SerdeContext
): LimitExceededException => {
  let contents: any = {
    __type: "LimitExceededException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ListActionExecutionsOutput = (
  output: any,
  context: __SerdeContext
): ListActionExecutionsOutput => {
  let contents: any = {
    __type: "ListActionExecutionsOutput",
    actionExecutionDetails: undefined,
    nextToken: undefined
  };
  if (
    output.actionExecutionDetails !== undefined &&
    output.actionExecutionDetails !== null
  ) {
    contents.actionExecutionDetails = deserializeAws_json1_1ActionExecutionDetailList(
      output.actionExecutionDetails,
      context
    );
  }
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListActionTypesOutput = (
  output: any,
  context: __SerdeContext
): ListActionTypesOutput => {
  let contents: any = {
    __type: "ListActionTypesOutput",
    actionTypes: undefined,
    nextToken: undefined
  };
  if (output.actionTypes !== undefined && output.actionTypes !== null) {
    contents.actionTypes = deserializeAws_json1_1ActionTypeList(
      output.actionTypes,
      context
    );
  }
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListPipelineExecutionsOutput = (
  output: any,
  context: __SerdeContext
): ListPipelineExecutionsOutput => {
  let contents: any = {
    __type: "ListPipelineExecutionsOutput",
    nextToken: undefined,
    pipelineExecutionSummaries: undefined
  };
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  if (
    output.pipelineExecutionSummaries !== undefined &&
    output.pipelineExecutionSummaries !== null
  ) {
    contents.pipelineExecutionSummaries = deserializeAws_json1_1PipelineExecutionSummaryList(
      output.pipelineExecutionSummaries,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ListPipelinesOutput = (
  output: any,
  context: __SerdeContext
): ListPipelinesOutput => {
  let contents: any = {
    __type: "ListPipelinesOutput",
    nextToken: undefined,
    pipelines: undefined
  };
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  if (output.pipelines !== undefined && output.pipelines !== null) {
    contents.pipelines = deserializeAws_json1_1PipelineList(
      output.pipelines,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ListTagsForResourceOutput = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceOutput => {
  let contents: any = {
    __type: "ListTagsForResourceOutput",
    nextToken: undefined,
    tags: undefined
  };
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  if (output.tags !== undefined && output.tags !== null) {
    contents.tags = deserializeAws_json1_1TagList(output.tags, context);
  }
  return contents;
};

const deserializeAws_json1_1ListWebhookItem = (
  output: any,
  context: __SerdeContext
): ListWebhookItem => {
  let contents: any = {
    __type: "ListWebhookItem",
    arn: undefined,
    definition: undefined,
    errorCode: undefined,
    errorMessage: undefined,
    lastTriggered: undefined,
    tags: undefined,
    url: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.arn = output.arn;
  }
  if (output.definition !== undefined && output.definition !== null) {
    contents.definition = deserializeAws_json1_1WebhookDefinition(
      output.definition,
      context
    );
  }
  if (output.errorCode !== undefined && output.errorCode !== null) {
    contents.errorCode = output.errorCode;
  }
  if (output.errorMessage !== undefined && output.errorMessage !== null) {
    contents.errorMessage = output.errorMessage;
  }
  if (output.lastTriggered !== undefined && output.lastTriggered !== null) {
    contents.lastTriggered = new Date(Math.round(output.lastTriggered * 1000));
  }
  if (output.tags !== undefined && output.tags !== null) {
    contents.tags = deserializeAws_json1_1TagList(output.tags, context);
  }
  if (output.url !== undefined && output.url !== null) {
    contents.url = output.url;
  }
  return contents;
};

const deserializeAws_json1_1ListWebhooksOutput = (
  output: any,
  context: __SerdeContext
): ListWebhooksOutput => {
  let contents: any = {
    __type: "ListWebhooksOutput",
    NextToken: undefined,
    webhooks: undefined
  };
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (output.webhooks !== undefined && output.webhooks !== null) {
    contents.webhooks = deserializeAws_json1_1WebhookList(
      output.webhooks,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1NotLatestPipelineExecutionException = (
  output: any,
  context: __SerdeContext
): NotLatestPipelineExecutionException => {
  let contents: any = {
    __type: "NotLatestPipelineExecutionException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1OutputArtifact = (
  output: any,
  context: __SerdeContext
): OutputArtifact => {
  let contents: any = {
    __type: "OutputArtifact",
    name: undefined
  };
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  return contents;
};

const deserializeAws_json1_1OutputArtifactList = (
  output: any,
  context: __SerdeContext
): Array<OutputArtifact> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1OutputArtifact(entry, context)
  );
};

const deserializeAws_json1_1PipelineDeclaration = (
  output: any,
  context: __SerdeContext
): PipelineDeclaration => {
  let contents: any = {
    __type: "PipelineDeclaration",
    artifactStore: undefined,
    artifactStores: undefined,
    name: undefined,
    roleArn: undefined,
    stages: undefined,
    version: undefined
  };
  if (output.artifactStore !== undefined && output.artifactStore !== null) {
    contents.artifactStore = deserializeAws_json1_1ArtifactStore(
      output.artifactStore,
      context
    );
  }
  if (output.artifactStores !== undefined && output.artifactStores !== null) {
    contents.artifactStores = deserializeAws_json1_1ArtifactStoreMap(
      output.artifactStores,
      context
    );
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.roleArn !== undefined && output.roleArn !== null) {
    contents.roleArn = output.roleArn;
  }
  if (output.stages !== undefined && output.stages !== null) {
    contents.stages = deserializeAws_json1_1PipelineStageDeclarationList(
      output.stages,
      context
    );
  }
  if (output.version !== undefined && output.version !== null) {
    contents.version = output.version;
  }
  return contents;
};

const deserializeAws_json1_1PipelineExecution = (
  output: any,
  context: __SerdeContext
): PipelineExecution => {
  let contents: any = {
    __type: "PipelineExecution",
    artifactRevisions: undefined,
    pipelineExecutionId: undefined,
    pipelineName: undefined,
    pipelineVersion: undefined,
    status: undefined
  };
  if (
    output.artifactRevisions !== undefined &&
    output.artifactRevisions !== null
  ) {
    contents.artifactRevisions = deserializeAws_json1_1ArtifactRevisionList(
      output.artifactRevisions,
      context
    );
  }
  if (
    output.pipelineExecutionId !== undefined &&
    output.pipelineExecutionId !== null
  ) {
    contents.pipelineExecutionId = output.pipelineExecutionId;
  }
  if (output.pipelineName !== undefined && output.pipelineName !== null) {
    contents.pipelineName = output.pipelineName;
  }
  if (output.pipelineVersion !== undefined && output.pipelineVersion !== null) {
    contents.pipelineVersion = output.pipelineVersion;
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  return contents;
};

const deserializeAws_json1_1PipelineExecutionNotFoundException = (
  output: any,
  context: __SerdeContext
): PipelineExecutionNotFoundException => {
  let contents: any = {
    __type: "PipelineExecutionNotFoundException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1PipelineExecutionNotStoppableException = (
  output: any,
  context: __SerdeContext
): PipelineExecutionNotStoppableException => {
  let contents: any = {
    __type: "PipelineExecutionNotStoppableException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1PipelineExecutionSummary = (
  output: any,
  context: __SerdeContext
): PipelineExecutionSummary => {
  let contents: any = {
    __type: "PipelineExecutionSummary",
    lastUpdateTime: undefined,
    pipelineExecutionId: undefined,
    sourceRevisions: undefined,
    startTime: undefined,
    status: undefined,
    stopTrigger: undefined,
    trigger: undefined
  };
  if (output.lastUpdateTime !== undefined && output.lastUpdateTime !== null) {
    contents.lastUpdateTime = new Date(
      Math.round(output.lastUpdateTime * 1000)
    );
  }
  if (
    output.pipelineExecutionId !== undefined &&
    output.pipelineExecutionId !== null
  ) {
    contents.pipelineExecutionId = output.pipelineExecutionId;
  }
  if (output.sourceRevisions !== undefined && output.sourceRevisions !== null) {
    contents.sourceRevisions = deserializeAws_json1_1SourceRevisionList(
      output.sourceRevisions,
      context
    );
  }
  if (output.startTime !== undefined && output.startTime !== null) {
    contents.startTime = new Date(Math.round(output.startTime * 1000));
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  if (output.stopTrigger !== undefined && output.stopTrigger !== null) {
    contents.stopTrigger = deserializeAws_json1_1StopExecutionTrigger(
      output.stopTrigger,
      context
    );
  }
  if (output.trigger !== undefined && output.trigger !== null) {
    contents.trigger = deserializeAws_json1_1ExecutionTrigger(
      output.trigger,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1PipelineExecutionSummaryList = (
  output: any,
  context: __SerdeContext
): Array<PipelineExecutionSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1PipelineExecutionSummary(entry, context)
  );
};

const deserializeAws_json1_1PipelineList = (
  output: any,
  context: __SerdeContext
): Array<PipelineSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1PipelineSummary(entry, context)
  );
};

const deserializeAws_json1_1PipelineMetadata = (
  output: any,
  context: __SerdeContext
): PipelineMetadata => {
  let contents: any = {
    __type: "PipelineMetadata",
    created: undefined,
    pipelineArn: undefined,
    updated: undefined
  };
  if (output.created !== undefined && output.created !== null) {
    contents.created = new Date(Math.round(output.created * 1000));
  }
  if (output.pipelineArn !== undefined && output.pipelineArn !== null) {
    contents.pipelineArn = output.pipelineArn;
  }
  if (output.updated !== undefined && output.updated !== null) {
    contents.updated = new Date(Math.round(output.updated * 1000));
  }
  return contents;
};

const deserializeAws_json1_1PipelineNameInUseException = (
  output: any,
  context: __SerdeContext
): PipelineNameInUseException => {
  let contents: any = {
    __type: "PipelineNameInUseException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1PipelineNotFoundException = (
  output: any,
  context: __SerdeContext
): PipelineNotFoundException => {
  let contents: any = {
    __type: "PipelineNotFoundException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1PipelineStageDeclarationList = (
  output: any,
  context: __SerdeContext
): Array<StageDeclaration> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1StageDeclaration(entry, context)
  );
};

const deserializeAws_json1_1PipelineSummary = (
  output: any,
  context: __SerdeContext
): PipelineSummary => {
  let contents: any = {
    __type: "PipelineSummary",
    created: undefined,
    name: undefined,
    updated: undefined,
    version: undefined
  };
  if (output.created !== undefined && output.created !== null) {
    contents.created = new Date(Math.round(output.created * 1000));
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.updated !== undefined && output.updated !== null) {
    contents.updated = new Date(Math.round(output.updated * 1000));
  }
  if (output.version !== undefined && output.version !== null) {
    contents.version = output.version;
  }
  return contents;
};

const deserializeAws_json1_1PipelineVersionNotFoundException = (
  output: any,
  context: __SerdeContext
): PipelineVersionNotFoundException => {
  let contents: any = {
    __type: "PipelineVersionNotFoundException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1PollForJobsOutput = (
  output: any,
  context: __SerdeContext
): PollForJobsOutput => {
  let contents: any = {
    __type: "PollForJobsOutput",
    jobs: undefined
  };
  if (output.jobs !== undefined && output.jobs !== null) {
    contents.jobs = deserializeAws_json1_1JobList(output.jobs, context);
  }
  return contents;
};

const deserializeAws_json1_1PollForThirdPartyJobsOutput = (
  output: any,
  context: __SerdeContext
): PollForThirdPartyJobsOutput => {
  let contents: any = {
    __type: "PollForThirdPartyJobsOutput",
    jobs: undefined
  };
  if (output.jobs !== undefined && output.jobs !== null) {
    contents.jobs = deserializeAws_json1_1ThirdPartyJobList(
      output.jobs,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1PutActionRevisionOutput = (
  output: any,
  context: __SerdeContext
): PutActionRevisionOutput => {
  let contents: any = {
    __type: "PutActionRevisionOutput",
    newRevision: undefined,
    pipelineExecutionId: undefined
  };
  if (output.newRevision !== undefined && output.newRevision !== null) {
    contents.newRevision = output.newRevision;
  }
  if (
    output.pipelineExecutionId !== undefined &&
    output.pipelineExecutionId !== null
  ) {
    contents.pipelineExecutionId = output.pipelineExecutionId;
  }
  return contents;
};

const deserializeAws_json1_1PutApprovalResultOutput = (
  output: any,
  context: __SerdeContext
): PutApprovalResultOutput => {
  let contents: any = {
    __type: "PutApprovalResultOutput",
    approvedAt: undefined
  };
  if (output.approvedAt !== undefined && output.approvedAt !== null) {
    contents.approvedAt = new Date(Math.round(output.approvedAt * 1000));
  }
  return contents;
};

const deserializeAws_json1_1PutWebhookOutput = (
  output: any,
  context: __SerdeContext
): PutWebhookOutput => {
  let contents: any = {
    __type: "PutWebhookOutput",
    webhook: undefined
  };
  if (output.webhook !== undefined && output.webhook !== null) {
    contents.webhook = deserializeAws_json1_1ListWebhookItem(
      output.webhook,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1RegisterWebhookWithThirdPartyOutput = (
  output: any,
  context: __SerdeContext
): RegisterWebhookWithThirdPartyOutput => {
  let contents: any = {
    __type: "RegisterWebhookWithThirdPartyOutput"
  };
  return contents;
};

const deserializeAws_json1_1ResolvedActionConfigurationMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_json1_1RetryStageExecutionOutput = (
  output: any,
  context: __SerdeContext
): RetryStageExecutionOutput => {
  let contents: any = {
    __type: "RetryStageExecutionOutput",
    pipelineExecutionId: undefined
  };
  if (
    output.pipelineExecutionId !== undefined &&
    output.pipelineExecutionId !== null
  ) {
    contents.pipelineExecutionId = output.pipelineExecutionId;
  }
  return contents;
};

const deserializeAws_json1_1S3Location = (
  output: any,
  context: __SerdeContext
): S3Location => {
  let contents: any = {
    __type: "S3Location",
    bucket: undefined,
    key: undefined
  };
  if (output.bucket !== undefined && output.bucket !== null) {
    contents.bucket = output.bucket;
  }
  if (output.key !== undefined && output.key !== null) {
    contents.key = output.key;
  }
  return contents;
};

const deserializeAws_json1_1SourceRevision = (
  output: any,
  context: __SerdeContext
): SourceRevision => {
  let contents: any = {
    __type: "SourceRevision",
    actionName: undefined,
    revisionId: undefined,
    revisionSummary: undefined,
    revisionUrl: undefined
  };
  if (output.actionName !== undefined && output.actionName !== null) {
    contents.actionName = output.actionName;
  }
  if (output.revisionId !== undefined && output.revisionId !== null) {
    contents.revisionId = output.revisionId;
  }
  if (output.revisionSummary !== undefined && output.revisionSummary !== null) {
    contents.revisionSummary = output.revisionSummary;
  }
  if (output.revisionUrl !== undefined && output.revisionUrl !== null) {
    contents.revisionUrl = output.revisionUrl;
  }
  return contents;
};

const deserializeAws_json1_1SourceRevisionList = (
  output: any,
  context: __SerdeContext
): Array<SourceRevision> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1SourceRevision(entry, context)
  );
};

const deserializeAws_json1_1StageActionDeclarationList = (
  output: any,
  context: __SerdeContext
): Array<ActionDeclaration> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ActionDeclaration(entry, context)
  );
};

const deserializeAws_json1_1StageBlockerDeclarationList = (
  output: any,
  context: __SerdeContext
): Array<BlockerDeclaration> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1BlockerDeclaration(entry, context)
  );
};

const deserializeAws_json1_1StageDeclaration = (
  output: any,
  context: __SerdeContext
): StageDeclaration => {
  let contents: any = {
    __type: "StageDeclaration",
    actions: undefined,
    blockers: undefined,
    name: undefined
  };
  if (output.actions !== undefined && output.actions !== null) {
    contents.actions = deserializeAws_json1_1StageActionDeclarationList(
      output.actions,
      context
    );
  }
  if (output.blockers !== undefined && output.blockers !== null) {
    contents.blockers = deserializeAws_json1_1StageBlockerDeclarationList(
      output.blockers,
      context
    );
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  return contents;
};

const deserializeAws_json1_1StageExecution = (
  output: any,
  context: __SerdeContext
): StageExecution => {
  let contents: any = {
    __type: "StageExecution",
    pipelineExecutionId: undefined,
    status: undefined
  };
  if (
    output.pipelineExecutionId !== undefined &&
    output.pipelineExecutionId !== null
  ) {
    contents.pipelineExecutionId = output.pipelineExecutionId;
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  return contents;
};

const deserializeAws_json1_1StageNotFoundException = (
  output: any,
  context: __SerdeContext
): StageNotFoundException => {
  let contents: any = {
    __type: "StageNotFoundException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1StageNotRetryableException = (
  output: any,
  context: __SerdeContext
): StageNotRetryableException => {
  let contents: any = {
    __type: "StageNotRetryableException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1StageState = (
  output: any,
  context: __SerdeContext
): StageState => {
  let contents: any = {
    __type: "StageState",
    actionStates: undefined,
    inboundTransitionState: undefined,
    latestExecution: undefined,
    stageName: undefined
  };
  if (output.actionStates !== undefined && output.actionStates !== null) {
    contents.actionStates = deserializeAws_json1_1ActionStateList(
      output.actionStates,
      context
    );
  }
  if (
    output.inboundTransitionState !== undefined &&
    output.inboundTransitionState !== null
  ) {
    contents.inboundTransitionState = deserializeAws_json1_1TransitionState(
      output.inboundTransitionState,
      context
    );
  }
  if (output.latestExecution !== undefined && output.latestExecution !== null) {
    contents.latestExecution = deserializeAws_json1_1StageExecution(
      output.latestExecution,
      context
    );
  }
  if (output.stageName !== undefined && output.stageName !== null) {
    contents.stageName = output.stageName;
  }
  return contents;
};

const deserializeAws_json1_1StageStateList = (
  output: any,
  context: __SerdeContext
): Array<StageState> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1StageState(entry, context)
  );
};

const deserializeAws_json1_1StartPipelineExecutionOutput = (
  output: any,
  context: __SerdeContext
): StartPipelineExecutionOutput => {
  let contents: any = {
    __type: "StartPipelineExecutionOutput",
    pipelineExecutionId: undefined
  };
  if (
    output.pipelineExecutionId !== undefined &&
    output.pipelineExecutionId !== null
  ) {
    contents.pipelineExecutionId = output.pipelineExecutionId;
  }
  return contents;
};

const deserializeAws_json1_1StopExecutionTrigger = (
  output: any,
  context: __SerdeContext
): StopExecutionTrigger => {
  let contents: any = {
    __type: "StopExecutionTrigger",
    reason: undefined
  };
  if (output.reason !== undefined && output.reason !== null) {
    contents.reason = output.reason;
  }
  return contents;
};

const deserializeAws_json1_1StopPipelineExecutionOutput = (
  output: any,
  context: __SerdeContext
): StopPipelineExecutionOutput => {
  let contents: any = {
    __type: "StopPipelineExecutionOutput",
    pipelineExecutionId: undefined
  };
  if (
    output.pipelineExecutionId !== undefined &&
    output.pipelineExecutionId !== null
  ) {
    contents.pipelineExecutionId = output.pipelineExecutionId;
  }
  return contents;
};

const deserializeAws_json1_1Tag = (
  output: any,
  context: __SerdeContext
): Tag => {
  let contents: any = {
    __type: "Tag",
    key: undefined,
    value: undefined
  };
  if (output.key !== undefined && output.key !== null) {
    contents.key = output.key;
  }
  if (output.value !== undefined && output.value !== null) {
    contents.value = output.value;
  }
  return contents;
};

const deserializeAws_json1_1TagList = (
  output: any,
  context: __SerdeContext
): Array<Tag> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Tag(entry, context)
  );
};

const deserializeAws_json1_1TagResourceOutput = (
  output: any,
  context: __SerdeContext
): TagResourceOutput => {
  let contents: any = {
    __type: "TagResourceOutput"
  };
  return contents;
};

const deserializeAws_json1_1ThirdPartyJob = (
  output: any,
  context: __SerdeContext
): ThirdPartyJob => {
  let contents: any = {
    __type: "ThirdPartyJob",
    clientId: undefined,
    jobId: undefined
  };
  if (output.clientId !== undefined && output.clientId !== null) {
    contents.clientId = output.clientId;
  }
  if (output.jobId !== undefined && output.jobId !== null) {
    contents.jobId = output.jobId;
  }
  return contents;
};

const deserializeAws_json1_1ThirdPartyJobData = (
  output: any,
  context: __SerdeContext
): ThirdPartyJobData => {
  let contents: any = {
    __type: "ThirdPartyJobData",
    actionConfiguration: undefined,
    actionTypeId: undefined,
    artifactCredentials: undefined,
    continuationToken: undefined,
    encryptionKey: undefined,
    inputArtifacts: undefined,
    outputArtifacts: undefined,
    pipelineContext: undefined
  };
  if (
    output.actionConfiguration !== undefined &&
    output.actionConfiguration !== null
  ) {
    contents.actionConfiguration = deserializeAws_json1_1ActionConfiguration(
      output.actionConfiguration,
      context
    );
  }
  if (output.actionTypeId !== undefined && output.actionTypeId !== null) {
    contents.actionTypeId = deserializeAws_json1_1ActionTypeId(
      output.actionTypeId,
      context
    );
  }
  if (
    output.artifactCredentials !== undefined &&
    output.artifactCredentials !== null
  ) {
    contents.artifactCredentials = deserializeAws_json1_1AWSSessionCredentials(
      output.artifactCredentials,
      context
    );
  }
  if (
    output.continuationToken !== undefined &&
    output.continuationToken !== null
  ) {
    contents.continuationToken = output.continuationToken;
  }
  if (output.encryptionKey !== undefined && output.encryptionKey !== null) {
    contents.encryptionKey = deserializeAws_json1_1EncryptionKey(
      output.encryptionKey,
      context
    );
  }
  if (output.inputArtifacts !== undefined && output.inputArtifacts !== null) {
    contents.inputArtifacts = deserializeAws_json1_1ArtifactList(
      output.inputArtifacts,
      context
    );
  }
  if (output.outputArtifacts !== undefined && output.outputArtifacts !== null) {
    contents.outputArtifacts = deserializeAws_json1_1ArtifactList(
      output.outputArtifacts,
      context
    );
  }
  if (output.pipelineContext !== undefined && output.pipelineContext !== null) {
    contents.pipelineContext = deserializeAws_json1_1PipelineContext(
      output.pipelineContext,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ThirdPartyJobDetails = (
  output: any,
  context: __SerdeContext
): ThirdPartyJobDetails => {
  let contents: any = {
    __type: "ThirdPartyJobDetails",
    data: undefined,
    id: undefined,
    nonce: undefined
  };
  if (output.data !== undefined && output.data !== null) {
    contents.data = deserializeAws_json1_1ThirdPartyJobData(
      output.data,
      context
    );
  }
  if (output.id !== undefined && output.id !== null) {
    contents.id = output.id;
  }
  if (output.nonce !== undefined && output.nonce !== null) {
    contents.nonce = output.nonce;
  }
  return contents;
};

const deserializeAws_json1_1ThirdPartyJobList = (
  output: any,
  context: __SerdeContext
): Array<ThirdPartyJob> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ThirdPartyJob(entry, context)
  );
};

const deserializeAws_json1_1TooManyTagsException = (
  output: any,
  context: __SerdeContext
): TooManyTagsException => {
  let contents: any = {
    __type: "TooManyTagsException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1TransitionState = (
  output: any,
  context: __SerdeContext
): TransitionState => {
  let contents: any = {
    __type: "TransitionState",
    disabledReason: undefined,
    enabled: undefined,
    lastChangedAt: undefined,
    lastChangedBy: undefined
  };
  if (output.disabledReason !== undefined && output.disabledReason !== null) {
    contents.disabledReason = output.disabledReason;
  }
  if (output.enabled !== undefined && output.enabled !== null) {
    contents.enabled = output.enabled;
  }
  if (output.lastChangedAt !== undefined && output.lastChangedAt !== null) {
    contents.lastChangedAt = new Date(Math.round(output.lastChangedAt * 1000));
  }
  if (output.lastChangedBy !== undefined && output.lastChangedBy !== null) {
    contents.lastChangedBy = output.lastChangedBy;
  }
  return contents;
};

const deserializeAws_json1_1UntagResourceOutput = (
  output: any,
  context: __SerdeContext
): UntagResourceOutput => {
  let contents: any = {
    __type: "UntagResourceOutput"
  };
  return contents;
};

const deserializeAws_json1_1UpdatePipelineOutput = (
  output: any,
  context: __SerdeContext
): UpdatePipelineOutput => {
  let contents: any = {
    __type: "UpdatePipelineOutput",
    pipeline: undefined
  };
  if (output.pipeline !== undefined && output.pipeline !== null) {
    contents.pipeline = deserializeAws_json1_1PipelineDeclaration(
      output.pipeline,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1WebhookAuthConfiguration = (
  output: any,
  context: __SerdeContext
): WebhookAuthConfiguration => {
  let contents: any = {
    __type: "WebhookAuthConfiguration",
    AllowedIPRange: undefined,
    SecretToken: undefined
  };
  if (output.AllowedIPRange !== undefined && output.AllowedIPRange !== null) {
    contents.AllowedIPRange = output.AllowedIPRange;
  }
  if (output.SecretToken !== undefined && output.SecretToken !== null) {
    contents.SecretToken = output.SecretToken;
  }
  return contents;
};

const deserializeAws_json1_1WebhookDefinition = (
  output: any,
  context: __SerdeContext
): WebhookDefinition => {
  let contents: any = {
    __type: "WebhookDefinition",
    authentication: undefined,
    authenticationConfiguration: undefined,
    filters: undefined,
    name: undefined,
    targetAction: undefined,
    targetPipeline: undefined
  };
  if (output.authentication !== undefined && output.authentication !== null) {
    contents.authentication = output.authentication;
  }
  if (
    output.authenticationConfiguration !== undefined &&
    output.authenticationConfiguration !== null
  ) {
    contents.authenticationConfiguration = deserializeAws_json1_1WebhookAuthConfiguration(
      output.authenticationConfiguration,
      context
    );
  }
  if (output.filters !== undefined && output.filters !== null) {
    contents.filters = deserializeAws_json1_1WebhookFilters(
      output.filters,
      context
    );
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.targetAction !== undefined && output.targetAction !== null) {
    contents.targetAction = output.targetAction;
  }
  if (output.targetPipeline !== undefined && output.targetPipeline !== null) {
    contents.targetPipeline = output.targetPipeline;
  }
  return contents;
};

const deserializeAws_json1_1WebhookFilterRule = (
  output: any,
  context: __SerdeContext
): WebhookFilterRule => {
  let contents: any = {
    __type: "WebhookFilterRule",
    jsonPath: undefined,
    matchEquals: undefined
  };
  if (output.jsonPath !== undefined && output.jsonPath !== null) {
    contents.jsonPath = output.jsonPath;
  }
  if (output.matchEquals !== undefined && output.matchEquals !== null) {
    contents.matchEquals = output.matchEquals;
  }
  return contents;
};

const deserializeAws_json1_1WebhookFilters = (
  output: any,
  context: __SerdeContext
): Array<WebhookFilterRule> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1WebhookFilterRule(entry, context)
  );
};

const deserializeAws_json1_1WebhookList = (
  output: any,
  context: __SerdeContext
): Array<ListWebhookItem> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ListWebhookItem(entry, context)
  );
};

const deserializeAws_json1_1WebhookNotFoundException = (
  output: any,
  context: __SerdeContext
): WebhookNotFoundException => {
  let contents: any = {
    __type: "WebhookNotFoundException"
  };
  return contents;
};

const deserializeAws_json1_1AWSSessionCredentials = (
  output: any,
  context: __SerdeContext
): AWSSessionCredentials => {
  let contents: any = {
    __type: "AWSSessionCredentials",
    accessKeyId: undefined,
    secretAccessKey: undefined,
    sessionToken: undefined
  };
  if (output.accessKeyId !== undefined && output.accessKeyId !== null) {
    contents.accessKeyId = output.accessKeyId;
  }
  if (output.secretAccessKey !== undefined && output.secretAccessKey !== null) {
    contents.secretAccessKey = output.secretAccessKey;
  }
  if (output.sessionToken !== undefined && output.sessionToken !== null) {
    contents.sessionToken = output.sessionToken;
  }
  return contents;
};

const deserializeAws_json1_1ActionConfiguration = (
  output: any,
  context: __SerdeContext
): ActionConfiguration => {
  let contents: any = {
    __type: "ActionConfiguration",
    configuration: undefined
  };
  if (output.configuration !== undefined && output.configuration !== null) {
    contents.configuration = deserializeAws_json1_1ActionConfigurationMap(
      output.configuration,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ActionConfigurationMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_json1_1ActionContext = (
  output: any,
  context: __SerdeContext
): ActionContext => {
  let contents: any = {
    __type: "ActionContext",
    actionExecutionId: undefined,
    name: undefined
  };
  if (
    output.actionExecutionId !== undefined &&
    output.actionExecutionId !== null
  ) {
    contents.actionExecutionId = output.actionExecutionId;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  return contents;
};

const deserializeAws_json1_1ActionTypeId = (
  output: any,
  context: __SerdeContext
): ActionTypeId => {
  let contents: any = {
    __type: "ActionTypeId",
    category: undefined,
    owner: undefined,
    provider: undefined,
    version: undefined
  };
  if (output.category !== undefined && output.category !== null) {
    contents.category = output.category;
  }
  if (output.owner !== undefined && output.owner !== null) {
    contents.owner = output.owner;
  }
  if (output.provider !== undefined && output.provider !== null) {
    contents.provider = output.provider;
  }
  if (output.version !== undefined && output.version !== null) {
    contents.version = output.version;
  }
  return contents;
};

const deserializeAws_json1_1ActionTypeNotFoundException = (
  output: any,
  context: __SerdeContext
): ActionTypeNotFoundException => {
  let contents: any = {
    __type: "ActionTypeNotFoundException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1Artifact = (
  output: any,
  context: __SerdeContext
): Artifact => {
  let contents: any = {
    __type: "Artifact",
    location: undefined,
    name: undefined,
    revision: undefined
  };
  if (output.location !== undefined && output.location !== null) {
    contents.location = deserializeAws_json1_1ArtifactLocation(
      output.location,
      context
    );
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.revision !== undefined && output.revision !== null) {
    contents.revision = output.revision;
  }
  return contents;
};

const deserializeAws_json1_1ArtifactList = (
  output: any,
  context: __SerdeContext
): Array<Artifact> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Artifact(entry, context)
  );
};

const deserializeAws_json1_1ArtifactLocation = (
  output: any,
  context: __SerdeContext
): ArtifactLocation => {
  let contents: any = {
    __type: "ArtifactLocation",
    s3Location: undefined,
    type: undefined
  };
  if (output.s3Location !== undefined && output.s3Location !== null) {
    contents.s3Location = deserializeAws_json1_1S3ArtifactLocation(
      output.s3Location,
      context
    );
  }
  if (output.type !== undefined && output.type !== null) {
    contents.type = output.type;
  }
  return contents;
};

const deserializeAws_json1_1EncryptionKey = (
  output: any,
  context: __SerdeContext
): EncryptionKey => {
  let contents: any = {
    __type: "EncryptionKey",
    id: undefined,
    type: undefined
  };
  if (output.id !== undefined && output.id !== null) {
    contents.id = output.id;
  }
  if (output.type !== undefined && output.type !== null) {
    contents.type = output.type;
  }
  return contents;
};

const deserializeAws_json1_1InvalidJobStateException = (
  output: any,
  context: __SerdeContext
): InvalidJobStateException => {
  let contents: any = {
    __type: "InvalidJobStateException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidNonceException = (
  output: any,
  context: __SerdeContext
): InvalidNonceException => {
  let contents: any = {
    __type: "InvalidNonceException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1JobNotFoundException = (
  output: any,
  context: __SerdeContext
): JobNotFoundException => {
  let contents: any = {
    __type: "JobNotFoundException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1OutputVariablesMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_json1_1OutputVariablesSizeExceededException = (
  output: any,
  context: __SerdeContext
): OutputVariablesSizeExceededException => {
  let contents: any = {
    __type: "OutputVariablesSizeExceededException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1PipelineContext = (
  output: any,
  context: __SerdeContext
): PipelineContext => {
  let contents: any = {
    __type: "PipelineContext",
    action: undefined,
    pipelineArn: undefined,
    pipelineExecutionId: undefined,
    pipelineName: undefined,
    stage: undefined
  };
  if (output.action !== undefined && output.action !== null) {
    contents.action = deserializeAws_json1_1ActionContext(
      output.action,
      context
    );
  }
  if (output.pipelineArn !== undefined && output.pipelineArn !== null) {
    contents.pipelineArn = output.pipelineArn;
  }
  if (
    output.pipelineExecutionId !== undefined &&
    output.pipelineExecutionId !== null
  ) {
    contents.pipelineExecutionId = output.pipelineExecutionId;
  }
  if (output.pipelineName !== undefined && output.pipelineName !== null) {
    contents.pipelineName = output.pipelineName;
  }
  if (output.stage !== undefined && output.stage !== null) {
    contents.stage = deserializeAws_json1_1StageContext(output.stage, context);
  }
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  let contents: any = {
    __type: "ResourceNotFoundException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1S3ArtifactLocation = (
  output: any,
  context: __SerdeContext
): S3ArtifactLocation => {
  let contents: any = {
    __type: "S3ArtifactLocation",
    bucketName: undefined,
    objectKey: undefined
  };
  if (output.bucketName !== undefined && output.bucketName !== null) {
    contents.bucketName = output.bucketName;
  }
  if (output.objectKey !== undefined && output.objectKey !== null) {
    contents.objectKey = output.objectKey;
  }
  return contents;
};

const deserializeAws_json1_1StageContext = (
  output: any,
  context: __SerdeContext
): StageContext => {
  let contents: any = {
    __type: "StageContext",
    name: undefined
  };
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  return contents;
};

const deserializeAws_json1_1ValidationException = (
  output: any,
  context: __SerdeContext
): ValidationException => {
  let contents: any = {
    __type: "ValidationException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any,
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
): Promise<string> => {
  return collectBody(streamBody, context).then(body =>
    context.utf8Encoder(body)
  );
};

const buildHttpRpcRequest = (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): __HttpRequest => {
  const contents: any = {
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: path,
    headers: headers
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
