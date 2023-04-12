// smithy-typescript generated code
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
  isValidHostname as __isValidHostname,
} from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  limitedParseFloat32 as __limitedParseFloat32,
  parseEpochTimestamp as __parseEpochTimestamp,
  serializeFloat as __serializeFloat,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

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
  ActivityFailedEventDetails,
  ActivityLimitExceeded,
  ActivityListItem,
  ActivityScheduledEventDetails,
  ActivityScheduleFailedEventDetails,
  ActivityStartedEventDetails,
  ActivitySucceededEventDetails,
  ActivityTimedOutEventDetails,
  ActivityWorkerLimitExceeded,
  BillingDetails,
  CloudWatchEventsExecutionDataDetails,
  CloudWatchLogsLogGroup,
  CreateActivityInput,
  CreateActivityOutput,
  CreateStateMachineInput,
  CreateStateMachineOutput,
  DeleteActivityInput,
  DeleteActivityOutput,
  DeleteStateMachineInput,
  DeleteStateMachineOutput,
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
  ExecutionAbortedEventDetails,
  ExecutionAlreadyExists,
  ExecutionDoesNotExist,
  ExecutionFailedEventDetails,
  ExecutionLimitExceeded,
  ExecutionListItem,
  ExecutionStartedEventDetails,
  ExecutionSucceededEventDetails,
  ExecutionTimedOutEventDetails,
  GetActivityTaskInput,
  GetActivityTaskOutput,
  GetExecutionHistoryInput,
  GetExecutionHistoryOutput,
  HistoryEvent,
  HistoryEventExecutionDataDetails,
  InvalidArn,
  InvalidDefinition,
  InvalidExecutionInput,
  InvalidLoggingConfiguration,
  InvalidName,
  InvalidOutput,
  InvalidToken,
  InvalidTracingConfiguration,
  LambdaFunctionFailedEventDetails,
  LambdaFunctionScheduledEventDetails,
  LambdaFunctionScheduleFailedEventDetails,
  LambdaFunctionStartFailedEventDetails,
  LambdaFunctionSucceededEventDetails,
  LambdaFunctionTimedOutEventDetails,
  ListActivitiesInput,
  ListActivitiesOutput,
  ListExecutionsInput,
  ListExecutionsOutput,
  ListMapRunsInput,
  ListMapRunsOutput,
  ListStateMachinesInput,
  ListStateMachinesOutput,
  ListTagsForResourceInput,
  ListTagsForResourceOutput,
  LogDestination,
  LoggingConfiguration,
  MapIterationEventDetails,
  MapRunExecutionCounts,
  MapRunFailedEventDetails,
  MapRunItemCounts,
  MapRunListItem,
  MapRunStartedEventDetails,
  MapStateStartedEventDetails,
  MissingRequiredParameter,
  ResourceNotFound,
  SendTaskFailureInput,
  SendTaskFailureOutput,
  SendTaskHeartbeatInput,
  SendTaskHeartbeatOutput,
  SendTaskSuccessInput,
  SendTaskSuccessOutput,
  StartExecutionInput,
  StartExecutionOutput,
  StartSyncExecutionInput,
  StartSyncExecutionOutput,
  StateEnteredEventDetails,
  StateExitedEventDetails,
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
  TagResourceOutput,
  TaskCredentials,
  TaskDoesNotExist,
  TaskFailedEventDetails,
  TaskScheduledEventDetails,
  TaskStartedEventDetails,
  TaskStartFailedEventDetails,
  TaskSubmitFailedEventDetails,
  TaskSubmittedEventDetails,
  TaskSucceededEventDetails,
  TaskTimedOut,
  TaskTimedOutEventDetails,
  TooManyTags,
  TracingConfiguration,
  UntagResourceInput,
  UntagResourceOutput,
  UpdateMapRunInput,
  UpdateMapRunOutput,
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
  body = JSON.stringify(se_CreateActivityInput(input, context));
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
  body = JSON.stringify(se_CreateStateMachineInput(input, context));
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
  body = JSON.stringify(se_DeleteActivityInput(input, context));
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
  body = JSON.stringify(se_DeleteStateMachineInput(input, context));
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
  body = JSON.stringify(se_DescribeActivityInput(input, context));
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
  body = JSON.stringify(se_DescribeExecutionInput(input, context));
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
  body = JSON.stringify(se_DescribeMapRunInput(input, context));
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
  body = JSON.stringify(se_DescribeStateMachineInput(input, context));
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
  body = JSON.stringify(se_DescribeStateMachineForExecutionInput(input, context));
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
  body = JSON.stringify(se_GetActivityTaskInput(input, context));
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
  body = JSON.stringify(se_GetExecutionHistoryInput(input, context));
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
  body = JSON.stringify(se_ListActivitiesInput(input, context));
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
  body = JSON.stringify(se_ListExecutionsInput(input, context));
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
  body = JSON.stringify(se_ListMapRunsInput(input, context));
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
  body = JSON.stringify(se_ListStateMachinesInput(input, context));
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
  body = JSON.stringify(se_ListTagsForResourceInput(input, context));
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
  body = JSON.stringify(se_SendTaskFailureInput(input, context));
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
  body = JSON.stringify(se_SendTaskHeartbeatInput(input, context));
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
  body = JSON.stringify(se_SendTaskSuccessInput(input, context));
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
  body = JSON.stringify(se_StartExecutionInput(input, context));
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
  body = JSON.stringify(se_StartSyncExecutionInput(input, context));
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
  body = JSON.stringify(se_StopExecutionInput(input, context));
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
  body = JSON.stringify(se_TagResourceInput(input, context));
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
  body = JSON.stringify(se_UntagResourceInput(input, context));
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
  body = JSON.stringify(se_UpdateStateMachineInput(input, context));
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DeleteActivityOutput(data, context);
  const response: DeleteActivityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DeleteStateMachineOutput(data, context);
  const response: DeleteStateMachineCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_GetActivityTaskOutput(data, context);
  const response: GetActivityTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ListTagsForResourceOutput(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_SendTaskFailureOutput(data, context);
  const response: SendTaskFailureCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_SendTaskHeartbeatOutput(data, context);
  const response: SendTaskHeartbeatCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_SendTaskSuccessOutput(data, context);
  const response: SendTaskSuccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_TagResourceOutput(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_UntagResourceOutput(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_UpdateMapRunOutput(data, context);
  const response: UpdateMapRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  const deserialized: any = de_ActivityDoesNotExist(body, context);
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
  const deserialized: any = de_ActivityLimitExceeded(body, context);
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
  const deserialized: any = de_ActivityWorkerLimitExceeded(body, context);
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
  const deserialized: any = de_ExecutionAlreadyExists(body, context);
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
  const deserialized: any = de_ExecutionDoesNotExist(body, context);
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
  const deserialized: any = de_ExecutionLimitExceeded(body, context);
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
  const deserialized: any = de_InvalidArn(body, context);
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
  const deserialized: any = de_InvalidDefinition(body, context);
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
  const deserialized: any = de_InvalidExecutionInput(body, context);
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
  const deserialized: any = de_InvalidLoggingConfiguration(body, context);
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
  const deserialized: any = de_InvalidName(body, context);
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
  const deserialized: any = de_InvalidOutput(body, context);
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
  const deserialized: any = de_InvalidToken(body, context);
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
  const deserialized: any = de_InvalidTracingConfiguration(body, context);
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
  const deserialized: any = de_MissingRequiredParameter(body, context);
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
  const deserialized: any = de_ResourceNotFound(body, context);
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
  const deserialized: any = de_StateMachineAlreadyExists(body, context);
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
  const deserialized: any = de_StateMachineDeleting(body, context);
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
  const deserialized: any = de_StateMachineDoesNotExist(body, context);
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
  const deserialized: any = de_StateMachineLimitExceeded(body, context);
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
  const deserialized: any = de_StateMachineTypeNotSupported(body, context);
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
  const deserialized: any = de_TaskDoesNotExist(body, context);
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
  const deserialized: any = de_TaskTimedOut(body, context);
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
  const deserialized: any = de_TooManyTags(body, context);
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
  const deserialized: any = de_ValidationException(body, context);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_0CloudWatchLogsLogGroup
 */
const se_CloudWatchLogsLogGroup = (input: CloudWatchLogsLogGroup, context: __SerdeContext): any => {
  return {
    ...(input.logGroupArn != null && { logGroupArn: input.logGroupArn }),
  };
};

/**
 * serializeAws_json1_0CreateActivityInput
 */
const se_CreateActivityInput = (input: CreateActivityInput, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_0CreateStateMachineInput
 */
const se_CreateStateMachineInput = (input: CreateStateMachineInput, context: __SerdeContext): any => {
  return {
    ...(input.definition != null && { definition: input.definition }),
    ...(input.loggingConfiguration != null && {
      loggingConfiguration: se_LoggingConfiguration(input.loggingConfiguration, context),
    }),
    ...(input.name != null && { name: input.name }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
    ...(input.tracingConfiguration != null && {
      tracingConfiguration: se_TracingConfiguration(input.tracingConfiguration, context),
    }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_json1_0DeleteActivityInput
 */
const se_DeleteActivityInput = (input: DeleteActivityInput, context: __SerdeContext): any => {
  return {
    ...(input.activityArn != null && { activityArn: input.activityArn }),
  };
};

/**
 * serializeAws_json1_0DeleteStateMachineInput
 */
const se_DeleteStateMachineInput = (input: DeleteStateMachineInput, context: __SerdeContext): any => {
  return {
    ...(input.stateMachineArn != null && { stateMachineArn: input.stateMachineArn }),
  };
};

/**
 * serializeAws_json1_0DescribeActivityInput
 */
const se_DescribeActivityInput = (input: DescribeActivityInput, context: __SerdeContext): any => {
  return {
    ...(input.activityArn != null && { activityArn: input.activityArn }),
  };
};

/**
 * serializeAws_json1_0DescribeExecutionInput
 */
const se_DescribeExecutionInput = (input: DescribeExecutionInput, context: __SerdeContext): any => {
  return {
    ...(input.executionArn != null && { executionArn: input.executionArn }),
  };
};

/**
 * serializeAws_json1_0DescribeMapRunInput
 */
const se_DescribeMapRunInput = (input: DescribeMapRunInput, context: __SerdeContext): any => {
  return {
    ...(input.mapRunArn != null && { mapRunArn: input.mapRunArn }),
  };
};

/**
 * serializeAws_json1_0DescribeStateMachineForExecutionInput
 */
const se_DescribeStateMachineForExecutionInput = (
  input: DescribeStateMachineForExecutionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.executionArn != null && { executionArn: input.executionArn }),
  };
};

/**
 * serializeAws_json1_0DescribeStateMachineInput
 */
const se_DescribeStateMachineInput = (input: DescribeStateMachineInput, context: __SerdeContext): any => {
  return {
    ...(input.stateMachineArn != null && { stateMachineArn: input.stateMachineArn }),
  };
};

/**
 * serializeAws_json1_0GetActivityTaskInput
 */
const se_GetActivityTaskInput = (input: GetActivityTaskInput, context: __SerdeContext): any => {
  return {
    ...(input.activityArn != null && { activityArn: input.activityArn }),
    ...(input.workerName != null && { workerName: input.workerName }),
  };
};

/**
 * serializeAws_json1_0GetExecutionHistoryInput
 */
const se_GetExecutionHistoryInput = (input: GetExecutionHistoryInput, context: __SerdeContext): any => {
  return {
    ...(input.executionArn != null && { executionArn: input.executionArn }),
    ...(input.includeExecutionData != null && { includeExecutionData: input.includeExecutionData }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.reverseOrder != null && { reverseOrder: input.reverseOrder }),
  };
};

/**
 * serializeAws_json1_0ListActivitiesInput
 */
const se_ListActivitiesInput = (input: ListActivitiesInput, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_0ListExecutionsInput
 */
const se_ListExecutionsInput = (input: ListExecutionsInput, context: __SerdeContext): any => {
  return {
    ...(input.mapRunArn != null && { mapRunArn: input.mapRunArn }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.stateMachineArn != null && { stateMachineArn: input.stateMachineArn }),
    ...(input.statusFilter != null && { statusFilter: input.statusFilter }),
  };
};

/**
 * serializeAws_json1_0ListMapRunsInput
 */
const se_ListMapRunsInput = (input: ListMapRunsInput, context: __SerdeContext): any => {
  return {
    ...(input.executionArn != null && { executionArn: input.executionArn }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_0ListStateMachinesInput
 */
const se_ListStateMachinesInput = (input: ListStateMachinesInput, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_0ListTagsForResourceInput
 */
const se_ListTagsForResourceInput = (input: ListTagsForResourceInput, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
  };
};

/**
 * serializeAws_json1_0LogDestination
 */
const se_LogDestination = (input: LogDestination, context: __SerdeContext): any => {
  return {
    ...(input.cloudWatchLogsLogGroup != null && {
      cloudWatchLogsLogGroup: se_CloudWatchLogsLogGroup(input.cloudWatchLogsLogGroup, context),
    }),
  };
};

/**
 * serializeAws_json1_0LogDestinationList
 */
const se_LogDestinationList = (input: LogDestination[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_LogDestination(entry, context);
    });
};

/**
 * serializeAws_json1_0LoggingConfiguration
 */
const se_LoggingConfiguration = (input: LoggingConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.destinations != null && { destinations: se_LogDestinationList(input.destinations, context) }),
    ...(input.includeExecutionData != null && { includeExecutionData: input.includeExecutionData }),
    ...(input.level != null && { level: input.level }),
  };
};

/**
 * serializeAws_json1_0SendTaskFailureInput
 */
const se_SendTaskFailureInput = (input: SendTaskFailureInput, context: __SerdeContext): any => {
  return {
    ...(input.cause != null && { cause: input.cause }),
    ...(input.error != null && { error: input.error }),
    ...(input.taskToken != null && { taskToken: input.taskToken }),
  };
};

/**
 * serializeAws_json1_0SendTaskHeartbeatInput
 */
const se_SendTaskHeartbeatInput = (input: SendTaskHeartbeatInput, context: __SerdeContext): any => {
  return {
    ...(input.taskToken != null && { taskToken: input.taskToken }),
  };
};

/**
 * serializeAws_json1_0SendTaskSuccessInput
 */
const se_SendTaskSuccessInput = (input: SendTaskSuccessInput, context: __SerdeContext): any => {
  return {
    ...(input.output != null && { output: input.output }),
    ...(input.taskToken != null && { taskToken: input.taskToken }),
  };
};

/**
 * serializeAws_json1_0StartExecutionInput
 */
const se_StartExecutionInput = (input: StartExecutionInput, context: __SerdeContext): any => {
  return {
    ...(input.input != null && { input: input.input }),
    ...(input.name != null && { name: input.name }),
    ...(input.stateMachineArn != null && { stateMachineArn: input.stateMachineArn }),
    ...(input.traceHeader != null && { traceHeader: input.traceHeader }),
  };
};

/**
 * serializeAws_json1_0StartSyncExecutionInput
 */
const se_StartSyncExecutionInput = (input: StartSyncExecutionInput, context: __SerdeContext): any => {
  return {
    ...(input.input != null && { input: input.input }),
    ...(input.name != null && { name: input.name }),
    ...(input.stateMachineArn != null && { stateMachineArn: input.stateMachineArn }),
    ...(input.traceHeader != null && { traceHeader: input.traceHeader }),
  };
};

/**
 * serializeAws_json1_0StopExecutionInput
 */
const se_StopExecutionInput = (input: StopExecutionInput, context: __SerdeContext): any => {
  return {
    ...(input.cause != null && { cause: input.cause }),
    ...(input.error != null && { error: input.error }),
    ...(input.executionArn != null && { executionArn: input.executionArn }),
  };
};

/**
 * serializeAws_json1_0Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.key != null && { key: input.key }),
    ...(input.value != null && { value: input.value }),
  };
};

/**
 * serializeAws_json1_0TagKeyList
 */
const se_TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_0TagList
 */
const se_TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_json1_0TagResourceInput
 */
const se_TagResourceInput = (input: TagResourceInput, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_0TracingConfiguration
 */
const se_TracingConfiguration = (input: TracingConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.enabled != null && { enabled: input.enabled }),
  };
};

/**
 * serializeAws_json1_0UntagResourceInput
 */
const se_UntagResourceInput = (input: UntagResourceInput, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
    ...(input.tagKeys != null && { tagKeys: se_TagKeyList(input.tagKeys, context) }),
  };
};

/**
 * serializeAws_json1_0UpdateMapRunInput
 */
const se_UpdateMapRunInput = (input: UpdateMapRunInput, context: __SerdeContext): any => {
  return {
    ...(input.mapRunArn != null && { mapRunArn: input.mapRunArn }),
    ...(input.maxConcurrency != null && { maxConcurrency: input.maxConcurrency }),
    ...(input.toleratedFailureCount != null && { toleratedFailureCount: input.toleratedFailureCount }),
    ...(input.toleratedFailurePercentage != null && {
      toleratedFailurePercentage: __serializeFloat(input.toleratedFailurePercentage),
    }),
  };
};

/**
 * serializeAws_json1_0UpdateStateMachineInput
 */
const se_UpdateStateMachineInput = (input: UpdateStateMachineInput, context: __SerdeContext): any => {
  return {
    ...(input.definition != null && { definition: input.definition }),
    ...(input.loggingConfiguration != null && {
      loggingConfiguration: se_LoggingConfiguration(input.loggingConfiguration, context),
    }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
    ...(input.stateMachineArn != null && { stateMachineArn: input.stateMachineArn }),
    ...(input.tracingConfiguration != null && {
      tracingConfiguration: se_TracingConfiguration(input.tracingConfiguration, context),
    }),
  };
};

/**
 * deserializeAws_json1_0ActivityDoesNotExist
 */
const de_ActivityDoesNotExist = (output: any, context: __SerdeContext): ActivityDoesNotExist => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0ActivityFailedEventDetails
 */
const de_ActivityFailedEventDetails = (output: any, context: __SerdeContext): ActivityFailedEventDetails => {
  return {
    cause: __expectString(output.cause),
    error: __expectString(output.error),
  } as any;
};

/**
 * deserializeAws_json1_0ActivityLimitExceeded
 */
const de_ActivityLimitExceeded = (output: any, context: __SerdeContext): ActivityLimitExceeded => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0ActivityList
 */
const de_ActivityList = (output: any, context: __SerdeContext): ActivityListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ActivityListItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ActivityListItem
 */
const de_ActivityListItem = (output: any, context: __SerdeContext): ActivityListItem => {
  return {
    activityArn: __expectString(output.activityArn),
    creationDate:
      output.creationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDate)))
        : undefined,
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_json1_0ActivityScheduledEventDetails
 */
const de_ActivityScheduledEventDetails = (output: any, context: __SerdeContext): ActivityScheduledEventDetails => {
  return {
    heartbeatInSeconds: __expectLong(output.heartbeatInSeconds),
    input: __expectString(output.input),
    inputDetails:
      output.inputDetails != null ? de_HistoryEventExecutionDataDetails(output.inputDetails, context) : undefined,
    resource: __expectString(output.resource),
    timeoutInSeconds: __expectLong(output.timeoutInSeconds),
  } as any;
};

/**
 * deserializeAws_json1_0ActivityScheduleFailedEventDetails
 */
const de_ActivityScheduleFailedEventDetails = (
  output: any,
  context: __SerdeContext
): ActivityScheduleFailedEventDetails => {
  return {
    cause: __expectString(output.cause),
    error: __expectString(output.error),
  } as any;
};

/**
 * deserializeAws_json1_0ActivityStartedEventDetails
 */
const de_ActivityStartedEventDetails = (output: any, context: __SerdeContext): ActivityStartedEventDetails => {
  return {
    workerName: __expectString(output.workerName),
  } as any;
};

/**
 * deserializeAws_json1_0ActivitySucceededEventDetails
 */
const de_ActivitySucceededEventDetails = (output: any, context: __SerdeContext): ActivitySucceededEventDetails => {
  return {
    output: __expectString(output.output),
    outputDetails:
      output.outputDetails != null ? de_HistoryEventExecutionDataDetails(output.outputDetails, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ActivityTimedOutEventDetails
 */
const de_ActivityTimedOutEventDetails = (output: any, context: __SerdeContext): ActivityTimedOutEventDetails => {
  return {
    cause: __expectString(output.cause),
    error: __expectString(output.error),
  } as any;
};

/**
 * deserializeAws_json1_0ActivityWorkerLimitExceeded
 */
const de_ActivityWorkerLimitExceeded = (output: any, context: __SerdeContext): ActivityWorkerLimitExceeded => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0BillingDetails
 */
const de_BillingDetails = (output: any, context: __SerdeContext): BillingDetails => {
  return {
    billedDurationInMilliseconds: __expectLong(output.billedDurationInMilliseconds),
    billedMemoryUsedInMB: __expectLong(output.billedMemoryUsedInMB),
  } as any;
};

/**
 * deserializeAws_json1_0CloudWatchEventsExecutionDataDetails
 */
const de_CloudWatchEventsExecutionDataDetails = (
  output: any,
  context: __SerdeContext
): CloudWatchEventsExecutionDataDetails => {
  return {
    included: __expectBoolean(output.included),
  } as any;
};

/**
 * deserializeAws_json1_0CloudWatchLogsLogGroup
 */
const de_CloudWatchLogsLogGroup = (output: any, context: __SerdeContext): CloudWatchLogsLogGroup => {
  return {
    logGroupArn: __expectString(output.logGroupArn),
  } as any;
};

/**
 * deserializeAws_json1_0CreateActivityOutput
 */
const de_CreateActivityOutput = (output: any, context: __SerdeContext): CreateActivityOutput => {
  return {
    activityArn: __expectString(output.activityArn),
    creationDate:
      output.creationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDate)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0CreateStateMachineOutput
 */
const de_CreateStateMachineOutput = (output: any, context: __SerdeContext): CreateStateMachineOutput => {
  return {
    creationDate:
      output.creationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDate)))
        : undefined,
    stateMachineArn: __expectString(output.stateMachineArn),
  } as any;
};

/**
 * deserializeAws_json1_0DeleteActivityOutput
 */
const de_DeleteActivityOutput = (output: any, context: __SerdeContext): DeleteActivityOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_0DeleteStateMachineOutput
 */
const de_DeleteStateMachineOutput = (output: any, context: __SerdeContext): DeleteStateMachineOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_0DescribeActivityOutput
 */
const de_DescribeActivityOutput = (output: any, context: __SerdeContext): DescribeActivityOutput => {
  return {
    activityArn: __expectString(output.activityArn),
    creationDate:
      output.creationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDate)))
        : undefined,
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_json1_0DescribeExecutionOutput
 */
const de_DescribeExecutionOutput = (output: any, context: __SerdeContext): DescribeExecutionOutput => {
  return {
    cause: __expectString(output.cause),
    error: __expectString(output.error),
    executionArn: __expectString(output.executionArn),
    input: __expectString(output.input),
    inputDetails:
      output.inputDetails != null ? de_CloudWatchEventsExecutionDataDetails(output.inputDetails, context) : undefined,
    mapRunArn: __expectString(output.mapRunArn),
    name: __expectString(output.name),
    output: __expectString(output.output),
    outputDetails:
      output.outputDetails != null ? de_CloudWatchEventsExecutionDataDetails(output.outputDetails, context) : undefined,
    startDate:
      output.startDate != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startDate))) : undefined,
    stateMachineArn: __expectString(output.stateMachineArn),
    status: __expectString(output.status),
    stopDate:
      output.stopDate != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.stopDate))) : undefined,
    traceHeader: __expectString(output.traceHeader),
  } as any;
};

/**
 * deserializeAws_json1_0DescribeMapRunOutput
 */
const de_DescribeMapRunOutput = (output: any, context: __SerdeContext): DescribeMapRunOutput => {
  return {
    executionArn: __expectString(output.executionArn),
    executionCounts:
      output.executionCounts != null ? de_MapRunExecutionCounts(output.executionCounts, context) : undefined,
    itemCounts: output.itemCounts != null ? de_MapRunItemCounts(output.itemCounts, context) : undefined,
    mapRunArn: __expectString(output.mapRunArn),
    maxConcurrency: __expectInt32(output.maxConcurrency),
    startDate:
      output.startDate != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startDate))) : undefined,
    status: __expectString(output.status),
    stopDate:
      output.stopDate != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.stopDate))) : undefined,
    toleratedFailureCount: __expectLong(output.toleratedFailureCount),
    toleratedFailurePercentage: __limitedParseFloat32(output.toleratedFailurePercentage),
  } as any;
};

/**
 * deserializeAws_json1_0DescribeStateMachineForExecutionOutput
 */
const de_DescribeStateMachineForExecutionOutput = (
  output: any,
  context: __SerdeContext
): DescribeStateMachineForExecutionOutput => {
  return {
    definition: __expectString(output.definition),
    label: __expectString(output.label),
    loggingConfiguration:
      output.loggingConfiguration != null ? de_LoggingConfiguration(output.loggingConfiguration, context) : undefined,
    mapRunArn: __expectString(output.mapRunArn),
    name: __expectString(output.name),
    roleArn: __expectString(output.roleArn),
    stateMachineArn: __expectString(output.stateMachineArn),
    tracingConfiguration:
      output.tracingConfiguration != null ? de_TracingConfiguration(output.tracingConfiguration, context) : undefined,
    updateDate:
      output.updateDate != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.updateDate))) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DescribeStateMachineOutput
 */
const de_DescribeStateMachineOutput = (output: any, context: __SerdeContext): DescribeStateMachineOutput => {
  return {
    creationDate:
      output.creationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDate)))
        : undefined,
    definition: __expectString(output.definition),
    label: __expectString(output.label),
    loggingConfiguration:
      output.loggingConfiguration != null ? de_LoggingConfiguration(output.loggingConfiguration, context) : undefined,
    name: __expectString(output.name),
    roleArn: __expectString(output.roleArn),
    stateMachineArn: __expectString(output.stateMachineArn),
    status: __expectString(output.status),
    tracingConfiguration:
      output.tracingConfiguration != null ? de_TracingConfiguration(output.tracingConfiguration, context) : undefined,
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_json1_0ExecutionAbortedEventDetails
 */
const de_ExecutionAbortedEventDetails = (output: any, context: __SerdeContext): ExecutionAbortedEventDetails => {
  return {
    cause: __expectString(output.cause),
    error: __expectString(output.error),
  } as any;
};

/**
 * deserializeAws_json1_0ExecutionAlreadyExists
 */
const de_ExecutionAlreadyExists = (output: any, context: __SerdeContext): ExecutionAlreadyExists => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0ExecutionDoesNotExist
 */
const de_ExecutionDoesNotExist = (output: any, context: __SerdeContext): ExecutionDoesNotExist => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0ExecutionFailedEventDetails
 */
const de_ExecutionFailedEventDetails = (output: any, context: __SerdeContext): ExecutionFailedEventDetails => {
  return {
    cause: __expectString(output.cause),
    error: __expectString(output.error),
  } as any;
};

/**
 * deserializeAws_json1_0ExecutionLimitExceeded
 */
const de_ExecutionLimitExceeded = (output: any, context: __SerdeContext): ExecutionLimitExceeded => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0ExecutionList
 */
const de_ExecutionList = (output: any, context: __SerdeContext): ExecutionListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ExecutionListItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ExecutionListItem
 */
const de_ExecutionListItem = (output: any, context: __SerdeContext): ExecutionListItem => {
  return {
    executionArn: __expectString(output.executionArn),
    itemCount: __expectInt32(output.itemCount),
    mapRunArn: __expectString(output.mapRunArn),
    name: __expectString(output.name),
    startDate:
      output.startDate != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startDate))) : undefined,
    stateMachineArn: __expectString(output.stateMachineArn),
    status: __expectString(output.status),
    stopDate:
      output.stopDate != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.stopDate))) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ExecutionStartedEventDetails
 */
const de_ExecutionStartedEventDetails = (output: any, context: __SerdeContext): ExecutionStartedEventDetails => {
  return {
    input: __expectString(output.input),
    inputDetails:
      output.inputDetails != null ? de_HistoryEventExecutionDataDetails(output.inputDetails, context) : undefined,
    roleArn: __expectString(output.roleArn),
  } as any;
};

/**
 * deserializeAws_json1_0ExecutionSucceededEventDetails
 */
const de_ExecutionSucceededEventDetails = (output: any, context: __SerdeContext): ExecutionSucceededEventDetails => {
  return {
    output: __expectString(output.output),
    outputDetails:
      output.outputDetails != null ? de_HistoryEventExecutionDataDetails(output.outputDetails, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ExecutionTimedOutEventDetails
 */
const de_ExecutionTimedOutEventDetails = (output: any, context: __SerdeContext): ExecutionTimedOutEventDetails => {
  return {
    cause: __expectString(output.cause),
    error: __expectString(output.error),
  } as any;
};

/**
 * deserializeAws_json1_0GetActivityTaskOutput
 */
const de_GetActivityTaskOutput = (output: any, context: __SerdeContext): GetActivityTaskOutput => {
  return {
    input: __expectString(output.input),
    taskToken: __expectString(output.taskToken),
  } as any;
};

/**
 * deserializeAws_json1_0GetExecutionHistoryOutput
 */
const de_GetExecutionHistoryOutput = (output: any, context: __SerdeContext): GetExecutionHistoryOutput => {
  return {
    events: output.events != null ? de_HistoryEventList(output.events, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_0HistoryEvent
 */
const de_HistoryEvent = (output: any, context: __SerdeContext): HistoryEvent => {
  return {
    activityFailedEventDetails:
      output.activityFailedEventDetails != null
        ? de_ActivityFailedEventDetails(output.activityFailedEventDetails, context)
        : undefined,
    activityScheduleFailedEventDetails:
      output.activityScheduleFailedEventDetails != null
        ? de_ActivityScheduleFailedEventDetails(output.activityScheduleFailedEventDetails, context)
        : undefined,
    activityScheduledEventDetails:
      output.activityScheduledEventDetails != null
        ? de_ActivityScheduledEventDetails(output.activityScheduledEventDetails, context)
        : undefined,
    activityStartedEventDetails:
      output.activityStartedEventDetails != null
        ? de_ActivityStartedEventDetails(output.activityStartedEventDetails, context)
        : undefined,
    activitySucceededEventDetails:
      output.activitySucceededEventDetails != null
        ? de_ActivitySucceededEventDetails(output.activitySucceededEventDetails, context)
        : undefined,
    activityTimedOutEventDetails:
      output.activityTimedOutEventDetails != null
        ? de_ActivityTimedOutEventDetails(output.activityTimedOutEventDetails, context)
        : undefined,
    executionAbortedEventDetails:
      output.executionAbortedEventDetails != null
        ? de_ExecutionAbortedEventDetails(output.executionAbortedEventDetails, context)
        : undefined,
    executionFailedEventDetails:
      output.executionFailedEventDetails != null
        ? de_ExecutionFailedEventDetails(output.executionFailedEventDetails, context)
        : undefined,
    executionStartedEventDetails:
      output.executionStartedEventDetails != null
        ? de_ExecutionStartedEventDetails(output.executionStartedEventDetails, context)
        : undefined,
    executionSucceededEventDetails:
      output.executionSucceededEventDetails != null
        ? de_ExecutionSucceededEventDetails(output.executionSucceededEventDetails, context)
        : undefined,
    executionTimedOutEventDetails:
      output.executionTimedOutEventDetails != null
        ? de_ExecutionTimedOutEventDetails(output.executionTimedOutEventDetails, context)
        : undefined,
    id: __expectLong(output.id),
    lambdaFunctionFailedEventDetails:
      output.lambdaFunctionFailedEventDetails != null
        ? de_LambdaFunctionFailedEventDetails(output.lambdaFunctionFailedEventDetails, context)
        : undefined,
    lambdaFunctionScheduleFailedEventDetails:
      output.lambdaFunctionScheduleFailedEventDetails != null
        ? de_LambdaFunctionScheduleFailedEventDetails(output.lambdaFunctionScheduleFailedEventDetails, context)
        : undefined,
    lambdaFunctionScheduledEventDetails:
      output.lambdaFunctionScheduledEventDetails != null
        ? de_LambdaFunctionScheduledEventDetails(output.lambdaFunctionScheduledEventDetails, context)
        : undefined,
    lambdaFunctionStartFailedEventDetails:
      output.lambdaFunctionStartFailedEventDetails != null
        ? de_LambdaFunctionStartFailedEventDetails(output.lambdaFunctionStartFailedEventDetails, context)
        : undefined,
    lambdaFunctionSucceededEventDetails:
      output.lambdaFunctionSucceededEventDetails != null
        ? de_LambdaFunctionSucceededEventDetails(output.lambdaFunctionSucceededEventDetails, context)
        : undefined,
    lambdaFunctionTimedOutEventDetails:
      output.lambdaFunctionTimedOutEventDetails != null
        ? de_LambdaFunctionTimedOutEventDetails(output.lambdaFunctionTimedOutEventDetails, context)
        : undefined,
    mapIterationAbortedEventDetails:
      output.mapIterationAbortedEventDetails != null
        ? de_MapIterationEventDetails(output.mapIterationAbortedEventDetails, context)
        : undefined,
    mapIterationFailedEventDetails:
      output.mapIterationFailedEventDetails != null
        ? de_MapIterationEventDetails(output.mapIterationFailedEventDetails, context)
        : undefined,
    mapIterationStartedEventDetails:
      output.mapIterationStartedEventDetails != null
        ? de_MapIterationEventDetails(output.mapIterationStartedEventDetails, context)
        : undefined,
    mapIterationSucceededEventDetails:
      output.mapIterationSucceededEventDetails != null
        ? de_MapIterationEventDetails(output.mapIterationSucceededEventDetails, context)
        : undefined,
    mapRunFailedEventDetails:
      output.mapRunFailedEventDetails != null
        ? de_MapRunFailedEventDetails(output.mapRunFailedEventDetails, context)
        : undefined,
    mapRunStartedEventDetails:
      output.mapRunStartedEventDetails != null
        ? de_MapRunStartedEventDetails(output.mapRunStartedEventDetails, context)
        : undefined,
    mapStateStartedEventDetails:
      output.mapStateStartedEventDetails != null
        ? de_MapStateStartedEventDetails(output.mapStateStartedEventDetails, context)
        : undefined,
    previousEventId: __expectLong(output.previousEventId),
    stateEnteredEventDetails:
      output.stateEnteredEventDetails != null
        ? de_StateEnteredEventDetails(output.stateEnteredEventDetails, context)
        : undefined,
    stateExitedEventDetails:
      output.stateExitedEventDetails != null
        ? de_StateExitedEventDetails(output.stateExitedEventDetails, context)
        : undefined,
    taskFailedEventDetails:
      output.taskFailedEventDetails != null
        ? de_TaskFailedEventDetails(output.taskFailedEventDetails, context)
        : undefined,
    taskScheduledEventDetails:
      output.taskScheduledEventDetails != null
        ? de_TaskScheduledEventDetails(output.taskScheduledEventDetails, context)
        : undefined,
    taskStartFailedEventDetails:
      output.taskStartFailedEventDetails != null
        ? de_TaskStartFailedEventDetails(output.taskStartFailedEventDetails, context)
        : undefined,
    taskStartedEventDetails:
      output.taskStartedEventDetails != null
        ? de_TaskStartedEventDetails(output.taskStartedEventDetails, context)
        : undefined,
    taskSubmitFailedEventDetails:
      output.taskSubmitFailedEventDetails != null
        ? de_TaskSubmitFailedEventDetails(output.taskSubmitFailedEventDetails, context)
        : undefined,
    taskSubmittedEventDetails:
      output.taskSubmittedEventDetails != null
        ? de_TaskSubmittedEventDetails(output.taskSubmittedEventDetails, context)
        : undefined,
    taskSucceededEventDetails:
      output.taskSucceededEventDetails != null
        ? de_TaskSucceededEventDetails(output.taskSucceededEventDetails, context)
        : undefined,
    taskTimedOutEventDetails:
      output.taskTimedOutEventDetails != null
        ? de_TaskTimedOutEventDetails(output.taskTimedOutEventDetails, context)
        : undefined,
    timestamp:
      output.timestamp != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.timestamp))) : undefined,
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_json1_0HistoryEventExecutionDataDetails
 */
const de_HistoryEventExecutionDataDetails = (
  output: any,
  context: __SerdeContext
): HistoryEventExecutionDataDetails => {
  return {
    truncated: __expectBoolean(output.truncated),
  } as any;
};

/**
 * deserializeAws_json1_0HistoryEventList
 */
const de_HistoryEventList = (output: any, context: __SerdeContext): HistoryEvent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_HistoryEvent(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0InvalidArn
 */
const de_InvalidArn = (output: any, context: __SerdeContext): InvalidArn => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0InvalidDefinition
 */
const de_InvalidDefinition = (output: any, context: __SerdeContext): InvalidDefinition => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0InvalidExecutionInput
 */
const de_InvalidExecutionInput = (output: any, context: __SerdeContext): InvalidExecutionInput => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0InvalidLoggingConfiguration
 */
const de_InvalidLoggingConfiguration = (output: any, context: __SerdeContext): InvalidLoggingConfiguration => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0InvalidName
 */
const de_InvalidName = (output: any, context: __SerdeContext): InvalidName => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0InvalidOutput
 */
const de_InvalidOutput = (output: any, context: __SerdeContext): InvalidOutput => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0InvalidToken
 */
const de_InvalidToken = (output: any, context: __SerdeContext): InvalidToken => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0InvalidTracingConfiguration
 */
const de_InvalidTracingConfiguration = (output: any, context: __SerdeContext): InvalidTracingConfiguration => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0LambdaFunctionFailedEventDetails
 */
const de_LambdaFunctionFailedEventDetails = (
  output: any,
  context: __SerdeContext
): LambdaFunctionFailedEventDetails => {
  return {
    cause: __expectString(output.cause),
    error: __expectString(output.error),
  } as any;
};

/**
 * deserializeAws_json1_0LambdaFunctionScheduledEventDetails
 */
const de_LambdaFunctionScheduledEventDetails = (
  output: any,
  context: __SerdeContext
): LambdaFunctionScheduledEventDetails => {
  return {
    input: __expectString(output.input),
    inputDetails:
      output.inputDetails != null ? de_HistoryEventExecutionDataDetails(output.inputDetails, context) : undefined,
    resource: __expectString(output.resource),
    taskCredentials: output.taskCredentials != null ? de_TaskCredentials(output.taskCredentials, context) : undefined,
    timeoutInSeconds: __expectLong(output.timeoutInSeconds),
  } as any;
};

/**
 * deserializeAws_json1_0LambdaFunctionScheduleFailedEventDetails
 */
const de_LambdaFunctionScheduleFailedEventDetails = (
  output: any,
  context: __SerdeContext
): LambdaFunctionScheduleFailedEventDetails => {
  return {
    cause: __expectString(output.cause),
    error: __expectString(output.error),
  } as any;
};

/**
 * deserializeAws_json1_0LambdaFunctionStartFailedEventDetails
 */
const de_LambdaFunctionStartFailedEventDetails = (
  output: any,
  context: __SerdeContext
): LambdaFunctionStartFailedEventDetails => {
  return {
    cause: __expectString(output.cause),
    error: __expectString(output.error),
  } as any;
};

/**
 * deserializeAws_json1_0LambdaFunctionSucceededEventDetails
 */
const de_LambdaFunctionSucceededEventDetails = (
  output: any,
  context: __SerdeContext
): LambdaFunctionSucceededEventDetails => {
  return {
    output: __expectString(output.output),
    outputDetails:
      output.outputDetails != null ? de_HistoryEventExecutionDataDetails(output.outputDetails, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0LambdaFunctionTimedOutEventDetails
 */
const de_LambdaFunctionTimedOutEventDetails = (
  output: any,
  context: __SerdeContext
): LambdaFunctionTimedOutEventDetails => {
  return {
    cause: __expectString(output.cause),
    error: __expectString(output.error),
  } as any;
};

/**
 * deserializeAws_json1_0ListActivitiesOutput
 */
const de_ListActivitiesOutput = (output: any, context: __SerdeContext): ListActivitiesOutput => {
  return {
    activities: output.activities != null ? de_ActivityList(output.activities, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_0ListExecutionsOutput
 */
const de_ListExecutionsOutput = (output: any, context: __SerdeContext): ListExecutionsOutput => {
  return {
    executions: output.executions != null ? de_ExecutionList(output.executions, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_0ListMapRunsOutput
 */
const de_ListMapRunsOutput = (output: any, context: __SerdeContext): ListMapRunsOutput => {
  return {
    mapRuns: output.mapRuns != null ? de_MapRunList(output.mapRuns, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_0ListStateMachinesOutput
 */
const de_ListStateMachinesOutput = (output: any, context: __SerdeContext): ListStateMachinesOutput => {
  return {
    nextToken: __expectString(output.nextToken),
    stateMachines: output.stateMachines != null ? de_StateMachineList(output.stateMachines, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ListTagsForResourceOutput
 */
const de_ListTagsForResourceOutput = (output: any, context: __SerdeContext): ListTagsForResourceOutput => {
  return {
    tags: output.tags != null ? de_TagList(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0LogDestination
 */
const de_LogDestination = (output: any, context: __SerdeContext): LogDestination => {
  return {
    cloudWatchLogsLogGroup:
      output.cloudWatchLogsLogGroup != null
        ? de_CloudWatchLogsLogGroup(output.cloudWatchLogsLogGroup, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0LogDestinationList
 */
const de_LogDestinationList = (output: any, context: __SerdeContext): LogDestination[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LogDestination(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0LoggingConfiguration
 */
const de_LoggingConfiguration = (output: any, context: __SerdeContext): LoggingConfiguration => {
  return {
    destinations: output.destinations != null ? de_LogDestinationList(output.destinations, context) : undefined,
    includeExecutionData: __expectBoolean(output.includeExecutionData),
    level: __expectString(output.level),
  } as any;
};

/**
 * deserializeAws_json1_0MapIterationEventDetails
 */
const de_MapIterationEventDetails = (output: any, context: __SerdeContext): MapIterationEventDetails => {
  return {
    index: __expectInt32(output.index),
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_json1_0MapRunExecutionCounts
 */
const de_MapRunExecutionCounts = (output: any, context: __SerdeContext): MapRunExecutionCounts => {
  return {
    aborted: __expectLong(output.aborted),
    failed: __expectLong(output.failed),
    pending: __expectLong(output.pending),
    resultsWritten: __expectLong(output.resultsWritten),
    running: __expectLong(output.running),
    succeeded: __expectLong(output.succeeded),
    timedOut: __expectLong(output.timedOut),
    total: __expectLong(output.total),
  } as any;
};

/**
 * deserializeAws_json1_0MapRunFailedEventDetails
 */
const de_MapRunFailedEventDetails = (output: any, context: __SerdeContext): MapRunFailedEventDetails => {
  return {
    cause: __expectString(output.cause),
    error: __expectString(output.error),
  } as any;
};

/**
 * deserializeAws_json1_0MapRunItemCounts
 */
const de_MapRunItemCounts = (output: any, context: __SerdeContext): MapRunItemCounts => {
  return {
    aborted: __expectLong(output.aborted),
    failed: __expectLong(output.failed),
    pending: __expectLong(output.pending),
    resultsWritten: __expectLong(output.resultsWritten),
    running: __expectLong(output.running),
    succeeded: __expectLong(output.succeeded),
    timedOut: __expectLong(output.timedOut),
    total: __expectLong(output.total),
  } as any;
};

/**
 * deserializeAws_json1_0MapRunList
 */
const de_MapRunList = (output: any, context: __SerdeContext): MapRunListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MapRunListItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0MapRunListItem
 */
const de_MapRunListItem = (output: any, context: __SerdeContext): MapRunListItem => {
  return {
    executionArn: __expectString(output.executionArn),
    mapRunArn: __expectString(output.mapRunArn),
    startDate:
      output.startDate != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startDate))) : undefined,
    stateMachineArn: __expectString(output.stateMachineArn),
    stopDate:
      output.stopDate != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.stopDate))) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0MapRunStartedEventDetails
 */
const de_MapRunStartedEventDetails = (output: any, context: __SerdeContext): MapRunStartedEventDetails => {
  return {
    mapRunArn: __expectString(output.mapRunArn),
  } as any;
};

/**
 * deserializeAws_json1_0MapStateStartedEventDetails
 */
const de_MapStateStartedEventDetails = (output: any, context: __SerdeContext): MapStateStartedEventDetails => {
  return {
    length: __expectInt32(output.length),
  } as any;
};

/**
 * deserializeAws_json1_0MissingRequiredParameter
 */
const de_MissingRequiredParameter = (output: any, context: __SerdeContext): MissingRequiredParameter => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0ResourceNotFound
 */
const de_ResourceNotFound = (output: any, context: __SerdeContext): ResourceNotFound => {
  return {
    message: __expectString(output.message),
    resourceName: __expectString(output.resourceName),
  } as any;
};

/**
 * deserializeAws_json1_0SendTaskFailureOutput
 */
const de_SendTaskFailureOutput = (output: any, context: __SerdeContext): SendTaskFailureOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_0SendTaskHeartbeatOutput
 */
const de_SendTaskHeartbeatOutput = (output: any, context: __SerdeContext): SendTaskHeartbeatOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_0SendTaskSuccessOutput
 */
const de_SendTaskSuccessOutput = (output: any, context: __SerdeContext): SendTaskSuccessOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_0StartExecutionOutput
 */
const de_StartExecutionOutput = (output: any, context: __SerdeContext): StartExecutionOutput => {
  return {
    executionArn: __expectString(output.executionArn),
    startDate:
      output.startDate != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startDate))) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0StartSyncExecutionOutput
 */
const de_StartSyncExecutionOutput = (output: any, context: __SerdeContext): StartSyncExecutionOutput => {
  return {
    billingDetails: output.billingDetails != null ? de_BillingDetails(output.billingDetails, context) : undefined,
    cause: __expectString(output.cause),
    error: __expectString(output.error),
    executionArn: __expectString(output.executionArn),
    input: __expectString(output.input),
    inputDetails:
      output.inputDetails != null ? de_CloudWatchEventsExecutionDataDetails(output.inputDetails, context) : undefined,
    name: __expectString(output.name),
    output: __expectString(output.output),
    outputDetails:
      output.outputDetails != null ? de_CloudWatchEventsExecutionDataDetails(output.outputDetails, context) : undefined,
    startDate:
      output.startDate != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startDate))) : undefined,
    stateMachineArn: __expectString(output.stateMachineArn),
    status: __expectString(output.status),
    stopDate:
      output.stopDate != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.stopDate))) : undefined,
    traceHeader: __expectString(output.traceHeader),
  } as any;
};

/**
 * deserializeAws_json1_0StateEnteredEventDetails
 */
const de_StateEnteredEventDetails = (output: any, context: __SerdeContext): StateEnteredEventDetails => {
  return {
    input: __expectString(output.input),
    inputDetails:
      output.inputDetails != null ? de_HistoryEventExecutionDataDetails(output.inputDetails, context) : undefined,
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_json1_0StateExitedEventDetails
 */
const de_StateExitedEventDetails = (output: any, context: __SerdeContext): StateExitedEventDetails => {
  return {
    name: __expectString(output.name),
    output: __expectString(output.output),
    outputDetails:
      output.outputDetails != null ? de_HistoryEventExecutionDataDetails(output.outputDetails, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0StateMachineAlreadyExists
 */
const de_StateMachineAlreadyExists = (output: any, context: __SerdeContext): StateMachineAlreadyExists => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0StateMachineDeleting
 */
const de_StateMachineDeleting = (output: any, context: __SerdeContext): StateMachineDeleting => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0StateMachineDoesNotExist
 */
const de_StateMachineDoesNotExist = (output: any, context: __SerdeContext): StateMachineDoesNotExist => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0StateMachineLimitExceeded
 */
const de_StateMachineLimitExceeded = (output: any, context: __SerdeContext): StateMachineLimitExceeded => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0StateMachineList
 */
const de_StateMachineList = (output: any, context: __SerdeContext): StateMachineListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_StateMachineListItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0StateMachineListItem
 */
const de_StateMachineListItem = (output: any, context: __SerdeContext): StateMachineListItem => {
  return {
    creationDate:
      output.creationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDate)))
        : undefined,
    name: __expectString(output.name),
    stateMachineArn: __expectString(output.stateMachineArn),
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_json1_0StateMachineTypeNotSupported
 */
const de_StateMachineTypeNotSupported = (output: any, context: __SerdeContext): StateMachineTypeNotSupported => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0StopExecutionOutput
 */
const de_StopExecutionOutput = (output: any, context: __SerdeContext): StopExecutionOutput => {
  return {
    stopDate:
      output.stopDate != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.stopDate))) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    key: __expectString(output.key),
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_json1_0TagList
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
 * deserializeAws_json1_0TagResourceOutput
 */
const de_TagResourceOutput = (output: any, context: __SerdeContext): TagResourceOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_0TaskCredentials
 */
const de_TaskCredentials = (output: any, context: __SerdeContext): TaskCredentials => {
  return {
    roleArn: __expectString(output.roleArn),
  } as any;
};

/**
 * deserializeAws_json1_0TaskDoesNotExist
 */
const de_TaskDoesNotExist = (output: any, context: __SerdeContext): TaskDoesNotExist => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0TaskFailedEventDetails
 */
const de_TaskFailedEventDetails = (output: any, context: __SerdeContext): TaskFailedEventDetails => {
  return {
    cause: __expectString(output.cause),
    error: __expectString(output.error),
    resource: __expectString(output.resource),
    resourceType: __expectString(output.resourceType),
  } as any;
};

/**
 * deserializeAws_json1_0TaskScheduledEventDetails
 */
const de_TaskScheduledEventDetails = (output: any, context: __SerdeContext): TaskScheduledEventDetails => {
  return {
    heartbeatInSeconds: __expectLong(output.heartbeatInSeconds),
    parameters: __expectString(output.parameters),
    region: __expectString(output.region),
    resource: __expectString(output.resource),
    resourceType: __expectString(output.resourceType),
    taskCredentials: output.taskCredentials != null ? de_TaskCredentials(output.taskCredentials, context) : undefined,
    timeoutInSeconds: __expectLong(output.timeoutInSeconds),
  } as any;
};

/**
 * deserializeAws_json1_0TaskStartedEventDetails
 */
const de_TaskStartedEventDetails = (output: any, context: __SerdeContext): TaskStartedEventDetails => {
  return {
    resource: __expectString(output.resource),
    resourceType: __expectString(output.resourceType),
  } as any;
};

/**
 * deserializeAws_json1_0TaskStartFailedEventDetails
 */
const de_TaskStartFailedEventDetails = (output: any, context: __SerdeContext): TaskStartFailedEventDetails => {
  return {
    cause: __expectString(output.cause),
    error: __expectString(output.error),
    resource: __expectString(output.resource),
    resourceType: __expectString(output.resourceType),
  } as any;
};

/**
 * deserializeAws_json1_0TaskSubmitFailedEventDetails
 */
const de_TaskSubmitFailedEventDetails = (output: any, context: __SerdeContext): TaskSubmitFailedEventDetails => {
  return {
    cause: __expectString(output.cause),
    error: __expectString(output.error),
    resource: __expectString(output.resource),
    resourceType: __expectString(output.resourceType),
  } as any;
};

/**
 * deserializeAws_json1_0TaskSubmittedEventDetails
 */
const de_TaskSubmittedEventDetails = (output: any, context: __SerdeContext): TaskSubmittedEventDetails => {
  return {
    output: __expectString(output.output),
    outputDetails:
      output.outputDetails != null ? de_HistoryEventExecutionDataDetails(output.outputDetails, context) : undefined,
    resource: __expectString(output.resource),
    resourceType: __expectString(output.resourceType),
  } as any;
};

/**
 * deserializeAws_json1_0TaskSucceededEventDetails
 */
const de_TaskSucceededEventDetails = (output: any, context: __SerdeContext): TaskSucceededEventDetails => {
  return {
    output: __expectString(output.output),
    outputDetails:
      output.outputDetails != null ? de_HistoryEventExecutionDataDetails(output.outputDetails, context) : undefined,
    resource: __expectString(output.resource),
    resourceType: __expectString(output.resourceType),
  } as any;
};

/**
 * deserializeAws_json1_0TaskTimedOut
 */
const de_TaskTimedOut = (output: any, context: __SerdeContext): TaskTimedOut => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0TaskTimedOutEventDetails
 */
const de_TaskTimedOutEventDetails = (output: any, context: __SerdeContext): TaskTimedOutEventDetails => {
  return {
    cause: __expectString(output.cause),
    error: __expectString(output.error),
    resource: __expectString(output.resource),
    resourceType: __expectString(output.resourceType),
  } as any;
};

/**
 * deserializeAws_json1_0TooManyTags
 */
const de_TooManyTags = (output: any, context: __SerdeContext): TooManyTags => {
  return {
    message: __expectString(output.message),
    resourceName: __expectString(output.resourceName),
  } as any;
};

/**
 * deserializeAws_json1_0TracingConfiguration
 */
const de_TracingConfiguration = (output: any, context: __SerdeContext): TracingConfiguration => {
  return {
    enabled: __expectBoolean(output.enabled),
  } as any;
};

/**
 * deserializeAws_json1_0UntagResourceOutput
 */
const de_UntagResourceOutput = (output: any, context: __SerdeContext): UntagResourceOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_0UpdateMapRunOutput
 */
const de_UpdateMapRunOutput = (output: any, context: __SerdeContext): UpdateMapRunOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_0UpdateStateMachineOutput
 */
const de_UpdateStateMachineOutput = (output: any, context: __SerdeContext): UpdateStateMachineOutput => {
  return {
    updateDate:
      output.updateDate != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.updateDate))) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ValidationException
 */
const de_ValidationException = (output: any, context: __SerdeContext): ValidationException => {
  return {
    message: __expectString(output.message),
    reason: __expectString(output.reason),
  } as any;
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
