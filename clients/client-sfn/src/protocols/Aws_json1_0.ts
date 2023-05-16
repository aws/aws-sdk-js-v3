// smithy-typescript generated code
import {
  _json,
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  limitedParseFloat32 as __limitedParseFloat32,
  parseEpochTimestamp as __parseEpochTimestamp,
  serializeFloat as __serializeFloat,
  take,
  withBaseException,
} from "@aws-sdk/smithy-client";
import { HeaderBag as __HeaderBag, ResponseMetadata as __ResponseMetadata } from "@aws-sdk/types";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
  isValidHostname as __isValidHostname,
} from "@smithy/protocol-http";
import { Endpoint as __Endpoint, SerdeContext as __SerdeContext } from "@smithy/types";

import { CreateActivityCommandInput, CreateActivityCommandOutput } from "../commands/CreateActivityCommand";
import { CreateStateMachineCommandInput, CreateStateMachineCommandOutput } from "../commands/CreateStateMachineCommand";
import { DeleteActivityCommandInput, DeleteActivityCommandOutput } from "../commands/DeleteActivityCommand";
import { DeleteStateMachineCommandInput, DeleteStateMachineCommandOutput } from "../commands/DeleteStateMachineCommand";
import { DescribeActivityCommandInput, DescribeActivityCommandOutput } from "../commands/DescribeActivityCommand";
import { DescribeExecutionCommandInput, DescribeExecutionCommandOutput } from "../commands/DescribeExecutionCommand";
import { DescribeMapRunCommandInput, DescribeMapRunCommandOutput } from "../commands/DescribeMapRunCommand";
import {
  DescribeStateMachineCommandInput,
  DescribeStateMachineCommandOutput,
} from "../commands/DescribeStateMachineCommand";
import {
  DescribeStateMachineForExecutionCommandInput,
  DescribeStateMachineForExecutionCommandOutput,
} from "../commands/DescribeStateMachineForExecutionCommand";
import { GetActivityTaskCommandInput, GetActivityTaskCommandOutput } from "../commands/GetActivityTaskCommand";
import {
  GetExecutionHistoryCommandInput,
  GetExecutionHistoryCommandOutput,
} from "../commands/GetExecutionHistoryCommand";
import { ListActivitiesCommandInput, ListActivitiesCommandOutput } from "../commands/ListActivitiesCommand";
import { ListExecutionsCommandInput, ListExecutionsCommandOutput } from "../commands/ListExecutionsCommand";
import { ListMapRunsCommandInput, ListMapRunsCommandOutput } from "../commands/ListMapRunsCommand";
import { ListStateMachinesCommandInput, ListStateMachinesCommandOutput } from "../commands/ListStateMachinesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { SendTaskFailureCommandInput, SendTaskFailureCommandOutput } from "../commands/SendTaskFailureCommand";
import { SendTaskHeartbeatCommandInput, SendTaskHeartbeatCommandOutput } from "../commands/SendTaskHeartbeatCommand";
import { SendTaskSuccessCommandInput, SendTaskSuccessCommandOutput } from "../commands/SendTaskSuccessCommand";
import { StartExecutionCommandInput, StartExecutionCommandOutput } from "../commands/StartExecutionCommand";
import { StartSyncExecutionCommandInput, StartSyncExecutionCommandOutput } from "../commands/StartSyncExecutionCommand";
import { StopExecutionCommandInput, StopExecutionCommandOutput } from "../commands/StopExecutionCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateMapRunCommandInput, UpdateMapRunCommandOutput } from "../commands/UpdateMapRunCommand";
import { UpdateStateMachineCommandInput, UpdateStateMachineCommandOutput } from "../commands/UpdateStateMachineCommand";
import {
  ActivityDoesNotExist,
  ActivityLimitExceeded,
  ActivityListItem,
  ActivityWorkerLimitExceeded,
  CloudWatchLogsLogGroup,
  CreateActivityInput,
  CreateActivityOutput,
  CreateStateMachineInput,
  CreateStateMachineOutput,
  DeleteActivityInput,
  DeleteStateMachineInput,
  DescribeActivityInput,
  DescribeActivityOutput,
  DescribeExecutionInput,
  DescribeExecutionOutput,
  DescribeMapRunInput,
  DescribeMapRunOutput,
  DescribeStateMachineForExecutionInput,
  DescribeStateMachineForExecutionOutput,
  DescribeStateMachineInput,
  DescribeStateMachineOutput,
  ExecutionAlreadyExists,
  ExecutionDoesNotExist,
  ExecutionLimitExceeded,
  ExecutionListItem,
  GetActivityTaskInput,
  GetExecutionHistoryInput,
  GetExecutionHistoryOutput,
  HistoryEvent,
  InvalidArn,
  InvalidDefinition,
  InvalidExecutionInput,
  InvalidLoggingConfiguration,
  InvalidName,
  InvalidOutput,
  InvalidToken,
  InvalidTracingConfiguration,
  ListActivitiesInput,
  ListActivitiesOutput,
  ListExecutionsInput,
  ListExecutionsOutput,
  ListMapRunsInput,
  ListMapRunsOutput,
  ListStateMachinesInput,
  ListStateMachinesOutput,
  ListTagsForResourceInput,
  LogDestination,
  LoggingConfiguration,
  MapRunListItem,
  MissingRequiredParameter,
  ResourceNotFound,
  SendTaskFailureInput,
  SendTaskHeartbeatInput,
  SendTaskSuccessInput,
  StartExecutionInput,
  StartExecutionOutput,
  StartSyncExecutionInput,
  StartSyncExecutionOutput,
  StateMachineAlreadyExists,
  StateMachineDeleting,
  StateMachineDoesNotExist,
  StateMachineLimitExceeded,
  StateMachineListItem,
  StateMachineTypeNotSupported,
  StopExecutionInput,
  StopExecutionOutput,
  Tag,
  TagResourceInput,
  TaskDoesNotExist,
  TaskTimedOut,
  TooManyTags,
  TracingConfiguration,
  UntagResourceInput,
  UpdateMapRunInput,
  UpdateStateMachineInput,
  UpdateStateMachineOutput,
  ValidationException,
} from "../models/models_0";
import { SFNServiceException as __BaseException } from "../models/SFNServiceException";

/**
 * serializeAws_json1_0CreateActivityCommand
 */
export const se_CreateActivityCommand = async (
  input: CreateActivityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateActivity");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateStateMachineCommand
 */
export const se_CreateStateMachineCommand = async (
  input: CreateStateMachineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateStateMachine");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteActivityCommand
 */
export const se_DeleteActivityCommand = async (
  input: DeleteActivityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteActivity");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteStateMachineCommand
 */
export const se_DeleteStateMachineCommand = async (
  input: DeleteStateMachineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteStateMachine");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeActivityCommand
 */
export const se_DescribeActivityCommand = async (
  input: DescribeActivityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeActivity");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeExecutionCommand
 */
export const se_DescribeExecutionCommand = async (
  input: DescribeExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeExecution");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeMapRunCommand
 */
export const se_DescribeMapRunCommand = async (
  input: DescribeMapRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeMapRun");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeStateMachineCommand
 */
export const se_DescribeStateMachineCommand = async (
  input: DescribeStateMachineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeStateMachine");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeStateMachineForExecutionCommand
 */
export const se_DescribeStateMachineForExecutionCommand = async (
  input: DescribeStateMachineForExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeStateMachineForExecution");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetActivityTaskCommand
 */
export const se_GetActivityTaskCommand = async (
  input: GetActivityTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetActivityTask");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetExecutionHistoryCommand
 */
export const se_GetExecutionHistoryCommand = async (
  input: GetExecutionHistoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetExecutionHistory");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListActivitiesCommand
 */
export const se_ListActivitiesCommand = async (
  input: ListActivitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListActivities");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListExecutionsCommand
 */
export const se_ListExecutionsCommand = async (
  input: ListExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListExecutions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListMapRunsCommand
 */
export const se_ListMapRunsCommand = async (
  input: ListMapRunsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListMapRuns");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListStateMachinesCommand
 */
export const se_ListStateMachinesCommand = async (
  input: ListStateMachinesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListStateMachines");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListTagsForResourceCommand
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
 * serializeAws_json1_0SendTaskFailureCommand
 */
export const se_SendTaskFailureCommand = async (
  input: SendTaskFailureCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SendTaskFailure");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0SendTaskHeartbeatCommand
 */
export const se_SendTaskHeartbeatCommand = async (
  input: SendTaskHeartbeatCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SendTaskHeartbeat");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0SendTaskSuccessCommand
 */
export const se_SendTaskSuccessCommand = async (
  input: SendTaskSuccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SendTaskSuccess");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0StartExecutionCommand
 */
export const se_StartExecutionCommand = async (
  input: StartExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartExecution");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0StartSyncExecutionCommand
 */
export const se_StartSyncExecutionCommand = async (
  input: StartSyncExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartSyncExecution");
  let body: any;
  body = JSON.stringify(_json(input));
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "sync-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return buildHttpRpcRequest(context, headers, "/", resolvedHostname, body);
};

/**
 * serializeAws_json1_0StopExecutionCommand
 */
export const se_StopExecutionCommand = async (
  input: StopExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopExecution");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0TagResourceCommand
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
 * serializeAws_json1_0UntagResourceCommand
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
 * serializeAws_json1_0UpdateMapRunCommand
 */
export const se_UpdateMapRunCommand = async (
  input: UpdateMapRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateMapRun");
  let body: any;
  body = JSON.stringify(se_UpdateMapRunInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateStateMachineCommand
 */
export const se_UpdateStateMachineCommand = async (
  input: UpdateStateMachineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateStateMachine");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_0CreateActivityCommand
 */
export const de_CreateActivityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateActivityCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateActivityCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateActivityOutput(data, context);
  const response: CreateActivityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateActivityCommandError
 */
const de_CreateActivityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateActivityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ActivityLimitExceeded":
    case "com.amazonaws.sfn#ActivityLimitExceeded":
      throw await de_ActivityLimitExceededRes(parsedOutput, context);
    case "InvalidName":
    case "com.amazonaws.sfn#InvalidName":
      throw await de_InvalidNameRes(parsedOutput, context);
    case "TooManyTags":
    case "com.amazonaws.sfn#TooManyTags":
      throw await de_TooManyTagsRes(parsedOutput, context);
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
 * deserializeAws_json1_0CreateStateMachineCommand
 */
export const de_CreateStateMachineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStateMachineCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateStateMachineCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateStateMachineOutput(data, context);
  const response: CreateStateMachineCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateStateMachineCommandError
 */
const de_CreateStateMachineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStateMachineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArn":
    case "com.amazonaws.sfn#InvalidArn":
      throw await de_InvalidArnRes(parsedOutput, context);
    case "InvalidDefinition":
    case "com.amazonaws.sfn#InvalidDefinition":
      throw await de_InvalidDefinitionRes(parsedOutput, context);
    case "InvalidLoggingConfiguration":
    case "com.amazonaws.sfn#InvalidLoggingConfiguration":
      throw await de_InvalidLoggingConfigurationRes(parsedOutput, context);
    case "InvalidName":
    case "com.amazonaws.sfn#InvalidName":
      throw await de_InvalidNameRes(parsedOutput, context);
    case "InvalidTracingConfiguration":
    case "com.amazonaws.sfn#InvalidTracingConfiguration":
      throw await de_InvalidTracingConfigurationRes(parsedOutput, context);
    case "StateMachineAlreadyExists":
    case "com.amazonaws.sfn#StateMachineAlreadyExists":
      throw await de_StateMachineAlreadyExistsRes(parsedOutput, context);
    case "StateMachineDeleting":
    case "com.amazonaws.sfn#StateMachineDeleting":
      throw await de_StateMachineDeletingRes(parsedOutput, context);
    case "StateMachineLimitExceeded":
    case "com.amazonaws.sfn#StateMachineLimitExceeded":
      throw await de_StateMachineLimitExceededRes(parsedOutput, context);
    case "StateMachineTypeNotSupported":
    case "com.amazonaws.sfn#StateMachineTypeNotSupported":
      throw await de_StateMachineTypeNotSupportedRes(parsedOutput, context);
    case "TooManyTags":
    case "com.amazonaws.sfn#TooManyTags":
      throw await de_TooManyTagsRes(parsedOutput, context);
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
 * deserializeAws_json1_0DeleteActivityCommand
 */
export const de_DeleteActivityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteActivityCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteActivityCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteActivityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteActivityCommandError
 */
const de_DeleteActivityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteActivityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArn":
    case "com.amazonaws.sfn#InvalidArn":
      throw await de_InvalidArnRes(parsedOutput, context);
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
 * deserializeAws_json1_0DeleteStateMachineCommand
 */
export const de_DeleteStateMachineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStateMachineCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteStateMachineCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteStateMachineCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteStateMachineCommandError
 */
const de_DeleteStateMachineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStateMachineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArn":
    case "com.amazonaws.sfn#InvalidArn":
      throw await de_InvalidArnRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.sfn#ValidationException":
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
 * deserializeAws_json1_0DescribeActivityCommand
 */
export const de_DescribeActivityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeActivityCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeActivityCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeActivityOutput(data, context);
  const response: DescribeActivityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DescribeActivityCommandError
 */
const de_DescribeActivityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeActivityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ActivityDoesNotExist":
    case "com.amazonaws.sfn#ActivityDoesNotExist":
      throw await de_ActivityDoesNotExistRes(parsedOutput, context);
    case "InvalidArn":
    case "com.amazonaws.sfn#InvalidArn":
      throw await de_InvalidArnRes(parsedOutput, context);
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
 * deserializeAws_json1_0DescribeExecutionCommand
 */
export const de_DescribeExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeExecutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeExecutionOutput(data, context);
  const response: DescribeExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DescribeExecutionCommandError
 */
const de_DescribeExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeExecutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ExecutionDoesNotExist":
    case "com.amazonaws.sfn#ExecutionDoesNotExist":
      throw await de_ExecutionDoesNotExistRes(parsedOutput, context);
    case "InvalidArn":
    case "com.amazonaws.sfn#InvalidArn":
      throw await de_InvalidArnRes(parsedOutput, context);
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
 * deserializeAws_json1_0DescribeMapRunCommand
 */
export const de_DescribeMapRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMapRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeMapRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeMapRunOutput(data, context);
  const response: DescribeMapRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DescribeMapRunCommandError
 */
const de_DescribeMapRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMapRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArn":
    case "com.amazonaws.sfn#InvalidArn":
      throw await de_InvalidArnRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.sfn#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
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
 * deserializeAws_json1_0DescribeStateMachineCommand
 */
export const de_DescribeStateMachineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStateMachineCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeStateMachineCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeStateMachineOutput(data, context);
  const response: DescribeStateMachineCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DescribeStateMachineCommandError
 */
const de_DescribeStateMachineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStateMachineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArn":
    case "com.amazonaws.sfn#InvalidArn":
      throw await de_InvalidArnRes(parsedOutput, context);
    case "StateMachineDoesNotExist":
    case "com.amazonaws.sfn#StateMachineDoesNotExist":
      throw await de_StateMachineDoesNotExistRes(parsedOutput, context);
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
 * deserializeAws_json1_0DescribeStateMachineForExecutionCommand
 */
export const de_DescribeStateMachineForExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStateMachineForExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeStateMachineForExecutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeStateMachineForExecutionOutput(data, context);
  const response: DescribeStateMachineForExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DescribeStateMachineForExecutionCommandError
 */
const de_DescribeStateMachineForExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStateMachineForExecutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ExecutionDoesNotExist":
    case "com.amazonaws.sfn#ExecutionDoesNotExist":
      throw await de_ExecutionDoesNotExistRes(parsedOutput, context);
    case "InvalidArn":
    case "com.amazonaws.sfn#InvalidArn":
      throw await de_InvalidArnRes(parsedOutput, context);
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
 * deserializeAws_json1_0GetActivityTaskCommand
 */
export const de_GetActivityTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetActivityTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetActivityTaskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetActivityTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetActivityTaskCommandError
 */
const de_GetActivityTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetActivityTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ActivityDoesNotExist":
    case "com.amazonaws.sfn#ActivityDoesNotExist":
      throw await de_ActivityDoesNotExistRes(parsedOutput, context);
    case "ActivityWorkerLimitExceeded":
    case "com.amazonaws.sfn#ActivityWorkerLimitExceeded":
      throw await de_ActivityWorkerLimitExceededRes(parsedOutput, context);
    case "InvalidArn":
    case "com.amazonaws.sfn#InvalidArn":
      throw await de_InvalidArnRes(parsedOutput, context);
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
 * deserializeAws_json1_0GetExecutionHistoryCommand
 */
export const de_GetExecutionHistoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExecutionHistoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetExecutionHistoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetExecutionHistoryOutput(data, context);
  const response: GetExecutionHistoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetExecutionHistoryCommandError
 */
const de_GetExecutionHistoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExecutionHistoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ExecutionDoesNotExist":
    case "com.amazonaws.sfn#ExecutionDoesNotExist":
      throw await de_ExecutionDoesNotExistRes(parsedOutput, context);
    case "InvalidArn":
    case "com.amazonaws.sfn#InvalidArn":
      throw await de_InvalidArnRes(parsedOutput, context);
    case "InvalidToken":
    case "com.amazonaws.sfn#InvalidToken":
      throw await de_InvalidTokenRes(parsedOutput, context);
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
 * deserializeAws_json1_0ListActivitiesCommand
 */
export const de_ListActivitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListActivitiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListActivitiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListActivitiesOutput(data, context);
  const response: ListActivitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListActivitiesCommandError
 */
const de_ListActivitiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListActivitiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidToken":
    case "com.amazonaws.sfn#InvalidToken":
      throw await de_InvalidTokenRes(parsedOutput, context);
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
 * deserializeAws_json1_0ListExecutionsCommand
 */
export const de_ListExecutionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExecutionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListExecutionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListExecutionsOutput(data, context);
  const response: ListExecutionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListExecutionsCommandError
 */
const de_ListExecutionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExecutionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArn":
    case "com.amazonaws.sfn#InvalidArn":
      throw await de_InvalidArnRes(parsedOutput, context);
    case "InvalidToken":
    case "com.amazonaws.sfn#InvalidToken":
      throw await de_InvalidTokenRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.sfn#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    case "StateMachineDoesNotExist":
    case "com.amazonaws.sfn#StateMachineDoesNotExist":
      throw await de_StateMachineDoesNotExistRes(parsedOutput, context);
    case "StateMachineTypeNotSupported":
    case "com.amazonaws.sfn#StateMachineTypeNotSupported":
      throw await de_StateMachineTypeNotSupportedRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.sfn#ValidationException":
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
 * deserializeAws_json1_0ListMapRunsCommand
 */
export const de_ListMapRunsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMapRunsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListMapRunsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListMapRunsOutput(data, context);
  const response: ListMapRunsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListMapRunsCommandError
 */
const de_ListMapRunsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMapRunsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ExecutionDoesNotExist":
    case "com.amazonaws.sfn#ExecutionDoesNotExist":
      throw await de_ExecutionDoesNotExistRes(parsedOutput, context);
    case "InvalidArn":
    case "com.amazonaws.sfn#InvalidArn":
      throw await de_InvalidArnRes(parsedOutput, context);
    case "InvalidToken":
    case "com.amazonaws.sfn#InvalidToken":
      throw await de_InvalidTokenRes(parsedOutput, context);
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
 * deserializeAws_json1_0ListStateMachinesCommand
 */
export const de_ListStateMachinesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStateMachinesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListStateMachinesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListStateMachinesOutput(data, context);
  const response: ListStateMachinesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListStateMachinesCommandError
 */
const de_ListStateMachinesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStateMachinesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidToken":
    case "com.amazonaws.sfn#InvalidToken":
      throw await de_InvalidTokenRes(parsedOutput, context);
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
 * deserializeAws_json1_0ListTagsForResourceCommand
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
 * deserializeAws_json1_0ListTagsForResourceCommandError
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
    case "InvalidArn":
    case "com.amazonaws.sfn#InvalidArn":
      throw await de_InvalidArnRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.sfn#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
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
 * deserializeAws_json1_0SendTaskFailureCommand
 */
export const de_SendTaskFailureCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendTaskFailureCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SendTaskFailureCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: SendTaskFailureCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0SendTaskFailureCommandError
 */
const de_SendTaskFailureCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendTaskFailureCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidToken":
    case "com.amazonaws.sfn#InvalidToken":
      throw await de_InvalidTokenRes(parsedOutput, context);
    case "TaskDoesNotExist":
    case "com.amazonaws.sfn#TaskDoesNotExist":
      throw await de_TaskDoesNotExistRes(parsedOutput, context);
    case "TaskTimedOut":
    case "com.amazonaws.sfn#TaskTimedOut":
      throw await de_TaskTimedOutRes(parsedOutput, context);
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
 * deserializeAws_json1_0SendTaskHeartbeatCommand
 */
export const de_SendTaskHeartbeatCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendTaskHeartbeatCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SendTaskHeartbeatCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: SendTaskHeartbeatCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0SendTaskHeartbeatCommandError
 */
const de_SendTaskHeartbeatCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendTaskHeartbeatCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidToken":
    case "com.amazonaws.sfn#InvalidToken":
      throw await de_InvalidTokenRes(parsedOutput, context);
    case "TaskDoesNotExist":
    case "com.amazonaws.sfn#TaskDoesNotExist":
      throw await de_TaskDoesNotExistRes(parsedOutput, context);
    case "TaskTimedOut":
    case "com.amazonaws.sfn#TaskTimedOut":
      throw await de_TaskTimedOutRes(parsedOutput, context);
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
 * deserializeAws_json1_0SendTaskSuccessCommand
 */
export const de_SendTaskSuccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendTaskSuccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SendTaskSuccessCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: SendTaskSuccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0SendTaskSuccessCommandError
 */
const de_SendTaskSuccessCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendTaskSuccessCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidOutput":
    case "com.amazonaws.sfn#InvalidOutput":
      throw await de_InvalidOutputRes(parsedOutput, context);
    case "InvalidToken":
    case "com.amazonaws.sfn#InvalidToken":
      throw await de_InvalidTokenRes(parsedOutput, context);
    case "TaskDoesNotExist":
    case "com.amazonaws.sfn#TaskDoesNotExist":
      throw await de_TaskDoesNotExistRes(parsedOutput, context);
    case "TaskTimedOut":
    case "com.amazonaws.sfn#TaskTimedOut":
      throw await de_TaskTimedOutRes(parsedOutput, context);
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
 * deserializeAws_json1_0StartExecutionCommand
 */
export const de_StartExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartExecutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartExecutionOutput(data, context);
  const response: StartExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0StartExecutionCommandError
 */
const de_StartExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartExecutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ExecutionAlreadyExists":
    case "com.amazonaws.sfn#ExecutionAlreadyExists":
      throw await de_ExecutionAlreadyExistsRes(parsedOutput, context);
    case "ExecutionLimitExceeded":
    case "com.amazonaws.sfn#ExecutionLimitExceeded":
      throw await de_ExecutionLimitExceededRes(parsedOutput, context);
    case "InvalidArn":
    case "com.amazonaws.sfn#InvalidArn":
      throw await de_InvalidArnRes(parsedOutput, context);
    case "InvalidExecutionInput":
    case "com.amazonaws.sfn#InvalidExecutionInput":
      throw await de_InvalidExecutionInputRes(parsedOutput, context);
    case "InvalidName":
    case "com.amazonaws.sfn#InvalidName":
      throw await de_InvalidNameRes(parsedOutput, context);
    case "StateMachineDeleting":
    case "com.amazonaws.sfn#StateMachineDeleting":
      throw await de_StateMachineDeletingRes(parsedOutput, context);
    case "StateMachineDoesNotExist":
    case "com.amazonaws.sfn#StateMachineDoesNotExist":
      throw await de_StateMachineDoesNotExistRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.sfn#ValidationException":
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
 * deserializeAws_json1_0StartSyncExecutionCommand
 */
export const de_StartSyncExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSyncExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartSyncExecutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartSyncExecutionOutput(data, context);
  const response: StartSyncExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0StartSyncExecutionCommandError
 */
const de_StartSyncExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSyncExecutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArn":
    case "com.amazonaws.sfn#InvalidArn":
      throw await de_InvalidArnRes(parsedOutput, context);
    case "InvalidExecutionInput":
    case "com.amazonaws.sfn#InvalidExecutionInput":
      throw await de_InvalidExecutionInputRes(parsedOutput, context);
    case "InvalidName":
    case "com.amazonaws.sfn#InvalidName":
      throw await de_InvalidNameRes(parsedOutput, context);
    case "StateMachineDeleting":
    case "com.amazonaws.sfn#StateMachineDeleting":
      throw await de_StateMachineDeletingRes(parsedOutput, context);
    case "StateMachineDoesNotExist":
    case "com.amazonaws.sfn#StateMachineDoesNotExist":
      throw await de_StateMachineDoesNotExistRes(parsedOutput, context);
    case "StateMachineTypeNotSupported":
    case "com.amazonaws.sfn#StateMachineTypeNotSupported":
      throw await de_StateMachineTypeNotSupportedRes(parsedOutput, context);
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
 * deserializeAws_json1_0StopExecutionCommand
 */
export const de_StopExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopExecutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StopExecutionOutput(data, context);
  const response: StopExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0StopExecutionCommandError
 */
const de_StopExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopExecutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ExecutionDoesNotExist":
    case "com.amazonaws.sfn#ExecutionDoesNotExist":
      throw await de_ExecutionDoesNotExistRes(parsedOutput, context);
    case "InvalidArn":
    case "com.amazonaws.sfn#InvalidArn":
      throw await de_InvalidArnRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.sfn#ValidationException":
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
 * deserializeAws_json1_0TagResourceCommand
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
 * deserializeAws_json1_0TagResourceCommandError
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
    case "InvalidArn":
    case "com.amazonaws.sfn#InvalidArn":
      throw await de_InvalidArnRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.sfn#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    case "TooManyTags":
    case "com.amazonaws.sfn#TooManyTags":
      throw await de_TooManyTagsRes(parsedOutput, context);
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
 * deserializeAws_json1_0UntagResourceCommand
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
 * deserializeAws_json1_0UntagResourceCommandError
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
    case "InvalidArn":
    case "com.amazonaws.sfn#InvalidArn":
      throw await de_InvalidArnRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.sfn#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
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
 * deserializeAws_json1_0UpdateMapRunCommand
 */
export const de_UpdateMapRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMapRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateMapRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateMapRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UpdateMapRunCommandError
 */
const de_UpdateMapRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMapRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArn":
    case "com.amazonaws.sfn#InvalidArn":
      throw await de_InvalidArnRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.sfn#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.sfn#ValidationException":
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
 * deserializeAws_json1_0UpdateStateMachineCommand
 */
export const de_UpdateStateMachineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStateMachineCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateStateMachineCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateStateMachineOutput(data, context);
  const response: UpdateStateMachineCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UpdateStateMachineCommandError
 */
const de_UpdateStateMachineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStateMachineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArn":
    case "com.amazonaws.sfn#InvalidArn":
      throw await de_InvalidArnRes(parsedOutput, context);
    case "InvalidDefinition":
    case "com.amazonaws.sfn#InvalidDefinition":
      throw await de_InvalidDefinitionRes(parsedOutput, context);
    case "InvalidLoggingConfiguration":
    case "com.amazonaws.sfn#InvalidLoggingConfiguration":
      throw await de_InvalidLoggingConfigurationRes(parsedOutput, context);
    case "InvalidTracingConfiguration":
    case "com.amazonaws.sfn#InvalidTracingConfiguration":
      throw await de_InvalidTracingConfigurationRes(parsedOutput, context);
    case "MissingRequiredParameter":
    case "com.amazonaws.sfn#MissingRequiredParameter":
      throw await de_MissingRequiredParameterRes(parsedOutput, context);
    case "StateMachineDeleting":
    case "com.amazonaws.sfn#StateMachineDeleting":
      throw await de_StateMachineDeletingRes(parsedOutput, context);
    case "StateMachineDoesNotExist":
    case "com.amazonaws.sfn#StateMachineDoesNotExist":
      throw await de_StateMachineDoesNotExistRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.sfn#ValidationException":
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
 * deserializeAws_json1_0ActivityDoesNotExistRes
 */
const de_ActivityDoesNotExistRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ActivityDoesNotExist> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ActivityDoesNotExist({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ActivityLimitExceededRes
 */
const de_ActivityLimitExceededRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ActivityLimitExceeded> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ActivityLimitExceeded({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ActivityWorkerLimitExceededRes
 */
const de_ActivityWorkerLimitExceededRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ActivityWorkerLimitExceeded> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ActivityWorkerLimitExceeded({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ExecutionAlreadyExistsRes
 */
const de_ExecutionAlreadyExistsRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ExecutionAlreadyExists> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ExecutionAlreadyExists({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ExecutionDoesNotExistRes
 */
const de_ExecutionDoesNotExistRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ExecutionDoesNotExist> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ExecutionDoesNotExist({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ExecutionLimitExceededRes
 */
const de_ExecutionLimitExceededRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ExecutionLimitExceeded> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ExecutionLimitExceeded({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0InvalidArnRes
 */
const de_InvalidArnRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidArn> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidArn({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0InvalidDefinitionRes
 */
const de_InvalidDefinitionRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidDefinition> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidDefinition({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0InvalidExecutionInputRes
 */
const de_InvalidExecutionInputRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidExecutionInput> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidExecutionInput({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0InvalidLoggingConfigurationRes
 */
const de_InvalidLoggingConfigurationRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidLoggingConfiguration> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidLoggingConfiguration({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0InvalidNameRes
 */
const de_InvalidNameRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidName> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidName({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0InvalidOutputRes
 */
const de_InvalidOutputRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidOutput> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidOutput({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0InvalidTokenRes
 */
const de_InvalidTokenRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidToken> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidToken({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0InvalidTracingConfigurationRes
 */
const de_InvalidTracingConfigurationRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTracingConfiguration> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidTracingConfiguration({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0MissingRequiredParameterRes
 */
const de_MissingRequiredParameterRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MissingRequiredParameter> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new MissingRequiredParameter({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ResourceNotFoundRes
 */
const de_ResourceNotFoundRes = async (parsedOutput: any, context: __SerdeContext): Promise<ResourceNotFound> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ResourceNotFound({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0StateMachineAlreadyExistsRes
 */
const de_StateMachineAlreadyExistsRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<StateMachineAlreadyExists> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new StateMachineAlreadyExists({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0StateMachineDeletingRes
 */
const de_StateMachineDeletingRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<StateMachineDeleting> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new StateMachineDeleting({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0StateMachineDoesNotExistRes
 */
const de_StateMachineDoesNotExistRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<StateMachineDoesNotExist> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new StateMachineDoesNotExist({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0StateMachineLimitExceededRes
 */
const de_StateMachineLimitExceededRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<StateMachineLimitExceeded> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new StateMachineLimitExceeded({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0StateMachineTypeNotSupportedRes
 */
const de_StateMachineTypeNotSupportedRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<StateMachineTypeNotSupported> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new StateMachineTypeNotSupported({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0TaskDoesNotExistRes
 */
const de_TaskDoesNotExistRes = async (parsedOutput: any, context: __SerdeContext): Promise<TaskDoesNotExist> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new TaskDoesNotExist({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0TaskTimedOutRes
 */
const de_TaskTimedOutRes = async (parsedOutput: any, context: __SerdeContext): Promise<TaskTimedOut> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new TaskTimedOut({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0TooManyTagsRes
 */
const de_TooManyTagsRes = async (parsedOutput: any, context: __SerdeContext): Promise<TooManyTags> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new TooManyTags({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ValidationExceptionRes
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

// se_CloudWatchLogsLogGroup omitted.

// se_CreateActivityInput omitted.

// se_CreateStateMachineInput omitted.

// se_DeleteActivityInput omitted.

// se_DeleteStateMachineInput omitted.

// se_DescribeActivityInput omitted.

// se_DescribeExecutionInput omitted.

// se_DescribeMapRunInput omitted.

// se_DescribeStateMachineForExecutionInput omitted.

// se_DescribeStateMachineInput omitted.

// se_GetActivityTaskInput omitted.

// se_GetExecutionHistoryInput omitted.

// se_ListActivitiesInput omitted.

// se_ListExecutionsInput omitted.

// se_ListMapRunsInput omitted.

// se_ListStateMachinesInput omitted.

// se_ListTagsForResourceInput omitted.

// se_LogDestination omitted.

// se_LogDestinationList omitted.

// se_LoggingConfiguration omitted.

// se_SendTaskFailureInput omitted.

// se_SendTaskHeartbeatInput omitted.

// se_SendTaskSuccessInput omitted.

// se_StartExecutionInput omitted.

// se_StartSyncExecutionInput omitted.

// se_StopExecutionInput omitted.

// se_Tag omitted.

// se_TagKeyList omitted.

// se_TagList omitted.

// se_TagResourceInput omitted.

// se_TracingConfiguration omitted.

// se_UntagResourceInput omitted.

/**
 * serializeAws_json1_0UpdateMapRunInput
 */
const se_UpdateMapRunInput = (input: UpdateMapRunInput, context: __SerdeContext): any => {
  return take(input, {
    mapRunArn: [],
    maxConcurrency: [],
    toleratedFailureCount: [],
    toleratedFailurePercentage: __serializeFloat,
  });
};

// se_UpdateStateMachineInput omitted.

// de_ActivityDoesNotExist omitted.

// de_ActivityFailedEventDetails omitted.

// de_ActivityLimitExceeded omitted.

/**
 * deserializeAws_json1_0ActivityList
 */
const de_ActivityList = (output: any, context: __SerdeContext): ActivityListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ActivityListItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ActivityListItem
 */
const de_ActivityListItem = (output: any, context: __SerdeContext): ActivityListItem => {
  return take(output, {
    activityArn: __expectString,
    creationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
  }) as any;
};

// de_ActivityScheduledEventDetails omitted.

// de_ActivityScheduleFailedEventDetails omitted.

// de_ActivityStartedEventDetails omitted.

// de_ActivitySucceededEventDetails omitted.

// de_ActivityTimedOutEventDetails omitted.

// de_ActivityWorkerLimitExceeded omitted.

// de_BillingDetails omitted.

// de_CloudWatchEventsExecutionDataDetails omitted.

// de_CloudWatchLogsLogGroup omitted.

/**
 * deserializeAws_json1_0CreateActivityOutput
 */
const de_CreateActivityOutput = (output: any, context: __SerdeContext): CreateActivityOutput => {
  return take(output, {
    activityArn: __expectString,
    creationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_0CreateStateMachineOutput
 */
const de_CreateStateMachineOutput = (output: any, context: __SerdeContext): CreateStateMachineOutput => {
  return take(output, {
    creationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    stateMachineArn: __expectString,
  }) as any;
};

// de_DeleteActivityOutput omitted.

// de_DeleteStateMachineOutput omitted.

/**
 * deserializeAws_json1_0DescribeActivityOutput
 */
const de_DescribeActivityOutput = (output: any, context: __SerdeContext): DescribeActivityOutput => {
  return take(output, {
    activityArn: __expectString,
    creationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0DescribeExecutionOutput
 */
const de_DescribeExecutionOutput = (output: any, context: __SerdeContext): DescribeExecutionOutput => {
  return take(output, {
    cause: __expectString,
    error: __expectString,
    executionArn: __expectString,
    input: __expectString,
    inputDetails: _json,
    mapRunArn: __expectString,
    name: __expectString,
    output: __expectString,
    outputDetails: _json,
    startDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    stateMachineArn: __expectString,
    status: __expectString,
    stopDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    traceHeader: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0DescribeMapRunOutput
 */
const de_DescribeMapRunOutput = (output: any, context: __SerdeContext): DescribeMapRunOutput => {
  return take(output, {
    executionArn: __expectString,
    executionCounts: _json,
    itemCounts: _json,
    mapRunArn: __expectString,
    maxConcurrency: __expectInt32,
    startDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
    stopDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    toleratedFailureCount: __expectLong,
    toleratedFailurePercentage: __limitedParseFloat32,
  }) as any;
};

/**
 * deserializeAws_json1_0DescribeStateMachineForExecutionOutput
 */
const de_DescribeStateMachineForExecutionOutput = (
  output: any,
  context: __SerdeContext
): DescribeStateMachineForExecutionOutput => {
  return take(output, {
    definition: __expectString,
    label: __expectString,
    loggingConfiguration: _json,
    mapRunArn: __expectString,
    name: __expectString,
    roleArn: __expectString,
    stateMachineArn: __expectString,
    tracingConfiguration: _json,
    updateDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_0DescribeStateMachineOutput
 */
const de_DescribeStateMachineOutput = (output: any, context: __SerdeContext): DescribeStateMachineOutput => {
  return take(output, {
    creationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    definition: __expectString,
    label: __expectString,
    loggingConfiguration: _json,
    name: __expectString,
    roleArn: __expectString,
    stateMachineArn: __expectString,
    status: __expectString,
    tracingConfiguration: _json,
    type: __expectString,
  }) as any;
};

// de_ExecutionAbortedEventDetails omitted.

// de_ExecutionAlreadyExists omitted.

// de_ExecutionDoesNotExist omitted.

// de_ExecutionFailedEventDetails omitted.

// de_ExecutionLimitExceeded omitted.

/**
 * deserializeAws_json1_0ExecutionList
 */
const de_ExecutionList = (output: any, context: __SerdeContext): ExecutionListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ExecutionListItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ExecutionListItem
 */
const de_ExecutionListItem = (output: any, context: __SerdeContext): ExecutionListItem => {
  return take(output, {
    executionArn: __expectString,
    itemCount: __expectInt32,
    mapRunArn: __expectString,
    name: __expectString,
    startDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    stateMachineArn: __expectString,
    status: __expectString,
    stopDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_ExecutionStartedEventDetails omitted.

// de_ExecutionSucceededEventDetails omitted.

// de_ExecutionTimedOutEventDetails omitted.

// de_GetActivityTaskOutput omitted.

/**
 * deserializeAws_json1_0GetExecutionHistoryOutput
 */
const de_GetExecutionHistoryOutput = (output: any, context: __SerdeContext): GetExecutionHistoryOutput => {
  return take(output, {
    events: (_: any) => de_HistoryEventList(_, context),
    nextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0HistoryEvent
 */
const de_HistoryEvent = (output: any, context: __SerdeContext): HistoryEvent => {
  return take(output, {
    activityFailedEventDetails: _json,
    activityScheduleFailedEventDetails: _json,
    activityScheduledEventDetails: _json,
    activityStartedEventDetails: _json,
    activitySucceededEventDetails: _json,
    activityTimedOutEventDetails: _json,
    executionAbortedEventDetails: _json,
    executionFailedEventDetails: _json,
    executionStartedEventDetails: _json,
    executionSucceededEventDetails: _json,
    executionTimedOutEventDetails: _json,
    id: __expectLong,
    lambdaFunctionFailedEventDetails: _json,
    lambdaFunctionScheduleFailedEventDetails: _json,
    lambdaFunctionScheduledEventDetails: _json,
    lambdaFunctionStartFailedEventDetails: _json,
    lambdaFunctionSucceededEventDetails: _json,
    lambdaFunctionTimedOutEventDetails: _json,
    mapIterationAbortedEventDetails: _json,
    mapIterationFailedEventDetails: _json,
    mapIterationStartedEventDetails: _json,
    mapIterationSucceededEventDetails: _json,
    mapRunFailedEventDetails: _json,
    mapRunStartedEventDetails: _json,
    mapStateStartedEventDetails: _json,
    previousEventId: __expectLong,
    stateEnteredEventDetails: _json,
    stateExitedEventDetails: _json,
    taskFailedEventDetails: _json,
    taskScheduledEventDetails: _json,
    taskStartFailedEventDetails: _json,
    taskStartedEventDetails: _json,
    taskSubmitFailedEventDetails: _json,
    taskSubmittedEventDetails: _json,
    taskSucceededEventDetails: _json,
    taskTimedOutEventDetails: _json,
    timestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    type: __expectString,
  }) as any;
};

// de_HistoryEventExecutionDataDetails omitted.

/**
 * deserializeAws_json1_0HistoryEventList
 */
const de_HistoryEventList = (output: any, context: __SerdeContext): HistoryEvent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_HistoryEvent(entry, context);
    });
  return retVal;
};

// de_InvalidArn omitted.

// de_InvalidDefinition omitted.

// de_InvalidExecutionInput omitted.

// de_InvalidLoggingConfiguration omitted.

// de_InvalidName omitted.

// de_InvalidOutput omitted.

// de_InvalidToken omitted.

// de_InvalidTracingConfiguration omitted.

// de_LambdaFunctionFailedEventDetails omitted.

// de_LambdaFunctionScheduledEventDetails omitted.

// de_LambdaFunctionScheduleFailedEventDetails omitted.

// de_LambdaFunctionStartFailedEventDetails omitted.

// de_LambdaFunctionSucceededEventDetails omitted.

// de_LambdaFunctionTimedOutEventDetails omitted.

/**
 * deserializeAws_json1_0ListActivitiesOutput
 */
const de_ListActivitiesOutput = (output: any, context: __SerdeContext): ListActivitiesOutput => {
  return take(output, {
    activities: (_: any) => de_ActivityList(_, context),
    nextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ListExecutionsOutput
 */
const de_ListExecutionsOutput = (output: any, context: __SerdeContext): ListExecutionsOutput => {
  return take(output, {
    executions: (_: any) => de_ExecutionList(_, context),
    nextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ListMapRunsOutput
 */
const de_ListMapRunsOutput = (output: any, context: __SerdeContext): ListMapRunsOutput => {
  return take(output, {
    mapRuns: (_: any) => de_MapRunList(_, context),
    nextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ListStateMachinesOutput
 */
const de_ListStateMachinesOutput = (output: any, context: __SerdeContext): ListStateMachinesOutput => {
  return take(output, {
    nextToken: __expectString,
    stateMachines: (_: any) => de_StateMachineList(_, context),
  }) as any;
};

// de_ListTagsForResourceOutput omitted.

// de_LogDestination omitted.

// de_LogDestinationList omitted.

// de_LoggingConfiguration omitted.

// de_MapIterationEventDetails omitted.

// de_MapRunExecutionCounts omitted.

// de_MapRunFailedEventDetails omitted.

// de_MapRunItemCounts omitted.

/**
 * deserializeAws_json1_0MapRunList
 */
const de_MapRunList = (output: any, context: __SerdeContext): MapRunListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MapRunListItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0MapRunListItem
 */
const de_MapRunListItem = (output: any, context: __SerdeContext): MapRunListItem => {
  return take(output, {
    executionArn: __expectString,
    mapRunArn: __expectString,
    startDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    stateMachineArn: __expectString,
    stopDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_MapRunStartedEventDetails omitted.

// de_MapStateStartedEventDetails omitted.

// de_MissingRequiredParameter omitted.

// de_ResourceNotFound omitted.

// de_SendTaskFailureOutput omitted.

// de_SendTaskHeartbeatOutput omitted.

// de_SendTaskSuccessOutput omitted.

/**
 * deserializeAws_json1_0StartExecutionOutput
 */
const de_StartExecutionOutput = (output: any, context: __SerdeContext): StartExecutionOutput => {
  return take(output, {
    executionArn: __expectString,
    startDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_0StartSyncExecutionOutput
 */
const de_StartSyncExecutionOutput = (output: any, context: __SerdeContext): StartSyncExecutionOutput => {
  return take(output, {
    billingDetails: _json,
    cause: __expectString,
    error: __expectString,
    executionArn: __expectString,
    input: __expectString,
    inputDetails: _json,
    name: __expectString,
    output: __expectString,
    outputDetails: _json,
    startDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    stateMachineArn: __expectString,
    status: __expectString,
    stopDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    traceHeader: __expectString,
  }) as any;
};

// de_StateEnteredEventDetails omitted.

// de_StateExitedEventDetails omitted.

// de_StateMachineAlreadyExists omitted.

// de_StateMachineDeleting omitted.

// de_StateMachineDoesNotExist omitted.

// de_StateMachineLimitExceeded omitted.

/**
 * deserializeAws_json1_0StateMachineList
 */
const de_StateMachineList = (output: any, context: __SerdeContext): StateMachineListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_StateMachineListItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0StateMachineListItem
 */
const de_StateMachineListItem = (output: any, context: __SerdeContext): StateMachineListItem => {
  return take(output, {
    creationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    stateMachineArn: __expectString,
    type: __expectString,
  }) as any;
};

// de_StateMachineTypeNotSupported omitted.

/**
 * deserializeAws_json1_0StopExecutionOutput
 */
const de_StopExecutionOutput = (output: any, context: __SerdeContext): StopExecutionOutput => {
  return take(output, {
    stopDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_Tag omitted.

// de_TagList omitted.

// de_TagResourceOutput omitted.

// de_TaskCredentials omitted.

// de_TaskDoesNotExist omitted.

// de_TaskFailedEventDetails omitted.

// de_TaskScheduledEventDetails omitted.

// de_TaskStartedEventDetails omitted.

// de_TaskStartFailedEventDetails omitted.

// de_TaskSubmitFailedEventDetails omitted.

// de_TaskSubmittedEventDetails omitted.

// de_TaskSucceededEventDetails omitted.

// de_TaskTimedOut omitted.

// de_TaskTimedOutEventDetails omitted.

// de_TooManyTags omitted.

// de_TracingConfiguration omitted.

// de_UntagResourceOutput omitted.

// de_UpdateMapRunOutput omitted.

/**
 * deserializeAws_json1_0UpdateStateMachineOutput
 */
const de_UpdateStateMachineOutput = (output: any, context: __SerdeContext): UpdateStateMachineOutput => {
  return take(output, {
    updateDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_ValidationException omitted.

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
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": `AWSStepFunctions.${operation}`,
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
